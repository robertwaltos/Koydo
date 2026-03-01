/**
 * generate-hero-older.mjs
 *
 * 10 brand-new hero concepts featuring OLDER learners:
 * middle school (11-14), high school (15-18), college (18-22).
 * Some concepts mix multiple age groups. ALL images are BRIGHT.
 *
 * Output: public/generated-images/hero-older-{01-10}.jpg
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

const APP = `Koydo is a free educational platform for ALL ages — from toddlers through adults. 200+ interactive modules. The brand is joyful, inclusive, aspirational, and forward-looking. IMPORTANT: This batch focuses on OLDER learners — middle school, high school, and college students. Images should feel relevant to teenagers and young adults, not just young children.`;

const LIGHT = `LIGHTING: Bright, well-lit, vibrant. Warm golden daylight or golden-hour. High-key, joyful lighting. No dark or moody scenes.`;

const CONCEPTS = [
  {
    id: "01", title: "The Study Group at the Universe",
    prompt: `${APP}\n\n${LIGHT}\n\nA cinematic wide-angle hero image. A diverse group of HIGH SCHOOL and COLLEGE STUDENTS (ages 16-22) sit around a large transparent glass table on a spectacular rooftop terrace. Below them, the entire city glitters in golden afternoon light. On the table: holographic displays showing equations, code, maps, and molecular models rising up from their laptops and tablets. The students are deeply engaged but clearly enjoying themselves — laughing, pointing at holograms, taking notes. Diverse races, gender-neutral representation, backpacks and laptop bags. The sky behind is a brilliant golden-blue. Photorealistic, cinematic, 4K. No text, no logos.`
  },
  {
    id: "02", title: "The Science Lab of Tomorrow",
    prompt: `${APP}\n\n${LIGHT}\n\nA spectacular, bright science laboratory that feels like the future — all white surfaces, glass, and warm golden ambient light. MIDDLE SCHOOL and HIGH SCHOOL STUDENTS (ages 12-17) in safety goggles and lab coats work at gleaming benches. One group manipulates holographic DNA strands floating in the air. Another watches a chemical reaction produce vivid coloured smoke. One student looks through a digital microscope while a screen shows the magnified image in vivid colour. The lab has floor-to-ceiling windows with sunlight flooding in. Diverse students — Black, Asian, Latino, White. Joyful, curious, engaged. Photorealistic, bright, 4K. No text, no logos.`
  },
  {
    id: "03", title: "The College Campus Moment",
    prompt: `${APP}\n\n${LIGHT}\n\nA vibrant, sun-drenched university campus scene. COLLEGE STUDENTS (18-23) sit on the steps of a grand stone library building in warm afternoon light. Some study on laptops, some sketch in notebooks, some debate animatedly. The campus green stretches behind them with autumn trees in vivid gold and orange. In the background: a modern science building in glass and steel. The students are strikingly diverse — different races, styles, backgrounds. All look energetic, ambitious, and happy. A golden retriever sits beside one student. Cinematic golden-hour lighting, photorealistic, vibrant colours. No text, no logos.`
  },
  {
    id: "04", title: "The Coding Generation",
    prompt: `${APP}\n\n${LIGHT}\n\nA dynamic, brightly lit scene of TEENAGERS and YOUNG ADULTS (ages 14-22) in a modern co-working/maker space. Floor-to-ceiling windows flood the space with warm sunlight. Students work on laptops, building apps, games, and websites. One student's screen shows a colourful game they built. Another shows an app UI in vivid colours. Two students collaborate over a circuit board with glowing LEDs. The space has exposed brick, plants, colourful furniture, and a large display showing code. Diverse group, casual clothing, some with headphones. Energetic, modern, creative, bright. Photorealistic 4K. No text, no logos.`
  },
  {
    id: "05", title: "The High School Study Hall of Light",
    prompt: `${APP}\n\n${LIGHT}\n\nA stunningly beautiful school library reimagined — a vast bright space with soaring glass ceilings flooding the room with golden afternoon sunlight. Wooden reading tables with warm lamps. HIGH SCHOOL STUDENTS (ages 14-18) sit in groups and individually: one reads a thick textbook with annotations, one sketches architectural plans on a large tablet, one listens to language lessons with headphones, one solves math problems in a well-worn notebook. Bookshelves of warm wood extend to the ceiling. The mood is focused but calm and beautiful. Diverse students, bright warm light, vibrant and inviting. Photorealistic, 4K. No text, no logos.`
  },
  {
    id: "06", title: "The Breakthrough Moment",
    prompt: `${APP}\n\n${LIGHT}\n\nA powerful cinematic portrait-style hero image. A TEENAGE GIRL (16-17, mixed race, natural curly hair) sits at a bright window seat in golden afternoon light, looking up from her laptop with a sudden expression of pure joy and realisation — the eureka moment. Her laptop shows mathematical equations. Around her on the seat: textbooks, sticky notes, a half-eaten apple. Through the window behind her: a sunny campus with trees and blue sky. The light catches her face in a warm golden glow. Capturing the authentic emotion of understanding something for the first time. Photorealistic, cinematic, deeply human. No text, no logos.`
  },
  {
    id: "07", title: "The Language Lab",
    prompt: `${APP}\n\n${LIGHT}\n\nA vibrant, modern language learning lab bathed in warm light. DIVERSE STUDENTS from MIDDLE SCHOOL through COLLEGE (ages 12-21) practice speaking different languages. Each student wears lightweight headphones. The walls display beautiful murals of world maps, flags, and culturally diverse imagery. Speech visualisation waveforms glow on screens. Some students speak animatedly, some listen, some type. Warm wood, colourful accents, floor-to-ceiling bright windows. The energy is communicative, alive, joyful. Languages visible on screens: Spanish, Mandarin, Arabic, French, English. Bright, photorealistic, 4K. No text, no logos.`
  },
  {
    id: "08", title: "The Art Studio / Creative Generation",
    prompt: `${APP}\n\n${LIGHT}\n\nA spectacular, sun-drenched open-plan art studio in a converted warehouse space. Skylights flood the room with brilliant white-gold light. HIGH SCHOOL and COLLEGE STUDENTS (16-22) work on creative projects across disciplines: painting on large canvases, sculpting, drawing on tablets, composing music on keyboards with headphones, filming short videos. Art covers every wall in vivid colours. The floor is splattered with paint in beautiful patterns. Students are joyful, absorbed, expressive. Diverse races and styles. Some collaborate, some work alone. Bright, vibrant, creative energy. Photorealistic, cinematic, 4K. No text, no logos.`
  },
  {
    id: "09", title: "Rooftop Stargazing — Dusk",
    prompt: `${APP}\n\n${LIGHT}\n\nA magical rooftop scene at golden hour transitioning to dusk — the sky is a spectacular gradient from warm amber-gold at the horizon to deep violet-blue above, with the first bright stars appearing. COLLEGE and HIGH SCHOOL STUDENTS (16-23) gather on a university rooftop terrace around a high-powered telescope. One student peers through the eyepiece, others look up in wonder. A student sketches star maps in a notebook. Another checks a star-chart app on a tablet that glows warm in the fading light. City lights sparkle below. The scene is bright, warm, and awe-inspiring — a golden-hour sky dominates. Photorealistic, cinematic, 4K. No text, no logos.`
  },
  {
    id: "10", title: "The Multi-Age Learning Café",
    prompt: `${APP}\n\n${LIGHT}\n\nA warm, inviting, beautifully designed modern learning café or co-working space flooded with golden afternoon sunlight. Floor-to-ceiling windows, warm wood furniture, plants everywhere, exposed brick. LEARNERS OF ALL AGES share the same bright space: a TODDLER (3) explores an interactive tablet with bright colours beside their parent; a MIDDLE SCHOOLER (12) does homework at a table; HIGH SCHOOLERS (16) collaborate on a group project on matching laptops; a COLLEGE STUDENT (20) reviews notes with earbuds in; an ADULT (35) takes an online certification course. Everyone is focused yet relaxed, joyful, and purposeful. Diverse races. The scene shows learning has no age limit. Bright, warm, photorealistic, cinematic. No text, no logos.`
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
  console.log("Generating 10 BRIGHT older-age hero concepts\n");
  await fs.mkdir(OUT_DIR, { recursive: true });
  for (const c of CONCEPTS) {
    console.log(`[${c.id}/10] "${c.title}"`);
    const buf = await genImage(c.prompt);
    const out = path.join(OUT_DIR, `hero-older-${c.id}.jpg`);
    await fs.writeFile(out, buf);
    console.log(`  ✓ hero-older-${c.id}.jpg (${Math.round(buf.length/1024)}KB)\n`);
  }
  console.log("✓ Done: public/generated-images/hero-older-{01-10}.jpg");
}
main().catch(e => { console.error("Fatal:", e.message); process.exitCode = 1; });
