"use client";

import { worksData } from "@/data/works";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkCard } from "@/components/ui/WorkCard";

export function SelectedWork() {
  return (
    <section
      id="work"
      className="pt-6 md:pt-10 pb-16 md:pb-20 px-6 md:px-8 lg:px-12"
    >
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <SectionHeading
            label="Selected Work"
            title="精选商业案例"
            description="每个项目从问题出发，以结果收尾，而非单纯展示视觉效果。"
          />
        </FadeIn>

        <div className="space-y-8 md:space-y-12">
          {/* Hero — WBIT AI 助手平台 */}
          <FadeIn delay={0}>
            <WorkCard work={worksData[0]} variant="hero" />
          </FadeIn>

          {/* 2×2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <FadeIn delay={0.1}>
              <WorkCard work={worksData[1]} variant="default" />
            </FadeIn>
            <FadeIn delay={0.16}>
              <WorkCard work={worksData[2]} variant="default" />
            </FadeIn>
            <FadeIn delay={0.22}>
              <WorkCard work={worksData[3]} variant="default" />
            </FadeIn>
            <FadeIn delay={0.28}>
              <WorkCard work={worksData[4]} variant="default" />
            </FadeIn>
          </div>

          {/* Hero — 营销运营 */}
          <FadeIn delay={0.34}>
            <WorkCard work={worksData[5]} variant="hero" />
          </FadeIn>

          {/* Hero — 自我驱动 */}
          <FadeIn delay={0.4}>
            <WorkCard work={worksData[6]} variant="hero" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
