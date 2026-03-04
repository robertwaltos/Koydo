import type { LearningModule } from "@/lib/modules/types";

export const Coding401Module: LearningModule = {
  "id": "coding-401",
  "title": "Coding Capstone Systems",
  "description": "Build robust software workflows using architecture, testing, observability, and iteration.",
  "subject": "Coding",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Coding",
    "Apply Engineering Decision Quality strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "coding-401-l01",
      "title": "Architecture for Maintainability",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "coding-401-l01-c1",
          "title": "Architecture for Maintainability Overview",
          "content": "In this lesson, we will dive into the fascinating world of system architecture, which is a key concept when we create software systems for our capstone projects. System architecture is like the blueprint of a building; it shows how different parts fit together and work as a whole. Our main goal is to develop strong reasoning skills that will help us tackle problems more effectively. By understanding how each component of a system interacts, we can design software that is not only functional but also easy to maintain and enhance over time. This knowledge will empower us to create robust and efficient systems that can adapt to future needs."
        },
        {
          "id": "coding-401-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will discuss how system architecture and test strategies are closely connected. First, we need to clearly define our main target or goal for the project. Once we have that, we can identify the evidence or steps that will support our goal. This means thinking about how each part of our system will work together and how we can test it to ensure everything functions as intended.\nContext recap: In this section, we will discuss how system architecture and test strategies are closely connected. First, we need to clearly define our main target or goal for the project. Once we have that, we can identify the evidence or steps that will support our goal. This means thinking about how each part of our system will work together and how we can test it to ensure everything functions as intended."
        },
        {
          "id": "coding-401-l01-c3",
          "title": "Worked Example",
          "content": "Let's go through a guided example together to help us understand these concepts better. First, we will define our goal clearly. Next, we will apply a strategy for our test plan to see if our system works as expected. Finally, we will verify our results with a quick check to make sure everything is functioning correctly. This hands-on approach will help solidify our understanding of how to apply these strategies in real projects.\nContext recap: Let's go through a guided example together to help us understand these concepts better. First, we will define our goal clearly. Next, we will apply a strategy for our test plan to see if our system works as expected. Finally, we will verify our results with a quick check to make sure everything is functioning correctly."
        },
        {
          "id": "coding-401-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn! Try applying the same process we just discussed to a new scenario. As you work through it, make sure to explain why your approach is valid in one clear sentence. This will help you practice articulating your reasoning and strengthen your understanding of the concepts we've learned.\nContext recap: Now it's your turn! Try applying the same process we just discussed to a new scenario. As you work through it, make sure to explain why your approach is valid in one clear sentence. This will help you practice articulating your reasoning and strengthen your understanding of the concepts we've learned."
        }
      ],
      "flashcards": [
        {
          "id": "coding-401-l01-f1",
          "front": "system architecture",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "coding-401-l01-f2",
          "front": "test strategy",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "coding-401-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "coding-401-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "coding-401-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about system architecture and test strategy."
        },
        {
          "id": "coding-401-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Coding vocabulary."
        }
      ]
    },
    {
      "id": "coding-401-l02",
      "title": "Testing Strategy at Scale",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about system architecture from this lesson.",
          "Explain where test strategy appears in real life.",
          "Describe one question you still have about capstone software systems thinking."
        ]
      },
      "interactiveActivities": [
        {
          "id": "coding-401-l02-ia1",
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
                "label": "Set a goal for system architecture",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for test strategy",
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
          "id": "coding-401-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on test strategy and write one reflection."
        }
      ]
    },
    {
      "id": "coding-401-l03",
      "title": "Checkpoint: Capstone Engineering Setup",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "coding-401-l03-q1",
          "text": "Which statement best explains system architecture in Coding?",
          "skillId": "coding-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains system architecture using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how system architecture works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Coding."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l03-q2",
          "text": "What is the best first step when analyzing test strategy?",
          "skillId": "coding-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for test strategy."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to test strategy."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l03-q3",
          "text": "Which option shows strong reasoning about capstone software systems thinking?",
          "skillId": "coding-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone software systems thinking."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l03-q4",
          "text": "Why is spaced review useful for Coding mastery?",
          "skillId": "coding-401-skill-review",
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
          "id": "coding-401-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Capstone Engineering Setup",
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
                "label": "Confusion about system architecture"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to test strategy"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone software systems thinking under timing"
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
          "id": "coding-401-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "coding-401-l04",
      "title": "Debug Instrumentation Workflows",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "coding-401-l04-c1",
          "title": "Debug Instrumentation Workflows Focus",
          "content": "In this lesson, we will dive deeper into the topic of debug instrumentation using structured reasoning. We will move beyond just understanding the concepts to making applied decisions that will help us debug our systems effectively. This means learning how to analyze problems and come up with solutions that are logical and well-supported.\nContext recap: In this lesson, we will dive deeper into the topic of debug instrumentation using structured reasoning. We will move beyond just understanding the concepts to making applied decisions that will help us debug our systems effectively. This means learning how to analyze problems and come up with solutions that are logical and well-supported."
        },
        {
          "id": "coding-401-l04-c2",
          "title": "Method Steps",
          "content": "Let's break down the steps we need to follow for effective debugging. Step 1: Identify what is being asked in the problem. Step 2: Choose a strategy that aligns with debug instrumentation techniques. Step 3: Justify your choice with evidence that supports your decision. Following these steps will help you stay organized and focused while debugging.\nContext recap: Let's break down the steps we need to follow for effective debugging. Step 1: Identify what is being asked in the problem. Step 2: Choose a strategy that aligns with debug instrumentation techniques. Step 3: Justify your choice with evidence that supports your decision."
        },
        {
          "id": "coding-401-l04-c3",
          "title": "Common Mistakes",
          "content": "As we learn about debugging, it's important to be aware of common mistakes that can happen. Some of these include skipping the setup process, making assumptions that are not related to the problem, or failing to verify the final result of your debugging efforts. By recognizing these errors, we can avoid them and improve our debugging skills.\nContext recap: As we learn about debugging, it's important to be aware of common mistakes that can happen. Some of these include skipping the setup process, making assumptions that are not related to the problem, or failing to verify the final result of your debugging efforts. By recognizing these errors, we can avoid them and improve our debugging skills."
        },
        {
          "id": "coding-401-l04-c4",
          "title": "Independent Try",
          "content": "Now, I encourage you to solve a similar problem on your own. After you finish, take some time to compare your process with the sequence we discussed in the lesson. This reflection will help you understand what you did well and where you can improve in your debugging approach.\nContext recap: Now, I encourage you to solve a similar problem on your own. After you finish, take some time to compare your process with the sequence we discussed in the lesson. This reflection will help you understand what you did well and where you can improve in your debugging approach."
        }
      ],
      "flashcards": [
        {
          "id": "coding-401-l04-f1",
          "front": "debug instrumentation",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "coding-401-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "coding-401-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "coding-401-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "coding-401-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for debug instrumentation scenarios."
        }
      ]
    },
    {
      "id": "coding-401-l05",
      "title": "Performance and Reliability Tradeoffs",
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
          "id": "coding-401-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "debug instrumentation Concept"
              },
              {
                "id": "process",
                "label": "performance-quality balance Process"
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
          "id": "coding-401-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a debug instrumentation challenge."
        }
      ]
    },
    {
      "id": "coding-401-l06",
      "title": "Checkpoint: Engineering Decision Quality",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "coding-401-l06-q1",
          "text": "Which statement best explains debug instrumentation in Coding?",
          "skillId": "coding-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains debug instrumentation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how debug instrumentation works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Coding."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l06-q2",
          "text": "What is the best first step when analyzing performance-quality balance?",
          "skillId": "coding-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for performance-quality balance."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to performance-quality balance."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l06-q3",
          "text": "Which option shows strong reasoning about capstone software systems thinking?",
          "skillId": "coding-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone software systems thinking."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l06-q4",
          "text": "Why is spaced review useful for Coding mastery?",
          "skillId": "coding-401-skill-review",
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
          "id": "coding-401-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Engineering Decision Quality",
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
                "label": "Confusion about debug instrumentation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to performance-quality balance"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone software systems thinking under timing"
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
          "id": "coding-401-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "coding-401-l07",
      "title": "Refactor and Simplify",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "coding-401-l07-c1",
          "title": "Refactor and Simplify Setup",
          "content": "Before you start working on your project, it's important to use a balance of performance and quality to organize your approach. Taking the time to plan your work first will not only improve the quality of your results but also help you work more efficiently and quickly. Good planning is key to successful coding!\nContext recap: Before you start working on your project, it's important to use a balance of performance and quality to organize your approach. Taking the time to plan your work first will not only improve the quality of your results but also help you work more efficiently and quickly. Good planning is key to successful coding!"
        },
        {
          "id": "coding-401-l07-c2",
          "title": "Decision Rules",
          "content": "When you are working on a coding project and you have to make decisions, it can sometimes be tricky to know which path to take. A great way to help you decide is to follow a simple rule: always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. By doing this, you will be making smart choices that can lead to better results in your coding projects. Remember, good decision-making is a key part of being a successful coder!"
        },
        {
          "id": "coding-401-l07-c3",
          "title": "Quality Control",
          "content": "As you work on your projects, it's essential to check for three important things: accuracy, completeness, and alignment with your original objective. By ensuring that your work meets these criteria, you can maintain high standards and produce quality results in your coding endeavors.\nContext recap: As you work on your projects, it's essential to check for three important things: accuracy, completeness, and alignment with your original objective. By ensuring that your work meets these criteria, you can maintain high standards and produce quality results in your coding endeavors."
        },
        {
          "id": "coding-401-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your practice round, take a moment to write down one action that you want to repeat in your next session and one action that you would like to improve. This reflection will help you set clear goals for your future practice and continue to develop your coding skills.\nContext recap: After completing your practice round, take a moment to write down one action that you want to repeat in your next session and one action that you would like to improve. This reflection will help you set clear goals for your future practice and continue to develop your coding skills."
        }
      ],
      "flashcards": [
        {
          "id": "coding-401-l07-f1",
          "front": "performance-quality balance",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "coding-401-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "coding-401-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "coding-401-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "coding-401-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on performance-quality balance."
        }
      ]
    },
    {
      "id": "coding-401-l08",
      "title": "Capstone Build Sprint",
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
          "id": "coding-401-l08-ia1",
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
          "id": "coding-401-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "coding-401-l09",
      "title": "Review: Software Systems Habits",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "coding-401-l09-q1",
          "text": "Which statement best explains test strategy in Coding?",
          "skillId": "coding-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains test strategy using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how test strategy works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Coding."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l09-q2",
          "text": "What is the best first step when analyzing performance-quality balance?",
          "skillId": "coding-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for performance-quality balance."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to performance-quality balance."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l09-q3",
          "text": "Which option shows strong reasoning about capstone software systems thinking?",
          "skillId": "coding-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone software systems thinking."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l09-q4",
          "text": "Why is spaced review useful for Coding mastery?",
          "skillId": "coding-401-skill-review",
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
          "id": "coding-401-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Software Systems Habits",
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
                "label": "Confusion about test strategy"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to performance-quality balance"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone software systems thinking under timing"
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
          "id": "coding-401-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "coding-401-l10",
      "title": "Mastery: Coding IV",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "coding-401-l10-q1",
          "text": "Which statement best explains system architecture in Coding?",
          "skillId": "coding-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains system architecture using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how system architecture works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Coding."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l10-q2",
          "text": "What is the best first step when analyzing debug instrumentation?",
          "skillId": "coding-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for debug instrumentation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to debug instrumentation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l10-q3",
          "text": "Which option shows strong reasoning about capstone software systems thinking?",
          "skillId": "coding-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone software systems thinking."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l10-q4",
          "text": "Why is spaced review useful for Coding mastery?",
          "skillId": "coding-401-skill-review",
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
          "id": "coding-401-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Coding IV",
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
                "label": "Confusion about system architecture"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to debug instrumentation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone software systems thinking under timing"
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
          "id": "coding-401-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "coding-401-l11",
      "title": "Applied Coding Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using debug instrumentation.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "coding-401-l11-ia1",
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
                "label": "Tag repeated mistakes in test strategy",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on performance-quality balance",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "coding-401-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "coding-401-l12",
      "title": "Coding IV Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "coding-401-l12-q1",
          "text": "Which statement best explains system architecture in Coding?",
          "skillId": "coding-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains system architecture using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how system architecture works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Coding."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l12-q2",
          "text": "What is the best first step when analyzing performance-quality balance?",
          "skillId": "coding-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for performance-quality balance."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to performance-quality balance."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l12-q3",
          "text": "Which option shows strong reasoning about capstone software systems thinking?",
          "skillId": "coding-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone software systems thinking."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l12-q4",
          "text": "Why is spaced review useful for Coding mastery?",
          "skillId": "coding-401-skill-review",
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
          "id": "coding-401-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Coding IV Mastery Applied Retest",
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
                "label": "Confusion about system architecture"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to performance-quality balance"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone software systems thinking under timing"
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
          "id": "coding-401-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "coding-401-l13",
      "title": "Coding Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "coding-401-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, you will explore how different parts of a computer system work together. You will learn about system architecture, which is like the blueprint of a building, and how to find and fix problems, known as debugging. Additionally, you will discover how to balance the quality of your program's performance, ensuring it runs smoothly while meeting all requirements. This challenge will help you apply these important concepts in a fun and practical way!\nContext recap: In this exciting scenario, you will explore how different parts of a computer system work together. You will learn about system architecture, which is like the blueprint of a building, and how to find and fix problems, known as debugging. Additionally, you will discover how to balance the quality of your program's performance, ensuring it runs smoothly while meeting all requirements. This challenge will help you apply these important concepts in a fun and practical way!"
        },
        {
          "id": "coding-401-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. Think of each decision point as a step in a treasure hunt. For each step, choose a specific strategy that will guide you in making the best choice. This way, you can focus on one part at a time, making it easier to see how everything fits together in the bigger picture of your project.\nContext recap: To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. Think of each decision point as a step in a treasure hunt. For each step, choose a specific strategy that will guide you in making the best choice. This way, you can focus on one part at a time, making it easier to see how everything fits together in the bigger picture of your project."
        },
        {
          "id": "coding-401-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's time to put your plan into action! As you execute each step, make sure to explain why you are making each choice. Use evidence from your research or previous experiences to support your decisions, rather than just guessing. This will help you understand the reasoning behind your actions and improve your coding skills as you learn to think critically about your work.\nContext recap: Now it's time to put your plan into action! As you execute each step, make sure to explain why you are making each choice. Use evidence from your research or previous experiences to support your decisions, rather than just guessing. This will help you understand the reasoning behind your actions and improve your coding skills as you learn to think critically about your work."
        },
        {
          "id": "coding-401-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After you have completed your project, take a moment to evaluate the outcome. Compare what you achieved with the goals you set at the beginning. Identify the elements that worked well and should be kept, as well as those that need adjustments or improvements. This reflection will help you learn from your experience and enhance your future coding projects.\nContext recap: After you have completed your project, take a moment to evaluate the outcome. Compare what you achieved with the goals you set at the beginning. Identify the elements that worked well and should be kept, as well as those that need adjustments or improvements. This reflection will help you learn from your experience and enhance your future coding projects."
        }
      ],
      "flashcards": [
        {
          "id": "coding-401-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "coding-401-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "coding-401-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "coding-401-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "coding-401-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting system architecture, debug instrumentation, and performance-quality balance."
        },
        {
          "id": "coding-401-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "coding-401-l14",
      "title": "Coding Coaching Clinic",
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
          "id": "coding-401-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on system architecture setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed performance-quality balance decisions"
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
          "id": "coding-401-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "coding-401-l15",
      "title": "Coding IV Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "coding-401-l15-q1",
          "text": "Which statement best explains test strategy in Coding?",
          "skillId": "coding-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains test strategy using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how test strategy works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Coding."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l15-q2",
          "text": "What is the best first step when analyzing debug instrumentation?",
          "skillId": "coding-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for debug instrumentation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to debug instrumentation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l15-q3",
          "text": "Which option shows strong reasoning about capstone software systems thinking?",
          "skillId": "coding-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone software systems thinking."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l15-q4",
          "text": "Why is spaced review useful for Coding mastery?",
          "skillId": "coding-401-skill-review",
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
          "id": "coding-401-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Coding IV Mastery Mastery Sprint",
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
                "label": "Confusion about test strategy"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to debug instrumentation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone software systems thinking under timing"
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
          "id": "coding-401-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
