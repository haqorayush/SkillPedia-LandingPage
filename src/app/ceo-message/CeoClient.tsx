'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageSquareQuote, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function CeoClient() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className="min-h-screen bg-white dark:bg-[#071340]">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-[#0B1F5E] dark:to-[#071340]" />
          <motion.div 
            style={{ y, opacity }}
            className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-[#FF7A00]/10 dark:bg-[#FF7A00]/20 blur-[100px] pointer-events-none"
          />
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
            className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-[100px] pointer-events-none"
          />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-sm font-semibold mb-6">
              <MessageSquareQuote className="w-4 h-4" />
              <span>A Letter from Leadership</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight font-[family-name:var(--font-heading)]">
              Message from <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#3B82F6]">the CEO</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Building the future of tech, one engineer at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Message Content Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#0B1F5E]/30 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* CEO Profile Frame */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/3 flex-shrink-0 sticky top-32"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6] to-[#FF7A00] rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative bg-white dark:bg-[#0B1F5E] p-4 rounded-3xl border border-gray-100 dark:border-white/5 shadow-2xl">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-[#071340] relative">
                    <Image 
                      src="/images/team/Dharmendra.webp" 
                      alt="Dharmendra Kumar Pandey"
                      fill
                      sizes="(max-width: 1024px) 100vw, 384px"
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Dharmendra K. Pandey</h2>
                    <p className="text-[#FF7A00] font-medium">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* The Letter */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-2/3 bg-white dark:bg-[#0B1F5E] rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-white/5 shadow-xl relative"
            >
              <MessageSquareQuote className="absolute top-8 right-8 w-24 h-24 text-gray-100 dark:text-white/5 -z-0" />
              
              <div className="relative z-10 prose prose-lg dark:prose-invert prose-indigo">
                <p className="text-2xl text-gray-900 dark:text-white font-medium mb-8 leading-relaxed">
                  Welcome to SkillPedia.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  When we started this journey, we saw a distinct gap between the theoretical knowledge taught in universities and the rigorous, practical skills demanded by top-tier tech companies. We founded SkillPedia with a singular mission: to bridge that gap.
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Our philosophy is simple. We don&apos;t just teach you how to write code; we teach you how to think like an engineer, how to architect robust solutions, and how to communicate your ideas effectively. Whether you are learning Full Stack Engineering, diving into AI & ML, mastering Software Testing, or refining your soft skills in our Career Acceleration program, you are getting an elite, production-grade education.
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  The tech industry moves incredibly fast, and staying relevant requires continuous innovation. That is why our curriculum is constantly evolving, taught by industry veterans who are actively working on modern solutions. We treat our students like professionals from day one.
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                  I am incredibly proud of the community we are building here. When you join SkillPedia, you aren&apos;t just taking a course—you are taking a definitive step toward a thriving, lifelong career in technology. Let&apos;s build the future together.
                </p>

                <div className="border-t border-gray-200 dark:border-white/10 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    {/* Simulated signature font if possible, or clean text */}
                    <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-gray-900 dark:text-white">D. K. Pandey</p>
                    <p className="text-gray-500 dark:text-gray-400">Founder & CEO, SkillPedia</p>
                  </div>
                  <Link 
                    href="/programs" 
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
                  >
                    View Our Programs
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}
