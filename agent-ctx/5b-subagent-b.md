# Task 5b — Subagent B (Homepage middle sections)

## Task
Build 4 homepage middle section components in `src/components/sections/`:
1. `services-section.tsx` — Premium services grid (7 cards from `services` content)
2. `what-we-build-section.tsx` — Architecture cards (11 items from `whatWeBuild`)
3. `process-section.tsx` — 9-stage vertical timeline (`transformationStages`)
4. `security-section.tsx` — HIGH-IMPACT differentiator section (`securityAttackSurface`)

## Work Log
- Read `worklog.md` and inspected existing shared components (`Section`, `SectionHeading`, `MonoLabel`, `ArrowLink`, `Container`) plus peer section files (`tech-stack-section.tsx`, `case-studies-section.tsx`, `builtwith-ai-section.tsx`) for visual style alignment.
- Discovered another agent created `src/components/shared/what-we-build-icons.ts` exporting `whatWeBuildIconMap`. Adopted it in my `what-we-build-section.tsx` instead of duplicating the icon map (DRY).

### Files delivered

#### 1. `src/components/sections/services-section.tsx`
- 7-card services grid using `lg:grid-cols-6`.
- First 6 cards `lg:col-span-2` (3 per row × 2 rows). AI Red Teaming featured full-width (`lg:col-span-6`) with horizontal internal layout on lg.
- AI Security & AI Red Teaming visually distinct: amber accent (`border-amber-500/25`, icon `bg-amber-500/10 text-amber-400`) + pulsing "Critical" mono badge.
- Mono index "01"–"07" in top-right corner of each card.
- Hover: `-translate-y-1` + border highlight + primary glow shadow.
- Per-card "Explore →" link; bottom "View all services →" ArrowLink.

#### 2. `src/components/sections/what-we-build-section.tsx`
- 11 architecture-style cards, responsive grid (2 col mobile / 3 col md / 4 col lg).
- Dashed border default → solid `primary/50` on hover; ↗ indicator animates on hover.
- "SYS-001" mono ID footer + "deployable" tag.
- Uses shared `whatWeBuildIconMap` from `@/components/shared/what-we-build-icons`.

#### 3. `src/components/sections/process-section.tsx`
- 9-stage vertical timeline with left-side connector (`bg-gradient-to-b from-primary/40 via-primary/15 to-transparent`).
- Animated "flow bead" sweeps top→bottom (CSS `top: 0% → 100%` keyframes, 7s loop, respects reduced motion).
- Each stage: mono number with `text-glow` on hover, stage name, description, outputs as mono chips.
- Stage 07 (Secure) visually distinct: `border-primary/40 bg-primary/[0.04]`, primary-colored number with persistent text-glow, primary-glow dot ring, "Differentiator" badge with Shield icon.
- Footer summary line referencing Stage 07.

#### 4. `src/components/sections/security-section.tsx`
- Used plain `<section>` element (not shared `Section`) for full-bleed background control — Section component would have confined backgrounds to Container's max-w-7xl width.
- Background layers (full-bleed):
  - `bg-grid` with custom radial mask (focused at 70% 30%)
  - Primary radial glows at 80% 15% and 10% 90%
  - Slow-spinning `Crosshair` target SVG (120s rotation, `primary/10` opacity) at top-right corner
  - Animated scan line sweeping vertically (7s loop)
- Headline: "Don't just deploy AI. Attack it first." — "Attack it first." in `amber-400 text-glow` for warning emphasis.
- 10-item threat catalog grid (2-col lg) with per-item Lucide danger icons (ShieldAlert, Lock, EyeOff, Database, KeyRound, Users, Wrench, Unplug, Network, AlertTriangle), mono uppercase titles, `THREAT-01..10` IDs.
- CTA: large primary Button "Request an AI Security Assessment" → `/contact?service=AI+Security`.
- Ghost link "Explore AI Security service" → `/services/ai-security`.
- Methodology line: "OWASP LLM Top 10 · MITRE ATLAS · NIST AI RMF".

### Conventions followed
- Amber (`amber-400/amber-500`) reserved for "Critical" / warning badges (matches case-studies "Example Solution" pattern).
- Mono labels via `font-mono text-[0.6rem–0.7rem] uppercase tracking-[0.16em–0.18em]`.
- Hover pattern: `-translate-y` + `border-primary/40` + glow shadow with `color-mix(in oklab, var(--primary), transparent)`.
- Card pattern: `border + bg-card + p-5/6/8`.
- All custom CSS animations scoped via inline `<style>` tags with uniquely-prefixed class names (`process-flow-bead`, `sec-scanline`, `sec-target`) to avoid collisions with `globals.css` (modified by other agents concurrently).
- All animations honor `prefers-reduced-motion` via the blanket rule in `globals.css`.
- 44px+ touch targets on all interactive elements (`min-h-[2.75rem]` for card links, `h-12` for primary CTA, `min-h-[3rem]` for ghost link).
- Visible focus states: `focus-visible:ring-[3px] focus-visible:ring-ring/50` on all interactive elements.

## Stage Summary
- 4 files delivered in `src/components/sections/`. All server components (no "use client"). Lint passes clean. Dev server log shows no compile errors. All Lucide icon imports verified via `node -e` check.
- Ready for assembly by homepage assembler agent (Task C). Each exports a single named function component with no props.
- Did NOT modify `globals.css`, `page.tsx`, or any shared component — only created new section files. Did NOT touch Navbar/Footer/Hero (Task A) or bottom sections (Task C).
