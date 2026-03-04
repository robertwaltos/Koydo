import type { LearningModule } from "@/lib/modules/types";

export const LanguageArts401Module: LearningModule = {
  "id": "language-arts-401",
  "title": "Language Arts Capstone Communication",
  "description": "Integrate reading, rhetoric, and writing craft into polished multi-genre communication.",
  "subject": "Language Arts",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Language Arts",
    "Apply Capstone Writing Quality strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "language-arts-401-l01",
      "title": "Rhetorical Strategy Design",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "language-arts-401-l01-c1",
          "title": "Rhetorical Strategy Design Overview",
          "content": "In this lesson, we will dive into the fascinating world of rhetorical strategies, which are essential tools that help us communicate effectively. Rhetorical strategies are techniques that speakers and writers use to persuade their audience and convey their messages clearly. We will examine how these strategies connect to capstone communication and the art of rhetoric, which is the study of effective speaking and writing. Our main goal is to learn how to recognize strong reasoning in arguments. By doing this, we will enhance our critical thinking skills and become better problem solvers. Understanding these concepts will empower us to express our ideas more clearly and persuasively in our own communication."
        },
        {
          "id": "language-arts-401-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will explore how rhetorical strategies and text synthesis come together to form compelling arguments. To begin, we will identify the main target or goal of our communication. This is the central idea we want to convey to our audience. After that, we will look for the evidence or steps that support this goal. This means finding facts, examples, or reasons that strengthen our message. By following this process, we can create strong and persuasive messages that truly connect with our audience and make our ideas clear and impactful."
        },
        {
          "id": "language-arts-401-l01-c3",
          "title": "Worked Example",
          "content": "Let's explore a guided example together! First, we will clearly define our goal. This means we will decide what we want to achieve with our writing. Next, we will use a special strategy to synthesize the text. Synthesis is a fancy word that means we will combine different pieces of information to create a strong argument. Finally, we will do a quick check to make sure our reasoning is solid and our message is easy to understand. This process will help us become better communicators!\nContext recap: Let's explore a guided example together! First, we will clearly define our goal. This means we will decide what we want to achieve with our writing. Next, we will use a special strategy to synthesize the text.\nWhy this matters: Worked Example helps learners in Language Arts connect ideas from Language Arts Capstone Communication to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "language-arts-401-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to shine! Take the same steps we just explored and apply them to a new situation. As you do this, be sure to explain why your approach makes sense in one clear and simple sentence. This exercise will not only help you practice your reasoning skills but also strengthen your understanding of how to build strong and convincing arguments. Remember, clear communication is key to sharing your ideas effectively!\nContext recap: Now it's your turn to shine! Take the same steps we just explored and apply them to a new situation. As you do this, be sure to explain why your approach makes sense in one clear and simple sentence. This exercise will not only help you practice your reasoning skills but also strengthen your understanding of how to build strong and convincing arguments."
        }
      ],
      "flashcards": [
        {
          "id": "language-arts-401-l01-f1",
          "front": "rhetorical strategy",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "language-arts-401-l01-f2",
          "front": "text synthesis",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "language-arts-401-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "language-arts-401-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-401-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about rhetorical strategy and text synthesis."
        },
        {
          "id": "language-arts-401-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Language Arts vocabulary."
        }
      ]
    },
    {
      "id": "language-arts-401-l02",
      "title": "Synthesizing Multiple Texts",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about rhetorical strategy from this lesson.",
          "Explain where text synthesis appears in real life.",
          "Describe one question you still have about capstone communication and rhetoric."
        ]
      },
      "interactiveActivities": [
        {
          "id": "language-arts-401-l02-ia1",
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
                "label": "Set a goal for rhetorical strategy",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for text synthesis",
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
          "id": "language-arts-401-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on text synthesis and write one reflection."
        }
      ]
    },
    {
      "id": "language-arts-401-l03",
      "title": "Checkpoint: Advanced Synthesis",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-401-l03-q1",
          "text": "Which statement best explains rhetorical strategy in Language Arts?",
          "skillId": "language-arts-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains rhetorical strategy using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how rhetorical strategy works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Language Arts."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-401-l03-q2",
          "text": "What is the best first step when analyzing text synthesis?",
          "skillId": "language-arts-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for text synthesis."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to text synthesis."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-401-l03-q3",
          "text": "Which option shows strong reasoning about capstone communication and rhetoric?",
          "skillId": "language-arts-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone communication and rhetoric."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-401-l03-q4",
          "text": "Why is spaced review useful for Language Arts mastery?",
          "skillId": "language-arts-401-skill-review",
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
          "id": "language-arts-401-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Advanced Synthesis",
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
                "label": "Confusion about rhetorical strategy"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to text synthesis"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone communication and rhetoric under timing"
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
          "id": "language-arts-401-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "language-arts-401-l04",
      "title": "Argument Architecture at Scale",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "language-arts-401-l04-c1",
          "title": "Argument Architecture at Scale Focus",
          "content": "In this lesson, we will take a deeper look at argument architecture, which involves using structured reasoning to build strong arguments. We will move from simply understanding concepts to making applied decisions that can enhance our communication skills. This will help us create more effective and persuasive arguments in our writing and speaking.\nContext recap: In this lesson, we will take a deeper look at argument architecture, which involves using structured reasoning to build strong arguments. We will move from simply understanding concepts to making applied decisions that can enhance our communication skills. This will help us create more effective and persuasive arguments in our writing and speaking."
        },
        {
          "id": "language-arts-401-l04-c2",
          "title": "Method Steps",
          "content": "Here are the steps we will follow to build our arguments effectively: Step 1: Identify what is being asked in the task or question. Step 2: Choose a strategy that aligns with the principles of argument architecture. Step 3: Justify your argument with solid evidence that supports your claims. Following these steps will help you create well-structured arguments.\nContext recap: Here are the steps we will follow to build our arguments effectively: Step 1: Identify what is being asked in the task or question. Step 2: Choose a strategy that aligns with the principles of argument architecture. Step 3: Justify your argument with solid evidence that supports your claims. Following these steps will help you create well-structured arguments."
        },
        {
          "id": "language-arts-401-l04-c3",
          "title": "Common Mistakes",
          "content": "As we work on our arguments, it's important to be aware of common mistakes that can weaken our reasoning. Some frequent errors include skipping the setup of our argument, using unrelated assumptions, or failing to verify the final result. By recognizing these pitfalls, we can improve our argumentation skills and create stronger, more convincing messages.\nContext recap: As we work on our arguments, it's important to be aware of common mistakes that can weaken our reasoning. Some frequent errors include skipping the setup of our argument, using unrelated assumptions, or failing to verify the final result. By recognizing these pitfalls, we can improve our argumentation skills and create stronger, more convincing messages."
        },
        {
          "id": "language-arts-401-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar problem on your own! After you complete the task, take a moment to compare your process to the lesson sequence we discussed. This reflection will help you understand what you did well and where you can improve in your argument-building skills.\nContext recap: Now, it's time for you to try solving a similar problem on your own! After you complete the task, take a moment to compare your process to the lesson sequence we discussed. This reflection will help you understand what you did well and where you can improve in your argument-building skills."
        }
      ],
      "flashcards": [
        {
          "id": "language-arts-401-l04-f1",
          "front": "argument architecture",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "language-arts-401-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "language-arts-401-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "language-arts-401-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-401-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for argument architecture scenarios."
        }
      ]
    },
    {
      "id": "language-arts-401-l05",
      "title": "Precision Editing for Audience",
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
          "id": "language-arts-401-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "argument architecture Concept"
              },
              {
                "id": "process",
                "label": "editing for audience Process"
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
          "id": "language-arts-401-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a argument architecture challenge."
        }
      ]
    },
    {
      "id": "language-arts-401-l06",
      "title": "Checkpoint: Capstone Writing Quality",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-401-l06-q1",
          "text": "Which statement best explains argument architecture in Language Arts?",
          "skillId": "language-arts-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains argument architecture using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how argument architecture works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Language Arts."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-401-l06-q2",
          "text": "What is the best first step when analyzing editing for audience?",
          "skillId": "language-arts-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for editing for audience."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to editing for audience."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-401-l06-q3",
          "text": "Which option shows strong reasoning about capstone communication and rhetoric?",
          "skillId": "language-arts-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone communication and rhetoric."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-401-l06-q4",
          "text": "Why is spaced review useful for Language Arts mastery?",
          "skillId": "language-arts-401-skill-review",
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
          "id": "language-arts-401-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Capstone Writing Quality",
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
                "label": "Confusion about argument architecture"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to editing for audience"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone communication and rhetoric under timing"
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
          "id": "language-arts-401-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "language-arts-401-l07",
      "title": "Voice, Style, and Purpose",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "language-arts-401-l07-c1",
          "title": "Voice, Style, and Purpose Setup",
          "content": "Before you start writing, it's essential to use editing techniques that consider your audience. Organizing your approach ahead of time can significantly improve both the quality and speed of your writing. Planning allows you to focus on your message and ensures that it resonates with the people you are trying to reach.\nContext recap: Before you start writing, it's essential to use editing techniques that consider your audience. Organizing your approach ahead of time can significantly improve both the quality and speed of your writing. Planning allows you to focus on your message and ensures that it resonates with the people you are trying to reach."
        },
        {
          "id": "language-arts-401-l07-c2",
          "title": "Decision Rules",
          "content": "When you face multiple choices in your writing, it's helpful to use a simple decision-making rule: always choose the option that has the strongest evidence and the clearest connection to your goal. This strategy will guide you in making effective choices that enhance your writing and help you achieve your objectives.\nContext recap: When you face multiple choices in your writing, it's helpful to use a simple decision-making rule: always choose the option that has the strongest evidence and the clearest connection to your goal. This strategy will guide you in making effective choices that enhance your writing and help you achieve your objectives."
        },
        {
          "id": "language-arts-401-l07-c3",
          "title": "Quality Control",
          "content": "As you review your work, check for three important aspects: accuracy, completeness, and alignment with your original objective. Ensuring that your writing meets these criteria will help you maintain high standards and produce clear, effective communication.\nContext recap: As you review your work, check for three important aspects: accuracy, completeness, and alignment with your original objective. Ensuring that your writing meets these criteria will help you maintain high standards and produce clear, effective communication.\nWhy this matters: Quality Control helps learners in Language Arts connect ideas from Language Arts Capstone Communication to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "language-arts-401-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your writing practice, take a moment to create a next-step plan. Write down one action you want to repeat in your next round of practice and one action you would like to improve. This reflection will help you grow as a writer and continuously enhance your skills.\nContext recap: After completing your writing practice, take a moment to create a next-step plan. Write down one action you want to repeat in your next round of practice and one action you would like to improve. This reflection will help you grow as a writer and continuously enhance your skills."
        }
      ],
      "flashcards": [
        {
          "id": "language-arts-401-l07-f1",
          "front": "editing for audience",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "language-arts-401-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "language-arts-401-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "language-arts-401-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-401-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on editing for audience."
        }
      ]
    },
    {
      "id": "language-arts-401-l08",
      "title": "Communication Portfolio Studio",
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
          "id": "language-arts-401-l08-ia1",
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
          "id": "language-arts-401-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "language-arts-401-l09",
      "title": "Review: High-Impact Writing",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-401-l09-q1",
          "text": "Which statement best explains text synthesis in Language Arts?",
          "skillId": "language-arts-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains text synthesis using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how text synthesis works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Language Arts."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-401-l09-q2",
          "text": "What is the best first step when analyzing editing for audience?",
          "skillId": "language-arts-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for editing for audience."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to editing for audience."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-401-l09-q3",
          "text": "Which option shows strong reasoning about capstone communication and rhetoric?",
          "skillId": "language-arts-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone communication and rhetoric."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-401-l09-q4",
          "text": "Why is spaced review useful for Language Arts mastery?",
          "skillId": "language-arts-401-skill-review",
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
          "id": "language-arts-401-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: High-Impact Writing",
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
                "label": "Confusion about text synthesis"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to editing for audience"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone communication and rhetoric under timing"
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
          "id": "language-arts-401-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "language-arts-401-l10",
      "title": "Mastery: Language Arts IV",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-401-l10-q1",
          "text": "Which statement best explains rhetorical strategy in Language Arts?",
          "skillId": "language-arts-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains rhetorical strategy using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how rhetorical strategy works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Language Arts."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-401-l10-q2",
          "text": "What is the best first step when analyzing argument architecture?",
          "skillId": "language-arts-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for argument architecture."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to argument architecture."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-401-l10-q3",
          "text": "Which option shows strong reasoning about capstone communication and rhetoric?",
          "skillId": "language-arts-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone communication and rhetoric."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-401-l10-q4",
          "text": "Why is spaced review useful for Language Arts mastery?",
          "skillId": "language-arts-401-skill-review",
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
          "id": "language-arts-401-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Language Arts IV",
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
                "label": "Confusion about rhetorical strategy"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to argument architecture"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone communication and rhetoric under timing"
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
          "id": "language-arts-401-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "language-arts-401-l11",
      "title": "Applied Language Arts Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using argument architecture.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "language-arts-401-l11-ia1",
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
                "label": "Tag repeated mistakes in text synthesis",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on editing for audience",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-401-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "language-arts-401-l12",
      "title": "Language Arts IV Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-401-l12-q1",
          "text": "Which statement best explains rhetorical strategy in Language Arts?",
          "skillId": "language-arts-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains rhetorical strategy using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how rhetorical strategy works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Language Arts."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-401-l12-q2",
          "text": "What is the best first step when analyzing editing for audience?",
          "skillId": "language-arts-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for editing for audience."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to editing for audience."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-401-l12-q3",
          "text": "Which option shows strong reasoning about capstone communication and rhetoric?",
          "skillId": "language-arts-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone communication and rhetoric."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-401-l12-q4",
          "text": "Why is spaced review useful for Language Arts mastery?",
          "skillId": "language-arts-401-skill-review",
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
          "id": "language-arts-401-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Language Arts IV Mastery Applied Retest",
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
                "label": "Confusion about rhetorical strategy"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to editing for audience"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone communication and rhetoric under timing"
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
          "id": "language-arts-401-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "language-arts-401-l13",
      "title": "Language Arts Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "language-arts-401-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, you will explore how to use different rhetorical strategies, build strong arguments, and edit your work to suit your audience. This challenge will help you apply these important skills in a fun and engaging way, allowing you to see how they work together in real-life situations.\nContext recap: In this exciting scenario, you will explore how to use different rhetorical strategies, build strong arguments, and edit your work to suit your audience. This challenge will help you apply these important skills in a fun and engaging way, allowing you to see how they work together in real-life situations."
        },
        {
          "id": "language-arts-401-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. For each decision point, think about which strategy would work best. This approach will help you organize your thoughts and make clearer choices as you move forward in your project.\nContext recap: To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. For each decision point, think about which strategy would work best. This approach will help you organize your thoughts and make clearer choices as you move forward in your project."
        },
        {
          "id": "language-arts-401-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's time to put your plan into action! As you execute each step, be sure to explain your reasoning behind every choice you make. Use evidence to support your decisions rather than making guesses. This will strengthen your argument and show that you have thought carefully about your approach.\nContext recap: Now it's time to put your plan into action! As you execute each step, be sure to explain your reasoning behind every choice you make. Use evidence to support your decisions rather than making guesses. This will strengthen your argument and show that you have thought carefully about your approach."
        },
        {
          "id": "language-arts-401-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After you have completed your scenario, take a moment to evaluate the outcome. Compare what you achieved with your original goals. Identify which parts of your work were successful and should be kept, and which areas might need some adjustments. This reflection will help you improve your skills for future projects.\nContext recap: After you have completed your scenario, take a moment to evaluate the outcome. Compare what you achieved with your original goals. Identify which parts of your work were successful and should be kept, and which areas might need some adjustments. This reflection will help you improve your skills for future projects."
        }
      ],
      "flashcards": [
        {
          "id": "language-arts-401-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "language-arts-401-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "language-arts-401-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "language-arts-401-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-401-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting rhetorical strategy, argument architecture, and editing for audience."
        },
        {
          "id": "language-arts-401-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "language-arts-401-l14",
      "title": "Language Arts Coaching Clinic",
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
          "id": "language-arts-401-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on rhetorical strategy setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed editing for audience decisions"
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
          "id": "language-arts-401-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "language-arts-401-l15",
      "title": "Language Arts IV Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-401-l15-q1",
          "text": "Which statement best explains text synthesis in Language Arts?",
          "skillId": "language-arts-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains text synthesis using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how text synthesis works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Language Arts."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-401-l15-q2",
          "text": "What is the best first step when analyzing argument architecture?",
          "skillId": "language-arts-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for argument architecture."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to argument architecture."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-401-l15-q3",
          "text": "Which option shows strong reasoning about capstone communication and rhetoric?",
          "skillId": "language-arts-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone communication and rhetoric."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-401-l15-q4",
          "text": "Why is spaced review useful for Language Arts mastery?",
          "skillId": "language-arts-401-skill-review",
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
          "id": "language-arts-401-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Language Arts IV Mastery Mastery Sprint",
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
                "label": "Confusion about text synthesis"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to argument architecture"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone communication and rhetoric under timing"
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
          "id": "language-arts-401-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
