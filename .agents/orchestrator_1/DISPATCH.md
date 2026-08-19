# Dispatch Record

## 2026-08-18T10:08:01Z (UTC)

Create 29 new course webpages across three categories (Development, Testing, Communication) using the exact hardcoded directory structure currently used in `/src/app/programs/`. You will also update the main `/programs` listing page with 29 new course cards and ensure all instructor details accurately map to the existing team's expertise.

Requirements:
1. Course Integration: Add 29 new course cards to `/src/app/programs/ProgramsList.tsx` matching existing styling and design language.
   - Development (11): Full Stack Development, Java Development, Python Development, Web Development, JavaScript, React JS, Node.js, Backend Development, Frontend Development, API Development, Software Development with AI Tools.
   - Testing (10): Manual Testing, Automation Testing with Selenium, Java + Selenium, API Testing with Postman & Rest Assured, Playwright Automation, JavaScript/TypeScript for Test Automation, Performance Testing, Mobile App Testing, AI-Based Software Testing, Complete Software Testing Course.
   - Communication (8): Basic English Communication, Spoken English, English Grammar & Tenses, Communication for Beginners, Advanced Communication, Professional Communication, Interview Communication, Corporate Communication.
2. Page Generation & Content: Create distinct Next.js page directory for each course in `/src/app/programs/` following existing page patterns. Auto-generate high-quality placeholder content for curriculum & descriptions. All courses must be structured under 3 months (45 days for less complex, 3 months for the rest).
3. Instructor Mapping: Map instructors dynamically based on the current team's expertise found in the codebase (e.g. Ayush/Saurabh for Development, Aniket/Sumit for Testing, Line/Lavli for Communication).
4. Verification: Ensure all 29 directories exist with valid `page.tsx`, `/programs` listing updated with all 29 links, and `npm run build` passes with zero errors.
