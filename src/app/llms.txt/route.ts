import { pages } from "@/lib/pages";
import type { PageDef } from "@/lib/pages";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const entry = (page: PageDef) => `- [${page.label}](${absoluteUrl(page.path)}): ${page.summary}`;

/**
 * A plain-text summary for AI assistants and agents (https://llmstxt.org), generated from the same page registry
 * as the sitemap, so it never lists a page that does not exist. Every fact must match the apps.
 */
export function GET() {
  const body = [
    "# IronBuddy",
    "",
    `> IronBuddy makes offline Android apps for people who train: IronBuddy: Workout Tracker (a gym log) and IronBuddy: Nutrition Tracker (a calorie and macro tracker). Both work without a connection, need no account, show no ads and have no subscription: a free ${siteConfig.freeTrialDays}-day trial, then a one-time purchase through Google Play. Data stays on the phone.`,
    "",
    "## Apps",
    "",
    `- [IronBuddy: Workout Tracker](${siteConfig.workoutUrl}): offline gym log with training splits, progressive overload, estimated 1RM charts and muscle balance. On Google Play (${siteConfig.workout.playStoreUrl}). A one-time purchase after the ${siteConfig.freeTrialDays}-day free trial.`,
    `- [IronBuddy: Nutrition Tracker](${siteConfig.nutritionUrl}): offline calorie and macro tracker with photo, barcode and kitchen-scale logging; every number is marked Exact or Estimate. ${siteConfig.nutrition.live ? `On Google Play (${siteConfig.nutrition.playStoreUrl}).` : "Coming soon to Google Play."} A one-time purchase after the ${siteConfig.freeTrialDays}-day free trial.`,
    "",
    "## About this site",
    "",
    "ironbuddy.fit is the home of the IronBuddy name. Each app has its own website, with its own privacy policy:",
    "",
    `- Workout Tracker: ${siteConfig.workoutUrl} (privacy policy: ${siteConfig.workoutUrl}/privacy/)`,
    `- Nutrition Tracker: ${siteConfig.nutritionUrl} (privacy policy: ${siteConfig.nutritionUrl}/privacy/)`,
    `- Contact: ${siteConfig.contactEmail}`,
    "",
    "## Pages",
    "",
    entry(pages.home),
    entry(pages.about),
    entry(pages.contact),
    entry(pages.privacy),
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
