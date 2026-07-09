"use client";

import Link from "next/link";
import { systemsData } from "@/data/systems";
import { FadeIn } from "@/components/ui/FadeIn";
import { AIWorkflowPipeline } from "@/components/ui/AIWorkflowPipeline";

export function Systems() {
  return (
    <section
      id="systems"
      className="relative overflow-hidden bg-[#050508] px-4 py-16 text-white sm:px-6 sm:py-24 md:px-10 md:py-36 lg:px-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(191,142,255,0.13),transparent_26%),radial-gradient(circle_at_18%_72%,rgba(95,59,255,0.22),transparent_30%)]" />
      <div className="relative mx-auto max-w-[1320px]">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#bf8eff]/62">
                Systems & Tools
              </p>
              <h2 className="section-display mt-5 font-serif text-6xl font-bold md:text-8xl">
                <span className="title-line">工具不是插件</span>
                <br />
                <span className="title-line">是交付方式</span>
              </h2>
            </div>
            <p className="max-w-[580px] text-sm leading-relaxed text-white/62 break-words sm:text-base lg:justify-self-end">
              AI Agent 最有价值的地方，不是替我做完一个页面，而是把需求拆解、文件修改、版本验证和内容整理变成一条可以反复调用的工作流。
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6">
          {systemsData.map((system, index) => {
            // AI workflow gets a special full-width pipeline card
            if (system.id === "ai-workflow") {
              return (
                <FadeIn key={system.id} delay={0.08}>
                  <article className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#0d0d12] p-5 sm:rounded-[42px] sm:p-8 lg:p-12">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(191,142,255,0.10),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(95,59,255,0.12),transparent_35%)]" />
                    <div className="relative">
                      <div className="mb-10 flex items-center gap-3">
                        <span className="h-px w-6 bg-[#bf8eff]/30" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#bf8eff]/50">
                          AI Collaboration Workflow
                        </span>
                      </div>
                      <h3 className="cjk-title font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                        {system.nameZh}
                      </h3>
                      <p className="mt-4 max-w-[640px] text-sm text-white/55">
                        {system.descriptionZh}
                      </p>

                      <div className="mt-10">
                        <AIWorkflowPipeline />
                      </div>
                    </div>
                  </article>
                </FadeIn>
              );
            }

            // Regular system cards
            return (
            <FadeIn key={system.id} delay={index * 0.08}>
              <article className="group micro-lift relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#0d0d12] p-5 transition duration-500 hover:border-white/[0.16] sm:rounded-[42px] sm:p-6 md:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(191,142,255,0.13),transparent_32%),radial-gradient(circle_at_86%_84%,rgba(95,59,255,0.18),transparent_36%)] opacity-70 transition group-hover:opacity-100" />
                <div className="relative grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
                  <div className="flex min-h-[200px] flex-col justify-between rounded-[24px] border border-white/[0.08] bg-black/24 p-5 sm:min-h-[380px] sm:rounded-[32px] sm:p-6">
                    <div>
                      <p className="font-mono text-sm text-[#bf8eff]/60">
                        SYSTEM {String(index).padStart(2, "0")}
                      </p>
                      <h3 className="cjk-title mt-4 font-serif text-3xl font-bold text-white sm:mt-8 sm:text-5xl md:text-6xl">
                        {system.nameZh}
                      </h3>
                    </div>
                    <p className="mt-6 text-sm leading-relaxed text-white/60 break-words sm:mt-10">
                      {system.descriptionZh}
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {[
                      ["Problem", system.problemZh],
                      ["Method", system.methodZh],
                      ["Result", system.resultZh],
                    ].map(([label, text]) => (
                      <div
                        key={label}
                        className="signal-surface overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.035] p-4 transition hover:border-white/[0.14] sm:rounded-[28px] sm:p-5"
                      >
                        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/48">
                          {label}
                        </p>
                        <p className="mt-4 text-sm leading-relaxed text-white/62 break-words line-clamp-[9]">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {system.link && (
                  <Link
                    href={system.link}
                    className="relative mt-6 inline-flex rounded-full border border-[#bf8eff]/20 px-5 py-2.5 text-sm text-[#bf8eff]/65 transition hover:border-[#bf8eff]/40 hover:bg-[#bf8eff]/10 hover:text-[#bf8eff] hover:shadow-[0_0_20px_rgba(191,142,255,0.12)]"
                  >
                    查看工具链接
                  </Link>
                )}
              </article>
            </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
