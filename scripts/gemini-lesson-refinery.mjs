#!/usr/bin/env node

/**
 * 🛠️ Koydo Gemini Lesson Refinery v6 (HYPER-SPEED TEXT)
 * 
 * Strategy:
 * 1. Focus 100% on Smoothing + Translation.
 * 2. Bypass all image generation waiting.
 * 3. Queue every image prompt for later processing.
 */

import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import crypto from 'node:crypto';

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

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta";
const PRO_MODEL = "gemini-2.5-pro";

if (!GOOGLE_API_KEY) {
  console.error("❌ ERROR: GOOGLE_API_KEY is not set.");
  process.exit(1);
}

function sha256(text) {
  return crypto.createHash('sha256').update(text).digest('hex');
}

async function callGemini(systemPrompt, userPrompt, model, schema = null, retries = 5) {
  const url = `${GEMINI_BASE_URL}/models/${model}:generateContent?key=${GOOGLE_API_KEY}`;
  
  const body = {
    system_instruction: { parts: [{ text: systemPrompt }] },
    contents: [{ role: "user", parts: [{ text: userPrompt }] }],
    generationConfig: { response_mime_type: "application/json", temperature: 0.1 }
  };

  if (schema) body.generationConfig.response_schema = schema;

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      if (res.status === 429) {
        const waitTime = Math.pow(2, attempt) * 5000 + (Math.random() * 1000);
        console.warn(`      ⏳ [${model}] Rate limit hit (429). Retrying in ${Math.round(waitTime/1000)}s...`);
        await new Promise(r => setTimeout(r, waitTime));
        continue;
      }

      if (!res.ok) throw new Error(`Gemini API Error: ${res.status}`);
      const data = await res.json();
      return JSON.parse(data.candidates[0].content.parts[0].text);
    } catch (err) {
      if (attempt === retries - 1) throw err;
      await new Promise(r => setTimeout(r, Math.pow(2, attempt) * 2000));
    }
  }
}

async function refineModule(filePath) {
  const fileName = path.basename(filePath);
  const content = fs.readFileSync(filePath, 'utf8');

  try {
    // Skip external/massive raw imports
    if (fileName.includes('external') || content.length > 250000) {
      console.log(`⏩ [${fileName}] Skipped (External/Raw data).`);
      return;
    }

    if (content.includes('"version": "1.1.0"') && !process.argv.includes('--force')) {
      console.log(`✅ ${fileName} already refined.`);
      return;
    }

    console.log(`🚀 [${fileName}] Refining text...`);
    
    // Pass 1: Extraction
    const moduleObj = await callGemini("Extract LearningModule object as JSON.", content, PRO_MODEL);

    // Pass 2: Smoothing
    let refinedObj = await callGemini(
      `Refine this module: 1. Perfect flow. 2. Fill gaps. 3. Age-appropriate vocabulary. 4. Visual prompts. 5. Set version to "1.1.0".`,
      JSON.stringify(moduleObj),
      PRO_MODEL
    );
    if (Array.isArray(refinedObj)) refinedObj = refinedObj[0];
    refinedObj.version = "1.1.0";

    // Pass 3: Instant Queueing (No waiting for visuals)
    const mediaQueuePath = path.resolve("data/media-generation-queue.json");
    let queue = [];
    try { if (fs.existsSync(mediaQueuePath)) queue = JSON.parse(fs.readFileSync(mediaQueuePath, 'utf8')); } catch (e) {}
    
    for (const lesson of refinedObj.lessons) {
      if (lesson.lessonImagePrompt && !lesson.imageUrl) {
        queue.push({
          moduleId: refinedObj.id,
          lessonId: lesson.id,
          prompt: lesson.lessonImagePrompt,
          model: "imagen-4.0-ultra-generate-001",
          status: "pending",
          queuedAt: new Date().toISOString()
        });
        // Optimistically set the local path it WILL have
        lesson.imageUrl = `/generated-images/refinery/${lesson.id}.png`;
      }
    }
    fs.writeFileSync(mediaQueuePath, JSON.stringify(queue, null, 2));

    // Save
    const exportName = fileName.replace(/\.ts$/, '').replace(/-/g, '_') + "_Module";
    fs.writeFileSync(filePath, `import type { LearningModule } from "@/lib/modules/types";\n\nexport const ${exportName}: LearningModule = ${JSON.stringify(refinedObj, null, 2)};\n`);
    console.log(`✨ [${fileName}] Saved. (Images Queued)`);

    // Pass 4: Background Translation
    const moduleId = refinedObj.id || fileName.replace(/\.ts$/, '');
    const logPath = path.resolve(`logs/propagate-${moduleId}.log`);
    const out = fs.openSync(logPath, 'a');
    
    const child = spawn('node', ['scripts/propagate-module-translations.mjs', `--module=${moduleId}`], {
      detached: true,
      stdio: ['ignore', out, out]
    });
    child.unref();
    console.log(`🌍 [${fileName}] Translation triggered (Log: logs/propagate-${moduleId}.log)`);

  } catch (e) {
    console.error(`❌ [${fileName}] Failed:`, e.message);
  }
}

async function main() {
  const catalogDir = path.resolve("src/lib/modules/catalog");
  const files = fs.readdirSync(catalogDir).filter(f => f.endsWith(".ts") && !f.startsWith("generated-"));
  const startAt = process.argv.find(arg => arg.startsWith("--start-at="))?.split("=")[1];
  let startIndex = startAt ? files.indexOf(startAt) : 0;

  console.log(`⚡ Koydo HYPER-SPEED Refinery v6 Starting (Index: ${startIndex}, Concurrency: 3)`);

  for (let i = startIndex; i < files.length; i += 3) {
    const batchFiles = files.slice(i, i + 3);
    await Promise.all(batchFiles.map(file => refineModule(path.join(catalogDir, file))));
    // Small delay to prevent overwhelming the background scheduler
    await new Promise(r => setTimeout(r, 5000));
  }
}

main();
