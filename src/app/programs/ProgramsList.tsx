'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROGRAMS_LIST } from '@/lib/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

export default function ProgramsList() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {PROGRAMS_LIST.map((program, index) => (
        <motion.div key={program.id} variants={itemVariants} className="h-full">
          <div 
            className="group relative bg-white dark:bg-[#0B1F5E] rounded-3xl p-8 flex flex-col h-full border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-2xl dark:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-500 overflow-hidden"
          >
            {/* Background Glow */}
            <div 
              className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20 pointer-events-none will-change-opacity"
              style={{ background: `radial-gradient(circle at top right, ${program.color}, transparent 60%)` }}
            />

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 border border-gray-100 dark:border-white/10 shadow-inner" style={{ backgroundColor: `${program.color}15` }}>
                {program.icon}
              </div>

              <Link href={program.href} className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A00] rounded-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-[#A3E635] transition-colors flex items-center justify-between font-[family-name:var(--font-heading)]">
                  {program.title}
                  <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </h2>
              </Link>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 flex-grow leading-relaxed">
                {program.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {program.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="text-xs font-medium px-3 py-1.5 rounded-full border bg-gray-50 border-gray-200 text-gray-700 dark:bg-white/5 dark:border-white/10 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
