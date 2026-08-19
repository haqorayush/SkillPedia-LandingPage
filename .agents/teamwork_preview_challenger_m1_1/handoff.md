# Challenger Report: Milestone 1 (Dynamic Routing Consolidation)

**Verdict**: `REQUEST_CHANGES`

---

## 1. Observation

Direct empirical verification of `src/lib/coursesData.ts`, `src/app/programs/[slug]/page.tsx`, and `src/components/programs/CourseDetailView.tsx` revealed the following:

### 1.1 Curriculum Module Defect (Schema Incompleteness)
- **Course #1 (`advanced-communication`)**:
  `src/lib/coursesData.ts` lines 230–292 contain only **2 modules** instead of the required >= 3 modules:
  - `module-1`: `"Phase 1 (Weeks 1-2)"` — `"Narrative Architecture & Business Storytelling"`
  - `module-2`: `"Phase 3 (Weeks 5-6)"` — `"Executive Presence, Town Halls & Boardroom Influence"`
  - *Missing*: Phase 2 (Weeks 3-4), e.g. High-Stakes Negotiation & Persuasion Frameworks.
- **Course #26 (`playwright-automation`)**:
  `src/lib/coursesData.ts` lines 6793–6856 contain only **2 modules** instead of the required >= 3 modules:
  - `module-1`: `"Phase 2 (Weeks 3-4)"` — `"Advanced Interactions, State & Network Mocking"`
  - `module-2`: `"Phase 3 (Weeks 5-6)"` — `"Page Object Model, Sharding & CI/CD Pipelines"`
  - *Missing*: Phase 1 (Weeks 1-2), e.g. Playwright Core Architecture, Locators & First Test Scripts.

### 1.2 Prototype Property Collision in `getCourseBySlug` (Runtime Crash Vulnerability)
- **Implementation in `src/lib/coursesData.ts` (lines 8688–8699)**:
  ```typescript
  export const COURSES_MAP: Record<string, CourseData> = COURSES_DATA.reduce((acc, course) => {
    acc[course.slug] = course;
    return acc;
  }, {} as Record<string, CourseData>);

  export function getCourseBySlug(slug: string): CourseData | undefined {
    return COURSES_MAP[slug];
  }
  ```
- **Observed Behavior**:
  Calling `getCourseBySlug('toString')`, `getCourseBySlug('valueOf')`, `getCourseBySlug('constructor')`, or `getCourseBySlug('__proto__')` returns the inherited prototype property (e.g. `[Function: toString]`) rather than `undefined`.
- **Dynamic Route Impact in `src/app/programs/[slug]/page.tsx` (lines 37–46)**:
  ```typescript
  export default async function CourseDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const course = getCourseBySlug(slug);

    if (!course) {
      notFound();
    }

    return <CourseDetailView course={course} />;
  }
  ```
  When navigating to `/programs/toString`, `if (!course)` evaluates to `false` because `[Function: toString]` is truthy. Next.js fails to call `notFound()` and attempts to render `<CourseDetailView course={course} />`, triggering an unhandled server 500 runtime crash (`TypeError: Cannot read properties of undefined`).

### 1.3 Verified Passing Invariants
- **Course Count**: Exactly 33 unique courses exist in `COURSES_DATA`, `getAllCourses()`, and `getAllCourseSlugs()`.
- **All 33 Slugs**: Valid URL kebab-case slugs with zero duplicates matching all navigation and footer references.
- **Stats, Tools, Instructors, Outcomes**: All 33 courses satisfy stats (>= 3 items), tools (>= 5 items), instructors (>= 1 with role/bio/image), prerequisites (>= 1), and outcomes (>= 1).
- **Icon Mapping Coverage**: 100% of the 64 unique Lucide icons used across all 33 courses are imported and mapped in `CourseDetailView.tsx`.
- **Static Generation**: `npm run build` succeeds and pre-renders all 33 static dynamic course routes (46 pages total).

---

## 2. Logic Chain

1. **Acceptance Criteria**: The challenge mission explicitly stipulates: *"Verify every course has valid `slug`, `title`, `overview`, `stats` (>=3 items), `tools` (>=5 items), `curriculum` (>=3 modules), `instructors` (>=1), `prerequisites`, `outcomes`"*, and *"Verify `getCourseBySlug("non-existent-slug")` returns `undefined`"*.
2. **Failure Analysis**:
   - `advanced-communication` and `playwright-automation` have module count `2 < 3`, missing complete phases from the 6-week curriculum.
   - Non-existent slugs matching standard JavaScript object prototype properties return function references instead of `undefined`, failing invariant checks and creating a Denial of Service / 500 crash vector on dynamic route handling.
3. **Remediation Required**:
   - Add the missing 3rd module to `advanced-communication` (Phase 2, Weeks 3-4) and `playwright-automation` (Phase 1, Weeks 1-2) in both `curriculum` and `curriculumSection.modules`.
   - Update `COURSES_MAP` in `src/lib/coursesData.ts` to use `Map<string, CourseData>` or `Object.hasOwn(COURSES_MAP, slug) ? COURSES_MAP[slug] : undefined` or `Object.create(null)`.

---

## 3. Caveats

- All remaining 31 courses have 3 fully articulated modules and adhere 100% to schema definitions.
- The Next.js static build succeeds because SSG evaluates only the 33 valid slugs produced by `generateStaticParams()`; the prototype collision flaw affects dynamic runtime requests for non-existent prototype keys.

---

## 4. Conclusion

**Verdict: REQUEST_CHANGES**

Milestone 1 cannot be approved until:
1. `src/lib/coursesData.ts` is updated with the missing curriculum module for `advanced-communication` (Phase 2, Weeks 3-4) and `playwright-automation` (Phase 1, Weeks 1-2).
2. `getCourseBySlug()` is hardened against prototype property collision so that any invalid slug (including `toString`, `valueOf`, `constructor`, etc.) strictly returns `undefined`.

---

## 5. Verification Method

Execute the empirical challenge suite:
```bash
npx tsx scripts/test-m1-challenge.ts
```

**Expected Passing Criteria**:
- 24/24 test assertions pass.
- `advanced-communication` module count >= 3.
- `playwright-automation` module count >= 3.
- `getCourseBySlug("__proto__") === undefined`
- `getCourseBySlug("toString") === undefined`
- `getCourseBySlug("constructor") === undefined`
