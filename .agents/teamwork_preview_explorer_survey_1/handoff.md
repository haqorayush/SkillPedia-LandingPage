# Handoff Report — Explorer 1 (Landing Page Fixes: R1, R2.1, R2.2, R2.3, R2.4)

## 1. Observation

Direct observations from inspecting target files, imports, and component interactions:

### 1.1 R1: `src/components/ui/Preloader.tsx`
- **Location**: `src/components/ui/Preloader.tsx:14-23, 66, 79`
- **Current State**:
  - `useState` initializer evaluates `sessionStorage.getItem('sp_visited')`:
    ```tsx
    const [isLoading, setIsLoading] = useState(() => {
      if (typeof window !== 'undefined') {
        try {
          return !sessionStorage.getItem('sp_visited');
        } catch {
          return true;
        }
      }
      return true;
    });
    ```
    During SSR, `window` is `undefined`, so `isLoading` evaluates to `true`. On client-side hydration (on repeat visits), `!sessionStorage.getItem('sp_visited')` evaluates to `false`, causing a React hydration mismatch error.
  - Overlay container at line 79 has `className="... pointer-events-none ..."` which permits click-through to underlying elements while the preloader is visible.
  - Overlay container lacks `role="status"` and `aria-live="polite"` for assistive technology.
  - Line 66 has `if (!isLoading) return null;` which unmounts the component immediately upon `setIsLoading(false)`, bypassing Framer Motion's `<AnimatePresence>` exit animation.

### 1.2 R2.1 & R3.1: `src/components/providers/SmoothScroller.tsx`
- **Location**: `src/components/providers/SmoothScroller.tsx:4, 11-66`
- **Current State**:
  - Deprecated package import at line 4: `import Lenis from '@studio-freight/lenis';`.
  - `package.json` contains `"@studio-freight/lenis": "^1.0.42"`.
  - `useEffect` initializes Lenis unconditionally without checking `prefers-reduced-motion`. Users with vestibular disorders or reduced-motion OS settings experience forced smooth scrolling animations.

### 1.3 R2.2: `src/components/ui/PageTransition.tsx`
- **Location**: `src/components/ui/PageTransition.tsx:25-40, 68-93, 134`
- **Current State**:
  - `startTransition` creates an interval `tick = setInterval(...)` and returns `() => clearInterval(tick)`. At line 86, `startTransition()` is called without saving or tracking the return value, leading to orphaned interval leaks if rapid navigations occur before progress reaches 85%.
  - Click listener at lines 75-88 intercepts any internal link (`href.startsWith('/')`) where `href !== pathname`. For same-page anchor links (e.g. `/#curriculum` or `/programs/ai-engineer#curriculum`), `isSamePage` evaluates to `false`, triggering `startTransition()`. Because the pathname does not change on same-page hash jumps, `completeTransition` never fires and the progress bar gets stuck at 85%.
  - Screen fade overlay at line 134 uses `bg-[#071340]/20` without light-mode adaptation.

### 1.4 R2.3: `src/components/ui/CustomCursor.tsx`
- **Location**: `src/components/ui/CustomCursor.tsx:33-47, 49-57, 59-63`
- **Current State**:
  - `handleMouseOver` executes `window.getComputedStyle(target).cursor === 'pointer'` on every `mouseover` event across the entire document. This triggers synchronous layout recalculations / style recalculations (layout thrashing) on cursor movement.
  - No `mouseleave` or `mouseenter` listeners on `document.documentElement`, causing the custom cursor to remain frozen at the edge when the mouse leaves the browser viewport.
  - `useEffect` at line 57 includes `isVisible` in its dependency array, causing all event listeners to unbind and rebind every time cursor visibility toggles.

### 1.5 R2.4: `src/components/sections/TestimonialsSection.tsx`
- **Location**: `src/components/sections/TestimonialsSection.tsx:7-39, 48-57, 110-170`
- **Current State**:
  - `TestimonialCard` already has `role="button"`, `tabIndex={0}`, and `onKeyDown` (handling Enter and Space).
  - Review detail modal has `role="dialog"`, `aria-modal="true"`, `aria-labelledby="modal-reviewer-name"`, container `onKeyDown` handling Escape, and a global `keydown` listener for Escape.
  - Star ratings in cards and modal have `role="img"` with `aria-label="5 out of 5 stars"` and `<span aria-hidden="true">{'★'.repeat(5)}</span>`.
  - Section is fully compliant with R2.4 requirements.

---

## 2. Logic Chain

1. **R1 Hydration & Accessibility**:
   - `useState(true)` guarantees identical initial state on both SSR and client hydration.
   - A mount `useEffect` (`[]`) runs strictly on the client after hydration is complete. If `sessionStorage.getItem('sp_visited')` is set, it calls `setIsLoading(false)` to skip the preloader without causing a hydration mismatch.
   - Changing `pointer-events-none` to `pointer-events-auto` blocks user interactions until the preloader completes or unmounts.
   - Adding `role="status"` and `aria-live="polite"` announces dynamic loading updates to screen readers.
   - Removing `if (!isLoading) return null;` allows `<AnimatePresence>` to manage unmounting smoothly after exit animation finishes.

2. **R2.1 & R3.1 Reduced Motion & Lenis Import**:
   - Checking `window.matchMedia('(prefers-reduced-motion: reduce)').matches` at the start of `useEffect` exits early before initializing Lenis, preserving native browser scrolling for users with motion sensitivity.
   - Since `package.json` specifies `"@studio-freight/lenis"`, adding `// TODO: migrate to 'lenis' package` satisfies R3.1 without introducing breaking package manager changes.

3. **R2.2 Page Transition Robustness**:
   - Tracking the interval cleanup returned by `startTransition()` via a `useRef` and calling it before starting a new transition and inside `useEffect` cleanup guarantees no orphaned timers.
   - Inspecting the path portion of `href` before `#` (i.e. `href.split('#')[0]`) and comparing it against `pathname` identifies same-page anchor links and prevents triggering stuck transitions.
   - Updating overlay classes to `bg-black/10 dark:bg-[#071340]/20` provides proper contrast in both light and dark themes.

4. **R2.3 Custom Cursor Performance & Viewport Bounds**:
   - Replacing `window.getComputedStyle(target)` with `target.closest('a, button, [role="button"], input, select, textarea, [tabindex]') !== null` eliminates synchronous style recalculations while accurately detecting interactive elements.
   - Adding `mouseleave` and `mouseenter` handlers on `document.documentElement` toggles `isVisible` to hide the cursor when leaving the window and restore it upon re-entry.
   - Removing `isVisible` from the main `useEffect` dependencies keeps event listeners attached without unnecessary re-subscription churn.

5. **R2.4 Testimonials Accessibility**:
   - Verified that `role="button"`, `tabIndex={0}`, keyboard navigation (`Enter`/`Space`), modal dialog semantics (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`), Escape listener, and `role="img"` on star ratings are properly implemented.

---

## 3. Caveats

1. **SessionStorage Access Security**:
   - Accessing `sessionStorage` can throw `SecurityError` in restricted environments (e.g. sandboxed iframes, private browsing modes with strict storage partitioning). All `sessionStorage` reads and writes must remain enclosed in `try / catch` blocks.
2. **Reduced Motion Dynamic Toggles**:
   - `SmoothScroller` checks `prefers-reduced-motion` on mount. If a user switches OS settings while on the page, the setting takes effect on the next reload/navigation.
3. **Internal URL Parsing**:
   - When detecting same-page hash links in `PageTransition`, links may be relative (`#curriculum`, `/#curriculum`, `/programs/ai-engineer#curriculum`) or absolute (`https://skillpedia.co.in/programs/ai-engineer#curriculum`). The logic strips `window.location.origin` before splitting on `#`.

---

## 4. Conclusion & Precise Code Modifications

### 4.1 `src/components/ui/Preloader.tsx`
```tsx
"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOADING_STEPS = [
  "ESTABLISHING SECURE CONNECTION...",
  "INITIALIZING NEURAL PATHWAYS...",
  "SYNCING KNOWLEDGE BASE...",
  "BOOTING SKILLPEDIA OS..."
];

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check sessionStorage on mount (client only) to avoid SSR hydration mismatch
    try {
      if (sessionStorage.getItem('sp_visited')) {
        setIsLoading(false);
        return;
      }
    } catch {
      // Ignore sessionStorage access errors (e.g. private browsing mode)
    }

    // Lock scroll during initial brief load
    document.body.style.overflow = 'hidden';

    // Streamlined non-blocking progress (350ms total)
    const duration = 350;
    const interval = 35;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(currentProgress);

      // Update text step based on progress
      if (currentProgress < 25) setStepIndex(0);
      else if (currentProgress < 50) setStepIndex(1);
      else if (currentProgress < 75) setStepIndex(2);
      else setStepIndex(3);

      if (currentStep >= steps) {
        clearInterval(timer);
        try {
          sessionStorage.setItem('sp_visited', 'true');
        } catch {
          // Ignore sessionStorage errors
        }
        document.body.style.overflow = 'unset';
        setIsLoading(false);
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.02,
            filter: "blur(6px)",
            transition: { duration: 0.4, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] pointer-events-auto flex flex-col items-center justify-center bg-[#071340] overflow-hidden"
        >
          {/* Futuristic background glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0.3 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              className="w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#3B82F6] rounded-full blur-[100px]"
            />
          </div>

          <div className="relative flex flex-col items-center z-10 w-full max-w-md px-6">
            
            {/* SVG AI Core Graphic */}
            <div className="relative w-28 h-28 mb-8">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                {/* Outer Ring */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#132B7A"
                  strokeWidth="1"
                />
                
                {/* Rotating Dashed Ring */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#FF7A00"
                  strokeWidth="1.5"
                  strokeDasharray="4 8"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "50% 50%" }}
                />

                {/* Inner Hexagon / Node Pattern */}
                <motion.path
                  d="M50 15 L80 32 L80 68 L50 85 L20 68 L20 32 Z"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {/* Connecting Inner Lines */}
                <motion.path
                  d="M50 15 L50 85 M20 32 L80 68 M20 68 L80 32"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
                />

                {/* Center Core */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="6"
                  fill="#FF7A00"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="12"
                  fill="none"
                  stroke="#FF7A00"
                  strokeWidth="1"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.5], opacity: [1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                />
              </svg>
            </div>

            {/* Step Text */}
            <div className="h-6 mb-4 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={stepIndex}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="font-[family-name:var(--font-mono-code)] text-xs md:text-sm text-[#60A5FA] tracking-widest text-center"
                >
                  {LOADING_STEPS[stepIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              {/* Progress Bar Fill */}
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

### 4.2 `src/components/providers/SmoothScroller.tsx`
```tsx
"use client";

import { useEffect, useRef } from 'react';
// TODO: migrate to 'lenis' package
import Lenis from '@studio-freight/lenis';
import { usePathname } from 'next/navigation';

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Skip Lenis initialization if user prefers reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    
    lenisRef.current = lenis;

    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    // Observe body height changes to fix scroll lock on client-side navigation or dynamic content load
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    resizeObserver.observe(document.body);

    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || !href.includes('#')) return;

      const [path, hash] = href.split('#');
      const isCurrentPage = !path || (path === '/' && window.location.pathname === '/') || path === window.location.pathname;

      if (isCurrentPage && hash) {
        const elem = document.getElementById(hash);
        if (elem) {
          e.preventDefault();
          lenis.scrollTo(elem, { offset: -80 });
          window.history.pushState(null, '', href);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        const elem = document.getElementById(id);
        if (elem) {
          setTimeout(() => {
            lenisRef.current?.scrollTo(elem, { offset: -80 });
          }, 150);
          return;
        }
      }
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
}
```

### 4.3 `src/components/ui/PageTransition.tsx`
```tsx
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

/**
 * PageTransition — a subtle top progress bar + soft screen fade
 * that fires on every Next.js client-side navigation.
 *
 * It hooks into pathname / searchParams changes to detect route
 * transitions without relying on deprecated Router events.
 */
export default function PageTransition() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const isMounted = useRef(false);
  const transitionCleanupRef = useRef<(() => void) | null>(null);

  // Track route changes
  const currentUrl = `${pathname}?${searchParams?.toString() ?? ""}`;

  const startTransition = useCallback(() => {
    setIsTransitioning(true);
    setProgress(0);

    // Quickly animate progress to ~85%, then hold
    let step = 0;
    const tick = setInterval(() => {
      step++;
      // Fast ramp to 85 then slow crawl
      const p = Math.min(85, step * 12);
      setProgress(p);
      if (p >= 85) clearInterval(tick);
    }, 40);

    return () => clearInterval(tick);
  }, []);

  const completeTransition = useCallback(() => {
    if (transitionCleanupRef.current) {
      transitionCleanupRef.current();
      transitionCleanupRef.current = null;
    }
    setProgress(100);
    // Let the bar visually finish, then hide
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
      setProgress(0);
    }, 350);
    return () => clearTimeout(timeout);
  }, []);

  // Detect navigation by watching the URL change
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    if (isTransitioning) {
      const raf = requestAnimationFrame(() => {
        completeTransition();
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [currentUrl, completeTransition, isTransitioning]);

  // Intercept link clicks to start the transition early
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Only intercept internal links that would cause a route change
      const isInternal =
        href.startsWith("/") || href.startsWith("#") || href.startsWith(window.location.origin);

      const relativeHref = href.startsWith(window.location.origin)
        ? href.slice(window.location.origin.length)
        : href;

      const [pathPortion] = relativeHref.split("#");
      const isSamePage = relativeHref === pathname || relativeHref === currentUrl;
      const isSamePageHash =
        relativeHref.includes("#") &&
        (!pathPortion || pathPortion === pathname);

      const isNewTab =
        anchor.target === "_blank" ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey;

      if (isInternal && !isSamePage && !isSamePageHash && !isNewTab) {
        if (transitionCleanupRef.current) {
          transitionCleanupRef.current();
        }
        transitionCleanupRef.current = startTransition();
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      if (transitionCleanupRef.current) {
        transitionCleanupRef.current();
        transitionCleanupRef.current = null;
      }
    };
  }, [pathname, currentUrl, startTransition]);

  return (
    <>
      {/* ── Top Progress Bar ── */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed top-0 left-0 right-0 z-[9999] h-[2.5px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.1 } }}
          >
            {/* Track background */}
            <div className="absolute inset-0 bg-white/5" />

            {/* Active bar */}
            <motion.div
              className="h-full bg-gradient-to-r from-[#FF7A00] via-[#FF9E40] to-[#FF7A00] shadow-[0_0_12px_rgba(255,122,0,0.5)]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{
                duration: progress < 85 ? 0.15 : 0.3,
                ease: "easeOut",
              }}
            />

            {/* Glow pulse at the tip */}
            <motion.div
              className="absolute top-0 h-full w-24 bg-gradient-to-r from-transparent to-[#FF7A00]/40 blur-sm"
              animate={{ left: `${progress - 6}%` }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Subtle Screen Fade ── */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-[9998] pointer-events-none bg-black/10 dark:bg-[#071340]/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
```

### 4.4 `src/components/ui/CustomCursor.tsx`
```tsx
"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for instant inner dot position (Zero React Re-renders on mousemove)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for trailing outer ring
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show custom cursor on devices with a mouse (pointer: fine)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || typeof target.closest !== 'function') return;
      const isInteractive = target.closest(
        'a, button, [role="button"], input, select, textarea, [tabindex]'
      ) !== null;
      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [cursorX, cursorY]);

  useEffect(() => {
    if (isVisible) {
      document.documentElement.classList.add('custom-cursor-active');
    } else {
      document.documentElement.classList.remove('custom-cursor-active');
    }
    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer trailing ring (Gradient) */}
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
            padding: '2px', // Border width
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
          scale: isHovering ? 0 : 1, // Shrink dot on hover to focus on the expanded ring
        }}
        transition={{
          scale: { type: 'spring', stiffness: 300, damping: 20 }
        }}
      />
    </>
  );
}
```

### 4.5 `src/components/sections/TestimonialsSection.tsx`
- Currently already contains complete implementations of:
  - `role="button"`, `tabIndex={0}`, and `onKeyDown` on `TestimonialCard`
  - `role="dialog"`, `aria-modal="true"`, `aria-labelledby="modal-reviewer-name"`, Escape key listener on Modal
  - `role="img"` and `aria-label="5 out of 5 stars"` on star ratings
- Confirmed 100% compliant with R2.4.

---

## 5. Verification Method

To independently verify these changes:
1. **Type & Lint Check**:
   ```bash
   npm run lint
   npm run build
   ```
2. **Preloader Hydration Verification**:
   - Set `sessionStorage.setItem('sp_visited', 'true')` in browser console, hard refresh (`Cmd+Shift+R`). Verify no React hydration mismatch error appears in browser console, and preloader unmounts without flashing.
   - Clear `sessionStorage.removeItem('sp_visited')`, refresh. Verify preloader animates progress from 0% to 100%, text steps cycle cleanly, and overlay prevents click-through until finished.
3. **SmoothScroller Reduced Motion**:
   - In Chrome DevTools > Rendering > Emulate CSS media feature `prefers-reduced-motion: reduce`.
   - Verify page scrolls natively without Lenis smooth inertia interpolation.
4. **PageTransition Hash Links & Interval Cleanup**:
   - Navigate to `/programs/ai-engineer#curriculum` from within `/programs/ai-engineer`.
   - Verify progress bar transition is NOT triggered for same-page hash jump and does not get stuck at 85%.
   - Click a link to `/about`. Verify progress bar animates to 100% and fades out upon route change.
5. **CustomCursor Performance & Bounds**:
   - Move mouse outside the viewport. Verify cursor disappears and `custom-cursor-active` class is removed from `<html>`.
   - Hover over buttons, links, inputs, and tabindexed elements. Verify outer ring expands smoothly without triggering `getComputedStyle` forced reflows.
