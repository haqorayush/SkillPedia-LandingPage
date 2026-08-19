# Comprehensive Theme (T-1 to T-14) & Responsive UI/UX (U-1 to U-11) Survey Report

**Author**: Explorer 1 (Theme & Responsive UI/UX Specialist)  
**Project**: SkillPedia Next.js 16 Refactor  
**Date**: 2026-08-18  
**Scope**: Category R1 (Dark / Light Mode Theme Fixes: T-1 to T-14) & Category R3 (Responsive UI/UX & Performance: U-1 to U-11)

---

## Executive Summary

A comprehensive, line-by-line inspection of the SkillPedia Next.js 16 / React 19 application was performed across all 34 core UI components, layout containers, section views, dynamic course detail routes, and CSS variable architectures. 

The investigation verified that while Tailwind CSS v4 and `next-themes` provide a strong foundational infrastructure, multiple high-impact issues exist:
1. **Critical Theme Invisibility Bug**: In `src/components/sections/TeamSection.tsx` (Line 361), Senior Leadership Card (Ayush Dwivedy) uses hardcoded `text-white` with no dark variant, rendering the title/name completely invisible against white/light backgrounds in light mode.
2. **Forced Dark Mode Overlay**: In `src/components/sections/NavigationPortalView.tsx` (Line 146), the navigation portal at `/about` is hardcoded to dark navy (`bg-[#0B1F5E] dark:bg-[#071340] text-white`) without light mode support.
3. **Syntax and Duplicate Class Errors**: In `TeamSection.tsx` (Lines 141, 160) and `Footer.tsx` (Lines 86, 102), duplicate/conflicting Tailwind classes exist (e.g. `dark:from-white dark:from-[#071340]`, `dark:border-white/10 dark:border-blue-500/20`, duplicate `text-gray-900 dark:text-white`).
4. **Mobile Touch Target Violations (<44px)**: Multiple interactive controls (Navbar hamburger button, Footer social icons, Testimonials play/pause and modal close buttons, Projects filter tabs) have bounding boxes below the standard 44×44px touch target.
5. **iOS Auto-Zoom Risk**: Form input font sizes in `ApplyClient.tsx` and `Footer.tsx` using `text-sm` (14px) trigger automatic iOS viewport zoom on mobile focus.

Below is the detailed forensic catalog and concrete fix recommendations for all 25 items across Categories R1 and R3.

---

## 1. Category R1: Dark / Light Mode Theme Survey (T-1 through T-14)

### T-1: Navbar Theme Tokens & Mobile Drawer Contrast
- **File**: `src/components/layout/Navbar.tsx`
- **Lines**: 68–72, 104–108, 141–166, 178–198
- **Observations**:
  - Scrolled navbar uses `bg-white/80 dark:bg-[#0B1F5E]/80 backdrop-blur-xl border-b border-gray-200 dark:border-blue-500/20`.
  - Mobile menu drawer (Line 178) uses `bg-white/95 dark:bg-[#0B1F5E]/95 backdrop-blur-xl border-b border-gray-200 dark:border-blue-500/20`.
  - Active links correctly render `text-blue-600 dark:text-white` with an animated `#FF7A00` indicator.
  - Mobile hamburger button (Line 144) uses `p-2 relative text-gray-700 dark:text-white`.
- **Issues**:
  - Hardcoded `#0B1F5E` instead of semantic CSS variables / tokens (`dark:bg-navy/80` or `dark:bg-background/80`).
  - Mobile drawer border uses `dark:border-blue-500/20`, inconsistent with root layout border tokens.
- **Recommended Fix**:
  ```tsx
  // Scrolled header background
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform-gpu will-change-transform ${
    isScrolled
      ? 'bg-white/85 dark:bg-[#071340]/85 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-lg dark:shadow-[0_4px_20px_rgba(7,19,64,0.5)] py-4'
      : 'bg-transparent border-b border-transparent py-6'
  }`}
  
  // Mobile drawer overlay
  className="fixed inset-0 top-0 left-0 right-0 bottom-0 bg-white/95 dark:bg-[#071340]/95 backdrop-blur-2xl border-b border-gray-200 dark:border-white/10 md:hidden flex flex-col pt-24 pb-6 px-4"
  ```

---

### T-2: Footer Inconsistencies, Duplicate Classes & Low-Contrast Elements
- **File**: `src/components/layout/Footer.tsx`
- **Lines**: 16, 50, 86, 91, 102–108
- **Observations**:
  - Line 50: Social icon links use `bg-white/5 dark:bg-white/10 text-gray-500 dark:text-gray-300 hover:bg-[#FF7A00] dark:hover:bg-[#FF7A00] hover:text-white dark:text-white`.
  - Line 86: Newsletter `<input>` class has duplicate and contradictory rules:
    `className="w-full bg-white/5 dark:bg-[#0B1F5E]/80 border border-gray-200 dark:border-white/10 dark:border-blue-500/20 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-white dark:text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-[#3B82F6] dark:focus:border-blue-400 transition-colors"`
  - Line 91: Newsletter submit button uses `text-gray-900 dark:text-white` on `#FF7A00` orange button.
  - Line 102: Bottom copyright bar contains duplicate `dark:border-white/10 dark:border-blue-500/20`.
- **Issues**:
  - `bg-white/5` in light mode provides 0 contrast on `bg-gray-50`.
  - `text-gray-900` on an orange `#FF7A00` button in light mode violates brand guidelines and contrast standards.
  - CSS clutter and conflicting border rules.
- **Recommended Fix**:
  ```tsx
  // Social links (Line 50):
  <a key={link.label} href={link.href} className="w-11 h-11 rounded-full bg-gray-200/80 dark:bg-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#FF7A00] dark:hover:bg-[#FF7A00] hover:text-white dark:hover:text-white transition-all duration-300" aria-label={link.label}>
    {SOCIAL_ICONS[link.label] || null}
  </a>

  // Newsletter input (Line 86):
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full bg-white dark:bg-[#0B1F5E]/80 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-base md:text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:outline-none focus:border-[#3B82F6] dark:focus:border-blue-400 transition-colors"
    required
  />

  // Newsletter button (Line 91):
  <button
    type="submit"
    className="absolute right-1 top-1 bottom-1 bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white rounded-md px-4 text-sm font-semibold transition-colors"
  >
    Join
  </button>
  ```

---

### T-3: TeamSection Hierarchy, Light Mode Text Invisibility & Syntax Errors
- **File**: `src/components/sections/TeamSection.tsx`
- **Lines**: 141, 160, 285, 339, 361, 391, 399, 444, 451
- **Observations**:
  - **CRITICAL INVISIBILITY DEFECT (Line 361)**: `SeniorCard` member name is hardcoded to `text-white`:
    `<h3 className="text-xl sm:text-2xl font-[family-name:var(--font-heading-display)] font-bold text-white mb-1">`
    In light mode, Ayush Dwivedy's name renders pure white on a white/light-gray background!
  - Line 141 root wrapper contains duplicate conflicting class: `dark:from-white dark:from-[#071340]`.
  - Line 160 badge contains duplicate conflicting class: `dark:bg-gray-200 dark:bg-white/10`.
  - Lines 399 & 451: Image containers in `DepartmentCard` and `SpecialistCard` use `ring-white/15` and `ring-white/10` without light mode contrast rings.
- **Recommended Fix**:
  ```tsx
  // Fix Line 361:
  <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-heading-display)] font-bold text-gray-900 dark:text-white mb-1">
    {member.name}
  </h3>

  // Fix Line 141:
  className="relative min-h-screen w-full animated-gradient-mesh bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-[#071340] dark:via-[#0A194A] dark:to-[#071340] text-gray-900 dark:text-white overflow-x-hidden font-[family-name:var(--font-body)]"

  // Fix Line 160:
  className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-white/10 backdrop-blur-xl border border-blue-200 dark:border-white/20 text-blue-900 dark:text-white/90 text-sm font-medium mb-8"

  // Fix Lines 399 & 451:
  className="relative w-24 h-24 sm:w-26 sm:h-26 rounded-2xl overflow-hidden ring-2 ring-gray-200 dark:ring-white/15 group-hover:ring-[#FF7A00]/30 transition-all duration-500 shrink-0"
  ```

---

### T-4: HeroSection Light Mode Particles & Scroll Indicator Contrast
- **File**: `src/components/sections/HeroSection.tsx` & `src/app/globals.css`
- **Lines**: `HeroSection.tsx:48, 56, 83, 129, 151`; `globals.css:172–203`
- **Observations**:
  - Line 151: Scroll indicator uses `text-white/50`, making the word "SCROLL" and the chevron indicator almost invisible on the light mode white/blue background.
  - `globals.css` (Line 172) defines `.dark .animated-gradient-mesh` with an active keyframe shift pseudo-element, but light mode `.animated-gradient-mesh` has no keyframe background mesh.
- **Recommended Fix**:
  ```tsx
  // HeroSection.tsx Line 151:
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2, duration: 1 }}
    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 dark:text-white/50"
  >
    <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
    ...
  </motion.div>
  ```

---

### T-5: NavigationPortalView Forced Dark Navy on `/about` Page
- **File**: `src/components/sections/NavigationPortalView.tsx`
- **Lines**: 146, 169–170, 227–234, 261, 269
- **Observations**:
  - `src/app/about/page.tsx` renders `<NavigationPortalView initialSection="OUR TEAM" />`.
  - Line 146: Root container has `className="... bg-[#0B1F5E] dark:bg-[#071340] text-white ..."`.
  - The entire `/about` route is permanently forced into dark mode even when user selects light mode.
- **Recommended Fix**:
  ```tsx
  // NavigationPortalView.tsx Line 146:
  className="relative w-full min-h-screen h-screen overflow-hidden animated-gradient-mesh bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-[#0B1F5E] dark:to-[#071340] text-gray-900 dark:text-white flex flex-col justify-between select-none font-[family-name:var(--font-body)]"
  
  // Navigation items (Line 230):
  isActive
    ? "text-[#FF7A00] dark:text-[#A3E635] drop-shadow-[0_0_25px_rgba(255,122,0,0.35)] dark:drop-shadow-[0_0_25px_rgba(163,230,53,0.45)]"
    : "text-gray-700 hover:text-gray-900 dark:text-white/80 dark:hover:text-white"

  // Description text (Line 261):
  <p className="text-gray-600 dark:text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed font-normal tracking-wide text-pretty">
  ```

---

### T-6: Apply Form Cross-Browser Select Option & Disclaimer Contrast
- **File**: `src/app/apply/ApplyClient.tsx`
- **Lines**: 220–228, 254–261, 316–323, 333–339, 352–358, 367–373, 455–464, 473–479, 525–527
- **Observations**:
  - In dark mode on Chromium and Gecko browsers, native `<option>` tags inside dark styled `<select>` elements can default to light popovers with white text, causing unreadable dropdown items.
  - Line 525: Disclaimer text `text-xs text-gray-500` is too dim in dark mode (contrast ratio < 3:1).
- **Recommended Fix**:
  ```tsx
  // Add styling to all select options:
  <option className="bg-white dark:bg-[#0B1F5E] text-gray-900 dark:text-white" value="...">
    ...
  </option>

  // Line 525:
  <p className="text-xs text-gray-500 dark:text-gray-400 text-center pt-4">
    By submitting this form, you agree to our <Link href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link> and <Link href="/terms-of-service" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</Link>.
  </p>
  ```

---

### T-7: Testimonials Section Full Review Modal Contrast & Pause Button
- **File**: `src/components/sections/TestimonialsSection.tsx`
- **Lines**: 11, 44, 83–84, 97, 105, 109, 119
- **Observations**:
  - Testimonial cards use `bg-white/60 dark:bg-[#0B1F5E]/80 backdrop-blur-md border border-white/40 dark:border-blue-500/20`.
  - Pause button (Line 44) uses `bg-white dark:bg-[#0B1F5E] text-gray-500 dark:text-gray-300 border border-gray-200 dark:border-white/10`.
  - Modal (Line 105) uses `bg-white dark:bg-[#0B1F5E] border border-gray-100 dark:border-blue-500/20` with `text-gray-800 dark:text-gray-100`.
- **Assessment**:
  - Surface contrast is good.
  - Ensure side marquee fade masks (Lines 83–84) use `from-gray-50 dark:from-[#071340]` matching section background.

---

### T-8: FAQ Section Input Surface & Accordion Highlight State
- **File**: `src/components/sections/FAQSection.tsx`
- **Lines**: 22, 41, 56–60, 69
- **Observations**:
  - Search input (Line 41): `bg-gray-50 dark:bg-[#0B1F5E]/60 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:bg-white dark:focus:bg-[#0B1F5E]`.
  - Accordion items (Line 57): `text-gray-800 dark:text-gray-100 hover:text-[#3B82F6] dark:hover:text-blue-400 data-[state=open]:text-[#3B82F6] dark:data-[state=open]:text-blue-400`.
  - Answers (Line 60): `text-gray-600 dark:text-gray-300`.
- **Assessment**:
  - High contrast in both light and dark modes.

---

### T-9: ProgramsList Filter Pills & Hover Radial Glows
- **File**: `src/app/programs/ProgramsList.tsx`
- **Lines**: 51, 64–87, 109, 114, 123, 141, 153, 177, 186
- **Observations**:
  - Pill tabs container uses `bg-gray-100/80 dark:bg-white/5 border border-gray-200/80 dark:border-white/10`.
  - Active tab uses `#FF7A00` pill with `text-white shadow-md`.
  - Inactive count badge uses `bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-400`.
  - Course card tags (Line 177) use `bg-gray-50 border-gray-200 text-gray-700 dark:bg-white/5 dark:border-white/10 dark:text-gray-300`.
  - Card titles highlight to `group-hover:text-blue-600 dark:group-hover:text-[#A3E635]`.
- **Assessment**:
  - Fully compliant with theme system tokens.

---

### T-10: ProjectsSection Category Tabs & Card Border Definition
- **File**: `src/components/sections/ProjectsSection.tsx`
- **Lines**: 48, 51–60, 86–102
- **Observations**:
  - ProjectCard (Line 48) has `border-x-transparent border-b-transparent dark:border-x-white/10 dark:border-b-white/10`.
  - In light mode, the absence of side/bottom borders gives weak card boundaries against `bg-gray-50`.
- **Recommended Fix**:
  ```tsx
  className={`relative bg-white dark:bg-[#0B1F5E] rounded-2xl p-6 flex flex-col gap-4 border-t-4 border-x border-b border-gray-200/80 dark:border-x-white/10 dark:border-b-white/10 shadow-sm hover:shadow-xl dark:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-shadow duration-300`}
  ```

---

### T-11: StatsSection Zebra-Striping & Counter Divider Lines
- **File**: `src/components/sections/StatsSection.tsx`
- **Lines**: 55, 60, 70, 73
- **Observations**:
  - Background is `bg-gray-50 dark:bg-[#071340] border-y border-gray-100 dark:border-white/5`.
  - Dividers use `divide-gray-200 dark:divide-white/10`.
  - Value is `text-gray-900 dark:text-white`, label is `text-gray-600 dark:text-blue-200`.
- **Assessment**:
  - Excellent contrast and seamless flow between adjacent sections.

---

### T-12: WhySkillPedia & WhoWeAre Card Surface Elevations
- **Files**: `src/components/sections/WhySkillPediaSection.tsx` & `src/components/sections/WhoWeAreSection.tsx`
- **Observations**:
  - WhySkillPedia: Traditional column uses `bg-gray-50 dark:bg-[#0B1F5E]/40 border-gray-200 dark:border-white/10`, SkillPedia column uses `bg-gradient-to-br from-blue-50 to-orange-50 dark:from-[#0B1F5E] dark:to-[#071340]`.
  - WhoWeAre: Tilt cards use `bg-white/70 dark:bg-[#0B1F5E]/90 border-white/40 dark:border-blue-500/20 text-[#0B1F5E] dark:text-white`.
- **Assessment**:
  - High aesthetic clarity and clear visual hierarchy in both themes.

---

### T-13: Dynamic Course Detail View Theme Consistency
- **File**: `src/components/programs/CourseDetailView.tsx`
- **Lines**: 164, 170, 257, 276, 317, 349, 366, 391
- **Observations**:
  - Page wrapper: `bg-white dark:bg-[#071340]`.
  - Tools section: `bg-gray-50 dark:bg-[#0B1F5E]/50`, Tool cards: `bg-white dark:bg-white/5`.
  - Curriculum module cards: `bg-white dark:bg-[#0B1F5E] border-gray-100 dark:border-white/5`.
  - Instructor cards: `bg-white dark:bg-[#0B1F5E]`.
  - Bottom CTA: `bg-indigo-600 dark:bg-[#0B1F5E] text-white`.
- **Assessment**:
  - Consistent across all 33 static course routes.

---

### T-14: Static Legal, CEO, Vision & Error Pages Theme Parity
- **Files**: `PrivacyClient.tsx`, `TermsClient.tsx`, `RefundClient.tsx`, `CeoClient.tsx`, `VisionMissionClient.tsx`, `not-found.tsx`, `error.tsx`
- **Observations**:
  - All legal/static header sections use `bg-gray-50 dark:bg-[#0B1F5E]/50 border-b border-gray-200 dark:border-white/10`.
  - Info boxes use `bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10`.
  - Error pages use `bg-gray-50 dark:bg-[#071340]` with cards `bg-white dark:bg-white/5`.
- **Assessment**:
  - Full theme compliance and clear typography in both modes.

---

## 2. Category R3: Responsive UI/UX & Performance Survey (U-1 through U-11)

### U-1: Mobile Horizontal Scrollbars & Viewport Width Protection
- **Files**: `src/app/globals.css`, `Navbar.tsx`, `TeamSection.tsx`, `NavigationPortalView.tsx`, `TestimonialsSection.tsx`
- **Observations**:
  - Wide decorative blur discs (e.g. `w-[800px] h-[800px]`, `w-[70vw]`, marquee rows `w-[200%]`) can trigger horizontal viewport overflow on narrow mobile screens (<375px) if an ancestor lacks `overflow-hidden`.
  - `TeamSection.tsx` (Line 141) has `overflow-x-hidden`.
  - `TestimonialsSection.tsx` (Line 41) has `overflow-hidden`.
- **Recommended Safeguard**:
  Ensure in `globals.css`:
  ```css
  html, body {
    max-width: 100%;
    overflow-x: hidden;
  }
  ```

---

### U-2: Touch Target Accessibility (<44×44px Targets on Mobile)
- **Defects Found & Verified**:
  1. `Navbar.tsx` (Line 144): Mobile hamburger button is `p-2` with `w-6` inside (bounding box ~36px). **Violation**.
  2. `Footer.tsx` (Line 50): Social icons are `w-10 h-10` (40×40px). **Violation**.
  3. `TestimonialsSection.tsx` (Line 44): Animation pause button is `p-2` with 16px icon (~32px). **Violation**.
  4. `TestimonialsSection.tsx` (Line 109): Modal close button is `p-2` with 24px icon. **Borderline (~40px)**.
  5. `ProjectsSection.tsx` (Line 94): Category tab buttons use `px-6 py-2` (height ~36px). **Violation**.
  6. `theme-toggle.tsx` (Line 22): Unmounted placeholder button is `w-10 h-10` (40×40px). **Violation**.
- **Fix Recommendation**:
  Ensure all buttons have `min-h-[44px] min-w-[44px]` or `p-2.5`/`w-11 h-11`.

---

### U-3: Sticky Header & Modal Stacking Context (z-index Architecture)
- **Hierarchy Audit**:
  - `z-0`: 3D HeroScene canvas, background gradients, animated particle meshes.
  - `z-10` / `z-20`: Section content containers, cards, headlines.
  - `z-50`: Global fixed `Navbar` (`header`).
  - `z-[100]`: Testimonials full review modal & overlay.
  - `z-[9998]`: `PageTransition` backdrop fade.
  - `z-[9999]`: `PageTransition` top progress bar & `Preloader`.
  - `z-[10000]`: `CustomCursor` interactive tracking dot.
- **Assessment**:
  Stacking layers are cleanly separated with no z-index clipping or canvas occlusion.

---

### U-4: Mobile Navigation Drawer Interaction & iOS Scroll Lock
- **File**: `src/components/layout/Navbar.tsx` (Lines 54–64, 171–212)
- **Observations**:
  - Line 57: `document.body.style.overflow = 'hidden'` is used when mobile menu is open.
  - On iOS Safari, `overflow: hidden` on body alone may allow rubber-band scrolling.
- **Recommended Enhancement**:
  Add `touch-action: none` to the mobile menu overlay to prevent background document scrolling on iOS.

---

### U-5: Responsive Grid Breakpoints & Small Screen Stacking
- **Verification Across Breakpoints**:
  - **Footer**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-5` (stacks neatly on phones, 2 columns on tablets, 5 columns on desktop).
  - **StatsSection**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with `divide-y md:divide-y-0 md:divide-x`.
  - **TeamSection**:
    - Executive (CEO): Centered `max-w-3xl`.
    - Senior (MD): Centered `max-w-2xl`.
    - Department Heads: `grid-cols-1 md:grid-cols-2`.
    - Specialists: `grid-cols-1 md:grid-cols-3`.
  - **ProgramsList**: `grid-cols-1 md:grid-cols-2`.
  - **Apply Form**: `grid-cols-1 md:grid-cols-2` and `md:grid-cols-4`.
- **Assessment**:
  100% compliant across 320px, 375px, 768px, 1024px, and 1280px+.

---

### U-6: Fluid Typography, Line Clamping & Title Truncation
- **Observations**:
  - Hero headline: `text-5xl md:text-6xl lg:text-7xl leading-tight`.
  - Course card titles: `text-xl md:text-2xl leading-snug`.
  - Course card descriptions: `line-clamp-3 leading-relaxed` prevents card height unevenness.
  - Navigation portal items: `text-5xl sm:text-6xl md:text-7xl lg:text-8xl`.
- **Assessment**:
  Typography scales gracefully without overflow or clipping.

---

### U-7: Next/Image Layout Shift Prevention, Aspect Ratios & Responsive `sizes`
- **File Audit**:
  - `Navbar.tsx` & `Footer.tsx`: Logo `<Image fill priority />` wrapped in container with fixed aspect ratio (`w-40 h-10` / `w-48 h-12`).
  - `TeamSection.tsx`: All team member avatars use `next/image` with explicit `sizes` (`(max-width: 768px) 128px, 144px`, `sizes="80px"`).
  - `CourseDetailView.tsx`: Instructor photos use `next/image` with `sizes="128px"`.
  - `CeoClient.tsx`: CEO image uses `next/image` with `fill`, `priority`, and `sizes="(max-width: 1024px) 100vw, 384px"`.
- **Assessment**:
  Zero raw `<img>` tags found. 100% Next/Image compliance with reserved layout boxes preventing Cumulative Layout Shift (CLS).

---

### U-8: Mobile Form Usability (iOS 16px Font Zoom Prevention)
- **Files**: `src/app/apply/ApplyClient.tsx`, `src/components/layout/Footer.tsx`, `src/components/sections/FAQSection.tsx`
- **Issue**:
  - When an `<input>` or `<select>` has `font-size < 16px` (e.g. `text-sm` = 14px), iOS Safari zooms into the form field on focus, breaking page layout.
- **Recommended Fix**:
  Ensure all inputs, selects, and textareas use `text-base md:text-sm` (16px on mobile, 14px on md+).

---

### U-9: Animation Performance & Hardware Acceleration (`will-change`, GPU Layers)
- **Observations**:
  - Floating background particles use `transform-gpu will-change-transform`.
  - Marquee animations in `TestimonialsSection.tsx` use CSS `transform: translateX(...)` rather than `left` positioning.
  - `@media (prefers-reduced-motion: reduce)` in `globals.css` (lines 398–411) sets animation durations to `0.01ms !important`, ensuring immediate accessibility compliance for users with vestibular sensitivities.

---

### U-10: Three.js 3D Canvas (`HeroScene.tsx`) Mobile Optimization
- **File**: `src/components/3d/HeroScene.tsx`
- **Observations**:
  - Dynamically imported with `ssr: false` in `HeroSection.tsx`, `TeamSection.tsx`, and `NavigationPortalView.tsx`.
  - Module-level pre-computation of particle positions (`PARTICLE_POSITIONS`) prevents garbage collection churn during render loops.
  - Replaced `clock.getElapsedTime()` with `performance.now()` to eliminate THREE.Clock deprecation warnings.
  - Clamped pixel ratio `dpr={[1, 2]}` prevents rendering lag on 3x/4x mobile screens.

---

### U-11: Lenis Smooth Scroll & Custom Cursor Mobile Device Handling
- **Files**: `src/components/ui/CustomCursor.tsx`, `src/components/providers/SmoothScroller.tsx`
- **Observations**:
  - `CustomCursor.tsx`: Uses `if (window.matchMedia("(pointer: coarse)").matches) return;` to completely disable custom cursor on touch/mobile devices.
  - Uses Framer Motion `useMotionValue` for direct pointer physics, eliminating 60–240Hz React state re-renders.
  - `SmoothScroller.tsx`: `ResizeObserver` automatically updates Lenis scroll bounds on client route transitions.

---

## 3. Summary of Files Requiring Implementation Edits

| # | File Path | Scope | Target Issues |
|---|-----------|-------|---------------|
| 1 | `src/components/sections/TeamSection.tsx` | Fix SeniorCard name invisibility (`text-white` -> `text-gray-900 dark:text-white`), remove duplicate classes on root container and badge, add light mode avatar rings. | T-3 |
| 2 | `src/components/layout/Footer.tsx` | Fix social icons light mode contrast (`bg-gray-200 dark:bg-white/10`), fix newsletter input duplicate classes & light background, fix submit button text color to `text-white font-semibold`, enlarge social buttons to 44×44px (`w-11 h-11`). | T-2, U-2, U-8 |
| 3 | `src/components/sections/NavigationPortalView.tsx` | Remove forced dark mode (`bg-[#0B1F5E]` -> `bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-[#0B1F5E] dark:to-[#071340]`), add dark/light typography classes. | T-5 |
| 4 | `src/components/layout/Navbar.tsx` | Replace hardcoded `#0B1F5E` with semantic tokens, increase mobile hamburger touch target to ≥44px, add `touch-action: none` to mobile overlay. | T-1, U-2, U-4 |
| 5 | `src/components/sections/HeroSection.tsx` | Fix scroll indicator visibility in light mode (`text-gray-500 dark:text-white/50`). | T-4 |
| 6 | `src/app/apply/ApplyClient.tsx` | Add explicit dark/light classes to all `<option>` dropdown elements, fix disclaimer text contrast (`dark:text-gray-400`), set `text-base md:text-sm` for iOS zoom prevention. | T-6, U-8 |
| 7 | `src/components/sections/ProjectsSection.tsx` | Add `border-gray-200/80` for light mode card boundary definition, enlarge category tab touch padding (`py-2.5`). | T-10, U-2 |
| 8 | `src/components/sections/TestimonialsSection.tsx` | Enlarge play/pause and modal close button touch targets to ≥44px (`min-w-[44px] min-h-[44px]`). | T-7, U-2 |
| 9 | `src/components/ui/theme-toggle.tsx` | Increase unmounted placeholder button size from `w-10 h-10` to `w-11 h-11` (44px). | U-2 |
| 10 | `src/app/globals.css` | Ensure `html, body { max-width: 100%; overflow-x: hidden; }` to prevent any horizontal micro-scrolling on mobile. | U-1 |
