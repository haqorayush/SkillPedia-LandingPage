'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Receipt } from 'lucide-react';
import Link from 'next/link';

export default function RefundClient() {
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
              <Receipt className="w-4 h-4" />
              <span>Legal Document</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-[family-name:var(--font-heading)]">
              Refund Policy
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
              At SkillPedia, we are committed to delivering the highest quality engineering education. We understand that personal circumstances can change, which is why we offer a clear and transparent refund policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">1. Refund Eligibility Window</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We offer a money-back guarantee if you are unsatisfied with the program or unable to continue. To be eligible, you must request a refund within <strong>7 days from the date of receiving the payment</strong>. Refund requests made after this 7-day window will not be honored.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">2. Non-Refundable Scenarios</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Even within the 7-day window, you may forfeit your eligibility for a refund under the following conditions:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-8">
              <li>You have systematically downloaded or scraped proprietary course materials, videos, or assignments.</li>
              <li>You have been dismissed from the program for violating our <Link href="/terms-of-service" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</Link> (e.g., harassment of staff or peers, sharing account credentials).</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">3. How to Request a Refund</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              To initiate a refund request, please send an email to our support team from the email address associated with your SkillPedia account. Include the following details:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-8">
              <li>Your full name</li>
              <li>The name of the program you enrolled in</li>
              <li>Your reason for requesting a refund (this helps us improve)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">4. Processing Time</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Once your refund request is received and approved, we will process the cancellation of your enrollment. The refund will be credited back to your original payment method and <strong>will take up to 14 days</strong> if initiated. Processing times may vary depending on your bank or credit card provider.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">5. Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              If you have any questions about this Refund Policy or need assistance with your enrollment, please contact us at:
            </p>
            <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/10">
              <p className="text-gray-900 dark:text-white font-medium mb-2">SkillPedia Support Team</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Email: <a href="mailto:smartminds.boa@proton.me" className="text-blue-600 dark:text-blue-400 hover:underline">smartminds.boa@proton.me</a></p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Website: <a href="https://skillpedia-home.vercel.app" className="text-blue-600 dark:text-blue-400 hover:underline">skillpedia-home.vercel.app</a></p>
              <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">Or reach out via our Contact Page &rarr;</Link>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  );
}
