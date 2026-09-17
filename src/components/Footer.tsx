import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="below-fold border-t border-white/8 bg-background">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted">{siteConfig.tagline}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
          <Link href="/privacy/" className="transition hover:text-white">
            Privacy Policy
          </Link>
          <a href={`mailto:${siteConfig.contactEmail}`} className="transition hover:text-white">
            Contact
          </a>
          <a
            href={siteConfig.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            Google Play
          </a>
        </nav>
      </Container>
      <Container className="border-t border-white/8 py-6">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} IronBuddy. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
