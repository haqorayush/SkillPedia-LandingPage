# Original User Request

## Initial Request — 2026-08-19T02:44:50Z

Fix all remaining code quality, accessibility, performance, and UX issues identified in a comprehensive audit of a Next.js 16 landing page for SkillPedia (an ed-tech platform). The codebase currently passes lint and build cleanly — all fixes must preserve that.

Working directory: /Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia
Integrity mode: development

## Requirements

### R1. Fix Critical SSR Hydration Issue in Preloader

File: `src/components/ui/Preloader.tsx`

The `useState` initializer reads `sessionStorage` at line 14-23, producing different values on server vs client (hydration mismatch on repeat visits). Fix by always initializing `isLoading` to `true`, then checking `sessionStorage` in a mount-only `useEffect` to skip the preloader if already visited. Also change `pointer-events-none` to `pointer-events-auto` on the overlay container, and add `role="status"` and `aria-live="polite"`.

### R2. Fix Medium Accessibility & Performance Issues (8 items)

All changes must preserve existing visual appearance and functionality.

1. **SmoothScroller.tsx** (`src/components/providers/SmoothScroller.tsx`): Check `window.matchMedia('(prefers-reduced-motion: reduce)').matches` before initializing Lenis. If the user prefers reduced motion, skip Lenis entirely and just render children with native scroll.

2. **PageTransition.tsx** (`src/components/ui/PageTransition.tsx`): (a) Store the cleanup function returned by `startTransition()` and call it on effect cleanup to prevent orphaned intervals. (b) In the click handler, skip starting transitions for same-page hash links (href containing '#' where the path portion matches current pathname). (c) Change the fade overlay from `bg-[#071340]/20` to `bg-black/10 dark:bg-[#071340]/20`.

3. **CustomCursor.tsx** (`src/components/ui/CustomCursor.tsx`): (a) Replace `getComputedStyle(target).cursor === 'pointer'` with `target.closest('a, button, [role="button"], input, select, textarea, [tabindex]') !== null` to avoid layout thrashing. (b) Add `mouseleave`/`mouseenter` listeners on `document.documentElement` to hide/show the cursor when the pointer leaves the browser window.

4. **TestimonialsSection.tsx** (`src/components/sections/TestimonialsSection.tsx`): (a) Make testimonial cards keyboard-accessible: add `role="button"`, `tabIndex={0}`, and `onKeyDown` (Enter/Space triggers onClick). (b) Add dialog semantics to the review detail modal: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and an Escape key listener to close it. (c) Add `role="img"` to star-rating divs that have `aria-label`.

5. **StatsSection.tsx** (`src/components/sections/StatsSection.tsx`): Add `<h2 className="sr-only">Key Program Statistics</h2>` as the first child inside the section element.

6. **ApplyClient.tsx** (`src/app/apply/ApplyClient.tsx`): For all `<select>` elements with `appearance-none`, add a wrapper with a custom SVG chevron indicator so dropdowns are visually distinguishable from text inputs. Also fix the "Full Address" label to use `htmlFor="street"`.

### R3. Fix Low-Severity Code Quality Issues (19 items)

1. **SmoothScroller.tsx**: The import path `@studio-freight/lenis` is deprecated. Check `package.json` — if the installed package is `@studio-freight/lenis`, keep the import but add a `// TODO: migrate to 'lenis' package` comment. If `lenis` is installed, update the import.

2. **HeroSection.tsx** (`src/components/sections/HeroSection.tsx`): Add `aria-hidden="true"` to the scroll indicator SVG. For particle `key={i}`, add a comment noting these are static decorative elements that never reorder.

3. **CTASection.tsx** (`src/components/sections/CTASection.tsx`): Same particle key comment as HeroSection.

4. **CareerSection.tsx** (`src/components/sections/CareerSection.tsx`): Remove the redundant identity `useTransform(scrollYProgress, [0, 1], [0, 1])` and use `scrollYProgress` directly wherever `scaleProgress` was used.

5. **StatsSection.tsx**: Change `key={index}` to `key={stat.id}` in the stats map.

6. **NavigationPortalView.tsx** (`src/components/sections/NavigationPortalView.tsx`): Remove unused `statValue` and `statLabel` from `PortalContent` interface and `PORTAL_DATA`. Remove unused `onClose` prop from component signature.

7. **CeoClient.tsx** (`src/app/ceo-message/CeoClient.tsx`): Change the `<h3>` for "Dharmendra K. Pandey" to `<h2>`, keeping same visual styling.

8. **TermsClient.tsx** (`src/app/terms-of-service/TermsClient.tsx`): Wrap the plain-text "our separate Refund Policy" mention in a `<Link href="/refund-policy">` with appropriate styling. Import Link from 'next/link' if needed.

9. **not-found.tsx** (`src/app/not-found.tsx`): Add `motion-reduce:animate-none` to spinning Compass icon. Change `key={index}` to `key={item.href}` in QUICK_LINKS map.

10. **global-error.tsx** (`src/app/global-error.tsx`): Remove `select-none` from body className.

11. **globals.css** (`src/app/globals.css`): Change `overflow-x: hidden` on html/body to `overflow-x: clip`.

12. **CourseDetailView.tsx** (`src/components/programs/CourseDetailView.tsx`): Add `scroll-mt-24` class to `<section id="curriculum">`.

## Acceptance Criteria

### Build & Lint
- [ ] `npm run lint` produces 0 errors and 0 warnings
- [ ] `npm run build` succeeds and generates all 46 static pages

### Hydration (C-1)
- [ ] `Preloader.tsx` initializes `isLoading` unconditionally as `true` (no `sessionStorage` in `useState` initializer)
- [ ] A separate mount-only `useEffect` checks `sessionStorage` and skips the preloader if already visited

### Accessibility (M-2 through M-14)
- [ ] `SmoothScroller.tsx` checks `prefers-reduced-motion` before initializing Lenis
- [ ] `TestimonialsSection.tsx` testimonial cards have `role="button"`, `tabIndex={0}`, and keyboard event handlers
- [ ] `TestimonialsSection.tsx` modal has `role="dialog"`, `aria-modal="true"`, and Escape key support
- [ ] `StatsSection.tsx` has a screen-reader-only heading
- [ ] `ApplyClient.tsx` select dropdowns have visible chevron indicators

### Performance (M-8, M-9, M-10)
- [ ] `PageTransition.tsx` properly cleans up the interval from `startTransition`
- [ ] `PageTransition.tsx` does not trigger transitions for same-page hash links
- [ ] `CustomCursor.tsx` does not call `getComputedStyle` in mouseover handlers

### Code Quality (R3)
- [ ] No unused props, interfaces, or variables introduced by the changes
- [ ] All existing visual styling and functionality is preserved
