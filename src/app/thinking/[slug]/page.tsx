import type { Metadata } from "next";
import { thinkingData } from "@/data/thinking";
import { ThinkingPageClient } from "./client";

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

export function generateStaticParams() {
  return thinkingData.map((t) => ({ slug: t.slug }));
}

export default async function ThinkingPage({ params }: ThinkingPageProps) {
  const { slug } = await params;
  return <ThinkingPageClient slug={slug} />;
}
