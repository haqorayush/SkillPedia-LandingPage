'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';
import Link from 'next/link';

export default function TermsClient() {
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
              <Scale className="w-4 h-4" />
              <span>Legal Document</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-[family-name:var(--font-heading)]">
              Terms of Service
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
              Welcome to SkillPedia. Please read these Terms of Service carefully before using our platform or enrolling in our programs. By accessing or using our services, you agree to be bound by these terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">1. Agreement to Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              By accessing the website at <a href="https://skillpedia-home.vercel.app" className="text-blue-600 dark:text-blue-400 hover:underline">skillpedia-home.vercel.app</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">2. Intellectual Property Rights</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The curriculum, course materials, video lectures, coding assignments, and all other content provided on the SkillPedia platform are the exclusive intellectual property of SkillPedia and its licensors. 
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              You are granted a limited, non-exclusive, non-transferable license to access and view the content for your personal, non-commercial educational use only. You may not copy, modify, distribute, sell, or lease any part of our services or included software, nor may you reverse engineer or attempt to extract the source code of that software.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">3. User Conduct</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              As a student or user of SkillPedia, you agree to adhere to a professional standard of conduct. You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-8">
              <li>Harass, abuse, or threaten other students, mentors, or staff.</li>
              <li>Share your account credentials with third parties.</li>
              <li>Post or transmit any material that is offensive, defamatory, or infringes on the intellectual property of others.</li>
              <li>Attempt to disrupt or compromise the security of the SkillPedia platform.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">4. Program Enrollment & Payments</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Enrollment in SkillPedia programs is subject to acceptance by our admissions team. Payment for programs must be made in accordance with the terms specified during the enrollment process. For information regarding refunds, please refer to our separate Refund Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">5. Termination</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We may terminate or suspend your access to our programs and platform immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service. Upon termination, your right to use the service will immediately cease.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">6. Limitation of Liability</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              In no event shall SkillPedia, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">7. Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              If you have any questions about these Terms of Service, please contact us at:
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
