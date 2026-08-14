"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from 'next/dynamic';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";

// Dynamically import Three.js scene to avoid SSR issues
const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), { ssr: false });

type NavItemKey = "HOME" | "OUR TEAM" | "CONTACT";

interface PortalContent {
  tagline: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  statValue: string;
  statLabel: string;
}

const PORTAL_DATA: Record<NavItemKey, PortalContent> = {
  HOME: {
    tagline: "CAREER ACCELERATION",
    description:
      "India's premier engineering career acceleration platform — transforming aspiring developers into production-ready software engineers in 12 intensive weeks.",
    ctaText: "EXPLORE PLATFORM",
    ctaHref: "/",
    statValue: "500+ PARTNERS",
    statLabel: "94% Placement Rate",
  },
  "OUR TEAM": {
    tagline: "EXPERT INSTRUCTORS & MENTORS",
    description:
      "Learn directly from seasoned software engineers, AI researchers, and tech leads from top-tier product companies who are dedicated to accelerating your tech career.",
    ctaText: "MEET THE TEAM",
    ctaHref: "/team",
    statValue: "50+ EXPERTS",
    statLabel: "from FAANG & Top Tech",
  },
  CONTACT: {
    tagline: "TALK TO OUR ADVISORS",
    description:
      "Connect directly with our admissions team, engineering mentors, and industry counselors to kickstart your software engineering journey today.",
    ctaText: "APPLY FOR BATCH",
    ctaHref: "/apply",
    statValue: "24/7 SUPPORT",
    statLabel: "Admissions Open",
  },
};

const NAV_ITEMS: NavItemKey[] = ["HOME", "OUR TEAM", "CONTACT"];

export default function NavigationPortalView({
  initialSection = "OUR TEAM",
  onClose,
}: {
  initialSection?: NavItemKey;
  onClose?: () => void;
}) {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState<NavItemKey>(initialSection);

  // Mouse Parallax for Background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const bgTranslateX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const bgTranslateY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);
  const bgScale = useTransform(smoothY, [-0.5, 0.5], [1.05, 1.08]);

  const [particles, setParticles] = useState<Array<{width: string; height: string; left: string; top: string; animationDelay: string; animationDuration: string}>>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        width: Math.random() * 10 + 2 + 'px',
        height: Math.random() * 10 + 2 + 'px',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 10 + 10}s`,
      }))
    );
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = e.clientX / innerWidth - 0.5;
    const y = e.clientY / innerHeight - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Keyboard navigation: Up/Down arrow keys & Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (onClose) onClose();
        else router.push("/");
      } else if (e.key === "ArrowDown") {
        setActiveItem((curr) => {
          const idx = NAV_ITEMS.indexOf(curr);
          return NAV_ITEMS[(idx + 1) % NAV_ITEMS.length];
        });
      } else if (e.key === "ArrowUp") {
        setActiveItem((curr) => {
          const idx = NAV_ITEMS.indexOf(curr);
          return NAV_ITEMS[(idx - 1 + NAV_ITEMS.length) % NAV_ITEMS.length];
        });
      } else if (e.key === "Enter") {
        const item = PORTAL_DATA[activeItem];
        if (item) router.push(item.ctaHref);
      }
    },
    [activeItem, onClose, router]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const activeContent = PORTAL_DATA[activeItem];

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      router.push("/");
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen h-screen overflow-hidden animated-gradient-mesh bg-[#0B1F5E] dark:bg-[#071340] text-white flex flex-col justify-between select-none font-[family-name:var(--font-body)]"
    >
      {/* Background Particles & Hero Scene */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {particles.map((style, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20 animate-float transform-gpu will-change-transform"
            style={{
              ...style,
              x: bgTranslateX,
              y: bgTranslateY,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-0 h-full w-full opacity-60 flex items-center justify-center pointer-events-none">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#071340]/90 via-transparent to-[#071340]/60 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-radial-vignette opacity-70 pointer-events-none" />

      {/* ============================================================ */}
      {/* TOP BAR */}
      {/* ============================================================ */}
      <header className="relative z-30 w-full px-6 sm:px-12 py-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group relative z-30">
          <div className="w-36 sm:w-44 h-10 relative drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.svg"
              alt="SkillPedia Logo"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Right Controls */}
        <div className="flex items-center space-x-6 sm:space-x-10 text-xs sm:text-sm tracking-wider uppercase font-medium">

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="group relative flex flex-col items-center justify-center text-white hover:text-[#A3E635] transition-colors py-1 cursor-pointer"
            aria-label="Close portal navigation"
          >
            <span className="tracking-widest font-semibold text-xs sm:text-sm">CLOSE</span>
            <span className="h-[2px] w-full bg-white/60 group-hover:bg-[#A3E635] transition-all duration-300 mt-0.5 rounded-full" />
          </button>
        </div>
      </header>

      {/* ============================================================ */}
      {/* MAIN BODY: 3-ITEM NAVIGATION & DYNAMIC DETAILS */}
      {/* ============================================================ */}
      <main className="relative z-20 flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: 3 Giant Navigation Items */}
          <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-6">
            {NAV_ITEMS.map((item) => {
              const isActive = activeItem === item;

              return (
                <div
                  key={item}
                  className="relative group flex items-center cursor-pointer"
                  onMouseEnter={() => setActiveItem(item)}
                  onClick={() => {
                    setActiveItem(item);
                  }}
                >
                  {/* Neon Active Chevron Indicator */}
                  <div className="w-6 sm:w-10 flex items-center justify-start">
                    {isActive && (
                      <motion.span
                        layoutId="nav-chevron"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="text-[#A3E635] text-2xl sm:text-4xl font-bold leading-none select-none drop-shadow-[0_0_12px_rgba(163,230,53,0.8)]"
                      >
                        ›
                      </motion.span>
                    )}
                  </div>

                  {/* Main Large Typography */}
                  <motion.div
                    className="relative inline-block"
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  >
                    <h2
                      className={`font-[family-name:var(--font-heading-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase transition-all duration-300 ${
                        isActive
                          ? "text-[#A3E635] drop-shadow-[0_0_25px_rgba(163,230,53,0.45)]"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item}
                    </h2>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Context Description & Action Card */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-start pl-0 lg:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex flex-col space-y-6 max-w-md"
              >
                {/* Section Tagline */}
                <div className="inline-flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A00] animate-ping" />
                  <span className="text-[11px] font-mono tracking-widest text-[#FF9E40] uppercase">
                    {activeContent.tagline}
                  </span>
                </div>

                {/* Description Paragraph */}
                <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed font-normal tracking-wide text-pretty">
                  {activeContent.description}
                </p>

                {/* Outlined Action Button */}
                <div className="pt-2">
                  <Link
                    href={activeContent.ctaHref}
                    className="group inline-flex items-center space-x-3 px-6 py-3 rounded-lg border border-white/25 bg-white/5 hover:bg-white/15 hover:border-white/60 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 text-white shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  >
                    <span>{activeContent.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </main>

      {/* ============================================================ */}
      {/* BOTTOM BAR: SOCIAL LINKS & STAT WIDGET */}
      {/* ============================================================ */}
      <footer className="relative z-30 w-full px-6 sm:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Social Icons */}
        <div className="flex items-center space-x-5 text-white/70">
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200 py-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </Link>
          <span className="text-white/20">•</span>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200 py-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          >
            <FaXTwitter className="w-5 h-5" />
          </Link>
          <span className="text-white/20">•</span>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200 py-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          >
            <FaGithub className="w-5 h-5" />
          </Link>
          <span className="text-white/20">•</span>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200 py-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          >
            <FaInstagram className="w-5 h-5" />
          </Link>
        </div>

        {/* Right: Dynamic Stat Badge */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="flex items-center space-x-3 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/15 px-4 py-2 rounded-full transition-all duration-300 shadow-xl group"
          >
            <div className="w-6 h-6 rounded-full bg-white text-[#071340] flex items-center justify-center font-bold text-xs shadow-md group-hover:rotate-90 transition-transform duration-300">
              <Plus className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col text-right sm:text-left">
              <span className="font-mono text-xs font-bold text-white tracking-wide">
                {activeContent.statValue}
              </span>
              <span className="text-[10px] text-gray-400 font-sans tracking-tight">
                {activeContent.statLabel}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </footer>
    </div>
  );
}
