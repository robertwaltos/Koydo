/**
 * generate-bg-starry-v2.mjs
 *
 * Refines bg-starry-v1.jpg with:
 *  - Lighter scene — daylight or golden-hour / dawn on the left,
 *    transitioning to dusk/twilight/cosmic night on the right
 *  - Left side buildings replaced with school / educational institution
 *    architecture (university campus, library, lecture halls)
 *  - Right side retains futuristic highrises and Milky Way
 *  - Keeps the left→right evolution / journey metaphor
 *
 * 3 variants. Output: public/generated-images/bg-day-v{1-3}.jpg
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

const REF_IMAGES = [
  path.resolve("public/generated-images/bg-starry-v1.jpg"), // the one to refine
  path.resolve("public/generated-images/hero-openai-v4.jpg"), // style/palette reference
];

const PROMPTS = [
  // V1 — golden hour left (school) → twilight centre → cosmic night right
  `Ultra-wide photorealistic background image (1536x1024, landscape) for a webpage section. No people. No text. No logos.

The scene transitions from LEFT to RIGHT through time of day and era:

FAR LEFT (30% of frame) — BRIGHT GOLDEN HOUR / LATE AFTERNOON: A beautiful university campus or prestigious school in warm sunlight. Classic Georgian or Gothic-revival architecture — stone facades, arched windows, a clock tower, a grand library entrance with columns, a manicured lawn in the foreground. The sky is a warm golden-amber with soft clouds lit by a low sun. This is where learning begins. Warm, welcoming, prestigious.

CENTRE (40% of frame) — DUSK / BLUE HOUR: The sky transitions from deep orange-gold at the horizon to dark blue-indigo above. The first stars appear. Modern university buildings with lit windows blend into the distance. A sense of transition — day becoming night, the known becoming the unknown.

FAR RIGHT (30% of frame) — COSMIC NIGHT: Deep darkness, the full Milky Way blazing across the upper sky, futuristic crystalline spires with bioluminescent glow, teal and violet nebulae, stars. The cosmic future. ONE large mature tree silhouetted at the very far-right edge.

GROUND LEVEL throughout: A faint glowing amber-gold path traces gently from left to right — barely visible, like a memory — tying the whole scene together.

Mood: aspirational, hopeful, the journey from first day of school to the stars. Suitable as a webpage dark-to-light background (left is lighter, right is darker). Cinematic and beautiful.`,

  // V2 — softer daylight, more school campus focus, cosmic sky arc above
  `Breathtaking ultra-wide photorealistic background scene (1536x1024, landscape) for a webpage. No text. No logos. No people.

A seamless panoramic scene from daytime school to cosmic night:

LEFT HALF — BRIGHT DAYLIGHT: A grand educational institution in clear afternoon sunlight. Classic stone university buildings with ivy-covered walls, tall arched windows, a domed library or chapel, lecture hall entrances. Warm white and golden limestone architecture. Blue sky with white cumulus clouds behind. Clean, bright, aspirational. The lawn is lush green.

RIGHT HALF — COSMIC NIGHT SKY: Seamlessly transitioning from day to night. The sky deepens from blue to indigo to near-black. A spectacular Milky Way river of stars fills the upper right. Teal and violet nebula clouds. Futuristic glass tower silhouettes at the bottom right, glowing softly. A single large mature tree at the far-right edge.

The transition from daylight to night sky happens naturally across the middle of the image — like a time-lapse compressed into one panorama.

At the bottom: a very faint warm amber-golden path glows softly from left to right. Barely visible.

Overall tone: inspiring, beautiful, high quality. Lighter on the left for text readability, darker on the right. No logos, no text.`,

  // V3 — dawn/sunrise, more atmospheric, stronger school architecture
  `Cinematic ultra-wide background image (1536x1024, landscape). No people. No text. No logos.

LEFT THIRD — SUNRISE / DAWN at an educational institution: A prestigious school or university campus bathed in warm pink-orange sunrise light. Gothic or classical architecture — stone towers, arched colonnades, a prominent clock tower, grand entrance steps, leafy trees casting long shadows on cobblestone paths. The early morning sky is a stunning gradient of pink, peach, and soft gold above the buildings. Dew on the grass. First light. The beginning.

CENTRE THIRD — LATE AFTERNOON / DUSK: The light warms to amber-gold. Modern educational buildings with glass facades reflect the sunset. The sky shifts from golden orange at the horizon to deep blue overhead. More stars becoming visible.

RIGHT THIRD — FULL NIGHT, COSMIC: The sky is deep indigo-black with the Milky Way in full glory — dense, vivid, spectacular. Teal and violet nebulae. Futuristic tower silhouettes glowing from within. ONE large tree silhouetted at the far right against the cosmic sky.

At the very bottom of the image throughout: a whisper of a glowing amber path, barely visible, connecting the whole scene.

The image reads left (bright, hopeful dawn, learning begins) to right (cosmic future, stars). Beautiful, cinematic, no text.`,
];

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
    const imgBuf = await fs.readFile(imgPath);
    const fname  = path.basename(imgPath);
    const head   = Buffer.from(
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
  console.log("Generating lighter bg with school buildings — 3 variants\n");
  for (const p of REF_IMAGES) {
    await fs.access(p).catch(() => { throw new Error(`Missing: ${p}`); });
    console.log(`✓ ${path.basename(p)}`);
  }
  console.log();
  await fs.mkdir(OUT_DIR, { recursive: true });
  for (let i = 0; i < PROMPTS.length; i++) {
    const vNum    = i + 1;
    const outFile = path.join(OUT_DIR, `bg-day-v${vNum}.jpg`);
    console.log(`[${vNum}/3] Generating V${vNum}...`);
    const buf = await generateImage(PROMPTS[i], vNum);
    await fs.writeFile(outFile, buf);
    console.log(`  ✓ ${path.relative(process.cwd(), outFile)}  (${Math.round(buf.length / 1024)}KB)\n`);
  }
  console.log("✓ Done. Review: public/generated-images/bg-day-v{1-3}.jpg");
}

main().catch(err => { console.error("Fatal:", err.message); process.exitCode = 1; });
