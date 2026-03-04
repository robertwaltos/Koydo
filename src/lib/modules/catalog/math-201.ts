import type { LearningModule } from "@/lib/modules/types";

export const Math201Module: LearningModule = {
  "id": "math-201",
  "title": "Algebra and Quantitative Reasoning II",
  "description": "Intermediate mathematics curriculum focused on algebraic structure, linear models, proportional reasoning, systems, and quantitative decision making.",
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
  "version": "2.0.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Manipulate algebraic expressions and solve multi-step equations reliably",
    "Represent linear relationships across tables, graphs, and equations",
    "Apply proportional reasoning in real-world rate and scale scenarios",
    "Solve and interpret systems of linear equations",
    "Use inequalities to model constraints and feasible solutions",
    "Validate quantitative conclusions with units, assumptions, and reasonableness checks"
  ],
  "lessons": [
    {
      "id": "math-201-l01",
      "title": "Expression Structure and Equation Solving",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "math-201-l01-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "math-201-l01-c1",
          "kind": "concept",
          "title": "Expressions as Structures",
          "content": "In intermediate algebra, our goal goes beyond simply finding the right answers. We want to dive deeper and understand the structure that underlies mathematical expressions. This means that even if two expressions appear different at first glance, they can actually represent the same relationship or idea. By recognizing these equivalent expressions, we can uncover the connections between various mathematical concepts, which helps us become better problem solvers and thinkers in math. Understanding these structures is like having a map that guides us through the world of algebra, making it easier to navigate and explore new ideas."
        },
        {
          "id": "math-201-l01-c2",
          "kind": "concept",
          "title": "Equation Strategy",
          "content": "When we solve equations, we use a reliable strategy that involves inverse operations, which are actions that reverse each other, like addition and subtraction. We also apply distributive reasoning, which helps us simplify expressions, and we carefully isolate variables to find their values. Throughout this process, it’s important to keep both sides of the equation equal, ensuring that our solutions are valid.\nContext recap: When we solve equations, we use a reliable strategy that involves inverse operations, which are actions that reverse each other, like addition and subtraction. We also apply distributive reasoning, which helps us simplify expressions, and we carefully isolate variables to find their values. Throughout this process, it’s important to keep both sides of the equation equal, ensuring that our solutions are valid."
        },
        {
          "id": "math-201-l01-c3",
          "kind": "recap",
          "title": "Verification Discipline",
          "content": "To ensure our solutions are correct, we can use substitution checks. This means we take our found values and plug them back into the original equation to see if both sides match. This practice helps catch any mistakes in our calculations and confirms that the equations we transformed are still equivalent to the original ones.\nContext recap: To ensure our solutions are correct, we can use substitution checks. This means we take our found values and plug them back into the original equation to see if both sides match. This practice helps catch any mistakes in our calculations and confirms that the equations we transformed are still equivalent to the original ones."
        }
      ],
      "flashcards": [
        {
          "id": "math-201-l01-f1",
          "front": "Equivalent expressions",
          "back": "Different-looking forms that produce identical values for all valid inputs."
        },
        {
          "id": "math-201-l01-f2",
          "front": "Inverse operations",
          "back": "Paired operations used to undo transformations while preserving equality."
        },
        {
          "id": "math-201-l01-f3",
          "front": "Distributive property",
          "back": "a(b + c) = ab + ac, often used to simplify and solve equations."
        }
      ]
    },
    {
      "id": "math-201-l02",
      "title": "Linear Functions and Multiple Representations Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "math-201-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "math-201-l02-c1",
          "kind": "concept",
          "title": "Rate of Change",
          "content": "Linear models are special because they have a constant rate of change, which means that as one variable increases or decreases, the other does so at a consistent rate. Understanding the slope, which shows this rate, and the intercept, which indicates where the line crosses the axis, is crucial for applying these concepts to real-world situations.\nContext recap: Linear models are special because they have a constant rate of change, which means that as one variable increases or decreases, the other does so at a consistent rate. Understanding the slope, which shows this rate, and the intercept, which indicates where the line crosses the axis, is crucial for applying these concepts to real-world situations."
        },
        {
          "id": "math-201-l02-c2",
          "kind": "practice",
          "title": "Representation Conversion",
          "content": "Strong quantitative reasoning allows us to move easily between different forms of representing data, such as equations, graphs, and tables. This fluency helps us understand how these representations relate to each other and enables us to analyze patterns effectively.\nContext recap: Strong quantitative reasoning allows us to move easily between different forms of representing data, such as equations, graphs, and tables. This fluency helps us understand how these representations relate to each other and enables us to analyze patterns effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-201-l02-act1",
          "type": "matching_pairs",
          "title": "Representation Match",
          "description": "Match each linear description to the best interpretation.",
          "pairs": [
            {
              "left": "y = 3x + 5",
              "right": "Slope 3, y-intercept 5"
            },
            {
              "left": "Flat graph segment",
              "right": "Zero rate of change"
            },
            {
              "left": "Negative slope",
              "right": "Output decreases as input increases"
            },
            {
              "left": "Point (0, b)",
              "right": "Initial value"
            }
          ]
        },
        {
          "id": "math-201-l02-act2",
          "type": "scenario_practice",
          "title": "Cost Model Drill",
          "description": "Build and interpret a linear pricing model.",
          "instructions": [
            "Identify variable and fixed components.",
            "State one reasonableness check for your model."
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
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "questions": [
        {
          "id": "math-201-l03-q1",
          "text": "Why substitute a solution candidate back into the original equation?",
          "skillId": "math-201-skill-equations",
          "options": [
            {
              "id": "a",
              "text": "To change the equation form"
            },
            {
              "id": "b",
              "text": "To verify equivalence and solution validity"
            },
            {
              "id": "c",
              "text": "To avoid simplifying expressions"
            },
            {
              "id": "d",
              "text": "To remove variable meaning"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Back-substitution confirms the candidate satisfies the original relation."
        },
        {
          "id": "math-201-l03-q2",
          "text": "In y = mx + b, parameter m primarily represents:",
          "skillId": "math-201-skill-linear",
          "options": [
            {
              "id": "a",
              "text": "Initial value"
            },
            {
              "id": "b",
              "text": "Rate of change"
            },
            {
              "id": "c",
              "text": "Output constraint"
            },
            {
              "id": "d",
              "text": "Graph domain only"
            }
          ],
          "correctOptionId": "b",
          "explanation": "m captures slope, the constant change in y per unit x."
        },
        {
          "id": "math-201-l03-q3",
          "text": "A line with negative slope means:",
          "skillId": "math-201-skill-linear",
          "options": [
            {
              "id": "a",
              "text": "y increases as x increases"
            },
            {
              "id": "b",
              "text": "y decreases as x increases"
            },
            {
              "id": "c",
              "text": "No relationship"
            },
            {
              "id": "d",
              "text": "Vertical line"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Negative slope indicates inverse directional movement."
        },
        {
          "id": "math-201-l03-q4",
          "text": "Which practice best supports model credibility?",
          "skillId": "math-201-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "Ignore units"
            },
            {
              "id": "b",
              "text": "Check assumptions and units against context"
            },
            {
              "id": "c",
              "text": "Avoid validation data"
            },
            {
              "id": "d",
              "text": "Use only one data point"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Units and assumptions anchor models to real context."
        }
      ]
    },
    {
      "id": "math-201-l04",
      "title": "Proportions, Rates, and Percent Reasoning",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "math-201-l04-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "math-201-l04-c1",
          "kind": "concept",
          "title": "Proportional Structure",
          "content": "Proportional reasoning is a powerful tool in mathematics that connects multiplicative relationships across various contexts, such as scale, similarity, and rates. By understanding how these relationships work, we can solve problems more effectively and make sense of the world around us.\nContext recap: Proportional reasoning is a powerful tool in mathematics that connects multiplicative relationships across various contexts, such as scale, similarity, and rates. By understanding how these relationships work, we can solve problems more effectively and make sense of the world around us."
        },
        {
          "id": "math-201-l04-c2",
          "kind": "concept",
          "title": "Rates and Unit Rates",
          "content": "Unit rates are important because they allow us to make direct comparisons between different options. For example, if we know the price per item, we can easily determine which option is the best deal. Understanding unit rates is essential for making informed decisions based on data.\nContext recap: Unit rates are important because they allow us to make direct comparisons between different options. For example, if we know the price per item, we can easily determine which option is the best deal. Understanding unit rates is essential for making informed decisions based on data."
        },
        {
          "id": "math-201-l04-c3",
          "kind": "recap",
          "title": "Percent as Relative Change",
          "content": "When we analyze percentages, we should think of them as a way to understand relative changes in quantities, rather than just performing arithmetic calculations. This perspective helps us grasp the significance of changes in data and makes our analysis more meaningful.\nContext recap: When we analyze percentages, we should think of them as a way to understand relative changes in quantities, rather than just performing arithmetic calculations. This perspective helps us grasp the significance of changes in data and makes our analysis more meaningful."
        }
      ],
      "flashcards": [
        {
          "id": "math-201-l04-f1",
          "front": "Unit rate",
          "back": "Rate normalized to one unit for comparison clarity."
        },
        {
          "id": "math-201-l04-f2",
          "front": "Proportional relationship",
          "back": "Relationship with constant ratio between paired quantities."
        },
        {
          "id": "math-201-l04-f3",
          "front": "Percent change",
          "back": "Relative increase or decrease compared to original quantity."
        }
      ]
    },
    {
      "id": "math-201-l05",
      "title": "Systems and Inequalities Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "math-201-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "math-201-l05-c1",
          "kind": "practice",
          "title": "Intersection as Shared Truth",
          "content": "Solving systems of equations involves finding values that satisfy all the conditions or constraints at the same time. This means we are looking for a solution that works for every equation in the system, which can be a fun challenge!\nContext recap: Solving systems of equations involves finding values that satisfy all the conditions or constraints at the same time. This means we are looking for a solution that works for every equation in the system, which can be a fun challenge!"
        },
        {
          "id": "math-201-l05-c2",
          "kind": "recap",
          "title": "Inequality Regions",
          "content": "Inequalities help us describe sets of possible solutions and are particularly useful in situations where we need to optimize or find the best outcome within certain limits. Understanding these regions can guide us in making better decisions.\nContext recap: Inequalities help us describe sets of possible solutions and are particularly useful in situations where we need to optimize or find the best outcome within certain limits. Understanding these regions can guide us in making better decisions.\nWhy this matters: Inequality Regions helps learners in Math connect ideas from Algebra and Quantitative Reasoning II to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-201-l05-act1",
          "type": "sorting_buckets",
          "title": "Constraint Classification",
          "description": "Sort statements by equation vs inequality model type.",
          "buckets": [
            "Equation",
            "Inequality"
          ],
          "items": [
            {
              "text": "2x + 3 = 15",
              "bucket": "Equation"
            },
            {
              "text": "x + y <= 10",
              "bucket": "Inequality"
            },
            {
              "text": "4a - 1 = 7",
              "bucket": "Equation"
            },
            {
              "text": "3n > 12",
              "bucket": "Inequality"
            }
          ]
        },
        {
          "id": "math-201-l05-act2",
          "type": "scenario_practice",
          "title": "Budget Constraint Drill",
          "description": "Model a purchase plan with two constraints.",
          "instructions": [
            "Define variables and write constraints.",
            "Identify one feasible solution and test it."
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
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "questions": [
        {
          "id": "math-201-l06-q1",
          "text": "A system solution represents:",
          "skillId": "math-201-skill-systems",
          "options": [
            {
              "id": "a",
              "text": "A value satisfying one equation only"
            },
            {
              "id": "b",
              "text": "A value pair satisfying all equations in the system"
            },
            {
              "id": "c",
              "text": "Any plotted point"
            },
            {
              "id": "d",
              "text": "Only x-intercepts"
            }
          ],
          "correctOptionId": "b",
          "explanation": "System solutions satisfy every included relation simultaneously."
        },
        {
          "id": "math-201-l06-q2",
          "text": "Why are inequalities useful in modeling?",
          "skillId": "math-201-skill-inequalities",
          "options": [
            {
              "id": "a",
              "text": "They remove all constraints"
            },
            {
              "id": "b",
              "text": "They represent feasible ranges under limits"
            },
            {
              "id": "c",
              "text": "They force exact equality"
            },
            {
              "id": "d",
              "text": "They only apply to geometry"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Inequalities capture bounded possibility sets."
        },
        {
          "id": "math-201-l06-q3",
          "text": "Most defensible quantitative claim includes:",
          "skillId": "math-201-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "Answer only"
            },
            {
              "id": "b",
              "text": "Assumptions, units, and validation check"
            },
            {
              "id": "c",
              "text": "No context"
            },
            {
              "id": "d",
              "text": "Approximation without explanation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Transparent assumptions improve interpretability and trust."
        },
        {
          "id": "math-201-l06-q4",
          "text": "Best way to compare two pricing options with different package sizes is:",
          "skillId": "math-201-skill-rates",
          "options": [
            {
              "id": "a",
              "text": "Compare total price only"
            },
            {
              "id": "b",
              "text": "Compute and compare unit rates"
            },
            {
              "id": "c",
              "text": "Choose larger package always"
            },
            {
              "id": "d",
              "text": "Ignore quantity differences"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Unit rate normalization enables fair comparisons."
        }
      ]
    }
  ]
};
