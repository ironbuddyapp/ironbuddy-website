import type { LucideIconName } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export const principles: { icon: LucideIconName; title: string; text: string }[] = [
  {
    icon: "shield",
    title: "Offline by design",
    text: "Both apps work with no connection. Your workouts, meals, weight and photos stay on your phone and are never sent to us.",
  },
  {
    icon: "check",
    title: "Pay once",
    text: `A ${siteConfig.freeTrialDays}-day free trial, then a single purchase through Google Play. No subscription, ever.`,
  },
  {
    icon: "close",
    title: "No account, no ads",
    text: "No sign-up, no login, no ad networks and no analytics inside the apps.",
  },
  {
    icon: "target",
    title: "Honest numbers",
    text: "The nutrition tracker marks every number as Exact (measured) or an Estimate with a range, so you know what to trust.",
  },
];

export const products = [
  {
    id: "workout",
    accent: "workout",
    name: siteConfig.workout.name,
    tagline: "Log every set. See the progress.",
    text: "A gym log for lifters: plan your split, log sets in seconds, track progressive overload and estimated 1RM, and see which muscles you are under-training. Works fully offline.",
    url: siteConfig.workoutUrl,
    live: siteConfig.workout.live,
    playUrl: siteConfig.workout.playStoreLinkUrl,
    image: "/screenshots/ironbuddy-workout-tracker-home.webp",
    imageAlt: "IronBuddy: Workout Tracker home screen with today's workout and a Log button",
    width: 720,
    height: 1516,
  },
  {
    id: "nutrition",
    accent: "nutrition",
    name: siteConfig.nutrition.name,
    tagline: "Snap it, scan it or weigh it.",
    text: "A calorie and macro tracker for people who train: photo of the plate, barcode scanner or kitchen-scale grams. Every number says whether it is exact or an estimate. Works fully offline.",
    url: siteConfig.nutritionUrl,
    live: siteConfig.nutrition.live,
    playUrl: siteConfig.nutrition.playStoreLinkUrl,
    image: "/screenshots/ironbuddy-nutrition-today-calories-protein.webp",
    imageAlt: "IronBuddy: Nutrition Tracker Today screen with calories left and a protein ring",
    width: 720,
    height: 1560,
  },
] as const;

export const navItems = [
  { label: "Workout Tracker", href: siteConfig.workoutUrl, external: true },
  { label: "Nutrition Tracker", href: siteConfig.nutritionUrl, external: true },
  { label: "About", href: "/about/", external: false },
  { label: "Contact", href: "/contact/", external: false },
] as const;

export const footerGroups = [
  {
    title: "Apps",
    links: [
      { label: "Workout Tracker", href: siteConfig.workoutUrl },
      { label: "Nutrition Tracker", href: siteConfig.nutritionUrl },
    ],
  },
  {
    title: "IronBuddy",
    links: [
      { label: "About", href: "/about/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  {
    title: "Privacy",
    links: [
      { label: "Privacy at IronBuddy", href: "/privacy/" },
      { label: "Workout Tracker privacy policy", href: `${siteConfig.workoutUrl}/privacy/` },
      { label: "Nutrition Tracker privacy policy", href: `${siteConfig.nutritionUrl}/privacy/` },
    ],
  },
] as const;
