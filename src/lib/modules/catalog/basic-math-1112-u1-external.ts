import type { LearningModule } from "@/lib/modules/types";

export const BasicMath1112U1ExternalModule: LearningModule = {
  "id": "basic-math-1112-u1-external",
  "title": "Calculus: Limits, Derivatives & Integration",
  "description": "Mathematics unit for 11–12 imported from external JSX curriculum.",
  "subject": "Mathematics",
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
    "Explain What is a Limit?.",
    "Explain Evaluating Limits: Direct Substitution.",
    "Explain Factoring to Resolve Indeterminate Form.",
    "Build baseline confidence in Calculus: Limits, Derivatives & Integration.",
    "Apply one core Mathematics strategy for 1112.",
    "Explain multi-step strategy using age-appropriate vocabulary.",
    "Apply multi-step strategy in one guided Mathematics task.",
    "Identify one correction step for the next attempt."
  ],
  "gradeBand": "1112",
  "metadata": {
    "source": "../External_AI_Agents/lesson_platform (1).jsx",
    "sourceUnitId": "basic-math-1112-u1",
    "sourceUnitIdCanonical": "basic-math-1112-u1",
    "sourceUnitIdRaw": "basic_math-1112-u1",
    "importedAt": "2026-02-25T02:03:30.452Z"
  },
  "external": {
    "unitOrder": 10,
    "estimatedHours": null,
    "prerequisites": []
  },
  "lessons": [
    {
      "id": "basic-math-1112-u1-1",
      "title": "Introduction to Limits (1112)",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "basic-math-1112-u1-1-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Introduction to Limits (1112)."
        }
      ],
      "objectives": [
        "Explain What is a Limit?.",
        "Explain Evaluating Limits: Direct Substitution.",
        "Explain Factoring to Resolve Indeterminate Form."
      ],
      "chunks": [
        {
          "id": "basic-math-1112-u1-1-chunk-1",
          "title": "What is a Limit?",
          "content": "In mathematics, a limit is an important idea that helps us understand how a function behaves as we approach a particular input value. Think of it like this: when you have a function, you might want to find out what value it is getting closer to as you near a specific number. For instance, let's consider the function (x² − 4)/(x − 2) and examine what happens as x approaches 2. If we try to substitute 2 directly into the function, we run into a problem because it would mean dividing by zero, which is not allowed in mathematics. Instead, we can look at the values of the function as x gets closer and closer to 2 from both sides. As we do this, we notice that the function approaches the value 4. Therefore, we can conclude that the limit of this function as x approaches 2 is 4. We express this mathematically as lim[x→2] = 4. Understanding limits is crucial because they form the foundation for more advanced topics in calculus, such as derivatives and integrals, which help us analyze and understand changes in functions more deeply."
        },
        {
          "id": "basic-math-1112-u1-1-chunk-2",
          "title": "Evaluating Limits: Direct Substitution",
          "content": "When we study continuous functions, we often have a straightforward way to find limits by substituting the value directly into the function. This means that if we want to determine the limit of a function f(x) as x approaches a specific point c, we can simply replace x with c in the function. For instance, if we want to calculate lim[x→3] (2x + 1), we substitute 3 into the function. This gives us 2(3) + 1, which equals 7. However, it's important to note that this method doesn't always work perfectly. If substituting the value results in an indeterminate form like 0/0, we cannot use direct substitution. In such cases, we need to apply other techniques to find the limit. These techniques include factoring the expression, rationalizing it, or using L'Hôpital's Rule, which is a special method for dealing with limits that result in indeterminate forms. Understanding when and how to use these methods is crucial for mastering limits in calculus."
        },
        {
          "id": "basic-math-1112-u1-1-chunk-3",
          "title": "Factoring to Resolve Indeterminate Form",
          "content": "Let's consider the limit of the function (x² − 9)/(x − 3) as x approaches 3. If we try to substitute 3 directly, we get 0/0, which is an indeterminate form. To resolve this, we can factor the expression. The numerator can be factored as (x−3)(x+3), so we rewrite the limit as (x−3)(x+3)/(x−3). Now, we can cancel out the (x−3) terms, which simplifies our expression to just (x+3). After canceling, we can substitute 3 back into the simplified function, giving us 3 + 3 = 6. Therefore, we find that lim[x→3] (x² − 9)/(x − 3) equals 6. The important steps here are to factor, cancel, and then substitute."
        },
        {
          "id": "basic-math-1112-u1-1-chunk-4",
          "title": "One-Sided & Infinite Limits",
          "content": "In the fascinating world of calculus, we explore the concept of one-sided limits, which are essential for understanding how a function behaves as we get closer to a specific point from one direction. Let's break this down! The left-hand limit is represented as lim[x→c⁻] f(x). This notation indicates that we are approaching the point 'c' from the left side. On the other hand, the right-hand limit is shown as lim[x→c⁺] f(x), which means we are approaching 'c' from the right side. For a two-sided limit to exist, it's important that both the left-hand and right-hand limits are equal to each other. This ensures that the function behaves consistently from both directions. Additionally, we encounter infinite limits, such as lim[x→0] 1/x². In this case, as the denominator approaches zero, the value of the fraction increases without bound, leading to infinity. This phenomenon often results in vertical asymptotes on the graph of the function, where the graph dramatically rises or falls towards infinity, creating a striking visual representation of the function's behavior near that point."
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-1-card-1",
          "front": "Definition of a Limit",
          "back": "The value a function APPROACHES as x→c, not necessarily equals"
        },
        {
          "id": "basic-math-1112-u1-1-card-2",
          "front": "Evaluate: lim[x→5] (3x − 2)",
          "back": "Direct substitution: 3(5)−2 = 13"
        },
        {
          "id": "basic-math-1112-u1-1-card-3",
          "front": "Indeterminate form",
          "back": "0/0 form — need to factor/rationalize before evaluating"
        },
        {
          "id": "basic-math-1112-u1-1-card-4",
          "front": "Evaluate: lim[x→2] (x²−4)/(x−2)",
          "back": "Factor: (x−2)(x+2)/(x−2) = x+2 → 2+2 = 4"
        },
        {
          "id": "basic-math-1112-u1-1-card-5",
          "front": "Two-sided limit exists when...",
          "back": "Left-hand limit = Right-hand limit"
        },
        {
          "id": "basic-math-1112-u1-1-card-6",
          "front": "Vertical asymptote occurs when...",
          "back": "Function approaches ±∞ as x approaches a value"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Cinematic animated calculus lecture. A graph of f(x) = (x²−4)/(x−2) appears with a point missing at x=2. A glowing cursor moves along the curve from both sides, approaching x=2. The y-value approaches 4, shown numerically in real time. The concept of 'approaching but not reaching' visualized as a zoom into the graph. L'Hôpital's Rule briefly previewed. Sophisticated, university-level aesthetic. Ages 16-18. Duration: 90 seconds.",
        "seedanceAnimation": "Lottie animation: Graph with a 'hole' (open circle) at one point. Arrows approach from left and right along the curve, converging at the hole. Number above updates showing the limit value. 'lim = 4' appears with a glow effect. 14-second loop.",
        "lessonImage": "Create a clean educational illustration for \"Introduction to Limits (1112)\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Introduction to Limits (1112)\" (Mathematics, grade band 1112)."
      },
      "localized": {
        "title": {
          "en": "Introduction to Limits"
        },
        "concept": {
          "en": "Introduction to Limits"
        }
      },
      "external": {
        "sourceLessonId": "basic_math-1112-u1-1",
        "order": 1
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-interactive",
      "title": "Calculus: Limits, Derivatives & Integration Supplemental Practice",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-1112-u1-external-supp-interactive-ia1",
          "type": "drag_and_drop",
          "title": "Calculus: Limits, Derivatives & Integration Supplemental Practice Learning Flow",
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
                "label": "Set a goal for Build baseline confidence in Calculus: Limits, Derivatives & Integration..",
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
          "id": "basic-math-1112-u1-external-supp-interactive-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Calculus: Limits, Derivatives & Integration Supplemental Practice."
        }
      ],
      "metadata": {
        "prompts": [
          "Build baseline confidence in Calculus: Limits, Derivatives & Integration.",
          "Apply one core Mathematics strategy for 1112."
        ]
      },
      "objectives": [
        "Build baseline confidence in Calculus: Limits, Derivatives & Integration.",
        "Apply one core Mathematics strategy for 1112."
      ],
      "chunks": [
        {
          "id": "basic-math-1112-u1-external-supp-interactive-chunk-intro",
          "title": "Calculus: Limits, Derivatives & Integration Supplemental Practice Overview",
          "content": "In this section, we will focus on reinforcing the core concepts of mathematics related to calculus, specifically the topics of limits, derivatives, and integration. These foundational ideas are essential for understanding more complex mathematical principles and will help you build a strong base for your future studies in calculus.\nContext recap: In this section, we will focus on reinforcing the core concepts of mathematics related to calculus, specifically the topics of limits, derivatives, and integration. These foundational ideas are essential for understanding more complex mathematical principles and will help you build a strong base for your future studies in calculus.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-interactive-chunk-recap",
          "title": "Quick Recap",
          "content": "As we wrap up this section, let's summarize one key idea that we have learned about limits and how they help us understand the behavior of functions. After identifying this key concept, think about one next step you can take to further your understanding of calculus. This could involve practicing more problems, reviewing your notes, or discussing concepts with a classmate.\nContext recap: As we wrap up this section, let's summarize one key idea that we have learned about limits and how they help us understand the behavior of functions. After identifying this key concept, think about one next step you can take to further your understanding of calculus. This could involve practicing more problems, reviewing your notes, or discussing concepts with a classmate.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-interactive-card-1",
          "front": "What is one key idea in Calculus: Limits, Derivatives & Integration?",
          "back": "Build baseline confidence in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-interactive-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core Mathematics strategy for 1112."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Supplemental Practice\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Supplemental Practice\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Supplemental Practice\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Supplemental Practice\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-supp-interactive",
        "order": 2,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-quiz",
      "title": "Calculus: Limits, Derivatives & Integration Supplemental Check",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-1112-u1-external-supp-quiz-q1",
          "text": "Which option best summarizes Calculus: Limits, Derivatives & Integration Supplemental Check?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-supplemental-check-summary",
          "options": [
            {
              "id": "a",
              "text": "Build baseline confidence in Calculus: Limits, Derivatives & Integration."
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
          "id": "basic-math-1112-u1-external-supp-quiz-q2",
          "text": "Which response shows correct application of Calculus: Limits, Derivatives & Integration Supplemental Check?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-supplemental-check-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply one core Mathematics strategy for 1112."
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
          "id": "basic-math-1112-u1-external-supp-quiz-q3",
          "text": "Why is review important after learning Calculus: Limits, Derivatives & Integration Supplemental Check?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-supplemental-check-review",
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
          "id": "basic-math-1112-u1-external-supp-quiz-ia1",
          "type": "matching_pairs",
          "title": "Calculus: Limits, Derivatives & Integration Supplemental Check Error Match",
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
                "label": "I still mix up Build baseline confidence in Calculus: Limits, Derivatives & Integration.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Calculus: Limits, Derivatives & Integration Supplemental Check in notes but not in timed checks."
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
          "id": "basic-math-1112-u1-external-supp-quiz-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Calculus: Limits, Derivatives & Integration Supplemental Check."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Build baseline confidence in Calculus: Limits, Derivatives & Integration.",
        "Apply one core Mathematics strategy for 1112."
      ],
      "chunks": [
        {
          "id": "basic-math-1112-u1-external-supp-quiz-chunk-intro",
          "title": "Calculus: Limits, Derivatives & Integration Supplemental Check Overview",
          "content": "In this quiz section, we will reinforce the core concepts of mathematics that we have explored in calculus, focusing on limits, derivatives, and integration. This will help you assess your understanding and retention of these important topics.\nContext recap: In this quiz section, we will reinforce the core concepts of mathematics that we have explored in calculus, focusing on limits, derivatives, and integration. This will help you assess your understanding and retention of these important topics.\nWhy this matters: Calculus: Limits, Derivatives & Integration Supplemental Check Overview helps learners in Mathematics connect ideas from Calculus: Limits, Derivatives & Integration to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-quiz-chunk-recap",
          "title": "Quick Recap",
          "content": "As we conclude this quiz section, let's summarize one key idea that you have learned about calculus. After identifying this concept, think about one next step you can take to improve your understanding or skills in this area. This could involve additional practice, seeking help from a teacher, or collaborating with peers.\nContext recap: As we conclude this quiz section, let's summarize one key idea that you have learned about calculus. After identifying this concept, think about one next step you can take to improve your understanding or skills in this area. This could involve additional practice, seeking help from a teacher, or collaborating with peers.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-quiz-card-1",
          "front": "What is one key idea in Calculus: Limits, Derivatives & Integration?",
          "back": "Build baseline confidence in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-quiz-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core Mathematics strategy for 1112."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Supplemental Check\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Supplemental Check\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Supplemental Check\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Supplemental Check\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-supp-quiz",
        "order": 3,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-04",
      "title": "Calculus: Limits, Derivatives & Integration Concept Walkthrough 4: Multi Step Strategy",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-04-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Calculus: Limits, Derivatives & Integration Concept Walkthrough 4: Multi Step Strategy."
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
          "id": "basic-math-1112-u1-external-supp-seq-04-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "Before we dive into solving problems, it's important to model the problem using a visual representation or an equation. This helps us to clearly understand what we are trying to solve and sets a solid foundation for finding the solution.\nContext recap: Before we dive into solving problems, it's important to model the problem using a visual representation or an equation. This helps us to clearly understand what we are trying to solve and sets a solid foundation for finding the solution.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-04-chunk-practice",
          "title": "Guided Practice",
          "content": "In this guided practice, we will work through one example together, and then you will have the opportunity to solve a similar problem on your own. This approach will help you recognize the pattern and apply what you've learned effectively.\nContext recap: In this guided practice, we will work through one example together, and then you will have the opportunity to solve a similar problem on your own. This approach will help you recognize the pattern and apply what you've learned effectively.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-04-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you apply the multi-step strategy to solve problems, be aware of one common error that students often make. We will identify this mistake and discuss how to correct it using evidence from our calculations. This will help you avoid similar pitfalls in your own work.\nContext recap: As you apply the multi-step strategy to solve problems, be aware of one common error that students often make. We will identify this mistake and discuss how to correct it using evidence from our calculations. This will help you avoid similar pitfalls in your own work.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-04-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review the multi-step strategy we discussed. After this review, think about one clear target for improvement that you can focus on moving forward. Setting specific goals will help you enhance your skills in calculus.\nContext recap: Let's take a moment to review the multi-step strategy we discussed. After this review, think about one clear target for improvement that you can focus on moving forward. Setting specific goals will help you enhance your skills in calculus.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-04-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-04-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-04-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-04-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 4: Multi Step Strategy\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 4: Multi Step Strategy\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 4: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 4: Multi Step Strategy\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-4",
        "order": 4,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-05",
      "title": "Calculus: Limits, Derivatives & Integration Guided Practice Lab 5: Error Check Routines",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-05-ia1",
          "type": "drag_and_drop",
          "title": "Calculus: Limits, Derivatives & Integration Guided Practice Lab 5: Error Check Routines Learning Flow",
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
          "id": "basic-math-1112-u1-external-supp-seq-05-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Calculus: Limits, Derivatives & Integration Guided Practice Lab 5: Error Check Routines."
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
          "id": "basic-math-1112-u1-external-supp-seq-05-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "In this section, you will identify a specific mathematical operation and explain how it applies to the problem at hand. Understanding the operation is crucial because it helps us see how it fits into the larger context of our calculations and solutions.\nContext recap: In this section, you will identify a specific mathematical operation and explain how it applies to the problem at hand. Understanding the operation is crucial because it helps us see how it fits into the larger context of our calculations and solutions.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-05-chunk-practice",
          "title": "Guided Practice",
          "content": "As you work through the problems, use a simple checklist to guide your process. First, plan your approach to the problem. Next, solve it step by step. Finally, verify your solution to ensure it is correct and makes sense.\nContext recap: As you work through the problems, use a simple checklist to guide your process. First, plan your approach to the problem. Next, solve it step by step. Finally, verify your solution to ensure it is correct and makes sense.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-05-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work through the error-check routines, it's important to stay vigilant for a frequent mistake that many learners encounter. This mistake can lead to misunderstandings in your calculations. When you spot this error, take a moment to correct it thoughtfully. Make sure to explain your reasoning or provide evidence for your correction. This practice will not only help you fix the mistake but also deepen your comprehension of the concepts involved.\nContext recap: As you work through the error-check routines, it's important to stay vigilant for a frequent mistake that many learners encounter. This mistake can lead to misunderstandings in your calculations. When you spot this error, take a moment to correct it thoughtfully. Make sure to explain your reasoning or provide evidence for your correction.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-05-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review the error-check routines we have discussed. After this review, think about one specific area where you can improve your skills or understanding. Setting a clear improvement target will help you focus your efforts moving forward.\nContext recap: Let's take a moment to review the error-check routines we have discussed. After this review, think about one specific area where you can improve your skills or understanding. Setting a clear improvement target will help you focus your efforts moving forward.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-05-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-05-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-05-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-05-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 5: Error Check Routines\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 5: Error Check Routines\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 5: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 5: Error Check Routines\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-5",
        "order": 5,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-06",
      "title": "Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-06-q1",
          "text": "Which option best summarizes Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-6-number-sense-summary",
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
          "id": "basic-math-1112-u1-external-supp-seq-06-q2",
          "text": "Which response shows correct application of Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-6-number-sense-apply",
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
          "id": "basic-math-1112-u1-external-supp-seq-06-q3",
          "text": "Why is review important after learning Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-6-number-sense-review",
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
          "id": "basic-math-1112-u1-external-supp-seq-06-ia1",
          "type": "matching_pairs",
          "title": "Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense Error Match",
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
                "label": "I understand Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense in notes but not in timed checks."
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
          "id": "basic-math-1112-u1-external-supp-seq-06-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense."
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
          "id": "basic-math-1112-u1-external-supp-seq-06-chunk-intro",
          "title": "Number Sense Intro",
          "content": "Before you finalize your answers, it is important to check the units, signs, and overall reasonableness of your solutions. This step ensures that your results are not only mathematically correct but also make sense in the context of the problem.\nContext recap: Before you finalize your answers, it is important to check the units, signs, and overall reasonableness of your solutions. This step ensures that your results are not only mathematically correct but also make sense in the context of the problem.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-06-chunk-practice",
          "title": "Guided Practice",
          "content": "In this practice section, you will compare two different strategies for solving a problem. After evaluating both methods, choose the one that you believe is more reliable and effective for achieving the correct solution.\nContext recap: In this practice section, you will compare two different strategies for solving a problem. After evaluating both methods, choose the one that you believe is more reliable and effective for achieving the correct solution.\nWhy this matters: Guided Practice helps learners in Mathematics connect ideas from Calculus: Limits, Derivatives & Integration to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-06-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you apply your number sense skills, be vigilant for a common error that can occur. Once you spot this mistake, take the opportunity to correct it and support your correction with evidence or reasoning to strengthen your understanding.\nContext recap: As you apply your number sense skills, be vigilant for a common error that can occur. Once you spot this mistake, take the opportunity to correct it and support your correction with evidence or reasoning to strengthen your understanding.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-06-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review the key concepts related to number sense that we have covered. After this recap, think about one specific area where you can improve your understanding or skills. Setting a clear improvement target will help guide your future learning.\nContext recap: Let's quickly review the key concepts related to number sense that we have covered. After this recap, think about one specific area where you can improve your understanding or skills. Setting a clear improvement target will help guide your future learning.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-06-card-1",
          "front": "What is number sense?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-06-card-2",
          "front": "How can I practice number sense?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-06-card-3",
          "front": "What should I review next?",
          "back": "Review number sense, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-06-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 6: Number Sense\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-6",
        "order": 6,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-07",
      "title": "Calculus: Limits, Derivatives & Integration Concept Walkthrough 7: Equation Setup",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-07-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Calculus: Limits, Derivatives & Integration Concept Walkthrough 7: Equation Setup."
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
          "id": "basic-math-1112-u1-external-supp-seq-07-chunk-intro",
          "title": "Equation Setup Intro",
          "content": "Before you start solving a problem, it's helpful to model the situation using a visual representation or an equation. This step will provide a clearer understanding of the problem and help you organize your thoughts as you work towards a solution.\nContext recap: Before you start solving a problem, it's helpful to model the situation using a visual representation or an equation. This step will provide a clearer understanding of the problem and help you organize your thoughts as you work towards a solution.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-07-chunk-practice",
          "title": "Guided Practice",
          "content": "In this guided practice, you will first solve one example problem together with guidance. After that, you will tackle a similar problem on your own, using the same pattern you learned from the first example. This will help reinforce your understanding.\nContext recap: In this guided practice, you will first solve one example problem together with guidance. After that, you will tackle a similar problem on your own, using the same pattern you learned from the first example. This will help reinforce your understanding.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-07-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work on setting up equations, keep an eye out for a common error that students often make. Once you identify this mistake, take the time to correct it and provide evidence or reasoning for your correction to enhance your learning.\nContext recap: As you work on setting up equations, keep an eye out for a common error that students often make. Once you identify this mistake, take the time to correct it and provide evidence or reasoning for your correction to enhance your learning.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-07-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review the process of setting up equations that we have discussed. After this review, think about one specific area where you can improve your skills or understanding. Setting a clear improvement target will help you focus your efforts as you continue learning.\nContext recap: Let's take a moment to review the process of setting up equations that we have discussed. After this review, think about one specific area where you can improve your skills or understanding. Setting a clear improvement target will help you focus your efforts as you continue learning.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-07-card-1",
          "front": "What is equation setup?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-07-card-2",
          "front": "How can I practice equation setup?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-07-card-3",
          "front": "What should I review next?",
          "back": "Review equation setup, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-07-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 7: Equation Setup\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 7: Equation Setup\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 7: Equation Setup\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 7: Equation Setup\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-7",
        "order": 7,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-08",
      "title": "Calculus: Limits, Derivatives & Integration Guided Practice Lab 8: Fraction Reasoning",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-08-ia1",
          "type": "drag_and_drop",
          "title": "Calculus: Limits, Derivatives & Integration Guided Practice Lab 8: Fraction Reasoning Learning Flow",
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
          "id": "basic-math-1112-u1-external-supp-seq-08-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Calculus: Limits, Derivatives & Integration Guided Practice Lab 8: Fraction Reasoning."
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
          "id": "basic-math-1112-u1-external-supp-seq-08-chunk-intro",
          "title": "Fraction Reasoning Intro",
          "content": "In this section, we will identify the mathematical operation we are using and discuss why it is the appropriate choice for solving our problem. Understanding the reasoning behind our operations is crucial for mastering fractions.\nContext recap: In this section, we will identify the mathematical operation we are using and discuss why it is the appropriate choice for solving our problem. Understanding the reasoning behind our operations is crucial for mastering fractions.\nWhy this matters: Fraction Reasoning Intro helps learners in Mathematics connect ideas from Calculus: Limits, Derivatives & Integration to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-08-chunk-practice",
          "title": "Guided Practice",
          "content": "As you work through the problems, use a simple checklist to guide your process. First, plan your approach, then solve the problem step by step, and finally, verify your answer to ensure it makes sense.\nContext recap: As you work through the problems, use a simple checklist to guide your process. First, plan your approach, then solve the problem step by step, and finally, verify your answer to ensure it makes sense.\nWhy this matters: Guided Practice helps learners in Mathematics connect ideas from Calculus: Limits, Derivatives & Integration to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-08-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work through problems involving fractions, it's important to be aware of a frequent mistake that many students make. This mistake can lead to incorrect answers and misunderstandings about how fractions work. Once you spot this error, take a moment to think critically about how to fix it. Make sure to gather evidence or examples that clearly show why your correction is valid. This practice will help strengthen your understanding of fraction reasoning and improve your problem-solving skills.\nContext recap: As you work through problems involving fractions, it's important to be aware of a frequent mistake that many students make. This mistake can lead to incorrect answers and misunderstandings about how fractions work. Once you spot this error, take a moment to think critically about how to fix it. Make sure to gather evidence or examples that clearly show why your correction is valid.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-08-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we have learned about fraction reasoning. After this review, think about one specific area where you can improve your understanding or skills.\nContext recap: Let's take a moment to review what we have learned about fraction reasoning. After this review, think about one specific area where you can improve your understanding or skills.\nWhy this matters: Quick Recap helps learners in Mathematics connect ideas from Calculus: Limits, Derivatives & Integration to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-08-card-1",
          "front": "What is fraction reasoning?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-08-card-2",
          "front": "How can I practice fraction reasoning?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-08-card-3",
          "front": "What should I review next?",
          "back": "Review fraction reasoning, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-08-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 8: Fraction Reasoning\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 8: Fraction Reasoning\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 8: Fraction Reasoning\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 8: Fraction Reasoning\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-8",
        "order": 8,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-09",
      "title": "Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-09-q1",
          "text": "Which option best summarizes Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-9-multi-step-strategy-summary",
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
          "id": "basic-math-1112-u1-external-supp-seq-09-q2",
          "text": "Which response shows correct application of Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-9-multi-step-strategy-apply",
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
          "id": "basic-math-1112-u1-external-supp-seq-09-q3",
          "text": "Why is review important after learning Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-9-multi-step-strategy-review",
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
          "id": "basic-math-1112-u1-external-supp-seq-09-ia1",
          "type": "matching_pairs",
          "title": "Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy Error Match",
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
                "label": "I understand Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy in notes but not in timed checks."
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
          "id": "basic-math-1112-u1-external-supp-seq-09-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy."
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
          "id": "basic-math-1112-u1-external-supp-seq-09-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "Before you finalize your answers, make sure to check the units you are using, the signs of your numbers, and whether your results seem reasonable. This step is essential for ensuring accuracy in your calculations.\nContext recap: Before you finalize your answers, make sure to check the units you are using, the signs of your numbers, and whether your results seem reasonable. This step is essential for ensuring accuracy in your calculations.\nWhy this matters: Multi Step Strategy Intro helps learners in Mathematics connect ideas from Calculus: Limits, Derivatives & Integration to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-09-chunk-practice",
          "title": "Guided Practice",
          "content": "In this practice section, you will compare two different strategies for solving a problem. After evaluating both methods, choose the one that you believe is more reliable and effective.\nContext recap: In this practice section, you will compare two different strategies for solving a problem. After evaluating both methods, choose the one that you believe is more reliable and effective.\nWhy this matters: Guided Practice helps learners in Mathematics connect ideas from Calculus: Limits, Derivatives & Integration to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-09-chunk-check",
          "title": "Common Pitfall Check",
          "content": "When you use the multi-step strategy in your calculations, it's important to stay alert for a common mistake that many students make. This error can lead to incorrect answers, so it's crucial to identify it. Once you find this mistake, take a moment to correct it carefully. Make sure to provide clear evidence or reasoning that supports your correction, as this will help reinforce your understanding of the concept and ensure you grasp the material thoroughly.\nContext recap: When you use the multi-step strategy in your calculations, it's important to stay alert for a common mistake that many students make. This error can lead to incorrect answers, so it's crucial to identify it. Once you find this mistake, take a moment to correct it carefully. Make sure to provide clear evidence or reasoning that supports your correction, as this will help reinforce your understanding of the concept and ensure you grasp the material thoroughly.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-09-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review the multi-step strategy we discussed. After this recap, think about one specific improvement target that you can focus on to enhance your skills.\nContext recap: Let's quickly review the multi-step strategy we discussed. After this recap, think about one specific improvement target that you can focus on to enhance your skills.\nWhy this matters: Quick Recap helps learners in Mathematics connect ideas from Calculus: Limits, Derivatives & Integration to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-09-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-09-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-09-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-09-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 9: Multi Step Strategy\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-9",
        "order": 9,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-10",
      "title": "Calculus: Limits, Derivatives & Integration Concept Walkthrough 10: Error Check Routines",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-10-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Calculus: Limits, Derivatives & Integration Concept Walkthrough 10: Error Check Routines."
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
          "id": "basic-math-1112-u1-external-supp-seq-10-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "Before you start solving a problem, it's helpful to model it using a visual representation or an equation. This approach can provide clarity and guide you through the solution process.\nContext recap: Before you start solving a problem, it's helpful to model it using a visual representation or an equation. This approach can provide clarity and guide you through the solution process.\nWhy this matters: Error Check Routines Intro helps learners in Mathematics connect ideas from Calculus: Limits, Derivatives & Integration to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-10-chunk-practice",
          "title": "Guided Practice",
          "content": "In this guided practice session, we will start by working through one problem as a group. This collaborative approach will help you understand the steps involved. Once we finish that, you will have the opportunity to solve a similar problem independently, applying the same pattern we just discussed. This will allow you to practice and reinforce your understanding of the concepts we've covered.\nContext recap: In this guided practice session, we will start by working through one problem as a group. This collaborative approach will help you understand the steps involved. Once we finish that, you will have the opportunity to solve a similar problem independently, applying the same pattern we just discussed. This will allow you to practice and reinforce your understanding of the concepts we've covered.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-10-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work through the error-check routines, it's important to stay alert for a frequent mistake that many students encounter. This mistake can lead to incorrect conclusions if not addressed. Once you spot this error, take the time to correct it carefully. Additionally, make sure to provide clear evidence or reasoning that supports your correction. This practice not only helps reinforce your understanding but also strengthens your problem-solving skills.\nContext recap: As you work through the error-check routines, it's important to stay alert for a frequent mistake that many students encounter. This mistake can lead to incorrect conclusions if not addressed. Once you spot this error, take the time to correct it carefully. Additionally, make sure to provide clear evidence or reasoning that supports your correction.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-10-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review the error-check routines we have learned. After this review, think about one clear target for improvement that you can work on moving forward.\nContext recap: Let's take a moment to review the error-check routines we have learned. After this review, think about one clear target for improvement that you can work on moving forward.\nWhy this matters: Quick Recap helps learners in Mathematics connect ideas from Calculus: Limits, Derivatives & Integration to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-10-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-10-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-10-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-10-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 10: Error Check Routines\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 10: Error Check Routines\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 10: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 10: Error Check Routines\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-10",
        "order": 10,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-11",
      "title": "Calculus: Limits, Derivatives & Integration Guided Practice Lab 11: Number Sense",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-11-ia1",
          "type": "drag_and_drop",
          "title": "Calculus: Limits, Derivatives & Integration Guided Practice Lab 11: Number Sense Learning Flow",
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
          "id": "basic-math-1112-u1-external-supp-seq-11-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Calculus: Limits, Derivatives & Integration Guided Practice Lab 11: Number Sense."
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
          "id": "basic-math-1112-u1-external-supp-seq-11-chunk-intro",
          "title": "Number Sense Intro",
          "content": "In this section, you will identify a specific mathematical operation and explain how it applies to the problem at hand. Understanding the operation is crucial because it helps you to see how it fits into the larger context of the math you are learning.\nContext recap: In this section, you will identify a specific mathematical operation and explain how it applies to the problem at hand. Understanding the operation is crucial because it helps you to see how it fits into the larger context of the math you are learning.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-11-chunk-practice",
          "title": "Guided Practice",
          "content": "As you work through the problems, use a simple checklist to guide your process. First, make a plan for how you will approach the problem. Next, solve the problem step by step. Finally, verify your solution to ensure it is correct and makes sense.\nContext recap: As you work through the problems, use a simple checklist to guide your process. First, make a plan for how you will approach the problem. Next, solve the problem step by step. Finally, verify your solution to ensure it is correct and makes sense.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-11-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work through problems that involve number sense, it's important to be aware of a frequent error that many students encounter. This mistake can lead to misunderstandings in calculations or interpretations. When you spot this error, take a moment to think critically about it. Provide clear evidence or reasoning that explains why this mistake occurred and how to fix it. This practice will not only help you correct the error but also deepen your understanding of the concepts involved.\nContext recap: As you work through problems that involve number sense, it's important to be aware of a frequent error that many students encounter. This mistake can lead to misunderstandings in calculations or interpretations. When you spot this error, take a moment to think critically about it. Provide clear evidence or reasoning that explains why this mistake occurred and how to fix it.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-11-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we have learned about number sense. After the review, think about one specific area where you can improve your understanding or skills moving forward.\nContext recap: Let's take a moment to review what we have learned about number sense. After the review, think about one specific area where you can improve your understanding or skills moving forward.\nWhy this matters: Quick Recap helps learners in Mathematics connect ideas from Calculus: Limits, Derivatives & Integration to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-11-card-1",
          "front": "What is number sense?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-11-card-2",
          "front": "How can I practice number sense?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-11-card-3",
          "front": "What should I review next?",
          "back": "Review number sense, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-11-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 11: Number Sense\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 11: Number Sense\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 11: Number Sense\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 11: Number Sense\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-11",
        "order": 11,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-12",
      "title": "Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-12-q1",
          "text": "Which option best summarizes Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-12-equation-setup-summary",
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
          "id": "basic-math-1112-u1-external-supp-seq-12-q2",
          "text": "Which response shows correct application of Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-12-equation-setup-apply",
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
          "id": "basic-math-1112-u1-external-supp-seq-12-q3",
          "text": "Why is review important after learning Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-12-equation-setup-review",
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
          "id": "basic-math-1112-u1-external-supp-seq-12-ia1",
          "type": "matching_pairs",
          "title": "Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup Error Match",
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
                "label": "I understand Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup in notes but not in timed checks."
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
          "id": "basic-math-1112-u1-external-supp-seq-12-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup."
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
          "id": "basic-math-1112-u1-external-supp-seq-12-chunk-intro",
          "title": "Equation Setup Intro",
          "content": "Before you finalize your equations, it's important to check your units, signs, and the overall reasonableness of your answers. This step ensures that your work is accurate and that your conclusions are valid.\nContext recap: Before you finalize your equations, it's important to check your units, signs, and the overall reasonableness of your answers. This step ensures that your work is accurate and that your conclusions are valid.\nWhy this matters: Equation Setup Intro helps learners in Mathematics connect ideas from Calculus: Limits, Derivatives & Integration to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-12-chunk-practice",
          "title": "Guided Practice",
          "content": "In this practice section, you will compare two different strategies for solving a problem. After evaluating both methods, choose the one that you believe is more reliable and effective for reaching the correct solution.\nContext recap: In this practice section, you will compare two different strategies for solving a problem. After evaluating both methods, choose the one that you believe is more reliable and effective for reaching the correct solution.\nWhy this matters: Guided Practice helps learners in Mathematics connect ideas from Calculus: Limits, Derivatives & Integration to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-12-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you engage in the process of setting up your equations, it's important to stay vigilant for a frequent mistake that many learners encounter. This error can lead to incorrect results, so once you identify it, make sure to take a moment to correct it. Additionally, provide clear evidence or reasoning that supports your correction. This practice will not only help you understand the material better but also strengthen your problem-solving skills.\nContext recap: As you engage in the process of setting up your equations, it's important to stay vigilant for a frequent mistake that many learners encounter. This error can lead to incorrect results, so once you identify it, make sure to take a moment to correct it. Additionally, provide clear evidence or reasoning that supports your correction. This practice will not only help you understand the material better but also strengthen your problem-solving skills.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-12-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review what we have learned about setting up equations. After the recap, think about one specific target for improvement that you can focus on in your future work.\nContext recap: Let's quickly review what we have learned about setting up equations. After the recap, think about one specific target for improvement that you can focus on in your future work.\nWhy this matters: Quick Recap helps learners in Mathematics connect ideas from Calculus: Limits, Derivatives & Integration to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-12-card-1",
          "front": "What is equation setup?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-12-card-2",
          "front": "How can I practice equation setup?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-12-card-3",
          "front": "What should I review next?",
          "back": "Review equation setup, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-12-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 12: Equation Setup\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-12",
        "order": 12,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-13",
      "title": "Calculus: Limits, Derivatives & Integration Concept Walkthrough 13: Fraction Reasoning",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-13-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Calculus: Limits, Derivatives & Integration Concept Walkthrough 13: Fraction Reasoning."
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
          "id": "basic-math-1112-u1-external-supp-seq-13-chunk-intro",
          "title": "Fraction Reasoning Intro",
          "content": "Before you start solving a problem involving fractions, it's helpful to model the situation using a visual representation or an equation. This approach can make it easier to understand the problem and find the solution.\nContext recap: Before you start solving a problem involving fractions, it's helpful to model the situation using a visual representation or an equation. This approach can make it easier to understand the problem and find the solution.\nWhy this matters: Fraction Reasoning Intro helps learners in Mathematics connect ideas from Calculus: Limits, Derivatives & Integration to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-13-chunk-practice",
          "title": "Guided Practice",
          "content": "In this guided practice, you will first solve one problem together with guidance. After that, try to solve a similar problem on your own using the same pattern. This will help reinforce your understanding.\nContext recap: In this guided practice, you will first solve one problem together with guidance. After that, try to solve a similar problem on your own using the same pattern. This will help reinforce your understanding.\nWhy this matters: Guided Practice helps learners in Mathematics connect ideas from Calculus: Limits, Derivatives & Integration to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-13-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work through problems involving fractions, it's important to be aware of a frequent mistake that many students make. This error can lead to incorrect answers, so it's crucial to spot it early. Once you recognize this mistake, take a moment to correct it. Be sure to explain your reasoning clearly and provide evidence that supports your correction. This practice will help strengthen your understanding of fraction reasoning and improve your overall math skills.\nContext recap: As you work through problems involving fractions, it's important to be aware of a frequent mistake that many students make. This error can lead to incorrect answers, so it's crucial to spot it early. Once you recognize this mistake, take a moment to correct it. Be sure to explain your reasoning clearly and provide evidence that supports your correction.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-13-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review the key concepts related to fraction reasoning. After the review, think about one specific area where you would like to improve your skills in this topic.\nContext recap: Let's take a moment to review the key concepts related to fraction reasoning. After the review, think about one specific area where you would like to improve your skills in this topic.\nWhy this matters: Quick Recap helps learners in Mathematics connect ideas from Calculus: Limits, Derivatives & Integration to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-13-card-1",
          "front": "What is fraction reasoning?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-13-card-2",
          "front": "How can I practice fraction reasoning?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-13-card-3",
          "front": "What should I review next?",
          "back": "Review fraction reasoning, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-13-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 13: Fraction Reasoning\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 13: Fraction Reasoning\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 13: Fraction Reasoning\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Concept Walkthrough 13: Fraction Reasoning\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-13",
        "order": 13,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-14",
      "title": "Calculus: Limits, Derivatives & Integration Guided Practice Lab 14: Multi Step Strategy",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-14-ia1",
          "type": "drag_and_drop",
          "title": "Calculus: Limits, Derivatives & Integration Guided Practice Lab 14: Multi Step Strategy Learning Flow",
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
          "id": "basic-math-1112-u1-external-supp-seq-14-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Calculus: Limits, Derivatives & Integration Guided Practice Lab 14: Multi Step Strategy."
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
          "id": "basic-math-1112-u1-external-supp-seq-14-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "In this section, we will identify the specific mathematical operation we are using and discuss why it is the most suitable choice for solving the problem at hand. Understanding the reasoning behind our operations is crucial for developing strong problem-solving skills in calculus.\nContext recap: In this section, we will identify the specific mathematical operation we are using and discuss why it is the most suitable choice for solving the problem at hand. Understanding the reasoning behind our operations is crucial for developing strong problem-solving skills in calculus.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-14-chunk-practice",
          "title": "Guided Practice",
          "content": "To effectively tackle the problems in this lab, we will use a simple checklist that includes three important steps: first, we will plan our approach; next, we will solve the problem using our chosen method; and finally, we will verify our solution to ensure it is correct. This structured approach will help us stay organized and focused.\nContext recap: To effectively tackle the problems in this lab, we will use a simple checklist that includes three important steps: first, we will plan our approach; next, we will solve the problem using our chosen method; and finally, we will verify our solution to ensure it is correct. This structured approach will help us stay organized and focused.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-14-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we apply our multi-step strategy, it is important to be aware of a common mistake that many students make. We will identify this error and learn how to correct it by providing clear evidence from our calculations. This practice will enhance our understanding and help us avoid similar mistakes in the future.\nContext recap: As we apply our multi-step strategy, it is important to be aware of a common mistake that many students make. We will identify this error and learn how to correct it by providing clear evidence from our calculations. This practice will enhance our understanding and help us avoid similar mistakes in the future.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-14-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review the multi-step strategy we have learned. After our review, each of you should set a specific goal for improvement based on what you have learned. This will help you focus on areas where you can grow and enhance your skills in calculus.\nContext recap: Let's take a moment to review the multi-step strategy we have learned. After our review, each of you should set a specific goal for improvement based on what you have learned. This will help you focus on areas where you can grow and enhance your skills in calculus.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-14-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-14-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-14-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-14-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 14: Multi Step Strategy\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 14: Multi Step Strategy\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 14: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Guided Practice Lab 14: Multi Step Strategy\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-14",
        "order": 14,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-1112-u1-external-supp-seq-15",
      "title": "Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-15-q1",
          "text": "Which option best summarizes Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-15-error-check-routines-summary",
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
          "id": "basic-math-1112-u1-external-supp-seq-15-q2",
          "text": "Which response shows correct application of Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-15-error-check-routines-apply",
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
          "id": "basic-math-1112-u1-external-supp-seq-15-q3",
          "text": "Why is review important after learning Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-1112-u1-external-skill-calculus-limits-derivatives-integration-checkpoint-quiz-15-error-check-routines-review",
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
          "id": "basic-math-1112-u1-external-supp-seq-15-ia1",
          "type": "matching_pairs",
          "title": "Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines Error Match",
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
                "label": "I understand Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines in notes but not in timed checks."
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
          "id": "basic-math-1112-u1-external-supp-seq-15-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines."
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
          "id": "basic-math-1112-u1-external-supp-seq-15-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "Before finalizing your answers, it is essential to check several important aspects: the units of measurement, the signs of your calculations, and the overall reasonableness of your results. This careful checking process will help ensure that your final answers are accurate and reliable.\nContext recap: Before finalizing your answers, it is essential to check several important aspects: the units of measurement, the signs of your calculations, and the overall reasonableness of your results. This careful checking process will help ensure that your final answers are accurate and reliable.",
          "kind": "concept"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-15-chunk-practice",
          "title": "Guided Practice",
          "content": "In this practice session, we will compare two different strategies for solving a problem. After analyzing both methods, you will choose the one that you believe is more reliable. This exercise will help you develop critical thinking skills and improve your decision-making in mathematics.\nContext recap: In this practice session, we will compare two different strategies for solving a problem. After analyzing both methods, you will choose the one that you believe is more reliable. This exercise will help you develop critical thinking skills and improve your decision-making in mathematics.",
          "kind": "practice"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-15-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we implement our error-check routines, be on the lookout for a common mistake that can occur. Once you identify this error, you will learn how to correct it by providing evidence from your work. This practice will strengthen your understanding and help you avoid pitfalls in your calculations.\nContext recap: As we implement our error-check routines, be on the lookout for a common mistake that can occur. Once you identify this error, you will learn how to correct it by providing evidence from your work. This practice will strengthen your understanding and help you avoid pitfalls in your calculations.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-15-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review the error-check routines we have discussed. After this review, I encourage each of you to set a clear target for improvement based on what you have learned. This will guide your future practice and help you become more proficient in calculus.\nContext recap: Let's quickly review the error-check routines we have discussed. After this review, I encourage each of you to set a clear target for improvement based on what you have learned. This will guide your future practice and help you become more proficient in calculus.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-1112-u1-external-supp-seq-15-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Calculus: Limits, Derivatives & Integration."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-15-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-15-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-1112-u1-external-supp-seq-15-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines\" in \"Mathematics\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines\" (Mathematics, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Calculus: Limits, Derivatives & Integration Checkpoint Quiz 15: Error Check Routines\" (Mathematics, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "basic-math-1112-u1-external-generated-cycle-15",
        "order": 15,
        "generatedSupplement": true
      }
    }
  ]
};
