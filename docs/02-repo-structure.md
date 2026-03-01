# Repo Structure (Target)

```
repo/
  apps/
    web/                  # Next.js SSR portfolio + blog + /admin (MVP)
    admin/                # Phase 2+: remote MFE (optional)
  packages/
    ui/                   # a11y-first design system + tokens
    content-sdk/          # typed API client + shared DTOs
    config/               # eslint/prettier/tsconfig presets
  docs/
    ...                   # design + architecture + agent rules
```

## Why monorepo
- Shared types and UI tokens
- Consistent lint/testing
- Supports future MFEs cleanly

## Tooling baseline
- TypeScript everywhere
- pnpm workspaces
- Turborepo or Nx (choose later)
