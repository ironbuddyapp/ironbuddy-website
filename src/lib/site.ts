/** Length of the free trial. Keep in sync with the privacy policy (section 4) and the Play listing. */
const freeTrialDays = 5;

/**
 * One-time price charged after the trial. Keep in sync with the Play listing. Google Play shows it in local
 * currency, so the amount a visitor sees there can differ slightly by country and tax.
 */
const price = { amount: "6.99", currency: "EUR", label: "€6.99" } as const;

const playStoreId = "com.ironbuddy.app";
/** The listing's canonical address, for structured data, app links and llms.txt. */
const playStoreUrl = `https://play.google.com/store/apps/details?id=${playStoreId}`;
/**
 * UTM tags for the site's own Play links, so installs from this website show up in Play Console under
 * Statistics / acquisition reports as "Tracked channels (UTM)". Play reads them from the URL-encoded `referrer`.
 */
const playReferrer = encodeURIComponent("utm_source=ironbuddy.fit&utm_medium=website&utm_campaign=website");
const playStoreLinkUrl = `${playStoreUrl}&referrer=${playReferrer}`;

export const siteConfig = {
  name: "IronBuddy",
  tagline: "Your lifelong gym companion.",
  title: "IronBuddy: Workout Tracker & Gym Log App for Android",
  description:
    "Offline workout tracker and gym log app for Android: track progressive overload, plan splits and log every set. No subscription, no ads, no account.",
  url: "https://ironbuddy.fit",
  locale: "en_US",
  /**
   * LAUNCH SWITCH. True since the Play listing went public on 30 Sep 2026, so the Google Play badges link to the
   * listing and the Play URL is in the structured data. Set it back to false only if the listing is ever
   * unpublished: the badges then stop linking, so nobody lands on Play's "not found" page.
   */
  playListingLive: true as boolean,
  playStoreUrl,
  playStoreId,
  /** What the badges and the footer link to: the listing plus the UTM tags above. */
  playStoreLinkUrl,
  /** Opens the Play Store app directly from in-app browsers (Instagram, TikTok, ...), with the same UTM tags. */
  playStoreIntent: `intent://details?id=${playStoreId}&referrer=${playReferrer}#Intent;scheme=market;package=com.android.vending;S.browser_fallback_url=${encodeURIComponent(playStoreLinkUrl)};end`,
  playDeveloperUrl: "https://play.google.com/store/apps/developer?id=IronBuddy",
  githubUrl: "https://github.com/ironbuddyapp",
  instagramUrl: "https://www.instagram.com/ironbuddy_app/",
  tiktokUrl: "https://www.tiktok.com/@ironbuddyapp",
  contactEmail: "iron.buddy.app@gmail.com",
  ogImage: "/og.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: "image/jpeg",
  ogImageAlt:
    "IronBuddy workout tracker app for Android: gym log and workout log that works offline. No account, no ads, no subscription.",
  freeTrialDays,
  price,
} as const;
