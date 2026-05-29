import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { thinkingData } from "@/data/thinking";

interface ThinkingPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ThinkingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = thinkingData.find((t) => t.slug === slug);
  if (!entry) return {};

  return {
    title: `${entry.titleZh} — 魏晋山`,
    description: entry.summaryZh,
    openGraph: {
      title: `${entry.titleZh} — 魏晋山`,
      description: entry.summaryZh,
      url: `https://jinshan.design/thinking/${entry.slug}`,
      type: "article",
    },
  };
}

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
    <section className="my-12 rounded-3xl bg-[#070808] p-5 md:p-7 shadow-[0_24px_90px_rgba(0,0,0,0.18)]">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/34">
            News Briefing
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-white md:text-3xl">
            AI 浪潮正在改写工作现场
          </h2>
        </div>
        <span className="hidden rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/32 md:inline-flex">
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
            className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] transition-all duration-500 hover:-translate-y-1 hover:border-[#d68b38]/24 hover:bg-white/[0.065]"
          >
            <div className="border-b border-white/10 bg-white/[0.035] px-4 py-3">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/36">
                  {clip.source}
                </span>
                <span className="font-mono text-xs text-white/24">{clip.year}</span>
              </div>
            </div>

            <div className="relative min-h-[220px] p-5">
              <div className="absolute right-4 top-4 font-mono text-5xl font-bold leading-none text-white/[0.055]">
                {clip.metric}
              </div>
              <div className="relative z-10">
                <div className="mb-5 h-24 rounded-xl border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.11),rgba(255,255,255,0.025)),radial-gradient(circle_at_72%_28%,rgba(214,139,56,0.22),transparent_35%)] p-4">
                  <div className="h-2 w-24 rounded-full bg-white/18" />
                  <div className="mt-4 h-2 w-40 rounded-full bg-white/10" />
                  <div className="mt-2 h-2 w-28 rounded-full bg-white/8" />
                </div>
                <h3 className="text-base font-semibold leading-7 text-white/88">
                  {clip.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/48">
                  {clip.note}
                </p>
                <span className="mt-5 inline-flex text-xs text-[#d68b38]/62 transition-transform duration-300 group-hover:translate-x-1">
                  查看来源 -&gt;
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return thinkingData.map((t) => ({ slug: t.slug }));
}

export default async function ThinkingPage({ params }: ThinkingPageProps) {
  const { slug } = await params;
  const entry = thinkingData.find((t) => t.slug === slug);

  if (!entry) notFound();
  const isPortfolioArticle = entry.slug === "why-portfolio-site";

  return (
    <div className="pt-24 pb-16 px-6 md:px-8 lg:px-12">
      <div className={`${isPortfolioArticle ? "max-w-[980px]" : "max-w-[720px]"} mx-auto`}>
        <Link
          href="/#thinking"
          className="text-sm text-muted hover:text-foreground transition-colors inline-block mb-8"
        >
          ← 返回
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
          {entry.titleZh}
        </h1>
        <p className="text-sm text-muted-light font-mono mb-12">{entry.date}</p>

        {isPortfolioArticle && <NewsBriefing />}

        <article className="prose max-w-[720px]">
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="text-xl font-semibold text-foreground mt-12 mb-4">
                  {children}
                </h2>
              ),
              p: ({ children }) => (
                <p className="text-base text-muted leading-relaxed mb-4">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 space-y-2 mb-4 text-base text-muted leading-relaxed">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-6 space-y-2 mb-4 text-base text-muted leading-relaxed">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-base text-muted leading-relaxed">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-medium text-foreground">{children}</strong>
              ),
              a: ({ children, href }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent underline underline-offset-4"
                >
                  {children}
                </a>
              ),
            }}
          >
            {entry.contentZh}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
