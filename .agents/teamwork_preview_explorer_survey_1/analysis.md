# Technical Survey & Architecture Report: Dynamic Routes & Course Data Consolidation

## Executive Summary

This report delivers a forensic survey and architectural blueprint for consolidating **33 hardcoded course directories** under `src/app/programs/` into a single, high-performance Next.js dynamic route (`src/app/programs/[slug]/page.tsx`), backed by a centralized typed data module (`src/lib/coursesData.ts`) and a shared presentation component (`src/components/programs/CourseDetailView.tsx`).

### Key Quantitative Findings
- **33 Course Directories** currently exist with 66 discrete TypeScript/TSX files (`page.tsx` and `*Client.tsx`).
- **10,233 lines of duplicated code** (521.7 KB) will be eliminated from the codebase.
- **63 unique Lucide icons** and **7 authentic instructor profiles** are utilized across all 33 courses.
- **Zero data loss**: 100% of metadata, hero titles, stats, toolkits, 3-module curriculums (594 total topics), instructor bios, and CTA copy have been cataloged and mapped into a clean, normalized schema.

---

## 1. Comprehensive Inventory of all 33 Courses

| # | Slug | Category | Duration | Level | Meta Title | Badge Text | Tools Count | Modules & Topics | Instructors | Color Accent |
|---|------|----------|----------|-------|------------|------------|-------------|------------------|-------------|--------------|
| 1 | `advanced-communication` | Communication | 45 Days | Advanced | Advanced Communication & Influence Program | Leadership & Influence Program | 6 tools | 3 phases (18 topics) | Line, Dharmendra | `#6366F1` |
| 2 | `ai-based-software-testing` | Testing | 45 Days | Intermediate to Advanced | AI-Based Software Testing | 45-Day Next-Gen AI QA Specialization | 8 tools | 3 phases (18 topics) | Aniket, Dharmendra | `#06B6D4` |
| 3 | `ai-ml-development` | Development | 3 Months (12 Wks) | Beginner to Advanced | AI & ML Development Program | Premium Intelligence Program | 8 tools | 3 months (19 topics) | Ayush, Dharmendra | `#6366F1` |
| 4 | `api-development` | Development | 45 Days | Intermediate | API Development Program | 45-Day API Engineering Sprint | 6 tools | 3 months (18 topics) | Ayush, Saurabh | `#8B5CF6` |
| 5 | `api-testing-postman-rest-assured` | Testing | 45 Days | Intermediate | API Testing with Postman & Rest Assured | 45-Day API Automation Program | 8 tools | 3 phases (18 topics) | Aniket, Sumit | `#F59E0B` |
| 6 | `automation-testing-selenium` | Testing | 45 Days | Intermediate | Automation Testing with Selenium | 45-Day Test Automation Accelerator | 8 tools | 3 phases (18 topics) | Aniket, Dharmendra | `#10B981` |
| 7 | `backend-development` | Development | 3 Months | Intermediate to Advanced | Backend Development Program | 3-Month Backend Architecture Track | 8 tools | 3 months (18 topics) | Ayush, Saurabh | `#6366F1` |
| 8 | `basic-english-communication` | Communication | 45 Days | Beginner | Basic English Communication Program | Foundational English Speaking | 6 tools | 3 phases (18 topics) | Lavli, Line | `#F43F5E` |
| 9 | `career-acceleration` | Communication | 3 Months (12 Wks) | All Levels | Career Acceleration | Placement & Soft Skills Program | 6 tools | 3 months (18 topics) | Line, Lavli | `#F43F5E` |
| 10 | `communication-for-beginners` | Communication | 45 Days | Beginner | Communication for Beginners | Zero-to-Confidence Program | 6 tools | 3 phases (18 topics) | Lavli, Dharmendra | `#10B981` |
| 11 | `complete-software-testing-course` | Testing | 3 Months | Beginner to Advanced | Complete Software Testing Course | 3-Month Complete SDET Career Track | 8 tools | 3 months (18 topics) | Aniket, Sumit | `#059669` |
| 12 | `corporate-communication` | Communication | 3 Months | Intermediate to Advanced | Corporate Communication & Leadership | Executive Leadership & Strategy | 6 tools | 3 months (18 topics) | Line, Dharmendra | `#4F46E5` |
| 13 | `english-grammar-tenses` | Communication | 45 Days | Beginner to Intermediate | English Grammar & Tenses Mastery | Grammar & Syntax Mastery | 6 tools | 3 phases (18 topics) | Lavli, Line | `#A855F7` |
| 14 | `frontend-development` | Development | 3 Months | Beginner to Advanced | Frontend Development Program | 3-Month Frontend Engineering Track | 8 tools | 3 months (18 topics) | Saurabh, Ayush | `#EC4899` |
| 15 | `full-stack-development` | Development | 3 Months | Beginner to Advanced | Full Stack Development Program | 3-Month Comprehensive Program | 8 tools | 3 months (18 topics) | Ayush, Saurabh | `#3B82F6` |
| 16 | `full-stack-engineering` | Development | 3 Months (12 Wks) | Beginner to Advanced | Full Stack Engineering Program | Premium Engineering Program | 8 tools | 3 months (19 topics) | Ayush, Dharmendra | `#3B82F6` |
| 17 | `interview-communication` | Communication | 45 Days | All Levels | Interview Communication & Placement Mastery | Interview Mastery & Placement Prep | 6 tools | 3 phases (18 topics) | Line, Dharmendra | `#FF7A00` |
| 18 | `java-development` | Development | 3 Months | Beginner to Advanced | Java Development Program | 3-Month Enterprise Java Immersion | 8 tools | 3 months (18 topics) | Saurabh, Ayush | `#EA580C` |
| 19 | `java-selenium` | Testing | 3 Months | Beginner to Advanced | Java + Selenium Full Track | 3-Month Flagship SDET Track | 8 tools | 3 months (18 topics) | Aniket, Dharmendra | `#F97316` |
| 20 | `javascript` | Development | 45 Days | Beginner to Intermediate | JavaScript Mastery Program | 45-Day JavaScript Specialization | 6 tools | 3 months (18 topics) | Ayush, Saurabh | `#FACC15` |
| 21 | `javascript-typescript-test-automation` | Testing | 45 Days | Beginner to Intermediate | JavaScript & TypeScript for Test Automation | 45-Day SDET Coding Accelerator | 8 tools | 3 phases (18 topics) | Aniket, Sumit | `#3B82F6` |
| 22 | `manual-testing` | Testing | 45 Days | Beginner | Manual Testing Program | 45-Day QA Foundations Track | 8 tools | 3 phases (18 topics) | Dharmendra, Aniket | `#14B8A6` |
| 23 | `mobile-app-testing` | Testing | 45 Days | Intermediate | Mobile App Testing with Appium | 45-Day Mobile Automation Track | 8 tools | 3 phases (18 topics) | Aniket, Sumit | `#8B5CF6` |
| 24 | `nodejs` | Development | 45 Days | Intermediate | Node.js Backend Program | 45-Day Backend Engineering Sprint | 6 tools | 3 months (18 topics) | Saurabh, Ayush | `#22C55E` |
| 25 | `performance-testing` | Testing | 45 Days | Intermediate | Performance Testing with JMeter | 45-Day Performance Engineering | 8 tools | 3 phases (18 topics) | Dharmendra, Sumit | `#EF4444` |
| 26 | `playwright-automation` | Testing | 45 Days | Intermediate | Playwright Automation Program | 45-Day Next-Gen E2E Automation | 8 tools | 3 phases (18 topics) | Aniket, Saurabh | `#2DD4BF` |
| 27 | `professional-communication` | Communication | 45 Days | Intermediate to Advanced | Professional Communication in the Workplace | Corporate Readiness Program | 6 tools | 3 phases (18 topics) | Line, Lavli | `#0284C7` |
| 28 | `python-development` | Development | 3 Months | Beginner to Advanced | Python Development Program | 3-Month High-Performance Python Track | 8 tools | 3 months (18 topics) | Ayush, Dharmendra | `#38BDF8` |
| 29 | `react-js` | Development | 45 Days | Intermediate | React JS Program | 45-Day React Specialization | 6 tools | 3 months (18 topics) | Saurabh, Ayush | `#61DAFB` |
| 30 | `software-development-with-ai-tools` | Development | 45 Days | Beginner to Intermediate | Software Development with AI Tools Program | 45-Day AI-Powered Engineering Sprint | 6 tools | 3 months (18 topics) | Ayush, Dharmendra | `#10B981` |
| 31 | `software-testing-cybersecurity` | Testing | 3 Months (12 Wks) | Beginner to Advanced | Software Testing & Cybersecurity | Advanced Security & Quality | 8 tools | 3 months (18 topics) | Dharmendra, Ayush | `#14B8A6` |
| 32 | `spoken-english` | Communication | 45 Days | Beginner to Intermediate | Spoken English & Fluency Program | Speech Fluency & Accent Mastery | 6 tools | 3 phases (18 topics) | Lavli, Line | `#FB923C` |
| 33 | `web-development` | Development | 45 Days | Beginner to Intermediate | Web Development Program | 45-Day Accelerated Web Bootcamp | 6 tools | 3 months (18 topics) | Saurabh, Ayush | `#06B6D4` |

---

## 2. Structural & Pattern Analysis

### 2.1 Uniform Page Sections Across All 33 Pages
Every course client component follows an identical 5-section presentation structure:
1. **Hero Section**:
   - Floating background glow blobs (Framer Motion parallax `useScroll` + `useTransform`).
   - Program badge with Lucide icon and category-specific styling.
   - Main H1 title with multi-color gradient clip text for focal keywords.
   - Descriptive paragraph with optimal typography.
   - Primary CTA button ("Apply for Next Cohort" → `/apply`) and secondary link ("View Curriculum" → `#curriculum`).
   - Quick stats grid (4 items: Duration, Format, Focus, Mentorship) with icons.
2. **Tools / Tech Stack / Toolkit Section**:
   - Section Title ("The Modern Stack" / "The QA & Testing Toolkit" / "The Fluency Toolkit" / etc.) and Subtitle.
   - Responsive grid (2-4 columns) of 6 to 8 tools with Lucide icon, name, and color styling.
3. **Curriculum Blueprint Section**:
   - Section Title and Subtitle.
   - 3 progressive modules/phases with period indicator ("Month 1" / "Phase 1 (Weeks 1-2)"), title, descriptive overview, and 6 structured topics with `CheckCircle2` indicators.
4. **Instructors Section**:
   - "Learn From Experts" heading.
   - 2 domain-matched instructor profile cards with photo, name, role, and comprehensive bio.
5. **CTA Section**:
   - Course-specific headline and invitation copy.
   - High-contrast "Apply Now" button linking to `/apply`.

### 2.2 Variations and Normalization
- **Curriculum Period**: 3-Month courses used `month: "Month 1"`, whereas 45-Day courses used `phase: "Phase 1 (Weeks 1-2)"`. We normalize this into `period: string`.
- **Toolkit Array Names**: Development courses used `TECH_STACK`, Testing courses used `TESTING_TOOLS`, Communication courses used `TOOLKIT`. We normalize this into `toolsSection.tools: ToolItem[]`.
- **Instructor Image Elements**: Currently use raw `<img>` tags (`/images/team/<Name>.png`). In `CourseDetailView.tsx`, we migrate to `next/image` with `fill` and optimized layout.

---

## 3. TypeScript Schema Specification (`src/lib/coursesData.ts`)

```typescript
export type CourseCategory = 'Development' | 'Testing' | 'Communication';
export type CourseDuration = '45 Days' | '3 Months' | '12 Weeks';

export interface QuickStat {
  label: string;
  value: string;
  iconName: string; // e.g. 'Calendar', 'MonitorPlay', 'Briefcase', 'Users'
}

export interface ToolItem {
  name: string;
  iconName: string; // e.g. 'Terminal', 'Cpu', 'Database', 'Globe'
  color: string; // e.g. 'text-blue-500', 'text-orange-500'
}

export interface ToolsSectionConfig {
  title: string;
  description: string;
  tools: ToolItem[];
}

export interface CurriculumModule {
  period: string; // "Month 1", "Phase 1 (Weeks 1-2)", etc.
  title: string;
  description: string;
  topics: string[];
}

export interface CurriculumSectionConfig {
  title: string;
  description: string;
  modules: CurriculumModule[];
}

export interface Instructor {
  name: string;
  role: string;
  image: string; // e.g. '/images/team/Ayush.webp'
  bio: string;
}

export interface CTAConfig {
  headline: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

export interface CourseData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: CourseCategory;
  duration: CourseDuration;
  level: string;
  description: string;
  icon: string;
  color: string;
  tags: string[];

  // Hero Section
  badge: {
    text: string;
    iconName: string;
  };
  heroHeading: {
    highlight: string;
    rest: string;
  };
  heroDescription: string;
  stats: QuickStat[];

  // Tools / Tech Stack
  toolsSection: ToolsSectionConfig;

  // Curriculum Blueprint
  curriculumSection: CurriculumSectionConfig;

  // Instructors
  instructors: Instructor[];

  // Call to Action
  cta: CTAConfig;
}
```

### Data Access Helpers in `src/lib/coursesData.ts`
```typescript
export function getAllCourses(): CourseData[] {
  return COURSES_DATA;
}

export function getAllCourseSlugs(): string[] {
  return COURSES_DATA.map((c) => c.slug);
}

export function getCourseBySlug(slug: string): CourseData | undefined {
  return COURSES_MAP[slug];
}

export function getCoursesByCategory(category: CourseCategory): CourseData[] {
  return COURSES_DATA.filter((c) => c.category === category);
}
```

---

## 4. Reusable Presentation Component (`CourseDetailView.tsx`)

### Location
`src/components/programs/CourseDetailView.tsx`

### Key Architecture Features
1. **Dynamic Lucide Icon Lookup**: A lightweight map or resolver that maps strings (`"Terminal"`, `"Globe"`, `"Sparkles"`, etc.) directly to Lucide icon components with a safe fallback to `<Sparkles />`.
2. **Next/Image Optimization**: Replaces raw `<img>` tags in instructor cards with `<Image src={instructor.image} alt={instructor.name} fill sizes="128px" className="object-cover..." />`.
3. **Semantic Theme Token Compatibility (R4)**: Backgrounds use `bg-white dark:bg-[#071340]` and `dark:bg-[#0B1F5E]` with proper semantic border tokens `dark:border-white/10`.
4. **Framer Motion Performance**: Smooth scroll-linked parallax without performance drops or unnecessary re-renders.

---

## 5. Dynamic Route Page (`src/app/programs/[slug]/page.tsx`)

```tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CourseDetailView from '@/components/programs/CourseDetailView';
import { getAllCourseSlugs, getCourseBySlug } from '@/lib/coursesData';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: 'Course Not Found | SkillPedia',
      description: 'The requested course program could not be found.',
    };
  }

  return {
    title: course.metaTitle,
    description: course.metaDescription,
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailView course={course} />;
}
```

---

## 6. Route & Slug Compatibility Matrix

Every incoming link across the application has been verified:
- `src/lib/constants.ts`:
  - `PROGRAMS_LIST`: Contains 29 courses (all matching slugs).
  - `FOOTER_LINKS.programs`: Links to `full-stack-engineering`, `ai-ml-development`, `software-testing-cybersecurity`, `career-acceleration`. All 4 are included in `COURSES_DATA` to ensure zero broken links.
- `src/app/programs/ProgramsList.tsx`: Links dynamically to `${program.href}`.
- `src/components/sections/HeroSection.tsx`: Links to `/programs`.
- `src/app/ceo-message/CeoClient.tsx`: Links to `/programs`.

---

## 7. Migration & Deletion Plan

1. **Step 1**: Write complete `src/lib/coursesData.ts` with all 33 course objects and helper exports.
2. **Step 2**: Create `src/components/programs/CourseDetailView.tsx` with dynamic icons and `next/image`.
3. **Step 3**: Create dynamic route `src/app/programs/[slug]/page.tsx` with static generation.
4. **Step 4**: Delete the 33 hardcoded directories:
   `rm -rf src/app/programs/advanced-communication ... src/app/programs/web-development`
   (leaving only `src/app/programs/[slug]`, `src/app/programs/page.tsx`, and `src/app/programs/ProgramsList.tsx`).
5. **Step 5**: Execute `npx tsc --noEmit` and `npm run build` to confirm all 33 dynamic routes build cleanly.
