# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Redesign of matrixdemolition.com (Matrix Demolition LLC, DFW demolition/excavation contractor, family-owned since 1989). The live site is WordPress. This repo holds the scraped source content and the redesign brief; the new site has not been started yet (no design, no code, no Vercel project). GitHub remote `RadoDslav/Matrixdemolition-website`.

The parent `../AGENTS.md` workflow applies (feature branches, PRs into `main`, squash merge, Vercel previews).

## Source-of-truth docs

- `Matrix Demolition — Site Audit, Sitemap & Redesign Brief.md` — audit of the live site, proposed sitemap rework (§6), homepage blueprint (§7), service page template and qualified quote form fields (§9), open questions/build order (§10).
- `content/site-map.md` — live URL → `content/pages/*.md` mapping, legacy redirects (`/contact-us-2/`, `/road-work/`), footer and quote form contract.
- `content/pages/*.md` — per-page copy scraped from the live site with `title`/`slug`/`source` frontmatter. Use these as copy source for new pages.
- `content/assets.md` — live-site image inventory; do not copy images locally until rights are confirmed.

## Content rules worth remembering

- Primary CTA text is always `Get a free quote`; phone `817-597-8490` → `tel:8175978490`.
- Use only facts present in source content (since 1989, 30+ years, family-owned, A+ BBB). The brief flags address, hours, certifications and project counts as unverified with the client.
- Write "Soil Remediation" (source site misspells it).
