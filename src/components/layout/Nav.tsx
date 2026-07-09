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
      setScrolled(window.scrollY > 60);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.06] bg-[#000000]/70 backdrop-blur-xl"
          : ""
      }`}
    >
      <div className="mx-auto flex h-12 max-w-[1320px] items-center justify-between px-6 md:px-10 lg:px-14">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="text-sm font-semibold tracking-tight text-white/80 transition hover:text-white"
        >
          {siteConfig.nameZh}
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
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
                className={`relative text-xs tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-white/45 hover:text-white/80"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 h-px w-3 -translate-x-1/2 bg-[#bf8eff]" />
                )}
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
          className="hidden text-xs tracking-wide text-white/40 transition hover:text-white md:inline-flex"
        >
          联系
        </a>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1 py-1 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-px w-5 transition-all duration-300 bg-white/60 ${
              menuOpen ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 transition-all duration-300 bg-white/60 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-5 transition-all duration-300 bg-white/60 ${
              menuOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 top-12 z-40 flex flex-col gap-8 bg-[#000000] p-8 transition-transform duration-400 md:hidden ${
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
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#contact");
          }}
          className="mt-4 inline-flex h-10 items-center justify-center rounded-full bg-white/10 px-6 text-sm text-white/80"
        >
          联系
        </a>
      </div>
    </header>
  );
}
