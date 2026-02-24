import type { LearningModule } from "@/lib/modules/types";

export const BasicMath910U1ExternalModule: LearningModule = {
  "id": "basic-math-910-u1-external",
  "title": "Algebra II: Functions, Systems & Polynomials",
  "description": "Mathematics unit for 9–10 imported from external JSX curriculum.",
  "subject": "Mathematics",
  "tags": [
    "external-ai",
    "curriculum-import",
    "grade-910"
  ],
  "minAge": 14,
  "maxAge": 16,
  "moduleVersion": "external-1.0.0",
  "version": "external-1.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Explain What is a Function?.",
    "Explain Function Notation: f(x).",
    "Explain Domain and Range.",
    "Build baseline confidence in Algebra II: Functions, Systems & Polynomials.",
    "Apply one core Mathematics strategy for 910.",
    "Explain multi-step strategy using age-appropriate vocabulary.",
    "Apply multi-step strategy in one guided Mathematics task.",
    "Identify one correction step for the next attempt."
  ],
  "gradeBand": "910",
  "metadata": {
    "source": "../External_AI_Agents/lesson_platform (1).jsx",
    "sourceUnitId": "basic_math-910-u1",
    "sourceUnitIdCanonical": "basic-math-910-u1",
    "importedAt": "2026-02-24T03:43:31.750Z"
  },
  "external": {
    "unitOrder": 9,
    "estimatedHours": null,
    "prerequisites": []
  },
  "lessons": [
    {
      "id": "basic-math-910-u1-1",
      "title": "Functions: Domain, Range & Function Notation (910)",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "basic-math-910-u1-1-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Functions: Domain, Range & Function Notation (910)."
        }
      ],
      "objectives": [
        "Explain What is a Function?.",
        "Explain Function Notation: f(x).",
        "Explain Domain and Range."
      ],
      "chunks": [
        {
          "id": "basic-math-910-u1-1-chunk-1",
          "title": "What is a Function?",
          "content": "A FUNCTION is a rule that assigns EXACTLY ONE output to each input. Think of it as a machine: put in a number (input/domain), get out one number (output/range).\n\nKey rule: Each input has EXACTLY ONE output. If one input maps to two outputs, it's NOT a function."
        },
        {
          "id": "basic-math-910-u1-1-chunk-2",
          "title": "Function Notation: f(x)",
          "content": "Instead of y = 2x + 3, we write f(x) = 2x + 3\n\nf(x) is read 'f of x' and means the OUTPUT when x is the input.\n\nf(5) = 2(5) + 3 = 13 means: when input is 5, output is 13.\n\nYou can name functions anything: g(x), h(x), p(t) — the letter in parentheses is the input variable."
        },
        {
          "id": "basic-math-910-u1-1-chunk-3",
          "title": "Domain and Range",
          "content": "DOMAIN: The set of all valid INPUTS (x-values)\nRANGE: The set of all valid OUTPUTS (y or f(x) values)\n\nFor f(x) = √x:\n• Domain: x ≥ 0 (can't take square root of negative numbers)\n• Range: f(x) ≥ 0 (square roots are always non-negative)\n\nFor f(x) = 1/x:\n• Domain: x ≠ 0 (can't divide by zero)\n• Range: f(x) ≠ 0"
        },
        {
          "id": "basic-math-910-u1-1-chunk-4",
          "title": "Vertical Line Test",
          "content": "To check if a graph represents a FUNCTION:\nDraw (or imagine) vertical lines across the graph.\n• If ANY vertical line touches the graph MORE than once → NOT a function\n• If every vertical line touches the graph AT MOST once → IS a function\n\nA circle is NOT a function. A parabola opening up/down IS a function."
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-1-card-1",
          "front": "Function definition",
          "back": "Every input has EXACTLY ONE output. One-to-one or many-to-one, never one-to-many."
        },
        {
          "id": "basic-math-910-u1-1-card-2",
          "front": "f(3) when f(x) = 4x − 2",
          "back": "f(3) = 4(3) − 2 = 12 − 2 = 10"
        },
        {
          "id": "basic-math-910-u1-1-card-3",
          "front": "Domain",
          "back": "All valid INPUT values (x-values)"
        },
        {
          "id": "basic-math-910-u1-1-card-4",
          "front": "Range",
          "back": "All valid OUTPUT values (f(x) values)"
        },
        {
          "id": "basic-math-910-u1-1-card-5",
          "front": "Vertical Line Test",
          "back": "If any vertical line crosses the graph more than once → NOT a function"
        },
        {
          "id": "basic-math-910-u1-1-card-6",
          "front": "Domain of f(x) = √(x−4)",
          "back": "x ≥ 4 (expression under √ must be ≥ 0)"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Animated math factory. A conveyor belt (function machine) takes in numbers, processes them through gear-driven operations (×3, −2), and outputs results. Domain shown as allowable inputs (green zone), invalid inputs (red zone). Function notation f(x) appears dramatically. Vertical line test demonstrated on multiple graphs with satisfying 'pass/fail' indicators. Sleek, industrial-tech aesthetic. Ages 14-16. Duration: 80 seconds.",
        "seedanceAnimation": "Lottie animation: Box labeled 'f(x) = 2x+1'. Number '3' flies in, gears turn, '7' comes out. Different numbers cycle through. Domain values shown in green, invalid inputs in red and blocked. 12-second loop.",
        "lessonImage": "Create a clean educational illustration for \"Functions: Domain, Range & Function Notation (910)\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Functions: Domain, Range & Function Notation (910)\" (Mathematics, grade band 910)."
      },
      "localized": {
        "title": {
          "en": "Functions: Domain, Range & Function Notation"
        },
        "concept": {
          "en": "Functions: Domain, Range & Function Notation"
        }
      },
      "external": {
        "sourceLessonId": "basic_math-910-u1-1",
        "order": 1
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-interactive",
      "title": "Algebra II: Functions, Systems & Polynomials Supplemental Practice",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-910-u1-external-supp-interactive-ia1",
          "type": "drag_and_drop",
          "title": "Algebra II: Functions, Systems & Polynomials Supplemental Practice Learning Flow",
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
                "label": "Set a goal for Build baseline confidence in Algebra II: Functions, Systems & Polynomials..",
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
          "id": "basic-math-910-u1-external-supp-interactive-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Algebra II: Functions, Systems & Polynomials Supplemental Practice."
        }
      ],
      "metadata": {
        "prompts": [
          "Build baseline confidence in Algebra II: Functions, Systems & Polynomials.",
          "Apply one core Mathematics strategy for 910."
        ]
      },
      "objectives": [
        "Build baseline confidence in Algebra II: Functions, Systems & Polynomials.",
        "Apply one core Mathematics strategy for 910."
      ],
      "chunks": [
        {
          "id": "basic-math-910-u1-external-supp-interactive-chunk-intro",
          "title": "Algebra II: Functions, Systems & Polynomials Supplemental Practice Overview",
          "content": "Reinforce core Mathematics concepts in Algebra II: Functions, Systems & Polynomials.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-interactive-chunk-recap",
          "title": "Quick Recap",
          "content": "Summarize one key idea and plan one next step.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-interactive-card-1",
          "front": "What is one key idea in Algebra II: Functions, Systems & Polynomials?",
          "back": "Build baseline confidence in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-interactive-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core Mathematics strategy for 910."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Supplemental Practice\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Supplemental Practice\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Supplemental Practice\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Supplemental Practice\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-supp-interactive",
        "order": 2,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-quiz",
      "title": "Algebra II: Functions, Systems & Polynomials Supplemental Check",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-910-u1-external-supp-quiz-q1",
          "text": "Which option best summarizes Algebra II: Functions, Systems & Polynomials Supplemental Check?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-supplemental-check-summary",
          "options": [
            {
              "id": "a",
              "text": "Build baseline confidence in Algebra II: Functions, Systems & Polynomials."
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
          "id": "basic-math-910-u1-external-supp-quiz-q2",
          "text": "Which response shows correct application of Algebra II: Functions, Systems & Polynomials Supplemental Check?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-supplemental-check-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply one core Mathematics strategy for 910."
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
          "id": "basic-math-910-u1-external-supp-quiz-q3",
          "text": "Why is review important after learning Algebra II: Functions, Systems & Polynomials Supplemental Check?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-supplemental-check-review",
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
          "id": "basic-math-910-u1-external-supp-quiz-ia1",
          "type": "matching_pairs",
          "title": "Algebra II: Functions, Systems & Polynomials Supplemental Check Error Match",
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
                "label": "I still mix up Build baseline confidence in Algebra II: Functions, Systems & Polynomials.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Algebra II: Functions, Systems & Polynomials Supplemental Check in notes but not in timed checks."
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
          "id": "basic-math-910-u1-external-supp-quiz-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Algebra II: Functions, Systems & Polynomials Supplemental Check."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Build baseline confidence in Algebra II: Functions, Systems & Polynomials.",
        "Apply one core Mathematics strategy for 910."
      ],
      "chunks": [
        {
          "id": "basic-math-910-u1-external-supp-quiz-chunk-intro",
          "title": "Algebra II: Functions, Systems & Polynomials Supplemental Check Overview",
          "content": "Reinforce core Mathematics concepts in Algebra II: Functions, Systems & Polynomials.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-quiz-chunk-recap",
          "title": "Quick Recap",
          "content": "Summarize one key idea and plan one next step.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-quiz-card-1",
          "front": "What is one key idea in Algebra II: Functions, Systems & Polynomials?",
          "back": "Build baseline confidence in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-quiz-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core Mathematics strategy for 910."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Supplemental Check\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Supplemental Check\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Supplemental Check\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Supplemental Check\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-supp-quiz",
        "order": 3,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-04",
      "title": "Algebra II: Functions, Systems & Polynomials Concept Walkthrough 4: Multi Step Strategy",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-910-u1-external-supp-seq-04-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Algebra II: Functions, Systems & Polynomials Concept Walkthrough 4: Multi Step Strategy."
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
          "id": "basic-math-910-u1-external-supp-seq-04-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "Model the problem with a visual or equation before solving.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-04-chunk-practice",
          "title": "Guided Practice",
          "content": "Solve one guided item, then one independent item with the same pattern.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-04-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying multi-step strategy, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-04-chunk-recap",
          "title": "Quick Recap",
          "content": "Review multi-step strategy, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-04-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-04-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-04-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-04-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 4: Multi Step Strategy\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 4: Multi Step Strategy\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 4: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 4: Multi Step Strategy\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-4",
        "order": 4,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-05",
      "title": "Algebra II: Functions, Systems & Polynomials Guided Practice Lab 5: Error Check Routines",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-910-u1-external-supp-seq-05-ia1",
          "type": "drag_and_drop",
          "title": "Algebra II: Functions, Systems & Polynomials Guided Practice Lab 5: Error Check Routines Learning Flow",
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
          "id": "basic-math-910-u1-external-supp-seq-05-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Algebra II: Functions, Systems & Polynomials Guided Practice Lab 5: Error Check Routines."
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
          "id": "basic-math-910-u1-external-supp-seq-05-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "Name the operation and explain why it fits.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-05-chunk-practice",
          "title": "Guided Practice",
          "content": "Use a short checklist: plan, solve, verify.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-05-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying error-check routines, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-05-chunk-recap",
          "title": "Quick Recap",
          "content": "Review error-check routines, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-05-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-05-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-05-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-05-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 5: Error Check Routines\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 5: Error Check Routines\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 5: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 5: Error Check Routines\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-5",
        "order": 5,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-06",
      "title": "Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-910-u1-external-supp-seq-06-q1",
          "text": "Which option best summarizes Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-6-number-sense-summary",
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
          "id": "basic-math-910-u1-external-supp-seq-06-q2",
          "text": "Which response shows correct application of Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-6-number-sense-apply",
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
          "id": "basic-math-910-u1-external-supp-seq-06-q3",
          "text": "Why is review important after learning Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-6-number-sense-review",
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
          "id": "basic-math-910-u1-external-supp-seq-06-ia1",
          "type": "matching_pairs",
          "title": "Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense Error Match",
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
                "label": "I understand Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense in notes but not in timed checks."
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
          "id": "basic-math-910-u1-external-supp-seq-06-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense."
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
          "id": "basic-math-910-u1-external-supp-seq-06-chunk-intro",
          "title": "Number Sense Intro",
          "content": "Check units, signs, and reasonableness before finalizing.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-06-chunk-practice",
          "title": "Guided Practice",
          "content": "Compare two strategies and choose the more reliable one.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-06-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying number sense, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-06-chunk-recap",
          "title": "Quick Recap",
          "content": "Review number sense, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-06-card-1",
          "front": "What is number sense?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-06-card-2",
          "front": "How can I practice number sense?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-06-card-3",
          "front": "What should I review next?",
          "back": "Review number sense, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-06-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-6",
        "order": 6,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-07",
      "title": "Algebra II: Functions, Systems & Polynomials Concept Walkthrough 7: Equation Setup",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-910-u1-external-supp-seq-07-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Algebra II: Functions, Systems & Polynomials Concept Walkthrough 7: Equation Setup."
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
          "id": "basic-math-910-u1-external-supp-seq-07-chunk-intro",
          "title": "Equation Setup Intro",
          "content": "Model the problem with a visual or equation before solving.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-07-chunk-practice",
          "title": "Guided Practice",
          "content": "Solve one guided item, then one independent item with the same pattern.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-07-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying equation setup, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-07-chunk-recap",
          "title": "Quick Recap",
          "content": "Review equation setup, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-07-card-1",
          "front": "What is equation setup?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-07-card-2",
          "front": "How can I practice equation setup?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-07-card-3",
          "front": "What should I review next?",
          "back": "Review equation setup, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-07-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 7: Equation Setup\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 7: Equation Setup\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 7: Equation Setup\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 7: Equation Setup\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-7",
        "order": 7,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-08",
      "title": "Algebra II: Functions, Systems & Polynomials Guided Practice Lab 8: Fraction Reasoning",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-910-u1-external-supp-seq-08-ia1",
          "type": "drag_and_drop",
          "title": "Algebra II: Functions, Systems & Polynomials Guided Practice Lab 8: Fraction Reasoning Learning Flow",
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
          "id": "basic-math-910-u1-external-supp-seq-08-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Algebra II: Functions, Systems & Polynomials Guided Practice Lab 8: Fraction Reasoning."
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
          "id": "basic-math-910-u1-external-supp-seq-08-chunk-intro",
          "title": "Fraction Reasoning Intro",
          "content": "Name the operation and explain why it fits.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-08-chunk-practice",
          "title": "Guided Practice",
          "content": "Use a short checklist: plan, solve, verify.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-08-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying fraction reasoning, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-08-chunk-recap",
          "title": "Quick Recap",
          "content": "Review fraction reasoning, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-08-card-1",
          "front": "What is fraction reasoning?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-08-card-2",
          "front": "How can I practice fraction reasoning?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-08-card-3",
          "front": "What should I review next?",
          "back": "Review fraction reasoning, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-08-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 8: Fraction Reasoning\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 8: Fraction Reasoning\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 8: Fraction Reasoning\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 8: Fraction Reasoning\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-8",
        "order": 8,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-09",
      "title": "Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-910-u1-external-supp-seq-09-q1",
          "text": "Which option best summarizes Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-9-multi-step-strategy-summary",
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
          "id": "basic-math-910-u1-external-supp-seq-09-q2",
          "text": "Which response shows correct application of Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-9-multi-step-strategy-apply",
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
          "id": "basic-math-910-u1-external-supp-seq-09-q3",
          "text": "Why is review important after learning Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-9-multi-step-strategy-review",
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
          "id": "basic-math-910-u1-external-supp-seq-09-ia1",
          "type": "matching_pairs",
          "title": "Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy Error Match",
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
                "label": "I understand Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy in notes but not in timed checks."
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
          "id": "basic-math-910-u1-external-supp-seq-09-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy."
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
          "id": "basic-math-910-u1-external-supp-seq-09-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "Check units, signs, and reasonableness before finalizing.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-09-chunk-practice",
          "title": "Guided Practice",
          "content": "Compare two strategies and choose the more reliable one.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-09-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying multi-step strategy, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-09-chunk-recap",
          "title": "Quick Recap",
          "content": "Review multi-step strategy, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-09-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-09-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-09-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-09-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-9",
        "order": 9,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-10",
      "title": "Algebra II: Functions, Systems & Polynomials Concept Walkthrough 10: Error Check Routines",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-910-u1-external-supp-seq-10-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Algebra II: Functions, Systems & Polynomials Concept Walkthrough 10: Error Check Routines."
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
          "id": "basic-math-910-u1-external-supp-seq-10-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "Model the problem with a visual or equation before solving.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-10-chunk-practice",
          "title": "Guided Practice",
          "content": "Solve one guided item, then one independent item with the same pattern.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-10-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying error-check routines, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-10-chunk-recap",
          "title": "Quick Recap",
          "content": "Review error-check routines, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-10-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-10-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-10-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-10-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 10: Error Check Routines\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 10: Error Check Routines\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 10: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 10: Error Check Routines\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-10",
        "order": 10,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-11",
      "title": "Algebra II: Functions, Systems & Polynomials Guided Practice Lab 11: Number Sense",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-910-u1-external-supp-seq-11-ia1",
          "type": "drag_and_drop",
          "title": "Algebra II: Functions, Systems & Polynomials Guided Practice Lab 11: Number Sense Learning Flow",
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
          "id": "basic-math-910-u1-external-supp-seq-11-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Algebra II: Functions, Systems & Polynomials Guided Practice Lab 11: Number Sense."
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
          "id": "basic-math-910-u1-external-supp-seq-11-chunk-intro",
          "title": "Number Sense Intro",
          "content": "Name the operation and explain why it fits.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-11-chunk-practice",
          "title": "Guided Practice",
          "content": "Use a short checklist: plan, solve, verify.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-11-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying number sense, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-11-chunk-recap",
          "title": "Quick Recap",
          "content": "Review number sense, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-11-card-1",
          "front": "What is number sense?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-11-card-2",
          "front": "How can I practice number sense?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-11-card-3",
          "front": "What should I review next?",
          "back": "Review number sense, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-11-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 11: Number Sense\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 11: Number Sense\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 11: Number Sense\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 11: Number Sense\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-11",
        "order": 11,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-12",
      "title": "Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-910-u1-external-supp-seq-12-q1",
          "text": "Which option best summarizes Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-12-equation-setup-summary",
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
          "id": "basic-math-910-u1-external-supp-seq-12-q2",
          "text": "Which response shows correct application of Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-12-equation-setup-apply",
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
          "id": "basic-math-910-u1-external-supp-seq-12-q3",
          "text": "Why is review important after learning Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-12-equation-setup-review",
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
          "id": "basic-math-910-u1-external-supp-seq-12-ia1",
          "type": "matching_pairs",
          "title": "Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup Error Match",
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
                "label": "I understand Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup in notes but not in timed checks."
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
          "id": "basic-math-910-u1-external-supp-seq-12-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup."
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
          "id": "basic-math-910-u1-external-supp-seq-12-chunk-intro",
          "title": "Equation Setup Intro",
          "content": "Check units, signs, and reasonableness before finalizing.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-12-chunk-practice",
          "title": "Guided Practice",
          "content": "Compare two strategies and choose the more reliable one.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-12-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying equation setup, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-12-chunk-recap",
          "title": "Quick Recap",
          "content": "Review equation setup, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-12-card-1",
          "front": "What is equation setup?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-12-card-2",
          "front": "How can I practice equation setup?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-12-card-3",
          "front": "What should I review next?",
          "back": "Review equation setup, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-12-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-12",
        "order": 12,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-13",
      "title": "Algebra II: Functions, Systems & Polynomials Concept Walkthrough 13: Fraction Reasoning",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-910-u1-external-supp-seq-13-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Algebra II: Functions, Systems & Polynomials Concept Walkthrough 13: Fraction Reasoning."
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
          "id": "basic-math-910-u1-external-supp-seq-13-chunk-intro",
          "title": "Fraction Reasoning Intro",
          "content": "Model the problem with a visual or equation before solving.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-13-chunk-practice",
          "title": "Guided Practice",
          "content": "Solve one guided item, then one independent item with the same pattern.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-13-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying fraction reasoning, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-13-chunk-recap",
          "title": "Quick Recap",
          "content": "Review fraction reasoning, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-13-card-1",
          "front": "What is fraction reasoning?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-13-card-2",
          "front": "How can I practice fraction reasoning?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-13-card-3",
          "front": "What should I review next?",
          "back": "Review fraction reasoning, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-13-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 13: Fraction Reasoning\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 13: Fraction Reasoning\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 13: Fraction Reasoning\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 13: Fraction Reasoning\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-13",
        "order": 13,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-14",
      "title": "Algebra II: Functions, Systems & Polynomials Guided Practice Lab 14: Multi Step Strategy",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-910-u1-external-supp-seq-14-ia1",
          "type": "drag_and_drop",
          "title": "Algebra II: Functions, Systems & Polynomials Guided Practice Lab 14: Multi Step Strategy Learning Flow",
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
          "id": "basic-math-910-u1-external-supp-seq-14-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Algebra II: Functions, Systems & Polynomials Guided Practice Lab 14: Multi Step Strategy."
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
          "id": "basic-math-910-u1-external-supp-seq-14-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "Name the operation and explain why it fits.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-14-chunk-practice",
          "title": "Guided Practice",
          "content": "Use a short checklist: plan, solve, verify.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-14-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying multi-step strategy, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-14-chunk-recap",
          "title": "Quick Recap",
          "content": "Review multi-step strategy, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-14-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-14-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-14-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-14-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 14: Multi Step Strategy\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 14: Multi Step Strategy\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 14: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 14: Multi Step Strategy\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-14",
        "order": 14,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-15",
      "title": "Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-910-u1-external-supp-seq-15-q1",
          "text": "Which option best summarizes Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-15-error-check-routines-summary",
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
          "id": "basic-math-910-u1-external-supp-seq-15-q2",
          "text": "Which response shows correct application of Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-15-error-check-routines-apply",
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
          "id": "basic-math-910-u1-external-supp-seq-15-q3",
          "text": "Why is review important after learning Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-15-error-check-routines-review",
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
          "id": "basic-math-910-u1-external-supp-seq-15-ia1",
          "type": "matching_pairs",
          "title": "Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines Error Match",
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
                "label": "I understand Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines in notes but not in timed checks."
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
          "id": "basic-math-910-u1-external-supp-seq-15-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines."
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
          "id": "basic-math-910-u1-external-supp-seq-15-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "Check units, signs, and reasonableness before finalizing.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-15-chunk-practice",
          "title": "Guided Practice",
          "content": "Compare two strategies and choose the more reliable one.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-15-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying error-check routines, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-15-chunk-recap",
          "title": "Quick Recap",
          "content": "Review error-check routines, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-15-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-15-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-15-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-15-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-15",
        "order": 15,
        "generatedSupplement": true
      }
    }
  ]
};
