import { Icon } from "@/components/icons";
import type { FeatureIcon } from "@/lib/content";
import { cn } from "@/lib/cn";

export function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: FeatureIcon;
}) {
  return (
    <article className="group rounded-3xl border border-white/8 bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_60px_-32px_rgba(183,255,42,0.35)] sm:p-7">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary transition duration-300 group-hover:bg-primary group-hover:text-background">
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">{title}</h3>
      <p className={cn("mt-2 text-sm leading-relaxed text-muted")}>{description}</p>
    </article>
  );
}
