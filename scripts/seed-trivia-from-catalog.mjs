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
  const files = fs.readdirSync(catalogDir).filter(f => f.endsWith(".ts")).sort();

  console.log(`🔍 Seeding trivia from ${files.length} modules...`);

  let totalSeeded = 0;

  for (const file of files) {
    const filePath = path.join(catalogDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const moduleId = file.replace('.ts', '');
    const category = moduleId.split('-').slice(0, -1).join(' ').toUpperCase();

    const questions = [];

    // 1. Extract from standard quiz "text" and "answer"
    const qMatches = content.matchAll(/"text":\s*"(.*?)",\s*"answer":\s*(true|false)/g);
    for (const match of qMatches) {
      questions.push({
        question: match[1],
        answer: match[2] === 'true',
        category,
        module_id: moduleId
      });
    }

    // 2. Extract from "flashcards" front/back
    const flashMatches = content.matchAll(/"front":\s*"(.*?)",\s*"back":\s*"(.*?)"/g);
    for (const match of flashMatches) {
      const front = match[1];
      const back = match[2];
      // Convert to a True/False statement or just add as general trivia
      // For Trivia Swipe, we ideally want True/False.
      // We can generate a "False" version later, but for now let's just use the True ones.
      questions.push({
        question: `${front} is defined as: ${back}`,
        answer: true,
        category,
        module_id: moduleId
      });
    }

    // 3. Extract from "**Self-Check:**" in chunks
    const selfCheckMatches = content.matchAll(/\*\*Self-Check:\*\*\s*(.*?)\s*\(Answer:\s*(.*?)\)/g);
    for (const match of selfCheckMatches) {
      const q = match[1];
      const a = match[2].toLowerCase();
      const isTrue = a.includes('yes') || a.includes('true') || a.includes('debit') || a.includes('correct');
      // This is a bit fuzzy, but good for seeding
      if (a.includes('yes') || a.includes('no') || a.includes('true') || a.includes('false')) {
        questions.push({
          question: q,
          answer: !a.includes('no') && !a.includes('false'),
          category,
          module_id: moduleId
        });
      }
    }

    if (questions.length > 0) {
      // Deduplicate questions in this batch to prevent "ON CONFLICT DO UPDATE command cannot affect row a second time"
      const uniqueQuestions = Array.from(new Map(questions.map(q => [q.question, q])).values());
      
      const { error } = await supabase.from('trivia_questions').upsert(uniqueQuestions, { onConflict: 'question' });
      if (error) {
        console.error(`❌ Error seeding ${moduleId}:`, error.message);
      } else {
        totalSeeded += uniqueQuestions.length;
        console.log(`✅ Seeded ${uniqueQuestions.length} questions from ${moduleId} (Total: ${totalSeeded})`);
      }
    }
  }
  
  console.log(`\n🎉 SEEDING COMPLETE. Total Questions: ${totalSeeded}`);
}

main();
