import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Stats strip that straddles the hero's bottom edge                    */
/* ------------------------------------------------------------------ */
export function StatsStrip({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="wrap relative z-10 -mt-6 lg:-mt-14">
      <dl className="grid grid-cols-2 gap-y-5 rounded-[20px] border border-line bg-white px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] lg:h-[112px] lg:grid-cols-4 lg:items-start lg:p-0">
        {items.map((s, i) => (
          <div key={s.label} className={`relative flex flex-col-reverse justify-end lg:pl-9 lg:pt-[19px] ${i % 2 === 1 ? "pl-4" : ""}`}>
            {i > 0 && <span aria-hidden className="absolute left-0 top-[26px] hidden h-[60px] w-px bg-line lg:block" />}
            <dt className="text-[12px] leading-4 text-slate-500 lg:mt-1 lg:text-[14px] lg:leading-[17px]">{s.label}</dt>
            <dd className="font-display text-[22px] font-bold leading-[30px] text-teal lg:text-[32px] lg:leading-[44px]">{s.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Pastel feature card                                                  */
/* ------------------------------------------------------------------ */
export type Tone = "teal" | "amber" | "violet" | "pink" | "blue" | "aqua" | "orange";

export const TONES: Record<Tone, { bg: string; solid: string; text: string; ring: string; soft: string }> = {
  teal: { bg: "bg-mint", solid: "bg-teal", text: "text-teal", ring: "bg-teal/10", soft: "bg-mint" },
  amber: { bg: "bg-cream", solid: "bg-amber-600", text: "text-amber-600", ring: "bg-amber-600/10", soft: "bg-cream" },
  violet: { bg: "bg-lilac", solid: "bg-violet", text: "text-violet", ring: "bg-violet/10", soft: "bg-lilac" },
  pink: { bg: "bg-rose", solid: "bg-pink", text: "text-pink", ring: "bg-pink/10", soft: "bg-rose" },
  blue: { bg: "bg-sky", solid: "bg-blue", text: "text-blue", ring: "bg-blue/10", soft: "bg-sky" },
  aqua: { bg: "bg-aqua", solid: "bg-aqua-600", text: "text-aqua-600", ring: "bg-aqua-600/10", soft: "bg-aqua" },
  orange: { bg: "bg-[#ffebdd]", solid: "bg-[#f97316]", text: "text-[#f97316]", ring: "bg-[#f97316]/10", soft: "bg-[#ffebdd]" },
};

export function TintCard({
  tone,
  icon: Icon,
  title,
  children,
  iconSize = 56,
  className = "",
}: {
  tone: Tone;
  icon: LucideIcon;
  title: ReactNode;
  children: ReactNode;
  iconSize?: 56 | 64;
  className?: string;
}) {
  const t = TONES[tone];
  return (
    <article className={`relative overflow-hidden rounded-[20px] p-6 lg:p-8 ${iconSize === 64 ? "flex gap-4 max-lg:p-5 lg:block lg:min-h-[264px]" : ""} ${t.bg} ${className}`}>
      {iconSize === 64 ? (
        <>
          <span aria-hidden className={`absolute right-1 top-2 hidden h-32 w-32 rounded-full lg:block ${t.ring}`} />
          <span aria-hidden className={`absolute right-[30px] top-[34px] hidden h-[76px] w-[76px] rounded-full lg:block ${t.ring}`} />
          <span aria-hidden className={`absolute -right-[30px] -top-[26px] h-[140px] w-[140px] rounded-full lg:hidden ${t.ring}`} />
        </>
      ) : (
        <span aria-hidden className={`absolute -right-[30px] -top-[26px] h-[140px] w-[140px] rounded-full ${t.ring}`} />
      )}
      <span
        className={`relative flex items-center justify-center rounded-2xl text-white ${t.solid} ${iconSize === 64 ? "h-14 w-14 lg:h-16 lg:w-16" : "h-12 w-12 lg:h-14 lg:w-14"}`}
      >
        <Icon size={iconSize === 64 ? 26 : 22} strokeWidth={1.9} aria-hidden />
      </span>
      <div className="relative">
      <h3 className={`font-display font-bold text-navy-800 ${iconSize === 64 ? "text-[17px] leading-[22px] lg:mt-[23px] lg:text-[24px] lg:leading-[33px]" : "mt-4 text-[18px] leading-[24px] lg:mt-[19px] lg:text-[22px] lg:leading-[30px]"}`}>
        {title}
      </h3>
      <p className={`mt-1 max-w-[320px] text-[13px] leading-[19px] text-slate-500 lg:mt-[6px] ${iconSize === 64 ? "lg:text-[16px] lg:leading-[25px]" : "lg:text-[15px] lg:leading-6"}`}>{children}</p>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Numbered process (dark band)                                         */
/* ------------------------------------------------------------------ */
export function ProcessRow({ steps, cols }: { steps: { title: string; text: string }[]; cols: 4 | 5 }) {
  return (
    <ol className={`flex flex-col lg:grid ${cols === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"}`}>
      {steps.map((s, i) => (
        <li key={s.title} className="relative flex gap-4 pb-9 last:pb-0 lg:block lg:pb-0 lg:pr-[10px]">
          <span className="relative z-[1] flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-teal-400 bg-navy-900 font-display text-[16px] font-bold lg:h-[68px] lg:w-[68px] lg:bg-navy-grad lg:text-[22px]">
            {i + 1}
          </span>
          {i < steps.length - 1 && (
            <>
              <span aria-hidden className="absolute bottom-[-2px] left-[21px] top-[46px] w-px bg-navy-line lg:hidden" />
              <span aria-hidden className="absolute left-20 top-[33px] hidden h-[2px] w-[calc(100%-90px)] bg-navy-line lg:block" />
            </>
          )}
          <div className="pt-[2px] lg:pt-0">
            <h3 className="font-display text-[17px] font-bold leading-[22px] lg:mt-[19px] lg:max-w-[190px] lg:text-[19px] lg:leading-[25px]">{s.title}</h3>
            <p className="mt-1 text-[14px] leading-5 text-fog lg:mt-2 lg:max-w-[260px] lg:leading-[21px]">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ */
/* Dark rounded call-to-action banner                                   */
/* ------------------------------------------------------------------ */
export function CtaBanner({
  title,
  accent,
  body,
  actions,
  h,
}: {
  h?: number;
  title: string;
  accent: string;
  body: string;
  actions: ReactNode;
}) {
  return (
    <section
      className={`bg-white py-12 lg:py-[112px] ${h ? "lg:h-[var(--sec-h)]" : ""}`}
      style={h ? ({ ["--sec-h" as string]: `${h}px` } as React.CSSProperties) : undefined}
    >
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[24px] bg-navy-grad px-6 py-10 text-white lg:rounded-[28px] lg:flex lg:h-[300px] lg:items-start lg:justify-between lg:gap-10 lg:px-[60px] lg:pb-0 lg:pt-[63px]">
          <span aria-hidden className="absolute -right-[60px] -top-[130px] h-[340px] w-[340px] rounded-full bg-teal/[0.14]" />
          <span aria-hidden className="absolute -bottom-[90px] left-[-86px] h-[240px] w-[240px] rounded-full bg-amber/[0.08]" />
          <div className="relative max-w-[620px]">
            <h2 className="font-display text-[30px] font-bold leading-[38px] sm:text-[36px] sm:leading-[46px] lg:text-[40px] lg:leading-[48px]">
              {title}
              <span className="block text-teal-400">{accent}</span>
            </h2>
            <p className="mt-[18px] max-w-[540px] text-[16px] leading-[26px] text-fog lg:mt-[12px] lg:max-w-none lg:text-[17px] lg:leading-[27px]">{body}</p>
          </div>
          <div className="relative mt-7 flex flex-col gap-3 lg:mt-[27px] lg:w-[300px] lg:shrink-0 lg:gap-[17px]">{actions}</div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Tick bullet used in dark panels                                      */
/* ------------------------------------------------------------------ */
export function TickRow({ children, size = 28 }: { children: ReactNode; size?: 22 | 28 }) {
  return (
    <li className={`flex items-center ${size === 28 ? "gap-[14px]" : "gap-[10px]"}`}>
      <span
        className={`flex shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal-300 ${size === 28 ? "h-7 w-7" : "h-[22px] w-[22px]"}`}
      >
        <Check size={size === 28 ? 14 : 11} strokeWidth={2.4} aria-hidden />
      </span>
      <span className="text-[15px] font-bold leading-[18px] text-white">{children}</span>
    </li>
  );
}

export function TextLink({ href, tone = "teal", children }: { href: string; tone?: string; children: ReactNode }) {
  return (
    <Link href={href} className={`group inline-flex items-center gap-[10px] font-display text-[14px] font-bold leading-[19px] ${tone}`}>
      {children}
      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden />
    </Link>
  );
}

/** Small photo-style frame wrapper used by section images. */
export function SectionLabel({ children }: { children: ReactNode }) {
  return <span className="font-display text-[13px] font-bold uppercase leading-[18px] text-teal">{children}</span>;
}
