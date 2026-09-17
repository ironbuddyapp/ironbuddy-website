import { faqs, features, screenshots } from "@/lib/content";
import { siteConfig } from "@/lib/site";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function HomeJsonLd() {
  const websiteId = `${siteConfig.url}/#website`;
  const orgId = `${siteConfig.url}/#organization`;
  const appId = `${siteConfig.url}/#app`;
  const screenshotUrls = screenshots.map(
    (shot) => `${siteConfig.url}/screenshots/${shot.id}.webp`,
  );

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": orgId,
            name: siteConfig.name,
            url: siteConfig.url,
            email: siteConfig.contactEmail,
            logo: {
              "@type": "ImageObject",
              url: `${siteConfig.url}/logo-mark.webp`,
            },
            sameAs: [siteConfig.githubUrl, siteConfig.playStoreUrl],
          },
          {
            "@type": "WebSite",
            "@id": websiteId,
            url: siteConfig.url,
            name: siteConfig.name,
            description: siteConfig.description,
            inLanguage: "en-US",
            publisher: { "@id": orgId },
          },
          {
            "@type": "WebPage",
            "@id": `${siteConfig.url}/#webpage`,
            url: siteConfig.url,
            name: siteConfig.title,
            description: siteConfig.description,
            isPartOf: { "@id": websiteId },
            about: { "@id": appId },
            primaryImageOfPage: `${siteConfig.url}${siteConfig.ogImage}`,
          },
          {
            "@type": "SoftwareApplication",
            "@id": appId,
            name: siteConfig.name,
            applicationCategory: "HealthApplication",
            applicationSubCategory: "Workout tracker",
            operatingSystem: "Android",
            description: siteConfig.description,
            url: siteConfig.url,
            image: [`${siteConfig.url}${siteConfig.ogImage}`, ...screenshotUrls],
            screenshot: screenshotUrls,
            downloadUrl: siteConfig.playStoreUrl,
            installUrl: siteConfig.playStoreUrl,
            featureList: features.map((feature) => feature.title),
            offers: {
              "@type": "Offer",
              url: siteConfig.playStoreUrl,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              category: "One-time purchase",
            },
            publisher: { "@id": orgId },
          },
          {
            "@type": "FAQPage",
            "@id": `${siteConfig.url}/#faq`,
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          },
        ],
      }}
    />
  );
}

export function PrivacyJsonLd() {
  const pageUrl = `${siteConfig.url}/privacy/`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Privacy Policy | IronBuddy",
        url: pageUrl,
        description:
          "IronBuddy stores workouts on your phone. No account, no cloud training log, and no ads.",
        isPartOf: {
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: siteConfig.url,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Privacy Policy",
              item: pageUrl,
            },
          ],
        },
      }}
    />
  );
}
