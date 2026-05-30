"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/data/site";
import { ParticleField } from "@/components/ui/ParticleField";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [entered, setEntered] = useState(false);
  const [scatter, setScatter] = useState(0);

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
    offset: ["start start", "end start"],
  });

  // Convert scroll to scatter - bidirectional
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const scatterValue = Math.min(1, v / 0.6);
      setScatter(scatterValue);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  // Click handler - smooth scroll down, scatter follows scroll
  const handleClick = useCallback(() => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: "smooth",
    });
  }, []);

  // Title fades out based on scatter
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.3, 0.6], ["0px", "0px", "-40px"]);

  // CTA text fades out
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);

  // Scroll hint fades out faster
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);

  // Background color transitions from dark to light
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#0a0a0a", "#0a0a0a", "var(--color-background)"]
  );

  // Glow opacity fades out
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen overflow-hidden cursor-pointer"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {/* Particle field with scatter */}
      <div className="absolute inset-0 pointer-events-none">
        <ParticleField scatter={scatter} />
      </div>

      {/* Glow effects - fade out on scatter */}
      <motion.div className="absolute inset-0" style={{ opacity: glowOpacity }}>
        <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-[radial-gradient(ellipse_at_50%_80%,rgba(64,53,225,0.18)_0%,rgba(43,106,219,0.08)_35%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-[radial-gradient(ellipse_at_50%_100%,rgba(64,53,225,0.12)_0%,transparent_60%)]" />
      </motion.div>

      {/* Title — fades out on scatter */}
      <motion.div
        className="absolute top-[16vh] md:top-[14vh] left-0 right-0 px-6 md:px-8 lg:px-12 pointer-events-none"
        style={{ opacity: titleOpacity, y: titleY }}
      >
        <div className="flex flex-col items-center">
          <div className="inline-block mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={entered ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="whitespace-nowrap text-center font-serif text-[clamp(1.6rem,8.2vw,8.25rem)] font-bold leading-[1.02] tracking-normal text-white"
            >
              {siteConfig.titleZh}
            </motion.h1>
          </div>
          <motion.p
            style={{ opacity: ctaOpacity }}
            initial={{ opacity: 0, y: 10 }}
            animate={entered ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto mt-4 md:mt-7 w-full max-w-[min(92vw,760px)] text-center text-[11px] sm:text-sm md:text-base font-normal tracking-[0.2em] md:tracking-[0.32em] leading-6 md:leading-8 text-white/48"
          >
            持续在商业视觉之外，探索工具、系统与更有效的解决方式。
          </motion.p>
        </div>
      </motion.div>

      {/* Bottom scroll hint — fades out faster */}
      <motion.div
        style={{ opacity: scrollOpacity }}
        className="absolute bottom-10 md:bottom-16 left-0 right-0 px-6 md:px-8 lg:px-12 flex flex-col items-center gap-6 pointer-events-none"
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
    </motion.section>
  );
}
