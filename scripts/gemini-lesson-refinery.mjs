#!/usr/bin/env node

/**
 * 🛠️ Koydo Gemini Lesson Refinery v3
 * 
 * Uses Gemini 3.1 Pro to:
 * 1. Extract JSON from TS catalog files.
 * 2. Refine the curriculum flow and fill gaps.
 * 3. Generate Imagen 4 Ultra visuals.
 */

import fs from 'node:fs';
import path from 'node:path';

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
const TEXT_MODEL = "gemini-3.1-pro-preview";
const IMAGE_MODEL = "imagen-4.0-ultra-generate-001";

if (!GOOGLE_API_KEY) {
  console.error("❌ ERROR: GOOGLE_API_KEY is not set.");
  process.exit(1);
}

async function callGemini(systemPrompt, userPrompt, schema = null) {
  const url = `${GEMINI_BASE_URL}/models/${TEXT_MODEL}:generateContent?key=${GOOGLE_API_KEY}`;
  
  const body = {
    system_instruction: { parts: [{ text: systemPrompt }] },
    contents: [
      { role: "user", parts: [{ text: userPrompt }] }
    ],
    generationConfig: {
      response_mime_type: "application/json",
      temperature: 0.1
    }
  };

  if (schema) body.generationConfig.response_schema = schema;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  if (!res.ok) throw new Error(`Gemini API Error: ${res.status}`);
  
  const data = await res.json();
  return JSON.parse(data.candidates[0].content.parts[0].text);
}

async function generateImage(prompt, filename) {
  console.log(`     📸 Generating Imagen 4 Ultra: ${filename}`);
  const url = `${GEMINI_BASE_URL}/models/${IMAGE_MODEL}:predict?key=${GOOGLE_API_KEY}`;
  
  const body = {
    instances: [{ prompt }],
    parameters: { sampleCount: 1, aspectRatio: "16:9", outputOptions: { mimeType: "image/png" } }
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  if (!res.ok) return null;
  
  const data = await res.json();
  const base64 = data.predictions?.[0]?.bytesBase64Encoded;
  if (!base64) return null;

  const dir = path.resolve("public/generated-images/refinery");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  const filePath = path.join(dir, filename);
  fs.writeFileSync(filePath, Buffer.from(base64, 'base64'));
  return `/generated-images/refinery/${filename}`;
}

async function refineModule(filePath) {
  const fileName = path.basename(filePath);
  console.log(`\n🔍 Processing: ${fileName}`);

  const content = fs.readFileSync(filePath, 'utf8');

  try {
    // Pass 1: Extract JSON from TS
    console.log(`   📦 Extracting module data...`);
    const moduleObj = await callGemini(
      "Extract the LearningModule object from the following TypeScript file and return it as valid JSON. Ignore imports and type definitions.",
      content
    );

    // Pass 2: Refine Curriculum
    console.log(`   🧠 Smoothing flow and filling gaps...`);
    const refinedObj = await callGemini(
      `You are a world-class Educational Architect. Refine this module for Koydo App.
      1. Ensure perfect pedagogical flow between lessons.
      2. Fill all content gaps (chunks, questions).
      3. Use age-appropriate language (${moduleObj.minAge}-${moduleObj.maxAge}).
      4. Provide Imagen 4 'lessonImagePrompt' and Veo 3.1 'conceptVideoPrompt' for each lesson.`,
      JSON.stringify(moduleObj)
    );

    // Pass 3: Queue Media Prompts (Preserve Credits)
    const mediaQueuePath = path.resolve("data/media-generation-queue.json");
    let mediaQueue = [];
    try {
      if (fs.existsSync(mediaQueuePath)) {
        mediaQueue = JSON.parse(fs.readFileSync(mediaQueuePath, 'utf8'));
      }
    } catch (e) { mediaQueue = []; }

    for (const lesson of refinedObj.lessons) {
      if (lesson.lessonImagePrompt && !lesson.imageUrl) {
        console.log(`   📝 Queuing image prompt for ${lesson.id}`);
        mediaQueue.push({
          moduleId: refinedObj.id,
          lessonId: lesson.id,
          prompt: lesson.lessonImagePrompt,
          model: "imagen-4.0-ultra",
          status: "pending",
          queuedAt: new Date().toISOString()
        });
      }
    }
    fs.writeFileSync(mediaQueuePath, JSON.stringify(mediaQueue, null, 2));

    // Save back to TS
    const exportName = fileName.replace(/\.ts$/, '').replace(/-/g, '_') + "_Module";
    const newTsContent = `import type { LearningModule } from "@/lib/modules/types";\n\nexport const ${exportName}: LearningModule = ${JSON.stringify(refinedObj, null, 2)};\n`;
    fs.writeFileSync(filePath, newTsContent);
    console.log(`✅ ${fileName} refined and saved (Media Queued).`);

  } catch (e) {
    console.error(`❌ Failed ${fileName}:`, e.message);
  }
}

async function main() {
  const catalogDir = path.resolve("src/lib/modules/catalog");
  const files = fs.readdirSync(catalogDir).filter(f => f.endsWith(".ts") && !f.startsWith("generated-"));

  console.log(`🚀 Starting Global Curriculum Refinery v3 (${files.length} modules)`);

  for (const file of files) {
    await refineModule(path.join(catalogDir, file));
    await new Promise(r => setTimeout(r, 2000));
  }
}

main();

