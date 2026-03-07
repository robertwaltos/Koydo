import type { LearningModule } from "@/lib/modules/types";

export const ielts_prep_101_Module: LearningModule = {
  "id": "ielts-prep-101",
  "title": "IELTS Prep Foundations",
  "description": "Develop core skills and strategies for the IELTS Academic test across listening, reading,writing, and speaking.",
  "subject": "Exam Prep",
  "tags": [
    "exam-prep",
    "assessment",
    "advanced",
    "ielts"
  ],
  "minAge": 14,
  "maxAge": 24,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Understand the structure and scoring of the IELTS Academic test.",
    "Apply effective strategies for each of the four test sections.",
    "Analyze personal performance to identify and correct common error patterns.",
    "Improve speed and accuracy under timed test conditions."
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
      "id": "ielts-prep-101-l01",
      "title": "Understanding the IELTS Academic Test",
      "type": "video",
      "duration": 10,
      "learningAids": [
        {
          "id": "ielts-prep-101-l01-a1",
          "type": "image",
          "title": "IELTS Test Structure Infographic",
          "content": "A clear visual breakdown of the four test sections, including timings, number of questions, and task types for each."
        },
        {
          "id": "ielts-prep-101-l01-a2",
          "type": "animation",
          "title": "Scoring Flowchart",
          "content": "An animated flowchart showing how raw scores from Listening and Reading are converted into IELTS band scores."
        }
      ]
    },
    {
      "id": "ielts-prep-101-l02",
      "title": "Decoding the Band Descriptors",
      "type": "video",
      "duration": 11,
      "learningAids": [
        {
          "id": "ielts-prep-101-l02-a1",
          "type": "image",
          "title": "Band 9 vs. Band 6 Comparison",
          "content": "A side-by-side table comparing the official band descriptors for Writing Task 2 at Band 6 and Band 9, highlighting key differences."
        },
        {
          "id": "ielts-prep-101-l02-a2",
          "type": "animation",
          "title": "Climbing the Bands",
          "content": "A visual animation showing how improving a single criterion, like Lexical Resource, can lift a student's overall band score."
        }
      ]
    },
    {
      "id": "ielts-prep-101-l03",
      "title": "Mastering the Listening Section",
      "type": "interactive",
      "duration": 14,
      "interactiveActivities": [
        {
          "id": "ielts-prep-101-l03-ia1",
          "type": "drag_and_drop",
          "title": "Listening Strategy Match",
          "description": "Match each IELTS Listening question type to the most effective strategy.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Drag each question type to the best strategy.",
            "Check your mappings.",
            "Note one strategy to focus on in your next practice."
          ],
          "data": {
            "targets": [
              {
                "id": "predict",
                "label": "Predicting Answers"
              },
              {
                "id": "signpost",
                "label": "Following Signpost Words"
              },
              {
                "id": "paraphrase",
                "label": "Paraphrase Recognition"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Sentence Completion",
                "correctTargetId": "predict"
              },
              {
                "id": "d2",
                "label": "Map Labelling",
                "correctTargetId": "signpost"
              },
              {
                "id": "d3",
                "label": "Multiple Choice",
                "correctTargetId": "paraphrase"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "ielts-prep-101-l03-a1",
          "type": "image",
          "title": "Annotated Listening Transcript",
          "content": "A sample transcript with keywords, signpost language ('firstly', 'however'), and paraphrased information clearly highlighted."
        },
        {
          "id": "ielts-prep-101-l03-a2",
          "type": "animation",
          "title": "Visualizing a Map Labelling Task",
          "content": "An animation that follows a speaker's directions on a map, showing the path and highlighting the correct locations as they are mentioned."
        }
      ]
    },
    {
      "id": "ielts-prep-101-l04",
      "title": "Strategies for Academic Reading",
      "type": "interactive",
      "duration": 15,
      "interactiveActivities": [
        {
          "id": "ielts-prep-101-l04-ia1",
          "type": "matching_pairs",
          "title": "Reading Tactic Pairs",
          "description": "Pair the reading challenge with the best tactic to overcome it.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Align each challenge with the correct tactic.",
            "Check your results.",
            "Apply one new tactic in your next reading practice."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Finding specific details (e.g., a name or date)"
              },
              {
                "id": "l2",
                "label": "Understanding the main idea of a paragraph"
              },
              {
                "id": "l3",
                "label": "Answering 'True/False/Not Given' questions"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Scanning for keywords"
              },
              {
                "id": "r2",
                "label": "Skimming the first and last sentences"
              },
              {
                "id": "r3",
                "label": "Locating the exact sentence and checking for a match, contradiction, or no information"
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
        "questionsPerCheck": 5,
        "totalQuestions": 5,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 5,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
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
      "learningAids": [
        {
          "id": "ielts-prep-101-l04-a1",
          "type": "image",
          "title": "Skim vs. Scan Decision Tree",
          "content": "A flowchart that helps students decide when to use skimming (for general understanding) versus scanning (for specific details)."
        },
        {
          "id": "ielts-prep-101-l04-a2",
          "type": "animation",
          "title": "Finding Evidence for 'Not Given'",
          "content": "An animation that highlights a question's keywords, scans a text for them, and demonstrates how the absence of information leads to a 'Not Given' answer."
        }
      ]
    },
    {
      "id": "ielts-prep-101-l05",
      "title": "Analyzing and Describing Data (Writing Task 1)",
      "type": "interactive",
      "duration": 14,
      "interactiveActivities": [
        {
          "id": "ielts-prep-101-l05-ia1",
          "type": "drag_and_drop",
          "title": "Structuring a Task 1 Report",
          "description": "Drag the components of a Task 1 report into the correct order.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Arrange the four main parts of a Task 1 report logically.",
            "Verify the correct structure.",
            "Use this structure as a template for your writing."
          ],
          "data": {
            "targets": [
              {
                "id": "p1",
                "label": "Paragraph 1"
              },
              {
                "id": "p2",
                "label": "Paragraph 2"
              },
              {
                "id": "p3",
                "label": "Paragraph 3 (Body)"
              },
              {
                "id": "p4",
                "label": "Paragraph 4 (Body)"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Introduction (Paraphrase the question)",
                "correctTargetId": "p1"
              },
              {
                "id": "d2",
                "label": "Overview (Summarize the main trends/features)",
                "correctTargetId": "p2"
              },
              {
                "id": "d3",
                "label": "Describe the first key feature with data",
                "correctTargetId": "p3"
              },
              {
                "id": "d4",
                "label": "Describe/compare another key feature with data",
                "correctTargetId": "p4"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "ielts-prep-101-l05-a1",
          "type": "image",
          "title": "Deconstructing a Bar Chart",
          "content": "An image of a bar chart with key features like the highest/lowest points, major trends, and significant comparisons circled and labeled."
        },
        {
          "id": "ielts-prep-101-l05-a2",
          "type": "animation",
          "title": "Building a Cohesive Paragraph",
          "content": "An animation showing individual sentences with data points being connected by linking words (e.g., 'In contrast,' 'Similarly') to form a logical, flowing paragraph."
        }
      ]
    },
    {
      "id": "ielts-prep-101-l06",
      "title": "Building a Strong Argument (Writing Task 2)",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "ielts-prep-101-l06-a1",
          "type": "image",
          "title": "Essay Structure Template",
          "content": "A clear visual template for an 'opinion' essay, showing the introduction with a thesis statement, two body paragraphs with topic sentences, and a concluding summary."
        },
        {
          "id": "ielts-prep-101-l06-a2",
          "type": "animation",
          "title": "From Thesis to Topic Sentences",
          "content": "An animation showing how the main idea in a thesis statement is broken down into two distinct controlling ideas, which then become the topic sentences for the body paragraphs."
        }
      ]
    },
    {
      "id": "ielts-prep-101-l07",
      "title": "Fluency and Coherence (Speaking Parts 1 & 2)",
      "type": "interactive",
      "duration": 14,
      "interactiveActivities": [
        {
          "id": "ielts-prep-101-l07-ia1",
          "type": "matching_pairs",
          "title": "Speaking Strategy Alignment",
          "description": "Align the speaking part with the best preparation strategy.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Align each part of the test with its core strategy.",
            "Check your result.",
            "Focus on one strategy in your next speaking practice."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Part 1: Familiar Topics"
              },
              {
                "id": "l2",
                "label": "Part 2: The Long Turn"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Give a direct answer and add one piece of extra information (e.g., a reason or example)."
              },
              {
                "id": "r2",
                "label": "Use the 1-minute prep time to jot down keywords for each part of the cue card."
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
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "ielts-prep-101-l07-a1",
          "type": "image",
          "title": "Part 2 Cue Card Notes",
          "content": "A visual example of effective notes for a Part 2 topic, using keywords and a simple mind map instead of full sentences."
        },
        {
          "id": "ielts-prep-101-l07-a2",
          "type": "animation",
          "title": "Using Linking Phrases",
          "content": "An animation showing a simple answer being improved by adding cohesive phrases like 'Actually,' 'As a matter of fact,' and 'Also,' to improve flow."
        }
      ]
    },
    {
      "id": "ielts-prep-101-l08",
      "title": "Depth and Logic (Speaking Part 3)",
      "type": "video",
      "duration": 11,
      "learningAids": [
        {
          "id": "ielts-prep-101-l08-a1",
          "type": "image",
          "title": "The 'A.R.E.' Method",
          "content": "A graphic illustrating the Answer-Reason-Example method for structuring detailed and well-supported answers in Part 3."
        },
        {
          "id": "ielts-prep-101-l08-a2",
          "type": "animation",
          "title": "Developing an Abstract Idea",
          "content": "An animation that takes a simple, one-sentence answer and builds it into a complex, well-reasoned response using the A.R.E. method."
        }
      ]
    },
    {
      "id": "ielts-prep-101-l09",
      "title": "Analyzing Your Errors for Band Improvement",
      "type": "interactive",
      "duration": 14,
      "interactiveActivities": [
        {
          "id": "ielts-prep-101-l09-ia1",
          "type": "matching_pairs",
          "title": "Error Diagnosis",
          "description": "Match the common error to its root cause to understand how to fix it.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Match each error to its likely cause.",
            "Verify the pairings.",
            "Start an error log to track your own patterns."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "A grammar mistake in a Task 2 essay"
              },
              {
                "id": "l2",
                "label": "Mishearing a key detail in Listening Section 4"
              },
              {
                "id": "l3",
                "label": "Running out of time in the Reading section"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Forgetting to leave time for proofreading"
              },
              {
                "id": "r2",
                "label": "Losing concentration during a long monologue"
              },
              {
                "id": "r3",
                "label": "Spending too much time on one difficult question"
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
          "id": "ielts-prep-101-l09-a1",
          "type": "image",
          "title": "Sample Error Log",
          "content": "A screenshot of a simple spreadsheet with columns for 'Error', 'Correction', and 'Why did it happen?', showing how to track mistakes effectively."
        },
        {
          "id": "ielts-prep-101-l09-a2",
          "type": "animation",
          "title": "The Feedback Loop",
          "content": "A circular diagram illustrating the improvement cycle: Practice -> Get Feedback -> Analyze Error -> Adjust Strategy -> Practice Again."
        }
      ]
    },
    {
      "id": "ielts-prep-101-l10",
      "title": "Timed Practice: Multi-Skill Drill",
      "type": "quiz",
      "duration": 15,
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 6,
        "totalQuestions": 6,
        "timeLimitMinutes": 12,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 6,
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
          "medium": 3,
          "hard": 2
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "questions": [
        {
          "id": "ielts-prep-101-l10-q1",
          "text": "During a timed drill, you are spending too much time on a difficult reading passage. What is the best course of action?",
          "skillId": "ielts-prep-101-skill-time-management",
          "options": [
            {
              "id": "a",
              "text": "Keep working on it until you find the answer."
            },
            {
              "id": "b",
              "text": "Make a guess, flag the question, and move on to easier questions."
            },
            {
              "id": "c",
              "text": "Skip the entire passage and lose all possible points."
            },
            {
              "id": "d",
              "text": "Read the passage again from the beginning, but faster."
            }
          ],
          "correctOptionId": "b",
          "hint": "Don't let one hard question stop you from answering many easier ones.",
          "explanation": "Effective time management involves prioritizing questions you can answer quickly and returning to difficult ones if time permits."
        }
      ],
      "learningAids": [
        {
          "id": "ielts-prep-101-l10-a1",
          "type": "image",
          "title": "Personal Pacing Chart",
          "content": "A template for students to set their own time goals per section (e.g., Reading Passage 1: 18 mins, Passage 2: 20 mins, Passage 3: 22 mins)."
        },
        {
          "id": "ielts-prep-101-l10-a2",
          "type": "animation",
          "title": "The 'Flag and Return' Technique",
          "content": "An animation showing a student encountering a hard question, clicking a 'flag' button, completing other questions, and then returning to the flagged item at the end."
        }
      ]
    },
    {
      "id": "ielts-prep-101-l11",
      "title": "Targeted Remediation: Closing Your Skill Gaps",
      "type": "interactive",
      "duration": 14,
      "interactiveActivities": [
        {
          "id": "ielts-prep-101-l11-ia1",
          "type": "drag_and_drop",
          "title": "Remediation Plan Builder",
          "description": "Based on a common weakness, drag the best corrective action into the plan.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "For each weakness, choose the most effective action.",
            "Check your plan.",
            "Create a real plan based on your own error log."
          ],
          "data": {
            "targets": [
              {
                "id": "plan1",
                "label": "Weakness: Poor Vocabulary"
              },
              {
                "id": "plan2",
                "label": "Weakness: Disorganized Essay"
              },
              {
                "id": "plan3",
                "label": "Weakness: Slow Reading Speed"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Action: Learn 5 topic-specific words and use them in a practice essay.",
                "correctTargetId": "plan1"
              },
              {
                "id": "d2",
                "label": "Action: Create an outline before writing every essay for one week.",
                "correctTargetId": "plan2"
              },
              {
                "id": "d3",
                "label": "Action: Practice timed skimming drills for 10 minutes daily.",
                "correctTargetId": "plan3"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "ielts-prep-101-l11-a1",
          "type": "image",
          "title": "A Focused Practice Schedule",
          "content": "A sample weekly calendar showing blocks for targeted skill work (e.g., 'Mon: Writing Task 1 Vocabulary') alongside full practice tests."
        },
        {
          "id": "ielts-prep-101-l11-a2",
          "type": "animation",
          "title": "From Weakness to Strength",
          "content": "A simple bar chart showing a skill score starting low and increasing after a cycle of targeted practice and review."
        }
      ]
    },
    {
      "id": "ielts-prep-101-l12",
      "title": "Advanced Strategy: Mixed-Section Decision Drill",
      "type": "quiz",
      "duration": 12,
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 6,
        "totalQuestions": 6,
        "timeLimitMinutes": 12,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 6,
            "pointsEach": 1,
            "bloomsLevels": [
              3,
              4,
              5
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 3
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "questions": [
        {
          "id": "ielts-prep-101-l12-q1",
          "text": "You have 10 minutes left. You can either finish the last 3 difficult reading questions or write the conclusion for your Task 2 essay. Which should you prioritize?",
          "skillId": "ielts-prep-101-skill-prioritization",
          "options": [
            {
              "id": "a",
              "text": "The reading questions, because they are worth more points each."
            },
            {
              "id": "b",
              "text": "The essay conclusion, because an incomplete essay is heavily penalized for Task Achievement."
            },
            {
              "id": "c",
              "text": "Spend 5 minutes on each."
            },
            {
              "id": "d",
              "text": "Proofread the rest of your essay instead."
            }
          ],
          "correctOptionId": "b",
          "hint": "Think about which action prevents the biggest potential score loss.",
          "explanation": "Failing to complete a section of the writing test (like the conclusion) can severely impact your Task Achievement score, often resulting in a greater penalty than missing a few reading questions."
        }
      ],
      "learningAids": [
        {
          "id": "ielts-prep-101-l12-a1",
          "type": "image",
          "title": "Decision-Making Matrix",
          "content": "A 2x2 grid plotting 'Question Difficulty' vs. 'Time Required', helping students learn to prioritize high-value, low-effort questions first."
        },
        {
          "id": "ielts-prep-101-l12-a2",
          "type": "animation",
          "title": "Simulating Test Day Pressure",
          "content": "A visual of a countdown timer speeding up, illustrating the need for calm, logical decision-making rather than panicked guessing."
        }
      ]
    },
    {
      "id": "ielts-prep-101-l13",
      "title": "Final Readiness Checkpoint",
      "type": "interactive",
      "duration": 10,
      "interactiveActivities": [
        {
          "id": "ielts-prep-101-l13-ia1",
          "type": "drag_and_drop",
          "title": "Pre-Mock Exam Checklist",
          "description": "Organize your final preparation tasks into the correct categories.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "instructions": [
            "Drag each task to the right category.",
            "Check your list.",
            "Use this to prepare for your own mock exam."
          ],
          "data": {
            "targets": [
              {
                "id": "strategy",
                "label": "Strategy Review"
              },
              {
                "id": "mental",
                "label": "Mental Prep"
              },
              {
                "id": "logistics",
                "label": "Logistics"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Confirm timing strategy for each section",
                "correctTargetId": "strategy"
              },
              {
                "id": "d2",
                "label": "Get a good night's sleep",
                "correctTargetId": "mental"
              },
              {
                "id": "d3",
                "label": "Prepare your ID and test day materials",
                "correctTargetId": "logistics"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "ielts-prep-101-l13-a1",
          "type": "image",
          "title": "Test Day Essentials",
          "content": "A flat-lay photo of items needed for test day: passport/ID, pencils, an eraser, and a clear water bottle."
        },
        {
          "id": "ielts-prep-101-l13-a2",
          "type": "animation",
          "title": "Confidence Meter",
          "content": "A gauge graphic that fills up as a student ticks off items on their final readiness checklist, visually reinforcing their preparation."
        }
      ]
    },
    {
      "id": "ielts-prep-101-l14",
      "title": "Full Mock Exam Simulation",
      "type": "quiz",
      "duration": 20,
      "quizBlueprint": {
        "frequency": "mock_assessment",
        "questionsPerCheck": 10,
        "totalQuestions": 10,
        "timeLimitMinutes": 20,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 10,
            "pointsEach": 1,
            "bloomsLevels": [
              3,
              4,
              5
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 5,
          "hard": 3
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.8
      },
      "questions": [
        {
          "id": "ielts-prep-101-l14-q1",
          "text": "After your mock exam, you notice your Reading score was much lower than your Listening score. What is the most likely reason related to strategy?",
          "skillId": "ielts-prep-101-skill-mock-analysis",
          "options": [
            {
              "id": "a",
              "text": "The reading passages were simply too difficult."
            },
            {
              "id": "b",
              "text": "You did not get enough sleep the night before."
            },
            {
              "id": "c",
              "text": "Poor time management led to rushing the final passage."
            },
            {
              "id": "d",
              "text": "The listening audio was unusually clear."
            }
          ],
          "correctOptionId": "c",
          "hint": "Consider factors you can control. A large score difference often points to a process issue.",
          "explanation": "While passage difficulty varies, a significant score drop in Reading is often caused by poor pacing, where students spend too long on early questions and have to guess on the final section."
        }
      ],
      "learningAids": [
        {
          "id": "ielts-prep-101-l14-a1",
          "type": "image",
          "title": "Mock Exam Score Report",
          "content": "A sample report showing scores broken down by section (L, R, W, S) and by question type, helping students pinpoint specific weaknesses."
        },
        {
          "id": "ielts-prep-101-l14-a2",
          "type": "animation",
          "title": "Visualizing Your Score Profile",
          "content": "A radar chart that plots the student's performance across the four skills, providing an immediate visual of their strengths and weaknesses."
        }
      ]
    },
    {
      "id": "ielts-prep-101-l15",
      "title": "Post-Mock Analysis and Improvement Plan",
      "type": "interactive",
      "duration": 15,
      "interactiveActivities": [
        {
          "id": "ielts-prep-101-l15-ia1",
          "type": "sorting_buckets",
          "title": "Prioritizing Your Next Steps",
          "description": "Based on mock results, sort these actions into 'High Priority,' 'Medium Priority,' and 'Low Priority.'",
          "estimatedMinutes": 10,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each action.",
            "Sort into the best priority lane.",
            "Use this logic to build your own study plan."
          ],
          "data": {
            "buckets": [
              {
                "id": "high",
                "label": "High Priority (Do Now)"
              },
              {
                "id": "medium",
                "label": "Medium Priority (Do Next)"
              },
              {
                "id": "low",
                "label": "Low Priority (Do Later)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Practice pacing for my weakest section (Reading)",
                "correctBucketId": "high"
              },
              {
                "id": "i2",
                "label": "Review all grammar errors from my writing tasks",
                "correctBucketId": "high"
              },
              {
                "id": "i3",
                "label": "Redo a full speaking test with a partner",
                "correctBucketId": "medium"
              },
              {
                "id": "i4",
                "label": "Learn advanced vocabulary for obscure topics",
                "correctBucketId": "low"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "ielts-prep-101-l15-a1",
          "type": "image",
          "title": "Sample 1-Week Improvement Plan",
          "content": "A filled-out template for a one-week study plan, with specific, actionable goals based on a mock exam result (e.g., 'Goal: Improve Reading speed by 10%')."
        },
        {
          "id": "ielts-prep-101-l15-a2",
          "type": "animation",
          "title": "The Upward Trend",
          "content": "A simple line graph showing a student's score over time, with a dip for the first mock exam, followed by a steady rise as their improvement plan is implemented."
        }
      ]
    }
  ]
};
