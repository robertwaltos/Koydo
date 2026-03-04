import type { LearningModule } from "@/lib/modules/types";

export const Geography201Module: LearningModule = {
  "id": "geography-201",
  "title": "Geography, Environment, and Data",
  "description": "Use geographic tools and datasets to analyze environmental and human systems.",
  "subject": "Geography",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Geography",
    "Apply Human-Environment Systems strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "geography-201-l01",
      "title": "Interpreting Thematic Maps",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "geography-201-l01-c1",
          "title": "Interpreting Thematic Maps Overview",
          "content": "In this lesson, we will dive into the fascinating world of thematic maps! These special maps help us understand different themes or topics, like population, climate, or natural resources, by showing information in a visual way. We will learn how to interpret these maps using geospatial analysis, which is a fancy term for looking at data related to places. Our main goal is to develop strong reasoning skills that will help us make sense of the information we see on the maps. By the end of this lesson, you will be equipped to tackle various map-related challenges with confidence. So, let's embark on this exciting journey of map interpretation together and discover what stories these maps have to tell us!"
        },
        {
          "id": "geography-201-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will learn how map interpretation and spatial data work together to help us understand our world better. First, we will identify the main target or question we want to answer. Then, we will look for evidence or steps that support our understanding of that target. This process will help us become better at analyzing maps and using the information they provide.\nContext recap: In this section, we will learn how map interpretation and spatial data work together to help us understand our world better. First, we will identify the main target or question we want to answer. Then, we will look for evidence or steps that support our understanding of that target. This process will help us become better at analyzing maps and using the information they provide."
        },
        {
          "id": "geography-201-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! First, we will define our goal for this example. Next, we will apply a strategy to analyze the spatial data we have. Finally, we will verify our results with a quick check to ensure we understood everything correctly. This step-by-step approach will help you feel more confident in interpreting thematic maps.\nContext recap: Let's walk through a guided example together! First, we will define our goal for this example. Next, we will apply a strategy to analyze the spatial data we have. Finally, we will verify our results with a quick check to ensure we understood everything correctly."
        },
        {
          "id": "geography-201-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to shine! Use the same steps we just learned to tackle a new situation. As you work through this, be sure to explain in one clear sentence why your method makes sense. This exercise will not only help you practice your reasoning skills but also strengthen your understanding of how to interpret maps effectively. Remember, the clearer you are, the better you'll understand the information presented on the maps!\nContext recap: Now it's your turn to shine! Use the same steps we just learned to tackle a new situation. As you work through this, be sure to explain in one clear sentence why your method makes sense. This exercise will not only help you practice your reasoning skills but also strengthen your understanding of how to interpret maps effectively."
        }
      ],
      "flashcards": [
        {
          "id": "geography-201-l01-f1",
          "front": "map interpretation",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "geography-201-l01-f2",
          "front": "spatial data",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "geography-201-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "geography-201-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "geography-201-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about map interpretation and spatial data."
        },
        {
          "id": "geography-201-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Geography vocabulary."
        }
      ]
    },
    {
      "id": "geography-201-l02",
      "title": "Spatial Patterns and Data Layers",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about map interpretation from this lesson.",
          "Explain where spatial data appears in real life.",
          "Describe one question you still have about geospatial analysis."
        ]
      },
      "interactiveActivities": [
        {
          "id": "geography-201-l02-ia1",
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
                "label": "Set a goal for map interpretation",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for spatial data",
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
          "id": "geography-201-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on spatial data and write one reflection."
        }
      ]
    },
    {
      "id": "geography-201-l03",
      "title": "Checkpoint: Geospatial Skills II",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "geography-201-l03-q1",
          "text": "Which statement best explains map interpretation in Geography?",
          "skillId": "geography-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains map interpretation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how map interpretation works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Geography."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-201-l03-q2",
          "text": "What is the best first step when analyzing spatial data?",
          "skillId": "geography-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for spatial data."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to spatial data."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-201-l03-q3",
          "text": "Which option shows strong reasoning about geospatial analysis?",
          "skillId": "geography-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to geospatial analysis."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-201-l03-q4",
          "text": "Why is spaced review useful for Geography mastery?",
          "skillId": "geography-201-skill-review",
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
          "id": "geography-201-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Geospatial Skills II",
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
                "label": "Confusion about map interpretation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to spatial data"
              },
              {
                "id": "l3",
                "label": "Weak transfer of geospatial analysis under timing"
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
          "id": "geography-201-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "geography-201-l04",
      "title": "Environmental Change and Risk",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "geography-201-l04-c1",
          "title": "Environmental Change and Risk Focus",
          "content": "In this lesson, we will deepen our understanding of environmental change by using structured reasoning. We will move from simply understanding concepts to making informed decisions based on our knowledge. This approach will help us think critically about the environmental changes happening around us and how we can respond effectively.\nContext recap: In this lesson, we will deepen our understanding of environmental change by using structured reasoning. We will move from simply understanding concepts to making informed decisions based on our knowledge. This approach will help us think critically about the environmental changes happening around us and how we can respond effectively."
        },
        {
          "id": "geography-201-l04-c2",
          "title": "Method Steps",
          "content": "Let's break down the steps we need to take in this lesson. Step 1: Identify what is being asked in the situation. Step 2: Choose a strategy that aligns with the environmental change we are discussing. Step 3: Justify your choice with evidence that supports your reasoning. Following these steps will guide you in making thoughtful decisions regarding environmental issues.\nContext recap: Let's break down the steps we need to take in this lesson. Step 1: Identify what is being asked in the situation. Step 2: Choose a strategy that aligns with the environmental change we are discussing. Step 3: Justify your choice with evidence that supports your reasoning."
        },
        {
          "id": "geography-201-l04-c3",
          "title": "Common Mistakes",
          "content": "It's important to be aware of common mistakes that can happen during this process. Some common errors include skipping the setup phase, using assumptions that are not related to the topic, or failing to verify the final result of your analysis. By recognizing these pitfalls, you can improve your reasoning and decision-making skills.\nContext recap: It's important to be aware of common mistakes that can happen during this process. Some common errors include skipping the setup phase, using assumptions that are not related to the topic, or failing to verify the final result of your analysis. By recognizing these pitfalls, you can improve your reasoning and decision-making skills."
        },
        {
          "id": "geography-201-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar problem on your own! After you complete it, take a moment to compare your process to the lesson sequence we discussed. This reflection will help you identify areas where you did well and where you might want to improve in the future.\nContext recap: Now, it's time for you to try solving a similar problem on your own! After you complete it, take a moment to compare your process to the lesson sequence we discussed. This reflection will help you identify areas where you did well and where you might want to improve in the future."
        }
      ],
      "flashcards": [
        {
          "id": "geography-201-l04-f1",
          "front": "environmental change",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "geography-201-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "geography-201-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "geography-201-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "geography-201-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for environmental change scenarios."
        }
      ]
    },
    {
      "id": "geography-201-l05",
      "title": "Urbanization and Infrastructure",
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
          "id": "geography-201-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "environmental change Concept"
              },
              {
                "id": "process",
                "label": "human settlement patterns Process"
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
          "id": "geography-201-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a environmental change challenge."
        }
      ]
    },
    {
      "id": "geography-201-l06",
      "title": "Checkpoint: Human-Environment Systems",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "geography-201-l06-q1",
          "text": "Which statement best explains environmental change in Geography?",
          "skillId": "geography-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains environmental change using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how environmental change works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Geography."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-201-l06-q2",
          "text": "What is the best first step when analyzing human settlement patterns?",
          "skillId": "geography-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for human settlement patterns."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to human settlement patterns."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-201-l06-q3",
          "text": "Which option shows strong reasoning about geospatial analysis?",
          "skillId": "geography-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to geospatial analysis."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-201-l06-q4",
          "text": "Why is spaced review useful for Geography mastery?",
          "skillId": "geography-201-skill-review",
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
          "id": "geography-201-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Human-Environment Systems",
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
                "label": "Confusion about environmental change"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to human settlement patterns"
              },
              {
                "id": "l3",
                "label": "Weak transfer of geospatial analysis under timing"
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
          "id": "geography-201-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "geography-201-l07",
      "title": "Resource Distribution and Equity",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "geography-201-l07-c1",
          "title": "Resource Distribution and Equity Setup",
          "content": "Before diving into our analysis, it's helpful to use human settlement patterns to organize your approach. Planning ahead can significantly improve both the quality of your work and the speed at which you complete it. By taking the time to think through your strategy, you set yourself up for success!\nContext recap: Before diving into our analysis, it's helpful to use human settlement patterns to organize your approach. Planning ahead can significantly improve both the quality of your work and the speed at which you complete it. By taking the time to think through your strategy, you set yourself up for success!"
        },
        {
          "id": "geography-201-l07-c2",
          "title": "Decision Rules",
          "content": "When you have to make a choice between different options, it’s really important to follow a straightforward decision-making rule. Always choose the option that has the strongest evidence backing it up and the clearest connection to what you want to achieve. By doing this, you will be able to make smart decisions that are based on facts and logical reasoning, which can lead to better outcomes in your projects and goals.\nContext recap: When you have to make a choice between different options, it’s really important to follow a straightforward decision-making rule. Always choose the option that has the strongest evidence backing it up and the clearest connection to what you want to achieve. By doing this, you will be able to make smart decisions that are based on facts and logical reasoning, which can lead to better outcomes in your projects and goals."
        },
        {
          "id": "geography-201-l07-c3",
          "title": "Quality Control",
          "content": "As you review your work, check for three important things: accuracy, completeness, and alignment with your original objective. Ensuring that your analysis meets these criteria will help you maintain high standards in your work and improve your overall understanding of the topic.\nContext recap: As you review your work, check for three important things: accuracy, completeness, and alignment with your original objective. Ensuring that your analysis meets these criteria will help you maintain high standards in your work and improve your overall understanding of the topic."
        },
        {
          "id": "geography-201-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your practice, take a moment to write down one action you would like to repeat in your next round and one action you want to improve. This reflection will help you set goals for your future practice and continue to develop your skills in resource distribution and equity.\nContext recap: After completing your practice, take a moment to write down one action you would like to repeat in your next round and one action you want to improve. This reflection will help you set goals for your future practice and continue to develop your skills in resource distribution and equity."
        }
      ],
      "flashcards": [
        {
          "id": "geography-201-l07-f1",
          "front": "human settlement patterns",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "geography-201-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "geography-201-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "geography-201-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "geography-201-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on human settlement patterns."
        }
      ]
    },
    {
      "id": "geography-201-l08",
      "title": "Field Study Simulation",
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
          "id": "geography-201-l08-ia1",
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
          "id": "geography-201-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "geography-201-l09",
      "title": "Review: Geographic Data Reasoning",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "geography-201-l09-q1",
          "text": "Which statement best explains spatial data in Geography?",
          "skillId": "geography-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains spatial data using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how spatial data works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Geography."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-201-l09-q2",
          "text": "What is the best first step when analyzing human settlement patterns?",
          "skillId": "geography-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for human settlement patterns."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to human settlement patterns."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-201-l09-q3",
          "text": "Which option shows strong reasoning about geospatial analysis?",
          "skillId": "geography-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to geospatial analysis."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-201-l09-q4",
          "text": "Why is spaced review useful for Geography mastery?",
          "skillId": "geography-201-skill-review",
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
          "id": "geography-201-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Geographic Data Reasoning",
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
                "label": "Confusion about spatial data"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to human settlement patterns"
              },
              {
                "id": "l3",
                "label": "Weak transfer of geospatial analysis under timing"
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
          "id": "geography-201-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "geography-201-l10",
      "title": "Mastery: Geography II",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "geography-201-l10-q1",
          "text": "Which statement best explains map interpretation in Geography?",
          "skillId": "geography-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains map interpretation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how map interpretation works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Geography."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-201-l10-q2",
          "text": "What is the best first step when analyzing environmental change?",
          "skillId": "geography-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for environmental change."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to environmental change."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-201-l10-q3",
          "text": "Which option shows strong reasoning about geospatial analysis?",
          "skillId": "geography-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to geospatial analysis."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-201-l10-q4",
          "text": "Why is spaced review useful for Geography mastery?",
          "skillId": "geography-201-skill-review",
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
          "id": "geography-201-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Geography II",
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
                "label": "Confusion about map interpretation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to environmental change"
              },
              {
                "id": "l3",
                "label": "Weak transfer of geospatial analysis under timing"
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
          "id": "geography-201-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "geography-201-l11",
      "title": "Applied Geography Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using environmental change.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "geography-201-l11-ia1",
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
                "label": "Tag repeated mistakes in spatial data",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on human settlement patterns",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "geography-201-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "geography-201-l12",
      "title": "Geography II Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "geography-201-l12-q1",
          "text": "Which statement best explains map interpretation in Geography?",
          "skillId": "geography-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains map interpretation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how map interpretation works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Geography."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-201-l12-q2",
          "text": "What is the best first step when analyzing human settlement patterns?",
          "skillId": "geography-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for human settlement patterns."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to human settlement patterns."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-201-l12-q3",
          "text": "Which option shows strong reasoning about geospatial analysis?",
          "skillId": "geography-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to geospatial analysis."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-201-l12-q4",
          "text": "Why is spaced review useful for Geography mastery?",
          "skillId": "geography-201-skill-review",
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
          "id": "geography-201-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Geography II Mastery Applied Retest",
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
                "label": "Confusion about map interpretation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to human settlement patterns"
              },
              {
                "id": "l3",
                "label": "Weak transfer of geospatial analysis under timing"
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
          "id": "geography-201-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "geography-201-l13",
      "title": "Geography Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "geography-201-l13-c1",
          "title": "Scenario Brief",
          "content": "In this engaging scenario, you will explore how to read and interpret maps while considering the effects of environmental changes and how people settle in different areas. This challenge will help you understand the connections between geography and human activities, making it a fun and practical learning experience.\nContext recap: In this engaging scenario, you will explore how to read and interpret maps while considering the effects of environmental changes and how people settle in different areas. This challenge will help you understand the connections between geography and human activities, making it a fun and practical learning experience."
        },
        {
          "id": "geography-201-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. For each decision point, think about a specific strategy that you can use. This organized approach will help you make thoughtful choices and understand the reasoning behind each step you take.\nContext recap: To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. For each decision point, think about a specific strategy that you can use. This organized approach will help you make thoughtful choices and understand the reasoning behind each step you take."
        },
        {
          "id": "geography-201-l13-c3",
          "title": "Execute and Justify",
          "content": "Once you have your plan ready, it's time to put it into action! As you execute your strategies, be sure to explain each decision you make. Use evidence and facts to support your choices, rather than just guessing. This will help you build strong arguments for your actions and understand the importance of reasoning in geography.\nContext recap: Once you have your plan ready, it's time to put it into action! As you execute your strategies, be sure to explain each decision you make. Use evidence and facts to support your choices, rather than just guessing. This will help you build strong arguments for your actions and understand the importance of reasoning in geography."
        },
        {
          "id": "geography-201-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After completing your scenario, take a moment to evaluate the outcome. Compare what you achieved with the goals you set at the beginning. Identify which aspects of your plan worked well and which ones might need some adjustments. This reflective process will enhance your learning and help you improve your future strategies.\nContext recap: After completing your scenario, take a moment to evaluate the outcome. Compare what you achieved with the goals you set at the beginning. Identify which aspects of your plan worked well and which ones might need some adjustments. This reflective process will enhance your learning and help you improve your future strategies."
        }
      ],
      "flashcards": [
        {
          "id": "geography-201-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "geography-201-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "geography-201-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "geography-201-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "geography-201-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting map interpretation, environmental change, and human settlement patterns."
        },
        {
          "id": "geography-201-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "geography-201-l14",
      "title": "Geography Coaching Clinic",
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
          "id": "geography-201-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on map interpretation setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed human settlement patterns decisions"
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
          "id": "geography-201-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "geography-201-l15",
      "title": "Geography II Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "geography-201-l15-q1",
          "text": "Which statement best explains spatial data in Geography?",
          "skillId": "geography-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains spatial data using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how spatial data works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Geography."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-201-l15-q2",
          "text": "What is the best first step when analyzing environmental change?",
          "skillId": "geography-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for environmental change."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to environmental change."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-201-l15-q3",
          "text": "Which option shows strong reasoning about geospatial analysis?",
          "skillId": "geography-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to geospatial analysis."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-201-l15-q4",
          "text": "Why is spaced review useful for Geography mastery?",
          "skillId": "geography-201-skill-review",
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
          "id": "geography-201-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Geography II Mastery Mastery Sprint",
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
                "label": "Confusion about spatial data"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to environmental change"
              },
              {
                "id": "l3",
                "label": "Weak transfer of geospatial analysis under timing"
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
          "id": "geography-201-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
