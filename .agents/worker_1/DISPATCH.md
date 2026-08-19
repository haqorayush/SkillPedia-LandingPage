## 2026-08-18T17:07:41Z
You are Worker 1 (Theme & Color Mode Specialist).
Your working directory is: /Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/.agents/worker_1
You MUST read the authoritative user request at: /Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/.agents/ORIGINAL_REQUEST.md
Read the project scope at: /Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/PROJECT.md
Read the detailed survey report at: /Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/.agents/explorer_1/survey_theme_ui.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Skill reference available:
You may read and follow the modern web guidance skill at:
`/Users/ayushdwivedy/.gemini/config/plugins/modern-web-guidance-plugin/skills/modern-web-guidance/SKILL.md`

Mission:
Implement all fixes for Milestone 1: Category R1 (Theme Fixes T-1 through T-14).
Specific Files Owned and Target Changes:
1. `src/components/sections/TeamSection.tsx`:
   - Line 361 (T-1): Change SeniorCard name heading from `text-white` to `text-gray-900 dark:text-white`.
   - Lines 141, 160 (T-3): Clean duplicate and conflicting `dark:from-*` and `dark:bg-*` tokens.
2. `src/components/sections/NavigationPortalView.tsx`:
   - Line 146 (T-2): Replace forced dark navy background `bg-[#0B1F5E] dark:bg-[#071340] text-white` with `bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-[#0B1F5E] dark:to-[#071340] text-gray-900 dark:text-white`. Ensure nested text elements have appropriate semantic dark/light classes.
3. `src/components/layout/Footer.tsx`:
   - Lines 86, 102 (T-4): Eliminate duplicate `dark:border-*` and duplicate `dark:text-*` classes.
   - Line 50 (T-5): Ensure social icons have proper border and contrast in light mode (`bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-[#0B1F5E] dark:hover:text-white`).
4. `src/components/sections/HeroSection.tsx`:
   - Line 151 (T-6): Change scroll indicator text from `text-white/50` to `text-gray-500 dark:text-white/50`.
5. `src/app/apply/ApplyClient.tsx`:
   - Lines 220, 238, 254, 272, 316, 333, 352, 367, 386, 440, 455, 473, 491 (T-7): Ensure select `<option>` elements have dark background classes (`bg-white dark:bg-[#0B1F5E] text-gray-900 dark:text-white`).
   - Line 525 (T-8): Ensure disclaimer text has `text-gray-500 dark:text-gray-400`.
6. `src/components/sections/ProjectsSection.tsx`:
   - Line 48 (T-9): Add explicit light-mode card border `border border-gray-200/80 dark:border-white/10`.
7. `src/components/sections/TestimonialsSection.tsx`:
   - Line 44 (T-10): Fix pause button theme contrast and hover states (`text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white`).
8. `src/components/sections/FAQSection.tsx` & any other accordion/contact elements (T-11):
   - Verify proper dark mode background, borders, and text contrast.
9. `src/components/layout/Navbar.tsx` (T-12):
   - Verify search modal backdrop, input borders, and mobile navigation panel have crisp light and dark mode styles.
10. `src/components/sections/CourseDetailView.tsx` (T-13):
    - Verify course tag badge palette parity across light and dark modes.
11. `src/app/globals.css` (T-14):
    - Verify theme variables and `@custom-variant dark`.

Requirements:
- Execute `npm run build` to verify that all 33 static pages build without errors.
- Document all file modifications, line numbers, and verification command outputs in your handoff report at:
  `/Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia/.agents/worker_1/handoff.md`
- Send a message to the orchestrator when finished.
