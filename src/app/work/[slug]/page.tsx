import { notFound } from "next/navigation";
import { worksData } from "@/data/works";

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return worksData.map((w) => ({ slug: w.slug }));
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = worksData.find((w) => w.slug === slug);

  if (!work) notFound();

  return (
    <>
      {/* Hero — full bleed cover */}
      <section className="relative h-[55vh] md:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${work.cover})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/20" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14">
          <div className="max-w-[900px] mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/35 font-medium">
                {work.client}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/15" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/35 font-medium">
                {work.year}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/15" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/35 font-medium">
                {work.category}
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08] max-w-3xl">
              {work.titleZh}
            </h1>
            <p className="mt-5 text-sm md:text-base text-white/35 leading-relaxed max-w-xl">
              {work.summaryZh}
            </p>
          </div>
        </div>
      </section>

      {/* Content — three cards */}
      <section className="px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="max-w-[1080px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Problem */}
            <div className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.04] p-7 md:p-8 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.08]">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/15 font-medium">
                问题
              </span>
              <span className="block mt-5 text-[56px] font-bold leading-none text-white/[0.03] select-none">
                01
              </span>
              <p className="mt-4 text-sm md:text-base text-white/55 leading-relaxed">
                {work.problemZh}
              </p>
            </div>

            {/* Approach */}
            <div className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.04] p-7 md:p-8 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.08]">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/15 font-medium">
                方法
              </span>
              <span className="block mt-5 text-[56px] font-bold leading-none text-white/[0.03] select-none">
                02
              </span>
              <p className="mt-4 text-sm md:text-base text-white/55 leading-relaxed">
                {work.approachZh}
              </p>
            </div>

            {/* Result */}
            <div className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.04] p-7 md:p-8 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.08]">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/15 font-medium">
                成果
              </span>
              <span className="block mt-5 text-[56px] font-bold leading-none text-white/[0.03] select-none">
                03
              </span>
              <p className="mt-4 text-sm md:text-base text-white/55 leading-relaxed">
                {work.resultZh}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Highlights */}
      {work.highlights && work.highlights.length > 0 && (
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

      {/* Video */}
      {work.videoUrl && (
        <section className="px-6 md:px-8 lg:px-12 pb-8 md:pb-12">
          <div className="max-w-[1080px] mx-auto">
            <span className="text-[10px] tracking-[0.25em] uppercase text-white/15 font-medium">
              项目视频
            </span>
            <div className="mt-8">
              <video
                src={work.videoUrl}
                controls
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {work.images.length > 0 && (
        <section className="px-6 md:px-8 lg:px-12 pb-16 md:pb-24">
          <div className="max-w-[1080px] mx-auto">
            <span className="text-[10px] tracking-[0.25em] uppercase text-white/15 font-medium">
              项目图片
            </span>
            <div className="mt-8 space-y-8">
              {work.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${work.titleZh} — 项目图片 ${i + 1}`}
                  className="w-full h-auto rounded-xl"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tags */}
      <section className="px-6 md:px-8 lg:px-12 pb-20 md:pb-28">
        <div className="max-w-[720px] mx-auto">
          <div className="pt-10 border-t border-white/5 flex flex-wrap gap-2">
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
