import type { LearningModule } from "@/lib/modules/types";

export const a_level_prep_101_Module: LearningModule = {
  "id": "a-level-prep-101",
  "title": "A-Level Prep Foundations",
  "description": "Level up your A-Level exam game. Master deep content, nail your analytical writing, and build bulletproof strategies for timed exams so you can walk into the hall with zero stress.",
  "subject": "Exam Prep",
  "tags": [
    "exam-prep",
    "assessment",
    "advanced",
    "study-skills",
    "a-level"
  ],
  "minAge": 15,
  "maxAge": 19,
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
    "Build structured, stress-free A-Level revision workflows.",
    "Improve speed and accuracy under strict timed constraints.",
    "Use analytics-based feedback loops to crush weak areas."
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
      "id": "a-level-prep-101-l01",
      "title": "Cracking A-Level Standards & Targets",
      "type": "video",
      "duration": 11,
      "metadata": {
        "lessonImagePrompt": "Imagen 4 prompt: A sleek, modern student dashboard showing A-Level target grades with glowing progress bars, cinematic lighting, photorealistic, neon blue and purple accents, 8k resolution.",
        "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic 3D animation zooming through a glowing roadmap of A-Level subjects, landing on a glowing target bullseye. High quality, 4k resolution, fast-paced, motivating, and futuristic.",
        "prompts": [
          "What is your target grade for your absolute toughest subject?",
          "Identify one specific topic you need to master to hit that target.",
          "Write down a daily micro-goal to get you there."
        ]
      },
      "learningAids": [
        {
          "id": "a-level-prep-101-l01-a1",
          "type": "image",
          "title": "Depth Mastery Snapshot",
          "content": "A visual breakdown of what examiners actually mean by 'depth' vs 'breadth' in A-Level grading."
        },
        {
          "id": "a-level-prep-101-l01-a2",
          "type": "animation",
          "title": "Analysis Walkthrough",
          "content": "Step-by-step animation showing how to break down a massive A-Level syllabus into actionable daily targets."
        }
      ]
    },
    {
      "id": "a-level-prep-101-l02",
      "title": "Active Recall & Retrieval Systems",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "lessonImagePrompt": "Imagen 4 prompt: A futuristic glowing brain with interconnected nodes representing memory retrieval, neon blue and purple, 8k resolution, highly detailed, cyberpunk aesthetic.",
        "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced visual metaphor of a student pulling glowing files from a massive, organized digital library, representing quick memory recall, 4k, cinematic lighting, smooth transitions.",
        "prompts": [
          "Identify one active recall technique (like blurting or flashcards) that works best for you.",
          "Apply it to a single topic today and see how much faster you can retrieve the info.",
          "Set a target to use this technique before your next practice paper."
        ]
      },
      "interactiveActivities": [
        {
          "id": "a-level-prep-101-l02-ia1",
          "type": "drag_and_drop",
          "title": "Map Your Retrieval Strategy",
          "description": "Drag and drop the study habits into the correct phase of your revision cycle: Plan, Execute, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each study habit.",
            "Drag it to the phase where it belongs.",
            "Review your answers to build a bulletproof workflow."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan (Before Studying)"
              },
              {
                "id": "execute",
                "label": "Execute (During Studying)"
              },
              {
                "id": "reflect",
                "label": "Reflect (After Studying)"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Prioritize high-weight synoptic topics",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Write out arguments from memory without notes",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Audit your answers against the mark scheme",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "a-level-prep-101-l02-a1",
          "type": "image",
          "title": "Beating the Forgetting Curve",
          "content": "A visual graph showing how spaced repetition flattens the forgetting curve and locks in memory."
        },
        {
          "id": "a-level-prep-101-l02-a2",
          "type": "animation",
          "title": "Active Recall in Action",
          "content": "An animation demonstrating the massive difference in brain activity between passive reading and active recall."
        }
      ]
    },
    {
      "id": "a-level-prep-101-l03",
      "title": "High-Value Topic Prioritization",
      "type": "quiz",
      "duration": 12,
      "metadata": {
        "lessonImagePrompt": "Imagen 4 prompt: A glowing holographic pyramid showing topic prioritization, top tier glowing gold, dark background, photorealistic, 8k, depth of field.",
        "conceptVideoPrompt": "Veo 3.1 prompt: A sleek animation of a student sorting glowing blocks of different sizes into a high-priority funnel, representing efficient study planning, 4k, dynamic camera angles.",
        "examDrill": "lesson_drill"
      },
      "questions": [
        {
          "id": "a-level-prep-101-l03-q1",
          "text": "You keep bleeding marks on 'depth of analysis' during practice papers. What's your best move before the next timed session?",
          "skillId": "a-level-prep-101-skill-depth-mastery-workflow",
          "options": [
            {
              "id": "a",
              "text": "Skip the review and just grind harder questions to build stamina."
            },
            {
              "id": "b",
              "text": "Only look at your total score and ignore the specific feedback."
            },
            {
              "id": "c",
              "text": "Do a quick review of why you missed those marks, log the specific error, and retest that exact skill."
            },
            {
              "id": "d",
              "text": "Switch to a completely different topic to clear your head."
            }
          ],
          "correctOptionId": "c",
          "hint": "Think about creating a feedback loop that actually fixes the root problem.",
          "explanation": "Fast, targeted feedback followed by immediate correction is the most reliable way to improve depth of analysis. Grinding without reviewing just reinforces bad habits."
        },
        {
          "id": "a-level-prep-101-l03-q2",
          "text": "You just finished a practice session and your timing was all over the place. What should you diagnose first?",
          "skillId": "a-level-prep-101-skill-analysis-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Retake the whole paper immediately to see if you can go faster."
            },
            {
              "id": "b",
              "text": "Do more questions to build muscle memory."
            },
            {
              "id": "c",
              "text": "Force yourself to spend exactly 1 minute per mark, no matter the question type."
            },
            {
              "id": "d",
              "text": "Figure out exactly which type of question (e.g., essays vs. data analysis) is eating up your time, and set micro-goals for that section."
            }
          ],
          "correctOptionId": "d",
          "hint": "You need to find the specific bottleneck before you can fix it.",
          "explanation": "Pacing improves when you identify the exact type of question that slows you down and practice pacing for that specific task. A blanket '1 minute per mark' rule doesn't work for complex essays."
        },
        {
          "id": "a-level-prep-101-l03-q3",
          "text": "You understand the feedback on your essays, but you keep making the same mistakes in timed conditions. How do you fix this?",
          "skillId": "a-level-prep-101-skill-extended-response-transfer",
          "options": [
            {
              "id": "a",
              "text": "Take the corrected mistake and immediately test yourself on a similar question under timed conditions."
            },
            {
              "id": "b",
              "text": "Keep re-reading your notes until you feel more confident."
            },
            {
              "id": "c",
              "text": "Try doing university-level questions to make A-Levels feel easier."
            },
            {
              "id": "d",
              "text": "Watch more YouTube tutorials on the topic."
            }
          ],
          "correctOptionId": "a",
          "hint": "You need to bridge the gap between knowing the fix and applying it under pressure.",
          "explanation": "Corrections only stick when you immediately practice applying them to a new, similar problem under the same time constraints. Passive reading won't fix performance under pressure."
        },
        {
          "id": "a-level-prep-101-l03-q4",
          "text": "When reviewing a past paper, which type of mistake should you prioritize fixing first to boost your grade?",
          "skillId": "a-level-prep-101-skill-synoptic-links-priority",
          "options": [
            {
              "id": "a",
              "text": "Make sure your strongest topics are absolutely perfect."
            },
            {
              "id": "b",
              "text": "Fix recurring structural errors (like missing links or bad pacing) because they cost you marks across multiple questions."
            },
            {
              "id": "c",
              "text": "Focus entirely on the one obscure topic you didn't know."
            },
            {
              "id": "d",
              "text": "Rewrite your class notes to make them neater."
            }
          ],
          "correctOptionId": "b",
          "hint": "Which fix will give you the biggest return on investment across the whole paper?",
          "explanation": "Process errors (like bad essay structure or poor time management) affect your score on almost every question. Fixing them yields the biggest score jump compared to learning one obscure fact."
        },
        {
          "id": "a-level-prep-101-l03-q5",
          "text": "Your teacher says your essays are 'too descriptive' and lack analysis. What is the best immediate fix?",
          "skillId": "a-level-prep-101-skill-depth-mastery-section-application",
          "options": [
            {
              "id": "a",
              "text": "Write longer paragraphs to ensure you cover everything."
            },
            {
              "id": "b",
              "text": "Memorize more facts and dates to impress the examiner."
            },
            {
              "id": "c",
              "text": "Force yourself to use 'because... therefore...' reasoning after every piece of evidence you introduce."
            },
            {
              "id": "d",
              "text": "Wait until your next full mock exam to try a new writing style."
            }
          ],
          "correctOptionId": "c",
          "hint": "You need a structural rule that forces you to analyze, not just state facts.",
          "explanation": "Using explicit 'because/therefore' frameworks forces you to explain the significance of your evidence, instantly shifting your writing from descriptive to analytical."
        },
        {
          "id": "a-level-prep-101-l03-q6",
          "text": "You keep forgetting to link different topics together (synoptic links) in your 25-mark essays. What's your game plan?",
          "skillId": "a-level-prep-101-skill-analysis-section-application",
          "options": [
            {
              "id": "a",
              "text": "Move on to a different subject and hope you remember next time."
            },
            {
              "id": "b",
              "text": "Try to write faster so you have time to add links at the end."
            },
            {
              "id": "c",
              "text": "Just re-read the essay question a few more times."
            },
            {
              "id": "d",
              "text": "Practice writing single paragraphs that explicitly link two themes, track your success, and repeat until it's a habit."
            }
          ],
          "correctOptionId": "d",
          "hint": "Break the big problem down into a small, repeatable drill.",
          "explanation": "Isolating the specific skill (writing a synoptic paragraph) and drilling it makes it automatic when you write full essays. Hoping you'll remember on the day is a recipe for panic."
        }
      ],
      "interactiveActivities": [
        {
          "id": "a-level-prep-101-l03-ia1",
          "type": "matching_pairs",
          "title": "Match the Error to the Fix",
          "description": "Connect the common exam mistake with the best strategy to fix it.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the exam error on the left.",
            "Match it to the actionable fix on the right.",
            "Apply one of these fixes in your next study session."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Essay has facts but weak analysis"
              },
              {
                "id": "l2",
                "label": "Data question misses evaluation marks"
              },
              {
                "id": "l3",
                "label": "Revision is too broad, lacking depth"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Use 'because-therefore' reasoning after evidence"
              },
              {
                "id": "r2",
                "label": "Apply a reliability/bias checklist before concluding"
              },
              {
                "id": "r3",
                "label": "Run a focused 'deep dive' sprint on one topic"
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
      "learningAids": [
        {
          "id": "a-level-prep-101-l03-a1",
          "type": "image",
          "title": "The Prioritization Matrix",
          "content": "A visual guide on how to rank topics by exam weight vs. your current confidence level."
        },
        {
          "id": "a-level-prep-101-l03-a2",
          "type": "animation",
          "title": "Triage in Action",
          "content": "Animation showing how to quickly triage a past paper to find the highest-yield areas to study."
        }
      ]
    },
    {
      "id": "a-level-prep-101-l04",
      "title": "Mastering Analytical Essay Construction",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "lessonImagePrompt": "Imagen 4 prompt: A glowing blueprint of an essay structure, with sections for claim, evidence, and analysis lighting up sequentially, cyberpunk aesthetic, 8k, highly detailed.",
        "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic animation of text blocks snapping together like high-tech Lego bricks to form a perfect essay paragraph, 4k resolution, smooth motion graphics.",
        "prompts": [
          "Identify one structural weakness in your recent essays.",
          "Apply the PEEL (Point, Evidence, Explain, Link) framework to rewrite one paragraph.",
          "Set a goal for your next essay's conclusion."
        ]
      },
      "interactiveActivities": [
        {
          "id": "a-level-prep-101-l04-ia1",
          "type": "drag_and_drop",
          "title": "Build the Perfect Paragraph",
          "description": "Drag the components of an analytical paragraph into the correct logical order.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the sentence fragments.",
            "Arrange them to form a cohesive, high-scoring analytical paragraph.",
            "Check your structure against the PEEL method."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "1. The Claim (Point)"
              },
              {
                "id": "execute",
                "label": "2. The Evidence"
              },
              {
                "id": "reflect",
                "label": "3. The Analysis (Explain/Link)"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "State your main argument clearly and concisely.",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Provide specific data, quotes, or case studies.",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Explain *why* the evidence proves your point and link back to the question.",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "a-level-prep-101-l04-a1",
          "type": "image",
          "title": "Essay Blueprint",
          "content": "A visual breakdown of a top-band A-Level essay structure."
        },
        {
          "id": "a-level-prep-101-l04-a2",
          "type": "animation",
          "title": "From Descriptive to Analytical",
          "content": "An animation showing a basic descriptive sentence transforming into a high-level analytical point."
        }
      ]
    },
    {
      "id": "a-level-prep-101-l05",
      "title": "Data & Source Evaluation Tactics",
      "type": "video",
      "duration": 11,
      "metadata": {
        "lessonImagePrompt": "Imagen 4 prompt: A magnifying glass hovering over a glowing historical document and data charts, revealing hidden neon text, photorealistic, 8k, dramatic lighting.",
        "conceptVideoPrompt": "Veo 3.1 prompt: A sleek visual of a student scanning a document with a futuristic HUD overlay that highlights bias, reliability, and validity in real-time, 4k, sci-fi aesthetic.",
        "prompts": [
          "Find a source from a past paper.",
          "Identify one potential bias or limitation in the data.",
          "Write a one-sentence evaluation of its reliability."
        ]
      },
      "learningAids": [
        {
          "id": "a-level-prep-101-l05-a1",
          "type": "image",
          "title": "The Evaluation Checklist",
          "content": "A quick-reference guide for evaluating the reliability, validity, and bias of any source."
        },
        {
          "id": "a-level-prep-101-l05-a2",
          "type": "animation",
          "title": "Spotting the Bias",
          "content": "A walkthrough showing how to quickly identify hidden biases in exam source materials."
        }
      ]
    },
    {
      "id": "a-level-prep-101-l06",
      "title": "Crushing Synoptic Questions",
      "type": "quiz",
      "duration": 12,
      "metadata": {
        "lessonImagePrompt": "Imagen 4 prompt: A glowing web connecting different subject icons, representing synoptic links, neon colors, dark background, 8k, highly detailed.",
        "conceptVideoPrompt": "Veo 3.1 prompt: An animation of two separate glowing streams of information merging into a powerful, bright beam of light, representing synoptic thinking, 4k, cinematic.",
        "examDrill": "lesson_drill"
      },
      "questions": [
        {
          "id": "a-level-prep-101-l06-q1",
          "text": "You're doing a synoptic practice paper and realize you're just guessing the connections between topics. What should you do right now?",
          "skillId": "a-level-prep-101-skill-synoptic-links-workflow",
          "options": [
            {
              "id": "a",
              "text": "Keep going and hope it makes sense by the end."
            },
            {
              "id": "b",
              "text": "Stop, do a quick review of the core themes, map out the links on paper, and then restart the question."
            },
            {
              "id": "c",
              "text": "Just memorize the mark scheme answers later."
            },
            {
              "id": "d",
              "text": "Wait until the weekend to figure it out."
            }
          ],
          "correctOptionId": "b",
          "hint": "Don't reinforce bad habits by guessing. Fix the process immediately.",
          "explanation": "Stopping to map out the connections ensures you are practicing the actual skill of synoptic thinking, rather than just guessing and hoping for the best."
        },
        {
          "id": "a-level-prep-101-l06-q2",
          "text": "You always run out of time on the big synoptic essay at the end of the paper. What's the best way to diagnose the issue?",
          "skillId": "a-level-prep-101-skill-depth-mastery-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Just take another full paper and try to write faster."
            },
            {
              "id": "b",
              "text": "Read the textbook faster."
            },
            {
              "id": "c",
              "text": "Time yourself on the planning phase vs. the writing phase to see exactly where you are getting bogged down."
            },
            {
              "id": "d",
              "text": "Do more multiple-choice questions to warm up."
            }
          ],
          "correctOptionId": "c",
          "hint": "You need data to fix a timing issue.",
          "explanation": "Pacing issues are usually caused by spending too much time planning or getting stuck on a specific paragraph. Isolating the phases helps you fix the exact bottleneck."
        },
        {
          "id": "a-level-prep-101-l06-q3",
          "text": "You want to get better at applying knowledge across different topics (synoptic transfer). What's the best 7-day plan?",
          "skillId": "a-level-prep-101-skill-analysis-transfer",
          "options": [
            {
              "id": "a",
              "text": "Read your notes without a timer until you feel ready."
            },
            {
              "id": "b",
              "text": "Study a random topic every day and never look back."
            },
            {
              "id": "c",
              "text": "Wait until the night before the exam to do past papers."
            },
            {
              "id": "d",
              "text": "Do two targeted drills on weak links, one timed mixed-topic paper, and then re-test the exact things you got wrong."
            }
          ],
          "correctOptionId": "d",
          "hint": "The best plan mixes targeted practice with realistic exam conditions.",
          "explanation": "This plan ensures you learn the skill, test it under pressure, and immediately fix any remaining gaps. It's the ultimate feedback loop."
        },
        {
          "id": "a-level-prep-101-l06-q4",
          "text": "In your last mock, you lost marks for both lack of knowledge and poor time management. Which do you fix first?",
          "skillId": "a-level-prep-101-skill-extended-response-priority",
          "options": [
            {
              "id": "a",
              "text": "Fix the time management and essay structure first, then apply that structure to your next practice sessions."
            },
            {
              "id": "b",
              "text": "Focus entirely on the one topic you didn't know."
            },
            {
              "id": "c",
              "text": "Only review the questions you got right to build confidence."
            },
            {
              "id": "d",
              "text": "Buy a new revision guide."
            }
          ],
          "correctOptionId": "a",
          "hint": "Which problem affects every single question you answer?",
          "explanation": "Process errors (like timing) compound and ruin your score even if you know the content. Fix the process first, then fill the knowledge gaps."
        },
        {
          "id": "a-level-prep-101-l06-q5",
          "text": "You keep making claims in your essays without backing them up analytically. What's the quickest fix?",
          "skillId": "a-level-prep-101-skill-synoptic-links-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore it and just try to write more words."
            },
            {
              "id": "b",
              "text": "Force yourself to use a 'This means that...' or 'Therefore...' sentence after every claim."
            },
            {
              "id": "c",
              "text": "Re-read your textbook."
            },
            {
              "id": "d",
              "text": "Wait until your teacher grades your next essay."
            }
          ],
          "correctOptionId": "b",
          "hint": "You need a mechanical rule to force analysis.",
          "explanation": "Using specific transition phrases forces your brain to explain the 'why' and 'how', which is exactly where the analysis marks are hidden."
        },
        {
          "id": "a-level-prep-101-l06-q6",
          "text": "You struggle to link Theme A and Theme B in your synoptic essays. What should you do before your next practice paper?",
          "skillId": "a-level-prep-101-skill-depth-mastery-section-application",
          "options": [
            {
              "id": "a",
              "text": "Study Theme C instead."
            },
            {
              "id": "b",
              "text": "Try to write the essay faster."
            },
            {
              "id": "c",
              "text": "Write out three specific sentences that link Theme A and Theme B, memorize them, and force yourself to use one in the next paper."
            },
            {
              "id": "d",
              "text": "Just take the paper and hope the link comes to you naturally."
            }
          ],
          "correctOptionId": "c",
          "hint": "Prepare your synoptic links in advance.",
          "explanation": "Pre-planning and practicing specific synoptic links takes the pressure off during the exam and ensures you hit the required criteria without panicking."
        }
      ],
      "interactiveActivities": [
        {
          "id": "a-level-prep-101-l06-ia1",
          "type": "matching_pairs",
          "title": "Synoptic Link Builder",
          "description": "Match the core concept to its best synoptic pair to build high-level arguments.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Look at the concept on the left.",
            "Find the concept on the right that creates the strongest synoptic link.",
            "Think about how you would write a sentence connecting them."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Economic Policy"
              },
              {
                "id": "l2",
                "label": "Biological Systems"
              },
              {
                "id": "l3",
                "label": "Historical Context"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Social Inequality Impacts"
              },
              {
                "id": "r2",
                "label": "Environmental Changes"
              },
              {
                "id": "r3",
                "label": "Literary Themes"
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
      "learningAids": [
        {
          "id": "a-level-prep-101-l06-a1",
          "type": "image",
          "title": "The Synoptic Web",
          "content": "A visual map showing how to connect disparate topics across your syllabus."
        },
        {
          "id": "a-level-prep-101-l06-a2",
          "type": "animation",
          "title": "Building the Bridge",
          "content": "Animation showing how to write a transition sentence that perfectly links two different themes."
        }
      ]
    },
    {
      "id": "a-level-prep-101-l07",
      "title": "Revision Under Time Pressure",
      "type": "video",
      "duration": 11,
      "metadata": {
        "lessonImagePrompt": "Imagen 4 prompt: A sleek, glowing digital countdown timer hovering over a neat desk with study notes, cinematic lighting, 8k, high contrast.",
        "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced montage of a clock ticking down while a student calmly and efficiently maps out key concepts on a digital tablet, 4k, energetic.",
        "prompts": [
          "Set a 15-minute timer for your next revision block.",
          "Focus entirely on one high-yield topic.",
          "Stop immediately when the timer goes off and review what you retained."
        ]
      },
      "learningAids": [
        {
          "id": "a-level-prep-101-l07-a1",
          "type": "image",
          "title": "The 24-Hour Time-Crunch Matrix",
          "content": "A visual guide on what to prioritize when you only have 24 hours left before an exam."
        },
        {
          "id": "a-level-prep-101-l07-a2",
          "type": "animation",
          "title": "Pacing Your Paper",
          "content": "An animation showing how to allocate your time per mark during the actual exam."
        }
      ]
    },
    {
      "id": "a-level-prep-101-l08",
      "title": "Hacking the Mark-Scheme",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "lessonImagePrompt": "Imagen 4 prompt: A glowing, decoded exam mark-scheme with neon highlights revealing the 'secret' points, cyberpunk style, 8k, photorealistic.",
        "conceptVideoPrompt": "Veo 3.1 prompt: An animation of an exam paper being scanned by a laser, revealing the exact keywords the examiner is looking for in glowing green text, 4k, high-tech.",
        "prompts": [
          "Find a question you recently got wrong.",
          "Look at the mark scheme and identify the exact keyword you missed.",
          "Rewrite your answer to perfectly match the examiner's criteria."
        ]
      },
      "interactiveActivities": [
        {
          "id": "a-level-prep-101-l08-ia1",
          "type": "matching_pairs",
          "title": "Crack the Examiner's Code",
          "description": "Match the command word from the exam to what the examiner actually wants you to do.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the command word (e.g., 'Evaluate').",
            "Match it to the correct action required.",
            "Keep these in mind for your next paper."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Describe"
              },
              {
                "id": "l2",
                "label": "Explain"
              },
              {
                "id": "l3",
                "label": "Evaluate"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "State the characteristics or features."
              },
              {
                "id": "r2",
                "label": "Set out purposes or reasons (use 'because')."
              },
              {
                "id": "r3",
                "label": "Judge from available evidence, showing both sides."
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
          "id": "a-level-prep-101-l08-a1",
          "type": "image",
          "title": "Command Word Cheat Sheet",
          "content": "A visual dictionary of A-Level command words and what they demand."
        },
        {
          "id": "a-level-prep-101-l08-a2",
          "type": "animation",
          "title": "Inside the Examiner's Mind",
          "content": "An animation showing how an examiner awards marks based on specific trigger words."
        }
      ]
    },
    {
      "id": "a-level-prep-101-l09",
      "title": "Integrating Coursework & Practicals",
      "type": "quiz",
      "duration": 12,
      "metadata": {
        "lessonImagePrompt": "Imagen 4 prompt: A split-screen showing a glowing science beaker on one side and a glowing essay on the other, merging in the center, photorealistic, 8k, vibrant colors.",
        "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic transition from a hands-on practical experiment to a high-tech digital report, showing the seamless link between practice and theory, 4k.",
        "examDrill": "lesson_drill"
      },
      "questions": [
        {
          "id": "a-level-prep-101-l09-q1",
          "text": "You keep losing marks on questions related to practical experiments. What's the best way to fix this before your next test?",
          "skillId": "a-level-prep-101-skill-depth-mastery-workflow",
          "options": [
            {
              "id": "a",
              "text": "Review the specific practical methodology, figure out why you lost the mark, and retest yourself on a similar question."
            },
            {
              "id": "b",
              "text": "Skip the practical questions and focus on the theory."
            },
            {
              "id": "c",
              "text": "Just look at your overall score and move on."
            },
            {
              "id": "d",
              "text": "Switch to studying a completely different topic."
            }
          ],
          "correctOptionId": "a",
          "hint": "Practical questions require specific methodological knowledge. Find the gap and test it.",
          "explanation": "Targeted feedback on methodology, followed by immediate retesting, is the best way to secure practical marks."
        },
        {
          "id": "a-level-prep-101-l09-q2",
          "text": "During a mock exam, the data analysis section from a practical experiment takes you way too long. What should you do?",
          "skillId": "a-level-prep-101-skill-analysis-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Blind guess to save time and pray."
            },
            {
              "id": "b",
              "text": "Figure out exactly which part of the data analysis (e.g., the math, the graph reading) is slowing you down, and drill that specific skill."
            },
            {
              "id": "c",
              "text": "Do more multiple-choice questions instead."
            },
            {
              "id": "d",
              "text": "Assume you'll be faster on the real day."
            }
          ],
          "correctOptionId": "b",
          "hint": "Isolate the bottleneck.",
          "explanation": "Pacing improves when you identify the exact step that causes friction and practice it until it's automatic."
        },
        {
          "id": "a-level-prep-101-l09-q3",
          "text": "You understand the theory, but you struggle to apply it to unfamiliar practical scenarios in the exam. How do you bridge this gap?",
          "skillId": "a-level-prep-101-skill-extended-response-transfer",
          "options": [
            {
              "id": "a",
              "text": "Keep re-reading your class notes."
            },
            {
              "id": "b",
              "text": "Only practice questions you've seen before."
            },
            {
              "id": "c",
              "text": "Take a theory concept and immediately practice applying it to 3 different, unfamiliar practical scenarios under timed conditions."
            },
            {
              "id": "d",
              "text": "Watch videos of the experiments without taking notes."
            }
          ],
          "correctOptionId": "c",
          "hint": "You need to practice the skill of 'transferring' knowledge.",
          "explanation": "Applying known theory to unknown scenarios is a skill that must be drilled under exam conditions."
        },
        {
          "id": "a-level-prep-101-l09-q4",
          "text": "When reviewing a past paper with a heavy practical section, what should you prioritize fixing first?",
          "skillId": "a-level-prep-101-skill-synoptic-links-priority",
          "options": [
            {
              "id": "a",
              "text": "Make sure your spelling is perfect."
            },
            {
              "id": "b",
              "text": "Ignore the timing and just focus on getting the right answer eventually."
            },
            {
              "id": "c",
              "text": "Rewrite your notes neatly."
            },
            {
              "id": "d",
              "text": "Fix recurring errors in how you interpret data or structure your evaluations, as these affect multiple questions."
            }
          ],
          "correctOptionId": "d",
          "hint": "Fix the root cause that costs you the most marks.",
          "explanation": "Process errors in data interpretation will ruin your score across the whole section. Fix the process first."
        },
        {
          "id": "a-level-prep-101-l09-q5",
          "text": "You state the result of an experiment in your essay, but you don't explain *why* it matters. What's the fix?",
          "skillId": "a-level-prep-101-skill-depth-mastery-section-application",
          "options": [
            {
              "id": "a",
              "text": "Force yourself to add a 'This demonstrates that...' sentence after stating any result."
            },
            {
              "id": "b",
              "text": "Just write more results to compensate."
            },
            {
              "id": "c",
              "text": "Re-read the textbook."
            },
            {
              "id": "d",
              "text": "Wait for your teacher to correct it."
            }
          ],
          "correctOptionId": "a",
          "hint": "You need a rule that forces you to analyze the data.",
          "explanation": "Using specific analytical phrases forces you to explain the significance of the practical data, securing the higher-level marks."
        },
        {
          "id": "a-level-prep-101-l09-q6",
          "text": "You struggle to link your coursework findings to the broader theoretical themes of the syllabus. What's your plan?",
          "skillId": "a-level-prep-101-skill-analysis-section-application",
          "options": [
            {
              "id": "a",
              "text": "Keep them separate in your mind."
            },
            {
              "id": "b",
              "text": "Practice writing paragraphs that explicitly link one coursework finding to one major syllabus theme, and track your progress."
            },
            {
              "id": "c",
              "text": "Try to write faster."
            },
            {
              "id": "d",
              "text": "Just hope the exam question doesn't ask for links."
            }
          ],
          "correctOptionId": "b",
          "hint": "Practice the specific skill of linking.",
          "explanation": "Deliberately practicing the connection between practical work and theory makes it automatic during the exam."
        }
      ],
      "interactiveActivities": [
        {
          "id": "a-level-prep-101-l09-ia1",
          "type": "matching_pairs",
          "title": "Theory to Practice Match",
          "description": "Match the theoretical concept to the practical experiment that proves it.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Look at the theory on the left.",
            "Match it to the practical application on the right.",
            "Think about how you would write about this connection."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Enzyme Denaturation"
              },
              {
                "id": "l2",
                "label": "Market Failure"
              },
              {
                "id": "l3",
                "label": "Source Reliability"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Temperature/pH Lab Experiment"
              },
              {
                "id": "r2",
                "label": "Case Study on Pollution Taxes"
              },
              {
                "id": "r3",
                "label": "Cross-referencing Historical Diaries"
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
      "learningAids": [
        {
          "id": "a-level-prep-101-l09-a1",
          "type": "image",
          "title": "The Practical-Theory Bridge",
          "content": "A visual diagram showing how to integrate lab results or case studies into theoretical essays."
        },
        {
          "id": "a-level-prep-101-l09-a2",
          "type": "animation",
          "title": "Evaluating Methodology",
          "content": "An animation showing how to quickly spot flaws in an experiment's methodology for evaluation marks."
        }
      ]
    },
    {
      "id": "a-level-prep-101-l10",
      "title": "Targeted Depth Mastery",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "lessonImagePrompt": "Imagen 4 prompt: A glowing sniper scope focusing on a specific weak point in a digital wall of text, neon green and black, 8k, highly detailed.",
        "conceptVideoPrompt": "Veo 3.1 prompt: An animation of a student identifying a cracked, glowing brick in a wall of knowledge and replacing it with a solid, reinforced gold brick, 4k, satisfying motion.",
        "prompts": [
          "Identify your absolute weakest topic right now.",
          "Spend 15 minutes doing a 'deep dive' on just that topic.",
          "Test yourself with one high-level question on that topic."
        ]
      },
      "interactiveActivities": [
        {
          "id": "a-level-prep-101-l10-ia1",
          "type": "drag_and_drop",
          "title": "Build a Remediation Plan",
          "description": "Drag the steps into the correct order to fix a major knowledge gap.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the steps for fixing a weak topic.",
            "Arrange them in the most logical, effective order.",
            "Use this process next time you bomb a practice question."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Step 1: Isolate"
              },
              {
                "id": "execute",
                "label": "Step 2: Re-learn"
              },
              {
                "id": "reflect",
                "label": "Step 3: Verify"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Identify the exact sub-topic or skill you are failing at.",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use active recall and targeted resources to understand the concept deeply.",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Test yourself on a new, unseen question under timed conditions.",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "a-level-prep-101-l10-a1",
          "type": "image",
          "title": "The Remediation Loop",
          "content": "A flowchart showing the fastest way to turn a weakness into a strength."
        },
        {
          "id": "a-level-prep-101-l10-a2",
          "type": "animation",
          "title": "Deep vs. Shallow Revision",
          "content": "An animation contrasting a student passively reading (shallow) vs. actively testing and fixing gaps (deep)."
        }
      ]
    },
    {
      "id": "a-level-prep-101-l11",
      "title": "Timed Analysis Sprints",
      "type": "video",
      "duration": 11,
      "metadata": {
        "lessonImagePrompt": "Imagen 4 prompt: A futuristic runner on a glowing digital track made of data and text, representing a timed sprint, cinematic lighting, 8k, dynamic angle.",
        "conceptVideoPrompt": "Veo 3.1 prompt: A high-energy animation of a student racing against a glowing digital clock, rapidly connecting analytical dots on a holographic screen, 4k.",
        "prompts": [
          "Pick a 25-mark essay question.",
          "Set a timer for exactly 5 minutes.",
          "Sprint to create a full, bullet-pointed essay plan before the timer ends."
        ]
      },
      "learningAids": [
        {
          "id": "a-level-prep-101-l11-a1",
          "type": "image",
          "title": "The Sprint Framework",
          "content": "A visual guide on how to break a 2-hour exam into manageable 15-minute sprints."
        },
        {
          "id": "a-level-prep-101-l11-a2",
          "type": "animation",
          "title": "Beating the Clock",
          "content": "An animation showing how to quickly outline an essay in 5 minutes before writing."
        }
      ]
    },
    {
      "id": "a-level-prep-101-l12",
      "title": "Mixed-Section Decision Drills",
      "type": "quiz",
      "duration": 12,
      "metadata": {
        "lessonImagePrompt": "Imagen 4 prompt: A glowing crossroads sign with different exam sections (Essays, Data, Synoptic) pointing in different directions, neon lighting, 8k, cyberpunk.",
        "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced POV animation of navigating a high-tech maze, making split-second decisions at each turn based on different question types, 4k.",
        "examDrill": "lesson_drill"
      },
      "questions": [
        {
          "id": "a-level-prep-101-l12-q1",
          "text": "You keep messing up the transition between short-answer questions and long essays. What should you do before your next practice paper?",
          "skillId": "a-level-prep-101-skill-depth-mastery-workflow",
          "options": [
            {
              "id": "a",
              "text": "Just do more full papers and hope you get used to it."
            },
            {
              "id": "b",
              "text": "Only practice essays from now on."
            },
            {
              "id": "c",
              "text": "Ignore the problem and focus on getting the short answers perfect."
            },
            {
              "id": "d",
              "text": "Practice the specific transition: do 3 short questions, immediately plan 1 essay, and repeat this drill."
            }
          ],
          "correctOptionId": "d",
          "hint": "Drill the exact moment of friction.",
          "explanation": "Context-switching is a specific skill. Drilling the transition between question types builds the mental agility needed for the real exam."
        },
        {
          "id": "a-level-prep-101-l12-q2",
          "text": "You start strong on a mixed-section paper, but your pace drops massively in the second half. What's the best fix?",
          "skillId": "a-level-prep-101-skill-analysis-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Set strict time checkpoints for each section and practice cutting your losses and moving on if you get stuck."
            },
            {
              "id": "b",
              "text": "Spend more time on the early questions to guarantee those marks."
            },
            {
              "id": "c",
              "text": "Just try to write faster at the end."
            },
            {
              "id": "d",
              "text": "Take a long break in the middle of the exam."
            }
          ],
          "correctOptionId": "a",
          "hint": "You need a system to prevent getting bogged down.",
          "explanation": "Late-paper fatigue is often caused by spending too much time on hard questions earlier. Strict checkpoints and a 'cut-loss' rule keep your pace stable."
        },
        {
          "id": "a-level-prep-101-l12-q3",
          "text": "What is the best way to ensure you can handle the unpredictability of a real A-Level exam?",
          "skillId": "a-level-prep-101-skill-extended-response-transfer",
          "options": [
            {
              "id": "a",
              "text": "Only study one topic per day."
            },
            {
              "id": "b",
              "text": "Mix up your practice: do sets that randomly combine different topics and question types under timed conditions."
            },
            {
              "id": "c",
              "text": "Always do practice questions in the exact order of the textbook."
            },
            {
              "id": "d",
              "text": "Wait until the final week to do mixed papers."
            }
          ],
          "correctOptionId": "b",
          "hint": "Train how you fight.",
          "explanation": "Interleaved practice (mixing topics and question types) forces your brain to constantly retrieve different information, which perfectly simulates the real exam."
        },
        {
          "id": "a-level-prep-101-l12-q4",
          "text": "After a mixed-section drill, you realize you lost marks on both content knowledge and essay structure. What do you fix first?",
          "skillId": "a-level-prep-101-skill-synoptic-links-priority",
          "options": [
            {
              "id": "a",
              "text": "Start by reviewing the topics you already know well."
            },
            {
              "id": "b",
              "text": "Rewrite your notes."
            },
            {
              "id": "c",
              "text": "Fix the essay structure first, because that framework will help you score marks even on topics you are weak on."
            },
            {
              "id": "d",
              "text": "Ignore the structure and just memorize more facts."
            }
          ],
          "correctOptionId": "c",
          "hint": "Which fix gives you a structural advantage across the whole paper?",
          "explanation": "A strong structural framework can often salvage marks even if your content knowledge is slightly lacking. Fix the process first."
        },
        {
          "id": "a-level-prep-101-l12-q5",
          "text": "You keep making statements in your essays without linking them back to the main question. What's the immediate fix?",
          "skillId": "a-level-prep-101-skill-depth-mastery-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore it and just write more."
            },
            {
              "id": "b",
              "text": "Re-read the question at the end of the exam."
            },
            {
              "id": "c",
              "text": "Wait until your next full mock to try a new strategy."
            },
            {
              "id": "d",
              "text": "Force yourself to write a concluding sentence for every paragraph that explicitly uses the words from the question prompt."
            }
          ],
          "correctOptionId": "d",
          "hint": "You need a mechanical rule to force relevance.",
          "explanation": "Explicitly using the words from the prompt in your mini-conclusions guarantees that your analysis remains focused and relevant."
        },
        {
          "id": "a-level-prep-101-l12-q6",
          "text": "You struggle to bring in synoptic links when switching between different sections of the paper. What's your plan?",
          "skillId": "a-level-prep-101-skill-analysis-section-application",
          "options": [
            {
              "id": "a",
              "text": "Create a 'synoptic checklist' to review during your 5-minute planning phase, and practice using it in mixed drills."
            },
            {
              "id": "b",
              "text": "Just hope you remember them on the day."
            },
            {
              "id": "c",
              "text": "Write faster so you have time to think at the end."
            },
            {
              "id": "d",
              "text": "Only use synoptic links if the question explicitly asks for them."
            }
          ],
          "correctOptionId": "a",
          "hint": "Systematize your thinking process.",
          "explanation": "A pre-planned checklist ensures you actively look for synoptic opportunities, rather than relying on spontaneous inspiration."
        }
      ],
      "interactiveActivities": [
        {
          "id": "a-level-prep-101-l12-ia1",
          "type": "matching_pairs",
          "title": "Context Switching Drill",
          "description": "Match the question type to the optimal mental strategy.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Look at the question type on the left.",
            "Match it to the best approach on the right.",
            "Use these strategies to switch gears quickly during an exam."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Multiple Choice (1 mark)"
              },
              {
                "id": "l2",
                "label": "Data Analysis (4 marks)"
              },
              {
                "id": "l3",
                "label": "Synoptic Essay (25 marks)"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Process of elimination, max 1 minute."
              },
              {
                "id": "r2",
                "label": "Identify trend, quote data, explain anomaly."
              },
              {
                "id": "r3",
                "label": "5 min plan, PEEL paragraphs, evaluate."
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
      "learningAids": [
        {
          "id": "a-level-prep-101-l12-a1",
          "type": "image",
          "title": "The Context Switcher",
          "content": "A visual guide on how to mentally reset between different sections of an exam."
        },
        {
          "id": "a-level-prep-101-l12-a2",
          "type": "animation",
          "title": "Navigating the Maze",
          "content": "An animation showing a student smoothly transitioning from a math-heavy question to a long-form essay."
        }
      ]
    },
    {
      "id": "a-level-prep-101-l13",
      "title": "Adaptive Retry & Transfer Checks",
      "type": "video",
      "duration": 11,
      "metadata": {
        "lessonImagePrompt": "Imagen 4 prompt: A glowing digital loop symbol representing retry and transfer, with sparks of electricity, dark background, 8k, photorealistic.",
        "conceptVideoPrompt": "Veo 3.1 prompt: An animation of a student failing a digital puzzle, the puzzle resetting, and the student instantly solving it with a new glowing strategy, 4k, smooth loop.",
        "prompts": [
          "Take a question you failed last week.",
          "Attempt it again right now without looking at the answer.",
          "Did you transfer the new skill successfully?"
        ]
      },
      "learningAids": [
        {
          "id": "a-level-prep-101-l13-a1",
          "type": "image",
          "title": "The Retry Loop",
          "content": "A visual diagram showing how to effectively retry a failed question to guarantee learning."
        },
        {
          "id": "a-level-prep-101-l13-a2",
          "type": "animation",
          "title": "Transferring Skills",
          "content": "An animation showing how a skill learned in one topic can be 'transferred' to solve a problem in a completely different topic."
        }
      ]
    },
    {
      "id": "a-level-prep-101-l14",
      "title": "Readiness Stability Checkpoint",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "lessonImagePrompt": "Imagen 4 prompt: A glowing green checkmark over a futuristic shield, representing exam readiness and stability, photorealistic, 8k, cinematic lighting.",
        "conceptVideoPrompt": "Veo 3.1 prompt: A sleek animation of a structural stress test on a glowing bridge of knowledge, showing it holding strong under pressure, 4k, high-tech.",
        "prompts": [
          "Review your last 3 practice scores. Are they stable or fluctuating?",
          "Identify the one variable (e.g., sleep, timing, specific topic) causing the fluctuation.",
          "Create a rule to stabilize that variable for your next mock."
        ]
      },
      "interactiveActivities": [
        {
          "id": "a-level-prep-101-l14-ia1",
          "type": "drag_and_drop",
          "title": "Stress-Test Your Exam Loadout",
          "description": "Map the pre-exam checks to ensure you are completely stable and ready.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the readiness checks.",
            "Categorize them into Content, Strategy, or Mindset.",
            "Use this checklist before your real exam."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Content Readiness"
              },
              {
                "id": "execute",
                "label": "Strategy Readiness"
              },
              {
                "id": "reflect",
                "label": "Mindset Readiness"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "I can recall the core frameworks for all major topics.",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "I have a strict time-per-mark rule that I have practiced.",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "I have a plan for what to do if I panic or go blank.",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "a-level-prep-101-l14-a1",
          "type": "image",
          "title": "The Stability Checklist",
          "content": "A final checklist to ensure you are consistently hitting your target grade before the real exam."
        },
        {
          "id": "a-level-prep-101-l14-a2",
          "type": "animation",
          "title": "Handling the Curveball",
          "content": "An animation showing a student calmly applying their core strategy when faced with a weird, unexpected exam question."
        }
      ]
    },
    {
      "id": "a-level-prep-101-l15",
      "title": "Full Mock & Gap Closure",
      "type": "quiz",
      "duration": 20,
      "metadata": {
        "lessonImagePrompt": "Imagen 4 prompt: A dramatic, cinematic shot of a student sitting at a desk in a massive, futuristic exam hall, glowing light from the paper, 8k, highly detailed.",
        "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic sequence showing a student completing a massive holographic exam, followed by a glowing scan that instantly patches any remaining knowledge gaps, 4k.",
        "examDrill": "full_mock"
      },
      "questions": [
        {
          "id": "a-level-prep-101-l15-q1",
          "text": "You're reviewing your full mock exam and notice you lost marks early on because you were rushing and guessing. What's the fix?",
          "skillId": "a-level-prep-101-skill-depth-mastery-workflow",
          "options": [
            {
              "id": "a",
              "text": "Keep the same pace and hope you are more accurate on the real day."
            },
            {
              "id": "b",
              "text": "Just memorize the answers you got wrong."
            },
            {
              "id": "c",
              "text": "Implement a '10-second verification' rule for early questions to ensure you aren't making silly mistakes before moving on."
            },
            {
              "id": "d",
              "text": "Wait until the night before the exam to review it."
            }
          ],
          "correctOptionId": "c",
          "hint": "You need a system to catch careless errors.",
          "explanation": "A quick, structured verification step prevents careless early mistakes from ruining your baseline score."
        },
        {
          "id": "a-level-prep-101-l15-q2",
          "text": "Your pacing completely fell apart during the full mock. What is the first step to fixing this?",
          "skillId": "a-level-prep-101-skill-analysis-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Take another full mock immediately."
            },
            {
              "id": "b",
              "text": "Just try to write faster next time."
            },
            {
              "id": "c",
              "text": "Do more questions without timing yourself."
            },
            {
              "id": "d",
              "text": "Look at your paper and pinpoint exactly which question type caused the bottleneck, then redesign your time allocation."
            }
          ],
          "correctOptionId": "d",
          "hint": "Find the specific bottleneck.",
          "explanation": "Pacing issues are usually caused by getting stuck on one specific type of question. Identify it and set strict time limits for it."
        },
        {
          "id": "a-level-prep-101-l15-q3",
          "text": "You want to make sure the mistakes you made in this mock don't happen in the real exam. What's the best 7-day plan?",
          "skillId": "a-level-prep-101-skill-extended-response-transfer",
          "options": [
            {
              "id": "a",
              "text": "Do two targeted drills on your weak spots, one timed section simulation, and then re-test the exact skills you failed."
            },
            {
              "id": "b",
              "text": "Just read your notes until you feel confident."
            },
            {
              "id": "c",
              "text": "Study random topics every day."
            },
            {
              "id": "d",
              "text": "Wait until the day before the exam to look at your mock again."
            }
          ],
          "correctOptionId": "a",
          "hint": "Combine targeted fixing with realistic testing.",
          "explanation": "This plan ensures you learn the fix, practice it under pressure, and verify that the gap is actually closed."
        },
        {
          "id": "a-level-prep-101-l15-q4",
          "text": "In your mock, you missed some content facts, but you also completely messed up the structure of two 25-mark essays. What do you fix first?",
          "skillId": "a-level-prep-101-skill-synoptic-links-priority",
          "options": [
            {
              "id": "a",
              "text": "Focus on the obscure facts you missed."
            },
            {
              "id": "b",
              "text": "Prioritize fixing the essay structure, because that framework will secure marks across multiple questions."
            },
            {
              "id": "c",
              "text": "Only review the questions you got right."
            },
            {
              "id": "d",
              "text": "Buy a new textbook."
            }
          ],
          "correctOptionId": "b",
          "hint": "Fix the problem that costs you the most marks.",
          "explanation": "Structural errors in high-mark questions destroy your grade. Fixing the process yields a much higher return on investment than memorizing a few facts."
        },
        {
          "id": "a-level-prep-101-l15-q5",
          "text": "Your mock feedback says your essays are 'too descriptive'. What is the strongest immediate correction?",
          "skillId": "a-level-prep-101-skill-depth-mastery-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore it and just write longer paragraphs."
            },
            {
              "id": "b",
              "text": "Re-read your notes."
            },
            {
              "id": "c",
              "text": "Force yourself to use 'because... therefore...' reasoning after every claim you make."
            },
            {
              "id": "d",
              "text": "Wait until the real exam to try analyzing."
            }
          ],
          "correctOptionId": "c",
          "hint": "You need a rule that forces analysis.",
          "explanation": "Using explicit analytical frameworks forces you to explain the significance of your points, instantly elevating your writing."
        },
        {
          "id": "a-level-prep-101-l15-q6",
          "text": "You forgot to include synoptic links in your mock. What should you do before your next practice?",
          "skillId": "a-level-prep-101-skill-analysis-section-application",
          "options": [
            {
              "id": "a",
              "text": "Study a different topic."
            },
            {
              "id": "b",
              "text": "Try to write faster."
            },
            {
              "id": "c",
              "text": "Just take another paper and hope you remember."
            },
            {
              "id": "d",
              "text": "Practice writing specific sentences that link two themes, track your success, and force yourself to use them."
            }
          ],
          "correctOptionId": "d",
          "hint": "Make the skill automatic through targeted practice.",
          "explanation": "Pre-planning and drilling synoptic links ensures you don't forget them when under pressure."
        },
        {
          "id": "a-level-prep-101-l15-q7",
          "text": "You got your mock back and you have mistakes everywhere. How do you triage your revision?",
          "skillId": "a-level-prep-101-skill-mock-triage",
          "options": [
            {
              "id": "a",
              "text": "Group your mistakes into 'Content', 'Strategy', and 'Timing', then fix the ones that will gain you the most marks first."
            },
            {
              "id": "b",
              "text": "Just start from question 1 and review everything."
            },
            {
              "id": "c",
              "text": "Take another mock immediately without reviewing."
            },
            {
              "id": "d",
              "text": "Only study the topics you like."
            }
          ],
          "correctOptionId": "a",
          "hint": "Organize the chaos to find the highest leverage points.",
          "explanation": "Categorizing errors helps you identify systemic issues (like timing) that, when fixed, will improve your score across the entire paper."
        },
        {
          "id": "a-level-prep-101-l15-q8",
          "text": "You finished Section A early but ran out of time on Section B. What's the pacing fix?",
          "skillId": "a-level-prep-101-skill-section-pacing",
          "options": [
            {
              "id": "a",
              "text": "Use the exact same time limit for every section."
            },
            {
              "id": "b",
              "text": "Set specific time checkpoints based on the marks available for each section, and practice transitioning between them."
            },
            {
              "id": "c",
              "text": "Just try to rush through Section A even faster next time."
            },
            {
              "id": "d",
              "text": "Ignore the clock and just focus on quality."
            }
          ],
          "correctOptionId": "b",
          "hint": "Pacing must be proportional to the marks available.",
          "explanation": "Different sections require different time allocations. Setting specific checkpoints ensures you don't steal time from high-value sections."
        },
        {
          "id": "a-level-prep-101-l15-q9",
          "text": "You have 5 minutes left at the end of the exam. What is the most reliable way to check your work?",
          "skillId": "a-level-prep-101-skill-quality-control",
          "options": [
            {
              "id": "a",
              "text": "Randomly change a few multiple-choice answers."
            },
            {
              "id": "b",
              "text": "Close the paper and rest."
            },
            {
              "id": "c",
              "text": "Do a targeted check of the questions you flagged as difficult, and quickly scan for your known common errors (e.g., missing units)."
            },
            {
              "id": "d",
              "text": "Try to re-read the entire paper from the beginning."
            }
          ],
          "correctOptionId": "c",
          "hint": "Be strategic with your final minutes.",
          "explanation": "A targeted check of known weak spots and flagged questions is much more likely to catch errors than a panicked skim of the whole paper."
        },
        {
          "id": "a-level-prep-101-l15-q10",
          "text": "After reviewing this full mock, what is the best plan for the final week before the real exam?",
          "skillId": "a-level-prep-101-skill-remediation-loop",
          "options": [
            {
              "id": "a",
              "text": "Do a full mock every single day."
            },
            {
              "id": "b",
              "text": "Only study the easy stuff to build confidence."
            },
            {
              "id": "c",
              "text": "Stop doing timed practice and just read notes."
            },
            {
              "id": "d",
              "text": "Run a targeted sprint on your top 2 weak areas, do a pacing drill, and crush one final timed check to prove you've leveled up."
            }
          ],
          "correctOptionId": "d",
          "hint": "Balance targeted fixing with final verification.",
          "explanation": "This plan prevents burnout while ensuring you fix your biggest weaknesses and verify your readiness under timed conditions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "a-level-prep-101-l15-ia1",
          "type": "sorting_buckets",
          "title": "Triage Your Mock Errors",
          "description": "Sort your mock exam mistakes into the correct category so you know exactly how to fix them.",
          "estimatedMinutes": 10,
          "difficultyLevel": "adaptive",
          "instructions": [
            "Look at the common exam mistake.",
            "Sort it into Content (Knowledge), Strategy (Analysis/Structure), or Timing.",
            "Use this system to triage your own mock papers."
          ],
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "Content Gap (Knowledge)"
              },
              {
                "id": "strategy",
                "label": "Strategy Gap (Structure/Analysis)"
              },
              {
                "id": "timing",
                "label": "Timing Gap (Pacing)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Forgot the definition of a key term.",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Wrote a great point but forgot to link it back to the question.",
                "correctBucketId": "strategy"
              },
              {
                "id": "i3",
                "label": "Only wrote two sentences for the final 25-mark essay.",
                "correctBucketId": "timing"
              },
              {
                "id": "i4",
                "label": "Didn't evaluate both sides of the argument.",
                "correctBucketId": "strategy"
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
      "learningAids": [
        {
          "id": "a-level-prep-101-l15-a1",
          "type": "image",
          "title": "The Post-Mock Autopsy",
          "content": "A visual guide on how to break down your mock results and build a final revision plan."
        },
        {
          "id": "a-level-prep-101-l15-a2",
          "type": "animation",
          "title": "Closing the Gap",
          "content": "An animation showing a student identifying a weak spot from a mock, drilling it, and successfully answering it in the real exam."
        }
      ]
    }
  ]
};
