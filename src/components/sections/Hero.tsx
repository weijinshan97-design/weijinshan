"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { siteConfig } from "@/data/site";
import { About } from "@/components/sections/About";
import { ParticleField } from "@/components/ui/ParticleField";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
  const overlayY = useTransform(smoothProgress, [0, 0.30], ["0%", "-100%"]);

  // Bottom text fades out
  const bottomOpacity = useTransform(smoothProgress, [0, 0.05, 0.15, 1], [1, 1, 0, 0]);

  // Title color: white → black
  const titleColor = useTransform(
    smoothProgress,
    [0.05, 0.20],
    ["rgb(255,255,255)", "rgb(10,10,10)"]
  );

  const ctaColor = useTransform(
    smoothProgress,
    [0.05, 0.20],
    ["rgba(255,255,255,0.48)", "rgb(113,113,122)"]
  );

  // Title slides up with black overlay and disappears together
  const titleY = useTransform(smoothProgress, [0, 0.30], ["0vh", "-30vh"]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.25, 0.30], [1, 1, 0]);

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
      <About />
    </section>
  );
}
