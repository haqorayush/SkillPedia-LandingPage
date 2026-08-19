# Project Refactoring Plan: SkillPedia Next.js

## 1. Survey Phase (Parallel Explorers)
- **Explorer 1 (Routes & Data)**: Examine all 33 hardcoded directories under `src/app/programs/`, check differences in JSX structure, extract common course schema, and plan `src/app/programs/[slug]/page.tsx`, `CourseDetailView.tsx`, and `coursesData.ts`.
- **Explorer 2 (Assets & Performance)**: Inventory all `<img>` tag usages across the repository, examine `public/images/team/` and root `/team/`, check `Preloader.tsx` artificial delay, and analyze `CustomCursor.tsx` state updates to plan Framer Motion `useMotionValue` refactoring.
- **Explorer 3 (Architecture & UI/A11y)**: Audit `Navbar` and `Footer` usage across all 43 page files, inspect root `layout.tsx`, verify missing error boundaries (`error.tsx`, `global-error.tsx`, `not-found.tsx`), audit hardcoded dark hex backgrounds (zebra striping), invalid HTML nesting (`<button>` inside `<Link>`), and Contact navigation links.

## 2. Synthesis & Project Specification
- Aggregate explorer findings into `PROJECT.md` (Feature Inventory, Architecture, Milestones, Interface Contracts, Code Layout).
- Create `TEST_INFRA.md` for verification testing.

## 3. Milestone Execution
- **Milestone 1**: Dynamic Routing Consolidation (R1)
- **Milestone 2**: Asset & Performance Optimization (R2)
- **Milestone 3**: Architectural Resilience (R3)
- **Milestone 4**: UI & Accessibility Fixes (R4)
- **Milestone 5**: Build, Static Params Pre-rendering & E2E Validation

## 4. Verification & Audit Gating
- Reviewers (2) + Challengers (2) + Forensic Auditor on each iteration/milestone.
- Strict AND pass criteria.
