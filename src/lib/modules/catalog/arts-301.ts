import type { LearningModule } from "@/lib/modules/types";

export const Arts301Module: LearningModule = {
  "id": "arts-301",
  "title": "Creative Arts Composition and Curation",
  "description": "Advance from art production to intentional composition, critique, and portfolio curation.",
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
    "Apply Creative Revision Quality strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "arts-301-l01",
      "title": "Composition Systems and Balance",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "arts-301-l01-c1",
          "title": "Composition Systems and Balance Overview",
          "content": "In this lesson, we will embark on an exciting journey into the world of composition systems! We will focus on how to create advanced and imaginative compositions that truly stand out. Our main goal is to learn how to recognize what makes reasoning strong and effective. This means we will explore the elements that contribute to good thinking and decision-making before we start solving any problems. By understanding these important concepts, we can boost our creative skills and make our compositions even more amazing and impactful! Get ready to unleash your creativity and enhance your artistic abilities!"
        },
        {
          "id": "arts-301-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will discover how composition systems work hand-in-hand with narrative intent. To start, think about the main idea or target of your composition. Once you have that in mind, identify the evidence or steps that support your main idea. This process will help you create a clear and engaging narrative that resonates with your audience.\nContext recap: In this section, we will discover how composition systems work hand-in-hand with narrative intent. To start, think about the main idea or target of your composition. Once you have that in mind, identify the evidence or steps that support your main idea. This process will help you create a clear and engaging narrative that resonates with your audience."
        },
        {
          "id": "arts-301-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! First, we will define our goal for the composition. Next, we will apply a strategy that focuses on our narrative intent. Finally, we will verify our results with a quick check to ensure everything aligns with our original goal. This step-by-step approach will help you understand how to effectively create and assess your work.\nContext recap: Let's walk through a guided example together! First, we will define our goal for the composition. Next, we will apply a strategy that focuses on our narrative intent. Finally, we will verify our results with a quick check to ensure everything aligns with our original goal."
        },
        {
          "id": "arts-301-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn! Apply the same process we just discussed to a new scenario. As you do this, take a moment to explain why your approach is valid in one clear sentence. This exercise will help reinforce your understanding and allow you to practice your reasoning skills in different contexts.\nContext recap: Now it's your turn! Apply the same process we just discussed to a new scenario. As you do this, take a moment to explain why your approach is valid in one clear sentence. This exercise will help reinforce your understanding and allow you to practice your reasoning skills in different contexts."
        }
      ],
      "flashcards": [
        {
          "id": "arts-301-l01-f1",
          "front": "composition systems",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "arts-301-l01-f2",
          "front": "narrative intent",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "arts-301-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "arts-301-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "arts-301-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about composition systems and narrative intent."
        },
        {
          "id": "arts-301-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Arts vocabulary."
        }
      ]
    },
    {
      "id": "arts-301-l02",
      "title": "Narrative Intent in Visual Design",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about composition systems from this lesson.",
          "Explain where narrative intent appears in real life.",
          "Describe one question you still have about advanced creative composition."
        ]
      },
      "interactiveActivities": [
        {
          "id": "arts-301-l02-ia1",
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
                "label": "Set a goal for composition systems",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for narrative intent",
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
          "id": "arts-301-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on narrative intent and write one reflection."
        }
      ]
    },
    {
      "id": "arts-301-l03",
      "title": "Checkpoint: Advanced Composition",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "arts-301-l03-q1",
          "text": "Which statement best explains composition systems in Arts?",
          "skillId": "arts-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains composition systems using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how composition systems works in practice."
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
          "id": "arts-301-l03-q2",
          "text": "What is the best first step when analyzing narrative intent?",
          "skillId": "arts-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for narrative intent."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to narrative intent."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l03-q3",
          "text": "Which option shows strong reasoning about advanced creative composition?",
          "skillId": "arts-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to advanced creative composition."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l03-q4",
          "text": "Why is spaced review useful for Arts mastery?",
          "skillId": "arts-301-skill-review",
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
          "id": "arts-301-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Advanced Composition",
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
                "label": "Confusion about composition systems"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to narrative intent"
              },
              {
                "id": "l3",
                "label": "Weak transfer of advanced creative composition under timing"
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
          "id": "arts-301-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "arts-301-l04",
      "title": "Iteration and Refinement Workflow",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "arts-301-l04-c1",
          "title": "Iteration and Refinement Workflow Focus",
          "content": "In this lesson, we will deepen our understanding of iterative revision by using structured reasoning. We will move from simply understanding concepts to making informed decisions based on those concepts. This workflow will help you refine your creative work and improve your overall artistic process.\nContext recap: In this lesson, we will deepen our understanding of iterative revision by using structured reasoning. We will move from simply understanding concepts to making informed decisions based on those concepts. This workflow will help you refine your creative work and improve your overall artistic process."
        },
        {
          "id": "arts-301-l04-c2",
          "title": "Method Steps",
          "content": "Let's break down the method steps for effective iterative revision. Step 1: Identify what is being asked in your creative task. Step 2: Choose a strategy that aligns with the principles of iterative revision. Step 3: Justify your choices with evidence that supports your decisions. Following these steps will enhance your ability to revise and improve your work.\nContext recap: Let's break down the method steps for effective iterative revision. Step 1: Identify what is being asked in your creative task. Step 2: Choose a strategy that aligns with the principles of iterative revision. Step 3: Justify your choices with evidence that supports your decisions."
        },
        {
          "id": "arts-301-l04-c3",
          "title": "Common Mistakes",
          "content": "It's important to be aware of common mistakes that can occur during the revision process. These include skipping the initial setup, using assumptions that are not related to your work, or failing to verify the final result of your revisions. By recognizing these pitfalls, you can avoid them and strengthen your creative process.\nContext recap: It's important to be aware of common mistakes that can occur during the revision process. These include skipping the initial setup, using assumptions that are not related to your work, or failing to verify the final result of your revisions. By recognizing these pitfalls, you can avoid them and strengthen your creative process."
        },
        {
          "id": "arts-301-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar item on your own! After you complete it, take a moment to compare your process to the lesson sequence we discussed. This reflection will help you understand your own approach and identify areas for improvement in your creative workflow.\nContext recap: Now, it's time for you to try solving a similar item on your own! After you complete it, take a moment to compare your process to the lesson sequence we discussed. This reflection will help you understand your own approach and identify areas for improvement in your creative workflow."
        }
      ],
      "flashcards": [
        {
          "id": "arts-301-l04-f1",
          "front": "iterative revision",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "arts-301-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "arts-301-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "arts-301-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "arts-301-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for iterative revision scenarios."
        }
      ]
    },
    {
      "id": "arts-301-l05",
      "title": "Critique Language and Evidence",
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
          "id": "arts-301-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "iterative revision Concept"
              },
              {
                "id": "process",
                "label": "critique and curation Process"
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
          "id": "arts-301-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a iterative revision challenge."
        }
      ]
    },
    {
      "id": "arts-301-l06",
      "title": "Checkpoint: Creative Revision Quality",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "arts-301-l06-q1",
          "text": "Which statement best explains iterative revision in Arts?",
          "skillId": "arts-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains iterative revision using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how iterative revision works in practice."
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
          "id": "arts-301-l06-q2",
          "text": "What is the best first step when analyzing critique and curation?",
          "skillId": "arts-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for critique and curation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to critique and curation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l06-q3",
          "text": "Which option shows strong reasoning about advanced creative composition?",
          "skillId": "arts-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to advanced creative composition."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l06-q4",
          "text": "Why is spaced review useful for Arts mastery?",
          "skillId": "arts-301-skill-review",
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
          "id": "arts-301-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Creative Revision Quality",
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
                "label": "Confusion about iterative revision"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to critique and curation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of advanced creative composition under timing"
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
          "id": "arts-301-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "arts-301-l07",
      "title": "Portfolio Curation Principles",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "arts-301-l07-c1",
          "title": "Portfolio Curation Principles Setup",
          "content": "Before you start your creative project, it's essential to use critique and curation to organize your approach. Planning ahead can significantly improve both the quality and speed of your work. By taking the time to think through your ideas, you set yourself up for success in your creative endeavors.\nContext recap: Before you start your creative project, it's essential to use critique and curation to organize your approach. Planning ahead can significantly improve both the quality and speed of your work. By taking the time to think through your ideas, you set yourself up for success in your creative endeavors."
        },
        {
          "id": "arts-301-l07-c2",
          "title": "Decision Rules",
          "content": "When you are working on your creative projects and have to choose between different ideas or options, it can sometimes be tricky. A good way to make these decisions is to follow a simple rule: always pick the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. This approach will help you make thoughtful choices that can improve your work and make it even better!\nContext recap: When you are working on your creative projects and have to choose between different ideas or options, it can sometimes be tricky. A good way to make these decisions is to follow a simple rule: always pick the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. This approach will help you make thoughtful choices that can improve your work and make it even better!"
        },
        {
          "id": "arts-301-l07-c3",
          "title": "Quality Control",
          "content": "As you finalize your work, remember to check for three important things: accuracy, completeness, and alignment with your original objective. Ensuring these elements are in place will help you maintain high standards in your creative projects.\nContext recap: As you finalize your work, remember to check for three important things: accuracy, completeness, and alignment with your original objective. Ensuring these elements are in place will help you maintain high standards in your creative projects.\nWhy this matters: Quality Control helps learners in Arts connect ideas from Creative Arts Composition and Curation to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "arts-301-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your practice round, write down one action you would like to repeat and one action you want to improve for your next practice session. This reflection will help you continue to grow and develop your skills in the creative arts.\nContext recap: After completing your practice round, write down one action you would like to repeat and one action you want to improve for your next practice session. This reflection will help you continue to grow and develop your skills in the creative arts."
        }
      ],
      "flashcards": [
        {
          "id": "arts-301-l07-f1",
          "front": "critique and curation",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "arts-301-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "arts-301-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "arts-301-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "arts-301-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on critique and curation."
        }
      ]
    },
    {
      "id": "arts-301-l08",
      "title": "Studio Critique Lab",
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
          "id": "arts-301-l08-ia1",
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
          "id": "arts-301-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "arts-301-l09",
      "title": "Review: Artistic Decision-Making",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "arts-301-l09-q1",
          "text": "Which statement best explains narrative intent in Arts?",
          "skillId": "arts-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains narrative intent using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how narrative intent works in practice."
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
          "id": "arts-301-l09-q2",
          "text": "What is the best first step when analyzing critique and curation?",
          "skillId": "arts-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for critique and curation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to critique and curation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l09-q3",
          "text": "Which option shows strong reasoning about advanced creative composition?",
          "skillId": "arts-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to advanced creative composition."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l09-q4",
          "text": "Why is spaced review useful for Arts mastery?",
          "skillId": "arts-301-skill-review",
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
          "id": "arts-301-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Artistic Decision-Making",
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
                "label": "Confusion about narrative intent"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to critique and curation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of advanced creative composition under timing"
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
          "id": "arts-301-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "arts-301-l10",
      "title": "Mastery: Creative Arts III",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "arts-301-l10-q1",
          "text": "Which statement best explains composition systems in Arts?",
          "skillId": "arts-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains composition systems using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how composition systems works in practice."
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
          "id": "arts-301-l10-q2",
          "text": "What is the best first step when analyzing iterative revision?",
          "skillId": "arts-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for iterative revision."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to iterative revision."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l10-q3",
          "text": "Which option shows strong reasoning about advanced creative composition?",
          "skillId": "arts-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to advanced creative composition."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l10-q4",
          "text": "Why is spaced review useful for Arts mastery?",
          "skillId": "arts-301-skill-review",
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
          "id": "arts-301-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Creative Arts III",
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
                "label": "Confusion about composition systems"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to iterative revision"
              },
              {
                "id": "l3",
                "label": "Weak transfer of advanced creative composition under timing"
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
          "id": "arts-301-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "arts-301-l11",
      "title": "Applied Arts Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using iterative revision.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "arts-301-l11-ia1",
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
                "label": "Tag repeated mistakes in narrative intent",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on critique and curation",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "arts-301-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "arts-301-l12",
      "title": "Creative Arts III Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "arts-301-l12-q1",
          "text": "Which statement best explains composition systems in Arts?",
          "skillId": "arts-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains composition systems using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how composition systems works in practice."
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
          "id": "arts-301-l12-q2",
          "text": "What is the best first step when analyzing critique and curation?",
          "skillId": "arts-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for critique and curation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to critique and curation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l12-q3",
          "text": "Which option shows strong reasoning about advanced creative composition?",
          "skillId": "arts-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to advanced creative composition."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l12-q4",
          "text": "Why is spaced review useful for Arts mastery?",
          "skillId": "arts-301-skill-review",
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
          "id": "arts-301-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Creative Arts III Mastery Applied Retest",
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
                "label": "Confusion about composition systems"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to critique and curation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of advanced creative composition under timing"
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
          "id": "arts-301-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "arts-301-l13",
      "title": "Arts Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "arts-301-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, we will explore how to combine different systems of composition, the process of revising our work multiple times, and the important roles of critique and curation. This challenge will allow you to apply what you learn in a fun and creative way, helping you to grow as an artist.\nContext recap: In this exciting scenario, we will explore how to combine different systems of composition, the process of revising our work multiple times, and the important roles of critique and curation. This challenge will allow you to apply what you learn in a fun and creative way, helping you to grow as an artist."
        },
        {
          "id": "arts-301-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. For each decision point, think about which strategy would work best and assign that strategy to guide your choices. This will help you stay organized and focused as you create your masterpiece.\nContext recap: To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. For each decision point, think about which strategy would work best and assign that strategy to guide your choices. This will help you stay organized and focused as you create your masterpiece."
        },
        {
          "id": "arts-301-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's time to put your plan into action! As you execute each step, make sure to explain why you are making those choices. Use evidence from your previous work or research to support your decisions, rather than guessing. This will strengthen your artistic process and help you understand your own creative journey.\nContext recap: Now it's time to put your plan into action! As you execute each step, make sure to explain why you are making those choices. Use evidence from your previous work or research to support your decisions, rather than guessing. This will strengthen your artistic process and help you understand your own creative journey."
        },
        {
          "id": "arts-301-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After completing your project, take a moment to evaluate the outcome. Compare what you created with the goals you set at the beginning. Identify which elements of your work you want to keep and which parts might need some adjustments. This reflection is a crucial step in improving your skills and enhancing your future projects.\nContext recap: After completing your project, take a moment to evaluate the outcome. Compare what you created with the goals you set at the beginning. Identify which elements of your work you want to keep and which parts might need some adjustments. This reflection is a crucial step in improving your skills and enhancing your future projects."
        }
      ],
      "flashcards": [
        {
          "id": "arts-301-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "arts-301-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "arts-301-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "arts-301-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "arts-301-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting composition systems, iterative revision, and critique and curation."
        },
        {
          "id": "arts-301-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "arts-301-l14",
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
          "id": "arts-301-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on composition systems setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed critique and curation decisions"
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
          "id": "arts-301-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "arts-301-l15",
      "title": "Creative Arts III Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "arts-301-l15-q1",
          "text": "Which statement best explains narrative intent in Arts?",
          "skillId": "arts-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains narrative intent using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how narrative intent works in practice."
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
          "id": "arts-301-l15-q2",
          "text": "What is the best first step when analyzing iterative revision?",
          "skillId": "arts-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for iterative revision."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to iterative revision."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l15-q3",
          "text": "Which option shows strong reasoning about advanced creative composition?",
          "skillId": "arts-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to advanced creative composition."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l15-q4",
          "text": "Why is spaced review useful for Arts mastery?",
          "skillId": "arts-301-skill-review",
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
          "id": "arts-301-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Creative Arts III Mastery Mastery Sprint",
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
                "label": "Confusion about narrative intent"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to iterative revision"
              },
              {
                "id": "l3",
                "label": "Weak transfer of advanced creative composition under timing"
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
          "id": "arts-301-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
