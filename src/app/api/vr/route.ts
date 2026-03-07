import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { resolveVoyagerAccessForServerRequest } from "@/lib/experience/voyager-access";

/**
 * VR/AR Simulations API — Voyager Zero
 * Scaffolding for immersive learning experiences.
 * Currently returns simulation catalog; actual VR rendering will use
 * WebXR or native AR/VR SDKs when hardware support is ready.
 */

const VR_SIMULATIONS = [
  {
    id: "solar-system",
    title: "Solar System Explorer",
    category: "Astronomy",
    description: "Walk through the solar system at scale. Visit each planet, compare sizes, and learn orbital mechanics.",
    difficulty: "Beginner",
    duration: "15 min",
    requirements: ["WebXR-compatible browser or VR headset"],
    status: "beta_preview",
    previewImage: null,
  },
  {
    id: "human-body",
    title: "Inside the Human Body",
    category: "Biology",
    description: "Explore the circulatory, nervous, and digestive systems from the inside. Shrink down and travel through organs.",
    difficulty: "Intermediate",
    duration: "20 min",
    requirements: ["WebXR-compatible browser or VR headset"],
    status: "beta_preview",
    previewImage: null,
  },
  {
    id: "ancient-rome",
    title: "Walk Through Ancient Rome",
    category: "History",
    description: "Experience the Roman Forum, Colosseum, and daily life in 100 AD. Interact with historical characters.",
    difficulty: "Beginner",
    duration: "25 min",
    requirements: ["WebXR-compatible browser or VR headset"],
    status: "beta_preview",
    previewImage: null,
  },
  {
    id: "chemistry-lab",
    title: "Virtual Chemistry Lab",
    category: "Chemistry",
    description: "Conduct chemical experiments safely in VR. Mix compounds, observe reactions, and learn lab safety.",
    difficulty: "Intermediate",
    duration: "30 min",
    requirements: ["WebXR-compatible browser or VR headset"],
    status: "beta_preview",
    previewImage: null,
  },
  {
    id: "ocean-depths",
    title: "Ocean Depths Expedition",
    category: "Marine Science",
    description: "Dive into the ocean and explore coral reefs, deep-sea trenches, and marine ecosystems.",
    difficulty: "Beginner",
    duration: "20 min",
    requirements: ["WebXR-compatible browser or VR headset"],
    status: "beta_preview",
    previewImage: null,
  },
  {
    id: "math-dimensions",
    title: "Dimensions of Mathematics",
    category: "Mathematics",
    description: "Visualize mathematical concepts in 3D: fractals, geometric transformations, and higher dimensions.",
    difficulty: "Advanced",
    duration: "15 min",
    requirements: ["WebXR-compatible browser or VR headset"],
    status: "beta_preview",
    previewImage: null,
  },
];

type ShowcaseManifest = {
  items?: Array<{
    id?: string;
    title?: string;
    category?: string;
    description?: string;
    imagePath?: string;
    status?: string;
  }>;
};

// Cached showcase items — loaded once at module init, not per-request
let cachedShowcaseItems: ReturnType<typeof parseShowcaseManifest> | null = null;

function parseShowcaseManifest() {
  const manifestPath = path.resolve(
    process.cwd(),
    "public/assets/experience/showcase/diverse/voyager-diverse-showcase.manifest.json",
  );

  if (!fs.existsSync(manifestPath)) return [];

  try {
    const raw = fs.readFileSync(manifestPath, "utf8");
    const parsed = JSON.parse(raw) as ShowcaseManifest;

    return (parsed.items ?? [])
      .filter((item) => item.status === "completed" && item.imagePath && item.id && item.title)
      .map((item) => ({
        id: String(item.id),
        title: String(item.title),
        category: item.category ? String(item.category) : "Immersive",
        description: item.description ? String(item.description) : "Generated immersive showcase scene.",
        imagePath: String(item.imagePath),
      }));
  } catch {
    return [];
  }
}

function loadDiverseShowcaseItems() {
  if (!cachedShowcaseItems) {
    cachedShowcaseItems = parseShowcaseManifest();
  }
  return cachedShowcaseItems;
}

/** GET /api/vr — list VR/AR simulations */
export async function GET() {
  const access = await resolveVoyagerAccessForServerRequest();
  const showcase = loadDiverseShowcaseItems();
  const simulations = access.fullAccess
    ? VR_SIMULATIONS
    : VR_SIMULATIONS.map((simulation) => ({
      ...simulation,
      status: "beta_locked",
    }));

  return NextResponse.json({
    simulations,
    showcase,
    access,
    platformInfo: {
      name: "Voyager Zero",
      version: "0.1.0-alpha",
      supported: ["WebXR", "Meta Quest", "Apple Vision Pro"],
      note: access.fullAccess
        ? "Beta access enabled for your class. Hardware and WebXR support still apply."
        : "Immersive mode is currently available for approved beta classes only.",
    },
  });
}
