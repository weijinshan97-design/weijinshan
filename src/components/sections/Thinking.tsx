"use client";

import Link from "next/link";
import { thinkingData } from "@/data/thinking";
import { FadeIn } from "@/components/ui/FadeIn";

export function Thinking() {
  return (
    <section
      id="thinking"
      className="relative overflow-hidden bg-[#08080d] px-6 py-24 text-white md:px-10 md:py-32 lg:px-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#08080d_0%,#050508_100%)]" />
      <div className="relative mx-auto max-w-[1320px]">
        <FadeIn>
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#bf8eff]/62">
                Thinking Notes
              </p>
              <h2 className="section-display mt-5 font-serif text-6xl font-bold md:text-8xl">
                <span className="title-line">把过程</span>
                <br />
                <span className="title-line">写成方法</span>
              </h2>
            </div>
            <p className="copy-readable max-w-[540px] text-base text-white/62">
              这些文章不是为了凑内容，而是记录我如何和 AI Agent 协作、如何判断设计方案、如何把一次项目复盘成下一次能复用的方法。
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-5 lg:grid-cols-2">
          {thinkingData.map((entry, index) => (
            <FadeIn key={entry.slug} delay={index * 0.08}>
              <Link
                href={`/thinking/${entry.slug}`}
                className="group micro-lift relative block min-h-[360px] overflow-hidden rounded-[34px] border border-white/[0.08] bg-[#0d0d12] p-7 transition-all duration-500 hover:border-[#bf8eff]/20 hover:shadow-[0_0_40px_rgba(191,142,255,0.06)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(191,142,255,0.12),transparent_34%),radial-gradient(circle_at_86%_84%,rgba(95,59,255,0.18),transparent_36%)] opacity-70 transition group-hover:opacity-100" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#bf8eff]/58">
                      {entry.date}
                    </span>
                    <span className="font-mono text-6xl font-black leading-none text-white/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <h3 className="cjk-card-title whitespace-nowrap font-serif text-[2rem] font-bold leading-[1.15] text-white md:text-[2.55rem]">
                      {entry.titleZh}
                    </h3>
                    <p className="copy-readable mt-5 max-w-[560px] text-sm text-white/62">
                      {entry.summaryZh}
                    </p>
                    <div className="mt-6 inline-flex rounded-full border border-[#bf8eff]/20 px-4 py-2 text-sm text-[#bf8eff]/70 transition group-hover:border-[#bf8eff]/40 group-hover:bg-[#bf8eff]/10 group-hover:text-[#bf8eff] group-hover:shadow-[0_0_24px_rgba(191,142,255,0.15)]">
                      阅读全文 →
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
