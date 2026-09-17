import { cn } from "@/lib/cn";
import type { ScreenshotId } from "@/lib/content";

export function PhoneMockup({
  children,
  className,
  float = false,
}: {
  children: React.ReactNode;
  className?: string;
  float?: boolean;
}) {
  return (
    <div className={cn("relative mx-auto w-[240px] sm:w-[270px] lg:w-[292px]", className)}>
      <div
        className={cn(
          "relative aspect-[9/19.5] overflow-hidden rounded-[2.35rem] border border-white/12 bg-black p-[7px] shadow-[0_40px_90px_-24px_rgba(0,0,0,0.85)]",
          float && "animate-float",
        )}
      >
        <div className="relative h-full overflow-hidden rounded-[1.95rem] bg-surface">
          {children}
        </div>
      </div>
    </div>
  );
}

export function AppScreen({ id, alt }: { id: ScreenshotId; alt: string }) {
  return (
    <img
      src={`/screenshots/${id}.png`}
      alt={alt}
      width={1080}
      height={2400}
      className="h-full w-full object-cover object-top"
    />
  );
}
