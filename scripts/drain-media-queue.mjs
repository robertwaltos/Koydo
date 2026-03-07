#!/usr/bin/env node

/**
 * ⚡ Koydo Daily Media Drainer
 * 
 * Exhausts the daily quota of Imagen 4 Ultra and Veo 3.1 credits.
 * Reads from data/media-generation-queue.json and processes the top N items.
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
const IMAGE_MODEL = "imagen-4.0-ultra-generate-001";

const DAILY_LIMIT = 70; // Your daily Imagen Ultra limit
const QUEUE_PATH = path.resolve("data/media-generation-queue.json");

async function generateImage(prompt, filename) {
  console.log(`📸 Generating: ${filename}`);
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

  if (!res.ok) throw new Error(`API Error ${res.status}`);
  
  const data = await res.json();
  const base64 = data.predictions?.[0]?.bytesBase64Encoded;
  if (!base64) return null;

  const dir = path.resolve("public/generated-images/factory");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  const filePath = path.join(dir, filename);
  fs.writeFileSync(filePath, Buffer.from(base64, 'base64'));
  return `/generated-images/factory/${filename}`;
}

async function updateLessonFile(lessonId, imageUrl) {
  const lessonPath = path.resolve(`src/lib/data/lessons/${lessonId}.json`);
  if (!fs.existsSync(lessonPath)) return;

  const lesson = JSON.parse(fs.readFileSync(lessonPath, 'utf8'));
  lesson.imageUrl = imageUrl;
  fs.writeFileSync(lessonPath, JSON.stringify(lesson, null, 2));
}

async function main() {
  if (!fs.existsSync(QUEUE_PATH)) {
    console.log("📭 Media queue is empty. Nothing to generate.");
    return;
  }

  let queue = JSON.parse(fs.readFileSync(QUEUE_PATH, 'utf8'));
  const pending = queue.filter(i => i.status === "pending").slice(0, DAILY_LIMIT);

  if (pending.length === 0) {
    console.log("✅ All queued items have been processed.");
    return;
  }

  console.log(`🚀 Processing ${pending.length} items from the queue...`);

  for (const item of pending) {
    try {
      const filename = `${item.lessonId}.png`;
      const url = await generateImage(item.prompt, filename);
      
      if (url) {
        await updateLessonFile(item.lessonId, url);
        item.status = "completed";
        item.completedAt = new Date().toISOString();
        item.resultUrl = url;
        console.log(`   ✅ Finished ${item.lessonId}`);
      }
      
      // Save queue state after each success
      fs.writeFileSync(QUEUE_PATH, JSON.stringify(queue, null, 2));
      
      // Brief pause to respect rate limits
      await new Promise(r => setTimeout(r, 2000));
    } catch (err) {
      console.error(`   ❌ Failed ${item.lessonId}: ${err.message}`);
      item.status = "failed";
      item.error = err.message;
    }
  }

  console.log("\n🏁 Daily Media Drain complete.");
}

main();
