# Category R2: ESLint Errors & Code Quality Survey (L-1 to L-15)

**Author:** Explorer 2 (ESLint & Code Quality Specialist)  
**Date:** 2026-08-18  
**Scope:** `src/` directory, `eslint.config.mjs`, `package.json`, `scripts/`, and all project modules  
**Target:** 0 ESLint errors, 0 ESLint warnings, 100% TypeScript type safety, Next.js 16 / React 19 compliance  

---

## 1. Executive Summary

A comprehensive automated and manual static analysis of the SkillPedia codebase was conducted using Next.js 16.2.11, React 19.2.4, ESLint 9 (`eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`), and TypeScript 5.

### Current Audit Status
- **Initial `npm run lint` Output**: 40 problems (18 errors, 22 warnings)
- **`src/` Only Lint Output**: 26 problems (11 errors, 15 warnings)
- **Non-src / Agent Artifacts**: 14 problems (7 errors, 7 warnings) due to unignored `.agents/**` and `scripts/**`
- **TypeScript `tsc --noEmit` Status**: 0 compilation errors (clean type build)
- **Target Post-Milestone 2**: **0 errors, 0 warnings** across all codebase files

---

## 2. Comprehensive Inventory of Issues (L-1 through L-15)

| Issue ID | Category | Severity | Target File(s) & Line Numbers | Primary Rule / Antipattern | Fix Complexity |
|:---|:---|:---|:---|:---|:---|
| **L-1** | React 19 Hooks | **Error** | `src/components/ui/PageTransition.tsx:54:5` | `react-hooks/set-state-in-effect` | Low |
| **L-2** | React 19 Hooks | **Error** | `src/components/ui/Preloader.tsx:21:7` | `react-hooks/set-state-in-effect` | Low |
| **L-3** | React 19 Hooks | **Warning/Smell** | `src/components/sections/HeroSection.tsx:30`<br>`src/components/sections/CTASection.tsx:11`<br>`src/components/sections/NavigationPortalView.tsx:83`<br>`src/components/ui/theme-toggle.tsx:13` | Suppressed `react-hooks/set-state-in-effect` via comments | Medium |
| **L-4** | JSX Formatting | **Error** | `src/app/ceo-message/CeoClient.tsx:110:51, 118:114, 118:224` | `react/no-unescaped-entities` (unescaped `'`) | Trivial |
| **L-5** | JSX Formatting | **Error** | `src/app/privacy-policy/PrivacyClient.tsx:46:27, 46:31, 46:33, 46:38, 46:43, 46:46` | `react/no-unescaped-entities` (unescaped `"`) | Trivial |
| **L-6** | Dead Code | **Warning** | `src/components/layout/Navbar.tsx:15:10` | `@typescript-eslint/no-unused-vars` (`activeSection`) | Low |
| **L-7** | Dead Code | **Warning** | `src/components/providers/SmoothScroller.tsx:8:9` | `@typescript-eslint/no-unused-vars` (`pathname`) | Low |
| **L-8** | Dead Code | **Warning** | `src/components/sections/NavigationPortalView.tsx:4, 9, 10, 78, 135` | `@typescript-eslint/no-unused-vars` (8 unused symbols) | Low |
| **L-9** | Dead Code | **Warning** | `src/components/sections/TeamSection.tsx:8:10, 9:10, 9:24, 9:36, 9:46` | `@typescript-eslint/no-unused-vars` (5 unused symbols) | Low |
| **L-10** | Configuration | **Error** | `eslint.config.mjs:9-15` | Missing `.agents/**` and `.next/**` ignores | Trivial |
| **L-11** | TypeScript Quality | **Error** | `scripts/test-m1-challenge.ts:3, 8, 18, 23, 64` | `@typescript-eslint/no-explicit-any`, `prefer-const` | Low |
| **L-12** | React Best Practice | **Code Smell** | `CourseDetailView.tsx:240, 270, 306, 361`<br>`CareerSection.tsx:47`<br>`StatsSection.tsx:63`<br>`WhySkillPediaSection.tsx:62, 117`<br>`RoadmapSection.tsx:99, 137`<br>`not-found.tsx:130`<br>`VisionMissionClient.tsx:141`<br>`Footer.tsx:61` | Index-as-key in `.map()` iterations | Medium |
| **L-13** | Next.js Image Optimization | **Warning** | `src/components/layout/Footer.tsx:32-38` | Missing `sizes` attribute on `<Image fill>` | Trivial |
| **L-14** | HTML / Navigation | **Code Smell** | `Footer.tsx:50`<br>`TermsClient.tsx:51`<br>`RefundClient.tsx:85` | External `<a>` tags missing `rel="noopener noreferrer"` and `target="_blank"` | Low |
| **L-15** | Accessibility / A11y | **Code Smell** | `Footer.tsx:84`<br>`ApplyClient.tsx:391, 400, 412, 421`<br>`theme-toggle.tsx:20` | Missing input `<label>`/`aria-label` and form associations | Low |

---

## 3. Deep Technical Analysis & Proposed Fixes

### Issue L-1: React 19 `react-hooks/set-state-in-effect` in `PageTransition.tsx`
- **Location:** `src/components/ui/PageTransition.tsx:54:5`
- **Verbatim Lint Error:** `Error: Calling setState synchronously within an effect can trigger cascading renders  react-hooks/set-state-in-effect`
- **Root Cause:** Next.js 16 and React 19 introduced strict rules against calling synchronous state setters in `useEffect` during component mount or dependency changes. `completeTransition()` updates `progress` synchronously (`setProgress(100)`).
- **Fix Recommendation:** Defer transition completion execution using `requestAnimationFrame` or `setTimeout(..., 0)` or conditional guard.

#### Before:
```tsx
// src/components/ui/PageTransition.tsx:52-55
useEffect(() => {
  // On mount or URL change, complete any active transition
  completeTransition();
}, [currentUrl, completeTransition]);
```

#### After:
```tsx
// src/components/ui/PageTransition.tsx:52-57
useEffect(() => {
  // On mount or URL change, defer completion of any active transition
  const timer = setTimeout(() => {
    completeTransition();
  }, 0);
  return () => clearTimeout(timer);
}, [currentUrl, completeTransition]);
```

---

### Issue L-2: React 19 `react-hooks/set-state-in-effect` in `Preloader.tsx`
- **Location:** `src/components/ui/Preloader.tsx:21:7`
- **Verbatim Lint Error:** `Error: Calling setState synchronously within an effect can trigger cascading renders  react-hooks/set-state-in-effect`
- **Root Cause:** When `sessionStorage.getItem('sp_visited')` returns true on mount, `setIsLoading(false)` is invoked synchronously inside the effect body.
- **Fix Recommendation:** Defer state dispatch or check in a microtask.

#### Before:
```tsx
// src/components/ui/Preloader.tsx:18-24
useEffect(() => {
  // Check if user already saw preloader this session
  if (typeof window !== 'undefined' && sessionStorage.getItem('sp_visited')) {
    setIsLoading(false);
    document.body.style.overflow = 'unset';
    return;
  }
```

#### After:
```tsx
// src/components/ui/Preloader.tsx:18-26
useEffect(() => {
  // Check if user already saw preloader this session
  if (typeof window !== 'undefined' && sessionStorage.getItem('sp_visited')) {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
    }, 0);
    return () => clearTimeout(timer);
  }
```

---

### Issue L-3: Suppressed `react-hooks/set-state-in-effect` ESLint Disables
- **Locations:**
  - `src/components/sections/HeroSection.tsx:30`
  - `src/components/sections/CTASection.tsx:11`
  - `src/components/sections/NavigationPortalView.tsx:83`
  - `src/components/ui/theme-toggle.tsx:13`
- **Root Cause:** Developers used `// eslint-disable-next-line react-hooks/set-state-in-effect` to bypass linting when generating randomized background particle arrays or setting `mounted = true`.
- **Fix Recommendation:** 
  1. For particle generation: Initialize with static deterministic seeds, CSS keyframes, or lazy state initializer (`useState(() => createParticles())`).
  2. For `ThemeToggle.tsx`: Defer `setMounted(true)` with `requestAnimationFrame` or `setTimeout` and remove the comment directive.

#### Example Fix (`HeroSection.tsx`):
```tsx
// Deterministic particle generator or lazy initializer
const [particles] = useState(() =>
  Array.from({ length: 20 }).map((_, i) => ({
    width: ((i * 7) % 10) + 4 + 'px',
    height: ((i * 7) % 10) + 4 + 'px',
    left: ((i * 19) % 100) + '%',
    top: ((i * 23) % 100) + '%',
    animationDelay: `${(i * 0.3) % 5}s`,
    animationDuration: `${((i * 1.5) % 10) + 10}s`,
  }))
);
```

---

### Issue L-4: Unescaped Entities in `CeoClient.tsx`
- **Location:** `src/app/ceo-message/CeoClient.tsx:110, 118`
- **Verbatim Lint Errors:**
  - `110:51  error  `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`  react/no-unescaped-entities`
  - `118:114 error  `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`  react/no-unescaped-entities`
  - `118:224 error  `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`  react/no-unescaped-entities`
- **Fix Recommendation:** Replace `'` with `&apos;` in:
  - Line 110: `We don't just teach you...` &rarr; `We don&apos;t just teach you...`
  - Line 118: `you aren't just taking...` &rarr; `you aren&apos;t just taking...`
  - Line 118: `Let's build the future together.` &rarr; `Let&apos;s build the future together.`

---

### Issue L-5: Unescaped Entities in `PrivacyClient.tsx`
- **Location:** `src/app/privacy-policy/PrivacyClient.tsx:46`
- **Verbatim Lint Errors:**
  - `46:27 error  `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;`  react/no-unescaped-entities` (6 occurrences)
- **Fix Recommendation:** Replace literal `"` in JSX text with `&quot;`:
  ```tsx
  <p className="lead text-xl text-gray-700 dark:text-gray-300 mb-10">
    SkillPedia (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by SkillPedia when you visit our website or enroll in our programs.
  </p>
  ```

---

### Issue L-6: Unused State & Observers in `Navbar.tsx`
- **Location:** `src/components/layout/Navbar.tsx:15:10`
- **Verbatim Lint Warning:** `'activeSection' is assigned a value but never used  @typescript-eslint/no-unused-vars`
- **Root Cause:** `const [activeSection, setActiveSection] = useState('');` and its `IntersectionObserver` update state on scroll, but `activeSection` is never referenced in JSX (active indicator exclusively checks `pathname === link.href`).
- **Fix Recommendation:** Remove `activeSection`, `setActiveSection`, and the redundant `IntersectionObserver` effect (lines 15, 33-52).

---

### Issue L-7: Unused Variables in `SmoothScroller.tsx`
- **Location:** `src/components/providers/SmoothScroller.tsx:8:9`
- **Verbatim Lint Warning:** `'pathname' is assigned a value but never used  @typescript-eslint/no-unused-vars`
- **Root Cause:** `const pathname = usePathname();` was imported but not connected to Lenis scroll-to-top handler.
- **Fix Recommendation:** Either use `pathname` in a scroll reset effect:
  ```tsx
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [pathname]);
  ```
  Or remove `const pathname = usePathname();` and the unused import `usePathname`.

---

### Issue L-8: Unused Imports and Variables in `NavigationPortalView.tsx`
- **Location:** `src/components/sections/NavigationPortalView.tsx:4, 9, 10, 78, 135`
- **Verbatim Lint Warnings:**
  - `4:8   warning  'Image' is defined but never used                 @typescript-eslint/no-unused-vars`
  - `9:24  warning  'Plus' is defined but never used                  @typescript-eslint/no-unused-vars`
  - `10:10 warning  'FaLinkedinIn' is defined but never used          @typescript-eslint/no-unused-vars`
  - `10:24 warning  'FaXTwitter' is defined but never used            @typescript-eslint/no-unused-vars`
  - `10:36 warning  'FaGithub' is defined but never used              @typescript-eslint/no-unused-vars`
  - `10:46 warning  'FaInstagram' is defined but never used           @typescript-eslint/no-unused-vars`
  - `78:9  warning  'bgScale' is assigned a value but never used      @typescript-eslint/no-unused-vars`
  - `135:9 warning  'handleClose' is assigned a value but never used  @typescript-eslint/no-unused-vars`
- **Fix Recommendation:** Remove all 8 unused imports, variables, and functions.

---

### Issue L-9: Unused Imports in `TeamSection.tsx`
- **Location:** `src/components/sections/TeamSection.tsx:8, 9`
- **Verbatim Lint Warnings:**
  - `8:10 warning  'ArrowLeft' is defined but never used     @typescript-eslint/no-unused-vars`
  - `9:10 warning  'FaLinkedinIn' is defined but never used  @typescript-eslint/no-unused-vars`
  - `9:24 warning  'FaXTwitter' is defined but never used    @typescript-eslint/no-unused-vars`
  - `9:36 warning  'FaGithub' is defined but never used      @typescript-eslint/no-unused-vars`
  - `9:46 warning  'FaInstagram' is defined but never used   @typescript-eslint/no-unused-vars`
- **Fix Recommendation:** Remove `ArrowLeft` from `lucide-react` imports and delete the `react-icons/fa6` import line entirely.

---

### Issue L-10: ESLint Ignore Configuration in `eslint.config.mjs`
- **Location:** `eslint.config.mjs:9-15`
- **Root Cause:** `globalIgnores` only contains `.next/**`, `out/**`, `build/**`, and `next-env.d.ts`. Agent workspace directories (`.agents/**`) and build/verification scripts (`scripts/**`) are scanned, triggering false positives during global `npm run lint`.
- **Fix Recommendation:**
  ```javascript
  // eslint.config.mjs
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".agents/**",
    "scripts/**",
    "*.py",
  ]),
  ```

---

### Issue L-11: TypeScript Cleanliness in `scripts/test-m1-challenge.ts`
- **Location:** `scripts/test-m1-challenge.ts:3, 8, 18, 23, 64`
- **Verbatim Lint Errors:**
  - `18:13 error  Unexpected any. Specify a different type                 @typescript-eslint/no-explicit-any`
  - `23:80 error  Unexpected any. Specify a different type                 @typescript-eslint/no-explicit-any`
  - `64:7  error  'schemaErrors' is never reassigned. Use 'const' instead  prefer-const`
  - `3:3   warning 'COURSES_MAP' is defined but never used`
  - `8:8   warning 'CourseData' is defined but never used`
- **Fix Recommendation:** Clean unused imports, replace `any` with `unknown`, and change `let schemaErrors: string[] = []` to `const schemaErrors: string[] = []`.

---

### Issue L-12: Index-as-Key Antipatterns in `.map()` Calls
- **Locations:**
  - `CourseDetailView.tsx:240` &rarr; `stats.map((stat) => <div key={stat.label}>`
  - `CourseDetailView.tsx:270` &rarr; `tools.map((tool) => <motion.div key={tool.name}>`
  - `CourseDetailView.tsx:306` &rarr; `modules.map((module) => <motion.div key={module.id || module.title}>`
  - `CourseDetailView.tsx:361` &rarr; `instructors.map((inst) => <motion.div key={inst.name}>`
  - `CareerSection.tsx:47` &rarr; `CAREER_MILESTONES.map((milestone) => <motion.div key={milestone.id}>`
  - `StatsSection.tsx:63` &rarr; `STATS.map((stat) => <motion.div key={stat.id || stat.label}>`
  - `WhySkillPediaSection.tsx:62, 117` &rarr; `COMPARISON_*.map((item) => <motion.li key={item.label}>`
  - `RoadmapSection.tsx:99, 137` &rarr; `month.topics.map((topic) => <motion.li key={topic}>`
  - `not-found.tsx:130` &rarr; `QUICK_LINKS.map((item) => <Link key={item.href}>`
  - `VisionMissionClient.tsx:141` &rarr; `CORE_VALUES.map((value) => <motion.div key={value.title}>`
  - `Footer.tsx:61` &rarr; `links.map((link) => <li key={link.href}>`
- **Rationale:** Using array indices as React keys causes subtle state corruption and inefficient DOM reconciliation when items are dynamically filtered or re-ordered.

---

### Issue L-13: Next.js `<Image>` Attributes (`sizes` & `priority`)
- **Location:** `src/components/layout/Footer.tsx:32-38`
- **Issue:** `<Image src="/logo.svg" alt="SkillPedia Logo" fill className="object-contain object-left" />` uses `fill` without `sizes`.
- **Fix:** Add `sizes="192px"`:
  ```tsx
  <Image 
    src="/logo.svg" 
    alt="SkillPedia Logo" 
    fill
    sizes="192px"
    className="object-contain object-left"
  />
  ```

---

### Issue L-14: Raw `<a>` Tags Security & Next.js `<Link>` Best Practices
- **Locations:**
  - `src/components/layout/Footer.tsx:50`
  - `src/app/terms-of-service/TermsClient.tsx:51`
  - `src/app/refund-policy/RefundClient.tsx:85`
- **Issue:** External links rendered with `<a>` lack `target="_blank"` and `rel="noopener noreferrer"`, creating potential tab-nabbing security risks.
- **Fix:** Add `target="_blank" rel="noopener noreferrer"` to all external anchor tags.

---

### Issue L-15: Accessibility & Form Label Associations
- **Locations:**
  - `src/components/layout/Footer.tsx:84` (Newsletter input missing `aria-label` or `<label>`)
  - `src/app/apply/ApplyClient.tsx:391, 400, 412, 421` (Address inputs missing `aria-label` or `<label>`)
  - `src/components/ui/theme-toggle.tsx:20` (Placeholder button missing explicit `aria-label`)
- **Fix:** Add explicit `aria-label` or `<label htmlFor="...">` attributes across all form inputs and interactive triggers.

---

## 4. Verification & Validation Protocol

To independently verify resolution of Category R2:
1. Run `npm run lint` &rarr; Must exit with code `0` and print `0 problems (0 errors, 0 warnings)`.
2. Run `npx tsc --noEmit` &rarr; Must exit with code `0` and 0 errors.
3. Run `npm run build` &rarr; Next.js 16 production build must generate all 33 static pages successfully.

---
*Report compiled by Explorer 2.*
