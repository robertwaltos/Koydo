import type { LearningModule } from "@/lib/modules/types";

export const AdvancedMath201Module: LearningModule = {
  id: "advanced-math-201",
  title: "Advanced Math Topics",
  description:
    "Master fractions, decimals, ratios, proportions, and introductory algebra through worked examples and real-world problem solving.",
  subject: "Advanced Math",
  tags: ["core", "curriculum", "interactive"],
  minAge: 7,
  maxAge: 18,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  learningObjectives: [
    "Represent, compare, and perform operations with fractions",
    "Convert between fractions, decimals, and percentages",
    "Solve ratio and proportion problems in real-world contexts",
    "Evaluate and simplify algebraic expressions",
    "Solve one-step and two-step equations",
    "Interpret data using tables, graphs, and basic probability",
    "Apply multiple math concepts to a multi-step scenario"
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  Understanding Fractions  (video)
    ────────────────────────────────────────────── */
    {
      id: "advanced-math-201-l01",
      title: "Understanding Fractions",
      type: "video",
      duration: 11,
      objectives: [
        "Define numerator and denominator",
        "Represent fractions on a number line and with area models",
        "Compare fractions using common denominators and benchmarks"
      ],
      chunks: [
        {
          id: "advanced-math-201-l01-c1",
          title: "What Is a Fraction?",
          content:
            "A fraction represents part of a whole. It is written as numerator/denominator. The denominator tells how many equal parts the whole is divided into. The numerator tells how many of those parts we have. Example: 3/4 means the whole is cut into 4 equal pieces and we have 3 of them."
        },
        {
          id: "advanced-math-201-l01-c2",
          title: "Fractions on a Number Line",
          content:
            "Place fractions on a number line by dividing the segment between 0 and 1 into equal parts. For fourths, mark 1/4, 2/4 (= 1/2), 3/4, and 4/4 (= 1). This shows that fractions are numbers, not just 'pieces of pie.' Fractions greater than 1 (like 5/4) sit to the right of 1."
        },
        {
          id: "advanced-math-201-l01-c3",
          title: "Comparing Fractions",
          content:
            "To compare fractions with the same denominator, compare numerators: 5/8 > 3/8 because 5 > 3. For different denominators, find a common denominator. Example: compare 2/3 and 3/5. Common denominator = 15. So 2/3 = 10/15 and 3/5 = 9/15. Since 10 > 9, 2/3 > 3/5. Benchmark strategy: compare each fraction to 1/2."
        },
        {
          id: "advanced-math-201-l01-c4",
          title: "Equivalent Fractions",
          content:
            "Equivalent fractions look different but represent the same amount. Multiply or divide both the numerator and denominator by the same number. 1/2 = 2/4 = 3/6 = 4/8. To simplify a fraction, divide both parts by their greatest common factor (GCF). 6/8 → GCF is 2 → 3/4."
        }
      ],
      flashcards: [
        { id: "advanced-math-201-l01-f1", front: "Numerator", back: "The top number of a fraction; tells how many parts you have" },
        { id: "advanced-math-201-l01-f2", front: "Denominator", back: "The bottom number of a fraction; tells how many equal parts the whole is divided into" },
        { id: "advanced-math-201-l01-f3", front: "Equivalent fractions", back: "Fractions that represent the same value: 1/2 = 2/4 = 3/6" },
        { id: "advanced-math-201-l01-f4", front: "Simplify a fraction", back: "Divide numerator and denominator by their greatest common factor (GCF)" }
      ],
      learningAids: [
        { id: "advanced-math-201-l01-a1", type: "image", title: "Fraction Models", content: "Area models and number lines showing 1/2, 1/3, 1/4, 2/3, 3/4 side by side." }
      ]
    },

    /* ──────────────────────────────────────────────
       L02  Fraction Operations  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "advanced-math-201-l02",
      title: "Fraction Operations",
      type: "interactive",
      duration: 13,
      objectives: [
        "Add and subtract fractions with like and unlike denominators",
        "Multiply fractions and simplify the result",
        "Solve a word problem involving fraction operations"
      ],
      metadata: {
        prompts: [
          "How do you add 1/3 + 1/4? What common denominator would you use?",
          "Multiply 2/3 × 3/5 and simplify the answer.",
          "A recipe calls for 3/4 cup of flour. You want to make half the recipe. How much flour do you need?"
        ]
      },
      interactiveActivities: [
        {
          id: "advanced-math-201-l02-ia1",
          type: "sorting_buckets",
          title: "Operation Strategy Sort",
          description: "Sort each step into the correct operation strategy.",
          estimatedMinutes: 7,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "add", label: "Adding Fractions" },
              { id: "multiply", label: "Multiplying Fractions" }
            ],
            items: [
              { id: "i1", label: "Find a common denominator first", correctBucketId: "add" },
              { id: "i2", label: "Multiply numerator × numerator", correctBucketId: "multiply" },
              { id: "i3", label: "Keep the denominator if they match, add numerators", correctBucketId: "add" },
              { id: "i4", label: "Multiply denominator × denominator", correctBucketId: "multiply" },
              { id: "i5", label: "Convert to equivalent fractions before combining", correctBucketId: "add" },
              { id: "i6", label: "Cross-cancel common factors before multiplying", correctBucketId: "multiply" }
            ]
          }
        },
        {
          id: "advanced-math-201-l02-ia2",
          type: "matching_pairs",
          title: "Fraction Calculation Match",
          description: "Match each fraction problem to its correct answer.",
          estimatedMinutes: 6,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "1/4 + 1/4" },
              { id: "l2", label: "1/3 + 1/6" },
              { id: "l3", label: "2/5 × 5/6" },
              { id: "l4", label: "3/4 − 1/2" }
            ],
            right: [
              { id: "r1", label: "1/2" },
              { id: "r2", label: "1/2" },
              { id: "r3", label: "1/3" },
              { id: "r4", label: "1/4" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" },
              { leftId: "l4", rightId: "r4" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "advanced-math-201-l02-a1", type: "mnemonic", title: "Fraction Operations Cheat Sheet", content: "Add/Subtract: same denominator first, then combine numerators. Multiply: straight across (top × top, bottom × bottom). Simplify last." }
      ]
    },

    /* ──────────────────────────────────────────────
       L03  Checkpoint: Fractions  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "advanced-math-201-l03",
      title: "Checkpoint: Fractions",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "advanced-math-201-l03-q1",
          text: "Which fraction is equivalent to 2/6?",
          skillId: "advanced-math-skill-equivalent",
          options: [
            { id: "a", text: "1/2" },
            { id: "b", text: "1/3" },
            { id: "c", text: "2/3" },
            { id: "d", text: "3/6" }
          ],
          correctOptionId: "b",
          explanation: "2/6 simplified: divide both by GCF of 2. 2÷2 = 1, 6÷2 = 3. So 2/6 = 1/3."
        },
        {
          id: "advanced-math-201-l03-q2",
          text: "What is 2/5 + 1/5?",
          skillId: "advanced-math-skill-add-fractions",
          options: [
            { id: "a", text: "3/10" },
            { id: "b", text: "3/5" },
            { id: "c", text: "1/5" },
            { id: "d", text: "2/10" }
          ],
          correctOptionId: "b",
          explanation: "Same denominator: add numerators. 2/5 + 1/5 = 3/5."
        },
        {
          id: "advanced-math-201-l03-q3",
          text: "What is 1/2 × 3/4?",
          skillId: "advanced-math-skill-multiply-fractions",
          options: [
            { id: "a", text: "3/8" },
            { id: "b", text: "4/6" },
            { id: "c", text: "3/6" },
            { id: "d", text: "1/8" }
          ],
          correctOptionId: "a",
          explanation: "Multiply straight across: 1×3 = 3, 2×4 = 8. Answer: 3/8."
        },
        {
          id: "advanced-math-201-l03-q4",
          text: "A pizza is cut into 8 slices. You eat 3 slices. What fraction of the pizza is LEFT?",
          skillId: "advanced-math-skill-fraction-context",
          options: [
            { id: "a", text: "3/8" },
            { id: "b", text: "8/3" },
            { id: "c", text: "5/8" },
            { id: "d", text: "5/3" }
          ],
          correctOptionId: "c",
          explanation: "8 slices total − 3 eaten = 5 remaining. Fraction left = 5/8."
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "advanced-math-201-l03-a1", type: "mnemonic", title: "GCF Shortcut", content: "To simplify, ask: What is the biggest number that divides both top and bottom evenly?" }
      ]
    },

    /* ──────────────────────────────────────────────
       L04  Decimals and Percentages  (video)
    ────────────────────────────────────────────── */
    {
      id: "advanced-math-201-l04",
      title: "Decimals and Percentages",
      type: "video",
      duration: 11,
      objectives: [
        "Convert between fractions, decimals, and percentages",
        "Compare and order decimals",
        "Calculate a percentage of a number"
      ],
      chunks: [
        {
          id: "advanced-math-201-l04-c1",
          title: "Understanding Decimals",
          content:
            "Decimals are another way to write fractions with denominators of 10, 100, 1000, etc. 0.5 = 5/10 = 1/2. 0.25 = 25/100 = 1/4. Place values to the right of the decimal point: tenths, hundredths, thousandths. To compare decimals, line up the decimal points and compare digit by digit: 0.45 > 0.39 because 4 tenths > 3 tenths."
        },
        {
          id: "advanced-math-201-l04-c2",
          title: "Fraction ↔ Decimal Conversion",
          content:
            "Fraction to decimal: divide the numerator by the denominator. 3/4 = 3 ÷ 4 = 0.75. Decimal to fraction: read the decimal as a fraction. 0.6 = 6/10 = 3/5. Some fractions make repeating decimals: 1/3 = 0.333... Common conversions to memorize: 1/2 = 0.5, 1/4 = 0.25, 3/4 = 0.75, 1/5 = 0.2."
        },
        {
          id: "advanced-math-201-l04-c3",
          title: "Percentages",
          content:
            "Percent means 'per hundred.' 50% = 50/100 = 0.5 = 1/2. To convert a decimal to a percent, multiply by 100: 0.75 × 100 = 75%. To convert a percent to a decimal, divide by 100: 35% ÷ 100 = 0.35. To find a percentage of a number: 20% of 80 = 0.20 × 80 = 16."
        },
        {
          id: "advanced-math-201-l04-c4",
          title: "Real-World Applications",
          content:
            "Percentages are everywhere: sales tax, tips, discounts, grades. A shirt costs $40 and is 25% off. Discount = 0.25 × 40 = $10. Sale price = $40 − $10 = $30. If sales tax is 8%, tax = 0.08 × 30 = $2.40. Total = $32.40. Understanding decimals and percentages helps with budgeting, shopping, and interpreting data."
        }
      ],
      flashcards: [
        { id: "advanced-math-201-l04-f1", front: "Fraction → Decimal", back: "Divide the numerator by the denominator. Example: 3/8 = 3 ÷ 8 = 0.375" },
        { id: "advanced-math-201-l04-f2", front: "Decimal → Percent", back: "Multiply by 100 and add % sign. Example: 0.45 → 45%" },
        { id: "advanced-math-201-l04-f3", front: "Percent of a number", back: "Convert percent to decimal, then multiply. 30% of 50 = 0.30 × 50 = 15" },
        { id: "advanced-math-201-l04-f4", front: "Key conversions", back: "1/2 = 0.5 = 50% | 1/4 = 0.25 = 25% | 3/4 = 0.75 = 75% | 1/5 = 0.2 = 20%" }
      ],
      learningAids: [
        { id: "advanced-math-201-l04-a1", type: "image", title: "Conversion Triangle", content: "Diagram showing fraction ↔ decimal ↔ percent conversions with arrows and examples." }
      ]
    },

    /* ──────────────────────────────────────────────
       L05  Ratios and Proportions  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "advanced-math-201-l05",
      title: "Ratios and Proportions",
      type: "interactive",
      duration: 12,
      objectives: [
        "Write ratios in three forms (a:b, a/b, a to b)",
        "Determine if two ratios form a proportion",
        "Solve proportion problems using cross-multiplication"
      ],
      metadata: {
        prompts: [
          "In a class of 30 students, 18 are girls. What is the ratio of girls to boys?",
          "A recipe uses 2 cups of flour for every 3 cups of sugar. How much flour for 9 cups of sugar?",
          "Are the ratios 4:6 and 6:9 proportional? How can you check?"
        ]
      },
      interactiveActivities: [
        {
          id: "advanced-math-201-l05-ia1",
          type: "matching_pairs",
          title: "Equivalent Ratio Match",
          description: "Match each ratio to its equivalent form.",
          estimatedMinutes: 6,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "2:3" },
              { id: "l2", label: "1:4" },
              { id: "l3", label: "3:5" },
              { id: "l4", label: "5:2" }
            ],
            right: [
              { id: "r1", label: "4:6" },
              { id: "r2", label: "3:12" },
              { id: "r3", label: "6:10" },
              { id: "r4", label: "10:4" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" },
              { leftId: "l4", rightId: "r4" }
            ]
          }
        },
        {
          id: "advanced-math-201-l05-ia2",
          type: "sorting_buckets",
          title: "Proportional or Not?",
          description: "Sort each pair of ratios into proportional or not proportional.",
          estimatedMinutes: 7,
          difficultyLevel: "hard",
          data: {
            buckets: [
              { id: "proportional", label: "Proportional (equivalent)" },
              { id: "not", label: "Not Proportional" }
            ],
            items: [
              { id: "i1", label: "2/3 and 4/6", correctBucketId: "proportional" },
              { id: "i2", label: "3/4 and 5/6", correctBucketId: "not" },
              { id: "i3", label: "1/5 and 3/15", correctBucketId: "proportional" },
              { id: "i4", label: "2/7 and 4/12", correctBucketId: "not" },
              { id: "i5", label: "6/8 and 9/12", correctBucketId: "proportional" },
              { id: "i6", label: "5/10 and 3/5", correctBucketId: "not" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "advanced-math-201-l05-a1", type: "mnemonic", title: "Cross-Multiply Check", content: "To check if a/b = c/d, see if a×d = b×c. If equal → proportional." }
      ]
    },

    /* ──────────────────────────────────────────────
       L06  Checkpoint: Decimals, Percentages & Ratios  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "advanced-math-201-l06",
      title: "Checkpoint: Decimals, Percentages & Ratios",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "advanced-math-201-l06-q1",
          text: "What is 3/5 written as a decimal?",
          skillId: "advanced-math-skill-conversion",
          options: [
            { id: "a", text: "0.35" },
            { id: "b", text: "0.6" },
            { id: "c", text: "0.53" },
            { id: "d", text: "1.67" }
          ],
          correctOptionId: "b",
          explanation: "3 ÷ 5 = 0.6. You can also think: 3/5 = 6/10 = 0.6."
        },
        {
          id: "advanced-math-201-l06-q2",
          text: "A jacket costs $60 and is 30% off. What is the sale price?",
          skillId: "advanced-math-skill-percent",
          options: [
            { id: "a", text: "$18" },
            { id: "b", text: "$30" },
            { id: "c", text: "$42" },
            { id: "d", text: "$48" }
          ],
          correctOptionId: "c",
          explanation: "30% of $60 = 0.30 × 60 = $18 discount. Sale price = $60 − $18 = $42."
        },
        {
          id: "advanced-math-201-l06-q3",
          text: "A map scale says 1 cm = 5 km. Two cities are 3 cm apart on the map. What is the real distance?",
          skillId: "advanced-math-skill-proportion",
          options: [
            { id: "a", text: "8 km" },
            { id: "b", text: "15 km" },
            { id: "c", text: "10 km" },
            { id: "d", text: "20 km" }
          ],
          correctOptionId: "b",
          explanation: "1 cm : 5 km = 3 cm : ? km. Cross-multiply: 3 × 5 = 15 km."
        },
        {
          id: "advanced-math-201-l06-q4",
          text: "Which decimal is greater: 0.47 or 0.5?",
          skillId: "advanced-math-skill-compare-decimals",
          options: [
            { id: "a", text: "0.47 is greater" },
            { id: "b", text: "They are equal" },
            { id: "c", text: "0.5 is greater" },
            { id: "d", text: "Cannot be compared" }
          ],
          correctOptionId: "c",
          explanation: "Compare tenths first: 0.5 has 5 tenths, 0.47 has 4 tenths. 5 > 4, so 0.5 > 0.47."
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "advanced-math-201-l06-a1", type: "mnemonic", title: "Percent Shortcut", content: "To find 10% of any number, move the decimal one place left. Then multiply for other percentages." }
      ]
    },

    /* ──────────────────────────────────────────────
       L07  Intro to Algebra: Expressions  (video)
    ────────────────────────────────────────────── */
    {
      id: "advanced-math-201-l07",
      title: "Intro to Algebra: Expressions",
      type: "video",
      duration: 12,
      objectives: [
        "Identify variables, constants, coefficients, and terms in an expression",
        "Evaluate an expression by substituting a value for the variable",
        "Simplify expressions by combining like terms"
      ],
      chunks: [
        {
          id: "advanced-math-201-l07-c1",
          title: "What Is a Variable?",
          content:
            "In algebra, a variable is a letter (like x, n, or t) that stands for an unknown number. An expression is a math phrase that can include numbers, variables, and operations. Example: 3x + 5 means '3 times some number x, plus 5.' The 3 is the coefficient (multiplier of the variable), 5 is a constant, and the expression has two terms: 3x and 5."
        },
        {
          id: "advanced-math-201-l07-c2",
          title: "Evaluating Expressions",
          content:
            "To evaluate an expression, replace the variable with a given number and compute. If x = 4, then 3x + 5 = 3(4) + 5 = 12 + 5 = 17. Another example: if n = 2, then n² + 3n = 2² + 3(2) = 4 + 6 = 10. Always follow order of operations (PEMDAS)."
        },
        {
          id: "advanced-math-201-l07-c3",
          title: "Combining Like Terms",
          content:
            "Like terms have the same variable raised to the same power. 3x and 7x are like terms. 3x + 7x = 10x. But 3x and 3x² are NOT like terms. Example: Simplify 2x + 5 + 4x − 3. Combine like terms: (2x + 4x) + (5 − 3) = 6x + 2."
        },
        {
          id: "advanced-math-201-l07-c4",
          title: "Writing Expressions from Words",
          content:
            "Translate word phrases into algebra: 'a number plus 7' → n + 7. 'Twice a number minus 3' → 2n − 3. 'Five more than triple a number' → 3n + 5. Practice: 'Ten less than a number squared' → n² − 10. Recognizing these patterns is the first step to solving equations."
        }
      ],
      flashcards: [
        { id: "advanced-math-201-l07-f1", front: "Variable", back: "A letter representing an unknown number (e.g., x, n, t)" },
        { id: "advanced-math-201-l07-f2", front: "Coefficient", back: "The number multiplied by a variable. In 7x, the coefficient is 7" },
        { id: "advanced-math-201-l07-f3", front: "Like terms", back: "Terms with the same variable and exponent. 3x and 5x are like terms; 3x and 3x² are not" },
        { id: "advanced-math-201-l07-f4", front: "PEMDAS", back: "Order of operations: Parentheses, Exponents, Multiplication/Division (L→R), Addition/Subtraction (L→R)" }
      ],
      learningAids: [
        { id: "advanced-math-201-l07-a1", type: "mnemonic", title: "PEMDAS", content: "Please Excuse My Dear Aunt Sally: Parentheses, Exponents, Multiply/Divide, Add/Subtract." }
      ]
    },

    /* ──────────────────────────────────────────────
       L08  Solving Equations  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "advanced-math-201-l08",
      title: "Solving Equations",
      type: "interactive",
      duration: 13,
      objectives: [
        "Solve one-step equations (x + 5 = 12, 3x = 18)",
        "Solve two-step equations (2x + 3 = 11)",
        "Check solutions by substituting back"
      ],
      metadata: {
        prompts: [
          "Solve: x + 8 = 15. What operation do you use to isolate x?",
          "Solve: 4n = 24. How do you undo multiplication?",
          "Solve: 3x − 7 = 14. What do you do first — add 7 or divide by 3?"
        ]
      },
      interactiveActivities: [
        {
          id: "advanced-math-201-l08-ia1",
          type: "drag_and_drop",
          title: "Equation Solving Steps",
          description: "Drag each solving step into the correct order for 2x + 5 = 13.",
          estimatedMinutes: 7,
          difficultyLevel: "medium",
          data: {
            targets: [
              { id: "step1", label: "Step 1" },
              { id: "step2", label: "Step 2" },
              { id: "step3", label: "Step 3" },
              { id: "step4", label: "Step 4" }
            ],
            draggables: [
              { id: "d1", label: "Subtract 5 from both sides: 2x = 8", correctTargetId: "step1" },
              { id: "d2", label: "Divide both sides by 2: x = 4", correctTargetId: "step2" },
              { id: "d3", label: "Check: 2(4) + 5 = 8 + 5 = 13 ✓", correctTargetId: "step3" },
              { id: "d4", label: "Write the solution: x = 4", correctTargetId: "step4" }
            ]
          }
        },
        {
          id: "advanced-math-201-l08-ia2",
          type: "matching_pairs",
          title: "Equation to Solution Match",
          description: "Match each equation to its correct solution.",
          estimatedMinutes: 6,
          difficultyLevel: "hard",
          data: {
            left: [
              { id: "l1", label: "x + 9 = 15" },
              { id: "l2", label: "5n = 35" },
              { id: "l3", label: "2x − 4 = 10" },
              { id: "l4", label: "x/3 = 6" }
            ],
            right: [
              { id: "r1", label: "x = 6" },
              { id: "r2", label: "n = 7" },
              { id: "r3", label: "x = 7" },
              { id: "r4", label: "x = 18" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" },
              { leftId: "l4", rightId: "r4" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "advanced-math-201-l08-a1", type: "mnemonic", title: "Balance Rule", content: "An equation is like a balance scale — whatever you do to one side, you must do to the other." }
      ]
    },

    /* ──────────────────────────────────────────────
       L09  Checkpoint: Algebra Basics  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "advanced-math-201-l09",
      title: "Checkpoint: Algebra Basics",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "advanced-math-201-l09-q1",
          text: "Simplify: 4x + 3 + 2x − 1",
          skillId: "advanced-math-skill-simplify",
          options: [
            { id: "a", text: "6x + 2" },
            { id: "b", text: "6x + 4" },
            { id: "c", text: "8x" },
            { id: "d", text: "4x + 5" }
          ],
          correctOptionId: "a",
          explanation: "Combine like terms: (4x + 2x) + (3 − 1) = 6x + 2."
        },
        {
          id: "advanced-math-201-l09-q2",
          text: "If x = 3, what is the value of 2x² + 1?",
          skillId: "advanced-math-skill-evaluate",
          options: [
            { id: "a", text: "13" },
            { id: "b", text: "19" },
            { id: "c", text: "7" },
            { id: "d", text: "37" }
          ],
          correctOptionId: "b",
          explanation: "2(3)² + 1 = 2(9) + 1 = 18 + 1 = 19. Remember: square first, then multiply by 2."
        },
        {
          id: "advanced-math-201-l09-q3",
          text: "Solve: 3n + 4 = 19",
          skillId: "advanced-math-skill-equations",
          options: [
            { id: "a", text: "n = 7" },
            { id: "b", text: "n = 5" },
            { id: "c", text: "n = 4" },
            { id: "d", text: "n = 6" }
          ],
          correctOptionId: "b",
          explanation: "Subtract 4: 3n = 15. Divide by 3: n = 5. Check: 3(5) + 4 = 19 ✓."
        },
        {
          id: "advanced-math-201-l09-q4",
          text: "Which expression represents 'seven less than twice a number'?",
          skillId: "advanced-math-skill-translate",
          options: [
            { id: "a", text: "7 − 2n" },
            { id: "b", text: "2n − 7" },
            { id: "c", text: "2(n − 7)" },
            { id: "d", text: "7n − 2" }
          ],
          correctOptionId: "b",
          explanation: "'Twice a number' = 2n. 'Seven less than' means subtract 7 from it: 2n − 7."
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [2, 3, 4] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "advanced-math-201-l09-a1", type: "mnemonic", title: "Solving 2-Step Equations", content: "Undo addition/subtraction first, then undo multiplication/division. Always check by plugging back in." }
      ]
    },

    /* ──────────────────────────────────────────────
       L10  Data and Graphs  (video)
    ────────────────────────────────────────────── */
    {
      id: "advanced-math-201-l10",
      title: "Data and Graphs",
      type: "video",
      duration: 11,
      objectives: [
        "Read and interpret bar graphs, line graphs, and circle graphs",
        "Calculate mean, median, and mode of a data set",
        "Choose the most appropriate graph type for different data"
      ],
      chunks: [
        {
          id: "advanced-math-201-l10-c1",
          title: "Types of Graphs",
          content:
            "Bar graphs compare categories (e.g., favorite colors). Line graphs show change over time (e.g., temperature each day). Circle (pie) graphs show parts of a whole (e.g., how you spend your day). Choosing the right graph matters: use a line graph for trends, a bar graph for comparisons, and a pie chart for percentages that add to 100%."
        },
        {
          id: "advanced-math-201-l10-c2",
          title: "Mean, Median, and Mode",
          content:
            "Mean (average): add all values, divide by the count. Data: 4, 7, 9, 10, 10. Mean = (4+7+9+10+10)/5 = 40/5 = 8. Median (middle value): put numbers in order, find the center. Median = 9. Mode (most frequent): 10 appears twice. Mode = 10. Each tells a different story about the data."
        },
        {
          id: "advanced-math-201-l10-c3",
          title: "Reading Graphs Carefully",
          content:
            "Always check the title, axis labels, and scale. A graph with a broken axis (not starting at 0) can make small differences look huge. Example: a bar graph showing test scores from 85 to 100 makes a 5-point difference look enormous. The same data on a 0–100 scale shows the scores are actually very close."
        },
        {
          id: "advanced-math-201-l10-c4",
          title: "Making Predictions from Data",
          content:
            "Line graphs let you spot trends and make predictions. If lemonade sales were $20 Mon, $25 Tue, $30 Wed, the trend suggests about $35 on Thursday. But predictions are estimates, not guarantees — rain on Thursday could change everything. Always consider context when interpreting data."
        }
      ],
      flashcards: [
        { id: "advanced-math-201-l10-f1", front: "Mean", back: "The average: sum of all values ÷ number of values" },
        { id: "advanced-math-201-l10-f2", front: "Median", back: "The middle value when data is arranged in order" },
        { id: "advanced-math-201-l10-f3", front: "Mode", back: "The value that appears most often in a data set" },
        { id: "advanced-math-201-l10-f4", front: "When to use each graph", back: "Bar = compare categories, Line = show change over time, Pie = parts of a whole" }
      ],
      learningAids: [
        { id: "advanced-math-201-l10-a1", type: "image", title: "Graph Types Poster", content: "Side-by-side examples of bar, line, and circle graphs with labeled axes and titles." }
      ]
    },

    /* ──────────────────────────────────────────────
       L11  Probability Basics  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "advanced-math-201-l11",
      title: "Probability Basics",
      type: "interactive",
      duration: 12,
      objectives: [
        "Express probability as a fraction between 0 and 1",
        "Calculate the probability of simple events",
        "Distinguish between theoretical and experimental probability"
      ],
      metadata: {
        prompts: [
          "A bag has 3 red and 5 blue marbles. What is the probability of drawing red?",
          "You flip a coin 20 times and get 12 heads. What is the experimental probability of heads? How does it compare to the theoretical 1/2?",
          "Is it possible for an event to have a probability greater than 1? Why or why not?"
        ]
      },
      interactiveActivities: [
        {
          id: "advanced-math-201-l11-ia1",
          type: "sorting_buckets",
          title: "Probability Scale Sort",
          description: "Sort each event by how likely it is.",
          estimatedMinutes: 7,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "impossible", label: "Impossible (0)" },
              { id: "unlikely", label: "Unlikely (close to 0)" },
              { id: "even", label: "Even Chance (1/2)" },
              { id: "certain", label: "Certain (1)" }
            ],
            items: [
              { id: "i1", label: "Rolling a 7 on a standard die", correctBucketId: "impossible" },
              { id: "i2", label: "Flipping a coin and getting heads", correctBucketId: "even" },
              { id: "i3", label: "The sun rising tomorrow", correctBucketId: "certain" },
              { id: "i4", label: "Drawing a blue marble from a bag of 1 blue and 99 red", correctBucketId: "unlikely" }
            ]
          }
        },
        {
          id: "advanced-math-201-l11-ia2",
          type: "matching_pairs",
          title: "Probability Calculations",
          description: "Match each scenario to its correct probability.",
          estimatedMinutes: 6,
          difficultyLevel: "hard",
          data: {
            left: [
              { id: "l1", label: "Rolling an even number on a standard die" },
              { id: "l2", label: "Drawing a red card from a standard deck" },
              { id: "l3", label: "Spinning a 4 on a spinner with sections 1–8" }
            ],
            right: [
              { id: "r1", label: "3/6 = 1/2 (even numbers: 2, 4, 6)" },
              { id: "r2", label: "26/52 = 1/2 (half the deck is red)" },
              { id: "r3", label: "1/8 (one section out of eight)" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "advanced-math-201-l11-a1", type: "mnemonic", title: "Probability Formula", content: "P(event) = favorable outcomes ÷ total possible outcomes. Always between 0 (impossible) and 1 (certain)." }
      ]
    },

    /* ──────────────────────────────────────────────
       L12  Checkpoint: Data & Probability  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "advanced-math-201-l12",
      title: "Checkpoint: Data & Probability",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "advanced-math-201-l12-q1",
          text: "Data set: 3, 5, 7, 7, 8. What is the mean?",
          skillId: "advanced-math-skill-mean",
          options: [
            { id: "a", text: "7" },
            { id: "b", text: "5" },
            { id: "c", text: "6" },
            { id: "d", text: "8" }
          ],
          correctOptionId: "c",
          explanation: "Mean = (3+5+7+7+8)/5 = 30/5 = 6."
        },
        {
          id: "advanced-math-201-l12-q2",
          text: "Which type of graph best shows how your daily schedule breaks down into activities?",
          skillId: "advanced-math-skill-graphs",
          options: [
            { id: "a", text: "Line graph" },
            { id: "b", text: "Bar graph" },
            { id: "c", text: "Circle (pie) graph" },
            { id: "d", text: "Scatter plot" }
          ],
          correctOptionId: "c",
          explanation: "A circle/pie graph shows parts of a whole — perfect for showing what fraction of your day goes to each activity."
        },
        {
          id: "advanced-math-201-l12-q3",
          text: "A bag has 4 green and 6 yellow marbles. What is the probability of drawing green?",
          skillId: "advanced-math-skill-probability",
          options: [
            { id: "a", text: "4/6" },
            { id: "b", text: "6/10" },
            { id: "c", text: "4/10 = 2/5" },
            { id: "d", text: "1/4" }
          ],
          correctOptionId: "c",
          explanation: "P(green) = favorable/total = 4/10 = 2/5. There are 4 green out of 10 total marbles."
        },
        {
          id: "advanced-math-201-l12-q4",
          text: "Data set: 2, 4, 4, 6, 9. What is the median?",
          skillId: "advanced-math-skill-median",
          options: [
            { id: "a", text: "5" },
            { id: "b", text: "4" },
            { id: "c", text: "6" },
            { id: "d", text: "4.5" }
          ],
          correctOptionId: "b",
          explanation: "The data in order: 2, 4, 4, 6, 9. The middle value (3rd of 5) is 4."
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "advanced-math-201-l12-a1", type: "mnemonic", title: "Mean vs Median vs Mode", content: "Mean = average, Median = middle, Mode = most frequent." }
      ]
    },

    /* ──────────────────────────────────────────────
       L13  Budget Planning Scenario Lab  (video)
    ────────────────────────────────────────────── */
    {
      id: "advanced-math-201-l13",
      title: "Budget Planning Scenario Lab",
      type: "video",
      duration: 13,
      objectives: [
        "Apply fractions, percentages, and ratios to a budget scenario",
        "Calculate totals, discounts, and remaining amounts",
        "Make and justify budget decisions using math"
      ],
      chunks: [
        {
          id: "advanced-math-201-l13-c1",
          title: "The Scenario",
          content:
            "Your school club has a $200 budget for a community event. You need to decide how to split the money among three categories: food, decorations, and supplies. The club voted to spend 50% on food, 30% on decorations, and 20% on supplies."
        },
        {
          id: "advanced-math-201-l13-c2",
          title: "Calculating the Budget",
          content:
            "Food: 50% of $200 = 0.50 × 200 = $100. Decorations: 30% of $200 = 0.30 × 200 = $60. Supplies: 20% of $200 = 0.20 × 200 = $40. Check: $100 + $60 + $40 = $200 ✓. The ratio of spending is 5:3:2."
        },
        {
          id: "advanced-math-201-l13-c3",
          title: "Shopping with Discounts",
          content:
            "The party supply store has a 25% off sale on decorations. Original price of decorations: $80. After discount: $80 × 0.75 = $60. This fits the budget perfectly! For food, pizza costs $12 each and you need enough for 40 people (3 slices each, 8 slices per pizza). Pizzas needed: (40 × 3) ÷ 8 = 120 ÷ 8 = 15 pizzas. Cost: 15 × $12 = $180. Oops — that is $80 over the food budget!"
        },
        {
          id: "advanced-math-201-l13-c4",
          title: "Adjusting the Plan",
          content:
            "Options: (1) Reduce servings to 2 per person: 80 slices = 10 pizzas = $120 — still over. (2) Find cheaper pizza at $8 each: 15 × $8 = $120 — still over. (3) Combine both: 10 pizzas × $8 = $80 — under budget! Remaining food money: $100 − $80 = $20 for drinks. This is how real-world math works — calculate, compare, and adjust."
        }
      ],
      flashcards: [
        { id: "advanced-math-201-l13-f1", front: "Budget allocation", back: "Dividing a total amount into categories using percentages or ratios" },
        { id: "advanced-math-201-l13-f2", front: "Discount calculation", back: "Sale price = original × (1 − discount rate). 25% off $80 = $80 × 0.75 = $60" },
        { id: "advanced-math-201-l13-f3", front: "Unit rate", back: "Cost per single item. $96 for 12 pizzas → $96 ÷ 12 = $8 per pizza" },
        { id: "advanced-math-201-l13-f4", front: "Budget adjustment", back: "When costs exceed budget: reduce quantity, find cheaper options, or reallocate from another category" }
      ],
      learningAids: [
        { id: "advanced-math-201-l13-a1", type: "practice", title: "Budget Worksheet", content: "Plan a $150 party budget: allocate percentages, calculate each category, find items with discounts, and adjust if needed." }
      ]
    },

    /* ──────────────────────────────────────────────
       L14  Math Investigation Studio  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "advanced-math-201-l14",
      title: "Math Investigation Studio",
      type: "interactive",
      duration: 13,
      objectives: [
        "Connect fractions, decimals, percentages, and algebra in a single problem",
        "Explain mathematical reasoning step by step",
        "Identify which concept to apply in a multi-step scenario"
      ],
      metadata: {
        prompts: [
          "A store marks up items by 40% and then puts them on a 25% off sale. Is the final price higher or lower than the original? Show your work.",
          "Write an equation for: A number tripled, then reduced by 8, equals 22. Solve it.",
          "If you scored 18 out of 25 on a quiz, what is your score as a fraction, a decimal, and a percentage?"
        ]
      },
      interactiveActivities: [
        {
          id: "advanced-math-201-l14-ia1",
          type: "sorting_buckets",
          title: "Choose the Right Tool",
          description: "Sort each problem type into the best math concept to solve it.",
          estimatedMinutes: 7,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "fraction", label: "Fractions" },
              { id: "percent", label: "Percentages" },
              { id: "algebra", label: "Algebra (Equations)" },
              { id: "ratio", label: "Ratios / Proportions" }
            ],
            items: [
              { id: "i1", label: "A recipe calls for 2/3 cup — you want to make 1.5 batches", correctBucketId: "fraction" },
              { id: "i2", label: "A shirt is 30% off — find the sale price", correctBucketId: "percent" },
              { id: "i3", label: "Three times a number plus 5 equals 20 — find the number", correctBucketId: "algebra" },
              { id: "i4", label: "A map scale says 1 inch = 25 miles — find real distance for 4 inches", correctBucketId: "ratio" }
            ]
          }
        },
        {
          id: "advanced-math-201-l14-ia2",
          type: "drag_and_drop",
          title: "Multi-Step Problem Solver",
          description: "Order the steps to solve: A $50 item is 20% off, then 8% sales tax is added.",
          estimatedMinutes: 6,
          difficultyLevel: "hard",
          data: {
            targets: [
              { id: "s1", label: "Step 1" },
              { id: "s2", label: "Step 2" },
              { id: "s3", label: "Step 3" },
              { id: "s4", label: "Step 4" }
            ],
            draggables: [
              { id: "d1", label: "Calculate discount: 20% of $50 = $10", correctTargetId: "s1" },
              { id: "d2", label: "Subtract discount: $50 − $10 = $40", correctTargetId: "s2" },
              { id: "d3", label: "Calculate tax: 8% of $40 = $3.20", correctTargetId: "s3" },
              { id: "d4", label: "Add tax: $40 + $3.20 = $43.20 total", correctTargetId: "s4" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "advanced-math-201-l14-a1", type: "mnemonic", title: "Problem-Solving Steps", content: "Read → Identify (what concept?) → Plan (what operations?) → Solve → Check" }
      ]
    },

    /* ──────────────────────────────────────────────
       L15  Mastery Sprint: Advanced Math  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "advanced-math-201-l15",
      title: "Mastery Sprint: Advanced Math",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "advanced-math-201-l15-q1",
          text: "What is 2/3 + 1/4?",
          skillId: "advanced-math-skill-add-unlike",
          options: [
            { id: "a", text: "3/7" },
            { id: "b", text: "11/12" },
            { id: "c", text: "3/12" },
            { id: "d", text: "8/12" }
          ],
          correctOptionId: "b",
          explanation: "Common denominator = 12. 2/3 = 8/12, 1/4 = 3/12. Sum = 11/12."
        },
        {
          id: "advanced-math-201-l15-q2",
          text: "Express 0.375 as a fraction in simplest form.",
          skillId: "advanced-math-skill-decimal-to-fraction",
          options: [
            { id: "a", text: "375/1000" },
            { id: "b", text: "3/8" },
            { id: "c", text: "37/100" },
            { id: "d", text: "3/75" }
          ],
          correctOptionId: "b",
          explanation: "0.375 = 375/1000. GCF = 125. 375÷125 = 3, 1000÷125 = 8. Answer: 3/8."
        },
        {
          id: "advanced-math-201-l15-q3",
          text: "Solve: 5x − 3 = 22",
          skillId: "advanced-math-skill-solve-2step",
          options: [
            { id: "a", text: "x = 5" },
            { id: "b", text: "x = 3.8" },
            { id: "c", text: "x = 25" },
            { id: "d", text: "x = 4" }
          ],
          correctOptionId: "a",
          explanation: "Add 3: 5x = 25. Divide by 5: x = 5. Check: 5(5) − 3 = 25 − 3 = 22 ✓."
        },
        {
          id: "advanced-math-201-l15-q4",
          text: "If 3 notebooks cost $7.50, how much do 7 notebooks cost?",
          skillId: "advanced-math-skill-proportion-mastery",
          options: [
            { id: "a", text: "$15.00" },
            { id: "b", text: "$17.50" },
            { id: "c", text: "$21.00" },
            { id: "d", text: "$22.50" }
          ],
          correctOptionId: "b",
          explanation: "Unit price = $7.50 ÷ 3 = $2.50 each. 7 × $2.50 = $17.50."
        },
        {
          id: "advanced-math-201-l15-q5",
          text: "Data set: 10, 12, 12, 15, 21. What is the mode?",
          skillId: "advanced-math-skill-mode",
          options: [
            { id: "a", text: "14" },
            { id: "b", text: "15" },
            { id: "c", text: "12" },
            { id: "d", text: "10" }
          ],
          correctOptionId: "c",
          explanation: "The mode is the most frequently occurring value. 12 appears twice — more than any other value."
        },
        {
          id: "advanced-math-201-l15-q6",
          text: "A spinner has 3 blue, 2 red, and 5 yellow sections. What is the probability of landing on blue?",
          skillId: "advanced-math-skill-probability-mastery",
          options: [
            { id: "a", text: "3/5" },
            { id: "b", text: "3/7" },
            { id: "c", text: "3/10" },
            { id: "d", text: "1/3" }
          ],
          correctOptionId: "c",
          explanation: "Total sections = 3+2+5 = 10. P(blue) = 3/10."
        }
      ],
      interactiveActivities: [
        {
          id: "advanced-math-201-l15-ia1",
          type: "matching_pairs",
          title: "Concept Connections",
          description: "Match each math concept to the formula or definition.",
          estimatedMinutes: 6,
          difficultyLevel: "hard",
          data: {
            left: [
              { id: "l1", label: "Mean" },
              { id: "l2", label: "Probability" },
              { id: "l3", label: "Percent of a number" },
              { id: "l4", label: "Solving an equation" }
            ],
            right: [
              { id: "r1", label: "Sum of values ÷ count" },
              { id: "r2", label: "Favorable outcomes ÷ total outcomes" },
              { id: "r3", label: "Convert to decimal, then multiply" },
              { id: "r4", label: "Use inverse operations to isolate the variable" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" },
              { leftId: "l4", rightId: "r4" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "mastery_check",
        questionsPerCheck: 6,
        totalQuestions: 6,
        timeLimitMinutes: 12,
        questionTypes: [{ type: "mcq_single", count: 6, pointsEach: 1, bloomsLevels: [1, 2, 3, 4] }],
        difficultyDistribution: { easy: 1, medium: 3, hard: 2 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "advanced-math-201-l15-a1", type: "mnemonic", title: "Formula Quick Reference", content: "Mean = sum/count | P = favorable/total | Percent of n = (p/100)×n | Balance rule: same operation both sides" }
      ]
    }
  ]
};
