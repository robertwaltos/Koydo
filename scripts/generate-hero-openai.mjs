/**
 * generate-hero-openai.mjs
 *
 * Uses OpenAI gpt-image-1 (image edit endpoint) with the 3 most recent
 * hero images as reference. gpt-image-1 understands spatial layout
 * instructions far better than local Flux img2img.
 *
 * Reference images sent:
 *   1. hero-diverse-v4.jpg  — best composition: people ON the path
 *   2. hero-evo2-v1.jpg     — closest evolution background attempt
 *   3. hero-evo3-v1.jpg     — latest attempt
 *
 * Output: public/generated-images/hero-openai-v{1-4}.jpg
 *
 * Usage:
 *   node scripts/generate-hero-openai.mjs
 *   node scripts/generate-hero-openai.mjs --v 2
 */

import fs   from "node:fs/promises";
import path from "node:path";

// Load env from .env file manually (no dotenv dep needed)
const envPath = path.resolve(".env");
const envRaw  = await fs.readFile(envPath, "utf8").catch(() => "");
for (const line of envRaw.split("\n")) {
  const m = line.match(/^([^#=]+)=(.*)$/);
  if (m && !process.env[m[1].trim()]) process.env[m[1].trim()] = m[2].trim();
}

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) throw new Error("OPENAI_API_KEY not found in .env");

const OUT_DIR = path.resolve("public/generated-images");

// ── Reference images (sent as context to guide generation) ────────────────────
const REF_IMAGES = [
  path.resolve("public/generated-images/hero-diverse-v4.jpg"),   // people ON path
  path.resolve("public/generated-images/hero-evo2-v1.jpg"),      // closest evolution bg
  path.resolve("public/generated-images/hero-evo3-v1.jpg"),      // latest attempt
];

// ── The core prompt — clear, direct, spatial ──────────────────────────────────
// Written for DALL-E / gpt-image-1 which excels at following explicit layout.
const BASE_PROMPT = `
Photorealistic 4K hero image (1536x1024, landscape) for an educational app.

SCENE: Five diverse learners of all ages walking ALONG a glowing amber-golden cobblestone path. The path runs from the lower foreground into the distance, lit warmly from within. ALL FIVE PEOPLE ARE ON THE PATH — nobody is on grass or beside the path.

COMPOSITION — staggered depth on the path (NOT a side-by-side line):
• Person 1 (FOREGROUND — largest, closest to camera): East Asian toddler girl, age 3, short black hair, colourful children's backpack, laughing with joy. Her feet are on the glowing cobblestones.
• Person 2 (NEAR — slightly behind, offset): East Asian boy, age 8-9, school backpack over white polo shirt, wide excited grin. On the path.
• Person 3 (MID-DEPTH — centre of frame): Biracial teenage girl, age 15, natural curly hair, plaid school skirt, school backpack, warm radiant smile. On the path.
• Person 4 (FAR — receding along path): South Asian-British professional woman, approximately 27 years old (youthful), blazer, sleek laptop bag, glowing confident smile. Smaller due to distance.
• Person 5 (DISTANT — near path's vanishing point, smallest figure): Black professional man, approximately 37 years old, charcoal suit, laptop briefcase, broad genuine smile. Near the horizon, framed by the cosmic sky.

BACKGROUND — left to right, human evolution panorama:
• FAR LEFT: Victorian red-brick buildings — arched windows, ornate stone cornices, wrought-iron lampposts glowing amber. The beginning of the modern world.
• CENTRE-LEFT: Ancient monument silhouettes in the distance — pyramid, Stonehenge, Greek column — against a starlit sky.
• CENTRE: Renaissance imagery — domed observatory, early telescope, globes and candles, Milky Way becoming visible above.
• CENTRE-RIGHT: Modern city at night — glass office towers lit up, a rocket launching on the distant horizon, the Milky Way blazing.
• FAR RIGHT: Futuristic crystalline glass highrises — bioluminescent facades, holographic light, space elevator cable rising to orbit. ONE single large mature tree silhouetted at the very far-right edge against the cosmic sky.

SKY: A continuous Milky Way panorama across the entire sky — growing denser and more spectacular from left to right. Teal-blue nebulae. Stars. Hope for a bright future.

MOOD: Joyful, diverse, hopeful. Everyone is smiling. All young learners have backpacks. Adults carry laptop bags/cases. Ultra-realistic skin tones and facial detail. No text, no logos.
`.trim();

// 4 slight prompt variations to get diverse outputs
const PROMPTS = [
  BASE_PROMPT,

  BASE_PROMPT.replace(
    "Five diverse learners",
    "Five joyful diverse learners"
  ).replace(
    "walking ALONG a glowing amber-golden cobblestone path",
    "walking together ALONG a warm glowing amber cobblestone path, each at a different distance from the camera"
  ),

  BASE_PROMPT.replace(
    "ALL FIVE PEOPLE ARE ON THE PATH",
    "ALL FIVE PEOPLE STAND AND WALK ONLY ON THE PATH — this is absolutely critical"
  ).replace(
    "Her feet are on the glowing cobblestones",
    "Her feet clearly on the glowing cobblestones, path-glow lighting her face from below"
  ),

  BASE_PROMPT.replace(
    "Photorealistic 4K hero image",
    "Cinematic ultra-detailed photorealistic hero image"
  ).replace(
    "broad genuine smile",
    "broad genuine warm smile, his figure partly silhouetted against the breathtaking Milky Way"
  ),
];

// ── Build multipart form data ─────────────────────────────────────────────────
async function buildFormData(prompt) {
  const boundary = "----OAI" + Math.random().toString(36).slice(2);
  const parts    = [];

  // model
  parts.push(
    `--${boundary}\r\nContent-Disposition: form-data; name="model"\r\n\r\ngpt-image-1`
  );
  // prompt
  parts.push(
    `--${boundary}\r\nContent-Disposition: form-data; name="prompt"\r\n\r\n${prompt}`
  );
  // n
  parts.push(
    `--${boundary}\r\nContent-Disposition: form-data; name="n"\r\n\r\n1`
  );
  // size
  parts.push(
    `--${boundary}\r\nContent-Disposition: form-data; name="size"\r\n\r\n1536x1024`
  );
  // quality
  parts.push(
    `--${boundary}\r\nContent-Disposition: form-data; name="quality"\r\n\r\nhigh`
  );

  const textBuf = Buffer.from(parts.join("\r\n") + "\r\n");
  const chunks  = [textBuf];

  // reference images
  for (const imgPath of REF_IMAGES) {
    const imgBuf  = await fs.readFile(imgPath);
    const fname   = path.basename(imgPath);
    const imgHead = Buffer.from(
      `--${boundary}\r\nContent-Disposition: form-data; name="image[]"; filename="${fname}"\r\nContent-Type: image/jpeg\r\n\r\n`
    );
    chunks.push(imgHead, imgBuf, Buffer.from("\r\n"));
  }

  chunks.push(Buffer.from(`--${boundary}--\r\n`));

  return {
    body:        Buffer.concat(chunks),
    contentType: `multipart/form-data; boundary=${boundary}`,
  };
}

// ── Call OpenAI images/edits ──────────────────────────────────────────────────
async function generateImage(prompt, variantNum) {
  console.log(`  Building request for V${variantNum}...`);
  const { body, contentType } = await buildFormData(prompt);

  console.log(`  Sending to OpenAI (${Math.round(body.length / 1024)}KB payload)...`);
  const res = await fetch("https://api.openai.com/v1/images/edits", {
    method:  "POST",
    headers: {
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
      "Content-Type":  contentType,
    },
    body,
    signal: AbortSignal.timeout(5 * 60 * 1000), // 5 min timeout
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenAI API error ${res.status}: ${err}`);
  }

  const json = await res.json();

  // gpt-image-1 returns base64 by default (response_format not needed)
  const item = json.data?.[0];
  if (!item) throw new Error(`No image in response: ${JSON.stringify(json)}`);

  // May be b64_json or url
  if (item.b64_json) {
    return Buffer.from(item.b64_json, "base64");
  } else if (item.url) {
    const imgRes = await fetch(item.url);
    return Buffer.from(await imgRes.arrayBuffer());
  }

  throw new Error(`Unknown response format: ${JSON.stringify(item)}`);
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  const args    = process.argv.slice(2);
  const vIdx    = args.indexOf("--v");
  const singleV = vIdx !== -1 ? parseInt(args[vIdx + 1], 10) : null;

  console.log(`OpenAI gpt-image-1 hero generation`);
  console.log(`API key: ${OPENAI_API_KEY.slice(0, 12)}...`);
  console.log(`Reference images: ${REF_IMAGES.map(p => path.basename(p)).join(", ")}\n`);

  // Verify ref images exist
  for (const p of REF_IMAGES) {
    await fs.access(p).catch(() => { throw new Error(`Reference image not found: ${p}`); });
    console.log(`✓ Found: ${path.basename(p)}`);
  }
  console.log();

  await fs.mkdir(OUT_DIR, { recursive: true });

  const variants = singleV
    ? [[singleV - 1, PROMPTS[singleV - 1]]]
    : PROMPTS.map((p, i) => [i, p]);

  for (const [i, prompt] of variants) {
    const vNum    = i + 1;
    const outFile = path.join(OUT_DIR, `hero-openai-v${vNum}.jpg`);

    console.log(`[${vNum}/${variants.length}] Generating V${vNum}...`);

    const buf = await generateImage(prompt, vNum);
    await fs.writeFile(outFile, buf);
    console.log(`  ✓ ${path.relative(process.cwd(), outFile)}  (${Math.round(buf.length / 1024)}KB)\n`);
  }

  console.log("✓ Done. Review: public/generated-images/hero-openai-v{1-4}.jpg");
  console.log("\nPromote winner:");
  console.log("  cp public/generated-images/hero-openai-v2.jpg public/hero-family.jpg");
}

main().catch(err => { console.error("\nFatal:", err.message); process.exitCode = 1; });
