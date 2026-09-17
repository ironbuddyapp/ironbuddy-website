export const heroBullets = [
  "No Account Required",
  "Works Offline",
  "One-Time Purchase",
  "No Ads",
  "No Subscription",
] as const;

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
      "Track sets, reps, weight and notes with a clean, distraction-free interface.",
    icon: "clipboard",
  },
  {
    title: "Build Training Splits",
    description:
      "Create Push Pull Legs, Upper Lower, Full Body or custom programs.",
    icon: "calendar",
  },
  {
    title: "Track Strength Progress",
    description: "Monitor estimated 1RM and training volume over time.",
    icon: "chart",
  },
  {
    title: "Body Metrics",
    description: "Track body weight and body fat percentage in one place.",
    icon: "scale",
  },
  {
    title: "Exercise Library",
    description: "Browse hundreds of exercises with visual demonstrations.",
    icon: "library",
  },
  {
    title: "Privacy First",
    description: "Your data stays on your phone. No account required.",
    icon: "shield",
  },
];

export const screenshots = [
  { id: "dashboard", label: "Dashboard" },
  { id: "logging", label: "Workout Logging" },
  { id: "splits", label: "Training Splits" },
  { id: "progress", label: "Progress Tracking" },
  { id: "metrics", label: "Body Metrics" },
  { id: "library", label: "Exercise Library" },
] as const;

export type ScreenshotId = (typeof screenshots)[number]["id"];

export const comparisonRows = [
  { feature: "Offline", ironbuddy: true, typical: false },
  { feature: "No Account Required", ironbuddy: true, typical: false },
  { feature: "One-Time Purchase", ironbuddy: true, typical: false },
  { feature: "No Ads", ironbuddy: true, typical: false },
  { feature: "Privacy Focused", ironbuddy: true, typical: false },
] as const;

export const faqs = [
  {
    question: "Why doesn't IronBuddy require an account?",
    answer:
      "IronBuddy is built so your training log belongs to you. Workouts, progress, and body metrics are stored on your phone — not in a cloud account we control. That means no sign-up, no password, and no company sitting between you and your data.",
  },
  {
    question: "Does the app work offline?",
    answer:
      "Yes. IronBuddy is offline-first. You can log sessions, review history, and use your library with no internet connection. Your gym should not depend on cell service.",
  },
  {
    question: "Do I pay monthly?",
    answer:
      "No. IronBuddy is a one-time purchase. There is no subscription, no ads, and no feature paywall after you buy the app.",
  },
  {
    question: "Can I transfer my data?",
    answer:
      "Yes. Export your training data from the app and import it on another device you own. Nothing is uploaded to IronBuddy servers because we do not operate a user cloud.",
  },
  {
    question: "Is IronBuddy available on iPhone?",
    answer:
      "Not yet. IronBuddy is currently available on Android through Google Play.",
  },
] as const;

export const navItems = [
  { label: "Features", href: "/#features" },
  { label: "Screenshots", href: "/#screenshots" },
  { label: "FAQ", href: "/#faq" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Download", href: "/#download" },
] as const;
