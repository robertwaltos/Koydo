import type { LearningModule } from "@/lib/modules/types";

export const HouseholdManagement101Module: LearningModule = {
  "id": "household-management-101",
  "title": "Household Management Skills",
  "description": "Build practical skills for home routines, planning, organization, and safety.",
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
    "Apply Home Logistics strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "household-management-101-l01",
      "title": "Daily Home Routines",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "household-management-101-l01-c1",
          "title": "Daily Home Routines Overview",
          "content": "In this lesson, we will dive into the exciting world of creating effective schedules that help us manage our homes better. Learning how to plan our daily activities is super important because it keeps us organized and helps us make smart choices. We will also discover what strong reasoning looks like, which means understanding how to think clearly and logically. This skill will be very useful when we face challenges related to our home routines, allowing us to solve problems more effectively and confidently. By the end of this lesson, you will have the tools you need to create a daily schedule that works for you and your family!"
        },
        {
          "id": "household-management-101-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will explore how schedules and cleaning systems work hand in hand to help us maintain a tidy and efficient home. To start, we will identify our main goal, which could be something like keeping our living space clean and organized. Next, we will look for specific steps or evidence that can help us reach that goal. These steps might include creating a daily cleaning checklist or setting aside time each week for chores. By understanding these connections, we can stay focused and organized, making our home a more pleasant place to live."
        },
        {
          "id": "household-management-101-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! First, we will define our cleaning goal, such as organizing a messy room. Next, we will apply a strategy to create a cleaning system that works for us. Finally, we will check our results to see if we achieved our goal, ensuring we understand the process and can repeat it in the future.\nContext recap: Let's walk through a guided example together! First, we will define our cleaning goal, such as organizing a messy room. Next, we will apply a strategy to create a cleaning system that works for us. Finally, we will check our results to see if we achieved our goal, ensuring we understand the process and can repeat it in the future."
        },
        {
          "id": "household-management-101-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn! Try applying the same process we learned to a new situation, like planning a family dinner. After you come up with your plan, explain in one clear sentence why your approach makes sense. This will help you practice your reasoning skills and build confidence in your decision-making.\nContext recap: Now it's your turn! Try applying the same process we learned to a new situation, like planning a family dinner. After you come up with your plan, explain in one clear sentence why your approach makes sense. This will help you practice your reasoning skills and build confidence in your decision-making."
        }
      ],
      "flashcards": [
        {
          "id": "household-management-101-l01-f1",
          "front": "schedules",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "household-management-101-l01-f2",
          "front": "cleaning systems",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "household-management-101-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "household-management-101-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "household-management-101-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about schedules and cleaning systems."
        },
        {
          "id": "household-management-101-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Household Management vocabulary."
        }
      ]
    },
    {
      "id": "household-management-101-l02",
      "title": "Time and Task Planning",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about schedules from this lesson.",
          "Explain where cleaning systems appears in real life.",
          "Describe one question you still have about home planning."
        ]
      },
      "interactiveActivities": [
        {
          "id": "household-management-101-l02-ia1",
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
                "label": "Set a goal for schedules",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for cleaning systems",
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
          "id": "household-management-101-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on cleaning systems and write one reflection."
        }
      ]
    },
    {
      "id": "household-management-101-l03",
      "title": "Checkpoint: Routine Systems",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "household-management-101-l03-q1",
          "text": "Which statement best explains schedules in Household Management?",
          "skillId": "household-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains schedules using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how schedules works in practice."
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
          "id": "household-management-101-l03-q2",
          "text": "What is the best first step when analyzing cleaning systems?",
          "skillId": "household-management-101-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for cleaning systems."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to cleaning systems."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-101-l03-q3",
          "text": "Which option shows strong reasoning about home planning?",
          "skillId": "household-management-101-skill-reasoning",
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
              "text": "Use assumptions unrelated to home planning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-101-l03-q4",
          "text": "Why is spaced review useful for Household Management mastery?",
          "skillId": "household-management-101-skill-review",
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
          "id": "household-management-101-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Routine Systems",
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
                "label": "Confusion about schedules"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to cleaning systems"
              },
              {
                "id": "l3",
                "label": "Weak transfer of home planning under timing"
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
          "id": "household-management-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "household-management-101-l04",
      "title": "Meal and Supply Planning",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "household-management-101-l04-c1",
          "title": "Meal and Supply Planning Focus",
          "content": "In this lesson, we will dive deeper into meal planning by using structured reasoning. We will move from simply understanding the concepts of meal planning to making informed decisions about what to cook and how to shop for ingredients. This will help us become more responsible and creative in the kitchen!\nContext recap: In this lesson, we will dive deeper into meal planning by using structured reasoning. We will move from simply understanding the concepts of meal planning to making informed decisions about what to cook and how to shop for ingredients. This will help us become more responsible and creative in the kitchen!"
        },
        {
          "id": "household-management-101-l04-c2",
          "title": "Method Steps",
          "content": "Here are the steps we will follow for effective meal planning: Step 1: Identify what is being asked, such as what meals to prepare for the week. Step 2: Choose a strategy that aligns with your meal planning goals, like considering dietary preferences. Step 3: Justify your choices with evidence, such as nutritional information or family favorites, to ensure your plan is well thought out.\nContext recap: Here are the steps we will follow for effective meal planning: Step 1: Identify what is being asked, such as what meals to prepare for the week. Step 2: Choose a strategy that aligns with your meal planning goals, like considering dietary preferences. Step 3: Justify your choices with evidence, such as nutritional information or family favorites, to ensure your plan is well thought out."
        },
        {
          "id": "household-management-101-l04-c3",
          "title": "Common Mistakes",
          "content": "Let's talk about some common mistakes people make when planning meals. These can include skipping the setup phase, making assumptions that aren't related to the meal plan, or forgetting to double-check the final results. By being aware of these errors, we can improve our planning skills and create better meal strategies.\nContext recap: Let's talk about some common mistakes people make when planning meals. These can include skipping the setup phase, making assumptions that aren't related to the meal plan, or forgetting to double-check the final results. By being aware of these errors, we can improve our planning skills and create better meal strategies."
        },
        {
          "id": "household-management-101-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar meal planning challenge on your own! After you create your plan, compare your process to the steps we discussed in the lesson. This will help you see how well you understood the material and where you might improve next time.\nContext recap: Now, it's time for you to try solving a similar meal planning challenge on your own! After you create your plan, compare your process to the steps we discussed in the lesson. This will help you see how well you understood the material and where you might improve next time."
        }
      ],
      "flashcards": [
        {
          "id": "household-management-101-l04-f1",
          "front": "meal planning",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "household-management-101-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "household-management-101-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "household-management-101-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "household-management-101-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for meal planning scenarios."
        }
      ]
    },
    {
      "id": "household-management-101-l05",
      "title": "Cleaning and Organization",
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
          "id": "household-management-101-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "meal planning Concept"
              },
              {
                "id": "process",
                "label": "home safety Process"
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
          "id": "household-management-101-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a meal planning challenge."
        }
      ]
    },
    {
      "id": "household-management-101-l06",
      "title": "Checkpoint: Home Logistics",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "household-management-101-l06-q1",
          "text": "Which statement best explains meal planning in Household Management?",
          "skillId": "household-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains meal planning using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how meal planning works in practice."
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
          "id": "household-management-101-l06-q2",
          "text": "What is the best first step when analyzing home safety?",
          "skillId": "household-management-101-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for home safety."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to home safety."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-101-l06-q3",
          "text": "Which option shows strong reasoning about home planning?",
          "skillId": "household-management-101-skill-reasoning",
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
              "text": "Use assumptions unrelated to home planning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-101-l06-q4",
          "text": "Why is spaced review useful for Household Management mastery?",
          "skillId": "household-management-101-skill-review",
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
          "id": "household-management-101-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Home Logistics",
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
                "label": "Confusion about meal planning"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to home safety"
              },
              {
                "id": "l3",
                "label": "Weak transfer of home planning under timing"
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
          "id": "household-management-101-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "household-management-101-l07",
      "title": "Safety and Emergency Prep",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "household-management-101-l07-c1",
          "title": "Safety and Emergency Prep Setup",
          "content": "Before we start discussing safety and emergency preparation, it's important to organize our approach. By planning ahead, we can improve the quality and speed of our responses in case of an emergency. This lesson will help you understand how to create a safe environment at home.\nContext recap: Before we start discussing safety and emergency preparation, it's important to organize our approach. By planning ahead, we can improve the quality and speed of our responses in case of an emergency. This lesson will help you understand how to create a safe environment at home."
        },
        {
          "id": "household-management-101-l07-c2",
          "title": "Decision Rules",
          "content": "When you are making decisions about safety planning and you have different options to choose from, it can be really helpful to follow a simple rule. Always pick the choice that has the strongest evidence supporting it and the clearest connection to your safety goals. This means looking for the option that is most likely to keep you and your family safe. By using this approach, you can make smarter decisions that help protect everyone you care about.\nContext recap: When you are making decisions about safety planning and you have different options to choose from, it can be really helpful to follow a simple rule. Always pick the choice that has the strongest evidence supporting it and the clearest connection to your safety goals. This means looking for the option that is most likely to keep you and your family safe. By using this approach, you can make smarter decisions that help protect everyone you care about."
        },
        {
          "id": "household-management-101-l07-c3",
          "title": "Quality Control",
          "content": "To ensure our safety plans are effective, we should check for three important things: accuracy, completeness, and alignment with our original safety objectives. By doing this, we can be confident that our plans will work when we need them the most.\nContext recap: To ensure our safety plans are effective, we should check for three important things: accuracy, completeness, and alignment with our original safety objectives. By doing this, we can be confident that our plans will work when we need them the most."
        },
        {
          "id": "household-management-101-l07-c4",
          "title": "Next-Step Plan",
          "content": "As we wrap up this lesson, think about one action you can repeat in your next practice round and one action you can improve. Writing these down will help you focus on your growth and make your safety preparation even better next time.\nContext recap: As we wrap up this lesson, think about one action you can repeat in your next practice round and one action you can improve. Writing these down will help you focus on your growth and make your safety preparation even better next time."
        }
      ],
      "flashcards": [
        {
          "id": "household-management-101-l07-f1",
          "front": "home safety",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "household-management-101-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "household-management-101-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "household-management-101-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "household-management-101-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on home safety."
        }
      ]
    },
    {
      "id": "household-management-101-l08",
      "title": "Family Coordination Activity",
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
          "id": "household-management-101-l08-ia1",
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
          "id": "household-management-101-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "household-management-101-l09",
      "title": "Review: Household Skills",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "household-management-101-l09-q1",
          "text": "Which statement best explains cleaning systems in Household Management?",
          "skillId": "household-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains cleaning systems using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how cleaning systems works in practice."
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
          "id": "household-management-101-l09-q2",
          "text": "What is the best first step when analyzing home safety?",
          "skillId": "household-management-101-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for home safety."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to home safety."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-101-l09-q3",
          "text": "Which option shows strong reasoning about home planning?",
          "skillId": "household-management-101-skill-reasoning",
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
              "text": "Use assumptions unrelated to home planning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-101-l09-q4",
          "text": "Why is spaced review useful for Household Management mastery?",
          "skillId": "household-management-101-skill-review",
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
          "id": "household-management-101-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Household Skills",
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
                "label": "Confusion about cleaning systems"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to home safety"
              },
              {
                "id": "l3",
                "label": "Weak transfer of home planning under timing"
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
          "id": "household-management-101-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "household-management-101-l10",
      "title": "Mastery: Household Management",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "household-management-101-l10-q1",
          "text": "Which statement best explains schedules in Household Management?",
          "skillId": "household-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains schedules using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how schedules works in practice."
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
          "id": "household-management-101-l10-q2",
          "text": "What is the best first step when analyzing meal planning?",
          "skillId": "household-management-101-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for meal planning."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to meal planning."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-101-l10-q3",
          "text": "Which option shows strong reasoning about home planning?",
          "skillId": "household-management-101-skill-reasoning",
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
              "text": "Use assumptions unrelated to home planning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-101-l10-q4",
          "text": "Why is spaced review useful for Household Management mastery?",
          "skillId": "household-management-101-skill-review",
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
          "id": "household-management-101-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Household Management",
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
                "label": "Confusion about schedules"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to meal planning"
              },
              {
                "id": "l3",
                "label": "Weak transfer of home planning under timing"
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
          "id": "household-management-101-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "household-management-101-l11",
      "title": "Applied Household Management Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using meal planning.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "household-management-101-l11-ia1",
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
                "label": "Tag repeated mistakes in cleaning systems",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on home safety",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "household-management-101-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "household-management-101-l12",
      "title": "Household Management Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "household-management-101-l12-q1",
          "text": "Which statement best explains schedules in Household Management?",
          "skillId": "household-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains schedules using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how schedules works in practice."
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
          "id": "household-management-101-l12-q2",
          "text": "What is the best first step when analyzing home safety?",
          "skillId": "household-management-101-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for home safety."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to home safety."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-101-l12-q3",
          "text": "Which option shows strong reasoning about home planning?",
          "skillId": "household-management-101-skill-reasoning",
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
              "text": "Use assumptions unrelated to home planning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-101-l12-q4",
          "text": "Why is spaced review useful for Household Management mastery?",
          "skillId": "household-management-101-skill-review",
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
          "id": "household-management-101-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Household Management Mastery Applied Retest",
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
                "label": "Confusion about schedules"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to home safety"
              },
              {
                "id": "l3",
                "label": "Weak transfer of home planning under timing"
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
          "id": "household-management-101-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "household-management-101-l13",
      "title": "Household Management Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "household-management-101-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, you will get to explore how to manage different aspects of a household. This includes creating schedules, planning meals, and ensuring safety at home. You will face a fun challenge that combines all these important skills into one activity, helping you learn how to balance everything effectively.\nContext recap: In this exciting scenario, you will get to explore how to manage different aspects of a household. This includes creating schedules, planning meals, and ensuring safety at home. You will face a fun challenge that combines all these important skills into one activity, helping you learn how to balance everything effectively."
        },
        {
          "id": "household-management-101-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario successfully, it's helpful to break it down into smaller, more manageable decisions. Think about each part of the challenge and decide on a specific strategy for each decision point. This way, you can focus on one step at a time, making it easier to create a solid plan.\nContext recap: To tackle this scenario successfully, it's helpful to break it down into smaller, more manageable decisions. Think about each part of the challenge and decide on a specific strategy for each decision point. This way, you can focus on one step at a time, making it easier to create a solid plan."
        },
        {
          "id": "household-management-101-l13-c3",
          "title": "Execute and Justify",
          "content": "Once you have your plan ready, it's time to put it into action! As you execute your plan, be sure to explain each step you take. Use facts and evidence to support your choices instead of making guesses. This will help you understand why each decision is important and how it contributes to the overall success of your household management.\nContext recap: Once you have your plan ready, it's time to put it into action! As you execute your plan, be sure to explain each step you take. Use facts and evidence to support your choices instead of making guesses. This will help you understand why each decision is important and how it contributes to the overall success of your household management."
        },
        {
          "id": "household-management-101-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After you have completed your plan, it's important to evaluate the outcome. Take a moment to compare what you achieved with your original goals. Identify which parts of your plan worked well and should be kept for the future, and which areas might need some adjustments. This reflection will help you improve your skills for next time!\nContext recap: After you have completed your plan, it's important to evaluate the outcome. Take a moment to compare what you achieved with your original goals. Identify which parts of your plan worked well and should be kept for the future, and which areas might need some adjustments. This reflection will help you improve your skills for next time!"
        }
      ],
      "flashcards": [
        {
          "id": "household-management-101-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "household-management-101-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "household-management-101-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "household-management-101-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "household-management-101-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting schedules, meal planning, and home safety."
        },
        {
          "id": "household-management-101-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "household-management-101-l14",
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
          "id": "household-management-101-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on schedules setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed home safety decisions"
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
          "id": "household-management-101-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "household-management-101-l15",
      "title": "Household Management Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "household-management-101-l15-q1",
          "text": "Which statement best explains cleaning systems in Household Management?",
          "skillId": "household-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains cleaning systems using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how cleaning systems works in practice."
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
          "id": "household-management-101-l15-q2",
          "text": "What is the best first step when analyzing meal planning?",
          "skillId": "household-management-101-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for meal planning."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to meal planning."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-101-l15-q3",
          "text": "Which option shows strong reasoning about home planning?",
          "skillId": "household-management-101-skill-reasoning",
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
              "text": "Use assumptions unrelated to home planning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "household-management-101-l15-q4",
          "text": "Why is spaced review useful for Household Management mastery?",
          "skillId": "household-management-101-skill-review",
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
          "id": "household-management-101-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Household Management Mastery Mastery Sprint",
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
                "label": "Confusion about cleaning systems"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to meal planning"
              },
              {
                "id": "l3",
                "label": "Weak transfer of home planning under timing"
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
          "id": "household-management-101-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
