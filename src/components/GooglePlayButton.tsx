import { Icon } from "@/components/icons";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

export function GooglePlayButton({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <a
      href={siteConfig.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-full bg-primary font-semibold text-background transition duration-300 hover:bg-[#c8ff57] hover:shadow-[0_0_32px_rgba(183,255,42,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        compact ? "h-10 px-4 text-sm" : "h-12 px-6 text-sm sm:px-7",
        className,
      )}
    >
      <Icon name="play" className="h-3.5 w-3.5" />
      Download on Google Play
    </a>
  );
}
