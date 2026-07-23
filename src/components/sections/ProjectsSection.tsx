'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PROJECTS, PROJECT_CATEGORIES } from '@/lib/constants';

function ProjectCard({ project }: { project: typeof PROJECTS[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, borderTopColor: project.color || '#0B1F5E' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`relative bg-white dark:bg-[#0B1F5E] rounded-2xl p-6 flex flex-col gap-4 border-t-4 border-x border-b border-x-transparent border-b-transparent dark:border-x-white/10 dark:border-b-white/10 shadow-sm hover:shadow-xl dark:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-shadow duration-300`}
    >
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-gray-900 dark:text-white leading-tight">{project.title}</h3>
        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 dark:bg-blue-500/20 text-gray-600 dark:text-blue-200 flex-shrink-0">{project.category}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded-md">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="scroll-mt-24 py-24 bg-gray-50 dark:bg-[#071340] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-gray-900 dark:text-white mb-6">
            Project Showcase
          </h2>
          
          <div role="tablist" className="flex overflow-x-auto pb-4 gap-2 justify-start md:justify-center no-scrollbar">
            {PROJECT_CATEGORIES.map(category => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-[#FF7A00] text-white shadow-md'
                    : 'bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#0B1F5E]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: 1000 }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
