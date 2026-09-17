import { Icon } from "@/components/icons";
import { comparisonRows } from "@/lib/content";
import { cn } from "@/lib/cn";

export function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/8 bg-surface">
      <table className="w-full border-collapse">
        <caption className="sr-only">
          IronBuddy compared with typical fitness apps on offline use, accounts, pricing, ads, and privacy
        </caption>
        <thead>
          <tr className="border-b border-white/8 bg-white/[0.02] text-[11px] font-semibold uppercase tracking-[0.16em] text-muted sm:text-xs">
            <th scope="col" className="px-3 py-3 text-left sm:px-8 sm:py-4">
              <span className="sr-only sm:not-sr-only">Feature</span>
            </th>
            <th scope="col" className="px-3 py-3 text-center text-primary sm:px-8 sm:py-4">
              IronBuddy
            </th>
            <th scope="col" className="px-3 py-3 text-center sm:px-8 sm:py-4">
              Typical Fitness Apps
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row, index) => (
            <tr
              key={row.feature}
              className={cn(index !== comparisonRows.length - 1 && "border-b border-white/8")}
            >
              <th
                scope="row"
                className="px-3 py-2.5 text-left text-sm font-medium text-white sm:px-8 sm:py-4 sm:text-base"
              >
                {row.feature}
              </th>
              <td className="px-3 py-2.5 sm:px-8 sm:py-4">
                <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <Icon name="check" className="h-4 w-4" />
                  <span className="sr-only">Yes</span>
                </span>
              </td>
              <td className="px-3 py-2.5 sm:px-8 sm:py-4">
                <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-muted">
                  <Icon name="close" className="h-4 w-4" />
                  <span className="sr-only">No</span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
