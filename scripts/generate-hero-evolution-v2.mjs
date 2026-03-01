/**
 * generate-hero-evolution-v2.mjs
 *
 * Refined hero evolution image:
 *  - Asian toddler girl (1st) and Asian boy (2nd) — ethnicity updated
 *  - Woman and man look 5 years younger (~25-28 and ~35-38)
 *  - Characters staggered naturally on the path with depth/perspective
 *    (toddler closest to camera / foreground, others receding)
 *  - ONE tree on far right edge only — others replaced with futuristic highrises
 *  - Left background: traditional brick construction / Victorian-era buildings
 *  - Right background: gleaming futuristic glass highrises
 *  - 4 variants, 40 steps, max quality
 *
 * Source: public/generated-images/hero-evolution-v2.jpg  (or -v1.jpg)
 * Outputs: public/generated-images/hero-evo2-v{1-4}.jpg
 *
 * Usage:
 *   node scripts/generate-hero-evolution-v2.mjs
 *   node scripts/generate-hero-evolution-v2.mjs --v 2
 *   node scripts/generate-hero-evolution-v2.mjs --check
 *
 * Promote winner:
 *   cp public/generated-images/hero-evo2-v2.jpg public/hero-family.jpg
 */

import fs   from "node:fs/promises";
import path from "node:path";

const COMFYUI_URL = process.env.COMFYUI_LAN_URL || process.env.COMFYUI_BASE_URL || "http://127.0.0.1:8188";
const SOURCE      = path.resolve("public/generated-images/hero-evolution-v2.jpg");
const OUT_DIR     = path.resolve("public/generated-images");

// ── Quality settings ──────────────────────────────────────────────────────────
const MODEL     = "flux1-dev-fp8.safetensors";
const STEPS     = 40;
const CFG       = 1.0;
const SAMPLER   = "euler";
const SCHEDULER = "simple";
const W = 1920;
const H = 1080;

// ── Negative ──────────────────────────────────────────────────────────────────
const NEG = "text, watermark, logo, blurry, deformed face, extra limbs, bad anatomy, ugly, cartoon, anime, illustration, low quality, mutation, disfigured, sad expression, frowning, straight line of people, people standing side by side at same depth, multiple trees, park, green garden, modern park, playground";

// ── Path + depth description (shared) ────────────────────────────────────────
// Critical: natural staggered depth on a receding path — NOT a straight side-by-side line.
const PATH_DESC = `The glowing amber-golden cobblestone path runs from the foreground into the distance with strong perspective depth, lit warmly from within. The five learners are naturally spaced at DIFFERENT DEPTHS on this path — they are NOT standing side by side in a straight row. They walk at their own pace, staggered organically: the youngest toddler is CLOSEST TO THE CAMERA in the foreground (largest in frame), the boy is slightly further back and to one side, the teenage girl is mid-path at medium depth, the woman is further back along the receding path, and the man is the furthest back near the path's vanishing point — smaller in frame, partly silhouetted against the cosmic sky. This creates a natural sense of a group walking together at different paces, with cinematic depth of field.`;

// ── Background description (shared) ──────────────────────────────────────────
// Left = traditional brick / ancient — Right = futuristic highrises
// ONE tree on far-right edge only
const BG_DESC = `The background transitions from left to right through the arc of human progress:

LEFT SIDE — Traditional brick architecture: red-brick Victorian and Georgian-era buildings with arched windows, ornate stone lintels, wrought-iron lampposts with warm glow, dark cobblestone side streets, a sense of the industrial age and early modernity. Warm amber streetlight tones blend with the starlit sky above.

RIGHT SIDE — Futuristic glass highrises: gleaming crystalline skyscrapers with bioluminescent facades, towers of steel and glass lit in cool blue-white and gold, holographic light patterns on building surfaces, elevated walkways between towers, a space elevator cable rising from one of the towers into orbit above. The buildings grow taller and more otherworldly near the far right edge.

FAR RIGHT EDGE — ONE single large mature tree with a wide canopy, silhouetted dramatically against the cosmic sky and the glowing highrise towers — a symbol of nature enduring through all of human progress.

The sky above is a single breathtaking Milky Way panorama — dense with stars and teal-blue nebula clouds — growing more spectacular and cosmic from left to right, culminating in a full cosmic starfield with visible planets and nebulae on the far right side.`;

// ── Characters ─────────────────────────────────────────────────────────────────
// 1: Asian toddler girl (previously Black) — FOREGROUND, closest to camera
// 2: Asian boy (previously Latino) — slightly further back
// 3: Biracial/Latina teen girl — mid-path
// 4: Indian-British woman, ~25-28 (5 years younger than before)
// 5: Black man, ~35-38 (5 years younger than before)

const CHARS = {
  V1: `Five happy diverse learners of all ages walking along the glowing golden path, naturally staggered at different depths with cinematic perspective:

FOREGROUND (closest to camera, largest in frame): A delightful East Asian toddler girl, age 3, with straight black hair and rosy cheeks, wearing a bright red and yellow children's backpack with cartoon patches, laughing with pure delight, her face clearly lit by the warm path-glow from below.

SLIGHTLY BEHIND HER AND TO THE RIGHT: An East Asian boy, age 8, with neat dark hair and an energetic expression, wearing a blue school backpack over a white polo shirt, grinning widely with enthusiasm.

MID-PATH (medium depth): A confident biracial teenage girl, age 15, with beautiful natural curly dark hair, wearing a white blouse and plaid skirt with a school backpack, warm radiant smile, her features a blend of heritage, medium-depth in frame.

FURTHER BACK ON PATH: A young South Asian-British professional woman in her late-20s (approximately 27 years old), with dark hair in a neat style, wearing a smart blazer and carrying a sleek laptop bag, a glowing confident happy smile, slightly smaller in frame due to depth.

FURTHEST BACK — NEAR VANISHING POINT: A distinguished Black man in his mid-to-late 30s (approximately 37 years old), athletic build, in a well-fitted dark suit carrying a laptop briefcase, a genuine warm broad smile, more distant in frame, partly bathed in the ambient cosmic light from the sky behind him.`,

  V2: `Five smiling diverse learners walking naturally along the glowing amber path at different depths — a cinematic procession through time:

FOREGROUND — CLOSEST TO VIEWER: Adorable East Asian toddler girl, 3 years old, jet-black hair in two small pigtails, bright round cheeks, wearing a colourful green and yellow children's backpack, giggling with joy, skin warm-lit from below by the golden path-glow. She fills the lower-center foreground.

SECOND — SLIGHTLY FURTHER BACK, OFFSET TO ONE SIDE: Energetic East Asian boy, 8-9 years old, dark straight hair, bright curious eyes, wearing a red school backpack strapped over a white school shirt, enormous happy grin showing teeth, natural school-age energy.

THIRD — MID-DEPTH ON THE PATH: Biracial teenage girl, around 15-16, with voluminous natural curly hair, white top and plaid school skirt, wearing her backpack, a warm genuine bright smile, her mixed heritage visible in her beautiful face, mid-sized in frame.

FOURTH — DEEPER ON THE PATH: Young Indian-British woman, approximately 26-28 years old (youthful, early career), wearing a stylish blazer over a blouse, carrying a sleek professional laptop bag, radiant confident smile, clearly joyful, noticeably smaller in frame than the teenagers.

FIFTH — FURTHEST BACK, NEAR PATH'S HORIZON: Black man, approximately 36-38 years old (young professional, energetic), in a sharp well-tailored charcoal suit, carrying a sleek laptop briefcase at his side, a broad warm genuine smile, the most distant figure — smallest in frame — with the full cosmic Milky Way sky blazing behind him.`,

  V3: `A natural procession of five diverse learners on a glowing golden cobblestone path, captured with cinematic depth of field — each person at a different distance from the camera:

NEAREST — DOMINANT FOREGROUND: East Asian girl toddler, age 3, short black hair with a small hair clip, adorable round face, wearing a bright orange and blue children's backpack with a cartoon bear, laughing with total delight, her face the most detailed and lit by warm amber path-glow.

SECOND CLOSEST — SLIGHTLY BACK AND OFFSET: East Asian boy, age 8, short neat dark hair, wearing a school backpack over a white polo, an excited wide grin, positioned slightly behind and to the left of the toddler, the path receding naturally.

MID-GROUND: Confident biracial teenage girl, 15, natural curly mixed-heritage hair, school backpack, plaid skirt, white top, glowing smile — centered in the composition at medium depth.

BACKGROUND — RECEDING: Youthful South Asian-British woman, 25-28, in a fitted blazer, sleek laptop bag, warm professional smile — positioned further up the path, her figure smaller, the brick buildings of the left background framing her.

FURTHEST — NEAR VANISHING POINT: Athletic Black man, 35-38, sharp charcoal suit, laptop briefcase, broad warm smile — the most distant figure, nearly silhouetted against the brilliant cosmic sky on the right, the futuristic glass towers rising behind him.`,

  V4: `Beautifully composed group of five diverse learners walking at natural staggered intervals along a glowing golden path — shot with a wide-angle cinematic lens creating strong depth of field:

IN THE FOREGROUND (largest, most detailed): A sweet East Asian toddler girl, 3 years old, wearing a colourful children's backpack decorated with stars, jet-black hair, round joyful face, laughing with pure childlike glee, path-glow illuminating her face from below.

JUST BEHIND HER (slightly to the right): A bright East Asian schoolboy, 8, neat dark hair, white polo and shorts, a blue school backpack on his back, showing a huge grin — the picture of happy young curiosity.

CENTRE OF FRAME AT MEDIUM DEPTH: A radiant biracial teenage girl, 15, gorgeous natural curly mixed-heritage hair, plaid skirt and white blouse, school backpack, a warm confident beautiful smile — the compositional heart of the image.

FURTHER ALONG THE PATH: A young Indian-British professional woman, 26-28, looking youthful and energetic, in a tailored blazer, carrying a sleek laptop shoulder bag, a glowing radiant smile, her figure a third smaller than the teen due to distance.

AT THE HORIZON OF THE PATH (smallest figure): A young-looking Black professional man, 36-38, fit and elegant in a dark charcoal suit, laptop briefcase, a genuine warm smile — his figure silhouetted against the spectacular Milky Way and the glowing futuristic highrises on the right.`,
};

// ── Scene assembly ─────────────────────────────────────────────────────────────
const SCENE_SUFFIX = `Ultra-realistic photorealistic 4K. Distinct faces with natural skin textures, diverse skin tones. No text, no logos. Cinematic lighting.`;

const VARIANTS = [
  { id: "V1", denoise: 0.72, positive: `${CHARS.V1}\n\n${PATH_DESC}\n\n${BG_DESC}\n\n${SCENE_SUFFIX}` },
  { id: "V2", denoise: 0.75, positive: `${CHARS.V2}\n\n${PATH_DESC}\n\n${BG_DESC}\n\n${SCENE_SUFFIX}` },
  { id: "V3", denoise: 0.78, positive: `${CHARS.V3}\n\n${PATH_DESC}\n\n${BG_DESC}\n\n${SCENE_SUFFIX}` },
  { id: "V4", denoise: 0.82, positive: `${CHARS.V4}\n\n${PATH_DESC}\n\n${BG_DESC}\n\n${SCENE_SUFFIX}` },
];

// ── Workflow builder ───────────────────────────────────────────────────────────
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
    "9": { class_type: "SaveImage",  inputs: { filename_prefix: "HeroEvo2", images: ["8", 0] } },
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
  const srcName = await uploadImage(SOURCE);
  console.log(`✓ Uploaded: ${srcName}\n`);

  await fs.mkdir(OUT_DIR, { recursive: true });

  const targets = singleV
    ? VARIANTS.filter((_, i) => i + 1 === singleV)
    : VARIANTS;

  for (const [i, v] of targets.entries()) {
    const vNum    = VARIANTS.indexOf(v) + 1;
    const outFile = path.join(OUT_DIR, `hero-evo2-v${vNum}.jpg`);
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

  console.log("✓ Done. Review: public/generated-images/hero-evo2-v{1-4}.jpg");
  console.log("\nPromote winner:");
  console.log("  cp public/generated-images/hero-evo2-v2.jpg public/hero-family.jpg");
}

main().catch(err => { console.error("Fatal:", err.message); process.exitCode = 1; });
