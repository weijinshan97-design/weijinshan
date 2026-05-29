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
        <p className="mt-1.5 text-sm text-muted leading-6">
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
        <span className="flex-1 text-sm text-muted truncate min-w-0">
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

function FlowPluginShowcase() {
  const steps = [
    ["01", "Input", "导入流程截图 / 文本结构"],
    ["02", "Clean", "识别节点、层级与连接关系"],
    ["03", "Render", "生成稳定可编辑版式"],
    ["04", "Export", "进入 Figma 继续校准"],
  ];

  const nodes = [
    { label: "需求输入", meta: "Start", className: "left-[6%] top-[12%]" },
    { label: "结构识别", meta: "AI Parse", className: "left-[38%] top-[12%]" },
    { label: "生成规范稿", meta: "Clean HTML", className: "right-[6%] top-[12%]" },
    { label: "设计校准", meta: "Figma", className: "left-[23%] bottom-[16%]" },
    { label: "团队复用", meta: "Asset", className: "right-[18%] bottom-[16%]" },
  ];

  return (
    <div className="mb-12 overflow-hidden rounded-2xl bg-[#080b0a] ring-1 ring-white/10 shadow-[0_28px_90px_rgba(6,8,8,0.26)]">
      <div className="grid lg:grid-cols-[0.86fr_1.14fr]">
        <div className="relative overflow-hidden border-b border-white/10 p-6 md:p-8 lg:border-b-0 lg:border-r">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(64,53,225,0.2),transparent_30%),linear-gradient(160deg,rgba(255,255,255,0.08),transparent_42%)]" />
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/32">
                插件面板
              </span>
            </div>

            <div className="py-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4035e1] text-sm font-bold text-white">
                  F2
                </span>
                <div>
                  <p className="text-base font-semibold text-white">Flow2Figma</p>
                  <p className="mt-0.5 text-xs text-white/38">结构化流程图转可编辑版式</p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-dashed border-white/14 bg-black/18 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-white/76">流程图输入</p>
                    <p className="mt-1 text-xs leading-5 text-white/34">
                      截图 / Markdown / HTML
                    </p>
                  </div>
                  <span className="rounded-full bg-[#4035e1]/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                    就绪
                  </span>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {steps.map(([num, title, desc]) => (
                  <div
                    key={num}
                    className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.035] px-3 py-3"
                  >
                    <span className="font-mono text-xs text-white/24">{num}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-white/72">{title}</p>
                      <p className="mt-0.5 truncate text-[11px] text-white/32">{desc}</p>
                    </div>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4035e1]/70" />
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-[#4035e1] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white">
                生成规范 Figma 稿
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden bg-[#111513] p-5 md:p-7">
          <div className="absolute left-8 top-7 z-10 flex flex-wrap gap-2">
            {["无 SVG 依赖", "可编辑图层", "干净结构"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-black/18 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-white/42 backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="relative mt-10 rounded-2xl border border-white/10 bg-[#0a0a0c] p-6 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                流程管线
              </span>
              <span className="text-[10px] text-white/20">→</span>
            </div>

            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {nodes.map((node, i) => (
                <div key={node.label} className="flex items-center gap-3 shrink-0">
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <p className="text-[9px] uppercase tracking-[0.16em] text-[#4035e1]/60">
                      {node.meta}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-white/80">
                      {node.label}
                    </p>
                  </div>
                  {i < nodes.length - 1 && (
                    <span className="text-white/15 text-xs">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              ["手动重绘", "数小时"],
              ["生成底稿", "几分钟"],
              ["聚焦判断", "逻辑层"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/28">{label}</p>
                <p className="mt-1 text-sm font-semibold text-white/70">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioSiteShowcase() {
  return (
    <div className="mb-14 overflow-hidden rounded-2xl bg-[#070808] ring-1 ring-white/10 shadow-[0_28px_90px_rgba(6,8,8,0.32)]">
      <div className="grid min-h-[420px] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative overflow-hidden p-6 md:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_38%,rgba(64,53,225,0.24),transparent_28%),linear-gradient(135deg,rgba(64,53,225,0.18),transparent_42%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/40">
                <span className="h-2 w-2 rounded-full bg-[#4035e1]/80" />
                AI 协作作品集
              </div>
              <h4 className="mt-10 font-serif text-5xl font-bold leading-[0.98] tracking-normal text-white md:text-6xl lg:text-7xl">
                自我表达
                <br />
                重新生成
              </h4>
              <p className="mt-6 max-w-sm text-sm leading-7 text-white/48">
                设计判断、AI 协作与前端实现被放进同一个工作现场，让作品集成为持续生长的个人系统。
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 text-center">
              {["VS Code", "Claude Code", "设计判断"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/[0.045] px-3 py-3 text-[10px] uppercase tracking-[0.14em] text-white/48"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-[#101314] p-5 md:p-7 lg:border-l lg:border-t-0">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#f8f8fa] shadow-2xl shadow-black/30">
            <div className="flex items-center gap-2 border-b border-black/10 bg-white px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-[10px] uppercase tracking-[0.16em] text-black/35">
                本地调试 / 作品集系统
              </span>
            </div>
            <div className="bg-[#09090b] px-5 py-8 text-center">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/34">
                产品设计 / AI / 系统
              </p>
              <p className="mt-6 whitespace-nowrap font-serif text-[2rem] font-bold text-white md:text-[2.6rem]">
                从视觉，走向更多可能
              </p>
              <p className="mx-auto mt-5 max-w-md text-xs leading-6 tracking-[0.2em] text-white/38">
                持续在商业视觉之外，探索工具、系统与更有效的解决方式。
              </p>
            </div>
            <div className="grid gap-4 bg-[#f8f8fa] p-5 md:grid-cols-2">
              {["经历重组", "案例分层", "AI 协作", "持续迭代"].map((item) => (
                <div key={item} className="rounded-lg bg-white px-4 py-4 shadow-sm">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-muted">模块</p>
                  <p className="mt-2 text-sm font-semibold text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              ["01", "叙事线"],
              ["02", "界面层"],
              ["03", "迭代环"],
            ].map(([num, label]) => (
              <div key={num} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <p className="font-mono text-xs text-white/28">{num}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/45">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioNarrativePanel({ system }: { system: SystemItem }) {
  const sections = [
    {
      num: "01",
      label: "Pressure",
      title: "问题",
      lede: system.problemZh,
      points: system.problemPoints,
      accent: false,
    },
    {
      num: "02",
      label: "Method",
      title: "方法",
      lede: system.methodZh,
      points: system.methodPoints,
      accent: false,
    },
    {
      num: "03",
      label: "Outcome",
      title: "成果",
      lede: system.resultZh,
      points: system.resultPoints,
      accent: true,
    },
  ];

  return (
    <div className="space-y-5">
      {sections.map((section) => (
        <div
          key={section.num}
          className={`relative overflow-hidden rounded-2xl border p-6 md:p-8 lg:p-9 ${
            section.accent
              ? "border-accent/18 bg-accent/[0.035]"
              : "border-border-light/45 bg-white/42"
          }`}
        >
          <div
            className={`absolute right-6 top-4 font-mono text-7xl font-bold leading-none ${
              section.accent ? "text-accent/[0.08]" : "text-foreground/[0.035]"
            }`}
          >
            {section.num}
          </div>

          <div className="relative z-10 grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    section.accent ? "bg-accent" : "bg-foreground/12"
                  }`}
                />
                <span
                  className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
                    section.accent ? "text-accent" : "text-muted"
                  }`}
                >
                  {section.label}
                </span>
              </div>
              <h4 className="mt-5 font-serif text-2xl font-bold leading-tight text-foreground md:text-3xl">
                {section.title}
              </h4>
              <p
                className={`mt-4 text-base leading-8 md:text-lg ${
                  section.accent ? "text-accent/82" : "text-foreground/72"
                }`}
              >
                {section.lede}
              </p>
            </div>

            <div className="grid gap-3">
              {section.points?.map((point, i) => (
                <div
                  key={point.title}
                  className="group/portfolio-point rounded-xl border border-border-light/45 bg-white/55 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/18 hover:bg-white/78"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`mt-1 font-mono text-xs ${
                        section.accent ? "text-accent/55" : "text-muted/55"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h5 className="text-sm font-semibold leading-snug text-foreground/88">
                        {point.title}
                      </h5>
                      <p className="mt-1.5 text-sm leading-6 text-muted">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function SystemCard({ system, index }: SystemCardProps) {
  const isEven = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);
  const isFlow = system.id === "flow-to-figma";
  const isComponentLib = system.id === "design-component-library";
  const isPortfolioSite = system.id === "ai-portfolio-site";
  const hasSubPoints = isFlow || isComponentLib || isPortfolioSite;

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
              <span className="text-[10px] tracking-[0.16em] uppercase text-muted font-medium">
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
              {isPortfolioSite && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/8 text-accent/60 font-medium">
                  AI Collaboration
                </span>
              )}
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground tracking-tight leading-[1.12]">
              {system.nameZh}
            </h3>
            <p className="mt-3 max-w-3xl text-sm md:text-base text-muted leading-7">
              {system.descriptionZh}
            </p>
          </div>

          {isPortfolioSite && <PortfolioSiteShowcase />}

          {isPortfolioSite && <PortfolioNarrativePanel system={system} />}

          {/* Flow2Figma: visible UI showcase + collapsible narrative */}
          {isFlow && (
            <div className="space-y-0">
              <FlowPluginShowcase />

              <div className="overflow-hidden rounded-2xl border border-border-light/35 bg-white/36 px-5 md:px-7">
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
                <CollapsibleSection
                  label="成果"
                  lede={system.resultZh}
                  points={system.resultPoints}
                  accent
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
