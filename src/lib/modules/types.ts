export type Skill = {
  id: string;
  name: string;
};

export type LocalizedText = Record<string, string>;

export type LessonOption = {
  id: string;
  text: string;
  imageUrl?: string;
  imageAlt?: string;
};

export type Question = {
  id: string;
  text: string;
  skillId?: string;
  options: LessonOption[];
  correctOptionId: string;
  hint?: string;
  explanation?: string;
  imageUrl?: string;
  imageAlt?: string;
};

export type LessonType = "video" | "quiz" | "interactive" | (string & {});

export type LearningAidType = "image" | "animation" | "mnemonic" | "practice";

export type LearningAid = {
  id: string;
  type: LearningAidType;
  title: string;
  content: string;
};

export type LessonChunk = {
  id: string;
  title: string;
  content: string;
  kind?: "intro" | "concept" | "example" | "practice" | "recap" | (string & {});
  durationSeconds?: number;
};

export type Flashcard = {
  id: string;
  front: string;
  back: string;
  hint?: string;
  imageUrl?: string;
  imageAlt?: string;
};

export type InteractiveActivityType =
  | "drag_and_drop"
  | "matching_pairs"
  | "sorting_buckets"
  | "tap_to_select"
  | "fill_in_blank"
  | "word_building"
  | "number_line"
  | "virtual_manipulative"
  | "graphing_tool"
  | "simulation"
  | "drawing_canvas"
  | "coding_editor"
  | "timeline_builder"
  | "map_explorer"
  | "audio_recorder"
  | "flashcards"
  | "quiz_game"
  | "debate_simulator"
  | "lab_virtual"
  | "project_builder"
  | (string & {});

export type InteractiveActivity = {
  id: string;
  type: InteractiveActivityType;
  title?: string;
  description?: string;
  estimatedMinutes?: number;
  difficultyLevel?: "easy" | "medium" | "hard" | "adaptive" | (string & {});
  instructions?: string[];
  udlEngagement?: string[];
  data?: Record<string, unknown>;
  /** Sorting buckets activity: bucket labels */
  buckets?: string[];
  /** Sorting/drag-and-drop activity: items to sort (objects for buckets, strings for drag-and-drop) */
  items?: (string | { id?: string; text: string; bucket: string })[];
  /** Matching pairs activity: left/right pairs */
  pairs?: { id?: string; left: string; right: string }[];
  /** Drag and drop activity: instruction prompt */
  prompt?: string;
  /** Drag and drop activity: drop zone labels */
  zones?: string[];
};

export type LessonMediaAsset = {
  assetId: string;
  url?: string;
  type: string;
  purpose?: string;
  altText?: LocalizedText;
  durationSeconds?: number;
  fileSizeKb?: number;
  resolution?: string;
  license?: string;
  captionsAvailable?: boolean;
  audioDescriptionAvailable?: boolean;
  contentTier?: 1 | 2 | 3;
};

export type LessonContentTier = {
  textContent?: LocalizedText;
  staticImages?: LessonMediaAsset[];
  animations?: LessonMediaAsset[];
  interactiveSims?: InteractiveActivity[];
  videos?: LessonMediaAsset[];
  highResImages?: LessonMediaAsset[];
};

export type LessonContentTiers = {
  tier1Essential?: LessonContentTier;
  tier2Enhanced?: LessonContentTier;
  tier3Rich?: LessonContentTier;
};

export type LessonMediaPrompts = {
  seedanceVideo?: string;
  seedanceAnimation?: string;
  lessonImage?: string;
  researchAgent?: string;
};

export type QuizQuestionType =
  | "mcq_single"
  | "mcq_multi"
  | "true_false"
  | "matching"
  | "drag_and_drop"
  | "fill_in_blank"
  | "short_response"
  | "image_tap"
  | "audio_match"
  | "sequence_order"
  | "constructed_response"
  | "essay"
  | "performance_task"
  | (string & {});

export type QuizQuestionDistribution = {
  type: QuizQuestionType;
  percentage?: number;
  count?: number;
  pointsEach?: number;
  bloomsLevels?: number[];
};

export type QuizDifficultyDistribution = {
  easy: number;
  medium: number;
  hard: number;
};

export type QuizBlueprint = {
  frequency?: string;
  questionsPerCheck?: number;
  totalQuestions?: number;
  timeLimitMinutes?: number;
  questionTypes?: QuizQuestionDistribution[];
  difficultyDistribution?: QuizDifficultyDistribution;
  feedbackMode?: string;
  adaptive?: boolean;
  masteryThreshold?: number;
  bloomProfile?: Record<string, number>;
};

export type StandardsMapping = {
  frameworkId: string;
  code: string;
  description?: string;
  url?: string;
};

export type Lesson = {
  id: string;
  title: string;
  type: LessonType;
  duration: number;
  questions?: Question[];
  learningAids?: LearningAid[];
  metadata?: Record<string, string | number | boolean | string[]>;
  objectives?: string[];
  standardsCodes?: string[];
  chunks?: LessonChunk[];
  flashcards?: Flashcard[];
  interactiveActivities?: InteractiveActivity[];
  quizBlueprint?: QuizBlueprint;
  prompts?: LessonMediaPrompts;
  contentTiers?: LessonContentTiers;
  localized?: {
    title?: LocalizedText;
    concept?: LocalizedText;
    description?: LocalizedText;
  };
  external?: Record<string, unknown>;
};

export type Subject =
  | "Math"
  | "Reading"
  | "Science"
  | "Languages"
  | "Coding"
  | (string & {});

export type LearningModule = {
  id: string;
  title: string;
  description: string;
  subject: Subject;
  lessons: Lesson[];
  tags?: string[];
  minAge?: number;
  maxAge?: number;
  version?: string;
  difficultyBand?: "beginner" | "intermediate" | "advanced" | (string & {});
  localeSupport?: string[];
  thumbnail?: string;
  learningObjectives?: string[];
  gradeBand?: string;
  standardsMappings?: StandardsMapping[];
  quizBlueprint?: QuizBlueprint;
  interactiveActivitiesCatalog?: InteractiveActivity[];
  status?: "published" | "draft";
  metadata?: Record<string, unknown>;
  external?: Record<string, unknown>;
};
