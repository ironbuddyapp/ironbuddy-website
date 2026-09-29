/** Length of the free trial. Keep in sync with the privacy policy (section 4) and the Play listing. */
const freeTrialDays = 5;

/**
 * One-time price charged after the trial. Keep in sync with the Play listing. Google Play shows it in local
 * currency, so the amount a visitor sees there can differ slightly by country and tax.
 */
const price = { amount: "6.99", currency: "EUR", label: "€6.99" } as const;

export const siteConfig = {
  name: "IronBuddy",
  tagline: "Your lifelong gym companion.",
  title: "IronBuddy: Workout Tracker & Gym Log App for Android",
  description:
    "Offline workout tracker and gym log app for Android: track progressive overload, plan splits and log every set. No subscription, no ads, no account.",
  url: "https://ironbuddy.fit",
  locale: "en_US",
  /**
   * LAUNCH SWITCH. While false, the Google Play badges show but link nowhere, and the Play URL is left out of
   * the structured data, because the listing is still in closed testing and returns "not found" to the public.
   * Set to true the day the listing is public.
   */
  playListingLive: false as boolean,
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.ironbuddy.app",
  playStoreId: "com.ironbuddy.app",
  playStoreIntent:
    "intent://details?id=com.ironbuddy.app#Intent;scheme=market;package=com.android.vending;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.ironbuddy.app;end",
  githubUrl: "https://github.com/ironbuddyapp",
  instagramUrl: "https://www.instagram.com/ironbuddy_app/",
  tiktokUrl: "https://www.tiktok.com/@ironbuddyapp",
  contactEmail: "iron.buddy.app@gmail.com",
  ogImage: "/og.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: "image/jpeg",
  ogImageAlt:
    "IronBuddy workout tracker for Android: offline gym tracker and workout log. No account, no ads, no subscription.",
  freeTrialDays,
  price,
} as const;
