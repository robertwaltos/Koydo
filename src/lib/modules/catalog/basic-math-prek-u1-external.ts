import type { LearningModule } from "@/lib/modules/types";

export const BasicMathPrekU1ExternalModule: LearningModule = {
  "id": "basic-math-prek-u1-external",
  "title": "Counting & Numbers 1–10",
  "description": "Mathematics unit for Pre-K imported from external JSX curriculum.",
  "subject": "Mathematics",
  "tags": [
    "external-ai",
    "curriculum-import",
    "grade-prek"
  ],
  "minAge": 3,
  "maxAge": 5,
  "moduleVersion": "external-1.0.0",
  "version": "external-1.0.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Explain Numbers Are Everywhere!.",
    "Explain Counting 1, 2, 3.",
    "Explain Counting 4 and 5.",
    "Explain 6, 7, 8, 9, 10!.",
    "Explain More, Fewer, Same.",
    "Explain Number Order 1–10.",
    "Build baseline confidence in Counting & Numbers 1–10.",
    "Apply one core Mathematics strategy for preK."
  ],
  "gradeBand": "preK",
  "metadata": {
    "source": "../External_AI_Agents/lesson_platform (1).jsx",
    "sourceUnitId": "basic-math-prek-u1",
    "sourceUnitIdCanonical": "basic-math-prek-u1",
    "sourceUnitIdRaw": "basic_math-prek-u1",
    "importedAt": "2026-02-25T02:03:30.456Z"
  },
  "external": {
    "unitOrder": 11,
    "estimatedHours": null,
    "prerequisites": []
  },
  "lessons": [
    {
      "id": "basic-math-prek-u1-1",
      "title": "Counting Objects 1–5 (PREK)",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "basic-math-prek-u1-1-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Counting Objects 1–5 (PREK)."
        }
      ],
      "objectives": [
        "Explain Numbers Are Everywhere!.",
        "Explain Counting 1, 2, 3.",
        "Explain Counting 4 and 5."
      ],
      "chunks": [
        {
          "id": "basic-math-prek-u1-1-chunk-1",
          "title": "Numbers Are Everywhere!",
          "content": "Numbers tell us HOW MANY of something there is. When we count, we match each number word to ONE object. This is called one-to-one correspondence!"
        },
        {
          "id": "basic-math-prek-u1-1-chunk-2",
          "title": "Counting 1, 2, 3",
          "content": "1 = ONE ⭐\n2 = TWO ⭐⭐\n3 = THREE ⭐⭐⭐\n\nPoint to each star as you count: one... two... three!\nPractice tip: Count objects around you — toys, crackers, fingers!"
        },
        {
          "id": "basic-math-prek-u1-1-chunk-3",
          "title": "Counting 4 and 5",
          "content": "4 = FOUR 🍎🍎🍎🍎\n5 = FIVE 🍎🍎🍎🍎🍎\n\nFIVE is special — it's the fingers on one hand! ✋\nHold up 5 fingers and count them: 1, 2, 3, 4, 5!"
        },
        {
          "id": "basic-math-prek-u1-1-chunk-4",
          "title": "Counting Rules",
          "content": "Golden Rules of Counting:\n• Touch each object as you say each number\n• Say ONE number for each object\n• The LAST number you say tells how many there are\n• Line up objects so you don't miss or count twice!"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-1-card-1",
          "front": "1",
          "back": "ONE ⭐"
        },
        {
          "id": "basic-math-prek-u1-1-card-2",
          "front": "2",
          "back": "TWO ⭐⭐"
        },
        {
          "id": "basic-math-prek-u1-1-card-3",
          "front": "3",
          "back": "THREE ⭐⭐⭐"
        },
        {
          "id": "basic-math-prek-u1-1-card-4",
          "front": "4",
          "back": "FOUR 🍎🍎🍎🍎"
        },
        {
          "id": "basic-math-prek-u1-1-card-5",
          "front": "5",
          "back": "FIVE ✋ — one whole hand!"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Colorful animated world. A friendly counting character (a number-shaped robot) moves through a magical landscape counting objects — 1 sun, 2 birds, 3 flowers, 4 butterflies, 5 stars. Each object appears one by one as the number is spoken clearly. Big animated numerals 1-5 appear on screen. Very slow, deliberate pacing. Ages 3-5. Warm, cheerful colors. Duration: 60 seconds.",
        "seedanceAnimation": "Lottie animation: Objects appear one by one (stars) as a counter ticks 1-5. Each new star bounces in with a pop sound implied. The numeral grows larger with each count. Big, colorful, simple. 10-second animation.",
        "lessonImage": "Create a clean educational illustration for \"Counting Objects 1–5 (PREK)\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting Objects 1–5 (PREK)\" (Mathematics, grade band preK)."
      },
      "localized": {
        "title": {
          "en": "Counting Objects 1–5"
        },
        "concept": {
          "en": "Counting Objects 1–5"
        }
      },
      "external": {
        "sourceLessonId": "basic_math-prek-u1-1",
        "order": 1
      }
    },
    {
      "id": "basic-math-prek-u1-2",
      "title": "Numbers 6–10 & Comparing Quantities (PREK)",
      "type": "interactive",
      "duration": 15,
      "interactiveActivities": [
        {
          "id": "basic-math-prek-u1-2-ia1",
          "type": "drag_and_drop",
          "title": "Numbers 6–10 & Comparing Quantities (PREK) Learning Flow",
          "description": "Sort each action into Plan, Practice, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Read each action.",
            "Choose where it belongs.",
            "Use the result as your practice plan."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "practice",
                "label": "Practice"
              },
              {
                "id": "reflect",
                "label": "Reflect"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set a goal for Explain 6, 7, 8, 9, 10!..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use a short checklist: plan, solve, verify.",
                "correctTargetId": "practice"
              },
              {
                "id": "d3",
                "label": "Write one thing to improve before the next attempt.",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-prek-u1-2-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Numbers 6–10 & Comparing Quantities (PREK)."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain 6, 7, 8, 9, 10!.",
          "Explain More, Fewer, Same.",
          "Explain Number Order 1–10."
        ]
      },
      "objectives": [
        "Explain 6, 7, 8, 9, 10!.",
        "Explain More, Fewer, Same.",
        "Explain Number Order 1–10."
      ],
      "chunks": [
        {
          "id": "basic-math-prek-u1-2-chunk-1",
          "title": "6, 7, 8, 9, 10!",
          "content": "6 = SIX 🎲🎲🎲🎲🎲🎲\n7 = SEVEN 🌈🌈🌈🌈🌈🌈🌈\n8 = EIGHT 🐙 (8 legs!)\n9 = NINE 🍫🍫🍫🍫🍫🍫🍫🍫🍫\n10 = TEN 🖐️🖐️ (two whole hands!)"
        },
        {
          "id": "basic-math-prek-u1-2-chunk-2",
          "title": "More, Fewer, Same",
          "content": "MORE means a bigger amount: 🍎🍎🍎🍎 is more than 🍎🍎\nFEWER means a smaller amount: 🍎🍎 is fewer than 🍎🍎🍎\nSAME means equal amounts: 🍎🍎🍎 = 🍎🍎🍎\n\nHow to compare: Count each group! The bigger number has MORE."
        },
        {
          "id": "basic-math-prek-u1-2-chunk-3",
          "title": "Number Order 1–10",
          "content": "The counting order never changes:\n1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10\n\nEach number is ONE MORE than the number before it.\n6 is one more than 5.\n7 is one more than 6.\n8 is one more than 7."
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-2-card-1",
          "front": "6",
          "back": "SIX 🎲🎲🎲🎲🎲🎲"
        },
        {
          "id": "basic-math-prek-u1-2-card-2",
          "front": "7",
          "back": "SEVEN 🌈🌈🌈🌈🌈🌈🌈"
        },
        {
          "id": "basic-math-prek-u1-2-card-3",
          "front": "8",
          "back": "EIGHT — like an octopus with 8 legs! 🐙"
        },
        {
          "id": "basic-math-prek-u1-2-card-4",
          "front": "9",
          "back": "NINE 🍫🍫🍫🍫🍫🍫🍫🍫🍫"
        },
        {
          "id": "basic-math-prek-u1-2-card-5",
          "front": "10",
          "back": "TEN = both hands! 🖐️🖐️"
        },
        {
          "id": "basic-math-prek-u1-2-card-6",
          "front": "MORE means...",
          "back": "A larger amount — the bigger number"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Animated number parade — numbers 6-10 march across the screen like parade characters. Each has a personality: 6 juggles, 7 has a rainbow cape, 8 is shaped like a snowman. Comparing quantities shown as two bowls of fruit — child counts each, then 'more' or 'fewer' bounces onto screen. Joyful, kinetic energy. Ages 3-5. Duration: 55 seconds.",
        "seedanceAnimation": "Lottie animation: Two groups of dots appear side by side. First group grows larger (1-6 dots). Second stays at 4. 'MORE' or 'FEWER' label animates in with an arrow. Groups reset and repeat with new numbers. 12-second loop.",
        "lessonImage": "Create a clean educational illustration for \"Numbers 6–10 & Comparing Quantities (PREK)\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Numbers 6–10 & Comparing Quantities (PREK)\" (Mathematics, grade band preK)."
      },
      "localized": {
        "title": {
          "en": "Numbers 6–10 & Comparing Quantities"
        },
        "concept": {
          "en": "Numbers 6–10 & Comparing Quantities"
        }
      },
      "external": {
        "sourceLessonId": "basic_math-prek-u1-2",
        "order": 2
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-quiz",
      "title": "Counting & Numbers 1–10 Supplemental Check",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-prek-u1-external-supp-quiz-q1",
          "text": "Which option best summarizes Counting & Numbers 1–10 Supplemental Check?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-supplemental-check-summary",
          "options": [
            {
              "id": "a",
              "text": "Build baseline confidence in Counting & Numbers 1–10."
            },
            {
              "id": "b",
              "text": "A claim that ignores the calculation steps."
            },
            {
              "id": "c",
              "text": "A shortcut with no evidence of verification."
            },
            {
              "id": "d",
              "text": "An explanation that mixes unrelated math rules."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-prek-u1-external-supp-quiz-q2",
          "text": "Which response shows correct application of Counting & Numbers 1–10 Supplemental Check?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-supplemental-check-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply one core Mathematics strategy for preK."
            },
            {
              "id": "b",
              "text": "Apply the right numbers but the wrong operation."
            },
            {
              "id": "c",
              "text": "Skip the setup and guess from answer size."
            },
            {
              "id": "d",
              "text": "Use a method from a different problem type."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-prek-u1-external-supp-quiz-q3",
          "text": "Why is review important after learning Counting & Numbers 1–10 Supplemental Check?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-supplemental-check-review",
          "options": [
            {
              "id": "a",
              "text": "Compare two strategies and choose the more reliable one."
            },
            {
              "id": "b",
              "text": "It replaces understanding with guessing."
            },
            {
              "id": "c",
              "text": "It removes the need for future practice."
            },
            {
              "id": "d",
              "text": "It makes progress tracking impossible."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "basic-math-prek-u1-external-supp-quiz-ia1",
          "type": "matching_pairs",
          "title": "Counting & Numbers 1–10 Supplemental Check Error Match",
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
                "label": "I still mix up Build baseline confidence in Counting & Numbers 1–10.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Counting & Numbers 1–10 Supplemental Check in notes but not in timed checks."
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
        "timeLimitMinutes": 10,
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
          "id": "basic-math-prek-u1-external-supp-quiz-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Counting & Numbers 1–10 Supplemental Check."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Build baseline confidence in Counting & Numbers 1–10.",
        "Apply one core Mathematics strategy for preK."
      ],
      "chunks": [
        {
          "id": "basic-math-prek-u1-external-supp-quiz-chunk-intro",
          "title": "Counting & Numbers 1–10 Supplemental Check Overview",
          "content": "Reinforce core Mathematics concepts in Counting & Numbers 1–10.",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-quiz-chunk-recap",
          "title": "Quick Recap",
          "content": "Summarize one key idea and plan one next step.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-quiz-card-1",
          "front": "What is one key idea in Counting & Numbers 1–10?",
          "back": "Build baseline confidence in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-quiz-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core Mathematics strategy for preK."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Supplemental Check\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Supplemental Check\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Supplemental Check\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Supplemental Check\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-supp-quiz",
        "order": 3,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-04",
      "title": "Counting & Numbers 1–10 Concept Walkthrough 4: Multi Step Strategy",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-04-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Counting & Numbers 1–10 Concept Walkthrough 4: Multi Step Strategy."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain multi-step strategy using age-appropriate vocabulary.",
        "Apply multi-step strategy in one guided Mathematics task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-04-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "Model the problem with a visual or equation before solving.",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-04-chunk-practice",
          "title": "Guided Practice",
          "content": "Solve one guided item, then one independent item with the same pattern.",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-04-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying multi-step strategy, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-04-chunk-recap",
          "title": "Quick Recap",
          "content": "Review multi-step strategy, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-04-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-04-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-04-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-04-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Concept Walkthrough 4: Multi Step Strategy\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Concept Walkthrough 4: Multi Step Strategy\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Concept Walkthrough 4: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Concept Walkthrough 4: Multi Step Strategy\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-4",
        "order": 4,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-05",
      "title": "Counting & Numbers 1–10 Guided Practice Lab 5: Error Check Routines",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-05-ia1",
          "type": "drag_and_drop",
          "title": "Counting & Numbers 1–10 Guided Practice Lab 5: Error Check Routines Learning Flow",
          "description": "Sort each action into Plan, Practice, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Read each action.",
            "Choose where it belongs.",
            "Use the result as your practice plan."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "practice",
                "label": "Practice"
              },
              {
                "id": "reflect",
                "label": "Reflect"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set a goal for Explain error-check routines using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use a short checklist: plan, solve, verify.",
                "correctTargetId": "practice"
              },
              {
                "id": "d3",
                "label": "Write one thing to improve before the next attempt.",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-05-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Counting & Numbers 1–10 Guided Practice Lab 5: Error Check Routines."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain error-check routines using age-appropriate vocabulary.",
          "Apply error-check routines in one guided Mathematics task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain error-check routines using age-appropriate vocabulary.",
        "Apply error-check routines in one guided Mathematics task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-05-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "Name the operation and explain why it fits.",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-05-chunk-practice",
          "title": "Guided Practice",
          "content": "Use a short checklist: plan, solve, verify.",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-05-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying error-check routines, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-05-chunk-recap",
          "title": "Quick Recap",
          "content": "Review error-check routines, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-05-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-05-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-05-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-05-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Guided Practice Lab 5: Error Check Routines\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Guided Practice Lab 5: Error Check Routines\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Guided Practice Lab 5: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Guided Practice Lab 5: Error Check Routines\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-5",
        "order": 5,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-06",
      "title": "Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-06-q1",
          "text": "Which option best summarizes Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-6-number-sense-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain number sense using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A claim that ignores the calculation steps."
            },
            {
              "id": "c",
              "text": "A shortcut with no evidence of verification."
            },
            {
              "id": "d",
              "text": "An explanation that mixes unrelated math rules."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-06-q2",
          "text": "Which response shows correct application of Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-6-number-sense-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply number sense in one guided Mathematics task."
            },
            {
              "id": "b",
              "text": "Apply the right numbers but the wrong operation."
            },
            {
              "id": "c",
              "text": "Skip the setup and guess from answer size."
            },
            {
              "id": "d",
              "text": "Use a method from a different problem type."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-06-q3",
          "text": "Why is review important after learning Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-6-number-sense-review",
          "options": [
            {
              "id": "a",
              "text": "Compare two strategies and choose the more reliable one."
            },
            {
              "id": "b",
              "text": "It replaces understanding with guessing."
            },
            {
              "id": "c",
              "text": "It removes the need for future practice."
            },
            {
              "id": "d",
              "text": "It makes progress tracking impossible."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-06-ia1",
          "type": "matching_pairs",
          "title": "Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense Error Match",
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
                "label": "I still mix up Explain number sense using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense in notes but not in timed checks."
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
        "timeLimitMinutes": 10,
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
          "id": "basic-math-prek-u1-external-supp-seq-06-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain number sense using age-appropriate vocabulary.",
        "Apply number sense in one guided Mathematics task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-06-chunk-intro",
          "title": "Number Sense Intro",
          "content": "Check units, signs, and reasonableness before finalizing.",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-06-chunk-practice",
          "title": "Guided Practice",
          "content": "Compare two strategies and choose the more reliable one.",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-06-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying number sense, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-06-chunk-recap",
          "title": "Quick Recap",
          "content": "Review number sense, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-06-card-1",
          "front": "What is number sense?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-06-card-2",
          "front": "How can I practice number sense?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-06-card-3",
          "front": "What should I review next?",
          "back": "Review number sense, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-06-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-6",
        "order": 6,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-07",
      "title": "Counting & Numbers 1–10 Concept Walkthrough 7: Equation Setup",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-07-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Counting & Numbers 1–10 Concept Walkthrough 7: Equation Setup."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain equation setup using age-appropriate vocabulary.",
        "Apply equation setup in one guided Mathematics task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-07-chunk-intro",
          "title": "Equation Setup Intro",
          "content": "Model the problem with a visual or equation before solving.",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-07-chunk-practice",
          "title": "Guided Practice",
          "content": "Solve one guided item, then one independent item with the same pattern.",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-07-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying equation setup, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-07-chunk-recap",
          "title": "Quick Recap",
          "content": "Review equation setup, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-07-card-1",
          "front": "What is equation setup?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-07-card-2",
          "front": "How can I practice equation setup?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-07-card-3",
          "front": "What should I review next?",
          "back": "Review equation setup, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-07-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Concept Walkthrough 7: Equation Setup\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Concept Walkthrough 7: Equation Setup\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Concept Walkthrough 7: Equation Setup\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Concept Walkthrough 7: Equation Setup\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-7",
        "order": 7,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-08",
      "title": "Counting & Numbers 1–10 Guided Practice Lab 8: Fraction Reasoning",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-08-ia1",
          "type": "drag_and_drop",
          "title": "Counting & Numbers 1–10 Guided Practice Lab 8: Fraction Reasoning Learning Flow",
          "description": "Sort each action into Plan, Practice, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Read each action.",
            "Choose where it belongs.",
            "Use the result as your practice plan."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "practice",
                "label": "Practice"
              },
              {
                "id": "reflect",
                "label": "Reflect"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set a goal for Explain fraction reasoning using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use a short checklist: plan, solve, verify.",
                "correctTargetId": "practice"
              },
              {
                "id": "d3",
                "label": "Write one thing to improve before the next attempt.",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-08-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Counting & Numbers 1–10 Guided Practice Lab 8: Fraction Reasoning."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain fraction reasoning using age-appropriate vocabulary.",
          "Apply fraction reasoning in one guided Mathematics task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain fraction reasoning using age-appropriate vocabulary.",
        "Apply fraction reasoning in one guided Mathematics task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-08-chunk-intro",
          "title": "Fraction Reasoning Intro",
          "content": "Name the operation and explain why it fits.",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-08-chunk-practice",
          "title": "Guided Practice",
          "content": "Use a short checklist: plan, solve, verify.",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-08-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying fraction reasoning, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-08-chunk-recap",
          "title": "Quick Recap",
          "content": "Review fraction reasoning, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-08-card-1",
          "front": "What is fraction reasoning?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-08-card-2",
          "front": "How can I practice fraction reasoning?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-08-card-3",
          "front": "What should I review next?",
          "back": "Review fraction reasoning, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-08-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Guided Practice Lab 8: Fraction Reasoning\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Guided Practice Lab 8: Fraction Reasoning\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Guided Practice Lab 8: Fraction Reasoning\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Guided Practice Lab 8: Fraction Reasoning\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-8",
        "order": 8,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-09",
      "title": "Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-09-q1",
          "text": "Which option best summarizes Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-9-multi-step-strategy-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain multi-step strategy using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A claim that ignores the calculation steps."
            },
            {
              "id": "c",
              "text": "A shortcut with no evidence of verification."
            },
            {
              "id": "d",
              "text": "An explanation that mixes unrelated math rules."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-09-q2",
          "text": "Which response shows correct application of Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-9-multi-step-strategy-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply multi-step strategy in one guided Mathematics task."
            },
            {
              "id": "b",
              "text": "Apply the right numbers but the wrong operation."
            },
            {
              "id": "c",
              "text": "Skip the setup and guess from answer size."
            },
            {
              "id": "d",
              "text": "Use a method from a different problem type."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-09-q3",
          "text": "Why is review important after learning Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-9-multi-step-strategy-review",
          "options": [
            {
              "id": "a",
              "text": "Compare two strategies and choose the more reliable one."
            },
            {
              "id": "b",
              "text": "It replaces understanding with guessing."
            },
            {
              "id": "c",
              "text": "It removes the need for future practice."
            },
            {
              "id": "d",
              "text": "It makes progress tracking impossible."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-09-ia1",
          "type": "matching_pairs",
          "title": "Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy Error Match",
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
                "label": "I still mix up Explain multi-step strategy using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy in notes but not in timed checks."
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
        "timeLimitMinutes": 10,
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
          "id": "basic-math-prek-u1-external-supp-seq-09-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain multi-step strategy using age-appropriate vocabulary.",
        "Apply multi-step strategy in one guided Mathematics task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-09-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "Check units, signs, and reasonableness before finalizing.",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-09-chunk-practice",
          "title": "Guided Practice",
          "content": "Compare two strategies and choose the more reliable one.",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-09-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying multi-step strategy, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-09-chunk-recap",
          "title": "Quick Recap",
          "content": "Review multi-step strategy, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-09-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-09-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-09-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-09-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-9",
        "order": 9,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-10",
      "title": "Counting & Numbers 1–10 Concept Walkthrough 10: Error Check Routines",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-10-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Counting & Numbers 1–10 Concept Walkthrough 10: Error Check Routines."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain error-check routines using age-appropriate vocabulary.",
        "Apply error-check routines in one guided Mathematics task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-10-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "Model the problem with a visual or equation before solving.",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-10-chunk-practice",
          "title": "Guided Practice",
          "content": "Solve one guided item, then one independent item with the same pattern.",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-10-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying error-check routines, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-10-chunk-recap",
          "title": "Quick Recap",
          "content": "Review error-check routines, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-10-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-10-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-10-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-10-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Concept Walkthrough 10: Error Check Routines\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Concept Walkthrough 10: Error Check Routines\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Concept Walkthrough 10: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Concept Walkthrough 10: Error Check Routines\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-10",
        "order": 10,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-11",
      "title": "Counting & Numbers 1–10 Guided Practice Lab 11: Number Sense",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-11-ia1",
          "type": "drag_and_drop",
          "title": "Counting & Numbers 1–10 Guided Practice Lab 11: Number Sense Learning Flow",
          "description": "Sort each action into Plan, Practice, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Read each action.",
            "Choose where it belongs.",
            "Use the result as your practice plan."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "practice",
                "label": "Practice"
              },
              {
                "id": "reflect",
                "label": "Reflect"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set a goal for Explain number sense using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use a short checklist: plan, solve, verify.",
                "correctTargetId": "practice"
              },
              {
                "id": "d3",
                "label": "Write one thing to improve before the next attempt.",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-11-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Counting & Numbers 1–10 Guided Practice Lab 11: Number Sense."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain number sense using age-appropriate vocabulary.",
          "Apply number sense in one guided Mathematics task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain number sense using age-appropriate vocabulary.",
        "Apply number sense in one guided Mathematics task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-11-chunk-intro",
          "title": "Number Sense Intro",
          "content": "Name the operation and explain why it fits.",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-11-chunk-practice",
          "title": "Guided Practice",
          "content": "Use a short checklist: plan, solve, verify.",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-11-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying number sense, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-11-chunk-recap",
          "title": "Quick Recap",
          "content": "Review number sense, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-11-card-1",
          "front": "What is number sense?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-11-card-2",
          "front": "How can I practice number sense?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-11-card-3",
          "front": "What should I review next?",
          "back": "Review number sense, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-11-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Guided Practice Lab 11: Number Sense\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Guided Practice Lab 11: Number Sense\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Guided Practice Lab 11: Number Sense\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Guided Practice Lab 11: Number Sense\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-11",
        "order": 11,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-12",
      "title": "Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-12-q1",
          "text": "Which option best summarizes Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-12-equation-setup-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain equation setup using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A claim that ignores the calculation steps."
            },
            {
              "id": "c",
              "text": "A shortcut with no evidence of verification."
            },
            {
              "id": "d",
              "text": "An explanation that mixes unrelated math rules."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-12-q2",
          "text": "Which response shows correct application of Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-12-equation-setup-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply equation setup in one guided Mathematics task."
            },
            {
              "id": "b",
              "text": "Apply the right numbers but the wrong operation."
            },
            {
              "id": "c",
              "text": "Skip the setup and guess from answer size."
            },
            {
              "id": "d",
              "text": "Use a method from a different problem type."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-12-q3",
          "text": "Why is review important after learning Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-12-equation-setup-review",
          "options": [
            {
              "id": "a",
              "text": "Compare two strategies and choose the more reliable one."
            },
            {
              "id": "b",
              "text": "It replaces understanding with guessing."
            },
            {
              "id": "c",
              "text": "It removes the need for future practice."
            },
            {
              "id": "d",
              "text": "It makes progress tracking impossible."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-12-ia1",
          "type": "matching_pairs",
          "title": "Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup Error Match",
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
                "label": "I still mix up Explain equation setup using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup in notes but not in timed checks."
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
        "timeLimitMinutes": 10,
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
          "id": "basic-math-prek-u1-external-supp-seq-12-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain equation setup using age-appropriate vocabulary.",
        "Apply equation setup in one guided Mathematics task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-12-chunk-intro",
          "title": "Equation Setup Intro",
          "content": "Check units, signs, and reasonableness before finalizing.",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-12-chunk-practice",
          "title": "Guided Practice",
          "content": "Compare two strategies and choose the more reliable one.",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-12-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying equation setup, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-12-chunk-recap",
          "title": "Quick Recap",
          "content": "Review equation setup, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-12-card-1",
          "front": "What is equation setup?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-12-card-2",
          "front": "How can I practice equation setup?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-12-card-3",
          "front": "What should I review next?",
          "back": "Review equation setup, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-12-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-12",
        "order": 12,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-13",
      "title": "Counting & Numbers 1–10 Concept Walkthrough 13: Fraction Reasoning",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-13-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Counting & Numbers 1–10 Concept Walkthrough 13: Fraction Reasoning."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain fraction reasoning using age-appropriate vocabulary.",
        "Apply fraction reasoning in one guided Mathematics task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-13-chunk-intro",
          "title": "Fraction Reasoning Intro",
          "content": "Model the problem with a visual or equation before solving.",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-13-chunk-practice",
          "title": "Guided Practice",
          "content": "Solve one guided item, then one independent item with the same pattern.",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-13-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying fraction reasoning, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-13-chunk-recap",
          "title": "Quick Recap",
          "content": "Review fraction reasoning, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-13-card-1",
          "front": "What is fraction reasoning?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-13-card-2",
          "front": "How can I practice fraction reasoning?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-13-card-3",
          "front": "What should I review next?",
          "back": "Review fraction reasoning, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-13-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Concept Walkthrough 13: Fraction Reasoning\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Concept Walkthrough 13: Fraction Reasoning\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Concept Walkthrough 13: Fraction Reasoning\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Concept Walkthrough 13: Fraction Reasoning\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-13",
        "order": 13,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-14",
      "title": "Counting & Numbers 1–10 Guided Practice Lab 14: Multi Step Strategy",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-14-ia1",
          "type": "drag_and_drop",
          "title": "Counting & Numbers 1–10 Guided Practice Lab 14: Multi Step Strategy Learning Flow",
          "description": "Sort each action into Plan, Practice, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Read each action.",
            "Choose where it belongs.",
            "Use the result as your practice plan."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "practice",
                "label": "Practice"
              },
              {
                "id": "reflect",
                "label": "Reflect"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set a goal for Explain multi-step strategy using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use a short checklist: plan, solve, verify.",
                "correctTargetId": "practice"
              },
              {
                "id": "d3",
                "label": "Write one thing to improve before the next attempt.",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-14-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Counting & Numbers 1–10 Guided Practice Lab 14: Multi Step Strategy."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain multi-step strategy using age-appropriate vocabulary.",
          "Apply multi-step strategy in one guided Mathematics task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain multi-step strategy using age-appropriate vocabulary.",
        "Apply multi-step strategy in one guided Mathematics task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-14-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "Name the operation and explain why it fits.",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-14-chunk-practice",
          "title": "Guided Practice",
          "content": "Use a short checklist: plan, solve, verify.",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-14-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying multi-step strategy, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-14-chunk-recap",
          "title": "Quick Recap",
          "content": "Review multi-step strategy, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-14-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-14-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-14-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-14-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Guided Practice Lab 14: Multi Step Strategy\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Guided Practice Lab 14: Multi Step Strategy\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Guided Practice Lab 14: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Guided Practice Lab 14: Multi Step Strategy\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-14",
        "order": 14,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-15",
      "title": "Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-15-q1",
          "text": "Which option best summarizes Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-15-error-check-routines-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain error-check routines using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A claim that ignores the calculation steps."
            },
            {
              "id": "c",
              "text": "A shortcut with no evidence of verification."
            },
            {
              "id": "d",
              "text": "An explanation that mixes unrelated math rules."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-15-q2",
          "text": "Which response shows correct application of Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-15-error-check-routines-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply error-check routines in one guided Mathematics task."
            },
            {
              "id": "b",
              "text": "Apply the right numbers but the wrong operation."
            },
            {
              "id": "c",
              "text": "Skip the setup and guess from answer size."
            },
            {
              "id": "d",
              "text": "Use a method from a different problem type."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-15-q3",
          "text": "Why is review important after learning Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-15-error-check-routines-review",
          "options": [
            {
              "id": "a",
              "text": "Compare two strategies and choose the more reliable one."
            },
            {
              "id": "b",
              "text": "It replaces understanding with guessing."
            },
            {
              "id": "c",
              "text": "It removes the need for future practice."
            },
            {
              "id": "d",
              "text": "It makes progress tracking impossible."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-15-ia1",
          "type": "matching_pairs",
          "title": "Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines Error Match",
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
                "label": "I still mix up Explain error-check routines using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines in notes but not in timed checks."
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
        "timeLimitMinutes": 10,
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
          "id": "basic-math-prek-u1-external-supp-seq-15-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain error-check routines using age-appropriate vocabulary.",
        "Apply error-check routines in one guided Mathematics task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-15-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "Check units, signs, and reasonableness before finalizing.",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-15-chunk-practice",
          "title": "Guided Practice",
          "content": "Compare two strategies and choose the more reliable one.",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-15-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying error-check routines, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-15-chunk-recap",
          "title": "Quick Recap",
          "content": "Review error-check routines, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-15-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-15-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-15-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-15-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-15",
        "order": 15,
        "generatedSupplement": true
      }
    }
  ]
};
