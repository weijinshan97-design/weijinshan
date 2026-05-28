"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ThinkingEntry } from "@/lib/types";

interface ThinkingPreviewProps {
  entry: ThinkingEntry;
  featured?: boolean;
}

function ParallaxCard({
  children,
  targetRef,
  className,
}: {
  children: React.ReactNode;
  targetRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
}) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-3%"]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

export function ThinkingPreview({ entry, featured = false }: ThinkingPreviewProps) {
  const ref = useRef<HTMLDivElement>(null);

  if (featured) {
    return (
      <Link href={`/thinking/${entry.slug}`} className="group block">
        <div ref={ref}>
          <ParallaxCard
            targetRef={ref}
            className="relative rounded-2xl glass overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-accent/[0.05]"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              {entry.image && (
                <div className="md:w-[45%] aspect-[4/3] md:aspect-auto relative overflow-hidden shrink-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-[1.03] group-hover:saturate-[0.8]"
                    style={{ backgroundImage: `url(${entry.image})` }}
                  />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/5 transition-colors duration-500" />
                </div>
              )}
              {/* Text */}
              <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <span className="text-[10px] tracking-[0.14em] uppercase text-muted font-medium mb-3">
                  {entry.date}
                </span>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-semibold text-foreground tracking-tight leading-[1.2] group-hover:text-accent transition-colors duration-300">
                  {entry.titleZh}
                </h3>
                <p className="mt-3 text-sm md:text-base text-muted leading-7 max-w-xl">
                  {entry.summaryZh}
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm text-accent/40 group-hover:text-accent transition-colors duration-300">
                  <span>阅读全文</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          </ParallaxCard>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/thinking/${entry.slug}`}
      className="group block py-6 border-b border-border/60 last:border-b-0"
    >
      <div className="flex items-start gap-5">
        {/* Thumbnail */}
        {entry.image && (
          <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-surface relative">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105 group-hover:saturate-[0.8]"
              style={{ backgroundImage: `url(${entry.image})` }}
            />
          </div>
        )}
        {/* Content */}
        <div className="flex-1 min-w-0">
          <span className="text-[10px] tracking-[0.12em] text-muted font-mono">
            {entry.date}
          </span>
          <h3 className="mt-1.5 text-base md:text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
            {entry.titleZh}
          </h3>
          <p className="mt-1.5 text-sm text-muted leading-6 line-clamp-2">
            {entry.summaryZh}
          </p>
        </div>
      </div>
    </Link>
  );
}
