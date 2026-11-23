import type { ReactNode } from "react";

/** Instagram-gradient ring around a dark disc — the design's signature icon treatment. */
export function RingIcon({
  size = 64,
  ring = 3,
  children,
  inner = "bg-navy-900",
  className = "",
}: {
  size?: number;
  ring?: number;
  children: ReactNode;
  inner?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-ig-grad ${className}`}
      style={{ width: size, height: size, padding: ring }}
    >
      <span className={`flex h-full w-full items-center justify-center rounded-full text-white ${inner}`}>{children}</span>
    </span>
  );
}
