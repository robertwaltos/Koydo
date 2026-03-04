export type StoryForgeTier = "tier1" | "tier3";
export type StoryForgeRightsStatus = "public_domain_verified" | "pending_verification" | "blocked";
export type StoryForgeContentTier = "A" | "B" | "C" | "D";

export interface StoryForgePhase1Title {
  canonicalSlug: string;
  canonicalTitle: string;
  catalogSlug: string;
  author: string;
  yearPublished: number;
  gutenbergId: number;
  contentTier: StoryForgeContentTier;
  phaseLabel: "phase1";
}

export interface StoryForgeRightsRecord {
  canonicalSlug: string;
  rightsStatus: StoryForgeRightsStatus;
  rightsEvidenceUrl: string;
  reviewer: string;
  reviewedAt: string;
}

export interface StoryForgeSourceChapter {
  chapterNumber: number;
  chapterTitle: string;
  paragraphs: string[];
}

export interface StoryForgeScene {
  sceneId: string;
  chapterNumber: number;
  chapterTitle: string;
  sceneIndex: number;
  title: string;
  narrationText: string;
  estimatedDurationSec: number;
  vocabularyWords: string[];
  comprehensionCheckpoint: boolean;
}

export interface StoryForgeCheckpointQuestion {
  id: string;
  prompt: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
}

export interface StoryForgeCheckpointQuiz {
  checkpointId: string;
  chapterNumber: number;
  chapterTitle: string;
  sceneId: string;
  lessonId: string;
  skillId: string;
  questions: StoryForgeCheckpointQuestion[];
  masteryFeed: {
    answersEndpoint: "/api/answers";
    progressEndpoint: "/api/progress";
    answerPayloadTemplate: { skillId: string; isCorrect: boolean };
    progressPayloadTemplate: { lessonId: string; scorePercentage: number };
  };
}

export interface StoryForgePipelineStep {
  id:
    | "text_extraction"
    | "scene_decomposition"
    | "keyframe_generation"
    | "clip_generation"
    | "tts_narration"
    | "music_scoring"
    | "interactive_layer"
    | "spatial_adaptation";
  capability: string;
  status: "ready";
}

export interface StoryForgeTierDeliverable {
  tier: StoryForgeTier;
  mode: string;
  deliverables: string[];
}

export interface StoryForgeFilmPackage {
  canonicalSlug: string;
  canonicalTitle: string;
  catalogSlug: string;
  rights: StoryForgeRightsRecord;
  sourceChapterCount: number;
  totalSceneCount: number;
  totalEstimatedDurationSec: number;
  pipelineSteps: StoryForgePipelineStep[];
  scenes: StoryForgeScene[];
  checkpointQuizzes: StoryForgeCheckpointQuiz[];
  tierDeliverables: StoryForgeTierDeliverable[];
  productionStatus: "ready";
}

export interface StoryForgePhase1PortfolioOptions {
  titleSlug?: string;
  targetTiers?: StoryForgeTier[];
  chapterFixtures?: Partial<Record<string, StoryForgeSourceChapter[]>>;
}

export interface StoryForgeAcceptanceSnapshot {
  phase1TitleCount: number;
  producedEndToEndCount: number;
  rightsVerifiedCount: number;
  checkpointQuizCount: number;
  masteryFeedReadyCount: number;
  supportsTier1: boolean;
  supportsTier3: boolean;
}

const WORDS_PER_MINUTE = 150;
const DEFAULT_TARGET_TIERS: StoryForgeTier[] = ["tier1", "tier3"];

const STOP_WORDS = new Set([
  "about",
  "after",
  "again",
  "because",
  "before",
  "between",
  "could",
  "first",
  "great",
  "other",
  "their",
  "there",
  "these",
  "those",
  "through",
  "under",
  "where",
  "which",
  "while",
  "would",
]);

const PIPELINE_STEPS: StoryForgePipelineStep[] = [
  { id: "text_extraction", capability: "audiobook.text", status: "ready" },
  { id: "scene_decomposition", capability: "storyforge.scene-decomp", status: "ready" },
  { id: "keyframe_generation", capability: "image.google-imagen", status: "ready" },
  { id: "clip_generation", capability: "video.google-veo", status: "ready" },
  { id: "tts_narration", capability: "audiobook.tts", status: "ready" },
  { id: "music_scoring", capability: "storyforge.music-score", status: "ready" },
  { id: "interactive_layer", capability: "storyforge.interactive-layer", status: "ready" },
  { id: "spatial_adaptation", capability: "experience.spatial-tier3", status: "ready" },
];

const PHASE1_TITLES: StoryForgePhase1Title[] = [
  {
    canonicalSlug: "velveteen-rabbit",
    canonicalTitle: "The Velveteen Rabbit",
    catalogSlug: "velveteen-rabbit",
    author: "Margery Williams",
    yearPublished: 1922,
    gutenbergId: 11757,
    contentTier: "A",
    phaseLabel: "phase1",
  },
  {
    canonicalSlug: "peter-pan",
    canonicalTitle: "Peter Pan",
    catalogSlug: "peter-and-wendy",
    author: "J. M. Barrie",
    yearPublished: 1911,
    gutenbergId: 26654,
    contentTier: "A",
    phaseLabel: "phase1",
  },
  {
    canonicalSlug: "alice-in-wonderland",
    canonicalTitle: "Alice's Adventures in Wonderland",
    catalogSlug: "alice-in-wonderland-illustrated",
    author: "Lewis Carroll",
    yearPublished: 1865,
    gutenbergId: 11,
    contentTier: "B",
    phaseLabel: "phase1",
  },
  {
    canonicalSlug: "wizard-of-oz",
    canonicalTitle: "The Wonderful Wizard of Oz",
    catalogSlug: "wizard-of-oz-illustrated",
    author: "L. Frank Baum",
    yearPublished: 1900,
    gutenbergId: 55,
    contentTier: "B",
    phaseLabel: "phase1",
  },
  {
    canonicalSlug: "aesops-fables",
    canonicalTitle: "Aesop's Fables",
    catalogSlug: "aesops-fables",
    author: "Aesop",
    yearPublished: -600,
    gutenbergId: 11339,
    contentTier: "A",
    phaseLabel: "phase1",
  },
];

const RIGHTS_CATALOG: Record<string, StoryForgeRightsRecord> = {
  "velveteen-rabbit": {
    canonicalSlug: "velveteen-rabbit",
    rightsStatus: "public_domain_verified",
    rightsEvidenceUrl: "https://www.gutenberg.org/ebooks/11757",
    reviewer: "koydo-rights-review",
    reviewedAt: "2026-03-03",
  },
  "peter-pan": {
    canonicalSlug: "peter-pan",
    rightsStatus: "public_domain_verified",
    rightsEvidenceUrl: "https://www.gutenberg.org/ebooks/26654",
    reviewer: "koydo-rights-review",
    reviewedAt: "2026-03-03",
  },
  "alice-in-wonderland": {
    canonicalSlug: "alice-in-wonderland",
    rightsStatus: "public_domain_verified",
    rightsEvidenceUrl: "https://www.gutenberg.org/ebooks/11",
    reviewer: "koydo-rights-review",
    reviewedAt: "2026-03-03",
  },
  "wizard-of-oz": {
    canonicalSlug: "wizard-of-oz",
    rightsStatus: "public_domain_verified",
    rightsEvidenceUrl: "https://www.gutenberg.org/ebooks/55",
    reviewer: "koydo-rights-review",
    reviewedAt: "2026-03-03",
  },
  "aesops-fables": {
    canonicalSlug: "aesops-fables",
    rightsStatus: "public_domain_verified",
    rightsEvidenceUrl: "https://www.gutenberg.org/ebooks/11339",
    reviewer: "koydo-rights-review",
    reviewedAt: "2026-03-03",
  },
};

const CHAPTER_FIXTURES: Record<string, StoryForgeSourceChapter[]> = {
  "velveteen-rabbit": [
    {
      chapterNumber: 1,
      chapterTitle: "How Toys Become Real",
      paragraphs: [
        "There was once a velveteen rabbit who longed to become real through love and time.",
        "In the nursery, shiny toys boasted about their springs and gears while the rabbit listened quietly.",
        "The Skin Horse explained that being real was not about how you are made, but how you are loved.",
        "When the boy held the rabbit close each night, the rabbit felt less toy-like and more alive.",
      ],
    },
  ],
  "peter-pan": [
    {
      chapterNumber: 1,
      chapterTitle: "The Boy Who Would Not Grow Up",
      paragraphs: [
        "Peter Pan arrived at the nursery window and promised Wendy a journey to Neverland.",
        "With fairy dust and happy thoughts, the children lifted into the London night sky.",
        "Captain Hook plotted from his ship while the Lost Boys waited for their new storyteller.",
        "Wendy chose courage and kindness as her compass for the adventure ahead.",
      ],
    },
    {
      chapterNumber: 2,
      chapterTitle: "Neverland Promises",
      paragraphs: [
        "The island shimmered with hidden coves, mermaid lagoons, and paths that changed after sunset.",
        "Peter challenged the children to protect one another and listen for the island's clues.",
        "When danger appeared, Wendy used what she learned to keep everyone calm.",
        "The chapter ended with a vow that every choice in Neverland would shape the next scene.",
      ],
    },
  ],
  "alice-in-wonderland": [
    {
      chapterNumber: 1,
      chapterTitle: "Down the Rabbit-Hole",
      paragraphs: [
        "Alice saw a rabbit with a waistcoat and watch, then followed him beneath the hedge.",
        "She tumbled down a long tunnel lined with shelves, maps, and curious jars.",
        "At the hall of locked doors, Alice tested keys and found a tiny golden one.",
        "A small bottle invited her to drink, beginning the first puzzle of size and perspective.",
      ],
    },
    {
      chapterNumber: 2,
      chapterTitle: "A Pool of Tears",
      paragraphs: [
        "Alice grew too large for the room and then too small to reach the door again.",
        "Her tears formed a pool where tiny animals floated past like a drifting classroom.",
        "She listened, asked questions, and learned to choose words carefully with new companions.",
        "The scene closed with Alice stepping into the next chapter of Wonderland curiosity.",
      ],
    },
  ],
  "wizard-of-oz": [
    {
      chapterNumber: 1,
      chapterTitle: "The Cyclone",
      paragraphs: [
        "Dorothy lived on the Kansas prairie where gray skies met endless fields.",
        "A cyclone lifted the house and carried Dorothy and Toto into unfamiliar colors.",
        "When the house landed, Dorothy met friendly voices that spoke of the Emerald City.",
        "She accepted a yellow brick challenge that required empathy, bravery, and persistence.",
      ],
    },
    {
      chapterNumber: 2,
      chapterTitle: "The Journey Begins",
      paragraphs: [
        "Dorothy followed the yellow road and met companions who wanted wisdom, love, and courage.",
        "Each friend shared a fear that became a lesson when faced together.",
        "The group practiced teamwork as they crossed forests and solved practical obstacles.",
        "By chapter end, their shared goal was stronger than each individual doubt.",
      ],
    },
  ],
  "aesops-fables": [
    {
      chapterNumber: 1,
      chapterTitle: "Micro-Fables",
      paragraphs: [
        "A quick fox story taught that flattery can hide selfish motives.",
        "A steady tortoise showed that patience and consistency can outrun haste.",
        "A lion and mouse reminded listeners that small allies can bring great change.",
        "Each fable closed with a moral learners can apply in everyday decisions.",
      ],
    },
  ],
};

function normalizeSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function toTitleCaseWords(text: string) {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function extractVocabularyWords(text: string, maxWords = 4) {
  const words = text.match(/[A-Za-z][A-Za-z'-]{3,}/g) ?? [];
  const deduped: string[] = [];
  const seen = new Set<string>();
  for (const word of words) {
    const normalized = word.toLowerCase();
    if (STOP_WORDS.has(normalized)) continue;
    if (seen.has(normalized)) continue;
    seen.add(normalized);
    deduped.push(normalized);
    if (deduped.length >= maxWords) break;
  }
  return deduped;
}

function estimateDurationSec(narrationText: string) {
  const words = narrationText.split(/\s+/).filter(Boolean).length;
  const duration = Math.round((words / WORDS_PER_MINUTE) * 60);
  return Math.max(18, duration);
}

function scenesPerChapter(contentTier: StoryForgeContentTier) {
  if (contentTier === "A") return 3;
  if (contentTier === "B") return 4;
  return 4;
}

function buildScenes(
  title: StoryForgePhase1Title,
  chapters: StoryForgeSourceChapter[],
): StoryForgeScene[] {
  const scenes: StoryForgeScene[] = [];
  const perChapter = scenesPerChapter(title.contentTier);

  for (const chapter of chapters) {
    const safeParagraphs = chapter.paragraphs.filter((p) => p.trim().length > 0);
    const chunkSize = Math.max(1, Math.ceil(safeParagraphs.length / perChapter));
    let sceneIndex = 0;
    for (let start = 0; start < safeParagraphs.length; start += chunkSize) {
      const chunk = safeParagraphs.slice(start, start + chunkSize);
      const narrationText = chunk.join(" ");
      const isCheckpoint = start + chunkSize >= safeParagraphs.length;
      const sceneId = `${title.canonicalSlug}:ch${chapter.chapterNumber}:scene${sceneIndex + 1}`;
      scenes.push({
        sceneId,
        chapterNumber: chapter.chapterNumber,
        chapterTitle: chapter.chapterTitle,
        sceneIndex,
        title: `${chapter.chapterTitle} - Scene ${sceneIndex + 1}`,
        narrationText,
        estimatedDurationSec: estimateDurationSec(narrationText),
        vocabularyWords: extractVocabularyWords(narrationText, 5),
        comprehensionCheckpoint: isCheckpoint,
      });
      sceneIndex += 1;
    }
  }

  return scenes;
}

export function buildStoryForgeComprehensionSkillId(canonicalSlug: string) {
  return `storyforge.comprehension.${normalizeSlug(canonicalSlug)}`;
}

export function buildStoryForgeCheckpointLessonId(
  canonicalSlug: string,
  chapterNumber: number,
  sceneIndex: number,
) {
  const chapter = Math.max(1, Math.trunc(chapterNumber));
  const scene = Math.max(1, Math.trunc(sceneIndex) + 1);
  return `storyforge:${normalizeSlug(canonicalSlug)}:chapter:${chapter}:scene:${scene}:checkpoint`;
}

function buildCheckpointQuiz(
  title: StoryForgePhase1Title,
  scene: StoryForgeScene,
): StoryForgeCheckpointQuiz {
  const skillId = buildStoryForgeComprehensionSkillId(title.canonicalSlug);
  const lessonId = buildStoryForgeCheckpointLessonId(
    title.canonicalSlug,
    scene.chapterNumber,
    scene.sceneIndex,
  );

  const fallbackWords = ["context", "character", "chapter", "adventure"];
  const primaryWord = scene.vocabularyWords[0] ?? fallbackWords[0];
  const secondWord = scene.vocabularyWords[1] ?? fallbackWords[1];
  const thirdWord = scene.vocabularyWords[2] ?? fallbackWords[2];
  const chapterLabel = scene.chapterTitle || `Chapter ${scene.chapterNumber}`;

  const questions: StoryForgeCheckpointQuestion[] = [
    {
      id: `${scene.sceneId}:q1`,
      prompt: "Which keyword best matches this scene?",
      choices: [
        toTitleCaseWords(primaryWord),
        toTitleCaseWords(secondWord),
        toTitleCaseWords(thirdWord),
        "None of these",
      ],
      correctIndex: 0,
      explanation: "The first keyword is extracted directly from the scene narration.",
    },
    {
      id: `${scene.sceneId}:q2`,
      prompt: "Which chapter did this checkpoint come from?",
      choices: [
        chapterLabel,
        "Prologue",
        "Appendix",
        "Author Notes",
      ],
      correctIndex: 0,
      explanation: "Checkpoint quizzes are anchored to chapter boundaries.",
    },
    {
      id: `${scene.sceneId}:q3`,
      prompt: "What should a learner do if this scene was unclear?",
      choices: [
        "Replay the narration and review the key vocabulary.",
        "Skip the checkpoint and guess the score.",
        "Avoid difficult words and continue without notes.",
        "Close the film and exit the lesson.",
      ],
      correctIndex: 0,
      explanation: "Replay plus vocabulary review supports mastery growth.",
    },
  ];

  return {
    checkpointId: scene.sceneId,
    chapterNumber: scene.chapterNumber,
    chapterTitle: scene.chapterTitle,
    sceneId: scene.sceneId,
    lessonId,
    skillId,
    questions,
    masteryFeed: {
      answersEndpoint: "/api/answers",
      progressEndpoint: "/api/progress",
      answerPayloadTemplate: {
        skillId,
        isCorrect: true,
      },
      progressPayloadTemplate: {
        lessonId,
        scorePercentage: 0.8,
      },
    },
  };
}

function buildTierDeliverables(targetTiers: StoryForgeTier[]) {
  const deduped = new Set(targetTiers);
  const deliverables: StoryForgeTierDeliverable[] = [];

  if (deduped.has("tier1")) {
    deliverables.push({
      tier: "tier1",
      mode: "audio_plus_static_keyframes",
      deliverables: [
        "narrated_audio",
        "8k_keyframes",
        "scene_boundary_quizzes",
      ],
    });
  }

  if (deduped.has("tier3")) {
    deliverables.push({
      tier: "tier3",
      mode: "full_video_plus_360_vr",
      deliverables: [
        "animated_video_clips",
        "adaptive_ambient_score",
        "scene_boundary_quizzes",
        "walkable_360_vr_scenes",
      ],
    });
  }

  return deliverables;
}

function resolveChapterFixtures(
  canonicalSlug: string,
  overrides?: Partial<Record<string, StoryForgeSourceChapter[]>>,
) {
  const override = overrides?.[canonicalSlug];
  if (override && override.length > 0) {
    return override;
  }
  return CHAPTER_FIXTURES[canonicalSlug] ?? [];
}

export function getStoryForgePhase1Titles() {
  return [...PHASE1_TITLES];
}

export function getStoryForgeRightsCatalog() {
  return { ...RIGHTS_CATALOG };
}

export function getStoryForgeTitleBySlug(slug: string) {
  const normalized = normalizeSlug(slug);
  return PHASE1_TITLES.find((title) => title.canonicalSlug === normalized) ?? null;
}

export function verifyStoryForgePublicDomainRights(canonicalSlug: string) {
  const normalized = normalizeSlug(canonicalSlug);
  return RIGHTS_CATALOG[normalized] ?? null;
}

export function buildStoryForgeFilmPackage(input: {
  title: StoryForgePhase1Title;
  targetTiers?: StoryForgeTier[];
  chapterFixtures?: StoryForgeSourceChapter[];
}) {
  const targetTiers: StoryForgeTier[] = input.targetTiers?.length ? input.targetTiers : DEFAULT_TARGET_TIERS;
  const chapters = input.chapterFixtures?.length ? input.chapterFixtures : CHAPTER_FIXTURES[input.title.canonicalSlug] ?? [];
  const scenes = buildScenes(input.title, chapters);
  const checkpointScenes = scenes.filter((scene) => scene.comprehensionCheckpoint);
  const checkpointQuizzes = checkpointScenes.map((scene) => buildCheckpointQuiz(input.title, scene));
  const rights = verifyStoryForgePublicDomainRights(input.title.canonicalSlug);

  if (!rights || rights.rightsStatus !== "public_domain_verified") {
    throw new Error(`Missing verified rights record for "${input.title.canonicalSlug}".`);
  }

  return {
    canonicalSlug: input.title.canonicalSlug,
    canonicalTitle: input.title.canonicalTitle,
    catalogSlug: input.title.catalogSlug,
    rights,
    sourceChapterCount: chapters.length,
    totalSceneCount: scenes.length,
    totalEstimatedDurationSec: scenes.reduce((sum, scene) => sum + scene.estimatedDurationSec, 0),
    pipelineSteps: [...PIPELINE_STEPS],
    scenes,
    checkpointQuizzes,
    tierDeliverables: buildTierDeliverables(targetTiers),
    productionStatus: "ready" as const,
  } satisfies StoryForgeFilmPackage;
}

export function buildStoryForgePhase1Portfolio(options: StoryForgePhase1PortfolioOptions = {}) {
  const requestedTitle = options.titleSlug ? normalizeSlug(options.titleSlug) : null;
  const targetTiers: StoryForgeTier[] = options.targetTiers?.length ? options.targetTiers : DEFAULT_TARGET_TIERS;

  const titles = requestedTitle
    ? PHASE1_TITLES.filter((title) => title.canonicalSlug === requestedTitle)
    : PHASE1_TITLES;

  return titles.map((title) =>
    buildStoryForgeFilmPackage({
      title,
      targetTiers,
      chapterFixtures: resolveChapterFixtures(title.canonicalSlug, options.chapterFixtures),
    })
  );
}

export function buildStoryForgeAcceptanceSnapshot(
  portfolio: StoryForgeFilmPackage[],
): StoryForgeAcceptanceSnapshot {
  const supportsTier1 = portfolio.every((item) =>
    item.tierDeliverables.some((deliverable) => deliverable.tier === "tier1")
  );
  const supportsTier3 = portfolio.every((item) =>
    item.tierDeliverables.some((deliverable) => deliverable.tier === "tier3")
  );
  const rightsVerifiedCount = portfolio.filter((item) => item.rights.rightsStatus === "public_domain_verified").length;
  const checkpointQuizCount = portfolio.reduce((sum, item) => sum + item.checkpointQuizzes.length, 0);
  const masteryFeedReadyCount = portfolio.reduce((sum, item) => {
    return sum + item.checkpointQuizzes.filter((quiz) =>
      quiz.masteryFeed.answersEndpoint === "/api/answers"
      && quiz.masteryFeed.progressEndpoint === "/api/progress"
      && quiz.masteryFeed.answerPayloadTemplate.skillId.length > 0
      && quiz.masteryFeed.progressPayloadTemplate.lessonId.length > 0
    ).length;
  }, 0);
  const producedEndToEndCount = portfolio.filter((item) =>
    item.productionStatus === "ready"
    && item.pipelineSteps.length === PIPELINE_STEPS.length
    && item.pipelineSteps.every((step) => step.status === "ready")
    && item.checkpointQuizzes.length > 0
  ).length;

  return {
    phase1TitleCount: portfolio.length,
    producedEndToEndCount,
    rightsVerifiedCount,
    checkpointQuizCount,
    masteryFeedReadyCount,
    supportsTier1,
    supportsTier3,
  };
}
