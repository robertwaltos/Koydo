/**
 * generate-hero-ideas.mjs
 *
 * Sends a brand-new summary of the Koydo app to OpenAI and generates
 * 10 completely fresh hero image concepts — nothing related to the
 * current "people walking on a path" approach.
 *
 * Output: public/generated-images/hero-idea-{01-10}.jpg
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

// ── App context (used in every prompt for consistency) ────────────────────────
const APP_CONTEXT = `Koydo is a free interactive educational platform for learners of all ages — from toddlers (age 3) through adults. It offers 200+ interactive modules spanning math, science, coding, languages, music, arts, and career skills. Available in English and Spanish. The brand feels aspirational, joyful, inclusive, and forward-looking — "the path to the stars begins with one lesson." The visual style is cinematic, photorealistic, warm, and inspiring. Hero images should immediately communicate: learning is for everyone, at every age, it's joyful, and the possibilities are limitless.`;

// ── 10 totally original hero concepts ─────────────────────────────────────────
const CONCEPTS = [
  {
    id: "01", title: "The Library of Infinite Portals",
    prompt: `${APP_CONTEXT}

HERO CONCEPT: A breathtaking cinematic wide-angle shot of a vast ancient-yet-futuristic library. Towering dark-wood bookshelves stretch to an impossibly high ceiling. But every bookshelf opening is a glowing portal to a different world: one portal shows outer space with floating astronauts, another shows an underwater coral reef, another an ancient Egyptian pyramid, another a modern coding lab with holographic screens. Warm amber light spills from each portal, illuminating a beautiful ornate mosaic floor. In the foreground, a small child's hands reach toward the nearest glowing shelf portal, curiosity personified. Photorealistic, cinematic, no people's faces visible, warm and awe-inspiring. No text, no logos. 4K quality.`
  },
  {
    id: "02", title: "The Constellation Classroom",
    prompt: `${APP_CONTEXT}

HERO CONCEPT: A child lying on their back on a grassy hilltop at night, arms outstretched, looking up at a spectacular star-filled sky. But the constellations above form recognisable shapes: a constellation of a music note, a mathematical pi symbol, a DNA helix, a globe, a paintbrush, a rocket. The Milky Way blazes in full detail overhead. The child is small in the frame — the vast, curious, beautiful sky is the hero. Warm firefly-like sparks float between the child and the sky. The mood is pure wonder. Cinematic photorealistic night scene. No text, no logos.`
  },
  {
    id: "03", title: "The Tree of All Knowledge",
    prompt: `${APP_CONTEXT}

HERO CONCEPT: A magnificent ancient tree with a glowing golden trunk, its sprawling branches each representing a different field of knowledge. On one branch: tiny floating mathematical equations and graphs. On another: musical notes and instruments. On another: chemistry beakers and DNA strands. On another: paintbrushes and colours. On another: code brackets and computer chips. Diverse children of different ages and ethnicities sit or play on different branches, each joyfully discovering their own subject. The tree grows from a meadow under a golden sunset sky. Lush, warm, painterly yet photorealistic. No text, no logos. Epic wide shot, 4K.`
  },
  {
    id: "04", title: "The Book Rocket Launch",
    prompt: `${APP_CONTEXT}

HERO CONCEPT: An awe-inspiring launch pad scene. A tower of stacked enormous books serves as a rocket, launching into a vivid blue-to-space gradient sky, leaving a brilliant trail of golden sparks and pages flying free. The pages transform into butterflies, musical notes, mathematical symbols, and tiny glowing stars as they scatter. On the ground below, diverse children in astronaut suits look up in wonder, arms raised in joy. The earth curves slightly at the bottom of the frame. Photorealistic, cinematic, breathtaking. No text, no logos. 4K.`
  },
  {
    id: "05", title: "The Ocean of Ideas",
    prompt: `${APP_CONTEXT}

HERO CONCEPT: A stunning aerial view of a luminescent ocean at twilight. The ocean waves are made of glowing text, equations, musical notes, and code that shimmer in teal and gold. Multiple tiny sailing ships carry diverse learners — a child with a telescope, a teenager with a laptop, an adult with a paintbrush — each sailing toward a large glowing lighthouse on a distant island. The lighthouse beam splits into prismatic colours illuminating each ship. The sky above transitions from deep blue to star-filled with a faint Milky Way. Cinematic, photorealistic, magical, epic scale. No text, no logos.`
  },
  {
    id: "06", title: "The Mind in Bloom",
    prompt: `${APP_CONTEXT}

HERO CONCEPT: An artistic yet photorealistic portrait-style hero image. A child's silhouette from the side — the top of their head opens like a blooming flower, and from within grows an entire universe: stars, planets, musical instruments, mathematical spirals, painted canvases, tiny books, glowing molecules. The internal universe glows in warm gold and teal. The child's face is peaceful, eyes closed, a serene smile. The background is a soft gradient from deep indigo to warm amber. Deeply inspiring and beautiful. No text, no logos. 4K quality.`
  },
  {
    id: "07", title: "The Bridge of Books",
    prompt: `${APP_CONTEXT}

HERO CONCEPT: An impossible, majestic bridge made entirely of stacked and woven giant books spans a dramatic chasm between two cliffs. The left cliff is barren, rocky, grey. The right cliff is lush, vibrant, glowing with light — a futuristic city and green forests beyond. Diverse people of all ages cross the bridge joyfully — a grandmother, a teenager, a toddler, a young professional. Some books on the bridge open by themselves, pages fluttering, releasing glowing light. Cinematic dramatic lighting, photorealistic epic landscape. No text, no logos.`
  },
  {
    id: "08", title: "The Classroom Window Through Time",
    prompt: `${APP_CONTEXT}

HERO CONCEPT: A warmly lit vintage school classroom at golden hour. Wooden desks, chalk dust in the light beams, a blackboard. But the large window at the front doesn't look onto a street — it looks onto MULTIPLE ERAS simultaneously, split into panels: one panel shows ancient Egypt with pyramids and hieroglyphs, one shows the International Space Station, one shows a Renaissance painting studio, one shows a modern robot lab. A diverse group of children lean toward the window in amazement. The light from outside the window fills the classroom with colour. Cinematic, warm, photorealistic, magical. No text, no logos.`
  },
  {
    id: "09", title: "The Glowing Neural City",
    prompt: `${APP_CONTEXT}

HERO CONCEPT: A breathtaking aerial bird's-eye view of a futuristic city at night, but the city is shaped like a human brain when viewed from above. The streets are neural pathways glowing in gold and teal. Each district/neighbourhood represents a field of knowledge: one glows deep blue for science, one warm gold for arts, one bright green for nature, one purple for music, one white for technology. Tiny lights (people) move along the pathways. The Milky Way is reflected in a river running through the city. Photorealistic, cinematic, awe-inspiring. No text, no logos. 4K aerial view.`
  },
  {
    id: "10", title: "The Kaleidoscope of Learning",
    prompt: `${APP_CONTEXT}

HERO CONCEPT: A stunningly beautiful, perfectly symmetrical kaleidoscope pattern fills the entire frame — but instead of abstract shapes, the kaleidoscope is made of real photographic elements: tiny books, musical instruments, beakers, paintbrushes, mathematical symbols, world maps, computer chips, and smiling diverse children's faces at the outer edges. The centre glows with brilliant white-gold light radiating outward. The overall palette is rich jewel tones — teal, amber, violet, rose. Photorealistic yet magical, it feels like the inside of a portal to all knowledge. Cinematic 4K. No text, no logos.`
  },
];

async function genImage(prompt, id) {
  const body = JSON.stringify({ model: "gpt-image-1", prompt, n: 1, size: "1536x1024", quality: "high" });
  console.log(`  [${id}] Requesting...`);
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: { "Authorization": `Bearer ${OPENAI_API_KEY}`, "Content-Type": "application/json" },
    body,
    signal: AbortSignal.timeout(5 * 60 * 1000),
  });
  if (!res.ok) throw new Error(`OpenAI ${res.status}: ${await res.text()}`);
  const item = (await res.json()).data?.[0];
  if (item?.b64_json) return Buffer.from(item.b64_json, "base64");
  if (item?.url)      return Buffer.from(await (await fetch(item.url)).arrayBuffer());
  throw new Error("No image in response");
}

async function main() {
  console.log("Generating 10 fresh Koydo hero concepts via OpenAI gpt-image-1\n");
  await fs.mkdir(OUT_DIR, { recursive: true });

  for (const concept of CONCEPTS) {
    const out = path.join(OUT_DIR, `hero-idea-${concept.id}.jpg`);
    console.log(`[${concept.id}/10] "${concept.title}"`);
    const buf = await genImage(concept.prompt, concept.id);
    await fs.writeFile(out, buf);
    console.log(`  ✓ hero-idea-${concept.id}.jpg (${Math.round(buf.length/1024)}KB)\n`);
  }

  console.log("✓ All 10 hero ideas done: public/generated-images/hero-idea-{01-10}.jpg");
}
main().catch(e => { console.error("Fatal:", e.message); process.exitCode = 1; });
