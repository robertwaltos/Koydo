/**
 * FORGE — Google AI Batch Media Generator
 *
 * Generates lesson images (Imagen 4 Fast) and concept video clips (Veo 3.1 Fast)
 * using the $300 Google AI credit allocation.
 *
 * Budget breakdown:
 *   - 2,514 lesson images   × $0.02/img  = $50.28
 *   - 207 module thumbnails  × $0.02/img  = $4.14
 *   - ~400 priority Veo clips × $0.60/clip = $240.00
 *   - Reserve:                              $5.58
 *   - Total budget:                         $300.00
 *
 * Usage:
 *   node scripts/generate-google-ai-batch.mjs --mode images --limit 50
 *   node scripts/generate-google-ai-batch.mjs --mode thumbnails --limit 20
 *   node scripts/generate-google-ai-batch.mjs --mode video --limit 10
 *   node scripts/generate-google-ai-batch.mjs --mode all --dry-run
 *
 * Flags:
 *   --mode        images | thumbnails | video | all (default: images)
 *   --limit       Max items per run (default: 50)
 *   --dry-run     Print plan without generating
 *   --module      Filter to specific module ID
 *   --skip-cached Skip lessons that already have a completed job
 *   --budget      Override max spend in USD (default: 300)
 */

import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

// ── ENV ─────────────────────────────────────────────────────────────────────

function parseEnvFile(envFilePath) {
  if (!fs.existsSync(envFilePath)) return {};
  const content = fs.readFileSync(envFilePath, "utf-8");
  const values = {};
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIndex = trimmed.indexOf("=");
    if (eqIndex < 0) continue;
    const key = trimmed.slice(0, eqIndex).trim();
    let val = trimmed.slice(eqIndex + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    values[key] = val;
  }
  return values;
}

const env = parseEnvFile(path.resolve(".env"));
const GOOGLE_API_KEY = env.GOOGLE_API_KEY || process.env.GOOGLE_API_KEY;
const SUPABASE_URL = env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta";

// ── CLI Args ────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = { mode: "images", limit: 50, dryRun: false, module: null, skipCached: true, budget: 300 };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--mode" && argv[i + 1]) args.mode = argv[++i];
    else if (a === "--limit" && argv[i + 1]) args.limit = parseInt(argv[++i], 10);
    else if (a === "--dry-run") args.dryRun = true;
    else if (a === "--module" && argv[i + 1]) args.module = argv[++i];
    else if (a === "--skip-cached") args.skipCached = true;
    else if (a === "--no-skip-cached") args.skipCached = false;
    else if (a === "--budget" && argv[i + 1]) args.budget = parseFloat(argv[++i]);
  }
  return args;
}

// ── Budget Tracker ──────────────────────────────────────────────────────────

class BudgetTracker {
  constructor(maxBudgetUSD) {
    this.maxBudget = maxBudgetUSD;
    this.spent = 0;
    this.items = [];
  }

  canSpend(costUSD) {
    return this.spent + costUSD <= this.maxBudget;
  }

  record(type, id, costUSD) {
    this.spent += costUSD;
    this.items.push({ type, id, costUSD, total: this.spent });
  }

  summary() {
    return {
      totalSpent: Math.round(this.spent * 100) / 100,
      budget: this.maxBudget,
      remaining: Math.round((this.maxBudget - this.spent) * 100) / 100,
      itemCount: this.items.length,
    };
  }
}

// ── Google AI API ───────────────────────────────────────────────────────────

async function generateImagenImage(prompt, { model = "imagen-4.0-fast-generate-001", aspectRatio = "4:3" } = {}) {
  const url = `${GEMINI_BASE}/models/${model}:predict?key=${GOOGLE_API_KEY}`;

  const body = {
    instances: [{ prompt }],
    parameters: {
      sampleCount: 1,
      aspectRatio,
      personGeneration: "allow_all",
      outputOptions: { mimeType: "image/png" },
    },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Imagen API ${res.status}: ${text.slice(0, 300)}`);
  }

  const data = await res.json();
  const prediction = data.predictions?.[0];
  if (!prediction?.bytesBase64Encoded) {
    throw new Error("Imagen returned no image data");
  }

  return Buffer.from(prediction.bytesBase64Encoded, "base64");
}

async function startVeoVideo(prompt, { model = "veo-3.1-fast-generate-preview", durationSeconds = 6 } = {}) {
  const url = `${GEMINI_BASE}/models/${model}:predictLongRunning?key=${GOOGLE_API_KEY}`;

  const body = {
    instances: [{ prompt }],
    parameters: {
      aspectRatio: "16:9",
      personGeneration: "allow_all",
      durationSeconds,
      sampleCount: 1,
    },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Veo API ${res.status}: ${text.slice(0, 300)}`);
  }

  const data = await res.json();
  return { operationName: data.name, done: data.done ?? false };
}

async function pollVeoOperation(operationName, { pollIntervalMs = 12_000, timeoutMs = 360_000 } = {}) {
  const start = Date.now();

  while (Date.now() - start < timeoutMs) {
    const url = `${GEMINI_BASE}/${operationName}?key=${GOOGLE_API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Veo poll ${res.status}`);

    const data = await res.json();
    if (data.done) {
      const sample = data.response?.generateVideoResponse?.generatedSamples?.[0];
      if (sample?.video?.bytesBase64Encoded) {
        return Buffer.from(sample.video.bytesBase64Encoded, "base64");
      }
      throw new Error("Veo completed but returned no video data");
    }

    console.log(`    [veo] polling... (${Math.round((Date.now() - start) / 1000)}s elapsed)`);
    await new Promise((r) => setTimeout(r, pollIntervalMs));
  }

  throw new Error(`Veo operation timed out after ${timeoutMs}ms`);
}

// ── File I/O ────────────────────────────────────────────────────────────────

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function saveMediaFile(buffer, dir, filename) {
  ensureDir(dir);
  const filePath = path.join(dir, filename);
  fs.writeFileSync(filePath, buffer);
  return filePath;
}

// ── Prompt Pack Loader ──────────────────────────────────────────────────────

function loadPromptPack() {
  const packPath = path.resolve("public/LESSON-MEDIA-PROMPT-PACK.json");
  if (!fs.existsSync(packPath)) {
    throw new Error(`Prompt pack not found at ${packPath}`);
  }
  return JSON.parse(fs.readFileSync(packPath, "utf-8"));
}

// ── Job Queue Helpers ───────────────────────────────────────────────────────

async function getCompletedJobs(supabase, assetType) {
  const completed = new Set();
  let offset = 0;
  const pageSize = 1000;
  while (true) {
    const { data, error } = await supabase
      .from("media_generation_jobs")
      .select("lesson_id, module_id")
      .eq("asset_type", assetType)
      .eq("status", "completed")
      .range(offset, offset + pageSize - 1);

    if (error) throw error;
    if (!data || data.length === 0) break;
    for (const row of data) {
      completed.add(`${row.module_id}::${row.lesson_id}`);
    }
    offset += pageSize;
    if (data.length < pageSize) break;
  }
  return completed;
}

async function upsertJob(supabase, { moduleId, lessonId, assetType, prompt, status, outputUrl, metadata }) {
  const payload = {
    module_id: moduleId,
    lesson_id: lessonId,
    asset_type: assetType,
    prompt: prompt?.slice(0, 2000),
    status,
    output_url: outputUrl || null,
    metadata: metadata || {},
    ...(status === "completed" ? { completed_at: new Date().toISOString() } : {}),
  };

  // Try insert, update on conflict
  const { error: insertError } = await supabase.from("media_generation_jobs").insert(payload);
  if (insertError) {
    // If duplicate, update instead
    const { error: updateError } = await supabase
      .from("media_generation_jobs")
      .update(payload)
      .eq("module_id", moduleId)
      .eq("lesson_id", lessonId)
      .eq("asset_type", assetType)
      .in("status", ["queued", "failed"]);
    if (updateError) console.warn(`  [db] upsert warn: ${updateError.message}`);
  }
}

// ── Priority Video Module Selection ─────────────────────────────────────────

/** Modules to get Veo concept clips — highest-impact content first */
const VEO_PRIORITY_MODULES = [
  // Pre-K (ages 3-5) — visual learning is paramount
  "pre-k-basic-math-101", "pre-k-language-arts-101", "pre-k-general-science-101",
  "pre-k-biology-101", "pre-k-chemistry-101", "pre-k-physics-101", "pre-k-astronomy-101",
  "pre-k-geography-101", "pre-k-social-studies-us-101", "pre-k-arts-101", "pre-k-coding-101",
  // K-2 (ages 5-8)
  "math-101", "english-language-arts-101", "general-science-101",
  // 3-5 (ages 8-11)
  "math-201", "english-language-arts-201", "general-science-201",
  // Middle school
  "math-301", "biology-301", "chemistry-301", "physics-301",
];

// ── Main Generators ─────────────────────────────────────────────────────────

async function runImageGeneration(supabase, promptPack, args, budget) {
  const completedKeys = args.skipCached ? await getCompletedJobs(supabase, "image") : new Set();
  console.log(`[images] ${completedKeys.size} already completed, will skip`);

  let processed = 0;
  const costPerImage = 0.02; // Imagen 4 Fast

  for (const mod of promptPack.modules) {
    if (args.module && mod.moduleId !== args.module) continue;
    if (processed >= args.limit) break;

    for (const lesson of mod.lessons) {
      if (processed >= args.limit) break;
      const key = `${mod.moduleId}::${lesson.lessonId}`;
      if (completedKeys.has(key)) continue;
      if (!budget.canSpend(costPerImage)) {
        console.log(`[budget] exhausted at $${budget.spent.toFixed(2)} — stopping`);
        return;
      }

      const prompt = lesson.prompts?.lessonImage;
      if (!prompt) continue;

      console.log(`[${processed + 1}/${args.limit}] ${lesson.lessonId}: generating image...`);

      if (args.dryRun) {
        console.log(`  [dry-run] would generate: ${prompt.slice(0, 80)}...`);
        budget.record("image", lesson.lessonId, costPerImage);
        processed++;
        continue;
      }

      try {
        const imageBuffer = await generateImagenImage(prompt, { aspectRatio: "4:3" });
        const filename = `${lesson.lessonId}_google.png`;
        const savedPath = saveMediaFile(imageBuffer, path.resolve("public/generated-images"), filename);
        const outputUrl = `/generated-images/${filename}`;

        await upsertJob(supabase, {
          moduleId: mod.moduleId,
          lessonId: lesson.lessonId,
          assetType: "image",
          prompt,
          status: "completed",
          outputUrl,
          metadata: { provider: "google-imagen-4-fast", model: "imagen-4.0-fast-generate-001", costUSD: costPerImage },
        });

        budget.record("image", lesson.lessonId, costPerImage);
        processed++;
        console.log(`  [ok] saved to ${savedPath}`);

        // Rate limiting: 10 images/min for Imagen 4
        await new Promise((r) => setTimeout(r, 6500));
      } catch (err) {
        console.error(`  [fail] ${lesson.lessonId}: ${err.message}`);
        await upsertJob(supabase, {
          moduleId: mod.moduleId,
          lessonId: lesson.lessonId,
          assetType: "image",
          prompt,
          status: "failed",
          metadata: { provider: "google-imagen-4-fast", error: err.message },
        });
        // On quota errors, wait 60s and retry once
        if (err.message.includes("429") || err.message.includes("quota")) {
          console.log("[quota] rate limited — waiting 60s then retrying...");
          await new Promise((r) => setTimeout(r, 60_000));
          try {
            const retryBuf = await generateImagenImage(prompt, { aspectRatio: "4:3" });
            const fn = `${lesson.lessonId}_google.png`;
            saveMediaFile(retryBuf, path.resolve("public/generated-images"), fn);
            console.log(`  [ok] retry succeeded: ${fn}`);
            processed++;
          } catch {
            console.log("[quota] retry failed — stopping batch. Re-run later.");
            return;
          }
        }
      }
    }
  }

  console.log(`[images] processed ${processed} lessons`);
}

async function runThumbnailGeneration(supabase, promptPack, args, budget) {
  const completedKeys = args.skipCached ? await getCompletedJobs(supabase, "thumbnail") : new Set();
  console.log(`[thumbnails] ${completedKeys.size} already completed, will skip`);

  let processed = 0;
  const costPerImage = 0.02;

  for (const mod of promptPack.modules) {
    if (args.module && mod.moduleId !== args.module) continue;
    if (processed >= args.limit) break;
    const key = `${mod.moduleId}::${mod.moduleId}-thumb`;
    if (completedKeys.has(key)) continue;
    if (!budget.canSpend(costPerImage)) {
      console.log(`[budget] exhausted — stopping`);
      return;
    }

    // Build a module thumbnail prompt
    const prompt = [
      `Educational module cover illustration for "${mod.moduleTitle}".`,
      `Subject: ${mod.subject}. Target age: ${mod.minAge}-${mod.maxAge}.`,
      `Style: modern, clean, professional course thumbnail. Bold visual metaphor for the subject.`,
      `Composition: one dominant icon or scene representing ${mod.subject}, clean gradient background.`,
      `No text overlays. No logos. No copyrighted characters. High contrast. 16:9 aspect ratio.`,
      `Cinematic, 8K quality, polished design suitable for an education platform card.`,
    ].join(" ");

    console.log(`[${processed + 1}/${args.limit}] ${mod.moduleId}: generating thumbnail...`);

    if (args.dryRun) {
      console.log(`  [dry-run] would generate thumbnail for ${mod.moduleTitle}`);
      budget.record("thumbnail", mod.moduleId, costPerImage);
      processed++;
      continue;
    }

    try {
      const imageBuffer = await generateImagenImage(prompt, { aspectRatio: "16:9" });
      const filename = `${mod.moduleId}_thumb.png`;
      const savedPath = saveMediaFile(imageBuffer, path.resolve("public/generated-images/thumbnails"), filename);
      const outputUrl = `/generated-images/thumbnails/${filename}`;

      await upsertJob(supabase, {
        moduleId: mod.moduleId,
        lessonId: `${mod.moduleId}-thumb`,
        assetType: "thumbnail",
        prompt,
        status: "completed",
        outputUrl,
        metadata: { provider: "google-imagen-4-fast", type: "module-thumbnail", costUSD: costPerImage },
      });

      budget.record("thumbnail", mod.moduleId, costPerImage);
      processed++;
      console.log(`  [ok] saved to ${savedPath}`);
      await new Promise((r) => setTimeout(r, 6500));
    } catch (err) {
      console.error(`  [fail] ${mod.moduleId}: ${err.message}`);
      if (err.message.includes("429") || err.message.includes("quota")) {
        console.log("[quota] rate limited — waiting 60s then retrying...");
        await new Promise((r) => setTimeout(r, 60_000));
        try {
          const retryBuf = await generateImagenImage(prompt, { aspectRatio: "16:9" });
          const fn = `${mod.moduleId}_thumb.png`;
          saveMediaFile(retryBuf, path.resolve("public/generated-images/thumbnails"), fn);
          console.log(`  [ok] retry succeeded: ${fn}`);
          processed++;
        } catch {
          console.log("[quota] retry failed — stopping. Re-run later.");
          return;
        }
      }
    }
  }

  console.log(`[thumbnails] processed ${processed} modules`);
}

async function runVideoGeneration(supabase, promptPack, args, budget) {
  const completedKeys = args.skipCached ? await getCompletedJobs(supabase, "concept-clip") : new Set();
  console.log(`[video] ${completedKeys.size} already completed, will skip`);

  let processed = 0;
  const costPerClip = 0.60; // Veo 3.1 Fast, 6 sec
  const veoModuleSet = new Set(VEO_PRIORITY_MODULES);

  for (const mod of promptPack.modules) {
    if (args.module && mod.moduleId !== args.module) continue;
    if (processed >= args.limit) break;
    if (!veoModuleSet.has(mod.moduleId) && !args.module) continue;

    for (const lesson of mod.lessons) {
      if (processed >= args.limit) break;
      const key = `${mod.moduleId}::${lesson.lessonId}`;
      if (completedKeys.has(key)) continue;
      if (!budget.canSpend(costPerClip)) {
        console.log(`[budget] exhausted at $${budget.spent.toFixed(2)} — stopping`);
        return;
      }

      // Build Veo prompt from lesson data
      const ageRange = `${mod.minAge}-${mod.maxAge}`;
      const style = mod.minAge <= 5
        ? "Bright, colorful 3D animated style. Cheerful, rounded shapes. Slow, gentle camera movement."
        : "Clean, educational animation style. Clear visual demonstration.";

      const prompt = [
        `Short educational concept animation for "${lesson.lessonTitle}".`,
        `Subject: ${mod.subject}. Age: ${ageRange}.`,
        `Visually demonstrate the core concept of this lesson.`,
        style,
        `Camera: smooth, slow pan or gentle zoom. Duration: 6 seconds.`,
        `Child-safe. No violence. No fear imagery. No copyrighted characters. Classroom-appropriate.`,
      ].join(" ");

      console.log(`[${processed + 1}/${args.limit}] ${lesson.lessonId}: generating concept clip...`);

      if (args.dryRun) {
        console.log(`  [dry-run] would generate Veo clip (~$${costPerClip})`);
        budget.record("video", lesson.lessonId, costPerClip);
        processed++;
        continue;
      }

      try {
        const { operationName } = await startVeoVideo(prompt, { durationSeconds: 6 });
        console.log(`  [veo] started operation: ${operationName}`);
        const videoBuffer = await pollVeoOperation(operationName);
        const filename = `${lesson.lessonId}_concept.mp4`;
        const savedPath = saveMediaFile(videoBuffer, path.resolve("public/generated-videos"), filename);
        const outputUrl = `/generated-videos/${filename}`;

        await upsertJob(supabase, {
          moduleId: mod.moduleId,
          lessonId: lesson.lessonId,
          assetType: "concept-clip",
          prompt,
          status: "completed",
          outputUrl,
          metadata: { provider: "google-veo-3.1-fast", durationSeconds: 6, costUSD: costPerClip },
        });

        budget.record("video", lesson.lessonId, costPerClip);
        processed++;
        console.log(`  [ok] saved to ${savedPath}`);

        // Rate limiting: Veo has tighter limits
        await new Promise((r) => setTimeout(r, 5000));
      } catch (err) {
        console.error(`  [fail] ${lesson.lessonId}: ${err.message}`);
        await upsertJob(supabase, {
          moduleId: mod.moduleId,
          lessonId: lesson.lessonId,
          assetType: "concept-clip",
          prompt,
          status: "failed",
          metadata: { provider: "google-veo-3.1-fast", error: err.message },
        });
        if (err.message.includes("429") || err.message.includes("quota")) {
          console.log("[quota] rate limited — stopping. Re-run later.");
          return;
        }
      }
    }
  }

  console.log(`[video] processed ${processed} clips`);
}

// ── Entry Point ─────────────────────────────────────────────────────────────

async function main() {
  const args = parseArgs(process.argv);

  console.log("═══════════════════════════════════════════════════════════");
  console.log(" FORGE — Google AI Batch Media Generator");
  console.log("═══════════════════════════════════════════════════════════");
  console.log(`Mode: ${args.mode} | Limit: ${args.limit} | Budget: $${args.budget}`);
  console.log(`Dry run: ${args.dryRun} | Skip cached: ${args.skipCached}`);
  if (args.module) console.log(`Filter: ${args.module}`);
  console.log("");

  if (!GOOGLE_API_KEY) {
    console.error("[fatal] GOOGLE_API_KEY not set. Add to .env file.");
    process.exit(1);
  }
  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    console.error("[fatal] SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY required.");
    process.exit(1);
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
  const promptPack = loadPromptPack();
  const budget = new BudgetTracker(args.budget);

  console.log(`Loaded prompt pack: ${promptPack.totals.modules} modules, ${promptPack.totals.lessons} lessons`);
  console.log("");

  if (args.mode === "images" || args.mode === "all") {
    await runImageGeneration(supabase, promptPack, args, budget);
  }
  if (args.mode === "thumbnails" || args.mode === "all") {
    await runThumbnailGeneration(supabase, promptPack, args, budget);
  }
  if (args.mode === "video" || args.mode === "all") {
    await runVideoGeneration(supabase, promptPack, args, budget);
  }

  console.log("");
  console.log("═══════════════════════════════════════════════════════════");
  console.log(" Budget Summary");
  console.log("═══════════════════════════════════════════════════════════");
  const summary = budget.summary();
  console.log(`  Spent:     $${summary.totalSpent.toFixed(2)}`);
  console.log(`  Budget:    $${summary.budget.toFixed(2)}`);
  console.log(`  Remaining: $${summary.remaining.toFixed(2)}`);
  console.log(`  Items:     ${summary.itemCount}`);
  console.log("");

  // Save budget report
  const reportPath = path.resolve("public/GOOGLE-AI-BUDGET-REPORT.json");
  fs.writeFileSync(reportPath, JSON.stringify({ ...summary, items: budget.items, generatedAt: new Date().toISOString() }, null, 2));
  console.log(`Budget report saved to ${reportPath}`);
}

main().catch((err) => {
  console.error("[fatal]", err);
  process.exit(1);
});
