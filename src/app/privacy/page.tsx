import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pages } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { pageGraph, trail } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata(pages.privacy);

const linkClass = "text-primary underline-offset-4 hover:underline";
const h2Class = "text-2xl font-semibold tracking-tight text-white";

/**
 * The privacy hub at ironbuddy.fit/privacy/. Until 18 October 2026 this address was the workout app's policy, and
 * older workout app versions still open it from Settings, so the two app policies stay at the very top.
 * Every statement about the website must stay true: no analytics, no cookies, no third-party scripts or fonts.
 */
const policies = [
  {
    name: siteConfig.workout.name,
    href: `${siteConfig.workoutUrl}/privacy/`,
    address: "workout.ironbuddy.fit/privacy",
    text: "For the workout tracker on Android and iPhone: what the app keeps on your phone, backups, permissions and purchases.",
  },
  {
    name: siteConfig.nutrition.name,
    href: `${siteConfig.nutritionUrl}/privacy/`,
    address: "nutrition.ironbuddy.fit/privacy",
    text: "For the nutrition tracker on Android: meals, weight, food photos, the camera, on-device food recognition and purchases.",
  },
] as const;

export default function PrivacyPage() {
  const crumbs = trail(pages.home, pages.privacy);
  return (
    <main id="main">
      <JsonLd data={pageGraph(pages.privacy, { trail: crumbs })} />
      <PageHero
        trail={crumbs}
        eyebrow="Privacy"
        title="Privacy at IronBuddy"
        lead="Each IronBuddy app has its own privacy policy. Choose your app below. The rest of this page covers this website, ironbuddy.fit."
        updated={pages.privacy.modified}
      />
      <Container>
        <div className="mx-auto max-w-3xl pb-20 text-base leading-relaxed text-white/80">
          <section aria-labelledby="app-policies">
            <h2 id="app-policies" className={h2Class}>
              App privacy policies
            </h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {policies.map((policy) => (
                <li key={policy.href}>
                  <a
                    href={policy.href}
                    className="flex h-full flex-col rounded-2xl border border-white/10 bg-surface/60 p-6 transition hover:border-primary/50 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span className="text-lg font-semibold text-white">{policy.name}</span>
                    <span className="mt-2 text-sm text-muted">{policy.text}</span>
                    <span className="mt-4 text-sm font-semibold text-primary">{policy.address} →</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12" aria-labelledby="both-apps">
            <h2 id="both-apps" className={h2Class}>
              What both apps have in common
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>They work offline. What you log stays on your phone and is never sent to us.</li>
              <li>There is no account, no ads and no analytics inside the apps.</li>
              <li>
                Purchases go through Google Play or the App Store. We never see your payment details.
              </li>
            </ul>
            <p className="mt-3">
              The app policies above are the full and binding text for each app. If anything here seems to differ, the
              app&apos;s own policy applies.
            </p>
          </section>

          <section className="mt-12" aria-labelledby="this-website">
            <h2 id="this-website" className={h2Class}>
              This website, ironbuddy.fit
            </h2>
            <p className="mt-3">
              This website is run by {siteConfig.name}. You can reach us at{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className={linkClass}>
                {siteConfig.contactEmail}
              </a>
              .
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>No analytics, no visitor counting and no advertising.</li>
              <li>No cookies and no local storage.</li>
              <li>No forms and no sign-in. We do not ask you for any personal data.</li>
              <li>No third-party scripts, fonts or embeds. Everything on the page is served from ironbuddy.fit.</li>
            </ul>
          </section>

          <section className="mt-12" aria-labelledby="hosting">
            <h3 id="hosting" className="text-xl font-semibold text-white">
              Hosting
            </h3>
            <p className="mt-3">
              The site is hosted on GitHub Pages, a service of GitHub, Inc. To deliver a page, GitHub&apos;s servers
              receive your IP address and the usual request details your browser sends, such as the page address and
              browser type. GitHub may log visitor IP addresses for security purposes. We do not receive these logs.
              See the{" "}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                className={linkClass}
                rel="noopener noreferrer"
              >
                GitHub General Privacy Statement
              </a>
              .
            </p>
          </section>

          <section className="mt-10" aria-labelledby="email">
            <h3 id="email" className="text-xl font-semibold text-white">
              If you email us
            </h3>
            <p className="mt-3">
              We use your email address and message only to answer you, and delete the conversation when it is no longer
              needed. Our inbox is hosted by Google (Gmail). We never sell or share what you send us.
            </p>
          </section>

          <section className="mt-10" aria-labelledby="links">
            <h3 id="links" className="text-xl font-semibold text-white">
              Links to other sites
            </h3>
            <p className="mt-3">
              This site links to Google Play, Instagram, TikTok, YouTube and GitHub. Nothing is loaded from them until you
              click. Once you leave ironbuddy.fit, that site&apos;s own privacy policy applies.
            </p>
          </section>

          <section className="mt-10" aria-labelledby="rights">
            <h3 id="rights" className="text-xl font-semibold text-white">
              Your rights
            </h3>
            <p className="mt-3">
              Under the GDPR you can ask us what personal data we hold about you, and ask us to correct or delete it.
              In practice that can only be emails you sent us. Write to{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className={linkClass}>
                {siteConfig.contactEmail}
              </a>
              . You can also complain to the data protection authority in your country.
            </p>
          </section>

          <section className="mt-10" aria-labelledby="changes">
            <h3 id="changes" className="text-xl font-semibold text-white">
              Changes to this page
            </h3>
            <p className="mt-3">
              If this page changes, the date at the top changes with it. Questions? See{" "}
              <Link href={pages.contact.path} className={linkClass}>
                Contact
              </Link>
              .
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
