import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContentSection, BulletList, Strong, TextLink } from "@/components/content";
import { CtaBanner, HeroCta } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { KeyFacts } from "@/components/KeyFacts";
import { PageHero } from "@/components/PageHero";
import { AppScreen, PhoneMockup } from "@/components/PhoneMockup";
import { RelatedLinks } from "@/components/RelatedLinks";
import type { ScreenshotId } from "@/lib/content";
import { cn } from "@/lib/cn";
import { pages } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { pageGraph, trail } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata(pages.features);

/** A feature explained in words next to the real screen it describes. */
function FeatureBlock({
  id,
  title,
  shot,
  flip = false,
  children,
}: {
  id: string;
  title: string;
  shot: ScreenshotId;
  flip?: boolean;
  children: React.ReactNode;
}) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-[1fr_292px] lg:gap-16"
    >
      <div className={cn(flip && "lg:order-2")}>
        <h2
          id={headingId}
          className="text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem]"
        >
          {title}
        </h2>
        <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-muted sm:text-base">
          {children}
        </div>
      </div>
      <PhoneMockup className={cn(flip && "lg:order-1")}>
        <AppScreen id={shot} />
      </PhoneMockup>
    </section>
  );
}

export default function FeaturesPage() {
  const crumbs = trail(pages.home, pages.features);

  return (
    <main id="main">
      <JsonLd data={pageGraph(pages.features, { trail: crumbs, about: "app" })} />
      <PageHero
        wide
        trail={crumbs}
        eyebrow="Features"
        title="Workout log, training splits and progressive overload tracking in one offline app"
        updated={pages.features.modified}
        lead="IronBuddy is an Android workout tracker built around what lifters actually do at the gym: log sets, follow a training split, and check whether the numbers are going up. It works offline, needs no account, and has no ads or subscription."
      >
        <HeroCta />
      </PageHero>

      <Container>
        <div className="mx-auto max-w-5xl space-y-16 pb-20 sm:space-y-24 sm:pb-24">
          <div className="max-w-3xl">
            <KeyFacts
              id="at-a-glance"
              title="IronBuddy at a glance"
              items={[
                { term: "Platform", detail: "Android, through Google Play. Not available on iPhone yet." },
                {
                  term: "Works offline",
                  detail: "Yes. Logging, workout history and the exercise library need no internet connection.",
                },
                { term: "Account", detail: "None. There is no sign-up or sign-in." },
                { term: "Ads", detail: "None." },
                {
                  term: "Pricing",
                  detail: `Free to download with a ${siteConfig.freeTrialDays}-day free trial that includes a starter selection of splits and exercises. After the trial, a one-time in-app purchase of ${siteConfig.price.label} unlocks everything and is required to keep using the app. No subscription.`,
                },
                {
                  term: "Your data",
                  detail: "Stored on your device and not sent to IronBuddy servers.",
                },
                { term: "Units", detail: "Kilograms or pounds." },
              ]}
            />
          </div>

          <FeatureBlock id="workout-logging" title="Workout logging: sets, reps, weight, and notes" shot="logging">
            <p>
              Record each exercise as sets, reps, and weight, and add notes when something about a
              set is worth remembering. You can log a workout for today or fill in a past date, and
              add exercises on the fly.
            </p>
            <p>
              Exercises without reps or weight are skipped, so an unfinished row does not clutter
              your history. When you edit a training day, the “Also update my plan” switch lets you
              choose whether the change applies to that date only or to the same day in later weeks.
            </p>
            <p>
              New to logging? Read{" "}
              <TextLink href={pages.logWorkouts.path}>how to log your workouts</TextLink>.
            </p>
          </FeatureBlock>

          <FeatureBlock id="weekly-view" title="Your week at a glance" shot="dashboard" flip>
            <p>
              The home screen shows this week&apos;s plan with each training day&apos;s status: full,
              partial, or missed. Switch between a week and a month view, see how many workouts you
              have logged this week and in total, and jump into your last workout, which is
              summarized with its total volume.
            </p>
            <p>
              Shortcuts take you straight to your training splits and to the Exercise Library.
            </p>
          </FeatureBlock>

          <FeatureBlock id="training-splits" title="Training splits and workout planning" shot="splits">
            <p>
              Start from a template or build your own program. IronBuddy includes templates such as
              Full Body 3×, Upper/Lower, Push/Pull/Legs (3× and 6×), Bro Split, and Arnold Split.
              Make one active, add or remove days, and change the exercises on any day.
            </p>
            <p>You can also export your active split as a PDF.</p>
            <p>
              Running PPL? Read{" "}
              <TextLink href={pages.pushPullLegs.path}>how to plan and track a Push Pull Legs split</TextLink>.
            </p>
          </FeatureBlock>

          <FeatureBlock
            id="progress-tracking"
            title="Progress tracking: training volume and estimated strength"
            shot="progress"
            flip
          >
            <p>
              The Progress tab has three views: Volume, Strength, and Body. Volume shows total and
              average workout volume, plus a chart for any single exercise. Strength charts your
              estimated 1RM for each exercise. Choose a range from one week to all time.
            </p>
            <p>
              IronBuddy estimates your 1RM with the Epley formula, weight × (1 + reps ÷ 30), using
              the best completed set of each workout. Sets of more than 12 reps count as 12, where
              the formula stops being reliable. When you save a workout with a heavier weight than
              you have logged before for an exercise, the app marks it as a PR.
            </p>
            <p>
              These are the numbers most lifters use to check progressive overload: are you lifting
              more total volume, or a heavier estimated max, than a few weeks ago? For a simple
              method, read{" "}
              <TextLink href={pages.progressiveOverload.path}>how to track progressive overload</TextLink>.
            </p>
          </FeatureBlock>

          <FeatureBlock id="body-metrics" title="Body metrics: weight and body fat percentage" shot="metrics">
            <p>
              Log body weight and body fat percentage whenever you want to, and see each as a chart
              over the same time ranges as your training. Body metrics are optional, so you only
              track what is useful to you.
            </p>
          </FeatureBlock>

          <FeatureBlock id="exercise-library" title="Exercise library with demonstrations" shot="library" flip>
            <p>
              Search more than 800 exercises, filter by muscle group (chest, back, traps, legs,
              shoulders, and more) and by equipment (barbell, dumbbell, machine, bodyweight, and
              more), and see a demonstration thumbnail for each one.
            </p>
            <p>
              Open any exercise to see what you did last time: the date, your sets, the best set&apos;s
              estimated 1RM, and your all-time estimated 1RM. The library works offline, like the
              rest of the app.
            </p>
          </FeatureBlock>

          <ContentSection
            id="your-data"
            title="Your data: offline, private, and portable"
            className="max-w-3xl"
          >
              <BulletList>
                <li>
                  <Strong>Offline:</Strong> logging, history, and the exercise library work without a
                  connection. See{" "}
                  <TextLink href={pages.offline.path}>how offline tracking works</TextLink>.
                </li>
                <li>
                  <Strong>No account:</Strong> there is no sign-up or sign-in and no IronBuddy cloud.
                </li>
                <li>
                  <Strong>Stored on your device:</Strong> workouts, splits, notes, body metrics, and
                  settings live in the app&apos;s on-device storage. See{" "}
                  <TextLink href={pages.privacyFocused.path}>what IronBuddy stores and where</TextLink>.
                </li>
                <li>
                  <Strong>Backups you control:</Strong> an automatic JSON backup file in your
                  Downloads folder (you can turn it off in Settings), manual JSON export, and import
                  with an undo copy kept from just before the import.
                </li>
                <li>
                  <Strong>Reset All Data:</Strong> clears what IronBuddy stores on the device.
                </li>
            </BulletList>
          </ContentSection>

          <CtaBanner />

          <RelatedLinks
            items={[
              pages.offline,
              pages.noSubscription,
              pages.privacyFocused,
              pages.progressiveOverload,
            ]}
          />
        </div>
      </Container>
    </main>
  );
}
