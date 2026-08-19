# Team Analysis & 29-Course Instructor Mapping Report

## 1. Observation

A comprehensive search of the SkillPedia codebase was performed across `/public/images/team/`, `/src/components/sections/TeamSection.tsx`, `/src/app/ceo-message/CeoClient.tsx`, `/src/app/programs/*/*Client.tsx`, and `/src/lib/constants.ts`.

### 1.1 Team Image Assets in `/public/images/team/`
All 7 team member portrait images exist as verified PNG files in `/public/images/team/`:
- `/public/images/team/Aniket.png` (Referenced as `/images/team/Aniket.png`)
- `/public/images/team/Ayush.png` (Referenced as `/images/team/Ayush.png`)
- `/public/images/team/Dharmendra.png` (Referenced as `/images/team/Dharmendra.png`)
- `/public/images/team/Lavli.png` (Referenced as `/images/team/Lavli.png`)
- `/public/images/team/Line.png` (Referenced as `/images/team/Line.png`)
- `/public/images/team/Saurabh.png` (Referenced as `/images/team/Saurabh.png`)
- `/public/images/team/Sumit.png` (Referenced as `/images/team/Sumit.png`)

### 1.2 Canonical Team Member Profiles

From `src/components/sections/TeamSection.tsx` (lines 24–99) and program client files:

#### 1. Dharmendra Kumar Pandey
- **Full Name**: Dharmendra Kumar Pandey (shortened to "Dharmendra" in program cards)
- **Title**: Founder & CEO
- **Role / Highlight**: Software Testing & Training · 5+ Years · Testing & Model Training
- **Image Path**: `/images/team/Dharmendra.png`
- **Verbatim Bio** (`TeamSection.tsx:32-34`):
  > "The visionary behind SkillPedia, Dharmendra founded the platform with a singular mission — to bridge the gap between academic learning and industry-readiness. With over 5 years of deep expertise in Software Testing and the Model Training Industry, he has mentored hundreds of aspiring engineers into confident, job-ready professionals. His passion for structured, outcome-driven education is the driving force behind SkillPedia's pedagogy and placement-first philosophy."
- **Core Domain Expertise**: Manual Testing, QA methodologies, Model Training / AI-Testing, Leadership & Mock Interviews.

#### 2. Ayush Dwivedy
- **Full Name**: Ayush Dwivedy
- **Title**: Managing Director
- **Role / Highlight**: Technology & Strategy · 3+ Years · Software & AI Developer
- **Image Path**: `/images/team/Ayush.png`
- **Verbatim Bio** (`TeamSection.tsx:45-47`):
  > "As Managing Director, Ayush brings over 3 years of experience as a Software and AI Developer. He architects SkillPedia's vision, technology stack, and growth strategy — ensuring every student receives a truly top-tier learning experience. His hands-on expertise in large-scale distributed systems, production-grade code review, and agile product development shapes the backbone of SkillPedia's curriculum."
- **Core Domain Expertise**: Full Stack Web Development (React, Next.js, TypeScript, JavaScript), Python, AI/ML Engineering & AI Tools, Distributed Systems, Modern Frontend Engineering.

#### 3. Line
- **Full Name**: Line
- **Title**: Head of HR & Communications
- **Role / Highlight**: People & Culture · 5+ Years · HR & Tech Recruitment
- **Image Path**: `/images/team/Line.png`
- **Verbatim Bio** (`TeamSection.tsx:58-60`):
  > "Line brings over 5 years of communication expertise in Human Resources and Technical Recruitment. At SkillPedia, she leads talent operations, student engagement, and industry partnership communications. Her deep understanding of corporate hiring pipelines and professional communication standards ensures SkillPedia students are not just technically proficient, but also articulate, interview-ready, and corporate-polished."
- **Core Domain Expertise**: Advanced Communication, Professional & Corporate Communication, HR & Behavioral Interviews, Tech Recruitment.

#### 4. Aniket
- **Full Name**: Aniket
- **Title**: Head of Operations
- **Role / Highlight**: QA & EdTech · 5+ Years · IT & EdTech
- **Image Path**: `/images/team/Aniket.png`
- **Verbatim Bio** (`TeamSection.tsx:67-69`):
  > "Aniket is SkillPedia's automation testing powerhouse, carrying over 5 years of hands-on experience across the IT and EdTech industries. Specializing in Selenium, Appium, CI/CD pipelines, and test framework architecture, he transforms complex testing methodologies into intuitive, project-based learning modules. His industry-tested approach ensures students graduate with practical expertise in quality assurance workflows used by leading tech companies worldwide."
- **Core Domain Expertise**: Automation Testing (Selenium, Playwright, Appium), Java for Automation, JS/TS Test Automation, CI/CD pipelines, Mobile App Testing.

#### 5. Lavli Pandey
- **Full Name**: Lavli Pandey
- **Title**: Pre-Basic Communication Trainer
- **Role / Highlight**: Foundation & Communication Skills · 3+ Years · Communication Training
- **Image Path**: `/images/team/Lavli.png`
- **Verbatim Bio** (`TeamSection.tsx:80-82`):
  > "With over 3 years of experience as a Pre-basic communication trainer, Lavli brings exceptional communication mastery to SkillPedia's foundational training programs. She specializes in building strong verbal and written communication skills from the ground up — empowering students who are early in their journey to develop the confidence, clarity, and professional communication abilities essential for cracking interviews and thriving in corporate environments."
- **Core Domain Expertise**: Basic English, Spoken English, English Grammar & Tenses, Communication for Beginners, Confidence & Articulation.

#### 6. Saurabh Pathak
- **Full Name**: Saurabh Pathak
- **Title**: Backend Developer
- **Role / Highlight**: Backend Development · 3+ Years · Backend Development
- **Image Path**: `/images/team/Saurabh.png`
- **Verbatim Bio** (`TeamSection.tsx:89`):
  > "Saurabh is a seasoned Backend Developer with over 3 years of experience building robust backend systems for a Malaysia-based company. His expertise ensures that our students gain real-world insights into scalable architectures, API development, and modern backend practices. He guides learners through complex database optimizations and cloud deployment strategies, ensuring they are fully prepared to tackle enterprise-level backend challenges."
- **Core Domain Expertise**: Backend Development, Java Development, Node.js, REST API Development, Database Optimization (SQL/NoSQL), Scalable Systems & Cloud.

#### 7. Sumit Kumar
- **Full Name**: Sumit Kumar
- **Title**: SDET (Software Development Engineer in Test)
- **Role / Highlight**: Manual, ETL, Mobile & API Testing · 3+ Years · SDET (NPCI India)
- **Image Path**: `/images/team/Sumit.png`
- **Verbatim Bio** (`TeamSection.tsx:97`):
  > "Sumit is a highly skilled Software Development Engineer in Test (SDET) with over 3 years of experience at NPCI India. His comprehensive knowledge spans Manual, ETL, Mobile, and API testing, bringing an industry-leading standard of quality assurance to our training programs. He focuses on building robust automated test frameworks and continuous testing pipelines, empowering students to master the critical skills needed for flawless software delivery."
- **Core Domain Expertise**: Manual Testing, API Testing (Postman & Rest Assured), ETL / Database QA, Performance Testing (High-throughput systems), Mobile QA.

---

### 1.3 Course Program Page Data Structure (Contract)
As observed in existing pages (e.g. `src/app/programs/full-stack-engineering/FullStackClient.tsx:67-80`):
```typescript
interface Instructor {
  name: string;
  role: string;
  image: string;
  bio: string;
}
```

---

## 2. Logic Chain

1. **Domain Stratification**: The 7 team members cleanly partition into three distinct functional verticals matching the 3 requested tracks:
   - **Development**: Ayush Dwivedy (Full Stack / AI / Frontend / Systems) + Saurabh Pathak (Backend / Java / Node.js / APIs / Databases) + Dharmendra (Model Training).
   - **Testing**: Aniket (Automation / Selenium / Playwright / Appium) + Sumit Kumar (SDET / Manual / API / Performance / NPCI) + Dharmendra (Founder / Model Training / QA Lead).
   - **Communication**: Lavli Pandey (Pre-Basic / Spoken / Grammar / Beginners) + Line (HR Head / Corporate / Professional / Interview) + Dharmendra (Executive mock interviews).

2. **Pedagogical Pairing (1-2 Instructors per course)**:
   - Each course page template requires 2 instructor cards (`INSTRUCTORS` array with 2 entries) to maintain visual symmetry in the 2-column grid (`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto`).
   - Pairing a primary subject matter expert (e.g. Saurabh for Backend / Java, Aniket for Automation, Lavli for Grammar, Line for Corporate Comm) with a complementary co-instructor (e.g. Ayush for Fullstack/AI, Sumit for API/Performance, Dharmendra for Leadership) ensures comprehensive topic coverage.

3. **Slug Standardization**:
   - Slugs are strictly kebab-case, matching the 29 course names from `ORIGINAL_REQUEST.md`.

---

## 3. Caveats

- **Visual Grid Assumption**: All existing `/programs/*Client.tsx` templates render 2 instructor cards in a 2-column grid. The 29-course mapping below provides exactly 2 instructors (Primary & Secondary) for every course to preserve layout harmony.
- **Biographical Consistency**: Bio strings should strictly reuse the canonical descriptions from `TeamSection.tsx` or role-tailored variants to prevent text discrepancies across pages.
- **Image Paths**: All image paths must use the exact casing (`/images/team/<Name>.png`) since Linux/production environments are case-sensitive.

---

## 4. Conclusion

### 4.1 Master 29-Course Instructor Mapping Table

| # | Category | Course Title | Suggested Directory Slug | Primary Instructor | Secondary Instructor | Pedagogical Rationale |
|---|---|---|---|---|---|---|
| 1 | **Development** | Full Stack Development | `full-stack-development` | **Ayush Dwivedy** (`/images/team/Ayush.png`) | **Saurabh Pathak** (`/images/team/Saurabh.png`) | Ayush leads React/Next.js frontend & full-stack architecture; Saurabh covers backend, DBs, and microservices. |
| 2 | **Development** | Java Development | `java-development` | **Saurabh Pathak** (`/images/team/Saurabh.png`) | **Ayush Dwivedy** (`/images/team/Ayush.png`) | Saurabh brings enterprise Java backend experience; Ayush reinforces OOP architecture, design patterns, and deployment. |
| 3 | **Development** | Python Development | `python-development` | **Ayush Dwivedy** (`/images/team/Ayush.png`) | **Saurabh Pathak** (`/images/team/Saurabh.png`) | Ayush specializes in Python, FastAPI, and AI pipelines; Saurabh provides backend architecture and DB optimization. |
| 4 | **Development** | Web Development | `web-development` | **Ayush Dwivedy** (`/images/team/Ayush.png`) | **Saurabh Pathak** (`/images/team/Saurabh.png`) | Ayush covers modern web standards (HTML5/CSS3/JS/Next.js); Saurabh supports full-stack web integration. |
| 5 | **Development** | JavaScript | `javascript` | **Ayush Dwivedy** (`/images/team/Ayush.png`) | **Saurabh Pathak** (`/images/team/Saurabh.png`) | Ayush teaches ES6+, async runtime, and browser APIs; Saurabh assists with Node.js backend execution. |
| 6 | **Development** | React JS | `react-js` | **Ayush Dwivedy** (`/images/team/Ayush.png`) | **Saurabh Pathak** (`/images/team/Saurabh.png`) | Ayush is the lead React/Next.js architect; Saurabh assists with client-server data flow and state sync. |
| 7 | **Development** | Node.js | `nodejs` | **Saurabh Pathak** (`/images/team/Saurabh.png`) | **Ayush Dwivedy** (`/images/team/Ayush.png`) | Saurabh specializes in Node.js runtime, Express/Fastify, and microservices; Ayush covers full-stack integration. |
| 8 | **Development** | Backend Development | `backend-development` | **Saurabh Pathak** (`/images/team/Saurabh.png`) | **Ayush Dwivedy** (`/images/team/Ayush.png`) | Saurabh's primary domain is scalable backend architectures, SQL/NoSQL DBs, and cloud; Ayush adds API security. |
| 9 | **Development** | Frontend Development | `frontend-development` | **Ayush Dwivedy** (`/images/team/Ayush.png`) | **Saurabh Pathak** (`/images/team/Saurabh.png`) | Ayush provides modern UI engineering, Tailwind CSS, and UX animations; Saurabh teaches API consumption. |
| 10 | **Development** | API Development | `api-development` | **Saurabh Pathak** (`/images/team/Saurabh.png`) | **Ayush Dwivedy** (`/images/team/Ayush.png`) | Saurabh builds scalable enterprise REST APIs; Ayush covers GraphQL, OpenAPI specifications, and API security. |
| 11 | **Development** | Software Development with AI Tools | `software-development-ai-tools` | **Ayush Dwivedy** (`/images/team/Ayush.png`) | **Dharmendra Kumar Pandey** (`/images/team/Dharmendra.png`) | Ayush builds AI-assisted workflows and LLM applications; Dharmendra contributes model training domain insight. |
| 12 | **Testing** | Manual Testing | `manual-testing` | **Sumit Kumar** (`/images/team/Sumit.png`) | **Dharmendra Kumar Pandey** (`/images/team/Dharmendra.png`) | Sumit brings QA test design and STLC execution from NPCI; Dharmendra provides foundational QA leadership. |
| 13 | **Testing** | Automation Testing with Selenium | `automation-testing-selenium` | **Aniket** (`/images/team/Aniket.png`) | **Sumit Kumar** (`/images/team/Sumit.png`) | Aniket is SkillPedia's Selenium & test framework specialist; Sumit adds test automation execution at scale. |
| 14 | **Testing** | Java + Selenium | `java-selenium` | **Aniket** (`/images/team/Aniket.png`) | **Sumit Kumar** (`/images/team/Sumit.png`) | Aniket teaches Java OOP for automation and POM architecture; Sumit reinforces test harness & TestNG design. |
| 15 | **Testing** | API Testing with Postman & Rest Assured | `api-testing-postman-rest-assured` | **Sumit Kumar** (`/images/team/Sumit.png`) | **Aniket** (`/images/team/Aniket.png`) | Sumit specializes in Rest Assured & Postman testing for fintech pipelines; Aniket adds CI/CD integration. |
| 16 | **Testing** | Playwright Automation | `playwright-automation` | **Aniket** (`/images/team/Aniket.png`) | **Sumit Kumar** (`/images/team/Sumit.png`) | Aniket leads modern end-to-end automation with Playwright; Sumit assists with test data assertions. |
| 17 | **Testing** | JavaScript/TypeScript for Test Automation | `javascript-typescript-test-automation` | **Aniket** (`/images/team/Aniket.png`) | **Ayush Dwivedy** (`/images/team/Ayush.png`) | Aniket teaches test scripting for Cypress/Playwright; Ayush supplies JS/TS runtime and typing mastery. |
| 18 | **Testing** | Performance Testing | `performance-testing` | **Sumit Kumar** (`/images/team/Sumit.png`) | **Dharmendra Kumar Pandey** (`/images/team/Dharmendra.png`) | Sumit tested high-volume transaction systems at NPCI (JMeter); Dharmendra guides performance benchmarking. |
| 19 | **Testing** | Mobile App Testing | `mobile-app-testing` | **Aniket** (`/images/team/Aniket.png`) | **Sumit Kumar** (`/images/team/Sumit.png`) | Aniket specializes in Appium and mobile framework architecture; Sumit brings mobile banking QA experience. |
| 20 | **Testing** | AI-Based Software Testing | `ai-based-software-testing` | **Dharmendra Kumar Pandey** (`/images/team/Dharmendra.png`) | **Aniket** (`/images/team/Aniket.png`) | Dharmendra brings 5+ years in model training & QA; Aniket integrates AI test automation tools into CI/CD. |
| 21 | **Testing** | Complete Software Testing Course | `complete-software-testing` | **Dharmendra Kumar Pandey** (`/images/team/Dharmendra.png`) | **Sumit Kumar** (`/images/team/Sumit.png`) | Dharmendra delivers end-to-end QA leadership; Sumit covers deep technical execution across manual & API tracks. |
| 22 | **Communication** | Basic English Communication | `basic-english-communication` | **Lavli Pandey** (`/images/team/Lavli.png`) | **Line** (`/images/team/Line.png`) | Lavli builds foundational grammar and basic vocabulary; Line supports student progress milestones. |
| 23 | **Communication** | Spoken English | `spoken-english` | **Lavli Pandey** (`/images/team/Lavli.png`) | **Line** (`/images/team/Line.png`) | Lavli conducts pronunciation drills and daily fluency exercises; Line assists with conversational pacing. |
| 24 | **Communication** | English Grammar & Tenses | `english-grammar-tenses` | **Lavli Pandey** (`/images/team/Lavli.png`) | **Line** (`/images/team/Line.png`) | Lavli specializes in systematically breaking down grammar and tenses for non-native speakers. |
| 25 | **Communication** | Communication for Beginners | `communication-for-beginners` | **Lavli Pandey** (`/images/team/Lavli.png`) | **Line** (`/images/team/Line.png`) | Lavli focuses on overcoming stage fright and hesitation in early-stage communicators. |
| 26 | **Communication** | Advanced Communication | `advanced-communication` | **Line** (`/images/team/Line.png`) | **Lavli Pandey** (`/images/team/Lavli.png`) | Line brings 5+ years in tech recruitment, executive presence, and persuasive speaking; Lavli supports articulation. |
| 27 | **Communication** | Professional Communication | `professional-communication` | **Line** (`/images/team/Line.png`) | **Lavli Pandey** (`/images/team/Lavli.png`) | Line trains on workplace email etiquette, cross-functional collaboration, and team presentations. |
| 28 | **Communication** | Interview Communication | `interview-communication` | **Line** (`/images/team/Line.png`) | **Dharmendra Kumar Pandey** (`/images/team/Dharmendra.png`) | Line coaches HR & behavioral interview rounds; Dharmendra conducts leadership mock technical interviews. |
| 29 | **Communication** | Corporate Communication | `corporate-communication` | **Line** (`/images/team/Line.png`) | **Lavli Pandey** (`/images/team/Lavli.png`) | Line mentors on corporate culture, executive presence, stakeholder negotiation, and corporate conduct. |

---

### 4.2 Reusable Instructor Object Dictionary (TypeScript)
For immediate plug-and-play use in page generation:

```typescript
export const INSTRUCTOR_PROFILES = {
  dharmendra: {
    name: "Dharmendra Kumar Pandey",
    role: "Founder & CEO · Software Testing Leader",
    image: "/images/team/Dharmendra.png",
    bio: "The visionary behind SkillPedia, Dharmendra founded the platform with a singular mission — to bridge the gap between academic learning and industry-readiness. With over 5 years of deep expertise in Software Testing and the Model Training Industry, he has mentored hundreds of aspiring engineers into confident, job-ready professionals."
  },
  ayush: {
    name: "Ayush Dwivedy",
    role: "Managing Director · Technology & Strategy",
    image: "/images/team/Ayush.png",
    bio: "As Managing Director, Ayush brings over 3 years of experience as a Software and AI Developer. He architects SkillPedia's vision, technology stack, and growth strategy — ensuring every student receives a truly top-tier learning experience. His hands-on expertise in large-scale distributed systems shapes the backbone of SkillPedia's curriculum."
  },
  line: {
    name: "Line",
    role: "Head of HR & Communications · People & Culture",
    image: "/images/team/Line.png",
    bio: "Line brings over 5 years of communication expertise in Human Resources and Technical Recruitment. At SkillPedia, she leads talent operations, student engagement, and industry partnership communications, ensuring SkillPedia students are articulate, interview-ready, and corporate-polished."
  },
  aniket: {
    name: "Aniket",
    role: "Head of Operations · QA & EdTech",
    image: "/images/team/Aniket.png",
    bio: "Aniket is SkillPedia's automation testing powerhouse, carrying over 5 years of hands-on experience across the IT and EdTech industries. Specializing in Selenium, Appium, CI/CD pipelines, and test framework architecture, he transforms complex testing methodologies into intuitive, project-based learning modules."
  },
  lavli: {
    name: "Lavli Pandey",
    role: "Pre-Basic Communication Trainer · Foundational Skills",
    image: "/images/team/Lavli.png",
    bio: "With over 3 years of experience as a Pre-basic communication trainer, Lavli brings exceptional communication mastery to SkillPedia's foundational training programs. She specializes in building strong verbal and written communication skills from the ground up."
  },
  saurabh: {
    name: "Saurabh Pathak",
    role: "Backend Developer · Scalable Architecture",
    image: "/images/team/Saurabh.png",
    bio: "Saurabh is a seasoned Backend Developer with over 3 years of experience building robust backend systems for a Malaysia-based company. His expertise ensures that our students gain real-world insights into scalable architectures, API development, and modern backend practices."
  },
  sumit: {
    name: "Sumit Kumar",
    role: "SDET · Manual, ETL, Mobile & API Testing",
    image: "/images/team/Sumit.png",
    bio: "Sumit is a highly skilled Software Development Engineer in Test (SDET) with over 3 years of experience at NPCI India. His comprehensive knowledge spans Manual, ETL, Mobile, and API testing, bringing an industry-leading standard of quality assurance to our training programs."
  }
};
```

---

## 5. Verification Method

1. **Asset Verification**:
   Execute `find public/images/team -type f` to ensure all 7 PNG assets exist with exact PascalCase naming.
2. **Profile Text Verification**:
   Inspect `src/components/sections/TeamSection.tsx` lines 25–99 to ensure the biographical statements match the extracted values verbatim.
3. **Course Count & Slug Verification**:
   Confirm all 29 courses from `ORIGINAL_REQUEST.md` (11 Development, 10 Testing, 8 Communication) are accounted for with unique slugs and paired instructor assignments.
4. **Build Invalidation Conditions**:
   Any missing image file in `/public/images/team/` or invalid image path in `INSTRUCTORS` will cause Next.js Image component runtime warnings or broken avatar layouts.
