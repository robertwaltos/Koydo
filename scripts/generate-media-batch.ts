/**
 * generate-media-batch.ts
 *
 * FORGE cloud media batch generator for Koydo.
 * Imagen 4 (thumbnails / lesson illustrations), HeyGen (avatar intros),
 * Veo 3.1 (concept clips — expensive, use carefully).
 *
 * ── DATA SOURCE ───────────────────────────────────────────────────────────
 *   Reads from public/LESSON-MEDIA-PROMPT-PACK.json (207 modules, 2,514 lessons).
 *   Lesson image prompts are pre-built in the pack — high quality, no re-generation needed.
 *   Run `npm run prompts:lesson-media` if the pack appears stale.
 *
 * ── MODES ─────────────────────────────────────────────────────────────────
 *   thumbnails      1× 16:9 Imagen 4 Fast per module        ~$0.02/img
 *   illustrations   1× 3:2  Imagen 4 Fast per LESSON        ~$0.02/img
 *   intros          1× HeyGen Avatar III intro per module    ~$1.00/min
 *   concept-clips   1× Veo 3.1 Fast 6-sec clip per MODULE   ~$0.60/clip  ⚠️
 *   storyforge      Imagen 4 Standard scene images           ~$0.04/img
 *
 * ── USAGE ─────────────────────────────────────────────────────────────────
 *   npx tsx scripts/generate-media-batch.ts --mode thumbnails [--limit 20] [--dry-run]
 *   npx tsx scripts/generate-media-batch.ts --mode illustrations [--limit 100]
 *   npx tsx scripts/generate-media-batch.ts --mode intros --dry-run
 *   npx tsx scripts/generate-media-batch.ts --mode concept-clips --limit 5 --confirm-expensive
 *   npx tsx scripts/generate-media-batch.ts --mode storyforge --book-slug alice-wonderland
 *
 * ── GOOGLE $300 CREDIT RECOMMENDED ALLOCATION ─────────────────────────────
 *   thumbnails:      207 modules  × $0.02                    =   $4.14
 *   illustrations:   2,514 lessons × $0.02                   =  $50.28
 *   storyforge:      ~100 scenes  × $0.04                    =   $4.00
 *   reserve:         Google TTS / first-frame / buffer        = ~$242
 *   TOTAL USED:                                                 ~$58
 *
 *   ⚠️  DO NOT run concept-clips without --confirm-expensive.
 *       207 modules × 6s × $0.10/s = $124 per-module basis.
 *       2,514 per-lesson = $1,508. DEFER until separately budgeted.
 *
 * ── HEYGEN NOTE ───────────────────────────────────────────────────────────
 *   Only 26 modules are in the initial HeyGen batch (avatar-course-map.ts).
 *   2 avatar IDs (Aria + Kai) across 7 persona types.
 *   Cost: 26 × ~80 sec × $0.0167/sec ≈ $35 — NOT $300.
 *   The "$300" is the HeyGen credit LIMIT, not the count of videos needed.
 *   HeyGen balance is used incrementally as you add more mapped modules.
 */

import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import {
  generateImage,
  generateVideo,
  pollVideoOperation,
  estimateImagenCost,
  estimateVeoCost,
  buildConceptVideoPrompt,
} from "../src/lib/forge/media/google-ai-client";
import {
  generateAvatarVideo,
  waitForVideo,
  estimateBatchCost,
} from "../src/lib/forge/media/heygen-client";
import {
  getInitialBatchModuleIds,
  getAvatarForModule,
} from "../src/lib/forge/media/avatar-course-map";

// ── ENV ────────────────────────────────────────────────────────────────────

function loadEnv() {
  for (const name of [".env.local", ".env"]) {
    const p = resolve(__dirname, "..", name);
    if (!existsSync(p)) continue;
    const raw = readFileSync(p, "utf8");
    for (const line of raw.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq < 1) continue;
      const key = trimmed.slice(0, eq).trim();
      const val = trimmed.slice(eq + 1).trim().replace(/^(['"])(.*)\1$/, "$2");
      if (!(key in process.env)) process.env[key] = val;
    }
  }
}
loadEnv();

// ── PROMPT PACK TYPES ──────────────────────────────────────────────────────

interface PackLesson {
  lessonId: string;
  lessonTitle: string;
  lessonType: string;
  durationMinutes: number;
  prompts: {
    lessonImage: string;
    seedanceVideo?: string;
    seedanceAnimation?: string;
    researchAgent?: string;
  };
}

interface PackModule {
  moduleId: string;
  moduleTitle: string;
  subject: string;
  minAge: number;
  maxAge: number;
  lessonCount: number;
  lessons: PackLesson[];
}

interface PromptPack {
  modules: PackModule[];
}

function loadPromptPack(): PromptPack {
  const packPath = resolve(__dirname, "..", "public", "LESSON-MEDIA-PROMPT-PACK.json");
  if (!existsSync(packPath)) {
    throw new Error(
      `Missing ${packPath}.\nRun: npm run prompts:lesson-media`
    );
  }
  return JSON.parse(readFileSync(packPath, "utf8")) as PromptPack;
}

// ── CLI ARGS ───────────────────────────────────────────────────────────────

type Mode = "thumbnails" | "illustrations" | "intros" | "concept-clips" | "storyforge";

interface Args {
  mode: Mode;
  limit: number;
  dryRun: boolean;
  moduleId?: string;
  bookSlug?: string;
  confirmExpensive: boolean;
}

function parseArgs(): Args {
  const argv = process.argv.slice(2);
  const args: Partial<Args> = { limit: 50, dryRun: false, confirmExpensive: false };

  for (let i = 0; i < argv.length; i++) {
    switch (argv[i]) {
      case "--mode":              args.mode = argv[++i] as Mode; break;
      case "--limit":             args.limit = parseInt(argv[++i], 10); break;
      case "--dry-run":           args.dryRun = true; break;
      case "--module":            args.moduleId = argv[++i]; break;
      case "--book-slug":         args.bookSlug = argv[++i]; break;
      case "--confirm-expensive": args.confirmExpensive = true; break;
      case "--help":
        printHelp();
        process.exit(0);
        break;
    }
  }

  if (!args.mode) {
    console.error("❌  --mode is required. Run with --help for usage.");
    process.exit(1);
  }

  return args as Args;
}

function printHelp() {
  console.log(`
FORGE cloud media batch generator

Usage:
  npx tsx scripts/generate-media-batch.ts --mode <mode> [options]

Modes:
  thumbnails      16:9 module card image     (Imagen 4 Fast,     $0.02/img)
  illustrations   3:2 lesson illustration    (Imagen 4 Fast,     $0.02/img)
  intros          Avatar intro video          (HeyGen Avatar III, ~$1.00/min)
  concept-clips   6-sec concept clip          (Veo 3.1 Fast,      $0.60/clip)  ⚠️
  storyforge      Scene images for books      (Imagen 4 Standard, $0.04/img)

Options:
  --limit <n>           Max modules/lessons to process this run (default: 50)
  --dry-run             Print cost estimate only — no API calls made
  --module <id>         Scope to one specific module only
  --book-slug <slug>    storyforge mode: which book to generate scene images for
  --confirm-expensive   Required for concept-clips to prevent accidental spend
  --help                Show this message

Scale reference:
  207 modules, 2,514 lessons  (from public/LESSON-MEDIA-PROMPT-PACK.json)

Recommended Google $300 credit allocation:
  thumbnails:      207   × $0.02    = $4.14
  illustrations:   2,514 × $0.02    = $50.28
  storyforge dev:  ~100  × $0.04    = $4.00
  reserve:         Google TTS / first-frames / buffer = ~$242
  TOTAL USED: ~$58 of $300

Examples:
  # Dry-run thumbnails for all 207 modules
  npx tsx scripts/generate-media-batch.ts --mode thumbnails --limit 207 --dry-run

  # Run thumbnails for all modules (costs ~$4.14)
  npx tsx scripts/generate-media-batch.ts --mode thumbnails --limit 207

  # Illustrations in safe batches of 200 lessons (~$4 per batch)
  npx tsx scripts/generate-media-batch.ts --mode illustrations --limit 200

  # HeyGen intros for the 26 initial-batch modules
  npx tsx scripts/generate-media-batch.ts --mode intros --dry-run
  npx tsx scripts/generate-media-batch.ts --mode intros

  # Concept clips — explicit confirm required (expensive!)
  npx tsx scripts/generate-media-batch.ts --mode concept-clips --limit 5 --confirm-expensive

  # StoryForge — dry-run first
  npx tsx scripts/generate-media-batch.ts --mode storyforge --book-slug alice-wonderland --dry-run
`);
}

// ── SUPABASE ───────────────────────────────────────────────────────────────

function createSupabase(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.EXPO_PUBLIC_SUPABASE_URL ?? "";
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
  if (!url || !key) throw new Error("SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY missing in .env");
  return createClient(url, key);
}

// ── JOB HELPERS ────────────────────────────────────────────────────────────

interface MediaJob {
  module_id: string;
  lesson_id?: string | null;
  asset_type: "image" | "video";
  provider: string;
  status: "pending" | "processing" | "completed" | "failed";
  prompt: string;
  output_url?: string;
  completed_at?: string;
  error?: string;
  metadata?: Record<string, unknown>;
}

/** Returns the cached output_url if a completed job exists, otherwise undefined. */
async function findCachedJob(
  supabase: SupabaseClient,
  moduleId: string,
  assetType: "image" | "video",
  provider: string,
  lessonId?: string | null,
): Promise<string | undefined> {
  let query = supabase
    .from("media_generation_jobs")
    .select("output_url")
    .eq("module_id", moduleId)
    .eq("asset_type", assetType)
    .eq("provider", provider)
    .eq("status", "completed")
    .not("output_url", "is", null);

  if (lessonId) {
    query = query.eq("lesson_id", lessonId);
  } else {
    query = query.is("lesson_id", null);
  }

  const { data } = await query.limit(1).maybeSingle();
  return (data as { output_url?: string } | null)?.output_url;
}

async function insertJob(supabase: SupabaseClient, job: MediaJob): Promise<string> {
  const { data, error } = await supabase
    .from("media_generation_jobs")
    .insert(job)
    .select("id")
    .single();
  if (error) throw new Error(`Failed to insert job: ${error.message}`);
  return (data as { id: string }).id;
}

async function updateJob(
  supabase: SupabaseClient,
  id: string,
  patch: Partial<MediaJob>,
): Promise<void> {
  const { error } = await supabase.from("media_generation_jobs").update(patch).eq("id", id);
  if (error) throw new Error(`Failed to update job ${id}: ${error.message}`);
}

/** Upload base64 bytes to Supabase Storage, return public URL. */
async function uploadToStorage(
  supabase: SupabaseClient,
  bucket: string,
  storagePath: string,
  base64Data: string,
  mimeType: string,
): Promise<string> {
  const buffer = Buffer.from(base64Data, "base64");
  const { error } = await supabase.storage
    .from(bucket)
    .upload(storagePath, buffer, { contentType: mimeType, upsert: true });
  if (error) throw new Error(`Storage upload failed (${storagePath}): ${error.message}`);
  const { data } = supabase.storage.from(bucket).getPublicUrl(storagePath);
  return data.publicUrl;
}

// ── COUNTERS ───────────────────────────────────────────────────────────────

let totalCostUSD = 0;
let generated = 0;
let skipped = 0;
let failed = 0;

// ── MODE: THUMBNAILS ───────────────────────────────────────────────────────

function buildThumbnailPrompt(mod: PackModule): string {
  const ageRange = `${mod.minAge}-${mod.maxAge}`;
  const style =
    mod.maxAge <= 5
      ? "bright, cheerful children's illustration with rounded shapes and warm colors"
      : mod.maxAge <= 8
        ? "colorful, friendly educational illustration, cheerful and engaging"
        : "modern, clean educational photograph or crisp digital illustration";

  return [
    `Course card thumbnail for "${mod.moduleTitle}".`,
    `Subject: ${mod.subject}. Age range: ${ageRange}.`,
    `Style: ${style}. Landscape 16:9 orientation.`,
    `Composition: one bold central visual that represents this subject clearly.`,
    `Child-safe. No text overlays. No logos. No copyrighted characters.`,
    `High contrast. Bright lighting. Vibrant. Professional quality.`,
  ].join(" ");
}

async function runThumbnails(args: Args, supabase: SupabaseClient, pack: PromptPack) {
  console.log("\n📸  MODE: thumbnails  (Imagen 4 Fast @ $0.02/img)\n");

  let modules = args.moduleId
    ? pack.modules.filter((m) => m.moduleId === args.moduleId)
    : pack.modules;
  modules = modules.slice(0, args.limit);

  const costEst = estimateImagenCost(modules.length, "imagen-4.0-fast-generate-001");
  console.log(
    `Processing ${modules.length} of ${pack.modules.length} modules\n` +
    `💰  Estimated cost: $${costEst.totalCostUSD.toFixed(2)}  (${modules.length} × $${costEst.costPerImage})\n`,
  );

  if (args.dryRun) { console.log("[dry-run] No API calls made.\n"); return; }

  for (const mod of modules) {
    const cached = await findCachedJob(supabase, mod.moduleId, "image", "google-imagen-thumbnail");
    if (cached) { console.log(`  SKIP  ${mod.moduleId}`); skipped++; continue; }

    const prompt = buildThumbnailPrompt(mod);
    const jobId = await insertJob(supabase, {
      module_id: mod.moduleId,
      asset_type: "image",
      provider: "google-imagen-thumbnail",
      status: "processing",
      prompt,
      metadata: { moduleTitle: mod.moduleTitle, subject: mod.subject },
    });

    try {
      console.log(`  GEN   ${mod.moduleId}  —  ${mod.moduleTitle.slice(0, 48)}`);
      const result = await generateImage({
        prompt,
        model: "imagen-4.0-fast-generate-001",
        aspectRatio: "16:9",
        numberOfImages: 1,
        personGeneration: "allow_all",
        metadata: { moduleId: mod.moduleId, lessonId: "", promptType: "thumbnail" },
      });

      const img = result.images[0];
      if (!img) throw new Error("Imagen returned no images");

      const storagePath = `google-imagen/thumbnails/${mod.moduleId}.png`;
      const url = await uploadToStorage(supabase, "media", storagePath, img.imageData, img.mimeType);

      await updateJob(supabase, jobId, {
        status: "completed",
        output_url: url,
        completed_at: new Date().toISOString(),
        metadata: { model: result.model },
      });

      totalCostUSD += 0.02;
      generated++;
      console.log(`         ✅  ${url.slice(-60)}`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      await updateJob(supabase, jobId, { status: "failed", error: msg });
      console.log(`         ❌  ${msg.slice(0, 120)}`);
      failed++;
    }
  }
}

// ── MODE: ILLUSTRATIONS ────────────────────────────────────────────────────

async function runIllustrations(args: Args, supabase: SupabaseClient, pack: PromptPack) {
  console.log("\n🎨  MODE: illustrations  (Imagen 4 Fast @ $0.02/img, 1 per lesson)\n");
  console.log("   Uses pre-built lesson image prompts from LESSON-MEDIA-PROMPT-PACK.json\n");

  // Flatten all lessons, filter by module if requested, apply limit
  type LessonEntry = { mod: PackModule; lesson: PackLesson };
  const allLessons: LessonEntry[] = [];
  for (const mod of pack.modules) {
    if (args.moduleId && mod.moduleId !== args.moduleId) continue;
    for (const lesson of mod.lessons) allLessons.push({ mod, lesson });
  }
  const batch = allLessons.slice(0, args.limit);

  const totalLessons = pack.modules.reduce((s, m) => s + m.lessonCount, 0);
  const costEst = estimateImagenCost(batch.length, "imagen-4.0-fast-generate-001");
  console.log(
    `Processing ${batch.length} of ${totalLessons} total lessons\n` +
    `💰  Estimated cost: $${costEst.totalCostUSD.toFixed(2)}  (${batch.length} × $${costEst.costPerImage})\n`,
  );

  if (args.dryRun) { console.log("[dry-run] No API calls made.\n"); return; }

  for (const { mod, lesson } of batch) {
    const cached = await findCachedJob(
      supabase, mod.moduleId, "image", "google-imagen-illustration", lesson.lessonId
    );
    if (cached) { skipped++; continue; }

    const prompt = lesson.prompts.lessonImage;
    if (!prompt) {
      console.log(`  SKIP  ${lesson.lessonId}  (no lessonImage prompt in pack)`);
      skipped++;
      continue;
    }

    const jobId = await insertJob(supabase, {
      module_id: mod.moduleId,
      lesson_id: lesson.lessonId,
      asset_type: "image",
      provider: "google-imagen-illustration",
      status: "processing",
      prompt,
      metadata: { lessonTitle: lesson.lessonTitle, subject: mod.subject },
    });

    try {
      console.log(`  GEN   ${lesson.lessonId}  —  ${lesson.lessonTitle.slice(0, 48)}`);
      const result = await generateImage({
        prompt,
        model: "imagen-4.0-fast-generate-001",
        aspectRatio: "3:2",
        numberOfImages: 1,
        personGeneration: "allow_all",
        metadata: { moduleId: mod.moduleId, lessonId: lesson.lessonId, promptType: "illustration" },
      });

      const img = result.images[0];
      if (!img) throw new Error("Imagen returned no images");

      const storagePath = `google-imagen/illustrations/${mod.moduleId}/${lesson.lessonId}.png`;
      const url = await uploadToStorage(supabase, "media", storagePath, img.imageData, img.mimeType);

      await updateJob(supabase, jobId, {
        status: "completed",
        output_url: url,
        completed_at: new Date().toISOString(),
        metadata: { model: result.model },
      });

      totalCostUSD += 0.02;
      generated++;
      console.log(`         ✅  ${url.slice(-60)}`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      await updateJob(supabase, jobId, { status: "failed", error: msg });
      console.log(`         ❌  ${msg.slice(0, 120)}`);
      failed++;
    }
  }
}

// ── MODE: HEYGEN INTROS ────────────────────────────────────────────────────

function buildIntroScript(personaKey: string, moduleTitle: string): string {
  const taglines: Record<string, string> = {
    "prek-math":        "counting, sorting, and exploring numbers — one step at a time",
    "prek-language":    "reading, writing, and discovering exciting new words every day",
    "prek-science":     "exploring the amazing world around us — from tiny bugs to giant stars",
    "prek-social":      "learning about our community, our world, and the history that shaped us",
    "prek-creative":    "imagining, creating, and expressing yourself through art and ideas",
    "prek-life-skills": "practising real skills that help us every day, at home and in the world",
    "k2-general":       "building on your knowledge lesson by lesson, stronger every day",
  };
  const tagline = taglines[personaKey] ?? "learning and growing every single day";
  return (
    `Hi there! Welcome to ${moduleTitle}. ` +
    `I am so excited to be your guide as we explore ${tagline}. ` +
    `Each lesson is designed to be fun, clear, and built just for you. ` +
    `Let us get started — I will be right here with you every step of the way!`
  );
}

async function runIntros(args: Args, supabase: SupabaseClient) {
  console.log("\n🎬  MODE: intros  (HeyGen Avatar III @ ~$1.00/min)\n");
  console.log("   Only processes modules in the initial batch (avatar-course-map.ts)\n");

  let moduleIds = getInitialBatchModuleIds();
  if (args.moduleId) moduleIds = moduleIds.filter((id) => id === args.moduleId);
  moduleIds = moduleIds.slice(0, args.limit);

  // buildIntroScript produces ~250 chars; estimateBatchCost takes char lengths
  const avgScriptLen = 250;
  const costEst = estimateBatchCost(moduleIds.map(() => avgScriptLen));
  console.log(
    `${moduleIds.length} modules in initial batch  (of ${getInitialBatchModuleIds().length} total)\n` +
    `💰  Estimated cost: $${costEst.estimatedCostUSD.toFixed(2)}\n` +
    `    HeyGen credit consumed: ${((costEst.estimatedCostUSD / 300) * 100).toFixed(1)}% of $300 limit\n`,
  );

  if (args.dryRun) {
    console.log("Initial-batch modules:");
    for (const id of moduleIds) {
      const p = getAvatarForModule(id);
      console.log(`  ${id.padEnd(44)} → ${p?.key ?? "⚠️  no persona"}`);
    }
    console.log("\n[dry-run] No API calls made.\n");
    return;
  }

  for (const moduleId of moduleIds) {
    const persona = getAvatarForModule(moduleId);
    if (!persona) { console.log(`  SKIP  ${moduleId}  (no avatar persona)`); skipped++; continue; }

    const cached = await findCachedJob(supabase, moduleId, "video", "heygen-intro");
    if (cached) { console.log(`  SKIP  ${moduleId}  (cached)`); skipped++; continue; }

    const script = buildIntroScript(persona.key, moduleId.replace(/-/g, " "));
    const jobId = await insertJob(supabase, {
      module_id: moduleId,
      asset_type: "video",
      provider: "heygen-intro",
      status: "processing",
      prompt: script,
      metadata: { avatarId: persona.avatarId, voiceId: persona.voiceId, personaKey: persona.key },
    });

    try {
      console.log(`  GEN   ${moduleId}  →  ${persona.avatarId}`);
      const { videoId } = await generateAvatarVideo({
        moduleId,
        lessonId: "intro",
        script,
        title: `${moduleId} — Intro`,
        captions: true,
      });

      console.log(`         ⏳  HeyGen job queued: ${videoId}`);
      const status = await waitForVideo(videoId, { timeoutMs: 10 * 60 * 1000 });
      if (!status.videoUrl) throw new Error("No video URL after completion");

      await updateJob(supabase, jobId, {
        status: "completed",
        output_url: status.videoUrl,
        completed_at: new Date().toISOString(),
        metadata: { videoId, duration: status.duration, avatarId: persona.avatarId },
      });

      const approxCost = (status.duration ?? 80) * 0.0167;
      totalCostUSD += approxCost;
      generated++;
      console.log(`         ✅  ${status.duration}s  $${approxCost.toFixed(2)}  ${status.videoUrl.slice(0, 55)}`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      await updateJob(supabase, jobId, { status: "failed", error: msg });
      console.log(`         ❌  ${msg.slice(0, 120)}`);
      failed++;
    }
  }
}

// ── MODE: CONCEPT CLIPS ────────────────────────────────────────────────────

async function runConceptClips(args: Args, supabase: SupabaseClient, pack: PromptPack) {
  if (!args.confirmExpensive) {
    console.error(
      "\n⚠️  EXPENSIVE: concept-clips costs ~$0.60 per clip (Veo 3.1 Fast, 6 sec).\n" +
      `   Full catalog (${pack.modules.length} modules) = $${(pack.modules.length * 0.6).toFixed(0)}\n` +
      "   Use --limit to test a small batch first, then add --confirm-expensive.\n",
    );
    process.exit(1);
  }

  console.log("\n🎥  MODE: concept-clips  (Veo 3.1 Fast @ $0.10/sec, 6 sec = $0.60/clip)\n");

  let modules = args.moduleId
    ? pack.modules.filter((m) => m.moduleId === args.moduleId)
    : pack.modules;
  modules = modules.slice(0, args.limit);

  const costEst = estimateVeoCost(modules.length, 6, "veo-3.1-fast-generate-preview");
  console.log(
    `Processing ${modules.length} modules\n` +
    `💰  Estimated cost: $${costEst.totalCostUSD.toFixed(2)}\n`,
  );

  if (args.dryRun) { console.log("[dry-run] No API calls made.\n"); return; }

  for (const mod of modules) {
    const cached = await findCachedJob(supabase, mod.moduleId, "video", "google-veo");
    if (cached) { skipped++; continue; }

    const ageRange = `${mod.minAge}-${mod.maxAge}`;
    const prompt = buildConceptVideoPrompt(
      mod.moduleTitle, "key concept visual overview", ageRange, mod.subject
    );

    const jobId = await insertJob(supabase, {
      module_id: mod.moduleId,
      asset_type: "video",
      provider: "google-veo",
      status: "processing",
      prompt,
      metadata: { model: "veo-3.1-fast-generate-preview", durationSeconds: 6 },
    });

    try {
      console.log(`  GEN   ${mod.moduleId}  —  Veo 3.1 Fast`);
      const initial = await generateVideo({
        prompt,
        model: "veo-3.1-fast-generate-preview",
        aspectRatio: "16:9",
        durationSeconds: 6,
        personGeneration: "allow_all",
        metadata: { moduleId: mod.moduleId, lessonId: "", promptType: "concept-clip" },
      });

      console.log(`         ⏳  operation: ${initial.operationName}`);
      const final = await pollVideoOperation(initial.operationName, {
        pollIntervalMs: 15_000,
        timeoutMs: 8 * 60 * 1000,
      });
      if (!final.video?.videoData) throw new Error("Veo returned no video data");

      const storagePath = `google-veo/concept-clips/${mod.moduleId}.mp4`;
      const url = await uploadToStorage(
        supabase, "media", storagePath, final.video.videoData, "video/mp4"
      );

      await updateJob(supabase, jobId, {
        status: "completed",
        output_url: url,
        completed_at: new Date().toISOString(),
        metadata: { durationSeconds: final.video.durationSeconds },
      });

      const clipCost = (final.video.durationSeconds ?? 6) * 0.10;
      totalCostUSD += clipCost;
      generated++;
      console.log(`         ✅  ${final.video.durationSeconds}s  $${clipCost.toFixed(2)}`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      await updateJob(supabase, jobId, { status: "failed", error: msg });
      console.log(`         ❌  ${msg.slice(0, 120)}`);
      failed++;
    }
  }
}

// ── MODE: STORYFORGE ───────────────────────────────────────────────────────

interface SceneManifest {
  bookSlug: string;
  title: string;
  scenes: Array<{
    index: number;
    title: string;
    description: string;
    ageRange?: string;
  }>;
}

async function runStoryforge(args: Args, supabase: SupabaseClient) {
  if (!args.bookSlug) {
    console.error("❌  --book-slug is required for storyforge mode."); process.exit(1);
  }

  console.log(`\n📚  MODE: storyforge  (Imagen 4 Standard @ $0.04/img)\nBook: ${args.bookSlug}\n`);

  const { data, error } = await supabase.storage
    .from("storyforge")
    .download(`${args.bookSlug}/scenes.json`);

  if (error || !data) {
    console.error(
      `❌  Scene manifest not found for "${args.bookSlug}" in storyforge/ storage bucket.\n` +
      `   Run the scene decomposition step first:\n` +
      `   See src/lib/forge/storyforge/scene-decomp.ts (planned module)`,
    );
    process.exit(1);
  }

  const manifest: SceneManifest = JSON.parse(await data.text());
  const scenes = manifest.scenes.slice(0, args.limit);
  const costEst = estimateImagenCost(scenes.length, "imagen-4.0-generate-001");

  console.log(
    `${scenes.length} scenes from "${manifest.title}"\n` +
    `💰  Estimated cost: $${costEst.totalCostUSD.toFixed(2)}  (Imagen 4 Standard for cinematic quality)\n`,
  );

  if (args.dryRun) {
    console.log("Scenes:");
    for (const s of scenes) console.log(`  [${String(s.index).padStart(3)}] ${s.title}`);
    console.log("\n[dry-run] No API calls made.\n");
    return;
  }

  for (const scene of scenes) {
    const sceneId = `${args.bookSlug}-scene-${scene.index}`;
    const cached = await findCachedJob(
      supabase, args.bookSlug!, "image", "google-imagen-storyforge", sceneId
    );
    if (cached) { skipped++; continue; }

    const prompt = [
      `Cinematic scene illustration for "${scene.title}" from ${manifest.title}.`,
      `Scene: ${scene.description}`,
      `Style: photorealistic, dramatic book illustration quality, rich details.`,
      `Child-safe. No text overlays. No logos. 16:9 aspect ratio.`,
    ].join(" ");

    const jobId = await insertJob(supabase, {
      module_id: args.bookSlug!,
      lesson_id: sceneId,
      asset_type: "image",
      provider: "google-imagen-storyforge",
      status: "processing",
      prompt,
      metadata: { bookSlug: args.bookSlug, sceneIndex: scene.index, sceneTitle: scene.title },
    });

    try {
      console.log(`  GEN   scene ${scene.index}  —  ${scene.title}`);
      const result = await generateImage({
        prompt,
        model: "imagen-4.0-generate-001",
        aspectRatio: "16:9",
        numberOfImages: 1,
        personGeneration: "allow_all",
        metadata: { moduleId: args.bookSlug!, lessonId: sceneId, promptType: "storyforge-scene" },
      });

      const img = result.images[0];
      if (!img) throw new Error("Imagen returned no images");

      const storagePath = `storyforge/${args.bookSlug}/scenes/${scene.index}.png`;
      const url = await uploadToStorage(supabase, "media", storagePath, img.imageData, img.mimeType);

      await updateJob(supabase, jobId, {
        status: "completed",
        output_url: url,
        completed_at: new Date().toISOString(),
        metadata: { model: result.model, sceneIndex: scene.index },
      });

      totalCostUSD += 0.04;
      generated++;
      console.log(`         ✅  ${url.slice(-60)}`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      await updateJob(supabase, jobId, { status: "failed", error: msg });
      console.log(`         ❌  ${msg.slice(0, 120)}`);
      failed++;
    }
  }
}

// ── MAIN ───────────────────────────────────────────────────────────────────

async function main() {
  const args = parseArgs();
  const t0 = Date.now();

  console.log("═".repeat(64));
  console.log("  FORGE Media Batch Generator");
  console.log(`  Mode: ${args.mode}  |  Limit: ${args.limit}  |  Dry-run: ${args.dryRun}`);
  console.log("═".repeat(64));

  const supabase = createSupabase();

  let pack: PromptPack | undefined;
  if (["thumbnails", "illustrations", "concept-clips"].includes(args.mode)) {
    pack = loadPromptPack();
    const totalLessons = pack.modules.reduce((s, m) => s + m.lessonCount, 0);
    console.log(`\nPrompt pack loaded: ${pack.modules.length} modules, ${totalLessons} lessons`);
  }

  switch (args.mode) {
    case "thumbnails":    await runThumbnails(args, supabase, pack!); break;
    case "illustrations": await runIllustrations(args, supabase, pack!); break;
    case "intros":        await runIntros(args, supabase); break;
    case "concept-clips": await runConceptClips(args, supabase, pack!); break;
    case "storyforge":    await runStoryforge(args, supabase); break;
    default:
      console.error(`❌  Unknown mode: ${args.mode}`); process.exit(1);
  }

  const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
  console.log("\n" + "═".repeat(64));
  console.log("  FORGE Batch Summary");
  console.log(`  Generated : ${generated}`);
  console.log(`  Skipped   : ${skipped}  (already cached)`);
  console.log(`  Failed    : ${failed}`);
  console.log(`  Cost      : $${totalCostUSD.toFixed(4)} USD`);
  console.log(`  Elapsed   : ${elapsed}s`);
  console.log("═".repeat(64) + "\n");
}

main().catch((err) => {
  console.error("Fatal:", err instanceof Error ? err.message : err);
  process.exit(1);
});
