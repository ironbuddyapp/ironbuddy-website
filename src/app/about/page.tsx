import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pages } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { pageGraph, trail } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata(pages.about);

const linkClass =
  "text-primary underline decoration-primary/40 underline-offset-4 transition hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

export default function AboutPage() {
  const crumbs = trail(pages.home, pages.about);
  return (
    <main id="main">
      <JsonLd data={pageGraph(pages.about, { trail: crumbs, type: "AboutPage" })} />
      <PageHero
        trail={crumbs}
        eyebrow="About"
        title="Small apps, made to be trusted"
        lead="IronBuddy makes offline Android apps for people who train. We build them to do one job well, keep your data on your phone and charge once instead of every month."
        updated={pages.about.modified}
      >
        {siteConfig.workout.live ? (
          <div>
            <a
              href={siteConfig.workout.playStoreLinkUrl}
              rel="noopener noreferrer"
              className="inline-flex rounded-[13px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <img
                src="/badges/google-play-badge.svg"
                alt={`Get ${siteConfig.workout.name} on Google Play`}
                width={180}
                height={53}
                decoding="async"
                className="h-12 w-auto"
              />
            </a>
            <p className="mt-3 text-sm text-muted">
              {siteConfig.workout.name}. Free {siteConfig.freeTrialDays}-day trial, then a one-time purchase. iPhone app
              coming soon.
            </p>
          </div>
        ) : null}
      </PageHero>
      <Container>
        <div className="mx-auto max-w-3xl space-y-10 pb-20 text-base leading-relaxed text-white/80">
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">What we make</h2>
            <p className="mt-3">
              Two apps today. <a href={siteConfig.workoutUrl} className={linkClass}>{siteConfig.workout.name}</a> is a gym
              log with training splits, progressive overload and progress charts, and it is on Google Play now.{" "}
              <a href={siteConfig.nutritionUrl} className={linkClass}>{siteConfig.nutrition.name}</a> is a calorie and
              macro tracker that reads a photo of your plate, scans a barcode or takes grams from your kitchen scale, and
              it is coming to Google Play.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">What we promise</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Offline. The apps work with no connection and never send your logs, photos or weight to us.</li>
              <li>
                Pay once. Each app has a free {siteConfig.freeTrialDays}-day trial and then one purchase on Google Play.
                No subscription.
              </li>
              <li>No account, no ads and no analytics inside the apps.</li>
              <li>Honest numbers. If a figure is a guess, the app says so.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">Where to find things</h2>
            <p className="mt-3">
              Every app has its own website with features, help and its own privacy policy:{" "}
              <a href={`${siteConfig.workoutUrl}/privacy/`} className={linkClass}>workout tracker privacy policy</a> and{" "}
              <a href={`${siteConfig.nutritionUrl}/privacy/`} className={linkClass}>nutrition tracker privacy policy</a>.
              This site, ironbuddy.fit, is the home of the IronBuddy name. Links to the workout tracker&apos;s old pages
              on this address forward to {siteConfig.workoutUrl.replace("https://", "")}.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">Talk to us</h2>
            <p className="mt-3">
              Questions, bugs, ideas or press: write to{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className={linkClass}>{siteConfig.contactEmail}</a>, or see{" "}
              <Link href={pages.contact.path} className={linkClass}>Contact</Link>.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
