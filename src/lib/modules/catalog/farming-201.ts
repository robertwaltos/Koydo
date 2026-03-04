import type { LearningModule } from "@/lib/modules/types";

export const Farming201Module: LearningModule = {
  "id": "farming-201",
  "title": "Sustainable Farming Systems",
  "description": "Plan resilient food systems using soil, water, crop, and ecosystem strategies.",
  "subject": "Farming",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Farming",
    "Apply Sustainable Operations strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "farming-201-l01",
      "title": "Soil Management Plans",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "farming-201-l01-c1",
          "title": "Soil Management Plans Overview",
          "content": "In this lesson, we will dive into the fascinating world of soil management, which is a key part of sustainable farming systems. Soil is like the foundation of a house; it supports the plants we grow and helps them thrive. By learning how to manage soil properly, we can ensure that our crops are healthy and that we are taking care of our planet at the same time. Our main goal today is to develop our critical thinking skills. We will practice recognizing strong reasoning, which is important before we tackle any challenges related to soil management. This understanding will empower us to make smarter choices in our farming practices, benefiting both our crops and the environment. Let's get started on this exciting journey of learning about soil management!"
        },
        {
          "id": "farming-201-l01-c2",
          "title": "Core Concept",
          "content": "In sustainable farming, managing our soil and water wisely is very important because they work together to help our plants grow healthy. First, let's think about what our main goal is for our farming practices. This could be growing more food, protecting the environment, or using fewer resources. Once we have our goal in mind, we will look for evidence or steps that can help us reach that goal. By doing this, we can learn how to take care of our land and water in a way that supports both our farming needs and the health of our planet. This understanding is key to creating a successful and sustainable farming system that benefits everyone."
        },
        {
          "id": "farming-201-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! First, we will define our main goal related to soil management. Then, we will apply a strategy that focuses on water management to support our goal. Finally, we will verify our results by doing a quick check to see if our approach was effective. This step-by-step process will help us understand how to apply our knowledge in real-life situations.\nContext recap: Let's walk through a guided example together! First, we will define our main goal related to soil management. Then, we will apply a strategy that focuses on water management to support our goal. Finally, we will verify our results by doing a quick check to see if our approach was effective."
        },
        {
          "id": "farming-201-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to be a soil management expert! Think about a different farming situation and use the same steps we talked about earlier. Once you've figured it out, write one clear sentence explaining why your method makes sense. This activity will not only help you practice your thinking skills but also strengthen your understanding of how to manage soil effectively for healthy crops.\nContext recap: Now it's your turn to be a soil management expert! Think about a different farming situation and use the same steps we talked about earlier. Once you've figured it out, write one clear sentence explaining why your method makes sense. This activity will not only help you practice your thinking skills but also strengthen your understanding of how to manage soil effectively for healthy crops."
        }
      ],
      "flashcards": [
        {
          "id": "farming-201-l01-f1",
          "front": "soil management",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "farming-201-l01-f2",
          "front": "water strategy",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "farming-201-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "farming-201-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "farming-201-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about soil management and water strategy."
        },
        {
          "id": "farming-201-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Farming vocabulary."
        }
      ]
    },
    {
      "id": "farming-201-l02",
      "title": "Water Use Efficiency",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about soil management from this lesson.",
          "Explain where water strategy appears in real life.",
          "Describe one question you still have about sustainable agricultural systems."
        ]
      },
      "interactiveActivities": [
        {
          "id": "farming-201-l02-ia1",
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
                "label": "Set a goal for soil management",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for water strategy",
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
          "id": "farming-201-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on water strategy and write one reflection."
        }
      ]
    },
    {
      "id": "farming-201-l03",
      "title": "Checkpoint: Resource Planning",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "farming-201-l03-q1",
          "text": "Which statement best explains soil management in Farming?",
          "skillId": "farming-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains soil management using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how soil management works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Farming."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-201-l03-q2",
          "text": "What is the best first step when analyzing water strategy?",
          "skillId": "farming-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for water strategy."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to water strategy."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-201-l03-q3",
          "text": "Which option shows strong reasoning about sustainable agricultural systems?",
          "skillId": "farming-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to sustainable agricultural systems."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-201-l03-q4",
          "text": "Why is spaced review useful for Farming mastery?",
          "skillId": "farming-201-skill-review",
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
          "id": "farming-201-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Resource Planning",
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
                "label": "Confusion about soil management"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to water strategy"
              },
              {
                "id": "l3",
                "label": "Weak transfer of sustainable agricultural systems under timing"
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
          "id": "farming-201-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "farming-201-l04",
      "title": "Crop Rotation Logic",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "farming-201-l04-c1",
          "title": "Crop Rotation Logic Focus",
          "content": "In this lesson, we will deepen our understanding of crop planning by using structured reasoning. We will move beyond just understanding the concepts to making informed decisions about which crops to plant and when. This approach will help us create a more effective and sustainable farming plan.\nContext recap: In this lesson, we will deepen our understanding of crop planning by using structured reasoning. We will move beyond just understanding the concepts to making informed decisions about which crops to plant and when. This approach will help us create a more effective and sustainable farming plan."
        },
        {
          "id": "farming-201-l04-c2",
          "title": "Method Steps",
          "content": "Let's break down the steps we need to follow for effective crop rotation planning. Step 1: Identify what is being asked in the scenario. Step 2: Choose a strategy that aligns with your crop planning goals. Step 3: Justify your choice with evidence that supports your decision. Following these steps will help you make better choices in your farming practices.\nContext recap: Let's break down the steps we need to follow for effective crop rotation planning. Step 1: Identify what is being asked in the scenario. Step 2: Choose a strategy that aligns with your crop planning goals. Step 3: Justify your choice with evidence that supports your decision."
        },
        {
          "id": "farming-201-l04-c3",
          "title": "Common Mistakes",
          "content": "When planning your crop rotation, be aware of common mistakes that can occur. These include skipping the initial setup, making assumptions that are not related to the task, or failing to verify your final results. By avoiding these errors, you can improve your decision-making process and achieve better outcomes in your farming efforts.\nContext recap: When planning your crop rotation, be aware of common mistakes that can occur. These include skipping the initial setup, making assumptions that are not related to the task, or failing to verify your final results. By avoiding these errors, you can improve your decision-making process and achieve better outcomes in your farming efforts."
        },
        {
          "id": "farming-201-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar problem on your own! After you have completed it, compare your process to the lesson sequence we discussed. This will help you reflect on your reasoning and see how well you understood the concepts we covered.\nContext recap: Now, it's time for you to try solving a similar problem on your own! After you have completed it, compare your process to the lesson sequence we discussed. This will help you reflect on your reasoning and see how well you understood the concepts we covered."
        }
      ],
      "flashcards": [
        {
          "id": "farming-201-l04-f1",
          "front": "crop planning",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "farming-201-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "farming-201-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "farming-201-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "farming-201-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for crop planning scenarios."
        }
      ]
    },
    {
      "id": "farming-201-l05",
      "title": "Biodiversity and Pest Balance",
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
          "id": "farming-201-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "crop planning Concept"
              },
              {
                "id": "process",
                "label": "ecosystem resilience Process"
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
          "id": "farming-201-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a crop planning challenge."
        }
      ]
    },
    {
      "id": "farming-201-l06",
      "title": "Checkpoint: Sustainable Operations",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "farming-201-l06-q1",
          "text": "Which statement best explains crop planning in Farming?",
          "skillId": "farming-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains crop planning using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how crop planning works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Farming."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-201-l06-q2",
          "text": "What is the best first step when analyzing ecosystem resilience?",
          "skillId": "farming-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for ecosystem resilience."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to ecosystem resilience."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-201-l06-q3",
          "text": "Which option shows strong reasoning about sustainable agricultural systems?",
          "skillId": "farming-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to sustainable agricultural systems."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-201-l06-q4",
          "text": "Why is spaced review useful for Farming mastery?",
          "skillId": "farming-201-skill-review",
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
          "id": "farming-201-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Sustainable Operations",
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
                "label": "Confusion about crop planning"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to ecosystem resilience"
              },
              {
                "id": "l3",
                "label": "Weak transfer of sustainable agricultural systems under timing"
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
          "id": "farming-201-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "farming-201-l07",
      "title": "Farm Data and Yield Decisions",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "farming-201-l07-c1",
          "title": "Farm Data and Yield Decisions Setup",
          "content": "Before you start making decisions about farm data and yield, it's important to use the concept of ecosystem resilience to organize your approach. Planning ahead can significantly improve the quality of your decisions and the speed at which you can implement them. This preparation will set you up for success in your farming practices.\nContext recap: Before you start making decisions about farm data and yield, it's important to use the concept of ecosystem resilience to organize your approach. Planning ahead can significantly improve the quality of your decisions and the speed at which you can implement them. This preparation will set you up for success in your farming practices."
        },
        {
          "id": "farming-201-l07-c2",
          "title": "Decision Rules",
          "content": "When you have to make decisions in farming and there are different options to choose from, it can sometimes be tricky. A good way to make these choices easier is to follow a simple rule. Always pick the option that has the strongest evidence backing it up and that connects clearly to what you want to achieve on your farm. By using this method, you can make smart and effective decisions that will help your farm succeed.\nContext recap: When you have to make decisions in farming and there are different options to choose from, it can sometimes be tricky. A good way to make these choices easier is to follow a simple rule. Always pick the option that has the strongest evidence backing it up and that connects clearly to what you want to achieve on your farm. By using this method, you can make smart and effective decisions that will help your farm succeed."
        },
        {
          "id": "farming-201-l07-c3",
          "title": "Quality Control",
          "content": "To ensure the quality of your decisions, check for three important factors: accuracy, completeness, and alignment with your original objectives. By focusing on these aspects, you can improve the reliability of your farming practices and achieve better results.\nContext recap: To ensure the quality of your decisions, check for three important factors: accuracy, completeness, and alignment with your original objectives. By focusing on these aspects, you can improve the reliability of your farming practices and achieve better results."
        },
        {
          "id": "farming-201-l07-c4",
          "title": "Next-Step Plan",
          "content": "As you wrap up your practice, take a moment to write down one action you would like to repeat in your next round and one action you want to improve. This reflection will help you continuously develop your skills and enhance your farming strategies.\nContext recap: As you wrap up your practice, take a moment to write down one action you would like to repeat in your next round and one action you want to improve. This reflection will help you continuously develop your skills and enhance your farming strategies."
        }
      ],
      "flashcards": [
        {
          "id": "farming-201-l07-f1",
          "front": "ecosystem resilience",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "farming-201-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "farming-201-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "farming-201-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "farming-201-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on ecosystem resilience."
        }
      ]
    },
    {
      "id": "farming-201-l08",
      "title": "Season Planning Studio",
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
          "id": "farming-201-l08-ia1",
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
          "id": "farming-201-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "farming-201-l09",
      "title": "Review: Agro-System Thinking",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "farming-201-l09-q1",
          "text": "Which statement best explains water strategy in Farming?",
          "skillId": "farming-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains water strategy using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how water strategy works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Farming."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-201-l09-q2",
          "text": "What is the best first step when analyzing ecosystem resilience?",
          "skillId": "farming-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for ecosystem resilience."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to ecosystem resilience."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-201-l09-q3",
          "text": "Which option shows strong reasoning about sustainable agricultural systems?",
          "skillId": "farming-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to sustainable agricultural systems."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-201-l09-q4",
          "text": "Why is spaced review useful for Farming mastery?",
          "skillId": "farming-201-skill-review",
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
          "id": "farming-201-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Agro-System Thinking",
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
                "label": "Confusion about water strategy"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to ecosystem resilience"
              },
              {
                "id": "l3",
                "label": "Weak transfer of sustainable agricultural systems under timing"
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
          "id": "farming-201-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "farming-201-l10",
      "title": "Mastery: Farming II",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "farming-201-l10-q1",
          "text": "Which statement best explains soil management in Farming?",
          "skillId": "farming-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains soil management using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how soil management works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Farming."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-201-l10-q2",
          "text": "What is the best first step when analyzing crop planning?",
          "skillId": "farming-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for crop planning."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to crop planning."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-201-l10-q3",
          "text": "Which option shows strong reasoning about sustainable agricultural systems?",
          "skillId": "farming-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to sustainable agricultural systems."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-201-l10-q4",
          "text": "Why is spaced review useful for Farming mastery?",
          "skillId": "farming-201-skill-review",
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
          "id": "farming-201-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Farming II",
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
                "label": "Confusion about soil management"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to crop planning"
              },
              {
                "id": "l3",
                "label": "Weak transfer of sustainable agricultural systems under timing"
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
          "id": "farming-201-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "farming-201-l11",
      "title": "Applied Farming Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using crop planning.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "farming-201-l11-ia1",
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
                "label": "Tag repeated mistakes in water strategy",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on ecosystem resilience",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "farming-201-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "farming-201-l12",
      "title": "Farming II Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "farming-201-l12-q1",
          "text": "Which statement best explains soil management in Farming?",
          "skillId": "farming-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains soil management using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how soil management works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Farming."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-201-l12-q2",
          "text": "What is the best first step when analyzing ecosystem resilience?",
          "skillId": "farming-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for ecosystem resilience."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to ecosystem resilience."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-201-l12-q3",
          "text": "Which option shows strong reasoning about sustainable agricultural systems?",
          "skillId": "farming-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to sustainable agricultural systems."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-201-l12-q4",
          "text": "Why is spaced review useful for Farming mastery?",
          "skillId": "farming-201-skill-review",
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
          "id": "farming-201-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Farming II Mastery Applied Retest",
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
                "label": "Confusion about soil management"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to ecosystem resilience"
              },
              {
                "id": "l3",
                "label": "Weak transfer of sustainable agricultural systems under timing"
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
          "id": "farming-201-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "farming-201-l13",
      "title": "Farming Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "farming-201-l13-c1",
          "title": "Scenario Brief",
          "content": "In this scenario, we will explore how to manage soil health, plan for growing crops, and ensure that our farming practices support the environment. This challenge will help us understand the importance of these elements working together to create a sustainable farming system.\nContext recap: In this scenario, we will explore how to manage soil health, plan for growing crops, and ensure that our farming practices support the environment. This challenge will help us understand the importance of these elements working together to create a sustainable farming system."
        },
        {
          "id": "farming-201-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, we should break it down into smaller, manageable decisions. For each decision point, we will choose a specific strategy that will guide our actions. This approach will help us stay organized and focused as we work through the challenge.\nContext recap: To tackle this scenario effectively, we should break it down into smaller, manageable decisions. For each decision point, we will choose a specific strategy that will guide our actions. This approach will help us stay organized and focused as we work through the challenge."
        },
        {
          "id": "farming-201-l13-c3",
          "title": "Execute and Justify",
          "content": "Once we have our plan in place, it's time to put it into action! As we execute our strategies, we need to explain each step we take. It's important to support our choices with solid evidence and reasoning, rather than making guesses. This will help us understand the impact of our decisions.\nContext recap: Once we have our plan in place, it's time to put it into action! As we execute our strategies, we need to explain each step we take. It's important to support our choices with solid evidence and reasoning, rather than making guesses. This will help us understand the impact of our decisions."
        },
        {
          "id": "farming-201-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After completing our farming scenario, we will evaluate the results we achieved. We should compare our outcomes to the goals we set at the beginning. This evaluation will help us identify what worked well and what needs to be changed or improved for future efforts.\nContext recap: After completing our farming scenario, we will evaluate the results we achieved. We should compare our outcomes to the goals we set at the beginning. This evaluation will help us identify what worked well and what needs to be changed or improved for future efforts."
        }
      ],
      "flashcards": [
        {
          "id": "farming-201-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "farming-201-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "farming-201-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "farming-201-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "farming-201-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting soil management, crop planning, and ecosystem resilience."
        },
        {
          "id": "farming-201-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "farming-201-l14",
      "title": "Farming Coaching Clinic",
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
          "id": "farming-201-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on soil management setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed ecosystem resilience decisions"
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
          "id": "farming-201-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "farming-201-l15",
      "title": "Farming II Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "farming-201-l15-q1",
          "text": "Which statement best explains water strategy in Farming?",
          "skillId": "farming-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains water strategy using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how water strategy works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Farming."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-201-l15-q2",
          "text": "What is the best first step when analyzing crop planning?",
          "skillId": "farming-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for crop planning."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to crop planning."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-201-l15-q3",
          "text": "Which option shows strong reasoning about sustainable agricultural systems?",
          "skillId": "farming-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to sustainable agricultural systems."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-201-l15-q4",
          "text": "Why is spaced review useful for Farming mastery?",
          "skillId": "farming-201-skill-review",
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
          "id": "farming-201-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Farming II Mastery Mastery Sprint",
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
                "label": "Confusion about water strategy"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to crop planning"
              },
              {
                "id": "l3",
                "label": "Weak transfer of sustainable agricultural systems under timing"
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
          "id": "farming-201-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
