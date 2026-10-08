# Matrix Demolition — Site Audit, Sitemap & Redesign Brief

Prepared 6 October 2026 for Radoslav · Source: live crawl of matrixdemolition.com plus public listings · Design guidance: ui-ux-pro-max skill queries

## 1. Snapshot

- **Business:** Matrix Demolition LLC, family-owned demolition, excavation and site-development contractor, founded 1989. Claims 30+ years of experience, an A+ BBB rating and a new-customer discount.
- **Core offer:** residential and commercial demolition, excavation, site development, disaster/storm cleanup, ponds and lakes, soil remediation, selective demolition, road construction, pool demolition, golf course excavation.
- **Contact on site:** 3009 E Bankhead Hwy, Weatherford, TX 76087 · 817-597-8490 (labelled landline) · Monday–Sunday, 'open 24 hours'. Careers page shows a different mailing address: PO Box 1657, Aledo, TX 76008.
- **Primary conversion:** free quote (form plus phone). Form promises a reply within the next business day.
- **Platform:** WordPress with Slider Revolution 6.5.14; images served through an image CDN (assetcdn.net); 14 videos hosted on Vimeo.
- **Built by:** Aquatic Elephant Marketing (footer credit). Footer copyright still reads 2025.
- **Social:** facebook.com/MatrixDemolition (only profile referenced).
- **Crawl result:** 16 URLs found, 15 load, 1 returns a server error (Soil Remediation).

## 2. Current sitemap

- **Home** — /
- **Services** (hub) — /our-services/
  - Demolition — /demolition-services/
  - Excavation — /excavation-services/
  - Site Development — /construction-site-development/
  - Disaster Recovery / Storm Damage Demolition — /disaster-recovery/
  - Ponds and Lakes — /ponds-lakes/
  - Soil Remediation — /soil-remediation/ **(returns HTTP 500)**
  - Selective Demolition — /selective-demolition/ (set to noindex, nofollow)
  - Road Construction — /road-construction/
  - Pool Demolition — /pool-demolition/ (set to noindex, nofollow)
  - Golf Course Excavation — /golf-course-excavation/
- **Our Work** — /our-work/
- **Contact** — /contact-us/
- **Careers** — /matrix-careers/
  - Driver's Application Form — /drivers-application-form/ (placeholder page)
  - Operator application — PDF at /wp-content/uploads/2021/09/Operator.pdf
- **Dead or legacy links seen:** /road-work/ (linked from the Ponds page's other-services strip) and /?page\_id=721 (target of every 'Get in Touch' button).

**Navigation:** four items only — Services, Our Work, Contact, Careers. No Home link, no dropdown; service pages are reached only from the homepage grid or the Services hub.

## 3. Global elements

- **Header:** logo plus the four nav items, repeated in a mobile/duplicate menu block.
- **Sticky/hero CTA:** 'FREE QUOTE' button anchors to the quote form (#rquote on Home, #getaquote on service pages).
- **Request a Quote block (every page):** short intro promising next-business-day contact, then a form with Name\*, Email\*, Phone\*, 'How did you hear about us?*' (Online / Word of Mouth / Other), Message*, hidden spam field, Submit. No service type, address, project size or timeline fields. (The Pool page swaps the intro for a pool-specific paragraph.)
- **Footer:** logo, business name and address, 'Give us a CALL NOW to get a free quote', phone 817-597-8490, copyright line, agency credit.
- **Other Services strip:** icon/image links to sibling services at the bottom of every service page.

## 4. Page-by-page content inventory

### 4.1 Home — /

- **Title tag:** Matrix Demolition LLC - Demolition, Wrecking & Excavation in DFW, TX
- **Meta description:** present; contains typos (residental, commerical, excivation).
- **Sections:**
  1. Hero slider with logo, tagline 'You pick the location, we will take care of the rest.' and FREE QUOTE button.
  2. H1 'Matrix Demolition LLC' with sub-head 'Demolition & Excavation Services Since 1989.' Intro: local family-owned, serving the area since 1989, A+ BBB, new customer discount, crew does demolition, excavation, site development and road construction 'with great honesty'. FREE QUOTE button.
  3. 'Excavation & Demolition Services' icon grid: Demolition, Excavation, Site Development, Disaster/Storm, Ponds and Lakes, Soil Remedation (sic), Selective Demolition, Road Construction, Pool Demolition, Golf Course Excavation. The last five repeat a second time in the markup.
  4. Request a quote form.
  5. Footer with phone.

### 4.2 Services hub — /our-services/

- **Title:** Excavation & Demoltion (sic) Services in DFW, TX - Matrix Demolition LLC
- **H1:** SERVICES. Eight cards, each a heading, one-to-two-sentence blurb and READ MORE button:
  - Demolition — residential or commercial, ready for next construction project.
  - Excavation — foundation for construction, 30+ years.
  - Site Development — industrial and housing projects.
  - 'disaster recover storm damage demolition' (sic, lowercase) — emergency response and cleanup of commercial structures, houses, mobile homes.
  - Ponds and Lakes — excavate land for a pond or lake.
  - Selective Demolition Services — keep structure, remove non-functional parts; less waste, cost and time.
  - Soil Remediation Excavation Services — toxic materials found in a soils report need remediation.
  - Pool Demolition Services — Dallas/Fort Worth pool removal, A+ BBB.
  - Not listed on the hub: Road Construction, Golf Course Excavation.
- Followed by the quote form.

### 4.3 Demolition — /demolition-services/

- **Title:** Commercial & Residential Demolition Contractors · **H1:** DEMOLITION SERVICES
- Intro: trained technicians, structures of all shapes and sizes in DFW, safe and efficient, space ready for next build. GET A QUOTE.
- **Our demolition service includes:** Residential Demolition, Complete Demolition, Selective and Gut Out Demolition, Interior Demolition, Commercial Demolition, Exterior Demolition, Pre-Construction Services, Site Preparation.
- **H2 'Best Demolition Contractors in DFW, Texas':** 30+ years of interior and exterior work, certified to remove asbestos, family-owned since 1989. 'Call us for a FREE estimate! (817) 597-8490'. Buttons GET A QUOTE and GET IN TOUCH.

### 4.3b Selective Demolition — /selective-demolition/ (noindex, nofollow)

- **H1:** SELECTIVE DEMOLITION SERVICES. Explains internal/selective demolition: keeps the structure, removes dated or non-functional parts, minimizes waste, cuts timeline and cost, suits modifications and extensions; completed many projects since 1989.
- **Service list:** identical to the Demolition page list (copy reuse).
- **H2 'Best Selective Demolition Contractors in DFW, Texas':** full demolition is not always cheapest; specialised machinery, recycling of materials. Phone CTA, GET A QUOTE, GET IN TOUCH.

### 4.4 Excavation — /excavation-services/

- **Title:** Excavation Company in Dallas/Fort Worth, TX · **H1:** EXCAVATION COMPANY IN DFW, TEXAS
- Intro: foundations start with excavation; uses GPS grading technology for quality. GET A QUOTE.
- **Includes:** Commercial Excavation, Residential Development, Building Pad Prep, Soil Stabilization, Mass Excavation, Land Clearing.
- Closing: free estimate, same-day or next-day depending on project. GET A QUOTE / GET IN TOUCH.

### 4.5 Site Development — /construction-site-development/

- **Title:** Construction Site & Land Development Services in Dallas/Fort Worth, TX · **H1:** CONSTRUCTION SITE DEVELOPMENT
- Intro: site prep for residential developments, commercial/industrial sites, landfills, sports complexes, schools, TXDOT roadways and shopping centers.
- **Includes:** Clearing & Demolition, Demolition Services, Earthwork, Grading & Sloping, Surveying, Land Clearing, Site Preparation, Land Development, Sewers & Storm-Water, Fine Grading.
- Closing paragraph plus GET A QUOTE / GET IN TOUCH.

### 4.6 Disaster Recovery — /disaster-recovery/

- **Title tag duplicates the Site Development page.** **H1:** DISASTER RECOVERY / STORM DAMAGE DEMOLITION
- Intro: Texas weather is unpredictable; quick, professional response.
- **Includes:** Tearing down houses, Mobile home demolition, Hurricane/flood/storm/fire damaged structure removal, Excavating and backfilling, Lot clearing, Lot leveling, Tree and brush removal, Environmental abatement, Debris load out and haul-off, Dumpster and disposal service, Garage removal, Swimming pool removal, Concrete slab removal, Driveway removal.
- Closing: waste-screening certified personnel, mobilises to disaster areas usually within 24 hours, nationwide network of pre-qualified associates and subcontractors.

### 4.7 Ponds and Lakes — /ponds-lakes/

- **H1/H2:** PONDS AND LAKES (the page's main heading is a generic 'SERVICES' H1).
- Intro: private lakes and retention ponds, job done right and on time. GET A QUOTE.
- **Includes:** Pond Construction, Lake Construction, Irrigation Ponds, Farm & Ranch Ponds, Retention Basins, Excavate Land for Pond or Lake.
- Other-services strip uses image tiles; one tile links to the dead /road-work/ URL.

### 4.8 Soil Remediation — /soil-remediation/

- **Currently returns a 500 server error on both attempts, so no content could be captured.** Hub blurb is the only copy known: toxic chemicals or other materials found in a soils report require environmental remediation; prompt, correct, cost-effective excavation services.

### 4.9 Road Construction — /road-construction/

- **Title:** Road Construction Company in DFW, TX · **H1:** ROAD CONSTRUCTION SERVICES IN TEXAS; **H2:** Over 30+ years experience in paving roads, streets, highways and bridges.
- Intro: modern methods, durable roadways for varying traffic loads and conditions, quality and structural integrity. GET A QUOTE.
- **Includes:** Turnkey Service, Asphalt/Gravel & Concrete Paving, Expert Planning, Heavy Civil & Earth Work, Efficient Project Management, Demolition & Excavation Services, Soil Stabilization, Grading, Land Clearing, Road & Street Construction, Parking Lot Construction, Turn Lane Construction.
- Closing: turnkey from planning to maintenance, minimal disruption, on-schedule.

### 4.10 Pool Demolition — /pool-demolition/ (noindex, nofollow)

- **H1:** POOL DEMOLITION & REMOVAL CONTRACTORS IN DALLAS/FORT WORTH. The longest, best-structured page.
- **Service list (4 blocks):** In-Ground Pool Demolition (concrete, vinyl, fiberglass), Deck & Patio Demolition, Pool Equipment Removal, Site Preparation for Landscaping.
- **The process (4 steps):** Initial Consultation and Assessment → Permitting and Preparation → Demolition and Removal → Site Cleanup and Restoration.
- **Trust blocks:** Safety and Compliance (licensed, insured, strict protocols), Environmentally Responsible (recycles concrete and metal), Local Knowledge and Reliable Service.
- Phone CTA, GET A QUOTE, GET IN TOUCH, closing paragraph above the form.

### 4.11 Golf Course Excavation — /golf-course-excavation/

- **Title:** Golf Course Construction Company · **H1:** GOLF COURSE CONSTRUCTION & DEVELOPMENT COMPANY IN TEXAS
- Intro: precision excavation and remodeling of courses, environmental conservation, optimised land use. Embedded Vimeo video plus four-photo thumbnail gallery.
- **Includes:** Course & Neighborhood Development, Turnkey Service, Grading & Excavation, Terrain Shaping, Aesthetic Design Implementation, Soil Stabilization, Drainage, Road Construction, Land Clearing, Drainage & Irrigation.
- Closing: new builds and renovations, minimal disruption, on-time delivery.

### 4.12 Our Work — /our-work/

- **H1:** OUR WORK. No meta description.
- Top: 14 Vimeo project videos.
- Then 'recent projects / recent works — In Business Since 1989' with a filter row (Demolition, Site Development, Stock Pond) over a photo gallery of roughly 40 images (home demolition, apartment demolition in Arlington, site development in Aledo, road works in Aledo, disaster recovery, ponds and lakes, Weatherford demo).
- Stat counters: Years in Business, Projects Done 500+, Client Satisfaction (counters animate from 0, so unsupported by a non-JS render).
- Closing blurb: demolition, excavation, site development and private road construction; family-owned, founded 1989, 30+ years. Then Contact form.
- **Missing:** captions, locations, project type or scope, dates, testimonials.

### 4.13 Contact — /contact-us/

- **H1:** CONTACT. Map embed, 'Contact Us Today' block (name, Weatherford address, landline), 'Business Hours: Monday – Sunday, We are open 24 Hours', GET DIRECTIONS button, 'Talk To Us' form.
- **Address mismatch:** the text says 3009 E Bankhead Hwy, Weatherford; the map embed is centred on 5957 Stacy Ln, Weatherford; the Directions button routes to 1350 FM 1187, Aledo.

### 4.14 Careers — /matrix-careers/

- **H1:** CAREERS. Contact block with PO Box 1657, Aledo, TX 76008; same 24-hour hours.
- **Driver:** Class A CDL end dump driver, 2 years experience; 'Full Driver App' button to /drivers-application-form/.
- **Operator:** heavy equipment operator for dozer, excavator, road grader and similar; GPS experience a plus; 'Full Operator App' button downloads a PDF.
- Form block below.

### 4.15 Driver's Application Form — /drivers-application-form/

- Heading 'DRIVER'S APPLICATION FORM' with leftover placeholder text 'Some text for context if needed!' and no visible form in the crawl. Title tag is a copy of the Site Development page.

## 5. Findings

### Content and SEO

- **Soil Remediation page is down (HTTP 500)** while still promoted on the homepage and Services hub.
- **Pool Demolition and Selective Demolition are set to noindex, nofollow**, which keeps two of the strongest local-intent pages out of search. Likely accidental; confirm.
- **Duplicate title tags/descriptions:** Disaster Recovery and Driver's Application reuse the Site Development tags. Our Work, Contact and Careers have no meta description.
- **Typos in prominent places:** 'residental', 'commerical', 'excivation' (homepage description), 'Demoltion' (Services title), 'Soil Remedation' (homepage), 'disaster recover' (Services hub), 'ALL RIGHT RESERVED' (footer).
- **Copy reuse:** Selective Demolition repeats the Demolition list verbatim; most service pages follow one thin template (intro, list, closing) with no proof, process or FAQ. Pool Demolition is the model to copy.
- **Local signals are weak:** homepage says 'serving your area' without naming cities; no service-area pages; no named customer reviews. Google shows a 5.0 rating from only 3 reviews on an unverified listing.
- **Inconsistent facts:** three addresses (3009 E Bankhead Hwy, 5957 Stacy Ln, 1350 FM 1187 Aledo, plus PO Box 1657 Aledo); site says open 24 hours, a third-party directory lists Monday–Friday 8–5.

### UX and conversion

- Four-item nav with no Home or Services dropdown; deeper pages are two clicks away at best, and the Services hub omits Road Construction and Golf Course.
- Quote form is identical everywhere and asks nothing about the job (service type, address or city, size, timeline), so every lead needs a callback to qualify.
- 'Get in Touch' buttons point to a legacy ?page\_id=721 URL; one strip link goes to /road-work/ (dead).
- Phone is shown only in the footer and as a text link; no sticky call button on mobile.
- Our Work leads with 14 unlabelled videos and an unfiltered photo wall; there are no case studies.
- Careers application is split between a placeholder page and a PDF download.

### Technical and accessibility

- Viewport tag sets maximum-scale=1 and user-scalable=no, which blocks pinch-zoom (WCAG failure).
- Animated counters render 0 without JavaScript; claim 'Client Satisfaction' with no source.
- Duplicate menu markup and a duplicated services grid inflate the page.
- Slider Revolution hero and 14 embedded videos hurt load time; no lazy-load or video facades observed.
- Inline SVG icons leak CSS text as link labels (for example '.cls-1 { stroke-width: 0px; }') — a screen-reader and SEO defect.

### Brand and visual

- Look is generic template: slider hero, icon grid, uniform sections. The real asset is the equipment and job-site photography, which is under-used.
- Strong claims (1989, family-owned, A+ BBB, asbestos-certified, 24-hour storm response) are buried in paragraphs rather than shown as proof badges.

## 6. Proposed sitemap (rework)

Legend: **existing** = keep and improve · **new** = create.

- **Home** (existing)
- **Services** (existing hub, rebuilt with category groups)
  - Demolition
    - Residential Demolition (new split from Demolition)
    - Commercial Demolition (new split)
    - Selective & Interior Demolition (existing)
    - Pool Demolition (existing)
    - Disaster & Storm Damage (existing)
  - Excavation & Earthwork
    - Excavation (existing)
    - Site Development (existing)
    - Land Clearing & Grading (new, currently only list items)
    - Soil Remediation (existing, fix 500)
  - Water & Land
    - Ponds & Lakes (existing)
    - Golf Course Construction (existing)
  - Infrastructure
    - Road Construction (existing)
- **Projects** (existing Our Work, rebuilt)
  - Filterable project grid by service and city
  - Project case studies (new, 3–6 to start)
  - Video gallery (existing videos, with titles)
- **About** (new): story since 1989, family ownership, safety record, licences and certifications (asbestos, waste screening), equipment list, BBB
- **Service Areas** (new): hub plus pages for Weatherford, Aledo, Fort Worth, Arlington, Dallas and other served cities (Arlington and Aledo already appear in project photos)
- **Reviews** (new, or section on Home/About): Google, BBB, named testimonials
- **FAQ** (new): permits, asbestos, timelines, pricing process, utility disconnects
- **Careers** (existing)
  - Driver application (existing, finish as a real form)
  - Operator application (existing PDF, convert to web form)
- **Contact / Free Quote** (existing, one canonical page, plus the shared quote component)
- **Legal** (new): privacy policy, terms

**Header:** Logo · Services (mega menu) · Projects · About · Service Areas · Careers · phone number · FREE QUOTE button. **Footer:** services list, service areas, contact block, hours, BBB badge, social, legal links.

## 7. Homepage blueprint

Pattern chosen with the skill: **Trust & Authority + Conversion** (section order: hero with credibility → proof → solution overview → clear CTA path; primary CTA is Get Quote in nav and after proof).

1. **Header** — sticky, phone number visible, FREE QUOTE button.
2. **Hero** — full-bleed real excavator/demolition photo, headline built on the existing tagline idea ('You pick the location, we handle the rest'), sub-line 'Demolition & excavation in DFW since 1989', two CTAs: Free Quote and Call 817-597-8490.
3. **Proof bar** — Since 1989 · Family-owned · A+ BBB · Asbestos-certified · 500+ projects · 24-hour storm response (each fact verified with the client before launch).
4. **Services overview** — four category cards (Demolition, Excavation & Earthwork, Water & Land, Infrastructure) with the individual services listed inside.
5. **Featured projects** — three case-study cards with photo, city, scope.
6. **Process** — 4 steps adapted from the Pool page: Consultation → Permits → Work → Cleanup.
7. **Storm / emergency strip** — dark band: 'Storm damage? We mobilize within 24 hours' with call button.
8. **Reviews** — Google and BBB rating with named testimonials.
9. **Service area** — map plus city list.
10. **Quote form** — qualified fields (see 9) beside phone and address.
11. **Footer.**

## 8. Design system (proposal)

**Direction:** industrial and confident, not decorative — 'job-site signage meets clean editorial'. Variance 4/10 (balanced), motion 3/10 (subtle), density 5/10 (standard), per the skill's dials.

**Skill outcome and override:** the ui-ux-pro-max database suggested a green 'local services' palette with Inter and a funnel layout. The Trust & Authority + Conversion layout fits and is used above; the green palette does not suit a demolition brand, so the colours below are a deliberate override. Inter is kept for body text.

### Colour tokens

- --color-bg: #F6F4EF (warm bone)
- --color-surface: #FFFFFF
- --color-ink: #15171A (charcoal, body and headings)
- --color-steel: #2B3038 (dark sections)
- --color-muted: #5A606A (secondary text; passes 4.5:1 on bone)
- --color-border: #D9D5CB
- --color-accent: #FFB400 (safety yellow, CTAs and highlights only)
- --color-on-accent: #15171A (text on yellow, high contrast)
- --color-danger: #D92D20
- --color-focus-ring: #15171A with 2px white offset on dark backgrounds
- Dark sections use steel background with bone text; yellow stays the only accent.

### Typography

- **Headings:** Barlow Condensed, 600–700, uppercase for H1 and section labels, tight tracking.
- **Body/UI:** Inter, 400–600, base 16px, line-height 1.5–1.6.
- **Scale:** 12 / 14 / 16 / 20 / 24 / 32 / 48 / 64 (clamp for fluid headings).

### Spacing, shape, elevation

- 8px base unit; section padding 64–96px desktop, 40–56px mobile; content max-width 1200px.
- Radius 4px (buttons, inputs), 8px (cards). Prefer borders over shadows; one soft shadow level for raised cards.

### Components

- **Buttons:** primary (yellow, charcoal text), secondary (outline), phone button (charcoal with phone icon). Minimum 44×44px touch targets, visible focus ring.
- **Service card:** photo, SVG icon (Lucide, no emoji), title, one-line promise, arrow link.
- **Proof badge row, stat counter** (static fallback with no animation under reduced motion), **project card**, **process stepper**, **testimonial card**, **sticky mobile call/quote bar**, **quote form**, **accordion FAQ**, **breadcrumbs**.

### Imagery and motion

- Real job-site photos only; treat with consistent crop and slight contrast; no stock-photo filler.
- Vimeo videos as click-to-load posters (no autoplay stack).
- Motion: subtle scroll reveal (about 350ms, small upward fade), no parallax, respects prefers-reduced-motion.

### Accessibility and performance (from the skill's checklist)

- Contrast 4.5:1 for text; visible keyboard focus; labels on every field and icon-only button; remove user-scalable=no.
- Images in WebP/AVIF with width/height set (layout shift under 0.1) and lazy loading; hero image preloaded.
- Responsive checks at 375, 768, 1024 and 1440px; no horizontal scroll.
- Cursor and hover states on every clickable element with 150–300ms transitions.

## 9. Page templates and forms

### Service page template

Breadcrumb → H1 plus 2-sentence promise and call/quote buttons → what's included (grouped, with icons) → process steps → proof strip (certifications, years, insurance) → 2–3 related project photos or a case study → FAQ (3–5 items) → related services → quote form.

### Qualified quote form (replaces the identical form)

- Name\*, Phone\*, Email\*
- Service needed\* (dropdown from the service list)
- Project address or city\*
- Residential / Commercial
- Timeline (Emergency, This month, 1–3 months, Planning)
- Short description
- How did you hear about us (keep current options)
- Consent line and spam protection

### Careers

- One page, two role cards (Driver, Operator), each with requirements and an on-page application form; the PDF stays as a fallback.

## 10. Next steps and open questions

1. **Confirm facts with the client:** current office address (Bankhead Hwy, Stacy Ln or Aledo), actual hours, BBB rating and certifications, licence and insurance statements, real project count.
2. **Fix now (quick wins):** restore Soil Remediation, remove noindex from Pool and Selective Demolition, correct typos, repair 'Get in Touch' and /road-work/ links, remove user-scalable=no, complete the driver application page.
3. **Content to gather:** project details (city, scope, year) for the best 6–10 jobs, 3+ named testimonials, titles for the 14 videos, equipment list, safety information.
4. **Decisions needed:** keep WordPress (recommended given your background) or move platform; whether to split Demolition into Residential and Commercial pages; which cities to target first for Service Area pages.
5. **Build order:** design system and homepage → service template with Pool and Demolition → Projects → remaining service pages → Service Areas, About, FAQ → redirects and SEO migration.

*Source note: page copy above is summarised from the live site for audit purposes; original wording remains on matrixdemolition.com. Third-party listing data (Google rating, directory hours) is unverified.*
