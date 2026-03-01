# Content Model (MongoDB)

## Collections

### users
- email (unique)
- passwordHash
- name
- role: admin | editor
- status: active | disabled
- lastLoginAt
- createdAt/updatedAt

### pages
Represents composed pages as blocks (MVP uses only slug `home`).
- slug: `home` (unique)
- title
- status: draft | published
- blocks: typed blocks array
- seo: { title, description, ogImageUrl }
- updatedAt

Draft/publish rule:
- content is edited as drafts
- preview with token
- publish to make public

### posts (MDX)
- slug (unique)
- title, summary
- contentMdx
- tags[]
- status: draft | published
- publishedAt
- seo
- createdAt/updatedAt

### projects
- slug (unique)
- name, summary
- detailsMdx
- highlights[], tech[]
- coverImage {url, alt}
- gallery[] {url, alt}
- links {repoUrl?, liveUrl?}
- status: draft | published
- featured: boolean
- createdAt/updatedAt

### contactMessages
- name, email, message
- createdAt
- status: new | read | archived

### siteSettings (singleton)
- contactEmail
- socialLinks (map or array)
- theme:
  - modeDefault: light|dark|system
  - tokens: CSS variable map
  - palettes (optional)
- media:
  - provider: vercelBlob
  - maxUploadBytes
- updatedAt

## Block types (home)
- hero
- richMdx (about)
- skills
- experienceTimeline (curvyAlternating)
- projectGrid
- testimonials
- certifications
- education
- socialProof (links/icons only)
- contactInfo
