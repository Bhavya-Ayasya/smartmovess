import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { FOOTER_NAV, FOOTER_SERVICES } from "@/lib/site";

const SOCIALS = [
  { label: "in", name: "LinkedIn" },
  { label: "f", name: "Facebook" },
  { label: "x", name: "X" },
  { label: "ig", name: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-fog-2">
      <div className="wrap relative pt-14 lg:h-[520px] lg:pt-[95px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[424px_200px_240px_384px] lg:gap-0">
          <div>
            <Logo variant="light" />
            <p className="mt-[19px] font-display text-[15px] font-bold leading-[22px] text-teal">
              Connecting Talent. Building Careers.
              <br />
              Empowering Businesses.
            </p>
            <p className="mt-[16px] max-w-[290px] text-[14px] leading-[22px]">
              {"Career support and recruitment assistance\nfor students, professionals and growing\nbusinesses."}
            </p>
            <div className="mt-[34px] flex gap-3">
              {SOCIALS.map((s) => (
                <span
                  key={s.name}
                  title={`${s.name} (coming soon)`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border-[1.5px] border-fog-2 font-display text-[13px] font-bold"
                  aria-label={s.name}
                >
                  {s.label}
                </span>
              ))}
            </div>
            <p className="mt-[11px] text-[12px] leading-[15px]">Social media links (placeholders)</p>
          </div>

          <div>
            <h3 className="font-display text-[13px] font-bold leading-[18px] text-white">NAVIGATE</h3>
            <ul className="mt-[22px] flex flex-col gap-[17px] text-[14px] leading-[17px]">
              {FOOTER_NAV.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[13px] font-bold leading-[18px] text-white">CORE SERVICES</h3>
            <ul className="mt-[22px] flex flex-col gap-[17px] text-[14px] leading-[17px]">
              {FOOTER_SERVICES.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[13px] font-bold leading-[18px] text-white">GET STARTED</h3>
            <div className="mt-[23px] flex flex-col gap-4">
              <Link
                href="/for-employers#hiring"
                className="inline-flex h-12 items-center justify-center rounded-[10px] bg-amber px-4 text-center font-display text-[13px] font-bold text-navy-950 transition-colors hover:bg-[#f7c677]"
              >
                Employers: Share Hiring Requirements
              </Link>
              <Link
                href="/contact#booking"
                className="inline-flex h-12 items-center justify-center rounded-[10px] bg-teal px-4 text-center font-display text-[13px] font-bold text-white transition-colors hover:bg-[#139488]"
              >
                Candidates: Book a Consultation
              </Link>
            </div>
            <ul className="mt-[32px] flex flex-col gap-[15px] text-[14px] leading-[17px]">
              <li className="flex items-center gap-[12px]">
                <Mail size={14} aria-hidden /> Email address (placeholder)
              </li>
              <li className="flex items-center gap-[12px]">
                <Phone size={14} aria-hidden /> Phone number (placeholder)
              </li>
              <li className="flex items-center gap-[12px]">
                <MapPin size={14} aria-hidden /> Office address (placeholder)
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pb-10 pt-[22px] text-[13px] leading-4 lg:absolute lg:left-24 lg:right-24 lg:top-[448px] lg:mt-0 lg:pb-0">
          © 2026 SmartMovess Consulting Zone. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
