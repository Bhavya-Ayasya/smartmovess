import { Globe2, MapPin } from "lucide-react";
import { RingIcon } from "./RingIcon";

type Node = { label: string; node: [number, number]; chip: [number, number]; amber?: boolean };

/** "Global reach" visual: concentric rings, brand disc, six location nodes with labels. Coordinates are px from the 380×380 box origin. */
export const ORBIT_NODES: Node[] = [
  { label: "India", node: [166, 41], chip: [160, 15] },
  { label: "USA", node: [322, 76], chip: [376, 50] },
  { label: "Canada", node: [322, 256], chip: [376, 306] },
  { label: "UK", node: [166, 291], chip: [182, 346] },
  { label: "UAE", node: [10, 256], chip: [-41, 306] },
  { label: "Other", node: [10, 76], chip: [-56, 50], amber: true },
];

export function Orbit({ nodes = ORBIT_NODES, className = "" }: { nodes?: Node[]; className?: string }) {
  return (
    <div aria-hidden className={`relative h-[380px] w-[380px] ${className}`}>
      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(23,168,155,0.30),rgba(23,168,155,0)_70%)]" />
      <span className="absolute left-[50px] top-[50px] h-[280px] w-[280px] rounded-full border border-[#3c5a82]" />
      <span className="absolute left-[105px] top-[105px] h-[170px] w-[170px] rounded-full border border-[#3c5a82]" />
      <span className="absolute left-[130px] top-[130px] h-[120px] w-[120px] rounded-full border border-[#3c5a82]" />
      <span className="absolute left-[144px] top-[144px] h-[92px] w-[92px] rounded-full bg-teal/25" />
      <span className="absolute left-[154px] top-[154px] flex h-[72px] w-[72px] items-center justify-center rounded-full bg-teal text-white">
        <Globe2 size={30} aria-hidden />
      </span>
      {nodes.map((n) => (
        <span key={n.label}>
          <span
            className={`absolute flex h-12 w-12 items-center justify-center rounded-full ${n.amber ? "bg-amber/20 text-amber" : "bg-teal-400/20 text-teal-300"}`}
            style={{ left: n.node[0], top: n.node[1] }}
          >
            <MapPin size={16} aria-hidden />
          </span>
          <span
            className="absolute inline-flex h-7 items-center rounded-lg border border-navy-line bg-navy-950/85 px-[11px] font-display text-[13px] font-bold text-white"
            style={{ left: n.chip[0], top: n.chip[1] }}
          >
            {n.label}
          </span>
        </span>
      ))}
    </div>
  );
}

export { RingIcon };

/** Larger map-style visual used in the "Global remote consulting" panel (400×400, chips measured from the design). */
const MAP_CHIPS: { label: string; x: number; y: number; w: number }[] = [
  { label: "USA", x: -44, y: 66, w: 108 },
  { label: "Canada", x: 86, y: 21, w: 108 },
  { label: "UK", x: 241, y: 36, w: 108 },
  { label: "UAE", x: 336, y: 156, w: 108 },
  { label: "India", x: 256, y: 286, w: 108 },
  { label: "Other", x: -4, y: 261, w: 108 },
];

export function GlobalMap({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`h-[400px] w-[400px] ${className}`}>
      <span className="absolute left-[80px] top-[80px] h-[240px] w-[240px] rounded-full bg-teal/[0.08]" />
      <span className="absolute inset-0 rounded-full border border-navy-line" />
      <span className="absolute left-[50px] top-[50px] h-[300px] w-[300px] rounded-full border border-navy-line" />
      <span className="absolute left-[110px] top-[110px] h-[180px] w-[180px] rounded-full border border-navy-line" />
      <svg className="absolute inset-0" width="400" height="400" viewBox="0 0 400 400">
        {MAP_CHIPS.map((c) => (
          <line key={c.label} x1="200" y1="200" x2={c.x + c.w / 2} y2={c.y + 14.5} stroke="#17a89b" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="3 5" />
        ))}
      </svg>
      <span className="absolute left-[160px] top-[160px] flex h-20 w-20 items-center justify-center rounded-full bg-ig-grad p-1">
        <span className="flex h-full w-full items-center justify-center rounded-full bg-navy-950 font-display text-[22px] font-bold text-white">SM</span>
      </span>
      {MAP_CHIPS.map((c) => (
        <span
          key={c.label}
          className="absolute inline-flex h-[29px] items-center gap-2 rounded-full border border-navy-line bg-navy-900 pl-3 font-display text-[13px] font-bold text-white"
          style={{ left: c.x, top: c.y, width: c.w }}
        >
          <span className={`h-[7px] w-[7px] rounded-full ${c.label === "Other" ? "bg-amber" : "bg-teal-400"}`} />
          {c.label}
        </span>
      ))}
    </div>
  );
}
