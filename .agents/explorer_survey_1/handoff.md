# Survey & Pattern Analysis Report: Course Pages in `/src/app/programs/`

## 1. Observation

### 1.1 Existing Directory Structure & Routing
Direct inspection of `/src/app/programs/` reveals 4 existing program folders and 2 root files:
- `/src/app/programs/page.tsx` (Programs overview landing page)
- `/src/app/programs/ProgramsList.tsx` (Grid of animated program cards)
- `/src/app/programs/full-stack-engineering/` (`page.tsx`, `FullStackClient.tsx`)
- `/src/app/programs/ai-ml-development/` (`page.tsx`, `AIMLClient.tsx`)
- `/src/app/programs/software-testing-cybersecurity/` (`page.tsx`, `SecurityClient.tsx`)
- `/src/app/programs/career-acceleration/` (`page.tsx`, `CareerClient.tsx`)

### 1.2 Server Component Pattern (`page.tsx`)
Each course subfolder contains a server component `page.tsx` strictly following this structure:
```tsx
import type { Metadata } from 'next';
import FullStackClient from './FullStackClient';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Full Stack Engineering Program | SkillPedia',
  description: 'Master modern web development in 12 weeks. Build scalable applications from scratch using React, Next.js, Node.js, and more with our Full Stack Engineering program.',
};

export default function FullStackEngineeringPage() {
  return (
    <>
      <Navbar />
      <FullStackClient />
      <Footer />
    </>
  );
}
```

### 1.3 Client Component Architecture (`[Program]Client.tsx`)
All client components share an identical section layout and Framer Motion parallax setup:

1. **Directives & Imports**:
   - `'use client';`
   - `motion`, `useScroll`, `useTransform` from `framer-motion`
   - `Link` from `next/link`
   - Icons from `lucide-react` (e.g., `Terminal`, `Cpu`, `Database`, `Server`, `CheckCircle2`, `ArrowRight`, `Users`, `Calendar`, `Briefcase`, `MonitorPlay`)

2. **Data Arrays / Schemas**:
   - `TECH_STACK` / `TOOLKIT` (6 to 8 items with `name`, `icon: <LucideIcon className="w-6 h-6" />`, `color: 'text-...'`)
   - `CURRICULUM` (3 modules or phases, each with `month` / phase label, `title`, `description`, `topics: string[]` containing 5–7 bullet points)
   - `INSTRUCTORS` (2 instructors with `name`, `role`, `image: '/images/team/[Name].png'`, `bio`)

3. **Section Hierarchy**:
   - `<main className="min-h-screen bg-white dark:bg-[#071340]">`
   - **Section 1: Hero Section (`pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden`)**:
     - Gradient background + Framer Motion parallax blobs (`y` transform, blur `[100px]`).
     - Category/Feature badge pill: `inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color]-100 dark:bg-[color]-900/30 text-[color]-600 dark:text-[color]-400 text-sm font-semibold mb-6`.
     - Heading: `text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight font-[family-name:var(--font-heading)]` with gradient keyword: `text-transparent bg-clip-text bg-gradient-to-r from-[color]-600 to-[color]-500`.
     - Subtitle: `text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed`.
     - Dual CTA buttons:
       - Primary: `px-8 py-4 rounded-full bg-[#FF7A00] text-white font-semibold text-lg hover:bg-[#FF7A00]/90 transition-all shadow-lg shadow-[#FF7A00]/25 flex items-center justify-center gap-2 group` -> `/apply`.
       - Secondary: `px-8 py-4 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold text-lg hover:bg-gray-50 dark:hover:bg-white/10 transition-all text-center` -> `#curriculum`.
     - Quick Stats grid (4 items): Duration (`12 Weeks` or `45 Days`), Format (`Live Classes`), Focus (`Project-Based` / `Hands-on QA` / `Practical Speaking`), Mentorship (`1-on-1 Guidance`).
   - **Section 2: Tech Stack / Tools Section (`py-20 bg-gray-50 dark:bg-[#0B1F5E]/50`)**:
     - Heading: "The Modern Stack" / "The Testing Stack" / "The Professional Toolkit"
     - Grid: `grid grid-cols-2 md:grid-cols-4 gap-6` (or `md:grid-cols-3`)
     - Cards: `p-6 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 hover:shadow-xl dark:hover:shadow-[color]-500/10 transition-all group`
   - **Section 3: Curriculum Section (`id="curriculum" className="py-24"`)**:
     - Heading: `[Duration] Curriculum`
     - Mobile vertical timeline indicator: `w-px bg-[color]-200 dark:bg-[color]-800 md:hidden`
     - Module card: `bg-white dark:bg-[#0B1F5E] rounded-3xl p-8 md:p-10 border border-gray-100 dark:border-white/5 shadow-sm relative overflow-hidden group`
     - Orange left accent line: `absolute top-0 left-0 w-2 h-full bg-[#FF7A00] opacity-50 group-hover:opacity-100 transition-opacity`
     - Badge: `text-[#FF7A00] font-bold tracking-wider text-sm uppercase mb-2 block`
     - Module Title + Description + 2-column grid of topic checklist items with `<CheckCircle2 className="w-5 h-5 text-[color]-500 shrink-0 mt-0.5" />`
   - **Section 4: Instructors Section (`py-24 bg-gray-50 dark:bg-[#0B1F5E]/30`)**:
     - Heading: "Learn From Experts"
     - Grid: `grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto`
     - Card: `bg-white dark:bg-[#0B1F5E] p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-lg flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300`
     - Avatar: `w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-gray-50 dark:border-[#071340] shadow-inner bg-gray-100 dark:bg-white/5` with `object-cover group-hover:scale-110 transition-transform duration-500`
     - Name (`text-2xl font-bold text-gray-900 dark:text-white`), Role (`text-[#FF7A00] font-medium mb-4`), Bio (`text-gray-600 dark:text-gray-400 leading-relaxed`)
   - **Section 5: CTA Section (`py-24 relative overflow-hidden`)**:
     - Background: `bg-[color]-600 dark:bg-[#0B1F5E]` + noise overlay `bg-[url('/noise.png')] opacity-20 mix-blend-overlay`
     - Heading + Subtitle + White CTA button linking to `/apply`.

### 1.4 Team Member & Instructor Registry in Codebase
Inspected `src/components/sections/TeamSection.tsx` and `/public/images/team/`:
All 7 verified team members with exact roles, images, and backgrounds:

| Name | Codebase Role | Photo Asset Path | Expertise Domain |
|---|---|---|---|
| **Ayush Dwivedy** | Managing Director · Technology & Strategy | `/images/team/Ayush.png` | Development, AI, Full Stack, Software Architecture |
| **Saurabh Pathak** | Backend Developer · Scalable Systems & Cloud | `/images/team/Saurabh.png` | Java, Python, Node.js, Backend, APIs, Databases |
| **Dharmendra Kumar Pandey** | Founder & CEO · Software Testing & Training | `/images/team/Dharmendra.png` | Manual Testing, Automation, QA Architecture, Model Training |
| **Aniket** | Head of Operations · QA & EdTech | `/images/team/Aniket.png` | Selenium, Appium, Playwright, CI/CD, Frameworks |
| **Sumit Kumar** | SDET · Manual, ETL, Mobile & API Testing | `/images/team/Sumit.png` | SDET, Postman, Rest Assured, JMeter, Performance Testing |
| **Line** | Head of HR & Communications · People & Culture | `/images/team/Line.png` | Corporate Comm, Interview Mastery, HR Coaching |
| **Lavli Pandey** | Pre-Basic Communication Trainer · Foundations | `/images/team/Lavli.png` | Spoken English, Grammar, Fluency, Beginner Speaking |

### 1.5 Current Programs Listing & Constants
- `/src/lib/constants.ts` defines `PROGRAMS_LIST` (currently 4 items) which feeds both `/src/app/programs/ProgramsList.tsx` and `/src/app/apply/ApplyClient.tsx` (the program selection dropdown).
- Build status: `npm run build` succeeds with zero errors in ~6s.

---

## 2. Logic Chain

1. **Pattern Consistency Requirement**:
   To ensure all 29 new course pages maintain identical visual polish, performance, and dark/light mode parity:
   - Each course must have its dedicated folder under `/src/app/programs/[slug]/`.
   - Each folder contains `page.tsx` (Server Component for Next.js SEO Metadata) and `[Course]Client.tsx` (Client Component for Framer Motion interactive UI).
   - Shared layout wrappers (`<Navbar />` and `<Footer />`) must be imported in `page.tsx`.

2. **Instructor Allocation Logic**:
   Based on the team's verified domain expertise:
   - **Development Category (11 courses)**: Led by **Ayush Dwivedy** and **Saurabh Pathak** (with Dharmendra as guest mentor for AI Tools/Foundations).
   - **Testing Category (10 courses)**: Led by **Aniket**, **Dharmendra Kumar Pandey**, and **Sumit Kumar**.
   - **Communication Category (8 courses)**: Led by **Line** and **Lavli Pandey**.

3. **Curriculum & Duration Structuring Logic**:
   Per requirements: "All courses must be structured under 3 months (45 days for less complex, 3 months for the rest)."
   - **3-Month Courses (12 Weeks / 3 Phases)**:
     Full Stack Development, Java Development, Python Development, Backend Development, Frontend Development, Automation Testing with Selenium, Java + Selenium, Complete Software Testing, Corporate Communication.
   - **45-Day Courses (6 Weeks / 3 Sprints or 2 Fast-Track Months)**:
     Web Development, JavaScript, React JS, Node.js, API Development, Software Development with AI Tools, Manual Testing, API Testing with Postman & Rest Assured, Playwright Automation, JS/TS for Test Automation, Performance Testing, Mobile App Testing, AI-Based Software Testing, Basic English Communication, Spoken English, English Grammar & Tenses, Communication for Beginners, Advanced Communication, Professional Communication, Interview Communication.

4. **Category Theming Logic**:
   - **Development**: Blue/Indigo/Cyan gradients (`from-blue-600 to-cyan-500` or `from-indigo-600 to-blue-500`), badge `bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400`.
   - **Testing**: Teal/Emerald/Green gradients (`from-teal-500 to-emerald-400` or `from-green-600 to-emerald-500`), badge `bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400`.
   - **Communication**: Rose/Orange/Purple gradients (`from-rose-500 to-orange-400` or `from-purple-600 to-pink-500`), badge `bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400`.

5. **Programs Listing & Constants Architecture**:
   - Adding all 29 courses to `PROGRAMS_LIST` in `src/lib/constants.ts` with categories (`category: 'Development' | 'Testing' | 'Communication'`) allows `ProgramsList.tsx` to offer interactive category filtering tabs ("All", "Development", "Testing", "Communication") or section grids, making the page scalable and easy to navigate while retaining the exact card design language.

---

## 3. Caveats

- **No existing code modified yet**: This investigation was strictly read-only; no implementation files or constants were modified.
- **Image Assets**: All instructor images (`Ayush.png`, `Saurabh.png`, `Dharmendra.png`, `Aniket.png`, `Sumit.png`, `Line.png`, `Lavli.png`) already exist in `/public/images/team/` and are verified. No missing image assets.
- **Icon Imports**: Only valid icon identifiers exported from `lucide-react` (e.g. `Code2`, `Terminal`, `Globe`, `Server`, `Database`, `Cpu`, `ShieldCheck`, `CheckCircle2`, `Activity`, `Smartphone`, `PlayCircle`, `FileText`, `Network`, `Mic`, `MessageSquare`, `Users`, `Briefcase`, `Calendar`, `MonitorPlay`, `BrainCircuit`, `Star`, `Mail`, `Layers`) should be used.

---

## 4. Conclusion & 29-Course Master Specification

The following 29 courses must be generated:

### Category 1: Development (11 Courses)
| # | Course Title | Directory Slug | Duration | Instructors | Theme Color | Key Tech Stack |
|---|---|---|---|---|---|---|
| 1 | Full Stack Development | `full-stack-development` | 3 Months | Ayush Dwivedy, Saurabh Pathak | `#3B82F6` (Blue) | React, Next.js, Node.js, PostgreSQL, Docker, AWS |
| 2 | Java Development | `java-development` | 3 Months | Saurabh Pathak, Ayush Dwivedy | `#EA580C` (Orange) | Core Java, Spring Boot, Hibernate, Microservices, MySQL, Docker |
| 3 | Python Development | `python-development` | 3 Months | Ayush Dwivedy, Saurabh Pathak | `#EAB308` (Amber) | Python 3, Django, FastAPI, PostgreSQL, Redis, Celery |
| 4 | Web Development | `web-development` | 45 Days | Ayush Dwivedy, Saurabh Pathak | `#06B6D4` (Cyan) | HTML5, CSS3, JavaScript, Tailwind CSS, Responsive Design, Git |
| 5 | JavaScript | `javascript` | 45 Days | Ayush Dwivedy, Saurabh Pathak | `#FACC15` (Yellow) | ES6+, Async/Await, DOM APIs, OOP, Design Patterns, TypeScript Basics |
| 6 | React JS | `react-js` | 45 Days | Ayush Dwivedy, Saurabh Pathak | `#38BDF8` (Sky) | React 19, Hooks, Context API, Zustand, Tailwind CSS, Vite |
| 7 | Node.js | `nodejs` | 45 Days | Saurabh Pathak, Ayush Dwivedy | `#22C55E` (Green) | Node.js, Express, REST APIs, MongoDB, JWT Auth, Streams |
| 8 | Backend Development | `backend-development` | 3 Months | Saurabh Pathak, Ayush Dwivedy | `#10B981` (Emerald) | Node.js, FastAPI, PostgreSQL, Redis, Microservices, CI/CD |
| 9 | Frontend Development | `frontend-development` | 3 Months | Ayush Dwivedy, Saurabh Pathak | `#A855F7` (Purple) | HTML/CSS, Modern JS, React, Next.js, Tailwind, Performance & SEO |
| 10 | API Development | `api-development` | 45 Days | Saurabh Pathak, Ayush Dwivedy | `#6366F1` (Indigo) | RESTful Design, FastAPI, Postman, OAuth2, GraphQL, Swagger |
| 11 | Software Development with AI Tools | `software-development-ai-tools` | 45 Days | Ayush Dwivedy, Dharmendra Kumar Pandey | `#8B5CF6` (Violet) | Cursor, GitHub Copilot, Claude API, Prompt Eng, AI Debugging, LLMs |

### Category 2: Testing (10 Courses)
| # | Course Title | Directory Slug | Duration | Instructors | Theme Color | Key Tech Stack |
|---|---|---|---|---|---|---|
| 12 | Manual Testing | `manual-testing` | 45 Days | Dharmendra Kumar Pandey, Sumit Kumar | `#14B8A6` (Teal) | SDLC/STLC, Test Case Design, Jira, Bug Life Cycle, Black Box |
| 13 | Automation Testing with Selenium | `automation-testing-selenium` | 3 Months | Aniket, Dharmendra Kumar Pandey | `#16A34A` (Green) | Selenium WebDriver, TestNG, POM, Maven, Jenkins CI/CD |
| 14 | Java + Selenium | `java-selenium` | 3 Months | Aniket, Dharmendra Kumar Pandey | `#D97706` (Amber) | Core Java OOP, Selenium 4, Cucumber BDD, TestNG, Extent Reports |
| 15 | API Testing with Postman & Rest Assured | `api-testing-postman-rest-assured` | 45 Days | Sumit Kumar, Aniket | `#F97316` (Orange) | Postman, Rest Assured, JSON Schema, OAuth2, Newman CLI |
| 16 | Playwright Automation | `playwright-automation` | 45 Days | Aniket, Sumit Kumar | `#059669` (Emerald) | Playwright, TypeScript, Auto-waiting, Parallel Execution, CI/CD |
| 17 | JavaScript/TypeScript for Test Automation | `javascript-typescript-test-automation` | 45 Days | Aniket, Ayush Dwivedy | `#CA8A04` (Yellow) | JS/TS Core, Async Testing, Cypress, Playwright, Mocha/Chai |
| 18 | Performance Testing | `performance-testing` | 45 Days | Sumit Kumar, Dharmendra Kumar Pandey | `#2563EB` (Blue) | Apache JMeter, Load Testing, Stress/Spike, APM, Server Bottlenecks |
| 19 | Mobile App Testing | `mobile-app-testing` | 45 Days | Sumit Kumar, Aniket | `#4F46E5` (Indigo) | Appium, Android/iOS, Real Devices, Emulators, Mobile Automation |
| 20 | AI-Based Software Testing | `ai-based-software-testing` | 45 Days | Dharmendra Kumar Pandey, Aniket | `#9333EA` (Purple) | AI Test Generation, Visual Testing, Self-Healing Tests, LLM QA |
| 21 | Complete Software Testing Course | `complete-software-testing` | 3 Months | Dharmendra Kumar Pandey, Aniket | `#0D9488` (Teal) | Manual QA, Selenium, Postman, Rest Assured, Appium, JMeter, Jira |

### Category 3: Communication (8 Courses)
| # | Course Title | Directory Slug | Duration | Instructors | Theme Color | Key Tech Stack / Modules |
|---|---|---|---|---|---|---|
| 22 | Basic English Communication | `basic-english-communication` | 45 Days | Lavli Pandey, Line | `#F43F5E` (Rose) | Sentence Construction, Daily Vocabulary, Listening, Fluency |
| 23 | Spoken English | `spoken-english` | 45 Days | Lavli Pandey, Line | `#F59E0B` (Amber) | Pronunciation, Accent Neutralization, Speech Flow, Impromptu |
| 24 | English Grammar & Tenses | `english-grammar-tenses` | 45 Days | Lavli Pandey, Line | `#7C3AED` (Violet) | All 12 Tenses, Active/Passive Voice, Direct/Indirect, Common Errors |
| 25 | Communication for Beginners | `communication-for-beginners` | 45 Days | Lavli Pandey, Line | `#EC4899` (Pink) | Stage Fear Removal, Interpersonal Skills, Body Language, Intro |
| 26 | Advanced Communication | `advanced-communication` | 45 Days | Line, Lavli Pandey | `#4F46E5` (Indigo) | Persuasion, Executive Presence, Public Speaking, Storytelling |
| 27 | Professional Communication | `professional-communication` | 45 Days | Line, Lavli Pandey | `#2563EB` (Blue) | Email Writing, Business Etiquette, Meetings, Conflict Resolution |
| 28 | Interview Communication | `interview-communication` | 45 Days | Line, Lavli Pandey | `#059669` (Emerald) | HR Prep, STAR Method, Behavioral Answers, Salary Negotiation |
| 29 | Corporate Communication | `corporate-communication` | 3 Months | Line, Lavli Pandey | `#E11D48` (Rose) | Leadership Comm, Stakeholder Management, Executive Reporting |

---

## 5. Verification Method

To independently verify the architecture and readiness:
1. **Directory Structure Verification**:
   Inspect that each course folder under `/src/app/programs/[slug]/` contains both `page.tsx` and `[ClientComponent].tsx`.
2. **Metadata & Export Verification**:
   Check that `page.tsx` exports `metadata: Metadata` with SEO title and description, and default exports the page function rendering `<Navbar />`, `<[ClientComponent] />`, `<Footer />`.
3. **Component Lint & Build Verification**:
   Run `npm run build` to verify that Next.js prerenders all 29 routes statically with zero TypeScript or JSX compile errors.
4. **Programs Listing & Dropdown Integration**:
   Verify that `/src/app/programs` renders all 29 cards with active links to `/programs/[slug]`, and `/apply` dropdown lists all 29 course titles from `PROGRAMS_LIST`.
