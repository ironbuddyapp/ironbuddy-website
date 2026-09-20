import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.15" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.15" cy="6.85" r="1.05" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.2 3h2.72a5.86 5.86 0 0 0 1.1 3.38 5.9 5.9 0 0 0 3.48 1.72v2.76a8.5 8.5 0 0 1-4.58-1.34v6.7a6.18 6.18 0 1 1-6.18-6.18c.3 0 .6.03.88.08v2.86a3.32 3.32 0 1 0 2.3 3.16V3Z" />
    </svg>
  );
}

const socials = [
  { name: "IronBuddy on Instagram", href: siteConfig.instagramUrl, Icon: InstagramIcon },
  { name: "IronBuddy on TikTok", href: siteConfig.tiktokUrl, Icon: TikTokIcon },
] as const;

export function SocialLinks({ className }: { className?: string }) {
  return (
    <nav aria-label="Social" className={cn("flex items-center justify-center gap-3", className)}>
      {socials.map(({ name, href, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/85 transition hover:border-white/25 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </nav>
  );
}
