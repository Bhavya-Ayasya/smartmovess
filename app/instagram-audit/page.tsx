import type { Metadata } from "next";
import Image from "next/image";
import {
  BarChart3,
  Check,
  ClipboardCheck,
  Film,
  Globe,
  LayoutGrid,
  LineChart,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  Palette,
  Presentation,
  Search,
  Store,
  TrendingUp,
  UserRound,
  Briefcase,
  Rocket,
  Target,
  Eye,
  Heart,
  MapPin,
} from "lucide-react";
import { Instagram } from "@/components/ui/BrandIcons";
import { GlobalMap, Orbit } from "@/components/sections/Orbit";
import { PhoneMock } from "@/components/sections/PhoneMock";
import { RingIcon } from "@/components/sections/RingIcon";
import { TONES, type Tone } from "@/components/sections/shared";
import { FloatingCard, Lines } from "@/components/sections/Hero";
import { ModalTrigger } from "@/components/modals/ModalProvider";
import { ButtonLink } from "@/components/ui/Button";
import { cta } from "@/components/ui/ctaStyles";
import { Eyebrow, Pill, Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Instagram Profile Audit & Growth Consulting",
  description:
    "Professional Instagram profile audits delivered remotely to clients in India, the USA, Canada, the UK, the UAE and beyond. Understand what is holding your Instagram growth back.",
  alternates: { canonical: "/instagram-audit" },
};

const COUNTRIES = ["India", "USA", "Canada", "UK", "UAE", "Other Countries"];

const WHY: { tone: Tone; n: string; title: string[]; text: string; icon: typeof Eye }[] = [
  { tone: "teal", n: "01", title: ["Profile Visitors Aren't", "Following You"], text: "Understand why people visit your Instagram\nprofile but do not choose to follow your\nbusiness.", icon: Eye },
  { tone: "amber", n: "02", title: ["Reels Get Views but No", "Enquiries"], text: "Identify possible gaps between your Reel\ncontent, audience interest, and enquiry\ngeneration.", icon: Film },
  { tone: "violet", n: "03", title: ["Followers Aren't Converting", "Into Customers"], text: "Understand what may be preventing your\nfollowers from taking the next step toward\nbecoming customers.", icon: MousePointerClick },
  { tone: "pink", n: "04", title: ["Improve Reach, Engagement &", "Sales"], text: "Discover changes that may help improve your\nInstagram reach, engagement, and business\nperformance.", icon: TrendingUp },
  { tone: "blue", n: "05", title: ["Build a Stronger Instagram", "Brand"], text: "Explore opportunities to create a more\nconsistent, professional, and recognizable\nInstagram brand.", icon: Palette },
];

const FOCUS: [string, typeof Eye][] = [
  ["Instagram Profile & Bio", UserRound],
  ["Profile Positioning", Target],
  ["Content Presentation", LayoutGrid],
  ["Reels & Content Strategy", Film],
  ["Audience Engagement", MessageCircle],
  ["Call-to-Action Clarity", Megaphone],
  ["Business Enquiry Journey", ClipboardCheck],
  ["Brand Consistency", Palette],
];

const WHO: { tone: Tone; icon: typeof Eye; title: string[]; text: string }[] = [
  { tone: "teal", icon: Store, title: ["Small Business Owners"], text: "Placeholder description: owners who want\ntheir Instagram profile to support their\nbusiness." },
  { tone: "amber", icon: Rocket, title: ["Entrepreneurs"], text: "Placeholder description: founders building\na brand presence on Instagram." },
  { tone: "violet", icon: Presentation, title: ["Coaches & Consultants"], text: "Placeholder description: experts who want\ntheir profile to attract the right\naudience." },
  { tone: "pink", icon: Heart, title: ["Personal Brands"], text: "Placeholder description: creators and\nprofessionals shaping a recognisable\npersonal brand." },
  { tone: "blue", icon: Briefcase, title: ["Service-Based Businesses"], text: "Placeholder description: service providers\nwho want more enquiries from Instagram." },
  { tone: "aqua", icon: BarChart3, title: ["Brands Looking to Improve", "Instagram Performance"], text: "Placeholder description: brands that want\nto understand and improve their profile\nperformance." },
];

const STEPS = [
  { icon: Instagram, title: ["Submit Your", "Instagram Profile", "Details"], text: "Share your Instagram handle and\nbusiness details through the\nform." },
  { icon: Target, title: ["Share Your Business", "Goals"], text: "Tell us about your brand and\nwhat you want to achieve on\nInstagram." },
  { icon: Search, title: ["Get Your Profile", "Audit & Growth", "Consultation"], text: "Receive a professional review of\nyour profile along with a\nconsultation." },
  { icon: LineChart, title: ["Understand", "Recommended", "Improvement Areas"], text: "See the areas of your profile\nthat can be strengthened next." },
];

export default function InstagramAuditPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-grad text-white lg:h-[744px]">
        <span aria-hidden className="absolute -right-10 -top-[180px] h-[560px] w-[560px] rounded-full bg-teal/[0.14]" />
        <span aria-hidden className="absolute -bottom-[180px] -left-[120px] h-[360px] w-[360px] rounded-full bg-amber/[0.07]" />
        <div className="wrap relative grid gap-12 pb-16 pt-12 lg:min-h-[744px] lg:grid-cols-[minmax(0,1fr)_512px] lg:items-start lg:gap-10 lg:pb-0 lg:pt-[112px]">
          <div className="min-w-0">
            <Pill>Instagram Audit &amp; Growth Consulting</Pill>
            <h1 className="mt-[23px] lg:relative lg:top-[3px] font-display text-[34px] font-bold leading-[42px] sm:text-[40px] sm:leading-[50px] lg:text-[46px] lg:leading-[58px]">
              <span className="block">Turn Your Instagram</span>
              <span className="block">Profile Into a Stronger</span>
              <span className="block text-teal-400">Business Presence</span>
            </h1>
            <p className="mt-[20px] max-w-[520px] text-[16px] leading-[26px] text-fog-2 lg:text-[18px] lg:leading-[29px]">
              <Lines
                lines={[
                  "Get a professional Instagram Profile Audit and Growth",
                  "Consulting service to understand what is stopping your",
                  "profile from attracting followers, generating enquiries,",
                  "and converting your audience into customers.",
                ]}
              />
            </p>
            <div className="mt-8 flex flex-wrap gap-4 lg:mt-[42px] lg:gap-[13px]">
              <ModalTrigger modal="instagram" className={cta("teal", "lg", "px-8 lg:w-[280px]")}>Get Your Instagram Audit</ModalTrigger>
              <ButtonLink href="#focus" variant="outline-white" className="px-8 lg:w-[267px]">Explore What We Analyze</ButtonLink>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 lg:mt-[34px] lg:flex-nowrap lg:gap-x-0">
              {[
                [Globe, "Delivered Remotely"],
                [Search, "Profile Review"],
                [TrendingUp, "Growth Recommendations"],
              ].map(([I, t]) => {
                const Icon = I as typeof Globe;
                return (
                  <li key={t as string} className="flex items-center gap-[10px] whitespace-nowrap text-[14px] font-bold leading-[17px] text-fog-3 lg:first:ml-0 lg:[&:nth-child(2)]:ml-[23px] lg:[&:nth-child(3)]:ml-[22px]">
                    <Icon size={15} className="ml-[3px] text-teal-400" aria-hidden /> {t as string}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[512px] lg:mx-0 lg:mt-[0px]">
            <div className="relative lg:aspect-[512/520]">
              <span aria-hidden className="absolute -left-6 top-7 hidden h-full w-full rounded-[28px] bg-teal-400/[0.14] lg:left-[-24px] lg:block" />
              <div className="relative hidden h-full w-full overflow-hidden rounded-[28px] lg:block">
                <Image src="/images/instagram-hero.jpg" alt="" fill sizes="512px" className="object-cover" priority />
                <span className="absolute inset-0 bg-navy-950/[0.16]" />
              </div>
              <span aria-hidden className="absolute -bottom-[76px] left-[440px] hidden h-24 w-24 rounded-[24px] bg-amber lg:block" />
              <div className="max-lg:static max-lg:mt-2 lg:absolute lg:-left-[138px] lg:-top-[40px]">
                <div className="max-lg:mx-auto max-lg:h-[525px] max-lg:w-[240px]"><div className="max-lg:origin-top-left max-lg:scale-[0.82]"><PhoneMock /></div></div>
              </div>
              <FloatingCard compact icon={Search} title="Profile Insights" sub="Bio, highlights & grid" pos="lg:left-[228px] lg:top-14" width={252} />
              <FloatingCard compact icon={Film} title="Reels Strategy" sub="Content direction" pos="lg:left-[268px] lg:top-[236px]" width={236} />
              <FloatingCard compact icon={MessageCircle} title="Audience Engagement" sub="Comments, saves & shares" pos="lg:left-[178px] lg:top-[410px]" width={260} />
            </div>
          </div>
        </div>
      </section>

      {/* Remote service */}
      <Section h={780} bg="deep" className="py-14 lg:py-[111px]">
        <SectionHeading
          tone="dark"
          eyebrow="Remote service"
          title="Professional Instagram Audits — Delivered Remotely"
          subtitle="We provide Instagram Profile Audits remotely to clients across India, the USA, Canada, UK, UAE, and other countries."
        />
        <div className="mt-12 overflow-hidden rounded-[28px] border border-navy-line bg-[linear-gradient(135deg,#1b3a63,#0f2440)] p-6 lg:mt-[65px] lg:grid lg:h-[380px] lg:grid-cols-[380px_1fr] lg:items-start lg:gap-[140px] lg:p-0 lg:pl-[120px]">
          <Orbit className="mx-auto hidden lg:block" />
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-[32px] lg:grid-cols-[296px_296px] lg:gap-4 lg:pr-0">
            {COUNTRIES.map((c, i) => (
              <li key={c} className={`flex flex-col items-start gap-3 rounded-[16px] border border-[#3c5a82] border-l-[4px] bg-white/[0.07] px-4 py-4 sm:flex-row sm:items-center sm:gap-4 sm:px-5 sm:py-6 lg:h-[100px] lg:items-start lg:py-0 ${i === 5 ? "border-l-amber" : "border-l-teal"}`}>
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-[52px] sm:w-[52px] sm:rounded-[14px] lg:mt-6 ${i === 5 ? "bg-amber/[0.22] text-amber" : "bg-teal/[0.22] text-teal-300"}`}>
                  <Globe size={22} aria-hidden />
                </span>
                <span className="lg:pt-5">
                  <span className="block font-display text-[16px] font-bold leading-[22px] text-white sm:text-[20px] sm:leading-[27px]">{c}</span>
                  <span className="relative block text-[12px] leading-4 text-fog-2 sm:text-[13px] lg:mt-[10px] lg:pl-4"><span aria-hidden className="absolute left-0 top-[5px] hidden h-[6px] w-[6px] rounded-full bg-teal-400 lg:block" />Remote audit available</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Why audit */}
      <Section h={888} className="py-14 lg:py-[111px]">
        <SectionHeading eyebrow="Why get an Instagram audit?" title="Understand What's Holding Your Instagram Growth Back" />
        <div className="mt-8 grid gap-4 lg:gap-6 sm:grid-cols-2 lg:mt-[53px] lg:grid-cols-3">
          {WHY.map((w) => {
            const t = TONES[w.tone];
            return (
              <article key={w.n} className={`relative overflow-hidden rounded-[16px] p-5 lg:h-[254px] lg:rounded-[20px] lg:p-7 ${t.bg}`}>
                <span className={`absolute right-5 top-[10px] lg:left-[318px] lg:right-auto font-display text-[56px] font-bold leading-[76px] ${t.text} opacity-25`}>{w.n}</span>
                <span className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-white lg:h-[60px] lg:w-[60px] lg:rounded-2xl ${t.text}`}>
                  <w.icon size={22} strokeWidth={1.9} aria-hidden />
                </span>
                <h3 className="relative mt-3 pr-12 font-display text-[18px] font-bold leading-6 text-navy-800 lg:mt-[18px] lg:text-[20px] lg:leading-[26px]">
                  {w.title.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </h3>
                <p className="relative mt-2 max-w-none text-[14px] leading-[21px] text-slate-500 lg:mt-[10px] lg:text-[15px] lg:leading-[23px]">{w.text}</p>
              </article>
            );
          })}
          <article className="relative overflow-hidden rounded-[16px] bg-navy-grad p-5 text-white lg:h-[254px] lg:rounded-[20px] lg:p-8 lg:pt-[30px]">
            <RingIcon size={60} ring={3} className="absolute right-4 top-[22px]"><Instagram size={22} aria-hidden /></RingIcon>
            <h3 className="font-display text-[24px] font-bold leading-[31px]">
              Want to Understand
              <br />
              Your Profile Better?
            </h3>
            <p className="mt-[10px] max-w-[290px] text-[15px] leading-[23px] text-fog-2">{"Request a professional review of your\nInstagram business profile."}</p>
            <ModalTrigger modal="instagram" className={cta("amber", "md", "mt-[26px] px-6 lg:mt-[22px] lg:w-[296px]")}>Get Your Instagram Audit</ModalTrigger>
          </article>
        </div>
      </Section>

      {/* Audit focus */}
      <Section h={876} id="focus" bg="surface" className="py-14 lg:py-[111px]">
        <div className="grid items-center gap-12 lg:grid-cols-[480px_1fr] lg:gap-[64px]">
          <div className="relative mx-auto aspect-[350/300] w-full max-w-[480px] lg:aspect-[480/560]">
            <span aria-hidden className="absolute -left-6 top-6 h-full w-full rounded-[28px] bg-teal/[0.14]" />
            <div className="relative h-full w-full overflow-hidden rounded-[28px]">
              <Image src="/images/instagram-focus.jpg" alt="Reviewing an Instagram profile" fill sizes="480px" className="object-cover" />
            </div>
            <div className="absolute -right-0 bottom-[28px] left-7 hidden rounded-[20px] border border-line bg-white p-6 lg:block lg:h-[148px] lg:w-[320px] lg:left-7 lg:right-auto">
              <p className="font-display text-[15px] font-bold leading-5 text-navy-800">Audit Snapshot</p>
              <ul className="mt-3 space-y-[9px] lg:space-y-[15px]">
                {[["Profile", "w-[78%]", "bg-teal"], ["Content", "w-[62%]", "bg-amber"], ["Engagement", "w-[48%]", "bg-violet"]].map(([l, w, c]) => (
                  <li key={l} className="flex items-center gap-4 text-[12px] leading-[15px] text-slate-500">
                    <span className="w-[72px]">{l}</span>
                    <span className="h-[6px] flex-1 rounded-full bg-line"><span className={`block h-full rounded-full ${w} ${c}`} /></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <Eyebrow align="left">Audit focus areas</Eyebrow>
            <h2 className="mt-[7px] font-display text-[34px] font-bold leading-[48px] text-navy-800 lg:mt-[10px] lg:text-[40px]">
              A Closer Look at Your
              <br />
              Instagram Presence
            </h2>
            <p className="mt-[16px] max-w-none text-[17px] leading-7 text-slate-500 lg:mt-[13px]">
              {"Explore the areas that can shape how your profile attracts, engages, and\nconverts."}
            </p>
            <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-[59px] lg:gap-x-6">
              {FOCUS.map(([t, Icon], i) => (
                <li key={t} className="relative flex h-[72px] items-center gap-[14px] rounded-[16px] lg:h-[88px] lg:gap-[18px] border border-line bg-white px-[17px] shadow-[3px_7px_20px_rgba(20,43,74,0.06)]">
                  <RingIcon size={56} ring={3} inner="bg-white"><span className="text-teal"><Icon size={20} aria-hidden /></span></RingIcon>
                  <span className="flex-1 font-display text-[16px] font-bold leading-[22px] text-navy-800">{t}</span>
                  <span className="font-display text-[13px] font-bold text-[#c9d1dc] lg:absolute lg:left-[300px]">{String(i + 1).padStart(2, "0")}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Who for */}
      <Section h={944} className="py-14 lg:py-[111px]">
        <SectionHeading eyebrow="Who is this service for?" title="Built for Brands Ready to Grow on Instagram" />
        <div className="mt-8 grid gap-4 lg:gap-6 sm:grid-cols-2 lg:mt-[53px] lg:grid-cols-3">
          {WHO.map((w) => {
            const t = TONES[w.tone];
            return (
              <article key={w.title.join()} className="relative flex gap-4 overflow-hidden rounded-[16px] border border-line bg-white p-5 shadow-[3px_8px_24px_rgba(20,43,74,0.05)] lg:block lg:min-h-[282px] lg:rounded-[20px] lg:p-7">
                <span aria-hidden className={`absolute left-7 top-0 h-[5px] w-14 rounded-b ${t.solid}`} />
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full lg:h-[88px] lg:w-[88px] ${t.ring}`}>
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full text-white lg:h-16 lg:w-16 ${t.solid}`}>
                    <w.icon size={24} aria-hidden />
                  </span>
                </span>
                <h3 className="mt-[14px] font-display text-[20px] font-bold leading-[26px] text-navy-800">
                  {w.title.map((l) => (<span key={l} className="block">{l}</span>))}
                </h3>
                <p className="mt-[10px] max-w-[310px] text-[15px] leading-[23px] text-slate-500 lg:mt-[5px] lg:max-w-none">{w.text}</p>
              </article>
            );
          })}
        </div>
      </Section>

      {/* Process */}
      <Section h={732} bg="navy-flat" className="py-14 lg:py-[111px]">
        <SectionHeading
          tone="dark"
          accent="amber"
          eyebrow="How it works"
          title="Instagram Audit Process"
          subtitle={"Four simple steps, from sharing your profile to understanding\nwhere it can improve."}
        />
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-[35px] lg:grid-cols-4 lg:gap-8">
          {STEPS.map((s, i) => (
            <li key={i} className="relative flex gap-4 overflow-hidden rounded-[20px] border border-navy-line bg-navy-900 p-5 lg:block lg:min-h-[340px] lg:rounded-[24px] lg:p-6 lg:pt-[30px]">
              <span className="absolute right-5 top-[10px] font-display text-[36px] font-bold leading-[48px] text-[#1d3a62] lg:right-6 lg:top-[15px] lg:text-[52px] lg:leading-[71px]">{String(i + 1).padStart(2, "0")}</span>
              <RingIcon size={56} ring={3} inner="bg-navy-900" className="lg:!h-20 lg:!w-20 lg:!p-1"><s.icon size={22} aria-hidden /></RingIcon>
              <div>
              <p className="font-display text-[12px] font-bold leading-4 text-teal-300 lg:mt-[21px]">{`STEP ${String(i + 1).padStart(2, "0")}`}</p>
              <h3 className="mt-[4px] font-display text-[18px] font-bold leading-6 lg:mt-[7px] lg:min-h-[81px] lg:text-[20px] lg:leading-[27px]">
                {s.title.map((l) => (<span key={l} className="block">{l}</span>))}
              </h3>
              <p className="mt-2 max-w-[220px] text-[14px] leading-[21px] text-fog lg:mt-[14px]">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Global remote consulting */}
      <Section h={828} className="py-14 lg:py-[111px]">
        <div className="relative overflow-hidden rounded-[28px] bg-navy-grad p-8 text-white lg:h-[440px] lg:p-14 lg:pt-[55px]">
          <div className="relative">
            <p className="font-display text-[13px] font-bold uppercase leading-[18px] text-amber">Global remote consulting</p>
            <h2 className="mt-[8px] font-display text-[30px] font-bold leading-[44px] sm:text-[34px]">
              {"Instagram Growth\nConsulting, Wherever Your\nBusiness Is"}
            </h2>
            <p className="mt-[24px] max-w-none text-[16px] leading-[25px] text-fog lg:mt-[16px]">
              {"Get professional Instagram Profile Audit & Growth\nConsulting remotely, whether your business is based in\nIndia, the USA, Canada, UK, UAE, or another location."}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 lg:mt-[27px]">
              {["Remote consulting", "Online profile audit"].map((c, i) => (
                <span key={c} className={`relative inline-flex h-[38px] items-center gap-3 rounded-full border border-navy-line bg-navy-900 px-5 font-display text-[13px] font-bold lg:justify-start lg:gap-0 lg:pl-10 lg:pr-0 ${i === 0 ? "lg:w-[168px]" : "lg:w-[196px]"}`}>
                  <Check size={13} className="text-teal-300 lg:absolute lg:left-5" aria-hidden /> {c}
                </span>
              ))}
            </div>
          </div>
          <GlobalMap className="absolute right-[112px] top-[20px] hidden lg:block" />
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-6 lg:mt-8 lg:grid-cols-6 lg:gap-6">
          {COUNTRIES.map((c, i) => (
            <li key={c} className="relative rounded-[16px] border border-line bg-white p-4 shadow-[2px_6px_20px_rgba(20,43,74,0.05)] sm:p-5 lg:h-[132px]">
              <span aria-hidden className={`absolute left-5 top-0 h-[3px] w-10 rounded-b ${i % 2 ? "bg-amber" : "bg-teal"}`} />
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint text-teal">{c === "Other Countries" ? <Globe size={18} aria-hidden /> : <MapPin size={18} aria-hidden />}</span>
              <p className="mt-[14px] font-display text-[17px] font-bold leading-[23px] text-navy-800">{c}</p>
              <p className="mt-[5px] text-[12.5px] leading-[15px] text-slate-500">Remote audit available</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Final CTA */}
      <Section h={636} bg="surface" className="py-14 lg:py-[112px]">
        <div className="relative overflow-hidden rounded-[28px] bg-navy-800 p-8 text-white lg:min-h-[412px] lg:p-[64px]">
          <span aria-hidden className="absolute -right-10 -top-10 h-[340px] w-[340px] rounded-full bg-teal/[0.18]" />
          <span aria-hidden className="absolute bottom-0 right-0 h-[120px] w-[120px] rounded-full bg-amber/[0.18]" />
          <h2 className="relative max-w-[520px] font-display text-[32px] font-bold leading-[48px] lg:text-[38px]">
            {"Ready to Understand Your\nInstagram Growth\nOpportunities?"}
          </h2>
          <p className="relative mt-[26px] max-w-[520px] text-[17px] leading-[27px] text-fog-2">
            {"Get a professional review of your Instagram business profile\nand discover opportunities to strengthen your brand presence."}
          </p>
          <ModalTrigger modal="instagram" className={`${cta("amber", "lg", "relative mt-10 px-8")}`}>Get Your Instagram Audit</ModalTrigger>
        </div>
      </Section>
    </>
  );
}
