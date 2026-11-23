import Link from "next/link";
import { Check } from "lucide-react";
import type { ReactNode } from "react";

export function SuccessCard({
  title,
  body,
  backHref,
  backLabel,
}: {
  title: ReactNode;
  body: ReactNode;
  backHref: string;
  backLabel: string;
}) {
  return (
    <section className="relative flex min-h-[calc(100vh-88px)] items-center overflow-hidden bg-surface py-12 lg:min-h-[784px] lg:py-[112px]">
      <span aria-hidden className="absolute right-[12%] top-[220px] hidden h-7 w-7 rounded-full bg-amber/50 lg:block" />
      <span aria-hidden className="absolute left-[10%] top-[420px] hidden h-4 w-4 rounded-full bg-teal/40 lg:block" />
      <div className="wrap">
        <div
          role="status"
          className="animate-pop-in mx-auto flex max-w-[720px] flex-col items-center rounded-[28px] border border-line bg-white px-6 py-10 text-center shadow-[0_16px_48px_rgba(20,43,74,0.08)] sm:px-14 sm:py-[32px] lg:min-h-[560px] lg:justify-center"
        >
          <span className="flex h-[104px] w-[104px] items-center justify-center rounded-full bg-[#dcfce7]">
            <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#16a34a] text-white">
              <Check size={36} strokeWidth={3} aria-hidden />
            </span>
          </span>
          <h1 className="mt-[20px] max-w-[520px] font-display text-[30px] font-bold leading-[40px] text-navy-800 sm:text-[38px] sm:leading-[48px]">{title}</h1>
          <p className="mt-[16px] max-w-[520px] text-[16px] leading-[26px] text-slate-500 sm:text-[17px] sm:leading-[28px]">{body}</p>
          <Link
            href={backHref}
            className="mt-9 inline-flex h-14 w-full max-w-[340px] items-center justify-center rounded-[10px] bg-navy-800 px-6 font-display text-[15px] font-bold uppercase text-white transition-colors hover:bg-navy-950 sm:mt-[44px]"
          >
            {backLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
