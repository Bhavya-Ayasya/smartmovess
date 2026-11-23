"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

const FOCUSABLE =
  'a[href],button:not([disabled]),input:not([disabled]):not([type="hidden"]),textarea:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])';

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  maxWidth = 680,
  locked = false,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  children: ReactNode;
  maxWidth?: number;
  /** Prevent closing (e.g. while a request is in flight). */
  locked?: boolean;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descId = useId();
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    lastFocus.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = panelRef.current?.querySelector<HTMLElement>("input,textarea,button[role='combobox']");
    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !locked) {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const nodes = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (n) => n.offsetParent !== null,
      );
      if (!nodes.length) return;
      const firstEl = nodes[0];
      const lastEl = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      lastFocus.current?.focus?.();
    };
  }, [open, locked, onClose]);

  if (!open) return null;

  return (
    <div
      className="animate-fade-in fixed inset-0 z-50 flex items-end justify-center overflow-y-auto bg-navy-950/60 sm:items-center sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget && !locked) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        style={{ maxWidth }}
        className="animate-pop-in relative flex max-h-[92dvh] w-full flex-col overflow-y-auto rounded-t-[24px] bg-white shadow-[0_24px_64px_rgba(11,27,50,0.35)] sm:my-auto sm:block sm:max-h-[calc(100dvh-48px)] sm:rounded-[24px] sm:px-10 sm:pb-10 sm:pt-[33px]"
      >
        <div className="sticky top-0 z-20 border-b border-line bg-white px-5 pb-4 pt-3 sm:static sm:border-0 sm:p-0">
          <span aria-hidden className="mx-auto mb-4 block h-1 w-11 rounded-full bg-line sm:hidden" />
          <button
            type="button"
            onClick={onClose}
            disabled={locked}
            aria-label="Close dialog"
            className="absolute right-4 top-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-navy-800 transition-colors hover:bg-line disabled:opacity-50 sm:right-0 sm:top-0"
          >
            <X size={18} />
          </button>
          <h2 id={titleId} className="max-w-[calc(100%-56px)] font-display text-[22px] font-bold leading-[28px] text-navy-800 sm:text-[28px] sm:leading-[38px]">
            {title}
          </h2>
          <p id={descId} className="mt-[6px] max-w-[470px] text-[14px] leading-[21px] text-slate-500 sm:mt-[8px] sm:text-[15px] sm:leading-6">
            {description}
          </p>
        </div>
        <div className="px-5 pt-5 sm:mt-[32px] sm:p-0">{children}</div>
      </div>
    </div>
  );
}
