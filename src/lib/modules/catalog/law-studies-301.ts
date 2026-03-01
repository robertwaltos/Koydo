import type { LearningModule } from "@/lib/modules/types";

export const LawStudies301Module: LearningModule = {
  id: "law-studies-301",
  title: "Law Studies III",
  description: "Advanced legal analysis, litigation strategy fundamentals, and comparative legal interpretation.",
  subject: "Law",
  tags: ["curriculum", "interactive"],
  minAge: 17,
  maxAge: 99,
  version: "1.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Understand core concepts in Law",
    "Apply Law skills through guided practice",
    "Demonstrate mastery through checkpoint quizzes"
  ],
  lessons: [
    {
      id: "law-studies-301-l01",
      title: "Law Concepts 1",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "law-studies-301-l01-a1", type: "image", title: "Concept Card", content: "Visual summary for Law." },
        { id: "law-studies-301-l01-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Law." }
      ]
    },
    {
      id: "law-studies-301-l02",
      title: "Law Practice 2",
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
        { id: "law-studies-301-l02-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "law-studies-301-l03",
      title: "Checkpoint 1: Law",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "law-studies-301-l03-q1",
          text: "Which choice best matches the main idea of Law?",
          skillId: "law-studies-301-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "law-studies-301-l03-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "law-studies-301-skill-review",
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
        { id: "law-studies-301-l03-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "law-studies-301-l04",
      title: "Law Practice 4",
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
        { id: "law-studies-301-l04-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "law-studies-301-l05",
      title: "Law Concepts 5",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "law-studies-301-l05-a1", type: "image", title: "Concept Card", content: "Visual summary for Law." },
        { id: "law-studies-301-l05-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Law." }
      ]
    },
    {
      id: "law-studies-301-l06",
      title: "Checkpoint 2: Law",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "law-studies-301-l06-q1",
          text: "Which choice best matches the main idea of Law?",
          skillId: "law-studies-301-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "law-studies-301-l06-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "law-studies-301-skill-review",
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
        { id: "law-studies-301-l06-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "law-studies-301-l07",
      title: "Law Concepts 7",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "law-studies-301-l07-a1", type: "image", title: "Concept Card", content: "Visual summary for Law." },
        { id: "law-studies-301-l07-a2", type: "animation", title: "Animated Example", content: "Step-by-step walkthrough for Law." }
      ]
    },
    {
      id: "law-studies-301-l08",
      title: "Law Practice 8",
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
        { id: "law-studies-301-l08-a1", type: "practice", title: "Guided Practice", content: "Follow the challenge flow and record your approach." }
      ]
    },
    {
      id: "law-studies-301-l09",
      title: "Checkpoint 3: Law",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "law-studies-301-l09-q1",
          text: "Which choice best matches the main idea of Law?",
          skillId: "law-studies-301-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "law-studies-301-l09-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "law-studies-301-skill-review",
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
        { id: "law-studies-301-l09-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    },
    {
      id: "law-studies-301-l10",
      title: "Checkpoint 4: Law",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "law-studies-301-l10-q1",
          text: "Which choice best matches the main idea of Law?",
          skillId: "law-studies-301-skill-core",
          options: [
            { id: "a", text: "A complete, evidence-based explanation" },
            { id: "b", text: "An unrelated claim" },
            { id: "c", text: "A random guess" },
            { id: "d", text: "A conflicting idea" }
          ],
          correctOptionId: "a"
        },
        {
          id: "law-studies-301-l10-q2",
          text: "What should a learner do after getting an answer wrong?",
          skillId: "law-studies-301-skill-review",
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
        { id: "law-studies-301-l10-a1", type: "mnemonic", title: "Memory Cue", content: "Use Plan, Solve, Explain to structure each response." }
      ]
    }
  ],
};
