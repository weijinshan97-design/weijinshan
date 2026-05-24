"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Work } from "@/lib/types";

interface WorkCardProps {
  work: Work;
  variant?: "hero" | "default";
}

function ParallaxImage({
  src,
  alt,
  sizes,
  targetRef,
  className,
}: {
  src: string;
  alt: string;
  sizes: string;
  targetRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
}) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  return (
    <motion.div className="absolute inset-0" style={{ y }}>
      <Image src={src} alt={alt} fill className={className} sizes={sizes} />
    </motion.div>
  );
}

export function WorkCard({ work, variant = "default" }: WorkCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  if (variant === "hero") {
    return (
      <Link href={`/work/${work.slug}`} className="group block">
        <div
          ref={ref}
          className="relative overflow-hidden rounded-2xl aspect-[16/8] md:aspect-[21/9] bg-dark-surface"
        >
          <ParallaxImage
            src={work.cover}
            alt={work.titleZh}
            sizes="100vw"
            targetRef={ref}
            className="object-cover transition-all duration-900 ease-out group-hover:scale-[1.02] group-hover:saturate-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/15 to-dark/5" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {work.tagsZh.map((tag) => (
                <span
                  key={tag}
                  className="inline-block text-[11px] text-white/45 tracking-wide border border-white/10 rounded-full px-2.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-white tracking-tight leading-[1.08] group-hover:text-white/85 transition-colors">
              {work.titleZh}
            </h3>
            <p className="mt-3 text-sm md:text-base text-white/35 max-w-2xl leading-relaxed">
              {work.summaryZh}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/work/${work.slug}`} className="group block">
      <div
        ref={ref}
        className="relative overflow-hidden rounded-xl aspect-[5/4] bg-surface ring-1 ring-white/40 group-hover:ring-accent/15 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-accent/[0.04]"
      >
        <ParallaxImage
          src={work.cover}
          alt={work.titleZh}
          sizes="(max-width: 768px) 100vw, 50vw"
          targetRef={ref}
          className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:saturate-[0.2]"
        />
        <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/15 transition-colors duration-500" />
        {/* Hover overlay info */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
          <span className="text-[10px] text-white/50 font-mono tracking-wider">
            {work.year}
          </span>
          <p className="mt-1.5 text-sm text-white/70 leading-relaxed line-clamp-2">
            {work.summaryZh}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[9px] tracking-[0.15em] text-muted-light/40 font-mono uppercase">
            {work.category}
          </span>
        </div>
        <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
          {work.titleZh}
        </h3>
        <p className="text-sm text-muted-light mt-1">{work.client}</p>
      </div>
    </Link>
  );
}
