"use client";

import { worksData } from "@/data/works";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkCard } from "@/components/ui/WorkCard";

export function SelectedWork() {
  return (
    <section
      id="work"
      className="pt-6 md:pt-10 pb-8 md:pb-12 px-6 md:px-8 lg:px-12"
    >
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <SectionHeading
            label="Selected Work"
            title="精选商业案例"
            description="每个项目从问题出发，以结果收尾，而非单纯展示视觉效果。"
          />
        </FadeIn>

        {/* Asymmetric grid — loose, varied sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Left column: square + landscape */}
          <FadeIn key={worksData[0].slug} delay={0}>
            <WorkCard work={worksData[0]} aspect="square" />
          </FadeIn>
          {/* Right column: landscape + landscape */}
          <FadeIn key={worksData[1].slug} delay={0.12}>
            <WorkCard work={worksData[1]} aspect="landscape" />
          </FadeIn>
          {/* Left column below square */}
          <FadeIn key={worksData[2].slug} delay={0.24}>
            <WorkCard work={worksData[2]} aspect="landscape" />
          </FadeIn>
          {/* Right column below */}
          <FadeIn key={worksData[3].slug} delay={0.18}>
            <WorkCard work={worksData[3]} aspect="square" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
