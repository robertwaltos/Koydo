#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { createClient } from "@supabase/supabase-js";

// --- Environment Setup ---
function loadEnv() {
  try {
    const envData = fs.readFileSync('.env', 'utf8');
    const envLocalData = fs.existsSync('.env.local') ? fs.readFileSync('.env.local', 'utf8') : '';
    const combined = envData + '\n' + envLocalData;
    
    combined.split('\n').forEach(line => {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (match) process.env[match[1].trim()] = match[2].trim();
    });
  } catch (e) {}
}

loadEnv();

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("❌ Missing Supabase environment variables.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function main() {
  const catalogDir = path.resolve("src/lib/modules/catalog");
  const files = fs.readdirSync(catalogDir).filter(f => f.endsWith(".ts"));

  console.log(`🔍 Seeding trivia from ${files.length} modules...`);

  for (const file of files) {
    const filePath = path.join(catalogDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const moduleId = file.replace('.ts', '');

    const questions = [];
    // Regex to match "text": "...", "answer": true/false in the module object
    const qMatches = content.matchAll(/"text":\s*"(.*?)",\s*"answer":\s*(true|false)/g);
    
    for (const match of qMatches) {
      questions.push({
        question: match[1],
        answer: match[2] === 'true',
        category: moduleId.split('-').slice(0, -1).join(' '),
        module_id: moduleId
      });
    }

    if (questions.length > 0) {
      const { error } = await supabase.from('trivia_questions').upsert(questions, { onConflict: 'question' });
      if (error) console.error(`❌ Error seeding ${moduleId}:`, error.message);
      else console.log(`✅ Seeded ${questions.length} questions from ${moduleId}`);
    }
  }
}

main();
