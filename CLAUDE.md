# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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

### Routing Structure

The app uses Next.js route groups to organize pages:

- `src/app/(main)/` — Public-facing site (wraps all pages with `Header`, `Footer`, `ToastProvider`)
  - `(home)/` → `/`
  - `(about)/about/` → `/about` and `/about/[slug]` (staff bio pages)
  - `(worship)/worship/` → `/worship`
  - `(missions)/missions/` → `/missions`
  - `(x-more)/(announcements)/announcements/` → `/announcements`
  - `(x-more)/(contact-us)/contact-us/` → `/contact-us`
  - `(x-more)/(mustard-seed)/mustard-seed/` → `/mustard-seed`
- `src/app/studio/[[...tool]]/` — Sanity Studio embedded at `/studio`

Each page section has its own `components/` folder co-located within its route group.

### Sanity CMS Integration

**Data fetching**: Pages fetch data server-side using GROQ queries via `src/sanity/lib/client.ts`. Revalidation is set per-query (typically `{ next: { revalidate: 30 } }`).

**Schema types** (`src/sanity/schemaTypes/`):
- `homeHero`, `aboutHero`, `worshipHero`, `missionsHero` — singleton hero documents (one per page)
- `highlights`, `sermons`, `gallery`, `ourTeam`, `missions` — multi-document collections
- `announcements` — singleton for weekly church events

**Interfaces** for Sanity data are defined in `src/sanity/lib/interface.ts`.

**Studio config** (`sanity.config.ts`): The studio is mounted at `/studio`. Singleton documents (hero types + announcements) have `unpublish`, `delete`, and `duplicate` actions disabled.

**Live preview**: `src/sanity/lib/live.ts` sets up Sanity's live content API.

### Contact Form

The contact page (`(x-more)/(contact-us)/`) uses:
- `react-hook-form` + `zod` for validation (`validation/form-zod.ts`)
- A Next.js Server Action (`actions/email.ts`) that sends email via **Resend**
- `react-toastify` for user feedback

Required env vars: `RESEND_API_KEY`, `SMTP_EMAIL` (recipient address)

### Styling

- **Tailwind CSS** with custom color palette defined as CSS variables in `src/app/globals.css` and referenced in `tailwind.config.ts`
- Custom colors: `deepBlack`, `vintageNavy`, `darkerNavy`, `softWhite`, `buttonBlue`, `sageGreen`, etc.
- Custom font: `Handlee` (cursive, via `--font-handlee` variable)
- Primary body font: `Open Sans`
- **SCSS modules** used in `src/components/header/side-menu/MobileMenu.module.scss`
- `tailwind-scrollbar-hide` plugin is included

### Environment Variables

```
NEXT_PUBLIC_SANITY_PROJECT_ID=4lgit6r7
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-03-03
NEXT_PUBLIC_BASE_URL=https://cdmclife.org
RESEND_API_KEY=...
SMTP_EMAIL=...
```

### Key Dependencies

- `framer-motion` — animations
- `react-slick` + `slick-carousel` — carousels
- `react-responsive` — responsive breakpoint hooks
- `lucide-react` + `react-icons` — icons
- `next-sanity` — Sanity/Next.js integration
- `@sanity/image-url` — Sanity image URL builder (used in `src/sanity/lib/image.ts`)
