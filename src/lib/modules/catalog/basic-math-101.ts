import type { LearningModule } from "@/lib/modules/types";

export const BasicMath101Module: LearningModule = {
  id: "basic-math-101",
  title: "Basic Math Foundations",
  description: "Learn number sense, counting, addition, subtraction, and early problem solving.",
  subject: "Math",
  tags: ["core", "curriculum", "interactive"],
  minAge: 7,
  maxAge: 18,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  learningObjectives: [
    "Read and write whole numbers using place value up to thousands",
    "Add and subtract multi-digit numbers with regrouping",
    "Solve one-step and two-step word problems involving addition and subtraction",
    "Estimate sums and differences using rounding",
    "Apply measurement concepts to everyday quantities"
  ],
  lessons: [
    {
      id: "basic-math-101-l01",
      title: "Place Value and Number Sense",
      type: "video",
      duration: 10,
      objectives: ["Identify the value of each digit in a number up to 9,999", "Compare and order whole numbers using place value"],
      chunks: [
        {
          id: "basic-math-101-l01-c1",
          title: "What Is Place Value?",
          kind: "intro",
          content: "Every digit in a number has a value that depends on its position. In the number 3,572 the digit 3 is in the thousands place and represents 3,000, while the 5 is in the hundreds place and represents 500. Understanding place value is the foundation of all arithmetic."
        },
        {
          id: "basic-math-101-l01-c2",
          title: "Ones, Tens, Hundreds, Thousands",
          kind: "concept",
          content: "Moving left, each place is worth ten times more than the one before it. Ones (1), Tens (10), Hundreds (100), Thousands (1,000). The number 4,206 means 4 thousands + 2 hundreds + 0 tens + 6 ones. We call this expanded form: 4,000 + 200 + 0 + 6."
        },
        {
          id: "basic-math-101-l01-c3",
          title: "Comparing Numbers",
          kind: "example",
          content: "To compare 2,481 and 2,519, start at the largest place. Both have 2 thousands. Both have a digit in the hundreds place: 4 vs 5. Since 4 < 5, we know 2,481 < 2,519. Always compare from left to right, stopping at the first difference."
        },
        {
          id: "basic-math-101-l01-c4",
          title: "Try It Yourself",
          kind: "practice",
          content: "Write 7,035 in expanded form. Then decide which is greater: 6,892 or 6,928. Check your work by comparing digit by digit from the thousands place."
        }
      ],
      flashcards: [
        { id: "basic-math-101-l01-f1", front: "What does 'place value' mean?", back: "The value of a digit based on its position in a number. For example, the 5 in 583 means 500." },
        { id: "basic-math-101-l01-f2", front: "What is expanded form?", back: "Writing a number as the sum of each digit's value. Example: 4,306 = 4,000 + 300 + 0 + 6." },
        { id: "basic-math-101-l01-f3", front: "How do you compare two four-digit numbers?", back: "Compare digits from left to right. The first place where the digits differ tells you which number is larger." },
        { id: "basic-math-101-l01-f4", front: "What is the value of the 8 in 3,821?", back: "800, because the 8 is in the hundreds place." }
      ],
      learningAids: [
        { id: "basic-math-101-l01-a1", type: "image", title: "Place Value Chart", content: "A chart showing ones, tens, hundreds, and thousands columns with base-ten blocks illustrating 3,572." },
        { id: "basic-math-101-l01-a2", type: "animation", title: "Building Numbers", content: "Animation showing how base-ten blocks combine: 10 ones become 1 ten rod, 10 tens become 1 hundred flat, 10 hundreds become 1 thousand cube." }
      ]
    },
    {
      id: "basic-math-101-l02",
      title: "Addition Strategies",
      type: "interactive",
      duration: 12,
      objectives: ["Add multi-digit numbers using the standard algorithm", "Use mental math strategies like making tens and breaking apart numbers"],
      interactiveActivities: [
        {
          id: "basic-math-101-l02-ia1",
          type: "sorting_buckets",
          title: "Sort the Addition Strategy",
          description: "Classify each addition technique into the correct strategy category.",
          estimatedMinutes: 8,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "mental", label: "Mental Math" },
              { id: "written", label: "Written Algorithm" },
              { id: "estimation", label: "Estimation" }
            ],
            items: [
              { id: "i1", label: "Break 47 + 36 into (47 + 30) + 6", correctBucketId: "mental" },
              { id: "i2", label: "Line up digits by place value and carry", correctBucketId: "written" },
              { id: "i3", label: "Round 198 + 305 to 200 + 300 = 500", correctBucketId: "estimation" },
              { id: "i4", label: "Make a ten: 8 + 7 = 8 + 2 + 5 = 15", correctBucketId: "mental" },
              { id: "i5", label: "Add columns right to left, regrouping when sum ≥ 10", correctBucketId: "written" },
              { id: "i6", label: "Round both numbers to the nearest hundred first", correctBucketId: "estimation" }
            ]
          }
        }
      ],
      chunks: [
        {
          id: "basic-math-101-l02-c1",
          title: "Mental Math: Making Tens",
          kind: "concept",
          content: "To add 8 + 7 quickly, take 2 from the 7 to make 10: 8 + 2 = 10, then 10 + 5 = 15. This 'make a ten' strategy works for any pair of single-digit numbers."
        },
        {
          id: "basic-math-101-l02-c2",
          title: "Breaking Apart Numbers",
          kind: "concept",
          content: "For 47 + 36, break apart by place value: 40 + 30 = 70, and 7 + 6 = 13. Combine: 70 + 13 = 83. This strategy keeps the mental math manageable."
        },
        {
          id: "basic-math-101-l02-c3",
          title: "Standard Algorithm",
          kind: "example",
          content: "For 368 + 475: add ones (8+5=13, write 3 carry 1), add tens (6+7+1=14, write 4 carry 1), add hundreds (3+4+1=8). Answer: 843."
        }
      ],
      learningAids: [
        { id: "basic-math-101-l02-a1", type: "practice", title: "Quick Addition Drill", content: "Solve these using any strategy: 56 + 38, 247 + 185, 1,309 + 2,764. Check with the standard algorithm." }
      ]
    },
    {
      id: "basic-math-101-l03",
      title: "Checkpoint: Number Operations",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "basic-math-101-l03-q1",
          text: "What is the value of the digit 6 in the number 4,623?",
          skillId: "basic-math-101-skill-place-value",
          options: [
            { id: "a", text: "6" },
            { id: "b", text: "60" },
            { id: "c", text: "600" },
            { id: "d", text: "6,000" }
          ],
          correctOptionId: "c",
          explanation: "The 6 is in the hundreds place, so its value is 6 × 100 = 600."
        },
        {
          id: "basic-math-101-l03-q2",
          text: "Which addition strategy is shown? 8 + 7 → (8 + 2) + 5 → 10 + 5 = 15",
          skillId: "basic-math-101-skill-addition",
          options: [
            { id: "a", text: "Breaking apart by place value" },
            { id: "b", text: "Making a ten" },
            { id: "c", text: "Rounding and estimating" },
            { id: "d", text: "Using the standard algorithm" }
          ],
          correctOptionId: "b",
          explanation: "The solver moves 2 from 7 to 8 to 'make a ten' (10), then adds the remaining 5."
        },
        {
          id: "basic-math-101-l03-q3",
          text: "What is 457 + 368?",
          skillId: "basic-math-101-skill-addition",
          options: [
            { id: "a", text: "815" },
            { id: "b", text: "725" },
            { id: "c", text: "825" },
            { id: "d", text: "835" }
          ],
          correctOptionId: "c",
          explanation: "Ones: 7+8=15 (write 5, carry 1). Tens: 5+6+1=12 (write 2, carry 1). Hundreds: 4+3+1=8. Answer: 825."
        },
        {
          id: "basic-math-101-l03-q4",
          text: "Which number is greatest: 3,908 or 3,890 or 3,980?",
          skillId: "basic-math-101-skill-place-value",
          options: [
            { id: "a", text: "3,908" },
            { id: "b", text: "3,890" },
            { id: "c", text: "3,980" },
            { id: "d", text: "They are all equal" }
          ],
          correctOptionId: "c",
          explanation: "All start with 3,9__. Comparing hundreds: 3,980 has 9 in the hundreds place (980 > 908 > 890)."
        }
      ],
      interactiveActivities: [
        {
          id: "basic-math-101-l03-ia1",
          type: "matching_pairs",
          title: "Match the Expanded Form",
          description: "Match each number to its expanded form.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "5,307" },
              { id: "l2", label: "2,450" },
              { id: "l3", label: "8,016" }
            ],
            right: [
              { id: "r1", label: "5,000 + 300 + 7" },
              { id: "r2", label: "2,000 + 400 + 50" },
              { id: "r3", label: "8,000 + 10 + 6" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" }
            ]
          }
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
        { id: "basic-math-101-l03-a1", type: "mnemonic", title: "Addition Carry Rule", content: "When the sum of a column is 10 or more, write the ones digit and carry the tens digit to the next column." }
      ]
    },
    {
      id: "basic-math-101-l04",
      title: "Subtraction Strategies",
      type: "video",
      duration: 11,
      objectives: ["Subtract multi-digit numbers with regrouping", "Check subtraction using addition"],
      chunks: [
        {
          id: "basic-math-101-l04-c1",
          title: "Subtraction as Taking Away",
          kind: "intro",
          content: "Subtraction finds the difference between two numbers. If you have 85 stickers and give away 37, you have 85 − 37 = 48 stickers left. Subtraction answers 'how many are left?' and 'how many more?'"
        },
        {
          id: "basic-math-101-l04-c2",
          title: "Regrouping (Borrowing)",
          kind: "concept",
          content: "In 542 − 278, the ones column has 2 − 8, which we cannot do without going negative. So we regroup: borrow 1 ten from the 4 tens, making it 3 tens and 12 ones. Now 12 − 8 = 4. Continue: tens 3 − 7 requires borrowing from hundreds, giving 13 − 7 = 6. Hundreds: 4 − 2 = 2. Answer: 264."
        },
        {
          id: "basic-math-101-l04-c3",
          title: "Checking with Addition",
          kind: "example",
          content: "Always verify: if 542 − 278 = 264, then 264 + 278 should equal 542. Add: 4+8=12 (carry 1), 6+7+1=14 (carry 1), 2+2+1=5. Result: 542. Confirmed!"
        },
        {
          id: "basic-math-101-l04-c4",
          title: "Counting Up Strategy",
          kind: "concept",
          content: "An alternative: to find 500 − 287, count up from 287 to 500. 287 → 300 is 13, 300 → 500 is 200. Total: 213. This works well when the larger number is round."
        }
      ],
      flashcards: [
        { id: "basic-math-101-l04-f1", front: "What is regrouping in subtraction?", back: "Borrowing 1 from the next higher place value. E.g., 1 ten becomes 10 ones when you need more ones to subtract." },
        { id: "basic-math-101-l04-f2", front: "How can you check a subtraction answer?", back: "Add the answer (difference) to the number you subtracted. If it equals the original number, your subtraction is correct." },
        { id: "basic-math-101-l04-f3", front: "What is the 'counting up' method?", back: "Instead of subtracting, count up from the smaller number to the larger one. The total you counted is the difference." },
        { id: "basic-math-101-l04-f4", front: "What is 803 − 467?", back: "336. Regroup: 3−7 needs borrowing → 13−7=6. Then 9−6=3 (after borrow). Then 7−4=3. Answer: 336." }
      ],
      learningAids: [
        { id: "basic-math-101-l04-a1", type: "image", title: "Regrouping Step-by-Step", content: "Visual diagram showing the borrowing process for 542 − 278 with crossed-out digits and regrouped values." }
      ]
    },
    {
      id: "basic-math-101-l05",
      title: "Math Word Problem Methods",
      type: "interactive",
      duration: 13,
      objectives: ["Identify the operation needed in a word problem", "Solve one-step addition and subtraction word problems"],
      interactiveActivities: [
        {
          id: "basic-math-101-l05-ia1",
          type: "sorting_buckets",
          title: "Addition or Subtraction?",
          description: "Read each word problem clue and sort it into the correct operation.",
          estimatedMinutes: 8,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "add", label: "Addition (combining)" },
              { id: "sub", label: "Subtraction (separating)" },
              { id: "compare", label: "Subtraction (comparing)" }
            ],
            items: [
              { id: "i1", label: "Sam has 45 cards and buys 23 more. How many total?", correctBucketId: "add" },
              { id: "i2", label: "A jar has 80 marbles. 35 are removed. How many remain?", correctBucketId: "sub" },
              { id: "i3", label: "Team A scored 92 points. Team B scored 78. How many more did A score?", correctBucketId: "compare" },
              { id: "i4", label: "125 students in Grade 3 and 148 in Grade 4. How many altogether?", correctBucketId: "add" },
              { id: "i5", label: "A baker made 360 cookies and sold 215. How many are left?", correctBucketId: "sub" },
              { id: "i6", label: "Maya read 47 pages. Kai read 62. How many fewer did Maya read?", correctBucketId: "compare" }
            ]
          }
        }
      ],
      chunks: [
        {
          id: "basic-math-101-l05-c1",
          title: "Clue Words for Operations",
          kind: "concept",
          content: "Addition clues: 'in all', 'altogether', 'total', 'combined', 'both'. Subtraction clues: 'left', 'remain', 'difference', 'fewer', 'how many more'. Read carefully — the story tells you which operation to use."
        },
        {
          id: "basic-math-101-l05-c2",
          title: "The Four-Step Method",
          kind: "concept",
          content: "1) Read the problem and underline the question. 2) Identify the numbers and what they represent. 3) Choose the operation. 4) Solve and check — does the answer make sense?"
        }
      ],
      learningAids: [
        { id: "basic-math-101-l05-a1", type: "animation", title: "Word Problem Walkthrough", content: "Animated example showing the four-step method applied to: 'A library has 1,250 books. 389 are checked out. How many are on the shelves?'" }
      ]
    },
    {
      id: "basic-math-101-l06",
      title: "Checkpoint: Problem Solving",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "basic-math-101-l06-q1",
          text: "A store had 524 apples. 287 were sold. How many are left?",
          skillId: "basic-math-101-skill-subtraction",
          options: [
            { id: "a", text: "237" },
            { id: "b", text: "247" },
            { id: "c", text: "337" },
            { id: "d", text: "811" }
          ],
          correctOptionId: "a",
          explanation: "524 − 287 = 237. Ones: regroup, 14−7=7. Tens: 1−8 regroup, 11−8=3. Hundreds: 4−2=2. Answer: 237."
        },
        {
          id: "basic-math-101-l06-q2",
          text: "Which clue word signals subtraction?",
          skillId: "basic-math-101-skill-word-problems",
          options: [
            { id: "a", text: "altogether" },
            { id: "b", text: "combined" },
            { id: "c", text: "remain" },
            { id: "d", text: "total" }
          ],
          correctOptionId: "c",
          explanation: "'Remain' indicates something was taken away, which is subtraction. The other words signal addition."
        },
        {
          id: "basic-math-101-l06-q3",
          text: "463 + ___ = 800. What is the missing number?",
          skillId: "basic-math-101-skill-addition",
          options: [
            { id: "a", text: "347" },
            { id: "b", text: "337" },
            { id: "c", text: "437" },
            { id: "d", text: "363" }
          ],
          correctOptionId: "b",
          explanation: "800 − 463 = 337. You can verify: 463 + 337 = 800."
        },
        {
          id: "basic-math-101-l06-q4",
          text: "Class A has 28 students. Class B has 35 students. How many more students does Class B have?",
          skillId: "basic-math-101-skill-word-problems",
          options: [
            { id: "a", text: "63" },
            { id: "b", text: "7" },
            { id: "c", text: "17" },
            { id: "d", text: "53" }
          ],
          correctOptionId: "b",
          explanation: "This is a comparison problem: 35 − 28 = 7. Class B has 7 more students."
        }
      ],
      interactiveActivities: [
        {
          id: "basic-math-101-l06-ia1",
          type: "matching_pairs",
          title: "Match Problem to Operation",
          description: "Match each word problem to the correct number sentence.",
          estimatedMinutes: 5,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "I had 150 stickers and got 75 more" },
              { id: "l2", label: "340 birds were on a lake, 128 flew away" },
              { id: "l3", label: "Tom has 92 cards, Mia has 67, how many more does Tom have?" }
            ],
            right: [
              { id: "r1", label: "150 + 75 = 225" },
              { id: "r2", label: "340 − 128 = 212" },
              { id: "r3", label: "92 − 67 = 25" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" }
            ]
          }
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
        { id: "basic-math-101-l06-a1", type: "mnemonic", title: "CUBES Method", content: "Circle the numbers, Underline the question, Box key words, Evaluate the operation, Solve and check." }
      ]
    },
    {
      id: "basic-math-101-l07",
      title: "Measurement and Estimation",
      type: "video",
      duration: 12,
      objectives: ["Round numbers to the nearest ten and hundred", "Estimate sums and differences using rounding"],
      chunks: [
        {
          id: "basic-math-101-l07-c1",
          title: "Why Estimate?",
          kind: "intro",
          content: "Estimation gives a quick, approximate answer. If you need to know roughly how much 489 + 312 is, rounding to 500 + 300 = 800 is fast and close to the exact answer of 801. Estimation helps you check if your exact answer is reasonable."
        },
        {
          id: "basic-math-101-l07-c2",
          title: "Rounding Rules",
          kind: "concept",
          content: "To round to the nearest ten, look at the ones digit. If it is 5 or more, round up; if 4 or less, round down. Examples: 73 → 70, 87 → 90, 45 → 50. To round to the nearest hundred, look at the tens digit: 342 → 300, 678 → 700."
        },
        {
          id: "basic-math-101-l07-c3",
          title: "Estimating Sums",
          kind: "example",
          content: "Estimate 639 + 274. Round each: 639 → 600, 274 → 300. Estimated sum: 900. Exact answer: 913. The estimate is close and confirms the exact answer is reasonable."
        },
        {
          id: "basic-math-101-l07-c4",
          title: "Measurement Connection",
          kind: "concept",
          content: "Estimation is essential in measurement. If a table is about 2 meters long and a room is about 5 meters, you can estimate the table takes up about 2/5 of the room. Rounding measurements makes mental math practical."
        }
      ],
      flashcards: [
        { id: "basic-math-101-l07-f1", front: "How do you round 456 to the nearest hundred?", back: "Look at the tens digit (5). Since 5 ≥ 5, round up to 500." },
        { id: "basic-math-101-l07-f2", front: "What is front-end estimation?", back: "Add only the leading (leftmost) digits. For 483 + 219: 400 + 200 = 600. Quick but less precise than rounding." },
        { id: "basic-math-101-l07-f3", front: "Why is estimation useful?", back: "To quickly check if an exact answer is reasonable, make decisions about approximate quantities, and simplify mental math." },
        { id: "basic-math-101-l07-f4", front: "Round 2,748 to the nearest thousand.", back: "Look at the hundreds digit (7). Since 7 ≥ 5, round up to 3,000." }
      ],
      learningAids: [
        { id: "basic-math-101-l07-a1", type: "practice", title: "Estimation Challenge", content: "Estimate then calculate: 387 + 445, 903 − 467, 1,250 + 3,870. Compare your estimate to the exact answer each time." }
      ]
    },
    {
      id: "basic-math-101-l08",
      title: "Math Journal Reflection",
      type: "interactive",
      duration: 10,
      objectives: ["Reflect on personal strengths and weaknesses in arithmetic", "Set a specific improvement goal"],
      interactiveActivities: [
        {
          id: "basic-math-101-l08-ia1",
          type: "matching_pairs",
          title: "Error Pattern to Fix",
          description: "Match each common math mistake to the best correction strategy.",
          estimatedMinutes: 7,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "Forgetting to carry when adding" },
              { id: "l2", label: "Subtracting the smaller digit from the larger in any column" },
              { id: "l3", label: "Getting the wrong operation in a word problem" }
            ],
            right: [
              { id: "r1", label: "Write carried digits above the next column every time" },
              { id: "r2", label: "Always subtract top minus bottom; regroup when top digit is smaller" },
              { id: "r3", label: "Underline the question and circle clue words before choosing an operation" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" }
            ]
          }
        }
      ],
      chunks: [
        {
          id: "basic-math-101-l08-c1",
          title: "Reflect on Your Progress",
          kind: "recap",
          content: "Think about what you have learned so far: place value, addition strategies, subtraction with regrouping, word problems, and estimation. Which topic felt easiest? Which felt hardest? Writing down your answer helps you focus your practice."
        }
      ],
      learningAids: [
        { id: "basic-math-101-l08-a1", type: "mnemonic", title: "Growth Mindset Prompt", content: "Mistakes are proof you are trying. Identify one error pattern and commit to one fix this week." }
      ]
    },
    {
      id: "basic-math-101-l09",
      title: "Review: Core Math Skills",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "basic-math-101-l09-q1",
          text: "Estimate 678 + 315 by rounding to the nearest hundred.",
          skillId: "basic-math-101-skill-estimation",
          options: [
            { id: "a", text: "About 900" },
            { id: "b", text: "About 1,000" },
            { id: "c", text: "About 1,100" },
            { id: "d", text: "About 800" }
          ],
          correctOptionId: "b",
          explanation: "678 rounds to 700, 315 rounds to 300. 700 + 300 = 1,000."
        },
        {
          id: "basic-math-101-l09-q2",
          text: "What is 1,003 − 567?",
          skillId: "basic-math-101-skill-subtraction",
          options: [
            { id: "a", text: "436" },
            { id: "b", text: "446" },
            { id: "c", text: "536" },
            { id: "d", text: "546" }
          ],
          correctOptionId: "a",
          explanation: "1,003 − 567: requires regrouping across multiple columns. Ones: 13−7=6, Tens: 9−6=3, Hundreds: 9−5=4. Answer: 436."
        },
        {
          id: "basic-math-101-l09-q3",
          text: "A farmer has 425 chickens and 378 ducks. How many birds in total?",
          skillId: "basic-math-101-skill-word-problems",
          options: [
            { id: "a", text: "47" },
            { id: "b", text: "703" },
            { id: "c", text: "803" },
            { id: "d", text: "793" }
          ],
          correctOptionId: "c",
          explanation: "'In total' means addition. 425 + 378: ones 5+8=13 (carry 1), tens 2+7+1=10 (carry 1), hundreds 4+3+1=8. Answer: 803."
        },
        {
          id: "basic-math-101-l09-q4",
          text: "What digit is in the tens place of 9,184?",
          skillId: "basic-math-101-skill-place-value",
          options: [
            { id: "a", text: "9" },
            { id: "b", text: "1" },
            { id: "c", text: "8" },
            { id: "d", text: "4" }
          ],
          correctOptionId: "c",
          explanation: "In 9,184: 4 is ones, 8 is tens, 1 is hundreds, 9 is thousands. The tens digit is 8."
        }
      ],
      interactiveActivities: [
        {
          id: "basic-math-101-l09-ia1",
          type: "drag_and_drop",
          title: "Order the Steps",
          description: "Put these word problem solving steps in the correct order.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            targets: [
              { id: "step1", label: "Step 1" },
              { id: "step2", label: "Step 2" },
              { id: "step3", label: "Step 3" },
              { id: "step4", label: "Step 4" }
            ],
            draggables: [
              { id: "d1", label: "Solve using the chosen operation", correctTargetId: "step3" },
              { id: "d2", label: "Read the problem and find the question", correctTargetId: "step1" },
              { id: "d3", label: "Check: does the answer make sense?", correctTargetId: "step4" },
              { id: "d4", label: "Identify numbers and choose the operation", correctTargetId: "step2" }
            ]
          }
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
        { id: "basic-math-101-l09-a1", type: "mnemonic", title: "Rounding Rhyme", content: "Five or more, let it soar (round up). Four or less, let it rest (round down)." }
      ]
    },
    {
      id: "basic-math-101-l10",
      title: "Mastery: Basic Math",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "basic-math-101-l10-q1",
          text: "Write 6,205 in expanded form:",
          skillId: "basic-math-101-skill-place-value",
          options: [
            { id: "a", text: "6,000 + 200 + 50" },
            { id: "b", text: "6,000 + 200 + 5" },
            { id: "c", text: "6,000 + 20 + 5" },
            { id: "d", text: "600 + 200 + 5" }
          ],
          correctOptionId: "b",
          explanation: "6,205 = 6 thousands + 2 hundreds + 0 tens + 5 ones = 6,000 + 200 + 0 + 5 = 6,000 + 200 + 5."
        },
        {
          id: "basic-math-101-l10-q2",
          text: "A school collected 1,456 cans in Week 1 and 1,389 in Week 2. What is the total?",
          skillId: "basic-math-101-skill-addition",
          options: [
            { id: "a", text: "2,845" },
            { id: "b", text: "2,745" },
            { id: "c", text: "2,835" },
            { id: "d", text: "67" }
          ],
          correctOptionId: "a",
          explanation: "1,456 + 1,389 = 2,845. This is an addition word problem (total of two amounts)."
        },
        {
          id: "basic-math-101-l10-q3",
          text: "Which is the best estimate for 892 − 417?",
          skillId: "basic-math-101-skill-estimation",
          options: [
            { id: "a", text: "About 300" },
            { id: "b", text: "About 400" },
            { id: "c", text: "About 500" },
            { id: "d", text: "About 600" }
          ],
          correctOptionId: "c",
          explanation: "900 − 400 = 500. The exact answer is 475, so 500 is a good estimate."
        },
        {
          id: "basic-math-101-l10-q4",
          text: "What is 700 − 258?",
          skillId: "basic-math-101-skill-subtraction",
          options: [
            { id: "a", text: "552" },
            { id: "b", text: "442" },
            { id: "c", text: "542" },
            { id: "d", text: "458" }
          ],
          correctOptionId: "b",
          explanation: "700 − 258: regroup from hundreds. 10−8=2 (ones), 9−5=4 (tens), 6−2=4 (hundreds). Answer: 442."
        }
      ],
      interactiveActivities: [
        {
          id: "basic-math-101-l10-ia1",
          type: "sorting_buckets",
          title: "Round These Numbers",
          description: "Sort each number into the correct rounded value (nearest hundred).",
          estimatedMinutes: 5,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "r400", label: "Rounds to 400" },
              { id: "r500", label: "Rounds to 500" },
              { id: "r600", label: "Rounds to 600" }
            ],
            items: [
              { id: "i1", label: "438", correctBucketId: "r400" },
              { id: "i2", label: "472", correctBucketId: "r500" },
              { id: "i3", label: "551", correctBucketId: "r600" },
              { id: "i4", label: "449", correctBucketId: "r400" },
              { id: "i5", label: "550", correctBucketId: "r600" },
              { id: "i6", label: "503", correctBucketId: "r500" }
            ]
          }
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
        { id: "basic-math-101-l10-a1", type: "mnemonic", title: "Check It Twice", content: "After solving a subtraction problem, add the answer to the smaller number. If you get the original number, you are correct." }
      ]
    },
    {
      id: "basic-math-101-l11",
      title: "Applied Math Challenge Studio",
      type: "interactive",
      duration: 14,
      objectives: ["Solve two-step word problems", "Combine addition and subtraction in context"],
      interactiveActivities: [
        {
          id: "basic-math-101-l11-ia1",
          type: "sorting_buckets",
          title: "Two-Step Problem Planner",
          description: "For each scenario step, classify whether you should add or subtract.",
          estimatedMinutes: 9,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "add-first", label: "Step 1: Add" },
              { id: "sub-first", label: "Step 1: Subtract" },
              { id: "add-second", label: "Step 2: Add" },
              { id: "sub-second", label: "Step 2: Subtract" }
            ],
            items: [
              { id: "i1", label: "A shop had 300 toys, received 150 more → find total inventory", correctBucketId: "add-first" },
              { id: "i2", label: "Then sold 210 toys → find remaining inventory", correctBucketId: "sub-second" },
              { id: "i3", label: "Class had 32 students, 8 were absent → find present count", correctBucketId: "sub-first" },
              { id: "i4", label: "Then 3 absent students returned → find updated present count", correctBucketId: "add-second" }
            ]
          }
        }
      ],
      chunks: [
        {
          id: "basic-math-101-l11-c1",
          title: "Two-Step Problems",
          kind: "concept",
          content: "Some problems need two operations. Example: A bakery bakes 240 muffins in the morning and 180 in the afternoon. They sell 315 by closing. How many are left? Step 1: 240 + 180 = 420 (total baked). Step 2: 420 − 315 = 105 (remaining)."
        }
      ],
      learningAids: [
        { id: "basic-math-101-l11-a1", type: "practice", title: "Two-Step Challenge", content: "Solve: A library had 1,500 books. They donated 230 and received 175 new ones. How many books does the library have now?" }
      ]
    },
    {
      id: "basic-math-101-l12",
      title: "Basic Math Mastery Applied Retest",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "basic-math-101-l12-q1",
          text: "A theater has 450 seats. 287 are filled. How many seats are empty?",
          skillId: "basic-math-101-skill-subtraction",
          options: [
            { id: "a", text: "163" },
            { id: "b", text: "173" },
            { id: "c", text: "263" },
            { id: "d", text: "737" }
          ],
          correctOptionId: "a",
          explanation: "450 − 287 = 163. This is a subtraction word problem (finding what's left)."
        },
        {
          id: "basic-math-101-l12-q2",
          text: "Round 3,462 to the nearest thousand.",
          skillId: "basic-math-101-skill-estimation",
          options: [
            { id: "a", text: "3,000" },
            { id: "b", text: "3,500" },
            { id: "c", text: "4,000" },
            { id: "d", text: "3,400" }
          ],
          correctOptionId: "a",
          explanation: "Look at the hundreds digit: 4 < 5, so round down to 3,000."
        },
        {
          id: "basic-math-101-l12-q3",
          text: "Maria saved $235 in January and $189 in February. She spent $150 on supplies. How much does she have left?",
          skillId: "basic-math-101-skill-word-problems",
          options: [
            { id: "a", text: "$274" },
            { id: "b", text: "$374" },
            { id: "c", text: "$196" },
            { id: "d", text: "$574" }
          ],
          correctOptionId: "a",
          explanation: "Step 1: $235 + $189 = $424. Step 2: $424 − $150 = $274. This is a two-step problem."
        },
        {
          id: "basic-math-101-l12-q4",
          text: "In the number 7,049, which digit is in the hundreds place?",
          skillId: "basic-math-101-skill-place-value",
          options: [
            { id: "a", text: "7" },
            { id: "b", text: "0" },
            { id: "c", text: "4" },
            { id: "d", text: "9" }
          ],
          correctOptionId: "b",
          explanation: "7,049: 9=ones, 4=tens, 0=hundreds, 7=thousands. The hundreds digit is 0."
        }
      ],
      interactiveActivities: [
        {
          id: "basic-math-101-l12-ia1",
          type: "matching_pairs",
          title: "Estimate vs Exact",
          description: "Match each problem to both its estimate and exact answer.",
          estimatedMinutes: 6,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "289 + 413" },
              { id: "l2", label: "750 − 382" },
              { id: "l3", label: "1,295 + 705" }
            ],
            right: [
              { id: "r1", label: "Exact: 702" },
              { id: "r2", label: "Exact: 368" },
              { id: "r3", label: "Exact: 2,000" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" }
            ]
          }
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
        { id: "basic-math-101-l12-a1", type: "mnemonic", title: "Two-Step Reminder", content: "Read the whole problem first. Solve one step at a time. Use the result of Step 1 as input for Step 2." }
      ]
    },
    {
      id: "basic-math-101-l13",
      title: "Math Scenario Lab",
      type: "video",
      duration: 12,
      objectives: ["Apply all arithmetic skills to a real-world scenario", "Justify each step with reasoning"],
      chunks: [
        {
          id: "basic-math-101-l13-c1",
          title: "The Field Trip Budget",
          kind: "intro",
          content: "Your class is planning a field trip. The bus costs $385, museum entry costs $12 per student for 28 students, and lunch is $8 per student. You have a budget of $1,200. Can you afford it? Let's figure it out step by step."
        },
        {
          id: "basic-math-101-l13-c2",
          title: "Calculate Each Cost",
          kind: "example",
          content: "Bus: $385. Museum: 28 × $12 = $336. Lunch: 28 × $8 = $224. (We can use repeated addition: 28 × 8 = 20×8 + 8×8 = 160 + 64 = 224.) Total cost: $385 + $336 + $224."
        },
        {
          id: "basic-math-101-l13-c3",
          title: "Add the Costs",
          kind: "example",
          content: "385 + 336 = 721. Then 721 + 224 = 945. Total cost: $945. Budget: $1,200. Since 945 < 1,200, the class can afford it. Money remaining: $1,200 − $945 = $255."
        },
        {
          id: "basic-math-101-l13-c4",
          title: "Reflect and Extend",
          kind: "practice",
          content: "What if 4 more students join? Recalculate museum and lunch costs for 32 students, then find the new total. Is it still within budget?"
        }
      ],
      flashcards: [
        { id: "basic-math-101-l13-f1", front: "How do you solve a multi-part real-world problem?", back: "Break it into smaller pieces. Calculate each part separately, then combine using addition or subtraction." },
        { id: "basic-math-101-l13-f2", front: "How do you check if something fits a budget?", back: "Find the total cost, then compare it to the budget. If total ≤ budget, you can afford it." },
        { id: "basic-math-101-l13-f3", front: "What is a good estimation for 28 × $12?", back: "Round: 30 × $12 = $360. The exact answer ($336) is a bit less since 28 < 30." },
        { id: "basic-math-101-l13-f4", front: "Why break a big problem into steps?", back: "Smaller steps reduce errors, make the work clearer, and let you check each part before combining." }
      ],
      learningAids: [
        { id: "basic-math-101-l13-a1", type: "image", title: "Budget Table", content: "A table showing Item, Unit Cost, Quantity, and Total for bus, museum, and lunch with the $1,200 budget comparison." },
        { id: "basic-math-101-l13-a2", type: "practice", title: "Your Own Budget", content: "Plan a party for 25 friends. Decide on food ($5/person), decorations ($45), and entertainment ($80). Calculate the total cost." }
      ]
    },
    {
      id: "basic-math-101-l14",
      title: "Math Coaching Clinic",
      type: "interactive",
      duration: 13,
      objectives: ["Diagnose personal error patterns", "Apply targeted fixes for common arithmetic mistakes"],
      interactiveActivities: [
        {
          id: "basic-math-101-l14-ia1",
          type: "matching_pairs",
          title: "Diagnose and Fix",
          description: "Match each student's error to the specific skill they need to practice.",
          estimatedMinutes: 8,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "Student writes 356+278=524 (forgot to carry in tens)" },
              { id: "l2", label: "Student writes 503−247=344 (subtracted smaller from larger in each column)" },
              { id: "l3", label: "Student says 'how many more' means addition" },
              { id: "l4", label: "Student rounds 745 to 800 (nearest hundred)" }
            ],
            right: [
              { id: "r1", label: "Practice carrying: always write the carry digit above the next column" },
              { id: "r2", label: "Practice regrouping: borrow from the next column when top < bottom" },
              { id: "r3", label: "Review clue words: 'how many more' means find the difference (subtract)" },
              { id: "r4", label: "Review rounding: look at the digit to the RIGHT of the target place" }
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
      chunks: [
        {
          id: "basic-math-101-l14-c1",
          title: "Common Error Patterns",
          kind: "recap",
          content: "The most frequent mistakes in basic math: 1) Forgetting to carry or borrow. 2) Subtracting smaller from larger regardless of position. 3) Choosing the wrong operation in word problems. 4) Applying rounding rules incorrectly. Identifying your pattern is the first step to fixing it."
        }
      ],
      learningAids: [
        { id: "basic-math-101-l14-a1", type: "mnemonic", title: "Fix-It Loop", content: "Spot the pattern → Practice the rule → Test yourself → Repeat until automatic." }
      ]
    },
    {
      id: "basic-math-101-l15",
      title: "Basic Math Mastery Sprint",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "basic-math-101-l15-q1",
          text: "What is 2,735 + 1,489?",
          skillId: "basic-math-101-skill-addition",
          options: [
            { id: "a", text: "4,224" },
            { id: "b", text: "4,124" },
            { id: "c", text: "4,214" },
            { id: "d", text: "3,224" }
          ],
          correctOptionId: "a",
          explanation: "5+9=14 (carry 1), 3+8+1=12 (carry 1), 7+4+1=12 (carry 1), 2+1+1=4. Answer: 4,224."
        },
        {
          id: "basic-math-101-l15-q2",
          text: "A bookshelf holds 200 books. There are 134 on it now. A librarian adds 48 more. How many empty spaces remain?",
          skillId: "basic-math-101-skill-word-problems",
          options: [
            { id: "a", text: "18" },
            { id: "b", text: "28" },
            { id: "c", text: "82" },
            { id: "d", text: "114" }
          ],
          correctOptionId: "a",
          explanation: "Step 1: 134 + 48 = 182 (books on shelf). Step 2: 200 − 182 = 18 (empty spaces)."
        },
        {
          id: "basic-math-101-l15-q3",
          text: "Which number rounds to 5,000 when rounded to the nearest thousand?",
          skillId: "basic-math-101-skill-estimation",
          options: [
            { id: "a", text: "4,392" },
            { id: "b", text: "5,501" },
            { id: "c", text: "4,510" },
            { id: "d", text: "5,500" }
          ],
          correctOptionId: "c",
          explanation: "4,510: hundreds digit is 5, so round up to 5,000. 4,392 rounds to 4,000. 5,501 and 5,500 round to 6,000."
        },
        {
          id: "basic-math-101-l15-q4",
          text: "What is 4,000 − 1,836?",
          skillId: "basic-math-101-skill-subtraction",
          options: [
            { id: "a", text: "2,164" },
            { id: "b", text: "2,264" },
            { id: "c", text: "2,174" },
            { id: "d", text: "3,164" }
          ],
          correctOptionId: "a",
          explanation: "4,000 − 1,836: regroup across zeros. 10−6=4, 9−3=6, 9−8=1, 3−1=2. Answer: 2,164."
        }
      ],
      interactiveActivities: [
        {
          id: "basic-math-101-l15-ia1",
          type: "drag_and_drop",
          title: "Place Value Puzzle",
          description: "Place each digit card into the correct place value slot to build the number 8,507.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            targets: [
              { id: "thousands", label: "Thousands" },
              { id: "hundreds", label: "Hundreds" },
              { id: "tens", label: "Tens" },
              { id: "ones", label: "Ones" }
            ],
            draggables: [
              { id: "d1", label: "8", correctTargetId: "thousands" },
              { id: "d2", label: "5", correctTargetId: "hundreds" },
              { id: "d3", label: "0", correctTargetId: "tens" },
              { id: "d4", label: "7", correctTargetId: "ones" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [2, 3, 4] }],
        difficultyDistribution: { easy: 0, medium: 2, hard: 2 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "basic-math-101-l15-a1", type: "mnemonic", title: "Final Review Tip", content: "Before submitting, estimate every answer first. If your exact answer is far from the estimate, recheck your work." }
      ]
    }
  ],
};
