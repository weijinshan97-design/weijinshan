"use client";

import { systemsData } from "@/data/systems";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ai = systemsData.find((s) => s.id === "ai-design-workflow")!;

export function AIWorkflow() {
  return (
    <section
      id="ai-workflow"
      className="py-8 md:py-12 px-6 md:px-8 lg:px-12 bg-white"
    >
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <SectionHeading
            label="AI Workflow"
            title="AI 辅助设计工作流"
            description={ai.descriptionZh}
          />
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8">
          {/* Problem */}
          <FadeIn delay={0.1}>
            <div className="border-t border-border-light pt-6 pb-8 lg:border-0 lg:pt-0">
              <span className="text-xs tracking-[0.2em] uppercase text-muted-light font-medium">
                问题
              </span>
              <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">
                {ai.problemZh}
              </p>
            </div>
          </FadeIn>

          {/* Method */}
          <FadeIn delay={0.2}>
            <div className="border-t border-border-light pt-6 pb-8 lg:border-0 lg:pt-0">
              <span className="text-xs tracking-[0.2em] uppercase text-muted-light font-medium">
                方法
              </span>
              <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">
                {ai.methodZh}
              </p>
            </div>
          </FadeIn>

          {/* Result */}
          <FadeIn delay={0.3}>
            <div className="border-t border-border-light pt-6 pb-8 lg:border-0 lg:pt-0">
              <span className="text-xs tracking-[0.2em] uppercase text-muted-light font-medium">
                成果
              </span>
              <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">
                {ai.resultZh}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Flow diagram placeholder */}
        <FadeIn delay={0.3}>
          <div className="mt-8 flex items-center gap-3 md:gap-5 justify-center text-xs md:text-sm text-muted-light font-mono">
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
              策略
            </span>
            <span className="text-muted-light/30">→</span>
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
              创意
            </span>
            <span className="text-muted-light/30">→</span>
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
              AI 批量执行
            </span>
            <span className="text-muted-light/30">→</span>
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
              人工质检
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
