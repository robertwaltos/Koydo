import type { LearningModule } from "@/lib/modules/types";

export const Reading101Module: LearningModule = {
  "id": "reading-101",
  "title": "The Alphabet",
  "description": "Master alphabet recognition, letter sounds, and early word-building routines.",
  "subject": "Reading",
  "tags": [
    "phonics",
    "literacy",
    "interactive",
    "external-ai",
    "curriculum-import",
    "grade-prek",
    "external-ai-merged"
  ],
  "minAge": 4,
  "maxAge": 9,
  "version": "1.1.0",
  "learningObjectives": [
    "Recognize uppercase and lowercase letters A-Z.",
    "Match common beginning sounds to letters.",
    "Blend simple consonant-vowel-consonant words.",
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
      "id": "r101-l1",
      "title": "Video: Letters A-M",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "r101-l1-a1",
          "type": "image",
          "title": "Alphabet Strip A-M",
          "content": "Large-print letter strip with matching picture clues."
        },
        {
          "id": "r101-l1-a2",
          "type": "mnemonic",
          "title": "Sky-Grass-Dirt Lines",
          "content": "Use writing lines to place letters correctly."
        }
      ]
    },
    {
      "id": "r101-l2",
      "title": "Interactive: Letter Tracing Lab",
      "type": "interactive",
      "duration": 7,
      "metadata": {
        "prompts": [
          "Trace each letter in A-M and say its name out loud.",
          "Pick three letters and match each to a word that starts with it.",
          "Explain which letter shape was easiest and why."
        ]
      },
      "interactiveActivities": [
        {
          "id": "r101-l2-ia1",
          "type": "drag_and_drop",
          "title": "Alphabet Trace Match",
          "description": "Match uppercase and lowercase pairs after tracing each shape.",
          "estimatedMinutes": 6,
          "difficultyLevel": "easy",
          "instructions": [
            "Trace the uppercase letter.",
            "Find the matching lowercase card.",
            "Say a word that begins with that sound."
          ],
          "data": {
            "targets": [
              {
                "id": "t-a",
                "label": "A a"
              },
              {
                "id": "t-c",
                "label": "C c"
              },
              {
                "id": "t-g",
                "label": "G g"
              },
              {
                "id": "t-m",
                "label": "M m"
              }
            ],
            "draggables": [
              {
                "id": "d-a",
                "label": "apple",
                "correctTargetId": "t-a"
              },
              {
                "id": "d-c",
                "label": "cat",
                "correctTargetId": "t-c"
              },
              {
                "id": "d-g",
                "label": "goat",
                "correctTargetId": "t-g"
              },
              {
                "id": "d-m",
                "label": "moon",
                "correctTargetId": "t-m"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "r101-l2-a1",
          "type": "practice",
          "title": "Trace and Match",
          "content": "Trace letters and drag matching picture cards."
        }
      ]
    },
    {
      "id": "r101-l3",
      "title": "Checkpoint Quiz: Letters A-M",
      "type": "quiz",
      "duration": 9,
      "questions": [
        {
          "id": "r101-l3-q1",
          "text": "Which letter comes after C?",
          "skillId": "alphabet-sequence",
          "options": [
            {
              "id": "a",
              "text": "B"
            },
            {
              "id": "b",
              "text": "D"
            },
            {
              "id": "c",
              "text": "E"
            },
            {
              "id": "d",
              "text": "F"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "r101-l3-q2",
          "text": "Which lowercase letter matches uppercase G?",
          "skillId": "letter-matching",
          "options": [
            {
              "id": "a",
              "text": "g"
            },
            {
              "id": "b",
              "text": "q"
            },
            {
              "id": "c",
              "text": "p"
            },
            {
              "id": "d",
              "text": "b"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "r101-l3-q3",
          "text": "Which letter starts the word 'cat'?",
          "skillId": "phonics",
          "options": [
            {
              "id": "a",
              "text": "B"
            },
            {
              "id": "b",
              "text": "C"
            },
            {
              "id": "c",
              "text": "D"
            },
            {
              "id": "d",
              "text": "K"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "r101-l3-q4",
          "text": "Which letter is in the first half of the alphabet?",
          "skillId": "alphabet-sequence",
          "options": [
            {
              "id": "a",
              "text": "R"
            },
            {
              "id": "b",
              "text": "T"
            },
            {
              "id": "c",
              "text": "L"
            },
            {
              "id": "d",
              "text": "W"
            }
          ],
          "correctOptionId": "c"
        }
      ],
      "interactiveActivities": [
        {
          "id": "r101-l3-ia1",
          "type": "matching_pairs",
          "title": "Letter Sequence Match",
          "description": "Pair each clue with the correct letter idea.",
          "estimatedMinutes": 6,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Comes after C"
              },
              {
                "id": "l2",
                "label": "Lowercase for G"
              },
              {
                "id": "l3",
                "label": "Starts 'cat'"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "D"
              },
              {
                "id": "r2",
                "label": "g"
              },
              {
                "id": "r3",
                "label": "C"
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
        "timeLimitMinutes": 9,
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
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "r101-l3-a1",
          "type": "practice",
          "title": "Letter Flash Round",
          "content": "Timed flashcard drill for A-M recognition."
        }
      ]
    },
    {
      "id": "r101-l4",
      "title": "Video: Letters N-Z",
      "type": "video",
      "duration": 9,
      "learningAids": [
        {
          "id": "r101-l4-a1",
          "type": "image",
          "title": "Alphabet Strip N-Z",
          "content": "Letter strip with object pictures for N through Z."
        }
      ]
    },
    {
      "id": "r101-l5",
      "title": "Interactive: Sound Hunt",
      "type": "interactive",
      "duration": 8,
      "metadata": {
        "prompts": [
          "Listen to a beginning sound and choose the matching letter.",
          "Find two objects in your room that start with the same sound.",
          "Explain the difference between letter name and letter sound."
        ]
      },
      "interactiveActivities": [
        {
          "id": "r101-l5-ia1",
          "type": "matching_pairs",
          "title": "Sound-to-Letter Match",
          "description": "Match beginning sounds to letter cards and example words.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Play each sound cue.",
            "Choose the matching letter card.",
            "Check with an example word."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "/b/"
              },
              {
                "id": "l2",
                "label": "/f/"
              },
              {
                "id": "l3",
                "label": "/s/"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "B - ball"
              },
              {
                "id": "r2",
                "label": "F - fish"
              },
              {
                "id": "r3",
                "label": "S - sun"
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
          "id": "r101-l5-a1",
          "type": "animation",
          "title": "Sound Pop",
          "content": "Animated mouth cues for common beginning sounds."
        }
      ]
    },
    {
      "id": "r101-l6",
      "title": "Checkpoint Quiz: Letter Sounds",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "r101-l6-q1",
          "text": "What sound does the letter \"C\" make?",
          "skillId": "phonics",
          "options": [
            {
              "id": "a",
              "text": "/s/"
            },
            {
              "id": "b",
              "text": "/k/"
            },
            {
              "id": "c",
              "text": "Both A and B"
            },
            {
              "id": "d",
              "text": "/m/"
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "r101-l6-q2",
          "text": "Which letter most often starts the word 'fish'?",
          "skillId": "phonics",
          "options": [
            {
              "id": "a",
              "text": "F"
            },
            {
              "id": "b",
              "text": "V"
            },
            {
              "id": "c",
              "text": "P"
            },
            {
              "id": "d",
              "text": "B"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "r101-l6-q3",
          "text": "Which word starts with the same sound as 'sun'?",
          "skillId": "phonics",
          "options": [
            {
              "id": "a",
              "text": "moon"
            },
            {
              "id": "b",
              "text": "sock"
            },
            {
              "id": "c",
              "text": "rain"
            },
            {
              "id": "d",
              "text": "tree"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "r101-l6-q4",
          "text": "What letter comes right before Z?",
          "skillId": "alphabet-sequence",
          "options": [
            {
              "id": "a",
              "text": "X"
            },
            {
              "id": "b",
              "text": "Y"
            },
            {
              "id": "c",
              "text": "W"
            },
            {
              "id": "d",
              "text": "V"
            }
          ],
          "correctOptionId": "b"
        }
      ],
      "interactiveActivities": [
        {
          "id": "r101-l6-ia1",
          "type": "matching_pairs",
          "title": "Phonics Error Fix Match",
          "description": "Pair each common reading mix-up with a correction move.",
          "estimatedMinutes": 6,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Confusing /f/ and /v/"
              },
              {
                "id": "l2",
                "label": "Skipping letter order near Z"
              },
              {
                "id": "l3",
                "label": "Guessing sound without listening"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Use a mouth-shape and voicing check"
              },
              {
                "id": "r2",
                "label": "Rehearse X-Y-Z sequence aloud"
              },
              {
                "id": "r3",
                "label": "Replay sound cue before selecting"
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
          "easy": 1,
          "medium": 3,
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      }
    },
    {
      "id": "r101-l7",
      "title": "Video: Build Simple CVC Words",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "r101-l7-a1",
          "type": "image",
          "title": "Word Family Board",
          "content": "Use -at, -an, and -op word families for quick blending."
        }
      ]
    },
    {
      "id": "r101-l8",
      "title": "Mastery Quiz: Alphabet and Sounds",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "r101-l8-q1",
          "text": "Which uppercase letter matches lowercase 'm'?",
          "skillId": "letter-matching",
          "options": [
            {
              "id": "a",
              "text": "N"
            },
            {
              "id": "b",
              "text": "M"
            },
            {
              "id": "c",
              "text": "W"
            },
            {
              "id": "d",
              "text": "H"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "r101-l8-q2",
          "text": "Which word starts with the /b/ sound?",
          "skillId": "phonics",
          "options": [
            {
              "id": "a",
              "text": "ball"
            },
            {
              "id": "b",
              "text": "sun"
            },
            {
              "id": "c",
              "text": "cat"
            },
            {
              "id": "d",
              "text": "moon"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "r101-l8-q3",
          "text": "Which letters blend to make the word 'cat'?",
          "skillId": "cvc-blending",
          "options": [
            {
              "id": "a",
              "text": "c-a-t"
            },
            {
              "id": "b",
              "text": "c-o-t"
            },
            {
              "id": "c",
              "text": "k-a-n"
            },
            {
              "id": "d",
              "text": "c-u-p"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "r101-l8-q4",
          "text": "Which letter comes between H and J?",
          "skillId": "alphabet-sequence",
          "options": [
            {
              "id": "a",
              "text": "G"
            },
            {
              "id": "b",
              "text": "I"
            },
            {
              "id": "c",
              "text": "K"
            },
            {
              "id": "d",
              "text": "L"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "r101-l8-q5",
          "text": "What is the first sound in the word 'zebra'?",
          "skillId": "phonics",
          "options": [
            {
              "id": "a",
              "text": "/s/"
            },
            {
              "id": "b",
              "text": "/z/"
            },
            {
              "id": "c",
              "text": "/b/"
            },
            {
              "id": "d",
              "text": "/r/"
            }
          ],
          "correctOptionId": "b"
        }
      ],
      "interactiveActivities": [
        {
          "id": "r101-l8-ia1",
          "type": "matching_pairs",
          "title": "Alphabet and Sound Mastery Match",
          "description": "Match each reading prompt with the best decoding action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Lowercase 'm'"
              },
              {
                "id": "l2",
                "label": "Word with /b/ sound"
              },
              {
                "id": "l3",
                "label": "Blend c-a-t"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Uppercase M"
              },
              {
                "id": "r2",
                "label": "ball"
              },
              {
                "id": "r3",
                "label": "cat"
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
        "frequency": "mastery_check",
        "questionsPerCheck": 5,
        "totalQuestions": 5,
        "timeLimitMinutes": 12,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 5,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.8
      }
    }
  ],
  "localeSupport": [
    "en",
    "es"
  ]
};
