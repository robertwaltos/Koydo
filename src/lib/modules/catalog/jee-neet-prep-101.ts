import type { LearningModule } from "@/lib/modules/types";

export const jee_neet_prep_101_Module: LearningModule = {
  "id": "jee-neet-prep-101",
  "title": "JEE & NEET Mastery: Strategy, Speed, and Success",
  "description": "A comprehensive course to build elite problem-solving skills, master time management, and develop winning strategies for the JEE and NEET exams.",
  "subject": "Exam Prep",
  "tags": [
    "exam-prep",
    "assessment",
    "advanced",
    "strategy"
  ],
  "minAge": 15,
  "maxAge": 20,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es",
    "fr",
    "de",
    "ar",
    "hi",
    "zh",
    "ja",
    "ko",
    "ru"
  ],
  "thumbnail": "/placeholders/lesson-strategy-board.svg",
  "learningObjectives": [
    "Master the exam pattern, scoring, and strategic pacing for both JEE and NEET.",
    "Develop deep problem-solving skills in Physics, Chemistry, and Math/Biology.",
    "Implement data-driven mock test analysis and targeted revision to eliminate weak areas."
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
          2,
          3,
          4
        ]
      }
    ],
    "difficultyDistribution": {
      "easy": 5,
      "medium": 10,
      "hard": 5
    },
    "feedbackMode": "after_submit",
    "adaptive": false,
    "masteryThreshold": 0.8
  },
  "lessons": [
    {
      "id": "jee-neet-prep-101-l01",
      "title": "Understanding the JEE & NEET Landscape",
      "description": "An overview of the exam patterns, marking schemes, historical cutoffs, and chapter-wise weightage.",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "jee-neet-prep-101-l01-a1",
          "type": "image",
          "title": "Exam Structure Comparison",
          "content": "Infographic: A side-by-side comparison of the JEE Main, JEE Advanced, and NEET exam structures, highlighting differences in subjects, question types, and timing."
        },
        {
          "id": "jee-neet-prep-101-l01-a2",
          "type": "animation",
          "title": "Cutoff Score Trends",
          "content": "Animated graph showing the trend of qualifying and admission cutoff scores over the last 5 years for top institutes."
        }
      ]
    },
    {
      "id": "jee-neet-prep-101-l02",
      "title": "Building a High-Performance Mindset",
      "description": "Learn techniques for effective time management, consistent study habits, and maintaining focus under pressure.",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Categorize your typical weekly study tasks using the Eisenhower Matrix.",
          "Identify one 'not important, not urgent' task you can eliminate to create more study time.",
          "Set a specific, measurable goal for your next study week."
        ]
      },
      "interactiveActivities": [
        {
          "id": "jee-neet-prep-101-l02-ia1",
          "type": "sorting_buckets",
          "title": "Prioritization Matrix",
          "description": "Sort common student tasks into the Eisenhower Matrix to practice effective prioritization.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Drag each task into the appropriate quadrant: Urgent & Important, Important & Not Urgent, Urgent & Not Important, or Not Urgent & Not Important."
          ],
          "data": {
            "buckets": [
              {
                "id": "urgent_important",
                "label": "Do First (Urgent & Important)"
              },
              {
                "id": "important_not_urgent",
                "label": "Schedule (Important & Not Urgent)"
              },
              {
                "id": "urgent_not_important",
                "label": "Delegate (Urgent & Not Important)"
              },
              {
                "id": "not_urgent_not_important",
                "label": "Eliminate (Not Urgent & Not Important)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Solving today's physics assignment due tomorrow",
                "correctBucketId": "urgent_important"
              },
              {
                "id": "i2",
                "label": "Planning next month's revision schedule",
                "correctBucketId": "important_not_urgent"
              },
              {
                "id": "i3",
                "label": "Answering a friend's non-urgent text message",
                "correctBucketId": "not_urgent_not_important"
              },
              {
                "id": "i4",
                "label": "Taking a scheduled weekly mock test",
                "correctBucketId": "important_not_urgent"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "jee-neet-prep-101-l03",
      "title": "Physics: Conceptual Frameworks & Problem-Solving",
      "description": "Learn to apply core physics principles using structured frameworks to solve complex problems efficiently.",
      "type": "interactive",
      "duration": 18,
      "interactiveActivities": [
        {
          "id": "jee-neet-prep-101-l03-ia1",
          "type": "drag_and_drop",
          "title": "Physics Problem-Solving Sequence",
          "description": "Arrange the steps for solving a typical mechanics problem in the correct logical order.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Drag the steps on the left to the correct sequence on the right."
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
              },
              {
                "id": "step5",
                "label": "Step 5"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Draw a Free-Body Diagram and list known/unknown variables",
                "correctTargetId": "step1"
              },
              {
                "id": "d2",
                "label": "Identify the relevant physical principles and formulas",
                "correctTargetId": "step2"
              },
              {
                "id": "d3",
                "label": "Substitute values and solve the equations",
                "correctTargetId": "step3"
              },
              {
                "id": "d4",
                "label": "Check units and verify if the answer is reasonable",
                "correctTargetId": "step4"
              },
              {
                "id": "d5",
                "label": "Clearly state the final answer",
                "correctTargetId": "step5"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "jee-neet-prep-101-l03-a1",
          "type": "image",
          "title": "Free-Body Diagram Cheatsheet",
          "content": "A visual guide showing how to draw accurate free-body diagrams for common scenarios like inclined planes, pulleys, and friction."
        }
      ]
    },
    {
      "id": "jee-neet-prep-101-l04",
      "title": "Chemistry: Mastering Reactions & Concepts",
      "description": "Strategies for memorizing key reactions in Organic/Inorganic Chemistry and applying concepts in Physical Chemistry.",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "jee-neet-prep-101-l04-q1",
          "text": "When studying Organic Chemistry, what is the most effective way to learn named reactions?",
          "skillId": "jee-neet-prep-101-skill-chemistry-organic",
          "options": [
            {
              "id": "a",
              "text": "Rote memorize the name and final product only."
            },
            {
              "id": "b",
              "text": "Understand the mechanism, substrate, and reagents for each reaction."
            },
            {
              "id": "c",
              "text": "Only study the reactions that appeared in last year's paper."
            },
            {
              "id": "d",
              "text": "Read the reaction once and hope to remember it."
            }
          ],
          "correctOptionId": "b",
          "hint": "Deep understanding is always better than surface-level memorization.",
          "explanation": "Understanding the mechanism helps you apply the reaction to new, unseen problems, which is a key skill tested in competitive exams."
        },
        {
          "id": "jee-neet-prep-101-l04-q2",
          "text": "In Physical Chemistry, you encounter a complex equilibrium problem. What should be your first step after reading the question?",
          "skillId": "jee-neet-prep-101-skill-chemistry-physical",
          "options": [
            {
              "id": "a",
              "text": "Immediately start plugging numbers into the equilibrium constant expression."
            },
            {
              "id": "b",
              "text": "Write down the balanced chemical equation and set up an ICE (Initial, Change, Equilibrium) table."
            },
            {
              "id": "c",
              "text": "Guess the answer based on the options provided."
            },
            {
              "id": "d",
              "text": "Look for a similar problem in your textbook."
            }
          ],
          "correctOptionId": "b",
          "hint": "A structured approach prevents calculation errors.",
          "explanation": "Setting up an ICE table organizes the information, clarifies the changes in concentration, and provides a clear path to the solution."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 2,
        "totalQuestions": 2,
        "timeLimitMinutes": 5,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 2,
            "pointsEach": 1,
            "bloomsLevels": [
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 1,
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 1
      }
    },
    {
      "id": "jee-neet-prep-101-l05",
      "title": "Mathematics (for JEE): Speed & Precision",
      "description": "Techniques for improving calculation speed, avoiding common errors, and tackling high-level problems in algebra, calculus, and coordinate geometry.",
      "type": "video",
      "duration": 16,
      "learningAids": [
        {
          "id": "jee-neet-prep-101-l05-a1",
          "type": "image",
          "title": "Calculus Formula Sheet",
          "content": "A downloadable one-page PDF with all essential differentiation and integration formulas for quick revision."
        },
        {
          "id": "jee-neet-prep-101-l05-a2",
          "type": "animation",
          "title": "Visualizing Conic Sections",
          "content": "An animation showing how a plane intersecting a cone creates a circle, ellipse, parabola, and hyperbola, with their standard equations displayed."
        }
      ]
    },
    {
      "id": "jee-neet-prep-101-l06",
      "title": "Biology (for NEET): NCERT Mastery & Application",
      "description": "Mastering the NCERT syllabus, creating effective notes, and applying knowledge to diagram-based and assertion-reason questions.",
      "type": "interactive",
      "duration": 15,
      "interactiveActivities": [
        {
          "id": "jee-neet-prep-101-l06-ia1",
          "type": "matching_pairs",
          "title": "Match the Diagram to the Concept",
          "description": "Connect key biological diagrams from the NCERT textbook to the processes they represent.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Match each diagram with its corresponding biological concept."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Diagram of a Nephron"
              },
              {
                "id": "l2",
                "label": "Diagram of a Sarcomere"
              },
              {
                "id": "l3",
                "label": "Diagram of a Flower's Cross-Section"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Ultrafiltration and Reabsorption"
              },
              {
                "id": "r2",
                "label": "Muscle Contraction (Sliding Filament Theory)"
              },
              {
                "id": "r3",
                "label": "Plant Reproduction and Pollination"
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
      ]
    },
    {
      "id": "jee-neet-prep-101-l07",
      "title": "The Art of Question Selection",
      "description": "Learn the 'Easy-Medium-Hard' sweep method to maximize your score by attempting the right questions first.",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "jee-neet-prep-101-l07-q1",
          "text": "You are 10 minutes into the Physics section and encounter a long, multi-step question from a topic you find difficult. What is the best strategic move?",
          "skillId": "jee-neet-prep-101-skill-question-selection",
          "options": [
            {
              "id": "a",
              "text": "Attempt it immediately to get the hardest question out of the way."
            },
            {
              "id": "b",
              "text": "Mark it for review, and move on to find easier, quicker questions."
            },
            {
              "id": "c",
              "text": "Spend up to 10 minutes on it, as it likely carries more weight."
            },
            {
              "id": "d",
              "text": "Guess an answer and move on to save time."
            }
          ],
          "correctOptionId": "b",
          "hint": "Your goal is to maximize your score, not to prove you can solve every hard question.",
          "explanation": "Securing marks from easy and medium questions first builds confidence and ensures you don't run out of time, leaving easy points on the table. You can always return to harder questions later."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 1,
        "totalQuestions": 1,
        "timeLimitMinutes": 3,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 1,
            "pointsEach": 1,
            "bloomsLevels": [
              4
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 0,
          "medium": 1,
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 1
      }
    },
    {
      "id": "jee-neet-prep-101-l08",
      "title": "Conquering Negative Marking",
      "description": "A data-driven approach to intelligent guessing, risk assessment, and minimizing penalties from incorrect answers.",
      "type": "video",
      "duration": 10,
      "learningAids": [
        {
          "id": "jee-neet-prep-101-l08-a1",
          "type": "image",
          "title": "Risk vs. Reward Matrix",
          "content": "A visual chart that helps you decide when to attempt a question based on your confidence level and the ability to eliminate options."
        },
        {
          "id": "jee-neet-prep-101-l08-a2",
          "type": "animation",
          "title": "The Power of Elimination",
          "content": "An animation showing how eliminating just two incorrect options in an MCQ significantly increases your probability of guessing correctly."
        }
      ]
    },
    {
      "id": "jee-neet-prep-101-l09",
      "title": "Pacing & Endurance: Winning the 3-Hour Marathon",
      "description": "Develop a section-wise time allocation plan and build the mental stamina to maintain peak performance throughout the exam.",
      "type": "interactive",
      "duration": 14,
      "interactiveActivities": [
        {
          "id": "jee-neet-prep-101-l09-ia1",
          "type": "drag_and_drop",
          "title": "Build Your Exam Pacing Plan",
          "description": "Allocate 180 minutes across the three subjects for a balanced JEE/NEET attempt.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Drag the time blocks to each subject based on a common strategic approach (e.g., starting with your strongest subject)."
          ],
          "data": {
            "targets": [
              {
                "id": "chemistry",
                "label": "Chemistry"
              },
              {
                "id": "physics",
                "label": "Physics"
              },
              {
                "id": "math_bio",
                "label": "Math / Biology"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "45 Minutes",
                "correctTargetId": "chemistry"
              },
              {
                "id": "d2",
                "label": "60 Minutes",
                "correctTargetId": "physics"
              },
              {
                "id": "d3",
                "label": "75 Minutes",
                "correctTargetId": "math_bio"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "jee-neet-prep-101-l10",
      "title": "Simulating Exam Day: The Mock Test",
      "description": "Learn how to properly simulate exam conditions for a mock test to get the most accurate measure of your performance.",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "jee-neet-prep-101-l10-q1",
          "text": "Which of the following is the MOST critical element for an effective mock test simulation?",
          "skillId": "jee-neet-prep-101-skill-mock-simulation",
          "options": [
            {
              "id": "a",
              "text": "Using a brand new pen and paper."
            },
            {
              "id": "b",
              "text": "Strictly adhering to the time limit without any breaks."
            },
            {
              "id": "c",
              "text": "Taking the test in the evening when you are more relaxed."
            },
            {
              "id": "d",
              "text": "Listening to music to stay focused."
            }
          ],
          "correctOptionId": "b",
          "hint": "The goal is to replicate the pressure of the actual exam.",
          "explanation": "The primary purpose of a mock test is to practice time management and performance under pressure. Sticking to the time limit without interruptions is essential for a realistic simulation."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 1,
        "totalQuestions": 1,
        "timeLimitMinutes": 3,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 1,
            "pointsEach": 1,
            "bloomsLevels": [
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 0,
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 1
      }
    },
    {
      "id": "jee-neet-prep-101-l11",
      "title": "The Art of Mock Test Analysis",
      "description": "Learn to dissect your mock test performance, categorize errors, and create an actionable improvement plan.",
      "type": "interactive",
      "duration": 18,
      "interactiveActivities": [
        {
          "id": "jee-neet-prep-101-l11-ia1",
          "type": "sorting_buckets",
          "title": "Error Analysis Categorization",
          "description": "Categorize common mistakes made during a mock test to identify the root cause.",
          "estimatedMinutes": 10,
          "difficultyLevel": "medium",
          "instructions": [
            "Drag each error type into the correct category: Conceptual Gap, Silly Mistake, or Strategic Error."
          ],
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "Conceptual Gap"
              },
              {
                "id": "silly",
                "label": "Silly Mistake"
              },
              {
                "id": "strategy",
                "label": "Strategic Error"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Didn't know the formula for gravitational potential.",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Calculated 2+3=6 in a hurry.",
                "correctBucketId": "silly"
              },
              {
                "id": "i3",
                "label": "Spent 15 minutes on a single question and ran out of time.",
                "correctBucketId": "strategy"
              },
              {
                "id": "i4",
                "label": "Misread the question, answering for 'incorrect' instead of 'correct'.",
                "correctBucketId": "silly"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "jee-neet-prep-101-l12",
      "title": "Targeted Remediation Sprints",
      "description": "Use your mock analysis to design focused practice sessions that systematically eliminate your weaknesses.",
      "type": "video",
      "duration": 11,
      "learningAids": [
        {
          "id": "jee-neet-prep-101-l12-a1",
          "type": "image",
          "title": "Sample Error Log",
          "content": "A template for an error log where students can record their mistakes, the root cause, and the corrective action needed."
        },
        {
          "id": "jee-neet-prep-101-l12-a2",
          "type": "animation",
          "title": "The Improvement Loop",
          "content": "An animated flowchart showing the cycle of: Take Mock -> Analyze Errors -> Targeted Practice -> Re-test -> See Improvement."
        }
      ]
    },
    {
      "id": "jee-neet-prep-101-l13",
      "title": "Revision Strategies for the Final Month",
      "description": "Master techniques like spaced repetition, short notes, and formula sheets to consolidate your knowledge effectively.",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Create a one-page 'short note' for a chapter you recently studied.",
          "Schedule three 20-minute revision sessions for a weak topic over the next week.",
          "Identify the top 5 most important formulas or reactions in your strongest subject."
        ]
      },
      "interactiveActivities": [
        {
          "id": "jee-neet-prep-101-l13-ia1",
          "type": "drag_and_drop",
          "title": "Design a Revision Week",
          "description": "Arrange revision activities into a weekly schedule for maximum retention.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Drag the activities to the days of the week to create a balanced revision plan."
          ],
          "data": {
            "targets": [
              {
                "id": "mon_wed_fri",
                "label": "Mon / Wed / Fri"
              },
              {
                "id": "tue_thu",
                "label": "Tue / Thu"
              },
              {
                "id": "sat_sun",
                "label": "Weekend"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "New Topic Practice",
                "correctTargetId": "mon_wed_fri"
              },
              {
                "id": "d2",
                "label": "Review Old Topics (Spaced Repetition)",
                "correctTargetId": "tue_thu"
              },
              {
                "id": "d3",
                "label": "Full-Length Mock Test & Analysis",
                "correctTargetId": "sat_sun"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "jee-neet-prep-101-l14",
      "title": "Capstone: Exam Day Strategy",
      "description": "Finalize your exam day plan, from pre-exam routines to in-exam crisis management. A final check of your readiness.",
      "type": "quiz",
      "duration": 20,
      "questions": [
        {
          "id": "jee-neet-prep-101-l14-q1",
          "text": "On exam day, you find the first five questions in your strongest subject to be extremely difficult. What is the best course of action?",
          "skillId": "jee-neet-prep-101-skill-exam-day-strategy",
          "options": [
            {
              "id": "a",
              "text": "Panic, because this means the entire paper is too hard."
            },
            {
              "id": "b",
              "text": "Stay calm, skip them, and scan the rest of the section for easier questions to build momentum."
            },
            {
              "id": "c",
              "text": "Spend extra time on these five questions to prove your strength in the subject."
            },
            {
              "id": "d",
              "text": "Immediately switch to your weakest subject."
            }
          ],
          "correctOptionId": "b",
          "hint": "Your mental state is as important as your knowledge. Don't let a tough start derail your entire exam.",
          "explanation": "Exam setters often place difficult questions at the beginning. A smart test-taker stays composed, navigates to easier questions, and builds confidence before returning to the challenging ones."
        },
        {
          "id": "jee-neet-prep-101-l14-q2",
          "text": "What is the primary goal of the final 10 minutes of the exam?",
          "skillId": "jee-neet-prep-101-skill-final-review",
          "options": [
            {
              "id": "a",
              "text": "Attempting new, difficult questions."
            },
            {
              "id": "b",
              "text": "Reviewing marked questions and checking for silly mistakes in answered ones."
            },
            {
              "id": "c",
              "text": "Re-solving every question you answered."
            },
            {
              "id": "d",
              "text": "Relaxing and waiting for the time to end."
            }
          ],
          "correctOptionId": "b",
          "hint": "Securing the marks you've already earned is a top priority.",
          "explanation": "The final minutes are best used for verification. A quick review can catch calculation errors or misread questions, saving you valuable marks and preventing negative marking."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 2,
        "totalQuestions": 2,
        "timeLimitMinutes": 5,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 2,
            "pointsEach": 1,
            "bloomsLevels": [
              4,
              5
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 0,
          "medium": 1,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 1
      }
    }
  ]
};
