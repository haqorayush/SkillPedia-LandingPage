"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FAQ_ITEMS } from '@/lib/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_ITEMS.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-white dark:bg-[#071340]">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading-display)] text-gray-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search frequently asked questions"
              className="w-full px-5 py-3 pr-12 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0B1F5E]/60 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:bg-white dark:focus:bg-[#0B1F5E] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-all font-[family-name:var(--font-body)]"
            />
            <svg 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </motion.div>

        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            <Accordion className="w-full">
              {filteredFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border-gray-100 dark:border-white/10">
                  <AccordionTrigger className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-[#3B82F6] dark:hover:text-blue-400 hover:no-underline font-[family-name:var(--font-body)] py-6 data-[state=open]:text-[#3B82F6] dark:data-[state=open]:text-blue-400 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed font-[family-name:var(--font-body)] text-base pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center py-10 text-gray-500 dark:text-gray-400 font-[family-name:var(--font-body)]"
            >
              No questions found matching &quot;{searchQuery}&quot;
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
