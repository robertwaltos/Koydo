import type { LearningModule } from "@/lib/modules/types";

export const Astronomy201Module: LearningModule = {
  "id": "astronomy-201",
  "title": "Astronomy Observation and Models",
  "description": "Connect observational data to models of stars, planets, and large-scale cosmic structure.",
  "subject": "Astronomy",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Astronomy",
    "Apply Space Model Reasoning strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "astronomy-201-l01",
      "title": "Orbital Patterns and Predictions",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "astronomy-201-l01-c1",
          "title": "Orbital Patterns and Predictions Overview",
          "content": "In this exciting lesson, we will dive into the captivating world of orbital patterns! We will use our keen observational skills and logical reasoning to uncover the secrets of how celestial bodies move in space. Our main goal is to understand what strong reasoning looks like, which will empower us to make accurate predictions about the movements of stars, planets, and other objects in the night sky. By the end of this lesson, you will feel more confident in analyzing and interpreting the beautiful patterns we observe above us, helping you become a mini astronomer!"
        },
        {
          "id": "astronomy-201-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will learn how orbital patterns and the classification of stars work together to help us understand the universe. We will start by identifying the main focus of our study, which is the specific celestial object we are observing. Then, we will look for evidence and steps that support our findings, allowing us to build a strong argument based on our observations.\nContext recap: In this section, we will learn how orbital patterns and the classification of stars work together to help us understand the universe. We will start by identifying the main focus of our study, which is the specific celestial object we are observing. Then, we will look for evidence and steps that support our findings, allowing us to build a strong argument based on our observations."
        },
        {
          "id": "astronomy-201-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! First, we will define our goal, which is to classify a particular star based on its characteristics. Next, we will apply a strategy for stellar classification, using the information we have gathered. Finally, we will verify our result with a quick check to ensure that our classification is accurate and makes sense.\nContext recap: Let's walk through a guided example together! First, we will define our goal, which is to classify a particular star based on its characteristics. Next, we will apply a strategy for stellar classification, using the information we have gathered. Finally, we will verify our result with a quick check to ensure that our classification is accurate and makes sense."
        },
        {
          "id": "astronomy-201-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to shine like a star! Take the same steps we just talked about and apply them to a new situation that involves a different celestial object, like a planet or a moon. As you think through your process, make sure to explain in one clear sentence why the way you approached it makes sense. This will not only help you understand the concepts better but also show how well you can think critically about astronomy!\nContext recap: Now it's your turn to shine like a star! Take the same steps we just talked about and apply them to a new situation that involves a different celestial object, like a planet or a moon. As you think through your process, make sure to explain in one clear sentence why the way you approached it makes sense. This will not only help you understand the concepts better but also show how well you can think critically about astronomy!"
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-201-l01-f1",
          "front": "orbital patterns",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "astronomy-201-l01-f2",
          "front": "stellar classification",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "astronomy-201-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "astronomy-201-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-201-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about orbital patterns and stellar classification."
        },
        {
          "id": "astronomy-201-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Astronomy vocabulary."
        }
      ]
    },
    {
      "id": "astronomy-201-l02",
      "title": "Classifying Stars by Evidence",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about orbital patterns from this lesson.",
          "Explain where stellar classification appears in real life.",
          "Describe one question you still have about astronomical reasoning from observations."
        ]
      },
      "interactiveActivities": [
        {
          "id": "astronomy-201-l02-ia1",
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
                "label": "Set a goal for orbital patterns",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for stellar classification",
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
          "id": "astronomy-201-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on stellar classification and write one reflection."
        }
      ]
    },
    {
      "id": "astronomy-201-l03",
      "title": "Checkpoint: Observational Astronomy",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "astronomy-201-l03-q1",
          "text": "Which statement best explains orbital patterns in Astronomy?",
          "skillId": "astronomy-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains orbital patterns using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how orbital patterns works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Astronomy."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-201-l03-q2",
          "text": "What is the best first step when analyzing stellar classification?",
          "skillId": "astronomy-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for stellar classification."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to stellar classification."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-201-l03-q3",
          "text": "Which option shows strong reasoning about astronomical reasoning from observations?",
          "skillId": "astronomy-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to astronomical reasoning from observations."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-201-l03-q4",
          "text": "Why is spaced review useful for Astronomy mastery?",
          "skillId": "astronomy-201-skill-review",
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
          "id": "astronomy-201-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Observational Astronomy",
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
                "label": "Confusion about orbital patterns"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to stellar classification"
              },
              {
                "id": "l3",
                "label": "Weak transfer of astronomical reasoning from observations under timing"
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
          "id": "astronomy-201-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "astronomy-201-l04",
      "title": "Measuring Distance and Scale",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "astronomy-201-l04-c1",
          "title": "Measuring Distance and Scale Focus",
          "content": "In this lesson, we will deepen our understanding of distance and scale in astronomy by using structured reasoning. We will move from simply understanding these concepts to making applied decisions based on our knowledge. This will help us better comprehend the vastness of space and how we measure distances between celestial bodies.\nContext recap: In this lesson, we will deepen our understanding of distance and scale in astronomy by using structured reasoning. We will move from simply understanding these concepts to making applied decisions based on our knowledge. This will help us better comprehend the vastness of space and how we measure distances between celestial bodies."
        },
        {
          "id": "astronomy-201-l04-c2",
          "title": "Method Steps",
          "content": "Let's break down the method we will use in this lesson into clear steps. Step 1: Identify what is being asked in the problem. Step 2: Choose a strategy that aligns with the concepts of distance and scale. Step 3: Justify your choice with evidence from your observations or calculations. This structured approach will guide you in solving problems effectively.\nContext recap: Let's break down the method we will use in this lesson into clear steps. Step 1: Identify what is being asked in the problem. Step 2: Choose a strategy that aligns with the concepts of distance and scale. Step 3: Justify your choice with evidence from your observations or calculations."
        },
        {
          "id": "astronomy-201-l04-c3",
          "title": "Common Mistakes",
          "content": "As we work through problems related to distance and scale, it's important to be aware of common mistakes. Some frequent errors include skipping the initial setup, using assumptions that are not related to the problem, or failing to verify the final result. By being mindful of these pitfalls, you can improve your accuracy and understanding.\nContext recap: As we work through problems related to distance and scale, it's important to be aware of common mistakes. Some frequent errors include skipping the initial setup, using assumptions that are not related to the problem, or failing to verify the final result. By being mindful of these pitfalls, you can improve your accuracy and understanding."
        },
        {
          "id": "astronomy-201-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar problem on your own! After you complete it, take a moment to compare your process with the steps we discussed in the lesson. This reflection will help you identify any areas for improvement and reinforce your learning.\nContext recap: Now, it's time for you to try solving a similar problem on your own! After you complete it, take a moment to compare your process with the steps we discussed in the lesson. This reflection will help you identify any areas for improvement and reinforce your learning."
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-201-l04-f1",
          "front": "distance and scale",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "astronomy-201-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "astronomy-201-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "astronomy-201-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-201-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for distance and scale scenarios."
        }
      ]
    },
    {
      "id": "astronomy-201-l05",
      "title": "Galactic Structure and Motion",
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
          "id": "astronomy-201-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "distance and scale Concept"
              },
              {
                "id": "process",
                "label": "observational evidence Process"
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
          "id": "astronomy-201-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a distance and scale challenge."
        }
      ]
    },
    {
      "id": "astronomy-201-l06",
      "title": "Checkpoint: Space Model Reasoning",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "astronomy-201-l06-q1",
          "text": "Which statement best explains distance and scale in Astronomy?",
          "skillId": "astronomy-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains distance and scale using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how distance and scale works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Astronomy."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-201-l06-q2",
          "text": "What is the best first step when analyzing observational evidence?",
          "skillId": "astronomy-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for observational evidence."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to observational evidence."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-201-l06-q3",
          "text": "Which option shows strong reasoning about astronomical reasoning from observations?",
          "skillId": "astronomy-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to astronomical reasoning from observations."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-201-l06-q4",
          "text": "Why is spaced review useful for Astronomy mastery?",
          "skillId": "astronomy-201-skill-review",
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
          "id": "astronomy-201-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Space Model Reasoning",
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
                "label": "Confusion about distance and scale"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to observational evidence"
              },
              {
                "id": "l3",
                "label": "Weak transfer of astronomical reasoning from observations under timing"
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
          "id": "astronomy-201-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "astronomy-201-l07",
      "title": "Transient Events in the Sky",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "astronomy-201-l07-c1",
          "title": "Transient Events in the Sky Setup",
          "content": "Before diving into our observations of transient events in the sky, it's essential to organize our approach using observational evidence. By planning ahead, we can enhance both the quality of our observations and the speed at which we analyze them. This preparation will set us up for success in understanding these fascinating phenomena.\nContext recap: Before diving into our observations of transient events in the sky, it's essential to organize our approach using observational evidence. By planning ahead, we can enhance both the quality of our observations and the speed at which we analyze them. This preparation will set us up for success in understanding these fascinating phenomena."
        },
        {
          "id": "astronomy-201-l07-c2",
          "title": "Decision Rules",
          "content": "When we look at the sky and see different events happening, we often have to make choices about what to focus on. To help us make the best decisions, we can use a simple rule. Always choose the option that has the strongest evidence supporting it and the clearest connection to what we want to learn or achieve. This way, we can make smart choices as we explore the fascinating transient events in the sky, like shooting stars or changing clouds. By following this strategy, we can become better observers and understand the universe around us more clearly."
        },
        {
          "id": "astronomy-201-l07-c3",
          "title": "Quality Control",
          "content": "As we analyze our findings, we need to check for three important aspects: accuracy, completeness, and alignment with our original objective. By ensuring that our observations meet these criteria, we can maintain the quality of our work and draw reliable conclusions about the transient events we observe.\nContext recap: As we analyze our findings, we need to check for three important aspects: accuracy, completeness, and alignment with our original objective. By ensuring that our observations meet these criteria, we can maintain the quality of our work and draw reliable conclusions about the transient events we observe."
        },
        {
          "id": "astronomy-201-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your observations, take a moment to write down one action you would like to repeat in your next practice round and one action you would like to improve. This reflection will help you develop a plan for continuous improvement in your observational skills and deepen your understanding of transient events in the sky.\nContext recap: After completing your observations, take a moment to write down one action you would like to repeat in your next practice round and one action you would like to improve. This reflection will help you develop a plan for continuous improvement in your observational skills and deepen your understanding of transient events in the sky."
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-201-l07-f1",
          "front": "observational evidence",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "astronomy-201-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "astronomy-201-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "astronomy-201-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-201-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on observational evidence."
        }
      ]
    },
    {
      "id": "astronomy-201-l08",
      "title": "Observation Log Workshop",
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
          "id": "astronomy-201-l08-ia1",
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
          "id": "astronomy-201-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "astronomy-201-l09",
      "title": "Review: Astronomy Models",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "astronomy-201-l09-q1",
          "text": "Which statement best explains stellar classification in Astronomy?",
          "skillId": "astronomy-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains stellar classification using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how stellar classification works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Astronomy."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-201-l09-q2",
          "text": "What is the best first step when analyzing observational evidence?",
          "skillId": "astronomy-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for observational evidence."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to observational evidence."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-201-l09-q3",
          "text": "Which option shows strong reasoning about astronomical reasoning from observations?",
          "skillId": "astronomy-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to astronomical reasoning from observations."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-201-l09-q4",
          "text": "Why is spaced review useful for Astronomy mastery?",
          "skillId": "astronomy-201-skill-review",
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
          "id": "astronomy-201-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Astronomy Models",
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
                "label": "Confusion about stellar classification"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to observational evidence"
              },
              {
                "id": "l3",
                "label": "Weak transfer of astronomical reasoning from observations under timing"
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
          "id": "astronomy-201-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "astronomy-201-l10",
      "title": "Mastery: Astronomy II",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "astronomy-201-l10-q1",
          "text": "Which statement best explains orbital patterns in Astronomy?",
          "skillId": "astronomy-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains orbital patterns using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how orbital patterns works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Astronomy."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-201-l10-q2",
          "text": "What is the best first step when analyzing distance and scale?",
          "skillId": "astronomy-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for distance and scale."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to distance and scale."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-201-l10-q3",
          "text": "Which option shows strong reasoning about astronomical reasoning from observations?",
          "skillId": "astronomy-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to astronomical reasoning from observations."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-201-l10-q4",
          "text": "Why is spaced review useful for Astronomy mastery?",
          "skillId": "astronomy-201-skill-review",
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
          "id": "astronomy-201-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Astronomy II",
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
                "label": "Confusion about orbital patterns"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to distance and scale"
              },
              {
                "id": "l3",
                "label": "Weak transfer of astronomical reasoning from observations under timing"
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
          "id": "astronomy-201-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "astronomy-201-l11",
      "title": "Applied Astronomy Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using distance and scale.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "astronomy-201-l11-ia1",
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
                "label": "Tag repeated mistakes in stellar classification",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on observational evidence",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-201-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "astronomy-201-l12",
      "title": "Astronomy II Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "astronomy-201-l12-q1",
          "text": "Which statement best explains orbital patterns in Astronomy?",
          "skillId": "astronomy-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains orbital patterns using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how orbital patterns works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Astronomy."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-201-l12-q2",
          "text": "What is the best first step when analyzing observational evidence?",
          "skillId": "astronomy-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for observational evidence."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to observational evidence."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-201-l12-q3",
          "text": "Which option shows strong reasoning about astronomical reasoning from observations?",
          "skillId": "astronomy-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to astronomical reasoning from observations."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-201-l12-q4",
          "text": "Why is spaced review useful for Astronomy mastery?",
          "skillId": "astronomy-201-skill-review",
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
          "id": "astronomy-201-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Astronomy II Mastery Applied Retest",
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
                "label": "Confusion about orbital patterns"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to observational evidence"
              },
              {
                "id": "l3",
                "label": "Weak transfer of astronomical reasoning from observations under timing"
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
          "id": "astronomy-201-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "astronomy-201-l13",
      "title": "Astronomy Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "astronomy-201-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, we will explore how different celestial bodies move in space. We will look at their orbital patterns, understand the distances between them, and learn about the scale of the universe. This challenge will help us apply our knowledge of observational evidence to real-life situations in astronomy.\nContext recap: In this exciting scenario, we will explore how different celestial bodies move in space. We will look at their orbital patterns, understand the distances between them, and learn about the scale of the universe. This challenge will help us apply our knowledge of observational evidence to real-life situations in astronomy."
        },
        {
          "id": "astronomy-201-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, we will break it down into smaller, manageable decisions. Each decision point will require careful thought, and we will assign a specific strategy to guide us through each choice. This approach will help us stay organized and focused as we work through the challenge.\nContext recap: To tackle this scenario effectively, we will break it down into smaller, manageable decisions. Each decision point will require careful thought, and we will assign a specific strategy to guide us through each choice. This approach will help us stay organized and focused as we work through the challenge."
        },
        {
          "id": "astronomy-201-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's time to put our plan into action! As we execute our strategies, we will explain each step we take. It's important to support our decisions with solid evidence rather than making guesses. This will help us understand the reasoning behind our actions and strengthen our learning.\nContext recap: Now it's time to put our plan into action! As we execute our strategies, we will explain each step we take. It's important to support our decisions with solid evidence rather than making guesses. This will help us understand the reasoning behind our actions and strengthen our learning."
        },
        {
          "id": "astronomy-201-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After completing our scenario, we will evaluate the outcome of our efforts. We will compare our results to the goals we set at the beginning. This will allow us to identify what worked well and what might need some adjustments. Reflecting on our process is a key part of learning and improving.\nContext recap: After completing our scenario, we will evaluate the outcome of our efforts. We will compare our results to the goals we set at the beginning. This will allow us to identify what worked well and what might need some adjustments. Reflecting on our process is a key part of learning and improving."
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-201-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "astronomy-201-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "astronomy-201-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "astronomy-201-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-201-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting orbital patterns, distance and scale, and observational evidence."
        },
        {
          "id": "astronomy-201-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "astronomy-201-l14",
      "title": "Astronomy Coaching Clinic",
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
          "id": "astronomy-201-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on orbital patterns setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed observational evidence decisions"
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
          "id": "astronomy-201-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "astronomy-201-l15",
      "title": "Astronomy II Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "astronomy-201-l15-q1",
          "text": "Which statement best explains stellar classification in Astronomy?",
          "skillId": "astronomy-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains stellar classification using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how stellar classification works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Astronomy."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-201-l15-q2",
          "text": "What is the best first step when analyzing distance and scale?",
          "skillId": "astronomy-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for distance and scale."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to distance and scale."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-201-l15-q3",
          "text": "Which option shows strong reasoning about astronomical reasoning from observations?",
          "skillId": "astronomy-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to astronomical reasoning from observations."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "astronomy-201-l15-q4",
          "text": "Why is spaced review useful for Astronomy mastery?",
          "skillId": "astronomy-201-skill-review",
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
          "id": "astronomy-201-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Astronomy II Mastery Mastery Sprint",
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
                "label": "Confusion about stellar classification"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to distance and scale"
              },
              {
                "id": "l3",
                "label": "Weak transfer of astronomical reasoning from observations under timing"
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
          "id": "astronomy-201-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
