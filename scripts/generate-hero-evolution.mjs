/**
 * generate-hero-evolution.mjs
 *
 * Transforms hero-diverse-v4.jpg: replaces the park background with a
 * left-to-right panorama of human evolution and progress.
 *
 * Concept:
 *   The five diverse learners walk on a glowing golden cobblestone path.
 *   Behind them, the background shifts from prehistoric Earth (far left)
 *   through ancient civilisations, Renaissance/Enlightenment, the modern
 *   age, to a breathtaking futuristic cosmic city (far right).
 *   The Milky Way dominates the night sky — humanity's path to the stars.
 *
 * Character positions (preserved from V4, left → right):
 *   1. Toddler Black girl  — prehistoric / primordial zone
 *   2. Latino/mixed boy    — ancient civilisations zone
 *   3. Biracial teen girl  — Renaissance / Enlightenment zone
 *   4. Indian-British woman— modern technology zone
 *   5. Black man           — futuristic / cosmic zone
 *
 * Quality: 40 steps, --highvram GPU, speed not a priority.
 *
 * Usage:
 *   node scripts/generate-hero-evolution.mjs           # all 4
 *   node scripts/generate-hero-evolution.mjs --v 2     # single variant
 *   node scripts/generate-hero-evolution.mjs --check
 *
 * Promote winner:
 *   cp public/generated-images/hero-evolution-v2.jpg public/hero-family.jpg
 */

import fs   from "node:fs/promises";
import path from "node:path";

const COMFYUI_URL = process.env.COMFYUI_LAN_URL || process.env.COMFYUI_BASE_URL || "http://127.0.0.1:8188";
const SOURCE      = path.resolve("public/generated-images/hero-diverse-v4.jpg");
const OUT_DIR     = path.resolve("public/generated-images");

// ── Quality settings ──────────────────────────────────────────────────────────
const MODEL     = "flux1-dev-fp8.safetensors";
const STEPS     = 40;
const CFG       = 1.0;
const SAMPLER   = "euler";
const SCHEDULER = "simple";
const W = 1920;
const H = 1080;

// ── Negative prompt ───────────────────────────────────────────────────────────
const NEG = "text, watermark, logo, blurry, deformed face, extra limbs, bad anatomy, ugly, cartoon, anime, illustration, low quality, mutation, disfigured, sad expression, frowning, park, garden, bench, modern park, contemporary park, playground, green lawn only";

// ── Shared character anchor (keeps people consistent across variants) ──────────
const CHARACTERS = `Five diverse learners of all ages walking together on a glowing amber-golden cobblestone path. Left to right: (1) cheerful toddler Black girl age 3 with a small colourful children's backpack, laughing with delight; (2) energetic Latino-mixed boy age 8 wearing a school backpack over white polo, huge grin; (3) confident biracial teenage girl age 15 with natural curly hair, white top and plaid skirt, school backpack, warm bright smile; (4) professional Indian-British adult woman in her 30s carrying a sleek black laptop bag, glowing happy smile; (5) distinguished Black man in his 40s in dark charcoal suit carrying a laptop briefcase, genuine warm broad smile. Ultra-realistic distinct faces, diverse skin tones ranging from deep brown to medium tan, photographic detail, natural expressions of pure joy.`;

// ── Background evolution — the centrepiece concept ────────────────────────────
// Left to right the world behind them shifts through the entire arc of humanity.
const EVOLUTION_BG = `The background panorama — seamlessly blending left to right — shows the full arc of human evolution and progress:
FAR LEFT behind the toddler: primordial prehistoric Earth at night — jagged ancient rock formations, early cave paintings glowing orange on stone walls, a vast starlit sky with the bright early Milky Way, primitive campfire embers floating upward, a meteor shower in the distance, the sense of humanity's first spark of awareness.
CENTER-LEFT behind the boy: ancient civilisations rising — silhouettes of the Egyptian pyramids and Sphinx, Stonehenge stones, a Greek Parthenon on a hill, Roman aqueducts, early written scrolls and clay tablets visible as glowing engravings, the Milky Way growing wider and brighter overhead, deep teal-blue nebula clouds forming.
CENTRE behind the teenage girl: the Renaissance and Enlightenment — a grand domed library at night, Leonardo da Vinci's Vitruvian Man etched in light, early telescopes aimed at a brilliant star-filled sky, printing press silhouettes, globes and maps illuminated, mathematical equations floating like constellations, the Milky Way arching above in full glory, warm golden candlelight blending with cool starlight.
CENTER-RIGHT behind the woman: the modern age and technological revolution — gleaming city skyline at night with glass skyscrapers lit up, satellites orbiting above, circuit board patterns as glowing ground texture, communication towers, a space rocket launching on the distant horizon trailing fire, the Milky Way now blazing brilliantly across the full upper sky, deep-space nebulae in vivid teal and violet.
FAR RIGHT behind the man: a breathtaking futuristic cosmic city — towering crystalline spires with bioluminescent light, a space elevator rising from the city into orbit, multiple planets and moons visible in the sky, a massive space station silhouetted against the Milky Way, aurora-like cosmic energy waves in blue and gold, humanity's future written in light and stars, the path itself transforms from ancient cobblestone into luminescent cosmic stepping-stones made of solidified starlight.`;

const SHARED_SCENE = `The glowing amber-golden cobblestone path runs through the full width of the image at mid-ground, illuminated from within, casting warm upward light on the faces of the five learners. The path is continuous and central — the unbroken thread connecting all of human history. The sky above is a single breathtaking panorama of the Milky Way stretching from horizon to horizon, growing more spectacular and cosmic from left to right. The entire image feels like looking at a single magical moment where the past, present, and future of humanity exist simultaneously. Cinematic photorealistic 4K, ultra-detailed, no text, no logos, dramatic lighting.`;

// ── Four variants — same concept, slight prompt variation for diversity ────────
const PROMPTS = {
  V1: `${CHARACTERS}\n\n${EVOLUTION_BG}\n\n${SHARED_SCENE}`,

  V2: `${CHARACTERS.replace("amber-golden cobblestone path", "luminous amber-gold ancient stone path")}

The world behind the five learners unfolds as a breathtaking mural of human civilisation across time. Behind the toddler on the far left: a dark primordial landscape with cave art glowing on rocky outcroppings, primitive fire sparks, and a vast unpolluted Milky Way of ancient Earth. Behind the boy: silhouettes of the Pyramids of Giza, Stonehenge, the Acropolis — ancient wonders rendered in starlit blue against a brightening Milky Way. Behind the teenage girl in the centre: Renaissance domes, early observatories, da Vinci-style sketches etched in light, telescopes, the birth of science and art intertwined with stars. Behind the woman: a gleaming modern city at night, rocket launches on the horizon, satellites arcing overhead, the Milky Way blazing in full magnificence. Behind the man on the far right: a radiant future cityscape of crystalline towers and orbital platforms, planets hanging low in the sky, the cosmos fully revealed — humanity among the stars.

The golden glowing path is the constant — it threads through every era, the unbroken road of learning and progress. The Milky Way grows brighter, wider, more magnificent from left to right until it fills the entire right sky. Cinematic photorealistic 4K, ultra-detailed, no text, no logos.`,

  V3: `${CHARACTERS}

Dramatic panoramic background representing the entirety of human progress — a single seamless vista seen from outside time. On the far left: dark jagged prehistoric cliffs under the first Milky Way, cave paintings with ochre handprints, embers rising from a campfire. Moving right: ancient stone monuments silhouetted under a brightening cosmic sky — pyramids, stone circles, ziggurats. The centre blooms with the Renaissance — a grand observatory dome, stargazing figures, candles and lanterns, Newton's prism dispersing starlight into colour, the first printing press, globes of early cartography. Further right the city lights emerge — a modern skyline, space shuttle exhaust trails, satellite dishes, glowing screens visible through glass towers, the Milky Way now a river of silver and gold. At the far right: pure future — luminescent megastructures, a space elevator tethered to an orbital ring, gas giants visible in the deep violet sky, nebulae close enough to touch, the cobblestone path becoming pure light.

The five learners walk through all of time simultaneously. Their path glows gold beneath their feet and transforms into starlight at the far right. Sky is one continuous cosmic arc — the Milky Way the spine of everything. Photorealistic cinematic 4K. No text, no logos.`,

  V4: `${CHARACTERS.replace("warm bright smile", "radiant joyful smile").replace("genuine warm broad smile", "profound joyful smile")}

The setting: a mythic single night that contains all of human history, rendered as a seamless landscape panorama behind the path of learners. From left to right — a journey through time itself:

PREHISTORIC ZONE: Raw ancient Earth. Volcanic mountains in silhouette, stars dense and uncountable, the first Milky Way blazing across a pristine sky, primitive cave drawings illuminated by firelight on dark rock faces, a sense of the very first human curiosity about the night sky.

ANCIENT CIVILISATIONS ZONE: The great monuments — Egyptian pyramids golden in moonlight, the Parthenon on its hill, Stonehenge in the field, the Library of Alexandria visible as a warm-lit building, all under a Milky Way growing ever brighter, early astronomers visible as small figures gazing upward.

RENAISSANCE / ENLIGHTENMENT ZONE: A grand domed cathedral-observatory hybrid, Galileo's telescope aimed at Jupiter, Newton's reflecting telescope, da Vinci's flying machine sketches floating as luminous drawings, early world maps illuminated, the printing press, equations as constellations — the marriage of human creativity and cosmic wonder.

MODERN TECHNOLOGY ZONE: City towers of glass and steel lit in warm gold and blue, a Saturn V rocket launching in the distance with a brilliant plume, the International Space Station crossing the sky as a bright streak, data visualisation patterns as architectural light, the Milky Way now an overwhelming river of light above.

COSMIC FUTURE ZONE: Beyond imagination — a city of crystalline spires glowing with bioluminescent energy, a space elevator rising from the ground into orbit, Saturn's rings visible in the sky, a star nursery nebula in vivid teal and gold behind glass towers, the cobblestone path itself becomes stepping stones of solid starlight, humanity merged with the cosmos.

One unbroken glowing golden path connects all zones. One unbroken Milky Way arcs above all zones, growing ever more magnificent. Ultra-cinematic photorealistic 4K. No text, no logos.`,
};

// ── Denoise levels — higher than diverse run to allow background replacement ──
const VARIANTS = [
  { id: "V1", denoise: 0.72, positive: PROMPTS.V1 },
  { id: "V2", denoise: 0.75, positive: PROMPTS.V2 },
  { id: "V3", denoise: 0.78, positive: PROMPTS.V3 },
  { id: "V4", denoise: 0.82, positive: PROMPTS.V4 },
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
    "9": { class_type: "SaveImage",  inputs: { filename_prefix: "HeroEvolution", images: ["8", 0] } },
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
    const outFile = path.join(OUT_DIR, `hero-evolution-v${vNum}.jpg`);
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

  console.log("✓ Done. Review: public/generated-images/hero-evolution-v{1-4}.jpg");
  console.log("\nPromote winner:");
  console.log("  cp public/generated-images/hero-evolution-v2.jpg public/hero-family.jpg");
}

main().catch(err => { console.error("Fatal:", err.message); process.exitCode = 1; });
