import type { LearningModule } from "@/lib/modules/types";

export const GeneralScience301Module: LearningModule = {
  "id": "general-science-301",
  "title": "Science Systems and Engineering",
  "description": "Integrate science inquiry with engineering design, testing, and iteration cycles.",
  "subject": "Science",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Science",
    "Apply Evidence-Driven Iteration strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "general-science-301-l01",
      "title": "Systems Thinking in Science",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "general-science-301-l01-c1",
          "title": "Systems Thinking in Science Overview",
          "content": "In this lesson, we will dive into the fascinating concept of systems thinking, which is all about understanding how different parts of a system interact and work together. We will specifically look at how this idea connects to both science and engineering. Our main goal is to learn how to identify strong reasoning skills. These skills are essential because they help us tackle and solve problems more effectively. By grasping how various components of a system influence one another, we can enhance our abilities as problem solvers in the fields of science and engineering. This understanding will not only make us better learners but also prepare us for real-world challenges where systems thinking is crucial."
        },
        {
          "id": "general-science-301-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will discuss how systems thinking and engineering constraints work hand in hand. First, we need to clearly identify the main goal we want to achieve. After that, we will look for the evidence or steps that support our goal. This process helps us to stay focused and organized as we tackle challenges in science and engineering.\nContext recap: In this section, we will discuss how systems thinking and engineering constraints work hand in hand. First, we need to clearly identify the main goal we want to achieve. After that, we will look for the evidence or steps that support our goal. This process helps us to stay focused and organized as we tackle challenges in science and engineering."
        },
        {
          "id": "general-science-301-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! First, we will define our goal clearly. Next, we will apply a strategy that considers engineering constraints. Finally, we will verify our result with a quick check to ensure that we are on the right track. This step-by-step approach will help us understand how to apply systems thinking in real-life situations.\nContext recap: Let's walk through a guided example together! First, we will define our goal clearly. Next, we will apply a strategy that considers engineering constraints. Finally, we will verify our result with a quick check to ensure that we are on the right track.\nWhy this matters: Worked Example helps learners in Science connect ideas from Science Systems and Engineering to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "general-science-301-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to be a scientist! Take the same steps we just learned and use them on a new situation. As you work through this, remember to explain why your method makes sense in just one clear sentence. This activity will help you practice systems thinking and show you how to use it in different scenarios. Have fun exploring and thinking critically!\nContext recap: Now it's your turn to be a scientist! Take the same steps we just learned and use them on a new situation. As you work through this, remember to explain why your method makes sense in just one clear sentence. This activity will help you practice systems thinking and show you how to use it in different scenarios."
        }
      ],
      "flashcards": [
        {
          "id": "general-science-301-l01-f1",
          "front": "systems thinking",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "general-science-301-l01-f2",
          "front": "engineering constraints",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "general-science-301-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "general-science-301-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "general-science-301-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about systems thinking and engineering constraints."
        },
        {
          "id": "general-science-301-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Science vocabulary."
        }
      ]
    },
    {
      "id": "general-science-301-l02",
      "title": "Engineering Constraints and Criteria",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about systems thinking from this lesson.",
          "Explain where engineering constraints appears in real life.",
          "Describe one question you still have about science and engineering integration."
        ]
      },
      "interactiveActivities": [
        {
          "id": "general-science-301-l02-ia1",
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
                "label": "Set a goal for systems thinking",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for engineering constraints",
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
          "id": "general-science-301-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on engineering constraints and write one reflection."
        }
      ]
    },
    {
      "id": "general-science-301-l03",
      "title": "Checkpoint: Design Reasoning",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-301-l03-q1",
          "text": "Which statement best explains systems thinking in Science?",
          "skillId": "general-science-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains systems thinking using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how systems thinking works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Science."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-301-l03-q2",
          "text": "What is the best first step when analyzing engineering constraints?",
          "skillId": "general-science-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for engineering constraints."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to engineering constraints."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-301-l03-q3",
          "text": "Which option shows strong reasoning about science and engineering integration?",
          "skillId": "general-science-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to science and engineering integration."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-301-l03-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-301-skill-review",
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
          "id": "general-science-301-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Design Reasoning",
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
                "label": "Confusion about systems thinking"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to engineering constraints"
              },
              {
                "id": "l3",
                "label": "Weak transfer of science and engineering integration under timing"
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
          "id": "general-science-301-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-science-301-l04",
      "title": "Prototype and Test Cycles",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "general-science-301-l04-c1",
          "title": "Prototype and Test Cycles Focus",
          "content": "In this lesson, we will explore the exciting world of prototype and test cycles! We will learn how to use evidence-based iteration, which means we will gather information and facts to help us improve our ideas. Instead of just understanding concepts, we will focus on making smart choices based on what we discover. This way, we can create and test our prototypes more effectively, leading to better designs and solutions. Let's get ready to think critically and creatively as we dive into this important process!\nContext recap: In this lesson, we will explore the exciting world of prototype and test cycles! We will learn how to use evidence-based iteration, which means we will gather information and facts to help us improve our ideas. Instead of just understanding concepts, we will focus on making smart choices based on what we discover. This way, we can create and test our prototypes more effectively, leading to better designs and solutions."
        },
        {
          "id": "general-science-301-l04-c2",
          "title": "Method Steps",
          "content": "Let's break down the method into clear and easy-to-follow steps! Step 1: First, we need to identify what is being asked in the problem. This means understanding the question or challenge we are facing. Step 2: Next, we choose a strategy that aligns with evidence-based iteration. This means picking a method that has been proven to work based on past experiences and data. Step 3: Finally, we justify our choice with solid evidence. This means explaining why we think our strategy is the best option by using facts and examples. By following these steps, you will be able to make better decisions in your projects and improve your problem-solving skills!"
        },
        {
          "id": "general-science-301-l04-c3",
          "title": "Common Mistakes",
          "content": "It's important to be aware of common mistakes that can happen during this process. Some errors include skipping the setup phase, using unrelated assumptions, or failing to verify the final result. By recognizing these pitfalls, you can improve your approach and achieve better outcomes.\nContext recap: It's important to be aware of common mistakes that can happen during this process. Some errors include skipping the setup phase, using unrelated assumptions, or failing to verify the final result. By recognizing these pitfalls, you can improve your approach and achieve better outcomes."
        },
        {
          "id": "general-science-301-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar problem on your own! After you complete it, compare your process to the lesson sequence we discussed. This will help you see how well you understood the material and where you might improve.\nContext recap: Now, it's time for you to try solving a similar problem on your own! After you complete it, compare your process to the lesson sequence we discussed. This will help you see how well you understood the material and where you might improve."
        }
      ],
      "flashcards": [
        {
          "id": "general-science-301-l04-f1",
          "front": "evidence-based iteration",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "general-science-301-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "general-science-301-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "general-science-301-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "general-science-301-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for evidence-based iteration scenarios."
        }
      ]
    },
    {
      "id": "general-science-301-l05",
      "title": "Interpreting Performance Data",
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
          "id": "general-science-301-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "evidence-based iteration Concept"
              },
              {
                "id": "process",
                "label": "tradeoff analysis Process"
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
          "id": "general-science-301-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a evidence-based iteration challenge."
        }
      ]
    },
    {
      "id": "general-science-301-l06",
      "title": "Checkpoint: Evidence-Driven Iteration",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-301-l06-q1",
          "text": "Which statement best explains evidence-based iteration in Science?",
          "skillId": "general-science-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains evidence-based iteration using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how evidence-based iteration works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Science."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-301-l06-q2",
          "text": "What is the best first step when analyzing tradeoff analysis?",
          "skillId": "general-science-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for tradeoff analysis."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to tradeoff analysis."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-301-l06-q3",
          "text": "Which option shows strong reasoning about science and engineering integration?",
          "skillId": "general-science-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to science and engineering integration."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-301-l06-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-301-skill-review",
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
          "id": "general-science-301-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Evidence-Driven Iteration",
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
                "label": "Confusion about evidence-based iteration"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to tradeoff analysis"
              },
              {
                "id": "l3",
                "label": "Weak transfer of science and engineering integration under timing"
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
          "id": "general-science-301-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-science-301-l07",
      "title": "Tradeoff Analysis",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "general-science-301-l07-c1",
          "title": "Tradeoff Analysis Setup",
          "content": "Before you start working on a project, it's helpful to use tradeoff analysis to organize your approach. Planning ahead can significantly improve both the quality of your work and the speed at which you complete it. Taking the time to think through your options will lead to better results.\nContext recap: Before you start working on a project, it's helpful to use tradeoff analysis to organize your approach. Planning ahead can significantly improve both the quality of your work and the speed at which you complete it. Taking the time to think through your options will lead to better results."
        },
        {
          "id": "general-science-301-l07-c2",
          "title": "Decision Rules",
          "content": "When you have to choose between different options, it’s really helpful to follow a simple rule for making decisions. Always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. By using this strategy, you can make smarter choices that are more likely to help you reach your goals and succeed in what you are trying to do.\nContext recap: When you have to choose between different options, it’s really helpful to follow a simple rule for making decisions. Always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. By using this strategy, you can make smarter choices that are more likely to help you reach your goals and succeed in what you are trying to do."
        },
        {
          "id": "general-science-301-l07-c3",
          "title": "Quality Control",
          "content": "As you work on your projects, remember to check for three important things: accuracy, completeness, and alignment with your original objective. By ensuring that your work meets these criteria, you can maintain high standards and achieve your goals more effectively.\nContext recap: As you work on your projects, remember to check for three important things: accuracy, completeness, and alignment with your original objective. By ensuring that your work meets these criteria, you can maintain high standards and achieve your goals more effectively."
        },
        {
          "id": "general-science-301-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your practice round, take a moment to write down one action you would like to repeat and one action you would like to improve in your next attempt. This reflection will help you grow and develop your skills over time.\nContext recap: After completing your practice round, take a moment to write down one action you would like to repeat and one action you would like to improve in your next attempt. This reflection will help you grow and develop your skills over time."
        }
      ],
      "flashcards": [
        {
          "id": "general-science-301-l07-f1",
          "front": "tradeoff analysis",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "general-science-301-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "general-science-301-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "general-science-301-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "general-science-301-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on tradeoff analysis."
        }
      ]
    },
    {
      "id": "general-science-301-l08",
      "title": "Design Challenge Studio",
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
          "id": "general-science-301-l08-ia1",
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
          "id": "general-science-301-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "general-science-301-l09",
      "title": "Review: Science-Engineering Workflow",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-301-l09-q1",
          "text": "Which statement best explains engineering constraints in Science?",
          "skillId": "general-science-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains engineering constraints using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how engineering constraints works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Science."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-301-l09-q2",
          "text": "What is the best first step when analyzing tradeoff analysis?",
          "skillId": "general-science-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for tradeoff analysis."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to tradeoff analysis."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-301-l09-q3",
          "text": "Which option shows strong reasoning about science and engineering integration?",
          "skillId": "general-science-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to science and engineering integration."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-301-l09-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-301-skill-review",
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
          "id": "general-science-301-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Science-Engineering Workflow",
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
                "label": "Confusion about engineering constraints"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to tradeoff analysis"
              },
              {
                "id": "l3",
                "label": "Weak transfer of science and engineering integration under timing"
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
          "id": "general-science-301-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-science-301-l10",
      "title": "Mastery: Science Systems",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-301-l10-q1",
          "text": "Which statement best explains systems thinking in Science?",
          "skillId": "general-science-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains systems thinking using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how systems thinking works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Science."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-301-l10-q2",
          "text": "What is the best first step when analyzing evidence-based iteration?",
          "skillId": "general-science-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for evidence-based iteration."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to evidence-based iteration."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-301-l10-q3",
          "text": "Which option shows strong reasoning about science and engineering integration?",
          "skillId": "general-science-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to science and engineering integration."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-301-l10-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-301-skill-review",
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
          "id": "general-science-301-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Science Systems",
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
                "label": "Confusion about systems thinking"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to evidence-based iteration"
              },
              {
                "id": "l3",
                "label": "Weak transfer of science and engineering integration under timing"
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
          "id": "general-science-301-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-science-301-l11",
      "title": "Applied Science Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using evidence-based iteration.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "general-science-301-l11-ia1",
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
                "label": "Tag repeated mistakes in engineering constraints",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on tradeoff analysis",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "general-science-301-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "general-science-301-l12",
      "title": "Science Systems Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-301-l12-q1",
          "text": "Which statement best explains systems thinking in Science?",
          "skillId": "general-science-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains systems thinking using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how systems thinking works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Science."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-301-l12-q2",
          "text": "What is the best first step when analyzing tradeoff analysis?",
          "skillId": "general-science-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for tradeoff analysis."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to tradeoff analysis."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-301-l12-q3",
          "text": "Which option shows strong reasoning about science and engineering integration?",
          "skillId": "general-science-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to science and engineering integration."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-301-l12-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-301-skill-review",
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
          "id": "general-science-301-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Science Systems Mastery Applied Retest",
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
                "label": "Confusion about systems thinking"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to tradeoff analysis"
              },
              {
                "id": "l3",
                "label": "Weak transfer of science and engineering integration under timing"
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
          "id": "general-science-301-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-science-301-l13",
      "title": "Science Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "general-science-301-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, we will explore how to think like a scientist by using systems thinking, which means understanding how different parts work together. We will also learn about evidence-based iteration, which is about making improvements based on what we observe. Finally, we will practice tradeoff analysis, where we weigh the pros and cons of different choices. This challenge will help us apply these important concepts in a fun and engaging way!\nContext recap: In this exciting scenario, we will explore how to think like a scientist by using systems thinking, which means understanding how different parts work together. We will also learn about evidence-based iteration, which is about making improvements based on what we observe. Finally, we will practice tradeoff analysis, where we weigh the pros and cons of different choices. This challenge will help us apply these important concepts in a fun and engaging way!"
        },
        {
          "id": "general-science-301-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, we should start by breaking it down into smaller, manageable decisions. This means identifying each step we need to take. Once we have these steps, we can assign a specific strategy or approach to each decision point. This organized method will help us stay focused and make better choices as we work through the challenge.\nContext recap: To tackle this scenario effectively, we should start by breaking it down into smaller, manageable decisions. This means identifying each step we need to take. Once we have these steps, we can assign a specific strategy or approach to each decision point. This organized method will help us stay focused and make better choices as we work through the challenge."
        },
        {
          "id": "general-science-301-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's time to put our plan into action! As we execute our strategies, we need to explain each move we make. It's important to support our decisions with evidence, which means using facts and observations rather than just guessing. This will help us understand why we are making each choice and how it contributes to solving the scenario.\nContext recap: Now it's time to put our plan into action! As we execute our strategies, we need to explain each move we make. It's important to support our decisions with evidence, which means using facts and observations rather than just guessing. This will help us understand why we are making each choice and how it contributes to solving the scenario."
        },
        {
          "id": "general-science-301-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After we have completed our scenario, we need to evaluate the outcome. This means comparing our results to the original target we aimed for. We should identify what worked well and what didn’t. By doing this, we can determine which parts of our approach we should keep and which ones we might need to adjust for better results in the future.\nContext recap: After we have completed our scenario, we need to evaluate the outcome. This means comparing our results to the original target we aimed for. We should identify what worked well and what didn’t. By doing this, we can determine which parts of our approach we should keep and which ones we might need to adjust for better results in the future."
        }
      ],
      "flashcards": [
        {
          "id": "general-science-301-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "general-science-301-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "general-science-301-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "general-science-301-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "general-science-301-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting systems thinking, evidence-based iteration, and tradeoff analysis."
        },
        {
          "id": "general-science-301-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "general-science-301-l14",
      "title": "Science Coaching Clinic",
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
          "id": "general-science-301-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on systems thinking setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed tradeoff analysis decisions"
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
          "id": "general-science-301-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "general-science-301-l15",
      "title": "Science Systems Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-301-l15-q1",
          "text": "Which statement best explains engineering constraints in Science?",
          "skillId": "general-science-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains engineering constraints using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how engineering constraints works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Science."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-301-l15-q2",
          "text": "What is the best first step when analyzing evidence-based iteration?",
          "skillId": "general-science-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for evidence-based iteration."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to evidence-based iteration."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-301-l15-q3",
          "text": "Which option shows strong reasoning about science and engineering integration?",
          "skillId": "general-science-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to science and engineering integration."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-301-l15-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-301-skill-review",
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
          "id": "general-science-301-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Science Systems Mastery Mastery Sprint",
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
                "label": "Confusion about engineering constraints"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to evidence-based iteration"
              },
              {
                "id": "l3",
                "label": "Weak transfer of science and engineering integration under timing"
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
          "id": "general-science-301-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
