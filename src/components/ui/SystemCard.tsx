"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { SystemItem, SubPoint } from "@/lib/types";
import { MediaDisplay } from "./MediaDisplay";

interface SystemCardProps {
  system: SystemItem;
  index: number;
}

function ParallaxNumber({
  num,
  isEven,
  targetRef,
}: {
  num: string;
  isEven: boolean;
  targetRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-2%", "6%"]);

  return (
    <motion.span
      style={{ y }}
      className={`absolute -top-12 md:-top-16 text-[160px] md:text-[200px] lg:text-[240px] font-bold leading-none text-accent/[0.08] select-none pointer-events-none tabular-nums hidden md:block ${
        isEven ? "-left-8" : "-right-8 text-right"
      }`}
    >
      {num}
    </motion.span>
  );
}

function SectionConnector() {
  return (
    <div className="flex flex-col items-center gap-1.5 my-2">
      <div className="w-px h-10 bg-[#d4cec0]/40" />
      <span className="block w-2.5 h-2.5 border-r border-b border-[#d4cec0]/40 rotate-45" />
    </div>
  );
}

function SubPointItem({ point }: { point: SubPoint }) {
  return (
    <div className="flex gap-5 group/point">
      <span className="block w-5 h-px bg-accent/20 shrink-0 mt-[13px] transition-colors duration-300 group-hover/point:bg-accent/40" />
      <div className="flex-1 min-w-0">
        <h5 className="text-base font-semibold text-foreground/85 leading-snug">
          {point.title}
        </h5>
        <p className="mt-1.5 text-sm text-muted leading-relaxed">
          {point.description}
        </p>
      </div>
    </div>
  );
}

function AccordionToggle({ open }: { open: boolean }) {
  return (
    <motion.span
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
      className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-muted-light/20 text-muted-light/50 shrink-0"
    >
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.span>
  );
}

function CollapsibleSection({
  label,
  lede,
  points,
  accent,
  defaultOpen = false,
}: {
  label: string;
  lede: string;
  points?: SubPoint[];
  accent?: boolean;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border-light/20 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 py-5 text-left group/accordion"
      >
        <span
          className={`w-2.5 h-2.5 rounded-full shrink-0 ${
            accent ? "bg-accent" : "bg-foreground/10"
          }`}
        />
        <span
          className={`text-xs tracking-[0.25em] uppercase font-semibold shrink-0 ${
            accent ? "text-accent" : "text-muted"
          }`}
        >
          {label}
        </span>
        <span className="flex-1 text-sm text-muted/60 truncate min-w-0">
          {lede}
        </span>
        <AccordionToggle open={open} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-9">
              {points && points.length > 0 && (
                <div className="space-y-5">
                  {points.map((point, i) => (
                    <SubPointItem key={i} point={point} />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SystemCard({ system, index }: SystemCardProps) {
  const isEven = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);
  const isFlow = system.id === "flow-to-figma";
  const isComponentLib = system.id === "design-component-library";
  const hasSubPoints = isFlow || isComponentLib;

  return (
    <div ref={ref} className="group relative">
      <ParallaxNumber
        num={String(index + 1).padStart(2, "0")}
        isEven={isEven}
        targetRef={ref}
      />

      <div className="relative rounded-2xl glass transition-all duration-700 hover:shadow-2xl hover:shadow-accent/[0.06]">
        <div className="p-8 md:p-10 lg:p-14">
          {/* Header */}
          <div className="mb-14 lg:mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-px bg-accent/30" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-muted-light font-medium">
                {`System 0${index + 1}`}
              </span>
              {isFlow && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/8 text-accent/60 font-medium">
                  Core
                </span>
              )}
              {isComponentLib && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/8 text-accent/60 font-medium">
                  32 Components
                </span>
              )}
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground tracking-tight leading-[1.12]">
              {system.nameZh}
            </h3>
            <p className="mt-3 text-sm md:text-base text-muted leading-relaxed max-w-2xl">
              {system.descriptionZh}
            </p>
          </div>

          {/* Flow2Figma: Video + Collapsible */}
          {isFlow && (
            <div className="space-y-0">
              {/* Video player */}
              <div className="relative rounded-xl overflow-hidden bg-[#1a1f1c] ring-1 ring-border-light/20 shadow-lg mb-12">
                <div className="aspect-video relative">
                  {system.videoUrl ? (
                    <video
                      src={system.videoUrl}
                      controls
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/20">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                      <span className="text-xs tracking-widest uppercase">视频演示</span>
                    </div>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] tracking-[0.15em] text-white/25 font-medium bg-black/30 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    VIDEO DEMO
                  </span>
                </div>
              </div>

              {/* Collapsible sections */}
              <div>
                <CollapsibleSection
                  label="问题"
                  lede={system.problemZh}
                  points={system.problemPoints}
                  defaultOpen
                />
                <CollapsibleSection
                  label="方法"
                  lede={system.methodZh}
                  points={system.methodPoints}
                  defaultOpen
                />
              </div>
            </div>
          )}

          {/* ComponentLib special rendering with sub-points (no collapsible) */}
          {isComponentLib ? (
            <div className="space-y-0">
              {/* Problem */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-foreground/10 shrink-0" />
                  <span className="text-xs tracking-[0.25em] uppercase text-muted font-semibold">
                    问题
                  </span>
                </div>
                <p className="text-lg md:text-xl font-serif text-foreground/75 leading-relaxed max-w-3xl mb-10">
                  {system.problemZh}
                </p>
                <div className="space-y-6">
                  {system.problemPoints?.map((point, i) => (
                    <SubPointItem key={i} point={point} />
                  ))}
                </div>
              </div>

              <SectionConnector />

              {/* Method */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-foreground/10 shrink-0" />
                  <span className="text-xs tracking-[0.25em] uppercase text-muted font-semibold">
                    方法
                  </span>
                </div>
                <p className="text-lg md:text-xl font-serif text-foreground/75 leading-relaxed max-w-3xl mb-10">
                  {system.methodZh}
                </p>
                <div className="space-y-6">
                  {system.methodPoints?.map((point, i) => (
                    <SubPointItem key={i} point={point} />
                  ))}
                </div>
              </div>

              <SectionConnector />

              {/* Result */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
                  <span className="text-xs tracking-[0.25em] uppercase text-accent font-semibold">
                    成果
                  </span>
                </div>
                <p className="text-lg md:text-xl font-serif text-accent/80 leading-relaxed max-w-3xl mb-10">
                  {system.resultZh}
                </p>
                <div className="space-y-6">
                  {system.resultPoints?.map((point, i) => (
                    <SubPointItem key={i} point={point} />
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {/* Default flow for systems without sub-points */}
          {!hasSubPoints && (
            <div className="space-y-10 md:space-y-12">
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-foreground/10 shrink-0" />
                  <span className="text-xs tracking-[0.25em] uppercase text-muted font-semibold">
                    问题
                  </span>
                </div>
                <p className="text-lg md:text-xl font-serif text-foreground/75 leading-relaxed max-w-3xl italic">
                  &ldquo;{system.problemZh}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-px bg-border-light/60 ml-1" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-foreground/10 shrink-0" />
                  <span className="text-xs tracking-[0.25em] uppercase text-muted font-semibold">
                    方法
                  </span>
                </div>
                <p className="text-base text-foreground/70 leading-relaxed max-w-3xl">
                  {system.methodZh}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-px bg-border-light/60 ml-1" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
                  <span className="text-xs tracking-[0.25em] uppercase text-accent font-semibold">
                    成果
                  </span>
                </div>
                <p className="text-lg md:text-xl font-serif text-accent/80 leading-relaxed max-w-3xl">
                  {system.resultZh}
                </p>
              </div>
            </div>
          )}
        </div>


        {/* Demo showcase — Component Library: P0 organ grid */}
        {isComponentLib && (
          <div className="border-t border-border-light/30 mx-8 md:mx-10 lg:mx-14 pt-8 pb-10">
            <div className="flex items-center justify-between mb-5">
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-light font-medium">
                P0 · 核心器官组件
              </span>
              <span className="text-[10px] tracking-[0.15em] text-muted-light/50 font-medium">
                覆盖 80% 课程场景
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {[
                { emoji: "🧠", name: "大脑", code: "OR-01", en: "Brain" },
                { emoji: "🫀", name: "心脏", code: "OR-02", en: "Heart" },
                { emoji: "🫁", name: "肺脏", code: "OR-03", en: "Lungs" },
                { emoji: "🩸", name: "肝脏", code: "OR-04", en: "Liver" },
                { emoji: "🫘", name: "肾脏", code: "OR-05", en: "Kidney" },
                { emoji: "🫗", name: "胃", code: "OR-06", en: "Stomach" },
              ].map((organ) => (
                <div
                  key={organ.code}
                  className="relative rounded-xl bg-gradient-to-b from-[#fcfbf7] to-[#f6f3ea] border border-border-light/30 p-4 md:p-5 flex flex-col items-center text-center transition-all duration-300 hover:border-accent/15 hover:shadow-lg hover:shadow-accent/[0.04] hover:-translate-y-0.5 cursor-default"
                >
                  <span className="absolute top-2 right-2 text-[9px] text-muted-light/40 font-mono tracking-wider">
                    {organ.code}
                  </span>
                  <span className="text-3xl md:text-4xl mb-2 opacity-80">{organ.emoji}</span>
                  <span className="text-sm font-semibold text-foreground/80">{organ.name}</span>
                  <span className="text-[10px] text-muted-light/50 mt-0.5">{organ.en}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/30" />
              <span className="text-[10px] text-muted-light/50 tracking-wide">
                统一命名规范 · 标准插图风格 · 团队直接复用
              </span>
            </div>
          </div>
        )}

        {/* Media */}
        {!isFlow && !isComponentLib && system.media.length > 0 && (
          <div className="border-t border-border-light/30 mx-8 md:mx-10 lg:mx-14 py-8">
            {system.media.map((m, i) => (
              <MediaDisplay key={i} media={m} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
