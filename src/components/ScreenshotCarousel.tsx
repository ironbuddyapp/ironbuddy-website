"use client";

import { useEffect, useRef, useState } from "react";
import { AppScreen, PhoneMockup } from "@/components/PhoneMockup";
import { Icon } from "@/components/icons";
import { screenshots } from "@/lib/content";
import { cn } from "@/lib/cn";

export function ScreenshotCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-slide]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = items.indexOf(visible.target as HTMLElement);
        if (index >= 0) setActive(index);
      },
      { root, threshold: 0.6 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (index: number) => {
    setActive(index);
    const root = scrollerRef.current;
    const target = root?.querySelectorAll<HTMLElement>("[data-slide]")[index];
    target?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 pt-2 sm:gap-8 sm:px-8"
        role="region"
        aria-roledescription="carousel"
        aria-label="App screenshots"
      >
        {screenshots.map((shot, index) => (
          <figure
            key={shot.id}
            data-slide
            className="snap-center shrink-0"
            aria-label={`${index + 1} of ${screenshots.length}: ${shot.label}`}
          >
            <PhoneMockup>
              <AppScreen id={shot.id} alt={shot.label} />
            </PhoneMockup>
            <figcaption className="mt-5 text-center text-sm font-medium text-white">
              {shot.label}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white transition hover:border-primary/40 hover:text-primary"
          aria-label="Previous screenshot"
          onClick={() => scrollTo(Math.max(active - 1, 0))}
        >
          <Icon name="chevronLeft" className="h-5 w-5" />
        </button>
        <div className="flex gap-2" role="tablist" aria-label="Screenshot slides">
          {screenshots.map((shot, index) => (
            <button
              key={shot.id}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-label={shot.label}
              className={cn(
                "h-2 rounded-full transition",
                active === index ? "w-7 bg-primary" : "w-2 bg-white/20 hover:bg-white/40",
              )}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white transition hover:border-primary/40 hover:text-primary"
          aria-label="Next screenshot"
          onClick={() => scrollTo(Math.min(active + 1, screenshots.length - 1))}
        >
          <Icon name="chevronRight" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
