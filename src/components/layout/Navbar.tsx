"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '@/lib/constants';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section visibility tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform-gpu will-change-transform ${
        isScrolled
          ? 'bg-white/80 dark:bg-[#0B1F5E]/80 backdrop-blur-xl border-b border-gray-200 dark:border-blue-500/20 shadow-lg dark:shadow-[0_4px_20px_rgba(7,19,64,0.5)] py-4'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 z-50 relative group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {/* Background glow for visibility */}
            <div className="absolute inset-0 bg-blue-500/10 dark:bg-white/30 blur-2xl rounded-full scale-150 pointer-events-none transform-gpu will-change-transform" />
            <div className="w-40 h-10 relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
              <Image 
                src="/logo.svg" 
                alt="SkillPedia Logo" 
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS?.map((link) => {
              const hrefId = link.href.replace('#', '');
              const isActive = activeSection === hrefId;
              
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? (isScrolled ? 'text-blue-600 dark:text-white font-semibold' : 'text-white font-semibold')
                      : (isScrolled ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-gray-300 hover:text-white')
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="h-0.5 bg-gradient-to-r from-[#FF7A00] to-[#FF9B3F] mt-1 rounded-full w-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/apply"
                className="bg-[#FF7A00] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-[#FF7A00]/90 transition-colors shadow-lg shadow-[#FF7A00]/20 block"
              >
                Apply Now
              </Link>
            </motion.div>
          </div>

          {/* Mobile Header Right Controls */}
          <div className="flex items-center space-x-3 md:hidden z-50">
            <ThemeToggle />
            <button
              className={`p-2 relative ${isScrolled ? 'text-gray-700 dark:text-white' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'w-4'
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 left-0 right-0 bottom-0 bg-white/95 dark:bg-[#0B1F5E]/95 backdrop-blur-xl border-b border-gray-200 dark:border-blue-500/20 md:hidden flex flex-col pt-24 pb-6 px-4"
          >
            <div className="flex flex-col space-y-6 flex-grow">
              {NAV_LINKS?.map((link) => {
                const hrefId = link.href.replace('#', '');
                const isActive = activeSection === hrefId;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-2xl font-medium py-2 border-b border-gray-200 dark:border-white/10 transition-colors ${
                      isActive
                        ? 'text-blue-600 dark:text-white font-semibold'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            
            <div className="mt-auto pt-6 border-t border-gray-200 dark:border-white/10">
              <Link
                href="/apply"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-[#FF7A00] text-white px-6 py-4 rounded-full font-medium text-lg hover:bg-[#FF7A00]/90 transition-colors shadow-lg shadow-[#FF7A00]/20"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

