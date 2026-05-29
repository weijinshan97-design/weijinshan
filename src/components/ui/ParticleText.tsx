"use client";

import { useRef, useEffect, useState, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

interface ParticleTextProps {
  texts: { company: string; period: string; role: string }[];
  isVisible: boolean;
}

export function ParticleText({ texts, isVisible }: ParticleTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const createParticlesFromText = useCallback((
    ctx: CanvasRenderingContext2D,
    text: string,
    width: number,
    height: number,
    fontSize: number,
    yOffset: number
  ): { x: number; y: number }[] => {
    const positions: { x: number; y: number }[] = [];
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d")!;
    tempCanvas.width = width;
    tempCanvas.height = height;

    tempCtx.fillStyle = "white";
    tempCtx.font = `bold ${fontSize}px Inter, sans-serif`;
    tempCtx.textAlign = "center";
    tempCtx.textBaseline = "middle";
    tempCtx.fillText(text, width / 2, yOffset);

    const imageData = tempCtx.getImageData(0, 0, width, height);
    const data = imageData.data;
    const gap = 4;

    for (let y = 0; y < height; y += gap) {
      for (let x = 0; x < width; x += gap) {
        const i = (y * width + x) * 4;
        if (data[i + 3] > 128) {
          positions.push({ x, y });
        }
      }
    }

    return positions;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      if (!ctx || !canvas) return;

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      if (!isVisible) {
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const text = texts[currentIndex];
      if (!text) {
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      // Generate target positions from text
      const companyPositions = createParticlesFromText(
        ctx,
        text.company,
        rect.width,
        rect.height * 0.4,
        Math.min(48, rect.width * 0.06),
        rect.height * 0.25
      );

      const periodPositions = createParticlesFromText(
        ctx,
        text.period,
        rect.width,
        rect.height * 0.3,
        Math.min(24, rect.width * 0.03),
        rect.height * 0.55
      );

      const rolePositions = createParticlesFromText(
        ctx,
        text.role,
        rect.width,
        rect.height * 0.3,
        Math.min(20, rect.width * 0.025),
        rect.height * 0.75
      );

      const allPositions = [...companyPositions, ...periodPositions, ...rolePositions];

      // Initialize or update particles
      if (particlesRef.current.length !== allPositions.length) {
        particlesRef.current = allPositions.map((pos) => ({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          targetX: pos.x,
          targetY: pos.y,
          vx: 0,
          vy: 0,
          size: Math.random() * 1.5 + 0.5,
          alpha: 0,
          color: `hsl(${230 + Math.random() * 30}, 70%, ${60 + Math.random() * 20}%)`,
        }));
      } else {
        particlesRef.current.forEach((p, i) => {
          if (i < allPositions.length) {
            p.targetX = allPositions[i].x;
            p.targetY = allPositions[i].y;
          }
        });
      }

      // Animate particles toward targets
      particlesRef.current.forEach((p) => {
        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 1) {
          p.vx += dx * 0.05;
          p.vy += dy * 0.05;
        }

        p.vx *= 0.92;
        p.vy *= 0.92;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha = Math.min(1, p.alpha + 0.02);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * 0.8;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [isVisible, currentIndex, texts, createParticlesFromText]);

  // Auto-rotate through experiences
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      // Reset particles for new text
      particlesRef.current = [];
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, texts.length]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.5s" }}
    />
  );
}
