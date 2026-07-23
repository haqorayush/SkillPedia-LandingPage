"use client";

import React, { useRef } from 'react';
import { CAREER_MILESTONES } from '@/lib/constants';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CareerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="careers" className="scroll-mt-24 py-24 bg-white dark:bg-[#071340] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6" ref={containerRef}>
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading-display)] text-gray-900 dark:text-white">
            Career Readiness
          </h2>
        </div>

        <div className="relative">
          {/* Progress Line Background */}
          <div className="absolute left-[27px] md:left-0 md:top-6 bottom-0 md:bottom-auto w-1 md:w-full h-full md:h-1 bg-gray-200 dark:bg-white/10 rounded-full" />
          
          {/* Animated Progress Line (Mobile) */}
          <motion.div 
            style={{ scaleY: scaleProgress, transformOrigin: "top" }}
            className="md:hidden absolute left-[27px] md:left-0 md:top-6 bottom-0 md:bottom-auto w-1 md:w-full h-full md:h-1 bg-gradient-to-b from-[#3B82F6] to-[#FF7A00] rounded-full z-0"
          />
          
          {/* Animated Progress Line (Desktop) */}
          <motion.div 
            style={{ scaleX: scaleProgress, transformOrigin: "left" }}
            className="hidden md:block absolute left-[27px] md:left-0 md:top-6 bottom-0 md:bottom-auto w-1 md:w-full h-full md:h-1 bg-gradient-to-r from-[#3B82F6] to-[#FF7A00] rounded-full z-0"
          />

          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-4 relative z-10">
            {CAREER_MILESTONES.map((milestone, index) => {
              const isLast = index === CAREER_MILESTONES.length - 1;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex md:flex-col items-start md:items-center gap-6 md:gap-4 flex-1 md:text-center group"
                >
                  <motion.div 
                    initial={{ borderColor: "#E5E7EB" }}
                    whileInView={{ borderColor: milestone.color }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 rounded-full flex items-center justify-center bg-white dark:bg-[#0B1F5E] border-4 shadow-sm dark:border-[#0B1F5E] transition-transform duration-300 ${isLast ? 'shadow-[0_0_20px_rgba(255,122,0,0.5)]' : ''}`}
                  >
                    <span className="text-xl font-bold text-gray-800 dark:text-white">{index + 1}</span>
                  </motion.div>
                  
                  <div>
                    <h3 className="text-lg font-bold font-[family-name:var(--font-heading-display)] text-gray-900 dark:text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-[200px] mx-auto font-[family-name:var(--font-body)]">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
