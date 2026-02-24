import type { LearningModule } from "@/lib/modules/types";

export const AdvancedMath301Module: LearningModule = {
  id: "advanced-math-301",
  title: "Advanced Math Modeling",
  description: "Apply algebra, functions, and probability to rigorous modeling and decision scenarios.",
  subject: "Advanced Math",
  tags: ["core", "curriculum", "interactive"],
  minAge: 7,
  maxAge: 18,
  moduleVersion: "1.1.0",
  version: "1.1.0",
  learningObjectives: [
    "Understand core concepts in Advanced Math",
    "Apply Quantitative Decisions strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  lessons: [
    {
      id: "advanced-math-301-l01",
      title: "Modeling with Functions",
      type: "video",
      duration: 10,
      chunks: [
        {
          id: "advanced-math-301-l01-c1",
          title: "Modeling with Functions Overview",
          content: "In this lesson, we focus on function modeling through the lens of advanced mathematical modeling. The goal is to recognize what strong reasoning looks like before solving."
        },
        {
          id: "advanced-math-301-l01-c2",
          title: "Core Concept",
          content: "function modeling and optimization work together. Start by naming the main target, then identify the evidence or steps that support it."
        },
        {
          id: "advanced-math-301-l01-c3",
          title: "Worked Example",
          content: "Walk through one guided example: define the goal, apply a strategy for optimization, then verify the result with a quick check."
        },
        {
          id: "advanced-math-301-l01-c4",
          title: "Transfer Prompt",
          content: "Apply the same process to a new scenario and explain why your approach is valid in one clear sentence."
        }
      ],
      flashcards: [
        { id: "advanced-math-301-l01-f1", front: "function modeling", back: "A central target skill in this module. Name it before solving." },
        { id: "advanced-math-301-l01-f2", front: "optimization", back: "Use this as the method step after defining the goal." },
        { id: "advanced-math-301-l01-f3", front: "Verification", back: "Check that your result matches the original goal and constraints." },
        { id: "advanced-math-301-l01-f4", front: "Transfer", back: "Use the same strategy on a new item to confirm true mastery." }
      ],
      learningAids: [
        { id: "advanced-math-301-l01-a1", type: "image", title: "Concept Poster", content: "A colorful infographic about function modeling and optimization." },
        { id: "advanced-math-301-l01-a2", type: "animation", title: "Warm-up Animation", content: "Short animation introducing Advanced Math vocabulary." }
      ]
    },
    {
      id: "advanced-math-301-l02",
      title: "Parameter Changes and Sensitivity",
      type: "interactive",
      duration: 12,
      metadata: {
        prompts: [
          "Identify one core idea about function modeling from this lesson.",
          "Explain where optimization appears in real life.",
          "Describe one question you still have about advanced mathematical modeling."
        ]
      },
      interactiveActivities: [
        {
          id: "advanced-math-301-l02-ia1",
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
              { id: "d1", label: "Set a goal for function modeling", correctTargetId: "plan" },
              { id: "d2", label: "Try one strategy for optimization", correctTargetId: "execute" },
              { id: "d3", label: "Record what worked and what to improve", correctTargetId: "reflect" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "advanced-math-301-l02-a1", type: "practice", title: "Try It Board", content: "Complete a guided activity on optimization and write one reflection." }
      ]
    },
    {
      id: "advanced-math-301-l03",
      title: "Checkpoint: Function Modeling",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "advanced-math-301-l03-q1",
          text: "Which statement best explains function modeling in Advanced Math?",
          skillId: "advanced-math-301-skill-core",
          options: [
            { id: "a", text: "It explains function modeling using evidence from the lesson." },
            { id: "b", text: "It ignores how function modeling works in practice." },
            { id: "c", text: "It focuses on an unrelated topic outside Advanced Math." },
            { id: "d", text: "It repeats terms without showing meaning." }
          ],
          correctOptionId: "a"
        },
        {
          id: "advanced-math-301-l03-q2",
          text: "What is the best first step when analyzing optimization?",
          skillId: "advanced-math-301-skill-process",
          options: [
            { id: "a", text: "Define the goal and examine evidence for optimization." },
            { id: "b", text: "Guess quickly without checking evidence." },
            { id: "c", text: "Use data unrelated to optimization." },
            { id: "d", text: "Skip the context and jump to a conclusion." }
          ],
          correctOptionId: "a"
        },
        {
          id: "advanced-math-301-l03-q3",
          text: "Which option shows strong reasoning about advanced mathematical modeling?",
          skillId: "advanced-math-301-skill-reasoning",
          options: [
            { id: "a", text: "Use examples and verify assumptions step by step." },
            { id: "b", text: "Ignore important details and edge cases." },
            { id: "c", text: "Use assumptions unrelated to advanced mathematical modeling." },
            { id: "d", text: "Change the topic when evidence gets hard." }
          ],
          correctOptionId: "a"
        },
        {
          id: "advanced-math-301-l03-q4",
          text: "Why is spaced review useful for Advanced Math mastery?",
          skillId: "advanced-math-301-skill-review",
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
          id: "advanced-math-301-l03-ia1",
          type: "matching_pairs",
          title: "Reasoning Match: Checkpoint: Function Modeling",
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
              { id: "l1", label: "Confusion about function modeling" },
              { id: "l2", label: "Inconsistent approach to optimization" },
              { id: "l3", label: "Weak transfer of advanced mathematical modeling under timing" }
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
        { id: "advanced-math-301-l03-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    },
    {
      id: "advanced-math-301-l04",
      title: "Optimization Strategy",
      type: "video",
      duration: 11,
      chunks: [
        {
          id: "advanced-math-301-l04-c1",
          title: "Optimization Strategy Focus",
          content: "This lesson deepens probabilistic reasoning using structured reasoning. We move from concept understanding to applied decisions."
        },
        {
          id: "advanced-math-301-l04-c2",
          title: "Method Steps",
          content: "Step 1: identify what is being asked. Step 2: choose a strategy aligned to probabilistic reasoning. Step 3: justify with evidence."
        },
        {
          id: "advanced-math-301-l04-c3",
          title: "Common Mistakes",
          content: "Common errors include skipping setup, using unrelated assumptions, or failing to verify the final result."
        },
        {
          id: "advanced-math-301-l04-c4",
          title: "Independent Try",
          content: "Solve one similar item and compare your process to the lesson sequence."
        }
      ],
      flashcards: [
        { id: "advanced-math-301-l04-f1", front: "probabilistic reasoning", back: "State the target and pick a strategy before solving." },
        { id: "advanced-math-301-l04-f2", front: "Step Sequence", back: "Goal -> Strategy -> Evidence -> Check." },
        { id: "advanced-math-301-l04-f3", front: "Assumption Check", back: "Remove assumptions that are not supported by the prompt." },
        { id: "advanced-math-301-l04-f4", front: "Process Match", back: "Your explanation should match the steps you actually used." }
      ],
      learningAids: [
        { id: "advanced-math-301-l04-a1", type: "image", title: "Worked Example Sheet", content: "Step-by-step visuals for probabilistic reasoning scenarios." }
      ]
    },
    {
      id: "advanced-math-301-l05",
      title: "Uncertainty and Probability Models",
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
          id: "advanced-math-301-l05-ia1",
          type: "sorting_buckets",
          title: "Strategy Sort",
          description: "Sort study actions into Concept, Process, or Review lanes.",
          estimatedMinutes: 9,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "concept", label: "probabilistic reasoning Concept" },
              { id: "process", label: "proof structure Process" },
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
        { id: "advanced-math-301-l05-a1", type: "animation", title: "Challenge Walkthrough", content: "Animated sequence for solving a probabilistic reasoning challenge." }
      ]
    },
    {
      id: "advanced-math-301-l06",
      title: "Checkpoint: Quantitative Decisions",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "advanced-math-301-l06-q1",
          text: "Which statement best explains probabilistic reasoning in Advanced Math?",
          skillId: "advanced-math-301-skill-core",
          options: [
            { id: "a", text: "It explains probabilistic reasoning using evidence from the lesson." },
            { id: "b", text: "It ignores how probabilistic reasoning works in practice." },
            { id: "c", text: "It focuses on an unrelated topic outside Advanced Math." },
            { id: "d", text: "It repeats terms without showing meaning." }
          ],
          correctOptionId: "a"
        },
        {
          id: "advanced-math-301-l06-q2",
          text: "What is the best first step when analyzing proof structure?",
          skillId: "advanced-math-301-skill-process",
          options: [
            { id: "a", text: "Define the goal and examine evidence for proof structure." },
            { id: "b", text: "Guess quickly without checking evidence." },
            { id: "c", text: "Use data unrelated to proof structure." },
            { id: "d", text: "Skip the context and jump to a conclusion." }
          ],
          correctOptionId: "a"
        },
        {
          id: "advanced-math-301-l06-q3",
          text: "Which option shows strong reasoning about advanced mathematical modeling?",
          skillId: "advanced-math-301-skill-reasoning",
          options: [
            { id: "a", text: "Use examples and verify assumptions step by step." },
            { id: "b", text: "Ignore important details and edge cases." },
            { id: "c", text: "Use assumptions unrelated to advanced mathematical modeling." },
            { id: "d", text: "Change the topic when evidence gets hard." }
          ],
          correctOptionId: "a"
        },
        {
          id: "advanced-math-301-l06-q4",
          text: "Why is spaced review useful for Advanced Math mastery?",
          skillId: "advanced-math-301-skill-review",
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
          id: "advanced-math-301-l06-ia1",
          type: "matching_pairs",
          title: "Reasoning Match: Checkpoint: Quantitative Decisions",
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
              { id: "l1", label: "Confusion about probabilistic reasoning" },
              { id: "l2", label: "Inconsistent approach to proof structure" },
              { id: "l3", label: "Weak transfer of advanced mathematical modeling under timing" }
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
        { id: "advanced-math-301-l06-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    },
    {
      id: "advanced-math-301-l07",
      title: "Argument and Proof Moves",
      type: "video",
      duration: 12,
      chunks: [
        {
          id: "advanced-math-301-l07-c1",
          title: "Argument and Proof Moves Setup",
          content: "Use proof structure to organize your approach before starting. Planning first improves quality and speed."
        },
        {
          id: "advanced-math-301-l07-c2",
          title: "Decision Rules",
          content: "When choices compete, use a simple rule: pick the option with strongest evidence and clearest link to the goal."
        },
        {
          id: "advanced-math-301-l07-c3",
          title: "Quality Control",
          content: "Check for three things: accuracy, completeness, and alignment with the original objective."
        },
        {
          id: "advanced-math-301-l07-c4",
          title: "Next-Step Plan",
          content: "Write one action to repeat and one action to improve in your next practice round."
        }
      ],
      flashcards: [
        { id: "advanced-math-301-l07-f1", front: "proof structure", back: "Use this as your organizing framework before execution." },
        { id: "advanced-math-301-l07-f2", front: "Decision Rule", back: "Choose the option with strongest evidence-to-goal alignment." },
        { id: "advanced-math-301-l07-f3", front: "Quality Control", back: "Accuracy + completeness + objective match." },
        { id: "advanced-math-301-l07-f4", front: "Iteration", back: "Repeat what works; refine one weak step each cycle." }
      ],
      learningAids: [
        { id: "advanced-math-301-l07-a1", type: "practice", title: "Project Planner", content: "Template for planning a mini project focused on proof structure." }
      ]
    },
    {
      id: "advanced-math-301-l08",
      title: "Model Critique Workshop",
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
          id: "advanced-math-301-l08-ia1",
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
        { id: "advanced-math-301-l08-a1", type: "mnemonic", title: "Reflection Cycle", content: "Remember Observe, Adjust, Repeat while practicing." }
      ]
    },
    {
      id: "advanced-math-301-l09",
      title: "Review: Advanced Math Models",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "advanced-math-301-l09-q1",
          text: "Which statement best explains optimization in Advanced Math?",
          skillId: "advanced-math-301-skill-core",
          options: [
            { id: "a", text: "It explains optimization using evidence from the lesson." },
            { id: "b", text: "It ignores how optimization works in practice." },
            { id: "c", text: "It focuses on an unrelated topic outside Advanced Math." },
            { id: "d", text: "It repeats terms without showing meaning." }
          ],
          correctOptionId: "a"
        },
        {
          id: "advanced-math-301-l09-q2",
          text: "What is the best first step when analyzing proof structure?",
          skillId: "advanced-math-301-skill-process",
          options: [
            { id: "a", text: "Define the goal and examine evidence for proof structure." },
            { id: "b", text: "Guess quickly without checking evidence." },
            { id: "c", text: "Use data unrelated to proof structure." },
            { id: "d", text: "Skip the context and jump to a conclusion." }
          ],
          correctOptionId: "a"
        },
        {
          id: "advanced-math-301-l09-q3",
          text: "Which option shows strong reasoning about advanced mathematical modeling?",
          skillId: "advanced-math-301-skill-reasoning",
          options: [
            { id: "a", text: "Use examples and verify assumptions step by step." },
            { id: "b", text: "Ignore important details and edge cases." },
            { id: "c", text: "Use assumptions unrelated to advanced mathematical modeling." },
            { id: "d", text: "Change the topic when evidence gets hard." }
          ],
          correctOptionId: "a"
        },
        {
          id: "advanced-math-301-l09-q4",
          text: "Why is spaced review useful for Advanced Math mastery?",
          skillId: "advanced-math-301-skill-review",
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
          id: "advanced-math-301-l09-ia1",
          type: "matching_pairs",
          title: "Reasoning Match: Review: Advanced Math Models",
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
              { id: "l1", label: "Confusion about optimization" },
              { id: "l2", label: "Inconsistent approach to proof structure" },
              { id: "l3", label: "Weak transfer of advanced mathematical modeling under timing" }
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
        { id: "advanced-math-301-l09-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    },
    {
      id: "advanced-math-301-l10",
      title: "Mastery: Advanced Math III",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "advanced-math-301-l10-q1",
          text: "Which statement best explains function modeling in Advanced Math?",
          skillId: "advanced-math-301-skill-core",
          options: [
            { id: "a", text: "It explains function modeling using evidence from the lesson." },
            { id: "b", text: "It ignores how function modeling works in practice." },
            { id: "c", text: "It focuses on an unrelated topic outside Advanced Math." },
            { id: "d", text: "It repeats terms without showing meaning." }
          ],
          correctOptionId: "a"
        },
        {
          id: "advanced-math-301-l10-q2",
          text: "What is the best first step when analyzing probabilistic reasoning?",
          skillId: "advanced-math-301-skill-process",
          options: [
            { id: "a", text: "Define the goal and examine evidence for probabilistic reasoning." },
            { id: "b", text: "Guess quickly without checking evidence." },
            { id: "c", text: "Use data unrelated to probabilistic reasoning." },
            { id: "d", text: "Skip the context and jump to a conclusion." }
          ],
          correctOptionId: "a"
        },
        {
          id: "advanced-math-301-l10-q3",
          text: "Which option shows strong reasoning about advanced mathematical modeling?",
          skillId: "advanced-math-301-skill-reasoning",
          options: [
            { id: "a", text: "Use examples and verify assumptions step by step." },
            { id: "b", text: "Ignore important details and edge cases." },
            { id: "c", text: "Use assumptions unrelated to advanced mathematical modeling." },
            { id: "d", text: "Change the topic when evidence gets hard." }
          ],
          correctOptionId: "a"
        },
        {
          id: "advanced-math-301-l10-q4",
          text: "Why is spaced review useful for Advanced Math mastery?",
          skillId: "advanced-math-301-skill-review",
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
          id: "advanced-math-301-l10-ia1",
          type: "matching_pairs",
          title: "Reasoning Match: Mastery: Advanced Math III",
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
              { id: "l1", label: "Confusion about function modeling" },
              { id: "l2", label: "Inconsistent approach to probabilistic reasoning" },
              { id: "l3", label: "Weak transfer of advanced mathematical modeling under timing" }
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
        { id: "advanced-math-301-l10-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    },
    {
      id: "advanced-math-301-l11",
      title: "Applied Advanced Math Challenge Studio",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using probabilistic reasoning.",
          "Document your transfer plan for the next timed check."
        ]
      },
      interactiveActivities: [
        {
          id: "advanced-math-301-l11-ia1",
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
              { id: "i1", label: "Tag repeated mistakes in optimization", correctBucketId: "diagnose" },
              { id: "i2", label: "Rework one missed item with full reasoning", correctBucketId: "fix" },
              { id: "i3", label: "Retest with a timed mini-check on proof structure", correctBucketId: "transfer" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "advanced-math-301-l11-a1", type: "practice", title: "Correction Loop Card", content: "Use Diagnose, Fix, Transfer for each difficult problem." }
      ]
    },
    {
      id: "advanced-math-301-l12",
      title: "Advanced Math III Mastery Applied Retest",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "advanced-math-301-l12-q1",
          text: "Which statement best explains function modeling in Advanced Math?",
          skillId: "advanced-math-301-skill-core",
          options: [
            { id: "a", text: "It explains function modeling using evidence from the lesson." },
            { id: "b", text: "It ignores how function modeling works in practice." },
            { id: "c", text: "It focuses on an unrelated topic outside Advanced Math." },
            { id: "d", text: "It repeats terms without showing meaning." }
          ],
          correctOptionId: "a"
        },
        {
          id: "advanced-math-301-l12-q2",
          text: "What is the best first step when analyzing proof structure?",
          skillId: "advanced-math-301-skill-process",
          options: [
            { id: "a", text: "Define the goal and examine evidence for proof structure." },
            { id: "b", text: "Guess quickly without checking evidence." },
            { id: "c", text: "Use data unrelated to proof structure." },
            { id: "d", text: "Skip the context and jump to a conclusion." }
          ],
          correctOptionId: "a"
        },
        {
          id: "advanced-math-301-l12-q3",
          text: "Which option shows strong reasoning about advanced mathematical modeling?",
          skillId: "advanced-math-301-skill-reasoning",
          options: [
            { id: "a", text: "Use examples and verify assumptions step by step." },
            { id: "b", text: "Ignore important details and edge cases." },
            { id: "c", text: "Use assumptions unrelated to advanced mathematical modeling." },
            { id: "d", text: "Change the topic when evidence gets hard." }
          ],
          correctOptionId: "a"
        },
        {
          id: "advanced-math-301-l12-q4",
          text: "Why is spaced review useful for Advanced Math mastery?",
          skillId: "advanced-math-301-skill-review",
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
          id: "advanced-math-301-l12-ia1",
          type: "matching_pairs",
          title: "Reasoning Match: Advanced Math III Mastery Applied Retest",
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
              { id: "l1", label: "Confusion about function modeling" },
              { id: "l2", label: "Inconsistent approach to proof structure" },
              { id: "l3", label: "Weak transfer of advanced mathematical modeling under timing" }
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
        { id: "advanced-math-301-l12-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    },
    {
      id: "advanced-math-301-l13",
      title: "Advanced Math Scenario Lab",
      type: "video",
      duration: 12,
      chunks: [
        {
          id: "advanced-math-301-l13-c1",
          title: "Scenario Brief",
          content: "This scenario combines function modeling, probabilistic reasoning, and proof structure in one applied challenge."
        },
        {
          id: "advanced-math-301-l13-c2",
          title: "Plan the Approach",
          content: "Break the scenario into smaller decisions, then assign one strategy to each decision point."
        },
        {
          id: "advanced-math-301-l13-c3",
          title: "Execute and Justify",
          content: "Apply the plan and explain each move with evidence, not guesses."
        },
        {
          id: "advanced-math-301-l13-c4",
          title: "Evaluate Outcome",
          content: "Compare your result to the target and identify what to keep versus what to adjust."
        }
      ],
      flashcards: [
        { id: "advanced-math-301-l13-f1", front: "Scenario Planning", back: "Split a complex task into clear decision points." },
        { id: "advanced-math-301-l13-f2", front: "Evidence Link", back: "Each step should connect to evidence in the scenario." },
        { id: "advanced-math-301-l13-f3", front: "Adjustment Loop", back: "Use outcome checks to refine your next attempt." },
        { id: "advanced-math-301-l13-f4", front: "Applied Mastery", back: "Mastery means transferring the process to a new context." }
      ],
      learningAids: [
        { id: "advanced-math-301-l13-a1", type: "image", title: "Scenario Map", content: "A real-world scenario map connecting function modeling, probabilistic reasoning, and proof structure." },
        { id: "advanced-math-301-l13-a2", type: "practice", title: "Mini Case Prompt", content: "Apply one strategy to a new case and explain your reasoning." }
      ]
    },
    {
      id: "advanced-math-301-l14",
      title: "Advanced Math Coaching Clinic",
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
          id: "advanced-math-301-l14-ia1",
          type: "matching_pairs",
          title: "Error to Fix Match",
          description: "Match each error signal to the highest-impact correction action.",
          estimatedMinutes: 8,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "Repeated miss on function modeling setup" },
              { id: "l2", label: "Losses due to rushed proof structure decisions" },
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
        { id: "advanced-math-301-l14-a1", type: "mnemonic", title: "Clinic Loop", content: "Diagnose, Correct, Transfer." }
      ]
    },
    {
      id: "advanced-math-301-l15",
      title: "Advanced Math III Mastery Mastery Sprint",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "advanced-math-301-l15-q1",
          text: "Which statement best explains optimization in Advanced Math?",
          skillId: "advanced-math-301-skill-core",
          options: [
            { id: "a", text: "It explains optimization using evidence from the lesson." },
            { id: "b", text: "It ignores how optimization works in practice." },
            { id: "c", text: "It focuses on an unrelated topic outside Advanced Math." },
            { id: "d", text: "It repeats terms without showing meaning." }
          ],
          correctOptionId: "a"
        },
        {
          id: "advanced-math-301-l15-q2",
          text: "What is the best first step when analyzing probabilistic reasoning?",
          skillId: "advanced-math-301-skill-process",
          options: [
            { id: "a", text: "Define the goal and examine evidence for probabilistic reasoning." },
            { id: "b", text: "Guess quickly without checking evidence." },
            { id: "c", text: "Use data unrelated to probabilistic reasoning." },
            { id: "d", text: "Skip the context and jump to a conclusion." }
          ],
          correctOptionId: "a"
        },
        {
          id: "advanced-math-301-l15-q3",
          text: "Which option shows strong reasoning about advanced mathematical modeling?",
          skillId: "advanced-math-301-skill-reasoning",
          options: [
            { id: "a", text: "Use examples and verify assumptions step by step." },
            { id: "b", text: "Ignore important details and edge cases." },
            { id: "c", text: "Use assumptions unrelated to advanced mathematical modeling." },
            { id: "d", text: "Change the topic when evidence gets hard." }
          ],
          correctOptionId: "a"
        },
        {
          id: "advanced-math-301-l15-q4",
          text: "Why is spaced review useful for Advanced Math mastery?",
          skillId: "advanced-math-301-skill-review",
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
          id: "advanced-math-301-l15-ia1",
          type: "matching_pairs",
          title: "Reasoning Match: Advanced Math III Mastery Mastery Sprint",
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
              { id: "l1", label: "Confusion about optimization" },
              { id: "l2", label: "Inconsistent approach to probabilistic reasoning" },
              { id: "l3", label: "Weak transfer of advanced mathematical modeling under timing" }
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
        { id: "advanced-math-301-l15-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    }
  ],
};
