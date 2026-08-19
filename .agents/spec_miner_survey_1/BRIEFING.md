# BRIEFING — 2026-08-18T10:26:00Z

## Mission
Probe ProgramsList.tsx and define the exact specification for all 29 courses across Development, Testing, and Communication.

## 🔒 My Identity
- Archetype: Specification Miner
- Roles: Spec Miner
- Working directory: /Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/.agents/spec_miner_survey_1
- Original parent: 878f383b-558f-478d-92ed-bc233d303d78
- Milestone: Milestone 1 - Discovery & Specification Mining

## 🔒 Key Constraints
- Read-only investigation: probe and document authoritative specifications, do not implement changes.
- Provide comprehensive mapping of all 29 courses: slugs, category, duration, badges, card properties, curriculum structure.
- Adhere strictly to 5-Component Handoff Protocol in handoff.md.

## Current Parent
- Conversation ID: 878f383b-558f-478d-92ed-bc233d303d78
- Updated: 2026-08-18T10:26:00Z

## Task Summary
- **What to build**: Full specification report of the 29 courses for SkillPedia landing page / programs list.
- **Success criteria**: Complete mapping of 29 courses with exact slugs, categories, durations, card data, and curriculum structure requirements documented in handoff.md.
- **Interface contracts**: ProgramsList course card interface, constants schema, and directory structure in `/src/app/programs/`.
- **Code layout**: Next.js App Router under `/src/app/programs/`.

## Key Decisions Made
- Course Slugs: Formulated 29 standardized kebab-case directory slugs matching `/src/app/programs/[slug]/page.tsx`.
- Duration Division: 8 courses assigned 3 Months (12 Weeks) based on comprehensive depth (Full Stack, Java Dev, Python Dev, Backend Dev, Frontend Dev, Java + Selenium, Complete Software Testing, Corporate Communication); 21 courses assigned 45 Days (6 Weeks) based on focused specialization.
- Category Breakdown: 11 Development, 10 Testing, 8 Communication.
- ProgramsList Enhancement: Proposed category tab filter ("All", "Development", "Testing", "Communication") with duration badges, tags, and animated cards matching Framer Motion patterns.
- Instructor Alignment: Mapped team members (Ayush, Saurabh, Dharmendra, Aniket, Sumit, Line, Lavli) per domain expertise.

## Artifact Index
- handoff.md — Comprehensive specification report for all 29 courses and ProgramsList data structure.
- progress.md — Liveness and progress tracking.
- DISPATCH.md — Original dispatch instructions.
