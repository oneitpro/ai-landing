# One I.T. Pro — AI Vertical

Independent static website for `https://ai.oneitpro.com/`.

## Deployment

This project deploys from the `oneitpro/ai-landing` GitHub repository to Cloudflare Pages in the One I.T. Pro account. Pushes to `main` trigger production deployments.

| Setting | Value |
|---|---|
| Production branch | `main` |
| Framework preset | None |
| Build command | `mkdir -p .pages-output && cp index.html styles.css script.js llms.txt ai-consulting.md _headers _redirects .pages-output/ && cp -R assets .pages-output/` |
| Build output directory | `.pages-output` |
| Root directory | `/` |

Cloudflare Pages project name: `oneitpro-ai-site`
Custom domain: `ai.oneitpro.com`

The site is plain HTML, CSS and JavaScript. The build command copies only public assets into the deployment directory; `copy/` and `docs/` are not published. No package installation is required.

Approved brand assets are packaged in `assets/`, including the official transparent SVG, standalone mark, and approved 1200×630 social-share image.

## Conversion paths

- Primary: Microsoft Bookings — AI Discovery & Readiness Assessment
- Secondary: the existing One I.T. Pro Chatwoot Website inbox
- No contact form and no browser-exposed internal webhook

The page preserves `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `cohort`, and `touch` in session storage. Those values are attached to Chatwoot custom attributes when the widget supports them. Bookings remains the approved direct Microsoft URL; no custom attribution integration is introduced.

Canonical campaign identifier: `customer_ai_discovery_2026q4`.

## Local preview

```sh
python3 -m http.server 4174
```

Then open `http://127.0.0.1:4174/`.

## Pre-launch checks

- Confirm `ai.oneitpro.com` is attached to the Cloudflare Pages project.
- Add `ai.oneitpro.com` to the existing Chatwoot Website inbox allowed domains.
- Validate the Bookings meeting name is **AI Discovery & Readiness Assessment**.
- Do not publish a monetary value claim until One I.T. Pro confirms and approves a verifiable amount.
- Test desktop, tablet, mobile, keyboard navigation, metadata and structured data.
- Confirm the page remains indexable and returns no `noindex` directive.
