# Task ID 6 — Subagent D (Service pages)

Built the `/services` listing page and the dynamic service detail page that serves all 7 services.

## Files produced
- `src/app/services/page.tsx` — listing page (server component)
- `src/app/services/[slug]/page.tsx` — dynamic detail page with `generateStaticParams` (all 7 slugs pre-rendered) and `generateMetadata`

## Conventions followed
- Imports shared components from `@/components/shared/*` (`Container`, `Section`, `SectionHeading`, `MonoLabel`, `ArrowLink`) and shadcn/ui from `@/components/ui/*`.
- Imports `services`, `getService`, `getRelatedServices` from `@/content/services`.
- Imports `serviceIconMap` from `@/config/navigation`.
- Imports `siteConfig` from `@/config/site`.
- Imports `Navbar` from `@/components/layout/navbar` and `Footer` from `@/components/layout/footer` (expected to resolve once Agent A ships them).
- Dark-first premium technical theme; emerald/teal accent only; NO blue/indigo.
- `font-mono` used for technical labels, IDs, breadcrumbs, badge text.
- Sticky footer pattern: page wrapped in `<main className="flex-1">...</main>`.
- Mobile-first responsive (`sm:`, `md:`, `lg:`), 44px+ touch targets on CTAs.
- Card hover = border accent + lift (`hover:-translate-y-1 hover:border-primary/50`).
- Visible focus states (`focus-visible:ring-2 focus-visible:ring-ring`).
- Semantic HTML: `<main>`, `<section>`, `<article>`-equivalent `<Card asChild><Link>`, `<nav aria-label="Breadcrumb">`, `<ol>`, `<dl>` for spec.
- Risk services (`ai-security`, `ai-red-teaming`) get a distinct destructive (red/amber) accent on both listing and detail.

## Listing page structure
1. Hero band (grid bg): MonoLabel "Capabilities", H1 "Services", supporting paragraph, CTAs Start an AI Project → /contact, View Work → /work.
2. 7-service grid (1/2/3-col responsive): each card has mono number (01–07), icon, name, tagline, summary, "Explore →" link. AI Security & AI Red Teaming get a red border + "Adversarial" badge + ShieldAlert icon + destructive icon tint.
3. "How we engage" mini-section: 4 numbered steps (Discover, Design, Build, Operate) + CTA → /#process.
4. Bottom CTA: "Not sure which service you need? Talk to us →" → /contact, plus secondary "Browse resources" → /resources.

## Detail page structure (per service)
1. Hero band (grid bg + glow): mono breadcrumb (Home / Services / shortName), Service ID chip (SVC-001..007), Category badge, optional "Adversarial Posture" badge for risk services, icon, H1 = name, tagline subhead, two CTAs (Start a project → /contact?service=<encoded name>, Related service link).
2. Overview: 2-col layout. Left = longDescription + description prose. Right = sticky spec card (`lg:sticky lg:top-24`) with Service ID, Category, Deliverables count, Capabilities count, Typical timeline ("2–12 weeks"), and a per-service CTA.
3. Capabilities: 2-col grid of cards with mono index (01..) + title + description.
4. Deliverables: checklist list with lucide Check icon in primary-tinted circle + title + description.
5. Outcomes: highlighted callout band (red-tinted for risk services, primary-tinted otherwise) with 3 items each carrying an icon (Target / TrendingUp / ShieldCheck, cycling).
6. Related services: 3-col small card grid linking to related service pages.
7. FAQ: shadcn `Accordion` (single, collapsible) over `faqs[]`.
8. Final CTA: "Start {service.name}" → /contact?service=<encoded name> + secondary "All services" → /services.

## generateStaticParams / generateMetadata
- `generateStaticParams` returns all 7 slugs → pre-rendered statically.
- `generateMetadata` (async, awaits `params`) returns per-service `title`, `description` (from `service.summary`), `canonical` (`/services/{slug}`), `openGraph` (type: article, with OG image), `twitter` (summary_large_image).
- `params` is typed as `Promise<{ slug: string }>` per Next.js 16 async params API.

## Routing decision (per task spec)
Only the dynamic route `src/app/services/[slug]/page.tsx` was created. Next.js will serve `/services/ai-implementation`, `/services/ai-automation`, `/services/rag`, `/services/ai-agents`, `/services/ai-engineering`, `/services/ai-security`, `/services/ai-red-teaming` from the dynamic route at build time via `generateStaticParams`. No static per-slug folders were created (cleaner, avoids duplication).

## Lint result
`bun run lint` — passes with zero errors. (Homepage errors in dev.log are from another agent's not-yet-shipped section imports — out of scope for this task.)

## Notes for downstream agents
- The breadcrumb uses `aria-label="Breadcrumb"` and `aria-current="page"` on the final segment.
- Service IDs (`SVC-001`..`SVC-007`) are derived from array order in `services.ts`. If the order changes, IDs will shift — intentional and stable as long as content order is stable.
- Risk posture (`RISK_SLUGS`) is keyed on slug; if a new risk-style service is added, append its slug to the set in BOTH files (or extract to a shared constant if reused elsewhere).

## Post-submission verification
- Re-ran `bun run lint` after restructuring Card/Link wrappers (Card does not support `asChild` in this project's shadcn/ui build, so wrapped Link outside Card instead). Lint clean.
- Re-ran `npx tsc --noEmit` — no errors in my files.
- All 8 routes verified via curl returning HTTP 200:
  - GET /services → 200 (H1 "Services" renders)
  - GET /services/ai-implementation → 200 (generate-params runs)
  - GET /services/ai-automation → 200
  - GET /services/rag → 200 (renders SVC-003)
  - GET /services/ai-agents → 200
  - GET /services/ai-engineering → 200
  - GET /services/ai-security → 200 (renders SVC-006, "Adversarial Posture" badge)
  - GET /services/ai-red-teaming → 200 (renders SVC-007, destructive accent)
- Confirmed from worklog that Task ID (Agent A) has shipped `@/components/layout/navbar` and `@/components/layout/footer` — my imports resolve correctly and the Navbar renders at top of every page.
- The homepage (src/app/page.tsx, Agent B/C) still has unresolved imports for not-yet-shipped section components — this is leaking into shared dev compilation but does NOT affect my routes (they render correctly with HTTP 200).
