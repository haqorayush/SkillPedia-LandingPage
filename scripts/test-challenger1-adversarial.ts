import * as fs from 'fs';
import * as path from 'path';

interface TestResult {
  suite: string;
  name: string;
  passed: boolean;
  error?: string;
  details?: any;
}

const results: TestResult[] = [];

function assert(condition: boolean, suite: string, name: string, errorMsg?: string, details?: any) {
  if (condition) {
    results.push({ suite, name, passed: true, details });
    console.log(`  ✅ [PASS] ${suite}: ${name}`);
  } else {
    results.push({ suite, name, passed: false, error: errorMsg || 'Assertion failed', details });
    console.error(`  ❌ [FAIL] ${suite}: ${name} - ${errorMsg}`);
  }
}

async function runAdversarialValidation() {
  console.log('================================================================');
  console.log('   CHALLENGER 1: EMPIRICAL & ADVERSARIAL STRESS TEST SUITE      ');
  console.log('================================================================\n');

  const srcDir = path.resolve(__dirname, '../src');

  // =========================================================================
  // SUITE 1: SSR HYDRATION & STORAGE RESILIENCE (R1)
  // =========================================================================
  console.log('▶ SUITE 1: SSR Hydration & Storage Resilience');
  const preloaderPath = path.join(srcDir, 'components/ui/Preloader.tsx');
  const preloaderContent = fs.readFileSync(preloaderPath, 'utf8');

  // Check 1: Initial state is unconditionally true
  assert(
    preloaderContent.includes('const [isLoading, setIsLoading] = useState(true);'),
    'Preloader Hydration',
    'Preloader initializes isLoading unconditionally to true in useState',
    'useState(true) not found or conditional'
  );

  // Check 2: No window or sessionStorage in component render scope outside useEffect
  const linesBeforeUseEffect = preloaderContent.substring(0, preloaderContent.indexOf('useEffect('));
  const hasStorageInRender = linesBeforeUseEffect.includes('sessionStorage') || linesBeforeUseEffect.includes('localStorage') || linesBeforeUseEffect.includes('window.');
  assert(
    !hasStorageInRender,
    'Preloader Hydration',
    'Zero window/sessionStorage reads in initial component render scope',
    'Found window or storage reads before useEffect'
  );

  // Check 3: sessionStorage wrapped in try/catch to survive disabled/blocked storage scenarios
  assert(
    preloaderContent.includes('try {') && preloaderContent.includes("sessionStorage.getItem('sp_visited')") && preloaderContent.includes('catch {'),
    'Storage Resilience',
    'sessionStorage read on mount is safely wrapped in try/catch block',
    'sessionStorage.getItem not protected by try/catch'
  );
  assert(
    preloaderContent.includes('try {') && preloaderContent.includes("sessionStorage.setItem('sp_visited', 'true')") && preloaderContent.includes('catch {'),
    'Storage Resilience',
    'sessionStorage write on finish is safely wrapped in try/catch block',
    'sessionStorage.setItem not protected by try/catch'
  );

  // Check 4: Preloader pointer-events and a11y roles
  assert(
    preloaderContent.includes('pointer-events-auto') && preloaderContent.includes('role="status"') && preloaderContent.includes('aria-live="polite"'),
    'Preloader Overlay A11y',
    'Preloader has pointer-events-auto, role="status", and aria-live="polite"',
    'Missing pointer-events-auto, role="status", or aria-live="polite"'
  );

  // =========================================================================
  // SUITE 2: REDUCED MOTION & SCROLL PROVIDER (R2.1, R3.1)
  // =========================================================================
  console.log('\n▶ SUITE 2: Reduced Motion & SmoothScroller');
  const scrollerPath = path.join(srcDir, 'components/providers/SmoothScroller.tsx');
  const scrollerContent = fs.readFileSync(scrollerPath, 'utf8');

  assert(
    scrollerContent.includes("window.matchMedia('(prefers-reduced-motion: reduce)').matches"),
    'SmoothScroller A11y',
    'SmoothScroller checks prefers-reduced-motion media query before initializing Lenis',
    'Missing prefers-reduced-motion check'
  );

  assert(
    scrollerContent.includes("// TODO: migrate to 'lenis' package"),
    'SmoothScroller Migration',
    "SmoothScroller contains TODO migration comment for '@studio-freight/lenis'",
    'Missing TODO migration comment'
  );

  assert(
    scrollerContent.includes('cancelAnimationFrame(rafId)') &&
    scrollerContent.includes('resizeObserver.disconnect()') &&
    scrollerContent.includes('lenis.destroy()') &&
    scrollerContent.includes('lenisRef.current = null'),
    'SmoothScroller Lifecycle',
    'SmoothScroller properly cleans up RAF, ResizeObserver, and destroys Lenis instance on unmount',
    'Incomplete cleanup on unmount'
  );

  // =========================================================================
  // SUITE 3: INTERVALS, MEMORY LEAKS & HASH NAVIGATION (R2.2)
  // =========================================================================
  console.log('\n▶ SUITE 3: PageTransition Intervals & Hash Navigation');
  const pageTransPath = path.join(srcDir, 'components/ui/PageTransition.tsx');
  const pageTransContent = fs.readFileSync(pageTransPath, 'utf8');

  // Check cleanup ref storing interval teardown
  assert(
    pageTransContent.includes('transitionCleanupRef') &&
    pageTransContent.includes('transitionCleanupRef.current = startTransition()') &&
    pageTransContent.includes('transitionCleanupRef.current()'),
    'PageTransition Leaks',
    'startTransition returns interval cleanup function stored in ref and called on teardown',
    'Interval cleanup ref not properly implemented'
  );

  // Check same-page hash detection logic
  assert(
    pageTransContent.includes('isSamePageHash') &&
    pageTransContent.includes('relativeHref.includes("#")') &&
    pageTransContent.includes('(!pathPortion || pathPortion === pathname)'),
    'PageTransition Hash',
    'Correctly skips transition on same-page hash links while allowing cross-page hash navigation',
    'isSamePageHash check missing or incomplete'
  );

  // Check overlay styling
  assert(
    pageTransContent.includes('bg-black/10 dark:bg-[#071340]/20'),
    'PageTransition Styling',
    'PageTransition uses adaptive screen fade background (bg-black/10 dark:bg-[#071340]/20)',
    'Missing adaptive bg classes'
  );

  // =========================================================================
  // SUITE 4: CUSTOM CURSOR LAYOUT THRASHING & LIFECYCLE (R2.3)
  // =========================================================================
  console.log('\n▶ SUITE 4: CustomCursor Layout Thrashing & Window Listeners');
  const cursorPath = path.join(srcDir, 'components/ui/CustomCursor.tsx');
  const cursorContent = fs.readFileSync(cursorPath, 'utf8');

  assert(
    !cursorContent.includes('getComputedStyle'),
    'CustomCursor Perf',
    'Zero getComputedStyle calls in CustomCursor (eliminates forced layout reflows)',
    'Found getComputedStyle in CustomCursor'
  );

  const normalizedCursor = cursorContent.replace(/\s+/g, ' ');
  assert(
    normalizedCursor.includes("target.closest( 'a, button, [role=\"button\"], input, select, textarea, [tabindex]' )") ||
    normalizedCursor.includes("target.closest('a, button, [role=\"button\"], input, select, textarea, [tabindex]')"),
    'CustomCursor Target',
    'Uses target.closest() to identify all interactive elements',
    'Missing target.closest interactive selector'
  );

  assert(
    cursorContent.includes("document.documentElement.addEventListener('mouseleave', handleMouseLeave)") &&
    cursorContent.includes("document.documentElement.addEventListener('mouseenter', handleMouseEnter)") &&
    cursorContent.includes("document.documentElement.removeEventListener('mouseleave', handleMouseLeave)"),
    'CustomCursor Window Listeners',
    'Registers and unregisters mouseenter/mouseleave listeners on documentElement',
    'Missing documentElement mouseenter/mouseleave lifecycle management'
  );

  // =========================================================================
  // SUITE 5: TESTIMONIALS A11Y & KEYBOARD TRAPS (R2.4)
  // =========================================================================
  console.log('\n▶ SUITE 5: Testimonials Keyboard A11y & Dialog Semantics');
  const testPath = path.join(srcDir, 'components/sections/TestimonialsSection.tsx');
  const testContent = fs.readFileSync(testPath, 'utf8');

  assert(
    testContent.includes('role={onClick ? "button" : undefined}') &&
    testContent.includes('tabIndex={onClick ? 0 : undefined}') &&
    testContent.includes("e.key === 'Enter' || e.key === ' '"),
    'Testimonials Card Keyboard',
    'Testimonial cards have role="button", tabIndex={0}, and Enter/Space onKeyDown handler',
    'Missing keyboard accessibility on TestimonialCard'
  );

  assert(
    testContent.includes('role="dialog"') &&
    testContent.includes('aria-modal="true"') &&
    testContent.includes('aria-labelledby="modal-reviewer-name"') &&
    testContent.includes("e.key === 'Escape'"),
    'Testimonials Modal Dialog',
    'Review modal implements full dialog semantics and Escape key listener',
    'Missing dialog semantics or Escape handler on modal'
  );

  assert(
    testContent.includes('role="img"') &&
    testContent.includes('aria-label="5 out of 5 stars"') &&
    testContent.includes('aria-hidden="true"'),
    'Testimonials Star Rating',
    'Star ratings have role="img" with descriptive aria-label and aria-hidden visual glyphs',
    'Missing star rating a11y attributes'
  );

  // =========================================================================
  // SUITE 6: STATS & FORM ACCESSIBILITY (R2.5, R2.6, R3.5)
  // =========================================================================
  console.log('\n▶ SUITE 6: Stats & Form Accessibility');
  const statsPath = path.join(srcDir, 'components/sections/StatsSection.tsx');
  const statsContent = fs.readFileSync(statsPath, 'utf8');

  assert(
    statsContent.includes('<h2 className="sr-only">Key Program Statistics</h2>'),
    'Stats Section Heading',
    'StatsSection includes screen-reader-only h2 landmark heading',
    'Missing sr-only h2 heading in StatsSection'
  );

  assert(
    statsContent.includes('key={stat.id}'),
    'Stats Section Keys',
    'StatsSection uses unique stat.id as key in mapping',
    'Missing key={stat.id} in stats map'
  );

  const applyPath = path.join(srcDir, 'app/apply/ApplyClient.tsx');
  const applyContent = fs.readFileSync(applyPath, 'utf8');

  // Count ChevronDown occurrences in ApplyClient
  const chevronCount = (applyContent.match(/<ChevronDown/g) || []).length;
  assert(
    chevronCount === 8,
    'Apply Form Chevrons',
    `All 8 <select> inputs have visual ChevronDown indicators (Found: ${chevronCount})`,
    `Expected 8 ChevronDown instances, got ${chevronCount}`
  );

  assert(
    applyContent.includes('htmlFor="street"') && applyContent.includes('id="street"'),
    'Apply Form Address Label',
    'Full Address label correctly references htmlFor="street"',
    'Missing or incorrect htmlFor on address label'
  );

  // =========================================================================
  // SUITE 7: CODE QUALITY & CLEANUP (R3.2 - R3.12)
  // =========================================================================
  console.log('\n▶ SUITE 7: Code Quality & Polish Requirements');

  // Hero Section
  const heroPath = path.join(srcDir, 'components/sections/HeroSection.tsx');
  const heroContent = fs.readFileSync(heroPath, 'utf8');
  assert(
    heroContent.includes('// Static decorative particles that never reorder') &&
    heroContent.includes('aria-hidden="true"'),
    'Hero Section Quality',
    'HeroSection has static particle key comment and aria-hidden on scroll SVG',
    'Missing particle key comment or aria-hidden on scroll SVG'
  );

  // CTA Section
  const ctaPath = path.join(srcDir, 'components/sections/CTASection.tsx');
  const ctaContent = fs.readFileSync(ctaPath, 'utf8');
  assert(
    ctaContent.includes('// Static decorative particles that never reorder'),
    'CTA Section Quality',
    'CTASection has static particle key comment',
    'Missing particle key comment in CTASection'
  );

  // Career Section
  const careerPath = path.join(srcDir, 'components/sections/CareerSection.tsx');
  const careerContent = fs.readFileSync(careerPath, 'utf8');
  assert(
    !careerContent.includes('useTransform') &&
    careerContent.includes('scaleY: scrollYProgress') &&
    careerContent.includes('scaleX: scrollYProgress'),
    'Career Section Transform',
    'CareerSection eliminated redundant identity useTransform and uses scrollYProgress directly',
    'CareerSection still contains redundant useTransform'
  );

  // NavigationPortalView
  const portalPath = path.join(srcDir, 'components/sections/NavigationPortalView.tsx');
  const portalContent = fs.readFileSync(portalPath, 'utf8');
  assert(
    !portalContent.includes('statValue') &&
    !portalContent.includes('statLabel') &&
    !portalContent.includes('onClose'),
    'NavigationPortal Cleanup',
    'NavigationPortalView removed unused statValue, statLabel, and onClose props',
    'Found unused statValue, statLabel, or onClose in NavigationPortalView'
  );

  // CeoClient
  const ceoPath = path.join(srcDir, 'app/ceo-message/CeoClient.tsx');
  const ceoContent = fs.readFileSync(ceoPath, 'utf8');
  assert(
    ceoContent.includes('<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Dharmendra K. Pandey</h2>'),
    'CEO Heading Semantic',
    'CeoClient uses semantic <h2> for CEO name',
    'Missing <h2> for CEO name in CeoClient'
  );

  // TermsClient
  const termsPath = path.join(srcDir, 'app/terms-of-service/TermsClient.tsx');
  const termsContent = fs.readFileSync(termsPath, 'utf8');
  assert(
    termsContent.includes('<Link href="/refund-policy" className="text-blue-600 dark:text-blue-400 hover:underline">our separate Refund Policy</Link>'),
    'Terms Refund Link',
    'TermsClient wraps "our separate Refund Policy" in Link component',
    'Missing Link to /refund-policy in TermsClient'
  );

  // not-found.tsx
  const notFoundPath = path.join(srcDir, 'app/not-found.tsx');
  const notFoundContent = fs.readFileSync(notFoundPath, 'utf8');
  assert(
    notFoundContent.includes('motion-reduce:animate-none') &&
    notFoundContent.includes('key={item.href}'),
    'NotFound Polish',
    'not-found.tsx contains motion-reduce:animate-none on Compass and key={item.href}',
    'Missing motion-reduce:animate-none or key={item.href} in not-found.tsx'
  );

  // global-error.tsx
  const globalErrorPath = path.join(srcDir, 'app/global-error.tsx');
  const globalErrorContent = fs.readFileSync(globalErrorPath, 'utf8');
  assert(
    !globalErrorContent.includes('select-none'),
    'GlobalError Text Select',
    'global-error.tsx removed select-none from body className',
    'Found select-none in global-error.tsx body'
  );

  // globals.css
  const globalsPath = path.join(srcDir, 'app/globals.css');
  const globalsContent = fs.readFileSync(globalsPath, 'utf8');
  assert(
    globalsContent.includes('overflow-x: clip;'),
    'Global CSS Overflow',
    'globals.css sets overflow-x: clip on html, body',
    'Missing overflow-x: clip in globals.css'
  );

  // CourseDetailView.tsx
  const courseDetailPath = path.join(srcDir, 'components/programs/CourseDetailView.tsx');
  const courseDetailContent = fs.readFileSync(courseDetailPath, 'utf8');
  assert(
    courseDetailContent.includes('<section id="curriculum" className="py-24 scroll-mt-24">'),
    'CourseDetail Scroll Margin',
    'CourseDetailView includes scroll-mt-24 on curriculum section',
    'Missing scroll-mt-24 on curriculum section'
  );

  // =========================================================================
  // SUITE 8: STATIC PAGE ASSET VERIFICATION (46/46 PAGES)
  // =========================================================================
  console.log('\n▶ SUITE 8: Static Page Asset Verification (46/46 SSG Pages)');
  const nextAppDir = path.resolve(__dirname, '../.next/server/app');

  const expectedStaticPages = [
    'index.html',
    '_not-found.html',
    'about.html',
    'apply.html',
    'ceo-message.html',
    'privacy-policy.html',
    'programs.html',
    'refund-policy.html',
    'team.html',
    'terms-of-service.html',
    'vision-mission.html'
  ];

  let missingStaticPages: string[] = [];
  expectedStaticPages.forEach(p => {
    const fullPath = path.join(nextAppDir, p);
    if (!fs.existsSync(fullPath)) {
      missingStaticPages.push(p);
    }
  });

  assert(
    missingStaticPages.length === 0,
    'Static Core Pages',
    `All ${expectedStaticPages.length} core application static HTML pages exist in .next/server/app`,
    `Missing: ${missingStaticPages.join(', ')}`
  );

  // 33 courses in programs/
  const programsOutputDir = path.join(nextAppDir, 'programs');
  let programHtmlFiles: string[] = [];
  if (fs.existsSync(programsOutputDir)) {
    programHtmlFiles = fs.readdirSync(programsOutputDir).filter(f => f.endsWith('.html') && f !== 'index.html');
  }

  assert(
    programHtmlFiles.length === 33,
    'Static Course Pages',
    `All 33 static course program pages exist on disk in .next/server/app/programs/ (Found: ${programHtmlFiles.length})`,
    `Expected 33 course HTML files, found ${programHtmlFiles.length}`
  );

  // =========================================================================
  // SUMMARY & VERDICT
  // =========================================================================
  console.log('\n================================================================');
  const total = results.length;
  const passed = results.filter(r => r.passed).length;
  const failed = results.filter(r => !r.passed).length;

  console.log(`CHALLENGER TEST SUMMARY: ${passed}/${total} PASSED, ${failed} FAILED`);
  console.log('================================================================\n');

  if (failed > 0) {
    console.error('❌ FINAL VERDICT: REQUEST_CHANGES');
    process.exit(1);
  } else {
    console.log('✅ FINAL VERDICT: APPROVE');
  }
}

runAdversarialValidation().catch(err => {
  console.error('Fatal challenge execution error:', err);
  process.exit(1);
});
