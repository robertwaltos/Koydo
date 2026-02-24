import type { LearningModule } from "@/lib/modules/types";

export const Biology201Module: LearningModule = {
  id: "biology-201",
  title: "Biology Systems and Change",
  description: "Connect cells, genetics, ecosystems, and adaptation through systems-level reasoning.",
  subject: "Biology",
  tags: ["core", "curriculum", "interactive"],
  minAge: 7,
  maxAge: 18,
  moduleVersion: "1.1.0",
  version: "1.1.0",
  learningObjectives: [
    "Understand core concepts in Biology",
    "Apply Ecology Reasoning strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  lessons: [
    {
      id: "biology-201-l01",
      title: "Homeostasis and Feedback Loops",
      type: "video",
      duration: 10,
      chunks: [
        {
          id: "biology-201-l01-c1",
          title: "Homeostasis and Feedback Loops Overview",
          content: "In this lesson, we focus on homeostasis through the lens of biological systems thinking. The goal is to recognize what strong reasoning looks like before solving."
        },
        {
          id: "biology-201-l01-c2",
          title: "Core Concept",
          content: "homeostasis and genetic inheritance work together. Start by naming the main target, then identify the evidence or steps that support it."
        },
        {
          id: "biology-201-l01-c3",
          title: "Worked Example",
          content: "Walk through one guided example: define the goal, apply a strategy for genetic inheritance, then verify the result with a quick check."
        },
        {
          id: "biology-201-l01-c4",
          title: "Transfer Prompt",
          content: "Apply the same process to a new scenario and explain why your approach is valid in one clear sentence."
        }
      ],
      flashcards: [
        { id: "biology-201-l01-f1", front: "homeostasis", back: "A central target skill in this module. Name it before solving." },
        { id: "biology-201-l01-f2", front: "genetic inheritance", back: "Use this as the method step after defining the goal." },
        { id: "biology-201-l01-f3", front: "Verification", back: "Check that your result matches the original goal and constraints." },
        { id: "biology-201-l01-f4", front: "Transfer", back: "Use the same strategy on a new item to confirm true mastery." }
      ],
      learningAids: [
        { id: "biology-201-l01-a1", type: "image", title: "Concept Poster", content: "A colorful infographic about homeostasis and genetic inheritance." },
        { id: "biology-201-l01-a2", type: "animation", title: "Warm-up Animation", content: "Short animation introducing Biology vocabulary." }
      ]
    },
    {
      id: "biology-201-l02",
      title: "Genetic Patterns and Traits",
      type: "interactive",
      duration: 12,
      metadata: {
        prompts: [
          "Identify one core idea about homeostasis from this lesson.",
          "Explain where genetic inheritance appears in real life.",
          "Describe one question you still have about biological systems thinking."
        ]
      },
      interactiveActivities: [
        {
          id: "biology-201-l02-ia1",
          type: "drag_and_drop",
          title: "Practice Flow Builder",
          description: "Sort each action into Plan, Execute, or Reflect.",
          estimatedMinutes: 8,
          difficultyLevel: "easy",
          data: {
            targets: [
              { id: "plan", label: "Plan" },
              { id: "execute", label: "Execute" },
              { id: "reflect", label: "Reflect" }
            ],
            draggables: [
              { id: "d1", label: "Set a goal for homeostasis", correctTargetId: "plan" },
              { id: "d2", label: "Try one strategy for genetic inheritance", correctTargetId: "execute" },
              { id: "d3", label: "Record what worked and what to improve", correctTargetId: "reflect" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "biology-201-l02-a1", type: "practice", title: "Try It Board", content: "Complete a guided activity on genetic inheritance and write one reflection." }
      ]
    },
    {
      id: "biology-201-l03",
      title: "Checkpoint: Genetics and Systems",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "biology-201-l03-q1",
          text: "Which statement best explains homeostasis in Biology?",
          skillId: "biology-201-skill-core",
          options: [
            { id: "a", text: "It explains homeostasis using evidence from the lesson." },
            { id: "b", text: "It ignores how homeostasis works in practice." },
            { id: "c", text: "It focuses on an unrelated topic outside Biology." },
            { id: "d", text: "It repeats terms without showing meaning." }
          ],
          correctOptionId: "a"
        },
        {
          id: "biology-201-l03-q2",
          text: "What is the best first step when analyzing genetic inheritance?",
          skillId: "biology-201-skill-process",
          options: [
            { id: "a", text: "Define the goal and examine evidence for genetic inheritance." },
            { id: "b", text: "Guess quickly without checking evidence." },
            { id: "c", text: "Use data unrelated to genetic inheritance." },
            { id: "d", text: "Skip the context and jump to a conclusion." }
          ],
          correctOptionId: "a"
        },
        {
          id: "biology-201-l03-q3",
          text: "Which option shows strong reasoning about biological systems thinking?",
          skillId: "biology-201-skill-reasoning",
          options: [
            { id: "a", text: "Use examples and verify assumptions step by step." },
            { id: "b", text: "Ignore important details and edge cases." },
            { id: "c", text: "Use assumptions unrelated to biological systems thinking." },
            { id: "d", text: "Change the topic when evidence gets hard." }
          ],
          correctOptionId: "a"
        },
        {
          id: "biology-201-l03-q4",
          text: "Why is spaced review useful for Biology mastery?",
          skillId: "biology-201-skill-review",
          options: [
            { id: "a", text: "It strengthens memory and transfer over time" },
            { id: "b", text: "It creates confusion" },
            { id: "c", text: "It removes key facts" },
            { id: "d", text: "It has no value" }
          ],
          correctOptionId: "a"
        }
      ],
      interactiveActivities: [
        {
          id: "biology-201-l03-ia1",
          type: "matching_pairs",
          title: "Reasoning Match: Checkpoint: Genetics and Systems",
          description: "Match each error signal to the strongest correction strategy.",
          estimatedMinutes: 7,
          difficultyLevel: "medium",
          instructions: [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          data: {
            left: [
              { id: "l1", label: "Confusion about homeostasis" },
              { id: "l2", label: "Inconsistent approach to genetic inheritance" },
              { id: "l3", label: "Weak transfer of biological systems thinking under timing" }
            ],
            right: [
              { id: "r1", label: "Create a one-step concept summary with one worked example" },
              { id: "r2", label: "Use a checklist before choosing the final answer" },
              { id: "r3", label: "Retest the same target with a short timed sprint" }
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
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "biology-201-l03-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    },
    {
      id: "biology-201-l04",
      title: "Energy Flow in Ecosystems",
      type: "video",
      duration: 11,
      chunks: [
        {
          id: "biology-201-l04-c1",
          title: "Energy Flow in Ecosystems Focus",
          content: "This lesson deepens ecosystem interactions using structured reasoning. We move from concept understanding to applied decisions."
        },
        {
          id: "biology-201-l04-c2",
          title: "Method Steps",
          content: "Step 1: identify what is being asked. Step 2: choose a strategy aligned to ecosystem interactions. Step 3: justify with evidence."
        },
        {
          id: "biology-201-l04-c3",
          title: "Common Mistakes",
          content: "Common errors include skipping setup, using unrelated assumptions, or failing to verify the final result."
        },
        {
          id: "biology-201-l04-c4",
          title: "Independent Try",
          content: "Solve one similar item and compare your process to the lesson sequence."
        }
      ],
      flashcards: [
        { id: "biology-201-l04-f1", front: "ecosystem interactions", back: "State the target and pick a strategy before solving." },
        { id: "biology-201-l04-f2", front: "Step Sequence", back: "Goal -> Strategy -> Evidence -> Check." },
        { id: "biology-201-l04-f3", front: "Assumption Check", back: "Remove assumptions that are not supported by the prompt." },
        { id: "biology-201-l04-f4", front: "Process Match", back: "Your explanation should match the steps you actually used." }
      ],
      learningAids: [
        { id: "biology-201-l04-a1", type: "image", title: "Worked Example Sheet", content: "Step-by-step visuals for ecosystem interactions scenarios." }
      ]
    },
    {
      id: "biology-201-l05",
      title: "Population Change Drivers",
      type: "interactive",
      duration: 13,
      metadata: {
        prompts: [
          "Pick one challenge and outline your approach.",
          "Test your approach and record the result.",
          "Revise your approach and explain the change."
        ]
      },
      interactiveActivities: [
        {
          id: "biology-201-l05-ia1",
          type: "sorting_buckets",
          title: "Strategy Sort",
          description: "Sort study actions into Concept, Process, or Review lanes.",
          estimatedMinutes: 9,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "concept", label: "ecosystem interactions Concept" },
              { id: "process", label: "adaptation pressure Process" },
              { id: "review", label: "Review Loop" }
            ],
            items: [
              { id: "i1", label: "Write one definition in your own words", correctBucketId: "concept" },
              { id: "i2", label: "Follow the step-by-step method on a new example", correctBucketId: "process" },
              { id: "i3", label: "Retest the same skill tomorrow", correctBucketId: "review" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "biology-201-l05-a1", type: "animation", title: "Challenge Walkthrough", content: "Animated sequence for solving a ecosystem interactions challenge." }
      ]
    },
    {
      id: "biology-201-l06",
      title: "Checkpoint: Ecology Reasoning",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "biology-201-l06-q1",
          text: "Which statement best explains ecosystem interactions in Biology?",
          skillId: "biology-201-skill-core",
          options: [
            { id: "a", text: "It explains ecosystem interactions using evidence from the lesson." },
            { id: "b", text: "It ignores how ecosystem interactions works in practice." },
            { id: "c", text: "It focuses on an unrelated topic outside Biology." },
            { id: "d", text: "It repeats terms without showing meaning." }
          ],
          correctOptionId: "a"
        },
        {
          id: "biology-201-l06-q2",
          text: "What is the best first step when analyzing adaptation pressure?",
          skillId: "biology-201-skill-process",
          options: [
            { id: "a", text: "Define the goal and examine evidence for adaptation pressure." },
            { id: "b", text: "Guess quickly without checking evidence." },
            { id: "c", text: "Use data unrelated to adaptation pressure." },
            { id: "d", text: "Skip the context and jump to a conclusion." }
          ],
          correctOptionId: "a"
        },
        {
          id: "biology-201-l06-q3",
          text: "Which option shows strong reasoning about biological systems thinking?",
          skillId: "biology-201-skill-reasoning",
          options: [
            { id: "a", text: "Use examples and verify assumptions step by step." },
            { id: "b", text: "Ignore important details and edge cases." },
            { id: "c", text: "Use assumptions unrelated to biological systems thinking." },
            { id: "d", text: "Change the topic when evidence gets hard." }
          ],
          correctOptionId: "a"
        },
        {
          id: "biology-201-l06-q4",
          text: "Why is spaced review useful for Biology mastery?",
          skillId: "biology-201-skill-review",
          options: [
            { id: "a", text: "It strengthens memory and transfer over time" },
            { id: "b", text: "It creates confusion" },
            { id: "c", text: "It removes key facts" },
            { id: "d", text: "It has no value" }
          ],
          correctOptionId: "a"
        }
      ],
      interactiveActivities: [
        {
          id: "biology-201-l06-ia1",
          type: "matching_pairs",
          title: "Reasoning Match: Checkpoint: Ecology Reasoning",
          description: "Match each error signal to the strongest correction strategy.",
          estimatedMinutes: 7,
          difficultyLevel: "medium",
          instructions: [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          data: {
            left: [
              { id: "l1", label: "Confusion about ecosystem interactions" },
              { id: "l2", label: "Inconsistent approach to adaptation pressure" },
              { id: "l3", label: "Weak transfer of biological systems thinking under timing" }
            ],
            right: [
              { id: "r1", label: "Create a one-step concept summary with one worked example" },
              { id: "r2", label: "Use a checklist before choosing the final answer" },
              { id: "r3", label: "Retest the same target with a short timed sprint" }
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
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "biology-201-l06-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    },
    {
      id: "biology-201-l07",
      title: "Human Impact on Biodiversity",
      type: "video",
      duration: 12,
      chunks: [
        {
          id: "biology-201-l07-c1",
          title: "Human Impact on Biodiversity Setup",
          content: "Use adaptation pressure to organize your approach before starting. Planning first improves quality and speed."
        },
        {
          id: "biology-201-l07-c2",
          title: "Decision Rules",
          content: "When choices compete, use a simple rule: pick the option with strongest evidence and clearest link to the goal."
        },
        {
          id: "biology-201-l07-c3",
          title: "Quality Control",
          content: "Check for three things: accuracy, completeness, and alignment with the original objective."
        },
        {
          id: "biology-201-l07-c4",
          title: "Next-Step Plan",
          content: "Write one action to repeat and one action to improve in your next practice round."
        }
      ],
      flashcards: [
        { id: "biology-201-l07-f1", front: "adaptation pressure", back: "Use this as your organizing framework before execution." },
        { id: "biology-201-l07-f2", front: "Decision Rule", back: "Choose the option with strongest evidence-to-goal alignment." },
        { id: "biology-201-l07-f3", front: "Quality Control", back: "Accuracy + completeness + objective match." },
        { id: "biology-201-l07-f4", front: "Iteration", back: "Repeat what works; refine one weak step each cycle." }
      ],
      learningAids: [
        { id: "biology-201-l07-a1", type: "practice", title: "Project Planner", content: "Template for planning a mini project focused on adaptation pressure." }
      ]
    },
    {
      id: "biology-201-l08",
      title: "Biology Case Discussion",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "What did you learn most clearly?",
          "Where did you struggle and why?",
          "What is your next improvement target?"
        ]
      },
      interactiveActivities: [
        {
          id: "biology-201-l08-ia1",
          type: "matching_pairs",
          title: "Reflection Match",
          description: "Match each reflection prompt with the best follow-up action.",
          estimatedMinutes: 7,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "I keep missing one skill pattern" },
              { id: "l2", label: "I rush and make avoidable mistakes" },
              { id: "l3", label: "I understand in notes but miss in quizzes" }
            ],
            right: [
              { id: "r1", label: "Do a focused drill on that exact pattern" },
              { id: "r2", label: "Use a short checklist before submitting answers" },
              { id: "r3", label: "Repeat the skill in a timed re-check" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "biology-201-l08-a1", type: "mnemonic", title: "Reflection Cycle", content: "Remember Observe, Adjust, Repeat while practicing." }
      ]
    },
    {
      id: "biology-201-l09",
      title: "Review: Systems in Biology",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "biology-201-l09-q1",
          text: "Which statement best explains genetic inheritance in Biology?",
          skillId: "biology-201-skill-core",
          options: [
            { id: "a", text: "It explains genetic inheritance using evidence from the lesson." },
            { id: "b", text: "It ignores how genetic inheritance works in practice." },
            { id: "c", text: "It focuses on an unrelated topic outside Biology." },
            { id: "d", text: "It repeats terms without showing meaning." }
          ],
          correctOptionId: "a"
        },
        {
          id: "biology-201-l09-q2",
          text: "What is the best first step when analyzing adaptation pressure?",
          skillId: "biology-201-skill-process",
          options: [
            { id: "a", text: "Define the goal and examine evidence for adaptation pressure." },
            { id: "b", text: "Guess quickly without checking evidence." },
            { id: "c", text: "Use data unrelated to adaptation pressure." },
            { id: "d", text: "Skip the context and jump to a conclusion." }
          ],
          correctOptionId: "a"
        },
        {
          id: "biology-201-l09-q3",
          text: "Which option shows strong reasoning about biological systems thinking?",
          skillId: "biology-201-skill-reasoning",
          options: [
            { id: "a", text: "Use examples and verify assumptions step by step." },
            { id: "b", text: "Ignore important details and edge cases." },
            { id: "c", text: "Use assumptions unrelated to biological systems thinking." },
            { id: "d", text: "Change the topic when evidence gets hard." }
          ],
          correctOptionId: "a"
        },
        {
          id: "biology-201-l09-q4",
          text: "Why is spaced review useful for Biology mastery?",
          skillId: "biology-201-skill-review",
          options: [
            { id: "a", text: "It strengthens memory and transfer over time" },
            { id: "b", text: "It creates confusion" },
            { id: "c", text: "It removes key facts" },
            { id: "d", text: "It has no value" }
          ],
          correctOptionId: "a"
        }
      ],
      interactiveActivities: [
        {
          id: "biology-201-l09-ia1",
          type: "matching_pairs",
          title: "Reasoning Match: Review: Systems in Biology",
          description: "Match each error signal to the strongest correction strategy.",
          estimatedMinutes: 7,
          difficultyLevel: "medium",
          instructions: [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          data: {
            left: [
              { id: "l1", label: "Confusion about genetic inheritance" },
              { id: "l2", label: "Inconsistent approach to adaptation pressure" },
              { id: "l3", label: "Weak transfer of biological systems thinking under timing" }
            ],
            right: [
              { id: "r1", label: "Create a one-step concept summary with one worked example" },
              { id: "r2", label: "Use a checklist before choosing the final answer" },
              { id: "r3", label: "Retest the same target with a short timed sprint" }
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
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "biology-201-l09-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    },
    {
      id: "biology-201-l10",
      title: "Mastery: Biology II",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "biology-201-l10-q1",
          text: "Which statement best explains homeostasis in Biology?",
          skillId: "biology-201-skill-core",
          options: [
            { id: "a", text: "It explains homeostasis using evidence from the lesson." },
            { id: "b", text: "It ignores how homeostasis works in practice." },
            { id: "c", text: "It focuses on an unrelated topic outside Biology." },
            { id: "d", text: "It repeats terms without showing meaning." }
          ],
          correctOptionId: "a"
        },
        {
          id: "biology-201-l10-q2",
          text: "What is the best first step when analyzing ecosystem interactions?",
          skillId: "biology-201-skill-process",
          options: [
            { id: "a", text: "Define the goal and examine evidence for ecosystem interactions." },
            { id: "b", text: "Guess quickly without checking evidence." },
            { id: "c", text: "Use data unrelated to ecosystem interactions." },
            { id: "d", text: "Skip the context and jump to a conclusion." }
          ],
          correctOptionId: "a"
        },
        {
          id: "biology-201-l10-q3",
          text: "Which option shows strong reasoning about biological systems thinking?",
          skillId: "biology-201-skill-reasoning",
          options: [
            { id: "a", text: "Use examples and verify assumptions step by step." },
            { id: "b", text: "Ignore important details and edge cases." },
            { id: "c", text: "Use assumptions unrelated to biological systems thinking." },
            { id: "d", text: "Change the topic when evidence gets hard." }
          ],
          correctOptionId: "a"
        },
        {
          id: "biology-201-l10-q4",
          text: "Why is spaced review useful for Biology mastery?",
          skillId: "biology-201-skill-review",
          options: [
            { id: "a", text: "It strengthens memory and transfer over time" },
            { id: "b", text: "It creates confusion" },
            { id: "c", text: "It removes key facts" },
            { id: "d", text: "It has no value" }
          ],
          correctOptionId: "a"
        }
      ],
      interactiveActivities: [
        {
          id: "biology-201-l10-ia1",
          type: "matching_pairs",
          title: "Reasoning Match: Mastery: Biology II",
          description: "Match each error signal to the strongest correction strategy.",
          estimatedMinutes: 7,
          difficultyLevel: "medium",
          instructions: [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          data: {
            left: [
              { id: "l1", label: "Confusion about homeostasis" },
              { id: "l2", label: "Inconsistent approach to ecosystem interactions" },
              { id: "l3", label: "Weak transfer of biological systems thinking under timing" }
            ],
            right: [
              { id: "r1", label: "Create a one-step concept summary with one worked example" },
              { id: "r2", label: "Use a checklist before choosing the final answer" },
              { id: "r3", label: "Retest the same target with a short timed sprint" }
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
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "biology-201-l10-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    },
    {
      id: "biology-201-l11",
      title: "Applied Biology Challenge Studio",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using ecosystem interactions.",
          "Document your transfer plan for the next timed check."
        ]
      },
      interactiveActivities: [
        {
          id: "biology-201-l11-ia1",
          type: "sorting_buckets",
          title: "Transfer Ladder",
          description: "Sort actions into Diagnose, Fix, and Transfer phases.",
          estimatedMinutes: 9,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "diagnose", label: "Diagnose" },
              { id: "fix", label: "Fix" },
              { id: "transfer", label: "Transfer" }
            ],
            items: [
              { id: "i1", label: "Tag repeated mistakes in genetic inheritance", correctBucketId: "diagnose" },
              { id: "i2", label: "Rework one missed item with full reasoning", correctBucketId: "fix" },
              { id: "i3", label: "Retest with a timed mini-check on adaptation pressure", correctBucketId: "transfer" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "biology-201-l11-a1", type: "practice", title: "Correction Loop Card", content: "Use Diagnose, Fix, Transfer for each difficult problem." }
      ]
    },
    {
      id: "biology-201-l12",
      title: "Biology II Mastery Applied Retest",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "biology-201-l12-q1",
          text: "Which statement best explains homeostasis in Biology?",
          skillId: "biology-201-skill-core",
          options: [
            { id: "a", text: "It explains homeostasis using evidence from the lesson." },
            { id: "b", text: "It ignores how homeostasis works in practice." },
            { id: "c", text: "It focuses on an unrelated topic outside Biology." },
            { id: "d", text: "It repeats terms without showing meaning." }
          ],
          correctOptionId: "a"
        },
        {
          id: "biology-201-l12-q2",
          text: "What is the best first step when analyzing adaptation pressure?",
          skillId: "biology-201-skill-process",
          options: [
            { id: "a", text: "Define the goal and examine evidence for adaptation pressure." },
            { id: "b", text: "Guess quickly without checking evidence." },
            { id: "c", text: "Use data unrelated to adaptation pressure." },
            { id: "d", text: "Skip the context and jump to a conclusion." }
          ],
          correctOptionId: "a"
        },
        {
          id: "biology-201-l12-q3",
          text: "Which option shows strong reasoning about biological systems thinking?",
          skillId: "biology-201-skill-reasoning",
          options: [
            { id: "a", text: "Use examples and verify assumptions step by step." },
            { id: "b", text: "Ignore important details and edge cases." },
            { id: "c", text: "Use assumptions unrelated to biological systems thinking." },
            { id: "d", text: "Change the topic when evidence gets hard." }
          ],
          correctOptionId: "a"
        },
        {
          id: "biology-201-l12-q4",
          text: "Why is spaced review useful for Biology mastery?",
          skillId: "biology-201-skill-review",
          options: [
            { id: "a", text: "It strengthens memory and transfer over time" },
            { id: "b", text: "It creates confusion" },
            { id: "c", text: "It removes key facts" },
            { id: "d", text: "It has no value" }
          ],
          correctOptionId: "a"
        }
      ],
      interactiveActivities: [
        {
          id: "biology-201-l12-ia1",
          type: "matching_pairs",
          title: "Reasoning Match: Biology II Mastery Applied Retest",
          description: "Match each error signal to the strongest correction strategy.",
          estimatedMinutes: 7,
          difficultyLevel: "medium",
          instructions: [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          data: {
            left: [
              { id: "l1", label: "Confusion about homeostasis" },
              { id: "l2", label: "Inconsistent approach to adaptation pressure" },
              { id: "l3", label: "Weak transfer of biological systems thinking under timing" }
            ],
            right: [
              { id: "r1", label: "Create a one-step concept summary with one worked example" },
              { id: "r2", label: "Use a checklist before choosing the final answer" },
              { id: "r3", label: "Retest the same target with a short timed sprint" }
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
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "biology-201-l12-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    },
    {
      id: "biology-201-l13",
      title: "Biology Scenario Lab",
      type: "video",
      duration: 12,
      chunks: [
        {
          id: "biology-201-l13-c1",
          title: "Scenario Brief",
          content: "This scenario combines homeostasis, ecosystem interactions, and adaptation pressure in one applied challenge."
        },
        {
          id: "biology-201-l13-c2",
          title: "Plan the Approach",
          content: "Break the scenario into smaller decisions, then assign one strategy to each decision point."
        },
        {
          id: "biology-201-l13-c3",
          title: "Execute and Justify",
          content: "Apply the plan and explain each move with evidence, not guesses."
        },
        {
          id: "biology-201-l13-c4",
          title: "Evaluate Outcome",
          content: "Compare your result to the target and identify what to keep versus what to adjust."
        }
      ],
      flashcards: [
        { id: "biology-201-l13-f1", front: "Scenario Planning", back: "Split a complex task into clear decision points." },
        { id: "biology-201-l13-f2", front: "Evidence Link", back: "Each step should connect to evidence in the scenario." },
        { id: "biology-201-l13-f3", front: "Adjustment Loop", back: "Use outcome checks to refine your next attempt." },
        { id: "biology-201-l13-f4", front: "Applied Mastery", back: "Mastery means transferring the process to a new context." }
      ],
      learningAids: [
        { id: "biology-201-l13-a1", type: "image", title: "Scenario Map", content: "A real-world scenario map connecting homeostasis, ecosystem interactions, and adaptation pressure." },
        { id: "biology-201-l13-a2", type: "practice", title: "Mini Case Prompt", content: "Apply one strategy to a new case and explain your reasoning." }
      ]
    },
    {
      id: "biology-201-l14",
      title: "Biology Coaching Clinic",
      type: "interactive",
      duration: 13,
      metadata: {
        prompts: [
          "Identify one repeated error pattern from your recent work.",
          "Choose the best correction routine for that pattern.",
          "Write a transfer goal for your next timed check."
        ]
      },
      interactiveActivities: [
        {
          id: "biology-201-l14-ia1",
          type: "matching_pairs",
          title: "Error to Fix Match",
          description: "Match each error signal to the highest-impact correction action.",
          estimatedMinutes: 8,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "Repeated miss on homeostasis setup" },
              { id: "l2", label: "Losses due to rushed adaptation pressure decisions" },
              { id: "l3", label: "Correct in notes but weak transfer in new tasks" }
            ],
            right: [
              { id: "r1", label: "Rebuild setup steps and retest one parallel item" },
              { id: "r2", label: "Use checkpoint pacing + verify before submit" },
              { id: "r3", label: "Pair correction with one timed transfer item" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "biology-201-l14-a1", type: "mnemonic", title: "Clinic Loop", content: "Diagnose, Correct, Transfer." }
      ]
    },
    {
      id: "biology-201-l15",
      title: "Biology II Mastery Mastery Sprint",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "biology-201-l15-q1",
          text: "Which statement best explains genetic inheritance in Biology?",
          skillId: "biology-201-skill-core",
          options: [
            { id: "a", text: "It explains genetic inheritance using evidence from the lesson." },
            { id: "b", text: "It ignores how genetic inheritance works in practice." },
            { id: "c", text: "It focuses on an unrelated topic outside Biology." },
            { id: "d", text: "It repeats terms without showing meaning." }
          ],
          correctOptionId: "a"
        },
        {
          id: "biology-201-l15-q2",
          text: "What is the best first step when analyzing ecosystem interactions?",
          skillId: "biology-201-skill-process",
          options: [
            { id: "a", text: "Define the goal and examine evidence for ecosystem interactions." },
            { id: "b", text: "Guess quickly without checking evidence." },
            { id: "c", text: "Use data unrelated to ecosystem interactions." },
            { id: "d", text: "Skip the context and jump to a conclusion." }
          ],
          correctOptionId: "a"
        },
        {
          id: "biology-201-l15-q3",
          text: "Which option shows strong reasoning about biological systems thinking?",
          skillId: "biology-201-skill-reasoning",
          options: [
            { id: "a", text: "Use examples and verify assumptions step by step." },
            { id: "b", text: "Ignore important details and edge cases." },
            { id: "c", text: "Use assumptions unrelated to biological systems thinking." },
            { id: "d", text: "Change the topic when evidence gets hard." }
          ],
          correctOptionId: "a"
        },
        {
          id: "biology-201-l15-q4",
          text: "Why is spaced review useful for Biology mastery?",
          skillId: "biology-201-skill-review",
          options: [
            { id: "a", text: "It strengthens memory and transfer over time" },
            { id: "b", text: "It creates confusion" },
            { id: "c", text: "It removes key facts" },
            { id: "d", text: "It has no value" }
          ],
          correctOptionId: "a"
        }
      ],
      interactiveActivities: [
        {
          id: "biology-201-l15-ia1",
          type: "matching_pairs",
          title: "Reasoning Match: Biology II Mastery Mastery Sprint",
          description: "Match each error signal to the strongest correction strategy.",
          estimatedMinutes: 7,
          difficultyLevel: "medium",
          instructions: [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          data: {
            left: [
              { id: "l1", label: "Confusion about genetic inheritance" },
              { id: "l2", label: "Inconsistent approach to ecosystem interactions" },
              { id: "l3", label: "Weak transfer of biological systems thinking under timing" }
            ],
            right: [
              { id: "r1", label: "Create a one-step concept summary with one worked example" },
              { id: "r2", label: "Use a checklist before choosing the final answer" },
              { id: "r3", label: "Retest the same target with a short timed sprint" }
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
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "biology-201-l15-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    }
  ],
};
