#!/usr/bin/env node

/**
 * Generate a diverse Voyager showcase image library using Google Imagen.
 *
 * Output:
 *   public/assets/experience/showcase/diverse/*.png
 *   public/assets/experience/showcase/diverse/voyager-diverse-showcase.manifest.json
 *
 * Usage:
 *   node scripts/generate-voyager-diverse-showcase.mjs --limit 120
 *   node scripts/generate-voyager-diverse-showcase.mjs --limit 20 --dry-run
 *   node scripts/generate-voyager-diverse-showcase.mjs --resume --delay-ms 7000
 */

import fs from "node:fs";
import path from "node:path";

const ENV_PATH = path.resolve(".env");
const OUTPUT_DIR = path.resolve("public/assets/experience/showcase/diverse");
const MANIFEST_PATH = path.join(OUTPUT_DIR, "voyager-diverse-showcase.manifest.json");
const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta";

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};

  const raw = fs.readFileSync(filePath, "utf8");
  const values = {};
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex <= 0) continue;
    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"'))
      || (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    values[key] = value;
  }
  return values;
}

function parseArgs(argv) {
  const args = {
    limit: 120,
    dryRun: false,
    resume: true,
    delayMs: 6500,
    model: "imagen-4.0-generate-001",
    aspectRatio: "16:9",
  };

  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--limit" && argv[i + 1]) {
      args.limit = Number(argv[i + 1]);
      i += 1;
    } else if (arg === "--dry-run") {
      args.dryRun = true;
    } else if (arg === "--resume") {
      args.resume = true;
    } else if (arg === "--no-resume") {
      args.resume = false;
    } else if (arg === "--delay-ms" && argv[i + 1]) {
      args.delayMs = Number(argv[i + 1]);
      i += 1;
    } else if (arg === "--model" && argv[i + 1]) {
      args.model = String(argv[i + 1]);
      i += 1;
    } else if (arg === "--aspect-ratio" && argv[i + 1]) {
      args.aspectRatio = String(argv[i + 1]);
      i += 1;
    }
  }

  return args;
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function normalizeErrorMessage(error) {
  if (error instanceof Error) return error.message;
  return String(error);
}

async function generateImagenImage({ apiKey, model, aspectRatio, prompt }) {
  const url = `${GEMINI_BASE}/models/${model}:predict?key=${apiKey}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      instances: [{ prompt }],
      parameters: {
        sampleCount: 1,
        aspectRatio,
        personGeneration: "allow_all",
        outputOptions: { mimeType: "image/png" },
      },
    }),
  });

  const text = await response.text().catch(() => "");
  let data = null;
  try {
    data = JSON.parse(text);
  } catch {
    data = null;
  }

  if (!response.ok) {
    const reason = data?.error?.details?.[0]?.reason ?? data?.error?.status ?? "unknown";
    const message = data?.error?.message ?? text.slice(0, 500);
    const error = new Error(`Imagen ${response.status} ${reason}: ${message}`);
    error.statusCode = response.status;
    throw error;
  }

  const bytes = data?.predictions?.[0]?.bytesBase64Encoded;
  if (!bytes) throw new Error("Imagen response did not include image bytes");

  return Buffer.from(bytes, "base64");
}

function buildConcepts() {
  return [
    {
      slug: "solar-system-flight",
      titleStem: "Solar System Flight School",
      category: "Astronomy",
      coreVisual: "a guided fly-through from Mercury to Neptune with accurate scale cues and orbital lanes",
      learningGoal: "planet order, scale, and orbital mechanics",
    },
    {
      slug: "exoplanet-atlas",
      titleStem: "Exoplanet Atlas Navigator",
      category: "Astronomy",
      coreVisual: "a classroom observatory mapping diverse exoplanet types around distant stars",
      learningGoal: "planet classification and habitable zone reasoning",
    },
    {
      slug: "black-hole-lens",
      titleStem: "Black Hole Lens Lab",
      category: "Physics",
      coreVisual: "light bending around a black hole with visible gravitational lensing arcs",
      learningGoal: "gravity, spacetime curvature, and observational inference",
    },
    {
      slug: "protein-folding",
      titleStem: "Protein Folding Studio",
      category: "Biochemistry",
      coreVisual: "ribbons of amino acid chains folding into stable 3D protein structures",
      learningGoal: "structure-function relationships in biology",
    },
    {
      slug: "cell-city",
      titleStem: "Cell City Expedition",
      category: "Biology",
      coreVisual: "an explorable microscopic city metaphor of organelles and molecular traffic",
      learningGoal: "organelle roles and cellular systems thinking",
    },
    {
      slug: "dna-editing",
      titleStem: "DNA Editing Workshop",
      category: "Genetics",
      coreVisual: "precise CRISPR edit points on a DNA helix with safe educational overlays",
      learningGoal: "mutation, repair pathways, and ethics basics",
    },
    {
      slug: "reef-ecosystem",
      titleStem: "Coral Reef Systems Dive",
      category: "Marine Science",
      coreVisual: "food-web interactions across reef fish, coral, and plankton layers",
      learningGoal: "ecosystem balance and biodiversity dynamics",
    },
    {
      slug: "climate-simulator",
      titleStem: "Climate Systems Command",
      category: "Earth Science",
      coreVisual: "global atmospheric circulation bands, ocean currents, and weather cells",
      learningGoal: "climate drivers and feedback loops",
    },
    {
      slug: "tectonic-engine",
      titleStem: "Tectonic Plate Engine",
      category: "Geology",
      coreVisual: "moving crust plates with subduction zones, rifts, and mountain formation",
      learningGoal: "plate boundaries and geologic hazards",
    },
    {
      slug: "volcano-lab",
      titleStem: "Volcanology Field Lab",
      category: "Geology",
      coreVisual: "stratovolcano cross-sections showing magma chambers and eruption pathways",
      learningGoal: "volcanic processes and risk assessment",
    },
    {
      slug: "quantum-orbitals",
      titleStem: "Quantum Orbital Theater",
      category: "Chemistry",
      coreVisual: "electron cloud orbitals and probability density surfaces in a learning dome",
      learningGoal: "atomic structure and orbital intuition",
    },
    {
      slug: "reaction-kinetics",
      titleStem: "Reaction Kinetics Arena",
      category: "Chemistry",
      coreVisual: "molecular collisions and energy barriers in a timed reaction chamber",
      learningGoal: "activation energy and reaction rate factors",
    },
    {
      slug: "electromagnetism",
      titleStem: "Electromagnetism Grid",
      category: "Physics",
      coreVisual: "visible electric and magnetic field lines around coils and circuits",
      learningGoal: "field interactions and induction concepts",
    },
    {
      slug: "renewable-grid",
      titleStem: "Renewable Grid Architect",
      category: "Engineering",
      coreVisual: "an integrated solar-wind-hydro smart grid with storage balancing",
      learningGoal: "energy tradeoffs and systems optimization",
    },
    {
      slug: "bridge-engineering",
      titleStem: "Bridge Stress Simulator",
      category: "Engineering",
      coreVisual: "dynamic load testing across different bridge designs and material choices",
      learningGoal: "force distribution and structural design",
    },
  ];
}

function buildScenes() {
  return [
    {
      slug: "cinematic-realist",
      title: "Cinematic Realist",
      style: "cinematic photoreal render",
      camera: "wide-angle dolly shot with volumetric lighting",
      palette: "deep navy, copper, and cool cyan highlights",
      composition: "hero focal object with layered depth and clean foreground guide lines",
    },
    {
      slug: "isometric-lab",
      title: "Isometric Lab",
      style: "high-detail isometric educational diorama",
      camera: "tilted orthographic view",
      palette: "bright mint, amber, and cobalt accents",
      composition: "modular labeled zones without text overlays",
    },
    {
      slug: "infographic-3d",
      title: "Infographic 3D",
      style: "3D infographic style with clear spatial hierarchy",
      camera: "semi-top-down instructional perspective",
      palette: "white backdrop with saturated category color coding",
      composition: "stepwise visual flow from left to right",
    },
    {
      slug: "macro-science",
      title: "Macro Science",
      style: "ultra-macro scientific visualization",
      camera: "close macro lens with shallow depth of field",
      palette: "emerald, electric blue, and warm gold micro-glow",
      composition: "single dominant structure with contextual micro-elements",
    },
    {
      slug: "retro-future",
      title: "Retro Future",
      style: "retro-futurist classroom poster aesthetic in high fidelity",
      camera: "symmetrical center-framed shot",
      palette: "sunset orange, teal, cream, and charcoal",
      composition: "bold geometry and readable silhouette separation",
    },
    {
      slug: "minimal-premium",
      title: "Minimal Premium",
      style: "minimal premium product-shot educational scene",
      camera: "studio three-quarter angle with soft key light",
      palette: "neutral graphite and pearl with one vivid accent color",
      composition: "large negative space for UI placement",
    },
    {
      slug: "terrain-vista",
      title: "Terrain Vista",
      style: "expansive environmental concept art",
      camera: "aerial perspective with layered atmospheric depth",
      palette: "natural earth tones with bright scientific overlays implied by objects",
      composition: "foreground marker, middle action zone, distant landmark",
    },
    {
      slug: "holographic-hub",
      title: "Holographic Hub",
      style: "futuristic holographic classroom command center",
      camera: "over-shoulder simulation console angle without visible people",
      palette: "black glass, magenta, cyan, and neon lime emissive accents",
      composition: "radial layout converging on the key learning object",
    },
  ];
}

function buildIdeas() {
  const concepts = buildConcepts();
  const scenes = buildScenes();
  const ideas = [];

  for (const concept of concepts) {
    for (const scene of scenes) {
      const id = `${concept.slug}-${scene.slug}`;
      ideas.push({
        id,
        category: concept.category,
        title: `${concept.titleStem} — ${scene.title}`,
        description: `Immersive ${concept.category.toLowerCase()} scene focused on ${concept.learningGoal}.`,
        prompt: [
          `${concept.coreVisual}.`,
          `Build a premium educational keyframe in ${scene.style}.`,
          `Camera: ${scene.camera}.`,
          `Palette: ${scene.palette}.`,
          `Composition: ${scene.composition}.`,
          `Prioritize scientific accuracy, clear concept readability, and child-safe classroom visuals.`,
          "No logos, no text overlays, no watermarks, no copyrighted characters.",
          "Render as high-detail concept art suitable for immersive learning UI cards.",
        ].join(" "),
      });
    }
  }

  return ideas;
}

function loadManifest() {
  if (!fs.existsSync(MANIFEST_PATH)) return null;
  try {
    return JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
  } catch {
    return null;
  }
}

function writeManifest(manifest) {
  ensureDir(OUTPUT_DIR);
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
}

function maskKey(key) {
  if (!key || key.length < 12) return "missing";
  return `${key.slice(0, 6)}...${key.slice(-4)}`;
}

async function run() {
  const args = parseArgs(process.argv);
  const envValues = parseEnvFile(ENV_PATH);
  const apiKey = envValues.GOOGLE_API_KEY || process.env.GOOGLE_API_KEY || "";

  if (!apiKey) {
    console.error("[fatal] GOOGLE_API_KEY is missing from .env or environment.");
    process.exit(1);
  }

  ensureDir(OUTPUT_DIR);

  const allIdeas = buildIdeas();
  const targetIdeas = allIdeas.slice(0, Math.max(0, args.limit));
  const existingManifest = args.resume ? loadManifest() : null;
  const previousItemsById = new Map(
    ((existingManifest?.items ?? [])).map((item) => [item.id, item]),
  );

  const manifest = {
    generatedAt: new Date().toISOString(),
    model: args.model,
    aspectRatio: args.aspectRatio,
    totalRequested: targetIdeas.length,
    totalCompleted: 0,
    totalFailed: 0,
    totalSkipped: 0,
    items: [],
  };

  console.log("═══════════════════════════════════════════════════════════");
  console.log(" Voyager Diverse Showcase Generator");
  console.log("═══════════════════════════════════════════════════════════");
  console.log(`Key: ${maskKey(apiKey)} | Model: ${args.model} | Aspect: ${args.aspectRatio}`);
  console.log(`Target items: ${targetIdeas.length} | Dry run: ${args.dryRun} | Resume: ${args.resume}`);
  console.log("");

  let index = 0;
  for (const idea of targetIdeas) {
    index += 1;
    const outputFilename = `${idea.id}.png`;
    const outputPath = path.join(OUTPUT_DIR, outputFilename);
    const publicPath = `/assets/experience/showcase/diverse/${outputFilename}`;
    const previous = previousItemsById.get(idea.id);
    const alreadyComplete = previous?.status === "completed" && fs.existsSync(outputPath);

    if (alreadyComplete) {
      manifest.totalSkipped += 1;
      manifest.totalCompleted += 1;
      manifest.items.push({
        ...previous,
        id: idea.id,
        title: idea.title,
        category: idea.category,
        description: idea.description,
        prompt: idea.prompt,
        imagePath: publicPath,
      });
      console.log(`[${index}/${targetIdeas.length}] ${idea.id} - skipped (already exists)`);
      continue;
    }

    if (args.dryRun) {
      manifest.totalSkipped += 1;
      manifest.items.push({
        id: idea.id,
        title: idea.title,
        category: idea.category,
        description: idea.description,
        prompt: idea.prompt,
        imagePath: publicPath,
        status: "dry_run",
        generatedAt: new Date().toISOString(),
      });
      console.log(`[${index}/${targetIdeas.length}] ${idea.id} - dry run`);
      continue;
    }

    console.log(`[${index}/${targetIdeas.length}] ${idea.id} - generating...`);

    const attemptGenerate = async () => generateImagenImage({
      apiKey,
      model: args.model,
      aspectRatio: args.aspectRatio,
      prompt: idea.prompt,
    });

    try {
      let imageBuffer = null;
      try {
        imageBuffer = await attemptGenerate();
      } catch (error) {
        const message = normalizeErrorMessage(error);
        const shouldRetry =
          message.includes("429")
          || message.toLowerCase().includes("quota")
          || message.toLowerCase().includes("rate");
        if (!shouldRetry) throw error;
        console.warn(`  ↳ rate/quota hit; backing off 60s before retry (${idea.id})`);
        await sleep(60_000);
        imageBuffer = await attemptGenerate();
      }

      fs.writeFileSync(outputPath, imageBuffer);
      manifest.totalCompleted += 1;
      manifest.items.push({
        id: idea.id,
        title: idea.title,
        category: idea.category,
        description: idea.description,
        prompt: idea.prompt,
        imagePath: publicPath,
        status: "completed",
        generatedAt: new Date().toISOString(),
      });
      console.log(`  ↳ saved ${outputFilename}`);
    } catch (error) {
      const errorMessage = normalizeErrorMessage(error);
      manifest.totalFailed += 1;
      manifest.items.push({
        id: idea.id,
        title: idea.title,
        category: idea.category,
        description: idea.description,
        prompt: idea.prompt,
        imagePath: publicPath,
        status: "failed",
        error: errorMessage,
        generatedAt: new Date().toISOString(),
      });
      console.error(`  ↳ failed ${idea.id}: ${errorMessage.slice(0, 220)}`);
    }

    manifest.generatedAt = new Date().toISOString();
    writeManifest(manifest);
    await sleep(Math.max(0, args.delayMs));
  }

  manifest.generatedAt = new Date().toISOString();
  writeManifest(manifest);

  console.log("");
  console.log("═══════════════════════════════════════════════════════════");
  console.log(" Showcase Summary");
  console.log("═══════════════════════════════════════════════════════════");
  console.log(`Completed: ${manifest.totalCompleted}`);
  console.log(`Failed:    ${manifest.totalFailed}`);
  console.log(`Skipped:   ${manifest.totalSkipped}`);
  console.log(`Manifest:  ${MANIFEST_PATH}`);
}

run().catch((error) => {
  console.error("[fatal]", normalizeErrorMessage(error));
  process.exit(1);
});
