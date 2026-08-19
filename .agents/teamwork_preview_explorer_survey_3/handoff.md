# Explorer 3 Investigation Report: Low-Severity Quality Fixes (R3.7 – R3.12) & Baseline Survey

## Summary
This investigation analyzed the target files for requirements **R3.7** through **R3.12** and verified baseline project build/lint scripts. All current files pass lint and build without errors. Concrete line-by-line modifications are specified below to implement the required accessibility, semantics, scrolling, and UX enhancements cleanly.

---

## 1. Observation

### Baseline Project Verification
- **Command**: `npm run lint` (`eslint`)
  - **Output**: Exited code 0, 0 errors, 0 warnings.
- **Command**: `npm run build` (`next build` with Turbopack)
  - **Output**: Exited code 0, compiled successfully, generated 46/46 static pages (`46 SSG/Static pages`).
- **Dependencies (`package.json`)**:
  - `next`: `16.2.11`
  - `react`: `19.2.4`
  - `tailwindcss`: `^4` (using `@tailwindcss/postcss` and `@theme inline` in `globals.css`)
  - `framer-motion`: `^12.42.2`
  - `lucide-react`: `^1.25.0`
  - `@studio-freight/lenis`: `^1.0.42`

---

### R3.7: `src/app/ceo-message/CeoClient.tsx`
- **File path**: `src/app/ceo-message/CeoClient.tsx`
- **Current line 83**:
  ```tsx
  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Dharmendra K. Pandey</h3>
  ```
- **Context**: The page's top heading at line 44 is `<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold ...">Message from ... <span ...>the CEO</span></h1>`. The profile card directly uses `<h3>`, skipping `<h2>` in the document outline.

---

### R3.8: `src/app/terms-of-service/TermsClient.tsx`
- **File path**: `src/app/terms-of-service/TermsClient.tsx`
- **Import status**: `import Link from 'next/link';` is already imported at line 6.
- **Current lines 73-76**:
  ```tsx
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">4. Program Enrollment & Payments</h2>
  <p className="text-gray-600 dark:text-gray-300 mb-8">
    Enrollment in SkillPedia programs is subject to acceptance by our admissions team. Payment for programs must be made in accordance with the terms specified during the enrollment process. For information regarding refunds, please refer to our separate Refund Policy.
  </p>
  ```
- **Context**: The phrase "our separate Refund Policy" is plain text without a link to `/refund-policy`. Other internal links in this component (e.g. line 95) use `className="text-blue-600 dark:text-blue-400 hover:underline"`.

---

### R3.9: `src/app/not-found.tsx`
- **File path**: `src/app/not-found.tsx`
- **Current line 64**:
  ```tsx
  <Compass className="w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} />
  ```
- **Current lines 126-133**:
  ```tsx
  {QUICK_LINKS.map((item, index) => {
    const Icon = item.icon;
    return (
      <Link
        key={index}
        href={item.href}
        className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-[#FF7A00]/50 dark:hover:border-[#FF7A00]/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
      >
  ```
- **Context**: The `animate-spin` class lacks `motion-reduce:animate-none`. The `QUICK_LINKS` map uses the array index `key={index}` despite `item.href` being unique, stable strings (`/programs`, `/apply`, `/team`, `/vision-mission`).

---

### R3.10: `src/app/global-error.tsx`
- **File path**: `src/app/global-error.tsx`
- **Current line 18**:
  ```tsx
  <body className="h-full min-h-screen bg-[#071340] text-white flex items-center justify-center px-6 py-12 font-sans antialiased select-none">
  ```
- **Context**: The `select-none` utility is applied to the root `<body>` tag, preventing user text selection across the entire critical error screen.

---

### R3.11: `src/app/globals.css`
- **File path**: `src/app/globals.css`
- **Current lines 398-401**:
  ```css
  html, body {
    max-width: 100%;
    overflow-x: hidden;
  }
  ```
- **Context**: `overflow-x: hidden` establishes a scroll container that can break `position: sticky` and interfere with Lenis smooth scroll and scroll-linked layout measurements.

---

### R3.12: `src/components/programs/CourseDetailView.tsx`
- **File path**: `src/components/programs/CourseDetailView.tsx`
- **Current line 293**:
  ```tsx
  {/* Curriculum Blueprint Section */}
  {modules.length > 0 && (
    <section id="curriculum" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
  ```
- **Context**: The hero CTA has `<Link href="#curriculum" ...>View Curriculum</Link>` (line 230). All other anchored sections across the application (`CTASection.tsx`, `CareerSection.tsx`, `ProjectsSection.tsx`, `RoadmapSection.tsx`, `WhoWeAreSection.tsx`, `WhySkillPediaSection.tsx`) use `scroll-mt-24` to prevent content from being covered by the sticky navbar.

---

## 2. Logic Chain

1. **R3.7 (CeoClient.tsx)**:
   - **Step 1**: Heading levels in accessible web pages should follow a hierarchical order (`h1` -> `h2` -> `h3`).
   - **Step 2**: The page header contains `<h1>Message from the CEO</h1>`. The prominent name card represents the primary sub-section header on the page.
   - **Step 3**: Changing `<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Dharmendra K. Pandey</h3>` to `<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Dharmendra K. Pandey</h2>` establishes valid heading hierarchy while preserving exact visual appearance via Tailwind utility classes.

2. **R3.8 (TermsClient.tsx)**:
   - **Step 1**: Section 4 mentions "For information regarding refunds, please refer to our separate Refund Policy."
   - **Step 2**: The site contains a dedicated `/refund-policy` route.
   - **Step 3**: `Link` is already imported from `next/link` at line 6.
   - **Step 4**: Wrapping `our separate Refund Policy` with `<Link href="/refund-policy" className="text-blue-600 dark:text-blue-400 hover:underline">our separate Refund Policy</Link>` enables immediate navigation and adheres to the styling conventions used throughout the legal documents.

3. **R3.9 (not-found.tsx)**:
   - **Step 1**: The spinning Compass icon in the 404 badge uses `animate-spin` with a 10s cycle.
   - **Step 2**: Users with vestibular motion disorders or `prefers-reduced-motion: reduce` should not be subjected to continuous rotation. Adding `motion-reduce:animate-none` disables spinning when reduced motion is preferred.
   - **Step 3**: `QUICK_LINKS` items have static, unique `href` values (`/programs`, `/apply`, `/team`, `/vision-mission`).
   - **Step 4**: Using `key={item.href}` instead of `key={index}` provides a stable identifier for React's reconciliation engine.

4. **R3.10 (global-error.tsx)**:
   - **Step 1**: `global-error.tsx` renders when an unhandled exception occurs in the root layout.
   - **Step 2**: `select-none` on `<body>` restricts user capability to select and copy text when diagnosing or reporting errors.
   - **Step 3**: Removing `select-none` from `body` className allows text selection without altering layout or styling.

5. **R3.11 (globals.css)**:
   - **Step 1**: In CSS specification, `overflow-x: hidden` sets `overflow-y` to `auto` or creates an overflow clipping boundary that prevents descendant `position: sticky` elements from functioning relative to the viewport.
   - **Step 2**: `overflow-x: clip` clips content outside the box without establishing a new scroll container.
   - **Step 3**: Changing `overflow-x: hidden` to `overflow-x: clip` on `html, body` eliminates horizontal overflow while ensuring `position: sticky` and scroll listeners function reliably.

6. **R3.12 (CourseDetailView.tsx)**:
   - **Step 1**: The hero contains a jump link to `#curriculum`.
   - **Step 2**: SkillPedia uses a fixed/sticky top navigation bar (~4-5rem high).
   - **Step 3**: Jumping directly to `<section id="curriculum">` without scroll margin causes the top of the section to be obscured by the navbar.
   - **Step 4**: Adding `scroll-mt-24` adds a 6rem (96px) scroll margin top, matching all other section IDs across the codebase and ensuring proper offset.

---

## 3. Caveats

- **No caveats**. All 6 items are self-contained, low-risk changes that do not alter application state, server components, or API contracts.
- In `TermsClient.tsx`, `Link` from `next/link` is already present at line 6, so no new imports are required.
- In `not-found.tsx`, removing `index` from `.map((item) => ...)` prevents unused parameter lint warnings.

---

## 4. Conclusion & Proposed Implementation Snippets

### R3.7: `src/app/ceo-message/CeoClient.tsx`
**Target Line**: 83
**Before**:
```tsx
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Dharmendra K. Pandey</h3>
                    <p className="text-[#FF7A00] font-medium">Founder & CEO</p>
                  </div>
```
**After**:
```tsx
                  <div className="p-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Dharmendra K. Pandey</h2>
                    <p className="text-[#FF7A00] font-medium">Founder & CEO</p>
                  </div>
```

---

### R3.8: `src/app/terms-of-service/TermsClient.tsx`
**Target Lines**: 73–76
**Before**:
```tsx
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">4. Program Enrollment & Payments</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Enrollment in SkillPedia programs is subject to acceptance by our admissions team. Payment for programs must be made in accordance with the terms specified during the enrollment process. For information regarding refunds, please refer to our separate Refund Policy.
            </p>
```
**After**:
```tsx
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">4. Program Enrollment & Payments</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Enrollment in SkillPedia programs is subject to acceptance by our admissions team. Payment for programs must be made in accordance with the terms specified during the enrollment process. For information regarding refunds, please refer to <Link href="/refund-policy" className="text-blue-600 dark:text-blue-400 hover:underline">our separate Refund Policy</Link>.
            </p>
```

---

### R3.9: `src/app/not-found.tsx`
**Target Line 64**:
**Before**:
```tsx
            <Compass className="w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} />
```
**After**:
```tsx
            <Compass className="w-4 h-4 animate-spin motion-reduce:animate-none" style={{ animationDuration: '10s' }} />
```

**Target Lines 126–133**:
**Before**:
```tsx
          {QUICK_LINKS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-[#FF7A00]/50 dark:hover:border-[#FF7A00]/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
              >
```
**After**:
```tsx
          {QUICK_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-[#FF7A00]/50 dark:hover:border-[#FF7A00]/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
              >
```

---

### R3.10: `src/app/global-error.tsx`
**Target Line 18**:
**Before**:
```tsx
      <body className="h-full min-h-screen bg-[#071340] text-white flex items-center justify-center px-6 py-12 font-sans antialiased select-none">
```
**After**:
```tsx
      <body className="h-full min-h-screen bg-[#071340] text-white flex items-center justify-center px-6 py-12 font-sans antialiased">
```

---

### R3.11: `src/app/globals.css`
**Target Lines 398–401**:
**Before**:
```css
  html, body {
    max-width: 100%;
    overflow-x: hidden;
  }
```
**After**:
```css
  html, body {
    max-width: 100%;
    overflow-x: clip;
  }
```

---

### R3.12: `src/components/programs/CourseDetailView.tsx`
**Target Line 293**:
**Before**:
```tsx
      {/* Curriculum Blueprint Section */}
      {modules.length > 0 && (
        <section id="curriculum" className="py-24">
          <div className="container mx-auto px-6 max-w-4xl">
```
**After**:
```tsx
      {/* Curriculum Blueprint Section */}
      {modules.length > 0 && (
        <section id="curriculum" className="py-24 scroll-mt-24">
          <div className="container mx-auto px-6 max-w-4xl">
```

---

## 5. Verification Method

To verify these changes after implementation:

1. **Lint Verification**:
   ```bash
   npm run lint
   ```
   *Expected output*: Clean exit code 0 with 0 errors and 0 warnings.

2. **Build Verification**:
   ```bash
   npm run build
   ```
   *Expected output*: Next.js build finishes with Turbopack and static generation of all 46 routes (`/`, `/ceo-message`, `/terms-of-service`, `/not-found`, `/programs/[slug]`, etc.).

3. **File Content Inspection**:
   - Verify `src/app/ceo-message/CeoClient.tsx` has `<h2>Dharmendra K. Pandey</h2>`.
   - Verify `src/app/terms-of-service/TermsClient.tsx` has `<Link href="/refund-policy" className="text-blue-600 dark:text-blue-400 hover:underline">our separate Refund Policy</Link>`.
   - Verify `src/app/not-found.tsx` has `motion-reduce:animate-none` on `<Compass>` and `key={item.href}` on `QUICK_LINKS.map`.
   - Verify `src/app/global-error.tsx` has no `select-none` in `<body>`.
   - Verify `src/app/globals.css` has `overflow-x: clip;` under `html, body`.
   - Verify `src/components/programs/CourseDetailView.tsx` has `scroll-mt-24` on `<section id="curriculum">`.
