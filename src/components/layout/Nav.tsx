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

  const isDark = !scrolled;

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border-light"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className={`text-base font-semibold tracking-tight transition-colors duration-500 ${
            isDark
              ? "text-white hover:text-white/70"
              : "text-foreground hover:text-foreground/70"
          }`}
        >
          {siteConfig.nameZh}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
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
                className={`relative text-sm tracking-wide transition-colors duration-500 group ${
                  isActive
                    ? isDark
                      ? "text-white font-semibold"
                      : "text-foreground font-semibold"
                    : isDark
                      ? "text-white/50 hover:text-white"
                      : "text-muted-light hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-px transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  } ${
                    isActive
                      ? isDark ? "bg-white" : "bg-foreground"
                      : isDark ? "bg-white/40" : "bg-foreground/40"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
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
