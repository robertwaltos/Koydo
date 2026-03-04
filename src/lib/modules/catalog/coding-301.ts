import type { LearningModule } from "@/lib/modules/types";

export const Coding301Module: LearningModule = {
  "id": "coding-301",
  "title": "Coding Architecture and Quality",
  "description": "Write maintainable code with modular architecture, testing, and performance-aware design.",
  "subject": "Coding",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Coding",
    "Apply Reliability and Correctness strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "coding-301-l01",
      "title": "Modular Architecture Basics",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "coding-301-l01-c1",
          "title": "Modular Architecture Basics Overview",
          "content": "In this lesson, we will dive into the fascinating world of modularity in software architecture and quality. Modularity is all about breaking down big ideas into smaller, easier-to-handle pieces. This way, we can tackle complex problems step by step! Our main goal is to learn how to recognize strong reasoning skills. These skills are super important because they help us think clearly and solve problems more effectively. By understanding how to organize our coding projects into smaller modules, we can make them not only easier to understand but also simpler to maintain and improve over time. Let's get ready to enhance our coding skills together!"
        },
        {
          "id": "coding-301-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will discuss how modularity and test design work hand in hand to create better software. First, we will identify the main goal of our project. Next, we will outline the evidence or steps that support this goal. This process will help us ensure that our design is solid and that we can test it effectively to see if it meets our expectations.\nContext recap: In this section, we will discuss how modularity and test design work hand in hand to create better software. First, we will identify the main goal of our project. Next, we will outline the evidence or steps that support this goal. This process will help us ensure that our design is solid and that we can test it effectively to see if it meets our expectations."
        },
        {
          "id": "coding-301-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! First, we will define our goal clearly. Then, we will apply a strategy for designing our tests. Finally, we will verify our results with a quick check to see if everything works as intended. This step-by-step approach will help us understand how to apply what we've learned in real coding situations.\nContext recap: Let's walk through a guided example together! First, we will define our goal clearly. Then, we will apply a strategy for designing our tests. Finally, we will verify our results with a quick check to see if everything works as intended.\nWhy this matters: Worked Example helps learners in Coding connect ideas from Coding Architecture and Quality to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "coding-301-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to shine! Take the process we just learned and use it in a new situation. Once you finish, write one clear sentence explaining why your approach makes sense. This activity will not only help you strengthen your understanding but also boost your confidence in applying these skills in various scenarios. Remember, practice makes perfect!\nContext recap: Now it's your turn to shine! Take the process we just learned and use it in a new situation. Once you finish, write one clear sentence explaining why your approach makes sense. This activity will not only help you strengthen your understanding but also boost your confidence in applying these skills in various scenarios."
        }
      ],
      "flashcards": [
        {
          "id": "coding-301-l01-f1",
          "front": "modularity",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "coding-301-l01-f2",
          "front": "test design",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "coding-301-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "coding-301-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "coding-301-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about modularity and test design."
        },
        {
          "id": "coding-301-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Coding vocabulary."
        }
      ]
    },
    {
      "id": "coding-301-l02",
      "title": "Designing Reliable Tests",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about modularity from this lesson.",
          "Explain where test design appears in real life.",
          "Describe one question you still have about software architecture and quality."
        ]
      },
      "interactiveActivities": [
        {
          "id": "coding-301-l02-ia1",
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
                "label": "Set a goal for modularity",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for test design",
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
          "id": "coding-301-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on test design and write one reflection."
        }
      ]
    },
    {
      "id": "coding-301-l03",
      "title": "Checkpoint: Code Quality Foundations",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "coding-301-l03-q1",
          "text": "Which statement best explains modularity in Coding?",
          "skillId": "coding-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains modularity using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how modularity works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Coding."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l03-q2",
          "text": "What is the best first step when analyzing test design?",
          "skillId": "coding-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for test design."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to test design."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l03-q3",
          "text": "Which option shows strong reasoning about software architecture and quality?",
          "skillId": "coding-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to software architecture and quality."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l03-q4",
          "text": "Why is spaced review useful for Coding mastery?",
          "skillId": "coding-301-skill-review",
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
          "id": "coding-301-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Code Quality Foundations",
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
                "label": "Confusion about modularity"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to test design"
              },
              {
                "id": "l3",
                "label": "Weak transfer of software architecture and quality under timing"
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
          "id": "coding-301-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "coding-301-l04",
      "title": "State, Side Effects, and Control Flow",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "coding-301-l04-c1",
          "title": "State, Side Effects, and Control Flow Focus",
          "content": "In this lesson, we will take a deeper look at the concepts of state and side effects using structured reasoning. We will move beyond just understanding these ideas to making informed decisions based on them. This will help us create more effective and reliable code by considering how changes in state can affect our programs.\nContext recap: In this lesson, we will take a deeper look at the concepts of state and side effects using structured reasoning. We will move beyond just understanding these ideas to making informed decisions based on them. This will help us create more effective and reliable code by considering how changes in state can affect our programs."
        },
        {
          "id": "coding-301-l04-c2",
          "title": "Method Steps",
          "content": "Let's explore the important steps we need to take when working on coding problems. Step 1: First, we need to clearly identify what the problem is asking us to do. This means understanding the question fully before we start. Step 2: Next, we should choose a strategy that fits well with our knowledge about state and side effects in coding. This helps us think about how our code will behave. Step 3: Finally, we need to justify our choices by providing evidence that supports our reasoning. This means explaining why we think our approach is the best one. By following these steps, we can make smarter decisions in our coding projects and improve our skills!"
        },
        {
          "id": "coding-301-l04-c3",
          "title": "Common Mistakes",
          "content": "It's important to be aware of common mistakes that can happen during this process. Some frequent errors include skipping the setup phase, using assumptions that are not related to the problem, or failing to verify the final result. By recognizing these pitfalls, you can avoid them and improve your coding skills.\nContext recap: It's important to be aware of common mistakes that can happen during this process. Some frequent errors include skipping the setup phase, using assumptions that are not related to the problem, or failing to verify the final result. By recognizing these pitfalls, you can avoid them and improve your coding skills."
        },
        {
          "id": "coding-301-l04-c4",
          "title": "Independent Try",
          "content": "Now, I challenge you to solve a similar problem on your own! After you complete it, take a moment to compare your process with the steps we discussed in the lesson. This will help you see how well you understood the material and where you might need to improve.\nContext recap: Now, I challenge you to solve a similar problem on your own! After you complete it, take a moment to compare your process with the steps we discussed in the lesson. This will help you see how well you understood the material and where you might need to improve."
        }
      ],
      "flashcards": [
        {
          "id": "coding-301-l04-f1",
          "front": "state and side effects",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "coding-301-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "coding-301-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "coding-301-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "coding-301-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for state and side effects scenarios."
        }
      ]
    },
    {
      "id": "coding-301-l05",
      "title": "Debugging with Hypothesis Testing",
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
          "id": "coding-301-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "state and side effects Concept"
              },
              {
                "id": "process",
                "label": "performance tradeoffs Process"
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
          "id": "coding-301-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a state and side effects challenge."
        }
      ]
    },
    {
      "id": "coding-301-l06",
      "title": "Checkpoint: Reliability and Correctness",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "coding-301-l06-q1",
          "text": "Which statement best explains state and side effects in Coding?",
          "skillId": "coding-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains state and side effects using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how state and side effects works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Coding."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l06-q2",
          "text": "What is the best first step when analyzing performance tradeoffs?",
          "skillId": "coding-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for performance tradeoffs."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to performance tradeoffs."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l06-q3",
          "text": "Which option shows strong reasoning about software architecture and quality?",
          "skillId": "coding-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to software architecture and quality."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l06-q4",
          "text": "Why is spaced review useful for Coding mastery?",
          "skillId": "coding-301-skill-review",
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
          "id": "coding-301-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Reliability and Correctness",
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
                "label": "Confusion about state and side effects"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to performance tradeoffs"
              },
              {
                "id": "l3",
                "label": "Weak transfer of software architecture and quality under timing"
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
          "id": "coding-301-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "coding-301-l07",
      "title": "Performance and Readability Tradeoffs",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "coding-301-l07-c1",
          "title": "Performance and Readability Tradeoffs Setup",
          "content": "Before you start coding, it's essential to consider performance tradeoffs to organize your approach. Planning ahead can significantly improve both the quality of your code and the speed at which you can complete your tasks. Taking the time to think through your strategy will lead to better outcomes.\nContext recap: Before you start coding, it's essential to consider performance tradeoffs to organize your approach. Planning ahead can significantly improve both the quality of your code and the speed at which you can complete your tasks. Taking the time to think through your strategy will lead to better outcomes."
        },
        {
          "id": "coding-301-l07-c2",
          "title": "Decision Rules",
          "content": "When you have to choose between different options, it can be tricky! A great way to make your decision easier is to follow a simple rule: always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. This strategy will not only help you make better choices in your coding projects but also guide you toward reaching your goals more effectively. Remember, good decisions lead to great results!\nContext recap: When you have to choose between different options, it can be tricky! A great way to make your decision easier is to follow a simple rule: always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. This strategy will not only help you make better choices in your coding projects but also guide you toward reaching your goals more effectively. Remember, good decisions lead to great results!"
        },
        {
          "id": "coding-301-l07-c3",
          "title": "Quality Control",
          "content": "As you review your work, check for three important things: accuracy, completeness, and alignment with your original objective. Ensuring that your code meets these criteria will help you maintain high standards and produce quality results in your projects.\nContext recap: As you review your work, check for three important things: accuracy, completeness, and alignment with your original objective. Ensuring that your code meets these criteria will help you maintain high standards and produce quality results in your projects."
        },
        {
          "id": "coding-301-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your practice round, write down one action that you would like to repeat in your next session and one action that you want to improve. This reflection will help you grow as a coder and make your future practice more effective.\nContext recap: After completing your practice round, write down one action that you would like to repeat in your next session and one action that you want to improve. This reflection will help you grow as a coder and make your future practice more effective."
        }
      ],
      "flashcards": [
        {
          "id": "coding-301-l07-f1",
          "front": "performance tradeoffs",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "coding-301-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "coding-301-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "coding-301-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "coding-301-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on performance tradeoffs."
        }
      ]
    },
    {
      "id": "coding-301-l08",
      "title": "Refactor Sprint Workshop",
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
          "id": "coding-301-l08-ia1",
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
          "id": "coding-301-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "coding-301-l09",
      "title": "Review: Engineering Habits",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "coding-301-l09-q1",
          "text": "Which statement best explains test design in Coding?",
          "skillId": "coding-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains test design using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how test design works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Coding."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l09-q2",
          "text": "What is the best first step when analyzing performance tradeoffs?",
          "skillId": "coding-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for performance tradeoffs."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to performance tradeoffs."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l09-q3",
          "text": "Which option shows strong reasoning about software architecture and quality?",
          "skillId": "coding-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to software architecture and quality."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l09-q4",
          "text": "Why is spaced review useful for Coding mastery?",
          "skillId": "coding-301-skill-review",
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
          "id": "coding-301-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Engineering Habits",
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
                "label": "Confusion about test design"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to performance tradeoffs"
              },
              {
                "id": "l3",
                "label": "Weak transfer of software architecture and quality under timing"
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
          "id": "coding-301-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "coding-301-l10",
      "title": "Mastery: Coding III",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "coding-301-l10-q1",
          "text": "Which statement best explains modularity in Coding?",
          "skillId": "coding-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains modularity using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how modularity works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Coding."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l10-q2",
          "text": "What is the best first step when analyzing state and side effects?",
          "skillId": "coding-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for state and side effects."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to state and side effects."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l10-q3",
          "text": "Which option shows strong reasoning about software architecture and quality?",
          "skillId": "coding-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to software architecture and quality."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l10-q4",
          "text": "Why is spaced review useful for Coding mastery?",
          "skillId": "coding-301-skill-review",
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
          "id": "coding-301-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Coding III",
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
                "label": "Confusion about modularity"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to state and side effects"
              },
              {
                "id": "l3",
                "label": "Weak transfer of software architecture and quality under timing"
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
          "id": "coding-301-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "coding-301-l11",
      "title": "Applied Coding Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using state and side effects.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "coding-301-l11-ia1",
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
                "label": "Tag repeated mistakes in test design",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on performance tradeoffs",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "coding-301-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "coding-301-l12",
      "title": "Coding III Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "coding-301-l12-q1",
          "text": "Which statement best explains modularity in Coding?",
          "skillId": "coding-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains modularity using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how modularity works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Coding."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l12-q2",
          "text": "What is the best first step when analyzing performance tradeoffs?",
          "skillId": "coding-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for performance tradeoffs."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to performance tradeoffs."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l12-q3",
          "text": "Which option shows strong reasoning about software architecture and quality?",
          "skillId": "coding-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to software architecture and quality."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l12-q4",
          "text": "Why is spaced review useful for Coding mastery?",
          "skillId": "coding-301-skill-review",
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
          "id": "coding-301-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Coding III Mastery Applied Retest",
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
                "label": "Confusion about modularity"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to performance tradeoffs"
              },
              {
                "id": "l3",
                "label": "Weak transfer of software architecture and quality under timing"
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
          "id": "coding-301-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "coding-301-l13",
      "title": "Coding Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "coding-301-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, we will explore important concepts like modularity, which helps us break our code into smaller, manageable parts. We will also look at state and side effects, which are how our code interacts with the world around it. Finally, we will consider performance tradeoffs, which means understanding the balance between how fast our code runs and how much memory it uses. This challenge will help you apply these ideas in a fun and practical way!\nContext recap: In this exciting scenario, we will explore important concepts like modularity, which helps us break our code into smaller, manageable parts. We will also look at state and side effects, which are how our code interacts with the world around it. Finally, we will consider performance tradeoffs, which means understanding the balance between how fast our code runs and how much memory it uses. This challenge will help you apply these ideas in a fun and practical way!"
        },
        {
          "id": "coding-301-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, start by breaking it down into smaller, more manageable decisions. Think of each decision point as a puzzle piece that needs a specific strategy to fit perfectly. By assigning a clear approach to each piece, you will create a well-organized plan that will guide you through the challenge step by step. This method will help you stay focused and make better choices as you work through the scenario.\nContext recap: To tackle this scenario effectively, start by breaking it down into smaller, more manageable decisions. Think of each decision point as a puzzle piece that needs a specific strategy to fit perfectly. By assigning a clear approach to each piece, you will create a well-organized plan that will guide you through the challenge step by step. This method will help you stay focused and make better choices as you work through the scenario."
        },
        {
          "id": "coding-301-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's time to put your plan into action! As you execute each step, make sure to explain your reasoning clearly. Instead of making guesses, use evidence from your previous decisions to support your choices. This will not only help you understand your own thought process better but also show others how you arrived at your conclusions. Remember, clear explanations are key to effective coding!\nContext recap: Now it's time to put your plan into action! As you execute each step, make sure to explain your reasoning clearly. Instead of making guesses, use evidence from your previous decisions to support your choices. This will not only help you understand your own thought process better but also show others how you arrived at your conclusions."
        },
        {
          "id": "coding-301-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After you have completed your coding task, it's important to evaluate the outcome. Take a moment to compare your results with the original target you aimed for. Identify what aspects of your work were successful and should be kept, as well as any areas that might need adjustments. This reflection will help you learn and improve your coding skills for future challenges!\nContext recap: After you have completed your coding task, it's important to evaluate the outcome. Take a moment to compare your results with the original target you aimed for. Identify what aspects of your work were successful and should be kept, as well as any areas that might need adjustments. This reflection will help you learn and improve your coding skills for future challenges!"
        }
      ],
      "flashcards": [
        {
          "id": "coding-301-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "coding-301-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "coding-301-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "coding-301-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "coding-301-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting modularity, state and side effects, and performance tradeoffs."
        },
        {
          "id": "coding-301-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "coding-301-l14",
      "title": "Coding Coaching Clinic",
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
          "id": "coding-301-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on modularity setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed performance tradeoffs decisions"
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
          "id": "coding-301-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "coding-301-l15",
      "title": "Coding III Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "coding-301-l15-q1",
          "text": "Which statement best explains test design in Coding?",
          "skillId": "coding-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains test design using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how test design works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Coding."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l15-q2",
          "text": "What is the best first step when analyzing state and side effects?",
          "skillId": "coding-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for state and side effects."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to state and side effects."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l15-q3",
          "text": "Which option shows strong reasoning about software architecture and quality?",
          "skillId": "coding-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to software architecture and quality."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l15-q4",
          "text": "Why is spaced review useful for Coding mastery?",
          "skillId": "coding-301-skill-review",
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
          "id": "coding-301-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Coding III Mastery Mastery Sprint",
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
                "label": "Confusion about test design"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to state and side effects"
              },
              {
                "id": "l3",
                "label": "Weak transfer of software architecture and quality under timing"
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
          "id": "coding-301-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
