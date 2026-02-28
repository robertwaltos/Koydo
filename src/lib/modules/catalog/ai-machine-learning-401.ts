import type { LearningModule } from "@/lib/modules/types";

export const AiMachineLearning401Module: LearningModule = {
  id: "ai-machine-learning-401",
  title: "AI Systems and Governance",
  description: "Senior AI systems design with governance, policy controls, safety instrumentation, and lifecycle management.",
  subject: "AI and ML",
  tags: ["curriculum", "interactive"],
  minAge: 17,
  maxAge: 99,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Understand core concepts in AI and ML",
    "Apply AI and ML skills through guided practice",
    "Demonstrate mastery through checkpoint quizzes"
  ],
  lessons: [
    {
      id: "ai-machine-learning-401-l01",
      title: "AI and ML Concepts 1",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "ai-machine-learning-401-l01-a1", type: "image", title: "Concept Card", content: "Visual summary for AI and ML." },
        { id: "ai-machine-learning-401-l01-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for AI and ML." }
      ]
    },
    {
      id: "ai-machine-learning-401-l02",
      title: "AI and ML Practice 2",
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
        { id: "ai-machine-learning-401-l02-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "ai-machine-learning-401-l03",
      title: "Checkpoint 1: AI and ML",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "ai-machine-learning-401-l03-q1",
          text: "Which choice best matches the main idea of AI and ML?",
          skillId: "ai-machine-learning-401-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "ai-machine-learning-401-l03-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "ai-machine-learning-401-skill-review",
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
        { id: "ai-machine-learning-401-l03-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "ai-machine-learning-401-l04",
      title: "AI and ML Practice 4",
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
        { id: "ai-machine-learning-401-l04-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "ai-machine-learning-401-l05",
      title: "AI and ML Concepts 5",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "ai-machine-learning-401-l05-a1", type: "image", title: "Concept Card", content: "Visual summary for AI and ML." },
        { id: "ai-machine-learning-401-l05-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for AI and ML." }
      ]
    },
    {
      id: "ai-machine-learning-401-l06",
      title: "Checkpoint 2: AI and ML",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "ai-machine-learning-401-l06-q1",
          text: "Which choice best matches the main idea of AI and ML?",
          skillId: "ai-machine-learning-401-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "ai-machine-learning-401-l06-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "ai-machine-learning-401-skill-review",
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
        { id: "ai-machine-learning-401-l06-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "ai-machine-learning-401-l07",
      title: "AI and ML Concepts 7",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "ai-machine-learning-401-l07-a1", type: "image", title: "Concept Card", content: "Visual summary for AI and ML." },
        { id: "ai-machine-learning-401-l07-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for AI and ML." }
      ]
    },
    {
      id: "ai-machine-learning-401-l08",
      title: "AI and ML Practice 8",
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
        { id: "ai-machine-learning-401-l08-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "ai-machine-learning-401-l09",
      title: "Checkpoint 3: AI and ML",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "ai-machine-learning-401-l09-q1",
          text: "Which choice best matches the main idea of AI and ML?",
          skillId: "ai-machine-learning-401-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "ai-machine-learning-401-l09-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "ai-machine-learning-401-skill-review",
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
        { id: "ai-machine-learning-401-l09-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "ai-machine-learning-401-l10",
      title: "Checkpoint 4: AI and ML",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "ai-machine-learning-401-l10-q1",
          text: "Which choice best matches the main idea of AI and ML?",
          skillId: "ai-machine-learning-401-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "ai-machine-learning-401-l10-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "ai-machine-learning-401-skill-review",
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
        { id: "ai-machine-learning-401-l10-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    }
  ],
};
