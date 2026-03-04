import type { LearningModule } from "@/lib/modules/types";

export const BasicMathPrekU1ExternalModule: LearningModule = {
  "id": "basic-math-prek-u1-external",
  "title": "Counting & Numbers 1–10",
  "description": "Mathematics unit for Pre-K imported from external JSX curriculum.",
  "subject": "Mathematics",
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
    "Explain Numbers Are Everywhere!.",
    "Explain Counting 1, 2, 3.",
    "Explain Counting 4 and 5.",
    "Explain 6, 7, 8, 9, 10!.",
    "Explain More, Fewer, Same.",
    "Explain Number Order 1–10.",
    "Build baseline confidence in Counting & Numbers 1–10.",
    "Apply one core Mathematics strategy for preK."
  ],
  "gradeBand": "preK",
  "metadata": {
    "source": "../External_AI_Agents/lesson_platform (1).jsx",
    "sourceUnitId": "basic-math-prek-u1",
    "sourceUnitIdCanonical": "basic-math-prek-u1",
    "sourceUnitIdRaw": "basic_math-prek-u1",
    "importedAt": "2026-02-25T02:03:30.456Z"
  },
  "external": {
    "unitOrder": 11,
    "estimatedHours": null,
    "prerequisites": []
  },
  "lessons": [
    {
      "id": "basic-math-prek-u1-1",
      "title": "Counting Objects 1–5 (PREK)",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "basic-math-prek-u1-1-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Counting Objects 1–5 (PREK)."
        }
      ],
      "objectives": [
        "Explain Numbers Are Everywhere!.",
        "Explain Counting 1, 2, 3.",
        "Explain Counting 4 and 5."
      ],
      "chunks": [
        {
          "id": "basic-math-prek-u1-1-chunk-1",
          "title": "Numbers Are Everywhere!",
          "content": "Numbers are like magic words that help us understand how many things we have! When we count, we say a number for each item we see. This is called one-to-one correspondence, which means that each number matches with one object. So, if you have three apples, you would say 'one' for the first apple, 'two' for the second apple, and 'three' for the last apple. Counting helps us keep track of everything around us!\nContext recap: Numbers are like magic words that help us understand how many things we have! When we count, we say a number for each item we see. This is called one-to-one correspondence, which means that each number matches with one object. So, if you have three apples, you would say 'one' for the first apple, 'two' for the second apple, and 'three' for the last apple."
        },
        {
          "id": "basic-math-prek-u1-1-chunk-2",
          "title": "Counting 1, 2, 3",
          "content": "Let’s learn to count from one to three! Here’s how it goes: 1 is ONE ⭐, 2 is TWO ⭐⭐, and 3 is THREE ⭐⭐⭐. As you count, point to each star and say the numbers out loud: one... two... three! This is a fun way to practice counting! You can also look around your room and count things like your toys, snacks, or even your fingers. Counting is everywhere!\nContext recap: Let’s learn to count from one to three! Here’s how it goes: 1 is ONE ⭐, 2 is TWO ⭐⭐, and 3 is THREE ⭐⭐⭐. As you count, point to each star and say the numbers out loud: one... two...\nWhy this matters: Counting 1, 2, 3 helps learners in Mathematics connect ideas from Counting & Numbers 1–10 to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "basic-math-prek-u1-1-chunk-3",
          "title": "Counting 4 and 5",
          "content": "Let's have fun counting to four and five together! When we say 4, we say FOUR, and we can show it with four apples: 🍎🍎🍎🍎. Now, when we count to 5, we say FIVE, and we can show it with five apples: 🍎🍎🍎🍎🍎. Isn't that exciting? Here’s a fun fact: the number FIVE is really special because it’s the same as the number of fingers on one hand! ✋ Can you hold up your hand and count your fingers with me? Let's do it together: 1, 2, 3, 4, 5! Counting like this helps us understand how numbers are all around us in our daily lives, just like our fingers! Keep practicing, and you'll be a counting expert in no time!"
        },
        {
          "id": "basic-math-prek-u1-1-chunk-4",
          "title": "Counting Rules",
          "content": "Let's learn some important rules that will help us count better! First, when you count, always touch each object as you say each number. This helps you keep track of what you have counted. Second, remember to say ONE number for each object you see. This means if you see three apples, you will say 'one' for the first apple, 'two' for the second apple, and 'three' for the third apple. Third, the last number you say tells you how many objects there are in total. So if you counted three apples, that means you have three apples altogether! Lastly, it’s a great idea to line up your objects in a row. This way, you can see them all clearly and you won’t miss any or accidentally count the same one twice. Following these counting rules will make your counting easier and a lot more fun! So let’s practice counting together!"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-1-card-1",
          "front": "1",
          "back": "ONE ⭐"
        },
        {
          "id": "basic-math-prek-u1-1-card-2",
          "front": "2",
          "back": "TWO ⭐⭐"
        },
        {
          "id": "basic-math-prek-u1-1-card-3",
          "front": "3",
          "back": "THREE ⭐⭐⭐"
        },
        {
          "id": "basic-math-prek-u1-1-card-4",
          "front": "4",
          "back": "FOUR 🍎🍎🍎🍎"
        },
        {
          "id": "basic-math-prek-u1-1-card-5",
          "front": "5",
          "back": "FIVE ✋ — one whole hand!"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Colorful animated world. A friendly counting character (a number-shaped robot) moves through a magical landscape counting objects — 1 sun, 2 birds, 3 flowers, 4 butterflies, 5 stars. Each object appears one by one as the number is spoken clearly. Big animated numerals 1-5 appear on screen. Very slow, deliberate pacing. Ages 3-5. Warm, cheerful colors. Duration: 60 seconds.",
        "seedanceAnimation": "Lottie animation: Objects appear one by one (stars) as a counter ticks 1-5. Each new star bounces in with a pop sound implied. The numeral grows larger with each count. Big, colorful, simple. 10-second animation.",
        "lessonImage": "Create a clean educational illustration for \"Counting Objects 1–5 (PREK)\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting Objects 1–5 (PREK)\" (Mathematics, grade band preK)."
      },
      "localized": {
        "title": {
          "en": "Counting Objects 1–5"
        },
        "concept": {
          "en": "Counting Objects 1–5"
        }
      },
      "external": {
        "sourceLessonId": "basic_math-prek-u1-1",
        "order": 1
      }
    },
    {
      "id": "basic-math-prek-u1-2",
      "title": "Numbers 6–10 & Comparing Quantities (PREK)",
      "type": "interactive",
      "duration": 15,
      "interactiveActivities": [
        {
          "id": "basic-math-prek-u1-2-ia1",
          "type": "drag_and_drop",
          "title": "Numbers 6–10 & Comparing Quantities (PREK) Learning Flow",
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
                "label": "Set a goal for Explain 6, 7, 8, 9, 10!..",
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
          "id": "basic-math-prek-u1-2-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Numbers 6–10 & Comparing Quantities (PREK)."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain 6, 7, 8, 9, 10!.",
          "Explain More, Fewer, Same.",
          "Explain Number Order 1–10."
        ]
      },
      "objectives": [
        "Explain 6, 7, 8, 9, 10!.",
        "Explain More, Fewer, Same.",
        "Explain Number Order 1–10."
      ],
      "chunks": [
        {
          "id": "basic-math-prek-u1-2-chunk-1",
          "title": "6, 7, 8, 9, 10!",
          "content": "Let’s learn to count from six to ten! Here we go: 6 is SIX 🎲🎲🎲🎲🎲🎲, 7 is SEVEN 🌈🌈🌈🌈🌈🌈🌈, 8 is EIGHT 🐙 (that’s like an octopus with 8 legs!), 9 is NINE 🍫🍫🍫🍫🍫🍫🍫🍫🍫, and 10 is TEN 🖐️🖐️ (that’s two whole hands!). Counting up to ten is exciting, and you can practice by counting items you see around you!\nContext recap: Let’s learn to count from six to ten! Here we go: 6 is SIX 🎲🎲🎲🎲🎲🎲, 7 is SEVEN 🌈🌈🌈🌈🌈🌈🌈, 8 is EIGHT 🐙 (that’s like an octopus with 8 legs!), 9 is NINE 🍫🍫🍫🍫🍫🍫🍫🍫🍫, and 10 is TEN 🖐️🖐️ (that’s two whole hands!). Counting up to ten is exciting, and you can practice by counting items you see around you!"
        },
        {
          "id": "basic-math-prek-u1-2-chunk-2",
          "title": "More, Fewer, Same",
          "content": "When we look at groups of things, we can use three important words to help us understand how many there are: MORE, FEWER, and SAME. Let's learn what each of these words means!\nMORE means that one group has a bigger amount than another. For example, if you have four apples 🍎🍎🍎🍎, that is MORE than just two apples 🍎🍎.\nFEWER means that one group has a smaller amount. So, if you have two apples 🍎🍎, that is FEWER than three apples 🍎🍎🍎.\nSAME means that both groups have equal amounts. For instance, if you have three apples 🍎🍎🍎 and your friend also has three apples 🍎🍎🍎, then you both have the SAME number of apples!\nTo compare groups, the best way is to count how many are in each group. The group with the bigger number has MORE! Counting helps us see which group has more, fewer, or the same number of items. Let's practice counting together!"
        },
        {
          "id": "basic-math-prek-u1-2-chunk-3",
          "title": "Number Order 1–10",
          "content": "The order of counting is always the same! We start with the number 1 and continue all the way to 10. Let's say it together: 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10! Each number we say is one more than the number before it. For example, when we say 6, we can think of it as being one more than 5. And when we say 7, we can remember that it is one more than 6. This pattern helps us see how numbers are connected and how they grow! Counting is like a fun adventure where each step takes us to the next number. So, let's keep practicing our counting together and explore the wonderful world of numbers!"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-2-card-1",
          "front": "6",
          "back": "SIX 🎲🎲🎲🎲🎲🎲"
        },
        {
          "id": "basic-math-prek-u1-2-card-2",
          "front": "7",
          "back": "SEVEN 🌈🌈🌈🌈🌈🌈🌈"
        },
        {
          "id": "basic-math-prek-u1-2-card-3",
          "front": "8",
          "back": "EIGHT — like an octopus with 8 legs! 🐙"
        },
        {
          "id": "basic-math-prek-u1-2-card-4",
          "front": "9",
          "back": "NINE 🍫🍫🍫🍫🍫🍫🍫🍫🍫"
        },
        {
          "id": "basic-math-prek-u1-2-card-5",
          "front": "10",
          "back": "TEN = both hands! 🖐️🖐️"
        },
        {
          "id": "basic-math-prek-u1-2-card-6",
          "front": "MORE means...",
          "back": "A larger amount — the bigger number"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Animated number parade — numbers 6-10 march across the screen like parade characters. Each has a personality: 6 juggles, 7 has a rainbow cape, 8 is shaped like a snowman. Comparing quantities shown as two bowls of fruit — child counts each, then 'more' or 'fewer' bounces onto screen. Joyful, kinetic energy. Ages 3-5. Duration: 55 seconds.",
        "seedanceAnimation": "Lottie animation: Two groups of dots appear side by side. First group grows larger (1-6 dots). Second stays at 4. 'MORE' or 'FEWER' label animates in with an arrow. Groups reset and repeat with new numbers. 12-second loop.",
        "lessonImage": "Create a clean educational illustration for \"Numbers 6–10 & Comparing Quantities (PREK)\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Numbers 6–10 & Comparing Quantities (PREK)\" (Mathematics, grade band preK)."
      },
      "localized": {
        "title": {
          "en": "Numbers 6–10 & Comparing Quantities"
        },
        "concept": {
          "en": "Numbers 6–10 & Comparing Quantities"
        }
      },
      "external": {
        "sourceLessonId": "basic_math-prek-u1-2",
        "order": 2
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-quiz",
      "title": "Counting & Numbers 1–10 Supplemental Check",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-prek-u1-external-supp-quiz-q1",
          "text": "Which option best summarizes Counting & Numbers 1–10 Supplemental Check?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-supplemental-check-summary",
          "options": [
            {
              "id": "a",
              "text": "Build baseline confidence in Counting & Numbers 1–10."
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
          "id": "basic-math-prek-u1-external-supp-quiz-q2",
          "text": "Which response shows correct application of Counting & Numbers 1–10 Supplemental Check?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-supplemental-check-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply one core Mathematics strategy for preK."
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
          "id": "basic-math-prek-u1-external-supp-quiz-q3",
          "text": "Why is review important after learning Counting & Numbers 1–10 Supplemental Check?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-supplemental-check-review",
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
          "id": "basic-math-prek-u1-external-supp-quiz-ia1",
          "type": "matching_pairs",
          "title": "Counting & Numbers 1–10 Supplemental Check Error Match",
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
                "label": "I still mix up Build baseline confidence in Counting & Numbers 1–10.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Counting & Numbers 1–10 Supplemental Check in notes but not in timed checks."
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
          "id": "basic-math-prek-u1-external-supp-quiz-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Counting & Numbers 1–10 Supplemental Check."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Build baseline confidence in Counting & Numbers 1–10.",
        "Apply one core Mathematics strategy for preK."
      ],
      "chunks": [
        {
          "id": "basic-math-prek-u1-external-supp-quiz-chunk-intro",
          "title": "Counting & Numbers 1–10 Supplemental Check Overview",
          "content": "Let's have some fun reinforcing what we've learned about counting and numbers from 1 to 10! This will help you remember the important concepts and make counting even easier.\nContext recap: Let's have some fun reinforcing what we've learned about counting and numbers from 1 to 10! This will help you remember the important concepts and make counting even easier.\nWhy this matters: Counting & Numbers 1–10 Supplemental Check Overview helps learners in Mathematics connect ideas from Counting & Numbers 1–10 to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-quiz-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly recap one key idea from our lesson today! Think about what you learned about counting. Now, what is one next step you can take to practice counting even more? Maybe you can count your toys or snacks!\nContext recap: Let's quickly recap one key idea from our lesson today! Think about what you learned about counting. Now, what is one next step you can take to practice counting even more? Maybe you can count your toys or snacks!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-quiz-card-1",
          "front": "What is one key idea in Counting & Numbers 1–10?",
          "back": "Build baseline confidence in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-quiz-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core Mathematics strategy for preK."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Supplemental Check\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Supplemental Check\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Supplemental Check\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Supplemental Check\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-supp-quiz",
        "order": 3,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-04",
      "title": "Counting & Numbers 1–10 Concept Walkthrough 4: Multi Step Strategy",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-04-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Counting & Numbers 1–10 Concept Walkthrough 4: Multi Step Strategy."
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
          "id": "basic-math-prek-u1-external-supp-seq-04-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "Before we solve a problem, it’s helpful to model it with a picture or a simple equation. This way, we can see what we need to do before we start solving. It makes everything clearer!\nContext recap: Before we solve a problem, it’s helpful to model it with a picture or a simple equation. This way, we can see what we need to do before we start solving. It makes everything clearer!\nWhy this matters: Multi Step Strategy Intro helps learners in Mathematics connect ideas from Counting & Numbers 1–10 to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-04-chunk-practice",
          "title": "Guided Practice",
          "content": "Let’s practice together! First, we will solve one problem together, and then you can try solving one on your own using the same pattern. This will help you feel confident in your counting skills!\nContext recap: Let’s practice together! First, we will solve one problem together, and then you can try solving one on your own using the same pattern. This will help you feel confident in your counting skills!\nWhy this matters: Guided Practice helps learners in Mathematics connect ideas from Counting & Numbers 1–10 to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-04-chunk-check",
          "title": "Common Pitfall Check",
          "content": "When we are using a multi-step strategy to solve problems, we need to be careful and look out for mistakes that can happen. One common mistake is forgetting to count all the steps. Let's find this mistake together and think about how we can fix it. By using evidence, like counting our fingers or drawing pictures, we can learn from our errors and become better at math! This practice will help us understand numbers even more!\nContext recap: When we are using a multi-step strategy to solve problems, we need to be careful and look out for mistakes that can happen. One common mistake is forgetting to count all the steps. Let's find this mistake together and think about how we can fix it. By using evidence, like counting our fingers or drawing pictures, we can learn from our errors and become better at math!",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-04-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to quickly review the multi-step strategy we learned. Remember, this strategy helps us solve problems by breaking them down into smaller steps. After our review, think about one specific area where you can improve your skills. Setting a clear goal will help you focus on what to practice next!\nContext recap: Let's take a moment to quickly review the multi-step strategy we learned. Remember, this strategy helps us solve problems by breaking them down into smaller steps. After our review, think about one specific area where you can improve your skills. Setting a clear goal will help you focus on what to practice next!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-04-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-04-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-04-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-04-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Concept Walkthrough 4: Multi Step Strategy\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Concept Walkthrough 4: Multi Step Strategy\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Concept Walkthrough 4: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Concept Walkthrough 4: Multi Step Strategy\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-4",
        "order": 4,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-05",
      "title": "Counting & Numbers 1–10 Guided Practice Lab 5: Error Check Routines",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-05-ia1",
          "type": "drag_and_drop",
          "title": "Counting & Numbers 1–10 Guided Practice Lab 5: Error Check Routines Learning Flow",
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
          "id": "basic-math-prek-u1-external-supp-seq-05-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Counting & Numbers 1–10 Guided Practice Lab 5: Error Check Routines."
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
          "id": "basic-math-prek-u1-external-supp-seq-05-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "In this section, we will talk about how to identify the operation we need to use for our math problems. An operation is like a special action we take, such as adding or subtracting. Can you explain why you think a certain operation fits the problem we are working on? This will help us understand our math better!\nContext recap: In this section, we will talk about how to identify the operation we need to use for our math problems. An operation is like a special action we take, such as adding or subtracting. Can you explain why you think a certain operation fits the problem we are working on? This will help us understand our math better!",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-05-chunk-practice",
          "title": "Guided Practice",
          "content": "Now, let's practice using a simple checklist to help us with our math problems. First, we will plan what we need to do. Next, we will solve the problem step by step. Finally, we will verify our answer to make sure it is correct. This checklist will guide us through our math journey!\nContext recap: Now, let's practice using a simple checklist to help us with our math problems. First, we will plan what we need to do. Next, we will solve the problem step by step. Finally, we will verify our answer to make sure it is correct.",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-05-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we apply our error-check routines, let's pay attention to one common mistake that can happen. If we notice this error, we will learn how to correct it by looking for evidence in our work. This way, we can become better at spotting and fixing our mistakes!\nContext recap: As we apply our error-check routines, let's pay attention to one common mistake that can happen. If we notice this error, we will learn how to correct it by looking for evidence in our work. This way, we can become better at spotting and fixing our mistakes!",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-05-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review the error-check routines we practiced. Remember, these routines help us find and fix mistakes in our work. After our review, think about one specific area where you can improve your skills. Setting a clear goal will help you focus on what to practice next!\nContext recap: Let's quickly review the error-check routines we practiced. Remember, these routines help us find and fix mistakes in our work. After our review, think about one specific area where you can improve your skills. Setting a clear goal will help you focus on what to practice next!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-05-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-05-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-05-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-05-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Guided Practice Lab 5: Error Check Routines\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Guided Practice Lab 5: Error Check Routines\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Guided Practice Lab 5: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Guided Practice Lab 5: Error Check Routines\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-5",
        "order": 5,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-06",
      "title": "Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-06-q1",
          "text": "Which option best summarizes Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-6-number-sense-summary",
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
          "id": "basic-math-prek-u1-external-supp-seq-06-q2",
          "text": "Which response shows correct application of Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-6-number-sense-apply",
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
          "id": "basic-math-prek-u1-external-supp-seq-06-q3",
          "text": "Why is review important after learning Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-6-number-sense-review",
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
          "id": "basic-math-prek-u1-external-supp-seq-06-ia1",
          "type": "matching_pairs",
          "title": "Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense Error Match",
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
                "label": "I understand Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense in notes but not in timed checks."
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
          "id": "basic-math-prek-u1-external-supp-seq-06-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense."
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
          "id": "basic-math-prek-u1-external-supp-seq-06-chunk-intro",
          "title": "Number Sense Intro",
          "content": "Before we finalize our answers, it's important to check a few things. We need to look at the units we are using, the signs in our equations, and whether our answers make sense. This step is called checking for reasonableness, and it helps us ensure that we are on the right track!\nContext recap: Before we finalize our answers, it's important to check a few things. We need to look at the units we are using, the signs in our equations, and whether our answers make sense. This step is called checking for reasonableness, and it helps us ensure that we are on the right track!",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-06-chunk-practice",
          "title": "Guided Practice",
          "content": "In this practice, we will compare two different strategies for solving a problem. After looking at both, we will choose the one that seems more reliable and effective. This will help us learn how to make smart choices in our math work!\nContext recap: In this practice, we will compare two different strategies for solving a problem. After looking at both, we will choose the one that seems more reliable and effective. This will help us learn how to make smart choices in our math work!",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-06-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we work on our number sense, let's be on the lookout for a common mistake that can occur. If we spot this error, we will learn how to correct it by providing evidence from our work. This practice will help us become more confident in our math skills!\nContext recap: As we work on our number sense, let's be on the lookout for a common mistake that can occur. If we spot this error, we will learn how to correct it by providing evidence from our work. This practice will help us become more confident in our math skills!",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-06-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we learned about number sense. Remember, number sense helps us understand and work with numbers better. After our review, think about one specific area where you can improve your skills. Setting a clear goal will help you focus on what to practice next!\nContext recap: Let's take a moment to review what we learned about number sense. Remember, number sense helps us understand and work with numbers better. After our review, think about one specific area where you can improve your skills. Setting a clear goal will help you focus on what to practice next!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-06-card-1",
          "front": "What is number sense?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-06-card-2",
          "front": "How can I practice number sense?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-06-card-3",
          "front": "What should I review next?",
          "back": "Review number sense, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-06-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Checkpoint Quiz 6: Number Sense\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-6",
        "order": 6,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-07",
      "title": "Counting & Numbers 1–10 Concept Walkthrough 7: Equation Setup",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-07-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Counting & Numbers 1–10 Concept Walkthrough 7: Equation Setup."
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
          "id": "basic-math-prek-u1-external-supp-seq-07-chunk-intro",
          "title": "Equation Setup Intro",
          "content": "Before we start solving a problem, it's helpful to model it using a visual or an equation. This means we can draw a picture or write down the math we need to do. Modeling helps us understand the problem better and makes it easier to find the solution!\nContext recap: Before we start solving a problem, it's helpful to model it using a visual or an equation. This means we can draw a picture or write down the math we need to do. Modeling helps us understand the problem better and makes it easier to find the solution!",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-07-chunk-practice",
          "title": "Guided Practice",
          "content": "In this guided practice, we will first solve one problem together as a group. Then, you will have the chance to solve a similar problem on your own. By following the same pattern, you will gain confidence in your ability to tackle these math challenges!\nContext recap: In this guided practice, we will first solve one problem together as a group. Then, you will have the chance to solve a similar problem on your own. By following the same pattern, you will gain confidence in your ability to tackle these math challenges!",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-07-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we set up our equations, let's keep an eye out for a common mistake that might happen. If we notice this error, we will learn how to correct it by looking for evidence in our work. This will help us become more skilled at setting up our equations correctly!\nContext recap: As we set up our equations, let's keep an eye out for a common mistake that might happen. If we notice this error, we will learn how to correct it by looking for evidence in our work. This will help us become more skilled at setting up our equations correctly!",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-07-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to quickly review how we set up equations. Remember, setting up an equation is like drawing a picture of what we want to find out. After we recap, think about one specific way you can improve your understanding of this process.\nContext recap: Let's take a moment to quickly review how we set up equations. Remember, setting up an equation is like drawing a picture of what we want to find out. After we recap, think about one specific way you can improve your understanding of this process.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-07-card-1",
          "front": "What is equation setup?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-07-card-2",
          "front": "How can I practice equation setup?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-07-card-3",
          "front": "What should I review next?",
          "back": "Review equation setup, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-07-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Concept Walkthrough 7: Equation Setup\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Concept Walkthrough 7: Equation Setup\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Concept Walkthrough 7: Equation Setup\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Concept Walkthrough 7: Equation Setup\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-7",
        "order": 7,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-08",
      "title": "Counting & Numbers 1–10 Guided Practice Lab 8: Fraction Reasoning",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-08-ia1",
          "type": "drag_and_drop",
          "title": "Counting & Numbers 1–10 Guided Practice Lab 8: Fraction Reasoning Learning Flow",
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
          "id": "basic-math-prek-u1-external-supp-seq-08-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Counting & Numbers 1–10 Guided Practice Lab 8: Fraction Reasoning."
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
          "id": "basic-math-prek-u1-external-supp-seq-08-chunk-intro",
          "title": "Fraction Reasoning Intro",
          "content": "In this section, we will talk about fractions! First, let's name the operation we will use. Can you think about why this operation is the best choice for working with fractions? Understanding this will help us solve problems better!\nContext recap: In this section, we will talk about fractions! First, let's name the operation we will use. Can you think about why this operation is the best choice for working with fractions? Understanding this will help us solve problems better!",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-08-chunk-practice",
          "title": "Guided Practice",
          "content": "Now, let's practice together! Use this short checklist: First, make a plan for how you will solve the problem. Next, solve it step by step. Finally, verify your answer to make sure it makes sense. This will help you become a great problem solver!\nContext recap: Now, let's practice together! Use this short checklist: First, make a plan for how you will solve the problem. Next, solve it step by step. Finally, verify your answer to make sure it makes sense.\nWhy this matters: Guided Practice helps learners in Mathematics connect ideas from Counting & Numbers 1–10 to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-08-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we work on fraction reasoning, be on the lookout for a common mistake that many people make. If you notice this error, think about how you can correct it and provide evidence to support your correction. This will help you learn and grow!\nContext recap: As we work on fraction reasoning, be on the lookout for a common mistake that many people make. If you notice this error, think about how you can correct it and provide evidence to support your correction. This will help you learn and grow!",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-08-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review what we learned about fraction reasoning. After our review, think of one clear goal for how you can improve your understanding of fractions. Setting a goal will help you focus on what to practice next!\nContext recap: Let's quickly review what we learned about fraction reasoning. After our review, think of one clear goal for how you can improve your understanding of fractions. Setting a goal will help you focus on what to practice next!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-08-card-1",
          "front": "What is fraction reasoning?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-08-card-2",
          "front": "How can I practice fraction reasoning?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-08-card-3",
          "front": "What should I review next?",
          "back": "Review fraction reasoning, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-08-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Guided Practice Lab 8: Fraction Reasoning\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Guided Practice Lab 8: Fraction Reasoning\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Guided Practice Lab 8: Fraction Reasoning\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Guided Practice Lab 8: Fraction Reasoning\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-8",
        "order": 8,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-09",
      "title": "Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-09-q1",
          "text": "Which option best summarizes Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-9-multi-step-strategy-summary",
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
          "id": "basic-math-prek-u1-external-supp-seq-09-q2",
          "text": "Which response shows correct application of Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-9-multi-step-strategy-apply",
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
          "id": "basic-math-prek-u1-external-supp-seq-09-q3",
          "text": "Why is review important after learning Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-9-multi-step-strategy-review",
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
          "id": "basic-math-prek-u1-external-supp-seq-09-ia1",
          "type": "matching_pairs",
          "title": "Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy Error Match",
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
                "label": "I understand Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy in notes but not in timed checks."
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
          "id": "basic-math-prek-u1-external-supp-seq-09-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy."
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
          "id": "basic-math-prek-u1-external-supp-seq-09-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "Before you finish your work, it's important to check your units, signs, and whether your answers make sense. This step is like giving your work a final look to make sure everything is correct and clear!\nContext recap: Before you finish your work, it's important to check your units, signs, and whether your answers make sense. This step is like giving your work a final look to make sure everything is correct and clear!\nWhy this matters: Multi Step Strategy Intro helps learners in Mathematics connect ideas from Counting & Numbers 1–10 to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-09-chunk-practice",
          "title": "Guided Practice",
          "content": "Let's compare two different strategies for solving a problem. Think about which one seems more reliable and why. Choosing the best strategy will help you solve problems more effectively!\nContext recap: Let's compare two different strategies for solving a problem. Think about which one seems more reliable and why. Choosing the best strategy will help you solve problems more effectively!\nWhy this matters: Guided Practice helps learners in Mathematics connect ideas from Counting & Numbers 1–10 to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-09-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you apply your multi-step strategy, keep an eye out for a common mistake that can happen. If you find this error, think about how you can fix it and use evidence to support your correction. This practice will help you improve!\nContext recap: As you apply your multi-step strategy, keep an eye out for a common mistake that can happen. If you find this error, think about how you can fix it and use evidence to support your correction. This practice will help you improve!",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-09-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's do a quick recap of the multi-step strategy we learned. After our review, think about one specific way you can improve your skills in using this strategy. Setting a target will help you focus on your learning!\nContext recap: Let's do a quick recap of the multi-step strategy we learned. After our review, think about one specific way you can improve your skills in using this strategy. Setting a target will help you focus on your learning!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-09-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-09-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-09-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-09-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Checkpoint Quiz 9: Multi Step Strategy\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-9",
        "order": 9,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-10",
      "title": "Counting & Numbers 1–10 Concept Walkthrough 10: Error Check Routines",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-10-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Counting & Numbers 1–10 Concept Walkthrough 10: Error Check Routines."
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
          "id": "basic-math-prek-u1-external-supp-seq-10-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "Before we solve a problem, it's helpful to model it using a visual or an equation. This step helps us see the problem clearly and understand what we need to do to find the answer!\nContext recap: Before we solve a problem, it's helpful to model it using a visual or an equation. This step helps us see the problem clearly and understand what we need to do to find the answer!\nWhy this matters: Error Check Routines Intro helps learners in Mathematics connect ideas from Counting & Numbers 1–10 to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-10-chunk-practice",
          "title": "Guided Practice",
          "content": "Let's solve one problem together, following the same pattern. After that, you will try solving another problem on your own using what we've practiced. This will help you gain confidence in your skills!\nContext recap: Let's solve one problem together, following the same pattern. After that, you will try solving another problem on your own using what we've practiced. This will help you gain confidence in your skills!\nWhy this matters: Guided Practice helps learners in Mathematics connect ideas from Counting & Numbers 1–10 to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-10-chunk-check",
          "title": "Common Pitfall Check",
          "content": "While you are using error-check routines, be aware of a common mistake that can occur. If you spot this error, think about how you can correct it and provide evidence to show your correction. This will help you learn and improve your problem-solving skills!\nContext recap: While you are using error-check routines, be aware of a common mistake that can occur. If you spot this error, think about how you can correct it and provide evidence to show your correction. This will help you learn and improve your problem-solving skills!",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-10-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to think about the ways we can check our work for mistakes. After reviewing how to spot errors, let's choose one specific goal to improve our counting skills. This will help us become even better at recognizing numbers and counting accurately!\nContext recap: Let's take a moment to think about the ways we can check our work for mistakes. After reviewing how to spot errors, let's choose one specific goal to improve our counting skills. This will help us become even better at recognizing numbers and counting accurately!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-10-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-10-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-10-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-10-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Concept Walkthrough 10: Error Check Routines\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Concept Walkthrough 10: Error Check Routines\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Concept Walkthrough 10: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Concept Walkthrough 10: Error Check Routines\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-10",
        "order": 10,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-11",
      "title": "Counting & Numbers 1–10 Guided Practice Lab 11: Number Sense",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-11-ia1",
          "type": "drag_and_drop",
          "title": "Counting & Numbers 1–10 Guided Practice Lab 11: Number Sense Learning Flow",
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
          "id": "basic-math-prek-u1-external-supp-seq-11-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Counting & Numbers 1–10 Guided Practice Lab 11: Number Sense."
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
          "id": "basic-math-prek-u1-external-supp-seq-11-chunk-intro",
          "title": "Number Sense Intro",
          "content": "In this section, we will talk about what it means to understand numbers better. Can you name the math operation we are using? Think about why this operation is the right choice for the numbers we are working with. Understanding this will help us become great mathematicians!\nContext recap: In this section, we will talk about what it means to understand numbers better. Can you name the math operation we are using? Think about why this operation is the right choice for the numbers we are working with. Understanding this will help us become great mathematicians!",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-11-chunk-practice",
          "title": "Guided Practice",
          "content": "Now, let's practice together! We will use a simple checklist to help us. First, we will plan what we need to do. Next, we will solve the problem step by step. Finally, we will check our work to make sure everything is correct. This will help us learn how to solve math problems more effectively!\nContext recap: Now, let's practice together! We will use a simple checklist to help us. First, we will plan what we need to do. Next, we will solve the problem step by step.\nWhy this matters: Guided Practice helps learners in Mathematics connect ideas from Counting & Numbers 1–10 to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-11-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we work on our number sense, it's important to be aware of common mistakes we might make. Let's look for one common error that can happen and think about how we can fix it. We will use examples to show how to correct this mistake, which will help us improve our understanding of numbers.\nContext recap: As we work on our number sense, it's important to be aware of common mistakes we might make. Let's look for one common error that can happen and think about how we can fix it. We will use examples to show how to correct this mistake, which will help us improve our understanding of numbers.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-11-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review what we learned about number sense today. After our review, we will set one clear goal for improvement. This will help us focus on becoming even better at understanding and using numbers in our everyday lives!\nContext recap: Let's quickly review what we learned about number sense today. After our review, we will set one clear goal for improvement. This will help us focus on becoming even better at understanding and using numbers in our everyday lives!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-11-card-1",
          "front": "What is number sense?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-11-card-2",
          "front": "How can I practice number sense?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-11-card-3",
          "front": "What should I review next?",
          "back": "Review number sense, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-11-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Guided Practice Lab 11: Number Sense\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Guided Practice Lab 11: Number Sense\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Guided Practice Lab 11: Number Sense\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Guided Practice Lab 11: Number Sense\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-11",
        "order": 11,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-12",
      "title": "Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-12-q1",
          "text": "Which option best summarizes Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-12-equation-setup-summary",
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
          "id": "basic-math-prek-u1-external-supp-seq-12-q2",
          "text": "Which response shows correct application of Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-12-equation-setup-apply",
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
          "id": "basic-math-prek-u1-external-supp-seq-12-q3",
          "text": "Why is review important after learning Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-12-equation-setup-review",
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
          "id": "basic-math-prek-u1-external-supp-seq-12-ia1",
          "type": "matching_pairs",
          "title": "Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup Error Match",
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
                "label": "I understand Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup in notes but not in timed checks."
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
          "id": "basic-math-prek-u1-external-supp-seq-12-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup."
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
          "id": "basic-math-prek-u1-external-supp-seq-12-chunk-intro",
          "title": "Equation Setup Intro",
          "content": "Before we finish our equations, it's important to check a few things. We need to look at the units we are using, make sure our signs are correct, and think about whether our answers make sense. This will help us create strong and accurate equations!\nContext recap: Before we finish our equations, it's important to check a few things. We need to look at the units we are using, make sure our signs are correct, and think about whether our answers make sense. This will help us create strong and accurate equations!",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-12-chunk-practice",
          "title": "Guided Practice",
          "content": "In this practice session, we will compare two different strategies for solving a problem. After looking at both methods, we will choose the one that seems more reliable. This will help us learn how to make good choices when solving math problems!\nContext recap: In this practice session, we will compare two different strategies for solving a problem. After looking at both methods, we will choose the one that seems more reliable. This will help us learn how to make good choices when solving math problems!",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-12-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we set up our equations, it's important to be on the lookout for common mistakes. Let's identify one common error that can occur and discuss how we can fix it using examples. This will help us become more confident in our equation setup skills!\nContext recap: As we set up our equations, it's important to be on the lookout for common mistakes. Let's identify one common error that can occur and discuss how we can fix it using examples. This will help us become more confident in our equation setup skills!",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-12-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we learned about setting up equations. After our recap, we will set one clear goal for improvement. This will guide us as we continue to practice our math skills!\nContext recap: Let's take a moment to review what we learned about setting up equations. After our recap, we will set one clear goal for improvement. This will guide us as we continue to practice our math skills!\nWhy this matters: Quick Recap helps learners in Mathematics connect ideas from Counting & Numbers 1–10 to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-12-card-1",
          "front": "What is equation setup?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-12-card-2",
          "front": "How can I practice equation setup?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-12-card-3",
          "front": "What should I review next?",
          "back": "Review equation setup, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-12-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Checkpoint Quiz 12: Equation Setup\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-12",
        "order": 12,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-13",
      "title": "Counting & Numbers 1–10 Concept Walkthrough 13: Fraction Reasoning",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-13-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Counting & Numbers 1–10 Concept Walkthrough 13: Fraction Reasoning."
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
          "id": "basic-math-prek-u1-external-supp-seq-13-chunk-intro",
          "title": "Fraction Reasoning Intro",
          "content": "Before we solve a problem involving fractions, it's helpful to create a visual or write an equation to model the situation. This will give us a clearer understanding of what we need to do. Let's practice this together!\nContext recap: Before we solve a problem involving fractions, it's helpful to create a visual or write an equation to model the situation. This will give us a clearer understanding of what we need to do. Let's practice this together!",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-13-chunk-practice",
          "title": "Guided Practice",
          "content": "In this guided practice, we will first solve one problem together, and then you will try solving another problem on your own using the same pattern. This will help reinforce what we've learned about fractions and how to work with them!\nContext recap: In this guided practice, we will first solve one problem together, and then you will try solving another problem on your own using the same pattern. This will help reinforce what we've learned about fractions and how to work with them!",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-13-chunk-check",
          "title": "Common Pitfall Check",
          "content": "While we work on understanding fractions, it's important to be aware of common mistakes that can happen. Let's identify one common error and discuss how we can correct it with examples. This will help us improve our fraction reasoning skills!\nContext recap: While we work on understanding fractions, it's important to be aware of common mistakes that can happen. Let's identify one common error and discuss how we can correct it with examples. This will help us improve our fraction reasoning skills!",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-13-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to think about what we learned about fractions. Remember, fractions are parts of a whole. Now, let's choose one thing we can work on to get even better at understanding fractions!\nContext recap: Let's take a moment to think about what we learned about fractions. Remember, fractions are parts of a whole. Now, let's choose one thing we can work on to get even better at understanding fractions!\nWhy this matters: Quick Recap helps learners in Mathematics connect ideas from Counting & Numbers 1–10 to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-13-card-1",
          "front": "What is fraction reasoning?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-13-card-2",
          "front": "How can I practice fraction reasoning?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-13-card-3",
          "front": "What should I review next?",
          "back": "Review fraction reasoning, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-13-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Concept Walkthrough 13: Fraction Reasoning\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Concept Walkthrough 13: Fraction Reasoning\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Concept Walkthrough 13: Fraction Reasoning\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Concept Walkthrough 13: Fraction Reasoning\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-13",
        "order": 13,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-14",
      "title": "Counting & Numbers 1–10 Guided Practice Lab 14: Multi Step Strategy",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-14-ia1",
          "type": "drag_and_drop",
          "title": "Counting & Numbers 1–10 Guided Practice Lab 14: Multi Step Strategy Learning Flow",
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
          "id": "basic-math-prek-u1-external-supp-seq-14-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Counting & Numbers 1–10 Guided Practice Lab 14: Multi Step Strategy."
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
          "id": "basic-math-prek-u1-external-supp-seq-14-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "In this activity, we will talk about the steps we need to take to solve a problem. First, we will name the operation we need to use, like adding or subtracting. Then, we will explain why this operation is the best choice for our problem. This will help us think clearly and solve it correctly!\nContext recap: In this activity, we will talk about the steps we need to take to solve a problem. First, we will name the operation we need to use, like adding or subtracting. Then, we will explain why this operation is the best choice for our problem. This will help us think clearly and solve it correctly!",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-14-chunk-practice",
          "title": "Guided Practice",
          "content": "Now, let's use a simple checklist to help us solve our problems step by step! First, we will make a plan about what we need to do. Next, we will solve the problem using our plan. Finally, we will check our answer to make sure it is correct. This way, we can be confident in our work!\nContext recap: Now, let's use a simple checklist to help us solve our problems step by step! First, we will make a plan about what we need to do. Next, we will solve the problem using our plan. Finally, we will check our answer to make sure it is correct.",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-14-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we practice our multi-step strategies, let's keep an eye out for a common mistake that can happen. If we notice this mistake, we will take a moment to correct it and show why our new answer is better. This will help us learn and improve our skills!\nContext recap: As we practice our multi-step strategies, let's keep an eye out for a common mistake that can happen. If we notice this mistake, we will take a moment to correct it and show why our new answer is better. This will help us learn and improve our skills!",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-14-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review what we learned about using multi-step strategies. Remember, these strategies help us break down problems into smaller parts. Now, let's think of one specific area where we can improve our skills even more!\nContext recap: Let's quickly review what we learned about using multi-step strategies. Remember, these strategies help us break down problems into smaller parts. Now, let's think of one specific area where we can improve our skills even more!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-14-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-14-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-14-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-14-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Guided Practice Lab 14: Multi Step Strategy\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Guided Practice Lab 14: Multi Step Strategy\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Guided Practice Lab 14: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Guided Practice Lab 14: Multi Step Strategy\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-14",
        "order": 14,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-prek-u1-external-supp-seq-15",
      "title": "Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-15-q1",
          "text": "Which option best summarizes Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-15-error-check-routines-summary",
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
          "id": "basic-math-prek-u1-external-supp-seq-15-q2",
          "text": "Which response shows correct application of Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-15-error-check-routines-apply",
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
          "id": "basic-math-prek-u1-external-supp-seq-15-q3",
          "text": "Why is review important after learning Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-prek-u1-external-skill-counting-numbers-1-10-checkpoint-quiz-15-error-check-routines-review",
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
          "id": "basic-math-prek-u1-external-supp-seq-15-ia1",
          "type": "matching_pairs",
          "title": "Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines Error Match",
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
                "label": "I understand Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines in notes but not in timed checks."
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
          "id": "basic-math-prek-u1-external-supp-seq-15-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines."
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
          "id": "basic-math-prek-u1-external-supp-seq-15-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "Before we finish our work, it's important to check our answers carefully. We will look at the units we used, make sure our signs are correct, and think about whether our answers make sense. This will help us be sure that we did our best work!\nContext recap: Before we finish our work, it's important to check our answers carefully. We will look at the units we used, make sure our signs are correct, and think about whether our answers make sense. This will help us be sure that we did our best work!",
          "kind": "concept"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-15-chunk-practice",
          "title": "Guided Practice",
          "content": "In this practice, we will compare two different ways to solve a problem. We will think about which method seems more reliable and easier to understand. This will help us choose the best strategy for solving similar problems in the future!\nContext recap: In this practice, we will compare two different ways to solve a problem. We will think about which method seems more reliable and easier to understand. This will help us choose the best strategy for solving similar problems in the future!",
          "kind": "practice"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-15-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we use our error-check routines, let's be on the lookout for a common mistake that can happen. If we find this mistake, we will correct it and explain why our new answer is better. This will help us learn from our errors and become better problem solvers!\nContext recap: As we use our error-check routines, let's be on the lookout for a common mistake that can happen. If we find this mistake, we will correct it and explain why our new answer is better. This will help us learn from our errors and become better problem solvers!",
          "kind": "analysis"
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-15-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review the error-check routines we practiced. These routines help us make sure our answers are correct. Now, let's think of one specific area where we can improve our checking skills to become even better at math!\nContext recap: Let's take a moment to review the error-check routines we practiced. These routines help us make sure our answers are correct. Now, let's think of one specific area where we can improve our checking skills to become even better at math!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-prek-u1-external-supp-seq-15-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Counting & Numbers 1–10."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-15-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-15-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-prek-u1-external-supp-seq-15-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines\" in \"Mathematics\" for grade band \"preK\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines\" (Mathematics, grade band preK).",
        "lessonImage": "Create a clean educational illustration for \"Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Counting & Numbers 1–10 Checkpoint Quiz 15: Error Check Routines\" (Mathematics, grade band preK)."
      },
      "external": {
        "sourceLessonId": "basic-math-prek-u1-external-generated-cycle-15",
        "order": 15,
        "generatedSupplement": true
      }
    }
  ]
};
