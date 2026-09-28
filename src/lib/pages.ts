import { siteConfig } from "@/lib/site";

export type PageKind =
  | "home"
  | "product"
  | "faq"
  | "about"
  | "guides"
  | "guide"
  | "contact"
  | "legal";

export type PageDef = {
  /** Path with leading and trailing slash (the site uses trailingSlash: true). */
  path: string;
  kind: PageKind;
  /** Short label for navigation, footer and related-link cards. */
  label: string;
  /** Title without the " | IronBuddy" suffix (the root layout template adds it). The home page is the exception. */
  title: string;
  /** 140–160 characters. */
  description: string;
  /** One line used on related-link cards and in llms.txt. */
  summary: string;
  /** ISO dates. Bump `modified` whenever the page content changes; the sitemap and JSON-LD read it. */
  published: string;
  modified: string;
  /** Extra image paths to list in the sitemap for image discovery. */
  images?: readonly string[];
};

const LAUNCH = "2026-09-17";
const UPDATED = "2026-09-20";
const CONTACT_ADDED = "2026-09-21";
const PPL_ADDED = "2026-09-28";

const screenshotImages = [
  "/screenshots/dashboard.webp",
  "/screenshots/logging.webp",
  "/screenshots/splits.webp",
  "/screenshots/progress.webp",
  "/screenshots/metrics.webp",
  "/screenshots/library.webp",
] as const;

export const pages = {
  home: {
    path: "/",
    kind: "home",
    label: "Home",
    title: siteConfig.title,
    description: siteConfig.description,
    summary: "Offline Android workout tracker with no account, ads, or subscription.",
    published: LAUNCH,
    modified: UPDATED,
    images: screenshotImages,
  },
  features: {
    path: "/features/",
    kind: "product",
    label: "Features",
    title: "Gym Log, Workout Planner & Strength Tracker",
    description:
      "IronBuddy's offline gym log: track sets, reps and weight, build training splits, chart volume and estimated 1RM, log body metrics, and search 800+ exercises.",
    summary: "Workout logging, training splits, progress charts, body metrics and the exercise library.",
    published: UPDATED,
    modified: PPL_ADDED,
    images: screenshotImages,
  },
  offline: {
    path: "/offline-workout-tracker/",
    kind: "product",
    label: "Offline workout tracker",
    title: "Offline Gym Log & Workout Tracker for Android",
    description:
      "IronBuddy is an offline workout tracker for Android. Log sets and reps with no signal, Wi-Fi or account, and keep your training data on your phone. No ads.",
    summary: "What works without a signal, what needs the internet, and how to keep an offline log safe.",
    published: UPDATED,
    modified: UPDATED,
  },
  noSubscription: {
    path: "/workout-app-no-subscription/",
    kind: "product",
    label: "No subscription, no ads",
    title: "Workout App With No Subscription and No Ads",
    description:
      `IronBuddy is a workout app with no subscription and no ads. Try it free for ${siteConfig.freeTrialDays} days, then pay ${siteConfig.price.label} once to keep using it. Works offline, no account.`,
    summary: "How the free trial and one-time purchase work, and how to check any workout app for ads and subscriptions.",
    published: UPDATED,
    modified: "2026-09-25",
  },
  privacyFocused: {
    path: "/privacy-focused-fitness-app/",
    kind: "product",
    label: "Privacy-focused fitness app",
    title: "Privacy-Focused Fitness App With Local Data",
    description:
      "IronBuddy is a privacy-focused workout tracker: no account, no ads, no third-party analytics SDKs and no cloud sync. Your data is stored on your device.",
    summary: "What IronBuddy stores, where copies can exist, which permissions it uses, and how to delete your data.",
    published: UPDATED,
    modified: CONTACT_ADDED,
  },
  alternatives: {
    path: "/alternatives/",
    kind: "product",
    label: "Workout app alternatives",
    title: "Strong, Hevy, FitNotes & JEFIT Alternative",
    description:
      "Looking for a Strong, Hevy, FitNotes or JEFIT alternative? IronBuddy is an Android workout tracker with offline use, no account, no ads and no subscription.",
    summary: "Who IronBuddy fits, who it does not, and a checklist for comparing any workout tracker.",
    published: UPDATED,
    modified: "2026-09-25",
  },
  faq: {
    path: "/faq/",
    kind: "faq",
    label: "FAQ",
    title: "FAQ: Offline Use, Pricing, Ads & Privacy",
    description:
      "Answers about IronBuddy: does it work offline, need a subscription, show ads, require an account, or store data on your phone? Plus progressive overload.",
    summary: "Answers about offline use, pricing, ads, accounts, data storage and progress tracking.",
    published: UPDATED,
    modified: PPL_ADDED,
  },
  about: {
    path: "/about/",
    kind: "about",
    label: "About",
    title: "About Us: An Offline Android Gym Log App",
    description:
      "IronBuddy is an Android workout tracker built on one idea: your training data belongs to you. See how it works, what it costs, and how to get in touch.",
    summary: "What IronBuddy is, how it is priced, how it handles data, and how to contact us.",
    published: UPDATED,
    modified: PPL_ADDED,
  },
  guides: {
    path: "/guides/",
    kind: "guides",
    label: "Guides",
    title: "Workout Tracking & Progressive Overload Guides",
    description:
      "Practical guides for lifters who log their training: how to track progressive overload, what to record in a workout log, and how to review your progress.",
    summary: "Plain-language guides to progressive overload, workout logging and training splits.",
    published: UPDATED,
    modified: PPL_ADDED,
  },
  progressiveOverload: {
    path: "/guides/how-to-track-progressive-overload/",
    kind: "guide",
    label: "How to track progressive overload",
    title: "How to Track Progressive Overload (Simple Guide)",
    description:
      "Learn how to track progressive overload with sets, reps, weight and estimated 1RM. Includes a double progression example and a simple weekly review routine.",
    summary: "A simple method for tracking progressive overload with sets, reps, weight, volume and estimated 1RM.",
    published: UPDATED,
    modified: "2026-09-25",
  },
  logWorkouts: {
    path: "/guides/how-to-log-workouts/",
    kind: "guide",
    label: "How to log your workouts",
    title: "How to Log Your Workouts: What to Track and Why",
    description:
      "A practical guide to logging gym workouts: the few numbers worth recording, how to stay consistent, and how to review it so your training keeps improving.",
    summary: "The numbers worth recording in a gym log, and how to keep the habit going.",
    published: UPDATED,
    modified: PPL_ADDED,
  },
  pushPullLegs: {
    path: "/guides/push-pull-legs-split/",
    kind: "guide",
    label: "Push Pull Legs split",
    title: "Push Pull Legs Split: How to Plan and Track It",
    description:
      "How to run a Push Pull Legs split: 3-day and 6-day weekly layouts, which lifts go on each day, and how to log and progress a PPL workout routine.",
    summary: "Three-day and six-day Push Pull Legs layouts, what goes on each day, and how to track a PPL split.",
    published: PPL_ADDED,
    modified: PPL_ADDED,
  },
  contact: {
    path: "/contact/",
    kind: "contact",
    label: "Contact",
    title: "Contact Us: App Support & Privacy Questions",
    description:
      "Get in touch with IronBuddy for app support, feedback or privacy questions. Find our email address and what to include so we can help you faster.",
    summary: "How to reach IronBuddy for support, feedback or privacy questions, and what to include.",
    published: CONTACT_ADDED,
    modified: PPL_ADDED,
  },
  privacy: {
    path: "/privacy/",
    kind: "legal",
    label: "Privacy Policy",
    title: "Privacy Policy: Local Data, No Account, No Ads",
    description:
      "IronBuddy's privacy policy: workout data is stored on your device. No account, no ads, no third-party analytics SDKs, and a one-time purchase via Google Play.",
    summary: "How IronBuddy handles data, backups, permissions and purchases.",
    published: LAUNCH,
    // Matches the "Last updated" date in the policy repo.
    modified: "2026-09-21",
  },
} as const satisfies Record<string, PageDef>;

export type PageKey = keyof typeof pages;

export const pageList: PageDef[] = Object.values(pages);
