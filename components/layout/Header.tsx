"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NAV } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const pathname = usePathname();
  // Menu is "open for" a specific path, so navigating closes it without an effect.
  const [openFor, setOpenFor] = useState<string | null>(null);
  const open = openFor === pathname;
  const setOpen = (fn: (v: boolean) => boolean) => setOpenFor(fn(open) ? pathname : null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="wrap flex h-[67px] items-center lg:h-[87px]">
        <Logo />

        <nav aria-label="Primary" className="ml-10 hidden items-center gap-7 min-[1180px]:flex xl:ml-[100px]">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-[22px] text-[15px] leading-[18px] transition-colors hover:text-navy-800 ${
                  active ? "font-bold text-navy-800" : "text-slate-700"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-[22px] left-0 h-[3px] w-8 translate-y-[18px] rounded-sm bg-teal" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden items-center gap-3 min-[1180px]:flex">
          <Link
            href="/for-employers#hiring"
            className="hidden h-[55px] items-center justify-center rounded-[10px] border-[1.5px] border-navy-800 px-6 font-display text-[14px] font-bold text-navy-800 transition-colors hover:bg-navy-800 hover:text-white min-[1320px]:inline-flex"
          >
            Hire Talent
          </Link>
          <Link
            href="/contact#booking"
            className="inline-flex h-[56px] items-center justify-center rounded-[10px] bg-teal px-6 font-display text-[14px] font-bold text-white transition-colors hover:bg-[#139488]"
          >
            Book a Consultation
          </Link>
        </div>

        <Link
          href="/contact#booking"
          className="ml-auto inline-flex h-10 items-center justify-center rounded-[10px] bg-teal px-[30px] font-display text-[13px] font-bold text-white min-[1180px]:hidden"
        >
          Book
        </Link>
        <button
          type="button"
          className="ml-3 inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-line text-navy-800 min-[1180px]:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="animate-fade-in fixed inset-x-0 top-[68px] bottom-0 overflow-y-auto bg-white min-[1180px]:hidden"
        >
          <nav aria-label="Mobile" className="wrap flex flex-col py-4">
            {NAV.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex h-14 items-center justify-between border-b border-line text-[17px] ${
                    active ? "font-bold text-navy-800" : "text-slate-700"
                  }`}
                >
                  {item.label}
                  {active && <span className="h-2 w-2 rounded-full bg-teal" />}
                </Link>
              );
            })}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/for-employers#hiring"
                className="inline-flex h-[52px] items-center justify-center rounded-[10px] border-[1.5px] border-navy-800 font-display text-[14px] font-bold text-navy-800"
              >
                Hire Talent
              </Link>
              <Link
                href="/contact#booking"
                className="inline-flex h-[52px] items-center justify-center rounded-[10px] bg-teal font-display text-[14px] font-bold text-white"
              >
                Book a Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
