import type { LearningModule } from "@/lib/modules/types";

export const SatPrep101Module: LearningModule = {
  id: "sat-prep-101",
  title: "SAT Prep Foundations",
  description: "Build evidence-based reading, writing, and math fluency for the SAT.",
  subject: "Exam Prep",
  tags: ["exam-prep", "assessment", "advanced"],
  minAge: 14,
  maxAge: 19,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Build structured SAT readiness workflows",
    "Improve speed and accuracy under timed constraints",
    "Use analytics-based revision loops to close weak areas"
  ],
  quizBlueprint: {
    frequency: "weekly_assessment",
    questionsPerCheck: 20,
    totalQuestions: 20,
    timeLimitMinutes: 25,
    questionTypes: [{ type: "mcq_single", percentage: 100, pointsEach: 1, bloomsLevels: [1, 2, 3, 4] }],
    difficultyDistribution: { easy: 6, medium: 10, hard: 4 },
    feedbackMode: "after_submit",
    adaptive: false,
    masteryThreshold: 0.8
  },
  lessons: [
    {
      id: "sat-prep-101-l01",
      title: "SAT: SAT Structure and Strategy",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "sat-prep-101-l01-a1",
          "type": "image",
          "title": "Reading Snapshot",
          "content": "Visual anchor for SAT: SAT Structure and Strategy with emphasis on reading within practice set planning."
        },
        {
          "id": "sat-prep-101-l01-a2",
          "type": "animation",
          "title": "Writing Walkthrough",
          "content": "Stepwise walkthrough for SAT: SAT Structure and Strategy showing writing decisions and strategy log checks."
        }
      ]
    },
    {
      id: "sat-prep-101-l02",
      title: "SAT: Reading Evidence Skills",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one reading decision rule in SAT: Reading Evidence Skills.",
          "Apply it in one passage set and show how it improves evidence and language precision.",
          "Set one next-step target for writing before your next SAT readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "sat-prep-101-l02-ia1",
          "type": "drag_and_drop",
          "title": "SAT: Reading Evidence Skills Decision-Phase Mapping",
          "description": "Map each decision cue to Plan, Execute, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Assign each decision cue to the best phase.",
            "Check all mappings.",
            "Capture one improvement target."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Blueprint"
              },
              {
                "id": "execute",
                "label": "Evidence Solve"
              },
              {
                "id": "reflect",
                "label": "Error Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Preview command words and time checkpoints before each SAT section",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Annotate evidence lines and algebra constraints before locking an answer",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Tag misses by reading, writing, or math pattern in the error log",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "sat-prep-101-l02-a1",
          "type": "image",
          "title": "Reading Snapshot",
          "content": "Visual anchor for SAT: Reading Evidence Skills with emphasis on reading within passage set planning."
        },
        {
          "id": "sat-prep-101-l02-a2",
          "type": "animation",
          "title": "Writing Walkthrough",
          "content": "Stepwise walkthrough for SAT: Reading Evidence Skills showing writing decisions and annotation map checks."
        }
      ]
    },
    {
      id: "sat-prep-101-l03",
      title: "SAT: Writing and Language Rules",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "sat-prep-101-l03-q1",
          "text": "SAT coaching notes show repeated writing misses in SAT: Writing and Language Rules. What should the learner do before the next passage set?",
          "skillId": "sat-prep-101-skill-writing-workflow",
          "options": [
            {
              "id": "a",
              "text": "Jump to harder content before confirming the root cause."
            },
            {
              "id": "b",
              "text": "Track only final score and ignore process notes."
            },
            {
              "id": "c",
              "text": "Rebuild the solve workflow on two representative passage set items, then retest with the same constraints."
            },
            {
              "id": "d",
              "text": "Switch strands even though writing is still the top weakness."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that improves process quality, not just volume.",
          "explanation": "When writing is unstable, workflow repair plus immediate retest creates the fastest reliable gains."
        },
        {
          "id": "sat-prep-101-l03-q2",
          "text": "In SAT: Writing and Language Rules, pace drops late even when early accuracy is strong. Which move best addresses this SAT pattern?",
          "skillId": "sat-prep-101-skill-reading-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Spend more time on every item to avoid mistakes."
            },
            {
              "id": "b",
              "text": "Memorize answer keys without tracking timing behavior."
            },
            {
              "id": "c",
              "text": "Use random breaks with no fixed transition points."
            },
            {
              "id": "d",
              "text": "Introduce phase checkpoints and a cut-loss rule around high-friction reading items."
            }
          ],
          "correctOptionId": "d",
          "hint": "Look for a solution tied to timing behavior, not memory.",
          "explanation": "Late-section drift usually comes from unmanaged friction points, not lack of content knowledge."
        },
        {
          "id": "sat-prep-101-l03-q3",
          "text": "Which one-week plan best improves algebra transfer for SAT readiness in SAT?",
          "skillId": "sat-prep-101-skill-algebra-transfer",
          "options": [
            {
              "id": "a",
              "text": "Alternate mixed-difficulty sets with targeted remediation, then re-test the same algebra objective under timing constraints."
            },
            {
              "id": "b",
              "text": "Use only untimed warmups and avoid mixed sets."
            },
            {
              "id": "c",
              "text": "Choose random topics daily without a remediation queue."
            },
            {
              "id": "d",
              "text": "Delay all review tasks until the final week."
            }
          ],
          "correctOptionId": "a",
          "hint": "The strongest plan combines correction and timed transfer.",
          "explanation": "Transfer improves when correction cycles are followed by fresh timed retrieval of the same algebra target."
        },
        {
          "id": "sat-prep-101-l03-q4",
          "text": "After a SAT: Writing and Language Rules drill, which remediation should be prioritized first for score impact in SAT?",
          "skillId": "sat-prep-101-skill-timing-priority",
          "options": [
            {
              "id": "a",
              "text": "Start with already-mastered tasks to build comfort."
            },
            {
              "id": "b",
              "text": "Fix repeated timing breakdowns first because they scale across many items in the same run."
            },
            {
              "id": "c",
              "text": "Rewrite notes without testing changes in a timed set."
            },
            {
              "id": "d",
              "text": "Ignore pacing because content accuracy matters more."
            }
          ],
          "correctOptionId": "b",
          "hint": "Choose the fix with the widest downstream effect.",
          "explanation": "High-frequency process breakdowns usually produce the largest immediate score delta when corrected first."
        },
        {
          "id": "sat-prep-101-l03-q5",
          "text": "In SAT Reading and Writing module, evidence-line mismatch appears during SAT: Writing and Language Rules. What is the strongest immediate correction?",
          "skillId": "sat-prep-101-skill-writing-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore Reading and Writing module diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Underline claim + cited line before selecting an answer choice."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes evidence-line mismatch.",
          "explanation": "Immediate correction inside Reading and Writing module improves transfer to the next timed passage set."
        },
        {
          "id": "sat-prep-101-l03-q6",
          "text": "During SAT Math module, constraint parsing miss repeats in SAT: Writing and Language Rules. Which plan should be applied before the next retest?",
          "skillId": "sat-prep-101-skill-reading-section-application",
          "options": [
            {
              "id": "a",
              "text": "Switch to new content before validating the fix."
            },
            {
              "id": "b",
              "text": "Increase speed without updating process controls."
            },
            {
              "id": "c",
              "text": "Retake the section with no checkpoint changes."
            },
            {
              "id": "d",
              "text": "Rewrite variable constraints, then validate with one substitution check. Track outcomes in an evidence-to-equation journal and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in evidence-to-equation journal makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "sat-prep-101-l03-ia1",
          "type": "matching_pairs",
          "title": "SAT: Writing and Language Rules Correction Alignment",
          "description": "Align each recurring signal with the strongest correction action for evidence and language precision.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Align each pair.",
            "Check your result.",
            "Apply one correction in the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Evidence question missed because support line was not located"
              },
              {
                "id": "l2",
                "label": "Grammar boundary mistake repeats in writing sets"
              },
              {
                "id": "l3",
                "label": "Algebra item solved correctly untimed but missed in sprint mode"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Underline claim + best support line before evaluating answer choices"
              },
              {
                "id": "r2",
                "label": "Run a punctuation boundary checklist before finalizing the sentence"
              },
              {
                "id": "r3",
                "label": "Practice a 2-step SAT math setup routine with strict time caps"
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
      quizBlueprint: {
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
      metadata: {
        examDrill: "lesson_drill"
      },
      learningAids: [
        {
          "id": "sat-prep-101-l03-a1",
          "type": "image",
          "title": "Writing Snapshot",
          "content": "Visual anchor for SAT: Writing and Language Rules with emphasis on writing within passage set planning."
        },
        {
          "id": "sat-prep-101-l03-a2",
          "type": "animation",
          "title": "Reading Walkthrough",
          "content": "Stepwise walkthrough for SAT: Writing and Language Rules showing reading decisions and annotation map checks."
        }
      ]
    },
    {
      id: "sat-prep-101-l04",
      title: "SAT: Algebra and Data Essentials",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one algebra decision rule in SAT: Algebra and Data Essentials.",
          "Apply it in one problem set and show how it improves method and accuracy precision.",
          "Set one next-step target for reading before your next SAT readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "sat-prep-101-l04-ia1",
          "type": "drag_and_drop",
          "title": "SAT: Algebra and Data Essentials Decision-Phase Mapping",
          "description": "Map each decision cue to Plan, Execute, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Assign each decision cue to the best phase.",
            "Check all mappings.",
            "Capture one improvement target."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Blueprint"
              },
              {
                "id": "execute",
                "label": "Evidence Solve"
              },
              {
                "id": "reflect",
                "label": "Error Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Preview command words and time checkpoints before each SAT section",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Annotate evidence lines and algebra constraints before locking an answer",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Tag misses by reading, writing, or math pattern in the error log",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "sat-prep-101-l04-a1",
          "type": "image",
          "title": "Algebra Snapshot",
          "content": "Visual anchor for SAT: Algebra and Data Essentials with emphasis on algebra within problem set planning."
        },
        {
          "id": "sat-prep-101-l04-a2",
          "type": "animation",
          "title": "Reading Walkthrough",
          "content": "Stepwise walkthrough for SAT: Algebra and Data Essentials showing reading decisions and setup sheet checks."
        }
      ]
    },
    {
      id: "sat-prep-101-l05",
      title: "SAT: Advanced Math Problem Solving",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "sat-prep-101-l05-a1",
          "type": "image",
          "title": "Algebra Snapshot",
          "content": "Visual anchor for SAT: Advanced Math Problem Solving with emphasis on algebra within problem set planning."
        },
        {
          "id": "sat-prep-101-l05-a2",
          "type": "animation",
          "title": "Reading Walkthrough",
          "content": "Stepwise walkthrough for SAT: Advanced Math Problem Solving showing reading decisions and setup sheet checks."
        }
      ]
    },
    {
      id: "sat-prep-101-l06",
      title: "SAT: Timing and Pacing Practice",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "sat-prep-101-l06-q1",
          "text": "During SAT: Timing and Pacing Practice, early guesses are causing timing losses. Which intervention should happen first?",
          "skillId": "sat-prep-101-skill-timing-workflow",
          "options": [
            {
              "id": "a",
              "text": "Keep the same pace and hope accuracy normalizes later."
            },
            {
              "id": "b",
              "text": "Use a short verification pass and log decision triggers in a checkpoint log before restarting the drill."
            },
            {
              "id": "c",
              "text": "Memorize answer patterns instead of checking reasoning."
            },
            {
              "id": "d",
              "text": "Delay all correction until the weekend review session."
            }
          ],
          "correctOptionId": "b",
          "hint": "Pick the option that creates immediate corrective feedback.",
          "explanation": "Quick structured verification catches repeatable process errors before they spread across the next set."
        },
        {
          "id": "sat-prep-101-l06-q2",
          "text": "A SAT drill on SAT: Timing and Pacing Practice ends with unstable pacing. What should be diagnosed first?",
          "skillId": "sat-prep-101-skill-reading-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Retake the same drill immediately without analysis."
            },
            {
              "id": "b",
              "text": "Memorize answer keys without tracking timing behavior."
            },
            {
              "id": "c",
              "text": "Pinpoint where reading decisions consume extra time, then redesign attempt order with checkpoints."
            },
            {
              "id": "d",
              "text": "Increase question volume while keeping the same pacing errors."
            }
          ],
          "correctOptionId": "c",
          "hint": "Look for the answer that isolates a measurable timing bottleneck.",
          "explanation": "Pacing issues usually come from specific reading decision points, not from total question count alone."
        },
        {
          "id": "sat-prep-101-l06-q3",
          "text": "Which one-week sprint most improves writing transfer for SAT: Timing and Pacing Practice in SAT?",
          "skillId": "sat-prep-101-skill-writing-transfer",
          "options": [
            {
              "id": "a",
              "text": "Use only untimed review until confidence feels high."
            },
            {
              "id": "b",
              "text": "Rotate random topics daily with no retest queue."
            },
            {
              "id": "c",
              "text": "Delay all error correction until the final day."
            },
            {
              "id": "d",
              "text": "Run two targeted correction blocks, one mixed timed timed block, and one retest focused on the same writing objective."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine remediation and timed validation.",
          "explanation": "Transfer improves when learners re-encounter corrected skills under realistic constraints."
        },
        {
          "id": "sat-prep-101-l06-q4",
          "text": "In SAT SAT: Timing and Pacing Practice, there are both content misses and pacing slips. What should the learner fix first?",
          "skillId": "sat-prep-101-skill-algebra-priority",
          "options": [
            {
              "id": "a",
              "text": "Prioritize the repeated algebra process issue, then apply the same correction across the next timed block."
            },
            {
              "id": "b",
              "text": "Tackle the rarest concept gap first for variety."
            },
            {
              "id": "c",
              "text": "Review only confidence items and skip timing analysis."
            },
            {
              "id": "d",
              "text": "Change resources without identifying what failed."
            }
          ],
          "correctOptionId": "a",
          "hint": "Look for the answer that addresses recurrence.",
          "explanation": "Recurring process errors compound quickly, so fixing them first creates cleaner conditions for content correction."
        },
        {
          "id": "sat-prep-101-l06-q5",
          "text": "In SAT Reading and Writing module, evidence-line mismatch appears during SAT: Timing and Pacing Practice. What is the strongest immediate correction?",
          "skillId": "sat-prep-101-skill-timing-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore Reading and Writing module diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Underline claim + cited line before selecting an answer choice."
            },
            {
              "id": "c",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "b",
          "hint": "Choose the option that directly fixes evidence-line mismatch.",
          "explanation": "Immediate correction inside Reading and Writing module improves transfer to the next timed timed block."
        },
        {
          "id": "sat-prep-101-l06-q6",
          "text": "During SAT Math module, constraint parsing miss repeats in SAT: Timing and Pacing Practice. Which plan should be applied before the next retest?",
          "skillId": "sat-prep-101-skill-reading-section-application",
          "options": [
            {
              "id": "a",
              "text": "Switch to new content before validating the fix."
            },
            {
              "id": "b",
              "text": "Increase speed without updating process controls."
            },
            {
              "id": "c",
              "text": "Rewrite variable constraints, then validate with one substitution check. Track outcomes in an evidence-to-equation journal and retest the same pattern."
            },
            {
              "id": "d",
              "text": "Retake the section with no checkpoint changes."
            }
          ],
          "correctOptionId": "c",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in evidence-to-equation journal makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "sat-prep-101-l06-ia1",
          "type": "drag_and_drop",
          "title": "SAT: Timing and Pacing Practice Pace Control Board",
          "description": "Place each tactic in the right phase to stabilize pacing.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Assign each tactic to Plan, Execute, or Recover.",
            "Check your placements.",
            "Apply one tactic in your next timed drill."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "execute",
                "label": "Execute"
              },
              {
                "id": "recover",
                "label": "Recover"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Preview command words and time checkpoints before each SAT section",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Annotate evidence lines and algebra constraints before locking an answer",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Tag misses by reading, writing, or math pattern in the error log",
                "correctTargetId": "recover"
              }
            ]
          }
        }
      ],
      quizBlueprint: {
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
      metadata: {
        examDrill: "lesson_drill"
      },
      learningAids: [
        {
          "id": "sat-prep-101-l06-a1",
          "type": "image",
          "title": "Timing Snapshot",
          "content": "Visual anchor for SAT: Timing and Pacing Practice with emphasis on timing within timed block planning."
        },
        {
          "id": "sat-prep-101-l06-a2",
          "type": "animation",
          "title": "Reading Walkthrough",
          "content": "Stepwise walkthrough for SAT: Timing and Pacing Practice showing reading decisions and checkpoint log checks."
        }
      ]
    },
    {
      id: "sat-prep-101-l07",
      title: "SAT: Error Analysis Workshop",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "sat-prep-101-l07-a1",
          "type": "image",
          "title": "Reading Snapshot",
          "content": "Visual anchor for SAT: Error Analysis Workshop with emphasis on reading within review cycle planning."
        },
        {
          "id": "sat-prep-101-l07-a2",
          "type": "animation",
          "title": "Writing Walkthrough",
          "content": "Stepwise walkthrough for SAT: Error Analysis Workshop showing writing decisions and error taxonomy checks."
        }
      ]
    },
    {
      id: "sat-prep-101-l08",
      title: "SAT: Section Drill: Reading + Writing",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one reading decision rule in SAT: Section Drill: Reading + Writing.",
          "Apply it in one passage set and show how it improves evidence and language precision.",
          "Set one next-step target for writing before your next SAT readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "sat-prep-101-l08-ia1",
          "type": "drag_and_drop",
          "title": "SAT: Section Drill: Reading + Writing Decision-Phase Mapping",
          "description": "Map each decision cue to Plan, Execute, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Assign each decision cue to the best phase.",
            "Check all mappings.",
            "Capture one improvement target."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Blueprint"
              },
              {
                "id": "execute",
                "label": "Evidence Solve"
              },
              {
                "id": "reflect",
                "label": "Error Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Preview command words and time checkpoints before each SAT section",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Annotate evidence lines and algebra constraints before locking an answer",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Tag misses by reading, writing, or math pattern in the error log",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "sat-prep-101-l08-a1",
          "type": "image",
          "title": "Reading Snapshot",
          "content": "Visual anchor for SAT: Section Drill: Reading + Writing with emphasis on reading within passage set planning."
        },
        {
          "id": "sat-prep-101-l08-a2",
          "type": "animation",
          "title": "Writing Walkthrough",
          "content": "Stepwise walkthrough for SAT: Section Drill: Reading + Writing showing writing decisions and annotation map checks."
        }
      ]
    },
    {
      id: "sat-prep-101-l09",
      title: "SAT: Section Drill: Math",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "sat-prep-101-l09-q1",
          "text": "In SAT: Section Drill: Math, a learner keeps missing algebra items during SAT practice. Which adjustment should happen before the next timed problem set?",
          "skillId": "sat-prep-101-skill-algebra-workflow",
          "options": [
            {
              "id": "a",
              "text": "Run a short algebra checkpoint routine and annotate why each miss occurred in a setup sheet before retesting."
            },
            {
              "id": "b",
              "text": "Skip review and jump directly to harder questions."
            },
            {
              "id": "c",
              "text": "Track only total score with no error categories."
            },
            {
              "id": "d",
              "text": "Switch topics even if algebra is still the dominant weakness."
            }
          ],
          "correctOptionId": "a",
          "hint": "Choose the action that creates a repeatable feedback loop for algebra.",
          "explanation": "Fast targeted feedback plus immediate correction is the most reliable way to improve algebra."
        },
        {
          "id": "sat-prep-101-l09-q2",
          "text": "A SAT SAT: Section Drill: Math session ends with unstable timing. What should be diagnosed first?",
          "skillId": "sat-prep-101-skill-reading-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Retake the session immediately without diagnostics."
            },
            {
              "id": "b",
              "text": "Locate the exact reading decision point where time spikes, then set micro-checkpoints for that phase."
            },
            {
              "id": "c",
              "text": "Increase total question count and keep the same attempt order."
            },
            {
              "id": "d",
              "text": "Use one pacing rule for all sections regardless of load."
            }
          ],
          "correctOptionId": "b",
          "hint": "Find the answer that isolates a measurable bottleneck.",
          "explanation": "Pacing stabilizes when the highest-cost decision point is measured and corrected directly."
        },
        {
          "id": "sat-prep-101-l09-q3",
          "text": "SAT practice shows correction is happening but not sticking in SAT: Section Drill: Math. What plan fixes this fastest?",
          "skillId": "sat-prep-101-skill-writing-transfer",
          "options": [
            {
              "id": "a",
              "text": "Keep reviewing notes and avoid new timed attempts."
            },
            {
              "id": "b",
              "text": "Increase difficulty only, without targeted rematches."
            },
            {
              "id": "c",
              "text": "Pair each corrected writing error with a near-transfer item in the next timed block and track it in a setup sheet."
            },
            {
              "id": "d",
              "text": "Rewatch lesson content without logging applied changes."
            }
          ],
          "correctOptionId": "c",
          "hint": "The strongest option forces immediate transfer testing.",
          "explanation": "Correction becomes durable when each fix is tested on a similar item during the next constrained attempt."
        },
        {
          "id": "sat-prep-101-l09-q4",
          "text": "During post-drill review for SAT: Section Drill: Math, which fix should be prioritized first for score impact in SAT?",
          "skillId": "sat-prep-101-skill-timing-priority",
          "options": [
            {
              "id": "a",
              "text": "Polish already-mastered question types first."
            },
            {
              "id": "b",
              "text": "Ignore pacing and focus only on confidence items."
            },
            {
              "id": "c",
              "text": "Rewrite notes without validating changes in timed practice."
            },
            {
              "id": "d",
              "text": "Address repeated timing and pacing errors first because they affect many questions in one run."
            }
          ],
          "correctOptionId": "d",
          "hint": "Prioritize changes that influence the largest question set.",
          "explanation": "Highest-impact remediation usually targets repeated timing and process breakdowns before edge-case content gaps."
        },
        {
          "id": "sat-prep-101-l09-q5",
          "text": "In SAT Reading and Writing module, evidence-line mismatch appears during SAT: Section Drill: Math. What is the strongest immediate correction?",
          "skillId": "sat-prep-101-skill-algebra-section-application",
          "options": [
            {
              "id": "a",
              "text": "Underline claim + cited line before selecting an answer choice."
            },
            {
              "id": "b",
              "text": "Ignore Reading and Writing module diagnostics and continue for volume."
            },
            {
              "id": "c",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "a",
          "hint": "Choose the option that directly fixes evidence-line mismatch.",
          "explanation": "Immediate correction inside Reading and Writing module improves transfer to the next timed problem set."
        },
        {
          "id": "sat-prep-101-l09-q6",
          "text": "During SAT Math module, constraint parsing miss repeats in SAT: Section Drill: Math. Which plan should be applied before the next retest?",
          "skillId": "sat-prep-101-skill-reading-section-application",
          "options": [
            {
              "id": "a",
              "text": "Switch to new content before validating the fix."
            },
            {
              "id": "b",
              "text": "Rewrite variable constraints, then validate with one substitution check. Track outcomes in an evidence-to-equation journal and retest the same pattern."
            },
            {
              "id": "c",
              "text": "Increase speed without updating process controls."
            },
            {
              "id": "d",
              "text": "Retake the section with no checkpoint changes."
            }
          ],
          "correctOptionId": "b",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in evidence-to-equation journal makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "sat-prep-101-l09-ia1",
          "type": "matching_pairs",
          "title": "SAT: Section Drill: Math Correction Alignment",
          "description": "Align each recurring signal with the strongest correction action for method and accuracy precision.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Align each pair.",
            "Check your result.",
            "Apply one correction in the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Evidence question missed because support line was not located"
              },
              {
                "id": "l2",
                "label": "Grammar boundary mistake repeats in writing sets"
              },
              {
                "id": "l3",
                "label": "Algebra item solved correctly untimed but missed in sprint mode"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Underline claim + best support line before evaluating answer choices"
              },
              {
                "id": "r2",
                "label": "Run a punctuation boundary checklist before finalizing the sentence"
              },
              {
                "id": "r3",
                "label": "Practice a 2-step SAT math setup routine with strict time caps"
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
      quizBlueprint: {
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
      metadata: {
        examDrill: "section_drill"
      },
      learningAids: [
        {
          "id": "sat-prep-101-l09-a1",
          "type": "image",
          "title": "Algebra Snapshot",
          "content": "Visual anchor for SAT: Section Drill: Math with emphasis on algebra within problem set planning."
        },
        {
          "id": "sat-prep-101-l09-a2",
          "type": "animation",
          "title": "Reading Walkthrough",
          "content": "Stepwise walkthrough for SAT: Section Drill: Math showing reading decisions and setup sheet checks."
        }
      ]
    },
    {
      id: "sat-prep-101-l10",
      title: "SAT: Targeted Reading Remediation",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one reading decision rule in SAT: Targeted Reading Remediation.",
          "Apply it in one passage set and show how it improves evidence and language precision.",
          "Set one next-step target for writing before your next SAT readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "sat-prep-101-l10-ia1",
          "type": "drag_and_drop",
          "title": "SAT: Targeted Reading Remediation Decision-Phase Mapping",
          "description": "Map each decision cue to Plan, Execute, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Assign each decision cue to the best phase.",
            "Check all mappings.",
            "Capture one improvement target."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Blueprint"
              },
              {
                "id": "execute",
                "label": "Evidence Solve"
              },
              {
                "id": "reflect",
                "label": "Error Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Preview command words and time checkpoints before each SAT section",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Annotate evidence lines and algebra constraints before locking an answer",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Tag misses by reading, writing, or math pattern in the error log",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "sat-prep-101-l10-a1",
          "type": "image",
          "title": "Reading Snapshot",
          "content": "Visual anchor for SAT: Targeted Reading Remediation with emphasis on reading within passage set planning."
        },
        {
          "id": "sat-prep-101-l10-a2",
          "type": "animation",
          "title": "Writing Walkthrough",
          "content": "Stepwise walkthrough for SAT: Targeted Reading Remediation showing writing decisions and annotation map checks."
        }
      ]
    },
    {
      id: "sat-prep-101-l11",
      title: "SAT: Timed Writing Sprint",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "sat-prep-101-l11-a1",
          "type": "image",
          "title": "Writing Snapshot",
          "content": "Visual anchor for SAT: Timed Writing Sprint with emphasis on writing within passage set planning."
        },
        {
          "id": "sat-prep-101-l11-a2",
          "type": "animation",
          "title": "Reading Walkthrough",
          "content": "Stepwise walkthrough for SAT: Timed Writing Sprint showing reading decisions and annotation map checks."
        }
      ]
    },
    {
      id: "sat-prep-101-l12",
      title: "SAT: Mixed-Section Decision Drill",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "sat-prep-101-l12-q1",
          "text": "SAT coaching notes show repeated reading misses in SAT: Mixed-Section Decision Drill. What should the learner do before the next practice set?",
          "skillId": "sat-prep-101-skill-reading-workflow",
          "options": [
            {
              "id": "a",
              "text": "Jump to harder content before confirming the root cause."
            },
            {
              "id": "b",
              "text": "Track only final score and ignore process notes."
            },
            {
              "id": "c",
              "text": "Switch strands even though reading is still the top weakness."
            },
            {
              "id": "d",
              "text": "Rebuild the solve workflow on two representative practice set items, then retest with the same constraints."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the option that improves process quality, not just volume.",
          "explanation": "When reading is unstable, workflow repair plus immediate retest creates the fastest reliable gains."
        },
        {
          "id": "sat-prep-101-l12-q2",
          "text": "In SAT: Mixed-Section Decision Drill, pace drops late even when early accuracy is strong. Which move best addresses this SAT pattern?",
          "skillId": "sat-prep-101-skill-writing-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Introduce phase checkpoints and a cut-loss rule around high-friction writing items."
            },
            {
              "id": "b",
              "text": "Spend more time on every item to avoid mistakes."
            },
            {
              "id": "c",
              "text": "Memorize answer keys without tracking timing behavior."
            },
            {
              "id": "d",
              "text": "Use random breaks with no fixed transition points."
            }
          ],
          "correctOptionId": "a",
          "hint": "Look for a solution tied to timing behavior, not memory.",
          "explanation": "Late-section drift usually comes from unmanaged friction points, not lack of content knowledge."
        },
        {
          "id": "sat-prep-101-l12-q3",
          "text": "Which one-week plan best improves algebra transfer for SAT readiness in SAT?",
          "skillId": "sat-prep-101-skill-algebra-transfer",
          "options": [
            {
              "id": "a",
              "text": "Use only untimed warmups and avoid mixed sets."
            },
            {
              "id": "b",
              "text": "Alternate mixed-difficulty sets with targeted remediation, then re-test the same algebra objective under timing constraints."
            },
            {
              "id": "c",
              "text": "Choose random topics daily without a remediation queue."
            },
            {
              "id": "d",
              "text": "Delay all review tasks until the final week."
            }
          ],
          "correctOptionId": "b",
          "hint": "The strongest plan combines correction and timed transfer.",
          "explanation": "Transfer improves when correction cycles are followed by fresh timed retrieval of the same algebra target."
        },
        {
          "id": "sat-prep-101-l12-q4",
          "text": "After a SAT: Mixed-Section Decision Drill drill, which remediation should be prioritized first for score impact in SAT?",
          "skillId": "sat-prep-101-skill-timing-priority",
          "options": [
            {
              "id": "a",
              "text": "Start with already-mastered tasks to build comfort."
            },
            {
              "id": "b",
              "text": "Rewrite notes without testing changes in a timed set."
            },
            {
              "id": "c",
              "text": "Fix repeated timing breakdowns first because they scale across many items in the same run."
            },
            {
              "id": "d",
              "text": "Ignore pacing because content accuracy matters more."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the fix with the widest downstream effect.",
          "explanation": "High-frequency process breakdowns usually produce the largest immediate score delta when corrected first."
        },
        {
          "id": "sat-prep-101-l12-q5",
          "text": "In SAT Reading and Writing module, evidence-line mismatch appears during SAT: Mixed-Section Decision Drill. What is the strongest immediate correction?",
          "skillId": "sat-prep-101-skill-reading-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore Reading and Writing module diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Delay correction until after several unrelated drills."
            },
            {
              "id": "d",
              "text": "Underline claim + cited line before selecting an answer choice."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the option that directly fixes evidence-line mismatch.",
          "explanation": "Immediate correction inside Reading and Writing module improves transfer to the next timed practice set."
        },
        {
          "id": "sat-prep-101-l12-q6",
          "text": "During SAT Math module, constraint parsing miss repeats in SAT: Mixed-Section Decision Drill. Which plan should be applied before the next retest?",
          "skillId": "sat-prep-101-skill-writing-section-application",
          "options": [
            {
              "id": "a",
              "text": "Rewrite variable constraints, then validate with one substitution check. Track outcomes in an evidence-to-equation journal and retest the same pattern."
            },
            {
              "id": "b",
              "text": "Switch to new content before validating the fix."
            },
            {
              "id": "c",
              "text": "Increase speed without updating process controls."
            },
            {
              "id": "d",
              "text": "Retake the section with no checkpoint changes."
            }
          ],
          "correctOptionId": "a",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in evidence-to-equation journal makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "sat-prep-101-l12-ia1",
          "type": "matching_pairs",
          "title": "SAT: Mixed-Section Decision Drill Correction Alignment",
          "description": "Align each recurring signal with the strongest correction action for decision quality under constraints.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Align each pair.",
            "Check your result.",
            "Apply one correction in the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Evidence question missed because support line was not located"
              },
              {
                "id": "l2",
                "label": "Grammar boundary mistake repeats in writing sets"
              },
              {
                "id": "l3",
                "label": "Algebra item solved correctly untimed but missed in sprint mode"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Underline claim + best support line before evaluating answer choices"
              },
              {
                "id": "r2",
                "label": "Run a punctuation boundary checklist before finalizing the sentence"
              },
              {
                "id": "r3",
                "label": "Practice a 2-step SAT math setup routine with strict time caps"
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
      quizBlueprint: {
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
      metadata: {
        examDrill: "lesson_drill"
      },
      learningAids: [
        {
          "id": "sat-prep-101-l12-a1",
          "type": "image",
          "title": "Reading Snapshot",
          "content": "Visual anchor for SAT: Mixed-Section Decision Drill with emphasis on reading within practice set planning."
        },
        {
          "id": "sat-prep-101-l12-a2",
          "type": "animation",
          "title": "Writing Walkthrough",
          "content": "Stepwise walkthrough for SAT: Mixed-Section Decision Drill showing writing decisions and strategy log checks."
        }
      ]
    },
    {
      id: "sat-prep-101-l13",
      title: "SAT: Adaptive Retry and Transfer Check",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "sat-prep-101-l13-a1",
          "type": "image",
          "title": "Reading Snapshot",
          "content": "Visual anchor for SAT: Adaptive Retry and Transfer Check with emphasis on reading within practice set planning."
        },
        {
          "id": "sat-prep-101-l13-a2",
          "type": "animation",
          "title": "Writing Walkthrough",
          "content": "Stepwise walkthrough for SAT: Adaptive Retry and Transfer Check showing writing decisions and strategy log checks."
        }
      ]
    },
    {
      id: "sat-prep-101-l14",
      title: "SAT: Sat Readiness Stability Checkpoint",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one reading decision rule in SAT: Sat Readiness Stability Checkpoint.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for writing before your next SAT readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "sat-prep-101-l14-ia1",
          "type": "drag_and_drop",
          "title": "SAT: Sat Readiness Stability Checkpoint Decision-Phase Mapping",
          "description": "Map each decision cue to Plan, Execute, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Assign each decision cue to the best phase.",
            "Check all mappings.",
            "Capture one improvement target."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Blueprint"
              },
              {
                "id": "execute",
                "label": "Evidence Solve"
              },
              {
                "id": "reflect",
                "label": "Error Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Preview command words and time checkpoints before each SAT section",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Annotate evidence lines and algebra constraints before locking an answer",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Tag misses by reading, writing, or math pattern in the error log",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "sat-prep-101-l14-a1",
          "type": "image",
          "title": "Reading Snapshot",
          "content": "Visual anchor for SAT: Sat Readiness Stability Checkpoint with emphasis on reading within practice set planning."
        },
        {
          "id": "sat-prep-101-l14-a2",
          "type": "animation",
          "title": "Writing Walkthrough",
          "content": "Stepwise walkthrough for SAT: Sat Readiness Stability Checkpoint showing writing decisions and strategy log checks."
        }
      ]
    },
    {
      id: "sat-prep-101-l15",
      title: "SAT: Full SAT Mock and Review",
      type: "quiz",
      duration: 20,
      questions: [
        {
          "id": "sat-prep-101-l15-q1",
          "text": "In SAT: Full SAT Mock and Review, a learner keeps missing reading items during SAT practice. Which adjustment should happen before the next timed review cycle?",
          "skillId": "sat-prep-101-skill-reading-workflow",
          "options": [
            {
              "id": "a",
              "text": "Skip review and jump directly to harder questions."
            },
            {
              "id": "b",
              "text": "Track only total score with no error categories."
            },
            {
              "id": "c",
              "text": "Run a short reading checkpoint routine and annotate why each miss occurred in an error taxonomy before retesting."
            },
            {
              "id": "d",
              "text": "Switch topics even if reading is still the dominant weakness."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the action that creates a repeatable feedback loop for reading.",
          "explanation": "Fast targeted feedback plus immediate correction is the most reliable way to improve reading."
        },
        {
          "id": "sat-prep-101-l15-q2",
          "text": "A SAT SAT: Full SAT Mock and Review session ends with unstable timing. What should be diagnosed first?",
          "skillId": "sat-prep-101-skill-writing-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Retake the session immediately without diagnostics."
            },
            {
              "id": "b",
              "text": "Increase total question count and keep the same attempt order."
            },
            {
              "id": "c",
              "text": "Use one pacing rule for all sections regardless of load."
            },
            {
              "id": "d",
              "text": "Locate the exact writing decision point where time spikes, then set micro-checkpoints for that phase."
            }
          ],
          "correctOptionId": "d",
          "hint": "Find the answer that isolates a measurable bottleneck.",
          "explanation": "Pacing stabilizes when the highest-cost decision point is measured and corrected directly."
        },
        {
          "id": "sat-prep-101-l15-q3",
          "text": "SAT practice shows correction is happening but not sticking in SAT: Full SAT Mock and Review. What plan fixes this fastest?",
          "skillId": "sat-prep-101-skill-algebra-transfer",
          "options": [
            {
              "id": "a",
              "text": "Pair each corrected algebra error with a near-transfer item in the next timed block and track it in an error taxonomy."
            },
            {
              "id": "b",
              "text": "Keep reviewing notes and avoid new timed attempts."
            },
            {
              "id": "c",
              "text": "Increase difficulty only, without targeted rematches."
            },
            {
              "id": "d",
              "text": "Rewatch lesson content without logging applied changes."
            }
          ],
          "correctOptionId": "a",
          "hint": "The strongest option forces immediate transfer testing.",
          "explanation": "Correction becomes durable when each fix is tested on a similar item during the next constrained attempt."
        },
        {
          "id": "sat-prep-101-l15-q4",
          "text": "During post-drill review for SAT: Full SAT Mock and Review, which fix should be prioritized first for score impact in SAT?",
          "skillId": "sat-prep-101-skill-timing-priority",
          "options": [
            {
              "id": "a",
              "text": "Polish already-mastered question types first."
            },
            {
              "id": "b",
              "text": "Address repeated timing and pacing errors first because they affect many questions in one run."
            },
            {
              "id": "c",
              "text": "Ignore pacing and focus only on confidence items."
            },
            {
              "id": "d",
              "text": "Rewrite notes without validating changes in timed practice."
            }
          ],
          "correctOptionId": "b",
          "hint": "Prioritize changes that influence the largest question set.",
          "explanation": "Highest-impact remediation usually targets repeated timing and process breakdowns before edge-case content gaps."
        },
        {
          "id": "sat-prep-101-l15-q5",
          "text": "In SAT Reading and Writing module, evidence-line mismatch appears during SAT: Full SAT Mock and Review. What is the strongest immediate correction?",
          "skillId": "sat-prep-101-skill-reading-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore Reading and Writing module diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Underline claim + cited line before selecting an answer choice."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes evidence-line mismatch.",
          "explanation": "Immediate correction inside Reading and Writing module improves transfer to the next timed review cycle."
        },
        {
          "id": "sat-prep-101-l15-q6",
          "text": "During SAT Math module, constraint parsing miss repeats in SAT: Full SAT Mock and Review. Which plan should be applied before the next retest?",
          "skillId": "sat-prep-101-skill-writing-section-application",
          "options": [
            {
              "id": "a",
              "text": "Switch to new content before validating the fix."
            },
            {
              "id": "b",
              "text": "Increase speed without updating process controls."
            },
            {
              "id": "c",
              "text": "Retake the section with no checkpoint changes."
            },
            {
              "id": "d",
              "text": "Rewrite variable constraints, then validate with one substitution check. Track outcomes in an evidence-to-equation journal and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in evidence-to-equation journal makes the pacing fix visible and repeatable."
        },
        {
          "id": "sat-prep-101-l15-q7",
          "text": "In a full SAT mock, misses appear across multiple strands. What triage order is strongest?",
          "skillId": "sat-prep-101-skill-mock-triage",
          "options": [
            {
              "id": "a",
              "text": "Group misses by concept, strategy, and timing first, then sequence fixes by expected score gain."
            },
            {
              "id": "b",
              "text": "Review only the most recent mistakes."
            },
            {
              "id": "c",
              "text": "Retake the full mock without a remediation plan."
            },
            {
              "id": "d",
              "text": "Choose revision topics only by preference."
            }
          ],
          "correctOptionId": "a",
          "hint": "The right choice creates a stable remediation queue.",
          "explanation": "Process-level triage finds leverage points that improve many future items."
        },
        {
          "id": "sat-prep-101-l15-q8",
          "text": "A learner finishes one section early but times out on another in SAT. What is the best pacing fix?",
          "skillId": "sat-prep-101-skill-section-pacing",
          "options": [
            {
              "id": "a",
              "text": "Use the same checkpoint target for every section."
            },
            {
              "id": "b",
              "text": "Set section-specific checkpoints and rehearse transitions so pace remains stable end-to-end."
            },
            {
              "id": "c",
              "text": "Speed up all sections equally without checking accuracy."
            },
            {
              "id": "d",
              "text": "Add extra questions without tracking section pace."
            }
          ],
          "correctOptionId": "b",
          "hint": "Section load differences require section-level pacing plans.",
          "explanation": "One-size pacing causes uneven performance; section-specific pacing is more reliable."
        },
        {
          "id": "sat-prep-101-l15-q9",
          "text": "Before submitting a high-stakes SAT section, which quality-control habit is most reliable?",
          "skillId": "sat-prep-101-skill-quality-control",
          "options": [
            {
              "id": "a",
              "text": "Change random answers to distribute letters evenly."
            },
            {
              "id": "b",
              "text": "Skip verification to preserve confidence."
            },
            {
              "id": "c",
              "text": "Run a brief targeted verification pass on flagged items and known error patterns."
            },
            {
              "id": "d",
              "text": "Review only the first third of the section."
            }
          ],
          "correctOptionId": "c",
          "hint": "Targeted verification beats random checking.",
          "explanation": "Focused verification catches preventable mistakes without excessive time cost."
        },
        {
          "id": "sat-prep-101-l15-q10",
          "text": "After full-mock review in SAT, which next-step plan yields the best one-week improvement?",
          "skillId": "sat-prep-101-skill-remediation-loop",
          "options": [
            {
              "id": "a",
              "text": "Repeat the same mock daily with no targeted fixes."
            },
            {
              "id": "b",
              "text": "Study only easiest content to boost confidence."
            },
            {
              "id": "c",
              "text": "Pause all timed practice until every concept feels perfect."
            },
            {
              "id": "d",
              "text": "Build a remediation sprint with two top weak strands, one pacing drill, and one timed re-check."
            }
          ],
          "correctOptionId": "d",
          "hint": "The strongest plan includes targeted fixes plus timed validation.",
          "explanation": "Improvement requires focused remediation and a timed checkpoint to verify transfer."
        }
      ],
      interactiveActivities: [
        {
          "id": "sat-prep-101-l15-ia1",
          "type": "sorting_buckets",
          "title": "SAT: Full SAT Mock and Review Error Taxonomy Sort",
          "description": "Sort mock errors into concept, strategy, or timing remediation lanes.",
          "estimatedMinutes": 10,
          "difficultyLevel": "adaptive",
          "instructions": [
            "Review each error pattern.",
            "Sort into best remediation lane.",
            "Use output to plan your next practice sprint."
          ],
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "Reading/Writing Concept Gap"
              },
              {
                "id": "strategy",
                "label": "Math Strategy Gap"
              },
              {
                "id": "timing",
                "label": "Pacing Gap"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Missed central-idea evidence mapping in two passages",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Chose fastest-looking equation instead of validated model",
                "correctBucketId": "strategy"
              },
              {
                "id": "i3",
                "label": "Final math cluster unanswered due late section slowdown",
                "correctBucketId": "timing"
              },
              {
                "id": "i4",
                "label": "Correct in review but repeated same pacing error next drill",
                "correctBucketId": "timing"
              }
            ]
          }
        }
      ],
      quizBlueprint: {
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
      metadata: {
        examDrill: "full_mock"
      },
      learningAids: [
        {
          "id": "sat-prep-101-l15-a1",
          "type": "image",
          "title": "Reading Snapshot",
          "content": "Visual anchor for SAT: Full SAT Mock and Review with emphasis on reading within review cycle planning."
        },
        {
          "id": "sat-prep-101-l15-a2",
          "type": "animation",
          "title": "Writing Walkthrough",
          "content": "Stepwise walkthrough for SAT: Full SAT Mock and Review showing writing decisions and error taxonomy checks."
        }
      ]
    }
  ],
};
