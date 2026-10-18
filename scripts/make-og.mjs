// Renders public/og.jpg (1200 × 630), the image shown when a page is shared, from the site's own colours, logo and
// the two apps' real screenshots. Run from the repo root: node scripts/make-og.mjs (needs Playwright installed).
import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import path from "node:path";

const root = path.resolve(".");
const b64 = (p) => readFileSync(path.join(root, p)).toString("base64");
const logo = `data:image/png;base64,${b64("public/logo-mark.png")}`;
const workout = `data:image/webp;base64,${b64("public/screenshots/ironbuddy-workout-tracker-home.webp")}`;
const nutrition = `data:image/webp;base64,${b64("public/screenshots/ironbuddy-nutrition-today-calories-protein.webp")}`;
const font = `data:font/woff2;base64,${b64("public/fonts/plus-jakarta-sans/latin.woff2")}`;

const html = `<!doctype html><html><head><style>
@font-face { font-family: Jakarta; src: url(${font}) format("woff2"); font-weight: 200 800; }
* { margin: 0; box-sizing: border-box; }
body { width: 1200px; height: 630px; background: #050b14; color: #fff; font-family: Jakarta, sans-serif; position: relative; overflow: hidden; }
.glow { position: absolute; width: 600px; height: 600px; border-radius: 50%; background: radial-gradient(circle, rgba(183,255,42,.16), transparent 65%); right: 20px; top: 20px; }
.text { position: absolute; left: 72px; top: 110px; width: 560px; }
.brand { display: flex; align-items: center; gap: 16px; font-size: 30px; font-weight: 700; }
.brand img { width: 60px; height: 60px; border-radius: 15px; }
.eyebrow { margin-top: 44px; font-size: 18px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: #b7ff2a; }
h1 { margin-top: 14px; font-size: 62px; line-height: 1.06; font-weight: 700; letter-spacing: -.02em; }
p { margin-top: 22px; font-size: 26px; line-height: 1.35; color: #a8b0bd; }
.pills { margin-top: 30px; display: flex; gap: 12px; }
.pills span { border: 1px solid rgba(255,255,255,.14); border-radius: 999px; padding: 8px 18px; font-size: 19px; color: #fff; }
.phone { position: absolute; width: 270px; height: 585px; border-radius: 40px; border: 1px solid rgba(255,255,255,.14); background: #000; padding: 8px; box-shadow: 0 40px 90px -20px rgba(0,0,0,.8); }
.phone div { width: 100%; height: 100%; border-radius: 33px; overflow: hidden; background: #0b1424; }
.phone img { width: 100%; display: block; }
.p1 { right: 330px; top: 70px; }
.p2 { right: 70px; top: 120px; }
</style></head><body>
<div class="glow"></div>
<div class="text">
  <div class="brand"><img src="${logo}" alt="">IronBuddy</div>
  <div class="eyebrow">For Android · Offline</div>
  <h1>Apps for people who train.</h1>
  <p>A workout tracker and a nutrition tracker.</p>
  <div class="pills"><span>No account</span><span>No ads</span><span>Pay once</span></div>
</div>
<div class="phone p1"><div><img src="${workout}" alt=""></div></div>
<div class="phone p2"><div><img src="${nutrition}" alt=""></div></div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: "load" });
await page.waitForTimeout(300);
await page.screenshot({ path: path.join(root, "public/og.jpg"), type: "jpeg", quality: 88 });
await browser.close();
console.log("public/og.jpg written");
