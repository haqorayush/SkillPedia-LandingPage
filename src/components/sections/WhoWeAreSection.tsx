"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { WHO_WE_ARE } from "@/lib/constants";

function TiltCard({ item, index }: { item: typeof WHO_WE_ARE[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  
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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex flex-col items-center text-center p-8 rounded-3xl bg-white/70 dark:bg-[#0B1F5E]/90 backdrop-blur-xl border border-white/40 dark:border-blue-500/20 shadow-lg hover:shadow-2xl dark:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-shadow duration-300 w-full"
    >
      {/* 3D Inner Content translation */}
      <motion.div style={{ transform: "translateZ(50px)" }} className="flex flex-col items-center">
        <div aria-hidden="true" className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-3xl mb-6 shadow-inner">
          {item.icon}
        </div>
        <h3 className="text-2xl font-bold text-[#0B1F5E] dark:text-white mb-4 font-[family-name:var(--font-heading)]">
          {item.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 font-[family-name:var(--font-body)] leading-relaxed">
          {item.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function WhoWeAreSection() {
  return (
    <section id="about" className="scroll-mt-24 py-24 bg-[var(--gray-50)] dark:bg-[#071340] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[100px] transform-gpu will-change-transform pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-400/10 blur-[100px] transform-gpu will-change-transform pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-transparent bg-clip-text bg-gradient-to-r from-[#0B1F5E] to-[#3B82F6] dark:from-white dark:to-blue-400 inline-block">
            Who We Are
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#3B82F6] to-[#FF7A00] mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-[1000px]">
          {WHO_WE_ARE.map((item, index) => (
            <TiltCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
