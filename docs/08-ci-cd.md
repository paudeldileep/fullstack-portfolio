# CI/CD

## Branch strategy
- `main` -> production
- `feature/*` -> PR preview deployments (Vercel)

Optional later:
- `develop` -> staging

## GitHub Actions pipeline
On PR and push:
- install (pnpm)
- lint
- typecheck
- unit tests
- build
- (optional) Playwright smoke on PR

## Deploy
- Vercel handles preview/prod deployments via Git integration
- Protect `main` with required checks
