import { z } from "zod";

const localizedTextSchema = z.record(z.string(), z.string());

export const lessonOptionSchema = z.object({
  id: z.string().min(1),
  text: z.string().min(1),
  imageUrl: z.string().min(1).optional(),
  imageAlt: z.string().min(1).optional(),
});

export const questionSchema = z.object({
  id: z.string().min(1),
  text: z.string().min(1),
  skillId: z.string().min(1).optional(),
  options: z.array(lessonOptionSchema).min(2),
  correctOptionId: z.string().min(1),
  hint: z.string().optional(),
  explanation: z.string().optional(),
  imageUrl: z.string().min(1).optional(),
  imageAlt: z.string().min(1).optional(),
});

export const learningAidSchema = z.object({
  id: z.string().min(1),
  type: z.enum(["image", "animation", "mnemonic", "practice"]),
  title: z.string().min(1),
  content: z.string().min(1),
});

export const lessonChunkSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  content: z.string().min(1),
  kind: z.string().min(1).optional(),
  durationSeconds: z.number().int().positive().optional(),
});

export const flashcardSchema = z.object({
  id: z.string().min(1),
  front: z.string().min(1),
  back: z.string().min(1),
  hint: z.string().min(1).optional(),
  imageUrl: z.string().min(1).optional(),
  imageAlt: z.string().min(1).optional(),
});

export const interactiveActivitySchema = z.object({
  id: z.string().min(1),
  type: z.string().min(1),
  title: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  estimatedMinutes: z.number().int().positive().optional(),
  difficultyLevel: z.string().min(1).optional(),
  instructions: z.array(z.string()).optional(),
  udlEngagement: z.array(z.string()).optional(),
  data: z.record(z.string(), z.unknown()).optional(),
  buckets: z.array(z.string()).optional(),
  items: z.array(z.union([
    z.string(),
    z.object({ id: z.string().optional(), text: z.string(), bucket: z.string() }),
  ])).optional(),
  pairs: z.array(z.object({ id: z.string().optional(), left: z.string(), right: z.string() })).optional(),
  prompt: z.string().optional(),
  zones: z.array(z.string()).optional(),
});

export const lessonMediaAssetSchema = z.object({
  assetId: z.string().min(1),
  type: z.string().min(1),
  purpose: z.string().optional(),
  altText: localizedTextSchema.optional(),
  durationSeconds: z.number().int().nonnegative().optional(),
  fileSizeKb: z.number().int().nonnegative().optional(),
  resolution: z.string().optional(),
  license: z.string().optional(),
  captionsAvailable: z.boolean().optional(),
  audioDescriptionAvailable: z.boolean().optional(),
  contentTier: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
});

export const lessonContentTierSchema = z.object({
  textContent: localizedTextSchema.optional(),
  staticImages: z.array(lessonMediaAssetSchema).optional(),
  animations: z.array(lessonMediaAssetSchema).optional(),
  interactiveSims: z.array(interactiveActivitySchema).optional(),
  videos: z.array(lessonMediaAssetSchema).optional(),
  highResImages: z.array(lessonMediaAssetSchema).optional(),
});

export const lessonContentTiersSchema = z.object({
  tier1Essential: lessonContentTierSchema.optional(),
  tier2Enhanced: lessonContentTierSchema.optional(),
  tier3Rich: lessonContentTierSchema.optional(),
});

export const lessonMediaPromptsSchema = z.object({
  seedanceVideo: z.string().optional(),
  seedanceAnimation: z.string().optional(),
  lessonImage: z.string().optional(),
  researchAgent: z.string().optional(),
});

export const quizQuestionDistributionSchema = z.object({
  type: z.string().min(1),
  percentage: z.number().int().nonnegative().max(100).optional(),
  count: z.number().int().nonnegative().optional(),
  pointsEach: z.number().int().nonnegative().optional(),
  bloomsLevels: z.array(z.number().int().min(1).max(6)).optional(),
});

export const quizDifficultyDistributionSchema = z.object({
  easy: z.number().int().nonnegative(),
  medium: z.number().int().nonnegative(),
  hard: z.number().int().nonnegative(),
});

export const quizBlueprintSchema = z.object({
  frequency: z.string().optional(),
  questionsPerCheck: z.number().int().positive().optional(),
  totalQuestions: z.number().int().positive().optional(),
  timeLimitMinutes: z.number().int().positive().optional(),
  questionTypes: z.array(quizQuestionDistributionSchema).optional(),
  difficultyDistribution: quizDifficultyDistributionSchema.optional(),
  feedbackMode: z.string().optional(),
  adaptive: z.boolean().optional(),
  masteryThreshold: z.number().min(0).max(1).optional(),
  bloomProfile: z.record(z.string(), z.number()).optional(),
});

export const standardsMappingSchema = z.object({
  frameworkId: z.string().min(1),
  code: z.string().min(1),
  description: z.string().optional(),
  url: z.string().url().optional(),
});

export const lessonSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  type: z.string().min(1),
  duration: z.number().nonnegative(),
  questions: z.array(questionSchema).optional(),
  learningAids: z.array(learningAidSchema).optional(),
  metadata: z.record(z.string(), z.union([z.string(), z.number(), z.boolean(), z.array(z.string())])).optional(),
  objectives: z.array(z.string().min(1)).optional(),
  standardsCodes: z.array(z.string().min(1)).optional(),
  chunks: z.array(lessonChunkSchema).optional(),
  flashcards: z.array(flashcardSchema).optional(),
  interactiveActivities: z.array(interactiveActivitySchema).optional(),
  quizBlueprint: quizBlueprintSchema.optional(),
  prompts: lessonMediaPromptsSchema.optional(),
  contentTiers: lessonContentTiersSchema.optional(),
  localized: z
    .object({
      title: localizedTextSchema.optional(),
      concept: localizedTextSchema.optional(),
      description: localizedTextSchema.optional(),
    })
    .optional(),
  external: z.record(z.string(), z.unknown()).optional(),
});

export const learningModuleSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  subject: z.string().min(1),
  lessons: z.array(lessonSchema).min(1),
  tags: z.array(z.string()).optional(),
  minAge: z.number().int().nonnegative().optional(),
  maxAge: z.number().int().nonnegative().optional(),
  version: z.string().optional(),
  difficultyBand: z.string().optional(),
  localeSupport: z.array(z.string()).optional(),
  thumbnail: z.string().optional(),
  learningObjectives: z.array(z.string()).optional(),
  gradeBand: z.string().optional(),
  standardsMappings: z.array(standardsMappingSchema).optional(),
  quizBlueprint: quizBlueprintSchema.optional(),
  interactiveActivitiesCatalog: z.array(interactiveActivitySchema).optional(),
  status: z.enum(["published", "draft"]).optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
  external: z.record(z.string(), z.unknown()).optional(),
});

export const moduleRegistrySchema = z.array(learningModuleSchema);
