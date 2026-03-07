import type { LearningModule } from "@/lib/modules/types";

export const advanced_math_401_Module: LearningModule = {
  "id": "advanced-math-401",
  "title": "Advanced Math Capstone Proofs and Models",
  "description": "Integrate modeling, optimization, and formal proof to solve complex quantitative problems.",
  "subject": "Advanced Math",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 12,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Advanced Math modeling and optimization.",
    "Apply Mathematical Argument Quality strategies through guided practice and formal proofs.",
    "Demonstrate mastery with subject-specific quizzes and real-world scenario labs."
  ],
  "lessons": [
    {
      "id": "advanced-math-401-l01",
      "title": "Model Assumptions and Limits",
      "type": "video",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A vibrant, stylized blueprint of a futuristic bridge with glowing mathematical symbols highlighting stress points, representing model assumptions and structural limits.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic 3D animation showing a physical model of a city being built. Glowing text overlays point out 'Assumptions' like gravity and material strength, which seamlessly transition into floating mathematical equations.",
      "chunks": [
        {
          "id": "advanced-math-401-l01-c1",
          "title": "The Invisible Rules of Math",
          "content": "Ever wonder how engineers know a bridge won't collapse before they even build it? It comes down to model assumptions. These are the 'invisible rules' we take for granted when we use math to represent the messy real world. In this lesson, we'll look at these assumptions through the lens of advanced math reasoning. Understanding these hidden rules is the secret to making your mathematical models actually work in reality."
        },
        {
          "id": "advanced-math-401-l01-c2",
          "title": "Goals, Limits, and Rules",
          "content": "How do model assumptions and optimization constraints work together? Think of it like a video game. First, you name your main target (the goal). Next, you identify your limits, like your health bar or inventory (constraints), and the physics of the game world (assumptions). This process helps structure your reasoning so you can find the absolute best strategy to win."
        },
        {
          "id": "advanced-math-401-l01-c3",
          "title": "Worked Example: The Garden Fence",
          "content": "Let's walk through a guided example! Imagine you want to build a garden with the maximum possible area, but you only have 50 feet of fencing. First, define the goal: maximize area. Then, apply the constraint: the perimeter cannot exceed 50 feet. Finally, verify your result—does a 12.5x12.5 square make logical sense? This step-by-step check ensures your math matches reality."
        },
        {
          "id": "advanced-math-401-l01-c4",
          "title": "Your Turn: The Box Challenge",
          "content": "Now it's your turn! Apply the same process to a new scenario: minimizing the cost of cardboard needed to build a shipping box of a specific volume. As you work through it, write down one clear sentence explaining why your approach is valid. This exercise will sharpen your reasoning skills and prove you can handle real-world optimization."
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-401-l01-f1",
          "front": "Model Assumptions",
          "back": "Simplifications we make to translate a complex real-world problem into a solvable mathematical equation."
        },
        {
          "id": "advanced-math-401-l01-f2",
          "front": "Optimization Constraints",
          "back": "The limits or boundaries (like budget, time, or materials) within which a solution must be found."
        },
        {
          "id": "advanced-math-401-l01-f3",
          "front": "Verification",
          "back": "Checking that your mathematical result matches the original goal and makes sense in reality."
        },
        {
          "id": "advanced-math-401-l01-f4",
          "front": "Transfer",
          "back": "Using a learned strategy on a completely new problem to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-401-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about model assumptions and optimization constraints."
        },
        {
          "id": "advanced-math-401-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Advanced Math vocabulary."
        }
      ]
    },
    {
      "id": "advanced-math-401-l02",
      "title": "Optimization with Constraints",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing digital scale balancing a bright target symbol representing a goal with a set of heavy metallic weights representing constraints, set on a sleek futuristic desk.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A first-person view of a digital puzzle where the user drags and drops glowing blocks (resources) into a limited grid (constraints) to maximize a score (optimization), with satisfying visual feedback.",
      "metadata": {
        "prompts": [
          "Identify one core idea about model assumptions from this lesson.",
          "Explain where optimization constraints appears in real life.",
          "Describe one question you still have about capstone advanced math reasoning."
        ]
      },
      "interactiveActivities": [
        {
          "id": "advanced-math-401-l02-ia1",
          "type": "drag_and_drop",
          "title": "Practice Flow Builder",
          "description": "Sort each action into Plan, Execute, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "execute",
                "label": "Execute"
              },
              {
                "id": "reflect",
                "label": "Reflect"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set a goal for model assumptions",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for optimization constraints",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Record what worked and what to improve",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-401-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on optimization constraints and write one reflection."
        }
      ]
    },
    {
      "id": "advanced-math-401-l03",
      "title": "Checkpoint: Capstone Modeling",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing checkpoint gate on a neon grid pathway, with floating math symbols passing through it, symbolizing progress in mathematical modeling.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced montage of a student successfully solving a complex math problem on a transparent glowing board, checking off a 'Modeling Checkpoint' list as they progress.",
      "questions": [
        {
          "id": "advanced-math-401-l03-q1",
          "text": "What is the primary purpose of a mathematical model assumption?",
          "skillId": "advanced-math-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To ensure the model perfectly replicates every single real-world variable."
            },
            {
              "id": "b",
              "text": "To simplify a complex real-world problem so it can be solved mathematically."
            },
            {
              "id": "c",
              "text": "To eliminate the need for optimization entirely."
            },
            {
              "id": "d",
              "text": "To replace empirical data with theoretical guesses."
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "advanced-math-401-l03-q2",
          "text": "What is the best first step when analyzing optimization constraints?",
          "skillId": "advanced-math-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Immediately solve for the derivative of the constraints."
            },
            {
              "id": "b",
              "text": "Expand the feasible region to infinity to ensure a solution exists."
            },
            {
              "id": "c",
              "text": "Clearly define the objective function and identify the limiting boundaries."
            },
            {
              "id": "d",
              "text": "Ignore inequalities and treat all constraints as absolute equalities."
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "advanced-math-401-l03-q3",
          "text": "Which option shows strong reasoning when evaluating a mathematical model?",
          "skillId": "advanced-math-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Assuming the model works perfectly for all possible scenarios without checking."
            },
            {
              "id": "b",
              "text": "Only using data that confirms the initial hypothesis."
            },
            {
              "id": "c",
              "text": "Removing constraints to make the calculation faster."
            },
            {
              "id": "d",
              "text": "Testing the model's limits by inputting extreme values to see if it breaks."
            }
          ],
          "correctOptionId": "d"
        },
        {
          "id": "advanced-math-401-l03-q4",
          "text": "Why is spaced review useful for Advanced Math mastery?",
          "skillId": "advanced-math-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It helps transfer short-term problem-solving steps into long-term mathematical intuition."
            },
            {
              "id": "b",
              "text": "It focuses solely on memorizing formulas right before an exam."
            },
            {
              "id": "c",
              "text": "It replaces the need for understanding core concepts."
            },
            {
              "id": "d",
              "text": "It limits the ability to apply math to new scenarios."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "advanced-math-401-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Capstone Modeling",
          "description": "Match each error signal to the strongest correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Confusion about model assumptions"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to optimization constraints"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone advanced math reasoning under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create a one-step concept summary with one worked example"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
              },
              {
                "id": "r3",
                "label": "Retest the same target with a short timed sprint"
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
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
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
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "advanced-math-401-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "advanced-math-401-l04",
      "title": "Formal Proof Structure",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing, multi-tiered pyramid made of translucent glass blocks, each labeled with steps of a proof: Goal, Strategy, Evidence, Check, set against a dark starry background.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animated sequence showing a detective connecting clues on a corkboard with red string, which magically transforms into a structured mathematical proof on a chalkboard.",
      "chunks": [
        {
          "id": "advanced-math-401-l04-c1",
          "title": "Building an Unbreakable Argument",
          "content": "A formal proof isn't just a bunch of equations thrown onto a page; it's an unbreakable argument. In this lesson, we'll dive into structured reasoning. We are moving beyond just memorizing formulas to actually making applied decisions based on logic. This is how mathematicians convince the world that their ideas are 100% true."
        },
        {
          "id": "advanced-math-401-l04-c2",
          "title": "The 4-Step Proof Method",
          "content": "Let's break down the ultimate proof-writing framework. Step 1: Identify the Goal (what exactly are you trying to prove?). Step 2: Choose a Strategy (are you using direct proof, or maybe proof by contradiction?). Step 3: Provide Evidence (justify every single jump with an axiom or theorem). Step 4: Check (read it backwards to ensure the logic flows perfectly)."
        },
        {
          "id": "advanced-math-401-l04-c3",
          "title": "Dodging Common Pitfalls",
          "content": "Even the best mathematicians make mistakes. The most common errors in formal proofs include skipping the initial setup, bringing in assumptions that weren't given in the problem, or forgetting to verify the final result. By keeping an eye out for these traps, you can keep your arguments bulletproof."
        },
        {
          "id": "advanced-math-401-l04-c4",
          "title": "Independent Try: Prove It!",
          "content": "Now, it's time to test your skills! Try solving the provided geometry proof on your own. As you work, map your process directly to the Goal -> Strategy -> Evidence -> Check sequence. Did you skip a step? Did you justify your evidence? Practice is the only way to master the art of the formal proof."
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-401-l04-f1",
          "front": "Proof Structure",
          "back": "A logical sequence of statements, each supported by a theorem or axiom, leading to an undeniable conclusion."
        },
        {
          "id": "advanced-math-401-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "advanced-math-401-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not explicitly supported by the prompt or known axioms."
        },
        {
          "id": "advanced-math-401-l04-f4",
          "front": "Process Match",
          "back": "Your written explanation should perfectly match the logical steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-401-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for proof structure scenarios."
        }
      ]
    },
    {
      "id": "advanced-math-401-l05",
      "title": "Validation and Error Bounds",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic archery target with glowing neon rings, showing a tight cluster of arrows near the center with a highlighted 'error bound' radius around them.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation of a robot trying to throw a ball into a hoop, adjusting its angle and force each time, with glowing text showing the decreasing 'error bound' until it scores perfectly.",
      "metadata": {
        "prompts": [
          "Pick one challenge and outline your approach.",
          "Test your approach and record the result.",
          "Revise your approach and explain the change."
        ]
      },
      "interactiveActivities": [
        {
          "id": "advanced-math-401-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "Proof Structure Concept"
              },
              {
                "id": "process",
                "label": "Quantitative Validation Process"
              },
              {
                "id": "review",
                "label": "Review Loop"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Write one definition in your own words",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Follow the step-by-step method on a new example",
                "correctBucketId": "process"
              },
              {
                "id": "i3",
                "label": "Retest the same skill tomorrow",
                "correctBucketId": "review"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-401-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a proof structure challenge."
        }
      ]
    },
    {
      "id": "advanced-math-401-l06",
      "title": "Checkpoint: Mathematical Argument Quality",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing golden scale of justice balancing a complex mathematical equation on one side and a stack of evidence folders on the other.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic zoom into a complex mathematical proof, where each line lights up in green as it is validated by a glowing checkmark.",
      "questions": [
        {
          "id": "advanced-math-401-l06-q1",
          "text": "Which statement best explains proof structure in Advanced Math?",
          "skillId": "advanced-math-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It is a collection of empirical observations that suggest a pattern."
            },
            {
              "id": "b",
              "text": "It is a visual representation of a function without algebraic backing."
            },
            {
              "id": "c",
              "text": "It is a logical sequence of statements, each supported by a theorem or axiom, leading to a conclusion."
            },
            {
              "id": "d",
              "text": "It is a hypothesis that has been tested with multiple numerical examples."
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "advanced-math-401-l06-q2",
          "text": "What is the best first step when analyzing quantitative validation?",
          "skillId": "advanced-math-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Accept the first output generated by a calculator without questioning it."
            },
            {
              "id": "b",
              "text": "Identify the expected range or bounds of the answer before performing detailed calculations."
            },
            {
              "id": "c",
              "text": "Assume all variables are normally distributed."
            },
            {
              "id": "d",
              "text": "Skip boundary testing if the formula is well-known."
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "advanced-math-401-l06-q3",
          "text": "Which option shows strong reasoning when building a mathematical argument?",
          "skillId": "advanced-math-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Explicitly stating assumptions and showing how each logical step derives from the previous one."
            },
            {
              "id": "b",
              "text": "Skipping intermediate algebraic steps to save space."
            },
            {
              "id": "c",
              "text": "Relying on intuition for the most complex transitions."
            },
            {
              "id": "d",
              "text": "Using circular reasoning to prove the initial premise."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l06-q4",
          "text": "Why is spaced review useful for Advanced Math mastery?",
          "skillId": "advanced-math-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It encourages cramming complex proofs right before a test."
            },
            {
              "id": "b",
              "text": "It reduces the need for logical deduction."
            },
            {
              "id": "c",
              "text": "It is only useful for basic arithmetic, not advanced proofs."
            },
            {
              "id": "d",
              "text": "It strengthens memory and helps transfer problem-solving skills over time."
            }
          ],
          "correctOptionId": "d"
        }
      ],
      "interactiveActivities": [
        {
          "id": "advanced-math-401-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Mathematical Argument Quality",
          "description": "Match each error signal to the strongest correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Confusion about proof structure"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to quantitative validation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone advanced math reasoning under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create a one-step concept summary with one worked example"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
              },
              {
                "id": "r3",
                "label": "Retest the same target with a short timed sprint"
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
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
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
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "advanced-math-401-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "advanced-math-401-l07",
      "title": "Multi-Model Comparisons",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: Three different glowing holographic models of a galaxy spinning side-by-side on a high-tech lab table, being compared by a digital scanner.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A split-screen animation showing two different mathematical models predicting the weather; one shows rain, the other sun, and a glowing graph compares their accuracy against actual weather data.",
      "chunks": [
        {
          "id": "advanced-math-401-l07-c1",
          "title": "Clash of the Models",
          "content": "What happens when two different math models give you two different answers? Before you start comparing them, you need to use quantitative validation to organize your approach. Planning your steps in advance can significantly improve both the quality of your work and your speed. By preparing, you set yourself up to figure out which model is actually telling the truth."
        },
        {
          "id": "advanced-math-401-l07-c2",
          "title": "The Golden Decision Rule",
          "content": "When faced with competing models, use this simple decision rule: always pick the model that has the strongest evidence and the clearest link to your goal. Don't just pick the one with the fanciest equations! This strategy will guide you in making informed decisions and help you cut through the noise to find the most relevant data."
        },
        {
          "id": "advanced-math-401-l07-c3",
          "title": "Quality Control Check",
          "content": "As you evaluate your models, run them through a strict quality control check. Look for three things: accuracy (are the numbers right?), completeness (did it account for all variables?), and alignment (does it actually solve the original problem?). Meeting these criteria ensures your mathematical analysis is rock solid."
        },
        {
          "id": "advanced-math-401-l07-c4",
          "title": "Your Next-Step Plan",
          "content": "After completing your analysis, take a moment to reflect. Write down one action you want to repeat in your next practice round (like checking error bounds) and one action you want to improve (like writing clearer proof steps). This reflection loop is what turns a good math student into a great one."
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-401-l07-f1",
          "front": "Quantitative Validation",
          "back": "Comparing a model's numerical predictions against real-world data or known bounds."
        },
        {
          "id": "advanced-math-401-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the model option with the strongest evidence-to-goal alignment."
        },
        {
          "id": "advanced-math-401-l07-f3",
          "front": "Quality Control",
          "back": "Checking for Accuracy + Completeness + Objective Match."
        },
        {
          "id": "advanced-math-401-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-401-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on quantitative validation."
        }
      ]
    },
    {
      "id": "advanced-math-401-l08",
      "title": "Capstone Proof Workshop",
      "type": "interactive",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A cozy, high-tech workshop desk with glowing blueprints, a digital stylus, and floating holographic geometric shapes being assembled.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A time-lapse animation of a student sketching a complex geometric proof on a digital tablet, erasing and refining steps until the final shape glows with success.",
      "metadata": {
        "prompts": [
          "What did you learn most clearly?",
          "Where did you struggle and why?",
          "What is your next improvement target?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "advanced-math-401-l08-ia1",
          "type": "matching_pairs",
          "title": "Reflection Match",
          "description": "Match each reflection prompt with the best follow-up action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I keep missing one skill pattern"
              },
              {
                "id": "l2",
                "label": "I rush and make avoidable mistakes"
              },
              {
                "id": "l3",
                "label": "I understand in notes but miss in quizzes"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Do a focused drill on that exact pattern"
              },
              {
                "id": "r2",
                "label": "Use a short checklist before submitting answers"
              },
              {
                "id": "r3",
                "label": "Repeat the skill in a timed re-check"
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
      "learningAids": [
        {
          "id": "advanced-math-401-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "advanced-math-401-l09",
      "title": "Review: Advanced Quantitative Thinking",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing brain made of interconnected mathematical nodes and numbers, pulsing with light on a dark blue background.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic fly-through of a digital brain where synapses fire, connecting different mathematical concepts like 'Optimization' and 'Validation' with bright beams of light.",
      "questions": [
        {
          "id": "advanced-math-401-l09-q1",
          "text": "Which statement best explains optimization constraints in Advanced Math?",
          "skillId": "advanced-math-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "They are the primary goals we are trying to maximize or minimize."
            },
            {
              "id": "b",
              "text": "They are the limits or boundaries within which a solution must be found, like budget or materials."
            },
            {
              "id": "c",
              "text": "They are variables that can take on any value from negative to positive infinity."
            },
            {
              "id": "d",
              "text": "They are the final verified answers of the model."
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "advanced-math-401-l09-q2",
          "text": "What is the best first step when analyzing quantitative validation?",
          "skillId": "advanced-math-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Immediately plug numbers into the first available formula."
            },
            {
              "id": "b",
              "text": "Assume the model has zero margin of error."
            },
            {
              "id": "c",
              "text": "Identify the expected range of the answer before performing detailed calculations."
            },
            {
              "id": "d",
              "text": "Discard any data that doesn't fit a linear pattern."
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "advanced-math-401-l09-q3",
          "text": "Which option shows strong reasoning when comparing multiple mathematical models?",
          "skillId": "advanced-math-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Cross-referencing results from two different models to ensure consistency and checking against real-world data."
            },
            {
              "id": "b",
              "text": "Choosing the model that produces the highest numerical value."
            },
            {
              "id": "c",
              "text": "Selecting the model with the most complex equations, assuming it is more accurate."
            },
            {
              "id": "d",
              "text": "Ignoring the underlying assumptions of each model."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l09-q4",
          "text": "Why is spaced review useful for Advanced Math mastery?",
          "skillId": "advanced-math-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It is a technique used to solve differential equations."
            },
            {
              "id": "b",
              "text": "It replaces the need for active recall."
            },
            {
              "id": "c",
              "text": "It is only effective for memorizing historical dates, not math."
            },
            {
              "id": "d",
              "text": "It strengthens memory and helps transfer problem-solving skills over time."
            }
          ],
          "correctOptionId": "d"
        }
      ],
      "interactiveActivities": [
        {
          "id": "advanced-math-401-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Advanced Quantitative Thinking",
          "description": "Match each error signal to the strongest correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Confusion about optimization constraints"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to quantitative validation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone advanced math reasoning under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create a one-step concept summary with one worked example"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
              },
              {
                "id": "r3",
                "label": "Retest the same target with a short timed sprint"
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
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
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
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "advanced-math-401-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "advanced-math-401-l10",
      "title": "Mastery: Advanced Math IV",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing golden trophy shaped like a geometric fractal, resting on a pedestal inscribed with mathematical equations.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A celebratory animation of a glowing pathway lighting up step-by-step, leading to a grand, glowing portal labeled 'Mastery'.",
      "questions": [
        {
          "id": "advanced-math-401-l10-q1",
          "text": "Which statement best explains model assumptions in Advanced Math?",
          "skillId": "advanced-math-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The final proven theorems of a capstone project."
            },
            {
              "id": "b",
              "text": "The absolute truths that govern all physical laws without exception."
            },
            {
              "id": "c",
              "text": "Simplifications made to translate a complex real-world problem into a solvable mathematical equation."
            },
            {
              "id": "d",
              "text": "The variables that we are trying to optimize."
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "advanced-math-401-l10-q2",
          "text": "What is the best first step when analyzing proof structure?",
          "skillId": "advanced-math-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Start writing equations randomly until a pattern emerges."
            },
            {
              "id": "b",
              "text": "Clearly state the given information and the final conclusion to be proven."
            },
            {
              "id": "c",
              "text": "Assume the conclusion is true and work backward exclusively."
            },
            {
              "id": "d",
              "text": "Skip defining the axioms and jump straight to the calculation."
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "advanced-math-401-l10-q3",
          "text": "Which option shows strong reasoning when constructing a formal proof?",
          "skillId": "advanced-math-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Justifying every step of a calculation with a specific mathematical property or theorem."
            },
            {
              "id": "b",
              "text": "Using a specific numerical example to prove a general rule."
            },
            {
              "id": "c",
              "text": "Leaving out steps that seem 'obvious' to save time."
            },
            {
              "id": "d",
              "text": "Relying on visual diagrams without algebraic support."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l10-q4",
          "text": "Why is spaced review useful for Advanced Math mastery?",
          "skillId": "advanced-math-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It is a method for calculating the area under a curve."
            },
            {
              "id": "b",
              "text": "It eliminates the need to practice new problem types."
            },
            {
              "id": "c",
              "text": "It is a type of optimization constraint."
            },
            {
              "id": "d",
              "text": "It strengthens memory and helps transfer problem-solving skills over time."
            }
          ],
          "correctOptionId": "d"
        }
      ],
      "interactiveActivities": [
        {
          "id": "advanced-math-401-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Advanced Math IV",
          "description": "Match each error signal to the strongest correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Confusion about model assumptions"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to proof structure"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone advanced math reasoning under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create a one-step concept summary with one worked example"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
              },
              {
                "id": "r3",
                "label": "Retest the same target with a short timed sprint"
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
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
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
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "advanced-math-401-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "advanced-math-401-l11",
      "title": "Applied Advanced Math Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic art studio where canvases display complex, glowing mathematical graphs and 3D models instead of paintings.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An interactive point-of-view animation where the viewer selects a glowing 'weak pattern' orb, places it into a 'correction machine', and watches it transform into a perfect, glowing geometric shape.",
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using proof structure.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "advanced-math-401-l11-ia1",
          "type": "sorting_buckets",
          "title": "Transfer Ladder",
          "description": "Sort actions into Diagnose, Fix, and Transfer phases.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "diagnose",
                "label": "Diagnose"
              },
              {
                "id": "fix",
                "label": "Fix"
              },
              {
                "id": "transfer",
                "label": "Transfer"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Tag repeated mistakes in optimization constraints",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on quantitative validation",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-401-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "advanced-math-401-l12",
      "title": "Advanced Math IV Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing digital lock opening as a complex mathematical equation is solved, revealing a bright light inside.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced sequence of a digital clock ticking down while glowing math problems are solved rapidly and correctly, ending with a '100% Mastery' screen.",
      "questions": [
        {
          "id": "advanced-math-401-l12-q1",
          "text": "Which statement best explains model assumptions in Advanced Math?",
          "skillId": "advanced-math-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "They guarantee that the mathematical model will perfectly predict the future."
            },
            {
              "id": "b",
              "text": "They define the boundaries where the model is accurate and where it breaks down."
            },
            {
              "id": "c",
              "text": "They are the final outputs of an optimization function."
            },
            {
              "id": "d",
              "text": "They eliminate the need for quantitative validation."
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "advanced-math-401-l12-q2",
          "text": "What is the best first step when analyzing quantitative validation?",
          "skillId": "advanced-math-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Assuming the calculator's output is always 100% correct."
            },
            {
              "id": "b",
              "text": "Ignoring the units of measurement to simplify the final answer."
            },
            {
              "id": "c",
              "text": "Checking if the final numerical answer makes logical sense in the context of the original problem."
            },
            {
              "id": "d",
              "text": "Only validating the answer if the numbers are integers."
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "advanced-math-401-l12-q3",
          "text": "Which option shows strong reasoning when evaluating a mathematical model?",
          "skillId": "advanced-math-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Acknowledging the limitations of a model and explaining how those limits affect the final answer."
            },
            {
              "id": "b",
              "text": "Claiming the model is universally applicable to all scenarios."
            },
            {
              "id": "c",
              "text": "Hiding any data points that contradict the model's predictions."
            },
            {
              "id": "d",
              "text": "Using overly complex jargon to mask potential errors in the calculation."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l12-q4",
          "text": "Why is spaced review useful for Advanced Math mastery?",
          "skillId": "advanced-math-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It is a specific type of geometric proof."
            },
            {
              "id": "b",
              "text": "It reduces the cognitive load required to learn new concepts."
            },
            {
              "id": "c",
              "text": "It is only useful for students who struggle with basic math."
            },
            {
              "id": "d",
              "text": "It strengthens memory and helps transfer problem-solving skills over time."
            }
          ],
          "correctOptionId": "d"
        }
      ],
      "interactiveActivities": [
        {
          "id": "advanced-math-401-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Advanced Math IV Mastery Applied Retest",
          "description": "Match each error signal to the strongest correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Confusion about model assumptions"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to quantitative validation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone advanced math reasoning under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create a one-step concept summary with one worked example"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
              },
              {
                "id": "r3",
                "label": "Retest the same target with a short timed sprint"
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
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
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
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "advanced-math-401-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "advanced-math-401-l13",
      "title": "Advanced Math Scenario Lab",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A high-tech laboratory with glowing holographic screens showing real-world scenarios like rocket trajectories and population growth graphs.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic animation of a rocket launch, with glowing mathematical overlays showing the real-time calculations, assumptions, and trajectory adjustments being made.",
      "chunks": [
        {
          "id": "advanced-math-401-l13-c1",
          "title": "Mission Briefing: Real-World Math",
          "content": "Welcome to the Scenario Lab! Here, we combine everything: models, proof structures, and quantitative validation. We aren't just solving textbook problems anymore. We are looking at real-life challenges, like predicting population growth or calculating the trajectory of a rocket. This is where math becomes a superpower."
        },
        {
          "id": "advanced-math-401-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle a massive scenario, you have to break it down. Don't try to solve the whole thing at once. For each decision point, pick one specific strategy. Are you optimizing for cost? Are you proving a structural limit? Planning your approach keeps you organized when the math gets complicated."
        },
        {
          "id": "advanced-math-401-l13-c3",
          "title": "Execute and Justify",
          "content": "Time to launch your plan! As you apply your strategies, you must explain every step. Use clear mathematical evidence to support your choices—no random guessing allowed. If you change a variable, justify why. This builds an undeniable argument that your solution is the correct one."
        },
        {
          "id": "advanced-math-401-l13-c4",
          "title": "Evaluate the Outcome",
          "content": "Once you have an answer, the job isn't done. Evaluate the outcome. Did your rocket reach orbit, or did your model fail? Compare your results to your original goals. Identify what worked and what needs adjustment. This reflection is the final step in true mathematical mastery."
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-401-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "advanced-math-401-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "advanced-math-401-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "advanced-math-401-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a completely new context."
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-401-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting model assumptions, proof structure, and quantitative validation."
        },
        {
          "id": "advanced-math-401-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "advanced-math-401-l14",
      "title": "Advanced Math Coaching Clinic",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing digital clipboard with a checklist of mathematical skills, with a futuristic stethoscope resting on it.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animated digital coach (a friendly robot) analyzing a student's math test on a glowing screen, highlighting errors in red and transforming them into green checkmarks with a magic wand.",
      "metadata": {
        "prompts": [
          "Identify one repeated error pattern from your recent work.",
          "Choose the best correction routine for that pattern.",
          "Write a transfer goal for your next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "advanced-math-401-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on model assumptions setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed quantitative validation decisions"
              },
              {
                "id": "l3",
                "label": "Correct in notes but weak transfer in new tasks"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Rebuild setup steps and retest one parallel item"
              },
              {
                "id": "r2",
                "label": "Use checkpoint pacing + verify before submit"
              },
              {
                "id": "r3",
                "label": "Pair correction with one timed transfer item"
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
      "learningAids": [
        {
          "id": "advanced-math-401-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "advanced-math-401-l15",
      "title": "Advanced Math IV Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing neon finish line on a futuristic racetrack, with mathematical symbols zooming past it like race cars.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A high-speed, exhilarating point-of-view animation racing through a neon tunnel of mathematical equations, bursting through a glowing finish line into a shower of golden sparks.",
      "questions": [
        {
          "id": "advanced-math-401-l15-q1",
          "text": "Which statement best explains optimization constraints in Advanced Math?",
          "skillId": "advanced-math-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "They represent the infinite possibilities of a mathematical function."
            },
            {
              "id": "b",
              "text": "They are the primary objectives we want to maximize."
            },
            {
              "id": "c",
              "text": "They restrict the set of possible solutions to those that are practically feasible."
            },
            {
              "id": "d",
              "text": "They are the assumptions made before building the model."
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "advanced-math-401-l15-q2",
          "text": "What is the best first step when analyzing proof structure?",
          "skillId": "advanced-math-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Make sure the proof is as long and complex as possible."
            },
            {
              "id": "b",
              "text": "Ensure that the argument is logically sound and can be followed by others without ambiguity."
            },
            {
              "id": "c",
              "text": "Use only numerical examples to demonstrate the theorem."
            },
            {
              "id": "d",
              "text": "Skip the initial definitions to get straight to the core equations."
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "advanced-math-401-l15-q3",
          "text": "Which option shows strong reasoning when solving a capstone advanced math problem?",
          "skillId": "advanced-math-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Synthesizing multiple mathematical concepts to solve a novel, complex problem."
            },
            {
              "id": "b",
              "text": "Relying on a single memorized formula to solve every part of the problem."
            },
            {
              "id": "c",
              "text": "Ignoring the constraints to find a theoretical maximum."
            },
            {
              "id": "d",
              "text": "Assuming the problem has no solution if it takes more than five minutes to solve."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-401-l15-q4",
          "text": "Why is spaced review useful for Advanced Math mastery?",
          "skillId": "advanced-math-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It is a technique for optimizing linear programming models."
            },
            {
              "id": "b",
              "text": "It replaces the need for deep conceptual understanding."
            },
            {
              "id": "c",
              "text": "It is a method for validating error bounds."
            },
            {
              "id": "d",
              "text": "It strengthens memory and helps transfer problem-solving skills over time."
            }
          ],
          "correctOptionId": "d"
        }
      ],
      "interactiveActivities": [
        {
          "id": "advanced-math-401-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Advanced Math IV Mastery Mastery Sprint",
          "description": "Match each error signal to the strongest correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Confusion about optimization constraints"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to proof structure"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone advanced math reasoning under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create a one-step concept summary with one worked example"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
              },
              {
                "id": "r3",
                "label": "Retest the same target with a short timed sprint"
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
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
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
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "advanced-math-401-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
