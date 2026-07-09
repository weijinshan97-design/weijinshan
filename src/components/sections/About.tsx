"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { aboutData } from "@/data/about";
import { FadeIn } from "@/components/ui/FadeIn";

function TiltCard({ children }: { children: React.ReactNode }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: x * 6, y: y * -6 });
    },
    [],
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: "transform 0.3s ease-out",
      }}
    >
      {children}
    </div>
  );
}

const stats = [
  ["9年", "设计经验", "商业视觉、UI 设计、AI 产品与内容表达的连续积累"],
  ["4类", "行业场景", "游戏、出行、财税科技、AI 工具与个人内容项目"],
  ["1条", "能力主线", "从视觉执行走向产品体验、系统搭建和内容叙事"],
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050508] px-6 py-24 text-white md:px-10 md:py-36 lg:px-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(191,142,255,0.12),transparent_26%),radial-gradient(circle_at_78%_20%,rgba(95,59,255,0.18),transparent_30%),linear-gradient(180deg,#050508_0%,#08080d_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto max-w-[1320px]">
        <FadeIn>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#bf8eff]/62">
                Profile Archive
              </p>
              <h2 className="section-display mt-5 font-serif text-6xl font-bold md:text-8xl">
                <span className="title-line">经验不是履历</span>
                <br />
                <span className="title-line">是方法的来源</span>
              </h2>
            </div>
            <p className="max-w-[620px] text-base text-white/62 lg:justify-self-end">
              我不想把经历写成公司列表，而是把它拆成能力来源：商业视觉训练了审美判断，产品项目训练了系统思维，AI Agent 工作流让我把想法更快变成可运行的结果。
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-5 lg:grid-cols-3">
          {stats.map(([value, label, desc], index) => (
            <FadeIn key={label} delay={index * 0.06}>
              <TiltCard>
                <div className="micro-lift rounded-[24px] border border-white/[0.08] bg-white/[0.04] p-4 backdrop-blur-xl sm:rounded-[34px] sm:p-7">
                  <div className="font-serif text-3xl font-bold leading-none text-white sm:text-6xl md:text-7xl">
                    {value}
                  </div>
                  <p className="mt-2 text-xs font-semibold text-[#bf8eff]/72 sm:mt-5 sm:text-base">
                    {label}
                  </p>
                  <p className="mt-1.5 text-[11px] leading-5 text-white/58 sm:mt-3 sm:text-sm sm:leading-7">{desc}</p>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-[42px] border border-white/[0.08] bg-[#0a0a0f]/82 backdrop-blur-xl">
          {aboutData.experience.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group grid gap-4 border-b border-white/[0.08] p-4 transition duration-500 last:border-b-0 hover:bg-white/[0.035] sm:gap-6 sm:p-6 md:grid-cols-[160px_1fr_250px] md:p-8"
            >
              <div className="font-mono text-xs text-white/28 sm:text-sm">
                <span className="text-[#bf8eff]/64">{String(index + 1).padStart(2, "0")}</span>
                <span className="mx-2 text-white/16 sm:mx-3">/</span>
                {exp.period}
              </div>
              <div>
                <h3 className="cjk-card-title font-serif text-xl font-semibold text-white sm:text-3xl md:text-4xl">
                  {exp.company}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60 break-words">{exp.description}</p>
              </div>
              <div className="md:text-right">
                <p className="text-base font-semibold text-white sm:text-lg">{exp.role}</p>
                <p className="mt-2 text-xs leading-5 text-white/50 break-words">{exp.tags}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
