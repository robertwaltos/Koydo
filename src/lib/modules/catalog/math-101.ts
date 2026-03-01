import type { LearningModule } from "@/lib/modules/types";

export const math101Module: LearningModule = {
  "id": "math-101",
  "title": "Math Foundations: From PEMDAS to Equations",
  "description": "Master the building blocks of mathematics. Learn the order of operations, conquer fractions and decimals, understand integers and the number line, explore variables, and solve your first equations — the gateway to algebra.",
  "subject": "Math",
  "tags": [
    "curriculum",
    "interactive",
    "foundations",
    "numbers"
  ],
  "minAge": 10,
  "maxAge": 14,
  "version": "2.0.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Apply PEMDAS to evaluate multi-step numerical expressions correctly",
    "Add, subtract, multiply, and divide fractions with unlike denominators",
    "Convert between fractions, decimals, and percentages fluently",
    "Locate and compare positive and negative integers on a number line",
    "Translate word phrases into algebraic expressions using variables",
    "Solve one-step equations using inverse operations and verify solutions"
  ],
  "lessons": [
    {
      "id": "math-101-l01",
      "title": "Order of Operations (PEMDAS)",
      "type": "video",
      "duration": 11,
      "objectives": [
        "State the correct order of operations using the PEMDAS mnemonic",
        "Evaluate multi-step expressions with parentheses, exponents, and mixed operations",
        "Recognize that multiplication/division and addition/subtraction share equal priority within their pairs"
      ],
      "chunks": [
        {
          "id": "math-101-l01-c1",
          "title": "Why Order Matters",
          "content": "Does 3 + 4 × 2 equal 14 or 11? Without a universal set of rules, different people would get different answers — banks, engineers, and computers would all disagree. The Order of Operations is a worldwide agreement that ensures every mathematical expression has exactly one correct value. The mnemonic PEMDAS helps you remember the priority: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right). Applying it to our example: multiply first (4 × 2 = 8), then add (3 + 8 = 11)."
        },
        {
          "id": "math-101-l01-c2",
          "title": "PEMDAS Step by Step",
          "content": "P — Parentheses always come first; evaluate every expression inside parentheses before doing anything else. E — Exponents are next (for example, 2³ = 8). M/D — Multiplication and Division share EQUAL priority and are worked left to right, not multiplication-before-division. A/S — Addition and Subtraction also share equal priority and are worked left to right. A common mistake is thinking multiplication always beats division; in reality 8 ÷ 2 × 4 is evaluated left to right: 4 × 4 = 16, not 8 ÷ 8 = 1."
        },
        {
          "id": "math-101-l01-c3",
          "title": "Multi-Step Practice",
          "content": "Let's solve 2 × (3 + 5)² ÷ 4 − 1 step by step. Parentheses first: (3 + 5) = 8. Exponents: 8² = 64. Multiply: 2 × 64 = 128. Divide: 128 ÷ 4 = 32. Subtract: 32 − 1 = 31. Another example: 12 − 3 × 2 + 4 → multiply first to get 12 − 6 + 4 → work left to right: 6 + 4 = 10. A helpful strategy is to underline the operation you will perform next — it keeps you organized and reduces careless errors on tests."
        }
      ],
      "flashcards": [
        {
          "id": "math-101-l01-f1",
          "front": "What does PEMDAS stand for?",
          "back": "Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right)"
        },
        {
          "id": "math-101-l01-f2",
          "front": "Evaluate: 3 + 4 × 2",
          "back": "11 — multiply first (4 × 2 = 8), then add (3 + 8 = 11)"
        },
        {
          "id": "math-101-l01-f3",
          "front": "Do multiplication and division have the same priority?",
          "back": "Yes — they share equal priority and are evaluated left to right"
        },
        {
          "id": "math-101-l01-f4",
          "front": "What is the very first step when an expression contains parentheses?",
          "back": "Evaluate everything inside the parentheses before performing any other operations"
        }
      ],
      "learningAids": [
        {
          "id": "math-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "math-101-l02",
      "title": "Fractions — Adding & Subtracting",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Define numerator, denominator, and types of fractions (proper, improper, mixed)",
        "Add and subtract fractions with like and unlike denominators",
        "Simplify fractions using the Greatest Common Factor"
      ],
      "chunks": [
        {
          "id": "math-101-l02-c1",
          "title": "What Is a Fraction?",
          "content": "A fraction represents a part of a whole, written as a/b where the numerator (top) counts how many parts you have and the denominator (bottom) tells how many equal parts make the whole. For example, 3/4 means three out of four equal slices. A proper fraction has a numerator smaller than its denominator (like 2/5), an improper fraction has a numerator greater than or equal to the denominator (like 7/3), and a mixed number combines a whole number with a fraction (like 2⅓). Fractions appear everywhere — from half a pizza to a quarter of an hour."
        },
        {
          "id": "math-101-l02-c2",
          "title": "Adding and Subtracting with Like Denominators",
          "content": "When two fractions share the same denominator, simply add or subtract the numerators and keep the denominator unchanged: 2/7 + 3/7 = 5/7. Think of it as counting equal-sized pieces — two sevenths plus three sevenths gives five sevenths. After computing, always check whether the result can be simplified by dividing both numerator and denominator by their Greatest Common Factor (GCF). For example, 4/8 simplifies to 1/2 because GCF(4, 8) = 4. Simplifying keeps numbers manageable and answers in standard form."
        },
        {
          "id": "math-101-l02-c3",
          "title": "Adding and Subtracting with Unlike Denominators",
          "content": "When denominators differ, you must first find a common denominator — the Least Common Denominator (LCD) is the most efficient choice. For 1/3 + 1/4 the LCD of 3 and 4 is 12, so rewrite the fractions: 1/3 = 4/12 and 1/4 = 3/12, then add: 4/12 + 3/12 = 7/12. To find the LCD, list multiples of each denominator until you find the smallest one they share, or compute LCM using prime factorization. Always simplify the final answer: 6/8 has GCF 2, so it becomes 3/4."
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-101-l02-a1",
          "title": "Classify Fraction Types",
          "type": "sorting_buckets",
          "buckets": [
            "Proper Fraction",
            "Improper Fraction",
            "Mixed Number"
          ],
          "items": [
            {
              "text": "2/5",
              "bucket": "Proper Fraction"
            },
            {
              "text": "7/3",
              "bucket": "Improper Fraction"
            },
            {
              "text": "2⅓",
              "bucket": "Mixed Number"
            },
            {
              "text": "1/3",
              "bucket": "Proper Fraction"
            },
            {
              "text": "5/4",
              "bucket": "Improper Fraction"
            },
            {
              "text": "3¼",
              "bucket": "Mixed Number"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "math-101-l02-f1",
          "front": "Numerator vs. Denominator",
          "back": "Numerator (top) = how many parts you have; Denominator (bottom) = how many equal parts make the whole"
        },
        {
          "id": "math-101-l02-f2",
          "front": "How do you add fractions with the same denominator?",
          "back": "Add the numerators and keep the denominator: 2/7 + 3/7 = 5/7"
        },
        {
          "id": "math-101-l02-f3",
          "front": "What is the LCD?",
          "back": "Least Common Denominator — the smallest number that is a multiple of both denominators, used to add or subtract fractions with unlike denominators"
        },
        {
          "id": "math-101-l02-f4",
          "front": "Evaluate: 1/3 + 1/4",
          "back": "LCD = 12 → 4/12 + 3/12 = 7/12"
        }
      ],
      "learningAids": [
        {
          "id": "math-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "math-101-l03",
      "title": "Operations & Fractions Checkpoint",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate mastery of PEMDAS and fraction addition/subtraction"
      ],
      "questions": [
        {
          "id": "math-101-l03-q1",
          "text": "What is 5 + 3 × 2?",
          "options": [
            {
              "id": "a",
              "text": "11"
            },
            {
              "id": "b",
              "text": "16"
            },
            {
              "id": "c",
              "text": "13"
            },
            {
              "id": "d",
              "text": "10"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Multiply first: 3 × 2 = 6. Then add: 5 + 6 = 11. PEMDAS requires multiplication before addition."
        },
        {
          "id": "math-101-l03-q2",
          "text": "In PEMDAS, multiplication and division are:",
          "options": [
            {
              "id": "a",
              "text": "Equal priority — evaluated left to right"
            },
            {
              "id": "b",
              "text": "Multiplication always comes first"
            },
            {
              "id": "c",
              "text": "Division always comes first"
            },
            {
              "id": "d",
              "text": "Done after addition and subtraction"
            }
          ],
          "correctOptionId": "a",
          "explanation": "M and D share equal priority — evaluate whichever comes first from left to right."
        },
        {
          "id": "math-101-l03-q3",
          "text": "What is 1/3 + 1/4?",
          "options": [
            {
              "id": "a",
              "text": "7/12"
            },
            {
              "id": "b",
              "text": "2/7"
            },
            {
              "id": "c",
              "text": "1/7"
            },
            {
              "id": "d",
              "text": "2/12"
            }
          ],
          "correctOptionId": "a",
          "explanation": "LCD = 12. Convert: 1/3 = 4/12, 1/4 = 3/12. Add: 4/12 + 3/12 = 7/12."
        },
        {
          "id": "math-101-l03-q4",
          "text": "What is (4 + 2) × 3?",
          "options": [
            {
              "id": "a",
              "text": "18"
            },
            {
              "id": "b",
              "text": "10"
            },
            {
              "id": "c",
              "text": "14"
            },
            {
              "id": "d",
              "text": "9"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Parentheses first: 4 + 2 = 6. Then multiply: 6 × 3 = 18."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "learningAids": [
        {
          "id": "math-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "math-101-l04",
      "title": "Fractions — Multiplying, Dividing & Converting",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Multiply fractions using cross-cancellation to simplify",
        "Divide fractions with the Keep-Change-Flip method",
        "Convert between improper fractions and mixed numbers"
      ],
      "chunks": [
        {
          "id": "math-101-l04-c1",
          "title": "Multiplying Fractions",
          "content": "Multiplying fractions is straightforward: multiply the numerators together and the denominators together. For example, 2/3 × 4/5 = 8/15. To keep numbers small, use cross-cancellation before multiplying: in 3/4 × 2/9, notice that 3 and 9 share a factor of 3 — cancel to get 1/4 × 2/3 = 2/12 = 1/6. Cross-cancellation is not required but makes arithmetic easier and reduces the need to simplify at the end. Always double-check that you cancel between a numerator and a denominator, never two numerators or two denominators."
        },
        {
          "id": "math-101-l04-c2",
          "title": "Dividing Fractions: Keep-Change-Flip",
          "content": "Dividing by a fraction is equivalent to multiplying by its reciprocal — this is the Keep-Change-Flip rule. Keep the first fraction as-is, change the division sign to multiplication, and flip the second fraction. For example, 3/4 ÷ 2/5 becomes 3/4 × 5/2 = 15/8, which converts to the mixed number 1⅞. Why does this work? Dividing by 2/5 asks 'how many groups of 2/5 fit into 3/4?' — multiplying by 5/2 answers exactly that question. Practise with simple examples first: 1/2 ÷ 1/4 = 1/2 × 4/1 = 2, confirming that two quarters fit in one half."
        },
        {
          "id": "math-101-l04-c3",
          "title": "Converting Between Forms",
          "content": "To convert an improper fraction to a mixed number, divide the numerator by the denominator: 7/3 → 7 ÷ 3 = 2 remainder 1, so 7/3 = 2⅓. To convert a mixed number back, multiply the whole number by the denominator and add the numerator: 2⅓ → (2 × 3) + 1 = 7, placed over 3 → 7/3. These conversions matter because mixed numbers are easier to visualize while improper fractions are easier to compute with. On tests, express your answer in whichever form the question requests, and always simplify."
        }
      ],
      "flashcards": [
        {
          "id": "math-101-l04-f1",
          "front": "How do you multiply two fractions?",
          "back": "Multiply numerators together and denominators together: a/b × c/d = ac/bd"
        },
        {
          "id": "math-101-l04-f2",
          "front": "What is 'Keep-Change-Flip'?",
          "back": "The method for dividing fractions — keep the first fraction, change ÷ to ×, flip the second fraction (use its reciprocal)"
        },
        {
          "id": "math-101-l04-f3",
          "front": "Convert 7/3 to a mixed number",
          "back": "2⅓ — divide 7 ÷ 3 = 2 remainder 1, so 2 and 1/3"
        },
        {
          "id": "math-101-l04-f4",
          "front": "What is cross-cancellation?",
          "back": "Simplifying before multiplying by dividing a numerator and a denominator by their common factor — keeps numbers small"
        }
      ],
      "learningAids": [
        {
          "id": "math-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "math-101-l05",
      "title": "Decimals and Percentages",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Read and write decimal place values through thousandths",
        "Convert fluently between fractions, decimals, and percentages",
        "Apply percentages to real-world scenarios like discounts, tips, and tax"
      ],
      "chunks": [
        {
          "id": "math-101-l05-c1",
          "title": "Understanding Decimals",
          "content": "Decimals are another way to express fractions, using the base-10 place-value system. The decimal point separates the whole-number part from the fractional part. To the right of the decimal you find tenths (0.1 = 1/10), hundredths (0.01 = 1/100), and thousandths (0.001 = 1/1000). The number 3.47 is read 'three and forty-seven hundredths.' When adding or subtracting decimals, always line up the decimal points vertically and fill empty places with zeros: 3.25 + 1.7 becomes 3.25 + 1.70 = 4.95."
        },
        {
          "id": "math-101-l05-c2",
          "title": "Percentages and Conversions",
          "content": "Percent means 'per hundred,' so 45% = 45/100 = 0.45. To convert a decimal to a percent, multiply by 100 (move the decimal point two places right): 0.75 → 75%. To convert a percent to a decimal, divide by 100: 75% → 0.75. To convert a fraction to a percent, first divide numerator by denominator to get a decimal, then multiply by 100: 3/8 = 0.375 = 37.5%. Memorize common equivalents — 1/2 = 0.5 = 50%, 1/4 = 0.25 = 25%, 1/5 = 0.2 = 20%, 3/4 = 0.75 = 75% — they save time on tests."
        },
        {
          "id": "math-101-l05-c3",
          "title": "Real-World Applications",
          "content": "Percentages power everyday calculations. Sales tax: an item costs $40, tax is 8%, so tax = $40 × 0.08 = $3.20, total = $43.20. Discounts: 25% off a $60 jacket means discount = $60 × 0.25 = $15, sale price = $45. Tips: 15% tip on a $30 meal = $30 × 0.15 = $4.50. Quick trick for 10%: move the decimal one place left — 10% of $47.00 = $4.70. For 20%, double that: $9.40. For 15%, take 10% plus half of 10%: $4.70 + $2.35 = $7.05."
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-101-l05-a1",
          "title": "Match Fraction-Decimal-Percent",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "1/2",
              "right": "0.5 = 50%"
            },
            {
              "left": "1/4",
              "right": "0.25 = 25%"
            },
            {
              "left": "3/4",
              "right": "0.75 = 75%"
            },
            {
              "left": "1/5",
              "right": "0.2 = 20%"
            },
            {
              "left": "1/8",
              "right": "0.125 = 12.5%"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "math-101-l05-f1",
          "front": "What does 'percent' mean?",
          "back": "Per hundred — 45% = 45 out of 100 = 0.45"
        },
        {
          "id": "math-101-l05-f2",
          "front": "How do you convert a decimal to a percent?",
          "back": "Multiply by 100 (move the decimal point two places to the right)"
        },
        {
          "id": "math-101-l05-f3",
          "front": "1/4 = ___ = ___%",
          "back": "0.25 = 25%"
        },
        {
          "id": "math-101-l05-f4",
          "front": "Quick trick for finding 10% of a number",
          "back": "Move the decimal point one place to the left — 10% of $47.00 = $4.70"
        }
      ],
      "learningAids": [
        {
          "id": "math-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "math-101-l06",
      "title": "Fractions, Decimals & Percentages Checkpoint",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate mastery of fraction operations, decimal arithmetic, and percentage conversions"
      ],
      "questions": [
        {
          "id": "math-101-l06-q1",
          "text": "What is 2/3 × 3/4?",
          "options": [
            {
              "id": "a",
              "text": "1/2"
            },
            {
              "id": "b",
              "text": "6/7"
            },
            {
              "id": "c",
              "text": "5/12"
            },
            {
              "id": "d",
              "text": "6/12"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Multiply numerators (2 × 3 = 6) and denominators (3 × 4 = 12) to get 6/12, which simplifies to 1/2. Or cross-cancel the 3s first."
        },
        {
          "id": "math-101-l06-q2",
          "text": "What is 3/4 as a percentage?",
          "options": [
            {
              "id": "a",
              "text": "75%"
            },
            {
              "id": "b",
              "text": "34%"
            },
            {
              "id": "c",
              "text": "50%"
            },
            {
              "id": "d",
              "text": "80%"
            }
          ],
          "correctOptionId": "a",
          "explanation": "3 ÷ 4 = 0.75. Multiply by 100 to get 75%."
        },
        {
          "id": "math-101-l06-q3",
          "text": "25% off a $60 item means the sale price is:",
          "options": [
            {
              "id": "a",
              "text": "$45"
            },
            {
              "id": "b",
              "text": "$35"
            },
            {
              "id": "c",
              "text": "$50"
            },
            {
              "id": "d",
              "text": "$15"
            }
          ],
          "correctOptionId": "a",
          "explanation": "25% of $60 = $15 discount. $60 − $15 = $45 sale price."
        },
        {
          "id": "math-101-l06-q4",
          "text": "To divide fractions, you should:",
          "options": [
            {
              "id": "a",
              "text": "Keep the first, change ÷ to ×, flip the second (Keep-Change-Flip)"
            },
            {
              "id": "b",
              "text": "Flip both fractions and then multiply"
            },
            {
              "id": "c",
              "text": "Add the denominators together"
            },
            {
              "id": "d",
              "text": "Subtract the numerators"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Keep-Change-Flip: keep the first fraction, change division to multiplication, flip the second fraction (use its reciprocal)."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      }
    },
    {
      "id": "math-101-l07",
      "title": "Integers and the Number Line",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define integers and distinguish them from other number types",
        "Add and subtract integers using sign rules and the number line",
        "Compute absolute value and use it to compare integers"
      ],
      "chunks": [
        {
          "id": "math-101-l07-c1",
          "title": "What Are Integers?",
          "content": "Integers are the set of whole numbers that include positive numbers, negative numbers, and zero: …, −3, −2, −1, 0, 1, 2, 3, … They do NOT include fractions or decimals. Negative numbers appear constantly in real life: temperatures below zero (−5 °F), overdrawn bank balances (−$50), and elevations below sea level (Death Valley sits at −282 feet). On the number line, negative numbers lie to the left of zero and positive numbers to the right. A number further to the right is always greater, so −2 > −5 because −2 is closer to zero."
        },
        {
          "id": "math-101-l07-c2",
          "title": "Adding and Subtracting Integers",
          "content": "When adding two integers with the same sign, add their absolute values and keep the shared sign: (+3) + (+5) = +8; (−3) + (−5) = −8. When adding two integers with different signs, subtract the smaller absolute value from the larger and take the sign of the number with the greater absolute value: (−7) + (+4) = −3 because 7 > 4. To subtract an integer, change subtraction to adding the opposite: 5 − (−3) = 5 + 3 = 8 and (−4) − (+2) = (−4) + (−2) = −6. The key phrase to remember: 'subtracting a negative is the same as adding.'"
        },
        {
          "id": "math-101-l07-c3",
          "title": "Absolute Value",
          "content": "Absolute value measures a number's distance from zero on the number line — it is always non-negative. Written with vertical bars: |−7| = 7, |4| = 4, |0| = 0. Think of absolute value as 'how far from zero, ignoring direction.' Notice that |−3| = |3| = 3, because both are three units from zero. Absolute value is used when comparing magnitudes, measuring errors, and calculating distances. To order negative integers from least to greatest, remember: the number with the larger absolute value is further from zero and therefore lesser. For example, −8 < −3 because 8 > 3."
        }
      ],
      "flashcards": [
        {
          "id": "math-101-l07-f1",
          "front": "What are integers?",
          "back": "Whole numbers including negatives, zero, and positives: …, −3, −2, −1, 0, 1, 2, 3, … (no fractions or decimals)"
        },
        {
          "id": "math-101-l07-f2",
          "front": "What happens when you subtract a negative?",
          "back": "It becomes addition: 5 − (−3) = 5 + 3 = 8"
        },
        {
          "id": "math-101-l07-f3",
          "front": "|−7| = ?",
          "back": "7 — absolute value is the distance from zero, always non-negative"
        },
        {
          "id": "math-101-l07-f4",
          "front": "Which is greater: −3 or −8?",
          "back": "−3, because it is further to the right (closer to zero) on the number line"
        }
      ]
    },
    {
      "id": "math-101-l08",
      "title": "Introduction to Variables & Expressions",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Define variable, coefficient, constant, and term",
        "Translate English phrases into algebraic expressions",
        "Evaluate algebraic expressions by substituting given values"
      ],
      "chunks": [
        {
          "id": "math-101-l08-c1",
          "title": "What Is a Variable?",
          "content": "A variable is a letter — such as x, y, or n — that stands for an unknown or changeable number. Think of it as a 'mystery box' whose value you need to discover. In the expression 3x + 5, the letter x is the variable, the number 3 is its coefficient (the multiplier attached to the variable), and the 5 is a constant (a fixed value). Variables let us write general rules: 'double any number and add five' becomes 2n + 5 and works for every possible value of n. They are the foundation of algebra and appear in formulas like Area = l × w."
        },
        {
          "id": "math-101-l08-c2",
          "title": "Writing Algebraic Expressions",
          "content": "Translating English into algebra requires identifying the operation word. 'A number plus 7' → x + 7. 'Five less than a number' → x − 5 (note: the number comes first because 'less than' reverses order). 'Twice a number' → 2x. 'A number divided by 3' → x/3. 'The product of 4 and a number, decreased by 1' → 4x − 1. The most common trap is 'less than' — '3 less than x' means x − 3, NOT 3 − x. Tip: first identify the operation word (sum, difference, product, quotient), then build the expression around it."
        },
        {
          "id": "math-101-l08-c3",
          "title": "Evaluating Expressions",
          "content": "To evaluate an expression, substitute the given value for every occurrence of the variable and then compute using PEMDAS. Example: evaluate 3x + 2 when x = 4 → 3(4) + 2 = 12 + 2 = 14. With two variables: evaluate 2a² − b when a = 3 and b = 5 → 2(9) − 5 = 18 − 5 = 13 (remember exponents before multiplication). Like terms share the same variable and exponent — 3x and 5x are like terms and combine to 8x, but 3x and 3x² are NOT like terms because their exponents differ. Combining like terms simplifies expressions before evaluation."
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-101-l08-a1",
          "title": "English to Algebra Matching",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "A number plus 7",
              "right": "x + 7"
            },
            {
              "left": "Twice a number",
              "right": "2x"
            },
            {
              "left": "5 less than a number",
              "right": "x − 5"
            },
            {
              "left": "A number divided by 3",
              "right": "x/3"
            },
            {
              "left": "The product of 4 and a number",
              "right": "4x"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "math-101-l08-f1",
          "front": "What is a variable?",
          "back": "A letter representing an unknown or changeable number — the foundation of algebra"
        },
        {
          "id": "math-101-l08-f2",
          "front": "Translate: '5 less than a number'",
          "back": "x − 5 (NOT 5 − x!) — 'less than' reverses the order"
        },
        {
          "id": "math-101-l08-f3",
          "front": "Evaluate 3x + 2 when x = 4",
          "back": "3(4) + 2 = 12 + 2 = 14"
        },
        {
          "id": "math-101-l08-f4",
          "front": "What are 'like terms'?",
          "back": "Terms with the same variable raised to the same exponent — e.g., 3x and 5x combine to 8x"
        }
      ]
    },
    {
      "id": "math-101-l09",
      "title": "Integers & Variables Checkpoint",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate mastery of integer operations, absolute value, and algebraic expressions"
      ],
      "questions": [
        {
          "id": "math-101-l09-q1",
          "text": "What is (−4) + (−6)?",
          "options": [
            {
              "id": "a",
              "text": "−10"
            },
            {
              "id": "b",
              "text": "10"
            },
            {
              "id": "c",
              "text": "−2"
            },
            {
              "id": "d",
              "text": "2"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Same signs: add absolute values (4 + 6 = 10) and keep the negative sign → −10."
        },
        {
          "id": "math-101-l09-q2",
          "text": "What is the absolute value of −12?",
          "options": [
            {
              "id": "a",
              "text": "12"
            },
            {
              "id": "b",
              "text": "−12"
            },
            {
              "id": "c",
              "text": "0"
            },
            {
              "id": "d",
              "text": "−1"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Absolute value is the distance from zero on the number line: |−12| = 12."
        },
        {
          "id": "math-101-l09-q3",
          "text": "'Twice a number, decreased by 3' is written as:",
          "options": [
            {
              "id": "a",
              "text": "2x − 3"
            },
            {
              "id": "b",
              "text": "3 − 2x"
            },
            {
              "id": "c",
              "text": "2x + 3"
            },
            {
              "id": "d",
              "text": "x² − 3"
            }
          ],
          "correctOptionId": "a",
          "explanation": "'Twice a number' = 2x. 'Decreased by 3' = subtract 3. Combined: 2x − 3."
        },
        {
          "id": "math-101-l09-q4",
          "text": "Evaluate 4x − 1 when x = 5:",
          "options": [
            {
              "id": "a",
              "text": "19"
            },
            {
              "id": "b",
              "text": "20"
            },
            {
              "id": "c",
              "text": "9"
            },
            {
              "id": "d",
              "text": "15"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Substitute x = 5: 4(5) − 1 = 20 − 1 = 19."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      }
    },
    {
      "id": "math-101-l10",
      "title": "Mastery Quiz: Math Foundations",
      "type": "quiz",
      "duration": 12,
      "objectives": [
        "Synthesize all math foundations concepts from PEMDAS through algebraic expressions"
      ],
      "questions": [
        {
          "id": "math-101-l10-q1",
          "text": "What is 12 − 4 × 2?",
          "options": [
            {
              "id": "a",
              "text": "4"
            },
            {
              "id": "b",
              "text": "16"
            },
            {
              "id": "c",
              "text": "8"
            },
            {
              "id": "d",
              "text": "20"
            }
          ],
          "correctOptionId": "a",
          "explanation": "PEMDAS: multiply first (4 × 2 = 8), then subtract (12 − 8 = 4)."
        },
        {
          "id": "math-101-l10-q2",
          "text": "What is 1/2 + 1/3?",
          "options": [
            {
              "id": "a",
              "text": "5/6"
            },
            {
              "id": "b",
              "text": "2/5"
            },
            {
              "id": "c",
              "text": "1/5"
            },
            {
              "id": "d",
              "text": "2/6"
            }
          ],
          "correctOptionId": "a",
          "explanation": "LCD = 6. Convert: 1/2 = 3/6, 1/3 = 2/6. Add: 3/6 + 2/6 = 5/6."
        },
        {
          "id": "math-101-l10-q3",
          "text": "0.375 expressed as a fraction in simplest form is:",
          "options": [
            {
              "id": "a",
              "text": "3/8"
            },
            {
              "id": "b",
              "text": "375/100"
            },
            {
              "id": "c",
              "text": "3/4"
            },
            {
              "id": "d",
              "text": "37/100"
            }
          ],
          "correctOptionId": "a",
          "explanation": "0.375 = 375/1000. Simplify by dividing numerator and denominator by 125 → 3/8."
        },
        {
          "id": "math-101-l10-q4",
          "text": "What is 7 − (−3)?",
          "options": [
            {
              "id": "a",
              "text": "10"
            },
            {
              "id": "b",
              "text": "4"
            },
            {
              "id": "c",
              "text": "−10"
            },
            {
              "id": "d",
              "text": "−4"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Subtracting a negative is the same as adding: 7 + 3 = 10."
        },
        {
          "id": "math-101-l10-q5",
          "text": "Evaluate 2x + 7 when x = 6:",
          "options": [
            {
              "id": "a",
              "text": "19"
            },
            {
              "id": "b",
              "text": "15"
            },
            {
              "id": "c",
              "text": "13"
            },
            {
              "id": "d",
              "text": "26"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Substitute x = 6: 2(6) + 7 = 12 + 7 = 19."
        },
        {
          "id": "math-101-l10-q6",
          "text": "A store offers 20% off a $50 jacket. What is the sale price?",
          "options": [
            {
              "id": "a",
              "text": "$40"
            },
            {
              "id": "b",
              "text": "$30"
            },
            {
              "id": "c",
              "text": "$45"
            },
            {
              "id": "d",
              "text": "$10"
            }
          ],
          "correctOptionId": "a",
          "explanation": "20% of $50 = $10 discount. $50 − $10 = $40 sale price. This applies percentage skills to a real-world scenario."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 6,
        "bloomProfile": {
          "remember": 2,
          "understand": 2,
          "apply": 2
        }
      }
    }
  ]
};
