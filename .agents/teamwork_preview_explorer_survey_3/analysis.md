# Explorer 3 Survey Analysis: Architecture, UI/A11y, Layout & Resilience

**Date**: 2026-08-18  
**Scope**: Architecture & UI/A11y Survey (SkillPedia Next.js Application)  
**Agent**: Explorer 3 (`teamwork_preview_explorer_survey_3`)  

---

## Executive Summary

This survey provides a forensic investigation and implementation blueprint for four core refactoring domains in SkillPedia:
1. **Global Layout & Navigation Consolidation**: 43 discrete `page.tsx` files manually import and render `<Navbar />` and `<Footer />`. We establish the migration plan to render them globally in `src/app/layout.tsx`.
2. **Architectural Resilience (Error Boundaries)**: Currently zero Next.js error boundaries exist (`error.tsx`, `global-error.tsx`, `not-found.tsx`). Complete production-ready designs with a11y, theme awareness, and recovery actions are detailed.
3. **Light/Dark Mode Theme Consistency ("Zebra-Striping")**: The homepage, `/team`, `/about`, and program pages suffer from severe light-mode zebra-striping caused by hardcoded dark navy hexes (`bg-[#0B1F5E]`, `bg-[#071340]`) without light-mode counterparts. We catalog every instance and define semantic token replacements.
4. **HTML5 Nesting Violations & Accessibility**: Multiple `<button>` inside `<Link>` elements violate HTML5/W3C specifications and break screen-reader workflows in `HeroSection.tsx` and `CTASection.tsx`.
5. **Contact Routing Alignment**: Audit of conflicting Contact links (`/about` vs `/#contact` vs `/apply`) across navigation, footers, and legal pages.

---

## 1. Navbar & Footer Audit & Inventory

### 1.1 Complete Inventory of Files Importing Navbar & Footer
A full codebase search revealed **43 total `page.tsx` files** importing and rendering `<Navbar />` and `<Footer />`:

#### Standalone Route Pages (10 files):
1. `src/app/page.tsx` (Home)
2. `src/app/about/page.tsx` (About / Navigation Portal)
3. `src/app/apply/page.tsx` (Admissions / Application Form)
4. `src/app/ceo-message/page.tsx` (CEO Message)
5. `src/app/privacy-policy/page.tsx` (Privacy Policy)
6. `src/app/programs/page.tsx` (Programs Directory)
7. `src/app/refund-policy/page.tsx` (Refund Policy)
8. `src/app/team/page.tsx` (Team Page)
9. `src/app/terms-of-service/page.tsx` (Terms of Service)
10. `src/app/vision-mission/page.tsx` (Vision & Mission)

#### Course Route Pages (33 files under `src/app/programs/`):
11. `src/app/programs/advanced-communication/page.tsx`
12. `src/app/programs/ai-based-software-testing/page.tsx`
13. `src/app/programs/ai-ml-development/page.tsx`
14. `src/app/programs/api-development/page.tsx`
15. `src/app/programs/api-testing-postman-rest-assured/page.tsx`
16. `src/app/programs/automation-testing-selenium/page.tsx`
17. `src/app/programs/backend-development/page.tsx`
18. `src/app/programs/basic-english-communication/page.tsx`
19. `src/app/programs/career-acceleration/page.tsx`
20. `src/app/programs/communication-for-beginners/page.tsx`
21. `src/app/programs/complete-software-testing-course/page.tsx`
22. `src/app/programs/corporate-communication/page.tsx`
23. `src/app/programs/english-grammar-tenses/page.tsx`
24. `src/app/programs/frontend-development/page.tsx`
25. `src/app/programs/full-stack-development/page.tsx`
26. `src/app/programs/full-stack-engineering/page.tsx`
27. `src/app/programs/interview-communication/page.tsx`
28. `src/app/programs/java-development/page.tsx`
29. `src/app/programs/java-selenium/page.tsx`
30. `src/app/programs/javascript/page.tsx`
31. `src/app/programs/javascript-typescript-test-automation/page.tsx`
32. `src/app/programs/manual-testing/page.tsx`
33. `src/app/programs/mobile-app-testing/page.tsx`
34. `src/app/programs/nodejs/page.tsx`
35. `src/app/programs/performance-testing/page.tsx`
36. `src/app/programs/playwright-automation/page.tsx`
37. `src/app/programs/professional-communication/page.tsx`
38. `src/app/programs/python-development/page.tsx`
39. `src/app/programs/react-js/page.tsx`
40. `src/app/programs/software-development-with-ai-tools/page.tsx`
41. `src/app/programs/software-testing-cybersecurity/page.tsx`
42. `src/app/programs/spoken-english/page.tsx`
43. `src/app/programs/web-development/page.tsx`

### 1.2 Route-Specific Navbar & Footer Considerations
- **Dynamic Awareness**: `Navbar.tsx` is already a client component utilizing `usePathname()`, scroll listeners (`isScrolled`), and intersection observers for active sections.
- **Header State**: Currently, `Navbar.tsx` (line 17) uses:
  ```tsx
  const isDarkHeader = (pathname === '/' || pathname === '/about' || pathname === '/team') && !isScrolled;
  ```
  Once the theme tokens are cleaned up and normalized, the navbar adapts seamlessly across all routes.
- **Universal Presence**: Every single page in the application is designed with both Navbar and Footer. No route requires omitting either component.

---

## 2. Root Layout Architecture Design

### 2.1 Proposed `src/app/layout.tsx`
```tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroller from '@/components/providers/SmoothScroller';
import { ThemeProvider } from '@/components/providers/theme-provider';
import Preloader from '@/components/ui/Preloader';
import CustomCursor from '@/components/ui/CustomCursor';
import PageTransition from '@/components/ui/PageTransition';
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
      className={cn("h-full", "antialiased", spaceGrotesk.variable, inter.variable, jetbrainsMono.variable, "font-sans", inter.variable)}
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
            <div className="flex-1 flex flex-col">
              {children}
            </div>
            <Footer />
          </SmoothScroller>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### 2.2 Refactoring Pattern for Page Files
Each page file (e.g. `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/programs/[slug]/page.tsx`) should be cleaned up as follows:

**Before**:
```tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
...
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        ...
      </main>
      <Footer />
    </>
  );
}
```

**After**:
```tsx
import HeroSection from "@/components/sections/HeroSection";
...
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      ...
    </main>
  );
}
```

---

## 3. Error Boundaries & Resilience Architecture

Currently, `src/app/` contains NO error handling components. We have designed 3 production-grade boundaries:

### 3.1 `src/app/not-found.tsx` (404 Page)
```tsx
import Link from 'next/link';
import { Home, BookOpen, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6 py-32 bg-background text-foreground" role="main">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/20 text-[#FF7A00] text-sm font-semibold">
          <span>Error 404</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
          Page <span className="text-[#FF7A00]">Not Found</span>
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
          The page you are looking for does not exist, has been removed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FF7A00] text-white font-medium text-sm hover:bg-[#FF7A00]/90 transition-colors shadow-lg shadow-[#FF7A00]/20"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/programs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-border bg-card text-foreground font-medium text-sm hover:bg-muted transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            Browse Programs
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </main>
  );
}
```

### 3.2 `src/app/error.tsx` (Route-Level Error Boundary)
```tsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log runtime exception for observability
    console.error('Runtime error caught by boundary:', error);
  }, [error]);

  return (
    <main 
      role="alert" 
      aria-live="assertive"
      className="min-h-[80vh] flex items-center justify-center px-6 py-32 bg-background text-foreground"
    >
      <div className="max-w-lg w-full text-center space-y-6 bg-card p-8 md:p-12 rounded-3xl border border-border shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-destructive/10 text-destructive flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-8 h-8 text-red-500" />
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
          Something went wrong
        </h1>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          An unexpected error occurred while loading this page. Please try refreshing or return to the homepage.
        </p>

        {error.digest && (
          <p className="text-xs font-mono text-muted-foreground/60 bg-muted px-3 py-1.5 rounded-lg inline-block">
            Digest: {error.digest}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FF7A00] text-white font-medium text-sm hover:bg-[#FF7A00]/90 transition-colors shadow-lg shadow-[#FF7A00]/20"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-medium text-sm hover:bg-muted transition-colors"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
```

### 3.3 `src/app/global-error.tsx` (Root Layout Error Boundary)
```tsx
'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Fatal global error caught by boundary:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#071340] text-white flex flex-col items-center justify-center p-6 font-sans">
        <div role="alert" className="max-w-md w-full text-center space-y-6 bg-[#0B1F5E] p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center mx-auto">
            <AlertTriangle className="w-8 h-8" />
          </div>
          
          <h1 className="text-2xl font-bold">Fatal Application Error</h1>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            A critical system error occurred. We apologize for the inconvenience.
          </p>

          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FF7A00] text-white font-medium text-sm hover:bg-[#FF7A00]/90 transition-colors shadow-lg shadow-[#FF7A00]/20"
          >
            <RefreshCw className="w-4 h-4" />
            Reload Application
          </button>
        </div>
      </body>
    </html>
  );
}
```

---

## 4. Light/Dark Mode Zebra-Striping & Hardcoded Hex Backgrounds Audit

### 4.1 Root Cause Analysis
The project defines standard Tailwind semantic tokens in `src/app/globals.css`:
- Light mode `:root`: `--background: oklch(1 0 0)`, `--card: oklch(1 0 0)`, `--foreground: oklch(0.145 0 0)`
- Dark mode `.dark`: `--background: #071340`, `--card: #0B1F5E`, `--foreground: oklch(0.985 0 0)`

However, section components bypassed these tokens, hardcoding dark navy classes in light mode:

| Component | Current Class Pattern | Light Mode Effect | Dark Mode Effect | Recommended Semantic Class |
|---|---|---|---|---|
| `HeroSection.tsx:48` | `bg-[#0B1F5E] dark:bg-[#071340]` + `text-white` | **Dark Navy** (Forced Dark) | Dark Navy | `bg-gradient-to-b from-blue-50 to-white dark:from-[#0B1F5E] dark:to-[#071340] text-foreground` |
| `WhoWeAreSection.tsx:66` | `bg-[var(--gray-50)] dark:bg-[#071340]` | Light Gray | Dark Navy | `bg-muted/40 dark:bg-background text-foreground` |
| `WhySkillPediaSection.tsx:29` | `bg-white dark:bg-[#071340]` | Pure White | Dark Navy | `bg-background text-foreground` |
| `RoadmapSection.tsx:35` | `bg-[var(--gray-50)] dark:bg-[#071340]` | Light Gray | Dark Navy | `bg-muted/40 dark:bg-background text-foreground` |
| `LearningFlowSection.tsx:64` | `bg-white dark:bg-[#071340]` | Pure White | Dark Navy | `bg-background text-foreground` |
| `ProjectsSection.tsx:74` | `bg-gray-50 dark:bg-[#071340]` | Light Gray | Dark Navy | `bg-muted/40 dark:bg-background text-foreground` |
| `CareerSection.tsx:18` | `bg-white dark:bg-[#071340]` | Pure White | Dark Navy | `bg-background text-foreground` |
| `StatsSection.tsx:55` | `bg-[#0B1F5E] dark:bg-[#071340]` + `text-white` | **Dark Navy** (Forced Dark) | Dark Navy | `bg-muted/50 dark:bg-card text-foreground` |
| `TestimonialsSection.tsx:41` | `bg-gray-50 dark:bg-[#071340]` | Light Gray | Dark Navy | `bg-muted/40 dark:bg-background text-foreground` |
| `CTASection.tsx:23` | `bg-[#0B1F5E] dark:bg-[#071340]` + `text-white` | **Dark Navy** (Forced Dark) | Dark Navy | `bg-gradient-to-r from-blue-900 to-indigo-900 text-white` (if intentional banner) or `bg-card border-border` |
| `FAQSection.tsx:22` | `bg-white dark:bg-[#071340]` | Pure White | Dark Navy | `bg-background text-foreground` |
| `Footer.tsx:16` | `bg-[#071340] dark:bg-[#071340]` + `text-white` | **Dark Navy** (Forced Dark) | Dark Navy | `bg-[#071340] text-white` (Design choice for footer) |
| `TeamSection.tsx:141` | `bg-[#0B1F5E] dark:bg-[#071340] text-white` | **Dark Navy** (Forced Dark) | Dark Navy | `bg-background text-foreground` (Cards: `bg-card`) |
| `NavigationPortalView.tsx:146` | `bg-[#0B1F5E] dark:bg-[#071340] text-white` | **Dark Navy** (Forced Dark) | Dark Navy | `bg-background text-foreground` |

### 4.2 Light Mode "Zebra-Striping" Progression
In Light Mode, when scrolling from top to bottom of `/`:
1. Hero: **DARK BLUE** (`#0B1F5E`)
2. Who We Are: LIGHT GRAY (`#F9FAFB`)
3. Why SkillPedia: WHITE (`#FFFFFF`)
4. Roadmap: LIGHT GRAY (`#F9FAFB`)
5. Learning Flow: WHITE (`#FFFFFF`)
6. Projects: LIGHT GRAY (`#F9FAFB`)
7. Career: WHITE (`#FFFFFF`)
8. Stats: **DARK BLUE** (`#0B1F5E`)
9. Testimonials: LIGHT GRAY (`#F9FAFB`)
10. CTA: **DARK BLUE** (`#0B1F5E`)
11. FAQ: WHITE (`#FFFFFF`)
12. Footer: **DARK BLUE** (`#071340`)

Sections 1, 8, 10 jarringly break visual rhythm. Replacing with cohesive alternating light tokens (`bg-background` and `bg-muted/40`) resolves the issue entirely.

---

## 5. Invalid HTML Nesting & Accessibility Audit

### 5.1 Nesting Violations Found

#### Violation 1: `<button>` inside `<Link>` in `HeroSection.tsx`
- **Location**: `src/components/sections/HeroSection.tsx` Lines 109–118
- **Code**:
  ```tsx
  <Link href="/apply" passHref>
    <motion.button 
      type="button"
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 122, 0, 0.4)" }}
      whileTap={{ scale: 0.95 }}
      className="bg-[#FF7A00] text-white rounded-full px-8 py-4 font-medium"
    >
      Apply Now
    </motion.button>
  </Link>
  ```
- **Issue**: HTML5 Disallowed Ancestor: an `<a>` element cannot contain a `<button>`. Screen readers encounter conflicting roles (`link` vs `button`), and keyboard focus behavior is erratic.
- **Fix**:
  ```tsx
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 122, 0, 0.4)" }}
    whileTap={{ scale: 0.95 }}
    className="rounded-full inline-block"
  >
    <Link 
      href="/apply" 
      className="inline-flex items-center justify-center bg-[#FF7A00] text-white rounded-full px-8 py-4 font-medium"
    >
      Apply Now
    </Link>
  </motion.div>
  ```

#### Violation 2: `<button>` inside `<Link>` in `HeroSection.tsx`
- **Location**: `src/components/sections/HeroSection.tsx` Lines 120–129
- **Code**:
  ```tsx
  <Link href="/programs" className="block">
    <motion.button 
      type="button"
      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      whileTap={{ scale: 0.95 }}
      className="bg-transparent border border-white/30 dark:border-blue-400/40 text-white dark:text-blue-100 hover:bg-white/10 dark:hover:bg-blue-500/20 rounded-full px-8 py-4 font-medium transition-colors"
    >
      Explore Curriculum
    </motion.button>
  </Link>
  ```
- **Fix**: Wrap `<Link>` with `motion.div` or style `<Link>` directly.

#### Violation 3: `<button>` inside `<Link>` in `CTASection.tsx`
- **Location**: `src/components/sections/CTASection.tsx` Lines 72–76
- **Code**:
  ```tsx
  <Link href="/apply" passHref>
    <button type="button" className="px-8 py-4 bg-[#FF7A00] text-white rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,122,0,0.4)] hover:shadow-[0_0_30px_rgba(255,122,0,0.6)]">
      Apply Now
    </button>
  </Link>
  ```
- **Fix**: Move styling directly onto the `<Link>` element.

### 5.2 Landmark & Heading Hierarchy Audit
- **Main Landmark**: Currently, `<main>` is instantiated inside individual client views (e.g. `CeoClient.tsx`, `ApplyClient.tsx`, `PrivacyClient.tsx`) as well as in `page.tsx`. When `<Navbar>` and `<Footer>` move to `layout.tsx`, ensure there is **exactly one** `<main>` element rendered per page.
- **Heading Levels**: Headings progress logically (`h1` -> `h2` -> `h3`). In `HeroSection.tsx`, `h1` is used; each section uses `h2`, and cards use `h3`.

---

## 6. Contact Navigation Links Audit

### 6.1 Findings & Inconsistencies
1. **`NAV_LINKS` in `src/lib/constants.ts` (Line 20)**:
   - Contains `{ label: "Contact", href: "/about" }`.
   - Clicking "Contact" navigates to the `/about` portal view rather than a contact form or contact anchor.
2. **Legal Pages (`PrivacyClient.tsx`, `TermsClient.tsx`, `RefundClient.tsx`)**:
   - Contain: `<Link href="/about" className="...">Or reach out via our Contact Page &rarr;</Link>`.
3. **Homepage CTA Section**:
   - Has `id="contact"`.
4. **Admissions / Application Form**:
   - Located at `/apply`, containing contact inputs and direct contact email (`smartminds.boa@proton.me`).
5. **`/about` Navigation Portal (`NavigationPortalView.tsx`)**:
   - Lists `"CONTACT"` item whose CTA is `"APPLY FOR BATCH"` pointing to `ctaHref: "/apply"`.

### 6.2 Target Resolution Strategy
- **Navbar & Legal Links**: Change the Contact link to route to `"/apply"` or `"/#contact"`.
- If the user prefers a dedicated Contact landing, `href: "/apply"` represents the primary contact and inquiry interface in SkillPedia.
- Update `constants.ts`:
  ```typescript
  export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
    { label: "Contact", href: "/apply" }, // or "/#contact"
  ] as const;
  ```
- Update legal pages: `<Link href="/apply">Or reach out via our Contact Form &rarr;</Link>`.

---

## 7. Migration Plan & Step-by-Step Instructions

1. **Step 1: Create Error Boundaries**
   - Create `src/app/not-found.tsx`
   - Create `src/app/error.tsx`
   - Create `src/app/global-error.tsx`

2. **Step 2: Update Root `layout.tsx`**
   - Import `<Navbar />` and `<Footer />`.
   - Place them inside `<SmoothScroller>` wrapping `{children}`.

3. **Step 3: Remove Redundant Navbar/Footer Imports**
   - Strip `<Navbar />` and `<Footer />` imports and JSX instances from all 10 standalone `page.tsx` files and the consolidated dynamic course route `src/app/programs/[slug]/page.tsx`.

4. **Step 4: Fix HTML Nesting Violations**
   - Remove `<button>` inside `<Link>` in `HeroSection.tsx` and `CTASection.tsx`.

5. **Step 5: Rectify Theme Tokens & Zebra-Striping**
   - Update `HeroSection`, `StatsSection`, `CTASection`, `TeamSection`, and `NavigationPortalView` to use responsive semantic tokens (`bg-background`, `bg-card`, `bg-muted`, `text-foreground`).

6. **Step 6: Harmonize Contact Links**
   - Update `NAV_LINKS` in `constants.ts` and links in `PrivacyClient`, `TermsClient`, `RefundClient`.
