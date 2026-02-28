import type { LearningModule } from "@/lib/modules/types";

export const Nursing401Module: LearningModule = {
  id: "nursing-401",
  title: "Nursing Leadership and Systems",
  description: "Senior nursing leadership, quality systems, patient safety governance, and interdisciplinary collaboration.",
  subject: "Nursing",
  tags: ["curriculum", "interactive"],
  minAge: 18,
  maxAge: 99,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Understand core concepts in Nursing",
    "Apply Nursing skills through guided practice",
    "Demonstrate mastery through checkpoint quizzes"
  ],
  lessons: [
    {
      id: "nursing-401-l01",
      title: "Nursing Concepts 1",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "nursing-401-l01-a1", type: "image", title: "Concept Card", content: "Visual summary for Nursing." },
        { id: "nursing-401-l01-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Nursing." }
      ]
    },
    {
      id: "nursing-401-l02",
      title: "Nursing Practice 2",
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
        { id: "nursing-401-l02-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "nursing-401-l03",
      title: "Checkpoint 1: Nursing",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "nursing-401-l03-q1",
          text: "Which choice best matches the main idea of Nursing?",
          skillId: "nursing-401-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "nursing-401-l03-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "nursing-401-skill-review",
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
        { id: "nursing-401-l03-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "nursing-401-l04",
      title: "Nursing Practice 4",
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
        { id: "nursing-401-l04-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "nursing-401-l05",
      title: "Nursing Concepts 5",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "nursing-401-l05-a1", type: "image", title: "Concept Card", content: "Visual summary for Nursing." },
        { id: "nursing-401-l05-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Nursing." }
      ]
    },
    {
      id: "nursing-401-l06",
      title: "Checkpoint 2: Nursing",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "nursing-401-l06-q1",
          text: "Which choice best matches the main idea of Nursing?",
          skillId: "nursing-401-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "nursing-401-l06-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "nursing-401-skill-review",
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
        { id: "nursing-401-l06-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "nursing-401-l07",
      title: "Nursing Concepts 7",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "nursing-401-l07-a1", type: "image", title: "Concept Card", content: "Visual summary for Nursing." },
        { id: "nursing-401-l07-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Nursing." }
      ]
    },
    {
      id: "nursing-401-l08",
      title: "Nursing Practice 8",
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
        { id: "nursing-401-l08-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "nursing-401-l09",
      title: "Checkpoint 3: Nursing",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "nursing-401-l09-q1",
          text: "Which choice best matches the main idea of Nursing?",
          skillId: "nursing-401-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "nursing-401-l09-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "nursing-401-skill-review",
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
        { id: "nursing-401-l09-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "nursing-401-l10",
      title: "Checkpoint 4: Nursing",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "nursing-401-l10-q1",
          text: "Which choice best matches the main idea of Nursing?",
          skillId: "nursing-401-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "nursing-401-l10-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "nursing-401-skill-review",
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
        { id: "nursing-401-l10-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    }
  ],
};
