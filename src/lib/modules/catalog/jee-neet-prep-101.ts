import type { LearningModule } from "@/lib/modules/types";

export const JeeNeetPrep101Module: LearningModule = {
  id: "jee-neet-prep-101",
  title: "JEE / NEET Prep Foundations",
  description: "Develop high-intensity PCM/PCB practice workflows for JEE and NEET.",
  subject: "Exam Prep",
  tags: ["exam-prep", "assessment", "advanced"],
  minAge: 15,
  maxAge: 20,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Build structured JEE and NEET readiness workflows",
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
      id: "jee-neet-prep-101-l01",
      title: "JEE/NEET: JEE/NEET Pattern and Cutoff Basics",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "jee-neet-prep-101-l01-a1",
          "type": "image",
          "title": "Physics Snapshot",
          "content": "Visual anchor for JEE/NEET: JEE/NEET Pattern and Cutoff Basics with emphasis on physics within practice set planning."
        },
        {
          "id": "jee-neet-prep-101-l01-a2",
          "type": "animation",
          "title": "Chemistry Walkthrough",
          "content": "Stepwise walkthrough for JEE/NEET: JEE/NEET Pattern and Cutoff Basics showing chemistry decisions and strategy log checks."
        }
      ]
    },
    {
      id: "jee-neet-prep-101-l02",
      title: "JEE/NEET: Physics Problem Frameworks",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one physics decision rule in JEE/NEET: Physics Problem Frameworks.",
          "Apply it in one problem set and show how it improves method and accuracy precision.",
          "Set one next-step target for chemistry before your next JEE and NEET readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "jee-neet-prep-101-l02-ia1",
          "type": "drag_and_drop",
          "title": "JEE/NEET: Physics Problem Frameworks Decision-Phase Mapping",
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
                "label": "Attempt Order Plan"
              },
              {
                "id": "execute",
                "label": "Accuracy Pass"
              },
              {
                "id": "reflect",
                "label": "Negative-Mark Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Choose question attempt order by confidence and mark value",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Apply formula-memory plus unit-check verification before submit",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Track negative-mark causes and convert into avoidance rules",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "jee-neet-prep-101-l02-a1",
          "type": "image",
          "title": "Physics Snapshot",
          "content": "Visual anchor for JEE/NEET: Physics Problem Frameworks with emphasis on physics within problem set planning."
        },
        {
          "id": "jee-neet-prep-101-l02-a2",
          "type": "animation",
          "title": "Chemistry Walkthrough",
          "content": "Stepwise walkthrough for JEE/NEET: Physics Problem Frameworks showing chemistry decisions and setup sheet checks."
        }
      ]
    },
    {
      id: "jee-neet-prep-101-l03",
      title: "JEE/NEET: Chemistry Memory + Application",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "jee-neet-prep-101-l03-q1",
          "text": "During JEE/NEET: Chemistry Memory + Application, early guesses are causing chemistry losses. Which intervention should happen first?",
          "skillId": "jee-neet-prep-101-skill-chemistry-workflow",
          "options": [
            {
              "id": "a",
              "text": "Keep the same pace and hope accuracy normalizes later."
            },
            {
              "id": "b",
              "text": "Memorize answer patterns instead of checking reasoning."
            },
            {
              "id": "c",
              "text": "Use a short verification pass and log decision triggers in a setup sheet before restarting the drill."
            },
            {
              "id": "d",
              "text": "Delay all correction until the weekend review session."
            }
          ],
          "correctOptionId": "c",
          "hint": "Pick the option that creates immediate corrective feedback.",
          "explanation": "Quick structured verification catches repeatable process errors before they spread across the next set."
        },
        {
          "id": "jee-neet-prep-101-l03-q2",
          "text": "A JEE/NEET drill on JEE/NEET: Chemistry Memory + Application ends with unstable pacing. What should be diagnosed first?",
          "skillId": "jee-neet-prep-101-skill-physics-diagnosis",
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
              "text": "Increase question volume while keeping the same pacing errors."
            },
            {
              "id": "d",
              "text": "Pinpoint where physics decisions consume extra time, then redesign attempt order with checkpoints."
            }
          ],
          "correctOptionId": "d",
          "hint": "Look for the answer that isolates a measurable timing bottleneck.",
          "explanation": "Pacing issues usually come from specific physics decision points, not from total question count alone."
        },
        {
          "id": "jee-neet-prep-101-l03-q3",
          "text": "Which one-week sprint most improves math/biology transfer for JEE/NEET: Chemistry Memory + Application in JEE/NEET?",
          "skillId": "jee-neet-prep-101-skill-math-biology-transfer",
          "options": [
            {
              "id": "a",
              "text": "Run two targeted correction blocks, one mixed timed problem set, and one retest focused on the same math/biology objective."
            },
            {
              "id": "b",
              "text": "Use only untimed review until confidence feels high."
            },
            {
              "id": "c",
              "text": "Rotate random topics daily with no retest queue."
            },
            {
              "id": "d",
              "text": "Delay all error correction until the final day."
            }
          ],
          "correctOptionId": "a",
          "hint": "Best plans combine remediation and timed validation.",
          "explanation": "Transfer improves when learners re-encounter corrected skills under realistic constraints."
        },
        {
          "id": "jee-neet-prep-101-l03-q4",
          "text": "In JEE/NEET JEE/NEET: Chemistry Memory + Application, there are both content misses and pacing slips. What should the learner fix first?",
          "skillId": "jee-neet-prep-101-skill-accuracy-speed-priority",
          "options": [
            {
              "id": "a",
              "text": "Tackle the rarest concept gap first for variety."
            },
            {
              "id": "b",
              "text": "Prioritize the repeated accuracy speed process issue, then apply the same correction across the next timed block."
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
          "correctOptionId": "b",
          "hint": "Look for the answer that addresses recurrence.",
          "explanation": "Recurring process errors compound quickly, so fixing them first creates cleaner conditions for content correction."
        },
        {
          "id": "jee-neet-prep-101-l03-q5",
          "text": "In JEE/NEET high-yield PCM/PCB block, attempt-order error appears during JEE/NEET: Chemistry Memory + Application. What is the strongest immediate correction?",
          "skillId": "jee-neet-prep-101-skill-chemistry-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore high-yield PCM/PCB block diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Use skip-return triggers to secure easier marks first."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes attempt-order error.",
          "explanation": "Immediate correction inside high-yield PCM/PCB block improves transfer to the next timed problem set."
        },
        {
          "id": "jee-neet-prep-101-l03-q6",
          "text": "During JEE/NEET mixed timed block, sign/unit slip repeats in JEE/NEET: Chemistry Memory + Application. Which plan should be applied before the next retest?",
          "skillId": "jee-neet-prep-101-skill-physics-section-application",
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
              "text": "Run sign-unit verification before final option lock. Track outcomes in a negative-marking control card and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in negative-marking control card makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "jee-neet-prep-101-l03-ia1",
          "type": "matching_pairs",
          "title": "JEE/NEET: Chemistry Memory + Application Correction Alignment",
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
                "label": "High-confidence item lost due sign/unit mistake"
              },
              {
                "id": "l2",
                "label": "Too much time spent on one low-probability question"
              },
              {
                "id": "l3",
                "label": "Concept known but recall fails under pressure"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Add final sign and unit verification before locking response"
              },
              {
                "id": "r2",
                "label": "Use cut-loss timer and move to next high-yield item"
              },
              {
                "id": "r3",
                "label": "Run spaced recall drills with mixed timed question blocks"
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
          "id": "jee-neet-prep-101-l03-a1",
          "type": "image",
          "title": "Chemistry Snapshot",
          "content": "Visual anchor for JEE/NEET: Chemistry Memory + Application with emphasis on chemistry within problem set planning."
        },
        {
          "id": "jee-neet-prep-101-l03-a2",
          "type": "animation",
          "title": "Physics Walkthrough",
          "content": "Stepwise walkthrough for JEE/NEET: Chemistry Memory + Application showing physics decisions and setup sheet checks."
        }
      ]
    },
    {
      id: "jee-neet-prep-101-l04",
      title: "JEE/NEET: Math Track: Speed and Precision",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one math/biology decision rule in JEE/NEET: Math Track: Speed and Precision.",
          "Apply it in one problem set and show how it improves method and accuracy precision.",
          "Set one next-step target for accuracy speed before your next JEE and NEET readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "jee-neet-prep-101-l04-ia1",
          "type": "drag_and_drop",
          "title": "JEE/NEET: Math Track: Speed and Precision Decision-Phase Mapping",
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
                "label": "Attempt Order Plan"
              },
              {
                "id": "execute",
                "label": "Accuracy Pass"
              },
              {
                "id": "reflect",
                "label": "Negative-Mark Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Choose question attempt order by confidence and mark value",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Apply formula-memory plus unit-check verification before submit",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Track negative-mark causes and convert into avoidance rules",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "jee-neet-prep-101-l04-a1",
          "type": "image",
          "title": "Math Biology Snapshot",
          "content": "Visual anchor for JEE/NEET: Math Track: Speed and Precision with emphasis on math/biology within problem set planning."
        },
        {
          "id": "jee-neet-prep-101-l04-a2",
          "type": "animation",
          "title": "Accuracy Speed Walkthrough",
          "content": "Stepwise walkthrough for JEE/NEET: Math Track: Speed and Precision showing accuracy speed decisions and setup sheet checks."
        }
      ]
    },
    {
      id: "jee-neet-prep-101-l05",
      title: "JEE/NEET: Biology Track: NCERT Mastery",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "jee-neet-prep-101-l05-a1",
          "type": "image",
          "title": "Math Biology Snapshot",
          "content": "Visual anchor for JEE/NEET: Biology Track: NCERT Mastery with emphasis on math/biology within problem set planning."
        },
        {
          "id": "jee-neet-prep-101-l05-a2",
          "type": "animation",
          "title": "Physics Walkthrough",
          "content": "Stepwise walkthrough for JEE/NEET: Biology Track: NCERT Mastery showing physics decisions and setup sheet checks."
        }
      ]
    },
    {
      id: "jee-neet-prep-101-l06",
      title: "JEE/NEET: Question Selection Strategy",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "jee-neet-prep-101-l06-q1",
          "text": "During JEE/NEET: Question Selection Strategy, early guesses are causing physics losses. Which intervention should happen first?",
          "skillId": "jee-neet-prep-101-skill-physics-workflow",
          "options": [
            {
              "id": "a",
              "text": "Keep the same pace and hope accuracy normalizes later."
            },
            {
              "id": "b",
              "text": "Use a short verification pass and log decision triggers in a strategy log before restarting the drill."
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
          "id": "jee-neet-prep-101-l06-q2",
          "text": "A JEE/NEET drill on JEE/NEET: Question Selection Strategy ends with unstable pacing. What should be diagnosed first?",
          "skillId": "jee-neet-prep-101-skill-chemistry-diagnosis",
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
              "text": "Pinpoint where chemistry decisions consume extra time, then redesign attempt order with checkpoints."
            },
            {
              "id": "d",
              "text": "Increase question volume while keeping the same pacing errors."
            }
          ],
          "correctOptionId": "c",
          "hint": "Look for the answer that isolates a measurable timing bottleneck.",
          "explanation": "Pacing issues usually come from specific chemistry decision points, not from total question count alone."
        },
        {
          "id": "jee-neet-prep-101-l06-q3",
          "text": "Which one-week sprint most improves math/biology transfer for JEE/NEET: Question Selection Strategy in JEE/NEET?",
          "skillId": "jee-neet-prep-101-skill-math-biology-transfer",
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
              "text": "Run two targeted correction blocks, one mixed timed practice set, and one retest focused on the same math/biology objective."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine remediation and timed validation.",
          "explanation": "Transfer improves when learners re-encounter corrected skills under realistic constraints."
        },
        {
          "id": "jee-neet-prep-101-l06-q4",
          "text": "In JEE/NEET JEE/NEET: Question Selection Strategy, there are both content misses and pacing slips. What should the learner fix first?",
          "skillId": "jee-neet-prep-101-skill-accuracy-speed-priority",
          "options": [
            {
              "id": "a",
              "text": "Prioritize the repeated accuracy speed process issue, then apply the same correction across the next timed block."
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
          "id": "jee-neet-prep-101-l06-q5",
          "text": "In JEE/NEET high-yield PCM/PCB block, attempt-order error appears during JEE/NEET: Question Selection Strategy. What is the strongest immediate correction?",
          "skillId": "jee-neet-prep-101-skill-physics-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore high-yield PCM/PCB block diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Use skip-return triggers to secure easier marks first."
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
          "hint": "Choose the option that directly fixes attempt-order error.",
          "explanation": "Immediate correction inside high-yield PCM/PCB block improves transfer to the next timed practice set."
        },
        {
          "id": "jee-neet-prep-101-l06-q6",
          "text": "During JEE/NEET mixed timed block, sign/unit slip repeats in JEE/NEET: Question Selection Strategy. Which plan should be applied before the next retest?",
          "skillId": "jee-neet-prep-101-skill-chemistry-section-application",
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
              "text": "Run sign-unit verification before final option lock. Track outcomes in a negative-marking control card and retest the same pattern."
            },
            {
              "id": "d",
              "text": "Retake the section with no checkpoint changes."
            }
          ],
          "correctOptionId": "c",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in negative-marking control card makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "jee-neet-prep-101-l06-ia1",
          "type": "matching_pairs",
          "title": "JEE/NEET: Question Selection Strategy Correction Alignment",
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
                "label": "High-confidence item lost due sign/unit mistake"
              },
              {
                "id": "l2",
                "label": "Too much time spent on one low-probability question"
              },
              {
                "id": "l3",
                "label": "Concept known but recall fails under pressure"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Add final sign and unit verification before locking response"
              },
              {
                "id": "r2",
                "label": "Use cut-loss timer and move to next high-yield item"
              },
              {
                "id": "r3",
                "label": "Run spaced recall drills with mixed timed question blocks"
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
          "id": "jee-neet-prep-101-l06-a1",
          "type": "image",
          "title": "Physics Snapshot",
          "content": "Visual anchor for JEE/NEET: Question Selection Strategy with emphasis on physics within practice set planning."
        },
        {
          "id": "jee-neet-prep-101-l06-a2",
          "type": "animation",
          "title": "Chemistry Walkthrough",
          "content": "Stepwise walkthrough for JEE/NEET: Question Selection Strategy showing chemistry decisions and strategy log checks."
        }
      ]
    },
    {
      id: "jee-neet-prep-101-l07",
      title: "JEE/NEET: Negative Marking Risk Control",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "jee-neet-prep-101-l07-a1",
          "type": "image",
          "title": "Physics Snapshot",
          "content": "Visual anchor for JEE/NEET: Negative Marking Risk Control with emphasis on physics within practice set planning."
        },
        {
          "id": "jee-neet-prep-101-l07-a2",
          "type": "animation",
          "title": "Chemistry Walkthrough",
          "content": "Stepwise walkthrough for JEE/NEET: Negative Marking Risk Control showing chemistry decisions and strategy log checks."
        }
      ]
    },
    {
      id: "jee-neet-prep-101-l08",
      title: "JEE/NEET: Timed Mixed Subject Drill",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one accuracy speed decision rule in JEE/NEET: Timed Mixed Subject Drill.",
          "Apply it in one timed block and show how it improves pace and decision stability.",
          "Set one next-step target for physics before your next JEE and NEET readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "jee-neet-prep-101-l08-ia1",
          "type": "sorting_buckets",
          "title": "JEE/NEET: Timed Mixed Subject Drill Time-Checkpoint Sort",
          "description": "Sort execution decisions into before-timer, in-section, and recovery lanes.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each decision cue.",
            "Sort into the strongest checkpoint lane.",
            "Apply one lane in your next timed drill."
          ],
          "data": {
            "buckets": [
              {
                "id": "before_timer",
                "label": "Before Timer"
              },
              {
                "id": "in_section",
                "label": "In Section"
              },
              {
                "id": "recovery",
                "label": "Recovery"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Choose question attempt order by confidence and mark value",
                "correctBucketId": "before_timer"
              },
              {
                "id": "i2",
                "label": "Apply formula-memory plus unit-check verification before submit",
                "correctBucketId": "in_section"
              },
              {
                "id": "i3",
                "label": "Track negative-mark causes and convert into avoidance rules",
                "correctBucketId": "recovery"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "jee-neet-prep-101-l08-a1",
          "type": "image",
          "title": "Accuracy Speed Snapshot",
          "content": "Visual anchor for JEE/NEET: Timed Mixed Subject Drill with emphasis on accuracy speed within timed block planning."
        },
        {
          "id": "jee-neet-prep-101-l08-a2",
          "type": "animation",
          "title": "Physics Walkthrough",
          "content": "Stepwise walkthrough for JEE/NEET: Timed Mixed Subject Drill showing physics decisions and checkpoint log checks."
        }
      ]
    },
    {
      id: "jee-neet-prep-101-l09",
      title: "JEE/NEET: Mock Test Analysis Loop",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "jee-neet-prep-101-l09-q1",
          "text": "JEE/NEET coaching notes show repeated physics misses in JEE/NEET: Mock Test Analysis Loop. What should the learner do before the next review cycle?",
          "skillId": "jee-neet-prep-101-skill-physics-workflow",
          "options": [
            {
              "id": "a",
              "text": "Rebuild the solve workflow on two representative review cycle items, then retest with the same constraints."
            },
            {
              "id": "b",
              "text": "Jump to harder content before confirming the root cause."
            },
            {
              "id": "c",
              "text": "Track only final score and ignore process notes."
            },
            {
              "id": "d",
              "text": "Switch strands even though physics is still the top weakness."
            }
          ],
          "correctOptionId": "a",
          "hint": "Choose the option that improves process quality, not just volume.",
          "explanation": "When physics is unstable, workflow repair plus immediate retest creates the fastest reliable gains."
        },
        {
          "id": "jee-neet-prep-101-l09-q2",
          "text": "In JEE/NEET: Mock Test Analysis Loop, pace drops late even when early accuracy is strong. Which move best addresses this JEE/NEET pattern?",
          "skillId": "jee-neet-prep-101-skill-chemistry-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Spend more time on every item to avoid mistakes."
            },
            {
              "id": "b",
              "text": "Introduce phase checkpoints and a cut-loss rule around high-friction chemistry items."
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
          "correctOptionId": "b",
          "hint": "Look for a solution tied to timing behavior, not memory.",
          "explanation": "Late-section drift usually comes from unmanaged friction points, not lack of content knowledge."
        },
        {
          "id": "jee-neet-prep-101-l09-q3",
          "text": "Which one-week plan best improves math/biology transfer for JEE and NEET readiness in JEE/NEET?",
          "skillId": "jee-neet-prep-101-skill-math-biology-transfer",
          "options": [
            {
              "id": "a",
              "text": "Use only untimed warmups and avoid mixed sets."
            },
            {
              "id": "b",
              "text": "Choose random topics daily without a remediation queue."
            },
            {
              "id": "c",
              "text": "Alternate mixed-difficulty sets with targeted remediation, then re-test the same math/biology objective under timing constraints."
            },
            {
              "id": "d",
              "text": "Delay all review tasks until the final week."
            }
          ],
          "correctOptionId": "c",
          "hint": "The strongest plan combines correction and timed transfer.",
          "explanation": "Transfer improves when correction cycles are followed by fresh timed retrieval of the same math/biology target."
        },
        {
          "id": "jee-neet-prep-101-l09-q4",
          "text": "After a JEE/NEET: Mock Test Analysis Loop drill, which remediation should be prioritized first for score impact in JEE/NEET?",
          "skillId": "jee-neet-prep-101-skill-accuracy-speed-priority",
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
              "text": "Ignore pacing because content accuracy matters more."
            },
            {
              "id": "d",
              "text": "Fix repeated accuracy speed breakdowns first because they scale across many items in the same run."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the fix with the widest downstream effect.",
          "explanation": "High-frequency process breakdowns usually produce the largest immediate score delta when corrected first."
        },
        {
          "id": "jee-neet-prep-101-l09-q5",
          "text": "In JEE/NEET high-yield PCM/PCB block, attempt-order error appears during JEE/NEET: Mock Test Analysis Loop. What is the strongest immediate correction?",
          "skillId": "jee-neet-prep-101-skill-physics-section-application",
          "options": [
            {
              "id": "a",
              "text": "Use skip-return triggers to secure easier marks first."
            },
            {
              "id": "b",
              "text": "Ignore high-yield PCM/PCB block diagnostics and continue for volume."
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
          "hint": "Choose the option that directly fixes attempt-order error.",
          "explanation": "Immediate correction inside high-yield PCM/PCB block improves transfer to the next timed review cycle."
        },
        {
          "id": "jee-neet-prep-101-l09-q6",
          "text": "During JEE/NEET mixed timed block, sign/unit slip repeats in JEE/NEET: Mock Test Analysis Loop. Which plan should be applied before the next retest?",
          "skillId": "jee-neet-prep-101-skill-chemistry-section-application",
          "options": [
            {
              "id": "a",
              "text": "Switch to new content before validating the fix."
            },
            {
              "id": "b",
              "text": "Run sign-unit verification before final option lock. Track outcomes in a negative-marking control card and retest the same pattern."
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
          "explanation": "A logged correction cycle in negative-marking control card makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "jee-neet-prep-101-l09-ia1",
          "type": "matching_pairs",
          "title": "JEE/NEET: Mock Test Analysis Loop Root-Cause Match",
          "description": "Match each repeated error signal to the correction with highest score impact.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Match each pair.",
            "Check your result.",
            "Apply one correction in your next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "High-confidence item lost due sign/unit mistake"
              },
              {
                "id": "l2",
                "label": "Too much time spent on one low-probability question"
              },
              {
                "id": "l3",
                "label": "Concept known but recall fails under pressure"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Add final sign and unit verification before locking response"
              },
              {
                "id": "r2",
                "label": "Use cut-loss timer and move to next high-yield item"
              },
              {
                "id": "r3",
                "label": "Run spaced recall drills with mixed timed question blocks"
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
          "id": "jee-neet-prep-101-l09-a1",
          "type": "image",
          "title": "Physics Snapshot",
          "content": "Visual anchor for JEE/NEET: Mock Test Analysis Loop with emphasis on physics within review cycle planning."
        },
        {
          "id": "jee-neet-prep-101-l09-a2",
          "type": "animation",
          "title": "Chemistry Walkthrough",
          "content": "Stepwise walkthrough for JEE/NEET: Mock Test Analysis Loop showing chemistry decisions and error taxonomy checks."
        }
      ]
    },
    {
      id: "jee-neet-prep-101-l10",
      title: "JEE/NEET: Targeted Physics Remediation",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one physics decision rule in JEE/NEET: Targeted Physics Remediation.",
          "Apply it in one problem set and show how it improves method and accuracy precision.",
          "Set one next-step target for chemistry before your next JEE and NEET readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "jee-neet-prep-101-l10-ia1",
          "type": "drag_and_drop",
          "title": "JEE/NEET: Targeted Physics Remediation Decision-Phase Mapping",
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
                "label": "Attempt Order Plan"
              },
              {
                "id": "execute",
                "label": "Accuracy Pass"
              },
              {
                "id": "reflect",
                "label": "Negative-Mark Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Choose question attempt order by confidence and mark value",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Apply formula-memory plus unit-check verification before submit",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Track negative-mark causes and convert into avoidance rules",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "jee-neet-prep-101-l10-a1",
          "type": "image",
          "title": "Physics Snapshot",
          "content": "Visual anchor for JEE/NEET: Targeted Physics Remediation with emphasis on physics within problem set planning."
        },
        {
          "id": "jee-neet-prep-101-l10-a2",
          "type": "animation",
          "title": "Chemistry Walkthrough",
          "content": "Stepwise walkthrough for JEE/NEET: Targeted Physics Remediation showing chemistry decisions and setup sheet checks."
        }
      ]
    },
    {
      id: "jee-neet-prep-101-l11",
      title: "JEE/NEET: Timed Chemistry Sprint",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "jee-neet-prep-101-l11-a1",
          "type": "image",
          "title": "Chemistry Snapshot",
          "content": "Visual anchor for JEE/NEET: Timed Chemistry Sprint with emphasis on chemistry within problem set planning."
        },
        {
          "id": "jee-neet-prep-101-l11-a2",
          "type": "animation",
          "title": "Physics Walkthrough",
          "content": "Stepwise walkthrough for JEE/NEET: Timed Chemistry Sprint showing physics decisions and setup sheet checks."
        }
      ]
    },
    {
      id: "jee-neet-prep-101-l12",
      title: "JEE/NEET: Mixed-Section Decision Drill",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "jee-neet-prep-101-l12-q1",
          "text": "JEE/NEET coaching notes show repeated physics misses in JEE/NEET: Mixed-Section Decision Drill. What should the learner do before the next practice set?",
          "skillId": "jee-neet-prep-101-skill-physics-workflow",
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
              "text": "Switch strands even though physics is still the top weakness."
            },
            {
              "id": "d",
              "text": "Rebuild the solve workflow on two representative practice set items, then retest with the same constraints."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the option that improves process quality, not just volume.",
          "explanation": "When physics is unstable, workflow repair plus immediate retest creates the fastest reliable gains."
        },
        {
          "id": "jee-neet-prep-101-l12-q2",
          "text": "In JEE/NEET: Mixed-Section Decision Drill, pace drops late even when early accuracy is strong. Which move best addresses this JEE/NEET pattern?",
          "skillId": "jee-neet-prep-101-skill-chemistry-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Introduce phase checkpoints and a cut-loss rule around high-friction chemistry items."
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
          "id": "jee-neet-prep-101-l12-q3",
          "text": "Which one-week plan best improves math/biology transfer for JEE and NEET readiness in JEE/NEET?",
          "skillId": "jee-neet-prep-101-skill-math-biology-transfer",
          "options": [
            {
              "id": "a",
              "text": "Use only untimed warmups and avoid mixed sets."
            },
            {
              "id": "b",
              "text": "Alternate mixed-difficulty sets with targeted remediation, then re-test the same math/biology objective under timing constraints."
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
          "explanation": "Transfer improves when correction cycles are followed by fresh timed retrieval of the same math/biology target."
        },
        {
          "id": "jee-neet-prep-101-l12-q4",
          "text": "After a JEE/NEET: Mixed-Section Decision Drill drill, which remediation should be prioritized first for score impact in JEE/NEET?",
          "skillId": "jee-neet-prep-101-skill-accuracy-speed-priority",
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
              "text": "Fix repeated accuracy speed breakdowns first because they scale across many items in the same run."
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
          "id": "jee-neet-prep-101-l12-q5",
          "text": "In JEE/NEET high-yield PCM/PCB block, attempt-order error appears during JEE/NEET: Mixed-Section Decision Drill. What is the strongest immediate correction?",
          "skillId": "jee-neet-prep-101-skill-physics-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore high-yield PCM/PCB block diagnostics and continue for volume."
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
              "text": "Use skip-return triggers to secure easier marks first."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the option that directly fixes attempt-order error.",
          "explanation": "Immediate correction inside high-yield PCM/PCB block improves transfer to the next timed practice set."
        },
        {
          "id": "jee-neet-prep-101-l12-q6",
          "text": "During JEE/NEET mixed timed block, sign/unit slip repeats in JEE/NEET: Mixed-Section Decision Drill. Which plan should be applied before the next retest?",
          "skillId": "jee-neet-prep-101-skill-chemistry-section-application",
          "options": [
            {
              "id": "a",
              "text": "Run sign-unit verification before final option lock. Track outcomes in a negative-marking control card and retest the same pattern."
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
          "explanation": "A logged correction cycle in negative-marking control card makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "jee-neet-prep-101-l12-ia1",
          "type": "matching_pairs",
          "title": "JEE/NEET: Mixed-Section Decision Drill Correction Alignment",
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
                "label": "High-confidence item lost due sign/unit mistake"
              },
              {
                "id": "l2",
                "label": "Too much time spent on one low-probability question"
              },
              {
                "id": "l3",
                "label": "Concept known but recall fails under pressure"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Add final sign and unit verification before locking response"
              },
              {
                "id": "r2",
                "label": "Use cut-loss timer and move to next high-yield item"
              },
              {
                "id": "r3",
                "label": "Run spaced recall drills with mixed timed question blocks"
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
          "id": "jee-neet-prep-101-l12-a1",
          "type": "image",
          "title": "Physics Snapshot",
          "content": "Visual anchor for JEE/NEET: Mixed-Section Decision Drill with emphasis on physics within practice set planning."
        },
        {
          "id": "jee-neet-prep-101-l12-a2",
          "type": "animation",
          "title": "Chemistry Walkthrough",
          "content": "Stepwise walkthrough for JEE/NEET: Mixed-Section Decision Drill showing chemistry decisions and strategy log checks."
        }
      ]
    },
    {
      id: "jee-neet-prep-101-l13",
      title: "JEE/NEET: Adaptive Retry and Transfer Check",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "jee-neet-prep-101-l13-a1",
          "type": "image",
          "title": "Physics Snapshot",
          "content": "Visual anchor for JEE/NEET: Adaptive Retry and Transfer Check with emphasis on physics within practice set planning."
        },
        {
          "id": "jee-neet-prep-101-l13-a2",
          "type": "animation",
          "title": "Chemistry Walkthrough",
          "content": "Stepwise walkthrough for JEE/NEET: Adaptive Retry and Transfer Check showing chemistry decisions and strategy log checks."
        }
      ]
    },
    {
      id: "jee-neet-prep-101-l14",
      title: "JEE/NEET: Jee And Neet Readiness Stability Checkpoint",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one physics decision rule in JEE/NEET: Jee And Neet Readiness Stability Checkpoint.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for chemistry before your next JEE and NEET readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "jee-neet-prep-101-l14-ia1",
          "type": "drag_and_drop",
          "title": "JEE/NEET: Jee And Neet Readiness Stability Checkpoint Decision-Phase Mapping",
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
                "label": "Attempt Order Plan"
              },
              {
                "id": "execute",
                "label": "Accuracy Pass"
              },
              {
                "id": "reflect",
                "label": "Negative-Mark Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Choose question attempt order by confidence and mark value",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Apply formula-memory plus unit-check verification before submit",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Track negative-mark causes and convert into avoidance rules",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "jee-neet-prep-101-l14-a1",
          "type": "image",
          "title": "Physics Snapshot",
          "content": "Visual anchor for JEE/NEET: Jee And Neet Readiness Stability Checkpoint with emphasis on physics within practice set planning."
        },
        {
          "id": "jee-neet-prep-101-l14-a2",
          "type": "animation",
          "title": "Chemistry Walkthrough",
          "content": "Stepwise walkthrough for JEE/NEET: Jee And Neet Readiness Stability Checkpoint showing chemistry decisions and strategy log checks."
        }
      ]
    },
    {
      id: "jee-neet-prep-101-l15",
      title: "JEE/NEET: Final 60-Day Exam Plan",
      type: "quiz",
      duration: 20,
      questions: [
        {
          "id": "jee-neet-prep-101-l15-q1",
          "text": "During JEE/NEET: Final 60-Day Exam Plan, early guesses are causing physics losses. Which intervention should happen first?",
          "skillId": "jee-neet-prep-101-skill-physics-workflow",
          "options": [
            {
              "id": "a",
              "text": "Keep the same pace and hope accuracy normalizes later."
            },
            {
              "id": "b",
              "text": "Memorize answer patterns instead of checking reasoning."
            },
            {
              "id": "c",
              "text": "Use a short verification pass and log decision triggers in a strategy log before restarting the drill."
            },
            {
              "id": "d",
              "text": "Delay all correction until the weekend review session."
            }
          ],
          "correctOptionId": "c",
          "hint": "Pick the option that creates immediate corrective feedback.",
          "explanation": "Quick structured verification catches repeatable process errors before they spread across the next set."
        },
        {
          "id": "jee-neet-prep-101-l15-q2",
          "text": "A JEE/NEET drill on JEE/NEET: Final 60-Day Exam Plan ends with unstable pacing. What should be diagnosed first?",
          "skillId": "jee-neet-prep-101-skill-chemistry-diagnosis",
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
              "text": "Increase question volume while keeping the same pacing errors."
            },
            {
              "id": "d",
              "text": "Pinpoint where chemistry decisions consume extra time, then redesign attempt order with checkpoints."
            }
          ],
          "correctOptionId": "d",
          "hint": "Look for the answer that isolates a measurable timing bottleneck.",
          "explanation": "Pacing issues usually come from specific chemistry decision points, not from total question count alone."
        },
        {
          "id": "jee-neet-prep-101-l15-q3",
          "text": "Which one-week sprint most improves math/biology transfer for JEE/NEET: Final 60-Day Exam Plan in JEE/NEET?",
          "skillId": "jee-neet-prep-101-skill-math-biology-transfer",
          "options": [
            {
              "id": "a",
              "text": "Run two targeted correction blocks, one mixed timed practice set, and one retest focused on the same math/biology objective."
            },
            {
              "id": "b",
              "text": "Use only untimed review until confidence feels high."
            },
            {
              "id": "c",
              "text": "Rotate random topics daily with no retest queue."
            },
            {
              "id": "d",
              "text": "Delay all error correction until the final day."
            }
          ],
          "correctOptionId": "a",
          "hint": "Best plans combine remediation and timed validation.",
          "explanation": "Transfer improves when learners re-encounter corrected skills under realistic constraints."
        },
        {
          "id": "jee-neet-prep-101-l15-q4",
          "text": "In JEE/NEET JEE/NEET: Final 60-Day Exam Plan, there are both content misses and pacing slips. What should the learner fix first?",
          "skillId": "jee-neet-prep-101-skill-accuracy-speed-priority",
          "options": [
            {
              "id": "a",
              "text": "Tackle the rarest concept gap first for variety."
            },
            {
              "id": "b",
              "text": "Prioritize the repeated accuracy speed process issue, then apply the same correction across the next timed block."
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
          "correctOptionId": "b",
          "hint": "Look for the answer that addresses recurrence.",
          "explanation": "Recurring process errors compound quickly, so fixing them first creates cleaner conditions for content correction."
        },
        {
          "id": "jee-neet-prep-101-l15-q5",
          "text": "In JEE/NEET high-yield PCM/PCB block, attempt-order error appears during JEE/NEET: Final 60-Day Exam Plan. What is the strongest immediate correction?",
          "skillId": "jee-neet-prep-101-skill-physics-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore high-yield PCM/PCB block diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Use skip-return triggers to secure easier marks first."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes attempt-order error.",
          "explanation": "Immediate correction inside high-yield PCM/PCB block improves transfer to the next timed practice set."
        },
        {
          "id": "jee-neet-prep-101-l15-q6",
          "text": "During JEE/NEET mixed timed block, sign/unit slip repeats in JEE/NEET: Final 60-Day Exam Plan. Which plan should be applied before the next retest?",
          "skillId": "jee-neet-prep-101-skill-chemistry-section-application",
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
              "text": "Run sign-unit verification before final option lock. Track outcomes in a negative-marking control card and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in negative-marking control card makes the pacing fix visible and repeatable."
        },
        {
          "id": "jee-neet-prep-101-l15-q7",
          "text": "In a full JEE/NEET mock, misses appear across multiple strands. What triage order is strongest?",
          "skillId": "jee-neet-prep-101-skill-mock-triage",
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
          "id": "jee-neet-prep-101-l15-q8",
          "text": "A learner finishes one section early but times out on another in JEE/NEET. What is the best pacing fix?",
          "skillId": "jee-neet-prep-101-skill-section-pacing",
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
          "id": "jee-neet-prep-101-l15-q9",
          "text": "Before submitting a high-stakes JEE/NEET section, which quality-control habit is most reliable?",
          "skillId": "jee-neet-prep-101-skill-quality-control",
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
          "id": "jee-neet-prep-101-l15-q10",
          "text": "After full-mock review in JEE/NEET, which next-step plan yields the best one-week improvement?",
          "skillId": "jee-neet-prep-101-skill-remediation-loop",
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
          "id": "jee-neet-prep-101-l15-ia1",
          "type": "sorting_buckets",
          "title": "JEE/NEET: Final 60-Day Exam Plan Error Taxonomy Sort",
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
                "label": "Concept Retention Gap"
              },
              {
                "id": "strategy",
                "label": "Attempt Strategy Gap"
              },
              {
                "id": "timing",
                "label": "Speed/Accuracy Gap"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "NCERT fact recall failed in biology section",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Attempted low-return question before easy marks",
                "correctBucketId": "strategy"
              },
              {
                "id": "i3",
                "label": "Late-section rush increased negative marks",
                "correctBucketId": "timing"
              },
              {
                "id": "i4",
                "label": "Error tagged but same attempt-order issue persisted",
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
          "id": "jee-neet-prep-101-l15-a1",
          "type": "image",
          "title": "Physics Snapshot",
          "content": "Visual anchor for JEE/NEET: Final 60-Day Exam Plan with emphasis on physics within practice set planning."
        },
        {
          "id": "jee-neet-prep-101-l15-a2",
          "type": "animation",
          "title": "Chemistry Walkthrough",
          "content": "Stepwise walkthrough for JEE/NEET: Final 60-Day Exam Plan showing chemistry decisions and strategy log checks."
        }
      ]
    }
  ],
};
