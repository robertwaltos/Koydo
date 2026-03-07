import type { LearningModule } from "@/lib/modules/types";

export const atar_prep_101_Module: LearningModule = {
  "id": "atar-prep-101",
  "title": "ATAR Prep Foundations",
  "description": "Level up your ATAR prep with smart subject scaling strategies, high-yield revision systems, and elite exam techniques designed to maximize your final score.",
  "subject": "Exam Prep",
  "tags": [
    "exam-prep",
    "assessment",
    "advanced",
    "study-skills",
    "atar"
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
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Build structured, high-efficiency ATAR study workflows",
    "Master speed and accuracy under intense timed conditions",
    "Use data-driven revision loops to crush your weak spots"
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
      "id": "atar-prep-101-l01",
      "title": "ATAR Pathways and Subject Selection",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A cinematic, modern illustration of a high school student looking at a glowing, futuristic roadmap of university pathways, neon blue and purple tones, highly detailed, lo-fi study aesthetic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic 3D animation showing a glowing compass navigating through different academic subjects, with a sleek, modern UI overlay displaying ATAR scaling graphs and upward trending arrows.",
      "learningAids": [
        {
          "id": "atar-prep-101-l01-a1",
          "type": "image",
          "title": "Subject Scaling Snapshot",
          "content": "A quick visual guide breaking down how subject scaling actually works, so you can plan your practice sets strategically."
        },
        {
          "id": "atar-prep-101-l01-a2",
          "type": "animation",
          "title": "Exam Technique Walkthrough",
          "content": "A step-by-step animation showing how to log your exam strategies and track your progress over time."
        }
      ],
      "imageUrl": "/generated-images/refinery/atar-prep-101-l01.png"
    },
    {
      "id": "atar-prep-101-l02",
      "title": "Study Design Interpretation",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A top-down view of a sleek, modern desk setup with an iPad displaying a colorful, interactive syllabus map, surrounded by highlighters and a coffee cup, photorealistic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: Fast-paced motion graphics breaking down a complex syllabus document into glowing, bite-sized puzzle pieces that snap together to form a clear study plan.",
      "metadata": {
        "prompts": [
          "Identify one key rule from your subject's study design.",
          "Apply this rule to your next practice set to stay focused on high-yield topics.",
          "Set a concrete goal for your next study session based on the syllabus."
        ]
      },
      "interactiveActivities": [
        {
          "id": "atar-prep-101-l02-ia1",
          "type": "drag_and_drop",
          "title": "Decision-Phase Mapping",
          "description": "Drag each study decision to the right phase: Plan, Execute, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each study action.",
            "Drag it to the phase where it belongs.",
            "Review your answers to build a solid study routine."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan (Before)"
              },
              {
                "id": "execute",
                "label": "Execute (During)"
              },
              {
                "id": "reflect",
                "label": "Reflect (After)"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Align weekly revision to syllabus priorities",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Run a timed practice set under exam conditions",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Review the marking rubric and track lost marks",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "atar-prep-101-l02-a1",
          "type": "image",
          "title": "Syllabus Breakdown",
          "content": "A visual map showing how to extract the most important dot points from your study design."
        },
        {
          "id": "atar-prep-101-l02-a2",
          "type": "animation",
          "title": "The Plan-Execute-Reflect Loop",
          "content": "An animated flowchart showing the ultimate study cycle for ATAR success."
        }
      ],
      "imageUrl": "/generated-images/refinery/atar-prep-101-l02.png"
    },
    {
      "id": "atar-prep-101-l03",
      "title": "Exam Technique by Subject Type",
      "type": "quiz",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A split-screen illustration showing a math equation on one side and an English essay on the other, connected by glowing neural pathways, vibrant colors.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A kinetic typography video highlighting different exam command words like 'Analyze', 'Evaluate', and 'Calculate', morphing into the specific structures needed to answer them.",
      "questions": [
        {
          "id": "atar-prep-101-l03-q1",
          "text": "You keep losing marks on 'Evaluate' questions in Humanities subjects. What's the best adjustment to make before your next practice set?",
          "skillId": "atar-prep-101-skill-exam-technique-workflow",
          "options": [
            {
              "id": "a",
              "text": "Skip the review and just do more multiple-choice questions."
            },
            {
              "id": "b",
              "text": "Memorize more facts and dates."
            },
            {
              "id": "c",
              "text": "Create a specific structural template for 'Evaluate' questions and practice applying it to three past paper prompts."
            },
            {
              "id": "d",
              "text": "Switch to studying Math instead."
            }
          ],
          "correctOptionId": "c",
          "hint": "Command words require specific structures, not just more facts.",
          "explanation": "Building and practicing a specific template for high-level command words is the fastest way to secure those marks."
        },
        {
          "id": "atar-prep-101-l03-q2",
          "text": "During a STEM practice exam, you notice you always run out of time on the final extended response. What should you diagnose first?",
          "skillId": "atar-prep-101-skill-subject-scaling-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Just write faster during the whole exam."
            },
            {
              "id": "b",
              "text": "Do more questions in your practice sets to build stamina."
            },
            {
              "id": "c",
              "text": "Use the exact same time limit for every single question."
            },
            {
              "id": "d",
              "text": "Identify which earlier section is eating up your time, and set strict time checkpoints for it."
            }
          ],
          "correctOptionId": "d",
          "hint": "Find the root cause of the time drain.",
          "explanation": "Pacing issues at the end of an exam are usually caused by spending too much time on earlier, lower-mark sections. Set checkpoints to fix this."
        },
        {
          "id": "atar-prep-101-l03-q3",
          "text": "You've reviewed your mistakes from a recent practice essay, but you keep making the same structural errors. How do you fix this?",
          "skillId": "atar-prep-101-skill-revision-cycles-transfer",
          "options": [
            {
              "id": "a",
              "text": "Rewrite the exact same essay until it's perfect."
            },
            {
              "id": "b",
              "text": "Write a brand new essay under timed conditions, specifically focusing on applying the corrected structure."
            },
            {
              "id": "c",
              "text": "Just read high-scoring exemplar essays."
            },
            {
              "id": "d",
              "text": "Highlight your notes in different colors."
            }
          ],
          "correctOptionId": "b",
          "hint": "You need to test your new skills in a fresh scenario.",
          "explanation": "Corrections only stick when you force yourself to apply them to a new, unseen prompt under realistic conditions."
        },
        {
          "id": "atar-prep-101-l03-q4",
          "text": "When reviewing a mixed-subject practice week, which issue should you prioritize fixing first to maximize your ATAR?",
          "skillId": "atar-prep-101-skill-performance-stability-priority",
          "options": [
            {
              "id": "a",
              "text": "A minor calculation error in a topic you usually ace."
            },
            {
              "id": "b",
              "text": "A recurring issue with misreading the question across multiple subjects."
            },
            {
              "id": "c",
              "text": "Learning a highly obscure, low-yield fact just in case."
            },
            {
              "id": "d",
              "text": "Making your study notes look more aesthetic."
            }
          ],
          "correctOptionId": "b",
          "hint": "Fix the problem that affects the most marks.",
          "explanation": "Process errors (like misreading questions) bleed across all subjects and cost massive marks. Fix these foundational habits first."
        },
        {
          "id": "atar-prep-101-l03-q5",
          "text": "In a criteria-heavy subject like English or History, you notice you aren't using enough subject-specific terminology. What's the best immediate fix?",
          "skillId": "atar-prep-101-skill-exam-technique-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore it and focus on writing more words."
            },
            {
              "id": "b",
              "text": "Read the textbook again."
            },
            {
              "id": "c",
              "text": "Create a 'vocab bank' and actively force yourself to integrate 3-5 key terms into your topic sentences during your next practice."
            },
            {
              "id": "d",
              "text": "Wait until the night before the exam to memorize terms."
            }
          ],
          "correctOptionId": "c",
          "hint": "You need an active strategy to force the vocabulary into your writing.",
          "explanation": "Actively integrating terms into high-impact areas like topic sentences ensures the examiner sees them immediately."
        },
        {
          "id": "atar-prep-101-l03-q6",
          "text": "You consistently panic and rush the last 15 minutes of your exams. What is the best strategy to implement before your next mock?",
          "skillId": "atar-prep-101-skill-subject-scaling-section-application",
          "options": [
            {
              "id": "a",
              "text": "Study harder content so the exam feels easier."
            },
            {
              "id": "b",
              "text": "Drink more caffeine before the exam."
            },
            {
              "id": "c",
              "text": "Just tell yourself to calm down."
            },
            {
              "id": "d",
              "text": "Establish hard time-checkpoints for each section and practice strictly moving on when the time is up, logging your success rate."
            }
          ],
          "correctOptionId": "d",
          "hint": "You need a measurable system to control your pacing.",
          "explanation": "Panic comes from a lack of control. Hard checkpoints force you to manage your time proactively rather than reacting at the end."
        }
      ],
      "interactiveActivities": [
        {
          "id": "atar-prep-101-l03-ia1",
          "type": "matching_pairs",
          "title": "Correction Alignment",
          "description": "Match the common exam mistake with the ultimate strategy to fix it.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the exam mistake on the left.",
            "Match it with the best correction strategy on the right.",
            "Apply one of these fixes to your next study session."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Great knowledge, but missing marks in extended responses"
              },
              {
                "id": "l2",
                "label": "Studying for hours, but scores aren't improving"
              },
              {
                "id": "l3",
                "label": "Scores fluctuate wildly between different practice exams"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Deconstruct the rubric and map your paragraphs to specific criteria"
              },
              {
                "id": "r2",
                "label": "Shift focus from passive reading to active recall and timed practice"
              },
              {
                "id": "r3",
                "label": "Implement a pre-exam checklist and track your pacing variance"
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
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 3,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "metadata": {
        "examDrill": "lesson_drill"
      },
      "learningAids": [
        {
          "id": "atar-prep-101-l03-a1",
          "type": "image",
          "title": "Command Word Cheat Sheet",
          "content": "A quick reference guide for decoding what examiners actually want when they say 'Analyze' vs 'Evaluate'."
        },
        {
          "id": "atar-prep-101-l03-a2",
          "type": "animation",
          "title": "Pacing Breakdown",
          "content": "An animation showing how to divide your exam time based on the marks allocated per section."
        }
      ],
      "imageUrl": "/generated-images/refinery/atar-prep-101-l03.png"
    },
    {
      "id": "atar-prep-101-l04",
      "title": "High-Value Topic Prioritization",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing, holographic pyramid showing different study topics, with the top tier glowing bright gold to represent high-yield concepts, dark background, cyberpunk aesthetic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A visual metaphor of a student sorting through a massive pile of rocks, using a glowing sieve to filter out the 'gold nuggets' (high-yield topics) from the gravel.",
      "metadata": {
        "prompts": [
          "Identify one high-yield topic in your weakest subject.",
          "Allocate 30 extra minutes this week specifically to that topic.",
          "Track your confidence level before and after the session."
        ]
      },
      "interactiveActivities": [
        {
          "id": "atar-prep-101-l04-ia1",
          "type": "drag_and_drop",
          "title": "Triage Your Study List",
          "description": "Sort these study tasks by their impact on your final ATAR.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Look at the study tasks.",
            "Drag them into High Impact, Medium Impact, or Low Impact.",
            "Focus your real-life study on the High Impact zone."
          ],
          "data": {
            "targets": [
              {
                "id": "high",
                "label": "High Impact (Do Now)"
              },
              {
                "id": "medium",
                "label": "Medium Impact (Schedule)"
              },
              {
                "id": "low",
                "label": "Low Impact (Drop/Delay)"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Fixing a recurring error in a heavily weighted exam section",
                "correctTargetId": "high"
              },
              {
                "id": "d2",
                "label": "Reviewing flashcards for a topic you already score 90% on",
                "correctTargetId": "low"
              },
              {
                "id": "d3",
                "label": "Doing a timed practice paper for a moderately difficult subject",
                "correctTargetId": "medium"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "atar-prep-101-l04-a1",
          "type": "image",
          "title": "The 80/20 Rule in ATAR",
          "content": "A visual breakdown of the Pareto Principle: how 20% of your syllabus often accounts for 80% of your exam marks."
        },
        {
          "id": "atar-prep-101-l04-a2",
          "type": "animation",
          "title": "Triage Strategy",
          "content": "An animation showing how to ruthlessly prioritize your study queue when you are short on time."
        }
      ],
      "imageUrl": "/generated-images/refinery/atar-prep-101-l04.png"
    },
    {
      "id": "atar-prep-101-l05",
      "title": "Timed Response Quality Control",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A close-up of a sleek digital stopwatch hitting zero, with a perfectly structured essay visible in the blurred background, dramatic lighting, focus on the timer.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A split-screen animation showing two students taking an exam: one rushing and making messy mistakes, the other using a smooth, rhythmic pacing strategy with quality checkpoints.",
      "learningAids": [
        {
          "id": "atar-prep-101-l05-a1",
          "type": "image",
          "title": "Quality vs. Speed Graph",
          "content": "A graph showing the 'sweet spot' where you are writing fast enough to finish, but slow enough to maintain high marks."
        },
        {
          "id": "atar-prep-101-l05-a2",
          "type": "animation",
          "title": "The 3-Minute Review Hack",
          "content": "An animation demonstrating how saving 3 minutes at the end of a section to proofread can save you a full grade boundary."
        }
      ],
      "imageUrl": "/generated-images/refinery/atar-prep-101-l05.png"
    },
    {
      "id": "atar-prep-101-l06",
      "title": "Marking Criteria and Self-Assessment",
      "type": "quiz",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A student's perspective looking down at an exam paper, holding a glowing red pen, with holographic marking criteria floating above the page, futuristic education vibe.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animation of an exam paper being scanned by a laser, highlighting the exact keywords and phrases that trigger marks according to the examiner's rubric.",
      "questions": [
        {
          "id": "atar-prep-101-l06-q1",
          "text": "You just finished a practice essay. What is the most effective way to grade it yourself?",
          "skillId": "atar-prep-101-skill-subject-scaling-workflow",
          "options": [
            {
              "id": "a",
              "text": "Read it over and guess a score based on how good it sounds."
            },
            {
              "id": "b",
              "text": "Use the official marking rubric, highlight where you hit specific criteria, and be brutally honest about what's missing."
            },
            {
              "id": "c",
              "text": "Only look at the spelling and grammar."
            },
            {
              "id": "d",
              "text": "Give it to a friend who doesn't study the subject."
            }
          ],
          "correctOptionId": "b",
          "hint": "Think like the examiner. They don't grade on 'vibes'.",
          "explanation": "Examiners use strict rubrics. By forcing yourself to find the exact criteria in your own work, you learn exactly what they are looking for."
        },
        {
          "id": "atar-prep-101-l06-q2",
          "text": "You notice you always score 3/5 on short answer questions, missing the top marks. What's the likely issue?",
          "skillId": "atar-prep-101-skill-exam-technique-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "You are writing too neatly."
            },
            {
              "id": "b",
              "text": "You don't know the content at all."
            },
            {
              "id": "c",
              "text": "You are stating facts but failing to link them back to the specific 'why' or 'how' demanded by the rubric."
            },
            {
              "id": "d",
              "text": "You are using too many big words."
            }
          ],
          "correctOptionId": "c",
          "hint": "Top marks require depth, not just breadth.",
          "explanation": "Getting 3/5 usually means you know the basic facts. The final 2 marks come from analysis, evaluation, and explicitly linking to the prompt."
        },
        {
          "id": "atar-prep-101-l06-q3",
          "text": "How should you use examiner reports from past years?",
          "skillId": "atar-prep-101-skill-revision-cycles-transfer",
          "options": [
            {
              "id": "a",
              "text": "Ignore them, the questions will be different this year."
            },
            {
              "id": "b",
              "text": "Read them once the night before the exam."
            },
            {
              "id": "c",
              "text": "Mine them for common student mistakes and explicitly practice avoiding those exact traps in your next timed set."
            },
            {
              "id": "d",
              "text": "Copy the exemplar answers word-for-word."
            }
          ],
          "correctOptionId": "c",
          "hint": "Learn from the mistakes of past students.",
          "explanation": "Examiner reports literally tell you what students do wrong every year. Actively practicing how to avoid these traps is a massive advantage."
        },
        {
          "id": "atar-prep-101-l06-q4",
          "text": "When self-assessing, you realize you completely misunderstood a question. What is your next step?",
          "skillId": "atar-prep-101-skill-performance-stability-priority",
          "options": [
            {
              "id": "a",
              "text": "Analyze the command words and context clues you missed, then immediately try a similar question."
            },
            {
              "id": "b",
              "text": "Throw the paper away and start a new one."
            },
            {
              "id": "c",
              "text": "Blame the question for being tricky."
            },
            {
              "id": "d",
              "text": "Just read the correct answer and move on."
            }
          ],
          "correctOptionId": "a",
          "hint": "Don't just look at the answer; fix the process of reading the question.",
          "explanation": "Misinterpreting questions is a process error. You must figure out *why* you misread it, then test your new reading strategy immediately."
        },
        {
          "id": "atar-prep-101-l06-q5",
          "text": "Your rubric demands 'synthesis of sources'. How do you prove this to the examiner?",
          "skillId": "atar-prep-101-skill-subject-scaling-section-application",
          "options": [
            {
              "id": "a",
              "text": "Summarize Source A, then summarize Source B in a different paragraph."
            },
            {
              "id": "b",
              "text": "Use phrases like 'While Source A suggests X, Source B contradicts this by highlighting Y' within the same paragraph."
            },
            {
              "id": "c",
              "text": "Only use the source you agree with."
            },
            {
              "id": "d",
              "text": "Quote the sources without explaining them."
            }
          ],
          "correctOptionId": "b",
          "hint": "Synthesis means bringing things together.",
          "explanation": "Synthesis requires putting sources in conversation with each other. Using comparative language explicitly shows the examiner you are doing this."
        },
        {
          "id": "atar-prep-101-l06-q6",
          "text": "You are consistently losing marks for 'lack of structure'. What is the fastest way to fix this?",
          "skillId": "atar-prep-101-skill-exam-technique-section-application",
          "options": [
            {
              "id": "a",
              "text": "Write longer paragraphs."
            },
            {
              "id": "b",
              "text": "Use a strict framework (like TEEL or PEEL) and color-code your practice essays to ensure every element is present."
            },
            {
              "id": "c",
              "text": "Use more complex vocabulary."
            },
            {
              "id": "d",
              "text": "Write an introduction and conclusion, but free-write the middle."
            }
          ],
          "correctOptionId": "b",
          "hint": "Make your structure visible and undeniable.",
          "explanation": "Color-coding forces you to visually verify that you have a Topic sentence, Evidence, Explanation, and Link. It makes missing elements obvious."
        }
      ],
      "interactiveActivities": [
        {
          "id": "atar-prep-101-l06-ia1",
          "type": "matching_pairs",
          "title": "Rubric Decoder",
          "description": "Match the examiner feedback with the action you need to take.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the common examiner feedback.",
            "Match it to the practical fix.",
            "Use these fixes when self-grading your next paper."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "'Too descriptive, lacks analysis'"
              },
              {
                "id": "l2",
                "label": "'Fails to address the prompt'"
              },
              {
                "id": "l3",
                "label": "'Arguments are disjointed'"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Use 'This means that...' or 'Therefore...' to explain the impact of your facts"
              },
              {
                "id": "r2",
                "label": "Underline key terms in the question and use them in every topic sentence"
              },
              {
                "id": "r3",
                "label": "Use clear signposting words (Furthermore, Conversely, Ultimately)"
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
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 3,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "metadata": {
        "examDrill": "lesson_drill"
      },
      "learningAids": [
        {
          "id": "atar-prep-101-l06-a1",
          "type": "image",
          "title": "The Self-Assessment Cycle",
          "content": "A visual guide on how to grade your own work brutally and effectively."
        },
        {
          "id": "atar-prep-101-l06-a2",
          "type": "animation",
          "title": "Spotting the Missing Mark",
          "content": "An animation showing how to compare a 3/5 answer with a 5/5 answer to spot the exact difference."
        }
      ]
    },
    {
      "id": "atar-prep-101-l07",
      "title": "Revision Cycle Planning",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A highly organized, aesthetic digital calendar on a tablet, showing color-coded study blocks, with a steaming cup of matcha nearby, soft natural lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A time-lapse animation of a calendar filling up with strategic study blocks, showing the concept of spaced repetition as topics reappear at optimal intervals.",
      "learningAids": [
        {
          "id": "atar-prep-101-l07-a1",
          "type": "image",
          "title": "Spaced Repetition Schedule",
          "content": "A template showing how to space out your revision to beat the forgetting curve."
        },
        {
          "id": "atar-prep-101-l07-a2",
          "type": "animation",
          "title": "Building a Revision Loop",
          "content": "An animation showing how to cycle through Learn, Test, and Review phases efficiently."
        }
      ],
      "imageUrl": "/generated-images/refinery/atar-prep-101-l07.png"
    },
    {
      "id": "atar-prep-101-l08",
      "title": "Mock Exam Analytics",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic dashboard displaying student performance metrics, glowing charts, and graphs analyzing exam data, dark mode UI, high tech.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animation of a student finishing a mock exam, which then transforms into a data dashboard highlighting their strengths and pinpointing exact areas for improvement.",
      "metadata": {
        "prompts": [
          "Identify your biggest time-drain in your last mock exam.",
          "Create a specific rule to prevent getting stuck on that question type again.",
          "Apply this rule in your next mini-mock."
        ]
      },
      "interactiveActivities": [
        {
          "id": "atar-prep-101-l08-ia1",
          "type": "drag_and_drop",
          "title": "Attempt-Order Builder",
          "description": "Build the ultimate exam strategy by placing these moves in the correct phase.",
          "estimatedMinutes": 9,
          "difficultyLevel": "adaptive",
          "instructions": [
            "Look at the exam tactics.",
            "Drag them into Launch (Start), Stabilize (Middle), or Close (End).",
            "Use this sequence in your next mock exam."
          ],
          "data": {
            "targets": [
              {
                "id": "launch",
                "label": "Launch (First 10 Mins)"
              },
              {
                "id": "stabilize",
                "label": "Stabilize (Mid-Exam)"
              },
              {
                "id": "close",
                "label": "Close (Last 10 Mins)"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Knock out high-confidence, quick-win questions to build momentum",
                "correctTargetId": "launch"
              },
              {
                "id": "d2",
                "label": "Tackle heavy extended responses while monitoring time checkpoints",
                "correctTargetId": "stabilize"
              },
              {
                "id": "d3",
                "label": "Review flagged questions and ensure no multiple-choice bubbles are blank",
                "correctTargetId": "close"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "atar-prep-101-l08-a1",
          "type": "image",
          "title": "The Post-Mock Autopsy",
          "content": "A visual guide on how to break down your mock exam results into actionable data."
        },
        {
          "id": "atar-prep-101-l08-a2",
          "type": "animation",
          "title": "Attempt Order Strategy",
          "content": "An animation showing why doing the exam front-to-back isn't always the smartest move."
        }
      ],
      "imageUrl": "/generated-images/refinery/atar-prep-101-l08.png"
    },
    {
      "id": "atar-prep-101-l09",
      "title": "Stress and Consistency Routines",
      "type": "quiz",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A calm, focused student taking a deep breath before an exam, with a subtle glowing aura representing mental clarity, soft warm lighting, realistic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A visual representation of a student's heart rate slowing down and focus sharpening as they use a tactical breathing technique, transitioning into a smooth, confident exam performance.",
      "questions": [
        {
          "id": "atar-prep-101-l09-q1",
          "text": "You hit a question that completely blanks your mind, and you feel panic setting in. What is your immediate move?",
          "skillId": "atar-prep-101-skill-performance-stability-workflow",
          "options": [
            {
              "id": "a",
              "text": "Stare at it until you remember."
            },
            {
              "id": "b",
              "text": "Flag it, take a tactical breath, and immediately move to a question you know you can answer to regain momentum."
            },
            {
              "id": "c",
              "text": "Guess randomly and never look at it again."
            },
            {
              "id": "d",
              "text": "Give up on the exam."
            }
          ],
          "correctOptionId": "b",
          "hint": "Protect your momentum and your mindset.",
          "explanation": "Getting stuck destroys confidence and wastes time. Flagging it and moving on protects your pacing and allows your subconscious to work on the problem."
        },
        {
          "id": "atar-prep-101-l09-q2",
          "text": "You notice your practice scores are dropping, and you feel constantly exhausted. What is the most likely cause?",
          "skillId": "atar-prep-101-skill-subject-scaling-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "You aren't studying enough hours."
            },
            {
              "id": "b",
              "text": "You are experiencing burnout and need to schedule mandatory, guilt-free recovery time."
            },
            {
              "id": "c",
              "text": "You need to switch all your subjects."
            },
            {
              "id": "d",
              "text": "You just aren't smart enough."
            }
          ],
          "correctOptionId": "b",
          "hint": "More work isn't always the answer.",
          "explanation": "Diminishing returns are real. If scores drop while effort increases, your brain is fatigued. Recovery is a biological requirement for memory consolidation."
        },
        {
          "id": "atar-prep-101-l09-q3",
          "text": "How can you build 'exam toughness' so you don't freak out on the real day?",
          "skillId": "atar-prep-101-skill-exam-technique-transfer",
          "options": [
            {
              "id": "a",
              "text": "Only study in your comfortable bed."
            },
            {
              "id": "b",
              "text": "Listen to loud music while doing practice exams."
            },
            {
              "id": "c",
              "text": "Regularly simulate exam conditions: strict timing, no phone, quiet room, and a proper desk setup."
            },
            {
              "id": "d",
              "text": "Just hope for the best."
            }
          ],
          "correctOptionId": "c",
          "hint": "Train how you play.",
          "explanation": "State-dependent memory means you recall information best in the environment you learned it. Simulating exam conditions reduces the shock of the real thing."
        },
        {
          "id": "atar-prep-101-l09-q4",
          "text": "You have a habit of making silly mistakes (like dropping negative signs) when you are stressed. How do you fix this?",
          "skillId": "atar-prep-101-skill-revision-cycles-priority",
          "options": [
            {
              "id": "a",
              "text": "Tell yourself to 'be more careful'."
            },
            {
              "id": "b",
              "text": "Build a specific 'error-checking pass' into your pacing strategy, specifically hunting for your known silly mistakes."
            },
            {
              "id": "c",
              "text": "Do the exam twice as fast so you have an hour to check."
            },
            {
              "id": "d",
              "text": "Ignore them, they are only worth 1 mark."
            }
          ],
          "correctOptionId": "b",
          "hint": "You need a system, not just good intentions.",
          "explanation": "You can't just 'try harder' not to make mistakes. You need a systematic review phase dedicated to catching the specific errors you know you make under pressure."
        },
        {
          "id": "atar-prep-101-l09-q5",
          "text": "The night before a major ATAR exam, what is the best routine?",
          "skillId": "atar-prep-101-skill-performance-stability-section-application",
          "options": [
            {
              "id": "a",
              "text": "Cram until 3 AM to get every last fact in."
            },
            {
              "id": "b",
              "text": "Do a full 3-hour practice exam."
            },
            {
              "id": "c",
              "text": "Light review of summary sheets, pack your bag, and prioritize 8 hours of sleep."
            },
            {
              "id": "d",
              "text": "Play video games all night to relax."
            }
          ],
          "correctOptionId": "c",
          "hint": "Your brain needs to process what you've learned.",
          "explanation": "Sleep is when your brain consolidates memory. Cramming sacrifices sleep, which destroys your cognitive function and recall speed the next day."
        },
        {
          "id": "atar-prep-101-l09-q6",
          "text": "During an exam, you realize you are 10 minutes behind your pacing schedule. What is the best recovery move?",
          "skillId": "atar-prep-101-skill-subject-scaling-section-application",
          "options": [
            {
              "id": "a",
              "text": "Panic and write as fast as humanly possible."
            },
            {
              "id": "b",
              "text": "Skip an entire essay section."
            },
            {
              "id": "c",
              "text": "Accept the time loss, adjust your strategy to secure the easiest remaining marks first, and use bullet points if running out of time on an essay."
            },
            {
              "id": "d",
              "text": "Keep working at the same pace and just leave the end blank."
            }
          ],
          "correctOptionId": "c",
          "hint": "Damage control: secure the maximum possible marks with the time left.",
          "explanation": "When behind, switch to triage mode. Grab the easy marks first. If desperate, bullet points in an essay can still score some marks, whereas a blank page scores zero."
        }
      ],
      "interactiveActivities": [
        {
          "id": "atar-prep-101-l09-ia1",
          "type": "drag_and_drop",
          "title": "Pace Control Board",
          "description": "Place each tactic in the right phase to stabilize your exam pacing.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the pacing tactics.",
            "Drag them into Plan, Execute, or Recover.",
            "Use these tactics to stay calm under pressure."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan (Pre-Exam)"
              },
              {
                "id": "execute",
                "label": "Execute (During Exam)"
              },
              {
                "id": "recover",
                "label": "Recover (When Behind)"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Calculate exact time allowances per section based on marks",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Check the clock only at pre-determined milestones",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Switch to bullet points to secure partial marks before time runs out",
                "correctTargetId": "recover"
              }
            ]
          }
        }
      ],
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
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 3,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "metadata": {
        "examDrill": "lesson_drill"
      },
      "learningAids": [
        {
          "id": "atar-prep-101-l09-a1",
          "type": "image",
          "title": "The Stress Curve",
          "content": "A visual showing how a little stress improves performance, but too much causes a crash."
        },
        {
          "id": "atar-prep-101-l09-a2",
          "type": "animation",
          "title": "Tactical Breathing",
          "content": "A guided animation showing the 4-7-8 breathing technique to lower heart rate instantly."
        }
      ],
      "imageUrl": "/generated-images/refinery/atar-prep-101-l09.png"
    },
    {
      "id": "atar-prep-101-l10",
      "title": "Targeted Subject Scaling Remediation",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A student looking at a glowing holographic scale, balancing different subjects, with math and science glowing brighter to represent higher scaling, futuristic UI.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animation showing how a 10% improvement in a high-scaling subject impacts the final ATAR significantly more than a 10% improvement in a low-scaling subject, using dynamic bar charts.",
      "metadata": {
        "prompts": [
          "Identify your highest scaling subject.",
          "Identify your weakest topic in that subject.",
          "Dedicate your next study block to fixing that specific topic."
        ]
      },
      "interactiveActivities": [
        {
          "id": "atar-prep-101-l10-ia1",
          "type": "drag_and_drop",
          "title": "Scaling Strategy Mapping",
          "description": "Map each study decision to the right phase to maximize your ATAR.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the study decisions.",
            "Drag them to Plan, Execute, or Reflect.",
            "Use this to optimize your study time."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan (Strategy)"
              },
              {
                "id": "execute",
                "label": "Execute (Action)"
              },
              {
                "id": "reflect",
                "label": "Reflect (Review)"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Allocate more weekly hours to high-scaling subjects",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Run targeted drills on your weakest topics in those subjects",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Track score improvements to ensure the extra time is paying off",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "atar-prep-101-l10-a1",
          "type": "image",
          "title": "Scaling Impact Matrix",
          "content": "A visual guide showing where to invest your study hours for the highest ATAR return."
        },
        {
          "id": "atar-prep-101-l10-a2",
          "type": "animation",
          "title": "The Remediation Loop",
          "content": "An animation showing how to quickly identify and fix weak spots in high-value subjects."
        }
      ],
      "imageUrl": "/generated-images/refinery/atar-prep-101-l10.png"
    },
    {
      "id": "atar-prep-101-l11",
      "title": "Timed Exam Technique Sprint",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A dynamic, high-energy shot of a student writing rapidly, motion blur on the pen, digital timer floating in the background, intense focus, cinematic lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced montage of a student executing a 'study sprint', showing quick transitions between reading a prompt, planning an answer, and writing furiously, all synchronized to a ticking clock.",
      "learningAids": [
        {
          "id": "atar-prep-101-l11-a1",
          "type": "image",
          "title": "Sprint Protocol",
          "content": "A quick guide on how to run 20-minute high-intensity timed drills."
        },
        {
          "id": "atar-prep-101-l11-a2",
          "type": "animation",
          "title": "Breaking the Friction",
          "content": "An animation showing how to overcome writer's block during a timed sprint."
        }
      ],
      "imageUrl": "/generated-images/refinery/atar-prep-101-l11.png"
    },
    {
      "id": "atar-prep-101-l12",
      "title": "Mixed-Section Decision Drill",
      "type": "quiz",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A split-screen view showing multiple different exam papers (multiple choice, short answer, essay) blending together, representing the challenge of context switching, vibrant and slightly chaotic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animation of a student's brain shifting gears like a sports car as they transition from a math calculation section to a written analysis section, highlighting mental agility.",
      "questions": [
        {
          "id": "atar-prep-101-l12-q1",
          "text": "You are transitioning from a multiple-choice section to a long essay. What is the best way to handle this mental shift?",
          "skillId": "atar-prep-101-skill-subject-scaling-workflow",
          "options": [
            {
              "id": "a",
              "text": "Just start writing immediately to save time."
            },
            {
              "id": "b",
              "text": "Take 30 seconds to close your eyes, reset, and quickly jot down your essay structure before writing."
            },
            {
              "id": "c",
              "text": "Keep thinking about the multiple-choice questions you weren't sure about."
            },
            {
              "id": "d",
              "text": "Do the essay first, always."
            }
          ],
          "correctOptionId": "b",
          "hint": "Context switching requires a mental reset.",
          "explanation": "Jumping straight in often leads to disorganized writing. A 30-second reset and a quick plan saves you 10 minutes of confused writing later."
        },
        {
          "id": "atar-prep-101-l12-q2",
          "text": "In a mixed-section exam, you find a 10-mark question that you know will take you 20 minutes, but you only have 15 minutes allocated. What do you do?",
          "skillId": "atar-prep-101-skill-exam-technique-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Spend the 20 minutes and steal time from the next section."
            },
            {
              "id": "b",
              "text": "Skip it entirely."
            },
            {
              "id": "c",
              "text": "Outline the key points, write the most important paragraphs, and move on when your 15 minutes are up."
            },
            {
              "id": "d",
              "text": "Complain to the invigilator."
            }
          ],
          "correctOptionId": "c",
          "hint": "Maximize marks within your time budget.",
          "explanation": "Stealing time ruins the rest of your exam. Secure the core marks with an outline and key points, then stick to your pacing schedule."
        },
        {
          "id": "atar-prep-101-l12-q3",
          "text": "Why is practicing 'mixed sets' (doing different types of questions back-to-back) crucial for ATAR prep?",
          "skillId": "atar-prep-101-skill-revision-cycles-transfer",
          "options": [
            {
              "id": "a",
              "text": "It's not, you should only study one topic per day."
            },
            {
              "id": "b",
              "text": "It trains your brain to context-switch rapidly, which is exactly what the real exam demands."
            },
            {
              "id": "c",
              "text": "It makes studying more fun."
            },
            {
              "id": "d",
              "text": "It helps you memorize things faster."
            }
          ],
          "correctOptionId": "b",
          "hint": "Train for the reality of the exam.",
          "explanation": "Real exams don't test topics in isolation. Mixed sets build the cognitive agility needed to jump from algebra to geometry, or from poetry to prose, without losing momentum."
        },
        {
          "id": "atar-prep-101-l12-q4",
          "text": "You always lose momentum in the middle section of your exams. How do you fix this 'mid-exam slump'?",
          "skillId": "atar-prep-101-skill-performance-stability-priority",
          "options": [
            {
              "id": "a",
              "text": "Eat a massive meal before the exam."
            },
            {
              "id": "b",
              "text": "Schedule your highest-confidence question types for the middle of the exam to rebuild momentum."
            },
            {
              "id": "c",
              "text": "Just push through it."
            },
            {
              "id": "d",
              "text": "Take a 20-minute nap."
            }
          ],
          "correctOptionId": "b",
          "hint": "Use your attempt order strategically.",
          "explanation": "If you know you slump in the middle, save a section you are really good at for that time. The easy wins will give you an energy boost."
        },
        {
          "id": "atar-prep-101-l12-q5",
          "text": "You are faced with a 'stimulus-based' question (e.g., a cartoon or data table) followed by an essay. What is the first step?",
          "skillId": "atar-prep-101-skill-subject-scaling-section-application",
          "options": [
            {
              "id": "a",
              "text": "Start writing the essay immediately."
            },
            {
              "id": "b",
              "text": "Read the essay prompt first, then actively hunt through the stimulus for evidence that answers the prompt."
            },
            {
              "id": "c",
              "text": "Stare at the stimulus for 10 minutes."
            },
            {
              "id": "d",
              "text": "Ignore the stimulus and write what you know."
            }
          ],
          "correctOptionId": "b",
          "hint": "Read with purpose.",
          "explanation": "Always read the question before the stimulus. This turns you from a passive reader into an active hunter, looking only for the specific data you need."
        },
        {
          "id": "atar-prep-101-l12-q6",
          "text": "You finish a mixed-section practice exam and realize your pacing was a disaster. What is your next move?",
          "skillId": "atar-prep-101-skill-exam-technique-section-application",
          "options": [
            {
              "id": "a",
              "text": "Do another full exam immediately."
            },
            {
              "id": "b",
              "text": "Review the content you got wrong and ignore the timing."
            },
            {
              "id": "c",
              "text": "Log exactly where you lost time, adjust your section checkpoints, and run a timed drill on just that specific transition."
            },
            {
              "id": "d",
              "text": "Give up."
            }
          ],
          "correctOptionId": "c",
          "hint": "Isolate the problem and drill it.",
          "explanation": "Don't waste 3 hours doing another full exam. Isolate the specific transition that caused the pacing issue and drill it until it's smooth."
        }
      ],
      "interactiveActivities": [
        {
          "id": "atar-prep-101-l12-ia1",
          "type": "matching_pairs",
          "title": "Context Switching Tactics",
          "description": "Match the exam scenario with the best transition tactic.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the exam scenario.",
            "Match it to the best tactic.",
            "Use these tactics to stay sharp during mixed exams."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Moving from Multiple Choice to Short Answer"
              },
              {
                "id": "l2",
                "label": "Moving from Short Answer to Extended Essay"
              },
              {
                "id": "l3",
                "label": "Hitting a mental wall mid-exam"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Shift focus to command words and concise phrasing"
              },
              {
                "id": "r2",
                "label": "Take a 30-second reset and draft a structural outline"
              },
              {
                "id": "r3",
                "label": "Jump to a high-confidence question to rebuild momentum"
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
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 3,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "metadata": {
        "examDrill": "lesson_drill"
      },
      "learningAids": [
        {
          "id": "atar-prep-101-l12-a1",
          "type": "image",
          "title": "The Mental Clutch",
          "content": "A visual metaphor showing how to 'shift gears' between different question types without stalling."
        },
        {
          "id": "atar-prep-101-l12-a2",
          "type": "animation",
          "title": "Transition Drills",
          "content": "An animation showing how to practice the exact moment you switch from one section to another."
        }
      ],
      "imageUrl": "/generated-images/refinery/atar-prep-101-l12.png"
    },
    {
      "id": "atar-prep-101-l13",
      "title": "Adaptive Retry and Transfer Check",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic targeting system locking onto a specific study topic, with data streams showing improvement over time, sleek sci-fi aesthetic, neon green and black.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animation of a student missing a basketball shot (representing a failed exam question), analyzing their form, adjusting, and then swishing the next shot from a different angle (representing transfer of skills).",
      "learningAids": [
        {
          "id": "atar-prep-101-l13-a1",
          "type": "image",
          "title": "The Transfer Test",
          "content": "A guide on how to test if you actually learned a concept, or if you just memorized the answer to one specific question."
        },
        {
          "id": "atar-prep-101-l13-a2",
          "type": "animation",
          "title": "Adaptive Retry Loop",
          "content": "An animation showing how to tweak variables (time, difficulty, question style) when retrying a weak topic."
        }
      ],
      "imageUrl": "/generated-images/refinery/atar-prep-101-l13.png"
    },
    {
      "id": "atar-prep-101-l14",
      "title": "ATAR Readiness Stability Checkpoint",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A high-tech diagnostic screen showing a student's overall 'Readiness Level' at 95%, with green checkmarks next to pacing, content, and strategy, clean UI design.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A visual of a rocket going through final pre-flight checks, with each system (representing different study skills) lighting up green before launch.",
      "metadata": {
        "prompts": [
          "Rate your current exam pacing out of 10.",
          "Identify the one thing holding that score back.",
          "Create a rule to fix it before your final exams."
        ]
      },
      "interactiveActivities": [
        {
          "id": "atar-prep-101-l14-ia1",
          "type": "drag_and_drop",
          "title": "Pre-Flight Checklist",
          "description": "Organize your final week prep into the correct phases.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the final week tasks.",
            "Drag them to 7 Days Out, 3 Days Out, or 1 Day Out.",
            "Follow this schedule to peak at the right time."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "7 Days Out"
              },
              {
                "id": "execute",
                "label": "3 Days Out"
              },
              {
                "id": "reflect",
                "label": "1 Day Out"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Take your final full-length timed mock exam",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Review only your error logs and high-yield summary sheets",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Pack your bag, review your pacing strategy, and rest",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "atar-prep-101-l14-a1",
          "type": "image",
          "title": "The Tapering Strategy",
          "content": "A graph showing how to reduce study volume in the final days to ensure your brain is rested and sharp for the exam."
        },
        {
          "id": "atar-prep-101-l14-a2",
          "type": "animation",
          "title": "Stability Check",
          "content": "An animation showing how to verify that your pacing and accuracy are locked in before the big day."
        }
      ],
      "imageUrl": "/generated-images/refinery/atar-prep-101-l14.png"
    },
    {
      "id": "atar-prep-101-l15",
      "title": "Final ATAR Readiness Blueprint",
      "type": "quiz",
      "duration": 20,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing, intricate blueprint of a master key, symbolizing the final strategy to unlock top ATAR scores, deep blue background with gold lines, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic montage summarizing the entire course: from syllabus planning, to timed sprints, to final mock reviews, ending with a student confidently walking into an exam hall.",
      "questions": [
        {
          "id": "atar-prep-101-l15-q1",
          "text": "You are one week away from your final ATAR exams. What should your primary focus be?",
          "skillId": "atar-prep-101-skill-subject-scaling-workflow",
          "options": [
            {
              "id": "a",
              "text": "Learning brand new, difficult concepts you skipped earlier."
            },
            {
              "id": "b",
              "text": "Reading the textbook cover to cover."
            },
            {
              "id": "c",
              "text": "Reviewing error logs, refining exam technique, and doing light, targeted timed practice to stay sharp."
            },
            {
              "id": "d",
              "text": "Doing 3 full practice exams every day."
            }
          ],
          "correctOptionId": "c",
          "hint": "Now is the time to sharpen the blade, not forge a new one.",
          "explanation": "In the final week, trying to learn complex new content causes panic. Focus on consolidating what you know, fixing known errors, and keeping your pacing sharp."
        },
        {
          "id": "atar-prep-101-l15-q2",
          "text": "During your final mock, you notice your pacing is perfect but your accuracy drops in the last 30 minutes. What is the fix?",
          "skillId": "atar-prep-101-skill-exam-technique-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Write slower at the end."
            },
            {
              "id": "b",
              "text": "You are experiencing cognitive fatigue. Build a 30-second 'micro-break' into your strategy right before the final section to reset your focus."
            },
            {
              "id": "c",
              "text": "Drink an energy drink mid-exam."
            },
            {
              "id": "d",
              "text": "Just accept that the end of the exam will be messy."
            }
          ],
          "correctOptionId": "b",
          "hint": "Your brain needs a quick reset.",
          "explanation": "Accuracy drops at the end are usually due to fatigue, not lack of knowledge. A deliberate 30-second micro-break (close eyes, deep breath) can restore enough focus to finish strong."
        },
        {
          "id": "atar-prep-101-l15-q3",
          "text": "What is the ultimate goal of the 'Plan, Execute, Reflect' loop?",
          "skillId": "atar-prep-101-skill-revision-cycles-transfer",
          "options": [
            {
              "id": "a",
              "text": "To make sure you never make a mistake again."
            },
            {
              "id": "b",
              "text": "To systematically identify weaknesses and turn them into strengths through targeted, timed practice."
            },
            {
              "id": "c",
              "text": "To make your study schedule look busy."
            },
            {
              "id": "d",
              "text": "To memorize the textbook."
            }
          ],
          "correctOptionId": "b",
          "hint": "It's about continuous, measurable improvement.",
          "explanation": "The loop ensures you aren't just studying passively. You plan a target, execute under pressure, and reflect on the data to improve the next cycle."
        },
        {
          "id": "atar-prep-101-l15-q4",
          "text": "If you have to choose between fixing a recurring pacing error or learning one minor syllabus dot-point, which do you choose?",
          "skillId": "atar-prep-101-skill-performance-stability-priority",
          "options": [
            {
              "id": "a",
              "text": "The syllabus dot-point, because content is king."
            },
            {
              "id": "b",
              "text": "The pacing error, because it affects your ability to score marks across the entire exam."
            },
            {
              "id": "c",
              "text": "Neither, just study what you enjoy."
            },
            {
              "id": "d",
              "text": "Flip a coin."
            }
          ],
          "correctOptionId": "b",
          "hint": "Which one impacts more total marks?",
          "explanation": "Process errors (like pacing) bleed across the whole paper. Fixing pacing might save you 10 marks, while a minor dot-point might only be worth 1."
        },
        {
          "id": "atar-prep-101-l15-q5",
          "text": "How should you handle the morning of your final ATAR exam?",
          "skillId": "atar-prep-101-skill-subject-scaling-section-application",
          "options": [
            {
              "id": "a",
              "text": "Wake up at 4 AM to cram."
            },
            {
              "id": "b",
              "text": "Discuss difficult topics with stressed friends outside the exam hall."
            },
            {
              "id": "c",
              "text": "Stick to your normal routine, do a light 5-minute warmup (like reading a good essay you wrote), and avoid stressed people."
            },
            {
              "id": "d",
              "text": "Skip breakfast to feel lighter."
            }
          ],
          "correctOptionId": "c",
          "hint": "Protect your mindset at all costs.",
          "explanation": "The morning of the exam is about psychological protection. Avoid cramming and stressed peers. A light warmup gets your brain in gear without causing fatigue."
        },
        {
          "id": "atar-prep-101-l15-q6",
          "text": "You open the exam paper and the first question is completely unexpected and incredibly hard. What is your blueprint response?",
          "skillId": "atar-prep-101-skill-exam-technique-section-application",
          "options": [
            {
              "id": "a",
              "text": "Panic and let it ruin your confidence."
            },
            {
              "id": "b",
              "text": "Spend 30 minutes trying to solve it."
            },
            {
              "id": "c",
              "text": "Smile, flag it, immediately turn to a question you know you can crush, and come back to it later."
            },
            {
              "id": "d",
              "text": "Complain after the exam."
            }
          ],
          "correctOptionId": "c",
          "hint": "Control the exam, don't let it control you.",
          "explanation": "Examiners sometimes put hard questions first to test your resilience. Bypassing it to secure easy marks protects your pacing and your confidence."
        },
        {
          "id": "atar-prep-101-l15-q7",
          "text": "In your final review of all your mock exams, you notice mistakes across multiple subjects. What is the best triage strategy?",
          "skillId": "atar-prep-101-skill-mock-triage",
          "options": [
            {
              "id": "a",
              "text": "Group the mistakes by root cause (e.g., 'misread question', 'pacing', 'content gap') and fix the process errors first."
            },
            {
              "id": "b",
              "text": "Just read over the correct answers for all of them."
            },
            {
              "id": "c",
              "text": "Only focus on the subject you like the least."
            },
            {
              "id": "d",
              "text": "Ignore them, the real exam will be different."
            }
          ],
          "correctOptionId": "a",
          "hint": "Look for the patterns, not just the individual errors.",
          "explanation": "Process-level triage finds the high-leverage habits that are costing you marks across the board. Fixing 'misreading questions' improves every single subject."
        },
        {
          "id": "atar-prep-101-l15-q8",
          "text": "You have a habit of finishing the multiple-choice section early, but running out of time on the essays. What is the final fix?",
          "skillId": "atar-prep-101-skill-section-pacing",
          "options": [
            {
              "id": "a",
              "text": "Do the multiple-choice even faster."
            },
            {
              "id": "b",
              "text": "Set strict, section-specific time budgets based on mark weighting, and practice the transition between sections."
            },
            {
              "id": "c",
              "text": "Just write shorter essays."
            },
            {
              "id": "d",
              "text": "Guess the multiple-choice to save more time."
            }
          ],
          "correctOptionId": "b",
          "hint": "Time must be allocated based on value.",
          "explanation": "If you are rushing essays, your time budget is wrong. Allocate time strictly based on marks, and practice sticking to those boundaries."
        },
        {
          "id": "atar-prep-101-l15-q9",
          "text": "You have 5 minutes left in your final ATAR exam. What is the most high-yield use of this time?",
          "skillId": "atar-prep-101-skill-quality-control",
          "options": [
            {
              "id": "a",
              "text": "Second-guess and change your multiple-choice answers."
            },
            {
              "id": "b",
              "text": "Put your head down and rest."
            },
            {
              "id": "c",
              "text": "Run a targeted verification pass: check that every question is answered, verify flagged calculations, and ensure essay conclusions are clear."
            },
            {
              "id": "d",
              "text": "Try to write one more whole paragraph."
            }
          ],
          "correctOptionId": "c",
          "hint": "Secure the marks you've already earned.",
          "explanation": "A targeted verification pass catches silly mistakes that cost easy marks. Never change multiple-choice answers unless you find a concrete error; your first instinct is usually right."
        },
        {
          "id": "atar-prep-101-l15-q10",
          "text": "What is the ultimate mindset for walking into your final ATAR exams?",
          "skillId": "atar-prep-101-skill-remediation-loop",
          "options": [
            {
              "id": "a",
              "text": "I need to be perfect to get a good score."
            },
            {
              "id": "b",
              "text": "I hope the questions are easy."
            },
            {
              "id": "c",
              "text": "I have a system for everything. I will execute my pacing, triage hard questions, and fight for every single mark."
            },
            {
              "id": "d",
              "text": "Whatever happens, happens."
            }
          ],
          "correctOptionId": "c",
          "hint": "Rely on your systems, not luck.",
          "explanation": "Top performers don't rely on luck or perfection. They rely on their systems. You are there to execute the blueprint you've built."
        }
      ],
      "interactiveActivities": [
        {
          "id": "atar-prep-101-l15-ia1",
          "type": "sorting_buckets",
          "title": "Error Taxonomy Sort",
          "description": "Sort these common mock errors into the correct remediation lane so you know exactly how to fix them.",
          "estimatedMinutes": 10,
          "difficultyLevel": "adaptive",
          "instructions": [
            "Review each error pattern.",
            "Sort it into Concept (Knowledge), Strategy (Rubric), or Timing (Pacing).",
            "Use this system to analyze your final mocks."
          ],
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "Concept Gap (Knowledge)"
              },
              {
                "id": "strategy",
                "label": "Strategy Gap (Rubric/Technique)"
              },
              {
                "id": "timing",
                "label": "Timing Gap (Pacing/Pressure)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Forgot the formula for standard deviation",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Wrote a great essay but didn't use the specific command word 'Evaluate'",
                "correctBucketId": "strategy"
              },
              {
                "id": "i3",
                "label": "Left the last 10-mark question blank because time ran out",
                "correctBucketId": "timing"
              },
              {
                "id": "i4",
                "label": "Made silly calculation errors in the last 15 minutes due to rushing",
                "correctBucketId": "timing"
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "mock_assessment",
        "questionsPerCheck": 10,
        "totalQuestions": 10,
        "timeLimitMinutes": 24,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 10,
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
          "medium": 5,
          "hard": 3
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.82
      },
      "metadata": {
        "examDrill": "full_mock"
      },
      "learningAids": [
        {
          "id": "atar-prep-101-l15-a1",
          "type": "image",
          "title": "The Final Blueprint",
          "content": "A one-page summary of the ultimate ATAR exam strategy: Plan, Execute, Recover, Review."
        },
        {
          "id": "atar-prep-101-l15-a2",
          "type": "animation",
          "title": "Game Day Execution",
          "content": "An animation showing the ideal mindset and routine for the morning of the big exam."
        }
      ],
      "imageUrl": "/generated-images/refinery/atar-prep-101-l15.png"
    }
  ]
};
