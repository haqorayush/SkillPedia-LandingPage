const fs = require('fs');
const path = require('path');

const expectedCourses = [
  // Development (11)
  { slug: 'full-stack-development', name: 'Full Stack Development', cat: 'Development', expectedDur: '3 Months' },
  { slug: 'java-development', name: 'Java Development', cat: 'Development', expectedDur: '3 Months' },
  { slug: 'python-development', name: 'Python Development', cat: 'Development', expectedDur: '3 Months' },
  { slug: 'web-development', name: 'Web Development', cat: 'Development', expectedDur: '45 Days' },
  { slug: 'javascript', name: 'JavaScript', cat: 'Development', expectedDur: '45 Days' },
  { slug: 'react-js', name: 'React JS', cat: 'Development', expectedDur: '45 Days' },
  { slug: 'nodejs', name: 'Node.js', cat: 'Development', expectedDur: '45 Days' },
  { slug: 'backend-development', name: 'Backend Development', cat: 'Development', expectedDur: '3 Months' },
  { slug: 'frontend-development', name: 'Frontend Development', cat: 'Development', expectedDur: '3 Months' },
  { slug: 'api-development', name: 'API Development', cat: 'Development', expectedDur: '45 Days' },
  { slug: 'software-development-with-ai-tools', name: 'Software Development with AI Tools', cat: 'Development', expectedDur: '45 Days' },

  // Testing (10)
  { slug: 'manual-testing', name: 'Manual Testing', cat: 'Testing', expectedDur: '45 Days' },
  { slug: 'automation-testing-selenium', name: 'Automation Testing with Selenium', cat: 'Testing', expectedDur: '45 Days' },
  { slug: 'java-selenium', name: 'Java + Selenium', cat: 'Testing', expectedDur: '3 Months' },
  { slug: 'api-testing-postman-rest-assured', name: 'API Testing with Postman & Rest Assured', cat: 'Testing', expectedDur: '45 Days' },
  { slug: 'playwright-automation', name: 'Playwright Automation', cat: 'Testing', expectedDur: '45 Days' },
  { slug: 'javascript-typescript-test-automation', name: 'JavaScript/TypeScript for Test Automation', cat: 'Testing', expectedDur: '45 Days' },
  { slug: 'performance-testing', name: 'Performance Testing', cat: 'Testing', expectedDur: '45 Days' },
  { slug: 'mobile-app-testing', name: 'Mobile App Testing', cat: 'Testing', expectedDur: '45 Days' },
  { slug: 'ai-based-software-testing', name: 'AI-Based Software Testing', cat: 'Testing', expectedDur: '45 Days' },
  { slug: 'complete-software-testing-course', name: 'Complete Software Testing Course', cat: 'Testing', expectedDur: '3 Months' },

  // Communication (8)
  { slug: 'basic-english-communication', name: 'Basic English Communication', cat: 'Communication', expectedDur: '45 Days' },
  { slug: 'spoken-english', name: 'Spoken English', cat: 'Communication', expectedDur: '45 Days' },
  { slug: 'english-grammar-tenses', name: 'English Grammar & Tenses', cat: 'Communication', expectedDur: '45 Days' },
  { slug: 'communication-for-beginners', name: 'Communication for Beginners', cat: 'Communication', expectedDur: '45 Days' },
  { slug: 'advanced-communication', name: 'Advanced Communication', cat: 'Communication', expectedDur: '45 Days' },
  { slug: 'professional-communication', name: 'Professional Communication', cat: 'Communication', expectedDur: '45 Days' },
  { slug: 'interview-communication', name: 'Interview Communication', cat: 'Communication', expectedDur: '45 Days' },
  { slug: 'corporate-communication', name: 'Corporate Communication', cat: 'Communication', expectedDur: '3 Months' }
];

const programsDir = path.join(process.cwd(), 'src/app/programs');
const constantsPath = path.join(process.cwd(), 'src/lib/constants.ts');
const constantsContent = fs.readFileSync(constantsPath, 'utf-8');

let passCount = 0;

console.log('='.repeat(100));
console.log(
  '#'.padEnd(3) + ' | ' +
  'SLUG'.padEnd(38) + ' | ' +
  'CAT'.padEnd(13) + ' | ' +
  'DUR'.padEnd(8) + ' | ' +
  'INSTRUCTORS'.padEnd(35) + ' | ' +
  'CONSTANTS'.padEnd(9) + ' | ' +
  'STATUS'
);
console.log('='.repeat(100));

expectedCourses.forEach((c, idx) => {
  const dir = path.join(programsDir, c.slug);
  const pageFile = path.join(dir, 'page.tsx');
  if (!fs.existsSync(pageFile)) {
    console.log(`${(idx + 1).toString().padEnd(3)} | ${c.slug.padEnd(38)} | ${c.cat.padEnd(13)} | MISSING_PAGE`);
    return;
  }

  const files = fs.readdirSync(dir);
  const clientFile = files.find(f => f.endsWith('Client.tsx'));
  const pageContent = fs.readFileSync(pageFile, 'utf-8');
  const clientContent = clientFile ? fs.readFileSync(path.join(dir, clientFile), 'utf-8') : '';
  const combined = pageContent + '\n' + clientContent;

  const is45Days = /45\s*days/i.test(combined);
  const is3Months = /3\s*months/i.test(combined);
  const durationValid = is45Days || is3Months;
  const actualDur = is45Days ? '45 Days' : is3Months ? '3 Months' : 'UNKNOWN';

  const team = ['Ayush Dwivedy', 'Dharmendra Kumar Pandey', 'Saurabh Pathak', 'Aniket', 'Sumit Kumar', 'Lavli Pandey', 'Line'];
  const instructors = team.filter(t => combined.includes(t));

  const inConstants = constantsContent.includes(`href: "/programs/${c.slug}"`) || constantsContent.includes(`id: "${c.slug}"`);

  const isValid = pageContent.length > 500 &&
                  clientContent.length > 5000 &&
                  durationValid &&
                  instructors.length > 0 &&
                  inConstants;

  if (isValid) passCount++;

  console.log(
    `${(idx + 1).toString().padEnd(3)} | ` +
    `${c.slug.padEnd(38)} | ` +
    `${c.cat.padEnd(13)} | ` +
    `${actualDur.padEnd(8)} | ` +
    `${instructors.join(', ').slice(0, 34).padEnd(35)} | ` +
    `${(inConstants ? 'YES' : 'NO').padEnd(9)} | ` +
    `${isValid ? 'PASS' : 'FAIL'}`
  );
});

console.log('='.repeat(100));
console.log(`TOTAL COURSES VERIFIED: ${passCount} / ${expectedCourses.length}`);
