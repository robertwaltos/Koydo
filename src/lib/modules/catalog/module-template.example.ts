import type { LearningModule } from "@/lib/modules/types";

export const templateModule: LearningModule = {
  id: "subject-001",
  title: "New Learning Module",
  description: "Describe the learner outcome for this module.",
  subject: "Science",
  tags: ["starter"],
  minAge: 8,
  maxAge: 12,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: ["Describe one learning outcome here"],
  lessons: [
    {
      id: "subject-001-l1",
      title: "Lesson Title",
      type: "video",
      duration: 8,
    },
    {
      id: "subject-001-l2",
      title: "Practice Quiz",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "subject-001-l2-q1",
          text: "Sample question",
          skillId: "your-skill-id",
          options: [
            { id: "a", text: "Option A" },
            { id: "b", text: "Option B" },
          ],
          correctOptionId: "a",
        },
      ],
    },
  ],
};
