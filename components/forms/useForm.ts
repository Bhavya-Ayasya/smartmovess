"use client";

import { useCallback, useRef, useState } from "react";
import { z, type ZodType } from "zod";

export type Status = "idle" | "submitting" | "success" | "error";

type Errors<T> = Partial<Record<keyof T, string>>;

/**
 * Small form controller: controlled values, zod validation (same schema the
 * server uses), a single in-flight submit, and server error mapping.
 */
export function useForm<T extends Record<string, string>>(
  schema: ZodType<unknown>,
  initial: T,
  endpoint: string,
  onSuccess?: () => void,
) {
  const [values, setValues] = useState<T>(initial);
  const [errors, setErrors] = useState<Errors<T>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");
  const inFlight = useRef(false);

  const setValue = useCallback(<K extends keyof T>(key: K, value: T[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  }, []);

  const submit = useCallback(
    async (e?: React.FormEvent) => {
      e?.preventDefault();
      if (inFlight.current) return; // block double submits
      const parsed = schema.safeParse(values);
      if (!parsed.success) {
        const flat = z.flattenError(parsed.error as z.ZodError<Record<string, unknown>>).fieldErrors as Record<
          string,
          string[] | undefined
        >;
        const next: Errors<T> = {};
        for (const k of Object.keys(flat)) next[k as keyof T] = flat[k]?.[0];
        setErrors(next);
        setStatus("idle");
        setMessage("Please correct the highlighted fields.");
        // focus first invalid field
        requestAnimationFrame(() => {
          document.querySelector<HTMLElement>("[data-invalid='true']")?.focus();
        });
        return;
      }

      inFlight.current = true;
      setStatus("submitting");
      setMessage("");
      setErrors({});
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsed.data),
        });
        const data = (await res.json().catch(() => ({}))) as {
          ok?: boolean;
          message?: string;
          errors?: Record<string, string[]>;
        };
        if (res.ok && data.ok) {
          setStatus("success");
          onSuccess?.();
          return;
        }
        if (data.errors) {
          const next: Errors<T> = {};
          for (const k of Object.keys(data.errors)) next[k as keyof T] = data.errors[k]?.[0];
          setErrors(next);
        }
        setStatus("error");
        setMessage(data.message ?? "Something went wrong. Please try again.");
      } catch {
        setStatus("error");
        setMessage("We couldn't reach the server. Check your connection and try again.");
      } finally {
        inFlight.current = false;
      }
    },
    [schema, values, endpoint, onSuccess],
  );

  const reset = useCallback(() => {
    setValues(initial);
    setErrors({});
    setStatus("idle");
    setMessage("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { values, errors, status, message, setValue, submit, reset, submitting: status === "submitting" };
}
