"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const chars = ["魏", "晋", "山"];

export function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Prevent browser from restoring scroll position
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    setVisible(true);
  }, []);

  // Stagger: each char appears 0.25s apart, then small text at step 3
  useEffect(() => {
    if (!visible) return;
    const timers: NodeJS.Timeout[] = [];
    timers.push(setTimeout(() => setStep(1), 400));
    timers.push(setTimeout(() => setStep(2), 650));
    timers.push(setTimeout(() => setStep(3), 900));
    timers.push(setTimeout(() => setStep(4), 1400));
    return () => timers.forEach(clearTimeout);
  }, [visible]);

  const dismiss = useCallback(() => {
    window.scrollTo(0, 0);
    window.dispatchEvent(new Event("loading-dismissed"));
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible || step < 4) return;
    const timer = setTimeout(dismiss, 6000);
    return () => clearTimeout(timer);
  }, [visible, step, dismiss]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          onClick={dismiss}
          className="fixed inset-0 z-[100] bg-dark flex items-center justify-center cursor-pointer"
        >
          <div className="text-center px-6">
            {/* Three chars slide up from below, one by one */}
            <h1 className="flex items-center justify-center gap-1 text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-white">
              {chars.map((char, i) => (
                <motion.span
                  key={char}
                  initial={{ y: 48, opacity: 0 }}
                  animate={
                    step > i
                      ? { y: 0, opacity: 1 }
                      : { y: 48, opacity: 0 }
                  }
                  transition={{
                    duration: 0.55,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            {/* Small text fades in after chars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={step >= 4 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <p className="mt-4 text-[11px] md:text-xs tracking-[0.4em] text-white/25 font-medium">
                Selected Work · Systems · Thinking
              </p>
              <div className="mt-10 space-y-1.5">
                <p className="text-sm md:text-base text-white/45 tracking-wide">
                  一些项目，
                </p>
                <p className="text-sm md:text-base text-white/45 tracking-wide">
                  一些思考，
                </p>
                <p className="text-sm md:text-base text-white/45 tracking-wide">
                  以及仍在探索的东西
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
