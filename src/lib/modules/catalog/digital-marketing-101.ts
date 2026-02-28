import type { LearningModule } from "@/lib/modules/types";

export const DigitalMarketing101Module: LearningModule = {
  id: "digital-marketing-101",
  title: "Digital Marketing Fundamentals",
  description: "Digital marketing basics across channels, analytics, content systems, and campaign optimization.",
  subject: "Digital Marketing",
  tags: ["curriculum", "interactive"],
  minAge: 14,
  maxAge: 99,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Understand core concepts in Digital Marketing",
    "Apply Digital Marketing skills through guided practice",
    "Demonstrate mastery through checkpoint quizzes"
  ],
  lessons: [
    {
      id: "digital-marketing-101-l01",
      title: "Digital Marketing Concepts 1",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "digital-marketing-101-l01-a1", type: "image", title: "Concept Card", content: "Visual summary for Digital Marketing." },
        { id: "digital-marketing-101-l01-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Digital Marketing." }
      ]
    },
    {
      id: "digital-marketing-101-l02",
      title: "Digital Marketing Practice 2",
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
        { id: "digital-marketing-101-l02-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "digital-marketing-101-l03",
      title: "Checkpoint 1: Digital Marketing",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "digital-marketing-101-l03-q1",
          text: "Which choice best matches the main idea of Digital Marketing?",
          skillId: "digital-marketing-101-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "digital-marketing-101-l03-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "digital-marketing-101-skill-review",
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
        { id: "digital-marketing-101-l03-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "digital-marketing-101-l04",
      title: "Digital Marketing Practice 4",
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
        { id: "digital-marketing-101-l04-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "digital-marketing-101-l05",
      title: "Digital Marketing Concepts 5",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "digital-marketing-101-l05-a1", type: "image", title: "Concept Card", content: "Visual summary for Digital Marketing." },
        { id: "digital-marketing-101-l05-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Digital Marketing." }
      ]
    },
    {
      id: "digital-marketing-101-l06",
      title: "Checkpoint 2: Digital Marketing",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "digital-marketing-101-l06-q1",
          text: "Which choice best matches the main idea of Digital Marketing?",
          skillId: "digital-marketing-101-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "digital-marketing-101-l06-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "digital-marketing-101-skill-review",
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
        { id: "digital-marketing-101-l06-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "digital-marketing-101-l07",
      title: "Digital Marketing Concepts 7",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "digital-marketing-101-l07-a1", type: "image", title: "Concept Card", content: "Visual summary for Digital Marketing." },
        { id: "digital-marketing-101-l07-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Digital Marketing." }
      ]
    },
    {
      id: "digital-marketing-101-l08",
      title: "Digital Marketing Practice 8",
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
        { id: "digital-marketing-101-l08-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "digital-marketing-101-l09",
      title: "Checkpoint 3: Digital Marketing",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "digital-marketing-101-l09-q1",
          text: "Which choice best matches the main idea of Digital Marketing?",
          skillId: "digital-marketing-101-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "digital-marketing-101-l09-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "digital-marketing-101-skill-review",
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
        { id: "digital-marketing-101-l09-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "digital-marketing-101-l10",
      title: "Checkpoint 4: Digital Marketing",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "digital-marketing-101-l10-q1",
          text: "Which choice best matches the main idea of Digital Marketing?",
          skillId: "digital-marketing-101-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "digital-marketing-101-l10-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "digital-marketing-101-skill-review",
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
        { id: "digital-marketing-101-l10-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    }
  ],
};
