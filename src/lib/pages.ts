export type PageKind = "home" | "about" | "contact" | "legal";

export type PageDef = {
  /** Path with leading and trailing slash (the site uses trailingSlash: true). */
  path: string;
  kind: PageKind;
  label: string;
  /** Title without the " | IronBuddy" suffix (the root layout adds it). The home page is the exception. */
  title: string;
  /** 140-160 characters. */
  description: string;
  summary: string;
  /** ISO dates. Bump `modified` whenever the page content changes; the sitemap and JSON-LD read it. */
  published: string;
  modified: string;
  /**
   * The search this page targets, from keyword-map.md (owner-approved). `main` must appear in the title, H1, meta
   * description and first paragraph, and no two pages share it (seo:check). `null`: a navigational page with no target.
   */
  keywords: { main: string; supporting: readonly string[] } | null;
  images?: readonly string[];
};

const BRAND_LAUNCH = "2026-10-18";

/** Keyword map applied: titles, H1s, descriptions and intros name each page's main keyword. */
const KEYWORD_MAP = "2026-10-21";

export const pages = {
  home: {
    path: "/",
    kind: "home",
    label: "Home",
    title: "IronBuddy: Offline Workout & Nutrition Tracker Apps",
    description:
      "IronBuddy makes offline Android apps for people who train: a workout tracker and a nutrition tracker. No account, no ads, no subscription. Pay once.",
    summary: "IronBuddy makes offline workout and nutrition tracker apps for Android.",
    keywords: { main: "IronBuddy", supporting: ["IronBuddy: Workout Tracker", "IronBuddy: Nutrition Tracker"] },
    published: BRAND_LAUNCH,
    modified: KEYWORD_MAP,
    images: [
      "/screenshots/ironbuddy-workout-tracker-home.webp",
      "/screenshots/ironbuddy-nutrition-today-calories-protein.webp",
    ],
  },
  about: {
    path: "/about/",
    kind: "about",
    label: "About",
    title: "About – Offline Apps for People Who Train",
    description:
      "Who makes IronBuddy and why: small offline Android apps for lifters with no account, no ads and no subscription. How we work and how to reach us.",
    summary: "Who makes IronBuddy, what we believe and how we work.",
    keywords: null,
    published: BRAND_LAUNCH,
    modified: BRAND_LAUNCH,
  },
  contact: {
    path: "/contact/",
    kind: "contact",
    label: "Contact",
    title: "Contact IronBuddy – Support, Press and Feedback",
    description:
      "Contact IronBuddy by email for app support, a refund or purchase question, press, or feedback. Each app also has its own support page with quick answers.",
    summary: "Email address for support, press and feedback, and links to each app's support page.",
    keywords: null,
    published: BRAND_LAUNCH,
    modified: BRAND_LAUNCH,
  },
  privacy: {
    path: "/privacy/",
    kind: "legal",
    label: "Privacy",
    title: "Privacy – App Policies and This Website",
    description:
      "Privacy at IronBuddy: links to the Workout Tracker and Nutrition Tracker privacy policies, and how this website handles data. No analytics, no cookies.",
    summary: "Links to each app's privacy policy, and how ironbuddy.fit itself handles data.",
    keywords: null,
    published: BRAND_LAUNCH,
    modified: BRAND_LAUNCH,
  },
} as const satisfies Record<string, PageDef>;

export const pageList: PageDef[] = [pages.home, pages.about, pages.contact, pages.privacy];
