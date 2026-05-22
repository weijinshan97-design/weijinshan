import Link from "next/link";
import { ThinkingEntry } from "@/lib/types";

interface ThinkingPreviewProps {
  entry: ThinkingEntry;
}

export function ThinkingPreview({ entry }: ThinkingPreviewProps) {
  return (
    <Link
      href={`/thinking/${entry.slug}`}
      className="group block py-6 border-b border-border last:border-b-0 hover:bg-surface/60 transition-all -mx-4 px-4 rounded-lg"
    >
      <div className="flex items-baseline justify-between gap-6 mb-2">
        <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
          {entry.titleZh}
        </h3>
        <span className="text-xs text-muted-light whitespace-nowrap font-mono tabular-nums">
          {entry.date}
        </span>
      </div>
      <p className="text-sm text-muted leading-relaxed line-clamp-2 max-w-2xl">
        {entry.summaryZh}
      </p>
    </Link>
  );
}
