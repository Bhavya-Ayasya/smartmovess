import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Check, Compass, Globe, FileText, GraduationCap, MessagesSquare, Users } from "lucide-react";
import { Linkedin } from "@/components/ui/BrandIcons";
import { FloatingCard, Hero, Lines } from "@/components/sections/Hero";
import { Faq } from "@/components/sections/Faq";
import { ProblemCard } from "@/components/sections/ProblemCard";
import { CtaBanner, ProcessRow, StatsStrip, TONES, type Tone } from "@/components/sections/shared";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FAQS } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Students & Job Seekers — Career Consulting",
  description:
    "Resume building, LinkedIn improvement, mock interviews, internship readiness and one-to-one career guidance for students, freshers and professionals.",
  alternates: { canonical: "/for-candidates" },
};

const PROBLEMS = [
  { t: "Unsure how to build a professional resume?", h: "Get a professionally structured resume that presents you clearly." },
  { t: "Need help improving your LinkedIn?", h: "Improve your headline, summary and\nexperience sections." },
  { t: "Nervous about interviews?", h: "Practise with a consultant and get\nfeedback on your answers." },
  { t: "Looking for internship readiness?", h: "Join practical sessions and our internship program to get ready." },
  { t: "Need career direction?", h: "Discuss your goals and next steps in a one-to-one consultation." },
  { t: "Want a stronger Instagram presence?", h: "Get an Instagram profile audit with clear, practical suggestions." },
];

const SERVICES: { tone: Tone; icon: typeof FileText; title: string; text: string; service: string }[] = [
  { tone: "teal", icon: FileText, title: "Resume/CV Building", text: "A professionally structured resume that\npresents you clearly.", service: "Resume/CV Building" },
  { tone: "amber", icon: Linkedin, title: "LinkedIn Profile\nImprovement", text: "Improve your headline, summary and\nexperience sections.", service: "Resume + LinkedIn\nProfile" },
  { tone: "violet", icon: MessagesSquare, title: "Mock Interview Session", text: "Practise with a consultant and get\nfeedback on your answers.", service: "Mock Interview Session" },
  { tone: "pink", icon: GraduationCap, title: "Interview Preparation\nBundle", text: "Preparation guidance plus mock interview\npractice.", service: "Interview Preparation Bundle" },
  { tone: "blue", icon: Compass, title: "Personal Career\nConsultation", text: "A one-to-one online session to discuss\nyour goals and next steps.", service: "Personal Career Consultation" },
  { tone: "aqua", icon: Users, title: "Internship Readiness\nWorkshop", text: "A group workshop that helps students get\nready for internships.", service: "Internship Readiness Workshop" },
];

const STEPS = [
  { title: "Choose a service", text: "Pick the support that fits your goal." },
  { title: "Select date & time", text: "Choose a slot that suits you." },
  { title: "Share your details", text: "Tell us a little about yourself." },
  { title: "Attend online", text: "Join your session from anywhere in\nIndia." },
];

export default function CandidatesPage() {
  return (
    <>
      <Hero
        pill="For Students & Job Seekers"
        lines={[
          { text: "Build Your Career", tone: "white" },
          { text: "with Confidence.", tone: "teal" },
        ]}
        body={<Lines lines={["Get career-ready through resume building, interview", "preparation, internship readiness and personalised", "guidance."]} />}
        minH={656}
        actions={
          <>
            <ButtonLink href="/contact#booking" variant="amber" className="px-8 lg:w-[296px]">Book a Career Consultation</ButtonLink>
            <ButtonLink href="/services" variant="outline-white" className="px-8 lg:w-[175px]">View Services</ButtonLink>
          </>
        }
        perks={[
          { icon: CheckCircle2, text: "Online sessions" },
          { icon: CheckCircle2, text: "Personalised support" },
          { icon: CheckCircle2, text: "Practical guidance" },
        ]}
        image="/images/candidates-hero.jpg"
        imageAlt="Student preparing for a career consultation"
        floats={[
          { icon: Globe, title: "Online sessions", sub: "Accessible across India", pos: "lg:-left-11 lg:top-[410px]", width: 250, mobile: true },
          { icon: FileText, title: "Resume · Interview", sub: "Personalised guidance", pos: "lg:left-[306px] lg:top-9", width: 232 },
        ]}
      />
      <StatsStrip
        items={[
          { value: "₹499", label: "Services starting at" },
          { value: "Online", label: "Sessions across India" },
          { value: "1-to-1", label: "Personalised support" },
          { value: "3–4 mo", label: "Internship program" },
        ]}
      />

      <Section h={1162} className="py-14 lg:pb-[112px] lg:pt-[111px]">
        <SectionHeading
          eyebrow="We understand"
          title="Every Career Journey Deserves the Right Support."
          subtitle="Whatever stage you are at, SmartMovess has a practical way to move you forward."
        />
        <div className="mt-8 grid gap-4 lg:mt-[65px] lg:gap-6 lg:grid-cols-2">
          {PROBLEMS.map((p) => (
            <ProblemCard key={p.t} chip="SOUND FAMILIAR?" problem={p.t} helpLabel="HOW WE HELP" help={p.h} tall={false} />
          ))}
        </div>
      </Section>

      <Section h={1000} bg="surface" className="py-14 lg:py-[111px]">
        <SectionHeading
          eyebrow="Career services"
          title="Choose the support that fits your goals"
          subtitle="Practical services to help you get ready for your next opportunity."
        />
        <div className="mt-8 grid gap-4 lg:gap-6 sm:grid-cols-2 lg:mt-[62px] lg:grid-cols-3">
          {SERVICES.map((s) => {
            const t = TONES[s.tone];
            return (
              <article key={s.title} className="relative overflow-hidden rounded-[20px] border border-line bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-transform hover:-translate-y-1 lg:h-[288px] lg:p-8">
                <span aria-hidden className={`absolute left-8 top-0 h-[5px] w-14 rounded-b ${t.solid}`} />
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white lg:h-14 lg:w-14 lg:rounded-2xl ${t.solid}`}>
                  <s.icon size={20} strokeWidth={1.9} aria-hidden />
                </span>
                <div>
                <h3 className="mt-5 font-display text-[19px] font-bold leading-[25px] text-navy-800 lg:mt-[17px] lg:text-[22px] lg:leading-[28px]">{s.title}</h3>
                <p className="mt-2 max-w-[300px] text-[14px] leading-[21px] text-slate-500 lg:mt-[7px] lg:max-w-none lg:text-[15px] lg:leading-6">{s.text}</p>
                <Link
                  href={`/contact?service=${encodeURIComponent(s.service)}#booking`}
                  className={`group mt-3 inline-flex items-center lg:absolute lg:bottom-[30px] lg:left-8 lg:mt-0 gap-[10px] font-display text-[14px] font-bold leading-[19px] ${t.text}`}
                >
                  Book this service <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section h={744} className="py-14 lg:py-[112px]">
        <div className="grid items-center gap-12 lg:grid-cols-[512px_1fr] lg:gap-[88px]">
          <div className="relative mx-auto aspect-[350/260] w-full max-w-[512px] lg:aspect-[512/520]">
            <span aria-hidden className="absolute -left-4 top-4 h-full w-full rounded-[28px] bg-teal/[0.14]" />
            <div className="relative h-full w-full overflow-hidden rounded-[28px]">
              <Image src="/images/photo-a.jpg" alt="Interns collaborating on a project" fill sizes="512px" className="object-cover" />
            </div>
            <FloatingCard icon={GraduationCap} title="Internship Program" sub="3–4 Month Program" pos="lg:left-[394px] lg:top-[460px]" width={250} mobile={false} />
          </div>
          <div>
            <h2 className="font-display text-[30px] font-bold leading-[40px] text-navy-800 sm:text-[36px] sm:leading-[46px] lg:relative lg:top-[3px]">
              {"Gain real experience with\nthe Internship Program"}
            </h2>
            <p className="mt-[18px] max-w-none text-[17px] leading-7 text-slate-500 lg:mt-[14px]">
              {"Build practical skills, understand professional workflows and\nprepare for future career opportunities through SmartMovess\nConsulting Zone's internship program."}
            </p>
            <ul className="mt-8 flex flex-col gap-4 lg:mt-7">
              {["3–4 month structured program", "Practical, hands-on experience", "Industry exposure and skill development"].map((t) => (
                <li key={t} className="flex items-center gap-[10px] text-[16px] font-bold leading-[19px] text-navy-800 lg:gap-[14px]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-mint text-teal"><Check size={13} strokeWidth={2.6} aria-hidden /></span>
                  {t}
                </li>
              ))}
            </ul>
            <ButtonLink href="/internship" variant="teal" className="mt-9">Explore Program</ButtonLink>
          </div>
        </div>
      </Section>

      <Section h={519} bg="navy" className="py-14 lg:py-[111px]">
        <SectionHeading tone="dark" eyebrow="How it works" title="Get started in four simple steps" />
        <div className="mt-12 lg:mt-[51px]">
          <ProcessRow steps={STEPS} cols={4} />
        </div>
      </Section>

      <Section h={630} bg="surface" className="py-14 lg:py-[111px]">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        <div className="mx-auto mt-12 max-w-[880px] lg:mt-[53px]">
          <Faq items={FAQS.slice(0, 3)} compact />
        </div>
      </Section>

      <CtaBanner h={524}
        title="Ready to Build Your"
        accent="Career with Confidence?"
        body={"Book a career consultation and take the next step with personalised\nguidance."}
        actions={
          <>
            <ButtonLink href="/contact#booking" variant="amber">Book a Consultation</ButtonLink>
            <ButtonLink href="/services" variant="outline-white">View Services &amp; Pricing</ButtonLink>
          </>
        }
      />
    </>
  );
}
