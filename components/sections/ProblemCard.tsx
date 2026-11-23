import { Check } from "lucide-react";

/** "Challenge → how we help" card (employers: THE CHALLENGE, candidates: SOUND FAMILIAR?). */
export function ProblemCard({
  chip,
  problem,
  helpLabel,
  help,
  tall = true,
}: {
  chip: string;
  problem: string;
  helpLabel: string;
  help: string;
  tall?: boolean;
}) {
  return (
    <article
      className={`relative overflow-hidden rounded-[20px] border border-line bg-white px-6 py-6 lg:px-[35px] lg:pb-8 lg:pt-[33px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] ${
        tall ? "lg:h-[262px]" : "lg:h-[238px]"
      }`}
    >
      <span aria-hidden className="absolute left-0 top-7 h-[calc(100%-56px)] w-[5px] rounded-r bg-teal" />
      <span className="inline-flex h-6 items-center gap-[6px] rounded-full bg-[#fdecec] px-[9px] font-display text-[11px] font-bold text-danger">
        <span className="h-[7px] w-[7px] rounded-full bg-danger" />
        {chip}
      </span>
      <h3 className="mt-[9px] font-display text-[18px] font-bold leading-[24px] text-navy-800 sm:text-[22px] sm:leading-[30px]">{problem}</h3>
      <div className="my-4 h-px bg-line lg:mb-[25px] lg:mt-[21px]" />
      <div className="flex items-center gap-[8px]">
        <span className="flex h-[22px] w-[22px] items-center justify-center rounded-md bg-mint text-teal">
          <Check size={11} strokeWidth={2.6} aria-hidden />
        </span>
        <span className="font-display text-[11px] font-bold text-teal">{helpLabel}</span>
      </div>
      <p className="mt-[4px] max-w-[480px] text-[15px] leading-6 text-slate-500">{help}</p>
    </article>
  );
}
