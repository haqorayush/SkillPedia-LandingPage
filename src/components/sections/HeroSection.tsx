"use client";

import React, { Suspense, useState, useEffect } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import Three.js scene to avoid SSR issues
const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), { ssr: false });

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Normalize coordinates between -1 and 1
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const [particles, setParticles] = useState<Array<{width: string; height: string; left: string; top: string; animationDelay: string; animationDuration: string}>>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        width: Math.random() * 10 + 2 + 'px',
        height: Math.random() * 10 + 2 + 'px',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 10 + 10}s`,
      }))
    );
  }, []);

  const xTransform = useTransform(mouseX, [-1, 1], [-20, 20]);
  const yTransform = useTransform(mouseY, [-1, 1], [-20, 20]);

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden animated-gradient-mesh bg-[#0B1F5E] dark:bg-[#071340]"
      onMouseMove={handleMouseMove}
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {particles.map((style, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20 animate-float transform-gpu will-change-transform"
            style={{
              ...style,
              x: xTransform,
              y: yTransform,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center w-full">
        
        {/* Content Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center pt-20 lg:pt-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="flex flex-col items-start gap-6"
          >
            {/* Badge */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="px-4 py-1.5 rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-xl border border-white/20 dark:border-blue-500/30 text-white/90 dark:text-blue-200 text-sm font-medium"
            >
              India&apos;s Premier Engineering Platform
            </motion.div>

            {/* Heading */}
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-heading-display)] font-bold text-white dark:text-white leading-tight"
            >
              LEARN. UPSKILL. <span className="text-gradient-orange">GET HIRED.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg md:text-xl font-[family-name:var(--font-body)] text-white/70 dark:text-gray-300 max-w-xl"
            >
              Build real-world software. Master AI. Deploy production applications. Prepare for technical interviews. Launch your career.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
            >
              <motion.button 
                type="button"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 122, 0, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF7A00] text-white rounded-full px-8 py-4 font-medium"
              >
                Apply Now
              </motion.button>
              
              <motion.button 
                type="button"
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-white/30 dark:border-blue-400/40 text-white dark:text-blue-100 hover:bg-white/10 dark:hover:bg-blue-500/20 rounded-full px-8 py-4 font-medium transition-colors"
              >
                Explore Curriculum
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* 3D Scene Column */}
        <div className="w-full lg:w-1/2 absolute lg:relative inset-0 lg:inset-auto -z-10 lg:z-10 h-[60vh] lg:h-[80vh] opacity-30 lg:opacity-100 flex items-center justify-center">
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white/50">Loading 3D Scene...</div>}>
            <HeroScene />
          </Suspense>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
