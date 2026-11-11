# AMAAN BOREHOLE DRILLING & GEOTECHNICAL SERVICES
## Website Build Brief & Implementation Specification

**Document type:** Product, UX, visual design and frontend implementation brief  
**Version:** 1.0  
**Prepared:** 11 November 2026  
**Primary use:** Provide this document to Google Antigravity (or another coding agent) as the source of truth for building the Amaan website.

---

# 1. Instructions to the Coding Agent

Build a polished, responsive, production-minded company website for **Amaan Borehole Drilling & Geotechnical Services** using the requirements in this document.

Before writing code:

1. Inspect the existing workspace, package manager, framework, installed dependencies, current routes, assets and existing implementation.
2. Preserve useful existing work. Do not replace or restructure a working project without a clear reason.
3. Inspect the files in `/references` and `/assets`. The hero screenshot is the primary visual reference. The existing landing-page SVG and About-section SVG are supporting design references, not permission to copy every layout literally.
4. Produce a concise implementation plan and identify any missing business information that affects functionality. Do not stop for non-blocking missing information; use clearly marked configuration placeholders.
5. Implement the site in coherent stages, run the project, inspect it in a browser at desktop/tablet/mobile widths, and fix visible issues before reporting completion.

**Core instruction:** This is a compact professional services website, not a complex web application. Keep the implementation lean, maintainable and easy for the business owner to update. Do not add a database, login, dashboard, CMS, payment flow or other product features unless separately requested.

Do not invent company facts. In particular, do not fabricate years of experience, completed project counts, client names, testimonials, accreditations, certifications, registration numbers, technical specifications, office addresses, phone numbers, email addresses, service areas or performance guarantees. Keep missing facts in one clearly documented configuration/content layer and hide optional UI elements when no verified value exists.

---

# 2. Project Overview

## 2.1 Business

**Business name:** Amaan Borehole Drilling & Geotechnical Services  
**Business category:** Borehole drilling, geotechnical investigation, site investigation and related water services.  
**Website type:** Corporate/service-business website.  
**Primary market:** To be confirmed by the business. Do not assume a city, state or national coverage area until supplied.

## 2.2 Product Definition

The website is Amaan's public-facing digital presence. It should explain what the company does, communicate a credible and professional approach, show available evidence of field work, answer early questions and make it simple for a prospective client to enquire.

The website should behave like a clear business-development tool:

**Get discovered → Explain services → Build confidence → Show evidence → Generate enquiries → Make contact easy.**

It is not intended to be a large content portal or a complicated application.

## 2.3 Primary Objective

Help prospective clients quickly understand Amaan's technical services and take the next step by requesting a service, calling, sending a WhatsApp message or finding the company's location.

## 2.4 Supporting Objectives

- Establish a consistent, credible digital identity.
- Explain the difference between the company's core services.
- Communicate a structured, engineering-driven approach to work.
- Present completed projects and field activities as evidence when approved materials are available.
- Publish useful educational articles that support search visibility over time.
- Make the website easy to use on phones, where many enquiries may originate.
- Keep future content updates straightforward without requiring a complex CMS.

## 2.5 Primary Audiences

Design for the following likely visitor groups. Treat these as working audience definitions, not verified customer research:

1. **Property owners and homeowners** looking for a borehole or water-related service.
2. **Developers and contractors** needing site investigation or geotechnical information before or during construction.
3. **Institutional and commercial clients** seeking a service provider for a defined technical project.
4. **People comparing providers** who want to understand the company's capabilities, working process, project experience and contact details.
5. **Visitors researching a problem** who arrive through an educational article and may later require a service.

## 2.6 Key Visitor Questions

The content and hierarchy should answer these questions without making users work for the information:

- What does Amaan do?
- Which service is relevant to my need?
- Does the company appear technically capable and organised?
- What is the process for starting a project?
- Can I see examples of field work or completed projects?
- How do I request a service?
- How can I call, message or locate the company?

## 2.7 Success Indicators

The initial site should make the following measurable in principle, even if analytics are not configured at launch:

- Visitors click a Request a Service CTA.
- Visitors submit a valid service enquiry once form delivery is configured.
- Visitors initiate a phone call or WhatsApp conversation.
- Visitors open service detail pages.
- Visitors view project records and blog articles.
- Visitors can find essential contact/location information without confusion.

Do not add analytics until the business supplies an approved analytics ID and privacy requirements are agreed.

---

# 3. Scope and Product Boundaries

## 3.1 In Scope — Initial Release

- Responsive public website.
- Home page with the core landing-page sections.
- About page.
- Services overview page.
- Reusable service detail page template for the four core service categories.
- Projects/field-work listing page.
- Blog/insights listing page.
- Reusable blog article page template.
- Contact page with enquiry form UI and contact channels.
- Shared navigation, mobile menu and footer.
- WhatsApp, click-to-call and email links when verified contact details are supplied.
- Map embed or directions link once a verified location is supplied.
- Search-engine metadata and crawlable page structure.
- Accessible interactions and responsive layouts.
- Basic error/404 page.

## 3.2 Explicitly Out of Scope

Do not build these in the initial release:

- User accounts, authentication or user profiles.
- Customer portal, project tracking dashboard or admin dashboard.
- Online payments, deposits or booking calendar.
- Database-backed project management.
- Custom CMS or editorial admin panel.
- Complex quotation calculator.
- Live chat platform integration.
- Multi-language content system.
- Large animation system or 3D effects.
- Complex map/search/geolocation features.
- Automated email marketing flows.

These can be considered later if the business case is established.

## 3.3 Scope Principle

Build the smallest complete website that communicates the business professionally and supports enquiries. Prefer one reusable template and a data-driven content record over separate, duplicated code for every service or article.

---

# 4. Brand and Design System Reference

## 4.1 Visual Benchmark

The file `/references/hero-section-reference.jpg` is the primary visual benchmark. It shows the intended design quality and layout discipline. Preserve the existing hero section's visual direction rather than inventing a different visual language.

The target style is:

- Clean, minimal and confident.
- Spacious rather than crowded.
- Engineering-led without looking like a generic construction template.
- Professional and contemporary.
- Strong typographic hierarchy.
- Restrained use of colour and decoration.
- Clear content blocks and consistent alignment.
- Image-led only where imagery adds information or credibility.

The site should feel calm, competent and trustworthy. Avoid visual noise, oversized decorative shapes, excessive gradients, dense card grids, unnecessary icons and heavy shadows.

## 4.2 Working Colour Tokens

Use CSS custom properties so the palette can be adjusted globally. These are working tokens derived from the supplied design direction; compare them with the logo and reference screenshot and tune them to match. Do not scatter raw colour values through component files.

| Token | Working value | Use |
|---|---|---|
| `--color-primary` | `#0B3F5D` | Main engineering blue; primary buttons, links and key accents |
| `--color-primary-dark` | `#082F46` | Hover/active states and deep emphasis |
| `--color-primary-soft` | `#E8F0F4` | Soft blue panels and backgrounds |
| `--color-accent` | `#C49A45` | Restrained gold accent, active underline and small highlights |
| `--color-accent-soft` | `#F5EEDC` | Optional soft accent background |
| `--color-background` | `#F2F6F8` | Main cool off-white page background, matching the hero reference |
| `--color-surface` | `#FFFFFF` | Cards, form fields and content surfaces |
| `--color-text` | `#202326` | Main text and headings |
| `--color-muted` | `#66737B` | Supporting text, captions and metadata |
| `--color-border` | `#D9E2E7` | Subtle dividers, card and input borders |
| `--color-success` | `#287A53` | Form success state only |
| `--color-error` | `#B42318` | Form error state only |

The primary blue and gold should not compete. Blue is the principal brand action colour; gold is a small supporting accent, not a second dominant colour.

## 4.3 Typography

Working font recommendation:

- **Headings/display:** Manrope, with a bold or extra-bold weight for hero and section headings.
- **Body/UI:** Inter, regular and medium weights.

Use the supplied hero screenshot as the final visual reference. If the repository or Figma exports already contain an approved font choice, preserve that choice instead of adding a new one.

Typography rules:

- Use a clear heading hierarchy: one H1 per page, followed by H2 section headings and H3 card/subsection headings.
- Keep paragraphs comfortably readable and avoid long line lengths.
- Avoid using many font weights or font sizes without a clear reason.
- Use sentence case for most headings and labels.
- Do not use uppercase body paragraphs.

Suggested desktop type scale (responsive down as needed):

| Style | Suggested size | Weight |
|---|---:|---:|
| Hero H1 | 60–68px | 700–800 |
| Page H1 | 48–56px | 700–800 |
| Section H2 | 40–48px | 700–800 |
| Card/service H3 | 22–26px | 650–700 |
| Lead paragraph | 18–20px | 400–500 |
| Body | 16px | 400 |
| Small/meta | 13–14px | 400–500 |
| Button | 16px | 600–700 |

Use `clamp()` or equivalent responsive typography where useful. On mobile, keep the hero title impactful but avoid excessive multi-line wrapping.

## 4.4 Layout Grid and Spacing

The supplied hero design uses a desktop reference of **1440px wide, 64px outer margins and 24px gutters**. Apply this consistently.

| Viewport | Horizontal page padding | Grid gutter |
|---|---:|---:|
| Desktop, 1440px reference | 64px | 24px |
| Large desktop, wider than 1440px | centred container, max width about 1312px | 24px |
| Tablet, 768–1023px | 32px | 20–24px |
| Mobile, below 768px | 20–24px | 16px |

Use a 12-column desktop grid as the general layout system. At a 1440px canvas with 64px side margins, the usable container is 1312px. Keep section content aligned to the same container unless a full-bleed image/background is intentional.

Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96 and 120px. Use a consistent rhythm rather than choosing unrelated spacing values per component.

Suggested vertical section padding:

- Desktop: 96–120px top and bottom for major sections.
- Tablet: 72–88px.
- Mobile: 56–72px.

Use the content's needs to determine section height. Do not set fixed heights for text-heavy sections.

## 4.5 Radius, Borders and Shadows

- Buttons: 8–10px corner radius, consistent with the reference.
- Cards/media frames: 12–20px depending on size.
- Inputs: 8px radius.
- Borders: 1px subtle border where needed.
- Shadows: minimal and only when they clarify elevation. Avoid the generic floating-card look.

## 4.6 Buttons and Links

Create a small consistent button system:

1. **Primary:** solid primary blue with white text.
2. **Secondary:** transparent or page-background fill with primary border and text.
3. **Text link:** plain text with a small arrow/icon only where helpful.
4. **Icon button:** reserved for controls such as the mobile menu; include accessible labels.

Button labels should be action-oriented and consistent. Main label: **Request a Service**. Secondary project CTA: **View Our Projects** or **Explore Projects**. Do not invent new CTA wording for every page.

## 4.7 Iconography

Use a consistent lightweight outline icon family if icons are needed (Lucide is acceptable). Icons should support comprehension, not decorate every heading. Do not mix emoji, filled clip-art and multiple icon styles.

## 4.8 Images and Media

- Use `/assets/borehole-hero-image.png` as the supplied hero/field image if it fits the final crop.
- Use the supplied actual Amaan logo file if present in the workspace. Do not redraw or approximate the logo if the source asset is available.
- For other missing imagery, use neutral, clearly intentional image placeholders, not random stock photography or unrelated construction images.
- A placeholder should have a restrained neutral fill, a subtle border or texture, and a short label such as “Project image”. Do not leave broken image icons or misleading stock-photo URLs.
- Keep placeholder blocks square (1:1) where the composition calls for a square image. Use the hero image in its wide landscape frame as shown in the reference.
- Use `object-fit: cover` and a deliberate `object-position` so important machinery or field details remain visible.
- Supply meaningful alt text for real informative images. Use empty alt text for purely decorative images.

---

# 5. Information Architecture and Routing

## 5.1 Primary Navigation

Desktop navigation order:

- Home
- About
- Services
- Projects
- Blog
- Contact

Primary navigation CTA: **Request a Service**.

Mobile navigation should provide the same destinations in a compact menu and keep the service-request action easy to reach.

## 5.2 Route Map

Implement these routes:

| Route | Page | Priority |
|---|---|---|
| `/` | Home | Required |
| `/about` | About Amaan | Required |
| `/services` | Services overview | Required |
| `/services/[slug]` | Individual service detail template | Required |
| `/projects` | Projects/field-work listing | Required |
| `/blog` | Blog/insights listing | Required |
| `/blog/[slug]` | Individual article template | Required |
| `/contact` | Contact and enquiry | Required |
| `not-found` / `404` | Not-found state | Required |

Initial service slugs:

- `/services/borehole-drilling`
- `/services/geotechnical-investigation`
- `/services/site-investigation`
- `/services/water-solutions`

Use one reusable service-detail template driven by structured service data. Do not build four duplicated pages with separate markup.

Blog article pages should be generated from local content files or structured data. A custom CMS is not required for the first release.

Individual project-detail routes are **optional**. Add `/projects/[slug]` only if Amaan has enough verified case-study information to support useful project pages. If not, keep the initial `/projects` listing simple and let cards show available facts without fake detail links.

## 5.3 Navigation Behaviour

- The logo links to `/`.
- The current page's navigation item has a clear active state.
- The active state should remain subtle: a thin gold underline or similarly restrained marker.
- Use a consistent sticky or static header. Prefer a static header unless sticky behaviour materially improves navigation; if sticky, avoid excessive height or covering anchor targets.
- Header CTA links to `/contact#enquiry` or `/contact`.
- Service menu/list links to the Services overview and service detail routes.
- Breadcrumbs should appear on service detail and blog article pages where useful.
- All internal links must use real local routes. No `href="#"` placeholders in final code.

---

# 6. Page-by-Page Structure and Wireframes

# 6.1 Home Page — `/`

The home page is the primary landing page. It should follow the current section order and retain the approved hero design.

### Section 1: Navigation

- Amaan logo/wordmark aligned left.
- Main navigation aligned centrally or according to the supplied hero reference.
- Request a Service primary button on the right.
- Mobile menu at tablet/mobile breakpoints.

### Section 2: Hero — Preserve the Existing Design

The supplied screenshot `/references/hero-section-reference.jpg` is the hero visual source of truth.

Content direction:

**Headline:** “Groundwork you can trust. Results built to last.”

**Supporting copy:** “Borehole drilling and geotechnical services for property owners, developers and contractors who need clear answers before they build.”

**Primary CTA:** Request a Service  
**Secondary CTA:** Explore Projects / View Our Projects

Layout requirements:

- Centred headline and supporting copy as shown in the reference.
- Two horizontally aligned CTAs on desktop, stacked or fluid-width on small screens.
- Wide borehole field image beneath the copy and buttons.
- The hero image should have a deliberate crop and rounded corners.
- Keep the generous whitespace and restrained composition.
- Do not add a carousel, video background, statistics ribbon or extra badge cluster.
- If credibility indicators are displayed, use only verified information. Until supplied, omit numerical proof points.

### Section 3: About Amaan Teaser

Purpose: provide enough context to establish credibility and link to the full About page.

Suggested layout:

- Two-column desktop composition.
- One side contains a square image placeholder or approved field image.
- The other side contains an eyebrow label, concise heading, one short paragraph, two or three proof/approach statements and a CTA.
- Use the existing About-section SVG in `/references/about-section-svg-reference.svg` as a supporting reference for spacing and composition.

Content themes:

- Company overview.
- Technical expertise.
- Professional approach.
- Mission and values.
- Engineering-driven delivery.

CTA: **Learn More About Amaan** → `/about`.

Do not add an unverified establishment date or years-of-experience claim.

### Section 4: Services Overview

Purpose: help visitors identify the relevant service quickly.

Display four service items:

1. **Borehole Drilling** — explain that the service relates to professional borehole drilling for water access. Confirm exact scope with the business.
2. **Geotechnical Investigation** — explain the role of ground/soil investigation in understanding site conditions. Avoid unsupported technical claims.
3. **Site Investigation** — describe the assessment of project/site conditions before relevant works. Confirm precise service boundaries.
4. **Water & Related Solutions** — keep the description broad until the company clarifies the exact work included.

Layout:

- Clear section title and short introduction.
- Four consistent service tiles/cards in a desktop grid; stack on mobile.
- Each item includes a concise description and “Learn more” link.
- Avoid large decorative icons if simple typography and layout communicate the information better.

CTA: **Explore All Services** → `/services`.

### Section 5: How We Work

Purpose: show a clear, organised process and reduce uncertainty.

Present five steps in order:

1. **Consultation** — Understanding the client's requirements.
2. **Site Assessment** — Evaluating the project location and requirements.
3. **Technical Evaluation** — Conducting the necessary technical investigation.
4. **Execution** — Carrying out the required work professionally.
5. **Reporting & Delivery** — Providing documentation and completing the project.

Desktop: horizontal process/timeline with five steps and a clear sequence.  
Mobile: vertical step list with a visible connector or numbering.

Keep descriptions short. This is an explanatory process, not a claim that every service follows exactly the same sequence; phrase it as the typical project approach and allow the company to revise it.

### Section 6: Projects / Field Work Preview

Purpose: provide visible evidence of capability.

- Show up to three featured project/field-work records on the home page.
- Each card should show an approved image, project/service type, location if approved, and short description.
- Only display records supplied or approved by Amaan.
- If project records are not yet available, use an understated “Project imagery coming soon” placeholder area rather than fabricated project cards.
- Use a consistent image ratio; square placeholders are acceptable where no imagery is supplied.

CTA: **View All Projects** → `/projects`.

### Section 7: Why Choose Amaan

Purpose: answer “Why should I trust Amaan with my project?”

Present these strengths:

- Technical Expertise.
- Reliable Execution.
- Professional Reporting.
- Quality Equipment & Methods.
- Structured Project Process.

Use short explanations only where the business can substantiate them. Keep statements general and avoid superlatives such as “number one”, “best in Nigeria” or “industry-leading” unless supported by evidence.

Possible layout: one strong section heading and a clean list/grid of five strengths. A row of five equal cards is not mandatory; prioritise reading flow and spacing.

### Section 8: Blog / Insights Preview

Purpose: show useful educational content and support the blog route.

Show up to three recent or featured articles when articles exist. Each card may display:

- Category.
- Article title.
- Short excerpt.
- Published date only when real.
- Read article link.

Potential topic backlog:

- How to Know if Your Property Needs a Borehole.
- What Is a Geotechnical Investigation?
- How Much Does Borehole Drilling Cost?
- What to Consider Before Drilling a Borehole.
- Why Site Investigation Matters Before Construction.
- Common Borehole Problems and How to Prevent Them.

These are topic ideas, not approved published articles. Do not create fake author names, dates or technical guidance. If no approved posts exist, either hide the section or show a restrained editorial placeholder with a clear internal note for the owner; do not present placeholder content as published material.

CTA: **Explore All Insights** → `/blog`.

### Section 9: Contact / Enquiry CTA

Purpose: convert interest into an enquiry.

- Strong but concise heading inviting visitors to discuss their project.
- Primary CTA: Request a Service → `/contact#enquiry`.
- Secondary CTA: Chat on WhatsApp only when a verified WhatsApp number is configured.
- Avoid repeating the full contact form on the home page unless it clearly improves conversion. A compact CTA panel is sufficient.

### Section 10: Footer

Use the shared footer specification in Section 6.9.

---

# 6.2 About Page — `/about`

Purpose: explain who Amaan is, the company's working philosophy and its approach to technical service delivery.

Recommended structure:

1. **Page introduction:** About Amaan, short positioning paragraph.
2. **Company overview:** concise company narrative, written from approved facts.
3. **Expertise:** describe the service areas and the type of challenges Amaan supports.
4. **Professional approach:** assessment, planning, technical evaluation, execution and reporting.
5. **Mission and values:** use the company's approved mission/values. If not supplied, use neutral headings as placeholders and do not create an official mission statement.
6. **Enquiry CTA:** Request a Service.

Do not repeat the full home page. The About page should provide more context, not just duplicate the teaser.

---

# 6.3 Services Overview — `/services`

Purpose: provide a clear overview and route users to the right service detail page.

Structure:

1. Page intro with H1 and short supporting copy.
2. Four core service summaries.
3. A short explanation of the typical project approach (optional; link to or reference the How We Work section on Home).
4. Relevant enquiry CTA.

Every service tile should link to its own detail page. Avoid long technical descriptions on this overview page.

---

# 6.4 Service Detail Template — `/services/[slug]`

Create one reusable template driven by structured content. Initial service entries:

- Borehole Drilling.
- Geotechnical Investigation.
- Site Investigation.
- Water & Related Solutions.

Recommended content order for each service page:

1. Breadcrumb: Home → Services → Current service.
2. Service H1 and concise value statement.
3. Short overview explaining what the service is and the type of client/project it may support.
4. Image or square image placeholder.
5. “What the service involves” or “Service scope” section.
6. “When you may need this service” section, using technically reviewed copy.
7. “Our approach” / process summary.
8. Deliverables or expected next steps only when confirmed by Amaan.
9. Frequently asked questions only when accurate answers are available.
10. Clear CTA: Request This Service → `/contact?service=[service-slug]#enquiry`.

The enquiry form should preselect the service from the query string when possible.

Technical content must be reviewed by Amaan or a qualified company representative. Do not invent drilling depths, yield expectations, soil test methods, standards, equipment specifications, timelines, costs or guaranteed outcomes.

---

# 6.5 Projects Page — `/projects`

Purpose: showcase verified completed projects and relevant field activities.

Structure:

1. Page intro: Projects / Field Work.
2. Project grid.
3. Optional simple category filter only if there are enough projects to justify it.
4. Enquiry CTA.

Each project record can include:

- Project name/title.
- Service category.
- Location (only if approved for publication).
- Short description.
- Project image(s).
- Completion date/year only if supplied.
- Technical information only if approved.

Do not manufacture portfolio examples to fill the grid. If the portfolio is small, show a smaller number of strong records rather than fake volume. If no approved projects exist yet, use an honest empty state or a field-work gallery with supplied, non-confidential images and accurate captions.

Individual project detail pages are optional and should be implemented only when there is enough content for each record.

---

# 6.6 Blog Listing — `/blog`

Purpose: organise educational content around the company's services and related questions.

Structure:

1. Page title and short introduction.
2. Optional featured article if a real featured post exists.
3. Article grid/list.
4. Simple pagination only if the number of articles requires it.

Each article preview should include title, category, short excerpt and a real publication date when available. Avoid fake “latest” labels or fabricated dates.

Content can be stored as Markdown/MDX or structured local files for the initial release. Use a data-driven content model to avoid hardcoding article layouts into the page.

---

# 6.7 Blog Article Template — `/blog/[slug]`

Structure:

1. Breadcrumb: Home → Blog → Article.
2. Category, H1, optional published date and reading time.
3. Optional featured image.
4. Main article body with a readable content width.
5. Related articles when available.
6. Contextual service CTA.

Article pages must use semantic headings and readable typography. Add Article structured data only when the actual title, date, author/publisher and other required values are known. Do not invent author credentials or technical advice.

---

# 6.8 Contact Page — `/contact`

Purpose: make it straightforward to start an enquiry or contact the business through a preferred channel.

Recommended desktop layout:

- Two-column section.
- One column with phone, email, WhatsApp and office/location details.
- One column with the service enquiry form.
- Map or directions block below or alongside, depending on available location data.

### Enquiry Form Fields

Required or recommended fields:

- Full name — required.
- Phone number — required.
- Email address — optional or required depending on business preference.
- Service required — select with the four core service options and “Not sure yet”.
- Project location — optional initially; confirm whether it should be required.
- Message / project requirements — required.
- Consent/privacy acknowledgement — include only when a suitable privacy statement is supplied or agreed.

Behaviour:

- Validate fields accessibly.
- Show field-level errors and a clear submission-level status.
- Preserve entered values when validation fails.
- Show success only after a real successful submission response.
- Prevent duplicate submissions while a request is processing.
- Include a spam-protection strategy appropriate to the chosen form provider.
- Never simulate a successful submission if no backend/provider is configured.

### Form Delivery

The business has not supplied an email destination or form service credentials in this brief. Build the form UI and a clean integration boundary. Use an environment variable or a documented configuration value for the approved form endpoint/provider. Until configured, show a clear fallback directing the visitor to the verified contact channels. Do not hardcode a fake destination.

### Contact Channels

- Phone: use `tel:` link when the number is verified.
- Email: use `mailto:` link when the address is verified.
- WhatsApp: construct a `wa.me` link only from the verified international-format number.
- Address: display only after confirmation.
- Map: embed a map or supply a directions link only after a verified address/map location is provided.

Never use guessed coordinates or an approximate business address.

---

# 6.9 Shared Footer

The footer should be compact, easy to scan and consistent across all routes.

Suggested columns:

**Company**
- About Amaan.
- Projects.
- Blog.
- Contact.

**Services**
- Borehole Drilling.
- Geotechnical Investigation.
- Site Investigation.
- Water Solutions.

**Contact**
- Phone.
- Email.
- WhatsApp.
- Address.

**Social**
- Show only verified social accounts.

Footer bottom row:
- Copyright year generated dynamically.
- Amaan Borehole Drilling & Geotechnical Services.
- Optional Privacy Policy link only when an actual policy page exists.

Hide any contact or social item that has not been configured. Do not display dummy links.

---

# 7. Reusable Component Inventory

Build only the components required by the pages. Avoid premature abstraction, but avoid duplicating shared patterns.

## 7.1 Global Components

- `SiteHeader` — desktop header and responsive navigation.
- `MobileNavigation` — accessible mobile menu.
- `SiteFooter` — shared footer.
- `Container` — max-width and responsive page gutters.
- `Section` — consistent vertical section spacing.
- `SectionHeading` — eyebrow, title and supporting copy.
- `Breadcrumbs` — used on nested routes.
- `Button` — primary, secondary and text variants.
- `CTASection` — reusable conversion block.

## 7.2 Content Components

- `ServiceCard`.
- `ProjectCard`.
- `BlogCard`.
- `ProcessStep`.
- `ValueItem` / `FeatureItem`.
- `ImagePlaceholder`.
- `ContactDetail`.
- `EnquiryForm`.
- `MapPanel` or `DirectionsLink`.

## 7.3 Component Rules

- Components should receive content through props or data records.
- Keep one source of truth for shared contact and company information.
- Use semantic HTML elements.
- Avoid giant components containing every page and every section.
- Do not create a component for a one-off decorative line or tiny text wrapper unless there is a real reuse benefit.
- Keep styling consistent through shared tokens and variants.

---

# 8. Content and Data Model

Use a small configuration/content layer so the owner can update content without searching through layout markup.

Suggested structure (adapt to the existing framework):

```text
src/
  app/
    page.tsx
    about/page.tsx
    services/page.tsx
    services/[slug]/page.tsx
    projects/page.tsx
    blog/page.tsx
    blog/[slug]/page.tsx
    contact/page.tsx
  components/
    layout/
    sections/
    ui/
  content/
    services.ts
    projects.ts
    blog/
  config/
    site.ts
  styles/
    globals.css
```

This is an illustrative organisation, not a requirement to force a new folder layout onto an existing repository.

## 8.1 Site Configuration

Keep centralised fields such as:

- Business name.
- Logo asset path.
- Tagline/short description.
- Phone.
- Email.
- WhatsApp number.
- Address.
- Map URL/embed source.
- Social profile URLs.
- Service area(s).
- Form endpoint/provider configuration.

Unknown values should remain empty/null and related UI should be omitted until supplied.

## 8.2 Service Data

Each service record should support:

- `slug`.
- `title`.
- `shortDescription`.
- `intro`.
- `overview`.
- `scope` or key points.
- `image` (optional).
- `faq` (optional, approved answers only).
- `seoTitle`.
- `seoDescription`.

## 8.3 Project Data

Each project record should support:

- `slug` or stable `id`.
- `title`.
- `serviceType`.
- `location` (optional).
- `summary`.
- `images`.
- `date` (optional).
- `technicalNotes` (optional, verified only).
- `featured` (boolean).

## 8.4 Blog Data

Each article record should support:

- `slug`.
- `title`.
- `category`.
- `excerpt`.
- `publishedAt` (optional until real).
- `author` (optional and verified).
- `coverImage` (optional).
- `body` / Markdown content.
- `seoTitle`.
- `seoDescription`.

Validate slugs and handle unknown slugs with a proper 404 state.

---

# 9. Technical Implementation Guidance

## 9.1 Inspect Before Selecting a Stack

First inspect the repository. If a working framework already exists, use it and preserve its conventions. Do not migrate frameworks just for preference.

If the workspace is empty and no stack is mandated, the recommended baseline is:

- Next.js App Router.
- TypeScript.
- CSS variables for design tokens.
- Tailwind CSS or the existing styling approach, but do not mix multiple styling systems without a reason.
- Local content/data files for services, projects and articles.
- Static generation for pages/content that do not need runtime data.

Keep dependencies minimal. Use a lightweight icon library only if icons are needed. Do not install a large component library just to build a small marketing website.

## 9.2 Rendering and Runtime

- Prefer static rendering for the public informational pages.
- Use client-side JavaScript only for interactions that require it (mobile menu, filters if justified, form state).
- Avoid unnecessary client components.
- Avoid an API/database architecture for static information.
- Do not expose private API keys in client-side code.

## 9.3 Responsive Behaviour

Test at a minimum of:

- Desktop: 1440px wide.
- Laptop: 1280px wide.
- Tablet: 768px wide.
- Mobile: 390px wide.
- Narrow mobile: 360px wide.

Requirements:

- No horizontal overflow.
- No text clipping or overlapping.
- Navigation switches cleanly to a mobile menu.
- Two-column layouts stack in a logical order.
- Buttons remain comfortably tappable.
- Forms fit within the viewport.
- Images retain intentional crops and aspect ratios.
- Footer columns collapse into a readable mobile layout.

## 9.4 Interaction Standards

- All CTAs must lead somewhere meaningful.
- Mobile menu opens/closes, closes after route selection, and supports keyboard interaction.
- Use visible focus states.
- Smooth scrolling may be used for in-page anchors, but respect `prefers-reduced-motion`.
- Avoid scroll-jacking, auto-playing media and unnecessary carousels.
- Add hover states without making hover essential to understanding the interface.
- External links should be recognisable and use safe link attributes when opening a new tab.

## 9.5 SEO and Discoverability

Implement:

- Unique page title and meta description for each route.
- One meaningful H1 per page.
- Semantic HTML and descriptive link text.
- Canonical URLs where appropriate.
- Open Graph metadata with supplied brand imagery.
- `sitemap.xml` and `robots.txt`.
- Descriptive image filenames and alt text.
- Search-readable service-specific page content.
- Blog article metadata.
- Breadcrumbs on nested pages.

Structured data may be added conservatively:

- `Organization` or an appropriate local business type only with confirmed business details.
- `Service` for genuine service pages if useful.
- `Article` for published articles with actual metadata.

Never add fabricated reviews, star ratings, ratings counts, opening hours, addresses, service areas, awards or credentials to structured data.

## 9.6 Accessibility

Target WCAG 2.2 AA principles where practical:

- Strong colour contrast for text and controls.
- Keyboard navigation throughout.
- Focus indicators visible on every interactive element.
- Form fields have associated labels and understandable errors.
- Mobile menu uses appropriate button semantics and expanded state.
- Images have suitable alt text.
- Heading order is logical.
- Do not communicate a state by colour alone.
- Honour reduced-motion preferences.
- Use adequate touch targets, preferably around 44px minimum for primary controls.

## 9.7 Performance

- Optimise large images and provide responsive sizes.
- Prioritise the hero image; lazy-load below-the-fold images.
- Avoid unnecessarily large JS bundles.
- Avoid autoplay video and heavy animation libraries.
- Use modern image formats where supported, with appropriate fallbacks.
- Prevent layout shift by reserving image dimensions/aspect ratios.
- Use font loading sensibly and avoid loading many unused weights.

## 9.8 Security and Privacy

- No secrets or credentials in committed source files.
- Validate and sanitise form inputs on the server/provider side.
- Add reasonable spam protection when the form provider is configured.
- Do not collect unnecessary personal information.
- Only publish contact data and project/client details approved by Amaan.
- Add a privacy notice if personal data is collected, once its content is approved.

---

# 10. Contact and Business Configuration — Required Before Launch

Create a single configuration file or environment-backed setup for the following values. Do not invent them:

| Information | Status in this brief | Implementation rule |
|---|---|---|
| Official logo asset (SVG/PNG) | Use existing repository asset if available; otherwise pending | Do not redraw if source exists |
| Phone number | Pending confirmation | Hide call CTA until configured |
| Email address | Pending confirmation | Hide email CTA until configured |
| WhatsApp number | Pending confirmation | Hide WhatsApp CTA until configured |
| Office address | Pending confirmation | Do not publish a guessed address |
| Map pin / map URL | Pending confirmation | Add only after location is verified |
| Service coverage area | Pending confirmation | Do not claim nationwide or regional coverage without approval |
| Company establishment year | Pending confirmation | Do not display an experience claim |
| Company registration/certifications | Pending confirmation | Do not display until documents/wording are approved |
| Project portfolio | Pending project records and images | Do not invent projects |
| Testimonials | Pending approved quotes and attribution | Do not generate fake testimonials |
| Social media links | Pending confirmation | Hide unconfigured platforms |
| Form destination/provider | Pending confirmation | Do not show false success without a real endpoint |
| Privacy policy wording | Pending | Add only if collected data requires it and wording is approved |

The agent should complete the website structure with safe placeholders and produce a short `CONTENT_REQUIRED.md` listing every item still needed from the business.

---

# 11. Content Writing Rules

- Use plain, professional English.
- Write for property owners, developers, contractors and institutional clients, not only technical specialists.
- Explain specialist terms briefly when necessary.
- Use concise paragraphs and descriptive headings.
- Lead with the client's need and the service's relevance.
- Avoid exaggerated marketing language.
- Avoid keyword stuffing.
- Do not make guarantees about water yield, drilling success, soil conditions, project timelines or cost unless the business explicitly approves the claim and its conditions.
- Keep technical facts accurate and request review where necessary.
- Use consistent service naming throughout navigation, cards, forms and metadata.

---

# 12. Suggested Build Sequence

Implement in this order so the site remains coherent and testable:

### Phase 1 — Workspace Audit and Foundation

- Inspect existing project and references.
- Confirm framework/build commands.
- Establish CSS variables, typography, container, grid and spacing tokens.
- Prepare site configuration and content data structure.

### Phase 2 — Shared Site Shell

- Header/navigation.
- Mobile menu.
- Buttons and shared container/section primitives.
- Footer.

### Phase 3 — Home Page

- Reproduce the approved hero reference.
- Add remaining home sections in the approved sequence.
- Use placeholders where content or approved imagery is missing.

### Phase 4 — Core Pages

- About.
- Services overview.
- Reusable service detail template and initial four routes.
- Projects listing.
- Blog listing and article template.
- Contact.
- 404/not-found state.

### Phase 5 — Functionality

- Navigation and all internal links.
- Service-specific enquiry preselection.
- Form validation and integration boundary.
- Click-to-call, email and WhatsApp links when configured.
- Map/directions when configured.

### Phase 6 — SEO, Accessibility and QA

- Metadata and technical SEO.
- Keyboard/focus testing.
- Mobile and tablet inspection.
- Image and performance optimisation.
- Broken-link and console-error checks.

Do not jump directly into polishing isolated cards before the complete page structure and routing work.

---

# 13. Acceptance Criteria

The first release is considered complete when all applicable points below pass:

## Structure and Routing

- [ ] All required routes load directly when entered in the browser.
- [ ] Header and footer are consistent across pages.
- [ ] Every primary navigation item points to the correct route.
- [ ] All four service detail routes use one reusable template and correct service data.
- [ ] Blog articles load from structured content and unknown slugs show a not-found state.
- [ ] No dead `#` links or invented destinations remain.

## Visual Quality

- [ ] The home hero closely follows the supplied 1440px reference.
- [ ] Desktop container uses 64px reference margins and 24px grid gutters at 1440px.
- [ ] Tablet/mobile gutters adjust consistently.
- [ ] Section spacing, typography and button styles are consistent.
- [ ] The result feels minimal, spacious, technical and professional.
- [ ] There are no arbitrary extra colours, shadows, icons or animations.
- [ ] Missing assets use intentional placeholders, not broken links.

## Functionality

- [ ] Mobile menu opens, closes and navigates correctly.
- [ ] All CTAs have meaningful destinations.
- [ ] Service detail CTA passes the selected service to the contact form where possible.
- [ ] Form validation works and errors are accessible.
- [ ] Form success is shown only after a real successful submission response.
- [ ] Contact links and map controls appear only when real values are configured.

## Content Integrity

- [ ] No fabricated contact details, office address, project examples, client logos or social accounts.
- [ ] No fabricated experience years, metrics, accreditations, guarantees or testimonials.
- [ ] Technical service content is clearly marked for business review where needed.
- [ ] Placeholder content is not presented as verified company information.

## Quality and Accessibility

- [ ] Site works at 1440, 1280, 768, 390 and 360px widths.
- [ ] No horizontal overflow on supported widths.
- [ ] Keyboard focus is visible and navigation is operable without a mouse.
- [ ] Form labels and errors are accessible.
- [ ] Images have appropriate alt text.
- [ ] Metadata exists for every public page.
- [ ] No blocking console errors or broken images.
- [ ] Build and lint/type checks pass where configured.

---

# 14. Required Agent Handoff at Completion

When implementation is finished, report:

1. What was built and which routes were created.
2. The chosen stack and any important architectural decisions.
3. The main files/folders created or updated.
4. How to run the project locally.
5. Which features are functional now.
6. Which integrations remain unconfigured (form provider, WhatsApp, phone, email, map, analytics).
7. A concise list of content/assets still required from Amaan.
8. Results of responsive, build, lint and accessibility checks.
9. Any known limitations or follow-up tasks.

Do not claim the website is production-ready if the contact form, real contact data, legal/privacy content or other launch-critical integrations are still missing. Clearly distinguish “implemented” from “awaiting configuration”.

---

# 15. Reference Files Included with This Brief

- `references/hero-section-reference.jpg` — primary visual reference for the approved hero section.
- `references/landing-page-first-draft.svg` — supporting first-draft full-page visual reference.
- `references/landing-page-first-draft-preview.png` — preview of the first-draft SVG.
- `references/about-section-svg-reference.svg` — supporting reference for the About section layout.
- `assets/borehole-hero-image.png` — supplied borehole drilling image for the hero/field image area.

Use these assets as visual guidance and local media. Do not discard them or replace them with arbitrary online images. If a suitable original logo asset exists elsewhere in the workspace, use that source asset.

---

# 16. Final Product Direction

The finished website should feel like a carefully designed engineering services company website: confident, clean, restrained and easy to navigate.

It should not feel like a generic construction theme, a noisy template marketplace demo or an overbuilt software product.

**The most important priorities are clarity, credibility, consistency, responsive usability and enquiry conversion.**
