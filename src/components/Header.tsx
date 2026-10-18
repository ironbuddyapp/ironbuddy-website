"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { Icon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/cn";
import { navItems } from "@/lib/content";

const withTrailingSlash = (path: string) => (path.endsWith("/") ? path : `${path}/`);

function NavLink({
  item,
  current,
  className,
  onClick,
}: {
  item: (typeof navItems)[number];
  current: boolean;
  className: string;
  onClick?: () => void;
}) {
  if (item.external) {
    return (
      <a href={item.href} className={className} onClick={onClick}>
        {item.label}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className} onClick={onClick} aria-current={current ? "page" : undefined}>
      {item.label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentPath = withTrailingSlash(pathname ?? "/");

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
        scrolled || open ? "border-white/8 bg-background/80 backdrop-blur-xl" : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="IronBuddy home" className="relative z-10">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const current = !item.external && currentPath === withTrailingSlash(item.href);
            return (
              <NavLink
                key={item.href}
                item={item}
                current={current}
                className={cn(
                  "inline-flex min-h-11 items-center transition hover:text-white focus-visible:text-white focus-visible:outline-none",
                  current && "text-white",
                )}
              />
            );
          })}
        </nav>

        <button
          type="button"
          className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
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
        className={cn("md:hidden", open ? "block border-t border-white/8 bg-background/95 backdrop-blur-xl" : "hidden")}
      >
        <Container className="flex flex-col gap-1 py-6">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              current={!item.external && currentPath === withTrailingSlash(item.href)}
              className="rounded-2xl px-4 py-3 text-base text-white/90 transition hover:bg-white/5"
              onClick={() => setOpen(false)}
            />
          ))}
        </Container>
      </div>
    </header>
  );
}
