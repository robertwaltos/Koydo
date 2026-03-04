import type { LearningModule } from "@/lib/modules/types";

export const FinancialLiteracy401Module: LearningModule = {
  "id": "financial-literacy-401",
  "title": "Financial Capstone Planning",
  "description": "Construct long-horizon financial plans using scenario analysis, risk controls, and tradeoff logic.",
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
    "Apply Strategic Tradeoff Quality strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "financial-literacy-401-l01",
      "title": "Long-Term Forecast Building",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "financial-literacy-401-l01-c1",
          "title": "Long-Term Forecast Building Overview",
          "content": "In this lesson, we will dive into the exciting world of long-term forecasting, which is a key part of capstone financial planning. Long-term forecasting helps us predict what might happen in the future with our finances, allowing us to make smart choices today. Our main goal is to learn how to identify what strong reasoning looks like when we analyze different financial situations. This understanding is crucial because it will empower us to make informed decisions as we navigate through various financial scenarios. By the end of this lesson, you will have the skills and confidence to tackle financial planning with clarity and purpose, setting you up for success in your future endeavors."
        },
        {
          "id": "financial-literacy-401-l01-c2",
          "title": "Core Concept",
          "content": "Long-term forecasting and risk mitigation are two key concepts that work hand in hand. To begin, we will identify our main target or goal. Once we have that in mind, we will look for the evidence or steps that support our goal. This process will help us understand how to make informed decisions that can minimize risks while aiming for our financial objectives. Remember, having a clear target is essential for effective planning!\nContext recap: Long-term forecasting and risk mitigation are two key concepts that work hand in hand. To begin, we will identify our main target or goal. Once we have that in mind, we will look for the evidence or steps that support our goal. This process will help us understand how to make informed decisions that can minimize risks while aiming for our financial objectives."
        },
        {
          "id": "financial-literacy-401-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! First, we will define a specific goal we want to achieve. Next, we will apply a strategy for risk mitigation, which means finding ways to protect ourselves from potential problems. Finally, we will verify our result with a quick check to ensure that our approach is sound. This step-by-step process will help you understand how to apply these concepts in real-life situations.\nContext recap: Let's walk through a guided example together! First, we will define a specific goal we want to achieve. Next, we will apply a strategy for risk mitigation, which means finding ways to protect ourselves from potential problems. Finally, we will verify our result with a quick check to ensure that our approach is sound."
        },
        {
          "id": "financial-literacy-401-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to apply what you've learned! Take a new scenario and use the same process we discussed. As you work through it, be sure to explain why your approach is valid in one clear sentence. This exercise will help reinforce your understanding and give you the confidence to tackle different financial situations in the future.\nContext recap: Now it's your turn to apply what you've learned! Take a new scenario and use the same process we discussed. As you work through it, be sure to explain why your approach is valid in one clear sentence. This exercise will help reinforce your understanding and give you the confidence to tackle different financial situations in the future."
        }
      ],
      "flashcards": [
        {
          "id": "financial-literacy-401-l01-f1",
          "front": "long-term forecasting",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "financial-literacy-401-l01-f2",
          "front": "risk mitigation",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "financial-literacy-401-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "financial-literacy-401-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "financial-literacy-401-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about long-term forecasting and risk mitigation."
        },
        {
          "id": "financial-literacy-401-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Financial Literacy vocabulary."
        }
      ]
    },
    {
      "id": "financial-literacy-401-l02",
      "title": "Risk Mitigation Playbooks",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about long-term forecasting from this lesson.",
          "Explain where risk mitigation appears in real life.",
          "Describe one question you still have about capstone financial planning."
        ]
      },
      "interactiveActivities": [
        {
          "id": "financial-literacy-401-l02-ia1",
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
                "label": "Set a goal for long-term forecasting",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for risk mitigation",
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
          "id": "financial-literacy-401-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on risk mitigation and write one reflection."
        }
      ]
    },
    {
      "id": "financial-literacy-401-l03",
      "title": "Checkpoint: Financial Plan Design",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "financial-literacy-401-l03-q1",
          "text": "Which statement best explains long-term forecasting in Financial Literacy?",
          "skillId": "financial-literacy-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains long-term forecasting using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how long-term forecasting works in practice."
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
          "id": "financial-literacy-401-l03-q2",
          "text": "What is the best first step when analyzing risk mitigation?",
          "skillId": "financial-literacy-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for risk mitigation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to risk mitigation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-401-l03-q3",
          "text": "Which option shows strong reasoning about capstone financial planning?",
          "skillId": "financial-literacy-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone financial planning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-401-l03-q4",
          "text": "Why is spaced review useful for Financial Literacy mastery?",
          "skillId": "financial-literacy-401-skill-review",
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
          "id": "financial-literacy-401-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Financial Plan Design",
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
                "label": "Confusion about long-term forecasting"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to risk mitigation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone financial planning under timing"
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
          "id": "financial-literacy-401-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "financial-literacy-401-l04",
      "title": "Portfolio Logic and Rebalancing",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "financial-literacy-401-l04-c1",
          "title": "Portfolio Logic and Rebalancing Focus",
          "content": "In this lesson, we will deepen our understanding of portfolio logic by using structured reasoning. We will move beyond just understanding concepts to making applied decisions that can impact our financial future. This means we will learn how to think critically about our investment choices and how to adjust our portfolios effectively over time.\nContext recap: In this lesson, we will deepen our understanding of portfolio logic by using structured reasoning. We will move beyond just understanding concepts to making applied decisions that can impact our financial future. This means we will learn how to think critically about our investment choices and how to adjust our portfolios effectively over time."
        },
        {
          "id": "financial-literacy-401-l04-c2",
          "title": "Method Steps",
          "content": "Let's break down the method steps for making informed decisions about our portfolios. Step 1: Identify what is being asked in the situation. Step 2: Choose a strategy that aligns with the principles of portfolio logic. Step 3: Justify your choice with evidence that supports your decision. Following these steps will help you make thoughtful and informed choices regarding your investments.\nContext recap: Let's break down the method steps for making informed decisions about our portfolios. Step 1: Identify what is being asked in the situation. Step 2: Choose a strategy that aligns with the principles of portfolio logic. Step 3: Justify your choice with evidence that supports your decision."
        },
        {
          "id": "financial-literacy-401-l04-c3",
          "title": "Common Mistakes",
          "content": "It's important to be aware of common mistakes that can occur during this process. Some frequent errors include skipping the setup phase, using unrelated assumptions, or failing to verify the final result. By recognizing these pitfalls, you can avoid them and improve your decision-making skills. Remember, careful planning and verification are key to successful financial management!\nContext recap: It's important to be aware of common mistakes that can occur during this process. Some frequent errors include skipping the setup phase, using unrelated assumptions, or failing to verify the final result. By recognizing these pitfalls, you can avoid them and improve your decision-making skills. Remember, careful planning and verification are key to successful financial management!"
        },
        {
          "id": "financial-literacy-401-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar problem on your own! As you work through it, compare your process to the lesson sequence we discussed. This will help you see how well you understand the material and where you might need to improve. Don't hesitate to revisit the steps if you need a refresher!\nContext recap: Now, it's time for you to try solving a similar problem on your own! As you work through it, compare your process to the lesson sequence we discussed. This will help you see how well you understand the material and where you might need to improve. Don't hesitate to revisit the steps if you need a refresher!"
        }
      ],
      "flashcards": [
        {
          "id": "financial-literacy-401-l04-f1",
          "front": "portfolio logic",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "financial-literacy-401-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "financial-literacy-401-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "financial-literacy-401-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "financial-literacy-401-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for portfolio logic scenarios."
        }
      ]
    },
    {
      "id": "financial-literacy-401-l05",
      "title": "Stress Testing Decisions",
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
          "id": "financial-literacy-401-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "portfolio logic Concept"
              },
              {
                "id": "process",
                "label": "decision resilience Process"
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
          "id": "financial-literacy-401-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a portfolio logic challenge."
        }
      ]
    },
    {
      "id": "financial-literacy-401-l06",
      "title": "Checkpoint: Strategic Tradeoff Quality",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "financial-literacy-401-l06-q1",
          "text": "Which statement best explains portfolio logic in Financial Literacy?",
          "skillId": "financial-literacy-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains portfolio logic using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how portfolio logic works in practice."
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
          "id": "financial-literacy-401-l06-q2",
          "text": "What is the best first step when analyzing decision resilience?",
          "skillId": "financial-literacy-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for decision resilience."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to decision resilience."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-401-l06-q3",
          "text": "Which option shows strong reasoning about capstone financial planning?",
          "skillId": "financial-literacy-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone financial planning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-401-l06-q4",
          "text": "Why is spaced review useful for Financial Literacy mastery?",
          "skillId": "financial-literacy-401-skill-review",
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
          "id": "financial-literacy-401-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Strategic Tradeoff Quality",
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
                "label": "Confusion about portfolio logic"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to decision resilience"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone financial planning under timing"
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
          "id": "financial-literacy-401-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "financial-literacy-401-l07",
      "title": "Behavioral Bias and Discipline",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "financial-literacy-401-l07-c1",
          "title": "Behavioral Bias and Discipline Setup",
          "content": "Before you start making decisions, it's important to use decision resilience to organize your approach. Planning ahead can significantly improve both the quality and speed of your decision-making process. By taking the time to think through your options, you can make more informed choices that align with your goals.\nContext recap: Before you start making decisions, it's important to use decision resilience to organize your approach. Planning ahead can significantly improve both the quality and speed of your decision-making process. By taking the time to think through your options, you can make more informed choices that align with your goals."
        },
        {
          "id": "financial-literacy-401-l07-c2",
          "title": "Decision Rules",
          "content": "When you have to make a choice between different options, it can sometimes be confusing. A good way to make a decision is to follow a simple rule: always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. This approach helps you make smart decisions that are logical and effective, guiding you toward reaching your goals successfully.\nContext recap: When you have to make a choice between different options, it can sometimes be confusing. A good way to make a decision is to follow a simple rule: always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. This approach helps you make smart decisions that are logical and effective, guiding you toward reaching your goals successfully."
        },
        {
          "id": "financial-literacy-401-l07-c3",
          "title": "Quality Control",
          "content": "To ensure the quality of your decisions, check for three important things: accuracy, completeness, and alignment with your original objective. By verifying these aspects, you can be more confident in the choices you make and their potential impact on your financial journey.\nContext recap: To ensure the quality of your decisions, check for three important things: accuracy, completeness, and alignment with your original objective. By verifying these aspects, you can be more confident in the choices you make and their potential impact on your financial journey."
        },
        {
          "id": "financial-literacy-401-l07-c4",
          "title": "Next-Step Plan",
          "content": "As you reflect on your practice, write down one action you want to repeat in your next round and one action you would like to improve. This reflection will help you grow and develop your skills further, making you a more effective decision-maker in the future.\nContext recap: As you reflect on your practice, write down one action you want to repeat in your next round and one action you would like to improve. This reflection will help you grow and develop your skills further, making you a more effective decision-maker in the future."
        }
      ],
      "flashcards": [
        {
          "id": "financial-literacy-401-l07-f1",
          "front": "decision resilience",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "financial-literacy-401-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "financial-literacy-401-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "financial-literacy-401-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "financial-literacy-401-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on decision resilience."
        }
      ]
    },
    {
      "id": "financial-literacy-401-l08",
      "title": "Financial Plan Clinic",
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
          "id": "financial-literacy-401-l08-ia1",
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
          "id": "financial-literacy-401-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "financial-literacy-401-l09",
      "title": "Review: Durable Money Systems",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "financial-literacy-401-l09-q1",
          "text": "Which statement best explains risk mitigation in Financial Literacy?",
          "skillId": "financial-literacy-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains risk mitigation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how risk mitigation works in practice."
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
          "id": "financial-literacy-401-l09-q2",
          "text": "What is the best first step when analyzing decision resilience?",
          "skillId": "financial-literacy-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for decision resilience."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to decision resilience."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-401-l09-q3",
          "text": "Which option shows strong reasoning about capstone financial planning?",
          "skillId": "financial-literacy-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone financial planning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-401-l09-q4",
          "text": "Why is spaced review useful for Financial Literacy mastery?",
          "skillId": "financial-literacy-401-skill-review",
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
          "id": "financial-literacy-401-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Durable Money Systems",
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
                "label": "Confusion about risk mitigation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to decision resilience"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone financial planning under timing"
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
          "id": "financial-literacy-401-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "financial-literacy-401-l10",
      "title": "Mastery: Financial Literacy IV",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "financial-literacy-401-l10-q1",
          "text": "Which statement best explains long-term forecasting in Financial Literacy?",
          "skillId": "financial-literacy-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains long-term forecasting using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how long-term forecasting works in practice."
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
          "id": "financial-literacy-401-l10-q2",
          "text": "What is the best first step when analyzing portfolio logic?",
          "skillId": "financial-literacy-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for portfolio logic."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to portfolio logic."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-401-l10-q3",
          "text": "Which option shows strong reasoning about capstone financial planning?",
          "skillId": "financial-literacy-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone financial planning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-401-l10-q4",
          "text": "Why is spaced review useful for Financial Literacy mastery?",
          "skillId": "financial-literacy-401-skill-review",
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
          "id": "financial-literacy-401-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Financial Literacy IV",
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
                "label": "Confusion about long-term forecasting"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to portfolio logic"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone financial planning under timing"
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
          "id": "financial-literacy-401-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "financial-literacy-401-l11",
      "title": "Applied Financial Literacy Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using portfolio logic.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "financial-literacy-401-l11-ia1",
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
                "label": "Tag repeated mistakes in risk mitigation",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on decision resilience",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "financial-literacy-401-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "financial-literacy-401-l12",
      "title": "Financial Literacy IV Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "financial-literacy-401-l12-q1",
          "text": "Which statement best explains long-term forecasting in Financial Literacy?",
          "skillId": "financial-literacy-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains long-term forecasting using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how long-term forecasting works in practice."
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
          "id": "financial-literacy-401-l12-q2",
          "text": "What is the best first step when analyzing decision resilience?",
          "skillId": "financial-literacy-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for decision resilience."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to decision resilience."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-401-l12-q3",
          "text": "Which option shows strong reasoning about capstone financial planning?",
          "skillId": "financial-literacy-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone financial planning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-401-l12-q4",
          "text": "Why is spaced review useful for Financial Literacy mastery?",
          "skillId": "financial-literacy-401-skill-review",
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
          "id": "financial-literacy-401-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Financial Literacy IV Mastery Applied Retest",
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
                "label": "Confusion about long-term forecasting"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to decision resilience"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone financial planning under timing"
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
          "id": "financial-literacy-401-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "financial-literacy-401-l13",
      "title": "Financial Literacy Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "financial-literacy-401-l13-c1",
          "title": "Scenario Brief",
          "content": "In this scenario, you will face a challenge that requires you to think about the future. You will need to use skills like predicting long-term outcomes, understanding how to manage a collection of investments, and staying strong in your decisions even when things get tough. This is a great opportunity to apply what you have learned in a real-world context!\nContext recap: In this scenario, you will face a challenge that requires you to think about the future. You will need to use skills like predicting long-term outcomes, understanding how to manage a collection of investments, and staying strong in your decisions even when things get tough. This is a great opportunity to apply what you have learned in a real-world context!"
        },
        {
          "id": "financial-literacy-401-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, start by breaking it down into smaller, more manageable decisions. For each decision point, think about a specific strategy you can use. This will help you stay organized and make clearer choices as you work through the challenge.\nContext recap: To tackle this scenario effectively, start by breaking it down into smaller, more manageable decisions. For each decision point, think about a specific strategy you can use. This will help you stay organized and make clearer choices as you work through the challenge."
        },
        {
          "id": "financial-literacy-401-l13-c3",
          "title": "Execute and Justify",
          "content": "Once you have your plan ready, it's time to put it into action! As you execute your plan, make sure to explain each step you take. Use facts and evidence to support your choices, rather than making random guesses. This will help you understand the reasoning behind your decisions.\nContext recap: Once you have your plan ready, it's time to put it into action! As you execute your plan, make sure to explain each step you take. Use facts and evidence to support your choices, rather than making random guesses. This will help you understand the reasoning behind your decisions."
        },
        {
          "id": "financial-literacy-401-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After you have completed your scenario, take a moment to evaluate the outcome. Compare what you achieved with the goals you set at the beginning. Identify which parts of your plan worked well and which areas might need some changes. This reflection will help you improve your future decision-making skills.\nContext recap: After you have completed your scenario, take a moment to evaluate the outcome. Compare what you achieved with the goals you set at the beginning. Identify which parts of your plan worked well and which areas might need some changes. This reflection will help you improve your future decision-making skills."
        }
      ],
      "flashcards": [
        {
          "id": "financial-literacy-401-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "financial-literacy-401-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "financial-literacy-401-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "financial-literacy-401-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "financial-literacy-401-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting long-term forecasting, portfolio logic, and decision resilience."
        },
        {
          "id": "financial-literacy-401-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "financial-literacy-401-l14",
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
          "id": "financial-literacy-401-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on long-term forecasting setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed decision resilience decisions"
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
          "id": "financial-literacy-401-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "financial-literacy-401-l15",
      "title": "Financial Literacy IV Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "financial-literacy-401-l15-q1",
          "text": "Which statement best explains risk mitigation in Financial Literacy?",
          "skillId": "financial-literacy-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains risk mitigation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how risk mitigation works in practice."
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
          "id": "financial-literacy-401-l15-q2",
          "text": "What is the best first step when analyzing portfolio logic?",
          "skillId": "financial-literacy-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for portfolio logic."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to portfolio logic."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-401-l15-q3",
          "text": "Which option shows strong reasoning about capstone financial planning?",
          "skillId": "financial-literacy-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone financial planning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "financial-literacy-401-l15-q4",
          "text": "Why is spaced review useful for Financial Literacy mastery?",
          "skillId": "financial-literacy-401-skill-review",
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
          "id": "financial-literacy-401-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Financial Literacy IV Mastery Mastery Sprint",
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
                "label": "Confusion about risk mitigation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to portfolio logic"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone financial planning under timing"
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
          "id": "financial-literacy-401-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
