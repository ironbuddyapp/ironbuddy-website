import Link from "next/link";
import { Container } from "@/components/Container";
import { GooglePlayButton } from "@/components/GooglePlayButton";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export function Download() {
  return (
    <section id="download" className="max-lg:scroll-mt-0 max-lg:justify-center max-lg:py-0 lg:scroll-mt-24 lg:pb-32 lg:pt-8 sm:pb-32">
      <Container className="flex h-full min-h-0 flex-col justify-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-surface px-6 py-10 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(183,255,42,0.14),transparent_55%)]" />
            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                Download
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Pay Once. Train Forever.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-lg">
                One purchase. No subscription. Your workouts stay on your phone — ready every time you walk into the gym.
              </p>
              <div className="mt-8 flex justify-center">
                <GooglePlayButton />
              </div>
              <nav
                aria-label="Legal"
                className="mt-8 flex justify-center gap-5 text-sm text-muted lg:hidden"
              >
                <Link href="/privacy/" className="transition hover:text-white">
                  Privacy Policy
                </Link>
                <a href={`mailto:${siteConfig.contactEmail}`} className="transition hover:text-white">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
