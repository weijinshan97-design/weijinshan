"use client";

import { thinkingData } from "@/data/thinking";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ThinkingPreview } from "@/components/ui/ThinkingPreview";

export function Thinking() {
  return (
    <section
      id="thinking"
      className="pt-8 md:pt-12 pb-12 md:pb-16 px-6 md:px-8 lg:px-12 bg-surface"
    >
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <SectionHeading
            label="Thinking"
            title="思考与记录"
          />
          <p className="mt-4 text-sm text-muted-light max-w-xl">
            不是博客，是工作过程中对效率、流程和自动化的复盘与思考。
          </p>
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          {thinkingData.map((entry, i) => (
            <FadeIn key={entry.slug} delay={i * 0.1}>
              <ThinkingPreview entry={entry} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
