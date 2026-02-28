import type { LearningModule } from "@/lib/modules/types";

export const Meteorology101Module: LearningModule = {
  id: "meteorology-101",
  title: "Meteorology I",
  description: "Weather science fundamentals: atmosphere, pressure systems, fronts, forecasting basics, and climate context.",
  subject: "Meteorology",
  tags: ["curriculum", "interactive"],
  minAge: 13,
  maxAge: 99,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Understand core concepts in Meteorology",
    "Apply Meteorology skills through guided practice",
    "Demonstrate mastery through checkpoint quizzes"
  ],
  lessons: [
    {
      id: "meteorology-101-l01",
      title: "Meteorology Concepts 1",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "meteorology-101-l01-a1", type: "image", title: "Concept Card", content: "Visual summary for Meteorology." },
        { id: "meteorology-101-l01-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Meteorology." }
      ]
    },
    {
      id: "meteorology-101-l02",
      title: "Meteorology Practice 2",
      type: "interactive",
      duration: 12,
      metadata: {
        prompts: [
          "State the key concept in one sentence.",
          "Apply it to one example.",
          "Explain your improvement step for next time."
        ]
      },
      learningAids: [
        { id: "meteorology-101-l02-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "meteorology-101-l03",
      title: "Checkpoint 1: Meteorology",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "meteorology-101-l03-q1",
          text: "Which choice best matches the main idea of Meteorology?",
          skillId: "meteorology-101-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "meteorology-101-l03-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "meteorology-101-skill-review",
          options: [
            { id: "a", text: "Review error cause and retry with strategy" },
            { id: "b", text: "Skip all corrections" },
            { id: "c", text: "Memorize only the answer letter" },
            { id: "d", text: "Stop practicing" }
          ],
          correctOptionId: "a"
        }
      ],
      learningAids: [
        { id: "meteorology-101-l03-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "meteorology-101-l04",
      title: "Meteorology Practice 4",
      type: "interactive",
      duration: 12,
      metadata: {
        prompts: [
          "State the key concept in one sentence.",
          "Apply it to one example.",
          "Explain your improvement step for next time."
        ]
      },
      learningAids: [
        { id: "meteorology-101-l04-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "meteorology-101-l05",
      title: "Meteorology Concepts 5",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "meteorology-101-l05-a1", type: "image", title: "Concept Card", content: "Visual summary for Meteorology." },
        { id: "meteorology-101-l05-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Meteorology." }
      ]
    },
    {
      id: "meteorology-101-l06",
      title: "Checkpoint 2: Meteorology",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "meteorology-101-l06-q1",
          text: "Which choice best matches the main idea of Meteorology?",
          skillId: "meteorology-101-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "meteorology-101-l06-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "meteorology-101-skill-review",
          options: [
            { id: "a", text: "Review error cause and retry with strategy" },
            { id: "b", text: "Skip all corrections" },
            { id: "c", text: "Memorize only the answer letter" },
            { id: "d", text: "Stop practicing" }
          ],
          correctOptionId: "a"
        }
      ],
      learningAids: [
        { id: "meteorology-101-l06-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "meteorology-101-l07",
      title: "Meteorology Concepts 7",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "meteorology-101-l07-a1", type: "image", title: "Concept Card", content: "Visual summary for Meteorology." },
        { id: "meteorology-101-l07-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Meteorology." }
      ]
    },
    {
      id: "meteorology-101-l08",
      title: "Meteorology Practice 8",
      type: "interactive",
      duration: 12,
      metadata: {
        prompts: [
          "State the key concept in one sentence.",
          "Apply it to one example.",
          "Explain your improvement step for next time."
        ]
      },
      learningAids: [
        { id: "meteorology-101-l08-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "meteorology-101-l09",
      title: "Checkpoint 3: Meteorology",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "meteorology-101-l09-q1",
          text: "Which choice best matches the main idea of Meteorology?",
          skillId: "meteorology-101-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "meteorology-101-l09-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "meteorology-101-skill-review",
          options: [
            { id: "a", text: "Review error cause and retry with strategy" },
            { id: "b", text: "Skip all corrections" },
            { id: "c", text: "Memorize only the answer letter" },
            { id: "d", text: "Stop practicing" }
          ],
          correctOptionId: "a"
        }
      ],
      learningAids: [
        { id: "meteorology-101-l09-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "meteorology-101-l10",
      title: "Checkpoint 4: Meteorology",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "meteorology-101-l10-q1",
          text: "Which choice best matches the main idea of Meteorology?",
          skillId: "meteorology-101-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "meteorology-101-l10-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "meteorology-101-skill-review",
          options: [
            { id: "a", text: "Review error cause and retry with strategy" },
            { id: "b", text: "Skip all corrections" },
            { id: "c", text: "Memorize only the answer letter" },
            { id: "d", text: "Stop practicing" }
          ],
          correctOptionId: "a"
        }
      ],
      learningAids: [
        { id: "meteorology-101-l10-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    }
  ],
};
