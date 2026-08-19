# BRIEFING — 2026-08-18T11:10:00Z

## Mission
Execute Milestones M2, M3, and M4: Asset & Performance Optimization, Architectural Resilience, and UI/A11y fixes for the SkillPedia Next.js application.

## 🔒 My Identity
- Archetype: implementer
- Roles: implementer, qa, specialist
- Working directory: /Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/.agents/teamwork_preview_worker_m2_m4
- Original parent: bfd8f5d9-cc00-4242-a5e8-8b9bac96363f
- Milestone: M2-M4

## 🔒 Key Constraints
- DO NOT CHEAT. All implementations must be genuine. No hardcoded tests or fake facades.
- Modify only files within exclusive write ownership:
  - Assets: `public/images/team/`, delete `/team/`
  - Components & UI: `src/components/ui/CustomCursor.tsx`, `src/components/ui/Preloader.tsx`
  - Layout & Pages: `src/app/layout.tsx`, `src/app/error.tsx`, `src/app/global-error.tsx`, `src/app/not-found.tsx`
  - Page files removing Navbar/Footer: `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/apply/page.tsx`, `src/app/ceo-message/page.tsx` and `CeoClient.tsx`, `src/app/privacy-policy/page.tsx` and `PrivacyClient.tsx`, `src/app/programs/page.tsx`, `src/app/refund-policy/page.tsx` and `RefundClient.tsx`, `src/app/team/page.tsx`, `src/app/terms-of-service/page.tsx` and `TermsClient.tsx`, `src/app/vision-mission/page.tsx`
  - Sections: `src/components/sections/HeroSection.tsx`, `StatsSection.tsx`, `CTASection.tsx`, `TeamSection.tsx`, `NavigationPortalView.tsx`
  - Data & Constants: `src/lib/constants.ts`, `src/lib/coursesData.ts`
- Zero TypeScript errors (`npx tsc --noEmit`)
- Successful build (`npm run build`)
- 0 raw `<img>` tags across `src/`

## Current Parent
- Conversation ID: bfd8f5d9-cc00-4242-a5e8-8b9bac96363f
- Updated: not yet

## Task Summary
- **What to build**: Convert team PNGs to WebP, eliminate root `/team/` folder, replace raw `<img>` in `CeoClient.tsx`, eliminate blocking `<Preloader />`, refactor `CustomCursor.tsx` to `useMotionValue`, centralize `<Navbar />` and `<Footer />` in `src/app/layout.tsx`, add error/global-error/not-found boundaries, fix zebra-striping with semantic Tailwind classes, fix nested interactive HTML elements, and fix Contact routing.
- **Success criteria**: TypeScript check passes cleanly, Next.js build succeeds with static generation of all 46 routes, zero raw img tags in src, smooth unblocking LCP, working global layout & error boundaries.

## Key Decisions Made
- [TBD]

## Artifact Index
- `.agents/teamwork_preview_worker_m2_m4/DISPATCH.md` — Assignment dispatch
- `.agents/teamwork_preview_worker_m2_m4/BRIEFING.md` — Agent memory
- `.agents/teamwork_preview_worker_m2_m4/progress.md` — Progress tracker

## Change Tracker
- **Files modified**: none yet
- **Build status**: pending
- **Pending issues**: none

## Quality Status
- **Build/test result**: pending
- **Lint status**: pending
- **Tests added/modified**: pending

## Loaded Skills
- None loaded yet
