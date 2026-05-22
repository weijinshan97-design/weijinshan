"use client";

import { problemsData } from "@/data/problems";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProblemCard } from "@/components/ui/ProblemCard";

export function RecentProblems() {
  return (
    <section
      id="problems"
      className="py-24 md:py-32 px-6 md:px-8 lg:px-12"
    >
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <SectionHeading
            label="Problems Solved"
            title="最近解决的问题"
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {problemsData.map((problem, i) => (
            <FadeIn key={problem.id} delay={i * 0.1}>
              <ProblemCard problem={problem} index={i} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
