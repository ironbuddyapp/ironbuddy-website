import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-[0_0_24px_rgba(183,255,42,0.28)]">
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] text-background" fill="currentColor" aria-hidden="true">
          <rect x="2.2" y="9.1" width="3.6" height="5.8" rx="1.2" />
          <rect x="18.2" y="9.1" width="3.6" height="5.8" rx="1.2" />
          <rect x="5.4" y="10.2" width="13.2" height="3.6" rx="1.8" />
        </svg>
      </span>
      <span className="text-[15px] font-semibold tracking-tight text-white">IronBuddy</span>
    </span>
  );
}
