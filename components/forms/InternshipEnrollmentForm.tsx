"use client";

import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { INTERNSHIP_BATCHES, INTERNSHIP_DOMAINS } from "@/lib/site";
import { internshipSchema } from "@/lib/validations";
import { FormBanner, Honeypot, SelectField, TextAreaField, TextField } from "./fields";
import { useForm } from "./useForm";

const initial = {
  fullName: "",
  email: "",
  phone: "",
  college: "",
  qualification: "",
  domain: "",
  batch: "",
  message: "",
  hp: "",
};

export function InternshipEnrollmentForm({ onDone }: { onDone: () => void }) {
  const router = useRouter();
  const { values, errors, status, message, setValue, submit, submitting } = useForm(
    internshipSchema,
    initial,
    "/api/internship",
    () => {
      onDone();
      router.push("/internship/enrolled");
    },
  );

  return (
    <form onSubmit={submit} noValidate className="relative">
      <Honeypot value={values.hp} onChange={(v) => setValue("hp", v)} />
      <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
        <TextField label="Full Name" name="fullName" required value={values.fullName} onChange={(v) => setValue("fullName", v)} error={errors.fullName} placeholder="Alex Morgan" autoComplete="name" />
        <TextField label="Email Address" name="email" required type="email" inputMode="email" value={values.email} onChange={(v) => setValue("email", v)} error={errors.email} placeholder="alex.morgan@email.com" autoComplete="email" />
        <TextField label="Phone Number" name="phone" required type="tel" inputMode="tel" value={values.phone} onChange={(v) => setValue("phone", v)} error={errors.phone} placeholder="+91 00000 00000" autoComplete="tel" />
        <TextField label="College / University Name" name="college" required value={values.college} onChange={(v) => setValue("college", v)} error={errors.college} placeholder="Enter your college or university" autoComplete="organization" />
        <TextField className="sm:col-span-2" label="Current Education / Qualification" name="qualification" required value={values.qualification} onChange={(v) => setValue("qualification", v)} error={errors.qualification} placeholder="e.g. B.Tech, BBA, MBA, B.Com" />
        <SelectField label="Preferred Internship Domain" name="domain" required value={values.domain} onChange={(v) => setValue("domain", v)} error={errors.domain} options={INTERNSHIP_DOMAINS} placeholder="Select domain" />
        <SelectField label="Preferred Batch" name="batch" required value={values.batch} onChange={(v) => setValue("batch", v)} error={errors.batch} options={INTERNSHIP_BATCHES} placeholder="Select batch" />
        <TextAreaField className="sm:col-span-2" label="Additional Message" name="message" optional rows={3} value={values.message} onChange={(v) => setValue("message", v)} error={errors.message} placeholder="Tell us anything else you would like us to know..." maxLength={1000} />
      </div>

      {status === "error" && message && (
        <div className="mt-5">
          <FormBanner tone="error">{message}</FormBanner>
        </div>
      )}

      <div className="sticky bottom-0 z-10 -mx-5 mt-6 border-t border-line bg-white px-5 pb-5 pt-4 sm:static sm:mx-0 sm:mt-[48px] sm:border-0 sm:p-0">
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
          "Submit Enrollment Request"
        )}
      </button>
      </div>
    </form>
  );
}
