import type { LearningModule } from "@/lib/modules/types";

export const GeneralRelativity101Module: LearningModule = {
  "id": "general-relativity-101",
  "title": "General Relativity Intro",
  "description": "Introduce spacetime, gravity, and Einstein ideas through intuitive models.",
  "subject": "General Relativity",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in General Relativity",
    "Apply Spacetime Reasoning strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "general-relativity-101-l01",
      "title": "Classical vs Relativistic Thinking",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "general-relativity-101-l01-c1",
          "title": "Classical vs Relativistic Thinking Overview",
          "content": "In this lesson, we will embark on an exciting journey to explore the concept of frames of reference. Frames of reference are like different viewpoints that help us understand how we see and experience events happening in the universe around us. To make this even more interesting, we will examine these ideas through the fascinating lens of spacetime, which combines space and time into one amazing concept! Our main goal is to learn how to think critically and identify strong reasoning skills before we tackle any problems. By doing this, we will become better thinkers and problem solvers in the wonderful world of physics, ready to tackle any challenges that come our way!"
        },
        {
          "id": "general-relativity-101-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will discover how frames of reference and the concept of spacetime work together to shape our understanding of the universe. First, we will identify the main idea we want to focus on. Then, we will look for evidence or steps that support this idea. This process will help us build a strong foundation for understanding more complex concepts in physics.\nContext recap: In this section, we will discover how frames of reference and the concept of spacetime work together to shape our understanding of the universe. First, we will identify the main idea we want to focus on. Then, we will look for evidence or steps that support this idea. This process will help us build a strong foundation for understanding more complex concepts in physics."
        },
        {
          "id": "general-relativity-101-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! First, we will define our goal clearly. Next, we will apply a strategy that involves spacetime concepts to help us reach that goal. Finally, we will verify our result with a quick check to make sure we did everything correctly. This step-by-step approach will help you feel more confident in tackling similar problems on your own.\nContext recap: Let's walk through a guided example together! First, we will define our goal clearly. Next, we will apply a strategy that involves spacetime concepts to help us reach that goal. Finally, we will verify our result with a quick check to make sure we did everything correctly.\nWhy this matters: Worked Example helps learners in General Relativity connect ideas from General Relativity Intro to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "general-relativity-101-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn! Try applying the same process we just discussed to a new scenario. As you work through it, make sure to explain why your approach is valid in one clear sentence. This will help you practice your reasoning skills and reinforce your understanding of the concepts we've learned.\nContext recap: Now it's your turn! Try applying the same process we just discussed to a new scenario. As you work through it, make sure to explain why your approach is valid in one clear sentence. This will help you practice your reasoning skills and reinforce your understanding of the concepts we've learned."
        }
      ],
      "flashcards": [
        {
          "id": "general-relativity-101-l01-f1",
          "front": "frames of reference",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "general-relativity-101-l01-f2",
          "front": "spacetime",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "general-relativity-101-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "general-relativity-101-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "general-relativity-101-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about frames of reference and spacetime."
        },
        {
          "id": "general-relativity-101-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing General Relativity vocabulary."
        }
      ]
    },
    {
      "id": "general-relativity-101-l02",
      "title": "Space and Time Together",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about frames of reference from this lesson.",
          "Explain where spacetime appears in real life.",
          "Describe one question you still have about spacetime concepts."
        ]
      },
      "interactiveActivities": [
        {
          "id": "general-relativity-101-l02-ia1",
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
                "label": "Set a goal for frames of reference",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for spacetime",
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
          "id": "general-relativity-101-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on spacetime and write one reflection."
        }
      ]
    },
    {
      "id": "general-relativity-101-l03",
      "title": "Checkpoint: Relativity Basics",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-relativity-101-l03-q1",
          "text": "Which statement best explains frames of reference in General Relativity?",
          "skillId": "general-relativity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains frames of reference using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how frames of reference works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside General Relativity."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-101-l03-q2",
          "text": "What is the best first step when analyzing spacetime?",
          "skillId": "general-relativity-101-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for spacetime."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to spacetime."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-101-l03-q3",
          "text": "Which option shows strong reasoning about spacetime concepts?",
          "skillId": "general-relativity-101-skill-reasoning",
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
              "text": "Use assumptions unrelated to spacetime concepts."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-101-l03-q4",
          "text": "Why is spaced review useful for General Relativity mastery?",
          "skillId": "general-relativity-101-skill-review",
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
          "id": "general-relativity-101-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Relativity Basics",
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
                "label": "Confusion about frames of reference"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to spacetime"
              },
              {
                "id": "l3",
                "label": "Weak transfer of spacetime concepts under timing"
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
          "id": "general-relativity-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-relativity-101-l04",
      "title": "Gravity as Curvature",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "general-relativity-101-l04-c1",
          "title": "Gravity as Curvature Focus",
          "content": "In this lesson, we will take a deeper look at how gravity can be understood as curvature in spacetime. We will use structured reasoning to connect our understanding of gravity to real-world applications. By moving from simply understanding the concept to making applied decisions, we will enhance our grasp of how gravity influences the universe around us.\nContext recap: In this lesson, we will take a deeper look at how gravity can be understood as curvature in spacetime. We will use structured reasoning to connect our understanding of gravity to real-world applications. By moving from simply understanding the concept to making applied decisions, we will enhance our grasp of how gravity influences the universe around us."
        },
        {
          "id": "general-relativity-101-l04-c2",
          "title": "Method Steps",
          "content": "Let's break down the steps we need to follow in this lesson. Step 1: Identify what is being asked in the problem. Step 2: Choose a strategy that aligns with the concept of gravity as curvature. Step 3: Justify your choice with evidence to support your reasoning. Following these steps will help you approach problems systematically and effectively.\nContext recap: Let's break down the steps we need to follow in this lesson. Step 1: Identify what is being asked in the problem. Step 2: Choose a strategy that aligns with the concept of gravity as curvature. Step 3: Justify your choice with evidence to support your reasoning."
        },
        {
          "id": "general-relativity-101-l04-c3",
          "title": "Common Mistakes",
          "content": "As we learn, it's important to be aware of common mistakes that can occur. Some of these include skipping the setup of the problem, using assumptions that are not related to the situation, or failing to verify the final result. By recognizing these pitfalls, we can improve our problem-solving skills and avoid making the same errors in the future.\nContext recap: As we learn, it's important to be aware of common mistakes that can occur. Some of these include skipping the setup of the problem, using assumptions that are not related to the situation, or failing to verify the final result. By recognizing these pitfalls, we can improve our problem-solving skills and avoid making the same errors in the future."
        },
        {
          "id": "general-relativity-101-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar problem on your own! After you complete it, take a moment to compare your process with the sequence we discussed in the lesson. This reflection will help you identify areas where you did well and where you might want to improve in your next practice.\nContext recap: Now, it's time for you to try solving a similar problem on your own! After you complete it, take a moment to compare your process with the sequence we discussed in the lesson. This reflection will help you identify areas where you did well and where you might want to improve in your next practice."
        }
      ],
      "flashcards": [
        {
          "id": "general-relativity-101-l04-f1",
          "front": "gravity curvature",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "general-relativity-101-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "general-relativity-101-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "general-relativity-101-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "general-relativity-101-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for gravity curvature scenarios."
        }
      ]
    },
    {
      "id": "general-relativity-101-l05",
      "title": "Black Holes and Lensing",
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
          "id": "general-relativity-101-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "gravity curvature Concept"
              },
              {
                "id": "process",
                "label": "evidence Process"
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
          "id": "general-relativity-101-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a gravity curvature challenge."
        }
      ]
    },
    {
      "id": "general-relativity-101-l06",
      "title": "Checkpoint: Spacetime Reasoning",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-relativity-101-l06-q1",
          "text": "Which statement best explains gravity curvature in General Relativity?",
          "skillId": "general-relativity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains gravity curvature using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how gravity curvature works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside General Relativity."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-101-l06-q2",
          "text": "What is the best first step when analyzing evidence?",
          "skillId": "general-relativity-101-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for evidence."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to evidence."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-101-l06-q3",
          "text": "Which option shows strong reasoning about spacetime concepts?",
          "skillId": "general-relativity-101-skill-reasoning",
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
              "text": "Use assumptions unrelated to spacetime concepts."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-101-l06-q4",
          "text": "Why is spaced review useful for General Relativity mastery?",
          "skillId": "general-relativity-101-skill-review",
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
          "id": "general-relativity-101-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Spacetime Reasoning",
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
                "label": "Confusion about gravity curvature"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to evidence"
              },
              {
                "id": "l3",
                "label": "Weak transfer of spacetime concepts under timing"
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
          "id": "general-relativity-101-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-relativity-101-l07",
      "title": "Cosmology Connections",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "general-relativity-101-l07-c1",
          "title": "Cosmology Connections Setup",
          "content": "Before you start working on a problem, it's helpful to organize your approach using evidence. Planning ahead can significantly improve both the quality of your work and the speed at which you complete it. By taking a moment to think through your strategy, you set yourself up for success!\nContext recap: Before you start working on a problem, it's helpful to organize your approach using evidence. Planning ahead can significantly improve both the quality of your work and the speed at which you complete it. By taking a moment to think through your strategy, you set yourself up for success!"
        },
        {
          "id": "general-relativity-101-l07-c2",
          "title": "Decision Rules",
          "content": "When you find yourself with several choices to make, it can sometimes be tricky to decide which one to pick. A helpful way to make your decision easier is to follow a simple rule: always choose the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. By using this strategy, you will not only make better choices but also deepen your understanding of the subject you are studying. Remember, making informed decisions is a valuable skill that will help you in many areas of life!"
        },
        {
          "id": "general-relativity-101-l07-c3",
          "title": "Quality Control",
          "content": "As you review your work, check for three important things: accuracy, completeness, and alignment with the original objective. By ensuring that your work meets these criteria, you can be more confident in your understanding and the quality of your answers.\nContext recap: As you review your work, check for three important things: accuracy, completeness, and alignment with the original objective. By ensuring that your work meets these criteria, you can be more confident in your understanding and the quality of your answers."
        },
        {
          "id": "general-relativity-101-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your practice, take a moment to write down one action you want to repeat in your next round and one action you want to improve. This reflection will help you focus on your growth and make your future practice sessions even more effective.\nContext recap: After completing your practice, take a moment to write down one action you want to repeat in your next round and one action you want to improve. This reflection will help you focus on your growth and make your future practice sessions even more effective."
        }
      ],
      "flashcards": [
        {
          "id": "general-relativity-101-l07-f1",
          "front": "evidence",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "general-relativity-101-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "general-relativity-101-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "general-relativity-101-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "general-relativity-101-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on evidence."
        }
      ]
    },
    {
      "id": "general-relativity-101-l08",
      "title": "Thought Experiment Activity",
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
          "id": "general-relativity-101-l08-ia1",
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
          "id": "general-relativity-101-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "general-relativity-101-l09",
      "title": "Review: Relativity Concepts",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-relativity-101-l09-q1",
          "text": "Which statement best explains spacetime in General Relativity?",
          "skillId": "general-relativity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains spacetime using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how spacetime works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside General Relativity."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-101-l09-q2",
          "text": "What is the best first step when analyzing evidence?",
          "skillId": "general-relativity-101-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for evidence."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to evidence."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-101-l09-q3",
          "text": "Which option shows strong reasoning about spacetime concepts?",
          "skillId": "general-relativity-101-skill-reasoning",
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
              "text": "Use assumptions unrelated to spacetime concepts."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-101-l09-q4",
          "text": "Why is spaced review useful for General Relativity mastery?",
          "skillId": "general-relativity-101-skill-review",
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
          "id": "general-relativity-101-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Relativity Concepts",
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
                "label": "Confusion about spacetime"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to evidence"
              },
              {
                "id": "l3",
                "label": "Weak transfer of spacetime concepts under timing"
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
          "id": "general-relativity-101-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-relativity-101-l10",
      "title": "Mastery: General Relativity",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-relativity-101-l10-q1",
          "text": "Which statement best explains frames of reference in General Relativity?",
          "skillId": "general-relativity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains frames of reference using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how frames of reference works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside General Relativity."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-101-l10-q2",
          "text": "What is the best first step when analyzing gravity curvature?",
          "skillId": "general-relativity-101-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for gravity curvature."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to gravity curvature."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-101-l10-q3",
          "text": "Which option shows strong reasoning about spacetime concepts?",
          "skillId": "general-relativity-101-skill-reasoning",
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
              "text": "Use assumptions unrelated to spacetime concepts."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-101-l10-q4",
          "text": "Why is spaced review useful for General Relativity mastery?",
          "skillId": "general-relativity-101-skill-review",
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
          "id": "general-relativity-101-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: General Relativity",
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
                "label": "Confusion about frames of reference"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to gravity curvature"
              },
              {
                "id": "l3",
                "label": "Weak transfer of spacetime concepts under timing"
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
          "id": "general-relativity-101-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-relativity-101-l11",
      "title": "Applied General Relativity Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using gravity curvature.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "general-relativity-101-l11-ia1",
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
                "label": "Tag repeated mistakes in spacetime",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on evidence",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "general-relativity-101-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "general-relativity-101-l12",
      "title": "General Relativity Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-relativity-101-l12-q1",
          "text": "Which statement best explains frames of reference in General Relativity?",
          "skillId": "general-relativity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains frames of reference using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how frames of reference works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside General Relativity."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-101-l12-q2",
          "text": "What is the best first step when analyzing evidence?",
          "skillId": "general-relativity-101-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for evidence."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to evidence."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-101-l12-q3",
          "text": "Which option shows strong reasoning about spacetime concepts?",
          "skillId": "general-relativity-101-skill-reasoning",
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
              "text": "Use assumptions unrelated to spacetime concepts."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-101-l12-q4",
          "text": "Why is spaced review useful for General Relativity mastery?",
          "skillId": "general-relativity-101-skill-review",
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
          "id": "general-relativity-101-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: General Relativity Mastery Applied Retest",
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
                "label": "Confusion about frames of reference"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to evidence"
              },
              {
                "id": "l3",
                "label": "Weak transfer of spacetime concepts under timing"
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
          "id": "general-relativity-101-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-relativity-101-l13",
      "title": "General Relativity Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "general-relativity-101-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, we will explore how different frames of reference can change our understanding of gravity. We will also look at how gravity can curve space and time, and we will gather evidence to help us solve a fun challenge related to these concepts.\nContext recap: In this exciting scenario, we will explore how different frames of reference can change our understanding of gravity. We will also look at how gravity can curve space and time, and we will gather evidence to help us solve a fun challenge related to these concepts."
        },
        {
          "id": "general-relativity-101-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, let’s break it down into smaller, manageable decisions. For each decision point, we will think of a specific strategy that we can use. This way, we can approach the challenge step by step and make sure we are on the right track.\nContext recap: To tackle this scenario effectively, let’s break it down into smaller, manageable decisions. For each decision point, we will think of a specific strategy that we can use. This way, we can approach the challenge step by step and make sure we are on the right track."
        },
        {
          "id": "general-relativity-101-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it’s time to put our plan into action! As we execute each step, we will explain our reasoning and provide evidence for our choices. It’s important to base our decisions on facts rather than guesses, so we will use what we know about gravity and frames of reference to guide us.\nContext recap: Now it’s time to put our plan into action! As we execute each step, we will explain our reasoning and provide evidence for our choices. It’s important to base our decisions on facts rather than guesses, so we will use what we know about gravity and frames of reference to guide us."
        },
        {
          "id": "general-relativity-101-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After we have completed our scenario, we will take a moment to evaluate the outcome. We will compare our results to the goals we set at the beginning. This will help us identify what worked well and what might need some adjustments for next time.\nContext recap: After we have completed our scenario, we will take a moment to evaluate the outcome. We will compare our results to the goals we set at the beginning. This will help us identify what worked well and what might need some adjustments for next time."
        }
      ],
      "flashcards": [
        {
          "id": "general-relativity-101-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "general-relativity-101-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "general-relativity-101-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "general-relativity-101-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "general-relativity-101-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting frames of reference, gravity curvature, and evidence."
        },
        {
          "id": "general-relativity-101-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "general-relativity-101-l14",
      "title": "General Relativity Coaching Clinic",
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
          "id": "general-relativity-101-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on frames of reference setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed evidence decisions"
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
          "id": "general-relativity-101-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "general-relativity-101-l15",
      "title": "General Relativity Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-relativity-101-l15-q1",
          "text": "Which statement best explains spacetime in General Relativity?",
          "skillId": "general-relativity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains spacetime using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how spacetime works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside General Relativity."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-101-l15-q2",
          "text": "What is the best first step when analyzing gravity curvature?",
          "skillId": "general-relativity-101-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for gravity curvature."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to gravity curvature."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-101-l15-q3",
          "text": "Which option shows strong reasoning about spacetime concepts?",
          "skillId": "general-relativity-101-skill-reasoning",
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
              "text": "Use assumptions unrelated to spacetime concepts."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-101-l15-q4",
          "text": "Why is spaced review useful for General Relativity mastery?",
          "skillId": "general-relativity-101-skill-review",
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
          "id": "general-relativity-101-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: General Relativity Mastery Mastery Sprint",
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
                "label": "Confusion about spacetime"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to gravity curvature"
              },
              {
                "id": "l3",
                "label": "Weak transfer of spacetime concepts under timing"
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
          "id": "general-relativity-101-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
