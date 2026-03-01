# Architecture

## High-level
- `apps/web` is the SSR host (portfolio + blog + admin route)
- API is implemented via Next Route Handlers under `/app/api/*` (MVP)
- MongoDB Atlas stores content and admin users
- Vercel Blob stores uploaded media; MongoDB stores URLs + metadata

## Component diagram (PlantUML)

```plantuml
@startuml
skinparam componentStyle rectangle

component "Vercel" as vercel
component "Next.js Web (apps/web)" as web
component "API Route Handlers (/app/api/*)" as api
database "MongoDB Atlas" as mongo
component "Vercel Blob (media)" as blob
component "Shared UI (packages/ui)" as ui
component "Content SDK (packages/content-sdk)" as sdk
component "Admin Remote (apps/admin)\nPhase 2+" as admin

vercel --> web
web --> api
api --> mongo
api --> blob
web ..> ui
web ..> sdk
admin ..> ui
admin ..> sdk
@enduml
```

## Microfrontend plan
- Phase 1: ship everything inside `apps/web`
- Phase 2: extract Admin as a remote MFE loaded by the host (low SEO risk)
- Phase 3: optionally extract projects/work as a remote

## Non-functional goals
- SEO: SSR pages, clean metadata, sitemap, robots
- A11y: WCAG 2.2 AA
- Security: RBAC + secure cookies + validation + rate limiting
