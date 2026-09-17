"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

const IN_APP_BROWSER = /FBAN|FBAV|FB_IAB|Instagram|TikTok|Bytedance|musical_ly|Twitter|Pinterest|Snapchat|Line\/|GSA\//i;

export function GooglePlayButton({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
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
      aria-label="Get IronBuddy on Google Play"
      className={cn(
        "inline-flex items-center justify-center rounded-[13px] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        compact ? "h-10" : "h-12 sm:h-[53px]",
        className,
      )}
    >
      <img
        src="/badges/google-play-badge.svg"
        alt=""
        width={180}
        height={53}
        decoding="async"
        className={cn("w-auto", compact ? "h-10" : "h-12 sm:h-[53px]")}
      />
    </a>
  );
}
