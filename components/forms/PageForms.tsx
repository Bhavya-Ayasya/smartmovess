"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { BOOKING_SERVICES, BOOKING_TIMES, CONTACT_ROLES } from "@/lib/site";
import { bookingSchema, contactSchema, hiringSchema } from "@/lib/validations";
import { ChoiceField, FormBanner, Honeypot, SelectField, TextAreaField, TextField } from "./fields";
import { useForm } from "./useForm";

function SubmitButton({ submitting, children }: { submitting: boolean; children: ReactNode }) {
  return (
    <button
      type="submit"
      disabled={submitting}
      aria-busy={submitting}
      className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-teal font-display text-[15px] font-bold uppercase text-white transition-colors hover:bg-[#139488] disabled:cursor-not-allowed disabled:opacity-80"
    >
      {submitting ? (
        <>
          <Loader2 size={18} className="animate-spin" aria-hidden /> Sending…
        </>
      ) : (
        children
      )}
    </button>
  );
}

function Success({ title, text, onReset }: { title: string; text: string; onReset: () => void }) {
  return (
    <div role="status" className="animate-fade-in flex min-h-[420px] flex-col items-center justify-center text-center">
      <span className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#dcfce7] text-[#16a34a]">
        <CheckCircle2 size={44} strokeWidth={1.8} aria-hidden />
      </span>
      <h3 className="mt-6 font-display text-[28px] font-bold leading-[36px] text-navy-800">{title}</h3>
      <p className="mt-3 max-w-[420px] text-[16px] leading-[25px] text-slate-500">{text}</p>
      <button
        type="button"
        onClick={onReset}
        className="mt-8 inline-flex h-[48px] items-center rounded-[10px] border-[1.5px] border-navy-800 px-6 font-display text-[13px] font-bold uppercase text-navy-800 transition-colors hover:bg-navy-800 hover:text-white"
      >
        Send another response
      </button>
    </div>
  );
}

/* ----------------------------- Hiring ----------------------------- */
const hiringInit = { companyName: "", contactPerson: "", email: "", phone: "", roleHiringFor: "", openings: "", jobDescription: "", hp: "" };

export function HiringForm() {
  const f = useForm(hiringSchema, hiringInit, "/api/hiring");
  if (f.status === "success")
    return (
      <Success
        title="Thank you — we have your requirements"
        text="Our team will review your hiring brief and get in touch to discuss your candidate needs."
        onReset={f.reset}
      />
    );
  const { values: v, errors: e, setValue: set } = f;
  return (
    <form onSubmit={f.submit} noValidate className="relative">
      <Honeypot value={v.hp} onChange={(x) => set("hp", x)} />
      <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:gap-y-[23px]">
        <TextField surface="grey" label="Company Name" name="companyName" required value={v.companyName} onChange={(x) => set("companyName", x)} error={e.companyName} placeholder="Your company" autoComplete="organization" />
        <TextField surface="grey" label="Contact Person" name="contactPerson" required value={v.contactPerson} onChange={(x) => set("contactPerson", x)} error={e.contactPerson} placeholder="Full name" autoComplete="name" />
        <TextField surface="grey" label="Email" name="email" required type="email" inputMode="email" value={v.email} onChange={(x) => set("email", x)} error={e.email} placeholder="name@company.com" autoComplete="email" />
        <TextField surface="grey" label="Phone" name="phone" type="tel" inputMode="tel" value={v.phone} onChange={(x) => set("phone", x)} error={e.phone} placeholder="+91 00000 00000" autoComplete="tel" />
        <TextField surface="grey" label="Role Hiring For" name="roleHiringFor" required value={v.roleHiringFor} onChange={(x) => set("roleHiringFor", x)} error={e.roleHiringFor} placeholder="e.g. Sales Executive" />
        <TextField surface="grey" label="Number of Openings" name="openings" inputMode="numeric" value={v.openings} onChange={(x) => set("openings", x)} error={e.openings} placeholder="e.g. 2" maxLength={4} />
        <TextAreaField surface="grey" className="sm:col-span-2" label="Job Description" name="jobDescription" rows={4} value={v.jobDescription} onChange={(x) => set("jobDescription", x)} error={e.jobDescription} placeholder="Tell us about the role, skills and timeline" maxLength={2000} />
      </div>
      {f.status === "error" && f.message && <div className="mt-5"><FormBanner tone="error">{f.message}</FormBanner></div>}
      <div className="mt-[30px] lg:mt-[50px]"><SubmitButton submitting={f.submitting}>Submit Requirements</SubmitButton></div>
    </form>
  );
}

/* ----------------------------- Contact ----------------------------- */
const contactInit = { fullName: "", email: "", phone: "", subject: "", role: "Employer", message: "", hp: "" };

export function ContactForm() {
  const f = useForm(contactSchema, contactInit, "/api/contact");
  if (f.status === "success")
    return (
      <Success
        title="Message sent — thank you"
        text="We have received your message and will get back to you to discuss how we can help."
        onReset={f.reset}
      />
    );
  const { values: v, errors: e, setValue: set } = f;
  return (
    <form onSubmit={f.submit} noValidate className="relative">
      <Honeypot value={v.hp} onChange={(x) => set("hp", x)} />
      <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:gap-y-[23px]">
        <TextField surface="grey" label="Full Name" name="fullName" required value={v.fullName} onChange={(x) => set("fullName", x)} error={e.fullName} placeholder="Priya Sharma" autoComplete="name" />
        <TextField surface="grey" label="Email" name="email" required type="email" inputMode="email" value={v.email} onChange={(x) => set("email", x)} error={e.email} placeholder="name@email.com" autoComplete="email" />
        <TextField surface="grey" label="Phone" name="phone" type="tel" inputMode="tel" value={v.phone} onChange={(x) => set("phone", x)} error={e.phone} placeholder="+91 00000 00000" autoComplete="tel" />
        <TextField surface="grey" label="Subject" name="subject" value={v.subject} onChange={(x) => set("subject", x)} error={e.subject} placeholder="How can we help?" />
        <div className="sm:col-span-2">
          <ChoiceField label="I am an" required value={v.role} onChange={(x) => set("role", x)} options={CONTACT_ROLES} widths={[92, 85, 107, 122]} error={e.role} />
        </div>
        <TextAreaField surface="grey" className="sm:col-span-2" label="Message" name="message" required rows={4} value={v.message} onChange={(x) => set("message", x)} error={e.message} placeholder="Write your message here" maxLength={2000} />
      </div>
      {f.status === "error" && f.message && <div className="mt-5"><FormBanner tone="error">{f.message}</FormBanner></div>}
      <div className="mt-[30px] lg:mt-[50px]"><SubmitButton submitting={f.submitting}>Send Message</SubmitButton></div>
    </form>
  );
}

/* ----------------------------- Booking ----------------------------- */
const bookingInit = { service: "", preferredDate: "", preferredTime: "", fullName: "", email: "", phone: "", notes: "", hp: "" };

export function BookingForm() {
  const f = useForm(bookingSchema, bookingInit, "/api/booking");
  const params = useSearchParams();
  const preset = params.get("service");
  const { setValue } = f;

  useEffect(() => {
    if (preset && BOOKING_SERVICES.some((s) => s.value === preset)) setValue("service", preset);
  }, [preset, setValue]);

  if (f.status === "success")
    return (
      <Success
        title="Booking request received"
        text="Thank you. We will confirm your session by email shortly."
        onReset={f.reset}
      />
    );
  const { values: v, errors: e, setValue: set } = f;
  const minDate = new Date().toISOString().slice(0, 10);
  return (
    <form onSubmit={f.submit} noValidate className="relative">
      <Honeypot value={v.hp} onChange={(x) => set("hp", x)} />
      <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:gap-y-[23px]">
        <SelectField surface="grey" label="Service" name="service" required value={v.service} onChange={(x) => set("service", x)} error={e.service} options={BOOKING_SERVICES.map((s) => ({ label: s.label, value: s.value }))} placeholder="Select a service" />
        <TextField surface="grey" label="Preferred Date" name="preferredDate" required type="date" value={v.preferredDate} onChange={(x) => set("preferredDate", x)} error={e.preferredDate} placeholder="DD / MM / YYYY" min={minDate} />
        <SelectField surface="grey" label="Preferred Time" name="preferredTime" required value={v.preferredTime} onChange={(x) => set("preferredTime", x)} error={e.preferredTime} options={BOOKING_TIMES} placeholder="Select a time" />
        <TextField surface="grey" label="Full Name" name="fullName" required value={v.fullName} onChange={(x) => set("fullName", x)} error={e.fullName} placeholder="Priya Sharma" autoComplete="name" />
        <TextField surface="grey" label="Email" name="email" required type="email" inputMode="email" value={v.email} onChange={(x) => set("email", x)} error={e.email} placeholder="name@email.com" autoComplete="email" />
        <TextField surface="grey" label="Phone" name="phone" type="tel" inputMode="tel" value={v.phone} onChange={(x) => set("phone", x)} error={e.phone} placeholder="+91 00000 00000" autoComplete="tel" />
        <TextAreaField surface="grey" className="sm:col-span-2" label="Notes" name="notes" rows={4} value={v.notes} onChange={(x) => set("notes", x)} error={e.notes} placeholder="Anything you would like us to know" maxLength={1500} />
      </div>
      {f.status === "error" && f.message && <div className="mt-5"><FormBanner tone="error">{f.message}</FormBanner></div>}
      <div className="mt-[30px] lg:mt-[50px]"><SubmitButton submitting={f.submitting}>Confirm Booking</SubmitButton></div>
    </form>
  );
}
