import type { LearningModule } from "@/lib/modules/types";

export const BasicMathK2U1ExternalModule: LearningModule = {
  "id": "basic-math-k2-u1-external",
  "title": "Addition & Subtraction (0–20)",
  "description": "Mathematics unit for K–2 imported from external JSX curriculum.",
  "subject": "Mathematics",
  "tags": [
    "external-ai",
    "curriculum-import",
    "grade-k2"
  ],
  "minAge": 5,
  "maxAge": 8,
  "version": "external-1.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Explain What is Addition?.",
    "Explain Addition Strategies: Counting On.",
    "Explain Addition Strategies: Making 10.",
    "Explain What is Subtraction?.",
    "Explain Subtraction Strategies: Counting Back.",
    "Explain Subtraction Strategies: Think Addition!.",
    "Build baseline confidence in Addition & Subtraction (0–20).",
    "Apply one core Mathematics strategy for K2."
  ],
  "gradeBand": "K2",
  "metadata": {
    "source": "../External_AI_Agents/lesson_platform (1).jsx",
    "sourceUnitId": "basic-math-k2-u1",
    "sourceUnitIdCanonical": "basic-math-k2-u1",
    "sourceUnitIdRaw": "basic_math-k2-u1",
    "importedAt": "2026-02-25T02:03:30.461Z"
  },
  "external": {
    "unitOrder": 12,
    "estimatedHours": null,
    "prerequisites": []
  },
  "lessons": [
    {
      "id": "basic-math-k2-u1-1",
      "title": "Understanding Addition: Joining Groups (K2)",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "basic-math-k2-u1-1-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Understanding Addition: Joining Groups (K2)."
        }
      ],
      "objectives": [
        "Explain What is Addition?.",
        "Explain Addition Strategies: Counting On.",
        "Explain Addition Strategies: Making 10."
      ],
      "chunks": [
        {
          "id": "basic-math-k2-u1-1-chunk-1",
          "title": "What is Addition?",
          "content": "Addition means JOINING or PUTTING TOGETHER groups to find the TOTAL.\n\nThe plus sign (+) means 'join together.'\nThe equals sign (=) means 'is the same as.'\n\n3 + 4 = 7 means: When we join 3 and 4, we get 7 total!"
        },
        {
          "id": "basic-math-k2-u1-1-chunk-2",
          "title": "Addition Strategies: Counting On",
          "content": "Don't count from 1 every time! Use COUNTING ON:\n• Start with the BIGGER number\n• Count on from there\n\nExample: 6 + 3\nStart at 6... say 7, 8, 9 (count 3 more)\nAnswer: 9!\n\nUse your fingers to track how many you're counting on."
        },
        {
          "id": "basic-math-k2-u1-1-chunk-3",
          "title": "Addition Strategies: Making 10",
          "content": "Making 10 is powerful because 10 is easy to work with!\n8 + 6 = ?\n• 8 needs 2 more to make 10\n• Take 2 from the 6 (6 − 2 = 4)\n• 10 + 4 = 14! ✓\n\nThis is called the 'Make 10' strategy and it works for any addition problem."
        },
        {
          "id": "basic-math-k2-u1-1-chunk-4",
          "title": "Commutative Property of Addition",
          "content": "Great news: ORDER doesn't matter in addition!\n3 + 7 = 10\n7 + 3 = 10 (same answer!)\n\nThis is called the COMMUTATIVE PROPERTY.\nIt means you can flip the numbers and get the same sum. This cuts your memorization work in HALF!"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-k2-u1-1-card-1",
          "front": "3 + 4 = ?",
          "back": "7 ✓ (join 3 objects and 4 objects)"
        },
        {
          "id": "basic-math-k2-u1-1-card-2",
          "front": "Commutative Property",
          "back": "Order doesn't matter in addition: 3+7 = 7+3"
        },
        {
          "id": "basic-math-k2-u1-1-card-3",
          "front": "Counting On strategy",
          "back": "Start at the BIGGER number, count forward"
        },
        {
          "id": "basic-math-k2-u1-1-card-4",
          "front": "Make 10 strategy (8+5)",
          "back": "8 needs 2 to make 10; take 2 from 5; 10+3=13"
        },
        {
          "id": "basic-math-k2-u1-1-card-5",
          "front": "What does + mean?",
          "back": "PLUS — join, add, put together"
        },
        {
          "id": "basic-math-k2-u1-1-card-6",
          "front": "Sum",
          "back": "The ANSWER to an addition problem"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Vibrant animated kitchen. A chef character combines ingredients: 3 carrots and 4 carrots are placed in a bowl — they count and the bowl shows '7.' Then number tiles appear and 3+4=7 is written. Make 10 strategy shown with a ten-frame visual. Commutative property shown with two trains (red+blue = blue+red = same total cars). Ages 5-8. Warm, inviting kitchen setting. Duration: 65 seconds.",
        "seedanceAnimation": "Lottie animation: A ten-frame grid (2 rows of 5 boxes). Dots fill in one by one showing addition. When 10 is reached, the frame glows gold. Remaining dots appear next to it. Equation appears below. Satisfying fill animation. 12-second loop.",
        "lessonImage": "Create a clean educational illustration for \"Understanding Addition: Joining Groups (K2)\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Understanding Addition: Joining Groups (K2)\" (Mathematics, grade band K2)."
      },
      "localized": {
        "title": {
          "en": "Understanding Addition: Joining Groups"
        },
        "concept": {
          "en": "Understanding Addition: Joining Groups"
        }
      },
      "external": {
        "sourceLessonId": "basic_math-k2-u1-1",
        "order": 1
      }
    },
    {
      "id": "basic-math-k2-u1-2",
      "title": "Subtraction: Taking Away & Finding the Difference (K2)",
      "type": "interactive",
      "duration": 15,
      "interactiveActivities": [
        {
          "id": "basic-math-k2-u1-2-ia1",
          "type": "drag_and_drop",
          "title": "Subtraction: Taking Away & Finding the Difference (K2) Learning Flow",
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
                "label": "Set a goal for Explain What is Subtraction?..",
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
          "id": "basic-math-k2-u1-2-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Subtraction: Taking Away & Finding the Difference (K2)."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain What is Subtraction?.",
          "Explain Subtraction Strategies: Counting Back.",
          "Explain Subtraction Strategies: Think Addition!."
        ]
      },
      "objectives": [
        "Explain What is Subtraction?.",
        "Explain Subtraction Strategies: Counting Back.",
        "Explain Subtraction Strategies: Think Addition!."
      ],
      "chunks": [
        {
          "id": "basic-math-k2-u1-2-chunk-1",
          "title": "What is Subtraction?",
          "content": "Subtraction means TAKING AWAY from a group to find what's LEFT, or finding the DIFFERENCE between two numbers.\n\nThe minus sign (−) means 'take away' or 'subtract.'\n\n9 − 4 = 5 means: Start with 9, take away 4, and 5 are left."
        },
        {
          "id": "basic-math-k2-u1-2-chunk-2",
          "title": "Subtraction Strategies: Counting Back",
          "content": "COUNTING BACK strategy:\n• Start at the first (bigger) number\n• Count BACKWARD the number you're subtracting\n\nExample: 11 − 3\nStart at 11... say 10, 9, 8 (count back 3)\nAnswer: 8!\n\nUse fingers to track how many you count back."
        },
        {
          "id": "basic-math-k2-u1-2-chunk-3",
          "title": "Subtraction Strategies: Think Addition!",
          "content": "Subtraction and addition are RELATED. Use addition to solve subtraction!\n\n9 − 5 = ?\nThink: 5 + ? = 9\n5 + 4 = 9, so 9 − 5 = 4!\n\nThis 'Think Addition' strategy is very fast once you know your addition facts. Subtraction facts come FREE when you learn addition!"
        },
        {
          "id": "basic-math-k2-u1-2-chunk-4",
          "title": "Fact Families",
          "content": "Fact families show how addition and subtraction are RELATED:\n\nFact Family for 3, 7, 10:\n3 + 7 = 10\n7 + 3 = 10\n10 − 3 = 7\n10 − 7 = 3\n\nFour facts, three numbers — always true together!"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-k2-u1-2-card-1",
          "front": "10 − 4 = ?",
          "back": "6 ✓ (take 4 away from 10)"
        },
        {
          "id": "basic-math-k2-u1-2-card-2",
          "front": "Fact family for 4, 6, 10",
          "back": "4+6=10  6+4=10  10-4=6  10-6=4"
        },
        {
          "id": "basic-math-k2-u1-2-card-3",
          "front": "Counting Back strategy",
          "back": "Start at the bigger number, count backward"
        },
        {
          "id": "basic-math-k2-u1-2-card-4",
          "front": "Think Addition strategy (8-3)",
          "back": "3 + ? = 8 → 3+5=8 → 8-3=5"
        },
        {
          "id": "basic-math-k2-u1-2-card-5",
          "front": "Difference",
          "back": "The ANSWER to a subtraction problem"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Animated candy shop. A jar starts with 12 candies. A character 'takes away' 5 candies (they fly out and float away). 7 remain — shown clearly. Then a number bond diagram appears (circle with 12 at top, 5 and 7 in bottom circles) showing the relationship. Fact family shown as four math sentences. Bright, sweet colors. Ages 5-8. Duration: 60 seconds.",
        "seedanceAnimation": "Lottie animation: Number bond tree. 12 at top. Branches to 5 and 7. Below, four equations appear one by one with checkmarks. Tree shakes slightly with each new equation. 10-second animation.",
        "lessonImage": "Create a clean educational illustration for \"Subtraction: Taking Away & Finding the Difference (K2)\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Subtraction: Taking Away & Finding the Difference (K2)\" (Mathematics, grade band K2)."
      },
      "localized": {
        "title": {
          "en": "Subtraction: Taking Away & Finding the Difference"
        },
        "concept": {
          "en": "Subtraction: Taking Away & Finding the Difference"
        }
      },
      "external": {
        "sourceLessonId": "basic_math-k2-u1-2",
        "order": 2
      }
    },
    {
      "id": "basic-math-k2-u1-external-supp-quiz",
      "title": "Addition & Subtraction (0–20) Supplemental Check",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-k2-u1-external-supp-quiz-q1",
          "text": "Which option best summarizes Addition & Subtraction (0–20) Supplemental Check?",
          "skillId": "basic-math-k2-u1-external-skill-addition-subtraction-0-20-supplemental-check-summary",
          "options": [
            {
              "id": "a",
              "text": "Build baseline confidence in Addition & Subtraction (0–20)."
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
          "id": "basic-math-k2-u1-external-supp-quiz-q2",
          "text": "Which response shows correct application of Addition & Subtraction (0–20) Supplemental Check?",
          "skillId": "basic-math-k2-u1-external-skill-addition-subtraction-0-20-supplemental-check-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply one core Mathematics strategy for K2."
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
          "id": "basic-math-k2-u1-external-supp-quiz-q3",
          "text": "Why is review important after learning Addition & Subtraction (0–20) Supplemental Check?",
          "skillId": "basic-math-k2-u1-external-skill-addition-subtraction-0-20-supplemental-check-review",
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
          "id": "basic-math-k2-u1-external-supp-quiz-ia1",
          "type": "matching_pairs",
          "title": "Addition & Subtraction (0–20) Supplemental Check Error Match",
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
                "label": "I still mix up Build baseline confidence in Addition & Subtraction (0–20).."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Addition & Subtraction (0–20) Supplemental Check in notes but not in timed checks."
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
          "id": "basic-math-k2-u1-external-supp-quiz-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Addition & Subtraction (0–20) Supplemental Check."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Build baseline confidence in Addition & Subtraction (0–20).",
        "Apply one core Mathematics strategy for K2."
      ],
      "chunks": [
        {
          "id": "basic-math-k2-u1-external-supp-quiz-chunk-intro",
          "title": "Addition & Subtraction (0–20) Supplemental Check Overview",
          "content": "Reinforce core Mathematics concepts in Addition & Subtraction (0–20).",
          "kind": "concept"
        },
        {
          "id": "basic-math-k2-u1-external-supp-quiz-chunk-recap",
          "title": "Quick Recap",
          "content": "Summarize one key idea and plan one next step.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-k2-u1-external-supp-quiz-card-1",
          "front": "What is one key idea in Addition & Subtraction (0–20)?",
          "back": "Build baseline confidence in Addition & Subtraction (0–20)."
        },
        {
          "id": "basic-math-k2-u1-external-supp-quiz-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core Mathematics strategy for K2."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Addition & Subtraction (0–20) Supplemental Check\" in \"Mathematics\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Addition & Subtraction (0–20) Supplemental Check\" (Mathematics, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Addition & Subtraction (0–20) Supplemental Check\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Addition & Subtraction (0–20) Supplemental Check\" (Mathematics, grade band K2)."
      },
      "external": {
        "sourceLessonId": "basic-math-k2-u1-external-supp-quiz",
        "order": 3,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-k2-u1-external-supp-seq-04",
      "title": "Addition & Subtraction (0–20) Concept Walkthrough 4: Multi Step Strategy",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-04-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Addition & Subtraction (0–20) Concept Walkthrough 4: Multi Step Strategy."
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
          "id": "basic-math-k2-u1-external-supp-seq-04-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "Model the problem with a visual or equation before solving.",
          "kind": "concept"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-04-chunk-practice",
          "title": "Guided Practice",
          "content": "Solve one guided item, then one independent item with the same pattern.",
          "kind": "practice"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-04-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying multi-step strategy, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-04-chunk-recap",
          "title": "Quick Recap",
          "content": "Review multi-step strategy, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-04-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Addition & Subtraction (0–20)."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-04-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-04-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-04-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Addition & Subtraction (0–20) Concept Walkthrough 4: Multi Step Strategy\" in \"Mathematics\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Addition & Subtraction (0–20) Concept Walkthrough 4: Multi Step Strategy\" (Mathematics, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Addition & Subtraction (0–20) Concept Walkthrough 4: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Addition & Subtraction (0–20) Concept Walkthrough 4: Multi Step Strategy\" (Mathematics, grade band K2)."
      },
      "external": {
        "sourceLessonId": "basic-math-k2-u1-external-generated-cycle-4",
        "order": 4,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-k2-u1-external-supp-seq-05",
      "title": "Addition & Subtraction (0–20) Guided Practice Lab 5: Error Check Routines",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-05-ia1",
          "type": "drag_and_drop",
          "title": "Addition & Subtraction (0–20) Guided Practice Lab 5: Error Check Routines Learning Flow",
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
          "id": "basic-math-k2-u1-external-supp-seq-05-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Addition & Subtraction (0–20) Guided Practice Lab 5: Error Check Routines."
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
          "id": "basic-math-k2-u1-external-supp-seq-05-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "Name the operation and explain why it fits.",
          "kind": "concept"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-05-chunk-practice",
          "title": "Guided Practice",
          "content": "Use a short checklist: plan, solve, verify.",
          "kind": "practice"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-05-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying error-check routines, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-05-chunk-recap",
          "title": "Quick Recap",
          "content": "Review error-check routines, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-05-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Addition & Subtraction (0–20)."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-05-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-05-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-05-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Addition & Subtraction (0–20) Guided Practice Lab 5: Error Check Routines\" in \"Mathematics\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Addition & Subtraction (0–20) Guided Practice Lab 5: Error Check Routines\" (Mathematics, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Addition & Subtraction (0–20) Guided Practice Lab 5: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Addition & Subtraction (0–20) Guided Practice Lab 5: Error Check Routines\" (Mathematics, grade band K2)."
      },
      "external": {
        "sourceLessonId": "basic-math-k2-u1-external-generated-cycle-5",
        "order": 5,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-k2-u1-external-supp-seq-06",
      "title": "Addition & Subtraction (0–20) Checkpoint Quiz 6: Number Sense",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-06-q1",
          "text": "Which option best summarizes Addition & Subtraction (0–20) Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-k2-u1-external-skill-addition-subtraction-0-20-checkpoint-quiz-6-number-sense-summary",
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
          "id": "basic-math-k2-u1-external-supp-seq-06-q2",
          "text": "Which response shows correct application of Addition & Subtraction (0–20) Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-k2-u1-external-skill-addition-subtraction-0-20-checkpoint-quiz-6-number-sense-apply",
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
          "id": "basic-math-k2-u1-external-supp-seq-06-q3",
          "text": "Why is review important after learning Addition & Subtraction (0–20) Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-k2-u1-external-skill-addition-subtraction-0-20-checkpoint-quiz-6-number-sense-review",
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
          "id": "basic-math-k2-u1-external-supp-seq-06-ia1",
          "type": "matching_pairs",
          "title": "Addition & Subtraction (0–20) Checkpoint Quiz 6: Number Sense Error Match",
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
                "label": "I understand Addition & Subtraction (0–20) Checkpoint Quiz 6: Number Sense in notes but not in timed checks."
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
          "id": "basic-math-k2-u1-external-supp-seq-06-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Addition & Subtraction (0–20) Checkpoint Quiz 6: Number Sense."
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
          "id": "basic-math-k2-u1-external-supp-seq-06-chunk-intro",
          "title": "Number Sense Intro",
          "content": "Check units, signs, and reasonableness before finalizing.",
          "kind": "concept"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-06-chunk-practice",
          "title": "Guided Practice",
          "content": "Compare two strategies and choose the more reliable one.",
          "kind": "practice"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-06-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying number sense, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-06-chunk-recap",
          "title": "Quick Recap",
          "content": "Review number sense, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-06-card-1",
          "front": "What is number sense?",
          "back": "It is a key Mathematics idea in Addition & Subtraction (0–20)."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-06-card-2",
          "front": "How can I practice number sense?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-06-card-3",
          "front": "What should I review next?",
          "back": "Review number sense, then set one clear improvement target."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-06-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Addition & Subtraction (0–20) Checkpoint Quiz 6: Number Sense\" in \"Mathematics\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Addition & Subtraction (0–20) Checkpoint Quiz 6: Number Sense\" (Mathematics, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Addition & Subtraction (0–20) Checkpoint Quiz 6: Number Sense\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Addition & Subtraction (0–20) Checkpoint Quiz 6: Number Sense\" (Mathematics, grade band K2)."
      },
      "external": {
        "sourceLessonId": "basic-math-k2-u1-external-generated-cycle-6",
        "order": 6,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-k2-u1-external-supp-seq-07",
      "title": "Addition & Subtraction (0–20) Concept Walkthrough 7: Equation Setup",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-07-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Addition & Subtraction (0–20) Concept Walkthrough 7: Equation Setup."
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
          "id": "basic-math-k2-u1-external-supp-seq-07-chunk-intro",
          "title": "Equation Setup Intro",
          "content": "Model the problem with a visual or equation before solving.",
          "kind": "concept"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-07-chunk-practice",
          "title": "Guided Practice",
          "content": "Solve one guided item, then one independent item with the same pattern.",
          "kind": "practice"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-07-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying equation setup, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-07-chunk-recap",
          "title": "Quick Recap",
          "content": "Review equation setup, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-07-card-1",
          "front": "What is equation setup?",
          "back": "It is a key Mathematics idea in Addition & Subtraction (0–20)."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-07-card-2",
          "front": "How can I practice equation setup?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-07-card-3",
          "front": "What should I review next?",
          "back": "Review equation setup, then set one clear improvement target."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-07-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Addition & Subtraction (0–20) Concept Walkthrough 7: Equation Setup\" in \"Mathematics\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Addition & Subtraction (0–20) Concept Walkthrough 7: Equation Setup\" (Mathematics, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Addition & Subtraction (0–20) Concept Walkthrough 7: Equation Setup\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Addition & Subtraction (0–20) Concept Walkthrough 7: Equation Setup\" (Mathematics, grade band K2)."
      },
      "external": {
        "sourceLessonId": "basic-math-k2-u1-external-generated-cycle-7",
        "order": 7,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-k2-u1-external-supp-seq-08",
      "title": "Addition & Subtraction (0–20) Guided Practice Lab 8: Fraction Reasoning",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-08-ia1",
          "type": "drag_and_drop",
          "title": "Addition & Subtraction (0–20) Guided Practice Lab 8: Fraction Reasoning Learning Flow",
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
          "id": "basic-math-k2-u1-external-supp-seq-08-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Addition & Subtraction (0–20) Guided Practice Lab 8: Fraction Reasoning."
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
          "id": "basic-math-k2-u1-external-supp-seq-08-chunk-intro",
          "title": "Fraction Reasoning Intro",
          "content": "Name the operation and explain why it fits.",
          "kind": "concept"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-08-chunk-practice",
          "title": "Guided Practice",
          "content": "Use a short checklist: plan, solve, verify.",
          "kind": "practice"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-08-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying fraction reasoning, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-08-chunk-recap",
          "title": "Quick Recap",
          "content": "Review fraction reasoning, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-08-card-1",
          "front": "What is fraction reasoning?",
          "back": "It is a key Mathematics idea in Addition & Subtraction (0–20)."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-08-card-2",
          "front": "How can I practice fraction reasoning?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-08-card-3",
          "front": "What should I review next?",
          "back": "Review fraction reasoning, then set one clear improvement target."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-08-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Addition & Subtraction (0–20) Guided Practice Lab 8: Fraction Reasoning\" in \"Mathematics\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Addition & Subtraction (0–20) Guided Practice Lab 8: Fraction Reasoning\" (Mathematics, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Addition & Subtraction (0–20) Guided Practice Lab 8: Fraction Reasoning\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Addition & Subtraction (0–20) Guided Practice Lab 8: Fraction Reasoning\" (Mathematics, grade band K2)."
      },
      "external": {
        "sourceLessonId": "basic-math-k2-u1-external-generated-cycle-8",
        "order": 8,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-k2-u1-external-supp-seq-09",
      "title": "Addition & Subtraction (0–20) Checkpoint Quiz 9: Multi Step Strategy",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-09-q1",
          "text": "Which option best summarizes Addition & Subtraction (0–20) Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-k2-u1-external-skill-addition-subtraction-0-20-checkpoint-quiz-9-multi-step-strategy-summary",
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
          "id": "basic-math-k2-u1-external-supp-seq-09-q2",
          "text": "Which response shows correct application of Addition & Subtraction (0–20) Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-k2-u1-external-skill-addition-subtraction-0-20-checkpoint-quiz-9-multi-step-strategy-apply",
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
          "id": "basic-math-k2-u1-external-supp-seq-09-q3",
          "text": "Why is review important after learning Addition & Subtraction (0–20) Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-k2-u1-external-skill-addition-subtraction-0-20-checkpoint-quiz-9-multi-step-strategy-review",
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
          "id": "basic-math-k2-u1-external-supp-seq-09-ia1",
          "type": "matching_pairs",
          "title": "Addition & Subtraction (0–20) Checkpoint Quiz 9: Multi Step Strategy Error Match",
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
                "label": "I understand Addition & Subtraction (0–20) Checkpoint Quiz 9: Multi Step Strategy in notes but not in timed checks."
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
          "id": "basic-math-k2-u1-external-supp-seq-09-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Addition & Subtraction (0–20) Checkpoint Quiz 9: Multi Step Strategy."
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
          "id": "basic-math-k2-u1-external-supp-seq-09-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "Check units, signs, and reasonableness before finalizing.",
          "kind": "concept"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-09-chunk-practice",
          "title": "Guided Practice",
          "content": "Compare two strategies and choose the more reliable one.",
          "kind": "practice"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-09-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying multi-step strategy, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-09-chunk-recap",
          "title": "Quick Recap",
          "content": "Review multi-step strategy, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-09-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Addition & Subtraction (0–20)."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-09-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-09-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-09-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Addition & Subtraction (0–20) Checkpoint Quiz 9: Multi Step Strategy\" in \"Mathematics\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Addition & Subtraction (0–20) Checkpoint Quiz 9: Multi Step Strategy\" (Mathematics, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Addition & Subtraction (0–20) Checkpoint Quiz 9: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Addition & Subtraction (0–20) Checkpoint Quiz 9: Multi Step Strategy\" (Mathematics, grade band K2)."
      },
      "external": {
        "sourceLessonId": "basic-math-k2-u1-external-generated-cycle-9",
        "order": 9,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-k2-u1-external-supp-seq-10",
      "title": "Addition & Subtraction (0–20) Concept Walkthrough 10: Error Check Routines",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-10-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Addition & Subtraction (0–20) Concept Walkthrough 10: Error Check Routines."
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
          "id": "basic-math-k2-u1-external-supp-seq-10-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "Model the problem with a visual or equation before solving.",
          "kind": "concept"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-10-chunk-practice",
          "title": "Guided Practice",
          "content": "Solve one guided item, then one independent item with the same pattern.",
          "kind": "practice"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-10-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying error-check routines, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-10-chunk-recap",
          "title": "Quick Recap",
          "content": "Review error-check routines, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-10-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Addition & Subtraction (0–20)."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-10-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-10-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-10-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Addition & Subtraction (0–20) Concept Walkthrough 10: Error Check Routines\" in \"Mathematics\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Addition & Subtraction (0–20) Concept Walkthrough 10: Error Check Routines\" (Mathematics, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Addition & Subtraction (0–20) Concept Walkthrough 10: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Addition & Subtraction (0–20) Concept Walkthrough 10: Error Check Routines\" (Mathematics, grade band K2)."
      },
      "external": {
        "sourceLessonId": "basic-math-k2-u1-external-generated-cycle-10",
        "order": 10,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-k2-u1-external-supp-seq-11",
      "title": "Addition & Subtraction (0–20) Guided Practice Lab 11: Number Sense",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-11-ia1",
          "type": "drag_and_drop",
          "title": "Addition & Subtraction (0–20) Guided Practice Lab 11: Number Sense Learning Flow",
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
          "id": "basic-math-k2-u1-external-supp-seq-11-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Addition & Subtraction (0–20) Guided Practice Lab 11: Number Sense."
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
          "id": "basic-math-k2-u1-external-supp-seq-11-chunk-intro",
          "title": "Number Sense Intro",
          "content": "Name the operation and explain why it fits.",
          "kind": "concept"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-11-chunk-practice",
          "title": "Guided Practice",
          "content": "Use a short checklist: plan, solve, verify.",
          "kind": "practice"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-11-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying number sense, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-11-chunk-recap",
          "title": "Quick Recap",
          "content": "Review number sense, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-11-card-1",
          "front": "What is number sense?",
          "back": "It is a key Mathematics idea in Addition & Subtraction (0–20)."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-11-card-2",
          "front": "How can I practice number sense?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-11-card-3",
          "front": "What should I review next?",
          "back": "Review number sense, then set one clear improvement target."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-11-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Addition & Subtraction (0–20) Guided Practice Lab 11: Number Sense\" in \"Mathematics\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Addition & Subtraction (0–20) Guided Practice Lab 11: Number Sense\" (Mathematics, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Addition & Subtraction (0–20) Guided Practice Lab 11: Number Sense\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Addition & Subtraction (0–20) Guided Practice Lab 11: Number Sense\" (Mathematics, grade band K2)."
      },
      "external": {
        "sourceLessonId": "basic-math-k2-u1-external-generated-cycle-11",
        "order": 11,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-k2-u1-external-supp-seq-12",
      "title": "Addition & Subtraction (0–20) Checkpoint Quiz 12: Equation Setup",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-12-q1",
          "text": "Which option best summarizes Addition & Subtraction (0–20) Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-k2-u1-external-skill-addition-subtraction-0-20-checkpoint-quiz-12-equation-setup-summary",
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
          "id": "basic-math-k2-u1-external-supp-seq-12-q2",
          "text": "Which response shows correct application of Addition & Subtraction (0–20) Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-k2-u1-external-skill-addition-subtraction-0-20-checkpoint-quiz-12-equation-setup-apply",
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
          "id": "basic-math-k2-u1-external-supp-seq-12-q3",
          "text": "Why is review important after learning Addition & Subtraction (0–20) Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-k2-u1-external-skill-addition-subtraction-0-20-checkpoint-quiz-12-equation-setup-review",
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
          "id": "basic-math-k2-u1-external-supp-seq-12-ia1",
          "type": "matching_pairs",
          "title": "Addition & Subtraction (0–20) Checkpoint Quiz 12: Equation Setup Error Match",
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
                "label": "I understand Addition & Subtraction (0–20) Checkpoint Quiz 12: Equation Setup in notes but not in timed checks."
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
          "id": "basic-math-k2-u1-external-supp-seq-12-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Addition & Subtraction (0–20) Checkpoint Quiz 12: Equation Setup."
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
          "id": "basic-math-k2-u1-external-supp-seq-12-chunk-intro",
          "title": "Equation Setup Intro",
          "content": "Check units, signs, and reasonableness before finalizing.",
          "kind": "concept"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-12-chunk-practice",
          "title": "Guided Practice",
          "content": "Compare two strategies and choose the more reliable one.",
          "kind": "practice"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-12-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying equation setup, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-12-chunk-recap",
          "title": "Quick Recap",
          "content": "Review equation setup, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-12-card-1",
          "front": "What is equation setup?",
          "back": "It is a key Mathematics idea in Addition & Subtraction (0–20)."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-12-card-2",
          "front": "How can I practice equation setup?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-12-card-3",
          "front": "What should I review next?",
          "back": "Review equation setup, then set one clear improvement target."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-12-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Addition & Subtraction (0–20) Checkpoint Quiz 12: Equation Setup\" in \"Mathematics\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Addition & Subtraction (0–20) Checkpoint Quiz 12: Equation Setup\" (Mathematics, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Addition & Subtraction (0–20) Checkpoint Quiz 12: Equation Setup\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Addition & Subtraction (0–20) Checkpoint Quiz 12: Equation Setup\" (Mathematics, grade band K2)."
      },
      "external": {
        "sourceLessonId": "basic-math-k2-u1-external-generated-cycle-12",
        "order": 12,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-k2-u1-external-supp-seq-13",
      "title": "Addition & Subtraction (0–20) Concept Walkthrough 13: Fraction Reasoning",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-13-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Addition & Subtraction (0–20) Concept Walkthrough 13: Fraction Reasoning."
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
          "id": "basic-math-k2-u1-external-supp-seq-13-chunk-intro",
          "title": "Fraction Reasoning Intro",
          "content": "Model the problem with a visual or equation before solving.",
          "kind": "concept"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-13-chunk-practice",
          "title": "Guided Practice",
          "content": "Solve one guided item, then one independent item with the same pattern.",
          "kind": "practice"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-13-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying fraction reasoning, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-13-chunk-recap",
          "title": "Quick Recap",
          "content": "Review fraction reasoning, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-13-card-1",
          "front": "What is fraction reasoning?",
          "back": "It is a key Mathematics idea in Addition & Subtraction (0–20)."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-13-card-2",
          "front": "How can I practice fraction reasoning?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-13-card-3",
          "front": "What should I review next?",
          "back": "Review fraction reasoning, then set one clear improvement target."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-13-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Addition & Subtraction (0–20) Concept Walkthrough 13: Fraction Reasoning\" in \"Mathematics\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Addition & Subtraction (0–20) Concept Walkthrough 13: Fraction Reasoning\" (Mathematics, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Addition & Subtraction (0–20) Concept Walkthrough 13: Fraction Reasoning\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Addition & Subtraction (0–20) Concept Walkthrough 13: Fraction Reasoning\" (Mathematics, grade band K2)."
      },
      "external": {
        "sourceLessonId": "basic-math-k2-u1-external-generated-cycle-13",
        "order": 13,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-k2-u1-external-supp-seq-14",
      "title": "Addition & Subtraction (0–20) Guided Practice Lab 14: Multi Step Strategy",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-14-ia1",
          "type": "drag_and_drop",
          "title": "Addition & Subtraction (0–20) Guided Practice Lab 14: Multi Step Strategy Learning Flow",
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
          "id": "basic-math-k2-u1-external-supp-seq-14-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Addition & Subtraction (0–20) Guided Practice Lab 14: Multi Step Strategy."
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
          "id": "basic-math-k2-u1-external-supp-seq-14-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "Name the operation and explain why it fits.",
          "kind": "concept"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-14-chunk-practice",
          "title": "Guided Practice",
          "content": "Use a short checklist: plan, solve, verify.",
          "kind": "practice"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-14-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying multi-step strategy, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-14-chunk-recap",
          "title": "Quick Recap",
          "content": "Review multi-step strategy, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-14-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Addition & Subtraction (0–20)."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-14-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-14-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-14-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Addition & Subtraction (0–20) Guided Practice Lab 14: Multi Step Strategy\" in \"Mathematics\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Addition & Subtraction (0–20) Guided Practice Lab 14: Multi Step Strategy\" (Mathematics, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Addition & Subtraction (0–20) Guided Practice Lab 14: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Addition & Subtraction (0–20) Guided Practice Lab 14: Multi Step Strategy\" (Mathematics, grade band K2)."
      },
      "external": {
        "sourceLessonId": "basic-math-k2-u1-external-generated-cycle-14",
        "order": 14,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-k2-u1-external-supp-seq-15",
      "title": "Addition & Subtraction (0–20) Checkpoint Quiz 15: Error Check Routines",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-15-q1",
          "text": "Which option best summarizes Addition & Subtraction (0–20) Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-k2-u1-external-skill-addition-subtraction-0-20-checkpoint-quiz-15-error-check-routines-summary",
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
          "id": "basic-math-k2-u1-external-supp-seq-15-q2",
          "text": "Which response shows correct application of Addition & Subtraction (0–20) Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-k2-u1-external-skill-addition-subtraction-0-20-checkpoint-quiz-15-error-check-routines-apply",
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
          "id": "basic-math-k2-u1-external-supp-seq-15-q3",
          "text": "Why is review important after learning Addition & Subtraction (0–20) Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-k2-u1-external-skill-addition-subtraction-0-20-checkpoint-quiz-15-error-check-routines-review",
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
          "id": "basic-math-k2-u1-external-supp-seq-15-ia1",
          "type": "matching_pairs",
          "title": "Addition & Subtraction (0–20) Checkpoint Quiz 15: Error Check Routines Error Match",
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
                "label": "I understand Addition & Subtraction (0–20) Checkpoint Quiz 15: Error Check Routines in notes but not in timed checks."
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
          "id": "basic-math-k2-u1-external-supp-seq-15-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Addition & Subtraction (0–20) Checkpoint Quiz 15: Error Check Routines."
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
          "id": "basic-math-k2-u1-external-supp-seq-15-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "Check units, signs, and reasonableness before finalizing.",
          "kind": "concept"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-15-chunk-practice",
          "title": "Guided Practice",
          "content": "Compare two strategies and choose the more reliable one.",
          "kind": "practice"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-15-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying error-check routines, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-15-chunk-recap",
          "title": "Quick Recap",
          "content": "Review error-check routines, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-k2-u1-external-supp-seq-15-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Addition & Subtraction (0–20)."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-15-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-15-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-k2-u1-external-supp-seq-15-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Addition & Subtraction (0–20) Checkpoint Quiz 15: Error Check Routines\" in \"Mathematics\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Addition & Subtraction (0–20) Checkpoint Quiz 15: Error Check Routines\" (Mathematics, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Addition & Subtraction (0–20) Checkpoint Quiz 15: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Addition & Subtraction (0–20) Checkpoint Quiz 15: Error Check Routines\" (Mathematics, grade band K2)."
      },
      "external": {
        "sourceLessonId": "basic-math-k2-u1-external-generated-cycle-15",
        "order": 15,
        "generatedSupplement": true
      }
    }
  ]
};
