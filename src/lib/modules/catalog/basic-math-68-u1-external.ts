import type { LearningModule } from "@/lib/modules/types";

export const BasicMath68U1ExternalModule: LearningModule = {
  "id": "basic-math-68-u1-external",
  "title": "Pre-Algebra: Expressions, Equations & Ratios",
  "description": "Mathematics unit for 6–8 imported from external JSX curriculum.",
  "subject": "Mathematics",
  "tags": [
    "external-ai",
    "curriculum-import",
    "grade-68"
  ],
  "minAge": 11,
  "maxAge": 14,
  "moduleVersion": "external-1.0.0",
  "version": "external-1.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Explain What is a Variable?.",
    "Explain Expressions vs. Equations.",
    "Explain Solving One-Step Equations.",
    "Build baseline confidence in Pre-Algebra: Expressions, Equations & Ratios.",
    "Apply one core Mathematics strategy for 68.",
    "Explain multi-step strategy using age-appropriate vocabulary.",
    "Apply multi-step strategy in one guided Mathematics task.",
    "Identify one correction step for the next attempt."
  ],
  "gradeBand": "68",
  "metadata": {
    "source": "../External_AI_Agents/lesson_platform (1).jsx",
    "sourceUnitId": "basic_math-68-u1",
    "sourceUnitIdCanonical": "basic-math-68-u1",
    "importedAt": "2026-02-24T03:43:31.748Z"
  },
  "external": {
    "unitOrder": 8,
    "estimatedHours": null,
    "prerequisites": []
  },
  "lessons": [
    {
      "id": "basic-math-68-u1-1",
      "title": "Variables, Expressions & Equations (68)",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "basic-math-68-u1-1-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Variables, Expressions & Equations (68)."
        }
      ],
      "objectives": [
        "Explain What is a Variable?.",
        "Explain Expressions vs. Equations.",
        "Explain Solving One-Step Equations."
      ],
      "chunks": [
        {
          "id": "basic-math-68-u1-1-chunk-1",
          "title": "What is a Variable?",
          "content": "A VARIABLE is a symbol (usually a letter) that represents an UNKNOWN or CHANGING value.\n\nx, y, n, a — these are all variables.\n\nExample: 'A store sells apples. If each apple costs $2, the total cost for n apples is 2n dollars.' Here, n is a variable that can be 1, 5, 10, or any number."
        },
        {
          "id": "basic-math-68-u1-1-chunk-2",
          "title": "Expressions vs. Equations",
          "content": "EXPRESSION: A mathematical phrase with numbers, variables, and operations — but NO equals sign.\nExamples: 3x + 5,  2n − 7,  4(a + 2)\n\nEQUATION: A statement that two expressions are EQUAL — has an equals sign.\nExamples: 3x + 5 = 20,  2n − 7 = 9\n\nKey: Equations can be solved; expressions can only be simplified or evaluated."
        },
        {
          "id": "basic-math-68-u1-1-chunk-3",
          "title": "Solving One-Step Equations",
          "content": "Goal: Isolate the variable (get it alone on one side).\n\nAddition equation: x + 7 = 15\n→ Subtract 7 from BOTH sides: x = 8 ✓\n\nMultiplication equation: 4n = 28\n→ Divide BOTH sides by 4: n = 7 ✓\n\nThe balance rule: Whatever you do to one side, do the SAME to the other side!"
        },
        {
          "id": "basic-math-68-u1-1-chunk-4",
          "title": "Solving Two-Step Equations",
          "content": "Two-step equations require TWO operations.\n\n2x + 3 = 11\nStep 1: Subtract 3 from both sides → 2x = 8\nStep 2: Divide both sides by 2 → x = 4\n\nCheck your answer: 2(4) + 3 = 8 + 3 = 11 ✓\n\nALWAYS check by substituting your answer back in!"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-68-u1-1-card-1",
          "front": "Variable",
          "back": "A letter representing an unknown or changing value (x, y, n)"
        },
        {
          "id": "basic-math-68-u1-1-card-2",
          "front": "Expression vs. Equation",
          "back": "Expression: no equals sign (3x+5). Equation: has equals sign (3x+5=20)"
        },
        {
          "id": "basic-math-68-u1-1-card-3",
          "front": "Solve: x + 9 = 17",
          "back": "x = 8 (subtract 9 from both sides)"
        },
        {
          "id": "basic-math-68-u1-1-card-4",
          "front": "Solve: 3n = 21",
          "back": "n = 7 (divide both sides by 3)"
        },
        {
          "id": "basic-math-68-u1-1-card-5",
          "front": "Solve: 2x + 5 = 13",
          "back": "2x = 8 → x = 4"
        },
        {
          "id": "basic-math-68-u1-1-card-6",
          "front": "Balance Rule",
          "back": "Whatever you do to one side of an equation, do to the OTHER side"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Animated balance scale math show. A friendly robot presents equations as balance scales. When a value is added or subtracted from one side, the same happens to the other to maintain balance. 2x+3=11 solved step by step with each operation shown visually on the scale. Solution glows green when verified. Clean, modern math classroom aesthetic. Ages 11-14. Duration: 75 seconds.",
        "seedanceAnimation": "Lottie animation: Balance scale with equation elements. Scale tips when unbalanced, levels perfectly when solved. Variables shown as mystery boxes. Solution box opens to reveal answer. 12-second animation.",
        "lessonImage": "Create a clean educational illustration for \"Variables, Expressions & Equations (68)\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Variables, Expressions & Equations (68)\" (Mathematics, grade band 68)."
      },
      "localized": {
        "title": {
          "en": "Variables, Expressions & Equations"
        },
        "concept": {
          "en": "Variables, Expressions & Equations"
        }
      },
      "external": {
        "sourceLessonId": "basic_math-68-u1-1",
        "order": 1
      }
    },
    {
      "id": "basic-math-68-u1-external-supp-interactive",
      "title": "Pre-Algebra: Expressions, Equations & Ratios Supplemental Practice",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-68-u1-external-supp-interactive-ia1",
          "type": "drag_and_drop",
          "title": "Pre-Algebra: Expressions, Equations & Ratios Supplemental Practice Learning Flow",
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
                "label": "Set a goal for Build baseline confidence in Pre-Algebra: Expressions, Equations & Ratios..",
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
          "id": "basic-math-68-u1-external-supp-interactive-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Pre-Algebra: Expressions, Equations & Ratios Supplemental Practice."
        }
      ],
      "metadata": {
        "prompts": [
          "Build baseline confidence in Pre-Algebra: Expressions, Equations & Ratios.",
          "Apply one core Mathematics strategy for 68."
        ]
      },
      "objectives": [
        "Build baseline confidence in Pre-Algebra: Expressions, Equations & Ratios.",
        "Apply one core Mathematics strategy for 68."
      ],
      "chunks": [
        {
          "id": "basic-math-68-u1-external-supp-interactive-chunk-intro",
          "title": "Pre-Algebra: Expressions, Equations & Ratios Supplemental Practice Overview",
          "content": "Reinforce core Mathematics concepts in Pre-Algebra: Expressions, Equations & Ratios.",
          "kind": "concept"
        },
        {
          "id": "basic-math-68-u1-external-supp-interactive-chunk-recap",
          "title": "Quick Recap",
          "content": "Summarize one key idea and plan one next step.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-68-u1-external-supp-interactive-card-1",
          "front": "What is one key idea in Pre-Algebra: Expressions, Equations & Ratios?",
          "back": "Build baseline confidence in Pre-Algebra: Expressions, Equations & Ratios."
        },
        {
          "id": "basic-math-68-u1-external-supp-interactive-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core Mathematics strategy for 68."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Pre-Algebra: Expressions, Equations & Ratios Supplemental Practice\" in \"Mathematics\" for grade band \"68\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Pre-Algebra: Expressions, Equations & Ratios Supplemental Practice\" (Mathematics, grade band 68).",
        "lessonImage": "Create a clean educational illustration for \"Pre-Algebra: Expressions, Equations & Ratios Supplemental Practice\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Pre-Algebra: Expressions, Equations & Ratios Supplemental Practice\" (Mathematics, grade band 68)."
      },
      "external": {
        "sourceLessonId": "basic-math-68-u1-external-supp-interactive",
        "order": 2,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-68-u1-external-supp-quiz",
      "title": "Pre-Algebra: Expressions, Equations & Ratios Supplemental Check",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-68-u1-external-supp-quiz-q1",
          "text": "Which option best summarizes Pre-Algebra: Expressions, Equations & Ratios Supplemental Check?",
          "skillId": "basic-math-68-u1-external-skill-pre-algebra-expressions-equations-ratios-supplemental-check-summary",
          "options": [
            {
              "id": "a",
              "text": "Build baseline confidence in Pre-Algebra: Expressions, Equations & Ratios."
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
          "id": "basic-math-68-u1-external-supp-quiz-q2",
          "text": "Which response shows correct application of Pre-Algebra: Expressions, Equations & Ratios Supplemental Check?",
          "skillId": "basic-math-68-u1-external-skill-pre-algebra-expressions-equations-ratios-supplemental-check-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply one core Mathematics strategy for 68."
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
          "id": "basic-math-68-u1-external-supp-quiz-q3",
          "text": "Why is review important after learning Pre-Algebra: Expressions, Equations & Ratios Supplemental Check?",
          "skillId": "basic-math-68-u1-external-skill-pre-algebra-expressions-equations-ratios-supplemental-check-review",
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
          "id": "basic-math-68-u1-external-supp-quiz-ia1",
          "type": "matching_pairs",
          "title": "Pre-Algebra: Expressions, Equations & Ratios Supplemental Check Error Match",
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
                "label": "I still mix up Build baseline confidence in Pre-Algebra: Expressions, Equations & Ratios.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Pre-Algebra: Expressions, Equations & Ratios Supplemental Check in notes but not in timed checks."
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
          "id": "basic-math-68-u1-external-supp-quiz-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Pre-Algebra: Expressions, Equations & Ratios Supplemental Check."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Build baseline confidence in Pre-Algebra: Expressions, Equations & Ratios.",
        "Apply one core Mathematics strategy for 68."
      ],
      "chunks": [
        {
          "id": "basic-math-68-u1-external-supp-quiz-chunk-intro",
          "title": "Pre-Algebra: Expressions, Equations & Ratios Supplemental Check Overview",
          "content": "Reinforce core Mathematics concepts in Pre-Algebra: Expressions, Equations & Ratios.",
          "kind": "concept"
        },
        {
          "id": "basic-math-68-u1-external-supp-quiz-chunk-recap",
          "title": "Quick Recap",
          "content": "Summarize one key idea and plan one next step.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-68-u1-external-supp-quiz-card-1",
          "front": "What is one key idea in Pre-Algebra: Expressions, Equations & Ratios?",
          "back": "Build baseline confidence in Pre-Algebra: Expressions, Equations & Ratios."
        },
        {
          "id": "basic-math-68-u1-external-supp-quiz-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core Mathematics strategy for 68."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Pre-Algebra: Expressions, Equations & Ratios Supplemental Check\" in \"Mathematics\" for grade band \"68\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Pre-Algebra: Expressions, Equations & Ratios Supplemental Check\" (Mathematics, grade band 68).",
        "lessonImage": "Create a clean educational illustration for \"Pre-Algebra: Expressions, Equations & Ratios Supplemental Check\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Pre-Algebra: Expressions, Equations & Ratios Supplemental Check\" (Mathematics, grade band 68)."
      },
      "external": {
        "sourceLessonId": "basic-math-68-u1-external-supp-quiz",
        "order": 3,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-68-u1-external-supp-seq-04",
      "title": "Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 4: Multi Step Strategy",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-68-u1-external-supp-seq-04-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 4: Multi Step Strategy."
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
          "id": "basic-math-68-u1-external-supp-seq-04-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "Model the problem with a visual or equation before solving.",
          "kind": "concept"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-04-chunk-practice",
          "title": "Guided Practice",
          "content": "Solve one guided item, then one independent item with the same pattern.",
          "kind": "practice"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-04-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying multi-step strategy, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-04-chunk-recap",
          "title": "Quick Recap",
          "content": "Review multi-step strategy, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-68-u1-external-supp-seq-04-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Pre-Algebra: Expressions, Equations & Ratios."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-04-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-04-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-04-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 4: Multi Step Strategy\" in \"Mathematics\" for grade band \"68\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 4: Multi Step Strategy\" (Mathematics, grade band 68).",
        "lessonImage": "Create a clean educational illustration for \"Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 4: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 4: Multi Step Strategy\" (Mathematics, grade band 68)."
      },
      "external": {
        "sourceLessonId": "basic-math-68-u1-external-generated-cycle-4",
        "order": 4,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-68-u1-external-supp-seq-05",
      "title": "Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 5: Error Check Routines",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-68-u1-external-supp-seq-05-ia1",
          "type": "drag_and_drop",
          "title": "Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 5: Error Check Routines Learning Flow",
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
          "id": "basic-math-68-u1-external-supp-seq-05-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 5: Error Check Routines."
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
          "id": "basic-math-68-u1-external-supp-seq-05-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "Name the operation and explain why it fits.",
          "kind": "concept"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-05-chunk-practice",
          "title": "Guided Practice",
          "content": "Use a short checklist: plan, solve, verify.",
          "kind": "practice"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-05-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying error-check routines, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-05-chunk-recap",
          "title": "Quick Recap",
          "content": "Review error-check routines, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-68-u1-external-supp-seq-05-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Pre-Algebra: Expressions, Equations & Ratios."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-05-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-05-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-05-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 5: Error Check Routines\" in \"Mathematics\" for grade band \"68\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 5: Error Check Routines\" (Mathematics, grade band 68).",
        "lessonImage": "Create a clean educational illustration for \"Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 5: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 5: Error Check Routines\" (Mathematics, grade band 68)."
      },
      "external": {
        "sourceLessonId": "basic-math-68-u1-external-generated-cycle-5",
        "order": 5,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-68-u1-external-supp-seq-06",
      "title": "Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 6: Number Sense",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-68-u1-external-supp-seq-06-q1",
          "text": "Which option best summarizes Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-68-u1-external-skill-pre-algebra-expressions-equations-ratios-checkpoint-quiz-6-number-sense-summary",
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
          "id": "basic-math-68-u1-external-supp-seq-06-q2",
          "text": "Which response shows correct application of Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-68-u1-external-skill-pre-algebra-expressions-equations-ratios-checkpoint-quiz-6-number-sense-apply",
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
          "id": "basic-math-68-u1-external-supp-seq-06-q3",
          "text": "Why is review important after learning Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-68-u1-external-skill-pre-algebra-expressions-equations-ratios-checkpoint-quiz-6-number-sense-review",
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
          "id": "basic-math-68-u1-external-supp-seq-06-ia1",
          "type": "matching_pairs",
          "title": "Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 6: Number Sense Error Match",
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
                "label": "I understand Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 6: Number Sense in notes but not in timed checks."
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
          "id": "basic-math-68-u1-external-supp-seq-06-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 6: Number Sense."
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
          "id": "basic-math-68-u1-external-supp-seq-06-chunk-intro",
          "title": "Number Sense Intro",
          "content": "Check units, signs, and reasonableness before finalizing.",
          "kind": "concept"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-06-chunk-practice",
          "title": "Guided Practice",
          "content": "Compare two strategies and choose the more reliable one.",
          "kind": "practice"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-06-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying number sense, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-06-chunk-recap",
          "title": "Quick Recap",
          "content": "Review number sense, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-68-u1-external-supp-seq-06-card-1",
          "front": "What is number sense?",
          "back": "It is a key Mathematics idea in Pre-Algebra: Expressions, Equations & Ratios."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-06-card-2",
          "front": "How can I practice number sense?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-06-card-3",
          "front": "What should I review next?",
          "back": "Review number sense, then set one clear improvement target."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-06-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 6: Number Sense\" in \"Mathematics\" for grade band \"68\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 6: Number Sense\" (Mathematics, grade band 68).",
        "lessonImage": "Create a clean educational illustration for \"Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 6: Number Sense\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 6: Number Sense\" (Mathematics, grade band 68)."
      },
      "external": {
        "sourceLessonId": "basic-math-68-u1-external-generated-cycle-6",
        "order": 6,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-68-u1-external-supp-seq-07",
      "title": "Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 7: Equation Setup",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-68-u1-external-supp-seq-07-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 7: Equation Setup."
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
          "id": "basic-math-68-u1-external-supp-seq-07-chunk-intro",
          "title": "Equation Setup Intro",
          "content": "Model the problem with a visual or equation before solving.",
          "kind": "concept"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-07-chunk-practice",
          "title": "Guided Practice",
          "content": "Solve one guided item, then one independent item with the same pattern.",
          "kind": "practice"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-07-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying equation setup, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-07-chunk-recap",
          "title": "Quick Recap",
          "content": "Review equation setup, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-68-u1-external-supp-seq-07-card-1",
          "front": "What is equation setup?",
          "back": "It is a key Mathematics idea in Pre-Algebra: Expressions, Equations & Ratios."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-07-card-2",
          "front": "How can I practice equation setup?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-07-card-3",
          "front": "What should I review next?",
          "back": "Review equation setup, then set one clear improvement target."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-07-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 7: Equation Setup\" in \"Mathematics\" for grade band \"68\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 7: Equation Setup\" (Mathematics, grade band 68).",
        "lessonImage": "Create a clean educational illustration for \"Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 7: Equation Setup\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 7: Equation Setup\" (Mathematics, grade band 68)."
      },
      "external": {
        "sourceLessonId": "basic-math-68-u1-external-generated-cycle-7",
        "order": 7,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-68-u1-external-supp-seq-08",
      "title": "Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 8: Fraction Reasoning",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-68-u1-external-supp-seq-08-ia1",
          "type": "drag_and_drop",
          "title": "Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 8: Fraction Reasoning Learning Flow",
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
          "id": "basic-math-68-u1-external-supp-seq-08-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 8: Fraction Reasoning."
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
          "id": "basic-math-68-u1-external-supp-seq-08-chunk-intro",
          "title": "Fraction Reasoning Intro",
          "content": "Name the operation and explain why it fits.",
          "kind": "concept"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-08-chunk-practice",
          "title": "Guided Practice",
          "content": "Use a short checklist: plan, solve, verify.",
          "kind": "practice"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-08-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying fraction reasoning, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-08-chunk-recap",
          "title": "Quick Recap",
          "content": "Review fraction reasoning, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-68-u1-external-supp-seq-08-card-1",
          "front": "What is fraction reasoning?",
          "back": "It is a key Mathematics idea in Pre-Algebra: Expressions, Equations & Ratios."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-08-card-2",
          "front": "How can I practice fraction reasoning?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-08-card-3",
          "front": "What should I review next?",
          "back": "Review fraction reasoning, then set one clear improvement target."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-08-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 8: Fraction Reasoning\" in \"Mathematics\" for grade band \"68\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 8: Fraction Reasoning\" (Mathematics, grade band 68).",
        "lessonImage": "Create a clean educational illustration for \"Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 8: Fraction Reasoning\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 8: Fraction Reasoning\" (Mathematics, grade band 68)."
      },
      "external": {
        "sourceLessonId": "basic-math-68-u1-external-generated-cycle-8",
        "order": 8,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-68-u1-external-supp-seq-09",
      "title": "Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 9: Multi Step Strategy",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-68-u1-external-supp-seq-09-q1",
          "text": "Which option best summarizes Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-68-u1-external-skill-pre-algebra-expressions-equations-ratios-checkpoint-quiz-9-multi-step-strategy-summary",
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
          "id": "basic-math-68-u1-external-supp-seq-09-q2",
          "text": "Which response shows correct application of Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-68-u1-external-skill-pre-algebra-expressions-equations-ratios-checkpoint-quiz-9-multi-step-strategy-apply",
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
          "id": "basic-math-68-u1-external-supp-seq-09-q3",
          "text": "Why is review important after learning Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-68-u1-external-skill-pre-algebra-expressions-equations-ratios-checkpoint-quiz-9-multi-step-strategy-review",
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
          "id": "basic-math-68-u1-external-supp-seq-09-ia1",
          "type": "matching_pairs",
          "title": "Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 9: Multi Step Strategy Error Match",
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
                "label": "I understand Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 9: Multi Step Strategy in notes but not in timed checks."
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
          "id": "basic-math-68-u1-external-supp-seq-09-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 9: Multi Step Strategy."
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
          "id": "basic-math-68-u1-external-supp-seq-09-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "Check units, signs, and reasonableness before finalizing.",
          "kind": "concept"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-09-chunk-practice",
          "title": "Guided Practice",
          "content": "Compare two strategies and choose the more reliable one.",
          "kind": "practice"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-09-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying multi-step strategy, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-09-chunk-recap",
          "title": "Quick Recap",
          "content": "Review multi-step strategy, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-68-u1-external-supp-seq-09-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Pre-Algebra: Expressions, Equations & Ratios."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-09-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-09-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-09-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 9: Multi Step Strategy\" in \"Mathematics\" for grade band \"68\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 9: Multi Step Strategy\" (Mathematics, grade band 68).",
        "lessonImage": "Create a clean educational illustration for \"Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 9: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 9: Multi Step Strategy\" (Mathematics, grade band 68)."
      },
      "external": {
        "sourceLessonId": "basic-math-68-u1-external-generated-cycle-9",
        "order": 9,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-68-u1-external-supp-seq-10",
      "title": "Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 10: Error Check Routines",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-68-u1-external-supp-seq-10-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 10: Error Check Routines."
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
          "id": "basic-math-68-u1-external-supp-seq-10-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "Model the problem with a visual or equation before solving.",
          "kind": "concept"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-10-chunk-practice",
          "title": "Guided Practice",
          "content": "Solve one guided item, then one independent item with the same pattern.",
          "kind": "practice"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-10-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying error-check routines, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-10-chunk-recap",
          "title": "Quick Recap",
          "content": "Review error-check routines, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-68-u1-external-supp-seq-10-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Pre-Algebra: Expressions, Equations & Ratios."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-10-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-10-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-10-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 10: Error Check Routines\" in \"Mathematics\" for grade band \"68\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 10: Error Check Routines\" (Mathematics, grade band 68).",
        "lessonImage": "Create a clean educational illustration for \"Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 10: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 10: Error Check Routines\" (Mathematics, grade band 68)."
      },
      "external": {
        "sourceLessonId": "basic-math-68-u1-external-generated-cycle-10",
        "order": 10,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-68-u1-external-supp-seq-11",
      "title": "Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 11: Number Sense",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-68-u1-external-supp-seq-11-ia1",
          "type": "drag_and_drop",
          "title": "Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 11: Number Sense Learning Flow",
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
          "id": "basic-math-68-u1-external-supp-seq-11-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 11: Number Sense."
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
          "id": "basic-math-68-u1-external-supp-seq-11-chunk-intro",
          "title": "Number Sense Intro",
          "content": "Name the operation and explain why it fits.",
          "kind": "concept"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-11-chunk-practice",
          "title": "Guided Practice",
          "content": "Use a short checklist: plan, solve, verify.",
          "kind": "practice"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-11-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying number sense, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-11-chunk-recap",
          "title": "Quick Recap",
          "content": "Review number sense, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-68-u1-external-supp-seq-11-card-1",
          "front": "What is number sense?",
          "back": "It is a key Mathematics idea in Pre-Algebra: Expressions, Equations & Ratios."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-11-card-2",
          "front": "How can I practice number sense?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-11-card-3",
          "front": "What should I review next?",
          "back": "Review number sense, then set one clear improvement target."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-11-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 11: Number Sense\" in \"Mathematics\" for grade band \"68\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 11: Number Sense\" (Mathematics, grade band 68).",
        "lessonImage": "Create a clean educational illustration for \"Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 11: Number Sense\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 11: Number Sense\" (Mathematics, grade band 68)."
      },
      "external": {
        "sourceLessonId": "basic-math-68-u1-external-generated-cycle-11",
        "order": 11,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-68-u1-external-supp-seq-12",
      "title": "Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 12: Equation Setup",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-68-u1-external-supp-seq-12-q1",
          "text": "Which option best summarizes Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-68-u1-external-skill-pre-algebra-expressions-equations-ratios-checkpoint-quiz-12-equation-setup-summary",
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
          "id": "basic-math-68-u1-external-supp-seq-12-q2",
          "text": "Which response shows correct application of Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-68-u1-external-skill-pre-algebra-expressions-equations-ratios-checkpoint-quiz-12-equation-setup-apply",
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
          "id": "basic-math-68-u1-external-supp-seq-12-q3",
          "text": "Why is review important after learning Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-68-u1-external-skill-pre-algebra-expressions-equations-ratios-checkpoint-quiz-12-equation-setup-review",
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
          "id": "basic-math-68-u1-external-supp-seq-12-ia1",
          "type": "matching_pairs",
          "title": "Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 12: Equation Setup Error Match",
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
                "label": "I understand Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 12: Equation Setup in notes but not in timed checks."
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
          "id": "basic-math-68-u1-external-supp-seq-12-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 12: Equation Setup."
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
          "id": "basic-math-68-u1-external-supp-seq-12-chunk-intro",
          "title": "Equation Setup Intro",
          "content": "Check units, signs, and reasonableness before finalizing.",
          "kind": "concept"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-12-chunk-practice",
          "title": "Guided Practice",
          "content": "Compare two strategies and choose the more reliable one.",
          "kind": "practice"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-12-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying equation setup, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-12-chunk-recap",
          "title": "Quick Recap",
          "content": "Review equation setup, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-68-u1-external-supp-seq-12-card-1",
          "front": "What is equation setup?",
          "back": "It is a key Mathematics idea in Pre-Algebra: Expressions, Equations & Ratios."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-12-card-2",
          "front": "How can I practice equation setup?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-12-card-3",
          "front": "What should I review next?",
          "back": "Review equation setup, then set one clear improvement target."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-12-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 12: Equation Setup\" in \"Mathematics\" for grade band \"68\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 12: Equation Setup\" (Mathematics, grade band 68).",
        "lessonImage": "Create a clean educational illustration for \"Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 12: Equation Setup\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 12: Equation Setup\" (Mathematics, grade band 68)."
      },
      "external": {
        "sourceLessonId": "basic-math-68-u1-external-generated-cycle-12",
        "order": 12,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-68-u1-external-supp-seq-13",
      "title": "Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 13: Fraction Reasoning",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-68-u1-external-supp-seq-13-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 13: Fraction Reasoning."
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
          "id": "basic-math-68-u1-external-supp-seq-13-chunk-intro",
          "title": "Fraction Reasoning Intro",
          "content": "Model the problem with a visual or equation before solving.",
          "kind": "concept"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-13-chunk-practice",
          "title": "Guided Practice",
          "content": "Solve one guided item, then one independent item with the same pattern.",
          "kind": "practice"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-13-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying fraction reasoning, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-13-chunk-recap",
          "title": "Quick Recap",
          "content": "Review fraction reasoning, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-68-u1-external-supp-seq-13-card-1",
          "front": "What is fraction reasoning?",
          "back": "It is a key Mathematics idea in Pre-Algebra: Expressions, Equations & Ratios."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-13-card-2",
          "front": "How can I practice fraction reasoning?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-13-card-3",
          "front": "What should I review next?",
          "back": "Review fraction reasoning, then set one clear improvement target."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-13-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 13: Fraction Reasoning\" in \"Mathematics\" for grade band \"68\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 13: Fraction Reasoning\" (Mathematics, grade band 68).",
        "lessonImage": "Create a clean educational illustration for \"Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 13: Fraction Reasoning\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Pre-Algebra: Expressions, Equations & Ratios Concept Walkthrough 13: Fraction Reasoning\" (Mathematics, grade band 68)."
      },
      "external": {
        "sourceLessonId": "basic-math-68-u1-external-generated-cycle-13",
        "order": 13,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-68-u1-external-supp-seq-14",
      "title": "Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 14: Multi Step Strategy",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-68-u1-external-supp-seq-14-ia1",
          "type": "drag_and_drop",
          "title": "Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 14: Multi Step Strategy Learning Flow",
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
          "id": "basic-math-68-u1-external-supp-seq-14-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 14: Multi Step Strategy."
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
          "id": "basic-math-68-u1-external-supp-seq-14-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "Name the operation and explain why it fits.",
          "kind": "concept"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-14-chunk-practice",
          "title": "Guided Practice",
          "content": "Use a short checklist: plan, solve, verify.",
          "kind": "practice"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-14-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying multi-step strategy, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-14-chunk-recap",
          "title": "Quick Recap",
          "content": "Review multi-step strategy, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-68-u1-external-supp-seq-14-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Pre-Algebra: Expressions, Equations & Ratios."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-14-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-14-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-14-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 14: Multi Step Strategy\" in \"Mathematics\" for grade band \"68\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 14: Multi Step Strategy\" (Mathematics, grade band 68).",
        "lessonImage": "Create a clean educational illustration for \"Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 14: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Pre-Algebra: Expressions, Equations & Ratios Guided Practice Lab 14: Multi Step Strategy\" (Mathematics, grade band 68)."
      },
      "external": {
        "sourceLessonId": "basic-math-68-u1-external-generated-cycle-14",
        "order": 14,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-68-u1-external-supp-seq-15",
      "title": "Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 15: Error Check Routines",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-68-u1-external-supp-seq-15-q1",
          "text": "Which option best summarizes Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-68-u1-external-skill-pre-algebra-expressions-equations-ratios-checkpoint-quiz-15-error-check-routines-summary",
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
          "id": "basic-math-68-u1-external-supp-seq-15-q2",
          "text": "Which response shows correct application of Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-68-u1-external-skill-pre-algebra-expressions-equations-ratios-checkpoint-quiz-15-error-check-routines-apply",
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
          "id": "basic-math-68-u1-external-supp-seq-15-q3",
          "text": "Why is review important after learning Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-68-u1-external-skill-pre-algebra-expressions-equations-ratios-checkpoint-quiz-15-error-check-routines-review",
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
          "id": "basic-math-68-u1-external-supp-seq-15-ia1",
          "type": "matching_pairs",
          "title": "Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 15: Error Check Routines Error Match",
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
                "label": "I understand Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 15: Error Check Routines in notes but not in timed checks."
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
          "id": "basic-math-68-u1-external-supp-seq-15-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 15: Error Check Routines."
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
          "id": "basic-math-68-u1-external-supp-seq-15-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "Check units, signs, and reasonableness before finalizing.",
          "kind": "concept"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-15-chunk-practice",
          "title": "Guided Practice",
          "content": "Compare two strategies and choose the more reliable one.",
          "kind": "practice"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-15-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying error-check routines, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-15-chunk-recap",
          "title": "Quick Recap",
          "content": "Review error-check routines, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-68-u1-external-supp-seq-15-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Pre-Algebra: Expressions, Equations & Ratios."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-15-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-15-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-68-u1-external-supp-seq-15-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 15: Error Check Routines\" in \"Mathematics\" for grade band \"68\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 15: Error Check Routines\" (Mathematics, grade band 68).",
        "lessonImage": "Create a clean educational illustration for \"Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 15: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Pre-Algebra: Expressions, Equations & Ratios Checkpoint Quiz 15: Error Check Routines\" (Mathematics, grade band 68)."
      },
      "external": {
        "sourceLessonId": "basic-math-68-u1-external-generated-cycle-15",
        "order": 15,
        "generatedSupplement": true
      }
    }
  ]
};
