import fs from 'node:fs';
import path from 'node:path';

const catalogDir = "src/lib/modules/catalog";
const files = fs.readdirSync(catalogDir).filter(f => f.endsWith('.ts'));
let refinedCount = 0;

for (const file of files) {
  const content = fs.readFileSync(path.join(catalogDir, file), 'utf8');
  if (content.includes('"version": "1.1.0"')) {
    refinedCount++;
  }
}

console.log(`Refined Modules: ${refinedCount}`);
console.log(`Total Modules:   ${files.length}`);
console.log(`Progress:        ${((refinedCount/files.length)*100).toFixed(2)}%`);
