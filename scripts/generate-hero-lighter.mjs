/**
 * generate-hero-lighter.mjs
 *
 * Re-generates all 10 hero concepts with BRIGHT, DAYLIGHT lighting.
 * The original batch was too dark. This version adds aggressive
 * brightness/vibrancy modifiers to every prompt.
 *
 * Output: public/generated-images/hero-light-{01-10}.jpg
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

const APP = `Koydo is a free educational platform for ALL ages — toddlers through adults. 200+ interactive modules. Math, science, coding, arts, languages, career skills. Joyful, inclusive, aspirational. The visual style is BRIGHT, VIBRANT, CINEMATIC, and HOPEFUL.`;

// Lighting prefix applied to every prompt
const LIGHT = `CRITICAL LIGHTING REQUIREMENT: This image must be BRIGHT and WELL-LIT. Use warm golden daylight, vibrant noon sun, or glorious golden-hour lighting. High-key lighting. Vivid, saturated colours. NO dark scenes, NO night imagery, NO dim lighting. The image should feel joyful, warm, and inviting — NOT dark or moody. Think: a perfect sunny afternoon.`;

const CONCEPTS = [
  {
    id: "01", title: "Library of Infinite Portals — BRIGHT",
    prompt: `${APP}\n\n${LIGHT}\n\nA breathtaking grand library flooded with warm golden sunlight streaming through enormous arched windows. Towering bookshelves of warm honey-coloured oak stretch to a high vaulted ceiling painted in cream and gold. Every bookshelf opening glows as a portal to a different world bathed in brilliant light: one portal shows a sun-drenched coral reef in vivid teal and orange, another shows Egyptian pyramids at noon under a blazing blue sky, another shows a futuristic lab with crisp white walls and holographic displays. Floating particles of golden light drift between the portals. A child's small hands reach toward the nearest portal in wonder. The overall image is warm, bright, golden, joyful. No dark corners. Photorealistic 4K. No text, no logos.`
  },
  {
    id: "02", title: "Constellation Classroom — BRIGHT",
    prompt: `${APP}\n\n${LIGHT}\n\nA child lies on a bright green hilltop on a warm sunny afternoon. The sky is a brilliant golden-hour sunset — vivid orange, pink, and amber from horizon to mid-sky. In this magical golden sky, the first bright stars of dusk are already visible and they form recognisable learning constellations: a music note, the pi symbol, a DNA helix, a globe, a rocket. The child is joyful, arms wide, surrounded by wildflowers. The scene is BRIGHT and warm — sunset gold, not dark night. Cinematic photorealistic, vibrant warm colours. No text, no logos.`
  },
  {
    id: "03", title: "Tree of All Knowledge — BRIGHT",
    prompt: `${APP}\n\n${LIGHT}\n\nA magnificent ancient tree with a luminous golden trunk in full midday sunlight on a lush green hillside. Sunlight filters brilliantly through the canopy, dappling everything in gold and emerald. Every branch represents a subject: mathematical equations shimmer on one branch, musical notes flutter on another, chemistry symbols glow on another, paint colours bloom on another, code brackets sparkle on another. Diverse children of all ages sit on branches or in the grass below — a toddler, a middle schooler, a high schooler, a college student — each joyfully exploring their subject. Vivid greens, warm golds, brilliant blue sky above. Photorealistic, lush, vibrant, 4K. No text, no logos.`
  },
  {
    id: "04", title: "Book Rocket Launch — BRIGHT",
    prompt: `${APP}\n\n${LIGHT}\n\nA spectacular launch pad scene under a brilliant blue sky with dramatic white clouds. A tower of giant colourful stacked books launches skyward on a brilliant plume of golden sparks and confetti. Book pages scatter and transform into butterflies, musical notes, mathematical symbols, and glowing stars in the bright daytime sky. On the ground below, diverse children in colourful astronaut suits cheer with arms raised in pure joy — a mix of ages from elementary through high school. The earth below is vivid green and the sky is a deep vibrant blue. Energetic, joyful, bright, cinematic. No text, no logos.`
  },
  {
    id: "05", title: "Ocean of Ideas — BRIGHT",
    prompt: `${APP}\n\n${LIGHT}\n\nA stunning aerial view of a bright turquoise ocean on a sun-drenched afternoon. The waves catch the sun and sparkle in gold and teal. The ocean waves are made of glowing text, equations, musical notes, and code that shimmer in vivid colours. Multiple colourful sailing ships carry diverse learners — a teenager with a telescope, a high schooler with a laptop, a college student sketching on a tablet — each sailing confidently toward a gleaming white lighthouse on a lush green island. The sky is brilliant blue with white clouds lit from below by golden sun. Vivid, bright, cinematic aerial view. No text, no logos.`
  },
  {
    id: "06", title: "The Mind in Bloom — BRIGHT",
    prompt: `${APP}\n\n${LIGHT}\n\nA beautiful artistic hero image: a teenager's silhouette from the side against a warm golden background. The top of their head opens like a sunflower blooming in bright sunlight. From within grows a vivid, brilliantly lit universe of knowledge: planets in jewel colours, musical instruments in gold, mathematical spirals in amber, tiny books in vivid red and blue, glowing molecules in teal, small canvases with bright paintings. Everything inside glows with warm golden light as if the sun is inside the mind. The background is a warm gradient of amber, peach, and sky blue. Joyful, bright, beautiful. No text, no logos. 4K.`
  },
  {
    id: "07", title: "Bridge of Books — BRIGHT",
    prompt: `${APP}\n\n${LIGHT}\n\nUnder a brilliant clear blue sky with warm golden sunlight, a majestic bridge made of colourful giant books spans a dramatic gorge between two cliffs. The left cliff is bare grey rock. The right cliff is explosively lush — vivid green forests, flowers, a gleaming futuristic campus visible on the plateau. The bridge of books is brightly lit: book spines in vivid red, blue, yellow, green catch the sunlight. Diverse people of all ages cross joyfully — grandparent, high schooler, middle schooler, toddler on a parent's back. Some books open on their own, pages fluttering like wings in the bright breeze. Vibrant, joyful, photorealistic epic landscape. No text, no logos.`
  },
  {
    id: "08", title: "Classroom Window Through Time — BRIGHT",
    prompt: `${APP}\n\n${LIGHT}\n\nA warmly lit, beautifully restored vintage schoolroom bathed in brilliant afternoon sunlight. Honey-coloured wooden desks, chalk dust floating in golden light beams, cream and terracotta walls. The large windows at the front look onto MULTIPLE BRIGHT ERAS: one bright panel shows Egyptian pyramids at high noon under a blazing blue sky, one shows a sunlit Renaissance studio with paintings and warm candlelight, one shows a gleaming modern robotics lab in white and chrome. Diverse students from middle school through college lean forward in amazement, their faces lit with curiosity and warm sunlight. Bright, warm, photorealistic, cinematic. No text, no logos.`
  },
  {
    id: "09", title: "Neural City — BRIGHT",
    prompt: `${APP}\n\n${LIGHT}\n\nA breathtaking aerial view of a gleaming futuristic city bathed in brilliant golden afternoon sunlight. The city, when viewed from above, is shaped like a human brain. The streets are neural pathways that glow in amber and teal under the sun. Each district shines in a different colour: science quarter in vivid teal glass towers, arts quarter in warm terracotta and gold, technology quarter in chrome and blue. Rivers of golden light flow along the pathways. In the bright blue sky above, a few hot-air balloons and drones carry students between districts. Everything sparkles in sunlight. Photorealistic, bright, vibrant, cinematic aerial. No text, no logos.`
  },
  {
    id: "10", title: "Kaleidoscope of Learning — BRIGHT",
    prompt: `${APP}\n\n${LIGHT}\n\nA stunningly beautiful, perfectly symmetrical kaleidoscope pattern in VIVID BRIGHT COLOURS fills the frame. Instead of abstract shapes, the kaleidoscope is made of real photographic elements: colourful books, golden musical instruments, bright chemistry beakers, vivid paintbrushes, mathematical symbols in bold colours, world maps in blues and greens, computer chips in silver, and joyful faces of diverse students — elementary through college — at the outer edges. The centre blazes with brilliant white-gold light radiating outward. The palette is rich and BRIGHT: turquoise, amber, rose, emerald, violet — all vivid and saturated. Photorealistic yet magical, 4K. No text, no logos.`
  },
];

async function genImage(prompt) {
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method:  "POST",
    headers: { "Authorization": `Bearer ${OPENAI_API_KEY}`, "Content-Type": "application/json" },
    body:    JSON.stringify({ model: "gpt-image-1", prompt, n: 1, size: "1536x1024", quality: "high" }),
    signal:  AbortSignal.timeout(5 * 60 * 1000),
  });
  if (!res.ok) throw new Error(`OpenAI ${res.status}: ${await res.text()}`);
  const item = (await res.json()).data?.[0];
  if (item?.b64_json) return Buffer.from(item.b64_json, "base64");
  if (item?.url)      return Buffer.from(await (await fetch(item.url)).arrayBuffer());
  throw new Error("No image");
}

async function main() {
  console.log("Generating 10 BRIGHT hero concepts\n");
  await fs.mkdir(OUT_DIR, { recursive: true });
  for (const c of CONCEPTS) {
    console.log(`[${c.id}/10] "${c.title}"`);
    const buf = await genImage(c.prompt);
    const out = path.join(OUT_DIR, `hero-light-${c.id}.jpg`);
    await fs.writeFile(out, buf);
    console.log(`  ✓ hero-light-${c.id}.jpg (${Math.round(buf.length/1024)}KB)\n`);
  }
  console.log("✓ Done: public/generated-images/hero-light-{01-10}.jpg");
}
main().catch(e => { console.error("Fatal:", e.message); process.exitCode = 1; });
