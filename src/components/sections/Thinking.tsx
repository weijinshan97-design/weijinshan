"use client";

import { thinkingData } from "@/data/thinking";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ThinkingPreview } from "@/components/ui/ThinkingPreview";

export function Thinking() {
  const [featured, ...rest] = thinkingData;

  return (
    <section
      id="thinking"
      className="pt-16 md:pt-20 pb-20 md:pb-24 px-6 md:px-8 lg:px-12 bg-surface"
    >
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <SectionHeading
            label="Thinking"
            title="思考与记录"
          />
          <p className="-mt-8 mb-16 text-sm text-muted-light max-w-xl leading-relaxed">
            不是博客，是工作过程中对效率、流程和自动化的复盘与思考。
          </p>
        </FadeIn>

        {/* Featured article */}
        <FadeIn delay={0.1}>
          <ThinkingPreview entry={featured} featured />
        </FadeIn>

        {/* Rest — two column for wider screens */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0">
          {rest.map((entry, i) => (
            <FadeIn key={entry.slug} delay={0.2 + i * 0.1}>
              <ThinkingPreview entry={entry} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
