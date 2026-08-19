## 2026-08-18T10:29:43Z
You are a Worker subagent (worker_m4_integration).
Working directory: /Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/.agents/worker_m4_integration/
Read ORIGINAL_REQUEST: /Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/.agents/ORIGINAL_REQUEST.md
Read PROJECT: /Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/PROJECT.md
Read Spec Report: /Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/.agents/spec_miner_survey_1/handoff.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Scope & File Ownership:
You exclusively own:
- `/src/lib/constants.ts`
- `/src/app/programs/ProgramsList.tsx`

Task:
1. Update `PROGRAMS_LIST` in `/src/lib/constants.ts`:
   - Replace or expand the programs list with all 29 courses across Development (11), Testing (10), and Communication (8) exactly as specified in `.agents/spec_miner_survey_1/handoff.md`.
   - Each course object must contain:
     - `id`: string (kebab-case slug)
     - `title`: string
     - `category`: 'Development' | 'Testing' | 'Communication'
     - `duration`: '45 Days' | '3 Months'
     - `level`: string
     - `description`: string
     - `href`: string (`/programs/[slug]`)
     - `icon`: string
     - `color`: string (hex color)
     - `tags`: string[]
   - Ensure all 29 slugs match the existing 29 course directories in `/src/app/programs/`.

2. Update `/src/app/programs/ProgramsList.tsx`:
   - Upgrade the listing component to render all 29 courses in an elegant, modern, responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`).
   - Add interactive Category Filter Tabs at the top:
     - "All (29)", "Development (11)", "Testing (10)", "Communication (8)".
   - Each card must render:
     - Background glow (`program.color`) on hover with smooth transitions.
     - Top row with Icon, Category badge, and Duration badge (e.g. `45 Days` / `3 Months`).
     - Title with hover arrow transition.
     - Description.
     - Tag pills.
     - Direct `next/link` linking to `program.href`.
   - Ensure smooth Framer Motion entrance and layout animations (`layout`, `AnimatePresence`).

3. Verification:
   - Run `npx tsc --noEmit` to verify type safety.
   - Run `npm run build` to verify that all 29 routes and the main `/programs` page compile and prerender with 0 errors.

When finished, write your handoff report to `.agents/worker_m4_integration/handoff.md` and send a completion message back to parent.
