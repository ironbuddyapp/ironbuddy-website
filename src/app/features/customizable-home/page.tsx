import type { Metadata } from "next";
import { BulletList, ContentSection, NumberedList, PageBody, Strong, TextLink } from "@/components/content";
import { CtaBanner, HeroCta } from "@/components/CtaBanner";
import { FaqList } from "@/components/FaqList";
import { FeatureBlock } from "@/components/FeatureBlock";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import type { Faq } from "@/lib/content";
import { pages } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { pageGraph, trail } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata(pages.customizableHome);

const faqs: Faq[] = [
  {
    id: "trial",
    question: "Can I customise Home during the free trial?",
    answer:
      "Customise Home is part of the full version. During the trial you get the default cards on all three pages, and tapping Customise shows what the full version adds. After the one-time purchase your arrangement is saved with your settings and included in exports.",
  },
  {
    id: "reset",
    question: "What if I make a mess of it?",
    answer:
      "Tap Reset in the Customise bar to put the default cards back on all three pages. Removing a single card shows an Undo button for five seconds, and any card you removed can be added again from Add.",
  },
  {
    id: "widgets",
    question: "Are these Android home screen widgets?",
    answer:
      "No. The cards live on IronBuddy's own Home screen, the first tab inside the app. They are arranged on three swipeable pages that always fit your screen, so there is nothing to scroll and nothing to install on the Android launcher.",
  },
];

export default function CustomizableHomePage() {
  const crumbs = trail(pages.home, pages.features, pages.customizableHome);

  return (
    <main id="main">
      <JsonLd data={pageGraph(pages.customizableHome, { trail: crumbs, about: "app", faqs })} />
      <PageHero
        trail={crumbs}
        eyebrow="Customizable Home · full version"
        title="A workout tracker Home you arrange yourself"
        updated={pages.customizableHome.modified}
        lead="IronBuddy's Home is made of cards: the muscles you worked this week, your last workout, a chart for any exercise, your personal records, Muscle Balance and more. In the full version you decide which cards you see, how big each one is and where it sits, across three pages that fit your screen without scrolling."
      >
        <HeroCta />
      </PageHero>

      <PageBody>
        <FeatureBlock id="cards" title="Nine kinds of card, three pages" shot="dashboard">
          <p>
            Every page of Home is a two-column grid that fills the space under your split card. Out
            of the box, page 1 shows <Strong>Muscles worked</Strong> this week on a body map, your{" "}
            <Strong>last workout</Strong> and shortcuts to your splits and the exercise library.
            Page 2 has an <Strong>exercise chart</Strong>, your <Strong>personal records</Strong>,
            workout counts and body weight. Page 3 has <Strong>Muscle Balance</Strong> and volume
            per muscle.
          </p>
          <p>
            The full version lets you change all of that. Add an exercise chart for every lift you
            care about, drop the cards you never look at, and move the ones you check most to page 1.
          </p>
        </FeatureBlock>

        <FeatureBlock id="arrange" title="Drag, resize, add, remove" shot="customise" flip>
          <p>
            Tap <Strong>Customise</Strong> above the cards, or hold a card for a moment. Every card
            gets an × to remove it and a ↘ corner handle to resize it, and the bar at the top names
            the three gestures.
          </p>
          <BulletList>
            <li>
              <Strong>Move:</Strong> hold a card for half a second until it lifts, then drag. A
              dashed outline shows where it will land, and a label under your finger says at what
              size. A quick swipe still scrolls the page or moves to the next page.
            </li>
            <li>
              <Strong>Resize:</Strong> drag the corner handle, or tap it for the list of sizes the
              card has: Small, Wide, Tall or Large. Every card is designed for each of its sizes,
              and bigger cards show more.
            </li>
            <li>
              <Strong>Another page:</Strong> rest a lifted card at the left or right edge and the
              next page slides in. Drop it there.
            </li>
            <li>
              <Strong>Add and remove:</Strong> Add lists every card, including one that is on
              another page (tap it to move it here). Removing shows Undo for five seconds.
            </li>
          </BulletList>
        </FeatureBlock>

        <FeatureBlock id="sizes" title="Cards that fill the space" shot="customiseSizes">
          <p>
            Drop a card next to a tall one and rest for a moment: it offers to grow and fill the
            free half, with the label saying <em>Tall · fills the space</em>. Move a little and it
            keeps its size. The other cards slide aside as you go, so the page never has holes.
          </p>
          <p>
            A tall Muscles worked card lists the muscles under the body map; a large Muscle Balance
            puts the chart across the full width with the numbers under it; a wide exercise chart
            shows the trend line, axis and time range. Small cards keep the name, one line saying
            what the number is, and the number.
          </p>
        </FeatureBlock>

        <ContentSection id="how-to" title="How to customise Home, step by step">
          <NumberedList>
            <li>Open Home and tap <Strong>Customise</Strong> (full version), or hold any card.</li>
            <li>Tap × on the cards you don&apos;t want. Undo appears for five seconds if you change your mind.</li>
            <li>Tap <Strong>Add</Strong> to add a card, or to move one over from another page.</li>
            <li>Hold a card until it lifts, drag it where you want it, and let go. Rest it at a page edge to carry it to the next page.</li>
            <li>Tap a card&apos;s ↘ handle and pick Small, Wide, Tall or Large, or drag the handle.</li>
            <li>Tap <Strong>Done</Strong>. Your layout is saved on your phone and included when you export your data.</li>
          </NumberedList>
          <p>
            <Strong>Reset</Strong> puts the default cards back on all three pages, after asking.
            Keyboard users can move a focused card with the arrow keys.
          </p>
        </ContentSection>

        <ContentSection id="full-version" title="Part of the full version">
          <p>
            The {siteConfig.freeTrialDays}-day free trial includes the whole workout tracker with
            the default Home. The one-time purchase ({siteConfig.price.label} on Google Play) adds
            Customise Home, the eight accent colours,{" "}
            <TextLink href={pages.shareCards.path}>share cards</TextLink>, and export and import of
            your data. There is no subscription. Read{" "}
            <TextLink href={pages.noSubscription.path}>how the trial and the purchase work</TextLink>.
          </p>
        </ContentSection>

        <ContentSection id="faq" title="Customizable Home questions">
          <FaqList items={faqs} />
        </ContentSection>

        <CtaBanner />

        <RelatedLinks items={[pages.muscleBalance, pages.progressCharts, pages.features, pages.noSubscription]} />
      </PageBody>
    </main>
  );
}
