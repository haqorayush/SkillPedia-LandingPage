'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyClient() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#071340]">
      
      {/* Header Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0B1F5E]/50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              <span>Legal Document</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-[family-name:var(--font-heading)]">
              Privacy Policy
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Last updated: August 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Document Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg prose-blue dark:prose-invert max-w-none font-[family-name:var(--font-body)]"
          >
            <p className="lead text-xl text-gray-700 dark:text-gray-300 mb-10">
              SkillPedia ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by SkillPedia when you visit our website or enroll in our programs.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">1. Information We Collect</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We collect information you provide directly to us when you apply for a program, request information, or communicate with us. This may include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-8">
              <li><strong>Contact Information:</strong> Your name, email address, and phone number.</li>
              <li><strong>Professional Information:</strong> Resume details, LinkedIn profiles, or GitHub repositories shared during the application process.</li>
              <li><strong>Usage Data:</strong> We automatically collect certain information about your device and how you interact with our website, such as IP addresses, browser types, and pages visited, to help us improve our services.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">2. How We Use Your Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-8">
              <li>To evaluate applications and manage cohort enrollments.</li>
              <li>To provide, maintain, and improve our educational programs.</li>
              <li>To communicate with you regarding curriculum updates, schedules, and important administrative notices.</li>
              <li>To respond to your comments, questions, and support requests.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">3. Sharing Your Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              SkillPedia does <strong>not</strong> sell, rent, or trade your personal information to third parties. We may share your information only with trusted third-party service providers who assist us in operating our website and conducting our business (such as email delivery services or secure cloud hosting), provided that those parties agree to keep this information confidential.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">4. Data Security</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We implement industry-standard security measures to maintain the safety of your personal information. However, please be aware that no method of transmission over the Internet, or method of electronic storage, is 100% secure, and we cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">5. Your Privacy Rights</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Depending on your location, you may have the right to access, correct, update, or delete the personal information we hold about you. If you wish to exercise any of these rights, please contact us using the information provided below.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">6. Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/10">
              <p className="text-gray-900 dark:text-white font-medium mb-2">SkillPedia Legal Team</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Email: <a href="mailto:smartminds.boa@proton.me" className="text-blue-600 dark:text-blue-400 hover:underline">smartminds.boa@proton.me</a></p>
              <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">Or reach out via our Contact Page &rarr;</Link>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  );
}
