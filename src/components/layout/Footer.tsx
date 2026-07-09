"use client";

import { navItems, siteConfig } from "@/data/site";

const socialLinks = [
  { label: "小红书", href: "#creator" },
  { label: "抖音", href: "#creator" },
  { label: "GitHub", href: "https://github.com/weijinshan97-design" },
  { label: "Email", href: "mailto:771723714@qq.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050508] px-6 py-12 text-white md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <p className="text-sm font-semibold">{siteConfig.nameZh}</p>
            <p className="mt-2 max-w-[260px] text-xs leading-6 text-white/36">
              UI/UX + 视觉设计师，关注效率、流程和设计系统。
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs text-white/38 transition hover:text-white/70"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-xs text-white/32 transition hover:text-white/60"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/[0.04] pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/22">
            © 2026 Design beyond visuals
          </p>
          <p className="font-mono text-[10px] text-white/16">
            Built with Claude Code · Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
