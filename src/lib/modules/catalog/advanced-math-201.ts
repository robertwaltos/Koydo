import type { LearningModule } from "@/lib/modules/types";

export const advanced_math_201_Module: LearningModule = {
  "id": "advanced-math-201",
  "title": "Advanced Math Topics",
  "description": "Master fractions, decimals, ratios, proportions, and introductory algebra through worked examples and real-world problem solving.",
  "subject": "Advanced Math",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Represent, compare, and perform operations with fractions",
    "Convert between fractions, decimals, and percentages",
    "Solve ratio and proportion problems in real-world contexts",
    "Evaluate and simplify algebraic expressions",
    "Solve one-step and two-step equations",
    "Interpret data using tables, graphs, and basic probability",
    "Apply multiple math concepts to a multi-step scenario"
  ],
  "lessons": [
    {
      "id": "advanced-math-201-l01",
      "title": "Understanding Fractions",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "A colorful, appetizing pizza cut into 8 slices with 3 slices slightly pulled away, showing 3/8, set on a bright, engaging background. Imagen 4.",
      "conceptVideoPrompt": "A dynamic 3D animation showing a chocolate bar breaking into equal pieces, with glowing numbers appearing to represent the numerator and denominator as pieces are selected. Veo 3.1.",
      "objectives": [
        "Define numerator and denominator",
        "Represent fractions on a number line and with area models",
        "Compare fractions using common denominators and benchmarks"
      ],
      "chunks": [
        {
          "id": "advanced-math-201-l01-c1",
          "title": "What Is a Fraction?",
          "content": "A fraction is a special way to represent a part of a whole object or quantity. We write fractions in a specific format, which is called a numerator over a denominator. The denominator is the bottom number, and it tells us how many equal parts the whole is divided into. For example, if we have a pizza that is cut into 8 equal slices, the denominator would be 8. The numerator is the top number, and it tells us how many of those parts we actually have. So, if we have 3 slices of that pizza, we would write it as 3/8. This means we have 3 out of the 8 slices. Understanding fractions is very important because we use them in many everyday situations, such as sharing food with friends, measuring ingredients when we cook, or even when we play games that involve scoring. Learning about fractions helps us become better at math and makes it easier to understand the world around us!"
        },
        {
          "id": "advanced-math-201-l01-c2",
          "title": "Fractions on a Number Line",
          "content": "When we want to place fractions on a number line, we start by dividing the space between 0 and 1 into equal parts. Let’s take a closer look at how we can do this using fourths as an example. First, we divide the segment into four equal sections. We then mark the points at 1/4, 2/4 (which is the same as 1/2), 3/4, and finally 4/4, which is equal to 1. This process helps us visualize that fractions are indeed numbers, not just pieces of something like pie!\nNow, what happens if we have fractions that are greater than 1? For instance, if we have a fraction like 5/4, we would place it to the right of 1 on the number line. This means that 5/4 is actually one whole and an additional quarter. By using a number line, we can see how fractions relate to whole numbers and how they fit into our understanding of quantities. This visual representation is a powerful tool that helps us grasp the concept of fractions more clearly and shows us that they are part of the number system, just like whole numbers are. Understanding this will make working with fractions much easier and more fun!"
        },
        {
          "id": "advanced-math-201-l01-c3",
          "title": "Comparing Fractions",
          "content": "When we want to compare fractions, we can use a couple of different methods depending on whether the fractions have the same denominator or different ones. Let's start with fractions that have the same denominator. In this case, we only need to look at the numerators. For example, if we have the fractions 5/8 and 3/8, we can see that 5 is greater than 3. Therefore, we can conclude that 5/8 is greater than 3/8.\nNow, what if the fractions have different denominators? In that case, we need to find a common denominator to make the comparison easier. Let's take the fractions 2/3 and 3/5 as an example. To find a common denominator, we can look for a number that both denominators can divide into evenly. For these fractions, the common denominator is 15.\nNext, we convert each fraction to have this common denominator. For 2/3, we multiply both the numerator and the denominator by 5, which gives us 10/15. For 3/5, we multiply both the numerator and the denominator by 3, resulting in 9/15. Now we can compare the two fractions: since 10 is greater than 9, we can say that 2/3 is greater than 3/5.\nA helpful strategy when comparing fractions is to think about how they relate to the fraction 1/2. If a fraction is greater than 1/2, it is larger than many other fractions, and if it is less than 1/2, it is smaller. This can help us quickly understand which fractions are larger or smaller without doing all the calculations each time."
        },
        {
          "id": "advanced-math-201-l01-c4",
          "title": "Equivalent Fractions",
          "content": "Equivalent fractions are special types of fractions that may look different from each other, but they actually represent the same amount or value. This means that even though they have different numbers, they can be used interchangeably in math problems. To create equivalent fractions, we can multiply or divide both the top number (called the numerator) and the bottom number (called the denominator) by the same number. For example, if we take the fraction 1/2, we can multiply both the numerator and the denominator by 2 to get 2/4. We can also multiply by 3 to get 3/6, or by 4 to get 4/8. All of these fractions are equivalent because they represent the same part of a whole.\nWhen we want to simplify a fraction, we can make it easier to understand by dividing both the numerator and the denominator by their greatest common factor (GCF). The GCF is the largest number that can evenly divide both numbers. For example, if we have the fraction 6/8, we can find the GCF, which is 2. By dividing both the numerator and the denominator by 2, we simplify 6/8 to 3/4. Understanding equivalent fractions is really important because it helps us when we need to add, subtract, or compare different fractions in math. It’s like finding different paths to the same destination in a journey through numbers!\nSo remember, equivalent fractions are just different ways to show the same value, and simplifying fractions helps us work with them more easily in our math adventures!"
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-201-l01-f1",
          "front": "Numerator",
          "back": "The top number of a fraction; tells how many parts you have"
        },
        {
          "id": "advanced-math-201-l01-f2",
          "front": "Denominator",
          "back": "The bottom number of a fraction; tells how many equal parts the whole is divided into"
        },
        {
          "id": "advanced-math-201-l01-f3",
          "front": "Equivalent fractions",
          "back": "Fractions that represent the same value: 1/2 = 2/4 = 3/6"
        },
        {
          "id": "advanced-math-201-l01-f4",
          "front": "Simplify a fraction",
          "back": "Divide numerator and denominator by their greatest common factor (GCF)"
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-201-l01-a1",
          "type": "image",
          "title": "Fraction Models",
          "content": "Area models and number lines showing 1/2, 1/3, 1/4, 2/3, 3/4 side by side."
        }
      ]
    },
    {
      "id": "advanced-math-201-l02",
      "title": "Fraction Operations",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "A vibrant digital scale balancing different fraction blocks (like 1/2 and 2/4) with glowing math symbols floating around. Imagen 4.",
      "conceptVideoPrompt": "An engaging animation of liquid being poured from measuring cups of different fraction sizes into a larger bowl, visually demonstrating addition of fractions. Veo 3.1.",
      "objectives": [
        "Add and subtract fractions with like and unlike denominators",
        "Multiply fractions and simplify the result",
        "Solve a word problem involving fraction operations"
      ],
      "chunks": [
        {
          "id": "advanced-math-201-l02-c1",
          "title": "Adding and Subtracting Fractions",
          "content": "When adding or subtracting fractions, the most important rule is that the denominators (the bottom numbers) must be the same! If they are already the same, you simply add or subtract the numerators (the top numbers) and keep the denominator exactly as it is. For example, 2/5 + 1/5 = 3/5. But what if the denominators are different? You have to find a 'common denominator' first. For instance, to add 1/3 and 1/4, you find a number both 3 and 4 can divide into, which is 12. Convert them: 1/3 becomes 4/12, and 1/4 becomes 3/12. Now you can add them: 4/12 + 3/12 = 7/12!"
        },
        {
          "id": "advanced-math-201-l02-c2",
          "title": "Multiplying Fractions",
          "content": "Multiplying fractions is actually simpler than adding them because you don't need a common denominator! To multiply two fractions, you just multiply straight across. Multiply the numerators together to get your new numerator, and multiply the denominators together to get your new denominator. For example, 2/3 × 4/5. First, multiply the tops: 2 × 4 = 8. Then, multiply the bottoms: 3 × 5 = 15. Your answer is 8/15. Always remember to check if your final fraction can be simplified!"
        },
        {
          "id": "advanced-math-201-l02-c3",
          "title": "Real-World Fraction Operations",
          "content": "Fractions are everywhere in the real world! Imagine you are baking cookies and the recipe calls for 3/4 cup of sugar, but you want to make half a batch. You would multiply 3/4 by 1/2 to find out how much sugar you need (which is 3/8 cup). Or, if you have 7/8 of a pizza left and you eat 2/8 of it for lunch, you subtract to find out you have 5/8 left. Understanding how to operate with fractions helps you solve everyday puzzles like these with ease."
        }
      ],
      "metadata": {
        "prompts": [
          "How do you add 1/3 + 1/4? What common denominator would you use?",
          "Multiply 2/3 × 3/5 and simplify the answer.",
          "A recipe calls for 3/4 cup of flour. You want to make half the recipe. How much flour do you need?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "advanced-math-201-l02-ia1",
          "type": "sorting_buckets",
          "title": "Operation Strategy Sort",
          "description": "Sort each step into the correct operation strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "add",
                "label": "Adding Fractions"
              },
              {
                "id": "multiply",
                "label": "Multiplying Fractions"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Find a common denominator first",
                "correctBucketId": "add"
              },
              {
                "id": "i2",
                "label": "Multiply numerator × numerator",
                "correctBucketId": "multiply"
              },
              {
                "id": "i3",
                "label": "Keep the denominator if they match, add numerators",
                "correctBucketId": "add"
              },
              {
                "id": "i4",
                "label": "Multiply denominator × denominator",
                "correctBucketId": "multiply"
              },
              {
                "id": "i5",
                "label": "Convert to equivalent fractions before combining",
                "correctBucketId": "add"
              },
              {
                "id": "i6",
                "label": "Cross-cancel common factors before multiplying",
                "correctBucketId": "multiply"
              }
            ]
          }
        },
        {
          "id": "advanced-math-201-l02-ia2",
          "type": "matching_pairs",
          "title": "Fraction Calculation Match",
          "description": "Match each fraction problem to its correct answer.",
          "estimatedMinutes": 6,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "1/4 + 1/4"
              },
              {
                "id": "l2",
                "label": "1/3 + 1/6"
              },
              {
                "id": "l3",
                "label": "2/5 × 5/6"
              },
              {
                "id": "l4",
                "label": "3/4 − 1/2"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "1/2"
              },
              {
                "id": "r2",
                "label": "1/2"
              },
              {
                "id": "r3",
                "label": "1/3"
              },
              {
                "id": "r4",
                "label": "1/4"
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
              },
              {
                "leftId": "l4",
                "rightId": "r4"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-201-l02-a1",
          "type": "mnemonic",
          "title": "Fraction Operations Cheat Sheet",
          "content": "Add/Subtract: same denominator first, then combine numerators. Multiply: straight across (top × top, bottom × bottom). Simplify last."
        }
      ]
    },
    {
      "id": "advanced-math-201-l03",
      "title": "Checkpoint: Fractions",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing checkpoint flag on a 3D game-like path made of fraction tiles. Imagen 4.",
      "conceptVideoPrompt": "A fast-paced, energetic recap montage of fraction pieces snapping together like puzzle pieces, ending with a glowing question mark. Veo 3.1.",
      "questions": [
        {
          "id": "advanced-math-201-l03-q1",
          "text": "Which fraction is equivalent to 2/6?",
          "skillId": "advanced-math-skill-equivalent",
          "options": [
            {
              "id": "a",
              "text": "1/2"
            },
            {
              "id": "b",
              "text": "1/3"
            },
            {
              "id": "c",
              "text": "2/3"
            },
            {
              "id": "d",
              "text": "3/6"
            }
          ],
          "correctOptionId": "b",
          "explanation": "2/6 simplified: divide both by GCF of 2. 2÷2 = 1, 6÷2 = 3. So 2/6 = 1/3."
        },
        {
          "id": "advanced-math-201-l03-q2",
          "text": "What is 2/5 + 1/5?",
          "skillId": "advanced-math-skill-add-fractions",
          "options": [
            {
              "id": "a",
              "text": "3/10"
            },
            {
              "id": "b",
              "text": "3/5"
            },
            {
              "id": "c",
              "text": "1/5"
            },
            {
              "id": "d",
              "text": "2/10"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Same denominator: add numerators. 2/5 + 1/5 = 3/5."
        },
        {
          "id": "advanced-math-201-l03-q3",
          "text": "What is 1/2 × 3/4?",
          "skillId": "advanced-math-skill-multiply-fractions",
          "options": [
            {
              "id": "a",
              "text": "3/8"
            },
            {
              "id": "b",
              "text": "4/6"
            },
            {
              "id": "c",
              "text": "3/6"
            },
            {
              "id": "d",
              "text": "1/8"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Multiply straight across: 1×3 = 3, 2×4 = 8. Answer: 3/8."
        },
        {
          "id": "advanced-math-201-l03-q4",
          "text": "A pizza is cut into 8 slices. You eat 3 slices. What fraction of the pizza is LEFT?",
          "skillId": "advanced-math-skill-fraction-context",
          "options": [
            {
              "id": "a",
              "text": "3/8"
            },
            {
              "id": "b",
              "text": "8/3"
            },
            {
              "id": "c",
              "text": "5/8"
            },
            {
              "id": "d",
              "text": "5/3"
            }
          ],
          "correctOptionId": "c",
          "explanation": "8 slices total − 3 eaten = 5 remaining. Fraction left = 5/8."
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
          "id": "advanced-math-201-l03-a1",
          "type": "mnemonic",
          "title": "GCF Shortcut",
          "content": "To simplify, ask: What is the biggest number that divides both top and bottom evenly?"
        }
      ]
    },
    {
      "id": "advanced-math-201-l04",
      "title": "Decimals and Percentages",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "A futuristic digital price tag showing a 50% off discount, morphing into 0.50 and 1/2 in bright neon colors. Imagen 4.",
      "conceptVideoPrompt": "A visual zoom-in on a dollar bill breaking down into 100 shiny pennies, with a percentage meter filling up to 100% alongside it. Veo 3.1.",
      "objectives": [
        "Convert between fractions, decimals, and percentages",
        "Compare and order decimals",
        "Calculate a percentage of a number"
      ],
      "chunks": [
        {
          "id": "advanced-math-201-l04-c1",
          "title": "Understanding Decimals",
          "content": "Decimals are a special way to show fractions, particularly those that have denominators like 10, 100, or even 1000. For instance, when we see the decimal 0.5, it can also be written as the fraction 5/10, which is the same as 1/2. Similarly, the decimal 0.25 can be expressed as the fraction 25/100, which simplifies to 1/4. Understanding decimals is important because they help us represent parts of a whole in a clear way.\nWhen we look at decimals, we notice that there are place values to the right of the decimal point. These place values include tenths, hundredths, and thousandths. The tenths place is the first digit after the decimal, the hundredths place is the second digit, and the thousandths place is the third digit.\nTo compare decimals, we can line up the decimal points and look at each digit one by one. For example, if we compare 0.45 and 0.39, we see that 0.45 is greater than 0.39. This is because in 0.45, the 4 in the tenths place is greater than the 3 in the tenths place of 0.39. Learning about decimals is not just a math skill; it helps us in everyday situations, like when we measure ingredients for a recipe or calculate discounts while shopping. The more we practice with decimals, the more confident we will become in using them in real life!"
        },
        {
          "id": "advanced-math-201-l04-c2",
          "title": "Fraction ↔ Decimal Conversion",
          "content": "When we want to change a fraction into a decimal, we simply divide the top number, called the numerator, by the bottom number, known as the denominator. For example, let's look at the fraction 3/4. To find its decimal form, we perform the calculation 3 divided by 4, which gives us 0.75. This means that 3/4 is the same as 0.75 in decimal form. Now, if we want to go the other way and convert a decimal back into a fraction, we can read the decimal as a fraction. Take the decimal 0.6, for instance. We can express this as 6 over 10, or 6/10. If we simplify that, we find that it equals 3/5. It's also important to note that some fractions can result in repeating decimals. A good example of this is 1/3, which equals 0.333... and continues on forever. Understanding how to convert between fractions and decimals is very helpful in math. There are also some common conversions that are great to memorize, such as 1/2 equals 0.5, 1/4 equals 0.25, and 3/4 equals 0.75. Knowing these can make working with numbers much easier and faster!"
        },
        {
          "id": "advanced-math-201-l04-c3",
          "title": "Percentages",
          "content": "The word 'percent' comes from the Latin phrase meaning 'per hundred.' This means that when we say 50%, we are talking about 50 out of every 100 parts. We can also express 50% as a fraction, which is 50/100, and if we simplify that, it equals 0.5 or 1/2. To change a decimal number into a percent, we simply multiply it by 100. For example, if we take the decimal 0.75 and multiply it by 100, we find that it equals 75%. Conversely, if we want to convert a percent back into a decimal, we divide by 100. So, if we have 35% and we divide it by 100, we get 0.35. Now, if we want to find a certain percentage of a number, we can use multiplication. For instance, to find 20% of 80, we calculate 0.20 multiplied by 80, which gives us 16. Learning how to work with percentages is very useful in our daily lives, whether we are shopping, cooking, or even planning events. Understanding these concepts can help us make better decisions and understand the world around us more clearly."
        },
        {
          "id": "advanced-math-201-l04-c4",
          "title": "Real-World Applications",
          "content": "Percentages are an important part of our everyday lives, and we see them in many places such as sales tax, tips at restaurants, discounts when shopping, and even in the grades we receive in school. Let's look at a fun example to understand how percentages work! Imagine you want to buy a shirt that costs $40, but it is on sale for 25% off. To find out how much money you save, we can calculate the discount. We do this by multiplying 0.25 (which represents 25%) by the original price of the shirt, which is $40. This calculation gives us a discount of $10. Now, to find the sale price of the shirt, we need to subtract the discount from the original price. So, $40 minus $10 equals $30. But wait, there’s more! If there is an 8% sales tax on the sale price, we need to calculate that too. We do this by multiplying 0.08 by $30, which gives us $2.40. Finally, to find out how much we will actually pay at the register, we add the sales tax to the sale price: $30 plus $2.40 equals $32.40. Learning about decimals and percentages is super helpful for managing your money, making smart shopping choices, and understanding information in charts and graphs!"
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-201-l04-f1",
          "front": "Fraction → Decimal",
          "back": "Divide the numerator by the denominator. Example: 3/8 = 3 ÷ 8 = 0.375"
        },
        {
          "id": "advanced-math-201-l04-f2",
          "front": "Decimal → Percent",
          "back": "Multiply by 100 and add % sign. Example: 0.45 → 45%"
        },
        {
          "id": "advanced-math-201-l04-f3",
          "front": "Percent of a number",
          "back": "Convert percent to decimal, then multiply. 30% of 50 = 0.30 × 50 = 15"
        },
        {
          "id": "advanced-math-201-l04-f4",
          "front": "Key conversions",
          "back": "1/2 = 0.5 = 50% | 1/4 = 0.25 = 25% | 3/4 = 0.75 = 75% | 1/5 = 0.2 = 20%"
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-201-l04-a1",
          "type": "image",
          "title": "Conversion Triangle",
          "content": "Diagram showing fraction ↔ decimal ↔ percent conversions with arrows and examples."
        }
      ]
    },
    {
      "id": "advanced-math-201-l05",
      "title": "Ratios and Proportions",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "A split-screen graphic showing 2 blue paint buckets and 3 yellow paint buckets mixing to make green, representing a 2:3 ratio. Imagen 4.",
      "conceptVideoPrompt": "A time-lapse animation of a recipe being doubled, showing ingredients multiplying proportionally with floating ratio numbers (e.g., 2:3 becomes 4:6). Veo 3.1.",
      "objectives": [
        "Write ratios in three forms (a:b, a/b, a to b)",
        "Determine if two ratios form a proportion",
        "Solve proportion problems using cross-multiplication"
      ],
      "chunks": [
        {
          "id": "advanced-math-201-l05-c1",
          "title": "Introduction to Ratios",
          "content": "A ratio is simply a way to compare two different quantities. Imagine you have a bowl of fruit with 2 apples and 3 oranges. The ratio of apples to oranges is 2 to 3. We can write this in three different ways: using the word 'to' (2 to 3), using a colon (2:3), or as a fraction (2/3). Ratios are incredibly useful because they help us understand the relationship between different amounts, whether we are mixing paint colors, cooking a recipe, or comparing scores in a game!"
        },
        {
          "id": "advanced-math-201-l05-c2",
          "title": "Understanding Proportions",
          "content": "A proportion is an equation that says two ratios are equal. Think of it like equivalent fractions! If a recipe calls for 2 cups of flour for every 3 cups of sugar (a 2:3 ratio), and you want to double the recipe, you would use 4 cups of flour and 6 cups of sugar (a 4:6 ratio). Because 2/3 is equal to 4/6, these two ratios form a proportion. Proportions help us scale things up or down perfectly without changing the balance."
        },
        {
          "id": "advanced-math-201-l05-c3",
          "title": "Cross-Multiplication",
          "content": "How can you tell for sure if two ratios form a proportion? You can use a neat trick called cross-multiplication! If you have two fractions, like a/b and c/d, you multiply diagonally: a × d and b × c. If the two answers are the same, the ratios are proportional! For example, with 2/3 and 4/6, you multiply 2 × 6 (which is 12) and 3 × 4 (which is also 12). Since 12 equals 12, it's a perfect proportion. You can also use this trick to find a missing number in a proportion!"
        }
      ],
      "metadata": {
        "prompts": [
          "In a class of 30 students, 18 are girls. What is the ratio of girls to boys?",
          "A recipe uses 2 cups of flour for every 3 cups of sugar. How much flour for 9 cups of sugar?",
          "Are the ratios 4:6 and 6:9 proportional? How can you check?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "advanced-math-201-l05-ia1",
          "type": "matching_pairs",
          "title": "Equivalent Ratio Match",
          "description": "Match each ratio to its equivalent form.",
          "estimatedMinutes": 6,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "2:3"
              },
              {
                "id": "l2",
                "label": "1:4"
              },
              {
                "id": "l3",
                "label": "3:5"
              },
              {
                "id": "l4",
                "label": "5:2"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "4:6"
              },
              {
                "id": "r2",
                "label": "3:12"
              },
              {
                "id": "r3",
                "label": "6:10"
              },
              {
                "id": "r4",
                "label": "10:4"
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
              },
              {
                "leftId": "l4",
                "rightId": "r4"
              }
            ]
          }
        },
        {
          "id": "advanced-math-201-l05-ia2",
          "type": "sorting_buckets",
          "title": "Proportional or Not?",
          "description": "Sort each pair of ratios into proportional or not proportional.",
          "estimatedMinutes": 7,
          "difficultyLevel": "hard",
          "data": {
            "buckets": [
              {
                "id": "proportional",
                "label": "Proportional (equivalent)"
              },
              {
                "id": "not",
                "label": "Not Proportional"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "2/3 and 4/6",
                "correctBucketId": "proportional"
              },
              {
                "id": "i2",
                "label": "3/4 and 5/6",
                "correctBucketId": "not"
              },
              {
                "id": "i3",
                "label": "1/5 and 3/15",
                "correctBucketId": "proportional"
              },
              {
                "id": "i4",
                "label": "2/7 and 4/12",
                "correctBucketId": "not"
              },
              {
                "id": "i5",
                "label": "6/8 and 9/12",
                "correctBucketId": "proportional"
              },
              {
                "id": "i6",
                "label": "5/10 and 3/5",
                "correctBucketId": "not"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-201-l05-a1",
          "type": "mnemonic",
          "title": "Cross-Multiply Check",
          "content": "To check if a/b = c/d, see if a×d = b×c. If equal → proportional."
        }
      ]
    },
    {
      "id": "advanced-math-201-l06",
      "title": "Checkpoint: Decimals, Percentages & Ratios",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing neon sign displaying a mix of decimals, percentages, and ratio colons in a fun, arcade-style font. Imagen 4.",
      "conceptVideoPrompt": "A dynamic slot machine animation where the reels spin and match equivalent fractions, decimals, and percentages (e.g., 1/4, 0.25, 25%). Veo 3.1.",
      "questions": [
        {
          "id": "advanced-math-201-l06-q1",
          "text": "What is 3/5 written as a decimal?",
          "skillId": "advanced-math-skill-conversion",
          "options": [
            {
              "id": "a",
              "text": "0.35"
            },
            {
              "id": "b",
              "text": "0.6"
            },
            {
              "id": "c",
              "text": "0.53"
            },
            {
              "id": "d",
              "text": "1.67"
            }
          ],
          "correctOptionId": "b",
          "explanation": "3 ÷ 5 = 0.6. You can also think: 3/5 = 6/10 = 0.6."
        },
        {
          "id": "advanced-math-201-l06-q2",
          "text": "A jacket costs $60 and is 30% off. What is the sale price?",
          "skillId": "advanced-math-skill-percent",
          "options": [
            {
              "id": "a",
              "text": "$18"
            },
            {
              "id": "b",
              "text": "$30"
            },
            {
              "id": "c",
              "text": "$42"
            },
            {
              "id": "d",
              "text": "$48"
            }
          ],
          "correctOptionId": "c",
          "explanation": "30% of $60 = 0.30 × 60 = $18 discount. Sale price = $60 − $18 = $42."
        },
        {
          "id": "advanced-math-201-l06-q3",
          "text": "A map scale says 1 cm = 5 km. Two cities are 3 cm apart on the map. What is the real distance?",
          "skillId": "advanced-math-skill-proportion",
          "options": [
            {
              "id": "a",
              "text": "8 km"
            },
            {
              "id": "b",
              "text": "15 km"
            },
            {
              "id": "c",
              "text": "10 km"
            },
            {
              "id": "d",
              "text": "20 km"
            }
          ],
          "correctOptionId": "b",
          "explanation": "1 cm : 5 km = 3 cm : ? km. Cross-multiply: 3 × 5 = 15 km."
        },
        {
          "id": "advanced-math-201-l06-q4",
          "text": "Which decimal is greater: 0.47 or 0.5?",
          "skillId": "advanced-math-skill-compare-decimals",
          "options": [
            {
              "id": "a",
              "text": "0.47 is greater"
            },
            {
              "id": "b",
              "text": "They are equal"
            },
            {
              "id": "c",
              "text": "0.5 is greater"
            },
            {
              "id": "d",
              "text": "Cannot be compared"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Compare tenths first: 0.5 has 5 tenths, 0.47 has 4 tenths. 5 > 4, so 0.5 > 0.47."
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
          "id": "advanced-math-201-l06-a1",
          "type": "mnemonic",
          "title": "Percent Shortcut",
          "content": "To find 10% of any number, move the decimal one place left. Then multiply for other percentages."
        }
      ]
    },
    {
      "id": "advanced-math-201-l07",
      "title": "Intro to Algebra: Expressions",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "A glowing, magical mystery box with a large 'X' on it, surrounded by floating numbers and math operation symbols. Imagen 4.",
      "conceptVideoPrompt": "An animated sequence where letters like 'x' and 'y' jump into a mathematical machine, combining with numbers to output colorful expressions. Veo 3.1.",
      "objectives": [
        "Identify variables, constants, coefficients, and terms in an expression",
        "Evaluate an expression by substituting a value for the variable",
        "Simplify expressions by combining like terms"
      ],
      "chunks": [
        {
          "id": "advanced-math-201-l07-c1",
          "title": "What Is a Variable?",
          "content": "In the world of algebra, we often use letters to represent numbers that we don't know yet. These letters are called variables, and they can be any letter from the alphabet, such as x, n, or t. Think of a variable as a placeholder for a number that we will figure out later. An expression in algebra is like a math phrase that combines numbers, variables, and operations, which are the actions we perform, like adding or multiplying.\nFor example, let's look at the expression 3x + 5. This means '3 times some unknown number x, plus 5.' In this expression, the number 3 is known as the coefficient because it tells us how many times we are multiplying the variable x. The number 5 is called a constant because it stays the same no matter what value x takes.\nWhen we break down this expression, we see that it has two parts, or terms: the first term is 3x, and the second term is 5. Understanding how to work with variables and expressions is a crucial step in learning algebra, as it helps us solve problems and understand mathematical relationships better. So, as we dive deeper into algebra, keep in mind that variables and expressions are the building blocks of more complex math concepts!"
        },
        {
          "id": "advanced-math-201-l07-c2",
          "title": "Evaluating Expressions",
          "content": "To evaluate an expression means to find its value by replacing the variable with a specific number and then performing the calculations. For instance, if we know that x equals 4, we can evaluate the expression 3x + 5 by substituting 4 for x. This gives us 3(4) + 5, which simplifies to 12 + 5, resulting in 17. Similarly, if we let n equal 2, we can evaluate the expression n² + 3n by substituting 2 for n. This gives us 2² + 3(2), which simplifies to 4 + 6, resulting in 10. It's important to remember to follow the order of operations, often remembered by the acronym PEMDAS, which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right)."
        },
        {
          "id": "advanced-math-201-l07-c3",
          "title": "Combining Like Terms",
          "content": "Like terms are terms in an expression that have the same variable raised to the same power. For example, 3x and 7x are like terms because they both contain the variable x. When we combine like terms, we can add their coefficients together. So, 3x + 7x equals 10x. However, terms like 3x and 3x² are not like terms because they have different variables (x and x²). Let's practice simplifying an expression: if we have 2x + 5 + 4x − 3, we can combine the like terms. First, we group the terms with x together: (2x + 4x) and the constant terms together: (5 − 3). This gives us 6x + 2 as the simplified expression. Learning to combine like terms makes algebra much easier!"
        },
        {
          "id": "advanced-math-201-l07-c4",
          "title": "Writing Expressions from Words",
          "content": "In the world of algebra, we often need to turn phrases we hear into mathematical expressions. This is a fun way to connect our everyday language with numbers! For instance, when we say 'a number plus 7,' we can express this mathematically as n + 7, where 'n' represents the number we don't know yet. If we hear 'twice a number minus 3,' we can write this as 2n − 3, which means we take the number, double it, and then subtract 3. Another interesting phrase is 'five more than triple a number.' This can be translated to 3n + 5, meaning we take the number, multiply it by 3, and then add 5. Now, let’s try one together: 'ten less than a number squared' can be written as n² − 10. Learning to recognize these patterns is a crucial first step in mastering algebra and solving equations. Keep practicing, and you'll become more comfortable with these translations!"
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-201-l07-f1",
          "front": "Variable",
          "back": "A letter representing an unknown number (e.g., x, n, t)"
        },
        {
          "id": "advanced-math-201-l07-f2",
          "front": "Coefficient",
          "back": "The number multiplied by a variable. In 7x, the coefficient is 7"
        },
        {
          "id": "advanced-math-201-l07-f3",
          "front": "Like terms",
          "back": "Terms with the same variable and exponent. 3x and 5x are like terms; 3x and 3x² are not"
        },
        {
          "id": "advanced-math-201-l07-f4",
          "front": "PEMDAS",
          "back": "Order of operations: Parentheses, Exponents, Multiplication/Division (L→R), Addition/Subtraction (L→R)"
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-201-l07-a1",
          "type": "mnemonic",
          "title": "PEMDAS",
          "content": "Please Excuse My Dear Aunt Sally: Parentheses, Exponents, Multiply/Divide, Add/Subtract."
        }
      ]
    },
    {
      "id": "advanced-math-201-l08",
      "title": "Solving Equations",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "A classic golden balance scale with a glowing 'x' block on one side and several numbered weights on the other, perfectly balanced. Imagen 4.",
      "conceptVideoPrompt": "A step-by-step visual of a balance scale where weights are removed equally from both sides, isolating the glowing 'x' block. Veo 3.1.",
      "objectives": [
        "Solve one-step equations (x + 5 = 12, 3x = 18)",
        "Solve two-step equations (2x + 3 = 11)",
        "Check solutions by substituting back"
      ],
      "chunks": [
        {
          "id": "advanced-math-201-l08-c1",
          "title": "The Golden Rule of Algebra",
          "content": "An equation is like a perfectly balanced scale. The equals sign (=) means that everything on the left side weighs exactly the same as everything on the right side. The Golden Rule of Algebra is: Whatever you do to one side of the equation, you MUST do to the other side! If you subtract 5 from the left, you must subtract 5 from the right to keep it balanced. We use this rule to 'isolate the variable'—which means getting the letter all by itself to find out what number it represents."
        },
        {
          "id": "advanced-math-201-l08-c2",
          "title": "Solving Two-Step Equations",
          "content": "Sometimes, getting the variable by itself takes more than one step. Imagine the variable is a present wrapped in a box and tied with a bow. To open it, you have to untie the bow first, then open the box. In math, we do this by doing PEMDAS in reverse! First, undo any addition or subtraction. Then, undo any multiplication or division. For example, in 2x + 3 = 11, first subtract 3 from both sides (2x = 8). Then, divide both sides by 2 (x = 4). You've unwrapped the variable!"
        },
        {
          "id": "advanced-math-201-l08-c3",
          "title": "Checking Your Answer",
          "content": "The best part about algebra is that you can always know if you got the right answer before you even turn in your test! Once you find a value for your variable, just plug it back into the original equation. If we think x = 4 for the equation 2x + 3 = 11, we substitute 4 for x: 2(4) + 3. That becomes 8 + 3, which equals 11. Since 11 = 11, our scale is balanced, and we know our answer is 100% correct!"
        }
      ],
      "metadata": {
        "prompts": [
          "Solve: x + 8 = 15. What operation do you use to isolate x?",
          "Solve: 4n = 24. How do you undo multiplication?",
          "Solve: 3x − 7 = 14. What do you do first — add 7 or divide by 3?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "advanced-math-201-l08-ia1",
          "type": "drag_and_drop",
          "title": "Equation Solving Steps",
          "description": "Drag each solving step into the correct order for 2x + 5 = 13.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "data": {
            "targets": [
              {
                "id": "step1",
                "label": "Step 1"
              },
              {
                "id": "step2",
                "label": "Step 2"
              },
              {
                "id": "step3",
                "label": "Step 3"
              },
              {
                "id": "step4",
                "label": "Step 4"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Subtract 5 from both sides: 2x = 8",
                "correctTargetId": "step1"
              },
              {
                "id": "d2",
                "label": "Divide both sides by 2: x = 4",
                "correctTargetId": "step2"
              },
              {
                "id": "d3",
                "label": "Check: 2(4) + 5 = 8 + 5 = 13 ✓",
                "correctTargetId": "step3"
              },
              {
                "id": "d4",
                "label": "Write the solution: x = 4",
                "correctTargetId": "step4"
              }
            ]
          }
        },
        {
          "id": "advanced-math-201-l08-ia2",
          "type": "matching_pairs",
          "title": "Equation to Solution Match",
          "description": "Match each equation to its correct solution.",
          "estimatedMinutes": 6,
          "difficultyLevel": "hard",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "x + 9 = 15"
              },
              {
                "id": "l2",
                "label": "5n = 35"
              },
              {
                "id": "l3",
                "label": "2x − 4 = 10"
              },
              {
                "id": "l4",
                "label": "x/3 = 6"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "x = 6"
              },
              {
                "id": "r2",
                "label": "n = 7"
              },
              {
                "id": "r3",
                "label": "x = 7"
              },
              {
                "id": "r4",
                "label": "x = 18"
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
              },
              {
                "leftId": "l4",
                "rightId": "r4"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-201-l08-a1",
          "type": "mnemonic",
          "title": "Balance Rule",
          "content": "An equation is like a balance scale — whatever you do to one side, you must do to the other."
        }
      ]
    },
    {
      "id": "advanced-math-201-l09",
      "title": "Checkpoint: Algebra Basics",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A futuristic digital lock with an equation on the screen and a keypad to enter the value of 'x'. Imagen 4.",
      "conceptVideoPrompt": "A fast-paced animation of a maze where solving simple equations opens doors to the center. Veo 3.1.",
      "questions": [
        {
          "id": "advanced-math-201-l09-q1",
          "text": "Simplify: 4x + 3 + 2x − 1",
          "skillId": "advanced-math-skill-simplify",
          "options": [
            {
              "id": "a",
              "text": "6x + 2"
            },
            {
              "id": "b",
              "text": "6x + 4"
            },
            {
              "id": "c",
              "text": "8x"
            },
            {
              "id": "d",
              "text": "4x + 5"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Combine like terms: (4x + 2x) + (3 − 1) = 6x + 2."
        },
        {
          "id": "advanced-math-201-l09-q2",
          "text": "If x = 3, what is the value of 2x² + 1?",
          "skillId": "advanced-math-skill-evaluate",
          "options": [
            {
              "id": "a",
              "text": "13"
            },
            {
              "id": "b",
              "text": "19"
            },
            {
              "id": "c",
              "text": "7"
            },
            {
              "id": "d",
              "text": "37"
            }
          ],
          "correctOptionId": "b",
          "explanation": "2(3)² + 1 = 2(9) + 1 = 18 + 1 = 19. Remember: square first, then multiply by 2."
        },
        {
          "id": "advanced-math-201-l09-q3",
          "text": "Solve: 3n + 4 = 19",
          "skillId": "advanced-math-skill-equations",
          "options": [
            {
              "id": "a",
              "text": "n = 7"
            },
            {
              "id": "b",
              "text": "n = 5"
            },
            {
              "id": "c",
              "text": "n = 4"
            },
            {
              "id": "d",
              "text": "n = 6"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Subtract 4: 3n = 15. Divide by 3: n = 5. Check: 3(5) + 4 = 19 ✓."
        },
        {
          "id": "advanced-math-201-l09-q4",
          "text": "Which expression represents 'seven less than twice a number'?",
          "skillId": "advanced-math-skill-translate",
          "options": [
            {
              "id": "a",
              "text": "7 − 2n"
            },
            {
              "id": "b",
              "text": "2n − 7"
            },
            {
              "id": "c",
              "text": "2(n − 7)"
            },
            {
              "id": "d",
              "text": "7n − 2"
            }
          ],
          "correctOptionId": "b",
          "explanation": "'Twice a number' = 2n. 'Seven less than' means subtract 7 from it: 2n − 7."
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
              2,
              3,
              4
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
          "id": "advanced-math-201-l09-a1",
          "type": "mnemonic",
          "title": "Solving 2-Step Equations",
          "content": "Undo addition/subtraction first, then undo multiplication/division. Always check by plugging back in."
        }
      ]
    },
    {
      "id": "advanced-math-201-l10",
      "title": "Data and Graphs",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "A vibrant 3D pie chart, bar graph, and line graph popping out of a digital tablet screen. Imagen 4.",
      "conceptVideoPrompt": "A time-lapse of a colorful bar graph growing taller, transitioning into a line graph that charts a soaring rocket's trajectory. Veo 3.1.",
      "objectives": [
        "Read and interpret bar graphs, line graphs, and circle graphs",
        "Calculate mean, median, and mode of a data set",
        "Choose the most appropriate graph type for different data"
      ],
      "chunks": [
        {
          "id": "advanced-math-201-l10-c1",
          "title": "Types of Graphs",
          "content": "Graphs are amazing tools that help us make sense of different kinds of information! Let's explore three common types of graphs: bar graphs, line graphs, and circle graphs (also called pie charts). Bar graphs are fantastic for comparing different categories. For instance, if you want to find out which colors are the most popular among your friends, a bar graph can show you that clearly. Each bar represents a different color, and the taller the bar, the more people like that color!\nLine graphs are perfect for showing how things change over time. Imagine you want to track the temperature every day for a week. A line graph can help you see if it’s getting warmer or cooler as the days go by. Each point on the graph represents a day, and when you connect the points, you can see the trend!\nCircle graphs, or pie charts, are great for showing how different parts make up a whole. For example, if you want to show how you spend your day—like time for school, play, and homework—a pie chart can help you visualize those parts. Each slice of the pie represents a different activity, and together they add up to 100% of your day!\nChoosing the right type of graph is important. Use a line graph to show trends over time, a bar graph to compare different groups, and a pie chart to illustrate percentages. By picking the right graph, you can make your information clearer and easier for others to understand!"
        },
        {
          "id": "advanced-math-201-l10-c2",
          "title": "Mean, Median, and Mode",
          "content": "When we look at data, we often want to understand it better by using three important ideas: mean, median, and mode. Let's break these down!\nFirst, the mean, which is also called the average, is found by adding all the numbers together and then dividing that total by how many numbers there are. For instance, if we have the numbers 4, 7, 9, 10, and 10, we first add them up: 4 + 7 + 9 + 10 + 10 equals 40. Then, we divide 40 by 5 (since there are five numbers), which gives us a mean of 8. This tells us that, on average, our numbers are around 8.\nNext, we have the median. The median is the middle number in a list when we arrange the numbers in order from smallest to largest. In our example, if we put the numbers in order, we get 4, 7, 9, 10, and 10. The middle number here is 9, so that’s our median.\nFinally, we look at the mode, which is the number that appears the most often in our data set. In this case, the number 10 appears twice, while all the other numbers appear only once. So, the mode is 10.\nEach of these measures—mean, median, and mode—helps us tell a different story about the data we have, giving us a clearer picture of what it means. Understanding these concepts is really useful in math and in everyday life, as they help us make sense of the numbers around us!"
        },
        {
          "id": "advanced-math-201-l10-c3",
          "title": "Reading Graphs Carefully",
          "content": "When we look at graphs, it's really important to pay close attention to a few key details. First, always check the title of the graph. The title tells us what information the graph is showing. Next, look at the labels on the axes. The horizontal axis (the one that goes left to right) and the vertical axis (the one that goes up and down) both have labels that explain what each side represents. Finally, pay attention to the scale used on the graph. Sometimes, graphs can be tricky! For example, if a graph has a broken axis that doesn’t start at zero, it can make small differences look much bigger than they really are. Let’s say we have a bar graph showing test scores that range from 85 to 100. A difference of just 5 points might seem huge! But if we look at the same scores on a scale that goes from 0 to 100, we can see that the scores are actually very close together. By carefully examining the title, the labels, and the scale, we can understand the true story behind the graph and make sure we’re not misled by how the information is presented. This way, we can become better at interpreting data and making informed decisions based on what we see in graphs."
        },
        {
          "id": "advanced-math-201-l10-c4",
          "title": "Making Predictions from Data",
          "content": "Line graphs are powerful tools that help us see patterns and make predictions based on the information they show. For instance, if we look at lemonade sales over a few days and see that they were $20 on Monday, $25 on Tuesday, and $30 on Wednesday, we might think that sales could go up to around $35 on Thursday if the trend continues. This upward trend suggests that more people are buying lemonade! However, it’s very important to remember that these predictions are not always accurate; they are simply educated guesses. For example, if it rains on Thursday, fewer people might want to buy lemonade, which could lower sales. So, when we look at data and try to make predictions, we should always think about the bigger picture and any changes that could happen that might affect our predictions. Understanding the context is key to making better guesses about what might happen next."
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-201-l10-f1",
          "front": "Mean",
          "back": "The average: sum of all values ÷ number of values"
        },
        {
          "id": "advanced-math-201-l10-f2",
          "front": "Median",
          "back": "The middle value when data is arranged in order"
        },
        {
          "id": "advanced-math-201-l10-f3",
          "front": "Mode",
          "back": "The value that appears most often in a data set"
        },
        {
          "id": "advanced-math-201-l10-f4",
          "front": "When to use each graph",
          "back": "Bar = compare categories, Line = show change over time, Pie = parts of a whole"
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-201-l10-a1",
          "type": "image",
          "title": "Graph Types Poster",
          "content": "Side-by-side examples of bar, line, and circle graphs with labeled axes and titles."
        }
      ]
    },
    {
      "id": "advanced-math-201-l11",
      "title": "Probability Basics",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "A dynamic action shot of a pair of colorful dice rolling in mid-air, surrounded by floating probability fractions. Imagen 4.",
      "conceptVideoPrompt": "A slow-motion animation of a spinning prize wheel with different colored sections, stopping on a winning color with a probability fraction appearing. Veo 3.1.",
      "objectives": [
        "Express probability as a fraction between 0 and 1",
        "Calculate the probability of simple events",
        "Distinguish between theoretical and experimental probability"
      ],
      "chunks": [
        {
          "id": "advanced-math-201-l11-c1",
          "title": "The Probability Scale",
          "content": "Probability is the math of chance! It tells us how likely it is that an event will happen. We measure probability on a scale from 0 to 1. If an event has a probability of 0, it is impossible (like rolling a 7 on a standard 6-sided die). If it has a probability of 1, it is absolutely certain to happen. If it has a probability of 1/2 (or 0.5 or 50%), there is an even chance of it happening or not happening, just like flipping a coin and getting heads."
        },
        {
          "id": "advanced-math-201-l11-c2",
          "title": "Calculating Probability",
          "content": "To find the probability of a simple event, we use a fraction. The numerator (top number) is the number of 'favorable outcomes'—the results we are looking for. The denominator (bottom number) is the 'total possible outcomes'. For example, if you have a bag with 3 red marbles and 7 blue marbles, there are 10 marbles in total. The probability of pulling out a red marble is 3/10. It's that simple!"
        },
        {
          "id": "advanced-math-201-l11-c3",
          "title": "Theoretical vs. Experimental",
          "content": "There are two ways to think about probability. 'Theoretical probability' is what SHOULD happen based on math. For example, a coin has 2 sides, so the theoretical probability of getting heads is 1/2. 'Experimental probability' is what ACTUALLY happens when you run an experiment. If you flip a coin 10 times and get heads 7 times, your experimental probability is 7/10. If you flip the coin hundreds of times, the experimental probability will usually get closer and closer to the theoretical probability!"
        }
      ],
      "metadata": {
        "prompts": [
          "A bag has 3 red and 5 blue marbles. What is the probability of drawing red?",
          "You flip a coin 20 times and get 12 heads. What is the experimental probability of heads? How does it compare to the theoretical 1/2?",
          "Is it possible for an event to have a probability greater than 1? Why or why not?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "advanced-math-201-l11-ia1",
          "type": "sorting_buckets",
          "title": "Probability Scale Sort",
          "description": "Sort each event by how likely it is.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "impossible",
                "label": "Impossible (0)"
              },
              {
                "id": "unlikely",
                "label": "Unlikely (close to 0)"
              },
              {
                "id": "even",
                "label": "Even Chance (1/2)"
              },
              {
                "id": "certain",
                "label": "Certain (1)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Rolling a 7 on a standard die",
                "correctBucketId": "impossible"
              },
              {
                "id": "i2",
                "label": "Flipping a coin and getting heads",
                "correctBucketId": "even"
              },
              {
                "id": "i3",
                "label": "The sun rising tomorrow",
                "correctBucketId": "certain"
              },
              {
                "id": "i4",
                "label": "Drawing a blue marble from a bag of 1 blue and 99 red",
                "correctBucketId": "unlikely"
              }
            ]
          }
        },
        {
          "id": "advanced-math-201-l11-ia2",
          "type": "matching_pairs",
          "title": "Probability Calculations",
          "description": "Match each scenario to its correct probability.",
          "estimatedMinutes": 6,
          "difficultyLevel": "hard",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Rolling an even number on a standard die"
              },
              {
                "id": "l2",
                "label": "Drawing a red card from a standard deck"
              },
              {
                "id": "l3",
                "label": "Spinning a 4 on a spinner with sections 1–8"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "3/6 = 1/2 (even numbers: 2, 4, 6)"
              },
              {
                "id": "r2",
                "label": "26/52 = 1/2 (half the deck is red)"
              },
              {
                "id": "r3",
                "label": "1/8 (one section out of eight)"
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
          "id": "advanced-math-201-l11-a1",
          "type": "mnemonic",
          "title": "Probability Formula",
          "content": "P(event) = favorable outcomes ÷ total possible outcomes. Always between 0 (impossible) and 1 (certain)."
        }
      ]
    },
    {
      "id": "advanced-math-201-l12",
      "title": "Checkpoint: Data & Probability",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing target board with darts landing in different colored zones, representing probability and data points. Imagen 4.",
      "conceptVideoPrompt": "A rapid-fire montage of coins flipping, dice rolling, and graphs drawing themselves, ending with a bold 'Checkpoint' text. Veo 3.1.",
      "questions": [
        {
          "id": "advanced-math-201-l12-q1",
          "text": "Data set: 3, 5, 7, 7, 8. What is the mean?",
          "skillId": "advanced-math-skill-mean",
          "options": [
            {
              "id": "a",
              "text": "7"
            },
            {
              "id": "b",
              "text": "5"
            },
            {
              "id": "c",
              "text": "6"
            },
            {
              "id": "d",
              "text": "8"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Mean = (3+5+7+7+8)/5 = 30/5 = 6."
        },
        {
          "id": "advanced-math-201-l12-q2",
          "text": "Which type of graph best shows how your daily schedule breaks down into activities?",
          "skillId": "advanced-math-skill-graphs",
          "options": [
            {
              "id": "a",
              "text": "Line graph"
            },
            {
              "id": "b",
              "text": "Bar graph"
            },
            {
              "id": "c",
              "text": "Circle (pie) graph"
            },
            {
              "id": "d",
              "text": "Scatter plot"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A circle/pie graph shows parts of a whole — perfect for showing what fraction of your day goes to each activity."
        },
        {
          "id": "advanced-math-201-l12-q3",
          "text": "A bag has 4 green and 6 yellow marbles. What is the probability of drawing green?",
          "skillId": "advanced-math-skill-probability",
          "options": [
            {
              "id": "a",
              "text": "4/6"
            },
            {
              "id": "b",
              "text": "6/10"
            },
            {
              "id": "c",
              "text": "4/10 = 2/5"
            },
            {
              "id": "d",
              "text": "1/4"
            }
          ],
          "correctOptionId": "c",
          "explanation": "P(green) = favorable/total = 4/10 = 2/5. There are 4 green out of 10 total marbles."
        },
        {
          "id": "advanced-math-201-l12-q4",
          "text": "Data set: 2, 4, 4, 6, 9. What is the median?",
          "skillId": "advanced-math-skill-median",
          "options": [
            {
              "id": "a",
              "text": "5"
            },
            {
              "id": "b",
              "text": "4"
            },
            {
              "id": "c",
              "text": "6"
            },
            {
              "id": "d",
              "text": "4.5"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The data in order: 2, 4, 4, 6, 9. The middle value (3rd of 5) is 4."
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
          "id": "advanced-math-201-l12-a1",
          "type": "mnemonic",
          "title": "Mean vs Median vs Mode",
          "content": "Mean = average, Median = middle, Mode = most frequent."
        }
      ]
    },
    {
      "id": "advanced-math-201-l13",
      "title": "Budget Planning Scenario Lab",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "A top-down view of a party planning table with a calculator, colorful budget pie charts, and scattered party supplies. Imagen 4.",
      "conceptVideoPrompt": "An animated piggy bank that fills with coins, then the coins are divided into different labeled jars (Food, Decorations, Supplies) showing percentages. Veo 3.1.",
      "objectives": [
        "Apply fractions, percentages, and ratios to a budget scenario",
        "Calculate totals, discounts, and remaining amounts",
        "Make and justify budget decisions using math"
      ],
      "chunks": [
        {
          "id": "advanced-math-201-l13-c1",
          "title": "The Scenario",
          "content": "Imagine you are part of a school club that has been given a budget of $200 to organize a fun community event. Your task is to decide how to allocate this money among three important categories: food, decorations, and supplies. After discussing with your club members, everyone agrees on a plan: 50% of the budget will go towards food, 30% for decorations, and 20% for supplies. This is a great opportunity to practice budgeting and learn how to manage money effectively while planning an exciting event! By working together, you can ensure that each category gets the right amount of money to make the event successful. Remember, budgeting is not just about spending money; it’s about making smart choices that will help your event be enjoyable for everyone involved. Think about what food will be most popular, how decorations can create a festive atmosphere, and what supplies are necessary to make everything run smoothly. This experience will help you develop important skills for the future, like teamwork and financial planning, which are valuable in many areas of life."
        },
        {
          "id": "advanced-math-201-l13-c2",
          "title": "Calculating the Budget",
          "content": "Now, let’s break down the budget based on the percentages we decided on. For food, we will spend 50% of our $200 budget. To find out how much that is, we calculate 0.50 multiplied by 200, which equals $100. For decorations, we will allocate 30% of the budget, which is calculated as 0.30 times 200, resulting in $60. Lastly, for supplies, we will use 20% of the budget, calculated as 0.20 times 200, giving us $40. If we add these amounts together, we can check our work: $100 for food plus $60 for decorations plus $40 for supplies equals $200. This shows that we have successfully planned our budget!"
        },
        {
          "id": "advanced-math-201-l13-c3",
          "title": "Shopping with Discounts",
          "content": "Let’s explore how we can shop wisely for our event while keeping our budget in mind! The party supply store is currently offering an exciting sale where you can get 25% off on decorations. If the original price of the decorations is $80, we can find out how much we will pay after the discount. To do this, we multiply $80 by 0.75 (which represents the remaining 75% of the price after the discount). This calculation shows us that the sale price is $60, which fits perfectly within our budget for decorations! Now, let’s think about the food. We need to order enough pizza for 40 people, and we know that each person will eat 3 slices of pizza. Since each pizza has 8 slices, we need to figure out how many pizzas we should order. We can do this by multiplying the number of people (40) by the number of slices each person will eat (3), which gives us a total of 120 slices needed. Then, we divide that number by the number of slices in each pizza (8). This calculation tells us that we need to order 15 pizzas. Now, let’s find out how much that will cost. If each pizza costs $12, we multiply 15 pizzas by $12, which gives us a total of $180. Oh no! This amount is $80 over our food budget. It looks like we need to come up with a new plan to stay within our budget! What other food options could we consider that might be more affordable? Let's brainstorm together!"
        },
        {
          "id": "advanced-math-201-l13-c4",
          "title": "Adjusting the Plan",
          "content": "Now that we see we are spending too much money on food, let's think about some ways to change our plan so we can stay within our budget. One idea is to reduce the number of pizza slices each person gets to just 2 slices. If we do this, we will need a total of 80 slices, which means we would need to order 10 pizzas. If each pizza costs $12, then 10 pizzas would cost us $120. Unfortunately, that is still more than we want to spend.\nAnother option is to look for a cheaper pizza that costs only $8 each. If we decide to buy 15 pizzas at this price, we would again end up spending $120, which is still over our budget.\nHowever, if we combine both ideas and order 10 pizzas at $8 each, we would only spend $80. This means we would have $20 left from our food budget, which we can use to buy drinks for everyone!\nThis exercise is a great example of how math is used in real life. We need to calculate how much things cost, compare our options, and adjust our plans so we can stick to our budget. Learning to manage money wisely is an important skill that will help us in the future!"
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-201-l13-f1",
          "front": "Budget allocation",
          "back": "Dividing a total amount into categories using percentages or ratios"
        },
        {
          "id": "advanced-math-201-l13-f2",
          "front": "Discount calculation",
          "back": "Sale price = original × (1 − discount rate). 25% off $80 = $80 × 0.75 = $60"
        },
        {
          "id": "advanced-math-201-l13-f3",
          "front": "Unit rate",
          "back": "Cost per single item. $96 for 12 pizzas → $96 ÷ 12 = $8 per pizza"
        },
        {
          "id": "advanced-math-201-l13-f4",
          "front": "Budget adjustment",
          "back": "When costs exceed budget: reduce quantity, find cheaper options, or reallocate from another category"
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-201-l13-a1",
          "type": "practice",
          "title": "Budget Worksheet",
          "content": "Plan a $150 party budget: allocate percentages, calculate each category, find items with discounts, and adjust if needed."
        }
      ]
    },
    {
      "id": "advanced-math-201-l14",
      "title": "Math Investigation Studio",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "A detective's magnifying glass hovering over a complex math word problem, revealing hidden equations and percentages in glowing ink. Imagen 4.",
      "conceptVideoPrompt": "A first-person view of a digital notebook where a multi-step math problem is being solved with colorful animated ink, highlighting the steps. Veo 3.1.",
      "objectives": [
        "Connect fractions, decimals, percentages, and algebra in a single problem",
        "Explain mathematical reasoning step by step",
        "Identify which concept to apply in a multi-step scenario"
      ],
      "chunks": [
        {
          "id": "advanced-math-201-l14-c1",
          "title": "Tackling Multi-Step Problems",
          "content": "Real-world math problems rarely ask you to do just one thing. They are like puzzles that require multiple steps to solve! When you face a multi-step problem, don't panic. Use the 4-step method: 1) Read carefully to understand what is being asked. 2) Plan your attack by identifying which math tools you need (like fractions, percentages, or algebra). 3) Solve the problem one step at a time, writing down your work. 4) Check your answer to see if it makes logical sense in the real world."
        },
        {
          "id": "advanced-math-201-l14-c2",
          "title": "Connecting Math Concepts",
          "content": "Did you know that fractions, decimals, percentages, and algebra are all connected? They are just different languages for talking about the same numbers! For example, if a problem says 'half the students', you can write that as 1/2, 0.5, 50%, or even set up an algebraic equation like x/2. Being able to switch between these different 'math languages' is the secret superpower of advanced problem solvers. It lets you choose the easiest way to solve any challenge!"
        },
        {
          "id": "advanced-math-201-l14-c3",
          "title": "The Power of Checking Your Work",
          "content": "Once you've solved a multi-step problem, your job isn't quite done! The final and most important step is checking your work. Does your answer make sense in the real world? For example, if you calculated the sale price of a $50 shirt and got $60, you know something went wrong because a sale price should be lower! You can also work backward: take your final answer and plug it back into the original problem to see if everything matches up. This simple habit will catch tiny mistakes and make you a confident math master!"
        }
      ],
      "metadata": {
        "prompts": [
          "A store marks up items by 40% and then puts them on a 25% off sale. Is the final price higher or lower than the original? Show your work.",
          "Write an equation for: A number tripled, then reduced by 8, equals 22. Solve it.",
          "If you scored 18 out of 25 on a quiz, what is your score as a fraction, a decimal, and a percentage?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "advanced-math-201-l14-ia1",
          "type": "sorting_buckets",
          "title": "Choose the Right Tool",
          "description": "Sort each problem type into the best math concept to solve it.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "fraction",
                "label": "Fractions"
              },
              {
                "id": "percent",
                "label": "Percentages"
              },
              {
                "id": "algebra",
                "label": "Algebra (Equations)"
              },
              {
                "id": "ratio",
                "label": "Ratios / Proportions"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "A recipe calls for 2/3 cup — you want to make 1.5 batches",
                "correctBucketId": "fraction"
              },
              {
                "id": "i2",
                "label": "A shirt is 30% off — find the sale price",
                "correctBucketId": "percent"
              },
              {
                "id": "i3",
                "label": "Three times a number plus 5 equals 20 — find the number",
                "correctBucketId": "algebra"
              },
              {
                "id": "i4",
                "label": "A map scale says 1 inch = 25 miles — find real distance for 4 inches",
                "correctBucketId": "ratio"
              }
            ]
          }
        },
        {
          "id": "advanced-math-201-l14-ia2",
          "type": "drag_and_drop",
          "title": "Multi-Step Problem Solver",
          "description": "Order the steps to solve: A $50 item is 20% off, then 8% sales tax is added.",
          "estimatedMinutes": 6,
          "difficultyLevel": "hard",
          "data": {
            "targets": [
              {
                "id": "s1",
                "label": "Step 1"
              },
              {
                "id": "s2",
                "label": "Step 2"
              },
              {
                "id": "s3",
                "label": "Step 3"
              },
              {
                "id": "s4",
                "label": "Step 4"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Calculate discount: 20% of $50 = $10",
                "correctTargetId": "s1"
              },
              {
                "id": "d2",
                "label": "Subtract discount: $50 − $10 = $40",
                "correctTargetId": "s2"
              },
              {
                "id": "d3",
                "label": "Calculate tax: 8% of $40 = $3.20",
                "correctTargetId": "s3"
              },
              {
                "id": "d4",
                "label": "Add tax: $40 + $3.20 = $43.20 total",
                "correctTargetId": "s4"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-201-l14-a1",
          "type": "mnemonic",
          "title": "Problem-Solving Steps",
          "content": "Read → Identify (what concept?) → Plan (what operations?) → Solve → Check"
        }
      ]
    },
    {
      "id": "advanced-math-201-l15",
      "title": "Mastery Sprint: Advanced Math",
      "type": "quiz",
      "duration": 12,
      "lessonImagePrompt": "A golden trophy surrounded by floating math symbols (fractions, decimals, 'x', graphs) on a glowing podium. Imagen 4.",
      "conceptVideoPrompt": "An epic, fast-paced journey flying through a 3D tunnel made of all the math concepts learned, bursting into confetti at the finish line. Veo 3.1.",
      "questions": [
        {
          "id": "advanced-math-201-l15-q1",
          "text": "What is 2/3 + 1/4?",
          "skillId": "advanced-math-skill-add-unlike",
          "options": [
            {
              "id": "a",
              "text": "3/7"
            },
            {
              "id": "b",
              "text": "11/12"
            },
            {
              "id": "c",
              "text": "3/12"
            },
            {
              "id": "d",
              "text": "8/12"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Common denominator = 12. 2/3 = 8/12, 1/4 = 3/12. Sum = 11/12."
        },
        {
          "id": "advanced-math-201-l15-q2",
          "text": "Express 0.375 as a fraction in simplest form.",
          "skillId": "advanced-math-skill-decimal-to-fraction",
          "options": [
            {
              "id": "a",
              "text": "375/1000"
            },
            {
              "id": "b",
              "text": "3/8"
            },
            {
              "id": "c",
              "text": "37/100"
            },
            {
              "id": "d",
              "text": "3/75"
            }
          ],
          "correctOptionId": "b",
          "explanation": "0.375 = 375/1000. GCF = 125. 375÷125 = 3, 1000÷125 = 8. Answer: 3/8."
        },
        {
          "id": "advanced-math-201-l15-q3",
          "text": "Solve: 5x − 3 = 22",
          "skillId": "advanced-math-skill-solve-2step",
          "options": [
            {
              "id": "a",
              "text": "x = 5"
            },
            {
              "id": "b",
              "text": "x = 3.8"
            },
            {
              "id": "c",
              "text": "x = 25"
            },
            {
              "id": "d",
              "text": "x = 4"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Add 3: 5x = 25. Divide by 5: x = 5. Check: 5(5) − 3 = 25 − 3 = 22 ✓."
        },
        {
          "id": "advanced-math-201-l15-q4",
          "text": "If 3 notebooks cost $7.50, how much do 7 notebooks cost?",
          "skillId": "advanced-math-skill-proportion-mastery",
          "options": [
            {
              "id": "a",
              "text": "$15.00"
            },
            {
              "id": "b",
              "text": "$17.50"
            },
            {
              "id": "c",
              "text": "$21.00"
            },
            {
              "id": "d",
              "text": "$22.50"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Unit price = $7.50 ÷ 3 = $2.50 each. 7 × $2.50 = $17.50."
        },
        {
          "id": "advanced-math-201-l15-q5",
          "text": "Data set: 10, 12, 12, 15, 21. What is the mode?",
          "skillId": "advanced-math-skill-mode",
          "options": [
            {
              "id": "a",
              "text": "14"
            },
            {
              "id": "b",
              "text": "15"
            },
            {
              "id": "c",
              "text": "12"
            },
            {
              "id": "d",
              "text": "10"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The mode is the most frequently occurring value. 12 appears twice — more than any other value."
        },
        {
          "id": "advanced-math-201-l15-q6",
          "text": "A spinner has 3 blue, 2 red, and 5 yellow sections. What is the probability of landing on blue?",
          "skillId": "advanced-math-skill-probability-mastery",
          "options": [
            {
              "id": "a",
              "text": "3/5"
            },
            {
              "id": "b",
              "text": "3/7"
            },
            {
              "id": "c",
              "text": "3/10"
            },
            {
              "id": "d",
              "text": "1/3"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Total sections = 3+2+5 = 10. P(blue) = 3/10."
        }
      ],
      "interactiveActivities": [
        {
          "id": "advanced-math-201-l15-ia1",
          "type": "matching_pairs",
          "title": "Concept Connections",
          "description": "Match each math concept to the formula or definition.",
          "estimatedMinutes": 6,
          "difficultyLevel": "hard",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Mean"
              },
              {
                "id": "l2",
                "label": "Probability"
              },
              {
                "id": "l3",
                "label": "Percent of a number"
              },
              {
                "id": "l4",
                "label": "Solving an equation"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Sum of values ÷ count"
              },
              {
                "id": "r2",
                "label": "Favorable outcomes ÷ total outcomes"
              },
              {
                "id": "r3",
                "label": "Convert to decimal, then multiply"
              },
              {
                "id": "r4",
                "label": "Use inverse operations to isolate the variable"
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
              },
              {
                "leftId": "l4",
                "rightId": "r4"
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "mastery_check",
        "questionsPerCheck": 6,
        "totalQuestions": 6,
        "timeLimitMinutes": 12,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 6,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3,
              4
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 3,
          "hard": 2
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "advanced-math-201-l15-a1",
          "type": "mnemonic",
          "title": "Formula Quick Reference",
          "content": "Mean = sum/count | P = favorable/total | Percent of n = (p/100)×n | Balance rule: same operation both sides"
        }
      ]
    }
  ]
};
