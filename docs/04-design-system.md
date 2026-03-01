# Design System

## Goals
- Minimal, modern, readable
- WCAG 2.2 AA baseline
- Themeable via CSS variables from DB

## Implementation
- Use CSS variables for tokens (see `docs/design/03-color-tokens.md`)
- Components come from `packages/ui`
- Use consistent spacing scale (8px base)

## Tokens
- Layout: max width 1120px, responsive paddings
- Radius: 16–20px
- Shadows: subtle in light, softer in dark

## Component rules
- Buttons: 44x44 min hit target, focus-visible ring
- Cards: border + radius + subtle shadow
- Links: underline on hover (or always underline in body text)
