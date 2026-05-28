"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="mb-16 md:mb-20">
      <div className="flex items-center gap-4 mb-4">
        <motion.span
          className="h-px bg-border"
          initial={{ width: 0 }}
          animate={inView ? { width: 32 } : { width: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        />
        <motion.span
          className="text-xs tracking-[0.16em] uppercase text-muted font-medium"
          initial={{ opacity: 0, x: -8 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          {label}
        </motion.span>
      </div>
      <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted max-w-xl leading-7">
          {description}
        </p>
      )}
    </div>
  );
}
