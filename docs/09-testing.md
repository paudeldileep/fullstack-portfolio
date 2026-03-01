# Testing

## Unit / Component
- Vitest + React Testing Library (recommended)
- Cover:
  - block rendering logic
  - utilities (slug, mdx compile cache)
  - RBAC guards

## E2E
- Playwright
- Flows:
  - home renders sections
  - blog list -> post
  - project list -> detail
  - admin login -> edit draft -> preview -> publish
  - contact form validation and submit

## Accessibility testing
- axe-core checks on key pages (CI gate)
