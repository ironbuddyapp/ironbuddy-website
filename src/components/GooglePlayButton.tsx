"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

const IN_APP_BROWSER = /FBAN|FBAV|FB_IAB|Instagram|TikTok|Bytedance|musical_ly|Twitter|Pinterest|Snapchat|Line\/|GSA\//i;

export function GooglePlayButton({
  className,
  compact = false,
  lazy = false,
}: {
  className?: string;
  compact?: boolean;
  /** Set for instances below the fold so the badge does not compete with the hero image. */
  lazy?: boolean;
}) {
  const [href, setHref] = useState<string>(siteConfig.playStoreUrl);

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/Android/i.test(ua) && IN_APP_BROWSER.test(ua)) {
      setHref(siteConfig.playStoreIntent);
    }
  }, []);

  return (
    <a
      href={href}
      target="_self"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-[13px] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        compact ? "h-10" : "h-12 sm:h-[53px]",
        className,
      )}
    >
      {/* The alt text is the link's accessible name and the anchor text search engines read. */}
      <img
        src="/badges/google-play-badge.svg"
        alt="Get IronBuddy on Google Play"
        width={180}
        height={53}
        decoding="async"
        loading={lazy ? "lazy" : undefined}
        className={cn("w-auto", compact ? "h-10" : "h-12 sm:h-[53px]")}
      />
    </a>
  );
}
