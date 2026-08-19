'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Compass,
  ArrowLeft,
  BookOpen,
  Sparkles,
  Users,
  Target,
  ArrowRight,
} from 'lucide-react';

const QUICK_LINKS = [
  {
    title: 'Explore Programs',
    description: 'Browse all 33 full-stack, QA, and communication courses.',
    href: '/programs',
    icon: BookOpen,
    color: 'from-blue-500/20 to-indigo-500/20 text-blue-500 dark:text-blue-400',
  },
  {
    title: 'Admissions & Apply',
    description: 'Submit your application for the upcoming training cohort.',
    href: '/apply',
    icon: Sparkles,
    color: 'from-orange-500/20 to-amber-500/20 text-[#FF7A00]',
  },
  {
    title: 'Meet Our Team',
    description: 'Discover the industry veterans leading our mentorship.',
    href: '/team',
    icon: Users,
    color: 'from-teal-500/20 to-emerald-500/20 text-teal-500 dark:text-teal-400',
  },
  {
    title: 'Vision & Mission',
    description: 'Learn why SkillPedia bridges academia and industry.',
    href: '/vision-mission',
    icon: Target,
    color: 'from-purple-500/20 to-pink-500/20 text-purple-500 dark:text-purple-400',
  },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#071340] relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 font-[family-name:var(--font-body)]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-[#FF7A00]/10 dark:bg-[#FF7A00]/15 rounded-full blur-[110px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-[#FF7A00]/10 border border-orange-200 dark:border-[#FF7A00]/20 text-[#FF7A00] text-sm font-semibold mb-6"
          >
            <Compass className="w-4 h-4 animate-spin motion-reduce:animate-none" style={{ animationDuration: '10s' }} />
            <span>404 · Page Not Found</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-7xl sm:text-9xl font-black font-[family-name:var(--font-heading-display)] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-blue-600 to-[#3B82F6] dark:from-[#FF7A00] dark:via-blue-400 dark:to-cyan-400 mb-4"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight font-[family-name:var(--font-heading-display)]"
          >
            Lost in Code? Let&apos;s Get You Back on Track.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto"
          >
            The page or course you are looking for might have been relocated, renamed, or does not exist.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white font-semibold text-base transition-all shadow-lg shadow-[#FF7A00]/25 group cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              href="/programs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold text-base transition-all cursor-pointer"
            >
              <BookOpen className="w-5 h-5" />
              <span>Explore All Courses</span>
            </Link>
          </motion.div>
        </div>

        {/* Quick Navigation Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {QUICK_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-[#FF7A00]/50 dark:hover:border-[#FF7A00]/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-[#FF7A00] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center text-xs font-semibold text-[#FF7A00] gap-1 group-hover:gap-2 transition-all">
                  <span>Navigate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </main>
  );
}
