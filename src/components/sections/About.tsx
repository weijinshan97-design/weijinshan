"use client";

import { aboutData } from "@/data/about";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-8 lg:px-12"
    >
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <SectionHeading
            label="About"
            title="关于我"
          />
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-20">
          {/* Summary */}
          <FadeIn delay={0.1}>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              {aboutData.summary}
            </p>
          </FadeIn>

          {/* Core pillars — emphasized over resume */}
          <FadeIn delay={0.2}>
            <h3 className="text-xs tracking-[0.2em] uppercase text-muted-light font-medium mb-8">
              核心能力
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "商业视觉设计",
                  desc: "8 年跨行业视觉执行经验，涵盖游戏、出行、财税，建立品牌规范与 VI 系统。",
                },
                {
                  title: "设计自动化",
                  desc: "将重复环节系统化——开发插件、搭组件库、建标准模板，省下时间做判断。",
                },
                {
                  title: "AI Workflow",
                  desc: "AI 嵌入设计流程，批量处理与多尺寸适配自动化，聚焦策略与创意。",
                },
                {
                  title: "系统思维 & 问题推动",
                  desc: "不只看单点需求，关注流程瓶颈和协作摩擦，推动问题从发现到落地。",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="p-6 rounded-lg border border-border-light bg-white"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono text-muted-light">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <h4 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Experience — compressed timeline */}
          <FadeIn delay={0.3}>
            <h3 className="text-xs tracking-[0.2em] uppercase text-muted-light font-medium mb-6">
              工作经历
            </h3>
            <div className="relative">
              <div className="absolute left-[8px] top-2 bottom-2 w-px bg-border-light hidden sm:block" />
              <div className="space-y-6">
                {aboutData.experience.map((exp, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="relative shrink-0 mt-1.5 hidden sm:block">
                      <span
                        className={`block w-[17px] h-[17px] rounded-full border-2 ${
                          i === 0
                            ? "bg-accent border-accent"
                            : "bg-white border-border"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span className="text-sm font-medium text-foreground">
                          {exp.company}
                        </span>
                        <span className="text-xs text-muted-light">
                          {exp.role}
                        </span>
                        <span className="text-xs text-muted-light font-mono sm:ml-auto">
                          {exp.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Education — one line */}
          <FadeIn delay={0.4}>
            <h3 className="text-xs tracking-[0.2em] uppercase text-muted-light font-medium mb-3">
              教育
            </h3>
            <p className="text-sm text-foreground">
              {aboutData.education.school} · {aboutData.education.major}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
