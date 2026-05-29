"use client";

import Image from "next/image";
import Link from "next/link";
import { worksData } from "@/data/works";
import { Work } from "@/lib/types";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

function CreatorCaseCard({
  work,
  index,
  compact = false,
}: {
  work: Work;
  index: number;
  compact?: boolean;
}) {
  const caseNumber = String(index + 1).padStart(2, "0");

  return (
    <Link href={`/work/${work.slug}`} className="group block h-full">
      <article
        className={`relative flex h-full flex-col overflow-hidden rounded-[1.45rem] bg-[#202020] p-5 text-white shadow-[0_24px_70px_rgba(15,15,15,0.1)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#1b1b1b] hover:shadow-[0_34px_100px_rgba(15,15,15,0.16)] md:p-8 ${
          compact ? "min-h-[380px] lg:min-h-[500px]" : "min-h-[420px] md:min-h-[560px]"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(rgba(255,255,255,0.85)_1px,transparent_1px)] [background-size:8px_8px]" />

        <div className="relative z-10">
          <div
            className={`relative ml-auto w-full overflow-hidden rounded-[0.9rem] bg-[#111] shadow-[0_22px_58px_rgba(0,0,0,0.24)] ${
              compact ? "aspect-[1.55]" : "aspect-[1.6]"
            }`}
          >
            <Image
              src={work.cover}
              alt={work.titleZh}
              fill
              sizes={compact ? "(max-width: 1024px) 100vw, 33vw" : "(max-width: 1024px) 100vw, 50vw"}
              className="object-cover opacity-90 saturate-[0.82] transition duration-700 group-hover:scale-[1.035] group-hover:opacity-100 group-hover:saturate-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-white/5" />
          </div>
        </div>

        <div className="relative z-10 mt-auto pt-10">
          <div className="flex items-end justify-between gap-5">
            <h3
              className={`font-semibold leading-[1.12] tracking-normal text-white ${
                compact
                  ? "text-xl md:text-2xl"
                  : "max-w-[560px] text-3xl md:text-4xl leading-[1.08]"
              }`}
            >
              {work.titleZh}
            </h3>
            <span className="shrink-0 font-mono text-4xl font-bold leading-none text-white/18 md:text-5xl">
              {caseNumber}
            </span>
          </div>

          <div className="mt-6 md:mt-8 grid gap-3 text-sm font-light text-white/70 md:grid-cols-[1fr_auto] md:text-base">
            <p className="min-w-0 truncate">{work.client}</p>
            <p className="shrink-0 text-white/70">{work.year}</p>
          </div>

          <div className="mt-7 border-t border-white/8 pt-6">
            <p className="max-w-xl text-sm leading-6 text-white/42 line-clamp-2">
              {work.summaryZh}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {work.tagsZh.slice(0, compact ? 3 : 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-white/42"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export function SelectedWork() {
  const firstRows = worksData.slice(0, 4);
  const lastRow = worksData.slice(4);

  return (
    <section
      id="work"
      className="px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-14 lg:px-12"
    >
      <div className="mx-auto max-w-[1480px]">
        <FadeIn>
          <SectionHeading
            label="Selected Work / Case Studies"
            title="精选商业案例"
          />
          <p className="-mt-8 mb-12 text-sm md:text-base text-muted leading-7">
            从真实业务问题出发，整理 AI 产品、品牌系统、IP 设计和自驱项目中的关键判断。
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {firstRows.map((work, index) => (
            <FadeIn key={work.slug} delay={index * 0.04}>
              <CreatorCaseCard work={work} index={index} />
            </FadeIn>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {lastRow.map((work, index) => (
            <FadeIn key={work.slug} delay={(index + 4) * 0.04}>
              <CreatorCaseCard work={work} index={index + 4} compact />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
