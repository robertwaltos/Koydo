/**
 * generate-bg-starry.mjs
 *
 * Generates a dark cosmic/starry background image for the bottom of the
 * page — matches the right-side aesthetic of the hero image (Milky Way,
 * futuristic city silhouette, nebulae, glowing path).
 *
 * 3 variants with slight mood differences.
 * Output: public/generated-images/bg-starry-v{1-3}.jpg
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

// Use the hero image as style reference so the cosmic aesthetic matches
const REF_IMAGES = [
  path.resolve("public/generated-images/hero-openai-v4.jpg"),
];

const PROMPTS = [
  // V1 — full cosmic sky, subtle futuristic city silhouette, glowing path remnant
  `Photorealistic ultra-wide dark cosmic background image (1536x1024, landscape) for use as a full-width webpage section background. No people.

The scene is a breathtaking night sky — 80% of the frame is deep space. A magnificent Milky Way galaxy arc stretches across the upper portion in vivid detail: dense star clusters, teal and violet nebula clouds, and cosmic dust lanes in deep blue and gold. The sky fades from near-black at the top to deep midnight blue-indigo at the horizon.

At the very bottom of the image: a narrow silhouette panorama — a futuristic city skyline (crystalline spires with faint bioluminescent glow, a space elevator cable rising into the sky), blending seamlessly into ancient stone arches and a Victorian rooftop on the far left — echoing the hero image's left-to-right evolution theme. The silhouette is subtle, dark, and low — it should feel like a horizon, not a dominant element.

Across the lower quarter of the image, a very faint glowing amber-gold cobblestone path traces gently from left to right — barely visible, like a memory — casting a warm diffuse glow that softens the dark ground.

Mood: awe, wonder, hope, the future. Perfect for a dark webpage background — predominantly dark with luminous highlights. No text, no logos, no people.`,

  // V2 — pure deep space, more nebula, less city
  `Ultra-wide deep space panorama (1536x1024, landscape) for a dark webpage background section. No people. No text.

Predominantly black and very deep navy. A spectacular Milky Way river of stars sweeps diagonally from the lower-left to the upper-right — densely packed star clusters glowing white-gold at the core, surrounded by teal, violet, and soft amber nebula clouds. Individual bright stars and star clusters are visible. A subtle hint of aurora-like cosmic energy waves in cool blue-green adds depth.

At the very bottom edge: the faintest silhouette of futuristic glass tower spires and one large tree — dark shapes against a marginally lighter deep-blue horizon. Very understated.

The overall image is dark and dramatic — suitable for use as a CSS background-image where white or light-coloured text will be placed on top. The brightest element is the Milky Way in the upper half. No logos, no people.`,

  // V3 — warmer, golden tones, more path-glow at bottom
  `Cinematic dark cosmic night scene (1536x1024, wide landscape) for use as a full-width webpage section background. No people. No text.

The sky: a breathtaking Milky Way panorama filling the upper two-thirds of the frame. Rich star density, glowing white-gold at the galactic core centre, fading to deep violet and teal at the edges. Scattered individual bright stars. Soft nebula clouds in burnt amber and teal create depth and beauty.

The lower third: deep darkness transitioning from the cosmic sky above. A very faint warm amber glow at ground level — as if the glowing cobblestone path from the hero image continues off into the distance. Barely-visible silhouettes of building spires and a single mature tree create a thin horizon line.

Colour palette: deep navy, near-black, gold, teal, violet — all very dark, rich, and suitable for a dark-mode webpage section. No logos, no people. The image should feel like looking up at the universe from the end of the journey.`,
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
    const head    = Buffer.from(
      `--${boundary}\r\nContent-Disposition: form-data; name="image[]"; filename="${fname}"\r\nContent-Type: image/jpeg\r\n\r\n`
    );
    chunks.push(head, imgBuf, Buffer.from("\r\n"));
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
  if (!item) throw new Error("No image in response");
  if (item.b64_json) return Buffer.from(item.b64_json, "base64");
  if (item.url)      return Buffer.from(await (await fetch(item.url)).arrayBuffer());
  throw new Error("Unknown response format");
}

async function main() {
  console.log("Generating dark cosmic background — 3 variants\n");
  for (const p of REF_IMAGES) {
    await fs.access(p).catch(() => { throw new Error(`Missing: ${p}`); });
    console.log(`✓ ${path.basename(p)}`);
  }
  console.log();

  await fs.mkdir(OUT_DIR, { recursive: true });

  for (let i = 0; i < PROMPTS.length; i++) {
    const vNum    = i + 1;
    const outFile = path.join(OUT_DIR, `bg-starry-v${vNum}.jpg`);
    console.log(`[${vNum}/3] Generating V${vNum}...`);
    const buf = await generateImage(PROMPTS[i], vNum);
    await fs.writeFile(outFile, buf);
    console.log(`  ✓ ${path.relative(process.cwd(), outFile)}  (${Math.round(buf.length / 1024)}KB)\n`);
  }

  console.log("✓ Done. Review: public/generated-images/bg-starry-v{1-3}.jpg");
  console.log("\nAdd to page:");
  console.log('  <Image src="/bg-starry-v2.jpg" fill className="object-cover" alt="" />');
}

main().catch(err => { console.error("Fatal:", err.message); process.exitCode = 1; });
