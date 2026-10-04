import { siteConfig } from "@/lib/site";

export type PageKind =
  | "home"
  | "product"
  | "faq"
  | "about"
  | "guides"
  | "guide"
  | "contact"
  | "press"
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
const ALTERNATIVES_SPLIT = "2026-09-28";
const MORE_ALTERNATIVES = "2026-09-28";
const PRESS_ADDED = "2026-09-30";

/** The current screenshot set (appScreenshots in content.ts). */
const screenshotImages = [
  "/screenshots/ironbuddy-workout-tracker-home.webp",
  "/screenshots/ironbuddy-workout-log.webp",
  "/screenshots/ironbuddy-training-splits.webp",
  "/screenshots/ironbuddy-training-volume.webp",
  "/screenshots/ironbuddy-estimated-1rm-chart.webp",
  "/screenshots/ironbuddy-body-weight-tracker.webp",
  "/screenshots/ironbuddy-exercise-library.webp",
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
    modified: "2026-09-30",
    images: screenshotImages,
  },
  features: {
    path: "/features/",
    kind: "product",
    label: "Features",
    title: "Workout Log & Progressive Overload Tracker",
    description:
      "IronBuddy's offline workout log: track sets, reps and weight, follow training splits, and chart progressive overload with training volume and 1RM.",
    summary: "Workout logging, training splits, progress charts, body metrics and the exercise library.",
    published: UPDATED,
    modified: "2026-09-30",
    images: screenshotImages,
  },
  offline: {
    path: "/offline-workout-tracker/",
    kind: "product",
    label: "Offline workout app",
    title: "Offline Workout App & Gym Log for Android",
    description:
      "IronBuddy is an offline workout app for Android. Log sets and reps with no signal, Wi-Fi or account, and keep your training data on your phone. No ads.",
    summary: "What works without a signal, what needs the internet, and how to keep an offline log safe.",
    published: UPDATED,
    modified: "2026-09-28",
  },
  noSubscription: {
    path: "/workout-app-no-subscription/",
    kind: "product",
    label: "No subscription, no ads",
    title: "Workout Tracker App With No Subscription",
    description:
      `IronBuddy is a workout app with no subscription and no ads. Try it free for ${siteConfig.freeTrialDays} days, then pay ${siteConfig.price.label} once to keep using it. Works offline, no account.`,
    summary: "How the free trial and one-time purchase work, and how to check any workout app for ads and subscriptions.",
    published: UPDATED,
    modified: "2026-09-28",
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
    modified: ALTERNATIVES_SPLIT,
  },
  // One page per app people search an alternative to. Like the hub above, they state facts about IronBuddy only,
  // never about the named app (see src/lib/alternatives.tsx).
  strongAlternative: {
    path: "/alternatives/strong/",
    kind: "product",
    label: "Strong alternative",
    title: "Strong App Alternative: Offline 1RM & PR Tracker",
    description:
      "Looking for a Strong app alternative on Android? IronBuddy tracks your 1RM, volume and PRs offline, with no account, no ads and no subscription.",
    summary: "IronBuddy for lifters coming from Strong: strength tracking, switching steps, and how to compare.",
    published: ALTERNATIVES_SPLIT,
    modified: ALTERNATIVES_SPLIT,
  },
  hevyAlternative: {
    path: "/alternatives/hevy/",
    kind: "product",
    label: "Hevy alternative",
    title: "Hevy Alternative: Offline Workout Split Planner",
    description:
      "Looking for a Hevy alternative? IronBuddy plans your week with 10 built-in splits or your own, runs offline on Android, and has no account, ads or subscription.",
    summary: "IronBuddy for lifters coming from Hevy: planning splits, switching steps, and how to compare.",
    published: ALTERNATIVES_SPLIT,
    modified: ALTERNATIVES_SPLIT,
  },
  fitnotesAlternative: {
    path: "/alternatives/fitnotes/",
    kind: "product",
    label: "FitNotes alternative",
    title: "FitNotes Alternative: Gym Log With Auto Backups",
    description:
      "Looking for a FitNotes alternative? IronBuddy is an offline Android gym log that keeps an automatic backup file on your phone. No account, ads or subscription.",
    summary: "IronBuddy for lifters coming from FitNotes: backups and exports, switching steps, and how to compare.",
    published: ALTERNATIVES_SPLIT,
    modified: ALTERNATIVES_SPLIT,
  },
  jefitAlternative: {
    path: "/alternatives/jefit/",
    kind: "product",
    label: "JEFIT alternative",
    title: "JEFIT Alternative: Offline 800+ Exercise Library",
    description:
      "Looking for a JEFIT alternative? IronBuddy has an offline library of 800+ exercises with demos and filters, on Android, with no account, ads or subscription.",
    summary: "IronBuddy for lifters coming from JEFIT: the exercise library, switching steps, and how to compare.",
    published: ALTERNATIVES_SPLIT,
    modified: ALTERNATIVES_SPLIT,
  },
  boostcampAlternative: {
    path: "/alternatives/boostcamp/",
    kind: "product",
    label: "Boostcamp alternative",
    title: "Boostcamp Alternative: Offline Set-by-Set Log",
    description:
      "Looking for a Boostcamp alternative? IronBuddy logs every set offline, with drop sets, supersets and notes, on Android. No account, no ads, no subscription.",
    summary: "IronBuddy for lifters coming from Boostcamp: set-by-set logging, switching steps, and how to compare.",
    published: MORE_ALTERNATIVES,
    modified: MORE_ALTERNATIVES,
  },
  caliberAlternative: {
    path: "/alternatives/caliber/",
    kind: "product",
    label: "Caliber alternative",
    title: "Caliber Alternative: Lifts & Body Weight Offline",
    description:
      "Looking for a Caliber alternative? IronBuddy tracks your lifts, body weight and body fat % offline on Android, with no account, no ads and no subscription.",
    summary: "IronBuddy for lifters coming from Caliber: body weight and body fat tracking, switching steps, and how to compare.",
    published: MORE_ALTERNATIVES,
    modified: MORE_ALTERNATIVES,
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
  press: {
    path: "/press/",
    kind: "press",
    label: "Press kit",
    title: "Press Kit: App Icon, Screenshots & Fact Sheet",
    description:
      "Download the IronBuddy press kit: a fact sheet, ready-to-use descriptions, the app icon and screenshots of the offline workout tracker for Android.",
    summary: "Fact sheet, ready-to-use descriptions, the app icon and screenshots for writing about IronBuddy.",
    published: PRESS_ADDED,
    modified: PRESS_ADDED,
    images: ["/press/ironbuddy-app-icon-1024.png"],
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
      "Learn how to track progressive overload with sets, reps, weight and 1RM. Includes a double progression example and a simple weekly review routine.",
    summary: "A simple method for tracking progressive overload with sets, reps, weight, volume and 1RM.",
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
