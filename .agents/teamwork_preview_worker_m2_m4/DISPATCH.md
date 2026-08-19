## 2026-08-18T11:09:50Z
You are Worker M2-M4 (Asset & Performance Optimization, Architectural Resilience, UI & A11y Fixes).
Your metadata working directory is `/Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/.agents/teamwork_preview_worker_m2_m4`.
Project root: `/Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia`.

MANDATORY FIRST STEPS:
1. Read `/Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/.agents/ORIGINAL_REQUEST.md`
2. Read `/Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/PROJECT.md`
3. Read Survey 2 handoff: `/Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/.agents/teamwork_preview_explorer_survey_2/handoff.md`
4. Read Survey 3 handoff: `/Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/.agents/teamwork_preview_explorer_survey_3/handoff.md`

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

EXCLUSIVE WRITE OWNERSHIP:
- Assets: `public/images/team/`, deletion of root `/team/` folder
- Components & UI: `src/components/ui/CustomCursor.tsx`, `src/components/ui/Preloader.tsx`
- Layout & Pages: `src/app/layout.tsx`, `src/app/error.tsx`, `src/app/global-error.tsx`, `src/app/not-found.tsx`
- Page files removing Navbar/Footer: `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/apply/page.tsx`, `src/app/ceo-message/page.tsx` and `CeoClient.tsx`, `src/app/privacy-policy/page.tsx` and `PrivacyClient.tsx`, `src/app/programs/page.tsx`, `src/app/refund-policy/page.tsx` and `RefundClient.tsx`, `src/app/team/page.tsx`, `src/app/terms-of-service/page.tsx` and `TermsClient.tsx`, `src/app/vision-mission/page.tsx`
- Sections: `src/components/sections/HeroSection.tsx`, `StatsSection.tsx`, `CTASection.tsx`, `TeamSection.tsx`, `NavigationPortalView.tsx`
- Data & Constants: `src/lib/constants.ts`, `src/lib/coursesData.ts`

TASK BREAKDOWN:
1. **Asset & Performance Optimization (R2)**:
   - Convert all 7 team PNGs in `public/images/team/*.png` to WebP (`sharp` script with quality 80, effort 6: `Aniket.webp`, `Ayush.webp`, `Dharmendra.webp`, `Lavli.webp`, `Line.webp`, `Saurabh.webp`, `Sumit.webp`). Keep/update references to `.webp` in `coursesData.ts`, `TeamSection.tsx`, `CeoClient.tsx`.
   - Delete the duplicate 13.63MB `/team/` folder at project root.
   - Replace raw `<img>` in `src/app/ceo-message/CeoClient.tsx` with `next/image` (`Image`). Verify 0 raw `<img>` tags remain across `src/`.
   - Remove `<Preloader />` from `src/app/layout.tsx` (or remove the blocking 2.5s artificial delay) to eliminate the 3.7s LCP block.
   - Refactor `src/components/ui/CustomCursor.tsx` to use Framer Motion `useMotionValue` (`cursorX.set()`, `cursorY.set()`) so cursor movement triggers 0 React component state re-renders.

2. **Architectural Resilience (R3)**:
   - In `src/app/layout.tsx`: Render `<Navbar />` and `<Footer />` globally around `{children}` inside `<SmoothScroller>`.
   - Remove redundant `<Navbar />` and `<Footer />` imports and JSX elements from all 10 standalone page files listed above.
   - Create `src/app/error.tsx` (Client component with error handling and retry `reset()`).
   - Create `src/app/global-error.tsx` (Client component failsafe with `<html>` and `<body>`).
   - Create `src/app/not-found.tsx` (Branded 404 page with navigation).

3. **UI & Accessibility Fixes (R4)**:
   - Fix light/dark zebra-striping: In `HeroSection.tsx`, `StatsSection.tsx`, `CTASection.tsx`, `TeamSection.tsx`, `NavigationPortalView.tsx`, replace hardcoded dark hex backgrounds with semantic Tailwind theme classes (`bg-background`, `bg-card`, `bg-muted/40`, `text-foreground`, `dark:bg-[#071340]`, `dark:text-white`).
   - Fix HTML nesting violations: In `HeroSection.tsx` and `CTASection.tsx`, eliminate `<button>` or `<motion.button>` nested inside `<Link>` elements.
   - Fix Contact link routing: In `src/lib/constants.ts`, update `NAV_LINKS` Contact href to `"/apply"` (or `"/#contact"`). Update legal page contact link targets.

4. **Verification**:
   - Run `npx tsc --noEmit` -> 0 errors.
   - Run `npm run build` -> Successful static generation of all 46 pages.
   - Run `grep -rn "<img" src/` -> 0 occurrences.
