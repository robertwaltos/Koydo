import type { LearningModule } from "@/lib/modules/types";

export const HouseholdManagement201Module: LearningModule = {
  "id": "household-management-201",
  "title": "Household Systems and Planning II",
  "description": "Build robust home systems for budgeting, scheduling, safety, and coordination.",
  "subject": "Household Management",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Household Management",
    "Apply Coordination and Safety strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "household-management-201-l01",
      "title": "Designing Home Systems",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "household-management-201-l01-c1",
          "title": "Designing Home Systems Overview",
          "content": "In this lesson, we will dive into the fascinating world of designing systems for our homes! Have you ever thought about how everything in your house works together? From organizing your room to planning family meals, household systems are all around us. We will learn how to plan and organize these different systems effectively. Our main goal is to understand what good reasoning looks like. This means we will learn how to think carefully and make smart choices when solving problems. By the end of this lesson, you will be able to recognize strong reasoning skills and use them to improve your own household planning. Get ready to become a household design expert!"
        },
        {
          "id": "household-management-201-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will explore how systems planning and time management work hand in hand to help us achieve our goals effectively. First, we will identify the main target we want to reach, which is like setting a destination on a map. After that, we will look for the evidence or steps that support our target, similar to gathering tools we need for a project. This process will help us stay organized and focused as we work towards our objectives, making it easier to track our progress and celebrate our achievements along the way."
        },
        {
          "id": "household-management-201-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! First, we will define a specific goal we want to achieve. Next, we will apply a strategy for managing our time effectively. Finally, we will verify our results with a quick check to ensure everything is on track. This example will help you understand how to apply these concepts in real-life situations.\nContext recap: Let's walk through a guided example together! First, we will define a specific goal we want to achieve. Next, we will apply a strategy for managing our time effectively. Finally, we will verify our results with a quick check to ensure everything is on track."
        },
        {
          "id": "household-management-201-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to shine! Take the same steps we learned and apply them to a new situation. As you think about your approach, consider why it makes sense and share your reasoning in one clear sentence. This activity will not only help strengthen your understanding but also demonstrate how you can use these important skills in various real-life scenarios. Remember, practice makes perfect!\nContext recap: Now it's your turn to shine! Take the same steps we learned and apply them to a new situation. As you think about your approach, consider why it makes sense and share your reasoning in one clear sentence. This activity will not only help strengthen your understanding but also demonstrate how you can use these important skills in various real-life scenarios."
        }
      ],
      "flashcards": [
        {
          "id": "household-management-201-l01-f1",
          "front": "systems planning",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "household-management-201-l01-f2",
          "front": "time allocation",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "household-management-201-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "household-management-201-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "household-management-201-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about systems planning and time allocation."
        },
        {
          "id": "household-management-201-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Household Management vocabulary."
        }
      ]
    },
    {
      "id": "household-management-201-l02",
      "title": "Time Allocation Strategies",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about systems planning from this lesson.",
          "Explain where time allocation appears in real life.",
          "Describe one question you still have about household systems design."
        ]
      },
      "interactiveActivities": [
        {
          "id": "household-management-201-l02-ia1",
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
                "label": "Set a goal for systems planning",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for time allocation",
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
          "id": "household-management-201-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on time allocation and write one reflection."
        }
      ]
    },
    {
      "id": "household-management-201-l03",
      "title": "Checkpoint: Planning and Routine",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "household-management-201-l03-q1",
          "text": "Which statement best explains systems planning in Household Management?",
          "skillId": "household-management-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains systems planning using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how systems planning works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Household Management."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-201-l03-q2",
          "text": "What is the best first step when analyzing time allocation?",
          "skillId": "household-management-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for time allocation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to time allocation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-201-l03-q3",
          "text": "Which option shows strong reasoning about household systems design?",
          "skillId": "household-management-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to household systems design."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-201-l03-q4",
          "text": "Why is spaced review useful for Household Management mastery?",
          "skillId": "household-management-201-skill-review",
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
          "id": "household-management-201-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Planning and Routine",
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
                "label": "Confusion about systems planning"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to time allocation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of household systems design under timing"
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
          "id": "household-management-201-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "household-management-201-l04",
      "title": "Resource Coordination at Home",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "household-management-201-l04-c1",
          "title": "Resource Coordination at Home Focus",
          "content": "In this lesson, we will take a deeper look at how to coordinate resources effectively at home. We will use structured reasoning to move from understanding concepts to making practical decisions. This will help you become more confident in managing your household resources and making informed choices.\nContext recap: In this lesson, we will take a deeper look at how to coordinate resources effectively at home. We will use structured reasoning to move from understanding concepts to making practical decisions. This will help you become more confident in managing your household resources and making informed choices."
        },
        {
          "id": "household-management-201-l04-c2",
          "title": "Method Steps",
          "content": "Here are the steps we will follow: Step 1 is to clearly identify what is being asked of us. Step 2 involves choosing a strategy that aligns with our resource coordination goals. Finally, Step 3 is to justify our choices with evidence. By following these steps, we can make better decisions about how to use our resources.\nContext recap: Here are the steps we will follow: Step 1 is to clearly identify what is being asked of us. Step 2 involves choosing a strategy that aligns with our resource coordination goals. Finally, Step 3 is to justify our choices with evidence. By following these steps, we can make better decisions about how to use our resources."
        },
        {
          "id": "household-management-201-l04-c3",
          "title": "Common Mistakes",
          "content": "Let's talk about some common mistakes that people make when coordinating resources. These can include skipping the setup process, using assumptions that are not related to the task, or forgetting to verify the final results. By being aware of these errors, we can avoid them and improve our decision-making skills.\nContext recap: Let's talk about some common mistakes that people make when coordinating resources. These can include skipping the setup process, using assumptions that are not related to the task, or forgetting to verify the final results. By being aware of these errors, we can avoid them and improve our decision-making skills."
        },
        {
          "id": "household-management-201-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar problem on your own! After you complete it, take a moment to compare your process with the steps we discussed in the lesson. This will help you see how well you understood the material and where you might improve.\nContext recap: Now, it's time for you to try solving a similar problem on your own! After you complete it, take a moment to compare your process with the steps we discussed in the lesson. This will help you see how well you understood the material and where you might improve."
        }
      ],
      "flashcards": [
        {
          "id": "household-management-201-l04-f1",
          "front": "resource coordination",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "household-management-201-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "household-management-201-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "household-management-201-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "household-management-201-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for resource coordination scenarios."
        }
      ]
    },
    {
      "id": "household-management-201-l05",
      "title": "Family Communication Protocols",
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
          "id": "household-management-201-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "resource coordination Concept"
              },
              {
                "id": "process",
                "label": "safety protocol Process"
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
          "id": "household-management-201-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a resource coordination challenge."
        }
      ]
    },
    {
      "id": "household-management-201-l06",
      "title": "Checkpoint: Coordination and Safety",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "household-management-201-l06-q1",
          "text": "Which statement best explains resource coordination in Household Management?",
          "skillId": "household-management-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains resource coordination using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how resource coordination works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Household Management."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-201-l06-q2",
          "text": "What is the best first step when analyzing safety protocol?",
          "skillId": "household-management-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for safety protocol."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to safety protocol."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-201-l06-q3",
          "text": "Which option shows strong reasoning about household systems design?",
          "skillId": "household-management-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to household systems design."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-201-l06-q4",
          "text": "Why is spaced review useful for Household Management mastery?",
          "skillId": "household-management-201-skill-review",
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
          "id": "household-management-201-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Coordination and Safety",
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
                "label": "Confusion about resource coordination"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to safety protocol"
              },
              {
                "id": "l3",
                "label": "Weak transfer of household systems design under timing"
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
          "id": "household-management-201-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "household-management-201-l07",
      "title": "Contingency and Emergency Plans",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "household-management-201-l07-c1",
          "title": "Contingency and Emergency Plans Setup",
          "content": "Before we dive into our plans for emergencies, it's important to use safety protocols to organize our approach. By planning ahead, we can improve both the quality and speed of our responses. This preparation will help ensure that we are ready for any situation that may arise.\nContext recap: Before we dive into our plans for emergencies, it's important to use safety protocols to organize our approach. By planning ahead, we can improve both the quality and speed of our responses. This preparation will help ensure that we are ready for any situation that may arise."
        },
        {
          "id": "household-management-201-l07-c2",
          "title": "Decision Rules",
          "content": "When you have to make a choice between different options, it can sometimes be confusing. To help you decide, you can use a simple rule. Look for the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. This way, you can make smart choices that help you reach your goals effectively and confidently.\nContext recap: When you have to make a choice between different options, it can sometimes be confusing. To help you decide, you can use a simple rule. Look for the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. This way, you can make smart choices that help you reach your goals effectively and confidently."
        },
        {
          "id": "household-management-201-l07-c3",
          "title": "Quality Control",
          "content": "As we work on our plans, it's essential to check for three key things: accuracy, completeness, and alignment with our original objective. By ensuring these elements are in place, we can maintain high standards in our planning and execution.\nContext recap: As we work on our plans, it's essential to check for three key things: accuracy, completeness, and alignment with our original objective. By ensuring these elements are in place, we can maintain high standards in our planning and execution."
        },
        {
          "id": "household-management-201-l07-c4",
          "title": "Next-Step Plan",
          "content": "To wrap up our practice, write down one action you want to repeat in your next practice round and one action you would like to improve. This reflection will help you focus on your growth and development as you continue to practice your skills.\nContext recap: To wrap up our practice, write down one action you want to repeat in your next practice round and one action you would like to improve. This reflection will help you focus on your growth and development as you continue to practice your skills."
        }
      ],
      "flashcards": [
        {
          "id": "household-management-201-l07-f1",
          "front": "safety protocol",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "household-management-201-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "household-management-201-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "household-management-201-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "household-management-201-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on safety protocol."
        }
      ]
    },
    {
      "id": "household-management-201-l08",
      "title": "Household Improvement Sprint",
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
          "id": "household-management-201-l08-ia1",
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
          "id": "household-management-201-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "household-management-201-l09",
      "title": "Review: Systems for Daily Living",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "household-management-201-l09-q1",
          "text": "Which statement best explains time allocation in Household Management?",
          "skillId": "household-management-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains time allocation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how time allocation works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Household Management."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-201-l09-q2",
          "text": "What is the best first step when analyzing safety protocol?",
          "skillId": "household-management-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for safety protocol."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to safety protocol."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-201-l09-q3",
          "text": "Which option shows strong reasoning about household systems design?",
          "skillId": "household-management-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to household systems design."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-201-l09-q4",
          "text": "Why is spaced review useful for Household Management mastery?",
          "skillId": "household-management-201-skill-review",
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
          "id": "household-management-201-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Systems for Daily Living",
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
                "label": "Confusion about time allocation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to safety protocol"
              },
              {
                "id": "l3",
                "label": "Weak transfer of household systems design under timing"
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
          "id": "household-management-201-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "household-management-201-l10",
      "title": "Mastery: Household Management II",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "household-management-201-l10-q1",
          "text": "Which statement best explains systems planning in Household Management?",
          "skillId": "household-management-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains systems planning using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how systems planning works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Household Management."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-201-l10-q2",
          "text": "What is the best first step when analyzing resource coordination?",
          "skillId": "household-management-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for resource coordination."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to resource coordination."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-201-l10-q3",
          "text": "Which option shows strong reasoning about household systems design?",
          "skillId": "household-management-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to household systems design."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-201-l10-q4",
          "text": "Why is spaced review useful for Household Management mastery?",
          "skillId": "household-management-201-skill-review",
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
          "id": "household-management-201-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Household Management II",
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
                "label": "Confusion about systems planning"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to resource coordination"
              },
              {
                "id": "l3",
                "label": "Weak transfer of household systems design under timing"
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
          "id": "household-management-201-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "household-management-201-l11",
      "title": "Applied Household Management Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using resource coordination.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "household-management-201-l11-ia1",
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
                "label": "Tag repeated mistakes in time allocation",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on safety protocol",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "household-management-201-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "household-management-201-l12",
      "title": "Household Management II Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "household-management-201-l12-q1",
          "text": "Which statement best explains systems planning in Household Management?",
          "skillId": "household-management-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains systems planning using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how systems planning works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Household Management."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-201-l12-q2",
          "text": "What is the best first step when analyzing safety protocol?",
          "skillId": "household-management-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for safety protocol."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to safety protocol."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-201-l12-q3",
          "text": "Which option shows strong reasoning about household systems design?",
          "skillId": "household-management-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to household systems design."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-201-l12-q4",
          "text": "Why is spaced review useful for Household Management mastery?",
          "skillId": "household-management-201-skill-review",
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
          "id": "household-management-201-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Household Management II Mastery Applied Retest",
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
                "label": "Confusion about systems planning"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to safety protocol"
              },
              {
                "id": "l3",
                "label": "Weak transfer of household systems design under timing"
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
          "id": "household-management-201-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "household-management-201-l13",
      "title": "Household Management Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "household-management-201-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, you will get to use your skills in planning household systems, coordinating resources, and following safety protocols. This challenge will help you understand how these elements work together in real-life situations, making it a fun and practical learning experience.\nContext recap: In this exciting scenario, you will get to use your skills in planning household systems, coordinating resources, and following safety protocols. This challenge will help you understand how these elements work together in real-life situations, making it a fun and practical learning experience."
        },
        {
          "id": "household-management-201-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. For each decision point, think about the best strategy to use. This approach will help you stay organized and make thoughtful choices as you work through the challenge.\nContext recap: To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. For each decision point, think about the best strategy to use. This approach will help you stay organized and make thoughtful choices as you work through the challenge."
        },
        {
          "id": "household-management-201-l13-c3",
          "title": "Execute and Justify",
          "content": "Once you have your plan ready, it's time to put it into action! As you execute each step, be sure to explain your reasoning clearly. Use evidence to support your decisions, rather than making guesses. This will help you understand the importance of thoughtful planning and decision-making.\nContext recap: Once you have your plan ready, it's time to put it into action! As you execute each step, be sure to explain your reasoning clearly. Use evidence to support your decisions, rather than making guesses. This will help you understand the importance of thoughtful planning and decision-making."
        },
        {
          "id": "household-management-201-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After you have completed the scenario, take a moment to evaluate your results. Compare what you achieved with your initial goals. Identify which parts of your plan worked well and which areas might need some adjustments. This reflection will help you learn and improve for future challenges.\nContext recap: After you have completed the scenario, take a moment to evaluate your results. Compare what you achieved with your initial goals. Identify which parts of your plan worked well and which areas might need some adjustments. This reflection will help you learn and improve for future challenges."
        }
      ],
      "flashcards": [
        {
          "id": "household-management-201-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "household-management-201-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "household-management-201-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "household-management-201-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "household-management-201-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting systems planning, resource coordination, and safety protocol."
        },
        {
          "id": "household-management-201-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "household-management-201-l14",
      "title": "Household Management Coaching Clinic",
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
          "id": "household-management-201-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on systems planning setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed safety protocol decisions"
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
          "id": "household-management-201-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "household-management-201-l15",
      "title": "Household Management II Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "household-management-201-l15-q1",
          "text": "Which statement best explains time allocation in Household Management?",
          "skillId": "household-management-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains time allocation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how time allocation works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Household Management."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-201-l15-q2",
          "text": "What is the best first step when analyzing resource coordination?",
          "skillId": "household-management-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for resource coordination."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to resource coordination."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-201-l15-q3",
          "text": "Which option shows strong reasoning about household systems design?",
          "skillId": "household-management-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to household systems design."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-201-l15-q4",
          "text": "Why is spaced review useful for Household Management mastery?",
          "skillId": "household-management-201-skill-review",
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
          "id": "household-management-201-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Household Management II Mastery Mastery Sprint",
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
                "label": "Confusion about time allocation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to resource coordination"
              },
              {
                "id": "l3",
                "label": "Weak transfer of household systems design under timing"
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
          "id": "household-management-201-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
