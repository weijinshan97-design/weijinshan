"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { aboutData } from "@/data/about";
import { ParticleField } from "@/components/ui/ParticleField";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const handleDismiss = () => setEntered(true);
    window.addEventListener("loading-dismissed", handleDismiss);
    const fallback = setTimeout(() => setEntered(true), 800);
    return () => {
      window.removeEventListener("loading-dismissed", handleDismiss);
      clearTimeout(fallback);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 35,
    damping: 25,
    mass: 0.3,
  });

  // Black overlay — slides up (spring-smoothed)
  const overlayY = useTransform(smoothProgress, [0.08, 0.30], ["0%", "-100%"]);

  // Bottom text fades out
  const bottomOpacity = useTransform(smoothProgress, [0, 0.02, 0.06, 1], [1, 1, 0, 0]);

  // Title color: white → black
  const titleColor = useTransform(
    smoothProgress,
    [0.10, 0.20],
    ["rgb(255,255,255)", "rgb(10,10,10)"]
  );

  const ctaColor = useTransform(
    smoothProgress,
    [0.10, 0.20],
    ["rgba(255,255,255,0.48)", "rgb(113,113,122)"]
  );

  // Title slides up with black overlay and disappears together
  const titleY = useTransform(smoothProgress, [0, 0.08, 0.30], ["0vh", "0vh", "-30vh"]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.20, 0.30], [1, 1, 0]);

  return (
    <section id="home" ref={sectionRef} className="relative bg-dark">
      {/* Black overlay — slides up */}
      <motion.div
        className="fixed inset-0 bg-dark z-10 pointer-events-none"
        style={{ y: overlayY }}
      >
        {/* Purple/blue glow — bottom half */}
        <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-[radial-gradient(ellipse_at_50%_80%,rgba(64,53,225,0.18)_0%,rgba(43,106,219,0.08)_35%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-[radial-gradient(ellipse_at_50%_100%,rgba(64,53,225,0.12)_0%,transparent_60%)]" />
      </motion.div>

      {/* Particle field — on top of black overlay */}
      <motion.div
        className="fixed inset-0 z-[11] pointer-events-none"
        style={{ y: overlayY }}
      >
        <ParticleField />
      </motion.div>

      {/* Title — fixed, scrolls with content after it appears */}
      <motion.div
        className="fixed top-[16vh] md:top-[14vh] left-0 right-0 z-20 pointer-events-none px-6 md:px-8 lg:px-12"
        style={{ opacity: titleOpacity, y: titleY }}
      >
        <div className="flex flex-col items-center">
          <div className="inline-block mx-auto">
            <motion.h1
              style={{ color: titleColor }}
              initial={{ opacity: 0, y: 12 }}
              animate={entered ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="whitespace-nowrap text-center font-serif text-[clamp(1.6rem,8.2vw,8.25rem)] font-bold leading-[1.02] tracking-normal"
            >
              {siteConfig.titleZh}
            </motion.h1>
          </div>
          <motion.p
            style={{ color: ctaColor }}
            initial={{ opacity: 0, y: 10 }}
            animate={entered ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto mt-4 md:mt-7 w-full max-w-[min(92vw,760px)] text-center text-[11px] sm:text-sm md:text-base font-normal tracking-[0.2em] md:tracking-[0.32em] leading-6 md:leading-8"
          >
            持续在商业视觉之外，探索工具、系统与更有效的解决方式。
          </motion.p>
        </div>
      </motion.div>

      {/* Bottom text — fades out */}
      <motion.div
        style={{ opacity: bottomOpacity }}
        className="fixed bottom-10 md:bottom-16 left-0 right-0 z-20 pointer-events-none px-6 md:px-8 lg:px-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={entered ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-16">
              <div className="absolute inset-0 rounded-full bg-accent/25 blur-xl animate-breathe" />
              <div className="absolute w-6 h-12 rounded-full bg-accent/35 blur-lg animate-breathe" />
              <div className="absolute w-2 h-8 rounded-full bg-accent/50 blur-sm animate-breathe" />
              <div className="relative w-px h-9 bg-accent/80 rounded-full" />
            </div>
          </div>
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 font-medium">
            Scroll
          </p>
          <p className="text-sm md:text-base text-white/40 leading-relaxed max-w-xl text-center">
            {siteConfig.descriptionZh}
          </p>
        </motion.div>
      </motion.div>

      {/* About — revealed as black overlay lifts */}
      <div
        id="about"
        className="relative z-0 pt-[10vh] md:pt-[15vh] pb-0 px-6 md:px-8 lg:px-12 bg-background"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Summary */}
          <div>
            <p className="text-sm md:text-base tracking-[0.12em] uppercase text-muted font-medium mb-3 leading-relaxed">
              视觉设计师&nbsp;&nbsp;·&nbsp;&nbsp;品牌设计&nbsp;&nbsp;·&nbsp;&nbsp;IP设计&nbsp;&nbsp;·&nbsp;&nbsp;AI产品设计&nbsp;&nbsp;·&nbsp;&nbsp;增长设计
            </p>
            <p className="text-[15px] md:text-base text-muted leading-7 md:leading-relaxed">
              多年互联网及大厂设计经验，跨越品牌视觉、IP 设计、运营增长与 AI 产品 0-1 搭建。具备从策略定义、交互设计到设计规范落地的完整能力，擅长将复杂业务转化为清晰好用的产品体验。
            </p>
          </div>

          <div className="mt-12 md:mt-16">
            <div className="mb-6 md:mb-8">
              <span className="text-xs tracking-[0.14em] uppercase text-muted font-medium">
                工作经历
              </span>
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
        </div>
      </div>
    </section>
  );
}
