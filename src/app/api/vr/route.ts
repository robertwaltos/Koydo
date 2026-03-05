import { NextResponse } from "next/server";

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
    status: "coming_soon",
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
    status: "coming_soon",
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
    status: "coming_soon",
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
    status: "coming_soon",
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
    status: "coming_soon",
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
    status: "coming_soon",
    previewImage: null,
  },
];

/** GET /api/vr — list VR/AR simulations */
export async function GET() {
  return NextResponse.json({
    simulations: VR_SIMULATIONS,
    platformInfo: {
      name: "Voyager Zero",
      version: "0.1.0-alpha",
      supported: ["WebXR", "Meta Quest", "Apple Vision Pro"],
      note: "VR simulations are coming soon. Hardware and WebXR support required.",
    },
  });
}
