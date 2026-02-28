import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WORKSPACE_ROOT = path.resolve(__dirname, '../../');
const CODEX_PATH = path.join(WORKSPACE_ROOT, 'claude-codex.md');
const WEB_ROOT = path.resolve(__dirname, '../');

console.log(`Updating Codex at ${CODEX_PATH}...`);

try {
  if (!fs.existsSync(CODEX_PATH)) {
    console.error(`ERROR: Codex file not found at ${CODEX_PATH}`);
    process.exit(1);
  }

  // 1. Count Routes (App Router)
  function countRoutes(dir) {
    let count = 0;
    if (!fs.existsSync(dir)) return 0;
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        count += countRoutes(fullPath);
      } else if (file === 'page.tsx') {
        count++;
      }
    }
    return count;
  }

  const routeCount = countRoutes(path.join(WEB_ROOT, 'src/app'));

  // 2. Count Prompts
  const generatedPromptsPath = path.join(WEB_ROOT, 'src/lib/media/generated-prompts.ts');
  let promptCount = 'Unknown';

  if (fs.existsSync(generatedPromptsPath)) {
      const content = fs.readFileSync(generatedPromptsPath, 'utf-8');
      const keyMatches = content.match(/^\s+[A-Z0-9_]+: \{/gm);
      if (keyMatches) promptCount = keyMatches.length.toString();
  }

  // 3. Update File
  const now = new Date().toISOString().split('T')[0];
  let codexContent = fs.readFileSync(CODEX_PATH, 'utf-8');

  // Stats Block Replacement
  const statsBlock = `<!-- STATS:START -->
- **App Routes**: ${routeCount} active pages
- **Database Tables**: (Managed via Supabase Dashboard)
- **Media Prompts**: ${promptCount} compiled templates
- **Last Sync**: ${now} (Automated by GitHub Copilot)
<!-- STATS:END -->`;

  const newContent = codexContent.replace(
      /<!-- STATS:START -->[\s\S]*?<!-- STATS:END -->/,
      statsBlock
  );

  // Update Date in Header
  const updatedHeaderContent = newContent.replace(
      /## Current State \(\d{4}-\d{2}-\d{2}\)/,
      `## Current State (${now})`
  );

  fs.writeFileSync(CODEX_PATH, updatedHeaderContent);
  console.log('Codex updated successfully.');

} catch (error) {
  console.error('Failed to update Codex:', error);
  process.exit(1);
}
