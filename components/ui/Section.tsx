import type { ReactNode } from "react";

/** Full-bleed band with the shared content wrapper. */
export function Section({
  children,
  className = "",
  id,
  bg = "white",
  h,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Exact desktop section height from the design (px). */
  h?: number;
  bg?: "white" | "surface" | "navy" | "navy-flat" | "deep";
}) {
  const bgClass = {
    white: "bg-white",
    surface: "bg-surface",
    navy: "bg-navy-grad text-white",
    "navy-flat": "bg-navy-950 text-white",
    deep: "bg-navy-800 text-white",
  }[bg];
  return (
    <section
      id={id}
      className={`${bgClass} ${h ? "lg:h-[var(--sec-h)]" : ""} ${className}`}
      style={h ? ({ ["--sec-h" as string]: `${h}px` } as React.CSSProperties) : undefined}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "teal",
  align = "center",
  className = "",
}: {
  children: ReactNode;
  tone?: "teal" | "amber";
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <p
      className={`font-display text-[13px] font-bold uppercase leading-[18px] ${
        tone === "teal" ? "text-teal" : "text-amber"
      } ${align === "center" ? "text-center" : ""} ${className}`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  align = "center",
  accent = "teal",
  className = "",
  multiline = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
  accent?: "teal" | "amber";
  className?: string;
  /** Title wraps to two lines on desktop (design uses 48px line pitch). */
  multiline?: boolean;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && <Eyebrow tone={accent} align={align}>{eyebrow}</Eyebrow>}
      <h2
        className={`font-display text-[26px] font-bold leading-[34px] sm:text-[36px] sm:leading-[44px] lg:text-[40px] ${
          multiline ? "lg:mt-[10px] lg:leading-[50px]" : "lg:leading-[55px]"
        } ${eyebrow && !multiline ? "lg:mt-[7px]" : ""} ${eyebrow ? "mt-[7px]" : ""} ${tone === "dark" ? "text-white" : "text-navy-800"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-[15px] leading-[22px] lg:mt-[11px] lg:text-[17px] lg:leading-[21px] ${
            align === "center" ? "mx-auto max-w-[860px] lg:max-w-none" : ""
          } ${tone === "dark" ? "text-fog-2" : "text-slate-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Pill({ children, dot = "teal-400" }: { children: ReactNode; dot?: "teal-400" | "amber" }) {
  return (
    <span className="inline-flex h-[34px] items-center gap-[10px] rounded-full border border-navy-line bg-white/10 px-4">
      <span className={`h-2 w-2 rounded-full ${dot === "amber" ? "bg-amber" : "bg-teal-400"}`} />
      <span className="font-display text-[13px] font-bold leading-[18px] text-teal-200">{children}</span>
    </span>
  );
}
