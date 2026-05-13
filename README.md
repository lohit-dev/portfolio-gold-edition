# Portfolio

Source for [lohit.xyz](https://lohit.xyz) — a single-page developer portfolio built with TanStack Start, React 19, and Vite.

**Stack:** file-based routing (`src/routes/`), Tailwind CSS v4, Biome.

## Setup

[Bun](https://bun.sh) is assumed.

```bash
bun install
bun dev          # http://localhost:3000
bun run build
bun run preview
```

```bash
bun run check    # Biome: lint + format
```

## Vercel

TanStack Start needs **SSR**, not a static `dist` upload. The **`nitro`** plugin (see `vite.config.ts`) builds the [Vercel Build Output API](https://vercel.com/docs/build-output-api/v3) into **`.vercel/output`**.

If every route returns **404**, open **Project → Settings → Build & Development** and remove any custom **Output Directory** (`dist` / `dist/client` breaks this setup). Use **`bun run build`** as the build command (see root `vercel.json`).

### Web Analytics (Hobby)

The app mounts [`@vercel/analytics`](https://vercel.com/docs/analytics/quickstart) in **`src/routes/__root.tsx`**.
