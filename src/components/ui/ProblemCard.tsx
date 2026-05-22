import { Problem } from "@/lib/types";
import { Tag } from "./Tag";

interface ProblemCardProps {
  problem: Problem;
  index: number;
}

export function ProblemCard({ problem, index }: ProblemCardProps) {
  return (
    <div className="group p-8 rounded-lg border border-border-light bg-white hover:border-border hover:shadow-sm transition-all duration-300">
      <div className="flex items-start gap-5">
        <span className="text-4xl md:text-5xl font-bold text-border-light tabular-nums leading-none select-none">
          {(index + 1).toString().padStart(2, "0")}
        </span>
        <div className="space-y-4 flex-1 pt-0.5">
          <div className="flex items-center gap-3">
            <Tag>{problem.category}</Tag>
          </div>

          <div>
            <span className="text-[11px] tracking-[0.2em] uppercase text-muted-light font-medium">
              问题
            </span>
            <p className="mt-1.5 text-sm text-foreground font-medium leading-relaxed">
              {problem.problem}
            </p>
          </div>

          <div>
            <span className="text-[11px] tracking-[0.2em] uppercase text-muted-light font-medium">
              解决方案
            </span>
            <p className="mt-1.5 text-sm text-muted leading-relaxed">
              {problem.solution}
            </p>
          </div>

          {problem.impact && (
            <div>
              <span className="text-[11px] tracking-[0.2em] uppercase text-muted-light font-medium">
                效果
              </span>
              <p className="mt-1.5 text-sm text-accent font-medium leading-relaxed">
                {problem.impact}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
