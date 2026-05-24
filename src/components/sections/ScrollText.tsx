"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const text =
  "从视觉出发 → 延伸到业务 → 持续创造价值 · 从视觉出发 → 延伸到业务 → 持续创造价值 · 从视觉出发 → 延伸到业务 → 持续创造价值";

const textEn =
  "DESIGN · BUSINESS · VALUE · DESIGN · BUSINESS · VALUE · DESIGN · BUSINESS · VALUE · DESIGN · BUSINESS · VALUE";

export function ScrollText() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
    mass: 0.3,
  });

  const x1 = useTransform(smoothProgress, [0, 1], ["0%", "-32%"]);
  const x2 = useTransform(smoothProgress, [0, 1], ["-8%", "22%"]);

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-8 md:py-12 overflow-hidden bg-background border-y border-border-light"
    >
      {/* Edge fade masks */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />
      <div className="space-y-12">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap">
          <span className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground tracking-tight">
            {text}
          </span>
        </motion.div>

        <motion.div style={{ x: x2 }} className="whitespace-nowrap">
          <span className="font-serif text-4xl md:text-6xl lg:text-7xl font-light italic text-muted-light tracking-wide">
            {textEn}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
