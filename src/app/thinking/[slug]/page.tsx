import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { thinkingData } from "@/data/thinking";

interface ThinkingPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return thinkingData.map((t) => ({ slug: t.slug }));
}

export default async function ThinkingPage({ params }: ThinkingPageProps) {
  const { slug } = await params;
  const entry = thinkingData.find((t) => t.slug === slug);

  if (!entry) notFound();

  return (
    <div className="pt-24 pb-16 px-6 md:px-8 lg:px-12">
      <div className="max-w-[720px] mx-auto">
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

        <article className="prose">
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
            }}
          >
            {entry.contentZh}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
