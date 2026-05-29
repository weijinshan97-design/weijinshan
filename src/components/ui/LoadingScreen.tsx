"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

function PrismLight() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-[50%] h-[48vh] w-[92vw] max-w-[980px] -translate-x-1/2 -translate-y-1/2 md:top-[52%]"
    >
      <motion.div
        className="absolute inset-0 mix-blend-screen"
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{
          opacity: [0.74, 1, 0.84],
          scale: [0.96, 1.05, 1],
        }}
        transition={{
          duration: 5.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <div
          className="absolute left-[8%] top-[32%] h-[34%] w-[72%] rounded-full blur-[34px]"
          style={{
            transform: "skewX(-22deg) rotate(-8deg)",
            background:
              "linear-gradient(100deg, rgba(64,53,225,0.86), rgba(43,106,219,0.74) 26%, rgba(44,224,255,0.74) 50%, rgba(255,242,138,0.82) 72%, rgba(255,82,47,0.52) 100%)",
          }}
        />
        <div
          className="absolute left-[25%] top-[24%] h-[44%] w-[58%] rounded-full blur-[46px]"
          style={{
            transform: "rotate(-8deg)",
            background:
              "radial-gradient(ellipse at 70% 58%, rgba(255,255,230,0.9) 0%, rgba(255,214,66,0.8) 15%, rgba(43,222,255,0.58) 34%, rgba(64,53,225,0.44) 58%, rgba(0,0,0,0) 78%)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute left-[13%] top-[38%] h-[24%] w-[60%] rounded-full mix-blend-screen blur-[22px]"
        initial={{ opacity: 0, x: -36 }}
        animate={{ opacity: [0.74, 0.98, 0.82], x: [-14, 18, -6] }}
        transition={{
          duration: 4.6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            transform: "skewX(-20deg) rotate(-9deg)",
            background:
              "linear-gradient(100deg, rgba(64,53,225,0.9), rgba(39,218,255,0.86) 46%, rgba(255,244,122,0.5) 72%, rgba(0,0,0,0) 100%)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute left-[42%] top-[42%] h-[17%] w-[34%] rounded-full mix-blend-screen blur-[14px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0.78, 1, 0.88], scale: [0.96, 1.12, 1] }}
        transition={{
          duration: 3.4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{
          background:
            "radial-gradient(ellipse at 68% 56%, rgba(255,255,220,0.98) 0%, rgba(255,210,61,0.92) 22%, rgba(36,224,255,0.7) 48%, rgba(0,0,0,0) 76%)",
        }}
      />

      <motion.div
        className="absolute left-[43%] top-[55%] h-[11%] w-[38%] rounded-full mix-blend-screen blur-[18px]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: [0.62, 0.94, 0.7], y: [6, -4, 4] }}
        transition={{
          duration: 4.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{
          transform: "skewX(-16deg) rotate(-3deg)",
          background:
            "linear-gradient(90deg, rgba(255,55,38,0.82), rgba(255,130,40,0.82), rgba(255,236,90,0.72), rgba(0,0,0,0))",
        }}
      />

      <motion.div
        className="absolute left-[61%] top-[31%] h-[36%] w-[20%] rounded-full mix-blend-screen blur-[30px]"
        initial={{ opacity: 0, scale: 0.72 }}
        animate={{ opacity: [0.38, 0.76, 0.48], scale: [0.92, 1.18, 1] }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,67,139,0.86), rgba(75,224,130,0.28) 42%, rgba(0,0,0,0) 74%)",
        }}
      />

    </div>
  );
}

export function LoadingScreen() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [step, setStep] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const shouldShow = mounted && pathname === "/" && !prefersReducedMotion;

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener("change", handler);

    const timer = window.setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => {
      window.clearTimeout(timer);
      motionQuery.removeEventListener("change", handler);
    };
  }, []);

  useEffect(() => {
    if (!shouldShow) return;
    // Prevent browser from restoring scroll position
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, [shouldShow]);

  useEffect(() => {
    if (!shouldShow || !visible) return;
    const timers: NodeJS.Timeout[] = [];
    [180, 340, 520, 740, 980, 1240, 1520].forEach((delay, i) => {
      timers.push(setTimeout(() => setStep(i + 1), delay));
    });
    return () => timers.forEach(clearTimeout);
  }, [shouldShow, visible]);

  const dismiss = useCallback(() => {
    window.scrollTo(0, 0);
    setVisible(false);
    window.setTimeout(() => {
      window.dispatchEvent(new Event("loading-dismissed"));
    }, 420);
  }, []);

  useEffect(() => {
    if (!shouldShow || !visible || step < 7) return;
    const timer = setTimeout(dismiss, 2100);
    return () => clearTimeout(timer);
  }, [shouldShow, visible, step, dismiss]);

  if (!shouldShow) return null;

  const progress = String(step).padStart(2, "0");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          onClick={dismiss}
          className="fixed inset-0 z-[100] cursor-pointer overflow-hidden bg-[#030305] text-white"
        >
          <PrismLight />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),rgba(0,0,0,0.08)_48%,rgba(0,0,0,0.68))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_34%,rgba(0,0,0,0.66)_78%)]" />

          <div className="relative z-10 flex min-h-full flex-col px-7 py-8 md:px-12 md:py-10">
            <div className="flex items-start justify-between text-xs font-semibold uppercase tracking-[0.18em] text-white/78">
              <span className="font-mono text-base tracking-normal text-white">
                {progress} / 07
              </span>
              <span>PORTFOLIO 2026</span>
            </div>

            <div className="flex flex-1 items-center justify-center">
              <div className="w-full max-w-[920px] text-center">
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={step >= 2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-sm font-medium tracking-[0.24em] text-white/78 drop-shadow-[0_10px_28px_rgba(0,0,0,0.9)] md:text-base"
                >
                  - 产品设计 / AI 应用 / 系统体验 -
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  animate={
                    step >= 3
                      ? { opacity: 1, y: 0, filter: "blur(0px)" }
                      : {}
                  }
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 font-serif text-6xl font-semibold leading-none tracking-normal drop-shadow-[0_18px_48px_rgba(0,0,0,0.92)] sm:text-7xl md:text-9xl lg:text-[9.5rem]"
                >
                  魏晋山
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={step >= 4 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/84 drop-shadow-[0_10px_28px_rgba(0,0,0,0.86)] md:text-base"
                >
                  Product Design Portfolio
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={step >= 5 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/68 md:text-lg"
                >
                  从视觉，走向更多可能
                </motion.p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={step >= 6 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="flex items-end justify-between gap-6 text-[11px] uppercase tracking-[0.18em] text-white/45"
            >
              <div className="space-y-1">
                <p>Selected Work</p>
                <p>Systems / Automation</p>
              </div>
              <p className="hidden sm:block">Portfolio Boot Sequence</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
