"use client";

import { thinkingData } from "@/data/thinking";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ThinkingPreview } from "@/components/ui/ThinkingPreview";

export function Thinking() {
  return (
    <section
      id="thinking"
      className="pt-14 md:pt-16 pb-16 md:pb-18 px-6 md:px-8 lg:px-12 bg-surface"
    >
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <SectionHeading
            label="Thinking"
            title="思考与记录"
          />
          <p className="-mt-8 mb-10 text-sm md:text-base text-muted max-w-xl leading-7">
            不是博客，是工作过程中对 AI 协作、Agent 工作流、效率和判断力的复盘。
          </p>
        </FadeIn>

        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0">
          {thinkingData.map((entry, i) => (
            <FadeIn key={entry.slug} delay={0.1 + i * 0.1}>
              <ThinkingPreview entry={entry} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
