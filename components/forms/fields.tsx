"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Check, ChevronDown, X } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Shared field chrome                                                  */
/* ------------------------------------------------------------------ */

export function FieldShell({
  label,
  htmlFor,
  required,
  optional,
  error,
  children,
  className = "",
  errorId,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
  errorId?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-[7px] flex items-baseline gap-2 font-display text-[13px] font-bold leading-[18px] text-navy-800">
        <span>
          {label}
          {required && " *"}
        </span>
        {optional && <span className="font-sans text-[12px] font-normal leading-[15px] text-slate-500">(Optional)</span>}
      </label>
      {children}
      {error && (
        <p id={errorId} role="alert" className="mt-1 flex items-center gap-[6px] pl-1 text-[12px] leading-[15px] text-danger">
          <X size={12} strokeWidth={2.4} aria-hidden className="shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

const controlBase =
  "block w-full rounded-xl border-[1.5px] bg-white text-[15px] leading-[18px] text-ink outline-none transition-[border-color,box-shadow,background-color] placeholder:text-slate-400 disabled:cursor-not-allowed disabled:bg-surface";
const controlOk =
  "border-line focus:border-teal focus:border-2 focus:shadow-[0_0_0_3px_#e6f6f4] hover:border-[#cfd5de]";
const controlErr = "border-danger border-2 bg-danger-bg";

/** Surface variant used by the page forms (grey fill) vs modal forms (white). */
export type Surface = "white" | "grey";
const surfaceClass = (s: Surface) => (s === "grey" ? "!bg-surface focus:!bg-white" : "");

/* ------------------------------------------------------------------ */
/* Text input                                                           */
/* ------------------------------------------------------------------ */

export function TextField({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  required,
  optional,
  type = "text",
  inputMode,
  autoComplete,
  className,
  surface = "white",
  maxLength,
  min,
}: {
  min?: string;
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  optional?: boolean;
  type?: string;
  inputMode?: "text" | "tel" | "email" | "numeric" | "url";
  autoComplete?: string;
  className?: string;
  surface?: Surface;
  maxLength?: number;
}) {
  const id = useId();
  const errId = `${id}-err`;
  return (
    <FieldShell label={label} htmlFor={id} required={required} optional={optional} error={error} errorId={errId} className={className}>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        inputMode={inputMode}
        autoComplete={autoComplete}
        maxLength={maxLength}
        min={min}
        aria-invalid={!!error}
        aria-describedby={error ? errId : undefined}
        data-invalid={!!error}
        className={`${controlBase} h-[52px] px-4 ${error ? controlErr : controlOk} ${surfaceClass(surface)}`}
      />
    </FieldShell>
  );
}

/* ------------------------------------------------------------------ */
/* Textarea                                                             */
/* ------------------------------------------------------------------ */

export function TextAreaField({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  required,
  optional,
  rows = 3,
  className,
  surface = "white",
  maxLength,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  optional?: boolean;
  rows?: number;
  className?: string;
  surface?: Surface;
  maxLength?: number;
}) {
  const id = useId();
  const errId = `${id}-err`;
  return (
    <FieldShell label={label} htmlFor={id} required={required} optional={optional} error={error} errorId={errId} className={className}>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        aria-invalid={!!error}
        aria-describedby={error ? errId : undefined}
        data-invalid={!!error}
        className={`${controlBase} resize-none px-4 py-[14px] ${error ? controlErr : controlOk} ${surfaceClass(surface)}`}
      />
    </FieldShell>
  );
}

/* ------------------------------------------------------------------ */
/* Custom select (listbox)                                              */
/* ------------------------------------------------------------------ */

export type Option = { label: string; value: string };

export function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = "Select",
  error,
  required,
  optional,
  className,
  surface = "white",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly (string | Option)[];
  placeholder?: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  className?: string;
  surface?: Surface;
}) {
  const id = useId();
  const listId = `${id}-list`;
  const errId = `${id}-err`;
  const opts: Option[] = options.map((o) => (typeof o === "string" ? { label: o, value: o } : o));
  const selected = opts.find((o) => o.value === value);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const openList = () => {
    setActive(Math.max(0, opts.findIndex((o) => o.value === value)));
    setOpen(true);
  };

  const choose = (i: number) => {
    const o = opts[i];
    if (!o) return;
    onChange(o.value);
    setOpen(false);
    btnRef.current?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        openList();
      }
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation(); // don't close the parent modal
      setOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(opts.length - 1, a + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(0, a - 1));
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActive(opts.length - 1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(active);
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <FieldShell label={label} htmlFor={id} required={required} optional={optional} error={error} errorId={errId} className={className}>
      <div ref={wrapRef} className="relative">
        <input type="hidden" name={name} value={value} />
        <button
          ref={btnRef}
          id={id}
          type="button"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-invalid={!!error}
          aria-describedby={error ? errId : undefined}
          data-invalid={!!error}
          onClick={() => (open ? setOpen(false) : openList())}
          onKeyDown={onKeyDown}
          className={`${controlBase} flex h-[52px] items-center justify-between px-4 text-left ${
            open ? "!border-2 !border-teal shadow-[0_0_0_3px_#e6f6f4]" : error ? controlErr : controlOk
          } ${surfaceClass(surface)}`}
        >
          <span className={selected ? "truncate text-ink" : "truncate text-slate-400"}>{selected?.label ?? placeholder}</span>
          <ChevronDown size={18} className={`shrink-0 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
        </button>
        {open && (
          <ul
            id={listId}
            role="listbox"
            aria-label={label}
            className="animate-fade-in absolute left-0 right-0 top-[calc(100%+4px)] z-30 max-h-[280px] overflow-y-auto rounded-xl border-[1.5px] border-line bg-white p-[6px] shadow-[0_12px_32px_rgba(16,24,40,0.12)]"
          >
            {opts.map((o, i) => {
              const sel = o.value === value;
              return (
                <li
                  key={o.value}
                  role="option"
                  aria-selected={sel}
                  onMouseEnter={() => setActive(i)}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => choose(i)}
                  className={`flex min-h-[44px] cursor-pointer items-center justify-between rounded-lg px-[14px] text-[15px] leading-[18px] text-navy-800 ${
                    i === active ? "bg-mint" : ""
                  } ${sel ? "font-bold" : ""}`}
                >
                  <span>{o.label}</span>
                  {sel && <Check size={16} className="text-teal" aria-hidden />}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </FieldShell>
  );
}

/* ------------------------------------------------------------------ */
/* Segmented choice (I am an …)                                         */
/* ------------------------------------------------------------------ */

export function ChoiceField({
  label,
  value,
  onChange,
  options,
  error,
  required,
  widths,
}: {
  widths?: number[];
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  error?: string;
  required?: boolean;
}) {
  const id = useId();
  return (
    <div role="radiogroup" aria-labelledby={id}>
      <span id={id} className="mb-[7px] block font-display text-[13px] font-bold leading-[18px] text-navy-800">
        {label}
        {required && " *"}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((o, i) => {
          const on = o === value;
          return (
            <button
              key={o}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => onChange(o)}
              style={widths?.[i] ? { width: widths[i] } : undefined}
              className={`h-11 rounded-[10px] border px-[17px] font-sans text-[13px] font-bold leading-4 transition-colors ${
                on ? "border-teal bg-mint text-teal" : "border-line bg-white text-slate-500 hover:border-[#cfd5de]"
              }`}
            >
              {o}
            </button>
          );
        })}
      </div>
      {error && (
        <p role="alert" className="mt-1 pl-1 text-[12px] leading-[15px] text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

/** Honeypot input — hidden from people and assistive tech; bots tend to fill it. */
export function Honeypot({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>
        Leave this field empty
        <input tabIndex={-1} autoComplete="off" name="hp" value={value} onChange={(e) => onChange(e.target.value)} />
      </label>
    </div>
  );
}

export function FormBanner({ tone, children }: { tone: "error" | "info"; children: ReactNode }) {
  return (
    <div
      role={tone === "error" ? "alert" : "status"}
      className={`rounded-xl px-4 py-3 text-[14px] leading-5 ${
        tone === "error" ? "border border-[#fecdca] bg-danger-bg text-danger" : "bg-mint text-navy-800"
      }`}
    >
      {children}
    </div>
  );
}
