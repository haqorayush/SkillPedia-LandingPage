import {
  COURSES_DATA,
  COURSES_MAP,
  getAllCourses,
  getCourseBySlug,
  getAllCourseSlugs,
  getCoursesByCategory,
  type CourseData,
} from '../src/lib/coursesData';
import { generateStaticParams } from '../src/app/programs/[slug]/page';
import * as fs from 'fs';
import * as path from 'path';

interface TestResult {
  name: string;
  passed: boolean;
  error?: string;
  details?: any;
}

const results: TestResult[] = [];

function assert(condition: boolean, name: string, errorMsg?: string, details?: any) {
  if (condition) {
    results.push({ name, passed: true, details });
    console.log(`✅ PASS: ${name}`);
  } else {
    results.push({ name, passed: false, error: errorMsg || 'Assertion failed', details });
    console.error(`❌ FAIL: ${name} - ${errorMsg}`);
  }
}

async function runTestSuite() {
  console.log('====================================================');
  console.log('  MILESTONE 1: EMPIRICAL CHALLENGE & VERIFICATION  ');
  console.log('====================================================\n');

  // TEST 1: Course Count & Array Integrity
  console.log('--- 1. Course Count & Array Integrity ---');
  assert(COURSES_DATA.length === 33, 'COURSES_DATA has exactly 33 courses', `Expected 33, got ${COURSES_DATA.length}`);
  assert(getAllCourses().length === 33, 'getAllCourses() returns 33 courses', `Expected 33, got ${getAllCourses().length}`);
  
  const allSlugs = getAllCourseSlugs();
  assert(allSlugs.length === 33, 'getAllCourseSlugs() returns 33 slugs', `Expected 33, got ${allSlugs.length}`);
  
  const uniqueSlugs = new Set(allSlugs);
  assert(uniqueSlugs.size === 33, 'All 33 slugs are unique (zero duplicates)', `Unique slug count: ${uniqueSlugs.size}`);

  // TEST 2: Slug Format & Keys
  console.log('\n--- 2. Slug Validation & Keys ---');
  const slugRegex = /^[a-z0-9-]+$/;
  let allSlugsValid = true;
  const invalidSlugs: string[] = [];
  for (const slug of allSlugs) {
    if (!slugRegex.test(slug)) {
      allSlugsValid = false;
      invalidSlugs.push(slug);
    }
  }
  assert(allSlugsValid, 'All slugs match kebab-case URL format', `Invalid slugs: ${invalidSlugs.join(', ')}`);

  // TEST 3: Schema & Content Completeness for Each Course
  console.log('\n--- 3. Schema & Content Completeness for all 33 Courses ---');
  let schemaErrors: string[] = [];
  const expectedCategories = ['development', 'testing', 'communication'];

  COURSES_DATA.forEach((course, index) => {
    const prefix = `Course #${index + 1} [${course.slug}]`;

    if (!course.slug || typeof course.slug !== 'string') schemaErrors.push(`${prefix}: invalid slug`);
    if (!course.title || typeof course.title !== 'string' || course.title.trim().length === 0) schemaErrors.push(`${prefix}: empty title`);
    if (!course.tagline || typeof course.tagline !== 'string') schemaErrors.push(`${prefix}: empty tagline`);
    if (!course.category || !expectedCategories.includes(course.category.toLowerCase())) {
      schemaErrors.push(`${prefix}: invalid category "${course.category}"`);
    }
    if (!course.level || typeof course.level !== 'string') schemaErrors.push(`${prefix}: empty level`);
    if (!course.duration || typeof course.duration !== 'string') schemaErrors.push(`${prefix}: empty duration`);
    if (!course.mode || typeof course.mode !== 'string') schemaErrors.push(`${prefix}: empty mode`);
    if (!course.price || typeof course.price !== 'string') schemaErrors.push(`${prefix}: empty price`);
    if (typeof course.rating !== 'number' || course.rating < 1 || course.rating > 5) schemaErrors.push(`${prefix}: invalid rating "${course.rating}"`);
    if (!course.enrolledStudents || typeof course.enrolledStudents !== 'string') schemaErrors.push(`${prefix}: empty enrolledStudents`);
    
    // Overview check
    if (!course.overview || typeof course.overview !== 'string' || course.overview.trim().length < 10) {
      schemaErrors.push(`${prefix}: overview missing or too short`);
    }

    // Stats check (>= 3 items)
    if (!Array.isArray(course.stats) || course.stats.length < 3) {
      schemaErrors.push(`${prefix}: stats length < 3 (got ${course.stats?.length})`);
    } else {
      course.stats.forEach((s, si) => {
        if (!s.label || !s.value || !s.iconName) {
          schemaErrors.push(`${prefix}: stat #${si + 1} missing label/value/iconName`);
        }
      });
    }

    // Tools check (>= 5 items)
    if (!Array.isArray(course.tools) || course.tools.length < 5) {
      schemaErrors.push(`${prefix}: tools length < 5 (got ${course.tools?.length})`);
    } else {
      course.tools.forEach((t, ti) => {
        if (!t.name || !t.iconName || !t.color) {
          schemaErrors.push(`${prefix}: tool #${ti + 1} missing name/iconName/color`);
        }
      });
    }

    // Curriculum check (>= 3 modules)
    if (!Array.isArray(course.curriculum) || course.curriculum.length < 3) {
      schemaErrors.push(`${prefix}: curriculum modules length < 3 (got ${course.curriculum?.length})`);
    } else {
      course.curriculum.forEach((m, mi) => {
        if (!m.id || !m.title || !Array.isArray(m.topics) || m.topics.length < 1) {
          schemaErrors.push(`${prefix}: curriculum module #${mi + 1} invalid id/title/topics`);
        }
      });
    }

    // Instructors check (>= 1 instructor)
    if (!Array.isArray(course.instructors) || course.instructors.length < 1) {
      schemaErrors.push(`${prefix}: instructors length < 1`);
    } else {
      course.instructors.forEach((inst, ii) => {
        if (!inst.name || !inst.role || !inst.image || !inst.bio) {
          schemaErrors.push(`${prefix}: instructor #${ii + 1} missing name/role/image/bio`);
        }
      });
    }

    // Prerequisites check
    if (!Array.isArray(course.prerequisites) || course.prerequisites.length < 1) {
      schemaErrors.push(`${prefix}: prerequisites length < 1`);
    }

    // Outcomes check
    if (!Array.isArray(course.outcomes) || course.outcomes.length < 1) {
      schemaErrors.push(`${prefix}: outcomes length < 1`);
    }
  });

  assert(schemaErrors.length === 0, 'All 33 courses satisfy complete schema & content constraints', schemaErrors.join('; '));

  // TEST 4: Helper Functions Contract Tests
  console.log('\n--- 4. Helper Function Invariant & Adversarial Tests ---');

  // getCourseBySlug exact lookup
  let allFound = true;
  for (const slug of allSlugs) {
    const course = getCourseBySlug(slug);
    if (!course || course.slug !== slug) {
      allFound = false;
      break;
    }
  }
  assert(allFound, 'getCourseBySlug(slug) returns exact course object for all 33 slugs');

  // Non-existent slug returns undefined
  assert(getCourseBySlug('non-existent-slug') === undefined, 'getCourseBySlug("non-existent-slug") returns undefined');
  assert(getCourseBySlug('') === undefined, 'getCourseBySlug("") returns undefined');
  assert(getCourseBySlug('random-12345') === undefined, 'getCourseBySlug("random-12345") returns undefined');
  assert(getCourseBySlug('unknown-course-xyz') === undefined, 'getCourseBySlug("unknown-course-xyz") returns undefined');

  // Adversarial edge cases (prototype pollution & object property collision)
  assert(getCourseBySlug('__proto__') === undefined, 'getCourseBySlug("__proto__") returns undefined');
  assert(getCourseBySlug('constructor') === undefined, 'getCourseBySlug("constructor") returns undefined');
  assert(getCourseBySlug('toString') === undefined, 'getCourseBySlug("toString") returns undefined');
  assert(getCourseBySlug('valueOf') === undefined, 'getCourseBySlug("valueOf") returns undefined');

  // Category query tests
  const devCourses = getCoursesByCategory('development');
  const testCourses = getCoursesByCategory('testing');
  const commCourses = getCoursesByCategory('communication');
  const devCoursesUpper = getCoursesByCategory('Development');

  assert(devCourses.length > 0, 'getCoursesByCategory("development") returns non-empty list', `Count: ${devCourses.length}`);
  assert(testCourses.length > 0, 'getCoursesByCategory("testing") returns non-empty list', `Count: ${testCourses.length}`);
  assert(commCourses.length > 0, 'getCoursesByCategory("communication") returns non-empty list', `Count: ${commCourses.length}`);
  assert(devCourses.length === devCoursesUpper.length, 'getCoursesByCategory is case-insensitive');
  assert(
    devCourses.length + testCourses.length + commCourses.length === 33,
    'Sum of categories equals exactly 33 courses',
    `Dev: ${devCourses.length}, Test: ${testCourses.length}, Comm: ${commCourses.length}`
  );

  // TEST 5: generateStaticParams in [slug]/page.tsx
  console.log('\n--- 5. Dynamic Route generateStaticParams() Test ---');
  const staticParams = await generateStaticParams();
  assert(
    Array.isArray(staticParams) && staticParams.length === 33,
    'generateStaticParams() returns exactly 33 slug params',
    `Returned ${staticParams?.length} params`
  );
  const staticSlugs = staticParams.map((p) => p.slug);
  const staticSlugsSet = new Set(staticSlugs);
  assert(
    staticSlugsSet.size === 33 && allSlugs.every((s) => staticSlugsSet.has(s)),
    'generateStaticParams() covers 100% of all 33 course slugs with zero duplicates'
  );

  // TEST 6: Directory Audit of src/app/programs/
  console.log('\n--- 6. Directory Audit of src/app/programs/ ---');
  const programsDir = path.resolve(__dirname, '../src/app/programs');
  const entries = fs.readdirSync(programsDir, { withFileTypes: true });
  const dirNames = entries.filter((e) => e.isDirectory()).map((e) => e.name);
  const fileNames = entries.filter((e) => !e.isDirectory()).map((e) => e.name);

  assert(
    dirNames.length === 1 && dirNames[0] === '[slug]',
    'src/app/programs/ contains ONLY the [slug] dynamic directory',
    `Found directories: ${dirNames.join(', ')}`
  );
  assert(
    fileNames.includes('page.tsx') && fileNames.includes('ProgramsList.tsx'),
    'src/app/programs/ contains page.tsx and ProgramsList.tsx',
    `Found files: ${fileNames.join(', ')}`
  );

  // Print Summary
  console.log('\n====================================================');
  const passedCount = results.filter((r) => r.passed).length;
  const failedCount = results.filter((r) => !r.passed).length;
  console.log(`TEST SUMMARY: ${passedCount} PASSED, ${failedCount} FAILED (Total: ${results.length})`);
  console.log('====================================================\n');

  if (failedCount > 0) {
    process.exit(1);
  }
}

runTestSuite().catch((err) => {
  console.error('Unexpected test failure:', err);
  process.exit(1);
});
