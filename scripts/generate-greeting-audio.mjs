#!/usr/bin/env node
/**
 * generate-greeting-audio.mjs
 *
 * Pre-records companion greeting messages as static .mp3 files using OpenAI tts-1.
 * Outputs to public/audio/greetings/ so they can be served without runtime API calls.
 *
 * Usage:
 *   node --env-file=.env.local scripts/generate-greeting-audio.mjs --apply
 *   node --env-file=.env.local scripts/generate-greeting-audio.mjs --dry-run
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "audio", "greetings");

// ── Greeting messages (mirror of src/lib/greeter/messages.ts) ─────────────

const ROUTE_MESSAGES = [
  {
    slug: "dashboard",
    messages: [
      "Welcome back! Ready to keep the streak going?",
      "Great to see you again! What are we learning today?",
      "You're doing amazing — let's dive back in!",
    ],
  },
  {
    slug: "lessons",
    messages: [
      "You're in a lesson — nice! Let me know if you need help.",
      "Learning mode activated! I'm right here if you get stuck.",
      "Focus up! This lesson is going to be great.",
    ],
  },
  {
    slug: "explore",
    messages: [
      "Exploring new topics? So exciting!",
      "There's so much to discover here! Can I help you find something?",
      "Curiosity is your superpower! What looks interesting?",
    ],
  },
  {
    slug: "experience-hub",
    messages: [
      "Time to level up with some challenges!",
      "The experience hub is where learning gets fun! Ready?",
      "Let's play and learn at the same time!",
    ],
  },
  {
    slug: "profile",
    messages: [
      "Looking at your profile? You've come so far!",
      "Your learning journey is really impressive! Keep going!",
    ],
  },
  {
    slug: "exams",
    messages: [
      "Exam prep time! You've totally got this.",
      "Let's make sure you're fully ready! I believe in you!",
    ],
  },
  {
    slug: "audiobooks",
    messages: [
      "Ready to listen and learn? Audiobooks are so cozy!",
      "Sit back, relax, and let the knowledge flow in!",
    ],
  },
  {
    slug: "default",
    messages: [
      "Hi! I'm here if you need anything.",
      "Hey! Let me know if I can help with anything!",
      "I'm your learning buddy — always here for you!",
    ],
  },
  {
    slug: "landing",
    messages: [
      "Hi! I'm here to help you learn anything, at any age!",
    ],
  },
];

const GENDERS = [
  { id: "female", voice: "nova" },
  { id: "male", voice: "echo" },
];

// ── OpenAI TTS ────────────────────────────────────────────────────────────

async function generateTTSAudio(text, voice) {
  const apiKey = process.env.OPENAI_MEDIA_API_KEY || process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("Missing OPENAI_MEDIA_API_KEY or OPENAI_API_KEY");

  const res = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "tts-1",
      input: text,
      voice,
      speed: 0.95,
      response_format: "mp3",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenAI TTS failed (${res.status}): ${err}`);
  }

  return Buffer.from(await res.arrayBuffer());
}

// ── Main ──────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const isDryRun = args.includes("--dry-run") || !args.includes("--apply");

  // Build the full list of jobs
  const jobs = [];
  for (const route of ROUTE_MESSAGES) {
    for (const gender of GENDERS) {
      for (let i = 0; i < route.messages.length; i++) {
        const filename = `${gender.id}-${route.slug}-${i}.mp3`;
        jobs.push({
          filename,
          text: route.messages[i],
          voice: gender.voice,
          gender: gender.id,
          slug: route.slug,
          index: i,
        });
      }
    }
  }

  console.log(`\nGreeting Audio Generator`);
  console.log(`========================`);
  console.log(`  Routes:  ${ROUTE_MESSAGES.length}`);
  console.log(`  Genders: ${GENDERS.length}`);
  console.log(`  Total files: ${jobs.length}`);
  console.log(`  Mode: ${isDryRun ? "DRY RUN" : "GENERATING"}`);
  console.log();

  if (isDryRun) {
    for (const job of jobs) {
      console.log(`  [dry-run] ${job.filename} — "${job.text.slice(0, 60)}..."`);
    }
    console.log(`\n  Run with --apply to generate the .mp3 files.\n`);
    return;
  }

  // Create output directory
  fs.mkdirSync(OUT_DIR, { recursive: true });

  let generated = 0;
  let skipped = 0;
  let errors = 0;

  for (const job of jobs) {
    const outPath = path.join(OUT_DIR, job.filename);

    // Skip if already exists
    if (fs.existsSync(outPath)) {
      const stat = fs.statSync(outPath);
      if (stat.size > 1000) {
        console.log(`  [skip] ${job.filename} (${(stat.size / 1024).toFixed(1)} KB)`);
        skipped++;
        continue;
      }
    }

    try {
      const buffer = await generateTTSAudio(job.text, job.voice);
      fs.writeFileSync(outPath, buffer);
      console.log(`  [gen]  ${job.filename} (${(buffer.length / 1024).toFixed(1)} KB)`);
      generated++;
    } catch (err) {
      console.error(`  [ERR]  ${job.filename}: ${err.message}`);
      errors++;
    }

    // Small delay to avoid rate limiting
    await new Promise((r) => setTimeout(r, 250));
  }

  // Generate manifest
  const manifest = {
    generatedAt: new Date().toISOString(),
    totalFiles: generated + skipped,
    routes: {},
  };

  for (const route of ROUTE_MESSAGES) {
    manifest.routes[route.slug] = {
      messageCount: route.messages.length,
      genders: GENDERS.map((g) => g.id),
    };
  }

  const manifestPath = path.join(OUT_DIR, "manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  console.log(`\nDONE: ${generated} generated, ${skipped} skipped, ${errors} errors`);
  console.log(`Manifest: ${manifestPath}\n`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
