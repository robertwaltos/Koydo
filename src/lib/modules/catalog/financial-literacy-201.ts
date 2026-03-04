import type { LearningModule } from "@/lib/modules/types";

export const FinancialLiteracy201Module: LearningModule = {
  "id": "financial-literacy-201",
  "title": "Financial Planning and Decisions",
  "description": "Make informed choices using budgeting, opportunity cost, risk, and long-term planning.",
  "subject": "Financial Literacy",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Financial Literacy",
    "Apply Smart Financial Tradeoffs strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "financial-literacy-201-l01",
      "title": "Cash-Flow Planning",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "financial-literacy-201-l01-c1",
          "title": "Cash-Flow Planning Overview",
          "content": "In this lesson, we will dive into the important idea of cash-flow planning, which is a key tool that helps us make wise financial choices. Cash-flow planning involves understanding how money comes in and goes out, allowing us to see where we can save and where we might need to spend. Our main goal is to learn how to identify what good reasoning looks like before we tackle any financial problems. By mastering cash flow, we can take charge of our money, make informed decisions, and create a brighter financial future for ourselves. Let's get started on this exciting journey to becoming smart money managers!"
        },
        {
          "id": "financial-literacy-201-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will learn how cash-flow planning works together with the idea of opportunity cost. First, we will identify our main goal or target, which is what we want to achieve. Then, we will look for the evidence or steps that support our goal. This process helps us understand the trade-offs we make when we choose one option over another.\nContext recap: In this section, we will learn how cash-flow planning works together with the idea of opportunity cost. First, we will identify our main goal or target, which is what we want to achieve. Then, we will look for the evidence or steps that support our goal. This process helps us understand the trade-offs we make when we choose one option over another."
        },
        {
          "id": "financial-literacy-201-l01-c3",
          "title": "Worked Example",
          "content": "Let's go through a guided example together! First, we will define a specific goal we want to achieve. Next, we will apply a strategy to understand the opportunity cost, which is what we give up when we make a choice. Finally, we will verify our result with a quick check to ensure we are on the right track. This example will help us see how to apply these concepts in real-life situations.\nContext recap: Let's go through a guided example together! First, we will define a specific goal we want to achieve. Next, we will apply a strategy to understand the opportunity cost, which is what we give up when we make a choice. Finally, we will verify our result with a quick check to ensure we are on the right track."
        },
        {
          "id": "financial-literacy-201-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to shine! Take the steps we just learned and apply them to a new situation. Once you’ve worked through your example, write one clear sentence explaining why your approach makes sense. This exercise will not only help you practice your reasoning skills but also strengthen your understanding of cash-flow planning. Remember, thinking critically about your choices is an important part of managing money wisely!\nContext recap: Now it's your turn to shine! Take the steps we just learned and apply them to a new situation. Once you’ve worked through your example, write one clear sentence explaining why your approach makes sense. This exercise will not only help you practice your reasoning skills but also strengthen your understanding of cash-flow planning."
        }
      ],
      "flashcards": [
        {
          "id": "financial-literacy-201-l01-f1",
          "front": "cash-flow planning",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "financial-literacy-201-l01-f2",
          "front": "opportunity cost",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "financial-literacy-201-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "financial-literacy-201-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "financial-literacy-201-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about cash-flow planning and opportunity cost."
        },
        {
          "id": "financial-literacy-201-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Financial Literacy vocabulary."
        }
      ]
    },
    {
      "id": "financial-literacy-201-l02",
      "title": "Opportunity Cost in Real Choices",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about cash-flow planning from this lesson.",
          "Explain where opportunity cost appears in real life.",
          "Describe one question you still have about financial decision-making."
        ]
      },
      "interactiveActivities": [
        {
          "id": "financial-literacy-201-l02-ia1",
          "type": "drag_and_drop",
          "title": "Practice Flow Builder",
          "description": "Sort each action into Plan, Execute, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "execute",
                "label": "Execute"
              },
              {
                "id": "reflect",
                "label": "Reflect"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set a goal for cash-flow planning",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for opportunity cost",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Record what worked and what to improve",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "financial-literacy-201-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on opportunity cost and write one reflection."
        }
      ]
    },
    {
      "id": "financial-literacy-201-l03",
      "title": "Checkpoint: Decision Frameworks",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "financial-literacy-201-l03-q1",
          "text": "Which statement best explains cash-flow planning in Financial Literacy?",
          "skillId": "financial-literacy-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains cash-flow planning using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how cash-flow planning works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Financial Literacy."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-201-l03-q2",
          "text": "What is the best first step when analyzing opportunity cost?",
          "skillId": "financial-literacy-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for opportunity cost."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to opportunity cost."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-201-l03-q3",
          "text": "Which option shows strong reasoning about financial decision-making?",
          "skillId": "financial-literacy-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Use examples and verify assumptions step by step."
            },
            {
              "id": "b",
              "text": "Ignore important details and edge cases."
            },
            {
              "id": "c",
              "text": "Use assumptions unrelated to financial decision-making."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-201-l03-q4",
          "text": "Why is spaced review useful for Financial Literacy mastery?",
          "skillId": "financial-literacy-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It strengthens memory and transfer over time"
            },
            {
              "id": "b",
              "text": "It creates confusion"
            },
            {
              "id": "c",
              "text": "It removes key facts"
            },
            {
              "id": "d",
              "text": "It has no value"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "financial-literacy-201-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Decision Frameworks",
          "description": "Match each error signal to the strongest correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Confusion about cash-flow planning"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to opportunity cost"
              },
              {
                "id": "l3",
                "label": "Weak transfer of financial decision-making under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create a one-step concept summary with one worked example"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
              },
              {
                "id": "r3",
                "label": "Retest the same target with a short timed sprint"
              }
            ],
            "pairs": [
              {
                "leftId": "l1",
                "rightId": "r1"
              },
              {
                "leftId": "l2",
                "rightId": "r2"
              },
              {
                "leftId": "l3",
                "rightId": "r3"
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "financial-literacy-201-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "financial-literacy-201-l04",
      "title": "Risk, Return, and Diversification",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "financial-literacy-201-l04-c1",
          "title": "Risk, Return, and Diversification Focus",
          "content": "In this lesson, we will dive deeper into the concepts of risk and return using structured reasoning. We will move from simply understanding these concepts to making applied decisions that can affect our financial future. By the end of this lesson, you will have a clearer understanding of how to evaluate risks and returns in your financial choices.\nContext recap: In this lesson, we will dive deeper into the concepts of risk and return using structured reasoning. We will move from simply understanding these concepts to making applied decisions that can affect our financial future. By the end of this lesson, you will have a clearer understanding of how to evaluate risks and returns in your financial choices."
        },
        {
          "id": "financial-literacy-201-l04-c2",
          "title": "Method Steps",
          "content": "Let's break down the steps we need to follow for making informed decisions about risk and return. Step 1: Identify what is being asked in the situation. Step 2: Choose a strategy that aligns with the concepts of risk and return. Step 3: Justify your choice with evidence that supports your decision. Following these steps will help you make better financial choices.\nContext recap: Let's break down the steps we need to follow for making informed decisions about risk and return. Step 1: Identify what is being asked in the situation. Step 2: Choose a strategy that aligns with the concepts of risk and return. Step 3: Justify your choice with evidence that supports your decision."
        },
        {
          "id": "financial-literacy-201-l04-c3",
          "title": "Common Mistakes",
          "content": "It's important to be aware of common mistakes that can happen when making decisions about risk and return. Some common errors include skipping the setup process, using assumptions that are not related to the situation, or failing to verify the final result. By being mindful of these pitfalls, you can improve your decision-making skills.\nContext recap: It's important to be aware of common mistakes that can happen when making decisions about risk and return. Some common errors include skipping the setup process, using assumptions that are not related to the situation, or failing to verify the final result. By being mindful of these pitfalls, you can improve your decision-making skills."
        },
        {
          "id": "financial-literacy-201-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar problem on your own! After you complete it, compare your process to the steps we discussed in the lesson. This will help you see how well you understood the material and where you might need to improve.\nContext recap: Now, it's time for you to try solving a similar problem on your own! After you complete it, compare your process to the steps we discussed in the lesson. This will help you see how well you understood the material and where you might need to improve."
        }
      ],
      "flashcards": [
        {
          "id": "financial-literacy-201-l04-f1",
          "front": "risk and return",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "financial-literacy-201-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "financial-literacy-201-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "financial-literacy-201-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "financial-literacy-201-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for risk and return scenarios."
        }
      ]
    },
    {
      "id": "financial-literacy-201-l05",
      "title": "Credit and Borrowing Basics",
      "type": "interactive",
      "duration": 13,
      "metadata": {
        "prompts": [
          "Pick one challenge and outline your approach.",
          "Test your approach and record the result.",
          "Revise your approach and explain the change."
        ]
      },
      "interactiveActivities": [
        {
          "id": "financial-literacy-201-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "risk and return Concept"
              },
              {
                "id": "process",
                "label": "long-term goals Process"
              },
              {
                "id": "review",
                "label": "Review Loop"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Write one definition in your own words",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Follow the step-by-step method on a new example",
                "correctBucketId": "process"
              },
              {
                "id": "i3",
                "label": "Retest the same skill tomorrow",
                "correctBucketId": "review"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "financial-literacy-201-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a risk and return challenge."
        }
      ]
    },
    {
      "id": "financial-literacy-201-l06",
      "title": "Checkpoint: Smart Financial Tradeoffs",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "financial-literacy-201-l06-q1",
          "text": "Which statement best explains risk and return in Financial Literacy?",
          "skillId": "financial-literacy-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains risk and return using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how risk and return works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Financial Literacy."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-201-l06-q2",
          "text": "What is the best first step when analyzing long-term goals?",
          "skillId": "financial-literacy-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for long-term goals."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to long-term goals."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-201-l06-q3",
          "text": "Which option shows strong reasoning about financial decision-making?",
          "skillId": "financial-literacy-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Use examples and verify assumptions step by step."
            },
            {
              "id": "b",
              "text": "Ignore important details and edge cases."
            },
            {
              "id": "c",
              "text": "Use assumptions unrelated to financial decision-making."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-201-l06-q4",
          "text": "Why is spaced review useful for Financial Literacy mastery?",
          "skillId": "financial-literacy-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It strengthens memory and transfer over time"
            },
            {
              "id": "b",
              "text": "It creates confusion"
            },
            {
              "id": "c",
              "text": "It removes key facts"
            },
            {
              "id": "d",
              "text": "It has no value"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "financial-literacy-201-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Smart Financial Tradeoffs",
          "description": "Match each error signal to the strongest correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Confusion about risk and return"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to long-term goals"
              },
              {
                "id": "l3",
                "label": "Weak transfer of financial decision-making under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create a one-step concept summary with one worked example"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
              },
              {
                "id": "r3",
                "label": "Retest the same target with a short timed sprint"
              }
            ],
            "pairs": [
              {
                "leftId": "l1",
                "rightId": "r1"
              },
              {
                "leftId": "l2",
                "rightId": "r2"
              },
              {
                "leftId": "l3",
                "rightId": "r3"
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "financial-literacy-201-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "financial-literacy-201-l07",
      "title": "Goal-Based Saving Systems",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "financial-literacy-201-l07-c1",
          "title": "Goal-Based Saving Systems Setup",
          "content": "Before you start working on your financial goals, it's important to use long-term goals to organize your approach. By planning ahead, you can improve both the quality of your decisions and the speed at which you achieve your goals. This preparation will set you up for success in your financial journey.\nContext recap: Before you start working on your financial goals, it's important to use long-term goals to organize your approach. By planning ahead, you can improve both the quality of your decisions and the speed at which you achieve your goals. This preparation will set you up for success in your financial journey."
        },
        {
          "id": "financial-literacy-201-l07-c2",
          "title": "Decision Rules",
          "content": "When you find yourself facing several choices, it can be tricky to decide which one to pick. A great way to make this easier is by using a simple decision rule. Look for the option that has the strongest evidence supporting it and the clearest connection to your goal. This means you should think about how well each choice helps you reach what you want to achieve. By following this strategy, you will be able to make smarter decisions that truly align with your dreams and aspirations.\nContext recap: When you find yourself facing several choices, it can be tricky to decide which one to pick. A great way to make this easier is by using a simple decision rule. Look for the option that has the strongest evidence supporting it and the clearest connection to your goal. This means you should think about how well each choice helps you reach what you want to achieve."
        },
        {
          "id": "financial-literacy-201-l07-c3",
          "title": "Quality Control",
          "content": "As you work on your financial plans, it's essential to check for three key things: accuracy, completeness, and alignment with your original objective. By ensuring these elements are in place, you can feel confident in the decisions you are making.\nContext recap: As you work on your financial plans, it's essential to check for three key things: accuracy, completeness, and alignment with your original objective. By ensuring these elements are in place, you can feel confident in the decisions you are making."
        },
        {
          "id": "financial-literacy-201-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your practice round, take a moment to write down one action you want to repeat because it worked well, and one action you want to improve for next time. This reflection will help you grow and become more skilled in your financial planning.\nContext recap: After completing your practice round, take a moment to write down one action you want to repeat because it worked well, and one action you want to improve for next time. This reflection will help you grow and become more skilled in your financial planning."
        }
      ],
      "flashcards": [
        {
          "id": "financial-literacy-201-l07-f1",
          "front": "long-term goals",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "financial-literacy-201-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "financial-literacy-201-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "financial-literacy-201-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "financial-literacy-201-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on long-term goals."
        }
      ]
    },
    {
      "id": "financial-literacy-201-l08",
      "title": "Scenario Planning Workshop",
      "type": "interactive",
      "duration": 10,
      "metadata": {
        "prompts": [
          "What did you learn most clearly?",
          "Where did you struggle and why?",
          "What is your next improvement target?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "financial-literacy-201-l08-ia1",
          "type": "matching_pairs",
          "title": "Reflection Match",
          "description": "Match each reflection prompt with the best follow-up action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I keep missing one skill pattern"
              },
              {
                "id": "l2",
                "label": "I rush and make avoidable mistakes"
              },
              {
                "id": "l3",
                "label": "I understand in notes but miss in quizzes"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Do a focused drill on that exact pattern"
              },
              {
                "id": "r2",
                "label": "Use a short checklist before submitting answers"
              },
              {
                "id": "r3",
                "label": "Repeat the skill in a timed re-check"
              }
            ],
            "pairs": [
              {
                "leftId": "l1",
                "rightId": "r1"
              },
              {
                "leftId": "l2",
                "rightId": "r2"
              },
              {
                "leftId": "l3",
                "rightId": "r3"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "financial-literacy-201-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "financial-literacy-201-l09",
      "title": "Review: Financial Reasoning",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "financial-literacy-201-l09-q1",
          "text": "Which statement best explains opportunity cost in Financial Literacy?",
          "skillId": "financial-literacy-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains opportunity cost using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how opportunity cost works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Financial Literacy."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-201-l09-q2",
          "text": "What is the best first step when analyzing long-term goals?",
          "skillId": "financial-literacy-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for long-term goals."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to long-term goals."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-201-l09-q3",
          "text": "Which option shows strong reasoning about financial decision-making?",
          "skillId": "financial-literacy-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Use examples and verify assumptions step by step."
            },
            {
              "id": "b",
              "text": "Ignore important details and edge cases."
            },
            {
              "id": "c",
              "text": "Use assumptions unrelated to financial decision-making."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-201-l09-q4",
          "text": "Why is spaced review useful for Financial Literacy mastery?",
          "skillId": "financial-literacy-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It strengthens memory and transfer over time"
            },
            {
              "id": "b",
              "text": "It creates confusion"
            },
            {
              "id": "c",
              "text": "It removes key facts"
            },
            {
              "id": "d",
              "text": "It has no value"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "financial-literacy-201-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Financial Reasoning",
          "description": "Match each error signal to the strongest correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Confusion about opportunity cost"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to long-term goals"
              },
              {
                "id": "l3",
                "label": "Weak transfer of financial decision-making under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create a one-step concept summary with one worked example"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
              },
              {
                "id": "r3",
                "label": "Retest the same target with a short timed sprint"
              }
            ],
            "pairs": [
              {
                "leftId": "l1",
                "rightId": "r1"
              },
              {
                "leftId": "l2",
                "rightId": "r2"
              },
              {
                "leftId": "l3",
                "rightId": "r3"
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "financial-literacy-201-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "financial-literacy-201-l10",
      "title": "Mastery: Financial Literacy II",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "financial-literacy-201-l10-q1",
          "text": "Which statement best explains cash-flow planning in Financial Literacy?",
          "skillId": "financial-literacy-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains cash-flow planning using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how cash-flow planning works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Financial Literacy."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-201-l10-q2",
          "text": "What is the best first step when analyzing risk and return?",
          "skillId": "financial-literacy-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for risk and return."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to risk and return."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-201-l10-q3",
          "text": "Which option shows strong reasoning about financial decision-making?",
          "skillId": "financial-literacy-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Use examples and verify assumptions step by step."
            },
            {
              "id": "b",
              "text": "Ignore important details and edge cases."
            },
            {
              "id": "c",
              "text": "Use assumptions unrelated to financial decision-making."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-201-l10-q4",
          "text": "Why is spaced review useful for Financial Literacy mastery?",
          "skillId": "financial-literacy-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It strengthens memory and transfer over time"
            },
            {
              "id": "b",
              "text": "It creates confusion"
            },
            {
              "id": "c",
              "text": "It removes key facts"
            },
            {
              "id": "d",
              "text": "It has no value"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "financial-literacy-201-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Financial Literacy II",
          "description": "Match each error signal to the strongest correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Confusion about cash-flow planning"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to risk and return"
              },
              {
                "id": "l3",
                "label": "Weak transfer of financial decision-making under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create a one-step concept summary with one worked example"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
              },
              {
                "id": "r3",
                "label": "Retest the same target with a short timed sprint"
              }
            ],
            "pairs": [
              {
                "leftId": "l1",
                "rightId": "r1"
              },
              {
                "leftId": "l2",
                "rightId": "r2"
              },
              {
                "leftId": "l3",
                "rightId": "r3"
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "financial-literacy-201-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "financial-literacy-201-l11",
      "title": "Applied Financial Literacy Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using risk and return.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "financial-literacy-201-l11-ia1",
          "type": "sorting_buckets",
          "title": "Transfer Ladder",
          "description": "Sort actions into Diagnose, Fix, and Transfer phases.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "diagnose",
                "label": "Diagnose"
              },
              {
                "id": "fix",
                "label": "Fix"
              },
              {
                "id": "transfer",
                "label": "Transfer"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Tag repeated mistakes in opportunity cost",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on long-term goals",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "financial-literacy-201-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "financial-literacy-201-l12",
      "title": "Financial Literacy II Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "financial-literacy-201-l12-q1",
          "text": "Which statement best explains cash-flow planning in Financial Literacy?",
          "skillId": "financial-literacy-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains cash-flow planning using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how cash-flow planning works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Financial Literacy."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-201-l12-q2",
          "text": "What is the best first step when analyzing long-term goals?",
          "skillId": "financial-literacy-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for long-term goals."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to long-term goals."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-201-l12-q3",
          "text": "Which option shows strong reasoning about financial decision-making?",
          "skillId": "financial-literacy-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Use examples and verify assumptions step by step."
            },
            {
              "id": "b",
              "text": "Ignore important details and edge cases."
            },
            {
              "id": "c",
              "text": "Use assumptions unrelated to financial decision-making."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-201-l12-q4",
          "text": "Why is spaced review useful for Financial Literacy mastery?",
          "skillId": "financial-literacy-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It strengthens memory and transfer over time"
            },
            {
              "id": "b",
              "text": "It creates confusion"
            },
            {
              "id": "c",
              "text": "It removes key facts"
            },
            {
              "id": "d",
              "text": "It has no value"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "financial-literacy-201-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Financial Literacy II Mastery Applied Retest",
          "description": "Match each error signal to the strongest correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Confusion about cash-flow planning"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to long-term goals"
              },
              {
                "id": "l3",
                "label": "Weak transfer of financial decision-making under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create a one-step concept summary with one worked example"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
              },
              {
                "id": "r3",
                "label": "Retest the same target with a short timed sprint"
              }
            ],
            "pairs": [
              {
                "leftId": "l1",
                "rightId": "r1"
              },
              {
                "leftId": "l2",
                "rightId": "r2"
              },
              {
                "leftId": "l3",
                "rightId": "r3"
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "financial-literacy-201-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "financial-literacy-201-l13",
      "title": "Financial Literacy Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "financial-literacy-201-l13-c1",
          "title": "Scenario Brief",
          "content": "In this scenario, we will explore how to manage money effectively by looking at cash-flow planning, understanding the balance between risk and return, and setting long-term financial goals. This challenge will help you apply these important concepts in a real-world context, making it easier to see how they work together.\nContext recap: In this scenario, we will explore how to manage money effectively by looking at cash-flow planning, understanding the balance between risk and return, and setting long-term financial goals. This challenge will help you apply these important concepts in a real-world context, making it easier to see how they work together."
        },
        {
          "id": "financial-literacy-201-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario, it’s helpful to break it down into smaller, more manageable decisions. For each decision point, think about one specific strategy you can use. This way, you can focus on each part of the challenge step by step, making it easier to find the best solutions.\nContext recap: To tackle this scenario, it’s helpful to break it down into smaller, more manageable decisions. For each decision point, think about one specific strategy you can use. This way, you can focus on each part of the challenge step by step, making it easier to find the best solutions."
        },
        {
          "id": "financial-literacy-201-l13-c3",
          "title": "Execute and Justify",
          "content": "Once you have your plan ready, it's time to put it into action! As you execute each step, make sure to explain why you are making those choices. Use facts and evidence to support your decisions instead of guessing. This will help you understand the reasoning behind your financial moves.\nContext recap: Once you have your plan ready, it's time to put it into action! As you execute each step, make sure to explain why you are making those choices. Use facts and evidence to support your decisions instead of guessing. This will help you understand the reasoning behind your financial moves."
        },
        {
          "id": "financial-literacy-201-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After you have completed your plan, take a moment to evaluate the outcome. Compare what you achieved with your original target. Think about what worked well and what might need some changes. This reflection will help you learn and improve your financial planning skills for the future.\nContext recap: After you have completed your plan, take a moment to evaluate the outcome. Compare what you achieved with your original target. Think about what worked well and what might need some changes. This reflection will help you learn and improve your financial planning skills for the future."
        }
      ],
      "flashcards": [
        {
          "id": "financial-literacy-201-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "financial-literacy-201-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "financial-literacy-201-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "financial-literacy-201-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "financial-literacy-201-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting cash-flow planning, risk and return, and long-term goals."
        },
        {
          "id": "financial-literacy-201-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "financial-literacy-201-l14",
      "title": "Financial Literacy Coaching Clinic",
      "type": "interactive",
      "duration": 13,
      "metadata": {
        "prompts": [
          "Identify one repeated error pattern from your recent work.",
          "Choose the best correction routine for that pattern.",
          "Write a transfer goal for your next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "financial-literacy-201-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on cash-flow planning setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed long-term goals decisions"
              },
              {
                "id": "l3",
                "label": "Correct in notes but weak transfer in new tasks"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Rebuild setup steps and retest one parallel item"
              },
              {
                "id": "r2",
                "label": "Use checkpoint pacing + verify before submit"
              },
              {
                "id": "r3",
                "label": "Pair correction with one timed transfer item"
              }
            ],
            "pairs": [
              {
                "leftId": "l1",
                "rightId": "r1"
              },
              {
                "leftId": "l2",
                "rightId": "r2"
              },
              {
                "leftId": "l3",
                "rightId": "r3"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "financial-literacy-201-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "financial-literacy-201-l15",
      "title": "Financial Literacy II Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "financial-literacy-201-l15-q1",
          "text": "Which statement best explains opportunity cost in Financial Literacy?",
          "skillId": "financial-literacy-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains opportunity cost using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how opportunity cost works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Financial Literacy."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-201-l15-q2",
          "text": "What is the best first step when analyzing risk and return?",
          "skillId": "financial-literacy-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for risk and return."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to risk and return."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-201-l15-q3",
          "text": "Which option shows strong reasoning about financial decision-making?",
          "skillId": "financial-literacy-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Use examples and verify assumptions step by step."
            },
            {
              "id": "b",
              "text": "Ignore important details and edge cases."
            },
            {
              "id": "c",
              "text": "Use assumptions unrelated to financial decision-making."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-201-l15-q4",
          "text": "Why is spaced review useful for Financial Literacy mastery?",
          "skillId": "financial-literacy-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It strengthens memory and transfer over time"
            },
            {
              "id": "b",
              "text": "It creates confusion"
            },
            {
              "id": "c",
              "text": "It removes key facts"
            },
            {
              "id": "d",
              "text": "It has no value"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "financial-literacy-201-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Financial Literacy II Mastery Mastery Sprint",
          "description": "Match each error signal to the strongest correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Confusion about opportunity cost"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to risk and return"
              },
              {
                "id": "l3",
                "label": "Weak transfer of financial decision-making under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create a one-step concept summary with one worked example"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
              },
              {
                "id": "r3",
                "label": "Retest the same target with a short timed sprint"
              }
            ],
            "pairs": [
              {
                "leftId": "l1",
                "rightId": "r1"
              },
              {
                "leftId": "l2",
                "rightId": "r2"
              },
              {
                "leftId": "l3",
                "rightId": "r3"
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "financial-literacy-201-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
