'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Eye, Target, Sparkles, GraduationCap, ShieldCheck, Lightbulb } from 'lucide-react';

const CORE_VALUES = [
  {
    icon: <Sparkles className="w-8 h-8 text-[#FF7A00]" />,
    title: "Excellence",
    description: "Setting an uncompromising bar for code quality, architectural design, and professional standards."
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-[#3B82F6]" />,
    title: "Mentorship",
    description: "Providing 1-on-1, personalized guidance from industry veterans to accelerate individual growth."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-teal-500" />,
    title: "Integrity",
    description: "Maintaining total transparency in our teaching methodologies, career support, and student outcomes."
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-rose-500" />,
    title: "Innovation",
    description: "Continuously updating our curriculum to teach the absolute latest and most relevant tech stacks."
  }
];

export default function VisionMissionClient() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className="min-h-screen bg-white dark:bg-[#071340]">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
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
              <Sparkles className="w-4 h-4" />
              <span>Our Purpose</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight font-[family-name:var(--font-heading)]">
              Our Vision & <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#3B82F6]">Mission</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Empowering the next generation of engineers to bridge the gap between academic theory and industry reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Split Section */}
      <section className="py-24 bg-gray-50 dark:bg-[#0B1F5E]/30 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
            
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-[#0B1F5E] rounded-3xl p-10 md:p-14 border border-gray-100 dark:border-white/5 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700" />
              
              <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-8 relative z-10 text-blue-600 dark:text-blue-400">
                <Eye className="w-8 h-8" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 relative z-10">Our Vision</h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
                To become the premier platform for engineering career acceleration globally, where every aspiring developer has the mentorship, tools, and real-world experience needed to innovate and lead in the tech industry.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-[#0B1F5E] rounded-3xl p-10 md:p-14 border border-gray-100 dark:border-white/5 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7A00]/10 dark:bg-[#FF7A00]/20 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700" />
              
              <div className="w-16 h-16 rounded-2xl bg-orange-50 dark:bg-[#FF7A00]/20 flex items-center justify-center mb-8 relative z-10 text-[#FF7A00]">
                <Target className="w-8 h-8" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 relative z-10">Our Mission</h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
                To deliver elite-level, practical training that transforms students into production-ready software engineers. We are committed to providing hands-on mentorship, cultivating soft skills, and ensuring our graduates are undeniably prepared for the demands of modern tech careers.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-[family-name:var(--font-heading)]">Core Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The foundational principles that guide every lecture we teach, every project we build, and every student we mentor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_VALUES.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-[#0B1F5E]/50 border border-gray-100 dark:border-white/5 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="mb-6 bg-gray-50 dark:bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
