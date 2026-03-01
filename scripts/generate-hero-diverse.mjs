/**
 * generate-hero-diverse.mjs
 *
 * Runs 4 img2img variations from hero-img2img-v3.jpg.
 * Goal: keep the glowing-path composition, make learners racially diverse,
 *       give young learners backpacks, older learners laptops/cases, all smiling.
 *
 * Quality settings: 40 steps (max quality, slower is fine).
 * ComfyUI server already running with --highvram for full GPU utilisation.
 *
 * Outputs: public/generated-images/hero-diverse-v{1-4}.jpg
 *
 * Usage:
 *   node scripts/generate-hero-diverse.mjs            # all 4
 *   node scripts/generate-hero-diverse.mjs --v 2      # single variant
 *   node scripts/generate-hero-diverse.mjs --check
 *
 * Promote winner:
 *   cp public/generated-images/hero-diverse-v2.jpg public/hero-family.jpg
 */

import fs   from "node:fs/promises";
import path from "node:path";

const COMFYUI_URL = process.env.COMFYUI_LAN_URL || process.env.COMFYUI_BASE_URL || "http://127.0.0.1:8188";
const SOURCE      = path.resolve("public/generated-images/hero-img2img-v3.jpg");
const OUT_DIR     = path.resolve("public/generated-images");

// ── Quality settings — speed is NOT a priority ────────────────────────────────
const MODEL     = "flux1-dev-fp8.safetensors";
const STEPS     = 40;          // higher than default 28 for more detail
const CFG       = 1.0;         // Flux flow-matching: keep at 1.0
const SAMPLER   = "euler";
const SCHEDULER = "simple";

// Target resolution matches the source
const W = 1920;
const H = 1080;

// ── Negative ──────────────────────────────────────────────────────────────────
const NEG = "text, watermark, logo, blurry, deformed face, extra limbs, bad anatomy, ugly, cartoon, anime, illustration, low quality, mutation, disfigured, sad expression, frowning, briefcase held by child, toddler with suitcase";

// ── Core prompt — describes each person left-to-right explicitly ──────────────
// Composition stays: 5 learners on glowing golden cobblestone path, cosmic sky.
// Characters (left → right, matching v3 positions):
//   1. Toddler Black girl, ~age 3, wearing a bright red backpack, smiling
//   2. Latino boy, ~age 8, white polo shirt, school backpack, big grin
//   3. Asian teenage girl, ~age 15, plaid skirt, school backpack, warm smile
//   4. South Asian adult woman, ~30s, carrying a laptop bag, radiant smile
//   5. Black adult man, ~40s, dark business suit, carrying laptop briefcase, warm smile
//
// Scene keywords applied to all:
//   ultra-detailed photorealistic faces, diverse skin tones, natural hair textures,
//   happy joyful expressions, path glow from below, cosmic nebula sky
const SCENE = "on a glowing amber-golden cobblestone path through a magical night landscape, Milky Way starfield sky with teal-blue nebula clouds, cherry blossom trees, lush meadow with purple wildflowers, warm path-glow lighting from below on each face, cinematic photorealistic 4K, ultra-detailed skin texture, natural hair, no text, no logos";

const CHARACTER_PROMPTS = {
  // Vary slightly across variants for different racial/expression renderings
  V1: `Five happy diverse learners walking together ${SCENE}. Left to right: (1) cheerful toddler Black girl age 3 wearing a bright red and yellow children's backpack, big smile; (2) happy Latino boy age 8 in white polo shirt and shorts wearing a blue school backpack, grinning widely; (3) joyful Asian teenage girl age 15 in white top and plaid skirt with a school backpack on her back, warm bright smile; (4) smiling South Asian adult woman in her 30s in a grey jacket carrying a sleek laptop bag, confident happy expression; (5) warm smiling Black adult man in his 40s in a dark business suit carrying a professional leather laptop briefcase, broad genuine smile. All faces showing distinct skin tones, unique ethnic facial features, and joyful expressions.`,

  V2: `Five smiling diverse students and learners of different ages walking together ${SCENE}. Left to right: (1) delighted toddler dark-skinned Black girl age 3 with a small colourful backpack on her back, laughing; (2) cheerful curly-haired Latino boy age 9 wearing a school backpack and white polo, bright grin; (3) happy East Asian teenage girl age 14 in school uniform with a backpack, genuine warm smile; (4) joyful Indian adult woman early 30s wearing a jacket and carrying a grey laptop bag, radiant smile; (5) confident tall Black man in his 40s in a tailored dark suit holding a sleek laptop case, warm open smile. Distinct faces, different skin tones ranging from deep brown to medium tan.`,

  V3: `Five diverse learners of all ages walking joyfully together ${SCENE}. Leftmost: small toddler African American girl age 3 wearing a bright green dinosaur backpack, giggling with delight; second: Hispanic boy age 8 with dark curly hair wearing a backpack and white school shirt, big happy smile; third: Korean teenage girl age 16 in blouse and plaid skirt with a school backpack, elegant warm smile; fourth: South Asian woman in her 30s in a light jacket with a professional laptop bag, confident joyful expression; rightmost: tall Black man in his late 40s in a dark business suit carrying a polished leather laptop case, broad warm smile. Highly photorealistic distinct faces, diverse skin tones.`,

  V4: `Five happy diverse people representing all ages and backgrounds walking together ${SCENE}. From left: (1) tiny toddler Black girl age 2-3 with a little red backpack with cartoon patches, laughing face; (2) energetic Latino-mixed boy age 8 wearing a school backpack strapped over white polo, huge grin showing teeth; (3) confident biracial teenage girl age 15 with natural curly hair, white top and plaid skirt, school backpack, warm bright smile; (4) professional Indian-British adult woman in her 30s, carrying a sleek black laptop bag, glowing happy smile; (5) distinguished Black man in his 40s in dark charcoal suit, carrying a laptop briefcase, genuine warm broad smile. Ultra-realistic skin tones, photographic face detail, natural expressions of joy.`,
};

// ── Denoise variants — all around 0.58 (keeps composition, changes faces/items) ─
// Different seeds give different renderings of the diverse faces.
const VARIANTS = [
  { id: "V1", denoise: 0.55, positive: CHARACTER_PROMPTS.V1 },
  { id: "V2", denoise: 0.58, positive: CHARACTER_PROMPTS.V2 },
  { id: "V3", denoise: 0.60, positive: CHARACTER_PROMPTS.V3 },
  { id: "V4", denoise: 0.62, positive: CHARACTER_PROMPTS.V4 },
];

// ── Workflow ──────────────────────────────────────────────────────────────────
function buildWorkflow(filename, positive, denoise, seed) {
  return {
    "1": { class_type: "LoadImage",              inputs: { image: filename, upload: "image" } },
    "2": { class_type: "ImageScale",             inputs: { image: ["1", 0], width: W, height: H, upscale_method: "lanczos", crop: "disabled" } },
    "3": { class_type: "CheckpointLoaderSimple", inputs: { ckpt_name: MODEL } },
    "4": { class_type: "VAEEncode",              inputs: { pixels: ["2", 0], vae: ["3", 2] } },
    "5": { class_type: "CLIPTextEncode",         inputs: { text: positive, clip: ["3", 1] } },
    "6": { class_type: "CLIPTextEncode",         inputs: { text: NEG,      clip: ["3", 1] } },
    "7": {
      class_type: "KSampler",
      inputs: {
        seed, steps: STEPS, cfg: CFG,
        sampler_name: SAMPLER, scheduler: SCHEDULER, denoise,
        model: ["3", 0], positive: ["5", 0], negative: ["6", 0], latent_image: ["4", 0],
      },
    },
    "8": { class_type: "VAEDecode",  inputs: { samples: ["7", 0], vae: ["3", 2] } },
    "9": { class_type: "SaveImage",  inputs: { filename_prefix: "HeroDiverse", images: ["8", 0] } },
  };
}

// ── ComfyUI helpers ───────────────────────────────────────────────────────────
async function checkHealth() {
  const res   = await fetch(`${COMFYUI_URL}/system_stats`, { signal: AbortSignal.timeout(5000) });
  if (!res.ok) throw new Error(`ComfyUI offline: ${res.status}`);
  const stats = await res.json();
  const dev   = stats.devices?.[0];
  const used  = Math.round((dev.vram_total - dev.vram_free) / 1024 ** 3 * 10) / 10;
  const total = Math.round(dev.vram_total / 1024 ** 3);
  console.log(`✓ ComfyUI online — VRAM: ${used}/${total}GB  (--highvram active)`);
}

async function uploadImage(filePath) {
  const buf      = await fs.readFile(filePath);
  const fname    = path.basename(filePath);
  const boundary = "----FB" + Math.random().toString(36).slice(2);
  const pre      = `--${boundary}\r\nContent-Disposition: form-data; name="image"; filename="${fname}"\r\nContent-Type: image/jpeg\r\n\r\n`;
  const suf      = `\r\n--${boundary}--\r\n`;
  const body     = Buffer.concat([Buffer.from(pre), buf, Buffer.from(suf)]);
  const res      = await fetch(`${COMFYUI_URL}/upload/image`, {
    method: "POST", headers: { "Content-Type": `multipart/form-data; boundary=${boundary}` }, body,
  });
  if (!res.ok) throw new Error(`Upload failed: ${res.status} ${await res.text()}`);
  return (await res.json()).name;
}

async function queue(workflow) {
  const res = await fetch(`${COMFYUI_URL}/prompt`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: workflow }),
  });
  if (!res.ok) throw new Error(`Queue failed: ${res.status} ${await res.text()}`);
  return (await res.json()).prompt_id;
}

async function poll(promptId, timeoutMs = 25 * 60 * 1000) {
  const deadline = Date.now() + timeoutMs;
  let dots = 0;
  while (Date.now() < deadline) {
    await new Promise(r => setTimeout(r, 4000));
    process.stdout.write(`\r  Generating${".".repeat(dots++ % 4 + 1)}   `);
    const res  = await fetch(`${COMFYUI_URL}/history/${promptId}`);
    if (!res.ok) continue;
    const hist = await res.json();
    const imgs = hist[promptId]?.outputs?.["9"]?.images;
    if (imgs?.length) { process.stdout.write("\r                        \r"); return imgs[0]; }
  }
  throw new Error(`Timeout: ${promptId}`);
}

async function download(info) {
  const p   = new URLSearchParams({ filename: info.filename, subfolder: info.subfolder ?? "", type: info.type ?? "output" });
  const res = await fetch(`${COMFYUI_URL}/view?${p}`);
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  const args      = process.argv.slice(2);
  const checkOnly = args.includes("--check");
  const vIdx      = args.indexOf("--v");
  const singleV   = vIdx !== -1 ? parseInt(args[vIdx + 1], 10) : null;

  await checkHealth();
  if (checkOnly) return;

  console.log(`\nSource: ${path.relative(process.cwd(), SOURCE)}`);
  const srcName = await uploadImage(SOURCE);
  console.log(`✓ Uploaded: ${srcName}\n`);

  await fs.mkdir(OUT_DIR, { recursive: true });

  const targets = singleV
    ? VARIANTS.filter((_, i) => i + 1 === singleV)
    : VARIANTS;

  for (const [i, v] of targets.entries()) {
    const vNum    = VARIANTS.indexOf(v) + 1;
    const outFile = path.join(OUT_DIR, `hero-diverse-v${vNum}.jpg`);
    const seed    = Math.floor(Math.random() * 1_000_000_000);

    console.log(`[${i + 1}/${targets.length}] ${v.id}  denoise=${v.denoise}  steps=${STEPS}  seed=${seed}`);

    const wf       = buildWorkflow(srcName, v.positive, v.denoise, seed);
    const promptId = await queue(wf);
    console.log(`  Queued → ${promptId}`);

    const info   = await poll(promptId);
    const buf    = await download(info);
    await fs.writeFile(outFile, buf);
    console.log(`  ✓ ${path.relative(process.cwd(), outFile)}  (${Math.round(buf.length / 1024)}KB)\n`);
  }

  console.log("✓ Done. Review: public/generated-images/hero-diverse-v{1-4}.jpg");
  console.log("\nPromote winner:");
  console.log("  cp public/generated-images/hero-diverse-v2.jpg public/hero-family.jpg");
}

main().catch(err => { console.error("Fatal:", err.message); process.exitCode = 1; });
