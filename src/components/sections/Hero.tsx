"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { animate, motion, useMotionValue, useScroll } from "framer-motion";
import { worksData } from "@/data/works";
import { ParticleField } from "@/components/ui/ParticleField";

const stageLabels = ["Idea", "Agent Build", "Live Site", "Case Story"];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scatter, setScatter] = useState(0);
  const scatterProgress = useMotionValue(0);
  const featuredWorks = useMemo(() => worksData.slice(0, 4), []);

  useEffect(() => {
    const unsubscribe = scatterProgress.on("change", (v) => setScatter(v));
    return unsubscribe;
  }, [scatterProgress]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      scatterProgress.set(Math.min(1, v / 0.28));
    });
    return unsubscribe;
  }, [scrollYProgress, scatterProgress]);

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleExplore = useCallback(() => {
    animate(scatterProgress, 1, { duration: 0.7, ease: "easeOut" });
    window.setTimeout(() => scrollToSection("work"), 180);
  }, [scatterProgress, scrollToSection]);

  const fadeOpacity = Math.max(0, 1 - scatter * 2);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[1080px] overflow-hidden bg-[#000000] text-white"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: Math.max(0.22, 0.52 - scatter * 0.28) }}
      >
        <ParticleField scatter={scatter} />
      </div>

      <div className="aurora-field pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(191,142,255,0.08),transparent_22%),radial-gradient(circle_at_22%_42%,rgba(95,59,255,0.14),transparent_30%),radial-gradient(circle_at_82%_44%,rgba(99,102,241,0.10),transparent_28%),linear-gradient(180deg,#000000_0%,#040408_48%,#000000_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.10)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="hero-beam pointer-events-none absolute left-0 top-[16%] h-[480px] w-full bg-[linear-gradient(90deg,transparent,rgba(191,142,255,0.08),rgba(99,102,241,0.06),transparent)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-b from-transparent via-[#000000]/82 to-[#000000]" />

      {/* ---- 浮动光晕球 ---- */}
      <motion.div
        animate={{ x: [0, 60, -30, 20, 0], y: [0, -40, 20, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-[10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(191,142,255,0.12),transparent_70%)] blur-[80px]"
      />
      <motion.div
        animate={{ x: [0, -80, 40, -20, 0], y: [0, 50, -30, -60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[-10%] top-[30%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_70%)] blur-[72px]"
      />
      <motion.div
        animate={{ x: [0, 30, -60, 40, 0], y: [0, -70, 10, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[20%] top-[55%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.09),transparent_70%)] blur-[64px]"
      />
      <motion.div
        animate={{ x: [0, 50, -20, -40, 0], y: [0, -20, 60, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[15%] top-[65%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(191,142,255,0.08),transparent_70%)] blur-[56px]"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-20 pt-24 md:px-10 lg:px-14">
        <div className="relative flex min-h-[900px] flex-col items-center pt-20 md:pt-24">
          <motion.h1
            initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="kinetic-title display-balance relative z-0 max-w-[1120px] text-center font-serif text-[clamp(4.8rem,9.4vw,9.8rem)] font-bold leading-[1.12] tracking-normal"
            style={{ opacity: fadeOpacity }}
          >
            IDEA TO
            <br />
            LIVE SYSTEM
          </motion.h1>

          <div className="relative -mt-28 h-[690px] w-full max-w-[1120px] md:-mt-36">
            <div className="pointer-events-none absolute left-1/2 top-[48%] h-[420px] w-[1020px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(191,142,255,0.12),rgba(95,59,255,0.08)_34%,transparent_72%)] blur-[64px]" />

            <motion.div
              initial={{ opacity: 0, y: 70, rotateX: 16, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              transition={{ duration: 1.05, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
              className="animate-hero-stage relative mx-auto h-full max-w-[1040px]"
            >
              <div className="animate-light-sweep absolute left-1/2 top-[58%] h-[300px] w-[820px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[42px] border border-white/[0.12] bg-[#0a0a10]/72 shadow-[0_46px_170px_rgba(0,0,0,0.58)] backdrop-blur-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(191,142,255,0.14),transparent_34%),radial-gradient(circle_at_86%_86%,rgba(128,83,255,0.24),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))]" />
                <div className="absolute left-7 top-7 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="absolute bottom-7 left-7 h-px w-[72%] bg-gradient-to-r from-white/20 via-[#bf8eff]/28 to-transparent" />
                <div className="absolute bottom-11 right-8 font-mono text-[10px] uppercase tracking-[0.24em] text-white/28">
                  Idea / Agent / Launch / Case
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 60, rotate: -4, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-1/2 top-[42%] z-10 h-[690px] w-[690px] -translate-x-1/2 -translate-y-1/2 md:left-[54%] md:h-[750px] md:w-[750px]"
              >
                <Image
                  src="/images/works/home-puzzle-character-v2.png"
                  alt="拿着拼图的 3D 角色"
                  fill
                  priority
                  sizes="720px"
                  className="object-contain drop-shadow-[0_42px_100px_rgba(76,66,255,0.32)]"
                />
              </motion.div>

              <div className="pointer-events-none absolute left-[5%] top-[50%] z-20 hidden w-[300px] -translate-y-1/2 rounded-[28px] border border-white/[0.12] bg-black/40 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl md:block">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#bf8eff]/62">
                  Build the system
                </p>
                <p className="mt-4 text-sm leading-7 text-white/50">
                  把设计、代码、内容整理和案例叙事拼成一个持续更新的作品系统。
                </p>
              </div>
            </motion.div>

            {stageLabels.map((label, index) => {
              const positions = [
                "left-[3%] top-[10%]",
                "right-[5%] top-[17%]",
                "left-[8%] bottom-[16%]",
                "right-[10%] bottom-[8%]",
              ];

              return (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, y: 18, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.72 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`animate-float-tag absolute hidden rounded-full border border-white/[0.12] bg-white/[0.07] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white/62 shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl md:block ${positions[index]}`}
                  style={{ animationDelay: `${index * 0.7}s` }}
                >
                  {label}
                </motion.span>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 grid w-full gap-5 border-t border-white/10 pt-8 font-mono text-[11px] uppercase tracking-[0.23em] text-white/50 md:grid-cols-[1fr_auto_1fr]"
            style={{ opacity: fadeOpacity }}
          >
            <span>Selected cases / {featuredWorks.length} stories</span>
            <button
              type="button"
              onClick={handleExplore}
              className="control-breathe rounded-full border border-[#bf8eff]/30 bg-[#bf8eff]/10 px-5 py-2 text-[#bf8eff] transition hover:-translate-y-0.5 hover:border-[#bf8eff]/50 hover:bg-[#bf8eff]/20 hover:shadow-[0_0_36px_rgba(191,142,255,0.2)]"
            >
              Enter the stage
            </button>
            <span className="md:text-right">Scroll for the work</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
