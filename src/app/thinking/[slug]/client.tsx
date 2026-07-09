"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { thinkingData } from "@/data/thinking";

const aiNewsClips = [
  {
    source: "Goldman Sachs / CNBC",
    year: "2023",
    title: "生成式 AI 可能影响全球约 3 亿个全职工作岗位",
    note: "自动化不再只发生在工厂，而是进入办公室、内容、法律、行政与创意生产流程。",
    href: "https://www.cnbc.com/2023/03/28/ai-automation-could-impact-300-million-jobs-heres-which-ones.html",
    metric: "300M",
  },
  {
    source: "World Economic Forum",
    year: "2025",
    title: "到 2030 年，雇主预计 39% 的关键技能会发生变化",
    note: "技能本身正在被重写，设计师需要证明的不只是软件熟练度，而是学习、判断和跨工具协作能力。",
    href: "https://www.weforum.org/stories/2025/01/future-of-jobs-report-2025-jobs-of-the-future-and-the-skills-you-need-to-get-them/",
    metric: "39%",
  },
  {
    source: "McKinsey",
    year: "2025",
    title: "AI 正从试点走向业务重组，但多数组织仍在寻找可规模化价值",
    note: "真正的变化不只是使用 AI，而是围绕 AI 重新设计工作流、组织方式和交付链路。",
    href: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
    metric: "AI",
  },
  {
    source: "AP News",
    year: "2025",
    title: "客服、软件、内容等岗位已经开始感受到 AI 工作流的替代与重组",
    note: "AI 对职业的影响不是抽象未来，而是在具体行业中逐步改变岗位结构与能力要求。",
    href: "https://apnews.com/article/ca87ae77d7c6797ebb2628bd1b532929",
    metric: "SHIFT",
  },
];

function NewsBriefing() {
  return (
    <section className="my-14">
      <div className="mb-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#bf8eff]/50">
          News Briefing
        </p>
        <h2 className="cjk-card-title mt-3 font-serif text-2xl font-bold text-white md:text-3xl">
          AI 浪潮正在改写工作现场
        </h2>
        <span className="mt-2 inline-flex rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/32">
          2023 - 2025
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {aiNewsClips.map((clip) => (
          <a
            key={clip.title}
            href={clip.href}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#bf8eff]/20 hover:bg-white/[0.05]"
          >
            <div className="absolute right-4 top-4 font-mono text-5xl font-bold leading-none text-white/[0.04]">
              {clip.metric}
            </div>
            <div className="relative z-10">
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/40">
                  {clip.source}
                </span>
                <span className="font-mono text-xs text-white/28">{clip.year}</span>
              </div>
              <h3 className="text-base font-semibold text-white/80">{clip.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/48">{clip.note}</p>
              <span className="mt-4 inline-flex text-xs text-[#bf8eff]/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#bf8eff]/80">
                查看来源 →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] h-px w-full">
      <div
        className="h-full bg-gradient-to-r from-[#bf8eff] via-[#6366f1] to-[#bf8eff] transition-[width] duration-150"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

export function ThinkingPageClient({ slug }: { slug: string }) {
  const entry = thinkingData.find((t) => t.slug === slug);
  if (!entry) notFound();
  const isPortfolioArticle = entry.slug === "why-portfolio-site";

  return (
    <>
      <ReadingProgress />

      <div className="relative min-h-screen bg-[#000000] text-white">
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(191,142,255,0.06),transparent_70%)] blur-[80px]" />
        </div>

        <div className={`relative mx-auto px-6 pb-24 pt-20 md:px-8 lg:px-12 ${isPortfolioArticle ? "max-w-[980px]" : "max-w-[720px]"}`}>
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#thinking"
              className="inline-flex items-center gap-2 text-sm text-white/35 transition-colors hover:text-white/65"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M8 3L4 7L8 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              返回思考列表
            </Link>
          </motion.div>

          <motion.header
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-6 bg-[#bf8eff]/30" />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#bf8eff]/50">
                Thinking Notes
              </span>
            </div>
            <h1 className="cjk-title font-serif text-4xl font-bold leading-[1.15] text-white md:text-5xl lg:text-6xl">
              {entry.titleZh}
            </h1>
            <p className="mt-5 font-mono text-sm text-white/35">{entry.date}</p>
          </motion.header>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-8 text-lg leading-8 text-white/50"
          >
            {entry.summaryZh}
          </motion.p>

          {isPortfolioArticle && <NewsBriefing />}

          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose mt-12"
          >
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="cjk-card-title relative mt-14 mb-5 font-serif text-2xl font-bold text-white md:text-3xl">
                    <span className="absolute -left-4 top-2 h-5 w-1 rounded-full bg-[#bf8eff]/40 md:-left-6" />
                    {children}
                  </h2>
                ),
                p: ({ children }) => (
                  <p className="mb-5 text-base leading-[1.85] text-white/58">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-5 space-y-2.5 pl-5 text-base leading-relaxed text-white/58">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-5 space-y-2.5 pl-5 text-base leading-relaxed text-white/58">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-base leading-relaxed text-white/58 marker:text-white/25">
                    {children}
                  </li>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-white/82">{children}</strong>
                ),
                a: ({ children, href }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#bf8eff]/70 underline underline-offset-4 transition-colors hover:text-[#bf8eff]"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {entry.contentZh}
            </ReactMarkdown>
          </motion.article>

          <div className="mt-20 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

          <div className="mt-10 text-center">
            <Link
              href="/#thinking"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/40 transition-all hover:border-white/20 hover:text-white/70"
            >
              返回思考列表
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
