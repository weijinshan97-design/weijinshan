"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const railItems = [
  { id: "home", label: "开场" },
  { id: "work", label: "案例" },
  { id: "creator", label: "内容" },
  { id: "about", label: "履历" },
  { id: "systems", label: "工具" },
  { id: "thinking", label: "方法" },
  { id: "contact", label: "联系" },
];

export function StoryRail() {
  const [activeId, setActiveId] = useState(railItems[0].id);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    mass: 0.4,
  });

  useEffect(() => {
    const observers = railItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section))
      .map((section) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveId(section.id);
            }
          },
          {
            rootMargin: "-42% 0px -48% 0px",
            threshold: 0,
          },
        );

        observer.observe(section);
        return observer;
      });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <aside
      className="pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
      aria-label="页面章节进度"
    >
      <div className="relative flex min-h-[390px] flex-col items-end justify-between py-2">
        <div className="absolute right-[7px] top-0 h-full w-px bg-white/[0.08]" />
        <motion.div
          className="absolute right-[7px] top-0 h-full w-px origin-top bg-gradient-to-b from-[#bf8eff] via-white/70 to-transparent shadow-[0_0_28px_rgba(191,142,255,0.38)]"
          style={{ scaleY: progress }}
        />

        {railItems.map((item, index) => {
          const active = activeId === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="pointer-events-auto group relative flex items-center gap-3"
              aria-current={active ? "true" : undefined}
            >
              <span
                className={`story-rail-label translate-x-2 rounded-full border px-3 py-1.5 text-[11px] backdrop-blur-xl transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 ${
                  active
                    ? "translate-x-0 border-[#bf8eff]/22 bg-[#bf8eff]/10 text-white/72 opacity-100"
                    : "border-white/10 bg-black/28 text-white/32 opacity-30 group-hover:opacity-100"
                }`}
              >
                {item.label}
              </span>
              <span
                className={`relative z-10 grid h-3.5 w-3.5 place-items-center rounded-full border transition duration-300 ${
                  active
                    ? "border-[#bf8eff] bg-[#bf8eff] shadow-[0_0_26px_rgba(191,142,255,0.78)]"
                    : "border-white/18 bg-[#080a0d] group-hover:border-white/44"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="story-rail-active"
                    className="absolute h-8 w-8 rounded-full border border-[#bf8eff]/24"
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  />
                )}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
}
