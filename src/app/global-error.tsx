'use client';

import { useEffect } from 'react';
import { AlertOctagon, RefreshCw, RotateCcw } from 'lucide-react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error('Critical root layout error:', error);
  }, [error]);

  return (
    <html lang="en" className="h-full dark">
      <body className="h-full min-h-screen bg-[#071340] text-white flex items-center justify-center px-6 py-12 font-sans antialiased">
        <div className="max-w-md w-full text-center bg-[#0B1F5E]/90 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          {/* Top glow accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF7A00] via-red-500 to-[#3B82F6]" />

          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-red-500/20 border border-red-500/30 text-red-400 flex items-center justify-center mx-auto mb-6 shadow-inner">
            <AlertOctagon className="w-8 h-8" />
          </div>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-red-500/20 text-red-300 mb-4 border border-red-500/30">
            System Level Exception
          </span>

          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
            Critical Application Error
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
            SkillPedia encountered an unrecoverable root layout error. You can attempt to restore the session or reload the application.
          </p>

          {error?.digest && (
            <div className="mb-6 p-2.5 rounded-lg bg-black/30 border border-white/5 font-mono text-xs text-gray-400 break-all select-all">
              Digest: {error.digest}
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => reset()}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white font-medium text-sm transition-colors shadow-lg shadow-[#FF7A00]/25 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Recover Session</span>
            </button>

            <button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.location.href = '/';
                }
              }}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium text-sm transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reload App</span>
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
