'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, BookOpen } from 'lucide-react';

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Log error to monitoring service / console
    console.error('Unhandled runtime error in page:', error);
  }, [error]);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#071340] flex items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden font-[family-name:var(--font-body)]">
      {/* Subtle background ambient glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-500/10 dark:bg-red-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-[#FF7A00]/10 dark:bg-[#FF7A00]/15 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-white dark:bg-white/5 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Warning Icon Badge */}
          <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-[#FF7A00]/20 text-[#FF7A00] flex items-center justify-center mx-auto mb-6 shadow-inner border border-[#FF7A00]/30">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Runtime Error Encountered</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading-display)] text-gray-900 dark:text-white mb-4 leading-tight">
            Something Went Wrong
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
            An unexpected error occurred while rendering this page. You can try reloading the component or navigating back to safety.
          </p>

          {error?.digest && (
            <div className="mb-8 p-3 rounded-xl bg-gray-100 dark:bg-[#0B1F5E]/60 border border-gray-200 dark:border-white/5 font-mono text-xs text-gray-500 dark:text-gray-400 select-all">
              Error Digest: <span className="text-gray-800 dark:text-gray-200">{error.digest}</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => reset()}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white font-semibold text-sm transition-all shadow-lg shadow-[#FF7A00]/25 group cursor-pointer"
            >
              <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span>Try Again</span>
            </button>

            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold text-sm transition-all cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/programs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium text-sm transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Programs</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
