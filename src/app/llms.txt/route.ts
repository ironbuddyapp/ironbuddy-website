import { trialDetails } from "@/lib/content";
import { pages } from "@/lib/pages";
import type { PageDef } from "@/lib/pages";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const entry = (page: PageDef) => `- [${page.label}](${absoluteUrl(page.path)}): ${page.summary}`;

/**
 * A plain-text summary for AI assistants and agents (https://llmstxt.org). It is generated from the same
 * page registry as the sitemap, so it never lists a page that does not exist. Adoption is informal:
 * no major search engine has said it uses this file for ranking, so treat it as a low-cost extra.
 */
export function GET() {
  const body = [
    `# ${siteConfig.name}`,
    "",
    `> IronBuddy is an offline workout tracker for Android. It logs sets, reps and weight, supports training splits, charts training volume and 1RM (one-rep max), calculated with the Epley formula, and tracks body weight and body fat percentage. There is no account, no ads and no subscription: the app is free to download with a ${siteConfig.freeTrialDays}-day free trial, and after the trial a one-time in-app purchase of ${siteConfig.price.label} through Google Play is required to keep using it. Workout data is stored on the device and is not sent to IronBuddy servers.`,
    "",
    "Key facts:",
    "",
    "- Platform: Android, on Google Play. Not available on iPhone yet.",
    `- Android package: ${siteConfig.playStoreId}`,
    ...(siteConfig.playListingLive ? [`- Google Play: ${siteConfig.playStoreUrl}`] : []),
    "- Works offline: yes (logging, history and the exercise library need no connection)",
    "- Account required: no",
    "- Ads: none",
    "- Subscription: none",
    `- Free trial: ${trialDetails.includes} ${trialDetails.unlocks} ${trialDetails.afterTrial}`,
    `- Price: ${siteConfig.price.label} one-time, after the ${siteConfig.freeTrialDays}-day free trial (Google Play shows the final amount for your country)`,
    `- Contact: ${siteConfig.contactEmail}`,
    "",
    "## Product",
    "",
    entry(pages.home),
    entry(pages.features),
    entry(pages.offline),
    entry(pages.noSubscription),
    entry(pages.privacyFocused),
    entry(pages.alternatives),
    entry(pages.strongAlternative),
    entry(pages.hevyAlternative),
    entry(pages.fitnotesAlternative),
    entry(pages.jefitAlternative),
    entry(pages.boostcampAlternative),
    entry(pages.caliberAlternative),
    entry(pages.comparison),
    "",
    "## Guides",
    "",
    entry(pages.guides),
    entry(pages.progressiveOverload),
    entry(pages.logWorkouts),
    entry(pages.pushPullLegs),
    "",
    "## Answers and policies",
    "",
    entry(pages.faq),
    entry(pages.about),
    entry(pages.press),
    entry(pages.contact),
    entry(pages.privacy),
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
