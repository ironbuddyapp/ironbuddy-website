# IronBuddy: brand site

The site at **https://ironbuddy.fit**: the home of the IronBuddy name, with a home page, About and Contact.

The apps have their own sites, in their own repositories:

- Workout Tracker: https://workout.ironbuddy.fit (`ironbuddyapp/ironbuddy-workout-site`)
- Nutrition Tracker: https://nutrition.ironbuddy.fit (`ironbuddyapp/ironbuddy-nutrition-site`)

## Old workout addresses

ironbuddy.fit used to be the workout tracker's website. `scripts/make-redirects.mjs` runs after the build and writes a
forwarding page for every old path listed in `scripts/workout-paths.json`, pointing at the same path on
workout.ironbuddy.fit (canonical link, meta refresh and a script). Unknown paths land on the 404 page, which forwards
too. The workout app and its Google Play listing still use `https://ironbuddy.fit/privacy/`, so keep that one working
until both point at the new address.

## Stack

Next.js 15 App Router (static export), TypeScript, Tailwind CSS v4. No analytics, no cookies.
Deployed by `.github/workflows/pages.yml` on every push to `main`.

## Configure

`src/lib/site.ts`: when the Nutrition Tracker's Play listing is public, set `nutrition.live` to `true`.

## Build and check

```bash
npm install
npm run build
npm run seo:check
```

`scripts/make-og.mjs` renders the share image `public/og.jpg` (needs Playwright).
