import * as fs from 'fs';
import * as path from 'path';

interface AuditCheck {
  id: string;
  name: string;
  file: string;
  passed: boolean;
  details: string;
}

const checks: AuditCheck[] = [];

function check(id: string, name: string, file: string, condition: boolean, details: string) {
  checks.push({ id, name, file, passed: condition, details });
  if (condition) {
    console.log(`[PASS] ${id}: ${name}`);
  } else {
    console.error(`[FAIL] ${id}: ${name} -> ${details}`);
  }
}

const root = path.resolve(__dirname, '../..');

// Read source files
const teamSection = fs.readFileSync(path.join(root, 'src/components/sections/TeamSection.tsx'), 'utf8');
const navPortal = fs.readFileSync(path.join(root, 'src/components/sections/NavigationPortalView.tsx'), 'utf8');
const footer = fs.readFileSync(path.join(root, 'src/components/layout/Footer.tsx'), 'utf8');
const hero = fs.readFileSync(path.join(root, 'src/components/sections/HeroSection.tsx'), 'utf8');
const applyClient = fs.readFileSync(path.join(root, 'src/app/apply/ApplyClient.tsx'), 'utf8');
const projects = fs.readFileSync(path.join(root, 'src/components/sections/ProjectsSection.tsx'), 'utf8');
const testimonials = fs.readFileSync(path.join(root, 'src/components/sections/TestimonialsSection.tsx'), 'utf8');
const faq = fs.readFileSync(path.join(root, 'src/components/sections/FAQSection.tsx'), 'utf8');
const navbar = fs.readFileSync(path.join(root, 'src/components/layout/Navbar.tsx'), 'utf8');
const globalsCss = fs.readFileSync(path.join(root, 'src/app/globals.css'), 'utf8');

// T-1: SeniorCard Name Invisibility in Light Mode
check(
  'T-1',
  'SeniorCard name has dark/light adaptive text color',
  'src/components/sections/TeamSection.tsx',
  teamSection.includes('font-bold text-gray-900 dark:text-white mb-1') &&
  !teamSection.includes('font-bold text-white mb-1'),
  'SeniorCard heading must use text-gray-900 dark:text-white'
);

// T-2: Forced dark navy background on /about
check(
  'T-2',
  'NavigationPortalView /about has dynamic light/dark gradient mesh',
  'src/components/sections/NavigationPortalView.tsx',
  navPortal.includes('bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-[#0B1F5E] dark:to-[#071340]') &&
  !navPortal.includes('bg-[#0B1F5E] dark:bg-[#071340] text-white flex flex-col'),
  'NavigationPortalView must not force fixed dark navy background in light mode'
);

// T-3: Conflicting & duplicate dark classes in TeamSection.tsx
check(
  'T-3',
  'TeamSection has no duplicate dark:from or dark:bg tokens',
  'src/components/sections/TeamSection.tsx',
  !teamSection.includes('dark:from-white dark:from-[#071340]') &&
  !teamSection.includes('dark:bg-gray-200 dark:bg-white/10'),
  'Duplicate conflicting dark classes must be eliminated'
);

// T-4: Duplicate dark borders and text classes in Footer.tsx
check(
  'T-4',
  'Footer has no duplicate dark border/text classes and white submit button text',
  'src/components/layout/Footer.tsx',
  !footer.includes('dark:text-gray-900 dark:text-white') &&
  !footer.includes('dark:border-white/10 dark:border-blue-500/20') &&
  footer.includes('bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white'),
  'Footer classes must be deduplicated and submit button text must be white'
);

// T-5: Footer social icons contrast
check(
  'T-5',
  'Footer social icons have strong contrast in light and dark mode',
  'src/components/layout/Footer.tsx',
  footer.includes('bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10'),
  'Social icon circles must have visible light mode background and border'
);

// T-6: HeroSection scroll indicator contrast
check(
  'T-6',
  'HeroSection scroll indicator has adaptive light/dark contrast',
  'src/components/sections/HeroSection.tsx',
  hero.includes('text-gray-500 dark:text-white/50'),
  'Scroll indicator must have visible gray-500 in light mode'
);

// T-7: Apply form select option contrast
check(
  'T-7',
  'ApplyClient select options have explicit background and text classes',
  'src/app/apply/ApplyClient.tsx',
  applyClient.includes('className="bg-white dark:bg-[#0B1F5E] text-gray-900 dark:text-white" value="Mr."') &&
  applyClient.includes('className="bg-white dark:bg-[#0B1F5E] text-gray-900 dark:text-white" value="Male"'),
  'Select options must specify explicit bg and text classes for cross-browser dark rendering'
);

// T-8: Apply form disclaimer text contrast
check(
  'T-8',
  'ApplyClient disclaimer text includes dark:text-gray-400',
  'src/app/apply/ApplyClient.tsx',
  applyClient.includes('text-xs text-gray-500 dark:text-gray-400 text-center pt-4'),
  'Disclaimer text must specify dark:text-gray-400'
);

// T-9: ProjectsSection card border definition
check(
  'T-9',
  'ProjectsSection cards have explicit light mode border definition',
  'src/components/sections/ProjectsSection.tsx',
  projects.includes('border-gray-200/80 dark:border-white/10'),
  'Project cards must define border-gray-200/80 in light mode'
);

// T-10: TestimonialsSection pause button contrast
check(
  'T-10',
  'Testimonials pause button has high-contrast adaptive classes',
  'src/components/sections/TestimonialsSection.tsx',
  testimonials.includes('text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'),
  'Pause button must have accessible contrast and hover transition'
);

// T-11: FAQ accordion styling
check(
  'T-11',
  'FAQSection accordion has adaptive theme contrast and borders',
  'src/components/sections/FAQSection.tsx',
  faq.includes('border-gray-100 dark:border-white/10') &&
  faq.includes('text-gray-800 dark:text-gray-100'),
  'FAQ accordion must provide high-contrast text and borders across themes'
);

// T-12: Navbar scrolled backdrop and mobile menu tokens
check(
  'T-12',
  'Navbar scrolled background and mobile drawer use unified theme tokens',
  'src/components/layout/Navbar.tsx',
  navbar.includes('dark:bg-[#071340]/85 backdrop-blur-xl border-b border-gray-200 dark:border-white/10') &&
  navbar.includes('dark:bg-[#071340]/95 backdrop-blur-2xl border-b border-gray-200 dark:border-white/10'),
  'Navbar must use unified dark backdrop tokens'
);

// T-13: Global custom-variant dark and viewport containment
check(
  'T-13',
  'globals.css defines @custom-variant dark and body overflow containment',
  'src/app/globals.css',
  globalsCss.includes('@custom-variant dark (&:is(.dark, .dark *));') &&
  globalsCss.includes('max-width: 100%;') &&
  globalsCss.includes('overflow-x: hidden;'),
  'globals.css must define custom-variant dark and max-width / overflow-x containment'
);

// Summary
console.log('\n====================================================');
const passed = checks.filter(c => c.passed).length;
const failed = checks.filter(c => !c.passed).length;
console.log(`AUDIT RESULTS: ${passed}/${checks.length} CHECKS PASSED, ${failed} FAILED`);
console.log('====================================================\n');

if (failed > 0) {
  process.exit(1);
}
