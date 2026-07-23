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
    // Lock scroll
    document.body.style.overflow = 'hidden';

    // Simulate progress
    const duration = 2500; // total duration
    const interval = 50; // update every 50ms
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
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = 'unset';
        }, 400); // Brief pause at 100%
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
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)",
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#071340] overflow-hidden"
        >
          {/* Futuristic background glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0.3 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#3B82F6] rounded-full blur-[100px]"
            />
          </div>

          <div className="relative flex flex-col items-center z-10 w-full max-w-md px-6">
            
            {/* SVG AI Core Graphic */}
            <div className="relative w-32 h-32 mb-12">
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
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
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
                  transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Connecting Inner Lines */}
                <motion.path
                  d="M50 15 L50 85 M20 32 L80 68 M20 68 L80 32"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                />

                {/* Center Core */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="6"
                  fill="#FF7A00"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 1, delay: 1 }}
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
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1.2 }}
                />
              </svg>
            </div>

            {/* Step Text */}
            <div className="h-6 mb-4 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={stepIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
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
                layoutId="progress-bar"
              />
            </div>

            {/* Percentage */}
            <div className="mt-4 w-full flex justify-between items-center text-[10px] text-gray-500 font-[family-name:var(--font-mono-code)]">
              <span>SYSTEM.INIT</span>
              <span>{Math.round(progress)}%</span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
