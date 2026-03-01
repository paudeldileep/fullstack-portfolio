# API Contracts

## Public (read-only)
- `GET /api/site-settings`
- `GET /api/pages/home` (published; draft if valid preview token)
- `GET /api/posts?status=published&tag=&page=`
- `GET /api/posts/:slug`
- `GET /api/projects?status=published`
- `GET /api/projects/:slug`
- `POST /api/contact` (stores contact message)
  - email notification is optional (env flag)

## Admin (protected)
Auth:
- `POST /api/admin/login`
- `POST /api/admin/logout`
- `GET /api/admin/me`

Pages:
- `POST /api/admin/pages`
- `PUT /api/admin/pages/:id`
- `POST /api/admin/pages/:id/publish`
- `POST /api/admin/pages/:id/unpublish`

Posts:
- `POST /api/admin/posts`
- `PUT /api/admin/posts/:id`
- `POST /api/admin/posts/:id/publish`
- `POST /api/admin/posts/:id/unpublish`

Projects:
- `POST /api/admin/projects`
- `PUT /api/admin/projects/:id`
- `POST /api/admin/projects/:id/publish`
- `POST /api/admin/projects/:id/unpublish`

Users (RBAC):
- `GET /api/admin/users`
- `POST /api/admin/users`
- `PUT /api/admin/users/:id` (role/status)
- `PUT /api/admin/users/:id/password` (reset)

Contact inbox:
- `GET /api/admin/contact-messages`
- `PUT /api/admin/contact-messages/:id` (mark read/archived)

Settings:
- `PUT /api/admin/site-settings` (theme tokens, social links, etc.)

## Error format (recommended)
- JSON: `{ code: string, message: string, details?: any }`
