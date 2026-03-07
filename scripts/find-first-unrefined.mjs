import fs from 'node:fs';
import path from 'node:path';

const catalogDir = "src/lib/modules/catalog";
const files = fs.readdirSync(catalogDir).filter(f => f.endsWith('.ts')).sort();

for (const file of files) {
  const content = fs.readFileSync(path.join(catalogDir, file), 'utf8');
  if (file.includes('external') || content.length > 250000) continue;
  if (!content.includes('"version": "1.1.0"')) {
    console.log(file);
    process.exit(0);
  }
}
