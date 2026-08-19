# Progress Tracker — Worker M2-M4

Last visited: 2026-08-18T11:10:30Z
Status: IN_PROGRESS

## Steps:
- [ ] 1. Read mandatory documentation (`ORIGINAL_REQUEST.md`, `PROJECT.md`, Survey 2 handoff, Survey 3 handoff)
- [ ] 2. Milestone M2: Asset & Performance Optimization
  - [ ] Convert 7 team PNGs to WebP (q80, effort 6) and verify output
  - [ ] Update team image references in `coursesData.ts`, `TeamSection.tsx`, `CeoClient.tsx`
  - [ ] Delete root `/team/` folder
  - [ ] Replace raw `<img>` with `next/image` in `CeoClient.tsx` & verify 0 raw `<img>` across `src/`
  - [ ] Remove blocking delay / `<Preloader />` from `src/app/layout.tsx`
  - [ ] Refactor `src/components/ui/CustomCursor.tsx` to `useMotionValue` (0 React state re-renders)
- [ ] 3. Milestone M3: Architectural Resilience
  - [ ] Render `<Navbar />` and `<Footer />` globally in `src/app/layout.tsx` inside `<SmoothScroller>`
  - [ ] Remove duplicate `<Navbar />` and `<Footer />` imports & tags from all 10 page files
  - [ ] Create `src/app/error.tsx`
  - [ ] Create `src/app/global-error.tsx`
  - [ ] Create `src/app/not-found.tsx`
- [ ] 4. Milestone M4: UI & Accessibility Fixes
  - [ ] Fix light/dark zebra-striping in `HeroSection.tsx`, `StatsSection.tsx`, `CTASection.tsx`, `TeamSection.tsx`, `NavigationPortalView.tsx`
  - [ ] Fix HTML nesting violations in `HeroSection.tsx` and `CTASection.tsx` (no buttons in links)
  - [ ] Update Contact link routing in `src/lib/constants.ts` and legal pages
- [ ] 5. Verification & Final Validation
  - [ ] Run `npx tsc --noEmit`
  - [ ] Run `npm run build`
  - [ ] Verify 0 raw `<img>` tags across `src/`
  - [ ] Write handoff.md and notify orchestrator
