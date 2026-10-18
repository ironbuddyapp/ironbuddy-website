import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ForwardToWorkout } from "@/components/ForwardToWorkout";
import { pages } from "@/lib/pages";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

/**
 * ironbuddy.fit used to be the workout tracker's website. Any address that is not a page here is forwarded to the
 * same path on workout.ironbuddy.fit, so old links and bookmarks keep working.
 */
export default function NotFound() {
  return (
    <main id="main">
      <ForwardToWorkout />
      <Container>
        <div className="mx-auto max-w-2xl py-20 text-center sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">404</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Page not found</h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            This address is not on ironbuddy.fit. If you were looking for a workout tracker page, we are sending you to{" "}
            <a href={siteConfig.workoutUrl} className="text-primary underline-offset-4 hover:underline">
              {siteConfig.workoutUrl.replace("https://", "")}
            </a>
            .
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {[pages.home, pages.about, pages.contact].map((page) => (
              <li key={page.path}>
                <Link
                  href={page.path}
                  className="inline-flex min-h-11 items-center rounded-full border border-white/12 px-5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </main>
  );
}
