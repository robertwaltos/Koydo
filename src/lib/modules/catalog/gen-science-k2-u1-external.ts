import type { LearningModule } from "@/lib/modules/types";

export const GenScienceK2U1ExternalModule: LearningModule = {
  "id": "gen-science-k2-u1-external",
  "title": "Plants, Animals & Their Habitats",
  "description": "General Science unit for K–2 imported from external JSX curriculum.",
  "subject": "General Science",
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
    "Explain Plants Are Amazing!.",
    "Explain Roots 🌱.",
    "Explain Stem & Leaves.",
    "Build baseline confidence in Plants, Animals & Their Habitats.",
    "Apply one core General Science strategy for K2.",
    "Explain evidence interpretation using age-appropriate vocabulary.",
    "Apply evidence interpretation in one guided General Science task.",
    "Identify one correction step for the next attempt."
  ],
  "gradeBand": "K2",
  "metadata": {
    "source": "../External_AI_Agents/lesson_platform (1).jsx",
    "sourceUnitId": "gen-science-k2-u1",
    "sourceUnitIdCanonical": "gen-science-k2-u1",
    "sourceUnitIdRaw": "gen_science-k2-u1",
    "importedAt": "2026-02-25T02:03:30.486Z"
  },
  "external": {
    "unitOrder": 18,
    "estimatedHours": null,
    "prerequisites": []
  },
  "lessons": [
    {
      "id": "gen-science-k2-u1-1",
      "title": "Parts of a Plant & What They Do (K2)",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "gen-science-k2-u1-1-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Parts of a Plant & What They Do (K2)."
        }
      ],
      "objectives": [
        "Explain Plants Are Amazing!.",
        "Explain Roots 🌱.",
        "Explain Stem & Leaves."
      ],
      "chunks": [
        {
          "id": "gen-science-k2-u1-1-chunk-1",
          "title": "Plants Are Amazing!",
          "content": "Plants are truly amazing living beings! They have a special ability to create their own food using sunlight, water, and air. This wonderful process is called photosynthesis, which means 'putting together with light.' During photosynthesis, plants take in sunlight through their leaves, absorb water through their roots, and use carbon dioxide from the air. This magical combination allows them to produce food and oxygen, which is essential for all living creatures. Unlike animals, plants cannot move around to find their food. Instead, they stay rooted in one place and grow towards the sunlight and water they need to thrive. Isn’t it fascinating how they can make their own meals right where they are? This ability helps them survive and grow, making them an important part of our world. So, the next time you see a plant, remember how incredible it is that it can create its own food and help keep our air clean!"
        },
        {
          "id": "gen-science-k2-u1-1-chunk-2",
          "title": "Roots 🌱",
          "content": "Roots are the hidden heroes of plants, growing deep underground where we can't see them! They have two very important jobs that help the plant stay healthy and strong. First, roots anchor the plant in the soil. This means they hold the plant firmly in place so it doesn’t fall over, just like how our feet help us stand up straight. Second, roots absorb water and essential minerals from the soil. These nutrients are super important for the plant's growth and help it thrive. Once the roots soak up the water, it travels up through the stem to nourish the entire plant, providing it with everything it needs to grow big and strong. So, the next time you see a plant, remember that its roots are working hard beneath the ground, helping it stand tall and healthy!"
        },
        {
          "id": "gen-science-k2-u1-1-chunk-3",
          "title": "Stem & Leaves",
          "content": "The stem of a plant is like a busy highway that connects all the different parts of the plant! It plays a very important role by supporting the plant and helping it stand tall and upright. Just like how cars travel on a highway, the stem transports water and nutrients from the roots deep in the ground all the way up to the leaves at the top. Stems can come in different shapes and sizes; some are thin, like the delicate stems of flowers, while others are thick and strong, like the sturdy trunk of a big tree.\nNow, let’s explore leaves! Leaves are like tiny food factories for the plant. They have a special job of collecting sunlight, which gives the plant the energy it needs to grow. Leaves also absorb carbon dioxide from the air, which is another important ingredient for making food. This amazing process is called photosynthesis, and it’s where the magic happens! During photosynthesis, the plant uses sunlight to turn carbon dioxide and water into food, helping it to grow strong and healthy. Isn’t that fascinating?"
        },
        {
          "id": "gen-science-k2-u1-1-chunk-4",
          "title": "Flowers, Fruit & Seeds",
          "content": "Flowers are not just beautiful; they are very important for helping plants make new plants! When flowers bloom, they attract special helpers called pollinators, like bees and butterflies. These little creatures visit the flowers to collect nectar and, in doing so, help the flowers create seeds. After a flower has done its job, it can turn into fruit. For example, when you see an apple, remember that it is a fruit that holds seeds inside! These seeds are like tiny plant babies, and each one has the potential to grow into a new plant if it gets the right care, such as water, warmth, and sunlight. This is how the life cycle of a plant works: it starts with a seed, then becomes a seedling, grows into a plant, blooms into a flower, produces fruit with seeds, and then the cycle begins all over again! Isn’t nature amazing? Each part of a plant has a special job to help it grow and thrive in its environment."
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-k2-u1-1-card-1",
          "front": "Function of ROOTS",
          "back": "Anchor the plant + absorb water and minerals from soil"
        },
        {
          "id": "gen-science-k2-u1-1-card-2",
          "front": "Function of STEM",
          "back": "Support the plant + transport water/nutrients from roots to leaves"
        },
        {
          "id": "gen-science-k2-u1-1-card-3",
          "front": "Function of LEAVES",
          "back": "Capture sunlight + absorb CO₂ → food factory (photosynthesis)"
        },
        {
          "id": "gen-science-k2-u1-1-card-4",
          "front": "Function of FLOWERS",
          "back": "Attract pollinators for reproduction"
        },
        {
          "id": "gen-science-k2-u1-1-card-5",
          "front": "What is photosynthesis?",
          "back": "Plants make food using sunlight + water + CO₂"
        },
        {
          "id": "gen-science-k2-u1-1-card-6",
          "front": "Plant life cycle order",
          "back": "Seed → Seedling → Plant → Flower → Fruit → Seed"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Animated cross-section of a sunflower growing in soil. Camera starts underground showing roots absorbing water, zooms up through the stem showing water droplets traveling upward, reaches green leaves showing sunlight being absorbed and food being made (with glowing arrows). Flower blooms attracting a bee. Seed falls and new cycle begins. Educational labels appear at each part. Ages 5-8. Bright, textbook-illustration style. Duration: 65 seconds.",
        "seedanceAnimation": "Lottie animation: Plant diagram builds from bottom: roots draw in blue water droplets, stem shows blue line traveling up, leaves glow yellow-green when 'sun' icon shines, flower blooms. Each part pulses when its label is highlighted. 15-second animation.",
        "lessonImage": "Create a clean educational illustration for \"Parts of a Plant & What They Do (K2)\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Parts of a Plant & What They Do (K2)\" (General Science, grade band K2)."
      },
      "localized": {
        "title": {
          "en": "Parts of a Plant & What They Do"
        },
        "concept": {
          "en": "Parts of a Plant & What They Do"
        }
      },
      "external": {
        "sourceLessonId": "gen_science-k2-u1-1",
        "order": 1
      }
    },
    {
      "id": "gen-science-k2-u1-external-supp-interactive",
      "title": "Plants, Animals & Their Habitats Supplemental Practice",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-k2-u1-external-supp-interactive-ia1",
          "type": "drag_and_drop",
          "title": "Plants, Animals & Their Habitats Supplemental Practice Learning Flow",
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
                "label": "Set a goal for Build baseline confidence in Plants, Animals & Their Habitats..",
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
          "id": "gen-science-k2-u1-external-supp-interactive-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Plants, Animals & Their Habitats Supplemental Practice."
        }
      ],
      "metadata": {
        "prompts": [
          "Build baseline confidence in Plants, Animals & Their Habitats.",
          "Apply one core General Science strategy for K2."
        ]
      },
      "objectives": [
        "Build baseline confidence in Plants, Animals & Their Habitats.",
        "Apply one core General Science strategy for K2."
      ],
      "chunks": [
        {
          "id": "gen-science-k2-u1-external-supp-interactive-chunk-intro",
          "title": "Plants, Animals & Their Habitats Supplemental Practice Overview",
          "content": "In this section, we will have fun reinforcing the important concepts we learned about plants, animals, and their habitats! Through engaging activities, we will explore how these living things interact with each other and their environments. Let’s get ready to dive deeper into the wonderful world of science!\nContext recap: In this section, we will have fun reinforcing the important concepts we learned about plants, animals, and their habitats! Through engaging activities, we will explore how these living things interact with each other and their environments. Let’s get ready to dive deeper into the wonderful world of science!",
          "kind": "concept"
        },
        {
          "id": "gen-science-k2-u1-external-supp-interactive-chunk-recap",
          "title": "Quick Recap",
          "content": "Let’s take a moment to summarize one key idea we learned today about plants and their amazing parts. After that, we can think about one next step we can take to learn even more! This could be asking a question, doing a fun activity, or exploring outside to see plants in action!\nContext recap: Let’s take a moment to summarize one key idea we learned today about plants and their amazing parts. After that, we can think about one next step we can take to learn even more! This could be asking a question, doing a fun activity, or exploring outside to see plants in action!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-k2-u1-external-supp-interactive-card-1",
          "front": "What is one key idea in Plants, Animals & Their Habitats?",
          "back": "Build baseline confidence in Plants, Animals & Their Habitats."
        },
        {
          "id": "gen-science-k2-u1-external-supp-interactive-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core General Science strategy for K2."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Plants, Animals & Their Habitats Supplemental Practice\" in \"General Science\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Plants, Animals & Their Habitats Supplemental Practice\" (General Science, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Plants, Animals & Their Habitats Supplemental Practice\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Plants, Animals & Their Habitats Supplemental Practice\" (General Science, grade band K2)."
      },
      "external": {
        "sourceLessonId": "gen-science-k2-u1-external-supp-interactive",
        "order": 2,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-k2-u1-external-supp-quiz",
      "title": "Plants, Animals & Their Habitats Supplemental Check",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-k2-u1-external-supp-quiz-q1",
          "text": "Which option best summarizes Plants, Animals & Their Habitats Supplemental Check?",
          "skillId": "gen-science-k2-u1-external-skill-plants-animals-their-habitats-supplemental-check-summary",
          "options": [
            {
              "id": "a",
              "text": "Build baseline confidence in Plants, Animals & Their Habitats."
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
          "id": "gen-science-k2-u1-external-supp-quiz-q2",
          "text": "Which response shows correct application of Plants, Animals & Their Habitats Supplemental Check?",
          "skillId": "gen-science-k2-u1-external-skill-plants-animals-their-habitats-supplemental-check-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply one core General Science strategy for K2."
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
          "id": "gen-science-k2-u1-external-supp-quiz-q3",
          "text": "Why is review important after learning Plants, Animals & Their Habitats Supplemental Check?",
          "skillId": "gen-science-k2-u1-external-skill-plants-animals-their-habitats-supplemental-check-review",
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
          "id": "gen-science-k2-u1-external-supp-quiz-ia1",
          "type": "matching_pairs",
          "title": "Plants, Animals & Their Habitats Supplemental Check Error Match",
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
                "label": "I still mix up Build baseline confidence in Plants, Animals & Their Habitats.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Plants, Animals & Their Habitats Supplemental Check in notes but not in timed checks."
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
          "id": "gen-science-k2-u1-external-supp-quiz-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Plants, Animals & Their Habitats Supplemental Check."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Build baseline confidence in Plants, Animals & Their Habitats.",
        "Apply one core General Science strategy for K2."
      ],
      "chunks": [
        {
          "id": "gen-science-k2-u1-external-supp-quiz-chunk-intro",
          "title": "Plants, Animals & Their Habitats Supplemental Check Overview",
          "content": "In this quiz section, we will reinforce the core concepts we learned about plants, animals, and their habitats. It’s a great way to check our understanding and see how much we remember! Let’s get ready to show what we know!\nContext recap: In this quiz section, we will reinforce the core concepts we learned about plants, animals, and their habitats. It’s a great way to check our understanding and see how much we remember! Let’s get ready to show what we know!",
          "kind": "concept"
        },
        {
          "id": "gen-science-k2-u1-external-supp-quiz-chunk-recap",
          "title": "Quick Recap",
          "content": "As we wrap up, let’s summarize one key idea we discussed today and think about one next step we can take to continue our learning journey. This could be exploring more about a specific plant or animal, or even sharing what we learned with a friend or family member!\nContext recap: As we wrap up, let’s summarize one key idea we discussed today and think about one next step we can take to continue our learning journey. This could be exploring more about a specific plant or animal, or even sharing what we learned with a friend or family member!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-k2-u1-external-supp-quiz-card-1",
          "front": "What is one key idea in Plants, Animals & Their Habitats?",
          "back": "Build baseline confidence in Plants, Animals & Their Habitats."
        },
        {
          "id": "gen-science-k2-u1-external-supp-quiz-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core General Science strategy for K2."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Plants, Animals & Their Habitats Supplemental Check\" in \"General Science\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Plants, Animals & Their Habitats Supplemental Check\" (General Science, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Plants, Animals & Their Habitats Supplemental Check\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Plants, Animals & Their Habitats Supplemental Check\" (General Science, grade band K2)."
      },
      "external": {
        "sourceLessonId": "gen-science-k2-u1-external-supp-quiz",
        "order": 3,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-k2-u1-external-supp-seq-04",
      "title": "Plants, Animals & Their Habitats Concept Walkthrough 4: Evidence Interpretation",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-04-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Plants, Animals & Their Habitats Concept Walkthrough 4: Evidence Interpretation."
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
          "id": "gen-science-k2-u1-external-supp-seq-04-chunk-intro",
          "title": "Evidence Interpretation Intro",
          "content": "Let’s begin our exploration by starting with an observation about something we see in nature. Then, we will come up with a testable question that we can investigate further. This is the first step in understanding how to explore the world around us!\nContext recap: Let’s begin our exploration by starting with an observation about something we see in nature. Then, we will come up with a testable question that we can investigate further. This is the first step in understanding how to explore the world around us!",
          "kind": "concept"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-04-chunk-practice",
          "title": "Guided Practice",
          "content": "Now it’s time for some hands-on fun! We will run a mini investigation where we can explore our question. As we do this, we will record our outcomes in a table to keep track of what we find. This will help us learn more about our observations!\nContext recap: Now it’s time for some hands-on fun! We will run a mini investigation where we can explore our question. As we do this, we will record our outcomes in a table to keep track of what we find. This will help us learn more about our observations!",
          "kind": "practice"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-04-chunk-check",
          "title": "Common Pitfall Check",
          "content": "While we are interpreting our evidence, let’s be on the lookout for one common mistake that can happen. If we spot it, we can correct it by using the evidence we collected. This will help us become better at understanding what we observe!\nContext recap: While we are interpreting our evidence, let’s be on the lookout for one common mistake that can happen. If we spot it, we can correct it by using the evidence we collected. This will help us become better at understanding what we observe!",
          "kind": "analysis"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-04-chunk-recap",
          "title": "Quick Recap",
          "content": "To finish up, let’s review what we learned about interpreting evidence. After that, we can set one clear improvement target for ourselves. This could be something we want to get better at or a new question we want to explore next!\nContext recap: To finish up, let’s review what we learned about interpreting evidence. After that, we can set one clear improvement target for ourselves. This could be something we want to get better at or a new question we want to explore next!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-04-card-1",
          "front": "What is evidence interpretation?",
          "back": "It is a key General Science idea in Plants, Animals & Their Habitats."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-04-card-2",
          "front": "How can I practice evidence interpretation?",
          "back": "Run a mini investigation and record outcomes in a table."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-04-card-3",
          "front": "What should I review next?",
          "back": "Review evidence interpretation, then set one clear improvement target."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-04-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Plants, Animals & Their Habitats Concept Walkthrough 4: Evidence Interpretation\" in \"General Science\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Plants, Animals & Their Habitats Concept Walkthrough 4: Evidence Interpretation\" (General Science, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Plants, Animals & Their Habitats Concept Walkthrough 4: Evidence Interpretation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Plants, Animals & Their Habitats Concept Walkthrough 4: Evidence Interpretation\" (General Science, grade band K2)."
      },
      "external": {
        "sourceLessonId": "gen-science-k2-u1-external-generated-cycle-4",
        "order": 4,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-k2-u1-external-supp-seq-05",
      "title": "Plants, Animals & Their Habitats Guided Practice Lab 5: Scientific Explanation",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-05-ia1",
          "type": "drag_and_drop",
          "title": "Plants, Animals & Their Habitats Guided Practice Lab 5: Scientific Explanation Learning Flow",
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
          "id": "gen-science-k2-u1-external-supp-seq-05-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Plants, Animals & Their Habitats Guided Practice Lab 5: Scientific Explanation."
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
          "id": "gen-science-k2-u1-external-supp-seq-05-chunk-intro",
          "title": "Scientific Explanation Intro",
          "content": "When we are doing experiments, it's important to change only one thing at a time. This way, we can see how that one change affects the results clearly. By keeping everything else the same, we can understand what caused any differences we observe.\nContext recap: When we are doing experiments, it's important to change only one thing at a time. This way, we can see how that one change affects the results clearly. By keeping everything else the same, we can understand what caused any differences we observe.",
          "kind": "concept"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-05-chunk-practice",
          "title": "Guided Practice",
          "content": "In our practice today, we will learn to identify three types of variables in an experiment. The independent variable is what we change, the dependent variable is what we measure, and the control variables are the things we keep the same. Understanding these will help us conduct better experiments.\nContext recap: In our practice today, we will learn to identify three types of variables in an experiment. The independent variable is what we change, the dependent variable is what we measure, and the control variables are the things we keep the same. Understanding these will help us conduct better experiments.",
          "kind": "practice"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-05-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we apply scientific explanations, be on the lookout for a common mistake. Sometimes, we might forget to use evidence to support our conclusions. If you notice this, remember to find the evidence that backs up your explanation and correct it.\nContext recap: As we apply scientific explanations, be on the lookout for a common mistake. Sometimes, we might forget to use evidence to support our conclusions. If you notice this, remember to find the evidence that backs up your explanation and correct it.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-05-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we learned about scientific explanations. After our review, think about one specific area where you can improve your understanding or skills. Setting a clear goal will help you focus on what to work on next.\nContext recap: Let's take a moment to review what we learned about scientific explanations. After our review, think about one specific area where you can improve your understanding or skills. Setting a clear goal will help you focus on what to work on next.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-05-card-1",
          "front": "What is scientific explanation?",
          "back": "It is a key General Science idea in Plants, Animals & Their Habitats."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-05-card-2",
          "front": "How can I practice scientific explanation?",
          "back": "Identify independent, dependent, and control variables."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-05-card-3",
          "front": "What should I review next?",
          "back": "Review scientific explanation, then set one clear improvement target."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-05-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Plants, Animals & Their Habitats Guided Practice Lab 5: Scientific Explanation\" in \"General Science\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Plants, Animals & Their Habitats Guided Practice Lab 5: Scientific Explanation\" (General Science, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Plants, Animals & Their Habitats Guided Practice Lab 5: Scientific Explanation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Plants, Animals & Their Habitats Guided Practice Lab 5: Scientific Explanation\" (General Science, grade band K2)."
      },
      "external": {
        "sourceLessonId": "gen-science-k2-u1-external-generated-cycle-5",
        "order": 5,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-k2-u1-external-supp-seq-06",
      "title": "Plants, Animals & Their Habitats Checkpoint Quiz 6: Observation Skills",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-06-q1",
          "text": "Which option best summarizes Plants, Animals & Their Habitats Checkpoint Quiz 6: Observation Skills?",
          "skillId": "gen-science-k2-u1-external-skill-plants-animals-their-habitats-checkpoint-quiz-6-observation-skills-summary",
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
          "id": "gen-science-k2-u1-external-supp-seq-06-q2",
          "text": "Which response shows correct application of Plants, Animals & Their Habitats Checkpoint Quiz 6: Observation Skills?",
          "skillId": "gen-science-k2-u1-external-skill-plants-animals-their-habitats-checkpoint-quiz-6-observation-skills-apply",
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
          "id": "gen-science-k2-u1-external-supp-seq-06-q3",
          "text": "Why is review important after learning Plants, Animals & Their Habitats Checkpoint Quiz 6: Observation Skills?",
          "skillId": "gen-science-k2-u1-external-skill-plants-animals-their-habitats-checkpoint-quiz-6-observation-skills-review",
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
          "id": "gen-science-k2-u1-external-supp-seq-06-ia1",
          "type": "matching_pairs",
          "title": "Plants, Animals & Their Habitats Checkpoint Quiz 6: Observation Skills Error Match",
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
                "label": "I understand Plants, Animals & Their Habitats Checkpoint Quiz 6: Observation Skills in notes but not in timed checks."
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
          "id": "gen-science-k2-u1-external-supp-seq-06-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Plants, Animals & Their Habitats Checkpoint Quiz 6: Observation Skills."
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
          "id": "gen-science-k2-u1-external-supp-seq-06-chunk-intro",
          "title": "Observation Skills Intro",
          "content": "When we draw conclusions from our experiments, we should always use evidence from our results to support what we say. This means looking at the data we collected and explaining how it leads us to our conclusion.\nContext recap: When we draw conclusions from our experiments, we should always use evidence from our results to support what we say. This means looking at the data we collected and explaining how it leads us to our conclusion.\nWhy this matters: Observation Skills Intro helps learners in General Science connect ideas from Plants, Animals & Their Habitats to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "concept"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-06-chunk-practice",
          "title": "Guided Practice",
          "content": "In this practice session, you will explain one of your results using evidence from your experiment. Make sure to use science vocabulary to describe what you found. This will help you communicate your ideas clearly.\nContext recap: In this practice session, you will explain one of your results using evidence from your experiment. Make sure to use science vocabulary to describe what you found. This will help you communicate your ideas clearly.\nWhy this matters: Guided Practice helps learners in General Science connect ideas from Plants, Animals & Their Habitats to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "practice"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-06-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you practice your observation skills, be aware of a common mistake that can happen. Sometimes, we might not use enough evidence to back up our observations. If you see this, remember to find the evidence that supports your observations and make corrections.\nContext recap: As you practice your observation skills, be aware of a common mistake that can happen. Sometimes, we might not use enough evidence to back up our observations. If you see this, remember to find the evidence that supports your observations and make corrections.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-06-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review the observation skills we practiced. After our review, think about one specific area where you can improve your observation skills. Setting a clear goal will help you focus on what to work on next.\nContext recap: Let's quickly review the observation skills we practiced. After our review, think about one specific area where you can improve your observation skills. Setting a clear goal will help you focus on what to work on next.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-06-card-1",
          "front": "What is observation skills?",
          "back": "It is a key General Science idea in Plants, Animals & Their Habitats."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-06-card-2",
          "front": "How can I practice observation skills?",
          "back": "Explain one result using evidence and science vocabulary."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-06-card-3",
          "front": "What should I review next?",
          "back": "Review observation skills, then set one clear improvement target."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-06-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Plants, Animals & Their Habitats Checkpoint Quiz 6: Observation Skills\" in \"General Science\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Plants, Animals & Their Habitats Checkpoint Quiz 6: Observation Skills\" (General Science, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Plants, Animals & Their Habitats Checkpoint Quiz 6: Observation Skills\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Plants, Animals & Their Habitats Checkpoint Quiz 6: Observation Skills\" (General Science, grade band K2)."
      },
      "external": {
        "sourceLessonId": "gen-science-k2-u1-external-generated-cycle-6",
        "order": 6,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-k2-u1-external-supp-seq-07",
      "title": "Plants, Animals & Their Habitats Concept Walkthrough 7: Hypothesis Testing",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-07-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Plants, Animals & Their Habitats Concept Walkthrough 7: Hypothesis Testing."
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
          "id": "gen-science-k2-u1-external-supp-seq-07-chunk-intro",
          "title": "Hypothesis Testing Intro",
          "content": "To start our journey in hypothesis testing, we begin with an observation. From that observation, we can create a question that we can test. This question will guide our investigation and help us find answers.\nContext recap: To start our journey in hypothesis testing, we begin with an observation. From that observation, we can create a question that we can test. This question will guide our investigation and help us find answers.\nWhy this matters: Hypothesis Testing Intro helps learners in General Science connect ideas from Plants, Animals & Their Habitats to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "concept"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-07-chunk-practice",
          "title": "Guided Practice",
          "content": "In this guided practice, you will conduct a mini investigation. As you do this, make sure to record your outcomes in a table. This will help you organize your findings and make it easier to analyze the results later.\nContext recap: In this guided practice, you will conduct a mini investigation. As you do this, make sure to record your outcomes in a table. This will help you organize your findings and make it easier to analyze the results later.",
          "kind": "practice"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-07-chunk-check",
          "title": "Common Pitfall Check",
          "content": "While you are applying hypothesis testing, keep an eye out for a common mistake. Sometimes, we may forget to use evidence to support our hypothesis. If you notice this, remember to find the evidence that backs up your hypothesis and make corrections.\nContext recap: While you are applying hypothesis testing, keep an eye out for a common mistake. Sometimes, we may forget to use evidence to support our hypothesis. If you notice this, remember to find the evidence that backs up your hypothesis and make corrections.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-07-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we learned about hypothesis testing. After our review, think about one specific area where you can improve your hypothesis testing skills. Setting a clear goal will help you focus on what to work on next.\nContext recap: Let's take a moment to review what we learned about hypothesis testing. After our review, think about one specific area where you can improve your hypothesis testing skills. Setting a clear goal will help you focus on what to work on next.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-07-card-1",
          "front": "What is hypothesis testing?",
          "back": "It is a key General Science idea in Plants, Animals & Their Habitats."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-07-card-2",
          "front": "How can I practice hypothesis testing?",
          "back": "Run a mini investigation and record outcomes in a table."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-07-card-3",
          "front": "What should I review next?",
          "back": "Review hypothesis testing, then set one clear improvement target."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-07-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Plants, Animals & Their Habitats Concept Walkthrough 7: Hypothesis Testing\" in \"General Science\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Plants, Animals & Their Habitats Concept Walkthrough 7: Hypothesis Testing\" (General Science, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Plants, Animals & Their Habitats Concept Walkthrough 7: Hypothesis Testing\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Plants, Animals & Their Habitats Concept Walkthrough 7: Hypothesis Testing\" (General Science, grade band K2)."
      },
      "external": {
        "sourceLessonId": "gen-science-k2-u1-external-generated-cycle-7",
        "order": 7,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-k2-u1-external-supp-seq-08",
      "title": "Plants, Animals & Their Habitats Guided Practice Lab 8: Variable Control",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-08-ia1",
          "type": "drag_and_drop",
          "title": "Plants, Animals & Their Habitats Guided Practice Lab 8: Variable Control Learning Flow",
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
          "id": "gen-science-k2-u1-external-supp-seq-08-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Plants, Animals & Their Habitats Guided Practice Lab 8: Variable Control."
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
          "id": "gen-science-k2-u1-external-supp-seq-08-chunk-intro",
          "title": "Variable Control Intro",
          "content": "When we are doing experiments, it's important to change only one thing at a time. This helps us understand what is causing any changes we see in our results. By keeping everything else the same, we can be sure that the change we made is the reason for the different outcome. This way, our results will be clear and easy to understand.\nContext recap: When we are doing experiments, it's important to change only one thing at a time. This helps us understand what is causing any changes we see in our results. By keeping everything else the same, we can be sure that the change we made is the reason for the different outcome. This way, our results will be clear and easy to understand.",
          "kind": "concept"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-08-chunk-practice",
          "title": "Guided Practice",
          "content": "In this activity, you will learn to identify three important types of variables in an experiment. The independent variable is what you change, the dependent variable is what you measure, and the control variables are the things you keep the same. Understanding these will help you conduct better experiments and get clearer results.\nContext recap: In this activity, you will learn to identify three important types of variables in an experiment. The independent variable is what you change, the dependent variable is what you measure, and the control variables are the things you keep the same. Understanding these will help you conduct better experiments and get clearer results.",
          "kind": "practice"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-08-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work on your experiments, be careful of a common mistake. Sometimes, people forget to keep other variables the same while changing one. If you notice this error, think about how you can fix it. Use evidence from your results to show why it's important to control variables correctly.\nContext recap: As you work on your experiments, be careful of a common mistake. Sometimes, people forget to keep other variables the same while changing one. If you notice this error, think about how you can fix it. Use evidence from your results to show why it's important to control variables correctly.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-08-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we learned about variable control. Remember, it's all about changing one thing at a time to see how it affects your results. After reviewing, think of one specific way you can improve your experiment next time. Setting a clear goal will help you become a better scientist!\nContext recap: Let's take a moment to review what we learned about variable control. Remember, it's all about changing one thing at a time to see how it affects your results. After reviewing, think of one specific way you can improve your experiment next time. Setting a clear goal will help you become a better scientist!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-08-card-1",
          "front": "What is variable control?",
          "back": "It is a key General Science idea in Plants, Animals & Their Habitats."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-08-card-2",
          "front": "How can I practice variable control?",
          "back": "Identify independent, dependent, and control variables."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-08-card-3",
          "front": "What should I review next?",
          "back": "Review variable control, then set one clear improvement target."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-08-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Plants, Animals & Their Habitats Guided Practice Lab 8: Variable Control\" in \"General Science\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Plants, Animals & Their Habitats Guided Practice Lab 8: Variable Control\" (General Science, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Plants, Animals & Their Habitats Guided Practice Lab 8: Variable Control\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Plants, Animals & Their Habitats Guided Practice Lab 8: Variable Control\" (General Science, grade band K2)."
      },
      "external": {
        "sourceLessonId": "gen-science-k2-u1-external-generated-cycle-8",
        "order": 8,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-k2-u1-external-supp-seq-09",
      "title": "Plants, Animals & Their Habitats Checkpoint Quiz 9: Evidence Interpretation",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-09-q1",
          "text": "Which option best summarizes Plants, Animals & Their Habitats Checkpoint Quiz 9: Evidence Interpretation?",
          "skillId": "gen-science-k2-u1-external-skill-plants-animals-their-habitats-checkpoint-quiz-9-evidence-interpretation-summary",
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
          "id": "gen-science-k2-u1-external-supp-seq-09-q2",
          "text": "Which response shows correct application of Plants, Animals & Their Habitats Checkpoint Quiz 9: Evidence Interpretation?",
          "skillId": "gen-science-k2-u1-external-skill-plants-animals-their-habitats-checkpoint-quiz-9-evidence-interpretation-apply",
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
          "id": "gen-science-k2-u1-external-supp-seq-09-q3",
          "text": "Why is review important after learning Plants, Animals & Their Habitats Checkpoint Quiz 9: Evidence Interpretation?",
          "skillId": "gen-science-k2-u1-external-skill-plants-animals-their-habitats-checkpoint-quiz-9-evidence-interpretation-review",
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
          "id": "gen-science-k2-u1-external-supp-seq-09-ia1",
          "type": "matching_pairs",
          "title": "Plants, Animals & Their Habitats Checkpoint Quiz 9: Evidence Interpretation Error Match",
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
                "label": "I understand Plants, Animals & Their Habitats Checkpoint Quiz 9: Evidence Interpretation in notes but not in timed checks."
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
          "id": "gen-science-k2-u1-external-supp-seq-09-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Plants, Animals & Their Habitats Checkpoint Quiz 9: Evidence Interpretation."
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
          "id": "gen-science-k2-u1-external-supp-seq-09-chunk-intro",
          "title": "Evidence Interpretation Intro",
          "content": "When you finish an experiment, it's important to look at your results carefully. Use the evidence you gathered to help support your conclusion. This means explaining how the results you found connect to the question you were trying to answer. Evidence helps make your conclusions stronger!\nContext recap: When you finish an experiment, it's important to look at your results carefully. Use the evidence you gathered to help support your conclusion. This means explaining how the results you found connect to the question you were trying to answer. Evidence helps make your conclusions stronger!",
          "kind": "concept"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-09-chunk-practice",
          "title": "Guided Practice",
          "content": "In this practice, you will explain one of your results using evidence. Try to use science vocabulary to make your explanation clear. This will help you communicate your findings effectively and show how your evidence supports your conclusion.\nContext recap: In this practice, you will explain one of your results using evidence. Try to use science vocabulary to make your explanation clear. This will help you communicate your findings effectively and show how your evidence supports your conclusion.",
          "kind": "practice"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-09-chunk-check",
          "title": "Common Pitfall Check",
          "content": "While interpreting evidence, be on the lookout for a common mistake. Sometimes, people may misinterpret their results. If you find this happening, think about how you can correct it. Use the evidence you have to explain the right interpretation clearly.\nContext recap: While interpreting evidence, be on the lookout for a common mistake. Sometimes, people may misinterpret their results. If you find this happening, think about how you can correct it. Use the evidence you have to explain the right interpretation clearly.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-09-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review what we learned about evidence interpretation. Remember, it's about using your results to support your conclusions. After this review, think of one specific area where you can improve your understanding of evidence in your next experiment.\nContext recap: Let's quickly review what we learned about evidence interpretation. Remember, it's about using your results to support your conclusions. After this review, think of one specific area where you can improve your understanding of evidence in your next experiment.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-09-card-1",
          "front": "What is evidence interpretation?",
          "back": "It is a key General Science idea in Plants, Animals & Their Habitats."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-09-card-2",
          "front": "How can I practice evidence interpretation?",
          "back": "Explain one result using evidence and science vocabulary."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-09-card-3",
          "front": "What should I review next?",
          "back": "Review evidence interpretation, then set one clear improvement target."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-09-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Plants, Animals & Their Habitats Checkpoint Quiz 9: Evidence Interpretation\" in \"General Science\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Plants, Animals & Their Habitats Checkpoint Quiz 9: Evidence Interpretation\" (General Science, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Plants, Animals & Their Habitats Checkpoint Quiz 9: Evidence Interpretation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Plants, Animals & Their Habitats Checkpoint Quiz 9: Evidence Interpretation\" (General Science, grade band K2)."
      },
      "external": {
        "sourceLessonId": "gen-science-k2-u1-external-generated-cycle-9",
        "order": 9,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-k2-u1-external-supp-seq-10",
      "title": "Plants, Animals & Their Habitats Concept Walkthrough 10: Scientific Explanation",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-10-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Plants, Animals & Their Habitats Concept Walkthrough 10: Scientific Explanation."
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
          "id": "gen-science-k2-u1-external-supp-seq-10-chunk-intro",
          "title": "Scientific Explanation Intro",
          "content": "Every scientific explanation starts with something you observe and a question that you can test. Observations are what you see, hear, or notice, and a testable question is something you can investigate through an experiment. This is the first step in exploring the world around you!\nContext recap: Every scientific explanation starts with something you observe and a question that you can test. Observations are what you see, hear, or notice, and a testable question is something you can investigate through an experiment. This is the first step in exploring the world around you!",
          "kind": "concept"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-10-chunk-practice",
          "title": "Guided Practice",
          "content": "Now it's time to run a mini investigation! As you conduct your experiment, make sure to record your outcomes in a table. This will help you organize your data and make it easier to see what happened during your experiment.\nContext recap: Now it's time to run a mini investigation! As you conduct your experiment, make sure to record your outcomes in a table. This will help you organize your data and make it easier to see what happened during your experiment.",
          "kind": "practice"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-10-chunk-check",
          "title": "Common Pitfall Check",
          "content": "While you are working on your scientific explanation, be aware of a common error that can occur. Sometimes, people may forget to connect their observations to their conclusions. If you notice this, think about how you can correct it by using evidence from your investigation.\nContext recap: While you are working on your scientific explanation, be aware of a common error that can occur. Sometimes, people may forget to connect their observations to their conclusions. If you notice this, think about how you can correct it by using evidence from your investigation.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-10-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly recap what we learned about scientific explanations. Remember, it all starts with an observation and a question. After this recap, think about one specific way you can improve your scientific explanations in the future. Setting a clear goal will help you grow as a scientist!\nContext recap: Let's quickly recap what we learned about scientific explanations. Remember, it all starts with an observation and a question. After this recap, think about one specific way you can improve your scientific explanations in the future. Setting a clear goal will help you grow as a scientist!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-10-card-1",
          "front": "What is scientific explanation?",
          "back": "It is a key General Science idea in Plants, Animals & Their Habitats."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-10-card-2",
          "front": "How can I practice scientific explanation?",
          "back": "Run a mini investigation and record outcomes in a table."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-10-card-3",
          "front": "What should I review next?",
          "back": "Review scientific explanation, then set one clear improvement target."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-10-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Plants, Animals & Their Habitats Concept Walkthrough 10: Scientific Explanation\" in \"General Science\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Plants, Animals & Their Habitats Concept Walkthrough 10: Scientific Explanation\" (General Science, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Plants, Animals & Their Habitats Concept Walkthrough 10: Scientific Explanation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Plants, Animals & Their Habitats Concept Walkthrough 10: Scientific Explanation\" (General Science, grade band K2)."
      },
      "external": {
        "sourceLessonId": "gen-science-k2-u1-external-generated-cycle-10",
        "order": 10,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-k2-u1-external-supp-seq-11",
      "title": "Plants, Animals & Their Habitats Guided Practice Lab 11: Observation Skills",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-11-ia1",
          "type": "drag_and_drop",
          "title": "Plants, Animals & Their Habitats Guided Practice Lab 11: Observation Skills Learning Flow",
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
          "id": "gen-science-k2-u1-external-supp-seq-11-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Plants, Animals & Their Habitats Guided Practice Lab 11: Observation Skills."
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
          "id": "gen-science-k2-u1-external-supp-seq-11-chunk-intro",
          "title": "Observation Skills Intro",
          "content": "When we are doing experiments, it's important to change only one thing at a time. This way, we can see how that one change affects our results. By keeping everything else the same, we can understand what is happening more clearly!\nContext recap: When we are doing experiments, it's important to change only one thing at a time. This way, we can see how that one change affects our results. By keeping everything else the same, we can understand what is happening more clearly!",
          "kind": "concept"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-11-chunk-practice",
          "title": "Guided Practice",
          "content": "In our practice today, we will learn to identify three important types of variables. The independent variable is what we change, the dependent variable is what we measure, and the control variables are the things we keep the same. Understanding these will help us conduct better experiments!\nContext recap: In our practice today, we will learn to identify three important types of variables. The independent variable is what we change, the dependent variable is what we measure, and the control variables are the things we keep the same. Understanding these will help us conduct better experiments!",
          "kind": "practice"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-11-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we work on our observation skills, let's be on the lookout for a common mistake. Sometimes, we might forget to keep our control variables the same. If you notice this error, think about how you can use evidence from your observations to correct it. This will help us improve our experiments!\nContext recap: As we work on our observation skills, let's be on the lookout for a common mistake. Sometimes, we might forget to keep our control variables the same. If you notice this error, think about how you can use evidence from your observations to correct it. This will help us improve our experiments!",
          "kind": "analysis"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-11-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we learned about observation skills. Remember, it's important to focus on one area where we can improve. Setting a clear goal will help us become better observers in our experiments!\nContext recap: Let's take a moment to review what we learned about observation skills. Remember, it's important to focus on one area where we can improve. Setting a clear goal will help us become better observers in our experiments!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-11-card-1",
          "front": "What is observation skills?",
          "back": "It is a key General Science idea in Plants, Animals & Their Habitats."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-11-card-2",
          "front": "How can I practice observation skills?",
          "back": "Identify independent, dependent, and control variables."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-11-card-3",
          "front": "What should I review next?",
          "back": "Review observation skills, then set one clear improvement target."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-11-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Plants, Animals & Their Habitats Guided Practice Lab 11: Observation Skills\" in \"General Science\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Plants, Animals & Their Habitats Guided Practice Lab 11: Observation Skills\" (General Science, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Plants, Animals & Their Habitats Guided Practice Lab 11: Observation Skills\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Plants, Animals & Their Habitats Guided Practice Lab 11: Observation Skills\" (General Science, grade band K2)."
      },
      "external": {
        "sourceLessonId": "gen-science-k2-u1-external-generated-cycle-11",
        "order": 11,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-k2-u1-external-supp-seq-12",
      "title": "Plants, Animals & Their Habitats Checkpoint Quiz 12: Hypothesis Testing",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-12-q1",
          "text": "Which option best summarizes Plants, Animals & Their Habitats Checkpoint Quiz 12: Hypothesis Testing?",
          "skillId": "gen-science-k2-u1-external-skill-plants-animals-their-habitats-checkpoint-quiz-12-hypothesis-testing-summary",
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
          "id": "gen-science-k2-u1-external-supp-seq-12-q2",
          "text": "Which response shows correct application of Plants, Animals & Their Habitats Checkpoint Quiz 12: Hypothesis Testing?",
          "skillId": "gen-science-k2-u1-external-skill-plants-animals-their-habitats-checkpoint-quiz-12-hypothesis-testing-apply",
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
          "id": "gen-science-k2-u1-external-supp-seq-12-q3",
          "text": "Why is review important after learning Plants, Animals & Their Habitats Checkpoint Quiz 12: Hypothesis Testing?",
          "skillId": "gen-science-k2-u1-external-skill-plants-animals-their-habitats-checkpoint-quiz-12-hypothesis-testing-review",
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
          "id": "gen-science-k2-u1-external-supp-seq-12-ia1",
          "type": "matching_pairs",
          "title": "Plants, Animals & Their Habitats Checkpoint Quiz 12: Hypothesis Testing Error Match",
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
                "label": "I understand Plants, Animals & Their Habitats Checkpoint Quiz 12: Hypothesis Testing in notes but not in timed checks."
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
          "id": "gen-science-k2-u1-external-supp-seq-12-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Plants, Animals & Their Habitats Checkpoint Quiz 12: Hypothesis Testing."
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
          "id": "gen-science-k2-u1-external-supp-seq-12-chunk-intro",
          "title": "Hypothesis Testing Intro",
          "content": "When we are testing our hypotheses, we need to use the evidence we gathered from our results to support our conclusions. This means looking closely at what we found and explaining how it helps us understand our question better!\nContext recap: When we are testing our hypotheses, we need to use the evidence we gathered from our results to support our conclusions. This means looking closely at what we found and explaining how it helps us understand our question better!",
          "kind": "concept"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-12-chunk-practice",
          "title": "Guided Practice",
          "content": "In this practice session, try to explain one of your results using evidence. Use some science vocabulary to help describe what you found. This will make your explanation clearer and show how well you understand the science behind it!\nContext recap: In this practice session, try to explain one of your results using evidence. Use some science vocabulary to help describe what you found. This will make your explanation clearer and show how well you understand the science behind it!",
          "kind": "practice"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-12-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we apply our hypothesis testing skills, let's watch out for a common mistake. Sometimes, we might forget to connect our evidence back to our hypothesis. If you see this happening, think about how you can use evidence to correct it and strengthen your conclusion!\nContext recap: As we apply our hypothesis testing skills, let's watch out for a common mistake. Sometimes, we might forget to connect our evidence back to our hypothesis. If you see this happening, think about how you can use evidence to correct it and strengthen your conclusion!",
          "kind": "analysis"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-12-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review what we learned about hypothesis testing. After that, think about one specific area where you can improve your skills. Setting a clear target will help you become more confident in your scientific thinking!\nContext recap: Let's quickly review what we learned about hypothesis testing. After that, think about one specific area where you can improve your skills. Setting a clear target will help you become more confident in your scientific thinking!\nWhy this matters: Quick Recap helps learners in General Science connect ideas from Plants, Animals & Their Habitats to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-12-card-1",
          "front": "What is hypothesis testing?",
          "back": "It is a key General Science idea in Plants, Animals & Their Habitats."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-12-card-2",
          "front": "How can I practice hypothesis testing?",
          "back": "Explain one result using evidence and science vocabulary."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-12-card-3",
          "front": "What should I review next?",
          "back": "Review hypothesis testing, then set one clear improvement target."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-12-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Plants, Animals & Their Habitats Checkpoint Quiz 12: Hypothesis Testing\" in \"General Science\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Plants, Animals & Their Habitats Checkpoint Quiz 12: Hypothesis Testing\" (General Science, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Plants, Animals & Their Habitats Checkpoint Quiz 12: Hypothesis Testing\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Plants, Animals & Their Habitats Checkpoint Quiz 12: Hypothesis Testing\" (General Science, grade band K2)."
      },
      "external": {
        "sourceLessonId": "gen-science-k2-u1-external-generated-cycle-12",
        "order": 12,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-k2-u1-external-supp-seq-13",
      "title": "Plants, Animals & Their Habitats Concept Walkthrough 13: Variable Control",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-13-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Plants, Animals & Their Habitats Concept Walkthrough 13: Variable Control."
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
          "id": "gen-science-k2-u1-external-supp-seq-13-chunk-intro",
          "title": "Variable Control Intro",
          "content": "To begin our exploration of variable control, we should start with an observation. From there, we can come up with a testable question. This will guide us in our investigation and help us find answers!\nContext recap: To begin our exploration of variable control, we should start with an observation. From there, we can come up with a testable question. This will guide us in our investigation and help us find answers!\nWhy this matters: Variable Control Intro helps learners in General Science connect ideas from Plants, Animals & Their Habitats to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "concept"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-13-chunk-practice",
          "title": "Guided Practice",
          "content": "Now it's time to run a mini investigation! As you conduct your experiment, make sure to record your outcomes in a table. This will help you organize your findings and make it easier to see what happened during your investigation!\nContext recap: Now it's time to run a mini investigation! As you conduct your experiment, make sure to record your outcomes in a table. This will help you organize your findings and make it easier to see what happened during your investigation!",
          "kind": "practice"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-13-chunk-check",
          "title": "Common Pitfall Check",
          "content": "While we practice variable control, let's be aware of a common mistake. Sometimes, we might not control our variables properly. If you notice this, think about how you can use evidence to correct it and improve your experiment!\nContext recap: While we practice variable control, let's be aware of a common mistake. Sometimes, we might not control our variables properly. If you notice this, think about how you can use evidence to correct it and improve your experiment!",
          "kind": "analysis"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-13-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's review what we learned about variable control. After our recap, think about one specific area where you can improve your skills. Setting a clear target will help you become a better scientist!\nContext recap: Let's review what we learned about variable control. After our recap, think about one specific area where you can improve your skills. Setting a clear target will help you become a better scientist!\nWhy this matters: Quick Recap helps learners in General Science connect ideas from Plants, Animals & Their Habitats to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-13-card-1",
          "front": "What is variable control?",
          "back": "It is a key General Science idea in Plants, Animals & Their Habitats."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-13-card-2",
          "front": "How can I practice variable control?",
          "back": "Run a mini investigation and record outcomes in a table."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-13-card-3",
          "front": "What should I review next?",
          "back": "Review variable control, then set one clear improvement target."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-13-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Plants, Animals & Their Habitats Concept Walkthrough 13: Variable Control\" in \"General Science\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Plants, Animals & Their Habitats Concept Walkthrough 13: Variable Control\" (General Science, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Plants, Animals & Their Habitats Concept Walkthrough 13: Variable Control\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Plants, Animals & Their Habitats Concept Walkthrough 13: Variable Control\" (General Science, grade band K2)."
      },
      "external": {
        "sourceLessonId": "gen-science-k2-u1-external-generated-cycle-13",
        "order": 13,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-k2-u1-external-supp-seq-14",
      "title": "Plants, Animals & Their Habitats Guided Practice Lab 14: Evidence Interpretation",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-14-ia1",
          "type": "drag_and_drop",
          "title": "Plants, Animals & Their Habitats Guided Practice Lab 14: Evidence Interpretation Learning Flow",
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
          "id": "gen-science-k2-u1-external-supp-seq-14-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Plants, Animals & Their Habitats Guided Practice Lab 14: Evidence Interpretation."
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
          "id": "gen-science-k2-u1-external-supp-seq-14-chunk-intro",
          "title": "Evidence Interpretation Intro",
          "content": "When we are doing experiments, it's important to change only one thing at a time. This way, we can see how that one change affects our results clearly. It helps us understand what is happening in our experiment better!\nContext recap: When we are doing experiments, it's important to change only one thing at a time. This way, we can see how that one change affects our results clearly. It helps us understand what is happening in our experiment better!",
          "kind": "concept"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-14-chunk-practice",
          "title": "Guided Practice",
          "content": "In our practice today, we will learn to identify three important types of variables in our experiments. The independent variable is what we change, the dependent variable is what we measure, and the control variables are the things we keep the same. Understanding these will help us conduct better experiments!\nContext recap: In our practice today, we will learn to identify three important types of variables in our experiments. The independent variable is what we change, the dependent variable is what we measure, and the control variables are the things we keep the same. Understanding these will help us conduct better experiments!",
          "kind": "practice"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-14-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we work on interpreting evidence, be careful of a common mistake that many people make. It's important to recognize this error and learn how to correct it using the evidence we have gathered. This will help us become better at understanding our results!\nContext recap: As we work on interpreting evidence, be careful of a common mistake that many people make. It's important to recognize this error and learn how to correct it using the evidence we have gathered. This will help us become better at understanding our results!",
          "kind": "analysis"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-14-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we learned about interpreting evidence. After our review, think about one specific way you can improve your understanding or skills in this area. Setting a clear goal will help you focus on what to work on next!\nContext recap: Let's take a moment to review what we learned about interpreting evidence. After our review, think about one specific way you can improve your understanding or skills in this area. Setting a clear goal will help you focus on what to work on next!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-14-card-1",
          "front": "What is evidence interpretation?",
          "back": "It is a key General Science idea in Plants, Animals & Their Habitats."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-14-card-2",
          "front": "How can I practice evidence interpretation?",
          "back": "Identify independent, dependent, and control variables."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-14-card-3",
          "front": "What should I review next?",
          "back": "Review evidence interpretation, then set one clear improvement target."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-14-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Plants, Animals & Their Habitats Guided Practice Lab 14: Evidence Interpretation\" in \"General Science\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Plants, Animals & Their Habitats Guided Practice Lab 14: Evidence Interpretation\" (General Science, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Plants, Animals & Their Habitats Guided Practice Lab 14: Evidence Interpretation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Plants, Animals & Their Habitats Guided Practice Lab 14: Evidence Interpretation\" (General Science, grade band K2)."
      },
      "external": {
        "sourceLessonId": "gen-science-k2-u1-external-generated-cycle-14",
        "order": 14,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-k2-u1-external-supp-seq-15",
      "title": "Plants, Animals & Their Habitats Checkpoint Quiz 15: Scientific Explanation",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-15-q1",
          "text": "Which option best summarizes Plants, Animals & Their Habitats Checkpoint Quiz 15: Scientific Explanation?",
          "skillId": "gen-science-k2-u1-external-skill-plants-animals-their-habitats-checkpoint-quiz-15-scientific-explanation-summary",
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
          "id": "gen-science-k2-u1-external-supp-seq-15-q2",
          "text": "Which response shows correct application of Plants, Animals & Their Habitats Checkpoint Quiz 15: Scientific Explanation?",
          "skillId": "gen-science-k2-u1-external-skill-plants-animals-their-habitats-checkpoint-quiz-15-scientific-explanation-apply",
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
          "id": "gen-science-k2-u1-external-supp-seq-15-q3",
          "text": "Why is review important after learning Plants, Animals & Their Habitats Checkpoint Quiz 15: Scientific Explanation?",
          "skillId": "gen-science-k2-u1-external-skill-plants-animals-their-habitats-checkpoint-quiz-15-scientific-explanation-review",
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
          "id": "gen-science-k2-u1-external-supp-seq-15-ia1",
          "type": "matching_pairs",
          "title": "Plants, Animals & Their Habitats Checkpoint Quiz 15: Scientific Explanation Error Match",
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
                "label": "I understand Plants, Animals & Their Habitats Checkpoint Quiz 15: Scientific Explanation in notes but not in timed checks."
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
          "id": "gen-science-k2-u1-external-supp-seq-15-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Plants, Animals & Their Habitats Checkpoint Quiz 15: Scientific Explanation."
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
          "id": "gen-science-k2-u1-external-supp-seq-15-chunk-intro",
          "title": "Scientific Explanation Intro",
          "content": "When we draw conclusions from our experiments, we need to use the evidence we collected to support what we think. This means looking at our results carefully and explaining how they lead us to our conclusion. It’s like being a detective with science!\nContext recap: When we draw conclusions from our experiments, we need to use the evidence we collected to support what we think. This means looking at our results carefully and explaining how they lead us to our conclusion. It’s like being a detective with science!",
          "kind": "concept"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-15-chunk-practice",
          "title": "Guided Practice",
          "content": "In this practice session, you will explain one of your results using the evidence you gathered. Make sure to use some science vocabulary in your explanation. This will help you communicate your findings clearly and show how you understand the science behind it!\nContext recap: In this practice session, you will explain one of your results using the evidence you gathered. Make sure to use some science vocabulary in your explanation. This will help you communicate your findings clearly and show how you understand the science behind it!",
          "kind": "practice"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-15-chunk-check",
          "title": "Common Pitfall Check",
          "content": "While you are working on your scientific explanations, be on the lookout for a common mistake that can happen. It’s important to recognize this error and learn how to fix it using the evidence you have. This will help you improve your explanations and make them stronger!\nContext recap: While you are working on your scientific explanations, be on the lookout for a common mistake that can happen. It’s important to recognize this error and learn how to fix it using the evidence you have. This will help you improve your explanations and make them stronger!",
          "kind": "analysis"
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-15-chunk-recap",
          "title": "Quick Recap",
          "content": "Let’s quickly review what we learned about scientific explanations. After our review, think about one specific area where you can improve your skills. Setting a clear target for improvement will help you become even better at explaining your scientific ideas!\nContext recap: Let’s quickly review what we learned about scientific explanations. After our review, think about one specific area where you can improve your skills. Setting a clear target for improvement will help you become even better at explaining your scientific ideas!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-k2-u1-external-supp-seq-15-card-1",
          "front": "What is scientific explanation?",
          "back": "It is a key General Science idea in Plants, Animals & Their Habitats."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-15-card-2",
          "front": "How can I practice scientific explanation?",
          "back": "Explain one result using evidence and science vocabulary."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-15-card-3",
          "front": "What should I review next?",
          "back": "Review scientific explanation, then set one clear improvement target."
        },
        {
          "id": "gen-science-k2-u1-external-supp-seq-15-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Plants, Animals & Their Habitats Checkpoint Quiz 15: Scientific Explanation\" in \"General Science\" for grade band \"K2\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Plants, Animals & Their Habitats Checkpoint Quiz 15: Scientific Explanation\" (General Science, grade band K2).",
        "lessonImage": "Create a clean educational illustration for \"Plants, Animals & Their Habitats Checkpoint Quiz 15: Scientific Explanation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Plants, Animals & Their Habitats Checkpoint Quiz 15: Scientific Explanation\" (General Science, grade band K2)."
      },
      "external": {
        "sourceLessonId": "gen-science-k2-u1-external-generated-cycle-15",
        "order": 15,
        "generatedSupplement": true
      }
    }
  ]
};
