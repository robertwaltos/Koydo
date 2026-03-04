import type { LearningModule } from "@/lib/modules/types";

export const Biology401Module: LearningModule = {
  "id": "biology-401",
  "title": "Biology Capstone Inquiry",
  "description": "Integrate biological models, datasets, and explanations across multiple system scales.",
  "subject": "Biology",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Biology",
    "Apply Biological Argument Quality strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "biology-401-l01",
      "title": "System Integration in Biology",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "biology-401-l01-c1",
          "title": "System Integration in Biology Overview",
          "content": "In this lesson, we will dive into the fascinating world of systems integration in biology! We will discover how different biological systems, like cells, organs, and ecosystems, work together to create a balanced and functioning environment. Our main goal is to learn how to identify strong reasoning skills, which are essential for solving complex problems in biology. By understanding how various components interact with one another, we can gain a deeper appreciation for the intricate web of life that surrounds us. This knowledge will not only help us in our studies but also in understanding the importance of each part in maintaining the health of our planet."
        },
        {
          "id": "biology-401-l01-c2",
          "title": "Core Concept",
          "content": "The core concept we will discuss is how systems integration and data interpretation are closely connected. To start, we will identify the main target or question we want to answer. Next, we will look for evidence or steps that support our target. This process will help us understand how to gather and interpret data effectively, which is essential for making informed decisions in biology.\nContext recap: The core concept we will discuss is how systems integration and data interpretation are closely connected. To start, we will identify the main target or question we want to answer. Next, we will look for evidence or steps that support our target. This process will help us understand how to gather and interpret data effectively, which is essential for making informed decisions in biology."
        },
        {
          "id": "biology-401-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! First, we will define our goal clearly. Then, we will apply a strategy for interpreting the data we have collected. Finally, we will verify our results with a quick check to ensure that our conclusions are accurate. This step-by-step approach will help you feel more confident in tackling similar problems on your own.\nContext recap: Let's walk through a guided example together! First, we will define our goal clearly. Then, we will apply a strategy for interpreting the data we have collected. Finally, we will verify our results with a quick check to ensure that our conclusions are accurate.\nWhy this matters: Worked Example helps learners in Biology connect ideas from Biology Capstone Inquiry to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "biology-401-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn! Apply the same process we discussed to a new scenario. As you work through it, make sure to explain why your approach is valid in one clear sentence. This will help you practice your reasoning skills and reinforce your understanding of how to integrate systems and interpret data effectively.\nContext recap: Now it's your turn! Apply the same process we discussed to a new scenario. As you work through it, make sure to explain why your approach is valid in one clear sentence. This will help you practice your reasoning skills and reinforce your understanding of how to integrate systems and interpret data effectively."
        }
      ],
      "flashcards": [
        {
          "id": "biology-401-l01-f1",
          "front": "systems integration",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "biology-401-l01-f2",
          "front": "data interpretation",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "biology-401-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "biology-401-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "biology-401-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about systems integration and data interpretation."
        },
        {
          "id": "biology-401-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Biology vocabulary."
        }
      ]
    },
    {
      "id": "biology-401-l02",
      "title": "Complex Dataset Interpretation",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about systems integration from this lesson.",
          "Explain where data interpretation appears in real life.",
          "Describe one question you still have about capstone biological inquiry."
        ]
      },
      "interactiveActivities": [
        {
          "id": "biology-401-l02-ia1",
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
                "label": "Set a goal for systems integration",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for data interpretation",
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
          "id": "biology-401-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on data interpretation and write one reflection."
        }
      ]
    },
    {
      "id": "biology-401-l03",
      "title": "Checkpoint: Capstone Biology Setup",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "biology-401-l03-q1",
          "text": "Which statement best explains systems integration in Biology?",
          "skillId": "biology-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains systems integration using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how systems integration works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Biology."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-401-l03-q2",
          "text": "What is the best first step when analyzing data interpretation?",
          "skillId": "biology-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for data interpretation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to data interpretation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-401-l03-q3",
          "text": "Which option shows strong reasoning about capstone biological inquiry?",
          "skillId": "biology-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone biological inquiry."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-401-l03-q4",
          "text": "Why is spaced review useful for Biology mastery?",
          "skillId": "biology-401-skill-review",
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
          "id": "biology-401-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Capstone Biology Setup",
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
                "label": "Confusion about systems integration"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to data interpretation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone biological inquiry under timing"
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
          "id": "biology-401-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "biology-401-l04",
      "title": "Model Revision from Biological Evidence",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "biology-401-l04-c1",
          "title": "Model Revision from Biological Evidence Focus",
          "content": "In this lesson, we will deepen our understanding of model revision using structured reasoning. We will move from simply understanding concepts to making applied decisions based on biological evidence. This process is crucial for developing accurate models that reflect the complexities of biological systems.\nContext recap: In this lesson, we will deepen our understanding of model revision using structured reasoning. We will move from simply understanding concepts to making applied decisions based on biological evidence. This process is crucial for developing accurate models that reflect the complexities of biological systems."
        },
        {
          "id": "biology-401-l04-c2",
          "title": "Method Steps",
          "content": "Let's break down the method steps for model revision into three clear parts. Step 1: Identify what is being asked in the question or problem. Step 2: Choose a strategy that aligns with the process of model revision. Step 3: Justify your choices with solid evidence. Following these steps will help you create more accurate and reliable biological models.\nContext recap: Let's break down the method steps for model revision into three clear parts. Step 1: Identify what is being asked in the question or problem. Step 2: Choose a strategy that aligns with the process of model revision. Step 3: Justify your choices with solid evidence."
        },
        {
          "id": "biology-401-l04-c3",
          "title": "Common Mistakes",
          "content": "It's important to be aware of common mistakes that can occur during model revision. Some frequent errors include skipping the initial setup, using assumptions that are not related to the problem, or failing to verify the final result. By recognizing these pitfalls, you can improve your approach and ensure that your conclusions are based on sound reasoning.\nContext recap: It's important to be aware of common mistakes that can occur during model revision. Some frequent errors include skipping the initial setup, using assumptions that are not related to the problem, or failing to verify the final result. By recognizing these pitfalls, you can improve your approach and ensure that your conclusions are based on sound reasoning."
        },
        {
          "id": "biology-401-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar problem on your own! After you complete it, compare your process to the lesson sequence we discussed. This reflection will help you identify areas where you did well and where you can improve in your approach to model revision.\nContext recap: Now, it's time for you to try solving a similar problem on your own! After you complete it, compare your process to the lesson sequence we discussed. This reflection will help you identify areas where you did well and where you can improve in your approach to model revision."
        }
      ],
      "flashcards": [
        {
          "id": "biology-401-l04-f1",
          "front": "model revision",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "biology-401-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "biology-401-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "biology-401-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "biology-401-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for model revision scenarios."
        }
      ]
    },
    {
      "id": "biology-401-l05",
      "title": "Scale Transitions in Explanation",
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
          "id": "biology-401-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "model revision Concept"
              },
              {
                "id": "process",
                "label": "evidence communication Process"
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
          "id": "biology-401-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a model revision challenge."
        }
      ]
    },
    {
      "id": "biology-401-l06",
      "title": "Checkpoint: Biological Argument Quality",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "biology-401-l06-q1",
          "text": "Which statement best explains model revision in Biology?",
          "skillId": "biology-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains model revision using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how model revision works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Biology."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-401-l06-q2",
          "text": "What is the best first step when analyzing evidence communication?",
          "skillId": "biology-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for evidence communication."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to evidence communication."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-401-l06-q3",
          "text": "Which option shows strong reasoning about capstone biological inquiry?",
          "skillId": "biology-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone biological inquiry."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-401-l06-q4",
          "text": "Why is spaced review useful for Biology mastery?",
          "skillId": "biology-401-skill-review",
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
          "id": "biology-401-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Biological Argument Quality",
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
                "label": "Confusion about model revision"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to evidence communication"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone biological inquiry under timing"
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
          "id": "biology-401-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "biology-401-l07",
      "title": "Communicating High-Quality Biology Claims",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "biology-401-l07-c1",
          "title": "Communicating High-Quality Biology Claims Setup",
          "content": "Before you start communicating your biology claims, it's essential to organize your approach using evidence. Planning ahead can significantly improve both the quality of your work and the speed at which you complete it. By taking the time to prepare, you set yourself up for success in conveying your ideas clearly.\nContext recap: Before you start communicating your biology claims, it's essential to organize your approach using evidence. Planning ahead can significantly improve both the quality of your work and the speed at which you complete it. By taking the time to prepare, you set yourself up for success in conveying your ideas clearly."
        },
        {
          "id": "biology-401-l07-c2",
          "title": "Decision Rules",
          "content": "When you have to choose between different options, it can be really helpful to follow a simple decision rule. Always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. This approach not only helps you make better choices but also ensures that your biology claims are based on solid information. By using this strategy, you can feel more confident in your decisions and improve the quality of your work in biology.\nContext recap: When you have to choose between different options, it can be really helpful to follow a simple decision rule. Always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. This approach not only helps you make better choices but also ensures that your biology claims are based on solid information. By using this strategy, you can feel more confident in your decisions and improve the quality of your work in biology."
        },
        {
          "id": "biology-401-l07-c3",
          "title": "Quality Control",
          "content": "To ensure the quality of your biology claims, check for three important factors: accuracy, completeness, and alignment with your original objective. By focusing on these aspects, you can enhance the reliability of your work and make sure that your claims are well-supported.\nContext recap: To ensure the quality of your biology claims, check for three important factors: accuracy, completeness, and alignment with your original objective. By focusing on these aspects, you can enhance the reliability of your work and make sure that your claims are well-supported."
        },
        {
          "id": "biology-401-l07-c4",
          "title": "Next-Step Plan",
          "content": "As you prepare for your next practice round, write down one action that you want to repeat because it worked well, and one action that you would like to improve. This reflection will help you grow and develop your skills in communicating high-quality biology claims.\nContext recap: As you prepare for your next practice round, write down one action that you want to repeat because it worked well, and one action that you would like to improve. This reflection will help you grow and develop your skills in communicating high-quality biology claims."
        }
      ],
      "flashcards": [
        {
          "id": "biology-401-l07-f1",
          "front": "evidence communication",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "biology-401-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "biology-401-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "biology-401-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "biology-401-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on evidence communication."
        }
      ]
    },
    {
      "id": "biology-401-l08",
      "title": "Biology Capstone Investigation Lab",
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
          "id": "biology-401-l08-ia1",
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
          "id": "biology-401-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "biology-401-l09",
      "title": "Review: Advanced Biology Inquiry",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "biology-401-l09-q1",
          "text": "Which statement best explains data interpretation in Biology?",
          "skillId": "biology-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains data interpretation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how data interpretation works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Biology."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-401-l09-q2",
          "text": "What is the best first step when analyzing evidence communication?",
          "skillId": "biology-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for evidence communication."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to evidence communication."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-401-l09-q3",
          "text": "Which option shows strong reasoning about capstone biological inquiry?",
          "skillId": "biology-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone biological inquiry."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-401-l09-q4",
          "text": "Why is spaced review useful for Biology mastery?",
          "skillId": "biology-401-skill-review",
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
          "id": "biology-401-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Advanced Biology Inquiry",
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
                "label": "Confusion about data interpretation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to evidence communication"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone biological inquiry under timing"
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
          "id": "biology-401-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "biology-401-l10",
      "title": "Mastery: Biology IV",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "biology-401-l10-q1",
          "text": "Which statement best explains systems integration in Biology?",
          "skillId": "biology-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains systems integration using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how systems integration works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Biology."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-401-l10-q2",
          "text": "What is the best first step when analyzing model revision?",
          "skillId": "biology-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for model revision."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to model revision."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-401-l10-q3",
          "text": "Which option shows strong reasoning about capstone biological inquiry?",
          "skillId": "biology-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone biological inquiry."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-401-l10-q4",
          "text": "Why is spaced review useful for Biology mastery?",
          "skillId": "biology-401-skill-review",
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
          "id": "biology-401-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Biology IV",
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
                "label": "Confusion about systems integration"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to model revision"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone biological inquiry under timing"
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
          "id": "biology-401-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "biology-401-l11",
      "title": "Applied Biology Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using model revision.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "biology-401-l11-ia1",
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
                "label": "Tag repeated mistakes in data interpretation",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on evidence communication",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "biology-401-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "biology-401-l12",
      "title": "Biology IV Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "biology-401-l12-q1",
          "text": "Which statement best explains systems integration in Biology?",
          "skillId": "biology-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains systems integration using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how systems integration works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Biology."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-401-l12-q2",
          "text": "What is the best first step when analyzing evidence communication?",
          "skillId": "biology-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for evidence communication."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to evidence communication."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-401-l12-q3",
          "text": "Which option shows strong reasoning about capstone biological inquiry?",
          "skillId": "biology-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone biological inquiry."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-401-l12-q4",
          "text": "Why is spaced review useful for Biology mastery?",
          "skillId": "biology-401-skill-review",
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
          "id": "biology-401-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Biology IV Mastery Applied Retest",
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
                "label": "Confusion about systems integration"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to evidence communication"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone biological inquiry under timing"
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
          "id": "biology-401-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "biology-401-l13",
      "title": "Biology Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "biology-401-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, you will explore how different biological systems work together. You will also learn how to revise models based on new information and communicate your findings effectively. This challenge will help you understand the importance of integrating various concepts in biology.\nContext recap: In this exciting scenario, you will explore how different biological systems work together. You will also learn how to revise models based on new information and communicate your findings effectively. This challenge will help you understand the importance of integrating various concepts in biology."
        },
        {
          "id": "biology-401-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. For each decision point, think about one specific strategy you can use. This will help you organize your thoughts and make the problem easier to solve step by step.\nContext recap: To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. For each decision point, think about one specific strategy you can use. This will help you organize your thoughts and make the problem easier to solve step by step."
        },
        {
          "id": "biology-401-l13-c3",
          "title": "Execute and Justify",
          "content": "Once you have your plan ready, it's time to put it into action! As you execute each step, make sure to explain your reasoning clearly. Use evidence from your research and observations to support your choices, rather than making guesses. This will strengthen your conclusions.\nContext recap: Once you have your plan ready, it's time to put it into action! As you execute each step, make sure to explain your reasoning clearly. Use evidence from your research and observations to support your choices, rather than making guesses. This will strengthen your conclusions."
        },
        {
          "id": "biology-401-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After you have completed your scenario, take a moment to evaluate the outcome. Compare your results to the goals you set at the beginning. Identify what worked well and what might need some adjustments. This reflection will help you improve your approach in future challenges.\nContext recap: After you have completed your scenario, take a moment to evaluate the outcome. Compare your results to the goals you set at the beginning. Identify what worked well and what might need some adjustments. This reflection will help you improve your approach in future challenges."
        }
      ],
      "flashcards": [
        {
          "id": "biology-401-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "biology-401-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "biology-401-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "biology-401-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "biology-401-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting systems integration, model revision, and evidence communication."
        },
        {
          "id": "biology-401-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "biology-401-l14",
      "title": "Biology Coaching Clinic",
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
          "id": "biology-401-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on systems integration setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed evidence communication decisions"
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
          "id": "biology-401-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "biology-401-l15",
      "title": "Biology IV Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "biology-401-l15-q1",
          "text": "Which statement best explains data interpretation in Biology?",
          "skillId": "biology-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains data interpretation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how data interpretation works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Biology."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-401-l15-q2",
          "text": "What is the best first step when analyzing model revision?",
          "skillId": "biology-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for model revision."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to model revision."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-401-l15-q3",
          "text": "Which option shows strong reasoning about capstone biological inquiry?",
          "skillId": "biology-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone biological inquiry."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-401-l15-q4",
          "text": "Why is spaced review useful for Biology mastery?",
          "skillId": "biology-401-skill-review",
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
          "id": "biology-401-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Biology IV Mastery Mastery Sprint",
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
                "label": "Confusion about data interpretation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to model revision"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone biological inquiry under timing"
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
          "id": "biology-401-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
