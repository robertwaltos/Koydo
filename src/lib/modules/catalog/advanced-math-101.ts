import type { LearningModule } from "@/lib/modules/types";

export const advanced_math_101_Module: LearningModule = {
  "id": "advanced-math-101",
  "title": "Advanced Math Foundations",
  "description": "Build the foundational habits needed for advanced mathematics: mathematical language, patterns, algebra readiness, equation solving, graph interpretation, and structured problem-solving workflows.",
  "subject": "Advanced Math",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mathematics",
    "problem-solving"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Use mathematical vocabulary precisely in explanations",
    "Recognize patterns and represent them with variables",
    "Simplify expressions using operation order and structure",
    "Solve one-step and two-step equations with justification",
    "Interpret tables and coordinate graphs to identify relationships",
    "Apply ratio, proportion, and percent reasoning in context",
    "Complete multi-step word problems using clear strategy and verification"
  ],
  "lessons": [
    {
      "id": "advanced-math-101-l01",
      "title": "Mathematical Thinking and Patterns",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A vibrant, 3D animated illustration of a glowing sequence of floating numbers (1, 3, 5, 7) connected by bright neon lines, representing mathematical patterns, set in a futuristic, kid-friendly laboratory. High quality, bright colors, cinematic lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic 3D animation showing a sequence of colorful blocks stacking up in a clear pattern (1 block, then 3, then 5). A glowing magical formula appears next to them, predicting the next stack. Cinematic lighting, educational style, smooth transitions.",
      "objectives": [
        "Identify arithmetic and geometric pattern behavior",
        "Translate pattern rules into words and symbols",
        "Check whether a claimed pattern rule is valid"
      ],
      "chunks": [
        {
          "id": "advanced-math-101-l01-c1",
          "kind": "intro",
          "title": "Why Patterns Matter",
          "content": "Patterns are like secret codes that help us understand how numbers work together. When we notice how numbers change, we start to think about functions, which are special rules that describe these changes. For example, if we see that adding 2 to a number always gives us the next even number, we can create a rule based on that pattern. To become great at math, we need to look for patterns, name them, and check if our ideas work in different situations. This way, we build strong reasoning skills that will help us solve problems in the future!"
        },
        {
          "id": "advanced-math-101-l01-c2",
          "kind": "concept",
          "title": "From Sequence to Rule",
          "content": "Let's take a closer look at the sequence of numbers: 4, 7, 10, 13. If we observe carefully, we can see that each time we move from one number to the next, we are adding 3. We can explain this pattern in two different ways. One way is to say, 'Start at 4 and keep adding 3 each time.' The other way is to use a mathematical formula, which we can write as a_n = 4 + 3(n-1). In this formula, 'a_n' represents the number in the sequence at position 'n'. Both explanations tell the exact same story! By learning to express these connections in different forms, we deepen our understanding of math."
        },
        {
          "id": "advanced-math-101-l01-c3",
          "kind": "example",
          "title": "Testing a Rule",
          "content": "Let's explore a fun way to understand patterns! Imagine someone tells you that you can find the nth term of the sequence 5, 8, 11, 14... using the rule 2n + 1. To see if this rule really works, we can test it by plugging in n=1. When we do this, we get 3, but that number doesn't match our sequence's first number (which is 5). This means the rule is incorrect. Instead, let's try the rule 3n + 2. If we plug in n=1, we get 5. If n=2, we get 8. It works perfectly! Good mathematicians always check their rules against examples to make sure they are right."
        }
      ],
      "interactiveActivities": [
        {
          "id": "advanced-math-101-l01-act1",
          "type": "matching_pairs",
          "title": "Pattern Matcher",
          "description": "Match the number sequence to its secret rule!",
          "pairs": [
            {
              "left": "2, 4, 6, 8...",
              "right": "Add 2"
            },
            {
              "left": "5, 10, 15, 20...",
              "right": "Add 5"
            },
            {
              "left": "3, 9, 27, 81...",
              "right": "Multiply by 3"
            },
            {
              "left": "10, 7, 4, 1...",
              "right": "Subtract 3"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-101-l01-f1",
          "front": "Pattern rule",
          "back": "A statement or formula that describes how terms in a sequence are generated."
        },
        {
          "id": "advanced-math-101-l01-f2",
          "front": "Variable",
          "back": "A symbol (like x or n) that represents a changing or unknown quantity."
        },
        {
          "id": "advanced-math-101-l01-f3",
          "front": "Rule validation",
          "back": "Testing a proposed rule against multiple terms to confirm it fits the pattern."
        }
      ],
      "metadata": {
        "prompts": [
          "What is a pattern rule in your own words?",
          "Why is it important to test a rule with more than one number?",
          "Can you think of a pattern you see in real life?"
        ]
      },
      "learningAids": [
        {
          "id": "advanced-math-101-l01-a1",
          "type": "image",
          "title": "Pattern to Formula Map",
          "content": "Visual map showing sequence values, verbal rule, table, and symbolic expression side by side."
        }
      ]
    },
    {
      "id": "advanced-math-101-l02",
      "title": "Expressions and Order of Operations Lab",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A colorful, stylized 3D illustration of a whimsical math machine with gears labeled with +, -, x, and ÷ symbols, processing glowing numbers in a specific order. Fun, engaging, educational, high resolution.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animated sequence showing numbers and math symbols floating in mid-air. A glowing highlight moves through them, demonstrating the PEMDAS order of operations, with satisfying sound-effect-like visual pops as each part is solved.",
      "objectives": [
        "Evaluate expressions using operation order",
        "Distinguish like and unlike terms",
        "Write expressions from real-world descriptions"
      ],
      "chunks": [
        {
          "id": "advanced-math-101-l02-c1",
          "kind": "concept",
          "title": "Expression Structure",
          "content": "Expressions in math are like sentences that combine numbers, letters (which we call variables), and operations like adding or multiplying. Understanding how these parts fit together is really important because it helps us avoid mistakes. For example, we shouldn't add numbers that are not similar, like 2 apples and 3 oranges, or forget the order in which we do operations. Knowing the structure of expressions helps us solve problems correctly and communicate our math ideas clearly."
        },
        {
          "id": "advanced-math-101-l02-c2",
          "kind": "practice",
          "title": "Operation Order with Purpose",
          "content": "The order of operations is an important set of rules that helps us solve math problems in a clear and organized way. First, we look for parentheses and grouping symbols—they are like VIPs that get to go first! Next, we tackle exponents. After that, we move on to multiplication and division, solving them from left to right. Finally, we finish with addition and subtraction, also from left to right. Writing down each step as we work keeps our math neat and helps us spot any mistakes. By following these steps, we can solve math problems confidently!"
        },
        {
          "id": "advanced-math-101-l02-c3",
          "kind": "concept",
          "title": "Translating Words to Math",
          "content": "Math is its own language! When we read a word problem, we need to translate English phrases into math expressions. For example, 'three more than twice a number' becomes '2n + 3'. Words like 'sum', 'more than', or 'increased by' usually mean addition, while 'difference' or 'less than' mean subtraction. 'Product' or 'times' means multiplication, and 'quotient' or 'half' means division. Practicing this translation helps us turn real-world puzzles into math expressions we can easily solve!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "advanced-math-101-l02-act1",
          "type": "sorting_buckets",
          "title": "Like Term Sort",
          "description": "Sort each expression piece into like-term groups.",
          "buckets": [
            "x terms",
            "y terms",
            "constants"
          ],
          "items": [
            {
              "text": "5x",
              "bucket": "x terms"
            },
            {
              "text": "-2y",
              "bucket": "y terms"
            },
            {
              "text": "8",
              "bucket": "constants"
            },
            {
              "text": "3x",
              "bucket": "x terms"
            },
            {
              "text": "7y",
              "bucket": "y terms"
            },
            {
              "text": "-4",
              "bucket": "constants"
            }
          ]
        },
        {
          "id": "advanced-math-101-l02-act2",
          "type": "matching_pairs",
          "title": "Expression Translation",
          "description": "Match each phrase to its algebraic expression.",
          "pairs": [
            {
              "left": "Three more than twice n",
              "right": "2n + 3"
            },
            {
              "left": "Half of m minus 5",
              "right": "m/2 - 5"
            },
            {
              "left": "Seven times x",
              "right": "7x"
            },
            {
              "left": "Sum of p and q",
              "right": "p + q"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-101-l02-f1",
          "front": "PEMDAS",
          "back": "Parentheses, Exponents, Multiplication/Division (Left to Right), Addition/Subtraction (Left to Right)."
        },
        {
          "id": "advanced-math-101-l02-f2",
          "front": "Like Terms",
          "back": "Terms that have the exact same variables and exponents, which can be combined."
        }
      ],
      "metadata": {
        "prompts": [
          "Why can 3x + 2y not be simplified to 5xy?",
          "Evaluate 2(4 + 3) - 5 and explain each step.",
          "Write an expression for: 4 less than a number t, then doubled."
        ]
      },
      "learningAids": [
        {
          "id": "advanced-math-101-l02-a1",
          "type": "practice",
          "title": "Step-by-Step Evaluator",
          "content": "Template to write each operation-order step and self-check for sign errors."
        }
      ]
    },
    {
      "id": "advanced-math-101-l03",
      "title": "Checkpoint 1: Patterns and Expressions",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a glowing golden trophy surrounded by floating math symbols, parentheses, and puzzle pieces, symbolizing a checkpoint or achievement in learning. Bright, encouraging, high resolution, 8k.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced, energetic 3D animation of a quiz timer ticking down while colorful math equations solve themselves in the background, ending with a burst of confetti and a gold star.",
      "questions": [
        {
          "id": "advanced-math-101-l03-q1",
          "text": "Which rule matches the sequence 6, 10, 14, 18?",
          "skillId": "advanced-math-101-skill-patterns",
          "options": [
            {
              "id": "a",
              "text": "4n + 2"
            },
            {
              "id": "b",
              "text": "6n - 2"
            },
            {
              "id": "c",
              "text": "2n + 4"
            },
            {
              "id": "d",
              "text": "n + 6"
            }
          ],
          "correctOptionId": "a",
          "explanation": "For n=1, 4(1)+2=6; n=2 gives 10; n=3 gives 14."
        },
        {
          "id": "advanced-math-101-l03-q2",
          "text": "Simplify 3x + 5 + 2x - 1.",
          "skillId": "advanced-math-101-skill-expressions",
          "options": [
            {
              "id": "a",
              "text": "5x + 4"
            },
            {
              "id": "b",
              "text": "5x + 6"
            },
            {
              "id": "c",
              "text": "6x + 4"
            },
            {
              "id": "d",
              "text": "x + 4"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Combine like terms: 3x+2x=5x and 5-1=4."
        },
        {
          "id": "advanced-math-101-l03-q3",
          "text": "Evaluate 18 - 3(4 - 2).",
          "skillId": "advanced-math-101-skill-order",
          "options": [
            {
              "id": "a",
              "text": "24"
            },
            {
              "id": "b",
              "text": "12"
            },
            {
              "id": "c",
              "text": "6"
            },
            {
              "id": "d",
              "text": "2"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Parentheses first: (4-2)=2, then 3*2=6, then 18-6=12."
        },
        {
          "id": "advanced-math-101-l03-q4",
          "text": "Which expression means 'five less than twice y'?",
          "skillId": "advanced-math-101-skill-translation",
          "options": [
            {
              "id": "a",
              "text": "2y - 5"
            },
            {
              "id": "b",
              "text": "5y - 2"
            },
            {
              "id": "c",
              "text": "2(y - 5)"
            },
            {
              "id": "d",
              "text": "y/2 - 5"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Twice y is 2y, then subtract 5."
        },
        {
          "id": "advanced-math-101-l03-q5",
          "text": "In the expression 7x + 4, what is the variable?",
          "skillId": "advanced-math-101-skill-expressions",
          "options": [
            {
              "id": "a",
              "text": "7"
            },
            {
              "id": "b",
              "text": "x"
            },
            {
              "id": "c",
              "text": "4"
            },
            {
              "id": "d",
              "text": "+"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A variable is a letter or symbol used to represent an unknown quantity, which is 'x' here."
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-101-l03-a1",
          "type": "mnemonic",
          "title": "PEMDAS Check",
          "content": "Group first, then powers, then multiply/divide, then add/subtract left to right."
        }
      ]
    },
    {
      "id": "advanced-math-101-l04",
      "title": "Equation Solving Fundamentals",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a classic glowing balance scale. On one side, a glowing mystery box labeled 'X', and on the other side, brightly colored glowing orbs. Perfectly balanced, representing an algebraic equation, soft studio lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation of a balance scale. A hand removes an apple from the left side, and the scale tips. The hand quickly removes an apple from the right side, and it balances again. A glowing 'x = 5' appears with a magical chime effect.",
      "objectives": [
        "Solve one-step and two-step equations",
        "Use inverse operations consistently",
        "Verify solutions by substitution"
      ],
      "chunks": [
        {
          "id": "advanced-math-101-l04-c1",
          "kind": "concept",
          "title": "Balance Model",
          "content": "An equation is a mathematical statement that tells us that two expressions are equal, just like a balance scale that shows both sides are the exact same weight. Imagine you have a scale with a mystery box on one side and a pile of apples on the other. If you add one apple to the pile, you must also add one apple to the other side to keep it balanced. This idea applies to equations too! Whatever operation we perform on one side of the equation, we must do the exact same to the other side to keep everything equal. By visualizing equations as balance scales, we can approach solving them with confidence and clarity."
        },
        {
          "id": "advanced-math-101-l04-c2",
          "kind": "example",
          "title": "Two-Step Example",
          "content": "Let's solve the equation 3x + 7 = 22 together! First, we need to isolate the term with the variable. We do this by getting rid of the 7 on the left side. We subtract 7 from both sides, which gives us 3x = 15. Now, to find x, we divide both sides by 3, which tells us that x = 5. To make sure we did it right, we can check our answer by plugging it back into the original equation: 3(5) + 7 should equal 22. Since 15 + 7 is indeed 22, our answer is correct!"
        },
        {
          "id": "advanced-math-101-l04-c3",
          "kind": "recap",
          "title": "Error Prevention",
          "content": "When solving equations, it's easy to make mistakes, especially with negative signs or forgetting to do the same operation to both sides. To avoid these errors, it's helpful to write each step clearly, one line at a time directly underneath the previous step. After we find our answer, we should always substitute it back into the original equation to see if it makes sense. This careful approach makes you a bulletproof problem solver!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "advanced-math-101-l04-act1",
          "type": "sorting_buckets",
          "title": "Inverse Operations",
          "description": "Sort the equations by the first operation you would use to solve them!",
          "buckets": [
            "Use Subtraction",
            "Use Division",
            "Use Addition"
          ],
          "items": [
            {
              "text": "x + 5 = 10",
              "bucket": "Use Subtraction"
            },
            {
              "text": "3x = 12",
              "bucket": "Use Division"
            },
            {
              "text": "x - 4 = 7",
              "bucket": "Use Addition"
            },
            {
              "text": "x + 8 = 20",
              "bucket": "Use Subtraction"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-101-l04-f1",
          "front": "Inverse operation",
          "back": "An operation that undoes another operation, such as addition and subtraction, or multiplication and division."
        },
        {
          "id": "advanced-math-101-l04-f2",
          "front": "Equation check",
          "back": "Substituting your final solution back into the original equation to confirm both sides are equal."
        },
        {
          "id": "advanced-math-101-l04-f3",
          "front": "Balance principle",
          "back": "Applying identical operations to both sides of an equation to preserve equality."
        }
      ],
      "metadata": {
        "prompts": [
          "Why do we use inverse operations to solve equations?",
          "What is the first step to solve 4x - 2 = 10?",
          "How can you prove your answer to an equation is correct?"
        ]
      },
      "learningAids": [
        {
          "id": "advanced-math-101-l04-a1",
          "type": "image",
          "title": "Equation Balance Diagram",
          "content": "Visual showing valid and invalid transformations when solving equations."
        }
      ]
    },
    {
      "id": "advanced-math-101-l05",
      "title": "Graphs, Tables, and Relationships Lab",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D isometric view of a colorful, glowing coordinate plane where a bright neon line connects several glowing data points. A futuristic, fun data lab setting with holographic tables.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation showing a data table transforming into a graph. The numbers fly out of the table and land on a coordinate grid, creating glowing dots that are then connected by a swooping, bright neon line.",
      "objectives": [
        "Read coordinate points correctly",
        "Connect table patterns to graph behavior",
        "Describe linear trends in context"
      ],
      "chunks": [
        {
          "id": "advanced-math-101-l05-c1",
          "kind": "concept",
          "title": "Representations of Relationships",
          "content": "In mathematics, we can show relationships in several ways: using words, tables, equations, and graphs. Each of these forms gives us a different perspective on how two things are connected. Learning to move between these different representations is like learning to speak multiple languages! For instance, imagine we have a table that lists numbers that increase by the exact same amount each time. If we were to create a graph from this table, we would see a perfectly straight line. This straight line represents a constant rate of change, meaning the relationship between the two quantities is consistent and predictable."
        },
        {
          "id": "advanced-math-101-l05-c2",
          "kind": "practice",
          "title": "Reading Graph Features",
          "content": "When we examine graphs, we can find several important features that tell us a story. One key feature is where the graph crosses the axes, which we call the intercepts. The y-intercept often tells us the starting point of the data. Another feature to look for is the direction of the graph: does it go up (increasing), or does it go down (decreasing)? Lastly, we should pay attention to how steep the graph is, known as the slope. A steep slope shows a rapid change, while a gentle slope indicates a slow change. By understanding these features, we can better interpret real-world situations, like how fast a car is traveling or how much money we are saving over time."
        },
        {
          "id": "advanced-math-101-l05-c3",
          "kind": "concept",
          "title": "From Tables to Rules",
          "content": "When we look at a table of values, we can often spot a rule that connects the 'x' values to the 'y' values. If 'x' goes up by 1 and 'y' always goes up by 3, we know our rule involves multiplying 'x' by 3! If 'x' is 1 and 'y' is 4, the rule might be 'y = 3x + 1'. Finding this rule is like being a math detective. Once we have the rule, we can predict any 'y' value, even if 'x' is a million, without having to draw a giant table or graph!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "advanced-math-101-l05-act1",
          "type": "matching_pairs",
          "title": "Table-to-Rule Match",
          "description": "Match each table pattern to the best algebraic rule.",
          "pairs": [
            {
              "left": "x:1,2,3 ; y:4,7,10",
              "right": "y = 3x + 1"
            },
            {
              "left": "x:0,1,2 ; y:5,5,5",
              "right": "y = 5"
            },
            {
              "left": "x:1,2,3 ; y:2,4,6",
              "right": "y = 2x"
            },
            {
              "left": "x:1,2,3 ; y:1,4,9",
              "right": "nonlinear (quadratic pattern)"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-101-l05-f1",
          "front": "y-intercept",
          "back": "The point where a line crosses the y-axis, often representing the starting value in a real-world scenario."
        },
        {
          "id": "advanced-math-101-l05-f2",
          "front": "Slope",
          "back": "The steepness of a line, calculated as the 'rise' over the 'run' (change in y divided by change in x)."
        }
      ],
      "metadata": {
        "prompts": [
          "How do you tell from a table that a relationship is linear?",
          "What does a y-intercept represent in a real-world story?",
          "Give one example of a nonlinear pattern from everyday life."
        ]
      },
      "learningAids": [
        {
          "id": "advanced-math-101-l05-a1",
          "type": "practice",
          "title": "Graph Reading Guide",
          "content": "Checklist for slope direction, intercept meaning, and trend interpretation in context."
        }
      ]
    },
    {
      "id": "advanced-math-101-l06",
      "title": "Checkpoint 2: Equations and Graphs",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a glowing target with an arrow in the center, surrounded by floating graphs, grids, and equations. Represents accuracy and passing a checkpoint. Vibrant, encouraging, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animated sequence of a rocket launching upward along a line graph, hitting various glowing checkpoints, symbolizing progress and success in math, leaving a trail of sparkles.",
      "questions": [
        {
          "id": "advanced-math-101-l06-q1",
          "text": "Solve: 2x + 9 = 21.",
          "skillId": "advanced-math-101-skill-equations",
          "options": [
            {
              "id": "a",
              "text": "x = 6"
            },
            {
              "id": "b",
              "text": "x = 7"
            },
            {
              "id": "c",
              "text": "x = 12"
            },
            {
              "id": "d",
              "text": "x = 15"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Subtract 9 to get 2x=12, divide by 2 gives x=6."
        },
        {
          "id": "advanced-math-101-l06-q2",
          "text": "A line through points (1,3) and (2,5) has what slope?",
          "skillId": "advanced-math-101-skill-graphs",
          "options": [
            {
              "id": "a",
              "text": "1"
            },
            {
              "id": "b",
              "text": "2"
            },
            {
              "id": "c",
              "text": "3"
            },
            {
              "id": "d",
              "text": "-2"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Slope = rise/run = (5-3)/(2-1)=2."
        },
        {
          "id": "advanced-math-101-l06-q3",
          "text": "Which table likely represents a linear rule?",
          "skillId": "advanced-math-101-skill-graphs",
          "options": [
            {
              "id": "a",
              "text": "y values: 1,4,9,16"
            },
            {
              "id": "b",
              "text": "y values: 3,6,9,12"
            },
            {
              "id": "c",
              "text": "y values: 2,3,5,8"
            },
            {
              "id": "d",
              "text": "y values: 5,5,6,8"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Constant change (+3 each step) indicates linear behavior."
        },
        {
          "id": "advanced-math-101-l06-q4",
          "text": "What is the best final step after solving any equation?",
          "skillId": "advanced-math-101-skill-equations",
          "options": [
            {
              "id": "a",
              "text": "Round answer to nearest ten"
            },
            {
              "id": "b",
              "text": "Plug solution into original equation"
            },
            {
              "id": "c",
              "text": "Change variable name"
            },
            {
              "id": "d",
              "text": "Graph unrelated points"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Substitution confirms the solution is valid in the original equation."
        },
        {
          "id": "advanced-math-101-l06-q5",
          "text": "If a graph shows a car's distance over time, what does the y-intercept represent?",
          "skillId": "advanced-math-101-skill-graphs",
          "options": [
            {
              "id": "a",
              "text": "The car's top speed"
            },
            {
              "id": "b",
              "text": "The total distance traveled"
            },
            {
              "id": "c",
              "text": "The starting position at time zero"
            },
            {
              "id": "d",
              "text": "The time it takes to stop"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The y-intercept occurs where x (time) is 0, representing the initial starting position."
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-101-l06-a1",
          "type": "mnemonic",
          "title": "Solve-Check",
          "content": "Isolate variable, then substitute back to confirm."
        }
      ]
    },
    {
      "id": "advanced-math-101-l07",
      "title": "Capstone: Multi-Step Math Modeling",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a bustling school bake sale or fundraiser, with a glowing holographic chart above the table showing profits going up. Fun, relatable, vibrant colors, Pixar style.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation showing a split screen: on one side, kids selling tickets at a booth; on the other side, a dynamic bar chart growing taller as coins drop into a piggy bank, illustrating the break-even point with a celebratory glow.",
      "objectives": [
        "Apply patterns, expressions, equations, and graphs together",
        "Explain reasoning in complete mathematical sentences",
        "Verify final answers against context constraints"
      ],
      "chunks": [
        {
          "id": "advanced-math-101-l07-c1",
          "kind": "practice",
          "title": "Capstone Scenario",
          "content": "Imagine your school's robotics club is organizing a fundraiser where you will be selling tickets to a tech showcase. To make this event happen, there is a fixed cost you need to pay upfront for renting the hall, which is called the setup fee. Additionally, for every ticket you sell, you earn revenue. To find out how many tickets you need to sell in order to start making a profit, you can create a mathematical equation! Once you have your equation, you can solve it to find the 'break-even point'—the exact moment your earnings equal your costs. After that, you can create a graph to visualize exactly when you will start to earn money from your ticket sales!"
        },
        {
          "id": "advanced-math-101-l07-c2",
          "kind": "recap",
          "title": "Quality Criteria",
          "content": "To create strong solutions in math, it's important to clearly define what each variable represents (like letting 't' equal the number of tickets). Show how you set up your equations, and explain each step you take. When you interpret the features of your graph, make sure to describe them in words that relate back to the real world. Finally, always check if your results make sense in the context of the problem. For example, you can't sell half a ticket! This thorough approach will help you become a master problem solver."
        },
        {
          "id": "advanced-math-101-l07-c3",
          "kind": "concept",
          "title": "Presenting Your Findings",
          "content": "The final step of any great math project is sharing what you've learned! When you present your mathematical model, you want to show your equations, your graphs, and your final answer clearly. But more importantly, you need to explain what those numbers mean in real life. Did the robotics club make enough money? How many more tickets do they need to buy a new robot part? Being able to explain the 'why' and 'how' behind your math makes you not just a student, but a true mathematician and problem solver!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "advanced-math-101-l07-act1",
          "type": "sorting_buckets",
          "title": "Fundraiser Variables",
          "description": "Sort the fundraiser elements into the correct mathematical categories.",
          "buckets": [
            "Fixed Cost (y-intercept)",
            "Rate of Change (Slope)",
            "Variable (x)"
          ],
          "items": [
            {
              "text": "$50 Hall Rental",
              "bucket": "Fixed Cost (y-intercept)"
            },
            {
              "text": "$5 per ticket",
              "bucket": "Rate of Change (Slope)"
            },
            {
              "text": "Number of tickets sold",
              "bucket": "Variable (x)"
            },
            {
              "text": "$100 for robot parts",
              "bucket": "Fixed Cost (y-intercept)"
            },
            {
              "text": "$2 per cookie sold",
              "bucket": "Rate of Change (Slope)"
            },
            {
              "text": "Number of cookies sold",
              "bucket": "Variable (x)"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-101-l07-f1",
          "front": "Break-even point",
          "back": "The point where total costs equal total revenue, meaning there is zero profit but also zero loss."
        },
        {
          "id": "advanced-math-101-l07-f2",
          "front": "Mathematical Modeling",
          "back": "The process of using math equations, graphs, and tables to represent and solve real-world problems."
        }
      ],
      "metadata": {
        "prompts": [
          "Define your variables before writing equations.",
          "Explain what the intercept means in this fundraiser context.",
          "State one way you checked your final answer."
        ]
      },
      "learningAids": [
        {
          "id": "advanced-math-101-l07-a1",
          "type": "practice",
          "title": "Modeling Checklist",
          "content": "Define, represent, solve, interpret, verify."
        }
      ]
    }
  ]
};
