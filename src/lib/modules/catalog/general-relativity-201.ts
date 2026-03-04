import type { LearningModule } from "@/lib/modules/types";

export const GeneralRelativity201Module: LearningModule = {
  "id": "general-relativity-201",
  "title": "General Relativity Applications",
  "description": "Use spacetime ideas to explain lensing, orbits, and modern cosmological observations.",
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
    "Apply Evidence for Relativity strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "general-relativity-201-l01",
      "title": "Geodesics and Motion",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "general-relativity-201-l01-c1",
          "title": "Geodesics and Motion Overview",
          "content": "In this lesson, we will dive into the exciting world of geodesics! Geodesics are the special paths that objects take as they move through the fabric of spacetime. Imagine spacetime as a giant stretchy sheet, and when something heavy, like a planet or a star, sits on it, the sheet curves around it. This curvature affects how objects travel. Our main goal today is to learn how to recognize strong reasoning when we think about these concepts. This understanding will be super helpful as we tackle problems about how things move in our universe, like planets orbiting stars or even how light travels! Let's get ready to explore these amazing ideas together!"
        },
        {
          "id": "general-relativity-201-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will explore the fascinating relationship between geodesics and the curvature of spacetime. Geodesics are the paths that objects follow when they move through the universe, and they are influenced by how spacetime is curved by mass and energy. First, we will identify the main idea we want to focus on, which is how these two concepts are connected. Next, we will gather evidence and steps that support this idea, helping us to understand how geodesics and spacetime curvature work together to shape the movement of objects in our universe. This understanding is crucial for grasping the principles of general relativity and how they apply to everything around us, from planets to light itself."
        },
        {
          "id": "general-relativity-201-l01-c3",
          "title": "Worked Example",
          "content": "Let's embark on a fun journey through a guided example together! First, we will clearly define what our goal is, so we know what we are trying to achieve. Next, we will explore a strategy that helps us understand how the curvature of spacetime influences the way objects move. This is a fascinating concept that shows how gravity can bend the path of moving things! Finally, we will take a moment to check our results to ensure that we have grasped the idea correctly. By following this step-by-step approach, we will make the concept much clearer and easier to understand. Are you ready to dive in?"
        },
        {
          "id": "general-relativity-201-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn! Try applying the same process we just learned to a new situation. As you do this, make sure to explain in one clear sentence why your approach is valid. This will help you solidify your understanding and show how you can use these concepts in different scenarios.\nContext recap: Now it's your turn! Try applying the same process we just learned to a new situation. As you do this, make sure to explain in one clear sentence why your approach is valid. This will help you solidify your understanding and show how you can use these concepts in different scenarios."
        }
      ],
      "flashcards": [
        {
          "id": "general-relativity-201-l01-f1",
          "front": "geodesics",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "general-relativity-201-l01-f2",
          "front": "spacetime curvature",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "general-relativity-201-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "general-relativity-201-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "general-relativity-201-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about geodesics and spacetime curvature."
        },
        {
          "id": "general-relativity-201-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing General Relativity vocabulary."
        }
      ]
    },
    {
      "id": "general-relativity-201-l02",
      "title": "Curvature and Gravitational Effects",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about geodesics from this lesson.",
          "Explain where spacetime curvature appears in real life.",
          "Describe one question you still have about spacetime applications and evidence."
        ]
      },
      "interactiveActivities": [
        {
          "id": "general-relativity-201-l02-ia1",
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
                "label": "Set a goal for geodesics",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for spacetime curvature",
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
          "id": "general-relativity-201-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on spacetime curvature and write one reflection."
        }
      ]
    },
    {
      "id": "general-relativity-201-l03",
      "title": "Checkpoint: Relativity Applications",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-relativity-201-l03-q1",
          "text": "Which statement best explains geodesics in General Relativity?",
          "skillId": "general-relativity-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains geodesics using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how geodesics works in practice."
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
          "id": "general-relativity-201-l03-q2",
          "text": "What is the best first step when analyzing spacetime curvature?",
          "skillId": "general-relativity-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for spacetime curvature."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to spacetime curvature."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-201-l03-q3",
          "text": "Which option shows strong reasoning about spacetime applications and evidence?",
          "skillId": "general-relativity-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to spacetime applications and evidence."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-201-l03-q4",
          "text": "Why is spaced review useful for General Relativity mastery?",
          "skillId": "general-relativity-201-skill-review",
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
          "id": "general-relativity-201-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Relativity Applications",
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
                "label": "Confusion about geodesics"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to spacetime curvature"
              },
              {
                "id": "l3",
                "label": "Weak transfer of spacetime applications and evidence under timing"
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
          "id": "general-relativity-201-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-relativity-201-l04",
      "title": "Relativistic Time and Frames",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "general-relativity-201-l04-c1",
          "title": "Relativistic Time and Frames Focus",
          "content": "In this lesson, we will dive deeper into the effects of relativity and how they influence our understanding of time and frames of reference. We will move from simply understanding these concepts to making informed decisions based on structured reasoning. This will enhance our ability to think critically about relativistic effects.\nContext recap: In this lesson, we will dive deeper into the effects of relativity and how they influence our understanding of time and frames of reference. We will move from simply understanding these concepts to making informed decisions based on structured reasoning. This will enhance our ability to think critically about relativistic effects."
        },
        {
          "id": "general-relativity-201-l04-c2",
          "title": "Method Steps",
          "content": "Let's break down the steps we need to follow in this lesson. Step 1: Identify what question or problem we are trying to solve. Step 2: Choose a strategy that aligns with the effects of relativity we are studying. Step 3: Justify your choice with evidence that supports your reasoning. Following these steps will help us stay organized and focused.\nContext recap: Let's break down the steps we need to follow in this lesson. Step 1: Identify what question or problem we are trying to solve. Step 2: Choose a strategy that aligns with the effects of relativity we are studying. Step 3: Justify your choice with evidence that supports your reasoning."
        },
        {
          "id": "general-relativity-201-l04-c3",
          "title": "Common Mistakes",
          "content": "As we learn, it's important to be aware of common mistakes that can happen. Some frequent errors include skipping the initial setup of the problem, using assumptions that are not related to the topic, or forgetting to verify our final results. By being mindful of these pitfalls, we can improve our understanding and accuracy.\nContext recap: As we learn, it's important to be aware of common mistakes that can happen. Some frequent errors include skipping the initial setup of the problem, using assumptions that are not related to the topic, or forgetting to verify our final results. By being mindful of these pitfalls, we can improve our understanding and accuracy."
        },
        {
          "id": "general-relativity-201-l04-c4",
          "title": "Independent Try",
          "content": "Now, I encourage you to solve a similar problem on your own. After you complete it, take a moment to compare your process with the steps we discussed in the lesson. This reflection will help you understand your own approach and identify areas for improvement.\nContext recap: Now, I encourage you to solve a similar problem on your own. After you complete it, take a moment to compare your process with the steps we discussed in the lesson. This reflection will help you understand your own approach and identify areas for improvement."
        }
      ],
      "flashcards": [
        {
          "id": "general-relativity-201-l04-f1",
          "front": "relativistic effects",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "general-relativity-201-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "general-relativity-201-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "general-relativity-201-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "general-relativity-201-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for relativistic effects scenarios."
        }
      ]
    },
    {
      "id": "general-relativity-201-l05",
      "title": "Lensing and Astrophysical Signals",
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
          "id": "general-relativity-201-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "relativistic effects Concept"
              },
              {
                "id": "process",
                "label": "observational tests Process"
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
          "id": "general-relativity-201-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a relativistic effects challenge."
        }
      ]
    },
    {
      "id": "general-relativity-201-l06",
      "title": "Checkpoint: Evidence for Relativity",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-relativity-201-l06-q1",
          "text": "Which statement best explains relativistic effects in General Relativity?",
          "skillId": "general-relativity-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains relativistic effects using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how relativistic effects works in practice."
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
          "id": "general-relativity-201-l06-q2",
          "text": "What is the best first step when analyzing observational tests?",
          "skillId": "general-relativity-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for observational tests."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to observational tests."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-201-l06-q3",
          "text": "Which option shows strong reasoning about spacetime applications and evidence?",
          "skillId": "general-relativity-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to spacetime applications and evidence."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-201-l06-q4",
          "text": "Why is spaced review useful for General Relativity mastery?",
          "skillId": "general-relativity-201-skill-review",
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
          "id": "general-relativity-201-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Evidence for Relativity",
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
                "label": "Confusion about relativistic effects"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to observational tests"
              },
              {
                "id": "l3",
                "label": "Weak transfer of spacetime applications and evidence under timing"
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
          "id": "general-relativity-201-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-relativity-201-l07",
      "title": "Cosmology and Expansion Models",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "general-relativity-201-l07-c1",
          "title": "Cosmology and Expansion Models Setup",
          "content": "Before we begin our exploration of cosmology and expansion models, it's helpful to use observational tests to organize our approach. Planning ahead can greatly improve both the quality of our work and the speed at which we complete it. This preparation is key to successful problem-solving.\nContext recap: Before we begin our exploration of cosmology and expansion models, it's helpful to use observational tests to organize our approach. Planning ahead can greatly improve both the quality of our work and the speed at which we complete it. This preparation is key to successful problem-solving."
        },
        {
          "id": "general-relativity-201-l07-c2",
          "title": "Decision Rules",
          "content": "When we have to make decisions and there are many options in front of us, it can sometimes feel overwhelming. To help us choose wisely, we can follow a straightforward rule: always select the option that has the strongest evidence supporting it and the clearest connection to what we want to achieve. By using this strategy, we can make better-informed decisions, especially as we explore the fascinating field of cosmology and learn about the universe's expansion.\nContext recap: When we have to make decisions and there are many options in front of us, it can sometimes feel overwhelming. To help us choose wisely, we can follow a straightforward rule: always select the option that has the strongest evidence supporting it and the clearest connection to what we want to achieve. By using this strategy, we can make better-informed decisions, especially as we explore the fascinating field of cosmology and learn about the universe's expansion."
        },
        {
          "id": "general-relativity-201-l07-c3",
          "title": "Quality Control",
          "content": "As we work through our problems, it's important to perform quality control checks. We should look for three key things: accuracy, completeness, and whether our work aligns with the original objective we set out to achieve. This practice will ensure that our conclusions are reliable.\nContext recap: As we work through our problems, it's important to perform quality control checks. We should look for three key things: accuracy, completeness, and whether our work aligns with the original objective we set out to achieve. This practice will ensure that our conclusions are reliable."
        },
        {
          "id": "general-relativity-201-l07-c4",
          "title": "Next-Step Plan",
          "content": "To improve our practice, let's create a next-step plan. Write down one action you want to repeat in your next practice session and one action you want to improve. This will help you focus on your growth and development as you continue to learn.\nContext recap: To improve our practice, let's create a next-step plan. Write down one action you want to repeat in your next practice session and one action you want to improve. This will help you focus on your growth and development as you continue to learn."
        }
      ],
      "flashcards": [
        {
          "id": "general-relativity-201-l07-f1",
          "front": "observational tests",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "general-relativity-201-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "general-relativity-201-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "general-relativity-201-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "general-relativity-201-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on observational tests."
        }
      ]
    },
    {
      "id": "general-relativity-201-l08",
      "title": "Thought Experiment Studio",
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
          "id": "general-relativity-201-l08-ia1",
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
          "id": "general-relativity-201-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "general-relativity-201-l09",
      "title": "Review: Spacetime in Practice",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-relativity-201-l09-q1",
          "text": "Which statement best explains spacetime curvature in General Relativity?",
          "skillId": "general-relativity-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains spacetime curvature using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how spacetime curvature works in practice."
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
          "id": "general-relativity-201-l09-q2",
          "text": "What is the best first step when analyzing observational tests?",
          "skillId": "general-relativity-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for observational tests."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to observational tests."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-201-l09-q3",
          "text": "Which option shows strong reasoning about spacetime applications and evidence?",
          "skillId": "general-relativity-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to spacetime applications and evidence."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-201-l09-q4",
          "text": "Why is spaced review useful for General Relativity mastery?",
          "skillId": "general-relativity-201-skill-review",
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
          "id": "general-relativity-201-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Spacetime in Practice",
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
                "label": "Confusion about spacetime curvature"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to observational tests"
              },
              {
                "id": "l3",
                "label": "Weak transfer of spacetime applications and evidence under timing"
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
          "id": "general-relativity-201-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-relativity-201-l10",
      "title": "Mastery: General Relativity II",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-relativity-201-l10-q1",
          "text": "Which statement best explains geodesics in General Relativity?",
          "skillId": "general-relativity-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains geodesics using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how geodesics works in practice."
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
          "id": "general-relativity-201-l10-q2",
          "text": "What is the best first step when analyzing relativistic effects?",
          "skillId": "general-relativity-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for relativistic effects."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to relativistic effects."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-201-l10-q3",
          "text": "Which option shows strong reasoning about spacetime applications and evidence?",
          "skillId": "general-relativity-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to spacetime applications and evidence."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-201-l10-q4",
          "text": "Why is spaced review useful for General Relativity mastery?",
          "skillId": "general-relativity-201-skill-review",
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
          "id": "general-relativity-201-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: General Relativity II",
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
                "label": "Confusion about geodesics"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to relativistic effects"
              },
              {
                "id": "l3",
                "label": "Weak transfer of spacetime applications and evidence under timing"
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
          "id": "general-relativity-201-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-relativity-201-l11",
      "title": "Applied General Relativity Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using relativistic effects.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "general-relativity-201-l11-ia1",
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
                "label": "Tag repeated mistakes in spacetime curvature",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on observational tests",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "general-relativity-201-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "general-relativity-201-l12",
      "title": "General Relativity II Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-relativity-201-l12-q1",
          "text": "Which statement best explains geodesics in General Relativity?",
          "skillId": "general-relativity-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains geodesics using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how geodesics works in practice."
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
          "id": "general-relativity-201-l12-q2",
          "text": "What is the best first step when analyzing observational tests?",
          "skillId": "general-relativity-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for observational tests."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to observational tests."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-201-l12-q3",
          "text": "Which option shows strong reasoning about spacetime applications and evidence?",
          "skillId": "general-relativity-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to spacetime applications and evidence."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-201-l12-q4",
          "text": "Why is spaced review useful for General Relativity mastery?",
          "skillId": "general-relativity-201-skill-review",
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
          "id": "general-relativity-201-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: General Relativity II Mastery Applied Retest",
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
                "label": "Confusion about geodesics"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to observational tests"
              },
              {
                "id": "l3",
                "label": "Weak transfer of spacetime applications and evidence under timing"
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
          "id": "general-relativity-201-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-relativity-201-l13",
      "title": "General Relativity Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "general-relativity-201-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, we will explore the fascinating concepts of geodesics, which are the shortest paths in curved space, along with the effects of relativity that occur when objects move at high speeds. We will also conduct observational tests to see how these ideas apply in real-world situations. This challenge will help us understand how these principles work together in the universe.\nContext recap: In this exciting scenario, we will explore the fascinating concepts of geodesics, which are the shortest paths in curved space, along with the effects of relativity that occur when objects move at high speeds. We will also conduct observational tests to see how these ideas apply in real-world situations. This challenge will help us understand how these principles work together in the universe."
        },
        {
          "id": "general-relativity-201-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, we will break it down into smaller, manageable decisions. Each decision point will require careful thought, and we will assign a specific strategy to each one. This approach will help us stay organized and ensure that we consider all aspects of the challenge as we work through it step by step.\nContext recap: To tackle this scenario effectively, we will break it down into smaller, manageable decisions. Each decision point will require careful thought, and we will assign a specific strategy to each one. This approach will help us stay organized and ensure that we consider all aspects of the challenge as we work through it step by step."
        },
        {
          "id": "general-relativity-201-l13-c3",
          "title": "Execute and Justify",
          "content": "Once we have our plan in place, it's time to put it into action! As we execute each step, we will explain our reasoning and provide evidence to support our choices. This means we will rely on facts and logical conclusions rather than making guesses. By doing this, we can better understand the outcomes of our actions and learn from the process.\nContext recap: Once we have our plan in place, it's time to put it into action! As we execute each step, we will explain our reasoning and provide evidence to support our choices. This means we will rely on facts and logical conclusions rather than making guesses. By doing this, we can better understand the outcomes of our actions and learn from the process."
        },
        {
          "id": "general-relativity-201-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After we have completed our scenario, we will take a moment to evaluate the outcome. We will compare our results to the original target we aimed for and discuss what worked well and what might need to be adjusted. This reflection will help us identify the strengths of our approach and areas for improvement, allowing us to enhance our understanding of general relativity.\nContext recap: After we have completed our scenario, we will take a moment to evaluate the outcome. We will compare our results to the original target we aimed for and discuss what worked well and what might need to be adjusted. This reflection will help us identify the strengths of our approach and areas for improvement, allowing us to enhance our understanding of general relativity."
        }
      ],
      "flashcards": [
        {
          "id": "general-relativity-201-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "general-relativity-201-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "general-relativity-201-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "general-relativity-201-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "general-relativity-201-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting geodesics, relativistic effects, and observational tests."
        },
        {
          "id": "general-relativity-201-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "general-relativity-201-l14",
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
          "id": "general-relativity-201-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on geodesics setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed observational tests decisions"
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
          "id": "general-relativity-201-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "general-relativity-201-l15",
      "title": "General Relativity II Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-relativity-201-l15-q1",
          "text": "Which statement best explains spacetime curvature in General Relativity?",
          "skillId": "general-relativity-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains spacetime curvature using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how spacetime curvature works in practice."
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
          "id": "general-relativity-201-l15-q2",
          "text": "What is the best first step when analyzing relativistic effects?",
          "skillId": "general-relativity-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for relativistic effects."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to relativistic effects."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-201-l15-q3",
          "text": "Which option shows strong reasoning about spacetime applications and evidence?",
          "skillId": "general-relativity-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to spacetime applications and evidence."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-relativity-201-l15-q4",
          "text": "Why is spaced review useful for General Relativity mastery?",
          "skillId": "general-relativity-201-skill-review",
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
          "id": "general-relativity-201-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: General Relativity II Mastery Mastery Sprint",
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
                "label": "Confusion about spacetime curvature"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to relativistic effects"
              },
              {
                "id": "l3",
                "label": "Weak transfer of spacetime applications and evidence under timing"
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
          "id": "general-relativity-201-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
