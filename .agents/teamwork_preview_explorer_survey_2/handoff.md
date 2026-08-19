# Investigation Report: Explorer 2 (R2.5, R2.6, R3.1, R3.2, R3.3, R3.4, R3.5, R3.6)

**Author:** Explorer 2  
**Date:** 2026-08-19  
**Target Directory:** `/Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia`

---

## 1. Observation

### R2.5: `src/components/sections/StatsSection.tsx` (Screen Reader Heading)
- **Direct Code Observation (`src/components/sections/StatsSection.tsx:53-61`):**
  ```tsx
  export default function StatsSection() {
    return (
      <section id="stats" className="py-20 relative bg-gray-50 dark:bg-[#071340] border-y border-gray-100 dark:border-white/5 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20 dark:opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
  ```
- **Finding:** The `<section id="stats">` currently lacks an accessible landmark heading (`<h2>`), which causes screen reader navigation tools to identify an unlabelled landmark.

---

### R2.6: `src/app/apply/ApplyClient.tsx` (Select Chevrons & Address Label Association)
- **Direct Code Observation (`src/app/apply/ApplyClient.tsx:6`):**
  ```tsx
  import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
  ```
- **Direct Code Observation (`src/app/apply/ApplyClient.tsx:380-384`):**
  ```tsx
  {/* Address Fields */}
  <div className="space-y-4">
    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Address *</label>
    <input 
      type="text" 
      id="street"
      name="street"
  ```
  The label for "Full Address" has no `htmlFor="street"` attribute, preventing screen readers and click interactions from linking to `id="street"`.
- **Direct Code Observation of `<select>` elements (`src/app/apply/ApplyClient.tsx`):**
  All 8 select elements use `className="... appearance-none"` without any visual chevron indicator:
  1. `id="prefix"` (Lines 214-228)
  2. `id="gender"` (Lines 248-262)
  3. `id="qualification"` (Lines 312-326)
  4. `id="status"` (Lines 329-341)
  5. `id="program"` (Lines 348-360)
  6. `id="expertise"` (Lines 364-376)
  7. `id="source"` (Lines 459-474)
  8. `id="needsCounseling"` (Lines 477-489)
  Because of `appearance-none`, users cannot distinguish dropdown inputs from normal text fields.

---

### R3.1: `src/components/providers/SmoothScroller.tsx` (Package Migration Status)
- **Direct Code Observation (`package.json:15`):**
  ```json
  "@studio-freight/lenis": "^1.0.42",
  ```
  `lenis` is NOT listed under `dependencies` in `package.json`.
- **Direct Code Observation (`src/components/providers/SmoothScroller.tsx:4`):**
  ```tsx
  import Lenis from '@studio-freight/lenis';
  ```
- **Finding:** The installed package is `@studio-freight/lenis`. The import should be kept as-is, with a `// TODO: migrate to 'lenis' package` comment added above it.

---

### R3.2: `src/components/sections/HeroSection.tsx` (Scroll Indicator SVG & Particle Key Comments)
- **Direct Code Observation (`src/components/sections/HeroSection.tsx:53-64`):**
  ```tsx
  {particles.map((style, i) => (
    <motion.div
      key={i}
      className="absolute rounded-full bg-blue-500/20 dark:bg-white/20 animate-float transform-gpu will-change-transform"
  ```
- **Direct Code Observation (`src/components/sections/HeroSection.tsx:158-161`):**
  ```tsx
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6"/>
  </svg>
  ```
- **Finding:** The scroll indicator SVG lacks `aria-hidden="true"`. The particle array map uses `key={i}` without explicit documentation that these are static decorative elements.

---

### R3.3: `src/components/sections/CTASection.tsx` (Particle Key Comments)
- **Direct Code Observation (`src/components/sections/CTASection.tsx:33-37`):**
  ```tsx
  {/* Floating Particles (CSS only) */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {particles.map((style, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-blue-500/20 dark:bg-white/10 transform-gpu will-change-transform"
  ```
- **Finding:** Particle mapping uses `key={i}` without the standard comment documenting that particles are static decorative elements that never reorder.

---

### R3.4: `src/components/sections/CareerSection.tsx` (Redundant Identity useTransform)
- **Direct Code Observation (`src/components/sections/CareerSection.tsx:5, 10-15, 31-40`):**
  ```tsx
  import { motion, useScroll, useTransform } from 'framer-motion';
  ...
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  ...
  <motion.div 
    style={{ scaleY: scaleProgress, transformOrigin: "top" }}
    className="md:hidden absolute left-[27px] md:left-0 md:top-6 bottom-0 md:bottom-auto w-1 md:w-full h-full md:h-1 bg-gradient-to-b from-[#3B82F6] to-[#FF7A00] rounded-full z-0"
  />
  ...
  <motion.div 
    style={{ scaleX: scaleProgress, transformOrigin: "left" }}
    className="hidden md:block absolute left-[27px] md:left-0 md:top-6 bottom-0 md:bottom-auto w-1 md:w-full h-full md:h-1 bg-gradient-to-r from-[#3B82F6] to-[#FF7A00] rounded-full z-0"
  />
  ```
- **Finding:** `useTransform(scrollYProgress, [0, 1], [0, 1])` is an identity mapping. `scrollYProgress` can be used directly for `scaleY` and `scaleX`, and `useTransform` can be removed from imports.

---

### R3.5: `src/components/sections/StatsSection.tsx` (Key Index to Key Stat ID)
- **Direct Code Observation (`src/lib/constants.ts:312-319`):**
  ```ts
  export const STATS = [
    { id: "stat-weeks", value: 12, label: "Weeks", suffix: "", prefix: "" },
    { id: "stat-hours", value: 100, label: "Learning Hours", suffix: "+", prefix: "" },
    { id: "stat-projects", value: 6, label: "Industry Projects", suffix: "+", prefix: "" },
    { id: "stat-assessments", value: 12, label: "Weekly Assessments", suffix: "", prefix: "" },
    { id: "stat-interviews", value: 5, label: "Mock Interviews", suffix: "+", prefix: "" },
    { id: "stat-portfolio", value: 1, label: "Portfolio Ready", suffix: "", prefix: "" },
  ] as const;
  ```
- **Direct Code Observation (`src/components/sections/StatsSection.tsx:61-64`):**
  ```tsx
  {STATS.map((stat, index) => (
    <motion.div 
      key={index}
      initial={{ opacity: 0, y: 20 }}
  ```
- **Finding:** `STATS` provides unique `stat.id` strings. Using `key={stat.id}` avoids index-as-key antipatterns.

---

### R3.6: `src/components/sections/NavigationPortalView.tsx` (Unused Fields and Props)
- **Direct Code Observation (`src/components/sections/NavigationPortalView.tsx:15-22, 24-52, 56-62, 104-106`):**
  ```tsx
  interface PortalContent {
    tagline: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    statValue: string;
    statLabel: string;
  }
  ...
  export default function NavigationPortalView({
    initialSection = "OUR TEAM",
    onClose,
  }: {
    initialSection?: NavItemKey;
    onClose?: () => void;
  }) {
  ...
  if (e.key === "Escape") {
    if (onClose) onClose();
    else router.push("/");
  }
  ```
- **Direct Code Observation of usages across repo (`src/app/about/page.tsx:11`):**
  ```tsx
  export default function AboutPage() {
    return <NavigationPortalView initialSection="OUR TEAM" />;
  }
  ```
- **Finding:** `statValue` and `statLabel` are defined in `PortalContent` and populated in `PORTAL_DATA`, but never rendered in the JSX. No callers supply `onClose`.

---

## 2. Logic Chain

1. **R2.5 (StatsSection sr-only heading):**
   - Observation: `<section id="stats">` has no `<h1>`-`<h6>` heading.
   - Screen reader landmark standards require major sections to have accessible headings.
   - Adding `<h2 className="sr-only">Key Program Statistics</h2>` as the first child of the `<section>` provides an accessible title while preserving exact visual appearance.

2. **R2.6 (ApplyClient select dropdowns & Address label):**
   - Observation: 8 `<select>` elements have `appearance-none` without an SVG indicator, and the "Full Address" `<label>` has no `htmlFor`.
   - Wrapping each `<select>` in a `<div className="relative">` container with `pr-10` padding and an absolute-positioned `<ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" aria-hidden="true" />` preserves full layout grid alignment while providing clear dropdown visual cues.
   - Adding `htmlFor="street"` binds the label to `<input id="street">`.

3. **R3.1 (SmoothScroller package import):**
   - Observation: `package.json` contains `"@studio-freight/lenis": "^1.0.42"`.
   - The package `@studio-freight/lenis` is currently installed, so changing the import to `lenis` without installing `lenis` would break the build.
   - Retaining the current import and adding `// TODO: migrate to 'lenis' package` satisfies the requirement cleanly.

4. **R3.2 & R3.3 (HeroSection & CTASection particle key comments and SVG aria-hidden):**
   - Observation: `HeroSection` and `CTASection` generate random particle coordinates on client mount into a local state array. The particles never reorder or mutate.
   - Adding `// Static decorative particles that never reorder` on `key={i}` satisfies lint documentation standards.
   - Adding `aria-hidden="true"` to `HeroSection` scroll indicator SVG prevents screen readers from announcing redundant unlabelled graphics.

5. **R3.4 (CareerSection scroll progress):**
   - Observation: `scaleProgress = useTransform(scrollYProgress, [0, 1], [0, 1])` performs an identity transform on `scrollYProgress`.
   - Passing `scrollYProgress` directly into `style={{ scaleY: scrollYProgress, transformOrigin: "top" }}` and `style={{ scaleX: scrollYProgress, transformOrigin: "left" }}` eliminates an unnecessary hook call and unused `useTransform` import.

6. **R3.5 (StatsSection key={stat.id}):**
   - Observation: `STATS` in `src/lib/constants.ts` defines unique IDs (`stat-weeks`, `stat-hours`, etc.).
   - Replacing `key={index}` with `key={stat.id}` ensures robust React component reconciliation.

7. **R3.6 (NavigationPortalView unused properties):**
   - Observation: `statValue` and `statLabel` in `PortalContent` are leftover data from an earlier design iteration and are never referenced in JSX.
   - `onClose` is not passed by `src/app/about/page.tsx` (the only consumer).
   - Removing `statValue`, `statLabel`, and `onClose` eliminates dead code and simplifies the Escape key handler to directly invoke `router.push('/')`.

---

## 3. Caveats

- **ApplyClient form layout:** Wrapping `<select>` elements in `<div className="relative">` must not alter grid column spans (e.g. `md:col-span-1` on the `Prefix` container must remain on the outer column wrapper, not on the relative inner div).
- **SmoothScroller reduced-motion:** In addition to R3.1 import comment, R2.1 (handled by another agent/implementer) will add the `prefers-reduced-motion` check. The import comment must be placed cleanly at the top.
- No other caveats.

---

## 4. Conclusion & Precise Proposed Changes

### 1. `src/components/sections/StatsSection.tsx` (R2.5 & R3.5)
```tsx
// Before (lines 53-64):
export default function StatsSection() {
  return (
    <section id="stats" className="py-20 relative bg-gray-50 dark:bg-[#071340] border-y border-gray-100 dark:border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 dark:opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-white/10">
          {STATS.map((stat, index) => (
            <motion.div 
              key={index}

// After:
export default function StatsSection() {
  return (
    <section id="stats" className="py-20 relative bg-gray-50 dark:bg-[#071340] border-y border-gray-100 dark:border-white/5 overflow-hidden">
      <h2 className="sr-only">Key Program Statistics</h2>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 dark:opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-white/10">
          {STATS.map((stat, index) => (
            <motion.div 
              key={stat.id}
```

---

### 2. `src/app/apply/ApplyClient.tsx` (R2.6)
- **Import update (line 6):**
  ```tsx
  import { Send, CheckCircle2, AlertCircle, Loader2, ChevronDown } from 'lucide-react';
  ```
- **Address label update (line 380):**
  ```tsx
  {/* Before */}
  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Address *</label>
  {/* After */}
  <label htmlFor="street" className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Address *</label>
  ```
- **Select dropdown wrapper pattern for all 8 `<select>` elements:**
  Wrap `<select>` with `<div className="relative">` and add `pr-10` + `cursor-pointer` to select, plus `<ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" aria-hidden="true" />`.
  
  *Example (Prefix):*
  ```tsx
  <div className="space-y-2 md:col-span-1">
    <label htmlFor="prefix" className="text-sm font-medium text-gray-700 dark:text-gray-300">Prefix *</label>
    <div className="relative">
      <select 
        id="prefix"
        name="prefix"
        required
        value={formData.prefix}
        onChange={handleChange}
        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl pl-4 pr-10 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
      >
        <option className="bg-white dark:bg-[#0B1F5E] text-gray-900 dark:text-white" value="Mr.">Mr.</option>
        <option className="bg-white dark:bg-[#0B1F5E] text-gray-900 dark:text-white" value="Ms.">Ms.</option>
        <option className="bg-white dark:bg-[#0B1F5E] text-gray-900 dark:text-white" value="Mrs.">Mrs.</option>
        <option className="bg-white dark:bg-[#0B1F5E] text-gray-900 dark:text-white" value="Dr.">Dr.</option>
        <option className="bg-white dark:bg-[#0B1F5E] text-gray-900 dark:text-white" value="Prof.">Prof.</option>
      </select>
      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" aria-hidden="true" />
    </div>
  </div>
  ```
  *(Apply identically to `gender`, `qualification`, `status`, `program`, `expertise`, `source`, `needsCounseling`)*.

---

### 3. `src/components/providers/SmoothScroller.tsx` (R3.1)
```tsx
// Before (lines 3-4):
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

// After:
import { useEffect, useRef } from 'react';
// TODO: migrate to 'lenis' package
import Lenis from '@studio-freight/lenis';
```

---

### 4. `src/components/sections/HeroSection.tsx` (R3.2)
```tsx
// Particle comment (line 55):
{particles.map((style, i) => (
  <motion.div
    key={i} // Static decorative particles that never reorder
    className="absolute rounded-full bg-blue-500/20 dark:bg-white/20 animate-float transform-gpu will-change-transform"

// Scroll indicator SVG (line 158):
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6"/>
  </svg>
```

---

### 5. `src/components/sections/CTASection.tsx` (R3.3)
```tsx
// Particle comment (line 35):
{particles.map((style, i) => (
  <motion.div
    key={i} // Static decorative particles that never reorder
    className="absolute rounded-full bg-blue-500/20 dark:bg-white/10 transform-gpu will-change-transform"
```

---

### 6. `src/components/sections/CareerSection.tsx` (R3.4)
```tsx
// Before (lines 5, 15, 31-40):
import { motion, useScroll, useTransform } from 'framer-motion';
...
const scaleProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
...
<motion.div 
  style={{ scaleY: scaleProgress, transformOrigin: "top" }}
  className="md:hidden absolute left-[27px] md:left-0 md:top-6 bottom-0 md:bottom-auto w-1 md:w-full h-full md:h-1 bg-gradient-to-b from-[#3B82F6] to-[#FF7A00] rounded-full z-0"
/>
<motion.div 
  style={{ scaleX: scaleProgress, transformOrigin: "left" }}
  className="hidden md:block absolute left-[27px] md:left-0 md:top-6 bottom-0 md:bottom-auto w-1 md:w-full h-full md:h-1 bg-gradient-to-r from-[#3B82F6] to-[#FF7A00] rounded-full z-0"
/>

// After:
import { motion, useScroll } from 'framer-motion';
...
// (scaleProgress removed)
...
<motion.div 
  style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
  className="md:hidden absolute left-[27px] md:left-0 md:top-6 bottom-0 md:bottom-auto w-1 md:w-full h-full md:h-1 bg-gradient-to-b from-[#3B82F6] to-[#FF7A00] rounded-full z-0"
/>
<motion.div 
  style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
  className="hidden md:block absolute left-[27px] md:left-0 md:top-6 bottom-0 md:bottom-auto w-1 md:w-full h-full md:h-1 bg-gradient-to-r from-[#3B82F6] to-[#FF7A00] rounded-full z-0"
/>
```

---

### 7. `src/components/sections/NavigationPortalView.tsx` (R3.6)
```tsx
// Before:
interface PortalContent {
  tagline: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  statValue: string;
  statLabel: string;
}

const PORTAL_DATA: Record<NavItemKey, PortalContent> = {
  HOME: {
    tagline: "CAREER ACCELERATION",
    description:
      "India's premier engineering career acceleration platform — transforming aspiring developers into production-ready software engineers in 12 intensive weeks.",
    ctaText: "EXPLORE PLATFORM",
    ctaHref: "/",
    statValue: "500+ PARTNERS",
    statLabel: "94% Placement Rate",
  },
  "OUR TEAM": {
    tagline: "EXPERT INSTRUCTORS & MENTORS",
    description:
      "Learn directly from seasoned software engineers, AI researchers, and tech leads from top-tier product companies who are dedicated to accelerating your tech career.",
    ctaText: "MEET THE TEAM",
    ctaHref: "/team",
    statValue: "50+ EXPERTS",
    statLabel: "from FAANG & Top Tech",
  },
  CONTACT: {
    tagline: "TALK TO OUR ADVISORS",
    description:
      "Connect directly with our admissions team, engineering mentors, and industry counselors to kickstart your software engineering journey today.",
    ctaText: "APPLY FOR BATCH",
    ctaHref: "/apply",
    statValue: "24/7 SUPPORT",
    statLabel: "Admissions Open",
  },
};

export default function NavigationPortalView({
  initialSection = "OUR TEAM",
  onClose,
}: {
  initialSection?: NavItemKey;
  onClose?: () => void;
}) {
...
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (onClose) onClose();
        else router.push("/");
      } else if (e.key === "ArrowDown") {
...
    [activeItem, onClose, router]
  );

// After:
interface PortalContent {
  tagline: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

const PORTAL_DATA: Record<NavItemKey, PortalContent> = {
  HOME: {
    tagline: "CAREER ACCELERATION",
    description:
      "India's premier engineering career acceleration platform — transforming aspiring developers into production-ready software engineers in 12 intensive weeks.",
    ctaText: "EXPLORE PLATFORM",
    ctaHref: "/",
  },
  "OUR TEAM": {
    tagline: "EXPERT INSTRUCTORS & MENTORS",
    description:
      "Learn directly from seasoned software engineers, AI researchers, and tech leads from top-tier product companies who are dedicated to accelerating your tech career.",
    ctaText: "MEET THE TEAM",
    ctaHref: "/team",
  },
  CONTACT: {
    tagline: "TALK TO OUR ADVISORS",
    description:
      "Connect directly with our admissions team, engineering mentors, and industry counselors to kickstart your software engineering journey today.",
    ctaText: "APPLY FOR BATCH",
    ctaHref: "/apply",
  },
};

export default function NavigationPortalView({
  initialSection = "OUR TEAM",
}: {
  initialSection?: NavItemKey;
}) {
...
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.push("/");
      } else if (e.key === "ArrowDown") {
...
    [activeItem, router]
  );
```

---

## 5. Verification Method

To independently verify all findings and validate future implementations:
1. **Lint Verification:**
   ```bash
   npm run lint
   ```
   Must produce 0 errors and 0 warnings.
2. **Build & Typecheck Verification:**
   ```bash
   npm run build
   ```
   Must compile cleanly and generate all 46 static pages.
3. **DOM & Code Inspection:**
   - Verify `<section id="stats">` has `<h2 className="sr-only">Key Program Statistics</h2>`.
   - Verify `src/app/apply/ApplyClient.tsx` has chevrons inside all 8 `<select>` wrappers and `htmlFor="street"` on the Address label.
   - Verify `SmoothScroller.tsx` imports `@studio-freight/lenis` with `// TODO: migrate to 'lenis' package`.
   - Verify `HeroSection.tsx` has `aria-hidden="true"` on the scroll indicator SVG and `key={i}` comments on particles.
   - Verify `CTASection.tsx` has `key={i}` comments on particles.
   - Verify `CareerSection.tsx` does not import or call `useTransform`.
   - Verify `StatsSection.tsx` uses `key={stat.id}` in the `STATS.map`.
   - Verify `NavigationPortalView.tsx` has no `statValue`, `statLabel`, or `onClose`.
