"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';

const LOADING_STEPS = [
  "ESTABLISHING SECURE CONNECTION...",
  "INITIALIZING NEURAL PATHWAYS...",
  "SYNCING KNOWLEDGE BASE...",
  "BOOTING SKILLPEDIA OS..."
];

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);
  
  // High-performance motion values for progress tracking
  const progress = useMotionValue(0);
  const progressWidth = useTransform(progress, (v) => `${v}%`);
  const progressText = useTransform(progress, (v) => `${Math.round(v)}%`);

  useEffect(() => {
    // Check sessionStorage on mount (client only) to avoid SSR hydration mismatch
    try {
      if (sessionStorage.getItem('sp_visited')) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsLoading(false);
        return;
      }
    } catch {
      // Ignore sessionStorage access errors (e.g. private browsing mode)
    }

    // Lock scroll during initial brief load
    document.body.style.overflow = 'hidden';

    // Start 2.5s hardware-accelerated animation
    const controls = animate(progress, 100, {
      duration: 2.5,
      ease: "linear",
      onUpdate: (latest) => {
        // Only update React state (stepIndex) 4 times total, not every frame
        if (latest < 25) setStepIndex(0);
        else if (latest < 50) setStepIndex(1);
        else if (latest < 75) setStepIndex(2);
        else setStepIndex(3);
      },
      onComplete: () => {
        try {
          sessionStorage.setItem('sp_visited', 'true');
        } catch {
          // Ignore sessionStorage errors
        }
        // Trigger the exit animation. (Scroll is unlocked after exit finishes)
        setIsLoading(false);
      }
    });

    return () => {
      controls.stop();
      // Failsafe cleanup in case component unmounts early
      document.body.style.overflow = 'unset';
    };
  }, [progress]);

  const handleAnimationComplete = () => {
    // Unlock scroll only AFTER the exit animation finishes
    if (!isLoading) {
      document.body.style.overflow = 'unset';
    }
  };

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
          onAnimationComplete={handleAnimationComplete}
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
                style={{ width: progressWidth }}
              />
            </div>

            {/* Percentage */}
            <div className="mt-3 w-full flex justify-between items-center text-[10px] text-gray-500 font-[family-name:var(--font-mono-code)]">
              <span>SYSTEM.INIT</span>
              <motion.span>{progressText}</motion.span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
