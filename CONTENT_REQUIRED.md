# Amaan Website — Launch Configuration & Content Status

This document records the exact configuration status of the website as verified against the official brand collateral and project specifications.

---

## 1. Verified & Integrated Assets (Configured in Code)

- [x] **Official Brand Logos**: High-resolution PNG mark, dark wordmark (`/assets/logo.png`), and white contrast wordmark (`/assets/logo-white.png`) extracted directly from `Client Ready 2.0` brand collateral.
- [x] **Hero Fieldwork Visual**: Approved high-resolution borehole drilling rig image (`/assets/borehole-hero-image.png`).
- [x] **Official Company Name & Identity**: Amaan Borehole Drilling & Geotechnical Services.
- [x] **Enterprise Registration**: BN: 7884773 (recorded from approved letterhead).
- [x] **Company Representative**: Odemakin Sodiq (from approved documentation).
- [x] **Official Phone Numbers**:
  - Primary: `+234 810 325 2573`
  - Secondary: `+234 808 286 5657`
  - Integrated into all header, footer, contact channel, and direct `tel:` links.
- [x] **Official WhatsApp**: `+234 808 286 5657` (integrated into direct `wa.me` links with prefilled message).
- [x] **Official Email**: `amaandrilling@gmail.com` (integrated into `mailto:` links).
- [x] **Base Office Address**: Alubarika Shopping Complex, Oke-Ola, Gbongon, Osun State, Nigeria.
- [x] **Operational Base & Coverage**: Gbongon, Osun State & South-West Nigeria.
- [x] **All Routes Implemented**:
  - `/` (Home)
  - `/about` (About Amaan)
  - `/services` (Services Overview)
  - `/services/borehole-drilling` (Service Detail)
  - `/services/geotechnical-investigation` (Service Detail)
  - `/services/site-investigation` (Service Detail)
  - `/services/water-solutions` (Service Detail)
  - `/projects` (Fieldwork & Projects Portfolio)
  - `/blog` (Technical Insights Listing)
  - `/blog/what-to-consider-before-drilling-a-borehole` (Article Detail)
  - `/blog/what-is-a-geotechnical-investigation` (Article Detail)
  - `/blog/why-site-investigation-matters-before-construction` (Article Detail)
  - `/contact` (Contact Channels & Enquiry Form with preselection support)
  - `404` (Custom Accessible Not-Found Page)
  - `/sitemap.xml` & `/robots.txt`

---

## 2. Launch-Critical Items Still Requiring Configuration

Before going live on the production domain, the business must configure the following:

### A. Lead Capture / Form Submission Endpoint
- [ ] **Form Service Provider**: Configure environment variable `NEXT_PUBLIC_FORM_ENDPOINT` (e.g. Formspree, Web3Forms, Basin, or custom API route) pointing to Amaan's destination inbox (`amaandrilling@gmail.com`).
  *Current behavior:* The enquiry form validates all user inputs accessibly. If the endpoint is unconfigured, it informs the user and provides direct one-click WhatsApp and Phone call options, strictly adhering to the rule against simulating false submission success.

### B. Google Maps Pin Verification
- [ ] **Maps Place ID**: Confirm exact GPS coordinates or Google Business Profile link for Alubarika Shopping Complex, Oke-Ola, Gbongon, Osun State.

### C. Legal & Privacy Notice
- [ ] **Privacy Policy**: If retaining submitted customer phone numbers and locations, provide approved privacy copy to establish a dedicated `/privacy` route.

### D. Analytics & Tracking (Optional)
- [ ] **Google Analytics ID (GA4)**: Provide Measurement ID if web traffic monitoring is desired post-launch.

### E. Domain & Deployment Target
- [ ] **DNS / Hosting Destination**: Vercel, Netlify, or VPS deployment connected to `amaandrilling.com`.
