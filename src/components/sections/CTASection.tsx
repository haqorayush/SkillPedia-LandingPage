'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  const [particles, setParticles] = useState<Array<{width: string; height: string; left: string; top: string; duration: number}>>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(
      [...Array(6)].map(() => ({
        width: Math.random() * 20 + 10 + 'px',
        height: Math.random() * 20 + 10 + 'px',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        duration: Math.random() * 10 + 10,
      }))
    );
  }, []);
  return (
    <section id="contact" className="scroll-mt-24 relative py-32 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-[#0B1F5E] dark:via-[#0A194A] dark:to-[#071340] border-y border-gray-200/60 dark:border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FF7A00] rounded-full filter blur-[128px] opacity-20 transform-gpu will-change-transform"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#3B82F6] rounded-full filter blur-[128px] opacity-20 transform-gpu will-change-transform"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      {/* Floating Particles (CSS only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((style, i) => (
          <motion.div
            key={i} // Static decorative particles that never reorder
            className="absolute rounded-full bg-blue-500/20 dark:bg-white/10 transform-gpu will-change-transform"
            style={{
              width: style.width,
              height: style.height,
              left: style.left,
              top: style.top,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: style.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] text-gray-900 dark:text-white mb-6 tracking-tight">
            Your Engineering Career Starts Here.
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-200 mb-12 max-w-2xl font-light">
            Join the community of elite developers and accelerate your journey with industry-aligned projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/apply"
                className="inline-block px-8 py-4 bg-[#FF7A00] text-white rounded-xl font-semibold text-lg transition-transform duration-300 shadow-[0_0_20px_rgba(255,122,0,0.4)] hover:shadow-[0_0_30px_rgba(255,122,0,0.6)] text-center cursor-pointer"
              >
                Apply Now
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
