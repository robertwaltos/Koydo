import type { LearningModule } from "@/lib/modules/types";

export const AdvancedMath101Module: LearningModule = {
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
  "version": "2.0.0",
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
          "content": "Patterns are like secret codes that help us understand how numbers work together. When we notice how numbers change, we start to think about functions, which are special rules that describe these changes. For example, if we see that adding 2 to a number always gives us the next even number, we can create a rule based on that pattern. To become great at math, we need to look for patterns, name them, and check if our ideas work in different situations. This way, we build strong reasoning skills that will help us solve problems in the future. By practicing this, we can become better at recognizing patterns not just in math, but in everyday life too!"
        },
        {
          "id": "advanced-math-101-l01-c2",
          "kind": "concept",
          "title": "From Sequence to Rule",
          "content": "Let's take a closer look at the sequence of numbers: 4, 7, 10, 13. If we observe carefully, we can see that each time we move from one number to the next, we are adding 3. This means that to get from 4 to 7, we add 3; to get from 7 to 10, we add 3 again; and finally, to get from 10 to 13, we add 3 once more. We can explain this pattern in two different ways. One way is to say, 'Start at 4 and keep adding 3 each time to find the next number.' The other way is to use a mathematical formula, which we can write as a_n = 4 + 3(n-1). In this formula, 'a_n' represents the number in the sequence at position 'n'. Both explanations tell the same story about how these numbers are related to each other. By learning to express these connections in different forms, we can deepen our understanding of math and see how numbers work together. This skill is very important as we explore more complex math concepts in the future."
        },
        {
          "id": "advanced-math-101-l01-c3",
          "kind": "example",
          "title": "Testing a Rule",
          "content": "Let's explore a fun way to understand patterns in math! Imagine someone tells you that you can find the nth term of the sequence 5, 8, 11, 14... using the rule 2n + 1. To see if this rule really works, we can test it by plugging in n=1. When we do this, we get 3, but that number doesn't match any of the numbers in our sequence. This means the rule is not correct for our sequence. Instead, we can find a better rule, which is 3n + 2. This new rule works perfectly! Remember, good mathematicians always check their rules against examples to make sure they are right before they accept them. It's like being a detective in math, looking for clues to solve the puzzle!"
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
          "back": "A symbol that represents a changing or unknown quantity."
        },
        {
          "id": "advanced-math-101-l01-f3",
          "front": "Rule validation",
          "back": "Testing a proposed rule against multiple terms to confirm it fits."
        }
      ],
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
          "content": "Expressions in math are like sentences that combine numbers, letters (which we call variables), and operations like adding or multiplying. Understanding how these parts fit together is really important because it helps us avoid mistakes. For example, we shouldn't add numbers that are not similar, like 2 apples and 3 oranges, or forget the order in which we do operations. Knowing the structure of expressions helps us solve problems correctly.\nContext recap: Expressions in math are like sentences that combine numbers, letters (which we call variables), and operations like adding or multiplying. Understanding how these parts fit together is really important because it helps us avoid mistakes. For example, we shouldn't add numbers that are not similar, like 2 apples and 3 oranges, or forget the order in which we do operations. Knowing the structure of expressions helps us solve problems correctly."
        },
        {
          "id": "advanced-math-101-l02-c2",
          "kind": "practice",
          "title": "Operation Order with Purpose",
          "content": "The order of operations is an important set of rules that helps us solve math problems in a clear and organized way. When we see a math expression, we need to follow these steps to make sure we get the right answer. First, we look for parentheses and grouping symbols, which are like little helpers that tell us to do those calculations first. Next, we tackle exponents, which are numbers that show how many times to multiply a number by itself. After that, we move on to multiplication and division, which are done from left to right. Finally, we finish with addition and subtraction, also from left to right. It’s really helpful to write down each step as we work through a problem. This practice not only keeps our work neat but also helps us spot any mistakes, like forgetting to add or subtract correctly. By following these steps, we can solve math problems confidently and accurately!"
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
          "content": "An equation is a mathematical statement that tells us that two expressions are equal, just like a balance scale that shows both sides are the same weight. Imagine you have a scale with a box on one side and a pile of apples on the other. If you add one apple to the pile, you must also add one box to the other side to keep it balanced. This idea applies to equations too! Whatever operation we perform on one side of the equation, we must do the same to the other side to keep everything equal. This way, we can find the value of the unknown variable, making it easier to solve the equation and understand how different expressions relate to each other. By visualizing equations as balance scales, we can approach solving them with confidence and clarity."
        },
        {
          "id": "advanced-math-101-l04-c2",
          "kind": "example",
          "title": "Two-Step Example",
          "content": "Let's solve the equation 3x + 7 = 22 together! First, we need to get rid of the 7 on the left side by subtracting 7 from both sides. This gives us 3x = 15. Now, to find x, we divide both sides by 3, which tells us that x = 5. To make sure we did it right, we can check our answer by plugging it back into the original equation: 3(5) + 7 should equal 22, and it does!\nContext recap: Let's solve the equation 3x + 7 = 22 together! First, we need to get rid of the 7 on the left side by subtracting 7 from both sides. This gives us 3x = 15. Now, to find x, we divide both sides by 3, which tells us that x = 5.\nWhy this matters: Two-Step Example helps learners in Advanced Math connect ideas from Advanced Math Foundations to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "advanced-math-101-l04-c3",
          "kind": "recap",
          "title": "Error Prevention",
          "content": "When solving equations, it's easy to make mistakes, especially with signs or forgetting to check our work. To avoid these errors, it's helpful to write each step clearly, one line at a time. After we find our answer, we should substitute it back into the original equation to see if it makes sense. This careful approach can help us catch mistakes before they become a problem.\nContext recap: When solving equations, it's easy to make mistakes, especially with signs or forgetting to check our work. To avoid these errors, it's helpful to write each step clearly, one line at a time. After we find our answer, we should substitute it back into the original equation to see if it makes sense. This careful approach can help us catch mistakes before they become a problem."
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-101-l04-f1",
          "front": "Inverse operation",
          "back": "An operation that undoes another operation, such as + and -, or * and /."
        },
        {
          "id": "advanced-math-101-l04-f2",
          "front": "Equation check",
          "back": "Substitute solution back into original equation to confirm equality holds."
        },
        {
          "id": "advanced-math-101-l04-f3",
          "front": "Balance principle",
          "back": "Apply identical operations to both sides to preserve equality."
        }
      ],
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
          "content": "In mathematics, we can show relationships in several ways, including using words, tables, equations, and graphs. Each of these forms gives us a different perspective on how two things are connected. Learning to move between these different representations is an important skill that can help us understand math better. For instance, imagine we have a table that lists numbers that increase by the same amount each time. If we were to create a graph from this table, we would see a straight line. This straight line represents a constant slope, which means that the relationship between the two quantities is consistent and predictable. Understanding this concept allows us to analyze data more effectively and see patterns in the information we are studying."
        },
        {
          "id": "advanced-math-101-l05-c2",
          "kind": "practice",
          "title": "Reading Graph Features",
          "content": "When we examine graphs, we can find several important features that tell us a lot about the information being presented. One key feature is where the graph crosses the axes, which we call the intercepts. This tells us the starting point of the data. Another feature to look for is the direction of the graph: does it go up, which means things are increasing, or does it go down, indicating a decrease? Lastly, we should pay attention to how steep the graph is, known as the slope. A steep slope shows a rapid change, while a gentle slope indicates a slow change. By understanding these features, we can better interpret real-world situations, such as how costs can rise or fall over time, how far we travel in a certain period, or how temperatures change throughout the day. This skill is very important as it helps us solve everyday problems and make informed decisions based on data."
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
          "text": "Best final step after solving any equation?",
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
          "content": "Imagine your school is organizing a fun fundraiser where you will be selling tickets to help raise money for a special project. To make this event happen, there is a fixed cost that you need to pay upfront, which is called the setup fee. Additionally, for every ticket you sell, there is a cost that you will charge people. To find out how many tickets you need to sell in order to start making money, you can create a mathematical equation that reflects this situation. Once you have your equation, you can solve it to find out the break-even point, which is when your earnings equal your costs. After that, you can create a graph to show the relationship between the number of tickets sold and the profit you make. This graph will help you visualize exactly when you will start to earn money from your ticket sales, making it easier to understand your fundraising goals!"
        },
        {
          "id": "advanced-math-101-l07-c2",
          "kind": "recap",
          "title": "Quality Criteria",
          "content": "To create strong solutions in math, it's important to clearly define what each variable represents, show how you set up your equations, and explain each step you take. Additionally, when you interpret the features of your graph, make sure to describe them in words. Finally, always check if your results make sense in the context of the problem. This thorough approach will help you become a better problem solver.\nContext recap: To create strong solutions in math, it's important to clearly define what each variable represents, show how you set up your equations, and explain each step you take. Additionally, when you interpret the features of your graph, make sure to describe them in words. Finally, always check if your results make sense in the context of the problem. This thorough approach will help you become a better problem solver."
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
