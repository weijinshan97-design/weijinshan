"use client";

import { motion } from "framer-motion";

type Step = {
  num: string;
  title: string;
  desc: string;
  tools: string[];
};

const steps: Step[] = [
  {
    num: "01",
    title: "产品思考",
    desc: "定义问题、用户画像、信息架构，建立设计约束",
    tools: ["ChatGPT"],
  },
  {
    num: "02",
    title: "体验策略",
    desc: "梳理信息层级、用户路径、模块职责",
    tools: ["ChatGPT"],
  },
  {
    num: "03",
    title: "视觉设计",
    desc: "Design System、组件、排版、视觉层次",
    tools: ["Figma"],
  },
  {
    num: "04",
    title: "AI 协作开发",
    desc: "模块化搭建，每个模块：设计→开发→Review→修改→验证",
    tools: ["Claude", "Codex", "VS Code"],
  },
  {
    num: "05",
    title: "AI 评审",
    desc: "不同模型承担不同角色，各司其职",
    tools: ["ChatGPT", "Claude", "Codex"],
  },
  {
    num: "06",
    title: "持续迭代",
    desc: "上线是起点，持续优化体验、文案、交互、性能",
    tools: ["All Tools"],
  },
];

export function AIWorkflowPipeline() {
  return (
    <div className="relative">
      {/* ---- 6 步管线 ---- */}
      <div className="grid gap-0 lg:grid-cols-6">
        {steps.map((step, i) => (
          <div key={step.num} className="relative flex flex-col min-h-0">
            {/* Connecting line (desktop) */}
            {i < steps.length - 1 && (
              <div className="absolute left-[calc(100%-1px)] top-8 z-0 hidden h-px w-full lg:block">
                <div className="h-full w-full bg-gradient-to-r from-[#bf8eff]/30 to-transparent" />
                <motion.div
                  animate={{ x: ["0%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                  className="absolute left-0 top-1/2 h-px w-8 -translate-y-1/2 bg-[#bf8eff]/60"
                />
              </div>
            )}

            {/* Vertical connector (mobile) */}
            {i < steps.length - 1 && (
              <div className="absolute bottom-0 left-4 top-full z-0 w-px lg:hidden">
                <div className="h-full w-full bg-gradient-to-b from-[#bf8eff]/30 to-transparent" />
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative z-10 flex flex-1 flex-col"
            >
              <div className="flex flex-1 flex-col gap-3 text-center lg:pr-4 lg:text-left">
                {/* Step number + title */}
                <div className="shrink-0">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-[#bf8eff]/50">
                    {step.num}
                  </span>
                  <h4 className="mt-1 font-serif text-lg font-bold text-white lg:text-xl">
                    {step.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-xs leading-6 text-white/48">
                  {step.desc}
                </p>

                {/* Tool tags — pinned to bottom */}
                <div className="mt-auto flex flex-wrap justify-center gap-1.5 pt-2 lg:justify-start">
                  {step.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-0.5 text-[10px] text-white/40"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* ---- 分隔 ---- */}
      <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* ---- 工具角色 ---- */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {[
          { tool: "ChatGPT", role: "产品讨论 · UX 思考 · 设计评审 · 信息架构", color: "border-emerald-500/30 bg-emerald-500/8 text-emerald-400" },
          { tool: "Claude", role: "长上下文推理 · 代码理解 · 架构优化 · Code Review", color: "border-[#bf8eff]/30 bg-[#bf8eff]/8 text-[#bf8eff]" },
          { tool: "Codex", role: "前端开发 · Demo 搭建 · Bug 修复 · 快速验证", color: "border-amber-500/30 bg-amber-500/8 text-amber-400" },
          { tool: "Figma", role: "Design System · 组件库 · 视觉设计 · 原型", color: "border-sky-500/30 bg-sky-500/8 text-sky-400" },
          { tool: "VS Code", role: "开发环境 · 调试 · 部署", color: "border-blue-500/30 bg-blue-500/8 text-blue-400" },
        ].map((item, i) => (
          <motion.div
            key={item.tool}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={`rounded-2xl border p-4 ${item.color}`}
          >
            <p className="text-sm font-semibold">{item.tool}</p>
            <p className="mt-2 text-[11px] leading-5 opacity-70">{item.role}</p>
          </motion.div>
        ))}
      </div>

      {/* ---- 设计理念 ---- */}
      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto mt-10 max-w-[720px] text-center"
      >
        <p className="font-serif text-xl leading-relaxed text-white/55 md:text-2xl">
          AI 加速执行，而设计始终由<span className="text-white/80">人的判断</span>驱动。
        </p>
        <p className="mt-3 text-sm text-white/35">
          让合适的 AI 做合适的事情，设计师负责决定产品方向。
        </p>
      </motion.blockquote>
    </div>
  );
}
