"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";

export function Footer() {
  const [visits, setVisits] = useState<number>(0);

  useEffect(() => {
    try {
      const key = "jinshan_visits";
      const stored = localStorage.getItem(key);
      const count = stored ? parseInt(stored) + 1 : 1;
      localStorage.setItem(key, count.toString());
      setVisits(count);
    } catch {
      setVisits(0);
    }
  }, []);

  return (
    <footer className="border-t border-border-light bg-surface">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left: Brand */}
          <div className="max-w-xs">
            <Link href="#home" className="text-base font-semibold tracking-tight text-foreground hover:text-accent transition-colors">
              {siteConfig.nameZh}
            </Link>
            <p className="mt-3 text-sm text-muted-light leading-relaxed">
              {siteConfig.titleZh}
            </p>
          </div>

          {/* Center: Nav */}
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-light hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right: Quote */}
          <p className="text-sm text-muted-light/60 italic max-w-[200px] leading-relaxed">
            从视觉出发，延伸到业务，持续创造价值。
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-border-light/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-light/50">
            &copy; {new Date().getFullYear()} {siteConfig.nameZh}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-xs text-muted-light/40">
              Built with care. Not generated.
            </p>
            {visits !== null && (
              <>
                <span className="text-xs text-muted-light/30">·</span>
                <span className="text-xs text-muted-light/40 font-mono" title="Total visits">
                  {visits.toLocaleString()} views
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
