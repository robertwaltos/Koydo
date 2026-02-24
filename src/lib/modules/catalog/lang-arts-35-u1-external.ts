import type { LearningModule } from "@/lib/modules/types";

export const LangArts35U1ExternalModule: LearningModule = {
  "id": "lang-arts-35-u1-external",
  "title": "Reading Comprehension & Writing",
  "description": "Language Arts unit for 3–5 imported from external JSX curriculum.",
  "subject": "Language Arts",
  "tags": [
    "external-ai",
    "curriculum-import",
    "grade-35"
  ],
  "minAge": 8,
  "maxAge": 11,
  "moduleVersion": "external-1.0.0",
  "version": "external-1.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Explain What is the Main Idea?.",
    "Explain Finding the Main Idea.",
    "Explain Supporting Details.",
    "Explain Why Text Structure Matters.",
    "Explain Structure 1: Chronological Order.",
    "Explain Structure 2: Compare & Contrast.",
    "Build baseline confidence in Reading Comprehension & Writing.",
    "Apply one core Language Arts strategy for 35."
  ],
  "gradeBand": "35",
  "metadata": {
    "source": "../External_AI_Agents/lesson_platform (1).jsx",
    "sourceUnitId": "lang_arts-35-u1",
    "sourceUnitIdCanonical": "lang-arts-35-u1",
    "importedAt": "2026-02-24T03:43:31.739Z"
  },
  "external": {
    "unitOrder": 1,
    "estimatedHours": null,
    "prerequisites": []
  },
  "lessons": [
    {
      "id": "lang-arts-35-u1-1",
      "title": "Main Idea & Supporting Details (35)",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "lang-arts-35-u1-1-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Main Idea & Supporting Details (35)."
        }
      ],
      "objectives": [
        "Explain What is the Main Idea?.",
        "Explain Finding the Main Idea.",
        "Explain Supporting Details."
      ],
      "chunks": [
        {
          "id": "lang-arts-35-u1-1-chunk-1",
          "title": "What is the Main Idea?",
          "content": "The main idea is the MOST IMPORTANT point of a paragraph or text. It's what the whole passage is mostly about. Think of it as the 'umbrella' — the big idea that covers all the smaller details beneath it."
        },
        {
          "id": "lang-arts-35-u1-1-chunk-2",
          "title": "Finding the Main Idea",
          "content": "3-Step Strategy:\n1. Read the WHOLE paragraph\n2. Ask: 'What does ALMOST EVERY sentence talk about?'\n3. The answer is your main idea!\n\nTip: The main idea is often (but not always) the FIRST sentence — called a topic sentence."
        },
        {
          "id": "lang-arts-35-u1-1-chunk-3",
          "title": "Supporting Details",
          "content": "Supporting details are FACTS, EXAMPLES, or REASONS that prove or explain the main idea.\n\nMain Idea: Dogs make great pets.\nDetails: Dogs are loyal. ✓ They help people with disabilities. ✓ Dogs can be trained. ✓\n\nEach detail supports the umbrella above it!"
        },
        {
          "id": "lang-arts-35-u1-1-chunk-4",
          "title": "Main Idea vs. Topic",
          "content": "Topic = The subject (what it's about in a word or phrase)\nMain Idea = What the author says ABOUT the topic (a complete thought)\n\nTopic: 'Dolphins'\nMain Idea: 'Dolphins are intelligent animals that communicate in complex ways.'\n\nSee the difference? The main idea is a SENTENCE, not just a word."
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-1-card-1",
          "front": "Main Idea",
          "back": "The MOST IMPORTANT point the author is making about the topic"
        },
        {
          "id": "lang-arts-35-u1-1-card-2",
          "front": "Topic Sentence",
          "back": "Often the first sentence — states the main idea of a paragraph"
        },
        {
          "id": "lang-arts-35-u1-1-card-3",
          "front": "Supporting Detail",
          "back": "A fact, example, or reason that BACKS UP the main idea"
        },
        {
          "id": "lang-arts-35-u1-1-card-4",
          "front": "How to find main idea",
          "back": "Ask: 'What does ALMOST EVERY sentence talk about?'"
        },
        {
          "id": "lang-arts-35-u1-1-card-5",
          "front": "Topic vs. Main Idea",
          "back": "Topic = subject (1-2 words); Main Idea = what author says about it (sentence)"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Animated study session. A student character reads a paragraph on screen while a floating 'Main Idea Umbrella' appears above the text. Supporting detail bullets pop up beneath the umbrella one by one, visually connecting to it with dotted lines. The concept is shown with concrete examples using relatable topics (animals, sports, food). Teacher narration explains each step. Ages 8-11. Clean, modern animation style. Duration: 60 seconds.",
        "seedanceAnimation": "Lottie animation: Umbrella labeled 'Main Idea' opens at top of screen. Raindrops labeled 'Detail 1', 'Detail 2', 'Detail 3' fall and cluster beneath it. Non-fitting details (wrong details) bounce away from the umbrella. Satisfying click/pop sounds implied. 12-second loop.",
        "lessonImage": "Create a clean educational illustration for \"Main Idea & Supporting Details (35)\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Main Idea & Supporting Details (35)\" (Language Arts, grade band 35)."
      },
      "localized": {
        "title": {
          "en": "Main Idea & Supporting Details"
        },
        "concept": {
          "en": "Main Idea & Supporting Details"
        }
      },
      "external": {
        "sourceLessonId": "lang_arts-35-u1-1",
        "order": 1
      }
    },
    {
      "id": "lang-arts-35-u1-2",
      "title": "Text Structure: 5 Organizational Patterns (35)",
      "type": "interactive",
      "duration": 15,
      "interactiveActivities": [
        {
          "id": "lang-arts-35-u1-2-ia1",
          "type": "drag_and_drop",
          "title": "Text Structure: 5 Organizational Patterns (35) Learning Flow",
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
                "label": "Set a goal for Explain Why Text Structure Matters..",
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
          "id": "lang-arts-35-u1-2-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Text Structure: 5 Organizational Patterns (35)."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain Why Text Structure Matters.",
          "Explain Structure 1: Chronological Order.",
          "Explain Structure 2: Compare & Contrast."
        ]
      },
      "objectives": [
        "Explain Why Text Structure Matters.",
        "Explain Structure 1: Chronological Order.",
        "Explain Structure 2: Compare & Contrast."
      ],
      "chunks": [
        {
          "id": "lang-arts-35-u1-2-chunk-1",
          "title": "Why Text Structure Matters",
          "content": "Authors organize information in specific patterns. Recognizing the STRUCTURE helps you understand and remember what you read. There are 5 main text structures in nonfiction writing."
        },
        {
          "id": "lang-arts-35-u1-2-chunk-2",
          "title": "Structure 1: Chronological Order",
          "content": "Events are told in TIME ORDER — first to last.\nSignal Words: first, then, next, after, finally, in 1492, before, last\n\nExample: A biography of Martin Luther King Jr. told from his childhood to his legacy."
        },
        {
          "id": "lang-arts-35-u1-2-chunk-3",
          "title": "Structure 2: Compare & Contrast",
          "content": "Shows how things are SIMILAR and DIFFERENT.\nSignal Words: both, however, similarly, on the other hand, unlike, in contrast, also, yet\n\nExample: Comparing frogs and toads — both are amphibians BUT frogs live near water while toads are drier-adapted."
        },
        {
          "id": "lang-arts-35-u1-2-chunk-4",
          "title": "Structure 3: Cause & Effect | Structure 4: Problem & Solution",
          "content": "CAUSE & EFFECT: One event causes another.\nSignal Words: because, as a result, therefore, so, since, leads to, causes\n\nPROBLEM & SOLUTION: A problem is stated, then a solution is given.\nSignal Words: problem, solution, as a result, one answer is, this led to\n\nStructure 5: DESCRIPTION: Describes a topic with characteristics, examples, and details."
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-2-card-1",
          "front": "Chronological Order signal words",
          "back": "first, then, next, after, finally, before, last"
        },
        {
          "id": "lang-arts-35-u1-2-card-2",
          "front": "Compare & Contrast signal words",
          "back": "both, however, similarly, unlike, in contrast, also"
        },
        {
          "id": "lang-arts-35-u1-2-card-3",
          "front": "Cause & Effect signal words",
          "back": "because, as a result, therefore, so, leads to, causes"
        },
        {
          "id": "lang-arts-35-u1-2-card-4",
          "front": "Problem & Solution signal words",
          "back": "problem, solution, one answer is, this led to"
        },
        {
          "id": "lang-arts-35-u1-2-card-5",
          "front": "5 Text Structures",
          "back": "1. Chronological  2. Compare/Contrast  3. Cause/Effect  4. Problem/Solution  5. Description"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: A textbook magically transforms, reorganizing itself into different structures as they're named. For Chronological: a timeline appears. For Compare/Contrast: a Venn diagram forms. For Cause/Effect: dominoes fall. For Problem/Solution: a puzzle solves itself. Each structure is narrated and signal words flash on screen highlighted in color. Ages 9-11. Upbeat, informative. Duration: 70 seconds.",
        "seedanceAnimation": "Lottie animation: Five icons appear in sequence — calendar (chronological), Venn diagram (compare), dominoes (cause/effect), puzzle (problem/solution), magnifying glass (description). Each pulses and glows when highlighted. 10-second loop.",
        "lessonImage": "Create a clean educational illustration for \"Text Structure: 5 Organizational Patterns (35)\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Text Structure: 5 Organizational Patterns (35)\" (Language Arts, grade band 35)."
      },
      "localized": {
        "title": {
          "en": "Text Structure: 5 Organizational Patterns"
        },
        "concept": {
          "en": "Text Structure: 5 Organizational Patterns"
        }
      },
      "external": {
        "sourceLessonId": "lang_arts-35-u1-2",
        "order": 2
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-quiz",
      "title": "Reading Comprehension & Writing Supplemental Check",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-35-u1-external-supp-quiz-q1",
          "text": "Which option best summarizes Reading Comprehension & Writing Supplemental Check?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-supplemental-check-summary",
          "options": [
            {
              "id": "a",
              "text": "Build baseline confidence in Reading Comprehension & Writing."
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
          "id": "lang-arts-35-u1-external-supp-quiz-q2",
          "text": "Which response shows correct application of Reading Comprehension & Writing Supplemental Check?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-supplemental-check-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply one core Language Arts strategy for 35."
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
          "id": "lang-arts-35-u1-external-supp-quiz-q3",
          "text": "Why is review important after learning Reading Comprehension & Writing Supplemental Check?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-supplemental-check-review",
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
          "id": "lang-arts-35-u1-external-supp-quiz-ia1",
          "type": "matching_pairs",
          "title": "Reading Comprehension & Writing Supplemental Check Error Match",
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
                "label": "I still mix up Build baseline confidence in Reading Comprehension & Writing.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Reading Comprehension & Writing Supplemental Check in notes but not in timed checks."
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
          "id": "lang-arts-35-u1-external-supp-quiz-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Reading Comprehension & Writing Supplemental Check."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Build baseline confidence in Reading Comprehension & Writing.",
        "Apply one core Language Arts strategy for 35."
      ],
      "chunks": [
        {
          "id": "lang-arts-35-u1-external-supp-quiz-chunk-intro",
          "title": "Reading Comprehension & Writing Supplemental Check Overview",
          "content": "Reinforce core Language Arts concepts in Reading Comprehension & Writing.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-quiz-chunk-recap",
          "title": "Quick Recap",
          "content": "Summarize one key idea and plan one next step.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-quiz-card-1",
          "front": "What is one key idea in Reading Comprehension & Writing?",
          "back": "Build baseline confidence in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-quiz-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core Language Arts strategy for 35."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Supplemental Check\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Supplemental Check\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Supplemental Check\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Supplemental Check\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-supp-quiz",
        "order": 3,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-04",
      "title": "Reading Comprehension & Writing Concept Walkthrough 4: Paragraph Structure",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-04-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Reading Comprehension & Writing Concept Walkthrough 4: Paragraph Structure."
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
          "id": "lang-arts-35-u1-external-supp-seq-04-chunk-intro",
          "title": "Paragraph Structure Intro",
          "content": "Read the prompt, then highlight key words and evidence lines.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-04-chunk-practice",
          "title": "Guided Practice",
          "content": "Annotate one short passage and summarize the main idea.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-04-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying paragraph structure, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-04-chunk-recap",
          "title": "Quick Recap",
          "content": "Review paragraph structure, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-04-card-1",
          "front": "What is paragraph structure?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-04-card-2",
          "front": "How can I practice paragraph structure?",
          "back": "Annotate one short passage and summarize the main idea."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-04-card-3",
          "front": "What should I review next?",
          "back": "Review paragraph structure, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-04-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Concept Walkthrough 4: Paragraph Structure\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Concept Walkthrough 4: Paragraph Structure\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Concept Walkthrough 4: Paragraph Structure\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Concept Walkthrough 4: Paragraph Structure\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-4",
        "order": 4,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-05",
      "title": "Reading Comprehension & Writing Guided Practice Lab 5: Evidence Based Response",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-05-ia1",
          "type": "drag_and_drop",
          "title": "Reading Comprehension & Writing Guided Practice Lab 5: Evidence Based Response Learning Flow",
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
          "id": "lang-arts-35-u1-external-supp-seq-05-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Reading Comprehension & Writing Guided Practice Lab 5: Evidence Based Response."
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
          "id": "lang-arts-35-u1-external-supp-seq-05-chunk-intro",
          "title": "Evidence Based Response Intro",
          "content": "Use one clear claim and support it with text-based details.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-05-chunk-practice",
          "title": "Guided Practice",
          "content": "Rewrite one sentence to improve precision and tone.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-05-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying evidence-based response, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-05-chunk-recap",
          "title": "Quick Recap",
          "content": "Review evidence-based response, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-05-card-1",
          "front": "What is evidence-based response?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-05-card-2",
          "front": "How can I practice evidence-based response?",
          "back": "Rewrite one sentence to improve precision and tone."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-05-card-3",
          "front": "What should I review next?",
          "back": "Review evidence-based response, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-05-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Guided Practice Lab 5: Evidence Based Response\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Guided Practice Lab 5: Evidence Based Response\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Guided Practice Lab 5: Evidence Based Response\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Guided Practice Lab 5: Evidence Based Response\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-5",
        "order": 5,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-06",
      "title": "Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-06-q1",
          "text": "Which option best summarizes Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-6-close-reading-summary",
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
          "id": "lang-arts-35-u1-external-supp-seq-06-q2",
          "text": "Which response shows correct application of Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-6-close-reading-apply",
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
          "id": "lang-arts-35-u1-external-supp-seq-06-q3",
          "text": "Why is review important after learning Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-6-close-reading-review",
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
          "id": "lang-arts-35-u1-external-supp-seq-06-ia1",
          "type": "matching_pairs",
          "title": "Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading Error Match",
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
                "label": "I understand Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading in notes but not in timed checks."
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
          "id": "lang-arts-35-u1-external-supp-seq-06-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading."
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
          "id": "lang-arts-35-u1-external-supp-seq-06-chunk-intro",
          "title": "Close Reading Intro",
          "content": "Revise for clarity, grammar, and transition flow.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-06-chunk-practice",
          "title": "Guided Practice",
          "content": "Build a short paragraph with claim, evidence, and explanation.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-06-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying close reading, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-06-chunk-recap",
          "title": "Quick Recap",
          "content": "Review close reading, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-06-card-1",
          "front": "What is close reading?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-06-card-2",
          "front": "How can I practice close reading?",
          "back": "Build a short paragraph with claim, evidence, and explanation."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-06-card-3",
          "front": "What should I review next?",
          "back": "Review close reading, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-06-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-6",
        "order": 6,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-07",
      "title": "Reading Comprehension & Writing Concept Walkthrough 7: Vocabulary In Context",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-07-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Reading Comprehension & Writing Concept Walkthrough 7: Vocabulary In Context."
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
          "id": "lang-arts-35-u1-external-supp-seq-07-chunk-intro",
          "title": "Vocabulary In Context Intro",
          "content": "Read the prompt, then highlight key words and evidence lines.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-07-chunk-practice",
          "title": "Guided Practice",
          "content": "Annotate one short passage and summarize the main idea.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-07-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying vocabulary in context, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-07-chunk-recap",
          "title": "Quick Recap",
          "content": "Review vocabulary in context, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-07-card-1",
          "front": "What is vocabulary in context?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-07-card-2",
          "front": "How can I practice vocabulary in context?",
          "back": "Annotate one short passage and summarize the main idea."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-07-card-3",
          "front": "What should I review next?",
          "back": "Review vocabulary in context, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-07-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Concept Walkthrough 7: Vocabulary In Context\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Concept Walkthrough 7: Vocabulary In Context\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Concept Walkthrough 7: Vocabulary In Context\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Concept Walkthrough 7: Vocabulary In Context\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-7",
        "order": 7,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-08",
      "title": "Reading Comprehension & Writing Guided Practice Lab 8: Sentence Revision",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-08-ia1",
          "type": "drag_and_drop",
          "title": "Reading Comprehension & Writing Guided Practice Lab 8: Sentence Revision Learning Flow",
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
          "id": "lang-arts-35-u1-external-supp-seq-08-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Reading Comprehension & Writing Guided Practice Lab 8: Sentence Revision."
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
          "id": "lang-arts-35-u1-external-supp-seq-08-chunk-intro",
          "title": "Sentence Revision Intro",
          "content": "Use one clear claim and support it with text-based details.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-08-chunk-practice",
          "title": "Guided Practice",
          "content": "Rewrite one sentence to improve precision and tone.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-08-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying sentence revision, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-08-chunk-recap",
          "title": "Quick Recap",
          "content": "Review sentence revision, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-08-card-1",
          "front": "What is sentence revision?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-08-card-2",
          "front": "How can I practice sentence revision?",
          "back": "Rewrite one sentence to improve precision and tone."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-08-card-3",
          "front": "What should I review next?",
          "back": "Review sentence revision, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-08-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Guided Practice Lab 8: Sentence Revision\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Guided Practice Lab 8: Sentence Revision\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Guided Practice Lab 8: Sentence Revision\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Guided Practice Lab 8: Sentence Revision\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-8",
        "order": 8,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-09",
      "title": "Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-09-q1",
          "text": "Which option best summarizes Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-9-paragraph-structure-summary",
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
          "id": "lang-arts-35-u1-external-supp-seq-09-q2",
          "text": "Which response shows correct application of Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-9-paragraph-structure-apply",
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
          "id": "lang-arts-35-u1-external-supp-seq-09-q3",
          "text": "Why is review important after learning Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-9-paragraph-structure-review",
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
          "id": "lang-arts-35-u1-external-supp-seq-09-ia1",
          "type": "matching_pairs",
          "title": "Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure Error Match",
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
                "label": "I understand Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure in notes but not in timed checks."
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
          "id": "lang-arts-35-u1-external-supp-seq-09-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure."
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
          "id": "lang-arts-35-u1-external-supp-seq-09-chunk-intro",
          "title": "Paragraph Structure Intro",
          "content": "Revise for clarity, grammar, and transition flow.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-09-chunk-practice",
          "title": "Guided Practice",
          "content": "Build a short paragraph with claim, evidence, and explanation.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-09-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying paragraph structure, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-09-chunk-recap",
          "title": "Quick Recap",
          "content": "Review paragraph structure, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-09-card-1",
          "front": "What is paragraph structure?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-09-card-2",
          "front": "How can I practice paragraph structure?",
          "back": "Build a short paragraph with claim, evidence, and explanation."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-09-card-3",
          "front": "What should I review next?",
          "back": "Review paragraph structure, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-09-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-9",
        "order": 9,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-10",
      "title": "Reading Comprehension & Writing Concept Walkthrough 10: Evidence Based Response",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-10-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Reading Comprehension & Writing Concept Walkthrough 10: Evidence Based Response."
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
          "id": "lang-arts-35-u1-external-supp-seq-10-chunk-intro",
          "title": "Evidence Based Response Intro",
          "content": "Read the prompt, then highlight key words and evidence lines.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-10-chunk-practice",
          "title": "Guided Practice",
          "content": "Annotate one short passage and summarize the main idea.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-10-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying evidence-based response, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-10-chunk-recap",
          "title": "Quick Recap",
          "content": "Review evidence-based response, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-10-card-1",
          "front": "What is evidence-based response?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-10-card-2",
          "front": "How can I practice evidence-based response?",
          "back": "Annotate one short passage and summarize the main idea."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-10-card-3",
          "front": "What should I review next?",
          "back": "Review evidence-based response, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-10-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Concept Walkthrough 10: Evidence Based Response\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Concept Walkthrough 10: Evidence Based Response\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Concept Walkthrough 10: Evidence Based Response\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Concept Walkthrough 10: Evidence Based Response\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-10",
        "order": 10,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-11",
      "title": "Reading Comprehension & Writing Guided Practice Lab 11: Close Reading",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-11-ia1",
          "type": "drag_and_drop",
          "title": "Reading Comprehension & Writing Guided Practice Lab 11: Close Reading Learning Flow",
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
          "id": "lang-arts-35-u1-external-supp-seq-11-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Reading Comprehension & Writing Guided Practice Lab 11: Close Reading."
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
          "id": "lang-arts-35-u1-external-supp-seq-11-chunk-intro",
          "title": "Close Reading Intro",
          "content": "Use one clear claim and support it with text-based details.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-11-chunk-practice",
          "title": "Guided Practice",
          "content": "Rewrite one sentence to improve precision and tone.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-11-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying close reading, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-11-chunk-recap",
          "title": "Quick Recap",
          "content": "Review close reading, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-11-card-1",
          "front": "What is close reading?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-11-card-2",
          "front": "How can I practice close reading?",
          "back": "Rewrite one sentence to improve precision and tone."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-11-card-3",
          "front": "What should I review next?",
          "back": "Review close reading, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-11-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Guided Practice Lab 11: Close Reading\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Guided Practice Lab 11: Close Reading\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Guided Practice Lab 11: Close Reading\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Guided Practice Lab 11: Close Reading\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-11",
        "order": 11,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-12",
      "title": "Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-12-q1",
          "text": "Which option best summarizes Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-12-vocabulary-in-context-summary",
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
          "id": "lang-arts-35-u1-external-supp-seq-12-q2",
          "text": "Which response shows correct application of Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-12-vocabulary-in-context-apply",
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
          "id": "lang-arts-35-u1-external-supp-seq-12-q3",
          "text": "Why is review important after learning Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-12-vocabulary-in-context-review",
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
          "id": "lang-arts-35-u1-external-supp-seq-12-ia1",
          "type": "matching_pairs",
          "title": "Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context Error Match",
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
                "label": "I understand Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context in notes but not in timed checks."
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
          "id": "lang-arts-35-u1-external-supp-seq-12-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context."
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
          "id": "lang-arts-35-u1-external-supp-seq-12-chunk-intro",
          "title": "Vocabulary In Context Intro",
          "content": "Revise for clarity, grammar, and transition flow.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-12-chunk-practice",
          "title": "Guided Practice",
          "content": "Build a short paragraph with claim, evidence, and explanation.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-12-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying vocabulary in context, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-12-chunk-recap",
          "title": "Quick Recap",
          "content": "Review vocabulary in context, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-12-card-1",
          "front": "What is vocabulary in context?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-12-card-2",
          "front": "How can I practice vocabulary in context?",
          "back": "Build a short paragraph with claim, evidence, and explanation."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-12-card-3",
          "front": "What should I review next?",
          "back": "Review vocabulary in context, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-12-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-12",
        "order": 12,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-13",
      "title": "Reading Comprehension & Writing Concept Walkthrough 13: Sentence Revision",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-13-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Reading Comprehension & Writing Concept Walkthrough 13: Sentence Revision."
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
          "id": "lang-arts-35-u1-external-supp-seq-13-chunk-intro",
          "title": "Sentence Revision Intro",
          "content": "Read the prompt, then highlight key words and evidence lines.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-13-chunk-practice",
          "title": "Guided Practice",
          "content": "Annotate one short passage and summarize the main idea.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-13-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying sentence revision, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-13-chunk-recap",
          "title": "Quick Recap",
          "content": "Review sentence revision, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-13-card-1",
          "front": "What is sentence revision?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-13-card-2",
          "front": "How can I practice sentence revision?",
          "back": "Annotate one short passage and summarize the main idea."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-13-card-3",
          "front": "What should I review next?",
          "back": "Review sentence revision, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-13-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Concept Walkthrough 13: Sentence Revision\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Concept Walkthrough 13: Sentence Revision\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Concept Walkthrough 13: Sentence Revision\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Concept Walkthrough 13: Sentence Revision\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-13",
        "order": 13,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-14",
      "title": "Reading Comprehension & Writing Guided Practice Lab 14: Paragraph Structure",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-14-ia1",
          "type": "drag_and_drop",
          "title": "Reading Comprehension & Writing Guided Practice Lab 14: Paragraph Structure Learning Flow",
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
          "id": "lang-arts-35-u1-external-supp-seq-14-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Reading Comprehension & Writing Guided Practice Lab 14: Paragraph Structure."
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
          "id": "lang-arts-35-u1-external-supp-seq-14-chunk-intro",
          "title": "Paragraph Structure Intro",
          "content": "Use one clear claim and support it with text-based details.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-14-chunk-practice",
          "title": "Guided Practice",
          "content": "Rewrite one sentence to improve precision and tone.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-14-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying paragraph structure, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-14-chunk-recap",
          "title": "Quick Recap",
          "content": "Review paragraph structure, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-14-card-1",
          "front": "What is paragraph structure?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-14-card-2",
          "front": "How can I practice paragraph structure?",
          "back": "Rewrite one sentence to improve precision and tone."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-14-card-3",
          "front": "What should I review next?",
          "back": "Review paragraph structure, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-14-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Guided Practice Lab 14: Paragraph Structure\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Guided Practice Lab 14: Paragraph Structure\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Guided Practice Lab 14: Paragraph Structure\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Guided Practice Lab 14: Paragraph Structure\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-14",
        "order": 14,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-15",
      "title": "Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-15-q1",
          "text": "Which option best summarizes Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-15-evidence-based-response-summary",
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
          "id": "lang-arts-35-u1-external-supp-seq-15-q2",
          "text": "Which response shows correct application of Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-15-evidence-based-response-apply",
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
          "id": "lang-arts-35-u1-external-supp-seq-15-q3",
          "text": "Why is review important after learning Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-15-evidence-based-response-review",
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
          "id": "lang-arts-35-u1-external-supp-seq-15-ia1",
          "type": "matching_pairs",
          "title": "Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response Error Match",
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
                "label": "I understand Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response in notes but not in timed checks."
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
          "id": "lang-arts-35-u1-external-supp-seq-15-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response."
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
          "id": "lang-arts-35-u1-external-supp-seq-15-chunk-intro",
          "title": "Evidence Based Response Intro",
          "content": "Revise for clarity, grammar, and transition flow.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-15-chunk-practice",
          "title": "Guided Practice",
          "content": "Build a short paragraph with claim, evidence, and explanation.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-15-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying evidence-based response, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-15-chunk-recap",
          "title": "Quick Recap",
          "content": "Review evidence-based response, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-15-card-1",
          "front": "What is evidence-based response?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-15-card-2",
          "front": "How can I practice evidence-based response?",
          "back": "Build a short paragraph with claim, evidence, and explanation."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-15-card-3",
          "front": "What should I review next?",
          "back": "Review evidence-based response, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-15-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-15",
        "order": 15,
        "generatedSupplement": true
      }
    }
  ]
};
