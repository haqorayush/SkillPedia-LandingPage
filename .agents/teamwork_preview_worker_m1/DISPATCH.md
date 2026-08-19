## 2026-08-18T10:57:33Z

You are Worker M1 (Dynamic Routing Consolidation).
Your working directory for metadata is `/Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/.agents/teamwork_preview_worker_m1`.
Project root: `/Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia`.

MANDATORY FIRST STEPS:
1. Read `/Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/.agents/ORIGINAL_REQUEST.md`
2. Read `/Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/PROJECT.md`
3. Read `/Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/.agents/teamwork_preview_explorer_survey_1/analysis.md`

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

EXCLUSIVE WRITE OWNERSHIP:
You own:
- `src/lib/coursesData.ts`
- `src/components/programs/CourseDetailView.tsx`
- `src/app/programs/[slug]/page.tsx`
- Deletion of the 33 legacy directories in `src/app/programs/` (e.g. `ai-engineer`, `cloud-architect`, `full-stack-developer`, `ai-ml-development`, `api-development`, etc. Do NOT delete `src/app/programs/page.tsx` or `ProgramsList.tsx`).

IMPLEMENTATION INSTRUCTIONS:
1. Create `src/lib/coursesData.ts` containing the complete data for all 33 courses surveyed in Survey 1 `analysis.md`, with complete modules, tools, instructors, stats, pricing, prerequisites, outcomes, and helper methods: `getAllCourses()`, `getCourseBySlug(slug: string)`, `getAllCourseSlugs()`.
2. Create `src/components/programs/CourseDetailView.tsx` with dynamic Lucide icon resolver, instructor cards using `next/image` (`/images/team/*.webp` or `.png`), syllabus accordion/timeline, enrollment CTA with link to `/apply`, and dark/light mode semantic classes (`bg-white dark:bg-[#071340]`). (DO NOT import or render `<Navbar />` or `<Footer />` inside `CourseDetailView.tsx` or `[slug]/page.tsx`).
3. Create `src/app/programs/[slug]/page.tsx` with:
   - `export async function generateStaticParams()` returning all 33 `{ slug }` items.
   - `export async function generateMetadata({ params })` generating proper SEO metadata.
   - Default page export resolving `params` (awaiting params if Next.js 15/16 App Router promise), fetching course, calling `notFound()` if missing, and rendering `<CourseDetailView course={course} />`.
4. Delete all 33 legacy course folders in `src/app/programs/`.
5. Run TypeScript check: `npx tsc --noEmit` and ensure zero errors.
6. Write your handoff report to `/Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/.agents/teamwork_preview_worker_m1/handoff.md`.
7. Send a message back to the orchestrator with your results.
