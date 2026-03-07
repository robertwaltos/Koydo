#!/usr/bin/env node

/**
 * Generate CDL educational diagram images using Imagen API.
 * Outputs to public/assets/cdl/ for use in CDL modules.
 *
 * Usage:
 *   node scripts/generate-cdl-images.mjs
 *   node scripts/generate-cdl-images.mjs --openai   (use DALL-E instead)
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUTPUT_DIR = path.resolve(ROOT, "public/assets/cdl");

// Load env vars from .env file
function loadEnv() {
  for (const envFile of [".env.local", ".env"]) {
    const p = path.resolve(ROOT, envFile);
    if (!fs.existsSync(p)) continue;
    for (const line of fs.readFileSync(p, "utf8").split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const idx = trimmed.indexOf("=");
      if (idx <= 0) continue;
      const key = trimmed.slice(0, idx).trim();
      const val = trimmed.slice(idx + 1).trim().replace(/^(['"])(.*)\1$/, "$2");
      if (!process.env[key]) process.env[key] = val;
    }
  }
}

loadEnv();

const USE_OPENAI = process.argv.includes("--openai");
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || "";
const OPENAI_MEDIA_KEY = process.env.OPENAI_MEDIA_API_KEY || "";
const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta";
const MODEL = "imagen-4.0-generate-001";

// CDL diagram prompts - educational, accurate, labeled
const CDL_PROMPTS = [
  {
    id: "engine-compartment",
    prompt: "Highly detailed labeled technical diagram of a diesel truck engine compartment for CDL pre-trip inspection training. Bird's eye view showing numbered callouts: oil dipstick, coolant reservoir, power steering reservoir, air compressor, alternator, water pump, serpentine belt, radiator hoses upper and lower, battery connections, starter motor, wiring harness. Clean white background, professional engineering illustration style, educational training material, no text overlay.",
    module: "cdl-pre-trip-inspection-101",
  },
  {
    id: "cab-dashboard",
    prompt: "Detailed labeled technical diagram of a commercial truck cab dashboard for CDL training. Shows all gauges: oil pressure gauge, coolant temperature, dual air pressure gauges primary and secondary, voltmeter, speedometer, tachometer, fuel gauge. Also shows controls: parking brake valve, trailer brake control, horn, wiper switches, defroster. Clean professional illustration, numbered callouts, educational training style, no text overlay.",
    module: "cdl-pre-trip-inspection-101",
  },
  {
    id: "truck-lighting",
    prompt: "Full commercial semi truck side view diagram showing all required DOT lighting positions for CDL inspection. Labeled positions: headlights, front turn signals amber, front clearance lights, side marker lights, three amber identification lights on cab top, rear turn signals, brake lights red, tail lights, rear clearance lights, license plate light, backup lights, reflectors. Clean technical illustration, educational training diagram, white background.",
    module: "cdl-pre-trip-inspection-101",
  },
  {
    id: "steering-system",
    prompt: "Technical cutaway diagram of a commercial truck steering system for CDL training. Shows complete steering linkage from steering wheel through steering column to steering gear box mounted on frame, pitman arm, drag link, steering knuckle, tie rod, tie rod ends with grease fittings, and steering stops. Each component clearly labeled with numbered callouts. Clean engineering illustration style, white background, educational.",
    module: "cdl-pre-trip-inspection-101",
  },
  {
    id: "leaf-spring-suspension",
    prompt: "Side-view technical diagram comparing leaf spring suspension and air bag suspension systems on a commercial truck axle for CDL training. Left side shows leaf springs with spring hangers, U-bolts, spring shackles, shock absorbers. Right side shows air bags bellows with height control valve, torque rods, axle seats. Common defect examples shown: broken leaf, leaking air bag. Educational training illustration, labeled callouts, white background.",
    module: "cdl-pre-trip-inspection-101",
  },
  {
    id: "brake-wheel-assembly",
    prompt: "Detailed technical cross-section diagram of a commercial truck S-cam drum brake and wheel assembly for CDL training. Shows: brake drum, brake chamber with push rod, slack adjuster at 90-degree applied angle clearly marked, S-cam, brake shoes with linings, return springs, inspection port for lining thickness check. Adjacent: wheel rim, lug nuts, hub oil seal, valve stem, tire with tread depth gauge showing 4/32 minimum for steer axle. Educational training illustration, labeled, white background.",
    module: "cdl-pre-trip-inspection-101",
  },
  {
    id: "air-brake-system",
    prompt: "Complete schematic diagram of a dual air brake system for a commercial tractor-trailer for CDL training. Shows: air compressor, governor, wet tank with drain valve, primary and secondary air tanks, foot brake valve, relay valves, quick release valves, brake chambers at each wheel, spring brake chambers on rear, tractor protection valve, glad hands, trailer air lines supply and control. Color-coded: primary circuit in blue, secondary circuit in red. Educational engineering diagram, labeled.",
    module: "cdl-air-brakes-101",
  },
  {
    id: "coupling-system",
    prompt: "Technical diagram of a tractor-trailer fifth wheel coupling system for CDL training. Shows: fifth wheel plate, locking jaws, release handle, kingpin, apron plate, trailer landing gear with crank handle, air line glad hands (red emergency, blue service), electrical connector 7-way plug, safety chains. Includes inset showing proper coupling verification: pull test, visual lock check, raised landing gear. Educational training illustration, white background, labeled callouts.",
    module: "cdl-combination-vehicles-101",
  },
  {
    id: "hazmat-placards",
    prompt: "Complete set of 9 DOT hazard class placards for CDL hazmat endorsement training. Arranged in a 3x3 grid: Class 1 Explosives orange, Class 2 Gases red/green/white, Class 3 Flammable Liquids red, Class 4 Flammable Solids red-white striped, Class 5 Oxidizers yellow, Class 6 Poisons white, Class 7 Radioactive white-yellow, Class 8 Corrosives black-white, Class 9 Miscellaneous black-white striped. Each placard shown as a diamond shape with class number and symbol. Educational reference chart, clean layout.",
    module: "cdl-hazmat-endorsement-101",
  },
  {
    id: "tanker-liquid-surge",
    prompt: "Educational physics diagram showing liquid surge and rollover risk in a tanker truck for CDL tanker endorsement training. Three sequential frames: Frame 1 shows truck braking with liquid surging forward against front bulkhead, Frame 2 shows truck turning with liquid shifting sideways raising center of gravity, Frame 3 shows partially loaded tank with more surge space. Includes cross-section views of circular, elliptical, and modified oval tank shapes. Clear arrows showing force directions. Educational training illustration, labeled.",
    module: "cdl-tanker-endorsement-101",
  },
  {
    id: "doubles-triples-coupling",
    prompt: "Technical diagram of a doubles (twin trailer) combination for CDL doubles/triples endorsement training. Shows: lead trailer, converter dolly with fifth wheel, rear trailer. Detailed callout of converter dolly components: drawbar, pintle hook connection, dolly fifth wheel, dolly air tank, dolly landing gear, safety chains routing. Shows crack-the-whip effect with dotted lines showing amplified rear trailer sway. Educational training illustration, side and top views, labeled.",
    module: "cdl-doubles-triples-endorsement-101",
  },
  {
    id: "school-bus-danger-zones",
    prompt: "Bird's eye aerial view diagram of a school bus showing the 10-foot danger zone around the entire bus for CDL school bus endorsement training. Shows: 10-foot perimeter marked in red/orange around all four sides. Students walking paths shown with arrows. Mirrors coverage zones shown with dashed lines: flat mirror view, convex mirror view, crossover mirrors. Loading and unloading positions marked. Traffic stop arm extended. Clean educational training diagram, labeled, overhead view.",
    module: "cdl-school-bus-endorsement-101",
  },
];

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function generateWithImagen(prompt) {
  const url = `${GEMINI_BASE}/models/${MODEL}:predict?key=${GOOGLE_API_KEY}`;
  const body = {
    instances: [{ prompt }],
    parameters: {
      sampleCount: 1,
      aspectRatio: "16:9",
      personGeneration: "dont_allow",
      safetyFilterLevel: "block_low_and_above",
    },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Imagen API error ${res.status}: ${text}`);
  }

  const data = await res.json();
  if (!data.predictions?.[0]?.bytesBase64Encoded) {
    throw new Error(`No image returned: ${JSON.stringify(data).slice(0, 200)}`);
  }

  return Buffer.from(data.predictions[0].bytesBase64Encoded, "base64");
}

async function generateWithOpenAI(prompt) {
  const { default: OpenAI } = await import("openai");
  const client = new OpenAI({ apiKey: OPENAI_MEDIA_KEY });

  const response = await client.images.generate({
    model: "gpt-image-1",
    prompt,
    n: 1,
    size: "1536x1024",
    quality: "high",
  });

  // gpt-image-1 returns base64 by default
  if (response.data[0].b64_json) {
    return Buffer.from(response.data[0].b64_json, "base64");
  }
  // fallback: download URL
  const imgRes = await fetch(response.data[0].url);
  return Buffer.from(await imgRes.arrayBuffer());
}

async function main() {
  const apiName = USE_OPENAI ? "OpenAI DALL-E" : "Imagen";
  const apiKey = USE_OPENAI ? OPENAI_MEDIA_KEY : GOOGLE_API_KEY;

  if (!apiKey) {
    console.error(`[error] ${USE_OPENAI ? "OPENAI_MEDIA_API_KEY" : "GOOGLE_API_KEY"} not found.`);
    process.exit(1);
  }

  console.log(`\n=== CDL Image Generation (${apiName}) ===`);
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log(`Prompts: ${CDL_PROMPTS.length}\n`);

  const results = [];

  for (const item of CDL_PROMPTS) {
    const outPath = path.join(OUTPUT_DIR, `${item.id}.png`);

    // Skip if already generated
    if (fs.existsSync(outPath)) {
      console.log(`[skip] ${item.id} — already exists`);
      results.push({ id: item.id, status: "skipped", path: outPath });
      continue;
    }

    console.log(`[gen] ${item.id}...`);
    try {
      const buffer = USE_OPENAI
        ? await generateWithOpenAI(item.prompt)
        : await generateWithImagen(item.prompt);

      fs.writeFileSync(outPath, buffer);
      console.log(`  -> saved (${(buffer.length / 1024).toFixed(0)} KB)`);
      results.push({ id: item.id, status: "ok", path: outPath, size: buffer.length });

      // Delay between requests to respect rate limits
      await new Promise((r) => setTimeout(r, 1500));
    } catch (err) {
      console.error(`  [fail] ${item.id}: ${err.message}`);
      results.push({ id: item.id, status: "error", error: err.message });
    }
  }

  // Write report
  const report = {
    generatedAt: new Date().toISOString(),
    api: apiName,
    total: CDL_PROMPTS.length,
    ok: results.filter((r) => r.status === "ok").length,
    skipped: results.filter((r) => r.status === "skipped").length,
    failed: results.filter((r) => r.status === "error").length,
    results,
  };

  const reportPath = path.join(OUTPUT_DIR, "generation-report.json");
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n=== Done: ${report.ok} generated, ${report.skipped} skipped, ${report.failed} failed ===`);
  console.log(`Report: ${reportPath}\n`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
