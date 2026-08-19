'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '@/lib/constants';

function Counter({ end, suffix = '', duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const percent = Math.min(progress / duration, 1);
      // easeOutQuad
      const easeOut = percent * (2 - percent);
      const currentValue = Math.floor(easeOut * end);
      
      if (ref.current) {
        ref.current.textContent = `${currentValue}${suffix}`;
      }
      
      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
        if (ref.current) {
          ref.current.textContent = `${end}${suffix}`;
        }
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, isInView, suffix]);

  return (
    <span ref={ref} aria-label={`${end}${suffix}`} className="font-[family-name:var(--font-mono)]">
      {count}{suffix}
    </span>
  );
}

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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col items-center justify-center p-6 text-center ${index > 0 ? 'pt-8 md:pt-6' : ''}`}
            >
              <div className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-600 dark:text-blue-200 font-medium text-lg uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
