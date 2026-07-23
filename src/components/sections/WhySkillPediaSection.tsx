"use client";

import { motion } from "framer-motion";
import { COMPARISON_TRADITIONAL, COMPARISON_SKILLPEDIA } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemLeftVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const itemRightVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, type: "spring" as const, stiffness: 100 } },
};

export default function WhySkillPediaSection() {
  return (
    <section id="why-skillpedia" className="scroll-mt-24 py-24 bg-white dark:bg-[#071340] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-[#0B1F5E] dark:text-white">
            Why SkillPedia?
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 font-[family-name:var(--font-body)] text-lg max-w-2xl mx-auto">
            We don&apos;t just teach theory. We build engineers who are ready to ship production code from day one.
          </p>
        </motion.div>

        <div className="relative flex flex-col md:flex-row gap-12 md:gap-8 lg:gap-16 items-stretch">
          
          {/* Traditional Learning Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 bg-gray-50 dark:bg-[#0B1F5E]/40 rounded-3xl p-8 border border-gray-200 dark:border-white/10"
          >
            <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-8 font-[family-name:var(--font-heading)] text-center">
              Traditional Learning
            </h3>
            <ul className="space-y-6">
              {COMPARISON_TRADITIONAL.map((item, index) => (
                <motion.li 
                  key={index} 
                  variants={itemLeftVariants}
                  className="flex items-center gap-4 text-gray-600 dark:text-gray-300 font-[family-name:var(--font-body)] p-4 rounded-xl bg-white dark:bg-[#071340]/60 shadow-sm border border-gray-100 dark:border-white/10 opacity-80 grayscale hover:grayscale-0 transition-all"
                >
                  <span className="text-2xl bg-gray-100 dark:bg-white/10 p-2 rounded-lg flex-shrink-0" aria-hidden="true">{item.icon}</span>
                  <span className="text-lg">{item.label}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* VS Badge (Desktop) */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
              className="w-16 h-16 rounded-full bg-white dark:bg-[#0B1F5E] border-4 border-[var(--gray-50)] dark:border-[#071340] shadow-xl flex items-center justify-center font-bold text-xl text-gray-400 dark:text-gray-300 font-[family-name:var(--font-heading)]"
            >
              VS
            </motion.div>
          </div>

          {/* VS Badge (Mobile) */}
          <div className="flex md:hidden justify-center -my-6 relative z-20">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-14 h-14 rounded-full bg-white dark:bg-[#0B1F5E] border-4 border-[var(--gray-50)] dark:border-[#071340] shadow-lg flex items-center justify-center font-bold text-lg text-gray-400 dark:text-gray-300"
            >
              VS
            </motion.div>
          </div>

          {/* SkillPedia Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-[#0B1F5E] dark:to-[#071340] rounded-3xl p-8 border border-blue-100 dark:border-blue-500/20 shadow-2xl dark:shadow-[0_0_30px_rgba(59,130,246,0.2)] relative overflow-hidden"
          >
            {/* Winning subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400/10 blur-[80px] rounded-full pointer-events-none transform-gpu will-change-transform" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 blur-[80px] rounded-full pointer-events-none transform-gpu will-change-transform" />
            
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0B1F5E] to-[#3B82F6] dark:from-white dark:to-blue-400 mb-8 font-[family-name:var(--font-heading)] text-center relative z-10">
              The SkillPedia Way
            </h3>
            
            <ul className="space-y-6 relative z-10">
              {COMPARISON_SKILLPEDIA.map((item, index) => (
                <motion.li 
                  key={index} 
                  variants={itemRightVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 text-[#0B1F5E] dark:text-white font-[family-name:var(--font-body)] font-medium p-4 rounded-xl bg-white/80 dark:bg-[#0B1F5E]/90 backdrop-blur-md shadow-md border border-white/50 dark:border-blue-500/20"
                >
                  <span className="text-2xl bg-blue-100 dark:bg-blue-500/20 p-2 rounded-lg flex-shrink-0 shadow-sm" aria-hidden="true">{item.icon}</span>
                  <span className="text-lg">{item.label}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
