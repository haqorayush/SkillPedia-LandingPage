# E2E Test Infra: SkillPedia Next.js Refactoring

## Test Philosophy
- Opaque-box, requirement-driven, verifiable via automated scripts and build checks.
- Zero tolerance for broken routes, raw `<img>` tags, manual Navbar/Footer imports, or build/type errors.

## Feature Inventory & Test Coverage
| # | Feature | Requirement | Verification Method |
|---|---------|-------------|---------------------|
| 1 | Dynamic Course Routes (33 courses) | ORIGINAL_REQUEST §R1 | `generateStaticParams` pre-renders all 33 static routes during `npm run build` |
| 2 | Legacy 33 Course Folders Deletion | ORIGINAL_REQUEST §R1 | Assert only `[slug]`, `page.tsx`, and `ProgramsList.tsx` remain in `src/app/programs/` |
| 3 | Centralized `coursesData.ts` & `CourseDetailView.tsx` | ORIGINAL_REQUEST §R1 | TypeScript type check and unit verification of `getCourseBySlug` and `getAllCourseSlugs` |
| 4 | WebP Team Images & 0 Root `/team/` | ORIGINAL_REQUEST §R2 | Assert `public/images/team/*.webp` exists, root `/team/` is deleted, references use `.webp` |
| 5 | Raw `<img>` Elimination | ORIGINAL_REQUEST §R2 | Grep search across `src/` returns 0 raw `<img>` tags |
| 6 | CustomCursor Zero-Rerender & Preloader | ORIGINAL_REQUEST §R2 | Static analysis of `CustomCursor.tsx` (`useMotionValue`) and `layout.tsx` (no blocking preloader) |
| 7 | Global Navbar & Footer in `layout.tsx` | ORIGINAL_REQUEST §R3 | `layout.tsx` renders `<Navbar />` and `<Footer />`; `grep` shows 0 manual page imports |
| 8 | Error Boundaries (`error.tsx`, `global-error.tsx`, `not-found.tsx`) | ORIGINAL_REQUEST §R3 | Verify file existence, TypeScript compilation, and error handling structure |
| 9 | Semantic Theme Tokens & A11y | ORIGINAL_REQUEST §R4 | Check absence of hardcoded dark backgrounds in light mode sections; 0 nested `<button>` in `<Link>` |
| 10 | Contact Link Routing | ORIGINAL_REQUEST §R4 | Verify `NAV_LINKS` and policy links resolve to `/apply` or `/#contact` |

## Test Execution Suite
- **TypeScript Compilation**: `npx tsc --noEmit`
- **Next.js Production Build**: `npm run build`
- **Folder Cleanup Verification**: Verify `src/app/programs/` contains only `[slug]`, `page.tsx`, `ProgramsList.tsx`.
- **Image Audit**: Grep across `src/` to ensure 0 raw `<img` elements.
- **Import Audit**: Grep across `src/app/` to ensure `<Navbar />` and `<Footer />` are only imported in `layout.tsx`.

## Real-World Application Scenarios
1. **User Course Browsing**: Navigate to `/programs`, click any of the 33 course cards, route loads statically with correct title, stats, curriculum, instructors (`next/image`), and theme.
2. **Admissions / Contact**: Click "Contact" in Navbar or "Apply Now" in Hero/CTA, smoothly routes to `/apply` without invalid HTML button nesting.
3. **Smooth Scroll & Fast Navigation**: Page loads instantly without 3.7s preloader hold; cursor moves with buttery smoothness and zero React state lag.
4. **404 Handling**: Navigate to `/programs/unknown-slug` or `/random-404`, branded `not-found.tsx` renders with return home links.
