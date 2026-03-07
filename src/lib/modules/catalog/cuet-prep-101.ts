import type { LearningModule } from "@/lib/modules/types";

export const cuet_prep_101_Module: LearningModule = {
  "id": "cuet-prep-101",
  "title": "CUET Prep Foundations",
  "description": "Master the CUET with targeted domain practice, language section hacks, and elite time-management strategies designed for top university admissions.",
  "subject": "Exam Prep",
  "tags": [
    "exam-prep",
    "assessment",
    "advanced",
    "university-admissions",
    "cuet"
  ],
  "minAge": 15,
  "maxAge": 21,
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
    "Build structured CUET readiness workflows tailored to your target universities.",
    "Improve speed and accuracy under strict timed constraints across all sections.",
    "Use analytics-based revision loops to identify and crush weak areas."
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
      "id": "cuet-prep-101-l01",
      "title": "CUET Pattern and University Mapping",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "A vibrant, modern 3D isometric illustration of a student's desk with a glowing roadmap connecting textbooks to prestigious Indian university campuses, featuring sleek CUET exam icons and neon accents.",
      "conceptVideoPrompt": "A dynamic 3D animation showing a teenage student interacting with a holographic map of universities. The map zooms into specific departments, highlighting subject combinations and exam patterns with sleek, glowing UI elements and a lo-fi hip hop aesthetic.",
      "learningAids": [
        {
          "id": "cuet-prep-101-l01-a1",
          "type": "image",
          "title": "Domain Subjects Snapshot",
          "content": "Visual anchor mapping Class 12 subjects to CUET domain requirements for top universities."
        },
        {
          "id": "cuet-prep-101-l01-a2",
          "type": "animation",
          "title": "General Test Walkthrough",
          "content": "Stepwise walkthrough showing how the General Test impacts different degree programs."
        }
      ],
      "imageUrl": "/generated-images/refinery/cuet-prep-101-l01.png"
    },
    {
      "id": "cuet-prep-101-l02",
      "title": "Language Section Scoring Strategy",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "A stylized digital artwork of a student wearing headphones, analyzing a glowing digital text passage on a tablet. Words are highlighted in different neon colors representing grammar, vocabulary, and comprehension.",
      "conceptVideoPrompt": "Fast-paced motion graphics showing a block of text being scanned by a digital laser. The laser highlights keywords, eliminates wrong multiple-choice options, and locks in the correct answer, demonstrating active reading strategies.",
      "metadata": {
        "prompts": [
          "Identify one key rule for eliminating wrong options in Reading Comprehension.",
          "Apply the 'skim and scan' technique to a sample passage.",
          "Set a daily vocabulary target before your next practice session."
        ]
      },
      "interactiveActivities": [
        {
          "id": "cuet-prep-101-l02-ia1",
          "type": "drag_and_drop",
          "title": "Language Section Decision Mapping",
          "description": "Map each reading strategy to the correct phase of attempting a passage.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Assign each strategy to Before Reading, During Reading, or Answering.",
            "Check your mappings.",
            "Apply this to your next mock."
          ],
          "data": {
            "targets": [
              {
                "id": "before",
                "label": "Before Reading"
              },
              {
                "id": "during",
                "label": "During Reading"
              },
              {
                "id": "answering",
                "label": "Answering Questions"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Read the questions first to know what to look for",
                "correctTargetId": "before"
              },
              {
                "id": "d2",
                "label": "Highlight transition words (however, therefore)",
                "correctTargetId": "during"
              },
              {
                "id": "d3",
                "label": "Eliminate extreme options (always, never)",
                "correctTargetId": "answering"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "cuet-prep-101-l02-a1",
          "type": "image",
          "title": "Language Sections Snapshot",
          "content": "Visual breakdown of Reading Comprehension vs. Grammar weightage."
        },
        {
          "id": "cuet-prep-101-l02-a2",
          "type": "animation",
          "title": "Elimination Technique",
          "content": "Animation showing how to cross out distractor options in vocab questions."
        }
      ],
      "imageUrl": "/generated-images/refinery/cuet-prep-101-l02.png"
    },
    {
      "id": "cuet-prep-101-l03",
      "title": "Domain Subject Prioritization",
      "type": "quiz",
      "duration": 12,
      "lessonImagePrompt": "A cool, futuristic dashboard showing three glowing pillars representing different domain subjects. One pillar is fully charged (green), one is half-full (yellow), and one is low (red), symbolizing subject prioritization.",
      "conceptVideoPrompt": "A sleek UI animation showing a student dragging and dropping different subjects into a weekly calendar. The system automatically adjusts study hours based on the student's target university requirements and current mock scores.",
      "questions": [
        {
          "id": "cuet-prep-101-l03-q1",
          "text": "You are applying for a B.Com (Hons) program that requires Accountancy, Business Studies, and one more domain. You are weak in Economics but strong in Mathematics. What is the best strategic move?",
          "skillId": "cuet-prep-101-skill-domain-selection",
          "options": [
            {
              "id": "a",
              "text": "Choose Economics anyway because it sounds better for commerce."
            },
            {
              "id": "b",
              "text": "Choose Mathematics as your third domain to maximize your overall percentile."
            },
            {
              "id": "c",
              "text": "Drop the B.Com idea and switch to a science degree."
            },
            {
              "id": "d",
              "text": "Take both and split your study time 50/50, risking lower scores in both."
            }
          ],
          "correctOptionId": "b",
          "hint": "Universities usually look at your best scores among eligible subjects.",
          "explanation": "Always play to your strengths. If the university accepts either Math or Economics, choosing the one where you can score a higher percentile is the optimal strategy."
        },
        {
          "id": "cuet-prep-101-l03-q2",
          "text": "When mapping your Class 12 board syllabus to the CUET domain syllabus, you notice a few extra chapters in CUET. How should you handle them?",
          "skillId": "cuet-prep-101-skill-syllabus-mapping",
          "options": [
            {
              "id": "a",
              "text": "Ignore them; they probably won't carry much weight."
            },
            {
              "id": "b",
              "text": "Cram them the night before the exam."
            },
            {
              "id": "c",
              "text": "Allocate dedicated weekend blocks to cover these 'CUET-only' chapters early in your prep."
            },
            {
              "id": "d",
              "text": "Only study them if you finish your board syllabus early."
            }
          ],
          "correctOptionId": "c",
          "hint": "Proactive planning prevents last-minute panic.",
          "explanation": "CUET often includes deleted Class 12 chapters. Tackling them early during weekends ensures you aren't overwhelmed right after your board exams."
        },
        {
          "id": "cuet-prep-101-l03-q3",
          "text": "You have 45 minutes to answer 40 out of 50 questions in a domain subject. What is the most effective way to use the 'skip' allowance?",
          "skillId": "cuet-prep-101-skill-question-selection",
          "options": [
            {
              "id": "a",
              "text": "Attempt the first 40 questions sequentially and ignore the last 10."
            },
            {
              "id": "b",
              "text": "Scan the paper in the first 2 minutes and immediately skip the 10 longest or hardest questions."
            },
            {
              "id": "c",
              "text": "Spend 5 minutes trying every question before deciding to skip it."
            },
            {
              "id": "d",
              "text": "Only skip questions from chapters you didn't study."
            }
          ],
          "correctOptionId": "b",
          "hint": "Time is your most valuable resource. Don't waste it on dead ends.",
          "explanation": "Quickly identifying and skipping time-sinks or highly complex questions ensures you secure easy marks first and don't run out of time."
        },
        {
          "id": "cuet-prep-101-l03-q4",
          "text": "Your mock analysis shows you are scoring 95% in Physics but taking too long, leaving you rushed for Chemistry. What is the fix?",
          "skillId": "cuet-prep-101-skill-time-allocation",
          "options": [
            {
              "id": "a",
              "text": "Study more Physics concepts to get to 100%."
            },
            {
              "id": "b",
              "text": "Shift focus entirely to Chemistry and stop practicing Physics."
            },
            {
              "id": "c",
              "text": "Practice timed Physics sectional tests to improve speed without losing accuracy."
            },
            {
              "id": "d",
              "text": "Accept that Physics just takes longer and guess more in Chemistry."
            }
          ],
          "correctOptionId": "c",
          "hint": "High accuracy is great, but not if it costs you marks in another section.",
          "explanation": "Once accuracy is achieved, the next phase of prep must focus on speed. Timed sectional drills will help optimize the time spent per question."
        },
        {
          "id": "cuet-prep-101-l03-q5",
          "text": "Which of the following is a 'red flag' when prioritizing your domain subjects?",
          "skillId": "cuet-prep-101-skill-strategy-pitfalls",
          "options": [
            {
              "id": "a",
              "text": "Choosing subjects based strictly on the eligibility criteria of your dream college."
            },
            {
              "id": "b",
              "text": "Selecting a subject you haven't studied in Class 12 just because it seems 'scoring'."
            },
            {
              "id": "c",
              "text": "Aligning your CUET prep with your board exam schedule."
            },
            {
              "id": "d",
              "text": "Taking mock tests for all chosen domains before finalizing your study plan."
            }
          ],
          "correctOptionId": "b",
          "hint": "CUET domain tests are based on the Class 12 syllabus. Starting from scratch is risky.",
          "explanation": "Many universities require you to have studied the domain subject in Class 12. Even if they don't, competing against students who have studied it for a year puts you at a massive disadvantage."
        },
        {
          "id": "cuet-prep-101-l03-q6",
          "text": "If you are targeting multiple universities with different domain requirements, what is the best way to structure your daily study?",
          "skillId": "cuet-prep-101-skill-multi-target-planning",
          "options": [
            {
              "id": "a",
              "text": "Study one subject per month until the exam."
            },
            {
              "id": "b",
              "text": "Create a core-and-flex schedule: daily focus on common subjects, and alternate days for university-specific subjects."
            },
            {
              "id": "c",
              "text": "Only study the subjects required by your top choice and ignore the backups."
            },
            {
              "id": "d",
              "text": "Study all 6 subjects every single day for 1 hour each."
            }
          ],
          "correctOptionId": "b",
          "hint": "Balance consistency in major subjects with adequate coverage of minor ones.",
          "explanation": "A core-and-flex schedule ensures you don't lose touch with heavily weighted subjects while still covering the specific requirements of backup universities."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cuet-prep-101-l03-ia1",
          "type": "matching_pairs",
          "title": "Domain Strategy Alignment",
          "description": "Match the student scenario with the best strategic action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the scenario on the left.",
            "Match it to the correct action on the right.",
            "Apply this logic to your own prep."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "High accuracy, but running out of time"
              },
              {
                "id": "l2",
                "label": "Syllabus complete, but forgetting older chapters"
              },
              {
                "id": "l3",
                "label": "Consistently scoring low in one specific chapter"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Switch to timed sectional drills"
              },
              {
                "id": "r2",
                "label": "Implement spaced repetition and mixed quizzes"
              },
              {
                "id": "r3",
                "label": "Pause mocks and do targeted concept remediation"
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
              2,
              3,
              4
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
      "imageUrl": "/generated-images/refinery/cuet-prep-101-l03.png"
    },
    {
      "id": "cuet-prep-101-l04",
      "title": "General Test Logical Reasoning",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "A visually striking image of a glowing, transparent human brain made of digital nodes and pathways, solving a complex puzzle cube. Dark background with neon blue and purple highlights.",
      "conceptVideoPrompt": "A fast-paced 3D animation showing a complex family tree (blood relations puzzle) assembling itself in mid-air. Lines connect different avatars, and a glowing cursor quickly deduces the correct relationship, demonstrating logical deduction.",
      "metadata": {
        "prompts": [
          "Identify the core pattern in a number series question.",
          "Use Venn diagrams to solve a syllogism problem.",
          "Set a target to practice 20 seating arrangement puzzles this week."
        ]
      },
      "interactiveActivities": [
        {
          "id": "cuet-prep-101-l04-ia1",
          "type": "drag_and_drop",
          "title": "Logical Reasoning Trap Identification",
          "description": "Map the common reasoning trap to the correct question type.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the trap description.",
            "Drag it to the question type it usually appears in.",
            "Learn to spot these in your next mock."
          ],
          "data": {
            "targets": [
              {
                "id": "syllogism",
                "label": "Syllogisms"
              },
              {
                "id": "blood_relations",
                "label": "Blood Relations"
              },
              {
                "id": "series",
                "label": "Number Series"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Assuming 'Some A are B' means 'Some A are NOT B'",
                "correctTargetId": "syllogism"
              },
              {
                "id": "d2",
                "label": "Assuming gender based purely on a person's name",
                "correctTargetId": "blood_relations"
              },
              {
                "id": "d3",
                "label": "Calculating differences without checking for squares/cubes first",
                "correctTargetId": "series"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "cuet-prep-101-l04-a1",
          "type": "image",
          "title": "Venn Diagram Cheat Sheet",
          "content": "Visual guide to translating text statements into Venn diagrams."
        },
        {
          "id": "cuet-prep-101-l04-a2",
          "type": "animation",
          "title": "Seating Arrangement Setup",
          "content": "Animation showing how to draw a circular seating chart step-by-step."
        }
      ],
      "imageUrl": "/generated-images/refinery/cuet-prep-101-l04.png"
    },
    {
      "id": "cuet-prep-101-l05",
      "title": "Quantitative Aptitude Drills",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "A dynamic, high-tech illustration of floating mathematical formulas, percentages, and geometric shapes surrounding a glowing stopwatch, symbolizing speed and accuracy in quant.",
      "conceptVideoPrompt": "A sleek animation showing a complex math word problem being broken down into a simple equation. The video highlights mental math shortcuts, like percentage-to-fraction conversions, with satisfying visual snaps.",
      "learningAids": [
        {
          "id": "cuet-prep-101-l05-a1",
          "type": "image",
          "title": "Mental Math Shortcuts",
          "content": "Infographic of essential fractions, squares, and cubes to memorize."
        },
        {
          "id": "cuet-prep-101-l05-a2",
          "type": "animation",
          "title": "Data Interpretation Hack",
          "content": "Walkthrough of approximating large numbers in pie charts to save time."
        }
      ],
      "imageUrl": "/generated-images/refinery/cuet-prep-101-l05.png"
    },
    {
      "id": "cuet-prep-101-l06",
      "title": "Current Affairs and GK Workflow",
      "type": "quiz",
      "duration": 12,
      "lessonImagePrompt": "A modern, stylized globe surrounded by floating digital news headlines, historical artifacts, and glowing data streams, representing the blend of static GK and current affairs.",
      "conceptVideoPrompt": "A fast-paced motion graphic showing a calendar flipping rapidly. As it flips, news icons pop up and are sorted into 'Static GK' and 'Current Affairs' folders, demonstrating how to categorize and retain information.",
      "questions": [
        {
          "id": "cuet-prep-101-l06-q1",
          "text": "You have 30 days left for the exam and haven't touched Current Affairs. What is the most high-yield strategy?",
          "skillId": "cuet-prep-101-skill-gk-triage",
          "options": [
            {
              "id": "a",
              "text": "Try to read daily newspapers from the last 6 months."
            },
            {
              "id": "b",
              "text": "Focus entirely on Static GK and ignore Current Affairs."
            },
            {
              "id": "c",
              "text": "Use monthly compilation PDFs and focus on awards, sports, and major summits."
            },
            {
              "id": "d",
              "text": "Watch 10-hour marathon videos on YouTube the day before."
            }
          ],
          "correctOptionId": "c",
          "hint": "When time is short, rely on curated summaries rather than raw sources.",
          "explanation": "Monthly compilations filter out the noise. Focusing on high-probability topics like awards, appointments, and sports gives the best return on invested time."
        },
        {
          "id": "cuet-prep-101-l06-q2",
          "text": "How should you balance Static GK (History, Geography) with Current Affairs?",
          "skillId": "cuet-prep-101-skill-gk-balance",
          "options": [
            {
              "id": "a",
              "text": "Study Static GK only, as it never changes."
            },
            {
              "id": "b",
              "text": "Link Static GK to Current Affairs (e.g., if a historical monument is in the news, study its history)."
            },
            {
              "id": "c",
              "text": "Spend 90% of your time on daily news."
            },
            {
              "id": "d",
              "text": "Memorize an entire encyclopedia."
            }
          ],
          "correctOptionId": "b",
          "hint": "Examiners love asking static questions inspired by recent events.",
          "explanation": "Dynamic linking is the smartest way to study. If a specific national park is in the news (Current), expect a question on its location or geography (Static)."
        },
        {
          "id": "cuet-prep-101-l06-q3",
          "text": "You encounter a GK question where you have no idea about the exact answer, but you recognize two of the options as being related to a completely different topic. What should you do?",
          "skillId": "cuet-prep-101-skill-gk-elimination",
          "options": [
            {
              "id": "a",
              "text": "Skip it immediately to save time."
            },
            {
              "id": "b",
              "text": "Eliminate the two known wrong options and take a calculated guess between the remaining two."
            },
            {
              "id": "c",
              "text": "Pick option C, as it's statistically most likely."
            },
            {
              "id": "d",
              "text": "Leave it for the end and guess randomly."
            }
          ],
          "correctOptionId": "b",
          "hint": "Use what you *do* know to solve what you *don't* know.",
          "explanation": "Intelligent elimination increases your probability of getting it right from 25% to 50%. In exams with negative marking, a 50/50 calculated guess is usually worth the risk."
        },
        {
          "id": "cuet-prep-101-l06-q4",
          "text": "What is the most effective way to retain factual GK information over several months?",
          "skillId": "cuet-prep-101-skill-gk-retention",
          "options": [
            {
              "id": "a",
              "text": "Read the same PDF 10 times in one day."
            },
            {
              "id": "b",
              "text": "Write down every single news item in a notebook."
            },
            {
              "id": "c",
              "text": "Use spaced repetition flashcards (like Anki) and take weekly mixed quizzes."
            },
            {
              "id": "d",
              "text": "Highlight the textbook in 5 different colors."
            }
          ],
          "correctOptionId": "c",
          "hint": "Your brain needs to be forced to recall information just as it's about to forget it.",
          "explanation": "Spaced repetition is scientifically proven to move facts from short-term to long-term memory, which is essential for GK."
        },
        {
          "id": "cuet-prep-101-l06-q5",
          "text": "During a mock test, you realize you are spending 2 minutes per GK question trying to remember the answer. What is the correct protocol?",
          "skillId": "cuet-prep-101-skill-gk-pacing",
          "options": [
            {
              "id": "a",
              "text": "Keep thinking; it will eventually come to you."
            },
            {
              "id": "b",
              "text": "Treat GK as a 'know it or skip it' section. Spend max 15-20 seconds per question."
            },
            {
              "id": "c",
              "text": "Read the question out loud to jog your memory."
            },
            {
              "id": "d",
              "text": "Mark it for review and spend 5 minutes on it at the end."
            }
          ],
          "correctOptionId": "b",
          "hint": "GK doesn't require calculation. You either know the fact or you don't.",
          "explanation": "GK should be the fastest section of your paper. Wasting time here steals precious minutes from Quant or Logical Reasoning where time actually equals marks."
        },
        {
          "id": "cuet-prep-101-l06-q6",
          "text": "Which of these is a common trap when preparing for the General Test?",
          "skillId": "cuet-prep-101-skill-gk-pitfalls",
          "options": [
            {
              "id": "a",
              "text": "Practicing mental math daily."
            },
            {
              "id": "b",
              "text": "Over-indexing on obscure international news while ignoring major national events."
            },
            {
              "id": "c",
              "text": "Taking sectional mocks for Logical Reasoning."
            },
            {
              "id": "d",
              "text": "Reviewing the previous year's question papers."
            }
          ],
          "correctOptionId": "b",
          "hint": "Focus on what impacts the country most.",
          "explanation": "CUET generally focuses on prominent national news, major government schemes, and significant international events involving India. Memorizing obscure global trivia is a waste of time."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cuet-prep-101-l06-ia1",
          "type": "matching_pairs",
          "title": "GK Topic Categorization",
          "description": "Match the topic to its correct GK category to streamline your study plan.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Look at the topic on the left.",
            "Match it to Static GK or Current Affairs.",
            "Use this to organize your notes."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "First in India (Male/Female)"
              },
              {
                "id": "l2",
                "label": "Recent G20 Summit Outcomes"
              },
              {
                "id": "l3",
                "label": "Important Articles of the Constitution"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Static GK"
              },
              {
                "id": "r2",
                "label": "Current Affairs"
              },
              {
                "id": "r3",
                "label": "Static GK (Polity)"
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
      "imageUrl": "/generated-images/refinery/cuet-prep-101-l06.png"
    },
    {
      "id": "cuet-prep-101-l07",
      "title": "Mistake Log and Recovery Plan",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "A sleek, dark-mode digital tablet displaying a 'Mistake Tracker' dashboard with graphs showing decreasing error rates. A glowing neon pen rests on the screen.",
      "conceptVideoPrompt": "An animation showing a student taking a mock test, getting a question wrong, and then a digital 'Mistake Log' automatically categorizing the error as 'Silly Mistake', 'Concept Gap', or 'Time Pressure'. The student reviews the log and their score goes up in the next mock.",
      "learningAids": [
        {
          "id": "cuet-prep-101-l07-a1",
          "type": "image",
          "title": "Error Taxonomy Matrix",
          "content": "A visual guide to categorizing mistakes (e.g., Calculation, Reading Error, Concept Gap)."
        },
        {
          "id": "cuet-prep-101-l07-a2",
          "type": "animation",
          "title": "The Recovery Loop",
          "content": "Step-by-step animation of logging an error, finding the root cause, and practicing 5 similar questions."
        }
      ],
      "imageUrl": "/generated-images/refinery/cuet-prep-101-l07.png"
    },
    {
      "id": "cuet-prep-101-l08",
      "title": "Timed Domain Mix Practice",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "A high-energy visual of a split-screen showing different subjects (Physics, History, Accounts) blending together in a vortex, with a large digital timer counting down in the center.",
      "conceptVideoPrompt": "A first-person view of a student's computer screen taking a timed test. The UI shows them seamlessly switching between a tough math problem and a quick history question to maximize their score before the timer hits zero.",
      "metadata": {
        "prompts": [
          "Identify your ideal section attempt order.",
          "Practice switching context between two different subjects rapidly.",
          "Set a hard time limit for your next mixed practice block."
        ]
      },
      "interactiveActivities": [
        {
          "id": "cuet-prep-101-l08-ia1",
          "type": "sorting_buckets",
          "title": "Time-Checkpoint Sort",
          "description": "Sort execution decisions into the correct phase of a timed test.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each decision cue.",
            "Sort into Before Timer, In Section, or Recovery.",
            "Apply this mental model to your next mock."
          ],
          "data": {
            "buckets": [
              {
                "id": "before_timer",
                "label": "Before Timer Starts"
              },
              {
                "id": "in_section",
                "label": "Mid-Section (In the Zone)"
              },
              {
                "id": "recovery",
                "label": "Post-Test Recovery"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Decide the order in which you will attempt the subjects",
                "correctBucketId": "before_timer"
              },
              {
                "id": "i2",
                "label": "Skip a 3-minute calculation question to secure 3 easy 10-second questions",
                "correctBucketId": "in_section"
              },
              {
                "id": "i3",
                "label": "Log pacing errors and identify which subject drained your time",
                "correctBucketId": "recovery"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "cuet-prep-101-l08-a1",
          "type": "image",
          "title": "Time Control Snapshot",
          "content": "Visual guide on how to allocate 45 minutes across 40 questions."
        },
        {
          "id": "cuet-prep-101-l08-a2",
          "type": "animation",
          "title": "Context Switching",
          "content": "Animation showing the mental reset required when jumping from Quant to English."
        }
      ],
      "imageUrl": "/generated-images/refinery/cuet-prep-101-l08.png"
    },
    {
      "id": "cuet-prep-101-l09",
      "title": "CUET Mock Review Cycle",
      "type": "quiz",
      "duration": 12,
      "lessonImagePrompt": "A futuristic diagnostic screen showing a student's mock test results. Glowing charts break down performance by subject, time spent per question, and accuracy rate, with a 'Level Up' button flashing.",
      "conceptVideoPrompt": "An animation of a student finishing a mock test. Instead of closing the laptop, they open an 'X-Ray' view of their test. The video highlights how they find hidden patterns in their wrong answers and turn them into actionable study goals.",
      "questions": [
        {
          "id": "cuet-prep-101-l09-q1",
          "text": "You just finished a grueling 3-hour full mock test. What is the most important next step?",
          "skillId": "cuet-prep-101-skill-mock-workflow",
          "options": [
            {
              "id": "a",
              "text": "Immediately take another mock to improve your score."
            },
            {
              "id": "b",
              "text": "Check your percentile, feel good/bad, and close the laptop."
            },
            {
              "id": "c",
              "text": "Take a break, then spend at least 1-2 hours analyzing every correct, incorrect, and unattempted question."
            },
            {
              "id": "d",
              "text": "Only look at the questions you got wrong."
            }
          ],
          "correctOptionId": "c",
          "hint": "Taking the test is only 50% of the work. The real score improvement happens afterward.",
          "explanation": "Deep analysis is mandatory. You must review unattempted questions to see if you missed easy marks, and correct questions to ensure you didn't just get lucky or take too long."
        },
        {
          "id": "cuet-prep-101-l09-q2",
          "text": "During your mock review, you notice you got 5 questions wrong because you misread 'NOT' in the question stem. How do you fix this?",
          "skillId": "cuet-prep-101-skill-error-correction",
          "options": [
            {
              "id": "a",
              "text": "Tell yourself to 'read carefully next time'."
            },
            {
              "id": "b",
              "text": "Create a physical habit: use your cursor or finger to trace the question and actively highlight/circle words like NOT, EXCEPT, ALWAYS."
            },
            {
              "id": "c",
              "text": "Study the underlying concepts of those 5 questions again."
            },
            {
              "id": "d",
              "text": "Assume it was just test anxiety and ignore it."
            }
          ],
          "correctOptionId": "b",
          "hint": "Mental notes fail under pressure. Physical habits survive.",
          "explanation": "Silly mistakes require mechanical fixes, not just 'trying harder'. Actively tracking the text with a cursor forces your brain to slow down and process negative words."
        },
        {
          "id": "cuet-prep-101-l09-q3",
          "text": "You spent 4 minutes on a complex puzzle and got it right. Why might this still be flagged as a 'red' area in your mock analysis?",
          "skillId": "cuet-prep-101-skill-time-roi",
          "options": [
            {
              "id": "a",
              "text": "Because puzzles shouldn't be in the exam."
            },
            {
              "id": "b",
              "text": "Because 4 minutes is too fast and you probably guessed."
            },
            {
              "id": "c",
              "text": "Because spending 4 minutes on one question likely cost you the chance to answer 3-4 easier questions elsewhere."
            },
            {
              "id": "d",
              "text": "It shouldn't be flagged; getting it right is all that matters."
            }
          ],
          "correctOptionId": "c",
          "hint": "Every minute spent is an investment. What is the return?",
          "explanation": "In a timed test, time is currency. A correct answer that takes 4 minutes is a strategic failure if it prevents you from reaching easier questions at the end of the section."
        },
        {
          "id": "cuet-prep-101-l09-q4",
          "text": "Your mock analysis shows a 'Concept Gap' in Integration (Math). What is the correct remediation loop?",
          "skillId": "cuet-prep-101-skill-remediation-loop",
          "options": [
            {
              "id": "a",
              "text": "Watch a 5-minute summary video and take another full mock."
            },
            {
              "id": "b",
              "text": "Re-read the textbook chapter, solve 20 targeted Integration questions, and then take a sectional timed quiz to validate."
            },
            {
              "id": "c",
              "text": "Memorize the answer to the specific question you got wrong."
            },
            {
              "id": "d",
              "text": "Drop the topic entirely."
            }
          ],
          "correctOptionId": "b",
          "hint": "Fix the root cause, then test it under pressure.",
          "explanation": "True remediation requires re-learning the concept, practicing it untimed, and finally validating that you can solve it under timed conditions."
        },
        {
          "id": "cuet-prep-101-l09-q5",
          "text": "How should you adjust your mock frequency as the actual CUET exam approaches (last 14 days)?",
          "skillId": "cuet-prep-101-skill-mock-frequency",
          "options": [
            {
              "id": "a",
              "text": "Stop taking mocks to preserve confidence."
            },
            {
              "id": "b",
              "text": "Take 3 full mocks a day to build stamina."
            },
            {
              "id": "c",
              "text": "Take 1 mock every alternate day, using the days in between strictly for deep analysis and targeted remediation."
            },
            {
              "id": "d",
              "text": "Only take mocks for your strongest subjects."
            }
          ],
          "correctOptionId": "c",
          "hint": "Balance testing with fixing.",
          "explanation": "Taking too many mocks leads to burnout and leaves no time to actually fix the mistakes you are making. The alternate-day strategy provides the perfect balance of stamina building and score improvement."
        },
        {
          "id": "cuet-prep-101-l09-q6",
          "text": "You notice your accuracy drops significantly in the last 10 minutes of every mock. What is the likely cause and fix?",
          "skillId": "cuet-prep-101-skill-stamina",
          "options": [
            {
              "id": "a",
              "text": "Cause: The questions at the end are always harder. Fix: Skip them."
            },
            {
              "id": "b",
              "text": "Cause: Mental fatigue and panic. Fix: Implement a '10-second reset' breathing exercise before the final push, and save easier topics for the end."
            },
            {
              "id": "c",
              "text": "Cause: Bad luck. Fix: Guess 'C' for the last 10 questions."
            },
            {
              "id": "d",
              "text": "Cause: Lack of subject knowledge. Fix: Read more textbooks."
            }
          ],
          "correctOptionId": "b",
          "hint": "Exam fatigue is real. Manage your energy, not just your time.",
          "explanation": "Late-test accuracy drops are almost always due to fatigue and panic as the timer counts down. Managing your state of mind and strategically leaving easier questions for the end can mitigate this."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cuet-prep-101-l09-ia1",
          "type": "matching_pairs",
          "title": "Root-Cause Match",
          "description": "Match the mock test symptom to the actual root cause.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Identify the symptom on the left.",
            "Match it to the underlying problem on the right.",
            "Use this to diagnose your own mocks."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "High unattempted rate at the end of the section"
              },
              {
                "id": "l2",
                "label": "Getting 50/50 choices wrong frequently"
              },
              {
                "id": "l3",
                "label": "Correct answers taking 3+ minutes"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Poor time allocation / Getting stuck on ego questions"
              },
              {
                "id": "r2",
                "label": "Superficial concept knowledge / Lack of deep revision"
              },
              {
                "id": "r3",
                "label": "Inefficient methods / Lack of shortcut knowledge"
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
      "metadata": {
        "examDrill": "lesson_drill"
      },
      "imageUrl": "/generated-images/refinery/cuet-prep-101-l09.png"
    },
    {
      "id": "cuet-prep-101-l10",
      "title": "Targeted Domain Subjects Remediation",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "A close-up of a digital sniper scope locking onto a specific weak topic (e.g., 'Organic Chemistry') on a glowing holographic map, symbolizing targeted remediation.",
      "conceptVideoPrompt": "A 3D animation showing a crumbling brick wall representing a student's weak subject. A robotic arm comes in, removes the broken bricks (misconceptions), and replaces them with solid, glowing new bricks (remediated concepts), making the wall indestructible.",
      "metadata": {
        "prompts": [
          "Identify your lowest scoring chapter in your main domain.",
          "Create a 3-step plan to fix that specific chapter.",
          "Set a date to re-test this chapter."
        ]
      },
      "interactiveActivities": [
        {
          "id": "cuet-prep-101-l10-ia1",
          "type": "drag_and_drop",
          "title": "Remediation Phase Mapping",
          "description": "Map the study action to the correct phase of fixing a weak topic.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Assign each action to Diagnose, Learn, or Validate.",
            "Check your mappings.",
            "Apply this framework to your weakest subject."
          ],
          "data": {
            "targets": [
              {
                "id": "diagnose",
                "label": "Diagnose"
              },
              {
                "id": "learn",
                "label": "Learn & Drill"
              },
              {
                "id": "validate",
                "label": "Validate"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Review mock logs to find the exact sub-topic causing errors",
                "correctTargetId": "diagnose"
              },
              {
                "id": "d2",
                "label": "Solve 30 untimed questions focusing purely on method",
                "correctTargetId": "learn"
              },
              {
                "id": "d3",
                "label": "Take a 15-minute timed sectional quiz on the topic",
                "correctTargetId": "validate"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "cuet-prep-101-l10-a1",
          "type": "image",
          "title": "The Remediation Funnel",
          "content": "Visual showing how to narrow down from 'Weak in Math' to 'Weak in Integration by Parts'."
        },
        {
          "id": "cuet-prep-101-l10-a2",
          "type": "animation",
          "title": "Active Recall Drill",
          "content": "Animation demonstrating how to use flashcards to fix memory-based domain gaps."
        }
      ],
      "imageUrl": "/generated-images/refinery/cuet-prep-101-l10.png"
    },
    {
      "id": "cuet-prep-101-l11",
      "title": "Timed General Test Sprint",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "A high-octane visual of a runner on a glowing digital track, jumping over hurdles labeled 'Math', 'Logic', and 'GK', with a massive stadium timer in the background.",
      "conceptVideoPrompt": "A fast-paced, adrenaline-pumping animation showing a student's POV taking the General Test. The UI flashes green as they rapidly click through GK questions, slows down slightly for a logic puzzle, and sprints to the finish line just as the timer hits 00:01.",
      "learningAids": [
        {
          "id": "cuet-prep-101-l11-a1",
          "type": "image",
          "title": "General Test Pacing Guide",
          "content": "Infographic showing ideal time splits: GK (fast), Logic (medium), Quant (slow)."
        },
        {
          "id": "cuet-prep-101-l11-a2",
          "type": "animation",
          "title": "The 3-Pass Technique",
          "content": "Walkthrough of doing the paper in 3 rounds: Easy/Instant, Medium/Solve, Hard/Guess."
        }
      ],
      "imageUrl": "/generated-images/refinery/cuet-prep-101-l11.png"
    },
    {
      "id": "cuet-prep-101-l12",
      "title": "Mixed-Section Decision Drill",
      "type": "quiz",
      "duration": 12,
      "lessonImagePrompt": "A futuristic control room with multiple screens showing different subjects. A student sits in the captain's chair, rapidly pressing buttons to switch between screens, symbolizing mental agility.",
      "conceptVideoPrompt": "An animation of a brain shifting gears like a sports car. It shifts from 'Language Mode' (blue glowing text) to 'Math Mode' (green glowing numbers) seamlessly, demonstrating the power of context switching.",
      "questions": [
        {
          "id": "cuet-prep-101-l12-q1",
          "text": "You just finished a heavy Reading Comprehension section and now have to start Quantitative Aptitude. Your brain feels foggy. What is the best micro-strategy?",
          "skillId": "cuet-prep-101-skill-context-switching",
          "options": [
            {
              "id": "a",
              "text": "Dive straight into the hardest math problem to wake yourself up."
            },
            {
              "id": "b",
              "text": "Take a 10-second deep breath, close your eyes, and start with 2-3 easy calculation questions to build momentum."
            },
            {
              "id": "c",
              "text": "Skip Quant and do GK instead."
            },
            {
              "id": "d",
              "text": "Read the math questions but answer them later."
            }
          ],
          "correctOptionId": "b",
          "hint": "Momentum is key when switching subjects.",
          "explanation": "A brief mental reset followed by 'easy wins' helps your brain transition from verbal processing to logical/numerical processing without panic."
        },
        {
          "id": "cuet-prep-101-l12-q2",
          "text": "In a mixed-section drill, you realize you are 5 minutes behind your target pace. What is the immediate corrective action?",
          "skillId": "cuet-prep-101-skill-pacing-adjustment",
          "options": [
            {
              "id": "a",
              "text": "Read the next 5 questions twice as fast."
            },
            {
              "id": "b",
              "text": "Identify the next 'time-sink' question (e.g., a long puzzle) and aggressively skip it to get back on schedule."
            },
            {
              "id": "c",
              "text": "Panic and start guessing randomly."
            },
            {
              "id": "d",
              "text": "Ignore the timer and focus on accuracy."
            }
          ],
          "correctOptionId": "b",
          "hint": "You can't buy back time, but you can cut your losses.",
          "explanation": "When behind pace, you must sacrifice a high-time-cost question to save 3-4 easier questions later in the section. Aggressive skipping is a vital survival skill."
        },
        {
          "id": "cuet-prep-101-l12-q3",
          "text": "You are strong in Domain A but weak in Domain B. How should you sequence them if you have the choice?",
          "skillId": "cuet-prep-101-skill-section-sequencing",
          "options": [
            {
              "id": "a",
              "text": "Always do the weak subject first to get it out of the way."
            },
            {
              "id": "b",
              "text": "Start with the strong subject to secure marks and build confidence, then tackle the weak subject with the remaining time."
            },
            {
              "id": "c",
              "text": "Alternate one question from A, one from B."
            },
            {
              "id": "d",
              "text": "It doesn't matter; just go in alphabetical order."
            }
          ],
          "correctOptionId": "b",
          "hint": "Secure the bag first. Don't let a hard section ruin your mood for an easy one.",
          "explanation": "Starting with your strength guarantees you bank those marks quickly and boosts your psychological state, making you more resilient when facing the tougher subject."
        },
        {
          "id": "cuet-prep-101-l12-q4",
          "text": "During a mixed drill, a specific question looks easy but your answer isn't matching the options after 2 attempts. What is the rule?",
          "skillId": "cuet-prep-101-skill-ego-management",
          "options": [
            {
              "id": "a",
              "text": "Try a third time; you are probably just missing a minus sign."
            },
            {
              "id": "b",
              "text": "Mark it for review, drop it immediately, and move on. Do not let ego dictate your time."
            },
            {
              "id": "c",
              "text": "Assume the question is wrong and challenge it in your head."
            },
            {
              "id": "d",
              "text": "Pick the option closest to your answer."
            }
          ],
          "correctOptionId": "b",
          "hint": "Ego is the enemy of a high percentile.",
          "explanation": "Getting stuck on an 'easy' question is a classic trap. The sunk-cost fallacy will destroy your pacing. Drop it and return only if time permits."
        },
        {
          "id": "cuet-prep-101-l12-q5",
          "text": "What is the primary benefit of practicing 'Mixed-Section Drills' over 'Single-Subject Drills' in the final month?",
          "skillId": "cuet-prep-101-skill-drill-selection",
          "options": [
            {
              "id": "a",
              "text": "It helps you memorize formulas better."
            },
            {
              "id": "b",
              "text": "It trains your brain to handle cognitive load and context switching, simulating real exam fatigue."
            },
            {
              "id": "c",
              "text": "It takes less time to complete."
            },
            {
              "id": "d",
              "text": "It guarantees the exact questions will appear in the exam."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The real exam tests your endurance and ability to switch gears. Mixed drills build the mental stamina required to perform well across 3-4 different subjects in one sitting."
        },
        {
          "id": "cuet-prep-101-l12-q6",
          "text": "You have 2 minutes left and 5 questions remaining in a section with negative marking. What is the optimal play?",
          "skillId": "cuet-prep-101-skill-endgame-strategy",
          "options": [
            {
              "id": "a",
              "text": "Blindly guess all 5 to maximize attempts."
            },
            {
              "id": "b",
              "text": "Leave them all blank to avoid negative marks."
            },
            {
              "id": "c",
              "text": "Scan for the shortest question, solve it properly, and leave the rest unless you can eliminate 2 options for a calculated guess."
            },
            {
              "id": "d",
              "text": "Read all 5 questions halfway."
            }
          ],
          "correctOptionId": "c",
          "hint": "Quality over quantity in the final minutes.",
          "explanation": "Blind guessing destroys your score due to negative marking. Securing 1 solid mark is better than risking -4. Only guess if you can confidently eliminate two options."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cuet-prep-101-l12-ia1",
          "type": "matching_pairs",
          "title": "Context Switching Scenarios",
          "description": "Match the exam scenario with the best mental adjustment.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the scenario.",
            "Match it to the correct strategy.",
            "Practice this in your next mixed drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Moving from Math to English"
              },
              {
                "id": "l2",
                "label": "Encountering a brutal 5-question puzzle block"
              },
              {
                "id": "l3",
                "label": "Realizing you have 10 mins for 20 GK questions"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Shift from calculation mode to reading/elimination mode"
              },
              {
                "id": "r2",
                "label": "Skip the entire block and return later"
              },
              {
                "id": "r3",
                "label": "Engage rapid-fire mode: read, click, next (no second-guessing)"
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
      "metadata": {
        "examDrill": "lesson_drill"
      },
      "imageUrl": "/generated-images/refinery/cuet-prep-101-l12.png"
    },
    {
      "id": "cuet-prep-101-l13",
      "title": "Adaptive Retry and Transfer Check",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "A futuristic gym setting where a student is lifting glowing digital weights. The weights automatically adjust their size based on the student's strength, symbolizing adaptive learning.",
      "conceptVideoPrompt": "An animation showing a student getting a geometry question wrong. The system immediately generates three new, slightly different geometry questions. The student solves them, and a 'Skill Mastered' badge unlocks with a satisfying sound effect.",
      "learningAids": [
        {
          "id": "cuet-prep-101-l13-a1",
          "type": "image",
          "title": "The Transfer Check Concept",
          "content": "Visual showing how fixing a mistake in Mock 1 should lead to a correct answer in Mock 2."
        },
        {
          "id": "cuet-prep-101-l13-a2",
          "type": "animation",
          "title": "Adaptive Retry Loop",
          "content": "Walkthrough of how to use the app's adaptive retry feature to cement concepts."
        }
      ]
    },
    {
      "id": "cuet-prep-101-l14",
      "title": "CUET Readiness Stability Checkpoint",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "A high-tech dashboard showing a heartbeat monitor stabilizing into a smooth, consistent green line, with the words 'Score Stabilized' glowing above it.",
      "conceptVideoPrompt": "A sleek UI animation showing a student's mock scores over time. Initially, the graph is spiky and chaotic. As they apply stability strategies, the graph smooths out into a consistent, upward-trending curve.",
      "metadata": {
        "prompts": [
          "Calculate your average score variance across the last 3 mocks.",
          "Identify the subject causing the most instability.",
          "Set a baseline target score for your next mock."
        ]
      },
      "interactiveActivities": [
        {
          "id": "cuet-prep-101-l14-ia1",
          "type": "drag_and_drop",
          "title": "Stability vs. Volatility Mapping",
          "description": "Identify which habits create stable scores and which create volatile scores.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the study habit.",
            "Drag it to 'Creates Stability' or 'Creates Volatility'.",
            "Eliminate volatile habits from your routine."
          ],
          "data": {
            "targets": [
              {
                "id": "stable",
                "label": "Creates Stability"
              },
              {
                "id": "volatile",
                "label": "Creates Volatility"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Having a fixed order of attempting sections",
                "correctTargetId": "stable"
              },
              {
                "id": "d2",
                "label": "Guessing aggressively when behind on time",
                "correctTargetId": "volatile"
              },
              {
                "id": "d3",
                "label": "Skipping hard questions within the first 30 seconds",
                "correctTargetId": "stable"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "cuet-prep-101-l14-a1",
          "type": "image",
          "title": "Score Variance Tracker",
          "content": "A template for tracking how much your score fluctuates between mocks."
        },
        {
          "id": "cuet-prep-101-l14-a2",
          "type": "animation",
          "title": "The Baseline Strategy",
          "content": "Animation showing how to secure a 'baseline' score before attempting risky questions."
        }
      ],
      "imageUrl": "/generated-images/refinery/cuet-prep-101-l14.png"
    },
    {
      "id": "cuet-prep-101-l15",
      "title": "Final Revision and Exam-Day Plan",
      "type": "quiz",
      "duration": 20,
      "lessonImagePrompt": "A cinematic, dramatic shot of a student standing confidently in front of massive, glowing university gates. They are holding a glowing digital 'Exam Day Blueprint' tablet. Sunrise lighting.",
      "conceptVideoPrompt": "A fast-paced, motivational montage showing the last 48 hours before the exam. It shows the student packing their bag, doing light revision, sleeping well, and walking into the exam center with a calm, focused UI overlay showing their heart rate steady.",
      "questions": [
        {
          "id": "cuet-prep-101-l15-q1",
          "text": "It is 48 hours before the CUET exam. What should your study schedule look like?",
          "skillId": "cuet-prep-101-skill-final-revision",
          "options": [
            {
              "id": "a",
              "text": "Take 2 full mock tests to keep the momentum going."
            },
            {
              "id": "b",
              "text": "Start learning that one tough chapter you skipped earlier."
            },
            {
              "id": "c",
              "text": "Stop all mocks. Review your mistake log, formula sheets, and short notes only."
            },
            {
              "id": "d",
              "text": "Study through the night to maximize hours."
            }
          ],
          "correctOptionId": "c",
          "hint": "The hay is in the barn. Now is the time to sharpen the tools, not build new ones.",
          "explanation": "Taking mocks right before the exam can destroy confidence if you score low. Learning new topics causes panic. Reviewing consolidated notes and past mistakes is the only high-ROI activity left."
        },
        {
          "id": "cuet-prep-101-l15-q2",
          "text": "You sit down at the computer center, and the exam begins. The first 3 questions in your strongest subject are incredibly difficult. What is your move?",
          "skillId": "cuet-prep-101-skill-exam-psychology",
          "options": [
            {
              "id": "a",
              "text": "Spend 10 minutes solving them to prove to yourself you are ready."
            },
            {
              "id": "b",
              "text": "Panic, assume the whole paper is impossible, and start guessing."
            },
            {
              "id": "c",
              "text": "Smile, skip them immediately, and find question #4 which is likely much easier."
            },
            {
              "id": "d",
              "text": "Complain to the invigilator."
            }
          ],
          "correctOptionId": "c",
          "hint": "Examiners often put speed-breakers at the start to test your composure.",
          "explanation": "This is a classic exam setter trick. Skipping early hard questions protects your time and your confidence. You can always come back to them later."
        },
        {
          "id": "cuet-prep-101-l15-q3",
          "text": "How should you manage the on-screen timer during the exam?",
          "skillId": "cuet-prep-101-skill-timer-management",
          "options": [
            {
              "id": "a",
              "text": "Stare at it constantly so you don't run out of time."
            },
            {
              "id": "b",
              "text": "Hide it if possible, and just go by feel."
            },
            {
              "id": "c",
              "text": "Check it only at pre-defined checkpoints (e.g., after every 10 questions or when switching sections)."
            },
            {
              "id": "d",
              "text": "Only look at it in the last 5 minutes."
            }
          ],
          "correctOptionId": "c",
          "hint": "The timer is a tool, not a threat. Use it strategically.",
          "explanation": "Constant checking causes anxiety. Never checking causes pacing disasters. Pre-defined checkpoints keep you on track without the stress."
        },
        {
          "id": "cuet-prep-101-l15-q4",
          "text": "You have 1 minute left and 3 unattempted questions. You have no idea how to solve them. What do you do?",
          "skillId": "cuet-prep-101-skill-final-minute",
          "options": [
            {
              "id": "a",
              "text": "Mark 'B' for all of them."
            },
            {
              "id": "b",
              "text": "Leave them blank. Protect your accuracy and avoid negative marking."
            },
            {
              "id": "c",
              "text": "Try to speed-read one and guess."
            },
            {
              "id": "d",
              "text": "Change some of your previous answers."
            }
          ],
          "correctOptionId": "b",
          "hint": "Don't give away hard-earned marks at the finish line.",
          "explanation": "With negative marking, blind guessing in the final minute is statistical suicide. Protect the marks you've already earned."
        },
        {
          "id": "cuet-prep-101-l15-q5",
          "text": "What is the most critical physical preparation for exam day?",
          "skillId": "cuet-prep-101-skill-physical-prep",
          "options": [
            {
              "id": "a",
              "text": "Drinking 3 energy drinks right before entering."
            },
            {
              "id": "b",
              "text": "Eating a massive breakfast so you don't get hungry."
            },
            {
              "id": "c",
              "text": "Getting 7-8 hours of sleep the night before and eating a light, familiar meal."
            },
            {
              "id": "d",
              "text": "Doing 100 pushups to get the blood flowing."
            }
          ],
          "correctOptionId": "c",
          "hint": "Your brain needs rest, not a sugar crash.",
          "explanation": "Sleep deprivation destroys cognitive function and recall speed. A heavy meal causes lethargy. Rest and light nutrition are your best performance enhancers."
        },
        {
          "id": "cuet-prep-101-l15-q6",
          "text": "During the exam, the computer system glitches and you lose 2 minutes while the invigilator fixes it. How do you react?",
          "skillId": "cuet-prep-101-skill-crisis-management",
          "options": [
            {
              "id": "a",
              "text": "Argue with the invigilator and demand extra time."
            },
            {
              "id": "b",
              "text": "Let panic set in and rush through the next 10 questions, making silly mistakes."
            },
            {
              "id": "c",
              "text": "Take a deep breath, accept the lost 2 minutes, and smoothly resume your strategy. Drop 1 hard question to make up the time."
            },
            {
              "id": "d",
              "text": "Give up on getting a top rank."
            }
          ],
          "correctOptionId": "c",
          "hint": "Control what you can control.",
          "explanation": "Tech glitches happen. Losing 2 minutes is bad, but losing your composure will cost you 20 minutes of productivity. Adjust your pacing by skipping one time-sink question and move on."
        },
        {
          "id": "cuet-prep-101-l15-q7",
          "text": "You are reviewing your answers in the last 5 minutes. You feel an urge to change an answer you were initially 80% sure about. Should you?",
          "skillId": "cuet-prep-101-skill-review-strategy",
          "options": [
            {
              "id": "a",
              "text": "Yes, second thoughts are usually right."
            },
            {
              "id": "b",
              "text": "No, unless you find a glaring factual error or misread the question (e.g., missing a 'NOT'). Stick to your first instinct."
            },
            {
              "id": "c",
              "text": "Change it only if it makes a pattern on the answer sheet."
            },
            {
              "id": "d",
              "text": "Delete the answer entirely."
            }
          ],
          "correctOptionId": "b",
          "hint": "Trust your initial training.",
          "explanation": "Statistically, students change right answers to wrong answers more often than the reverse when panicked at the end. Only change an answer if you find concrete proof you misread the prompt."
        },
        {
          "id": "cuet-prep-101-l15-q8",
          "text": "What should you do with your admit card, ID, and photos?",
          "skillId": "cuet-prep-101-skill-logistics",
          "options": [
            {
              "id": "a",
              "text": "Print them on the morning of the exam."
            },
            {
              "id": "b",
              "text": "Keep them in a digital folder on your phone."
            },
            {
              "id": "c",
              "text": "Print them 2 days before, put them in a clear folder, and place it next to your shoes the night before."
            },
            {
              "id": "d",
              "text": "Assume the center will have a printer."
            }
          ],
          "correctOptionId": "c",
          "hint": "Eliminate all morning-of friction.",
          "explanation": "Logistical stress on exam morning drains the mental energy you need for the test. Prepare everything 48 hours in advance."
        },
        {
          "id": "cuet-prep-101-l15-q9",
          "text": "You finish a section 10 minutes early. What is the best use of this time?",
          "skillId": "cuet-prep-101-skill-buffer-time",
          "options": [
            {
              "id": "a",
              "text": "Rest your eyes and take a nap."
            },
            {
              "id": "b",
              "text": "Re-calculate every single math problem."
            },
            {
              "id": "c",
              "text": "Review only the questions you 'Marked for Review' and double-check that you didn't miss any 'NOT/EXCEPT' keywords."
            },
            {
              "id": "d",
              "text": "Try to hack the system to move to the next section early."
            }
          ],
          "correctOptionId": "c",
          "hint": "Targeted review beats random checking.",
          "explanation": "Don't waste time re-doing easy questions you know are right. Focus your buffer time exclusively on flagged questions and checking for silly reading errors."
        },
        {
          "id": "cuet-prep-101-l15-q10",
          "text": "As you walk into the exam hall, what should your internal monologue be?",
          "skillId": "cuet-prep-101-skill-mindset",
          "options": [
            {
              "id": "a",
              "text": "'I need to score 100% or my life is over.'"
            },
            {
              "id": "b",
              "text": "'I hope the paper is easy.'"
            },
            {
              "id": "c",
              "text": "'I have trained for this. I will execute my strategy, skip the traps, and maximize my score regardless of the difficulty.'"
            },
            {
              "id": "d",
              "text": "'I should have studied more yesterday.'"
            }
          ],
          "correctOptionId": "c",
          "hint": "Confidence comes from trusting your process.",
          "explanation": "A process-oriented mindset keeps you calm. Focusing on outcomes (scores) or regrets causes anxiety. Trust your training and focus purely on execution."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cuet-prep-101-l15-ia1",
          "type": "sorting_buckets",
          "title": "Exam Day Do's and Don'ts",
          "description": "Sort the actions into what you should and shouldn't do on the day of the CUET.",
          "estimatedMinutes": 10,
          "difficultyLevel": "easy",
          "instructions": [
            "Read the action.",
            "Sort into 'Do This' or 'Avoid This'.",
            "Lock in your exam day plan."
          ],
          "data": {
            "buckets": [
              {
                "id": "do",
                "label": "Do This"
              },
              {
                "id": "avoid",
                "label": "Avoid This"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Eat a light, familiar breakfast",
                "correctBucketId": "do"
              },
              {
                "id": "i2",
                "label": "Discuss syllabus with friends outside the center",
                "correctBucketId": "avoid"
              },
              {
                "id": "i3",
                "label": "Use the washroom before entering the lab",
                "correctBucketId": "do"
              },
              {
                "id": "i4",
                "label": "Try a new guessing strategy you saw on YouTube that morning",
                "correctBucketId": "avoid"
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
        "masteryThreshold": 0.82
      },
      "metadata": {
        "examDrill": "full_mock"
      },
      "learningAids": [
        {
          "id": "cuet-prep-101-l15-a1",
          "type": "image",
          "title": "Exam Day Checklist",
          "content": "Visual checklist of Admit Card, ID, Pen, Water Bottle, and mindset."
        },
        {
          "id": "cuet-prep-101-l15-a2",
          "type": "animation",
          "title": "The First 5 Minutes",
          "content": "Animation showing how to set up your rough sheet and calm your nerves before clicking 'Start'."
        }
      ],
      "imageUrl": "/generated-images/refinery/cuet-prep-101-l15.png"
    }
  ]
};
