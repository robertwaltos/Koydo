/**
 * generate-hero-openai-v2.mjs
 *
 * Refines hero-openai-v4.jpg with two targeted changes:
 *  - Person 3 (teen girl): updated to college-age (18-20) instead of 15
 *  - Person 5 (Black man): moved slightly further back on the path
 *
 * 2 versions.
 */

import fs   from "node:fs/promises";
import path from "node:path";

const envRaw = await fs.readFile(path.resolve(".env"), "utf8").catch(() => "");
for (const line of envRaw.split("\n")) {
  const m = line.match(/^([^#=]+)=(.*)$/);
  if (m && !process.env[m[1].trim()]) process.env[m[1].trim()] = m[2].trim();
}

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) throw new Error("OPENAI_API_KEY not found");

const OUT_DIR = path.resolve("public/generated-images");

// Primary reference: the V4 we're refining + two others for character/style context
const REF_IMAGES = [
  path.resolve("public/generated-images/hero-openai-v4.jpg"),  // the one to refine
  path.resolve("public/generated-images/hero-openai-v1.jpg"),  // style reference
  path.resolve("public/generated-images/hero-diverse-v4.jpg"), // original path composition
];

const BASE_PROMPT = `
Photorealistic 4K hero image (1536x1024, landscape) for an educational platform.
Refine the provided reference image with these specific changes:

COMPOSITION — five diverse learners walking along a glowing amber-golden cobblestone path, staggered at different depths (NOT a side-by-side line). ALL FIVE ARE ON THE PATH, not on grass.

• Person 1 (FOREGROUND — largest, closest to camera): East Asian toddler girl, age 3, colourful children's backpack, laughing with joy. Feet on the glowing cobblestones.
• Person 2 (NEAR — slightly behind, offset): East Asian boy, age 9, school backpack over white polo, wide excited grin. On the path.
• Person 3 (MID-DEPTH — centre of frame): COLLEGE-AGE young woman, 19-20 years old, biracial with natural curly hair, casual university style — jeans, light jacket, school backpack, radiant confident smile. She looks like a first or second year university student — young adult, not a teenager.
• Person 4 (FAR — receding along path): South Asian-British professional woman, approximately 27, blazer, sleek laptop bag, glowing confident smile. Smaller due to distance.
• Person 5 (VERY DISTANT — well back toward the vanishing point, noticeably smaller than Person 4): Black professional man, approximately 37, charcoal suit, laptop briefcase, broad warm smile. He is pushed further back than in the reference image — a more distant figure near the horizon, framed by the cosmic sky behind him.

BACKGROUND — left to right, human evolution panorama:
• FAR LEFT: Victorian red-brick buildings — arched windows, ornate cornices, wrought-iron lampposts glowing amber.
• CENTRE-LEFT: Ancient monument silhouettes — pyramid, Stonehenge — against a brightening Milky Way.
• CENTRE: Renaissance imagery — domed observatory, telescopes, globes, candles, Milky Way visible.
• CENTRE-RIGHT: Modern city at night — glass towers, rocket launch on horizon, Milky Way blazing.
• FAR RIGHT: Futuristic crystalline glass highrises with bioluminescent facades, space elevator cable rising to orbit. ONE single large mature tree silhouetted at the very far-right edge.

SKY: Continuous Milky Way panorama growing denser and more spectacular from left to right. Teal-blue nebulae. Hope for a bright future.

MOOD: Joyful, diverse, hopeful. Young learners have backpacks. Adults carry laptop bags. Ultra-realistic skin tones and facial detail. No text, no logos.
`.trim();

// Two prompt variants — same intent, slight phrasing difference for variety
const PROMPTS = [
  BASE_PROMPT,
  BASE_PROMPT
    .replace("COLLEGE-AGE young woman, 19-20 years old", "COLLEGE STUDENT, 19 years old")
    .replace("She looks like a first or second year university student — young adult, not a teenager.",
             "She has the energy and style of a first-year university student — clearly an adult, post-teenage.")
    .replace("He is pushed further back than in the reference image — a more distant figure near the horizon",
             "He stands further back on the path than the woman — a smaller, more distant silhouette near the path's horizon"),
];

// ── Helpers ───────────────────────────────────────────────────────────────────
async function buildFormData(prompt) {
  const boundary = "----OAI" + Math.random().toString(36).slice(2);
  const parts    = [];

  parts.push(`--${boundary}\r\nContent-Disposition: form-data; name="model"\r\n\r\ngpt-image-1`);
  parts.push(`--${boundary}\r\nContent-Disposition: form-data; name="prompt"\r\n\r\n${prompt}`);
  parts.push(`--${boundary}\r\nContent-Disposition: form-data; name="n"\r\n\r\n1`);
  parts.push(`--${boundary}\r\nContent-Disposition: form-data; name="size"\r\n\r\n1536x1024`);
  parts.push(`--${boundary}\r\nContent-Disposition: form-data; name="quality"\r\n\r\nhigh`);

  const textBuf = Buffer.from(parts.join("\r\n") + "\r\n");
  const chunks  = [textBuf];

  for (const imgPath of REF_IMAGES) {
    const imgBuf  = await fs.readFile(imgPath);
    const fname   = path.basename(imgPath);
    const imgHead = Buffer.from(
      `--${boundary}\r\nContent-Disposition: form-data; name="image[]"; filename="${fname}"\r\nContent-Type: image/jpeg\r\n\r\n`
    );
    chunks.push(imgHead, imgBuf, Buffer.from("\r\n"));
  }

  chunks.push(Buffer.from(`--${boundary}--\r\n`));
  return { body: Buffer.concat(chunks), contentType: `multipart/form-data; boundary=${boundary}` };
}

async function generateImage(prompt, vNum) {
  const { body, contentType } = await buildFormData(prompt);
  console.log(`  Sending V${vNum} to OpenAI (${Math.round(body.length / 1024)}KB)...`);

  const res = await fetch("https://api.openai.com/v1/images/edits", {
    method:  "POST",
    headers: { "Authorization": `Bearer ${OPENAI_API_KEY}`, "Content-Type": contentType },
    body,
    signal:  AbortSignal.timeout(5 * 60 * 1000),
  });

  if (!res.ok) throw new Error(`OpenAI ${res.status}: ${await res.text()}`);

  const json = await res.json();
  const item = json.data?.[0];
  if (!item) throw new Error(`No image in response`);

  if (item.b64_json) return Buffer.from(item.b64_json, "base64");
  if (item.url) return Buffer.from(await (await fetch(item.url)).arrayBuffer());
  throw new Error(`Unknown response format`);
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`Refining hero-openai-v4.jpg — 2 versions\n`);
  for (const p of REF_IMAGES) {
    await fs.access(p).catch(() => { throw new Error(`Missing: ${p}`); });
    console.log(`✓ ${path.basename(p)}`);
  }
  console.log();

  await fs.mkdir(OUT_DIR, { recursive: true });

  for (let i = 0; i < PROMPTS.length; i++) {
    const vNum    = i + 1;
    const outFile = path.join(OUT_DIR, `hero-openai-r${vNum}.jpg`);
    console.log(`[${vNum}/2] Generating R${vNum}...`);

    const buf = await generateImage(PROMPTS[i], vNum);
    await fs.writeFile(outFile, buf);
    console.log(`  ✓ ${path.relative(process.cwd(), outFile)}  (${Math.round(buf.length / 1024)}KB)\n`);
  }

  console.log("✓ Done. Review:");
  console.log("  public/generated-images/hero-openai-r1.jpg");
  console.log("  public/generated-images/hero-openai-r2.jpg");
  console.log("\nPromote winner:");
  console.log("  cp public/generated-images/hero-openai-r1.jpg public/hero-family.jpg");
}

main().catch(err => { console.error("Fatal:", err.message); process.exitCode = 1; });
