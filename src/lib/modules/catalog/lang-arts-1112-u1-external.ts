import type { LearningModule } from "@/lib/modules/types";

export const LangArts1112U1ExternalModule: LearningModule = {
  "id": "lang-arts-1112-u1-external",
  "title": "AP Literature & Research Writing",
  "description": "Language Arts unit for 11–12 imported from external JSX curriculum.",
  "subject": "Language Arts",
  "tags": [
    "external-ai",
    "curriculum-import",
    "grade-1112"
  ],
  "minAge": 16,
  "maxAge": 18,
  "version": "external-1.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Explain The Information Landscape.",
    "Explain The CRAAP Test — Currency.",
    "Explain CRAAP: Relevance, Authority, Accuracy.",
    "Build baseline confidence in AP Literature & Research Writing.",
    "Apply one core Language Arts strategy for 1112.",
    "Explain paragraph structure using age-appropriate vocabulary.",
    "Apply paragraph structure in one guided Language Arts task.",
    "Identify one correction step for the next attempt."
  ],
  "gradeBand": "1112",
  "metadata": {
    "source": "../External_AI_Agents/lesson_platform (1).jsx",
    "sourceUnitId": "lang-arts-1112-u1",
    "sourceUnitIdCanonical": "lang-arts-1112-u1",
    "sourceUnitIdRaw": "lang_arts-1112-u1",
    "importedAt": "2026-02-25T02:03:30.430Z"
  },
  "external": {
    "unitOrder": 4,
    "estimatedHours": null,
    "prerequisites": []
  },
  "lessons": [
    {
      "id": "lang-arts-1112-u1-1",
      "title": "Scholarly Research & Source Evaluation (CRAAP Test) (1112)",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "lang-arts-1112-u1-1-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Scholarly Research & Source Evaluation (CRAAP Test) (1112)."
        }
      ],
      "objectives": [
        "Explain The Information Landscape.",
        "Explain The CRAAP Test — Currency.",
        "Explain CRAAP: Relevance, Authority, Accuracy."
      ],
      "chunks": [
        {
          "id": "lang-arts-1112-u1-1-chunk-1",
          "title": "The Information Landscape",
          "content": "In the digital age, information is everywhere — but not all information is equal. Scholars, students, and professionals must evaluate sources CRITICALLY before using them in academic work. Poor sources undermine arguments and credibility."
        },
        {
          "id": "lang-arts-1112-u1-1-chunk-2",
          "title": "The CRAAP Test — Currency",
          "content": "C = CURRENCY: How recent is the information?\n• When was it published or last updated?\n• Is the information outdated for your topic?\n• RULE: Science/medicine topics need sources from the last 5 years. Historical topics may use older sources.\n\nAsk: Is this information still accurate today, or has the field moved on?"
        },
        {
          "id": "lang-arts-1112-u1-1-chunk-3",
          "title": "CRAAP: Relevance, Authority, Accuracy",
          "content": "R = RELEVANCE: Does this source address your specific research question? Who is the intended audience?\n\nA = AUTHORITY: Who is the AUTHOR? What are their credentials? What is the PUBLISHER? (Academic press = higher credibility than personal blog)\n\nA = ACCURACY: Are claims supported by EVIDENCE? Are there citations? Can the information be verified in other sources? Is there peer review?"
        },
        {
          "id": "lang-arts-1112-u1-1-chunk-4",
          "title": "CRAAP: Purpose + MLA/APA Citation",
          "content": "P = PURPOSE: WHY was this created? To inform, persuade, sell, entertain, or mislead? Check for bias.\n\nCitation Formats:\nMLA: Author Last, First. 'Title.' Journal, vol. X, no. Y, Year, pp. Z–Z.\nAPA: Author, A. A. (Year). Title of article. Journal Name, volume(issue), page–page.\n\nPrimary vs. Secondary Sources: Primary = original research/firsthand accounts. Secondary = analyzes primary sources."
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-1112-u1-1-card-1",
          "front": "CRAAP stands for...",
          "back": "Currency, Relevance, Authority, Accuracy, Purpose"
        },
        {
          "id": "lang-arts-1112-u1-1-card-2",
          "front": "Currency in source evaluation",
          "back": "How RECENT is the information? Is it still current for your topic?"
        },
        {
          "id": "lang-arts-1112-u1-1-card-3",
          "front": "Authority in source evaluation",
          "back": "WHO wrote it? What are their CREDENTIALS? Who published it?"
        },
        {
          "id": "lang-arts-1112-u1-1-card-4",
          "front": "Accuracy in source evaluation",
          "back": "Is it evidence-based, peer-reviewed, and verifiable in other sources?"
        },
        {
          "id": "lang-arts-1112-u1-1-card-5",
          "front": "Primary source",
          "back": "Original, firsthand research or account (journal article, diary, raw data)"
        },
        {
          "id": "lang-arts-1112-u1-1-card-6",
          "front": "Secondary source",
          "back": "Analyzes or interprets primary sources (textbooks, review articles)"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: University library setting. A student sits at a laptop surrounded by floating digital cards representing different sources — academic journal, Wikipedia article, personal blog, news article, government website. Each card gets evaluated against the CRAAP criteria, which appear as a checklist. Strong sources glow green; weak ones fade or turn red. Sophisticated, academic tone. Ages 16-18. Duration: 90 seconds.",
        "seedanceAnimation": "Lottie animation: Five acronym letters C-R-A-A-P appear one by one with corresponding icons (calendar, target, badge, checkmark, compass). Each letter expands to reveal its full word. Clean, academic design with charcoal and gold palette. 14-second animation.",
        "lessonImage": "Create a clean educational illustration for \"Scholarly Research & Source Evaluation (CRAAP Test) (1112)\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Scholarly Research & Source Evaluation (CRAAP Test) (1112)\" (Language Arts, grade band 1112)."
      },
      "localized": {
        "title": {
          "en": "Scholarly Research & Source Evaluation (CRAAP Test)"
        },
        "concept": {
          "en": "Scholarly Research & Source Evaluation (CRAAP Test)"
        }
      },
      "external": {
        "sourceLessonId": "lang_arts-1112-u1-1",
        "order": 1
      }
    },
    {
      "id": "lang-arts-1112-u1-external-supp-interactive",
      "title": "AP Literature & Research Writing Supplemental Practice",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "lang-arts-1112-u1-external-supp-interactive-ia1",
          "type": "drag_and_drop",
          "title": "AP Literature & Research Writing Supplemental Practice Learning Flow",
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
                "label": "Set a goal for Build baseline confidence in AP Literature & Research Writing..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Rewrite one sentence to improve precision and tone.",
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
          "id": "lang-arts-1112-u1-external-supp-interactive-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for AP Literature & Research Writing Supplemental Practice."
        }
      ],
      "metadata": {
        "prompts": [
          "Build baseline confidence in AP Literature & Research Writing.",
          "Apply one core Language Arts strategy for 1112."
        ]
      },
      "objectives": [
        "Build baseline confidence in AP Literature & Research Writing.",
        "Apply one core Language Arts strategy for 1112."
      ],
      "chunks": [
        {
          "id": "lang-arts-1112-u1-external-supp-interactive-chunk-intro",
          "title": "AP Literature & Research Writing Supplemental Practice Overview",
          "content": "Reinforce core Language Arts concepts in AP Literature & Research Writing.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-interactive-chunk-recap",
          "title": "Quick Recap",
          "content": "Summarize one key idea and plan one next step.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-1112-u1-external-supp-interactive-card-1",
          "front": "What is one key idea in AP Literature & Research Writing?",
          "back": "Build baseline confidence in AP Literature & Research Writing."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-interactive-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core Language Arts strategy for 1112."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"AP Literature & Research Writing Supplemental Practice\" in \"Language Arts\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"AP Literature & Research Writing Supplemental Practice\" (Language Arts, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"AP Literature & Research Writing Supplemental Practice\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"AP Literature & Research Writing Supplemental Practice\" (Language Arts, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "lang-arts-1112-u1-external-supp-interactive",
        "order": 2,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-1112-u1-external-supp-quiz",
      "title": "AP Literature & Research Writing Supplemental Check",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-1112-u1-external-supp-quiz-q1",
          "text": "Which option best summarizes AP Literature & Research Writing Supplemental Check?",
          "skillId": "lang-arts-1112-u1-external-skill-ap-literature-research-writing-supplemental-check-summary",
          "options": [
            {
              "id": "a",
              "text": "Build baseline confidence in AP Literature & Research Writing."
            },
            {
              "id": "b",
              "text": "A statement with no text evidence."
            },
            {
              "id": "c",
              "text": "A summary that adds ideas not in the lesson."
            },
            {
              "id": "d",
              "text": "A response that repeats words but misses meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-quiz-q2",
          "text": "Which response shows correct application of AP Literature & Research Writing Supplemental Check?",
          "skillId": "lang-arts-1112-u1-external-skill-ap-literature-research-writing-supplemental-check-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply one core Language Arts strategy for 1112."
            },
            {
              "id": "b",
              "text": "Quote text without explaining relevance."
            },
            {
              "id": "c",
              "text": "Use opinion only with no supporting detail."
            },
            {
              "id": "d",
              "text": "Change the topic instead of answering the prompt."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-quiz-q3",
          "text": "Why is review important after learning AP Literature & Research Writing Supplemental Check?",
          "skillId": "lang-arts-1112-u1-external-skill-ap-literature-research-writing-supplemental-check-review",
          "options": [
            {
              "id": "a",
              "text": "Build a short paragraph with claim, evidence, and explanation."
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
          "id": "lang-arts-1112-u1-external-supp-quiz-ia1",
          "type": "matching_pairs",
          "title": "AP Literature & Research Writing Supplemental Check Error Match",
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
                "label": "I still mix up Build baseline confidence in AP Literature & Research Writing.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand AP Literature & Research Writing Supplemental Check in notes but not in timed checks."
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
          "id": "lang-arts-1112-u1-external-supp-quiz-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for AP Literature & Research Writing Supplemental Check."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Build baseline confidence in AP Literature & Research Writing.",
        "Apply one core Language Arts strategy for 1112."
      ],
      "chunks": [
        {
          "id": "lang-arts-1112-u1-external-supp-quiz-chunk-intro",
          "title": "AP Literature & Research Writing Supplemental Check Overview",
          "content": "Reinforce core Language Arts concepts in AP Literature & Research Writing.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-quiz-chunk-recap",
          "title": "Quick Recap",
          "content": "Summarize one key idea and plan one next step.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-1112-u1-external-supp-quiz-card-1",
          "front": "What is one key idea in AP Literature & Research Writing?",
          "back": "Build baseline confidence in AP Literature & Research Writing."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-quiz-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core Language Arts strategy for 1112."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"AP Literature & Research Writing Supplemental Check\" in \"Language Arts\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"AP Literature & Research Writing Supplemental Check\" (Language Arts, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"AP Literature & Research Writing Supplemental Check\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"AP Literature & Research Writing Supplemental Check\" (Language Arts, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "lang-arts-1112-u1-external-supp-quiz",
        "order": 3,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-1112-u1-external-supp-seq-04",
      "title": "AP Literature & Research Writing Concept Walkthrough 4: Paragraph Structure",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-04-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for AP Literature & Research Writing Concept Walkthrough 4: Paragraph Structure."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain paragraph structure using age-appropriate vocabulary.",
        "Apply paragraph structure in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-04-chunk-intro",
          "title": "Paragraph Structure Intro",
          "content": "Read the prompt, then highlight key words and evidence lines.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-04-chunk-practice",
          "title": "Guided Practice",
          "content": "Annotate one short passage and summarize the main idea.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-04-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying paragraph structure, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-04-chunk-recap",
          "title": "Quick Recap",
          "content": "Review paragraph structure, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-04-card-1",
          "front": "What is paragraph structure?",
          "back": "It is a key Language Arts idea in AP Literature & Research Writing."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-04-card-2",
          "front": "How can I practice paragraph structure?",
          "back": "Annotate one short passage and summarize the main idea."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-04-card-3",
          "front": "What should I review next?",
          "back": "Review paragraph structure, then set one clear improvement target."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-04-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"AP Literature & Research Writing Concept Walkthrough 4: Paragraph Structure\" in \"Language Arts\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"AP Literature & Research Writing Concept Walkthrough 4: Paragraph Structure\" (Language Arts, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"AP Literature & Research Writing Concept Walkthrough 4: Paragraph Structure\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"AP Literature & Research Writing Concept Walkthrough 4: Paragraph Structure\" (Language Arts, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "lang-arts-1112-u1-external-generated-cycle-4",
        "order": 4,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-1112-u1-external-supp-seq-05",
      "title": "AP Literature & Research Writing Guided Practice Lab 5: Evidence Based Response",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-05-ia1",
          "type": "drag_and_drop",
          "title": "AP Literature & Research Writing Guided Practice Lab 5: Evidence Based Response Learning Flow",
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
                "label": "Set a goal for Explain evidence-based response using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Rewrite one sentence to improve precision and tone.",
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
          "id": "lang-arts-1112-u1-external-supp-seq-05-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for AP Literature & Research Writing Guided Practice Lab 5: Evidence Based Response."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain evidence-based response using age-appropriate vocabulary.",
          "Apply evidence-based response in one guided Language Arts task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain evidence-based response using age-appropriate vocabulary.",
        "Apply evidence-based response in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-05-chunk-intro",
          "title": "Evidence Based Response Intro",
          "content": "Use one clear claim and support it with text-based details.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-05-chunk-practice",
          "title": "Guided Practice",
          "content": "Rewrite one sentence to improve precision and tone.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-05-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying evidence-based response, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-05-chunk-recap",
          "title": "Quick Recap",
          "content": "Review evidence-based response, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-05-card-1",
          "front": "What is evidence-based response?",
          "back": "It is a key Language Arts idea in AP Literature & Research Writing."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-05-card-2",
          "front": "How can I practice evidence-based response?",
          "back": "Rewrite one sentence to improve precision and tone."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-05-card-3",
          "front": "What should I review next?",
          "back": "Review evidence-based response, then set one clear improvement target."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-05-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"AP Literature & Research Writing Guided Practice Lab 5: Evidence Based Response\" in \"Language Arts\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"AP Literature & Research Writing Guided Practice Lab 5: Evidence Based Response\" (Language Arts, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"AP Literature & Research Writing Guided Practice Lab 5: Evidence Based Response\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"AP Literature & Research Writing Guided Practice Lab 5: Evidence Based Response\" (Language Arts, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "lang-arts-1112-u1-external-generated-cycle-5",
        "order": 5,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-1112-u1-external-supp-seq-06",
      "title": "AP Literature & Research Writing Checkpoint Quiz 6: Close Reading",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-06-q1",
          "text": "Which option best summarizes AP Literature & Research Writing Checkpoint Quiz 6: Close Reading?",
          "skillId": "lang-arts-1112-u1-external-skill-ap-literature-research-writing-checkpoint-quiz-6-close-reading-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain close reading using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A statement with no text evidence."
            },
            {
              "id": "c",
              "text": "A summary that adds ideas not in the lesson."
            },
            {
              "id": "d",
              "text": "A response that repeats words but misses meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-06-q2",
          "text": "Which response shows correct application of AP Literature & Research Writing Checkpoint Quiz 6: Close Reading?",
          "skillId": "lang-arts-1112-u1-external-skill-ap-literature-research-writing-checkpoint-quiz-6-close-reading-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply close reading in one guided Language Arts task."
            },
            {
              "id": "b",
              "text": "Quote text without explaining relevance."
            },
            {
              "id": "c",
              "text": "Use opinion only with no supporting detail."
            },
            {
              "id": "d",
              "text": "Change the topic instead of answering the prompt."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-06-q3",
          "text": "Why is review important after learning AP Literature & Research Writing Checkpoint Quiz 6: Close Reading?",
          "skillId": "lang-arts-1112-u1-external-skill-ap-literature-research-writing-checkpoint-quiz-6-close-reading-review",
          "options": [
            {
              "id": "a",
              "text": "Build a short paragraph with claim, evidence, and explanation."
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
          "id": "lang-arts-1112-u1-external-supp-seq-06-ia1",
          "type": "matching_pairs",
          "title": "AP Literature & Research Writing Checkpoint Quiz 6: Close Reading Error Match",
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
                "label": "I still mix up Explain close reading using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand AP Literature & Research Writing Checkpoint Quiz 6: Close Reading in notes but not in timed checks."
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
          "id": "lang-arts-1112-u1-external-supp-seq-06-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for AP Literature & Research Writing Checkpoint Quiz 6: Close Reading."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain close reading using age-appropriate vocabulary.",
        "Apply close reading in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-06-chunk-intro",
          "title": "Close Reading Intro",
          "content": "Revise for clarity, grammar, and transition flow.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-06-chunk-practice",
          "title": "Guided Practice",
          "content": "Build a short paragraph with claim, evidence, and explanation.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-06-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying close reading, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-06-chunk-recap",
          "title": "Quick Recap",
          "content": "Review close reading, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-06-card-1",
          "front": "What is close reading?",
          "back": "It is a key Language Arts idea in AP Literature & Research Writing."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-06-card-2",
          "front": "How can I practice close reading?",
          "back": "Build a short paragraph with claim, evidence, and explanation."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-06-card-3",
          "front": "What should I review next?",
          "back": "Review close reading, then set one clear improvement target."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-06-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"AP Literature & Research Writing Checkpoint Quiz 6: Close Reading\" in \"Language Arts\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"AP Literature & Research Writing Checkpoint Quiz 6: Close Reading\" (Language Arts, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"AP Literature & Research Writing Checkpoint Quiz 6: Close Reading\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"AP Literature & Research Writing Checkpoint Quiz 6: Close Reading\" (Language Arts, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "lang-arts-1112-u1-external-generated-cycle-6",
        "order": 6,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-1112-u1-external-supp-seq-07",
      "title": "AP Literature & Research Writing Concept Walkthrough 7: Vocabulary In Context",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-07-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for AP Literature & Research Writing Concept Walkthrough 7: Vocabulary In Context."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain vocabulary in context using age-appropriate vocabulary.",
        "Apply vocabulary in context in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-07-chunk-intro",
          "title": "Vocabulary In Context Intro",
          "content": "Read the prompt, then highlight key words and evidence lines.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-07-chunk-practice",
          "title": "Guided Practice",
          "content": "Annotate one short passage and summarize the main idea.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-07-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying vocabulary in context, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-07-chunk-recap",
          "title": "Quick Recap",
          "content": "Review vocabulary in context, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-07-card-1",
          "front": "What is vocabulary in context?",
          "back": "It is a key Language Arts idea in AP Literature & Research Writing."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-07-card-2",
          "front": "How can I practice vocabulary in context?",
          "back": "Annotate one short passage and summarize the main idea."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-07-card-3",
          "front": "What should I review next?",
          "back": "Review vocabulary in context, then set one clear improvement target."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-07-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"AP Literature & Research Writing Concept Walkthrough 7: Vocabulary In Context\" in \"Language Arts\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"AP Literature & Research Writing Concept Walkthrough 7: Vocabulary In Context\" (Language Arts, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"AP Literature & Research Writing Concept Walkthrough 7: Vocabulary In Context\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"AP Literature & Research Writing Concept Walkthrough 7: Vocabulary In Context\" (Language Arts, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "lang-arts-1112-u1-external-generated-cycle-7",
        "order": 7,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-1112-u1-external-supp-seq-08",
      "title": "AP Literature & Research Writing Guided Practice Lab 8: Sentence Revision",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-08-ia1",
          "type": "drag_and_drop",
          "title": "AP Literature & Research Writing Guided Practice Lab 8: Sentence Revision Learning Flow",
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
                "label": "Set a goal for Explain sentence revision using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Rewrite one sentence to improve precision and tone.",
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
          "id": "lang-arts-1112-u1-external-supp-seq-08-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for AP Literature & Research Writing Guided Practice Lab 8: Sentence Revision."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain sentence revision using age-appropriate vocabulary.",
          "Apply sentence revision in one guided Language Arts task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain sentence revision using age-appropriate vocabulary.",
        "Apply sentence revision in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-08-chunk-intro",
          "title": "Sentence Revision Intro",
          "content": "Use one clear claim and support it with text-based details.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-08-chunk-practice",
          "title": "Guided Practice",
          "content": "Rewrite one sentence to improve precision and tone.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-08-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying sentence revision, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-08-chunk-recap",
          "title": "Quick Recap",
          "content": "Review sentence revision, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-08-card-1",
          "front": "What is sentence revision?",
          "back": "It is a key Language Arts idea in AP Literature & Research Writing."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-08-card-2",
          "front": "How can I practice sentence revision?",
          "back": "Rewrite one sentence to improve precision and tone."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-08-card-3",
          "front": "What should I review next?",
          "back": "Review sentence revision, then set one clear improvement target."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-08-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"AP Literature & Research Writing Guided Practice Lab 8: Sentence Revision\" in \"Language Arts\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"AP Literature & Research Writing Guided Practice Lab 8: Sentence Revision\" (Language Arts, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"AP Literature & Research Writing Guided Practice Lab 8: Sentence Revision\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"AP Literature & Research Writing Guided Practice Lab 8: Sentence Revision\" (Language Arts, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "lang-arts-1112-u1-external-generated-cycle-8",
        "order": 8,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-1112-u1-external-supp-seq-09",
      "title": "AP Literature & Research Writing Checkpoint Quiz 9: Paragraph Structure",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-09-q1",
          "text": "Which option best summarizes AP Literature & Research Writing Checkpoint Quiz 9: Paragraph Structure?",
          "skillId": "lang-arts-1112-u1-external-skill-ap-literature-research-writing-checkpoint-quiz-9-paragraph-structure-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain paragraph structure using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A statement with no text evidence."
            },
            {
              "id": "c",
              "text": "A summary that adds ideas not in the lesson."
            },
            {
              "id": "d",
              "text": "A response that repeats words but misses meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-09-q2",
          "text": "Which response shows correct application of AP Literature & Research Writing Checkpoint Quiz 9: Paragraph Structure?",
          "skillId": "lang-arts-1112-u1-external-skill-ap-literature-research-writing-checkpoint-quiz-9-paragraph-structure-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply paragraph structure in one guided Language Arts task."
            },
            {
              "id": "b",
              "text": "Quote text without explaining relevance."
            },
            {
              "id": "c",
              "text": "Use opinion only with no supporting detail."
            },
            {
              "id": "d",
              "text": "Change the topic instead of answering the prompt."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-09-q3",
          "text": "Why is review important after learning AP Literature & Research Writing Checkpoint Quiz 9: Paragraph Structure?",
          "skillId": "lang-arts-1112-u1-external-skill-ap-literature-research-writing-checkpoint-quiz-9-paragraph-structure-review",
          "options": [
            {
              "id": "a",
              "text": "Build a short paragraph with claim, evidence, and explanation."
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
          "id": "lang-arts-1112-u1-external-supp-seq-09-ia1",
          "type": "matching_pairs",
          "title": "AP Literature & Research Writing Checkpoint Quiz 9: Paragraph Structure Error Match",
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
                "label": "I still mix up Explain paragraph structure using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand AP Literature & Research Writing Checkpoint Quiz 9: Paragraph Structure in notes but not in timed checks."
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
          "id": "lang-arts-1112-u1-external-supp-seq-09-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for AP Literature & Research Writing Checkpoint Quiz 9: Paragraph Structure."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain paragraph structure using age-appropriate vocabulary.",
        "Apply paragraph structure in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-09-chunk-intro",
          "title": "Paragraph Structure Intro",
          "content": "Revise for clarity, grammar, and transition flow.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-09-chunk-practice",
          "title": "Guided Practice",
          "content": "Build a short paragraph with claim, evidence, and explanation.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-09-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying paragraph structure, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-09-chunk-recap",
          "title": "Quick Recap",
          "content": "Review paragraph structure, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-09-card-1",
          "front": "What is paragraph structure?",
          "back": "It is a key Language Arts idea in AP Literature & Research Writing."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-09-card-2",
          "front": "How can I practice paragraph structure?",
          "back": "Build a short paragraph with claim, evidence, and explanation."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-09-card-3",
          "front": "What should I review next?",
          "back": "Review paragraph structure, then set one clear improvement target."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-09-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"AP Literature & Research Writing Checkpoint Quiz 9: Paragraph Structure\" in \"Language Arts\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"AP Literature & Research Writing Checkpoint Quiz 9: Paragraph Structure\" (Language Arts, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"AP Literature & Research Writing Checkpoint Quiz 9: Paragraph Structure\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"AP Literature & Research Writing Checkpoint Quiz 9: Paragraph Structure\" (Language Arts, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "lang-arts-1112-u1-external-generated-cycle-9",
        "order": 9,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-1112-u1-external-supp-seq-10",
      "title": "AP Literature & Research Writing Concept Walkthrough 10: Evidence Based Response",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-10-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for AP Literature & Research Writing Concept Walkthrough 10: Evidence Based Response."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain evidence-based response using age-appropriate vocabulary.",
        "Apply evidence-based response in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-10-chunk-intro",
          "title": "Evidence Based Response Intro",
          "content": "Read the prompt, then highlight key words and evidence lines.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-10-chunk-practice",
          "title": "Guided Practice",
          "content": "Annotate one short passage and summarize the main idea.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-10-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying evidence-based response, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-10-chunk-recap",
          "title": "Quick Recap",
          "content": "Review evidence-based response, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-10-card-1",
          "front": "What is evidence-based response?",
          "back": "It is a key Language Arts idea in AP Literature & Research Writing."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-10-card-2",
          "front": "How can I practice evidence-based response?",
          "back": "Annotate one short passage and summarize the main idea."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-10-card-3",
          "front": "What should I review next?",
          "back": "Review evidence-based response, then set one clear improvement target."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-10-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"AP Literature & Research Writing Concept Walkthrough 10: Evidence Based Response\" in \"Language Arts\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"AP Literature & Research Writing Concept Walkthrough 10: Evidence Based Response\" (Language Arts, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"AP Literature & Research Writing Concept Walkthrough 10: Evidence Based Response\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"AP Literature & Research Writing Concept Walkthrough 10: Evidence Based Response\" (Language Arts, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "lang-arts-1112-u1-external-generated-cycle-10",
        "order": 10,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-1112-u1-external-supp-seq-11",
      "title": "AP Literature & Research Writing Guided Practice Lab 11: Close Reading",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-11-ia1",
          "type": "drag_and_drop",
          "title": "AP Literature & Research Writing Guided Practice Lab 11: Close Reading Learning Flow",
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
                "label": "Set a goal for Explain close reading using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Rewrite one sentence to improve precision and tone.",
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
          "id": "lang-arts-1112-u1-external-supp-seq-11-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for AP Literature & Research Writing Guided Practice Lab 11: Close Reading."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain close reading using age-appropriate vocabulary.",
          "Apply close reading in one guided Language Arts task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain close reading using age-appropriate vocabulary.",
        "Apply close reading in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-11-chunk-intro",
          "title": "Close Reading Intro",
          "content": "Use one clear claim and support it with text-based details.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-11-chunk-practice",
          "title": "Guided Practice",
          "content": "Rewrite one sentence to improve precision and tone.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-11-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying close reading, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-11-chunk-recap",
          "title": "Quick Recap",
          "content": "Review close reading, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-11-card-1",
          "front": "What is close reading?",
          "back": "It is a key Language Arts idea in AP Literature & Research Writing."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-11-card-2",
          "front": "How can I practice close reading?",
          "back": "Rewrite one sentence to improve precision and tone."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-11-card-3",
          "front": "What should I review next?",
          "back": "Review close reading, then set one clear improvement target."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-11-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"AP Literature & Research Writing Guided Practice Lab 11: Close Reading\" in \"Language Arts\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"AP Literature & Research Writing Guided Practice Lab 11: Close Reading\" (Language Arts, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"AP Literature & Research Writing Guided Practice Lab 11: Close Reading\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"AP Literature & Research Writing Guided Practice Lab 11: Close Reading\" (Language Arts, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "lang-arts-1112-u1-external-generated-cycle-11",
        "order": 11,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-1112-u1-external-supp-seq-12",
      "title": "AP Literature & Research Writing Checkpoint Quiz 12: Vocabulary In Context",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-12-q1",
          "text": "Which option best summarizes AP Literature & Research Writing Checkpoint Quiz 12: Vocabulary In Context?",
          "skillId": "lang-arts-1112-u1-external-skill-ap-literature-research-writing-checkpoint-quiz-12-vocabulary-in-context-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain vocabulary in context using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A statement with no text evidence."
            },
            {
              "id": "c",
              "text": "A summary that adds ideas not in the lesson."
            },
            {
              "id": "d",
              "text": "A response that repeats words but misses meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-12-q2",
          "text": "Which response shows correct application of AP Literature & Research Writing Checkpoint Quiz 12: Vocabulary In Context?",
          "skillId": "lang-arts-1112-u1-external-skill-ap-literature-research-writing-checkpoint-quiz-12-vocabulary-in-context-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply vocabulary in context in one guided Language Arts task."
            },
            {
              "id": "b",
              "text": "Quote text without explaining relevance."
            },
            {
              "id": "c",
              "text": "Use opinion only with no supporting detail."
            },
            {
              "id": "d",
              "text": "Change the topic instead of answering the prompt."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-12-q3",
          "text": "Why is review important after learning AP Literature & Research Writing Checkpoint Quiz 12: Vocabulary In Context?",
          "skillId": "lang-arts-1112-u1-external-skill-ap-literature-research-writing-checkpoint-quiz-12-vocabulary-in-context-review",
          "options": [
            {
              "id": "a",
              "text": "Build a short paragraph with claim, evidence, and explanation."
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
          "id": "lang-arts-1112-u1-external-supp-seq-12-ia1",
          "type": "matching_pairs",
          "title": "AP Literature & Research Writing Checkpoint Quiz 12: Vocabulary In Context Error Match",
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
                "label": "I still mix up Explain vocabulary in context using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand AP Literature & Research Writing Checkpoint Quiz 12: Vocabulary In Context in notes but not in timed checks."
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
          "id": "lang-arts-1112-u1-external-supp-seq-12-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for AP Literature & Research Writing Checkpoint Quiz 12: Vocabulary In Context."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain vocabulary in context using age-appropriate vocabulary.",
        "Apply vocabulary in context in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-12-chunk-intro",
          "title": "Vocabulary In Context Intro",
          "content": "Revise for clarity, grammar, and transition flow.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-12-chunk-practice",
          "title": "Guided Practice",
          "content": "Build a short paragraph with claim, evidence, and explanation.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-12-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying vocabulary in context, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-12-chunk-recap",
          "title": "Quick Recap",
          "content": "Review vocabulary in context, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-12-card-1",
          "front": "What is vocabulary in context?",
          "back": "It is a key Language Arts idea in AP Literature & Research Writing."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-12-card-2",
          "front": "How can I practice vocabulary in context?",
          "back": "Build a short paragraph with claim, evidence, and explanation."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-12-card-3",
          "front": "What should I review next?",
          "back": "Review vocabulary in context, then set one clear improvement target."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-12-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"AP Literature & Research Writing Checkpoint Quiz 12: Vocabulary In Context\" in \"Language Arts\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"AP Literature & Research Writing Checkpoint Quiz 12: Vocabulary In Context\" (Language Arts, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"AP Literature & Research Writing Checkpoint Quiz 12: Vocabulary In Context\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"AP Literature & Research Writing Checkpoint Quiz 12: Vocabulary In Context\" (Language Arts, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "lang-arts-1112-u1-external-generated-cycle-12",
        "order": 12,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-1112-u1-external-supp-seq-13",
      "title": "AP Literature & Research Writing Concept Walkthrough 13: Sentence Revision",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-13-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for AP Literature & Research Writing Concept Walkthrough 13: Sentence Revision."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain sentence revision using age-appropriate vocabulary.",
        "Apply sentence revision in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-13-chunk-intro",
          "title": "Sentence Revision Intro",
          "content": "Read the prompt, then highlight key words and evidence lines.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-13-chunk-practice",
          "title": "Guided Practice",
          "content": "Annotate one short passage and summarize the main idea.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-13-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying sentence revision, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-13-chunk-recap",
          "title": "Quick Recap",
          "content": "Review sentence revision, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-13-card-1",
          "front": "What is sentence revision?",
          "back": "It is a key Language Arts idea in AP Literature & Research Writing."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-13-card-2",
          "front": "How can I practice sentence revision?",
          "back": "Annotate one short passage and summarize the main idea."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-13-card-3",
          "front": "What should I review next?",
          "back": "Review sentence revision, then set one clear improvement target."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-13-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"AP Literature & Research Writing Concept Walkthrough 13: Sentence Revision\" in \"Language Arts\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"AP Literature & Research Writing Concept Walkthrough 13: Sentence Revision\" (Language Arts, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"AP Literature & Research Writing Concept Walkthrough 13: Sentence Revision\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"AP Literature & Research Writing Concept Walkthrough 13: Sentence Revision\" (Language Arts, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "lang-arts-1112-u1-external-generated-cycle-13",
        "order": 13,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-1112-u1-external-supp-seq-14",
      "title": "AP Literature & Research Writing Guided Practice Lab 14: Paragraph Structure",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-14-ia1",
          "type": "drag_and_drop",
          "title": "AP Literature & Research Writing Guided Practice Lab 14: Paragraph Structure Learning Flow",
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
                "label": "Set a goal for Explain paragraph structure using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Rewrite one sentence to improve precision and tone.",
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
          "id": "lang-arts-1112-u1-external-supp-seq-14-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for AP Literature & Research Writing Guided Practice Lab 14: Paragraph Structure."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain paragraph structure using age-appropriate vocabulary.",
          "Apply paragraph structure in one guided Language Arts task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain paragraph structure using age-appropriate vocabulary.",
        "Apply paragraph structure in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-14-chunk-intro",
          "title": "Paragraph Structure Intro",
          "content": "Use one clear claim and support it with text-based details.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-14-chunk-practice",
          "title": "Guided Practice",
          "content": "Rewrite one sentence to improve precision and tone.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-14-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying paragraph structure, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-14-chunk-recap",
          "title": "Quick Recap",
          "content": "Review paragraph structure, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-14-card-1",
          "front": "What is paragraph structure?",
          "back": "It is a key Language Arts idea in AP Literature & Research Writing."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-14-card-2",
          "front": "How can I practice paragraph structure?",
          "back": "Rewrite one sentence to improve precision and tone."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-14-card-3",
          "front": "What should I review next?",
          "back": "Review paragraph structure, then set one clear improvement target."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-14-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"AP Literature & Research Writing Guided Practice Lab 14: Paragraph Structure\" in \"Language Arts\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"AP Literature & Research Writing Guided Practice Lab 14: Paragraph Structure\" (Language Arts, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"AP Literature & Research Writing Guided Practice Lab 14: Paragraph Structure\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"AP Literature & Research Writing Guided Practice Lab 14: Paragraph Structure\" (Language Arts, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "lang-arts-1112-u1-external-generated-cycle-14",
        "order": 14,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-1112-u1-external-supp-seq-15",
      "title": "AP Literature & Research Writing Checkpoint Quiz 15: Evidence Based Response",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-15-q1",
          "text": "Which option best summarizes AP Literature & Research Writing Checkpoint Quiz 15: Evidence Based Response?",
          "skillId": "lang-arts-1112-u1-external-skill-ap-literature-research-writing-checkpoint-quiz-15-evidence-based-response-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain evidence-based response using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A statement with no text evidence."
            },
            {
              "id": "c",
              "text": "A summary that adds ideas not in the lesson."
            },
            {
              "id": "d",
              "text": "A response that repeats words but misses meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-15-q2",
          "text": "Which response shows correct application of AP Literature & Research Writing Checkpoint Quiz 15: Evidence Based Response?",
          "skillId": "lang-arts-1112-u1-external-skill-ap-literature-research-writing-checkpoint-quiz-15-evidence-based-response-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply evidence-based response in one guided Language Arts task."
            },
            {
              "id": "b",
              "text": "Quote text without explaining relevance."
            },
            {
              "id": "c",
              "text": "Use opinion only with no supporting detail."
            },
            {
              "id": "d",
              "text": "Change the topic instead of answering the prompt."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-15-q3",
          "text": "Why is review important after learning AP Literature & Research Writing Checkpoint Quiz 15: Evidence Based Response?",
          "skillId": "lang-arts-1112-u1-external-skill-ap-literature-research-writing-checkpoint-quiz-15-evidence-based-response-review",
          "options": [
            {
              "id": "a",
              "text": "Build a short paragraph with claim, evidence, and explanation."
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
          "id": "lang-arts-1112-u1-external-supp-seq-15-ia1",
          "type": "matching_pairs",
          "title": "AP Literature & Research Writing Checkpoint Quiz 15: Evidence Based Response Error Match",
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
                "label": "I still mix up Explain evidence-based response using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand AP Literature & Research Writing Checkpoint Quiz 15: Evidence Based Response in notes but not in timed checks."
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
          "id": "lang-arts-1112-u1-external-supp-seq-15-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for AP Literature & Research Writing Checkpoint Quiz 15: Evidence Based Response."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain evidence-based response using age-appropriate vocabulary.",
        "Apply evidence-based response in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-15-chunk-intro",
          "title": "Evidence Based Response Intro",
          "content": "Revise for clarity, grammar, and transition flow.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-15-chunk-practice",
          "title": "Guided Practice",
          "content": "Build a short paragraph with claim, evidence, and explanation.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-15-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying evidence-based response, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-15-chunk-recap",
          "title": "Quick Recap",
          "content": "Review evidence-based response, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-1112-u1-external-supp-seq-15-card-1",
          "front": "What is evidence-based response?",
          "back": "It is a key Language Arts idea in AP Literature & Research Writing."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-15-card-2",
          "front": "How can I practice evidence-based response?",
          "back": "Build a short paragraph with claim, evidence, and explanation."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-15-card-3",
          "front": "What should I review next?",
          "back": "Review evidence-based response, then set one clear improvement target."
        },
        {
          "id": "lang-arts-1112-u1-external-supp-seq-15-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"AP Literature & Research Writing Checkpoint Quiz 15: Evidence Based Response\" in \"Language Arts\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"AP Literature & Research Writing Checkpoint Quiz 15: Evidence Based Response\" (Language Arts, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"AP Literature & Research Writing Checkpoint Quiz 15: Evidence Based Response\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"AP Literature & Research Writing Checkpoint Quiz 15: Evidence Based Response\" (Language Arts, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "lang-arts-1112-u1-external-generated-cycle-15",
        "order": 15,
        "generatedSupplement": true
      }
    }
  ]
};
