/**
 * Visual scene metadata for the Explorer.
 *
 * Two layers:
 * 1. **EducationStage** — the 6 lobby cards spanning Pre-K through College.
 *    Each stage is a gateway to the learning paths appropriate for that level.
 * 2. **WorldScene** — per-topic visual styling (gradient, glow, badge) used by
 *    topic pages, module pages, and lesson pages for immersive theming.
 */

/* ─── Education Stages (Lobby Cards) ─────────────────────────── */

export type EducationStage = {
  /** Unique stage identifier */
  id: string;
  /** Display label for the card */
  label: string;
  /** Spanish display label */
  labelEs: string;
  /** One-line description */
  description: string;
  /** Spanish description */
  descriptionEs: string;
  /** Age range string for display */
  ageRange: string;
  /** Grade range string for display */
  gradeRange: string;
  /** CSS gradient for the card */
  gradient: string;
  /** Glow accent color */
  glowColor: string;
  /** Border tint */
  borderColor: string;
  /** Emoji badge */
  badge: string;
  /** Theme-pack name */
  themePack: string;
  /** Short narration for auto-narrator */
  narration: string;
  /** Spanish narration */
  narrationEs: string;
};

const educationStages: EducationStage[] = [
  {
    id: "pre-k",
    label: "Little Explorers",
    labelEs: "Pequeños Exploradores",
    description: "Play-first foundations: colors, shapes, sounds, and counting.",
    descriptionEs: "Fundamentos con juego: colores, formas, sonidos y conteo.",
    ageRange: "Ages 3–5",
    gradeRange: "Pre-K",
    gradient: "linear-gradient(135deg, #ffdff7 0%, #ffe8ca 45%, #d8e7ff 100%)",
    glowColor: "#ff56b3",
    borderColor: "#f8c6f4",
    badge: "🧒",
    themePack: "candy",
    narration: "Welcome, Little Explorers! Tap to play, discover, and learn!",
    narrationEs: "¡Bienvenidos, Pequeños Exploradores! ¡Toca para jugar, descubrir y aprender!",
  },
  {
    id: "early-elem",
    label: "First Adventures",
    labelEs: "Primeras Aventuras",
    description: "Core literacy and math confidence for early elementary learners.",
    descriptionEs: "Lectoescritura y matemáticas base para primaria inicial.",
    ageRange: "Ages 6–8",
    gradeRange: "K–2",
    gradient: "linear-gradient(135deg, #dcffe9 0%, #d8f8da 45%, #fffbe6 100%)",
    glowColor: "#4ccc63",
    borderColor: "#b8ebc8",
    badge: "🌈",
    themePack: "forest",
    narration: "Welcome to First Adventures! Reading, math, and nature await.",
    narrationEs: "¡Bienvenidos a Primeras Aventuras! Lectura, matemáticas y naturaleza te esperan.",
  },
  {
    id: "upper-elem",
    label: "Discovery Lab",
    labelEs: "Laboratorio de Descubrimiento",
    description: "Deeper practice in science, multiplication, writing, and projects.",
    descriptionEs: "Práctica avanzada en ciencias, multiplicación, escritura y proyectos.",
    ageRange: "Ages 9–11",
    gradeRange: "3–5",
    gradient: "linear-gradient(135deg, #d7f7ff 0%, #dbefff 45%, #e4e0ff 100%)",
    glowColor: "#0891b2",
    borderColor: "#b7e3ff",
    badge: "🔬",
    themePack: "ocean",
    narration: "Welcome to Discovery Lab! Experiment, explore, and create.",
    narrationEs: "¡Bienvenidos al Laboratorio de Descubrimiento! Experimenta, explora y crea.",
  },
  {
    id: "middle",
    label: "Challenge Zone",
    labelEs: "Zona de Desafío",
    description: "Middle-school rigor: pre-algebra, history, and coding fundamentals.",
    descriptionEs: "Rigor de secundaria: preálgebra, historia y bases de programación.",
    ageRange: "Ages 12–14",
    gradeRange: "6–8",
    gradient: "linear-gradient(135deg, #e3e5ff 0%, #f1f7ff 45%, #f8e8ff 100%)",
    glowColor: "#6366f1",
    borderColor: "#c4b5fd",
    badge: "⚡",
    themePack: "space",
    narration: "Welcome to the Challenge Zone! Level up your skills.",
    narrationEs: "¡Bienvenidos a la Zona de Desafío! Sube de nivel tus habilidades.",
  },
  {
    id: "high",
    label: "Launchpad",
    labelEs: "Plataforma de Lanzamiento",
    description: "High-school acceleration: AP readiness, exams, and career pathways.",
    descriptionEs: "Aceleración en preparatoria: AP, exámenes y rutas profesionales.",
    ageRange: "Ages 15–17",
    gradeRange: "9–11",
    gradient: "linear-gradient(135deg, #dbeafe 0%, #e0f2fe 45%, #eef2ff 100%)",
    glowColor: "#2563eb",
    borderColor: "#93c5fd",
    badge: "🚀",
    themePack: "ocean",
    narration: "Welcome to Launchpad! Prepare for college and career success.",
    narrationEs: "¡Bienvenidos a la Plataforma de Lanzamiento! Prepárate para el éxito universitario y profesional.",
  },
  {
    id: "college",
    label: "Mastery Studio",
    labelEs: "Estudio de Maestría",
    description: "Grade 12 to college transition, certifications, and career-ready skills.",
    descriptionEs: "Transición de grado 12 a universidad, certificaciones y habilidades laborales.",
    ageRange: "Ages 18–21+",
    gradeRange: "12 + College",
    gradient: "linear-gradient(135deg, #fef3c7 0%, #fde68a 45%, #fed7aa 100%)",
    glowColor: "#d97706",
    borderColor: "#fcd34d",
    badge: "🎓",
    themePack: "sunrise",
    narration: "Welcome to Mastery Studio! Advanced learning for lifelong growth.",
    narrationEs: "¡Bienvenidos al Estudio de Maestría! Aprendizaje avanzado para el crecimiento continuo.",
  },
];

export function getAllEducationStages(): EducationStage[] {
  return educationStages;
}

export function getEducationStage(stageId: string): EducationStage | null {
  return educationStages.find((stage) => stage.id === stageId) ?? null;
}

/* ─── World Scenes (Per-Topic Styling) ───────────────────────── */

export type WorldScene = {
  /** Must match an ExplorerTopic.id */
  topicId: string;
  /** CSS gradient for the scene backdrop */
  gradient: string;
  /** Primary glow/accent color for hover rings and sparkles */
  glowColor: string;
  /** Secondary tint for card borders */
  borderColor: string;
  /** Short narration spoken on scene entry (Web Speech API) */
  ambientNarration: string;
  /** Emoji used as a quick visual badge (no external asset needed) */
  badge: string;
  /** Theme-pack name to auto-apply inside this world */
  themePack: string;
};

const worldScenes: WorldScene[] = [
  {
    topicId: "tree",
    gradient: "linear-gradient(135deg, #dcffe9 0%, #d8f8da 45%, #fffbe6 100%)",
    glowColor: "#4ccc63",
    borderColor: "#b8ebc8",
    ambientNarration:
      "Welcome to Tree World! Tap to explore plants, animals, and nature.",
    badge: "🌳",
    themePack: "forest",
  },
  {
    topicId: "ocean",
    gradient: "linear-gradient(135deg, #d7f7ff 0%, #dbefff 45%, #e4e0ff 100%)",
    glowColor: "#22b8ff",
    borderColor: "#b7e3ff",
    ambientNarration:
      "Welcome to Ocean World! Dive in to learn about water, waves, and sea creatures.",
    badge: "🌊",
    themePack: "ocean",
  },
  {
    topicId: "space",
    gradient: "linear-gradient(135deg, #e3e5ff 0%, #f1f7ff 45%, #f8e8ff 100%)",
    glowColor: "#7b78ff",
    borderColor: "#cccfff",
    ambientNarration:
      "Welcome to Space World! Blast off to explore stars, planets, and rockets.",
    badge: "🚀",
    themePack: "space",
  },
  {
    topicId: "numbers",
    gradient:
      "linear-gradient(135deg, #ffdff7 0%, #ffe8ca 45%, #d8e7ff 100%)",
    glowColor: "#ff56b3",
    borderColor: "#f8c6f4",
    ambientNarration:
      "Welcome to Number World! Count, solve puzzles, and discover patterns.",
    badge: "🔢",
    themePack: "candy",
  },
  {
    topicId: "story",
    gradient:
      "linear-gradient(135deg, #ffd6e5 0%, #ffe9bf 45%, #c8f1ff 100%)",
    glowColor: "#ff6f91",
    borderColor: "#ffd2bd",
    ambientNarration:
      "Welcome to Story World! Open a book and let your imagination fly.",
    badge: "📖",
    themePack: "sunrise",
  },
  {
    topicId: "world",
    gradient: "linear-gradient(135deg, #d7f7ff 0%, #e0f8e6 45%, #fff6d7 100%)",
    glowColor: "#22b8ff",
    borderColor: "#b7e3ff",
    ambientNarration:
      "Welcome to People and Places! Explore communities and maps around the globe.",
    badge: "🌍",
    themePack: "ocean",
  },
];

export function getWorldScene(topicId: string): WorldScene | null {
  return worldScenes.find((scene) => scene.topicId === topicId) ?? null;
}

export function getAllWorldScenes(): WorldScene[] {
  return worldScenes;
}
