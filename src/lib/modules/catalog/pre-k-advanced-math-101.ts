import type { LearningModule } from "@/lib/modules/types";

export const PreKAdvancedMath101Module: LearningModule = {
  id: "pre-k-advanced-math-101",
  title: "Pre-K Math Thinking Adventures",
  description: "Play-based Pre-K module for advanced math with family-friendly practice and simple checks for understanding.",
  subject: "Advanced Math",
  tags: ["pre-k", "curriculum", "interactive"],
  minAge: 3,
  maxAge: 5,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es", "fr", "de", "hi", "zh"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Recognize key advanced math ideas through stories and visuals",
    "Practice advanced math in guided play and short activities",
    "Build confidence through frequent low-stakes checkpoints"
  ],
  lessons: [
    {
      id: "pre-k-advanced-math-101-l01",
      title: "Welcome to Math Thinking Adventures",
      type: "video",
      duration: 8,
      learningAids: [
        { id: "pre-k-advanced-math-101-l01-a1", type: "image", title: "Picture Story Card", content: "Color visual showing patterns, comparisons, and early logic." },
        { id: "pre-k-advanced-math-101-l01-a2", type: "animation", title: "Animated Walkthrough", content: "Short animation introducing patterns, comparisons, and early logic with simple narration." }
      ]
    },
    {
      id: "pre-k-advanced-math-101-l02",
      title: "Guided Play: Math Thinking Adventures",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "Name one thing you noticed about pattern rules.",
          "Show how you would practice pattern rules at home.",
          "Teach one new word from this lesson to a grown-up."
        ]
      },
      interactiveActivities: [
        {
          id: "pre-k-advanced-math-101-l02-ia1",
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
              { id: "d1", label: "Say what we will learn about pattern rules", correctTargetId: "plan" },
              { id: "d2", label: "Try the activity with a helper", correctTargetId: "play" },
              { id: "d3", label: "Tell someone one thing you learned", correctTargetId: "share" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "pre-k-advanced-math-101-l02-a1", type: "practice", title: "Play Activity", content: "Guided hands-on practice for pattern rules with caregiver support." }
      ]
    },
    {
      id: "pre-k-advanced-math-101-l03",
      title: "Checkpoint: Core Idea (Math Thinking Adventures)",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-advanced-math-101-l03-q1",
          text: "Which choice best matches pattern rules?",
          skillId: "pre-k-advanced-math-101-skill-core",
          options: [
            { id: "a", text: "The example that shows pattern rules clearly" },
            { id: "b", text: "A choice that does not match the lesson idea" },
            { id: "c", text: "A random answer with no evidence" },
            { id: "d", text: "A choice from another topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-advanced-math-101-l03-q2",
          text: "What helps you learn patterns, comparisons, and early logic best?",
          skillId: "pre-k-advanced-math-101-skill-practice",
          options: [
            { id: "a", text: "Practice, explain, and try again" },
            { id: "b", text: "Skip the activity and guess" },
            { id: "c", text: "Ignore the example" },
            { id: "d", text: "Change to an unrelated topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-advanced-math-101-l03-q3",
          text: "Which option uses logic puzzles correctly?",
          skillId: "pre-k-advanced-math-101-skill-apply",
          options: [
            { id: "a", text: "A step-by-step answer with a clear reason" },
            { id: "b", text: "A choice with no reason or example" },
            { id: "c", text: "A response that ignores the question" },
            { id: "d", text: "A statement not connected to logic puzzles" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-advanced-math-101-l03-q4",
          text: "Why do we review this topic more than once?",
          skillId: "pre-k-advanced-math-101-skill-review",
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
          id: "pre-k-advanced-math-101-l03-ia1",
          type: "matching_pairs",
          title: "Match and Learn",
          description: "Match each learning clue to the best action.",
          estimatedMinutes: 6,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "I forgot pattern rules" },
              { id: "l2", label: "I am unsure about logic puzzles" },
              { id: "l3", label: "I need to remember patterns, comparisons, and early logic" }
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
        { id: "pre-k-advanced-math-101-l03-a1", type: "mnemonic", title: "Remembering Phrase", content: "Think, Try, Explain for every patterns, comparisons, and early logic challenge." }
      ]
    },
    {
      id: "pre-k-advanced-math-101-l04",
      title: "Story and Example Time: Math Thinking Adventures",
      type: "video",
      duration: 8,
      learningAids: [
        { id: "pre-k-advanced-math-101-l04-a1", type: "image", title: "Picture Story Card", content: "Color visual showing pattern rules." },
        { id: "pre-k-advanced-math-101-l04-a2", type: "animation", title: "Animated Walkthrough", content: "Short animation introducing pattern rules with simple narration." }
      ]
    },
    {
      id: "pre-k-advanced-math-101-l05",
      title: "Hands-On Practice: Math Thinking Adventures",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "Name one thing you noticed about logic puzzles.",
          "Show how you would practice logic puzzles at home.",
          "Teach one new word from this lesson to a grown-up."
        ]
      },
      interactiveActivities: [
        {
          id: "pre-k-advanced-math-101-l05-ia1",
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
              { id: "d1", label: "Say what we will learn about logic puzzles", correctTargetId: "plan" },
              { id: "d2", label: "Try the activity with a helper", correctTargetId: "play" },
              { id: "d3", label: "Tell someone one thing you learned", correctTargetId: "share" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "pre-k-advanced-math-101-l05-a1", type: "practice", title: "Play Activity", content: "Guided hands-on practice for logic puzzles with caregiver support." }
      ]
    },
    {
      id: "pre-k-advanced-math-101-l06",
      title: "Checkpoint: Practice Skills (Math Thinking Adventures)",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-advanced-math-101-l06-q1",
          text: "Which choice best matches pattern rules?",
          skillId: "pre-k-advanced-math-101-skill-core",
          options: [
            { id: "a", text: "The example that shows pattern rules clearly" },
            { id: "b", text: "A choice that does not match the lesson idea" },
            { id: "c", text: "A random answer with no evidence" },
            { id: "d", text: "A choice from another topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-advanced-math-101-l06-q2",
          text: "What helps you learn patterns, comparisons, and early logic best?",
          skillId: "pre-k-advanced-math-101-skill-practice",
          options: [
            { id: "a", text: "Practice, explain, and try again" },
            { id: "b", text: "Skip the activity and guess" },
            { id: "c", text: "Ignore the example" },
            { id: "d", text: "Change to an unrelated topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-advanced-math-101-l06-q3",
          text: "Which option uses logic puzzles correctly?",
          skillId: "pre-k-advanced-math-101-skill-apply",
          options: [
            { id: "a", text: "A step-by-step answer with a clear reason" },
            { id: "b", text: "A choice with no reason or example" },
            { id: "c", text: "A response that ignores the question" },
            { id: "d", text: "A statement not connected to logic puzzles" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-advanced-math-101-l06-q4",
          text: "Why do we review this topic more than once?",
          skillId: "pre-k-advanced-math-101-skill-review",
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
          id: "pre-k-advanced-math-101-l06-ia1",
          type: "matching_pairs",
          title: "Match and Learn",
          description: "Match each learning clue to the best action.",
          estimatedMinutes: 6,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "I forgot pattern rules" },
              { id: "l2", label: "I am unsure about logic puzzles" },
              { id: "l3", label: "I need to remember patterns, comparisons, and early logic" }
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
        { id: "pre-k-advanced-math-101-l06-a1", type: "mnemonic", title: "Remembering Phrase", content: "Think, Try, Explain for every patterns, comparisons, and early logic challenge." }
      ]
    },
    {
      id: "pre-k-advanced-math-101-l07",
      title: "Build and Create: Math Thinking Adventures",
      type: "video",
      duration: 8,
      learningAids: [
        { id: "pre-k-advanced-math-101-l07-a1", type: "image", title: "Picture Story Card", content: "Color visual showing patterns, comparisons, and early logic." },
        { id: "pre-k-advanced-math-101-l07-a2", type: "animation", title: "Animated Walkthrough", content: "Short animation introducing patterns, comparisons, and early logic with simple narration." }
      ]
    },
    {
      id: "pre-k-advanced-math-101-l08",
      title: "Reflection Circle: Math Thinking Adventures",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "Name one thing you noticed about pattern rules.",
          "Show how you would practice pattern rules at home.",
          "Teach one new word from this lesson to a grown-up."
        ]
      },
      interactiveActivities: [
        {
          id: "pre-k-advanced-math-101-l08-ia1",
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
              { id: "d1", label: "Say what we will learn about pattern rules", correctTargetId: "plan" },
              { id: "d2", label: "Try the activity with a helper", correctTargetId: "play" },
              { id: "d3", label: "Tell someone one thing you learned", correctTargetId: "share" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "pre-k-advanced-math-101-l08-a1", type: "practice", title: "Play Activity", content: "Guided hands-on practice for pattern rules with caregiver support." }
      ]
    },
    {
      id: "pre-k-advanced-math-101-l09",
      title: "Review Game: Math Thinking Adventures",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-advanced-math-101-l09-q1",
          text: "Which choice best matches pattern rules?",
          skillId: "pre-k-advanced-math-101-skill-core",
          options: [
            { id: "a", text: "The example that shows pattern rules clearly" },
            { id: "b", text: "A choice that does not match the lesson idea" },
            { id: "c", text: "A random answer with no evidence" },
            { id: "d", text: "A choice from another topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-advanced-math-101-l09-q2",
          text: "What helps you learn patterns, comparisons, and early logic best?",
          skillId: "pre-k-advanced-math-101-skill-practice",
          options: [
            { id: "a", text: "Practice, explain, and try again" },
            { id: "b", text: "Skip the activity and guess" },
            { id: "c", text: "Ignore the example" },
            { id: "d", text: "Change to an unrelated topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-advanced-math-101-l09-q3",
          text: "Which option uses logic puzzles correctly?",
          skillId: "pre-k-advanced-math-101-skill-apply",
          options: [
            { id: "a", text: "A step-by-step answer with a clear reason" },
            { id: "b", text: "A choice with no reason or example" },
            { id: "c", text: "A response that ignores the question" },
            { id: "d", text: "A statement not connected to logic puzzles" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-advanced-math-101-l09-q4",
          text: "Why do we review this topic more than once?",
          skillId: "pre-k-advanced-math-101-skill-review",
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
          id: "pre-k-advanced-math-101-l09-ia1",
          type: "matching_pairs",
          title: "Match and Learn",
          description: "Match each learning clue to the best action.",
          estimatedMinutes: 6,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "I forgot pattern rules" },
              { id: "l2", label: "I am unsure about logic puzzles" },
              { id: "l3", label: "I need to remember patterns, comparisons, and early logic" }
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
        { id: "pre-k-advanced-math-101-l09-a1", type: "mnemonic", title: "Remembering Phrase", content: "Think, Try, Explain for every patterns, comparisons, and early logic challenge." }
      ]
    },
    {
      id: "pre-k-advanced-math-101-l10",
      title: "Celebration Quiz: Math Thinking Adventures",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-advanced-math-101-l10-q1",
          text: "Which choice best matches pattern rules?",
          skillId: "pre-k-advanced-math-101-skill-core",
          options: [
            { id: "a", text: "The example that shows pattern rules clearly" },
            { id: "b", text: "A choice that does not match the lesson idea" },
            { id: "c", text: "A random answer with no evidence" },
            { id: "d", text: "A choice from another topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-advanced-math-101-l10-q2",
          text: "What helps you learn patterns, comparisons, and early logic best?",
          skillId: "pre-k-advanced-math-101-skill-practice",
          options: [
            { id: "a", text: "Practice, explain, and try again" },
            { id: "b", text: "Skip the activity and guess" },
            { id: "c", text: "Ignore the example" },
            { id: "d", text: "Change to an unrelated topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-advanced-math-101-l10-q3",
          text: "Which option uses logic puzzles correctly?",
          skillId: "pre-k-advanced-math-101-skill-apply",
          options: [
            { id: "a", text: "A step-by-step answer with a clear reason" },
            { id: "b", text: "A choice with no reason or example" },
            { id: "c", text: "A response that ignores the question" },
            { id: "d", text: "A statement not connected to logic puzzles" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-advanced-math-101-l10-q4",
          text: "Why do we review this topic more than once?",
          skillId: "pre-k-advanced-math-101-skill-review",
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
          id: "pre-k-advanced-math-101-l10-ia1",
          type: "matching_pairs",
          title: "Match and Learn",
          description: "Match each learning clue to the best action.",
          estimatedMinutes: 6,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "I forgot pattern rules" },
              { id: "l2", label: "I am unsure about logic puzzles" },
              { id: "l3", label: "I need to remember patterns, comparisons, and early logic" }
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
        { id: "pre-k-advanced-math-101-l10-a1", type: "mnemonic", title: "Remembering Phrase", content: "Think, Try, Explain for every patterns, comparisons, and early logic challenge." }
      ]
    }
  ],
};
