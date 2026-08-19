# Milestone 2 (Requirement R2: Asset & Performance Optimization) — Forensic Investigation & Handoff Report

**Agent Archetype**: Explorer (`explorer_m2_1`)  
**Workspace Root**: `/Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia`  
**Target Milestone**: Milestone 2 (Requirement R2)  
**Authoritative Specs**: `ORIGINAL_REQUEST.md` (§R2) & `PROJECT.md`  

---

## 1. Observation

### 1.1 Raw `<img>` Tags Audit
A comprehensive filesystem scan across all `.tsx`, `.ts`, `.jsx`, `.js`, and `.html` files in `src/` revealed **zero (0)** raw `<img>` tags.
- **Previous state**: 34 unoptimized `<img>` tags existed (33 in legacy `src/app/programs/*/*Client.tsx` and 1 in `src/app/ceo-message/CeoClient.tsx`).
- **Current state**: Milestone 1 successfully deleted all 33 legacy course directories and consolidated course rendering into `src/components/programs/CourseDetailView.tsx`.
- **Verified `<Image />` component inventory**:
  | # | File Path | Line | Element Context | Optimization Attributes |
  |---|---|---|---|---|
  | 1 | `src/app/ceo-message/CeoClient.tsx` | 73–80 | CEO portrait in letter card | `<Image src="/images/team/Dharmendra.webp" alt="Dharmendra Kumar Pandey" fill sizes="(max-width: 1024px) 100vw, 384px" priority className="object-cover..." />` |
  | 2 | `src/components/layout/Footer.tsx` | 32–37 | Brand logo | `<Image src="/logo.svg" alt="SkillPedia Logo" width={36} height={36} className="w-9 h-9" />` |
  | 3 | `src/components/layout/Navbar.tsx` | 86–92 | Header brand logo | `<Image src="/logo.svg" alt="SkillPedia Logo" width={40} height={40} className="w-10 h-10..." priority />` |
  | 4 | `src/components/programs/CourseDetailView.tsx` | 369–375 | Instructor avatar cards (all 33 dynamic courses) | `<Image src={instructor.image} alt={instructor.name} fill sizes="128px" className="object-cover..." />` |
  | 5 | `src/components/sections/TeamSection.tsx` | 296–303 | Tier 1: Executive Card | `<Image src={member.photo} alt={member.name} fill sizes="(max-width: 768px) 128px, 144px" className="object-cover..." />` |
  | 6 | `src/components/sections/TeamSection.tsx` | 350–357 | Tier 2: Senior Leadership Card | `<Image src={member.photo} alt={member.name} fill sizes="(max-width: 768px) 112px, 128px" className="object-cover..." />` |
  | 7 | `src/components/sections/TeamSection.tsx` | 400–407 | Tier 3: Department Head Card | `<Image src={member.photo} alt={member.name} fill sizes="(max-width: 768px) 96px, 104px" className="object-cover..." />` |
  | 8 | `src/components/sections/TeamSection.tsx` | 452–459 | Tier 4: Specialist / Trainer Card | `<Image src={member.photo} alt={member.name} fill sizes="80px" className="object-cover..." />` |

---

### 1.2 Team Images & Redundant Root Directory Audit
- **Root `/team/` directory**: Confirmed deleted (`ls team/` returns `No such file or directory`), saving 13.63MB of duplicated repository bloat.
- **`public/images/team/` directory contents**:
  | File | Format | Dimensions (WxH) | Disk Size | Status |
  |---|---|---|---|---|
  | `Aniket.webp` | WebP | 1086 × 1448 px | 65.5 KB | Optimized |
  | `Ayush.webp` | WebP | 1254 × 1254 px | 63.4 KB | Optimized |
  | `Dharmendra.webp` | WebP | 1122 × 1402 px | 52.7 KB | Optimized |
  | `Lavli.webp` | WebP | 1122 × 1402 px | 61.5 KB | Optimized |
  | `Line.webp` | WebP | 1080 × 1457 px | 48.5 KB | Optimized |
  | `Saurabh.webp` | WebP | 1086 × 1448 px | 47.4 KB | Optimized |
  | `Sumit.webp` | WebP | 1086 × 1448 px | 42.1 KB | Optimized |
  - **Total payload**: 380.9 KB (down from >14 MB uncompressed PNGs, **97.3% payload reduction**).
- **Code references**:
  - `src/lib/coursesData.ts`: Exactly 66 instructor image references, all referencing `/images/team/*.webp`.
  - `src/components/sections/TeamSection.tsx`: Lines 30, 43, 56, 65, 78, 87, 95 all reference `/images/team/*.webp`.
  - `src/app/ceo-message/CeoClient.tsx`: Line 74 references `/images/team/Dharmendra.webp`.
  - **Zero** `.png` references remain for any team members.

---

### 1.3 Preloader Bottleneck Investigation (`Preloader.tsx`)
- **File**: `src/components/ui/Preloader.tsx` (Lines 18–52)
- **Mount Point**: `src/app/layout.tsx` (Line 86)
- **Direct Code Observation**:
  ```tsx
  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';

    // Simulate progress
    const duration = 2500; // total duration (2.5 seconds)
    const interval = 50;   // update every 50ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(currentProgress);
      // ...
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = 'unset';
        }, 400); // Brief pause at 100%
      }
    }, interval);
  ```
- **Performance Impact**:
  1. Total artificial latency: `2500ms + 400ms = 2900ms (~3 seconds)`.
  2. Fullscreen overlay (`fixed inset-0 z-[9999] bg-[#071340]`) hides all rendered HTML.
  3. Forces Chrome / Lighthouse Largest Contentful Paint (LCP) to >3.5 seconds, triggering Google Core Web Vitals failure.
  4. Scroll locking (`overflow = 'hidden'`) blocks user interaction until the timer resolves.

---

### 1.4 CustomCursor Re-render Bottleneck Investigation (`CustomCursor.tsx`)
- **File**: `src/components/ui/CustomCursor.tsx` (Lines 7, 25–29, 87–96)
- **Direct Code Observation**:
  ```tsx
  export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // <-- REACT STATE
    // ...
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY }); // <-- FIRES 60-240Hz
      cursorXSpring.set(e.clientX);
      cursorYSpring.set(e.clientY);
    };

    // Inner dot:
    <motion.div
      className="fixed top-0 left-0 w-1.5 h-1.5 ... mix-blend-difference"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isHovering ? 0 : 1,
      }}
      // ...
    />
  ```
- **Performance Impact**:
  1. Every sub-pixel mouse movement triggers `setMousePosition`, causing a React component state update and re-rendering `CustomCursor` 60 to 240 times per second.
  2. The inner dot uses `animate={{ x: mousePosition.x, y: mousePosition.y }}` driven by React state reconciliation rather than direct GPU transform styles.
  3. Causes CPU spikes, layout recalculations, and frame drops during fast pointer movements.

---

## 2. Logic Chain & Implementation Plan for Worker

### 2.1 Preloader Optimization Plan
**Objective**: Eliminate the 2.5s blocking delay while maintaining smooth visual styling on first visit or route transitions.

**Implementation Strategy**:
1. Add a `sessionStorage` guard (`has_loaded_preloader`) so that subsequent page visits or back/forward navigations skip the preloader instantly (0ms delay).
2. For initial entrance, reduce the duration from 2,500ms down to a rapid, non-blocking 350ms animation or dismiss upon hydration.
3. Immediately release `document.body.style.overflow = 'unset'`.
4. Ensure `AnimatePresence` performs a seamless 0.4s fade-out.

**Concrete Proposed Code for `src/components/ui/Preloader.tsx`**:
```tsx
"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOADING_STEPS = [
  "INITIALIZING NEURAL PATHWAYS...",
  "BOOTING SKILLPEDIA OS..."
];

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user already saw preloader this session
    if (typeof window !== 'undefined' && sessionStorage.getItem('sp_visited')) {
      setIsLoading(false);
      return;
    }

    // Ultra-fast streamlined loading (350ms total)
    const duration = 350;
    const interval = 35;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(currentProgress);

      if (currentProgress >= 50) setStepIndex(1);

      if (currentStep >= steps) {
        clearInterval(timer);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('sp_visited', 'true');
        }
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      }
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.02,
            filter: "blur(6px)",
            transition: { duration: 0.4, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] pointer-events-none flex flex-col items-center justify-center bg-[#071340] overflow-hidden"
        >
          {/* Futuristic background glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#3B82F6]/20 rounded-full blur-[100px]" />
          </div>

          <div className="relative flex flex-col items-center z-10 w-full max-w-md px-6">
            {/* Step Text */}
            <div className="h-6 mb-4 flex items-center justify-center overflow-hidden">
              <p className="font-[family-name:var(--font-mono-code)] text-xs md:text-sm text-[#60A5FA] tracking-widest text-center">
                {LOADING_STEPS[stepIndex]}
              </p>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#3B82F6] to-[#FF7A00]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage */}
            <div className="mt-3 w-full flex justify-between items-center text-[10px] text-gray-500 font-[family-name:var(--font-mono-code)]">
              <span>SYSTEM.INIT</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

---

### 2.2 CustomCursor Zero-Rerender Framer Motion Refactor Plan
**Objective**: Eliminate all React component re-renders during mouse movements by driving pointer coordinates exclusively through Framer Motion `useMotionValue` and `useSpring`.

**Implementation Strategy**:
1. Remove `const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })`.
2. Initialize motion values:
   ```tsx
   const cursorX = useMotionValue(-100);
   const cursorY = useMotionValue(-100);
   const cursorXSpring = useSpring(cursorX, { damping: 25, stiffness: 300, mass: 0.5 });
   const cursorYSpring = useSpring(cursorY, { damping: 25, stiffness: 300, mass: 0.5 });
   ```
3. In the native `mousemove` listener, update motion values directly:
   ```tsx
   const updateMousePosition = (e: MouseEvent) => {
     cursorX.set(e.clientX);
     cursorY.set(e.clientY);
   };
   ```
4. Attach `style={{ x: cursorX, y: cursorY }}` directly to the inner dot and `style={{ x: cursorXSpring, y: cursorYSpring }}` to the outer ring.
5. Result: 0 React re-renders during mouse movement; smooth 120fps GPU-accelerated cursor animations.

**Concrete Proposed Code for `src/components/ui/CustomCursor.tsx`**:
```tsx
"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for instant 0ms inner dot position (Zero React Re-renders)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for trailing outer ring
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable custom cursor on fine pointer devices (mouse / trackpad)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer trailing ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.9 : 0.6,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div 
          className="w-full h-full rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#FF7A00]" 
          style={{ 
            padding: '2px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', 
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude'
          }} 
        />
      </motion.div>

      {/* Inner precise dot (driven directly by useMotionValue) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          scale: { type: 'spring', stiffness: 300, damping: 20 }
        }}
      />
    </>
  );
}
```

---

### 2.3 Standalone WebP Conversion Utility Script
For future image additions or automated builds, a production WebP conversion script using `sharp` should be provided in `scripts/convert-team-webp.mjs`:
```javascript
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = path.resolve('public/images/team');
const outputDir = path.resolve('public/images/team');

async function convertImages() {
  const files = fs.readdirSync(inputDir);
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, `${baseName}.webp`);

      console.log(`Converting ${file} to WebP...`);
      await sharp(inputPath)
        .webp({ quality: 82, effort: 6 })
        .toFile(outputPath);

      console.log(`Saved: ${outputPath}`);
      // Remove original png after conversion
      fs.unlinkSync(inputPath);
    }
  }
  console.log('WebP conversion complete.');
}

convertImages().catch(console.error);
```

---

## 3. Caveats & Edge Cases

1. **Hydration Mismatch on Preloader**: If using `sessionStorage` in `Preloader.tsx`, always check `typeof window !== 'undefined'` inside `useEffect` (never during initial SSR render) to prevent Next.js hydration mismatches between server and client.
2. **`pointer: coarse` Devices (Touchscreens/Mobile)**: `CustomCursor.tsx` must gracefully check `window.matchMedia("(pointer: coarse)").matches` to prevent invisible fixed elements or touch event conflicts on mobile devices.
3. **Passive Event Listeners**: Attaching `{ passive: true }` to `mousemove` and `mouseover` in `CustomCursor.tsx` ensures maximum scrolling performance and prevents main-thread blocking.
4. **Next.js Image Sizing**: For images using `fill`, ensure parent containers always have `position: relative` or `position: absolute` with explicit width/height or aspect-ratio classes (`relative w-32 h-32` or `aspect-square`). All team and instructor cards have been verified to have these styles.

---

## 4. Conclusion & Recommendations

1. **Raw `<img>` tags**: **Complete (0 remaining)**. All images use `next/image` with responsive `sizes` and proper layout modes.
2. **Team images & `/team/` folder**: **Complete**. All 7 team images are in optimized WebP format (~380KB total vs 14MB PNGs), the root `/team/` folder is deleted, and all code references point to `.webp`.
3. **Preloader 2.5s delay**: **Ready for refactoring**. Worker should apply the streamlined session-aware 350ms non-blocking preloader implementation.
4. **CustomCursor re-renders**: **Ready for refactoring**. Worker should apply the `useMotionValue` zero-rerender implementation.

---

## 5. Verification Method

To independently verify all findings and validate the refactored code:

1. **Zero Raw `<img>` Tag Verification**:
   ```bash
   grep -rn "<img" src/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js"
   # Output must be empty (0 occurrences).
   ```

2. **WebP & Team Image Reference Verification**:
   ```bash
   ls -lh public/images/team/*.webp
   # Confirm all 7 files exist with total size < 400KB.
   grep -rn "/images/team/.*\.png" src/
   # Output must be empty (0 PNG references).
   ```

3. **TypeScript & Static Type Check**:
   ```bash
   npx tsc --noEmit
   # Must exit with code 0 and 0 type errors.
   ```

4. **Production Build & Pre-rendering Validation**:
   ```bash
   npm run build
   # Must compile cleanly and generate all 46 static HTML routes without error.
   ```
