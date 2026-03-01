# Modern Portfolio Platform (Monorepo)

This repo is a docs-first build of a personal portfolio + blog + admin console.

## What to do first
1) Read `docs/00-overview.md`
2) Follow `docs/agents/00-agent-rules.md`
3) Implement work as small PRs (one section / one capability per PR)

## Package manager
- pnpm

## Apps (planned)
- `apps/web` (Next.js SSR portfolio + blog + admin route)
- `apps/admin` (Phase 2+: optional microfrontend remote)

## Shared packages (planned)
- `packages/ui` (design system, a11y-first)
- `packages/content-sdk` (typed API client + DTOs)
- `packages/config` (eslint/prettier/tsconfig)
