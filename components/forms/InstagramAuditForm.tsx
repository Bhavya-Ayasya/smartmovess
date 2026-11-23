"use client";

import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { COUNTRIES, IG_CATEGORIES, IG_GOALS } from "@/lib/site";
import { instagramAuditSchema } from "@/lib/validations";
import { FormBanner, Honeypot, SelectField, TextAreaField, TextField } from "./fields";
import { useForm } from "./useForm";

const initial = {
  fullName: "",
  email: "",
  phone: "",
  brandName: "",
  instagramHandle: "",
  businessWebsite: "",
  category: "",
  goal: "",
  country: "",
  challenge: "",
  notes: "",
  hp: "",
};

export function InstagramAuditForm({ onDone }: { onDone: () => void }) {
  const router = useRouter();
  const { values, errors, status, message, setValue, submit, submitting } = useForm(
    instagramAuditSchema,
    initial,
    "/api/instagram-audit",
    () => {
      onDone();
      router.push("/instagram-audit/submitted");
    },
  );

  return (
    <form onSubmit={submit} noValidate className="relative">
      <Honeypot value={values.hp} onChange={(v) => setValue("hp", v)} />
      <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
        <TextField label="Full Name" name="fullName" required value={values.fullName} onChange={(v) => setValue("fullName", v)} error={errors.fullName} placeholder="Alex Morgan" autoComplete="name" />
        <TextField label="Email Address" name="email" required type="email" inputMode="email" value={values.email} onChange={(v) => setValue("email", v)} error={errors.email} placeholder="alex.morgan@email.com" autoComplete="email" />
        <TextField label="Phone Number / WhatsApp" name="phone" required type="tel" inputMode="tel" value={values.phone} onChange={(v) => setValue("phone", v)} error={errors.phone} placeholder="+00 00000 00000" autoComplete="tel" />
        <TextField label="Business / Brand Name" name="brandName" required value={values.brandName} onChange={(v) => setValue("brandName", v)} error={errors.brandName} placeholder="Enter your business or brand name" autoComplete="organization" />
        <TextField label="Instagram Profile URL / Username" name="instagramHandle" required value={values.instagramHandle} onChange={(v) => setValue("instagramHandle", v)} error={errors.instagramHandle} placeholder="@yourbrand" autoComplete="off" />
        <TextField label="Business Website" name="businessWebsite" optional inputMode="url" value={values.businessWebsite} onChange={(v) => setValue("businessWebsite", v)} error={errors.businessWebsite} placeholder="www.yourbusiness.com" autoComplete="url" />
        <SelectField label="Business Category" name="category" required value={values.category} onChange={(v) => setValue("category", v)} error={errors.category} options={IG_CATEGORIES} placeholder="Select category" />
        <SelectField label="Primary Instagram Goal" name="goal" required value={values.goal} onChange={(v) => setValue("goal", v)} error={errors.goal} options={IG_GOALS} placeholder="Select your main goal" />
        <SelectField className="sm:col-span-2" label="Country" name="country" required value={values.country} onChange={(v) => setValue("country", v)} error={errors.country} options={COUNTRIES} placeholder="Select country" />
        <TextAreaField className="sm:col-span-2" label="Current Instagram Challenge" name="challenge" required rows={3} value={values.challenge} onChange={(v) => setValue("challenge", v)} error={errors.challenge} placeholder="Tell us what challenges you are currently facing with your Instagram profile..." maxLength={1500} />
        <TextAreaField className="sm:col-span-2" label="Additional Notes" name="notes" optional rows={2} value={values.notes} onChange={(v) => setValue("notes", v)} error={errors.notes} placeholder="Anything else you would like us to know..." maxLength={1500} />
      </div>

      {status === "error" && message && (
        <div className="mt-5">
          <FormBanner tone="error">{message}</FormBanner>
        </div>
      )}

      <div className="sticky bottom-0 z-10 -mx-5 mt-6 border-t border-line bg-white px-5 pb-5 pt-4 sm:static sm:mx-0 sm:mt-[24px] sm:border-0 sm:p-0">
      <button
        type="submit"
        disabled={submitting}
        aria-busy={submitting}
        className="inline-flex h-[56px] w-full items-center justify-center gap-2 rounded-xl bg-teal font-display text-[15px] font-bold uppercase text-white transition-colors hover:bg-[#139488] disabled:cursor-not-allowed disabled:opacity-80"
      >
        {submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden /> Submitting…
          </>
        ) : (
          "Submit Audit Request"
        )}
      </button>
      </div>
    </form>
  );
}
