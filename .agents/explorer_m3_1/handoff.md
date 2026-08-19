# Investigation & Implementation Specification: Requirement R3 (Architectural Resilience & Global Layout)

**Target Milestone**: M3 (Requirement R3)  
**Corpus / Project**: SkillPedia (`haqorayush/SkillPedia-LandingPage`)  
**Investigator**: Explorer Agent (`explorer_m3_1`)  
**Status**: Ready for Worker Implementation

---

## 1. Observation

### 1.1 Root Layout State (`src/app/layout.tsx`)
Direct inspection of `/Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/src/app/layout.tsx` (lines 78–96) reveals that `RootLayout` currently wraps `{children}` inside `<ThemeProvider>` and `<SmoothScroller>` but **omits** `<Navbar />` and `<Footer />`:
```tsx
<body className="min-h-full flex flex-col bg-background text-foreground font-[family-name:var(--font-body)]">
  <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange
  >
    <CustomCursor />
    <Preloader />
    <Suspense fallback={null}>
      <PageTransition />
    </Suspense>
    <SmoothScroller>
      {children}
    </SmoothScroller>
  </ThemeProvider>
</body>
```
In line 76, `inter.variable` is also redundantly declared twice: `className={cn("h-full", "antialiased", spaceGrotesk.variable, inter.variable, jetbrainsMono.variable, "font-sans", inter.variable)}`.

### 1.2 Inventory of Page Files Manually Importing & Rendering Navbar / Footer
Grep search across all files in `src/app/` identified exactly **10 page files** that manually import and render `<Navbar />` and `<Footer />`:

| # | File Path | Navbar Import Line | Footer Import Line | Navbar Render Line | Footer Render Line |
|---|-----------|--------------------|--------------------|--------------------|--------------------|
| 1 | `src/app/page.tsx` | Line 1: `import Navbar from "@/components/layout/Navbar";` | Line 2: `import Footer from "@/components/layout/Footer";` | Line 21: `<Navbar />` | Line 35: `<Footer />` |
| 2 | `src/app/about/page.tsx` | Line 3: `import Navbar from "@/components/layout/Navbar";` | Line 4: `import Footer from "@/components/layout/Footer";` | Line 15: `<Navbar />` | Line 17: `<Footer />` |
| 3 | `src/app/apply/page.tsx` | Line 3: `import Navbar from '@/components/layout/Navbar';` | Line 4: `import Footer from '@/components/layout/Footer';` | Line 14: `<Navbar />` | Line 16: `<Footer />` |
| 4 | `src/app/ceo-message/page.tsx` | Line 3: `import Navbar from '@/components/layout/Navbar';` | Line 4: `import Footer from '@/components/layout/Footer';` | Line 14: `<Navbar />` | Line 16: `<Footer />` |
| 5 | `src/app/privacy-policy/page.tsx` | Line 3: `import Navbar from '@/components/layout/Navbar';` | Line 4: `import Footer from '@/components/layout/Footer';` | Line 14: `<Navbar />` | Line 16: `<Footer />` |
| 6 | `src/app/programs/page.tsx` | Line 2: `import Navbar from "@/components/layout/Navbar";` | Line 3: `import Footer from "@/components/layout/Footer";` | Line 14: `<Navbar />` | Line 29: `<Footer />` |
| 7 | `src/app/refund-policy/page.tsx` | Line 3: `import Navbar from '@/components/layout/Navbar';` | Line 4: `import Footer from '@/components/layout/Footer';` | Line 14: `<Navbar />` | Line 16: `<Footer />` |
| 8 | `src/app/team/page.tsx` | Line 3: `import Navbar from "@/components/layout/Navbar";` | Line 4: `import Footer from "@/components/layout/Footer";` | Line 15: `<Navbar />` | Line 17: `<Footer />` |
| 9 | `src/app/terms-of-service/page.tsx` | Line 3: `import Navbar from '@/components/layout/Navbar';` | Line 4: `import Footer from '@/components/layout/Footer';` | Line 14: `<Navbar />` | Line 16: `<Footer />` |
| 10 | `src/app/vision-mission/page.tsx` | Line 3: `import Navbar from '@/components/layout/Navbar';` | Line 4: `import Footer from '@/components/layout/Footer';` | Line 14: `<Navbar />` | Line 16: `<Footer />` |

*Note on Dynamic Route*: `src/app/programs/[slug]/page.tsx` renders `<CourseDetailView course={course} />` without manual Navbar/Footer imports. Centralizing Navbar and Footer into `src/app/layout.tsx` automatically provides navigation and footer chrome to all 33 dynamic course pages!

### 1.3 Layout & Spacing Verification Across All Pages
Direct inspection of page container markup confirmed that all pages already include sufficient top padding to accommodate the fixed navbar (`header className="fixed top-0 left-0 right-0 z-50 ..."`):
- `src/app/page.tsx` (`HeroSection.tsx`): `min-h-screen flex items-center` with `pt-20 lg:pt-0` alignment.
- `src/app/about/page.tsx` (`NavigationPortalView.tsx`): Top header spacing with `py-8`.
- `src/app/apply/page.tsx` (`ApplyClient.tsx`): `container mx-auto px-6 py-32 md:py-40`.
- `src/app/ceo-message/page.tsx` (`CeoClient.tsx`): `pt-32 pb-20 md:pt-48 md:pb-24`.
- `src/app/privacy-policy/page.tsx` (`PrivacyClient.tsx`): `pt-32 pb-16 md:pt-40 md:pb-20`.
- `src/app/programs/page.tsx`: `main className="min-h-screen ... pt-24 pb-20"`.
- `src/app/programs/[slug]/page.tsx` (`CourseDetailView.tsx`): `pt-32 pb-20 md:pt-48 md:pb-32`.
- `src/app/refund-policy/page.tsx` (`RefundClient.tsx`): `pt-32 pb-16 md:pt-40 md:pb-20`.
- `src/app/team/page.tsx` (`TeamSection.tsx`): `pt-32 sm:pt-40 pb-20`.
- `src/app/terms-of-service/page.tsx` (`TermsClient.tsx`): `pt-32 pb-16 md:pt-40 md:pb-20`.
- `src/app/vision-mission/page.tsx` (`VisionMissionClient.tsx`): `pt-32 pb-20 md:pt-48 md:pb-32`.

**Conclusion on Layout Shifts**: Moving `<Navbar />` and `<Footer />` into `layout.tsx` causes zero layout regressions, zero overlapping content, and zero visual jumping.

### 1.4 Missing Next.js App Router Error Resilience Files
File search in `src/app/` confirmed that **none** of the standard App Router error boundaries currently exist:
- `src/app/error.tsx`: Missing
- `src/app/global-error.tsx`: Missing
- `src/app/not-found.tsx`: Missing

---

## 2. Logic Chain & Implementation Blueprint

### Step 1: Update Root Layout (`src/app/layout.tsx`)
Place `<Navbar />` and `<Footer />` inside `<SmoothScroller>` within `<ThemeProvider>`. This ensures the Navbar has access to the theme context (for `ThemeToggle`) and Lenis smooth scrolling applies across the full viewport. Clean up the duplicate font variable on `<html>`.

#### Proposed Blueprint: `src/app/layout.tsx`
```tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroller from '@/components/providers/SmoothScroller';
import { ThemeProvider } from '@/components/providers/theme-provider';
import Preloader from '@/components/ui/Preloader';
import CustomCursor from '@/components/ui/CustomCursor';
import PageTransition from '@/components/ui/PageTransition';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SkillPedia — Become a Job-Ready Software Engineer in 12 Weeks",
  description:
    "India's premium engineering career acceleration platform. Build real-world software, master AI, deploy production applications, and launch your career in just 12 weeks.",
  keywords: [
    "software engineering",
    "coding bootcamp",
    "job-ready engineer",
    "AI development",
    "full stack developer",
    "career acceleration",
    "India",
    "SkillPedia",
  ],
  openGraph: {
    title: "SkillPedia — Become a Job-Ready Software Engineer in 12 Weeks",
    description:
      "India's premium engineering career acceleration platform. Transform from beginner to job-ready software engineer.",
    type: "website",
    locale: "en_IN",
    siteName: "SkillPedia",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkillPedia — Become a Job-Ready Software Engineer in 12 Weeks",
    description:
      "India's premium engineering career acceleration platform.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", spaceGrotesk.variable, inter.variable, jetbrainsMono.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-[family-name:var(--font-body)]">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <Preloader />
          <Suspense fallback={null}>
            <PageTransition />
          </Suspense>
          <SmoothScroller>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroller>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

### Step 2: Remove Redundant Navbar & Footer Imports Across 10 Page Files

#### 1. `src/app/page.tsx`
```tsx
import HeroSection from "@/components/sections/HeroSection";
import dynamic from 'next/dynamic';

const WhoWeAreSection = dynamic(() => import('@/components/sections/WhoWeAreSection'), { ssr: true });
const WhySkillPediaSection = dynamic(() => import('@/components/sections/WhySkillPediaSection'), { ssr: true });
const RoadmapSection = dynamic(() => import('@/components/sections/RoadmapSection'), { ssr: true });
const LearningFlowSection = dynamic(() => import('@/components/sections/LearningFlowSection'), { ssr: true });
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'), { ssr: true });
const CareerSection = dynamic(() => import('@/components/sections/CareerSection'), { ssr: true });
const StatsSection = dynamic(() => import('@/components/sections/StatsSection'), { ssr: true });
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), { ssr: true });
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'), { ssr: true });
const CTASection = dynamic(() => import('@/components/sections/CTASection'), { ssr: true });

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhoWeAreSection />
      <WhySkillPediaSection />
      <RoadmapSection />
      <LearningFlowSection />
      <ProjectsSection />
      <CareerSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
    </main>
  );
}
```

#### 2. `src/app/about/page.tsx`
```tsx
import type { Metadata } from "next";
import NavigationPortalView from "@/components/sections/NavigationPortalView";

export const metadata: Metadata = {
  title: "About SkillPedia — Engineering Career Acceleration",
  description:
    "Explore SkillPedia's mission, philosophy, and curriculum designed to take you from foundational coding to production-grade software engineer in 12 weeks.",
};

export default function AboutPage() {
  return <NavigationPortalView initialSection="OUR TEAM" />;
}
```

#### 3. `src/app/apply/page.tsx`
```tsx
import type { Metadata } from 'next';
import ApplyClient from './ApplyClient';

export const metadata: Metadata = {
  title: 'Apply Now | SkillPedia',
  description: 'Apply for SkillPedia engineering programs and accelerate your career.',
};

export default function ApplyPage() {
  return <ApplyClient />;
}
```

#### 4. `src/app/ceo-message/page.tsx`
```tsx
import type { Metadata } from 'next';
import CeoClient from './CeoClient';

export const metadata: Metadata = {
  title: 'Message from the CEO | SkillPedia',
  description: 'A message from our Founder & CEO, Dharmendra Kumar Pandey.',
};

export default function CeoMessagePage() {
  return <CeoClient />;
}
```

#### 5. `src/app/privacy-policy/page.tsx`
```tsx
import type { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';

export const metadata: Metadata = {
  title: 'Privacy Policy | SkillPedia',
  description: 'Learn how SkillPedia collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return <PrivacyClient />;
}
```

#### 6. `src/app/programs/page.tsx`
```tsx
import type { Metadata } from "next";
import ProgramsList from "./ProgramsList";

export const metadata: Metadata = {
  title: "Programs | SkillPedia",
  description: "Explore our comprehensive programs ranging from Full Stack Engineering to AI & ML Development, designed to accelerate your career.",
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#071340] pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 pt-10">
          <h1 className="text-4xl md:text-6xl font-black font-[family-name:var(--font-heading-display)] text-gray-900 dark:text-white uppercase tracking-tight mb-6">
            Our <span className="text-[#FF7A00]">Programs</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Discover industry-aligned courses crafted by engineering veterans. Whether you're building intelligent systems or scaling backend architecture, we have a path for you.
          </p>
        </div>
        
        <ProgramsList />
      </div>
    </main>
  );
}
```

#### 7. `src/app/refund-policy/page.tsx`
```tsx
import type { Metadata } from 'next';
import RefundClient from './RefundClient';

export const metadata: Metadata = {
  title: 'Refund Policy | SkillPedia',
  description: 'Read the refund and cancellation policy for SkillPedia programs.',
};

export default function RefundPolicyPage() {
  return <RefundClient />;
}
```

#### 8. `src/app/team/page.tsx`
```tsx
import type { Metadata } from "next";
import TeamSection from "@/components/sections/TeamSection";

export const metadata: Metadata = {
  title: "Our Team — SkillPedia | Meet the Experts Behind Your Career Transformation",
  description:
    "Meet the industry veterans, FAANG engineers, and academic toppers who power SkillPedia's world-class engineering training and career acceleration programs.",
};

export default function TeamPage() {
  return <TeamSection />;
}
```

#### 9. `src/app/terms-of-service/page.tsx`
```tsx
import type { Metadata } from 'next';
import TermsClient from './TermsClient';

export const metadata: Metadata = {
  title: 'Terms of Service | SkillPedia',
  description: 'Read the terms of service governing the use of SkillPedia programs and platform.',
};

export default function TermsOfServicePage() {
  return <TermsClient />;
}
```

#### 10. `src/app/vision-mission/page.tsx`
```tsx
import type { Metadata } from 'next';
import VisionMissionClient from './VisionMissionClient';

export const metadata: Metadata = {
  title: 'Vision & Mission | SkillPedia',
  description: 'Empowering the next generation of engineers to bridge the gap between academic theory and industry reality.',
};

export default function VisionMissionPage() {
  return <VisionMissionClient />;
}
```

---

### Step 3: Implement `src/app/error.tsx` (Client Route Error Boundary)

#### Requirements & Specifications
- Directive: `'use client';`
- Props: `{ error: Error & { digest?: string }, reset: () => void }`
- Behavior: Logs error via `useEffect`, provides a `reset()` retry action and fallback navigation.
- UI Design: Glassmorphic card matching SkillPedia navy/orange theme, alert icon, clear messaging, retry button and return home link.

#### Proposed Code: `src/app/error.tsx`
```tsx
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white font-semibold text-sm transition-all shadow-lg shadow-[#FF7A00]/25 group"
            >
              <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span>Try Again</span>
            </button>

            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold text-sm transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/programs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium text-sm transition-all"
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
```

---

### Step 4: Implement `src/app/global-error.tsx` (Root Layout Error Boundary)

#### Requirements & Specifications
- Directive: `'use client';`
- Next.js Rule: Must contain `<html>` and `<body>` tags because it replaces the root `layout.tsx` if an error occurs in the root layout or providers.
- Self-contained styling with dark navy background `#071340`, brand recovery actions, reload trigger (`window.location.reload()`), and return to root link.

#### Proposed Code: `src/app/global-error.tsx`
```tsx
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
      <body className="h-full min-h-screen bg-[#071340] text-white flex items-center justify-center px-6 py-12 font-sans antialiased select-none">
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white font-medium text-sm transition-colors shadow-lg shadow-[#FF7A00]/25"
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium text-sm transition-colors"
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
```

---

### Step 5: Implement `src/app/not-found.tsx` (Custom Branded 404 Page)

#### Requirements & Specifications
- Directive: `'use client';`
- Rendered inside Root Layout (automatically framed by global `<Navbar />` and `<Footer />`).
- Hero section with top padding `pt-32 pb-20 md:pt-40 md:pb-28` to clear the fixed navbar.
- Large gradient `404` header, descriptive copy, primary return button, and a 4-card quick navigation grid (`Explore Programs`, `Admissions / Apply`, `Meet the Team`, `Vision & Mission`).

#### Proposed Code: `src/app/not-found.tsx`
```tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Compass,
  ArrowLeft,
  BookOpen,
  Sparkles,
  Users,
  Target,
  ArrowRight,
} from 'lucide-react';

const QUICK_LINKS = [
  {
    title: 'Explore Programs',
    description: 'Browse all 33 full-stack, QA, and communication courses.',
    href: '/programs',
    icon: BookOpen,
    color: 'from-blue-500/20 to-indigo-500/20 text-blue-500 dark:text-blue-400',
  },
  {
    title: 'Admissions & Apply',
    description: 'Submit your application for the upcoming training cohort.',
    href: '/apply',
    icon: Sparkles,
    color: 'from-orange-500/20 to-amber-500/20 text-[#FF7A00]',
  },
  {
    title: 'Meet Our Team',
    description: 'Discover the industry veterans leading our mentorship.',
    href: '/team',
    icon: Users,
    color: 'from-teal-500/20 to-emerald-500/20 text-teal-500 dark:text-teal-400',
  },
  {
    title: 'Vision & Mission',
    description: 'Learn why SkillPedia bridges academia and industry.',
    href: '/vision-mission',
    icon: Target,
    color: 'from-purple-500/20 to-pink-500/20 text-purple-500 dark:text-purple-400',
  },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#071340] relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 font-[family-name:var(--font-body)]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-[#FF7A00]/10 dark:bg-[#FF7A00]/15 rounded-full blur-[110px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-[#FF7A00]/10 border border-orange-200 dark:border-[#FF7A00]/20 text-[#FF7A00] text-sm font-semibold mb-6"
          >
            <Compass className="w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} />
            <span>404 · Page Not Found</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-7xl sm:text-9xl font-black font-[family-name:var(--font-heading-display)] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-blue-600 to-[#3B82F6] dark:from-[#FF7A00] dark:via-blue-400 dark:to-cyan-400 mb-4"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight font-[family-name:var(--font-heading-display)]"
          >
            Lost in Code? Let&apos;s Get You Back on Track.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto"
          >
            The page or course you are looking for might have been relocated, renamed, or does not exist.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white font-semibold text-base transition-all shadow-lg shadow-[#FF7A00]/25 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              href="/programs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold text-base transition-all"
            >
              <BookOpen className="w-5 h-5" />
              <span>Explore All Courses</span>
            </Link>
          </motion.div>
        </div>

        {/* Quick Navigation Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {QUICK_LINKS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-[#FF7A00]/50 dark:hover:border-[#FF7A00]/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-[#FF7A00] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center text-xs font-semibold text-[#FF7A00] gap-1 group-hover:gap-2 transition-all">
                  <span>Navigate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </main>
  );
}
```

---

## 3. Caveats & Edge Cases

1. **Hydration & Provider Placement in `RootLayout`**:
   `<Navbar />` must be placed inside `<ThemeProvider>` because it uses `ThemeToggle` which consumes `useTheme()`. Placing `<Navbar />` inside `<SmoothScroller>` ensures anchor links (`#curriculum`, `/#contact`) trigger smooth scrolling via Lenis.
2. **Next.js 16 App Router Error Boundary Constraints**:
   - `error.tsx` must always be a client component (`'use client';`).
   - `global-error.tsx` catches errors occurring inside `layout.tsx` itself. Because `layout.tsx` fails to render when `global-error.tsx` triggers, `global-error.tsx` MUST render `<html>` and `<body>` tags. It cannot rely on `ThemeProvider` or `layout.tsx` styles.
   - `not-found.tsx` renders inside `layout.tsx`, receiving the global Navbar and Footer. It uses `pt-32 md:pt-40` to avoid being occluded by the fixed navbar.
3. **No Double-Wrapping in Dynamic Route**:
   `src/app/programs/[slug]/page.tsx` renders `CourseDetailView`. When `Navbar` and `Footer` are added to `layout.tsx`, `CourseDetailView` will now be properly wrapped with global navigation without needing manual imports.
4. **HTML Semantic Nesting**:
   Pages must not nest multiple `<main>` tags. In `layout.tsx`, `{children}` is directly rendered between `<Navbar />` and `<Footer />` (without an extra `<main>` wrapper), so each page's internal `<main>` remains the single semantic main tag of the page.

---

## 4. Conclusion & Action Items for Worker

The investigation confirms that Requirement R3 is fully architected and ready for implementation.

### Implementation Checklist for Worker
1. [ ] Update `src/app/layout.tsx` to render `<Navbar />` and `<Footer />` inside `<SmoothScroller>`.
2. [ ] Clean up redundant manual `Navbar` and `Footer` imports from all 10 page files:
   - `src/app/page.tsx`
   - `src/app/about/page.tsx`
   - `src/app/apply/page.tsx`
   - `src/app/ceo-message/page.tsx`
   - `src/app/privacy-policy/page.tsx`
   - `src/app/programs/page.tsx`
   - `src/app/refund-policy/page.tsx`
   - `src/app/team/page.tsx`
   - `src/app/terms-of-service/page.tsx`
   - `src/app/vision-mission/page.tsx`
3. [ ] Create `src/app/error.tsx` using the provided blueprint.
4. [ ] Create `src/app/global-error.tsx` using the provided blueprint.
5. [ ] Create `src/app/not-found.tsx` using the provided blueprint.
6. [ ] Run `npx tsc --noEmit` and `npm run build` to verify type safety and static prerendering.

---

## 5. Verification Method

To independently verify the implementation:

1. **Type Checking**:
   ```bash
   npx tsc --noEmit
   ```
   *Expected outcome*: Exit code 0, 0 TypeScript errors.

2. **Next.js Production Build**:
   ```bash
   npm run build
   ```
   *Expected outcome*: Successful build of all 46+ static routes including `/_not-found`, dynamic course pages `/programs/[slug]`, and root error boundaries.

3. **Verify Zero Manual Navbar/Footer Imports in Page Files**:
   ```bash
   rg "import.*from.*components/layout/(Navbar|Footer)" src/app/
   ```
   *Expected outcome*: Only `src/app/layout.tsx` matches. All page files return 0 matches.
