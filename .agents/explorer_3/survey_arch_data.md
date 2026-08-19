# Architecture, Data Models & Static Generation Survey Report (R4: A-1 through A-9)

**Specialist**: Explorer 3 (Architecture, Data Models & Static Generation specialist)  
**Date**: 2026-08-18  
**Scope**: Category R4: Architecture, Data Model Parity & Cleanup (Issues A-1 to A-9)  
**Workspace**: `/Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia`

---

## 1. Executive Summary

This survey provides a comprehensive architectural and data model audit of the SkillPedia Next.js 16 (App Router) application. We evaluated all data structures across `src/data/` (consolidated into `src/lib/coursesData.ts` and `src/lib/constants.ts`), TypeScript schemas, dynamic route generation (`/programs/[slug]`), static generation (`generateStaticParams`, `generateMetadata`), streaming loading states, error boundaries, dead code, and ESLint workspace hygiene.

### Core Survey Findings:
1. **Static Pre-Rendering Verified**: All **33 courses** across Development (11), Testing (10), and Communication (8) + 4 flagship tracks pre-render cleanly with static HTML via `generateStaticParams()` and Next.js 16 asynchronous `params: Promise<{ slug: string }>` typing. `npm run build` succeeds producing 46 static pages.
2. **Data Model Duplication & Parity Drift (A-1)**: `src/lib/constants.ts` defines a duplicate `PROGRAMS_LIST` (lines 483-888) with an incompatible `CourseCategory` type (`Core` category in `constants.ts` vs `Development`/`Testing`/`Communication` in `coursesData.ts`).
3. **Missing Centralized Type Definitions (A-2)**: No `src/types/` directory exists. Types are scattered across `coursesData.ts`, `constants.ts`, and component files with redundant interface declarations.
4. **Instructor Entity Inconsistency (A-3)**: In `src/lib/coursesData.ts`, two courses (`ai-ml-development` at line 873 and `software-testing-cybersecurity` at line 8209) list instructor `name: "Dharmendra"` instead of `"Dharmendra Kumar Pandey"`, and `role: "Founder · Vision & Execution"` instead of `"Founder & CEO · Software Testing & Training"`.
5. **Missing Streaming Loading State (A-5)**: No `loading.tsx` exists in `src/app/` or `src/app/programs/[slug]/`, missing an opportunity for instant feedback during navigation.
6. **Dead Code & Orphaning (A-7)**: `src/components/ui/button.tsx` (59 lines) is completely unused across the entire codebase. `fix_themes.py` (75 lines) is an orphan script in the root directory.
7. **ESLint Ignore Hygiene (A-8)**: `eslint.config.mjs` fails to exclude `.agents/**` and `scripts/**`, causing non-production agent metadata and helper scripts to fail `npm run lint`.
8. **Navigation Route Parity (A-6)**: `FOOTER_LINKS.company` in `constants.ts` omits `{ label: "Our Team", href: "/team" }`.

---

## 2. Detailed Audit of Issues A-1 through A-9

---

### A-1: Data Model Duplication & Category Parity (`coursesData.ts` vs `constants.ts`)

#### Observation:
- **Location**: `src/lib/constants.ts` (lines 467-888) and `src/lib/coursesData.ts` (lines 1-8766).
- `src/lib/constants.ts` defines:
  ```typescript
  export type CourseCategory = 'Core' | 'Development' | 'Testing' | 'Communication';
  export type CourseDuration = '45 Days' | '3 Months';
  export interface ProgramCourse {
    id: string;
    title: string;
    category: CourseCategory;
    duration: CourseDuration;
    level: string;
    description: string;
    href: string;
    icon: string;
    color: string;
    tags: string[];
  }
  export const PROGRAMS_LIST: ProgramCourse[] = [ ... ]; // 33 items
  ```
- `src/lib/coursesData.ts` defines:
  ```typescript
  export type CourseCategory = 'Development' | 'Testing' | 'Communication' | 'development' | 'testing' | 'communication';
  export interface CourseData {
    slug: string;
    title: string;
    tagline: string;
    category: CourseCategory;
    duration: string;
    ...
  }
  export const COURSES_DATA: CourseData[] = [ ... ]; // 33 items
  ```
- **Discrepancy**:
  - `constants.ts` defines 4 courses (`full-stack-engineering`, `ai-ml-development`, `software-testing-cybersecurity`, `career-acceleration`) under `category: "Core"`.
  - `coursesData.ts` does NOT have a `"Core"` category; those 4 courses are categorized under `"Development"`, `"Testing"`, and `"Communication"`.
  - `ApplyClient.tsx` and `ProgramsList.tsx` consume `PROGRAMS_LIST` from `constants.ts`. If `PROGRAMS_LIST` and `COURSES_DATA` drift, titles, slugs, or tags will become inconsistent.

#### Fix Recommendation:
1. Align the `CourseCategory` definition to include `'Core' | 'Development' | 'Testing' | 'Communication'`.
2. Derive `PROGRAMS_LIST` directly from `COURSES_DATA` or export a shared helper so that updates in `coursesData.ts` automatically reflect everywhere.

---

### A-2: Missing Centralized TypeScript Definitions (`src/types/`)

#### Observation:
- **Location**: Scattered across multiple files (`src/lib/coursesData.ts`, `src/lib/constants.ts`, `src/components/sections/TeamSection.tsx`, `src/components/sections/NavigationPortalView.tsx`, `src/components/programs/CourseDetailView.tsx`, `src/app/programs/[slug]/page.tsx`).
- Currently, there is NO `src/types/` directory in the project.
- Redundant and duplicate interface declarations exist:
  - `CourseCategory` declared differently in `coursesData.ts` and `constants.ts`.
  - `TeamMember` declared locally in `TeamSection.tsx` (lines 15-22).
  - `PortalContent` declared locally in `NavigationPortalView.tsx` (lines 17-24).
  - `CourseDetailViewProps` declared locally in `CourseDetailView.tsx` (lines 147-149).

#### Fix Recommendation:
Create structured type files under `src/types/`:
- `src/types/course.ts`: `CourseData`, `CourseCategory`, `CourseDuration`, `CourseModule`, `CourseStat`, `CourseTool`, `CourseInstructor`, `CTAConfig`, `ToolsSectionConfig`, `CurriculumSectionConfig`, `ProgramCourse`.
- `src/types/team.ts`: `TeamMember`, `TeamTier`.
- `src/types/navigation.ts`: `NavLink`, `FooterLinks`, `SocialLink`, `PortalContent`.
- `src/types/index.ts`: Unified re-exports.

---

### A-3: Instructor Entity Inconsistencies & Bio Alignment

#### Observation:
- **Location**: `src/lib/coursesData.ts` at line 873 and line 8209 vs `src/components/sections/TeamSection.tsx` (lines 24-35).
- In `src/lib/coursesData.ts`:
  - Line 873 (`api-development`):
    ```json
    {
      "name": "Dharmendra",
      "role": "Founder · Vision & Execution",
      "image": "/images/team/Dharmendra.webp",
      "bio": "The visionary behind SkillPedia, Dharmendra founded the platform..."
    }
    ```
  - Line 8209 (`software-testing-cybersecurity`):
    ```json
    {
      "name": "Dharmendra",
      "role": "Founder · Vision & Execution",
      "image": "/images/team/Dharmendra.webp",
      "bio": "The visionary behind SkillPedia, Dharmendra founded the platform..."
    }
    ```
  - All other 31 courses in `coursesData.ts` use:
    ```json
    {
      "name": "Dharmendra Kumar Pandey",
      "role": "Founder & CEO · Software Testing & Training",
      "image": "/images/team/Dharmendra.webp",
      "bio": "The visionary behind SkillPedia, Dharmendra founded the platform with a singular mission — to bridge the gap between academic learning and industry-readiness. With over 5 years of deep expertise in Software Testing and the Model Training Industry, he has mentored hundreds of aspiring engineers into confident, job-ready professionals."
    }
    ```

#### Fix Recommendation:
Update lines 873 and 8209 in `src/lib/coursesData.ts` to use the canonical `"Dharmendra Kumar Pandey"` name and `"Founder & CEO · Software Testing & Training"` role.

---

### A-4: Static Page Generation & Dynamic Route Segment Parameter Typing (Next.js 16)

#### Observation:
- **Location**: `src/app/programs/[slug]/page.tsx` (lines 6-47).
- Verification:
  - `generateStaticParams()` returns all 33 `{ slug: string }` entries.
  - `PageProps` is typed as `{ params: Promise<{ slug: string }> }`.
  - Both `generateMetadata` and `CourseDetailPage` properly `await params`.
  - In Next.js 15/16, synchronous access to `params` is deprecated and causes runtime warnings/errors in server components. The implementation in `[slug]/page.tsx` is 100% compliant with React 19 / Next.js 16 conventions.
  - Build confirmation: `next build` executed successfully and pre-rendered all 33 paths under `/programs/[slug]`.

#### Fix Recommendation:
Keep the existing robust `Promise<{ slug: string }>` typing and static params generator. Ensure this pattern is maintained for any future dynamic routes.

---

### A-5: Missing Streaming Loading Boundaries (`loading.tsx`)

#### Observation:
- **Location**: `src/app/` (missing `loading.tsx`) and `src/app/programs/[slug]/` (missing `loading.tsx`).
- Next.js App Router uses `loading.tsx` to automatically wrap route segments in React `<Suspense>` boundaries.
- Currently, navigating between pages (especially dynamic course pages containing Framer Motion animations, Lucide icons, and curriculum trees) has no instant streaming fallback.

#### Fix Recommendation:
Create `src/app/loading.tsx` or `src/app/programs/[slug]/loading.tsx` rendering a lightweight, theme-aware skeleton/spinner with SkillPedia brand colors (`#FF7A00` / `#3B82F6`) to deliver instant page feedback and optimize INP.

---

### A-6: Route Hierarchy, Navigation Parity & Link Integrity

#### Observation:
- **Route Inventory (10 total page routes + 33 dynamic course routes)**:
  1. `/` — Home (Landing page with 11 sections)
  2. `/about` — About page (renders `NavigationPortalView`)
  3. `/apply` — Application / Admissions form (`ApplyClient`)
  4. `/ceo-message` — Letter from the Founder & CEO (`CeoClient`)
  5. `/privacy-policy` — Legal Privacy Policy (`PrivacyClient`)
  6. `/programs` — Programs catalog (`ProgramsList`)
  7. `/programs/[slug]` — 33 dedicated dynamic course detail pages (`CourseDetailView`)
  8. `/refund-policy` — Legal Refund Policy (`RefundClient`)
  9. `/team` — Team & Mentors showcase (`TeamSection`)
  10. `/terms-of-service` — Legal Terms of Service (`TermsClient`)
  11. `/vision-mission` — Vision & Mission page (`VisionMissionClient`)
- **Navigation Inconsistencies**:
  - `FOOTER_LINKS.company` in `src/lib/constants.ts` (lines 439-443):
    ```typescript
    company: [
      { label: "About Us", href: "/about" },
      { label: "Vision and Mission", href: "/vision-mission" },
      { label: "Message from the CEO", href: "/ceo-message" },
    ],
    ```
    Notice: `"Our Team"` (`/team`) is omitted!
  - `FOOTER_LINKS.programs` contains only 4 courses. While acceptable for a footer highlights column, linking to `/programs` or top tracks improves discovery.

#### Fix Recommendation:
Add `{ label: "Our Team", href: "/team" }` to `FOOTER_LINKS.company` in `src/lib/constants.ts`.

---

### A-7: Dead Code, Unused Components & Redundant File Elimination

#### Observation:
1. **`src/components/ui/button.tsx`**:
   - 59 lines of code importing `@base-ui/react/button` and `class-variance-authority`.
   - Never imported or used in any `.tsx` or `.ts` file across `src/`.
   - Native HTML `<button>` and Next.js `<Link>` elements are styled directly with Tailwind classes throughout the codebase.
2. **`fix_themes.py`**:
   - 75 lines of Python code in root directory.
   - An ad-hoc regex search-and-replace script left over from manual theme patching. Not part of any build, test, or deployment workflow.
3. **Unused Component Imports**:
   - `src/components/sections/NavigationPortalView.tsx`: Unused imports `Image`, `Plus`, `FaLinkedinIn`, `FaXTwitter`, `FaGithub`, `FaInstagram`, and unused variables `bgScale`, `handleClose`.
   - `src/components/sections/TeamSection.tsx`: Unused imports `ArrowLeft`, `FaLinkedinIn`, `FaXTwitter`, `FaGithub`, `FaInstagram`.
   - `src/components/layout/Navbar.tsx`: Unused state variable `activeSection`.
   - `src/components/providers/SmoothScroller.tsx`: Unused variable `pathname`.

#### Fix Recommendation:
- Either clean up or remove `src/components/ui/button.tsx` (or integrate it if a standard button component is desired).
- Delete `fix_themes.py` from project root.
- Remove all unused imports and variables across the listed components to achieve zero ESLint warnings.

---

### A-8: ESLint Configuration Workspace Hygiene

#### Observation:
- **Location**: `eslint.config.mjs` (lines 9-15).
- Currently, `globalIgnores` only contains:
  ```javascript
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ])
  ```
- Running `npm run lint` runs ESLint over `.agents/**` and `scripts/**`. Helper scripts and audit markdown scripts in `.agents/` trigger TypeScript lint errors (`@typescript-eslint/no-require-imports`, `@typescript-eslint/no-explicit-any`), causing `npm run lint` to fail with 18 errors even when application source files in `src/` are clean.

#### Fix Recommendation:
Update `eslint.config.mjs` to include `.agents/**` and `scripts/**` in `globalIgnores`.

---

### A-9: Resilience, Error Boundaries & 404 Handling

#### Observation:
- `src/app/error.tsx`:
  - Properly implemented client-side error boundary with `error` (Error & { digest?: string }) and `reset: () => void`.
  - Contains recovery buttons (`Try Again`, `Back to Home`, `Programs`).
- `src/app/global-error.tsx`:
  - Properly implemented root layout error boundary containing `<html>` and `<body>` tags.
  - Catches errors during root layout rendering with `Recover Session` and `Reload App` actions.
- `src/app/not-found.tsx`:
  - Branded 404 page with animated compass icon, helpful guidance, and quick navigation cards to `/programs`, `/apply`, `/team`, `/vision-mission`.
- `src/app/programs/[slug]/page.tsx`:
  - Calls `notFound()` from `next/navigation` when `getCourseBySlug(slug)` returns undefined, triggering `not-found.tsx` cleanly.

#### Assessment:
Error boundaries and 404 handling are architecturally sound and adhere to Next.js 16 App Router specifications.

---

## 3. Course Inventory & Slugs Verification Matrix (33 Programs)

| # | Slug | Category (coursesData) | Category (constants) | Duration | Price | Rating | Instructors Verified |
|---|------|------------------------|----------------------|----------|-------|--------|----------------------|
| 1 | `advanced-communication` | Communication | Communication | 45 Days | ₹14,999 | 4.9 | Line, Lavli Pandey |
| 2 | `ai-based-software-testing` | Testing | Testing | 45 Days | ₹14,999 | 4.8 | Dharmendra Kumar Pandey, Aniket |
| 3 | `ai-ml-development` | Development | Core | 3 Months | ₹24,999 | 4.9 | Ayush Dwivedy, Dharmendra Kumar Pandey (Fix needed: name was "Dharmendra") |
| 4 | `api-development` | Development | Development | 45 Days | ₹14,999 | 4.8 | Saurabh Pathak, Ayush Dwivedy |
| 5 | `api-testing-postman-rest-assured` | Testing | Testing | 45 Days | ₹14,999 | 4.9 | Sumit Kumar, Aniket |
| 6 | `automation-testing-selenium` | Testing | Testing | 45 Days | ₹14,999 | 4.9 | Aniket, Dharmendra Kumar Pandey |
| 7 | `backend-development` | Development | Development | 3 Months | ₹24,999 | 4.9 | Saurabh Pathak, Ayush Dwivedy |
| 8 | `basic-english-communication` | Communication | Communication | 45 Days | ₹14,999 | 4.8 | Lavli Pandey, Line |
| 9 | `career-acceleration` | Communication | Core | 3 Months | ₹24,999 | 4.9 | Line, Lavli Pandey |
| 10 | `communication-for-beginners` | Communication | Communication | 45 Days | ₹14,999 | 4.8 | Lavli Pandey, Line |
| 11 | `complete-software-testing-course` | Testing | Testing | 3 Months | ₹24,999 | 4.9 | Dharmendra Kumar Pandey, Aniket |
| 12 | `corporate-communication` | Communication | Communication | 3 Months | ₹24,999 | 4.9 | Line, Dharmendra Kumar Pandey |
| 13 | `english-grammar-tenses` | Communication | Communication | 45 Days | ₹14,999 | 4.8 | Lavli Pandey, Line |
| 14 | `frontend-development` | Development | Development | 3 Months | ₹24,999 | 4.9 | Ayush Dwivedy, Saurabh Pathak |
| 15 | `full-stack-development` | Development | Development | 3 Months | ₹24,999 | 4.9 | Ayush Dwivedy, Saurabh Pathak |
| 16 | `full-stack-engineering` | Development | Core | 3 Months | ₹24,999 | 4.9 | Ayush Dwivedy, Aniket |
| 17 | `interview-communication` | Communication | Communication | 45 Days | ₹14,999 | 4.9 | Line, Lavli Pandey |
| 18 | `java-development` | Development | Development | 3 Months | ₹24,999 | 4.9 | Saurabh Pathak, Ayush Dwivedy |
| 19 | `java-selenium` | Testing | Testing | 3 Months | ₹24,999 | 4.9 | Aniket, Sumit Kumar |
| 20 | `javascript` | Development | Development | 45 Days | ₹14,999 | 4.8 | Ayush Dwivedy, Saurabh Pathak |
| 21 | `javascript-typescript-test-automation` | Testing | Testing | 45 Days | ₹14,999 | 4.8 | Sumit Kumar, Ayush Dwivedy |
| 22 | `manual-testing` | Testing | Testing | 45 Days | ₹14,999 | 4.8 | Dharmendra Kumar Pandey, Sumit Kumar |
| 23 | `mobile-app-testing` | Testing | Testing | 45 Days | ₹14,999 | 4.8 | Aniket, Sumit Kumar |
| 24 | `nodejs` | Development | Development | 45 Days | ₹14,999 | 4.8 | Saurabh Pathak, Ayush Dwivedy |
| 25 | `performance-testing` | Testing | Testing | 45 Days | ₹14,999 | 4.8 | Sumit Kumar, Aniket |
| 26 | `playwright-automation` | Testing | Testing | 45 Days | ₹14,999 | 4.9 | Aniket, Sumit Kumar |
| 27 | `professional-communication` | Communication | Communication | 45 Days | ₹14,999 | 4.9 | Line, Lavli Pandey |
| 28 | `python-development` | Development | Development | 3 Months | ₹24,999 | 4.9 | Ayush Dwivedy, Saurabh Pathak |
| 29 | `react-js` | Development | Development | 45 Days | ₹14,999 | 4.9 | Ayush Dwivedy, Saurabh Pathak |
| 30 | `software-development-with-ai-tools` | Development | Development | 45 Days | ₹14,999 | 4.9 | Ayush Dwivedy, Dharmendra Kumar Pandey |
| 31 | `software-testing-cybersecurity` | Testing | Core | 3 Months | ₹24,999 | 4.9 | Dharmendra Kumar Pandey, Aniket (Fix needed: name was "Dharmendra") |
| 32 | `spoken-english` | Communication | Communication | 45 Days | ₹14,999 | 4.8 | Lavli Pandey, Line |
| 33 | `web-development` | Development | Development | 45 Days | ₹14,999 | 4.8 | Saurabh Pathak, Ayush Dwivedy |

---

## 4. Proposed Implementation Plan & Recommendations for Implementation Agent

### Priority 1: Data Model & Schema Normalization
1. **Fix Instructor Names in `coursesData.ts`**:
   - Replace `"name": "Dharmendra"` with `"name": "Dharmendra Kumar Pandey"` at lines 873 and 8209.
   - Replace `"role": "Founder · Vision & Execution"` with `"role": "Founder & CEO · Software Testing & Training"`.
2. **Harmonize `CourseCategory`**:
   - Unify `CourseCategory` definition to `'Core' | 'Development' | 'Testing' | 'Communication'`.
3. **Add Missing Footer Link**:
   - Add `{ label: "Our Team", href: "/team" }` to `FOOTER_LINKS.company` in `constants.ts`.

### Priority 2: Type Centralization (`src/types/`)
1. Create `src/types/course.ts`, `src/types/team.ts`, `src/types/navigation.ts`, and `src/types/index.ts`.
2. Import these canonical types in `coursesData.ts`, `constants.ts`, and component files.

### Priority 3: Dead Code & Workspace Hygiene
1. Remove or consolidate `src/components/ui/button.tsx`.
2. Delete orphan root file `fix_themes.py`.
3. Update `eslint.config.mjs` to add `.agents/**` and `scripts/**` to `globalIgnores`.
4. Remove unused imports and variables in `NavigationPortalView.tsx`, `TeamSection.tsx`, `Navbar.tsx`, and `SmoothScroller.tsx`.

### Priority 4: Streaming Loading UX
1. Add `src/app/loading.tsx` and `src/app/programs/[slug]/loading.tsx` with a branded spinner/skeleton UI.

---

## 5. Verification & Quality Gate Criteria
- `npm run build`: Must exit with code 0 and pre-render all 33 `/programs/[slug]` static routes (46 pages total).
- `npm run lint`: Must pass with 0 errors and 0 warnings after `eslint.config.mjs` ignore update and unused variable cleanup.
- Visual inspection: All 33 courses render curriculum, tools, instructors, prerequisites, and outcomes without hydration mismatch.
