import type { LearningModule } from "@/lib/modules/types";

export const Geography401Module: LearningModule = {
  "id": "geography-401",
  "title": "Geography Capstone Resilience",
  "description": "Integrate climate, resource, and spatial data to design resilient place-based solutions.",
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
    "Apply Place-Based Evaluation strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "geography-401-l01",
      "title": "Multi-Layer Spatial Analysis",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "geography-401-l01-c1",
          "title": "Multi-Layer Spatial Analysis Overview",
          "content": "In this lesson, we will dive into the fascinating world of multi-layer spatial analysis! This concept is super important when we think about how to make our communities stronger and more resilient. Resilience means being able to bounce back from challenges, and planning for it is essential for a bright future. Our main goal today is to learn how to identify strong reasoning skills. These skills will help us solve problems more effectively. By understanding how different layers of information, like maps and data, work together, we can make smarter choices that benefit everyone in our community. Let's get ready to explore and think critically about the world around us!"
        },
        {
          "id": "geography-401-l01-c2",
          "title": "Core Concept",
          "content": "Multi-layer spatial analysis is an important method that helps us understand how to adapt to climate changes effectively. First, we need to clearly define the main goal we want to achieve, such as reducing the impact of flooding or improving air quality. After we have our goal in mind, we will gather evidence and identify specific steps that can help us reach that goal. This process is essential because it allows us to make smart decisions based on reliable information, ensuring that we are prepared for changes in our environment and can protect our communities better."
        },
        {
          "id": "geography-401-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! First, we will define a clear goal related to climate adaptation. Then, we will apply a specific strategy to address that goal. Finally, we will verify our results with a quick check to ensure our approach is effective. This step-by-step process will help you understand how to apply what you've learned in real-life situations.\nContext recap: Let's walk through a guided example together! First, we will define a clear goal related to climate adaptation. Then, we will apply a specific strategy to address that goal. Finally, we will verify our results with a quick check to ensure our approach is effective.\nWhy this matters: Worked Example helps learners in Geography connect ideas from Geography Capstone Resilience to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "geography-401-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to shine! Take the same steps we talked about and use them on a new situation. Once you've worked through it, write one clear sentence explaining why your approach makes sense. This activity will not only help you practice what you've learned but also show how you can use your skills in different scenarios. Remember, adapting your knowledge is a key part of being a great problem solver!\nContext recap: Now it's your turn to shine! Take the same steps we talked about and use them on a new situation. Once you've worked through it, write one clear sentence explaining why your approach makes sense. This activity will not only help you practice what you've learned but also show how you can use your skills in different scenarios."
        }
      ],
      "flashcards": [
        {
          "id": "geography-401-l01-f1",
          "front": "multi-layer spatial analysis",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "geography-401-l01-f2",
          "front": "climate adaptation",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "geography-401-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "geography-401-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "geography-401-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about multi-layer spatial analysis and climate adaptation."
        },
        {
          "id": "geography-401-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Geography vocabulary."
        }
      ]
    },
    {
      "id": "geography-401-l02",
      "title": "Climate Adaptation Frameworks",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about multi-layer spatial analysis from this lesson.",
          "Explain where climate adaptation appears in real life.",
          "Describe one question you still have about capstone spatial resilience planning."
        ]
      },
      "interactiveActivities": [
        {
          "id": "geography-401-l02-ia1",
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
                "label": "Set a goal for multi-layer spatial analysis",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for climate adaptation",
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
          "id": "geography-401-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on climate adaptation and write one reflection."
        }
      ]
    },
    {
      "id": "geography-401-l03",
      "title": "Checkpoint: Resilience Plan Design",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "geography-401-l03-q1",
          "text": "Which statement best explains multi-layer spatial analysis in Geography?",
          "skillId": "geography-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains multi-layer spatial analysis using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how multi-layer spatial analysis works in practice."
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
          "id": "geography-401-l03-q2",
          "text": "What is the best first step when analyzing climate adaptation?",
          "skillId": "geography-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for climate adaptation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to climate adaptation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-401-l03-q3",
          "text": "Which option shows strong reasoning about capstone spatial resilience planning?",
          "skillId": "geography-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone spatial resilience planning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-401-l03-q4",
          "text": "Why is spaced review useful for Geography mastery?",
          "skillId": "geography-401-skill-review",
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
          "id": "geography-401-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Resilience Plan Design",
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
                "label": "Confusion about multi-layer spatial analysis"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to climate adaptation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone spatial resilience planning under timing"
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
          "id": "geography-401-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "geography-401-l04",
      "title": "Resource Systems Tradeoff Modeling",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "geography-401-l04-c1",
          "title": "Resource Systems Tradeoff Modeling Focus",
          "content": "In this lesson, we will deepen our understanding of resource systems planning by using structured reasoning. We will move from simply understanding concepts to making applied decisions that can have a real impact. This transition is crucial for developing practical skills that will help us in future planning efforts.\nContext recap: In this lesson, we will deepen our understanding of resource systems planning by using structured reasoning. We will move from simply understanding concepts to making applied decisions that can have a real impact. This transition is crucial for developing practical skills that will help us in future planning efforts."
        },
        {
          "id": "geography-401-l04-c2",
          "title": "Method Steps",
          "content": "Let's explore the method for tackling resource systems tradeoff modeling in a fun and organized way! Step 1: First, take a moment to identify what the problem is asking you. This means understanding the question clearly. Step 2: Next, think about which strategy would best fit the planning of resource systems. This could involve considering different options and how they relate to each other. Step 3: Finally, it's important to justify your choice. This means providing solid evidence or reasons that support your decision. By following these steps, you'll be able to approach problems in a systematic and effective manner, making your learning experience even more rewarding!"
        },
        {
          "id": "geography-401-l04-c3",
          "title": "Common Mistakes",
          "content": "As we learn, it's important to be aware of common mistakes that can occur. Some frequent errors include skipping the initial setup, using assumptions that are not related to the problem, or failing to verify the final result. By recognizing these pitfalls, you can improve your problem-solving skills and avoid making the same mistakes.\nContext recap: As we learn, it's important to be aware of common mistakes that can occur. Some frequent errors include skipping the initial setup, using assumptions that are not related to the problem, or failing to verify the final result. By recognizing these pitfalls, you can improve your problem-solving skills and avoid making the same mistakes."
        },
        {
          "id": "geography-401-l04-c4",
          "title": "Independent Try",
          "content": "Now, I challenge you to solve a similar problem on your own! After you complete it, take a moment to compare your process with the lesson sequence we discussed. This reflection will help you understand your learning journey and identify areas for improvement.\nContext recap: Now, I challenge you to solve a similar problem on your own! After you complete it, take a moment to compare your process with the lesson sequence we discussed. This reflection will help you understand your learning journey and identify areas for improvement."
        }
      ],
      "flashcards": [
        {
          "id": "geography-401-l04-f1",
          "front": "resource systems planning",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "geography-401-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "geography-401-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "geography-401-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "geography-401-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for resource systems planning scenarios."
        }
      ]
    },
    {
      "id": "geography-401-l05",
      "title": "Risk Exposure and Mitigation",
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
          "id": "geography-401-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "resource systems planning Concept"
              },
              {
                "id": "process",
                "label": "resilience evaluation Process"
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
          "id": "geography-401-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a resource systems planning challenge."
        }
      ]
    },
    {
      "id": "geography-401-l06",
      "title": "Checkpoint: Place-Based Evaluation",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "geography-401-l06-q1",
          "text": "Which statement best explains resource systems planning in Geography?",
          "skillId": "geography-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains resource systems planning using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how resource systems planning works in practice."
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
          "id": "geography-401-l06-q2",
          "text": "What is the best first step when analyzing resilience evaluation?",
          "skillId": "geography-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for resilience evaluation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to resilience evaluation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-401-l06-q3",
          "text": "Which option shows strong reasoning about capstone spatial resilience planning?",
          "skillId": "geography-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone spatial resilience planning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-401-l06-q4",
          "text": "Why is spaced review useful for Geography mastery?",
          "skillId": "geography-401-skill-review",
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
          "id": "geography-401-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Place-Based Evaluation",
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
                "label": "Confusion about resource systems planning"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to resilience evaluation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone spatial resilience planning under timing"
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
          "id": "geography-401-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "geography-401-l07",
      "title": "Policy Levers and Implementation",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "geography-401-l07-c1",
          "title": "Policy Levers and Implementation Setup",
          "content": "Before diving into your project, it's essential to use resilience evaluation to organize your approach. Planning ahead not only enhances the quality of your work but also speeds up the process. By taking the time to plan, you set yourself up for success in your implementation efforts.\nContext recap: Before diving into your project, it's essential to use resilience evaluation to organize your approach. Planning ahead not only enhances the quality of your work but also speeds up the process. By taking the time to plan, you set yourself up for success in your implementation efforts."
        },
        {
          "id": "geography-401-l07-c2",
          "title": "Decision Rules",
          "content": "When you have to make a choice between different options, it can sometimes be confusing. To help you decide, you can use a simple rule: always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. This way, you can make smart decisions that help you reach your goals more effectively. Remember, making informed choices is an important skill that will benefit you in many areas of life!\nContext recap: When you have to make a choice between different options, it can sometimes be confusing. To help you decide, you can use a simple rule: always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. This way, you can make smart decisions that help you reach your goals more effectively. Remember, making informed choices is an important skill that will benefit you in many areas of life!"
        },
        {
          "id": "geography-401-l07-c3",
          "title": "Quality Control",
          "content": "To ensure the quality of your work, check for three important things: accuracy, completeness, and alignment with your original objective. By focusing on these aspects, you can enhance the reliability of your results and ensure that your work meets the intended goals.\nContext recap: To ensure the quality of your work, check for three important things: accuracy, completeness, and alignment with your original objective. By focusing on these aspects, you can enhance the reliability of your results and ensure that your work meets the intended goals."
        },
        {
          "id": "geography-401-l07-c4",
          "title": "Next-Step Plan",
          "content": "As you wrap up your practice, take a moment to write down one action you want to repeat in your next round and one action you would like to improve. This reflection will help you grow and develop your skills as you continue to practice and learn.\nContext recap: As you wrap up your practice, take a moment to write down one action you want to repeat in your next round and one action you would like to improve. This reflection will help you grow and develop your skills as you continue to practice and learn."
        }
      ],
      "flashcards": [
        {
          "id": "geography-401-l07-f1",
          "front": "resilience evaluation",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "geography-401-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "geography-401-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "geography-401-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "geography-401-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on resilience evaluation."
        }
      ]
    },
    {
      "id": "geography-401-l08",
      "title": "Resilience Portfolio Workshop",
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
          "id": "geography-401-l08-ia1",
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
          "id": "geography-401-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "geography-401-l09",
      "title": "Review: Geography for Resilient Futures",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "geography-401-l09-q1",
          "text": "Which statement best explains climate adaptation in Geography?",
          "skillId": "geography-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains climate adaptation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how climate adaptation works in practice."
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
          "id": "geography-401-l09-q2",
          "text": "What is the best first step when analyzing resilience evaluation?",
          "skillId": "geography-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for resilience evaluation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to resilience evaluation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-401-l09-q3",
          "text": "Which option shows strong reasoning about capstone spatial resilience planning?",
          "skillId": "geography-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone spatial resilience planning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-401-l09-q4",
          "text": "Why is spaced review useful for Geography mastery?",
          "skillId": "geography-401-skill-review",
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
          "id": "geography-401-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Geography for Resilient Futures",
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
                "label": "Confusion about climate adaptation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to resilience evaluation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone spatial resilience planning under timing"
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
          "id": "geography-401-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "geography-401-l10",
      "title": "Mastery: Geography IV",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "geography-401-l10-q1",
          "text": "Which statement best explains multi-layer spatial analysis in Geography?",
          "skillId": "geography-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains multi-layer spatial analysis using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how multi-layer spatial analysis works in practice."
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
          "id": "geography-401-l10-q2",
          "text": "What is the best first step when analyzing resource systems planning?",
          "skillId": "geography-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for resource systems planning."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to resource systems planning."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-401-l10-q3",
          "text": "Which option shows strong reasoning about capstone spatial resilience planning?",
          "skillId": "geography-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone spatial resilience planning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-401-l10-q4",
          "text": "Why is spaced review useful for Geography mastery?",
          "skillId": "geography-401-skill-review",
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
          "id": "geography-401-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Geography IV",
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
                "label": "Confusion about multi-layer spatial analysis"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to resource systems planning"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone spatial resilience planning under timing"
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
          "id": "geography-401-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "geography-401-l11",
      "title": "Applied Geography Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using resource systems planning.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "geography-401-l11-ia1",
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
                "label": "Tag repeated mistakes in climate adaptation",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on resilience evaluation",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "geography-401-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "geography-401-l12",
      "title": "Geography IV Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "geography-401-l12-q1",
          "text": "Which statement best explains multi-layer spatial analysis in Geography?",
          "skillId": "geography-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains multi-layer spatial analysis using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how multi-layer spatial analysis works in practice."
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
          "id": "geography-401-l12-q2",
          "text": "What is the best first step when analyzing resilience evaluation?",
          "skillId": "geography-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for resilience evaluation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to resilience evaluation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-401-l12-q3",
          "text": "Which option shows strong reasoning about capstone spatial resilience planning?",
          "skillId": "geography-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone spatial resilience planning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-401-l12-q4",
          "text": "Why is spaced review useful for Geography mastery?",
          "skillId": "geography-401-skill-review",
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
          "id": "geography-401-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Geography IV Mastery Applied Retest",
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
                "label": "Confusion about multi-layer spatial analysis"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to resilience evaluation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone spatial resilience planning under timing"
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
          "id": "geography-401-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "geography-401-l13",
      "title": "Geography Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "geography-401-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, we will explore how to analyze different layers of information about our environment. We will also look at how to plan for using resources wisely and evaluate how resilient our strategies are in facing challenges. This hands-on challenge will help us understand the interconnectedness of geography and resilience in a fun and engaging way.\nContext recap: In this exciting scenario, we will explore how to analyze different layers of information about our environment. We will also look at how to plan for using resources wisely and evaluate how resilient our strategies are in facing challenges. This hands-on challenge will help us understand the interconnectedness of geography and resilience in a fun and engaging way."
        },
        {
          "id": "geography-401-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, it's important to break it down into smaller, manageable decisions. Think of each decision point as a stepping stone. For each of these points, we will assign a specific strategy that will guide our actions. This approach will help us stay organized and focused as we work through the challenge together.\nContext recap: To tackle this scenario effectively, it's important to break it down into smaller, manageable decisions. Think of each decision point as a stepping stone. For each of these points, we will assign a specific strategy that will guide our actions. This approach will help us stay organized and focused as we work through the challenge together."
        },
        {
          "id": "geography-401-l13-c3",
          "title": "Execute and Justify",
          "content": "Once we have our plan in place, it's time to put it into action! As we execute our strategies, we will explain each step we take. It's important to support our decisions with solid evidence rather than just making guesses. This will help us understand the reasoning behind our actions and improve our critical thinking skills.\nContext recap: Once we have our plan in place, it's time to put it into action! As we execute our strategies, we will explain each step we take. It's important to support our decisions with solid evidence rather than just making guesses. This will help us understand the reasoning behind our actions and improve our critical thinking skills."
        },
        {
          "id": "geography-401-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After we have completed our scenario, we will take a moment to evaluate the results of our efforts. We will compare what we achieved with our original goals. This is a great opportunity to identify what worked well and what might need some adjustments. Reflecting on our outcomes will help us learn and grow for future challenges.\nContext recap: After we have completed our scenario, we will take a moment to evaluate the results of our efforts. We will compare what we achieved with our original goals. This is a great opportunity to identify what worked well and what might need some adjustments. Reflecting on our outcomes will help us learn and grow for future challenges."
        }
      ],
      "flashcards": [
        {
          "id": "geography-401-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "geography-401-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "geography-401-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "geography-401-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "geography-401-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting multi-layer spatial analysis, resource systems planning, and resilience evaluation."
        },
        {
          "id": "geography-401-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "geography-401-l14",
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
          "id": "geography-401-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on multi-layer spatial analysis setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed resilience evaluation decisions"
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
          "id": "geography-401-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "geography-401-l15",
      "title": "Geography IV Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "geography-401-l15-q1",
          "text": "Which statement best explains climate adaptation in Geography?",
          "skillId": "geography-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains climate adaptation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how climate adaptation works in practice."
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
          "id": "geography-401-l15-q2",
          "text": "What is the best first step when analyzing resource systems planning?",
          "skillId": "geography-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for resource systems planning."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to resource systems planning."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-401-l15-q3",
          "text": "Which option shows strong reasoning about capstone spatial resilience planning?",
          "skillId": "geography-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone spatial resilience planning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "geography-401-l15-q4",
          "text": "Why is spaced review useful for Geography mastery?",
          "skillId": "geography-401-skill-review",
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
          "id": "geography-401-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Geography IV Mastery Mastery Sprint",
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
                "label": "Confusion about climate adaptation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to resource systems planning"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone spatial resilience planning under timing"
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
          "id": "geography-401-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
