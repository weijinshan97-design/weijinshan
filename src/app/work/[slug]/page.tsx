import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { worksData } from "@/data/works";
import { WbitCaseFrame } from "@/components/ui/WbitCaseFrame";

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return worksData.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = worksData.find((w) => w.slug === slug);
  if (!work) return {};

  return {
    title: `${work.titleZh} — 魏晋山`,
    description: work.summaryZh,
    openGraph: {
      title: `${work.titleZh} — 魏晋山`,
      description: work.summaryZh,
      url: `https://jinshan.design/work/${work.slug}`,
      type: "article",
    },
  };
}

function WbitDeepDive() {
  /*
    Wbit 特殊详情页
    - 这里只负责把 Wbit 独立案例挂到 /work/wbit-ai-platform
    - 具体页面内容在 public/wbit-case-study/index.html
    - 具体样式在 public/wbit-case-study/styles.css
  */
  return (
    <section className="bg-[#050606] pt-20 md:pt-24">
      <WbitCaseFrame />
    </section>
  );
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = worksData.find((w) => w.slug === slug);

  if (!work) notFound();

  const heroCover = work.heroCover ?? work.cover;
  const isWbit = work.slug === "wbit-ai-platform";

  const insightCards = [
    {
      num: "01",
      label: "Problem",
      title: "问题",
      text: work.problemZh,
    },
    {
      num: "02",
      label: "Approach",
      title: "方法",
      text: work.approachZh,
    },
    {
      num: "03",
      label: "Outcome",
      title: "成果",
      text: work.resultZh,
      accent: true,
    },
  ];

  return (
    <>
      {/* Hero — clean dark header */}
      {!isWbit && (
        <section className="relative bg-[#0a0a0a] pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-8 lg:px-12">
          <div className="max-w-[1100px] mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-8 bg-white/25" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-white/40 font-medium">
                {work.client}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/12" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-white/40 font-medium">
                {work.year}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/12" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-white/40 font-medium">
                {work.category}
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[0.94] max-w-4xl">
              {work.titleZh}
            </h1>
            <p className="mt-5 text-sm md:text-base text-white/30 leading-relaxed max-w-2xl font-light">
              {work.summaryZh}
            </p>
          </div>
        </section>
      )}

      {/* Content — three sections */}
      {!isWbit && (
        <section className="px-6 md:px-8 lg:px-12 py-12 md:py-20">
          <div className="max-w-[1080px] mx-auto">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-10">
              {insightCards.map((card) => (
                <div key={card.num}>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#4035e1]/60">
                      {card.num}
                    </span>
                    <span className="h-px flex-1 bg-white/[0.06]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4035e1]/70">
                      {card.label}
                    </span>
                  </div>
                  <h2 className="font-serif text-xl font-bold text-white mb-3">
                    {card.title}
                  </h2>
                  <p className="text-sm text-white/50 leading-7">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Design Highlights */}
      {!isWbit && work.highlights && work.highlights.length > 0 && (
        <section className="px-6 md:px-8 lg:px-12 pb-8 md:pb-16">
          <div className="max-w-[1080px] mx-auto">
            <span className="text-[10px] tracking-[0.25em] uppercase text-white/15 font-medium">
              设计亮点
            </span>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {work.highlights.map((h, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/[0.02] border border-white/[0.04] p-7 md:p-8 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.08]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-6 rounded-full bg-white/[0.04] flex items-center justify-center text-[10px] text-white/25 font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs tracking-[0.15em] text-white/40 font-medium">
                      {h.label}
                    </span>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {h.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {isWbit && <WbitDeepDive />}

      {/* Video */}
      {work.videoUrl && (
        <section className="px-6 md:px-8 lg:px-12 pb-8 md:pb-12">
          <div className="max-w-[1080px] mx-auto">
            <span className="text-[10px] tracking-[0.25em] uppercase text-white/15 font-medium">
              项目视频
            </span>
            <div className="mt-8">
              {work.slug === "self-driven-design" ? (
                <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="//player.bilibili.com/player.html?bvid=BV1sDVa6vEkR&page=1&high_quality=1&danmaku=0"
                    scrolling="no"
                    frameBorder="no"
                    allowFullScreen={true}
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              ) : (
                <video
                  src={work.videoUrl}
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-auto rounded-xl"
                />
              )}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {!isWbit && work.images.length > 0 && (
        <section className="px-6 md:px-8 lg:px-12 pb-16 md:pb-24">
          <div className="max-w-[1080px] mx-auto">
            <span className="text-[10px] tracking-[0.25em] uppercase text-white/15 font-medium">
              项目图片
            </span>
            <div className="mt-8 space-y-8">
              {work.images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`${work.titleZh} — 项目图片 ${i + 1}`}
                  width={1080}
                  height={720}
                  className="w-full h-auto rounded-xl"
                  sizes="(max-width: 768px) 100vw, 1080px"
                  priority={i === 0}
                />
              ))}
            </div>

            {work.slug === "self-driven-design" && (
              <div className="mt-10 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.035] px-6 py-7 md:px-9 md:py-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/22">
                      More Self-Driven Design
                    </span>
                    <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight text-white md:text-3xl">
                      内容运营也是设计实验
                    </h2>
                  </div>
                  <p className="max-w-2xl text-sm leading-7 text-white/42 md:text-right">
                    除了工具化设计与 AI 协作，我也持续在小红书、抖音等内容平台进行自驱运营实验。
                    从选题、封面、标题、发布节奏到数据反馈，把视觉判断转化为可被传播和验证的内容系统。
                  </p>
                </div>
              </div>
            )}

            {work.afterNoteImages && work.afterNoteImages.length > 0 && (
              <div className="mt-8 space-y-8">
                {work.afterNoteImages.map((img, i) => (
                  <Image
                    key={img}
                    src={img}
                    alt={`${work.titleZh} — 延展图片 ${i + 1}`}
                    width={1080}
                    height={720}
                    className="w-full h-auto rounded-xl"
                    sizes="(max-width: 768px) 100vw, 1080px"
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Tags */}
      <section className="px-6 md:px-8 lg:px-12 pb-20 md:pb-28">
        <div className="max-w-[720px] mx-auto">
          <div className="pt-10 border-t border-white/5 flex flex-wrap justify-center gap-2">
            {work.tagsZh.map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1.5 text-[11px] rounded-full border border-white/8 text-white/30 transition-all duration-300 hover:border-white/15 hover:text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
