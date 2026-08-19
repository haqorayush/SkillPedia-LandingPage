import fs from 'fs';
import path from 'path';
import { getAllCourseSlugs } from '../src/lib/coursesData';

const ROOT = path.resolve(__dirname, '..');
const NEXT_SERVER_APP = path.join(ROOT, '.next/server/app');

interface RouteCheck {
  route: string;
  expectedFile: string;
  status: 'PASS' | 'FAIL';
  sizeBytes?: number;
  error?: string;
}

const routeChecks: RouteCheck[] = [];

// Core routes to check
const coreRoutes = [
  { route: '/', file: 'index.html' },
  { route: '/about', file: 'about.html' },
  { route: '/team', file: 'team.html' },
  { route: '/apply', file: 'apply.html' },
  { route: '/programs', file: 'programs.html' },
  { route: '/ceo-message', file: 'ceo-message.html' },
  { route: '/privacy-policy', file: 'privacy-policy.html' },
  { route: '/terms-of-service', file: 'terms-of-service.html' },
  { route: '/refund-policy', file: 'refund-policy.html' },
  { route: '/vision-mission', file: 'vision-mission.html' },
  { route: '/_not-found', file: '_not-found.html' },
];

for (const { route, file } of coreRoutes) {
  const filePath = path.join(NEXT_SERVER_APP, file);
  if (fs.existsSync(filePath)) {
    const stat = fs.statSync(filePath);
    routeChecks.push({
      route,
      expectedFile: file,
      status: 'PASS',
      sizeBytes: stat.size,
    });
  } else {
    routeChecks.push({
      route,
      expectedFile: file,
      status: 'FAIL',
      error: `File not found at ${filePath}`,
    });
  }
}

// Check all 33 course detail routes
const slugs = getAllCourseSlugs();
for (const slug of slugs) {
  const file = `programs/${slug}.html`;
  const filePath = path.join(NEXT_SERVER_APP, file);
  if (fs.existsSync(filePath)) {
    const stat = fs.statSync(filePath);
    routeChecks.push({
      route: `/programs/${slug}`,
      expectedFile: file,
      status: 'PASS',
      sizeBytes: stat.size,
    });
  } else {
    routeChecks.push({
      route: `/programs/${slug}`,
      expectedFile: file,
      status: 'FAIL',
      error: `File not found at ${filePath}`,
    });
  }
}

console.log('=== ROUTE STATIC GENERATION AUDIT ===');
let passCount = 0;
let failCount = 0;

for (const check of routeChecks) {
  if (check.status === 'PASS') {
    passCount++;
    console.log(`✅ [PASS] Route: ${check.route} -> ${check.expectedFile} (${check.sizeBytes} bytes)`);
  } else {
    failCount++;
    console.error(`❌ [FAIL] Route: ${check.route} -> ${check.error}`);
  }
}

console.log(`\nTOTAL ROUTES AUDITED: ${routeChecks.length} | GENERATED: ${passCount} | MISSING: ${failCount}`);

if (failCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
