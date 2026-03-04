/**
 * FORGE — HeyGen Batch Video Generator
 *
 * Generates companion intro videos and sample lesson avatar videos
 * using the $50 HeyGen credit allocation.
 *
 * Budget breakdown:
 *   - 4 companion intros (Aria + Kai + Brooklyn + Rhys, ~45 sec) = 3 min = $3.00
 *   - 10 sample lesson videos (Pre-K, ~2 min) = 20 min  = $20.00
 *   - 12 translation jobs (3 langs × 4 companions × 45 sec) at $0.05/sec = $27.00
 *   - Reserve:                                                = ~$0.00
 *   - Total budget:                                           = $50.00
 *
 * Usage:
 *   node scripts/generate-heygen-batch.mjs --mode intros
 *   node scripts/generate-heygen-batch.mjs --mode lessons --limit 5
 *   node scripts/generate-heygen-batch.mjs --mode enriched-lessons --limit 5
 *   node scripts/generate-heygen-batch.mjs --mode translate-intros
 *   node scripts/generate-heygen-batch.mjs --mode all --dry-run
 */

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
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
const HEYGEN_API_KEY = env.HEYGEN_API_KEY || process.env.HEYGEN_API_KEY;
const SUPABASE_URL = env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

const HEYGEN_BASE = "https://api.heygen.com";

// ── Companion Definitions ───────────────────────────────────────────────────

const COMPANIONS = {
  female: {
    id: "female",
    name: "Aria",
    avatarId: "Annie_Lounge_Standing_Front_public",
    voiceId: "007e1378fc454a9f976db570ba6164a7",
    voiceLocale: "en-US",
    voiceSpeed: 1.0,
    background: "#F5F0FF",
  },
  male: {
    id: "male",
    name: "Kai",
    avatarId: "Matteo_standing_office_front",
    voiceId: "d7bbcdd6964c47bdaae26decade4a933",
    voiceLocale: "en-US",
    voiceSpeed: 1.0,
    background: "#F0FAFF",
  },
  brooklyn: {
    id: "brooklyn",
    name: "Brooklyn",
    avatarId: "Sophia_public_2_20240320",
    voiceId: "3fb832c2f0f24a0d839b52bd087301a3",
    voiceLocale: "en-US",
    voiceSpeed: 1.0,
    background: "#FFF5F0",
  },
  rhys: {
    id: "rhys",
    name: "Rhys",
    avatarId: "Bradley_Blue_Polo_Front",
    voiceId: "6be73833ef9a4eb0aeee399b8fe9d62b",
    voiceLocale: "en-US",
    voiceSpeed: 1.0,
    background: "#F0FFF5",
  },
};

const COMPANION_INTRO_SCRIPTS = {
  female: `Hi there! I'm Aria, and I'm so happy to meet you! I'm going to be right here with you as you learn and grow. Whether you're exploring numbers, reading amazing stories, or discovering how the world works, we'll do it all together. Don't worry if something feels tricky. I believe in you, and I'll always be here to help. Let's start this learning adventure!`,
  male: `Hey! I'm Kai, and I am SO excited to learn with you! We're going to go on the coolest learning adventures together. Math problems? We'll crush them! Science experiments? Awesome! Reading new stories? Let's GO! If you ever get stuck, don't even worry about it. I've got your back, always. Ready to start? This is going to be EPIC!`,
  brooklyn: `Hey there! I'm Brooklyn. I'm here to learn with you, step by step. Whether it's diving into history, solving science puzzles, or exploring the world through stories, I've got you covered. Learning is all about curiosity, and I think you've got plenty of that. So whenever you're ready, let's jump in and see what we can discover together. You've got this!`,
  rhys: `What's up! I'm Rhys, and I'm stoked to be your learning buddy. Math, science, reading, you name it, we're tackling it all. The cool thing about learning is that every day you get a little bit smarter, and that's pretty awesome. If something's tough, no stress. We'll figure it out together. So let's get started and make today count!`,
};

// Target languages for companion intro translations
const TRANSLATION_LANGUAGES = [
  { code: "es", name: "Spanish" },
  { code: "zh", name: "Chinese" },
  { code: "pl", name: "Polish" },
];

// ── Sample Lesson Definitions ───────────────────────────────────────────────

const SAMPLE_LESSON_SCRIPTS = [
  {
    moduleId: "pre-k-basic-math-101",
    lessonId: "pre-k-basic-math-101-l01",
    title: "Counting 1 to 5",
    companion: "female",
    voiceSpeed: 0.85,
    script: `Welcome to counting! Today we're going to count all the way to five. Ready? Let's start with one. Can you hold up one finger? One! Great job! Now let's try two. One, two! You're doing amazing! Three comes next. One, two, three! Wow, look at you go! Now four. One, two, three, four! Almost there! And finally, five! One, two, three, four, five! You just counted to five! I'm so proud of you!`,
  },
  {
    moduleId: "pre-k-language-arts-101",
    lessonId: "pre-k-language-arts-101-l01",
    title: "The Letter A",
    companion: "female",
    voiceSpeed: 0.8,
    script: `Hello, friends! Today we're going to learn about a very special letter. It's the letter A! A is the very first letter of the alphabet. Can you say A? Aaa! The letter A makes the sound 'ah' like in apple. Apple starts with A! Can you think of other words that start with A? Ant! Airplane! Awesome starts with A too! Let's practice writing a big A in the air with our finger. Great work! You're already learning your letters!`,
  },
  {
    moduleId: "pre-k-general-science-101",
    lessonId: "pre-k-general-science-101-l01",
    title: "What is Science?",
    companion: "male",
    voiceSpeed: 0.9,
    script: `Hey there, young scientist! Do you know what science is? Science is how we learn about everything around us! When you ask 'why is the sky blue?' or 'how do plants grow?' those are science questions! Scientists look at things carefully, ask questions, and try to find answers. And guess what? You can be a scientist too! Today, let's look at something cool. See how water moves? That's science! Ready to explore more? Let's go!`,
  },
  {
    moduleId: "pre-k-biology-101",
    lessonId: "pre-k-biology-101-l01",
    title: "Living Things",
    companion: "male",
    voiceSpeed: 0.9,
    script: `Alright, let's talk about living things! Living things are all around us. Plants, animals, and even you are living things! Do you know what makes something alive? Living things grow, they need food and water, and they can move. A flower is alive because it grows and needs water. A puppy is alive because it eats, grows, and runs around! Can you name a living thing? Awesome! You're already a biology expert!`,
  },
  {
    moduleId: "pre-k-astronomy-101",
    lessonId: "pre-k-astronomy-101-l01",
    title: "The Sun and Stars",
    companion: "female",
    voiceSpeed: 0.9,
    script: `Look up at the sky! During the day, we can see the sun shining bright. The sun is actually a star, just like the ones we see at night. But it looks bigger because it's the closest star to us. The sun gives us light and warmth. Without the sun, our planet would be very cold and dark! At night, we can see other stars twinkling in the sky. They're so far away, they look like tiny dots of light. Isn't that amazing? Space is full of wonderful things!`,
  },
  {
    moduleId: "pre-k-geography-101",
    lessonId: "pre-k-geography-101-l01",
    title: "Our World",
    companion: "male",
    voiceSpeed: 0.9,
    script: `Welcome, explorer! Today we're going to learn about our planet Earth. Earth is where we all live. It's a big, round ball floating in space. Earth has blue oceans full of water, green forests with tall trees, and snowy mountains that reach up to the clouds. There are deserts with sand and cities where people live. Earth is our home, and it's pretty incredible! Let's explore all the amazing places on our planet together!`,
  },
  {
    moduleId: "pre-k-arts-101",
    lessonId: "pre-k-arts-101-l01",
    title: "Colors Everywhere!",
    companion: "female",
    voiceSpeed: 0.9,
    script: `Today we're going to play with colors! Colors are everywhere. The sky is blue, grass is green, and bananas are yellow. These three colors, red, yellow, and blue, are called primary colors. They're extra special because when we mix them together, we can make brand new colors! Red and yellow make orange! Blue and yellow make green! Red and blue make purple! How exciting is that? Let's see how many colors we can find around us today!`,
  },
  {
    moduleId: "pre-k-coding-101",
    lessonId: "pre-k-coding-101-l01",
    title: "What is a Pattern?",
    companion: "male",
    voiceSpeed: 0.9,
    script: `Hey, let's talk about patterns! A pattern is something that repeats over and over. Like red, blue, red, blue, red, blue. See how it keeps going? Patterns are everywhere! Stripes on a shirt are a pattern. Day and night is a pattern because it happens every day. Can you clap a pattern with me? Clap, clap, pause. Clap, clap, pause. You just made a pattern! Patterns are the first step to coding and making computers do cool things!`,
  },
  {
    moduleId: "pre-k-social-studies-us-101",
    lessonId: "pre-k-social-studies-us-101-l01",
    title: "My Community",
    companion: "female",
    voiceSpeed: 0.9,
    script: `Let's talk about communities! A community is a group of people who live and work near each other. Your neighborhood is a community! In your community, there are helpers everywhere. Firefighters keep you safe. Doctors help you feel better. Teachers help you learn. Mail carriers bring letters to your home. Farmers grow the food you eat. Everyone works together to make the community a nice place to live. Who are the helpers in your community?`,
  },
  {
    moduleId: "pre-k-financial-literacy-101",
    lessonId: "pre-k-financial-literacy-101-l01",
    title: "Needs and Wants",
    companion: "male",
    voiceSpeed: 0.9,
    script: `Today we're going to learn something really important! Let's talk about needs and wants. Needs are things you must have to be healthy and safe. You need food to eat, water to drink, a home to live in, and clothes to wear. Wants are things that are nice to have, but you don't really need them. Toys, candy, and video games are wants. It's important to know the difference because it helps us make good choices! Can you tell me something you need?`,
  },
];

// ── CLI Args ────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = { mode: "intros", limit: 10, dryRun: false, budget: 50, moduleFilter: null, companionKeys: null };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--mode" && argv[i + 1]) args.mode = argv[++i];
    else if (a === "--limit" && argv[i + 1]) args.limit = parseInt(argv[++i], 10);
    else if (a === "--dry-run") args.dryRun = true;
    else if (a === "--budget" && argv[i + 1]) args.budget = parseFloat(argv[++i]);
    else if (a === "--module" && argv[i + 1]) args.moduleFilter = argv[++i];
    else if (a === "--companions" && argv[i + 1]) args.companionKeys = argv[++i].split(",");
  }
  return args;
}

// ── Budget Tracker ──────────────────────────────────────────────────────────

class BudgetTracker {
  constructor(max) { this.max = max; this.spent = 0; this.items = []; }
  canSpend(cost) { return this.spent + cost <= this.max; }
  record(type, id, cost) { this.spent += cost; this.items.push({ type, id, costUSD: cost, total: this.spent }); }
  summary() {
    return { totalSpent: Math.round(this.spent * 100) / 100, budget: this.max, remaining: Math.round((this.max - this.spent) * 100) / 100, itemCount: this.items.length };
  }
}

// ── HeyGen API ──────────────────────────────────────────────────────────────

async function heygenFetch(path, { method = "GET", body } = {}) {
  const res = await fetch(`${HEYGEN_BASE}${path}`, {
    method,
    headers: { "Content-Type": "application/json", Accept: "application/json", "X-Api-Key": HEYGEN_API_KEY },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`HeyGen ${res.status}: ${text.slice(0, 300)}`);
  }

  const json = await res.json();
  if (json.error) throw new Error(`HeyGen error: ${json.error}`);
  return json.data;
}

async function generateVideo(avatarId, voiceId, script, { title, background = "#FFFFFF", voiceSpeed = 1.0, dimension } = {}) {
  return heygenFetch("/v2/video/generate", {
    method: "POST",
    body: {
      caption: true,
      title: title || "Koydo lesson",
      dimension: dimension || { width: 1280, height: 720 },
      video_inputs: [{
        character: { type: "avatar", avatar_id: avatarId, avatar_style: "normal" },
        voice: { type: "text", voice_id: voiceId, input_text: script, speed: voiceSpeed },
        background: { type: "color", value: background },
      }],
    },
  });
}

async function getVideoStatus(videoId) {
  return heygenFetch(`/v1/video_status.get?video_id=${videoId}`);
}

async function waitForVideo(videoId, { pollIntervalMs = 15_000, timeoutMs = 600_000 } = {}) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const status = await getVideoStatus(videoId);
    if (status.status === "completed") return status;
    if (status.status === "failed") throw new Error(`Video ${videoId} failed: ${status.error || "unknown"}`);
    console.log(`    [poll] ${videoId}: ${status.status} (${Math.round((Date.now() - start) / 1000)}s)`);
    await new Promise((r) => setTimeout(r, pollIntervalMs));
  }
  throw new Error(`Video ${videoId} timed out`);
}

async function translateVideo(videoUrl, targetLanguage, { title } = {}) {
  return heygenFetch("/v2/video_translate", {
    method: "POST",
    body: {
      video_url: videoUrl,
      output_language: targetLanguage,
      translate_audio_only: false,
      title: title || `Koydo translation (${targetLanguage})`,
    },
  });
}

async function getTranslationStatus(translateId) {
  return heygenFetch(`/v2/video_translate/${translateId}`);
}

async function waitForTranslation(translateId, { pollIntervalMs = 20_000, timeoutMs = 600_000 } = {}) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const status = await getTranslationStatus(translateId);
    if (status.status === "completed" || status.url) return status;
    if (status.status === "failed") throw new Error(`Translation ${translateId} failed`);
    console.log(`    [poll] translate ${translateId}: ${status.status} (${Math.round((Date.now() - start) / 1000)}s)`);
    await new Promise((r) => setTimeout(r, pollIntervalMs));
  }
  throw new Error(`Translation ${translateId} timed out`);
}

// ── Generators ──────────────────────────────────────────────────────────────

function estimateScriptDurationSec(script) {
  // ~750 chars/min = 12.5 chars/sec
  return Math.ceil(script.length / 12.5);
}

async function runCompanionIntros(supabase, args, budget) {
  console.log("\n── Companion Intro Videos ──────────────────────────────\n");

  const companionFilter = args.companionKeys ? new Set(args.companionKeys) : null;

  for (const [key, companion] of Object.entries(COMPANIONS)) {
    if (companionFilter && !companionFilter.has(key)) {
      console.log(`[${companion.name}] skipped (not in --companions filter)`);
      continue;
    }

    const script = COMPANION_INTRO_SCRIPTS[key];
    if (!script) {
      console.log(`[${companion.name}] skipped (no intro script)`);
      continue;
    }
    const durationSec = estimateScriptDurationSec(script);
    const costUSD = Math.round(durationSec * 0.0167 * 100) / 100;

    console.log(`[${companion.name}] ${durationSec}s estimated, ~$${costUSD}`);

    if (!budget.canSpend(costUSD)) {
      console.log("  [budget] cannot afford — skipping");
      continue;
    }

    if (args.dryRun) {
      console.log(`  [dry-run] would generate ${companion.name} intro`);
      budget.record("companion-intro", companion.name, costUSD);
      continue;
    }

    try {
      const result = await generateVideo(companion.avatarId, companion.voiceId, script, {
        title: `Koydo - ${companion.name} Introduction`,
        background: companion.background,
        voiceSpeed: companion.voiceSpeed,
      });

      console.log(`  [queued] videoId: ${result.video_id}`);
      const status = await waitForVideo(result.video_id);

      // Store the video ID in companion config tracking
      await supabase.from("media_generation_jobs").insert({
        module_id: "companion",
        lesson_id: `companion-intro-${key}`,
        asset_type: "companion-intro",
        prompt: script,
        status: "completed",
        output_url: status.video_url,
        completed_at: new Date().toISOString(),
        metadata: {
          provider: "heygen-avatar-iii",
          companionName: companion.name,
          companionKey: key,
          videoId: result.video_id,
          duration: status.duration,
          thumbnailUrl: status.thumbnail_url,
          locale: "en-US",
          costUSD,
        },
      });

      budget.record("companion-intro", companion.name, costUSD);
      console.log(`  [ok] ${companion.name} intro completed: ${status.video_url}`);
    } catch (err) {
      console.error(`  [fail] ${companion.name}: ${err.message}`);
    }
  }
}

async function runLessonSamples(supabase, args, budget) {
  console.log("\n── Sample Lesson Videos ────────────────────────────────\n");

  let processed = 0;

  for (const lesson of SAMPLE_LESSON_SCRIPTS) {
    if (processed >= args.limit) break;

    const companion = COMPANIONS[lesson.companion];
    const durationSec = estimateScriptDurationSec(lesson.script);
    const costUSD = Math.round(durationSec * 0.0167 * 100) / 100;

    console.log(`[${processed + 1}/${args.limit}] ${lesson.lessonId} (${companion.name}): ${durationSec}s, ~$${costUSD}`);

    if (!budget.canSpend(costUSD)) {
      console.log("  [budget] cannot afford — stopping");
      break;
    }

    if (args.dryRun) {
      console.log(`  [dry-run] would generate "${lesson.title}"`);
      budget.record("lesson-video", lesson.lessonId, costUSD);
      processed++;
      continue;
    }

    try {
      const result = await generateVideo(companion.avatarId, companion.voiceId, lesson.script, {
        title: `Koydo - ${lesson.title}`,
        background: companion.background,
        voiceSpeed: lesson.voiceSpeed || 0.9,
      });

      console.log(`  [queued] videoId: ${result.video_id}`);
      const status = await waitForVideo(result.video_id);

      await supabase.from("media_generation_jobs").insert({
        module_id: lesson.moduleId,
        lesson_id: lesson.lessonId,
        asset_type: "avatar-lesson",
        prompt: lesson.script,
        status: "completed",
        output_url: status.video_url,
        completed_at: new Date().toISOString(),
        metadata: {
          provider: "heygen-avatar-iii",
          companionName: companion.name,
          videoId: result.video_id,
          duration: status.duration,
          thumbnailUrl: status.thumbnail_url,
          locale: "en-US",
          costUSD,
        },
      });

      budget.record("lesson-video", lesson.lessonId, costUSD);
      processed++;
      console.log(`  [ok] "${lesson.title}" completed: ${status.video_url}`);
    } catch (err) {
      console.error(`  [fail] ${lesson.lessonId}: ${err.message}`);
      if (err.message.includes("429") || err.message.includes("quota")) {
        console.log("[quota] rate limited — stopping");
        break;
      }
    }
  }

  console.log(`\n[lessons] processed ${processed}/${SAMPLE_LESSON_SCRIPTS.length}`);
}

async function runTranslateIntros(supabase, args, budget) {
  console.log("\n── Translate Companion Intros ──────────────────────────\n");

  // Fetch completed English companion intros
  const { data: intros, error } = await supabase
    .from("media_generation_jobs")
    .select("*")
    .eq("asset_type", "companion-intro")
    .eq("status", "completed")
    .not("output_url", "is", null);

  if (error || !intros?.length) {
    console.log("[skip] No completed English companion intros found. Run --mode intros first.");
    return;
  }

  for (const intro of intros) {
    const companionKey = intro.metadata?.companionKey || intro.metadata?.companionGender || intro.lesson_id.replace("companion-intro-", "");
    const companion = COMPANIONS[companionKey];
    if (!companion) continue;

    for (const lang of TRANSLATION_LANGUAGES) {
      const durationSec = intro.metadata?.duration || 45;
      const costUSD = Math.round(durationSec * 0.05 * 100) / 100; // $0.05/sec speed mode

      console.log(`[${companion.name} → ${lang.name}] ~${durationSec}s, ~$${costUSD}`);

      if (!budget.canSpend(costUSD)) {
        console.log("  [budget] cannot afford — skipping");
        continue;
      }

      if (args.dryRun) {
        console.log(`  [dry-run] would translate ${companion.name} intro to ${lang.name}`);
        budget.record("translate-intro", `${companion.name}-${lang.code}`, costUSD);
        continue;
      }

      try {
        const result = await translateVideo(intro.output_url, lang.code, {
          title: `Koydo - ${companion.name} Introduction (${lang.name})`,
        });

        console.log(`  [queued] translateId: ${result.video_translate_id}`);
        const status = await waitForTranslation(result.video_translate_id);

        await supabase.from("media_generation_jobs").insert({
          module_id: "companion",
          lesson_id: `companion-intro-${companionKey}-${lang.code}`,
          asset_type: "companion-intro",
          prompt: COMPANION_INTRO_SCRIPTS[companionKey] || "",
          status: "completed",
          output_url: status.url || status.video_url,
          completed_at: new Date().toISOString(),
          metadata: {
            provider: "heygen-translate",
            companionName: companion.name,
            companionKey,
            translateId: result.video_translate_id,
            sourceVideoId: intro.metadata?.videoId,
            locale: lang.code,
            language: lang.name,
            costUSD,
          },
        });

        budget.record("translate-intro", `${companion.name}-${lang.code}`, costUSD);
        console.log(`  [ok] ${companion.name} ${lang.name} translation complete`);
      } catch (err) {
        console.error(`  [fail] ${companion.name} → ${lang.name}: ${err.message}`);
      }
    }
  }
}

// ── Enriched Curriculum Loader ───────────────────────────────────────────────

const CATALOG_DIR = path.resolve("src/lib/modules/catalog");

/**
 * Load enriched curriculum from catalog .ts files (same approach as the
 * enrichment script — parse TS via vm). Returns lesson scripts with chunks
 * concatenated into narration-ready scripts.
 */
async function loadEnrichedLessons({ limit = 20, moduleFilter, companionKeys } = {}) {
  const { promises: fsp } = await import("node:fs");
  const entries = await fsp.readdir(CATALOG_DIR);
  const tsFiles = entries.filter((f) => f.endsWith(".ts")).sort();

  const lessons = [];
  const companionList = companionKeys || ["female", "male", "brooklyn", "rhys"];
  let companionIdx = 0;

  for (const file of tsFiles) {
    if (lessons.length >= limit) break;

    const filePath = path.join(CATALOG_DIR, file);
    const source = await fsp.readFile(filePath, "utf8");

    const match = source.match(/export const\s+([A-Za-z0-9_]+)\s*:\s*LearningModule\s*=/);
    if (!match) continue;

    if (moduleFilter && !file.includes(moduleFilter)) continue;

    const exportName = match[1];
    const transformed = source
      .replace(/^import\s+type\s+\{[^}]+\}\s+from\s+"[^"]+";\s*$/gm, "")
      .replace(/\s+as\s+const\b/g, "")
      .replace(
        new RegExp(`export const\\s+${exportName}\\s*:\\s*LearningModule\\s*=`, "m"),
        `const ${exportName} =`,
      )
      .concat(`\nmodule.exports = ${exportName};\n`);

    let payload;
    try {
      const context = vm.createContext({ module: { exports: {} }, exports: {} });
      new vm.Script(transformed, { filename: file }).runInContext(context);
      payload = context.module.exports;
    } catch {
      continue;
    }

    if (!payload?.lessons || !Array.isArray(payload.lessons)) continue;

    for (const lesson of payload.lessons) {
      if (lessons.length >= limit) break;
      if (!lesson.chunks || !Array.isArray(lesson.chunks) || lesson.chunks.length === 0) continue;

      // Concatenate chunk content into a narration script (intro + concept chunks)
      const narratableChunks = lesson.chunks.filter(
        (c) => c.kind === "intro" || c.kind === "concept" || c.kind === "example",
      );
      if (narratableChunks.length === 0) continue;

      const script = narratableChunks.map((c) => c.content).join(" ");
      // Skip if script is too short (<100 chars) or too long (>3000 chars for HeyGen)
      if (script.length < 100) continue;
      // Trim to ~2 minutes of speech (~1500 chars) for budget control
      const trimmedScript = script.length > 1500 ? script.slice(0, 1500).replace(/\s+\S*$/, ".") : script;

      const companionKey = companionList[companionIdx % companionList.length];
      companionIdx++;

      lessons.push({
        moduleId: payload.id,
        lessonId: lesson.id,
        title: lesson.title,
        companion: companionKey,
        voiceSpeed: 0.9,
        script: trimmedScript,
        subject: payload.subject || "General",
        ageRange: payload.minAge && payload.maxAge ? `${payload.minAge}-${payload.maxAge}` : "all",
      });
    }
  }

  return lessons;
}

async function runEnrichedLessons(supabase, args, budget) {
  console.log("\n── Enriched Curriculum Lesson Videos ──────────────────\n");

  const moduleFilter = args.moduleFilter || null;
  const enrichedLessons = await loadEnrichedLessons({
    limit: args.limit,
    moduleFilter,
    companionKeys: args.companionKeys || null,
  });

  console.log(`[enriched] Loaded ${enrichedLessons.length} lessons from catalog`);

  let processed = 0;

  for (const lesson of enrichedLessons) {
    const companion = COMPANIONS[lesson.companion];
    if (!companion) {
      console.log(`  [skip] Unknown companion key: ${lesson.companion}`);
      continue;
    }

    const durationSec = estimateScriptDurationSec(lesson.script);
    const costUSD = Math.round(durationSec * 0.0167 * 100) / 100;

    console.log(`[${processed + 1}/${enrichedLessons.length}] ${lesson.lessonId} (${companion.name}): ${durationSec}s, ~$${costUSD}`);
    console.log(`  Subject: ${lesson.subject} | Age: ${lesson.ageRange} | Script: ${lesson.script.length} chars`);

    if (!budget.canSpend(costUSD)) {
      console.log("  [budget] cannot afford — stopping");
      break;
    }

    if (args.dryRun) {
      console.log(`  [dry-run] would generate "${lesson.title}"`);
      budget.record("enriched-lesson", lesson.lessonId, costUSD);
      processed++;
      continue;
    }

    try {
      const result = await generateVideo(companion.avatarId, companion.voiceId, lesson.script, {
        title: `Koydo - ${lesson.title}`,
        background: companion.background,
        voiceSpeed: lesson.voiceSpeed || 0.9,
      });

      console.log(`  [queued] videoId: ${result.video_id}`);
      const status = await waitForVideo(result.video_id);

      await supabase.from("media_generation_jobs").insert({
        module_id: lesson.moduleId,
        lesson_id: lesson.lessonId,
        asset_type: "avatar-lesson",
        prompt: lesson.script,
        status: "completed",
        output_url: status.video_url,
        completed_at: new Date().toISOString(),
        metadata: {
          provider: "heygen-avatar-iii",
          companionName: companion.name,
          companionKey: lesson.companion,
          videoId: result.video_id,
          duration: status.duration,
          thumbnailUrl: status.thumbnail_url,
          locale: "en-US",
          subject: lesson.subject,
          ageRange: lesson.ageRange,
          enriched: true,
          costUSD,
        },
      });

      budget.record("enriched-lesson", lesson.lessonId, costUSD);
      processed++;
      console.log(`  [ok] "${lesson.title}" completed: ${status.video_url}`);
    } catch (err) {
      console.error(`  [fail] ${lesson.lessonId}: ${err.message}`);
      if (err.message.includes("429") || err.message.includes("quota")) {
        console.log("[quota] rate limited — stopping");
        break;
      }
    }
  }

  console.log(`\n[enriched-lessons] processed ${processed}/${enrichedLessons.length}`);
}

// ── Entry Point ─────────────────────────────────────────────────────────────

async function main() {
  const args = parseArgs(process.argv);

  console.log("═══════════════════════════════════════════════════════════");
  console.log(" FORGE — HeyGen Batch Video Generator");
  console.log("═══════════════════════════════════════════════════════════");
  console.log(`Mode: ${args.mode} | Limit: ${args.limit} | Budget: $${args.budget}`);
  console.log(`Dry run: ${args.dryRun}`);
  console.log("");

  if (!HEYGEN_API_KEY) {
    console.error("[fatal] HEYGEN_API_KEY not set. Add to .env file.");
    process.exit(1);
  }
  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    console.error("[fatal] SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY required.");
    process.exit(1);
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
  const budget = new BudgetTracker(args.budget);

  if (args.mode === "intros" || args.mode === "all") {
    await runCompanionIntros(supabase, args, budget);
  }
  if (args.mode === "lessons" || args.mode === "all") {
    await runLessonSamples(supabase, args, budget);
  }
  if (args.mode === "enriched-lessons" || args.mode === "all") {
    await runEnrichedLessons(supabase, args, budget);
  }
  if (args.mode === "translate-intros" || args.mode === "all") {
    await runTranslateIntros(supabase, args, budget);
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
  const reportPath = path.resolve("public/HEYGEN-BUDGET-REPORT.json");
  fs.writeFileSync(reportPath, JSON.stringify({ ...summary, items: budget.items, generatedAt: new Date().toISOString() }, null, 2));
  console.log(`Budget report saved to ${reportPath}`);
}

main().catch((err) => {
  console.error("[fatal]", err);
  process.exit(1);
});
