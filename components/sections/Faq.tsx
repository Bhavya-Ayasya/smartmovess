"use client";

import { useId, useState } from "react";
import { Minus, Plus } from "lucide-react";

export function Faq({
  items,
  defaultOpen = 0,
  compact = false,
}: {
  items: readonly { q: string; a: string }[];
  defaultOpen?: number | null;
  /** 880px-wide variant used on inner pages (24px padding, 68px rows). */
  compact?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const base = useId();

  return (
    <div className={`flex flex-col gap-3 ${compact ? "sm:gap-3" : "sm:gap-4"}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${base}-p${i}`;
        const btnId = `${base}-b${i}`;
        return (
          <div
            key={item.q}
            className={`relative overflow-hidden rounded-[16px] border transition-colors sm:rounded-[20px] ${
              isOpen ? "border-mint-line bg-mint" : "border-line bg-white hover:border-[#cfd5de]"
            }`}
          >
            {isOpen && <span aria-hidden className="absolute left-0 top-6 h-[calc(100%-48px)] w-[5px] rounded-r bg-teal" />}
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`flex min-h-[64px] w-full items-center justify-between gap-4 px-4 py-3 text-left ${compact ? "sm:min-h-[66px] sm:px-6 sm:py-3" : "sm:min-h-[74px] sm:px-9 sm:py-4"}`}
              >
                <span className="font-display text-[16px] font-bold leading-6 text-navy-800 sm:text-[18px] sm:leading-[25px]">{item.q}</span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] ${
                    isOpen ? "bg-teal text-white" : "border border-line bg-surface text-teal"
                  }`}
                >
                  {isOpen ? <Minus size={16} aria-hidden /> : <Plus size={16} aria-hidden />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className={`-mt-3 px-4 pb-5 lg:-mt-4 ${compact ? "sm:px-6 lg:pb-[36px]" : "sm:px-9 lg:pb-[56px]"}`}
            >
              <p className="max-w-[640px] text-[15px] leading-6 text-slate-500 sm:text-[16px] sm:leading-[25px]">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
