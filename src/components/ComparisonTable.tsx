import { Icon } from "@/components/icons";
import { comparisonRows } from "@/lib/content";
import { cn } from "@/lib/cn";

export function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/8 bg-surface">
      <div className="grid grid-cols-[1.2fr_0.9fr_0.9fr] border-b border-white/8 bg-white/[0.02] px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted sm:px-8 sm:text-xs">
        <span className="sr-only sm:not-sr-only sm:inline">Feature</span>
        <span className="text-center text-primary">IronBuddy</span>
        <span className="text-center">Typical Fitness Apps</span>
      </div>
      {comparisonRows.map((row, index) => (
        <div
          key={row.feature}
          className={cn(
            "grid grid-cols-[1.2fr_0.9fr_0.9fr] items-center px-4 py-4 sm:px-8",
            index !== comparisonRows.length - 1 && "border-b border-white/8",
          )}
        >
          <span className="pr-3 text-sm font-medium text-white sm:text-base">{row.feature}</span>
          <span className="flex justify-center">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/12 text-primary">
              <Icon name="check" className="h-4 w-4" />
              <span className="sr-only">Yes</span>
            </span>
          </span>
          <span className="flex justify-center">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-muted">
              <Icon name="close" className="h-4 w-4" />
              <span className="sr-only">No</span>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}
