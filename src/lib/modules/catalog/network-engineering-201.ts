import type { LearningModule } from "@/lib/modules/types";

export const NetworkEngineering201Module: LearningModule = {
  id: "network-engineering-201",
  title: "Network Engineering Operations",
  description: "Intermediate network operations including design tradeoffs, performance, security controls, and incident handling.",
  subject: "Network Engineering",
  tags: ["curriculum", "interactive"],
  minAge: 15,
  maxAge: 99,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "intermediate",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Understand core concepts in Network Engineering",
    "Apply Network Engineering skills through guided practice",
    "Demonstrate mastery through checkpoint quizzes"
  ],
  lessons: [
    {
      id: "network-engineering-201-l01",
      title: "Network Engineering Concepts 1",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "network-engineering-201-l01-a1", type: "image", title: "Concept Card", content: "Visual summary for Network Engineering." },
        { id: "network-engineering-201-l01-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Network Engineering." }
      ]
    },
    {
      id: "network-engineering-201-l02",
      title: "Network Engineering Practice 2",
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
        { id: "network-engineering-201-l02-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "network-engineering-201-l03",
      title: "Checkpoint 1: Network Engineering",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "network-engineering-201-l03-q1",
          text: "Which choice best matches the main idea of Network Engineering?",
          skillId: "network-engineering-201-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "network-engineering-201-l03-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "network-engineering-201-skill-review",
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
        { id: "network-engineering-201-l03-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "network-engineering-201-l04",
      title: "Network Engineering Practice 4",
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
        { id: "network-engineering-201-l04-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "network-engineering-201-l05",
      title: "Network Engineering Concepts 5",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "network-engineering-201-l05-a1", type: "image", title: "Concept Card", content: "Visual summary for Network Engineering." },
        { id: "network-engineering-201-l05-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Network Engineering." }
      ]
    },
    {
      id: "network-engineering-201-l06",
      title: "Checkpoint 2: Network Engineering",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "network-engineering-201-l06-q1",
          text: "Which choice best matches the main idea of Network Engineering?",
          skillId: "network-engineering-201-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "network-engineering-201-l06-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "network-engineering-201-skill-review",
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
        { id: "network-engineering-201-l06-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "network-engineering-201-l07",
      title: "Network Engineering Concepts 7",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "network-engineering-201-l07-a1", type: "image", title: "Concept Card", content: "Visual summary for Network Engineering." },
        { id: "network-engineering-201-l07-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Network Engineering." }
      ]
    },
    {
      id: "network-engineering-201-l08",
      title: "Network Engineering Practice 8",
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
        { id: "network-engineering-201-l08-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "network-engineering-201-l09",
      title: "Checkpoint 3: Network Engineering",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "network-engineering-201-l09-q1",
          text: "Which choice best matches the main idea of Network Engineering?",
          skillId: "network-engineering-201-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "network-engineering-201-l09-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "network-engineering-201-skill-review",
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
        { id: "network-engineering-201-l09-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "network-engineering-201-l10",
      title: "Checkpoint 4: Network Engineering",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "network-engineering-201-l10-q1",
          text: "Which choice best matches the main idea of Network Engineering?",
          skillId: "network-engineering-201-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "network-engineering-201-l10-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "network-engineering-201-skill-review",
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
        { id: "network-engineering-201-l10-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    }
  ],
};
