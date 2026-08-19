import fs from 'fs';
import path from 'path';

interface TestResult {
  name: string;
  category: string;
  passed: boolean;
  details: string;
}

const results: TestResult[] = [];

function check(name: string, category: string, condition: boolean, details: string) {
  results.push({
    name,
    category,
    passed: condition,
    details,
  });
}

const ROOT = path.resolve(__dirname, '..');

// 1. Check globals.css
const globalsCssPath = path.join(ROOT, 'src/app/globals.css');
const globalsCss = fs.readFileSync(globalsCssPath, 'utf8');

check(
  'T-14.1: globals.css has @custom-variant dark',
  'T-14',
  globalsCss.includes('@custom-variant dark (&:is(.dark, .dark *));'),
  'Found @custom-variant dark (&:is(.dark, .dark *));'
);

check(
  'T-14.2: globals.css base layer has html/body overflow-x containment',
  'T-14',
  globalsCss.includes('max-width: 100%;') && globalsCss.includes('overflow-x: hidden;'),
  'Found overflow-x: hidden and max-width: 100% in base layer'
);

check(
  'T-14.3: globals.css defines .dark class tokens',
  'T-14',
  globalsCss.includes('.dark {') && globalsCss.includes('--background: #071340;'),
  'Found .dark theme tokens in globals.css'
);

// 2. Check TeamSection.tsx (T-1, T-3)
const teamSectionPath = path.join(ROOT, 'src/components/sections/TeamSection.tsx');
const teamSection = fs.readFileSync(teamSectionPath, 'utf8');

check(
  'T-1: SeniorCard member name has light/dark contrast',
  'T-1',
  teamSection.includes('font-bold text-gray-900 dark:text-white mb-1'),
  'SeniorCard uses text-gray-900 dark:text-white'
);

check(
  'T-3.1: TeamSection has no duplicate from-white and from-[#071340]',
  'T-3',
  !teamSection.includes('dark:from-white dark:from-[#071340]'),
  'Duplicate dark:from removed'
);

check(
  'T-3.2: TeamSection has no duplicate bg-gray-200 and bg-white/10',
  'T-3',
  !teamSection.includes('dark:bg-gray-200 dark:bg-white/10'),
  'Duplicate dark:bg removed'
);

// 3. Check NavigationPortalView.tsx (T-2)
const navPortalPath = path.join(ROOT, 'src/components/sections/NavigationPortalView.tsx');
const navPortal = fs.readFileSync(navPortalPath, 'utf8');

check(
  'T-2.1: NavigationPortalView has light mode gradient background',
  'T-2',
  navPortal.includes('bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-[#0B1F5E] dark:to-[#071340] text-gray-900 dark:text-white'),
  'Adaptive light/dark background found on /about'
);

check(
  'T-2.2: NavigationPortalView navigation text adapts to light/dark',
  'T-2',
  navPortal.includes('text-gray-600 hover:text-gray-900 dark:text-white/80 dark:hover:text-white'),
  'Nav text has distinct light and dark classes'
);

// 4. Check Footer.tsx (T-4, T-5)
const footerPath = path.join(ROOT, 'src/components/layout/Footer.tsx');
const footer = fs.readFileSync(footerPath, 'utf8');

check(
  'T-4.1: Footer newsletter input has clean single-border and text tokens',
  'T-4',
  footer.includes('bg-white dark:bg-[#0B1F5E]/80 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-white'),
  'Footer input has valid light/dark classes'
);

check(
  'T-4.2: Footer submit button has crisp white text',
  'T-4',
  footer.includes('bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white rounded-md px-4 text-sm font-medium'),
  'Footer submit button has text-white'
);

check(
  'T-4.3: Footer bottom border has clean single-border tokens',
  'T-4',
  footer.includes('border-t border-gray-200 dark:border-white/10'),
  'Footer bottom bar has clean border classes'
);

check(
  'T-5: Footer social icons have high contrast in light mode',
  'T-5',
  footer.includes('bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#FF7A00] dark:hover:bg-[#FF7A00] hover:text-white dark:hover:text-white'),
  'Footer social icons styled with gray-100 bg and border in light mode'
);

// 5. Check HeroSection.tsx (T-6)
const heroSectionPath = path.join(ROOT, 'src/components/sections/HeroSection.tsx');
const heroSection = fs.readFileSync(heroSectionPath, 'utf8');

check(
  'T-6: HeroSection scroll indicator has light mode contrast',
  'T-6',
  heroSection.includes('text-gray-500 dark:text-white/50'),
  'Scroll indicator uses text-gray-500 dark:text-white/50'
);

// 6. Check ApplyClient.tsx (T-7, T-8)
const applyClientPath = path.join(ROOT, 'src/app/apply/ApplyClient.tsx');
const applyClient = fs.readFileSync(applyClientPath, 'utf8');

const totalOptionTags = (applyClient.match(/<option/g) || []).length;
const styledOptionTags = (applyClient.match(/<option[^>]*className="[^"]*bg-white dark:bg-\[#0B1F5E\][^"]*"/g) || []).length;

check(
  'T-7: ApplyClient select options styled for dark/light mode',
  'T-7',
  totalOptionTags === styledOptionTags && totalOptionTags > 0,
  `100% of <option> elements (${styledOptionTags}/${totalOptionTags}) are explicitly styled with light and dark mode classes`
);

check(
  'T-8: ApplyClient disclaimer text has dark mode contrast',
  'T-8',
  applyClient.includes('text-xs text-gray-500 dark:text-gray-400 text-center pt-4'),
  'Disclaimer text has dark:text-gray-400'
);

// 7. Check ProjectsSection.tsx (T-9)
const projectsSectionPath = path.join(ROOT, 'src/components/sections/ProjectsSection.tsx');
const projectsSection = fs.readFileSync(projectsSectionPath, 'utf8');

check(
  'T-9: ProjectsSection card has explicit light mode border',
  'T-9',
  projectsSection.includes('border-gray-200/80 dark:border-white/10'),
  'Project card has border-gray-200/80'
);

// 8. Check TestimonialsSection.tsx (T-10)
const testimonialsSectionPath = path.join(ROOT, 'src/components/sections/TestimonialsSection.tsx');
const testimonialsSection = fs.readFileSync(testimonialsSectionPath, 'utf8');

check(
  'T-10: TestimonialsSection pause button has light/dark contrast',
  'T-10',
  testimonialsSection.includes('text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-white/10'),
  'Pause button contrast and theme borders verified'
);

// 9. Check FAQSection.tsx (T-11)
const faqSectionPath = path.join(ROOT, 'src/components/sections/FAQSection.tsx');
const faqSection = fs.readFileSync(faqSectionPath, 'utf8');

check(
  'T-11: FAQSection accordion trigger has high contrast styling',
  'T-11',
  faqSection.includes('text-gray-800 dark:text-gray-100 hover:text-[#3B82F6] dark:hover:text-blue-400') &&
  faqSection.includes('border-gray-100 dark:border-white/10'),
  'FAQSection verified'
);

// 10. Check Navbar.tsx (T-12)
const navbarPath = path.join(ROOT, 'src/components/layout/Navbar.tsx');
const navbar = fs.readFileSync(navbarPath, 'utf8');

check(
  'T-12.1: Navbar scrolled background uses design tokens',
  'T-12',
  navbar.includes('bg-white/85 dark:bg-[#071340]/85 backdrop-blur-xl border-b border-gray-200 dark:border-white/10'),
  'Navbar scrolled background verified'
);

check(
  'T-12.2: Navbar mobile drawer uses design tokens',
  'T-12',
  navbar.includes('bg-white/95 dark:bg-[#071340]/95 backdrop-blur-2xl border-b border-gray-200 dark:border-white/10'),
  'Navbar mobile drawer verified'
);

// 11. Check CourseDetailView.tsx & ProgramsList.tsx (T-13)
const courseDetailPath = path.join(ROOT, 'src/components/programs/CourseDetailView.tsx');
const courseDetail = fs.readFileSync(courseDetailPath, 'utf8');

const programsListPath = path.join(ROOT, 'src/app/programs/ProgramsList.tsx');
const programsList = fs.readFileSync(programsListPath, 'utf8');

check(
  'T-13.1: CourseDetailView has light/dark main background',
  'T-13',
  courseDetail.includes('bg-white dark:bg-[#071340]'),
  'CourseDetailView background verified'
);

check(
  'T-13.2: ProgramsList filter tabs and cards have theme tokens',
  'T-13',
  programsList.includes('bg-gray-100/80 dark:bg-white/5') &&
  programsList.includes('bg-white dark:bg-[#0B1F5E] rounded-3xl'),
  'ProgramsList theme tokens verified'
);

// 12. Check all 33 static courses exist and are valid
import { getAllCourseSlugs, getAllCourses } from '../src/lib/coursesData';
const slugs = getAllCourseSlugs();
const courses = getAllCourses();

check(
  'Course catalog count',
  'Courses',
  slugs.length === 33 && courses.length === 33,
  `Catalog contains ${slugs.length} courses`
);

let allSlugsValid = true;
let invalidSlugMessage = '';
for (const slug of slugs) {
  const course = courses.find(c => c.slug === slug);
  if (!course || !course.title || !course.category || !course.overview) {
    allSlugsValid = false;
    invalidSlugMessage = `Course ${slug} missing required fields`;
    break;
  }
}

check(
  'Course data integrity across all 33 courses',
  'Courses',
  allSlugsValid,
  allSlugsValid ? 'All 33 courses have complete data structures' : invalidSlugMessage
);

// Summary output
console.log('=== EMPIRICAL STRESS TEST RESULTS ===');
let passCount = 0;
let failCount = 0;

for (const res of results) {
  if (res.passed) {
    passCount++;
    console.log(`✅ [PASS] [${res.category}] ${res.name} — ${res.details}`);
  } else {
    failCount++;
    console.error(`❌ [FAIL] [${res.category}] ${res.name} — ${res.details}`);
  }
}

console.log(`\nTOTAL TESTS: ${results.length} | PASSED: ${passCount} | FAILED: ${failCount}`);

if (failCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
