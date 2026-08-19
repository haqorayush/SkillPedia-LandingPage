## 2026-08-18T16:27:22Z

Implement Milestones 2, 3, and 4 (Requirements R2, R3, R4) for SkillPedia Next.js application.

Tasks:
1. Requirement R2 (Asset & Performance Optimization):
   - `src/components/ui/Preloader.tsx`: Eliminate artificial delay, session-aware 350ms non-blocking preloader, unsets scroll lock.
   - `src/components/ui/CustomCursor.tsx`: useMotionValue + useSpring zero-rerender direct GPU transform updates, coarse pointer detection.
   - `scripts/convert-team-webp.mjs`: Standalone script check, ensure team images are webp, zero raw img tags.
2. Requirement R3 (Architectural Resilience & Global Layout):
   - `src/app/layout.tsx`: Add Navbar and Footer inside SmoothScroller within ThemeProvider, clean duplicate inter.variable.
   - Remove redundant Navbar/Footer across 10 page files:
     1. src/app/page.tsx
     2. src/app/about/page.tsx
     3. src/app/apply/page.tsx
     4. src/app/ceo-message/page.tsx
     5. src/app/privacy-policy/page.tsx
     6. src/app/programs/page.tsx
     7. src/app/refund-policy/page.tsx
     8. src/app/team/page.tsx
     9. src/app/terms-of-service/page.tsx
     10. src/app/vision-mission/page.tsx
   - Implement error boundaries and 404:
     - `src/app/error.tsx`
     - `src/app/global-error.tsx`
     - `src/app/not-found.tsx`
3. Requirement R4 (UI & Accessibility Fixes):
   - Zebra-striping & semantic tokens: StatsSection, CTASection, TeamSection.
   - Invalid HTML nesting: HeroSection (`<motion.div><Link>`), CTASection (`<motion.div><Link>`).
   - Contact navigation links: `src/lib/constants.ts` (/#contact) and policy pages (PrivacyClient, RefundClient, TermsClient).
