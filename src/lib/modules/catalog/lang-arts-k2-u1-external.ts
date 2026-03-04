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
          "content": "In the English alphabet, we have five special letters called vowels: A, E, I, O, and U. These letters are super important because every single word we use has at least one vowel in it! Think of vowels as the singers of our alphabet. They help make our words sound beautiful and clear, just like how a song needs a good melody to be enjoyable. Without vowels, it would be really hard to read words out loud, and our sentences would sound funny! So, let's celebrate our vowels and remember how important they are in every word we say. Next time you read or write, see if you can spot the vowels in your words. They are always there, helping us express our thoughts and ideas!"
        },
        {
          "id": "lang-arts-k2-u1-1-chunk-2",
          "title": "Short A — /a/",
          "content": "The short vowel sound for the letter A is just like the sound you hear in the word 'apple' 🍎. This sound is very special because it helps us read and write many words! Here are some fun words that use the short A sound: cat, hat, bat, map, nap, tap, cap, jam, man, and ran. Let's practice saying a fun sentence together: 'The CAT sat on the MAT with a HAT!' Can you hear all the short A sounds in that sentence? Awesome! Keep practicing these words and sentences, and soon you'll be a vowel expert! Remember, every time you see the letter A, think about the sound it makes. You're doing a fantastic job learning about vowels!"
        },
        {
          "id": "lang-arts-k2-u1-1-chunk-3",
          "title": "Short E, I, O, U",
          "content": "Let's dive into the exciting world of short vowel sounds! First, we have the short E sound, which you can hear in words like bed, red, ten, hen, let, net, and pet. Can you think of any other words that have the short E sound? Next up is the short I sound! You can find this sound in words such as big, pig, fit, sit, lip, dip, him, and win. How about trying to say these words out loud? Now, let’s move on to the short O sound. This sound is present in words like hot, pot, dog, log, fox, box, hop, and top. Can you think of a fun sentence using some of these words? Lastly, we have the short U sound. You can hear it in words like bus, cup, fun, run, bug, hug, mud, and sun. Each of these short vowel sounds helps us build words that we can read and say. Let’s practice saying these sounds together and see how many words we can come up with! Learning these sounds is a fun way to become great readers!"
        },
        {
          "id": "lang-arts-k2-u1-1-chunk-4",
          "title": "CVC Words (Consonant-Vowel-Consonant)",
          "content": "Many short vowel words follow a special pattern called CVC, which stands for Consonant-Vowel-Consonant. For example, in the word C-A-T, we have a consonant, a short A vowel, and another consonant. Similarly, in D-O-G, we have a consonant, a short O vowel, and a consonant. And in S-I-T, we have a consonant, a short I vowel, and a consonant. When we blend these sounds together, we can read the word! For instance, /c/ + /a/ + /t/ makes the word CAT! 🐱 Isn't that exciting? Let’s practice blending more CVC words!"
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
          "content": "Sight words are special words that we see very often when we read. Good readers can recognize these words instantly, which means they don’t have to sound them out! These words are so common in books that learning them helps us read much faster and easier. By knowing sight words, we can enjoy stories without getting stuck on every single word. When we learn sight words, we can read with more confidence and have more fun with our books! Let’s discover some sight words together and see how they can make reading more enjoyable and exciting! We can practice them in games and activities, making our reading adventures even better!"
        },
        {
          "id": "lang-arts-k2-u1-2-chunk-2",
          "title": "Dolch List: Pre-Primer (Most Common)",
          "content": "Here is a list of some of the most common sight words you will find in children's books: a, and, away, big, blue, can, come, down, find, for, funny, go, help, here, I, in, is, it, jump, little, look, make, me, my, not, one, play, red, run, said, see, the, three, to, two, up, we, where, yellow, and you. These words are super important because they help us understand stories quickly. When we see these words often, we can read faster and enjoy our books even more! Let’s practice reading these words together. You can say them out loud with me, and we can even make up fun sentences using them. This will help us become even better readers and make reading time more exciting! Remember, the more we practice, the easier it will be to recognize these words in our favorite stories. Are you ready to start? Let’s go!"
        },
        {
          "id": "lang-arts-k2-u1-2-chunk-3",
          "title": "How to Learn Sight Words",
          "content": "Learning sight words can be fun and exciting! Here are three powerful strategies that will help you become a sight word superstar. First, 📖 READ the word in a sentence. This way, you can see how the word fits into a story or a phrase, making it easier to understand. Next, ✏️ WRITE the word by tracing it and then writing it three times. This practice helps your brain remember the shape and spelling of the word. Finally, 🗣️ SAY the word out loud! You can even spell it out loud to make it stick in your memory. Remember, practicing these strategies every day with just 5-10 words at a time will help you learn them quickly and easily. Keep up the great work, and soon you'll be reading like a pro!"
        },
        {
          "id": "lang-arts-k2-u1-2-chunk-4",
          "title": "Sight Words in Sentences",
          "content": "Let’s go on a fun adventure to find sight words in real sentences! Sight words are special words that we see often in books and stories. Here are some sentences for us to explore together: First, we have 'I can see the big red ball.' Can you spot the sight words in that sentence? Next, let’s look at this one: 'We can go and play here.' Take a moment to think about which words are sight words. And here’s another sentence for you: 'Look at me! I can jump up.' As you read these sentences, remember to underline every sight word you find. This practice will help you recognize these important words even faster when you see them in other stories! Keep up the great work, and let’s discover more sight words together!"
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
          "content": "In this supplemental check, we will reinforce the important concepts we learned in our Phonics and Early Reading lessons. This is a great opportunity to review what you have learned and see how much you remember. Let's have fun while we check our understanding of these key Language Arts ideas!\nContext recap: In this supplemental check, we will reinforce the important concepts we learned in our Phonics and Early Reading lessons. This is a great opportunity to review what you have learned and see how much you remember. Let's have fun while we check our understanding of these key Language Arts ideas!",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-quiz-chunk-recap",
          "title": "Quick Recap",
          "content": "As we wrap up our lesson, let's summarize one key idea we learned today. Think about what stood out to you the most! After that, let's plan one next step we can take to continue improving our reading skills. This could be practicing more sight words or reading a new book. Remember, every step you take helps you become a better reader!\nContext recap: As we wrap up our lesson, let's summarize one key idea we learned today. Think about what stood out to you the most! After that, let's plan one next step we can take to continue improving our reading skills. This could be practicing more sight words or reading a new book.",
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
          "content": "In this part of our lesson, we will read a prompt together. After reading, we will highlight the key words and important lines that give us evidence. This will help us understand the main idea better and make our writing stronger. Let’s get started and find those key words!\nContext recap: In this part of our lesson, we will read a prompt together. After reading, we will highlight the key words and important lines that give us evidence. This will help us understand the main idea better and make our writing stronger. Let’s get started and find those key words!",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-04-chunk-practice",
          "title": "Guided Practice",
          "content": "Now it's time for some guided practice! We will take a short passage and annotate it together. This means we will mark important parts and summarize the main idea. By doing this, we will learn how to identify key information and express it in our own words. Let’s have fun with this activity!\nContext recap: Now it's time for some guided practice! We will take a short passage and annotate it together. This means we will mark important parts and summarize the main idea. By doing this, we will learn how to identify key information and express it in our own words.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-04-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work on your paragraph structure, be on the lookout for a common mistake that many people make. Once you spot it, think about how you can fix it by using examples from the text to support your correction. This will help you understand how to create better paragraphs.\nContext recap: As you work on your paragraph structure, be on the lookout for a common mistake that many people make. Once you spot it, think about how you can fix it by using examples from the text to support your correction. This will help you understand how to create better paragraphs.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-04-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we learned about paragraph structure. Remember to think about one specific area where you can improve your writing. Setting a clear goal will help you become a better writer!\nContext recap: Let's take a moment to review what we learned about paragraph structure. Remember to think about one specific area where you can improve your writing. Setting a clear goal will help you become a better writer!\nWhy this matters: Quick Recap helps learners in Language Arts connect ideas from Phonics & Early Reading to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
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
          "content": "In this activity, you will make a strong statement, known as a claim, and then support it with details from the text. This means you will find specific pieces of information that back up what you are saying. It's like being a detective who finds clues to prove your point!\nContext recap: In this activity, you will make a strong statement, known as a claim, and then support it with details from the text. This means you will find specific pieces of information that back up what you are saying. It's like being a detective who finds clues to prove your point!",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-05-chunk-practice",
          "title": "Guided Practice",
          "content": "Now, let's practice! Take one of your sentences and think about how you can make it clearer and more effective. Try to change the words to make sure your message is strong and sounds just right. This will help your writing shine!\nContext recap: Now, let's practice! Take one of your sentences and think about how you can make it clearer and more effective. Try to change the words to make sure your message is strong and sounds just right. This will help your writing shine!",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-05-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work on your evidence-based responses, keep an eye out for a common mistake that can happen. When you notice it, think about how you can correct it by using evidence from the text. This will help you improve your writing and make your arguments stronger!\nContext recap: As you work on your evidence-based responses, keep an eye out for a common mistake that can happen. When you notice it, think about how you can correct it by using evidence from the text. This will help you improve your writing and make your arguments stronger!",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-05-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review what we learned about evidence-based responses. After that, think about one specific goal you want to achieve in your writing. Setting a clear target will help you focus on improving your skills!\nContext recap: Let's quickly review what we learned about evidence-based responses. After that, think about one specific goal you want to achieve in your writing. Setting a clear target will help you focus on improving your skills!\nWhy this matters: Quick Recap helps learners in Language Arts connect ideas from Phonics & Early Reading to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
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
          "content": "Before we start, remember to revise your writing. This means checking for clarity, making sure your grammar is correct, and ensuring that your ideas flow smoothly from one to the next. This will make your writing easier to understand!\nContext recap: Before we start, remember to revise your writing. This means checking for clarity, making sure your grammar is correct, and ensuring that your ideas flow smoothly from one to the next. This will make your writing easier to understand!",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-06-chunk-practice",
          "title": "Guided Practice",
          "content": "Now it's time for some guided practice! Try to create a short paragraph that includes a claim, evidence to support that claim, and an explanation of why the evidence is important. This will help you learn how to express your ideas clearly!\nContext recap: Now it's time for some guided practice! Try to create a short paragraph that includes a claim, evidence to support that claim, and an explanation of why the evidence is important. This will help you learn how to express your ideas clearly!",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-06-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you apply close reading techniques, watch out for a common mistake that can occur. When you find it, think about how you can correct it by using evidence from the text. This will help you understand the material better and improve your reading skills!\nContext recap: As you apply close reading techniques, watch out for a common mistake that can occur. When you find it, think about how you can correct it by using evidence from the text. This will help you understand the material better and improve your reading skills!",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-06-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's do a quick recap of what we learned about close reading. After that, think about one specific area where you can improve. Setting a clear goal will help you become a more skilled reader!\nContext recap: Let's do a quick recap of what we learned about close reading. After that, think about one specific area where you can improve. Setting a clear goal will help you become a more skilled reader!\nWhy this matters: Quick Recap helps learners in Language Arts connect ideas from Phonics & Early Reading to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
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
          "content": "To get started, read the prompt carefully. Then, highlight the important words and the lines that provide evidence. This will help you focus on the key points and understand the text better!\nContext recap: To get started, read the prompt carefully. Then, highlight the important words and the lines that provide evidence. This will help you focus on the key points and understand the text better!\nWhy this matters: Vocabulary In Context Intro helps learners in Language Arts connect ideas from Phonics & Early Reading to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-07-chunk-practice",
          "title": "Guided Practice",
          "content": "Now, let's practice annotating! Choose a short passage and mark it up by highlighting important parts. After that, write a summary of the main idea in your own words. This will help you grasp the text's meaning!\nContext recap: Now, let's practice annotating! Choose a short passage and mark it up by highlighting important parts. After that, write a summary of the main idea in your own words. This will help you grasp the text's meaning!",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-07-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work on using vocabulary in sentences, be on the lookout for a common mistake that many people make. This mistake can happen when we don't fully understand how to use a word in context. Take a moment to identify this error and then think about how you can correct it by finding evidence from the text that supports your correction. This will help you improve your understanding and use of vocabulary.\nContext recap: As you work on using vocabulary in sentences, be on the lookout for a common mistake that many people make. This mistake can happen when we don't fully understand how to use a word in context. Take a moment to identify this error and then think about how you can correct it by finding evidence from the text that supports your correction. This will help you improve your understanding and use of vocabulary.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-07-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we learned about using vocabulary in context. It's important to understand how words fit into sentences and how they can change meaning based on their use. After this review, think about one specific area where you can improve your vocabulary skills. Setting a clear goal will help you focus on making progress.\nContext recap: Let's take a moment to review what we learned about using vocabulary in context. It's important to understand how words fit into sentences and how they can change meaning based on their use. After this review, think about one specific area where you can improve your vocabulary skills. Setting a clear goal will help you focus on making progress.",
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
          "content": "In this section, we will learn how to make our sentences stronger by using one clear claim. A claim is a statement that we believe to be true. To support our claim, we will find details from the text that help explain why our claim is correct. This practice will help us become better writers and communicators.\nContext recap: In this section, we will learn how to make our sentences stronger by using one clear claim. A claim is a statement that we believe to be true. To support our claim, we will find details from the text that help explain why our claim is correct. This practice will help us become better writers and communicators.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-08-chunk-practice",
          "title": "Guided Practice",
          "content": "Now it's time to practice! Choose one sentence that you think could be improved. Your goal is to rewrite this sentence to make it clearer and to match the tone you want to convey. Think about the words you choose and how they make your sentence sound. This exercise will help you learn how to express your ideas more effectively.\nContext recap: Now it's time to practice! Choose one sentence that you think could be improved. Your goal is to rewrite this sentence to make it clearer and to match the tone you want to convey. Think about the words you choose and how they make your sentence sound.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-08-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you revise your sentences, keep an eye out for a common mistake that can happen during this process. Sometimes, we might overlook important details that make our sentences clear and effective. Once you spot this error, think about how you can fix it by using evidence from your writing. This will help you become a more precise writer.\nContext recap: As you revise your sentences, keep an eye out for a common mistake that can happen during this process. Sometimes, we might overlook important details that make our sentences clear and effective. Once you spot this error, think about how you can fix it by using evidence from your writing. This will help you become a more precise writer.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-08-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review what we learned about revising sentences. Remember, revising is all about making your writing better! After this review, think of one specific goal you want to achieve in your writing. Setting a clear improvement target will guide you as you continue to practice your writing skills.\nContext recap: Let's quickly review what we learned about revising sentences. Remember, revising is all about making your writing better! After this review, think of one specific goal you want to achieve in your writing. Setting a clear improvement target will guide you as you continue to practice your writing skills.",
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
          "content": "In this part of our lesson, we will focus on how to revise our paragraphs for better clarity, grammar, and flow. Clarity means making sure our ideas are easy to understand, grammar helps us write correctly, and flow ensures our sentences connect smoothly. These skills are important for effective writing.\nContext recap: In this part of our lesson, we will focus on how to revise our paragraphs for better clarity, grammar, and flow. Clarity means making sure our ideas are easy to understand, grammar helps us write correctly, and flow ensures our sentences connect smoothly. These skills are important for effective writing.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-09-chunk-practice",
          "title": "Guided Practice",
          "content": "Now, let's practice building a short paragraph together! Your paragraph should include a clear claim, some evidence to support that claim, and an explanation of why the evidence is important. This structure will help you communicate your ideas clearly and effectively.\nContext recap: Now, let's practice building a short paragraph together! Your paragraph should include a clear claim, some evidence to support that claim, and an explanation of why the evidence is important. This structure will help you communicate your ideas clearly and effectively.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-09-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work on your paragraph structure, be aware of a common mistake that can occur. Sometimes, we might forget to connect our ideas properly, which can confuse our readers. Once you identify this issue, think about how you can correct it by using evidence from your writing. This will help improve the overall quality of your paragraph.\nContext recap: As you work on your paragraph structure, be aware of a common mistake that can occur. Sometimes, we might forget to connect our ideas properly, which can confuse our readers. Once you identify this issue, think about how you can correct it by using evidence from your writing. This will help improve the overall quality of your paragraph.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-09-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we learned about paragraph structure. Remember, a well-structured paragraph helps your readers understand your ideas better. After this recap, think of one specific area where you can improve your paragraph writing. Setting a clear improvement target will help you focus on your writing skills.\nContext recap: Let's take a moment to review what we learned about paragraph structure. Remember, a well-structured paragraph helps your readers understand your ideas better. After this recap, think of one specific area where you can improve your paragraph writing. Setting a clear improvement target will help you focus on your writing skills.",
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
          "content": "In this section, we will learn how to respond to prompts using evidence from the text. Start by reading the prompt carefully, and then highlight the key words and important lines that provide evidence. This will help you gather your thoughts and prepare a strong response based on what you have read.\nContext recap: In this section, we will learn how to respond to prompts using evidence from the text. Start by reading the prompt carefully, and then highlight the key words and important lines that provide evidence. This will help you gather your thoughts and prepare a strong response based on what you have read.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-10-chunk-practice",
          "title": "Guided Practice",
          "content": "Now it's time to practice annotating a short passage! As you read, make notes in the margins to highlight important ideas and details. After that, summarize the main idea of the passage in your own words. This practice will help you understand the text better and improve your ability to express your thoughts.\nContext recap: Now it's time to practice annotating a short passage! As you read, make notes in the margins to highlight important ideas and details. After that, summarize the main idea of the passage in your own words. This practice will help you understand the text better and improve your ability to express your thoughts.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-10-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you watch the video, pay close attention to a common mistake that people often make when using evidence-based responses. After identifying this error, think about how you can fix it by using specific evidence from the text. This will help you understand how to support your ideas more effectively.\nContext recap: As you watch the video, pay close attention to a common mistake that people often make when using evidence-based responses. After identifying this error, think about how you can fix it by using specific evidence from the text. This will help you understand how to support your ideas more effectively.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-10-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we learned about evidence-based responses. After discussing the key points, think about one specific area where you can improve your skills. Setting a clear goal will help you focus on what to work on next.\nContext recap: Let's take a moment to review what we learned about evidence-based responses. After discussing the key points, think about one specific area where you can improve your skills. Setting a clear goal will help you focus on what to work on next.",
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
          "content": "In this section, we will learn how to make a strong claim and support it with details from the text. A claim is an important statement that you believe to be true, and using text-based details means finding specific examples in the story or article that back up your claim.\nContext recap: In this section, we will learn how to make a strong claim and support it with details from the text. A claim is an important statement that you believe to be true, and using text-based details means finding specific examples in the story or article that back up your claim.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-11-chunk-practice",
          "title": "Guided Practice",
          "content": "Now it's time for some guided practice! Choose one sentence from the text and think about how you can rewrite it to make it clearer and more effective. Focus on improving the way it sounds and the message it conveys. This will help you express your ideas more precisely.\nContext recap: Now it's time for some guided practice! Choose one sentence from the text and think about how you can rewrite it to make it clearer and more effective. Focus on improving the way it sounds and the message it conveys. This will help you express your ideas more precisely.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-11-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you engage with close reading, be on the lookout for a common mistake that can happen. After you spot this error, think about how you can correct it using evidence from the text. This practice will enhance your understanding and ability to analyze what you read.\nContext recap: As you engage with close reading, be on the lookout for a common mistake that can happen. After you spot this error, think about how you can correct it using evidence from the text. This practice will enhance your understanding and ability to analyze what you read.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-11-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly recap what we learned about close reading. After our discussion, think about one specific area where you can improve your reading skills. Setting a clear target will help you focus on your next steps in becoming a better reader.\nContext recap: Let's quickly recap what we learned about close reading. After our discussion, think about one specific area where you can improve your reading skills. Setting a clear target will help you focus on your next steps in becoming a better reader.",
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
          "content": "In this part of the lesson, we will focus on revising our writing for clarity, grammar, and smooth transitions. This means making sure our sentences are easy to understand, free of mistakes, and flow well from one idea to the next.\nContext recap: In this part of the lesson, we will focus on revising our writing for clarity, grammar, and smooth transitions. This means making sure our sentences are easy to understand, free of mistakes, and flow well from one idea to the next.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-12-chunk-practice",
          "title": "Guided Practice",
          "content": "Now, let's practice building a short paragraph. Your paragraph should include a clear claim, supporting evidence, and an explanation of why that evidence is important. This exercise will help you organize your thoughts and communicate your ideas effectively.\nContext recap: Now, let's practice building a short paragraph. Your paragraph should include a clear claim, supporting evidence, and an explanation of why that evidence is important. This exercise will help you organize your thoughts and communicate your ideas effectively.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-12-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work on applying vocabulary in context, keep an eye out for a common mistake that can occur. Once you identify this error, think about how you can correct it using evidence from the text. This will strengthen your understanding of how to use words correctly.\nContext recap: As you work on applying vocabulary in context, keep an eye out for a common mistake that can occur. Once you identify this error, think about how you can correct it using evidence from the text. This will strengthen your understanding of how to use words correctly.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-12-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we learned about using vocabulary in context. After our discussion, think about one specific area where you can improve your vocabulary skills. Setting a clear improvement target will guide your learning journey.\nContext recap: Let's take a moment to review what we learned about using vocabulary in context. After our discussion, think about one specific area where you can improve your vocabulary skills. Setting a clear improvement target will guide your learning journey.",
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
          "content": "In this section, we will read a prompt carefully and highlight the key words and important lines that provide evidence. This practice will help you focus on the main ideas and details that are essential for understanding the text.\nContext recap: In this section, we will read a prompt carefully and highlight the key words and important lines that provide evidence. This practice will help you focus on the main ideas and details that are essential for understanding the text.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-13-chunk-practice",
          "title": "Guided Practice",
          "content": "Now it's time for some guided practice! Choose a short passage and annotate it by marking important points. After that, summarize the main idea in your own words. This will help you improve your comprehension and retention of the material.\nContext recap: Now it's time for some guided practice! Choose a short passage and annotate it by marking important points. After that, summarize the main idea in your own words. This will help you improve your comprehension and retention of the material.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-13-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you practice revising sentences, be on the lookout for a common mistake that many people make. Once you spot it, think about how you can fix it using specific examples from the text. This will help you understand the importance of clear writing!\nContext recap: As you practice revising sentences, be on the lookout for a common mistake that many people make. Once you spot it, think about how you can fix it using specific examples from the text. This will help you understand the importance of clear writing!",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-13-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to quickly review what we learned about revising sentences. After that, think of one specific goal you can set for yourself to improve your writing. This will help you focus on making your sentences even better!\nContext recap: Let's take a moment to quickly review what we learned about revising sentences. After that, think of one specific goal you can set for yourself to improve your writing. This will help you focus on making your sentences even better!",
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
          "content": "When writing a paragraph, it's important to start with a clear main idea or claim. Then, support that idea with details from the text that help explain or prove your point. This way, your writing will be strong and convincing!\nContext recap: When writing a paragraph, it's important to start with a clear main idea or claim. Then, support that idea with details from the text that help explain or prove your point. This way, your writing will be strong and convincing!",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-14-chunk-practice",
          "title": "Guided Practice",
          "content": "Now it's time to practice! Choose one of your sentences and think about how you can make it clearer and more engaging. Try to change the words or structure to improve the way it sounds. This will help your writing shine!\nContext recap: Now it's time to practice! Choose one of your sentences and think about how you can make it clearer and more engaging. Try to change the words or structure to improve the way it sounds. This will help your writing shine!",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-14-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work on your paragraph structure, keep an eye out for a common mistake that can happen. When you notice it, think about how you can correct it using examples from your writing. This will help you become a better writer!\nContext recap: As you work on your paragraph structure, keep an eye out for a common mistake that can happen. When you notice it, think about how you can correct it using examples from your writing. This will help you become a better writer!",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-14-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly go over what we learned about paragraph structure. After that, think of one specific area where you can improve. Setting a clear goal will help you focus on making your writing even stronger!\nContext recap: Let's quickly go over what we learned about paragraph structure. After that, think of one specific area where you can improve. Setting a clear goal will help you focus on making your writing even stronger!\nWhy this matters: Quick Recap helps learners in Language Arts connect ideas from Phonics & Early Reading to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
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
          "content": "When you revise your writing, remember to check for clarity, grammar, and how smoothly your ideas flow from one to the next. This will make your writing easier to understand and more enjoyable to read!\nContext recap: When you revise your writing, remember to check for clarity, grammar, and how smoothly your ideas flow from one to the next. This will make your writing easier to understand and more enjoyable to read!\nWhy this matters: Evidence Based Response Intro helps learners in Language Arts connect ideas from Phonics & Early Reading to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-15-chunk-practice",
          "title": "Guided Practice",
          "content": "Now, let's build a short paragraph together! Start with a clear claim, then add evidence to support it, and finish with an explanation. This will help you practice creating strong arguments in your writing!\nContext recap: Now, let's build a short paragraph together! Start with a clear claim, then add evidence to support it, and finish with an explanation. This will help you practice creating strong arguments in your writing!\nWhy this matters: Guided Practice helps learners in Language Arts connect ideas from Phonics & Early Reading to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-15-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you practice creating your evidence-based responses, it's important to pay attention to a common mistake that many people make. Sometimes, we forget to support our answers with clear examples from our writing. When you notice this mistake, take a moment to think about how you can fix it. Look for specific examples in your work that can help make your point stronger. This will not only help you correct the error but also improve your overall writing skills! Keep practicing, and you'll get better at this!",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-k2-u1-external-supp-seq-15-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review what we learned about evidence-based responses. After that, think of one specific goal you can set for yourself to improve your writing. This will help you focus on becoming a better writer!\nContext recap: Let's quickly review what we learned about evidence-based responses. After that, think of one specific goal you can set for yourself to improve your writing. This will help you focus on becoming a better writer!\nWhy this matters: Quick Recap helps learners in Language Arts connect ideas from Phonics & Early Reading to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
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
