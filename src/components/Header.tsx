"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GooglePlayButton } from "@/components/GooglePlayButton";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/icons";
import { Container } from "@/components/Container";
import { navItems } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const next = window.scrollY > 8;
        setScrolled((current) => (current === next ? current : next));
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition duration-300",
        scrolled || open
          ? "border-white/8 bg-background/80 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="IronBuddy home" className="relative z-10">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted lg:flex" aria-label="Primary">
          {navItems
            .filter((item) => item.label !== "Download")
            .map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white focus-visible:outline-none focus-visible:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <GooglePlayButton compact />
        </div>

        <button
          type="button"
          className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "x" : "menu"} className="h-5 w-5" />
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "lg:hidden",
          open ? "block border-t border-white/8 bg-background/95 backdrop-blur-xl" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-1 py-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-2xl px-4 py-3 text-base text-white/90 transition hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex justify-center px-4 pt-4">
            <GooglePlayButton />
          </div>
        </Container>
      </div>
    </header>
  );
}
