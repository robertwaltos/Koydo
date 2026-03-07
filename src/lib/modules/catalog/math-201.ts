import type { LearningModule } from "@/lib/modules/types";

export const math_201_Module: LearningModule = {
  "id": "math-201",
  "title": "Algebra and Quantitative Reasoning II",
  "description": "An intermediate math course exploring algebraic structures, linear models, proportional reasoning, systems of equations, and how to make smart quantitative decisions.",
  "subject": "Math",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "algebra",
    "modeling"
  ],
  "minAge": 11,
  "maxAge": 16,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Confidently work with algebraic expressions and solve multi-step equations.",
    "Show and understand linear relationships using tables, graphs, and equations.",
    "Use proportional reasoning to solve real-world problems involving rates and scale.",
    "Solve systems of linear equations and explain what the solution means.",
    "Use inequalities to represent limits and find possible solutions.",
    "Check if answers make sense by looking at units, assumptions, and the real-world context."
  ],
  "lessons": [
    {
      "id": "math-201-l01",
      "title": "The Structure of Equations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "math-201-l01-a1",
          "type": "worksheet",
          "title": "Equation Solving Practice",
          "content": "Downloadable worksheet with practice problems on simplifying expressions and solving multi-step equations."
        }
      ],
      "chunks": [
        {
          "id": "math-201-l01-c0",
          "kind": "introduction",
          "title": "Welcome to Equation Solving!",
          "content": "In this lesson, we'll move beyond just getting the right answer. We'll learn to see the hidden structure in algebraic expressions and master a reliable strategy for solving any equation that comes our way.",
          "visualPrompt": "An animation of puzzle pieces with variables and numbers on them clicking together to form an equation."
        },
        {
          "id": "math-201-l01-c1",
          "kind": "concept",
          "title": "Seeing the Structure in Expressions",
          "content": "Think of algebra as a language. Two expressions can look different but mean the exact same thing, like saying 'hello' and 'hi'. Recognizing these 'equivalent expressions' helps us simplify problems and see connections between ideas. It's like having a map that shows different roads to the same destination.",
          "visualPrompt": "Side-by-side comparison of a complex Lego structure and a simpler, more elegant one built with the same number of pieces, representing equivalent expressions."
        },
        {
          "id": "math-201-l01-c2",
          "kind": "concept",
          "title": "A Strategy for Solving Equations",
          "content": "To solve an equation, our goal is to get the variable by itself. We do this using a reliable strategy: using inverse operations, like addition and subtraction, to undo what's being done to the variable. We must always do the same thing to both sides of the equation to keep it balanced. This ensures our final answer is correct.",
          "visualPrompt": "An animation of a classic balance scale. As an operation is performed on one side (e.g., adding a '3' block), the same block is added to the other side to keep the scale level."
        },
        {
          "id": "math-201-l01-c3",
          "kind": "recap",
          "title": "Checking Your Work",
          "content": "How can you be 100% sure your answer is right? By checking it! We do this by substituting the value we found for the variable back into the original equation. If both sides are equal, we know our solution is correct. This simple habit helps catch mistakes and builds confidence.",
          "visualPrompt": "A checkmark icon appearing over an equation after a solution is plugged in and both sides are shown to be equal (e.g., 10 = 10)."
        }
      ],
      "flashcards": [
        {
          "id": "math-201-l01-f1",
          "front": "What are equivalent expressions?",
          "back": "Expressions that look different but always have the same value."
        },
        {
          "id": "math-201-l01-f2",
          "front": "What are inverse operations?",
          "back": "Opposite operations that undo each other, like addition and subtraction."
        },
        {
          "id": "math-201-l01-f3",
          "front": "What is the distributive property?",
          "back": "A rule to multiply a single term by two or more terms inside parentheses. Example: a(b + c) = ab + ac."
        }
      ]
    },
    {
      "id": "math-201-l02",
      "title": "Linear Functions Lab",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "math-201-l02-a1",
          "type": "glossary",
          "title": "Key Terms Glossary",
          "content": "A quick reference for terms like 'slope', 'y-intercept', and 'rate of change'."
        }
      ],
      "chunks": [
        {
          "id": "math-201-l02-c0",
          "kind": "introduction",
          "title": "Exploring Linear Relationships",
          "content": "Many things in the real world change at a steady rate, like the cost of buying multiple items or the distance you travel at a constant speed. In this lab, we'll explore these 'linear' relationships and learn how to represent them with tables, graphs, and equations.",
          "visualPrompt": "A split screen showing a person walking on a treadmill at a steady pace, a graph with a straight line going up, and a table of time vs. distance."
        },
        {
          "id": "math-201-l02-c1",
          "kind": "concept",
          "title": "The Power of a Constant Rate",
          "content": "Linear models are powerful because they describe a constant rate of change. This steady rate is called the 'slope'. Understanding the slope (how steep the line is) and the y-intercept (where the line starts) is the key to using linear functions to describe and predict real-world situations.",
          "visualPrompt": "An animation of a ski lift moving up a mountain. The slope of the cable is highlighted, and the starting point at the base is labeled as the y-intercept."
        },
        {
          "id": "math-201-l02-c2",
          "kind": "practice",
          "title": "Switching Between Representations",
          "content": "A strong math thinker can easily switch between different ways of seeing the same information, like moving from an equation to a graph, or a graph to a table. Being fluent in these 'representations' helps us see patterns and understand the story the data is telling us.",
          "visualPrompt": "An interactive diagram where a user can drag a point on a line graph, and a corresponding data table and the slope-intercept equation (y=mx+b) update in real-time."
        },
        {
          "id": "math-201-l02-c3",
          "kind": "recap",
          "title": "Lab Summary",
          "content": "Today, you practiced translating between the different forms of linear relationships. You saw how the slope and y-intercept are the key ingredients in an equation, a table of values, and the graph of a line. This skill is essential for modeling the world around you.",
          "visualPrompt": "A summary graphic showing an equation (y=2x+1), a small table of values for it, and its corresponding line graph, all connected with arrows."
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-201-l02-act1",
          "type": "matching_pairs",
          "title": "Representation Match-Up",
          "description": "Match the linear equation or graph feature to its correct interpretation.",
          "pairs": [
            {
              "left": "y = 3x + 5",
              "right": "A line with a slope of 3 and a starting value of 5."
            },
            {
              "left": "A horizontal line on a graph",
              "right": "A rate of change of zero."
            },
            {
              "left": "A line that goes down from left to right",
              "right": "A negative slope."
            },
            {
              "left": "The point where the line crosses the y-axis",
              "right": "The initial value, or 'b' in y=mx+b."
            }
          ]
        },
        {
          "id": "math-201-l02-act2",
          "type": "scenario_practice",
          "title": "Phone Plan Modeler",
          "description": "Create and interpret a linear model for a cell phone plan with a monthly fee and a per-gigabyte data cost.",
          "instructions": [
            "Identify the fixed monthly cost (y-intercept) and the variable cost per gigabyte (slope).",
            "Write an equation to model the total monthly cost.",
            "Use your model to calculate the cost for 10 gigabytes of data."
          ]
        }
      ]
    },
    {
      "id": "math-201-l03",
      "title": "Checkpoint 1: Equations and Linear Models",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "math-201-l03-a1",
          "type": "review_sheet",
          "title": "Key Concepts Review",
          "content": "A one-page summary of key ideas from the first two lessons, including solving equations and the parts of a linear function."
        }
      ],
      "chunks": [
        {
          "id": "math-201-l03-c1",
          "kind": "introduction",
          "title": "Check Your Understanding",
          "content": "It's time to pause and check what you've learned about solving equations and working with linear models. Do your best, and remember that every question is a chance to strengthen your skills!",
          "visualPrompt": "A friendly robot character holding a clipboard with a checkmark on it."
        }
      ],
      "questions": [
        {
          "id": "math-201-l03-q1",
          "text": "Why should you substitute a potential solution back into the original equation?",
          "skillId": "math-201-skill-equations",
          "options": [
            {
              "id": "a",
              "text": "To make the equation longer"
            },
            {
              "id": "b",
              "text": "To confirm the answer is correct and the equation stays balanced"
            },
            {
              "id": "c",
              "text": "To find a different variable"
            },
            {
              "id": "d",
              "text": "To practice multiplication"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Substituting your answer back is the best way to verify that it makes the original equation true."
        },
        {
          "id": "math-201-l03-q2",
          "text": "In the equation y = mx + b, what does the 'm' represent?",
          "skillId": "math-201-skill-linear",
          "options": [
            {
              "id": "a",
              "text": "The starting amount"
            },
            {
              "id": "b",
              "text": "The rate of change (slope)"
            },
            {
              "id": "c",
              "text": "The final answer"
            },
            {
              "id": "d",
              "text": "A random number"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The 'm' value is the slope, which tells you how much 'y' changes for every one unit change in 'x'."
        },
        {
          "id": "math-201-l03-q3",
          "text": "If a line on a graph has a negative slope, what does this mean?",
          "skillId": "math-201-skill-linear",
          "options": [
            {
              "id": "a",
              "text": "As x increases, y increases"
            },
            {
              "id": "b",
              "text": "As x increases, y decreases"
            },
            {
              "id": "c",
              "text": "There is no change in y"
            },
            {
              "id": "d",
              "text": "The line is perfectly vertical"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A negative slope means the line goes down as you move from left to right, so the y-value decreases as the x-value increases."
        },
        {
          "id": "math-201-l03-q4",
          "text": "What is the most important practice for making a mathematical model believable?",
          "skillId": "math-201-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "Ignoring the units"
            },
            {
              "id": "b",
              "text": "Checking that your assumptions and units make sense in the real world"
            },
            {
              "id": "c",
              "text": "Using only one piece of data"
            },
            {
              "id": "d",
              "text": "Making the graph look nice"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A model is only useful if it connects to reality. Checking your units (like dollars, miles, etc.) and assumptions is key."
        }
      ]
    },
    {
      "id": "math-201-l04",
      "title": "Reasoning with Proportions, Rates, and Percents",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "math-201-l04-a1",
          "type": "worksheet",
          "title": "Real-World Ratios",
          "content": "Practice problems involving unit prices, map scales, and calculating percent discounts."
        }
      ],
      "chunks": [
        {
          "id": "math-201-l04-c0",
          "kind": "introduction",
          "title": "Making Smart Comparisons",
          "content": "How do you find the best deal at the store? How do maps shrink down the entire world? The answer is proportional reasoning! In this lesson, we'll explore how to use ratios, rates, and percents to make smart comparisons and solve everyday problems.",
          "visualPrompt": "An animation showing a shopper comparing two different-sized boxes of cereal, with price tags and weights displayed."
        },
        {
          "id": "math-201-l04-c1",
          "kind": "concept",
          "title": "The Power of Proportions",
          "content": "Proportional reasoning is all about relationships based on multiplication. If you double a recipe, you multiply all the ingredients by two. This simple idea is the key to understanding everything from architectural blueprints to how fast you're traveling.",
          "visualPrompt": "A visual of a recipe card for 4 cookies. An arrow points to a second card for 8 cookies, with all ingredient amounts doubled."
        },
        {
          "id": "math-201-l04-c2",
          "kind": "concept",
          "title": "Using Unit Rates to Compare",
          "content": "To make a fair comparison, we often use unit rates, which tell us how much for 'one' of something. By calculating the price per ounce or the miles per gallon, we can easily see which option is the better value. It's a powerful tool for making informed decisions.",
          "visualPrompt": "Two cars are shown. Car A has a '30 MPG' label, and Car B has a '25 MPG' label. A green checkmark appears over Car A, indicating it's more fuel-efficient."
        },
        {
          "id": "math-201-l04-c3",
          "kind": "recap",
          "title": "Percents Tell a Story",
          "content": "Percents are more than just calculations; they tell us about change relative to a starting point. A 50% discount is a big deal on a car, but not so much on a candy bar. Thinking about percents as a story of relative change helps us understand the real meaning behind the numbers.",
          "visualPrompt": "A price tag for a $20 shirt with a '20% OFF' sticker next to it. An animation shows the price changing to $16."
        }
      ],
      "flashcards": [
        {
          "id": "math-201-l04-f1",
          "front": "What is a unit rate?",
          "back": "A rate simplified so that it has a denominator of 1, like 'miles per hour' or 'dollars per pound'."
        },
        {
          "id": "math-201-l04-f2",
          "front": "What is a proportional relationship?",
          "back": "A relationship where the ratio between two quantities is always constant."
        },
        {
          "id": "math-201-l04-f3",
          "front": "What is percent change?",
          "back": "The change in an amount (increase or decrease) shown as a percentage of the original amount."
        }
      ]
    },
    {
      "id": "math-201-l05",
      "title": "Systems and Inequalities Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "math-201-l05-a1",
          "type": "tool",
          "title": "Graphing Calculator",
          "content": "An interactive graphing tool to visualize systems of equations and inequalities."
        }
      ],
      "chunks": [
        {
          "id": "math-201-l05-c0",
          "kind": "introduction",
          "title": "Juggling Multiple Conditions",
          "content": "Life is full of situations where you have to meet more than one condition at the same time, like having a budget and a shopping list. In this lab, we'll learn how to use systems of equations and inequalities to model and solve these more complex problems.",
          "visualPrompt": "A cartoon of a person juggling several items labeled 'Time', 'Money', and 'Homework'."
        },
        {
          "id": "math-201-l05-c1",
          "kind": "practice",
          "title": "Finding a Common Solution",
          "content": "Solving a system of equations means finding the one solution that makes all the equations in the system true at the same time. On a graph, this is the point where the lines intersect. It's the 'sweet spot' that satisfies all the conditions of the problem.",
          "visualPrompt": "An animation of two different colored lines being drawn on a graph. They cross at one point, which then glows and is labeled 'The Solution'."
        },
        {
          "id": "math-201-l05-c2",
          "kind": "concept",
          "title": "Modeling with Inequalities",
          "content": "Sometimes an exact answer isn't what we need. Instead, we need a range of possible answers. Inequalities help us describe these situations, like 'spend no more than $20' or 'you must be at least 48 inches tall'. They define a 'region' of possible solutions on a graph.",
          "visualPrompt": "A graph showing a budget line for buying snacks. The entire area below the line is shaded, representing all the affordable combinations of snacks."
        },
        {
          "id": "math-201-l05-c3",
          "kind": "recap",
          "title": "Lab Summary",
          "content": "In this lab, you modeled situations with multiple rules. You found that the solution to a system is the point that follows all the rules, and that inequalities can show us a whole range of possible solutions. These are powerful tools for making decisions when you have limits or constraints.",
          "visualPrompt": "A final summary image showing a graph with two intersecting lines (a system) on one side, and a graph with a shaded region (an inequality) on the other."
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-201-l05-act1",
          "type": "sorting_buckets",
          "title": "Equation or Inequality?",
          "description": "Drag each mathematical statement into the correct category based on whether it shows an exact relationship or a range.",
          "buckets": [
            "Equation (Exact Value)",
            "Inequality (Range of Values)"
          ],
          "items": [
            {
              "text": "The price is exactly $15.",
              "bucket": "Equation (Exact Value)"
            },
            {
              "text": "You need at least 10 hours of sleep.",
              "bucket": "Inequality (Range of Values)"
            },
            {
              "text": "The car's speed is 55 mph.",
              "bucket": "Equation (Exact Value)"
            },
            {
              "text": "Spend no more than $50.",
              "bucket": "Inequality (Range of Values)"
            }
          ]
        },
        {
          "id": "math-201-l05-act2",
          "type": "scenario_practice",
          "title": "Gaming Budget",
          "description": "You have $60 to spend on video games. New games cost $15 and used games cost $5. Model this situation.",
          "instructions": [
            "Define variables for new and used games.",
            "Write an inequality to represent your budget constraint.",
            "Find one possible combination of new and used games you can afford and test it in your inequality."
          ]
        }
      ]
    },
    {
      "id": "math-201-l06",
      "title": "Checkpoint 2: Quantitative Modeling",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "math-201-l06-a1",
          "type": "review_sheet",
          "title": "Key Concepts Summary",
          "content": "A one-page summary of proportions, systems of equations, and inequalities."
        }
      ],
      "chunks": [
        {
          "id": "math-201-l06-c1",
          "kind": "introduction",
          "title": "Check Your Modeling Skills",
          "content": "Let's see how well you can apply your new skills in proportional reasoning and solving systems. This checkpoint will test your ability to model real-world situations. Take your time and show what you know!",
          "visualPrompt": "A magnifying glass icon over a real-world problem, like a recipe or a budget."
        }
      ],
      "questions": [
        {
          "id": "math-201-l06-q1",
          "text": "What does the solution to a system of equations represent on a graph?",
          "skillId": "math-201-skill-systems",
          "options": [
            {
              "id": "a",
              "text": "A point that is on only one of the lines"
            },
            {
              "id": "b",
              "text": "The point where the lines intersect"
            },
            {
              "id": "c",
              "text": "Any point in the shaded region"
            },
            {
              "id": "d",
              "text": "Where the line crosses the y-axis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The solution to a system is the single point that satisfies all equations, which is the intersection point on a graph."
        },
        {
          "id": "math-201-l06-q2",
          "text": "When are inequalities more useful than equations for modeling a situation?",
          "skillId": "math-201-skill-inequalities",
          "options": [
            {
              "id": "a",
              "text": "When you need one exact answer"
            },
            {
              "id": "b",
              "text": "When you are describing a limit or a range of possibilities"
            },
            {
              "id": "c",
              "text": "When you want to remove all rules"
            },
            {
              "id": "d",
              "text": "When you are working with circles"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Inequalities are perfect for situations with constraints like 'at least', 'at most', or 'less than', which define a range of valid solutions."
        },
        {
          "id": "math-201-l06-q3",
          "text": "What makes a math-based argument or claim the most convincing?",
          "skillId": "math-201-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "Just giving the final number"
            },
            {
              "id": "b",
              "text": "Explaining your assumptions, using correct units, and checking if the answer makes sense"
            },
            {
              "id": "c",
              "text": "Using the most complicated formula possible"
            },
            {
              "id": "d",
              "text": "Making a guess without showing work"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A strong claim is transparent. Explaining your process and checking it against reality makes it trustworthy."
        },
        {
          "id": "math-201-l06-q4",
          "text": "What is the best way to compare the value of a 12-ounce drink for $1.50 and a 16-ounce drink for $1.80?",
          "skillId": "math-201-skill-rates",
          "options": [
            {
              "id": "a",
              "text": "Choose the one with the lower total price"
            },
            {
              "id": "b",
              "text": "Calculate the price per ounce for each"
            },
            {
              "id": "c",
              "text": "Always choose the bigger drink"
            },
            {
              "id": "d",
              "text": "Guess which one is a better deal"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Calculating the unit rate (price per ounce) allows for a fair, direct comparison to see which option gives you more for your money."
        }
      ]
    }
  ]
};
