# Auth & Security

## Auth model (MVP)
- Email + password login
- Session cookie (HTTP-only, Secure, SameSite=Lax/Strict)
- Middleware protects `/admin/*` and `/api/admin/*`

## RBAC
- admin: manage users + settings + publish/unpublish
- editor: edit drafts; publish optional (decide in code)

## Security requirements
- Validate input (zod recommended)
- Rate limit login + contact endpoint
- CSRF protection for state-changing requests
- Password hashing: bcrypt or argon2
- Audit log (Phase 2): publish events, user changes

## Secrets & env vars
- Never commit secrets
- Vercel env vars for DB, session secret, email flag, etc.
