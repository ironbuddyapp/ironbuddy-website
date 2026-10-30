import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { principles, products } from "@/lib/content";
import { pages } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { homeGraph } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata(pages.home);

const buttonPrimary =
  "inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-background transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const buttonNutrition =
  "inline-flex h-12 items-center justify-center rounded-full bg-nutrition px-6 text-sm font-semibold text-background transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nutrition focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const buttonGhost =
  "inline-flex h-12 items-center justify-center rounded-full border border-white/12 px-6 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

export default function Home() {
  return (
    <main id="main">
      <JsonLd data={homeGraph(pages.home)} />

      <section className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-20">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1>
              <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-primary">IronBuddy</span>
              <span className="mt-4 block text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl">
                Apps for people who train.
              </span>
            </h1>
            <p className="mt-6 text-lg font-semibold tracking-tight text-white/85 sm:text-2xl">
              IronBuddy apps work offline. No account. No ads. Pay once.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              IronBuddy makes small, honest Android apps for lifters: a workout tracker and a nutrition tracker. Your
              data stays on your phone, and nothing is rented to you by the month.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#apps" className={buttonPrimary}>
                See the apps
              </a>
              <Link href={pages.about.path} className={buttonGhost}>
                About IronBuddy
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section id="apps" className="scroll-mt-20 pb-16 sm:pb-24">
        <Container>
          <SectionHeading
            eyebrow="The apps"
            title="Two trackers, one way of working"
            description="Each app has its own page with features, screenshots, help and its own privacy policy."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.id}
                className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-surface/60 p-6 sm:flex-row sm:p-8"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold tracking-tight text-white">{product.name}</h3>
                  <p
                    className={`mt-1 text-sm font-semibold ${product.accent === "nutrition" ? "text-nutrition" : "text-primary"}`}
                  >
                    {product.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{product.text}</p>
                  <p className="mt-4 text-sm text-white/80">
                    {product.live
                      ? `Free ${siteConfig.freeTrialDays}-day trial, then a one-time purchase.${product.id === "workout" ? " iPhone app coming soon." : ""}`
                      : `Coming soon to Google Play. A one-time purchase after a free ${siteConfig.freeTrialDays}-day trial.`}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a href={product.url} className={product.accent === "nutrition" ? buttonNutrition : buttonPrimary}>
                      Explore the app
                    </a>
                    {product.live ? (
                      <div className="flex items-start gap-3">
                        <a
                          href={product.playUrl}
                          rel="noopener noreferrer"
                          className="inline-flex rounded-[13px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                          <img
                            src="/badges/google-play-badge.svg"
                            alt={`Get ${product.name} on Google Play`}
                            width={180}
                            height={53}
                            loading="lazy"
                            decoding="async"
                            className="h-12 w-auto"
                          />
                        </a>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="mx-auto w-40 shrink-0 sm:mx-0 sm:w-44">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    width={product.width}
                    height={product.height}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full rounded-[1.6rem] border border-white/10 shadow-2xl"
                  />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/8 bg-surface/30 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How we build"
            title="Four promises behind every app"
            description="These hold for both apps today and for anything we add later."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => (
              <li key={item.title} className="rounded-2xl border border-white/10 bg-background/60 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
}
