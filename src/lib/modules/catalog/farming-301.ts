import type { LearningModule } from "@/lib/modules/types";

export const Farming301Module: LearningModule = {
  "id": "farming-301",
  "title": "Agriculture Systems Optimization",
  "description": "Optimize agricultural systems using yield data, resource constraints, and sustainability goals.",
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
    "Apply Sustainable Yield Decisions strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "farming-301-l01",
      "title": "Yield Modeling Fundamentals",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "farming-301-l01-c1",
          "title": "Yield Modeling Fundamentals Overview",
          "content": "In this lesson, we will dive into the fascinating topic of yield modeling, which is a key part of understanding how to improve our farming systems. Yield modeling helps farmers predict how much food they can grow based on different factors like weather, soil health, and crop choices. Our main goal today is to learn how to identify strong reasoning skills. These skills are important because they will help us solve problems more effectively in agriculture. By the end of this lesson, you will have a better understanding of how to think critically about farming practices and how to make smart decisions that lead to better harvests and healthier crops."
        },
        {
          "id": "farming-301-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will discuss how yield modeling works hand-in-hand with understanding resource constraints in farming. First, we will identify the main goal we want to achieve, which is crucial for our success. Then, we will look at the evidence or steps that support our goal. This process will help us make informed decisions about how to use our resources wisely and effectively.\nContext recap: In this section, we will discuss how yield modeling works hand-in-hand with understanding resource constraints in farming. First, we will identify the main goal we want to achieve, which is crucial for our success. Then, we will look at the evidence or steps that support our goal. This process will help us make informed decisions about how to use our resources wisely and effectively."
        },
        {
          "id": "farming-301-l01-c3",
          "title": "Worked Example",
          "content": "Let's go through a guided example together! We will start by clearly defining our goal, which is the first step in our process. Next, we will apply a strategy that takes into account the limitations of our resources. Finally, we will verify our results with a quick check to ensure that our approach was correct. This hands-on example will help you understand how to apply these concepts in real-life situations.\nContext recap: Let's go through a guided example together! We will start by clearly defining our goal, which is the first step in our process. Next, we will apply a strategy that takes into account the limitations of our resources. Finally, we will verify our results with a quick check to ensure that our approach was correct."
        },
        {
          "id": "farming-301-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to shine! Take the same steps we talked about and use them on a new situation. Once you've figured it out, write one clear sentence explaining why your method makes sense. This activity is a great way to strengthen your understanding and gives you a chance to practice your reasoning skills in different scenarios. Remember, the more you practice, the better you get!\nContext recap: Now it's your turn to shine! Take the same steps we talked about and use them on a new situation. Once you've figured it out, write one clear sentence explaining why your method makes sense. This activity is a great way to strengthen your understanding and gives you a chance to practice your reasoning skills in different scenarios."
        }
      ],
      "flashcards": [
        {
          "id": "farming-301-l01-f1",
          "front": "yield modeling",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "farming-301-l01-f2",
          "front": "resource constraints",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "farming-301-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "farming-301-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "farming-301-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about yield modeling and resource constraints."
        },
        {
          "id": "farming-301-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Farming vocabulary."
        }
      ]
    },
    {
      "id": "farming-301-l02",
      "title": "Resource Constraint Planning",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about yield modeling from this lesson.",
          "Explain where resource constraints appears in real life.",
          "Describe one question you still have about agricultural systems optimization."
        ]
      },
      "interactiveActivities": [
        {
          "id": "farming-301-l02-ia1",
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
                "label": "Set a goal for yield modeling",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for resource constraints",
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
          "id": "farming-301-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on resource constraints and write one reflection."
        }
      ]
    },
    {
      "id": "farming-301-l03",
      "title": "Checkpoint: Farm Optimization Setup",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "farming-301-l03-q1",
          "text": "Which statement best explains yield modeling in Farming?",
          "skillId": "farming-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains yield modeling using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how yield modeling works in practice."
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
          "id": "farming-301-l03-q2",
          "text": "What is the best first step when analyzing resource constraints?",
          "skillId": "farming-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for resource constraints."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to resource constraints."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-301-l03-q3",
          "text": "Which option shows strong reasoning about agricultural systems optimization?",
          "skillId": "farming-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to agricultural systems optimization."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-301-l03-q4",
          "text": "Why is spaced review useful for Farming mastery?",
          "skillId": "farming-301-skill-review",
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
          "id": "farming-301-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Farm Optimization Setup",
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
                "label": "Confusion about yield modeling"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to resource constraints"
              },
              {
                "id": "l3",
                "label": "Weak transfer of agricultural systems optimization under timing"
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
          "id": "farming-301-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "farming-301-l04",
      "title": "Soil-Water Tradeoff Analysis",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "farming-301-l04-c1",
          "title": "Soil-Water Tradeoff Analysis Focus",
          "content": "In this lesson, we will dive deeper into the important topic of soil-water tradeoffs. We will use structured reasoning to enhance our understanding of how these tradeoffs affect farming decisions. Our journey will take us from simply understanding the concepts to making informed, applied decisions that can improve agricultural practices.\nContext recap: In this lesson, we will dive deeper into the important topic of soil-water tradeoffs. We will use structured reasoning to enhance our understanding of how these tradeoffs affect farming decisions. Our journey will take us from simply understanding the concepts to making informed, applied decisions that can improve agricultural practices."
        },
        {
          "id": "farming-301-l04-c2",
          "title": "Method Steps",
          "content": "Let's break down the steps we need to follow for analyzing soil-water tradeoffs. Step 1 is to clearly identify what is being asked in the problem. Step 2 involves choosing a strategy that aligns with the soil-water tradeoffs we are considering. Finally, Step 3 is to justify our choices with solid evidence. Following these steps will help us make better decisions in farming.\nContext recap: Let's break down the steps we need to follow for analyzing soil-water tradeoffs. Step 1 is to clearly identify what is being asked in the problem. Step 2 involves choosing a strategy that aligns with the soil-water tradeoffs we are considering. Finally, Step 3 is to justify our choices with solid evidence."
        },
        {
          "id": "farming-301-l04-c3",
          "title": "Common Mistakes",
          "content": "As we learn, it's important to be aware of common mistakes that can occur. Some frequent errors include skipping the setup phase, using assumptions that are not related to the problem, or failing to verify the final result. By recognizing these pitfalls, we can improve our problem-solving skills and make more accurate decisions.\nContext recap: As we learn, it's important to be aware of common mistakes that can occur. Some frequent errors include skipping the setup phase, using assumptions that are not related to the problem, or failing to verify the final result. By recognizing these pitfalls, we can improve our problem-solving skills and make more accurate decisions."
        },
        {
          "id": "farming-301-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar problem on your own! After you have completed it, take a moment to compare your process with the steps we discussed in the lesson. This will help you see how well you understood the material and where you might need to improve.\nContext recap: Now, it's time for you to try solving a similar problem on your own! After you have completed it, take a moment to compare your process with the steps we discussed in the lesson. This will help you see how well you understood the material and where you might need to improve."
        }
      ],
      "flashcards": [
        {
          "id": "farming-301-l04-f1",
          "front": "soil-water tradeoffs",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "farming-301-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "farming-301-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "farming-301-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "farming-301-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for soil-water tradeoffs scenarios."
        }
      ]
    },
    {
      "id": "farming-301-l05",
      "title": "Ecosystem Health Indicators",
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
          "id": "farming-301-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "soil-water tradeoffs Concept"
              },
              {
                "id": "process",
                "label": "resilience planning Process"
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
          "id": "farming-301-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a soil-water tradeoffs challenge."
        }
      ]
    },
    {
      "id": "farming-301-l06",
      "title": "Checkpoint: Sustainable Yield Decisions",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "farming-301-l06-q1",
          "text": "Which statement best explains soil-water tradeoffs in Farming?",
          "skillId": "farming-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains soil-water tradeoffs using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how soil-water tradeoffs works in practice."
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
          "id": "farming-301-l06-q2",
          "text": "What is the best first step when analyzing resilience planning?",
          "skillId": "farming-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for resilience planning."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to resilience planning."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-301-l06-q3",
          "text": "Which option shows strong reasoning about agricultural systems optimization?",
          "skillId": "farming-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to agricultural systems optimization."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-301-l06-q4",
          "text": "Why is spaced review useful for Farming mastery?",
          "skillId": "farming-301-skill-review",
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
          "id": "farming-301-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Sustainable Yield Decisions",
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
                "label": "Confusion about soil-water tradeoffs"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to resilience planning"
              },
              {
                "id": "l3",
                "label": "Weak transfer of agricultural systems optimization under timing"
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
          "id": "farming-301-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "farming-301-l07",
      "title": "Climate Risk Adaptation on Farms",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "farming-301-l07-c1",
          "title": "Climate Risk Adaptation on Farms Setup",
          "content": "Before we start discussing climate risk adaptation on farms, it's essential to use resilience planning to organize our approach. By planning ahead, we can improve both the quality of our decisions and the speed at which we make them. This preparation will help us tackle challenges more effectively.\nContext recap: Before we start discussing climate risk adaptation on farms, it's essential to use resilience planning to organize our approach. By planning ahead, we can improve both the quality of our decisions and the speed at which we make them. This preparation will help us tackle challenges more effectively."
        },
        {
          "id": "farming-301-l07-c2",
          "title": "Decision Rules",
          "content": "When you have to make a choice between different options, it can sometimes be confusing. To help you decide, try using a simple rule: always go for the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. This approach will help you make smart decisions that are in line with your farming goals, ensuring that you are on the right path to success.\nContext recap: When you have to make a choice between different options, it can sometimes be confusing. To help you decide, try using a simple rule: always go for the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. This approach will help you make smart decisions that are in line with your farming goals, ensuring that you are on the right path to success."
        },
        {
          "id": "farming-301-l07-c3",
          "title": "Quality Control",
          "content": "As you work through your decisions, it's important to check for three key things: accuracy, completeness, and alignment with your original objective. By ensuring these elements are in place, you can maintain high standards in your work and make better choices.\nContext recap: As you work through your decisions, it's important to check for three key things: accuracy, completeness, and alignment with your original objective. By ensuring these elements are in place, you can maintain high standards in your work and make better choices."
        },
        {
          "id": "farming-301-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your practice round, take a moment to write down one action that you would like to repeat in your next attempt and one action that you think could be improved. This reflection will help you grow and develop your skills as you continue to learn about climate risk adaptation in farming.\nContext recap: After completing your practice round, take a moment to write down one action that you would like to repeat in your next attempt and one action that you think could be improved. This reflection will help you grow and develop your skills as you continue to learn about climate risk adaptation in farming."
        }
      ],
      "flashcards": [
        {
          "id": "farming-301-l07-f1",
          "front": "resilience planning",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "farming-301-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "farming-301-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "farming-301-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "farming-301-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on resilience planning."
        }
      ]
    },
    {
      "id": "farming-301-l08",
      "title": "Farm Operations Scenario Lab",
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
          "id": "farming-301-l08-ia1",
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
          "id": "farming-301-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "farming-301-l09",
      "title": "Review: Agricultural Optimization",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "farming-301-l09-q1",
          "text": "Which statement best explains resource constraints in Farming?",
          "skillId": "farming-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains resource constraints using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how resource constraints works in practice."
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
          "id": "farming-301-l09-q2",
          "text": "What is the best first step when analyzing resilience planning?",
          "skillId": "farming-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for resilience planning."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to resilience planning."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-301-l09-q3",
          "text": "Which option shows strong reasoning about agricultural systems optimization?",
          "skillId": "farming-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to agricultural systems optimization."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-301-l09-q4",
          "text": "Why is spaced review useful for Farming mastery?",
          "skillId": "farming-301-skill-review",
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
          "id": "farming-301-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Agricultural Optimization",
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
                "label": "Confusion about resource constraints"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to resilience planning"
              },
              {
                "id": "l3",
                "label": "Weak transfer of agricultural systems optimization under timing"
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
          "id": "farming-301-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "farming-301-l10",
      "title": "Mastery: Farming III",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "farming-301-l10-q1",
          "text": "Which statement best explains yield modeling in Farming?",
          "skillId": "farming-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains yield modeling using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how yield modeling works in practice."
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
          "id": "farming-301-l10-q2",
          "text": "What is the best first step when analyzing soil-water tradeoffs?",
          "skillId": "farming-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for soil-water tradeoffs."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to soil-water tradeoffs."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-301-l10-q3",
          "text": "Which option shows strong reasoning about agricultural systems optimization?",
          "skillId": "farming-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to agricultural systems optimization."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-301-l10-q4",
          "text": "Why is spaced review useful for Farming mastery?",
          "skillId": "farming-301-skill-review",
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
          "id": "farming-301-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Farming III",
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
                "label": "Confusion about yield modeling"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to soil-water tradeoffs"
              },
              {
                "id": "l3",
                "label": "Weak transfer of agricultural systems optimization under timing"
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
          "id": "farming-301-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "farming-301-l11",
      "title": "Applied Farming Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using soil-water tradeoffs.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "farming-301-l11-ia1",
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
                "label": "Tag repeated mistakes in resource constraints",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on resilience planning",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "farming-301-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "farming-301-l12",
      "title": "Farming III Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "farming-301-l12-q1",
          "text": "Which statement best explains yield modeling in Farming?",
          "skillId": "farming-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains yield modeling using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how yield modeling works in practice."
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
          "id": "farming-301-l12-q2",
          "text": "What is the best first step when analyzing resilience planning?",
          "skillId": "farming-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for resilience planning."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to resilience planning."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-301-l12-q3",
          "text": "Which option shows strong reasoning about agricultural systems optimization?",
          "skillId": "farming-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to agricultural systems optimization."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-301-l12-q4",
          "text": "Why is spaced review useful for Farming mastery?",
          "skillId": "farming-301-skill-review",
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
          "id": "farming-301-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Farming III Mastery Applied Retest",
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
                "label": "Confusion about yield modeling"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to resilience planning"
              },
              {
                "id": "l3",
                "label": "Weak transfer of agricultural systems optimization under timing"
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
          "id": "farming-301-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "farming-301-l13",
      "title": "Farming Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "farming-301-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, we will explore how to improve farming practices by looking at three important areas: how much food we can grow (yield modeling), how to manage water in the soil (soil-water tradeoffs), and how to make our farming methods stronger against challenges (resilience planning). Together, these elements create a fun and practical challenge for us to solve!\nContext recap: In this exciting scenario, we will explore how to improve farming practices by looking at three important areas: how much food we can grow (yield modeling), how to manage water in the soil (soil-water tradeoffs), and how to make our farming methods stronger against challenges (resilience planning). Together, these elements create a fun and practical challenge for us to solve!"
        },
        {
          "id": "farming-301-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, we will break it down into smaller, manageable decisions. For each decision point, we will think carefully and choose one strategy that we believe will work best. This way, we can focus on each part of the challenge and make thoughtful choices that lead us to success.\nContext recap: To tackle this scenario effectively, we will break it down into smaller, manageable decisions. For each decision point, we will think carefully and choose one strategy that we believe will work best. This way, we can focus on each part of the challenge and make thoughtful choices that lead us to success."
        },
        {
          "id": "farming-301-l13-c3",
          "title": "Execute and Justify",
          "content": "Once we have our plan ready, it's time to put it into action! As we execute our strategies, we will explain each step we take. It’s important to support our choices with solid evidence rather than just making guesses. This will help us understand why we are making each decision and how it contributes to our overall goal.\nContext recap: Once we have our plan ready, it's time to put it into action! As we execute our strategies, we will explain each step we take. It’s important to support our choices with solid evidence rather than just making guesses. This will help us understand why we are making each decision and how it contributes to our overall goal."
        },
        {
          "id": "farming-301-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After we have completed our farming scenario, we will take a moment to evaluate the results. We will compare what we achieved with our original targets. This will help us identify which parts of our plan worked well and which areas might need some adjustments. Reflecting on our outcomes is a key step in learning and improving for the future!\nContext recap: After we have completed our farming scenario, we will take a moment to evaluate the results. We will compare what we achieved with our original targets. This will help us identify which parts of our plan worked well and which areas might need some adjustments. Reflecting on our outcomes is a key step in learning and improving for the future!"
        }
      ],
      "flashcards": [
        {
          "id": "farming-301-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "farming-301-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "farming-301-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "farming-301-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "farming-301-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting yield modeling, soil-water tradeoffs, and resilience planning."
        },
        {
          "id": "farming-301-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "farming-301-l14",
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
          "id": "farming-301-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on yield modeling setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed resilience planning decisions"
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
          "id": "farming-301-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "farming-301-l15",
      "title": "Farming III Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "farming-301-l15-q1",
          "text": "Which statement best explains resource constraints in Farming?",
          "skillId": "farming-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains resource constraints using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how resource constraints works in practice."
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
          "id": "farming-301-l15-q2",
          "text": "What is the best first step when analyzing soil-water tradeoffs?",
          "skillId": "farming-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for soil-water tradeoffs."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to soil-water tradeoffs."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-301-l15-q3",
          "text": "Which option shows strong reasoning about agricultural systems optimization?",
          "skillId": "farming-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to agricultural systems optimization."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "farming-301-l15-q4",
          "text": "Why is spaced review useful for Farming mastery?",
          "skillId": "farming-301-skill-review",
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
          "id": "farming-301-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Farming III Mastery Mastery Sprint",
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
                "label": "Confusion about resource constraints"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to soil-water tradeoffs"
              },
              {
                "id": "l3",
                "label": "Weak transfer of agricultural systems optimization under timing"
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
          "id": "farming-301-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
