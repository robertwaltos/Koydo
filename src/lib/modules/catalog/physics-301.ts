import type { LearningModule } from "@/lib/modules/types";

export const Physics301Module: LearningModule = {
  "id": "physics-301",
  "title": "Physics Systems and Modeling",
  "description": "Model motion, energy, fields, and waves across multi-step physical systems.",
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
    "Apply Model Validation in Physics strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "physics-301-l01",
      "title": "Multi-Body Motion Models",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "physics-301-l01-c1",
          "title": "Multi-Body Motion Models Overview",
          "content": "In this exciting lesson, we will dive into the amazing world of multi-body dynamics! This area of physics helps us understand how different objects move and interact with one another. Imagine playing with a set of toy cars or balls; when they bump into each other, they change direction and speed. That's what multi-body dynamics is all about! We will use something called physics system modeling, which is like creating a map of how these objects behave together. Our main goal is to learn how to think critically and recognize what strong reasoning looks like. This skill is super important because it will help us solve problems not just in physics, but in many areas of life! So, let's get ready to become fantastic problem solvers together!\nContext recap: In this exciting lesson, we will dive into the amazing world of multi-body dynamics! This area of physics helps us understand how different objects move and interact with one another. Imagine playing with a set of toy cars or balls; when they bump into each other, they change direction and speed. That's what multi-body dynamics is all about!\nWhy this matters: Multi-Body Motion Models Overview helps learners in Physics connect ideas from Physics Systems and Modeling to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "physics-301-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will learn about the important relationship between multi-body dynamics and energy accounting. First, we will identify our main target or goal for the problem we are working on. Then, we will look for evidence or steps that support our understanding of how the objects interact and how energy is transferred between them. This structured approach will help us make sense of complex situations in physics!\nContext recap: In this section, we will learn about the important relationship between multi-body dynamics and energy accounting. First, we will identify our main target or goal for the problem we are working on. Then, we will look for evidence or steps that support our understanding of how the objects interact and how energy is transferred between them. This structured approach will help us make sense of complex situations in physics!\nContext recap: In this section, we will learn about the important relationship between multi-body dynamics and energy accounting. First, we will identify our main target or goal for the problem we are working on. Then, we will look for evidence or steps that support our understanding of how the objects interact and how energy is transferred between them. This structured approach will help us make sense of complex situations in physics!\nWhy this matters: Core Concept helps learners in Physics connect ideas from Physics Systems and Modeling to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "physics-301-l01-c3",
          "title": "Worked Example",
          "content": "Let's go through a guided example together! First, we will clearly define our goal for the problem we are tackling. Next, we will apply a strategy for energy accounting, which means we will track how energy moves and changes throughout the system. Finally, we will verify our result with a quick check to ensure that our solution makes sense. This step-by-step approach will help you feel more confident in solving similar problems on your own!\nContext recap: Let's go through a guided example together! First, we will clearly define our goal for the problem we are tackling. Next, we will apply a strategy for energy accounting, which means we will track how energy moves and changes throughout the system. Finally, we will verify our result with a quick check to ensure that our solution makes sense."
        },
        {
          "id": "physics-301-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to shine! Take the same steps we just talked about and apply them to a new situation. As you go through this process, be sure to explain in one clear sentence why your method makes sense. This will not only help you strengthen your understanding but also show off your reasoning skills. Remember, the more you practice, the better you'll get at it! Keep up the great work!\nContext recap: Now it's your turn to shine! Take the same steps we just talked about and apply them to a new situation. As you go through this process, be sure to explain in one clear sentence why your method makes sense. This will not only help you strengthen your understanding but also show off your reasoning skills."
        }
      ],
      "flashcards": [
        {
          "id": "physics-301-l01-f1",
          "front": "multi-body dynamics",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "physics-301-l01-f2",
          "front": "energy accounting",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "physics-301-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "physics-301-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "physics-301-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about multi-body dynamics and energy accounting."
        },
        {
          "id": "physics-301-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Physics vocabulary."
        }
      ]
    },
    {
      "id": "physics-301-l02",
      "title": "Energy Accounting Across Systems",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about multi-body dynamics from this lesson.",
          "Explain where energy accounting appears in real life.",
          "Describe one question you still have about physics system modeling."
        ]
      },
      "interactiveActivities": [
        {
          "id": "physics-301-l02-ia1",
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
                "label": "Set a goal for multi-body dynamics",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for energy accounting",
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
          "id": "physics-301-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on energy accounting and write one reflection."
        }
      ]
    },
    {
      "id": "physics-301-l03",
      "title": "Checkpoint: Physics System Setup",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "physics-301-l03-q1",
          "text": "Which statement best explains multi-body dynamics in Physics?",
          "skillId": "physics-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains multi-body dynamics using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how multi-body dynamics works in practice."
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
          "id": "physics-301-l03-q2",
          "text": "What is the best first step when analyzing energy accounting?",
          "skillId": "physics-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for energy accounting."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to energy accounting."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-301-l03-q3",
          "text": "Which option shows strong reasoning about physics system modeling?",
          "skillId": "physics-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to physics system modeling."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-301-l03-q4",
          "text": "Why is spaced review useful for Physics mastery?",
          "skillId": "physics-301-skill-review",
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
          "id": "physics-301-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Physics System Setup",
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
                "label": "Confusion about multi-body dynamics"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to energy accounting"
              },
              {
                "id": "l3",
                "label": "Weak transfer of physics system modeling under timing"
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
          "id": "physics-301-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "physics-301-l04",
      "title": "Fields and Interaction Mapping",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "physics-301-l04-c1",
          "title": "Fields and Interaction Mapping Focus",
          "content": "In this lesson, we will deepen our understanding of field interactions by using structured reasoning. We will move from simply understanding concepts to making informed decisions based on those concepts. This will help us see how different forces and fields interact in the world around us and how we can apply this knowledge in real-life situations.\nContext recap: In this lesson, we will deepen our understanding of field interactions by using structured reasoning. We will move from simply understanding concepts to making informed decisions based on those concepts. This will help us see how different forces and fields interact in the world around us and how we can apply this knowledge in real-life situations."
        },
        {
          "id": "physics-301-l04-c2",
          "title": "Method Steps",
          "content": "Here are the steps we will follow to tackle problems involving field interactions: Step 1: Identify what is being asked in the problem. Step 2: Choose a strategy that aligns with the principles of field interactions. Step 3: Justify your choices with evidence from your understanding of the concepts. Following these steps will help you approach problems systematically and effectively!\nContext recap: Here are the steps we will follow to tackle problems involving field interactions: Step 1: Identify what is being asked in the problem. Step 2: Choose a strategy that aligns with the principles of field interactions. Step 3: Justify your choices with evidence from your understanding of the concepts. Following these steps will help you approach problems systematically and effectively!\nContext recap: Here are the steps we will follow to tackle problems involving field interactions: Step 1: Identify what is being asked in the problem. Step 2: Choose a strategy that aligns with the principles of field interactions. Step 3: Justify your choices with evidence from your understanding of the concepts. Following these steps will help you approach problems systematically and effectively!\nWhy this matters: Method Steps helps learners in Physics connect ideas from Physics Systems and Modeling to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "physics-301-l04-c3",
          "title": "Common Mistakes",
          "content": "As we work through problems, it's important to be aware of common mistakes that can occur. Some of these include skipping the setup phase, using assumptions that are not related to the problem, or failing to verify the final result. By being mindful of these errors, we can improve our problem-solving skills and achieve better outcomes.\nContext recap: As we work through problems, it's important to be aware of common mistakes that can occur. Some of these include skipping the setup phase, using assumptions that are not related to the problem, or failing to verify the final result. By being mindful of these errors, we can improve our problem-solving skills and achieve better outcomes."
        },
        {
          "id": "physics-301-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar problem on your own! After you complete it, take a moment to compare your process to the lesson sequence we discussed. This reflection will help you identify areas where you did well and where you might want to improve in your approach to problem-solving.\nContext recap: Now, it's time for you to try solving a similar problem on your own! After you complete it, take a moment to compare your process to the lesson sequence we discussed. This reflection will help you identify areas where you did well and where you might want to improve in your approach to problem-solving."
        }
      ],
      "flashcards": [
        {
          "id": "physics-301-l04-f1",
          "front": "field interactions",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "physics-301-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "physics-301-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "physics-301-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "physics-301-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for field interactions scenarios."
        }
      ]
    },
    {
      "id": "physics-301-l05",
      "title": "Wave Behavior in Complex Media",
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
          "id": "physics-301-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "field interactions Concept"
              },
              {
                "id": "process",
                "label": "wave-system interpretation Process"
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
          "id": "physics-301-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a field interactions challenge."
        }
      ]
    },
    {
      "id": "physics-301-l06",
      "title": "Checkpoint: Model Validation in Physics",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "physics-301-l06-q1",
          "text": "Which statement best explains field interactions in Physics?",
          "skillId": "physics-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains field interactions using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how field interactions works in practice."
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
          "id": "physics-301-l06-q2",
          "text": "What is the best first step when analyzing wave-system interpretation?",
          "skillId": "physics-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for wave-system interpretation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to wave-system interpretation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-301-l06-q3",
          "text": "Which option shows strong reasoning about physics system modeling?",
          "skillId": "physics-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to physics system modeling."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-301-l06-q4",
          "text": "Why is spaced review useful for Physics mastery?",
          "skillId": "physics-301-skill-review",
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
          "id": "physics-301-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Model Validation in Physics",
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
                "label": "Confusion about field interactions"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to wave-system interpretation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of physics system modeling under timing"
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
          "id": "physics-301-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "physics-301-l07",
      "title": "Measurement Error and Reliability",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "physics-301-l07-c1",
          "title": "Measurement Error and Reliability Setup",
          "content": "Before we start working on measurement errors and reliability, let's use a wave-system interpretation to organize our approach. Planning ahead is crucial because it helps us improve both the quality of our work and the speed at which we complete tasks. A well-thought-out plan can make a big difference in our results!\nContext recap: Before we start working on measurement errors and reliability, let's use a wave-system interpretation to organize our approach. Planning ahead is crucial because it helps us improve both the quality of our work and the speed at which we complete tasks. A well-thought-out plan can make a big difference in our results!"
        },
        {
          "id": "physics-301-l07-c2",
          "title": "Decision Rules",
          "content": "When you have to make a choice between different options, it can sometimes be tricky. A great way to help you decide is to follow a simple rule: always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. This approach not only helps you make better decisions but also keeps you focused on your goals, making it easier to reach them successfully.\nContext recap: When you have to make a choice between different options, it can sometimes be tricky. A great way to help you decide is to follow a simple rule: always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. This approach not only helps you make better decisions but also keeps you focused on your goals, making it easier to reach them successfully."
        },
        {
          "id": "physics-301-l07-c3",
          "title": "Quality Control",
          "content": "To ensure the quality of your work, check for three important things: accuracy, completeness, and alignment with the original objective. By focusing on these aspects, you can enhance the reliability of your measurements and the overall effectiveness of your projects.\nContext recap: To ensure the quality of your work, check for three important things: accuracy, completeness, and alignment with the original objective. By focusing on these aspects, you can enhance the reliability of your measurements and the overall effectiveness of your projects.\nContext recap: To ensure the quality of your work, check for three important things: accuracy, completeness, and alignment with the original objective. By focusing on these aspects, you can enhance the reliability of your measurements and the overall effectiveness of your projects. Context recap: To ensure the quality of your work, check for three important things: accuracy, completeness, and alignment with the original objective. By focusing on these aspects, you can enhance the reliability of your measurements and the overall effectiveness of your projects."
        },
        {
          "id": "physics-301-l07-c4",
          "title": "Next-Step Plan",
          "content": "As you prepare for your next practice round, take a moment to write down one action you want to repeat because it worked well, and one action you want to improve upon. This reflection will help you grow as a learner and make your future practice sessions even more effective!\nContext recap: As you prepare for your next practice round, take a moment to write down one action you want to repeat because it worked well, and one action you want to improve upon. This reflection will help you grow as a learner and make your future practice sessions even more effective!"
        }
      ],
      "flashcards": [
        {
          "id": "physics-301-l07-f1",
          "front": "wave-system interpretation",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "physics-301-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "physics-301-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "physics-301-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "physics-301-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on wave-system interpretation."
        }
      ]
    },
    {
      "id": "physics-301-l08",
      "title": "Physics Simulation Studio",
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
          "id": "physics-301-l08-ia1",
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
          "id": "physics-301-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "physics-301-l09",
      "title": "Review: System-Level Physics",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "physics-301-l09-q1",
          "text": "Which statement best explains energy accounting in Physics?",
          "skillId": "physics-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains energy accounting using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how energy accounting works in practice."
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
          "id": "physics-301-l09-q2",
          "text": "What is the best first step when analyzing wave-system interpretation?",
          "skillId": "physics-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for wave-system interpretation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to wave-system interpretation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-301-l09-q3",
          "text": "Which option shows strong reasoning about physics system modeling?",
          "skillId": "physics-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to physics system modeling."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-301-l09-q4",
          "text": "Why is spaced review useful for Physics mastery?",
          "skillId": "physics-301-skill-review",
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
          "id": "physics-301-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: System-Level Physics",
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
                "label": "Confusion about energy accounting"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to wave-system interpretation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of physics system modeling under timing"
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
          "id": "physics-301-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "physics-301-l10",
      "title": "Mastery: Physics III",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "physics-301-l10-q1",
          "text": "Which statement best explains multi-body dynamics in Physics?",
          "skillId": "physics-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains multi-body dynamics using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how multi-body dynamics works in practice."
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
          "id": "physics-301-l10-q2",
          "text": "What is the best first step when analyzing field interactions?",
          "skillId": "physics-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for field interactions."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to field interactions."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-301-l10-q3",
          "text": "Which option shows strong reasoning about physics system modeling?",
          "skillId": "physics-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to physics system modeling."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-301-l10-q4",
          "text": "Why is spaced review useful for Physics mastery?",
          "skillId": "physics-301-skill-review",
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
          "id": "physics-301-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Physics III",
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
                "label": "Confusion about multi-body dynamics"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to field interactions"
              },
              {
                "id": "l3",
                "label": "Weak transfer of physics system modeling under timing"
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
          "id": "physics-301-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "physics-301-l11",
      "title": "Applied Physics Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using field interactions.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "physics-301-l11-ia1",
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
                "label": "Tag repeated mistakes in energy accounting",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on wave-system interpretation",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "physics-301-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "physics-301-l12",
      "title": "Physics III Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "physics-301-l12-q1",
          "text": "Which statement best explains multi-body dynamics in Physics?",
          "skillId": "physics-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains multi-body dynamics using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how multi-body dynamics works in practice."
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
          "id": "physics-301-l12-q2",
          "text": "What is the best first step when analyzing wave-system interpretation?",
          "skillId": "physics-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for wave-system interpretation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to wave-system interpretation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-301-l12-q3",
          "text": "Which option shows strong reasoning about physics system modeling?",
          "skillId": "physics-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to physics system modeling."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-301-l12-q4",
          "text": "Why is spaced review useful for Physics mastery?",
          "skillId": "physics-301-skill-review",
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
          "id": "physics-301-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Physics III Mastery Applied Retest",
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
                "label": "Confusion about multi-body dynamics"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to wave-system interpretation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of physics system modeling under timing"
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
          "id": "physics-301-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "physics-301-l13",
      "title": "Physics Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "physics-301-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, we will explore how different objects interact with each other through forces, how they move together, and how waves can affect these movements. This challenge will help us understand complex ideas in physics by applying them to real-world situations.\nContext recap: In this exciting scenario, we will explore how different objects interact with each other through forces, how they move together, and how waves can affect these movements. This challenge will help us understand complex ideas in physics by applying them to real-world situations."
        },
        {
          "id": "physics-301-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, we should break it down into smaller, manageable parts. For each part, we will decide on a specific strategy or approach that we can use. This way, we can focus on one decision at a time, making it easier to understand and solve the overall challenge.\nContext recap: To tackle this scenario effectively, we should break it down into smaller, manageable parts. For each part, we will decide on a specific strategy or approach that we can use. This way, we can focus on one decision at a time, making it easier to understand and solve the overall challenge."
        },
        {
          "id": "physics-301-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's time to put our plan into action! As we execute each step, we need to explain why we are making those choices. It's important to support our decisions with evidence from our understanding of physics, rather than just guessing. This will help us learn and improve our reasoning skills.\nContext recap: Now it's time to put our plan into action! As we execute each step, we need to explain why we are making those choices. It's important to support our decisions with evidence from our understanding of physics, rather than just guessing. This will help us learn and improve our reasoning skills.\nContext recap: Now it's time to put our plan into action! As we execute each step, we need to explain why we are making those choices. It's important to support our decisions with evidence from our understanding of physics, rather than just guessing. This will help us learn and improve our reasoning skills.\nWhy this matters: Execute and Justify helps learners in Physics connect ideas from Physics Systems and Modeling to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "physics-301-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After completing our scenario, we will take a moment to evaluate our results. We should compare what we achieved with our original goals. This will help us identify what worked well and what might need some adjustments. Reflecting on our outcomes is a key part of the learning process!\nContext recap: After completing our scenario, we will take a moment to evaluate our results. We should compare what we achieved with our original goals. This will help us identify what worked well and what might need some adjustments. Reflecting on our outcomes is a key part of the learning process!\nContext recap: After completing our scenario, we will take a moment to evaluate our results. We should compare what we achieved with our original goals. This will help us identify what worked well and what might need some adjustments. Reflecting on our outcomes is a key part of the learning process!\nWhy this matters: Evaluate Outcome helps learners in Physics connect ideas from Physics Systems and Modeling to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        }
      ],
      "flashcards": [
        {
          "id": "physics-301-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "physics-301-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "physics-301-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "physics-301-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "physics-301-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting multi-body dynamics, field interactions, and wave-system interpretation."
        },
        {
          "id": "physics-301-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "physics-301-l14",
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
          "id": "physics-301-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on multi-body dynamics setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed wave-system interpretation decisions"
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
          "id": "physics-301-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "physics-301-l15",
      "title": "Physics III Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "physics-301-l15-q1",
          "text": "Which statement best explains energy accounting in Physics?",
          "skillId": "physics-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains energy accounting using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how energy accounting works in practice."
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
          "id": "physics-301-l15-q2",
          "text": "What is the best first step when analyzing field interactions?",
          "skillId": "physics-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for field interactions."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to field interactions."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-301-l15-q3",
          "text": "Which option shows strong reasoning about physics system modeling?",
          "skillId": "physics-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to physics system modeling."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "physics-301-l15-q4",
          "text": "Why is spaced review useful for Physics mastery?",
          "skillId": "physics-301-skill-review",
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
          "id": "physics-301-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Physics III Mastery Mastery Sprint",
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
                "label": "Confusion about energy accounting"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to field interactions"
              },
              {
                "id": "l3",
                "label": "Weak transfer of physics system modeling under timing"
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
          "id": "physics-301-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
