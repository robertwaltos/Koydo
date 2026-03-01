/**
 * generate-hero-evo3.mjs
 *
 * RESET SOURCE to hero-diverse-v4.jpg — the last image where people
 * were correctly ON the glowing cobblestone path.
 *
 * Problem with previous runs: source had drifted to grass, so img2img
 * inherited the wrong composition. This script goes back to the path.
 *
 * Key prompt discipline:
 *  - People are ON the path. Only the path. Not grass. Not beside it.
 *  - Path fills the lower foreground. People stand on it.
 *  - Staggered depth: toddler foreground → boy near → teen mid →
 *    woman far → man at vanishing point.
 *  - Asian toddler (1st) and Asian boy (2nd)
 *  - Woman ~26-28, man ~36-38
 *  - Left bg: Victorian red-brick buildings
 *  - Right bg: futuristic glass highrises
 *  - ONE tree — far-right edge only
 *  - Milky Way sky, evolution panorama
 *
 * Higher denoise (0.82–0.92) to allow background transformation
 * while forcing path-based composition.
 *
 * Outputs: public/generated-images/hero-evo3-v{1-4}.jpg
 *
 * Usage:
 *   node scripts/generate-hero-evo3.mjs
 *   node scripts/generate-hero-evo3.mjs --v 2
 *   node scripts/generate-hero-evo3.mjs --check
 */

import fs   from "node:fs/promises";
import path from "node:path";

const COMFYUI_URL = process.env.COMFYUI_LAN_URL || process.env.COMFYUI_BASE_URL || "http://127.0.0.1:8188";
// ← Back to the image where people were ON the path
const SOURCE      = path.resolve("public/generated-images/hero-diverse-v4.jpg");
const OUT_DIR     = path.resolve("public/generated-images");

const MODEL     = "flux1-dev-fp8.safetensors";
const STEPS     = 40;
const CFG       = 1.0;
const SAMPLER   = "euler";
const SCHEDULER = "simple";
const W = 1920;
const H = 1080;

// ── Negative — strongly suppress grass/park and side-by-side line ─────────────
const NEG = "text, watermark, logo, blurry, deformed face, extra limbs, bad anatomy, ugly, cartoon, anime, illustration, low quality, mutation, disfigured, sad expression, grass path, people on grass, people standing beside path, people off the path, straight line of people at same depth, people floating, park lawn, green meadow floor, garden path, multiple trees, modern park, playground, people lined up side by side";

// ── PATH — the single most important element, stated first and emphatically ────
const PATH_ANCHOR = `CRITICAL COMPOSITION RULE: The glowing amber-golden cobblestone path is the ONLY surface anyone stands on. All five people are ON the path. No one is on grass. No one is beside the path. The path IS the ground. It runs from the lower foreground into the distance with strong perspective — wide at the front, narrowing toward a vanishing point. The path glows warmly from within, casting amber light upward onto every face. The path occupies the full lower half of the frame.`;

// ── Depth arrangement — each person at a different distance from camera ────────
const DEPTH_RULE = `DEPTH AND SPACING: The five learners are at FIVE DIFFERENT DEPTHS on the path — staggered naturally as if walking at their own pace, NOT standing in a line side by side. The toddler is closest to the camera (FOREGROUND — largest figure, most detail). Each successive person is further back on the receding path and proportionally smaller. The man is near the vanishing point (smallest, most distant). They are offset left and right naturally, as people walk, not standing shoulder-to-shoulder.`;

// ── Characters ────────────────────────────────────────────────────────────────
const CHARS = {
  V1:
`Five diverse learners ON the glowing cobblestone path, at staggered depths:

1. FOREGROUND — East Asian toddler girl, age 3, the closest to camera and largest in frame. Short jet-black hair, round rosy cheeks, wearing a bright red and yellow children's backpack with cartoon patches. Laughing with pure delight. Her feet are firmly on the glowing cobblestones. Face lit warmly from below by the path glow.

2. NEAR — East Asian boy, age 8, slightly further back on the path and offset to the right. Neat dark hair, bright eyes, white polo shirt, blue school backpack on his back. Big enthusiastic grin. His feet on the cobblestones.

3. MID-PATH — Biracial teenage girl, age 15, medium depth on the path. Natural curly dark hair, white blouse, plaid skirt, school backpack. Warm radiant smile. She is visibly smaller than the boy due to path perspective.

4. FAR — Young South Asian-British woman, approximately 27 years old, youthful and energetic. Smart fitted blazer, sleek laptop shoulder bag. Glowing confident smile. Further along the path, noticeably smaller in frame.

5. DISTANT — Black man, approximately 37 years old, athletic and elegant. Dark charcoal suit, laptop briefcase. Genuine warm broad smile. He is near the vanishing point of the path — the smallest figure — with the full Milky Way blazing behind him.`,

  V2:
`A natural procession of five diverse learners walking ON the glowing golden cobblestone path at different distances from the camera:

CLOSEST (foreground): Sweet East Asian toddler girl, 3 years old, bright red children's backpack with star patches, jet-black pigtails, laughing with total joy. She is the largest figure. Her feet on the glowing path stones.

NEAR (slightly back, left-offset): Energetic East Asian schoolboy, 8, school backpack over white polo, short dark hair, huge excited grin. On the path, a step behind and to the side of the toddler.

MID (medium depth, centred): Radiant biracial teenage girl, 15, voluminous natural curly hair, plaid skirt and white blouse, backpack. Warm genuine smile. Centred on the path at medium distance.

FAR (receding): Youthful Indian-British professional woman, 26-28 years old, tailored blazer, carrying a sleek laptop bag. Radiant smile. Visibly smaller than the teen. Further up the perspective path.

VANISHING POINT (most distant): Tall Black man, 36-38 years old, sharp charcoal suit, laptop briefcase at his side. Broad warm genuine smile. Near the horizon of the path — smallest figure, the cosmic sky fully visible around him.`,

  V3:
`Five people of different ages and races walking at staggered intervals ON a glowing amber cobblestone path that recedes with strong cinematic perspective:

IN FOREGROUND — massive and close: East Asian girl toddler, 3, cute round face, short black hair, colourful backpack (green dinosaur design), giggling. Standing ON the cobblestones, path-glow lighting her face from below.

SECOND — just behind, right side of path: East Asian boy, 8-9, dark hair, white school shirt, red backpack, big happy smile, on the path.

THIRD — middle distance, centred: Biracial teen girl, 15, natural curly mixed-heritage hair, white blouse, plaid skirt, school backpack, glowing warm smile, on the path.

FOURTH — further back, left of centre: South Asian-British woman, 27, looks youthfully in her late-20s, fitted jacket, sleek laptop bag, confident joyful smile, on the path, noticeably further away.

FIFTH — near vanishing point: Athletic Black man, 37, charcoal suit, laptop briefcase, warm broad smile, most distant figure on the path, framed by the cosmic sky behind him.`,

  V4:
`Cinematic wide-angle shot of five diverse learners walking ALONG THE CENTRE OF a glowing amber-gold cobblestone path. Path is wide in the foreground and narrows with perspective toward the background sky. EVERYONE IS ON THE PATH.

FOREGROUND CENTRE: East Asian toddler girl, 3, largest figure in frame. Colourful children's backpack, straight black hair, rosy round face, laughing with delight. Path glow lights her from below.

NEAR BACKGROUND, OFFSET RIGHT: East Asian boy, 8, school backpack, white polo, dark hair, wide excited grin. On the path, set back from the toddler.

MID BACKGROUND, CENTRED: Biracial teenage girl, 15, gorgeous natural curly hair, plaid skirt, white top, school backpack, warm radiant smile. On the path at medium depth.

FURTHER BACKGROUND, LEFT: Young South Asian-British woman, 26-28, youthful professional appearance, smart blazer, sleek laptop shoulder bag, glowing happy expression. On the path, receding further.

FAR BACKGROUND AT HORIZON: Black professional man, 36-38, athletic build, dark charcoal suit, laptop briefcase, genuine warm smile. Near the vanishing point of the path. Smallest figure.`,
};

// ── Background — evolution panorama ──────────────────────────────────────────
const BACKGROUND = `
BACKGROUND (left to right — human evolution panorama):

FAR LEFT — behind the toddler: Traditional Victorian red-brick buildings with arched windows, ornate stone cornices, wrought-iron lampposts glowing amber. Dark-brick Victorian and Edwardian architecture. Warm streetlight tones. Narrow cobblestone side alleys.

CENTRE-LEFT — behind the boy: Transition zone — ancient stone structures mixed with early brick. Egyptian pyramid silhouette and Greek column visible in the distant haze. A sense of civilisations rising. Starlit sky beginning.

CENTRE — behind the teen: Renaissance and Enlightenment imagery. A grand domed observatory, early telescopes aimed at the sky, globes and maps lit by candlelight, da Vinci flying machine sketches as glowing tracery. The Milky Way becoming visible.

CENTRE-RIGHT — behind the woman: Modern and near-future. Gleaming glass office towers lit at night, a rocket launching on the far horizon with a bright exhaust plume, satellite dishes, circuit-board light patterns at the base of buildings. The Milky Way blazing fully overhead.

FAR RIGHT — behind the man: Breathtaking futuristic highrises. Crystalline glass skyscrapers with bioluminescent facades, blue-gold holographic patterns on building surfaces, a space elevator cable rising from the tallest tower into the stars above. ONE single large mature tree with a wide canopy silhouetted dramatically at the very far-right edge — a symbol of nature enduring through all progress. Planets visible in the sky. Nebulae in teal and violet.

SKY: A single continuous Milky Way panorama from left to right — growing denser, brighter, and more spectacular toward the right. Deep-space nebula clouds in teal and violet. Full starfield. The sky feels like humanity's destination.`;

const SUFFIX = `Ultra-realistic photorealistic 4K. Distinct faces, diverse natural skin tones, photographic skin texture. Cinematic lighting. No text. No logos.`;

const build = (chars, denoise) => `${PATH_ANCHOR}\n\n${DEPTH_RULE}\n\n${chars}\n\n${BACKGROUND}\n\n${SUFFIX}`;

const VARIANTS = [
  { id: "V1", denoise: 0.82, positive: build(CHARS.V1) },
  { id: "V2", denoise: 0.85, positive: build(CHARS.V2) },
  { id: "V3", denoise: 0.88, positive: build(CHARS.V3) },
  { id: "V4", denoise: 0.92, positive: build(CHARS.V4) },
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
    "9": { class_type: "SaveImage",  inputs: { filename_prefix: "HeroEvo3", images: ["8", 0] } },
  };
}

// ── Helpers ───────────────────────────────────────────────────────────────────
async function checkHealth() {
  const res   = await fetch(`${COMFYUI_URL}/system_stats`, { signal: AbortSignal.timeout(5000) });
  if (!res.ok) throw new Error(`ComfyUI offline: ${res.status}`);
  const stats = await res.json();
  const dev   = stats.devices?.[0];
  const used  = Math.round((dev.vram_total - dev.vram_free) / 1024 ** 3 * 10) / 10;
  const total = Math.round(dev.vram_total / 1024 ** 3);
  console.log(`✓ ComfyUI online — VRAM: ${used}/${total}GB`);
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

async function poll(promptId, timeoutMs = 30 * 60 * 1000) {
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
  console.log(`       (people ON path — corrected source)`);
  const srcName = await uploadImage(SOURCE);
  console.log(`✓ Uploaded: ${srcName}\n`);

  await fs.mkdir(OUT_DIR, { recursive: true });

  const targets = singleV
    ? VARIANTS.filter((_, i) => i + 1 === singleV)
    : VARIANTS;

  for (const [i, v] of targets.entries()) {
    const vNum    = VARIANTS.indexOf(v) + 1;
    const outFile = path.join(OUT_DIR, `hero-evo3-v${vNum}.jpg`);
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

  console.log("✓ Done. Review: public/generated-images/hero-evo3-v{1-4}.jpg");
  console.log("\nPromote winner:");
  console.log("  cp public/generated-images/hero-evo3-v2.jpg public/hero-family.jpg");
}

main().catch(err => { console.error("Fatal:", err.message); process.exitCode = 1; });
