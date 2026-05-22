import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { worksData } from "@/data/works";
import { Tag } from "@/components/ui/Tag";

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
    <div className="pt-24 pb-16 px-6 md:px-8 lg:px-12">
      <div className="max-w-[900px] mx-auto">
        <Link
          href="/#work"
          className="text-sm text-muted hover:text-foreground transition-colors inline-block mb-8"
        >
          ← 返回
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <Tag>{work.category}</Tag>
          <span className="text-xs text-muted-light">{work.client} · {work.year}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8">
          {work.titleZh}
        </h1>

        {/* Cover image */}
        <div className="aspect-[16/9] relative overflow-hidden rounded-lg bg-surface mb-12">
          <Image
            src={work.cover}
            alt={work.titleZh}
            fill
            className="object-cover"
            sizes="(max-width: 900px) 100vw, 900px"
            priority
          />
        </div>

        {/* Problem / Approach / Result */}
        <div className="space-y-10 mb-16">
          <section>
            <h2 className="text-xs tracking-[0.2em] uppercase text-muted-light font-medium mb-3">
              问题
            </h2>
            <p className="text-base text-foreground leading-relaxed">
              {work.problemZh}
            </p>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.2em] uppercase text-muted-light font-medium mb-3">
              方法
            </h2>
            <p className="text-base text-foreground leading-relaxed">
              {work.approachZh}
            </p>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.2em] uppercase text-muted-light font-medium mb-3">
              结果
            </h2>
            <p className="text-base text-accent font-medium leading-relaxed">
              {work.resultZh}
            </p>
          </section>
        </div>

        {/* Gallery */}
        {work.images.length > 0 && (
          <div className="space-y-8">
            <h2 className="text-xs tracking-[0.2em] uppercase text-muted-light font-medium">
              更多图片
            </h2>
            {work.images.map((img, i) => (
              <div
                key={i}
                className="aspect-[16/9] relative overflow-hidden rounded-lg bg-surface"
              >
                <Image
                  src={img}
                  alt={`${work.titleZh} - ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 900px) 100vw, 900px"
                />
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {work.tagsZh.map((tag) => (
              <Tag key={tag} variant="filled">{tag}</Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
