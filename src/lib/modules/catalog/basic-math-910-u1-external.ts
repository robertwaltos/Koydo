import type { LearningModule } from "@/lib/modules/types";

export const BasicMath910U1ExternalModule: LearningModule = {
  "id": "basic-math-910-u1-external",
  "title": "Algebra II: Functions, Systems & Polynomials",
  "description": "Mathematics unit for 9–10 imported from external JSX curriculum.",
  "subject": "Mathematics",
  "tags": [
    "external-ai",
    "curriculum-import",
    "grade-910"
  ],
  "minAge": 14,
  "maxAge": 16,
  "version": "external-1.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Explain What is a Function?.",
    "Explain Function Notation: f(x).",
    "Explain Domain and Range.",
    "Build baseline confidence in Algebra II: Functions, Systems & Polynomials.",
    "Apply one core Mathematics strategy for 910.",
    "Explain multi-step strategy using age-appropriate vocabulary.",
    "Apply multi-step strategy in one guided Mathematics task.",
    "Identify one correction step for the next attempt."
  ],
  "gradeBand": "910",
  "metadata": {
    "source": "../External_AI_Agents/lesson_platform (1).jsx",
    "sourceUnitId": "basic-math-910-u1",
    "sourceUnitIdCanonical": "basic-math-910-u1",
    "sourceUnitIdRaw": "basic_math-910-u1",
    "importedAt": "2026-02-25T02:03:30.448Z"
  },
  "external": {
    "unitOrder": 9,
    "estimatedHours": null,
    "prerequisites": []
  },
  "lessons": [
    {
      "id": "basic-math-910-u1-1",
      "title": "Functions: Domain, Range & Function Notation (910)",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "basic-math-910-u1-1-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Functions: Domain, Range & Function Notation (910)."
        }
      ],
      "objectives": [
        "Explain What is a Function?.",
        "Explain Function Notation: f(x).",
        "Explain Domain and Range."
      ],
      "chunks": [
        {
          "id": "basic-math-910-u1-1-chunk-1",
          "title": "What is a Function?",
          "content": "A FUNCTION is like a special machine that takes an input and gives back exactly one output. Imagine you have a box where you can put a number in (this is called the input or domain), and when you close the box, it processes that number and gives you back one specific number (this is called the output or range). It's important to remember that for every input you use, there should only be one output. If you ever find that one input leads to two different outputs, then it means that what you have is NOT a function. Functions help us understand relationships between numbers in a clear way! They are essential in mathematics because they allow us to describe how one quantity depends on another. For example, if you think about how the temperature changes throughout the day, you can see that for each time of day (input), there is a specific temperature (output). This relationship can be represented as a function, helping us make predictions and understand patterns in data. Functions are everywhere in math and science, and learning about them is a key step in becoming a great problem solver!"
        },
        {
          "id": "basic-math-910-u1-1-chunk-2",
          "title": "Function Notation: f(x)",
          "content": "When we want to express a function in mathematics, we often use something called function notation. Instead of writing it in the traditional way as y = 2x + 3, we can write it as f(x) = 2x + 3. Here, 'f(x)' is pronounced as 'f of x.' This notation helps us understand what the output will be when we choose a specific number for x. For instance, if we say f(5), we are substituting 5 into our function. To find the output, we can calculate it like this: f(5) = 2(5) + 3. When we do the math, we find that f(5) equals 13. This means that when we input the number 5 into our function, the output we receive is 13. It's important to note that we can name functions in various ways. For example, we could use g(x), h(x), or even p(t). The letter inside the parentheses represents the input variable, and you can choose any number you like to substitute in for that variable! Understanding function notation is a key step in learning about functions and how they work in mathematics."
        },
        {
          "id": "basic-math-910-u1-1-chunk-3",
          "title": "Domain and Range",
          "content": "In mathematics, understanding the concepts of DOMAIN and RANGE is essential when working with functions. The DOMAIN of a function refers to the complete set of all possible inputs, which are often represented as x-values. This means that when you think about what numbers you can plug into a function, you are considering its domain. On the other hand, the RANGE of a function is the complete set of all possible outputs, which can be represented as y-values or f(x) values. This tells you what results you can expect when you use the inputs from the domain.\nLet's look at a specific example to clarify these ideas. Consider the function f(x) = √x. For this function, the domain is defined as x ≥ 0. This is because you cannot take the square root of a negative number; therefore, only zero and positive numbers can be used as inputs. As for the range, it is f(x) ≥ 0, since the result of a square root is always a non-negative number.\nNow, let's examine another function: f(x) = 1/x. In this case, the domain is x ≠ 0. This restriction exists because dividing by zero is undefined in mathematics, so we cannot use zero as an input. The range for this function is also f(x) ≠ 0, which means that the output values cannot equal zero either. Understanding these concepts helps us to work with functions more effectively and avoid errors in calculations."
        },
        {
          "id": "basic-math-910-u1-1-chunk-4",
          "title": "Vertical Line Test",
          "content": "To find out if a graph shows a FUNCTION, we can use a helpful technique called the Vertical Line Test. Picture this: you take a pencil and draw vertical lines straight up and down across the graph. Now, pay close attention! If you see that any of these vertical lines touch the graph in more than one spot, then that graph does NOT represent a function. This is because a function can only have one output for each input. On the other hand, if every vertical line you draw touches the graph at most once, then congratulations! You have a function!\nLet’s look at some examples to make this clearer. A circle, for instance, does not pass the Vertical Line Test. If you draw a vertical line through the middle of a circle, it will touch the circle in two places, which means it is not a function. In contrast, a parabola that opens either up or down does pass the test because any vertical line you draw will only touch it once. This is a great way to check if a graph is a function or not, and it helps us understand the relationship between inputs and outputs in mathematics better!\nSo remember, the Vertical Line Test is a simple yet powerful tool to identify functions in graphs! Keep practicing, and you'll become a pro at spotting functions in no time!"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-1-card-1",
          "front": "Function definition",
          "back": "Every input has EXACTLY ONE output. One-to-one or many-to-one, never one-to-many."
        },
        {
          "id": "basic-math-910-u1-1-card-2",
          "front": "f(3) when f(x) = 4x − 2",
          "back": "f(3) = 4(3) − 2 = 12 − 2 = 10"
        },
        {
          "id": "basic-math-910-u1-1-card-3",
          "front": "Domain",
          "back": "All valid INPUT values (x-values)"
        },
        {
          "id": "basic-math-910-u1-1-card-4",
          "front": "Range",
          "back": "All valid OUTPUT values (f(x) values)"
        },
        {
          "id": "basic-math-910-u1-1-card-5",
          "front": "Vertical Line Test",
          "back": "If any vertical line crosses the graph more than once → NOT a function"
        },
        {
          "id": "basic-math-910-u1-1-card-6",
          "front": "Domain of f(x) = √(x−4)",
          "back": "x ≥ 4 (expression under √ must be ≥ 0)"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Animated math factory. A conveyor belt (function machine) takes in numbers, processes them through gear-driven operations (×3, −2), and outputs results. Domain shown as allowable inputs (green zone), invalid inputs (red zone). Function notation f(x) appears dramatically. Vertical line test demonstrated on multiple graphs with satisfying 'pass/fail' indicators. Sleek, industrial-tech aesthetic. Ages 14-16. Duration: 80 seconds.",
        "seedanceAnimation": "Lottie animation: Box labeled 'f(x) = 2x+1'. Number '3' flies in, gears turn, '7' comes out. Different numbers cycle through. Domain values shown in green, invalid inputs in red and blocked. 12-second loop.",
        "lessonImage": "Create a clean educational illustration for \"Functions: Domain, Range & Function Notation (910)\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Functions: Domain, Range & Function Notation (910)\" (Mathematics, grade band 910)."
      },
      "localized": {
        "title": {
          "en": "Functions: Domain, Range & Function Notation"
        },
        "concept": {
          "en": "Functions: Domain, Range & Function Notation"
        }
      },
      "external": {
        "sourceLessonId": "basic_math-910-u1-1",
        "order": 1
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-interactive",
      "title": "Algebra II: Functions, Systems & Polynomials Supplemental Practice",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-910-u1-external-supp-interactive-ia1",
          "type": "drag_and_drop",
          "title": "Algebra II: Functions, Systems & Polynomials Supplemental Practice Learning Flow",
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
                "label": "Set a goal for Build baseline confidence in Algebra II: Functions, Systems & Polynomials..",
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
          "id": "basic-math-910-u1-external-supp-interactive-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Algebra II: Functions, Systems & Polynomials Supplemental Practice."
        }
      ],
      "metadata": {
        "prompts": [
          "Build baseline confidence in Algebra II: Functions, Systems & Polynomials.",
          "Apply one core Mathematics strategy for 910."
        ]
      },
      "objectives": [
        "Build baseline confidence in Algebra II: Functions, Systems & Polynomials.",
        "Apply one core Mathematics strategy for 910."
      ],
      "chunks": [
        {
          "id": "basic-math-910-u1-external-supp-interactive-chunk-intro",
          "title": "Algebra II: Functions, Systems & Polynomials Supplemental Practice Overview",
          "content": "In this section, we will focus on reinforcing the important concepts of Mathematics that are covered in Algebra II, specifically related to Functions, Systems, and Polynomials. This practice will help you strengthen your understanding and skills in these areas, making you more confident in solving problems and applying what you’ve learned!\nContext recap: In this section, we will focus on reinforcing the important concepts of Mathematics that are covered in Algebra II, specifically related to Functions, Systems, and Polynomials. This practice will help you strengthen your understanding and skills in these areas, making you more confident in solving problems and applying what you’ve learned!",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-interactive-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to summarize one key idea that we learned today. This will help us remember the most important concept. After that, we can plan one next step to continue improving our understanding and skills in mathematics. Setting a clear goal will guide us in our learning journey!\nContext recap: Let's take a moment to summarize one key idea that we learned today. This will help us remember the most important concept. After that, we can plan one next step to continue improving our understanding and skills in mathematics. Setting a clear goal will guide us in our learning journey!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-interactive-card-1",
          "front": "What is one key idea in Algebra II: Functions, Systems & Polynomials?",
          "back": "Build baseline confidence in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-interactive-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core Mathematics strategy for 910."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Supplemental Practice\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Supplemental Practice\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Supplemental Practice\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Supplemental Practice\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-supp-interactive",
        "order": 2,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-quiz",
      "title": "Algebra II: Functions, Systems & Polynomials Supplemental Check",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-910-u1-external-supp-quiz-q1",
          "text": "Which option best summarizes Algebra II: Functions, Systems & Polynomials Supplemental Check?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-supplemental-check-summary",
          "options": [
            {
              "id": "a",
              "text": "Build baseline confidence in Algebra II: Functions, Systems & Polynomials."
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
          "id": "basic-math-910-u1-external-supp-quiz-q2",
          "text": "Which response shows correct application of Algebra II: Functions, Systems & Polynomials Supplemental Check?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-supplemental-check-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply one core Mathematics strategy for 910."
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
          "id": "basic-math-910-u1-external-supp-quiz-q3",
          "text": "Why is review important after learning Algebra II: Functions, Systems & Polynomials Supplemental Check?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-supplemental-check-review",
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
          "id": "basic-math-910-u1-external-supp-quiz-ia1",
          "type": "matching_pairs",
          "title": "Algebra II: Functions, Systems & Polynomials Supplemental Check Error Match",
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
                "label": "I still mix up Build baseline confidence in Algebra II: Functions, Systems & Polynomials.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Algebra II: Functions, Systems & Polynomials Supplemental Check in notes but not in timed checks."
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
          "id": "basic-math-910-u1-external-supp-quiz-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Algebra II: Functions, Systems & Polynomials Supplemental Check."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Build baseline confidence in Algebra II: Functions, Systems & Polynomials.",
        "Apply one core Mathematics strategy for 910."
      ],
      "chunks": [
        {
          "id": "basic-math-910-u1-external-supp-quiz-chunk-intro",
          "title": "Algebra II: Functions, Systems & Polynomials Supplemental Check Overview",
          "content": "In this section, we will reinforce the core concepts of Mathematics that we have explored in Algebra II, focusing on Functions, Systems, and Polynomials. This will be a great opportunity to check your understanding and see how well you can apply these concepts in different situations!\nContext recap: In this section, we will reinforce the core concepts of Mathematics that we have explored in Algebra II, focusing on Functions, Systems, and Polynomials. This will be a great opportunity to check your understanding and see how well you can apply these concepts in different situations!",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-quiz-chunk-recap",
          "title": "Quick Recap",
          "content": "Now, let's summarize one key idea that we discussed in this lesson. This will help us remember the most important takeaway. Additionally, we can plan one next step to further our understanding and skills in mathematics. Setting a clear goal will help us stay focused on our learning!\nContext recap: Now, let's summarize one key idea that we discussed in this lesson. This will help us remember the most important takeaway. Additionally, we can plan one next step to further our understanding and skills in mathematics. Setting a clear goal will help us stay focused on our learning!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-quiz-card-1",
          "front": "What is one key idea in Algebra II: Functions, Systems & Polynomials?",
          "back": "Build baseline confidence in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-quiz-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core Mathematics strategy for 910."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Supplemental Check\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Supplemental Check\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Supplemental Check\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Supplemental Check\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-supp-quiz",
        "order": 3,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-04",
      "title": "Algebra II: Functions, Systems & Polynomials Concept Walkthrough 4: Multi Step Strategy",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-910-u1-external-supp-seq-04-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Algebra II: Functions, Systems & Polynomials Concept Walkthrough 4: Multi Step Strategy."
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
          "id": "basic-math-910-u1-external-supp-seq-04-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "Before we start solving problems, it's helpful to model the problem visually or write it down as an equation. This strategy will make it easier for us to understand what we are trying to solve and will guide us in finding the solution step by step.\nContext recap: Before we start solving problems, it's helpful to model the problem visually or write it down as an equation. This strategy will make it easier for us to understand what we are trying to solve and will guide us in finding the solution step by step.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-04-chunk-practice",
          "title": "Guided Practice",
          "content": "Let's work together on one guided problem first, where I will help you through the steps. After that, you will try to solve one independent problem that follows the same pattern. This way, you can practice what you've learned and gain confidence in your skills!\nContext recap: Let's work together on one guided problem first, where I will help you through the steps. After that, you will try to solve one independent problem that follows the same pattern. This way, you can practice what you've learned and gain confidence in your skills!",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-04-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As we apply the multi-step strategy, it's important to be aware of common mistakes that can happen. I will point out one common error that students often make, and then we will discuss how to correct it using evidence from our work. This will help us avoid these pitfalls in the future!\nContext recap: As we apply the multi-step strategy, it's important to be aware of common mistakes that can happen. I will point out one common error that students often make, and then we will discuss how to correct it using evidence from our work. This will help us avoid these pitfalls in the future!",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-04-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review the multi-step strategy we discussed today. After that, we can set one clear improvement target for ourselves. This will help us focus on what we want to achieve in our next learning session!\nContext recap: Let's quickly review the multi-step strategy we discussed today. After that, we can set one clear improvement target for ourselves. This will help us focus on what we want to achieve in our next learning session!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-04-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-04-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-04-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-04-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 4: Multi Step Strategy\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 4: Multi Step Strategy\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 4: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 4: Multi Step Strategy\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-4",
        "order": 4,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-05",
      "title": "Algebra II: Functions, Systems & Polynomials Guided Practice Lab 5: Error Check Routines",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-910-u1-external-supp-seq-05-ia1",
          "type": "drag_and_drop",
          "title": "Algebra II: Functions, Systems & Polynomials Guided Practice Lab 5: Error Check Routines Learning Flow",
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
          "id": "basic-math-910-u1-external-supp-seq-05-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Algebra II: Functions, Systems & Polynomials Guided Practice Lab 5: Error Check Routines."
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
          "id": "basic-math-910-u1-external-supp-seq-05-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "In this section, we will identify a specific mathematical operation and discuss why it is the appropriate choice for the problem at hand. Understanding the reasoning behind our operations helps us become better problem solvers.\nContext recap: In this section, we will identify a specific mathematical operation and discuss why it is the appropriate choice for the problem at hand. Understanding the reasoning behind our operations helps us become better problem solvers.\nWhy this matters: Error Check Routines Intro helps learners in Mathematics connect ideas from Algebra II: Functions, Systems & Polynomials to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-05-chunk-practice",
          "title": "Guided Practice",
          "content": "As you work through your math problems, use a simple checklist to guide you. First, make a plan for how you will approach the problem. Next, solve it step by step. Finally, verify your solution to ensure it is correct. This method will help you stay organized and focused.\nContext recap: As you work through your math problems, use a simple checklist to guide you. First, make a plan for how you will approach the problem. Next, solve it step by step. Finally, verify your solution to ensure it is correct.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-05-chunk-check",
          "title": "Common Pitfall Check",
          "content": "While you are applying error-check routines, be on the lookout for a common mistake that many students make. Once you identify this error, take the time to correct it and provide evidence for your correction. This practice will enhance your understanding and accuracy.\nContext recap: While you are applying error-check routines, be on the lookout for a common mistake that many students make. Once you identify this error, take the time to correct it and provide evidence for your correction. This practice will enhance your understanding and accuracy.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-05-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review the error-check routines we have discussed. After this review, think about one specific area where you can improve your skills. Setting a clear improvement target will help you focus your efforts moving forward.\nContext recap: Let's take a moment to review the error-check routines we have discussed. After this review, think about one specific area where you can improve your skills. Setting a clear improvement target will help you focus your efforts moving forward.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-05-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-05-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-05-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-05-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 5: Error Check Routines\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 5: Error Check Routines\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 5: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 5: Error Check Routines\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-5",
        "order": 5,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-06",
      "title": "Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-910-u1-external-supp-seq-06-q1",
          "text": "Which option best summarizes Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-6-number-sense-summary",
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
          "id": "basic-math-910-u1-external-supp-seq-06-q2",
          "text": "Which response shows correct application of Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-6-number-sense-apply",
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
          "id": "basic-math-910-u1-external-supp-seq-06-q3",
          "text": "Why is review important after learning Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-6-number-sense-review",
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
          "id": "basic-math-910-u1-external-supp-seq-06-ia1",
          "type": "matching_pairs",
          "title": "Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense Error Match",
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
                "label": "I understand Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense in notes but not in timed checks."
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
          "id": "basic-math-910-u1-external-supp-seq-06-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense."
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
          "id": "basic-math-910-u1-external-supp-seq-06-chunk-intro",
          "title": "Number Sense Intro",
          "content": "Before you finalize your answers, it's important to check your units, signs, and the overall reasonableness of your solutions. This step ensures that your work is accurate and makes sense in the context of the problem.\nContext recap: Before you finalize your answers, it's important to check your units, signs, and the overall reasonableness of your solutions. This step ensures that your work is accurate and makes sense in the context of the problem.\nWhy this matters: Number Sense Intro helps learners in Mathematics connect ideas from Algebra II: Functions, Systems & Polynomials to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-06-chunk-practice",
          "title": "Guided Practice",
          "content": "In this practice section, you will compare two different strategies for solving a problem. After evaluating both methods, choose the one that you believe is more reliable. This exercise will help you develop critical thinking skills.\nContext recap: In this practice section, you will compare two different strategies for solving a problem. After evaluating both methods, choose the one that you believe is more reliable. This exercise will help you develop critical thinking skills.\nWhy this matters: Guided Practice helps learners in Mathematics connect ideas from Algebra II: Functions, Systems & Polynomials to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-06-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you apply your number sense, be mindful of a common error that can occur. Once you spot this mistake, take the time to correct it and provide evidence for your correction. This practice will strengthen your understanding of number sense.\nContext recap: As you apply your number sense, be mindful of a common error that can occur. Once you spot this mistake, take the time to correct it and provide evidence for your correction. This practice will strengthen your understanding of number sense.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-06-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review the key concepts of number sense that we have covered. After this recap, think about one specific target for improvement that you can focus on. Setting a clear goal will help you enhance your skills.\nContext recap: Let's quickly review the key concepts of number sense that we have covered. After this recap, think about one specific target for improvement that you can focus on. Setting a clear goal will help you enhance your skills.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-06-card-1",
          "front": "What is number sense?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-06-card-2",
          "front": "How can I practice number sense?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-06-card-3",
          "front": "What should I review next?",
          "back": "Review number sense, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-06-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 6: Number Sense\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-6",
        "order": 6,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-07",
      "title": "Algebra II: Functions, Systems & Polynomials Concept Walkthrough 7: Equation Setup",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-910-u1-external-supp-seq-07-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Algebra II: Functions, Systems & Polynomials Concept Walkthrough 7: Equation Setup."
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
          "id": "basic-math-910-u1-external-supp-seq-07-chunk-intro",
          "title": "Equation Setup Intro",
          "content": "Before you start solving a problem, it's helpful to model it with a visual representation or an equation. This approach allows you to better understand the problem and lays a solid foundation for finding the solution.\nContext recap: Before you start solving a problem, it's helpful to model it with a visual representation or an equation. This approach allows you to better understand the problem and lays a solid foundation for finding the solution.\nWhy this matters: Equation Setup Intro helps learners in Mathematics connect ideas from Algebra II: Functions, Systems & Polynomials to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-07-chunk-practice",
          "title": "Guided Practice",
          "content": "In this guided practice, you will first solve one example together with guidance. After that, you will tackle a similar problem on your own, using the same pattern. This method helps reinforce your learning and builds confidence.\nContext recap: In this guided practice, you will first solve one example together with guidance. After that, you will tackle a similar problem on your own, using the same pattern. This method helps reinforce your learning and builds confidence.\nWhy this matters: Guided Practice helps learners in Mathematics connect ideas from Algebra II: Functions, Systems & Polynomials to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-07-chunk-check",
          "title": "Common Pitfall Check",
          "content": "While you are setting up equations, be aware of a common error that can happen. Once you identify this mistake, take the time to correct it and provide evidence for your correction. This practice will enhance your skills in equation setup.\nContext recap: While you are setting up equations, be aware of a common error that can happen. Once you identify this mistake, take the time to correct it and provide evidence for your correction. This practice will enhance your skills in equation setup.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-07-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we have learned about equation setup. After this recap, think about one specific area where you can improve. Setting a clear target will help you focus your learning efforts.\nContext recap: Let's take a moment to review what we have learned about equation setup. After this recap, think about one specific area where you can improve. Setting a clear target will help you focus your learning efforts.\nWhy this matters: Quick Recap helps learners in Mathematics connect ideas from Algebra II: Functions, Systems & Polynomials to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-07-card-1",
          "front": "What is equation setup?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-07-card-2",
          "front": "How can I practice equation setup?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-07-card-3",
          "front": "What should I review next?",
          "back": "Review equation setup, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-07-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 7: Equation Setup\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 7: Equation Setup\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 7: Equation Setup\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 7: Equation Setup\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-7",
        "order": 7,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-08",
      "title": "Algebra II: Functions, Systems & Polynomials Guided Practice Lab 8: Fraction Reasoning",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-910-u1-external-supp-seq-08-ia1",
          "type": "drag_and_drop",
          "title": "Algebra II: Functions, Systems & Polynomials Guided Practice Lab 8: Fraction Reasoning Learning Flow",
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
          "id": "basic-math-910-u1-external-supp-seq-08-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Algebra II: Functions, Systems & Polynomials Guided Practice Lab 8: Fraction Reasoning."
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
          "id": "basic-math-910-u1-external-supp-seq-08-chunk-intro",
          "title": "Fraction Reasoning Intro",
          "content": "In this section, we will identify the mathematical operation we need to use and explain why it is the best choice for solving our problem. Understanding the reasoning behind our operations helps us become better problem solvers.\nContext recap: In this section, we will identify the mathematical operation we need to use and explain why it is the best choice for solving our problem. Understanding the reasoning behind our operations helps us become better problem solvers.\nWhy this matters: Fraction Reasoning Intro helps learners in Mathematics connect ideas from Algebra II: Functions, Systems & Polynomials to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-08-chunk-practice",
          "title": "Guided Practice",
          "content": "As you work through the problems, use a simple checklist to guide your process. First, make a plan for how you will approach the problem. Next, solve the problem step by step. Finally, verify your solution to ensure it is correct.\nContext recap: As you work through the problems, use a simple checklist to guide your process. First, make a plan for how you will approach the problem. Next, solve the problem step by step. Finally, verify your solution to ensure it is correct.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-08-chunk-check",
          "title": "Common Pitfall Check",
          "content": "While applying fraction reasoning, be on the lookout for a common mistake that many students make. Once you identify this error, take the time to correct it and provide evidence for your correction. This will help reinforce your understanding.\nContext recap: While applying fraction reasoning, be on the lookout for a common mistake that many students make. Once you identify this error, take the time to correct it and provide evidence for your correction. This will help reinforce your understanding.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-08-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we have learned about fraction reasoning. After the review, think about one specific area where you can improve your skills. Setting a clear target will help you focus your efforts.\nContext recap: Let's take a moment to review what we have learned about fraction reasoning. After the review, think about one specific area where you can improve your skills. Setting a clear target will help you focus your efforts.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-08-card-1",
          "front": "What is fraction reasoning?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-08-card-2",
          "front": "How can I practice fraction reasoning?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-08-card-3",
          "front": "What should I review next?",
          "back": "Review fraction reasoning, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-08-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 8: Fraction Reasoning\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 8: Fraction Reasoning\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 8: Fraction Reasoning\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 8: Fraction Reasoning\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-8",
        "order": 8,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-09",
      "title": "Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-910-u1-external-supp-seq-09-q1",
          "text": "Which option best summarizes Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-9-multi-step-strategy-summary",
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
          "id": "basic-math-910-u1-external-supp-seq-09-q2",
          "text": "Which response shows correct application of Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-9-multi-step-strategy-apply",
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
          "id": "basic-math-910-u1-external-supp-seq-09-q3",
          "text": "Why is review important after learning Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-9-multi-step-strategy-review",
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
          "id": "basic-math-910-u1-external-supp-seq-09-ia1",
          "type": "matching_pairs",
          "title": "Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy Error Match",
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
                "label": "I understand Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy in notes but not in timed checks."
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
          "id": "basic-math-910-u1-external-supp-seq-09-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy."
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
          "id": "basic-math-910-u1-external-supp-seq-09-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "Before you finalize your answers, it is important to check your units, signs, and the overall reasonableness of your solutions. This step ensures that your work is accurate and makes sense.\nContext recap: Before you finalize your answers, it is important to check your units, signs, and the overall reasonableness of your solutions. This step ensures that your work is accurate and makes sense.\nWhy this matters: Multi Step Strategy Intro helps learners in Mathematics connect ideas from Algebra II: Functions, Systems & Polynomials to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-09-chunk-practice",
          "title": "Guided Practice",
          "content": "In this practice section, you will compare two different strategies for solving a problem. After evaluating both, choose the strategy that you believe is more reliable and effective for reaching the correct solution.\nContext recap: In this practice section, you will compare two different strategies for solving a problem. After evaluating both, choose the strategy that you believe is more reliable and effective for reaching the correct solution.\nWhy this matters: Guided Practice helps learners in Mathematics connect ideas from Algebra II: Functions, Systems & Polynomials to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-09-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work through the multi-step strategy in your math problems, it's important to stay alert for a common mistake that many students make. This error can lead to incorrect answers, so take a moment to identify it when it appears. Once you find this mistake, focus on correcting it carefully. Be sure to provide clear evidence or reasoning that supports your correction. This practice not only helps you improve your accuracy but also strengthens your overall problem-solving skills, making you a more confident mathematician.\nContext recap: As you work through the multi-step strategy in your math problems, it's important to stay alert for a common mistake that many students make. This error can lead to incorrect answers, so take a moment to identify it when it appears. Once you find this mistake, focus on correcting it carefully. Be sure to provide clear evidence or reasoning that supports your correction.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-09-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review the multi-step strategy we have learned. After the review, think about one specific area where you can improve your approach. Setting a clear improvement target will help you focus on your learning.\nContext recap: Let's quickly review the multi-step strategy we have learned. After the review, think about one specific area where you can improve your approach. Setting a clear improvement target will help you focus on your learning.\nWhy this matters: Quick Recap helps learners in Mathematics connect ideas from Algebra II: Functions, Systems & Polynomials to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-09-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-09-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-09-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-09-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 9: Multi Step Strategy\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-9",
        "order": 9,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-10",
      "title": "Algebra II: Functions, Systems & Polynomials Concept Walkthrough 10: Error Check Routines",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-910-u1-external-supp-seq-10-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Algebra II: Functions, Systems & Polynomials Concept Walkthrough 10: Error Check Routines."
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
          "id": "basic-math-910-u1-external-supp-seq-10-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "Before you start solving a problem, it's helpful to model it using a visual representation or an equation. This approach will give you a clearer understanding of the problem and guide you toward finding the solution.\nContext recap: Before you start solving a problem, it's helpful to model it using a visual representation or an equation. This approach will give you a clearer understanding of the problem and guide you toward finding the solution.\nWhy this matters: Error Check Routines Intro helps learners in Mathematics connect ideas from Algebra II: Functions, Systems & Polynomials to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-10-chunk-practice",
          "title": "Guided Practice",
          "content": "In this guided practice, you will first solve one problem together with guidance. After that, you will tackle a similar problem on your own, using the same pattern you learned. This will help reinforce your understanding.\nContext recap: In this guided practice, you will first solve one problem together with guidance. After that, you will tackle a similar problem on your own, using the same pattern you learned. This will help reinforce your understanding.\nWhy this matters: Guided Practice helps learners in Mathematics connect ideas from Algebra II: Functions, Systems & Polynomials to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-10-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you apply the error-check routines in your mathematical work, it's important to be mindful of a frequent mistake that can occur. This mistake can lead to incorrect conclusions if not addressed. Once you spot this error, take the time to correct it carefully. Be sure to gather evidence that supports your correction, such as showing your work or explaining your reasoning. This practice will not only help you avoid similar mistakes in the future but will also enhance your overall problem-solving skills, making you a more confident mathematician.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-10-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review the error-check routines we have discussed. After this review, think about one specific area where you can improve your skills. Setting a clear improvement target will help you focus your learning.\nContext recap: Let's take a moment to review the error-check routines we have discussed. After this review, think about one specific area where you can improve your skills. Setting a clear improvement target will help you focus your learning.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-10-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-10-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-10-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-10-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 10: Error Check Routines\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 10: Error Check Routines\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 10: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 10: Error Check Routines\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-10",
        "order": 10,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-11",
      "title": "Algebra II: Functions, Systems & Polynomials Guided Practice Lab 11: Number Sense",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-910-u1-external-supp-seq-11-ia1",
          "type": "drag_and_drop",
          "title": "Algebra II: Functions, Systems & Polynomials Guided Practice Lab 11: Number Sense Learning Flow",
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
          "id": "basic-math-910-u1-external-supp-seq-11-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Algebra II: Functions, Systems & Polynomials Guided Practice Lab 11: Number Sense."
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
          "id": "basic-math-910-u1-external-supp-seq-11-chunk-intro",
          "title": "Number Sense Intro",
          "content": "In this section, you will identify the mathematical operation being used in a problem. After naming the operation, take a moment to explain why you believe it is the correct choice for the situation. This will help you develop a deeper understanding of how different operations work together in mathematics.\nContext recap: In this section, you will identify the mathematical operation being used in a problem. After naming the operation, take a moment to explain why you believe it is the correct choice for the situation. This will help you develop a deeper understanding of how different operations work together in mathematics.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-11-chunk-practice",
          "title": "Guided Practice",
          "content": "As you work through your math problems, use a simple checklist to guide your process. Start by planning your approach, then solve the problem step by step, and finally, verify your answer to ensure it makes sense. This structured method will help you become more confident in your problem-solving skills.\nContext recap: As you work through your math problems, use a simple checklist to guide your process. Start by planning your approach, then solve the problem step by step, and finally, verify your answer to ensure it makes sense. This structured method will help you become more confident in your problem-solving skills.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-11-chunk-check",
          "title": "Common Pitfall Check",
          "content": "While applying your number sense skills, be on the lookout for a common mistake that many students make. Once you identify this error, take the time to correct it and provide evidence for your correction. This practice will enhance your analytical skills and help you avoid similar pitfalls in the future.\nContext recap: While applying your number sense skills, be on the lookout for a common mistake that many students make. Once you identify this error, take the time to correct it and provide evidence for your correction. This practice will enhance your analytical skills and help you avoid similar pitfalls in the future.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-11-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we have learned about number sense. After reflecting on the key concepts, set a specific goal for improvement. This will give you a clear target to aim for as you continue to develop your mathematical abilities.\nContext recap: Let's take a moment to review what we have learned about number sense. After reflecting on the key concepts, set a specific goal for improvement. This will give you a clear target to aim for as you continue to develop your mathematical abilities.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-11-card-1",
          "front": "What is number sense?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-11-card-2",
          "front": "How can I practice number sense?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-11-card-3",
          "front": "What should I review next?",
          "back": "Review number sense, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-11-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 11: Number Sense\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 11: Number Sense\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 11: Number Sense\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 11: Number Sense\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-11",
        "order": 11,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-12",
      "title": "Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-910-u1-external-supp-seq-12-q1",
          "text": "Which option best summarizes Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-12-equation-setup-summary",
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
          "id": "basic-math-910-u1-external-supp-seq-12-q2",
          "text": "Which response shows correct application of Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-12-equation-setup-apply",
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
          "id": "basic-math-910-u1-external-supp-seq-12-q3",
          "text": "Why is review important after learning Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-12-equation-setup-review",
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
          "id": "basic-math-910-u1-external-supp-seq-12-ia1",
          "type": "matching_pairs",
          "title": "Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup Error Match",
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
                "label": "I understand Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup in notes but not in timed checks."
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
          "id": "basic-math-910-u1-external-supp-seq-12-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup."
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
          "id": "basic-math-910-u1-external-supp-seq-12-chunk-intro",
          "title": "Equation Setup Intro",
          "content": "Before finalizing your equations, it is important to check several key aspects. Make sure to verify the units you are using, ensure that the signs are correct, and assess the reasonableness of your answers. This careful review process will help you catch any mistakes before they become problems.\nContext recap: Before finalizing your equations, it is important to check several key aspects. Make sure to verify the units you are using, ensure that the signs are correct, and assess the reasonableness of your answers. This careful review process will help you catch any mistakes before they become problems.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-12-chunk-practice",
          "title": "Guided Practice",
          "content": "In this practice section, you will compare two different strategies for solving a problem. After analyzing both approaches, choose the one that you believe is more reliable. This exercise will help you develop critical thinking skills and improve your decision-making in mathematics.\nContext recap: In this practice section, you will compare two different strategies for solving a problem. After analyzing both approaches, choose the one that you believe is more reliable. This exercise will help you develop critical thinking skills and improve your decision-making in mathematics.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-12-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work on setting up your equations, be mindful of a common mistake that can occur. Once you spot this error, take the time to correct it and provide evidence for your correction. This practice will strengthen your understanding of equation setup and help you avoid similar mistakes in the future.\nContext recap: As you work on setting up your equations, be mindful of a common mistake that can occur. Once you spot this error, take the time to correct it and provide evidence for your correction. This practice will strengthen your understanding of equation setup and help you avoid similar mistakes in the future.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-12-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review what we have learned about setting up equations. After this recap, take a moment to set a clear target for improvement. This will help you focus on areas where you can grow and enhance your skills.\nContext recap: Let's quickly review what we have learned about setting up equations. After this recap, take a moment to set a clear target for improvement. This will help you focus on areas where you can grow and enhance your skills.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-12-card-1",
          "front": "What is equation setup?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-12-card-2",
          "front": "How can I practice equation setup?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-12-card-3",
          "front": "What should I review next?",
          "back": "Review equation setup, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-12-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 12: Equation Setup\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-12",
        "order": 12,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-13",
      "title": "Algebra II: Functions, Systems & Polynomials Concept Walkthrough 13: Fraction Reasoning",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "basic-math-910-u1-external-supp-seq-13-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Algebra II: Functions, Systems & Polynomials Concept Walkthrough 13: Fraction Reasoning."
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
          "id": "basic-math-910-u1-external-supp-seq-13-chunk-intro",
          "title": "Fraction Reasoning Intro",
          "content": "Before you begin solving a problem involving fractions, it's helpful to model the situation visually or with an equation. This approach will give you a clearer understanding of the problem and make it easier to find the solution.\nContext recap: Before you begin solving a problem involving fractions, it's helpful to model the situation visually or with an equation. This approach will give you a clearer understanding of the problem and make it easier to find the solution.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-13-chunk-practice",
          "title": "Guided Practice",
          "content": "In this guided practice, you will first solve one problem together with guidance, and then you will tackle a similar problem on your own. This pattern will help reinforce your understanding and build your confidence in working with fractions.\nContext recap: In this guided practice, you will first solve one problem together with guidance, and then you will tackle a similar problem on your own. This pattern will help reinforce your understanding and build your confidence in working with fractions.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-13-chunk-check",
          "title": "Common Pitfall Check",
          "content": "While applying your fraction reasoning skills, be aware of a common mistake that can happen. Once you identify this error, take the time to correct it and provide evidence for your correction. This will help you improve your understanding and avoid making the same mistake in the future.\nContext recap: While applying your fraction reasoning skills, be aware of a common mistake that can happen. Once you identify this error, take the time to correct it and provide evidence for your correction. This will help you improve your understanding and avoid making the same mistake in the future.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-13-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review the key concepts of fraction reasoning that we have discussed. After this quick recap, set a specific goal for improvement. This will guide your learning and help you focus on areas where you can enhance your skills.\nContext recap: Let's take a moment to review the key concepts of fraction reasoning that we have discussed. After this quick recap, set a specific goal for improvement. This will guide your learning and help you focus on areas where you can enhance your skills.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-13-card-1",
          "front": "What is fraction reasoning?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-13-card-2",
          "front": "How can I practice fraction reasoning?",
          "back": "Solve one guided item, then one independent item with the same pattern."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-13-card-3",
          "front": "What should I review next?",
          "back": "Review fraction reasoning, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-13-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 13: Fraction Reasoning\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 13: Fraction Reasoning\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 13: Fraction Reasoning\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Concept Walkthrough 13: Fraction Reasoning\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-13",
        "order": 13,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-14",
      "title": "Algebra II: Functions, Systems & Polynomials Guided Practice Lab 14: Multi Step Strategy",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "basic-math-910-u1-external-supp-seq-14-ia1",
          "type": "drag_and_drop",
          "title": "Algebra II: Functions, Systems & Polynomials Guided Practice Lab 14: Multi Step Strategy Learning Flow",
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
          "id": "basic-math-910-u1-external-supp-seq-14-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Algebra II: Functions, Systems & Polynomials Guided Practice Lab 14: Multi Step Strategy."
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
          "id": "basic-math-910-u1-external-supp-seq-14-chunk-intro",
          "title": "Multi Step Strategy Intro",
          "content": "In this section, you will identify the mathematical operation you need to use and explain why this operation is the best choice for solving the problem at hand. Understanding the reasoning behind your choice is crucial for mastering multi-step strategies in math.\nContext recap: In this section, you will identify the mathematical operation you need to use and explain why this operation is the best choice for solving the problem at hand. Understanding the reasoning behind your choice is crucial for mastering multi-step strategies in math.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-14-chunk-practice",
          "title": "Guided Practice",
          "content": "As you work through your problems, use a simple checklist to guide you. First, make a plan on how to approach the problem. Next, solve the problem step by step. Finally, verify your solution to ensure it is correct. This method will help you stay organized and focused.\nContext recap: As you work through your problems, use a simple checklist to guide you. First, make a plan on how to approach the problem. Next, solve the problem step by step. Finally, verify your solution to ensure it is correct.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-14-chunk-check",
          "title": "Common Pitfall Check",
          "content": "While applying the multi-step strategy, be on the lookout for a common mistake that many students make. Once you identify this error, take the time to correct it and provide evidence for your correction. This practice will enhance your problem-solving skills and help you avoid similar mistakes in the future.\nContext recap: While applying the multi-step strategy, be on the lookout for a common mistake that many students make. Once you identify this error, take the time to correct it and provide evidence for your correction. This practice will enhance your problem-solving skills and help you avoid similar mistakes in the future.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-14-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review the multi-step strategy we discussed. After the review, think about one specific area where you can improve your skills. Setting a clear improvement target will help you focus your efforts and track your progress.\nContext recap: Let's take a moment to review the multi-step strategy we discussed. After the review, think about one specific area where you can improve your skills. Setting a clear improvement target will help you focus your efforts and track your progress.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-14-card-1",
          "front": "What is multi-step strategy?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-14-card-2",
          "front": "How can I practice multi-step strategy?",
          "back": "Use a short checklist: plan, solve, verify."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-14-card-3",
          "front": "What should I review next?",
          "back": "Review multi-step strategy, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-14-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 14: Multi Step Strategy\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 14: Multi Step Strategy\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 14: Multi Step Strategy\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Guided Practice Lab 14: Multi Step Strategy\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-14",
        "order": 14,
        "generatedSupplement": true
      }
    },
    {
      "id": "basic-math-910-u1-external-supp-seq-15",
      "title": "Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "basic-math-910-u1-external-supp-seq-15-q1",
          "text": "Which option best summarizes Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-15-error-check-routines-summary",
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
          "id": "basic-math-910-u1-external-supp-seq-15-q2",
          "text": "Which response shows correct application of Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-15-error-check-routines-apply",
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
          "id": "basic-math-910-u1-external-supp-seq-15-q3",
          "text": "Why is review important after learning Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines?",
          "skillId": "basic-math-910-u1-external-skill-algebra-ii-functions-systems-polynomials-checkpoint-quiz-15-error-check-routines-review",
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
          "id": "basic-math-910-u1-external-supp-seq-15-ia1",
          "type": "matching_pairs",
          "title": "Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines Error Match",
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
                "label": "I understand Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines in notes but not in timed checks."
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
          "id": "basic-math-910-u1-external-supp-seq-15-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines."
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
          "id": "basic-math-910-u1-external-supp-seq-15-chunk-intro",
          "title": "Error Check Routines Intro",
          "content": "Before you finalize your answers, it's important to check a few key elements. Make sure to verify the units you are using, check the signs of your numbers, and assess the reasonableness of your answers. This careful checking process will help ensure your solutions are accurate.\nContext recap: Before you finalize your answers, it's important to check a few key elements. Make sure to verify the units you are using, check the signs of your numbers, and assess the reasonableness of your answers. This careful checking process will help ensure your solutions are accurate.",
          "kind": "concept"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-15-chunk-practice",
          "title": "Guided Practice",
          "content": "In this practice section, you will compare two different strategies for solving a problem. Take the time to analyze each strategy and decide which one you believe is more reliable. This comparison will help you develop critical thinking skills and improve your problem-solving techniques.\nContext recap: In this practice section, you will compare two different strategies for solving a problem. Take the time to analyze each strategy and decide which one you believe is more reliable. This comparison will help you develop critical thinking skills and improve your problem-solving techniques.",
          "kind": "practice"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-15-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you apply the error-check routines, be aware of a common mistake that can occur. Once you spot this error, work on correcting it and provide evidence for your correction. This practice will not only help you learn from your mistakes but also strengthen your understanding of the material.\nContext recap: As you apply the error-check routines, be aware of a common mistake that can occur. Once you spot this error, work on correcting it and provide evidence for your correction. This practice will not only help you learn from your mistakes but also strengthen your understanding of the material.",
          "kind": "analysis"
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-15-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review the error-check routines we have learned. After the review, think about one specific area where you can improve your approach to checking your work. Setting a clear improvement target will help you focus on enhancing your skills.\nContext recap: Let's quickly review the error-check routines we have learned. After the review, think about one specific area where you can improve your approach to checking your work. Setting a clear improvement target will help you focus on enhancing your skills.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-910-u1-external-supp-seq-15-card-1",
          "front": "What is error-check routines?",
          "back": "It is a key Mathematics idea in Algebra II: Functions, Systems & Polynomials."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-15-card-2",
          "front": "How can I practice error-check routines?",
          "back": "Compare two strategies and choose the more reliable one."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-15-card-3",
          "front": "What should I review next?",
          "back": "Review error-check routines, then set one clear improvement target."
        },
        {
          "id": "basic-math-910-u1-external-supp-seq-15-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines\" in \"Mathematics\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines\" (Mathematics, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines\" in Mathematics.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Algebra II: Functions, Systems & Polynomials Checkpoint Quiz 15: Error Check Routines\" (Mathematics, grade band 910)."
      },
      "external": {
        "sourceLessonId": "basic-math-910-u1-external-generated-cycle-15",
        "order": 15,
        "generatedSupplement": true
      }
    }
  ]
};
