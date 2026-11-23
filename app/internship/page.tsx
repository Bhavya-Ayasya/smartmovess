import type { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  Briefcase,
  CalendarDays,
  Check,
  FileText,
  GraduationCap,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp,
  UserCheck,
  BookOpen,
  Building2,
  Clock,
  Upload,
  Compass,
} from "lucide-react";
import { Hero, Lines } from "@/components/sections/Hero";
import { RingIcon } from "@/components/sections/RingIcon";
import { TONES, TintCard, type Tone } from "@/components/sections/shared";
import { ModalTrigger } from "@/components/modals/ModalProvider";
import { ButtonLink } from "@/components/ui/Button";
import { cta } from "@/components/ui/ctaStyles";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Internship Program",
  description:
    "A practical 3–4 month internship program from SmartMovess Consulting Zone. Gain hands-on experience, build professional skills and prepare for your career.",
  alternates: { canonical: "/internship" },
};

const GAINS: { tone: Tone; icon: typeof Check; title: string; text: string }[] = [
  { tone: "teal", icon: Target, title: "Practical Experience", text: "Work on guided, hands-on tasks that\nreflect real workplace activities." },
  { tone: "amber", icon: TrendingUp, title: "Professional Skill\nDevelopment", text: "Build skills that support your\nprofessional growth." },
  { tone: "violet", icon: Rocket, title: "Career Readiness", text: "Prepare yourself for the next stage\nof your career journey." },
  { tone: "pink", icon: FileText, title: "Resume Enhancement", text: "Add practical program experience to\nyour resume." },
  { tone: "blue", icon: BookOpen, title: "Guided Learning", text: "Learn with structured guidance\nthroughout the program." },
  { tone: "aqua", icon: ShieldCheck, title: "Professional Confidence", text: "Grow more confident in professional\nenvironments." },
];

const AUDIENCE: { tone: Tone; icon: typeof Check; title: string; text: string }[] = [
  { tone: "teal", icon: GraduationCap, title: "College Students", text: "Placeholder description: students\nlooking to add practical learning to\ntheir studies." },
  { tone: "amber", icon: Award, title: "Freshers", text: "Placeholder description: recent\ngraduates preparing for their first\ncareer steps." },
  { tone: "violet", icon: Briefcase, title: "Aspiring\nProfessionals", text: "Placeholder description: individuals\nexploring professional career\nopportunities." },
  { tone: "pink", icon: Lightbulb, title: "Students Looking for\nPractical Experience", text: "Placeholder description: learners who\nwant hands-on exposure to professional\nwork." },
];

const PROCESS = [
  ["Explore the", "Internship", "Program"],
  ["Click Enroll", "Now"],
  ["Complete the", "Enrollment Form"],
  ["Submit Your", "Details"],
  ["SmartMovess", "Team Reviews", "the Inquiry"],
  ["Receive Further", "Program", "Information"],
];

export default function InternshipPage() {
  return (
    <>
      <Hero
        pill="3–4 Month Program"
        lines={[
          { text: "Start Your Career Journey", tone: "white" },
          { text: "with a Practical", tone: "white" },
          { text: "Internship Program", tone: "teal" },
        ]}
        h1Size={46}
        body={<Lines lines={["Gain practical experience, develop professional skills,", "and prepare yourself for future career opportunities", "through SmartMovess Consulting Zone's internship program."]} />}
        actions={
          <>
            <ModalTrigger modal="internship" className={cta("teal", "lg", "lg:w-[196px]")}>Enroll Now</ModalTrigger>
            <ButtonLink href="#overview" variant="outline-white" className="px-8 lg:w-[223px]">Explore Program</ButtonLink>
          </>
        }
        perks={[
          { icon: BookOpen, text: "Practical Learning" },
          { icon: TrendingUp, text: "Career Development" },
          { icon: Building2, text: "Industry Exposure" },
        ]}
        perksBold
        hidePerksOnMobile
        pillMt={4}
        perksExtra={4}
        flowLines
        perkGaps={[50, 33]}
        image="/images/photo-a.jpg"
        imageAlt="Interns collaborating at a workshop"
        floats={[
          { icon: Target, title: "Practical Experience", sub: "Guided, hands-on tasks", pos: "lg:left-[238px] lg:top-14", width: 250 },
          { icon: Rocket, title: "Career Readiness", sub: "Prepare for the next stage", pos: "lg:left-[208px] lg:top-[250px]", width: 280 },
          { icon: Clock, title: "Batch Duration", sub: "Approximately 3–4 months", pos: "lg:-left-14 lg:top-[392px]", width: 260, mobile: true },
        ]}
        extra={
          <>
            <span aria-hidden className="absolute -bottom-16 -right-6 hidden h-24 w-24 rounded-[24px] bg-amber lg:block" />
            <div className="absolute -left-[42px] top-[14px] hidden h-28 w-28 flex-col items-center justify-center rounded-full bg-amber text-navy-800 lg:flex">
              <span className="font-display text-[30px] font-bold leading-[35px]">3–4</span>
              <span className="-mt-1 font-display text-[11px] font-bold leading-[15px]">MONTHS</span>
            </div>
          </>
        }
      />

      <Section h={668} id="overview" className="py-14 lg:py-[111px]">
        <SectionHeading multiline eyebrow="Internship overview" title={<>Build Skills. Gain Experience. Prepare for Your <br className="hidden lg:block" />Career.</>} />
        <div className="mt-8 grid gap-4 lg:mt-[56px] lg:grid-cols-3 lg:gap-6">
          <TintCard tone="teal" icon={Briefcase} iconSize={64} title="Practical Learning">{"Learn through practical tasks and\nguided activities."}</TintCard>
          <TintCard tone="amber" icon={Upload} iconSize={64} title="Career Development">{"Improve your professional skills and\ncareer readiness."}</TintCard>
          <TintCard tone="violet" icon={Compass} iconSize={64} title="Industry Exposure">{"Understand professional workflows and\nworkplace expectations."}</TintCard>
        </div>
      </Section>

      <Section h={894} bg="surface" className="py-14 lg:py-[111px]">
        <SectionHeading
          eyebrow="Program structure"
          title="Structured Internship Batches"
          subtitle="Our internship program is organised into multiple batches throughout the year."
        />
        <div className="mt-8 grid gap-6 rounded-[20px] bg-navy-grad p-6 text-white sm:grid-cols-2 lg:mt-[61px] lg:h-[132px] lg:grid-cols-[624px_1fr] lg:gap-x-0 lg:items-center lg:rounded-[24px] lg:px-10 lg:py-0">
          <div className="flex items-center gap-6">
            <RingIcon size={64}><Clock size={24} aria-hidden /></RingIcon>
            <div className="lg:translate-y-[1px]">
              <p className="text-[14px] leading-[17px] text-fog">Batch Duration</p>
              <p className="font-display text-[28px] font-bold leading-[40px] lg:mt-[5px] lg:text-[34px] lg:leading-[46px]">3–4 Months</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <RingIcon size={64}><CalendarDays size={24} aria-hidden /></RingIcon>
            <div className="lg:-translate-y-[3px]">
              <p className="text-[14px] leading-[17px] text-fog">Annual Intake</p>
              <p className="font-display text-[24px] font-bold leading-[34px] lg:mt-[5px] lg:text-[28px] lg:leading-[38px]">Approximately 3–4 Batches</p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:mt-[35px] lg:grid-cols-3 lg:gap-6">
          {[
            { open: true, chip: "Enrollment Open", title: "Upcoming Batch" },
            { open: false, chip: "Details to be announced", title: "Internship Batch" },
            { open: false, chip: "Details to be announced", title: "Internship Batch" },
          ].map((b, i) => (
            <article
              key={i}
              className={`relative rounded-[20px] bg-white p-5 shadow-[2px_8px_24px_rgba(20,43,74,0.06)] lg:h-[330px] lg:rounded-[24px] lg:p-7 ${
                b.open ? "border-2 border-teal" : "border border-line"
              }`}
            >
              <span
                className={`inline-flex h-8 items-center gap-2 rounded-full px-[14px] font-display text-[13px] font-bold ${
                  b.open ? "bg-mint text-teal" : "bg-[#f2f4f7] text-slate-500"
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${b.open ? "bg-teal" : "bg-slate-400"}`} />
                {b.chip}
              </span>
              <span className={`absolute right-5 top-5 flex h-12 w-12 lg:right-7 lg:top-7 lg:h-[60px] lg:w-[60px] items-center justify-center rounded-2xl ${b.open ? "bg-teal/[0.14] text-teal" : "bg-mint text-teal"}`}>
                <Award size={22} aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-[24px] font-bold leading-[32px] text-navy-800 lg:mt-[21px] lg:text-[28px] lg:leading-[38px]">{b.title}</h3>
              <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-5 text-navy-800 sm:grid-cols-[auto_1fr] lg:mt-[12px] lg:grid-cols-[182px_1fr] lg:gap-x-0 lg:pt-[25px]">
                <div className="flex gap-[10px]">
                  <Clock size={16} className="mt-[1px] shrink-0 text-teal" aria-hidden />
                  <div>
                    <dt className="text-[13px] leading-4 text-slate-500">Duration</dt>
                    <dd className="mt-[5px] font-display text-[17px] sm:whitespace-nowrap font-bold leading-[25px]">3–4 months</dd>
                  </div>
                </div>
                <div className="flex gap-[10px]">
                  <CalendarDays size={16} className="mt-[1px] shrink-0 text-teal" aria-hidden />
                  <div>
                    <dt className="text-[13px] leading-4 text-slate-500">Start date</dt>
                    <dd className="mt-[5px] font-display text-[17px] sm:whitespace-nowrap font-bold leading-[25px]">To be announced</dd>
                  </div>
                </div>
              </dl>
              <ModalTrigger
                modal="internship"
                className={`mt-5 inline-flex h-[48px] w-full items-center justify-center rounded-[10px] lg:absolute lg:inset-x-7 lg:bottom-[29px] lg:mt-0 lg:h-[52px] lg:w-auto font-display text-[14px] font-bold uppercase transition-colors ${
                  b.open ? "bg-teal text-white hover:bg-[#139488]" : "border-[1.5px] border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white"
                }`}
              >
                Enroll Now
              </ModalTrigger>
            </article>
          ))}
        </div>
      </Section>

      <Section h={722} className="py-14 lg:py-[111px]">
        <div className="grid gap-6 lg:grid-cols-[400px_1fr]">
          <div className="relative overflow-hidden rounded-[24px] bg-navy-grad p-6 text-white lg:min-h-[498px] lg:rounded-[28px] lg:p-10 lg:pt-[44px]">
            <Eyebrow tone="amber" align="left">What you will gain</Eyebrow>
            <h2 className="mt-[10px] font-display text-[30px] font-bold leading-[44px] lg:mt-[13px] lg:text-[34px]">
              Grow With Every
              <br />
              Step of the
              <br />
              Program
            </h2>
            <div aria-hidden className="absolute left-1/2 top-[260px] hidden h-[224px] w-[224px] -translate-x-1/2 lg:block">
              <span className="absolute inset-0 rounded-full border border-navy-line" />
              <span className="absolute inset-8 rounded-full border border-navy-line" />
              <span className="absolute inset-[72px] rounded-full border border-navy-line" />
              <RingIcon size={68} ring={3} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" inner="bg-navy-950">
                <GraduationCap size={26} aria-hidden />
              </RingIcon>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:gap-6">
            {GAINS.map((g) => {
              const t = TONES[g.tone];
              return (
                <article key={g.title} className="relative flex gap-4 rounded-[16px] border border-line bg-white p-4 shadow-[2px_8px_24px_rgba(20,43,74,0.05)] lg:min-h-[150px] lg:gap-4 lg:rounded-[20px] lg:p-6">
                  <span aria-hidden className={`absolute left-0 top-6 h-[calc(100%-48px)] w-[3px] rounded-r ${t.solid}`} />
                  <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${t.bg} ${t.text}`}>
                    <g.icon size={21} strokeWidth={1.9} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-[18px] font-bold leading-[25px] text-navy-800">{g.title}</h3>
                    <p className="mt-[6px] text-[14px] leading-[21px] text-slate-500">{g.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      <Section h={724} bg="surface" className="py-14 lg:py-[111px]">
        <div className="grid items-center gap-12 lg:grid-cols-[560px_1fr] lg:gap-[48px]">
          <div className="relative mx-auto aspect-[560/480] w-full max-w-[560px]">
            <span aria-hidden className="absolute -left-4 top-4 h-full w-full rounded-[28px] bg-teal/[0.14]" />
            <div className="relative h-full w-full overflow-hidden rounded-[28px]">
              <Image src="/images/photo-b.jpg" alt="Students collaborating in a session" fill sizes="560px" className="object-cover" />
            </div>
            <div className="absolute bottom-9 left-7 hidden h-[72px] w-[300px] items-center gap-[14px] rounded-2xl bg-white px-[14px] shadow-[2px_8px_24px_rgba(0,0,0,0.14)] lg:flex">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint text-teal"><UserCheck size={18} aria-hidden /></span>
              <span>
                <span className="block font-display text-[15px] font-bold leading-5 text-navy-800">Open to Students</span>
                <span className="block text-[12.5px] leading-[15px] text-slate-500">and Aspiring Professionals</span>
              </span>
            </div>
          </div>
          <div>
            <Eyebrow align="left">Who can apply</Eyebrow>
            <h2 className="mt-[7px] font-display text-[30px] font-bold leading-[46px] text-navy-800 sm:text-[36px]">
              {"Open to Students and Aspiring\nProfessionals"}
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-[34px] lg:gap-4">
              {AUDIENCE.map((a) => {
                const t = TONES[a.tone];
                return (
                  <article key={a.title} className="rounded-[20px] border border-line bg-white p-5 shadow-[2px_6px_20px_rgba(20,43,74,0.05)] lg:h-[160px] lg:pt-[17px]">
                    <div className="flex items-center gap-4 lg:h-[53px] lg:items-start lg:gap-3">
                      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${t.bg} ${t.text}`}>
                        <a.icon size={18} aria-hidden />
                      </span>
                      <h3 className="font-display text-[17px] font-bold leading-[22px] text-navy-800 lg:-mt-[2px]">{a.title}</h3>
                    </div>
                    <p className="mt-4 text-[13px] leading-[19px] text-slate-500 lg:-mt-[1px]">{a.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <Section h={530} bg="navy-flat" className="py-14 lg:py-[111px]">
        <SectionHeading tone="dark" accent="amber" eyebrow="How it works" title="Internship Program Process" />
        <ol className="mt-10 grid gap-4 lg:mt-[51px] lg:grid-cols-6 lg:gap-[21px]">
          {PROCESS.map((lines, i) => (
            <li key={i} className="relative flex items-center gap-4 rounded-[16px] border border-navy-line bg-navy-900 p-4 lg:min-h-[176px] lg:flex-col lg:justify-start lg:rounded-[20px] lg:px-3 lg:pb-7 lg:pt-[48px] lg:text-center">
              <RingIcon size={48} ring={3} className="lg:absolute lg:-top-[38px] lg:!h-[76px] lg:!w-[76px] lg:!p-1" inner="bg-navy-950">
                <span className="font-display text-[18px] font-bold lg:text-[28px]">{i + 1}</span>
              </RingIcon>
              <div>
              <span className="font-display text-[11px] font-bold leading-[15px] text-teal-300">{`STEP ${String(i + 1).padStart(2, "0")}`}</span>
              <h3 className="mt-1 font-display text-[16px] font-bold leading-[21px] lg:mt-[3px] lg:text-[17px] lg:leading-[23px]">
                {lines.map((l) => (
                  <span key={l} className="block max-lg:inline max-lg:after:content-['_']">{l}</span>
                ))}
              </h3>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section h={554} bg="surface" className="py-14 lg:py-[112px]">
        <div className="relative overflow-hidden rounded-[28px] bg-navy-grad p-8 text-white lg:flex lg:h-[330px] lg:items-start lg:px-14 lg:pb-0 lg:pt-[54px]">
          <div className="relative max-w-[600px]">
            <h2 className="font-display text-[30px] font-bold leading-[40px] sm:text-[34px] lg:text-[38px] lg:leading-[48px]">
              {"Ready to Begin Your Internship\nJourney?"}
            </h2>
            <p className="mt-[18px] max-w-none text-[17px] leading-[26px] text-fog lg:mt-[6px]">
              {"Take the first step toward practical learning and professional\ndevelopment."}
            </p>
            <ModalTrigger modal="internship" className={cta("teal", "lg", "mt-9 lg:mt-[32px] lg:w-[196px]")}>Enroll Now</ModalTrigger>
          </div>
          <div aria-hidden className="absolute right-[14px] top-[15px] hidden h-[300px] w-[300px] lg:block">
            <span className="absolute inset-0 rounded-full border border-navy-line" />
            <span className="absolute inset-10 rounded-full border border-navy-line" />
            <span className="absolute inset-20 rounded-full border border-navy-line" />
            <RingIcon size={112} ring={5} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" inner="bg-navy-950">
              <GraduationCap size={40} aria-hidden />
            </RingIcon>
            <span className="absolute left-[10px] top-[29px] inline-flex h-9 w-[119px] items-center justify-center rounded-[10px] border border-navy-line bg-navy-900 font-display text-[13px] font-bold">3–4 Months</span>
            <span className="absolute left-[110px] top-[235px] inline-flex h-9 w-[157px] items-center justify-center rounded-[10px] border border-navy-line bg-navy-900 font-display text-[13px] font-bold">Guided Learning</span>
          </div>
        </div>
      </Section>
    </>
  );
}
