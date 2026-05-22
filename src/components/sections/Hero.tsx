"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { aboutData } from "@/data/about";

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
  const overlayY = useTransform(smoothProgress, [0.10, 0.42], ["0%", "-100%"]);

  // Bottom text fades out
  const bottomOpacity = useTransform(smoothProgress, [0, 0.02, 0.04, 1], [1, 1, 0, 0]);

  // Title color: white → black
  const titleColor = useTransform(
    smoothProgress,
    [0.20, 0.40],
    ["rgb(255,255,255)", "rgb(10,10,10)"]
  );

  const ctaColor = useTransform(
    smoothProgress,
    [0.20, 0.40],
    ["rgba(255,255,255,0.7)", "rgb(107,114,128)"]
  );

  // Title: continuous acceleration — never pops because never fully stops
  const titleY = useTransform(
    smoothProgress,
    [0, 0.68, 0.76, 0.85, 1.0],
    ["4%", "0%", "-28%", "-80%", "-210%"]
  );

  return (
    <section ref={sectionRef} className="relative bg-dark">
      {/* Black overlay — slides up */}
      <motion.div
        className="fixed inset-0 bg-dark z-10 pointer-events-none"
        style={{ y: overlayY }}
      />

      {/* Title — fixed, scrolls with content after it appears */}
      <motion.div
        className="fixed top-[8vh] md:top-[12vh] left-0 right-0 z-20 pointer-events-none px-6 md:px-8 lg:px-12"
        style={{ y: titleY }}
      >
        <div className="flex flex-col items-center">
          <div className="inline-block mx-auto">
            <motion.h1
              style={{ color: titleColor }}
              initial={{ opacity: 0, y: 12 }}
              animate={entered ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[1.02] text-center"
            >
              {siteConfig.titleZh}
            </motion.h1>
            <motion.p
              style={{ color: ctaColor }}
              initial={{ opacity: 0, y: 10 }}
              animate={entered ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-5 md:mt-7 text-xs sm:text-sm md:text-base font-medium tracking-[1em] md:tracking-[1.4em]"
            >
              持续在商业视觉之外，探索工具、系统与更有效的解决方式。
            </motion.p>
          </div>
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
        className="relative z-0 pt-[70vh] pb-0 px-6 md:px-8 lg:px-12 bg-background"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Summary */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-light font-medium mb-3">
              视觉设计师&nbsp;&nbsp;·&nbsp;&nbsp;品牌设计&nbsp;&nbsp;·&nbsp;&nbsp;IP设计&nbsp;&nbsp;·&nbsp;&nbsp;AI Workflow&nbsp;&nbsp;·&nbsp;&nbsp;增长设计
            </p>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              拥有多年互联网、大厂及教育医疗行业设计经验，覆盖品牌视觉、IP设计、运营增长、课程营销、设计系统、AI工作流搭建等方向。具备从创意策划、视觉落地到规范搭建及效率优化的完整能力，擅长通过设计提升品牌传播与业务增长。
            </p>
          </div>

          <div className="mt-20 relative">
            {/* Decorative English title */}
            <div
              className={`hidden lg:block absolute right-0 bottom-0 pointer-events-none transition-opacity duration-500 ${
                hoveredExp !== null ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="flex flex-col items-end gap-1 select-none">
                <span className="text-[10rem] xl:text-[12rem] font-bold leading-[0.7] tracking-tighter text-muted-light/6">
                  WORK
                </span>
                <span className="text-[7.5rem] xl:text-[9rem] font-bold leading-[0.75] tracking-wide text-muted-light/5">
                  EXPERIENCE
                </span>
              </div>
              <div className="absolute inset-0 overflow-hidden blur-md">
                <div
                  className="absolute inset-0 animate-shimmer"
                  style={{
                    background: "linear-gradient(105deg, transparent 30%, rgba(37,99,235,0.05) 50%, transparent 70%)",
                    backgroundSize: "200% 100%",
                  }}
                />
              </div>
            </div>

            <div className="text-left max-w-[720px]">
              <div className="mb-10">
                <span className="text-xs tracking-[0.2em] uppercase text-muted-light font-medium">
                  工作经历
                </span>
              </div>
              <div className="relative">
                <div className="absolute left-[8px] top-2 bottom-2 w-px bg-border-light hidden sm:block" />
                <div className="space-y-5">
                {aboutData.experience.map((exp, i) => (
                  <div
                    key={i}
                    className="flex gap-5 group cursor-default"
                    onMouseEnter={() => setHoveredExp(i)}
                    onMouseLeave={() => setHoveredExp(null)}
                  >
                    <div className="relative shrink-0 mt-1.5 hidden sm:block">
                      <span
                        className={`block w-[17px] h-[17px] rounded-full border-2 transition-colors duration-300 ${
                          i === 0 || hoveredExp === i
                            ? "bg-accent border-accent"
                            : "bg-white border-border"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span className="text-lg font-medium text-foreground">
                          {exp.company}
                        </span>
                        <span className="text-base text-muted-light">
                          {exp.role}
                        </span>
                      </div>
                      <span className="block text-sm text-muted-light font-mono mt-0.5">
                        {exp.period}
                      </span>
                      <span className="block text-sm text-muted-light mt-1">
                        {exp.tags}
                      </span>

                      <AnimatePresence>
                        {hoveredExp === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pl-0 pb-2">
                              <p className="text-sm tracking-[0.15em] text-muted-light font-medium mb-2">
                                工作内容
                              </p>
                              <ul className="space-y-1.5">
                                {exp.detail.map((item, j) => (
                                  <li
                                    key={j}
                                    className="text-base text-muted leading-relaxed flex gap-2"
                                  >
                                    <span className="text-muted-light shrink-0">·</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                              <p className="text-sm tracking-[0.15em] text-muted-light font-medium mt-5 mb-2">
                                项目成果
                              </p>
                              <ul className="space-y-1.5">
                                {exp.achievements.map((item, j) => (
                                  <li
                                    key={j}
                                    className="text-base text-muted leading-relaxed"
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}
