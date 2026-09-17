# IronBuddy

Marketing site for **IronBuddy** — the offline workout tracker that does not need an account.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS v4
- Static export

## Configure

Update `src/lib/site.ts` before launch:

- `url` — production domain
- `playStoreUrl` — Google Play listing
- `contactEmail` — support inbox

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static files are written to `out/`.
