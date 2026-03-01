import type { LearningModule } from "@/lib/modules/types";

export const Medicine401Module: LearningModule = {
  id: "medicine-401",
  title: "Medicine IV",
  description: "Senior-level medical systems, safety governance, complex case synthesis, and clinical decision leadership.",
  subject: "Medicine",
  tags: ["curriculum", "interactive"],
  minAge: 18,
  maxAge: 99,
  version: "1.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Understand core concepts in Medicine",
    "Apply Medicine skills through guided practice",
    "Demonstrate mastery through checkpoint quizzes"
  ],
  lessons: [
    {
      id: "medicine-401-l01",
      title: "Medicine Concepts 1",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "medicine-401-l01-a1", type: "image", title: "Concept Card", content: "Visual summary for Medicine." },
        { id: "medicine-401-l01-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Medicine." }
      ]
    },
    {
      id: "medicine-401-l02",
      title: "Medicine Practice 2",
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
        { id: "medicine-401-l02-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "medicine-401-l03",
      title: "Checkpoint 1: Medicine",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "medicine-401-l03-q1",
          text: "Which choice best matches the main idea of Medicine?",
          skillId: "medicine-401-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "medicine-401-l03-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "medicine-401-skill-review",
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
        { id: "medicine-401-l03-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "medicine-401-l04",
      title: "Medicine Practice 4",
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
        { id: "medicine-401-l04-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "medicine-401-l05",
      title: "Medicine Concepts 5",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "medicine-401-l05-a1", type: "image", title: "Concept Card", content: "Visual summary for Medicine." },
        { id: "medicine-401-l05-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Medicine." }
      ]
    },
    {
      id: "medicine-401-l06",
      title: "Checkpoint 2: Medicine",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "medicine-401-l06-q1",
          text: "Which choice best matches the main idea of Medicine?",
          skillId: "medicine-401-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "medicine-401-l06-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "medicine-401-skill-review",
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
        { id: "medicine-401-l06-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "medicine-401-l07",
      title: "Medicine Concepts 7",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "medicine-401-l07-a1", type: "image", title: "Concept Card", content: "Visual summary for Medicine." },
        { id: "medicine-401-l07-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Medicine." }
      ]
    },
    {
      id: "medicine-401-l08",
      title: "Medicine Practice 8",
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
        { id: "medicine-401-l08-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "medicine-401-l09",
      title: "Checkpoint 3: Medicine",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "medicine-401-l09-q1",
          text: "Which choice best matches the main idea of Medicine?",
          skillId: "medicine-401-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "medicine-401-l09-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "medicine-401-skill-review",
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
        { id: "medicine-401-l09-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "medicine-401-l10",
      title: "Checkpoint 4: Medicine",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "medicine-401-l10-q1",
          text: "Which choice best matches the main idea of Medicine?",
          skillId: "medicine-401-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "medicine-401-l10-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "medicine-401-skill-review",
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
        { id: "medicine-401-l10-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    }
  ],
};
