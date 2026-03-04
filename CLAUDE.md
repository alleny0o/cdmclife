# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

- In all interactions and commit messages, be extremely concise and sacrifice grammar for the sake of concision.

## Commands

```bash
npm run dev       # Start Next.js dev server (localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

There are no automated tests in this project.

## Architecture Overview

This is the official website for **Christ Disciple Mission Church** (cdmclife.org), built with **Next.js 15 App Router** + **TypeScript** + **Tailwind CSS**, with **Sanity.io** as the headless CMS.

### Page Builder Architecture (Current)

All pages are driven by a `page` document type in Sanity. Pages are composed of typed section blocks, rendered via `src/components/sections/SectionRenderer.tsx`.

- **Homepage**: `*[_type == "page" && isHomePage == true][0]` — rendered at `src/app/(main)/(home)/page.tsx`
- **All other pages**: `*[_type == "page" && slug.current == $slug][0]` — rendered at `src/app/(main)/[slug]/page.tsx`

Available section block types (all defined in `src/sanity/schemaTypes/section-blocks.ts`):
`heroBlock`, `highlightsBlock`, `sermonsBlock`, `galleryBlock`, `ourTeamBlock`, `missionsBlock`, `announcementsBlock`, `tabsBlock`, `worshipInfoBlock`, `contactFormBlock`

To add a new section type: define it in `section-blocks.ts`, add the type to `page.ts`'s `sections` array, create a component in `src/components/sections/`, and add a case to `SectionRenderer`.

### Sanity CMS Integration

**Data fetching**: GROQ queries via `src/sanity/lib/client.ts`. Revalidation typically `{ next: { revalidate: 30 } }`.

**Schema types** (`src/sanity/schemaTypes/`):
- `page.ts` — the page builder document; each page has `title`, `slug`, `isHomePage`, `transparentHeader`, `seo`, and `sections[]`
- `section-blocks.ts` — all block types used in `page.sections[]`
- `site-settings.ts` — singleton for global site name/SEO defaults

**Interfaces** for Sanity data: `src/sanity/lib/interface.ts`. `PageSection` is a union type of all block interfaces. Legacy collection interfaces (pre-page-builder) are still present but largely unused.

**GROQ image projection**: always use `"imageURL": image.asset->url` in queries — do NOT use `urlFor()` from `image.ts` in page GROQ queries.

**Studio config** (`sanity.config.ts`): studio at `/studio`.

### Routing Structure

- `src/app/(main)/` — public site (wraps with `Header`, `Footer`, `ToastProvider`)
  - `(home)/page.tsx` → `/`
  - `[slug]/page.tsx` → `/:slug` (dynamic, CMS-driven)
- `src/app/studio/[[...tool]]/` — Sanity Studio at `/studio`

### Header Transparency

Controlled per-page via `transparentHeader: boolean` on the `page` Sanity document. The layout (`src/app/(main)/layout.tsx`) reads `x-pathname` from headers (injected by `src/middleware.ts`) and fetches `transparentHeader` from Sanity server-side to pass the initial value to `<Header>`. The `Header` component also re-fetches on client-side route changes via `pathname` effect.

### Contact Form

`contactFormBlock` section renders `src/components/sections/ContactForm.tsx`, which uses:
- `react-hook-form` + `zod` for validation
- A Next.js Server Action that sends email via **Resend**
- `react-toastify` for feedback

Required env vars: `RESEND_API_KEY`, `SMTP_EMAIL`

### Styling

- **Tailwind CSS** with custom color palette (`deepBlack`, `vintageNavy`, `darkerNavy`, `softWhite`, `buttonBlue`, `sageGreen`, etc.) defined as CSS variables in `src/app/globals.css` and referenced in `tailwind.config.ts`
- Custom font: `Handlee` (via `--font-handlee`); body: `Open Sans`
- **SCSS modules** used in `src/components/header/side-menu/MobileMenu.module.scss`

### Environment Variables

```
NEXT_PUBLIC_SANITY_PROJECT_ID=4lgit6r7
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-03-03
NEXT_PUBLIC_BASE_URL=https://cdmclife.org
RESEND_API_KEY=...
SMTP_EMAIL=...
```

### Key Conventions

**Path alias**: `@/*` → `./src/*`

**Nav constants**: `src/constants/nav-links.ts` — `LINKS` (desktop), `MOBILE_LINKS` (mobile), `FOOTER_LINKS` (footer). Edit when adding/removing pages from nav.

**Shared layout components**: `Container` + `Section` in `src/components/layouts/`; reusable typography (`H2`, `H3`, `P`, `ItalicsP`) in `src/components/text/`

**SEO**: `src/app/sitemap.ts` + `src/app/robots.ts`; root layout title template: `"%s | Christ Disciple Mission Church"`. The `[slug]/page.tsx` reads `seo` fields from Sanity for per-page metadata.

### Key Dependencies

- `framer-motion` — animations
- `react-slick` + `slick-carousel` — carousels
- `react-responsive` — responsive breakpoint hooks
- `lucide-react` + `react-icons` — icons
- `next-sanity` — Sanity/Next.js integration
- `@sanity/image-url` — Sanity image URL builder (used in `src/sanity/lib/image.ts`, not in page queries)
