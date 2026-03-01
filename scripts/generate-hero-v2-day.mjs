/**
 * generate-hero-v2-day.mjs
 * Refines hero-openai-v2.jpg: lighter/daylight scene, school buildings left.
 * 3 variants. Output: public/generated-images/hero-day-v{1-3}.jpg
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

const OUT_DIR   = path.resolve("public/generated-images");
const REF_IMAGES = [
  path.resolve("public/generated-images/hero-openai-v2.jpg"),
  path.resolve("public/generated-images/hero-openai-v4.jpg"),
];

const BASE = `Photorealistic 4K hero image (1536x1024, landscape) for an educational app. Refine the reference image with these changes:

LIGHTING: Make the LEFT HALF of the scene BRIGHT DAYLIGHT — warm golden afternoon sunlight, bright blue sky with soft white clouds behind the left-side buildings. The right half transitions naturally to dusk/twilight, then cosmic night on the far right. The scene reads from bright/hopeful on the left to cosmic/inspiring on the right.

LEFT BACKGROUND (replace what was there): A prestigious school or university campus in warm afternoon sunlight. Classic Georgian or Gothic-revival stone architecture — clock tower, grand library entrance with columns, ivy-covered walls, arched windows. Warm limestone and red-brick. A manicured path leading to the entrance. Leafy trees framing the buildings. Bright, aspirational, welcoming.

RIGHT BACKGROUND: Keep the futuristic crystalline glass highrises and Milky Way cosmic sky from the reference. One large mature tree at the far-right edge. Space elevator cable rising to the stars.

PEOPLE: Keep all five diverse learners walking ON the glowing amber-golden cobblestone path at staggered depths:
• FOREGROUND: East Asian toddler girl, 3, colourful backpack, laughing
• NEAR: East Asian boy, 9, school backpack, wide grin
• MID: Biracial college-age woman, 19-20, backpack, radiant smile
• FAR: South Asian-British woman, 27, laptop bag, confident smile
• DISTANT: Black man, 37, charcoal suit, laptop briefcase, warm smile

The golden path runs from foreground to background connecting school (left/bright) to cosmos (right/dark). Photorealistic 4K. No text, no logos.`;

const PROMPTS = [
  BASE,
  BASE.replace("warm golden afternoon sunlight", "warm golden late-afternoon sunlight with long shadows")
      .replace("Bright, aspirational, welcoming.", "Bright, prestigious, full of possibility."),
  BASE.replace("bright blue sky with soft white clouds", "bright blue sky with dramatic cumulus clouds lit from below")
      .replace("A manicured path leading to the entrance.", "Wide stone steps leading to the entrance, students' backpacks visible on the steps."),
];

async function buildFormData(prompt) {
  const boundary = "----OAI" + Math.random().toString(36).slice(2);
  const parts = [
    `--${boundary}\r\nContent-Disposition: form-data; name="model"\r\n\r\ngpt-image-1`,
    `--${boundary}\r\nContent-Disposition: form-data; name="prompt"\r\n\r\n${prompt}`,
    `--${boundary}\r\nContent-Disposition: form-data; name="n"\r\n\r\n1`,
    `--${boundary}\r\nContent-Disposition: form-data; name="size"\r\n\r\n1536x1024`,
    `--${boundary}\r\nContent-Disposition: form-data; name="quality"\r\n\r\nhigh`,
  ];
  const chunks = [Buffer.from(parts.join("\r\n") + "\r\n")];
  for (const p of REF_IMAGES) {
    const buf  = await fs.readFile(p);
    const head = Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="image[]"; filename="${path.basename(p)}"\r\nContent-Type: image/jpeg\r\n\r\n`);
    chunks.push(head, buf, Buffer.from("\r\n"));
  }
  chunks.push(Buffer.from(`--${boundary}--\r\n`));
  return { body: Buffer.concat(chunks), contentType: `multipart/form-data; boundary=${boundary}` };
}

async function gen(prompt, vNum) {
  const { body, contentType } = await buildFormData(prompt);
  console.log(`  V${vNum}: sending ${Math.round(body.length/1024)}KB...`);
  const res = await fetch("https://api.openai.com/v1/images/edits", {
    method: "POST", headers: { "Authorization": `Bearer ${OPENAI_API_KEY}`, "Content-Type": contentType }, body,
    signal: AbortSignal.timeout(5 * 60 * 1000),
  });
  if (!res.ok) throw new Error(`OpenAI ${res.status}: ${await res.text()}`);
  const item = (await res.json()).data?.[0];
  if (item?.b64_json) return Buffer.from(item.b64_json, "base64");
  if (item?.url)      return Buffer.from(await (await fetch(item.url)).arrayBuffer());
  throw new Error("No image");
}

async function main() {
  console.log("Hero daylight refinement — 3 variants\n");
  await fs.mkdir(OUT_DIR, { recursive: true });
  for (let i = 0; i < PROMPTS.length; i++) {
    const vNum = i + 1;
    console.log(`[${vNum}/3]`);
    const buf = await gen(PROMPTS[i], vNum);
    const out = path.join(OUT_DIR, `hero-day-v${vNum}.jpg`);
    await fs.writeFile(out, buf);
    console.log(`  ✓ hero-day-v${vNum}.jpg (${Math.round(buf.length/1024)}KB)\n`);
  }
  console.log("✓ Done: public/generated-images/hero-day-v{1-3}.jpg");
}
main().catch(e => { console.error("Fatal:", e.message); process.exitCode = 1; });
