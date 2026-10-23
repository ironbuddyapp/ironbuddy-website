const playReferrer = (campaign: string) =>
  encodeURIComponent(`utm_source=ironbuddy.fit&utm_medium=website&utm_campaign=${campaign}`);

const workoutPlayId = "com.ironbuddy.app";
const nutritionPlayId = "com.ironbuddy.nutrition";

export const siteConfig = {
  /** The brand. The two apps are named "IronBuddy: Workout Tracker" and "IronBuddy: Nutrition Tracker". */
  name: "IronBuddy",
  fullName: "IronBuddy",
  tagline: "Offline apps for people who train.",
  title: "IronBuddy: Offline Workout & Nutrition Tracker Apps",
  description:
    "IronBuddy makes offline Android apps for people who train: a workout tracker and a nutrition tracker. No account, no ads, no subscription. Pay once.",
  /** The brand home page. The apps live on their own subdomains. */
  url: "https://ironbuddy.fit",
  locale: "en_US",
  workoutUrl: "https://workout.ironbuddy.fit",
  nutritionUrl: "https://nutrition.ironbuddy.fit",
  /**
   * The workout tracker is live on Google Play. The nutrition tracker is not: set `live` to true the day its
   * listing goes public (also in nutrition site's own site.ts), then its card shows the Google Play badge.
   */
  workout: {
    name: "IronBuddy: Workout Tracker",
    playStoreId: workoutPlayId,
    playStoreUrl: `https://play.google.com/store/apps/details?id=${workoutPlayId}`,
    playStoreLinkUrl: `https://play.google.com/store/apps/details?id=${workoutPlayId}&referrer=${playReferrer("brand")}`,
    live: true as boolean,
  },
  nutrition: {
    name: "IronBuddy: Nutrition Tracker",
    playStoreId: nutritionPlayId,
    playStoreUrl: `https://play.google.com/store/apps/details?id=${nutritionPlayId}`,
    playStoreLinkUrl: `https://play.google.com/store/apps/details?id=${nutritionPlayId}&referrer=${playReferrer("brand")}`,
    live: false as boolean,
  },
  playDeveloperUrl: "https://play.google.com/store/apps/developer?id=IronBuddy",
  githubUrl: "https://github.com/ironbuddyapp",
  instagramUrl: "https://www.instagram.com/ironbuddy_app/",
  tiktokUrl: "https://www.tiktok.com/@ironbuddyapp",
  youtubeUrl: "https://www.youtube.com/@IronBuddyApp",
  contactEmail: "iron.buddy.app@gmail.com",
  ogImage: "/og.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: "image/jpeg",
  ogImageAlt: "IronBuddy: Two apps. One brand. Built by lifters, for lifters. IronBuddy: Workout Tracker and IronBuddy: Nutrition Tracker for Android.",
  freeTrialDays: 7,
} as const;
