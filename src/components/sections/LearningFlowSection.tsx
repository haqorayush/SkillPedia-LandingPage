"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { LEARNING_STEPS } from "@/lib/constants";

function StepItem({ step, index, totalSteps, scrollYProgress }: { step: { id: string; title: string; description: string; icon: string; color: string; }, index: number, totalSteps: number, scrollYProgress: MotionValue<number> }) {
  const stepThreshold = index / (totalSteps - 1);
  const isLast = index === totalSteps - 1;
  
  // Step active state based on scroll
  const opacity = useTransform(scrollYProgress, 
    [stepThreshold - 0.2, stepThreshold], 
    [0.3, 1]
  );
  
  const scale = useTransform(scrollYProgress, 
    [stepThreshold - 0.2, stepThreshold], 
    [0.8, 1]
  );

  return (
    <motion.div 
      className="relative flex flex-row md:flex-col items-center md:text-center w-full md:w-32 z-10 gap-6 md:gap-0"
      style={{ opacity }}
    >
      <motion.div 
        style={{ scale }}
        className={`w-20 h-20 flex-shrink-0 rounded-full flex items-center justify-center text-3xl md:mb-6 shadow-lg border-4 border-white dark:border-[#071340] transition-colors duration-500 relative ${isLast ? 'shadow-green-400/50' : ''}`}
        initial={{ backgroundColor: "#F3F4F6" }}
        whileInView={{ backgroundColor: step.color }}
        viewport={{ once: true }}
      >
        {step.icon}
        {isLast && (
          <motion.div 
            className="absolute inset-0 bg-green-400/30 rounded-full blur-md md:-inset-4 md:bg-green-400/20 md:blur-xl -z-10"
            animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.div>
      
      <div>
        <h3 className="text-xl md:text-lg font-bold text-[#0B1F5E] dark:text-white font-[family-name:var(--font-heading)] mb-1 md:mb-2">
          {step.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 font-[family-name:var(--font-body)] md:leading-tight">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function LearningFlowSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end center"],
  });

  return (
    <section id="learning-flow" className="py-24 bg-white dark:bg-[#071340] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-[#0B1F5E] dark:text-white">
            How Students Learn
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 font-[family-name:var(--font-body)] text-lg max-w-2xl mx-auto">
            Our proven methodology focuses on active building, not passive watching.
          </p>
        </motion.div>

        <div className="relative flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0 md:pb-12">
          {/* Connecting Line Base Desktop */}
          <div className="hidden md:block absolute top-10 left-12 right-12 h-1 bg-gray-100 dark:bg-white/10 rounded-full" />
          
          {/* Active Connecting Line Desktop */}
          <motion.div 
            className="hidden md:block absolute top-10 left-12 right-12 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full origin-left"
            style={{ scaleX: scrollYProgress }}
          />

          {/* Connecting Line Base Mobile */}
          <div className="md:hidden absolute left-[39px] top-8 bottom-8 w-1 bg-gray-100 dark:bg-white/10 rounded-full" />
          
          {/* Active Connecting Line Mobile */}
          <motion.div 
            className="md:hidden absolute left-[39px] top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          {LEARNING_STEPS.map((step, index) => (
            <StepItem 
              key={step.id} 
              step={step} 
              index={index} 
              totalSteps={LEARNING_STEPS.length} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
