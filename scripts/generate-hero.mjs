/**
 * Hero image img2img generator — ComfyUI + Flux Dev fp8
 *
 * Loads the original hero image, upscales it to 1920×1080, then runs
 * 4 img2img passes at increasing denoise strengths so you can pick
 * the best quality/faithfulness trade-off.
 *
 * denoise guide:
 *   0.30 → subtle quality boost, very faithful to original composition
 *   0.45 → fixes faces/skin, sharpens detail, structure mostly preserved  ← recommended
 *   0.60 → noticeable quality jump, some composition drift
 *   0.75 → photorealistic overhaul, higher drift risk
 *
 * Usage:
 *   node scripts/generate-hero.mjs                    # all 4 denoise variants
 *   node scripts/generate-hero.mjs --variant 2        # single variant (1-indexed)
 *   node scripts/generate-hero.mjs --check            # health check only
 *
 * After reviewing, promote the winner:
 *   cp public/generated-images/hero-img2img-v2.jpg public/hero-family.jpg
 */

import fs   from "node:fs/promises";
import path from "node:path";

const COMFYUI_URL  = process.env.COMFYUI_LAN_URL || process.env.COMFYUI_BASE_URL || "http://127.0.0.1:8188";
const SOURCE_IMAGE = path.resolve("public/Grok Assets/hero panel image.jpg");
const OUT_DIR      = path.resolve("public/generated-images");

// ── Model & sampler ───────────────────────────────────────────────────────────
const MODEL     = "flux1-dev-fp8.safetensors";
const STEPS     = 28;
const CFG       = 1.0;
const SAMPLER   = "euler";
const SCHEDULER = "simple";

// ── Target resolution ─────────────────────────────────────────────────────────
// Source is 1296×800. We scale to 1920×1080 before encoding to latent.
// The img2img pass then generates at 1920×1080.
const TARGET_W = 1920;
const TARGET_H = 1080;

// ── Prompt — quality enhancement, preserve the cosmic-path scene ──────────────
// Keep it scene-descriptive so Flux reinforces what's already there.
const POSITIVE = "Photorealistic family walking on a luminous glowing golden cobblestone path through a magical cosmic night landscape. Starfield sky with teal-blue nebula clouds and Milky Way. Lush green meadow, purple wildflowers, cherry blossom trees. Warm amber path-light illuminating faces from below. Casual modern clothing, natural poses. Ultra-detailed realistic skin texture, natural hair. 4K cinematic, highly detailed faces, no text, no logos.";
const NEGATIVE = "text, watermark, logo, blurry, cartoon, anime, illustration, low quality, deformed face, extra limbs, distorted, briefcase, suitcase, bad anatomy, ugly, out of frame";

// ── 4 variants at increasing denoise strength ─────────────────────────────────
const VARIANTS = [
  { id: "V1_DENOISE_30", denoise: 0.30, label: "subtle quality boost — max faithful" },
  { id: "V2_DENOISE_45", denoise: 0.45, label: "recommended — better faces, same composition" },
  { id: "V3_DENOISE_60", denoise: 0.60, label: "stronger enhancement, light drift" },
  { id: "V4_DENOISE_75", denoise: 0.75, label: "photorealistic overhaul, some drift" },
];

// ── ComfyUI workflow builder (img2img) ────────────────────────────────────────
// Node layout:
//   1 LoadImage  →  2 ImageScale (to 1920×1080)  →  3 VAEEncode
//   4 CheckpointLoaderSimple
//   5 CLIPTextEncode (positive)
//   6 CLIPTextEncode (negative)
//   7 KSampler (denoise < 1.0, latent from node 3)
//   8 VAEDecode  →  9 SaveImage
function buildWorkflow(uploadedFilename, denoise, seed) {
  return {
    "1": {
      class_type: "LoadImage",
      inputs: { image: uploadedFilename, upload: "image" },
    },
    "2": {
      class_type: "ImageScale",
      inputs: {
        image:         ["1", 0],
        width:         TARGET_W,
        height:        TARGET_H,
        upscale_method: "lanczos",
        crop:          "disabled",
      },
    },
    "3": {
      class_type: "VAEEncode",
      inputs: { pixels: ["2", 0], vae: ["4", 2] },
    },
    "4": {
      class_type: "CheckpointLoaderSimple",
      inputs: { ckpt_name: MODEL },
    },
    "5": {
      class_type: "CLIPTextEncode",
      inputs: { text: POSITIVE, clip: ["4", 1] },
    },
    "6": {
      class_type: "CLIPTextEncode",
      inputs: { text: NEGATIVE, clip: ["4", 1] },
    },
    "7": {
      class_type: "KSampler",
      inputs: {
        seed,
        steps:        STEPS,
        cfg:          CFG,
        sampler_name: SAMPLER,
        scheduler:    SCHEDULER,
        denoise,
        model:        ["4", 0],
        positive:     ["5", 0],
        negative:     ["6", 0],
        latent_image: ["3", 0],
      },
    },
    "8": {
      class_type: "VAEDecode",
      inputs: { samples: ["7", 0], vae: ["4", 2] },
    },
    "9": {
      class_type: "SaveImage",
      inputs: { filename_prefix: "HeroImg2Img", images: ["8", 0] },
    },
  };
}

// ── ComfyUI API helpers ───────────────────────────────────────────────────────
async function checkHealth() {
  const res = await fetch(`${COMFYUI_URL}/system_stats`, { signal: AbortSignal.timeout(5000) });
  if (!res.ok) throw new Error(`ComfyUI offline: ${res.status}`);
  const stats = await res.json();
  const dev   = stats.devices?.[0];
  const vramUsedGB  = Math.round((dev.vram_total - dev.vram_free) / 1024 / 1024 / 1024 * 10) / 10;
  const vramTotalGB = Math.round(dev.vram_total / 1024 / 1024 / 1024);
  console.log(`✓ ComfyUI online — ${COMFYUI_URL}`);
  console.log(`  VRAM: ${vramUsedGB}GB used / ${vramTotalGB}GB total`);
}

async function uploadImage(filePath) {
  const fileBuffer  = await fs.readFile(filePath);
  const fileName    = path.basename(filePath);
  const boundary    = "----FormBoundary" + Math.random().toString(36).slice(2);

  // Build multipart/form-data body manually (no external deps)
  const prefix  = `--${boundary}\r\nContent-Disposition: form-data; name="image"; filename="${fileName}"\r\nContent-Type: image/jpeg\r\n\r\n`;
  const suffix  = `\r\n--${boundary}--\r\n`;
  const body    = Buffer.concat([Buffer.from(prefix), fileBuffer, Buffer.from(suffix)]);

  const res = await fetch(`${COMFYUI_URL}/upload/image`, {
    method:  "POST",
    headers: { "Content-Type": `multipart/form-data; boundary=${boundary}` },
    body,
  });
  if (!res.ok) throw new Error(`Upload failed: ${res.status} ${await res.text()}`);
  const { name } = await res.json();
  return name; // filename as stored in ComfyUI's input dir
}

async function queuePrompt(workflow) {
  const res = await fetch(`${COMFYUI_URL}/prompt`, {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify({ prompt: workflow }),
  });
  if (!res.ok) throw new Error(`Queue failed: ${res.status} ${await res.text()}`);
  const { prompt_id } = await res.json();
  return prompt_id;
}

async function pollHistory(promptId, timeoutMs = 20 * 60 * 1000) {
  const deadline = Date.now() + timeoutMs;
  let dots = 0;
  while (Date.now() < deadline) {
    await new Promise(r => setTimeout(r, 4000));
    process.stdout.write(`\r  Generating${".".repeat(dots++ % 4 + 1)}   `);
    const res = await fetch(`${COMFYUI_URL}/history/${promptId}`);
    if (!res.ok) continue;
    const history = await res.json();
    const entry   = history[promptId];
    if (!entry) continue;
    const images  = entry.outputs?.["9"]?.images;
    if (images?.length) {
      process.stdout.write("\r                      \r");
      return images[0];
    }
  }
  throw new Error(`Timed out waiting for ${promptId}`);
}

async function downloadImage(imageInfo) {
  const params = new URLSearchParams({
    filename:  imageInfo.filename,
    subfolder: imageInfo.subfolder ?? "",
    type:      imageInfo.type ?? "output",
  });
  const res = await fetch(`${COMFYUI_URL}/view?${params}`);
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  const args       = process.argv.slice(2);
  const checkOnly  = args.includes("--check");
  const variantIdx = args.indexOf("--variant");
  const variantNum = variantIdx !== -1 ? parseInt(args[variantIdx + 1], 10) : null;

  await checkHealth();
  if (checkOnly) return;

  // Upload the source image once — reused for all variants
  console.log(`\nUploading source: ${path.relative(process.cwd(), SOURCE_IMAGE)}`);
  const uploadedName = await uploadImage(SOURCE_IMAGE);
  console.log(`  ✓ Uploaded as: ${uploadedName}`);

  await fs.mkdir(OUT_DIR, { recursive: true });

  const targets = variantNum
    ? VARIANTS.filter((_, i) => i + 1 === variantNum)
    : VARIANTS;

  for (const [i, variant] of targets.entries()) {
    const variantIndex = VARIANTS.indexOf(variant) + 1;
    const outFile      = path.join(OUT_DIR, `hero-img2img-v${variantIndex}.jpg`);

    console.log(`\n[${i + 1}/${targets.length}] ${variant.id}`);
    console.log(`  denoise=${variant.denoise}  — ${variant.label}`);
    console.log(`  ${TARGET_W}×${TARGET_H}  steps=${STEPS}  model=${MODEL}`);

    const seed     = Math.floor(Math.random() * 1_000_000_000);
    const workflow = buildWorkflow(uploadedName, variant.denoise, seed);
    const promptId = await queuePrompt(workflow);
    console.log(`  Queued → ${promptId}  seed=${seed}`);

    const imageInfo = await pollHistory(promptId);
    const buffer    = await downloadImage(imageInfo);
    await fs.writeFile(outFile, buffer);

    console.log(`  ✓ Saved → ${path.relative(process.cwd(), outFile)}  (${Math.round(buffer.length / 1024)}KB)`);
  }

  console.log(`\n✓ All done. Review outputs in public/generated-images/`);
  console.log(`\n  Promote winner (e.g. V2):`);
  console.log(`  cp public/generated-images/hero-img2img-v2.jpg public/hero-family.jpg`);
}

main().catch(err => {
  console.error("\nFatal:", err.message);
  process.exitCode = 1;
});
