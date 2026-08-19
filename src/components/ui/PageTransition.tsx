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
