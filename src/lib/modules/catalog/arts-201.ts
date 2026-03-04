import type { LearningModule } from "@/lib/modules/types";

export const Arts201Module: LearningModule = {
  "id": "arts-201",
  "title": "Creative Arts Studio II",
  "description": "Develop composition, visual storytelling, and critique routines across creative media.",
  "subject": "Arts",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Arts",
    "Apply Creative Communication strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "arts-201-l01",
      "title": "Composition and Visual Balance",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "arts-201-l01-c1",
          "title": "Composition and Visual Balance Overview",
          "content": "In this lesson, we will dive into the exciting world of visual composition! We will discover how to create beautiful and balanced artwork by understanding the principles of creative composition and learning how to give helpful feedback to our peers. Our main goal is to recognize what makes a strong piece of art before we start creating our own masterpieces. By doing this, we will not only improve our artistic skills but also become better thinkers and collaborators. Let's get ready to unleash our creativity and explore the magic of art together!"
        },
        {
          "id": "arts-201-l01-c2",
          "title": "Core Concept",
          "content": "Visual composition and color narrative are two essential parts that come together to create beautiful artwork. First, we will choose the main focus of our piece, which is like the star of our show! This is the element that will draw the viewer's attention. Next, we will explore the evidence or steps that support our main idea. These could be colors, shapes, or patterns that help to tell our story and build a strong foundation for our artwork. By understanding how these elements work together, we can create pieces that are not only visually appealing but also meaningful and engaging."
        },
        {
          "id": "arts-201-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! First, we will define our artistic goal, which is what we want to achieve with our artwork. Then, we will apply a strategy for using color to tell a story in our piece. Finally, we will verify our result with a quick check to see if we have achieved our goal. This practice will help us understand the process better!\nContext recap: Let's walk through a guided example together! First, we will define our artistic goal, which is what we want to achieve with our artwork. Then, we will apply a strategy for using color to tell a story in our piece. Finally, we will verify our result with a quick check to see if we have achieved our goal."
        },
        {
          "id": "arts-201-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn! Apply the same process we just learned to a new scenario. Think about how you would approach it and explain why your method is valid in one clear sentence. This will help you practice your reasoning skills and show how you can adapt what you've learned to different situations.\nContext recap: Now it's your turn! Apply the same process we just learned to a new scenario. Think about how you would approach it and explain why your method is valid in one clear sentence. This will help you practice your reasoning skills and show how you can adapt what you've learned to different situations."
        }
      ],
      "flashcards": [
        {
          "id": "arts-201-l01-f1",
          "front": "visual composition",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "arts-201-l01-f2",
          "front": "color narrative",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "arts-201-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "arts-201-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "arts-201-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about visual composition and color narrative."
        },
        {
          "id": "arts-201-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Arts vocabulary."
        }
      ]
    },
    {
      "id": "arts-201-l02",
      "title": "Color Narrative and Mood",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about visual composition from this lesson.",
          "Explain where color narrative appears in real life.",
          "Describe one question you still have about creative composition and critique."
        ]
      },
      "interactiveActivities": [
        {
          "id": "arts-201-l02-ia1",
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
                "label": "Set a goal for visual composition",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for color narrative",
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
          "id": "arts-201-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on color narrative and write one reflection."
        }
      ]
    },
    {
      "id": "arts-201-l03",
      "title": "Checkpoint: Visual Composition",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "arts-201-l03-q1",
          "text": "Which statement best explains visual composition in Arts?",
          "skillId": "arts-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains visual composition using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how visual composition works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Arts."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l03-q2",
          "text": "What is the best first step when analyzing color narrative?",
          "skillId": "arts-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for color narrative."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to color narrative."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l03-q3",
          "text": "Which option shows strong reasoning about creative composition and critique?",
          "skillId": "arts-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to creative composition and critique."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l03-q4",
          "text": "Why is spaced review useful for Arts mastery?",
          "skillId": "arts-201-skill-review",
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
          "id": "arts-201-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Visual Composition",
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
                "label": "Confusion about visual composition"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to color narrative"
              },
              {
                "id": "l3",
                "label": "Weak transfer of creative composition and critique under timing"
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
          "id": "arts-201-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "arts-201-l04",
      "title": "Design Iteration Cycle",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "arts-201-l04-c1",
          "title": "Design Iteration Cycle Focus",
          "content": "In this lesson, we will explore the design iteration cycle in a fun and engaging way! We will learn how to use structured reasoning to think carefully about our designs. Instead of just understanding the ideas, we will practice making smart decisions that can improve our creative projects. This will help us become more thoughtful and effective creators, allowing our imaginations to shine even brighter!\nContext recap: In this lesson, we will explore the design iteration cycle in a fun and engaging way! We will learn how to use structured reasoning to think carefully about our designs. Instead of just understanding the ideas, we will practice making smart decisions that can improve our creative projects. This will help us become more thoughtful and effective creators, allowing our imaginations to shine even brighter!"
        },
        {
          "id": "arts-201-l04-c2",
          "title": "Method Steps",
          "content": "Let's break down the method steps for our design iteration cycle! Step 1: Identify what is being asked in the design challenge. Step 2: Choose a strategy that aligns with the principles of design iteration. Step 3: Justify your choices with evidence to support your decisions. Following these steps will guide you toward successful design outcomes.\nContext recap: Let's break down the method steps for our design iteration cycle! Step 1: Identify what is being asked in the design challenge. Step 2: Choose a strategy that aligns with the principles of design iteration. Step 3: Justify your choices with evidence to support your decisions."
        },
        {
          "id": "arts-201-l04-c3",
          "title": "Common Mistakes",
          "content": "It's important to be aware of common mistakes that can happen during the design process. These include skipping the setup phase, using assumptions that are not related to the task, or failing to verify the final result. By recognizing these pitfalls, we can avoid them and improve our designs!\nContext recap: It's important to be aware of common mistakes that can happen during the design process. These include skipping the setup phase, using assumptions that are not related to the task, or failing to verify the final result. By recognizing these pitfalls, we can avoid them and improve our designs!"
        },
        {
          "id": "arts-201-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar design challenge on your own! After you complete it, compare your process to the lesson sequence we discussed. This reflection will help you understand what worked well and what you might want to improve in your approach.\nContext recap: Now, it's time for you to try solving a similar design challenge on your own! After you complete it, compare your process to the lesson sequence we discussed. This reflection will help you understand what worked well and what you might want to improve in your approach."
        }
      ],
      "flashcards": [
        {
          "id": "arts-201-l04-f1",
          "front": "design iteration",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "arts-201-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "arts-201-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "arts-201-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "arts-201-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for design iteration scenarios."
        }
      ]
    },
    {
      "id": "arts-201-l05",
      "title": "Symbolism and Visual Storytelling",
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
          "id": "arts-201-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "design iteration Concept"
              },
              {
                "id": "process",
                "label": "critique language Process"
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
          "id": "arts-201-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a design iteration challenge."
        }
      ]
    },
    {
      "id": "arts-201-l06",
      "title": "Checkpoint: Creative Communication",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "arts-201-l06-q1",
          "text": "Which statement best explains design iteration in Arts?",
          "skillId": "arts-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains design iteration using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how design iteration works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Arts."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l06-q2",
          "text": "What is the best first step when analyzing critique language?",
          "skillId": "arts-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for critique language."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to critique language."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l06-q3",
          "text": "Which option shows strong reasoning about creative composition and critique?",
          "skillId": "arts-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to creative composition and critique."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l06-q4",
          "text": "Why is spaced review useful for Arts mastery?",
          "skillId": "arts-201-skill-review",
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
          "id": "arts-201-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Creative Communication",
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
                "label": "Confusion about design iteration"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to critique language"
              },
              {
                "id": "l3",
                "label": "Weak transfer of creative composition and critique under timing"
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
          "id": "arts-201-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "arts-201-l07",
      "title": "Comparative Art Analysis",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "arts-201-l07-c1",
          "title": "Comparative Art Analysis Setup",
          "content": "Before starting your comparative art analysis, it's helpful to use critique language to organize your thoughts. Planning your approach in advance can significantly improve both the quality and speed of your analysis. This way, you will have a clear direction as you begin your work!\nContext recap: Before starting your comparative art analysis, it's helpful to use critique language to organize your thoughts. Planning your approach in advance can significantly improve both the quality and speed of your analysis. This way, you will have a clear direction as you begin your work!"
        },
        {
          "id": "arts-201-l07-c2",
          "title": "Decision Rules",
          "content": "When you are looking at different choices in your art analysis, it can sometimes be tricky to decide which one to pick. To help you make a good choice, follow this simple rule: always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. This way, you can make thoughtful and informed decisions that will enhance your understanding and appreciation of art.\nContext recap: When you are looking at different choices in your art analysis, it can sometimes be tricky to decide which one to pick. To help you make a good choice, follow this simple rule: always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. This way, you can make thoughtful and informed decisions that will enhance your understanding and appreciation of art."
        },
        {
          "id": "arts-201-l07-c3",
          "title": "Quality Control",
          "content": "As you review your work, check for three important things: accuracy, completeness, and alignment with your original objective. This quality control step ensures that your analysis is thorough and meets the standards you set for yourself.\nContext recap: As you review your work, check for three important things: accuracy, completeness, and alignment with your original objective. This quality control step ensures that your analysis is thorough and meets the standards you set for yourself.\nWhy this matters: Quality Control helps learners in Arts connect ideas from Creative Arts Studio II to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "arts-201-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your analysis, write down one action that you would like to repeat in your next practice round, and one action that you want to improve. This next-step plan will help you focus on your growth and development as an artist!\nContext recap: After completing your analysis, write down one action that you would like to repeat in your next practice round, and one action that you want to improve. This next-step plan will help you focus on your growth and development as an artist!"
        }
      ],
      "flashcards": [
        {
          "id": "arts-201-l07-f1",
          "front": "critique language",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "arts-201-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "arts-201-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "arts-201-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "arts-201-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on critique language."
        }
      ]
    },
    {
      "id": "arts-201-l08",
      "title": "Portfolio Revision Session",
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
          "id": "arts-201-l08-ia1",
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
          "id": "arts-201-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "arts-201-l09",
      "title": "Review: Artistic Decisions",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "arts-201-l09-q1",
          "text": "Which statement best explains color narrative in Arts?",
          "skillId": "arts-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains color narrative using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how color narrative works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Arts."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l09-q2",
          "text": "What is the best first step when analyzing critique language?",
          "skillId": "arts-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for critique language."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to critique language."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l09-q3",
          "text": "Which option shows strong reasoning about creative composition and critique?",
          "skillId": "arts-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to creative composition and critique."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l09-q4",
          "text": "Why is spaced review useful for Arts mastery?",
          "skillId": "arts-201-skill-review",
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
          "id": "arts-201-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Artistic Decisions",
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
                "label": "Confusion about color narrative"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to critique language"
              },
              {
                "id": "l3",
                "label": "Weak transfer of creative composition and critique under timing"
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
          "id": "arts-201-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "arts-201-l10",
      "title": "Mastery: Creative Arts II",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "arts-201-l10-q1",
          "text": "Which statement best explains visual composition in Arts?",
          "skillId": "arts-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains visual composition using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how visual composition works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Arts."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l10-q2",
          "text": "What is the best first step when analyzing design iteration?",
          "skillId": "arts-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for design iteration."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to design iteration."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l10-q3",
          "text": "Which option shows strong reasoning about creative composition and critique?",
          "skillId": "arts-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to creative composition and critique."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l10-q4",
          "text": "Why is spaced review useful for Arts mastery?",
          "skillId": "arts-201-skill-review",
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
          "id": "arts-201-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Creative Arts II",
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
                "label": "Confusion about visual composition"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to design iteration"
              },
              {
                "id": "l3",
                "label": "Weak transfer of creative composition and critique under timing"
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
          "id": "arts-201-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "arts-201-l11",
      "title": "Applied Arts Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using design iteration.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "arts-201-l11-ia1",
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
                "label": "Tag repeated mistakes in color narrative",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on critique language",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "arts-201-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "arts-201-l12",
      "title": "Creative Arts II Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "arts-201-l12-q1",
          "text": "Which statement best explains visual composition in Arts?",
          "skillId": "arts-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains visual composition using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how visual composition works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Arts."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l12-q2",
          "text": "What is the best first step when analyzing critique language?",
          "skillId": "arts-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for critique language."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to critique language."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l12-q3",
          "text": "Which option shows strong reasoning about creative composition and critique?",
          "skillId": "arts-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to creative composition and critique."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l12-q4",
          "text": "Why is spaced review useful for Arts mastery?",
          "skillId": "arts-201-skill-review",
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
          "id": "arts-201-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Creative Arts II Mastery Applied Retest",
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
                "label": "Confusion about visual composition"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to critique language"
              },
              {
                "id": "l3",
                "label": "Weak transfer of creative composition and critique under timing"
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
          "id": "arts-201-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "arts-201-l13",
      "title": "Arts Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "arts-201-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, you will explore how to create beautiful visual compositions. You will also learn about the importance of design iterations, which means making changes and improvements to your work. Additionally, you will practice using critique language, which helps you discuss and evaluate art in a thoughtful way. This challenge will help you apply all these skills together in a fun and creative way!\nContext recap: In this exciting scenario, you will explore how to create beautiful visual compositions. You will also learn about the importance of design iterations, which means making changes and improvements to your work. Additionally, you will practice using critique language, which helps you discuss and evaluate art in a thoughtful way. This challenge will help you apply all these skills together in a fun and creative way!"
        },
        {
          "id": "arts-201-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. Think about each part of the project and what choices you need to make. For every decision point, choose a specific strategy that will guide you. This approach will help you stay organized and focused as you work through your creative process.\nContext recap: To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. Think about each part of the project and what choices you need to make. For every decision point, choose a specific strategy that will guide you. This approach will help you stay organized and focused as you work through your creative process."
        },
        {
          "id": "arts-201-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's time to put your plan into action! As you execute your ideas, make sure to explain each step you take. Use evidence from your research or previous experiences to support your choices, rather than making guesses. This will help you build a strong foundation for your work and show that you have thought carefully about your decisions.\nContext recap: Now it's time to put your plan into action! As you execute your ideas, make sure to explain each step you take. Use evidence from your research or previous experiences to support your choices, rather than making guesses. This will help you build a strong foundation for your work and show that you have thought carefully about your decisions."
        },
        {
          "id": "arts-201-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After completing your project, take a moment to evaluate the outcome. Compare what you created to the original goals you set for yourself. Identify which elements of your work are successful and should be kept, and think about what aspects might need some adjustments. This reflection will help you grow as an artist and improve your future projects.\nContext recap: After completing your project, take a moment to evaluate the outcome. Compare what you created to the original goals you set for yourself. Identify which elements of your work are successful and should be kept, and think about what aspects might need some adjustments. This reflection will help you grow as an artist and improve your future projects."
        }
      ],
      "flashcards": [
        {
          "id": "arts-201-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "arts-201-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "arts-201-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "arts-201-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "arts-201-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting visual composition, design iteration, and critique language."
        },
        {
          "id": "arts-201-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "arts-201-l14",
      "title": "Arts Coaching Clinic",
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
          "id": "arts-201-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on visual composition setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed critique language decisions"
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
          "id": "arts-201-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "arts-201-l15",
      "title": "Creative Arts II Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "arts-201-l15-q1",
          "text": "Which statement best explains color narrative in Arts?",
          "skillId": "arts-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains color narrative using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how color narrative works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Arts."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l15-q2",
          "text": "What is the best first step when analyzing design iteration?",
          "skillId": "arts-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for design iteration."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to design iteration."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l15-q3",
          "text": "Which option shows strong reasoning about creative composition and critique?",
          "skillId": "arts-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to creative composition and critique."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l15-q4",
          "text": "Why is spaced review useful for Arts mastery?",
          "skillId": "arts-201-skill-review",
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
          "id": "arts-201-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Creative Arts II Mastery Mastery Sprint",
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
                "label": "Confusion about color narrative"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to design iteration"
              },
              {
                "id": "l3",
                "label": "Weak transfer of creative composition and critique under timing"
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
          "id": "arts-201-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
