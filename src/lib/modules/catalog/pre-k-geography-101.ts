import type { LearningModule } from "@/lib/modules/types";

export const PreKGeography101Module: LearningModule = {
  id: "pre-k-geography-101",
  title: "Pre-K Maps and Places Around Us",
  description: "Play-based Pre-K module for geography with family-friendly practice and simple checks for understanding.",
  subject: "Geography",
  tags: ["pre-k", "curriculum", "interactive"],
  minAge: 3,
  maxAge: 5,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es", "fr", "de", "hi", "zh"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Recognize key geography ideas through stories and visuals",
    "Practice geography in guided play and short activities",
    "Build confidence through frequent low-stakes checkpoints"
  ],
  lessons: [
    {
      id: "pre-k-geography-101-l01",
      title: "Welcome to Maps and Places Around Us",
      type: "video",
      duration: 8,
      learningAids: [
        { id: "pre-k-geography-101-l01-a1", type: "image", title: "Picture Story Card", content: "Color visual showing places, directions, and maps." },
        { id: "pre-k-geography-101-l01-a2", type: "animation", title: "Animated Walkthrough", content: "Short animation introducing places, directions, and maps with simple narration." }
      ]
    },
    {
      id: "pre-k-geography-101-l02",
      title: "Guided Play: Maps and Places Around Us",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "Name one thing you noticed about near and far.",
          "Show how you would practice near and far at home.",
          "Teach one new word from this lesson to a grown-up."
        ]
      },
      interactiveActivities: [
        {
          id: "pre-k-geography-101-l02-ia1",
          type: "drag_and_drop",
          title: "Learning Steps Game",
          description: "Drag each idea to the right step.",
          estimatedMinutes: 6,
          difficultyLevel: "easy",
          data: {
            targets: [
              { id: "plan", label: "Plan" },
              { id: "play", label: "Play" },
              { id: "share", label: "Share" }
            ],
            draggables: [
              { id: "d1", label: "Say what we will learn about near and far", correctTargetId: "plan" },
              { id: "d2", label: "Try the activity with a helper", correctTargetId: "play" },
              { id: "d3", label: "Tell someone one thing you learned", correctTargetId: "share" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "pre-k-geography-101-l02-a1", type: "practice", title: "Play Activity", content: "Guided hands-on practice for near and far with caregiver support." }
      ]
    },
    {
      id: "pre-k-geography-101-l03",
      title: "Checkpoint: Core Idea (Maps and Places Around Us)",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-geography-101-l03-q1",
          text: "Which choice best matches near and far?",
          skillId: "pre-k-geography-101-skill-core",
          options: [
            { id: "a", text: "The example that shows near and far clearly" },
            { id: "b", text: "A choice that does not match the lesson idea" },
            { id: "c", text: "A random answer with no evidence" },
            { id: "d", text: "A choice from another topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-geography-101-l03-q2",
          text: "What helps you learn places, directions, and maps best?",
          skillId: "pre-k-geography-101-skill-practice",
          options: [
            { id: "a", text: "Practice, explain, and try again" },
            { id: "b", text: "Skip the activity and guess" },
            { id: "c", text: "Ignore the example" },
            { id: "d", text: "Change to an unrelated topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-geography-101-l03-q3",
          text: "Which option uses map symbols correctly?",
          skillId: "pre-k-geography-101-skill-apply",
          options: [
            { id: "a", text: "A step-by-step answer with a clear reason" },
            { id: "b", text: "A choice with no reason or example" },
            { id: "c", text: "A response that ignores the question" },
            { id: "d", text: "A statement not connected to map symbols" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-geography-101-l03-q4",
          text: "Why do we review this topic more than once?",
          skillId: "pre-k-geography-101-skill-review",
          options: [
            { id: "a", text: "Review helps memory grow stronger over time" },
            { id: "b", text: "Review makes learning harder every time" },
            { id: "c", text: "Review removes key ideas" },
            { id: "d", text: "Review has no value for learners" }
          ],
          correctOptionId: "a"
        }
      ],
      interactiveActivities: [
        {
          id: "pre-k-geography-101-l03-ia1",
          type: "matching_pairs",
          title: "Match and Learn",
          description: "Match each learning clue to the best action.",
          estimatedMinutes: 6,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "I forgot near and far" },
              { id: "l2", label: "I am unsure about map symbols" },
              { id: "l3", label: "I need to remember places, directions, and maps" }
            ],
            right: [
              { id: "r1", label: "Look at one example and say it out loud" },
              { id: "r2", label: "Use step-by-step practice with help" },
              { id: "r3", label: "Do a quick review game before trying again" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2] }],
        difficultyDistribution: { easy: 2, medium: 2, hard: 0 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.7
      },
      learningAids: [
        { id: "pre-k-geography-101-l03-a1", type: "mnemonic", title: "Remembering Phrase", content: "Think, Try, Explain for every places, directions, and maps challenge." }
      ]
    },
    {
      id: "pre-k-geography-101-l04",
      title: "Story and Example Time: Maps and Places Around Us",
      type: "video",
      duration: 8,
      learningAids: [
        { id: "pre-k-geography-101-l04-a1", type: "image", title: "Picture Story Card", content: "Color visual showing near and far." },
        { id: "pre-k-geography-101-l04-a2", type: "animation", title: "Animated Walkthrough", content: "Short animation introducing near and far with simple narration." }
      ]
    },
    {
      id: "pre-k-geography-101-l05",
      title: "Hands-On Practice: Maps and Places Around Us",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "Name one thing you noticed about map symbols.",
          "Show how you would practice map symbols at home.",
          "Teach one new word from this lesson to a grown-up."
        ]
      },
      interactiveActivities: [
        {
          id: "pre-k-geography-101-l05-ia1",
          type: "drag_and_drop",
          title: "Learning Steps Game",
          description: "Drag each idea to the right step.",
          estimatedMinutes: 6,
          difficultyLevel: "easy",
          data: {
            targets: [
              { id: "plan", label: "Plan" },
              { id: "play", label: "Play" },
              { id: "share", label: "Share" }
            ],
            draggables: [
              { id: "d1", label: "Say what we will learn about map symbols", correctTargetId: "plan" },
              { id: "d2", label: "Try the activity with a helper", correctTargetId: "play" },
              { id: "d3", label: "Tell someone one thing you learned", correctTargetId: "share" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "pre-k-geography-101-l05-a1", type: "practice", title: "Play Activity", content: "Guided hands-on practice for map symbols with caregiver support." }
      ]
    },
    {
      id: "pre-k-geography-101-l06",
      title: "Checkpoint: Practice Skills (Maps and Places Around Us)",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-geography-101-l06-q1",
          text: "Which choice best matches near and far?",
          skillId: "pre-k-geography-101-skill-core",
          options: [
            { id: "a", text: "The example that shows near and far clearly" },
            { id: "b", text: "A choice that does not match the lesson idea" },
            { id: "c", text: "A random answer with no evidence" },
            { id: "d", text: "A choice from another topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-geography-101-l06-q2",
          text: "What helps you learn places, directions, and maps best?",
          skillId: "pre-k-geography-101-skill-practice",
          options: [
            { id: "a", text: "Practice, explain, and try again" },
            { id: "b", text: "Skip the activity and guess" },
            { id: "c", text: "Ignore the example" },
            { id: "d", text: "Change to an unrelated topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-geography-101-l06-q3",
          text: "Which option uses map symbols correctly?",
          skillId: "pre-k-geography-101-skill-apply",
          options: [
            { id: "a", text: "A step-by-step answer with a clear reason" },
            { id: "b", text: "A choice with no reason or example" },
            { id: "c", text: "A response that ignores the question" },
            { id: "d", text: "A statement not connected to map symbols" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-geography-101-l06-q4",
          text: "Why do we review this topic more than once?",
          skillId: "pre-k-geography-101-skill-review",
          options: [
            { id: "a", text: "Review helps memory grow stronger over time" },
            { id: "b", text: "Review makes learning harder every time" },
            { id: "c", text: "Review removes key ideas" },
            { id: "d", text: "Review has no value for learners" }
          ],
          correctOptionId: "a"
        }
      ],
      interactiveActivities: [
        {
          id: "pre-k-geography-101-l06-ia1",
          type: "matching_pairs",
          title: "Match and Learn",
          description: "Match each learning clue to the best action.",
          estimatedMinutes: 6,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "I forgot near and far" },
              { id: "l2", label: "I am unsure about map symbols" },
              { id: "l3", label: "I need to remember places, directions, and maps" }
            ],
            right: [
              { id: "r1", label: "Look at one example and say it out loud" },
              { id: "r2", label: "Use step-by-step practice with help" },
              { id: "r3", label: "Do a quick review game before trying again" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2] }],
        difficultyDistribution: { easy: 2, medium: 2, hard: 0 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.7
      },
      learningAids: [
        { id: "pre-k-geography-101-l06-a1", type: "mnemonic", title: "Remembering Phrase", content: "Think, Try, Explain for every places, directions, and maps challenge." }
      ]
    },
    {
      id: "pre-k-geography-101-l07",
      title: "Build and Create: Maps and Places Around Us",
      type: "video",
      duration: 8,
      learningAids: [
        { id: "pre-k-geography-101-l07-a1", type: "image", title: "Picture Story Card", content: "Color visual showing places, directions, and maps." },
        { id: "pre-k-geography-101-l07-a2", type: "animation", title: "Animated Walkthrough", content: "Short animation introducing places, directions, and maps with simple narration." }
      ]
    },
    {
      id: "pre-k-geography-101-l08",
      title: "Reflection Circle: Maps and Places Around Us",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "Name one thing you noticed about near and far.",
          "Show how you would practice near and far at home.",
          "Teach one new word from this lesson to a grown-up."
        ]
      },
      interactiveActivities: [
        {
          id: "pre-k-geography-101-l08-ia1",
          type: "drag_and_drop",
          title: "Learning Steps Game",
          description: "Drag each idea to the right step.",
          estimatedMinutes: 6,
          difficultyLevel: "easy",
          data: {
            targets: [
              { id: "plan", label: "Plan" },
              { id: "play", label: "Play" },
              { id: "share", label: "Share" }
            ],
            draggables: [
              { id: "d1", label: "Say what we will learn about near and far", correctTargetId: "plan" },
              { id: "d2", label: "Try the activity with a helper", correctTargetId: "play" },
              { id: "d3", label: "Tell someone one thing you learned", correctTargetId: "share" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "pre-k-geography-101-l08-a1", type: "practice", title: "Play Activity", content: "Guided hands-on practice for near and far with caregiver support." }
      ]
    },
    {
      id: "pre-k-geography-101-l09",
      title: "Review Game: Maps and Places Around Us",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-geography-101-l09-q1",
          text: "Which choice best matches near and far?",
          skillId: "pre-k-geography-101-skill-core",
          options: [
            { id: "a", text: "The example that shows near and far clearly" },
            { id: "b", text: "A choice that does not match the lesson idea" },
            { id: "c", text: "A random answer with no evidence" },
            { id: "d", text: "A choice from another topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-geography-101-l09-q2",
          text: "What helps you learn places, directions, and maps best?",
          skillId: "pre-k-geography-101-skill-practice",
          options: [
            { id: "a", text: "Practice, explain, and try again" },
            { id: "b", text: "Skip the activity and guess" },
            { id: "c", text: "Ignore the example" },
            { id: "d", text: "Change to an unrelated topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-geography-101-l09-q3",
          text: "Which option uses map symbols correctly?",
          skillId: "pre-k-geography-101-skill-apply",
          options: [
            { id: "a", text: "A step-by-step answer with a clear reason" },
            { id: "b", text: "A choice with no reason or example" },
            { id: "c", text: "A response that ignores the question" },
            { id: "d", text: "A statement not connected to map symbols" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-geography-101-l09-q4",
          text: "Why do we review this topic more than once?",
          skillId: "pre-k-geography-101-skill-review",
          options: [
            { id: "a", text: "Review helps memory grow stronger over time" },
            { id: "b", text: "Review makes learning harder every time" },
            { id: "c", text: "Review removes key ideas" },
            { id: "d", text: "Review has no value for learners" }
          ],
          correctOptionId: "a"
        }
      ],
      interactiveActivities: [
        {
          id: "pre-k-geography-101-l09-ia1",
          type: "matching_pairs",
          title: "Match and Learn",
          description: "Match each learning clue to the best action.",
          estimatedMinutes: 6,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "I forgot near and far" },
              { id: "l2", label: "I am unsure about map symbols" },
              { id: "l3", label: "I need to remember places, directions, and maps" }
            ],
            right: [
              { id: "r1", label: "Look at one example and say it out loud" },
              { id: "r2", label: "Use step-by-step practice with help" },
              { id: "r3", label: "Do a quick review game before trying again" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2] }],
        difficultyDistribution: { easy: 2, medium: 2, hard: 0 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.7
      },
      learningAids: [
        { id: "pre-k-geography-101-l09-a1", type: "mnemonic", title: "Remembering Phrase", content: "Think, Try, Explain for every places, directions, and maps challenge." }
      ]
    },
    {
      id: "pre-k-geography-101-l10",
      title: "Celebration Quiz: Maps and Places Around Us",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-geography-101-l10-q1",
          text: "Which choice best matches near and far?",
          skillId: "pre-k-geography-101-skill-core",
          options: [
            { id: "a", text: "The example that shows near and far clearly" },
            { id: "b", text: "A choice that does not match the lesson idea" },
            { id: "c", text: "A random answer with no evidence" },
            { id: "d", text: "A choice from another topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-geography-101-l10-q2",
          text: "What helps you learn places, directions, and maps best?",
          skillId: "pre-k-geography-101-skill-practice",
          options: [
            { id: "a", text: "Practice, explain, and try again" },
            { id: "b", text: "Skip the activity and guess" },
            { id: "c", text: "Ignore the example" },
            { id: "d", text: "Change to an unrelated topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-geography-101-l10-q3",
          text: "Which option uses map symbols correctly?",
          skillId: "pre-k-geography-101-skill-apply",
          options: [
            { id: "a", text: "A step-by-step answer with a clear reason" },
            { id: "b", text: "A choice with no reason or example" },
            { id: "c", text: "A response that ignores the question" },
            { id: "d", text: "A statement not connected to map symbols" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-geography-101-l10-q4",
          text: "Why do we review this topic more than once?",
          skillId: "pre-k-geography-101-skill-review",
          options: [
            { id: "a", text: "Review helps memory grow stronger over time" },
            { id: "b", text: "Review makes learning harder every time" },
            { id: "c", text: "Review removes key ideas" },
            { id: "d", text: "Review has no value for learners" }
          ],
          correctOptionId: "a"
        }
      ],
      interactiveActivities: [
        {
          id: "pre-k-geography-101-l10-ia1",
          type: "matching_pairs",
          title: "Match and Learn",
          description: "Match each learning clue to the best action.",
          estimatedMinutes: 6,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "I forgot near and far" },
              { id: "l2", label: "I am unsure about map symbols" },
              { id: "l3", label: "I need to remember places, directions, and maps" }
            ],
            right: [
              { id: "r1", label: "Look at one example and say it out loud" },
              { id: "r2", label: "Use step-by-step practice with help" },
              { id: "r3", label: "Do a quick review game before trying again" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2] }],
        difficultyDistribution: { easy: 2, medium: 2, hard: 0 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.7
      },
      learningAids: [
        { id: "pre-k-geography-101-l10-a1", type: "mnemonic", title: "Remembering Phrase", content: "Think, Try, Explain for every places, directions, and maps challenge." }
      ]
    }
  ],
};
