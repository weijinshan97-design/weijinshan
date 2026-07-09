"use client";

import { useState, useEffect } from "react";
import { navItems, siteConfig } from "@/data/site";
import { useScrollspy } from "@/hooks/useScrollspy";

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollspy(sectionIds);

  useEffect(() => {
    const onScroll = () => {
      const heroThreshold = Math.min(window.innerHeight * 0.82, 720);
      setScrolled(window.scrollY > heroThreshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = true;

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full px-4 transition-all duration-500 md:px-6 ${
        scrolled
          ? "pt-3"
          : "pt-5"
      }`}
    >
      <div
        className={`mx-auto flex h-14 max-w-[1120px] items-center justify-between rounded-full border px-4 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-2xl transition-all duration-500 md:px-5 ${
          scrolled
            ? "border-white/12 bg-[#070808]/74 text-white shadow-[0_18px_70px_rgba(0,0,0,0.34)]"
            : "border-white/10 bg-[#070808]/42 text-white"
        }`}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className={`rounded-full px-3 py-2 text-sm font-semibold tracking-tight transition-colors duration-500 ${
            isDark
              ? "text-white hover:text-white/70"
              : "text-foreground hover:text-foreground/70"
          }`}
        >
          {siteConfig.nameZh}
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                data-active={isActive}
                className={`nav-micro-link relative rounded-full px-4 py-2 text-sm tracking-wide transition-all duration-500 group hover:-translate-y-0.5 ${
                  isActive
                    ? isDark
                      ? "bg-white/10 text-white font-semibold"
                      : "bg-black/[0.055] text-foreground font-semibold"
                    : isDark
                      ? "text-white/62 hover:text-white"
                      : "text-muted-light hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#contact");
          }}
          className={`hidden rounded-full px-4 py-2 text-sm font-semibold transition duration-300 md:inline-flex ${
            isDark
              ? "bg-gradient-to-r from-[#bf8eff] to-[#6366f1] text-white shadow-[0_0_20px_rgba(191,142,255,0.18)] hover:shadow-[0_0_32px_rgba(99,102,241,0.25)]"
              : "bg-[#09090b] text-white hover:bg-[#242427]"
          }`}
        >
          联系我
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 rounded-full p-3"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-px transition-all duration-300 ${
              isDark ? "bg-white" : "bg-foreground"
            } ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`}
          />
          <span
            className={`block w-5 h-px transition-all duration-300 ${
              isDark ? "bg-white" : "bg-foreground"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px transition-all duration-300 ${
              isDark ? "bg-white" : "bg-foreground"
            } ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 top-16 bg-dark z-40 flex flex-col p-8 gap-8 transition-transform duration-400 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navItems.map((item) => {
          const id = item.href.replace("#", "");
          const isActive = activeId === id;
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`text-xl transition-colors duration-300 ${
                isActive
                  ? "text-white font-semibold"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </header>
  );
}
