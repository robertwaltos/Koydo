import type { LearningModule } from "@/lib/modules/types";

export const PreKLanguageArts101Module: LearningModule = {
  "id": "pre-k-language-arts-101",
  "title": "Pre-K Language Arts Explorers",
  "description": "Play-based Pre-K module for language arts with family-friendly practice and simple checks for understanding.",
  "subject": "Language Arts",
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
    "Recognize key language arts ideas through stories and visuals",
    "Practice language arts in guided play and short activities",
    "Build confidence through frequent low-stakes checkpoints",
    "Explain What Are Directions?.",
    "Explain One-Step Directions.",
    "Explain Two-Step Directions.",
    "Explain What is a Rhyme?.",
    "Explain Common Rhyme Families.",
    "Explain Finding Rhymes.",
    "Explain Why We Listen to Stories.",
    "Explain The Story Map: Characters."
  ],
  "lessons": [
    {
      "id": "pre-k-language-arts-101-l01",
      "title": "Welcome to Language Arts Explorers",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "pre-k-language-arts-101-l01-a1",
          "type": "image",
          "title": "Picture Story Card",
          "content": "Color visual showing letters, sounds, and storytelling."
        },
        {
          "id": "pre-k-language-arts-101-l01-a2",
          "type": "animation",
          "title": "Animated Walkthrough",
          "content": "Short animation introducing letters, sounds, and storytelling with simple narration."
        }
      ]
    },
    {
      "id": "pre-k-language-arts-101-l02",
      "title": "Guided Play: Language Arts Explorers",
      "type": "interactive",
      "duration": 10,
      "metadata": {
        "prompts": [
          "Name one thing you noticed about phonics.",
          "Show how you would practice phonics at home.",
          "Teach one new word from this lesson to a grown-up."
        ]
      },
      "interactiveActivities": [
        {
          "id": "pre-k-language-arts-101-l02-ia1",
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
                "label": "Say what we will learn about phonics",
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
          "id": "pre-k-language-arts-101-l02-a1",
          "type": "practice",
          "title": "Play Activity",
          "content": "Guided hands-on practice for phonics with caregiver support."
        }
      ]
    },
    {
      "id": "pre-k-language-arts-101-l03",
      "title": "Checkpoint: Core Idea (Language Arts Explorers)",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "pre-k-language-arts-101-l03-q1",
          "text": "Which choice best matches phonics?",
          "skillId": "pre-k-language-arts-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The example that shows phonics clearly"
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
          "id": "pre-k-language-arts-101-l03-q2",
          "text": "What helps you learn letters, sounds, and storytelling best?",
          "skillId": "pre-k-language-arts-101-skill-practice",
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
          "id": "pre-k-language-arts-101-l03-q3",
          "text": "Which option uses story sequencing correctly?",
          "skillId": "pre-k-language-arts-101-skill-apply",
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
              "text": "A statement not connected to story sequencing"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "pre-k-language-arts-101-l03-q4",
          "text": "Why do we review this topic more than once?",
          "skillId": "pre-k-language-arts-101-skill-review",
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
          "id": "pre-k-language-arts-101-l03-ia1",
          "type": "matching_pairs",
          "title": "Match and Learn",
          "description": "Match each learning clue to the best action.",
          "estimatedMinutes": 6,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I forgot phonics"
              },
              {
                "id": "l2",
                "label": "I am unsure about story sequencing"
              },
              {
                "id": "l3",
                "label": "I need to remember letters, sounds, and storytelling"
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
          "id": "pre-k-language-arts-101-l03-a1",
          "type": "mnemonic",
          "title": "Remembering Phrase",
          "content": "Think, Try, Explain for every letters, sounds, and storytelling challenge."
        }
      ]
    },
    {
      "id": "pre-k-language-arts-101-l04",
      "title": "Story and Example Time: Language Arts Explorers",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "pre-k-language-arts-101-l04-a1",
          "type": "image",
          "title": "Picture Story Card",
          "content": "Color visual showing phonics."
        },
        {
          "id": "pre-k-language-arts-101-l04-a2",
          "type": "animation",
          "title": "Animated Walkthrough",
          "content": "Short animation introducing phonics with simple narration."
        }
      ]
    },
    {
      "id": "pre-k-language-arts-101-l05",
      "title": "Hands-On Practice: Language Arts Explorers",
      "type": "interactive",
      "duration": 10,
      "metadata": {
        "prompts": [
          "Name one thing you noticed about story sequencing.",
          "Show how you would practice story sequencing at home.",
          "Teach one new word from this lesson to a grown-up."
        ]
      },
      "interactiveActivities": [
        {
          "id": "pre-k-language-arts-101-l05-ia1",
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
                "label": "Say what we will learn about story sequencing",
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
          "id": "pre-k-language-arts-101-l05-a1",
          "type": "practice",
          "title": "Play Activity",
          "content": "Guided hands-on practice for story sequencing with caregiver support."
        }
      ]
    },
    {
      "id": "pre-k-language-arts-101-l06",
      "title": "Checkpoint: Practice Skills (Language Arts Explorers)",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "pre-k-language-arts-101-l06-q1",
          "text": "Which choice best matches phonics?",
          "skillId": "pre-k-language-arts-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The example that shows phonics clearly"
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
          "id": "pre-k-language-arts-101-l06-q2",
          "text": "What helps you learn letters, sounds, and storytelling best?",
          "skillId": "pre-k-language-arts-101-skill-practice",
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
          "id": "pre-k-language-arts-101-l06-q3",
          "text": "Which option uses story sequencing correctly?",
          "skillId": "pre-k-language-arts-101-skill-apply",
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
              "text": "A statement not connected to story sequencing"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "pre-k-language-arts-101-l06-q4",
          "text": "Why do we review this topic more than once?",
          "skillId": "pre-k-language-arts-101-skill-review",
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
          "id": "pre-k-language-arts-101-l06-ia1",
          "type": "matching_pairs",
          "title": "Match and Learn",
          "description": "Match each learning clue to the best action.",
          "estimatedMinutes": 6,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I forgot phonics"
              },
              {
                "id": "l2",
                "label": "I am unsure about story sequencing"
              },
              {
                "id": "l3",
                "label": "I need to remember letters, sounds, and storytelling"
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
          "id": "pre-k-language-arts-101-l06-a1",
          "type": "mnemonic",
          "title": "Remembering Phrase",
          "content": "Think, Try, Explain for every letters, sounds, and storytelling challenge."
        }
      ]
    },
    {
      "id": "pre-k-language-arts-101-l07",
      "title": "Build and Create: Language Arts Explorers",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "pre-k-language-arts-101-l07-a1",
          "type": "image",
          "title": "Picture Story Card",
          "content": "Color visual showing letters, sounds, and storytelling."
        },
        {
          "id": "pre-k-language-arts-101-l07-a2",
          "type": "animation",
          "title": "Animated Walkthrough",
          "content": "Short animation introducing letters, sounds, and storytelling with simple narration."
        }
      ]
    },
    {
      "id": "pre-k-language-arts-101-l08",
      "title": "Reflection Circle: Language Arts Explorers",
      "type": "interactive",
      "duration": 10,
      "metadata": {
        "prompts": [
          "Name one thing you noticed about phonics.",
          "Show how you would practice phonics at home.",
          "Teach one new word from this lesson to a grown-up."
        ]
      },
      "interactiveActivities": [
        {
          "id": "pre-k-language-arts-101-l08-ia1",
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
                "label": "Say what we will learn about phonics",
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
          "id": "pre-k-language-arts-101-l08-a1",
          "type": "practice",
          "title": "Play Activity",
          "content": "Guided hands-on practice for phonics with caregiver support."
        }
      ]
    },
    {
      "id": "pre-k-language-arts-101-l09",
      "title": "Review Game: Language Arts Explorers",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "pre-k-language-arts-101-l09-q1",
          "text": "Which choice best matches phonics?",
          "skillId": "pre-k-language-arts-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The example that shows phonics clearly"
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
          "id": "pre-k-language-arts-101-l09-q2",
          "text": "What helps you learn letters, sounds, and storytelling best?",
          "skillId": "pre-k-language-arts-101-skill-practice",
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
          "id": "pre-k-language-arts-101-l09-q3",
          "text": "Which option uses story sequencing correctly?",
          "skillId": "pre-k-language-arts-101-skill-apply",
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
              "text": "A statement not connected to story sequencing"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "pre-k-language-arts-101-l09-q4",
          "text": "Why do we review this topic more than once?",
          "skillId": "pre-k-language-arts-101-skill-review",
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
          "id": "pre-k-language-arts-101-l09-ia1",
          "type": "matching_pairs",
          "title": "Match and Learn",
          "description": "Match each learning clue to the best action.",
          "estimatedMinutes": 6,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I forgot phonics"
              },
              {
                "id": "l2",
                "label": "I am unsure about story sequencing"
              },
              {
                "id": "l3",
                "label": "I need to remember letters, sounds, and storytelling"
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
          "id": "pre-k-language-arts-101-l09-a1",
          "type": "mnemonic",
          "title": "Remembering Phrase",
          "content": "Think, Try, Explain for every letters, sounds, and storytelling challenge."
        }
      ]
    },
    {
      "id": "pre-k-language-arts-101-l10",
      "title": "Celebration Quiz: Language Arts Explorers",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "pre-k-language-arts-101-l10-q1",
          "text": "Which choice best matches phonics?",
          "skillId": "pre-k-language-arts-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The example that shows phonics clearly"
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
          "id": "pre-k-language-arts-101-l10-q2",
          "text": "What helps you learn letters, sounds, and storytelling best?",
          "skillId": "pre-k-language-arts-101-skill-practice",
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
          "id": "pre-k-language-arts-101-l10-q3",
          "text": "Which option uses story sequencing correctly?",
          "skillId": "pre-k-language-arts-101-skill-apply",
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
              "text": "A statement not connected to story sequencing"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "pre-k-language-arts-101-l10-q4",
          "text": "Why do we review this topic more than once?",
          "skillId": "pre-k-language-arts-101-skill-review",
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
          "id": "pre-k-language-arts-101-l10-ia1",
          "type": "matching_pairs",
          "title": "Match and Learn",
          "description": "Match each learning clue to the best action.",
          "estimatedMinutes": 6,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I forgot phonics"
              },
              {
                "id": "l2",
                "label": "I am unsure about story sequencing"
              },
              {
                "id": "l3",
                "label": "I need to remember letters, sounds, and storytelling"
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
          "id": "pre-k-language-arts-101-l10-a1",
          "type": "mnemonic",
          "title": "Remembering Phrase",
          "content": "Think, Try, Explain for every letters, sounds, and storytelling challenge."
        }
      ]
    },
    {
      "id": "pre-k-language-arts-101-lang-arts-prek-u1-1",
      "title": "Following Simple Directions",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-1-q1",
          "text": "How many steps does a one-step direction have?",
          "skillId": "pre-k-language-arts-101-skill-following-simple-directions-1",
          "options": [
            {
              "id": "a",
              "text": "One"
            },
            {
              "id": "b",
              "text": "Two"
            },
            {
              "id": "c",
              "text": "Three"
            },
            {
              "id": "d",
              "text": "Four"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-1-q2",
          "text": "Which is a one-step direction?",
          "skillId": "pre-k-language-arts-101-skill-following-simple-directions-2",
          "options": [
            {
              "id": "a",
              "text": "Clap and jump!"
            },
            {
              "id": "b",
              "text": "Sit down."
            },
            {
              "id": "c",
              "text": "Stand up and spin!"
            },
            {
              "id": "d",
              "text": "Touch your nose and blink!"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-1-q3",
          "text": "Good listeners keep their eyes on...",
          "skillId": "pre-k-language-arts-101-skill-following-simple-directions-3",
          "options": [
            {
              "id": "a",
              "text": "The ceiling"
            },
            {
              "id": "b",
              "text": "Their shoes"
            },
            {
              "id": "c",
              "text": "The speaker"
            },
            {
              "id": "d",
              "text": "The window"
            }
          ],
          "correctOptionId": "c"
        }
      ],
      "interactiveActivities": [
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-1-ia1",
          "type": "matching_pairs",
          "title": "Following Simple Directions Error Match",
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
                "label": "I still mix up Explain What Are Directions?.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Following Simple Directions in notes but not in timed checks."
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
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-1-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Following Simple Directions."
        }
      ],
      "objectives": [
        "Explain What Are Directions?.",
        "Explain One-Step Directions.",
        "Explain Two-Step Directions."
      ],
      "chunks": [
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-1-chunk-1",
          "title": "What Are Directions?",
          "content": "Directions are words that tell you what to do. When someone says 'Please sit down' or 'Clap your hands,' those are directions! Learning to listen and follow directions is a super important skill."
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-1-chunk-2",
          "title": "One-Step Directions",
          "content": "A one-step direction has just ONE thing to do. Examples: 'Touch your nose.' 'Stand up.' 'Clap your hands.' Let's practice! Try each one as you read it."
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-1-chunk-3",
          "title": "Two-Step Directions",
          "content": "A two-step direction has TWO things to do. Example: 'Pick up your pencil AND put it on the table.' Remember: listen to ALL the words before you start!"
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-1-chunk-4",
          "title": "Tips for Good Listening",
          "content": "👀 Eyes on the speaker\n👂 Ears ready to hear\n🤐 Mouth quiet\n🧠 Brain thinking about the words\n\nThese four things help you be a GREAT listener!"
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-1-card-1",
          "front": "What is a direction?",
          "back": "Words that tell you WHAT TO DO"
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-1-card-2",
          "front": "One-step direction",
          "back": "ONE action: 'Sit down!'"
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-1-card-3",
          "front": "Two-step direction",
          "back": "TWO actions: 'Stand up AND clap!'"
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-1-card-4",
          "front": "Good listener eyes",
          "back": "Look at the speaker 👀"
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-1-card-5",
          "front": "Good listener ears",
          "back": "Ready to hear 👂"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: A cheerful, colorful animated classroom with diverse cartoon children (ages 3-5) sitting in a circle. A friendly teacher character gives simple one-step and two-step directions (touch nose, clap hands, stand up). Each child joyfully follows along. Bright primary colors, soft 2D animation style, gentle background music, captions shown at bottom. Duration: 45 seconds. No text overlays except captions.",
        "seedanceAnimation": "Lottie animation prompt: Animated child character showing 'listening mode' — eyes wide open and attentive, ears highlighted with sound waves, mouth closed with tiny lock icon, brain glowing. Loop: 8 seconds. Flat 2D style, bright cheerful colors.",
        "lessonImage": "Create a clean educational illustration for \"Following Simple Directions\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Following Simple Directions\" (Language Arts, grade band preK)."
      },
      "localized": {
        "title": {
          "en": "Following Simple Directions"
        },
        "concept": {
          "en": "Following Simple Directions"
        }
      },
      "external": {
        "sourceLessonId": "lang_arts-prek-u1-1",
        "order": 1,
        "sourceModuleId": "lang-arts-prek-u1-external-v2",
        "mergedIntoModuleId": "pre-k-language-arts-101"
      },
      "metadata": {
        "externalSourceModuleId": "lang-arts-prek-u1-external-v2",
        "mergedIntoModuleId": "pre-k-language-arts-101"
      }
    },
    {
      "id": "pre-k-language-arts-101-lang-arts-prek-u1-2",
      "title": "Rhyming Words",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-2-q1",
          "text": "Which two words rhyme?",
          "skillId": "pre-k-language-arts-101-skill-rhyming-words-1",
          "options": [
            {
              "id": "a",
              "text": "cat and dog"
            },
            {
              "id": "b",
              "text": "cat and hat"
            },
            {
              "id": "c",
              "text": "dog and frog... wait, those DO rhyme! Pick: cat and hat"
            },
            {
              "id": "d",
              "text": "sun and dog"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-2-q2",
          "text": "What do rhyming words share?",
          "skillId": "pre-k-language-arts-101-skill-rhyming-words-2",
          "options": [
            {
              "id": "a",
              "text": "Same first letter"
            },
            {
              "id": "b",
              "text": "Same ending sound"
            },
            {
              "id": "c",
              "text": "Same number of letters"
            },
            {
              "id": "d",
              "text": "Same color"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-2-q3",
          "text": "Which word rhymes with 'hop'?",
          "skillId": "pre-k-language-arts-101-skill-rhyming-words-3",
          "options": [
            {
              "id": "a",
              "text": "hill"
            },
            {
              "id": "b",
              "text": "cat"
            },
            {
              "id": "c",
              "text": "top"
            },
            {
              "id": "d",
              "text": "sun"
            }
          ],
          "correctOptionId": "c"
        }
      ],
      "interactiveActivities": [
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-2-ia1",
          "type": "matching_pairs",
          "title": "Rhyming Words Error Match",
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
                "label": "I still mix up Explain What is a Rhyme?.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Rhyming Words in notes but not in timed checks."
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
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-2-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Rhyming Words."
        }
      ],
      "objectives": [
        "Explain What is a Rhyme?.",
        "Explain Common Rhyme Families.",
        "Explain Finding Rhymes."
      ],
      "chunks": [
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-2-chunk-1",
          "title": "What is a Rhyme?",
          "content": "Rhyming words sound the SAME at the END! Listen: cat 🐱, hat 🎩, bat 🦇. Do you hear it? C-AT, H-AT, B-AT. They all end with the '-at' sound!"
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-2-chunk-2",
          "title": "Common Rhyme Families",
          "content": "The -AT family: cat, hat, bat, sat, mat, fat, rat\nThe -AN family: can, man, fan, pan, ran, tan\nThe -IN family: bin, fin, pin, win, tin, chin\nThe -OT family: dot, hot, pot, not, got, lot"
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-2-chunk-3",
          "title": "Finding Rhymes",
          "content": "To find if two words rhyme, cover the BEGINNING of each word and listen to the end:\n- Dog / log → og / og ✅ RHYME!\n- Cat / dog → at / og ❌ NOT a rhyme\n- Sun / run → un / un ✅ RHYME!"
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-2-chunk-4",
          "title": "Making Your Own Rhymes",
          "content": "Pick a word. Change just the FIRST sound to make a new word!\n- Start with 'cat' → change /c/ to /b/ → bat!\n- Start with 'hop' → change /h/ to /p/ → pop!\nYou're a rhyme maker now! 🌟"
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-2-card-1",
          "front": "Do 'cat' and 'hat' rhyme?",
          "back": "YES! They both end in -AT 🐱🎩"
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-2-card-2",
          "front": "Name a rhyme for 'sun'",
          "back": "Run, fun, bun, gun, done! ☀️"
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-2-card-3",
          "front": "Do 'dog' and 'cat' rhyme?",
          "back": "NO! Dog ends in -OG, cat ends in -AT"
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-2-card-4",
          "front": "The -IN family",
          "back": "bin, fin, pin, win, tin, chin"
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-2-card-5",
          "front": "How do we check if words rhyme?",
          "back": "Listen to the ENDING sounds!"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Colorful animated world where words come to life as 3D characters. A cat, hat, and bat dance together because they rhyme. When words don't rhyme, they gently shake their heads. A friendly narrator voice explains rhyming. Words morph and transform showing the shared '-at' ending glowing in gold. Playful music. Ages 3-5. Duration: 40 seconds.",
        "seedanceAnimation": "Lottie animation: Word cards fly in — 'cat' 'hat' 'bat' — each with a tiny cartoon face. Their endings glow the same color (gold) to show they rhyme. Non-rhyming words (cat/dog) show different colored endings. Bouncy, fun animation. 10 second loop.",
        "lessonImage": "Create a clean educational illustration for \"Rhyming Words\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Rhyming Words\" (Language Arts, grade band preK)."
      },
      "localized": {
        "title": {
          "en": "Rhyming Words"
        },
        "concept": {
          "en": "Rhyming Words"
        }
      },
      "external": {
        "sourceLessonId": "lang_arts-prek-u1-2",
        "order": 2,
        "sourceModuleId": "lang-arts-prek-u1-external-v2",
        "mergedIntoModuleId": "pre-k-language-arts-101"
      },
      "metadata": {
        "externalSourceModuleId": "lang-arts-prek-u1-external-v2",
        "mergedIntoModuleId": "pre-k-language-arts-101"
      }
    },
    {
      "id": "pre-k-language-arts-101-lang-arts-prek-u1-3",
      "title": "Listening to Stories & Retelling",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-3-q1",
          "text": "Characters are...",
          "skillId": "pre-k-language-arts-101-skill-listening-to-stories-retelling-1",
          "options": [
            {
              "id": "a",
              "text": "Where the story happens"
            },
            {
              "id": "b",
              "text": "The people or animals in the story"
            },
            {
              "id": "c",
              "text": "What time it is"
            },
            {
              "id": "d",
              "text": "The title of the book"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-3-q2",
          "text": "Which word helps retell in ORDER?",
          "skillId": "pre-k-language-arts-101-skill-listening-to-stories-retelling-2",
          "options": [
            {
              "id": "a",
              "text": "Purple"
            },
            {
              "id": "b",
              "text": "Fast"
            },
            {
              "id": "c",
              "text": "FIRST"
            },
            {
              "id": "d",
              "text": "Loud"
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-3-q3",
          "text": "Setting means...",
          "skillId": "pre-k-language-arts-101-skill-listening-to-stories-retelling-3",
          "options": [
            {
              "id": "a",
              "text": "The characters"
            },
            {
              "id": "b",
              "text": "Where and when the story happens"
            },
            {
              "id": "c",
              "text": "The ending"
            },
            {
              "id": "d",
              "text": "The author"
            }
          ],
          "correctOptionId": "b"
        }
      ],
      "interactiveActivities": [
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-3-ia1",
          "type": "matching_pairs",
          "title": "Listening to Stories & Retelling Error Match",
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
                "label": "I still mix up Explain Why We Listen to Stories.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Listening to Stories & Retelling in notes but not in timed checks."
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
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-3-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Listening to Stories & Retelling."
        }
      ],
      "objectives": [
        "Explain Why We Listen to Stories.",
        "Explain The Story Map: Characters.",
        "Explain The Story Map: Setting."
      ],
      "chunks": [
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-3-chunk-1",
          "title": "Why We Listen to Stories",
          "content": "Stories take us on adventures! When we listen carefully, we can picture the story in our minds like a movie. Good listeners remember: WHO is in the story, WHERE the story happens, and WHAT happens."
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-3-chunk-2",
          "title": "The Story Map: Characters",
          "content": "CHARACTERS are the people or animals in the story. They are WHO the story is about.\n\nExample: In 'The Three Little Pigs,' the characters are the three pigs 🐷🐷🐷 and the wolf 🐺."
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-3-chunk-3",
          "title": "The Story Map: Setting",
          "content": "The SETTING is WHERE and WHEN the story takes place. It can be a forest, a house, outer space, long ago, or today!\n\nExample: The Three Little Pigs takes place in houses in the countryside."
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-3-chunk-4",
          "title": "Retelling in Order",
          "content": "Retelling means telling what happened in ORDER: First, Next, Then, Last.\n\n1st: The three pigs each built a house\n2nd: The wolf came and huffed and puffed\n3rd: The brick house saved them all!\n\nUsing ORDER WORDS makes your retelling clear!"
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-3-card-1",
          "front": "What are CHARACTERS?",
          "back": "The people or animals in the story 👥"
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-3-card-2",
          "front": "What is the SETTING?",
          "back": "WHERE and WHEN the story happens 🏡"
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-3-card-3",
          "front": "First order word for retelling",
          "back": "FIRST... or IN THE BEGINNING..."
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-3-card-4",
          "front": "Middle order word",
          "back": "NEXT... THEN... AFTER THAT..."
        },
        {
          "id": "pre-k-language-arts-101-lang-arts-prek-u1-3-card-5",
          "front": "Ending order word",
          "back": "LAST... FINALLY... AT THE END..."
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: A magical animated storybook opens, revealing a classic fairy tale world. A friendly narrator character (owl with glasses) appears on screen and reads a simple 3-event story aloud. Story events are illustrated in warm, painterly style. At the end, order words 'First', 'Next', 'Last' appear as the owl retells the story. Cozy, warm colors. Ages 4-6. Duration: 60 seconds.",
        "seedanceAnimation": "Lottie animation: Three sequential panels (story strip) showing 'First' 'Next' 'Last' with icons. Each panel slides in from the right with a soft bounce. Stars twinkle when each word appears. Clean, flat design. 12 second loop.",
        "lessonImage": "Create a clean educational illustration for \"Listening to Stories & Retelling\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Listening to Stories & Retelling\" (Language Arts, grade band preK)."
      },
      "localized": {
        "title": {
          "en": "Listening to Stories & Retelling"
        },
        "concept": {
          "en": "Listening to Stories & Retelling"
        }
      },
      "external": {
        "sourceLessonId": "lang_arts-prek-u1-3",
        "order": 3,
        "sourceModuleId": "lang-arts-prek-u1-external-v2",
        "mergedIntoModuleId": "pre-k-language-arts-101"
      },
      "metadata": {
        "externalSourceModuleId": "lang-arts-prek-u1-external-v2",
        "mergedIntoModuleId": "pre-k-language-arts-101"
      }
    }
  ],
  "metadata": {
    "externalMergeLastAt": "2026-02-21T04:46:09.349Z",
    "externalMergedUnitIds": [
      "lang_arts-prek-u1"
    ],
    "externalMergeSourceFiles": [
      "../External_AI_Agents/lesson_platform (1).jsx"
    ]
  },
  "external": {
    "mergedSourceUnitIds": [
      "lang_arts-prek-u1"
    ],
    "externalMergeLastAt": "2026-02-21T04:46:09.349Z"
  }
};
