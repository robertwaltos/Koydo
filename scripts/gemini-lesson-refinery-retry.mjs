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
  const files = ["ethics-of-technology-201.ts","ethics-of-technology-301.ts","ethics-of-technology-101.ts","ethics-of-technology-401.ts","farming-401.ts","farming-601.ts","farming-501.ts","financial-literacy-101.ts","financial-literacy-601.ts","financial-literacy-501.ts","food-science-101.ts","gaokao-prep-101.ts","gardening-301.ts","gardening-401.ts","gardening-201.ts","gardening-501.ts","gcse-prep-101.ts","gardening-601.ts","general-relativity-601.ts","general-relativity-401.ts","general-relativity-501.ts","general-science-601.ts","general-science-501.ts","geography-101.ts","geography-501.ts","geography-601.ts","geoscience-301.ts","geoscience-201.ts","geoscience-101.ts","geoscience-501.ts","geoscience-601.ts","geoscience-401.ts","household-management-501.ts","household-management-401.ts","household-management-601.ts","human-resource-management-101.ts","human-resource-management-201.ts","human-resource-management-301.ts","human-resource-management-501.ts","human-resource-management-601.ts","human-resource-management-401.ts","hvac-301.ts","hvac-201.ts","hvac-101.ts","hvac-401.ts","hvac-501.ts","hvac-601.ts","international-business-101.ts","ielts-prep-101.ts","ib-prep-101.ts","international-business-301.ts","international-business-401.ts","international-business-201.ts","international-relations-101.ts","international-business-501.ts","international-business-601.ts","international-relations-201.ts","international-relations-301.ts","international-relations-401.ts","international-relations-601.ts","international-relations-501.ts","jee-neet-prep-101.ts","language-arts-201.ts","language-arts-101.ts","language-arts-501.ts","language-arts-601.ts","law-studies-201.ts","law-studies-101.ts","law-studies-401.ts","law-studies-301.ts","law-studies-501.ts","law-studies-601.ts","leadership-201.ts","leadership-101.ts","leadership-501.ts","leadership-401.ts","leadership-301.ts","leadership-601.ts","linux-201.ts","linux-101.ts","linux-401.ts","linux-501.ts","linux-301.ts","macos-101.ts","linux-601.ts","macos-201.ts","macos-501.ts","macos-401.ts","macos-301.ts","macos-601.ts","marketing-management-101.ts","marketing-management-201.ts","marketing-management-501.ts","marketing-management-301.ts","marketing-management-401.ts","marketing-management-601.ts","math-101.ts","math-201.ts","math-301.ts","math-401.ts","math-501.ts","math-601.ts","media-literacy-101.ts","media-literacy-201.ts","media-literacy-401.ts","media-literacy-301.ts","media-literacy-601.ts","media-literacy-501.ts","medicine-101.ts","medicine-401.ts","medicine-301.ts","medicine-201.ts","medicine-601.ts","medicine-501.ts","mental-health-literacy-101.ts","mental-health-literacy-401.ts","mental-health-literacy-201.ts","mental-health-literacy-301.ts","mental-health-literacy-601.ts","mental-health-literacy-501.ts","meteorology-101.ts","meteorology-301.ts","meteorology-401.ts","meteorology-201.ts","meteorology-601.ts","meteorology-501.ts","micro-circuits-101.ts","micro-circuits-201.ts","micro-circuits-301.ts","micro-circuits-401.ts","micro-circuits-501.ts","micro-circuits-601.ts","microelectronics-101.ts","microelectronics-301.ts","microelectronics-201.ts","microelectronics-401.ts","module-template.example.ts","microelectronics-601.ts","microelectronics-501.ts","music-history-201.ts","music-history-301.ts","music-history-101.ts","music-history-601.ts","music-history-501.ts","music-history-401.ts","music-production-301.ts","music-production-201.ts","music-production-101.ts","music-production-601.ts","music-production-401.ts","music-production-501.ts","music-theory-101.ts","music-theory-301.ts","music-theory-201.ts","music-theory-501.ts","music-theory-601.ts","music-theory-401.ts","negotiation-conflict-resolution-201.ts","negotiation-conflict-resolution-301.ts","negotiation-conflict-resolution-101.ts","negotiation-conflict-resolution-401.ts","negotiation-conflict-resolution-501.ts","negotiation-conflict-resolution-601.ts","network-engineering-301.ts","network-engineering-201.ts","network-engineering-101.ts","network-engineering-601.ts","network-engineering-401.ts","network-engineering-501.ts","neuroscience-201.ts","neuroscience-101.ts","neuroscience-301.ts","neuroscience-601.ts","neuroscience-501.ts","neuroscience-401.ts","nursing-301.ts","nursing-201.ts","nursing-101.ts","nursing-401.ts","nursing-501.ts","nursing-601.ts","nutrition-science-101.ts","nutrition-science-201.ts","nutrition-science-301.ts","nutrition-science-501.ts","nutrition-science-601.ts","nutrition-science-401.ts","oceanography-201.ts","oceanography-101.ts","oceanography-301.ts","oceanography-501.ts","oceanography-401.ts","oceanography-601.ts","operations-management-201.ts","operations-management-101.ts","operations-management-301.ts","operations-management-601.ts","operations-management-501.ts","operations-management-401.ts","organizational-behavior-201.ts","organizational-behavior-101.ts","organizational-behavior-301.ts","organizational-behavior-601.ts","organizational-behavior-401.ts","organizational-behavior-501.ts","philosophy-201.ts","philosophy-301.ts","philosophy-101.ts","philosophy-501.ts","philosophy-401.ts","philosophy-601.ts","physics-101.ts","physics-501.ts","physics-601.ts","plumbing-301.ts","plumbing-201.ts","plumbing-101.ts","plumbing-401.ts","plumbing-601.ts","plumbing-501.ts","pre-k-advanced-math-101.ts","pre-k-arts-101.ts","pre-k-astronomy-101.ts","pre-k-biology-101.ts","pre-k-chemistry-101.ts","pre-k-basic-math-101.ts","pre-k-farming-101.ts","pre-k-coding-101.ts","pre-k-financial-literacy-101.ts","pre-k-general-science-101.ts","pre-k-general-relativity-101.ts","pre-k-geography-101.ts","pre-k-physics-101.ts","pre-k-household-management-101.ts","pre-k-language-arts-101.ts","pre-k-social-studies-us-101.ts","pre-k-world-history-101.ts","pre-k-social-studies-world-101.ts","project-management-301.ts","project-management-201.ts","project-management-101.ts","project-management-401.ts","project-management-501.ts","project-management-601.ts","psychology-301.ts","psychology-201.ts","psychology-101.ts","psychology-401.ts","psychology-601.ts","psychology-501.ts","public-health-101.ts","public-health-201.ts","public-health-301.ts","public-health-401.ts","public-health-501.ts","public-health-601.ts","quantum-computing-201.ts","quantum-computing-101.ts","quantum-computing-301.ts","quantum-computing-501.ts","quantum-computing-601.ts","quantum-computing-401.ts","reading-201.ts","reading-301.ts","reading-101.ts","reading-501.ts","reading-601.ts","reading-401.ts","renewable-energy-systems-301.ts","renewable-energy-systems-201.ts","renewable-energy-systems-101.ts","renewable-energy-systems-601.ts","renewable-energy-systems-401.ts","renewable-energy-systems-501.ts","robotics-301.ts","robotics-201.ts","robotics-101.ts","robotics-401.ts","robotics-501.ts","robotics-601.ts","science-201.ts","sat-prep-101.ts","science-101.ts","science-501.ts","science-401.ts","science-301.ts","science-601.ts","social-studies-us-101.ts","social-studies-us-501.ts","social-studies-us-601.ts","social-studies-world-501.ts","space-missions-engineering-101.ts","space-missions-engineering-201.ts","social-studies-world-601.ts","space-missions-engineering-301.ts","space-missions-engineering-401.ts","space-missions-engineering-501.ts","sports-science-201.ts","sports-science-101.ts","space-missions-engineering-601.ts","sports-science-401.ts","sports-science-501.ts","sports-science-301.ts","sports-science-601.ts","strategic-management-201.ts","strategic-management-101.ts","strategic-management-301.ts","strategic-management-401.ts","strategic-management-501.ts","strategic-management-601.ts","supply-chain-management-101.ts","supply-chain-management-201.ts","supply-chain-management-401.ts","supply-chain-management-301.ts","supply-chain-management-501.ts","sustainability-policy-201.ts","sustainability-policy-101.ts","supply-chain-management-601.ts","sustainability-policy-501.ts","sustainability-policy-401.ts","sustainability-policy-301.ts","sustainability-policy-601.ts","us-civics-101.ts","toefl-prep-101.ts","us-civics-301.ts","us-civics-401.ts","us-civics-201.ts"];
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
