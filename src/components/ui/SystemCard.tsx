import { SystemItem } from "@/lib/types";
import { MediaDisplay } from "./MediaDisplay";

interface SystemCardProps {
  system: SystemItem;
  index: number;
}

export function SystemCard({ system, index }: SystemCardProps) {
  return (
    <div className="group relative">
      {/* Large translucent number — Feishu-style watermark */}
      <span className="absolute -top-8 -left-2 text-[140px] font-bold leading-none text-accent/[0.03] select-none pointer-events-none tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative rounded-2xl border border-border-light/50 bg-white transition-all duration-500 hover:border-accent/15 hover:shadow-lg hover:shadow-accent/[0.04]">
        <div className="p-8 md:p-10 lg:p-12">
          {/* Header */}
          <div className="flex items-start gap-4 md:gap-5 mb-10 lg:mb-12">
            <span className="text-xs font-mono text-accent/50 font-medium mt-0.5 shrink-0 tracking-wider">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                {system.nameZh}
              </h3>
              <p className="mt-2 text-sm md:text-base text-muted leading-relaxed max-w-2xl">
                {system.descriptionZh}
              </p>
            </div>
          </div>

          {/* Flow: Problem → Method → Result */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-0 items-start">
            {/* Problem */}
            <div className="relative pb-6 md:pb-0">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/15 shrink-0" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted-light font-medium">
                  问题
                </span>
              </div>
              <p className="text-sm text-foreground/75 leading-relaxed">
                {system.problemZh}
              </p>
              {/* Mobile divider */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 h-px bg-border-light/50" />
            </div>

            {/* Arrow 1 — hidden on mobile */}
            <div className="hidden md:flex items-start justify-center pt-5 px-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-border-light/50 shrink-0"
              >
                <path
                  d="M5 12H19M19 12L13 7M19 12L13 17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Method */}
            <div className="relative py-6 md:py-0">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/15 shrink-0" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted-light font-medium">
                  方法
                </span>
              </div>
              <p className="text-sm text-foreground/75 leading-relaxed">
                {system.methodZh}
              </p>
              {/* Mobile divider */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 h-px bg-border-light/50" />
            </div>

            {/* Arrow 2 — hidden on mobile */}
            <div className="hidden md:flex items-start justify-center pt-5 px-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-border-light/50 shrink-0"
              >
                <path
                  d="M5 12H19M19 12L13 7M19 12L13 17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Result — highlighted with accent background */}
            <div className="pt-6 md:pt-0 md:-my-4 md:-mr-4 md:py-5 md:px-5 md:rounded-xl md:bg-accent-surface/60 md:border md:border-accent/10">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-accent font-medium">
                  成果
                </span>
              </div>
              <p className="text-sm text-accent font-medium leading-relaxed">
                {system.resultZh}
              </p>
            </div>
          </div>
        </div>

        {/* Media */}
        {system.media.length > 0 && (
          <div className="border-t border-border-light/40 mx-8 md:mx-10 lg:mx-12 py-8">
            {system.media.map((m, i) => (
              <MediaDisplay key={i} media={m} />
            ))}
          </div>
        )}

        {/* Link */}
        {system.link && (
          <div className="border-t border-border-light/40 mx-8 md:mx-10 lg:mx-12 py-4 flex justify-end">
            <a
              href={system.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent/60 hover:text-accent font-medium transition-colors group/link"
            >
              了解更多
              <span className="inline-block text-base leading-none transition-transform duration-300 group-hover/link:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
