import type { LearningModule } from "@/lib/modules/types";

export const SocialStudiesUs301Module: LearningModule = {
  id: "social-studies-us-301",
  title: "US Policy, Institutions, and Change",
  description: "Evaluate policy choices, institutional tradeoffs, and civic outcomes in the United States.",
  subject: "Social Studies US",
  tags: ["core", "curriculum", "interactive"],
  minAge: 7,
  maxAge: 18,
  version: "1.1.0",
  learningObjectives: [
    "Understand core concepts in Social Studies US",
    "Apply Civic Evidence Analysis strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  lessons: [
    {
      id: "social-studies-us-301-l01",
      title: "Institutional Design and Incentives",
      type: "video",
      duration: 10,
      chunks: [
        {
          id: "social-studies-us-301-l01-c1",
          title: "Institutional Design and Incentives Overview",
          content: "In this lesson, we focus on institutional design through the lens of policy and institutional analysis. The goal is to recognize what strong reasoning looks like before solving."
        },
        {
          id: "social-studies-us-301-l01-c2",
          title: "Core Concept",
          content: "institutional design and policy impact work together. Start by naming the main target, then identify the evidence or steps that support it."
        },
        {
          id: "social-studies-us-301-l01-c3",
          title: "Worked Example",
          content: "Walk through one guided example: define the goal, apply a strategy for policy impact, then verify the result with a quick check."
        },
        {
          id: "social-studies-us-301-l01-c4",
          title: "Transfer Prompt",
          content: "Apply the same process to a new scenario and explain why your approach is valid in one clear sentence."
        }
      ],
      flashcards: [
        { id: "social-studies-us-301-l01-f1", front: "institutional design", back: "A central target skill in this module. Name it before solving." },
        { id: "social-studies-us-301-l01-f2", front: "policy impact", back: "Use this as the method step after defining the goal." },
        { id: "social-studies-us-301-l01-f3", front: "Verification", back: "Check that your result matches the original goal and constraints." },
        { id: "social-studies-us-301-l01-f4", front: "Transfer", back: "Use the same strategy on a new item to confirm true mastery." }
      ],
      learningAids: [
        { id: "social-studies-us-301-l01-a1", type: "image", title: "Concept Poster", content: "A colorful infographic about institutional design and policy impact." },
        { id: "social-studies-us-301-l01-a2", type: "animation", title: "Warm-up Animation", content: "Short animation introducing Social Studies US vocabulary." }
      ]
    },
    {
      id: "social-studies-us-301-l02",
      title: "Policy Impact Frameworks",
      type: "interactive",
      duration: 12,
      metadata: {
        prompts: [
          "Identify one core idea about institutional design from this lesson.",
          "Explain where policy impact appears in real life.",
          "Describe one question you still have about policy and institutional analysis."
        ]
      },
      interactiveActivities: [
        {
          id: "social-studies-us-301-l02-ia1",
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
              { id: "d1", label: "Set a goal for institutional design", correctTargetId: "plan" },
              { id: "d2", label: "Try one strategy for policy impact", correctTargetId: "execute" },
              { id: "d3", label: "Record what worked and what to improve", correctTargetId: "reflect" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "social-studies-us-301-l02-a1", type: "practice", title: "Try It Board", content: "Complete a guided activity on policy impact and write one reflection." }
      ]
    },
    {
      id: "social-studies-us-301-l03",
      title: "Checkpoint: US Public Systems",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "social-studies-us-301-l03-q1",
          text: "Which statement best explains institutional design in Social Studies US?",
          skillId: "social-studies-us-301-skill-core",
          options: [
            { id: "a", text: "It explains institutional design using evidence from the lesson." },
            { id: "b", text: "It ignores how institutional design works in practice." },
            { id: "c", text: "It focuses on an unrelated topic outside Social Studies US." },
            { id: "d", text: "It repeats terms without showing meaning." }
          ],
          correctOptionId: "a"
        },
        {
          id: "social-studies-us-301-l03-q2",
          text: "What is the best first step when analyzing policy impact?",
          skillId: "social-studies-us-301-skill-process",
          options: [
            { id: "a", text: "Define the goal and examine evidence for policy impact." },
            { id: "b", text: "Guess quickly without checking evidence." },
            { id: "c", text: "Use data unrelated to policy impact." },
            { id: "d", text: "Skip the context and jump to a conclusion." }
          ],
          correctOptionId: "a"
        },
        {
          id: "social-studies-us-301-l03-q3",
          text: "Which option shows strong reasoning about policy and institutional analysis?",
          skillId: "social-studies-us-301-skill-reasoning",
          options: [
            { id: "a", text: "Use examples and verify assumptions step by step." },
            { id: "b", text: "Ignore important details and edge cases." },
            { id: "c", text: "Use assumptions unrelated to policy and institutional analysis." },
            { id: "d", text: "Change the topic when evidence gets hard." }
          ],
          correctOptionId: "a"
        },
        {
          id: "social-studies-us-301-l03-q4",
          text: "Why is spaced review useful for Social Studies US mastery?",
          skillId: "social-studies-us-301-skill-review",
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
          id: "social-studies-us-301-l03-ia1",
          type: "matching_pairs",
          title: "Reasoning Match: Checkpoint: US Public Systems",
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
              { id: "l1", label: "Confusion about institutional design" },
              { id: "l2", label: "Inconsistent approach to policy impact" },
              { id: "l3", label: "Weak transfer of policy and institutional analysis under timing" }
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
        { id: "social-studies-us-301-l03-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    },
    {
      id: "social-studies-us-301-l04",
      title: "Rights, Equity, and Tradeoffs",
      type: "video",
      duration: 11,
      chunks: [
        {
          id: "social-studies-us-301-l04-c1",
          title: "Rights, Equity, and Tradeoffs Focus",
          content: "This lesson deepens civic deliberation using structured reasoning. We move from concept understanding to applied decisions."
        },
        {
          id: "social-studies-us-301-l04-c2",
          title: "Method Steps",
          content: "Step 1: identify what is being asked. Step 2: choose a strategy aligned to civic deliberation. Step 3: justify with evidence."
        },
        {
          id: "social-studies-us-301-l04-c3",
          title: "Common Mistakes",
          content: "Common errors include skipping setup, using unrelated assumptions, or failing to verify the final result."
        },
        {
          id: "social-studies-us-301-l04-c4",
          title: "Independent Try",
          content: "Solve one similar item and compare your process to the lesson sequence."
        }
      ],
      flashcards: [
        { id: "social-studies-us-301-l04-f1", front: "civic deliberation", back: "State the target and pick a strategy before solving." },
        { id: "social-studies-us-301-l04-f2", front: "Step Sequence", back: "Goal -> Strategy -> Evidence -> Check." },
        { id: "social-studies-us-301-l04-f3", front: "Assumption Check", back: "Remove assumptions that are not supported by the prompt." },
        { id: "social-studies-us-301-l04-f4", front: "Process Match", back: "Your explanation should match the steps you actually used." }
      ],
      learningAids: [
        { id: "social-studies-us-301-l04-a1", type: "image", title: "Worked Example Sheet", content: "Step-by-step visuals for civic deliberation scenarios." }
      ]
    },
    {
      id: "social-studies-us-301-l05",
      title: "Federal-State Governance Tensions",
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
          id: "social-studies-us-301-l05-ia1",
          type: "sorting_buckets",
          title: "Strategy Sort",
          description: "Sort study actions into Concept, Process, or Review lanes.",
          estimatedMinutes: 9,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "concept", label: "civic deliberation Concept" },
              { id: "process", label: "evidence in public argument Process" },
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
        { id: "social-studies-us-301-l05-a1", type: "animation", title: "Challenge Walkthrough", content: "Animated sequence for solving a civic deliberation challenge." }
      ]
    },
    {
      id: "social-studies-us-301-l06",
      title: "Checkpoint: Civic Evidence Analysis",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "social-studies-us-301-l06-q1",
          text: "Which statement best explains civic deliberation in Social Studies US?",
          skillId: "social-studies-us-301-skill-core",
          options: [
            { id: "a", text: "It explains civic deliberation using evidence from the lesson." },
            { id: "b", text: "It ignores how civic deliberation works in practice." },
            { id: "c", text: "It focuses on an unrelated topic outside Social Studies US." },
            { id: "d", text: "It repeats terms without showing meaning." }
          ],
          correctOptionId: "a"
        },
        {
          id: "social-studies-us-301-l06-q2",
          text: "What is the best first step when analyzing evidence in public argument?",
          skillId: "social-studies-us-301-skill-process",
          options: [
            { id: "a", text: "Define the goal and examine evidence for evidence in public argument." },
            { id: "b", text: "Guess quickly without checking evidence." },
            { id: "c", text: "Use data unrelated to evidence in public argument." },
            { id: "d", text: "Skip the context and jump to a conclusion." }
          ],
          correctOptionId: "a"
        },
        {
          id: "social-studies-us-301-l06-q3",
          text: "Which option shows strong reasoning about policy and institutional analysis?",
          skillId: "social-studies-us-301-skill-reasoning",
          options: [
            { id: "a", text: "Use examples and verify assumptions step by step." },
            { id: "b", text: "Ignore important details and edge cases." },
            { id: "c", text: "Use assumptions unrelated to policy and institutional analysis." },
            { id: "d", text: "Change the topic when evidence gets hard." }
          ],
          correctOptionId: "a"
        },
        {
          id: "social-studies-us-301-l06-q4",
          text: "Why is spaced review useful for Social Studies US mastery?",
          skillId: "social-studies-us-301-skill-review",
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
          id: "social-studies-us-301-l06-ia1",
          type: "matching_pairs",
          title: "Reasoning Match: Checkpoint: Civic Evidence Analysis",
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
              { id: "l1", label: "Confusion about civic deliberation" },
              { id: "l2", label: "Inconsistent approach to evidence in public argument" },
              { id: "l3", label: "Weak transfer of policy and institutional analysis under timing" }
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
        { id: "social-studies-us-301-l06-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    },
    {
      id: "social-studies-us-301-l07",
      title: "Media Literacy and Public Reasoning",
      type: "video",
      duration: 12,
      chunks: [
        {
          id: "social-studies-us-301-l07-c1",
          title: "Media Literacy and Public Reasoning Setup",
          content: "Use evidence in public argument to organize your approach before starting. Planning first improves quality and speed."
        },
        {
          id: "social-studies-us-301-l07-c2",
          title: "Decision Rules",
          content: "When choices compete, use a simple rule: pick the option with strongest evidence and clearest link to the goal."
        },
        {
          id: "social-studies-us-301-l07-c3",
          title: "Quality Control",
          content: "Check for three things: accuracy, completeness, and alignment with the original objective."
        },
        {
          id: "social-studies-us-301-l07-c4",
          title: "Next-Step Plan",
          content: "Write one action to repeat and one action to improve in your next practice round."
        }
      ],
      flashcards: [
        { id: "social-studies-us-301-l07-f1", front: "evidence in public argument", back: "Use this as your organizing framework before execution." },
        { id: "social-studies-us-301-l07-f2", front: "Decision Rule", back: "Choose the option with strongest evidence-to-goal alignment." },
        { id: "social-studies-us-301-l07-f3", front: "Quality Control", back: "Accuracy + completeness + objective match." },
        { id: "social-studies-us-301-l07-f4", front: "Iteration", back: "Repeat what works; refine one weak step each cycle." }
      ],
      learningAids: [
        { id: "social-studies-us-301-l07-a1", type: "practice", title: "Project Planner", content: "Template for planning a mini project focused on evidence in public argument." }
      ]
    },
    {
      id: "social-studies-us-301-l08",
      title: "Deliberation Workshop",
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
          id: "social-studies-us-301-l08-ia1",
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
        { id: "social-studies-us-301-l08-a1", type: "mnemonic", title: "Reflection Cycle", content: "Remember Observe, Adjust, Repeat while practicing." }
      ]
    },
    {
      id: "social-studies-us-301-l09",
      title: "Review: US Civic Systems Thinking",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "social-studies-us-301-l09-q1",
          text: "Which statement best explains policy impact in Social Studies US?",
          skillId: "social-studies-us-301-skill-core",
          options: [
            { id: "a", text: "It explains policy impact using evidence from the lesson." },
            { id: "b", text: "It ignores how policy impact works in practice." },
            { id: "c", text: "It focuses on an unrelated topic outside Social Studies US." },
            { id: "d", text: "It repeats terms without showing meaning." }
          ],
          correctOptionId: "a"
        },
        {
          id: "social-studies-us-301-l09-q2",
          text: "What is the best first step when analyzing evidence in public argument?",
          skillId: "social-studies-us-301-skill-process",
          options: [
            { id: "a", text: "Define the goal and examine evidence for evidence in public argument." },
            { id: "b", text: "Guess quickly without checking evidence." },
            { id: "c", text: "Use data unrelated to evidence in public argument." },
            { id: "d", text: "Skip the context and jump to a conclusion." }
          ],
          correctOptionId: "a"
        },
        {
          id: "social-studies-us-301-l09-q3",
          text: "Which option shows strong reasoning about policy and institutional analysis?",
          skillId: "social-studies-us-301-skill-reasoning",
          options: [
            { id: "a", text: "Use examples and verify assumptions step by step." },
            { id: "b", text: "Ignore important details and edge cases." },
            { id: "c", text: "Use assumptions unrelated to policy and institutional analysis." },
            { id: "d", text: "Change the topic when evidence gets hard." }
          ],
          correctOptionId: "a"
        },
        {
          id: "social-studies-us-301-l09-q4",
          text: "Why is spaced review useful for Social Studies US mastery?",
          skillId: "social-studies-us-301-skill-review",
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
          id: "social-studies-us-301-l09-ia1",
          type: "matching_pairs",
          title: "Reasoning Match: Review: US Civic Systems Thinking",
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
              { id: "l1", label: "Confusion about policy impact" },
              { id: "l2", label: "Inconsistent approach to evidence in public argument" },
              { id: "l3", label: "Weak transfer of policy and institutional analysis under timing" }
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
        { id: "social-studies-us-301-l09-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    },
    {
      id: "social-studies-us-301-l10",
      title: "Mastery: US Social Studies III",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "social-studies-us-301-l10-q1",
          text: "Which statement best explains institutional design in Social Studies US?",
          skillId: "social-studies-us-301-skill-core",
          options: [
            { id: "a", text: "It explains institutional design using evidence from the lesson." },
            { id: "b", text: "It ignores how institutional design works in practice." },
            { id: "c", text: "It focuses on an unrelated topic outside Social Studies US." },
            { id: "d", text: "It repeats terms without showing meaning." }
          ],
          correctOptionId: "a"
        },
        {
          id: "social-studies-us-301-l10-q2",
          text: "What is the best first step when analyzing civic deliberation?",
          skillId: "social-studies-us-301-skill-process",
          options: [
            { id: "a", text: "Define the goal and examine evidence for civic deliberation." },
            { id: "b", text: "Guess quickly without checking evidence." },
            { id: "c", text: "Use data unrelated to civic deliberation." },
            { id: "d", text: "Skip the context and jump to a conclusion." }
          ],
          correctOptionId: "a"
        },
        {
          id: "social-studies-us-301-l10-q3",
          text: "Which option shows strong reasoning about policy and institutional analysis?",
          skillId: "social-studies-us-301-skill-reasoning",
          options: [
            { id: "a", text: "Use examples and verify assumptions step by step." },
            { id: "b", text: "Ignore important details and edge cases." },
            { id: "c", text: "Use assumptions unrelated to policy and institutional analysis." },
            { id: "d", text: "Change the topic when evidence gets hard." }
          ],
          correctOptionId: "a"
        },
        {
          id: "social-studies-us-301-l10-q4",
          text: "Why is spaced review useful for Social Studies US mastery?",
          skillId: "social-studies-us-301-skill-review",
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
          id: "social-studies-us-301-l10-ia1",
          type: "matching_pairs",
          title: "Reasoning Match: Mastery: US Social Studies III",
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
              { id: "l1", label: "Confusion about institutional design" },
              { id: "l2", label: "Inconsistent approach to civic deliberation" },
              { id: "l3", label: "Weak transfer of policy and institutional analysis under timing" }
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
        { id: "social-studies-us-301-l10-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    },
    {
      id: "social-studies-us-301-l11",
      title: "Applied Social Studies US Challenge Studio",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using civic deliberation.",
          "Document your transfer plan for the next timed check."
        ]
      },
      interactiveActivities: [
        {
          id: "social-studies-us-301-l11-ia1",
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
              { id: "i1", label: "Tag repeated mistakes in policy impact", correctBucketId: "diagnose" },
              { id: "i2", label: "Rework one missed item with full reasoning", correctBucketId: "fix" },
              { id: "i3", label: "Retest with a timed mini-check on evidence in public argument", correctBucketId: "transfer" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "social-studies-us-301-l11-a1", type: "practice", title: "Correction Loop Card", content: "Use Diagnose, Fix, Transfer for each difficult problem." }
      ]
    },
    {
      id: "social-studies-us-301-l12",
      title: "US Social Studies III Mastery Applied Retest",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "social-studies-us-301-l12-q1",
          text: "Which statement best explains institutional design in Social Studies US?",
          skillId: "social-studies-us-301-skill-core",
          options: [
            { id: "a", text: "It explains institutional design using evidence from the lesson." },
            { id: "b", text: "It ignores how institutional design works in practice." },
            { id: "c", text: "It focuses on an unrelated topic outside Social Studies US." },
            { id: "d", text: "It repeats terms without showing meaning." }
          ],
          correctOptionId: "a"
        },
        {
          id: "social-studies-us-301-l12-q2",
          text: "What is the best first step when analyzing evidence in public argument?",
          skillId: "social-studies-us-301-skill-process",
          options: [
            { id: "a", text: "Define the goal and examine evidence for evidence in public argument." },
            { id: "b", text: "Guess quickly without checking evidence." },
            { id: "c", text: "Use data unrelated to evidence in public argument." },
            { id: "d", text: "Skip the context and jump to a conclusion." }
          ],
          correctOptionId: "a"
        },
        {
          id: "social-studies-us-301-l12-q3",
          text: "Which option shows strong reasoning about policy and institutional analysis?",
          skillId: "social-studies-us-301-skill-reasoning",
          options: [
            { id: "a", text: "Use examples and verify assumptions step by step." },
            { id: "b", text: "Ignore important details and edge cases." },
            { id: "c", text: "Use assumptions unrelated to policy and institutional analysis." },
            { id: "d", text: "Change the topic when evidence gets hard." }
          ],
          correctOptionId: "a"
        },
        {
          id: "social-studies-us-301-l12-q4",
          text: "Why is spaced review useful for Social Studies US mastery?",
          skillId: "social-studies-us-301-skill-review",
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
          id: "social-studies-us-301-l12-ia1",
          type: "matching_pairs",
          title: "Reasoning Match: US Social Studies III Mastery Applied Retest",
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
              { id: "l1", label: "Confusion about institutional design" },
              { id: "l2", label: "Inconsistent approach to evidence in public argument" },
              { id: "l3", label: "Weak transfer of policy and institutional analysis under timing" }
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
        { id: "social-studies-us-301-l12-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    },
    {
      id: "social-studies-us-301-l13",
      title: "Social Studies US Scenario Lab",
      type: "video",
      duration: 12,
      chunks: [
        {
          id: "social-studies-us-301-l13-c1",
          title: "Scenario Brief",
          content: "This scenario combines institutional design, civic deliberation, and evidence in public argument in one applied challenge."
        },
        {
          id: "social-studies-us-301-l13-c2",
          title: "Plan the Approach",
          content: "Break the scenario into smaller decisions, then assign one strategy to each decision point."
        },
        {
          id: "social-studies-us-301-l13-c3",
          title: "Execute and Justify",
          content: "Apply the plan and explain each move with evidence, not guesses."
        },
        {
          id: "social-studies-us-301-l13-c4",
          title: "Evaluate Outcome",
          content: "Compare your result to the target and identify what to keep versus what to adjust."
        }
      ],
      flashcards: [
        { id: "social-studies-us-301-l13-f1", front: "Scenario Planning", back: "Split a complex task into clear decision points." },
        { id: "social-studies-us-301-l13-f2", front: "Evidence Link", back: "Each step should connect to evidence in the scenario." },
        { id: "social-studies-us-301-l13-f3", front: "Adjustment Loop", back: "Use outcome checks to refine your next attempt." },
        { id: "social-studies-us-301-l13-f4", front: "Applied Mastery", back: "Mastery means transferring the process to a new context." }
      ],
      learningAids: [
        { id: "social-studies-us-301-l13-a1", type: "image", title: "Scenario Map", content: "A real-world scenario map connecting institutional design, civic deliberation, and evidence in public argument." },
        { id: "social-studies-us-301-l13-a2", type: "practice", title: "Mini Case Prompt", content: "Apply one strategy to a new case and explain your reasoning." }
      ]
    },
    {
      id: "social-studies-us-301-l14",
      title: "Social Studies US Coaching Clinic",
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
          id: "social-studies-us-301-l14-ia1",
          type: "matching_pairs",
          title: "Error to Fix Match",
          description: "Match each error signal to the highest-impact correction action.",
          estimatedMinutes: 8,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "Repeated miss on institutional design setup" },
              { id: "l2", label: "Losses due to rushed evidence in public argument decisions" },
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
        { id: "social-studies-us-301-l14-a1", type: "mnemonic", title: "Clinic Loop", content: "Diagnose, Correct, Transfer." }
      ]
    },
    {
      id: "social-studies-us-301-l15",
      title: "US Social Studies III Mastery Mastery Sprint",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "social-studies-us-301-l15-q1",
          text: "Which statement best explains policy impact in Social Studies US?",
          skillId: "social-studies-us-301-skill-core",
          options: [
            { id: "a", text: "It explains policy impact using evidence from the lesson." },
            { id: "b", text: "It ignores how policy impact works in practice." },
            { id: "c", text: "It focuses on an unrelated topic outside Social Studies US." },
            { id: "d", text: "It repeats terms without showing meaning." }
          ],
          correctOptionId: "a"
        },
        {
          id: "social-studies-us-301-l15-q2",
          text: "What is the best first step when analyzing civic deliberation?",
          skillId: "social-studies-us-301-skill-process",
          options: [
            { id: "a", text: "Define the goal and examine evidence for civic deliberation." },
            { id: "b", text: "Guess quickly without checking evidence." },
            { id: "c", text: "Use data unrelated to civic deliberation." },
            { id: "d", text: "Skip the context and jump to a conclusion." }
          ],
          correctOptionId: "a"
        },
        {
          id: "social-studies-us-301-l15-q3",
          text: "Which option shows strong reasoning about policy and institutional analysis?",
          skillId: "social-studies-us-301-skill-reasoning",
          options: [
            { id: "a", text: "Use examples and verify assumptions step by step." },
            { id: "b", text: "Ignore important details and edge cases." },
            { id: "c", text: "Use assumptions unrelated to policy and institutional analysis." },
            { id: "d", text: "Change the topic when evidence gets hard." }
          ],
          correctOptionId: "a"
        },
        {
          id: "social-studies-us-301-l15-q4",
          text: "Why is spaced review useful for Social Studies US mastery?",
          skillId: "social-studies-us-301-skill-review",
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
          id: "social-studies-us-301-l15-ia1",
          type: "matching_pairs",
          title: "Reasoning Match: US Social Studies III Mastery Mastery Sprint",
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
              { id: "l1", label: "Confusion about policy impact" },
              { id: "l2", label: "Inconsistent approach to civic deliberation" },
              { id: "l3", label: "Weak transfer of policy and institutional analysis under timing" }
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
        { id: "social-studies-us-301-l15-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    }
  ],
};
