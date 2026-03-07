import type { LearningModule } from "@/lib/modules/types";

export const basic_math_101_Module: LearningModule = {
  "id": "basic-math-101",
  "title": "Basic Math Foundations",
  "description": "Learn number sense, counting, addition, subtraction, and early problem solving.",
  "subject": "Math",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Read and write whole numbers using place value up to thousands",
    "Add and subtract multi-digit numbers with regrouping",
    "Solve one-step and two-step word problems involving addition and subtraction",
    "Estimate sums and differences using rounding",
    "Apply measurement concepts to everyday quantities"
  ],
  "lessons": [
    {
      "id": "basic-math-101-l01",
      "title": "Place Value and Number Sense",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Identify the value of each digit in a number up to 9,999",
        "Compare and order whole numbers using place value"
      ],
      "lessonImagePrompt": "A vibrant, engaging 3D illustration of a glowing place value chart with colorful base-ten blocks (ones, tens, hundreds, thousands) floating playfully in a magical math classroom.",
      "conceptVideoPrompt": "A dynamic, colorful 3D animation showing a single glowing cube multiplying into a rod of 10, then a flat square of 100, and finally a large cube of 1000, with clear, bold numbers appearing to show their values.",
      "chunks": [
        {
          "id": "basic-math-101-l01-c1",
          "title": "What Is Place Value?",
          "kind": "intro",
          "content": "In the world of mathematics, every digit in a number has a unique value that depends on its position within that number. Let's take the number 3,572 as an example. Here, the digit 3 is found in the thousands place, which means it represents 3,000. This is a big number! Next, we have the digit 5, which is located in the hundreds place, and it represents 500. Understanding where each digit is placed helps us know how much it really counts. This concept of place value is super important because it is the foundation for all arithmetic operations, like addition, subtraction, multiplication, and division. When we grasp the idea of place value, we become much better at working with numbers and performing calculations accurately. So, let's dive deeper into this fascinating topic and explore how place value helps us in our everyday math adventures!"
        },
        {
          "id": "basic-math-101-l01-c2",
          "title": "Ones, Tens, Hundreds, Thousands",
          "kind": "concept",
          "content": "When we look at numbers, we can see that they are made up of different parts called place values. As we move to the left in a number, each place value gets ten times bigger than the one before it. For example, in the number 4,206, we can identify each digit's place value: the digit 4 is in the thousands place, which means it stands for 4 thousands, or 4,000. The digit 2 is in the hundreds place, meaning it represents 2 hundreds, or 200. The digit 0 is in the tens place, which means it represents 0 tens, and finally, the digit 6 is in the ones place, representing 6 ones. When we put all of these together in what we call expanded form, we write it like this: 4,000 + 200 + 0 + 6. Understanding place values is really important because it helps us see how numbers are built and how they connect to each other in math. This knowledge will be useful as we learn more about numbers and how to work with them in different ways."
        },
        {
          "id": "basic-math-101-l01-c3",
          "title": "Comparing Numbers",
          "kind": "example",
          "content": "When we want to compare two numbers, we start by looking at the largest place value first. For example, let's compare the numbers 2,481 and 2,519. We begin with the thousands place, which tells us how many groups of one thousand are in each number. In both numbers, we see that there are 2 in the thousands place, so they are equal in that part. Next, we move to the hundreds place to see if there is a difference. In 2,481, we have 4 in the hundreds place, while in 2,519, we have 5. Since 4 is less than 5, we can conclude that 2,481 is less than 2,519. This method of comparing numbers from left to right, stopping at the first difference, is a helpful strategy. It allows us to easily determine which number is greater or smaller, making it easier to understand and work with numbers in math. Remember, always start from the left and move to the right! This way, you can confidently compare any two numbers you encounter in your math journey."
        },
        {
          "id": "basic-math-101-l01-c4",
          "title": "Try It Yourself",
          "kind": "practice",
          "content": "Now it's your turn to practice your math skills! Let's start by writing the number 7,035 in expanded form. To do this, think about the value of each digit in the number. You can break it down like this: 7,000 + 0 + 30 + 5. This helps you see how each part contributes to the whole number. After you’ve done that, let’s move on to comparing two numbers: 6,892 and 6,928. Which one do you think is greater? To find the answer, look at each digit starting from the left, beginning with the thousands place. This exercise will help you strengthen your understanding of place value and how to compare numbers effectively. Have fun with it!"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-101-l01-f1",
          "front": "What does 'place value' mean?",
          "back": "The value of a digit based on its position in a number. For example, the 5 in 583 means 500."
        },
        {
          "id": "basic-math-101-l01-f2",
          "front": "What is expanded form?",
          "back": "Writing a number as the sum of each digit's value. Example: 4,306 = 4,000 + 300 + 0 + 6."
        },
        {
          "id": "basic-math-101-l01-f3",
          "front": "How do you compare two four-digit numbers?",
          "back": "Compare digits from left to right. The first place where the digits differ tells you which number is larger."
        },
        {
          "id": "basic-math-101-l01-f4",
          "front": "What is the value of the 8 in 3,821?",
          "back": "800, because the 8 is in the hundreds place."
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-101-l01-a1",
          "type": "image",
          "title": "Place Value Chart",
          "content": "A chart showing ones, tens, hundreds, and thousands columns with base-ten blocks illustrating 3,572."
        },
        {
          "id": "basic-math-101-l01-a2",
          "type": "animation",
          "title": "Building Numbers",
          "content": "Animation showing how base-ten blocks combine: 10 ones become 1 ten rod, 10 tens become 1 hundred flat, 10 hundreds become 1 thousand cube."
        }
      ]
    },
    {
      "id": "basic-math-101-l02",
      "title": "Addition Strategies",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Add multi-digit numbers using the standard algorithm",
        "Use mental math strategies like making tens and breaking apart numbers"
      ],
      "lessonImagePrompt": "A fun, colorful illustration of two friendly robots stacking glowing numbered blocks together to form a larger tower, symbolizing addition.",
      "conceptVideoPrompt": "A bright, engaging 2D animation showing the number 8 and 7. The 7 splits into 2 and 5. The 2 flies over to the 8 to make a glowing 10, and the 5 joins it to make 15, with cheerful sound effects.",
      "interactiveActivities": [
        {
          "id": "basic-math-101-l02-ia1",
          "type": "sorting_buckets",
          "title": "Sort the Addition Strategy",
          "description": "Classify each addition technique into the correct strategy category.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "mental",
                "label": "Mental Math"
              },
              {
                "id": "written",
                "label": "Written Algorithm"
              },
              {
                "id": "estimation",
                "label": "Estimation"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Break 47 + 36 into (47 + 30) + 6",
                "correctBucketId": "mental"
              },
              {
                "id": "i2",
                "label": "Line up digits by place value and carry",
                "correctBucketId": "written"
              },
              {
                "id": "i3",
                "label": "Round 198 + 305 to 200 + 300 = 500",
                "correctBucketId": "estimation"
              },
              {
                "id": "i4",
                "label": "Make a ten: 8 + 7 = 8 + 2 + 5 = 15",
                "correctBucketId": "mental"
              },
              {
                "id": "i5",
                "label": "Add columns right to left, regrouping when sum ≥ 10",
                "correctBucketId": "written"
              },
              {
                "id": "i6",
                "label": "Round both numbers to the nearest hundred first",
                "correctBucketId": "estimation"
              }
            ]
          }
        }
      ],
      "chunks": [
        {
          "id": "basic-math-101-l02-c1",
          "title": "Mental Math: Making Tens",
          "kind": "concept",
          "content": "When you want to add numbers quickly in your head, you can use a clever strategy called 'making tens.' This method helps you to simplify addition and makes it much easier! For instance, if you need to add 8 and 7, you can take 2 from the 7 to create a 10. Here’s how it works: first, you calculate 8 plus 2, which gives you 10. Then, you add the leftover 5 from the 7 to the 10. So, 10 plus 5 equals 15! This 'make a ten' strategy is super helpful and can be used with any pair of single-digit numbers. By using this technique, you can become faster and more confident in your addition skills, making math fun and exciting! Remember, practicing this strategy will help you become a math whiz!"
        },
        {
          "id": "basic-math-101-l02-c2",
          "title": "Breaking Apart Numbers",
          "kind": "concept",
          "content": "For the addition problem 47 + 36, you can simplify the process by breaking the numbers apart based on their place values. Start by adding the tens: 40 (from 47) and 30 (from 36) to get 70. Next, add the ones: 7 (from 47) and 6 (from 36) to get 13. Finally, combine these two results: 70 + 13 equals 83. This method of breaking apart numbers helps you manage mental math more easily and accurately."
        },
        {
          "id": "basic-math-101-l02-c3",
          "title": "Standard Algorithm",
          "kind": "example",
          "content": "Let’s look at how to use the standard algorithm for addition with the numbers 368 and 475. First, add the ones place: 8 + 5 equals 13. Write down 3 and carry over 1 to the tens place. Next, add the tens place: 6 + 7 plus the 1 we carried over equals 14. Write down 4 and carry over 1 to the hundreds place. Finally, add the hundreds place: 3 + 4 plus the 1 we carried over equals 8. So, the final answer is 843. This systematic approach helps ensure that we add correctly."
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-101-l02-a1",
          "type": "practice",
          "title": "Quick Addition Drill",
          "content": "Solve these using any strategy: 56 + 38, 247 + 185, 1,309 + 2,764. Check with the standard algorithm."
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-101-l02.png"
    },
    {
      "id": "basic-math-101-l03",
      "title": "Checkpoint: Number Operations",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A bright, encouraging checkpoint flag on a colorful math-themed race track, with floating numbers and addition symbols.",
      "conceptVideoPrompt": "A fast-paced, fun animated recap showing a quick montage of place value blocks, addition regrouping, and a giant checkmark appearing with confetti.",
      "questions": [
        {
          "id": "basic-math-101-l03-q1",
          "text": "What is the value of the digit 6 in the number 4,623?",
          "skillId": "basic-math-101-skill-place-value",
          "options": [
            {
              "id": "a",
              "text": "6"
            },
            {
              "id": "b",
              "text": "60"
            },
            {
              "id": "c",
              "text": "600"
            },
            {
              "id": "d",
              "text": "6,000"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The 6 is in the hundreds place, so its value is 6 × 100 = 600."
        },
        {
          "id": "basic-math-101-l03-q2",
          "text": "Which addition strategy is shown? 8 + 7 → (8 + 2) + 5 → 10 + 5 = 15",
          "skillId": "basic-math-101-skill-addition",
          "options": [
            {
              "id": "a",
              "text": "Breaking apart by place value"
            },
            {
              "id": "b",
              "text": "Making a ten"
            },
            {
              "id": "c",
              "text": "Rounding and estimating"
            },
            {
              "id": "d",
              "text": "Using the standard algorithm"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The solver moves 2 from 7 to 8 to 'make a ten' (10), then adds the remaining 5."
        },
        {
          "id": "basic-math-101-l03-q3",
          "text": "What is 457 + 368?",
          "skillId": "basic-math-101-skill-addition",
          "options": [
            {
              "id": "a",
              "text": "815"
            },
            {
              "id": "b",
              "text": "725"
            },
            {
              "id": "c",
              "text": "825"
            },
            {
              "id": "d",
              "text": "835"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Ones: 7+8=15 (write 5, carry 1). Tens: 5+6+1=12 (write 2, carry 1). Hundreds: 4+3+1=8. Answer: 825."
        },
        {
          "id": "basic-math-101-l03-q4",
          "text": "Which number is greatest: 3,908 or 3,890 or 3,980?",
          "skillId": "basic-math-101-skill-place-value",
          "options": [
            {
              "id": "a",
              "text": "3,908"
            },
            {
              "id": "b",
              "text": "3,890"
            },
            {
              "id": "c",
              "text": "3,980"
            },
            {
              "id": "d",
              "text": "They are all equal"
            }
          ],
          "correctOptionId": "c",
          "explanation": "All start with 3,9__. Comparing hundreds: 3,980 has 9 in the hundreds place (980 > 908 > 890)."
        }
      ],
      "interactiveActivities": [
        {
          "id": "basic-math-101-l03-ia1",
          "type": "matching_pairs",
          "title": "Match the Expanded Form",
          "description": "Match each number to its expanded form.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "5,307"
              },
              {
                "id": "l2",
                "label": "2,450"
              },
              {
                "id": "l3",
                "label": "8,016"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "5,000 + 300 + 7"
              },
              {
                "id": "r2",
                "label": "2,000 + 400 + 50"
              },
              {
                "id": "r3",
                "label": "8,000 + 10 + 6"
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
          "id": "basic-math-101-l03-a1",
          "type": "mnemonic",
          "title": "Addition Carry Rule",
          "content": "When the sum of a column is 10 or more, write the ones digit and carry the tens digit to the next column."
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-101-l03.png"
    },
    {
      "id": "basic-math-101-l04",
      "title": "Subtraction Strategies",
      "type": "video",
      "duration": 11,
      "objectives": [
        "Subtract multi-digit numbers with regrouping",
        "Check subtraction using addition"
      ],
      "lessonImagePrompt": "A colorful illustration of a magical jar of glowing marbles, with a few marbles floating away, symbolizing subtraction.",
      "conceptVideoPrompt": "A clear, step-by-step 3D animation showing the number 542 above 278. A glowing light moves from the tens place to the ones place, visually breaking a ten-rod into ten single cubes to demonstrate regrouping.",
      "chunks": [
        {
          "id": "basic-math-101-l04-c1",
          "title": "Subtraction as Taking Away",
          "kind": "intro",
          "content": "Subtraction is a mathematical operation that helps us find the difference between two numbers. Imagine you have a collection of 85 colorful stickers, and you decide to share 37 of them with your friends. To figure out how many stickers you still have, you would use subtraction: 85 minus 37 equals 48. This means you have 48 stickers left after sharing! Subtraction is not just about numbers; it answers important questions like 'How many do I have left?' and 'How many more do I need to reach my goal?' Learning to subtract is a valuable skill that we use in our daily lives, whether we are counting our toys, sharing snacks, or even managing our allowance. Understanding subtraction can help you make better decisions and solve problems more easily."
        },
        {
          "id": "basic-math-101-l04-c2",
          "title": "Regrouping (Borrowing)",
          "kind": "concept",
          "content": "When you encounter a subtraction problem like 542 minus 278, you may notice that in the ones column, you have to subtract 8 from 2, which isn't possible without going negative. To solve this, we need to regroup, or borrow. We take 1 ten from the 4 tens, which turns it into 3 tens, and we add 10 to the 2 ones, making it 12 ones. Now we can subtract: 12 minus 8 equals 4. Next, we look at the tens column: 3 minus 7 requires us to borrow again, so we take 1 hundred from the 5 hundreds, making it 4 hundreds, and turning the 3 tens into 13 tens. Now we can subtract: 13 minus 7 equals 6. Finally, in the hundreds column, we subtract 4 minus 2, which equals 2. Therefore, the answer is 264. This method of regrouping helps us handle more complex subtraction problems."
        },
        {
          "id": "basic-math-101-l04-c3",
          "title": "Checking with Addition",
          "kind": "example",
          "content": "It's always a good idea to check your work after performing subtraction. For example, if you calculated that 542 minus 278 equals 264, you can verify this by adding the two numbers back together. So, you would add 264 and 278. Start with the ones: 4 plus 8 equals 12, so you write down 2 and carry over 1. Next, add the tens: 6 plus 7 plus the 1 we carried over equals 14, so write down 4 and carry over 1 again. Finally, add the hundreds: 2 plus 2 plus the 1 carried over equals 5. When you add these together, you should get 542, confirming that your subtraction was correct!"
        },
        {
          "id": "basic-math-101-l04-c4",
          "title": "Counting Up Strategy",
          "kind": "concept",
          "content": "Another useful strategy for subtraction is called the counting up strategy. For example, if you want to find out what 500 minus 287 is, you can count up from 287 to 500. Start by figuring out how much you need to add to get to the next hundred: from 287 to 300 is 13. Then, count from 300 to 500, which is 200. Now, add those two amounts together: 13 plus 200 equals 213. This method can be especially helpful when the larger number is a round number, making the subtraction process easier."
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-101-l04-f1",
          "front": "What is regrouping in subtraction?",
          "back": "Borrowing 1 from the next higher place value. E.g., 1 ten becomes 10 ones when you need more ones to subtract."
        },
        {
          "id": "basic-math-101-l04-f2",
          "front": "How can you check a subtraction answer?",
          "back": "Add the answer (difference) to the number you subtracted. If it equals the original number, your subtraction is correct."
        },
        {
          "id": "basic-math-101-l04-f3",
          "front": "What is the 'counting up' method?",
          "back": "Instead of subtracting, count up from the smaller number to the larger one. The total you counted is the difference."
        },
        {
          "id": "basic-math-101-l04-f4",
          "front": "What is 803 − 467?",
          "back": "336. Regroup: 3−7 needs borrowing → 13−7=6. Then 9−6=3 (after borrow). Then 7−4=3. Answer: 336."
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-101-l04-a1",
          "type": "image",
          "title": "Regrouping Step-by-Step",
          "content": "Visual diagram showing the borrowing process for 542 − 278 with crossed-out digits and regrouped values."
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-101-l04.png"
    },
    {
      "id": "basic-math-101-l05",
      "title": "Math Word Problem Methods",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Identify the operation needed in a word problem",
        "Solve one-step addition and subtraction word problems"
      ],
      "lessonImagePrompt": "A cartoon detective with a magnifying glass looking at a giant math word problem, highlighting clue words like 'total' and 'left' in bright neon colors.",
      "conceptVideoPrompt": "An animated sequence showing a word problem turning into a puzzle. The words 'altogether' and 'fewer' glow, transforming into a plus and minus sign respectively, guiding the viewer to the solution.",
      "interactiveActivities": [
        {
          "id": "basic-math-101-l05-ia1",
          "type": "sorting_buckets",
          "title": "Addition or Subtraction?",
          "description": "Read each word problem clue and sort it into the correct operation.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "add",
                "label": "Addition (combining)"
              },
              {
                "id": "sub",
                "label": "Subtraction (separating)"
              },
              {
                "id": "compare",
                "label": "Subtraction (comparing)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Sam has 45 cards and buys 23 more. How many total?",
                "correctBucketId": "add"
              },
              {
                "id": "i2",
                "label": "A jar has 80 marbles. 35 are removed. How many remain?",
                "correctBucketId": "sub"
              },
              {
                "id": "i3",
                "label": "Team A scored 92 points. Team B scored 78. How many more did A score?",
                "correctBucketId": "compare"
              },
              {
                "id": "i4",
                "label": "125 students in Grade 3 and 148 in Grade 4. How many altogether?",
                "correctBucketId": "add"
              },
              {
                "id": "i5",
                "label": "A baker made 360 cookies and sold 215. How many are left?",
                "correctBucketId": "sub"
              },
              {
                "id": "i6",
                "label": "Maya read 47 pages. Kai read 62. How many fewer did Maya read?",
                "correctBucketId": "compare"
              }
            ]
          }
        }
      ],
      "chunks": [
        {
          "id": "basic-math-101-l05-c1",
          "title": "Clue Words for Operations",
          "kind": "concept",
          "content": "When solving word problems in math, it's important to look for clue words that indicate which operation to use. For addition, you might see words like 'in all', 'altogether', 'total', 'combined', or 'both'. These words suggest that you need to add the numbers together. On the other hand, for subtraction, look for words like 'left', 'remain', 'difference', 'fewer', or 'how many more'. These clues help guide you in determining whether to add or subtract. Always read the problem carefully, as the story will often tell you exactly what you need to do!"
        },
        {
          "id": "basic-math-101-l05-c2",
          "title": "The Four-Step Method",
          "kind": "concept",
          "content": "To solve a math word problem effectively, we can use a helpful four-step method. First, read the problem carefully and underline the question so you know what you need to find out. Next, identify the numbers in the problem and think about what they represent in the context of the question. After that, decide which mathematical operation (like addition, subtraction, multiplication, or division) you will need to use to solve the problem. Finally, solve the problem and check your answer to see if it makes sense in relation to the question asked. This method will help you approach word problems with confidence!"
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-101-l05-a1",
          "type": "animation",
          "title": "Word Problem Walkthrough",
          "content": "Animated example showing the four-step method applied to: 'A library has 1,250 books. 389 are checked out. How many are on the shelves?'"
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-101-l05.png"
    },
    {
      "id": "basic-math-101-l06",
      "title": "Checkpoint: Problem Solving",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A colorful treasure map with a path connecting different math word problem islands, leading to a glowing treasure chest.",
      "conceptVideoPrompt": "A fun, quick animation of a student character successfully solving a puzzle by matching a word problem to a subtraction symbol, triggering a celebratory burst of stars.",
      "questions": [
        {
          "id": "basic-math-101-l06-q1",
          "text": "A store had 524 apples. 287 were sold. How many are left?",
          "skillId": "basic-math-101-skill-subtraction",
          "options": [
            {
              "id": "a",
              "text": "237"
            },
            {
              "id": "b",
              "text": "247"
            },
            {
              "id": "c",
              "text": "337"
            },
            {
              "id": "d",
              "text": "811"
            }
          ],
          "correctOptionId": "a",
          "explanation": "524 − 287 = 237. Ones: regroup, 14−7=7. Tens: 1−8 regroup, 11−8=3. Hundreds: 4−2=2. Answer: 237."
        },
        {
          "id": "basic-math-101-l06-q2",
          "text": "Which clue word signals subtraction?",
          "skillId": "basic-math-101-skill-word-problems",
          "options": [
            {
              "id": "a",
              "text": "altogether"
            },
            {
              "id": "b",
              "text": "combined"
            },
            {
              "id": "c",
              "text": "remain"
            },
            {
              "id": "d",
              "text": "total"
            }
          ],
          "correctOptionId": "c",
          "explanation": "'Remain' indicates something was taken away, which is subtraction. The other words signal addition."
        },
        {
          "id": "basic-math-101-l06-q3",
          "text": "463 + ___ = 800. What is the missing number?",
          "skillId": "basic-math-101-skill-addition",
          "options": [
            {
              "id": "a",
              "text": "347"
            },
            {
              "id": "b",
              "text": "337"
            },
            {
              "id": "c",
              "text": "437"
            },
            {
              "id": "d",
              "text": "363"
            }
          ],
          "correctOptionId": "b",
          "explanation": "800 − 463 = 337. You can verify: 463 + 337 = 800."
        },
        {
          "id": "basic-math-101-l06-q4",
          "text": "Class A has 28 students. Class B has 35 students. How many more students does Class B have?",
          "skillId": "basic-math-101-skill-word-problems",
          "options": [
            {
              "id": "a",
              "text": "63"
            },
            {
              "id": "b",
              "text": "7"
            },
            {
              "id": "c",
              "text": "17"
            },
            {
              "id": "d",
              "text": "53"
            }
          ],
          "correctOptionId": "b",
          "explanation": "This is a comparison problem: 35 − 28 = 7. Class B has 7 more students."
        }
      ],
      "interactiveActivities": [
        {
          "id": "basic-math-101-l06-ia1",
          "type": "matching_pairs",
          "title": "Match Problem to Operation",
          "description": "Match each word problem to the correct number sentence.",
          "estimatedMinutes": 5,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I had 150 stickers and got 75 more"
              },
              {
                "id": "l2",
                "label": "340 birds were on a lake, 128 flew away"
              },
              {
                "id": "l3",
                "label": "Tom has 92 cards, Mia has 67, how many more does Tom have?"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "150 + 75 = 225"
              },
              {
                "id": "r2",
                "label": "340 − 128 = 212"
              },
              {
                "id": "r3",
                "label": "92 − 67 = 25"
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
          "id": "basic-math-101-l06-a1",
          "type": "mnemonic",
          "title": "CUBES Method",
          "content": "Circle the numbers, Underline the question, Box key words, Evaluate the operation, Solve and check."
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-101-l06.png"
    },
    {
      "id": "basic-math-101-l07",
      "title": "Measurement and Estimation",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Round numbers to the nearest ten and hundred",
        "Estimate sums and differences using rounding"
      ],
      "lessonImagePrompt": "A whimsical illustration of a giant ruler and a magnifying glass examining a bouncy, rounded number balloon.",
      "conceptVideoPrompt": "A playful animation showing a number line on a roller coaster track. A cart with the number 73 rolls down the hill backward to 70, while a cart with 87 powers forward to 90.",
      "chunks": [
        {
          "id": "basic-math-101-l07-c1",
          "title": "Why Estimate?",
          "kind": "intro",
          "content": "Estimation is a really useful skill that helps us find an approximate answer quickly, without having to do all the detailed calculations. Imagine you want to find out how much 489 plus 312 is. Instead of adding those exact numbers right away, you can round them to make it simpler. For instance, you can round 489 up to 500 and 312 down to 300. When you add these rounded numbers together, you get 800. This is very close to the actual answer, which is 801! Estimation not only saves time but also acts as a helpful way to check if your final answer makes sense. It’s like giving your math a quick check-up to ensure you’re heading in the right direction! So, the next time you’re faced with a math problem, remember that estimating can make things easier and faster!"
        },
        {
          "id": "basic-math-101-l07-c2",
          "title": "Rounding Rules",
          "kind": "concept",
          "content": "Rounding numbers is a very useful skill that helps us make math easier and faster! When we round to the nearest ten, we need to pay attention to the ones digit, which is the last digit of the number. If the ones digit is 5 or greater, we round up to the next ten. For example, if we have the number 73, we look at the 3 in the ones place. Since 3 is less than 5, we round down to 70. On the other hand, if we have the number 87, we see that the ones digit is 7, which is greater than 5, so we round up to 90. Now, when we want to round to the nearest hundred, we look at the tens digit instead. For example, the number 342 has a 4 in the tens place, so we round down to 300. But for the number 678, the 7 in the tens place means we round up to 700. Practicing these rounding rules will help you solve math problems more easily and quickly!"
        },
        {
          "id": "basic-math-101-l07-c3",
          "title": "Estimating Sums",
          "kind": "example",
          "content": "Let’s practice estimating sums! For the problem 639 plus 274, we can round each number to make it simpler. Round 639 down to 600 and 274 up to 300. Now, when we add these rounded numbers together, we get an estimated sum of 900. The exact answer is 913, which shows that our estimate was very close! This technique of estimating helps us quickly check if our exact answer is reasonable and gives us a good idea of what to expect."
        },
        {
          "id": "basic-math-101-l07-c4",
          "title": "Measurement Connection",
          "kind": "concept",
          "content": "Estimation is a very important skill when it comes to measurement! Let's think about a simple example: imagine you have a table that is about 2 meters long, and you also have a room that is about 5 meters wide. If you want to figure out how much space the table takes up in the room, you can estimate that the table occupies about 2 out of the 5 meters of the room's width. This means the table takes up roughly 2/5 of the room's space! By rounding measurements like this, you make it much easier to do mental math. It also helps you visualize how much space different objects take up in real life. Being able to estimate measurements is not just useful in math class; it can help you in everyday situations, like when you're trying to fit furniture in a room or planning a project. So, practicing estimation can make you more confident and skilled in handling measurements in your daily life!"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-101-l07-f1",
          "front": "How do you round 456 to the nearest hundred?",
          "back": "Look at the tens digit (5). Since 5 ≥ 5, round up to 500."
        },
        {
          "id": "basic-math-101-l07-f2",
          "front": "What is front-end estimation?",
          "back": "Add only the leading (leftmost) digits. For 483 + 219: 400 + 200 = 600. Quick but less precise than rounding."
        },
        {
          "id": "basic-math-101-l07-f3",
          "front": "Why is estimation useful?",
          "back": "To quickly check if an exact answer is reasonable, make decisions about approximate quantities, and simplify mental math."
        },
        {
          "id": "basic-math-101-l07-f4",
          "front": "Round 2,748 to the nearest thousand.",
          "back": "Look at the hundreds digit (7). Since 7 ≥ 5, round up to 3,000."
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-101-l07-a1",
          "type": "practice",
          "title": "Estimation Challenge",
          "content": "Estimate then calculate: 387 + 445, 903 − 467, 1,250 + 3,870. Compare your estimate to the exact answer each time."
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-101-l07.png"
    },
    {
      "id": "basic-math-101-l08",
      "title": "Math Journal Reflection",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Reflect on personal strengths and weaknesses in arithmetic",
        "Set a specific improvement goal"
      ],
      "lessonImagePrompt": "A cozy, inviting illustration of an open glowing journal with floating math symbols, a pencil, and a lightbulb representing new ideas.",
      "conceptVideoPrompt": "A soothing, inspiring animation of a student looking at a glowing math journal. Mistakes turn into stepping stones that build a bridge to a shiny golden star.",
      "interactiveActivities": [
        {
          "id": "basic-math-101-l08-ia1",
          "type": "matching_pairs",
          "title": "Error Pattern to Fix",
          "description": "Match each common math mistake to the best correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Forgetting to carry when adding"
              },
              {
                "id": "l2",
                "label": "Subtracting the smaller digit from the larger in any column"
              },
              {
                "id": "l3",
                "label": "Getting the wrong operation in a word problem"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Write carried digits above the next column every time"
              },
              {
                "id": "r2",
                "label": "Always subtract top minus bottom; regroup when top digit is smaller"
              },
              {
                "id": "r3",
                "label": "Underline the question and circle clue words before choosing an operation"
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
      "chunks": [
        {
          "id": "basic-math-101-l08-c1",
          "title": "Reflect on Your Progress",
          "kind": "recap",
          "content": "Let's take a moment to think about all the exciting math concepts you've explored so far! Consider topics such as place value, where we learn how to understand the value of each digit in a number. Think about the different strategies you've used for addition, like counting on your fingers or using number lines. Remember how we tackled subtraction with regrouping, which helps us when we need to borrow from the next column? Don't forget about solving word problems, which are like little puzzles that help us apply math to real-life situations. And let's not overlook estimation, which is a handy skill for making quick guesses about numbers. Now, ask yourself: Which of these topics felt the easiest for you? Was there a particular concept that you found more challenging? Writing down your reflections can really help you focus on the areas where you might want to practice more and also remind you of what you've already mastered. This way, you can continue to grow and improve in your math journey!"
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-101-l08-a1",
          "type": "mnemonic",
          "title": "Growth Mindset Prompt",
          "content": "Mistakes are proof you are trying. Identify one error pattern and commit to one fix this week."
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-101-l08.png"
    },
    {
      "id": "basic-math-101-l09",
      "title": "Review: Core Math Skills",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A vibrant, futuristic control room with screens displaying various math puzzles, addition, subtraction, and rounding challenges.",
      "conceptVideoPrompt": "A high-energy, fast-paced animated montage reviewing place value, addition, subtraction, and estimation, ending with a 'Ready for Mastery!' glowing sign.",
      "questions": [
        {
          "id": "basic-math-101-l09-q1",
          "text": "Estimate 678 + 315 by rounding to the nearest hundred.",
          "skillId": "basic-math-101-skill-estimation",
          "options": [
            {
              "id": "a",
              "text": "About 900"
            },
            {
              "id": "b",
              "text": "About 1,000"
            },
            {
              "id": "c",
              "text": "About 1,100"
            },
            {
              "id": "d",
              "text": "About 800"
            }
          ],
          "correctOptionId": "b",
          "explanation": "678 rounds to 700, 315 rounds to 300. 700 + 300 = 1,000."
        },
        {
          "id": "basic-math-101-l09-q2",
          "text": "What is 1,003 − 567?",
          "skillId": "basic-math-101-skill-subtraction",
          "options": [
            {
              "id": "a",
              "text": "436"
            },
            {
              "id": "b",
              "text": "446"
            },
            {
              "id": "c",
              "text": "536"
            },
            {
              "id": "d",
              "text": "546"
            }
          ],
          "correctOptionId": "a",
          "explanation": "1,003 − 567: requires regrouping across multiple columns. Ones: 13−7=6, Tens: 9−6=3, Hundreds: 9−5=4. Answer: 436."
        },
        {
          "id": "basic-math-101-l09-q3",
          "text": "A farmer has 425 chickens and 378 ducks. How many birds in total?",
          "skillId": "basic-math-101-skill-word-problems",
          "options": [
            {
              "id": "a",
              "text": "47"
            },
            {
              "id": "b",
              "text": "703"
            },
            {
              "id": "c",
              "text": "803"
            },
            {
              "id": "d",
              "text": "793"
            }
          ],
          "correctOptionId": "c",
          "explanation": "'In total' means addition. 425 + 378: ones 5+8=13 (carry 1), tens 2+7+1=10 (carry 1), hundreds 4+3+1=8. Answer: 803."
        },
        {
          "id": "basic-math-101-l09-q4",
          "text": "What digit is in the tens place of 9,184?",
          "skillId": "basic-math-101-skill-place-value",
          "options": [
            {
              "id": "a",
              "text": "9"
            },
            {
              "id": "b",
              "text": "1"
            },
            {
              "id": "c",
              "text": "8"
            },
            {
              "id": "d",
              "text": "4"
            }
          ],
          "correctOptionId": "c",
          "explanation": "In 9,184: 4 is ones, 8 is tens, 1 is hundreds, 9 is thousands. The tens digit is 8."
        }
      ],
      "interactiveActivities": [
        {
          "id": "basic-math-101-l09-ia1",
          "type": "drag_and_drop",
          "title": "Order the Steps",
          "description": "Put these word problem solving steps in the correct order.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
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
                "label": "Solve using the chosen operation",
                "correctTargetId": "step3"
              },
              {
                "id": "d2",
                "label": "Read the problem and find the question",
                "correctTargetId": "step1"
              },
              {
                "id": "d3",
                "label": "Check: does the answer make sense?",
                "correctTargetId": "step4"
              },
              {
                "id": "d4",
                "label": "Identify numbers and choose the operation",
                "correctTargetId": "step2"
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
          "id": "basic-math-101-l09-a1",
          "type": "mnemonic",
          "title": "Rounding Rhyme",
          "content": "Five or more, let it soar (round up). Four or less, let it rest (round down)."
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-101-l09.png"
    },
    {
      "id": "basic-math-101-l10",
      "title": "Mastery: Basic Math",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A grand, glowing golden trophy surrounded by floating numbers, plus signs, and minus signs in a celebratory, colorful environment.",
      "conceptVideoPrompt": "An epic, celebratory animation showing a rocket ship launching into space, powered by solving math equations, reaching a planet made of numbers.",
      "questions": [
        {
          "id": "basic-math-101-l10-q1",
          "text": "Write 6,205 in expanded form:",
          "skillId": "basic-math-101-skill-place-value",
          "options": [
            {
              "id": "a",
              "text": "6,000 + 200 + 50"
            },
            {
              "id": "b",
              "text": "6,000 + 200 + 5"
            },
            {
              "id": "c",
              "text": "6,000 + 20 + 5"
            },
            {
              "id": "d",
              "text": "600 + 200 + 5"
            }
          ],
          "correctOptionId": "b",
          "explanation": "6,205 = 6 thousands + 2 hundreds + 0 tens + 5 ones = 6,000 + 200 + 0 + 5 = 6,000 + 200 + 5."
        },
        {
          "id": "basic-math-101-l10-q2",
          "text": "A school collected 1,456 cans in Week 1 and 1,389 in Week 2. What is the total?",
          "skillId": "basic-math-101-skill-addition",
          "options": [
            {
              "id": "a",
              "text": "2,845"
            },
            {
              "id": "b",
              "text": "2,745"
            },
            {
              "id": "c",
              "text": "2,835"
            },
            {
              "id": "d",
              "text": "67"
            }
          ],
          "correctOptionId": "a",
          "explanation": "1,456 + 1,389 = 2,845. This is an addition word problem (total of two amounts)."
        },
        {
          "id": "basic-math-101-l10-q3",
          "text": "Which is the best estimate for 892 − 417?",
          "skillId": "basic-math-101-skill-estimation",
          "options": [
            {
              "id": "a",
              "text": "About 300"
            },
            {
              "id": "b",
              "text": "About 400"
            },
            {
              "id": "c",
              "text": "About 500"
            },
            {
              "id": "d",
              "text": "About 600"
            }
          ],
          "correctOptionId": "c",
          "explanation": "900 − 400 = 500. The exact answer is 475, so 500 is a good estimate."
        },
        {
          "id": "basic-math-101-l10-q4",
          "text": "What is 700 − 258?",
          "skillId": "basic-math-101-skill-subtraction",
          "options": [
            {
              "id": "a",
              "text": "552"
            },
            {
              "id": "b",
              "text": "442"
            },
            {
              "id": "c",
              "text": "542"
            },
            {
              "id": "d",
              "text": "458"
            }
          ],
          "correctOptionId": "b",
          "explanation": "700 − 258: regroup from hundreds. 10−8=2 (ones), 9−5=4 (tens), 6−2=4 (hundreds). Answer: 442."
        }
      ],
      "interactiveActivities": [
        {
          "id": "basic-math-101-l10-ia1",
          "type": "sorting_buckets",
          "title": "Round These Numbers",
          "description": "Sort each number into the correct rounded value (nearest hundred).",
          "estimatedMinutes": 5,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "r400",
                "label": "Rounds to 400"
              },
              {
                "id": "r500",
                "label": "Rounds to 500"
              },
              {
                "id": "r600",
                "label": "Rounds to 600"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "438",
                "correctBucketId": "r400"
              },
              {
                "id": "i2",
                "label": "472",
                "correctBucketId": "r500"
              },
              {
                "id": "i3",
                "label": "551",
                "correctBucketId": "r600"
              },
              {
                "id": "i4",
                "label": "449",
                "correctBucketId": "r400"
              },
              {
                "id": "i5",
                "label": "550",
                "correctBucketId": "r600"
              },
              {
                "id": "i6",
                "label": "503",
                "correctBucketId": "r500"
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
          "id": "basic-math-101-l10-a1",
          "type": "mnemonic",
          "title": "Check It Twice",
          "content": "After solving a subtraction problem, add the answer to the smaller number. If you get the original number, you are correct."
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-101-l10.png"
    },
    {
      "id": "basic-math-101-l11",
      "title": "Applied Math Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Solve two-step word problems",
        "Combine addition and subtraction in context"
      ],
      "lessonImagePrompt": "A bustling, colorful cartoon bakery with trays of muffins and a cash register, illustrating a real-world math scenario.",
      "conceptVideoPrompt": "A fun, step-by-step animation of a bakery scenario. First, a tray of muffins is added to another tray (Step 1). Then, a customer buys some, and they disappear (Step 2), revealing the final answer.",
      "interactiveActivities": [
        {
          "id": "basic-math-101-l11-ia1",
          "type": "sorting_buckets",
          "title": "Two-Step Problem Planner",
          "description": "For each scenario step, classify whether you should add or subtract.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "add-first",
                "label": "Step 1: Add"
              },
              {
                "id": "sub-first",
                "label": "Step 1: Subtract"
              },
              {
                "id": "add-second",
                "label": "Step 2: Add"
              },
              {
                "id": "sub-second",
                "label": "Step 2: Subtract"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "A shop had 300 toys, received 150 more → find total inventory",
                "correctBucketId": "add-first"
              },
              {
                "id": "i2",
                "label": "Then sold 210 toys → find remaining inventory",
                "correctBucketId": "sub-second"
              },
              {
                "id": "i3",
                "label": "Class had 32 students, 8 were absent → find present count",
                "correctBucketId": "sub-first"
              },
              {
                "id": "i4",
                "label": "Then 3 absent students returned → find updated present count",
                "correctBucketId": "add-second"
              }
            ]
          }
        }
      ],
      "chunks": [
        {
          "id": "basic-math-101-l11-c1",
          "title": "Two-Step Problems",
          "kind": "concept",
          "content": "In math, some problems are a bit more challenging because they require you to use two different operations to find the answer. Let's look at a fun example involving a bakery! Imagine a bakery that bakes 240 delicious muffins in the morning and then bakes another 180 muffins in the afternoon. By the time the bakery closes for the day, they have sold 315 muffins. Now, we want to find out how many muffins are left at the end of the day. To solve this problem, we can follow these two steps: First, we need to calculate the total number of muffins that were baked. We do this by adding the morning muffins to the afternoon muffins: 240 plus 180 equals 420 muffins in total. Next, we need to figure out how many muffins are left after the sales. We do this by subtracting the number of muffins sold from the total baked: 420 minus 315 equals 105 muffins remaining. This two-step approach is a great way to help us solve more complex problems in math! By breaking it down into smaller steps, we can understand and find the answers more easily."
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-101-l11-a1",
          "type": "practice",
          "title": "Two-Step Challenge",
          "content": "Solve: A library had 1,500 books. They donated 230 and received 175 new ones. How many books does the library have now?"
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-101-l11.png"
    },
    {
      "id": "basic-math-101-l12",
      "title": "Basic Math Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A bright, encouraging 'Level Up' screen with a glowing gamepad and floating math symbols, ready for a final challenge.",
      "conceptVideoPrompt": "A dynamic animation of a character jumping over hurdles. Each hurdle represents a math problem. The character successfully clears them all and crosses a finish line.",
      "questions": [
        {
          "id": "basic-math-101-l12-q1",
          "text": "A theater has 450 seats. 287 are filled. How many seats are empty?",
          "skillId": "basic-math-101-skill-subtraction",
          "options": [
            {
              "id": "a",
              "text": "163"
            },
            {
              "id": "b",
              "text": "173"
            },
            {
              "id": "c",
              "text": "263"
            },
            {
              "id": "d",
              "text": "737"
            }
          ],
          "correctOptionId": "a",
          "explanation": "450 − 287 = 163. This is a subtraction word problem (finding what's left)."
        },
        {
          "id": "basic-math-101-l12-q2",
          "text": "Round 3,462 to the nearest thousand.",
          "skillId": "basic-math-101-skill-estimation",
          "options": [
            {
              "id": "a",
              "text": "3,000"
            },
            {
              "id": "b",
              "text": "3,500"
            },
            {
              "id": "c",
              "text": "4,000"
            },
            {
              "id": "d",
              "text": "3,400"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Look at the hundreds digit: 4 < 5, so round down to 3,000."
        },
        {
          "id": "basic-math-101-l12-q3",
          "text": "Maria saved $235 in January and $189 in February. She spent $150 on supplies. How much does she have left?",
          "skillId": "basic-math-101-skill-word-problems",
          "options": [
            {
              "id": "a",
              "text": "$274"
            },
            {
              "id": "b",
              "text": "$374"
            },
            {
              "id": "c",
              "text": "$196"
            },
            {
              "id": "d",
              "text": "$574"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Step 1: $235 + $189 = $424. Step 2: $424 − $150 = $274. This is a two-step problem."
        },
        {
          "id": "basic-math-101-l12-q4",
          "text": "In the number 7,049, which digit is in the hundreds place?",
          "skillId": "basic-math-101-skill-place-value",
          "options": [
            {
              "id": "a",
              "text": "7"
            },
            {
              "id": "b",
              "text": "0"
            },
            {
              "id": "c",
              "text": "4"
            },
            {
              "id": "d",
              "text": "9"
            }
          ],
          "correctOptionId": "b",
          "explanation": "7,049: 9=ones, 4=tens, 0=hundreds, 7=thousands. The hundreds digit is 0."
        }
      ],
      "interactiveActivities": [
        {
          "id": "basic-math-101-l12-ia1",
          "type": "matching_pairs",
          "title": "Estimate vs Exact",
          "description": "Match each problem to both its estimate and exact answer.",
          "estimatedMinutes": 6,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "289 + 413"
              },
              {
                "id": "l2",
                "label": "750 − 382"
              },
              {
                "id": "l3",
                "label": "1,295 + 705"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Exact: 702"
              },
              {
                "id": "r2",
                "label": "Exact: 368"
              },
              {
                "id": "r3",
                "label": "Exact: 2,000"
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
          "id": "basic-math-101-l12-a1",
          "type": "mnemonic",
          "title": "Two-Step Reminder",
          "content": "Read the whole problem first. Solve one step at a time. Use the result of Step 1 as input for Step 2."
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-101-l12.png"
    },
    {
      "id": "basic-math-101-l13",
      "title": "Math Scenario Lab",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Apply all arithmetic skills to a real-world scenario",
        "Justify each step with reasoning"
      ],
      "lessonImagePrompt": "A colorful illustration of a yellow school bus parked outside a museum, with a giant floating budget checklist and a piggy bank.",
      "conceptVideoPrompt": "An engaging animation showing a piggy bank filling up with coins. The coins are then divided into piles for a bus, museum tickets, and lunch, showing how a budget works.",
      "chunks": [
        {
          "id": "basic-math-101-l13-c1",
          "title": "The Field Trip Budget",
          "kind": "intro",
          "content": "Your class is getting ready for an exciting field trip! Field trips are a wonderful way to learn outside the classroom, and planning them involves some important math skills. To make sure we can go on this adventure, we need to calculate the total costs carefully. First, the bus ride will cost $385. Next, we need to think about the museum entry fee, which is $12 for each of the 28 students in our class. That means we will multiply $12 by 28 to find out how much that will be in total. Additionally, we have to consider lunch, which will cost $8 for each student as well. So, we will multiply $8 by 28 as well. Now, let’s add all these costs together and see if they fit within our budget of $1,200. By working through these calculations step by step, we can determine if we can afford this fun and educational trip! Are you ready to dive into the numbers and find out?"
        },
        {
          "id": "basic-math-101-l13-c2",
          "title": "Calculate Each Cost",
          "kind": "example",
          "content": "Let’s break down the costs for our field trip! The bus costs $385. For the museum, we need to calculate the total for all 28 students: 28 times $12 equals $336. For lunch, we do the same: 28 times $8 equals $224. We can also think of this as repeated addition: 28 times 8 can be broken down into 20 times 8 plus 8 times 8, which gives us 160 plus 64, totaling $224. Now, we can add all these costs together to find the total expense!"
        },
        {
          "id": "basic-math-101-l13-c3",
          "title": "Add the Costs",
          "kind": "example",
          "content": "Now, let’s add up all the costs we calculated. First, we add the bus cost of $385 to the museum cost of $336, which gives us $721. Next, we add the lunch cost of $224 to that total: $721 plus $224 equals $945. So, the total cost for the trip is $945. Since our budget is $1,200, we can see that $945 is less than $1,200, meaning our class can afford the trip! We will even have some money left over: $1,200 minus $945 equals $255."
        },
        {
          "id": "basic-math-101-l13-c4",
          "title": "Reflect and Extend",
          "kind": "practice",
          "content": "Now, let’s think about what happens if 4 more students decide to join the trip! We need to recalculate the costs for the museum and lunch based on 32 students instead of 28. After finding the new total cost, we will check if it still fits within our budget of $1,200. This exercise will help us practice adjusting our calculations based on changing numbers!"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-101-l13-f1",
          "front": "How do you solve a multi-part real-world problem?",
          "back": "Break it into smaller pieces. Calculate each part separately, then combine using addition or subtraction."
        },
        {
          "id": "basic-math-101-l13-f2",
          "front": "How do you check if something fits a budget?",
          "back": "Find the total cost, then compare it to the budget. If total ≤ budget, you can afford it."
        },
        {
          "id": "basic-math-101-l13-f3",
          "front": "What is a good estimation for 28 × $12?",
          "back": "Round: 30 × $12 = $360. The exact answer ($336) is a bit less since 28 < 30."
        },
        {
          "id": "basic-math-101-l13-f4",
          "front": "Why break a big problem into steps?",
          "back": "Smaller steps reduce errors, make the work clearer, and let you check each part before combining."
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-101-l13-a1",
          "type": "image",
          "title": "Budget Table",
          "content": "A table showing Item, Unit Cost, Quantity, and Total for bus, museum, and lunch with the $1,200 budget comparison."
        },
        {
          "id": "basic-math-101-l13-a2",
          "type": "practice",
          "title": "Your Own Budget",
          "content": "Plan a party for 25 friends. Decide on food ($5/person), decorations ($45), and entertainment ($80). Calculate the total cost."
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-101-l13.png"
    },
    {
      "id": "basic-math-101-l14",
      "title": "Math Coaching Clinic",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Diagnose personal error patterns",
        "Apply targeted fixes for common arithmetic mistakes"
      ],
      "lessonImagePrompt": "A friendly cartoon doctor with a stethoscope examining a math equation on a clipboard, diagnosing common math mistakes.",
      "conceptVideoPrompt": "A helpful, clear animation showing a common math mistake, like forgetting to carry a 1. A friendly animated eraser fixes the mistake, and a glowing 1 appears in the correct spot.",
      "interactiveActivities": [
        {
          "id": "basic-math-101-l14-ia1",
          "type": "matching_pairs",
          "title": "Diagnose and Fix",
          "description": "Match each student's error to the specific skill they need to practice.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Student writes 356+278=524 (forgot to carry in tens)"
              },
              {
                "id": "l2",
                "label": "Student writes 503−247=344 (subtracted smaller from larger in each column)"
              },
              {
                "id": "l3",
                "label": "Student says 'how many more' means addition"
              },
              {
                "id": "l4",
                "label": "Student rounds 745 to 800 (nearest hundred)"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Practice carrying: always write the carry digit above the next column"
              },
              {
                "id": "r2",
                "label": "Practice regrouping: borrow from the next column when top < bottom"
              },
              {
                "id": "r3",
                "label": "Review clue words: 'how many more' means find the difference (subtract)"
              },
              {
                "id": "r4",
                "label": "Review rounding: look at the digit to the RIGHT of the target place"
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
      "chunks": [
        {
          "id": "basic-math-101-l14-c1",
          "title": "Common Error Patterns",
          "kind": "recap",
          "content": "In math, it's perfectly normal to make mistakes, and everyone does at some point! Understanding where we go wrong can help us learn and improve. Here are some common errors that many students face: 1) Sometimes, we forget to carry a number over or borrow when we need to, which can lead to incorrect answers. 2) Another mistake is subtracting the smaller number from the larger one without paying attention to their positions, which can confuse the results. 3) When working on word problems, it's easy to choose the wrong operation, like adding instead of subtracting. 4) Lastly, we might misapply rounding rules, which can change the value of our answers. The first step to becoming a better mathematician is to recognize your own patterns of mistakes. By identifying these errors, you can work on them and improve your math skills over time! Remember, practice makes perfect, and every mistake is an opportunity to learn something new!"
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-101-l14-a1",
          "type": "mnemonic",
          "title": "Fix-It Loop",
          "content": "Spot the pattern → Practice the rule → Test yourself → Repeat until automatic."
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-101-l14.png"
    },
    {
      "id": "basic-math-101-l15",
      "title": "Basic Math Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A high-speed, colorful race track with a runner dashing through a finish line ribbon made of numbers and math symbols.",
      "conceptVideoPrompt": "A fast-paced, exciting animation of a timer ticking down while a series of math problems are solved rapidly, ending with a massive fireworks display of numbers.",
      "questions": [
        {
          "id": "basic-math-101-l15-q1",
          "text": "What is 2,735 + 1,489?",
          "skillId": "basic-math-101-skill-addition",
          "options": [
            {
              "id": "a",
              "text": "4,224"
            },
            {
              "id": "b",
              "text": "4,124"
            },
            {
              "id": "c",
              "text": "4,214"
            },
            {
              "id": "d",
              "text": "3,224"
            }
          ],
          "correctOptionId": "a",
          "explanation": "5+9=14 (carry 1), 3+8+1=12 (carry 1), 7+4+1=12 (carry 1), 2+1+1=4. Answer: 4,224."
        },
        {
          "id": "basic-math-101-l15-q2",
          "text": "A bookshelf holds 200 books. There are 134 on it now. A librarian adds 48 more. How many empty spaces remain?",
          "skillId": "basic-math-101-skill-word-problems",
          "options": [
            {
              "id": "a",
              "text": "18"
            },
            {
              "id": "b",
              "text": "28"
            },
            {
              "id": "c",
              "text": "82"
            },
            {
              "id": "d",
              "text": "114"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Step 1: 134 + 48 = 182 (books on shelf). Step 2: 200 − 182 = 18 (empty spaces)."
        },
        {
          "id": "basic-math-101-l15-q3",
          "text": "Which number rounds to 5,000 when rounded to the nearest thousand?",
          "skillId": "basic-math-101-skill-estimation",
          "options": [
            {
              "id": "a",
              "text": "4,392"
            },
            {
              "id": "b",
              "text": "5,501"
            },
            {
              "id": "c",
              "text": "4,510"
            },
            {
              "id": "d",
              "text": "5,500"
            }
          ],
          "correctOptionId": "c",
          "explanation": "4,510: hundreds digit is 5, so round up to 5,000. 4,392 rounds to 4,000. 5,501 and 5,500 round to 6,000."
        },
        {
          "id": "basic-math-101-l15-q4",
          "text": "What is 4,000 − 1,836?",
          "skillId": "basic-math-101-skill-subtraction",
          "options": [
            {
              "id": "a",
              "text": "2,164"
            },
            {
              "id": "b",
              "text": "2,264"
            },
            {
              "id": "c",
              "text": "2,174"
            },
            {
              "id": "d",
              "text": "3,164"
            }
          ],
          "correctOptionId": "a",
          "explanation": "4,000 − 1,836: regroup across zeros. 10−6=4, 9−3=6, 9−8=1, 3−1=2. Answer: 2,164."
        }
      ],
      "interactiveActivities": [
        {
          "id": "basic-math-101-l15-ia1",
          "type": "drag_and_drop",
          "title": "Place Value Puzzle",
          "description": "Place each digit card into the correct place value slot to build the number 8,507.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "targets": [
              {
                "id": "thousands",
                "label": "Thousands"
              },
              {
                "id": "hundreds",
                "label": "Hundreds"
              },
              {
                "id": "tens",
                "label": "Tens"
              },
              {
                "id": "ones",
                "label": "Ones"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "8",
                "correctTargetId": "thousands"
              },
              {
                "id": "d2",
                "label": "5",
                "correctTargetId": "hundreds"
              },
              {
                "id": "d3",
                "label": "0",
                "correctTargetId": "tens"
              },
              {
                "id": "d4",
                "label": "7",
                "correctTargetId": "ones"
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
              2,
              3,
              4
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 0,
          "medium": 2,
          "hard": 2
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "basic-math-101-l15-a1",
          "type": "mnemonic",
          "title": "Final Review Tip",
          "content": "Before submitting, estimate every answer first. If your exact answer is far from the estimate, recheck your work."
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-101-l15.png"
    }
  ]
};
