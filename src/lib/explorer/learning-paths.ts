export type LearnerStage = "foundational" | "middle" | "advanced" | "adult";

export type LearningPath = {
  id: string;
  label: string;
  description: string;
  badge: string;
  gradient: string;
  glowColor: string;
  borderColor: string;
  stage: LearnerStage;
};

function path(
  id: string,
  label: string,
  description: string,
  badge: string,
  gradient: string,
  glowColor: string,
  borderColor: string,
  stage: LearnerStage,
): LearningPath {
  return { id, label, description, badge, gradient, glowColor, borderColor, stage };
}

const foundationalProgressionPaths: LearningPath[] = [
  path(
    "numbers",
    "Numbers",
    "Counting, patterns, and logic games.",
    "🔢",
    "linear-gradient(135deg, #ffdff7 0%, #ffe8ca 45%, #d8e7ff 100%)",
    "#ff56b3",
    "#f8c6f4",
    "foundational",
  ),
  path(
    "story",
    "Reading Stories",
    "Vocabulary, reading, and expression.",
    "📖",
    "linear-gradient(135deg, #ffd6e5 0%, #ffe9bf 45%, #c8f1ff 100%)",
    "#ff6f91",
    "#ffd2bd",
    "foundational",
  ),
  path(
    "tree",
    "Life Science",
    "Plants, habitats, and living systems.",
    "🌳",
    "linear-gradient(135deg, #dcffe9 0%, #d8f8da 45%, #fffbe6 100%)",
    "#4ccc63",
    "#b8ebc8",
    "foundational",
  ),
  path(
    "world",
    "People & Places",
    "Communities, maps, and history basics.",
    "🌍",
    "linear-gradient(135deg, #d7f7ff 0%, #e0f8e6 45%, #fff6d7 100%)",
    "#22b8ff",
    "#b7e3ff",
    "foundational",
  ),
  path(
    "ocean",
    "Earth & Ocean",
    "Water systems, climate, and sea life.",
    "🌊",
    "linear-gradient(135deg, #d7f7ff 0%, #dbefff 45%, #e4e0ff 100%)",
    "#22b8ff",
    "#b7e3ff",
    "foundational",
  ),
  path(
    "space",
    "Space Science",
    "Planets, stars, and exploration.",
    "🚀",
    "linear-gradient(135deg, #e3e5ff 0%, #f1f7ff 45%, #f8e8ff 100%)",
    "#7b78ff",
    "#cccfff",
    "foundational",
  ),
];

const standardCurriculumPaths: LearningPath[] = [
  path(
    "math-core",
    "Mathematics",
    "From arithmetic to algebra and problem solving.",
    "➗",
    "linear-gradient(135deg, #dbeafe 0%, #e0f2fe 45%, #eef2ff 100%)",
    "#2563eb",
    "#93c5fd",
    "middle",
  ),
  path(
    "language-core",
    "Language Arts",
    "Reading, writing, vocabulary, and communication.",
    "✍️",
    "linear-gradient(135deg, #ffe4e6 0%, #fee2e2 45%, #fef3c7 100%)",
    "#e11d48",
    "#fda4af",
    "middle",
  ),
  path(
    "science-core",
    "Science",
    "Life, physical, and earth science progression.",
    "🔬",
    "linear-gradient(135deg, #dcfce7 0%, #ccfbf1 45%, #dbeafe 100%)",
    "#0891b2",
    "#86efac",
    "middle",
  ),
  path(
    "social-core",
    "Social Studies",
    "History, civics, geography, and economics.",
    "🧭",
    "linear-gradient(135deg, #fef3c7 0%, #fde68a 45%, #fed7aa 100%)",
    "#d97706",
    "#fcd34d",
    "middle",
  ),
];

const additionalPaths: LearningPath[] = [
  path(
    "coding",
    "Coding",
    "Programming fundamentals and computational thinking.",
    "💻",
    "linear-gradient(135deg, #ede9fe 0%, #dbeafe 45%, #dcfce7 100%)",
    "#6366f1",
    "#c4b5fd",
    "middle",
  ),
  path(
    "ai-workflows",
    "AI Workflows",
    "Practical AI-assisted planning and automation.",
    "🤖",
    "linear-gradient(135deg, #e0f2fe 0%, #ede9fe 45%, #fdf4ff 100%)",
    "#7c3aed",
    "#c4b5fd",
    "middle",
  ),
  path(
    "gardening",
    "Gardening",
    "Plant care, soil, seasons, and sustainability.",
    "🌱",
    "linear-gradient(135deg, #dcfce7 0%, #ecfccb 45%, #fef9c3 100%)",
    "#16a34a",
    "#86efac",
    "middle",
  ),
  path(
    "food-science",
    "Food Science",
    "How ingredients behave and work together.",
    "🍳",
    "linear-gradient(135deg, #fff7ed 0%, #fef3c7 45%, #fee2e2 100%)",
    "#ea580c",
    "#fdba74",
    "middle",
  ),
  path(
    "project-management",
    "Project Skills",
    "Planning, teamwork, and delivery systems.",
    "📋",
    "linear-gradient(135deg, #ede9fe 0%, #f5d0fe 45%, #fee2e2 100%)",
    "#8b5cf6",
    "#c4b5fd",
    "middle",
  ),
  path(
    "electrician-electricity",
    "Electricity Basics",
    "Circuits, safety, and practical wiring concepts.",
    "⚡",
    "linear-gradient(135deg, #fff7cc 0%, #ffe6a8 45%, #ffd37e 100%)",
    "#f59e0b",
    "#fcd34d",
    "advanced",
  ),
  path(
    "microelectronics",
    "Microelectronics",
    "Transistors, logic gates, and small systems.",
    "🔬",
    "linear-gradient(135deg, #e6f6ff 0%, #dbeafe 45%, #d1fae5 100%)",
    "#0284c7",
    "#7dd3fc",
    "advanced",
  ),
  path(
    "micro-circuits",
    "Circuit Design",
    "Circuit analysis, design, and debugging.",
    "🧩",
    "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 45%, #ecfeff 100%)",
    "#10b981",
    "#86efac",
    "advanced",
  ),
  path(
    "cpu-gpu-memory-design",
    "Computer Architecture",
    "Architecture, pipelines, and memory hierarchies.",
    "🧠",
    "linear-gradient(135deg, #eef2ff 0%, #ddd6fe 45%, #fde2ff 100%)",
    "#6366f1",
    "#c4b5fd",
    "advanced",
  ),
  path(
    "electrical-engineering",
    "Electrical Engineering",
    "Power, controls, and systems engineering.",
    "🔌",
    "linear-gradient(135deg, #fff7ed 0%, #ffedd5 45%, #fde68a 100%)",
    "#ea580c",
    "#fdba74",
    "advanced",
  ),
  path(
    "civil-engineering",
    "Civil Engineering",
    "Structures, surveying, and infrastructure systems.",
    "🏗️",
    "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 45%, #dbeafe 100%)",
    "#475569",
    "#cbd5e1",
    "advanced",
  ),
  path(
    "plumbing",
    "Plumbing",
    "Flow, fittings, and installation methods.",
    "🚰",
    "linear-gradient(135deg, #e0f2fe 0%, #cffafe 45%, #ecfeff 100%)",
    "#0891b2",
    "#67e8f9",
    "advanced",
  ),
  path(
    "hvac",
    "HVAC",
    "Heating, ventilation, and cooling systems.",
    "❄️",
    "linear-gradient(135deg, #ecfeff 0%, #e0f2fe 45%, #dbeafe 100%)",
    "#0ea5e9",
    "#7dd3fc",
    "advanced",
  ),
  path(
    "meteorology",
    "Meteorology",
    "Weather patterns, climate, and forecasting.",
    "🌦️",
    "linear-gradient(135deg, #dbeafe 0%, #e0f2fe 45%, #fef9c3 100%)",
    "#0ea5e9",
    "#93c5fd",
    "advanced",
  ),
  path(
    "nursing",
    "Nursing",
    "Patient care, safety, and clinical practice.",
    "🩺",
    "linear-gradient(135deg, #ffe4e6 0%, #fecdd3 45%, #fde2e8 100%)",
    "#e11d48",
    "#fda4af",
    "advanced",
  ),
  path(
    "medicine",
    "Medicine",
    "Foundational biomedical and clinical reasoning.",
    "🧬",
    "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 45%, #d9f99d 100%)",
    "#16a34a",
    "#86efac",
    "advanced",
  ),
  path(
    "law-studies",
    "Law & Civics",
    "Legal systems, rights, and case analysis.",
    "⚖️",
    "linear-gradient(135deg, #fef3c7 0%, #fde68a 45%, #fed7aa 100%)",
    "#d97706",
    "#fcd34d",
    "advanced",
  ),
];

function parseGradeLevel(gradeLevel?: string | null) {
  if (!gradeLevel) return null;
  const normalized = gradeLevel.trim().toLowerCase();
  if (normalized === "pk" || normalized === "pre-k" || normalized === "pre-kinder") return -1;
  if (normalized === "k" || normalized === "kindergarten") return 0;

  const numericMatch = normalized.match(/\d{1,2}/);
  if (!numericMatch) return null;

  const grade = Number(numericMatch[0]);
  return Number.isFinite(grade) ? grade : null;
}

function inferLearnerStage(input: { age_years?: number | null; gradeLevel?: string | null }): LearnerStage {
  const grade = parseGradeLevel(input.gradeLevel);
  if (grade !== null) {
    if (grade <= 2) return "foundational";
    if (grade <= 8) return "middle";
    if (grade <= 12) return "advanced";
    return "adult";
  }

  if (typeof input.age_years === "number" && Number.isFinite(input.age_years)) {
    if (input.age_years <= 8) return "foundational";
    if (input.age_years <= 13) return "middle";
    if (input.age_years <= 18) return "advanced";
    return "adult";
  }

  return "middle";
}

function uniqueById(paths: LearningPath[]) {
  const seen = new Set<string>();
  return paths.filter((entry) => {
    if (seen.has(entry.id)) return false;
    seen.add(entry.id);
    return true;
  });
}

function getFoundationalCoreCount(input: { age_years?: number | null; gradeLevel?: string | null }) {
  const grade = parseGradeLevel(input.gradeLevel);
  const age = typeof input.age_years === "number" && Number.isFinite(input.age_years) ? input.age_years : null;

  if ((age !== null && age <= 3) || grade === -1) return 3;
  if ((age !== null && age <= 4) || grade === 0) return 4;
  if ((age !== null && age <= 5) || grade === 1) return 5;
  return 6;
}

function getInterestMatches(interestPathIds: string[] | undefined, maxCount: number) {
  if (!Array.isArray(interestPathIds) || interestPathIds.length === 0) return [];
  const interestSet = new Set(interestPathIds);
  return additionalPaths.filter((entry) => interestSet.has(entry.id)).slice(0, maxCount);
}

export function getLearningPathsForLearner(input: {
  age_years?: number | null;
  gradeLevel?: string | null;
  interestPathIds?: string[];
}) {
  const stage = inferLearnerStage(input);

  if (stage === "foundational") {
    const coreCount = getFoundationalCoreCount(input);
    const corePaths = foundationalProgressionPaths.slice(0, coreCount);
    const additional = foundationalProgressionPaths.slice(coreCount);
    return {
      stage,
      corePaths,
      additionalPaths: additional,
      paths: uniqueById([...corePaths, ...additional]),
    };
  }

  if (stage === "middle") {
    const interestBoost = getInterestMatches(input.interestPathIds, 1);
    const corePaths = uniqueById([...standardCurriculumPaths, ...interestBoost]);
    const additional = additionalPaths.filter((entry) => !corePaths.some((core) => core.id === entry.id));
    return {
      stage,
      corePaths,
      additionalPaths: additional,
      paths: uniqueById([...corePaths, ...additional]),
    };
  }

  if (stage === "adult") {
    const corePaths = uniqueById([
      ...standardCurriculumPaths.map((entry) => ({ ...entry, stage: "adult" as const })),
      ...additionalPaths.filter((entry) =>
        entry.id === "coding" || entry.id === "ai-workflows" || entry.id === "project-management"
      ).map((entry) => ({ ...entry, stage: "adult" as const })),
    ]);
    const additional = additionalPaths
      .filter((entry) => !corePaths.some((core) => core.id === entry.id))
      .map((entry) => ({ ...entry, stage: "adult" as const }));
    return {
      stage,
      corePaths,
      additionalPaths: additional,
      paths: uniqueById([...corePaths, ...additional]),
    };
  }

  const interestBoost = getInterestMatches(input.interestPathIds, 2);
  const corePaths = uniqueById([
    ...standardCurriculumPaths.map((entry) => ({ ...entry, stage: "advanced" as const })),
    ...additionalPaths.filter((entry) => entry.id === "coding" || entry.id === "ai-workflows"),
    ...interestBoost,
  ]);
  const additional = additionalPaths.filter((entry) => !corePaths.some((core) => core.id === entry.id));
  return {
    stage,
    corePaths,
    additionalPaths: additional,
    paths: uniqueById([...corePaths, ...additional]),
  };
}

export function getStageLabel(stage: LearnerStage) {
  if (stage === "foundational") return "Early Foundations";
  if (stage === "middle") return "Core School Tracks";
  if (stage === "advanced") return "High School + Career Tracks";
  return "Adult & Professional Tracks";
}

export function getAllLearningPaths() {
  return uniqueById([...foundationalProgressionPaths, ...standardCurriculumPaths, ...additionalPaths]);
}

/* ─── Education Stage Bridge ──────────────────────────────────── */

/**
 * Map a learner's age/grade to one of the 6 education stage IDs.
 * Used for stage card highlighting ("recommended for you") in the lobby.
 */
export function inferEducationStageId(input: {
  age_years?: number | null;
  gradeLevel?: string | null;
}): string {
  const grade = parseGradeLevel(input.gradeLevel);
  if (grade !== null) {
    if (grade < 0) return "pre-k";
    if (grade <= 2) return "early-elem";
    if (grade <= 5) return "upper-elem";
    if (grade <= 8) return "middle";
    if (grade <= 12) return "high";
    return "college";
  }

  if (typeof input.age_years === "number" && Number.isFinite(input.age_years)) {
    if (input.age_years < 5) return "pre-k";
    if (input.age_years < 8) return "early-elem";
    if (input.age_years < 11) return "upper-elem";
    if (input.age_years < 14) return "middle";
    if (input.age_years < 18) return "high";
    return "college";
  }

  return "middle";
}

/**
 * Map the old 4-tier LearnerStage to the closest education stage ID.
 */
export function learnerStageToEducationStageId(stage: LearnerStage): string {
  switch (stage) {
    case "foundational": return "early-elem";
    case "middle": return "middle";
    case "advanced": return "high";
    case "adult": return "college";
  }
}
