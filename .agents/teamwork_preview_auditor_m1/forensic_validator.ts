import fs from 'fs';
import path from 'path';
import { COURSES_DATA, getAllCourseSlugs, getCourseBySlug, getAllCourses, getCoursesByCategory } from '../../src/lib/coursesData';

const projectRoot = path.resolve(__dirname, '../../');
console.log('Auditing coursesData.ts for Milestone 1...');

let totalErrors = 0;
let totalWarnings = 0;

// 1. Inspect icons in CourseDetailView.tsx
const courseDetailViewPath = path.join(projectRoot, 'src/components/programs/CourseDetailView.tsx');
const courseDetailViewContent = fs.readFileSync(courseDetailViewPath, 'utf8');
const iconMapStart = courseDetailViewContent.indexOf('const ICON_MAP');
const iconMapEnd = courseDetailViewContent.indexOf('};', iconMapStart);
const iconMapBlock = courseDetailViewContent.slice(iconMapStart, iconMapEnd);
const iconMatches = iconMapBlock.match(/\b[A-Z][a-zA-Z0-9]+\b/g) || [];
const recognizedIcons = new Set<string>(iconMatches);
// Remove type names like Record, ComponentType, React if captured
recognizedIcons.delete('Record');
recognizedIcons.delete('React');
recognizedIcons.delete('ComponentType');
console.log(`✅ Identified ${recognizedIcons.size} mapped Lucide icons in CourseDetailView.tsx`);

// 2. Check for genuine placeholder text and completeness across all 33 courses
const placeholderRegex = /\b(lorem\s*ipsum|todo|placeholder|tbd|asdf|dummy|foo\s*bar)\b/i;

let totalModules = 0;
let totalTopics = 0;
let totalTools = 0;
let totalInstructors = 0;
const usedIcons = new Set<string>();
const missingIcons = new Set<string>();

COURSES_DATA.forEach((course, idx) => {
  const prefix = `[Course #${idx + 1} ${course.slug}]`;
  
  if (!course.title || course.title.trim() === '') {
    console.error(`❌ ${prefix} Missing title`);
    totalErrors++;
  }
  if (!course.tagline || course.tagline.trim() === '') {
    console.error(`❌ ${prefix} Missing tagline`);
    totalErrors++;
  }
  if (!course.overview || course.overview.trim() === '') {
    console.error(`❌ ${prefix} Missing overview`);
    totalErrors++;
  }
  if (!course.metaTitle || !course.metaDescription) {
    console.error(`❌ ${prefix} Missing metaTitle or metaDescription`);
    totalErrors++;
  }
  if (placeholderRegex.test(course.title) || placeholderRegex.test(course.overview) || placeholderRegex.test(course.tagline)) {
    console.error(`❌ ${prefix} Contains placeholder text in basic fields`);
    totalErrors++;
  }

  // Badge icon
  if (course.badge?.iconName) {
    usedIcons.add(course.badge.iconName);
    if (!recognizedIcons.has(course.badge.iconName)) {
      missingIcons.add(course.badge.iconName);
    }
  }

  // Stats
  if (!course.stats || course.stats.length === 0) {
    console.error(`❌ ${prefix} Stats array is empty`);
    totalErrors++;
  } else {
    course.stats.forEach(s => {
      if (!s.label || !s.value || !s.iconName) {
        console.error(`❌ ${prefix} Incomplete stat object: ${JSON.stringify(s)}`);
        totalErrors++;
      }
      usedIcons.add(s.iconName);
      if (!recognizedIcons.has(s.iconName)) {
        missingIcons.add(s.iconName);
      }
    });
  }

  // Tools
  const tools = course.toolsSection?.tools || course.tools || [];
  if (tools.length === 0) {
    console.error(`❌ ${prefix} Tools array is empty`);
    totalErrors++;
  } else {
    totalTools += tools.length;
    tools.forEach(t => {
      if (!t.name || !t.iconName) {
        console.error(`❌ ${prefix} Incomplete tool object: ${JSON.stringify(t)}`);
        totalErrors++;
      }
      usedIcons.add(t.iconName);
      if (!recognizedIcons.has(t.iconName)) {
        missingIcons.add(t.iconName);
      }
    });
  }

  // Curriculum & Modules
  const modules = course.curriculumSection?.modules || course.curriculum || [];
  if (modules.length === 0) {
    console.error(`❌ ${prefix} Curriculum modules array is empty`);
    totalErrors++;
  } else {
    totalModules += modules.length;
    modules.forEach((m, mIdx) => {
      if (!m.title || !m.description || !m.topics || m.topics.length === 0) {
        console.error(`❌ ${prefix} Module #${mIdx + 1} has incomplete data: ${JSON.stringify(m)}`);
        totalErrors++;
      }
      totalTopics += m.topics ? m.topics.length : 0;
      m.topics?.forEach(top => {
        if (placeholderRegex.test(top)) {
          console.error(`❌ ${prefix} Module #${mIdx + 1} topic has placeholder text: "${top}"`);
          totalErrors++;
        }
      });
    });
  }

  // Instructors
  if (!course.instructors || course.instructors.length === 0) {
    console.error(`❌ ${prefix} Instructors array is empty`);
    totalErrors++;
  } else {
    totalInstructors += course.instructors.length;
    course.instructors.forEach(inst => {
      if (!inst.name || !inst.role || !inst.bio || !inst.image) {
        console.error(`❌ ${prefix} Incomplete instructor: ${JSON.stringify(inst)}`);
        totalErrors++;
      }
      const localImagePath = path.join(projectRoot, 'public', inst.image.replace(/^\//, ''));
      if (!fs.existsSync(localImagePath)) {
        console.warn(`⚠️ ${prefix} Instructor image does not exist on disk: ${inst.image} (Path: ${localImagePath})`);
        totalWarnings++;
      }
    });
  }

  // Prerequisites & Outcomes
  if (!course.prerequisites || course.prerequisites.length === 0) {
    console.error(`❌ ${prefix} Prerequisites array is empty`);
    totalErrors++;
  }
  if (!course.outcomes || course.outcomes.length === 0) {
    console.error(`❌ ${prefix} Outcomes array is empty`);
    totalErrors++;
  }

  // CTA
  const cta = course.cta || { headline: course.ctaHeadline, description: course.ctaDescription };
  if (!cta.headline || !cta.description) {
    console.error(`❌ ${prefix} Incomplete CTA`);
    totalErrors++;
  }
});

console.log(`\n--- Curricular Metrics ---`);
console.log(`Total Modules across 33 courses: ${totalModules}`);
console.log(`Total Topics across 33 courses: ${totalTopics}`);
console.log(`Total Tool entries across 33 courses: ${totalTools}`);
console.log(`Total Instructor profiles assigned: ${totalInstructors}`);
console.log(`Total Distinct Icons used across all 33 courses: ${usedIcons.size}`);
if (missingIcons.size > 0) {
  console.error(`❌ Missing icons in ICON_MAP:`, Array.from(missingIcons));
  totalErrors++;
} else {
  console.log(`✅ 100% of all ${usedIcons.size} icon names resolve cleanly in ICON_MAP!`);
}

console.log(`\nAudit Complete with ${totalErrors} Errors and ${totalWarnings} Warnings.`);

if (totalErrors > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
