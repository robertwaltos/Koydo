/**
 * generate-logo-ideas.mjs
 *
 * Generates 10 brand-new Koydo logo concepts via OpenAI gpt-image-1.
 * Each logo is on a clean white or transparent-style background,
 * square format (1024x1024), professional and modern.
 *
 * Output: public/generated-images/logo-idea-{01-10}.jpg
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

const BRAND = `Brand: KOYDO — a free educational platform for all ages (3 to adult), 200+ interactive learning modules. Brand values: inclusive, joyful, aspirational, forward-looking. Colour palette: deep navy/midnight blue, warm amber-gold, teal, white. The name "KOYDO" has no fixed meaning — it feels like a compass or guiding star.`;

const LOGOS = [
  {
    id: "01", title: "Compass Star",
    prompt: `${BRAND}

Logo concept: An elegant eight-pointed compass rose star, perfectly symmetrical, rendered in warm amber-gold gradient. The star has a subtle inner glow. Four longer cardinal points, four shorter diagonal points. Below the star, the wordmark "KOYDO" in a clean modern geometric sans-serif, all caps, in deep navy. Minimal, timeless, professional. On a pure white background. Vector-style clean illustration. No decorative elements beyond the star and wordmark.`
  },
  {
    id: "02", title: "Orbital K",
    prompt: `${BRAND}

Logo concept: The letter "K" in a bold modern sans-serif, deep midnight navy. Around the K, two elliptical orbital rings in amber-gold, like electrons orbiting an atom or planets orbiting a sun — suggesting learning as constant exploration. The rings catch the light at their crossing points, creating tiny bright stars. The wordmark "KOYDO" sits below in clean letters. White background. Sleek, scientific, aspirational. Clean vector illustration style.`
  },
  {
    id: "03", title: "The Lighthouse Beacon",
    prompt: `${BRAND}

Logo concept: A minimalist lighthouse illustration — a simple elegant tower with a star-shaped light at the top. The beam from the lighthouse spreads in a stylised arc of five radiating lines. The lighthouse and beam are in amber-gold; the tower base is deep navy. The wordmark "KOYDO" appears integrated beside or below. Clean, minimal, geometric. White background. Modern icon style, like a premium app icon. No excessive detail.`
  },
  {
    id: "04", title: "Seed to Star",
    prompt: `${BRAND}

Logo concept: A single abstract shape that simultaneously reads as a seed/teardrop (pointing down) AND a four-pointed star (pointing up) — growth from earth to sky. The shape is rendered in a gradient from deep teal at the base to warm amber-gold at the top. It sits above the wordmark "KOYDO" in a clean modern typeface in deep navy. The duality (seed/star, beginning/destination) captures learning at any age. White background. Minimal, symbolic, elegant.`
  },
  {
    id: "05", title: "Open Book Horizon",
    prompt: `${BRAND}

Logo concept: An open book viewed from a slightly elevated angle. The spine of the book forms the horizon line. The left page is deep navy; the right page is warm amber-gold. The pages curve slightly as if being turned. Rising from the spine/horizon, a simple sun or star shape suggests sunrise — the dawn of knowledge. The wordmark "KOYDO" is embossed on the cover below the icon. Clean, symbolic, timeless. White background. Flat design with subtle depth.`
  },
  {
    id: "06", title: "Neural Constellation K",
    prompt: `${BRAND}

Logo concept: A cluster of dots connected by thin lines forming the letter "K" through a neural network / constellation pattern. The dots are bright amber-gold points, the connecting lines are thin teal. The overall shape is clearly a K. The wordmark "KOYDO" appears below in a clean geometric font. It suggests connected knowledge, constellations, neural learning. Dark navy background (this logo works dark). The logo glows slightly as if lit from within. Premium, tech-forward, beautiful.`
  },
  {
    id: "07", title: "The Astrolabe",
    prompt: `${BRAND}

Logo concept: A circular astrolabe or armillary sphere — an ancient navigation instrument. The design is elegant and circular with two or three nested rings showing meridian lines and equator. At the centre, a bright star or compass point. Rendered in amber-gold line work on a deep navy circular badge background. The wordmark "KOYDO" curves along the bottom of the circle or sits below it. Timeless, scholarly, exploratory. Clean vector. White background overall.`
  },
  {
    id: "08", title: "The Golden Torch",
    prompt: `${BRAND}

Logo concept: A minimalist torch icon — a simple elegant handle with a stylised starburst/sunburst flame at the top. The handle is deep navy; the flame is a warm amber-gold gradient starburst with 8 rays of varying lengths. The wordmark "KOYDO" appears to the right or below in a clean sans-serif. The torch symbolises passing knowledge forward across generations. Clean, bold, powerful. White background. Icon-quality minimalism.`
  },
  {
    id: "09", title: "Infinity Journey",
    prompt: `${BRAND}

Logo concept: An infinity symbol (∞) redesigned as two worlds. The left loop contains a minimalist child's drawing style — a simple sun, a house, a tree, representing early learning. The right loop contains sophisticated symbols — a mathematical spiral, a DNA helix, a star map — representing advanced knowledge. The two loops meet at the centre where a small bright golden point glows, representing the joy of learning at any level. The wordmark "KOYDO" below in modern type. White background. Creative, meaningful, beautiful.`
  },
  {
    id: "10", title: "Globe Compass",
    prompt: `${BRAND}

Logo concept: A stylised globe with elegant meridian lines, but where the horizontal and vertical central lines cross, they form the letter K through negative space. The globe is rendered in deep navy with amber-gold meridian lines that glow. The letter K at the centre is defined by the intersection of lines — clever and subtle. The wordmark "KOYDO" sits below in a premium geometric sans-serif. White background. Sophisticated, global, minimal. Premium app icon quality.`
  },
];

async function genImage(prompt, id) {
  const body = JSON.stringify({ model: "gpt-image-1", prompt, n: 1, size: "1024x1024", quality: "high" });
  const res  = await fetch("https://api.openai.com/v1/images/generations", {
    method:  "POST",
    headers: { "Authorization": `Bearer ${OPENAI_API_KEY}`, "Content-Type": "application/json" },
    body,
    signal:  AbortSignal.timeout(5 * 60 * 1000),
  });
  if (!res.ok) throw new Error(`OpenAI ${res.status}: ${await res.text()}`);
  const item = (await res.json()).data?.[0];
  if (item?.b64_json) return Buffer.from(item.b64_json, "base64");
  if (item?.url)      return Buffer.from(await (await fetch(item.url)).arrayBuffer());
  throw new Error("No image");
}

async function main() {
  console.log("Generating 10 Koydo logo concepts via OpenAI gpt-image-1\n");
  await fs.mkdir(OUT_DIR, { recursive: true });
  for (const logo of LOGOS) {
    console.log(`[${logo.id}/10] "${logo.title}"`);
    const buf = await genImage(logo.prompt, logo.id);
    const out = path.join(OUT_DIR, `logo-idea-${logo.id}.jpg`);
    await fs.writeFile(out, buf);
    console.log(`  ✓ logo-idea-${logo.id}.jpg (${Math.round(buf.length/1024)}KB)\n`);
  }
  console.log("✓ All 10 logo ideas done: public/generated-images/logo-idea-{01-10}.jpg");
}
main().catch(e => { console.error("Fatal:", e.message); process.exitCode = 1; });
