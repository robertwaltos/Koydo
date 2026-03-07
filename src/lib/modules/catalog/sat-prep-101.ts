import type { LearningModule } from "@/lib/modules/types";

export const sat_prep_101_Module: LearningModule = {
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
  "version": "1.1.0",
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
          "content": "The 'Heart of Algebra' section makes up about a third of the SAT math test. It focuses on linear equations and inequalities. A linear equation, like `2x + 5 = 13`, involves a variable (like 'x') that isn't squared or cubed. To solve it, your goal is to get the variable by itself. For `2x + 5 = 13`, you'd first subtract 5 from both sides to get `2x = 8`, then divide by 2 to find that `x = 4`. Linear inequalities are similar, but use symbols like < or >. There's one crucial rule to remember: if you multiply or divide both sides of an inequality by a negative number, you must flip the inequality sign. For example, solving `-3x > 12` requires dividing by -3, which flips the sign to get `x < -4`. Mastering these skills is the first step to acing the SAT math section.",
          "visualPrompt": "An animation showing the steps to solve `2x + 5 = 13`. The '-5' appears on both sides, then the '/2' appears on both sides, isolating 'x'."
        },
        {
          "id": "sat-prep-101-l01-c2",
          "title": "Translating Word Problems",
          "content": "The SAT uses word problems to test your algebra skills in real-world scenarios. The key is to translate words into math. Look for keywords: 'is' usually means '=', 'of' means multiply, 'per' means divide, 'more than' means add, and 'less than' means subtract. For example, if a plumber charges a $50 flat fee plus $35 per hour, you can model the total cost (C) for 'h' hours with the equation `C = 35h + 50`. Sometimes, a problem will have two conditions that must be true at the same time, which means you'll need to set up and solve a system of two equations using methods like substitution or elimination.",
          "visualPrompt": "A graphic organizer with two columns. Left column: 'Keywords' (is, of, per, more than). Right column: 'Math Symbol' (=, x, /, +)."
        },
        {
          "id": "sat-prep-101-l01-c3",
          "title": "Functions and Notation",
          "content": "A function is like a machine: you put in a number (the input), and it gives you exactly one number back (the output). We use function notation like `f(x)` to describe this. For example, if you have the function `f(x) = 2x + 3`, the `f(x)` represents the output. To find `f(4)`, you just plug 4 in for 'x': `f(4) = 2(4) + 3`, which simplifies to `8 + 3 = 11`. On the SAT, you'll also need to understand function graphs. The points where a graph crosses the x-axis are its 'zeros' or 'roots'—this is where `f(x) = 0`. The point where it crosses the y-axis is the y-intercept, which you find by calculating `f(0)`.",
          "visualPrompt": "An animation of a 'function machine'. The number 4 goes in one side, the machine shows '2(x) + 3', and the number 11 comes out the other side."
        }
      ],
      "flashcards": [
        {
          "id": "sat-prep-101-l01-f1",
          "front": "Slope-intercept form",
          "back": "y = mx + b, where m is the slope (rise over run) and b is the y-intercept (where the line crosses the y-axis)."
        },
        {
          "id": "sat-prep-101-l01-f2",
          "front": "Systems of equations",
          "back": "Two or more equations with the same variables. Solve by substitution (solve one equation for a variable, plug into the other) or elimination (add/subtract equations to cancel a variable)."
        },
        {
          "id": "sat-prep-101-l01-f3",
          "front": "Function notation f(x)",
          "back": "f(x) represents the output of function f for input x. To evaluate, substitute the input value for x in the expression. Example: if f(x) = 3x - 1, then f(5) = 14."
        },
        {
          "id": "sat-prep-101-l01-f4",
          "front": "Inequality Rule",
          "back": "When you multiply or divide both sides of an inequality by a negative number, you must flip the direction of the inequality sign."
        },
        {
          "id": "sat-prep-101-l01-f5",
          "front": "Y-intercept",
          "back": "The point where a line crosses the y-axis (where x = 0). In y = mx + b, the y-intercept is b. To find it from a function, calculate f(0)."
        }
      ],
      "learningAids": [
        {
          "id": "sat-prep-101-l01-a1",
          "type": "image",
          "title": "Algebra Cheat Sheet",
          "content": "A one-page visual summary of key formulas and rules from the lesson, including slope-intercept form and function notation."
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
          "content": "Ratios, proportions, and percentages are all about comparing quantities. A ratio compares two numbers, like 3 cats to 5 dogs (written as 3:5 or 3/5). A proportion is an equation stating that two ratios are equal, like `a/b = c/d`. You can solve these by cross-multiplying to get `ad = bc`. A percentage is just a special ratio that means 'per hundred.' To find 15% of 200, you convert 15% to a decimal (0.15) and multiply: `0.15 * 200 = 30`. You'll also need to calculate percentage change using the formula: `((New - Old) / Old) * 100`. For example, if a price goes from $40 to $50, the change is `((50 - 40) / 40) * 100`, which is a 25% increase.",
          "visualPrompt": "A simple infographic showing the relationship: Ratio (3/5) -> Proportion (3/5 = 6/10) -> Percentage (60/100 = 60%)."
        },
        {
          "id": "sat-prep-101-l02-c2",
          "title": "Reading Tables, Charts, and Scatterplots",
          "content": "The SAT uses various graphs and tables to present data. When you see a table, always read the row and column headers carefully to avoid simple mistakes. For scatterplots, look at the overall trend of the points. If they go up from left to right, it's a positive correlation (as one variable increases, so does the other). If they go down, it's a negative correlation. If they're scattered randomly, there's no correlation. A 'line of best fit' is often drawn on a scatterplot to show this trend and help you make predictions. Always double-check the labels on the x and y axes to understand what is being measured.",
          "visualPrompt": "Side-by-side images of three scatterplots labeled 'Positive Correlation,' 'Negative Correlation,' and 'No Correlation'."
        },
        {
          "id": "sat-prep-101-l02-c3",
          "title": "Probability and Statistics Basics",
          "content": "You'll need to know three key statistical measures: mean, median, and mode. Let's use the dataset {2, 3, 3, 6, 11}. The **mean** is the average; you add all the numbers and divide by how many there are: `(2+3+3+6+11) / 5 = 5`. The **median** is the middle number when the data is in order. In our set, the middle number is 3. If there were an even number of values, you'd average the two middle ones. The **mode** is the number that appears most often, which is 3 in our example. The mean can be skewed by very high or low numbers (outliers), while the median is not. Probability is the chance of an event happening, calculated as `Favorable Outcomes / Total Possible Outcomes`. If a bag has 4 red and 6 blue marbles (10 total), the probability of picking a red one is 4/10, or 40%.",
          "visualPrompt": "A graphic showing the dataset {2, 3, 3, 6, 11} with arrows pointing to the 'Mean (5)', 'Median (3)', and 'Mode (3)' with brief calculation callouts."
        }
      ],
      "flashcards": [
        {
          "id": "sat-prep-101-l02-f1",
          "front": "Percentage change formula",
          "back": "((New Value - Old Value) / Old Value) × 100. A positive result is a percentage increase; a negative result is a decrease."
        },
        {
          "id": "sat-prep-101-l02-f2",
          "front": "Median vs. Mean",
          "back": "Mean is the average. Median is the middle value in a sorted list. The median is less affected by extreme outliers."
        },
        {
          "id": "sat-prep-101-l02-f3",
          "front": "Scatterplot correlation",
          "back": "Positive correlation: points trend upward. Negative correlation: points trend downward. No correlation: no visible pattern."
        },
        {
          "id": "sat-prep-101-l02-f4",
          "front": "Proportion",
          "back": "An equation where two ratios are equal (e.g., a/b = c/d). Solve by cross-multiplying."
        },
        {
          "id": "sat-prep-101-l02-f5",
          "front": "Probability",
          "back": "The chance of an event occurring. P = (Favorable Outcomes) / (Total Possible Outcomes). Always a value between 0 (impossible) and 1 (certain)."
        }
      ],
      "learningAids": [
        {
          "id": "sat-prep-101-l02-a1",
          "type": "image",
          "title": "Data Viz Guide",
          "content": "A visual guide showing examples of a scatterplot, bar chart, and two-way table with labels pointing out key features to read."
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
          "explanation": "Substitute x = 3 into the equation: y = 2(3) + 5 = 6 + 5 = 11."
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
          "explanation": "Total marbles = 5 + 15 = 20. Probability = (favorable outcomes) / (total outcomes) = 5/20 = 1/4."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 5,
        "bloomProfile": {
          "remember": 2,
          "apply": 3
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
          "content": "The SAT Reading section tests your ability to understand and analyze passages, not just memorize facts. Every correct answer is supported by direct evidence in the text. For 'main idea' questions, pay close attention to the first and last sentences of each paragraph, as they often summarize the key points. 'Inference' questions ask you to read between the lines—use clues from the text to make a logical conclusion. For 'vocabulary-in-context' questions, don't just pick the definition you know. Instead, substitute each answer choice into the sentence to see which one fits the meaning of the passage best.",
          "visualPrompt": "An excerpt from a reading passage with the first and last sentences of a paragraph highlighted, with a callout box saying 'Look here for the main idea!'"
        },
        {
          "id": "sat-prep-101-l04-c2",
          "title": "Writing Conventions",
          "content": "The Writing section tests your knowledge of standard English grammar rules. A key rule is **subject-verb agreement**: a singular subject needs a singular verb. For example, 'The *list* of items *is* long' (the subject is 'list,' not 'items'). You also need to know punctuation. **Commas** separate items in a list and set off introductory or non-essential phrases. **Semicolons** connect two closely related complete sentences without a conjunction (like 'and' or 'but'). For example: 'She studied hard; she earned an A.' Finally, watch out for **sentence fragments** (incomplete thoughts) and **run-on sentences** (two sentences improperly joined), as they are always incorrect.",
          "visualPrompt": "A split-screen graphic. Left side shows a red 'X' over a sentence fragment: 'Running through the park.' Right side shows a green checkmark next to a complete sentence: 'The dog was running through the park.'"
        },
        {
          "id": "sat-prep-101-l04-c3",
          "title": "Command of Evidence",
          "content": "Many SAT Reading questions come in pairs. The first asks about the passage, and the second, a 'command of evidence' question, asks you to identify which lines from the text best support your answer to the first question. A great strategy is to look at the evidence choices for the second question *first*. Read the four quoted options and see which one provides clear support for a specific claim. Then, go back and answer the first question. This ensures your answer is directly backed by the text. If none of the evidence choices support your initial idea, you may need to reconsider your answer to the first question.",
          "visualPrompt": "An image showing a sample SAT question pair. An arrow points from the second (evidence) question to the first question with the text 'Use this to help answer this!'"
        }
      ],
      "flashcards": [
        {
          "id": "sat-prep-101-l04-f1",
          "front": "Inference (reading)",
          "back": "A conclusion drawn from evidence in the text that is not explicitly stated. The correct inference is always strongly supported by details in the passage."
        },
        {
          "id": "sat-prep-101-l04-f2",
          "front": "Subject-verb agreement",
          "back": "The verb must match its subject in number. Watch for prepositional phrases between the subject and verb (e.g., 'The box of chocolates is here')."
        },
        {
          "id": "sat-prep-101-l04-f3",
          "front": "Semicolon rule",
          "back": "A semicolon joins two independent clauses (complete sentences) that are closely related. Each side of the semicolon must be able to stand alone."
        },
        {
          "id": "sat-prep-101-l04-f4",
          "front": "Vocabulary-in-Context",
          "back": "A question type that asks for the meaning of a word as it's used in the passage. Strategy: substitute the answer choices into the sentence to see which one fits best."
        },
        {
          "id": "sat-prep-101-l04-f5",
          "front": "Comma Splice",
          "back": "An error where two independent clauses are joined only by a comma. Fix it with a period, semicolon, or a comma plus a conjunction (e.g., and, but, so)."
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
          "content": "The SAT has two main sections: Evidence-Based Reading & Writing (EBRW) and Math. Each is scored from 200 to 800, making the total score range from 400 to 1600. The Math section has two parts: one where you can use a calculator and one where you can't. A crucial rule to know is that there is **no penalty for guessing**. You don't lose points for wrong answers. This means you should never leave a question blank. Even a random guess gives you a 1-in-4 chance of being right, so always fill in an answer for every question.",
          "visualPrompt": "A simple diagram showing 'SAT Score = (EBRW Score: 200-800) + (Math Score: 200-800) = Total: 400-1600'."
        },
        {
          "id": "sat-prep-101-l05-c2",
          "title": "Pacing Strategies",
          "content": "Good pacing is key to finishing the SAT on time. As a general guideline, aim to spend about 75-90 seconds per question across all sections. For the Reading section, this means about 13 minutes per passage. For Writing, it's about 9 minutes per passage. The most important strategy is to not get stuck. If a question is taking too long, mark it, make your best educated guess, and move on. You can always come back if you have time at the end. Remember, easy questions are worth the same as hard ones, so answer all the ones you know first to secure those points.",
          "visualPrompt": "A simple table showing the SAT sections (Reading, Writing, Math No-Calc, Math Calc) and the recommended time per question for each."
        },
        {
          "id": "sat-prep-101-l05-c3",
          "title": "Process of Elimination",
          "content": "Process of elimination is your most powerful tool on a multiple-choice test. With four options, a random guess has a 25% chance of being correct. If you can confidently eliminate just one wrong answer, your odds jump to 33%. Eliminate two, and you have a 50/50 shot. Look for answer choices that are obviously wrong. These might contain extreme words like 'always' or 'never,' contradict the passage, or be true but not actually answer the question being asked. For math problems, you can sometimes use a technique called 'backsolving'—plug the answer choices back into the problem to see which one works.",
          "visualPrompt": "A multiple-choice question with four options (A, B, C, D). Options B and D are crossed out with a red 'X', and a caption reads: 'Now it's a 50/50 guess!'"
        }
      ],
      "flashcards": [
        {
          "id": "sat-prep-101-l05-f1",
          "front": "Process of elimination",
          "back": "A test-taking strategy where you remove clearly wrong answers before guessing. Eliminating one choice increases your odds from 25% to 33%; eliminating two raises it to 50%."
        },
        {
          "id": "sat-prep-101-l05-f2",
          "front": "Pacing strategy",
          "back": "Budget roughly 75–90 seconds per question. If a question takes longer, mark it, guess, and move on. Answer easy questions first, as all questions are worth the same."
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
          "explanation": "A semicolon correctly joins two independent clauses ('The experiment failed' and 'the researchers revised their hypothesis'). Option A is a comma splice. Option C is a run-on sentence. Option D misuses the colon."
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
          "explanation": "Distribute the 2: 2x - 6 + 4 = 18. Simplify: 2x - 2 = 18. Add 2 to both sides: 2x = 20. Divide by 2: x = 10."
        },
        {
          "id": "sat-prep-101-l06-q3",
          "text": "When answering an SAT reading question that asks 'Which choice provides the best evidence for the answer to the previous question?', what is the most effective strategy?",
          "skillId": "sat-prep-101-skill-verbal",
          "options": [
            {
              "id": "a",
              "text": "Choose the longest quoted passage because it contains the most detail."
            },
            {
              "id": "b",
              "text": "Read the evidence choices first to see which one directly supports a claim, then answer both questions together."
            },
            {
              "id": "c",
              "text": "Skip the evidence question and focus only on the first question."
            },
            {
              "id": "d",
              "text": "Always pick the first evidence choice that mentions a keyword from the question."
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
              "text": "Leave it blank."
            },
            {
              "id": "b",
              "text": "Spend as much time as needed to solve it."
            },
            {
              "id": "c",
              "text": "Mark it, make your best guess, and move on."
            },
            {
              "id": "d",
              "text": "Skip the rest of the section."
            }
          ],
          "correctOptionId": "c",
          "explanation": "The best strategy is to mark the question, make an educated guess, and move on to ensure you have time for other questions. You can return later if time permits. Never leave a question blank, as there is no penalty for wrong answers."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 5,
        "bloomProfile": {
          "apply": 4,
          "analyze": 1
        }
      },
      "learningAids": [
        {
          "id": "sat-prep-101-l06-a1",
          "type": "image",
          "title": "Final Checklist",
          "content": "A visual checklist summarizing key strategies: Pace yourself, Process of Elimination, No blank answers, Check your work."
        }
      ]
    }
  ]
};
