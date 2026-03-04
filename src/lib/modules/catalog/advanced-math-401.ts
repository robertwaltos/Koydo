import type { LearningModule } from "@/lib/modules/types";

export const AdvancedMath401Module: LearningModule = {
  "id": "advanced-math-401",
  "title": "Advanced Math Capstone Proofs and Models",
  "description": "Integrate modeling, optimization, and formal proof to solve complex quantitative problems.",
  "subject": "Advanced Math",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Advanced Math",
    "Apply Mathematical Argument Quality strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "advanced-math-401-l01",
      "title": "Model Assumptions and Limits",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "advanced-math-401-l01-c1",
          "title": "Model Assumptions and Limits Overview",
          "content": "In this lesson, we will explore the important concept of model assumptions, which are the ideas we take for granted when we use mathematical models. We will look at these assumptions through the lens of advanced math reasoning, especially as we prepare for our capstone projects. Our main goal is to learn how to identify what strong reasoning looks like before we dive into solving any problems. Understanding these assumptions will help us make better decisions in our mathematical work.\nContext recap: In this lesson, we will explore the important concept of model assumptions, which are the ideas we take for granted when we use mathematical models. We will look at these assumptions through the lens of advanced math reasoning, especially as we prepare for our capstone projects. Our main goal is to learn how to identify what strong reasoning looks like before we dive into solving any problems. Understanding these assumptions will help us make better decisions in our mathematical work."
        },
        {
          "id": "advanced-math-401-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will discuss how model assumptions and optimization constraints work together to help us solve problems effectively. First, we will start by clearly naming the main target or goal we want to achieve. Next, we will identify the evidence or steps that support our approach to reaching that goal. This process will help us understand how to structure our reasoning and make informed decisions in our mathematical models.\nContext recap: In this section, we will discuss how model assumptions and optimization constraints work together to help us solve problems effectively. First, we will start by clearly naming the main target or goal we want to achieve. Next, we will identify the evidence or steps that support our approach to reaching that goal. This process will help us understand how to structure our reasoning and make informed decisions in our mathematical models."
        },
        {
          "id": "advanced-math-401-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! First, we will define the goal we want to achieve. Then, we will apply a strategy to address the optimization constraints we have identified. Finally, we will verify our result with a quick check to ensure that our solution is correct. This step-by-step approach will help us understand how to apply our knowledge in practical situations and reinforce our learning.\nContext recap: Let's walk through a guided example together! First, we will define the goal we want to achieve. Then, we will apply a strategy to address the optimization constraints we have identified. Finally, we will verify our result with a quick check to ensure that our solution is correct.\nWhy this matters: Worked Example helps learners in Advanced Math connect ideas from Advanced Math Capstone Proofs and Models to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "advanced-math-401-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn! Apply the same process we just discussed to a new scenario. As you work through it, make sure to explain why your approach is valid in one clear sentence. This exercise will help you practice your reasoning skills and reinforce your understanding of how to apply model assumptions and optimization constraints in different contexts.\nContext recap: Now it's your turn! Apply the same process we just discussed to a new scenario. As you work through it, make sure to explain why your approach is valid in one clear sentence. This exercise will help you practice your reasoning skills and reinforce your understanding of how to apply model assumptions and optimization constraints in different contexts."
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-401-l01-f1",
          "front": "model assumptions",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "advanced-math-401-l01-f2",
          "front": "optimization constraints",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "advanced-math-401-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "advanced-math-401-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-401-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about model assumptions and optimization constraints."
        },
        {
          "id": "advanced-math-401-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Advanced Math vocabulary."
        }
      ]
    },
    {
      "id": "advanced-math-401-l02",
      "title": "Optimization with Constraints",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about model assumptions from this lesson.",
          "Explain where optimization constraints appears in real life.",
          "Describe one question you still have about capstone advanced math reasoning."
        ]
      },
      "interactiveActivities": [
        {
          "id": "advanced-math-401-l02-ia1",
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
                "label": "Set a goal for model assumptions",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for optimization constraints",
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
          "id": "advanced-math-401-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on optimization constraints and write one reflection."
        }
      ]
    },
    {
      "id": "advanced-math-401-l03",
      "title": "Checkpoint: Capstone Modeling",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "advanced-math-401-l03-q1",
          "text": "Which statement best explains model assumptions in Advanced Math?",
          "skillId": "advanced-math-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains model assumptions using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how model assumptions works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Advanced Math."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l03-q2",
          "text": "What is the best first step when analyzing optimization constraints?",
          "skillId": "advanced-math-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for optimization constraints."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to optimization constraints."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l03-q3",
          "text": "Which option shows strong reasoning about capstone advanced math reasoning?",
          "skillId": "advanced-math-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone advanced math reasoning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l03-q4",
          "text": "Why is spaced review useful for Advanced Math mastery?",
          "skillId": "advanced-math-401-skill-review",
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
          "id": "advanced-math-401-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Capstone Modeling",
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
                "label": "Confusion about model assumptions"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to optimization constraints"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone advanced math reasoning under timing"
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
          "id": "advanced-math-401-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "advanced-math-401-l04",
      "title": "Formal Proof Structure",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "advanced-math-401-l04-c1",
          "title": "Formal Proof Structure Focus",
          "content": "In this lesson, we will deepen our understanding of formal proof structure by focusing on structured reasoning. We will move beyond just understanding concepts to making applied decisions based on those concepts. This will help us build a solid foundation for creating and analyzing proofs in advanced mathematics, which is essential for our capstone projects.\nContext recap: In this lesson, we will deepen our understanding of formal proof structure by focusing on structured reasoning. We will move beyond just understanding concepts to making applied decisions based on those concepts. This will help us build a solid foundation for creating and analyzing proofs in advanced mathematics, which is essential for our capstone projects."
        },
        {
          "id": "advanced-math-401-l04-c2",
          "title": "Method Steps",
          "content": "Let's break down the steps we need to follow when constructing a formal proof. Step 1 is to identify what is being asked in the problem. Step 2 involves choosing a strategy that aligns with the proof structure we have learned. Finally, Step 3 is to justify our reasoning with solid evidence. By following these steps, we can create clear and convincing proofs that demonstrate our understanding of advanced mathematical concepts.\nContext recap: Let's break down the steps we need to follow when constructing a formal proof. Step 1 is to identify what is being asked in the problem. Step 2 involves choosing a strategy that aligns with the proof structure we have learned. Finally, Step 3 is to justify our reasoning with solid evidence."
        },
        {
          "id": "advanced-math-401-l04-c3",
          "title": "Common Mistakes",
          "content": "As we work on formal proofs, it's important to be aware of common mistakes that can occur. Some frequent errors include skipping the initial setup, using assumptions that are not related to the problem, or failing to verify the final result. By recognizing these pitfalls, we can improve our proof-writing skills and ensure that our arguments are strong and valid.\nContext recap: As we work on formal proofs, it's important to be aware of common mistakes that can occur. Some frequent errors include skipping the initial setup, using assumptions that are not related to the problem, or failing to verify the final result. By recognizing these pitfalls, we can improve our proof-writing skills and ensure that our arguments are strong and valid."
        },
        {
          "id": "advanced-math-401-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar problem on your own! As you work through it, compare your process to the lesson sequence we discussed. This will help you reflect on your reasoning and identify areas for improvement. Remember, practice is key to mastering formal proof structures in advanced mathematics.\nContext recap: Now, it's time for you to try solving a similar problem on your own! As you work through it, compare your process to the lesson sequence we discussed. This will help you reflect on your reasoning and identify areas for improvement. Remember, practice is key to mastering formal proof structures in advanced mathematics."
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-401-l04-f1",
          "front": "proof structure",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "advanced-math-401-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "advanced-math-401-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "advanced-math-401-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-401-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for proof structure scenarios."
        }
      ]
    },
    {
      "id": "advanced-math-401-l05",
      "title": "Validation and Error Bounds",
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
          "id": "advanced-math-401-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "proof structure Concept"
              },
              {
                "id": "process",
                "label": "quantitative validation Process"
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
          "id": "advanced-math-401-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a proof structure challenge."
        }
      ]
    },
    {
      "id": "advanced-math-401-l06",
      "title": "Checkpoint: Mathematical Argument Quality",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "advanced-math-401-l06-q1",
          "text": "Which statement best explains proof structure in Advanced Math?",
          "skillId": "advanced-math-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains proof structure using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how proof structure works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Advanced Math."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l06-q2",
          "text": "What is the best first step when analyzing quantitative validation?",
          "skillId": "advanced-math-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for quantitative validation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to quantitative validation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l06-q3",
          "text": "Which option shows strong reasoning about capstone advanced math reasoning?",
          "skillId": "advanced-math-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone advanced math reasoning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l06-q4",
          "text": "Why is spaced review useful for Advanced Math mastery?",
          "skillId": "advanced-math-401-skill-review",
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
          "id": "advanced-math-401-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Mathematical Argument Quality",
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
                "label": "Confusion about proof structure"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to quantitative validation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone advanced math reasoning under timing"
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
          "id": "advanced-math-401-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "advanced-math-401-l07",
      "title": "Multi-Model Comparisons",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "advanced-math-401-l07-c1",
          "title": "Multi-Model Comparisons Setup",
          "content": "Before you start working on multi-model comparisons, it's essential to use quantitative validation to organize your approach. Planning your steps in advance can significantly improve both the quality of your work and the speed at which you complete it. By taking the time to prepare, you set yourself up for success in analyzing and comparing different mathematical models.\nContext recap: Before you start working on multi-model comparisons, it's essential to use quantitative validation to organize your approach. Planning your steps in advance can significantly improve both the quality of your work and the speed at which you complete it. By taking the time to prepare, you set yourself up for success in analyzing and comparing different mathematical models."
        },
        {
          "id": "advanced-math-401-l07-c2",
          "title": "Decision Rules",
          "content": "When faced with competing choices in your analysis, it's helpful to use a simple decision rule: always pick the option that has the strongest evidence and the clearest link to your goal. This strategy will guide you in making informed decisions and help you focus on the most relevant information as you work through your comparisons.\nContext recap: When faced with competing choices in your analysis, it's helpful to use a simple decision rule: always pick the option that has the strongest evidence and the clearest link to your goal. This strategy will guide you in making informed decisions and help you focus on the most relevant information as you work through your comparisons."
        },
        {
          "id": "advanced-math-401-l07-c3",
          "title": "Quality Control",
          "content": "As you evaluate your models, be sure to check for three important things: accuracy, completeness, and alignment with the original objective. By ensuring that your work meets these criteria, you can maintain high standards in your mathematical analysis and produce reliable results.\nContext recap: As you evaluate your models, be sure to check for three important things: accuracy, completeness, and alignment with the original objective. By ensuring that your work meets these criteria, you can maintain high standards in your mathematical analysis and produce reliable results."
        },
        {
          "id": "advanced-math-401-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your analysis, take a moment to write down one action you want to repeat in your next practice round and one action you would like to improve. This reflection will help you set clear goals for your future practice and enhance your skills in multi-model comparisons.\nContext recap: After completing your analysis, take a moment to write down one action you want to repeat in your next practice round and one action you would like to improve. This reflection will help you set clear goals for your future practice and enhance your skills in multi-model comparisons."
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-401-l07-f1",
          "front": "quantitative validation",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "advanced-math-401-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "advanced-math-401-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "advanced-math-401-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-401-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on quantitative validation."
        }
      ]
    },
    {
      "id": "advanced-math-401-l08",
      "title": "Capstone Proof Workshop",
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
          "id": "advanced-math-401-l08-ia1",
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
          "id": "advanced-math-401-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "advanced-math-401-l09",
      "title": "Review: Advanced Quantitative Thinking",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "advanced-math-401-l09-q1",
          "text": "Which statement best explains optimization constraints in Advanced Math?",
          "skillId": "advanced-math-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains optimization constraints using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how optimization constraints works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Advanced Math."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l09-q2",
          "text": "What is the best first step when analyzing quantitative validation?",
          "skillId": "advanced-math-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for quantitative validation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to quantitative validation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l09-q3",
          "text": "Which option shows strong reasoning about capstone advanced math reasoning?",
          "skillId": "advanced-math-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone advanced math reasoning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l09-q4",
          "text": "Why is spaced review useful for Advanced Math mastery?",
          "skillId": "advanced-math-401-skill-review",
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
          "id": "advanced-math-401-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Advanced Quantitative Thinking",
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
                "label": "Confusion about optimization constraints"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to quantitative validation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone advanced math reasoning under timing"
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
          "id": "advanced-math-401-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "advanced-math-401-l10",
      "title": "Mastery: Advanced Math IV",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "advanced-math-401-l10-q1",
          "text": "Which statement best explains model assumptions in Advanced Math?",
          "skillId": "advanced-math-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains model assumptions using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how model assumptions works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Advanced Math."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l10-q2",
          "text": "What is the best first step when analyzing proof structure?",
          "skillId": "advanced-math-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for proof structure."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to proof structure."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l10-q3",
          "text": "Which option shows strong reasoning about capstone advanced math reasoning?",
          "skillId": "advanced-math-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone advanced math reasoning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l10-q4",
          "text": "Why is spaced review useful for Advanced Math mastery?",
          "skillId": "advanced-math-401-skill-review",
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
          "id": "advanced-math-401-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Advanced Math IV",
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
                "label": "Confusion about model assumptions"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to proof structure"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone advanced math reasoning under timing"
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
          "id": "advanced-math-401-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "advanced-math-401-l11",
      "title": "Applied Advanced Math Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using proof structure.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "advanced-math-401-l11-ia1",
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
                "label": "Tag repeated mistakes in optimization constraints",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on quantitative validation",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-401-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "advanced-math-401-l12",
      "title": "Advanced Math IV Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "advanced-math-401-l12-q1",
          "text": "Which statement best explains model assumptions in Advanced Math?",
          "skillId": "advanced-math-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains model assumptions using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how model assumptions works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Advanced Math."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l12-q2",
          "text": "What is the best first step when analyzing quantitative validation?",
          "skillId": "advanced-math-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for quantitative validation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to quantitative validation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l12-q3",
          "text": "Which option shows strong reasoning about capstone advanced math reasoning?",
          "skillId": "advanced-math-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone advanced math reasoning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l12-q4",
          "text": "Why is spaced review useful for Advanced Math mastery?",
          "skillId": "advanced-math-401-skill-review",
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
          "id": "advanced-math-401-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Advanced Math IV Mastery Applied Retest",
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
                "label": "Confusion about model assumptions"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to quantitative validation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone advanced math reasoning under timing"
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
          "id": "advanced-math-401-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "advanced-math-401-l13",
      "title": "Advanced Math Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "advanced-math-401-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, we will explore how to combine different ideas about models, the structure of proofs, and ways to check our answers using numbers. This challenge will help you understand how these concepts work together in real-life situations.\nContext recap: In this exciting scenario, we will explore how to combine different ideas about models, the structure of proofs, and ways to check our answers using numbers. This challenge will help you understand how these concepts work together in real-life situations."
        },
        {
          "id": "advanced-math-401-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, it's important to break it down into smaller, manageable decisions. For each decision point, think about one specific strategy that you can use. This will help you stay organized and focused as you work through the challenge.\nContext recap: To tackle this scenario effectively, it's important to break it down into smaller, manageable decisions. For each decision point, think about one specific strategy that you can use. This will help you stay organized and focused as you work through the challenge."
        },
        {
          "id": "advanced-math-401-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's time to put your plan into action! As you apply your strategies, make sure to explain each step you take. Use clear evidence to support your choices instead of making random guesses. This will help you build a strong argument for your approach.\nContext recap: Now it's time to put your plan into action! As you apply your strategies, make sure to explain each step you take. Use clear evidence to support your choices instead of making random guesses. This will help you build a strong argument for your approach."
        },
        {
          "id": "advanced-math-401-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After you have completed your work, take a moment to evaluate the outcome. Compare your results to the goals you set at the beginning. Identify what aspects of your work were successful and which parts might need some adjustments. This reflection will help you improve in future challenges.\nContext recap: After you have completed your work, take a moment to evaluate the outcome. Compare your results to the goals you set at the beginning. Identify what aspects of your work were successful and which parts might need some adjustments. This reflection will help you improve in future challenges."
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-401-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "advanced-math-401-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "advanced-math-401-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "advanced-math-401-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-401-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting model assumptions, proof structure, and quantitative validation."
        },
        {
          "id": "advanced-math-401-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "advanced-math-401-l14",
      "title": "Advanced Math Coaching Clinic",
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
          "id": "advanced-math-401-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on model assumptions setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed quantitative validation decisions"
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
          "id": "advanced-math-401-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "advanced-math-401-l15",
      "title": "Advanced Math IV Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "advanced-math-401-l15-q1",
          "text": "Which statement best explains optimization constraints in Advanced Math?",
          "skillId": "advanced-math-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains optimization constraints using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how optimization constraints works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Advanced Math."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l15-q2",
          "text": "What is the best first step when analyzing proof structure?",
          "skillId": "advanced-math-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for proof structure."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to proof structure."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l15-q3",
          "text": "Which option shows strong reasoning about capstone advanced math reasoning?",
          "skillId": "advanced-math-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone advanced math reasoning."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l15-q4",
          "text": "Why is spaced review useful for Advanced Math mastery?",
          "skillId": "advanced-math-401-skill-review",
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
          "id": "advanced-math-401-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Advanced Math IV Mastery Mastery Sprint",
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
                "label": "Confusion about optimization constraints"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to proof structure"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone advanced math reasoning under timing"
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
          "id": "advanced-math-401-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
