import type { ReactNode } from "react";
import { SectionHeading } from "@/components/ui/Section";
import { TickRow } from "./shared";

/** Dark info panel (left) + white form card (right) used by hiring / contact / booking. */
export function FormSection({
  id,
  bg = "surface",
  eyebrow,
  title,
  subtitle,
  panelTitle,
  panelText,
  panelItems,
  numbered = false,
  form,
  h,
  formH,
}: {
  id: string;
  bg?: "surface" | "white";
  eyebrow: string;
  title: string;
  subtitle: string;
  panelTitle: ReactNode;
  panelText: ReactNode;
  panelItems: string[];
  numbered?: boolean;
  form: ReactNode;
  h?: number;
  /** Exact desktop height of the white form card (px). */
  formH?: number;
}) {
  return (
    <section
      id={id}
      className={`${bg === "surface" ? "bg-surface" : "bg-white"} py-14 lg:py-[111px] ${h ? "lg:h-[var(--sec-h)]" : ""}`}
      style={h ? ({ ["--sec-h" as string]: `${h}px` } as React.CSSProperties) : undefined}
    >
      <div className="wrap">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="mt-8 grid gap-6 lg:mt-[65px] lg:grid-cols-[440px_1fr] lg:gap-6 xl:gap-[24px]">
          <div className="lg:hidden">
            <h3 className="font-display text-[26px] font-bold leading-[34px] text-navy-800">{panelTitle}</h3>
            <p className="mt-2 text-[15px] leading-[23px] text-slate-500">{panelText}</p>
          </div>
          <aside className="relative hidden overflow-hidden rounded-[28px] bg-navy-grad p-8 text-white lg:block lg:p-[36px]">
            <span aria-hidden className="absolute -right-10 -top-[50px] h-[180px] w-[180px] rounded-full bg-teal/[0.12]" />
            <h3 className="relative max-w-[320px] pt-1 font-display text-[28px] font-bold leading-9">{panelTitle}</h3>
            <p className="relative mt-[14px] max-w-[300px] text-[15px] leading-6 text-fog lg:mt-2 lg:max-w-none">{panelText}</p>
            <ul className="relative mt-8 flex flex-col gap-5 lg:mt-[30px]">
              {panelItems.map((t, i) =>
                numbered ? (
                  <li key={t} className="flex items-center gap-[14px]">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal/20 font-display text-[13px] font-bold text-teal-300">
                      {i + 1}
                    </span>
                    <span className="text-[15px] font-bold leading-[18px]">{t}</span>
                  </li>
                ) : (
                  <TickRow key={t}>{t}</TickRow>
                ),
              )}
            </ul>
          </aside>
          <div
            className={`rounded-[24px] border border-line bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.05)] sm:p-8 lg:rounded-[28px] lg:px-8 lg:py-[39px] ${formH ? "lg:h-[var(--form-h)]" : ""}`}
            style={formH ? ({ ["--form-h" as string]: `${formH}px` } as React.CSSProperties) : undefined}
          >
            {form}
          </div>
        </div>
      </div>
    </section>
  );
}
