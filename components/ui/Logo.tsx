import Link from "next/link";

export function LogoMark({ variant = "dark", className = "" }: { variant?: "dark" | "light"; className?: string }) {
  const light = variant === "light";
  return (
    <svg viewBox="0 0 44 44" className={`h-10 w-10 lg:h-11 lg:w-11 ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id="sm-logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1e4170" />
          <stop offset="1" stopColor="#0b1b32" />
        </linearGradient>
      </defs>
      <rect width="44" height="44" rx="12" fill={light ? "#fff" : "url(#sm-logo-grad)"} />
      <path
        d="M12 31V17.5l7 8"
        fill="none"
        stroke={light ? "#142b4a" : "#fff"}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M19 25.5l7.5-8V31" fill="none" stroke="#17a89b" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="33" cy="9" r="3.5" fill="#f4b860" />
    </svg>
  );
}

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const light = variant === "light";
  return (
    <Link href="/" className="flex items-center gap-3 lg:gap-[14px]" aria-label="SmartMovess Consulting Zone — home">
      <LogoMark variant={variant} />
      <span className="flex flex-col">
        <span className="font-display text-[19.8px] font-bold leading-[24px] tracking-[-0.2px] lg:text-[22px] lg:leading-[26px]">
          <span className={light ? "text-white" : "text-navy-800"}>Smart</span>
          <span className="text-teal">Movess</span>
        </span>
        <span
          className={`font-display text-[8.55px] font-bold leading-3 lg:text-[9.5px] lg:leading-[13px] ${light ? "text-[#aeb8c7]" : "text-slate-500"}`}
        >
          CONSULTING ZONE
        </span>
      </span>
    </Link>
  );
}
