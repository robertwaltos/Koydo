import type { LearningModule } from "@/lib/modules/types";

export const LanguageArts301Module: LearningModule = {
  "id": "language-arts-301",
  "title": "Language Arts Seminar",
  "description": "Develop close reading, rhetorical analysis, and multi-paragraph argument writing.",
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
    "Apply Argument Coherence strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "language-arts-301-l01",
      "title": "Close Reading of Complex Text",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "language-arts-301-l01-c1",
          "title": "Close Reading of Complex Text Overview",
          "content": "In this lesson, we are going to dive into the exciting skill of close reading! Close reading is a special way to read that helps us understand complex texts much better. We will learn about advanced reading techniques that can make our argument writing even stronger. By focusing on the details in the text, we will discover how to spot strong reasoning. This skill is super important because it will help us solve problems and answer questions based on what we read. So, get ready to sharpen your reading skills and become a better thinker and writer!"
        },
        {
          "id": "language-arts-301-l01-c2",
          "title": "Core Concept",
          "content": "Close reading is a powerful tool that works hand-in-hand with understanding rhetorical devices, which are techniques used by writers to persuade or inform. To start, we will identify the main idea or target of the text. Next, we will look for evidence or specific steps that support this main idea. This process will help us see how different parts of the text connect and strengthen the overall argument.\nContext recap: Close reading is a powerful tool that works hand-in-hand with understanding rhetorical devices, which are techniques used by writers to persuade or inform. To start, we will identify the main idea or target of the text. Next, we will look for evidence or specific steps that support this main idea. This process will help us see how different parts of the text connect and strengthen the overall argument."
        },
        {
          "id": "language-arts-301-l01-c3",
          "title": "Worked Example",
          "content": "Let's go through a guided example together! First, we will define our goal for understanding the text. Then, we will apply a strategy to identify rhetorical devices used by the author. Finally, we will check our understanding by verifying our results with a quick review. This step-by-step approach will help us become more confident in our close reading skills.\nContext recap: Let's go through a guided example together! First, we will define our goal for understanding the text. Then, we will apply a strategy to identify rhetorical devices used by the author. Finally, we will check our understanding by verifying our results with a quick review."
        },
        {
          "id": "language-arts-301-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to apply what you've learned! Take the same close reading process and use it on a new text or scenario. After you analyze it, explain in one clear sentence why your approach is valid. This will help you practice your reasoning skills and show how you can support your ideas with evidence.\nContext recap: Now it's your turn to apply what you've learned! Take the same close reading process and use it on a new text or scenario. After you analyze it, explain in one clear sentence why your approach is valid. This will help you practice your reasoning skills and show how you can support your ideas with evidence."
        }
      ],
      "flashcards": [
        {
          "id": "language-arts-301-l01-f1",
          "front": "close reading",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "language-arts-301-l01-f2",
          "front": "rhetorical devices",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "language-arts-301-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "language-arts-301-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-301-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about close reading and rhetorical devices."
        },
        {
          "id": "language-arts-301-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Language Arts vocabulary."
        }
      ]
    },
    {
      "id": "language-arts-301-l02",
      "title": "Rhetorical Devices and Effect",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about close reading from this lesson.",
          "Explain where rhetorical devices appears in real life.",
          "Describe one question you still have about advanced reading and argument writing."
        ]
      },
      "interactiveActivities": [
        {
          "id": "language-arts-301-l02-ia1",
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
                "label": "Set a goal for close reading",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for rhetorical devices",
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
          "id": "language-arts-301-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on rhetorical devices and write one reflection."
        }
      ]
    },
    {
      "id": "language-arts-301-l03",
      "title": "Checkpoint: Rhetorical Analysis",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-301-l03-q1",
          "text": "Which statement best explains close reading in Language Arts?",
          "skillId": "language-arts-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains close reading using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how close reading works in practice."
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
          "id": "language-arts-301-l03-q2",
          "text": "What is the best first step when analyzing rhetorical devices?",
          "skillId": "language-arts-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for rhetorical devices."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to rhetorical devices."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-301-l03-q3",
          "text": "Which option shows strong reasoning about advanced reading and argument writing?",
          "skillId": "language-arts-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to advanced reading and argument writing."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-301-l03-q4",
          "text": "Why is spaced review useful for Language Arts mastery?",
          "skillId": "language-arts-301-skill-review",
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
          "id": "language-arts-301-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Rhetorical Analysis",
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
                "label": "Confusion about close reading"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to rhetorical devices"
              },
              {
                "id": "l3",
                "label": "Weak transfer of advanced reading and argument writing under timing"
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
          "id": "language-arts-301-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "language-arts-301-l04",
      "title": "Building Multi-Paragraph Arguments",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "language-arts-301-l04-c1",
          "title": "Building Multi-Paragraph Arguments Focus",
          "content": "In this lesson, we will focus on building strong multi-paragraph arguments. We will learn how to create coherence in our arguments by using structured reasoning. This means we will move from simply understanding concepts to making informed decisions based on those concepts. By the end of this lesson, you will be able to express your ideas clearly and logically.\nContext recap: In this lesson, we will focus on building strong multi-paragraph arguments. We will learn how to create coherence in our arguments by using structured reasoning. This means we will move from simply understanding concepts to making informed decisions based on those concepts. By the end of this lesson, you will be able to express your ideas clearly and logically."
        },
        {
          "id": "language-arts-301-l04-c2",
          "title": "Method Steps",
          "content": "Here are the steps we will follow to build our arguments effectively: Step 1 is to identify what is being asked in the prompt or question. Step 2 involves choosing a strategy that aligns with creating a coherent argument. Finally, Step 3 is to support your argument with strong evidence. By following these steps, you will be able to construct well-reasoned arguments.\nContext recap: Here are the steps we will follow to build our arguments effectively: Step 1 is to identify what is being asked in the prompt or question. Step 2 involves choosing a strategy that aligns with creating a coherent argument. Finally, Step 3 is to support your argument with strong evidence. By following these steps, you will be able to construct well-reasoned arguments."
        },
        {
          "id": "language-arts-301-l04-c3",
          "title": "Common Mistakes",
          "content": "As we work on our arguments, it's important to be aware of common mistakes that can weaken our writing. Some of these errors include skipping the initial setup of your argument, using assumptions that are not related to your main point, or failing to check if your final result makes sense. By avoiding these pitfalls, you can strengthen your writing and make your arguments more persuasive.\nContext recap: As we work on our arguments, it's important to be aware of common mistakes that can weaken our writing. Some of these errors include skipping the initial setup of your argument, using assumptions that are not related to your main point, or failing to check if your final result makes sense. By avoiding these pitfalls, you can strengthen your writing and make your arguments more persuasive."
        },
        {
          "id": "language-arts-301-l04-c4",
          "title": "Independent Try",
          "content": "Now it's time for you to try building an argument on your own! Solve a similar problem or prompt and then compare your process to the steps we discussed in the lesson. Reflecting on your approach will help you understand what worked well and what you can improve for next time.\nContext recap: Now it's time for you to try building an argument on your own! Solve a similar problem or prompt and then compare your process to the steps we discussed in the lesson. Reflecting on your approach will help you understand what worked well and what you can improve for next time."
        }
      ],
      "flashcards": [
        {
          "id": "language-arts-301-l04-f1",
          "front": "argument coherence",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "language-arts-301-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "language-arts-301-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "language-arts-301-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-301-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for argument coherence scenarios."
        }
      ]
    },
    {
      "id": "language-arts-301-l05",
      "title": "Counterargument and Rebuttal",
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
          "id": "language-arts-301-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "argument coherence Concept"
              },
              {
                "id": "process",
                "label": "editing precision Process"
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
          "id": "language-arts-301-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a argument coherence challenge."
        }
      ]
    },
    {
      "id": "language-arts-301-l06",
      "title": "Checkpoint: Argument Coherence",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-301-l06-q1",
          "text": "Which statement best explains argument coherence in Language Arts?",
          "skillId": "language-arts-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains argument coherence using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how argument coherence works in practice."
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
          "id": "language-arts-301-l06-q2",
          "text": "What is the best first step when analyzing editing precision?",
          "skillId": "language-arts-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for editing precision."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to editing precision."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-301-l06-q3",
          "text": "Which option shows strong reasoning about advanced reading and argument writing?",
          "skillId": "language-arts-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to advanced reading and argument writing."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-301-l06-q4",
          "text": "Why is spaced review useful for Language Arts mastery?",
          "skillId": "language-arts-301-skill-review",
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
          "id": "language-arts-301-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Argument Coherence",
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
                "label": "Confusion about argument coherence"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to editing precision"
              },
              {
                "id": "l3",
                "label": "Weak transfer of advanced reading and argument writing under timing"
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
          "id": "language-arts-301-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "language-arts-301-l07",
      "title": "Revision for Clarity and Style",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "language-arts-301-l07-c1",
          "title": "Revision for Clarity and Style Setup",
          "content": "Before you start revising your work for clarity and style, it's important to use editing precision to organize your approach. Planning your revisions first will not only improve the quality of your writing but also help you work more efficiently. Taking the time to think about your revisions can lead to better results.\nContext recap: Before you start revising your work for clarity and style, it's important to use editing precision to organize your approach. Planning your revisions first will not only improve the quality of your writing but also help you work more efficiently. Taking the time to think about your revisions can lead to better results."
        },
        {
          "id": "language-arts-301-l07-c2",
          "title": "Decision Rules",
          "content": "When you have to make choices during the revision process, use a simple rule to guide you: always pick the option that has the strongest evidence and the clearest connection to your main goal. This will help you make decisions that enhance the quality of your writing and ensure that your arguments are well-supported.\nContext recap: When you have to make choices during the revision process, use a simple rule to guide you: always pick the option that has the strongest evidence and the clearest connection to your main goal. This will help you make decisions that enhance the quality of your writing and ensure that your arguments are well-supported."
        },
        {
          "id": "language-arts-301-l07-c3",
          "title": "Quality Control",
          "content": "As you revise, it's essential to check for three key aspects: accuracy, completeness, and alignment with your original objective. By ensuring that your writing is accurate and fully developed, and that it stays true to your initial goals, you can enhance the overall effectiveness of your work.\nContext recap: As you revise, it's essential to check for three key aspects: accuracy, completeness, and alignment with your original objective. By ensuring that your writing is accurate and fully developed, and that it stays true to your initial goals, you can enhance the overall effectiveness of your work."
        },
        {
          "id": "language-arts-301-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your revisions, create a next-step plan for your future writing practice. Write down one action that you want to repeat because it worked well, and one action that you want to improve upon in your next round of practice. This reflection will help you grow as a writer and continuously enhance your skills.\nContext recap: After completing your revisions, create a next-step plan for your future writing practice. Write down one action that you want to repeat because it worked well, and one action that you want to improve upon in your next round of practice. This reflection will help you grow as a writer and continuously enhance your skills."
        }
      ],
      "flashcards": [
        {
          "id": "language-arts-301-l07-f1",
          "front": "editing precision",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "language-arts-301-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "language-arts-301-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "language-arts-301-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-301-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on editing precision."
        }
      ]
    },
    {
      "id": "language-arts-301-l08",
      "title": "Seminar Writing Workshop",
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
          "id": "language-arts-301-l08-ia1",
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
          "id": "language-arts-301-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "language-arts-301-l09",
      "title": "Review: Advanced Language Skills",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-301-l09-q1",
          "text": "Which statement best explains rhetorical devices in Language Arts?",
          "skillId": "language-arts-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains rhetorical devices using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how rhetorical devices works in practice."
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
          "id": "language-arts-301-l09-q2",
          "text": "What is the best first step when analyzing editing precision?",
          "skillId": "language-arts-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for editing precision."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to editing precision."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-301-l09-q3",
          "text": "Which option shows strong reasoning about advanced reading and argument writing?",
          "skillId": "language-arts-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to advanced reading and argument writing."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-301-l09-q4",
          "text": "Why is spaced review useful for Language Arts mastery?",
          "skillId": "language-arts-301-skill-review",
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
          "id": "language-arts-301-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Advanced Language Skills",
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
                "label": "Confusion about rhetorical devices"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to editing precision"
              },
              {
                "id": "l3",
                "label": "Weak transfer of advanced reading and argument writing under timing"
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
          "id": "language-arts-301-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "language-arts-301-l10",
      "title": "Mastery: Language Arts III",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-301-l10-q1",
          "text": "Which statement best explains close reading in Language Arts?",
          "skillId": "language-arts-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains close reading using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how close reading works in practice."
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
          "id": "language-arts-301-l10-q2",
          "text": "What is the best first step when analyzing argument coherence?",
          "skillId": "language-arts-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for argument coherence."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to argument coherence."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-301-l10-q3",
          "text": "Which option shows strong reasoning about advanced reading and argument writing?",
          "skillId": "language-arts-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to advanced reading and argument writing."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-301-l10-q4",
          "text": "Why is spaced review useful for Language Arts mastery?",
          "skillId": "language-arts-301-skill-review",
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
          "id": "language-arts-301-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Language Arts III",
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
                "label": "Confusion about close reading"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to argument coherence"
              },
              {
                "id": "l3",
                "label": "Weak transfer of advanced reading and argument writing under timing"
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
          "id": "language-arts-301-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "language-arts-301-l11",
      "title": "Applied Language Arts Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using argument coherence.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "language-arts-301-l11-ia1",
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
                "label": "Tag repeated mistakes in rhetorical devices",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on editing precision",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-301-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "language-arts-301-l12",
      "title": "Language Arts III Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-301-l12-q1",
          "text": "Which statement best explains close reading in Language Arts?",
          "skillId": "language-arts-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains close reading using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how close reading works in practice."
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
          "id": "language-arts-301-l12-q2",
          "text": "What is the best first step when analyzing editing precision?",
          "skillId": "language-arts-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for editing precision."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to editing precision."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-301-l12-q3",
          "text": "Which option shows strong reasoning about advanced reading and argument writing?",
          "skillId": "language-arts-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to advanced reading and argument writing."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-301-l12-q4",
          "text": "Why is spaced review useful for Language Arts mastery?",
          "skillId": "language-arts-301-skill-review",
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
          "id": "language-arts-301-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Language Arts III Mastery Applied Retest",
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
                "label": "Confusion about close reading"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to editing precision"
              },
              {
                "id": "l3",
                "label": "Weak transfer of advanced reading and argument writing under timing"
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
          "id": "language-arts-301-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "language-arts-301-l13",
      "title": "Language Arts Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "language-arts-301-l13-c1",
          "title": "Scenario Brief",
          "content": "In this engaging scenario, you will practice important skills such as close reading, creating strong arguments, and editing your work with great attention to detail. This challenge will help you apply these skills in a fun and interactive way, making learning both effective and enjoyable.\nContext recap: In this engaging scenario, you will practice important skills such as close reading, creating strong arguments, and editing your work with great attention to detail. This challenge will help you apply these skills in a fun and interactive way, making learning both effective and enjoyable."
        },
        {
          "id": "language-arts-301-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. For each decision point, think about which strategy would work best and assign that strategy to guide your choices. This organized approach will help you stay focused and make better decisions throughout the task.\nContext recap: To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. For each decision point, think about which strategy would work best and assign that strategy to guide your choices. This organized approach will help you stay focused and make better decisions throughout the task."
        },
        {
          "id": "language-arts-301-l13-c3",
          "title": "Execute and Justify",
          "content": "Once you have your plan ready, it’s time to put it into action! As you execute your plan, make sure to explain each step you take. Use evidence from your readings or previous knowledge to support your choices, rather than making guesses. This will strengthen your argument and show your understanding.\nContext recap: Once you have your plan ready, it’s time to put it into action! As you execute your plan, make sure to explain each step you take. Use evidence from your readings or previous knowledge to support your choices, rather than making guesses. This will strengthen your argument and show your understanding."
        },
        {
          "id": "language-arts-301-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After completing your scenario, take a moment to evaluate your results. Compare what you achieved with the goals you set at the beginning. Identify which parts of your work were successful and should be kept, and which areas might need some adjustments. This reflection will help you improve in future tasks.\nContext recap: After completing your scenario, take a moment to evaluate your results. Compare what you achieved with the goals you set at the beginning. Identify which parts of your work were successful and should be kept, and which areas might need some adjustments. This reflection will help you improve in future tasks."
        }
      ],
      "flashcards": [
        {
          "id": "language-arts-301-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "language-arts-301-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "language-arts-301-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "language-arts-301-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-301-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting close reading, argument coherence, and editing precision."
        },
        {
          "id": "language-arts-301-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "language-arts-301-l14",
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
          "id": "language-arts-301-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on close reading setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed editing precision decisions"
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
          "id": "language-arts-301-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "language-arts-301-l15",
      "title": "Language Arts III Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-301-l15-q1",
          "text": "Which statement best explains rhetorical devices in Language Arts?",
          "skillId": "language-arts-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains rhetorical devices using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how rhetorical devices works in practice."
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
          "id": "language-arts-301-l15-q2",
          "text": "What is the best first step when analyzing argument coherence?",
          "skillId": "language-arts-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for argument coherence."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to argument coherence."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-301-l15-q3",
          "text": "Which option shows strong reasoning about advanced reading and argument writing?",
          "skillId": "language-arts-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to advanced reading and argument writing."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "language-arts-301-l15-q4",
          "text": "Why is spaced review useful for Language Arts mastery?",
          "skillId": "language-arts-301-skill-review",
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
          "id": "language-arts-301-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Language Arts III Mastery Mastery Sprint",
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
                "label": "Confusion about rhetorical devices"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to argument coherence"
              },
              {
                "id": "l3",
                "label": "Weak transfer of advanced reading and argument writing under timing"
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
          "id": "language-arts-301-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
