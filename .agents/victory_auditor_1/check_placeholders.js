const fs = require('fs');
const path = require('path');

const programsDir = path.join(process.cwd(), 'src/app/programs');
const dirs = fs.readdirSync(programsDir).filter(d => fs.statSync(path.join(programsDir, d)).isDirectory());

console.log(`Checking ${dirs.length} total program subdirectories...`);

const issues = [];
let auditedCourses = 0;

for (const dir of dirs) {
  const fullDir = path.join(programsDir, dir);
  const files = fs.readdirSync(fullDir);
  
  for (const file of files) {
    if (!file.endsWith('.tsx') && !file.endsWith('.ts')) continue;
    const content = fs.readFileSync(path.join(fullDir, file), 'utf-8');
    
    // Check for obvious placeholders
    const suspiciousPatterns = [
      /lorem\s+ipsum/i,
      /todo:/i,
      /fixme:/i,
      /\[placeholder\]/i,
      /undefined/i,
      /dummy\s+content/i
    ];
    
    for (const pattern of suspiciousPatterns) {
      if (pattern.test(content)) {
        issues.push({ dir, file, pattern: pattern.toString() });
      }
    }
  }
}

console.log('Forensic Check Results:');
if (issues.length === 0) {
  console.log('✅ CLEAN: No lorem ipsum, TODOs, or placeholder strings detected across all program directories.');
} else {
  console.log('⚠️ Suspicious patterns detected:');
  console.log(JSON.stringify(issues, null, 2));
}
