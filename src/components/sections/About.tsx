"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { aboutData } from "@/data/about";
import { FadeIn } from "@/components/ui/FadeIn";
import { ParticleText } from "@/components/ui/ParticleText";

export function About() {
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);
  const [showParticles, setShowParticles] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative px-6 md:px-8 lg:px-12 pt-[50vh] md:pt-[55vh] pb-16 md:pb-24 bg-background"
    >
      {/* Particle effect background */}
      <div className="absolute inset-0 pointer-events-none">
        <ParticleText
          texts={aboutData.experience.map((exp) => ({
            company: exp.company,
            period: exp.period,
            role: exp.role,
          }))}
          isVisible={isVisible && showParticles}
        />
      </div>

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
          <div className="mt-12 md:mt-16">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <span className="text-xs tracking-[0.14em] uppercase text-muted font-medium">
                工作经历
              </span>
              <button
                onClick={() => setShowParticles(!showParticles)}
                className="text-xs text-muted-light hover:text-foreground transition-colors"
              >
                {showParticles ? "关闭粒子" : "开启粒子"}
              </button>
            </div>
            <div className="space-y-5 md:space-y-6">
              {aboutData.experience.map((exp, i) => (
                <div
                  key={i}
                  className="group cursor-default"
                  onMouseEnter={() => setHoveredExp(i)}
                  onMouseLeave={() => setHoveredExp(null)}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className={`text-base md:text-lg font-medium transition-colors duration-200 ${
                        hoveredExp === i ? "text-accent" : "text-foreground"
                      }`}>
                        {exp.company}
                      </span>
                      <span className={`text-xs transition-all duration-200 ${
                        hoveredExp === i ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
                      }`}>
                        ↓
                      </span>
                    </div>
                    <span className="text-xs text-muted font-mono shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-2">
                    <span className="text-sm text-muted">
                      {exp.role}
                    </span>
                    <span className="text-muted-light">·</span>
                    <span className="text-xs text-muted-light">
                      {exp.tags}
                    </span>
                  </div>

                  <AnimatePresence>
                    {hoveredExp === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 pb-1">
                          <ul className="space-y-1">
                            {exp.detail.map((item, j) => (
                              <li
                                key={j}
                                className="text-sm text-muted leading-relaxed flex gap-2"
                              >
                                <span className="text-muted-light shrink-0">·</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
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
