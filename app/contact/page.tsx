import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, CheckCircle2, GraduationCap, MessageSquare, CalendarDays, Presentation } from "lucide-react";
import { Hero, Lines } from "@/components/sections/Hero";
import { FormSection } from "@/components/sections/FormSection";
import { CtaBanner, ProcessRow, StatsStrip, TONES, type Tone } from "@/components/sections/shared";
import { BookingForm, ContactForm } from "@/components/forms/PageForms";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Send SmartMovess a message or book an online career consultation. We help employers, students, job seekers and professionals across India.",
  alternates: { canonical: "/contact" },
};

const WAYS: { tone: Tone; icon: typeof Briefcase; title: string; text: string; href: string }[] = [
  { tone: "teal", icon: Briefcase, title: "Employers", text: "Ready to hire? Share your hiring\nrequirements and we will get in touch.", href: "/for-employers#hiring" },
  { tone: "amber", icon: GraduationCap, title: "Students & Job Seekers", text: "Ready to improve your career prospects?\nBook a career consultation.", href: "#booking" },
  { tone: "violet", icon: Presentation, title: "Colleges & Businesses", text: "Looking for a workshop for your students\nor team? Enquire with us.", href: "#message" },
];

const STEPS = [
  { title: "Service", text: "Select the service you need." },
  { title: "Date", text: "Pick a date that suits you." },
  { title: "Time", text: "Choose an available time\nslot." },
  { title: "Details", text: "Share your contact details." },
  { title: "Confirm", text: "Review and confirm your\nbooking." },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        pill="Contact & Booking"
        lines={[
          { text: "Let's Talk About", tone: "white" },
          { text: "Your Next", tone: "teal" },
          { text: "Step.", tone: "amber" },
        ]}
        body={<Lines lines={["Send us a message or book a consultation in a few steps.", "We will get back to you to discuss how we can help."]} />}
        minH={656}
        actions={
          <>
            <ButtonLink href="#booking" variant="amber" className="px-8 lg:w-[232px]">Book a Consultation</ButtonLink>
            <ButtonLink href="#message" variant="outline-white" className="px-8 lg:w-[185px]">Send a Message</ButtonLink>
          </>
        }
        perks={[
          { icon: CheckCircle2, text: "Employers" },
          { icon: CheckCircle2, text: "Students & Job Seekers" },
          { icon: CheckCircle2, text: "Professionals" },
        ]}
        perkGaps={[30, 36]}
        image="/images/contact-hero.jpg"
        imageAlt="Consultant on a video call"
        floats={[
          { icon: MessageSquare, title: "Talk to our team", sub: "We will get back to you", pos: "lg:-left-11 lg:top-[410px]", width: 250, mobile: true },
          { icon: CalendarDays, title: "Book a session", sub: "Choose date & time", pos: "lg:left-[306px] lg:top-9", width: 232 },
        ]}
      />
      <StatsStrip
        items={[
          { value: "3 steps", label: "To get started" },
          { value: "Online", label: "Sessions across India" },
          { value: "2 ways", label: "Message or book" },
          { value: "Personal", label: "Guidance for you" },
        ]}
      />

      <Section h={660} className="py-14 lg:pb-[112px] lg:pt-[111px]">
        <SectionHeading
          eyebrow="How can we help"
          title="Choose how you would like to connect"
          subtitle="Tell us who you are and we will point you to the right next step."
        />
        <div className="mt-8 grid gap-4 lg:gap-6 lg:mt-[56px] lg:grid-cols-3">
          {WAYS.map((w) => {
            const t = TONES[w.tone];
            return (
              <article key={w.title} className="rounded-[20px] border border-line bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-transform hover:-translate-y-1 lg:min-h-[260px] lg:p-8">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white lg:h-14 lg:w-14 lg:rounded-2xl ${t.solid}`}>
                  <w.icon size={20} strokeWidth={1.9} aria-hidden />
                </span>
                <div>
                <h3 className="mt-5 font-display text-[19px] font-bold leading-6 text-navy-800 lg:mt-[23px] lg:text-[22px] lg:leading-[30px]">{w.title}</h3>
                <p className="mt-2 max-w-[320px] text-[14px] leading-[21px] text-slate-500 lg:mt-[9px] lg:text-[15px] lg:leading-6">{w.text}</p>
                <Link href={w.href} className={`group mt-3 lg:mt-5 inline-flex items-center gap-[10px] font-display text-[14px] font-bold leading-[19px] ${t.text}`}>
                  Get started <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <FormSection formH={600} h={1000}
        id="message"
        eyebrow="Send a message"
        title="Contact our team"
        subtitle="Tell us who you are and how we can help."
        panelTitle="What happens next"
        panelText={"Share a few details and we will get back to\nyou to discuss the next step."}
        panelItems={["We review your message", "We get in touch with you", "We plan the next step together"]}
        form={<ContactForm />}
      />

      <Section h={563} bg="navy" className="py-14 lg:py-[111px]">
        <SectionHeading
          tone="dark"
          eyebrow="Book a consultation"
          title="Book your session in a few steps"
          subtitle="Choose a service, pick a date and time, and share your details."
        />
        <div className="mt-12 lg:mt-[65px]">
          <ProcessRow steps={STEPS} cols={5} />
        </div>
      </Section>

      <FormSection formH={608} h={1008}
        id="booking"
        bg="white"
        eyebrow="Booking"
        title="Book your consultation"
        subtitle="Fill in a few details and we will confirm your session."
        panelTitle={<>{"Your session, your\nschedule"}</>}
        panelText={"Sessions are conducted online and are\naccessible across India."}
        panelItems={[
          "Resume/CV Building · ₹499",
          "Resume + LinkedIn Profile · ₹999",
          "Mock Interview Session · ₹499",
          "Interview Preparation Bundle · ₹999",
        ]}
        form={
          <Suspense fallback={<div className="h-[420px]" aria-busy />}>
            <BookingForm />
          </Suspense>
        }
      />

      <CtaBanner h={524}
        title="Ready to take"
        accent="the next step?"
        body={"Our team is here to help students, job seekers and employers move\nforward."}
        actions={
          <>
            <ButtonLink href="#booking" variant="amber">Book a Consultation</ButtonLink>
            <ButtonLink href="/for-employers#hiring" variant="outline-white">Share Hiring Requirements</ButtonLink>
          </>
        }
      />
    </>
  );
}
