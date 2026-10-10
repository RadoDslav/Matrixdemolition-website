# Matrix Demolition Design System

Status: approved design direction for build
Reference: `Input_oct_08_26/matrix-website-v2/matrix-v2`
Scope: static Next.js App Router site, TypeScript, Tailwind, accessible responsive implementation

## Design Read

Industrial service contractor site for homeowners, landowners, builders, developers, and general contractors. Visual language is **Heavy Iron**: job-site signage meets clean editorial. It should feel capable, direct, local, and image-led without looking like a generic construction template.

The approved prototype's strongest decisions are retained:

- Near-black field with bone light sections and one red action accent.
- Oversized condensed uppercase display type paired with practical sans body copy.
- Monospaced utility labels, thin rules, numbered process rows, and hard-edged CTA bands.
- Full-bleed equipment and job-site photography as the primary visual material.
- Asymmetric editorial grids on desktop; deliberate single-column collapse on mobile.
- Phone-first mobile conversion with persistent bottom actions.

The redesign brief's trust-first conversion sequence remains the information architecture: credibility, services, work, process, emergency path, service area, quote.

## Non-Negotiables

- Primary CTA text is exactly `Get a free quote`.
- Phone number is `817-597-8490`; link target is `tel:8175978490`.
- Use `Soil Remediation`, never the source typo `Soil Remedation`.
- Use only facts present in `content/` and approved by the plan. Never invent project names, locations, dates, metrics, review text, certifications, hours, or addresses.
- Do not present prototype bracket placeholders or prototype-specific claims as live content.
- Do not use remote or supplied images in production until rights are confirmed by the project owner.
- No user-scalable restriction. Keyboard focus, zoom, screen readers, reduced motion, and high text zoom must work.
- No autoplay video as a required information path. Use poster/facade and click-to-load playback.
- No invented map geometry or service-area promise. Use a simple city list or approved map asset only after locations are confirmed.

## Design Dials

- `DESIGN_VARIANCE`: 4/10. Balanced editorial offsets, not chaos.
- `MOTION_INTENSITY`: 3/10. Short reveals and hover feedback only.
- `VISUAL_DENSITY`: 5/10. Standard marketing density with strong rules and generous section spacing.

## Tokens

Canonical machine-readable values live in `design/tokens.json`.

### Color

The approved reference uses red rather than the brief's exploratory safety-yellow direction. Red is retained as the single action accent because it is the clearest established visual decision in the approved prototype. Do not introduce yellow, orange, blue, or green as additional brand accents.

| Token | Value | Use |
| --- | --- | --- |
| `--color-ink` | `#0B0B0A` | Primary dark background, dark text on light surfaces |
| `--color-ink-raised` | `#2A2826` | Dark cards, image fallback, dark dividers |
| `--color-bone` | `#EFECE6` | Primary light section background |
| `--color-white` | `#FFFFFF` | Text on dark/red surfaces, form surface |
| `--color-red` | `#C00000` | Primary CTA, active states, key accent |
| `--color-red-bright` | `#FF4D3D` | Dark-surface accent and small highlights |
| `--color-red-soft` | `#FFD5D0` | Supporting text on red |
| `--color-muted-light` | `#B9B2A6` | Secondary text on dark |
| `--color-muted-dark` | `#3F3B36` | Secondary text on bone |
| `--color-rule-light` | `#3F3B36` | Dark-section rules, minimum visible contrast |
| `--color-rule-dark` | `#CFC9BF` | Bone-section rules |
| `--color-danger` | `#B42318` | Form errors only; never decorative |
| `--color-focus` | `#FFFFFF` / `#0B0B0A` | 2px focus ring with contrasting offset |

Light sections use bone, not pure white, as the default page field. Dark sections use ink or ink-raised. Red is reserved for action, active selection, or a deliberate full-width story band.

### Typography

Use the approved prototype pairing. Production must self-host or load through the project's approved font strategy; never depend on an unreviewed Google Fonts `<link>` in page markup.

| Role | Family | Weight | Treatment |
| --- | --- | --- | --- |
| Display | Big Shoulders Display | 700–900 | Uppercase, compact leading, tight tracking |
| Body/UI | Archivo | 400–700 | Sentence case, 1.5–1.6 line-height |
| Utility | IBM Plex Mono | 500 | Uppercase, 0.10–0.14em tracking |

Type scale: `12 / 14 / 16 / 18 / 20 / 24 / 32 / 48 / 64 / 96 / 132`.

Recommended responsive sizes:

- H1: `clamp(3.5rem, 10vw, 10.25rem)` on the homepage hero; service H1 `clamp(3rem, 8vw, 7.5rem)`.
- Section H2: `clamp(3rem, 8vw, 8.25rem)` desktop; reduce to `3.5rem` maximum on small screens.
- Body: `1rem` minimum, `1.125rem` for lead text, never below `0.875rem` for supporting UI.
- Utility labels: `0.6875rem–0.75rem`; pair with visible text, never use as the only label for a control.

Do not use all-caps for paragraph copy. Do not set long body copy in the display face. Preserve descenders and line-height when display type wraps.

### Shape, Space, Elevation

- Base spacing unit: 8px.
- Content width: `min(1360px, 100% - 80px)` desktop; 16px gutters below 900px.
- Section padding: 96–128px desktop, 56–80px tablet, 40–64px mobile.
- Controls: minimum 44px height and 44px hit area.
- Buttons and inputs: 4px radius. Image tiles and content cards: 0–8px radius. Keep this rule consistent.
- Prefer 1px rules and tonal contrast over shadows. Use one restrained raised-card shadow only when hierarchy requires it.
- Do not use glassmorphism, decorative gradients, floating blobs, or pure-black shadows.

## Global Shell

### Header

Desktop header is 72–88px high, sticky only when implementation can preserve content visibility. Layout: left logo, single-line nav, right phone and `Get a free quote` action. Proposed nav labels: Services, Projects, About, Service Areas, Careers. Add Contact only if it remains one line at the target breakpoint.

Mobile header is compact and must not duplicate navigation markup. Show logo, menu button with accessible name/state, and phone action. The open menu is a full-width panel below the header with a clear close action. Keep the quote action visible in the panel.

### Mobile Action Bar

At widths below 768px, use a fixed bottom action bar with two equal actions: `Call now` (phone link) and `Get a free quote` (quote anchor/page). Add bottom content padding so it never covers form controls or footer content. Respect safe-area insets.

### Footer

Use dark footer with logo, canonical contact block, grouped service links, service-area links only when approved, careers link, social/legal links when available, and copyright. Do not print an address or hours until the client resolves the conflicting source values. A pending fact should be omitted or explicitly marked for content review in source, never silently guessed in UI.

## Component Rules

### Buttons and Links

- Primary: red fill, white text, one-line label, 44px minimum height.
- Secondary: transparent/bone or transparent/ink with 1px contrasting border.
- Phone: ink fill on bone or bone text on ink; use visible number where space permits.
- Hover changes color or translates by 1px; it must not change layout dimensions.
- Focus uses a 2px contrasting ring plus 2px offset. Never remove browser focus without replacement.
- Do not create multiple labels for the same intent. Quote intent is always `Get a free quote`.

### Labels, Eyebrows, and Rules

Use mono utility labels sparingly, maximum one above a section heading in any three-section run. A rule or location in the page can provide context without another eyebrow. Labels are supplemental, never the only accessible name.

### Image Tile

Image fills the tile with `object-fit: cover`, stable aspect ratio, and a readable overlay. Every meaningful image has descriptive alt text; decorative texture has empty alt. Overlay text must pass contrast over every crop. Tile hover scales image only, not text or tile bounds. Never attach an unsupported duration, location, or project title to a source image.

### Proof Strip

Use static fact cells with label and short explanation. Approved-safe facts are `Family-owned`, `Since 1989`, `30+ years`, and `A+ BBB` where source content supports the wording. A+ BBB, certifications, review scores, project counts, and response-time claims require final client confirmation before appearing as proof badges. No animated counters. No zero fallbacks.

### Service Card

Use photo-led cards in an asymmetric grid. Card content: service name, one verified promise, arrow link. Categories may group services, but do not hide Road Construction or Golf Course Excavation if they are in the approved sitemap. Card labels must match canonical page names.

### Process Stepper

Use four numbered rows or a four-column desktop stepper: Consultation, Permits and preparation, Work, Cleanup and restoration. Pool page copy supports this sequence; general-service pages must only state steps supported by their content. On mobile, stack rows with a strong number column and 16px minimum gap.

### Quote Form

Qualified shared form fields, in this order:

1. Name (required)
2. Phone (required)
3. Email (required)
4. Service needed (required)
5. Project city or address (required)
6. Residential or Commercial
7. Timeline: Emergency, This month, 1–3 months, Planning
8. Short description
9. How did you hear about us?
10. Consent and spam protection

Use visible labels above fields, native input types, autocomplete attributes, field-level errors, and a linked error summary after failed submit. Do not use placeholder text as a label. Do not promise response timing until confirmed; use the source prompt only if the form provider and client approve it.

### Accordion FAQ

Use native `details/summary` or an equivalent fully keyboard-accessible disclosure. Questions and answers must come from approved content. Never fill missing FAQs with assumptions about permits, costs, insurance, or timelines.

### Video Facade

Use a poster image with a labeled play button. Load Vimeo only after activation. Provide title/caption only when supplied. No autoplay, no unlabelled iframe wall.

## Page Patterns

### Homepage

1. Sticky header with phone and quote action.
2. Hero: real equipment/job-site image or approved poster, short value proposition based on `You pick the location, we will take care of the rest.`, sub-line `Demolition & excavation services since 1989.` Only use DFW/local wording where source copy supports it. Two actions: `Get a free quote` and phone link.
3. Proof strip using only approved-safe or client-confirmed facts.
4. Services overview grouped into Demolition, Excavation & Earthwork, Water & Land, Infrastructure.
5. Featured work with unlabeled source assets until project metadata is approved. Use generic scope labels only when content supports them.
6. Process section using the pool-derived sequence where applicable.
7. Dark emergency/storm path. Do not claim 24-hour mobilization until confirmed.
8. Reviews only after named, approved testimonials and source are supplied. Otherwise omit the section rather than fabricate it.
9. Service area list/map only after city/address scope is confirmed.
10. Qualified quote form beside phone CTA.
11. Footer.

Hero constraint: desktop headline max two lines, supporting copy max four lines, actions visible in initial viewport. Mobile hero uses a shorter headline and keeps phone/quote actions above the fold where possible.

### Services Hub

Open with a large heading and short orientation paragraph. Use four category bands rather than a flat repeated card wall. Each category lists canonical services with photo or one visual lead. End with quote CTA. Keep all service cards reachable with keyboard and avoid repeated duplicated grids from the source site.

### Service Detail

Use this order:

1. Breadcrumb and service H1.
2. Hero promise, one relevant image, `Get a free quote`, phone link.
3. What's included, grouped into 4–8 items.
4. Process or scope detail when supported.
5. Proof strip with verified facts only.
6. Two or three related image placements or approved case study.
7. FAQ with 3–5 approved questions where available.
8. Related services.
9. Quote form.

Pool Demolition may use the richer four-step process and trust blocks found in source content. Other pages must not inherit pool-specific claims. Soil Remediation must use the exact approved spelling and currently known source summary only until full content is approved.

### Projects / Our Work

Lead with a photo/video gallery and service filters only if filtering labels are supported. Use stable image dimensions, lazy-load below the fold, and click-to-expand lightbox with keyboard close. Treat every item as an unlabeled asset until city, scope, date, and title are approved. Do not show `500+`, satisfaction counters, review scores, or invented case-study facts.

### Contact / Free Quote

Make the form the primary content. Show phone number. Address, map, directions, and hours remain hidden or marked content-review-only until the client resolves source conflicts. If a map is included later, its pin and directions target must use the same approved address.

### Careers and Applications

Use two role cards, Driver and Operator, with requirements copied from the relevant content page. Each role has an on-page application path; keep the operator PDF as a clearly labeled fallback if still needed. The driver route must not retain placeholder text. Do not publish an address or hours from Careers until confirmed.

### SEO Utility Pages

Reuse the relevant service-detail pattern with local-intent heading and source-supported copy. Do not invent city-specific service promises. Keep canonical routes and redirects from `content/site-map.md`.

## Responsive States

| State | Width | Layout | Type and controls |
| --- | --- | --- | --- |
| Small mobile | 375–479px | Single column; 16px gutters; stacked cards and form fields; fixed bottom action bar | H1 56–64px max; no horizontal scroll; 44px controls |
| Large mobile | 480–767px | Single column; selected media may use full bleed; two-column form only where each control remains usable | H1 64–72px max; menu panel; phone action retained |
| Tablet | 768–1023px | Two-column editorial grids where content supports it; no desktop nav overflow | H1 72–96px; bottom action bar may remain until desktop nav is stable |
| Desktop | 1024–1439px | 12-column or asymmetric grids, max 1360px content width; sticky header | H1 96–132px; nav one line; hover states enabled |
| Wide desktop | 1440px+ | Same content max width; more negative space, never oversized unreadable line lengths | H1 may reach 164px only in hero; body measure max 65ch |

Every multi-column component must declare its mobile fallback in implementation. Do not rely on accidental flex wrapping. Test at 375, 768, 1024, and 1440px, plus landscape.

## Motion and Interaction

- Use 200–350ms opacity/transform reveals for key sections; animate only transform and opacity.
- Use `prefers-reduced-motion: reduce` to remove reveals, hover scale, autoplay, and any scroll choreography.
- No parallax, scroll hijacking, infinite marquee, animated counters, or mouse-follow effects.
- Video is paused until user activation. Poster remains informative without JavaScript.
- Hover effects must have equivalent focus/active behavior and must not be the only feedback.

## Accessibility and Performance

- Use semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Use one H1 per page and logical heading order.
- Every interactive icon has an accessible name. Decorative icons use `aria-hidden="true"`.
- Keyboard order follows visual order. Avoid CSS reordering that changes meaning.
- Text contrast target is WCAG AA: 4.5:1 normal text, 3:1 large text and controls. Verify red/white and muted text combinations in implementation.
- Images have intrinsic dimensions or aspect-ratio boxes to prevent layout shift. Hero media is prioritized; below-fold media is lazy.
- Use responsive image sizes and WebP/AVIF when rights-cleared assets are available.
- Remove duplicate menu/service markup. Keep third-party video embeds behind a facade.
- Preserve browser zoom and pinch zoom. Avoid `height: 100vh`; use `min-height: 100dvh` only where a viewport hero is needed.

## Asset Mapping

Asset inventory is in `content/assets.md`; supplied prototype assets are in `Input_oct_08_26/matrix-website-v2/matrix-v2/assets/`. These are candidate references, not rights-cleared production assets.

| Placement | Candidate asset | Treatment | Gate |
| --- | --- | --- | --- |
| Homepage hero | `hero-poster.webp`, `hero.mp4` | Full bleed, dark scrim; poster-first facade | Confirm rights; replace stand-in video if needed |
| Services cards | `concrete.webp`, `slab.webp`, `apartments.webp`, `aerial-ranch.webp`, `hauler-brush.webp`, `grader-gps.webp` | Fixed-ratio image tiles, no unsupported duration badges | Confirm rights and alt text |
| Builder/sitework | `mass-grading.webp`, `dozer.webp`, `grader-gps.webp` | Editorial split or wide hero | Confirm rights; no unsupported GPS/fleet claims in copy |
| Projects gallery | `willow-park.webp`, `apartments.webp`, `mass-grading.webp`, `aerial-tank.webp`, `hauler-sand.webp` | Unlabeled gallery until metadata approval | Confirm rights and project metadata |
| Pool page | `concrete.webp` | Pool-specific source copy controls context | Confirm rights; do not infer duration/cost |
| Brand | `logo-white.png` or source `matrixdemolition.png` | Maintain proportions and clear space | Confirm approved logo asset |
| Source service imagery | `content/assets.md` filenames | Remote references only until rights confirmed | Owner approval required |

Never use a photo's filename as visible project evidence. Do not crop away safety-relevant context in a way that changes meaning. Add meaningful alt text only after visual review; use empty alt for decorative backgrounds.

## Verified-Content Handling

### Safe to use from current source

- Matrix Demolition LLC
- Family-owned
- Since 1989 / 30+ years of experience
- Demolition, excavation, site development, disaster recovery, ponds and lakes, soil remediation, selective demolition, road construction, pool demolition, golf-course excavation
- Residential and commercial work where the page source supports it
- Phone `817-597-8490`
- A+ BBB only where the source wording is retained and client has approved current use

### Hold for client confirmation

- Current office address and map location
- Business hours
- Licenses, insurance, asbestos certification, waste-screening certification
- `500+ projects`, review ratings/counts, testimonials, satisfaction claims
- 24-hour storm response or nationwide response
- USDOT number, owned-fleet/driver claims, truck counts, EMR, prequalification timing
- Bluejack Ranch, Avanzada, Willow Park, Arlington, Aledo, exact acreage, dates, scope, and named personnel from prototype
- Pricing, durations, permits, same-day callbacks, or any project-specific result

### UI treatment for unverified facts

- Omit from visible UI until confirmed. Prefer a shorter truthful page over a proof badge with a placeholder.
- If a design review needs to show a pending slot, label it `Content review required` in the design artifact or CMS fixture, never in customer-facing copy.
- Do not render `[N]`, `[Name]`, `TBD`, zero counters, fake percentages, or bracket placeholders in production.
- When address/hours are unresolved, show the phone CTA and quote form without a map, directions, or hours claim.

## Implementation Handoff

- Keep token names and component names aligned with `design/tokens.json`.
- Build shared shell, Button, ImageTile, ProofStrip, QuoteForm, ProcessStepper, VideoFacade, Accordion, and MobileActionBar before page-specific layouts.
- Keep content in page data/MDX or typed objects sourced from `content/pages/`; do not duplicate copy inside visual components.
- Use canonical route names from `content/site-map.md`; preserve `/contact-us-2/` and `/road-work/` redirects.
- Use real form action and spam provider only after the form-provider decision is made. Until then, render accessible fields with a non-submitting preview state, not a fake success.
- Validate every new visible claim against `content/` and the client confirmation list before release.
