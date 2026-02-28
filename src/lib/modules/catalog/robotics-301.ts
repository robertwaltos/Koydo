import type { LearningModule } from "@/lib/modules/types";

export const Robotics301Module: LearningModule = {
  id: "robotics-301",
  title: "Robotics Autonomy",
  description: "Advanced robotics autonomy including mapping, localization, planning under uncertainty, and safety layers.",
  subject: "Robotics",
  tags: ["curriculum", "interactive"],
  minAge: 16,
  maxAge: 99,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Understand core concepts in Robotics",
    "Apply Robotics skills through guided practice",
    "Demonstrate mastery through checkpoint quizzes"
  ],
  lessons: [
    {
      id: "robotics-301-l01",
      title: "Robotics Concepts 1",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "robotics-301-l01-a1", type: "image", title: "Concept Card", content: "Visual summary for Robotics." },
        { id: "robotics-301-l01-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Robotics." }
      ]
    },
    {
      id: "robotics-301-l02",
      title: "Robotics Practice 2",
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
        { id: "robotics-301-l02-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "robotics-301-l03",
      title: "Checkpoint 1: Robotics",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "robotics-301-l03-q1",
          text: "Which choice best matches the main idea of Robotics?",
          skillId: "robotics-301-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "robotics-301-l03-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "robotics-301-skill-review",
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
        { id: "robotics-301-l03-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "robotics-301-l04",
      title: "Robotics Practice 4",
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
        { id: "robotics-301-l04-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "robotics-301-l05",
      title: "Robotics Concepts 5",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "robotics-301-l05-a1", type: "image", title: "Concept Card", content: "Visual summary for Robotics." },
        { id: "robotics-301-l05-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Robotics." }
      ]
    },
    {
      id: "robotics-301-l06",
      title: "Checkpoint 2: Robotics",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "robotics-301-l06-q1",
          text: "Which choice best matches the main idea of Robotics?",
          skillId: "robotics-301-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "robotics-301-l06-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "robotics-301-skill-review",
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
        { id: "robotics-301-l06-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "robotics-301-l07",
      title: "Robotics Concepts 7",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "robotics-301-l07-a1", type: "image", title: "Concept Card", content: "Visual summary for Robotics." },
        { id: "robotics-301-l07-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Robotics." }
      ]
    },
    {
      id: "robotics-301-l08",
      title: "Robotics Practice 8",
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
        { id: "robotics-301-l08-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "robotics-301-l09",
      title: "Checkpoint 3: Robotics",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "robotics-301-l09-q1",
          text: "Which choice best matches the main idea of Robotics?",
          skillId: "robotics-301-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "robotics-301-l09-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "robotics-301-skill-review",
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
        { id: "robotics-301-l09-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "robotics-301-l10",
      title: "Checkpoint 4: Robotics",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "robotics-301-l10-q1",
          text: "Which choice best matches the main idea of Robotics?",
          skillId: "robotics-301-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "robotics-301-l10-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "robotics-301-skill-review",
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
        { id: "robotics-301-l10-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    }
  ],
};
