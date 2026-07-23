'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/constants';

function TestimonialCard({ testimonial, onClick }: { testimonial: typeof TESTIMONIALS[number], onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`flex-shrink-0 w-[350px] p-6 rounded-2xl bg-white/60 dark:bg-[#0B1F5E]/80 backdrop-blur-md border border-white/40 dark:border-blue-500/20 shadow-lg dark:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-transform hover:scale-[1.02] mx-4 ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div className="flex text-[#FF7A00] mb-4 text-sm" aria-label="5 out of 5 stars">
        <span aria-hidden="true">{'★'.repeat(5)}</span>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed h-24 overflow-hidden">
        &quot;{testimonial.quote}&quot;
      </p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#0B1F5E] flex items-center justify-center text-white font-bold shadow-inner">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white text-sm">{testimonial.name}</h4>
          <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const row1 = TESTIMONIALS.slice(0, Math.ceil(TESTIMONIALS.length / 2));
  const row2 = TESTIMONIALS.slice(Math.ceil(TESTIMONIALS.length / 2));
  const [isPaused, setIsPaused] = useState(false);
  const [activeReview, setActiveReview] = useState<typeof TESTIMONIALS[number] | null>(null);

  const isAnimationPaused = isPaused || activeReview !== null;

  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-[#071340] overflow-hidden relative">
      <button 
        onClick={() => setIsPaused(!isPaused)} 
        className="absolute right-4 top-4 md:right-6 md:top-6 p-2 rounded-full bg-white dark:bg-[#0B1F5E] shadow-md text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-white/10 z-20 flex items-center justify-center"
        aria-label={isPaused ? "Play testimonials animation" : "Pause testimonials animation"}
      >
        {isPaused ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
        )}
      </button>

      <div className="container mx-auto px-4 md:px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-gray-900 dark:text-white">
            What Our Students Say
          </h2>
        </motion.div>
      </div>

      <div className="relative flex flex-col gap-8 group">
        {/* Row 1 - Left to Right */}
        <div className="flex w-[200%] animate-marquee-left" style={{ animationPlayState: isAnimationPaused ? 'paused' : 'running' }}>
          {[...row1, ...row1, ...row1].map((testimonial, i) => (
            <TestimonialCard key={`r1-${i}`} testimonial={testimonial} onClick={() => setActiveReview(testimonial)} />
          ))}
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex w-[200%] animate-marquee-right" style={{ animationPlayState: isAnimationPaused ? 'paused' : 'running' }}>
          {[...row2, ...row2, ...row2].map((testimonial, i) => (
            <TestimonialCard key={`r2-${i}`} testimonial={testimonial} onClick={() => setActiveReview(testimonial)} />
          ))}
        </div>
        
        {/* Fade gradients */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-[#071340] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-[#071340] to-transparent pointer-events-none z-10" />
      </div>

      {/* Full Review Modal */}
      <AnimatePresence>
        {activeReview && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveReview(null)}
              className="absolute inset-0 bg-[#071340]/40 backdrop-blur-md cursor-pointer"
            />
            
            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#0B1F5E] rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-blue-500/20 z-10 overflow-hidden"
            >
              <button
                onClick={() => setActiveReview(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-gray-400 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Close review"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
              
              <div className="flex text-[#FF7A00] mb-8 text-xl" aria-label="5 out of 5 stars">
                <span aria-hidden="true">{'★'.repeat(5)}</span>
              </div>
              
              <p className="text-gray-800 dark:text-gray-100 text-lg md:text-2xl leading-relaxed italic mb-10">
                &quot;{activeReview.quote}&quot;
              </p>
              
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#0B1F5E] flex items-center justify-center text-white font-bold text-xl shadow-inner">
                  {activeReview.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">{activeReview.name}</h4>
                  <p className="text-gray-500 dark:text-gray-400">{activeReview.role}</p>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6]/5 rounded-bl-full pointer-events-none" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
