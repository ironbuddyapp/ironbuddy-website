import type { PageDef } from "@/lib/pages";
import { absoluteUrl, fullTitle } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export type JsonLdNode = Record<string, unknown>;
export type Crumb = { name: string; path: string };

const ids = {
  organization: absoluteUrl("/#organization"),
  website: absoluteUrl("/#website"),
  logo: absoluteUrl("/#logo"),
};

const pageId = (page: PageDef) => `${absoluteUrl(page.path)}#webpage`;

export function trail(...items: PageDef[]): Crumb[] {
  return items.map((item) => ({ name: item.label, path: item.path }));
}

function organizationNode(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": ids.organization,
    name: siteConfig.name,
    url: absoluteUrl("/"),
    description: siteConfig.description,
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
      siteConfig.youtubeUrl,
      siteConfig.workoutUrl,
      siteConfig.nutritionUrl,
      siteConfig.playDeveloperUrl,
    ],
  };
}

function websiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    url: absoluteUrl("/"),
    name: siteConfig.name,
    alternateName: ["Iron Buddy", "ironbuddy.fit"],
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher: { "@id": ids.organization },
  };
}

function webPageNode(page: PageDef, type: string): JsonLdNode {
  return {
    "@type": type,
    "@id": pageId(page),
    url: absoluteUrl(page.path),
    name: fullTitle(page),
    description: page.description,
    inLanguage: "en-US",
    datePublished: page.published,
    dateModified: page.modified,
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.organization },
  };
}

function breadcrumbNode(page: PageDef, crumbs: Crumb[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(page.path)}#breadcrumb`,
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function graph(nodes: JsonLdNode[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

export function homeGraph(page: PageDef) {
  return graph([
    organizationNode(),
    websiteNode(),
    { ...webPageNode(page, "WebPage"), primaryImageOfPage: { "@id": ids.logo } },
    {
      "@type": "ItemList",
      "@id": `${absoluteUrl(page.path)}#apps`,
      name: "IronBuddy apps",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: siteConfig.workout.name, url: siteConfig.workoutUrl },
        { "@type": "ListItem", position: 2, name: siteConfig.nutrition.name, url: siteConfig.nutritionUrl },
      ],
    },
  ]);
}

export function pageGraph(page: PageDef, options: { trail: Crumb[]; type?: string }) {
  return graph([
    organizationNode(),
    websiteNode(),
    webPageNode(page, options.type ?? "WebPage"),
    breadcrumbNode(page, options.trail),
  ]);
}
