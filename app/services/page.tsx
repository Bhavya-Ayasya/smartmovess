import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Check, GraduationCap, Users, Video, Accessibility } from "lucide-react";
import { Instagram } from "@/components/ui/BrandIcons";
import { FloatingCard, Hero, Lines } from "@/components/sections/Hero";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner, StatsStrip } from "@/components/sections/shared";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FAQS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Clear starting prices for resume building, LinkedIn improvement, mock interviews, interview preparation, career consultation and workshops.",
  alternates: { canonical: "/services" },
};

type Plan = {
  title: string;
  lead?: string;
  price: string;
  priceNote: string;
  text: string;
  points: string[];
  service: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  { title: "Resume/CV Building", price: "₹499", priceNote: "Starting at", text: "A professionally structured resume that\npresents your skills and experience clearly.", points: ["Review of your background", "Professionally structured resume", "Role-focused content"], service: "Resume/CV Building" },
  { title: "Resume + LinkedIn Profile", price: "₹999", priceNote: "Starting at", text: "Upgrade your resume and your LinkedIn profile\ntogether.", points: ["Everything in Resume/CV Building", "LinkedIn profile improvements", "Consistent professional presence"], service: "Resume + LinkedIn\nProfile", featured: true },
  { title: "Mock Interview Session", price: "₹499", priceNote: "Starting at", text: "Practise interviews with a consultant and get\nuseful feedback.", points: ["One-to-one mock interview", "Common questions practice", "Feedback on your answers"], service: "Mock Interview Session" },
  { title: "Interview Preparation Bundle", price: "₹999", priceNote: "Starting at", text: "Prepare thoroughly with guidance and mock\ninterview practice.", points: ["Interview preparation guidance", "Mock interview practice", "Feedback and improvement tips"], service: "Interview Preparation Bundle" },
  { title: "Internship Readiness\nWorkshop", price: "₹299", priceNote: "Only", text: "A group workshop that helps students get\nready for internships.", points: ["Group session for students", "Practical career readiness", "Suited to colleges and student groups"], service: "Internship Readiness Workshop" },
  { title: "Personal Career Consultation", price: "₹499", priceNote: "Starting at", text: "A one-to-one online session to discuss your\ngoals and next steps.", points: ["One-to-one online session", "Discussion of goals and direction", "Personalised next steps"], service: "Personal Career Consultation" },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        pill="Services & Pricing"
        lines={[
          { text: "Choose the Support", tone: "white" },
          { text: "That Fits Your", tone: "teal" },
          { text: "Goals.", tone: "amber" },
        ]}
        body={<Lines lines={["Clear starting prices for every service, from resume", "building to interview preparation and career", "consultation."]} />}
        minH={678}
        actions={
          <>
            <ButtonLink href="/contact#booking" variant="amber" className="px-8 lg:w-[232px]">Book a Consultation</ButtonLink>
            <ButtonLink href="#pricing" variant="outline-white" className="px-8 lg:w-[166px]">View Pricing</ButtonLink>
          </>
        }
        perks={[
          { icon: CheckCircle2, text: "Clear starting prices" },
          { icon: CheckCircle2, text: "Online sessions" },
          { icon: CheckCircle2, text: "Personal guidance" },
        ]}
        perkGaps={[53, 39]}
        image="/images/photo-a.jpg"
        imageAlt="Consultant reviewing a career plan with a client"
        floats={[
          { icon: Video, title: "Career consultation", sub: "Online sessions", pos: "lg:-left-11 lg:top-[410px]", width: 250, mobile: true },
          { icon: Accessibility, title: "Accessible", sub: "Across India", pos: "lg:left-[306px] lg:top-9", width: 232 },
        ]}
      />
      <StatsStrip
        items={[
          { value: "₹299", label: "Workshop per student" },
          { value: "₹499", label: "Services starting at" },
          { value: "8", label: "Career services" },
          { value: "Online", label: "Across India" },
        ]}
      />

      <Section h={1280} id="pricing" className="py-14 lg:pb-[112px] lg:pt-[111px]">
        <SectionHeading eyebrow="Services & pricing" title="Choose the support that fits" subtitle="Clear starting prices for each service." />
        <div className="mt-8 grid gap-4 lg:gap-6 md:grid-cols-2 lg:mt-[65px] lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <article
              key={p.title}
              className={`relative rounded-[24px] p-8 ${i < 3 ? "lg:h-[433px]" : "lg:h-[423px]"} lg:pb-0 ${p.featured ? "lg:pt-[64px]" : "lg:pt-[30px]"} ${
                p.featured ? "bg-navy-grad text-white shadow-[0_14px_36px_rgba(11,27,50,0.25)]" : "border border-line bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
              }`}
            >
              {p.featured && (
                <span className="mb-[6px] inline-flex h-6 w-fit items-center rounded-full bg-amber px-[14px] font-display text-[11px] font-bold text-navy-800 lg:absolute lg:left-8 lg:top-8 lg:mb-0">RECOMMENDED</span>
              )}
              <h3 className={`font-display text-[20px] font-bold leading-[26px] lg:leading-[26px] ${p.featured ? "text-white" : "text-navy-800"}`}>{p.title}</h3>
              <p className="mt-[14px] flex items-start lg:mt-[10px]">
                <span className={`mt-[12px] text-[13px] leading-4 ${p.featured ? "text-fog" : "text-slate-500"}`}>{p.priceNote}</span>
                <span className={`font-display text-[34px] font-bold leading-[46px] ${p.priceNote === "Only" ? "ml-[10px]" : "ml-[21px]"} ${p.featured ? "text-amber" : "text-teal"}`}>{p.price}</span>
                {p.priceNote === "Only" && <span className="ml-[2px] mt-[22px] text-[13px] leading-4 text-slate-500">per student</span>}
              </p>
              <p className={`mt-[10px] text-[14px] leading-[21px] lg:mt-[14px] ${p.featured ? "text-fog" : "text-slate-500"}`}>{p.text}</p>
              <ul className="mb-2 mt-6 flex flex-col gap-[13px] lg:mt-[44px]">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-[14px] text-[14px] leading-[17px]">
                    <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${p.featured ? "bg-amber text-navy-950" : "bg-mint text-teal"}`}>
                      <Check size={10} strokeWidth={3} aria-hidden />
                    </span>
                    <span className={p.featured ? "text-white" : "text-navy-800"}>{pt}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/contact?service=${encodeURIComponent(p.service)}#booking`}
                className={`mt-8 inline-flex h-[52px] w-full items-center justify-center rounded-[10px] font-display text-[14px] font-bold uppercase transition-colors lg:absolute lg:inset-x-8 lg:bottom-8 lg:mt-0 lg:w-auto ${
                  p.featured ? "bg-amber text-navy-950 hover:bg-[#f7c677]" : "bg-teal text-white hover:bg-[#139488]"
                }`}
              >
                Book now
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section h={660} bg="surface" className="py-14 lg:py-[111px]">
        <SectionHeading eyebrow="New programs" title="Go further with our newest services" subtitle="Structured support to build experience and a stronger professional presence." />
        <div className="mt-8 grid gap-4 lg:gap-6 lg:mt-[56px] lg:grid-cols-2">
          {[
            { href: "/internship", icon: <GraduationCap size={22} aria-hidden />, bg: "bg-teal", text: "text-teal", title: "Internship Program", body: "A 3–4 month program to gain practical experience, build professional\nskills and prepare for future career opportunities." },
            { href: "/instagram-audit", icon: <Instagram size={22} aria-hidden />, bg: "bg-amber-600", text: "text-amber-600", title: "Instagram Profile Audit", body: "A detailed review of your Instagram profile with practical\nsuggestions to improve your presence and engagement." },
          ].map((c) => (
            <article key={c.title} className="relative overflow-hidden rounded-[16px] border border-line bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] lg:min-h-[260px] lg:rounded-[20px] lg:p-8">
              <span className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${c.bg}`}>{c.icon}</span>
              <h3 className="mt-[22px] font-display text-[22px] font-bold leading-[30px] text-navy-800">{c.title}</h3>
              <p className="mt-[9px] max-w-[500px] text-[15px] leading-6 text-slate-500">{c.body}</p>
              <Link href={c.href} className={`group mt-5 inline-flex items-center gap-[10px] font-display text-[14px] font-bold leading-[19px] ${c.text}`}>
                Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section h={744} id="workshops" className="py-14 lg:py-[112px]">
        <div className="grid items-center gap-12 lg:grid-cols-[512px_1fr] lg:gap-[88px]">
          <div className="relative mx-auto aspect-[350/260] w-full max-w-[512px] lg:aspect-[512/520]">
            <span aria-hidden className="absolute -left-4 top-4 h-full w-full rounded-[28px] bg-teal/[0.14]" />
            <div className="relative h-full w-full overflow-hidden rounded-[28px]">
              <Image src="/images/photo-a.jpg" alt="College workshop in progress" fill sizes="512px" className="object-cover" />
            </div>
            <FloatingCard icon={Users} title="Group workshops" sub="Colleges & businesses" pos="lg:left-[394px] lg:top-[460px]" width={250} />
          </div>
          <div>
            <h2 className="font-display text-[30px] font-bold leading-[46px] text-navy-800 sm:text-[36px]">
              {"Workshops for Colleges and\nBusinesses"}
            </h2>
            <p className="mt-[14px] max-w-[480px] text-[17px] leading-7 text-slate-500">
              {"Career-focused workshops designed to help students and\nprofessionals build practical skills and confidence."}
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {["Internship-readiness sessions for students", "Interview and resume skills for groups", "Career guidance for college and corporate teams"].map((t) => (
                <li key={t} className="flex items-center gap-[10px] text-[16px] font-bold leading-[19px] text-navy-800 lg:gap-[14px]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-mint text-teal"><Check size={13} strokeWidth={2.6} aria-hidden /></span>
                  {t}
                </li>
              ))}
            </ul>
            <ButtonLink href="/contact#message" variant="teal" className="mt-9 lg:w-[269px]">Enquire About Workshops</ButtonLink>
          </div>
        </div>
      </Section>

      <Section h={630} bg="surface" className="py-14 lg:py-[111px]">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mx-auto mt-12 max-w-[880px] lg:mt-[53px]">
          <Faq items={FAQS.slice(0, 3)} compact />
        </div>
      </Section>

      <CtaBanner h={524}
        title="Not sure which service"
        accent="is right for you?"
        body={"Book a career consultation and we will help you choose the right\nnext step."}
        actions={
          <>
            <ButtonLink href="/contact#booking" variant="amber">Book a Consultation</ButtonLink>
            <ButtonLink href="/contact#message" variant="outline-white">Send a Message</ButtonLink>
          </>
        }
      />
    </>
  );
}
