import type { LearningModule } from "@/lib/modules/types";

export const LangArtsK2U1ExternalModule: LearningModule = {
  "id": "lang-arts-k2-u1-external",
  "title": "Phonics & Early Reading",
  "description": "Language Arts unit for K–2 imported from external JSX curriculum.",
  "subject": "Language Arts",
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
    "Explain The Five Vowels.",
    "Explain Short A — /a/.",
    "Explain Short E, I, O, U.",
    "Explain What Are Sight Words?.",
    "Explain Dolch List: Pre-Primer (Most Common).",
    "Explain How to Learn Sight Words.",
    "Build baseline confidence in Phonics & Early Reading.",
    "Apply one core Language Arts strategy for K2."
  ],
  "gradeBand": "K2",
  "metadata": {
    "source": "../External_AI_Agents/lesson_platform (1).jsx",
    "sourceUnitId": "lang-arts-k2-u1",
    "sourceUnitIdCanonical": "lang-arts-k2-u1",
    "sourceUnitIdRaw": "lang_arts-k2-u1",
    "importedAt": "2026-02-25T02:03:30.435Z"
  },
  "external": {
    "unitOrder": 6,
    "estimatedHours": null,
    "prerequisites": []
  },
  "lessons": [
    {
      "id": "lang-arts-k2-u1-1",
      "title": "Short Vowel Sounds (K2)",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "lang-arts-k2-u1-1-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Short Vowel Sounds (K2)."
        }
      ],
      "objectives": [
        "Explain The Five Vowels.",
        "Explain Short A — /a/.",
        "Explain Short E, I, O, U."
      ],
      "chunks": [
        {
          "id": "lang-arts-k2-u1-1-chunk-1",
          "title": "The Five Vowels",
          "content": "The vowels are A, E, I, O, U. Every word has at least one vowel! Vowels are the SINGERS of the alphabet — without them, words can't be read aloud easily."
        },
        {
          "id": "lang-arts-k2-u1-1-chunk-2",
          "title": "Short A — /a/",
          "content": "Short A sounds like the 'a' in 'apple' 🍎\nWords: cat, hat, bat, map, nap, tap, cap, jam, man, ran\n\nPractice saying: 'The CAT sat on the MAT with a HAT!' Notice all the short-A sounds!"
        },
        {
          "id": "lang-arts-k2-u1-1-chunk-3",
          "title": "Short E, I, O, U",
          "content": "Short E /e/: bed, red, ten, hen, let, net, pet\nShort I /i/: big, pig, fit, sit, lip, dip, him, win\nShort O /o/: hot, pot, dog, log, fox, box, hop, top\nShort U /u/: bus, cup, fun, run, bug, hug, mud, sun"
        },
        {
          "id": "lang-arts-k2-u1-1-chunk-4",
          "title": "CVC Words (Consonant-Vowel-Consonant)",
          "content": "Most short-vowel words follow the CVC pattern:\n• C-A-T = consonant / short A / consonant\n• D-O-G = consonant / short O / consonant\n• S-I-T = consonant / short I / consonant\n\nBlend them together: /c/ + /a/ + /t/ = CAT! 🐱"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-k2-u1-1-card-1",
          "front": "Short A sound",
          "back": "/a/ as in APPLE 🍎 — cat, hat, map"
        },
        {
          "id": "lang-arts-k2-u1-1-card-2",
          "front": "Short E sound",
          "back": "/e/ as in EGG 🥚 — bed, red, ten"
        },
        {
          "id": "lang-arts-k2-u1-1-card-3",
          "front": "Short I sound",
          "back": "/i/ as in IGLOO 🏔️ — big, sit, win"
        },
        {
          "id": "lang-arts-k2-u1-1-card-4",
          "front": "Short O sound",
          "back": "/o/ as in OCTOPUS 🐙 — hot, dog, fox"
        },
        {
          "id": "lang-arts-k2-u1-1-card-5",
          "front": "Short U sound",
          "back": "/u/ as in UMBRELLA ☂️ — bus, cup, fun"
        },
        {
          "id": "lang-arts-k2-u1-1-card-6",
          "front": "CVC pattern",
          "back": "Consonant-Vowel-Consonant: C-A-T, D-O-G, S-I-T"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Vibrant animated classroom. Each vowel letter (A, E, I, O, U) transforms into a character — A becomes an apple character, E becomes an elephant, I an igloo, O an octopus, U an umbrella. Each character 'sings' their short sound. Words flash on screen showing the vowel highlighted in red. Phonics sounds are clearly articulated. Duration: 60 seconds. Bright primary colors, ages 5-8.",
        "seedanceAnimation": "Lottie animation: Letter 'A' bounces onto screen, transforms into an apple, then three CVC words (cat, hat, bat) fly in with the 'A' highlighted in red. Sound waves pulse from the 'A'. Repeats for E, I, O, U. 15-second loop.",
        "lessonImage": "Create a clean educational illustration for \"Short Vowel Sounds (K2)\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Short Vowel Sounds (K2)\" (Language Arts, grade band K2)."
      },
      "localized": {
        "title": {
          "en": "Short Vowel Sounds"
        },
        "concept": {
          "en": "Short Vowel Sounds"
        }
      },
      "external": {
        "sourceLessonId": "lang_arts-k2-u1-1",
        "order": 1
      }
    },
    {
      "id": "lang-arts-k2-u1-2",
      "title": "Sight Words: High-Frequency Words (K2)",
      "type": "interactive",
      "duration": 15,
      "interactiveActivities": [
        {
          "id": "lang-arts-k2-u1-2-ia1",
          "type": "drag_and_drop",
          "title": "Sight Words: High-Frequency Words (K2) Learning Flow",
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
                "label": "Set a goal for Explain What Are Sight Words?..",
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
          "id": "lang-arts-k2-u1-2-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Sight Words: High-Frequency Words (K2)."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain What Are Sight Words?.",
          "Explain Dolch List: Pre-Primer (Most Common).",
          "Explain How to Learn Sight Words."
        ]
      },
      "objectives": [
        "Explain What Are Sight Words?.",
        "Explain Dolch List: Pre-Primer (Most Common).",
        "Explain How to Learn Sight Words."
      ],
      "chunks": [
        {
          "id": "lang-arts-k2-u1-2-chunk-1",
          "title": "What Are Sight Words?",
          "content": "Sight words are very common words that good readers recognize INSTANTLY — without sounding them out! They appear so often in books that learning them makes reading much faster and easier."
        },
        {
          "id": "lang-arts-k2-u1-2-chunk-2",
          "title": "Dolch List: Pre-Primer (Most Common)",
          "content": "These are the most common words in children's books:\na, and, away, big, blue, can, come, down, find, for, funny, go, help, here, I, in, is, it, jump, little, look, make, me, my, not, one, play, red, run, said, see, the, three, to, two, up, we, where, yellow, you"
        },
        {
          "id": "lang-arts-k2-u1-2-chunk-3",
          "title": "How to Learn Sight Words",
          "content": "3 Powerful Strategies:\n1. 📖 READ: See the word in a sentence\n2. ✏️ WRITE: Trace and write it 3 times\n3. 🗣️ SAY: Spell it out loud\n\nRepeat daily — just 5-10 words at a time!"
        },
        {
          "id": "lang-arts-k2-u1-2-chunk-4",
          "title": "Sight Words in Sentences",
          "content": "Look for sight words in real sentences:\n• 'I can see the big red ball.'\n• 'We can go and play here.'\n• 'Look at me! I can jump up.'\n\nUnderline every sight word you find!"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-k2-u1-2-card-1",
          "front": "the",
          "back": "The cat sat. THE is a sight word!"
        },
        {
          "id": "lang-arts-k2-u1-2-card-2",
          "front": "said",
          "back": "'She SAID hello.' — Common but tricky!"
        },
        {
          "id": "lang-arts-k2-u1-2-card-3",
          "front": "was",
          "back": "'It WAS sunny.' — Sight word!"
        },
        {
          "id": "lang-arts-k2-u1-2-card-4",
          "front": "come",
          "back": "'COME here!' — Sight word!"
        },
        {
          "id": "lang-arts-k2-u1-2-card-5",
          "front": "where",
          "back": "'WHERE is my dog?' — Sight word!"
        },
        {
          "id": "lang-arts-k2-u1-2-card-6",
          "front": "little",
          "back": "'A LITTLE puppy.' — Sight word!"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: A magical word wall comes to life. Sight words written on colorful cards float and glow. A friendly robot character called 'Reado' picks up each word card, uses it in a sentence, then the word 'locks into' the viewer's brain with a sparkle effect. Simple sentences appear on screen with sight words highlighted in yellow. Fun, upbeat music. Ages 5-8. Duration: 55 seconds.",
        "seedanceAnimation": "Lottie animation: Flashcard flip sequence — sight word appears on front of card (bold, colorful), card flips to show a sentence using the word with the sight word highlighted. 8 different words cycle. 20-second animation.",
        "lessonImage": "Create a clean educational illustration for \"Sight Words: High-Frequency Words (K2)\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Sight Words: High-Frequency Words (K2)\" (Language Arts, grade band K2)."
      },
      "localized": {
        "title": {
          "en": "Sight Words: High-Frequency Words"
        },
        "concept": {
          "en": "Sight Words: High-Frequency Words"
        }
      },
      "external": {
        "sourceLessonId": "lang_arts-k2-u1-2",
        "order": 2
      }
    },
    {
      "id": "lang-arts-k2-u1-external-supp-quiz",
      "title": "Phonics & Early Reading Supplemental Check",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-k2-u1-external-supp-quiz-q1",
          "text": "Which option best summarizes Phonics & Early Reading Supplemental Check?",
          "skillId": "lang-arts-k2-u1-external-skill-phonics-early-reading-supplemental-check-summary",
          "options": [
            {
              "id": "a",
              "text": "Build baseline confidence in Phonics & Early Reading."
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
          "id": "lang-arts-k2-u1-external-supp-quiz-q2",
          "text": "Which response shows correct application of Phonics & Early Reading Supplemental Check?",
          "skillId": "lang-arts-k2-u1-external-skill-phonics-early-reading-supplemental-check-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply one core Language Arts strategy for K2."
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
          "id": "lang-arts-k2-u1-external-supp-quiz-q3",
          "text": "Why is review important after learning Phonics & Early Reading Supplemental Check?",
          "skillId": "lang-arts-k2-u1-external-skill-phonics-early-reading-supplemental-check-review",
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
          "id": "lang-arts-k2-u1-external-supp-quiz-ia1",
          "type": "matching_pairs",
          "title": "Phonics & Early Reading Supplemental Check Error Match",
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
                "label": "I still mix up Build baseline confidence in Phonics & Early Reading.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Phonics & Early Reading Supplemental Check in notes but not in timed checks."
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
          "id": "lang-arts-k2-u1-external-supp-quiz-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Phonics & Early Reading Supplemental Check."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Build baseline confidence in Phonics & Early Reading.",
        "Apply one core Language Arts strategy for K2."
      ],
      "chunks": [
        {
          "id": "lang-arts-k2-u1-external-supp-quiz-chunk-intro",
          "title": "Phonics & Early Reading Supplemental Check Overview",
          "content": "Reinforce core Language Arts concepts in Phonics & Early Reading.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-quiz-chunk-recap",
          "title": "Quick Recap",
          "content": "Summarize one key idea and plan one next step.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-k2-u1-external-supp-quiz-card-1",
          "front": "What is one key idea in Phonics & Early Reading?",
          "back": "Build baseline confidence in Phonics & Early Reading."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-quiz-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core Language Arts strategy for K2."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Phonics & Early Reading Supplemental Check\" in \"Language Arts\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Phonics & Early Reading Supplemental Check\" (Language Arts, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Phonics & Early Reading Supplemental Check\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Phonics & Early Reading Supplemental Check\" (Language Arts, grade band K2)."
      },
      "external": {
        "sourceLessonId": "lang-arts-k2-u1-external-supp-quiz",
        "order": 3,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-k2-u1-external-supp-seq-04",
      "title": "Phonics & Early Reading Concept Walkthrough 4: Paragraph Structure",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-04-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Phonics & Early Reading Concept Walkthrough 4: Paragraph Structure."
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
          "id": "lang-arts-k2-u1-external-supp-seq-04-chunk-intro",
          "title": "Paragraph Structure Intro",
          "content": "Read the prompt, then highlight key words and evidence lines.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-04-chunk-practice",
          "title": "Guided Practice",
          "content": "Annotate one short passage and summarize the main idea.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-04-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying paragraph structure, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-04-chunk-recap",
          "title": "Quick Recap",
          "content": "Review paragraph structure, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-04-card-1",
          "front": "What is paragraph structure?",
          "back": "It is a key Language Arts idea in Phonics & Early Reading."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-04-card-2",
          "front": "How can I practice paragraph structure?",
          "back": "Annotate one short passage and summarize the main idea."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-04-card-3",
          "front": "What should I review next?",
          "back": "Review paragraph structure, then set one clear improvement target."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-04-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Phonics & Early Reading Concept Walkthrough 4: Paragraph Structure\" in \"Language Arts\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Phonics & Early Reading Concept Walkthrough 4: Paragraph Structure\" (Language Arts, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Phonics & Early Reading Concept Walkthrough 4: Paragraph Structure\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Phonics & Early Reading Concept Walkthrough 4: Paragraph Structure\" (Language Arts, grade band K2)."
      },
      "external": {
        "sourceLessonId": "lang-arts-k2-u1-external-generated-cycle-4",
        "order": 4,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-k2-u1-external-supp-seq-05",
      "title": "Phonics & Early Reading Guided Practice Lab 5: Evidence Based Response",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-05-ia1",
          "type": "drag_and_drop",
          "title": "Phonics & Early Reading Guided Practice Lab 5: Evidence Based Response Learning Flow",
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
          "id": "lang-arts-k2-u1-external-supp-seq-05-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Phonics & Early Reading Guided Practice Lab 5: Evidence Based Response."
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
          "id": "lang-arts-k2-u1-external-supp-seq-05-chunk-intro",
          "title": "Evidence Based Response Intro",
          "content": "Use one clear claim and support it with text-based details.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-05-chunk-practice",
          "title": "Guided Practice",
          "content": "Rewrite one sentence to improve precision and tone.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-05-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying evidence-based response, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-05-chunk-recap",
          "title": "Quick Recap",
          "content": "Review evidence-based response, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-05-card-1",
          "front": "What is evidence-based response?",
          "back": "It is a key Language Arts idea in Phonics & Early Reading."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-05-card-2",
          "front": "How can I practice evidence-based response?",
          "back": "Rewrite one sentence to improve precision and tone."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-05-card-3",
          "front": "What should I review next?",
          "back": "Review evidence-based response, then set one clear improvement target."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-05-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Phonics & Early Reading Guided Practice Lab 5: Evidence Based Response\" in \"Language Arts\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Phonics & Early Reading Guided Practice Lab 5: Evidence Based Response\" (Language Arts, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Phonics & Early Reading Guided Practice Lab 5: Evidence Based Response\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Phonics & Early Reading Guided Practice Lab 5: Evidence Based Response\" (Language Arts, grade band K2)."
      },
      "external": {
        "sourceLessonId": "lang-arts-k2-u1-external-generated-cycle-5",
        "order": 5,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-k2-u1-external-supp-seq-06",
      "title": "Phonics & Early Reading Checkpoint Quiz 6: Close Reading",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-06-q1",
          "text": "Which option best summarizes Phonics & Early Reading Checkpoint Quiz 6: Close Reading?",
          "skillId": "lang-arts-k2-u1-external-skill-phonics-early-reading-checkpoint-quiz-6-close-reading-summary",
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
          "id": "lang-arts-k2-u1-external-supp-seq-06-q2",
          "text": "Which response shows correct application of Phonics & Early Reading Checkpoint Quiz 6: Close Reading?",
          "skillId": "lang-arts-k2-u1-external-skill-phonics-early-reading-checkpoint-quiz-6-close-reading-apply",
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
          "id": "lang-arts-k2-u1-external-supp-seq-06-q3",
          "text": "Why is review important after learning Phonics & Early Reading Checkpoint Quiz 6: Close Reading?",
          "skillId": "lang-arts-k2-u1-external-skill-phonics-early-reading-checkpoint-quiz-6-close-reading-review",
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
          "id": "lang-arts-k2-u1-external-supp-seq-06-ia1",
          "type": "matching_pairs",
          "title": "Phonics & Early Reading Checkpoint Quiz 6: Close Reading Error Match",
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
                "label": "I understand Phonics & Early Reading Checkpoint Quiz 6: Close Reading in notes but not in timed checks."
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
          "id": "lang-arts-k2-u1-external-supp-seq-06-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Phonics & Early Reading Checkpoint Quiz 6: Close Reading."
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
          "id": "lang-arts-k2-u1-external-supp-seq-06-chunk-intro",
          "title": "Close Reading Intro",
          "content": "Revise for clarity, grammar, and transition flow.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-06-chunk-practice",
          "title": "Guided Practice",
          "content": "Build a short paragraph with claim, evidence, and explanation.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-06-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying close reading, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-06-chunk-recap",
          "title": "Quick Recap",
          "content": "Review close reading, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-06-card-1",
          "front": "What is close reading?",
          "back": "It is a key Language Arts idea in Phonics & Early Reading."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-06-card-2",
          "front": "How can I practice close reading?",
          "back": "Build a short paragraph with claim, evidence, and explanation."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-06-card-3",
          "front": "What should I review next?",
          "back": "Review close reading, then set one clear improvement target."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-06-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Phonics & Early Reading Checkpoint Quiz 6: Close Reading\" in \"Language Arts\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Phonics & Early Reading Checkpoint Quiz 6: Close Reading\" (Language Arts, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Phonics & Early Reading Checkpoint Quiz 6: Close Reading\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Phonics & Early Reading Checkpoint Quiz 6: Close Reading\" (Language Arts, grade band K2)."
      },
      "external": {
        "sourceLessonId": "lang-arts-k2-u1-external-generated-cycle-6",
        "order": 6,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-k2-u1-external-supp-seq-07",
      "title": "Phonics & Early Reading Concept Walkthrough 7: Vocabulary In Context",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-07-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Phonics & Early Reading Concept Walkthrough 7: Vocabulary In Context."
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
          "id": "lang-arts-k2-u1-external-supp-seq-07-chunk-intro",
          "title": "Vocabulary In Context Intro",
          "content": "Read the prompt, then highlight key words and evidence lines.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-07-chunk-practice",
          "title": "Guided Practice",
          "content": "Annotate one short passage and summarize the main idea.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-07-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying vocabulary in context, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-07-chunk-recap",
          "title": "Quick Recap",
          "content": "Review vocabulary in context, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-07-card-1",
          "front": "What is vocabulary in context?",
          "back": "It is a key Language Arts idea in Phonics & Early Reading."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-07-card-2",
          "front": "How can I practice vocabulary in context?",
          "back": "Annotate one short passage and summarize the main idea."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-07-card-3",
          "front": "What should I review next?",
          "back": "Review vocabulary in context, then set one clear improvement target."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-07-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Phonics & Early Reading Concept Walkthrough 7: Vocabulary In Context\" in \"Language Arts\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Phonics & Early Reading Concept Walkthrough 7: Vocabulary In Context\" (Language Arts, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Phonics & Early Reading Concept Walkthrough 7: Vocabulary In Context\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Phonics & Early Reading Concept Walkthrough 7: Vocabulary In Context\" (Language Arts, grade band K2)."
      },
      "external": {
        "sourceLessonId": "lang-arts-k2-u1-external-generated-cycle-7",
        "order": 7,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-k2-u1-external-supp-seq-08",
      "title": "Phonics & Early Reading Guided Practice Lab 8: Sentence Revision",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-08-ia1",
          "type": "drag_and_drop",
          "title": "Phonics & Early Reading Guided Practice Lab 8: Sentence Revision Learning Flow",
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
          "id": "lang-arts-k2-u1-external-supp-seq-08-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Phonics & Early Reading Guided Practice Lab 8: Sentence Revision."
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
          "id": "lang-arts-k2-u1-external-supp-seq-08-chunk-intro",
          "title": "Sentence Revision Intro",
          "content": "Use one clear claim and support it with text-based details.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-08-chunk-practice",
          "title": "Guided Practice",
          "content": "Rewrite one sentence to improve precision and tone.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-08-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying sentence revision, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-08-chunk-recap",
          "title": "Quick Recap",
          "content": "Review sentence revision, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-08-card-1",
          "front": "What is sentence revision?",
          "back": "It is a key Language Arts idea in Phonics & Early Reading."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-08-card-2",
          "front": "How can I practice sentence revision?",
          "back": "Rewrite one sentence to improve precision and tone."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-08-card-3",
          "front": "What should I review next?",
          "back": "Review sentence revision, then set one clear improvement target."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-08-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Phonics & Early Reading Guided Practice Lab 8: Sentence Revision\" in \"Language Arts\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Phonics & Early Reading Guided Practice Lab 8: Sentence Revision\" (Language Arts, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Phonics & Early Reading Guided Practice Lab 8: Sentence Revision\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Phonics & Early Reading Guided Practice Lab 8: Sentence Revision\" (Language Arts, grade band K2)."
      },
      "external": {
        "sourceLessonId": "lang-arts-k2-u1-external-generated-cycle-8",
        "order": 8,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-k2-u1-external-supp-seq-09",
      "title": "Phonics & Early Reading Checkpoint Quiz 9: Paragraph Structure",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-09-q1",
          "text": "Which option best summarizes Phonics & Early Reading Checkpoint Quiz 9: Paragraph Structure?",
          "skillId": "lang-arts-k2-u1-external-skill-phonics-early-reading-checkpoint-quiz-9-paragraph-structure-summary",
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
          "id": "lang-arts-k2-u1-external-supp-seq-09-q2",
          "text": "Which response shows correct application of Phonics & Early Reading Checkpoint Quiz 9: Paragraph Structure?",
          "skillId": "lang-arts-k2-u1-external-skill-phonics-early-reading-checkpoint-quiz-9-paragraph-structure-apply",
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
          "id": "lang-arts-k2-u1-external-supp-seq-09-q3",
          "text": "Why is review important after learning Phonics & Early Reading Checkpoint Quiz 9: Paragraph Structure?",
          "skillId": "lang-arts-k2-u1-external-skill-phonics-early-reading-checkpoint-quiz-9-paragraph-structure-review",
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
          "id": "lang-arts-k2-u1-external-supp-seq-09-ia1",
          "type": "matching_pairs",
          "title": "Phonics & Early Reading Checkpoint Quiz 9: Paragraph Structure Error Match",
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
                "label": "I understand Phonics & Early Reading Checkpoint Quiz 9: Paragraph Structure in notes but not in timed checks."
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
          "id": "lang-arts-k2-u1-external-supp-seq-09-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Phonics & Early Reading Checkpoint Quiz 9: Paragraph Structure."
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
          "id": "lang-arts-k2-u1-external-supp-seq-09-chunk-intro",
          "title": "Paragraph Structure Intro",
          "content": "Revise for clarity, grammar, and transition flow.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-09-chunk-practice",
          "title": "Guided Practice",
          "content": "Build a short paragraph with claim, evidence, and explanation.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-09-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying paragraph structure, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-09-chunk-recap",
          "title": "Quick Recap",
          "content": "Review paragraph structure, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-09-card-1",
          "front": "What is paragraph structure?",
          "back": "It is a key Language Arts idea in Phonics & Early Reading."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-09-card-2",
          "front": "How can I practice paragraph structure?",
          "back": "Build a short paragraph with claim, evidence, and explanation."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-09-card-3",
          "front": "What should I review next?",
          "back": "Review paragraph structure, then set one clear improvement target."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-09-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Phonics & Early Reading Checkpoint Quiz 9: Paragraph Structure\" in \"Language Arts\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Phonics & Early Reading Checkpoint Quiz 9: Paragraph Structure\" (Language Arts, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Phonics & Early Reading Checkpoint Quiz 9: Paragraph Structure\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Phonics & Early Reading Checkpoint Quiz 9: Paragraph Structure\" (Language Arts, grade band K2)."
      },
      "external": {
        "sourceLessonId": "lang-arts-k2-u1-external-generated-cycle-9",
        "order": 9,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-k2-u1-external-supp-seq-10",
      "title": "Phonics & Early Reading Concept Walkthrough 10: Evidence Based Response",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-10-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Phonics & Early Reading Concept Walkthrough 10: Evidence Based Response."
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
          "id": "lang-arts-k2-u1-external-supp-seq-10-chunk-intro",
          "title": "Evidence Based Response Intro",
          "content": "Read the prompt, then highlight key words and evidence lines.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-10-chunk-practice",
          "title": "Guided Practice",
          "content": "Annotate one short passage and summarize the main idea.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-10-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying evidence-based response, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-10-chunk-recap",
          "title": "Quick Recap",
          "content": "Review evidence-based response, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-10-card-1",
          "front": "What is evidence-based response?",
          "back": "It is a key Language Arts idea in Phonics & Early Reading."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-10-card-2",
          "front": "How can I practice evidence-based response?",
          "back": "Annotate one short passage and summarize the main idea."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-10-card-3",
          "front": "What should I review next?",
          "back": "Review evidence-based response, then set one clear improvement target."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-10-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Phonics & Early Reading Concept Walkthrough 10: Evidence Based Response\" in \"Language Arts\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Phonics & Early Reading Concept Walkthrough 10: Evidence Based Response\" (Language Arts, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Phonics & Early Reading Concept Walkthrough 10: Evidence Based Response\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Phonics & Early Reading Concept Walkthrough 10: Evidence Based Response\" (Language Arts, grade band K2)."
      },
      "external": {
        "sourceLessonId": "lang-arts-k2-u1-external-generated-cycle-10",
        "order": 10,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-k2-u1-external-supp-seq-11",
      "title": "Phonics & Early Reading Guided Practice Lab 11: Close Reading",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-11-ia1",
          "type": "drag_and_drop",
          "title": "Phonics & Early Reading Guided Practice Lab 11: Close Reading Learning Flow",
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
          "id": "lang-arts-k2-u1-external-supp-seq-11-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Phonics & Early Reading Guided Practice Lab 11: Close Reading."
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
          "id": "lang-arts-k2-u1-external-supp-seq-11-chunk-intro",
          "title": "Close Reading Intro",
          "content": "Use one clear claim and support it with text-based details.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-11-chunk-practice",
          "title": "Guided Practice",
          "content": "Rewrite one sentence to improve precision and tone.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-11-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying close reading, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-11-chunk-recap",
          "title": "Quick Recap",
          "content": "Review close reading, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-11-card-1",
          "front": "What is close reading?",
          "back": "It is a key Language Arts idea in Phonics & Early Reading."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-11-card-2",
          "front": "How can I practice close reading?",
          "back": "Rewrite one sentence to improve precision and tone."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-11-card-3",
          "front": "What should I review next?",
          "back": "Review close reading, then set one clear improvement target."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-11-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Phonics & Early Reading Guided Practice Lab 11: Close Reading\" in \"Language Arts\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Phonics & Early Reading Guided Practice Lab 11: Close Reading\" (Language Arts, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Phonics & Early Reading Guided Practice Lab 11: Close Reading\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Phonics & Early Reading Guided Practice Lab 11: Close Reading\" (Language Arts, grade band K2)."
      },
      "external": {
        "sourceLessonId": "lang-arts-k2-u1-external-generated-cycle-11",
        "order": 11,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-k2-u1-external-supp-seq-12",
      "title": "Phonics & Early Reading Checkpoint Quiz 12: Vocabulary In Context",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-12-q1",
          "text": "Which option best summarizes Phonics & Early Reading Checkpoint Quiz 12: Vocabulary In Context?",
          "skillId": "lang-arts-k2-u1-external-skill-phonics-early-reading-checkpoint-quiz-12-vocabulary-in-context-summary",
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
          "id": "lang-arts-k2-u1-external-supp-seq-12-q2",
          "text": "Which response shows correct application of Phonics & Early Reading Checkpoint Quiz 12: Vocabulary In Context?",
          "skillId": "lang-arts-k2-u1-external-skill-phonics-early-reading-checkpoint-quiz-12-vocabulary-in-context-apply",
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
          "id": "lang-arts-k2-u1-external-supp-seq-12-q3",
          "text": "Why is review important after learning Phonics & Early Reading Checkpoint Quiz 12: Vocabulary In Context?",
          "skillId": "lang-arts-k2-u1-external-skill-phonics-early-reading-checkpoint-quiz-12-vocabulary-in-context-review",
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
          "id": "lang-arts-k2-u1-external-supp-seq-12-ia1",
          "type": "matching_pairs",
          "title": "Phonics & Early Reading Checkpoint Quiz 12: Vocabulary In Context Error Match",
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
                "label": "I understand Phonics & Early Reading Checkpoint Quiz 12: Vocabulary In Context in notes but not in timed checks."
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
          "id": "lang-arts-k2-u1-external-supp-seq-12-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Phonics & Early Reading Checkpoint Quiz 12: Vocabulary In Context."
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
          "id": "lang-arts-k2-u1-external-supp-seq-12-chunk-intro",
          "title": "Vocabulary In Context Intro",
          "content": "Revise for clarity, grammar, and transition flow.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-12-chunk-practice",
          "title": "Guided Practice",
          "content": "Build a short paragraph with claim, evidence, and explanation.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-12-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying vocabulary in context, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-12-chunk-recap",
          "title": "Quick Recap",
          "content": "Review vocabulary in context, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-12-card-1",
          "front": "What is vocabulary in context?",
          "back": "It is a key Language Arts idea in Phonics & Early Reading."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-12-card-2",
          "front": "How can I practice vocabulary in context?",
          "back": "Build a short paragraph with claim, evidence, and explanation."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-12-card-3",
          "front": "What should I review next?",
          "back": "Review vocabulary in context, then set one clear improvement target."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-12-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Phonics & Early Reading Checkpoint Quiz 12: Vocabulary In Context\" in \"Language Arts\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Phonics & Early Reading Checkpoint Quiz 12: Vocabulary In Context\" (Language Arts, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Phonics & Early Reading Checkpoint Quiz 12: Vocabulary In Context\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Phonics & Early Reading Checkpoint Quiz 12: Vocabulary In Context\" (Language Arts, grade band K2)."
      },
      "external": {
        "sourceLessonId": "lang-arts-k2-u1-external-generated-cycle-12",
        "order": 12,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-k2-u1-external-supp-seq-13",
      "title": "Phonics & Early Reading Concept Walkthrough 13: Sentence Revision",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-13-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Phonics & Early Reading Concept Walkthrough 13: Sentence Revision."
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
          "id": "lang-arts-k2-u1-external-supp-seq-13-chunk-intro",
          "title": "Sentence Revision Intro",
          "content": "Read the prompt, then highlight key words and evidence lines.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-13-chunk-practice",
          "title": "Guided Practice",
          "content": "Annotate one short passage and summarize the main idea.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-13-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying sentence revision, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-13-chunk-recap",
          "title": "Quick Recap",
          "content": "Review sentence revision, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-13-card-1",
          "front": "What is sentence revision?",
          "back": "It is a key Language Arts idea in Phonics & Early Reading."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-13-card-2",
          "front": "How can I practice sentence revision?",
          "back": "Annotate one short passage and summarize the main idea."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-13-card-3",
          "front": "What should I review next?",
          "back": "Review sentence revision, then set one clear improvement target."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-13-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Phonics & Early Reading Concept Walkthrough 13: Sentence Revision\" in \"Language Arts\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Phonics & Early Reading Concept Walkthrough 13: Sentence Revision\" (Language Arts, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Phonics & Early Reading Concept Walkthrough 13: Sentence Revision\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Phonics & Early Reading Concept Walkthrough 13: Sentence Revision\" (Language Arts, grade band K2)."
      },
      "external": {
        "sourceLessonId": "lang-arts-k2-u1-external-generated-cycle-13",
        "order": 13,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-k2-u1-external-supp-seq-14",
      "title": "Phonics & Early Reading Guided Practice Lab 14: Paragraph Structure",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-14-ia1",
          "type": "drag_and_drop",
          "title": "Phonics & Early Reading Guided Practice Lab 14: Paragraph Structure Learning Flow",
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
          "id": "lang-arts-k2-u1-external-supp-seq-14-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Phonics & Early Reading Guided Practice Lab 14: Paragraph Structure."
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
          "id": "lang-arts-k2-u1-external-supp-seq-14-chunk-intro",
          "title": "Paragraph Structure Intro",
          "content": "Use one clear claim and support it with text-based details.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-14-chunk-practice",
          "title": "Guided Practice",
          "content": "Rewrite one sentence to improve precision and tone.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-14-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying paragraph structure, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-14-chunk-recap",
          "title": "Quick Recap",
          "content": "Review paragraph structure, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-14-card-1",
          "front": "What is paragraph structure?",
          "back": "It is a key Language Arts idea in Phonics & Early Reading."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-14-card-2",
          "front": "How can I practice paragraph structure?",
          "back": "Rewrite one sentence to improve precision and tone."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-14-card-3",
          "front": "What should I review next?",
          "back": "Review paragraph structure, then set one clear improvement target."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-14-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Phonics & Early Reading Guided Practice Lab 14: Paragraph Structure\" in \"Language Arts\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Phonics & Early Reading Guided Practice Lab 14: Paragraph Structure\" (Language Arts, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Phonics & Early Reading Guided Practice Lab 14: Paragraph Structure\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Phonics & Early Reading Guided Practice Lab 14: Paragraph Structure\" (Language Arts, grade band K2)."
      },
      "external": {
        "sourceLessonId": "lang-arts-k2-u1-external-generated-cycle-14",
        "order": 14,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-k2-u1-external-supp-seq-15",
      "title": "Phonics & Early Reading Checkpoint Quiz 15: Evidence Based Response",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-15-q1",
          "text": "Which option best summarizes Phonics & Early Reading Checkpoint Quiz 15: Evidence Based Response?",
          "skillId": "lang-arts-k2-u1-external-skill-phonics-early-reading-checkpoint-quiz-15-evidence-based-response-summary",
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
          "id": "lang-arts-k2-u1-external-supp-seq-15-q2",
          "text": "Which response shows correct application of Phonics & Early Reading Checkpoint Quiz 15: Evidence Based Response?",
          "skillId": "lang-arts-k2-u1-external-skill-phonics-early-reading-checkpoint-quiz-15-evidence-based-response-apply",
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
          "id": "lang-arts-k2-u1-external-supp-seq-15-q3",
          "text": "Why is review important after learning Phonics & Early Reading Checkpoint Quiz 15: Evidence Based Response?",
          "skillId": "lang-arts-k2-u1-external-skill-phonics-early-reading-checkpoint-quiz-15-evidence-based-response-review",
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
          "id": "lang-arts-k2-u1-external-supp-seq-15-ia1",
          "type": "matching_pairs",
          "title": "Phonics & Early Reading Checkpoint Quiz 15: Evidence Based Response Error Match",
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
                "label": "I understand Phonics & Early Reading Checkpoint Quiz 15: Evidence Based Response in notes but not in timed checks."
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
          "id": "lang-arts-k2-u1-external-supp-seq-15-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Phonics & Early Reading Checkpoint Quiz 15: Evidence Based Response."
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
          "id": "lang-arts-k2-u1-external-supp-seq-15-chunk-intro",
          "title": "Evidence Based Response Intro",
          "content": "Revise for clarity, grammar, and transition flow.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-15-chunk-practice",
          "title": "Guided Practice",
          "content": "Build a short paragraph with claim, evidence, and explanation.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-15-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying evidence-based response, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-15-chunk-recap",
          "title": "Quick Recap",
          "content": "Review evidence-based response, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-k2-u1-external-supp-seq-15-card-1",
          "front": "What is evidence-based response?",
          "back": "It is a key Language Arts idea in Phonics & Early Reading."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-15-card-2",
          "front": "How can I practice evidence-based response?",
          "back": "Build a short paragraph with claim, evidence, and explanation."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-15-card-3",
          "front": "What should I review next?",
          "back": "Review evidence-based response, then set one clear improvement target."
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-15-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Phonics & Early Reading Checkpoint Quiz 15: Evidence Based Response\" in \"Language Arts\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Phonics & Early Reading Checkpoint Quiz 15: Evidence Based Response\" (Language Arts, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Phonics & Early Reading Checkpoint Quiz 15: Evidence Based Response\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Phonics & Early Reading Checkpoint Quiz 15: Evidence Based Response\" (Language Arts, grade band K2)."
      },
      "external": {
        "sourceLessonId": "lang-arts-k2-u1-external-generated-cycle-15",
        "order": 15,
        "generatedSupplement": true
      }
    }
  ]
};
