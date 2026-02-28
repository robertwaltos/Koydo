import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const envPath = path.resolve(".env");
const COMFY_JOB_TIMEOUT_MS = 30 * 60 * 1000; // 30 min — covers both Flux (~30s) + SVD (~10 min) stages
const COMFY_OUTPUT_FILELIST_CACHE_MS = 15_000;

const comfyOutputFileCache = {
  baseUrl: "",
  fetchedAt: 0,
  files: new Set(),
};

const FLUX_WORKFLOW_TEMPLATE = {
  "3": {
    inputs: {
      seed: 0,
      steps: 4,
      cfg: 1.0,
      sampler_name: "euler",
      scheduler: "simple",
      denoise: 1.0,
      model: ["4", 0],
      positive: ["6", 0],
      negative: ["7", 0],
      latent_image: ["5", 0],
    },
    class_type: "KSampler",
  },
  "4": {
    inputs: { ckpt_name: "flux1-schnell-fp8.safetensors" },
    class_type: "CheckpointLoaderSimple",
  },
  "5": {
    inputs: { width: 1024, height: 576, batch_size: 1 },
    class_type: "EmptyLatentImage",
  },
  "6": {
    inputs: { text: "", clip: ["4", 1] },
    class_type: "CLIPTextEncode",
  },
  "7": {
    inputs: {
      text: [
        // --- HANDS / FINGERS / BODY PARTS (highest priority ban) ---
        "hands, hand, fingers, finger, palm, fist, wrist, knuckle, fingernail, fingertip,",
        "thumb, index finger, pinky, ring finger, middle finger, open hand, closed hand,",
        "extra fingers, missing fingers, fused fingers, deformed hands, malformed hands,",
        "arms reaching, arm outstretched, pointing finger, holding object, gripping,",
        // --- FACES / HEADS / SKIN ---
        "face, human face, close-up face, portrait, selfie, headshot, facial expression,",
        "skin, bare skin, pores, wrinkles, teeth, lips, mouth close-up, eye close-up,",
        "cloned face, uncanny valley, disfigured face, asymmetric face,",
        // --- OTHER BODY ANATOMY ERRORS ---
        "extra limbs, missing limbs, extra arms, six arms, deformed body, mutated, grotesque,",
        "bad anatomy, bad proportions, long neck, double face, mutation, fused bodies,",
        "conjoined, hybrid creature, monstrosity, exposed torso, bare legs, nudity,",
        // --- PHYSICS / SCIENCE ERRORS ---
        "saturn orbiting jupiter, moon larger than earth, impossible physics,",
        "incorrect scale, inaccurate science, planet collision unrealistic, stars in daytime sky,",
        // --- QUALITY ISSUES ---
        "blurry, low resolution, pixelated, jpeg artifacts, noisy, overexposed, underexposed,",
        "cartoon, anime, illustration, painting, sketch, drawing, cell-shaded, toon, watercolor,",
        "watermark, text, logo, signature, username, frame, border, cropped, cut off,",
        "low quality, worst quality, normal quality, out of focus, depth of field artifact,",
        // --- SURREAL / HORROR ---
        "surreal, abstract, dreamlike, psychedelic, horror, creepy, nightmare, disturbing,",
        "multiple heads, severed limb, gore, blood, violence"
      ].join(" "),
      clip: ["4", 1]
    },
    class_type: "CLIPTextEncode",
  },
  "8": {
    inputs: { samples: ["3", 0], vae: ["4", 2] },
    class_type: "VAEDecode",
  },
  "9": {
    inputs: { filename_prefix: "Koydo_Flux_Base", images: ["8", 0] },
    class_type: "SaveImage",
  },
};

const WAN_I2V_WORKFLOW_TEMPLATE = {
  // WanVideoVAELoader - loads Wan VAE
  "2": {
    inputs: {
      model_name: "Wan2_1_VAE_bf16.safetensors",
      precision: "bf16",
    },
    class_type: "WanVideoVAELoader",
  },
  // WanVideoModelLoader - loads I2V model
  "3": {
    inputs: {
      model: "Wan2_1-I2V-14B-480P_fp8_e4m3fn.safetensors",
      base_precision: "fp16",
      quantization: "fp8_e4m3fn",
      load_device: "main_device",
    },
    class_type: "WanVideoModelLoader",
  },
  // LoadImageOutput - loads the Flux-generated base image from ComfyUI output/
  "4": {
    inputs: { image: "" },
    class_type: "LoadImageOutput",
  },
  // WanVideoImageToVideoEncode - encodes start image into I2V embeds (no CLIP dependency)
  "5": {
    inputs: {
      width: 832,
      height: 480,
      num_frames: 33,
      noise_aug_strength: 0.0,
      start_latent_strength: 1.0,
      end_latent_strength: 1.0,
      force_offload: true,
      vae: ["2", 0],
      start_image: ["4", 0],
    },
    class_type: "WanVideoImageToVideoEncode",
  },
  // WanVideoSampler - generates video from image conditioning
  "6": {
    inputs: {
      model: ["3", 0],
      image_embeds: ["5", 0],
      steps: 20,
      cfg: 6.0,
      shift: 3.0,
      seed: 0,
      force_offload: true,
      scheduler: "unipc",
      riflex_freq_index: 0,
    },
    class_type: "WanVideoSampler",
  },
  // WanVideoDecode - decode latents to frames
  "7": {
    inputs: {
      vae: ["2", 0],
      samples: ["6", 0],
      enable_vae_tiling: true,
      tile_x: 272,
      tile_y: 272,
      tile_stride_x: 144,
      tile_stride_y: 144,
    },
    class_type: "WanVideoDecode",
  },
  // VHS_VideoCombine - save as mp4 (node "9" matches output key in processVideoMotionStage)
  "9": {
    inputs: {
      filename_prefix: "Koydo_WanI2V",
      images: ["7", 0],
      format: "video/h264-mp4",
      frame_rate: 24,
      loop_count: 0,
      pingpong: false,
      save_output: true,
    },
    class_type: "VHS_VideoCombine",
  },
};

// ---------------------------------------------------------------------------
// Grok-powered visual prompt builder
// ---------------------------------------------------------------------------

const GROK_API_BASE = "https://api.x.ai/v1";
const OPENAI_API_BASE = "https://api.openai.com/v1";

/**
 * Extract a human-readable topic label from the raw job prompt.
 * The stored prompts are video-script instructions, not image descriptions.
 * We pull out the Subject/Context lines injected by the curriculum agent.
 */
function extractLessonContext(job) {
  const raw = typeof job.prompt === "string" ? job.prompt : "";

  // Try to grab Subject: and Context: fields embedded in the prompt
  const subjectMatch = raw.match(/Subject:\s*([^.\n]+)/i);
  const contextMatch = raw.match(/Context:\s*(.+?)(?:\.\.\.|$)/is);

  const subject = subjectMatch?.[1]?.trim() ?? "";
  // Strip the leading generic phrase if present
  const contextFull = contextMatch?.[1]?.trim() ?? "";
  const contextStripped = contextFull
    .replace(/^Create a child-safe educational lesson video about\s*/i, "")
    .replace(/^"/, "")
    .replace(/"\s+in\s+.*$/, "")
    .trim();

  const topic = subject || contextStripped || raw.slice(0, 200);
  const moduleId = job.module_id ?? "";
  const lessonId = job.lesson_id ?? "";

  // Infer subject area from module_id (e.g. "lang-arts" → "Language Arts")
  let subjectArea = "general education";
  if (/lang.?art/i.test(moduleId)) subjectArea = "Language Arts";
  else if (/math/i.test(moduleId)) subjectArea = "Mathematics";
  else if (/astron/i.test(moduleId + lessonId)) subjectArea = "Astronomy";
  else if (/sci/i.test(moduleId)) subjectArea = "Science";
  else if (/hist|social/i.test(moduleId)) subjectArea = "Social Studies / History";
  else if (/bio/i.test(moduleId)) subjectArea = "Biology";
  else if (/chem/i.test(moduleId)) subjectArea = "Chemistry";
  else if (/phys/i.test(moduleId)) subjectArea = "Physics";
  else if (/geog/i.test(moduleId)) subjectArea = "Geography";
  else if (/econ/i.test(moduleId)) subjectArea = "Economics";
  else if (/art|music|drama/i.test(moduleId)) subjectArea = "Arts";
  else if (/tech|comp|code/i.test(moduleId)) subjectArea = "Computer Science / Technology";
  else if (/engl/i.test(moduleId)) subjectArea = "English";
  else if (/read/i.test(moduleId)) subjectArea = "Reading";
  else if (/writ/i.test(moduleId)) subjectArea = "Writing";
  else if (/health|medic/i.test(moduleId)) subjectArea = "Health & Medicine";
  else if (/environ|earth/i.test(moduleId)) subjectArea = "Earth & Environmental Science";
  else if (/psych/i.test(moduleId)) subjectArea = "Psychology";
  else if (/govern|civics/i.test(moduleId)) subjectArea = "Government & Civics";

  // Grade band from module or lesson id
  const gradeMatch = (moduleId + lessonId).match(/(k-?[0-9]|[0-9]+)/i);
  const gradeBand = gradeMatch?.[1] ?? "middle school";

  return { topic, subjectArea, gradeBand };
}

const PROMPT_SYSTEM_INSTRUCTION = `You are an expert image prompt engineer for a children's educational platform.
Your job: given a lesson topic and subject area, output ONE Flux image generation prompt.

═══════════════════ ABSOLUTE RULES — NEVER VIOLATE ═══════════════════

🚫 NO HANDS OR FINGERS — EVER.
  - Never show hands, fingers, palms, wrists, knuckles, or fingernails.
  - If a person must appear: shoot from BEHIND (back of head, back of body only),
    OVERHEAD looking down on a desk/scene, or as a DISTANT SILHOUETTE.
  - Characters may hold objects ONLY if the hand/wrist is fully off-frame or hidden
    by a sleeve, glove, or the frame edge. When in doubt: no person at all.

🚫 NO CLOSE-UP FACES — EVER.
  - No portrait shots, headshots, selfies, or facial close-ups.
  - If a human is needed: silhouette only, back view only, or seen from waist-down only.

✅ PREFER OBJECT/ENVIRONMENT-FOCUSED SHOTS:
  - Books, tools, specimens, equipment, diagrams, whiteboards with diagrams (no hands),
    nature scenes, scale models, lab setups, architectural spaces.
  - Isometric diagrams of concepts work well.
  - Overhead flat-lay of relevant objects on a clean surface.

✅ ACCURACY RULES:
  - Physics and science accurate: correct orbits, scale, real-world lighting.
  - Educational content must be factually correct.

✅ STYLE: photorealistic, cinematic, 8K, sharp focus, professional photography.
✅ SAFE: no violence, no blood, appropriate for K-12 students.
✅ OUTPUT: the image prompt ONLY — no explanations, bullets, headers. Max 110 words.

═══════════════════ EXAMPLES ═══════════════════
- "Paragraph Structure" (ELA) → "Overhead flat-lay of a white spiral notebook open to a handwritten paragraph, blue pen resting beside it on a wooden desk, topic sentence highlighted in yellow, warm afternoon light, photorealistic DSLR, 8K sharp"
- "Photosynthesis" (Biology) → "Macro cross-section of a vibrant green leaf showing chloroplasts, water droplets on the surface, accurate cellular detail, soft bokeh garden background, photorealistic scientific visualization, 8K cinematic"
- "Solar System" (Science) → "Accurate scale model of the solar system on a black background, sun glowing at center, eight planets in correct orbital positions with labels, no human figures, photorealistic CGI, 8K"
- "Pythagorean Theorem" (Math) → "Clean whiteboard with a right triangle diagram labeled sides a b c and the equation a² + b² = c² neatly written in black marker, empty classroom background, overhead side angle, no human visible, photorealistic, 8K"`;

async function buildVisualPromptWithOpenAI(job, openaiApiKey, openaiModel) {
  if (!openaiApiKey) return buildFallbackVisualPrompt(job);

  const { topic, subjectArea, gradeBand } = extractLessonContext(job);
  const userMessage = `Lesson topic: "${topic}"
Subject area: ${subjectArea}
Grade band: ${gradeBand}

Generate a hyper-realistic Flux image prompt for this lesson.`;

  try {
    const res = await fetch(`${OPENAI_API_BASE}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiApiKey}`,
      },
      body: JSON.stringify({
        model: openaiModel || "gpt-4o-mini",
        messages: [
          { role: "system", content: PROMPT_SYSTEM_INSTRUCTION },
          { role: "user", content: userMessage },
        ],
        max_tokens: 200,
        temperature: 0.7,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`OpenAI API error ${res.status}: ${errText.slice(0, 200)}`);
    }

    const data = await res.json();
    const aiPrompt = data?.choices?.[0]?.message?.content?.trim();
    if (!aiPrompt) throw new Error("Empty OpenAI response");

    console.log(`  [prompt] Topic: ${topic.slice(0, 80)}`);
    console.log(`  [prompt] OpenAI: ${aiPrompt.slice(0, 120)}...`);
    return aiPrompt;
  } catch (err) {
    console.warn(`  [prompt] OpenAI failed (${err.message}), using fallback prompt`);
    return buildFallbackVisualPrompt(job);
  }
}

async function buildVisualPromptWithGrok(job, grokApiKey, grokModel) {
  // Skip API call if key isn't configured
  if (!grokApiKey) {
    return buildFallbackVisualPrompt(job);
  }

  const { topic, subjectArea, gradeBand } = extractLessonContext(job);

  const userMessage = `Lesson topic: "${topic}"
Subject area: ${subjectArea}
Grade band: ${gradeBand}

Generate a hyper-realistic Flux image prompt for this lesson.`;

  try {
    const res = await fetch(`${GROK_API_BASE}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${grokApiKey}`,
      },
      body: JSON.stringify({
        model: grokModel || "grok-3-fast",
        messages: [
          { role: "system", content: PROMPT_SYSTEM_INSTRUCTION },
          { role: "user", content: userMessage },
        ],
        max_tokens: 200,
        temperature: 0.7,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Grok API error ${res.status}: ${errText.slice(0, 200)}`);
    }

    const data = await res.json();
    const aiPrompt = data?.choices?.[0]?.message?.content?.trim();
    if (!aiPrompt) throw new Error("Empty Grok response");

    console.log(`  [prompt] Topic: ${topic.slice(0, 80)}`);
    console.log(`  [prompt] Generated: ${aiPrompt.slice(0, 120)}...`);
    return aiPrompt;
  } catch (err) {
    // Fallback: build a structured prompt from known info
    console.warn(`  [prompt] Grok failed (${err.message}), using fallback prompt`);
    return buildFallbackVisualPrompt(job);
  }
}

/**
 * Rule-based fallback prompt when Grok is unavailable.
 * Generates object/environment-focused shots with NO hands or faces.
 */
function buildFallbackVisualPrompt(job) {
  const { topic, subjectArea, gradeBand } = extractLessonContext(job);

  // Subject-specific shot templates that naturally avoid hands and faces
  const subjectTemplates = {
    "Mathematics": `Overhead flat-lay of a clean open textbook showing geometric diagrams and equations about "${topic}", pencil beside the book on a wooden desk, warm study lamp light, photorealistic DSLR, 8K sharp, no human figures`,
    "Language Arts": `Overhead flat-lay of an open notebook with neat handwritten notes about "${topic}", clean desk surface, soft natural light, photorealistic, 8K, no hands visible`,
    "English": `Overhead flat-lay of open books and printed text about "${topic}", clean wooden desk, warm reading light, photorealistic DSLR, 8K, no human figures`,
    "Reading": `Overhead flat-lay of an open illustrated book spread about "${topic}", colorful pages, soft reading light on a wooden surface, photorealistic, 8K, no hands`,
    "Writing": `Overhead flat-lay of a white notebook page with organized handwritten text about "${topic}", fountain pen resting beside it, clean desk, photorealistic DSLR, 8K, no hands visible`,
    "Science": `Professional laboratory setup illustrating "${topic}", glass beakers, specimens and scientific equipment on a clean lab bench, bright lab lighting, photorealistic, 8K, no people`,
    "Biology": `Macro photorealistic close-up illustrating "${topic}", accurate biological detail, scientific visualization, clean background, 8K cinematic, no human figures`,
    "Chemistry": `Chemistry lab bench showing equipment related to "${topic}", colorful reagents in labeled glass containers, accurate lab setup, photorealistic, 8K, no people`,
    "Physics": `Clean physics diagram setup illustrating "${topic}" on a whiteboard, accurate equations and arrows drawn in marker, empty bright classroom, photorealistic, 8K, no hands`,
    "Astronomy": `Photorealistic CGI rendering of "${topic}" in space, accurate planetary scale and lighting, deep black space background, 8K cinematic, no human figures`,
    "Earth & Environmental Science": `Cinematic wide-angle shot of a natural landscape illustrating "${topic}", accurate geological or ecological detail, golden hour light, 8K photorealistic, no people`,
    "Geography": `Detailed photorealistic satellite or aerial view illustrating "${topic}", accurate geographic features, clean cartographic labels, 8K, no human figures`,
    "Social Studies / History": `Photorealistic museum diorama or historical artifact display illustrating "${topic}", accurate period details, dramatic museum lighting, 8K, no close-up human faces`,
    "Economics": `Overhead flat-lay of economic data charts and infographic documents about "${topic}", clean office desk, professional lighting, photorealistic, 8K, no hands`,
    "Computer Science / Technology": `Close-up of a glowing computer screen showing clean code or a technology interface related to "${topic}", dark ambient background, sharp screen light, photorealistic, 8K, no hands`,
    "Arts": `Overhead flat-lay of art supplies and a partially completed artwork about "${topic}" on a wooden studio table, colorful paints, photorealistic, 8K, no hands visible`,
    "Health & Medicine": `Medical illustration or anatomical diagram related to "${topic}", accurate clinical detail, clean white clinical background, photorealistic scientific visualization, 8K, no patient faces`,
    "Government & Civics": `Interior wide-angle of a government chamber or courtroom related to "${topic}", accurate architecture, empty seats, dramatic lighting, photorealistic, 8K, no close-up faces`,
    "Psychology": `Overhead flat-lay of psychology research notes, charts, and reference books about "${topic}", organized clean desk, warm light, photorealistic, 8K, no human faces`,
  };

  const template = subjectTemplates[subjectArea];
  if (template) return template;

  // Generic fallback — always environment/object focused, never hands/faces
  return [
    `Photorealistic educational scene illustrating "${topic}" for ${gradeBand} ${subjectArea}.`,
    `Overhead or wide-angle view of relevant objects, equipment, or environment — NO people,`,
    `no hands, no faces. Accurate, clean, well-lit, hyper-detailed, 8K resolution,`,
    `cinematic lighting, sharp focus, suitable for K-12 students.`,
  ].join(" ");
}

// ---------------------------------------------------------------------------
// Grok Aurora image generation
// ---------------------------------------------------------------------------

const GROK_IMAGE_MODEL_DEFAULT = "grok-2-image";

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Call Grok Aurora (xAI image generation) to produce an image from a text prompt.
 * Returns a Buffer containing the PNG image bytes.
 */
async function generateWithGrokAurora(visualPrompt, config) {
  const { grokApiKey, grokImageModel } = config;
  if (!grokApiKey) throw new Error("No GROK_API_KEY — cannot call Grok Aurora");

  const res = await fetch(`${GROK_API_BASE}/images/generations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${grokApiKey}`,
    },
    body: JSON.stringify({
      model: grokImageModel || GROK_IMAGE_MODEL_DEFAULT,
      prompt: visualPrompt,
      n: 1,
      response_format: "b64_json",
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Grok Aurora ${res.status}: ${errText.slice(0, 400)}`);
  }

  const data = await res.json();
  const b64 = data?.data?.[0]?.b64_json;
  if (!b64) throw new Error("Grok Aurora returned no image data");

  return Buffer.from(b64, "base64");
}

/**
 * Persists Aurora image bytes to two locations:
 *  1. ./public/generated-images/<filename>.png
 *     → served by Next.js at /generated-images/<filename>.png
 *  2. <comfyUiOutputDir>/<filename>.png
 *     → lets Wan I2V LoadImage find the file for video jobs
 *
 * Returns { publicUrl, comfyFilename }
 */
function saveAuroraImage(imageBuffer, job, config) {
  const ts = Date.now();
  const safeLessonId = (job.lesson_id ?? job.module_id ?? "ef")
    .replace(/[^a-zA-Z0-9_-]/g, "_")
    .slice(0, 40);
  const filename = `${safeLessonId}_${ts}.png`;

  // 1. Public web folder (Next.js serves this at /generated-images/…)
  const publicDir = path.resolve("public/generated-images");
  ensureDir(publicDir);
  fs.writeFileSync(path.join(publicDir, filename), imageBuffer);
  console.log(`  [aurora] saved to public/generated-images/${filename}`);

  // 2. ComfyUI output folder (so Wan I2V video stage can load it)
  if (config.comfyUiOutputDir) {
    try {
      ensureDir(config.comfyUiOutputDir);
      fs.writeFileSync(path.join(config.comfyUiOutputDir, filename), imageBuffer);
      console.log(`  [aurora] saved to ComfyUI output dir`);
    } catch (e) {
      console.warn(`  [aurora] could not write to ComfyUI output dir: ${e.message}`);
    }
  }

  return {
    publicUrl: `/generated-images/${filename}`,
    comfyFilename: filename,
  };
}

// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const options = {
    limit: 5,
    strictProvider: false,
    reviewedOnly: false,
    mode: null, // null = both image+video, 'image' or 'video'
    help: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") {
      options.help = true;
      continue;
    }
    if (arg === "--limit" && argv[i + 1]) {
      options.limit = Number(argv[i + 1]);
      i += 1;
      continue;
    }
    if (arg === "--strict-provider") {
      options.strictProvider = true;
    }
    if (arg === "--reviewed-only") {
      options.reviewedOnly = true;
    }
    if (arg === "--mode" && argv[i + 1]) {
      options.mode = argv[i + 1];
      i += 1;
      continue;
    }
  }

  return options;
}

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};

  const raw = fs.readFileSync(filePath, "utf8");
  const values = {};
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex <= 0) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    // Strip surrounding quotes (single or double) from values
    const rawValue = trimmed.slice(separatorIndex + 1).trim();
    const value = rawValue.replace(/^(['"])(.*)\1$/, "$2");
    values[key] = value;
  }

  return values;
}

function getErrorMessage(error) {
  if (error instanceof Error) return error.message;
  return String(error);
}

function getJobMetadata(job) {
  if (job?.metadata && typeof job.metadata === "object") {
    return job.metadata;
  }
  return {};
}

function cloneWorkflow(workflow) {
  return JSON.parse(JSON.stringify(workflow));
}

function buildComfyViewUrl(baseUrl, file, format) {
  const params = new URLSearchParams({
    filename: file.filename,
    subfolder: file.subfolder || "",
    type: file.type || "output",
  });

  if (format) {
    params.set("format", format);
  }

  return `${baseUrl}/view?${params.toString()}`;
}

function buildComfyImageRef(file) {
  const subfolder =
    file?.subfolder && typeof file.subfolder === "string" ? file.subfolder.trim() : "";
  const filename = file?.filename && typeof file.filename === "string" ? file.filename : "";

  if (!filename) return "";
  return subfolder ? `${subfolder}/${filename}` : filename;
}

function splitComfyImageRef(imageRef) {
  if (!imageRef || typeof imageRef !== "string") {
    return { filename: "", subfolder: "" };
  }

  const normalized = imageRef.replace(/\\/g, "/").replace(/^\/+/, "");
  const lastSlash = normalized.lastIndexOf("/");
  if (lastSlash < 0) {
    return { filename: normalized, subfolder: "" };
  }

  return {
    filename: normalized.slice(lastSlash + 1),
    subfolder: normalized.slice(0, lastSlash),
  };
}

function normalizeComfyRef(ref) {
  return String(ref || "")
    .trim()
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .replace(/\/+$/, "");
}

function toLoadImageOutputValue(imageRef) {
  const normalized = normalizeComfyRef(imageRef);
  if (!normalized) return "";
  if (/\s+\[output\]$/i.test(normalized)) {
    return normalized.replace(/\s+\[output\]$/i, " [output]");
  }
  return `${normalized} [output]`;
}

async function getComfyOutputFiles(baseUrl) {
  const now = Date.now();
  if (
    comfyOutputFileCache.baseUrl === baseUrl &&
    now - comfyOutputFileCache.fetchedAt <= COMFY_OUTPUT_FILELIST_CACHE_MS
  ) {
    return comfyOutputFileCache.files;
  }

  const res = await fetch(`${baseUrl}/internal/files/output`);
  if (!res.ok) {
    throw new Error(`Unable to read Comfy output file list (${res.status} ${res.statusText})`);
  }

  const payload = await res.json();
  const files = Array.isArray(payload)
    ? new Set(payload.map((entry) => normalizeComfyRef(entry)).filter(Boolean))
    : new Set();

  comfyOutputFileCache.baseUrl = baseUrl;
  comfyOutputFileCache.fetchedAt = now;
  comfyOutputFileCache.files = files;
  return files;
}

function rememberComfyOutputFile(baseUrl, imageRef) {
  const normalized = normalizeComfyRef(imageRef);
  if (!normalized) return;

  if (comfyOutputFileCache.baseUrl !== baseUrl) {
    comfyOutputFileCache.baseUrl = baseUrl;
    comfyOutputFileCache.fetchedAt = Date.now();
    comfyOutputFileCache.files = new Set([normalized]);
    return;
  }

  comfyOutputFileCache.fetchedAt = Date.now();
  comfyOutputFileCache.files.add(normalized);
}

async function comfyOutputImageExists(baseUrl, imageRef) {
  const { filename, subfolder } = splitComfyImageRef(imageRef);
  if (!filename) return false;

  const normalizedFilename = normalizeComfyRef(filename);
  const normalizedRef = normalizeComfyRef(subfolder ? `${subfolder}/${filename}` : filename);

  try {
    const files = await getComfyOutputFiles(baseUrl);
    return files.has(normalizedRef) || files.has(normalizedFilename);
  } catch {
    return false;
  }
}

async function waitForComfyUIHistory(baseUrl, promptId) {
  const start = Date.now();

  while (Date.now() - start < COMFY_JOB_TIMEOUT_MS) {
    try {
      const res = await fetch(`${baseUrl}/history/${promptId}`);
      if (res.ok) {
        const data = await res.json();
        if (data?.[promptId]) {
          return data[promptId];
        }
      }
    } catch {
      // Retry until timeout.
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  throw new Error("ComfyUI generation timed out");
}

async function queueWorkflow(baseUrl, workflow) {
  const queueRes = await fetch(`${baseUrl}/prompt`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: workflow }),
  });

  if (!queueRes.ok) {
    const details = await queueRes.text().catch(() => "");
    throw new Error(
      `ComfyUI queue failed: ${queueRes.status} ${queueRes.statusText}${details ? ` | ${details.slice(0, 500)}` : ""}`,
    );
  }

  return queueRes.json();
}

async function updateJob(supabase, jobId, payload) {
  const { error } = await supabase.from("media_generation_jobs").update(payload).eq("id", jobId);
  if (error) {
    throw error;
  }
}

async function processBaseImageStage(supabase, job, config, isVideoJob) {
  // Step 1: build a topic-specific visual prompt — OpenAI → Grok → rule-based fallback
  const visualPrompt = config.openaiApiKey
    ? await buildVisualPromptWithOpenAI(job, config.openaiApiKey, config.openaiModel)
    : await buildVisualPromptWithGrok(job, config.grokApiKey, config.grokModel);
  const metadata = getJobMetadata(job);

  // Step 2: try Grok Aurora image generation (Super Grok / xAI API)
  if (config.grokApiKey) {
    try {
      console.log(`[job ${job.id}] generating image with Grok Aurora (${config.grokImageModel || GROK_IMAGE_MODEL_DEFAULT})...`);
      const imageBuffer = await generateWithGrokAurora(visualPrompt, config);
      const { publicUrl, comfyFilename } = saveAuroraImage(imageBuffer, job, config);

      // Warm the in-memory cache so Wan I2V validation won't re-fetch the file list
      rememberComfyOutputFile(config.comfyUiBaseUrl, comfyFilename);

      if (isVideoJob) {
        await updateJob(supabase, job.id, {
          status: "queued",
          metadata: {
            ...metadata,
            stage: "generating_video_motion",
            base_image_filename: comfyFilename,
            base_image_subfolder: "",
            base_image_type: "output",
            base_image_ref: comfyFilename,
            base_image_url: publicUrl,
            visual_prompt: visualPrompt,
            image_provider: "grok_aurora",
          },
        });
        console.log(`[job ${job.id}] base image ready (Aurora); moved to video stage`);
        return;
      }

      await updateJob(supabase, job.id, {
        status: "completed",
        output_url: publicUrl,
        completed_at: new Date().toISOString(),
        metadata: { ...metadata, visual_prompt: visualPrompt, image_provider: "grok_aurora" },
      });
      console.log(`[job ${job.id}] image complete (Aurora)`);
      return;
    } catch (auroraErr) {
      console.warn(`[job ${job.id}] Grok Aurora failed (${auroraErr.message}), falling back to ComfyUI Flux`);
    }
  }

  // Step 3 (fallback): ComfyUI Flux
  const workflow = cloneWorkflow(FLUX_WORKFLOW_TEMPLATE);
  workflow["6"].inputs.text = visualPrompt;
  workflow["3"].inputs.seed = Math.floor(Math.random() * 1_000_000_000);

  const safePrefix = (job.lesson_id ?? job.module_id ?? "Koydo")
    .replace(/[^a-zA-Z0-9_-]/g, "_")
    .slice(0, 40);
  workflow["9"].inputs.filename_prefix = `EF_${safePrefix}`;

  const queueData = await queueWorkflow(config.comfyUiBaseUrl, workflow);
  console.log(`[job ${job.id}] queued Flux prompt_id=${queueData.prompt_id}`);

  const history = await waitForComfyUIHistory(config.comfyUiBaseUrl, queueData.prompt_id);
  const outputImages = history?.outputs?.["9"]?.images;

  if (!Array.isArray(outputImages) || outputImages.length === 0) {
    throw new Error("No image output from Flux workflow");
  }

  const image = outputImages[0];
  const imageRef = buildComfyImageRef(image);
  rememberComfyOutputFile(config.comfyUiBaseUrl, imageRef);
  const viewUrl = buildComfyViewUrl(config.comfyUiBaseUrl, image);

  if (isVideoJob) {
    await updateJob(supabase, job.id, {
      status: "queued",
      metadata: {
        ...metadata,
        stage: "generating_video_motion",
        base_image_filename: image.filename,
        base_image_subfolder: image.subfolder || "",
        base_image_type: image.type || "output",
        base_image_ref: imageRef,
        base_image_url: viewUrl,
        visual_prompt: visualPrompt,
        image_provider: "flux",
      },
    });
    console.log(`[job ${job.id}] base image ready (Flux); moved to video stage`);
    return;
  }

  await updateJob(supabase, job.id, {
    status: "completed",
    output_url: viewUrl,
    completed_at: new Date().toISOString(),
    metadata: { ...metadata, visual_prompt: visualPrompt, image_provider: "flux" },
  });
  console.log(`[job ${job.id}] image complete (Flux)`);
}

async function processVideoMotionStage(supabase, job, config) {
  const metadata = getJobMetadata(job);
  const baseFilename = metadata.base_image_filename;
  const baseImageRef =
    typeof metadata.base_image_ref === "string" && metadata.base_image_ref
      ? metadata.base_image_ref
      : metadata.base_image_subfolder
        ? `${metadata.base_image_subfolder}/${baseFilename}`
        : baseFilename;

  if (!baseImageRef || typeof baseImageRef !== "string") {
    throw new Error("Missing base image filename for video stage");
  }

  const baseExists = await comfyOutputImageExists(config.comfyUiBaseUrl, baseImageRef);
  if (!baseExists) {
    console.warn(
      `[job ${job.id}] base image missing in Comfy output (${baseImageRef}); regenerating`,
    );
    await processBaseImageStage(supabase, job, config, true);
    return;
  }

  const workflow = cloneWorkflow(WAN_I2V_WORKFLOW_TEMPLATE);
  workflow["4"].inputs.image = toLoadImageOutputValue(baseImageRef);
  workflow["6"].inputs.seed = Math.floor(Math.random() * 1_000_000_000);

  const queueData = await queueWorkflow(config.comfyUiBaseUrl, workflow);
  console.log(`[job ${job.id}] queued WanI2V prompt_id=${queueData.prompt_id}`);

  const history = await waitForComfyUIHistory(config.comfyUiBaseUrl, queueData.prompt_id);
  const outputNode = history?.outputs?.["9"] || {};
  const videoOutput = outputNode.gifs?.[0] || outputNode.videos?.[0];

  if (!videoOutput) {
    throw new Error("No video output found from Wan I2V workflow");
  }

  const viewUrl = buildComfyViewUrl(config.comfyUiBaseUrl, videoOutput, "mp4");

  await updateJob(supabase, job.id, {
    status: "completed",
    output_url: viewUrl,
    completed_at: new Date().toISOString(),
    metadata: {
      ...metadata,
      stage: "complete",
    },
  });
  console.log(`[job ${job.id}] video complete`);
}

async function processJob(supabase, job, config) {
  const isVideoJob = job.asset_type === "video";
  const metadata = getJobMetadata(job);
  const stage =
    typeof metadata.stage === "string"
      ? metadata.stage
      : isVideoJob
        ? "generating_base_image"
        : "complete_image";

  console.log(`[job ${job.id}] processing stage=${stage} asset_type=${job.asset_type}`);

  try {
    if (stage === "generating_base_image" || stage === "complete_image") {
      await processBaseImageStage(supabase, job, config, isVideoJob);
      return;
    }

    if (stage === "generating_video_motion") {
      await processVideoMotionStage(supabase, job, config);
      return;
    }

    throw new Error(`Unsupported stage '${stage}'`);
  } catch (error) {
    const message = getErrorMessage(error);
    console.error(`[job ${job.id}] failed: ${message}`);
    await updateJob(supabase, job.id, {
      status: "failed",
      error: message,
    });
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    console.log("Usage: node scripts/process-media-jobs.mjs [options]");
    console.log("Options:");
    console.log("  --limit <n>           Number of queued jobs to consider (default: 5)");
    console.log("  --mode <image|video>  Process only one asset type (default: both)");
    console.log("  --strict-provider     Restrict to provider='comfyui'");
    console.log("  -h, --help            Show this help message");
    return;
  }
  const envValues = parseEnvFile(envPath);

  const supabaseUrl =
    envValues.NEXT_PUBLIC_SUPABASE_URL ||
    envValues.EXPO_PUBLIC_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey =
    envValues.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  const comfyUiBaseUrl = envValues.COMFYUI_LAN_URL || "http://127.0.0.1:8188";
  const grokApiKey = envValues.GROK_API_KEY || process.env.GROK_API_KEY || "";
  const grokModel = envValues.GROK_MODEL || process.env.GROK_MODEL || "grok-3-fast";
  const grokImageModel = envValues.GROK_IMAGE_MODEL || process.env.GROK_IMAGE_MODEL || GROK_IMAGE_MODEL_DEFAULT;
  const openaiApiKey = envValues.OPENAI_API_KEY || process.env.OPENAI_API_KEY || "";
  const openaiModel = envValues.OPENAI_MODEL || process.env.OPENAI_MODEL || "gpt-4o-mini";
  // ComfyUI output dir — needed so Aurora images can be placed where LoadImage (Wan I2V) finds them
  const comfyUiOutputDir =
    envValues.COMFYUI_OUTPUT_DIR ||
    process.env.COMFYUI_OUTPUT_DIR ||
    "/home/robertwaltos/Koydo_Media_Engine/ComfyUI/output";

  if (!supabaseUrl || !serviceKey) {
    console.error("Missing Supabase credentials");
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, serviceKey);

  // Filter by asset_type (indexed column) — avoids slow JSONB metadata scan.
  // Audio jobs are stored as asset_type='animation', so this naturally excludes them.
  const assetTypes =
    options.mode === "image" ? ["image"] :
    options.mode === "video" ? ["video"] :
    ["image", "video"];

  let query = supabase
    .from("media_generation_jobs")
    .select("*")
    .eq("status", "queued")
    .in("asset_type", assetTypes)
    .order("created_at", { ascending: true }) // lets Postgres stop after LIMIT rows via (asset_type, status) index
    .limit(options.limit);

  if (options.strictProvider) {
    query = query.eq("provider", "comfyui");
  }

  if (options.reviewedOnly) {
    // Only process jobs queued from reviewed/approved prompts.
    // queue-media-from-prompts.mjs stores promptQaStatus in metadata.prompt_qa_status.
    query = query.eq("metadata->>prompt_qa_status", "reviewed");
  }

  console.log(`Fetching up to ${options.limit} queued jobs (asset_type: ${assetTypes.join("/")})...`);

  const { data: jobs, error } = await query;
  if (error) throw error;

  if (!jobs || jobs.length === 0) {
    console.log("No queued jobs.");
    return;
  }

  console.log(`Processing candidate batch of ${jobs.length} jobs...`);
  if (openaiApiKey) {
    console.log(`  Prompt engine: OpenAI ${openaiModel}`);
  } else if (grokApiKey) {
    console.log(`  Prompt engine: Grok ${grokModel}`);
  } else {
    console.log(`  Prompt engine: rule-based fallback (set OPENAI_API_KEY in .env for AI prompts)`);
  }
  if (grokApiKey) {
    console.log(`  Image provider: Grok Aurora (${grokImageModel}) → ComfyUI Flux fallback`);
  } else {
    console.log(`  Image provider: ComfyUI Flux`);
  }

  let claimedCount = 0;
  let skippedClaimCount = 0;
  for (const job of jobs) {
    const { data: claimedRows, error: claimError } = await supabase
      .from("media_generation_jobs")
      .update({ status: "running" })
      .eq("id", job.id)
      .eq("status", "queued")
      .select("id");

    if (claimError) {
      console.error(`[job ${job.id}] claim failed: ${claimError.message}`);
      continue;
    }

    if (!Array.isArray(claimedRows) || claimedRows.length === 0) {
      skippedClaimCount += 1;
      console.log(`[job ${job.id}] skipped (already claimed by another worker)`);
      continue;
    }

    claimedCount += 1;
    await processJob(supabase, job, { comfyUiBaseUrl, grokApiKey, grokModel, grokImageModel, openaiApiKey, openaiModel, comfyUiOutputDir });
  }

  console.log(`Batch complete. Claimed: ${claimedCount}. Skipped claim: ${skippedClaimCount}.`);
}

main().catch((error) => {
  console.error("Fatal:", error);
  process.exit(1);
});
