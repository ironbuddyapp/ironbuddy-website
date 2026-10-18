// Runs after `next build` (see the "build" script in package.json).
//
// ironbuddy.fit used to be the workout tracker's website. The workout site now lives at workout.ironbuddy.fit, so
// every page it had at ironbuddy.fit is turned here into a small forwarding page at the same path. Static hosting
// (GitHub Pages) cannot send real HTTP 301 responses, so each page does the next best thing:
//   - <link rel="canonical"> to the new address, which tells search engines which URL to keep,
//   - <meta http-equiv="refresh" content="0"> and a script, so browsers jump straight away,
//   - a plain visible link, for anyone without scripts.
// The list of paths is scripts/workout-paths.json. The apps' own links (for example the privacy policy address that
// Google Play and the workout app still point at) keep working because of these pages.
import fs from "node:fs";
import path from "node:path";

const out = path.resolve(process.argv[2] ?? "out");
const siteSource = fs.readFileSync(path.resolve("src/lib/site.ts"), "utf8");
const TARGET = siteSource.match(/\bworkoutUrl:\s*"(https?:\/\/[^"]+)"/)[1];
const paths = JSON.parse(fs.readFileSync(path.resolve("scripts/workout-paths.json"), "utf8"));

const page = (target) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Moved to ${TARGET.replace("https://", "")}</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noarchive">
<link rel="canonical" href="${target}">
<meta http-equiv="refresh" content="0; url=${target}">
<script>location.replace(${JSON.stringify(target)} + location.search + location.hash);</script>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#050b14;color:#fff;font:16px/1.5 system-ui,sans-serif;text-align:center;padding:24px}a{color:#b7ff2a}</style>
</head>
<body>
<p>This page moved to <a href="${target}">${target.replace("https://", "")}</a>.</p>
</body>
</html>
`;

let written = 0;
for (const p of paths) {
  const dir = path.join(out, p);
  if (fs.existsSync(path.join(dir, "index.html"))) throw new Error(`${p} is a real page on the brand site; remove it from workout-paths.json`);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), page(TARGET + p));
  written++;
}
console.log(`Wrote ${written} forwarding pages to ${TARGET}`);
