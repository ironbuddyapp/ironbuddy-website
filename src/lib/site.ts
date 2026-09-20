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
  title: "IronBuddy: Offline Workout Tracker, No Ads or Subscription",
  description: `Offline workout tracker for Android. Log sets, plan splits and track strength. No account, no ads, no subscription: ${freeTrialDays}-day free trial, then ${price.label} once.`,
  url: "https://ironbuddy.fit",
  locale: "en_US",
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
    "IronBuddy offline workout tracker for Android: no subscription, yours for life, shown beside the app's home and training split screens",
  freeTrialDays,
  price,
} as const;
