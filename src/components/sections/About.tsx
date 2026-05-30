"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { aboutData } from "@/data/about";
import { FadeIn } from "@/components/ui/FadeIn";

export function About() {
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);

  return (
    <section
      id="about"
      className="relative px-6 md:px-8 lg:px-12 pt-12 md:pt-16 pb-16 md:pb-24 bg-background"
    >
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <FadeIn>
          {/* Summary */}
          <div>
            <p className="text-sm md:text-base tracking-[0.12em] uppercase text-muted font-medium mb-3 leading-relaxed">
              视觉设计师&nbsp;&nbsp;·&nbsp;&nbsp;品牌设计&nbsp;&nbsp;·&nbsp;&nbsp;IP设计&nbsp;&nbsp;·&nbsp;&nbsp;AI产品设计&nbsp;&nbsp;·&nbsp;&nbsp;增长设计
            </p>
            <p className="text-[15px] md:text-base text-muted leading-7 md:leading-relaxed">
              多年互联网及大厂设计经验，跨越品牌视觉、IP 设计、运营增长与 AI 产品 0-1 搭建。具备从策略定义、交互设计到设计规范落地的完整能力，擅长将复杂业务转化为清晰好用的产品体验。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-14 md:mt-20">
            <span className="text-xs tracking-[0.14em] uppercase text-muted font-medium">
              工作经历
            </span>

            <div className="mt-6 md:mt-8 divide-y divide-border/50">
              {aboutData.experience.map((exp, i) => (
                <div
                  key={i}
                  className="group cursor-default py-5 md:py-6"
                  onMouseEnter={() => setHoveredExp(i)}
                  onMouseLeave={() => setHoveredExp(null)}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className={`text-base md:text-lg font-medium transition-colors duration-200 ${
                      hoveredExp === i ? "text-accent" : "text-foreground"
                    }`}>
                      {exp.company}
                    </span>
                    <span className="text-xs text-muted font-mono shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-muted mt-1">{exp.role}</p>

                  <AnimatePresence>
                    {hoveredExp === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-3 space-y-1.5">
                          {exp.detail.map((item, j) => (
                            <li
                              key={j}
                              className="text-sm text-muted leading-relaxed flex gap-2"
                            >
                              <span className="text-accent shrink-0 mt-0.5">·</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
