"use client";

import { systemsData } from "@/data/systems";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SystemCard } from "@/components/ui/SystemCard";

export function Systems() {
  return (
    <section
      id="systems"
      className="py-14 md:py-16 px-6 md:px-8 lg:px-12 bg-surface"
    >
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <SectionHeading
            label="Systems & Tools"
            title="工具与系统"
          />
          <p className="-mt-8 mb-12 text-sm md:text-base text-muted max-w-xl leading-7">
            每一项都来自真实工作痛点，从发现问题到推动落地，展示完整的解决过程。
          </p>
        </FadeIn>

        <div className="space-y-14 md:space-y-16">
          {systemsData.map((system, i) => (
            <FadeIn key={system.id} delay={i * 0.15}>
              <SystemCard system={system} index={i} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
