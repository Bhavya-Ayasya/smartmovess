import { Grid3x3 } from "lucide-react";

/** Stylised Instagram profile used in the audit hero (decorative). */
export function PhoneMock() {
  return (
    <div aria-hidden className="relative h-[640px] w-[292px] rounded-[40px] border border-navy-line bg-navy-950 p-[9px] shadow-[8px_18px_40px_rgba(0,0,0,0.28)]">
      <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-white text-[#262626]">
        <span className="absolute left-1/2 top-[9px] h-[22px] w-20 -translate-x-1/2 rounded-full bg-navy-950" />
        <p className="absolute left-[26px] top-[14px] text-[12px] font-bold leading-[15px]">9:41</p>
        <p className="mt-[45px] px-11 text-[17px] font-bold leading-[21px]">yourbrand</p>
        <div className="mt-[22px] flex items-center gap-[10px] px-3">
          <span className="flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-full bg-ig-grad p-1">
            <span className="flex h-full w-full items-center justify-center rounded-full bg-white p-1">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-navy-800 font-display text-[22px] font-bold text-white">SM</span>
            </span>
          </span>
          <div className="grid flex-1 grid-cols-3 text-center">
            {["posts", "followers", "following"].map((l) => (
              <div key={l}>
                <p className="text-[18px] font-bold leading-[22px]">—</p>
                <p className="text-[11.5px] leading-[14px]">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[13px] px-4 text-[12px] leading-[16px]">
          <p className="text-[13px] font-bold">Your Brand Name</p>
          <p className="text-[#737373]">Business consultant</p>
          <p className="mt-px max-w-[185px]">Add your brand story, offers and contact details in your bio.</p>
          <p className="mt-px font-bold text-[#00376b]">🔗 yourbrand.com</p>
        </div>
        <div className="mt-3 flex gap-[6px] px-4">
          <span className="inline-flex h-8 w-[108px] items-center justify-center rounded-lg bg-[#0095f6] text-[13px] font-bold text-white">Follow</span>
          <span className="inline-flex h-8 w-[86px] items-center justify-center rounded-lg bg-[#efefef] text-[13px] font-bold">Message</span>
        </div>
        <div className="mt-[15px] flex gap-[10px] px-3">
          {[
            ["Services", "bg-teal"],
            ["Reviews", "bg-amber"],
            ["Offers", "bg-navy-800"],
            ["FAQs", "bg-violet"],
          ].map(([l, c]) => (
            <div key={l} className="text-center">
              <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-[#dbdbdb] bg-white">
                <span className={`h-11 w-11 rounded-full ${c}`} />
              </span>
              <p className="mt-[5px] text-[10.5px] leading-[13px]">{l}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-center border-t border-[#dbdbdb] pt-2 text-[#262626]">
          <Grid3x3 size={18} />
        </div>
        <div className="grid grid-cols-3 gap-px">
          {["bg-teal", "bg-navy-800", "bg-amber", "bg-mint", "bg-petrol", "bg-cream"].map((c, i) => (
            <span key={i} className={`h-[91px] ${c}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
