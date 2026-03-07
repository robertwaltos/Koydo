import type { LearningModule } from "@/lib/modules/types";

export const gcse_prep_101_Module: LearningModule = {
  "id": "gcse-prep-101",
  "title": "GCSE Prep Foundations",
  "description": "Prepare for your core GCSE papers with structured revision, exam techniques, and targeted practice.",
  "subject": "Exam Prep",
  "tags": [
    "gcse",
    "exam-prep",
    "revision",
    "study-skills"
  ],
  "minAge": 14,
  "maxAge": 18,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Create a personal, effective revision schedule.",
    "Improve speed and accuracy under timed exam conditions.",
    "Learn how to spot weak areas and fix them with targeted practice."
  ],
  "quizBlueprint": {
    "frequency": "weekly_assessment",
    "questionsPerCheck": 20,
    "totalQuestions": 20,
    "timeLimitMinutes": 25,
    "questionTypes": [
      {
        "type": "mcq_single",
        "percentage": 100,
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
      "easy": 6,
      "medium": 10,
      "hard": 4
    },
    "feedbackMode": "after_submit",
    "adaptive": false,
    "masteryThreshold": 0.8
  },
  "lessons": [
    {
      "id": "gcse-prep-101-l01",
      "title": "Introduction: Mastering Your GCSEs",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gcse-prep-101-l01-a1",
          "type": "image",
          "title": "The GCSE Journey Map",
          "content": "An infographic showing the key stages of GCSE preparation, from planning to exam day."
        },
        {
          "id": "gcse-prep-101-l01-a2",
          "type": "animation",
          "title": "From 'Stressed' to 'Prepared'",
          "content": "A short animation showing a student transforming their messy desk and revision chaos into a structured, confident plan."
        }
      ]
    },
    {
      "id": "gcse-prep-101-l02",
      "title": "Pathway Planning: Building Your Revision Timetable",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Identify your strongest and weakest subjects.",
          "Allocate revision time based on subject importance and your confidence level.",
          "Create a draft revision schedule for one week."
        ]
      },
      "interactiveActivities": [
        {
          "id": "gcse-prep-101-l02-ia1",
          "type": "drag_and_drop",
          "title": "Timetable Builder",
          "description": "Drag subjects into a weekly calendar to build a balanced revision plan.",
          "estimatedMinutes": 10,
          "difficultyLevel": "easy",
          "instructions": [
            "Drag each subject block into a time slot.",
            "Ensure you balance core subjects with breaks.",
            "Save your draft timetable."
          ],
          "data": {
            "targets": [
              {
                "id": "monday",
                "label": "Monday"
              },
              {
                "id": "tuesday",
                "label": "Tuesday"
              },
              {
                "id": "wednesday",
                "label": "Wednesday"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Maths Practice (1hr)",
                "correctTargetId": "monday"
              },
              {
                "id": "d2",
                "label": "English Essay (1hr)",
                "correctTargetId": "tuesday"
              },
              {
                "id": "d3",
                "label": "Science Review (1hr)",
                "correctTargetId": "wednesday"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "gcse-prep-101-l02-a1",
          "type": "image",
          "title": "Example of a Balanced Timetable",
          "content": "A clear, color-coded weekly revision schedule that includes study blocks, breaks, and leisure time."
        }
      ]
    },
    {
      "id": "gcse-prep-101-l03",
      "title": "Core English: Language and Structure Techniques",
      "type": "quiz",
      "duration": 12,
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 5,
        "totalQuestions": 5,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 5,
            "pointsEach": 1,
            "bloomsLevels": [
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.8
      },
      "questions": [
        {
          "id": "gcse-prep-101-l03-q1",
          "text": "When analyzing a writer's use of language, what should be your primary focus?",
          "skillId": "english-analysis",
          "options": [
            {
              "id": "a",
              "text": "Listing as many literary devices as possible."
            },
            {
              "id": "b",
              "text": "Explaining the effect of the writer's choices on the reader."
            },
            {
              "id": "c",
              "text": "Summarizing the plot of the text."
            },
            {
              "id": "d",
              "text": "Writing a long introduction about the author."
            }
          ],
          "correctOptionId": "b",
          "hint": "It's not just about what the writer did, but *why* they did it.",
          "explanation": "Top marks are awarded for analyzing the *effect* of language choices, not just identifying them. This shows a deeper understanding of the text."
        },
        {
          "id": "gcse-prep-101-l03-q2",
          "text": "What is the purpose of using the PEE (Point, Evidence, Explain) structure in your answers?",
          "skillId": "english-structuring-answers",
          "options": [
            {
              "id": "a",
              "text": "To make your answer look longer."
            },
            {
              "id": "b",
              "text": "To ensure your answer is well-supported and clearly argued."
            },
            {
              "id": "c",
              "text": "To show the examiner you know a specific acronym."
            },
            {
              "id": "d",
              "text": "To avoid using quotations from the text."
            }
          ],
          "correctOptionId": "b",
          "hint": "Think about how each part of PEE contributes to a strong argument.",
          "explanation": "The PEE structure helps you make a clear point, back it up with evidence (a quote), and explain how that evidence proves your point, creating a logical and convincing argument."
        },
        {
          "id": "gcse-prep-101-l03-q3",
          "text": "If a question asks you to compare two texts, what is a common mistake to avoid?",
          "skillId": "english-comparison",
          "options": [
            {
              "id": "a",
              "text": "Discussing one text completely, then the other text completely."
            },
            {
              "id": "b",
              "text": "Using comparative words like 'similarly' or 'in contrast'."
            },
            {
              "id": "c",
              "text": "Finding both similarities and differences."
            },
            {
              "id": "d",
              "text": "Focusing on the ideas and themes in both texts."
            }
          ],
          "correctOptionId": "a",
          "hint": "A good comparison weaves the two texts together throughout the answer.",
          "explanation": "Simply discussing the texts separately is not a comparison. You need to integrate your points, directly comparing and contrasting aspects of both texts throughout your response."
        },
        {
          "id": "gcse-prep-101-l03-q4",
          "text": "What does the term 'subtext' refer to?",
          "skillId": "english-vocabulary",
          "options": [
            {
              "id": "a",
              "text": "The font size used in the text."
            },
            {
              "id": "b",
              "text": "The chapter titles of a book."
            },
            {
              "id": "c",
              "text": "The underlying, unspoken meaning or message."
            },
            {
              "id": "d",
              "text": "A summary of the text found online."
            }
          ],
          "correctOptionId": "c",
          "hint": "Think about what a character might mean, even if they don't say it directly.",
          "explanation": "Subtext is the implicit meaning in a text. Understanding it requires you to 'read between the lines' and analyze character motivations and themes."
        },
        {
          "id": "gcse-prep-101-l03-q5",
          "text": "When evaluating a text, what are you being asked to do?",
          "skillId": "english-evaluation",
          "options": [
            {
              "id": "a",
              "text": "Say whether you liked the text or not."
            },
            {
              "id": "b",
              "text": "Check the text for spelling mistakes."
            },
            {
              "id": "c",
              "text": "Make an informed judgment about how successfully the writer achieved their purpose."
            },
            {
              "id": "d",
              "text": "Rewrite the ending of the story."
            }
          ],
          "correctOptionId": "c",
          "hint": "Evaluation is about forming a critical judgment based on evidence.",
          "explanation": "To evaluate a text, you need to assess its effectiveness. This involves making a judgment supported by well-chosen evidence and detailed analysis of the writer's methods."
        }
      ]
    },
    {
      "id": "gcse-prep-101-l04",
      "title": "Core Maths: Non-Calculator Essentials",
      "type": "quiz",
      "duration": 12,
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 5,
        "totalQuestions": 5,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 5,
            "pointsEach": 1,
            "bloomsLevels": [
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.8
      },
      "questions": [
        {
          "id": "gcse-prep-101-l04-q1",
          "text": "You've finished a non-calculator practice paper and noticed several simple arithmetic mistakes. What's the best way to prevent this from happening next time?",
          "skillId": "maths-error-correction",
          "options": [
            {
              "id": "a",
              "text": "Move on to harder topics immediately."
            },
            {
              "id": "b",
              "text": "Only practice with a calculator from now on."
            },
            {
              "id": "c",
              "text": "Before the next practice, do a 5-minute drill on your weak areas (e.g., fractions) and review your error log."
            },
            {
              "id": "d",
              "text": "Hope that you'll be more careful next time."
            }
          ],
          "correctOptionId": "c",
          "hint": "Active practice is key to fixing recurring mistakes.",
          "explanation": "Actively reviewing your specific mistakes and warming up those skills right before the next practice session is the most effective way to stop repeating them."
        },
        {
          "id": "gcse-prep-101-l04-q2",
          "text": "For a multi-step problem, why is it crucial to show your working?",
          "skillId": "maths-method-marks",
          "options": [
            {
              "id": "a",
              "text": "It's not important if you get the final answer right."
            },
            {
              "id": "b",
              "text": "To make the page look full."
            },
            {
              "id": "c",
              "text": "To earn partial 'method marks' even if your final answer is wrong."
            },
            {
              "id": "d",
              "text": "To help you remember the formulas."
            }
          ],
          "correctOptionId": "c",
          "hint": "Examiners can award marks for correct steps, not just the final number.",
          "explanation": "Even if you make a calculation error at the end, showing a correct method can earn you most of the marks for a question. It's a vital exam technique."
        },
        {
          "id": "gcse-prep-101-l04-q3",
          "text": "When estimating an answer, for example 48.7 x 3.1, what is the best first step?",
          "skillId": "maths-estimation",
          "options": [
            {
              "id": "a",
              "text": "Try to multiply the numbers exactly as they are."
            },
            {
              "id": "b",
              "text": "Round each number to one significant figure (e.g., 50 x 3)."
            },
            {
              "id": "c",
              "text": "Use a calculator to find the exact answer."
            },
            {
              "id": "d",
              "text": "Guess an answer that seems reasonable."
            }
          ],
          "correctOptionId": "b",
          "hint": "Estimation is about making the calculation simpler while keeping it close to the real answer.",
          "explanation": "Rounding to one significant figure is the standard method for estimation. It simplifies the calculation (50 x 3 = 150) and gives you a good approximation to check your final answer against."
        },
        {
          "id": "gcse-prep-101-l04-q4",
          "text": "Which of these is a prime number?",
          "skillId": "maths-number-properties",
          "options": [
            {
              "id": "a",
              "text": "15"
            },
            {
              "id": "b",
              "text": "21"
            },
            {
              "id": "c",
              "text": "23"
            },
            {
              "id": "d",
              "text": "27"
            }
          ],
          "correctOptionId": "c",
          "hint": "A prime number has exactly two factors: 1 and itself.",
          "explanation": "23 can only be divided by 1 and 23. The other numbers have more factors (15 is 3x5, 21 is 3x7, 27 is 3x9)."
        },
        {
          "id": "gcse-prep-101-l04-q5",
          "text": "To simplify the fraction 18/24, what is the largest number you can divide both the top and bottom by?",
          "skillId": "maths-fractions",
          "options": [
            {
              "id": "a",
              "text": "2"
            },
            {
              "id": "b",
              "text": "3"
            },
            {
              "id": "c",
              "text": "6"
            },
            {
              "id": "d",
              "text": "9"
            }
          ],
          "correctOptionId": "c",
          "hint": "This is also known as finding the 'highest common factor'.",
          "explanation": "The highest common factor of 18 and 24 is 6. Dividing both parts of the fraction by 6 simplifies it to 3/4."
        }
      ]
    },
    {
      "id": "gcse-prep-101-l05",
      "title": "Core Maths: Calculator Skills and Checks",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Identify a common calculator input error.",
          "Use the 'answer' button to perform a multi-step calculation.",
          "Practice checking an answer using estimation."
        ]
      },
      "interactiveActivities": [
        {
          "id": "gcse-prep-101-l05-ia1",
          "type": "matching_pairs",
          "title": "Problem and Calculator Function",
          "description": "Match the mathematical problem to the most efficient calculator function.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the problem on the left.",
            "Find the best calculator key or function on the right.",
            "Match all pairs correctly."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Find the square root of 144"
              },
              {
                "id": "l2",
                "label": "Calculate 5 cubed"
              },
              {
                "id": "l3",
                "label": "Write 3/8 as a decimal"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "√ key"
              },
              {
                "id": "r2",
                "label": "x³ or ^ key"
              },
              {
                "id": "r3",
                "label": "S⇔D or a b/c key"
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
          "id": "gcse-prep-101-l05-a1",
          "type": "image",
          "title": "Calculator 'Sense Check'",
          "content": "A diagram showing a complex calculation on a calculator, with a quick estimation written beside it to check if the answer is reasonable."
        }
      ]
    },
    {
      "id": "gcse-prep-101-l06",
      "title": "Core Science: Applying Scientific Principles",
      "type": "quiz",
      "duration": 12,
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 5,
        "totalQuestions": 5,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 5,
            "pointsEach": 1,
            "bloomsLevels": [
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.8
      },
      "questions": [
        {
          "id": "gcse-prep-101-l06-q1",
          "text": "In an experiment, what is the role of a 'control variable'?",
          "skillId": "science-methodology",
          "options": [
            {
              "id": "a",
              "text": "It is the variable you are measuring."
            },
            {
              "id": "b",
              "text": "It is the variable you change to see what happens."
            },
            {
              "id": "c",
              "text": "It is a variable you keep the same to ensure a fair test."
            },
            {
              "id": "d",
              "text": "It is the final result of the experiment."
            }
          ],
          "correctOptionId": "c",
          "hint": "Think about what makes an experiment a 'fair test'.",
          "explanation": "Control variables are factors kept constant so that they don't influence the outcome. This ensures that any changes in the dependent variable are caused only by the independent variable."
        },
        {
          "id": "gcse-prep-101-l06-q2",
          "text": "A student's results are 15cm, 16cm, and 32cm. How would you describe these results?",
          "skillId": "science-data-analysis",
          "options": [
            {
              "id": "a",
              "text": "Precise and accurate."
            },
            {
              "id": "b",
              "text": "Precise, but not accurate."
            },
            {
              "id": "c",
              "text": "Containing an anomaly."
            },
            {
              "id": "d",
              "text": "Accurate, but not precise."
            }
          ],
          "correctOptionId": "c",
          "hint": "Look for a result that doesn't fit the pattern.",
          "explanation": "The result '32cm' is an anomaly or outlier because it is very different from the other two measurements (15cm and 16cm). In a calculation, you would typically ignore this result."
        },
        {
          "id": "gcse-prep-101-l06-q3",
          "text": "When drawing a line of best fit on a scatter graph, what should you do?",
          "skillId": "science-graphing-skills",
          "options": [
            {
              "id": "a",
              "text": "Connect all the dots like a dot-to-dot puzzle."
            },
            {
              "id": "b",
              "text": "Draw a line that goes through as many points as possible, with roughly equal numbers of points above and below the line."
            },
            {
              "id": "c",
              "text": "Draw a line from the first point to the last point."
            },
            {
              "id": "d",
              "text": "Always make sure the line goes through the origin (0,0)."
            }
          ],
          "correctOptionId": "b",
          "hint": "The line should show the general trend of the data.",
          "explanation": "A line of best fit shows the overall trend and doesn't have to pass through any single point. It should be drawn to represent the average path of the points."
        },
        {
          "id": "gcse-prep-101-l06-q4",
          "text": "What is the main difference between a hypothesis and a theory?",
          "skillId": "science-concepts",
          "options": [
            {
              "id": "a",
              "text": "There is no difference, they are the same thing."
            },
            {
              "id": "b",
              "text": "A hypothesis is a guess, while a theory is a proven fact."
            },
            {
              "id": "c",
              "text": "A hypothesis is a proposed explanation for a phenomenon, while a theory is a well-substantiated explanation backed by repeated testing."
            },
            {
              "id": "d",
              "text": "A theory is used in Physics, while a hypothesis is used in Biology."
            }
          ],
          "correctOptionId": "c",
          "hint": "A theory is much more robust and well-supported than a hypothesis.",
          "explanation": "A hypothesis is the starting point—an idea that can be tested. A scientific theory is a much broader explanation that has been repeatedly confirmed through experiments and observation."
        },
        {
          "id": "gcse-prep-101-l06-q5",
          "text": "If a question asks you to calculate a rate, what two types of information do you typically need?",
          "skillId": "science-calculations",
          "options": [
            {
              "id": "a",
              "text": "Mass and temperature."
            },
            {
              "id": "b",
              "text": "A change in a quantity and the time taken for that change."
            },
            {
              "id": "c",
              "text": "Distance and force."
            },
            {
              "id": "d",
              "text": "Volume and pressure."
            }
          ],
          "correctOptionId": "b",
          "hint": "Think about units like 'cm³/second' or 'metres/second'.",
          "explanation": "A rate measures how quickly something changes. This almost always involves dividing the amount of change by the time it took, for example, the rate of a reaction or the speed of an object."
        }
      ]
    },
    {
      "id": "gcse-prep-101-l07",
      "title": "Exam Technique: Decoding Command Words",
      "type": "video",
      "duration": 10,
      "learningAids": [
        {
          "id": "gcse-prep-101-l07-a1",
          "type": "image",
          "title": "Command Word Glossary",
          "content": "A visual chart matching command words (e.g., 'Explain', 'Compare', 'Evaluate') with their specific meanings and required actions."
        },
        {
          "id": "gcse-prep-101-l07-a2",
          "type": "animation",
          "title": "From 'Describe' to 'Explain'",
          "content": "An animation showing a simple answer that 'describes' a process, which then transforms into a high-scoring answer that 'explains' it by adding 'because...'."
        }
      ]
    },
    {
      "id": "gcse-prep-101-l08",
      "title": "Exam Technique: Writing High-Scoring Long Answers",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Brainstorm keywords for a 6-mark question.",
          "Structure your brainstormed points into a logical order.",
          "Write a concluding sentence that summarizes your main argument."
        ]
      },
      "interactiveActivities": [
        {
          "id": "gcse-prep-101-l08-ia1",
          "type": "sorting_buckets",
          "title": "Structuring a 6-Mark Answer",
          "description": "Sort these sentences into the correct parts of a long-answer question: Introduction, Main Points, and Conclusion.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each sentence.",
            "Drag it to the most appropriate section of the answer.",
            "Check your final structure."
          ],
          "data": {
            "buckets": [
              {
                "id": "intro",
                "label": "Introduction"
              },
              {
                "id": "main",
                "label": "Main Body"
              },
              {
                "id": "conclusion",
                "label": "Conclusion"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "The process begins with photosynthesis, where plants use light energy.",
                "correctBucketId": "main"
              },
              {
                "id": "i2",
                "label": "Overall, several factors must be considered to understand this complex issue.",
                "correctBucketId": "conclusion"
              },
              {
                "id": "i3",
                "label": "This essay will explore the key arguments for and against the proposal.",
                "correctBucketId": "intro"
              },
              {
                "id": "i4",
                "label": "Furthermore, another important point is the economic impact.",
                "correctBucketId": "main"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "gcse-prep-101-l09",
      "title": "Practice: Timed Skills Sprints",
      "type": "video",
      "duration": 9,
      "learningAids": [
        {
          "id": "gcse-prep-101-l09-a1",
          "type": "image",
          "title": "The Pomodoro Technique for Revision",
          "content": "A graphic explaining how to use a timer for focused 25-minute revision sprints followed by short breaks to maximize concentration."
        },
        {
          "id": "gcse-prep-101-l09-a2",
          "type": "animation",
          "title": "Pacing a Section",
          "content": "An animated clock and progress bar showing how to allocate time for a 10-mark section, including time for reading, planning, and checking."
        }
      ]
    },
    {
      "id": "gcse-prep-101-l10",
      "title": "Practice: Mixed-Section Decision Drills",
      "type": "quiz",
      "duration": 14,
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 5,
        "totalQuestions": 5,
        "timeLimitMinutes": 12,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 5,
            "pointsEach": 1,
            "bloomsLevels": [
              3,
              4
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 2
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.8
      },
      "questions": [
        {
          "id": "gcse-prep-101-l10-q1",
          "text": "You have 30 minutes left and a 10-mark question and five 2-mark questions to go. What is the best strategy?",
          "skillId": "exam-time-management",
          "options": [
            {
              "id": "a",
              "text": "Spend all 30 minutes on the 10-mark question to make it perfect."
            },
            {
              "id": "b",
              "text": "Quickly answer the five 2-mark questions first to secure those marks, then use the remaining time for the big question."
            },
            {
              "id": "c",
              "text": "Start the 10-mark question and hope you finish in time to do the others."
            },
            {
              "id": "d",
              "text": "Answer the questions in the order they appear on the paper, regardless of marks."
            }
          ],
          "correctOptionId": "b",
          "hint": "Think about securing the maximum number of marks in the time available.",
          "explanation": "It's often easier and faster to secure 10 marks from five smaller questions than from one large one. Banking these 'easy' marks first is a smart strategy to maximize your score."
        },
        {
          "id": "gcse-prep-101-l10-q2",
          "text": "You are completely stuck on a question. What should you do?",
          "skillId": "exam-problem-solving",
          "options": [
            {
              "id": "a",
              "text": "Stare at it until you figure it out, no matter how long it takes."
            },
            {
              "id": "b",
              "text": "Leave it blank and lose all the marks."
            },
            {
              "id": "c",
              "text": "Make a quick, educated guess if possible, mark the question, and move on. Come back if you have time."
            },
            {
              "id": "d",
              "text": "Panic and stop working on the exam."
            }
          ],
          "correctOptionId": "c",
          "hint": "Don't let one question ruin the rest of your exam.",
          "explanation": "Wasting time on a question you can't answer is a poor use of time. It's better to move on, secure marks elsewhere, and return to it later with a fresh perspective if time permits."
        },
        {
          "id": "gcse-prep-101-l10-q3",
          "text": "Why is it important to read the entire question carefully, including all the introductory text and data?",
          "skillId": "exam-comprehension",
          "options": [
            {
              "id": "a",
              "text": "It's not, you should just look for the keywords in the question."
            },
            {
              "id": "b",
              "text": "To waste time and test your reading speed."
            },
            {
              "id": "c",
              "text": "Because crucial information or clues needed to answer the question are often hidden there."
            },
            {
              "id": "d",
              "text": "The introductory text is only there for context and has no marks attached."
            }
          ],
          "correctOptionId": "c",
          "hint": "Examiners don't add extra text for no reason.",
          "explanation": "Often, the context, data, or specific details provided before the actual question are essential for crafting a complete and accurate answer. Ignoring them can lead to losing easy marks."
        },
        {
          "id": "gcse-prep-101-l10-q4",
          "text": "After finishing a section with a few minutes to spare, what is the most productive use of that time?",
          "skillId": "exam-checking-strategy",
          "options": [
            {
              "id": "a",
              "text": "Close your booklet and relax."
            },
            {
              "id": "b",
              "text": "Reread your answers to check for simple mistakes, like calculation errors or missed units."
            },
            {
              "id": "c",
              "text": "Start doodling on the back of the paper."
            },
            {
              "id": "d",
              "text": "Change some of your multiple-choice answers randomly."
            }
          ],
          "correctOptionId": "b",
          "hint": "This is your chance to reclaim marks lost to silly mistakes.",
          "explanation": "A quick check can help you spot and correct simple errors that could cost you valuable marks. Prioritize checking questions you were unsure about or those with calculations."
        },
        {
          "id": "gcse-prep-101-l10-q5",
          "text": "You see a question on a topic you revised yesterday, but another question on a topic you find difficult. Which should you tackle first?",
          "skillId": "exam-confidence-building",
          "options": [
            {
              "id": "a",
              "text": "The difficult one, to get it out of the way."
            },
            {
              "id": "b",
              "text": "The one you feel confident about, to build momentum and secure early marks."
            },
            {
              "id": "c",
              "text": "Whichever one has the most marks."
            },
            {
              "id": "d",
              "text": "Flip a coin to decide."
            }
          ],
          "correctOptionId": "b",
          "hint": "Starting strong can have a positive psychological effect.",
          "explanation": "Answering a question you're confident with first can boost your morale, calm your nerves, and get you into a good rhythm for the rest of the exam."
        }
      ]
    },
    {
      "id": "gcse-prep-101-l11",
      "title": "Strategy: Using Past Papers Effectively",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Choose a past paper and identify three questions on a topic you find tricky.",
          "Attempt those questions under timed conditions.",
          "Use the mark scheme to grade your own answers and identify where you lost marks."
        ]
      },
      "interactiveActivities": [
        {
          "id": "gcse-prep-101-l11-ia1",
          "type": "drag_and_drop",
          "title": "Past Paper Workflow",
          "description": "Arrange the steps for using a past paper into the most effective order.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Drag each step into the correct sequence.",
            "The goal is to maximize learning from the paper.",
            "Check your final workflow."
          ],
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
                "label": "Attempt the paper under timed, exam-like conditions.",
                "correctTargetId": "step1"
              },
              {
                "id": "d2",
                "label": "Use the mark scheme to grade your paper honestly.",
                "correctTargetId": "step2"
              },
              {
                "id": "d3",
                "label": "Create an error log of missed marks, noting the topic and reason (e.g., 'silly mistake', 'didn't know topic').",
                "correctTargetId": "step3"
              },
              {
                "id": "d4",
                "label": "Focus your next revision session on the topics from your error log.",
                "correctTargetId": "step4"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "gcse-prep-101-l12",
      "title": "Mindset: Exam-Day Readiness and Confidence",
      "type": "video",
      "duration": 10,
      "learningAids": [
        {
          "id": "gcse-prep-101-l12-a1",
          "type": "image",
          "title": "Exam Day Checklist",
          "content": "A simple visual checklist of things to prepare the night before an exam: pens, pencils, calculator, water bottle, student ID, etc."
        },
        {
          "id": "gcse-prep-101-l12-a2",
          "type": "animation",
          "title": "Simple Breathing Exercise",
          "content": "A calming animation guiding students through a 30-second breathing exercise to manage exam stress."
        }
      ]
    },
    {
      "id": "gcse-prep-101-l13",
      "title": "Checkpoint: Full Mock Exam",
      "type": "quiz",
      "duration": 25,
      "quizBlueprint": {
        "frequency": "mock_assessment",
        "questionsPerCheck": 10,
        "totalQuestions": 10,
        "timeLimitMinutes": 25,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 10,
            "pointsEach": 1,
            "bloomsLevels": [
              2,
              3,
              4
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 3,
          "medium": 4,
          "hard": 3
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.8
      },
      "metadata": {
        "examDrill": "full_mock"
      },
      "questions": [
        {
          "id": "gcse-prep-101-l13-q1",
          "text": "In a full mock, you realize you're spending too much time on the first few questions. What's the best course of action?",
          "skillId": "mock-pacing-adjustment",
          "options": [
            {
              "id": "a",
              "text": "Continue at the same pace and hope to catch up later."
            },
            {
              "id": "b",
              "text": "Acknowledge the issue, check the clock, and consciously speed up on the next few lower-mark questions."
            },
            {
              "id": "c",
              "text": "Give up on the first section and jump to the end."
            },
            {
              "id": "d",
              "text": "Rush through the rest of the paper without reading the questions properly."
            }
          ],
          "correctOptionId": "b",
          "hint": "A small, early correction is better than a late panic.",
          "explanation": "Recognizing a pacing problem early allows you to make minor adjustments. Speeding up slightly on easier questions can get you back on track without sacrificing quality."
        },
        {
          "id": "gcse-prep-101-l13-q2",
          "text": "The primary goal of taking a full mock exam is to:",
          "skillId": "mock-purpose",
          "options": [
            {
              "id": "a",
              "text": "Get a perfect score to boost your confidence."
            },
            {
              "id": "b",
              "text": "Simulate the exam experience and identify remaining weaknesses in knowledge and timing."
            },
            {
              "id": "c",
              "text": "Memorize the specific questions that will be on the real exam."
            },
            {
              "id": "d",
              "text": "Prove to yourself that you don't need to revise anymore."
            }
          ],
          "correctOptionId": "b",
          "hint": "The mock is a diagnostic tool, not the final performance.",
          "explanation": "A mock exam is a dress rehearsal. Its value comes from finding out what works and what doesn't *before* the real thing, so you can fix any issues."
        },
        {
          "id": "gcse-prep-101-l13-q3",
          "text": "During a mock, you finish one section early but run out of time on another. What does this tell you about your strategy?",
          "skillId": "mock-section-pacing",
          "options": [
            {
              "id": "a",
              "text": "Your pacing is perfect."
            },
            {
              "id": "b",
              "text": "You need to allocate your time more evenly across sections based on their mark weighting."
            },
            {
              "id": "c",
              "text": "You should always do your best section last."
            },
            {
              "id": "d",
              "text": "The exam was poorly designed."
            }
          ],
          "correctOptionId": "b",
          "hint": "Each section needs a specific time budget.",
          "explanation": "This pattern shows a need for better time allocation. Before starting, you should have a rough idea of how many minutes to spend on each section, and stick to it."
        },
        {
          "id": "gcse-prep-101-l13-q4",
          "text": "What is the most effective way to use the mark scheme after your mock?",
          "skillId": "mock-review-process",
          "options": [
            {
              "id": "a",
              "text": "Just count up your total score and ignore the details."
            },
            {
              "id": "b",
              "text": "Only look at the answers for questions you got completely wrong."
            },
            {
              "id": "c",
              "text": "Carefully read the mark scheme for every question, especially where you dropped marks, to understand exactly what the examiner was looking for."
            },
            {
              "id": "d",
              "text": "Give your paper to a friend to mark."
            }
          ],
          "correctOptionId": "c",
          "hint": "The mark scheme reveals the 'rules of the game'.",
          "explanation": "The mark scheme shows you how marks are awarded. Analyzing it helps you understand the required keywords, level of detail, and structure for future answers."
        },
        {
          "id": "gcse-prep-101-l13-q5",
          "text": "After reviewing your mock, you find most of your lost marks were on one specific topic. What is your priority for the next revision session?",
          "skillId": "mock-targeted-revision",
          "options": [
            {
              "id": "a",
              "text": "Revise your strongest topics to feel more confident."
            },
            {
              "id": "b",
              "text": "Do another full mock exam immediately."
            },
            {
              "id": "c",
              "text": "Focus entirely on that one weak topic, using textbook notes and practice questions."
            },
            {
              "id": "d",
              "text": "Revise a completely different subject."
            }
          ],
          "correctOptionId": "c",
          "hint": "The mock has shown you where the biggest potential for improvement is.",
          "explanation": "Targeted revision based on mock analysis is the most efficient way to improve your score. Fixing your biggest weakness will have the largest impact."
        }
      ]
    },
    {
      "id": "gcse-prep-101-l14",
      "title": "Analysis: Reviewing Your Mock Performance",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Identify the main reason you lost marks (e.g., timing, knowledge gaps, silly mistakes).",
          "Choose one topic to re-learn based on your mock results.",
          "Set a specific, measurable goal for your next practice paper."
        ]
      },
      "interactiveActivities": [
        {
          "id": "gcse-prep-101-l14-ia1",
          "type": "sorting_buckets",
          "title": "Error Analysis",
          "description": "Sort your mock exam mistakes into categories to understand your performance.",
          "estimatedMinutes": 10,
          "difficultyLevel": "medium",
          "instructions": [
            "Think about the marks you lost in your mock.",
            "Drag each type of error into the most fitting category.",
            "Use this to plan your revision."
          ],
          "data": {
            "buckets": [
              {
                "id": "knowledge",
                "label": "Knowledge Gap"
              },
              {
                "id": "technique",
                "label": "Exam Technique Error"
              },
              {
                "id": "silly",
                "label": "Careless Mistake"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "I didn't know the formula for calculating speed.",
                "correctBucketId": "knowledge"
              },
              {
                "id": "i2",
                "label": "I ran out of time and didn't finish the last question.",
                "correctBucketId": "technique"
              },
              {
                "id": "i3",
                "label": "I misread 'increase' as 'decrease' in the question.",
                "correctBucketId": "silly"
              },
              {
                "id": "i4",
                "label": "My 6-mark answer was just a list of facts with no explanation.",
                "correctBucketId": "technique"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "gcse-prep-101-l15",
      "title": "Action: Targeted Revision and Next Steps",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gcse-prep-101-l15-a1",
          "type": "image",
          "title": "The Revision Loop",
          "content": "A diagram showing the cycle of 'Practice -> Analyze -> Target Weakness -> Repeat' to illustrate effective, ongoing revision."
        },
        {
          "id": "gcse-prep-101-l15-a2",
          "type": "animation",
          "title": "Building a 'Retry' List",
          "content": "An animation showing a student creating a list of specific question types from their mock to re-attempt after they have revised the topic."
        }
      ]
    }
  ]
};
