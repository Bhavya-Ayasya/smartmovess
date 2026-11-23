import Image from "next/image";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Pill } from "@/components/ui/Section";

export type FloatCard = {
  icon: LucideIcon;
  title: string;
  sub: string;
  /** Tailwind position classes applied from lg up (absolute within the image box). */
  pos: string;
  width?: number;
  /** Show this card on small screens (bottom-left of the image), as in the mobile design. */
  mobile?: boolean;
  /** Smaller 64px card used on the Instagram hero. */
  compact?: boolean;
};

export type HeroLine = { text: string; tone: "white" | "teal" | "amber" };

const tone = { white: "text-white", teal: "text-teal-400", amber: "text-amber" };

/** Line-broken copy: explicit breaks on desktop to match the design, natural wrap on small screens. */
export function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((l, i) => (
        <span key={i}>
          {l}
          {i < lines.length - 1 && (
            <>
              <span className="lg:hidden"> </span>
              <br className="hidden lg:block" />
            </>
          )}
        </span>
      ))}
    </>
  );
}

export function FloatingCard({ icon: Icon, title, sub, pos, width, mobile, compact }: FloatCard) {
  return (
    <div
      className={`absolute items-start gap-3 whitespace-nowrap rounded-2xl bg-white shadow-[2px_8px_0_rgba(0,0,0,0.12)] lg:flex ${compact ? "h-16 pl-3 pr-[10px] pt-3" : "h-[72px] pl-[14px] pr-[10px] pt-[14px]"} ${
        mobile ? "bottom-4 left-4 flex max-lg:!w-auto max-lg:!max-w-[calc(100%-32px)]" : "hidden"
      } ${pos}`}
      style={{ width }}
    >
      <span className={`flex shrink-0 items-center justify-center rounded-xl bg-mint text-teal ${compact ? "h-10 w-10" : "h-11 w-11"}`}>
        <Icon size={compact ? 18 : 22} strokeWidth={1.75} aria-hidden />
      </span>
      <span className={`min-w-0 ${compact ? "-mt-[1px]" : "mt-[1px]"}`}>
        <span className={`block font-display font-bold text-navy-800 ${compact ? "text-[14px] leading-[19px]" : "text-[15px] leading-5"}`}>{title}</span>
        <span className={`block text-slate-500 ${compact ? "mt-[3px] text-[12px] leading-[15px]" : "mt-1 text-[12.5px] leading-[15px]"}`}>{sub}</span>
      </span>
    </div>
  );
}

export function Hero({
  pill,
  lines,
  body,
  actions,
  perks,
  perksBold = false,
  perkGaps = [39, 39],
  image,
  imageAlt,
  imageSize = { w: 512, h: 520 },
  floats = [],
  extra,
  h1Size = 48,
  minH = 664,
  mobileAspect = "350/290",
  hidePerksOnMobile = false,
  flowLines = false,
  pillMt = 0,
  perksExtra = 0,
}: {
  pill: string;
  lines: HeroLine[];
  body: ReactNode;
  actions: ReactNode;
  perks: { icon: LucideIcon; text: string }[];
  perksBold?: boolean;
  /** Desktop gap before the 2nd and 3rd perk (px), measured from the design. */
  perkGaps?: number[];
  image: string;
  imageAlt: string;
  imageSize?: { w: number; h: number };
  floats?: FloatCard[];
  /** Extra absolutely-positioned content over the image (badges etc). */
  extra?: ReactNode;
  h1Size?: number;
  /** Desktop hero height from the design (px). */
  minH?: number;
  mobileAspect?: string;
  hidePerksOnMobile?: boolean;
  /** Let headline lines flow as one paragraph on mobile (design does this for Internship). */
  flowLines?: boolean;
  /** Desktop nudges (px) for heroes whose pill/perks sit a few px off the standard rhythm. */
  pillMt?: number;
  perksExtra?: number;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-grad text-white">
      {/* decorative glow shapes (clipped by the section) */}
      <span aria-hidden className="pointer-events-none absolute -right-[90px] -top-[190px] h-[460px] w-[460px] rounded-full bg-teal/[0.14]" />
      <span aria-hidden className="pointer-events-none absolute -bottom-[150px] -left-[130px] h-[340px] w-[340px] rounded-full bg-amber/[0.07]" />

      <div
        className="wrap relative grid gap-9 pb-10 pt-10 sm:gap-12 sm:pb-16 sm:pt-12 lg:grid-cols-[minmax(0,1fr)_var(--img-w)] lg:items-start lg:gap-10 lg:pt-[72px] lg:pb-[calc(var(--hero-h)-72px-var(--img-h))] lg:h-[var(--hero-h)]"
        style={{ ["--img-w" as string]: `${imageSize.w}px`, ["--img-h" as string]: `${imageSize.h}px`, ["--hero-h" as string]: `${minH}px` }}
      >
        <div className="min-w-0 lg:pt-[14px]" style={{ ["--pm" as string]: `${pillMt}px`, ["--pe" as string]: `${perksExtra}px` }}>
          <div className="lg:mt-[var(--pm)]"><Pill>{pill}</Pill></div>
          <h1
            className={`mt-[19px] lg:mt-[calc(19px-var(--pm))] lg:relative lg:top-[5px] font-display font-bold text-[30px] leading-[38px] sm:text-[42px] sm:leading-[50px] lg:leading-[58px] ${h1Size === 46 ? "lg:text-[46px]" : "lg:text-[48px]"}`}
          >
            {lines.map((l) => (
              <span key={l.text} className={`${flowLines ? "max-lg:inline" : ""} block ${tone[l.tone]}`}>
                {l.text}{flowLines ? <span className="lg:hidden"> </span> : null}
              </span>
            ))}
          </h1>
          <p className="mt-[20px] max-w-[540px] text-[15px] leading-[23px] text-fog-2 lg:mt-[22px] lg:text-[18px] lg:leading-[29px]">{body}</p>
          <div className="mt-8 flex flex-col gap-[13px] sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-[39px] lg:gap-[17px] max-sm:[&>*]:w-full">{actions}</div>
          <ul className={`mt-8 flex-col items-start ${hidePerksOnMobile ? "hidden sm:flex" : "flex"} items-start gap-[13px] sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3 lg:mt-[calc(34px+var(--pe))] lg:flex-nowrap lg:gap-x-0`}>
            {perks.map(({ icon: Icon, text }, i) => (
              <li
                key={text}
                className="flex items-center gap-[10px] whitespace-nowrap lg:ml-[var(--pg)]"
                style={{ ["--pg" as string]: `${i === 0 ? 0 : perkGaps[i - 1] ?? 39}px` }}
              >
                <Icon size={15} className="ml-[3px] text-teal-400" strokeWidth={1.8} aria-hidden />
                <span className={`text-[14px] leading-[17px] ${perksBold ? "font-bold text-fog-3" : "text-fog"}`}>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full lg:mx-0 lg:ml-auto" style={{ maxWidth: imageSize.w }}>
          <div
            className="relative max-sm:[aspect-ratio:var(--m-asp)] sm:h-[var(--img-h)]"
            style={{ ["--img-h" as string]: `${imageSize.h}px`, ["--m-asp" as string]: mobileAspect.replace("/", " / ") }}
          >
            <span
              aria-hidden
              className="absolute -left-4 top-4 h-full w-full rounded-[28px] bg-teal/[0.18] lg:-left-6 lg:top-6"
            />
            <div className="relative h-full w-full overflow-hidden rounded-[28px]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 512px, 100vw"
                className="object-cover"
              />
            </div>
            {extra}
            {floats.map((f) => (
              <FloatingCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
