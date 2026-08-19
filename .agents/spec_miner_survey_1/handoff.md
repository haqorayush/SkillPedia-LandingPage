# Specification Mining & Architecture Report: 29 SkillPedia Programs & ProgramsList Integration

## Executive Summary
This document provides the authoritative specification for all 29 courses across **Development** (11 courses), **Testing** (10 courses), and **Communication** (8 courses). It details directory slugs, URL mappings, durations (45 Days vs 3 Months), card metadata, instructor assignments, curriculum module structure, and the integration architecture for `/src/app/programs/ProgramsList.tsx`.

---

## Features Discovered

| # | Category | Feature | Description | Inputs | Outputs | Error Behavior | Discovered Via |
|---|----------|---------|-------------|--------|---------|----------------|----------------|
| 1 | Listing UI | ProgramsList Grid Rendering | Renders course cards in a responsive CSS grid (`grid-cols-1 md:grid-cols-2` or `lg:grid-cols-3`) with hover glow animations and Framer Motion transitions. | `PROGRAMS_LIST` array from constants | Animated JSX course cards with icon, title, description, tags, link | Empty grid if array is empty; layout shifts if tags exceed width | `/src/app/programs/ProgramsList.tsx:24-75` |
| 2 | Listing UI | Program Card Metadata & Glow | Each card renders a radial-gradient background glow based on `program.color`, an icon container with `${program.color}15` background, title with hover arrow, description, and tag pills. | `{ id, title, description, href, icon, color, tags }` | Styled card with interactive hover effects | Fallback to transparent glow if color is missing/invalid | `/src/app/programs/ProgramsList.tsx:35-68` |
| 3 | Page Routing | Static Course Directory Routing | Next.js App Router static directories under `/src/app/programs/[slug]/page.tsx` serving dedicated course landing pages. | Course slug in route path (e.g., `/programs/full-stack-development`) | Next.js page component rendering Hero, Stack, Syllabus, Instructors, CTA | 404 Not Found if directory or `page.tsx` is missing | `/src/app/programs/full-stack-engineering/page.tsx` |
| 4 | Data Flow | Central Constants Export | `PROGRAMS_LIST` in `src/lib/constants.ts` serves as single source of truth consumed by `ProgramsList.tsx` and `ApplyClient.tsx` dropdown. | Program definitions array | Typed list of programs | Type mismatch in `ApplyClient` if `title` property is changed | `src/lib/constants.ts:467-504`, `src/app/apply/ApplyClient.tsx:354` |
| 5 | Filter Tabs | Category Filter Capability | Ability to filter 29 courses across Development, Testing, and Communication via interactive pill tabs (similar to `ProjectsSection.tsx`). | Category selection tab state (`All`, `Development`, `Testing`, `Communication`) | Filtered array slice of courses | Defaults to `All` if active category has no matches | `src/components/sections/ProjectsSection.tsx:66-116` |
| 6 | Course Details | 3-Month Curriculum Structure | 12-week comprehensive program divided into 3 monthly milestones (Month 1 Foundations, Month 2 Advanced/Frameworks, Month 3 Enterprise/Capstone/Placements). | 3-month syllabus definition | Timeline list with checkmark topics, outcomes, and capstones | Fallback to default styling if module counts differ | `src/app/programs/full-stack-engineering/FullStackClient.tsx:24-65` |
| 7 | Course Details | 45-Day Curriculum Structure | 6-week intensive accelerated specialization divided into 3 progressive phases (Phase 1 Fast-track Basics, Phase 2 Practical Implementation, Phase 3 Real-World Project & Review). | 6-week / 3-phase syllabus definition | Compact timeline with weekly topics and project milestones | Gracefully handles 2 or 3 phase representations | Derived from `ORIGINAL_REQUEST.md` requirement |
| 8 | Team Integration | Instructor Dynamic Mapping | Map instructors dynamically from the 7 verified team members in `TeamSection.tsx` and `/public/images/team/` based on domain expertise. | Team member profile `{ name, role, image, bio }` | Instructor card on course client page | Missing avatar if image path is broken | `src/components/sections/TeamSection.tsx:24-99` |

---

## Edge Cases

| # | Feature | Input | Observed Behavior |
|---|---------|-------|-------------------|
| 1 | Slug Matching | Mismatched slug between `PROGRAMS_LIST.href` and directory name in `/src/app/programs/` | Clicking card navigates to 404 page; directory name MUST exactly equal `slug` in `/programs/[slug]`. |
| 2 | Apply Dropdown | 29 items in `<select>` in `ApplyClient.tsx` | Native HTML `<select>` cleanly renders all 29 options; initial state must safely point to `PROGRAMS_LIST[0].title`. |
| 3 | Long Course Titles | Course titles with special characters like `Java + Selenium` or `API Testing with Postman & Rest Assured` | Special characters must be URL-encoded in slugs (e.g. `java-selenium`, `api-testing-postman-rest-assured`) while preserving clean titles in UI. |
| 4 | Card Height Equality | Differing description lengths across 29 courses | `flex flex-col h-full` on card container with `mt-auto` on tags wrapper ensures identical card heights in grid rows. |
| 5 | Mobile Grid Overflow | 29 course cards rendered on mobile viewport without filtering | Can cause excessive scrolling; category tabs (`All`, `Development`, `Testing`, `Communication`) enable quick jumping and reduce cognitive load. |
| 6 | Dark/Light Mode Colors | Low-contrast hex glow colors against dark background (`#0B1F5E` / `#071340`) | Semi-transparent hex opacity `${program.color}15` and `radial-gradient` glow ensure high contrast in both themes. |

---

## 5-Component Handoff Report

### 1. Observation

1. **`ProgramsList.tsx` (`/src/app/programs/ProgramsList.tsx:7, 30-74`)**:
   - Imports `PROGRAMS_LIST` from `@/lib/constants`.
   - Uses `containerVariants` and `itemVariants` for staggered entrance animation.
   - Renders a 2-column grid (`grid grid-cols-1 md:grid-cols-2 gap-8`).
   - Card properties rendered: `icon`, `title`, `href`, `description`, `color` (glow & icon background), and `tags`.

2. **`constants.ts` (`/src/lib/constants.ts:467-504`)**:
   - Currently contains 4 legacy programs:
     - `full-stack-engineering`
     - `ai-ml-development`
     - `software-testing-cybersecurity`
     - `career-acceleration`
   - Also exports `FOOTER_LINKS.programs` (`line 433-438`).

3. **`ApplyClient.tsx` (`/src/app/apply/ApplyClient.tsx:30, 354-356`)**:
   - Initializes form state with `program: PROGRAMS_LIST[0].title`.
   - Populates the "Program of Interest" dropdown by mapping `PROGRAMS_LIST.map(p => <option key={p.id} value={p.title}>{p.title}</option>)`.

4. **Team Members & Instructor Profiles (`/src/components/sections/TeamSection.tsx:24-99` & `/public/images/team/`)**:
   - Exactly 7 team members exist with photos in `/public/images/team/`:
     1. **Ayush Dwivedy** (`/images/team/Ayush.png`): Managing Director · Technology & Strategy · Software & AI Developer (3+ Years). Expertise: Full Stack, Python, React, Next.js, AI/LLMs.
     2. **Saurabh Pathak** (`/images/team/Saurabh.png`): Backend Developer (3+ Years). Expertise: Java, Node.js, Backend Architecture, Databases, APIs.
     3. **Dharmendra Kumar Pandey** (`/images/team/Dharmendra.png`): Founder & CEO · Software Testing & Model Training (5+ Years). Expertise: QA Strategy, Manual Testing, AI Testing.
     4. **Aniket** (`/images/team/Aniket.png`): Head of Operations · QA & EdTech (5+ Years). Expertise: Selenium, Appium, Playwright, CI/CD, Test Frameworks.
     5. **Sumit Kumar** (`/images/team/Sumit.png`): SDET at NPCI India (3+ Years). Expertise: Manual, ETL, Mobile, API Testing (Postman/Rest Assured), Performance Testing (JMeter).
     6. **Line** (`/images/team/Line.png`): Head of HR & Communications (5+ Years). Expertise: HR Recruitment, Corporate Comm, Interview Preparation, Professional Communication.
     7. **Lavli Pandey** (`/images/team/Lavli.png`): Pre-Basic Communication Trainer (3+ Years). Expertise: Foundational English, Spoken English, Grammar & Tenses, Beginners Speaking.

---

### 2. Logic Chain

1. **Course Scope & Separation**:
   - User requested 29 distinct courses across 3 categories: Development (11), Testing (10), Communication (8).
   - Each course requires a dedicated Next.js App Router directory under `/src/app/programs/[slug]/` containing `page.tsx` (and client component).

2. **Duration Assignment Rationalization**:
   - The user specification dictates: *"All courses must be structured under 3 months (45 days for less complex, 3 months for the rest)."*
   - **3 Months (12 Weeks / 3 Comprehensive Modules)** is assigned to broad, deep, multi-technology full tracks:
     - `full-stack-development`: Covers Frontend + Backend + Databases + Cloud + DevOps.
     - `java-development`: Covers Core Java + Spring Boot + JPA/Hibernate + Microservices.
     - `python-development`: Covers Python Core + OOP + FastAPI + Django + DBs.
     - `backend-development`: Covers System Design + Distributed DBs + Caching + Microservices.
     - `frontend-development`: Covers Advanced JS + React + Next.js + CSS Architectures + Performance.
     - `java-selenium`: Covers Core Java + Selenium WebDriver + TestNG + Maven + Cucumber BDD.
     - `complete-software-testing-course`: Covers Full QA spectrum (Manual + Automation + API + Mobile + Performance + Placements).
     - `corporate-communication`: Covers Executive Leadership + Stakeholder Alignment + Crisis Comm + Business Proposals.
   - **45 Days (6 Weeks / 3 Focused Phases)** is assigned to modular, single-technology, or skill-specific programs:
     - Development: `web-development`, `javascript`, `react-js`, `nodejs`, `api-development`, `software-development-with-ai-tools`.
     - Testing: `manual-testing`, `automation-testing-selenium`, `api-testing-postman-rest-assured`, `playwright-automation`, `javascript-typescript-test-automation`, `performance-testing`, `mobile-app-testing`, `ai-based-software-testing`.
     - Communication: `basic-english-communication`, `spoken-english`, `english-grammar-tenses`, `communication-for-beginners`, `advanced-communication`, `professional-communication`, `interview-communication`.

3. **ProgramsList UI & UX Optimization**:
   - With 29 courses, rendering an unstructured 29-card list in a single 2-column grid creates cognitive overload.
   - Introducing category filter tabs (`All (29)`, `Development (11)`, `Testing (10)`, `Communication (8)`) matching the existing `ProjectsSection.tsx` pattern delivers a smooth, highly navigable user experience while maintaining the exact visual language.
   - Adding a Duration Badge (e.g. `3 Months` / `45 Days`) and Category Badge directly on each card provides instant clarity to prospective students.

---

### 3. Caveats

1. **Legacy Course Routes**:
   - The 4 legacy program directories (`full-stack-engineering`, `ai-ml-development`, `software-testing-cybersecurity`, `career-acceleration`) can either be preserved for backwards compatibility or replaced by the 29 courses. Note that `full-stack-development` is distinct from `full-stack-engineering`.
2. **Apply Form Compatibility**:
   - `ApplyClient.tsx` uses `PROGRAMS_LIST.map(p => ...)`. When `PROGRAMS_LIST` expands to 29 courses, `formData.program` defaults to `PROGRAMS_LIST[0].title` ("Full Stack Development"). This works out-of-the-box with zero code breakage.
3. **Icons Representation**:
   - In `constants.ts`, `icon` is stored as an emoji string (e.g. `💻`, `☕`, `🐍`) for seamless serializability and cross-component compatibility in both Server and Client Components.

---

### 4. Conclusion & Complete Specification

#### Table of All 29 Courses

| # | Category | Course Title | Directory Slug | Duration | Level | Icon | Theme Color | Tags | Assigned Instructors |
|---|----------|--------------|----------------|----------|-------|------|-------------|------|----------------------|
| **DEVELOPMENT (11 Courses)** |
| 1 | Development | Full Stack Development | `full-stack-development` | 3 Months | Beginner to Advanced | 💻 | `#3B82F6` | React, Node.js, PostgreSQL, Next.js, System Design | Ayush Dwivedy, Saurabh Pathak |
| 2 | Development | Java Development | `java-development` | 3 Months | Beginner to Advanced | ☕ | `#EA580C` | Core Java, Spring Boot, Hibernate, Microservices, PostgreSQL | Saurabh Pathak, Ayush Dwivedy |
| 3 | Development | Python Development | `python-development` | 3 Months | Beginner to Advanced | 🐍 | `#38BDF8` | Python 3, FastAPI, Django, PostgreSQL, Data Pipelines | Ayush Dwivedy, Saurabh Pathak |
| 4 | Development | Web Development | `web-development` | 45 Days | Beginner to Intermediate | 🌐 | `#06B6D4` | HTML5, CSS3, JavaScript, Tailwind CSS, Responsive UI | Saurabh Pathak, Ayush Dwivedy |
| 5 | Development | JavaScript | `javascript` | 45 Days | Beginner to Intermediate | ⚡ | `#FACC15` | ES6+, Async/Await, DOM, Event Loop, Closures | Ayush Dwivedy, Saurabh Pathak |
| 6 | Development | React JS | `react-js` | 45 Days | Intermediate | ⚛️ | `#61DAFB` | Hooks, State Management, Zustand, React Router, Component Lifecycle | Ayush Dwivedy, Saurabh Pathak |
| 7 | Development | Node.js | `nodejs` | 45 Days | Intermediate | 🟢 | `#22C55E` | Express.js, Event Loop, REST APIs, Streams & Buffers, JWT | Saurabh Pathak, Ayush Dwivedy |
| 8 | Development | Backend Development | `backend-development` | 3 Months | Intermediate to Advanced | 🗄️ | `#6366F1` | System Design, Microservices, Redis, DB Optimization, Docker | Saurabh Pathak, Ayush Dwivedy |
| 9 | Development | Frontend Development | `frontend-development` | 3 Months | Beginner to Advanced | 🎨 | `#EC4899` | Next.js, TypeScript, Tailwind CSS, Framer Motion, Web Performance | Ayush Dwivedy, Saurabh Pathak |
| 10 | Development | API Development | `api-development` | 45 Days | Intermediate | 🔌 | `#8B5CF6` | RESTful APIs, FastAPI, GraphQL, OAuth2 & JWT, OpenAPI | Saurabh Pathak, Ayush Dwivedy |
| 11 | Development | Software Development with AI Tools | `software-development-with-ai-tools` | 45 Days | Beginner to Intermediate | 🤖 | `#10B981` | GitHub Copilot, Cursor AI, LLM Prompting, AI Code Review, Workflows | Ayush Dwivedy, Saurabh Pathak |
| **TESTING (10 Courses)** |
| 12 | Testing | Manual Testing | `manual-testing` | 45 Days | Beginner | 📋 | `#14B8A6` | SDLC & STLC, Test Case Design, Bug Life Cycle, Jira, Agile Testing | Dharmendra Kumar Pandey, Sumit Kumar |
| 13 | Testing | Automation Testing with Selenium | `automation-testing-selenium` | 45 Days | Intermediate | 🤖 | `#10B981` | Selenium WebDriver, Page Object Model, TestNG, Locators, CI/CD | Aniket, Dharmendra Kumar Pandey |
| 14 | Testing | Java + Selenium | `java-selenium` | 3 Months | Beginner to Advanced | ☕ | `#F97316` | Java for QA, Selenium WebDriver, Maven, Cucumber BDD, Hybrid Framework | Aniket, Sumit Kumar |
| 15 | Testing | API Testing with Postman & Rest Assured | `api-testing-postman-rest-assured` | 45 Days | Intermediate | 📬 | `#F59E0B` | Postman Collections, Rest Assured Java, JSON Schema, Newman, OAuth 2.0 | Sumit Kumar, Aniket |
| 16 | Testing | Playwright Automation | `playwright-automation` | 45 Days | Intermediate | 🎭 | `#2DD4BF` | Playwright, TypeScript, Auto-waiting, Visual Regression, Cross-Browser | Aniket, Sumit Kumar |
| 17 | Testing | JavaScript/TypeScript for Test Automation | `javascript-typescript-test-automation` | 45 Days | Beginner to Intermediate | 🔷 | `#3B82F6` | TypeScript for QA, Async/Await, Jest, Playwright Basics, Clean Tests | Sumit Kumar, Ayush Dwivedy |
| 18 | Testing | Performance Testing | `performance-testing` | 45 Days | Intermediate | ⚡ | `#EF4444` | Apache JMeter, Load & Stress Testing, Throughput, Bottleneck Analysis | Sumit Kumar, Aniket |
| 19 | Testing | Mobile App Testing | `mobile-app-testing` | 45 Days | Intermediate | 📱 | `#8B5CF6` | Appium 2.0, Android & iOS, Emulators/Real Devices, Mobile Gestures | Aniket, Sumit Kumar |
| 20 | Testing | AI-Based Software Testing | `ai-based-software-testing` | 45 Days | Intermediate to Advanced | 🧠 | `#06B6D4` | AI Test Generation, Self-Healing Locators, Visual AI, Test Synthesis | Dharmendra Kumar Pandey, Aniket |
| 21 | Testing | Complete Software Testing Course | `complete-software-testing-course` | 3 Months | Beginner to Advanced | 🛡️ | `#059669` | Manual QA, Selenium Automation, API Testing, Jira & Agile, Placements | Dharmendra Kumar Pandey, Aniket |
| **COMMUNICATION (8 Courses)** |
| 22 | Communication | Basic English Communication | `basic-english-communication` | 45 Days | Beginner | 🗣️ | `#F43F5E` | Everyday Vocabulary, Sentence Construction, Pronunciation, Listening | Lavli Pandey, Line |
| 23 | Communication | Spoken English | `spoken-english` | 45 Days | Beginner to Intermediate | 🎙️ | `#FB923C` | Fluency Drills, Accent & Intonation, Extempore Speaking, Public Speaking | Lavli Pandey, Line |
| 24 | Communication | English Grammar & Tenses | `english-grammar-tenses` | 45 Days | Beginner to Intermediate | 📖 | `#A855F7` | All 12 Tenses, Parts of Speech, Active/Passive Voice, Direct/Indirect | Lavli Pandey, Line |
| 25 | Communication | Communication for Beginners | `communication-for-beginners` | 45 Days | Beginner | 🌱 | `#10B981` | Fear Removal, Self-Introduction, Body Language, Small Talk Starters | Lavli Pandey, Line |
| 26 | Communication | Advanced Communication | `advanced-communication` | 45 Days | Advanced | 🚀 | `#6366F1` | Persuasion & Influence, Rhetoric & Storytelling, Negotiation, Presence | Line, Lavli Pandey |
| 27 | Communication | Professional Communication | `professional-communication` | 45 Days | Intermediate to Advanced | 💼 | `#0284C7` | Business Email Writing, Meeting Etiquette, Slack/Teams, Status Reports | Line, Lavli Pandey |
| 28 | Communication | Interview Communication | `interview-communication` | 45 Days | All Levels | 🎯 | `#FF7A00` | STAR Methodology, HR Questions, Resume Walkthrough, Salary Negotiation | Line, Ayush Dwivedy |
| 29 | Communication | Corporate Communication | `corporate-communication` | 3 Months | Intermediate to Advanced | 🏢 | `#4F46E5` | Stakeholder Management, Leadership Presence, Crisis Comm, Proposals | Line, Dharmendra Kumar Pandey |

---

### Detailed Program Specifications (Descriptions & Syllabus Outlines)

#### 1. Full Stack Development (`/programs/full-stack-development`)
- **Duration**: 3 Months (12 Weeks) | **Category**: Development
- **Description**: Master end-to-end web engineering from responsive frontend interfaces to scalable backend microservices, SQL/NoSQL databases, and cloud deployments.
- **Curriculum**:
  - *Month 1: Modern Frontend Foundations*: HTML5, CSS3, ES6+ JavaScript, React & Tailwind CSS. Project: Responsive E-Commerce Storefront.
  - *Month 2: Server-Side Engineering & APIs*: Node.js, Express.js, REST APIs, PostgreSQL, MongoDB, JWT Authentication. Project: Multi-User Collaboration API.
  - *Month 3: Full Stack Integration, Cloud & Capstone*: Next.js App Router, Docker, CI/CD, AWS/Vercel Deployments, ATS Resume & Mock Technical Interviews. Capstone: Production SaaS Platform.

#### 2. Java Development (`/programs/java-development`)
- **Duration**: 3 Months (12 Weeks) | **Category**: Development
- **Description**: Build enterprise-grade applications with Core Java, Object-Oriented Design, Spring Boot microservices, JPA/Hibernate, and scalable database architectures.
- **Curriculum**:
  - *Month 1: Core Java & OOP Mastery*: Java Syntax, OOP Principles, Collections Framework, Multithreading & Concurrency, Streams API, File I/O.
  - *Month 2: Enterprise Spring Boot & JPA*: Spring Core, Dependency Injection, Spring MVC, RESTful APIs, Spring Data JPA, Hibernate, PostgreSQL/MySQL.
  - *Month 3: Microservices, Security & Capstone*: Spring Cloud, Service Discovery (Eureka), API Gateway, JWT/OAuth2 Security, JUnit/Mockito Unit Testing, Docker Deployments. Capstone: Distributed Banking Microservice.

#### 3. Python Development (`/programs/python-development`)
- **Duration**: 3 Months (12 Weeks) | **Category**: Development
- **Description**: Master Python programming from syntax and advanced data structures to high-performance FastAPI/Django backend services, automation scripts, and database operations.
- **Curriculum**:
  - *Month 1: Python Fundamentals & Data Structures*: OOP in Python, Functional Programming, Decorators, Generators, Context Managers, Package Management.
  - *Month 2: Backend Frameworks & ORMs*: FastAPI, Django Framework, Pydantic Schema Validation, SQLAlchemy ORM, PostgreSQL Integration, Asynchronous Asyncio.
  - *Month 3: Production APIs, Automation & Capstone*: Redis Caching, Celery Background Workers, Dockerization, AWS Lambda Serverless Deployments. Capstone: High-Throughput Analytics API.

#### 4. Web Development (`/programs/web-development`)
- **Duration**: 45 Days (6 Weeks) | **Category**: Development
- **Description**: Kickstart your coding journey by building beautiful, interactive, and mobile-first responsive websites using semantic HTML5, modern CSS3/Tailwind, and vanilla JavaScript.
- **Curriculum**:
  - *Phase 1 (Weeks 1-2): Semantic Web Structure & Styling*: Semantic HTML5, CSS3 Flexbox & Grid, CSS Variables, Responsive Media Queries, Mobile-First Design.
  - *Phase 2 (Weeks 3-4): Interactive JavaScript & DOM Manipulation*: ES6+ Essentials, DOM Events, Asynchronous Fetch API, LocalStorage, Tailwind CSS Component Architecture.
  - *Phase 3 (Weeks 5-6): Modern Tooling & Capstone Deployment*: Vite Build Tool, Git & GitHub Version Control, Vercel/Netlify Deployment. Capstone: Multi-Page Interactive Web Portal.

#### 5. JavaScript (`/programs/javascript`)
- **Duration**: 45 Days (6 Weeks) | **Category**: Development
- **Description**: Deep dive into the core engine of the modern web. Master execution context, closures, prototypes, asynchronous JavaScript, promises, and the event loop.
- **Curriculum**:
  - *Phase 1 (Weeks 1-2): Core JS Mechanics & Scope*: Call Stack, Memory Heap, Execution Context, Hoisting, Lexical Scope, Closures, Prototypes & Prototypal Inheritance.
  - *Phase 2 (Weeks 3-4): Asynchronous JavaScript & Modern ES6+*: Promises, Async/Await, Microtask Queue vs Macrotask Queue, Event Loop, Modular JS (ESM), Web APIs.
  - *Phase 3 (Weeks 5-6): Advanced Design Patterns & Performance*: Functional Programming, Currying, Debouncing & Throttling, Memory Leak Prevention, Unit Testing with Jest.

#### 6. React JS (`/programs/react-js`)
- **Duration**: 45 Days (6 Weeks) | **Category**: Development
- **Description**: Build dynamic, lightning-fast Single Page Applications with React 18+. Master custom hooks, state management (Redux Toolkit/Zustand), component lifecycle, and optimized rendering.
- **Curriculum**:
  - *Phase 1 (Weeks 1-2): React Architecture & JSX*: JSX Syntax, Component Hierarchy, Props, State, Virtual DOM, Event Handling, Controlled Components.
  - *Phase 2 (Weeks 3-4): Advanced Hooks & Routing*: useEffect, useMemo, useCallback, useRef, Building Custom Hooks, React Router v6 Navigation.
  - *Phase 3 (Weeks 5-6): Global State & Production SPA*: Zustand & Redux Toolkit, TanStack Query for Data Fetching, Optimistic UI Updates. Capstone: Feature-Rich Dashboard SPA.

#### 7. Node.js (`/programs/nodejs`)
- **Duration**: 45 Days (6 Weeks) | **Category**: Development
- **Description**: Harness the power of asynchronous JavaScript on the backend. Create performant REST APIs, manage streams and buffers, handle file systems, and integrate secure authentication.
- **Curriculum**:
  - *Phase 1 (Weeks 1-2): Node Runtime & Architecture*: V8 Engine, Libuv, Non-blocking Event-Driven Model, Core Modules (`fs`, `http`, `events`), Streams & Buffers.
  - *Phase 2 (Weeks 3-4): Express Framework & Databases*: Express Routing, Custom Middleware, Centralized Error Handling, MongoDB with Mongoose, PostgreSQL with Prisma.
  - *Phase 3 (Weeks 5-6): Real-Time WebSockets & Security*: Real-Time Socket.io, JWT Authentication & Role-Based Access Control, Docker Containerization. Capstone: Live Real-Time Chat API.

#### 8. Backend Development (`/programs/backend-development`)
- **Duration**: 3 Months (12 Weeks) | **Category**: Development
- **Description**: Architect and deploy robust, high-throughput backend services. Master database indexing, distributed caching with Redis, message queues, and microservice patterns.
- **Curriculum**:
  - *Month 1: Advanced Database Engineering*: SQL vs NoSQL, B-Tree Indexing, Query Optimization, Connection Pooling, ACID Transactions, Sharding & Replication.
  - *Month 2: Scalable API & Messaging Architectures*: REST & gRPC Protocols, Redis Caching Strategies, Rate Limiting, Asynchronous Queues with RabbitMQ/Kafka.
  - *Month 3: Distributed Systems & Cloud DevOps*: Microservice Patterns, Docker & Container Orchestration, Load Balancing, Observability (Prometheus/Grafana). Capstone: Scalable Distributed Backend.

#### 9. Frontend Development (`/programs/frontend-development`)
- **Duration**: 3 Months (12 Weeks) | **Category**: Development
- **Description**: Create stunning, accessible, and high-performance user interfaces. Master modern frontend frameworks, TypeScript, animations with Framer Motion, and Core Web Vitals optimization.
- **Curriculum**:
  - *Month 1: Modern CSS, TypeScript & Accessibility*: Advanced CSS Layouts, Tailwind CSS, TypeScript Static Typing, ARIA & Web Accessibility (a11y), Modern Build Systems.
  - *Month 2: Next.js Ecosystem & Complex UI*: React 18, Next.js App Router, React Server Components (RSC), State Management, Framer Motion Micro-Interactions.
  - *Month 3: Frontend Performance & Testing*: Core Web Vitals (LCP, INP, CLS) Optimization, Bundle Splitting, Testing with Jest & React Testing Library. Capstone: High-Performance Web Platform.

#### 10. API Development (`/programs/api-development`)
- **Duration**: 45 Days (6 Weeks) | **Category**: Development
- **Description**: Master the craft of designing, building, securing, and documenting production-ready APIs using REST, GraphQL, OpenAPI specs, and modern token authentication.
- **Curriculum**:
  - *Phase 1 (Weeks 1-2): API Architecture & Standards*: REST Architectural Constraints, Resource URI Design, HTTP Status Codes, Content Negotiation, API Versioning.
  - *Phase 2 (Weeks 3-4): Implementation & Security*: FastAPI & Node.js Implementation, Schema Validation, OAuth 2.0 & JWT, CORS, Rate Limiting, API Security Best Practices (OWASP API Top 10).
  - *Phase 3 (Weeks 5-6): GraphQL, OpenAPI & Automation*: GraphQL Schema & Resolvers, Auto-Generated Swagger/OpenAPI Documentation, Webhook Infrastructure, Automated Postman CI Tests.

#### 11. Software Development with AI Tools (`/programs/software-development-with-ai-tools`)
- **Duration**: 45 Days (6 Weeks) | **Category**: Development
- **Description**: 10x your software engineering productivity. Learn to leverage GitHub Copilot, Cursor AI, Claude, and LLM APIs for rapid prototyping, intelligent debugging, and automated testing.
- **Curriculum**:
  - *Phase 1 (Weeks 1-2): AI Pair Programming*: Cursor IDE Setup, GitHub Copilot Keyboard Shortcuts, Prompt Engineering for Code, Repository Context Indexing.
  - *Phase 2 (Weeks 3-4): AI-Augmented Workflows*: Automated Unit Test Generation, AI-Assisted Bug Fixing & Code Refactoring, Generating Documentation, Code Review Automation.
  - *Phase 3 (Weeks 5-6): Building AI-Native Apps*: Integrating OpenAI/Claude SDKs, Function Calling & Tool Use, Local LLM Setup (Ollama). Capstone: Full-Stack AI-Augmented Application.

#### 12. Manual Testing (`/programs/manual-testing`)
- **Duration**: 45 Days (6 Weeks) | **Category**: Testing
- **Description**: Master software quality assurance fundamentals. Learn test planning, boundary value analysis, test execution, defect reporting in Jira, and Agile QA methodologies.
- **Curriculum**:
  - *Phase 1 (Weeks 1-2): QA Foundations & Methodologies*: SDLC & STLC Lifecycles, Waterfall vs Agile Scrum, Verification vs Validation, Test Strategy & Test Planning.
  - *Phase 2 (Weeks 3-4): Test Design Techniques*: Black Box Testing, Equivalence Class Partitioning, Boundary Value Analysis, Decision Tables, Test Scenario & Test Case Authoring.
  - *Phase 3 (Weeks 5-6): Bug Lifecycle & Jira*: Defect Reporting, Severity vs Priority Matrix, Jira Defect Tracking, RTM (Requirements Traceability Matrix), Live Web Application Audit.

#### 13. Automation Testing with Selenium (`/programs/automation-testing-selenium`)
- **Duration**: 45 Days (6 Weeks) | **Category**: Testing
- **Description**: Transform from manual tester to automation engineer. Master Selenium WebDriver, complex XPath/CSS locators, Page Object Model (POM) architecture, and TestNG test runners.
- **Curriculum**:
  - *Phase 1 (Weeks 1-2): WebDriver Architecture & Locators*: Selenium 4 Architecture, Browser Drivers, Dynamic XPath Axes, CSS Selectors, Implicit/Explicit/Fluent Synchronization.
  - *Phase 2 (Weeks 3-4): TestNG Framework & Data-Driven Testing*: TestNG Annotations, Assertions, DataProviders, Parameterization, Excel Test Data via Apache POI.
  - *Phase 3 (Weeks 5-6): Page Object Model & Reporting*: POM Architecture, ExtentReports HTML Reports, Parallel Execution, CI/CD Jenkins Triggering. Capstone: E-Commerce Automated Test Suite.

#### 14. Java + Selenium (`/programs/java-selenium`)
- **Duration**: 3 Months (12 Weeks) | **Category**: Testing
- **Description**: The industry standard for test automation. Combine Core Java programming with Selenium WebDriver, Maven build management, and Cucumber BDD hybrid test frameworks.
- **Curriculum**:
  - *Month 1: Java Programming for Automation*: Java Syntax, OOP (Inheritance, Polymorphism, Encapsulation, Abstraction), Collections (List, Set, Map), Exception Handling, File I/O.
  - *Month 2: Selenium WebDriver Core & Advanced*: WebDriver Navigation, Handling Web Tables, Dropdowns, Actions Class (Drag & Drop, Hover), JavaScriptExecutor, Screenshot Capture.
  - *Month 3: Enterprise BDD Hybrid Framework*: Maven Project Management, Cucumber BDD with Gherkin Feature Files, Step Definitions, Jenkins Integration, Git Versioning. Capstone: End-to-End Hybrid Test Automation Framework.

#### 15. API Testing with Postman & Rest Assured (`/programs/api-testing-postman-rest-assured`)
- **Duration**: 45 Days (6 Weeks) | **Category**: Testing
- **Description**: Learn automated API testing from no-code Postman workflows to full-scale programmatic test automation using Rest Assured in Java with JSON schema assertions.
- **Curriculum**:
  - *Phase 1 (Weeks 1-2): Postman & HTTP Protocols*: HTTP Request/Response Anatomy, Environment & Global Variables, Writing Postman JavaScript Test Scripts, Collection Runner.
  - *Phase 2 (Weeks 3-4): Rest Assured Framework*: Given-When-Then BDD Syntax, Status Code & Header Assertions, JsonPath Querying, Serialization/Deserialization with Jackson POJO.
  - *Phase 3 (Weeks 5-6): Schema Validation & CI/CD*: JSON Schema Validation, OAuth2 / Bearer Token Chaining, Newman CLI Automation in Jenkins. Capstone: Automated Enterprise API Test Framework.

#### 16. Playwright Automation (`/programs/playwright-automation`)
- **Duration**: 45 Days (6 Weeks) | **Category**: Testing
- **Description**: Master Microsoft Playwright — the next-generation end-to-end automation tool. Test modern single-page apps across Chromium, Firefox, and WebKit with zero flaky tests.
- **Curriculum**:
  - *Phase 1 (Weeks 1-2): Playwright Core Architecture*: Architecture, Auto-waiting, Locators & Selectors, TypeScript Configuration, Playwright Inspector & Trace Viewer.
  - *Phase 2 (Weeks 3-4): Advanced Interactions & Network Mocking*: Handling IFrames, Multi-Tab Popups, Network Request Interception, API Mocking, Storage State Authentication.
  - *Phase 3 (Weeks 5-6): Page Object Model & Visual Testing*: POM Design Pattern, Visual Snapshot Comparisons, Parallel Sharded Execution, GitHub Actions CI Workflow. Capstone: Production Web App Test Suite.

#### 17. JavaScript/TypeScript for Test Automation (`/programs/javascript-typescript-test-automation`)
- **Duration**: 45 Days (6 Weeks) | **Category**: Testing
- **Description**: Learn modern JavaScript and TypeScript specifically tailored for SDETs and test automation engineers. Master async/await, interfaces, generics, and test runners.
- **Curriculum**:
  - *Phase 1 (Weeks 1-2): JS Fundamentals for SDETs*: ES6+ Syntax, Destructuring, Spread Operators, High-Order Array Methods (`map`, `filter`, `reduce`), Arrow Functions.
  - *Phase 2 (Weeks 3-4): Async JavaScript & TypeScript Typing*: Promises, Async/Await Error Handling, TypeScript Types, Interfaces, Enums, Type Guards, TsConfig Setup.
  - *Phase 3 (Weeks 5-6): Test Frameworks & Clean Code*: Jest Test Runner, Custom Assertions, Mock Functions, Structuring Scalable Automation Codebases for Playwright/Cypress.

#### 18. Performance Testing (`/programs/performance-testing`)
- **Duration**: 45 Days (6 Weeks) | **Category**: Testing
- **Description**: Ensure applications can handle millions of concurrent users. Learn load testing, stress testing, spike testing, bottleneck analysis, and APM monitoring using Apache JMeter.
- **Curriculum**:
  - *Phase 1 (Weeks 1-2): Performance Concepts & Planning*: Performance Testing Types (Load, Stress, Endurance, Spike), SLAs, Virtual Users, Throughput, Response Time vs Latency.
  - *Phase 2 (Weeks 3-4): JMeter Test Scripting*: Thread Groups, HTTP Request Defaults, CSV Data Set Config, Timers, Regular Expression Extractors, Assertions & Listeners.
  - *Phase 3 (Weeks 5-6): Distributed Testing & Diagnostics*: Non-GUI Command Line Execution, Distributed Master-Slave Architecture, HTML Dashboard Reports, Identifying CPU/Memory Bottlenecks.

#### 19. Mobile App Testing (`/programs/mobile-app-testing`)
- **Duration**: 45 Days (6 Weeks) | **Category**: Testing
- **Description**: Test native, hybrid, and mobile web applications on Android and iOS. Master Appium 2.0, mobile gestures (swipe, tap, pinch), device cloud testing, and mobile test architecture.
- **Curriculum**:
  - *Phase 1 (Weeks 1-2): Mobile Testing Foundations*: Native, Hybrid & Web Apps, Android Studio & ADB Commands, Xcode Simulators, Appium 2.0 Architecture & Drivers.
  - *Phase 2 (Weeks 3-4): Appium Locators & Gesture Automation*: Appium Inspector, UIAutomator2 & XCUITest Locators, Touch Actions: Swipe, Scroll, Drag-and-Drop, Handling Notifications.
  - *Phase 3 (Weeks 5-6): Mobile Automation Framework*: Data-Driven Page Object Model for Mobile, Integration with Cloud Device Farms (BrowserStack), CI/CD Pipeline execution.

#### 20. AI-Based Software Testing (`/programs/ai-based-software-testing`)
- **Duration**: 45 Days (6 Weeks) | **Category**: Testing
- **Description**: Step into the future of QA engineering. Learn AI-powered automated test generation, self-healing test automation scripts, visual AI verification, and LLM-assisted test strategy.
- **Curriculum**:
  - *Phase 1 (Weeks 1-2): AI in Software QA*: AI-Driven Test Strategy, Automated Test Case Authoring with LLMs, Generating Synthetic Test Data with AI.
  - *Phase 2 (Weeks 3-4): Self-Healing & Visual AI*: Self-Healing Element Locators, Visual AI Regression Testing with Applitools Eyes, Automated Flaky Test Detection.
  - *Phase 3 (Weeks 5-6): Autonomous Testing Frameworks*: Building AI-Augmented QA Pipelines, Automated Code Review & Coverage Analysis, Capstone: AI-Powered Testing Suite.

#### 21. Complete Software Testing Course (`/programs/complete-software-testing-course`)
- **Duration**: 3 Months (12 Weeks) | **Category**: Testing
- **Description**: The definitive all-in-one QA bootcamp. Covers everything from Manual Testing and Jira to Selenium WebDriver, API Testing, Performance Testing, and interview placement coaching.
- **Curriculum**:
  - *Month 1: Manual QA & Agile Foundations*: SDLC, STLC, Black Box Techniques, Jira Defect Tracking, Agile Ceremonies, Postman API Testing Basics.
  - *Month 2: Automation with Java & Selenium*: Core Java for QA, Selenium WebDriver, Page Object Model Framework, TestNG, Maven, Git Version Control.
  - *Month 3: Advanced QA, Performance & Placements*: Rest Assured API Automation, JMeter Performance Testing, Jenkins CI/CD, Mock Technical Interviews, Resume Polish & Placement Prep.

#### 22. Basic English Communication (`/programs/basic-english-communication`)
- **Duration**: 45 Days (6 Weeks) | **Category**: Communication
- **Description**: Build essential English language skills from the ground up. Learn daily conversational vocabulary, clear sentence structure, correct pronunciation, and eliminate hesitation.
- **Curriculum**:
  - *Phase 1 (Weeks 1-2): Sound & Vocabulary Foundations*: Phonetics & Pronunciation, Everyday Vocabulary Building, Greetings, Introductions, Overcoming Shyness.
  - *Phase 2 (Weeks 3-4): Sentence Construction & Daily Dialogue*: Constructing Simple Sentences, Asking and Answering Questions, Daily Routine Conversations, Active Listening Drills.
  - *Phase 3 (Weeks 5-6): Confidence & Practical Interaction*: Role-Playing Everyday Scenarios, Picture Descriptions, 1-on-1 Guided Speaking Sessions, Capstone Speech.

#### 23. Spoken English (`/programs/spoken-english`)
- **Duration**: 45 Days (6 Weeks) | **Category**: Communication
- **Description**: Master fluent and natural English speaking. Focus on accent reduction, speech rhythm, intonation, extempore speaking, and expressing ideas smoothly without mother-tongue influence (MTI).
- **Curriculum**:
  - *Phase 1 (Weeks 1-2): Speech Flow & MTI Reduction*: Neutralizing Mother-Tongue Influence, Vowel & Consonant Sounds, Word Stress, Rhythm & Connected Speech.
  - *Phase 2 (Weeks 3-4): Fluency Drills & Idiomatic English*: Extempore Speaking on Random Prompts, Common Idioms & Colloquial Expressions, Storytelling Techniques.
  - *Phase 3 (Weeks 5-6): Public Speaking & Discussions*: Delivering 3-Minute Prepared Speeches, Participating in Group Discussions, Constructive Debates, Video Feedback Reviews.

#### 24. English Grammar & Tenses (`/programs/english-grammar-tenses`)
- **Duration**: 45 Days (6 Weeks) | **Category**: Communication
- **Description**: Eliminate grammatical mistakes forever. Gain mastery over all 12 tenses, subject-verb agreement, clauses, prepositions, and active/passive voice for crystal-clear communication.
- **Curriculum**:
  - *Phase 1 (Weeks 1-2): Sentence Architecture & Parts of Speech*: Nouns, Pronouns, Verbs, Adjectives, Adverbs, Prepositions, Conjunctions, Subject-Verb Agreement Rules.
  - *Phase 2 (Weeks 3-4): The 12 Tenses In-Depth*: Present, Past, and Future Tenses (Simple, Continuous, Perfect, Perfect Continuous), Time Markers & Usage Contexts.
  - *Phase 3 (Weeks 5-6): Advanced Voice & Error Correction*: Active vs Passive Voice, Direct & Indirect Speech, Conditional Clauses, Identifying & Rectifying Common Indian English Errors.

#### 25. Communication for Beginners (`/programs/communication-for-beginners`)
- **Duration**: 45 Days (6 Weeks) | **Category**: Communication
- **Description**: Tailored for complete beginners who feel shy or anxious speaking in English. Build stage courage, positive body language, effective self-introductions, and engaging small talk.
- **Curriculum**:
  - *Phase 1 (Weeks 1-2): Breaking Mental Barriers*: Overcoming the Fear of Making Mistakes, Building a Positive Speaking Mindset, Perfecting Your 60-Second Self-Introduction.
  - *Phase 2 (Weeks 3-4): Body Language & Small Talk*: Eye Contact, Open Posture, Facial Expressions, Starting Conversations, Mastering Small Talk in Social Settings.
  - *Phase 3 (Weeks 5-6): Group Interaction & Showcase*: Expressing Opinions Politely, Agreeing & Disagreeing with Respect, Impromptu 2-Minute Presentations.

#### 26. Advanced Communication (`/programs/advanced-communication`)
- **Duration**: 45 Days (6 Weeks) | **Category**: Communication
- **Description**: Elevate your impact with high-stakes communication techniques. Master persuasive speaking, corporate storytelling, win-win negotiation tactics, and constructive conflict resolution.
- **Curriculum**:
  - *Phase 1 (Weeks 1-2): Storytelling & Rhetoric*: Narrative Frameworks in Business, Hook-Story-Close Method, Metaphors, Delivering Compelling Keynotes.
  - *Phase 2 (Weeks 3-4): Persuasion & Negotiation*: The Psychology of Persuasion, Framing Arguments, Handling Difficult Questions, Win-Win Negotiation Principles.
  - *Phase 3 (Weeks 5-6): High-Stakes Presentations*: Delivering High-Impact Slides, Handling Hostile Audiences, Thinking on Your Feet, Executive Pitch Showcase.

#### 27. Professional Communication (`/programs/professional-communication`)
- **Duration**: 45 Days (6 Weeks) | **Category**: Communication
- **Description**: Master day-to-day corporate communication. Write impactful business emails, run productive standup meetings, master cross-cultural collaboration, and craft clear status reports.
- **Curriculum**:
  - *Phase 1 (Weeks 1-2): Written Corporate Excellence*: Writing Crisp Business Emails, Tone & Clarity, Action-Oriented Subject Lines, Slack & Microsoft Teams Etiquette.
  - *Phase 2 (Weeks 3-4): Meeting Dynamics & Agile Conversations*: Active Participation in Standups & Sprint Demos, Delivering Constructive Feedback, Active Listening in Meetings.
  - *Phase 3 (Weeks 5-6): Cross-Cultural Collaboration*: Working in Global Distributed Teams, Status Reporting, Escalation Protocols, Professional Phone & Video Presence.

#### 28. Interview Communication (`/programs/interview-communication`)
- **Duration**: 45 Days (6 Weeks) | **Category**: Communication
- **Description**: Crack any technical and HR interview round. Master the STAR framework for behavioral questions, deliver punchy resume walkthroughs, and negotiate compensation with confidence.
- **Curriculum**:
  - *Phase 1 (Weeks 1-2): Behavioral Mastery & STAR Method*: Structuring Answers with Situation, Task, Action, Result; "Tell Me About Yourself" Mastery; Highlighting Strengths.
  - *Phase 2 (Weeks 3-4): Tough Interview Scenarios*: Explaining Career Gaps & Weaknesses, Conflict Resolution Questions, Intelligent Questions to Ask Interviewers.
  - *Phase 3 (Weeks 5-6): Live Mock Interviews & Negotiations*: Video-Recorded Mock HR Rounds, Salary Negotiation Frameworks, Counter-Offers & Evaluating Offer Letters.

#### 29. Corporate Communication (`/programs/corporate-communication`)
- **Duration**: 3 Months (12 Weeks) | **Category**: Communication
- **Description**: Comprehensive corporate readiness program. Master senior stakeholder management, executive presentation delivery, formal business proposal writing, and cross-functional leadership.
- **Curriculum**:
  - *Month 1: Executive Documentation & Business Writing*: Formal Business Proposals, Executive Summaries, RFP Responses, Technical Documentation for Non-Tech Stakeholders.
  - *Month 2: Interpersonal Influence & Stakeholder Management*: Managing Upward, Aligning Cross-Functional Teams, Influencing Without Authority, Facilitating Workshops.
  - *Month 3: Crisis Communication & Executive Presence*: Crisis Communication Strategies, Boardroom Presentations, Executive Presence & Capstone Leadership Showcase.

---

### Integration Architecture for `ProgramsList.tsx`

#### 1. TypeScript Interface Contract
```typescript
export type CourseCategory = 'Development' | 'Testing' | 'Communication';
export type CourseDuration = '45 Days' | '3 Months';
export type CourseLevel = 'Beginner' | 'Intermediate' | 'Beginner to Advanced' | 'All Levels';

export interface ProgramCourse {
  id: string;
  title: string;
  category: CourseCategory;
  duration: CourseDuration;
  level: CourseLevel;
  description: string;
  href: string;
  icon: string;
  color: string;
  tags: string[];
}
```

#### 2. Enhanced `ProgramsList.tsx` Component Structure
The updated component should provide:
1. **Category Filter Tabs**: Pills for `All (29)`, `Development (11)`, `Testing (10)`, `Communication (8)`.
2. **Category & Duration Badges**: Positioned at the top of each card alongside the icon.
3. **Card Grid**: Responsive 1, 2, or 3 column grid (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`).
4. **Motion Animation**: Staggered cards with layout transitions (`layout`, `AnimatePresence`).
5. **Direct Links**: Link to each `/programs/[slug]` destination.

---

### 5. Verification Method

To independently verify the implementation against this specification:

1. **Directory & File Existence Check**:
   Run the following shell script to verify all 29 program directories exist with a valid `page.tsx`:
   ```bash
   SLUGS=(
     "full-stack-development"
     "java-development"
     "python-development"
     "web-development"
     "javascript"
     "react-js"
     "nodejs"
     "backend-development"
     "frontend-development"
     "api-development"
     "software-development-with-ai-tools"
     "manual-testing"
     "automation-testing-selenium"
     "java-selenium"
     "api-testing-postman-rest-assured"
     "playwright-automation"
     "javascript-typescript-test-automation"
     "performance-testing"
     "mobile-app-testing"
     "ai-based-software-testing"
     "complete-software-testing-course"
     "basic-english-communication"
     "spoken-english"
     "english-grammar-tenses"
     "communication-for-beginners"
     "advanced-communication"
     "professional-communication"
     "interview-communication"
     "corporate-communication"
   )
   for slug in "${SLUGS[@]}"; do
     if [ ! -f "src/app/programs/$slug/page.tsx" ]; then
       echo "Missing: src/app/programs/$slug/page.tsx"
     fi
   done
   ```

2. **Constants Export Check**:
   Verify that `PROGRAMS_LIST` in `src/lib/constants.ts` contains exactly 29 items, all matching the slugs above.

3. **Build & Typecheck Verification**:
   Run:
   ```bash
   npm run build
   ```
   Must pass with 0 errors and produce static/SSG route entries for all 29 course paths under `/programs/[slug]`.
