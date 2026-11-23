import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Check,
  ChevronRight,
  Compass,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  MessageSquare,
  MessageSquareText,
  Link2,
  Store,
  Target,
  Award,
  MessagesSquare,
  Star,
  UserCheck,
  User,
  Users,
} from "lucide-react";
import { Instagram } from "@/components/ui/BrandIcons";
import { Hero, Lines } from "@/components/sections/Hero";
import { Faq } from "@/components/sections/Faq";
import { TONES, TickRow, type Tone } from "@/components/sections/shared";
import { ModalTrigger } from "@/components/modals/ModalProvider";
import { ButtonLink } from "@/components/ui/Button";
import { cta } from "@/components/ui/ctaStyles";
import { Eyebrow, SectionHeading } from "@/components/ui/Section";
import { FAQS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Recruitment & Career Consulting",
  description:
    "Connecting talent, building careers and empowering businesses. Recruitment assistance for employers and resume, interview and career support for students and professionals — online across India.",
  alternates: { canonical: "/" },
};

const CORE: { tone: Tone; icon: typeof FileText; title: string; text: string }[] = [
  { tone: "teal", icon: FileText, title: "Resume & CV Building", text: "Professionally structured resumes\nthat present your skills and\nexperience clearly." },
  { tone: "amber", icon: Link2, title: "LinkedIn Profile Improvement", text: "Sharpen your headline, summary\nand experience to attract the\nright opportunities." },
  { tone: "violet", icon: MessageSquare, title: "Interview Preparation\n& Mock Interviews", text: "Practice real questions and build\nconfidence before the big day." },
  { tone: "pink", icon: GraduationCap, title: "Internship Readiness Sessions", text: "Get career-ready with practical\nguidance for your first\nopportunity." },
  { tone: "blue", icon: Compass, title: "Career Guidance &\nMentoring", text: "One-to-one conversations to\nclarify direction and plan your\nnext steps." },
  { tone: "aqua", icon: Users, title: "Recruitment & Talent\nSourcing", text: "Help for businesses to find and\nshortlist suitable candidates." },
  { tone: "orange", icon: Award, title: "Corporate and College\nWorkshops", text: "Career-focused workshops for\nstudents and professionals." },
];

const WHY: { tone: Tone; icon: typeof Star; title: string; text: string }[] = [
  { tone: "teal", icon: Target, title: "Practical, Career-Focused Guidance", text: "Advice rooted in what helps people prepare\nfor real opportunities." },
  { tone: "amber", icon: Heart, title: "Personalised Support", text: "Support shaped around your goals,\nbackground and timeline." },
  { tone: "violet", icon: Users, title: "Employer and|Candidate-Focused Solutions", text: "Dedicated paths for businesses hiring\ntalent and people building careers." },
  { tone: "pink", icon: Globe, title: "Online Sessions Accessible\nAcross India", text: "Connect with our consultants from anywhere\nthrough online sessions." },
];

const CAND_STEPS = ["Choose Your Service", "Share Your Career\nGoals", "Connect with Our\nConsultant", "Take Your Next\nCareer Step"];
const EMP_STEPS = ["Share Your Hiring\nRequirements", "Discuss Candidate Needs", "Receive Suitable\nTalent Profiles", "Move Forward with\nHiring"];

const PRICES: { tone: Tone; icon: typeof FileText; title: string; price: string; featured?: boolean }[] = [
  { tone: "teal", icon: FileText, title: "Resume & CV Building", price: "₹499" },
  { tone: "amber", icon: Link2, title: "Resume + LinkedIn|Profile", price: "₹999", featured: true },
  { tone: "violet", icon: MessageSquare, title: "Mock Interview Session", price: "₹499" },
  { tone: "pink", icon: GraduationCap, title: "Interview Preparation|Bundle", price: "₹999" },
];

const WHO: { tone: Tone; icon: typeof Star; title: string; text: string }[] = [
  { tone: "teal", icon: GraduationCap, title: "Students & Freshers", text: "Build skills and confidence\nbefore your first step." },
  { tone: "amber", icon: Briefcase, title: "Experienced Professionals", text: "Refresh your profile and plan\nyour next move." },
  { tone: "violet", icon: Store, title: "Startups & Businesses", text: "Find suitable candidates as your\nteam grows." },
  { tone: "pink", icon: Users, title: "Colleges & Corporates", text: "Arrange career-focused workshops\nfor your group." },
];

const TESTIMONIALS: Tone[] = ["teal", "amber", "violet"];

export default function HomePage() {
  return (
    <>
      <Hero
        pill="Recruitment & Career Consulting"
        lines={[
          { text: "Connecting Talent.", tone: "white" },
          { text: "Building Careers.", tone: "teal" },
          { text: "Empowering Businesses.", tone: "amber" },
        ]}
        body={<Lines lines={["We help businesses connect with suitable talent and help", "students and professionals prepare for successful", "careers."]} />}
        actions={
          <>
            <ButtonLink href="/for-employers" variant="amber" className="lg:w-[196px]">
              Hire Talent
            </ButtonLink>
            <ButtonLink href="/for-candidates" variant="outline-white" className="lg:w-[247px]">
              Build Your Career
            </ButtonLink>
          </>
        }
        perks={[
          { icon: Globe, text: "Online sessions across India" },
          { icon: User, text: "Personalised support" },
          { icon: Users, text: "Employers & candidates" },
        ]}
        perksBold
        perkGaps={[59, 41]}
        image="/images/home-hero.jpg"
        imageAlt="Consultant guiding a candidate through a career session"
        mobileAspect="350/300"
        floats={[
          { icon: Globe, title: "Online sessions", sub: "Accessible across India", pos: "lg:left-[238px] lg:top-12", width: 250, mobile: true },
          { icon: FileText, title: "Resume & Interview", sub: "Career mentoring", pos: "lg:left-[254px] lg:top-[214px]", width: 234 },
        ]}
        extra={
          <>
            <span aria-hidden className="absolute -bottom-16 -right-6 hidden h-24 w-24 rounded-[24px] bg-amber lg:block" />
            <div className="absolute bottom-0 left-5 hidden h-[216px] w-[416px] rounded-[22px] bg-white p-2 shadow-[0_10px_30px_rgba(0,0,0,0.18)] lg:block">
              <div className="relative h-full w-full overflow-hidden rounded-[16px]">
                <Image src="/images/home-hero-card.jpg" alt="Career consultation in progress" fill sizes="400px" className="object-cover" />
              </div>
            </div>
          </>
        }
      />

      {/* Choose your path */}
      <section className="bg-white py-14 lg:py-[111px] lg:h-[783px]">
        <div className="wrap">
          <SectionHeading eyebrow="Choose your path" title="Where would you like to start?" />
          <div className="mt-8 grid gap-4 lg:gap-6 lg:mt-[53px] lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-[28px] bg-navy-grad p-7 text-white lg:min-h-[427px] lg:p-10">
              <span aria-hidden className="absolute right-[6px] top-[14px] h-32 w-32 rounded-full bg-teal/[0.16]" />
              <span aria-hidden className="absolute right-[32px] top-10 h-[76px] w-[76px] rounded-full bg-amber/[0.14]" />
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-ig-grad p-[3px]">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-navy-900">
                  <Briefcase size={21} strokeWidth={1.9} aria-hidden />
                </span>
              </span>
              <p className="relative mt-[15px] font-display text-[12.5px] font-bold uppercase leading-[17px] text-amber">For Employers</p>
              <h3 className="relative mt-[5px] font-display text-[26px] font-bold leading-[34px] lg:text-[32px] lg:leading-[40px]">
                Find the Right Talent
                <br className="hidden lg:block" />
                for Your Business
              </h3>
              <p className="relative mt-[13px] max-w-[420px] text-[14px] leading-[21px] text-fog lg:mt-[10px] lg:text-[16px] lg:leading-[25px]">
                {"Connect with suitable candidates through recruitment\nassistance, candidate sourcing, and hiring\ncoordination."}
              </p>
              <ButtonLink href="/for-employers" variant="amber" size="md" className="relative mt-[29px] min-w-[196px]">
                Hire Talent
              </ButtonLink>
            </article>

            <article className="relative overflow-hidden rounded-[28px] border border-mint-line bg-mint p-7 lg:min-h-[427px] lg:p-10">
              <span aria-hidden className="absolute right-[6px] top-[14px] h-32 w-32 rounded-full bg-teal/[0.14]" />
              <span aria-hidden className="absolute right-[32px] top-10 h-[76px] w-[76px] rounded-full bg-teal/[0.14]" />
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-teal text-white">
                <GraduationCap size={23} strokeWidth={1.9} aria-hidden />
              </span>
              <p className="relative mt-[15px] font-display text-[12.5px] font-bold uppercase leading-[17px] text-teal">For Students &amp; Job Seekers</p>
              <h3 className="relative mt-[5px] font-display text-[26px] font-bold leading-[34px] text-navy-800 lg:text-[32px] lg:leading-[40px]">
                Build Your Career with
                <br className="hidden lg:block" />
                Confidence
              </h3>
              <p className="relative mt-[13px] max-w-[420px] text-[14px] leading-[21px] text-slate-500 lg:mt-[10px] lg:text-[16px] lg:leading-[25px]">
                {"Get career-ready through resume building, interview\npreparation, internship-readiness sessions, and career\nguidance."}
              </p>
              <ButtonLink href="/for-candidates" variant="teal" size="md" className="relative mt-[29px] min-w-[232px]">
                Build Your Career
              </ButtonLink>
            </article>
          </div>
        </div>
      </section>

      {/* Core services */}
      <section className="bg-surface py-14 lg:py-[111px] lg:h-[1016px]">
        <div className="wrap">
          <SectionHeading
            eyebrow="What we do"
            title="Our Core Services"
            subtitle="Practical career support and recruitment solutions designed to help people and businesses move forward."
          />
          <div className="mt-8 grid gap-4 lg:gap-6 sm:grid-cols-2 lg:mt-[65px] lg:grid-cols-4">
            {CORE.map((c, i) => {
              const t = TONES[c.tone];
              return (
                <article
                  key={c.title}
                  className="relative flex gap-4 rounded-[16px] border border-line bg-white p-4 shadow-[2px_8px_24px_rgba(20,43,74,0.05)] transition-transform hover:-translate-y-1 lg:min-h-[296px] lg:flex-col lg:gap-0 lg:rounded-[20px] lg:px-6 lg:pb-3 lg:pt-6"
                >
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl lg:h-14 lg:w-14 lg:rounded-2xl ${t.bg} ${t.text}`}>
                    <c.icon size={20} strokeWidth={1.9} aria-hidden />
                  </span>
                  <span className="absolute right-11 top-[22px] hidden font-display text-[20px] font-bold leading-[27px] text-line lg:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-1 flex-col lg:contents">
                  <h3 className="font-display text-[16px] font-bold leading-5 text-navy-800 lg:mt-[19px] lg:text-[19px] lg:leading-[25px]">{c.title}</h3>
                  <p className="mt-[6px] text-[13px] leading-[18px] text-slate-500 lg:mt-[6px] lg:text-[14px] lg:leading-[21px]">{c.text}</p>
                  <div className="mt-3 lg:mt-auto lg:border-t lg:border-line lg:pt-[14px]">
                    <Link href="/services" className="group inline-flex items-center gap-[10px] font-display text-[14px] font-bold leading-[19px] text-teal">
                      Learn More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden />
                    </Link>
                  </div>
                  </div>
                </article>
              );
            })}
            <article className="relative flex min-h-[220px] flex-col overflow-hidden rounded-[20px] bg-navy-grad p-6 text-white lg:min-h-[296px] lg:pb-[17px]">
              <span aria-hidden className="absolute -right-1 -top-[6px] h-[100px] w-[100px] rounded-full bg-teal/[0.16]" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-ig-grad p-[3px]">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-navy-900">
                  <MessageSquareText size={18} strokeWidth={1.9} aria-hidden />
                </span>
              </span>
              <h3 className="relative mt-5 font-display text-[22px] font-bold leading-[30px] lg:mt-[17px]">
                Not sure where to <br />
                begin?
              </h3>
              <p className="relative mt-[7px] text-[14px] leading-[21px] text-fog">{"Talk to a consultant and find the\nright service for your goals."}</p>
              <Link href="/contact#booking" className={`${cta("amber", "sm")} relative mt-auto w-fit self-start px-6 normal-case! lg:w-[246px]`}>
                <span className="normal-case!">Book a Consultation</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* New programs */}
      <section className="bg-navy-grad py-16 text-white lg:py-[111px] lg:h-[832px]">
        <div className="wrap">
          <SectionHeading
            tone="dark"
            eyebrow="New programs"
            title="Two new ways to grow with SmartMovess"
            subtitle="Build real experience with our Internship Program, or get your Instagram profile professionally reviewed."
          />
          <div className="mt-8 grid gap-4 lg:mt-[65px] lg:grid-cols-2 lg:gap-6">
            {[
              {
                key: "internship",
                badge: "3–4 MONTH PROGRAM",
                badgeTone: "text-teal-300",
                icon: <GraduationCap size={25} strokeWidth={2} aria-hidden />,
                iconBg: "bg-teal",
                glow: "bg-teal/[0.08]",
                title: "Internship Program",
                text: "Gain practical experience, develop professional skills and\nprepare for future career opportunities.",
                points: ["Practical, hands-on learning", "Career development support", "Industry exposure"],
                primary: "Enroll Now",
                secondary: { href: "/internship", label: "Explore Program" },
              },
              {
                key: "instagram",
                badge: "PROFILE REVIEW",
                badgeTone: "text-amber",
                icon: <Instagram size={25} strokeWidth={2} aria-hidden />,
                iconBg: "bg-ig-grad",
                glow: "bg-amber-600/[0.08]",
                title: "Instagram Profile Audit",
                text: "A detailed review of your Instagram profile with practical\nsuggestions to improve your presence and engagement.",
                points: ["Profile and bio review", "Content and engagement tips", "Actionable recommendations"],
                primary: "Get Your Audit",
                secondary: { href: "/instagram-audit", label: "View Audit Details" },
              },
            ].map((p) => (
              <article key={p.key} className="relative overflow-hidden rounded-[24px] border border-navy-line bg-navy-900 p-6 lg:min-h-[432px] lg:rounded-[28px] lg:p-9">
                <span aria-hidden className={`absolute bottom-0 right-[10px] h-[140px] w-[140px] rounded-full ${p.glow}`} />
                <div className="relative flex items-center justify-between gap-4">
                  <span className={`flex h-[52px] w-[52px] items-center justify-center rounded-2xl text-white lg:h-[60px] lg:w-[60px] lg:rounded-[18px] ${p.iconBg}`}>{p.icon}</span>
                  <span className={`inline-flex h-[26px] items-center rounded-full border border-navy-line bg-white/10 px-[10px] font-display text-[11px] font-bold ${p.badgeTone}`}>
                    {p.badge}
                  </span>
                </div>
                <h3 className="relative mt-5 font-display text-[26px] font-bold leading-[34px] lg:mt-[17px] lg:text-[30px] lg:leading-[41px]">{p.title}</h3>
                <p className="relative mt-[2px] max-w-[440px] text-[14px] leading-[21px] text-fog lg:-mt-[2px] lg:text-[16px] lg:leading-[26px]">{p.text}</p>
                <ul className="relative mt-5 flex flex-col gap-3 lg:mt-[22px]">
                  {p.points.map((pt) => (
                    <TickRow key={pt} size={22}>
                      {pt}
                    </TickRow>
                  ))}
                </ul>
                <div className="relative mt-6 flex flex-col gap-[10px] sm:flex-row sm:flex-wrap sm:gap-3 lg:mt-[26px] lg:gap-[13px] max-sm:[&>*]:w-full">
                  <ModalTrigger modal={p.key as "internship" | "instagram"} className={cta("amber", "md", `px-6 ${p.key === "internship" ? "lg:w-[135px]" : "lg:w-[169px]"}`)}>
                    {p.primary}
                  </ModalTrigger>
                  <Link href={p.secondary.href} className={cta("outline-white", "md", `px-6 ${p.key === "internship" ? "lg:w-[177px]" : "lg:w-[202px]"}`)}>
                    {p.secondary.label}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-white py-14 lg:py-[111px] lg:h-[728px]">
        <div className="wrap grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-11 xl:gap-11">
          <div>
            <Eyebrow align="left">Our approach</Eyebrow>
            <h2 className="mt-[7px] font-display text-[34px] font-bold leading-[44px] text-navy-800 lg:mt-[10px] lg:text-[40px] lg:leading-[50px]">
              Why Choose
              <br />
              SmartMovess?
            </h2>
            <div className="relative mt-10 hidden overflow-hidden rounded-[24px] bg-navy-grad p-8 text-white lg:mt-[62px] lg:block lg:h-[314px] lg:p-7 lg:pl-8">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ig-grad p-[3px]">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-navy-900">
                  <Award size={20} strokeWidth={1.9} aria-hidden />
                </span>
              </span>
              <p className="mt-[20px] max-w-[260px] text-[15px] leading-[23px] text-fog lg:mt-[11px]">
                {"Practical support for employers and\ncandidates, delivered online across\nIndia."}
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:auto-rows-[240px] lg:content-start">
            {WHY.map((w) => {
              const t = TONES[w.tone];
              return (
                <article key={w.title} className={`relative flex gap-4 overflow-hidden rounded-[20px] p-5 lg:block lg:h-[240px] lg:p-7 ${t.bg}`}>
                  <span aria-hidden className={`absolute -right-[14px] -top-4 hidden h-[140px] w-[140px] rounded-full lg:block ${t.ring}`} />
                  <span aria-hidden className={`absolute right-[16px] top-[14px] hidden h-20 w-20 rounded-full lg:block ${t.ring}`} />
                  <span className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white lg:h-[60px] lg:w-[60px] lg:rounded-2xl ${t.solid}`}>
                    <w.icon size={20} strokeWidth={1.9} aria-hidden />
                  </span>
                  <div className="relative">
                    <h3 className="font-display text-[18px] font-bold leading-6 text-navy-800 lg:mt-[19px] lg:text-[21px] lg:leading-[27px]">
                      {w.title.split("|").map((l) => (
                        <span key={l} className="block">{l}</span>
                      ))}
                    </h3>
                    <p className="mt-[6px] text-[14px] leading-[21px] text-slate-500 lg:mt-[4px] lg:text-[15px] lg:leading-[23px]">{w.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-navy-950 py-16 text-white lg:py-[111px] lg:h-[746px]">
        <div className="wrap">
          <SectionHeading tone="dark" accent="amber" eyebrow="How it works" title="Two paths. One simple process." />
          <div className="mt-8 flex flex-col gap-9 lg:mt-[31px] lg:gap-12">
            {[
              { label: "For Candidates", dot: "bg-teal-400", ring: "teal-400", steps: CAND_STEPS, grad: true },
              { label: "For Employers", dot: "bg-amber", ring: "amber", steps: EMP_STEPS, grad: false },
            ].map((row) => (
              <div key={row.label}>
                <span className="inline-flex h-[38px] items-center gap-[9px] rounded-full border border-navy-line bg-navy-900 px-[15px]">
                  <span className={`h-[10px] w-[10px] rounded-full ${row.dot}`} />
                  <span className="font-display text-[13px] font-bold uppercase leading-[18px]">{row.label}</span>
                </span>
                <ol className="mt-5 grid gap-4 lg:mt-[24px] lg:grid-cols-4 lg:gap-8">
                  {row.steps.map((s, i) => (
                    <li key={s} className="relative flex h-16 items-center gap-4 rounded-[16px] border border-navy-line bg-navy-900 px-[14px] lg:h-[120px] lg:rounded-[20px] lg:px-6">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full p-[2px] lg:h-14 lg:w-14 lg:p-[3px] ${row.grad ? "bg-ig-grad" : "bg-amber"}`}
                      >
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-navy-950 font-display text-[16px] font-bold leading-none lg:text-[24px]">
                          {i + 1}
                        </span>
                      </span>
                      <span className="max-w-[240px] font-display text-[15px] font-bold leading-5 lg:-translate-y-[1.5px] lg:max-w-[160px] lg:text-[17px] lg:leading-[23px]">{s}</span>
                      {i < 3 && (
                        <span aria-hidden className={`absolute left-[33px] top-full h-4 border-l border-dashed lg:hidden ${row.grad ? "border-teal-400/70" : "border-amber/70"}`} />
                      )}
                      {i < 3 && (
                        <span
                          aria-hidden
                          className={`absolute -right-[28px] top-1/2 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border-2 bg-navy-950 lg:flex ${
                            row.grad ? "border-teal-400 text-teal-400" : "border-amber text-amber"
                          }`}
                        >
                          <ChevronRight size={16} strokeWidth={2.8} />
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-surface py-14 lg:py-[111px] lg:h-[646px]">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Eyebrow align="left">Service pricing</Eyebrow>
              <h2 className="mt-[7px] font-display text-[34px] font-bold leading-[44px] text-navy-800 lg:text-[40px] lg:leading-[55px]">Starting prices</h2>
            </div>
            <Link href="/services" className="group inline-flex items-center gap-[10px] pb-2 lg:gap-[38px] lg:pb-[15px] font-display text-[14px] font-bold leading-[19px] text-teal">
              Explore All Services <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-[53px] lg:grid-cols-4">
            {PRICES.map((p) => {
              const t = TONES[p.tone];
              return (
                <article
                  key={p.title}
                  className={`relative flex flex-col rounded-[20px] p-5 shadow-[2px_8px_24px_rgba(20,43,74,0.06)] lg:min-h-[290px] lg:p-6 ${
                    p.featured ? "bg-navy-grad text-white" : "border border-line bg-white"
                  }`}
                >
                  {p.featured && (
                    <span className="absolute right-4 top-4 inline-flex h-[26px] items-center rounded-full bg-amber pb-[2px] pl-[14px] pr-[8px] font-display text-[11px] font-bold text-navy-800 lg:right-[22px] lg:top-5">
                      POPULAR
                    </span>
                  )}
                  <div className="flex items-start gap-4 lg:block">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] ${p.featured ? "bg-navy-900 text-amber" : `${t.bg} ${t.text}`}`}>
                      <p.icon size={20} strokeWidth={1.9} aria-hidden />
                    </span>
                    <h3 className={`font-display text-[17px] font-bold leading-[22px] lg:mt-[13px] lg:text-[19px] lg:leading-[25px] ${p.featured ? "text-white" : "text-navy-800"}`}>
                      {p.title.split("|").map((l) => (
                        <span key={l} className="block">{l}</span>
                      ))}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-end justify-between lg:mt-auto lg:block">
                    <div>
                      <p className={`text-[13px] leading-4 ${p.featured ? "text-fog" : "text-slate-500"}`}>Starting at</p>
                      <p className={`font-display text-[30px] font-bold leading-[40px] lg:text-[36px] lg:leading-[49px] ${p.featured ? "text-amber" : "text-navy-800"}`}>{p.price}</p>
                    </div>
                    <Link
                      href="/contact#booking"
                      className={`inline-flex h-11 w-[128px] items-center justify-center rounded-[10px] font-display text-[13px] font-bold transition-colors lg:mt-4 lg:h-[45px] lg:w-full ${
                        p.featured
                          ? "bg-amber text-navy-950 hover:bg-[#f7c677]"
                          : "border-[1.5px] border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white"
                      }`}
                    >
                      Book now
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="bg-white py-14 lg:py-[111px] lg:h-[656px]">
        <div className="wrap">
          <SectionHeading eyebrow="Who we help" title="Support for every stage of your journey" />
          <div className="mt-8 grid gap-4 lg:gap-6 sm:grid-cols-2 lg:mt-[53px] lg:grid-cols-4">
            {WHO.map((w) => {
              const t = TONES[w.tone];
              return (
                <article key={w.title} className={`relative overflow-hidden rounded-[20px] lg:rounded-[24px] lg:pt-[42px] lg:h-[300px] ${t.bg}`}>
                  <span aria-hidden className={`absolute -right-[6px] -top-5 hidden h-[100px] w-[100px] rounded-full lg:block ${t.ring}`} />
                  <div className="flex gap-4 p-5 lg:hidden">
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white ${t.solid}`}>
                      <w.icon size={20} strokeWidth={1.9} aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-display text-[18px] font-bold leading-6 text-navy-800">{w.title}</h3>
                      <p className="mt-[6px] text-[14px] leading-[21px] text-slate-500">{w.text}</p>
                    </div>
                  </div>
                  <span className={`absolute left-1/2 top-10 hidden h-[72px] w-[72px] -translate-x-1/2 items-center justify-center rounded-full text-white lg:flex ${t.solid}`}>
                    <w.icon size={26} strokeWidth={1.9} aria-hidden />
                  </span>
                  <div className="mx-3 mt-[70px] hidden h-[176px] rounded-[16px] bg-white px-4 pt-[18px] text-center lg:block">
                    <h3 className="-mt-[3px] font-display text-[20px] font-bold leading-[27px] text-navy-800 lg:mb-[6px] lg:h-[53px]">{w.title}</h3>
                    <p className="mx-auto mt-[19px] text-[14px] leading-[21px] text-slate-500 lg:mt-0">{w.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="bg-white py-14 lg:py-[112px] lg:h-[764px]">
        <div className="wrap">
          <div className="relative overflow-hidden rounded-[24px] bg-navy-grad text-white lg:rounded-[32px] lg:grid lg:min-h-[540px] lg:grid-cols-[minmax(0,1fr)_590px] lg:items-center">
            <div className="relative p-6 lg:py-[62px] lg:pl-14 lg:pr-4">
              <p className="font-display text-[13px] font-bold uppercase leading-[18px] text-amber">Workshops</p>
              <h2 className="mt-[7px] font-display text-[32px] font-bold leading-[48px] lg:mt-[10px] lg:text-[38px]">
                Workshops for Colleges
                <br />
                and Businesses
              </h2>
              <p className="mt-[18px] max-w-[460px] text-[16px] leading-[25px] text-fog lg:mt-[8px] lg:max-w-none">
                {"Career-focused workshops designed to help students and\nprofessionals build practical skills and confidence."}
              </p>
              <ul className="mt-8 flex flex-col gap-5 lg:mt-[39px]">
                {["Internship-readiness sessions for students", "Interview and resume skills for groups", "Career guidance for college and corporate teams"].map((t) => (
                  <li key={t} className="flex items-start gap-4 text-[16px] leading-[19px] lg:gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-teal/25 text-teal-300">
                      <Check size={12} strokeWidth={2.4} aria-hidden />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <ButtonLink href="/services#workshops" variant="amber" size="lg" className="mt-9 lg:w-[296px]">
                Enquire About Workshops
              </ButtonLink>
            </div>
            <div className="relative mx-6 mb-6 aspect-[350/240] lg:m-0 lg:aspect-auto lg:h-[480px] lg:w-[560px]">
              <span aria-hidden className="absolute left-3 top-[30px] h-full w-full rounded-[28px] bg-teal/20" />
              <div className="relative h-full w-full overflow-hidden rounded-[28px]">
                <Image src="/images/photo-b.jpg" alt="Group workshop session" fill sizes="560px" className="object-cover" />
              </div>
              <div className="absolute bottom-[23px] -left-[30px] hidden h-[72px] w-[268px] items-start gap-3 rounded-2xl bg-white pl-[14px] pt-[14px] shadow-[2px_8px_24px_rgba(0,0,0,0.18)] lg:flex">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint text-teal">
                  <Users size={18} aria-hidden />
                </span>
                <span>
                  <span className="mt-[1px] block font-display text-[15px] font-bold leading-5 text-navy-800">Colleges &amp; Corporates</span>
                  <span className="mt-1 block text-[12.5px] leading-[15px] text-slate-500">Group workshops</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface py-14 lg:py-[111px] lg:h-[644px]">
        <div className="wrap">
          <SectionHeading eyebrow="What people say" title="Stories from our community" />
          <p className="mt-4 text-center text-[13px] leading-4 text-slate-500 lg:mt-[44px]">
            Placeholder content — replace with real feedback before launch.
          </p>
          <div className="mt-8 grid gap-4 lg:gap-6 lg:mt-[17px] lg:grid-cols-3">
            {TESTIMONIALS.map((tone) => {
              const t = TONES[tone];
              return (
                <figure key={tone} className="relative rounded-[16px] border border-line bg-white p-5 shadow-[2px_8px_24px_rgba(20,43,74,0.05)] lg:min-h-[264px] lg:rounded-[20px] lg:p-7">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${t.bg} ${t.text}`}>
                    <MessagesSquare size={20} strokeWidth={1.9} aria-hidden />
                  </span>
                  <span aria-hidden className={`absolute right-5 top-[22px] font-display text-[72px] lg:right-12 font-bold leading-[98px] ${t.text} opacity-20`}>
                    “
                  </span>
                  <blockquote className="mt-4 max-w-[300px] text-[15px] leading-[23px] text-ink lg:mt-[15px] lg:max-w-none lg:text-[16px] lg:leading-[25px]">
                    {"Testimonial placeholder. Add a short,\ngenuine and specific piece of feedback\nfrom a candidate or employer here."}
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-[14px] border-t border-line pt-[13px] lg:pt-[13px]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ig-grad p-[3px]">
                      <span className={`flex h-full w-full items-center justify-center rounded-full ${t.bg} ${t.text}`}>
                        <UserCheck size={16} aria-hidden />
                      </span>
                    </span>
                    <span>
                      <span className="block font-display text-[16px] font-bold leading-[22px] text-navy-800">Name Surname</span>
                      <span className="mt-[3px] block text-[13px] leading-4 text-slate-500">Role · Company · College</span>
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 lg:py-[111px] lg:h-[732px]">
        <div className="wrap grid gap-10 lg:grid-cols-[360px_1fr] lg:gap-[64px]">
          <div>
            <Eyebrow align="left">FAQ</Eyebrow>
            <h2 className="mt-[7px] font-display text-[36px] font-bold leading-[54px] text-navy-800 lg:mt-[10px] lg:text-[44px]">
              Questions,
              <span className="block text-teal">answered</span>
            </h2>
            <p className="mt-[18px] max-w-[340px] text-[16px] leading-[25px] text-slate-500 lg:mt-[13px] lg:max-w-none">
              {"Quick answers about our services, bookings\nand recruitment support."}
            </p>
            <Link href="/contact" className="group mt-[26px] inline-flex lg:mt-[39px] items-center gap-[10px] font-display text-[14px] font-bold leading-[19px] text-teal">
              View All FAQs <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
          <Faq items={FAQS} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-surface py-14 lg:py-[112px] lg:h-[594px]">
        <div className="wrap">
          <div className="relative overflow-hidden rounded-[24px] bg-navy-grad px-6 py-10 text-white lg:min-h-[370px] lg:rounded-[32px] lg:px-14 lg:py-[52px]">
            <span aria-hidden className="absolute right-[4px] top-[35px] hidden h-[300px] w-[300px] rounded-full border border-navy-line lg:block" />
            <span aria-hidden className="absolute right-[44px] top-[75px] hidden h-[220px] w-[220px] rounded-full border border-navy-line lg:block" />
            <span aria-hidden className="absolute right-[84px] top-[115px] hidden h-[140px] w-[140px] rounded-full border border-navy-line lg:block" />
            <span className="absolute right-[102px] top-[133px] hidden h-[104px] w-[104px] items-center justify-center rounded-full bg-ig-grad p-[3px] lg:flex">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-navy-900">
                <MessageSquareText size={32} strokeWidth={2.4} aria-hidden />
              </span>
            </span>
            <h2 className="relative max-w-none font-display text-[32px] font-bold leading-[45px] lg:top-[2px] lg:text-[42px] lg:leading-[52px]">
              {"Let’s Take the Next Step\nTogether."}
            </h2>
            <p className="relative mt-[16px] text-[17px] leading-[26px] text-fog lg:max-w-none">
              {"Whether you're hiring talent or building your career, SmartMovess is\nhere to support your journey."}
            </p>
            <div className="relative mt-[38px] flex flex-wrap gap-4 lg:gap-[16px]">
              <ButtonLink href="/for-employers#hiring" variant="amber" size="lg" className="normal-case! lg:w-[392px] lg:text-[14px]">
                Employers: Share Your Hiring Requirements
              </ButtonLink>
              <ButtonLink href="/contact#booking" variant="teal" size="lg" className="normal-case! lg:w-[376px] lg:text-[14px]">
                Candidates: Book a Career Consultation
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
