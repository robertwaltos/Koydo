import type { LearningModule } from "@/lib/modules/types";

export const AdvancedMath301Module: LearningModule = {
  "id": "advanced-math-301",
  "title": "Advanced Math Modeling",
  "description": "Apply algebra, functions, and probability to rigorous modeling and decision scenarios.",
  "subject": "Advanced Math",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Advanced Math",
    "Apply Quantitative Decisions strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "advanced-math-301-l01",
      "title": "Modeling with Functions",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "advanced-math-301-l01-c1",
          "title": "Modeling with Functions Overview",
          "content": "In this lesson, we will dive into the fascinating world of function modeling, an important aspect of advanced mathematical modeling. Function modeling helps us understand how different quantities relate to each other and how we can use these relationships to solve problems. Our main goal today is to learn how to identify strong reasoning skills, which are essential for tackling complex mathematical challenges. By the end of this lesson, you will be equipped to recognize what effective reasoning looks like and how it can assist you in finding solutions to various mathematical puzzles. This knowledge will not only enhance your problem-solving abilities but also prepare you for more advanced topics in math. Let's get started on this exciting journey together!"
        },
        {
          "id": "advanced-math-301-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will discuss how function modeling and optimization work hand in hand to help us achieve our goals. To begin, we will identify the main target we want to reach. After that, we will explore the evidence or steps that support our target. This process will help us understand how to effectively use mathematical functions to optimize our results and make informed decisions.\nContext recap: In this section, we will discuss how function modeling and optimization work hand in hand to help us achieve our goals. To begin, we will identify the main target we want to reach. After that, we will explore the evidence or steps that support our target. This process will help us understand how to effectively use mathematical functions to optimize our results and make informed decisions."
        },
        {
          "id": "advanced-math-301-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! First, we will define a clear goal that we want to achieve. Next, we will apply a strategy for optimization, which means finding the best way to reach our goal. Finally, we will verify our result with a quick check to ensure that our solution is correct. This step-by-step approach will help you understand how to tackle similar problems in the future.\nContext recap: Let's walk through a guided example together! First, we will define a clear goal that we want to achieve. Next, we will apply a strategy for optimization, which means finding the best way to reach our goal. Finally, we will verify our result with a quick check to ensure that our solution is correct."
        },
        {
          "id": "advanced-math-301-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to shine! Take the process we just learned and use it to tackle a new scenario. As you work through this challenge, make sure to explain in one clear sentence why your approach makes sense. This exercise will not only help you practice your reasoning skills but also strengthen your understanding of how we model functions and optimize solutions. Remember, the clearer your explanation, the better you'll grasp these important concepts!\nContext recap: Now it's your turn to shine! Take the process we just learned and use it to tackle a new scenario. As you work through this challenge, make sure to explain in one clear sentence why your approach makes sense. This exercise will not only help you practice your reasoning skills but also strengthen your understanding of how we model functions and optimize solutions."
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-301-l01-f1",
          "front": "function modeling",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "advanced-math-301-l01-f2",
          "front": "optimization",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "advanced-math-301-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "advanced-math-301-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-301-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about function modeling and optimization."
        },
        {
          "id": "advanced-math-301-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Advanced Math vocabulary."
        }
      ]
    },
    {
      "id": "advanced-math-301-l02",
      "title": "Parameter Changes and Sensitivity",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about function modeling from this lesson.",
          "Explain where optimization appears in real life.",
          "Describe one question you still have about advanced mathematical modeling."
        ]
      },
      "interactiveActivities": [
        {
          "id": "advanced-math-301-l02-ia1",
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
                "label": "Set a goal for function modeling",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for optimization",
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
          "id": "advanced-math-301-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on optimization and write one reflection."
        }
      ]
    },
    {
      "id": "advanced-math-301-l03",
      "title": "Checkpoint: Function Modeling",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "advanced-math-301-l03-q1",
          "text": "Which statement best explains function modeling in Advanced Math?",
          "skillId": "advanced-math-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains function modeling using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how function modeling works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Advanced Math."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l03-q2",
          "text": "What is the best first step when analyzing optimization?",
          "skillId": "advanced-math-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for optimization."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to optimization."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l03-q3",
          "text": "Which option shows strong reasoning about advanced mathematical modeling?",
          "skillId": "advanced-math-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to advanced mathematical modeling."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l03-q4",
          "text": "Why is spaced review useful for Advanced Math mastery?",
          "skillId": "advanced-math-301-skill-review",
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
          "id": "advanced-math-301-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Function Modeling",
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
                "label": "Confusion about function modeling"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to optimization"
              },
              {
                "id": "l3",
                "label": "Weak transfer of advanced mathematical modeling under timing"
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
          "id": "advanced-math-301-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "advanced-math-301-l04",
      "title": "Optimization Strategy",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "advanced-math-301-l04-c1",
          "title": "Optimization Strategy Focus",
          "content": "In this lesson, we will dive deeper into probabilistic reasoning, which is a way of making decisions based on the likelihood of different outcomes. We will move from simply understanding concepts to applying them in real-world situations. By the end of this lesson, you will be able to use structured reasoning to make informed decisions based on probabilities.\nContext recap: In this lesson, we will dive deeper into probabilistic reasoning, which is a way of making decisions based on the likelihood of different outcomes. We will move from simply understanding concepts to applying them in real-world situations. By the end of this lesson, you will be able to use structured reasoning to make informed decisions based on probabilities."
        },
        {
          "id": "advanced-math-301-l04-c2",
          "title": "Method Steps",
          "content": "Let's break down the steps for using an optimization strategy! Step 1: Identify what is being asked in the problem. Step 2: Choose a strategy that aligns with probabilistic reasoning to help you find the best solution. Step 3: Justify your choice with evidence to support your reasoning. Following these steps will guide you in making effective decisions.\nContext recap: Let's break down the steps for using an optimization strategy! Step 1: Identify what is being asked in the problem. Step 2: Choose a strategy that aligns with probabilistic reasoning to help you find the best solution. Step 3: Justify your choice with evidence to support your reasoning."
        },
        {
          "id": "advanced-math-301-l04-c3",
          "title": "Common Mistakes",
          "content": "As we learn, it's important to be aware of common mistakes that can happen. Some common errors include skipping the setup of the problem, using assumptions that are not related to the question, or failing to verify the final result. By recognizing these pitfalls, you can improve your problem-solving skills and avoid making the same mistakes.\nContext recap: As we learn, it's important to be aware of common mistakes that can happen. Some common errors include skipping the setup of the problem, using assumptions that are not related to the question, or failing to verify the final result. By recognizing these pitfalls, you can improve your problem-solving skills and avoid making the same mistakes."
        },
        {
          "id": "advanced-math-301-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar problem on your own! As you work through it, compare your process to the lesson sequence we discussed. This will help you reflect on your approach and see how well you understood the concepts we covered.\nContext recap: Now, it's time for you to try solving a similar problem on your own! As you work through it, compare your process to the lesson sequence we discussed. This will help you reflect on your approach and see how well you understood the concepts we covered."
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-301-l04-f1",
          "front": "probabilistic reasoning",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "advanced-math-301-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "advanced-math-301-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "advanced-math-301-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-301-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for probabilistic reasoning scenarios."
        }
      ]
    },
    {
      "id": "advanced-math-301-l05",
      "title": "Uncertainty and Probability Models",
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
          "id": "advanced-math-301-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "probabilistic reasoning Concept"
              },
              {
                "id": "process",
                "label": "proof structure Process"
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
          "id": "advanced-math-301-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a probabilistic reasoning challenge."
        }
      ]
    },
    {
      "id": "advanced-math-301-l06",
      "title": "Checkpoint: Quantitative Decisions",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "advanced-math-301-l06-q1",
          "text": "Which statement best explains probabilistic reasoning in Advanced Math?",
          "skillId": "advanced-math-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains probabilistic reasoning using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how probabilistic reasoning works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Advanced Math."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l06-q2",
          "text": "What is the best first step when analyzing proof structure?",
          "skillId": "advanced-math-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for proof structure."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to proof structure."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l06-q3",
          "text": "Which option shows strong reasoning about advanced mathematical modeling?",
          "skillId": "advanced-math-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to advanced mathematical modeling."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l06-q4",
          "text": "Why is spaced review useful for Advanced Math mastery?",
          "skillId": "advanced-math-301-skill-review",
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
          "id": "advanced-math-301-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Quantitative Decisions",
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
                "label": "Confusion about probabilistic reasoning"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to proof structure"
              },
              {
                "id": "l3",
                "label": "Weak transfer of advanced mathematical modeling under timing"
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
          "id": "advanced-math-301-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "advanced-math-301-l07",
      "title": "Argument and Proof Moves",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "advanced-math-301-l07-c1",
          "title": "Argument and Proof Moves Setup",
          "content": "Before you start working on a proof, it's essential to use a structured approach to organize your thoughts. Planning your proof first can significantly improve both the quality of your work and the speed at which you complete it. This preparation will help you present your arguments clearly and effectively.\nContext recap: Before you start working on a proof, it's essential to use a structured approach to organize your thoughts. Planning your proof first can significantly improve both the quality of your work and the speed at which you complete it. This preparation will help you present your arguments clearly and effectively."
        },
        {
          "id": "advanced-math-301-l07-c2",
          "title": "Decision Rules",
          "content": "When you have to choose between different options, it can sometimes be tricky to decide which one is the best. A great way to make this decision easier is to follow a simple rule. Always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. By using this strategy, you will not only make better choices but also build stronger arguments that can help you explain your thinking to others. This approach encourages careful consideration and helps you understand the importance of backing up your decisions with solid reasons."
        },
        {
          "id": "advanced-math-301-l07-c3",
          "title": "Quality Control",
          "content": "As you review your work, check for three important things: accuracy, completeness, and alignment with your original objective. Ensuring that your proof meets these criteria will help you maintain high standards in your mathematical reasoning and argumentation.\nContext recap: As you review your work, check for three important things: accuracy, completeness, and alignment with your original objective. Ensuring that your proof meets these criteria will help you maintain high standards in your mathematical reasoning and argumentation.\nWhy this matters: Quality Control helps learners in Advanced Math connect ideas from Advanced Math Modeling to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "advanced-math-301-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your practice, take a moment to write down one action you would like to repeat in your next round and one action you want to improve. This reflection will help you set goals for your future practice and enhance your learning experience.\nContext recap: After completing your practice, take a moment to write down one action you would like to repeat in your next round and one action you want to improve. This reflection will help you set goals for your future practice and enhance your learning experience."
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-301-l07-f1",
          "front": "proof structure",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "advanced-math-301-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "advanced-math-301-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "advanced-math-301-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-301-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on proof structure."
        }
      ]
    },
    {
      "id": "advanced-math-301-l08",
      "title": "Model Critique Workshop",
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
          "id": "advanced-math-301-l08-ia1",
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
          "id": "advanced-math-301-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "advanced-math-301-l09",
      "title": "Review: Advanced Math Models",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "advanced-math-301-l09-q1",
          "text": "Which statement best explains optimization in Advanced Math?",
          "skillId": "advanced-math-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains optimization using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how optimization works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Advanced Math."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l09-q2",
          "text": "What is the best first step when analyzing proof structure?",
          "skillId": "advanced-math-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for proof structure."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to proof structure."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l09-q3",
          "text": "Which option shows strong reasoning about advanced mathematical modeling?",
          "skillId": "advanced-math-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to advanced mathematical modeling."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l09-q4",
          "text": "Why is spaced review useful for Advanced Math mastery?",
          "skillId": "advanced-math-301-skill-review",
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
          "id": "advanced-math-301-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Advanced Math Models",
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
                "label": "Confusion about optimization"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to proof structure"
              },
              {
                "id": "l3",
                "label": "Weak transfer of advanced mathematical modeling under timing"
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
          "id": "advanced-math-301-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "advanced-math-301-l10",
      "title": "Mastery: Advanced Math III",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "advanced-math-301-l10-q1",
          "text": "Which statement best explains function modeling in Advanced Math?",
          "skillId": "advanced-math-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains function modeling using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how function modeling works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Advanced Math."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l10-q2",
          "text": "What is the best first step when analyzing probabilistic reasoning?",
          "skillId": "advanced-math-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for probabilistic reasoning."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to probabilistic reasoning."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l10-q3",
          "text": "Which option shows strong reasoning about advanced mathematical modeling?",
          "skillId": "advanced-math-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to advanced mathematical modeling."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l10-q4",
          "text": "Why is spaced review useful for Advanced Math mastery?",
          "skillId": "advanced-math-301-skill-review",
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
          "id": "advanced-math-301-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Advanced Math III",
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
                "label": "Confusion about function modeling"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to probabilistic reasoning"
              },
              {
                "id": "l3",
                "label": "Weak transfer of advanced mathematical modeling under timing"
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
          "id": "advanced-math-301-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "advanced-math-301-l11",
      "title": "Applied Advanced Math Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using probabilistic reasoning.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "advanced-math-301-l11-ia1",
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
                "label": "Tag repeated mistakes in optimization",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on proof structure",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-301-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "advanced-math-301-l12",
      "title": "Advanced Math III Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "advanced-math-301-l12-q1",
          "text": "Which statement best explains function modeling in Advanced Math?",
          "skillId": "advanced-math-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains function modeling using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how function modeling works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Advanced Math."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l12-q2",
          "text": "What is the best first step when analyzing proof structure?",
          "skillId": "advanced-math-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for proof structure."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to proof structure."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l12-q3",
          "text": "Which option shows strong reasoning about advanced mathematical modeling?",
          "skillId": "advanced-math-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to advanced mathematical modeling."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l12-q4",
          "text": "Why is spaced review useful for Advanced Math mastery?",
          "skillId": "advanced-math-301-skill-review",
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
          "id": "advanced-math-301-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Advanced Math III Mastery Applied Retest",
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
                "label": "Confusion about function modeling"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to proof structure"
              },
              {
                "id": "l3",
                "label": "Weak transfer of advanced mathematical modeling under timing"
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
          "id": "advanced-math-301-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "advanced-math-301-l13",
      "title": "Advanced Math Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "advanced-math-301-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, we will explore how to combine different mathematical concepts such as function modeling, probabilistic reasoning, and proof structure. This challenge will help you understand how these ideas work together in real-life situations, making math not just a subject, but a powerful tool for solving problems.\nContext recap: In this exciting scenario, we will explore how to combine different mathematical concepts such as function modeling, probabilistic reasoning, and proof structure. This challenge will help you understand how these ideas work together in real-life situations, making math not just a subject, but a powerful tool for solving problems."
        },
        {
          "id": "advanced-math-301-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, it’s important to break it down into smaller, more manageable decisions. Think of each decision point as a step in a journey. For each step, choose a specific strategy that will guide you in making the best choice. This way, you can focus on one part at a time and build a strong plan.\nContext recap: To tackle this scenario effectively, it’s important to break it down into smaller, more manageable decisions. Think of each decision point as a step in a journey. For each step, choose a specific strategy that will guide you in making the best choice. This way, you can focus on one part at a time and build a strong plan."
        },
        {
          "id": "advanced-math-301-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it’s time to put your plan into action! As you execute each step, make sure to explain your reasoning clearly. Use evidence and logical reasoning to support your choices, rather than relying on guesses. This will help you understand the importance of justification in math and strengthen your problem-solving skills.\nContext recap: Now it’s time to put your plan into action! As you execute each step, make sure to explain your reasoning clearly. Use evidence and logical reasoning to support your choices, rather than relying on guesses. This will help you understand the importance of justification in math and strengthen your problem-solving skills."
        },
        {
          "id": "advanced-math-301-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After you have completed your scenario, it’s essential to evaluate the outcome. Take a moment to compare your results with the target you aimed for. Identify what worked well and what might need some adjustments. This reflection will help you learn from the experience and improve your approach for future challenges.\nContext recap: After you have completed your scenario, it’s essential to evaluate the outcome. Take a moment to compare your results with the target you aimed for. Identify what worked well and what might need some adjustments. This reflection will help you learn from the experience and improve your approach for future challenges."
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-301-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "advanced-math-301-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "advanced-math-301-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "advanced-math-301-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-301-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting function modeling, probabilistic reasoning, and proof structure."
        },
        {
          "id": "advanced-math-301-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "advanced-math-301-l14",
      "title": "Advanced Math Coaching Clinic",
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
          "id": "advanced-math-301-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on function modeling setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed proof structure decisions"
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
          "id": "advanced-math-301-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "advanced-math-301-l15",
      "title": "Advanced Math III Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "advanced-math-301-l15-q1",
          "text": "Which statement best explains optimization in Advanced Math?",
          "skillId": "advanced-math-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains optimization using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how optimization works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Advanced Math."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l15-q2",
          "text": "What is the best first step when analyzing probabilistic reasoning?",
          "skillId": "advanced-math-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for probabilistic reasoning."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to probabilistic reasoning."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l15-q3",
          "text": "Which option shows strong reasoning about advanced mathematical modeling?",
          "skillId": "advanced-math-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to advanced mathematical modeling."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l15-q4",
          "text": "Why is spaced review useful for Advanced Math mastery?",
          "skillId": "advanced-math-301-skill-review",
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
          "id": "advanced-math-301-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Advanced Math III Mastery Mastery Sprint",
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
                "label": "Confusion about optimization"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to probabilistic reasoning"
              },
              {
                "id": "l3",
                "label": "Weak transfer of advanced mathematical modeling under timing"
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
          "id": "advanced-math-301-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
