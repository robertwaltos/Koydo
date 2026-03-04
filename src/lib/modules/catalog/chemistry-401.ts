import type { LearningModule } from "@/lib/modules/types";

export const Chemistry401Module: LearningModule = {
  "id": "chemistry-401",
  "title": "Chemistry Capstone Systems",
  "description": "Synthesize quantitative chemistry models for equilibrium, rate, and energetic systems.",
  "subject": "Chemistry",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Chemistry",
    "Apply Chemical Argument Quality strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "chemistry-401-l01",
      "title": "Quantitative Modeling Across Reactions",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "chemistry-401-l01-c1",
          "title": "Quantitative Modeling Across Reactions Overview",
          "content": "In this lesson, we are going to dive into the fascinating world of quantitative modeling, especially as it applies to chemical systems. Quantitative modeling is like a special tool that helps scientists understand and predict how different chemicals interact with each other. Our main goal today is to learn what strong reasoning looks like. This means we will identify the important steps and thought processes that lead to successful problem-solving in chemistry. By the end of this lesson, you will be able to spot these key elements of reasoning, which will make you a better problem solver in your chemistry studies. Get ready to think like a scientist!"
        },
        {
          "id": "chemistry-401-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will explore the exciting relationship between quantitative modeling and system equilibrium in chemistry. First, we will pinpoint the main goal of our analysis, which is to understand how different chemical reactions interact with each other. Next, we will gather evidence and outline the steps that support our conclusions. This thoughtful process will empower us to make informed decisions based on strong reasoning, helping us to better understand the fascinating world of chemistry and how it applies to real-life situations.\nContext recap: In this section, we will explore the exciting relationship between quantitative modeling and system equilibrium in chemistry. First, we will pinpoint the main goal of our analysis, which is to understand how different chemical reactions interact with each other. Next, we will gather evidence and outline the steps that support our conclusions. This thoughtful process will empower us to make informed decisions based on strong reasoning, helping us to better understand the fascinating world of chemistry and how it applies to real-life situations."
        },
        {
          "id": "chemistry-401-l01-c3",
          "title": "Worked Example",
          "content": "Let's embark on a guided example together! First, we will clearly define our goal, which is to understand how different reactions can reach a balanced state, known as equilibrium. Then, we will apply a thoughtful strategy to help us achieve this equilibrium in our system. Finally, we will verify our result with a quick check to make sure everything is correct and makes sense. By following this step-by-step approach, you will build your confidence and be better prepared to tackle similar problems on your own in the future. Remember, practice makes perfect!"
        },
        {
          "id": "chemistry-401-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to shine! Take the process we just learned and apply it to a new situation. As you go through this exercise, remember to explain why your approach makes sense in just one clear sentence. This activity will not only help you strengthen your understanding of the concepts but also give you a chance to practice sharing your thoughts clearly and confidently. Have fun with it!\nContext recap: Now it's your turn to shine! Take the process we just learned and apply it to a new situation. As you go through this exercise, remember to explain why your approach makes sense in just one clear sentence. This activity will not only help you strengthen your understanding of the concepts but also give you a chance to practice sharing your thoughts clearly and confidently."
        }
      ],
      "flashcards": [
        {
          "id": "chemistry-401-l01-f1",
          "front": "quantitative modeling",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "chemistry-401-l01-f2",
          "front": "system equilibrium",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "chemistry-401-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "chemistry-401-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-401-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about quantitative modeling and system equilibrium."
        },
        {
          "id": "chemistry-401-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Chemistry vocabulary."
        }
      ]
    },
    {
      "id": "chemistry-401-l02",
      "title": "Equilibrium Systems and Shifts",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about quantitative modeling from this lesson.",
          "Explain where system equilibrium appears in real life.",
          "Describe one question you still have about capstone chemical systems reasoning."
        ]
      },
      "interactiveActivities": [
        {
          "id": "chemistry-401-l02-ia1",
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
                "label": "Set a goal for quantitative modeling",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for system equilibrium",
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
          "id": "chemistry-401-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on system equilibrium and write one reflection."
        }
      ]
    },
    {
      "id": "chemistry-401-l03",
      "title": "Checkpoint: Capstone Chemistry Setup",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "chemistry-401-l03-q1",
          "text": "Which statement best explains quantitative modeling in Chemistry?",
          "skillId": "chemistry-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains quantitative modeling using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how quantitative modeling works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Chemistry."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l03-q2",
          "text": "What is the best first step when analyzing system equilibrium?",
          "skillId": "chemistry-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for system equilibrium."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to system equilibrium."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l03-q3",
          "text": "Which option shows strong reasoning about capstone chemical systems reasoning?",
          "skillId": "chemistry-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone chemical systems reasoning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l03-q4",
          "text": "Why is spaced review useful for Chemistry mastery?",
          "skillId": "chemistry-401-skill-review",
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
          "id": "chemistry-401-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Capstone Chemistry Setup",
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
                "label": "Confusion about quantitative modeling"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to system equilibrium"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone chemical systems reasoning under timing"
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
          "id": "chemistry-401-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "chemistry-401-l04",
      "title": "Kinetics and Energetic Tradeoffs",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "chemistry-401-l04-c1",
          "title": "Kinetics and Energetic Tradeoffs Focus",
          "content": "In this lesson, we will dive deeper into the concept of kinetic tradeoffs using structured reasoning. We will move beyond just understanding the concepts to making applied decisions based on our knowledge. This will help you see how kinetic principles play a role in real-world chemical reactions and processes.\nContext recap: In this lesson, we will dive deeper into the concept of kinetic tradeoffs using structured reasoning. We will move beyond just understanding the concepts to making applied decisions based on our knowledge. This will help you see how kinetic principles play a role in real-world chemical reactions and processes."
        },
        {
          "id": "chemistry-401-l04-c2",
          "title": "Method Steps",
          "content": "Let's break down the method into clear and easy-to-follow steps. Step 1: First, we need to identify what is being asked in the problem. This means we should read the question carefully to understand what information we need to find. Step 2: Next, we choose a strategy that aligns with the kinetic tradeoffs we have learned about. This could involve thinking about how different factors affect the speed of a reaction. Step 3: Finally, we need to justify our choice with evidence to support our reasoning. This means we should explain why we think our strategy is the best one based on what we know. By following these steps, we can approach problems in a systematic and organized way, making it easier to find the right answers."
        },
        {
          "id": "chemistry-401-l04-c3",
          "title": "Common Mistakes",
          "content": "It's important to be aware of common mistakes that can happen during problem-solving. Some of these include skipping the setup, using assumptions that are not related to the problem, or failing to verify the final result. By recognizing these errors, you can improve your approach and avoid them in the future.\nContext recap: It's important to be aware of common mistakes that can happen during problem-solving. Some of these include skipping the setup, using assumptions that are not related to the problem, or failing to verify the final result. By recognizing these errors, you can improve your approach and avoid them in the future."
        },
        {
          "id": "chemistry-401-l04-c4",
          "title": "Independent Try",
          "content": "Now, I encourage you to solve a similar problem on your own. After you complete it, take a moment to compare your process to the lesson sequence we discussed. This reflection will help you identify areas where you did well and where you might want to improve.\nContext recap: Now, I encourage you to solve a similar problem on your own. After you complete it, take a moment to compare your process to the lesson sequence we discussed. This reflection will help you identify areas where you did well and where you might want to improve."
        }
      ],
      "flashcards": [
        {
          "id": "chemistry-401-l04-f1",
          "front": "kinetic tradeoffs",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "chemistry-401-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "chemistry-401-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "chemistry-401-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-401-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for kinetic tradeoffs scenarios."
        }
      ]
    },
    {
      "id": "chemistry-401-l05",
      "title": "Validating Chemical Explanations",
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
          "id": "chemistry-401-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "kinetic tradeoffs Concept"
              },
              {
                "id": "process",
                "label": "evidence validation Process"
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
          "id": "chemistry-401-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a kinetic tradeoffs challenge."
        }
      ]
    },
    {
      "id": "chemistry-401-l06",
      "title": "Checkpoint: Chemical Argument Quality",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "chemistry-401-l06-q1",
          "text": "Which statement best explains kinetic tradeoffs in Chemistry?",
          "skillId": "chemistry-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains kinetic tradeoffs using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how kinetic tradeoffs works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Chemistry."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l06-q2",
          "text": "What is the best first step when analyzing evidence validation?",
          "skillId": "chemistry-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for evidence validation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to evidence validation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l06-q3",
          "text": "Which option shows strong reasoning about capstone chemical systems reasoning?",
          "skillId": "chemistry-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone chemical systems reasoning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l06-q4",
          "text": "Why is spaced review useful for Chemistry mastery?",
          "skillId": "chemistry-401-skill-review",
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
          "id": "chemistry-401-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Chemical Argument Quality",
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
                "label": "Confusion about kinetic tradeoffs"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to evidence validation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone chemical systems reasoning under timing"
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
          "id": "chemistry-401-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "chemistry-401-l07",
      "title": "Error Analysis in Quantitative Chemistry",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "chemistry-401-l07-c1",
          "title": "Error Analysis in Quantitative Chemistry Setup",
          "content": "Before you start working on a problem, it's essential to use evidence validation to organize your approach. Planning your steps in advance can significantly improve both the quality of your work and the speed at which you complete it. This preparation will set you up for success in your analysis.\nContext recap: Before you start working on a problem, it's essential to use evidence validation to organize your approach. Planning your steps in advance can significantly improve both the quality of your work and the speed at which you complete it. This preparation will set you up for success in your analysis."
        },
        {
          "id": "chemistry-401-l07-c2",
          "title": "Decision Rules",
          "content": "When you find yourself with several choices to make, it can be tricky to decide which one is the best. A great way to make this easier is to follow a simple decision rule: always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. By using this strategy, you will not only make better decisions but also improve your problem-solving skills, especially in the exciting world of chemistry!\nContext recap: When you find yourself with several choices to make, it can be tricky to decide which one is the best. A great way to make this easier is to follow a simple decision rule: always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. By using this strategy, you will not only make better decisions but also improve your problem-solving skills, especially in the exciting world of chemistry!"
        },
        {
          "id": "chemistry-401-l07-c3",
          "title": "Quality Control",
          "content": "As you review your work, check for three important aspects: accuracy, completeness, and alignment with the original objective. Ensuring that your work meets these criteria will help you maintain high standards in your analysis and improve your overall performance.\nContext recap: As you review your work, check for three important aspects: accuracy, completeness, and alignment with the original objective. Ensuring that your work meets these criteria will help you maintain high standards in your analysis and improve your overall performance."
        },
        {
          "id": "chemistry-401-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your practice, take a moment to write down one action you would like to repeat in your next round and one action you want to improve. This reflection will help you set goals for your future practice and encourage continuous growth in your understanding of chemistry.\nContext recap: After completing your practice, take a moment to write down one action you would like to repeat in your next round and one action you want to improve. This reflection will help you set goals for your future practice and encourage continuous growth in your understanding of chemistry."
        }
      ],
      "flashcards": [
        {
          "id": "chemistry-401-l07-f1",
          "front": "evidence validation",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "chemistry-401-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "chemistry-401-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "chemistry-401-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-401-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on evidence validation."
        }
      ]
    },
    {
      "id": "chemistry-401-l08",
      "title": "Chemistry Capstone Problem Lab",
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
          "id": "chemistry-401-l08-ia1",
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
          "id": "chemistry-401-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "chemistry-401-l09",
      "title": "Review: Advanced Chemical Systems",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "chemistry-401-l09-q1",
          "text": "Which statement best explains system equilibrium in Chemistry?",
          "skillId": "chemistry-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains system equilibrium using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how system equilibrium works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Chemistry."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l09-q2",
          "text": "What is the best first step when analyzing evidence validation?",
          "skillId": "chemistry-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for evidence validation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to evidence validation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l09-q3",
          "text": "Which option shows strong reasoning about capstone chemical systems reasoning?",
          "skillId": "chemistry-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone chemical systems reasoning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l09-q4",
          "text": "Why is spaced review useful for Chemistry mastery?",
          "skillId": "chemistry-401-skill-review",
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
          "id": "chemistry-401-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Advanced Chemical Systems",
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
                "label": "Confusion about system equilibrium"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to evidence validation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone chemical systems reasoning under timing"
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
          "id": "chemistry-401-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "chemistry-401-l10",
      "title": "Mastery: Chemistry IV",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "chemistry-401-l10-q1",
          "text": "Which statement best explains quantitative modeling in Chemistry?",
          "skillId": "chemistry-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains quantitative modeling using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how quantitative modeling works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Chemistry."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l10-q2",
          "text": "What is the best first step when analyzing kinetic tradeoffs?",
          "skillId": "chemistry-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for kinetic tradeoffs."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to kinetic tradeoffs."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l10-q3",
          "text": "Which option shows strong reasoning about capstone chemical systems reasoning?",
          "skillId": "chemistry-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone chemical systems reasoning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l10-q4",
          "text": "Why is spaced review useful for Chemistry mastery?",
          "skillId": "chemistry-401-skill-review",
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
          "id": "chemistry-401-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Chemistry IV",
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
                "label": "Confusion about quantitative modeling"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to kinetic tradeoffs"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone chemical systems reasoning under timing"
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
          "id": "chemistry-401-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "chemistry-401-l11",
      "title": "Applied Chemistry Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using kinetic tradeoffs.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "chemistry-401-l11-ia1",
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
                "label": "Tag repeated mistakes in system equilibrium",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on evidence validation",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-401-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "chemistry-401-l12",
      "title": "Chemistry IV Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "chemistry-401-l12-q1",
          "text": "Which statement best explains quantitative modeling in Chemistry?",
          "skillId": "chemistry-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains quantitative modeling using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how quantitative modeling works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Chemistry."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l12-q2",
          "text": "What is the best first step when analyzing evidence validation?",
          "skillId": "chemistry-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for evidence validation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to evidence validation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l12-q3",
          "text": "Which option shows strong reasoning about capstone chemical systems reasoning?",
          "skillId": "chemistry-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone chemical systems reasoning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l12-q4",
          "text": "Why is spaced review useful for Chemistry mastery?",
          "skillId": "chemistry-401-skill-review",
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
          "id": "chemistry-401-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Chemistry IV Mastery Applied Retest",
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
                "label": "Confusion about quantitative modeling"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to evidence validation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone chemical systems reasoning under timing"
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
          "id": "chemistry-401-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "chemistry-401-l13",
      "title": "Chemistry Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "chemistry-401-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, we will explore how to use numbers and models to understand chemical reactions. We will also look at the trade-offs involved in different choices and how to validate our findings with solid evidence. This challenge will help you apply what you've learned in a fun and practical way!\nContext recap: In this exciting scenario, we will explore how to use numbers and models to understand chemical reactions. We will also look at the trade-offs involved in different choices and how to validate our findings with solid evidence. This challenge will help you apply what you've learned in a fun and practical way!"
        },
        {
          "id": "chemistry-401-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, we will break it down into smaller, manageable decisions. For each decision point, we will think of a specific strategy to use. This method will help us stay organized and focused as we work through the challenge step by step.\nContext recap: To tackle this scenario effectively, we will break it down into smaller, manageable decisions. For each decision point, we will think of a specific strategy to use. This method will help us stay organized and focused as we work through the challenge step by step."
        },
        {
          "id": "chemistry-401-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's time to put our plan into action! As we execute each step, we will explain our choices clearly, using evidence to support our decisions. This means we will rely on facts and data rather than just making guesses, which is an important part of scientific practice.\nContext recap: Now it's time to put our plan into action! As we execute each step, we will explain our choices clearly, using evidence to support our decisions. This means we will rely on facts and data rather than just making guesses, which is an important part of scientific practice."
        },
        {
          "id": "chemistry-401-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After completing our scenario, we will evaluate the results we achieved. We will compare our outcomes to the goals we set at the beginning. This will help us determine what worked well and what might need some adjustments. Reflecting on our results is a key part of the learning process!\nContext recap: After completing our scenario, we will evaluate the results we achieved. We will compare our outcomes to the goals we set at the beginning. This will help us determine what worked well and what might need some adjustments. Reflecting on our results is a key part of the learning process!"
        }
      ],
      "flashcards": [
        {
          "id": "chemistry-401-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "chemistry-401-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "chemistry-401-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "chemistry-401-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-401-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting quantitative modeling, kinetic tradeoffs, and evidence validation."
        },
        {
          "id": "chemistry-401-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "chemistry-401-l14",
      "title": "Chemistry Coaching Clinic",
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
          "id": "chemistry-401-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on quantitative modeling setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed evidence validation decisions"
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
          "id": "chemistry-401-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "chemistry-401-l15",
      "title": "Chemistry IV Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "chemistry-401-l15-q1",
          "text": "Which statement best explains system equilibrium in Chemistry?",
          "skillId": "chemistry-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains system equilibrium using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how system equilibrium works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Chemistry."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l15-q2",
          "text": "What is the best first step when analyzing kinetic tradeoffs?",
          "skillId": "chemistry-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for kinetic tradeoffs."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to kinetic tradeoffs."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l15-q3",
          "text": "Which option shows strong reasoning about capstone chemical systems reasoning?",
          "skillId": "chemistry-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone chemical systems reasoning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l15-q4",
          "text": "Why is spaced review useful for Chemistry mastery?",
          "skillId": "chemistry-401-skill-review",
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
          "id": "chemistry-401-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Chemistry IV Mastery Mastery Sprint",
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
                "label": "Confusion about system equilibrium"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to kinetic tradeoffs"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone chemical systems reasoning under timing"
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
          "id": "chemistry-401-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
