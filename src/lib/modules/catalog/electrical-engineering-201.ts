import type { LearningModule } from "@/lib/modules/types";

export const ElectricalEngineering201Module: LearningModule = {
  id: "electrical-engineering-201",
  title: "Power Systems II",
  description: "Intermediate EE covering controls, power systems, instrumentation, and practical design workflows.",
  subject: "Power Systems",
  tags: ["curriculum", "interactive"],
  minAge: 16,
  maxAge: 99,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "intermediate",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Understand core concepts in Power Systems",
    "Apply Power Systems skills through guided practice",
    "Demonstrate mastery through checkpoint quizzes"
  ],
  lessons: [
    {
      id: "electrical-engineering-201-l01",
      title: "Power Systems Concepts 1",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "electrical-engineering-201-l01-a1", type: "image", title: "Concept Card", content: "Visual summary for Power Systems." },
        { id: "electrical-engineering-201-l01-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Power Systems." }
      ]
    },
    {
      id: "electrical-engineering-201-l02",
      title: "Power Systems Practice 2",
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
        { id: "electrical-engineering-201-l02-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "electrical-engineering-201-l03",
      title: "Checkpoint 1: Power Systems",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "electrical-engineering-201-l03-q1",
          text: "Which choice best matches the main idea of Power Systems?",
          skillId: "electrical-engineering-201-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "electrical-engineering-201-l03-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "electrical-engineering-201-skill-review",
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
        { id: "electrical-engineering-201-l03-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "electrical-engineering-201-l04",
      title: "Power Systems Practice 4",
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
        { id: "electrical-engineering-201-l04-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "electrical-engineering-201-l05",
      title: "Power Systems Concepts 5",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "electrical-engineering-201-l05-a1", type: "image", title: "Concept Card", content: "Visual summary for Power Systems." },
        { id: "electrical-engineering-201-l05-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Power Systems." }
      ]
    },
    {
      id: "electrical-engineering-201-l06",
      title: "Checkpoint 2: Power Systems",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "electrical-engineering-201-l06-q1",
          text: "Which choice best matches the main idea of Power Systems?",
          skillId: "electrical-engineering-201-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "electrical-engineering-201-l06-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "electrical-engineering-201-skill-review",
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
        { id: "electrical-engineering-201-l06-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "electrical-engineering-201-l07",
      title: "Power Systems Concepts 7",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "electrical-engineering-201-l07-a1", type: "image", title: "Concept Card", content: "Visual summary for Power Systems." },
        { id: "electrical-engineering-201-l07-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Power Systems." }
      ]
    },
    {
      id: "electrical-engineering-201-l08",
      title: "Power Systems Practice 8",
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
        { id: "electrical-engineering-201-l08-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "electrical-engineering-201-l09",
      title: "Checkpoint 3: Power Systems",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "electrical-engineering-201-l09-q1",
          text: "Which choice best matches the main idea of Power Systems?",
          skillId: "electrical-engineering-201-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "electrical-engineering-201-l09-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "electrical-engineering-201-skill-review",
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
        { id: "electrical-engineering-201-l09-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "electrical-engineering-201-l10",
      title: "Checkpoint 4: Power Systems",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "electrical-engineering-201-l10-q1",
          text: "Which choice best matches the main idea of Power Systems?",
          skillId: "electrical-engineering-201-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "electrical-engineering-201-l10-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "electrical-engineering-201-skill-review",
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
        { id: "electrical-engineering-201-l10-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    }
  ],
};
