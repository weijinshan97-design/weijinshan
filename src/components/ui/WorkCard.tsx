"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Work } from "@/lib/types";

interface WorkCardProps {
  work: Work;
  aspect?: "square" | "landscape" | "wide";
}

const aspectMap = {
  square: "aspect-[5/4]",
  landscape: "aspect-[16/10]",
  wide: "aspect-[21/9]",
};

const sizesMap = {
  square: "(max-width: 768px) 100vw, 50vw",
  landscape: "(max-width: 768px) 100vw, 50vw",
  wide: "(max-width: 768px) 100vw, 100vw",
};

export function WorkCard({ work, aspect = "landscape" }: WorkCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <Link
      href={`/work/${work.slug}`}
      className="group block"
    >
      <div
        ref={ref}
        className={`relative overflow-hidden rounded-xl bg-surface ${aspectMap[aspect]}`}
      >
        <motion.div
          className="absolute inset-0"
          style={{ y: imageY }}
        >
          <Image
            src={work.cover}
            alt={work.titleZh}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes={sizesMap[aspect]}
          />
        </motion.div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          {work.titleZh}
          <span className="text-sm font-normal text-muted-light ml-2">
            {work.titleEn}
          </span>
        </h3>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {work.tagsZh.map((tag) => (
            <span
              key={tag}
              className="inline-block text-[11px] text-muted-light"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
