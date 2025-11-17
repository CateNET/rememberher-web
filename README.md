<div align="center">

![RememberHer](public/og-image.png)

# RememberHer · Marketing Website
**Never forget the moments that matter.**  
Production-grade landing page for the RememberHer mobile app.

---

**⚠️ PROPRIETARY CODE - UNAUTHORIZED USE PROHIBITED**

Copyright (c) 2024 RememberHer. All rights reserved.

This repository contains proprietary code for the RememberHer marketing website.  
This code is made available publicly for transparency and reference purposes only.  
Unauthorized use, copying, modification, or distribution is strictly prohibited.

See [LICENSE](LICENSE), [NOTICE](NOTICE), and [COPYRIGHT](COPYRIGHT) for details.

---

</div>

## ✨ Overview

This repository houses the marketing site for [RememberHer](https://rememberher.app), an AI-powered relationship companion that keeps important moments, preferences, and gift ideas top of mind. The site is fully responsive, brand-aligned, SEO-ready, and deployable to Vercel with zero additional configuration.

## 🧱 Tech Stack

| Layer        | Details                                  |
|--------------|-------------------------------------------|
| Framework    | Next.js 14 (App Router, TypeScript)       |
| Styling      | Tailwind CSS v4 + custom gradients        |
| Fonts        | Geist Sans / Geist Mono via `next/font`   |
| SEO          | Next.js Metadata API, `next-seo`, `next-sitemap` |
| Tooling      | Turbopack, ESLint 9, npm scripts          |

## 🧩 Key Features

- Hero with mock mobile UI + dual CTA
- Highlights, feature grid, AI & security, “How it works”, audience, FAQ
- Waitlist form with optimistic success messaging (console logging placeholder)
- Privacy Policy & Terms of Use pages (last-updated timestamp, brand styling)
- Sticky header, smooth scrolling, mobile-first layout refinements
- Brand-matched favicon, Apple touch icon, Open Graph image, PWA manifest

## 📂 Project Structure

```
src/
 ├─ app/
 │   ├─ page.tsx          # Landing page
 │   ├─ layout.tsx        # Global layout & metadata
 │   ├─ privacy/page.tsx  # Privacy Policy
 │   └─ terms/page.tsx    # Terms of Use
 ├─ components/
 │   ├─ layout/           # Header, Footer
 │   ├─ marketing/        # Landing sections
 │   ├─ seo/              # Structured data helper
 │   ├─ ui/               # Buttons, badges, sections, cards
 ├─ lib/                  # Utilities
public/
 ├─ og-image.png          # OG/Twitter sharing image
 ├─ icon-192.png / icon-512.png / apple-touch-icon.png
 └─ site.webmanifest
```

## 🚀 Getting Started

```bash
npm install
npm run dev
# Visit http://localhost:3000
```

**Scripts**

- `npm run dev` – Start local dev server (Turbopack)
- `npm run build` – Production build + sitemap/robots generation
- `npm run start` – Serve production build
- `npm run lint` – ESLint checks

## 🔎 SEO & Metadata

- Comprehensive Next.js Metadata API setup (canonical, icons, robots, keywords, manifest, OG/Twitter)
- JSON-LD via `next-seo` (`OrganizationJsonLd`, `FAQJsonLd`) rendered on the homepage
- Automated sitemap + robots via `next-sitemap` (runs post-build)
- Branded favicon + Apple touch icon + gradient heart app icon

## 📨 Waitlist Form

`src/components/marketing/WaitlistForm.tsx` currently logs emails to the console and shows a success state. Replace the submit handler with your preferred ESP/API (Supabase, Mailchimp, ConvertKit, etc.).

## 📦 Deployment

1. Ensure environment variables (if any) are configured (none required today).
2. `npm run build` – verifies the project and generates:
   - `public/sitemap.xml`, `public/sitemap-0.xml`, `public/robots.txt`
3. Deploy to [Vercel](https://vercel.com/) or any Next.js-compatible host.
4. Validate OG/Twitter cards using Facebook Sharing Debugger and Twitter Card Validator.

## ✅ Status Checklist

- [x] Responsive hero & feature layouts
- [x] Mobile-first spacing + sticky navigation
- [x] Legal pages with consistent styling
- [x] Structured data + sitemap + robots
- [x] Brand-consistent icons + OG image

## ⚖️ License & Copyright

**Copyright (c) 2024 RememberHer. All rights reserved.**

This repository contains proprietary code. This code is made available publicly for transparency and reference purposes only. Unauthorized use, copying, modification, or distribution is strictly prohibited.

See [LICENSE](LICENSE), [NOTICE](NOTICE), and [COPYRIGHT](COPYRIGHT) for complete terms.

For licensing inquiries: **hello@rememberher.app**

---

Built with ❤️ so thoughtful partners never miss a moment.
