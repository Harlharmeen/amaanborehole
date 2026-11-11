# Amaan Website — Persistent Agent Rules

1. Treat `AMAAN_WEBSITE_BUILD_BRIEF.md` as the source of truth for scope, routing, design, content and acceptance criteria.
2. Inspect the existing workspace before changing architecture. Preserve useful code, dependencies and conventions.
3. Follow the supplied hero screenshot and reference assets. Maintain the clean, minimal, spacious visual style; at 1440px use 64px page margins and 24px grid gutters.
4. Keep colours, typography, spacing, radii and layout rules centralised as reusable design tokens.
5. Build a compact company website, not a SaaS application. Do not add authentication, dashboards, database, CMS, payment flows or unrelated features.
6. Never fabricate company facts, contact details, addresses, service areas, projects, testimonials, years of experience, certifications, ratings, guarantees or technical specifications. Use configurable placeholders and document missing content.
7. Every visible CTA and navigation link must have a real destination. Do not leave `href="#"` placeholders.
8. Do not fake successful form submissions. Show success only after a real successful response; keep integration credentials out of client-side code.
9. Make all routes responsive, accessible by keyboard, semantic and usable on mobile. Respect reduced-motion preferences.
10. Use the smallest reasonable dependency set. Reuse components and data structures where this improves consistency; avoid premature abstraction.
11. After implementation, run the app and verify desktop, tablet and mobile layouts; fix broken links, overflow, console errors and build/type/lint failures.
12. In the final handoff, distinguish implemented features from integrations/content awaiting configuration.
