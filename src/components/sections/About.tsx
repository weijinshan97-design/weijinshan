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
      className="relative overflow-hidden bg-[#070808]"
    >
      {/* Background gradient similar to CapabilitiesNav */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_42%,rgba(64,53,225,0.08),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(43,106,219,0.08),transparent_32%),linear-gradient(180deg,#070808_0%,#0a0a0a_100%)]" />

      <div className="relative z-10 px-6 md:px-8 lg:px-12 pt-16 md:pt-24 pb-20 md:pb-32">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            {/* Summary Card */}
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/34">
                  Work Experience
                </p>
                <h3 className="mt-5 font-serif text-2xl md:text-4xl font-bold leading-[1.1] tracking-normal text-white">
                  工作经历
                </h3>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {["视觉设计师", "品牌设计", "IP设计", "AI产品设计", "增长设计"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs rounded-full bg-white/5 text-white/50 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-5 max-w-sm text-xs md:text-sm leading-6 md:leading-7 text-white/44">
                  {aboutData.summary}
                </p>
              </div>

              <div className="grid gap-2 md:gap-3">
                {aboutData.experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    className="group cursor-default"
                    onMouseEnter={() => setHoveredExp(i)}
                    onMouseLeave={() => setHoveredExp(null)}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px 0px 0px" }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <div className={`rounded-2xl border p-4 md:p-6 transition-all duration-500 gradient-border ${
                      hoveredExp === i
                        ? "active border-transparent bg-white/[0.075] shadow-[0_18px_60px_rgba(0,0,0,0.22)]"
                        : hoveredExp !== null
                          ? "border-white/7 bg-white/[0.028] opacity-55"
                          : "border-white/10 bg-white/[0.045]"
                    }`}>
                      <div className="flex items-start gap-3 md:gap-5">
                        <span className={`font-mono text-xs transition-colors duration-300 ${
                          hoveredExp === i ? "text-[#4035e1]/70" : "text-white/24"
                        }`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-col gap-0.5 md:gap-1 md:flex-row md:items-baseline md:justify-between md:gap-5">
                            <h4 className={`text-base md:text-lg font-semibold tracking-normal transition-colors duration-200 ${
                              hoveredExp === i ? "text-[#4035e1]" : "text-white"
                            }`}>
                              {exp.company}
                            </h4>
                            <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.18em] text-white/28">
                              {exp.period}
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-white/40">{exp.role}</p>

                          <AnimatePresence>
                            {hoveredExp === i && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="overflow-hidden"
                              >
                                <ul className="mt-3 space-y-1.5">
                                  {exp.detail.map((item, j) => (
                                    <li
                                      key={j}
                                      className="text-xs text-white/50 leading-relaxed flex gap-2"
                                    >
                                      <span className="text-[#4035e1]/40 shrink-0 mt-0.5">—</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <span className={`mt-1 hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm transition-all duration-300 md:inline-flex ${
                          hoveredExp === i
                            ? "translate-x-0 border-[#4035e1]/24 text-[#4035e1]/70"
                            : "translate-x-2 border-white/10 text-white/22"
                        }`}>
                          →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
