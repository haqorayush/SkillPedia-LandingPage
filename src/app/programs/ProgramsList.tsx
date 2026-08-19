'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import { PROGRAMS_LIST, CourseCategory, ProgramCourse } from '@/lib/constants';

type FilterCategory = 'All' | CourseCategory;

const CATEGORIES: { id: FilterCategory; label: string }[] = [
  { id: 'All', label: 'All' },
  { id: 'Core', label: 'Core' },
  { id: 'Development', label: 'Development' },
  { id: 'Testing', label: 'Testing' },
  { id: 'Communication', label: 'Communication' },
];

export default function ProgramsList() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All');

  // Dynamically calculate counts for all categories
  const categoryCounts = useMemo(() => {
    const counts: Record<FilterCategory, number> = {
      All: PROGRAMS_LIST.length,
      Core: 0,
      Development: 0,
      Testing: 0,
      Communication: 0,
      Career: 0,
    };
    PROGRAMS_LIST.forEach((prog) => {
      if (counts[prog.category as FilterCategory] !== undefined) {
        counts[prog.category as FilterCategory]++;
      }
    });
    return counts;
  }, []);

  const filteredPrograms = useMemo(() => {
    if (selectedCategory === 'All') return PROGRAMS_LIST;
    return PROGRAMS_LIST.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="w-full space-y-12">
      {/* Interactive Category Filter Tabs */}
      <div className="flex flex-col items-center justify-center">
        <div
          role="tablist"
          aria-label="Filter programs by category"
          className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-gray-100/80 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-gray-200/80 dark:border-white/10 shadow-inner"
        >
          {CATEGORIES.map((cat) => {
            const count = categoryCounts[cat.id];
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative min-h-[44px] px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A00] ${
                  isActive
                    ? 'text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryTab"
                    className="absolute inset-0 bg-[#FF7A00] rounded-xl shadow-lg shadow-[#FF7A00]/25"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 font-semibold">{cat.label}</span>
                <span
                  className={`relative z-10 text-xs px-2 py-0.5 rounded-full transition-colors ${
                    isActive
                      ? 'bg-white/20 text-white font-bold'
                      : 'bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-400 font-medium'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Animated Course Cards Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredPrograms.map((program: ProgramCourse) => (
            <motion.div
              layout
              key={program.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="h-full"
            >
              <div className="group relative bg-white dark:bg-[#0B1F5E] rounded-3xl p-7 md:p-8 flex flex-col h-full border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-2xl dark:shadow-[0_0_30px_rgba(59,130,246,0.12)] transition-all duration-500 overflow-hidden">
                {/* Background Glow on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none will-change-opacity"
                  style={{
                    background: `radial-gradient(circle at top right, ${program.color}, transparent 65%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Row: Icon, Category Badge & Duration Badge */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    {/* Icon Container */}
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border border-gray-100 dark:border-white/10 shadow-inner flex-shrink-0 overflow-hidden relative"
                      style={{ backgroundColor: `${program.color}15` }}
                    >
                      {program.icon?.startsWith('/') || program.icon?.startsWith('http') ? (
                        <Image src={program.icon} alt={program.title} fill className="object-contain p-3" unoptimized />
                      ) : (
                        <span>{program.icon}</span>
                      )}
                    </div>

                    {/* Badges Column */}
                    <div className="flex flex-col items-end gap-1.5">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full border tracking-wide uppercase"
                        style={{
                          backgroundColor: `${program.color}10`,
                          borderColor: `${program.color}30`,
                          color: program.color,
                        }}
                      >
                        {program.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10">
                        <Clock className="w-3 h-3 text-[#FF7A00]" />
                        {program.duration}
                      </span>
                    </div>
                  </div>

                  {/* Course Title with Hover Arrow Transition */}
                  <Link
                    href={program.href}
                    className="block group/link mb-3 outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A00] rounded-lg"
                  >
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#A3E635] transition-colors flex items-start justify-between gap-2 font-[family-name:var(--font-heading)] leading-snug">
                      <span>{program.title}</span>
                      <ArrowUpRight className="w-5 h-5 flex-shrink-0 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-[#A3E635] opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 mt-1" />
                    </h2>
                  </Link>

                  {/* Level Indicator */}
                  <div className="mb-3">
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Level: <span className="text-gray-700 dark:text-gray-300 font-semibold">{program.level}</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-6 flex-grow leading-relaxed line-clamp-3">
                    {program.description}
                  </p>

                  {/* Tags and Direct Link */}
                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {program.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2.5 py-1 rounded-full border bg-gray-50 border-gray-200 text-gray-700 dark:bg-white/5 dark:border-white/10 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={program.href}
                      className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-[#A3E635] group-hover:translate-x-1 transition-transform duration-200"
                    >
                      View Program Details
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {filteredPrograms.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full text-center py-16"
            >
              <p className="text-gray-500 dark:text-gray-400 text-lg">No programs found in this category.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
