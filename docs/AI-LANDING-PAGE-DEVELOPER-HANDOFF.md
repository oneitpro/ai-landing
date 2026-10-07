# AI Landing Page Developer Handoff

## Property role

`ai.oneitpro.com` is the permanent One I.T. Pro AI vertical for customers, prospects, referrals, search engines, AI agents, and future campaigns. It is not a temporary campaign page.

## Technical model

- independent static site
- GitHub `main` → Cloudflare Pages
- no framework or build step
- canonical: `https://ai.oneitpro.com/`
- indexable HTML; do not emit `noindex`
- Cloudflare Pages project: `oneitpro-ai-landing`

## Conversion architecture

Primary: approved Microsoft Bookings meeting type for **AI Discovery & Readiness Assessment**.
Secondary: existing One I.T. Pro Chatwoot Website inbox.

Do not add a contact form, n8n workflow, alternate inbox, or browser-exposed internal endpoint.

The existing Chatwoot configuration is loaded only on the production AI hostname. Before launch, add `ai.oneitpro.com` to the existing inbox's allowed domains and validate exactly one widget instance.

## Attribution

The browser retains `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `cohort`, and `touch` for the session. Chatwoot receives these values plus:

- `site_source = ai`
- `landing_page = https://ai.oneitpro.com/`

The canonical campaign identifier is `customer_ai_discovery_2026q4`. Do not create custom infrastructure solely to force Bookings attribution.

## Machine discoverability

The site contains:

- one semantic H1
- logical H2/H3 hierarchy
- visible HTML service, use-case, offer, and FAQ content
- Organization, Service, Offer, and FAQPage JSON-LD
- canonical metadata and Open Graph values
- `/llms.txt`
- `/ai-consulting.md`

Machines should be able to determine the company, audience, service area, AI services, governance position, use cases, free offer, and conversion methods from public HTML and resources.

The assessment is a two-stage engagement. The initial conversation does not imply that all assessment work is completed during that meeting. Do not add a monetary value claim until One I.T. Pro confirms and approves a verifiable amount.

## External dependencies

- official logo: `https://assets.oneitpro.com/one-it-pro-logo-full.svg`
- Chatwoot: `https://chat.oneitpro.com/packs/js/sdk.js`
- Google Fonts: Inter
- approved Microsoft Bookings URL in `index.html`

No credentials, internal APIs, Notifuse, SES, or n8n details are exposed.

## Launch validation

- `200 OK` at canonical and non-canonical behavior documented
- title, description, canonical, Open Graph and JSON-LD correct
- no `noindex`; legitimate crawlers not blocked
- one H1 and no horizontal overflow
- desktop, tablet and mobile responsive checks
- Bookings opens the approved meeting type
- Chatwoot opens the existing inbox once
- keyboard navigation and focus states work
- `/llms.txt` and `/ai-consulting.md` publicly readable
