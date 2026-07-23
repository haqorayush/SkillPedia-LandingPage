"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Prevent layout shift / hydration mismatch during client hydration
  if (!mounted) {
    return (
      <button
        type="button"
        className="relative p-2.5 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-[#0B1F5E]/70 w-10 h-10 flex items-center justify-center opacity-60 cursor-default"
        aria-label="Toggle theme"
        disabled
      >
        <div className="w-5 h-5 rounded-full bg-gray-400/20 dark:bg-sky-400/20 animate-pulse" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`group relative p-2.5 rounded-full transition-all duration-300 flex items-center justify-center
        focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
        ${
          isDark
            ? "bg-[#0B1F5E]/70 border border-blue-500/40 text-sky-300 hover:text-white hover:bg-[#0B1F5E] hover:border-blue-500/80 shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_18px_rgba(59,130,246,0.6)]"
            : "bg-white/80 border border-gray-200 text-gray-700 hover:text-gray-900 hover:bg-gray-100 hover:border-gray-300 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
        }`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        {isDark ? (
          <Sun className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90 text-amber-300 drop-shadow-[0_0_6px_rgba(253,224,71,0.6)]" />
        ) : (
          <Moon className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12 text-blue-600 drop-shadow-[0_0_6px_rgba(59,130,246,0.4)]" />
        )}
      </div>
    </motion.button>
  );
}

export default ThemeToggle;
