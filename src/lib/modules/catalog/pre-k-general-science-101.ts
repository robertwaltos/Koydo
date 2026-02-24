import type { LearningModule } from "@/lib/modules/types";

export const PreKGeneralScience101Module: LearningModule = {
  "id": "pre-k-general-science-101",
  "title": "Pre-K Science Discovery Lab",
  "description": "Play-based Pre-K module for general science with family-friendly practice and simple checks for understanding.",
  "subject": "General Science",
  "tags": [
    "pre-k",
    "curriculum",
    "interactive",
    "external-ai",
    "curriculum-import",
    "grade-prek",
    "external-ai-merged"
  ],
  "minAge": 3,
  "maxAge": 5,
  "moduleVersion": "1.0.0",
  "version": "1.0.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es",
    "fr",
    "de",
    "hi",
    "zh"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Recognize key general science ideas through stories and visuals",
    "Practice general science in guided play and short activities",
    "Build confidence through frequent low-stakes checkpoints",
    "Explain Living Things Are All Around Us!.",
    "Explain Living Things GROW.",
    "Explain Living Things NEED Food, Water & Air."
  ],
  "lessons": [
    {
      "id": "pre-k-general-science-101-l01",
      "title": "Welcome to Science Discovery Lab",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "pre-k-general-science-101-l01-a1",
          "type": "image",
          "title": "Picture Story Card",
          "content": "Color visual showing observation, questions, and simple experiments."
        },
        {
          "id": "pre-k-general-science-101-l01-a2",
          "type": "animation",
          "title": "Animated Walkthrough",
          "content": "Short animation introducing observation, questions, and simple experiments with simple narration."
        }
      ]
    },
    {
      "id": "pre-k-general-science-101-l02",
      "title": "Guided Play: Science Discovery Lab",
      "type": "interactive",
      "duration": 10,
      "metadata": {
        "prompts": [
          "Name one thing you noticed about observation.",
          "Show how you would practice observation at home.",
          "Teach one new word from this lesson to a grown-up."
        ]
      },
      "interactiveActivities": [
        {
          "id": "pre-k-general-science-101-l02-ia1",
          "type": "drag_and_drop",
          "title": "Learning Steps Game",
          "description": "Drag each idea to the right step.",
          "estimatedMinutes": 6,
          "difficultyLevel": "easy",
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "play",
                "label": "Play"
              },
              {
                "id": "share",
                "label": "Share"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Say what we will learn about observation",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try the activity with a helper",
                "correctTargetId": "play"
              },
              {
                "id": "d3",
                "label": "Tell someone one thing you learned",
                "correctTargetId": "share"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-general-science-101-l02-a1",
          "type": "practice",
          "title": "Play Activity",
          "content": "Guided hands-on practice for observation with caregiver support."
        }
      ]
    },
    {
      "id": "pre-k-general-science-101-l03",
      "title": "Checkpoint: Core Idea (Science Discovery Lab)",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "pre-k-general-science-101-l03-q1",
          "text": "Which choice best matches observation?",
          "skillId": "pre-k-general-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The example that shows observation clearly"
            },
            {
              "id": "b",
              "text": "A choice that does not match the lesson idea"
            },
            {
              "id": "c",
              "text": "A random answer with no evidence"
            },
            {
              "id": "d",
              "text": "A choice from another topic"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "pre-k-general-science-101-l03-q2",
          "text": "What helps you learn observation, questions, and simple experiments best?",
          "skillId": "pre-k-general-science-101-skill-practice",
          "options": [
            {
              "id": "a",
              "text": "Practice, explain, and try again"
            },
            {
              "id": "b",
              "text": "Skip the activity and guess"
            },
            {
              "id": "c",
              "text": "Ignore the example"
            },
            {
              "id": "d",
              "text": "Change to an unrelated topic"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "pre-k-general-science-101-l03-q3",
          "text": "Which option uses prediction correctly?",
          "skillId": "pre-k-general-science-101-skill-apply",
          "options": [
            {
              "id": "a",
              "text": "A step-by-step answer with a clear reason"
            },
            {
              "id": "b",
              "text": "A choice with no reason or example"
            },
            {
              "id": "c",
              "text": "A response that ignores the question"
            },
            {
              "id": "d",
              "text": "A statement not connected to prediction"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "pre-k-general-science-101-l03-q4",
          "text": "Why do we review this topic more than once?",
          "skillId": "pre-k-general-science-101-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Review helps memory grow stronger over time"
            },
            {
              "id": "b",
              "text": "Review makes learning harder every time"
            },
            {
              "id": "c",
              "text": "Review removes key ideas"
            },
            {
              "id": "d",
              "text": "Review has no value for learners"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "pre-k-general-science-101-l03-ia1",
          "type": "matching_pairs",
          "title": "Match and Learn",
          "description": "Match each learning clue to the best action.",
          "estimatedMinutes": 6,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I forgot observation"
              },
              {
                "id": "l2",
                "label": "I am unsure about prediction"
              },
              {
                "id": "l3",
                "label": "I need to remember observation, questions, and simple experiments"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Look at one example and say it out loud"
              },
              {
                "id": "r2",
                "label": "Use step-by-step practice with help"
              },
              {
                "id": "r3",
                "label": "Do a quick review game before trying again"
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
              2
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 2,
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.7
      },
      "learningAids": [
        {
          "id": "pre-k-general-science-101-l03-a1",
          "type": "mnemonic",
          "title": "Remembering Phrase",
          "content": "Think, Try, Explain for every observation, questions, and simple experiments challenge."
        }
      ]
    },
    {
      "id": "pre-k-general-science-101-l04",
      "title": "Story and Example Time: Science Discovery Lab",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "pre-k-general-science-101-l04-a1",
          "type": "image",
          "title": "Picture Story Card",
          "content": "Color visual showing observation."
        },
        {
          "id": "pre-k-general-science-101-l04-a2",
          "type": "animation",
          "title": "Animated Walkthrough",
          "content": "Short animation introducing observation with simple narration."
        }
      ]
    },
    {
      "id": "pre-k-general-science-101-l05",
      "title": "Hands-On Practice: Science Discovery Lab",
      "type": "interactive",
      "duration": 10,
      "metadata": {
        "prompts": [
          "Name one thing you noticed about prediction.",
          "Show how you would practice prediction at home.",
          "Teach one new word from this lesson to a grown-up."
        ]
      },
      "interactiveActivities": [
        {
          "id": "pre-k-general-science-101-l05-ia1",
          "type": "drag_and_drop",
          "title": "Learning Steps Game",
          "description": "Drag each idea to the right step.",
          "estimatedMinutes": 6,
          "difficultyLevel": "easy",
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "play",
                "label": "Play"
              },
              {
                "id": "share",
                "label": "Share"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Say what we will learn about prediction",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try the activity with a helper",
                "correctTargetId": "play"
              },
              {
                "id": "d3",
                "label": "Tell someone one thing you learned",
                "correctTargetId": "share"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-general-science-101-l05-a1",
          "type": "practice",
          "title": "Play Activity",
          "content": "Guided hands-on practice for prediction with caregiver support."
        }
      ]
    },
    {
      "id": "pre-k-general-science-101-l06",
      "title": "Checkpoint: Practice Skills (Science Discovery Lab)",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "pre-k-general-science-101-l06-q1",
          "text": "Which choice best matches observation?",
          "skillId": "pre-k-general-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The example that shows observation clearly"
            },
            {
              "id": "b",
              "text": "A choice that does not match the lesson idea"
            },
            {
              "id": "c",
              "text": "A random answer with no evidence"
            },
            {
              "id": "d",
              "text": "A choice from another topic"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "pre-k-general-science-101-l06-q2",
          "text": "What helps you learn observation, questions, and simple experiments best?",
          "skillId": "pre-k-general-science-101-skill-practice",
          "options": [
            {
              "id": "a",
              "text": "Practice, explain, and try again"
            },
            {
              "id": "b",
              "text": "Skip the activity and guess"
            },
            {
              "id": "c",
              "text": "Ignore the example"
            },
            {
              "id": "d",
              "text": "Change to an unrelated topic"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "pre-k-general-science-101-l06-q3",
          "text": "Which option uses prediction correctly?",
          "skillId": "pre-k-general-science-101-skill-apply",
          "options": [
            {
              "id": "a",
              "text": "A step-by-step answer with a clear reason"
            },
            {
              "id": "b",
              "text": "A choice with no reason or example"
            },
            {
              "id": "c",
              "text": "A response that ignores the question"
            },
            {
              "id": "d",
              "text": "A statement not connected to prediction"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "pre-k-general-science-101-l06-q4",
          "text": "Why do we review this topic more than once?",
          "skillId": "pre-k-general-science-101-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Review helps memory grow stronger over time"
            },
            {
              "id": "b",
              "text": "Review makes learning harder every time"
            },
            {
              "id": "c",
              "text": "Review removes key ideas"
            },
            {
              "id": "d",
              "text": "Review has no value for learners"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "pre-k-general-science-101-l06-ia1",
          "type": "matching_pairs",
          "title": "Match and Learn",
          "description": "Match each learning clue to the best action.",
          "estimatedMinutes": 6,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I forgot observation"
              },
              {
                "id": "l2",
                "label": "I am unsure about prediction"
              },
              {
                "id": "l3",
                "label": "I need to remember observation, questions, and simple experiments"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Look at one example and say it out loud"
              },
              {
                "id": "r2",
                "label": "Use step-by-step practice with help"
              },
              {
                "id": "r3",
                "label": "Do a quick review game before trying again"
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
              2
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 2,
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.7
      },
      "learningAids": [
        {
          "id": "pre-k-general-science-101-l06-a1",
          "type": "mnemonic",
          "title": "Remembering Phrase",
          "content": "Think, Try, Explain for every observation, questions, and simple experiments challenge."
        }
      ]
    },
    {
      "id": "pre-k-general-science-101-l07",
      "title": "Build and Create: Science Discovery Lab",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "pre-k-general-science-101-l07-a1",
          "type": "image",
          "title": "Picture Story Card",
          "content": "Color visual showing observation, questions, and simple experiments."
        },
        {
          "id": "pre-k-general-science-101-l07-a2",
          "type": "animation",
          "title": "Animated Walkthrough",
          "content": "Short animation introducing observation, questions, and simple experiments with simple narration."
        }
      ]
    },
    {
      "id": "pre-k-general-science-101-l08",
      "title": "Reflection Circle: Science Discovery Lab",
      "type": "interactive",
      "duration": 10,
      "metadata": {
        "prompts": [
          "Name one thing you noticed about observation.",
          "Show how you would practice observation at home.",
          "Teach one new word from this lesson to a grown-up."
        ]
      },
      "interactiveActivities": [
        {
          "id": "pre-k-general-science-101-l08-ia1",
          "type": "drag_and_drop",
          "title": "Learning Steps Game",
          "description": "Drag each idea to the right step.",
          "estimatedMinutes": 6,
          "difficultyLevel": "easy",
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "play",
                "label": "Play"
              },
              {
                "id": "share",
                "label": "Share"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Say what we will learn about observation",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try the activity with a helper",
                "correctTargetId": "play"
              },
              {
                "id": "d3",
                "label": "Tell someone one thing you learned",
                "correctTargetId": "share"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-general-science-101-l08-a1",
          "type": "practice",
          "title": "Play Activity",
          "content": "Guided hands-on practice for observation with caregiver support."
        }
      ]
    },
    {
      "id": "pre-k-general-science-101-l09",
      "title": "Review Game: Science Discovery Lab",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "pre-k-general-science-101-l09-q1",
          "text": "Which choice best matches observation?",
          "skillId": "pre-k-general-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The example that shows observation clearly"
            },
            {
              "id": "b",
              "text": "A choice that does not match the lesson idea"
            },
            {
              "id": "c",
              "text": "A random answer with no evidence"
            },
            {
              "id": "d",
              "text": "A choice from another topic"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "pre-k-general-science-101-l09-q2",
          "text": "What helps you learn observation, questions, and simple experiments best?",
          "skillId": "pre-k-general-science-101-skill-practice",
          "options": [
            {
              "id": "a",
              "text": "Practice, explain, and try again"
            },
            {
              "id": "b",
              "text": "Skip the activity and guess"
            },
            {
              "id": "c",
              "text": "Ignore the example"
            },
            {
              "id": "d",
              "text": "Change to an unrelated topic"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "pre-k-general-science-101-l09-q3",
          "text": "Which option uses prediction correctly?",
          "skillId": "pre-k-general-science-101-skill-apply",
          "options": [
            {
              "id": "a",
              "text": "A step-by-step answer with a clear reason"
            },
            {
              "id": "b",
              "text": "A choice with no reason or example"
            },
            {
              "id": "c",
              "text": "A response that ignores the question"
            },
            {
              "id": "d",
              "text": "A statement not connected to prediction"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "pre-k-general-science-101-l09-q4",
          "text": "Why do we review this topic more than once?",
          "skillId": "pre-k-general-science-101-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Review helps memory grow stronger over time"
            },
            {
              "id": "b",
              "text": "Review makes learning harder every time"
            },
            {
              "id": "c",
              "text": "Review removes key ideas"
            },
            {
              "id": "d",
              "text": "Review has no value for learners"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "pre-k-general-science-101-l09-ia1",
          "type": "matching_pairs",
          "title": "Match and Learn",
          "description": "Match each learning clue to the best action.",
          "estimatedMinutes": 6,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I forgot observation"
              },
              {
                "id": "l2",
                "label": "I am unsure about prediction"
              },
              {
                "id": "l3",
                "label": "I need to remember observation, questions, and simple experiments"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Look at one example and say it out loud"
              },
              {
                "id": "r2",
                "label": "Use step-by-step practice with help"
              },
              {
                "id": "r3",
                "label": "Do a quick review game before trying again"
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
              2
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 2,
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.7
      },
      "learningAids": [
        {
          "id": "pre-k-general-science-101-l09-a1",
          "type": "mnemonic",
          "title": "Remembering Phrase",
          "content": "Think, Try, Explain for every observation, questions, and simple experiments challenge."
        }
      ]
    },
    {
      "id": "pre-k-general-science-101-l10",
      "title": "Celebration Quiz: Science Discovery Lab",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "pre-k-general-science-101-l10-q1",
          "text": "Which choice best matches observation?",
          "skillId": "pre-k-general-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The example that shows observation clearly"
            },
            {
              "id": "b",
              "text": "A choice that does not match the lesson idea"
            },
            {
              "id": "c",
              "text": "A random answer with no evidence"
            },
            {
              "id": "d",
              "text": "A choice from another topic"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "pre-k-general-science-101-l10-q2",
          "text": "What helps you learn observation, questions, and simple experiments best?",
          "skillId": "pre-k-general-science-101-skill-practice",
          "options": [
            {
              "id": "a",
              "text": "Practice, explain, and try again"
            },
            {
              "id": "b",
              "text": "Skip the activity and guess"
            },
            {
              "id": "c",
              "text": "Ignore the example"
            },
            {
              "id": "d",
              "text": "Change to an unrelated topic"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "pre-k-general-science-101-l10-q3",
          "text": "Which option uses prediction correctly?",
          "skillId": "pre-k-general-science-101-skill-apply",
          "options": [
            {
              "id": "a",
              "text": "A step-by-step answer with a clear reason"
            },
            {
              "id": "b",
              "text": "A choice with no reason or example"
            },
            {
              "id": "c",
              "text": "A response that ignores the question"
            },
            {
              "id": "d",
              "text": "A statement not connected to prediction"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "pre-k-general-science-101-l10-q4",
          "text": "Why do we review this topic more than once?",
          "skillId": "pre-k-general-science-101-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Review helps memory grow stronger over time"
            },
            {
              "id": "b",
              "text": "Review makes learning harder every time"
            },
            {
              "id": "c",
              "text": "Review removes key ideas"
            },
            {
              "id": "d",
              "text": "Review has no value for learners"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "pre-k-general-science-101-l10-ia1",
          "type": "matching_pairs",
          "title": "Match and Learn",
          "description": "Match each learning clue to the best action.",
          "estimatedMinutes": 6,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I forgot observation"
              },
              {
                "id": "l2",
                "label": "I am unsure about prediction"
              },
              {
                "id": "l3",
                "label": "I need to remember observation, questions, and simple experiments"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Look at one example and say it out loud"
              },
              {
                "id": "r2",
                "label": "Use step-by-step practice with help"
              },
              {
                "id": "r3",
                "label": "Do a quick review game before trying again"
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
              2
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 2,
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.7
      },
      "learningAids": [
        {
          "id": "pre-k-general-science-101-l10-a1",
          "type": "mnemonic",
          "title": "Remembering Phrase",
          "content": "Think, Try, Explain for every observation, questions, and simple experiments challenge."
        }
      ]
    },
    {
      "id": "pre-k-general-science-101-gen-science-prek-u1-1",
      "title": "What Makes Something Alive?",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "pre-k-general-science-101-gen-science-prek-u1-1-q1",
          "text": "Which is a living thing?",
          "skillId": "pre-k-general-science-101-skill-what-makes-something-alive-1",
          "options": [
            {
              "id": "a",
              "text": "A bicycle 🚲"
            },
            {
              "id": "b",
              "text": "A dog 🐕"
            },
            {
              "id": "c",
              "text": "A rock 🪨"
            },
            {
              "id": "d",
              "text": "A shoe 👟"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "pre-k-general-science-101-gen-science-prek-u1-1-q2",
          "text": "What do living things need to survive?",
          "skillId": "pre-k-general-science-101-skill-what-makes-something-alive-2",
          "options": [
            {
              "id": "a",
              "text": "Just air"
            },
            {
              "id": "b",
              "text": "Food, water, and air"
            },
            {
              "id": "c",
              "text": "Sunlight only"
            },
            {
              "id": "d",
              "text": "Nothing — they survive on their own"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "pre-k-general-science-101-gen-science-prek-u1-1-q3",
          "text": "A dog having puppies is an example of...",
          "skillId": "pre-k-general-science-101-skill-what-makes-something-alive-3",
          "options": [
            {
              "id": "a",
              "text": "Growing"
            },
            {
              "id": "b",
              "text": "Responding"
            },
            {
              "id": "c",
              "text": "Reproducing"
            },
            {
              "id": "d",
              "text": "Eating"
            }
          ],
          "correctOptionId": "c"
        }
      ],
      "interactiveActivities": [
        {
          "id": "pre-k-general-science-101-gen-science-prek-u1-1-ia1",
          "type": "matching_pairs",
          "title": "What Makes Something Alive? Error Match",
          "description": "Match each learning signal to the strongest correction action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each signal.",
            "Pick the best response.",
            "Use matches for your next quiz retry."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I still mix up Explain Living Things Are All Around Us!.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand What Makes Something Alive? in notes but not in timed checks."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Review one clear example and explain it aloud."
              },
              {
                "id": "r2",
                "label": "Use a short checklist before final answer selection."
              },
              {
                "id": "r3",
                "label": "Run a short re-check under the same time constraints."
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
        "questionsPerCheck": 3,
        "totalQuestions": 3,
        "timeLimitMinutes": 14,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 3,
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
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.7
      },
      "learningAids": [
        {
          "id": "pre-k-general-science-101-gen-science-prek-u1-1-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for What Makes Something Alive?."
        }
      ],
      "objectives": [
        "Explain Living Things Are All Around Us!.",
        "Explain Living Things GROW.",
        "Explain Living Things NEED Food, Water & Air."
      ],
      "chunks": [
        {
          "id": "pre-k-general-science-101-gen-science-prek-u1-1-chunk-1",
          "title": "Living Things Are All Around Us!",
          "content": "Look around — trees, birds, dogs, you — these are all LIVING things! But a rock, a toy car, and water are NOT living.\n\nLiving things are special. They can do things that non-living things cannot do!"
        },
        {
          "id": "pre-k-general-science-101-gen-science-prek-u1-1-chunk-2",
          "title": "Living Things GROW",
          "content": "Living things get BIGGER and CHANGE over time.\n\nA tiny seed 🌱 grows into a tall tree 🌳.\nA baby 👶 grows into a child, then an adult.\nA puppy 🐶 grows into a big dog.\n\nDo rocks grow? NO! Rocks stay the same size."
        },
        {
          "id": "pre-k-general-science-101-gen-science-prek-u1-1-chunk-3",
          "title": "Living Things NEED Food, Water & Air",
          "content": "All living things need:\n• 🍎 FOOD — for energy to move and grow\n• 💧 WATER — their bodies are mostly water!\n• 💨 AIR — to breathe (even fish breathe oxygen dissolved in water)\n\nRocks and toys don't need any of these things!"
        },
        {
          "id": "pre-k-general-science-101-gen-science-prek-u1-1-chunk-4",
          "title": "Living Things RESPOND & REPRODUCE",
          "content": "RESPOND: Living things react to their environment.\n• Plants turn toward the sun ☀️\n• Animals run from danger 🏃\n\nREPRODUCE: Living things make MORE of themselves.\n• Dogs have puppies 🐕\n• Flowers make seeds 🌺\n• Cats have kittens 🐱\n\nNon-living things cannot reproduce!"
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-general-science-101-gen-science-prek-u1-1-card-1",
          "front": "Name 4 things living things do",
          "back": "Grow, Need food/water/air, Respond to environment, Reproduce"
        },
        {
          "id": "pre-k-general-science-101-gen-science-prek-u1-1-card-2",
          "front": "Is a rock living or non-living?",
          "back": "NON-LIVING 🪨 — it doesn't grow, eat, or reproduce"
        },
        {
          "id": "pre-k-general-science-101-gen-science-prek-u1-1-card-3",
          "front": "Is a tree living or non-living?",
          "back": "LIVING 🌳 — it grows, needs water and sunlight, and makes seeds"
        },
        {
          "id": "pre-k-general-science-101-gen-science-prek-u1-1-card-4",
          "front": "Why do living things need food?",
          "back": "For ENERGY to move, grow, and stay healthy"
        },
        {
          "id": "pre-k-general-science-101-gen-science-prek-u1-1-card-5",
          "front": "What does REPRODUCE mean?",
          "back": "To make more of the same living thing (babies, seeds, eggs)"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Animated nature walk. A friendly scientist character walks through a vibrant habitat — forest, pond, garden. They encounter living things (tree, frog, butterfly, child) and non-living things (rock, bench, cloud). Each is labeled. Life characteristics shown: a seed growing into a flower in time-lapse, a frog jumping away from a predator, a cat nursing kittens. Warm, documentary-inspired animation style. Ages 3-5. Duration: 60 seconds.",
        "seedanceAnimation": "Lottie animation: Split screen. Left side: living things (plant, bird, fish) glowing green with small icons showing growth, food, offspring. Right side: non-living things (rock, cloud, chair) in grey with X marks on those icons. 12-second animation.",
        "lessonImage": "Create a clean educational illustration for \"What Makes Something Alive?\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"What Makes Something Alive?\" (General Science, grade band preK)."
      },
      "localized": {
        "title": {
          "en": "What Makes Something Alive?"
        },
        "concept": {
          "en": "What Makes Something Alive?"
        }
      },
      "external": {
        "sourceLessonId": "gen_science-prek-u1-1",
        "order": 1,
        "sourceModuleId": "gen-science-prek-u1-external",
        "mergedIntoModuleId": "pre-k-general-science-101"
      },
      "metadata": {
        "externalSourceModuleId": "gen-science-prek-u1-external",
        "mergedIntoModuleId": "pre-k-general-science-101"
      }
    }
  ],
  "metadata": {
    "externalMergeLastAt": "2026-02-21T04:46:09.358Z",
    "externalMergedUnitIds": [
      "gen_science-prek-u1"
    ],
    "externalMergeSourceFiles": [
      "../External_AI_Agents/lesson_platform (1).jsx"
    ]
  },
  "external": {
    "mergedSourceUnitIds": [
      "gen_science-prek-u1"
    ],
    "externalMergeLastAt": "2026-02-21T04:46:09.358Z"
  }
};
