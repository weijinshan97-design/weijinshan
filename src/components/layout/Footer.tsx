"use client";

import { navItems, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#030304] px-6 py-10 text-white md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold">{siteConfig.nameZh}</p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.24em] text-white/42">
            Product Design Portfolio 2026
          </p>
        </div>
        <div className="flex flex-wrap gap-x-7 gap-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/50 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/36">
          Design beyond visuals
        </p>
      </div>
    </footer>
  );
}
