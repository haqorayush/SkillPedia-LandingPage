# Project: SkillPedia Landing Page Fixes

## Architecture
- **Framework**: Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + Framer Motion
- **Architecture Boundaries**:
  - `src/components/ui/`: Global UI interactive overlays, preloader, page transition, custom cursor.
  - `src/components/providers/`: Root providers (SmoothScroller / Lenis).
  - `src/components/sections/`: Landing page sections (Hero, Stats, Career, CTA, Testimonials, NavigationPortal).
  - `src/app/`: Next.js App Router routes (`apply`, `ceo-message`, `terms-of-service`, `not-found`, `global-error`, `globals.css`).
  - `src/components/programs/`: Course / Program views (CourseDetailView).

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | R1: Preloader SSR Hydration & A11y | `useState(true)` + mount `useEffect` for `sessionStorage`, `pointer-events-auto`, `role="status"`, `aria-live="polite"` | M1 | ORIGINAL_REQUEST §R1 |
| 2 | R2.1: SmoothScroller Motion | Check `prefers-reduced-motion` before initializing Lenis, native scroll fallback | M1 | ORIGINAL_REQUEST §R2.1 |
| 3 | R2.2: PageTransition Interval & Hash | Cleanup interval in ref, skip same-page `#` hash links, light/dark overlay classes | M1 | ORIGINAL_REQUEST §R2.2 |
| 4 | R2.3: CustomCursor Layout Thrashing | Replace `getComputedStyle` with `target.closest(...)`, window enter/leave listeners | M1 | ORIGINAL_REQUEST §R2.3 |
| 5 | R2.4: Testimonials A11y Verification | Card button role/tabIndex/onKeyDown, modal dialog semantics, star rating role="img" | M2 | ORIGINAL_REQUEST §R2.4 |
| 6 | R2.5: StatsSection Screen Reader Heading | Add `<h2 className="sr-only">Key Program Statistics</h2>` | M2 | ORIGINAL_REQUEST §R2.5 |
| 7 | R2.6: ApplyClient Select Chevrons & Address Label | Add ChevronDown wrapper on all 8 `<select>` elements, `htmlFor="street"` on address label | M2 | ORIGINAL_REQUEST §R2.6 |
| 8 | R3.1: SmoothScroller Package Comment | Add `// TODO: migrate to 'lenis' package` comment above `@studio-freight/lenis` import | M1 | ORIGINAL_REQUEST §R3.1 |
| 9 | R3.2: HeroSection SVG & Particles | `aria-hidden="true"` on scroll indicator SVG, comment on static particle key | M2 | ORIGINAL_REQUEST §R3.2 |
| 10 | R3.3: CTASection Particles | Comment on static particle key | M2 | ORIGINAL_REQUEST §R3.3 |
| 11 | R3.4: CareerSection useTransform Removal | Remove redundant identity `useTransform`, use `scrollYProgress` directly | M2 | ORIGINAL_REQUEST §R3.4 |
| 12 | R3.5: StatsSection Unique Keys | Change `key={index}` to `key={stat.id}` in stats map | M2 | ORIGINAL_REQUEST §R3.5 |
| 13 | R3.6: NavigationPortalView Cleanup | Remove unused `statValue`, `statLabel`, and `onClose` prop | M2 | ORIGINAL_REQUEST §R3.6 |
| 14 | R3.7: CeoClient Semantic Heading | Change `<h3>` to `<h2>` for "Dharmendra K. Pandey" | M3 | ORIGINAL_REQUEST §R3.7 |
| 15 | R3.8: TermsClient Refund Policy Link | Wrap "our separate Refund Policy" with `<Link href="/refund-policy">` | M3 | ORIGINAL_REQUEST §R3.8 |
| 16 | R3.9: not-found Reduced Motion & Keys | Add `motion-reduce:animate-none` to Compass, replace `key={index}` with `key={item.href}` | M3 | ORIGINAL_REQUEST §R3.9 |
| 17 | R3.10: global-error Text Selection | Remove `select-none` from `<body>` className | M3 | ORIGINAL_REQUEST §R3.10 |
| 18 | R3.11: globals.css Overflow Clipping | Change `overflow-x: hidden` to `overflow-x: clip` on `html, body` | M3 | ORIGINAL_REQUEST §R3.11 |
| 19 | R3.12: CourseDetailView Scroll Margin | Add `scroll-mt-24` to `<section id="curriculum">` | M3 | ORIGINAL_REQUEST §R3.12 |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Core UI & Providers | R1, R2.1, R2.2, R2.3, R3.1 | Survey Complete | DONE |
| 2 | Landing Sections & Forms | R2.4, R2.5, R2.6, R3.2, R3.3, R3.4, R3.5, R3.6 | Survey Complete | DONE |
| 3 | App Pages & Styles | R3.7, R3.8, R3.9, R3.10, R3.11, R3.12 | Survey Complete | DONE |
| 4 | Verification & Audit | Lint (0 errors/warnings), Build (46 static pages), Reviewers (2), Challengers (2), Forensic Auditor (1) | M1, M2, M3 | DONE |

## Interface Contracts
- `Preloader`: Self-contained overlay in root layout. Manages `isLoading` state, locks `document.body.style.overflow`, and uses `sessionStorage['sp_visited']`.
- `SmoothScroller`: Root layout wrapper around `{children}`. Manages Lenis instance or skips on `prefers-reduced-motion`.
- `PageTransition`: Top bar overlay responding to `usePathname()` and internal anchor clicks.
- `CustomCursor`: Visual overlay active only on `pointer: fine` devices.
- `ApplyClient`: Form client component submitting to backend endpoint. Select wrappers preserve layout classes.

## Code Layout
- `src/components/ui/Preloader.tsx`
- `src/components/providers/SmoothScroller.tsx`
- `src/components/ui/PageTransition.tsx`
- `src/components/ui/CustomCursor.tsx`
- `src/components/sections/StatsSection.tsx`
- `src/app/apply/ApplyClient.tsx`
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/CTASection.tsx`
- `src/components/sections/CareerSection.tsx`
- `src/components/sections/NavigationPortalView.tsx`
- `src/components/sections/TestimonialsSection.tsx`
- `src/app/ceo-message/CeoClient.tsx`
- `src/app/terms-of-service/TermsClient.tsx`
- `src/app/not-found.tsx`
- `src/app/global-error.tsx`
- `src/app/globals.css`
- `src/components/programs/CourseDetailView.tsx`
