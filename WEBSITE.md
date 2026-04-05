# Registry Website

The registry website ([mcp.casdoor.org](https://mcp.casdoor.org)) is a Next.js 16 + Tailwind CSS + shadcn UI app located at the repo root.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

1. Import this repository in the [Vercel dashboard](https://vercel.com/new).
2. Vercel auto-detects Next.js at the root — no extra configuration needed.
3. No environment variables are required.

## How data flows

The website imports [`registry.json`](registry.json) at build time. The same file is also served as a JSON API at `/registry.json` via a Next.js Route Handler (`app/registry.json/route.ts`).

To update the registry, edit `registry.json` directly and redeploy — no build step or script required.
