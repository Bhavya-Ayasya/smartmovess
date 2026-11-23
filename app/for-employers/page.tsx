import type { Metadata } from "next";
import { CalendarDays, CheckCircle2, MessageSquare, Search, Target, Users, Users2 } from "lucide-react";
import { Hero, Lines } from "@/components/sections/Hero";
import { ProblemCard } from "@/components/sections/ProblemCard";
import { FormSection } from "@/components/sections/FormSection";
import { CtaBanner, ProcessRow, StatsStrip, TintCard, type Tone } from "@/components/sections/shared";
import { HiringForm } from "@/components/forms/PageForms";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "For Employers — Recruitment Assistance",
  description:
    "Recruitment assistance, candidate sourcing, shortlisting and hiring coordination for growing businesses. Share your hiring requirements with SmartMovess.",
  alternates: { canonical: "/for-employers" },
};

const CHALLENGES = [
  { t: "Difficulty finding suitable candidates", h: "We help you define the role and source candidates who match your\nrequirements." },
  { t: "Time-consuming candidate sourcing", h: "We take on sourcing so your team can stay focused on running the\nbusiness." },
  { t: "Unclear candidate screening", h: "Shortlisting support helps you review the most relevant profiles\nfaster." },
  { t: "Hiring coordination challenges", h: "We help coordinate communication between your team and candidates." },
];

const SUPPORT: { tone: Tone; icon: typeof Users; title: string; text: string }[] = [
  { tone: "teal", icon: Search, title: "Recruitment Assistance", text: "End-to-end support to help you find\nsuitable candidates for open roles." },
  { tone: "amber", icon: Users, title: "Candidate Sourcing", text: "We search and reach out to candidates who\nmatch your role requirements." },
  { tone: "violet", icon: CheckCircle2, title: "Candidate Shortlisting", text: "Reviewing profiles against your brief so\nyou see the most relevant candidates." },
  { tone: "pink", icon: MessageSquare, title: "Hiring Coordination", text: "Help with communication and scheduling\nbetween your team and candidates." },
  { tone: "blue", icon: Target, title: "Talent Requirement Consultation", text: "Discuss role needs, skills and timelines\nto shape a clear hiring brief." },
  { tone: "aqua", icon: CalendarDays, title: "Interview Support", text: "Assistance in arranging interviews so\nhiring decisions move smoothly." },
];

const STEPS = [
  { title: "Share Your Requirements", text: "Tell us about the role and\nyour needs." },
  { title: "Discuss the Hiring\nRole", text: "We talk through skills and\ntimelines." },
  { title: "Candidate Sourcing", text: "We search for relevant\ncandidates." },
  { title: "Shortlisting & Coordination", text: "You review a focused\nshortlist." },
  { title: "Interview Support", text: "We help arrange the\ninterviews." },
];

export default function EmployersPage() {
  return (
    <>
      <Hero
        pill="For Employers"
        lines={[
          { text: "Find the Talent", tone: "white" },
          { text: "Your Business", tone: "teal" },
          { text: "Needs.", tone: "amber" },
        ]}
        body={<Lines lines={["SmartMovess Consulting Zone helps businesses connect", "with suitable candidates through recruitment assistance,", "candidate sourcing, and hiring coordination."]} />}
        minH={678}
        actions={
          <>
            <ButtonLink href="#hiring" variant="amber" className="px-8 lg:w-[287px]">Share Hiring Requirements</ButtonLink>
            <ButtonLink href="#process" variant="outline-white" className="px-8 lg:w-[203px]">See How It Works</ButtonLink>
          </>
        }
        perks={[
          { icon: CheckCircle2, text: "Recruitment assistance" },
          { icon: CheckCircle2, text: "Candidate sourcing" },
          { icon: CheckCircle2, text: "Hiring coordination" },
        ]}
        perkGaps={[40, 36]}
        image="/images/photo-b.jpg"
        imageAlt="Hiring team reviewing candidate profiles"
        imageSize={{ w: 560, h: 480 }}
        floats={[
          { icon: Search, title: "Candidate sourcing", sub: "Shortlisting & coordination", pos: "lg:-left-11 lg:top-[370px]", width: 250, mobile: true },
          { icon: Users2, title: "Recruitment support", sub: "Role-matched profiles", pos: "lg:left-[354px] lg:top-9", width: 232 },
        ]}
      />
      <StatsStrip
        items={[
          { value: "5 steps", label: "Brief to interview" },
          { value: "100% Online", label: "Across India" },
          { value: "1-to-1", label: "Role consultation" },
          { value: "Faster", label: "Shortlisting support" },
        ]}
      />

      <Section h={948} className="py-14 lg:pb-[112px] lg:pt-[111px]">
        <SectionHeading
          eyebrow="The challenge"
          title="Hiring Shouldn't Slow Your Business Down."
          subtitle="Common hiring roadblocks, and how SmartMovess helps you clear them."
        />
        <div className="mt-8 grid gap-4 lg:mt-[65px] lg:gap-6 lg:grid-cols-2">
          {CHALLENGES.map((c) => (
            <ProblemCard key={c.t} chip="THE CHALLENGE" problem={c.t} helpLabel="HOW SMARTMOVESS HELPS" help={c.h} />
          ))}
        </div>
      </Section>

      <Section h={900} bg="surface" className="py-14 lg:py-[111px]">
        <SectionHeading
          eyebrow="Our recruitment support"
          title="Everything you need to hire with confidence"
          subtitle="Practical recruitment support from the first brief to the final interview."
        />
        <div className="mt-8 grid gap-4 lg:gap-6 sm:grid-cols-2 lg:mt-[62px] lg:grid-cols-3">
          {SUPPORT.map((s, i) => (
            <TintCard key={s.title} tone={s.tone} icon={s.icon} title={s.title} className={i < 3 ? "lg:h-[224px]" : "lg:h-[252px]"}>{s.text}</TintCard>
          ))}
        </div>
      </Section>

      <Section h={544} id="process" bg="navy" className="py-14 lg:py-[111px]">
        <SectionHeading tone="dark" eyebrow="Recruitment process" title="A clear process from brief to interview" />
        <div className="mt-12 lg:mt-[51px]">
          <ProcessRow steps={STEPS} cols={5} />
        </div>
      </Section>

      <FormSection formH={608} h={1008}
        id="hiring"
        eyebrow="Hiring inquiry"
        title="Share your hiring requirements"
        subtitle="Tell us about the role and we will get in touch to discuss your candidate needs."
        panelTitle={<>{"Tell us about your\nhiring needs"}</>}
        panelText={"A clear brief helps us source and shortlist\ncandidates who fit the role."}
        panelItems={["Recruitment assistance", "Candidate sourcing and shortlisting", "Hiring coordination", "Interview support"]}
        form={<HiringForm />}
      />

      <CtaBanner h={524}
        title="Let's Find the Right"
        accent="Talent for Your Team."
        body={"Share your requirements and our team will get in touch to discuss\nthe next step."}
        actions={
          <>
            <ButtonLink href="#hiring" variant="amber">Share Requirements</ButtonLink>
            <ButtonLink href="/contact#booking" variant="outline-white">Book a Consultation</ButtonLink>
          </>
        }
      />
    </>
  );
}
