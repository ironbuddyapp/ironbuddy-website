import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pages } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { pageGraph, trail } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata(pages.contact);

const linkClass = "text-primary underline-offset-4 hover:underline";

export default function ContactPage() {
  const crumbs = trail(pages.home, pages.contact);
  return (
    <main id="main">
      <JsonLd data={pageGraph(pages.contact, { trail: crumbs, type: "ContactPage" })} />
      <PageHero
        trail={crumbs}
        eyebrow="Contact"
        title="Contact IronBuddy"
        lead="The quickest way to reach us is email. We read everything and answer in English."
        updated={pages.contact.modified}
      />
      <Container>
        <div className="mx-auto max-w-3xl space-y-10 pb-20 text-base leading-relaxed text-white/80 [&_li]:max-w-[38rem] [&_p]:max-w-[38rem]">
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">Email</h2>
            <p className="mt-3">
              <a href={`mailto:${siteConfig.contactEmail}`} className={linkClass}>{siteConfig.contactEmail}</a>
            </p>
            <p className="mt-3">
              Tell us which app and which version you use (Settings, About), and what you were doing. Please do not send
              passwords or payment details: we never need them.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">Help for each app</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <a href={`${siteConfig.workoutUrl}/faq/`} className={linkClass}>{siteConfig.workout.name} FAQ</a>
              </li>
              <li>
                <a href={`${siteConfig.nutritionUrl}/support/`} className={linkClass}>{siteConfig.nutrition.name} support</a>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">Purchases and refunds</h2>
            <p className="mt-3">
              Purchases are handled by Google Play, so refunds and receipts also go through Google Play. If something
              went wrong with an unlock, email us and we will help you restore it.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
