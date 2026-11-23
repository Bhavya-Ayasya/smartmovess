/** Class strings so ModalTrigger / Link buttons match <Button> exactly. */
const base =
  "inline-flex items-center justify-center gap-2 rounded-[10px] font-display font-bold uppercase whitespace-nowrap transition-[background-color,transform,box-shadow,color,border-color] duration-150 hover:-translate-y-px active:translate-y-0";

const variants = {
  amber: "bg-amber text-navy-950 hover:bg-[#f7c677] hover:shadow-[0_8px_20px_rgba(244,184,96,0.35)]",
  teal: "bg-teal text-white hover:bg-[#139488] hover:shadow-[0_8px_20px_rgba(23,168,155,0.35)]",
  navy: "bg-navy-800 text-white hover:bg-navy-950",
  "outline-white": "border-[1.5px] border-white text-white hover:bg-white/10",
  "outline-navy": "border-[1.5px] border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white",
} as const;

const sizes = {
  lg: "h-[56px] px-[30px] text-[15px] leading-5",
  md: "h-[52px] px-6 text-[14px] leading-[19px]",
  sm: "h-[46px] px-5 text-[13px] leading-[18px]",
} as const;

export function cta(variant: keyof typeof variants, size: keyof typeof sizes = "lg", extra = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`;
}
