import type { LearningModule } from "@/lib/modules/types";

export const GenSciencePrekU1ExternalModule: LearningModule = {
  "id": "gen-science-prek-u1-external",
  "title": "Living & Non-Living Things",
  "description": "General Science unit for Pre-K imported from external JSX curriculum.",
  "subject": "General Science",
  "tags": [
    "external-ai",
    "curriculum-import",
    "grade-prek"
  ],
  "minAge": 3,
  "maxAge": 5,
  "version": "external-1.0.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Explain Living Things Are All Around Us!.",
    "Explain Living Things GROW.",
    "Explain Living Things NEED Food, Water & Air.",
    "Build baseline confidence in Living & Non-Living Things.",
    "Apply one core General Science strategy for preK.",
    "Explain evidence interpretation using age-appropriate vocabulary.",
    "Apply evidence interpretation in one guided General Science task.",
    "Identify one correction step for the next attempt."
  ],
  "gradeBand": "preK",
  "metadata": {
    "source": "../External_AI_Agents/lesson_platform (1).jsx",
    "sourceUnitId": "gen-science-prek-u1",
    "sourceUnitIdCanonical": "gen-science-prek-u1",
    "sourceUnitIdRaw": "gen_science-prek-u1",
    "importedAt": "2026-02-25T02:03:30.481Z"
  },
  "external": {
    "unitOrder": 17,
    "estimatedHours": null,
    "prerequisites": []
  },
  "lessons": [
    {
      "id": "gen-science-prek-u1-1",
      "title": "What Makes Something Alive? (PREK)",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "gen-science-prek-u1-1-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for What Makes Something Alive? (PREK)."
        }
      ],
      "objectives": [
        "Explain Living Things Are All Around Us!.",
        "Explain Living Things GROW.",
        "Explain Living Things NEED Food, Water & Air."
      ],
      "chunks": [
        {
          "id": "gen-science-prek-u1-1-chunk-1",
          "title": "Living Things Are All Around Us!",
          "content": "If you take a moment to look around you, you will notice so many living things! Look at the tall trees swaying gently in the breeze, listen to the cheerful birds chirping and flying high in the sky, and watch the playful dogs wagging their tails with joy. And guess what? You are a living thing too! Living things are truly special because they can do amazing things that non-living things, like rocks or toy cars, cannot do. For example, living things can grow taller, move around, and even change in different ways! Isn't that incredible? Every living thing has its own unique way of being alive, and that makes our world a wonderful place to explore and learn about!"
        },
        {
          "id": "gen-science-prek-u1-1-chunk-2",
          "title": "Living Things GROW",
          "content": "Living things have a wonderful ability to grow and change as time goes by! For instance, think about a tiny seed. When you plant it in the soil, it can grow into a tall tree that stretches high into the sky, providing shade and homes for many creatures! Similarly, when a baby is born, they start as a small infant. As they grow, they become a child, and eventually, they turn into an adult. Isn’t that amazing? And let’s not forget about our furry friends! A little puppy, full of energy and curiosity, will grow into a big, playful dog that loves to run and play. But what about rocks? Rocks are different; they don’t grow at all! They stay the same size forever, just like a statue. Isn’t it fun to think about how living things change and grow while non-living things, like rocks, remain the same?"
        },
        {
          "id": "gen-science-prek-u1-1-chunk-3",
          "title": "Living Things NEED Food, Water & Air",
          "content": "All living things need special things to help them stay alive and healthy! First, they need food, just like we do! Food gives us energy to run, play, and grow big and strong. Think about how you eat your meals every day to feel good! Next, living things need water. Did you know that our bodies are mostly made of water? Water helps us stay hydrated and keeps everything working well inside us. Lastly, living things need air to breathe. This is true for all animals, even fish! Fish breathe oxygen that is mixed in the water. On the other hand, non-living things, like rocks and toys, don’t need food, water, or air. They just sit there and don’t require anything to exist. Isn’t that interesting? So remember, living things are special because they need these important things to live!"
        },
        {
          "id": "gen-science-prek-u1-1-chunk-4",
          "title": "Living Things RESPOND & REPRODUCE",
          "content": "Living things are amazing because they can respond to what is happening around them and can also create new life! For instance, when the sun shines brightly, plants will turn their leaves toward it to soak up the warm sunlight. This helps them grow strong and healthy! Animals, on the other hand, have different ways of responding. If they sense danger, like a loud noise or a big shadow, they might run away quickly to stay safe. This is how they react to their environment.\nAnother incredible thing about living things is that they can reproduce, which means they can make more of themselves! For example, dogs can have puppies, flowers can produce seeds that grow into new flowers, and cats can have kittens. This cycle of life is truly wonderful! It shows us how living things can bring new life into the world. In contrast, non-living things, like rocks or toys, cannot create new things. They stay the same forever. Isn’t it fascinating to learn about how living things grow and change?\nSo, remember, living things respond to their surroundings and can reproduce, while non-living things cannot do either of these things!"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-prek-u1-1-card-1",
          "front": "Name 4 things living things do",
          "back": "Grow, Need food/water/air, Respond to environment, Reproduce"
        },
        {
          "id": "gen-science-prek-u1-1-card-2",
          "front": "Is a rock living or non-living?",
          "back": "NON-LIVING 🪨 — it doesn't grow, eat, or reproduce"
        },
        {
          "id": "gen-science-prek-u1-1-card-3",
          "front": "Is a tree living or non-living?",
          "back": "LIVING 🌳 — it grows, needs water and sunlight, and makes seeds"
        },
        {
          "id": "gen-science-prek-u1-1-card-4",
          "front": "Why do living things need food?",
          "back": "For ENERGY to move, grow, and stay healthy"
        },
        {
          "id": "gen-science-prek-u1-1-card-5",
          "front": "What does REPRODUCE mean?",
          "back": "To make more of the same living thing (babies, seeds, eggs)"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Animated nature walk. A friendly scientist character walks through a vibrant habitat — forest, pond, garden. They encounter living things (tree, frog, butterfly, child) and non-living things (rock, bench, cloud). Each is labeled. Life characteristics shown: a seed growing into a flower in time-lapse, a frog jumping away from a predator, a cat nursing kittens. Warm, documentary-inspired animation style. Ages 3-5. Duration: 60 seconds.",
        "seedanceAnimation": "Lottie animation: Split screen. Left side: living things (plant, bird, fish) glowing green with small icons showing growth, food, offspring. Right side: non-living things (rock, cloud, chair) in grey with X marks on those icons. 12-second animation.",
        "lessonImage": "Create a clean educational illustration for \"What Makes Something Alive? (PREK)\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"What Makes Something Alive? (PREK)\" (General Science, grade band preK)."
      },
      "localized": {
        "title": {
          "en": "What Makes Something Alive?"
        },
        "concept": {
          "en": "What Makes Something Alive?"
        }
      },
      "external": {
        "sourceLessonId": "gen_science-prek-u1-1",
        "order": 1
      }
    },
    {
      "id": "gen-science-prek-u1-external-supp-interactive",
      "title": "Living & Non-Living Things Supplemental Practice",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-prek-u1-external-supp-interactive-ia1",
          "type": "drag_and_drop",
          "title": "Living & Non-Living Things Supplemental Practice Learning Flow",
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
                "label": "Set a goal for Build baseline confidence in Living & Non-Living Things..",
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
          "id": "gen-science-prek-u1-external-supp-interactive-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Living & Non-Living Things Supplemental Practice."
        }
      ],
      "metadata": {
        "prompts": [
          "Build baseline confidence in Living & Non-Living Things.",
          "Apply one core General Science strategy for preK."
        ]
      },
      "objectives": [
        "Build baseline confidence in Living & Non-Living Things.",
        "Apply one core General Science strategy for preK."
      ],
      "chunks": [
        {
          "id": "gen-science-prek-u1-external-supp-interactive-chunk-intro",
          "title": "Living & Non-Living Things Supplemental Practice Overview",
          "content": "In this section, we will practice what we have learned about living and non-living things. This will help us remember the important ideas and concepts from our General Science lessons. Let’s have fun while we explore and reinforce our understanding together!\nContext recap: In this section, we will practice what we have learned about living and non-living things. This will help us remember the important ideas and concepts from our General Science lessons. Let’s have fun while we explore and reinforce our understanding together!",
          "kind": "concept"
        },
        {
          "id": "gen-science-prek-u1-external-supp-interactive-chunk-recap",
          "title": "Quick Recap",
          "content": "Let’s take a moment to think about one important idea we learned today. What is something new you discovered about living and non-living things? After that, let’s plan one fun activity we can do next to explore this topic even more!\nContext recap: Let’s take a moment to think about one important idea we learned today. What is something new you discovered about living and non-living things? After that, let’s plan one fun activity we can do next to explore this topic even more!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-prek-u1-external-supp-interactive-card-1",
          "front": "What is one key idea in Living & Non-Living Things?",
          "back": "Build baseline confidence in Living & Non-Living Things."
        },
        {
          "id": "gen-science-prek-u1-external-supp-interactive-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core General Science strategy for preK."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Living & Non-Living Things Supplemental Practice\" in \"General Science\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Living & Non-Living Things Supplemental Practice\" (General Science, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Living & Non-Living Things Supplemental Practice\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Living & Non-Living Things Supplemental Practice\" (General Science, grade band preK)."
      },
      "external": {
        "sourceLessonId": "gen-science-prek-u1-external-supp-interactive",
        "order": 2,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-prek-u1-external-supp-quiz",
      "title": "Living & Non-Living Things Supplemental Check",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-prek-u1-external-supp-quiz-q1",
          "text": "Which option best summarizes Living & Non-Living Things Supplemental Check?",
          "skillId": "gen-science-prek-u1-external-skill-living-non-living-things-supplemental-check-summary",
          "options": [
            {
              "id": "a",
              "text": "Build baseline confidence in Living & Non-Living Things."
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
          "id": "gen-science-prek-u1-external-supp-quiz-q2",
          "text": "Which response shows correct application of Living & Non-Living Things Supplemental Check?",
          "skillId": "gen-science-prek-u1-external-skill-living-non-living-things-supplemental-check-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply one core General Science strategy for preK."
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
          "id": "gen-science-prek-u1-external-supp-quiz-q3",
          "text": "Why is review important after learning Living & Non-Living Things Supplemental Check?",
          "skillId": "gen-science-prek-u1-external-skill-living-non-living-things-supplemental-check-review",
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
          "id": "gen-science-prek-u1-external-supp-quiz-ia1",
          "type": "matching_pairs",
          "title": "Living & Non-Living Things Supplemental Check Error Match",
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
                "label": "I still mix up Build baseline confidence in Living & Non-Living Things.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Living & Non-Living Things Supplemental Check in notes but not in timed checks."
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
          "id": "gen-science-prek-u1-external-supp-quiz-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Living & Non-Living Things Supplemental Check."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Build baseline confidence in Living & Non-Living Things.",
        "Apply one core General Science strategy for preK."
      ],
      "chunks": [
        {
          "id": "gen-science-prek-u1-external-supp-quiz-chunk-intro",
          "title": "Living & Non-Living Things Supplemental Check Overview",
          "content": "Now it’s time to check what we have learned about living and non-living things! This will help us remember the key ideas and concepts from our General Science lessons. Let’s get ready to have some fun with this quiz!\nContext recap: Now it’s time to check what we have learned about living and non-living things! This will help us remember the key ideas and concepts from our General Science lessons. Let’s get ready to have some fun with this quiz!",
          "kind": "concept"
        },
        {
          "id": "gen-science-prek-u1-external-supp-quiz-chunk-recap",
          "title": "Quick Recap",
          "content": "Let’s quickly summarize one important idea we talked about today. What is something you found interesting? After that, let’s think of one next step we can take to learn even more about living and non-living things!\nContext recap: Let’s quickly summarize one important idea we talked about today. What is something you found interesting? After that, let’s think of one next step we can take to learn even more about living and non-living things!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-prek-u1-external-supp-quiz-card-1",
          "front": "What is one key idea in Living & Non-Living Things?",
          "back": "Build baseline confidence in Living & Non-Living Things."
        },
        {
          "id": "gen-science-prek-u1-external-supp-quiz-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core General Science strategy for preK."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Living & Non-Living Things Supplemental Check\" in \"General Science\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Living & Non-Living Things Supplemental Check\" (General Science, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Living & Non-Living Things Supplemental Check\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Living & Non-Living Things Supplemental Check\" (General Science, grade band preK)."
      },
      "external": {
        "sourceLessonId": "gen-science-prek-u1-external-supp-quiz",
        "order": 3,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-prek-u1-external-supp-seq-04",
      "title": "Living & Non-Living Things Concept Walkthrough 4: Evidence Interpretation",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-04-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Living & Non-Living Things Concept Walkthrough 4: Evidence Interpretation."
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
          "id": "gen-science-prek-u1-external-supp-seq-04-chunk-intro",
          "title": "Evidence Interpretation Intro",
          "content": "To start our exploration, we will begin with an observation. What do you see around you? Then, let’s come up with a question that we can test together. This will help us learn more about living and non-living things!\nContext recap: To start our exploration, we will begin with an observation. What do you see around you? Then, let’s come up with a question that we can test together. This will help us learn more about living and non-living things!",
          "kind": "concept"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-04-chunk-practice",
          "title": "Guided Practice",
          "content": "Now it’s time for some hands-on fun! We will run a mini investigation to see what we can discover. Let’s record our findings in a table so we can keep track of what we learn. This will help us understand our observations better!\nContext recap: Now it’s time for some hands-on fun! We will run a mini investigation to see what we can discover. Let’s record our findings in a table so we can keep track of what we learn. This will help us understand our observations better!",
          "kind": "practice"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-04-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we explore, let’s be on the lookout for a common mistake that can happen when we interpret our evidence. If we notice it, we can work together to correct it using the evidence we have gathered. This will help us become better at understanding what we see!\nContext recap: As we explore, let’s be on the lookout for a common mistake that can happen when we interpret our evidence. If we notice it, we can work together to correct it using the evidence we have gathered. This will help us become better at understanding what we see!",
          "kind": "analysis"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-04-chunk-recap",
          "title": "Quick Recap",
          "content": "Let’s take a moment to review what we learned about interpreting evidence. What did we discover together? After that, let’s set one clear goal for how we can improve our understanding in the future. This will help us continue to grow our knowledge!\nContext recap: Let’s take a moment to review what we learned about interpreting evidence. What did we discover together? After that, let’s set one clear goal for how we can improve our understanding in the future. This will help us continue to grow our knowledge!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-04-card-1",
          "front": "What is evidence interpretation?",
          "back": "It is a key General Science idea in Living & Non-Living Things."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-04-card-2",
          "front": "How can I practice evidence interpretation?",
          "back": "Run a mini investigation and record outcomes in a table."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-04-card-3",
          "front": "What should I review next?",
          "back": "Review evidence interpretation, then set one clear improvement target."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-04-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Living & Non-Living Things Concept Walkthrough 4: Evidence Interpretation\" in \"General Science\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Living & Non-Living Things Concept Walkthrough 4: Evidence Interpretation\" (General Science, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Living & Non-Living Things Concept Walkthrough 4: Evidence Interpretation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Living & Non-Living Things Concept Walkthrough 4: Evidence Interpretation\" (General Science, grade band preK)."
      },
      "external": {
        "sourceLessonId": "gen-science-prek-u1-external-generated-cycle-4",
        "order": 4,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-prek-u1-external-supp-seq-05",
      "title": "Living & Non-Living Things Guided Practice Lab 5: Scientific Explanation",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-05-ia1",
          "type": "drag_and_drop",
          "title": "Living & Non-Living Things Guided Practice Lab 5: Scientific Explanation Learning Flow",
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
          "id": "gen-science-prek-u1-external-supp-seq-05-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Living & Non-Living Things Guided Practice Lab 5: Scientific Explanation."
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
          "id": "gen-science-prek-u1-external-supp-seq-05-chunk-intro",
          "title": "Scientific Explanation Intro",
          "content": "When we are doing experiments, it's important to change only one thing at a time. This way, we can see how that one change affects what we are studying. This helps us understand our results better!\nContext recap: When we are doing experiments, it's important to change only one thing at a time. This way, we can see how that one change affects what we are studying. This helps us understand our results better!\nWhy this matters: Scientific Explanation Intro helps learners in General Science connect ideas from Living & Non-Living Things to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "concept"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-05-chunk-practice",
          "title": "Guided Practice",
          "content": "Let's learn about three important parts of an experiment! The independent variable is what we change, the dependent variable is what we measure, and the control variables are the things we keep the same. Can you find these in our experiment?\nContext recap: Let's learn about three important parts of an experiment! The independent variable is what we change, the dependent variable is what we measure, and the control variables are the things we keep the same. Can you find these in our experiment?",
          "kind": "practice"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-05-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we explore how to explain our scientific findings, it's important to pay attention to a common mistake that many people make. If you notice this error while sharing your ideas, don't worry! You can correct it by using evidence from what you discovered in your experiment. This practice will help you learn and understand the world around you even better!\nContext recap: As we explore how to explain our scientific findings, it's important to pay attention to a common mistake that many people make. If you notice this error while sharing your ideas, don't worry! You can correct it by using evidence from what you discovered in your experiment. This practice will help you learn and understand the world around you even better!",
          "kind": "analysis"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-05-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly go over what we learned about scientific explanations. After that, think of one thing you can improve in your next experiment. Setting a goal will help you get even better!\nContext recap: Let's quickly go over what we learned about scientific explanations. After that, think of one thing you can improve in your next experiment. Setting a goal will help you get even better!\nWhy this matters: Quick Recap helps learners in General Science connect ideas from Living & Non-Living Things to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-05-card-1",
          "front": "What is scientific explanation?",
          "back": "It is a key General Science idea in Living & Non-Living Things."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-05-card-2",
          "front": "How can I practice scientific explanation?",
          "back": "Identify independent, dependent, and control variables."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-05-card-3",
          "front": "What should I review next?",
          "back": "Review scientific explanation, then set one clear improvement target."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-05-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Living & Non-Living Things Guided Practice Lab 5: Scientific Explanation\" in \"General Science\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Living & Non-Living Things Guided Practice Lab 5: Scientific Explanation\" (General Science, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Living & Non-Living Things Guided Practice Lab 5: Scientific Explanation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Living & Non-Living Things Guided Practice Lab 5: Scientific Explanation\" (General Science, grade band preK)."
      },
      "external": {
        "sourceLessonId": "gen-science-prek-u1-external-generated-cycle-5",
        "order": 5,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-prek-u1-external-supp-seq-06",
      "title": "Living & Non-Living Things Checkpoint Quiz 6: Observation Skills",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-06-q1",
          "text": "Which option best summarizes Living & Non-Living Things Checkpoint Quiz 6: Observation Skills?",
          "skillId": "gen-science-prek-u1-external-skill-living-non-living-things-checkpoint-quiz-6-observation-skills-summary",
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
          "id": "gen-science-prek-u1-external-supp-seq-06-q2",
          "text": "Which response shows correct application of Living & Non-Living Things Checkpoint Quiz 6: Observation Skills?",
          "skillId": "gen-science-prek-u1-external-skill-living-non-living-things-checkpoint-quiz-6-observation-skills-apply",
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
          "id": "gen-science-prek-u1-external-supp-seq-06-q3",
          "text": "Why is review important after learning Living & Non-Living Things Checkpoint Quiz 6: Observation Skills?",
          "skillId": "gen-science-prek-u1-external-skill-living-non-living-things-checkpoint-quiz-6-observation-skills-review",
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
          "id": "gen-science-prek-u1-external-supp-seq-06-ia1",
          "type": "matching_pairs",
          "title": "Living & Non-Living Things Checkpoint Quiz 6: Observation Skills Error Match",
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
                "label": "I understand Living & Non-Living Things Checkpoint Quiz 6: Observation Skills in notes but not in timed checks."
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
          "id": "gen-science-prek-u1-external-supp-seq-06-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Living & Non-Living Things Checkpoint Quiz 6: Observation Skills."
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
          "id": "gen-science-prek-u1-external-supp-seq-06-chunk-intro",
          "title": "Observation Skills Intro",
          "content": "When we make conclusions from our experiments, we should always use evidence from our results. This means looking at what we found and explaining why we think it happened!\nContext recap: When we make conclusions from our experiments, we should always use evidence from our results. This means looking at what we found and explaining why we think it happened!\nWhy this matters: Observation Skills Intro helps learners in General Science connect ideas from Living & Non-Living Things to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "concept"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-06-chunk-practice",
          "title": "Guided Practice",
          "content": "Can you explain one of your results? Use evidence from your experiment and try to include some science words. This will help everyone understand your findings better!\nContext recap: Can you explain one of your results? Use evidence from your experiment and try to include some science words. This will help everyone understand your findings better!\nWhy this matters: Guided Practice helps learners in General Science connect ideas from Living & Non-Living Things to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "practice"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-06-chunk-check",
          "title": "Common Pitfall Check",
          "content": "When we practice our observation skills, it's important to be careful about making a common mistake. If you see this mistake happening, you can fix it by using the evidence from what you have observed around you. This way, your observations will be even better and more accurate! Remember, paying attention to details helps us learn more about the world!\nContext recap: When we practice our observation skills, it's important to be careful about making a common mistake. If you see this mistake happening, you can fix it by using the evidence from what you have observed around you. This way, your observations will be even better and more accurate! Remember, paying attention to details helps us learn more about the world!",
          "kind": "analysis"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-06-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's review what we learned about observation skills. After that, think of one way you can improve your observations next time. Setting a goal will help you grow!\nContext recap: Let's review what we learned about observation skills. After that, think of one way you can improve your observations next time. Setting a goal will help you grow!\nWhy this matters: Quick Recap helps learners in General Science connect ideas from Living & Non-Living Things to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-06-card-1",
          "front": "What is observation skills?",
          "back": "It is a key General Science idea in Living & Non-Living Things."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-06-card-2",
          "front": "How can I practice observation skills?",
          "back": "Explain one result using evidence and science vocabulary."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-06-card-3",
          "front": "What should I review next?",
          "back": "Review observation skills, then set one clear improvement target."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-06-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Living & Non-Living Things Checkpoint Quiz 6: Observation Skills\" in \"General Science\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Living & Non-Living Things Checkpoint Quiz 6: Observation Skills\" (General Science, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Living & Non-Living Things Checkpoint Quiz 6: Observation Skills\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Living & Non-Living Things Checkpoint Quiz 6: Observation Skills\" (General Science, grade band preK)."
      },
      "external": {
        "sourceLessonId": "gen-science-prek-u1-external-generated-cycle-6",
        "order": 6,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-prek-u1-external-supp-seq-07",
      "title": "Living & Non-Living Things Concept Walkthrough 7: Hypothesis Testing",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-07-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Living & Non-Living Things Concept Walkthrough 7: Hypothesis Testing."
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
          "id": "gen-science-prek-u1-external-supp-seq-07-chunk-intro",
          "title": "Hypothesis Testing Intro",
          "content": "To start testing a hypothesis, we need to make an observation first. Then, we can come up with a question that we can test. This is the beginning of our scientific journey!\nContext recap: To start testing a hypothesis, we need to make an observation first. Then, we can come up with a question that we can test. This is the beginning of our scientific journey!\nWhy this matters: Hypothesis Testing Intro helps learners in General Science connect ideas from Living & Non-Living Things to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "concept"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-07-chunk-practice",
          "title": "Guided Practice",
          "content": "Let's conduct a mini investigation! As you do this, remember to write down what happens in a table. This will help us keep track of our results and see what we discover!\nContext recap: Let's conduct a mini investigation! As you do this, remember to write down what happens in a table. This will help us keep track of our results and see what we discover!\nWhy this matters: Guided Practice helps learners in General Science connect ideas from Living & Non-Living Things to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "practice"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-07-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we explore our ideas and test our hypotheses, it's important to be on the lookout for a common mistake that can happen. If you notice this mistake, don't worry! You can fix it by looking at the evidence from your investigation. This way, you will learn even more about living and non-living things around us!\nContext recap: As we explore our ideas and test our hypotheses, it's important to be on the lookout for a common mistake that can happen. If you notice this mistake, don't worry! You can fix it by looking at the evidence from your investigation. This way, you will learn even more about living and non-living things around us!",
          "kind": "analysis"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-07-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review what we learned about hypothesis testing. After that, think of one way you can improve your testing process next time. Setting a goal will help you become a better scientist!\nContext recap: Let's quickly review what we learned about hypothesis testing. After that, think of one way you can improve your testing process next time. Setting a goal will help you become a better scientist!\nWhy this matters: Quick Recap helps learners in General Science connect ideas from Living & Non-Living Things to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-07-card-1",
          "front": "What is hypothesis testing?",
          "back": "It is a key General Science idea in Living & Non-Living Things."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-07-card-2",
          "front": "How can I practice hypothesis testing?",
          "back": "Run a mini investigation and record outcomes in a table."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-07-card-3",
          "front": "What should I review next?",
          "back": "Review hypothesis testing, then set one clear improvement target."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-07-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Living & Non-Living Things Concept Walkthrough 7: Hypothesis Testing\" in \"General Science\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Living & Non-Living Things Concept Walkthrough 7: Hypothesis Testing\" (General Science, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Living & Non-Living Things Concept Walkthrough 7: Hypothesis Testing\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Living & Non-Living Things Concept Walkthrough 7: Hypothesis Testing\" (General Science, grade band preK)."
      },
      "external": {
        "sourceLessonId": "gen-science-prek-u1-external-generated-cycle-7",
        "order": 7,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-prek-u1-external-supp-seq-08",
      "title": "Living & Non-Living Things Guided Practice Lab 8: Variable Control",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-08-ia1",
          "type": "drag_and_drop",
          "title": "Living & Non-Living Things Guided Practice Lab 8: Variable Control Learning Flow",
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
          "id": "gen-science-prek-u1-external-supp-seq-08-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Living & Non-Living Things Guided Practice Lab 8: Variable Control."
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
          "id": "gen-science-prek-u1-external-supp-seq-08-chunk-intro",
          "title": "Variable Control Intro",
          "content": "When we are doing experiments, it's important to change only one thing at a time. This way, we can see how that one change affects what we are testing. This helps us understand our results better and makes our findings clearer.\nContext recap: When we are doing experiments, it's important to change only one thing at a time. This way, we can see how that one change affects what we are testing. This helps us understand our results better and makes our findings clearer.",
          "kind": "concept"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-08-chunk-practice",
          "title": "Guided Practice",
          "content": "In our practice today, we will learn to identify three types of variables. The independent variable is what we change, the dependent variable is what we observe or measure, and the control variables are the things we keep the same to ensure a fair test.\nContext recap: In our practice today, we will learn to identify three types of variables. The independent variable is what we change, the dependent variable is what we observe or measure, and the control variables are the things we keep the same to ensure a fair test.",
          "kind": "practice"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-08-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we apply what we've learned about variable control, let's be on the lookout for a common mistake. If we notice this error, we can use evidence from our results to help us fix it and improve our understanding.\nContext recap: As we apply what we've learned about variable control, let's be on the lookout for a common mistake. If we notice this error, we can use evidence from our results to help us fix it and improve our understanding.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-08-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we learned about variable control. After our review, we will think of one specific way we can improve our experiments in the future to make them even better.\nContext recap: Let's take a moment to review what we learned about variable control. After our review, we will think of one specific way we can improve our experiments in the future to make them even better.\nWhy this matters: Quick Recap helps learners in General Science connect ideas from Living & Non-Living Things to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-08-card-1",
          "front": "What is variable control?",
          "back": "It is a key General Science idea in Living & Non-Living Things."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-08-card-2",
          "front": "How can I practice variable control?",
          "back": "Identify independent, dependent, and control variables."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-08-card-3",
          "front": "What should I review next?",
          "back": "Review variable control, then set one clear improvement target."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-08-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Living & Non-Living Things Guided Practice Lab 8: Variable Control\" in \"General Science\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Living & Non-Living Things Guided Practice Lab 8: Variable Control\" (General Science, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Living & Non-Living Things Guided Practice Lab 8: Variable Control\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Living & Non-Living Things Guided Practice Lab 8: Variable Control\" (General Science, grade band preK)."
      },
      "external": {
        "sourceLessonId": "gen-science-prek-u1-external-generated-cycle-8",
        "order": 8,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-prek-u1-external-supp-seq-09",
      "title": "Living & Non-Living Things Checkpoint Quiz 9: Evidence Interpretation",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-09-q1",
          "text": "Which option best summarizes Living & Non-Living Things Checkpoint Quiz 9: Evidence Interpretation?",
          "skillId": "gen-science-prek-u1-external-skill-living-non-living-things-checkpoint-quiz-9-evidence-interpretation-summary",
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
          "id": "gen-science-prek-u1-external-supp-seq-09-q2",
          "text": "Which response shows correct application of Living & Non-Living Things Checkpoint Quiz 9: Evidence Interpretation?",
          "skillId": "gen-science-prek-u1-external-skill-living-non-living-things-checkpoint-quiz-9-evidence-interpretation-apply",
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
          "id": "gen-science-prek-u1-external-supp-seq-09-q3",
          "text": "Why is review important after learning Living & Non-Living Things Checkpoint Quiz 9: Evidence Interpretation?",
          "skillId": "gen-science-prek-u1-external-skill-living-non-living-things-checkpoint-quiz-9-evidence-interpretation-review",
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
          "id": "gen-science-prek-u1-external-supp-seq-09-ia1",
          "type": "matching_pairs",
          "title": "Living & Non-Living Things Checkpoint Quiz 9: Evidence Interpretation Error Match",
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
                "label": "I understand Living & Non-Living Things Checkpoint Quiz 9: Evidence Interpretation in notes but not in timed checks."
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
          "id": "gen-science-prek-u1-external-supp-seq-09-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Living & Non-Living Things Checkpoint Quiz 9: Evidence Interpretation."
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
          "id": "gen-science-prek-u1-external-supp-seq-09-chunk-intro",
          "title": "Evidence Interpretation Intro",
          "content": "When we look at the results of our experiments, we need to use that evidence to help us understand what it means. This means connecting our findings to our conclusions in a clear way.\nContext recap: When we look at the results of our experiments, we need to use that evidence to help us understand what it means. This means connecting our findings to our conclusions in a clear way.\nWhy this matters: Evidence Interpretation Intro helps learners in General Science connect ideas from Living & Non-Living Things to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "concept"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-09-chunk-practice",
          "title": "Guided Practice",
          "content": "In this practice, we will explain one of our results. We will use evidence from our experiment and include some science words to help describe what we found and why it matters.\nContext recap: In this practice, we will explain one of our results. We will use evidence from our experiment and include some science words to help describe what we found and why it matters.\nWhy this matters: Guided Practice helps learners in General Science connect ideas from Living & Non-Living Things to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "practice"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-09-chunk-check",
          "title": "Common Pitfall Check",
          "content": "When we look at the evidence we have, it's important to be aware of a mistake that can sometimes happen. This mistake might lead us to think something that isn't quite right. If we notice this error, we can use the evidence we've gathered to fix it. This helps us learn more and understand our findings better. Let's remember that checking our work is a great way to make sure we are on the right track!\nContext recap: When we look at the evidence we have, it's important to be aware of a mistake that can sometimes happen. This mistake might lead us to think something that isn't quite right. If we notice this error, we can use the evidence we've gathered to fix it. This helps us learn more and understand our findings better.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-09-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review how we interpret evidence from our experiments. After our recap, we will set one clear goal for how we can improve our understanding in the next activity.\nContext recap: Let's quickly review how we interpret evidence from our experiments. After our recap, we will set one clear goal for how we can improve our understanding in the next activity.\nWhy this matters: Quick Recap helps learners in General Science connect ideas from Living & Non-Living Things to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-09-card-1",
          "front": "What is evidence interpretation?",
          "back": "It is a key General Science idea in Living & Non-Living Things."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-09-card-2",
          "front": "How can I practice evidence interpretation?",
          "back": "Explain one result using evidence and science vocabulary."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-09-card-3",
          "front": "What should I review next?",
          "back": "Review evidence interpretation, then set one clear improvement target."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-09-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Living & Non-Living Things Checkpoint Quiz 9: Evidence Interpretation\" in \"General Science\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Living & Non-Living Things Checkpoint Quiz 9: Evidence Interpretation\" (General Science, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Living & Non-Living Things Checkpoint Quiz 9: Evidence Interpretation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Living & Non-Living Things Checkpoint Quiz 9: Evidence Interpretation\" (General Science, grade band preK)."
      },
      "external": {
        "sourceLessonId": "gen-science-prek-u1-external-generated-cycle-9",
        "order": 9,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-prek-u1-external-supp-seq-10",
      "title": "Living & Non-Living Things Concept Walkthrough 10: Scientific Explanation",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-10-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Living & Non-Living Things Concept Walkthrough 10: Scientific Explanation."
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
          "id": "gen-science-prek-u1-external-supp-seq-10-chunk-intro",
          "title": "Scientific Explanation Intro",
          "content": "To start our scientific explanation, we need to make an observation about something we see. Then, we will come up with a question that we can test to learn more about it.\nContext recap: To start our scientific explanation, we need to make an observation about something we see. Then, we will come up with a question that we can test to learn more about it.\nWhy this matters: Scientific Explanation Intro helps learners in General Science connect ideas from Living & Non-Living Things to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "concept"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-10-chunk-practice",
          "title": "Guided Practice",
          "content": "In our mini investigation, we will explore a question and write down what we find in a table. This will help us keep track of our results and see what we discover.\nContext recap: In our mini investigation, we will explore a question and write down what we find in a table. This will help us keep track of our results and see what we discover.\nWhy this matters: Guided Practice helps learners in General Science connect ideas from Living & Non-Living Things to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "practice"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-10-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we explore how to explain things scientifically, it's important to keep an eye out for a mistake that sometimes happens. This mistake can make our explanations unclear. If we spot this error, we can use the facts and information we have gathered to correct it. By doing this, we can make our explanations even better and clearer for everyone to understand!\nContext recap: As we explore how to explain things scientifically, it's important to keep an eye out for a mistake that sometimes happens. This mistake can make our explanations unclear. If we spot this error, we can use the facts and information we have gathered to correct it. By doing this, we can make our explanations even better and clearer for everyone to understand!",
          "kind": "analysis"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-10-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we learned about scientific explanations. After our review, we will think of one specific way we can improve our explanations in the future.\nContext recap: Let's take a moment to review what we learned about scientific explanations. After our review, we will think of one specific way we can improve our explanations in the future.\nWhy this matters: Quick Recap helps learners in General Science connect ideas from Living & Non-Living Things to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-10-card-1",
          "front": "What is scientific explanation?",
          "back": "It is a key General Science idea in Living & Non-Living Things."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-10-card-2",
          "front": "How can I practice scientific explanation?",
          "back": "Run a mini investigation and record outcomes in a table."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-10-card-3",
          "front": "What should I review next?",
          "back": "Review scientific explanation, then set one clear improvement target."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-10-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Living & Non-Living Things Concept Walkthrough 10: Scientific Explanation\" in \"General Science\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Living & Non-Living Things Concept Walkthrough 10: Scientific Explanation\" (General Science, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Living & Non-Living Things Concept Walkthrough 10: Scientific Explanation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Living & Non-Living Things Concept Walkthrough 10: Scientific Explanation\" (General Science, grade band preK)."
      },
      "external": {
        "sourceLessonId": "gen-science-prek-u1-external-generated-cycle-10",
        "order": 10,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-prek-u1-external-supp-seq-11",
      "title": "Living & Non-Living Things Guided Practice Lab 11: Observation Skills",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-11-ia1",
          "type": "drag_and_drop",
          "title": "Living & Non-Living Things Guided Practice Lab 11: Observation Skills Learning Flow",
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
          "id": "gen-science-prek-u1-external-supp-seq-11-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Living & Non-Living Things Guided Practice Lab 11: Observation Skills."
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
          "id": "gen-science-prek-u1-external-supp-seq-11-chunk-intro",
          "title": "Observation Skills Intro",
          "content": "When we are doing our experiments, it's important to change only one thing at a time. This way, we can see how that one change affects what we are observing. Keeping things clear helps us understand our results better!\nContext recap: When we are doing our experiments, it's important to change only one thing at a time. This way, we can see how that one change affects what we are observing. Keeping things clear helps us understand our results better!",
          "kind": "concept"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-11-chunk-practice",
          "title": "Guided Practice",
          "content": "Let's practice identifying different types of variables in our experiments! We will look for the independent variable, which is what we change, the dependent variable, which is what we measure, and the control variables, which stay the same. This will help us understand how our experiments work!\nContext recap: Let's practice identifying different types of variables in our experiments! We will look for the independent variable, which is what we change, the dependent variable, which is what we measure, and the control variables, which stay the same. This will help us understand how our experiments work!",
          "kind": "practice"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-11-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we use our observation skills, we need to be careful about making mistakes. One common error is forgetting to keep some things the same while changing others. If we notice this mistake, we can fix it by looking closely at our evidence and making sure we are following our plan!\nContext recap: As we use our observation skills, we need to be careful about making mistakes. One common error is forgetting to keep some things the same while changing others. If we notice this mistake, we can fix it by looking closely at our evidence and making sure we are following our plan!",
          "kind": "analysis"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-11-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review what we learned about observation skills! Remember to think about how you can improve your skills next time. Setting a clear goal for improvement will help you become even better at observing and understanding the world around you!\nContext recap: Let's quickly review what we learned about observation skills! Remember to think about how you can improve your skills next time. Setting a clear goal for improvement will help you become even better at observing and understanding the world around you!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-11-card-1",
          "front": "What is observation skills?",
          "back": "It is a key General Science idea in Living & Non-Living Things."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-11-card-2",
          "front": "How can I practice observation skills?",
          "back": "Identify independent, dependent, and control variables."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-11-card-3",
          "front": "What should I review next?",
          "back": "Review observation skills, then set one clear improvement target."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-11-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Living & Non-Living Things Guided Practice Lab 11: Observation Skills\" in \"General Science\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Living & Non-Living Things Guided Practice Lab 11: Observation Skills\" (General Science, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Living & Non-Living Things Guided Practice Lab 11: Observation Skills\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Living & Non-Living Things Guided Practice Lab 11: Observation Skills\" (General Science, grade band preK)."
      },
      "external": {
        "sourceLessonId": "gen-science-prek-u1-external-generated-cycle-11",
        "order": 11,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-prek-u1-external-supp-seq-12",
      "title": "Living & Non-Living Things Checkpoint Quiz 12: Hypothesis Testing",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-12-q1",
          "text": "Which option best summarizes Living & Non-Living Things Checkpoint Quiz 12: Hypothesis Testing?",
          "skillId": "gen-science-prek-u1-external-skill-living-non-living-things-checkpoint-quiz-12-hypothesis-testing-summary",
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
          "id": "gen-science-prek-u1-external-supp-seq-12-q2",
          "text": "Which response shows correct application of Living & Non-Living Things Checkpoint Quiz 12: Hypothesis Testing?",
          "skillId": "gen-science-prek-u1-external-skill-living-non-living-things-checkpoint-quiz-12-hypothesis-testing-apply",
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
          "id": "gen-science-prek-u1-external-supp-seq-12-q3",
          "text": "Why is review important after learning Living & Non-Living Things Checkpoint Quiz 12: Hypothesis Testing?",
          "skillId": "gen-science-prek-u1-external-skill-living-non-living-things-checkpoint-quiz-12-hypothesis-testing-review",
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
          "id": "gen-science-prek-u1-external-supp-seq-12-ia1",
          "type": "matching_pairs",
          "title": "Living & Non-Living Things Checkpoint Quiz 12: Hypothesis Testing Error Match",
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
                "label": "I understand Living & Non-Living Things Checkpoint Quiz 12: Hypothesis Testing in notes but not in timed checks."
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
          "id": "gen-science-prek-u1-external-supp-seq-12-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Living & Non-Living Things Checkpoint Quiz 12: Hypothesis Testing."
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
          "id": "gen-science-prek-u1-external-supp-seq-12-chunk-intro",
          "title": "Hypothesis Testing Intro",
          "content": "When we finish our experiments, we need to look at the results and think about what they mean. We can use the evidence we collected to help us support our conclusions. This means we can explain why we think something happened based on what we observed!\nContext recap: When we finish our experiments, we need to look at the results and think about what they mean. We can use the evidence we collected to help us support our conclusions. This means we can explain why we think something happened based on what we observed!",
          "kind": "concept"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-12-chunk-practice",
          "title": "Guided Practice",
          "content": "Now, let's practice explaining one of our results! We can use evidence from our experiment and some science words to help us describe what we found. This will make our explanations clearer and more interesting!\nContext recap: Now, let's practice explaining one of our results! We can use evidence from our experiment and some science words to help us describe what we found. This will make our explanations clearer and more interesting!\nWhy this matters: Guided Practice helps learners in General Science connect ideas from Living & Non-Living Things to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "practice"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-12-chunk-check",
          "title": "Common Pitfall Check",
          "content": "While we are testing our hypotheses, we need to be careful about making mistakes. One common error is not using enough evidence to support our conclusions. If we spot this mistake, we can correct it by going back to our results and finding the right evidence!\nContext recap: While we are testing our hypotheses, we need to be careful about making mistakes. One common error is not using enough evidence to support our conclusions. If we spot this mistake, we can correct it by going back to our results and finding the right evidence!",
          "kind": "analysis"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-12-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we learned about hypothesis testing! After that, think about one specific way you can improve your skills for next time. Setting a clear goal will help you become a better scientist!\nContext recap: Let's take a moment to review what we learned about hypothesis testing! After that, think about one specific way you can improve your skills for next time. Setting a clear goal will help you become a better scientist!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-12-card-1",
          "front": "What is hypothesis testing?",
          "back": "It is a key General Science idea in Living & Non-Living Things."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-12-card-2",
          "front": "How can I practice hypothesis testing?",
          "back": "Explain one result using evidence and science vocabulary."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-12-card-3",
          "front": "What should I review next?",
          "back": "Review hypothesis testing, then set one clear improvement target."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-12-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Living & Non-Living Things Checkpoint Quiz 12: Hypothesis Testing\" in \"General Science\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Living & Non-Living Things Checkpoint Quiz 12: Hypothesis Testing\" (General Science, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Living & Non-Living Things Checkpoint Quiz 12: Hypothesis Testing\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Living & Non-Living Things Checkpoint Quiz 12: Hypothesis Testing\" (General Science, grade band preK)."
      },
      "external": {
        "sourceLessonId": "gen-science-prek-u1-external-generated-cycle-12",
        "order": 12,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-prek-u1-external-supp-seq-13",
      "title": "Living & Non-Living Things Concept Walkthrough 13: Variable Control",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-13-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Living & Non-Living Things Concept Walkthrough 13: Variable Control."
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
          "id": "gen-science-prek-u1-external-supp-seq-13-chunk-intro",
          "title": "Variable Control Intro",
          "content": "To start our experiments, we need to make an observation and come up with a question that we can test. This question should be something we can explore and find answers to through our investigation!\nContext recap: To start our experiments, we need to make an observation and come up with a question that we can test. This question should be something we can explore and find answers to through our investigation!\nWhy this matters: Variable Control Intro helps learners in General Science connect ideas from Living & Non-Living Things to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "concept"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-13-chunk-practice",
          "title": "Guided Practice",
          "content": "Let's conduct a mini investigation together! We will run our experiment and write down what happens in a table. This will help us keep track of our results and see if our predictions were correct!\nContext recap: Let's conduct a mini investigation together! We will run our experiment and write down what happens in a table. This will help us keep track of our results and see if our predictions were correct!\nWhy this matters: Guided Practice helps learners in General Science connect ideas from Living & Non-Living Things to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "practice"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-13-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we work on controlling our variables, we need to be aware of common mistakes. One mistake is not keeping the same conditions for all parts of our experiment. If we notice this, we can fix it by checking our setup and making sure everything is consistent!\nContext recap: As we work on controlling our variables, we need to be aware of common mistakes. One mistake is not keeping the same conditions for all parts of our experiment. If we notice this, we can fix it by checking our setup and making sure everything is consistent!",
          "kind": "analysis"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-13-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review what we learned about controlling variables! After that, think about one clear way you can improve your skills for the next time we do an experiment. Setting a specific goal will help you become even better at conducting investigations!\nContext recap: Let's quickly review what we learned about controlling variables! After that, think about one clear way you can improve your skills for the next time we do an experiment. Setting a specific goal will help you become even better at conducting investigations!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-13-card-1",
          "front": "What is variable control?",
          "back": "It is a key General Science idea in Living & Non-Living Things."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-13-card-2",
          "front": "How can I practice variable control?",
          "back": "Run a mini investigation and record outcomes in a table."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-13-card-3",
          "front": "What should I review next?",
          "back": "Review variable control, then set one clear improvement target."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-13-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Living & Non-Living Things Concept Walkthrough 13: Variable Control\" in \"General Science\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Living & Non-Living Things Concept Walkthrough 13: Variable Control\" (General Science, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Living & Non-Living Things Concept Walkthrough 13: Variable Control\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Living & Non-Living Things Concept Walkthrough 13: Variable Control\" (General Science, grade band preK)."
      },
      "external": {
        "sourceLessonId": "gen-science-prek-u1-external-generated-cycle-13",
        "order": 13,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-prek-u1-external-supp-seq-14",
      "title": "Living & Non-Living Things Guided Practice Lab 14: Evidence Interpretation",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-14-ia1",
          "type": "drag_and_drop",
          "title": "Living & Non-Living Things Guided Practice Lab 14: Evidence Interpretation Learning Flow",
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
          "id": "gen-science-prek-u1-external-supp-seq-14-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Living & Non-Living Things Guided Practice Lab 14: Evidence Interpretation."
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
          "id": "gen-science-prek-u1-external-supp-seq-14-chunk-intro",
          "title": "Evidence Interpretation Intro",
          "content": "When we are doing experiments, it's important to change only one thing at a time. This helps us see how that one change affects what we are looking at. By keeping everything else the same, we can understand our results better!\nContext recap: When we are doing experiments, it's important to change only one thing at a time. This helps us see how that one change affects what we are looking at. By keeping everything else the same, we can understand our results better!",
          "kind": "concept"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-14-chunk-practice",
          "title": "Guided Practice",
          "content": "In our practice today, we will learn to find three types of variables in our experiments. The independent variable is what we change, the dependent variable is what we measure, and the control variables are the things we keep the same. Let's work together to identify these in our activities!\nContext recap: In our practice today, we will learn to find three types of variables in our experiments. The independent variable is what we change, the dependent variable is what we measure, and the control variables are the things we keep the same. Let's work together to identify these in our activities!",
          "kind": "practice"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-14-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we look at our evidence, we need to be careful of a common mistake. Sometimes, we might forget to check if we changed too many things at once. Let's practice finding this mistake and learn how to fix it by looking closely at our evidence!\nContext recap: As we look at our evidence, we need to be careful of a common mistake. Sometimes, we might forget to check if we changed too many things at once. Let's practice finding this mistake and learn how to fix it by looking closely at our evidence!",
          "kind": "analysis"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-14-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review what we learned about evidence interpretation. Remember, it's all about understanding what our results mean. After our review, think of one way we can improve our experiments next time. Setting a clear goal will help us do even better!\nContext recap: Let's quickly review what we learned about evidence interpretation. Remember, it's all about understanding what our results mean. After our review, think of one way we can improve our experiments next time. Setting a clear goal will help us do even better!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-14-card-1",
          "front": "What is evidence interpretation?",
          "back": "It is a key General Science idea in Living & Non-Living Things."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-14-card-2",
          "front": "How can I practice evidence interpretation?",
          "back": "Identify independent, dependent, and control variables."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-14-card-3",
          "front": "What should I review next?",
          "back": "Review evidence interpretation, then set one clear improvement target."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-14-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Living & Non-Living Things Guided Practice Lab 14: Evidence Interpretation\" in \"General Science\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Living & Non-Living Things Guided Practice Lab 14: Evidence Interpretation\" (General Science, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Living & Non-Living Things Guided Practice Lab 14: Evidence Interpretation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Living & Non-Living Things Guided Practice Lab 14: Evidence Interpretation\" (General Science, grade band preK)."
      },
      "external": {
        "sourceLessonId": "gen-science-prek-u1-external-generated-cycle-14",
        "order": 14,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-prek-u1-external-supp-seq-15",
      "title": "Living & Non-Living Things Checkpoint Quiz 15: Scientific Explanation",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-15-q1",
          "text": "Which option best summarizes Living & Non-Living Things Checkpoint Quiz 15: Scientific Explanation?",
          "skillId": "gen-science-prek-u1-external-skill-living-non-living-things-checkpoint-quiz-15-scientific-explanation-summary",
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
          "id": "gen-science-prek-u1-external-supp-seq-15-q2",
          "text": "Which response shows correct application of Living & Non-Living Things Checkpoint Quiz 15: Scientific Explanation?",
          "skillId": "gen-science-prek-u1-external-skill-living-non-living-things-checkpoint-quiz-15-scientific-explanation-apply",
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
          "id": "gen-science-prek-u1-external-supp-seq-15-q3",
          "text": "Why is review important after learning Living & Non-Living Things Checkpoint Quiz 15: Scientific Explanation?",
          "skillId": "gen-science-prek-u1-external-skill-living-non-living-things-checkpoint-quiz-15-scientific-explanation-review",
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
          "id": "gen-science-prek-u1-external-supp-seq-15-ia1",
          "type": "matching_pairs",
          "title": "Living & Non-Living Things Checkpoint Quiz 15: Scientific Explanation Error Match",
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
                "label": "I understand Living & Non-Living Things Checkpoint Quiz 15: Scientific Explanation in notes but not in timed checks."
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
          "id": "gen-science-prek-u1-external-supp-seq-15-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Living & Non-Living Things Checkpoint Quiz 15: Scientific Explanation."
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
          "id": "gen-science-prek-u1-external-supp-seq-15-chunk-intro",
          "title": "Scientific Explanation Intro",
          "content": "When we make conclusions from our experiments, we should always use the evidence we gathered. This means looking at our results and explaining how they support what we think. Let's practice using our evidence to back up our ideas!\nContext recap: When we make conclusions from our experiments, we should always use the evidence we gathered. This means looking at our results and explaining how they support what we think. Let's practice using our evidence to back up our ideas!",
          "kind": "concept"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-15-chunk-practice",
          "title": "Guided Practice",
          "content": "In this practice session, we will choose one of our results and explain it using the right science words. This will help us communicate our findings clearly. Let’s work together to use our evidence and vocabulary to explain what we discovered!\nContext recap: In this practice session, we will choose one of our results and explain it using the right science words. This will help us communicate our findings clearly. Let’s work together to use our evidence and vocabulary to explain what we discovered!",
          "kind": "practice"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-15-chunk-check",
          "title": "Common Pitfall Check",
          "content": "While we are explaining our scientific ideas, we need to be aware of a common mistake. Sometimes, we might not use enough evidence to support our explanations. Let’s practice finding this mistake and learn how to correct it by adding more evidence!\nContext recap: While we are explaining our scientific ideas, we need to be aware of a common mistake. Sometimes, we might not use enough evidence to support our explanations. Let’s practice finding this mistake and learn how to correct it by adding more evidence!",
          "kind": "analysis"
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-15-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to recap what we learned about scientific explanations. Remember, using evidence is key to supporting our ideas. After our recap, think of one specific way we can improve our explanations in the future. Setting a clear target will help us grow!\nContext recap: Let's take a moment to recap what we learned about scientific explanations. Remember, using evidence is key to supporting our ideas. After our recap, think of one specific way we can improve our explanations in the future. Setting a clear target will help us grow!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-prek-u1-external-supp-seq-15-card-1",
          "front": "What is scientific explanation?",
          "back": "It is a key General Science idea in Living & Non-Living Things."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-15-card-2",
          "front": "How can I practice scientific explanation?",
          "back": "Explain one result using evidence and science vocabulary."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-15-card-3",
          "front": "What should I review next?",
          "back": "Review scientific explanation, then set one clear improvement target."
        },
        {
          "id": "gen-science-prek-u1-external-supp-seq-15-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Living & Non-Living Things Checkpoint Quiz 15: Scientific Explanation\" in \"General Science\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Living & Non-Living Things Checkpoint Quiz 15: Scientific Explanation\" (General Science, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Living & Non-Living Things Checkpoint Quiz 15: Scientific Explanation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Living & Non-Living Things Checkpoint Quiz 15: Scientific Explanation\" (General Science, grade band preK)."
      },
      "external": {
        "sourceLessonId": "gen-science-prek-u1-external-generated-cycle-15",
        "order": 15,
        "generatedSupplement": true
      }
    }
  ]
};
