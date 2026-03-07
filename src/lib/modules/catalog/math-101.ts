import type { LearningModule } from "@/lib/modules/types";

export const math_101_Module: LearningModule = {
  "id": "math-101",
  "title": "Math Foundations: From PEMDAS to Equations",
  "description": "Master the building blocks of mathematics. Learn the order of operations, conquer fractions and decimals, understand integers and the number line, explore variables, and solve your first equations — the gateway to algebra.",
  "subject": "Math",
  "tags": [
    "curriculum",
    "interactive",
    "foundations",
    "numbers",
    "algebra-prep"
  ],
  "minAge": 10,
  "maxAge": 14,
  "version": "1.1.0",
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
          "content": "Have you ever wondered if 3 + 4 × 2 equals 14 or 11? This is why having a set of rules for math is so important! Imagine if everyone solved problems their own way. Without common rules, people would get different answers, which would cause a lot of confusion in banking, engineering, or even computer programming.\nTo solve math problems correctly, we use the Order of Operations. This is a worldwide agreement that helps everyone get the same answer. To remember the order, we use a handy acronym: PEMDAS. Each letter stands for an operation: P for Parentheses, E for Exponents, M for Multiplication and D for Division (done from left to right), and A for Addition and S for Subtraction (also done from left to right).\nLet’s go back to our example: 3 + 4 × 2. First, we look for Parentheses or Exponents, but there are none. Next, we do Multiplication or Division from left to right. So, we multiply 4 by 2 to get 8. Finally, we do Addition or Subtraction. We add 3 to 8, which gives us 11. By following these steps, we make sure everyone gets the same answer, which makes math reliable and fun!"
        },
        {
          "id": "math-101-l01-c2",
          "title": "PEMDAS Step by Step",
          "content": "Let’s explore PEMDAS one step at a time! The first letter, P, stands for Parentheses. Whenever you see parentheses in a math problem, you must solve what’s inside them first. For example, in (3 + 2) × 4, you first calculate 3 + 2 to get 5, and then multiply by 4 to get 20. Next is E for Exponents. Exponents tell you how many times to multiply a number by itself. For instance, 2³ means 2 × 2 × 2, which equals 8.\nAfter that, we have M and D for Multiplication and Division. These two are a team and have equal importance. You solve them from left to right, in the order they appear. For example, in 8 ÷ 2 × 4, you first divide 8 by 2 to get 4, and then multiply by 4 to get 16. Finally, we have A and S for Addition and Subtraction. They are also a team and are solved from left to right. A common mistake is thinking multiplication always comes before division, but remember, it’s all about which one comes first in the problem! If you follow these steps carefully, you’ll be a PEMDAS pro in no time!"
        },
        {
          "id": "math-101-l01-c3",
          "title": "Multi-Step Practice",
          "content": "Let's solve a multi-step problem together! We will work through the expression 2 × (3 + 5)² ÷ 4 − 1. First, we handle the Parentheses: (3 + 5) equals 8. Our expression is now 2 × 8² ÷ 4 − 1. Next, we do the Exponent: 8² means 8 × 8, which is 64. Now we have 2 × 64 ÷ 4 − 1. Next up is Multiplication and Division from left to right. We first multiply 2 by 64 to get 128. Then we divide 128 by 4, which is 32. Our expression is now 32 − 1. Finally, we subtract, and our answer is 31. Great job!\nLet’s try another one: 12 − 3 × 2 + 4. First, we multiply 3 × 2 to get 6. Now we have 12 − 6 + 4. Working from left to right, we subtract 6 from 12 to get 6. Then, we add 4 to 6, which gives us 10. A good tip is to underline the part you're solving next to keep your work organized and avoid mistakes."
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
          "front": "In 10 ÷ 5 × 2, what do you do first?",
          "back": "Divide 10 by 5. Multiplication and Division have equal priority, so you work from left to right."
        },
        {
          "id": "math-101-l01-f4",
          "front": "What is the very first step when an expression contains parentheses?",
          "back": "Solve everything inside the parentheses before doing any other operations."
        }
      ],
      "learningAids": [
        {
          "id": "math-101-l01-a1",
          "type": "image",
          "title": "PEMDAS Pyramid",
          "content": "A pyramid graphic showing Parentheses at the top, then Exponents, then Multiplication/Division on the same level, and Addition/Subtraction on the bottom level."
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
          "content": "A fraction is a way to show a part of a whole, like a slice of pizza or a piece of a chocolate bar. Fractions are written with one number over another, like a/b. The top number 'a' is the numerator, which tells us how many parts we have. The bottom number 'b' is the denominator, which tells us how many equal parts make up the whole. For example, in the fraction 3/4, it means we have three out of four equal slices of a pizza.\nThere are a few types of fractions. A proper fraction has a numerator that is smaller than the denominator, like 2/5. An improper fraction has a numerator that is bigger than or equal to the denominator, like 7/3. Finally, a mixed number combines a whole number with a fraction, like 2⅓, which means two whole things and one-third of another. Fractions are all around us, from recipes to measurements, so understanding them is a great skill to have!"
        },
        {
          "id": "math-101-l02-c2",
          "title": "Adding and Subtracting with Like Denominators",
          "content": "When fractions have the same denominator, adding or subtracting them is simple! You only need to focus on the numerators, the top numbers. For example, to add 2/7 and 3/7, you just add the numerators: 2 plus 3 equals 5. The denominator stays the same. So, the answer is 5/7. Think of it like counting slices of a pie. If you have two slices and get three more of the same size, you have five slices in total.\nAfter you get your answer, it's always a good idea to check if it can be simplified. Simplifying means reducing the fraction to its simplest form. You do this by finding the Greatest Common Factor (GCF) of the numerator and denominator. For example, if your answer is 4/8, the GCF of 4 and 8 is 4. When you divide both the top and bottom by 4, you get 1/2. This makes your answer easier to understand and work with."
        },
        {
          "id": "math-101-l02-c3",
          "title": "Adding and Subtracting with Unlike Denominators",
          "content": "When fractions have different denominators, you first need to find a common denominator. This makes the pieces the same size so you can combine them. The best one to find is the Least Common Denominator (LCD), which is the smallest number that both denominators can divide into. For example, to add 1/3 and 1/4, the LCD of 3 and 4 is 12. We rewrite the fractions with this new denominator: 1/3 becomes 4/12, and 1/4 becomes 3/12. Now that they have the same denominator, we can add them: 4/12 plus 3/12 equals 7/12.\nHow do you find the LCD? You can list the multiples of each denominator until you find the smallest one they share. The multiples of 3 are 3, 6, 9, 12... and the multiples of 4 are 4, 8, 12... The first one they have in common is 12. Once you get your final answer, don't forget to simplify it if you can! Practice is key, and soon this will feel easy."
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
          "back": "Add the numerators and keep the denominator the same: 2/7 + 3/7 = 5/7"
        },
        {
          "id": "math-101-l02-f3",
          "front": "What is the LCD?",
          "back": "Least Common Denominator — the smallest number that is a multiple of both denominators. It's needed to add or subtract fractions with different denominators."
        },
        {
          "id": "math-101-l02-f4",
          "front": "Evaluate: 1/3 + 1/4",
          "back": "The LCD is 12. The problem becomes 4/12 + 3/12 = 7/12."
        }
      ],
      "learningAids": [
        {
          "id": "math-101-l02-a1",
          "type": "practice",
          "title": "Interactive Fraction Bars",
          "content": "Use a digital tool to create fraction bars for 1/3 and 1/4, then find a common denominator visually and add them together."
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
              "text": "Equal priority — solved from left to right"
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
          "explanation": "M and D share equal priority — you solve whichever comes first from left to right."
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
          "explanation": "The LCD is 12. Convert the fractions: 1/3 = 4/12 and 1/4 = 3/12. Then add: 4/12 + 3/12 = 7/12."
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
      }
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
          "content": "Multiplying fractions is very direct! You just multiply the numerators (top numbers) together, and then multiply the denominators (bottom numbers) together. For example, to multiply 2/3 by 4/5, we first multiply the numerators: 2 times 4 is 8. Next, we multiply the denominators: 3 times 5 is 15. So, our answer is 8/15.\nTo make things easier, you can use a trick called cross-cancellation before you multiply. This means you look for common factors between a numerator of one fraction and the denominator of the other. For example, in 3/4 × 2/9, the 3 and the 9 share a common factor of 3. We can divide both by 3, so the 3 becomes a 1 and the 9 becomes a 3. Now we have 1/4 × 2/3. We can also see that 2 and 4 share a factor of 2. So the 2 becomes a 1 and the 4 becomes a 2. Now we have 1/2 x 1/3, which is 1/6. This trick helps keep the numbers small and often gives you a simplified answer right away."
        },
        {
          "id": "math-101-l04-c2",
          "title": "Dividing Fractions: Keep-Change-Flip",
          "content": "Dividing fractions might seem tricky, but a simple rule makes it easy: Keep-Change-Flip. Here’s how it works: you keep the first fraction the same, change the division sign to a multiplication sign, and flip the second fraction upside down (this is called finding the reciprocal). Let’s try an example!\nImagine we have 3/4 ÷ 2/5. First, we Keep the 3/4. Next, we Change the division sign to multiplication. Finally, we Flip the second fraction, 2/5, to become 5/2. Our new problem is 3/4 × 5/2. Now we just multiply like before: 3 times 5 is 15, and 4 times 2 is 8. Our answer is 15/8. Since this is an improper fraction, we can convert it to a mixed number: 1⅞. Why does this work? Dividing by a fraction is the same as multiplying by its reciprocal. Keep-Change-Flip is just a fun way to remember that!"
        },
        {
          "id": "math-101-l04-c3",
          "title": "Converting Between Forms",
          "content": "Knowing how to switch between improper fractions and mixed numbers is a useful skill. To turn an improper fraction like 7/3 into a mixed number, you divide the numerator by the denominator. 7 divided by 3 is 2 with a remainder of 1. The 2 becomes your whole number, and the remainder 1 becomes the new numerator, while the denominator stays the same. So, 7/3 is the same as 2⅓.\nTo go the other way, from a mixed number like 2⅓ back to an improper fraction, you multiply the whole number by the denominator: 2 times 3 is 6. Then, you add the numerator: 6 plus 1 is 7. You place that total over the original denominator, giving you 7/3. Mixed numbers are often easier to picture in real life, but improper fractions are usually easier to use in calculations, especially multiplication and division."
        }
      ],
      "flashcards": [
        {
          "id": "math-101-l04-f1",
          "front": "How do you multiply two fractions?",
          "back": "Multiply the numerators together and the denominators together: a/b × c/d = ac/bd"
        },
        {
          "id": "math-101-l04-f2",
          "front": "What is 'Keep-Change-Flip'?",
          "back": "The method for dividing fractions: Keep the first fraction, Change ÷ to ×, and Flip the second fraction (use its reciprocal)."
        },
        {
          "id": "math-101-l04-f3",
          "front": "Convert 7/3 to a mixed number.",
          "back": "2⅓. Divide 7 by 3 to get 2 with a remainder of 1. So, 2 and 1/3."
        },
        {
          "id": "math-101-l04-f4",
          "front": "What is cross-cancellation?",
          "back": "A shortcut where you simplify a numerator and a denominator by a common factor before multiplying fractions. It keeps the numbers smaller."
        }
      ],
      "learningAids": [
        {
          "id": "math-101-l04-a1",
          "type": "image",
          "title": "Keep-Change-Flip Animation",
          "content": "A short, looping animation showing the division sign changing to a multiplication sign and the second fraction flipping over."
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
          "content": "Decimals are another way to write fractions. They use the base-10 place value system we already know. The decimal point is the star of the show—it separates the whole numbers on the left from the fractional parts on the right. For example, in 3.47, the '3' is a whole number, and '.47' is the fraction part. The digits to the right of the decimal point have names like tenths, hundredths, and thousandths. So, 0.1 is one-tenth (1/10), and 0.01 is one-hundredth (1/100). We would read 3.47 as 'three and forty-seven hundredths.'\nWhen adding or subtracting decimals, it is very important to line up the decimal points. This keeps all the place values in the right columns. You can add zeros as placeholders to help. For example, to add 3.25 and 1.7, you can write 1.7 as 1.70. Now it's easy to add them up: 3.25 + 1.70 = 4.95. Lining up the decimals helps you avoid simple mistakes."
        },
        {
          "id": "math-101-l05-c2",
          "title": "Percentages and Conversions",
          "content": "Percentages are a way to talk about numbers as parts of 100. The word 'percent' literally means 'per hundred.' So, 45% means 45 out of 100. This can also be written as a fraction (45/100) or a decimal (0.45). Knowing how to convert between these forms is a key math skill.\nTo change a decimal to a percentage, just multiply by 100. An easy way to do this is to move the decimal point two places to the right. For example, 0.75 becomes 75%. To change a percentage back to a decimal, you do the opposite: divide by 100, or move the decimal point two places to the left. So, 75% becomes 0.75.\nTo turn a fraction into a percentage, first divide the top number by the bottom number to get a decimal. For the fraction 3/8, dividing 3 by 8 gives you 0.375. Then, multiply by 100 to get 37.5%. It's helpful to memorize common ones like 1/2 = 50%, 1/4 = 25%, and 3/4 = 75%. This will save you a lot of time!"
        },
        {
          "id": "math-101-l05-c3",
          "title": "Real-World Applications",
          "content": "Percentages are everywhere in real life! They help us figure out sales tax, discounts, and tips. Let's say you want to buy a video game that costs $40, and the sales tax is 8%. To find the tax amount, you multiply the price by the tax rate as a decimal: $40 × 0.08 = $3.20. So the total cost is $43.20.\nNow, let's talk about discounts. A jacket costs $60, but it’s on sale for 25% off. To find the discount, you multiply $60 by 0.25, which is $15. So, the sale price is $60 - $15 = $45.\nWhen you eat at a restaurant, you might leave a tip. If your meal costs $30 and you want to leave a 15% tip, you can calculate it by multiplying $30 by 0.15, which is $4.50. A quick trick for calculating tips: to find 10% of a price, just move the decimal point one place to the left. 10% of $47.00 is $4.70. For a 20% tip, just double that amount!"
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
          "back": "'Per hundred.' So, 45% means 45 out of 100, or 0.45."
        },
        {
          "id": "math-101-l05-f2",
          "front": "How do you convert a decimal to a percent?",
          "back": "Multiply by 100, which is the same as moving the decimal point two places to the right."
        },
        {
          "id": "math-101-l05-f3",
          "front": "1/4 = ___ = ___%",
          "back": "0.25 = 25%"
        },
        {
          "id": "math-101-l05-f4",
          "front": "Quick trick for finding 10% of a number:",
          "back": "Move the decimal point one place to the left. For example, 10% of $47.00 is $4.70."
        }
      ],
      "learningAids": [
        {
          "id": "math-101-l05-a1",
          "type": "image",
          "title": "Conversion Triangle",
          "content": "A triangular diagram with 'Fraction,' 'Decimal,' and 'Percent' at the corners, with arrows showing how to convert from one to another (e.g., 'Divide numerator by denominator' on the arrow from Fraction to Decimal)."
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
          "explanation": "Multiply numerators (2 × 3 = 6) and denominators (3 × 4 = 12) to get 6/12, which simplifies to 1/2. You can also cross-cancel the 3s first."
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
          "explanation": "25% of $60 is a $15 discount. $60 − $15 = $45 sale price."
        },
        {
          "id": "math-101-l06-q4",
          "text": "To divide fractions, you should:",
          "options": [
            {
              "id": "a",
              "text": "Keep the first, change ÷ to ×, and flip the second (Keep-Change-Flip)"
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
          "explanation": "Keep-Change-Flip is the method: keep the first fraction, change division to multiplication, and flip the second fraction (use its reciprocal)."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "apply": 2
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
          "content": "Integers are all the whole numbers, their opposites (negatives), and zero. Think of them on a line: ..., -3, -2, -1, 0, 1, 2, 3, .... Integers do not include fractions or decimals. You see negative numbers all the time in real life. For example, a temperature below freezing might be -5°F. A bank account could have a balance of -$50 if you owe money. On a number line, negative numbers are to the left of zero, and positive numbers are to the right. The further right a number is, the greater its value. This means -2 is actually greater than -5 because it's closer to zero. Understanding integers helps us make sense of the world around us."
        },
        {
          "id": "math-101-l07-c2",
          "title": "Adding and Subtracting Integers",
          "content": "When adding two integers with the same sign, just add their values and keep the sign. For example, (+3) + (+5) = +8, and (−3) + (−5) = −8. When the signs are different, you subtract the smaller value from the larger value and take the sign of the number with the larger value. For example, in (−7) + (+4), we subtract 4 from 7 to get 3. Since 7 is bigger and it's negative, our answer is −3.\nFor subtracting integers, there's a simple trick: change the subtraction problem into an addition problem. You do this by adding the opposite of the second number. For example, 5 − (−3) becomes 5 + (+3), which equals 8. Another example: (−4) − (+2) becomes (−4) + (−2), which equals −6. A good phrase to remember is: 'subtracting a negative is the same as adding a positive.'"
        },
        {
          "id": "math-101-l07-c3",
          "title": "Absolute Value",
          "content": "The absolute value of a number tells you its distance from zero on the number line. Because it's a distance, absolute value is always positive or zero. We use vertical bars to show absolute value, like this: |−7| = 7, and |4| = 4. Notice that both -7 and 7 are seven steps away from zero, so they have the same absolute value. This idea is helpful for comparing numbers. When ordering negative integers, the number with the larger absolute value is actually smaller. For example, −8 is less than −3 because it is further away from zero to the left. It can feel a bit backward at first, but thinking about the number line makes it clear."
        }
      ],
      "flashcards": [
        {
          "id": "math-101-l07-f1",
          "front": "What are integers?",
          "back": "All whole numbers, including negatives, zero, and positives: …, −3, −2, −1, 0, 1, 2, 3, … (no fractions or decimals)."
        },
        {
          "id": "math-101-l07-f2",
          "front": "What happens when you subtract a negative?",
          "back": "It becomes addition: 5 − (−3) is the same as 5 + 3 = 8."
        },
        {
          "id": "math-101-l07-f3",
          "front": "|−7| = ?",
          "back": "7. Absolute value is the distance from zero, so it's always non-negative."
        },
        {
          "id": "math-101-l07-f4",
          "front": "Which is greater: −3 or −8?",
          "back": "−3, because it is further to the right (closer to zero) on the number line."
        }
      ],
      "learningAids": [
        {
          "id": "math-101-l07-a1",
          "type": "practice",
          "title": "Interactive Number Line",
          "content": "Drag and drop integers onto a number line to compare their values and visualize addition and subtraction."
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
          "content": "A variable is a letter, like x, y, or n, that stands for a number we don’t know yet or a number that can change. Think of a variable as a 'mystery box' holding a value. In the expression 3x + 5, 'x' is the variable. The number 3 is the coefficient, which is the number being multiplied by the variable. The number 5 is a constant because its value is fixed. Variables are powerful because they let us write general rules. For example, 'double any number and add five' can be written as 2n + 5. No matter what number we pick for 'n', the rule works. Variables are the first big step into algebra, which helps us solve all kinds of problems."
        },
        {
          "id": "math-101-l08-c2",
          "title": "Writing Algebraic Expressions",
          "content": "To turn English phrases into algebraic expressions, we need to look for clue words that tell us which operation to use. For 'a number plus 7,' we can write x + 7. For 'twice a number,' we can write 2x. One tricky phrase is 'less than.' The phrase 'five less than a number' means we start with the number and subtract five, so we write it as x − 5, not 5 - x. The order is reversed.\nLet’s try a more complex one: 'the product of 4 and a number, decreased by 1.' 'Product' means multiply, so we have 4x. 'Decreased by 1' means subtract 1. Putting it together, we get 4x − 1. A good tip is to find the operation word first (like sum, difference, product, or quotient) and build your expression around it."
        },
        {
          "id": "math-101-l08-c3",
          "title": "Evaluating Expressions",
          "content": "Evaluating an expression means finding its value when we know what the variable stands for. To do this, we first substitute the given value for the variable. Then, we use the order of operations (PEMDAS) to find the answer. Let's evaluate the expression 3x + 2 when x = 4. First, we replace x with 4, which gives us 3(4) + 2. According to PEMDAS, we multiply first: 3 times 4 is 12. Then we add: 12 + 2 = 14. So, the value of the expression is 14.\nLet's try one with an exponent: evaluate 2a² − b when a = 3 and b = 5. First, substitute the values: 2(3²) − 5. PEMDAS tells us to do exponents first: 3² is 9. Now we have 2(9) − 5. Next, multiply: 2 times 9 is 18. Finally, subtract: 18 − 5 = 13. The value is 13."
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
          "back": "A letter that represents an unknown or changing number. It's a key part of algebra."
        },
        {
          "id": "math-101-l08-f2",
          "front": "Translate: '5 less than a number'",
          "back": "x − 5 (NOT 5 − x!). The phrase 'less than' reverses the order."
        },
        {
          "id": "math-101-l08-f3",
          "front": "Evaluate 3x + 2 when x = 4.",
          "back": "Substitute 4 for x: 3(4) + 2 = 12 + 2 = 14."
        },
        {
          "id": "math-101-l08-f4",
          "front": "What are 'like terms'?",
          "back": "Terms with the same variable raised to the same exponent. For example, 3x and 5x are like terms and can be combined to make 8x."
        }
      ],
      "learningAids": [
        {
          "id": "math-101-l08-a1",
          "type": "practice",
          "title": "Algebraic Expression Builder",
          "content": "A drag-and-drop tool where you can build expressions like '2x + 5' from tiles representing numbers, variables, and operations."
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
          "explanation": "When the signs are the same, add the values (4 + 6 = 10) and keep the sign. The answer is −10."
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
          "explanation": "Absolute value is the distance from zero on the number line, which is always positive or zero. |−12| = 12."
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
          "explanation": "'Twice a number' is 2x. 'Decreased by 3' means to subtract 3. Combined, this is 2x − 3."
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
          "explanation": "Substitute 5 for x: 4(5) − 1 = 20 − 1 = 19."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "apply": 2
        }
      }
    },
    {
      "id": "math-101-l10",
      "title": "Solving One-Step Equations",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Identify inverse operations (addition/subtraction, multiplication/division)",
        "Solve one-step equations by isolating the variable",
        "Verify a solution by substituting it back into the original equation"
      ],
      "chunks": [
        {
          "id": "math-101-l10-c1",
          "title": "The Goal: Isolate the Variable",
          "content": "An equation is a math sentence that says two things are equal. Think of it like a balanced scale. The expression on the left side of the equals sign has the same value as the expression on the right. For example, in the equation x + 5 = 12, the value of 'x + 5' is the same as 12. Our goal when solving an equation is to find the value of the variable. To do this, we need to get the variable all by itself on one side of the equation. This is called 'isolating the variable.' To keep the scale balanced, whatever we do to one side of the equation, we must also do to the other side."
        },
        {
          "id": "math-101-l10-c2",
          "title": "Inverse Operations: Addition & Subtraction",
          "content": "To isolate a variable, we use inverse operations. 'Inverse' just means opposite. The inverse of addition is subtraction, and the inverse of subtraction is addition. Let's solve x + 5 = 12. To get x by itself, we need to get rid of the '+ 5'. We do the inverse operation, which is subtracting 5. To keep the equation balanced, we must subtract 5 from both sides: (x + 5) - 5 = 12 - 5. This simplifies to x = 7. Now let's try y - 3 = 10. The inverse of subtracting 3 is adding 3. So we add 3 to both sides: (y - 3) + 3 = 10 + 3. This gives us y = 13."
        },
        {
          "id": "math-101-l10-c3",
          "title": "Inverse Operations: Multiplication & Division",
          "content": "The same idea works for multiplication and division. They are inverse operations of each other. Let's solve the equation 4n = 20. This means 4 times n equals 20. To isolate n, we do the inverse of multiplying by 4, which is dividing by 4. We divide both sides by 4: 4n / 4 = 20 / 4. This simplifies to n = 5. Now let's solve z / 2 = 9. This means z divided by 2 equals 9. The inverse of dividing by 2 is multiplying by 2. We multiply both sides by 2: (z / 2) * 2 = 9 * 2. This gives us z = 18."
        },
        {
          "id": "math-101-l10-c4",
          "title": "Checking Your Answer",
          "content": "The best part about solving equations is that you can always check if your answer is correct! To do this, you substitute your solution back into the original equation. In our first example, we found that x = 7 for the equation x + 5 = 12. Let's check it. We replace x with 7: (7) + 5 = 12. Is this true? Yes, 12 = 12. Our answer is correct! Let's check n = 5 for the equation 4n = 20. We replace n with 5: 4(5) = 20. Is this true? Yes, 20 = 20. It's a great habit to always check your work to be sure you've found the right solution."
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-101-l10-a1",
          "title": "Equation Solver",
          "type": "drag_and_drop",
          "prompt": "Solve for x by dragging the correct inverse operation to both sides of the equation.",
          "equations": [
            "x + 8 = 15",
            "x - 4 = 6",
            "5x = 25"
          ],
          "options": [
            "+4",
            "-8",
            "÷5"
          ]
        }
      ],
      "flashcards": [
        {
          "id": "math-101-l10-f1",
          "front": "What is an inverse operation?",
          "back": "The opposite operation that 'undoes' another. Addition and subtraction are inverses; multiplication and division are inverses."
        },
        {
          "id": "math-101-l10-f2",
          "front": "How do you solve x + 8 = 15?",
          "back": "Subtract 8 from both sides. x = 7."
        },
        {
          "id": "math-101-l10-f3",
          "front": "How do you solve 3y = 21?",
          "back": "Divide both sides by 3. y = 7."
        },
        {
          "id": "math-101-l10-f4",
          "front": "Why is it important to check your answer?",
          "back": "To make sure your solution is correct. If both sides of the equation are equal after you substitute your answer, you know you got it right."
        }
      ],
      "learningAids": [
        {
          "id": "math-101-l10-a1",
          "type": "image",
          "title": "Balance Scale Animation",
          "content": "An animation of a balance scale. When a block is added to one side, the scale tips. When the same block is added to the other side, it becomes balanced again, visually representing an equation."
        }
      ]
    },
    {
      "id": "math-101-l11",
      "title": "Mastery Quiz: Math Foundations",
      "type": "quiz",
      "duration": 12,
      "objectives": [
        "Synthesize all math foundations concepts from PEMDAS through solving one-step equations"
      ],
      "questions": [
        {
          "id": "math-101-l11-q1",
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
          "id": "math-101-l11-q2",
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
          "explanation": "The LCD is 6. Convert the fractions: 1/2 = 3/6 and 1/3 = 2/6. Then add: 3/6 + 2/6 = 5/6."
        },
        {
          "id": "math-101-l11-q3",
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
          "explanation": "0.375 is read as 'three hundred seventy-five thousandths,' or 375/1000. You can simplify this fraction by dividing the numerator and denominator by their greatest common factor, 125, to get 3/8."
        },
        {
          "id": "math-101-l11-q4",
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
          "explanation": "Subtracting a negative is the same as adding a positive: 7 + 3 = 10."
        },
        {
          "id": "math-101-l11-q5",
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
          "explanation": "Substitute 6 for x: 2(6) + 7 = 12 + 7 = 19."
        },
        {
          "id": "math-101-l11-q6",
          "text": "Solve for x: x + 5 = 13",
          "options": [
            {
              "id": "a",
              "text": "8"
            },
            {
              "id": "b",
              "text": "18"
            },
            {
              "id": "c",
              "text": "-8"
            },
            {
              "id": "d",
              "text": "7"
            }
          ],
          "correctOptionId": "a",
          "explanation": "To isolate x, you must do the inverse of adding 5, which is subtracting 5 from both sides. 13 - 5 = 8."
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
