"use client";

import { useEffect, useRef } from "react";

export function AmbientInteractions() {
  const glowRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    let raf = 0;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
      }
    };

    const updateGlow = () => {
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX - 220}px, ${currentY - 220}px, 0)`;
      }
      raf = window.requestAnimationFrame(updateGlow);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    if (!reduceMotion && finePointer) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
      raf = window.requestAnimationFrame(updateGlow);
    }

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress-line" ref={progressRef} aria-hidden="true" />
      <div className="ambient-cursor-glow" ref={glowRef} aria-hidden="true" />
    </>
  );
}
