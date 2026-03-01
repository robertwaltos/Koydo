import type { LearningModule } from "@/lib/modules/types";

export const SatPrep101Module: LearningModule = {
  "id": "sat-prep-101",
  "title": "SAT Prep Foundations",
  "description": "Master the math, reading, and writing skills tested on the SAT. Covers Heart of Algebra, Problem Solving & Data Analysis, Evidence-Based Reading & Writing, and proven test-taking strategies to maximize your score.",
  "subject": "Exam Prep",
  "tags": [
    "exam-prep",
    "assessment",
    "advanced",
    "curriculum",
    "interactive"
  ],
  "minAge": 14,
  "maxAge": 19,
  "version": "3.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Solve linear equations, inequalities, and systems of equations fluently",
    "Interpret ratios, percentages, tables, charts, and scatterplots",
    "Apply evidence-based reading strategies to identify main ideas, inferences, and vocabulary in context",
    "Recognize and correct grammar, punctuation, and sentence structure errors",
    "Use process of elimination and pacing strategies to maximize SAT score",
    "Demonstrate readiness across SAT Math and Evidence-Based Reading & Writing sections"
  ],
  "lessons": [
    {
      "id": "sat-prep-101-l01",
      "title": "SAT Math — Heart of Algebra",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Solve linear equations and inequalities in one and two variables",
        "Translate word problems into algebraic expressions and equations",
        "Evaluate and interpret functions using proper notation"
      ],
      "chunks": [
        {
          "id": "sat-prep-101-l01-c1",
          "title": "Linear Equations and Inequalities",
          "content": "Heart of Algebra is the largest math category on the SAT, making up about one-third of all math questions. A linear equation has the form ax + b = c, where the variable has an exponent of 1. To solve, isolate x by performing inverse operations on both sides. For example, to solve 2x + 5 = 13, subtract 5 from both sides to get 2x = 8, then divide by 2 to get x = 4. Linear inequalities work the same way with one critical rule: when you multiply or divide both sides by a negative number, you must flip the inequality sign. For example, -3x > 12 becomes x < -4 after dividing by -3."
        },
        {
          "id": "sat-prep-101-l01-c2",
          "title": "Translating Word Problems",
          "content": "The SAT frequently wraps algebra in real-world scenarios. The key is translating English into math. 'Is' means equals (=). 'More than' or 'greater than' means addition (+). 'Less than' means subtraction (-). 'Of' usually means multiplication (×). 'Per' means division (÷). Example: 'A plumber charges $50 for a service call plus $35 per hour' translates to C = 50 + 35h, where C is total cost and h is hours. Systems of equations arise when two conditions must be true simultaneously — set up two equations and solve by substitution or elimination."
        },
        {
          "id": "sat-prep-101-l01-c3",
          "title": "Functions and Notation",
          "content": "A function assigns exactly one output to each input. When you see f(x) = 2x + 3, the notation f(x) means 'the output of function f when the input is x.' To evaluate f(4), replace every x with 4: f(4) = 2(4) + 3 = 11. The SAT tests function composition (f(g(x))), interpreting graphs of functions, and understanding domain and range. On a graph, f(x) = 0 is where the curve crosses the x-axis (the zeros or roots). The y-intercept is f(0) — the output when x equals zero."
        }
      ],
      "flashcards": [
        {
          "id": "sat-prep-101-l01-f1",
          "front": "Slope-intercept form",
          "back": "y = mx + b, where m is the slope (rise over run) and b is the y-intercept (where the line crosses the y-axis)"
        },
        {
          "id": "sat-prep-101-l01-f2",
          "front": "Systems of equations",
          "back": "Two or more equations with the same variables that must be true simultaneously. Solve by substitution (solve one equation for a variable, plug into the other) or elimination (add/subtract equations to cancel a variable)."
        },
        {
          "id": "sat-prep-101-l01-f3",
          "front": "Function notation f(x)",
          "back": "f(x) represents the output of function f for input x. To evaluate, substitute the input value for x in the expression. Example: if f(x) = 3x - 1, then f(5) = 14."
        },
        {
          "id": "sat-prep-101-l01-f4",
          "front": "Linear equation",
          "back": "An equation whose graph is a straight line. Standard form: ax + b = c. Slope-intercept form: y = mx + b."
        },
        {
          "id": "sat-prep-101-l01-f5",
          "front": "Y-intercept",
          "back": "The point where a line crosses the y-axis (x = 0). In y = mx + b, the y-intercept is b."
        }
      ],
      "learningAids": [
        {
          "id": "sat-prep-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "sat-prep-101-l02",
      "title": "SAT Math — Problem Solving & Data Analysis",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Solve problems involving ratios, proportions, and percentages",
        "Read and interpret data from tables, charts, and scatterplots",
        "Calculate and compare mean, median, and mode"
      ],
      "chunks": [
        {
          "id": "sat-prep-101-l02-c1",
          "title": "Ratios, Proportions, and Percentages",
          "content": "A ratio compares two quantities — if there are 3 cats and 5 dogs, the ratio is 3:5 or 3/5. A proportion states that two ratios are equal: a/b = c/d. Cross-multiply to solve: ad = bc. For percentages, remember that 'percent' means 'per hundred.' To find 15% of 200: multiply 200 × 0.15 = 30. Percentage change = ((new - old) / old) × 100. Example: a price goes from $40 to $50 — the percentage increase is ((50 - 40) / 40) × 100 = 25%. The SAT loves multi-step percentage problems, so always identify the base (the 'of' quantity) carefully."
        },
        {
          "id": "sat-prep-101-l02-c2",
          "title": "Reading Tables, Charts, and Scatterplots",
          "content": "The SAT presents data in bar graphs, line graphs, pie charts, two-way tables, and scatterplots. For tables, read row and column headers carefully — many errors come from reading the wrong row. For scatterplots, look at the overall trend: an upward pattern indicates positive correlation (as x increases, y increases), a downward pattern indicates negative correlation, and no pattern means no correlation. A line of best fit approximates the trend. To make predictions, find the x-value on the line and read the corresponding y-value. Always check axis labels and units."
        },
        {
          "id": "sat-prep-101-l02-c3",
          "title": "Probability and Statistics Basics",
          "content": "Mean (average) = sum of all values ÷ number of values. Median = the middle value when data is ordered from least to greatest (if there is an even number of values, average the two middle numbers). Mode = the value that appears most often. The SAT tests your ability to choose the right measure: the mean is sensitive to outliers, while the median is resistant. Probability = favorable outcomes ÷ total possible outcomes. Example: if a bag has 4 red and 6 blue marbles, P(red) = 4/10 = 0.4 or 40%. Probabilities always range from 0 (impossible) to 1 (certain)."
        }
      ],
      "flashcards": [
        {
          "id": "sat-prep-101-l02-f1",
          "front": "Percentage change formula",
          "back": "((New Value - Old Value) / Old Value) × 100. A positive result is a percentage increase; negative is a decrease."
        },
        {
          "id": "sat-prep-101-l02-f2",
          "front": "Median vs. Mean",
          "back": "Mean is the arithmetic average (sum ÷ count). Median is the middle value in sorted data. Median is preferred when outliers are present because it is not affected by extreme values."
        },
        {
          "id": "sat-prep-101-l02-f3",
          "front": "Scatterplot correlation",
          "back": "Positive correlation: points trend upward (both variables increase together). Negative correlation: points trend downward (one increases, the other decreases). No correlation: no visible pattern."
        },
        {
          "id": "sat-prep-101-l02-f4",
          "front": "Ratio",
          "back": "A comparison of two quantities. If there are 3 cats and 5 dogs, the ratio is 3:5 or 3/5."
        },
        {
          "id": "sat-prep-101-l02-f5",
          "front": "Probability",
          "back": "The chance of an event occurring. P = favorable outcomes ÷ total outcomes. Always between 0 (impossible) and 1 (certain)."
        }
      ],
      "learningAids": [
        {
          "id": "sat-prep-101-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "sat-prep-101-interactive-lab",
      "title": "SAT Prep Foundations Practice Lab",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Summarize the key idea from SAT Prep Foundations in one concise statement.",
          "Apply that idea to one realistic Exam Prep scenario and justify your choice.",
          "Reflect on one mistake to avoid in your next attempt."
        ]
      },
      "interactiveActivities": [
        {
          "id": "sat-prep-101-interactive-lab-act1",
          "type": "scenario_practice",
          "title": "Guided Scenario Drill",
          "description": "Work through a realistic prompt, explain your reasoning, and compare your answer with a model approach."
        }
      ],
      "learningAids": [
        {
          "id": "sat-prep-101-interactive-lab-a1",
          "type": "practice",
          "title": "Practice Playbook",
          "content": "Use Explain -> Apply -> Reflect to complete this Exam Prep practice lab with clear reasoning."
        }
      ]
    },
    {
      "id": "sat-prep-101-l03",
      "title": "SAT Math Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate mastery of linear equations and algebraic problem solving",
        "Apply data analysis and percentage skills to SAT-style questions"
      ],
      "questions": [
        {
          "id": "sat-prep-101-l03-q1",
          "text": "If 3x + 7 = 22, what is the value of x?",
          "skillId": "sat-prep-101-skill-math",
          "options": [
            {
              "id": "a",
              "text": "5"
            },
            {
              "id": "b",
              "text": "3"
            },
            {
              "id": "c",
              "text": "7"
            },
            {
              "id": "d",
              "text": "15"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Subtract 7 from both sides: 3x = 15. Divide both sides by 3: x = 5."
        },
        {
          "id": "sat-prep-101-l03-q2",
          "text": "A survey of 200 students found that 45 prefer soccer, 80 prefer basketball, and the rest prefer baseball. According to the data, what percentage of students prefer baseball?",
          "skillId": "sat-prep-101-skill-math",
          "options": [
            {
              "id": "a",
              "text": "22.5%"
            },
            {
              "id": "b",
              "text": "37.5%"
            },
            {
              "id": "c",
              "text": "40%"
            },
            {
              "id": "d",
              "text": "62.5%"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Students who prefer baseball = 200 - 45 - 80 = 75. Percentage = (75 / 200) × 100 = 37.5%."
        },
        {
          "id": "sat-prep-101-l03-q3",
          "text": "A store increases the price of a jacket from $80 to $100. What is the percentage increase?",
          "skillId": "sat-prep-101-skill-math",
          "options": [
            {
              "id": "a",
              "text": "20%"
            },
            {
              "id": "b",
              "text": "25%"
            },
            {
              "id": "c",
              "text": "30%"
            },
            {
              "id": "d",
              "text": "80%"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Percentage increase = ((100 - 80) / 80) × 100 = (20 / 80) × 100 = 25%."
        },
        {
          "id": "sat-prep-101-l03-q4",
          "text": "If y = 2x + 5, what is the value of y when x = 3?",
          "skillId": "sat-prep-101-skill-math",
          "options": [
            {
              "id": "a",
              "text": "8"
            },
            {
              "id": "b",
              "text": "11"
            },
            {
              "id": "c",
              "text": "10"
            },
            {
              "id": "d",
              "text": "6"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Substitute x = 3 into y = 2(3) + 5 = 6 + 5 = 11."
        },
        {
          "id": "sat-prep-101-l03-q5",
          "text": "A bag contains 5 red marbles and 15 blue marbles. What is the probability of randomly selecting a red marble?",
          "skillId": "sat-prep-101-skill-math",
          "options": [
            {
              "id": "a",
              "text": "1/4"
            },
            {
              "id": "b",
              "text": "1/3"
            },
            {
              "id": "c",
              "text": "3/4"
            },
            {
              "id": "d",
              "text": "1/5"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Probability = favorable outcomes ÷ total outcomes = 5/20 = 1/4."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 3,
        "bloomProfile": {
          "remember": 1,
          "apply": 2
        }
      },
      "learningAids": [
        {
          "id": "sat-prep-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "sat-prep-101-l04",
      "title": "SAT Reading & Writing",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Identify main ideas, make inferences, and determine vocabulary meaning from context",
        "Recognize and correct errors in grammar, punctuation, and sentence structure",
        "Use textual evidence to support answers"
      ],
      "chunks": [
        {
          "id": "sat-prep-101-l04-c1",
          "title": "Evidence-Based Reading",
          "content": "The SAT Reading section tests your ability to understand complex passages — not memorize facts. Every correct answer is supported by evidence in the text. For main idea questions, focus on the first and last sentences of each paragraph to identify the author's central argument. Inference questions ask what the passage implies, not what it states directly — look for clues and draw logical conclusions. Vocabulary-in-context questions give you a word and ask which meaning fits. Ignore the definition you know best and re-read the sentence, plugging in each answer choice to see which one preserves the original meaning."
        },
        {
          "id": "sat-prep-101-l04-c2",
          "title": "Writing Conventions",
          "content": "The SAT Writing section tests standard English conventions. Subject-verb agreement: the verb must match the subject in number — 'The list of items is long' (not 'are'), because the subject is 'list,' not 'items.' Commas separate items in a list, set off introductory phrases, and enclose non-essential information. Semicolons join two independent clauses without a conjunction: 'She studied hard; she earned an A.' Sentence fragments lack a subject or verb — they are always incorrect on the SAT. Run-on sentences join two independent clauses without proper punctuation — fix with a period, semicolon, or comma plus a conjunction."
        },
        {
          "id": "sat-prep-101-l04-c3",
          "title": "Command of Evidence",
          "content": "Many SAT questions ask you to identify which part of the passage best supports your previous answer. These 'command of evidence' questions are paired: the first question asks what the passage says or implies, and the second asks you to choose the lines that prove it. Strategy: answer the evidence question first. Read each cited portion and ask which one directly supports a claim. If no answer choice supports your answer to the first question, reconsider your first answer. Always underline or annotate key phrases as you read the passage — this makes finding evidence faster and more accurate."
        }
      ],
      "flashcards": [
        {
          "id": "sat-prep-101-l04-f1",
          "front": "Inference (reading)",
          "back": "A conclusion drawn from evidence in the text that is not explicitly stated. On the SAT, the correct inference is always strongly supported by specific details in the passage."
        },
        {
          "id": "sat-prep-101-l04-f2",
          "front": "Subject-verb agreement",
          "back": "The verb must match its subject in number. Watch for tricky cases: prepositional phrases between subject and verb ('The box of chocolates is here'), and inverted sentence order."
        },
        {
          "id": "sat-prep-101-l04-f3",
          "front": "Semicolon rule",
          "back": "A semicolon joins two independent clauses (complete sentences) without a coordinating conjunction. Each side of the semicolon must be able to stand alone as a sentence."
        }
      ]
    },
    {
      "id": "sat-prep-101-l05",
      "title": "SAT Strategy & Time Management",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Understand SAT structure, timing, scoring, and the no-penalty guessing rule",
        "Develop pacing strategies for each section",
        "Apply process of elimination to improve accuracy on difficult questions"
      ],
      "chunks": [
        {
          "id": "sat-prep-101-l05-c1",
          "title": "Test Structure and Scoring",
          "content": "The SAT has two main sections: Evidence-Based Reading and Writing (EBRW) and Math. Each section is scored on a scale of 200 to 800, giving a total score range of 400 to 1600. The Reading and Writing section includes reading comprehension passages and grammar/editing questions. The Math section covers algebra, problem solving, data analysis, and advanced math — a portion allows calculator use and a portion does not. There is no penalty for wrong answers, so you should never leave a question blank. Even a random guess gives you a 25% chance of earning a point."
        },
        {
          "id": "sat-prep-101-l05-c2",
          "title": "Pacing Strategies",
          "content": "Time management is critical on the SAT. In the Reading section, you have roughly 13 minutes per passage (5 passages, 65 minutes total). In the Writing section, you have about 9 minutes per passage (4 passages, 35 minutes). In Math, aim for about 75 seconds per question on the no-calculator section and about 85 seconds on the calculator section. Key strategy: do not get stuck. If a question takes more than 90 seconds, mark it, make your best guess, and move on. Return to marked questions if time permits. Easy questions are worth the same as hard ones, so answer all the ones you know first."
        },
        {
          "id": "sat-prep-101-l05-c3",
          "title": "Process of Elimination",
          "content": "On multiple-choice questions with four answer choices, random guessing gives you a 25% chance of being correct. But if you can eliminate just one wrong answer, your odds jump to 33%. Eliminate two, and you are at 50%. Strategy: read all four answer choices before selecting one. Cross out answers that are clearly wrong — look for extreme language ('always,' 'never'), answers that contradict the passage, or options that are true but don't answer the specific question asked. On math questions, plug answer choices back into the problem (backsolving) to test which one works."
        }
      ],
      "flashcards": [
        {
          "id": "sat-prep-101-l05-f1",
          "front": "Process of elimination",
          "back": "A test-taking strategy where you remove clearly wrong answers before guessing. Eliminating even one choice increases your odds from 25% to 33%; eliminating two raises it to 50%."
        },
        {
          "id": "sat-prep-101-l05-f2",
          "front": "Pacing strategy",
          "back": "Budget roughly 75–90 seconds per question. If a question takes longer, mark it, guess, and move on. Answer all questions you know first — every question is worth the same number of points."
        },
        {
          "id": "sat-prep-101-l05-f3",
          "front": "SAT scoring",
          "back": "Each section (EBRW and Math) is scored 200–800, for a total of 400–1600. There is no penalty for wrong answers, so never leave a question blank."
        }
      ]
    },
    {
      "id": "sat-prep-101-l06",
      "title": "SAT Prep Final Assessment",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Apply grammar and editing knowledge to identify correct sentences",
        "Solve algebra problems under test-like conditions",
        "Demonstrate understanding of reading comprehension strategies"
      ],
      "questions": [
        {
          "id": "sat-prep-101-l06-q1",
          "text": "Which of the following sentences is punctuated correctly?",
          "skillId": "sat-prep-101-skill-verbal",
          "options": [
            {
              "id": "a",
              "text": "The experiment failed, the researchers revised their hypothesis."
            },
            {
              "id": "b",
              "text": "The experiment failed; the researchers revised their hypothesis."
            },
            {
              "id": "c",
              "text": "The experiment failed the researchers revised their hypothesis."
            },
            {
              "id": "d",
              "text": "The experiment failed: and the researchers revised their hypothesis."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A semicolon correctly joins two independent clauses ('The experiment failed' and 'the researchers revised their hypothesis'). Option A is a comma splice. Option C is a run-on. Option D misuses the colon before a conjunction."
        },
        {
          "id": "sat-prep-101-l06-q2",
          "text": "If 2(x - 3) + 4 = 18, what is the value of x?",
          "skillId": "sat-prep-101-skill-math",
          "options": [
            {
              "id": "a",
              "text": "7"
            },
            {
              "id": "b",
              "text": "10"
            },
            {
              "id": "c",
              "text": "8"
            },
            {
              "id": "d",
              "text": "14"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Distribute: 2x - 6 + 4 = 18. Simplify: 2x - 2 = 18. Add 2: 2x = 20. Divide by 2: x = 10."
        },
        {
          "id": "sat-prep-101-l06-q3",
          "text": "When answering an SAT reading question that asks 'Which choice provides the best evidence for the answer to the previous question?', what is the most effective strategy?",
          "skillId": "sat-prep-101-skill-verbal",
          "options": [
            {
              "id": "a",
              "text": "Choose the longest quoted passage because it contains the most detail"
            },
            {
              "id": "b",
              "text": "Read the evidence choices first to see which one directly supports a claim, then answer both questions together"
            },
            {
              "id": "c",
              "text": "Skip the evidence question and focus only on the first question"
            },
            {
              "id": "d",
              "text": "Always pick the first evidence choice that mentions a keyword from the question"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Working the evidence question first is a proven strategy. By reading each cited portion, you can identify which one directly supports a specific claim, then confirm your answer to the paired question. This prevents choosing an answer with no textual support."
        },
        {
          "id": "sat-prep-101-l06-q4",
          "text": "Which sentence correctly uses subject-verb agreement?",
          "skillId": "sat-prep-101-skill-verbal",
          "options": [
            {
              "id": "a",
              "text": "The group of students are studying."
            },
            {
              "id": "b",
              "text": "The group of students is studying."
            },
            {
              "id": "c",
              "text": "The group of students were studying."
            },
            {
              "id": "d",
              "text": "The group of students been studying."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The subject is 'group' (singular), not 'students.' A singular subject takes a singular verb: 'is studying.'"
        },
        {
          "id": "sat-prep-101-l06-q5",
          "text": "If you cannot solve an SAT question within 90 seconds, what should you do?",
          "skillId": "sat-prep-101-skill-verbal",
          "options": [
            {
              "id": "a",
              "text": "Leave it blank"
            },
            {
              "id": "b",
              "text": "Spend as much time as needed"
            },
            {
              "id": "c",
              "text": "Mark it, make your best guess, and move on"
            },
            {
              "id": "d",
              "text": "Skip all remaining questions"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Mark it, guess, and return later if time permits. There is no penalty for wrong answers, so never leave a question blank."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 3,
        "bloomProfile": {
          "apply": 2,
          "analyze": 1
        }
      }
    }
  ]
};
