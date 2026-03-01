# Routing

## Public
- `/` long-scroll portfolio (SSR)
- `/blog` blog list (SSR)
- `/blog/[slug]` blog post (SSR)
- `/projects/[slug]` project details (SSR)
- `/contact` optional dedicated page (optional; MVP uses section on `/`)

## Admin
- `/admin` admin console shell (auth required)
- `/admin/*` admin subroutes

## Render-if-data-exists rule
A section is shown only if its block exists and has content:
- arrays must be non-empty
- required strings must be present
- images must include alt text if meaningful

## Preview
- draft content is viewable via `?previewToken=...`
- public pages remain published-only without the token
