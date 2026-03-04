import type { LearningModule } from "@/lib/modules/types";

export const Astronomy301Module: LearningModule = {
  "id": "astronomy-301",
  "title": "Astronomy Data Interpretation and Prediction",
  "description": "Interpret observational datasets to build and test astronomical predictions.",
  "subject": "Astronomy",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Astronomy",
    "Apply Astronomical Model Testing strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "astronomy-301-l01",
      "title": "Signal and Noise in Observation Data",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "astronomy-301-l01-c1",
          "title": "Signal and Noise in Observation Data Overview",
          "content": "In this lesson, we will dive into the exciting world of astronomical data and learn how to understand the signals that come from space. Signals are important because they help us gather information about stars, planets, and other celestial objects. Our main goal is to develop strong reasoning skills that will guide us in interpreting this data accurately. By focusing on these skills, we will become better problem solvers when it comes to understanding astronomical observations. This foundational knowledge will not only enhance our current learning but also prepare us for future adventures in the fascinating field of astronomy. Let's get ready to explore the universe together!"
        },
        {
          "id": "astronomy-301-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will learn how signal interpretation and orbital prediction are connected. We will start by identifying the main target we want to focus on, such as a specific celestial body. Next, we will look for the evidence or steps that support our understanding of this target. This process will help us make informed predictions about its behavior and movements in space.\nContext recap: In this section, we will learn how signal interpretation and orbital prediction are connected. We will start by identifying the main target we want to focus on, such as a specific celestial body. Next, we will look for the evidence or steps that support our understanding of this target. This process will help us make informed predictions about its behavior and movements in space."
        },
        {
          "id": "astronomy-301-l01-c3",
          "title": "Worked Example",
          "content": "Let's go through a guided example together. First, we will define our goal clearly, which is to predict the orbit of a celestial object. Then, we will apply a strategy that helps us make this prediction based on the data we have. Finally, we will verify our result by doing a quick check to ensure that our prediction is accurate. This step-by-step approach will help us build confidence in our skills.\nContext recap: Let's go through a guided example together. First, we will define our goal clearly, which is to predict the orbit of a celestial object. Then, we will apply a strategy that helps us make this prediction based on the data we have. Finally, we will verify our result by doing a quick check to ensure that our prediction is accurate."
        },
        {
          "id": "astronomy-301-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to shine! Take what we've learned and apply it to a new situation. As you explore this new scenario, be sure to explain in one clear sentence why your approach makes sense. This exercise will not only help you strengthen your understanding of the concepts we've covered but also showcase your ability to think critically and reason through problems. Remember, practice makes perfect!\nContext recap: Now it's your turn to shine! Take what we've learned and apply it to a new situation. As you explore this new scenario, be sure to explain in one clear sentence why your approach makes sense. This exercise will not only help you strengthen your understanding of the concepts we've covered but also showcase your ability to think critically and reason through problems."
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-301-l01-f1",
          "front": "signal interpretation",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "astronomy-301-l01-f2",
          "front": "orbital prediction",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "astronomy-301-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "astronomy-301-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-301-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about signal interpretation and orbital prediction."
        },
        {
          "id": "astronomy-301-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Astronomy vocabulary."
        }
      ]
    },
    {
      "id": "astronomy-301-l02",
      "title": "Orbital Prediction Techniques",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about signal interpretation from this lesson.",
          "Explain where orbital prediction appears in real life.",
          "Describe one question you still have about astronomical data interpretation."
        ]
      },
      "interactiveActivities": [
        {
          "id": "astronomy-301-l02-ia1",
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
                "label": "Set a goal for signal interpretation",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for orbital prediction",
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
          "id": "astronomy-301-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on orbital prediction and write one reflection."
        }
      ]
    },
    {
      "id": "astronomy-301-l03",
      "title": "Checkpoint: Data-Driven Astronomy",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "astronomy-301-l03-q1",
          "text": "Which statement best explains signal interpretation in Astronomy?",
          "skillId": "astronomy-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains signal interpretation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how signal interpretation works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Astronomy."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-301-l03-q2",
          "text": "What is the best first step when analyzing orbital prediction?",
          "skillId": "astronomy-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for orbital prediction."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to orbital prediction."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-301-l03-q3",
          "text": "Which option shows strong reasoning about astronomical data interpretation?",
          "skillId": "astronomy-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to astronomical data interpretation."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-301-l03-q4",
          "text": "Why is spaced review useful for Astronomy mastery?",
          "skillId": "astronomy-301-skill-review",
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
          "id": "astronomy-301-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Data-Driven Astronomy",
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
                "label": "Confusion about signal interpretation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to orbital prediction"
              },
              {
                "id": "l3",
                "label": "Weak transfer of astronomical data interpretation under timing"
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
          "id": "astronomy-301-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "astronomy-301-l04",
      "title": "Classification from Spectral Evidence",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "astronomy-301-l04-c1",
          "title": "Classification from Spectral Evidence Focus",
          "content": "In this lesson, we will explore how to classify different celestial objects by using structured reasoning. We will start by deepening our understanding of classification logic, which is the way we group things based on their similarities and differences. Instead of just learning about these concepts, we will practice making decisions based on real evidence we gather. This will help us become better at identifying and understanding the unique characteristics of various stars, planets, and other celestial bodies in our universe. By the end of this lesson, you will feel more confident in your ability to classify these fascinating objects!"
        },
        {
          "id": "astronomy-301-l04-c2",
          "title": "Method Steps",
          "content": "Here are the steps we will follow for classification: Step 1 is to identify what is being asked in the question or task. Step 2 involves choosing a strategy that aligns with our classification logic. Finally, Step 3 is to justify our choice with evidence that supports our decision. Following these steps will help us make accurate classifications.\nContext recap: Here are the steps we will follow for classification: Step 1 is to identify what is being asked in the question or task. Step 2 involves choosing a strategy that aligns with our classification logic. Finally, Step 3 is to justify our choice with evidence that supports our decision. Following these steps will help us make accurate classifications."
        },
        {
          "id": "astronomy-301-l04-c3",
          "title": "Common Mistakes",
          "content": "As we learn, it's important to be aware of common mistakes. Some errors include skipping the setup phase, using assumptions that are not related to the task, or failing to verify the final result. By recognizing these pitfalls, we can improve our classification skills and avoid making the same mistakes.\nContext recap: As we learn, it's important to be aware of common mistakes. Some errors include skipping the setup phase, using assumptions that are not related to the task, or failing to verify the final result. By recognizing these pitfalls, we can improve our classification skills and avoid making the same mistakes."
        },
        {
          "id": "astronomy-301-l04-c4",
          "title": "Independent Try",
          "content": "Now, I encourage you to solve a similar problem on your own. After you complete it, take a moment to compare your process to the sequence we discussed in the lesson. This reflection will help you understand your own reasoning and improve your skills further.\nContext recap: Now, I encourage you to solve a similar problem on your own. After you complete it, take a moment to compare your process to the sequence we discussed in the lesson. This reflection will help you understand your own reasoning and improve your skills further."
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-301-l04-f1",
          "front": "classification logic",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "astronomy-301-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "astronomy-301-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "astronomy-301-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-301-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for classification logic scenarios."
        }
      ]
    },
    {
      "id": "astronomy-301-l05",
      "title": "Comparing Competing Space Models",
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
          "id": "astronomy-301-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "classification logic Concept"
              },
              {
                "id": "process",
                "label": "model testing Process"
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
          "id": "astronomy-301-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a classification logic challenge."
        }
      ]
    },
    {
      "id": "astronomy-301-l06",
      "title": "Checkpoint: Astronomical Model Testing",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "astronomy-301-l06-q1",
          "text": "Which statement best explains classification logic in Astronomy?",
          "skillId": "astronomy-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains classification logic using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how classification logic works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Astronomy."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-301-l06-q2",
          "text": "What is the best first step when analyzing model testing?",
          "skillId": "astronomy-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for model testing."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to model testing."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-301-l06-q3",
          "text": "Which option shows strong reasoning about astronomical data interpretation?",
          "skillId": "astronomy-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to astronomical data interpretation."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-301-l06-q4",
          "text": "Why is spaced review useful for Astronomy mastery?",
          "skillId": "astronomy-301-skill-review",
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
          "id": "astronomy-301-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Astronomical Model Testing",
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
                "label": "Confusion about classification logic"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to model testing"
              },
              {
                "id": "l3",
                "label": "Weak transfer of astronomical data interpretation under timing"
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
          "id": "astronomy-301-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "astronomy-301-l07",
      "title": "Uncertainty in Cosmic Measurement",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "astronomy-301-l07-c1",
          "title": "Uncertainty in Cosmic Measurement Setup",
          "content": "Before we begin our measurements, it's important to use model testing to organize our approach. Planning ahead can significantly improve both the quality of our work and the speed at which we complete it. By having a clear plan, we can make our measurements more effective.\nContext recap: Before we begin our measurements, it's important to use model testing to organize our approach. Planning ahead can significantly improve both the quality of our work and the speed at which we complete it. By having a clear plan, we can make our measurements more effective."
        },
        {
          "id": "astronomy-301-l07-c2",
          "title": "Decision Rules",
          "content": "When we have to make decisions and there are many options to choose from, it can sometimes be confusing. To help us decide, we can use a simple rule: always choose the option that has the strongest evidence supporting it and the clearest connection to what we want to achieve. This way of thinking will help us make smart choices, especially when we are looking at measurements from space and trying to understand the universe better.\nContext recap: When we have to make decisions and there are many options to choose from, it can sometimes be confusing. To help us decide, we can use a simple rule: always choose the option that has the strongest evidence supporting it and the clearest connection to what we want to achieve. This way of thinking will help us make smart choices, especially when we are looking at measurements from space and trying to understand the universe better."
        },
        {
          "id": "astronomy-301-l07-c3",
          "title": "Quality Control",
          "content": "To ensure the quality of our measurements, we should check for three important things: accuracy, completeness, and alignment with our original objective. By focusing on these aspects, we can enhance the reliability of our results and make better predictions.\nContext recap: To ensure the quality of our measurements, we should check for three important things: accuracy, completeness, and alignment with our original objective. By focusing on these aspects, we can enhance the reliability of our results and make better predictions."
        },
        {
          "id": "astronomy-301-l07-c4",
          "title": "Next-Step Plan",
          "content": "As we wrap up this lesson, take a moment to write down one action you plan to repeat in your next practice round and one action you would like to improve. This reflection will help you focus on your growth and development in understanding cosmic measurements.\nContext recap: As we wrap up this lesson, take a moment to write down one action you plan to repeat in your next practice round and one action you would like to improve. This reflection will help you focus on your growth and development in understanding cosmic measurements."
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-301-l07-f1",
          "front": "model testing",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "astronomy-301-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "astronomy-301-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "astronomy-301-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-301-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on model testing."
        }
      ]
    },
    {
      "id": "astronomy-301-l08",
      "title": "Observation Forecast Studio",
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
          "id": "astronomy-301-l08-ia1",
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
          "id": "astronomy-301-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "astronomy-301-l09",
      "title": "Review: Astronomy Prediction Skills",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "astronomy-301-l09-q1",
          "text": "Which statement best explains orbital prediction in Astronomy?",
          "skillId": "astronomy-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains orbital prediction using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how orbital prediction works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Astronomy."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-301-l09-q2",
          "text": "What is the best first step when analyzing model testing?",
          "skillId": "astronomy-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for model testing."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to model testing."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-301-l09-q3",
          "text": "Which option shows strong reasoning about astronomical data interpretation?",
          "skillId": "astronomy-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to astronomical data interpretation."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-301-l09-q4",
          "text": "Why is spaced review useful for Astronomy mastery?",
          "skillId": "astronomy-301-skill-review",
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
          "id": "astronomy-301-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Astronomy Prediction Skills",
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
                "label": "Confusion about orbital prediction"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to model testing"
              },
              {
                "id": "l3",
                "label": "Weak transfer of astronomical data interpretation under timing"
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
          "id": "astronomy-301-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "astronomy-301-l10",
      "title": "Mastery: Astronomy III",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "astronomy-301-l10-q1",
          "text": "Which statement best explains signal interpretation in Astronomy?",
          "skillId": "astronomy-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains signal interpretation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how signal interpretation works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Astronomy."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-301-l10-q2",
          "text": "What is the best first step when analyzing classification logic?",
          "skillId": "astronomy-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for classification logic."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to classification logic."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-301-l10-q3",
          "text": "Which option shows strong reasoning about astronomical data interpretation?",
          "skillId": "astronomy-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to astronomical data interpretation."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-301-l10-q4",
          "text": "Why is spaced review useful for Astronomy mastery?",
          "skillId": "astronomy-301-skill-review",
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
          "id": "astronomy-301-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Astronomy III",
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
                "label": "Confusion about signal interpretation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to classification logic"
              },
              {
                "id": "l3",
                "label": "Weak transfer of astronomical data interpretation under timing"
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
          "id": "astronomy-301-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "astronomy-301-l11",
      "title": "Applied Astronomy Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using classification logic.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "astronomy-301-l11-ia1",
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
                "label": "Tag repeated mistakes in orbital prediction",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on model testing",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-301-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "astronomy-301-l12",
      "title": "Astronomy III Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "astronomy-301-l12-q1",
          "text": "Which statement best explains signal interpretation in Astronomy?",
          "skillId": "astronomy-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains signal interpretation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how signal interpretation works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Astronomy."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-301-l12-q2",
          "text": "What is the best first step when analyzing model testing?",
          "skillId": "astronomy-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for model testing."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to model testing."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-301-l12-q3",
          "text": "Which option shows strong reasoning about astronomical data interpretation?",
          "skillId": "astronomy-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to astronomical data interpretation."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-301-l12-q4",
          "text": "Why is spaced review useful for Astronomy mastery?",
          "skillId": "astronomy-301-skill-review",
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
          "id": "astronomy-301-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Astronomy III Mastery Applied Retest",
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
                "label": "Confusion about signal interpretation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to model testing"
              },
              {
                "id": "l3",
                "label": "Weak transfer of astronomical data interpretation under timing"
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
          "id": "astronomy-301-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "astronomy-301-l13",
      "title": "Astronomy Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "astronomy-301-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, you will get to use your skills in understanding signals, classifying information, and testing models all at once! This challenge will help you learn how to interpret data and make predictions based on what you observe in the universe.\nContext recap: In this exciting scenario, you will get to use your skills in understanding signals, classifying information, and testing models all at once! This challenge will help you learn how to interpret data and make predictions based on what you observe in the universe."
        },
        {
          "id": "astronomy-301-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. For each decision point, think about a specific strategy that you can use. This will help you stay organized and focused as you work through the challenge.\nContext recap: To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. For each decision point, think about a specific strategy that you can use. This will help you stay organized and focused as you work through the challenge."
        },
        {
          "id": "astronomy-301-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's time to put your plan into action! As you execute each step, make sure to explain your choices clearly. Use evidence from your observations to support your decisions, rather than making guesses. This will strengthen your understanding and help you learn from the experience.\nContext recap: Now it's time to put your plan into action! As you execute each step, make sure to explain your choices clearly. Use evidence from your observations to support your decisions, rather than making guesses. This will strengthen your understanding and help you learn from the experience."
        },
        {
          "id": "astronomy-301-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After you have completed your scenario, take a moment to evaluate the outcome. Compare your results to the target you aimed for. Identify what aspects of your approach worked well and which ones might need some adjustments. This reflection will help you improve your skills for future challenges.\nContext recap: After you have completed your scenario, take a moment to evaluate the outcome. Compare your results to the target you aimed for. Identify what aspects of your approach worked well and which ones might need some adjustments. This reflection will help you improve your skills for future challenges."
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-301-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "astronomy-301-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "astronomy-301-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "astronomy-301-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-301-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting signal interpretation, classification logic, and model testing."
        },
        {
          "id": "astronomy-301-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "astronomy-301-l14",
      "title": "Astronomy Coaching Clinic",
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
          "id": "astronomy-301-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on signal interpretation setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed model testing decisions"
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
          "id": "astronomy-301-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "astronomy-301-l15",
      "title": "Astronomy III Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "astronomy-301-l15-q1",
          "text": "Which statement best explains orbital prediction in Astronomy?",
          "skillId": "astronomy-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains orbital prediction using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how orbital prediction works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Astronomy."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-301-l15-q2",
          "text": "What is the best first step when analyzing classification logic?",
          "skillId": "astronomy-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for classification logic."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to classification logic."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-301-l15-q3",
          "text": "Which option shows strong reasoning about astronomical data interpretation?",
          "skillId": "astronomy-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to astronomical data interpretation."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-301-l15-q4",
          "text": "Why is spaced review useful for Astronomy mastery?",
          "skillId": "astronomy-301-skill-review",
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
          "id": "astronomy-301-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Astronomy III Mastery Mastery Sprint",
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
                "label": "Confusion about orbital prediction"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to classification logic"
              },
              {
                "id": "l3",
                "label": "Weak transfer of astronomical data interpretation under timing"
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
          "id": "astronomy-301-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
