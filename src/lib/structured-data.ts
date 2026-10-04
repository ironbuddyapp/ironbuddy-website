import type { Faq } from "@/lib/content";
import { appScreenshots as screenshots } from "@/lib/content";
import type { PageDef } from "@/lib/pages";
import { absoluteUrl, fullTitle, ogImage } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export type JsonLdNode = Record<string, unknown>;
export type Crumb = { name: string; path: string };

const ids = {
  organization: absoluteUrl("/#organization"),
  website: absoluteUrl("/#website"),
  app: absoluteUrl("/#app"),
  logo: absoluteUrl("/#logo"),
};

const pageId = (page: PageDef, fragment = "webpage") => `${absoluteUrl(page.path)}#${fragment}`;

/** Breadcrumb trail from a list of pages, e.g. trail(pages.home, pages.guides, pages.logWorkouts). */
export function trail(...items: PageDef[]): Crumb[] {
  return items.map((item) => ({ name: item.label, path: item.path }));
}

function organizationNode(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": ids.organization,
    name: siteConfig.name,
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      "@id": ids.logo,
      url: absoluteUrl("/icon.png"),
      width: 256,
      height: 256,
      caption: `${siteConfig.name} logo`,
    },
    email: siteConfig.contactEmail,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.contactEmail,
        availableLanguage: "English",
      },
    ],
    sameAs: [
      siteConfig.githubUrl,
      siteConfig.instagramUrl,
      siteConfig.tiktokUrl,
      ...(siteConfig.playListingLive ? [siteConfig.playDeveloperUrl] : []),
    ],
  };
}

function websiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    url: absoluteUrl("/"),
    name: siteConfig.name,
    // Google reads these when choosing the site name shown in results. Other products share the name
    // "IronBuddy", so the longer form helps tell this one apart. "Iron Buddy" is how most people type it
    // into Search (Search Console, September 2026).
    alternateName: ["IronBuddy Workout Tracker", "Iron Buddy", "ironbuddy.fit"],
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher: { "@id": ids.organization },
  };
}

/** Every entry maps to something the app or its privacy policy states. Do not add features that are not shipped. */
export const appFeatureList = [
  "Offline workout logging with sets, reps, weight and notes",
  "Training splits and templates (Push Pull Legs, Upper Lower, Full Body, custom)",
  "1RM and training volume charts",
  "Body weight and body fat percentage tracking",
  "Exercise library with 800+ exercises and demonstrations",
  "JSON backup and export, and a PDF export of the active split",
  "No account, no ads and no subscription",
];

function appNode(): JsonLdNode {
  return {
    "@type": ["MobileApplication", "SoftwareApplication"],
    "@id": ids.app,
    name: siteConfig.name,
    alternateName: ["IronBuddy Workout Tracker", "Iron Buddy"],
    description: siteConfig.description,
    url: absoluteUrl("/"),
    applicationCategory: "HealthApplication",
    applicationSubCategory: "Workout tracker",
    operatingSystem: "Android",
    inLanguage: "en-US",
    image: ogImage.url,
    screenshot: screenshots.map((shot) => ({
      "@type": "ImageObject",
      contentUrl: absoluteUrl(`/screenshots/${shot.file}`),
      encodingFormat: "image/webp",
      width: shot.width,
      height: shot.height,
      caption: shot.alt,
    })),
    featureList: appFeatureList,
    // Only point at the Play listing once it is public; before that it returns "not found".
    ...(siteConfig.playListingLive
      ? {
          downloadUrl: siteConfig.playStoreUrl,
          installUrl: siteConfig.playStoreUrl,
          sameAs: [siteConfig.playStoreUrl],
        }
      : {}),
    // The download is free, but after the trial a one-time purchase is required to keep using the app. `price` is
    // that one-time price, never "0" (which would tell search engines and AI systems the app is free). It must also
    // appear in the page text (it does, in the Download section), because markup has to match what visitors can see.
    // Add an aggregateRating only when it is genuine and shown on the page.
    offers: {
      "@type": "Offer",
      price: siteConfig.price.amount,
      priceCurrency: siteConfig.price.currency,
      category: "Free trial, then one-time purchase",
      description: `Free to download with a ${siteConfig.freeTrialDays}-day free trial that includes a starter selection of splits and exercises. After the trial, a one-time in-app purchase of ${siteConfig.price.label} through Google Play unlocks everything and is required to keep using the app. No subscription.`,
    },
    author: { "@id": ids.organization },
    publisher: { "@id": ids.organization },
  };
}

function breadcrumbNode(page: PageDef, crumbs: Crumb[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    "@id": pageId(page, "breadcrumb"),
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

function questions(items: Faq[]) {
  return items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  }));
}

type PageOptions = {
  /** Schema.org type for the page node. Defaults to WebPage. */
  type?: string;
  /** Extra properties merged into the page node (for example mainEntity). */
  extra?: JsonLdNode;
  about?: "app" | "organization";
  trail?: Crumb[];
  /** A FAQ section that is visible on this page. Each question should appear in markup on one page only. */
  faqs?: Faq[];
  article?: boolean;
};

function pageNode(page: PageDef, options: PageOptions): JsonLdNode {
  return {
    "@type": options.type ?? "WebPage",
    "@id": pageId(page),
    url: absoluteUrl(page.path),
    name: fullTitle(page),
    description: page.description,
    inLanguage: "en-US",
    isPartOf: { "@id": ids.website },
    datePublished: page.published,
    dateModified: page.modified,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: ogImage.url,
      width: ogImage.width,
      height: ogImage.height,
    },
    ...(options.about
      ? { about: { "@id": options.about === "app" ? ids.app : ids.organization } }
      : {}),
    ...(options.trail ? { breadcrumb: { "@id": pageId(page, "breadcrumb") } } : {}),
    ...options.extra,
  };
}

export function graph(nodes: JsonLdNode[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

/** JSON-LD graph for the home page: Organization, WebSite, WebPage and the MobileApplication. */
export function homeGraph(page: PageDef) {
  return graph([
    organizationNode(),
    websiteNode(),
    pageNode(page, { about: "app" }),
    appNode(),
  ]);
}

/** JSON-LD graph for any inner page. */
export function pageGraph(page: PageDef, options: PageOptions & { trail: Crumb[] }) {
  const nodes: JsonLdNode[] = [
    organizationNode(),
    websiteNode(),
    pageNode(page, options),
    breadcrumbNode(page, options.trail),
  ];

  if (options.faqs?.length) {
    nodes.push({
      "@type": "FAQPage",
      "@id": pageId(page, "faq"),
      isPartOf: { "@id": pageId(page) },
      mainEntity: questions(options.faqs),
    });
  }

  if (options.article) {
    nodes.push({
      "@type": "Article",
      "@id": pageId(page, "article"),
      headline: page.title,
      description: page.description,
      image: [ogImage.url],
      datePublished: page.published,
      dateModified: page.modified,
      inLanguage: "en-US",
      author: { "@id": ids.organization },
      publisher: { "@id": ids.organization },
      mainEntityOfPage: { "@id": pageId(page) },
    });
  }

  return graph(nodes);
}

/** The FAQ page is itself the FAQPage, so its questions live on the page node. */
export function faqPageGraph(page: PageDef, crumbs: Crumb[], items: Faq[]) {
  return pageGraph(page, {
    type: "FAQPage",
    trail: crumbs,
    extra: { mainEntity: questions(items) },
  });
}

/** Guides index: a CollectionPage that lists the guides as an ItemList. */
export function collectionPageGraph(
  page: PageDef,
  crumbs: Crumb[],
  items: Array<{ name: string; path: string }>,
) {
  return pageGraph(page, {
    type: "CollectionPage",
    trail: crumbs,
    extra: {
      mainEntity: {
        "@type": "ItemList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          url: absoluteUrl(item.path),
        })),
      },
    },
  });
}
