import fs from 'fs';
import path from 'path';
import { getAllCourseSlugs } from '../../src/lib/coursesData';

const projectRoot = path.resolve(__dirname, '../../');
const slugs = new Set(getAllCourseSlugs());

// Search for all /programs/... links in src/
function findLinks(dir: string, fileList: string[] = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.agents') {
        findLinks(filePath, fileList);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const allTsFiles = findLinks(path.join(projectRoot, 'src'));
const programLinkRegex = /["'`]\/programs\/([a-zA-Z0-9_-]+)["'`]/g;

let totalLinksChecked = 0;
let brokenLinks = 0;

for (const filePath of allTsFiles) {
  const content = fs.readFileSync(filePath, 'utf8');
  let match;
  while ((match = programLinkRegex.exec(content)) !== null) {
    const targetSlug = match[1];
    if (targetSlug === 'apply' || targetSlug === '[slug]') continue;
    totalLinksChecked++;
    if (!slugs.has(targetSlug)) {
      console.error(`❌ Broken link found in ${path.relative(projectRoot, filePath)}: /programs/${targetSlug}`);
      brokenLinks++;
    }
  }
}

console.log(`Checked ${totalLinksChecked} /programs/:slug links across src/`);
if (brokenLinks === 0) {
  console.log(`✅ All /programs/:slug links point to valid courses in coursesData.ts!`);
} else {
  console.error(`❌ Found ${brokenLinks} broken links`);
  process.exit(1);
}
