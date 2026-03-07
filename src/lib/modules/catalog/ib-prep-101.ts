import type { LearningModule } from "@/lib/modules/types";

export const ib_prep_101_Module: LearningModule = {
  "id": "ib-prep-101",
  "title": "IB Diploma Success: A Strategic Guide",
  "description": "Master the core components, develop effective study workflows, and build winning exam strategies for the IB Diploma Programme.",
  "subject": "Exam Prep",
  "tags": [
    "exam-prep",
    "ib-diploma",
    "study-skills",
    "advanced"
  ],
  "minAge": 15,
  "maxAge": 19,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Develop a strategic plan for subject selection and managing the core components (EE, TOK, CAS).",
    "Master techniques for deconstructing exam questions and using markschemes effectively.",
    "Implement a cycle of practice, analysis, and targeted revision to improve performance under timed conditions."
  ],
  "quizBlueprint": {
    "frequency": "final_assessment",
    "questionsPerCheck": 40,
    "totalQuestions": 40,
    "timeLimitMinutes": 50,
    "questionTypes": [
      {
        "type": "mcq_single",
        "percentage": 100,
        "pointsEach": 1,
        "bloomsLevels": [
          2,
          3,
          4,
          5
        ]
      }
    ],
    "difficultyDistribution": {
      "easy": 8,
      "medium": 20,
      "hard": 12
    },
    "feedbackMode": "after_submit",
    "adaptive": false,
    "masteryThreshold": 0.8
  },
  "lessons": [
    {
      "id": "ib-prep-101-l01",
      "title": "Understanding the IB Diploma: Core Components & Subject Selection",
      "type": "video",
      "duration": 10,
      "learningAids": [
        {
          "id": "ib-prep-101-l01-a1",
          "type": "image",
          "title": "The IB Diploma Hexagon",
          "content": "A visual diagram showing the six subject groups surrounding the three core components: Extended Essay (EE), Theory of Knowledge (TOK), and Creativity, Activity, Service (CAS)."
        },
        {
          "id": "ib-prep-101-l01-a2",
          "type": "animation",
          "title": "Subject Selection Pathways",
          "content": "Animated flowchart showing how different HL/SL subject choices can lead to various university and career paths."
        }
      ]
    },
    {
      "id": "ib-prep-101-l02",
      "title": "Strategic Subject Choices: Maximizing Your HL/SL Potential",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Based on the activity, identify one personal strength that makes a subject a good fit for you at HL.",
          "Describe how your chosen HL subjects complement each other.",
          "Set a goal to speak with a teacher or counselor about your proposed subject choices this week."
        ]
      },
      "interactiveActivities": [
        {
          "id": "ib-prep-101-l02-ia1",
          "type": "sorting_buckets",
          "title": "HL vs. SL Decision Matrix",
          "description": "Sort subject characteristics and personal strengths into 'Good fit for HL' or 'Good fit for SL' buckets to clarify your choices.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Consider each characteristic or skill.",
            "Drag it to the bucket where it is most critical.",
            "Review your sort to identify patterns in your own strengths."
          ],
          "data": {
            "buckets": [
              {
                "id": "hl_fit",
                "label": "Good Fit for HL"
              },
              {
                "id": "sl_fit",
                "label": "Good Fit for SL"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Deep passion for the subject",
                "correctBucketId": "hl_fit"
              },
              {
                "id": "i2",
                "label": "Required for university major",
                "correctBucketId": "hl_fit"
              },
              {
                "id": "i3",
                "label": "Provides breadth to your diploma",
                "correctBucketId": "sl_fit"
              },
              {
                "id": "i4",
                "label": "Strong foundational knowledge",
                "correctBucketId": "sl_fit"
              },
              {
                "id": "i5",
                "label": "Willingness to do independent research",
                "correctBucketId": "hl_fit"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "ib-prep-101-l02-a1",
          "type": "image",
          "title": "Sample Student Timetable",
          "content": "A visual example of a balanced weekly schedule for an IB student with 3 HL and 3 SL subjects, showing dedicated time for core components."
        }
      ]
    },
    {
      "id": "ib-prep-101-l03",
      "title": "Mastering Theory of Knowledge (TOK): Crafting Cogent Arguments",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "ib-prep-101-l03-q1",
          "text": "What is the primary purpose of a Knowledge Question (KQ) in TOK?",
          "skillId": "ib-prep-skill-tok-foundations",
          "options": [
            {
              "id": "a",
              "text": "To ask a question with a simple 'yes' or 'no' answer."
            },
            {
              "id": "b",
              "text": "To explore how we know what we claim to know, focusing on concepts of knowledge."
            },
            {
              "id": "c",
              "text": "To test factual recall about a specific subject."
            },
            {
              "id": "d",
              "text": "To summarize a real-life situation without analysis."
            }
          ],
          "correctOptionId": "b",
          "hint": "Think about the 'Theory of Knowledge' itself. What is it about?",
          "explanation": "A Knowledge Question is open-ended and contested, focusing on the methods and concepts of knowledge construction, not just on facts."
        },
        {
          "id": "ib-prep-101-l03-q2",
          "text": "In a TOK essay, what is the role of a 'counterclaim'?",
          "skillId": "ib-prep-skill-tok-argument",
          "options": [
            {
              "id": "a",
              "text": "To prove the main claim is wrong."
            },
            {
              "id": "b",
              "text": "To introduce an irrelevant idea to fill space."
            },
            {
              "id": "c",
              "text": "To present an alternative perspective or argument, adding nuance and depth."
            },
            {
              "id": "d",
              "text": "To repeat the main claim in different words."
            }
          ],
          "correctOptionId": "c",
          "hint": "Strong arguments consider multiple viewpoints.",
          "explanation": "A counterclaim demonstrates critical thinking by acknowledging and exploring other valid perspectives, which strengthens the overall analysis."
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
      },
      "learningAids": [
        {
          "id": "ib-prep-101-l03-a1",
          "type": "image",
          "title": "TOK Argument Structure",
          "content": "A diagram illustrating the relationship between a knowledge question, claims, counterclaims, and evidence from Areas of Knowledge (AOKs) and Ways of Knowing (WOKs)."
        },
        {
          "id": "ib-prep-101-l03-a2",
          "type": "animation",
          "title": "Deconstructing a TOK Prompt",
          "content": "An animation that breaks down a sample TOK essay prompt, highlighting key terms and underlying assumptions to explore."
        }
      ]
    },
    {
      "id": "ib-prep-101-l04",
      "title": "The Extended Essay (EE): A Step-by-Step Research Workflow",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Identify one key milestone from your EE timeline that you need to focus on next.",
          "What is a potential challenge you might face in meeting that milestone?",
          "List one action you can take this week to move forward on your EE."
        ]
      },
      "interactiveActivities": [
        {
          "id": "ib-prep-101-l04-ia1",
          "type": "drag_and_drop",
          "title": "Build Your EE Timeline",
          "description": "Drag key milestones onto a timeline to create a realistic project plan for your 4,000-word essay.",
          "estimatedMinutes": 10,
          "difficultyLevel": "medium",
          "instructions": [
            "Drag each EE stage to its logical place on the timeline.",
            "Ensure the sequence creates a manageable workflow.",
            "Use this model to plan your own EE schedule."
          ],
          "data": {
            "targets": [
              {
                "id": "month1",
                "label": "Months 1-2"
              },
              {
                "id": "month3",
                "label": "Months 3-4"
              },
              {
                "id": "month5",
                "label": "Months 5-6"
              },
              {
                "id": "month7",
                "label": "Months 7-8"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Explore Topics & Finalize Research Question",
                "correctTargetId": "month1"
              },
              {
                "id": "d2",
                "label": "Conduct Research & Create Detailed Outline",
                "correctTargetId": "month3"
              },
              {
                "id": "d3",
                "label": "Write Full First Draft",
                "correctTargetId": "month5"
              },
              {
                "id": "d4",
                "label": "Edit, Finalize, and Prepare for Viva Voce",
                "correctTargetId": "month7"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "ib-prep-101-l04-a1",
          "type": "image",
          "title": "Research Question Funnel",
          "content": "A graphic showing the process of narrowing a broad topic (e.g., 'World War II') down to a focused, arguable EE research question."
        }
      ]
    },
    {
      "id": "ib-prep-101-l05",
      "title": "Excelling in Internal Assessments (IAs): From Planning to Submission",
      "type": "video",
      "duration": 11,
      "learningAids": [
        {
          "id": "ib-prep-101-l05-a1",
          "type": "image",
          "title": "IA Criterion Checklist (Science)",
          "content": "A visual checklist summarizing the key criteria for a high-scoring science IA: Personal Engagement, Exploration, Analysis, Evaluation, and Communication."
        },
        {
          "id": "ib-prep-101-l05-a2",
          "type": "animation",
          "title": "Anatomy of a History IA",
          "content": "An animated breakdown of a sample History IA, showing how the Identification and Evaluation of Sources, Investigation, and Reflection sections work together."
        }
      ]
    },
    {
      "id": "ib-prep-101-l06",
      "title": "Decoding the Exam: Command Terms and Markscheme Mastery",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "ib-prep-101-l06-q1",
          "text": "The command term 'Evaluate' requires you to do which of the following?",
          "skillId": "ib-prep-skill-command-terms",
          "options": [
            {
              "id": "a",
              "text": "Simply list the pros and cons of a topic."
            },
            {
              "id": "b",
              "text": "Describe a topic in detail."
            },
            {
              "id": "c",
              "text": "Make an appraisal by weighing the strengths and limitations, and provide a concluding judgment."
            },
            {
              "id": "d",
              "text": "Give a brief summary of the main points."
            }
          ],
          "correctOptionId": "c",
          "hint": "Evaluation involves making a judgment.",
          "explanation": "'Evaluate' is a higher-order command term that requires you to assess the value or success of something, supported by evidence, and come to a clear conclusion."
        },
        {
          "id": "ib-prep-101-l06-q2",
          "text": "How does a response to 'Discuss' differ from a response to 'Explain'?",
          "skillId": "ib-prep-skill-command-terms",
          "options": [
            {
              "id": "a",
              "text": "They are identical in meaning."
            },
            {
              "id": "b",
              "text": "'Explain' requires a detailed account, while 'Discuss' requires a balanced review including a range of arguments and perspectives."
            },
            {
              "id": "c",
              "text": "'Discuss' is for essays, while 'Explain' is for short-answer questions."
            },
            {
              "id": "d",
              "text": "'Explain' requires opinions, while 'Discuss' requires only facts."
            }
          ],
          "correctOptionId": "b",
          "hint": "Think about a conversation versus a lecture.",
          "explanation": "'Explain' focuses on making something clear (how/why). 'Discuss' requires you to consider the topic from multiple angles and present a reasoned argument that explores various viewpoints."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ib-prep-101-l06-ia1",
          "type": "matching_pairs",
          "title": "Command Term Match-Up",
          "description": "Match each IB command term to its precise definition and required action.",
          "estimatedMinutes": 5,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the command term on the left.",
            "Find its correct definition on the right.",
            "Match all pairs to complete the activity."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Analyse"
              },
              {
                "id": "l2",
                "label": "Compare and contrast"
              },
              {
                "id": "l3",
                "label": "To what extent"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Break down in order to bring out the essential elements or structure."
              },
              {
                "id": "r2",
                "label": "Give an account of the similarities and differences between two (or more) items."
              },
              {
                "id": "r3",
                "label": "Consider the merits or otherwise of an argument or concept."
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
              4
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
      "id": "ib-prep-101-l07",
      "title": "Strategic Time Management: Balancing Deadlines and Study",
      "type": "interactive",
      "duration": 13,
      "metadata": {
        "prompts": [
          "Identify one task you often procrastinate on that falls into the 'Important, Not Urgent' quadrant.",
          "What is the first small step you can take to start that task?",
          "Schedule a 25-minute Pomodoro session in your calendar this week for that specific task."
        ]
      },
      "interactiveActivities": [
        {
          "id": "ib-prep-101-l07-ia1",
          "type": "drag_and_drop",
          "title": "The Eisenhower Matrix for IB",
          "description": "Categorize typical IB tasks into Urgent/Important quadrants to prioritize your workload effectively.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Drag each task to the quadrant that best describes it.",
            "Focus on tasks in the 'Important, Not Urgent' quadrant for long-term success."
          ],
          "data": {
            "targets": [
              {
                "id": "q1",
                "label": "Urgent & Important (Do First)"
              },
              {
                "id": "q2",
                "label": "Important, Not Urgent (Schedule)"
              },
              {
                "id": "q3",
                "label": "Urgent, Not Important (Delegate/Minimize)"
              },
              {
                "id": "q4",
                "label": "Not Urgent, Not Important (Eliminate)"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "IA draft due tomorrow",
                "correctTargetId": "q1"
              },
              {
                "id": "d2",
                "label": "Start research for Extended Essay",
                "correctTargetId": "q2"
              },
              {
                "id": "d3",
                "label": "Reply to a non-essential group chat message",
                "correctTargetId": "q3"
              },
              {
                "id": "d4",
                "label": "Mindlessly scrolling social media",
                "correctTargetId": "q4"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "ib-prep-101-l07-a1",
          "type": "image",
          "title": "Pomodoro Technique for IB",
          "content": "A graphic explaining how to use the Pomodoro Technique (25 min focus, 5 min break) for sustained study sessions on major projects like the EE and IAs."
        }
      ]
    },
    {
      "id": "ib-prep-101-l08",
      "title": "Learning from the Past: Creating an Effective Past Paper Analysis Loop",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "ib-prep-101-l08-a1",
          "type": "image",
          "title": "The Error Analysis Log",
          "content": "A sample template for an error log, with columns for Question, My Answer, Correct Answer, and Type of Error (e.g., Concept Gap, Misread Question, Careless Mistake, Time Pressure)."
        },
        {
          "id": "ib-prep-101-l08-a2",
          "type": "animation",
          "title": "The Practice-Analyze-Revise Cycle",
          "content": "An animated loop showing the process: 1. Complete a past paper under timed conditions. 2. Mark the paper and log errors. 3. Focus revision on the weakest areas. 4. Repeat."
        }
      ]
    },
    {
      "id": "ib-prep-101-l09",
      "title": "Targeted Revision: Identifying and Closing Knowledge Gaps",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Based on your self-assessment, what is your top priority topic for revision?",
          "What specific revision activity (e.g., practice questions, concept mapping) will you use for this topic?",
          "How will you check if you have successfully closed this knowledge gap?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "ib-prep-101-l09-ia1",
          "type": "self_assessment",
          "title": "My Revision Priority Planner",
          "description": "Rate your confidence level for different topics within a subject to generate a prioritized revision list.",
          "estimatedMinutes": 9,
          "difficultyLevel": "easy",
          "instructions": [
            "For each topic in your chosen subject, select your current confidence level.",
            "The tool will highlight the topics rated 'Low Confidence' as your top priorities.",
            "Use this list to structure your study plan."
          ],
          "data": {
            "subject": "IB Biology HL",
            "topics": [
              "Cell Biology",
              "Molecular Biology",
              "Genetics",
              "Ecology",
              "Evolution and Biodiversity",
              "Human Physiology"
            ],
            "confidenceLevels": [
              "Low",
              "Medium",
              "High"
            ]
          }
        }
      ]
    },
    {
      "id": "ib-prep-101-l10",
      "title": "Practice Under Pressure: Timed Drills for Core Skills",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "ib-prep-101-l10-q1",
          "text": "In a 90-minute exam worth 60 marks, approximately how much time should you allocate per mark?",
          "skillId": "ib-prep-skill-pacing",
          "options": [
            {
              "id": "a",
              "text": "30 seconds per mark"
            },
            {
              "id": "b",
              "text": "1 minute per mark"
            },
            {
              "id": "c",
              "text": "1.5 minutes per mark"
            },
            {
              "id": "d",
              "text": "2 minutes per mark"
            }
          ],
          "correctOptionId": "c",
          "hint": "Divide the total minutes by the total marks.",
          "explanation": "90 minutes / 60 marks = 1.5 minutes per mark. This is a useful guideline for pacing yourself during the exam."
        },
        {
          "id": "ib-prep-101-l10-q2",
          "text": "You have 10 minutes left and two questions remaining. One is a 4-mark question you know how to do. The other is an 8-mark question you are unsure about. What is the best strategy?",
          "skillId": "ib-prep-skill-exam-strategy",
          "options": [
            {
              "id": "a",
              "text": "Spend all 10 minutes on the 8-mark question to maximize potential points."
            },
            {
              "id": "b",
              "text": "Secure the 4 marks on the question you know, then use the remaining time on the harder one."
            },
            {
              "id": "c",
              "text": "Guess randomly on both and hope for the best."
            },
            {
              "id": "d",
              "text": "Leave both blank to avoid losing marks."
            }
          ],
          "correctOptionId": "b",
          "hint": "Bank the points you are sure of first.",
          "explanation": "It's better to guarantee some points than to risk getting zero on both. Securing the 4 marks first is the most efficient use of your limited time."
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
              3,
              5
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 0,
          "medium": 2,
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 1
      },
      "learningAids": [
        {
          "id": "ib-prep-101-l10-a1",
          "type": "image",
          "title": "Pacing Chart",
          "content": "A sample chart showing how to allocate time per mark in a typical IB exam paper, including built-in time for planning and review."
        }
      ]
    },
    {
      "id": "ib-prep-101-l11",
      "title": "Integrated Practice: Simulating Mixed-Component Challenges",
      "type": "video",
      "duration": 10,
      "learningAids": [
        {
          "id": "ib-prep-101-l11-a1",
          "type": "image",
          "title": "Interleaving Study Schedule",
          "content": "A visual schedule showing how to mix practice from different subjects (e.g., Math, Biology, TOK) in one study session to improve long-term retention and mental flexibility."
        },
        {
          "id": "ib-prep-101-l11-a2",
          "type": "animation",
          "title": "Connecting the Core",
          "content": "An animation showing how a concept from a subject (e.g., ethics in science) can be explored in a TOK discussion and potentially become the focus of an Extended Essay."
        }
      ]
    },
    {
      "id": "ib-prep-101-l12",
      "title": "Full-Scale Exam Simulation: Replicating Test Day Conditions",
      "type": "quiz",
      "duration": 25,
      "questions": [
        {
          "id": "ib-prep-101-l12-q1",
          "text": "Which of the following is a key feature of a command term like 'Justify'?",
          "skillId": "ib-prep-skill-command-terms",
          "options": [
            {
              "id": "a",
              "text": "Give a sequence of events."
            },
            {
              "id": "b",
              "text": "Provide evidence and reasoning to support an argument or conclusion."
            },
            {
              "id": "c",
              "text": "State the main features."
            },
            {
              "id": "d",
              "text": "Draw a diagram."
            }
          ],
          "correctOptionId": "b",
          "hint": "Justification requires proof.",
          "explanation": "To 'Justify' means you must provide valid reasons or evidence to support an answer or conclusion, going beyond a simple description."
        },
        {
          "id": "ib-prep-101-l12-q2",
          "text": "When analyzing a data-based question in science, what should be your first step?",
          "skillId": "ib-prep-skill-data-analysis",
          "options": [
            {
              "id": "a",
              "text": "Immediately start writing your answer."
            },
            {
              "id": "b",
              "text": "Read the question carefully, then examine the graph/table, paying attention to titles, axes, and units."
            },
            {
              "id": "c",
              "text": "Look for the most complex data point and focus only on that."
            },
            {
              "id": "d",
              "text": "Guess the trend without looking at the data."
            }
          ],
          "correctOptionId": "b",
          "hint": "Understand the context before you interpret.",
          "explanation": "A systematic approach is crucial. Understanding what the data represents by reading all labels and context is the essential first step before any analysis or conclusion."
        },
        {
          "id": "ib-prep-101-l12-q3",
          "text": "In a history essay, what is the most effective way to use historical evidence?",
          "skillId": "ib-prep-skill-evidence-use",
          "options": [
            {
              "id": "a",
              "text": "List as many facts as possible without connection."
            },
            {
              "id": "b",
              "text": "Integrate specific, relevant evidence directly into your argument to support your claims."
            },
            {
              "id": "c",
              "text": "Mention a historian's name without explaining their viewpoint."
            },
            {
              "id": "d",
              "text": "Use only primary sources and ignore secondary sources."
            }
          ],
          "correctOptionId": "b",
          "hint": "Evidence should serve your argument, not just exist on the page.",
          "explanation": "Effective essays weave evidence seamlessly into the analytical framework, using it to substantiate the points being made in each paragraph."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 3,
        "totalQuestions": 3,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 3,
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
          "medium": 1,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.67
      }
    },
    {
      "id": "ib-prep-101-l13",
      "title": "Post-Simulation Debrief: Analyzing Performance and Adapting Your Strategy",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Think of one mistake you made in your last practice test. Apply the '5 Whys' to find its root cause.",
          "What is one specific, actionable change you can make to your process to prevent this error in the future?",
          "Schedule a short, focused practice session to implement and test this new strategy."
        ]
      },
      "interactiveActivities": [
        {
          "id": "ib-prep-101-l13-ia1",
          "type": "text_input",
          "title": "5 Whys: Uncovering Exam Errors",
          "description": "For a sample exam error, ask 'Why?' five times to drill down from the surface mistake to the root cause. Example: 'I ran out of time on the last question.'",
          "estimatedMinutes": 10,
          "difficultyLevel": "hard",
          "instructions": [
            "Start with an error you made (e.g., 'I got a calculation wrong').",
            "Ask 'Why did that happen?' and write the answer.",
            "Ask 'Why?' of that answer, and repeat five times.",
            "The final 'Why' often reveals the true process or concept issue to fix."
          ],
          "data": {
            "prompts": [
              "1. Why did I run out of time?",
              "2. Why did I spend too much time on other questions?",
              "3. Why did I get stuck on the essay?",
              "4. Why didn't I have a clear plan for the essay?",
              "5. Why didn't I practice planning essays under timed conditions?"
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "ib-prep-101-l13-a1",
          "type": "image",
          "title": "Performance Analytics Dashboard",
          "content": "A mock-up of a dashboard showing a student's performance breakdown by topic, question type, and time spent, helping to visually identify areas for improvement."
        }
      ]
    },
    {
      "id": "ib-prep-101-l14",
      "title": "Final Readiness Checkpoint: Consolidating Skills and Knowledge",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "ib-prep-101-l14-a1",
          "type": "image",
          "title": "Pre-Exam Checklist",
          "content": "A simple, visual checklist of things to do the day before and the morning of the exam: pack your bag (pens, calculator, ID), check the venue/time, get a good night's sleep, eat a healthy breakfast."
        },
        {
          "id": "ib-prep-101-l14-a2",
          "type": "animation",
          "title": "Mindful Minute",
          "content": "A short, calming animation guiding students through a one-minute breathing exercise to manage exam-day anxiety."
        }
      ]
    },
    {
      "id": "ib-prep-101-l15",
      "title": "The Final Sprint: Pre-Exam Strategies and Reflective Practice",
      "type": "quiz",
      "duration": 20,
      "questions": [
        {
          "id": "ib-prep-101-l15-q1",
          "text": "On exam day, you open the paper and feel overwhelmed. What is the best first action to take?",
          "skillId": "ib-prep-skill-mindset",
          "options": [
            {
              "id": "a",
              "text": "Start with the hardest question to get it over with."
            },
            {
              "id": "b",
              "text": "Close your eyes, take three slow, deep breaths, then read the instructions carefully."
            },
            {
              "id": "c",
              "text": "Immediately start writing anything to get going."
            },
            {
              "id": "d",
              "text": "Look at what other students are doing."
            }
          ],
          "correctOptionId": "b",
          "hint": "Manage your state before you manage the test.",
          "explanation": "Taking a moment to calm your nervous system allows you to think more clearly. It prevents panic and helps you approach the exam with a strategic, focused mindset."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ib-prep-101-l15-ia1",
          "type": "text_input",
          "title": "My IB Exam Day Game Plan",
          "description": "Write down three key process goals for your exam (e.g., 'I will spend 2 minutes planning my essay,' 'I will check my work on flagged questions').",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "instructions": [
            "Reflect on your practice and identify what works for you.",
            "Write three simple, actionable goals for how you will approach the exam.",
            "Review these goals just before you go into the exam hall."
          ],
          "data": {
            "prompts": [
              "Process Goal 1:",
              "Process Goal 2:",
              "Process Goal 3:"
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 1,
        "totalQuestions": 1,
        "timeLimitMinutes": 5,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 1,
            "pointsEach": 1,
            "bloomsLevels": [
              5
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
    }
  ]
};
