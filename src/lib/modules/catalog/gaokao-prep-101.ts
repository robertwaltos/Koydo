import type { LearningModule } from "@/lib/modules/types";

export const GaokaoPrep101Module: LearningModule = {
  id: "gaokao-prep-101",
  title: "Gaokao Prep Foundations",
  description: "Prepare for Gaokao with disciplined study cycles and exam-specific strategy.",
  subject: "Exam Prep",
  tags: ["exam-prep", "assessment", "advanced"],
  minAge: 15,
  maxAge: 20,
  version: "1.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Build structured Gaokao readiness workflows",
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
      id: "gaokao-prep-101-l01",
      title: "Gaokao: Gaokao Structure and Planning",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "gaokao-prep-101-l01-a1",
          "type": "image",
          "title": "Core Subjects Snapshot",
          "content": "Visual anchor for Gaokao: Gaokao Structure and Planning with emphasis on core subjects within practice set planning."
        },
        {
          "id": "gaokao-prep-101-l01-a2",
          "type": "animation",
          "title": "Speed Walkthrough",
          "content": "Stepwise walkthrough for Gaokao: Gaokao Structure and Planning showing speed decisions and strategy log checks."
        }
      ]
    },
    {
      id: "gaokao-prep-101-l02",
      title: "Gaokao: Chinese Language Performance",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one core subjects decision rule in Gaokao: Chinese Language Performance.",
          "Apply it in one passage set and show how it improves evidence and language precision.",
          "Set one next-step target for speed before your next Gaokao readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "gaokao-prep-101-l02-ia1",
          "type": "drag_and_drop",
          "title": "Gaokao: Chinese Language Performance Decision-Phase Mapping",
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
                "label": "Discipline Plan"
              },
              {
                "id": "execute",
                "label": "Section Control"
              },
              {
                "id": "reflect",
                "label": "Notebook Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set daily Gaokao subject cycles with strict recovery windows",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use section checkpoints to protect accuracy under pace pressure",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Update error notebook with cause, fix, and retest date",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "gaokao-prep-101-l02-a1",
          "type": "image",
          "title": "Core Subjects Snapshot",
          "content": "Visual anchor for Gaokao: Chinese Language Performance with emphasis on core subjects within passage set planning."
        },
        {
          "id": "gaokao-prep-101-l02-a2",
          "type": "animation",
          "title": "Speed Walkthrough",
          "content": "Stepwise walkthrough for Gaokao: Chinese Language Performance showing speed decisions and annotation map checks."
        }
      ]
    },
    {
      id: "gaokao-prep-101-l03",
      title: "Gaokao: Mathematics Intensive Strategy",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "gaokao-prep-101-l03-q1",
          "text": "During Gaokao: Mathematics Intensive Strategy, early guesses are causing core subjects losses. Which intervention should happen first?",
          "skillId": "gaokao-prep-101-skill-core-subjects-workflow",
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
          "id": "gaokao-prep-101-l03-q2",
          "text": "A Gaokao drill on Gaokao: Mathematics Intensive Strategy ends with unstable pacing. What should be diagnosed first?",
          "skillId": "gaokao-prep-101-skill-speed-diagnosis",
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
              "text": "Pinpoint where speed decisions consume extra time, then redesign attempt order with checkpoints."
            }
          ],
          "correctOptionId": "d",
          "hint": "Look for the answer that isolates a measurable timing bottleneck.",
          "explanation": "Pacing issues usually come from specific speed decision points, not from total question count alone."
        },
        {
          "id": "gaokao-prep-101-l03-q3",
          "text": "Which one-week sprint most improves accuracy transfer for Gaokao: Mathematics Intensive Strategy in Gaokao?",
          "skillId": "gaokao-prep-101-skill-accuracy-transfer",
          "options": [
            {
              "id": "a",
              "text": "Run two targeted correction blocks, one mixed timed problem set, and one retest focused on the same accuracy objective."
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
          "id": "gaokao-prep-101-l03-q4",
          "text": "In Gaokao Gaokao: Mathematics Intensive Strategy, there are both content misses and pacing slips. What should the learner fix first?",
          "skillId": "gaokao-prep-101-skill-stress-control-priority",
          "options": [
            {
              "id": "a",
              "text": "Tackle the rarest concept gap first for variety."
            },
            {
              "id": "b",
              "text": "Prioritize the repeated stress control process issue, then apply the same correction across the next timed block."
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
          "id": "gaokao-prep-101-l03-q5",
          "text": "In Gaokao core language section, inference cue miss appears during Gaokao: Mathematics Intensive Strategy. What is the strongest immediate correction?",
          "skillId": "gaokao-prep-101-skill-core-subjects-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore core language section diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Mark transition cues and author stance before final response choice."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes inference cue miss.",
          "explanation": "Immediate correction inside core language section improves transfer to the next timed problem set."
        },
        {
          "id": "gaokao-prep-101-l03-q6",
          "text": "During Gaokao mathematics section, mid-section pace collapse repeats in Gaokao: Mathematics Intensive Strategy. Which plan should be applied before the next retest?",
          "skillId": "gaokao-prep-101-skill-speed-section-application",
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
              "text": "Trigger skip-return protocol on high-friction clusters. Track outcomes in an error notebook retest sheet and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in error notebook retest sheet makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "gaokao-prep-101-l03-ia1",
          "type": "matching_pairs",
          "title": "Gaokao: Mathematics Intensive Strategy Correction Alignment",
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
                "label": "Chinese reading response misses key inference cue"
              },
              {
                "id": "l2",
                "label": "Math section stalls on mid-paper hard cluster"
              },
              {
                "id": "l3",
                "label": "Error notebook exists but review loop is inconsistent"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Highlight claim transition words before drafting response"
              },
              {
                "id": "r2",
                "label": "Apply skip-return protocol and secure medium-difficulty marks first"
              },
              {
                "id": "r3",
                "label": "Schedule fixed weekly retest of top repeated errors"
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
          "id": "gaokao-prep-101-l03-a1",
          "type": "image",
          "title": "Core Subjects Snapshot",
          "content": "Visual anchor for Gaokao: Mathematics Intensive Strategy with emphasis on core subjects within problem set planning."
        },
        {
          "id": "gaokao-prep-101-l03-a2",
          "type": "animation",
          "title": "Speed Walkthrough",
          "content": "Stepwise walkthrough for Gaokao: Mathematics Intensive Strategy showing speed decisions and setup sheet checks."
        }
      ]
    },
    {
      id: "gaokao-prep-101-l04",
      title: "Gaokao: English Exam Techniques",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one core subjects decision rule in Gaokao: English Exam Techniques.",
          "Apply it in one passage set and show how it improves evidence and language precision.",
          "Set one next-step target for speed before your next Gaokao readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "gaokao-prep-101-l04-ia1",
          "type": "drag_and_drop",
          "title": "Gaokao: English Exam Techniques Decision-Phase Mapping",
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
                "label": "Discipline Plan"
              },
              {
                "id": "execute",
                "label": "Section Control"
              },
              {
                "id": "reflect",
                "label": "Notebook Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set daily Gaokao subject cycles with strict recovery windows",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use section checkpoints to protect accuracy under pace pressure",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Update error notebook with cause, fix, and retest date",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "gaokao-prep-101-l04-a1",
          "type": "image",
          "title": "Core Subjects Snapshot",
          "content": "Visual anchor for Gaokao: English Exam Techniques with emphasis on core subjects within passage set planning."
        },
        {
          "id": "gaokao-prep-101-l04-a2",
          "type": "animation",
          "title": "Speed Walkthrough",
          "content": "Stepwise walkthrough for Gaokao: English Exam Techniques showing speed decisions and annotation map checks."
        }
      ]
    },
    {
      id: "gaokao-prep-101-l05",
      title: "Gaokao: Elective Subject Mastery",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "gaokao-prep-101-l05-a1",
          "type": "image",
          "title": "Core Subjects Snapshot",
          "content": "Visual anchor for Gaokao: Elective Subject Mastery with emphasis on core subjects within practice set planning."
        },
        {
          "id": "gaokao-prep-101-l05-a2",
          "type": "animation",
          "title": "Speed Walkthrough",
          "content": "Stepwise walkthrough for Gaokao: Elective Subject Mastery showing speed decisions and strategy log checks."
        }
      ]
    },
    {
      id: "gaokao-prep-101-l06",
      title: "Gaokao: Speed and Accuracy Training",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "gaokao-prep-101-l06-q1",
          "text": "Gaokao coaching notes show repeated speed misses in Gaokao: Speed and Accuracy Training. What should the learner do before the next timed block?",
          "skillId": "gaokao-prep-101-skill-speed-workflow",
          "options": [
            {
              "id": "a",
              "text": "Jump to harder content before confirming the root cause."
            },
            {
              "id": "b",
              "text": "Rebuild the solve workflow on two representative timed block items, then retest with the same constraints."
            },
            {
              "id": "c",
              "text": "Track only final score and ignore process notes."
            },
            {
              "id": "d",
              "text": "Switch strands even though speed is still the top weakness."
            }
          ],
          "correctOptionId": "b",
          "hint": "Choose the option that improves process quality, not just volume.",
          "explanation": "When speed is unstable, workflow repair plus immediate retest creates the fastest reliable gains."
        },
        {
          "id": "gaokao-prep-101-l06-q2",
          "text": "In Gaokao: Speed and Accuracy Training, pace drops late even when early accuracy is strong. Which move best addresses this Gaokao pattern?",
          "skillId": "gaokao-prep-101-skill-accuracy-diagnosis",
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
              "text": "Introduce phase checkpoints and a cut-loss rule around high-friction accuracy items."
            },
            {
              "id": "d",
              "text": "Use random breaks with no fixed transition points."
            }
          ],
          "correctOptionId": "c",
          "hint": "Look for a solution tied to timing behavior, not memory.",
          "explanation": "Late-section drift usually comes from unmanaged friction points, not lack of content knowledge."
        },
        {
          "id": "gaokao-prep-101-l06-q3",
          "text": "Which one-week plan best improves core subjects transfer for Gaokao readiness in Gaokao?",
          "skillId": "gaokao-prep-101-skill-core-subjects-transfer",
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
              "text": "Delay all review tasks until the final week."
            },
            {
              "id": "d",
              "text": "Alternate mixed-difficulty sets with targeted remediation, then re-test the same core subjects objective under timing constraints."
            }
          ],
          "correctOptionId": "d",
          "hint": "The strongest plan combines correction and timed transfer.",
          "explanation": "Transfer improves when correction cycles are followed by fresh timed retrieval of the same core subjects target."
        },
        {
          "id": "gaokao-prep-101-l06-q4",
          "text": "After a Gaokao: Speed and Accuracy Training drill, which remediation should be prioritized first for score impact in Gaokao?",
          "skillId": "gaokao-prep-101-skill-stress-control-priority",
          "options": [
            {
              "id": "a",
              "text": "Fix repeated stress control breakdowns first because they scale across many items in the same run."
            },
            {
              "id": "b",
              "text": "Start with already-mastered tasks to build comfort."
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
          "correctOptionId": "a",
          "hint": "Choose the fix with the widest downstream effect.",
          "explanation": "High-frequency process breakdowns usually produce the largest immediate score delta when corrected first."
        },
        {
          "id": "gaokao-prep-101-l06-q5",
          "text": "In Gaokao core language section, inference cue miss appears during Gaokao: Speed and Accuracy Training. What is the strongest immediate correction?",
          "skillId": "gaokao-prep-101-skill-speed-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore core language section diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Mark transition cues and author stance before final response choice."
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
          "hint": "Choose the option that directly fixes inference cue miss.",
          "explanation": "Immediate correction inside core language section improves transfer to the next timed timed block."
        },
        {
          "id": "gaokao-prep-101-l06-q6",
          "text": "During Gaokao mathematics section, mid-section pace collapse repeats in Gaokao: Speed and Accuracy Training. Which plan should be applied before the next retest?",
          "skillId": "gaokao-prep-101-skill-accuracy-section-application",
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
              "text": "Trigger skip-return protocol on high-friction clusters. Track outcomes in an error notebook retest sheet and retest the same pattern."
            },
            {
              "id": "d",
              "text": "Retake the section with no checkpoint changes."
            }
          ],
          "correctOptionId": "c",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in error notebook retest sheet makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "gaokao-prep-101-l06-ia1",
          "type": "drag_and_drop",
          "title": "Gaokao: Speed and Accuracy Training Pace Control Board",
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
                "label": "Set daily Gaokao subject cycles with strict recovery windows",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use section checkpoints to protect accuracy under pace pressure",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Update error notebook with cause, fix, and retest date",
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
          "id": "gaokao-prep-101-l06-a1",
          "type": "image",
          "title": "Speed Snapshot",
          "content": "Visual anchor for Gaokao: Speed and Accuracy Training with emphasis on speed within timed block planning."
        },
        {
          "id": "gaokao-prep-101-l06-a2",
          "type": "animation",
          "title": "Accuracy Walkthrough",
          "content": "Stepwise walkthrough for Gaokao: Speed and Accuracy Training showing accuracy decisions and checkpoint log checks."
        }
      ]
    },
    {
      id: "gaokao-prep-101-l07",
      title: "Gaokao: Error Notebook Method",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "gaokao-prep-101-l07-a1",
          "type": "image",
          "title": "Core Subjects Snapshot",
          "content": "Visual anchor for Gaokao: Error Notebook Method with emphasis on core subjects within review cycle planning."
        },
        {
          "id": "gaokao-prep-101-l07-a2",
          "type": "animation",
          "title": "Speed Walkthrough",
          "content": "Stepwise walkthrough for Gaokao: Error Notebook Method showing speed decisions and error taxonomy checks."
        }
      ]
    },
    {
      id: "gaokao-prep-101-l08",
      title: "Gaokao: Past Paper Sequencing",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one stress control decision rule in Gaokao: Past Paper Sequencing.",
          "Apply it in one section simulation and show how it improves section execution consistency.",
          "Set one next-step target for core subjects before your next Gaokao readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "gaokao-prep-101-l08-ia1",
          "type": "drag_and_drop",
          "title": "Gaokao: Past Paper Sequencing Attempt-Order Builder",
          "description": "Place each move in the strongest simulation sequence.",
          "estimatedMinutes": 9,
          "difficultyLevel": "adaptive",
          "instructions": [
            "Assign each move to Launch, Stabilize, or Close.",
            "Check ordering logic.",
            "Carry one sequence rule into your next simulation."
          ],
          "data": {
            "targets": [
              {
                "id": "launch",
                "label": "Launch"
              },
              {
                "id": "stabilize",
                "label": "Stabilize"
              },
              {
                "id": "close",
                "label": "Close"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set daily Gaokao subject cycles with strict recovery windows",
                "correctTargetId": "launch"
              },
              {
                "id": "d2",
                "label": "Use section checkpoints to protect accuracy under pace pressure",
                "correctTargetId": "stabilize"
              },
              {
                "id": "d3",
                "label": "Update error notebook with cause, fix, and retest date",
                "correctTargetId": "close"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "gaokao-prep-101-l08-a1",
          "type": "image",
          "title": "Stress Control Snapshot",
          "content": "Visual anchor for Gaokao: Past Paper Sequencing with emphasis on stress control within section simulation planning."
        },
        {
          "id": "gaokao-prep-101-l08-a2",
          "type": "animation",
          "title": "Core Subjects Walkthrough",
          "content": "Stepwise walkthrough for Gaokao: Past Paper Sequencing showing core subjects decisions and attempt-order sheet checks."
        }
      ]
    },
    {
      id: "gaokao-prep-101-l09",
      title: "Gaokao: Performance Week Simulation",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "gaokao-prep-101-l09-q1",
          "text": "In Gaokao: Performance Week Simulation, a learner keeps missing stress control items during Gaokao practice. Which adjustment should happen before the next timed section simulation?",
          "skillId": "gaokao-prep-101-skill-stress-control-workflow",
          "options": [
            {
              "id": "a",
              "text": "Run a short stress control checkpoint routine and annotate why each miss occurred in an attempt-order sheet before retesting."
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
              "text": "Switch topics even if stress control is still the dominant weakness."
            }
          ],
          "correctOptionId": "a",
          "hint": "Choose the action that creates a repeatable feedback loop for stress control.",
          "explanation": "Fast targeted feedback plus immediate correction is the most reliable way to improve stress control."
        },
        {
          "id": "gaokao-prep-101-l09-q2",
          "text": "A Gaokao Gaokao: Performance Week Simulation session ends with unstable timing. What should be diagnosed first?",
          "skillId": "gaokao-prep-101-skill-core-subjects-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Retake the session immediately without diagnostics."
            },
            {
              "id": "b",
              "text": "Locate the exact core subjects decision point where time spikes, then set micro-checkpoints for that phase."
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
          "id": "gaokao-prep-101-l09-q3",
          "text": "Gaokao practice shows correction is happening but not sticking in Gaokao: Performance Week Simulation. What plan fixes this fastest?",
          "skillId": "gaokao-prep-101-skill-speed-transfer",
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
              "text": "Pair each corrected speed error with a near-transfer item in the next timed block and track it in an attempt-order sheet."
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
          "id": "gaokao-prep-101-l09-q4",
          "text": "During post-drill review for Gaokao: Performance Week Simulation, which fix should be prioritized first for score impact in Gaokao?",
          "skillId": "gaokao-prep-101-skill-accuracy-priority",
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
              "text": "Address repeated accuracy and pacing errors first because they affect many questions in one run."
            }
          ],
          "correctOptionId": "d",
          "hint": "Prioritize changes that influence the largest question set.",
          "explanation": "Highest-impact remediation usually targets repeated timing and process breakdowns before edge-case content gaps."
        },
        {
          "id": "gaokao-prep-101-l09-q5",
          "text": "In Gaokao core language section, inference cue miss appears during Gaokao: Performance Week Simulation. What is the strongest immediate correction?",
          "skillId": "gaokao-prep-101-skill-stress-control-section-application",
          "options": [
            {
              "id": "a",
              "text": "Mark transition cues and author stance before final response choice."
            },
            {
              "id": "b",
              "text": "Ignore core language section diagnostics and continue for volume."
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
          "hint": "Choose the option that directly fixes inference cue miss.",
          "explanation": "Immediate correction inside core language section improves transfer to the next timed section simulation."
        },
        {
          "id": "gaokao-prep-101-l09-q6",
          "text": "During Gaokao mathematics section, mid-section pace collapse repeats in Gaokao: Performance Week Simulation. Which plan should be applied before the next retest?",
          "skillId": "gaokao-prep-101-skill-core-subjects-section-application",
          "options": [
            {
              "id": "a",
              "text": "Switch to new content before validating the fix."
            },
            {
              "id": "b",
              "text": "Trigger skip-return protocol on high-friction clusters. Track outcomes in an error notebook retest sheet and retest the same pattern."
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
          "explanation": "A logged correction cycle in error notebook retest sheet makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "gaokao-prep-101-l09-ia1",
          "type": "sorting_buckets",
          "title": "Gaokao: Performance Week Simulation Attempt-Order Sort",
          "description": "Sort each scenario into first-pass, flag, or deep-review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "adaptive",
          "instructions": [
            "Read each scenario.",
            "Sort into the best execution lane.",
            "Use the result to set your next section workflow."
          ],
          "data": {
            "buckets": [
              {
                "id": "first_pass",
                "label": "First Pass"
              },
              {
                "id": "flag",
                "label": "Flag and Return"
              },
              {
                "id": "deep_review",
                "label": "Deep Review"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Section end rushed with preventable accuracy drop",
                "correctBucketId": "flag"
              },
              {
                "id": "i2",
                "label": "No skip-return trigger on difficult cluster",
                "correctBucketId": "flag"
              },
              {
                "id": "i3",
                "label": "Repeated miss on high-frequency mathematics pattern",
                "correctBucketId": "deep_review"
              },
              {
                "id": "i4",
                "label": "High-confidence medium-difficulty cluster",
                "correctBucketId": "first_pass"
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
          "id": "gaokao-prep-101-l09-a1",
          "type": "image",
          "title": "Stress Control Snapshot",
          "content": "Visual anchor for Gaokao: Performance Week Simulation with emphasis on stress control within section simulation planning."
        },
        {
          "id": "gaokao-prep-101-l09-a2",
          "type": "animation",
          "title": "Core Subjects Walkthrough",
          "content": "Stepwise walkthrough for Gaokao: Performance Week Simulation showing core subjects decisions and attempt-order sheet checks."
        }
      ]
    },
    {
      id: "gaokao-prep-101-l10",
      title: "Gaokao: Targeted Core Subjects Remediation",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one core subjects decision rule in Gaokao: Targeted Core Subjects Remediation.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for speed before your next Gaokao readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "gaokao-prep-101-l10-ia1",
          "type": "drag_and_drop",
          "title": "Gaokao: Targeted Core Subjects Remediation Decision-Phase Mapping",
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
                "label": "Discipline Plan"
              },
              {
                "id": "execute",
                "label": "Section Control"
              },
              {
                "id": "reflect",
                "label": "Notebook Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set daily Gaokao subject cycles with strict recovery windows",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use section checkpoints to protect accuracy under pace pressure",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Update error notebook with cause, fix, and retest date",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "gaokao-prep-101-l10-a1",
          "type": "image",
          "title": "Core Subjects Snapshot",
          "content": "Visual anchor for Gaokao: Targeted Core Subjects Remediation with emphasis on core subjects within practice set planning."
        },
        {
          "id": "gaokao-prep-101-l10-a2",
          "type": "animation",
          "title": "Speed Walkthrough",
          "content": "Stepwise walkthrough for Gaokao: Targeted Core Subjects Remediation showing speed decisions and strategy log checks."
        }
      ]
    },
    {
      id: "gaokao-prep-101-l11",
      title: "Gaokao: Timed Speed Sprint",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "gaokao-prep-101-l11-a1",
          "type": "image",
          "title": "Speed Snapshot",
          "content": "Visual anchor for Gaokao: Timed Speed Sprint with emphasis on speed within timed block planning."
        },
        {
          "id": "gaokao-prep-101-l11-a2",
          "type": "animation",
          "title": "Core Subjects Walkthrough",
          "content": "Stepwise walkthrough for Gaokao: Timed Speed Sprint showing core subjects decisions and checkpoint log checks."
        }
      ]
    },
    {
      id: "gaokao-prep-101-l12",
      title: "Gaokao: Mixed-Section Decision Drill",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "gaokao-prep-101-l12-q1",
          "text": "During Gaokao: Mixed-Section Decision Drill, early guesses are causing core subjects losses. Which intervention should happen first?",
          "skillId": "gaokao-prep-101-skill-core-subjects-workflow",
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
              "text": "Delay all correction until the weekend review session."
            },
            {
              "id": "d",
              "text": "Use a short verification pass and log decision triggers in a strategy log before restarting the drill."
            }
          ],
          "correctOptionId": "d",
          "hint": "Pick the option that creates immediate corrective feedback.",
          "explanation": "Quick structured verification catches repeatable process errors before they spread across the next set."
        },
        {
          "id": "gaokao-prep-101-l12-q2",
          "text": "A Gaokao drill on Gaokao: Mixed-Section Decision Drill ends with unstable pacing. What should be diagnosed first?",
          "skillId": "gaokao-prep-101-skill-speed-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Pinpoint where speed decisions consume extra time, then redesign attempt order with checkpoints."
            },
            {
              "id": "b",
              "text": "Retake the same drill immediately without analysis."
            },
            {
              "id": "c",
              "text": "Memorize answer keys without tracking timing behavior."
            },
            {
              "id": "d",
              "text": "Increase question volume while keeping the same pacing errors."
            }
          ],
          "correctOptionId": "a",
          "hint": "Look for the answer that isolates a measurable timing bottleneck.",
          "explanation": "Pacing issues usually come from specific speed decision points, not from total question count alone."
        },
        {
          "id": "gaokao-prep-101-l12-q3",
          "text": "Which one-week sprint most improves accuracy transfer for Gaokao: Mixed-Section Decision Drill in Gaokao?",
          "skillId": "gaokao-prep-101-skill-accuracy-transfer",
          "options": [
            {
              "id": "a",
              "text": "Use only untimed review until confidence feels high."
            },
            {
              "id": "b",
              "text": "Run two targeted correction blocks, one mixed timed practice set, and one retest focused on the same accuracy objective."
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
          "correctOptionId": "b",
          "hint": "Best plans combine remediation and timed validation.",
          "explanation": "Transfer improves when learners re-encounter corrected skills under realistic constraints."
        },
        {
          "id": "gaokao-prep-101-l12-q4",
          "text": "In Gaokao Gaokao: Mixed-Section Decision Drill, there are both content misses and pacing slips. What should the learner fix first?",
          "skillId": "gaokao-prep-101-skill-stress-control-priority",
          "options": [
            {
              "id": "a",
              "text": "Tackle the rarest concept gap first for variety."
            },
            {
              "id": "b",
              "text": "Review only confidence items and skip timing analysis."
            },
            {
              "id": "c",
              "text": "Prioritize the repeated stress control process issue, then apply the same correction across the next timed block."
            },
            {
              "id": "d",
              "text": "Change resources without identifying what failed."
            }
          ],
          "correctOptionId": "c",
          "hint": "Look for the answer that addresses recurrence.",
          "explanation": "Recurring process errors compound quickly, so fixing them first creates cleaner conditions for content correction."
        },
        {
          "id": "gaokao-prep-101-l12-q5",
          "text": "In Gaokao core language section, inference cue miss appears during Gaokao: Mixed-Section Decision Drill. What is the strongest immediate correction?",
          "skillId": "gaokao-prep-101-skill-core-subjects-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore core language section diagnostics and continue for volume."
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
              "text": "Mark transition cues and author stance before final response choice."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the option that directly fixes inference cue miss.",
          "explanation": "Immediate correction inside core language section improves transfer to the next timed practice set."
        },
        {
          "id": "gaokao-prep-101-l12-q6",
          "text": "During Gaokao mathematics section, mid-section pace collapse repeats in Gaokao: Mixed-Section Decision Drill. Which plan should be applied before the next retest?",
          "skillId": "gaokao-prep-101-skill-speed-section-application",
          "options": [
            {
              "id": "a",
              "text": "Trigger skip-return protocol on high-friction clusters. Track outcomes in an error notebook retest sheet and retest the same pattern."
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
          "explanation": "A logged correction cycle in error notebook retest sheet makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "gaokao-prep-101-l12-ia1",
          "type": "matching_pairs",
          "title": "Gaokao: Mixed-Section Decision Drill Correction Alignment",
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
                "label": "Chinese reading response misses key inference cue"
              },
              {
                "id": "l2",
                "label": "Math section stalls on mid-paper hard cluster"
              },
              {
                "id": "l3",
                "label": "Error notebook exists but review loop is inconsistent"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Highlight claim transition words before drafting response"
              },
              {
                "id": "r2",
                "label": "Apply skip-return protocol and secure medium-difficulty marks first"
              },
              {
                "id": "r3",
                "label": "Schedule fixed weekly retest of top repeated errors"
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
          "id": "gaokao-prep-101-l12-a1",
          "type": "image",
          "title": "Core Subjects Snapshot",
          "content": "Visual anchor for Gaokao: Mixed-Section Decision Drill with emphasis on core subjects within practice set planning."
        },
        {
          "id": "gaokao-prep-101-l12-a2",
          "type": "animation",
          "title": "Speed Walkthrough",
          "content": "Stepwise walkthrough for Gaokao: Mixed-Section Decision Drill showing speed decisions and strategy log checks."
        }
      ]
    },
    {
      id: "gaokao-prep-101-l13",
      title: "Gaokao: Adaptive Retry and Transfer Check",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "gaokao-prep-101-l13-a1",
          "type": "image",
          "title": "Core Subjects Snapshot",
          "content": "Visual anchor for Gaokao: Adaptive Retry and Transfer Check with emphasis on core subjects within practice set planning."
        },
        {
          "id": "gaokao-prep-101-l13-a2",
          "type": "animation",
          "title": "Speed Walkthrough",
          "content": "Stepwise walkthrough for Gaokao: Adaptive Retry and Transfer Check showing speed decisions and strategy log checks."
        }
      ]
    },
    {
      id: "gaokao-prep-101-l14",
      title: "Gaokao: Gaokao Readiness Stability Checkpoint",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one core subjects decision rule in Gaokao: Gaokao Readiness Stability Checkpoint.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for speed before your next Gaokao readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "gaokao-prep-101-l14-ia1",
          "type": "drag_and_drop",
          "title": "Gaokao: Gaokao Readiness Stability Checkpoint Decision-Phase Mapping",
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
                "label": "Discipline Plan"
              },
              {
                "id": "execute",
                "label": "Section Control"
              },
              {
                "id": "reflect",
                "label": "Notebook Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set daily Gaokao subject cycles with strict recovery windows",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use section checkpoints to protect accuracy under pace pressure",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Update error notebook with cause, fix, and retest date",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "gaokao-prep-101-l14-a1",
          "type": "image",
          "title": "Core Subjects Snapshot",
          "content": "Visual anchor for Gaokao: Gaokao Readiness Stability Checkpoint with emphasis on core subjects within practice set planning."
        },
        {
          "id": "gaokao-prep-101-l14-a2",
          "type": "animation",
          "title": "Speed Walkthrough",
          "content": "Stepwise walkthrough for Gaokao: Gaokao Readiness Stability Checkpoint showing speed decisions and strategy log checks."
        }
      ]
    },
    {
      id: "gaokao-prep-101-l15",
      title: "Gaokao: Final Sprint and Recovery Plan",
      type: "quiz",
      duration: 20,
      questions: [
        {
          "id": "gaokao-prep-101-l15-q1",
          "text": "Gaokao coaching notes show repeated speed misses in Gaokao: Final Sprint and Recovery Plan. What should the learner do before the next timed block?",
          "skillId": "gaokao-prep-101-skill-speed-workflow",
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
              "text": "Rebuild the solve workflow on two representative timed block items, then retest with the same constraints."
            },
            {
              "id": "d",
              "text": "Switch strands even though speed is still the top weakness."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that improves process quality, not just volume.",
          "explanation": "When speed is unstable, workflow repair plus immediate retest creates the fastest reliable gains."
        },
        {
          "id": "gaokao-prep-101-l15-q2",
          "text": "In Gaokao: Final Sprint and Recovery Plan, pace drops late even when early accuracy is strong. Which move best addresses this Gaokao pattern?",
          "skillId": "gaokao-prep-101-skill-core-subjects-diagnosis",
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
              "text": "Introduce phase checkpoints and a cut-loss rule around high-friction core subjects items."
            }
          ],
          "correctOptionId": "d",
          "hint": "Look for a solution tied to timing behavior, not memory.",
          "explanation": "Late-section drift usually comes from unmanaged friction points, not lack of content knowledge."
        },
        {
          "id": "gaokao-prep-101-l15-q3",
          "text": "Which one-week plan best improves accuracy transfer for Gaokao readiness in Gaokao?",
          "skillId": "gaokao-prep-101-skill-accuracy-transfer",
          "options": [
            {
              "id": "a",
              "text": "Alternate mixed-difficulty sets with targeted remediation, then re-test the same accuracy objective under timing constraints."
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
          "explanation": "Transfer improves when correction cycles are followed by fresh timed retrieval of the same accuracy target."
        },
        {
          "id": "gaokao-prep-101-l15-q4",
          "text": "After a Gaokao: Final Sprint and Recovery Plan drill, which remediation should be prioritized first for score impact in Gaokao?",
          "skillId": "gaokao-prep-101-skill-stress-control-priority",
          "options": [
            {
              "id": "a",
              "text": "Start with already-mastered tasks to build comfort."
            },
            {
              "id": "b",
              "text": "Fix repeated stress control breakdowns first because they scale across many items in the same run."
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
          "id": "gaokao-prep-101-l15-q5",
          "text": "In Gaokao core language section, inference cue miss appears during Gaokao: Final Sprint and Recovery Plan. What is the strongest immediate correction?",
          "skillId": "gaokao-prep-101-skill-speed-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore core language section diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Mark transition cues and author stance before final response choice."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes inference cue miss.",
          "explanation": "Immediate correction inside core language section improves transfer to the next timed timed block."
        },
        {
          "id": "gaokao-prep-101-l15-q6",
          "text": "During Gaokao mathematics section, mid-section pace collapse repeats in Gaokao: Final Sprint and Recovery Plan. Which plan should be applied before the next retest?",
          "skillId": "gaokao-prep-101-skill-core-subjects-section-application",
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
              "text": "Trigger skip-return protocol on high-friction clusters. Track outcomes in an error notebook retest sheet and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in error notebook retest sheet makes the pacing fix visible and repeatable."
        },
        {
          "id": "gaokao-prep-101-l15-q7",
          "text": "In a full Gaokao mock, misses appear across multiple strands. What triage order is strongest?",
          "skillId": "gaokao-prep-101-skill-mock-triage",
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
          "id": "gaokao-prep-101-l15-q8",
          "text": "A learner finishes one section early but times out on another in Gaokao. What is the best pacing fix?",
          "skillId": "gaokao-prep-101-skill-section-pacing",
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
          "id": "gaokao-prep-101-l15-q9",
          "text": "Before submitting a high-stakes Gaokao section, which quality-control habit is most reliable?",
          "skillId": "gaokao-prep-101-skill-quality-control",
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
          "id": "gaokao-prep-101-l15-q10",
          "text": "After full-mock review in Gaokao, which next-step plan yields the best one-week improvement?",
          "skillId": "gaokao-prep-101-skill-remediation-loop",
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
          "id": "gaokao-prep-101-l15-ia1",
          "type": "sorting_buckets",
          "title": "Gaokao: Final Sprint and Recovery Plan Error Taxonomy Sort",
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
                "label": "Core Subject Gap"
              },
              {
                "id": "strategy",
                "label": "Execution Strategy Gap"
              },
              {
                "id": "timing",
                "label": "Mock Pace Gap"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Repeated miss on high-frequency mathematics pattern",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "No skip-return trigger on difficult cluster",
                "correctBucketId": "strategy"
              },
              {
                "id": "i3",
                "label": "Section end rushed with preventable accuracy drop",
                "correctBucketId": "timing"
              },
              {
                "id": "i4",
                "label": "Notebook correction not validated in next simulation",
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
          "id": "gaokao-prep-101-l15-a1",
          "type": "image",
          "title": "Speed Snapshot",
          "content": "Visual anchor for Gaokao: Final Sprint and Recovery Plan with emphasis on speed within timed block planning."
        },
        {
          "id": "gaokao-prep-101-l15-a2",
          "type": "animation",
          "title": "Core Subjects Walkthrough",
          "content": "Stepwise walkthrough for Gaokao: Final Sprint and Recovery Plan showing core subjects decisions and checkpoint log checks."
        }
      ]
    }
  ],
};
