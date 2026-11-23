import { NextResponse } from "next/server";
import { z, type ZodType } from "zod";
import type { Model } from "mongoose";
import { connectDB } from "./mongodb";
import { rateLimit } from "./rate-limit";

type Json = { ok: boolean; message?: string; errors?: Record<string, string[]> };

function json(body: Json, status = 200) {
  return NextResponse.json(body, { status });
}

function clientIp(req: Request) {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
}

/**
 * Shared handler for every public form endpoint:
 * rate limit → parse JSON → zod validate → honeypot → duplicate check → persist.
 */
export async function handleSubmission<T extends { hp?: string }>(
  req: Request,
  schema: ZodType<T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  model: Model<any>,
  dedupeKeys: (d: T) => Record<string, unknown>,
  duplicateMessage = "We already received your request recently. Our team will be in touch.",
) {
  const path = new URL(req.url).pathname;
  if (!rateLimit(`${path}:${clientIp(req)}`)) {
    return json({ ok: false, message: "Too many requests. Please wait a minute and try again." }, 429);
  }

  if (Number(req.headers.get("content-length") ?? 0) > 20_000) {
    return json({ ok: false, message: "Request is too large." }, 413);
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return json({ ok: false, message: "Invalid request." }, 400);
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const errors = z.flattenError(parsed.error).fieldErrors as Record<string, string[]>;
    return json({ ok: false, message: "Please correct the highlighted fields.", errors }, 422);
  }

  const { hp, ...data } = parsed.data;
  if (hp) return json({ ok: true }); // bot: pretend success, store nothing

  try {
    await connectDB();
    const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const dup = await model.exists({ ...dedupeKeys(parsed.data), createdAt: { $gte: since } });
    if (dup) return json({ ok: false, message: duplicateMessage }, 409);
    await model.create(data);
    return json({ ok: true }, 201);
  } catch (e) {
    console.error(`[${path}] submission failed`, e);
    return json({ ok: false, message: "Something went wrong on our side. Please try again in a moment." }, 500);
  }
}
