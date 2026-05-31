"use client";

import { useRef, useEffect, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
}

interface ParticleFieldProps {
  scatter?: number;
}

export function ParticleField({ scatter = 0 }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const prefersReducedMotion = useRef(false);
  const scatterRef = useRef(scatter);

  scatterRef.current = scatter;

  const initParticles = useCallback((width: number, height: number) => {
    const gap = 14;
    const cols = Math.ceil(width / gap) + 1;
    const rows = Math.ceil(height / gap) + 1;
    const particles: Particle[] = [];

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * gap;
        const y = j * gap;
        particles.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: 0,
          vy: 0,
        });
      }
    }

    return particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = motionQuery.matches;
    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
    };
    motionQuery.addEventListener("change", handleMotionChange);

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      particlesRef.current = initParticles(window.innerWidth, window.innerHeight);
    };

    resize();
    window.addEventListener("resize", resize);

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    // Touch events
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    const animate = () => {
      if (!ctx || prefersReducedMotion.current) {
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));

      const mouse = mouseRef.current;
      const repelRadius = 120;
      const repelStrength = 8;
      const returnStrength = 0.08;
      const damping = 0.85;
      const currentScatter = scatterRef.current;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      for (const p of particlesRef.current) {
        if (currentScatter > 0) {
          // Scatter mode
          const dx = p.x - centerX;
          const dy = p.y - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;

          const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.5;
          const scatterForce = currentScatter * 25;

          p.vx += Math.cos(angle) * scatterForce * 0.5;
          p.vy += Math.sin(angle) * scatterForce * 0.5;
          p.vx += (dx / dist) * scatterForce * 0.3;
          p.vy += (dy / dist) * scatterForce * 0.3;

          const weakReturn = returnStrength * (1 - currentScatter * 0.95);
          p.vx += (p.originX - p.x) * weakReturn;
          p.vy += (p.originY - p.y) * weakReturn;
        } else {
          // Normal mode: mouse repel + return to origin
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < repelRadius && dist > 0) {
            const force = (repelRadius - dist) / repelRadius;
            p.vx += (dx / dist) * force * repelStrength;
            p.vy += (dy / dist) * force * repelStrength;
          }

          p.vx += (p.originX - p.x) * returnStrength;
          p.vy += (p.originY - p.y) * returnStrength;
        }

        const currentDamping = currentScatter > 0 ? 0.92 : damping;
        p.vx *= currentDamping;
        p.vy *= currentDamping;
        p.x += p.vx;
        p.y += p.vy;

        const displacement = Math.sqrt(
          (p.x - p.originX) ** 2 + (p.y - p.originY) ** 2
        );
        const alpha = Math.min(0.35, 0.12 + displacement * 0.003);

        // Glow effect near mouse
        let finalAlpha = alpha;
        const distToMouse = Math.sqrt((p.x - mouse.x) ** 2 + (p.y - mouse.y) ** 2);
        if (distToMouse < 100 && currentScatter === 0) {
          finalAlpha = Math.min(0.5, alpha + (1 - distToMouse / 100) * 0.3);
        }

        // Fade during scatter
        const scatterAlpha = Math.max(0, 1 - currentScatter * 1.2);

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${finalAlpha * scatterAlpha})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      motionQuery.removeEventListener("change", handleMotionChange);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ opacity: 0.6 }}
    />
  );
}
