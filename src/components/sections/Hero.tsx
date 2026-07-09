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
      className="relative min-h-[700px] overflow-hidden bg-[#000000] text-white sm:min-h-[860px] md:min-h-[960px]"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: Math.max(0.22, 0.52 - scatter * 0.28) }}
      >
        <ParticleField scatter={scatter} />
      </div>

      {/* ---- 流体渐变背景 ---- */}
      <motion.div
        animate={{
          x: [0, 80, -40, 30, 0],
          y: [0, -60, 30, -20, 0],
          scale: [1, 1.08, 0.95, 1.05, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-[15%] top-[-10%] h-[70%] w-[60%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.16),rgba(95,59,255,0.08)_40%,transparent_70%)] blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -90, 50, -30, 0],
          y: [0, 40, -50, 60, 0],
          scale: [1, 0.94, 1.06, 0.97, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[-12%] top-[5%] h-[65%] w-[55%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.14),rgba(79,70,229,0.06)_45%,transparent_75%)] blur-[110px]"
      />
      <motion.div
        animate={{
          x: [0, 50, -70, 40, 0],
          y: [0, 80, -40, -50, 0],
          scale: [1, 1.06, 0.93, 1.04, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[25%] top-[40%] h-[50%] w-[50%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(191,142,255,0.10),rgba(124,58,237,0.05)_50%,transparent_80%)] blur-[90px]"
      />

      {/* ---- 网格纹理 ---- */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:80px_80px]" />

      {/* ---- 噪点纹理 ---- */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '200px 200px' }} />

      {/* ---- 底部渐变收束 ---- */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-b from-transparent via-[#000000]/70 to-[#000000]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-20 pt-14 md:px-10 lg:px-14">
        <div className="relative flex min-h-[600px] flex-col items-center pt-8 sm:min-h-[760px] sm:pt-12 md:pt-14">
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

          <div className="relative -mt-20 h-[460px] w-full max-w-[1120px] sm:-mt-24 sm:h-[580px] md:-mt-36 md:h-[690px]">
            <div className="pointer-events-none absolute left-1/2 top-[48%] h-[420px] w-[1020px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(191,142,255,0.12),rgba(95,59,255,0.08)_34%,transparent_72%)] blur-[64px]" />

            <motion.div
              initial={{ opacity: 0, y: 70, rotateX: 16, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              transition={{ duration: 1.05, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
              className="animate-hero-stage relative mx-auto h-full max-w-[1040px]"
            >
              <div className="animate-light-sweep absolute left-1/2 top-[58%] h-[180px] w-[92vw] max-w-[820px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[28px] border border-white/[0.12] bg-[#0a0a10]/72 shadow-[0_46px_170px_rgba(0,0,0,0.58)] backdrop-blur-xl sm:h-[260px] sm:rounded-[42px] md:h-[300px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(191,142,255,0.14),transparent_34%),radial-gradient(circle_at_86%_86%,rgba(128,83,255,0.24),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))]" />
                <div className="absolute left-4 top-4 flex items-center gap-1.5 sm:left-7 sm:top-7 sm:gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5" />
                  <span className="h-2 w-2 rounded-full bg-[#ffbd2e] sm:h-2.5 sm:w-2.5" />
                  <span className="h-2 w-2 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5" />
                </div>
                <div className="absolute bottom-4 left-4 h-px w-[72%] bg-gradient-to-r from-white/20 via-[#bf8eff]/28 to-transparent sm:bottom-7 sm:left-7" />
                <div className="absolute bottom-[22px] right-5 font-mono text-[8px] uppercase tracking-[0.2em] text-white/28 sm:bottom-11 sm:right-8 sm:text-[10px] sm:tracking-[0.24em]">
                  Idea / Agent / Launch / Case
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 60, rotate: -4, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-1/2 top-[42%] z-10 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 sm:h-[480px] sm:w-[480px] md:left-[54%] md:h-[750px] md:w-[750px]"
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
                "left-[1%] top-[12%] sm:left-[3%] sm:top-[10%]",
                "right-[2%] top-[22%] sm:right-[5%] sm:top-[17%]",
                "left-[4%] bottom-[24%] sm:left-[8%] sm:bottom-[16%]",
                "right-[3%] bottom-[12%] sm:right-[10%] sm:bottom-[8%]",
              ];

              return (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, y: 18, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.72 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`animate-float-tag absolute rounded-full border border-white/[0.12] bg-white/[0.07] px-2.5 py-1 text-[9px] font-mono uppercase tracking-[0.16em] text-white/45 shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:px-3 sm:py-1.5 sm:text-[10px] sm:tracking-[0.2em] sm:text-white/50 md:px-4 md:py-2 md:text-[11px] md:tracking-[0.22em] md:text-white/62 ${positions[index]}`}
                  style={{ animationDelay: `${index * 0.7}s` }}
                >
                  {label}
                </motion.span>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-2 text-center text-base tracking-wider text-white/45 sm:mt-6 sm:text-lg md:text-xl"
            style={{ opacity: fadeOpacity }}
          >
            UI/UX + 视觉设计师 &mdash; 用 AI 把想法变成可运行的产品
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 grid w-full gap-3 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 sm:mt-6 sm:gap-5 sm:pt-6 sm:text-[11px] sm:tracking-[0.23em] md:grid-cols-[1fr_auto_1fr]"
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

        {/* ---- 滚动指示器 ---- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ opacity: fadeOpacity }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/18">
              Scroll
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-white/20"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
