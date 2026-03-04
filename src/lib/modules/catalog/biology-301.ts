import type { LearningModule } from "@/lib/modules/types";

export const Biology301Module: LearningModule = {
  "id": "biology-301",
  "title": "Biology Data and Systems",
  "description": "Use evidence and models to explain biological systems, inheritance, and ecological shifts.",
  "subject": "Biology",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Biology",
    "Apply Data-Driven Biology strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "biology-301-l01",
      "title": "Cell Regulation and Signaling",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "biology-301-l01-c1",
          "title": "Cell Regulation and Signaling Overview",
          "content": "In this lesson, we will dive into the exciting world of cell regulation and signaling! Cells are like tiny factories that need to communicate and work together to keep living things healthy. We will discover how scientists gather evidence and create models to better understand how cells send and receive signals. This is important because it helps us learn how cells control their activities and respond to their environment. Our main goal is to recognize what strong reasoning looks like, which is a skill that will help us solve problems effectively. By the end of this lesson, you will be able to use these concepts in real-life situations, making connections between science and the world around you. Get ready to explore and learn about the amazing ways cells communicate!"
        },
        {
          "id": "biology-301-l01-c2",
          "title": "Core Concept",
          "content": "In our exploration of cell regulation, we will learn about how cell regulation and inheritance models work together to help us understand living things. First, we will identify the main idea or target that we want to focus on. This is like finding the treasure map that guides our journey! Next, we will search for the evidence or steps that support our understanding of this main idea. This could include looking at experiments, observations, or examples that help us see how everything connects. By doing this, we will build a strong foundation for our learning and improve our problem-solving skills. This exciting process will help us become better scientists and thinkers!"
        },
        {
          "id": "biology-301-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! We will start by defining our goal clearly. Next, we will apply a strategy that involves inheritance models to help us reach that goal. Finally, we will verify our result with a quick check to ensure that our reasoning is correct. This example will serve as a helpful model for you to follow in your own work.\nContext recap: Let's walk through a guided example together! We will start by defining our goal clearly. Next, we will apply a strategy that involves inheritance models to help us reach that goal. Finally, we will verify our result with a quick check to ensure that our reasoning is correct."
        },
        {
          "id": "biology-301-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to shine! Take the same steps we just talked about and use them in a new situation. As you do this, be sure to explain why your method makes sense in just one clear sentence. This exercise will not only help you practice your reasoning skills but also strengthen your understanding of the important ideas we've learned together. Remember, thinking critically is a key part of learning!\nContext recap: Now it's your turn to shine! Take the same steps we just talked about and use them in a new situation. As you do this, be sure to explain why your method makes sense in just one clear sentence. This exercise will not only help you practice your reasoning skills but also strengthen your understanding of the important ideas we've learned together."
        }
      ],
      "flashcards": [
        {
          "id": "biology-301-l01-f1",
          "front": "cell regulation",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "biology-301-l01-f2",
          "front": "inheritance models",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "biology-301-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "biology-301-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "biology-301-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about cell regulation and inheritance models."
        },
        {
          "id": "biology-301-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Biology vocabulary."
        }
      ]
    },
    {
      "id": "biology-301-l02",
      "title": "Inheritance Model Building",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about cell regulation from this lesson.",
          "Explain where inheritance models appears in real life.",
          "Describe one question you still have about biology evidence and systems modeling."
        ]
      },
      "interactiveActivities": [
        {
          "id": "biology-301-l02-ia1",
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
                "label": "Set a goal for cell regulation",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for inheritance models",
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
          "id": "biology-301-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on inheritance models and write one reflection."
        }
      ]
    },
    {
      "id": "biology-301-l03",
      "title": "Checkpoint: Biological Modeling",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "biology-301-l03-q1",
          "text": "Which statement best explains cell regulation in Biology?",
          "skillId": "biology-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains cell regulation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how cell regulation works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Biology."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-301-l03-q2",
          "text": "What is the best first step when analyzing inheritance models?",
          "skillId": "biology-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for inheritance models."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to inheritance models."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-301-l03-q3",
          "text": "Which option shows strong reasoning about biology evidence and systems modeling?",
          "skillId": "biology-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to biology evidence and systems modeling."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-301-l03-q4",
          "text": "Why is spaced review useful for Biology mastery?",
          "skillId": "biology-301-skill-review",
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
          "id": "biology-301-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Biological Modeling",
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
                "label": "Confusion about cell regulation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to inheritance models"
              },
              {
                "id": "l3",
                "label": "Weak transfer of biology evidence and systems modeling under timing"
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
          "id": "biology-301-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "biology-301-l04",
      "title": "Population and Ecosystem Dynamics",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "biology-301-l04-c1",
          "title": "Population and Ecosystem Dynamics Focus",
          "content": "In this lesson, we will deepen our understanding of ecosystem dynamics by using structured reasoning. We will move from simply understanding concepts to making applied decisions that can impact real-world ecosystems. This approach will help you think critically about how different factors influence ecosystems and populations.\nContext recap: In this lesson, we will deepen our understanding of ecosystem dynamics by using structured reasoning. We will move from simply understanding concepts to making applied decisions that can impact real-world ecosystems. This approach will help you think critically about how different factors influence ecosystems and populations."
        },
        {
          "id": "biology-301-l04-c2",
          "title": "Method Steps",
          "content": "In this lesson, we will explore the steps we need to follow to understand and solve problems related to population and ecosystem dynamics. Let's break it down together! Step 1: First, we need to identify what the problem is asking us. This means we should read the question carefully and think about what information we need. Step 2: Next, we will choose a strategy that fits well with our knowledge of how ecosystems work. This could involve thinking about the relationships between different organisms and their environments. Step 3: Finally, we need to justify our choice by providing evidence that supports our reasoning. This means we should explain why we think our strategy is the best one, using facts or examples from what we have learned. By following these steps, we can tackle problems in a clear and organized way, making sure we understand the dynamics of ecosystems better."
        },
        {
          "id": "biology-301-l04-c3",
          "title": "Common Mistakes",
          "content": "As we learn, it's important to be aware of common mistakes that can occur. Some common errors include skipping the setup of the problem, using assumptions that are not related to the topic, or failing to verify the final result. By being mindful of these pitfalls, you can improve your problem-solving skills and achieve better outcomes.\nContext recap: As we learn, it's important to be aware of common mistakes that can occur. Some common errors include skipping the setup of the problem, using assumptions that are not related to the topic, or failing to verify the final result. By being mindful of these pitfalls, you can improve your problem-solving skills and achieve better outcomes."
        },
        {
          "id": "biology-301-l04-c4",
          "title": "Independent Try",
          "content": "Now, I challenge you to solve a similar problem on your own! After you complete it, take a moment to compare your process to the lesson sequence we discussed. This reflection will help you understand your own reasoning and identify areas for improvement.\nContext recap: Now, I challenge you to solve a similar problem on your own! After you complete it, take a moment to compare your process to the lesson sequence we discussed. This reflection will help you understand your own reasoning and identify areas for improvement."
        }
      ],
      "flashcards": [
        {
          "id": "biology-301-l04-f1",
          "front": "ecosystem dynamics",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "biology-301-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "biology-301-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "biology-301-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "biology-301-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for ecosystem dynamics scenarios."
        }
      ]
    },
    {
      "id": "biology-301-l05",
      "title": "Interpreting Biological Datasets",
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
          "id": "biology-301-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "ecosystem dynamics Concept"
              },
              {
                "id": "process",
                "label": "evidence-based explanation Process"
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
          "id": "biology-301-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a ecosystem dynamics challenge."
        }
      ]
    },
    {
      "id": "biology-301-l06",
      "title": "Checkpoint: Data-Driven Biology",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "biology-301-l06-q1",
          "text": "Which statement best explains ecosystem dynamics in Biology?",
          "skillId": "biology-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains ecosystem dynamics using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how ecosystem dynamics works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Biology."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-301-l06-q2",
          "text": "What is the best first step when analyzing evidence-based explanation?",
          "skillId": "biology-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for evidence-based explanation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to evidence-based explanation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-301-l06-q3",
          "text": "Which option shows strong reasoning about biology evidence and systems modeling?",
          "skillId": "biology-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to biology evidence and systems modeling."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-301-l06-q4",
          "text": "Why is spaced review useful for Biology mastery?",
          "skillId": "biology-301-skill-review",
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
          "id": "biology-301-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Data-Driven Biology",
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
                "label": "Confusion about ecosystem dynamics"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to evidence-based explanation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of biology evidence and systems modeling under timing"
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
          "id": "biology-301-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "biology-301-l07",
      "title": "Human Impacts and Resilience",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "biology-301-l07-c1",
          "title": "Human Impacts and Resilience Setup",
          "content": "Before we dive into our next topic, it's important to use evidence-based explanations to organize your approach. Planning ahead can significantly improve both the quality of your work and the speed at which you complete tasks. By taking the time to plan, you set yourself up for success.\nContext recap: Before we dive into our next topic, it's important to use evidence-based explanations to organize your approach. Planning ahead can significantly improve both the quality of your work and the speed at which you complete tasks. By taking the time to plan, you set yourself up for success."
        },
        {
          "id": "biology-301-l07-c2",
          "title": "Decision Rules",
          "content": "When you have to make a choice between different options, it can sometimes be confusing. To help you decide, you can use a simple rule: always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. This way, you can make smart decisions that are based on good reasons and facts, which will help you reach your goals more effectively.\nContext recap: When you have to make a choice between different options, it can sometimes be confusing. To help you decide, you can use a simple rule: always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. This way, you can make smart decisions that are based on good reasons and facts, which will help you reach your goals more effectively."
        },
        {
          "id": "biology-301-l07-c3",
          "title": "Quality Control",
          "content": "As you work through your tasks, it's essential to check for three key things: accuracy, completeness, and alignment with your original objective. By ensuring that your work meets these criteria, you can maintain high standards and achieve better results.\nContext recap: As you work through your tasks, it's essential to check for three key things: accuracy, completeness, and alignment with your original objective. By ensuring that your work meets these criteria, you can maintain high standards and achieve better results."
        },
        {
          "id": "biology-301-l07-c4",
          "title": "Next-Step Plan",
          "content": "To improve in your next practice round, write down one action that you want to repeat because it worked well, and one action that you would like to improve. This reflection will help you grow and develop your skills as you continue to learn.\nContext recap: To improve in your next practice round, write down one action that you want to repeat because it worked well, and one action that you would like to improve. This reflection will help you grow and develop your skills as you continue to learn."
        }
      ],
      "flashcards": [
        {
          "id": "biology-301-l07-f1",
          "front": "evidence-based explanation",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "biology-301-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "biology-301-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "biology-301-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "biology-301-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on evidence-based explanation."
        }
      ]
    },
    {
      "id": "biology-301-l08",
      "title": "Bio-Systems Investigation Lab",
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
          "id": "biology-301-l08-ia1",
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
          "id": "biology-301-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "biology-301-l09",
      "title": "Review: Biology Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "biology-301-l09-q1",
          "text": "Which statement best explains inheritance models in Biology?",
          "skillId": "biology-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains inheritance models using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how inheritance models works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Biology."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-301-l09-q2",
          "text": "What is the best first step when analyzing evidence-based explanation?",
          "skillId": "biology-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for evidence-based explanation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to evidence-based explanation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-301-l09-q3",
          "text": "Which option shows strong reasoning about biology evidence and systems modeling?",
          "skillId": "biology-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to biology evidence and systems modeling."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-301-l09-q4",
          "text": "Why is spaced review useful for Biology mastery?",
          "skillId": "biology-301-skill-review",
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
          "id": "biology-301-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Biology Systems Reasoning",
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
                "label": "Confusion about inheritance models"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to evidence-based explanation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of biology evidence and systems modeling under timing"
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
          "id": "biology-301-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "biology-301-l10",
      "title": "Mastery: Biology III",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "biology-301-l10-q1",
          "text": "Which statement best explains cell regulation in Biology?",
          "skillId": "biology-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains cell regulation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how cell regulation works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Biology."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-301-l10-q2",
          "text": "What is the best first step when analyzing ecosystem dynamics?",
          "skillId": "biology-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for ecosystem dynamics."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to ecosystem dynamics."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-301-l10-q3",
          "text": "Which option shows strong reasoning about biology evidence and systems modeling?",
          "skillId": "biology-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to biology evidence and systems modeling."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-301-l10-q4",
          "text": "Why is spaced review useful for Biology mastery?",
          "skillId": "biology-301-skill-review",
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
          "id": "biology-301-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Biology III",
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
                "label": "Confusion about cell regulation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to ecosystem dynamics"
              },
              {
                "id": "l3",
                "label": "Weak transfer of biology evidence and systems modeling under timing"
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
          "id": "biology-301-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "biology-301-l11",
      "title": "Applied Biology Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using ecosystem dynamics.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "biology-301-l11-ia1",
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
                "label": "Tag repeated mistakes in inheritance models",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on evidence-based explanation",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "biology-301-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "biology-301-l12",
      "title": "Biology III Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "biology-301-l12-q1",
          "text": "Which statement best explains cell regulation in Biology?",
          "skillId": "biology-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains cell regulation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how cell regulation works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Biology."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-301-l12-q2",
          "text": "What is the best first step when analyzing evidence-based explanation?",
          "skillId": "biology-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for evidence-based explanation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to evidence-based explanation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-301-l12-q3",
          "text": "Which option shows strong reasoning about biology evidence and systems modeling?",
          "skillId": "biology-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to biology evidence and systems modeling."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-301-l12-q4",
          "text": "Why is spaced review useful for Biology mastery?",
          "skillId": "biology-301-skill-review",
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
          "id": "biology-301-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Biology III Mastery Applied Retest",
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
                "label": "Confusion about cell regulation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to evidence-based explanation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of biology evidence and systems modeling under timing"
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
          "id": "biology-301-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "biology-301-l13",
      "title": "Biology Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "biology-301-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, we will explore how cells communicate and regulate their activities, how ecosystems function, and how we can use evidence to explain our findings. This challenge will help you understand the connections between these important biological concepts and see how they work together in real-life situations.\nContext recap: In this exciting scenario, we will explore how cells communicate and regulate their activities, how ecosystems function, and how we can use evidence to explain our findings. This challenge will help you understand the connections between these important biological concepts and see how they work together in real-life situations."
        },
        {
          "id": "biology-301-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, we will break it down into smaller, manageable decisions. For each decision point, we will think carefully and assign a specific strategy that will guide our actions. This step-by-step approach will help us stay organized and focused as we work through the challenge.\nContext recap: To tackle this scenario effectively, we will break it down into smaller, manageable decisions. For each decision point, we will think carefully and assign a specific strategy that will guide our actions. This step-by-step approach will help us stay organized and focused as we work through the challenge."
        },
        {
          "id": "biology-301-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's time to put our plan into action! As we execute our strategies, we will explain each step we take using solid evidence to support our choices. It's important to rely on facts and observations rather than guesses, so we can understand the impact of our decisions.\nContext recap: Now it's time to put our plan into action! As we execute our strategies, we will explain each step we take using solid evidence to support our choices. It's important to rely on facts and observations rather than guesses, so we can understand the impact of our decisions."
        },
        {
          "id": "biology-301-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After completing our actions, we will evaluate the outcome of our scenario. We will compare our results to the goals we set at the beginning and identify what worked well and what might need some adjustments. This reflection will help us learn and improve for future challenges.\nContext recap: After completing our actions, we will evaluate the outcome of our scenario. We will compare our results to the goals we set at the beginning and identify what worked well and what might need some adjustments. This reflection will help us learn and improve for future challenges."
        }
      ],
      "flashcards": [
        {
          "id": "biology-301-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "biology-301-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "biology-301-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "biology-301-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "biology-301-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting cell regulation, ecosystem dynamics, and evidence-based explanation."
        },
        {
          "id": "biology-301-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "biology-301-l14",
      "title": "Biology Coaching Clinic",
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
          "id": "biology-301-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on cell regulation setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed evidence-based explanation decisions"
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
          "id": "biology-301-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "biology-301-l15",
      "title": "Biology III Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "biology-301-l15-q1",
          "text": "Which statement best explains inheritance models in Biology?",
          "skillId": "biology-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains inheritance models using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how inheritance models works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Biology."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-301-l15-q2",
          "text": "What is the best first step when analyzing ecosystem dynamics?",
          "skillId": "biology-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for ecosystem dynamics."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to ecosystem dynamics."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-301-l15-q3",
          "text": "Which option shows strong reasoning about biology evidence and systems modeling?",
          "skillId": "biology-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to biology evidence and systems modeling."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-301-l15-q4",
          "text": "Why is spaced review useful for Biology mastery?",
          "skillId": "biology-301-skill-review",
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
          "id": "biology-301-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Biology III Mastery Mastery Sprint",
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
                "label": "Confusion about inheritance models"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to ecosystem dynamics"
              },
              {
                "id": "l3",
                "label": "Weak transfer of biology evidence and systems modeling under timing"
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
          "id": "biology-301-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
