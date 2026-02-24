import type { LearningModule } from "@/lib/modules/types";

export const LangArtsPrekU1ExternalModule: LearningModule = {
  "id": "lang-arts-prek-u1-external",
  "title": "Oral Language & Listening",
  "description": "Language Arts unit for Pre-K imported from external JSX curriculum.",
  "subject": "Language Arts",
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
    "Explain What Are Directions?.",
    "Explain One-Step Directions.",
    "Explain Two-Step Directions.",
    "Explain What is a Rhyme?.",
    "Explain Common Rhyme Families.",
    "Explain Finding Rhymes.",
    "Explain Why We Listen to Stories.",
    "Explain The Story Map: Characters."
  ],
  "gradeBand": "preK",
  "metadata": {
    "source": "../External_AI_Agents/lesson_platform (1).jsx",
    "sourceUnitId": "lang_arts-prek-u1",
    "sourceUnitIdCanonical": "lang-arts-prek-u1",
    "importedAt": "2026-02-24T03:43:31.745Z"
  },
  "external": {
    "unitOrder": 5,
    "estimatedHours": null,
    "prerequisites": []
  },
  "lessons": [
    {
      "id": "lang-arts-prek-u1-1",
      "title": "Following Simple Directions (PREK)",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "lang-arts-prek-u1-1-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Following Simple Directions (PREK)."
        }
      ],
      "objectives": [
        "Explain What Are Directions?.",
        "Explain One-Step Directions.",
        "Explain Two-Step Directions."
      ],
      "chunks": [
        {
          "id": "lang-arts-prek-u1-1-chunk-1",
          "title": "What Are Directions?",
          "content": "Directions are words that tell you what to do. When someone says 'Please sit down' or 'Clap your hands,' those are directions! Learning to listen and follow directions is a super important skill."
        },
        {
          "id": "lang-arts-prek-u1-1-chunk-2",
          "title": "One-Step Directions",
          "content": "A one-step direction has just ONE thing to do. Examples: 'Touch your nose.' 'Stand up.' 'Clap your hands.' Let's practice! Try each one as you read it."
        },
        {
          "id": "lang-arts-prek-u1-1-chunk-3",
          "title": "Two-Step Directions",
          "content": "A two-step direction has TWO things to do. Example: 'Pick up your pencil AND put it on the table.' Remember: listen to ALL the words before you start!"
        },
        {
          "id": "lang-arts-prek-u1-1-chunk-4",
          "title": "Tips for Good Listening",
          "content": "👀 Eyes on the speaker\n👂 Ears ready to hear\n🤐 Mouth quiet\n🧠 Brain thinking about the words\n\nThese four things help you be a GREAT listener!"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-prek-u1-1-card-1",
          "front": "What is a direction?",
          "back": "Words that tell you WHAT TO DO"
        },
        {
          "id": "lang-arts-prek-u1-1-card-2",
          "front": "One-step direction",
          "back": "ONE action: 'Sit down!'"
        },
        {
          "id": "lang-arts-prek-u1-1-card-3",
          "front": "Two-step direction",
          "back": "TWO actions: 'Stand up AND clap!'"
        },
        {
          "id": "lang-arts-prek-u1-1-card-4",
          "front": "Good listener eyes",
          "back": "Look at the speaker 👀"
        },
        {
          "id": "lang-arts-prek-u1-1-card-5",
          "front": "Good listener ears",
          "back": "Ready to hear 👂"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: A cheerful, colorful animated classroom with diverse cartoon children (ages 3-5) sitting in a circle. A friendly teacher character gives simple one-step and two-step directions (touch nose, clap hands, stand up). Each child joyfully follows along. Bright primary colors, soft 2D animation style, gentle background music, captions shown at bottom. Duration: 45 seconds. No text overlays except captions.",
        "seedanceAnimation": "Lottie animation prompt: Animated child character showing 'listening mode' — eyes wide open and attentive, ears highlighted with sound waves, mouth closed with tiny lock icon, brain glowing. Loop: 8 seconds. Flat 2D style, bright cheerful colors.",
        "lessonImage": "Create a clean educational illustration for \"Following Simple Directions (PREK)\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Following Simple Directions (PREK)\" (Language Arts, grade band preK)."
      },
      "localized": {
        "title": {
          "en": "Following Simple Directions"
        },
        "concept": {
          "en": "Following Simple Directions"
        }
      },
      "external": {
        "sourceLessonId": "lang_arts-prek-u1-1",
        "order": 1
      }
    },
    {
      "id": "lang-arts-prek-u1-2",
      "title": "Rhyming Words (PREK)",
      "type": "interactive",
      "duration": 15,
      "interactiveActivities": [
        {
          "id": "lang-arts-prek-u1-2-ia1",
          "type": "drag_and_drop",
          "title": "Rhyming Words (PREK) Learning Flow",
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
                "label": "Set a goal for Explain What is a Rhyme?..",
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
          "id": "lang-arts-prek-u1-2-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Rhyming Words (PREK)."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain What is a Rhyme?.",
          "Explain Common Rhyme Families.",
          "Explain Finding Rhymes."
        ]
      },
      "objectives": [
        "Explain What is a Rhyme?.",
        "Explain Common Rhyme Families.",
        "Explain Finding Rhymes."
      ],
      "chunks": [
        {
          "id": "lang-arts-prek-u1-2-chunk-1",
          "title": "What is a Rhyme?",
          "content": "Rhyming words sound the SAME at the END! Listen: cat 🐱, hat 🎩, bat 🦇. Do you hear it? C-AT, H-AT, B-AT. They all end with the '-at' sound!"
        },
        {
          "id": "lang-arts-prek-u1-2-chunk-2",
          "title": "Common Rhyme Families",
          "content": "The -AT family: cat, hat, bat, sat, mat, fat, rat\nThe -AN family: can, man, fan, pan, ran, tan\nThe -IN family: bin, fin, pin, win, tin, chin\nThe -OT family: dot, hot, pot, not, got, lot"
        },
        {
          "id": "lang-arts-prek-u1-2-chunk-3",
          "title": "Finding Rhymes",
          "content": "To find if two words rhyme, cover the BEGINNING of each word and listen to the end:\n- Dog / log → og / og ✅ RHYME!\n- Cat / dog → at / og ❌ NOT a rhyme\n- Sun / run → un / un ✅ RHYME!"
        },
        {
          "id": "lang-arts-prek-u1-2-chunk-4",
          "title": "Making Your Own Rhymes",
          "content": "Pick a word. Change just the FIRST sound to make a new word!\n- Start with 'cat' → change /c/ to /b/ → bat!\n- Start with 'hop' → change /h/ to /p/ → pop!\nYou're a rhyme maker now! 🌟"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-prek-u1-2-card-1",
          "front": "Do 'cat' and 'hat' rhyme?",
          "back": "YES! They both end in -AT 🐱🎩"
        },
        {
          "id": "lang-arts-prek-u1-2-card-2",
          "front": "Name a rhyme for 'sun'",
          "back": "Run, fun, bun, gun, done! ☀️"
        },
        {
          "id": "lang-arts-prek-u1-2-card-3",
          "front": "Do 'dog' and 'cat' rhyme?",
          "back": "NO! Dog ends in -OG, cat ends in -AT"
        },
        {
          "id": "lang-arts-prek-u1-2-card-4",
          "front": "The -IN family",
          "back": "bin, fin, pin, win, tin, chin"
        },
        {
          "id": "lang-arts-prek-u1-2-card-5",
          "front": "How do we check if words rhyme?",
          "back": "Listen to the ENDING sounds!"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Colorful animated world where words come to life as 3D characters. A cat, hat, and bat dance together because they rhyme. When words don't rhyme, they gently shake their heads. A friendly narrator voice explains rhyming. Words morph and transform showing the shared '-at' ending glowing in gold. Playful music. Ages 3-5. Duration: 40 seconds.",
        "seedanceAnimation": "Lottie animation: Word cards fly in — 'cat' 'hat' 'bat' — each with a tiny cartoon face. Their endings glow the same color (gold) to show they rhyme. Non-rhyming words (cat/dog) show different colored endings. Bouncy, fun animation. 10 second loop.",
        "lessonImage": "Create a clean educational illustration for \"Rhyming Words (PREK)\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Rhyming Words (PREK)\" (Language Arts, grade band preK)."
      },
      "localized": {
        "title": {
          "en": "Rhyming Words"
        },
        "concept": {
          "en": "Rhyming Words"
        }
      },
      "external": {
        "sourceLessonId": "lang_arts-prek-u1-2",
        "order": 2
      }
    },
    {
      "id": "lang-arts-prek-u1-3",
      "title": "Listening to Stories & Retelling (PREK)",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "lang-arts-prek-u1-3-q1",
          "text": "Characters are...",
          "skillId": "lang-arts-prek-u1-external-skill-listening-to-stories-retelling-prek-1",
          "options": [
            {
              "id": "a",
              "text": "Where the story happens"
            },
            {
              "id": "b",
              "text": "The people or animals in the story"
            },
            {
              "id": "c",
              "text": "What time it is"
            },
            {
              "id": "d",
              "text": "The title of the book"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "lang-arts-prek-u1-3-q2",
          "text": "Which word helps retell in ORDER?",
          "skillId": "lang-arts-prek-u1-external-skill-listening-to-stories-retelling-prek-2",
          "options": [
            {
              "id": "a",
              "text": "Purple"
            },
            {
              "id": "b",
              "text": "Fast"
            },
            {
              "id": "c",
              "text": "FIRST"
            },
            {
              "id": "d",
              "text": "Loud"
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "lang-arts-prek-u1-3-q3",
          "text": "Setting means...",
          "skillId": "lang-arts-prek-u1-external-skill-listening-to-stories-retelling-prek-3",
          "options": [
            {
              "id": "a",
              "text": "The characters"
            },
            {
              "id": "b",
              "text": "Where and when the story happens"
            },
            {
              "id": "c",
              "text": "The ending"
            },
            {
              "id": "d",
              "text": "The author"
            }
          ],
          "correctOptionId": "b"
        }
      ],
      "interactiveActivities": [
        {
          "id": "lang-arts-prek-u1-3-ia1",
          "type": "matching_pairs",
          "title": "Listening to Stories & Retelling (PREK) Error Match",
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
                "label": "I still mix up Explain Why We Listen to Stories.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Listening to Stories & Retelling (PREK) in notes but not in timed checks."
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
        "timeLimitMinutes": 14,
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
          "id": "lang-arts-prek-u1-3-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Listening to Stories & Retelling (PREK)."
        }
      ],
      "objectives": [
        "Explain Why We Listen to Stories.",
        "Explain The Story Map: Characters.",
        "Explain The Story Map: Setting."
      ],
      "chunks": [
        {
          "id": "lang-arts-prek-u1-3-chunk-1",
          "title": "Why We Listen to Stories",
          "content": "Stories take us on adventures! When we listen carefully, we can picture the story in our minds like a movie. Good listeners remember: WHO is in the story, WHERE the story happens, and WHAT happens."
        },
        {
          "id": "lang-arts-prek-u1-3-chunk-2",
          "title": "The Story Map: Characters",
          "content": "CHARACTERS are the people or animals in the story. They are WHO the story is about.\n\nExample: In 'The Three Little Pigs,' the characters are the three pigs 🐷🐷🐷 and the wolf 🐺."
        },
        {
          "id": "lang-arts-prek-u1-3-chunk-3",
          "title": "The Story Map: Setting",
          "content": "The SETTING is WHERE and WHEN the story takes place. It can be a forest, a house, outer space, long ago, or today!\n\nExample: The Three Little Pigs takes place in houses in the countryside."
        },
        {
          "id": "lang-arts-prek-u1-3-chunk-4",
          "title": "Retelling in Order",
          "content": "Retelling means telling what happened in ORDER: First, Next, Then, Last.\n\n1st: The three pigs each built a house\n2nd: The wolf came and huffed and puffed\n3rd: The brick house saved them all!\n\nUsing ORDER WORDS makes your retelling clear!"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-prek-u1-3-card-1",
          "front": "What are CHARACTERS?",
          "back": "The people or animals in the story 👥"
        },
        {
          "id": "lang-arts-prek-u1-3-card-2",
          "front": "What is the SETTING?",
          "back": "WHERE and WHEN the story happens 🏡"
        },
        {
          "id": "lang-arts-prek-u1-3-card-3",
          "front": "First order word for retelling",
          "back": "FIRST... or IN THE BEGINNING..."
        },
        {
          "id": "lang-arts-prek-u1-3-card-4",
          "front": "Middle order word",
          "back": "NEXT... THEN... AFTER THAT..."
        },
        {
          "id": "lang-arts-prek-u1-3-card-5",
          "front": "Ending order word",
          "back": "LAST... FINALLY... AT THE END..."
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: A magical animated storybook opens, revealing a classic fairy tale world. A friendly narrator character (owl with glasses) appears on screen and reads a simple 3-event story aloud. Story events are illustrated in warm, painterly style. At the end, order words 'First', 'Next', 'Last' appear as the owl retells the story. Cozy, warm colors. Ages 4-6. Duration: 60 seconds.",
        "seedanceAnimation": "Lottie animation: Three sequential panels (story strip) showing 'First' 'Next' 'Last' with icons. Each panel slides in from the right with a soft bounce. Stars twinkle when each word appears. Clean, flat design. 12 second loop.",
        "lessonImage": "Create a clean educational illustration for \"Listening to Stories & Retelling (PREK)\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Listening to Stories & Retelling (PREK)\" (Language Arts, grade band preK)."
      },
      "localized": {
        "title": {
          "en": "Listening to Stories & Retelling"
        },
        "concept": {
          "en": "Listening to Stories & Retelling"
        }
      },
      "external": {
        "sourceLessonId": "lang_arts-prek-u1-3",
        "order": 3
      }
    },
    {
      "id": "lang-arts-prek-u1-external-supp-seq-04",
      "title": "Oral Language & Listening Concept Walkthrough 4: Paragraph Structure",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-04-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Oral Language & Listening Concept Walkthrough 4: Paragraph Structure."
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
          "id": "lang-arts-prek-u1-external-supp-seq-04-chunk-intro",
          "title": "Paragraph Structure Intro",
          "content": "Read the prompt, then highlight key words and evidence lines.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-04-chunk-practice",
          "title": "Guided Practice",
          "content": "Annotate one short passage and summarize the main idea.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-04-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying paragraph structure, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-04-chunk-recap",
          "title": "Quick Recap",
          "content": "Review paragraph structure, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-04-card-1",
          "front": "What is paragraph structure?",
          "back": "It is a key Language Arts idea in Oral Language & Listening."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-04-card-2",
          "front": "How can I practice paragraph structure?",
          "back": "Annotate one short passage and summarize the main idea."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-04-card-3",
          "front": "What should I review next?",
          "back": "Review paragraph structure, then set one clear improvement target."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-04-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Oral Language & Listening Concept Walkthrough 4: Paragraph Structure\" in \"Language Arts\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Oral Language & Listening Concept Walkthrough 4: Paragraph Structure\" (Language Arts, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Oral Language & Listening Concept Walkthrough 4: Paragraph Structure\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Oral Language & Listening Concept Walkthrough 4: Paragraph Structure\" (Language Arts, grade band preK)."
      },
      "external": {
        "sourceLessonId": "lang-arts-prek-u1-external-generated-cycle-4",
        "order": 4,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-prek-u1-external-supp-seq-05",
      "title": "Oral Language & Listening Guided Practice Lab 5: Evidence Based Response",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-05-ia1",
          "type": "drag_and_drop",
          "title": "Oral Language & Listening Guided Practice Lab 5: Evidence Based Response Learning Flow",
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
          "id": "lang-arts-prek-u1-external-supp-seq-05-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Oral Language & Listening Guided Practice Lab 5: Evidence Based Response."
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
          "id": "lang-arts-prek-u1-external-supp-seq-05-chunk-intro",
          "title": "Evidence Based Response Intro",
          "content": "Use one clear claim and support it with text-based details.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-05-chunk-practice",
          "title": "Guided Practice",
          "content": "Rewrite one sentence to improve precision and tone.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-05-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying evidence-based response, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-05-chunk-recap",
          "title": "Quick Recap",
          "content": "Review evidence-based response, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-05-card-1",
          "front": "What is evidence-based response?",
          "back": "It is a key Language Arts idea in Oral Language & Listening."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-05-card-2",
          "front": "How can I practice evidence-based response?",
          "back": "Rewrite one sentence to improve precision and tone."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-05-card-3",
          "front": "What should I review next?",
          "back": "Review evidence-based response, then set one clear improvement target."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-05-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Oral Language & Listening Guided Practice Lab 5: Evidence Based Response\" in \"Language Arts\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Oral Language & Listening Guided Practice Lab 5: Evidence Based Response\" (Language Arts, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Oral Language & Listening Guided Practice Lab 5: Evidence Based Response\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Oral Language & Listening Guided Practice Lab 5: Evidence Based Response\" (Language Arts, grade band preK)."
      },
      "external": {
        "sourceLessonId": "lang-arts-prek-u1-external-generated-cycle-5",
        "order": 5,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-prek-u1-external-supp-seq-06",
      "title": "Oral Language & Listening Checkpoint Quiz 6: Close Reading",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-06-q1",
          "text": "Which option best summarizes Oral Language & Listening Checkpoint Quiz 6: Close Reading?",
          "skillId": "lang-arts-prek-u1-external-skill-oral-language-listening-checkpoint-quiz-6-close-reading-summary",
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
          "id": "lang-arts-prek-u1-external-supp-seq-06-q2",
          "text": "Which response shows correct application of Oral Language & Listening Checkpoint Quiz 6: Close Reading?",
          "skillId": "lang-arts-prek-u1-external-skill-oral-language-listening-checkpoint-quiz-6-close-reading-apply",
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
          "id": "lang-arts-prek-u1-external-supp-seq-06-q3",
          "text": "Why is review important after learning Oral Language & Listening Checkpoint Quiz 6: Close Reading?",
          "skillId": "lang-arts-prek-u1-external-skill-oral-language-listening-checkpoint-quiz-6-close-reading-review",
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
          "id": "lang-arts-prek-u1-external-supp-seq-06-ia1",
          "type": "matching_pairs",
          "title": "Oral Language & Listening Checkpoint Quiz 6: Close Reading Error Match",
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
                "label": "I understand Oral Language & Listening Checkpoint Quiz 6: Close Reading in notes but not in timed checks."
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
          "id": "lang-arts-prek-u1-external-supp-seq-06-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Oral Language & Listening Checkpoint Quiz 6: Close Reading."
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
          "id": "lang-arts-prek-u1-external-supp-seq-06-chunk-intro",
          "title": "Close Reading Intro",
          "content": "Revise for clarity, grammar, and transition flow.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-06-chunk-practice",
          "title": "Guided Practice",
          "content": "Build a short paragraph with claim, evidence, and explanation.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-06-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying close reading, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-06-chunk-recap",
          "title": "Quick Recap",
          "content": "Review close reading, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-06-card-1",
          "front": "What is close reading?",
          "back": "It is a key Language Arts idea in Oral Language & Listening."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-06-card-2",
          "front": "How can I practice close reading?",
          "back": "Build a short paragraph with claim, evidence, and explanation."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-06-card-3",
          "front": "What should I review next?",
          "back": "Review close reading, then set one clear improvement target."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-06-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Oral Language & Listening Checkpoint Quiz 6: Close Reading\" in \"Language Arts\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Oral Language & Listening Checkpoint Quiz 6: Close Reading\" (Language Arts, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Oral Language & Listening Checkpoint Quiz 6: Close Reading\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Oral Language & Listening Checkpoint Quiz 6: Close Reading\" (Language Arts, grade band preK)."
      },
      "external": {
        "sourceLessonId": "lang-arts-prek-u1-external-generated-cycle-6",
        "order": 6,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-prek-u1-external-supp-seq-07",
      "title": "Oral Language & Listening Concept Walkthrough 7: Vocabulary In Context",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-07-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Oral Language & Listening Concept Walkthrough 7: Vocabulary In Context."
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
          "id": "lang-arts-prek-u1-external-supp-seq-07-chunk-intro",
          "title": "Vocabulary In Context Intro",
          "content": "Read the prompt, then highlight key words and evidence lines.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-07-chunk-practice",
          "title": "Guided Practice",
          "content": "Annotate one short passage and summarize the main idea.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-07-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying vocabulary in context, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-07-chunk-recap",
          "title": "Quick Recap",
          "content": "Review vocabulary in context, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-07-card-1",
          "front": "What is vocabulary in context?",
          "back": "It is a key Language Arts idea in Oral Language & Listening."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-07-card-2",
          "front": "How can I practice vocabulary in context?",
          "back": "Annotate one short passage and summarize the main idea."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-07-card-3",
          "front": "What should I review next?",
          "back": "Review vocabulary in context, then set one clear improvement target."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-07-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Oral Language & Listening Concept Walkthrough 7: Vocabulary In Context\" in \"Language Arts\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Oral Language & Listening Concept Walkthrough 7: Vocabulary In Context\" (Language Arts, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Oral Language & Listening Concept Walkthrough 7: Vocabulary In Context\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Oral Language & Listening Concept Walkthrough 7: Vocabulary In Context\" (Language Arts, grade band preK)."
      },
      "external": {
        "sourceLessonId": "lang-arts-prek-u1-external-generated-cycle-7",
        "order": 7,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-prek-u1-external-supp-seq-08",
      "title": "Oral Language & Listening Guided Practice Lab 8: Sentence Revision",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-08-ia1",
          "type": "drag_and_drop",
          "title": "Oral Language & Listening Guided Practice Lab 8: Sentence Revision Learning Flow",
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
          "id": "lang-arts-prek-u1-external-supp-seq-08-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Oral Language & Listening Guided Practice Lab 8: Sentence Revision."
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
          "id": "lang-arts-prek-u1-external-supp-seq-08-chunk-intro",
          "title": "Sentence Revision Intro",
          "content": "Use one clear claim and support it with text-based details.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-08-chunk-practice",
          "title": "Guided Practice",
          "content": "Rewrite one sentence to improve precision and tone.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-08-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying sentence revision, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-08-chunk-recap",
          "title": "Quick Recap",
          "content": "Review sentence revision, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-08-card-1",
          "front": "What is sentence revision?",
          "back": "It is a key Language Arts idea in Oral Language & Listening."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-08-card-2",
          "front": "How can I practice sentence revision?",
          "back": "Rewrite one sentence to improve precision and tone."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-08-card-3",
          "front": "What should I review next?",
          "back": "Review sentence revision, then set one clear improvement target."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-08-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Oral Language & Listening Guided Practice Lab 8: Sentence Revision\" in \"Language Arts\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Oral Language & Listening Guided Practice Lab 8: Sentence Revision\" (Language Arts, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Oral Language & Listening Guided Practice Lab 8: Sentence Revision\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Oral Language & Listening Guided Practice Lab 8: Sentence Revision\" (Language Arts, grade band preK)."
      },
      "external": {
        "sourceLessonId": "lang-arts-prek-u1-external-generated-cycle-8",
        "order": 8,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-prek-u1-external-supp-seq-09",
      "title": "Oral Language & Listening Checkpoint Quiz 9: Paragraph Structure",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-09-q1",
          "text": "Which option best summarizes Oral Language & Listening Checkpoint Quiz 9: Paragraph Structure?",
          "skillId": "lang-arts-prek-u1-external-skill-oral-language-listening-checkpoint-quiz-9-paragraph-structure-summary",
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
          "id": "lang-arts-prek-u1-external-supp-seq-09-q2",
          "text": "Which response shows correct application of Oral Language & Listening Checkpoint Quiz 9: Paragraph Structure?",
          "skillId": "lang-arts-prek-u1-external-skill-oral-language-listening-checkpoint-quiz-9-paragraph-structure-apply",
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
          "id": "lang-arts-prek-u1-external-supp-seq-09-q3",
          "text": "Why is review important after learning Oral Language & Listening Checkpoint Quiz 9: Paragraph Structure?",
          "skillId": "lang-arts-prek-u1-external-skill-oral-language-listening-checkpoint-quiz-9-paragraph-structure-review",
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
          "id": "lang-arts-prek-u1-external-supp-seq-09-ia1",
          "type": "matching_pairs",
          "title": "Oral Language & Listening Checkpoint Quiz 9: Paragraph Structure Error Match",
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
                "label": "I understand Oral Language & Listening Checkpoint Quiz 9: Paragraph Structure in notes but not in timed checks."
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
          "id": "lang-arts-prek-u1-external-supp-seq-09-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Oral Language & Listening Checkpoint Quiz 9: Paragraph Structure."
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
          "id": "lang-arts-prek-u1-external-supp-seq-09-chunk-intro",
          "title": "Paragraph Structure Intro",
          "content": "Revise for clarity, grammar, and transition flow.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-09-chunk-practice",
          "title": "Guided Practice",
          "content": "Build a short paragraph with claim, evidence, and explanation.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-09-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying paragraph structure, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-09-chunk-recap",
          "title": "Quick Recap",
          "content": "Review paragraph structure, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-09-card-1",
          "front": "What is paragraph structure?",
          "back": "It is a key Language Arts idea in Oral Language & Listening."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-09-card-2",
          "front": "How can I practice paragraph structure?",
          "back": "Build a short paragraph with claim, evidence, and explanation."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-09-card-3",
          "front": "What should I review next?",
          "back": "Review paragraph structure, then set one clear improvement target."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-09-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Oral Language & Listening Checkpoint Quiz 9: Paragraph Structure\" in \"Language Arts\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Oral Language & Listening Checkpoint Quiz 9: Paragraph Structure\" (Language Arts, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Oral Language & Listening Checkpoint Quiz 9: Paragraph Structure\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Oral Language & Listening Checkpoint Quiz 9: Paragraph Structure\" (Language Arts, grade band preK)."
      },
      "external": {
        "sourceLessonId": "lang-arts-prek-u1-external-generated-cycle-9",
        "order": 9,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-prek-u1-external-supp-seq-10",
      "title": "Oral Language & Listening Concept Walkthrough 10: Evidence Based Response",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-10-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Oral Language & Listening Concept Walkthrough 10: Evidence Based Response."
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
          "id": "lang-arts-prek-u1-external-supp-seq-10-chunk-intro",
          "title": "Evidence Based Response Intro",
          "content": "Read the prompt, then highlight key words and evidence lines.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-10-chunk-practice",
          "title": "Guided Practice",
          "content": "Annotate one short passage and summarize the main idea.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-10-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying evidence-based response, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-10-chunk-recap",
          "title": "Quick Recap",
          "content": "Review evidence-based response, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-10-card-1",
          "front": "What is evidence-based response?",
          "back": "It is a key Language Arts idea in Oral Language & Listening."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-10-card-2",
          "front": "How can I practice evidence-based response?",
          "back": "Annotate one short passage and summarize the main idea."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-10-card-3",
          "front": "What should I review next?",
          "back": "Review evidence-based response, then set one clear improvement target."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-10-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Oral Language & Listening Concept Walkthrough 10: Evidence Based Response\" in \"Language Arts\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Oral Language & Listening Concept Walkthrough 10: Evidence Based Response\" (Language Arts, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Oral Language & Listening Concept Walkthrough 10: Evidence Based Response\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Oral Language & Listening Concept Walkthrough 10: Evidence Based Response\" (Language Arts, grade band preK)."
      },
      "external": {
        "sourceLessonId": "lang-arts-prek-u1-external-generated-cycle-10",
        "order": 10,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-prek-u1-external-supp-seq-11",
      "title": "Oral Language & Listening Guided Practice Lab 11: Close Reading",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-11-ia1",
          "type": "drag_and_drop",
          "title": "Oral Language & Listening Guided Practice Lab 11: Close Reading Learning Flow",
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
          "id": "lang-arts-prek-u1-external-supp-seq-11-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Oral Language & Listening Guided Practice Lab 11: Close Reading."
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
          "id": "lang-arts-prek-u1-external-supp-seq-11-chunk-intro",
          "title": "Close Reading Intro",
          "content": "Use one clear claim and support it with text-based details.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-11-chunk-practice",
          "title": "Guided Practice",
          "content": "Rewrite one sentence to improve precision and tone.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-11-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying close reading, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-11-chunk-recap",
          "title": "Quick Recap",
          "content": "Review close reading, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-11-card-1",
          "front": "What is close reading?",
          "back": "It is a key Language Arts idea in Oral Language & Listening."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-11-card-2",
          "front": "How can I practice close reading?",
          "back": "Rewrite one sentence to improve precision and tone."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-11-card-3",
          "front": "What should I review next?",
          "back": "Review close reading, then set one clear improvement target."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-11-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Oral Language & Listening Guided Practice Lab 11: Close Reading\" in \"Language Arts\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Oral Language & Listening Guided Practice Lab 11: Close Reading\" (Language Arts, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Oral Language & Listening Guided Practice Lab 11: Close Reading\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Oral Language & Listening Guided Practice Lab 11: Close Reading\" (Language Arts, grade band preK)."
      },
      "external": {
        "sourceLessonId": "lang-arts-prek-u1-external-generated-cycle-11",
        "order": 11,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-prek-u1-external-supp-seq-12",
      "title": "Oral Language & Listening Checkpoint Quiz 12: Vocabulary In Context",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-12-q1",
          "text": "Which option best summarizes Oral Language & Listening Checkpoint Quiz 12: Vocabulary In Context?",
          "skillId": "lang-arts-prek-u1-external-skill-oral-language-listening-checkpoint-quiz-12-vocabulary-in-context-summary",
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
          "id": "lang-arts-prek-u1-external-supp-seq-12-q2",
          "text": "Which response shows correct application of Oral Language & Listening Checkpoint Quiz 12: Vocabulary In Context?",
          "skillId": "lang-arts-prek-u1-external-skill-oral-language-listening-checkpoint-quiz-12-vocabulary-in-context-apply",
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
          "id": "lang-arts-prek-u1-external-supp-seq-12-q3",
          "text": "Why is review important after learning Oral Language & Listening Checkpoint Quiz 12: Vocabulary In Context?",
          "skillId": "lang-arts-prek-u1-external-skill-oral-language-listening-checkpoint-quiz-12-vocabulary-in-context-review",
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
          "id": "lang-arts-prek-u1-external-supp-seq-12-ia1",
          "type": "matching_pairs",
          "title": "Oral Language & Listening Checkpoint Quiz 12: Vocabulary In Context Error Match",
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
                "label": "I understand Oral Language & Listening Checkpoint Quiz 12: Vocabulary In Context in notes but not in timed checks."
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
          "id": "lang-arts-prek-u1-external-supp-seq-12-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Oral Language & Listening Checkpoint Quiz 12: Vocabulary In Context."
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
          "id": "lang-arts-prek-u1-external-supp-seq-12-chunk-intro",
          "title": "Vocabulary In Context Intro",
          "content": "Revise for clarity, grammar, and transition flow.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-12-chunk-practice",
          "title": "Guided Practice",
          "content": "Build a short paragraph with claim, evidence, and explanation.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-12-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying vocabulary in context, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-12-chunk-recap",
          "title": "Quick Recap",
          "content": "Review vocabulary in context, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-12-card-1",
          "front": "What is vocabulary in context?",
          "back": "It is a key Language Arts idea in Oral Language & Listening."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-12-card-2",
          "front": "How can I practice vocabulary in context?",
          "back": "Build a short paragraph with claim, evidence, and explanation."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-12-card-3",
          "front": "What should I review next?",
          "back": "Review vocabulary in context, then set one clear improvement target."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-12-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Oral Language & Listening Checkpoint Quiz 12: Vocabulary In Context\" in \"Language Arts\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Oral Language & Listening Checkpoint Quiz 12: Vocabulary In Context\" (Language Arts, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Oral Language & Listening Checkpoint Quiz 12: Vocabulary In Context\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Oral Language & Listening Checkpoint Quiz 12: Vocabulary In Context\" (Language Arts, grade band preK)."
      },
      "external": {
        "sourceLessonId": "lang-arts-prek-u1-external-generated-cycle-12",
        "order": 12,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-prek-u1-external-supp-seq-13",
      "title": "Oral Language & Listening Concept Walkthrough 13: Sentence Revision",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-13-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Oral Language & Listening Concept Walkthrough 13: Sentence Revision."
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
          "id": "lang-arts-prek-u1-external-supp-seq-13-chunk-intro",
          "title": "Sentence Revision Intro",
          "content": "Read the prompt, then highlight key words and evidence lines.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-13-chunk-practice",
          "title": "Guided Practice",
          "content": "Annotate one short passage and summarize the main idea.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-13-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying sentence revision, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-13-chunk-recap",
          "title": "Quick Recap",
          "content": "Review sentence revision, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-13-card-1",
          "front": "What is sentence revision?",
          "back": "It is a key Language Arts idea in Oral Language & Listening."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-13-card-2",
          "front": "How can I practice sentence revision?",
          "back": "Annotate one short passage and summarize the main idea."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-13-card-3",
          "front": "What should I review next?",
          "back": "Review sentence revision, then set one clear improvement target."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-13-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Oral Language & Listening Concept Walkthrough 13: Sentence Revision\" in \"Language Arts\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Oral Language & Listening Concept Walkthrough 13: Sentence Revision\" (Language Arts, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Oral Language & Listening Concept Walkthrough 13: Sentence Revision\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Oral Language & Listening Concept Walkthrough 13: Sentence Revision\" (Language Arts, grade band preK)."
      },
      "external": {
        "sourceLessonId": "lang-arts-prek-u1-external-generated-cycle-13",
        "order": 13,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-prek-u1-external-supp-seq-14",
      "title": "Oral Language & Listening Guided Practice Lab 14: Paragraph Structure",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-14-ia1",
          "type": "drag_and_drop",
          "title": "Oral Language & Listening Guided Practice Lab 14: Paragraph Structure Learning Flow",
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
          "id": "lang-arts-prek-u1-external-supp-seq-14-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Oral Language & Listening Guided Practice Lab 14: Paragraph Structure."
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
          "id": "lang-arts-prek-u1-external-supp-seq-14-chunk-intro",
          "title": "Paragraph Structure Intro",
          "content": "Use one clear claim and support it with text-based details.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-14-chunk-practice",
          "title": "Guided Practice",
          "content": "Rewrite one sentence to improve precision and tone.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-14-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying paragraph structure, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-14-chunk-recap",
          "title": "Quick Recap",
          "content": "Review paragraph structure, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-14-card-1",
          "front": "What is paragraph structure?",
          "back": "It is a key Language Arts idea in Oral Language & Listening."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-14-card-2",
          "front": "How can I practice paragraph structure?",
          "back": "Rewrite one sentence to improve precision and tone."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-14-card-3",
          "front": "What should I review next?",
          "back": "Review paragraph structure, then set one clear improvement target."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-14-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Oral Language & Listening Guided Practice Lab 14: Paragraph Structure\" in \"Language Arts\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Oral Language & Listening Guided Practice Lab 14: Paragraph Structure\" (Language Arts, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Oral Language & Listening Guided Practice Lab 14: Paragraph Structure\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Oral Language & Listening Guided Practice Lab 14: Paragraph Structure\" (Language Arts, grade band preK)."
      },
      "external": {
        "sourceLessonId": "lang-arts-prek-u1-external-generated-cycle-14",
        "order": 14,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-prek-u1-external-supp-seq-15",
      "title": "Oral Language & Listening Checkpoint Quiz 15: Evidence Based Response",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-15-q1",
          "text": "Which option best summarizes Oral Language & Listening Checkpoint Quiz 15: Evidence Based Response?",
          "skillId": "lang-arts-prek-u1-external-skill-oral-language-listening-checkpoint-quiz-15-evidence-based-response-summary",
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
          "id": "lang-arts-prek-u1-external-supp-seq-15-q2",
          "text": "Which response shows correct application of Oral Language & Listening Checkpoint Quiz 15: Evidence Based Response?",
          "skillId": "lang-arts-prek-u1-external-skill-oral-language-listening-checkpoint-quiz-15-evidence-based-response-apply",
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
          "id": "lang-arts-prek-u1-external-supp-seq-15-q3",
          "text": "Why is review important after learning Oral Language & Listening Checkpoint Quiz 15: Evidence Based Response?",
          "skillId": "lang-arts-prek-u1-external-skill-oral-language-listening-checkpoint-quiz-15-evidence-based-response-review",
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
          "id": "lang-arts-prek-u1-external-supp-seq-15-ia1",
          "type": "matching_pairs",
          "title": "Oral Language & Listening Checkpoint Quiz 15: Evidence Based Response Error Match",
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
                "label": "I understand Oral Language & Listening Checkpoint Quiz 15: Evidence Based Response in notes but not in timed checks."
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
          "id": "lang-arts-prek-u1-external-supp-seq-15-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Oral Language & Listening Checkpoint Quiz 15: Evidence Based Response."
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
          "id": "lang-arts-prek-u1-external-supp-seq-15-chunk-intro",
          "title": "Evidence Based Response Intro",
          "content": "Revise for clarity, grammar, and transition flow.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-15-chunk-practice",
          "title": "Guided Practice",
          "content": "Build a short paragraph with claim, evidence, and explanation.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-15-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying evidence-based response, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-15-chunk-recap",
          "title": "Quick Recap",
          "content": "Review evidence-based response, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-prek-u1-external-supp-seq-15-card-1",
          "front": "What is evidence-based response?",
          "back": "It is a key Language Arts idea in Oral Language & Listening."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-15-card-2",
          "front": "How can I practice evidence-based response?",
          "back": "Build a short paragraph with claim, evidence, and explanation."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-15-card-3",
          "front": "What should I review next?",
          "back": "Review evidence-based response, then set one clear improvement target."
        },
        {
          "id": "lang-arts-prek-u1-external-supp-seq-15-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Oral Language & Listening Checkpoint Quiz 15: Evidence Based Response\" in \"Language Arts\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Oral Language & Listening Checkpoint Quiz 15: Evidence Based Response\" (Language Arts, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Oral Language & Listening Checkpoint Quiz 15: Evidence Based Response\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Oral Language & Listening Checkpoint Quiz 15: Evidence Based Response\" (Language Arts, grade band preK)."
      },
      "external": {
        "sourceLessonId": "lang-arts-prek-u1-external-generated-cycle-15",
        "order": 15,
        "generatedSupplement": true
      }
    }
  ]
};
