# Overview

## Product
- Single-page long-scroll portfolio at `/` (sections rendered only when data exists)
- Blog at `/blog` and `/blog/[slug]`
- Project detail pages at `/projects/[slug]`
- Admin console at `/admin` (RBAC, draft/preview/publish)

## Hosting
- Vercel now (Preview Deployments + Production on `main`)

## Content model
- All portfolio content is editable via admin:
  - hero, about, skills, experience timeline, projects, testimonials, certifications, education, social links, contact
- Blog posts are MDX stored in MongoDB
- Theme tokens (CSS variables) are stored in DB and editable via admin

## Delivery path (Path A)
- Next.js (SSR/SEO) + MongoDB + API routes/route handlers
- CI/CD via GitHub Actions
- Tests: unit/component + Playwright E2E
- Phase 2+: microfrontend (Module Federation) for Admin UI

## Key principles
- Docs-first
- One PR = one small feature
- WCAG 2.2 AA baseline everywhere
