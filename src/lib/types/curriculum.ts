import { z } from "zod";

export const CurriculumModuleSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  desc: z.string(),
  icon: z.string(),
  media: z
    .object({
      introVideoId: z.string().optional(),
      ambientAudioId: z.string().optional(),
      animationStyle: z.string().optional(),
    })
    .optional(),
});

export type CurriculumModule = z.infer<typeof CurriculumModuleSchema>;
