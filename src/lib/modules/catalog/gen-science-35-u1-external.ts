import type { LearningModule } from "@/lib/modules/types";

export const GenScience35U1ExternalModule: LearningModule = {
  "id": "gen-science-35-u1-external",
  "title": "Matter, Energy & Earth's Systems",
  "description": "General Science unit for 3–5 imported from external JSX curriculum.",
  "subject": "General Science",
  "tags": [
    "external-ai",
    "curriculum-import",
    "grade-35"
  ],
  "minAge": 8,
  "maxAge": 11,
  "version": "external-1.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Explain Everything is Made of Matter.",
    "Explain Solids: Definite Shape & Volume.",
    "Explain Liquids: Definite Volume, No Definite Shape.",
    "Build baseline confidence in Matter, Energy & Earth's Systems.",
    "Apply one core General Science strategy for 35.",
    "Explain evidence interpretation using age-appropriate vocabulary.",
    "Apply evidence interpretation in one guided General Science task.",
    "Identify one correction step for the next attempt."
  ],
  "gradeBand": "35",
  "metadata": {
    "source": "../External_AI_Agents/lesson_platform (1).jsx",
    "sourceUnitId": "gen-science-35-u1",
    "sourceUnitIdCanonical": "gen-science-35-u1",
    "sourceUnitIdRaw": "gen_science-35-u1",
    "importedAt": "2026-02-25T02:03:30.464Z"
  },
  "external": {
    "unitOrder": 13,
    "estimatedHours": null,
    "prerequisites": []
  },
  "lessons": [
    {
      "id": "gen-science-35-u1-1",
      "title": "States of Matter: Solid, Liquid, Gas (35)",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "gen-science-35-u1-1-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for States of Matter: Solid, Liquid, Gas (35)."
        }
      ],
      "objectives": [
        "Explain Everything is Made of Matter.",
        "Explain Solids: Definite Shape & Volume.",
        "Explain Liquids: Definite Volume, No Definite Shape."
      ],
      "chunks": [
        {
          "id": "gen-science-35-u1-1-chunk-1",
          "title": "Everything is Made of Matter",
          "content": "MATTER is anything that has MASS and takes up SPACE. Everything you can see, touch, or weigh is matter!\n\nMatter comes in three common states:\n• SOLID (ice 🧊)\n• LIQUID (water 💧)\n• GAS (steam 💨)\n\nThe state depends on HOW FAST the tiny particles (molecules) are moving!"
        },
        {
          "id": "gen-science-35-u1-1-chunk-2",
          "title": "Solids: Definite Shape & Volume",
          "content": "SOLIDS have:\n• DEFINITE SHAPE (they don't change shape unless force is applied)\n• DEFINITE VOLUME (they take up a fixed amount of space)\n\nWhy? The particles in a solid are TIGHTLY PACKED and vibrate in place — they can't move freely.\n\nExamples: rock, ice, wood, iron, glass, a book"
        },
        {
          "id": "gen-science-35-u1-1-chunk-3",
          "title": "Liquids: Definite Volume, No Definite Shape",
          "content": "LIQUIDS have:\n• DEFINITE VOLUME (always same amount)\n• NO DEFINITE SHAPE (take the shape of their container!)\n\nPour water from a round bowl to a tall glass — it changes shape but the VOLUME stays the same.\n\nParticles in liquids: loosely connected, can FLOW past each other.\n\nExamples: water, juice, mercury, lava, olive oil"
        },
        {
          "id": "gen-science-35-u1-1-chunk-4",
          "title": "Gases: No Definite Shape or Volume",
          "content": "GASES have:\n• NO DEFINITE SHAPE\n• NO DEFINITE VOLUME\n\nGas particles move VERY FAST and spread out to fill any container!\n\nInflate a balloon — gas molecules rush outward, filling every corner.\n\nExamples: air, oxygen, carbon dioxide, steam\n\nComparing states: SOLID = slowest particles; GAS = fastest particles; LIQUID = in between!"
        },
        {
          "id": "gen-science-35-u1-1-chunk-5",
          "title": "Phase Changes",
          "content": "Matter can CHANGE STATE when energy is added or removed:\n\nSOLID → LIQUID: MELTING (add heat) — ice → water\nLIQUID → GAS: EVAPORATION/BOILING (add heat) — water → steam\nGAS → LIQUID: CONDENSATION (remove heat) — steam → water\nLIQUID → SOLID: FREEZING (remove heat) — water → ice\n\nThe AMOUNT of matter doesn't change — only the state changes!"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-35-u1-1-card-1",
          "front": "Solid properties",
          "back": "Definite shape + definite volume. Particles tightly packed, vibrate in place."
        },
        {
          "id": "gen-science-35-u1-1-card-2",
          "front": "Liquid properties",
          "back": "Definite volume + NO definite shape. Particles loosely connected, can flow."
        },
        {
          "id": "gen-science-35-u1-1-card-3",
          "front": "Gas properties",
          "back": "NO definite shape + NO definite volume. Particles move freely and fast."
        },
        {
          "id": "gen-science-35-u1-1-card-4",
          "front": "MELTING",
          "back": "Solid → Liquid (heat added)"
        },
        {
          "id": "gen-science-35-u1-1-card-5",
          "front": "FREEZING",
          "back": "Liquid → Solid (heat removed)"
        },
        {
          "id": "gen-science-35-u1-1-card-6",
          "front": "EVAPORATION",
          "back": "Liquid → Gas (heat added)"
        },
        {
          "id": "gen-science-35-u1-1-card-7",
          "front": "CONDENSATION",
          "back": "Gas → Liquid (heat removed)"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Animated molecular lab. Zoom into water molecules in three states: Solid (tightly packed, barely moving), Liquid (loosely connected, flowing slowly), Gas (fast-moving, spread out). Phase changes shown as temperature gauge increases/decreases and molecules respond. An ice cube melts into water, then evaporates. Each state clearly labeled. Ages 8-11. Scientific but visually engaging. Duration: 75 seconds.",
        "seedanceAnimation": "Lottie animation: Three panels side by side — Solid (dots in tight grid, tiny vibrations), Liquid (dots loosely arranged, gentle flowing motion), Gas (dots scattered, fast random movement). Labels and property text appear beneath each. A thermometer rises/falls to trigger transitions. 14-second loop.",
        "lessonImage": "Create a clean educational illustration for \"States of Matter: Solid, Liquid, Gas (35)\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"States of Matter: Solid, Liquid, Gas (35)\" (General Science, grade band 35)."
      },
      "localized": {
        "title": {
          "en": "States of Matter: Solid, Liquid, Gas"
        },
        "concept": {
          "en": "States of Matter: Solid, Liquid, Gas"
        }
      },
      "external": {
        "sourceLessonId": "gen_science-35-u1-1",
        "order": 1
      }
    },
    {
      "id": "gen-science-35-u1-external-supp-interactive",
      "title": "Matter, Energy & Earth's Systems Supplemental Practice",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-35-u1-external-supp-interactive-ia1",
          "type": "drag_and_drop",
          "title": "Matter, Energy & Earth's Systems Supplemental Practice Learning Flow",
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
                "label": "Set a goal for Build baseline confidence in Matter, Energy & Earth's Systems..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Identify independent, dependent, and control variables.",
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
          "id": "gen-science-35-u1-external-supp-interactive-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Matter, Energy & Earth's Systems Supplemental Practice."
        }
      ],
      "metadata": {
        "prompts": [
          "Build baseline confidence in Matter, Energy & Earth's Systems.",
          "Apply one core General Science strategy for 35."
        ]
      },
      "objectives": [
        "Build baseline confidence in Matter, Energy & Earth's Systems.",
        "Apply one core General Science strategy for 35."
      ],
      "chunks": [
        {
          "id": "gen-science-35-u1-external-supp-interactive-chunk-intro",
          "title": "Matter, Energy & Earth's Systems Supplemental Practice Overview",
          "content": "Reinforce core General Science concepts in Matter, Energy & Earth's Systems.",
          "kind": "concept"
        },
        {
          "id": "gen-science-35-u1-external-supp-interactive-chunk-recap",
          "title": "Quick Recap",
          "content": "Summarize one key idea and plan one next step.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-35-u1-external-supp-interactive-card-1",
          "front": "What is one key idea in Matter, Energy & Earth's Systems?",
          "back": "Build baseline confidence in Matter, Energy & Earth's Systems."
        },
        {
          "id": "gen-science-35-u1-external-supp-interactive-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core General Science strategy for 35."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Matter, Energy & Earth's Systems Supplemental Practice\" in \"General Science\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Matter, Energy & Earth's Systems Supplemental Practice\" (General Science, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Matter, Energy & Earth's Systems Supplemental Practice\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Matter, Energy & Earth's Systems Supplemental Practice\" (General Science, grade band 35)."
      },
      "external": {
        "sourceLessonId": "gen-science-35-u1-external-supp-interactive",
        "order": 2,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-35-u1-external-supp-quiz",
      "title": "Matter, Energy & Earth's Systems Supplemental Check",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-35-u1-external-supp-quiz-q1",
          "text": "Which option best summarizes Matter, Energy & Earth's Systems Supplemental Check?",
          "skillId": "gen-science-35-u1-external-skill-matter-energy-earth-s-systems-supplemental-check-summary",
          "options": [
            {
              "id": "a",
              "text": "Build baseline confidence in Matter, Energy & Earth's Systems."
            },
            {
              "id": "b",
              "text": "A conclusion without evidence."
            },
            {
              "id": "c",
              "text": "A result that changes multiple variables at once."
            },
            {
              "id": "d",
              "text": "A claim that ignores the observed data."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-35-u1-external-supp-quiz-q2",
          "text": "Which response shows correct application of Matter, Energy & Earth's Systems Supplemental Check?",
          "skillId": "gen-science-35-u1-external-skill-matter-energy-earth-s-systems-supplemental-check-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply one core General Science strategy for 35."
            },
            {
              "id": "b",
              "text": "Select a conclusion before reviewing results."
            },
            {
              "id": "c",
              "text": "Use unrelated facts that do not match the experiment."
            },
            {
              "id": "d",
              "text": "Treat one observation as proof without retesting."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-35-u1-external-supp-quiz-q3",
          "text": "Why is review important after learning Matter, Energy & Earth's Systems Supplemental Check?",
          "skillId": "gen-science-35-u1-external-skill-matter-energy-earth-s-systems-supplemental-check-review",
          "options": [
            {
              "id": "a",
              "text": "Explain one result using evidence and science vocabulary."
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
          "id": "gen-science-35-u1-external-supp-quiz-ia1",
          "type": "matching_pairs",
          "title": "Matter, Energy & Earth's Systems Supplemental Check Error Match",
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
                "label": "I still mix up Build baseline confidence in Matter, Energy & Earth's Systems.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Matter, Energy & Earth's Systems Supplemental Check in notes but not in timed checks."
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
          "id": "gen-science-35-u1-external-supp-quiz-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Matter, Energy & Earth's Systems Supplemental Check."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Build baseline confidence in Matter, Energy & Earth's Systems.",
        "Apply one core General Science strategy for 35."
      ],
      "chunks": [
        {
          "id": "gen-science-35-u1-external-supp-quiz-chunk-intro",
          "title": "Matter, Energy & Earth's Systems Supplemental Check Overview",
          "content": "Reinforce core General Science concepts in Matter, Energy & Earth's Systems.",
          "kind": "concept"
        },
        {
          "id": "gen-science-35-u1-external-supp-quiz-chunk-recap",
          "title": "Quick Recap",
          "content": "Summarize one key idea and plan one next step.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-35-u1-external-supp-quiz-card-1",
          "front": "What is one key idea in Matter, Energy & Earth's Systems?",
          "back": "Build baseline confidence in Matter, Energy & Earth's Systems."
        },
        {
          "id": "gen-science-35-u1-external-supp-quiz-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core General Science strategy for 35."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Matter, Energy & Earth's Systems Supplemental Check\" in \"General Science\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Matter, Energy & Earth's Systems Supplemental Check\" (General Science, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Matter, Energy & Earth's Systems Supplemental Check\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Matter, Energy & Earth's Systems Supplemental Check\" (General Science, grade band 35)."
      },
      "external": {
        "sourceLessonId": "gen-science-35-u1-external-supp-quiz",
        "order": 3,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-35-u1-external-supp-seq-04",
      "title": "Matter, Energy & Earth's Systems Concept Walkthrough 4: Evidence Interpretation",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gen-science-35-u1-external-supp-seq-04-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Matter, Energy & Earth's Systems Concept Walkthrough 4: Evidence Interpretation."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain evidence interpretation using age-appropriate vocabulary.",
        "Apply evidence interpretation in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-35-u1-external-supp-seq-04-chunk-intro",
          "title": "Evidence Interpretation Intro",
          "content": "Start with an observation and a testable question.",
          "kind": "concept"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-04-chunk-practice",
          "title": "Guided Practice",
          "content": "Run a mini investigation and record outcomes in a table.",
          "kind": "practice"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-04-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying evidence interpretation, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-04-chunk-recap",
          "title": "Quick Recap",
          "content": "Review evidence interpretation, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-35-u1-external-supp-seq-04-card-1",
          "front": "What is evidence interpretation?",
          "back": "It is a key General Science idea in Matter, Energy & Earth's Systems."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-04-card-2",
          "front": "How can I practice evidence interpretation?",
          "back": "Run a mini investigation and record outcomes in a table."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-04-card-3",
          "front": "What should I review next?",
          "back": "Review evidence interpretation, then set one clear improvement target."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-04-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Matter, Energy & Earth's Systems Concept Walkthrough 4: Evidence Interpretation\" in \"General Science\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Matter, Energy & Earth's Systems Concept Walkthrough 4: Evidence Interpretation\" (General Science, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Matter, Energy & Earth's Systems Concept Walkthrough 4: Evidence Interpretation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Matter, Energy & Earth's Systems Concept Walkthrough 4: Evidence Interpretation\" (General Science, grade band 35)."
      },
      "external": {
        "sourceLessonId": "gen-science-35-u1-external-generated-cycle-4",
        "order": 4,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-35-u1-external-supp-seq-05",
      "title": "Matter, Energy & Earth's Systems Guided Practice Lab 5: Scientific Explanation",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-35-u1-external-supp-seq-05-ia1",
          "type": "drag_and_drop",
          "title": "Matter, Energy & Earth's Systems Guided Practice Lab 5: Scientific Explanation Learning Flow",
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
                "label": "Set a goal for Explain scientific explanation using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Identify independent, dependent, and control variables.",
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
          "id": "gen-science-35-u1-external-supp-seq-05-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Matter, Energy & Earth's Systems Guided Practice Lab 5: Scientific Explanation."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain scientific explanation using age-appropriate vocabulary.",
          "Apply scientific explanation in one guided General Science task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain scientific explanation using age-appropriate vocabulary.",
        "Apply scientific explanation in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-35-u1-external-supp-seq-05-chunk-intro",
          "title": "Scientific Explanation Intro",
          "content": "Change one variable at a time to keep results clear.",
          "kind": "concept"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-05-chunk-practice",
          "title": "Guided Practice",
          "content": "Identify independent, dependent, and control variables.",
          "kind": "practice"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-05-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying scientific explanation, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-05-chunk-recap",
          "title": "Quick Recap",
          "content": "Review scientific explanation, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-35-u1-external-supp-seq-05-card-1",
          "front": "What is scientific explanation?",
          "back": "It is a key General Science idea in Matter, Energy & Earth's Systems."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-05-card-2",
          "front": "How can I practice scientific explanation?",
          "back": "Identify independent, dependent, and control variables."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-05-card-3",
          "front": "What should I review next?",
          "back": "Review scientific explanation, then set one clear improvement target."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-05-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Matter, Energy & Earth's Systems Guided Practice Lab 5: Scientific Explanation\" in \"General Science\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Matter, Energy & Earth's Systems Guided Practice Lab 5: Scientific Explanation\" (General Science, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Matter, Energy & Earth's Systems Guided Practice Lab 5: Scientific Explanation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Matter, Energy & Earth's Systems Guided Practice Lab 5: Scientific Explanation\" (General Science, grade band 35)."
      },
      "external": {
        "sourceLessonId": "gen-science-35-u1-external-generated-cycle-5",
        "order": 5,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-35-u1-external-supp-seq-06",
      "title": "Matter, Energy & Earth's Systems Checkpoint Quiz 6: Observation Skills",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-35-u1-external-supp-seq-06-q1",
          "text": "Which option best summarizes Matter, Energy & Earth's Systems Checkpoint Quiz 6: Observation Skills?",
          "skillId": "gen-science-35-u1-external-skill-matter-energy-earth-s-systems-checkpoint-quiz-6-observation-skills-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain observation skills using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A conclusion without evidence."
            },
            {
              "id": "c",
              "text": "A result that changes multiple variables at once."
            },
            {
              "id": "d",
              "text": "A claim that ignores the observed data."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-06-q2",
          "text": "Which response shows correct application of Matter, Energy & Earth's Systems Checkpoint Quiz 6: Observation Skills?",
          "skillId": "gen-science-35-u1-external-skill-matter-energy-earth-s-systems-checkpoint-quiz-6-observation-skills-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply observation skills in one guided General Science task."
            },
            {
              "id": "b",
              "text": "Select a conclusion before reviewing results."
            },
            {
              "id": "c",
              "text": "Use unrelated facts that do not match the experiment."
            },
            {
              "id": "d",
              "text": "Treat one observation as proof without retesting."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-06-q3",
          "text": "Why is review important after learning Matter, Energy & Earth's Systems Checkpoint Quiz 6: Observation Skills?",
          "skillId": "gen-science-35-u1-external-skill-matter-energy-earth-s-systems-checkpoint-quiz-6-observation-skills-review",
          "options": [
            {
              "id": "a",
              "text": "Explain one result using evidence and science vocabulary."
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
          "id": "gen-science-35-u1-external-supp-seq-06-ia1",
          "type": "matching_pairs",
          "title": "Matter, Energy & Earth's Systems Checkpoint Quiz 6: Observation Skills Error Match",
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
                "label": "I still mix up Explain observation skills using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Matter, Energy & Earth's Systems Checkpoint Quiz 6: Observation Skills in notes but not in timed checks."
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
          "id": "gen-science-35-u1-external-supp-seq-06-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Matter, Energy & Earth's Systems Checkpoint Quiz 6: Observation Skills."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain observation skills using age-appropriate vocabulary.",
        "Apply observation skills in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-35-u1-external-supp-seq-06-chunk-intro",
          "title": "Observation Skills Intro",
          "content": "Use evidence from results to support the conclusion.",
          "kind": "concept"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-06-chunk-practice",
          "title": "Guided Practice",
          "content": "Explain one result using evidence and science vocabulary.",
          "kind": "practice"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-06-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying observation skills, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-06-chunk-recap",
          "title": "Quick Recap",
          "content": "Review observation skills, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-35-u1-external-supp-seq-06-card-1",
          "front": "What is observation skills?",
          "back": "It is a key General Science idea in Matter, Energy & Earth's Systems."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-06-card-2",
          "front": "How can I practice observation skills?",
          "back": "Explain one result using evidence and science vocabulary."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-06-card-3",
          "front": "What should I review next?",
          "back": "Review observation skills, then set one clear improvement target."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-06-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Matter, Energy & Earth's Systems Checkpoint Quiz 6: Observation Skills\" in \"General Science\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Matter, Energy & Earth's Systems Checkpoint Quiz 6: Observation Skills\" (General Science, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Matter, Energy & Earth's Systems Checkpoint Quiz 6: Observation Skills\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Matter, Energy & Earth's Systems Checkpoint Quiz 6: Observation Skills\" (General Science, grade band 35)."
      },
      "external": {
        "sourceLessonId": "gen-science-35-u1-external-generated-cycle-6",
        "order": 6,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-35-u1-external-supp-seq-07",
      "title": "Matter, Energy & Earth's Systems Concept Walkthrough 7: Hypothesis Testing",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gen-science-35-u1-external-supp-seq-07-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Matter, Energy & Earth's Systems Concept Walkthrough 7: Hypothesis Testing."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain hypothesis testing using age-appropriate vocabulary.",
        "Apply hypothesis testing in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-35-u1-external-supp-seq-07-chunk-intro",
          "title": "Hypothesis Testing Intro",
          "content": "Start with an observation and a testable question.",
          "kind": "concept"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-07-chunk-practice",
          "title": "Guided Practice",
          "content": "Run a mini investigation and record outcomes in a table.",
          "kind": "practice"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-07-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying hypothesis testing, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-07-chunk-recap",
          "title": "Quick Recap",
          "content": "Review hypothesis testing, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-35-u1-external-supp-seq-07-card-1",
          "front": "What is hypothesis testing?",
          "back": "It is a key General Science idea in Matter, Energy & Earth's Systems."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-07-card-2",
          "front": "How can I practice hypothesis testing?",
          "back": "Run a mini investigation and record outcomes in a table."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-07-card-3",
          "front": "What should I review next?",
          "back": "Review hypothesis testing, then set one clear improvement target."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-07-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Matter, Energy & Earth's Systems Concept Walkthrough 7: Hypothesis Testing\" in \"General Science\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Matter, Energy & Earth's Systems Concept Walkthrough 7: Hypothesis Testing\" (General Science, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Matter, Energy & Earth's Systems Concept Walkthrough 7: Hypothesis Testing\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Matter, Energy & Earth's Systems Concept Walkthrough 7: Hypothesis Testing\" (General Science, grade band 35)."
      },
      "external": {
        "sourceLessonId": "gen-science-35-u1-external-generated-cycle-7",
        "order": 7,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-35-u1-external-supp-seq-08",
      "title": "Matter, Energy & Earth's Systems Guided Practice Lab 8: Variable Control",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-35-u1-external-supp-seq-08-ia1",
          "type": "drag_and_drop",
          "title": "Matter, Energy & Earth's Systems Guided Practice Lab 8: Variable Control Learning Flow",
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
                "label": "Set a goal for Explain variable control using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Identify independent, dependent, and control variables.",
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
          "id": "gen-science-35-u1-external-supp-seq-08-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Matter, Energy & Earth's Systems Guided Practice Lab 8: Variable Control."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain variable control using age-appropriate vocabulary.",
          "Apply variable control in one guided General Science task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain variable control using age-appropriate vocabulary.",
        "Apply variable control in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-35-u1-external-supp-seq-08-chunk-intro",
          "title": "Variable Control Intro",
          "content": "Change one variable at a time to keep results clear.",
          "kind": "concept"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-08-chunk-practice",
          "title": "Guided Practice",
          "content": "Identify independent, dependent, and control variables.",
          "kind": "practice"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-08-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying variable control, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-08-chunk-recap",
          "title": "Quick Recap",
          "content": "Review variable control, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-35-u1-external-supp-seq-08-card-1",
          "front": "What is variable control?",
          "back": "It is a key General Science idea in Matter, Energy & Earth's Systems."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-08-card-2",
          "front": "How can I practice variable control?",
          "back": "Identify independent, dependent, and control variables."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-08-card-3",
          "front": "What should I review next?",
          "back": "Review variable control, then set one clear improvement target."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-08-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Matter, Energy & Earth's Systems Guided Practice Lab 8: Variable Control\" in \"General Science\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Matter, Energy & Earth's Systems Guided Practice Lab 8: Variable Control\" (General Science, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Matter, Energy & Earth's Systems Guided Practice Lab 8: Variable Control\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Matter, Energy & Earth's Systems Guided Practice Lab 8: Variable Control\" (General Science, grade band 35)."
      },
      "external": {
        "sourceLessonId": "gen-science-35-u1-external-generated-cycle-8",
        "order": 8,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-35-u1-external-supp-seq-09",
      "title": "Matter, Energy & Earth's Systems Checkpoint Quiz 9: Evidence Interpretation",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-35-u1-external-supp-seq-09-q1",
          "text": "Which option best summarizes Matter, Energy & Earth's Systems Checkpoint Quiz 9: Evidence Interpretation?",
          "skillId": "gen-science-35-u1-external-skill-matter-energy-earth-s-systems-checkpoint-quiz-9-evidence-interpretation-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain evidence interpretation using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A conclusion without evidence."
            },
            {
              "id": "c",
              "text": "A result that changes multiple variables at once."
            },
            {
              "id": "d",
              "text": "A claim that ignores the observed data."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-09-q2",
          "text": "Which response shows correct application of Matter, Energy & Earth's Systems Checkpoint Quiz 9: Evidence Interpretation?",
          "skillId": "gen-science-35-u1-external-skill-matter-energy-earth-s-systems-checkpoint-quiz-9-evidence-interpretation-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply evidence interpretation in one guided General Science task."
            },
            {
              "id": "b",
              "text": "Select a conclusion before reviewing results."
            },
            {
              "id": "c",
              "text": "Use unrelated facts that do not match the experiment."
            },
            {
              "id": "d",
              "text": "Treat one observation as proof without retesting."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-09-q3",
          "text": "Why is review important after learning Matter, Energy & Earth's Systems Checkpoint Quiz 9: Evidence Interpretation?",
          "skillId": "gen-science-35-u1-external-skill-matter-energy-earth-s-systems-checkpoint-quiz-9-evidence-interpretation-review",
          "options": [
            {
              "id": "a",
              "text": "Explain one result using evidence and science vocabulary."
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
          "id": "gen-science-35-u1-external-supp-seq-09-ia1",
          "type": "matching_pairs",
          "title": "Matter, Energy & Earth's Systems Checkpoint Quiz 9: Evidence Interpretation Error Match",
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
                "label": "I still mix up Explain evidence interpretation using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Matter, Energy & Earth's Systems Checkpoint Quiz 9: Evidence Interpretation in notes but not in timed checks."
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
          "id": "gen-science-35-u1-external-supp-seq-09-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Matter, Energy & Earth's Systems Checkpoint Quiz 9: Evidence Interpretation."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain evidence interpretation using age-appropriate vocabulary.",
        "Apply evidence interpretation in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-35-u1-external-supp-seq-09-chunk-intro",
          "title": "Evidence Interpretation Intro",
          "content": "Use evidence from results to support the conclusion.",
          "kind": "concept"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-09-chunk-practice",
          "title": "Guided Practice",
          "content": "Explain one result using evidence and science vocabulary.",
          "kind": "practice"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-09-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying evidence interpretation, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-09-chunk-recap",
          "title": "Quick Recap",
          "content": "Review evidence interpretation, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-35-u1-external-supp-seq-09-card-1",
          "front": "What is evidence interpretation?",
          "back": "It is a key General Science idea in Matter, Energy & Earth's Systems."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-09-card-2",
          "front": "How can I practice evidence interpretation?",
          "back": "Explain one result using evidence and science vocabulary."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-09-card-3",
          "front": "What should I review next?",
          "back": "Review evidence interpretation, then set one clear improvement target."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-09-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Matter, Energy & Earth's Systems Checkpoint Quiz 9: Evidence Interpretation\" in \"General Science\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Matter, Energy & Earth's Systems Checkpoint Quiz 9: Evidence Interpretation\" (General Science, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Matter, Energy & Earth's Systems Checkpoint Quiz 9: Evidence Interpretation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Matter, Energy & Earth's Systems Checkpoint Quiz 9: Evidence Interpretation\" (General Science, grade band 35)."
      },
      "external": {
        "sourceLessonId": "gen-science-35-u1-external-generated-cycle-9",
        "order": 9,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-35-u1-external-supp-seq-10",
      "title": "Matter, Energy & Earth's Systems Concept Walkthrough 10: Scientific Explanation",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gen-science-35-u1-external-supp-seq-10-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Matter, Energy & Earth's Systems Concept Walkthrough 10: Scientific Explanation."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain scientific explanation using age-appropriate vocabulary.",
        "Apply scientific explanation in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-35-u1-external-supp-seq-10-chunk-intro",
          "title": "Scientific Explanation Intro",
          "content": "Start with an observation and a testable question.",
          "kind": "concept"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-10-chunk-practice",
          "title": "Guided Practice",
          "content": "Run a mini investigation and record outcomes in a table.",
          "kind": "practice"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-10-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying scientific explanation, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-10-chunk-recap",
          "title": "Quick Recap",
          "content": "Review scientific explanation, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-35-u1-external-supp-seq-10-card-1",
          "front": "What is scientific explanation?",
          "back": "It is a key General Science idea in Matter, Energy & Earth's Systems."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-10-card-2",
          "front": "How can I practice scientific explanation?",
          "back": "Run a mini investigation and record outcomes in a table."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-10-card-3",
          "front": "What should I review next?",
          "back": "Review scientific explanation, then set one clear improvement target."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-10-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Matter, Energy & Earth's Systems Concept Walkthrough 10: Scientific Explanation\" in \"General Science\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Matter, Energy & Earth's Systems Concept Walkthrough 10: Scientific Explanation\" (General Science, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Matter, Energy & Earth's Systems Concept Walkthrough 10: Scientific Explanation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Matter, Energy & Earth's Systems Concept Walkthrough 10: Scientific Explanation\" (General Science, grade band 35)."
      },
      "external": {
        "sourceLessonId": "gen-science-35-u1-external-generated-cycle-10",
        "order": 10,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-35-u1-external-supp-seq-11",
      "title": "Matter, Energy & Earth's Systems Guided Practice Lab 11: Observation Skills",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-35-u1-external-supp-seq-11-ia1",
          "type": "drag_and_drop",
          "title": "Matter, Energy & Earth's Systems Guided Practice Lab 11: Observation Skills Learning Flow",
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
                "label": "Set a goal for Explain observation skills using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Identify independent, dependent, and control variables.",
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
          "id": "gen-science-35-u1-external-supp-seq-11-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Matter, Energy & Earth's Systems Guided Practice Lab 11: Observation Skills."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain observation skills using age-appropriate vocabulary.",
          "Apply observation skills in one guided General Science task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain observation skills using age-appropriate vocabulary.",
        "Apply observation skills in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-35-u1-external-supp-seq-11-chunk-intro",
          "title": "Observation Skills Intro",
          "content": "Change one variable at a time to keep results clear.",
          "kind": "concept"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-11-chunk-practice",
          "title": "Guided Practice",
          "content": "Identify independent, dependent, and control variables.",
          "kind": "practice"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-11-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying observation skills, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-11-chunk-recap",
          "title": "Quick Recap",
          "content": "Review observation skills, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-35-u1-external-supp-seq-11-card-1",
          "front": "What is observation skills?",
          "back": "It is a key General Science idea in Matter, Energy & Earth's Systems."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-11-card-2",
          "front": "How can I practice observation skills?",
          "back": "Identify independent, dependent, and control variables."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-11-card-3",
          "front": "What should I review next?",
          "back": "Review observation skills, then set one clear improvement target."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-11-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Matter, Energy & Earth's Systems Guided Practice Lab 11: Observation Skills\" in \"General Science\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Matter, Energy & Earth's Systems Guided Practice Lab 11: Observation Skills\" (General Science, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Matter, Energy & Earth's Systems Guided Practice Lab 11: Observation Skills\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Matter, Energy & Earth's Systems Guided Practice Lab 11: Observation Skills\" (General Science, grade band 35)."
      },
      "external": {
        "sourceLessonId": "gen-science-35-u1-external-generated-cycle-11",
        "order": 11,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-35-u1-external-supp-seq-12",
      "title": "Matter, Energy & Earth's Systems Checkpoint Quiz 12: Hypothesis Testing",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-35-u1-external-supp-seq-12-q1",
          "text": "Which option best summarizes Matter, Energy & Earth's Systems Checkpoint Quiz 12: Hypothesis Testing?",
          "skillId": "gen-science-35-u1-external-skill-matter-energy-earth-s-systems-checkpoint-quiz-12-hypothesis-testing-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain hypothesis testing using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A conclusion without evidence."
            },
            {
              "id": "c",
              "text": "A result that changes multiple variables at once."
            },
            {
              "id": "d",
              "text": "A claim that ignores the observed data."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-12-q2",
          "text": "Which response shows correct application of Matter, Energy & Earth's Systems Checkpoint Quiz 12: Hypothesis Testing?",
          "skillId": "gen-science-35-u1-external-skill-matter-energy-earth-s-systems-checkpoint-quiz-12-hypothesis-testing-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply hypothesis testing in one guided General Science task."
            },
            {
              "id": "b",
              "text": "Select a conclusion before reviewing results."
            },
            {
              "id": "c",
              "text": "Use unrelated facts that do not match the experiment."
            },
            {
              "id": "d",
              "text": "Treat one observation as proof without retesting."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-12-q3",
          "text": "Why is review important after learning Matter, Energy & Earth's Systems Checkpoint Quiz 12: Hypothesis Testing?",
          "skillId": "gen-science-35-u1-external-skill-matter-energy-earth-s-systems-checkpoint-quiz-12-hypothesis-testing-review",
          "options": [
            {
              "id": "a",
              "text": "Explain one result using evidence and science vocabulary."
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
          "id": "gen-science-35-u1-external-supp-seq-12-ia1",
          "type": "matching_pairs",
          "title": "Matter, Energy & Earth's Systems Checkpoint Quiz 12: Hypothesis Testing Error Match",
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
                "label": "I still mix up Explain hypothesis testing using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Matter, Energy & Earth's Systems Checkpoint Quiz 12: Hypothesis Testing in notes but not in timed checks."
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
          "id": "gen-science-35-u1-external-supp-seq-12-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Matter, Energy & Earth's Systems Checkpoint Quiz 12: Hypothesis Testing."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain hypothesis testing using age-appropriate vocabulary.",
        "Apply hypothesis testing in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-35-u1-external-supp-seq-12-chunk-intro",
          "title": "Hypothesis Testing Intro",
          "content": "Use evidence from results to support the conclusion.",
          "kind": "concept"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-12-chunk-practice",
          "title": "Guided Practice",
          "content": "Explain one result using evidence and science vocabulary.",
          "kind": "practice"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-12-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying hypothesis testing, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-12-chunk-recap",
          "title": "Quick Recap",
          "content": "Review hypothesis testing, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-35-u1-external-supp-seq-12-card-1",
          "front": "What is hypothesis testing?",
          "back": "It is a key General Science idea in Matter, Energy & Earth's Systems."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-12-card-2",
          "front": "How can I practice hypothesis testing?",
          "back": "Explain one result using evidence and science vocabulary."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-12-card-3",
          "front": "What should I review next?",
          "back": "Review hypothesis testing, then set one clear improvement target."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-12-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Matter, Energy & Earth's Systems Checkpoint Quiz 12: Hypothesis Testing\" in \"General Science\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Matter, Energy & Earth's Systems Checkpoint Quiz 12: Hypothesis Testing\" (General Science, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Matter, Energy & Earth's Systems Checkpoint Quiz 12: Hypothesis Testing\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Matter, Energy & Earth's Systems Checkpoint Quiz 12: Hypothesis Testing\" (General Science, grade band 35)."
      },
      "external": {
        "sourceLessonId": "gen-science-35-u1-external-generated-cycle-12",
        "order": 12,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-35-u1-external-supp-seq-13",
      "title": "Matter, Energy & Earth's Systems Concept Walkthrough 13: Variable Control",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gen-science-35-u1-external-supp-seq-13-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Matter, Energy & Earth's Systems Concept Walkthrough 13: Variable Control."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain variable control using age-appropriate vocabulary.",
        "Apply variable control in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-35-u1-external-supp-seq-13-chunk-intro",
          "title": "Variable Control Intro",
          "content": "Start with an observation and a testable question.",
          "kind": "concept"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-13-chunk-practice",
          "title": "Guided Practice",
          "content": "Run a mini investigation and record outcomes in a table.",
          "kind": "practice"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-13-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying variable control, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-13-chunk-recap",
          "title": "Quick Recap",
          "content": "Review variable control, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-35-u1-external-supp-seq-13-card-1",
          "front": "What is variable control?",
          "back": "It is a key General Science idea in Matter, Energy & Earth's Systems."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-13-card-2",
          "front": "How can I practice variable control?",
          "back": "Run a mini investigation and record outcomes in a table."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-13-card-3",
          "front": "What should I review next?",
          "back": "Review variable control, then set one clear improvement target."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-13-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Matter, Energy & Earth's Systems Concept Walkthrough 13: Variable Control\" in \"General Science\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Matter, Energy & Earth's Systems Concept Walkthrough 13: Variable Control\" (General Science, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Matter, Energy & Earth's Systems Concept Walkthrough 13: Variable Control\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Matter, Energy & Earth's Systems Concept Walkthrough 13: Variable Control\" (General Science, grade band 35)."
      },
      "external": {
        "sourceLessonId": "gen-science-35-u1-external-generated-cycle-13",
        "order": 13,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-35-u1-external-supp-seq-14",
      "title": "Matter, Energy & Earth's Systems Guided Practice Lab 14: Evidence Interpretation",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-35-u1-external-supp-seq-14-ia1",
          "type": "drag_and_drop",
          "title": "Matter, Energy & Earth's Systems Guided Practice Lab 14: Evidence Interpretation Learning Flow",
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
                "label": "Set a goal for Explain evidence interpretation using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Identify independent, dependent, and control variables.",
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
          "id": "gen-science-35-u1-external-supp-seq-14-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Matter, Energy & Earth's Systems Guided Practice Lab 14: Evidence Interpretation."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain evidence interpretation using age-appropriate vocabulary.",
          "Apply evidence interpretation in one guided General Science task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain evidence interpretation using age-appropriate vocabulary.",
        "Apply evidence interpretation in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-35-u1-external-supp-seq-14-chunk-intro",
          "title": "Evidence Interpretation Intro",
          "content": "Change one variable at a time to keep results clear.",
          "kind": "concept"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-14-chunk-practice",
          "title": "Guided Practice",
          "content": "Identify independent, dependent, and control variables.",
          "kind": "practice"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-14-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying evidence interpretation, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-14-chunk-recap",
          "title": "Quick Recap",
          "content": "Review evidence interpretation, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-35-u1-external-supp-seq-14-card-1",
          "front": "What is evidence interpretation?",
          "back": "It is a key General Science idea in Matter, Energy & Earth's Systems."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-14-card-2",
          "front": "How can I practice evidence interpretation?",
          "back": "Identify independent, dependent, and control variables."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-14-card-3",
          "front": "What should I review next?",
          "back": "Review evidence interpretation, then set one clear improvement target."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-14-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Matter, Energy & Earth's Systems Guided Practice Lab 14: Evidence Interpretation\" in \"General Science\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Matter, Energy & Earth's Systems Guided Practice Lab 14: Evidence Interpretation\" (General Science, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Matter, Energy & Earth's Systems Guided Practice Lab 14: Evidence Interpretation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Matter, Energy & Earth's Systems Guided Practice Lab 14: Evidence Interpretation\" (General Science, grade band 35)."
      },
      "external": {
        "sourceLessonId": "gen-science-35-u1-external-generated-cycle-14",
        "order": 14,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-35-u1-external-supp-seq-15",
      "title": "Matter, Energy & Earth's Systems Checkpoint Quiz 15: Scientific Explanation",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-35-u1-external-supp-seq-15-q1",
          "text": "Which option best summarizes Matter, Energy & Earth's Systems Checkpoint Quiz 15: Scientific Explanation?",
          "skillId": "gen-science-35-u1-external-skill-matter-energy-earth-s-systems-checkpoint-quiz-15-scientific-explanation-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain scientific explanation using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A conclusion without evidence."
            },
            {
              "id": "c",
              "text": "A result that changes multiple variables at once."
            },
            {
              "id": "d",
              "text": "A claim that ignores the observed data."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-15-q2",
          "text": "Which response shows correct application of Matter, Energy & Earth's Systems Checkpoint Quiz 15: Scientific Explanation?",
          "skillId": "gen-science-35-u1-external-skill-matter-energy-earth-s-systems-checkpoint-quiz-15-scientific-explanation-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply scientific explanation in one guided General Science task."
            },
            {
              "id": "b",
              "text": "Select a conclusion before reviewing results."
            },
            {
              "id": "c",
              "text": "Use unrelated facts that do not match the experiment."
            },
            {
              "id": "d",
              "text": "Treat one observation as proof without retesting."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-15-q3",
          "text": "Why is review important after learning Matter, Energy & Earth's Systems Checkpoint Quiz 15: Scientific Explanation?",
          "skillId": "gen-science-35-u1-external-skill-matter-energy-earth-s-systems-checkpoint-quiz-15-scientific-explanation-review",
          "options": [
            {
              "id": "a",
              "text": "Explain one result using evidence and science vocabulary."
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
          "id": "gen-science-35-u1-external-supp-seq-15-ia1",
          "type": "matching_pairs",
          "title": "Matter, Energy & Earth's Systems Checkpoint Quiz 15: Scientific Explanation Error Match",
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
                "label": "I still mix up Explain scientific explanation using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Matter, Energy & Earth's Systems Checkpoint Quiz 15: Scientific Explanation in notes but not in timed checks."
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
          "id": "gen-science-35-u1-external-supp-seq-15-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Matter, Energy & Earth's Systems Checkpoint Quiz 15: Scientific Explanation."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain scientific explanation using age-appropriate vocabulary.",
        "Apply scientific explanation in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-35-u1-external-supp-seq-15-chunk-intro",
          "title": "Scientific Explanation Intro",
          "content": "Use evidence from results to support the conclusion.",
          "kind": "concept"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-15-chunk-practice",
          "title": "Guided Practice",
          "content": "Explain one result using evidence and science vocabulary.",
          "kind": "practice"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-15-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying scientific explanation, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-15-chunk-recap",
          "title": "Quick Recap",
          "content": "Review scientific explanation, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-35-u1-external-supp-seq-15-card-1",
          "front": "What is scientific explanation?",
          "back": "It is a key General Science idea in Matter, Energy & Earth's Systems."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-15-card-2",
          "front": "How can I practice scientific explanation?",
          "back": "Explain one result using evidence and science vocabulary."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-15-card-3",
          "front": "What should I review next?",
          "back": "Review scientific explanation, then set one clear improvement target."
        },
        {
          "id": "gen-science-35-u1-external-supp-seq-15-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Matter, Energy & Earth's Systems Checkpoint Quiz 15: Scientific Explanation\" in \"General Science\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Matter, Energy & Earth's Systems Checkpoint Quiz 15: Scientific Explanation\" (General Science, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Matter, Energy & Earth's Systems Checkpoint Quiz 15: Scientific Explanation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Matter, Energy & Earth's Systems Checkpoint Quiz 15: Scientific Explanation\" (General Science, grade band 35)."
      },
      "external": {
        "sourceLessonId": "gen-science-35-u1-external-generated-cycle-15",
        "order": 15,
        "generatedSupplement": true
      }
    }
  ]
};
