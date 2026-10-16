# MyFluency

The site for [myfluencyesl.com](https://myfluencyesl.com): an IELTS landing page, booking page and blog. Built with [Astro](https://astro.build), hosted on Cloudflare.

## Before launch

Everything you need to change is in `src/site.config.ts`:

- `calLink`: your Cal.com booking URL
- `web3formsKey`: free key from [web3forms.com](https://web3forms.com). Sign up with the email you want enquiries sent to.
- `email`, `instagram`, `tiktok`: your real details
- `photo`: put your photo in `public/` (e.g. `public/moona.jpg`) and set `photo: '/moona.jpg'`
- `pricing`: replace each `£TODO`, and check the lesson lengths

## Writing a blog post

Add a Markdown file to `src/content/blog/`. The filename becomes the URL, so `ielts-writing-task-2.md` becomes `/blog/ielts-writing-task-2`.

```md
---
title: "Your headline"
description: "One or two sentences. Shown in Google results."
date: 2026-10-20
---

Your post here.
```

Add `draft: true` to hide a post until it's ready.

## Running it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # builds into dist/
```

## Deploying to Cloudflare

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**, then pick this repo.
2. Framework preset: **Astro**. Build command `npm run build`, output directory `dist`.
3. Once it's live, go to **Custom domains** and add `myfluencyesl.com` and `www.myfluencyesl.com`.

Every push to the main branch redeploys the site automatically.
