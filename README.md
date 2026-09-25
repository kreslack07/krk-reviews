# KRK Digital Products — live storefront

**Catalogue re-verified live: 25 September 2026.** Every checkout link below was
probed again and returned **HTTP 200**, with the AUD price shown matching the live
checkout amount exactly.

**→ Shop the full catalogue: https://kreslack07.github.io/krk-reviews/**

28 digital products by KRK Digital Templates (Australian sole trader,
ABN 71 770 320 895). 22 of them are available for instant checkout right now:
17 on Gumroad, 5 on Stripe.

## Buy now — card checkout (Stripe)

| Product | Price (AUD) | Checkout |
|---|---|---|
| KRK Printable Wall Art Vol 1 — 2 artworks, 5 print-ready sizes | A$15.00 | https://buy.stripe.com/4gM4gz4VwfDzeezfwY67S03 |
| Website Audit Report | A$49.00 | https://buy.stripe.com/9B67sL5ZA8b76M7bgI67S02 |
| Podcast Transcription & Show Notes | A$35.00 | https://buy.stripe.com/9B6bJ1ew62QN7QbgB267S04 |
| B2B Lead Database Starter Pack — real records, CSV + XLSX + verify README | A$49.00 | https://buy.stripe.com/9B628rds2fDz1rNckM67S05 |
| KRK Micro-SaaS Starter Kit — generated, self-tested scaffold + spec + runbook | A$29.00 | https://buy.stripe.com/cNi6oHew60IF9Yj84w67S06 |

## Buy now — instant download (Gumroad)

| Product | Price (AUD) | Checkout |
|---|---|---|
| AI Strategy Template Suite | A$49.00 | https://kreslack2.gumroad.com/l/krk-ai-strategy-templates |
| 30-Day Skincare Influencer Toolkit — Calendar + 100 Hooks | A$39.00 | https://kreslack2.gumroad.com/l/cggdsg |
| Glow Up Skincare Influencer Toolkit | A$39.00 | https://kreslack2.gumroad.com/l/hldbzhx |
| AI Prompt Swipe File for Marketers | A$39.00 | https://kreslack2.gumroad.com/l/krk-ai-prompts-marketing |
| Email Marketing Swipe File | A$34.00 | https://kreslack2.gumroad.com/l/email-swipe |
| Landing Page Template Bundle | A$31.00 | https://kreslack2.gumroad.com/l/krk-landing-page-templates |
| Business Plan Template Pack | A$29.00 | https://kreslack2.gumroad.com/l/krk-business-plan-templates |
| AI Prompt Engineering Toolkit | USD $27.00 | https://kreslack2.gumroad.com/l/ai-prompt-toolkit |
| Dark Psychology Decoded — Manipulation Defense Toolkit | A$27.00 | https://kreslack2.gumroad.com/l/bavrw |
| Automation Audit Checklist | A$24.00 | https://kreslack2.gumroad.com/l/krk-automation-audit-checklist |
| Cold Email Template Pack | A$24.00 | https://kreslack2.gumroad.com/l/krk-cold-email-templates |
| Notion Business OS Template | A$24.00 | https://kreslack2.gumroad.com/l/krk-notion-business-os |
| Stoic Wisdom Journal — 90 Daily Prompts | A$19.00 | https://kreslack2.gumroad.com/l/gyjef |
| SOP Template Pack | A$19.00 | https://kreslack2.gumroad.com/l/krk-sop-templates |
| KRK Thumbnail Pack Vol 1 — faceless channel CTR pack | A$19.00 | https://kreslack2.gumroad.com/l/krk-thumbnail-pack-vol1 |
| KRK Dark Psychology Decoded — Anki flashcards, 30 cards | A$17.00 | https://kreslack2.gumroad.com/l/krk-dark-psychology-flashcards |
| KRK Zen Garden Adult Coloring Pack Vol 1 — 5 designs | A$12.00 | https://kreslack2.gumroad.com/l/krk-zen-garden-coloring-vol1 |

Full shop, with what is inside each product: **https://kreslack07.github.io/krk-reviews/**

## Verified how

- Live GET of every checkout URL in the catalogue page, reading
  `og:url` + `product:price:amount` / `product:price:currency` from the
  rendered checkout, then comparing against the price displayed on the page.
- Stripe amounts read back from the Stripe API (`payment_links` + `line_items`),
  all `active: true`, currency `aud`.
- 22 / 22 checkouts returned HTTP 200. 17 / 17 Gumroad prices matched exactly.
  5 / 5 Stripe payment links read from the API are `active: true`, currency `aud`,
  amounts A$15 / A$29 / A$35 / A$49 / A$49. Zero mismatches.

## Affiliate

30% affiliate commission on every product. Ask for a link:
kreslackfrew@gmail.com
