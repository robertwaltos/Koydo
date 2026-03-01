import type { LearningModule } from "@/lib/modules/types";

export const math101Module: LearningModule = {
  id: "math-101",
  title: "Math Foundations: From PEMDAS to Equations",
  description:
    "Master the building blocks of mathematics. Learn the order of operations, conquer fractions and decimals, understand integers and the number line, explore variables, and solve your first equations — the gateway to algebra.",
  subject: "Math",
  tags: ["curriculum", "interactive", "foundations", "numbers"],
  minAge: 10,
  maxAge: 14,
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es"],
  learningObjectives: [
    "Apply PEMDAS to evaluate multi-step numerical expressions correctly",
    "Add, subtract, multiply, and divide fractions with unlike denominators",
    "Convert between fractions, decimals, and percentages fluently",
    "Locate and compare positive and negative integers on a number line",
    "Translate word phrases into algebraic expressions using variables",
    "Solve one-step equations using inverse operations and verify solutions"
  ],
  lessons: [
    /* ── L01 PEMDAS / Order of Operations ── */
    {
      id: "math-101-l01",
      title: "Order of Operations (PEMDAS)",
      type: "video",
      duration: 11,
      chunks: [
        { id: "math-101-l01-c1", title: "Why Order Matters", content: "Does 3 + 4 × 2 equal 14 or 11? Without rules, different people get different answers — chaos! The Order of Operations is a universal agreement so everyone evaluates expressions the same way. Without it, calculators, computers, banks, and engineers would all disagree. The mnemonic PEMDAS helps you remember the order: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right). So 3 + 4 × 2 = 3 + 8 = 11 — multiplication before addition!" },
        { id: "math-101-l01-c2", title: "PEMDAS Step by Step", content: "PEMDAS: P — Parentheses first. Always evaluate what's inside parentheses before anything else. E — Exponents next (like 2³ = 8). M/D — Multiplication and Division are EQUAL priority — work left to right. A/S — Addition and Subtraction are EQUAL priority — work left to right. Common mistake: thinking multiplication always comes before division. They're EQUAL — go left to right! Example: 8 ÷ 2 × 4 = 4 × 4 = 16 (left to right), NOT 8 ÷ 8 = 1." },
        { id: "math-101-l01-c3", title: "Multi-Step Practice", content: "Let's solve: 2 × (3 + 5)² ÷ 4 - 1. Step 1 — Parentheses: (3 + 5) = 8. Step 2 — Exponents: 8² = 64. Step 3 — Multiply: 2 × 64 = 128. Step 4 — Divide: 128 ÷ 4 = 32. Step 5 — Subtract: 32 - 1 = 31. Another: 12 - 3 × 2 + 4 → Multiply first: 12 - 6 + 4 → Left to right: 6 + 4 = 10. Tip: Underline the operation you'll do next — it keeps you on track!" }
      ],
      flashcards: [
        { id: "math-101-l01-f1", front: "P-E-M/D-A/S", back: "Parentheses, Exponents, Multiplication/Division (L→R), Addition/Subtraction (L→R)" },
        { id: "math-101-l01-f2", front: "3 + 4 × 2 = ?", back: "11 (multiply first: 4 × 2 = 8, then add: 3 + 8 = 11)" },
        { id: "math-101-l01-f3", front: "M and D have _____ priority", back: "EQUAL priority — evaluate left to right" },
        { id: "math-101-l01-f4", front: "First step when you see parentheses", back: "Evaluate what's inside the parentheses before anything else" }
      ],
      questions: [
        { id: "math-101-l01-q1", text: "What is 5 + 3 × 2?", options: [{ id: "a", text: "11" }, { id: "b", text: "16" }, { id: "c", text: "13" }, { id: "d", text: "10" }], correctOptionId: "a", explanation: "Multiply first: 3 × 2 = 6. Then add: 5 + 6 = 11. PEMDAS!" },
        { id: "math-101-l01-q2", text: "In PEMDAS, multiplication and division are", options: [{ id: "a", text: "Equal priority — evaluated left to right" }, { id: "b", text: "Multiplication always first" }, { id: "c", text: "Division always first" }, { id: "d", text: "Done after addition" }], correctOptionId: "a", explanation: "M and D are equal — just go left to right through the expression!" },
        { id: "math-101-l01-q3", text: "What is (4 + 2) × 3?", options: [{ id: "a", text: "18" }, { id: "b", text: "10" }, { id: "c", text: "14" }, { id: "d", text: "9" }], correctOptionId: "a", explanation: "Parentheses first: 4 + 2 = 6. Then multiply: 6 × 3 = 18!" }
      ],
      interactiveActivities: [{ id: "math-101-l01-act1", type: "timeline_builder", title: "PEMDAS order", description: "Arrange the steps to evaluate 2 + 3 × (4 - 1)²: Parentheses (4-1=3) → Exponents (3²=9) → Multiply (3×9=27) → Add (2+27=29)." }]
    },

    /* ── L02 Fractions ── */
    {
      id: "math-101-l02",
      title: "Fractions",
      type: "video",
      duration: 13,
      chunks: [
        { id: "math-101-l02-c1", title: "What Is a Fraction?", content: "A fraction represents a PART of a whole. Written as a/b — the numerator (top) counts how many parts you have, the denominator (bottom) tells how many equal parts make the whole. Example: 3/4 means '3 out of 4 equal parts.' Fractions are everywhere: half a pizza (1/2), a quarter of an hour (1/4 = 15 minutes), 3/10 of a dollar (30 cents). Key vocabulary: proper fraction (numerator < denominator, like 2/5), improper fraction (numerator ≥ denominator, like 7/3), mixed number (whole + fraction, like 2⅓)." },
        { id: "math-101-l02-c2", title: "Adding and Subtracting Fractions", content: "Same denominator? Easy — just add/subtract the numerators: 2/7 + 3/7 = 5/7. Different denominators? Find the Least Common Denominator (LCD). Example: 1/3 + 1/4. LCD of 3 and 4 is 12. Convert: 1/3 = 4/12, 1/4 = 3/12. Now add: 4/12 + 3/12 = 7/12. Always simplify your answer by dividing numerator and denominator by their Greatest Common Factor (GCF). Example: 6/8 → GCF of 6 and 8 is 2 → 6÷2 / 8÷2 = 3/4." },
        { id: "math-101-l02-c3", title: "Multiplying and Dividing Fractions", content: "Multiplying fractions: multiply numerators, multiply denominators. 2/3 × 4/5 = 8/15. Cross-cancel first to keep numbers small: 3/4 × 2/9 → cancel the 3 and 9 (both ÷3) → 1/4 × 2/3 = 2/12 = 1/6. Dividing fractions: 'Keep-Change-Flip' — keep the first fraction, change ÷ to ×, flip the second fraction. Example: 3/4 ÷ 2/5 → 3/4 × 5/2 = 15/8 = 1⅞. Why does this work? Dividing by a fraction is the same as multiplying by its reciprocal." }
      ],
      flashcards: [
        { id: "math-101-l02-f1", front: "Numerator / Denominator", back: "Top = how many parts you have; Bottom = how many equal parts make the whole" },
        { id: "math-101-l02-f2", front: "Adding fractions with different denominators", back: "Find the LCD, convert both fractions, then add numerators" },
        { id: "math-101-l02-f3", front: "Keep-Change-Flip", back: "Method for dividing fractions: keep first, change ÷ to ×, flip the second" },
        { id: "math-101-l02-f4", front: "1/3 + 1/4 = ?", back: "4/12 + 3/12 = 7/12" }
      ],
      questions: [
        { id: "math-101-l02-q1", text: "What is 1/3 + 1/4?", options: [{ id: "a", text: "7/12" }, { id: "b", text: "2/7" }, { id: "c", text: "1/7" }, { id: "d", text: "2/12" }], correctOptionId: "a", explanation: "LCD = 12. Convert: 4/12 + 3/12 = 7/12!" },
        { id: "math-101-l02-q2", text: "What is 2/3 × 3/4?", options: [{ id: "a", text: "1/2" }, { id: "b", text: "6/7" }, { id: "c", text: "5/12" }, { id: "d", text: "6/12" }], correctOptionId: "a", explanation: "2×3 = 6, 3×4 = 12, so 6/12 = 1/2. Or cross-cancel first!" },
        { id: "math-101-l02-q3", text: "To divide fractions, you", options: [{ id: "a", text: "Keep the first, change ÷ to ×, flip the second" }, { id: "b", text: "Flip both fractions" }, { id: "c", text: "Add the denominators" }, { id: "d", text: "Subtract the numerators" }], correctOptionId: "a", explanation: "Keep-Change-Flip! Dividing by a fraction = multiplying by its reciprocal!" }
      ],
      interactiveActivities: [{ id: "math-101-l02-act1", type: "sorting_buckets", title: "Fraction types", description: "Classify: Proper (2/5, 1/3, 4/7), Improper (7/3, 5/4, 9/2), Mixed Number (2⅓, 1½, 3¼)." }]
    },

    /* ── L03 Decimals and Percentages ── */
    {
      id: "math-101-l03",
      title: "Decimals & Percentages",
      type: "video",
      duration: 12,
      chunks: [
        { id: "math-101-l03-c1", title: "Understanding Decimals", content: "Decimals are fractions written in base-10 notation. The decimal point separates the whole number from the fractional part. Place values: tenths (0.1 = 1/10), hundredths (0.01 = 1/100), thousandths (0.001 = 1/1000). Reading decimals: 3.47 = 'three and forty-seven hundredths.' Adding/subtracting decimals: LINE UP THE DECIMAL POINTS, then add/subtract as normal. Example: 3.25 + 1.7 → write as 3.25 + 1.70 = 4.95." },
        { id: "math-101-l03-c2", title: "Understanding Percentages", content: "Percent means 'per hundred.' 45% = 45/100 = 0.45. To convert: Fraction → Decimal: divide numerator by denominator (3/4 = 0.75). Decimal → Percent: multiply by 100 (0.75 × 100 = 75%). Percent → Decimal: divide by 100 (75% ÷ 100 = 0.75). Fraction → Percent: convert to decimal first, then multiply by 100 (3/8 = 0.375 = 37.5%). Common equivalents to memorize: 1/2 = 0.5 = 50%, 1/4 = 0.25 = 25%, 1/5 = 0.2 = 20%, 3/4 = 0.75 = 75%." },
        { id: "math-101-l03-c3", title: "Real-World Applications", content: "Sales tax: Item costs $40, tax is 8%. Tax = $40 × 0.08 = $3.20. Total = $43.20. Discounts: 25% off a $60 jacket. Discount = $60 × 0.25 = $15. Sale price = $60 - $15 = $45. Tips: 15% tip on a $30 meal. Tip = $30 × 0.15 = $4.50. Quick 10% trick: move the decimal left one place. 10% of $47.00 = $4.70. For 20%, double it: $9.40. For 15%, find 10% + half of 10%: $4.70 + $2.35 = $7.05." }
      ],
      flashcards: [
        { id: "math-101-l03-f1", front: "Percent means", back: "Per hundred (45% = 45 out of 100)" },
        { id: "math-101-l03-f2", front: "Decimal → Percent conversion", back: "Multiply by 100 (move decimal right 2 places)" },
        { id: "math-101-l03-f3", front: "1/4 = ___ = ___% ", back: "0.25 = 25%" },
        { id: "math-101-l03-f4", front: "Quick trick for finding 10%", back: "Move the decimal point one place to the left" }
      ],
      questions: [
        { id: "math-101-l03-q1", text: "What is 3/4 as a percentage?", options: [{ id: "a", text: "75%" }, { id: "b", text: "34%" }, { id: "c", text: "50%" }, { id: "d", text: "80%" }], correctOptionId: "a", explanation: "3 ÷ 4 = 0.75. Multiply by 100 = 75%!" },
        { id: "math-101-l03-q2", text: "25% off a $60 item means the sale price is", options: [{ id: "a", text: "$45" }, { id: "b", text: "$35" }, { id: "c", text: "$50" }, { id: "d", text: "$15" }], correctOptionId: "a", explanation: "25% of $60 = $15 discount. $60 - $15 = $45!" },
        { id: "math-101-l03-q3", text: "0.375 as a fraction in simplest form is", options: [{ id: "a", text: "3/8" }, { id: "b", text: "375/100" }, { id: "c", text: "3/4" }, { id: "d", text: "37/100" }], correctOptionId: "a", explanation: "0.375 = 375/1000. Simplify: ÷125 → 3/8!" }
      ],
      interactiveActivities: [{ id: "math-101-l03-act1", type: "matching_pairs", title: "Fraction-Decimal-Percent match", description: "Match: 1/2 ↔ 0.5 ↔ 50%, 1/4 ↔ 0.25 ↔ 25%, 3/4 ↔ 0.75 ↔ 75%, 1/5 ↔ 0.2 ↔ 20%, 1/8 ↔ 0.125 ↔ 12.5%." }]
    },

    /* ── L04 Math Checkpoint ── */
    {
      id: "math-101-l04",
      title: "Math Foundations Checkpoint",
      type: "quiz",
      duration: 8,
      questions: [
        { id: "math-101-l04-q1", text: "What is 8 + 2 × 3?", options: [{ id: "a", text: "14" }, { id: "b", text: "30" }, { id: "c", text: "18" }, { id: "d", text: "12" }], correctOptionId: "a", explanation: "Multiply first: 2 × 3 = 6. Then add: 8 + 6 = 14. PEMDAS!" },
        { id: "math-101-l04-q2", text: "What is 2/5 + 1/5?", options: [{ id: "a", text: "3/5" }, { id: "b", text: "3/10" }, { id: "c", text: "1/5" }, { id: "d", text: "2/5" }], correctOptionId: "a", explanation: "Same denominator — just add numerators: 2 + 1 = 3, so 3/5!" },
        { id: "math-101-l04-q3", text: "What is 40% as a decimal?", options: [{ id: "a", text: "0.4" }, { id: "b", text: "4.0" }, { id: "c", text: "0.04" }, { id: "d", text: "0.004" }], correctOptionId: "a", explanation: "Divide by 100: 40 ÷ 100 = 0.4!" }
      ],
      flashcards: [
        { id: "math-101-l04-f1", front: "PEMDAS order", back: "Parentheses → Exponents → Mult/Div (L→R) → Add/Sub (L→R)" },
        { id: "math-101-l04-f2", front: "Adding fractions with same denominator", back: "Add numerators, keep the denominator" },
        { id: "math-101-l04-f3", front: "Percent → Decimal", back: "Divide by 100" },
        { id: "math-101-l04-f4", front: "Decimal → Percent", back: "Multiply by 100" }
      ]
    },

    /* ── L05 Integers and the Number Line ── */
    {
      id: "math-101-l05",
      title: "Integers & the Number Line",
      type: "video",
      duration: 11,
      chunks: [
        { id: "math-101-l05-c1", title: "What Are Integers?", content: "Integers are whole numbers that include positive numbers, negative numbers, and zero: …, -3, -2, -1, 0, 1, 2, 3, … They do NOT include fractions or decimals. Real-world examples: temperature (-5°F below zero), bank accounts (-$50 means overdrawn), elevation (Death Valley = -282 feet below sea level, Mt. Everest = +29,032 feet). On a number line, negative numbers go LEFT of zero, positive numbers go RIGHT. Numbers further right are GREATER: -2 > -5 because -2 is closer to zero." },
        { id: "math-101-l05-c2", title: "Adding and Subtracting Integers", content: "Adding same signs: add the absolute values, keep the sign. (+3) + (+5) = +8. (-3) + (-5) = -8. Adding different signs: subtract the smaller absolute value from the larger, take the sign of the larger. (-7) + (+4) = -3 (because 7 > 4, result is negative). Subtracting integers: change to ADDING THE OPPOSITE. 5 - (-3) = 5 + (+3) = 8. (-4) - (+2) = (-4) + (-2) = -6. Key phrase: 'subtracting a negative is like adding' — the two negatives cancel out!" },
        { id: "math-101-l05-c3", title: "Absolute Value", content: "Absolute value is the DISTANCE from zero on the number line — always positive or zero. Written with vertical bars: |−7| = 7, |4| = 4, |0| = 0. Think of it as 'how far from zero?' regardless of direction. |-3| = |3| = 3. Absolute value is used for: distance calculations, error measurement, and comparing magnitudes. Ordering integers: to compare -8 and -3, think about the number line — -3 is further right, so -3 > -8." }
      ],
      flashcards: [
        { id: "math-101-l05-f1", front: "Integers include", back: "…, -3, -2, -1, 0, 1, 2, 3, … (whole numbers including negatives)" },
        { id: "math-101-l05-f2", front: "Subtracting a negative", back: "Same as adding a positive: 5 - (-3) = 5 + 3 = 8" },
        { id: "math-101-l05-f3", front: "|−7| = ?", back: "7 (absolute value = distance from zero)" },
        { id: "math-101-l05-f4", front: "Which is greater: -3 or -8?", back: "-3 (further right on the number line)" }
      ],
      questions: [
        { id: "math-101-l05-q1", text: "What is (-4) + (-6)?", options: [{ id: "a", text: "-10" }, { id: "b", text: "10" }, { id: "c", text: "-2" }, { id: "d", text: "2" }], correctOptionId: "a", explanation: "Same signs: add absolute values (4+6=10), keep the negative sign = -10!" },
        { id: "math-101-l05-q2", text: "What is 7 - (-3)?", options: [{ id: "a", text: "10" }, { id: "b", text: "4" }, { id: "c", text: "-10" }, { id: "d", text: "-4" }], correctOptionId: "a", explanation: "Subtracting a negative = adding: 7 + 3 = 10!" },
        { id: "math-101-l05-q3", text: "The absolute value of -12 is", options: [{ id: "a", text: "12" }, { id: "b", text: "-12" }, { id: "c", text: "0" }, { id: "d", text: "-1" }], correctOptionId: "a", explanation: "Absolute value = distance from zero = 12!" }
      ],
      interactiveActivities: [{ id: "math-101-l05-act1", type: "sorting_buckets", title: "Integer classifier", description: "Classify: Positive (7, 15, 100), Negative (-3, -28, -1), Zero (0). Then order: -8, -3, 0, 4, 9 on number line." }]
    },

    /* ── L06 Variables and Expressions ── */
    {
      id: "math-101-l06",
      title: "Variables & Expressions",
      type: "video",
      duration: 12,
      chunks: [
        { id: "math-101-l06-c1", title: "What Is a Variable?", content: "A variable is a letter (like x, y, or n) that represents an unknown number. Think of it as a 'mystery box' holding a value you need to find. In 3x + 5, 'x' is the variable and could be any number. Variables let us write general rules: 'double a number and add 5' becomes 2n + 5 — this works for ANY number n. Why use variables? Because they let us describe patterns, write formulas (Area = length × width → A = l × w), and solve problems where we don't yet know a value." },
        { id: "math-101-l06-c2", title: "Writing Algebraic Expressions", content: "Translating English to algebra: 'a number plus 7' → x + 7. '5 less than a number' → x - 5 (NOT 5 - x!). 'Twice a number' → 2x. 'A number divided by 3' → x/3. 'The product of 4 and a number, decreased by 1' → 4x - 1. Common trap: 'less than' is REVERSED. '3 less than x' means x - 3, not 3 - x. Tip: identify the operation word first (sum, difference, product, quotient), then build the expression." },
        { id: "math-101-l06-c3", title: "Evaluating Expressions", content: "To evaluate an expression, substitute the given value for the variable and compute. Example: Evaluate 3x + 2 when x = 4. Substitute: 3(4) + 2 = 12 + 2 = 14. Example: Evaluate 2a² - b when a = 3 and b = 5. Substitute: 2(3)² - 5 = 2(9) - 5 = 18 - 5 = 13. Remember PEMDAS when evaluating! Like terms have the same variable and exponent: 3x and 5x are like terms (combine to 8x), but 3x and 3x² are NOT like terms." }
      ],
      flashcards: [
        { id: "math-101-l06-f1", front: "A letter representing an unknown number", back: "Variable" },
        { id: "math-101-l06-f2", front: "'5 less than a number' in algebra", back: "x - 5 (NOT 5 - x!)" },
        { id: "math-101-l06-f3", front: "Evaluate 3x + 2 when x = 4", back: "3(4) + 2 = 12 + 2 = 14" },
        { id: "math-101-l06-f4", front: "Like terms", back: "Terms with the same variable and exponent (3x and 5x → can combine to 8x)" }
      ],
      questions: [
        { id: "math-101-l06-q1", text: "'Twice a number, decreased by 3' is written as", options: [{ id: "a", text: "2x - 3" }, { id: "b", text: "3 - 2x" }, { id: "c", text: "2x + 3" }, { id: "d", text: "x² - 3" }], correctOptionId: "a", explanation: "Twice a number = 2x. Decreased by 3 = subtract 3. So 2x - 3!" },
        { id: "math-101-l06-q2", text: "Evaluate 4x - 1 when x = 5", options: [{ id: "a", text: "19" }, { id: "b", text: "20" }, { id: "c", text: "9" }, { id: "d", text: "15" }], correctOptionId: "a", explanation: "Substitute: 4(5) - 1 = 20 - 1 = 19!" },
        { id: "math-101-l06-q3", text: "Which are like terms?", options: [{ id: "a", text: "3x and 7x" }, { id: "b", text: "3x and 3y" }, { id: "c", text: "x and x²" }, { id: "d", text: "2 and 2x" }], correctOptionId: "a", explanation: "Same variable, same exponent = like terms. 3x and 7x both have x¹!" }
      ],
      interactiveActivities: [{ id: "math-101-l06-act1", type: "matching_pairs", title: "English to algebra", description: "Match: 'a number plus 7' → x + 7, 'twice a number' → 2x, '5 less than a number' → x - 5, 'a number divided by 3' → x/3, 'the product of 4 and a number' → 4x." }]
    },

    /* ── L07 One-Step Equations ── */
    {
      id: "math-101-l07",
      title: "One-Step Equations",
      type: "video",
      duration: 12,
      chunks: [
        { id: "math-101-l07-c1", title: "What Is an Equation?", content: "An equation is a mathematical statement that two expressions are EQUAL, connected by an = sign. Example: x + 5 = 12. The goal: find the value of x that makes the equation TRUE. An equation is like a balanced scale — whatever you do to one side, you MUST do to the other side to keep it balanced. 'Solving' means isolating the variable (getting x alone on one side). One-step equations need only ONE operation to solve." },
        { id: "math-101-l07-c2", title: "Solving with Inverse Operations", content: "To isolate the variable, use the INVERSE (opposite) operation. Addition ↔ Subtraction. Multiplication ↔ Division. Example 1: x + 5 = 12. Inverse of +5 is -5. Subtract 5 from both sides: x = 12 - 5 = 7. Example 2: x - 3 = 10. Inverse of -3 is +3. Add 3 to both sides: x = 10 + 3 = 13. Example 3: 4x = 20. Inverse of ×4 is ÷4. Divide both sides by 4: x = 20 ÷ 4 = 5. Example 4: x/3 = 6. Inverse of ÷3 is ×3. Multiply both sides by 3: x = 6 × 3 = 18." },
        { id: "math-101-l07-c3", title: "Checking Your Solution", content: "ALWAYS check your answer by substituting it back into the original equation. Solved x + 5 = 12, got x = 7. Check: 7 + 5 = 12 ✓. Solved 4x = 20, got x = 5. Check: 4(5) = 20 ✓. If the check doesn't work, you made an error — go back and redo it. Common mistakes: forgetting to do the same operation to BOTH sides, using the wrong inverse operation, arithmetic errors in the last step. Checking catches all of these!" }
      ],
      flashcards: [
        { id: "math-101-l07-f1", front: "Inverse of addition", back: "Subtraction (and vice versa)" },
        { id: "math-101-l07-f2", front: "Inverse of multiplication", back: "Division (and vice versa)" },
        { id: "math-101-l07-f3", front: "Solve: x + 5 = 12", back: "x = 7 (subtract 5 from both sides)" },
        { id: "math-101-l07-f4", front: "Why check your answer?", back: "Substitute back into the original equation to verify it's true" }
      ],
      questions: [
        { id: "math-101-l07-q1", text: "Solve: x + 8 = 15", options: [{ id: "a", text: "x = 7" }, { id: "b", text: "x = 23" }, { id: "c", text: "x = 8" }, { id: "d", text: "x = 15" }], correctOptionId: "a", explanation: "Subtract 8 from both sides: x = 15 - 8 = 7. Check: 7 + 8 = 15 ✓!" },
        { id: "math-101-l07-q2", text: "Solve: 3x = 21", options: [{ id: "a", text: "x = 7" }, { id: "b", text: "x = 24" }, { id: "c", text: "x = 18" }, { id: "d", text: "x = 63" }], correctOptionId: "a", explanation: "Divide both sides by 3: x = 21 ÷ 3 = 7. Check: 3(7) = 21 ✓!" },
        { id: "math-101-l07-q3", text: "To solve x - 4 = 9, you should", options: [{ id: "a", text: "Add 4 to both sides" }, { id: "b", text: "Subtract 4 from both sides" }, { id: "c", text: "Multiply both sides by 4" }, { id: "d", text: "Divide both sides by 4" }], correctOptionId: "a", explanation: "Inverse of -4 is +4. Add 4 to both sides: x = 9 + 4 = 13!" }
      ],
      interactiveActivities: [{ id: "math-101-l07-act1", type: "matching_pairs", title: "Equation solver", description: "Match equations with solutions: x + 3 = 10 → x = 7, 2x = 16 → x = 8, x - 5 = 4 → x = 9, x/4 = 3 → x = 12, x + 12 = 20 → x = 8." }]
    },

    /* ── L08 Math Foundations Final Assessment ── */
    {
      id: "math-101-l08",
      title: "Math Foundations Final Assessment",
      type: "quiz",
      duration: 10,
      questions: [
        { id: "math-101-l08-q1", text: "What is 12 - 4 × 2?", options: [{ id: "a", text: "4" }, { id: "b", text: "16" }, { id: "c", text: "8" }, { id: "d", text: "20" }], correctOptionId: "a", explanation: "PEMDAS: Multiply first (4 × 2 = 8), then subtract (12 - 8 = 4)!" },
        { id: "math-101-l08-q2", text: "What is 1/2 + 1/3?", options: [{ id: "a", text: "5/6" }, { id: "b", text: "2/5" }, { id: "c", text: "1/5" }, { id: "d", text: "2/6" }], correctOptionId: "a", explanation: "LCD = 6. Convert: 3/6 + 2/6 = 5/6!" },
        { id: "math-101-l08-q3", text: "Solve: 5x = 35", options: [{ id: "a", text: "x = 7" }, { id: "b", text: "x = 30" }, { id: "c", text: "x = 40" }, { id: "d", text: "x = 175" }], correctOptionId: "a", explanation: "Divide both sides by 5: x = 35 ÷ 5 = 7. Check: 5(7) = 35 ✓!" }
      ],
      flashcards: [
        { id: "math-101-l08-f1", front: "PEMDAS", back: "Parentheses, Exponents, Mult/Div (L→R), Add/Sub (L→R)" },
        { id: "math-101-l08-f2", front: "Keep-Change-Flip", back: "Method for dividing fractions" },
        { id: "math-101-l08-f3", front: "Solving one-step equations", back: "Use inverse operations to isolate the variable, check by substituting back" },
        { id: "math-101-l08-f4", front: "Absolute value", back: "Distance from zero — always non-negative" }
      ]
    }
  ]
};
