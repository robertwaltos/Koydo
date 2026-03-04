import type { LearningModule } from "@/lib/modules/types";

export const Physics401Module: LearningModule = {
  "id": "physics-401",
  "title": "Physics Capstone Modeling",
  "description": "Build and validate multi-system physics models with rigorous assumptions and checks.",
  "subject": "Physics",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Physics",
    "Apply Physics Argument Quality strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "physics-401-l01",
      "title": "Model Construction for Complex Systems",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "physics-401-l01-c1",
          "title": "Model Construction for Complex Systems Overview",
          "content": "In this lesson, we will embark on an exciting journey into the world of model construction! We will specifically focus on how to build and validate models in the fascinating field of capstone physics. Our main goal is to understand what strong reasoning looks like before we dive into solving complex problems. Strong reasoning is like a superhero for scientists; it helps us think clearly and make smart choices. By the end of this lesson, you will be able to recognize the importance of reasoning in physics and how it helps us create effective models that can explain real-world phenomena. Get ready to think critically and creatively as we explore these concepts together!\nContext recap: In this lesson, we will embark on an exciting journey into the world of model construction! We will specifically focus on how to build and validate models in the fascinating field of capstone physics. Our main goal is to understand what strong reasoning looks like before we dive into solving complex problems. Strong reasoning is like a superhero for scientists; it helps us think clearly and make smart choices.\nWhy this matters: Model Construction for Complex Systems Overview helps learners in Physics connect ideas from Physics Capstone Modeling to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "physics-401-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will learn how model construction and assumption management work hand in hand to help us solve problems effectively. First, we will identify the main target of our model, which is the question we want to answer or the phenomenon we want to understand. Then, we will look for the evidence or steps that support our target, helping us build a strong foundation for our model. This process is crucial for ensuring that our models are accurate and reliable.\nContext recap: In this section, we will learn how model construction and assumption management work hand in hand to help us solve problems effectively. First, we will identify the main target of our model, which is the question we want to answer or the phenomenon we want to understand. Then, we will look for the evidence or steps that support our target, helping us build a strong foundation for our model. This process is crucial for ensuring that our models are accurate and reliable.\nContext recap: In this section, we will learn how model construction and assumption management work hand in hand to help us solve problems effectively. First, we will identify the main target of our model, which is the question we want to answer or the phenomenon we want to understand. Then, we will look for the evidence or steps that support our target, helping us build a strong foundation for our model. This process is crucial for ensuring that our models are accurate and reliable.\nWhy this matters: Core Concept helps learners in Physics connect ideas from Physics Capstone Modeling to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "physics-401-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! First, we will define our goal clearly, which is what we want to achieve with our model. Next, we will apply a strategy for managing our assumptions, ensuring that we only use relevant information. Finally, we will verify our result with a quick check to make sure everything aligns with our original goal. This step-by-step approach will help you understand how to apply these concepts in your own work.\nContext recap: Let's walk through a guided example together! First, we will define our goal clearly, which is what we want to achieve with our model. Next, we will apply a strategy for managing our assumptions, ensuring that we only use relevant information. Finally, we will verify our result with a quick check to make sure everything aligns with our original goal."
        },
        {
          "id": "physics-401-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to shine! Take the same steps we talked about and use them on a new situation. As you go through this process, be sure to explain in one clear sentence why your approach makes sense. This exercise will help you practice expressing your thoughts clearly and understanding why your methods are important in the world of physics modeling. Remember, being able to communicate your reasoning is a key skill in science!\nContext recap: Now it's your turn to shine! Take the same steps we talked about and use them on a new situation. As you go through this process, be sure to explain in one clear sentence why your approach makes sense. This exercise will help you practice expressing your thoughts clearly and understanding why your methods are important in the world of physics modeling."
        }
      ],
      "flashcards": [
        {
          "id": "physics-401-l01-f1",
          "front": "model construction",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "physics-401-l01-f2",
          "front": "assumption management",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "physics-401-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "physics-401-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "physics-401-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about model construction and assumption management."
        },
        {
          "id": "physics-401-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Physics vocabulary."
        }
      ]
    },
    {
      "id": "physics-401-l02",
      "title": "Assumption Management and Scope",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about model construction from this lesson.",
          "Explain where assumption management appears in real life.",
          "Describe one question you still have about capstone physics modeling and validation."
        ]
      },
      "interactiveActivities": [
        {
          "id": "physics-401-l02-ia1",
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
                "label": "Set a goal for model construction",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for assumption management",
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
          "id": "physics-401-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on assumption management and write one reflection."
        }
      ]
    },
    {
      "id": "physics-401-l03",
      "title": "Checkpoint: Capstone Physics Setup",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "physics-401-l03-q1",
          "text": "Which statement best explains model construction in Physics?",
          "skillId": "physics-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains model construction using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how model construction works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Physics."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-401-l03-q2",
          "text": "What is the best first step when analyzing assumption management?",
          "skillId": "physics-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for assumption management."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to assumption management."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-401-l03-q3",
          "text": "Which option shows strong reasoning about capstone physics modeling and validation?",
          "skillId": "physics-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone physics modeling and validation."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-401-l03-q4",
          "text": "Why is spaced review useful for Physics mastery?",
          "skillId": "physics-401-skill-review",
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
          "id": "physics-401-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Capstone Physics Setup",
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
                "label": "Confusion about model construction"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to assumption management"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone physics modeling and validation under timing"
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
          "id": "physics-401-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "physics-401-l04",
      "title": "Coupled System Analysis",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "physics-401-l04-c1",
          "title": "Coupled System Analysis Focus",
          "content": "In this lesson, we will deepen our understanding of multi-system coupling using structured reasoning. We will transition from simply understanding concepts to making applied decisions based on those concepts. This means we will learn how different systems interact with each other and how to analyze those interactions effectively.\nContext recap: In this lesson, we will deepen our understanding of multi-system coupling using structured reasoning. We will transition from simply understanding concepts to making applied decisions based on those concepts. This means we will learn how different systems interact with each other and how to analyze those interactions effectively."
        },
        {
          "id": "physics-401-l04-c2",
          "title": "Method Steps",
          "content": "Let's break down the method steps we will use in this lesson. Step 1: Identify what is being asked in the problem. This means understanding the question fully. Step 2: Choose a strategy that aligns with the concept of multi-system coupling. This will guide your approach. Step 3: Justify your choices with evidence, ensuring that your reasoning is sound and well-supported.\nContext recap: Let's break down the method steps we will use in this lesson. Step 1: Identify what is being asked in the problem. This means understanding the question fully. Step 2: Choose a strategy that aligns with the concept of multi-system coupling."
        },
        {
          "id": "physics-401-l04-c3",
          "title": "Common Mistakes",
          "content": "As we work through this lesson, it's important to be aware of common mistakes that can occur. Some frequent errors include skipping the setup phase, using assumptions that are not related to the problem, or failing to verify the final result. By being mindful of these pitfalls, you can improve your problem-solving skills and enhance the quality of your work.\nContext recap: As we work through this lesson, it's important to be aware of common mistakes that can occur. Some frequent errors include skipping the setup phase, using assumptions that are not related to the problem, or failing to verify the final result. By being mindful of these pitfalls, you can improve your problem-solving skills and enhance the quality of your work."
        },
        {
          "id": "physics-401-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar problem on your own! As you work through it, compare your process to the lesson sequence we discussed. This will help you reflect on your approach and identify areas where you can improve your understanding and skills.\nContext recap: Now, it's time for you to try solving a similar problem on your own! As you work through it, compare your process to the lesson sequence we discussed. This will help you reflect on your approach and identify areas where you can improve your understanding and skills."
        }
      ],
      "flashcards": [
        {
          "id": "physics-401-l04-f1",
          "front": "multi-system coupling",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "physics-401-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "physics-401-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "physics-401-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "physics-401-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for multi-system coupling scenarios."
        }
      ]
    },
    {
      "id": "physics-401-l05",
      "title": "Validation with Multiple Representations",
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
          "id": "physics-401-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "multi-system coupling Concept"
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
          "id": "physics-401-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a multi-system coupling challenge."
        }
      ]
    },
    {
      "id": "physics-401-l06",
      "title": "Checkpoint: Physics Argument Quality",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "physics-401-l06-q1",
          "text": "Which statement best explains multi-system coupling in Physics?",
          "skillId": "physics-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains multi-system coupling using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how multi-system coupling works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Physics."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-401-l06-q2",
          "text": "What is the best first step when analyzing quantitative validation?",
          "skillId": "physics-401-skill-process",
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
          "id": "physics-401-l06-q3",
          "text": "Which option shows strong reasoning about capstone physics modeling and validation?",
          "skillId": "physics-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone physics modeling and validation."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-401-l06-q4",
          "text": "Why is spaced review useful for Physics mastery?",
          "skillId": "physics-401-skill-review",
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
          "id": "physics-401-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Physics Argument Quality",
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
                "label": "Confusion about multi-system coupling"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to quantitative validation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone physics modeling and validation under timing"
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
          "id": "physics-401-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "physics-401-l07",
      "title": "Error Bounds and Reliability",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "physics-401-l07-c1",
          "title": "Error Bounds and Reliability Setup",
          "content": "Before we start our analysis, it's important to use quantitative validation to organize our approach. Planning ahead not only improves the quality of our work but also helps us complete tasks more quickly. By taking the time to set up our analysis properly, we can ensure that we are on the right track.\nContext recap: Before we start our analysis, it's important to use quantitative validation to organize our approach. Planning ahead not only improves the quality of our work but also helps us complete tasks more quickly. By taking the time to set up our analysis properly, we can ensure that we are on the right track."
        },
        {
          "id": "physics-401-l07-c2",
          "title": "Decision Rules",
          "content": "When you have to make a choice between different options, it can be really helpful to follow a simple decision rule. Always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. By using this strategy, you can make smarter decisions and improve the reliability of your conclusions. This way, you can feel more confident about the choices you make!\nContext recap: When you have to make a choice between different options, it can be really helpful to follow a simple decision rule. Always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. By using this strategy, you can make smarter decisions and improve the reliability of your conclusions. This way, you can feel more confident about the choices you make!\nContext recap: When you have to make a choice between different options, it can be really helpful to follow a simple decision rule. Always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. By using this strategy, you can make smarter decisions and improve the reliability of your conclusions. This way, you can feel more confident about the choices you make!\nWhy this matters: Decision Rules helps learners in Physics connect ideas from Physics Capstone Modeling to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "physics-401-l07-c3",
          "title": "Quality Control",
          "content": "As you review your work, check for three important things: accuracy, completeness, and alignment with the original objective. Ensuring that your work meets these criteria will help you maintain high standards and improve the overall quality of your analysis.\nContext recap: As you review your work, check for three important things: accuracy, completeness, and alignment with the original objective. Ensuring that your work meets these criteria will help you maintain high standards and improve the overall quality of your analysis.\nContext recap: As you review your work, check for three important things: accuracy, completeness, and alignment with the original objective. Ensuring that your work meets these criteria will help you maintain high standards and improve the overall quality of your analysis. Context recap: As you review your work, check for three important things: accuracy, completeness, and alignment with the original objective. Ensuring that your work meets these criteria will help you maintain high standards and improve the overall quality of your analysis."
        },
        {
          "id": "physics-401-l07-c4",
          "title": "Next-Step Plan",
          "content": "As you prepare for your next practice round, write down one action you plan to repeat because it worked well, and one action you want to improve. This reflection will help you grow as a learner and enhance your skills in physics modeling.\nContext recap: As you prepare for your next practice round, write down one action you plan to repeat because it worked well, and one action you want to improve. This reflection will help you grow as a learner and enhance your skills in physics modeling.\nContext recap: As you prepare for your next practice round, write down one action you plan to repeat because it worked well, and one action you want to improve. This reflection will help you grow as a learner and enhance your skills in physics modeling. Context recap: As you prepare for your next practice round, write down one action you plan to repeat because it worked well, and one action you want to improve. This reflection will help you grow as a learner and enhance your skills in physics modeling."
        }
      ],
      "flashcards": [
        {
          "id": "physics-401-l07-f1",
          "front": "quantitative validation",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "physics-401-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "physics-401-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "physics-401-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "physics-401-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on quantitative validation."
        }
      ]
    },
    {
      "id": "physics-401-l08",
      "title": "Physics Capstone Simulation Lab",
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
          "id": "physics-401-l08-ia1",
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
          "id": "physics-401-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "physics-401-l09",
      "title": "Review: Advanced Physics Modeling",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "physics-401-l09-q1",
          "text": "Which statement best explains assumption management in Physics?",
          "skillId": "physics-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains assumption management using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how assumption management works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Physics."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-401-l09-q2",
          "text": "What is the best first step when analyzing quantitative validation?",
          "skillId": "physics-401-skill-process",
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
          "id": "physics-401-l09-q3",
          "text": "Which option shows strong reasoning about capstone physics modeling and validation?",
          "skillId": "physics-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone physics modeling and validation."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-401-l09-q4",
          "text": "Why is spaced review useful for Physics mastery?",
          "skillId": "physics-401-skill-review",
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
          "id": "physics-401-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Advanced Physics Modeling",
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
                "label": "Confusion about assumption management"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to quantitative validation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone physics modeling and validation under timing"
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
          "id": "physics-401-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "physics-401-l10",
      "title": "Mastery: Physics IV",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "physics-401-l10-q1",
          "text": "Which statement best explains model construction in Physics?",
          "skillId": "physics-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains model construction using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how model construction works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Physics."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-401-l10-q2",
          "text": "What is the best first step when analyzing multi-system coupling?",
          "skillId": "physics-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for multi-system coupling."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to multi-system coupling."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-401-l10-q3",
          "text": "Which option shows strong reasoning about capstone physics modeling and validation?",
          "skillId": "physics-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone physics modeling and validation."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-401-l10-q4",
          "text": "Why is spaced review useful for Physics mastery?",
          "skillId": "physics-401-skill-review",
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
          "id": "physics-401-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Physics IV",
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
                "label": "Confusion about model construction"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to multi-system coupling"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone physics modeling and validation under timing"
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
          "id": "physics-401-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "physics-401-l11",
      "title": "Applied Physics Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using multi-system coupling.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "physics-401-l11-ia1",
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
                "label": "Tag repeated mistakes in assumption management",
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
          "id": "physics-401-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "physics-401-l12",
      "title": "Physics IV Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "physics-401-l12-q1",
          "text": "Which statement best explains model construction in Physics?",
          "skillId": "physics-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains model construction using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how model construction works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Physics."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-401-l12-q2",
          "text": "What is the best first step when analyzing quantitative validation?",
          "skillId": "physics-401-skill-process",
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
          "id": "physics-401-l12-q3",
          "text": "Which option shows strong reasoning about capstone physics modeling and validation?",
          "skillId": "physics-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone physics modeling and validation."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-401-l12-q4",
          "text": "Why is spaced review useful for Physics mastery?",
          "skillId": "physics-401-skill-review",
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
          "id": "physics-401-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Physics IV Mastery Applied Retest",
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
                "label": "Confusion about model construction"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to quantitative validation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone physics modeling and validation under timing"
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
          "id": "physics-401-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "physics-401-l13",
      "title": "Physics Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "physics-401-l13-c1",
          "title": "Scenario Brief",
          "content": "Welcome to this thrilling physics scenario! In this exciting activity, you will have the amazing opportunity to create your very own models. You will learn how to connect different systems together and test your ideas using real numbers! This challenge is specially designed to help you understand how various elements of physics interact and work together in a fun, hands-on way. As you dive into this activity, you will not only have a great time, but you will also gain practical knowledge that you can use in everyday life.\nYou will explore how these fascinating physics concepts apply to real-world situations, which will deepen your understanding and make learning more exciting and relevant. Imagine how the principles of physics are at work in everything around you, from the way a ball bounces to how cars move on the road. By participating in this scenario, you will see the connections between theory and practice, enhancing your learning experience. So, get ready to unleash your creativity, think critically, and enjoy the journey of discovery in the world of physics!\nContext recap: Welcome to this thrilling physics scenario! In this exciting activity, you will have the amazing opportunity to create your very own models. You will learn how to connect different systems together and test your ideas using real numbers! This challenge is specially designed to help you understand how various elements of physics interact and work together in a fun, hands-on way.\nWhy this matters: Scenario Brief helps learners in Physics connect ideas from Physics Capstone Modeling to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "physics-401-l13-c2",
          "title": "Plan the Approach",
          "content": "To effectively tackle this scenario, it’s important to start by breaking it down into smaller, manageable parts. Think of each decision you need to make as a stepping stone that leads you closer to your goal. For every decision point, consider a specific strategy that you can use to guide your choices. This organized approach will help you stay focused and make better decisions as you navigate through the challenge. Remember, taking your time to plan can lead to more successful outcomes! By thinking carefully about each step, you can avoid feeling overwhelmed and ensure that you are making thoughtful choices. So, take a deep breath, gather your ideas, and let’s get started on this exciting journey together!\nContext recap: To effectively tackle this scenario, it’s important to start by breaking it down into smaller, manageable parts. Think of each decision you need to make as a stepping stone that leads you closer to your goal. For every decision point, consider a specific strategy that you can use to guide your choices. This organized approach will help you stay focused and make better decisions as you navigate through the challenge.\nWhy this matters: Plan the Approach helps learners in Physics connect ideas from Physics Capstone Modeling to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "physics-401-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's your moment to shine! It's time to put your plan into action and see how your ideas work in real life. As you carry out each step, be sure to explain your reasoning clearly. This means telling us why you chose to do things a certain way. Use evidence to support your choices instead of just guessing. For example, if you think a certain force will help your experiment, explain why you believe that based on what you've learned. This practice will not only help you understand the physics concepts more deeply but will also enhance your problem-solving skills. Remember, being able to justify your decisions is an important part of learning and mastering physics! It helps you think critically and become a better scientist. So, let's get started and have fun exploring the world of physics together!\nContext recap: Now it's your moment to shine! It's time to put your plan into action and see how your ideas work in real life. As you carry out each step, be sure to explain your reasoning clearly. This means telling us why you chose to do things a certain way.\nWhy this matters: Execute and Justify helps learners in Physics connect ideas from Physics Capstone Modeling to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "physics-401-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After you finish your scenario, it's important to take some time to think about what you accomplished. Look back at the goals you set at the start and see how your results compare. Did you reach your targets? Think about the parts of your approach that worked really well—those are your strengths! Also, consider the areas where you might need to make some changes or improvements. This kind of reflection is super important because it helps you understand physics better and develop your skills. By evaluating your outcomes, you can learn valuable lessons from your experiences. This will not only help you solve physics problems more effectively but also make you a more confident learner in the future! Remember, every experience is a chance to grow and improve!\nContext recap: After you finish your scenario, it's important to take some time to think about what you accomplished. Look back at the goals you set at the start and see how your results compare. Did you reach your targets? Think about the parts of your approach that worked really well—those are your strengths!\nWhy this matters: Evaluate Outcome helps learners in Physics connect ideas from Physics Capstone Modeling to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "physics-401-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "physics-401-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "physics-401-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "physics-401-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "physics-401-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting model construction, multi-system coupling, and quantitative validation."
        },
        {
          "id": "physics-401-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "physics-401-l14",
      "title": "Physics Coaching Clinic",
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
          "id": "physics-401-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on model construction setup"
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
          "id": "physics-401-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "physics-401-l15",
      "title": "Physics IV Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "physics-401-l15-q1",
          "text": "Which statement best explains assumption management in Physics?",
          "skillId": "physics-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains assumption management using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how assumption management works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Physics."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-401-l15-q2",
          "text": "What is the best first step when analyzing multi-system coupling?",
          "skillId": "physics-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for multi-system coupling."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to multi-system coupling."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-401-l15-q3",
          "text": "Which option shows strong reasoning about capstone physics modeling and validation?",
          "skillId": "physics-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone physics modeling and validation."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-401-l15-q4",
          "text": "Why is spaced review useful for Physics mastery?",
          "skillId": "physics-401-skill-review",
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
          "id": "physics-401-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Physics IV Mastery Mastery Sprint",
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
                "label": "Confusion about assumption management"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to multi-system coupling"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone physics modeling and validation under timing"
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
          "id": "physics-401-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
