import { faqs } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function SoftwareJsonLd() {
  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "HealthApplication",
    operatingSystem: "Android",
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    offers: {
      "@type": "Offer",
      url: siteConfig.playStoreUrl,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      category: "One-time purchase",
    },
    featureList: [
      "Offline workout tracking",
      "No account required",
      "Training splits",
      "Strength progress",
      "Body metrics",
      "Exercise library",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }}
    />
  );
}

export function FaqJsonLd() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
    />
  );
}
