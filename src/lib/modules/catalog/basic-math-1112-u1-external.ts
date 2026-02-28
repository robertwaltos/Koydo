import type { LearningModule } from "@/lib/modules/types";

export const BasicMath1112U1ExternalModule: LearningModule = {
  "id": "basic-math-1112-u1-external",
  "title": "Calculus: Limits, Derivatives & Integration",
  "description": "Mathematics unit for 11–12 imported from external JSX curriculum.",
  "subject": "Mathematics",
  "tags": [
    "external-ai",
    "curriculum-import",
    "grade-1112"
  ],
  "minAge": 16,
  "maxAge": 18,
  "moduleVersion": "external-1.0.0",
  "version": "external-1.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Explain What is a Limit?.",
    "Explain Evaluating Limits: Direct Substitution.",
    "Explain Factoring to Resolve Indeterminate Form.",
    "Build baseline confidence in Calculus: Limits, Derivatives & Integration.",
    "Apply one core Mathematics strategy for 1112.",
    "Explain multi-step strategy using age-appropriate vocabulary.",
    "Apply multi-step strategy in one guided Mathematics task.",
    "Identify one correction step for the next attempt."
  ],
  "gradeBand": "1112",
  "metadata": {
    "source": "../External_AI_Agents/lesson_platform (1).jsx",
    "sourceUnitId": "basic-math-1112-u1",
    "sourceUnitIdCanonical": "basic-math-1112-u1",
    "sourceUnitIdRaw": "basic_math-1112-u1",
    "importedAt": "2026-02-25T02:03:30.452Z"
  },
  "external": {
    "unitOrder": 10,
    "estimatedHours": null,
    "prerequisites": []
  },
  "lessons": [
    {
      "id": "basic-math-1112-u1-1",
      "title": "Introduction to Limits (1112)",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "basic-math-1112-u1-1-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Introduction to Limits (1112)."
        }
      ],
      "objectives": [
        "Explain What is a Limit?.",
        "Explain Evaluating Limits: Direct Substitution.",
        "Explain Factoring to Resolve Indeterminate Form."
      ],
      "chunks": [
        {
          "id": "basic-math-1112-u1-1-chunk-1",
          "title": "What is a Limit?",
          "content": "A LIMIT describes the value a function APPROACHES as the input approaches some value — even if the function never actually reaches that value.\n\nlim[x→2] (x² − 4)/(x − 2)\n\nWe can't plug in x=2 (division by zero!), but as x gets CLOSER to 2, the expression gets closer to 4.\n\nWe write: lim[x→2] = 4"
        },
        {
          "id": "basic-math-1112-u1-1-chunk-2",
          "title": "Evaluating Limits: Direct Substitution",
          "content": "For CONTINUOUS functions at point c:\nlim[x→c] f(x) = f(c)\n\nSimply substitute!\nExample: lim[x→3] (2x + 1) = 2(3) + 1 = 7\n\nWhen does this fail? When substitution gives 0/0 (indeterminate form) — then factor, rationalize, or use L'Hôpital's Rule."
        },
        {
          "id": "basic-math-1112-u1-1-chunk-3",
          "title": "Factoring to Resolve Indeterminate Form",
          "content": "lim[x→3] (x² − 9)/(x − 3)\n\nDirect substitution gives 0/0 — indeterminate form.\n\nFactor: (x−3)(x+3)/(x−3)\nCancel (x−3): (x+3)\nNow substitute: 3 + 3 = 6 ✓\n\nlim[x→3] (x² − 9)/(x − 3) = 6\n\nThe key: factor → cancel → substitute."
        },
        {
          "id": "basic-math-1112-u1-1-chunk-4",
          "title": "One-Sided & Infinite Limits",
          "content": "LEFT-HAND LIMIT: lim[x→c⁻] f(x) — approach from the LEFT\nRIGHT-HAND LIMIT: lim[x→c⁺] f(x) — approach from the RIGHT\n\nThe TWO-SIDED limit exists only if BOTH one-sided limits are EQUAL.\n\nINFINITE LIMITS: lim[x→0] 1/x² = ∞ (denominator → 0, fraction → ∞)\nVERTICAL ASYMPTOTES occur where functions approach ±∞."
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-1-card-1",
          "front": "Definition of a Limit",
          "back": "The value a function APPROACHES as x→c, not necessarily equals"
        },
        {
          "id": "basic-math-1112-u1-1-card-2",
          "front": "Evaluate: lim[x→5] (3x − 2)",
          "back": "Direct substitution: 3(5)−2 = 13"
        },
        {
          "id": "basic-math-1112-u1-1-card-3",
          "front": "Indeterminate form",
          "back": "0/0 form — need to factor/rationalize before evaluating"
        },
        {
          "id": "basic-math-1112-u1-1-card-4",
          "front": "Evaluate: lim[x→2] (x²−4)/(x−2)",
          "back": "Factor: (x−2)(x+2)/(x−2) = x+2 → 2+2 = 4"
        },
        {
          "id": "basic-math-1112-u1-1-card-5",
          "front": "Two-sided limit exists when...",
          "back": "Left-hand limit = Right-hand limit"
        },
        {
          "id": "basic-math-1112-u1-1-card-6",
          "front": "Vertical asymptote occurs when...",
          "back": "Function approaches ±∞ as x approaches a value"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Cinematic animated calculus lecture. A graph of f(x) = (x²−4)/(x−2) appears with a point missing at x=2. A glowing cursor moves along the curve from both sides, approaching x=2. The y-value approaches 4, shown numerically in real time. The concept of 'approaching but not reaching' visualized as a zoom into the graph. L'Hôpital's Rule briefly previewed. Sophisticated, university-level aesthetic. Ages 16-18. Duration: 90 seconds.",
        "seedanceAnimation": "Lottie animation: Graph with a 'hole' (open circle) at one point. Arrows approach from left and right along the curve, converging at the hole. Number above updates showing the limit value. 'lim = 4' appears with a glow effect. 14-second loop.",
        "lessonImage": "Create a clean educational illustration for \"Introduction to Limits (1112)\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Introduction to Limits (1112)\" (Mathematics, grade band 1112)."
      },
      "localized": {
        "title": {
          "en": "Introduction to Limits"
        },
        "concept": {
          "en": "Introduction to Limits"
        }
      },
      "external": {
        "sourceLessonId": "basic_math-1112-u1-1",
        "order": 1
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-interactive",
      "title": "Calculus: Limits, Derivatives & Integration Supplemental Practice",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-1112-u1-external-supp-interactive-ia1",
          "type": "drag_and_drop",
          "title": "Calculus: Limits, Derivatives & Integration Supplemental Practice Learning Flow",
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
                "label": "Set a goal for Build baseline confidence in Calculus: Limits, Derivatives & Integration..",
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
          "id": "basic-math-1112-u1-external-supp-interactive-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Calculus: Limits, Derivatives & Integration Supplemental Practice."
        }
      ],
      "metadata": {
        "prompts": [
          "Build baseline confidence in Calculus: Limits, Derivatives & Integration.",
          "Apply one core Mathematics strategy for 1112."
        ]
      },
      "objectives": [
        "Build baseline confidence in Calculus: Limits, Derivatives & Integration.",
        "Apply one core Mathematics strategy for 1112."
      ],
      "chunks": [
        {
          "id": "basic-math-1112-u1-external-supp-interactive-chunk-intro",
          "title": "Calculus: Limits, Derivatives & Integration Supplemental Practice Overview",
          "content": "Reinforce core Mathematics concepts in Calculus: Limits, Derivatives & Integration.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-interactive-chunk-recap",
          "title": "Quick Recap",
          "content": "Summarize one key idea and plan one next step.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-interactive-card-1",
          "front": "What is one key idea in Calculus: Limits, Derivatives & Integration?",
          "back": "Build baseline confidence in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-interactive-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core Mathematics strategy for 1112."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Supplemental Practice\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Supplemental Practice\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Supplemental Practice\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Supplemental Practice\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-supp-interactive",
        "order": 2,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-quiz",
      "title": "Calculus: Limits, Derivatives & Integration Supplemental Check",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-1112-u1-external-supp-quiz-q1",
          "text": "Which option best summarizes Calculus: Limits, Derivatives & Integration Supplemental Check?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-supplemental-check-summary",
          "options": [
            {
              "id": "a",
              "text": "Build baseline confidence in Calculus: Limits, Derivatives & Integration."
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
          "id": "basic-math-1112-u1-external-supp-quiz-q2",
          "text": "Which response shows correct application of Calculus: Limits, Derivatives & Integration Supplemental Check?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-supplemental-check-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply one core Mathematics strategy for 1112."
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
          "id": "basic-math-1112-u1-external-supp-quiz-q3",
          "text": "Why is review important after learning Calculus: Limits, Derivatives & Integration Supplemental Check?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-supplemental-check-review",
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
          "id": "basic-math-1112-u1-external-supp-quiz-ia1",
          "type": "matching_pairs",
          "title": "Calculus: Limits, Derivatives & Integration Supplemental Check Error Match",
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
                "label": "I still mix up Build baseline confidence in Calculus: Limits, Derivatives & Integration.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Calculus: Limits, Derivatives & Integration Supplemental Check in notes but not in timed checks."
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
          "id": "basic-math-1112-u1-external-supp-quiz-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Calculus: Limits, Derivatives & Integration Supplemental Check."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Build baseline confidence in Calculus: Limits, Derivatives & Integration.",
        "Apply one core Mathematics strategy for 1112."
      ],
      "chunks": [
        {
          "id": "basic-math-1112-u1-external-supp-quiz-chunk-intro",
          "title": "Calculus: Limits, Derivatives & Integration Supplemental Check Overview",
          "content": "Reinforce core Mathematics concepts in Calculus: Limits, Derivatives & Integration.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-quiz-chunk-recap",
          "title": "Quick Recap",
          "content": "Summarize one key idea and plan one next step.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-quiz-card-1",
          "front": "What is one key idea in Calculus: Limits, Derivatives & Integration?",
          "back": "Build baseline confidence in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-quiz-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core Mathematics strategy for 1112."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Supplemental Check\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Supplemental Check\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Supplemental Check\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Supplemental Check\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-supp-quiz",
        "order": 3,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-04",
      "title": "Calculus: Limits, Derivatives & Integration Concept Walkthrough 4: Multi Step Strategy",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-04-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Calculus: Limits, Derivatives & Integration Concept Walkthrough 4: Multi Step Strategy."
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
          "id": "basic-math-1112-u1-external-supp-seq-04-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "Model the problem with a visual or equation before solving.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-04-chunk-practice",
          "title": "Guided Practice",
          "content": "Solve one guided item, then one independent item with the same pattern.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-04-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying multi-step strategy, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-04-chunk-recap",
          "title": "Quick Recap",
          "content": "Review multi-step strategy, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-04-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-04-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-04-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-04-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 4: Multi Step Strategy\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 4: Multi Step Strategy\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 4: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 4: Multi Step Strategy\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-4",
        "order": 4,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-05",
      "title": "Calculus: Limits, Derivatives & Integration Guided Practice Lab 5: Error Check Routines",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-05-ia1",
          "type": "drag_and_drop",
          "title": "Calculus: Limits, Derivatives & Integration Guided Practice Lab 5: Error Check Routines Learning Flow",
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
          "id": "basic-math-1112-u1-external-supp-seq-05-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Calculus: Limits, Derivatives & Integration Guided Practice Lab 5: Error Check Routines."
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
          "id": "basic-math-1112-u1-external-supp-seq-05-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "Name the operation and explain why it fits.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-05-chunk-practice",
          "title": "Guided Practice",
          "content": "Use a short checklist: plan, solve, verify.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-05-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying error-check routines, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-05-chunk-recap",
          "title": "Quick Recap",
          "content": "Review error-check routines, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-05-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-05-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-05-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-05-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 5: Error Check Routines\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 5: Error Check Routines\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 5: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 5: Error Check Routines\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-5",
        "order": 5,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-06",
      "title": "Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-06-q1",
          "text": "Which option best summarizes Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-6-number-sense-summary",
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
          "id": "basic-math-1112-u1-external-supp-seq-06-q2",
          "text": "Which response shows correct application of Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-6-number-sense-apply",
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
          "id": "basic-math-1112-u1-external-supp-seq-06-q3",
          "text": "Why is review important after learning Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-6-number-sense-review",
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
          "id": "basic-math-1112-u1-external-supp-seq-06-ia1",
          "type": "matching_pairs",
          "title": "Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense Error Match",
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
                "label": "I understand Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense in notes but not in timed checks."
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
          "id": "basic-math-1112-u1-external-supp-seq-06-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense."
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
          "id": "basic-math-1112-u1-external-supp-seq-06-chunk-intro",
          "title": "Number Sense Intro",
          "content": "Check units, signs, and reasonableness before finalizing.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-06-chunk-practice",
          "title": "Guided Practice",
          "content": "Compare two strategies and choose the more reliable one.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-06-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying number sense, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-06-chunk-recap",
          "title": "Quick Recap",
          "content": "Review number sense, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-06-card-1",
          "front": "What is number sense?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-06-card-2",
          "front": "How can I practice number sense?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-06-card-3",
          "front": "What should I review next?",
          "back": "Review number sense, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-06-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-6",
        "order": 6,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-07",
      "title": "Calculus: Limits, Derivatives & Integration Concept Walkthrough 7: Equation Setup",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-07-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Calculus: Limits, Derivatives & Integration Concept Walkthrough 7: Equation Setup."
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
          "id": "basic-math-1112-u1-external-supp-seq-07-chunk-intro",
          "title": "Equation Setup Intro",
          "content": "Model the problem with a visual or equation before solving.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-07-chunk-practice",
          "title": "Guided Practice",
          "content": "Solve one guided item, then one independent item with the same pattern.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-07-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying equation setup, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-07-chunk-recap",
          "title": "Quick Recap",
          "content": "Review equation setup, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-07-card-1",
          "front": "What is equation setup?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-07-card-2",
          "front": "How can I practice equation setup?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-07-card-3",
          "front": "What should I review next?",
          "back": "Review equation setup, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-07-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 7: Equation Setup\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 7: Equation Setup\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 7: Equation Setup\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 7: Equation Setup\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-7",
        "order": 7,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-08",
      "title": "Calculus: Limits, Derivatives & Integration Guided Practice Lab 8: Fraction Reasoning",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-08-ia1",
          "type": "drag_and_drop",
          "title": "Calculus: Limits, Derivatives & Integration Guided Practice Lab 8: Fraction Reasoning Learning Flow",
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
          "id": "basic-math-1112-u1-external-supp-seq-08-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Calculus: Limits, Derivatives & Integration Guided Practice Lab 8: Fraction Reasoning."
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
          "id": "basic-math-1112-u1-external-supp-seq-08-chunk-intro",
          "title": "Fraction Reasoning Intro",
          "content": "Name the operation and explain why it fits.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-08-chunk-practice",
          "title": "Guided Practice",
          "content": "Use a short checklist: plan, solve, verify.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-08-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying fraction reasoning, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-08-chunk-recap",
          "title": "Quick Recap",
          "content": "Review fraction reasoning, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-08-card-1",
          "front": "What is fraction reasoning?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-08-card-2",
          "front": "How can I practice fraction reasoning?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-08-card-3",
          "front": "What should I review next?",
          "back": "Review fraction reasoning, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-08-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 8: Fraction Reasoning\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 8: Fraction Reasoning\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 8: Fraction Reasoning\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 8: Fraction Reasoning\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-8",
        "order": 8,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-09",
      "title": "Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-09-q1",
          "text": "Which option best summarizes Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-9-multi-step-strategy-summary",
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
          "id": "basic-math-1112-u1-external-supp-seq-09-q2",
          "text": "Which response shows correct application of Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-9-multi-step-strategy-apply",
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
          "id": "basic-math-1112-u1-external-supp-seq-09-q3",
          "text": "Why is review important after learning Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-9-multi-step-strategy-review",
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
          "id": "basic-math-1112-u1-external-supp-seq-09-ia1",
          "type": "matching_pairs",
          "title": "Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy Error Match",
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
                "label": "I understand Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy in notes but not in timed checks."
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
          "id": "basic-math-1112-u1-external-supp-seq-09-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy."
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
          "id": "basic-math-1112-u1-external-supp-seq-09-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "Check units, signs, and reasonableness before finalizing.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-09-chunk-practice",
          "title": "Guided Practice",
          "content": "Compare two strategies and choose the more reliable one.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-09-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying multi-step strategy, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-09-chunk-recap",
          "title": "Quick Recap",
          "content": "Review multi-step strategy, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-09-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-09-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-09-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-09-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-9",
        "order": 9,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-10",
      "title": "Calculus: Limits, Derivatives & Integration Concept Walkthrough 10: Error Check Routines",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-10-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Calculus: Limits, Derivatives & Integration Concept Walkthrough 10: Error Check Routines."
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
          "id": "basic-math-1112-u1-external-supp-seq-10-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "Model the problem with a visual or equation before solving.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-10-chunk-practice",
          "title": "Guided Practice",
          "content": "Solve one guided item, then one independent item with the same pattern.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-10-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying error-check routines, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-10-chunk-recap",
          "title": "Quick Recap",
          "content": "Review error-check routines, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-10-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-10-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-10-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-10-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 10: Error Check Routines\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 10: Error Check Routines\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 10: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 10: Error Check Routines\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-10",
        "order": 10,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-11",
      "title": "Calculus: Limits, Derivatives & Integration Guided Practice Lab 11: Number Sense",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-11-ia1",
          "type": "drag_and_drop",
          "title": "Calculus: Limits, Derivatives & Integration Guided Practice Lab 11: Number Sense Learning Flow",
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
          "id": "basic-math-1112-u1-external-supp-seq-11-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Calculus: Limits, Derivatives & Integration Guided Practice Lab 11: Number Sense."
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
          "id": "basic-math-1112-u1-external-supp-seq-11-chunk-intro",
          "title": "Number Sense Intro",
          "content": "Name the operation and explain why it fits.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-11-chunk-practice",
          "title": "Guided Practice",
          "content": "Use a short checklist: plan, solve, verify.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-11-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying number sense, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-11-chunk-recap",
          "title": "Quick Recap",
          "content": "Review number sense, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-11-card-1",
          "front": "What is number sense?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-11-card-2",
          "front": "How can I practice number sense?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-11-card-3",
          "front": "What should I review next?",
          "back": "Review number sense, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-11-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 11: Number Sense\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 11: Number Sense\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 11: Number Sense\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 11: Number Sense\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-11",
        "order": 11,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-12",
      "title": "Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-12-q1",
          "text": "Which option best summarizes Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-12-equation-setup-summary",
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
          "id": "basic-math-1112-u1-external-supp-seq-12-q2",
          "text": "Which response shows correct application of Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-12-equation-setup-apply",
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
          "id": "basic-math-1112-u1-external-supp-seq-12-q3",
          "text": "Why is review important after learning Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-12-equation-setup-review",
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
          "id": "basic-math-1112-u1-external-supp-seq-12-ia1",
          "type": "matching_pairs",
          "title": "Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup Error Match",
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
                "label": "I understand Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup in notes but not in timed checks."
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
          "id": "basic-math-1112-u1-external-supp-seq-12-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup."
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
          "id": "basic-math-1112-u1-external-supp-seq-12-chunk-intro",
          "title": "Equation Setup Intro",
          "content": "Check units, signs, and reasonableness before finalizing.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-12-chunk-practice",
          "title": "Guided Practice",
          "content": "Compare two strategies and choose the more reliable one.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-12-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying equation setup, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-12-chunk-recap",
          "title": "Quick Recap",
          "content": "Review equation setup, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-12-card-1",
          "front": "What is equation setup?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-12-card-2",
          "front": "How can I practice equation setup?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-12-card-3",
          "front": "What should I review next?",
          "back": "Review equation setup, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-12-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-12",
        "order": 12,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-13",
      "title": "Calculus: Limits, Derivatives & Integration Concept Walkthrough 13: Fraction Reasoning",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-13-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Calculus: Limits, Derivatives & Integration Concept Walkthrough 13: Fraction Reasoning."
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
          "id": "basic-math-1112-u1-external-supp-seq-13-chunk-intro",
          "title": "Fraction Reasoning Intro",
          "content": "Model the problem with a visual or equation before solving.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-13-chunk-practice",
          "title": "Guided Practice",
          "content": "Solve one guided item, then one independent item with the same pattern.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-13-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying fraction reasoning, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-13-chunk-recap",
          "title": "Quick Recap",
          "content": "Review fraction reasoning, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-13-card-1",
          "front": "What is fraction reasoning?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-13-card-2",
          "front": "How can I practice fraction reasoning?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-13-card-3",
          "front": "What should I review next?",
          "back": "Review fraction reasoning, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-13-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 13: Fraction Reasoning\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 13: Fraction Reasoning\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 13: Fraction Reasoning\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 13: Fraction Reasoning\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-13",
        "order": 13,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-14",
      "title": "Calculus: Limits, Derivatives & Integration Guided Practice Lab 14: Multi Step Strategy",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-14-ia1",
          "type": "drag_and_drop",
          "title": "Calculus: Limits, Derivatives & Integration Guided Practice Lab 14: Multi Step Strategy Learning Flow",
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
          "id": "basic-math-1112-u1-external-supp-seq-14-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Calculus: Limits, Derivatives & Integration Guided Practice Lab 14: Multi Step Strategy."
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
          "id": "basic-math-1112-u1-external-supp-seq-14-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "Name the operation and explain why it fits.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-14-chunk-practice",
          "title": "Guided Practice",
          "content": "Use a short checklist: plan, solve, verify.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-14-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying multi-step strategy, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-14-chunk-recap",
          "title": "Quick Recap",
          "content": "Review multi-step strategy, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-14-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-14-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-14-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-14-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 14: Multi Step Strategy\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 14: Multi Step Strategy\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 14: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 14: Multi Step Strategy\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-14",
        "order": 14,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-15",
      "title": "Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-15-q1",
          "text": "Which option best summarizes Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-15-error-check-routines-summary",
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
          "id": "basic-math-1112-u1-external-supp-seq-15-q2",
          "text": "Which response shows correct application of Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-15-error-check-routines-apply",
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
          "id": "basic-math-1112-u1-external-supp-seq-15-q3",
          "text": "Why is review important after learning Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-15-error-check-routines-review",
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
          "id": "basic-math-1112-u1-external-supp-seq-15-ia1",
          "type": "matching_pairs",
          "title": "Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines Error Match",
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
                "label": "I understand Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines in notes but not in timed checks."
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
          "id": "basic-math-1112-u1-external-supp-seq-15-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines."
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
          "id": "basic-math-1112-u1-external-supp-seq-15-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "Check units, signs, and reasonableness before finalizing.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-15-chunk-practice",
          "title": "Guided Practice",
          "content": "Compare two strategies and choose the more reliable one.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-15-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying error-check routines, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-15-chunk-recap",
          "title": "Quick Recap",
          "content": "Review error-check routines, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-15-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-15-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-15-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-15-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-15",
        "order": 15,
        "generatedSupplement": true
      }
    }
  ]
};
