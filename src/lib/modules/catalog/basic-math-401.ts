import type { LearningModule } from "@/lib/modules/types";

export const BasicMath401Module: LearningModule = {
  "id": "basic-math-401",
  "title": "Math Capstone Reasoning",
  "description": "Apply core quantitative reasoning to integrated, context-rich multi-step challenges.",
  "subject": "Math",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Math",
    "Apply Quantitative Validation strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "basic-math-401-l01",
      "title": "Integrated Operation Strategies",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "basic-math-401-l01-c1",
          "title": "Integrated Operation Strategies Overview",
          "content": "In this lesson, we will embark on an exciting journey into the world of integrated operations! We will focus on how these operations connect to capstone quantitative reasoning, which is a fancy way of saying that we will learn how to think critically about numbers and math problems. Our main goal is to understand what strong reasoning looks like before we start solving any problems. By recognizing effective reasoning, we can boost our problem-solving skills and make smarter decisions not just in math, but in many areas of our lives. So, let's get ready to sharpen our minds and become math whizzes together!"
        },
        {
          "id": "basic-math-401-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will explore how integrated operations and data-backed decisions work together in a smart and effective way. First, we will identify the main goal we want to achieve. This goal is like a target we aim for. After that, we will look for the evidence or steps that help us reach our goal. This process is important because it allows us to make choices based on strong reasoning and facts, which is essential for solving problems successfully. By understanding how these elements connect, we can become better decision-makers and thinkers."
        },
        {
          "id": "basic-math-401-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! First, we will define our goal clearly. Then, we will apply a strategy that uses data-backed decisions to help us reach that goal. Finally, we will verify our result with a quick check to ensure that our solution is correct. This step-by-step approach will help you understand how to apply these concepts in real-life situations.\nContext recap: Let's walk through a guided example together! First, we will define our goal clearly. Then, we will apply a strategy that uses data-backed decisions to help us reach that goal. Finally, we will verify our result with a quick check to ensure that our solution is correct."
        },
        {
          "id": "basic-math-401-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn! Apply the same process we just learned to a new scenario. As you work through it, make sure to explain why your approach is valid in one clear sentence. This exercise will help reinforce your understanding and allow you to practice your reasoning skills in different contexts.\nContext recap: Now it's your turn! Apply the same process we just learned to a new scenario. As you work through it, make sure to explain why your approach is valid in one clear sentence. This exercise will help reinforce your understanding and allow you to practice your reasoning skills in different contexts."
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-401-l01-f1",
          "front": "integrated operations",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "basic-math-401-l01-f2",
          "front": "data-backed decisions",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "basic-math-401-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "basic-math-401-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-401-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about integrated operations and data-backed decisions."
        },
        {
          "id": "basic-math-401-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Math vocabulary."
        }
      ]
    },
    {
      "id": "basic-math-401-l02",
      "title": "Data-Backed Quantitative Decisions",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about integrated operations from this lesson.",
          "Explain where data-backed decisions appears in real life.",
          "Describe one question you still have about capstone quantitative reasoning."
        ]
      },
      "interactiveActivities": [
        {
          "id": "basic-math-401-l02-ia1",
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
                "label": "Set a goal for integrated operations",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for data-backed decisions",
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
          "id": "basic-math-401-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on data-backed decisions and write one reflection."
        }
      ]
    },
    {
      "id": "basic-math-401-l03",
      "title": "Checkpoint: Capstone Math Setup",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-401-l03-q1",
          "text": "Which statement best explains integrated operations in Math?",
          "skillId": "basic-math-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains integrated operations using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how integrated operations works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Math."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-401-l03-q2",
          "text": "What is the best first step when analyzing data-backed decisions?",
          "skillId": "basic-math-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for data-backed decisions."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to data-backed decisions."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-401-l03-q3",
          "text": "Which option shows strong reasoning about capstone quantitative reasoning?",
          "skillId": "basic-math-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone quantitative reasoning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-401-l03-q4",
          "text": "Why is spaced review useful for Math mastery?",
          "skillId": "basic-math-401-skill-review",
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
          "id": "basic-math-401-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Capstone Math Setup",
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
                "label": "Confusion about integrated operations"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to data-backed decisions"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone quantitative reasoning under timing"
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
          "id": "basic-math-401-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "basic-math-401-l04",
      "title": "Constraint Management in Problems",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "basic-math-401-l04-c1",
          "title": "Constraint Management in Problems Focus",
          "content": "In this lesson, we will deepen our understanding of constraint management using structured reasoning. We will move beyond just understanding concepts to making applied decisions that take constraints into account. This will help us tackle problems more effectively and develop our critical thinking skills.\nContext recap: In this lesson, we will deepen our understanding of constraint management using structured reasoning. We will move beyond just understanding concepts to making applied decisions that take constraints into account. This will help us tackle problems more effectively and develop our critical thinking skills."
        },
        {
          "id": "basic-math-401-l04-c2",
          "title": "Method Steps",
          "content": "Let's explore the method steps for effectively managing constraints in problem-solving. Step 1: First, take a moment to identify exactly what the problem is asking you to find or solve. This is important because understanding the question is the foundation of your approach. Step 2: Next, choose a strategy that fits well with the idea of constraint management. This means thinking about the limits or rules that apply to the problem and how you can work within them. Step 3: Finally, justify your choice by providing evidence or reasoning that supports why you selected that particular strategy. By following these steps, you will be able to tackle problems in a clear, organized, and confident manner, making your learning experience more effective and enjoyable."
        },
        {
          "id": "basic-math-401-l04-c3",
          "title": "Common Mistakes",
          "content": "It's important to be aware of common mistakes that can occur during problem-solving. Some frequent errors include skipping the setup phase, using unrelated assumptions, or failing to verify the final result. By recognizing these pitfalls, you can improve your problem-solving skills and avoid making the same mistakes in the future.\nContext recap: It's important to be aware of common mistakes that can occur during problem-solving. Some frequent errors include skipping the setup phase, using unrelated assumptions, or failing to verify the final result. By recognizing these pitfalls, you can improve your problem-solving skills and avoid making the same mistakes in the future."
        },
        {
          "id": "basic-math-401-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar problem on your own! After you complete it, take a moment to compare your process to the lesson sequence we discussed. This reflection will help you identify areas for improvement and reinforce your understanding of the concepts.\nContext recap: Now, it's time for you to try solving a similar problem on your own! After you complete it, take a moment to compare your process to the lesson sequence we discussed. This reflection will help you identify areas for improvement and reinforce your understanding of the concepts."
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-401-l04-f1",
          "front": "constraint management",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "basic-math-401-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "basic-math-401-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "basic-math-401-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-401-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for constraint management scenarios."
        }
      ]
    },
    {
      "id": "basic-math-401-l05",
      "title": "Reasonableness and Error Bounds",
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
          "id": "basic-math-401-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "constraint management Concept"
              },
              {
                "id": "process",
                "label": "verification discipline Process"
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
          "id": "basic-math-401-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a constraint management challenge."
        }
      ]
    },
    {
      "id": "basic-math-401-l06",
      "title": "Checkpoint: Quantitative Validation",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-401-l06-q1",
          "text": "Which statement best explains constraint management in Math?",
          "skillId": "basic-math-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains constraint management using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how constraint management works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Math."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-401-l06-q2",
          "text": "What is the best first step when analyzing verification discipline?",
          "skillId": "basic-math-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for verification discipline."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to verification discipline."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-401-l06-q3",
          "text": "Which option shows strong reasoning about capstone quantitative reasoning?",
          "skillId": "basic-math-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone quantitative reasoning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-401-l06-q4",
          "text": "Why is spaced review useful for Math mastery?",
          "skillId": "basic-math-401-skill-review",
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
          "id": "basic-math-401-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Quantitative Validation",
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
                "label": "Confusion about constraint management"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to verification discipline"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone quantitative reasoning under timing"
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
          "id": "basic-math-401-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "basic-math-401-l07",
      "title": "Model Revision and Iteration",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "basic-math-401-l07-c1",
          "title": "Model Revision and Iteration Setup",
          "content": "Before starting any task, it's essential to use verification discipline to organize your approach. Planning ahead can significantly improve both the quality and speed of your work. By taking the time to think through your strategy, you set yourself up for success in your problem-solving endeavors.\nContext recap: Before starting any task, it's essential to use verification discipline to organize your approach. Planning ahead can significantly improve both the quality and speed of your work. By taking the time to think through your strategy, you set yourself up for success in your problem-solving endeavors."
        },
        {
          "id": "basic-math-401-l07-c2",
          "title": "Decision Rules",
          "content": "When you have to make a choice between different options, it can be really helpful to follow a simple decision rule. This means you should look for the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. By using this strategy, you can make better decisions that keep you focused on reaching your goals and help you understand why one choice might be better than another.\nContext recap: When you have to make a choice between different options, it can be really helpful to follow a simple decision rule. This means you should look for the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. By using this strategy, you can make better decisions that keep you focused on reaching your goals and help you understand why one choice might be better than another."
        },
        {
          "id": "basic-math-401-l07-c3",
          "title": "Quality Control",
          "content": "As you work on your tasks, remember to check for three important things: accuracy, completeness, and alignment with the original objective. This quality control step ensures that your work meets the necessary standards and helps you produce the best results possible.\nContext recap: As you work on your tasks, remember to check for three important things: accuracy, completeness, and alignment with the original objective. This quality control step ensures that your work meets the necessary standards and helps you produce the best results possible."
        },
        {
          "id": "basic-math-401-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your practice round, take a moment to write down one action you would like to repeat and one action you want to improve in your next practice session. This reflection will help you focus on your growth and development as a learner.\nContext recap: After completing your practice round, take a moment to write down one action you would like to repeat and one action you want to improve in your next practice session. This reflection will help you focus on your growth and development as a learner."
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-401-l07-f1",
          "front": "verification discipline",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "basic-math-401-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "basic-math-401-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "basic-math-401-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-401-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on verification discipline."
        }
      ]
    },
    {
      "id": "basic-math-401-l08",
      "title": "Capstone Problem Lab",
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
          "id": "basic-math-401-l08-ia1",
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
          "id": "basic-math-401-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "basic-math-401-l09",
      "title": "Review: Advanced Math Habits",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-401-l09-q1",
          "text": "Which statement best explains data-backed decisions in Math?",
          "skillId": "basic-math-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains data-backed decisions using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how data-backed decisions works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Math."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-401-l09-q2",
          "text": "What is the best first step when analyzing verification discipline?",
          "skillId": "basic-math-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for verification discipline."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to verification discipline."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-401-l09-q3",
          "text": "Which option shows strong reasoning about capstone quantitative reasoning?",
          "skillId": "basic-math-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone quantitative reasoning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-401-l09-q4",
          "text": "Why is spaced review useful for Math mastery?",
          "skillId": "basic-math-401-skill-review",
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
          "id": "basic-math-401-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Advanced Math Habits",
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
                "label": "Confusion about data-backed decisions"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to verification discipline"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone quantitative reasoning under timing"
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
          "id": "basic-math-401-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "basic-math-401-l10",
      "title": "Mastery: Math IV",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-401-l10-q1",
          "text": "Which statement best explains integrated operations in Math?",
          "skillId": "basic-math-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains integrated operations using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how integrated operations works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Math."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-401-l10-q2",
          "text": "What is the best first step when analyzing constraint management?",
          "skillId": "basic-math-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for constraint management."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to constraint management."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-401-l10-q3",
          "text": "Which option shows strong reasoning about capstone quantitative reasoning?",
          "skillId": "basic-math-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone quantitative reasoning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-401-l10-q4",
          "text": "Why is spaced review useful for Math mastery?",
          "skillId": "basic-math-401-skill-review",
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
          "id": "basic-math-401-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Math IV",
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
                "label": "Confusion about integrated operations"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to constraint management"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone quantitative reasoning under timing"
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
          "id": "basic-math-401-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "basic-math-401-l11",
      "title": "Applied Math Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using constraint management.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "basic-math-401-l11-ia1",
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
                "label": "Tag repeated mistakes in data-backed decisions",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on verification discipline",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-401-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "basic-math-401-l12",
      "title": "Math IV Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-401-l12-q1",
          "text": "Which statement best explains integrated operations in Math?",
          "skillId": "basic-math-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains integrated operations using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how integrated operations works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Math."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-401-l12-q2",
          "text": "What is the best first step when analyzing verification discipline?",
          "skillId": "basic-math-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for verification discipline."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to verification discipline."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-401-l12-q3",
          "text": "Which option shows strong reasoning about capstone quantitative reasoning?",
          "skillId": "basic-math-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone quantitative reasoning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-401-l12-q4",
          "text": "Why is spaced review useful for Math mastery?",
          "skillId": "basic-math-401-skill-review",
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
          "id": "basic-math-401-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Math IV Mastery Applied Retest",
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
                "label": "Confusion about integrated operations"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to verification discipline"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone quantitative reasoning under timing"
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
          "id": "basic-math-401-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "basic-math-401-l13",
      "title": "Math Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "basic-math-401-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, we will explore how to use different math operations together. We will also learn how to manage limits and check our work carefully. This challenge will help you apply what you've learned in a fun and practical way!\nContext recap: In this exciting scenario, we will explore how to use different math operations together. We will also learn how to manage limits and check our work carefully. This challenge will help you apply what you've learned in a fun and practical way!"
        },
        {
          "id": "basic-math-401-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. For each decision point, think about which strategy would work best. This way, you can create a clear plan that guides you through the problem step by step.\nContext recap: To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. For each decision point, think about which strategy would work best. This way, you can create a clear plan that guides you through the problem step by step."
        },
        {
          "id": "basic-math-401-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's time to put your plan into action! As you execute each step, make sure to explain why you are making those choices. Use evidence from your calculations to support your decisions, rather than just guessing. This will help you understand the reasoning behind your actions.\nContext recap: Now it's time to put your plan into action! As you execute each step, make sure to explain why you are making those choices. Use evidence from your calculations to support your decisions, rather than just guessing. This will help you understand the reasoning behind your actions."
        },
        {
          "id": "basic-math-401-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After completing the scenario, take a moment to evaluate your results. Compare what you achieved to the goals you set at the beginning. Identify what worked well and what might need some changes. This reflection will help you improve your problem-solving skills for future challenges.\nContext recap: After completing the scenario, take a moment to evaluate your results. Compare what you achieved to the goals you set at the beginning. Identify what worked well and what might need some changes. This reflection will help you improve your problem-solving skills for future challenges."
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-401-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "basic-math-401-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "basic-math-401-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "basic-math-401-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-401-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting integrated operations, constraint management, and verification discipline."
        },
        {
          "id": "basic-math-401-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "basic-math-401-l14",
      "title": "Math Coaching Clinic",
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
          "id": "basic-math-401-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on integrated operations setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed verification discipline decisions"
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
          "id": "basic-math-401-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "basic-math-401-l15",
      "title": "Math IV Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-401-l15-q1",
          "text": "Which statement best explains data-backed decisions in Math?",
          "skillId": "basic-math-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains data-backed decisions using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how data-backed decisions works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Math."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-401-l15-q2",
          "text": "What is the best first step when analyzing constraint management?",
          "skillId": "basic-math-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for constraint management."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to constraint management."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-401-l15-q3",
          "text": "Which option shows strong reasoning about capstone quantitative reasoning?",
          "skillId": "basic-math-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone quantitative reasoning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-401-l15-q4",
          "text": "Why is spaced review useful for Math mastery?",
          "skillId": "basic-math-401-skill-review",
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
          "id": "basic-math-401-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Math IV Mastery Mastery Sprint",
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
                "label": "Confusion about data-backed decisions"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to constraint management"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone quantitative reasoning under timing"
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
          "id": "basic-math-401-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
