import { pages } from "@/lib/pages";
import { siteConfig } from "@/lib/site";

export const heroBullets = [
  "No Account Required",
  "Works Offline",
  "One-Time Purchase",
  "No Ads",
  "No Subscription",
  "Free Trial Included",
] as const;

/** Compact benefit line shown under the hero headline on small screens. */
export const heroHighlights = ["Offline", "No ads", "No account", "Free trial"] as const;

export type FeatureIcon =
  | "clipboard"
  | "calendar"
  | "chart"
  | "scale"
  | "library"
  | "shield";

export const features: Array<{
  title: string;
  description: string;
  icon: FeatureIcon;
}> = [
  {
    title: "Log Every Workout",
    description:
      "Log sets, reps, weight and notes in a clean, offline gym log.",
    icon: "clipboard",
  },
  {
    title: "Build Training Splits",
    description:
      "Start from Push Pull Legs, Upper Lower or Full Body, or build your own.",
    icon: "calendar",
  },
  {
    title: "Track Strength Progress",
    description: "Follow estimated 1RM and training volume over time.",
    icon: "chart",
  },
  {
    title: "Body Metrics",
    description: "Track body weight and body fat percentage in one place.",
    icon: "scale",
  },
  {
    title: "Exercise Library",
    description: "Search 800+ exercises with demonstrations and filters.",
    icon: "library",
  },
  {
    title: "Privacy First",
    description: "Stored on your phone, not our servers. No account required.",
    icon: "shield",
  },
];

export const screenshots = [
  {
    id: "dashboard",
    label: "Dashboard",
    alt: "IronBuddy home screen showing the week's Push Pull Legs split, each day's workout status, and the last workout's volume",
    width: 720,
    height: 1600,
  },
  {
    id: "logging",
    label: "Workout Logging",
    alt: "IronBuddy workout logging screen for a Pull day, listing exercises with sets, reps and weight and a Log workout button",
    width: 720,
    height: 1600,
  },
  {
    id: "splits",
    label: "Training Splits",
    alt: "IronBuddy training splits screen with an active Push Pull Legs split and Full Body, Upper Lower and Bro Split templates",
    width: 720,
    height: 1600,
  },
  {
    id: "progress",
    label: "Progress Tracking",
    alt: "IronBuddy Progress tab with workout volume and per-exercise volume charts and time ranges from one week to all time",
    width: 720,
    height: 1600,
  },
  {
    id: "metrics",
    label: "Body Metrics",
    alt: "IronBuddy body metrics charts tracking body weight and body fat percentage over time",
    width: 720,
    height: 1600,
  },
  {
    id: "library",
    label: "Exercise Library",
    alt: "IronBuddy exercise library with search, muscle group and equipment filters, and demonstration thumbnails for 800+ exercises",
    width: 720,
    height: 1558,
  },
] as const;

export type ScreenshotId = (typeof screenshots)[number]["id"];

/**
 * Only IronBuddy's own attributes are stated as fact (they come from the privacy policy). The other
 * column is deliberately hedged: it describes how apps in general vary, not any specific app.
 */
export const comparisonRows = [
  { feature: "Works offline", ironbuddy: "Yes", others: "Varies by app" },
  { feature: "Account required", ironbuddy: "No", others: "Often required" },
  { feature: "Subscription", ironbuddy: "None", others: "Common" },
  { feature: "Ads", ironbuddy: "None", others: "Common in free tiers" },
  { feature: "Where data lives", ironbuddy: "On your device", others: "Often in the cloud" },
] as const;

export type Faq = {
  id: string;
  question: string;
  answer: string;
  more?: { href: string; label: string };
};

const trial = `free trial (currently ${siteConfig.freeTrialDays} days)`;

/**
 * What the free trial includes and what happens after it, in one place so every page says the same thing.
 * Deliberately no counts: the app decides which splits and exercises the trial unlocks, and that may change.
 * Source: IronBuddy app 1.0.13 (src/lib/split-locking.ts, exercise-locking.ts, routes/paywall.tsx).
 */
export const trialDetails = {
  includes: `The ${siteConfig.freeTrialDays}-day free trial includes workout logging, progress charts, body metrics and backups, with a starter selection of splits and exercises.`,
  unlocks: `Buying IronBuddy for ${siteConfig.price.label} unlocks every split, the full library of 800+ exercises, and your own custom splits.`,
  afterTrial:
    "If you don't buy, the app locks when the trial ends, but nothing is deleted: your data stays on your phone and you can still export it.",
} as const;

export const faqGroups: Array<{ id: string; title: string; items: Faq[] }> = [
  {
    id: "offline-use",
    title: "Offline use",
    items: [
      {
        id: "offline",
        question: "Does IronBuddy work offline?",
        answer:
          "Yes. IronBuddy is offline-first: you can log workouts, review your history, and browse the exercise library with no internet connection. Your training data is stored on your phone, so there is no server to reach and nothing to sync.",
        more: { href: pages.offline.path, label: "How offline tracking works" },
      },
      {
        id: "gym-no-internet",
        question: "Can I use IronBuddy in a gym with no internet connection?",
        answer:
          "Yes. A basement gym, a garage gym, or a gym with no signal works the same as any other, because logging sets, reps, and weight does not need a connection. The only steps that use the internet are getting the app from Google Play and completing the one-time purchase.",
      },
      {
        id: "why-offline",
        question: "Why choose an offline workout tracker?",
        answer:
          "An offline tracker keeps working when the signal does not, and your training log does not depend on a company account or server. With IronBuddy there is no account to create, no cloud sync to wait on, and your workouts are stored on your device. The trade-off is that backups are your responsibility, so IronBuddy supports both an automatic backup file and manual exports.",
      },
    ],
  },
  {
    id: "pricing-and-ads",
    title: "Pricing, trial, and ads",
    items: [
      {
        id: "subscription",
        question: "Does IronBuddy require a subscription?",
        answer: `No. IronBuddy has no subscriptions. It is free to download and includes a ${trial}. After the trial, a one-time in-app purchase of ${siteConfig.price.label} through Google Play is required to keep using the app.`,
        more: { href: pages.noSubscription.path, label: "How pricing works" },
      },
      {
        id: "ads",
        question: "Does IronBuddy contain ads?",
        answer:
          "No. IronBuddy shows no ads and includes no advertising or third-party analytics SDKs, so nothing interrupts your sets.",
      },
      {
        id: "trial-includes",
        question: "What is included in the free trial?",
        answer: `${trialDetails.includes} ${trialDetails.unlocks}`,
      },
      {
        id: "trial-ends",
        question: "What happens when the free trial ends?",
        answer: `The app locks until you buy it for ${siteConfig.price.label}. Nothing is deleted: your workouts stay on your phone, and the screen shown when the trial ends has an Export my data button, so you can take a copy of your data without buying.`,
        more: { href: pages.noSubscription.path, label: "How pricing works" },
      },
    ],
  },
  {
    id: "privacy-and-data",
    title: "Accounts, privacy, and data",
    items: [
      {
        id: "account",
        question: "Can I use IronBuddy without creating an account?",
        answer:
          "Yes. IronBuddy does not create user accounts or require sign-in, so there is no sign-up, email address, or password to manage. It is built so your training log belongs to you: it is stored on your phone, not in a cloud account we control.",
      },
      {
        id: "storage",
        question: "Where is my workout data stored?",
        answer:
          "On your device. Your workouts, splits, notes, body metrics, and settings are stored in the app's on-device storage, and IronBuddy does not send them to any IronBuddy server. Copies exist only in ways you control or Android provides: an automatic backup file in your Downloads folder (you can turn it off), Android Auto Backup to your Google account if Google backup is on, and files you export or share.",
        more: { href: pages.privacyFocused.path, label: "Privacy in detail" },
      },
      {
        id: "collect-sell",
        question: "Does IronBuddy collect or sell my data?",
        answer:
          "IronBuddy does not sell personal data, does not use advertising SDKs, and does not use third-party analytics or crash SDKs that report your workouts to us. Your training data is not collected onto IronBuddy-operated servers. The privacy policy explains exactly what the app handles.",
        more: { href: pages.privacy.path, label: "Read the privacy policy" },
      },
      {
        id: "transfer",
        question: "Can I back up, export, or move my data to another phone?",
        answer:
          "Yes. You can export a JSON copy of your data (or a PDF of your active split) from the app and import a backup file on another device you own. IronBuddy can also keep an automatic backup file in your Downloads folder, which you can turn off in Settings. Nothing is uploaded to IronBuddy servers.",
      },
      {
        id: "uninstall",
        question: "What happens to my data if I uninstall IronBuddy?",
        answer:
          "Uninstalling removes the app's private storage. Backup files already saved in your Downloads folder, files you exported, and any Android Auto Backup in your Google account are not removed automatically, so you can restore later or delete them yourself. Settings, then Reset All Data, clears what IronBuddy stores on the device.",
      },
    ],
  },
  {
    id: "features-and-progress",
    title: "Features and progress tracking",
    items: [
      {
        id: "overload",
        question: "Is IronBuddy good for progressive overload tracking?",
        answer:
          "IronBuddy records the numbers progressive overload depends on: sets, reps, and weight for every workout, plus notes. The Progress tab charts your training volume and estimated 1RM over time, from one week to all time, so you can see whether your training is trending up.",
        more: { href: pages.progressiveOverload.path, label: "A simple method for tracking progressive overload" },
      },
      {
        id: "estimated-1rm",
        question: "How does IronBuddy estimate my 1RM?",
        answer:
          "With the Epley formula: weight × (1 + reps ÷ 30). For each workout, IronBuddy uses the completed set that gives the highest estimate, and counts sets of more than 12 reps as 12, where the formula stops being reliable. Progress → Strength charts the result over time, and opening an exercise shows your all-time estimated 1RM.",
        more: { href: `${pages.progressiveOverload.path}#volume-and-1rm`, label: "Estimated 1RM explained" },
      },
      {
        id: "what-track",
        question: "What can I track in IronBuddy?",
        answer:
          "You can log sets, reps, weight, and notes for each workout, follow a training split, chart workout volume and estimated 1RM, and record body weight and body fat percentage. An exercise library of more than 800 exercises with demonstration thumbnails helps you find the right movement.",
        more: { href: pages.features.path, label: "All features" },
      },
      {
        id: "splits",
        question: "Can I build my own training split?",
        answer:
          "Yes. Start from a template such as Full Body 3×, Upper/Lower, Push/Pull/Legs, Bro Split, or Arnold Split, or create a custom program. You can add days, change the exercises on each day, and choose which split is active.",
      },
      {
        id: "units",
        question: "Does IronBuddy use kilograms or pounds?",
        answer: "Both. You can choose your unit preference (kg or lb) in the app.",
      },
    ],
  },
  {
    id: "platform",
    title: "Platform",
    items: [
      {
        id: "iphone",
        question: "Is IronBuddy available on iPhone?",
        answer: "Not yet. IronBuddy is currently available on Android through Google Play.",
      },
    ],
  },
];

const allFaqs = faqGroups.flatMap((group) => group.items);

/** The short list shown on the home page. The complete list (and its FAQPage markup) lives on /faq/. */
export const homeFaqIds = ["offline", "subscription", "ads", "account", "storage", "overload"] as const;

export const homeFaqs: Faq[] = homeFaqIds.map((id) => {
  const item = allFaqs.find((faq) => faq.id === id);
  if (!item) throw new Error(`Unknown FAQ id: ${id}`);
  return item;
});

export const navItems = [
  { label: "Features", href: pages.features.path, desktop: true },
  { label: "Screenshots", href: "/#screenshots", desktop: true },
  { label: "Guides", href: pages.guides.path, desktop: true },
  { label: "FAQ", href: pages.faq.path, desktop: true },
  { label: "About", href: pages.about.path, desktop: true },
  { label: "Contact", href: pages.contact.path, desktop: false },
  { label: "Privacy Policy", href: pages.privacy.path, desktop: false },
  { label: "Download", href: "/#download", desktop: false },
] as const;

/** Sections of the home page, used by the mobile dot navigation and the "Explore" auto-scroll. */
export const sectionNav = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "screenshots", label: "Screenshots" },
  { id: "why", label: "Compare" },
  { id: "faq", label: "FAQ" },
  { id: "download", label: "Download" },
] as const;

export const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: pages.features.path },
      { label: "Screenshots", href: "/#screenshots" },
      { label: "FAQ", href: pages.faq.path },
    ],
  },
  {
    title: "Why IronBuddy",
    links: [
      { label: pages.offline.label, href: pages.offline.path },
      { label: pages.noSubscription.label, href: pages.noSubscription.path },
      { label: pages.privacyFocused.label, href: pages.privacyFocused.path },
      { label: pages.alternatives.label, href: pages.alternatives.path },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "All guides", href: pages.guides.path },
      { label: pages.progressiveOverload.label, href: pages.progressiveOverload.path },
      { label: pages.logWorkouts.label, href: pages.logWorkouts.path },
      { label: pages.pushPullLegs.label, href: pages.pushPullLegs.path },
    ],
  },
  {
    title: "Company",
    links: [
      { label: pages.about.label, href: pages.about.path },
      { label: pages.contact.label, href: pages.contact.path },
      { label: pages.privacy.label, href: pages.privacy.path },
    ],
  },
] as const;
