import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import { COURSES_DATA } from '../src/lib/coursesData';

interface TestResult {
  category: string;
  name: string;
  passed: boolean;
  error?: string;
  details?: any;
}

const results: TestResult[] = [];

function assert(condition: boolean, category: string, name: string, errorMsg?: string, details?: any) {
  if (condition) {
    results.push({ category, name, passed: true, details });
    console.log(`  ✅ [PASS] ${name}`);
  } else {
    results.push({ category, name, passed: false, error: errorMsg || 'Assertion failed', details });
    console.error(`  ❌ [FAIL] ${name} - ${errorMsg}`);
  }
}

// Helper: recursively find all .tsx and .ts files
function getAllSourceFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllSourceFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

async function runThemeAdversarialChallenge() {
  console.log('================================================================');
  console.log('  MILESTONE 1: THEME & COLOR MODE ADVERSARIAL STRESS TEST SUITE ');
  console.log('================================================================\n');

  const srcDir = path.resolve(__dirname, '../src');
  const allFiles = getAllSourceFiles(srcDir);
  const tsxFiles = allFiles.filter(f => f.endsWith('.tsx'));

  // =========================================================================
  // DIMENSION 1: INVISIBLE TEXT & HIGH-RISK CONTRAST DEFECTS (T-1, T-5, T-6, T-8, T-10)
  // =========================================================================
  console.log('▶ DIMENSION 1: Invisible Text & High-Risk Contrast Defects');

  // Check T-1: TeamSection SeniorCard title
  const teamSectionPath = path.join(srcDir, 'components/sections/TeamSection.tsx');
  const teamSectionContent = fs.readFileSync(teamSectionPath, 'utf8');

  const seniorCardMatch = teamSectionContent.includes('text-xl sm:text-2xl font-[family-name:var(--font-heading-display)] font-bold text-gray-900 dark:text-white mb-1');
  assert(
    seniorCardMatch,
    'T-1',
    'TeamSection SeniorCard heading has adaptive text-gray-900 dark:text-white (T-1)',
    'SeniorCard does not contain expected adaptive color class'
  );

  const deptCardMatch = teamSectionContent.includes('text-xl font-[family-name:var(--font-heading-display)] font-bold text-gray-900 dark:text-white');
  assert(
    deptCardMatch,
    'T-1',
    'TeamSection DepartmentCard heading has adaptive text-gray-900 dark:text-white',
    'DepartmentCard does not contain expected adaptive color class'
  );

  const specCardMatch = teamSectionContent.includes('text-lg font-[family-name:var(--font-heading-display)] font-bold text-gray-900 dark:text-white');
  assert(
    specCardMatch,
    'T-1',
    'TeamSection SpecialistCard heading has adaptive text-gray-900 dark:text-white',
    'SpecialistCard does not contain expected adaptive color class'
  );

  // Check T-5: Footer social icons
  const footerPath = path.join(srcDir, 'components/layout/Footer.tsx');
  const footerContent = fs.readFileSync(footerPath, 'utf8');
  const socialIconsContrast = footerContent.includes('bg-gray-100 dark:bg-white/10') && footerContent.includes('text-gray-600 dark:text-gray-400');
  assert(
    socialIconsContrast,
    'T-5',
    'Footer social icons use high-contrast light/dark background and text tokens (T-5)',
    'Footer social icons missing high-contrast tokens'
  );

  // Check T-6: HeroSection scroll indicator
  const heroPath = path.join(srcDir, 'components/sections/HeroSection.tsx');
  const heroContent = fs.readFileSync(heroPath, 'utf8');
  const scrollIndicatorContrast = heroContent.includes('text-gray-500 dark:text-white/50');
  assert(
    scrollIndicatorContrast,
    'T-6',
    'HeroSection scroll indicator has visible light/dark text contrast (T-6)',
    'HeroSection scroll indicator missing text-gray-500 light mode variant'
  );

  // Check T-8: ApplyClient disclaimer text
  const applyClientPath = path.join(srcDir, 'app/apply/ApplyClient.tsx');
  const applyClientContent = fs.readFileSync(applyClientPath, 'utf8');
  const disclaimerContrast = applyClientContent.includes('text-xs text-gray-500 dark:text-gray-400 text-center pt-4');
  assert(
    disclaimerContrast,
    'T-8',
    'ApplyClient disclaimer text has explicit dark mode contrast class (T-8)',
    'ApplyClient disclaimer missing dark:text-gray-400'
  );

  // Check T-10: TestimonialsSection pause button
  const testimonialsPath = path.join(srcDir, 'components/sections/TestimonialsSection.tsx');
  const testimonialsContent = fs.readFileSync(testimonialsPath, 'utf8');
  const pauseButtonContrast = testimonialsContent.includes('text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white');
  assert(
    pauseButtonContrast,
    'T-10',
    'TestimonialsSection pause button has accessible theme contrast and hover states (T-10)',
    'Testimonials pause button missing adaptive color tokens'
  );

  // =========================================================================
  // DIMENSION 2: CONFLICTING & DUPLICATE TAILWIND UTILITY CLASSES (T-3, T-4)
  // =========================================================================
  console.log('\n▶ DIMENSION 2: Conflicting & Duplicate Tailwind Utility Classes');

  // Check T-3: TeamSection lines 141, 160
  const teamHasDupFrom = (teamSectionContent.match(/dark:from-white\s+dark:from-/g) || []).length > 0;
  const teamHasDupBg = (teamSectionContent.match(/dark:bg-gray-200\s+dark:bg-/g) || []).length > 0;
  assert(
    !teamHasDupFrom && !teamHasDupBg,
    'T-3',
    'TeamSection has zero duplicate/conflicting dark:from-* or dark:bg-* utility tokens (T-3)',
    'Found duplicate tokens in TeamSection'
  );

  // Check T-4: Footer duplicate classes
  const footerHasDupBorder = (footerContent.match(/dark:border-white\/10\s+dark:border-blue-500\/20/g) || []).length > 0;
  const footerHasDupText = (footerContent.match(/dark:text-white\s+dark:text-gray-900\s+dark:text-white/g) || []).length > 0;
  assert(
    !footerHasDupBorder && !footerHasDupText,
    'T-4',
    'Footer has zero duplicate dark:border-* or duplicate dark:text-* tokens (T-4)',
    'Found duplicate border or text tokens in Footer'
  );

  // Automated AST/Regex class string scan across all TSX files for redundant duplicate dark classes
  let duplicateClassErrors: string[] = [];
  const classNameRegex = /className=["']([^"']+)["']/g;

  for (const file of tsxFiles) {
    const relPath = path.relative(srcDir, file);
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = classNameRegex.exec(content)) !== null) {
      const classStr = match[1];
      const tokens = classStr.split(/\s+/).filter(Boolean);

      // Check for exact duplicate tokens in the same element
      const tokenCounts = new Map<string, number>();
      for (const token of tokens) {
        tokenCounts.set(token, (tokenCounts.get(token) || 0) + 1);
      }
      for (const [token, count] of tokenCounts.entries()) {
        if (count > 1) {
          duplicateClassErrors.push(`${relPath}: Duplicate class token "${token}" (${count}x) in: "${classStr.slice(0, 60)}..."`);
        }
      }

      // Check for conflicting dark background utilities on same element (e.g. dark:bg-white and dark:bg-black)
      const darkBgs = tokens.filter(t => t.startsWith('dark:bg-') && !t.includes('hover:'));
      if (darkBgs.length > 1) {
        duplicateClassErrors.push(`${relPath}: Multiple dark:bg tokens [${darkBgs.join(', ')}] in: "${classStr.slice(0, 60)}..."`);
      }
    }
  }

  assert(
    duplicateClassErrors.length === 0,
    'T-3/T-4 Codebase Scan',
    'Entire codebase has zero conflicting or duplicate class tokens on any element',
    duplicateClassErrors.slice(0, 5).join('; ')
  );

  // =========================================================================
  // DIMENSION 3: FORCED DARK MODE CLASSES IN ROUTE CONTAINERS (T-2)
  // =========================================================================
  console.log('\n▶ DIMENSION 3: Forced Dark Mode Classes in Route Containers');

  const navPortalPath = path.join(srcDir, 'components/sections/NavigationPortalView.tsx');
  const navPortalContent = fs.readFileSync(navPortalPath, 'utf8');

  // Check T-2: NavigationPortalView adaptive background and text
  const navPortalAdaptiveBg = navPortalContent.includes('bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-[#0B1F5E] dark:to-[#071340]');
  const navPortalAdaptiveText = navPortalContent.includes('text-gray-900 dark:text-white');
  assert(
    navPortalAdaptiveBg && navPortalAdaptiveText,
    'T-2',
    'NavigationPortalView (/about) root wrapper uses adaptive light/dark gradient and text tokens (T-2)',
    'NavigationPortalView does not use adaptive theme tokens on root wrapper'
  );

  // Check child element theme adaptability in NavigationPortalView
  const navPortalTitleAdaptive = navPortalContent.includes('text-gray-600 hover:text-gray-900 dark:text-white/80 dark:hover:text-white');
  const navPortalDescAdaptive = navPortalContent.includes('text-gray-600 dark:text-gray-200');
  const navPortalBtnAdaptive = navPortalContent.includes('border-gray-300 dark:border-white/25 bg-white/80 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/15');
  assert(
    navPortalTitleAdaptive && navPortalDescAdaptive && navPortalBtnAdaptive,
    'T-2',
    'NavigationPortalView navigation links, descriptions, and CTA buttons adapt dynamically to light/dark modes',
    'NavigationPortalView child elements missing adaptive light/dark classes'
  );

  // Scan all page/view components to ensure no root containers force static dark themes
  const pageFiles = allFiles.filter(f => f.includes('/app/') && (f.endsWith('page.tsx') || f.endsWith('Client.tsx')));
  let forcedDarkRoutes: string[] = [];
  for (const pageFile of pageFiles) {
    const rel = path.relative(srcDir, pageFile);
    const content = fs.readFileSync(pageFile, 'utf8');
    // Regex looking for <main or <div className="... bg-[#0B1F5E] or bg-[#071340] or bg-gray-900 without dark:
    const matches = content.match(/className=["'][^"']*\b(bg-\[#0B1F5E\]|bg-\[#071340\]|bg-gray-950)\b[^"']*["']/g);
    if (matches) {
      for (const m of matches) {
        if (!m.includes('dark:bg-') && !m.includes('dark:from-') && !m.includes('hover:')) {
          forcedDarkRoutes.push(`${rel}: Found non-dark prefixed dark bg: ${m}`);
        }
      }
    }
  }

  assert(
    forcedDarkRoutes.length === 0,
    'T-2 Route Audit',
    'All App Router pages and Client Views honor light/dark theme dynamically (zero forced dark roots)',
    forcedDarkRoutes.join('; ')
  );

  // =========================================================================
  // DIMENSION 4: SELECT DROPDOWN <OPTION> STYLING (T-7)
  // =========================================================================
  console.log('\n▶ DIMENSION 4: Select Dropdown <option> Styling & Contrast');

  // Search all <select> and <option> tags in the codebase
  let unstyledOptions: string[] = [];
  let totalOptionsCount = 0;

  for (const file of tsxFiles) {
    const rel = path.relative(srcDir, file);
    const content = fs.readFileSync(file, 'utf8');
    
    // Check if file has <select>
    if (content.includes('<select')) {
      const optionRegex = /<option\s+([^>]*?)>/g;
      let optMatch;
      while ((optMatch = optionRegex.exec(content)) !== null) {
        totalOptionsCount++;
        const optAttrs = optMatch[1];
        const hasDarkBg = optAttrs.includes('dark:bg-') || optAttrs.includes('dark:bg-[#0B1F5E]');
        const hasLightBg = optAttrs.includes('bg-white') || optAttrs.includes('bg-gray-');
        const hasTextColor = optAttrs.includes('text-gray-900') && optAttrs.includes('dark:text-white');

        if (!hasDarkBg || !hasLightBg || !hasTextColor) {
          unstyledOptions.push(`${rel}: unstyled option <option ${optAttrs}>`);
        }
      }
    }
  }

  assert(
    totalOptionsCount >= 8,
    'T-7',
    `Found and audited ${totalOptionsCount} <option> elements across select dropdowns in codebase (>= 8)`,
    `Found only ${totalOptionsCount} option elements`
  );

  assert(
    unstyledOptions.length === 0,
    'T-7',
    '100% of <option> elements have explicit bg-white dark:bg-[#0B1F5E] text-gray-900 dark:text-white styling (T-7)',
    unstyledOptions.join('; ')
  );

  // =========================================================================
  // DIMENSION 5: COMPONENT BORDERS, ACCORDIONS, MODALS, CARDS (T-9, T-11, T-12, T-13, T-14)
  // =========================================================================
  console.log('\n▶ DIMENSION 5: Component Borders, Accordions, Badges, and Global Variables');

  // T-9: ProjectsSection light mode card border
  const projectsPath = path.join(srcDir, 'components/sections/ProjectsSection.tsx');
  const projectsContent = fs.readFileSync(projectsPath, 'utf8');
  const projectsBorder = projectsContent.includes('border-gray-200/80') && projectsContent.includes('dark:border-white/10');
  assert(
    projectsBorder,
    'T-9',
    'ProjectsSection card cards have explicit light mode border (border-gray-200/80) and dark border (T-9)',
    'ProjectsSection card border is missing light mode definition'
  );

  // T-11: FAQSection Accordion and input
  const faqPath = path.join(srcDir, 'components/sections/FAQSection.tsx');
  const faqContent = fs.readFileSync(faqPath, 'utf8');
  const faqInputAdaptive = faqContent.includes('bg-gray-50 dark:bg-[#0B1F5E]/60 text-gray-900 dark:text-white');
  const faqAccordionAdaptive = faqContent.includes('text-gray-800 dark:text-gray-100') && faqContent.includes('border-gray-100 dark:border-white/10');
  assert(
    faqInputAdaptive && faqAccordionAdaptive,
    'T-11',
    'FAQSection search input and accordion triggers have accessible light and dark contrast tokens (T-11)',
    'FAQSection accordion or input missing adaptive styling'
  );

  // T-12: Navbar scrolled backdrop and mobile overlay
  const navbarPath = path.join(srcDir, 'components/layout/Navbar.tsx');
  const navbarContent = fs.readFileSync(navbarPath, 'utf8');
  const navbarScrolled = navbarContent.includes('bg-white/85 dark:bg-[#071340]/85 backdrop-blur-xl border-b border-gray-200 dark:border-white/10');
  const navbarMobile = navbarContent.includes('bg-white/95 dark:bg-[#071340]/95 backdrop-blur-2xl border-b border-gray-200 dark:border-white/10');
  assert(
    navbarScrolled && navbarMobile,
    'T-12',
    'Navbar scrolled header and mobile menu overlay use unified theme background and border tokens (T-12)',
    'Navbar missing unified theme tokens'
  );

  // T-13: Course detail & Program list badge contrast
  const courseDetailPath = path.join(srcDir, 'components/programs/CourseDetailView.tsx');
  const courseDetailContent = fs.readFileSync(courseDetailPath, 'utf8');
  const courseBadgeAdaptive = courseDetailContent.includes('bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400');
  assert(
    courseBadgeAdaptive,
    'T-13',
    'CourseDetailView header badge has crisp contrast across light and dark modes (T-13)',
    'CourseDetailView badge missing adaptive color tokens'
  );

  // T-14: Global CSS theme variables and overflow containment
  const globalsCssPath = path.join(srcDir, 'app/globals.css');
  const globalsCss = fs.readFileSync(globalsCssPath, 'utf8');

  const customVariantDark = globalsCss.includes('@custom-variant dark (&:is(.dark, .dark *));');
  const rootVariables = globalsCss.includes(':root {') && globalsCss.includes('--background: oklch(1 0 0);');
  const darkVariables = globalsCss.includes('.dark {') && globalsCss.includes('--background: #071340;');
  const overflowContainment = globalsCss.includes('html, body {') && globalsCss.includes('max-width: 100%;') && globalsCss.includes('overflow-x: hidden;');

  assert(
    customVariantDark,
    'T-14',
    'globals.css defines @custom-variant dark for Tailwind v4 compliance (T-14)',
    'Missing @custom-variant dark in globals.css'
  );

  assert(
    rootVariables && darkVariables,
    'T-14',
    'globals.css defines complete light (:root) and dark (.dark) semantic CSS custom properties (T-14)',
    'Missing or incomplete :root or .dark variables in globals.css'
  );

  assert(
    overflowContainment,
    'T-14',
    'globals.css sets html, body { max-width: 100%; overflow-x: hidden; } base layer containment (T-14)',
    'Missing overflow-x containment on html, body'
  );

  // =========================================================================
  // DIMENSION 6: NEXT.JS PRODUCTION BUILD & 33 STATIC SSG COURSE ROUTES
  // =========================================================================
  console.log('\n▶ DIMENSION 6: Next.js Production Build & 33 Static SSG Course Routes');

  let buildOutput = '';
  let buildPassed = false;
  try {
    buildOutput = execSync('npm run build', {
      cwd: path.resolve(__dirname, '..'),
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    buildPassed = true;
  } catch (err: any) {
    buildOutput = (err.stdout || '') + '\n' + (err.stderr || '') + '\n' + (err.message || '');
    buildPassed = false;
  }

  assert(
    buildPassed,
    'Build Verification',
    'npm run build exits with code 0 (Compiled successfully)',
    `Build failed with output:\n${buildOutput.slice(0, 500)}`
  );

  // Verify all 33 static course slugs are generated in build output or .next directory
  const serverProgramsDir = path.resolve(__dirname, '../.next/server/app/programs');
  let missingStaticSlugs: string[] = [];
  COURSES_DATA.forEach(c => {
    const htmlFile = path.join(serverProgramsDir, `${c.slug}.html`);
    const exists = fs.existsSync(htmlFile);
    if (!exists) {
      missingStaticSlugs.push(c.slug);
    }
  });

  assert(
    missingStaticSlugs.length === 0,
    'SSG Course Routes',
    `All 33 static course routes are generated on disk in .next (${33 - missingStaticSlugs.length}/33 verified)`,
    `Missing static routes: ${missingStaticSlugs.join(', ')}`
  );

  // =========================================================================
  // FINAL VERDICT & SUMMARY
  // =========================================================================
  console.log('\n================================================================');
  const total = results.length;
  const passed = results.filter(r => r.passed).length;
  const failed = results.filter(r => !r.passed).length;

  console.log(`STRESS TEST SUMMARY: ${passed}/${total} PASSED, ${failed} FAILED`);
  console.log('================================================================\n');

  if (failed > 0) {
    console.error('❌ VERDICT: REQUEST_CHANGES');
    process.exit(1);
  } else {
    console.log('✅ VERDICT: APPROVE');
  }
}

runThemeAdversarialChallenge().catch(err => {
  console.error('Fatal challenge execution error:', err);
  process.exit(1);
});
