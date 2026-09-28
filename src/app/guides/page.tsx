import type { Metadata } from "next";
import { ContentSection, PageBody, TextLink } from "@/components/content";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pages } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { collectionPageGraph, trail } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata(pages.guides);

const guides = [pages.progressiveOverload, pages.logWorkouts, pages.pushPullLegs];

export default function GuidesPage() {
  const crumbs = trail(pages.home, pages.guides);

  return (
    <main id="main">
      <JsonLd
        data={collectionPageGraph(
          pages.guides,
          crumbs,
          guides.map((guide) => ({ name: guide.label, path: guide.path })),
        )}
      />
      <PageHero
        trail={crumbs}
        eyebrow="Guides"
        title="Workout tracking guides"
        updated={pages.guides.modified}
        lead="Practical, plain-language guides for lifters who log their training: how to track progressive overload, what to record in a workout log, and how to plan and track a Push Pull Legs split."
      />

      <PageBody>
        <RelatedLinks title="All guides" items={guides} />

        <ContentSection id="about-these-guides" title="About these guides">
          <p>
            The guides explain general training and logging ideas, then show how to apply them in
            IronBuddy, an offline workout tracker for Android. They are general information, not
            medical advice. If you have an injury or a health condition, speak to a qualified
            professional before changing your training.
          </p>
          <p>
            Looking for what the app does? See the{" "}
            <TextLink href={pages.features.path}>feature tour</TextLink> or the{" "}
            <TextLink href={pages.faq.path}>FAQ</TextLink>.
          </p>
        </ContentSection>

        <CtaBanner />
      </PageBody>
    </main>
  );
}
