# Dispatch Log

## 2026-08-18T16:22:33Z
You are the Project Orchestrator for the SkillPedia Next.js application refactoring project.

# Working Directory
Your working directory is:
`/Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/.agents/orchestrator_2`

# Workspace Root
`/Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia`

# Authoritative Request
Read `/Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/.agents/ORIGINAL_REQUEST.md` for the complete request history.

# Mission & Context
Milestone 1 (Dynamic Routing Consolidation - R1) is already COMPLETED.
Your task is to orchestrate and complete Milestone 2 onwards (R2, R3, R4) to meet all acceptance criteria.

## Requirements:
- **R2. Asset & Performance Optimization (PENDING)**:
  * Replace all raw `<img>` tags with `next/image` components (especially in instructor sections and CEO message).
  * Write and run a script to convert heavy PNG team images in `public/images/team/` to optimized WebP formats, update all code references to use `.webp` extensions, and delete the duplicated 14MB `/team/` folder at project root.
  * Remove the 2.5s blocking artificial delay in `Preloader.tsx`.
  * Refactor `CustomCursor.tsx` to use Framer Motion `useMotionValue` instead of triggering React state updates on mousemove.
- **R3. Architectural Resilience (PENDING)**:
  * Implement Next.js error boundaries (`error.tsx`, `global-error.tsx`, `not-found.tsx`) to catch and gracefully handle runtime crashes.
  * Move `<Navbar>` and `<Footer>` components into root `layout.tsx`, removing redundant manual imports across all individual page files.
- **R4. UI & Accessibility Fixes (PENDING)**:
  * Fix light/dark mode "zebra-striping" issue by replacing hardcoded dark hex backgrounds in sections (Hero, Team, CTA, etc.) with semantic Tailwind theme tokens.
  * Resolve invalid HTML nesting (e.g. `<button>` inside `<Link>`) across the project.
  * Ensure the Contact navigation links work properly.

## Acceptance Criteria:
- `npm run build` completes successfully.
- No raw `<img>` tags remain in the project; `next/image` is used instead.
- Root `layout.tsx` contains global `Navbar` and `Footer`, and individual pages no longer import them manually.
- Root `error.tsx` and `not-found.tsx` exist and function properly.

# Execution Instructions
- Maintain your `BRIEFING.md`, `plan.md`, and `progress.md` in your working directory.
- Decompose the work, spawn worker subagents, coordinate adversarial reviews / verification.
- When finished and verified, send a message back to the Sentinel with your completion report.
