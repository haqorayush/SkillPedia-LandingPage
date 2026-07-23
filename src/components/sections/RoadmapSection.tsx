"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ROADMAP_MONTHS } from "@/lib/constants";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" as const,
      staggerChildren: 0.1,
      delayChildren: 0.2
    } 
  }
};

const topicVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

export default function RoadmapSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="roadmap" className="scroll-mt-24 py-24 bg-[var(--gray-50)] dark:bg-[#071340] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading-display)] text-[#0B1F5E] dark:text-white">
            12-Week Engineering Roadmap
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 font-[family-name:var(--font-body)] text-lg max-w-2xl mx-auto">
            A structured path from fundamentals to a production-ready software engineer.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Central Animated Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-white/10 transform md:-translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              style={{ transformOrigin: "top", scaleY }}
              className="w-full h-full bg-gradient-to-b from-[#3B82F6] via-[#FF7A00] to-[#10B981]"
            />
          </div>

          <div className="space-y-24">
            {ROADMAP_MONTHS.map((month, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={month.id} className="relative flex flex-col md:flex-row items-center w-full">
                  
                  {/* Timeline Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                    className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white dark:border-[#071340] shadow-lg flex items-center justify-center z-20 font-[family-name:var(--font-mono-code)] font-bold text-white text-lg"
                    style={{ backgroundColor: month.color }}
                  >
                    {month.month}
                  </motion.div>

                  {/* Desktop Layout - Alternating Cards */}
                  <div className={`hidden md:flex w-full ${isEven ? 'justify-start' : 'justify-end'}`}>
                    <motion.div 
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      className={`w-[45%] bg-white dark:bg-[#0B1F5E] rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-blue-500/20 hover:shadow-2xl dark:hover:border-blue-500/40 transition-shadow ${isEven ? 'mr-auto' : 'ml-auto'}`}
                    >
                      <div className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4 font-[family-name:var(--font-mono-code)]" style={{ color: month.color, backgroundColor: `${month.color}20` }}>
                        Month {month.month}
                      </div>
                      <h3 className="text-2xl font-bold text-[#0B1F5E] dark:text-white font-[family-name:var(--font-heading-display)] mb-1">
                        {month.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-300 font-medium mb-6 font-[family-name:var(--font-body)]">
                        {month.subtitle}
                      </p>
                      
                      <ul className="space-y-3 mb-8">
                        {month.topics.map((topic, i) => (
                          <motion.li key={i} variants={topicVariants} className="flex items-start gap-3">
                            <span className="mt-1" style={{ color: month.color }}>✦</span>
                            <span className="text-gray-700 dark:text-gray-300 font-[family-name:var(--font-body)]">{topic}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="bg-gray-50 dark:bg-[#071340]/60 rounded-xl p-4 border border-gray-100 dark:border-white/10 flex items-center gap-3">
                        <span className="text-2xl">🏆</span>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold">Outcome</p>
                          <p className="text-[#0B1F5E] dark:text-white font-medium">{month.outcome}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden flex w-full pl-20">
                    <motion.div 
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      className="w-full bg-white dark:bg-[#0B1F5E] rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-blue-500/20"
                    >
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 font-[family-name:var(--font-mono-code)]" style={{ color: month.color, backgroundColor: `${month.color}20` }}>
                        Month {month.month}
                      </div>
                      <h3 className="text-xl font-bold text-[#0B1F5E] dark:text-white font-[family-name:var(--font-heading-display)] mb-1">
                        {month.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-300 text-sm font-medium mb-5 font-[family-name:var(--font-body)]">
                        {month.subtitle}
                      </p>
                      
                      <ul className="space-y-2 mb-6">
                        {month.topics.map((topic, i) => (
                          <motion.li key={i} variants={topicVariants} className="flex items-start gap-2 text-sm">
                            <span className="mt-0.5" style={{ color: month.color }}>✦</span>
                            <span className="text-gray-700 dark:text-gray-300 font-[family-name:var(--font-body)]">{topic}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="bg-gray-50 dark:bg-[#071340]/60 rounded-xl p-3 border border-gray-100 dark:border-white/10 flex items-center gap-3">
                        <span className="text-xl">🏆</span>
                        <div>
                          <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold">Outcome</p>
                          <p className="text-[#0B1F5E] dark:text-white text-sm font-medium">{month.outcome}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
