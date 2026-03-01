import type { LearningModule } from "@/lib/modules/types";

export const ALevelPrep101Module: LearningModule = {
  id: "a-level-prep-101",
  title: "A-Level Prep Foundations",
  description: "Strengthen deep content mastery and analytical writing for A-Level exams.",
  subject: "Exam Prep",
  tags: ["exam-prep", "assessment", "advanced"],
  minAge: 15,
  maxAge: 19,
  version: "1.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Build structured A-Level readiness workflows",
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
      id: "a-level-prep-101-l01",
      title: "A-Level: A-Level Standards and Targets",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "a-level-prep-101-l01-a1",
          "type": "image",
          "title": "Depth Mastery Snapshot",
          "content": "Visual anchor for A-Level: A-Level Standards and Targets with emphasis on depth mastery within practice set planning."
        },
        {
          "id": "a-level-prep-101-l01-a2",
          "type": "animation",
          "title": "Analysis Walkthrough",
          "content": "Stepwise walkthrough for A-Level: A-Level Standards and Targets showing analysis decisions and strategy log checks."
        }
      ]
    },
    {
      id: "a-level-prep-101-l02",
      title: "A-Level: Knowledge Retrieval Systems",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one depth mastery decision rule in A-Level: Knowledge Retrieval Systems.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for analysis before your next A-Level readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "a-level-prep-101-l02-ia1",
          "type": "drag_and_drop",
          "title": "A-Level: Knowledge Retrieval Systems Decision-Phase Mapping",
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
                "label": "Synoptic Plan"
              },
              {
                "id": "execute",
                "label": "Analytical Execution"
              },
              {
                "id": "reflect",
                "label": "Depth Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Prioritize A-Level high-weight synoptic topics before timed papers",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Structure argument with claim, evidence, analysis, and evaluation",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Audit depth, precision, and link quality after each practice response",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "a-level-prep-101-l02-a1",
          "type": "image",
          "title": "Depth Mastery Snapshot",
          "content": "Visual anchor for A-Level: Knowledge Retrieval Systems with emphasis on depth mastery within practice set planning."
        },
        {
          "id": "a-level-prep-101-l02-a2",
          "type": "animation",
          "title": "Analysis Walkthrough",
          "content": "Stepwise walkthrough for A-Level: Knowledge Retrieval Systems showing analysis decisions and strategy log checks."
        }
      ]
    },
    {
      id: "a-level-prep-101-l03",
      title: "A-Level: High-Value Topic Prioritization",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "a-level-prep-101-l03-q1",
          "text": "In A-Level: High-Value Topic Prioritization, a learner keeps missing depth mastery items during A-Level practice. Which adjustment should happen before the next timed practice set?",
          "skillId": "a-level-prep-101-skill-depth-mastery-workflow",
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
              "text": "Run a short depth mastery checkpoint routine and annotate why each miss occurred in a strategy log before retesting."
            },
            {
              "id": "d",
              "text": "Switch topics even if depth mastery is still the dominant weakness."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the action that creates a repeatable feedback loop for depth mastery.",
          "explanation": "Fast targeted feedback plus immediate correction is the most reliable way to improve depth mastery."
        },
        {
          "id": "a-level-prep-101-l03-q2",
          "text": "A A-Level A-Level: High-Value Topic Prioritization session ends with unstable timing. What should be diagnosed first?",
          "skillId": "a-level-prep-101-skill-analysis-diagnosis",
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
              "text": "Locate the exact analysis decision point where time spikes, then set micro-checkpoints for that phase."
            }
          ],
          "correctOptionId": "d",
          "hint": "Find the answer that isolates a measurable bottleneck.",
          "explanation": "Pacing stabilizes when the highest-cost decision point is measured and corrected directly."
        },
        {
          "id": "a-level-prep-101-l03-q3",
          "text": "A-Level practice shows correction is happening but not sticking in A-Level: High-Value Topic Prioritization. What plan fixes this fastest?",
          "skillId": "a-level-prep-101-skill-extended-response-transfer",
          "options": [
            {
              "id": "a",
              "text": "Pair each corrected extended response error with a near-transfer item in the next timed block and track it in a strategy log."
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
          "id": "a-level-prep-101-l03-q4",
          "text": "During post-drill review for A-Level: High-Value Topic Prioritization, which fix should be prioritized first for score impact in A-Level?",
          "skillId": "a-level-prep-101-skill-synoptic-links-priority",
          "options": [
            {
              "id": "a",
              "text": "Polish already-mastered question types first."
            },
            {
              "id": "b",
              "text": "Address repeated synoptic links and pacing errors first because they affect many questions in one run."
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
          "id": "a-level-prep-101-l03-q5",
          "text": "In A-Level extended-response section, assertion without analytical link appears during A-Level: High-Value Topic Prioritization. What is the strongest immediate correction?",
          "skillId": "a-level-prep-101-skill-depth-mastery-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore extended-response section diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Add explicit because-therefore reasoning after each claim."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes assertion without analytical link.",
          "explanation": "Immediate correction inside extended-response section improves transfer to the next timed practice set."
        },
        {
          "id": "a-level-prep-101-l03-q6",
          "text": "During A-Level synoptic section, missing synoptic bridge repeats in A-Level: High-Value Topic Prioritization. Which plan should be applied before the next retest?",
          "skillId": "a-level-prep-101-skill-analysis-section-application",
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
              "text": "Link at least two themes with one evaluative judgement statement. Track outcomes in an analysis depth tracker and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in analysis depth tracker makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "a-level-prep-101-l03-ia1",
          "type": "matching_pairs",
          "title": "A-Level: High-Value Topic Prioritization Correction Alignment",
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
                "label": "Essay has knowledge but weak analytical linkage"
              },
              {
                "id": "l2",
                "label": "Data/source question misses evaluation criteria"
              },
              {
                "id": "l3",
                "label": "Revision broad but not deep in core themes"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Insert explicit because-therefore reasoning after each evidence point"
              },
              {
                "id": "r2",
                "label": "Apply reliability, validity, and bias checklist before conclusion"
              },
              {
                "id": "r3",
                "label": "Run focused depth sprint on one high-yield topic per day"
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
          "id": "a-level-prep-101-l03-a1",
          "type": "image",
          "title": "Depth Mastery Snapshot",
          "content": "Visual anchor for A-Level: High-Value Topic Prioritization with emphasis on depth mastery within practice set planning."
        },
        {
          "id": "a-level-prep-101-l03-a2",
          "type": "animation",
          "title": "Analysis Walkthrough",
          "content": "Stepwise walkthrough for A-Level: High-Value Topic Prioritization showing analysis decisions and strategy log checks."
        }
      ]
    },
    {
      id: "a-level-prep-101-l04",
      title: "A-Level: Analytical Essay Construction",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one depth mastery decision rule in A-Level: Analytical Essay Construction.",
          "Apply it in one passage set and show how it improves evidence and language precision.",
          "Set one next-step target for analysis before your next A-Level readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "a-level-prep-101-l04-ia1",
          "type": "drag_and_drop",
          "title": "A-Level: Analytical Essay Construction Decision-Phase Mapping",
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
                "label": "Synoptic Plan"
              },
              {
                "id": "execute",
                "label": "Analytical Execution"
              },
              {
                "id": "reflect",
                "label": "Depth Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Prioritize A-Level high-weight synoptic topics before timed papers",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Structure argument with claim, evidence, analysis, and evaluation",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Audit depth, precision, and link quality after each practice response",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "a-level-prep-101-l04-a1",
          "type": "image",
          "title": "Depth Mastery Snapshot",
          "content": "Visual anchor for A-Level: Analytical Essay Construction with emphasis on depth mastery within passage set planning."
        },
        {
          "id": "a-level-prep-101-l04-a2",
          "type": "animation",
          "title": "Analysis Walkthrough",
          "content": "Stepwise walkthrough for A-Level: Analytical Essay Construction showing analysis decisions and annotation map checks."
        }
      ]
    },
    {
      id: "a-level-prep-101-l05",
      title: "A-Level: Data and Source Evaluation",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "a-level-prep-101-l05-a1",
          "type": "image",
          "title": "Depth Mastery Snapshot",
          "content": "Visual anchor for A-Level: Data and Source Evaluation with emphasis on depth mastery within practice set planning."
        },
        {
          "id": "a-level-prep-101-l05-a2",
          "type": "animation",
          "title": "Analysis Walkthrough",
          "content": "Stepwise walkthrough for A-Level: Data and Source Evaluation showing analysis decisions and strategy log checks."
        }
      ]
    },
    {
      id: "a-level-prep-101-l06",
      title: "A-Level: Synoptic Question Strategy",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "a-level-prep-101-l06-q1",
          "text": "During A-Level: Synoptic Question Strategy, early guesses are causing synoptic links losses. Which intervention should happen first?",
          "skillId": "a-level-prep-101-skill-synoptic-links-workflow",
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
          "id": "a-level-prep-101-l06-q2",
          "text": "A A-Level drill on A-Level: Synoptic Question Strategy ends with unstable pacing. What should be diagnosed first?",
          "skillId": "a-level-prep-101-skill-depth-mastery-diagnosis",
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
              "text": "Pinpoint where depth mastery decisions consume extra time, then redesign attempt order with checkpoints."
            },
            {
              "id": "d",
              "text": "Increase question volume while keeping the same pacing errors."
            }
          ],
          "correctOptionId": "c",
          "hint": "Look for the answer that isolates a measurable timing bottleneck.",
          "explanation": "Pacing issues usually come from specific depth mastery decision points, not from total question count alone."
        },
        {
          "id": "a-level-prep-101-l06-q3",
          "text": "Which one-week sprint most improves analysis transfer for A-Level: Synoptic Question Strategy in A-Level?",
          "skillId": "a-level-prep-101-skill-analysis-transfer",
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
              "text": "Run two targeted correction blocks, one mixed timed practice set, and one retest focused on the same analysis objective."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine remediation and timed validation.",
          "explanation": "Transfer improves when learners re-encounter corrected skills under realistic constraints."
        },
        {
          "id": "a-level-prep-101-l06-q4",
          "text": "In A-Level A-Level: Synoptic Question Strategy, there are both content misses and pacing slips. What should the learner fix first?",
          "skillId": "a-level-prep-101-skill-extended-response-priority",
          "options": [
            {
              "id": "a",
              "text": "Prioritize the repeated extended response process issue, then apply the same correction across the next timed block."
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
          "id": "a-level-prep-101-l06-q5",
          "text": "In A-Level extended-response section, assertion without analytical link appears during A-Level: Synoptic Question Strategy. What is the strongest immediate correction?",
          "skillId": "a-level-prep-101-skill-synoptic-links-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore extended-response section diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Add explicit because-therefore reasoning after each claim."
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
          "hint": "Choose the option that directly fixes assertion without analytical link.",
          "explanation": "Immediate correction inside extended-response section improves transfer to the next timed practice set."
        },
        {
          "id": "a-level-prep-101-l06-q6",
          "text": "During A-Level synoptic section, missing synoptic bridge repeats in A-Level: Synoptic Question Strategy. Which plan should be applied before the next retest?",
          "skillId": "a-level-prep-101-skill-depth-mastery-section-application",
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
              "text": "Link at least two themes with one evaluative judgement statement. Track outcomes in an analysis depth tracker and retest the same pattern."
            },
            {
              "id": "d",
              "text": "Retake the section with no checkpoint changes."
            }
          ],
          "correctOptionId": "c",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in analysis depth tracker makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "a-level-prep-101-l06-ia1",
          "type": "matching_pairs",
          "title": "A-Level: Synoptic Question Strategy Correction Alignment",
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
                "label": "Essay has knowledge but weak analytical linkage"
              },
              {
                "id": "l2",
                "label": "Data/source question misses evaluation criteria"
              },
              {
                "id": "l3",
                "label": "Revision broad but not deep in core themes"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Insert explicit because-therefore reasoning after each evidence point"
              },
              {
                "id": "r2",
                "label": "Apply reliability, validity, and bias checklist before conclusion"
              },
              {
                "id": "r3",
                "label": "Run focused depth sprint on one high-yield topic per day"
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
          "id": "a-level-prep-101-l06-a1",
          "type": "image",
          "title": "Synoptic Links Snapshot",
          "content": "Visual anchor for A-Level: Synoptic Question Strategy with emphasis on synoptic links within practice set planning."
        },
        {
          "id": "a-level-prep-101-l06-a2",
          "type": "animation",
          "title": "Depth Mastery Walkthrough",
          "content": "Stepwise walkthrough for A-Level: Synoptic Question Strategy showing depth mastery decisions and strategy log checks."
        }
      ]
    },
    {
      id: "a-level-prep-101-l07",
      title: "A-Level: Revision Under Time Pressure",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "a-level-prep-101-l07-a1",
          "type": "image",
          "title": "Depth Mastery Snapshot",
          "content": "Visual anchor for A-Level: Revision Under Time Pressure with emphasis on depth mastery within timed block planning."
        },
        {
          "id": "a-level-prep-101-l07-a2",
          "type": "animation",
          "title": "Analysis Walkthrough",
          "content": "Stepwise walkthrough for A-Level: Revision Under Time Pressure showing analysis decisions and checkpoint log checks."
        }
      ]
    },
    {
      id: "a-level-prep-101-l08",
      title: "A-Level: Past Paper Mark-Scheme Analysis",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one analysis decision rule in A-Level: Past Paper Mark-Scheme Analysis.",
          "Apply it in one review cycle and show how it improves root-cause and correction quality.",
          "Set one next-step target for depth mastery before your next A-Level readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "a-level-prep-101-l08-ia1",
          "type": "matching_pairs",
          "title": "A-Level: Past Paper Mark-Scheme Analysis Diagnostic Match",
          "description": "Match recurring error signals to the highest-impact correction routine.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Match each error signal.",
            "Verify all pairings.",
            "Use one correction in your next attempt."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Essay has knowledge but weak analytical linkage"
              },
              {
                "id": "l2",
                "label": "Data/source question misses evaluation criteria"
              },
              {
                "id": "l3",
                "label": "Revision broad but not deep in core themes"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Insert explicit because-therefore reasoning after each evidence point"
              },
              {
                "id": "r2",
                "label": "Apply reliability, validity, and bias checklist before conclusion"
              },
              {
                "id": "r3",
                "label": "Run focused depth sprint on one high-yield topic per day"
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
      learningAids: [
        {
          "id": "a-level-prep-101-l08-a1",
          "type": "image",
          "title": "Analysis Snapshot",
          "content": "Visual anchor for A-Level: Past Paper Mark-Scheme Analysis with emphasis on analysis within review cycle planning."
        },
        {
          "id": "a-level-prep-101-l08-a2",
          "type": "animation",
          "title": "Depth Mastery Walkthrough",
          "content": "Stepwise walkthrough for A-Level: Past Paper Mark-Scheme Analysis showing depth mastery decisions and error taxonomy checks."
        }
      ]
    },
    {
      id: "a-level-prep-101-l09",
      title: "A-Level: Coursework/Practical Integration",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "a-level-prep-101-l09-q1",
          "text": "In A-Level: Coursework/Practical Integration, a learner keeps missing depth mastery items during A-Level practice. Which adjustment should happen before the next timed practice set?",
          "skillId": "a-level-prep-101-skill-depth-mastery-workflow",
          "options": [
            {
              "id": "a",
              "text": "Run a short depth mastery checkpoint routine and annotate why each miss occurred in a strategy log before retesting."
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
              "text": "Switch topics even if depth mastery is still the dominant weakness."
            }
          ],
          "correctOptionId": "a",
          "hint": "Choose the action that creates a repeatable feedback loop for depth mastery.",
          "explanation": "Fast targeted feedback plus immediate correction is the most reliable way to improve depth mastery."
        },
        {
          "id": "a-level-prep-101-l09-q2",
          "text": "A A-Level A-Level: Coursework/Practical Integration session ends with unstable timing. What should be diagnosed first?",
          "skillId": "a-level-prep-101-skill-analysis-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Retake the session immediately without diagnostics."
            },
            {
              "id": "b",
              "text": "Locate the exact analysis decision point where time spikes, then set micro-checkpoints for that phase."
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
          "id": "a-level-prep-101-l09-q3",
          "text": "A-Level practice shows correction is happening but not sticking in A-Level: Coursework/Practical Integration. What plan fixes this fastest?",
          "skillId": "a-level-prep-101-skill-extended-response-transfer",
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
              "text": "Pair each corrected extended response error with a near-transfer item in the next timed block and track it in a strategy log."
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
          "id": "a-level-prep-101-l09-q4",
          "text": "During post-drill review for A-Level: Coursework/Practical Integration, which fix should be prioritized first for score impact in A-Level?",
          "skillId": "a-level-prep-101-skill-synoptic-links-priority",
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
              "text": "Address repeated synoptic links and pacing errors first because they affect many questions in one run."
            }
          ],
          "correctOptionId": "d",
          "hint": "Prioritize changes that influence the largest question set.",
          "explanation": "Highest-impact remediation usually targets repeated timing and process breakdowns before edge-case content gaps."
        },
        {
          "id": "a-level-prep-101-l09-q5",
          "text": "In A-Level extended-response section, assertion without analytical link appears during A-Level: Coursework/Practical Integration. What is the strongest immediate correction?",
          "skillId": "a-level-prep-101-skill-depth-mastery-section-application",
          "options": [
            {
              "id": "a",
              "text": "Add explicit because-therefore reasoning after each claim."
            },
            {
              "id": "b",
              "text": "Ignore extended-response section diagnostics and continue for volume."
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
          "hint": "Choose the option that directly fixes assertion without analytical link.",
          "explanation": "Immediate correction inside extended-response section improves transfer to the next timed practice set."
        },
        {
          "id": "a-level-prep-101-l09-q6",
          "text": "During A-Level synoptic section, missing synoptic bridge repeats in A-Level: Coursework/Practical Integration. Which plan should be applied before the next retest?",
          "skillId": "a-level-prep-101-skill-analysis-section-application",
          "options": [
            {
              "id": "a",
              "text": "Switch to new content before validating the fix."
            },
            {
              "id": "b",
              "text": "Link at least two themes with one evaluative judgement statement. Track outcomes in an analysis depth tracker and retest the same pattern."
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
          "explanation": "A logged correction cycle in analysis depth tracker makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "a-level-prep-101-l09-ia1",
          "type": "matching_pairs",
          "title": "A-Level: Coursework/Practical Integration Correction Alignment",
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
                "label": "Essay has knowledge but weak analytical linkage"
              },
              {
                "id": "l2",
                "label": "Data/source question misses evaluation criteria"
              },
              {
                "id": "l3",
                "label": "Revision broad but not deep in core themes"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Insert explicit because-therefore reasoning after each evidence point"
              },
              {
                "id": "r2",
                "label": "Apply reliability, validity, and bias checklist before conclusion"
              },
              {
                "id": "r3",
                "label": "Run focused depth sprint on one high-yield topic per day"
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
          "id": "a-level-prep-101-l09-a1",
          "type": "image",
          "title": "Depth Mastery Snapshot",
          "content": "Visual anchor for A-Level: Coursework/Practical Integration with emphasis on depth mastery within practice set planning."
        },
        {
          "id": "a-level-prep-101-l09-a2",
          "type": "animation",
          "title": "Analysis Walkthrough",
          "content": "Stepwise walkthrough for A-Level: Coursework/Practical Integration showing analysis decisions and strategy log checks."
        }
      ]
    },
    {
      id: "a-level-prep-101-l10",
      title: "A-Level: Targeted Depth Mastery Remediation",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one depth mastery decision rule in A-Level: Targeted Depth Mastery Remediation.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for analysis before your next A-Level readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "a-level-prep-101-l10-ia1",
          "type": "drag_and_drop",
          "title": "A-Level: Targeted Depth Mastery Remediation Decision-Phase Mapping",
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
                "label": "Synoptic Plan"
              },
              {
                "id": "execute",
                "label": "Analytical Execution"
              },
              {
                "id": "reflect",
                "label": "Depth Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Prioritize A-Level high-weight synoptic topics before timed papers",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Structure argument with claim, evidence, analysis, and evaluation",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Audit depth, precision, and link quality after each practice response",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "a-level-prep-101-l10-a1",
          "type": "image",
          "title": "Depth Mastery Snapshot",
          "content": "Visual anchor for A-Level: Targeted Depth Mastery Remediation with emphasis on depth mastery within practice set planning."
        },
        {
          "id": "a-level-prep-101-l10-a2",
          "type": "animation",
          "title": "Analysis Walkthrough",
          "content": "Stepwise walkthrough for A-Level: Targeted Depth Mastery Remediation showing analysis decisions and strategy log checks."
        }
      ]
    },
    {
      id: "a-level-prep-101-l11",
      title: "A-Level: Timed Analysis Sprint",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "a-level-prep-101-l11-a1",
          "type": "image",
          "title": "Analysis Snapshot",
          "content": "Visual anchor for A-Level: Timed Analysis Sprint with emphasis on analysis within timed block planning."
        },
        {
          "id": "a-level-prep-101-l11-a2",
          "type": "animation",
          "title": "Depth Mastery Walkthrough",
          "content": "Stepwise walkthrough for A-Level: Timed Analysis Sprint showing depth mastery decisions and checkpoint log checks."
        }
      ]
    },
    {
      id: "a-level-prep-101-l12",
      title: "A-Level: Mixed-Section Decision Drill",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "a-level-prep-101-l12-q1",
          "text": "A-Level coaching notes show repeated depth mastery misses in A-Level: Mixed-Section Decision Drill. What should the learner do before the next practice set?",
          "skillId": "a-level-prep-101-skill-depth-mastery-workflow",
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
              "text": "Switch strands even though depth mastery is still the top weakness."
            },
            {
              "id": "d",
              "text": "Rebuild the solve workflow on two representative practice set items, then retest with the same constraints."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the option that improves process quality, not just volume.",
          "explanation": "When depth mastery is unstable, workflow repair plus immediate retest creates the fastest reliable gains."
        },
        {
          "id": "a-level-prep-101-l12-q2",
          "text": "In A-Level: Mixed-Section Decision Drill, pace drops late even when early accuracy is strong. Which move best addresses this A-Level pattern?",
          "skillId": "a-level-prep-101-skill-analysis-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Introduce phase checkpoints and a cut-loss rule around high-friction analysis items."
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
          "id": "a-level-prep-101-l12-q3",
          "text": "Which one-week plan best improves extended response transfer for A-Level readiness in A-Level?",
          "skillId": "a-level-prep-101-skill-extended-response-transfer",
          "options": [
            {
              "id": "a",
              "text": "Use only untimed warmups and avoid mixed sets."
            },
            {
              "id": "b",
              "text": "Alternate mixed-difficulty sets with targeted remediation, then re-test the same extended response objective under timing constraints."
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
          "explanation": "Transfer improves when correction cycles are followed by fresh timed retrieval of the same extended response target."
        },
        {
          "id": "a-level-prep-101-l12-q4",
          "text": "After a A-Level: Mixed-Section Decision Drill drill, which remediation should be prioritized first for score impact in A-Level?",
          "skillId": "a-level-prep-101-skill-synoptic-links-priority",
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
              "text": "Fix repeated synoptic links breakdowns first because they scale across many items in the same run."
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
          "id": "a-level-prep-101-l12-q5",
          "text": "In A-Level extended-response section, assertion without analytical link appears during A-Level: Mixed-Section Decision Drill. What is the strongest immediate correction?",
          "skillId": "a-level-prep-101-skill-depth-mastery-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore extended-response section diagnostics and continue for volume."
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
              "text": "Add explicit because-therefore reasoning after each claim."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the option that directly fixes assertion without analytical link.",
          "explanation": "Immediate correction inside extended-response section improves transfer to the next timed practice set."
        },
        {
          "id": "a-level-prep-101-l12-q6",
          "text": "During A-Level synoptic section, missing synoptic bridge repeats in A-Level: Mixed-Section Decision Drill. Which plan should be applied before the next retest?",
          "skillId": "a-level-prep-101-skill-analysis-section-application",
          "options": [
            {
              "id": "a",
              "text": "Link at least two themes with one evaluative judgement statement. Track outcomes in an analysis depth tracker and retest the same pattern."
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
          "explanation": "A logged correction cycle in analysis depth tracker makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "a-level-prep-101-l12-ia1",
          "type": "matching_pairs",
          "title": "A-Level: Mixed-Section Decision Drill Correction Alignment",
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
                "label": "Essay has knowledge but weak analytical linkage"
              },
              {
                "id": "l2",
                "label": "Data/source question misses evaluation criteria"
              },
              {
                "id": "l3",
                "label": "Revision broad but not deep in core themes"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Insert explicit because-therefore reasoning after each evidence point"
              },
              {
                "id": "r2",
                "label": "Apply reliability, validity, and bias checklist before conclusion"
              },
              {
                "id": "r3",
                "label": "Run focused depth sprint on one high-yield topic per day"
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
          "id": "a-level-prep-101-l12-a1",
          "type": "image",
          "title": "Depth Mastery Snapshot",
          "content": "Visual anchor for A-Level: Mixed-Section Decision Drill with emphasis on depth mastery within practice set planning."
        },
        {
          "id": "a-level-prep-101-l12-a2",
          "type": "animation",
          "title": "Analysis Walkthrough",
          "content": "Stepwise walkthrough for A-Level: Mixed-Section Decision Drill showing analysis decisions and strategy log checks."
        }
      ]
    },
    {
      id: "a-level-prep-101-l13",
      title: "A-Level: Adaptive Retry and Transfer Check",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "a-level-prep-101-l13-a1",
          "type": "image",
          "title": "Depth Mastery Snapshot",
          "content": "Visual anchor for A-Level: Adaptive Retry and Transfer Check with emphasis on depth mastery within practice set planning."
        },
        {
          "id": "a-level-prep-101-l13-a2",
          "type": "animation",
          "title": "Analysis Walkthrough",
          "content": "Stepwise walkthrough for A-Level: Adaptive Retry and Transfer Check showing analysis decisions and strategy log checks."
        }
      ]
    },
    {
      id: "a-level-prep-101-l14",
      title: "A-Level: A Level Readiness Stability Checkpoint",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one depth mastery decision rule in A-Level: A Level Readiness Stability Checkpoint.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for analysis before your next A-Level readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "a-level-prep-101-l14-ia1",
          "type": "drag_and_drop",
          "title": "A-Level: A Level Readiness Stability Checkpoint Decision-Phase Mapping",
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
                "label": "Synoptic Plan"
              },
              {
                "id": "execute",
                "label": "Analytical Execution"
              },
              {
                "id": "reflect",
                "label": "Depth Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Prioritize A-Level high-weight synoptic topics before timed papers",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Structure argument with claim, evidence, analysis, and evaluation",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Audit depth, precision, and link quality after each practice response",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "a-level-prep-101-l14-a1",
          "type": "image",
          "title": "Depth Mastery Snapshot",
          "content": "Visual anchor for A-Level: A Level Readiness Stability Checkpoint with emphasis on depth mastery within practice set planning."
        },
        {
          "id": "a-level-prep-101-l14-a2",
          "type": "animation",
          "title": "Analysis Walkthrough",
          "content": "Stepwise walkthrough for A-Level: A Level Readiness Stability Checkpoint showing analysis decisions and strategy log checks."
        }
      ]
    },
    {
      id: "a-level-prep-101-l15",
      title: "A-Level: Full Mock and Gap Closure",
      type: "quiz",
      duration: 20,
      questions: [
        {
          "id": "a-level-prep-101-l15-q1",
          "text": "During A-Level: Full Mock and Gap Closure, early guesses are causing depth mastery losses. Which intervention should happen first?",
          "skillId": "a-level-prep-101-skill-depth-mastery-workflow",
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
              "text": "Use a short verification pass and log decision triggers in an attempt-order sheet before restarting the drill."
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
          "id": "a-level-prep-101-l15-q2",
          "text": "A A-Level drill on A-Level: Full Mock and Gap Closure ends with unstable pacing. What should be diagnosed first?",
          "skillId": "a-level-prep-101-skill-analysis-diagnosis",
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
              "text": "Pinpoint where analysis decisions consume extra time, then redesign attempt order with checkpoints."
            }
          ],
          "correctOptionId": "d",
          "hint": "Look for the answer that isolates a measurable timing bottleneck.",
          "explanation": "Pacing issues usually come from specific analysis decision points, not from total question count alone."
        },
        {
          "id": "a-level-prep-101-l15-q3",
          "text": "Which one-week sprint most improves extended response transfer for A-Level: Full Mock and Gap Closure in A-Level?",
          "skillId": "a-level-prep-101-skill-extended-response-transfer",
          "options": [
            {
              "id": "a",
              "text": "Run two targeted correction blocks, one mixed timed section simulation, and one retest focused on the same extended response objective."
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
          "id": "a-level-prep-101-l15-q4",
          "text": "In A-Level A-Level: Full Mock and Gap Closure, there are both content misses and pacing slips. What should the learner fix first?",
          "skillId": "a-level-prep-101-skill-synoptic-links-priority",
          "options": [
            {
              "id": "a",
              "text": "Tackle the rarest concept gap first for variety."
            },
            {
              "id": "b",
              "text": "Prioritize the repeated synoptic links process issue, then apply the same correction across the next timed block."
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
          "id": "a-level-prep-101-l15-q5",
          "text": "In A-Level extended-response section, assertion without analytical link appears during A-Level: Full Mock and Gap Closure. What is the strongest immediate correction?",
          "skillId": "a-level-prep-101-skill-depth-mastery-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore extended-response section diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Add explicit because-therefore reasoning after each claim."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes assertion without analytical link.",
          "explanation": "Immediate correction inside extended-response section improves transfer to the next timed section simulation."
        },
        {
          "id": "a-level-prep-101-l15-q6",
          "text": "During A-Level synoptic section, missing synoptic bridge repeats in A-Level: Full Mock and Gap Closure. Which plan should be applied before the next retest?",
          "skillId": "a-level-prep-101-skill-analysis-section-application",
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
              "text": "Link at least two themes with one evaluative judgement statement. Track outcomes in an analysis depth tracker and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in analysis depth tracker makes the pacing fix visible and repeatable."
        },
        {
          "id": "a-level-prep-101-l15-q7",
          "text": "In a full A-Level mock, misses appear across multiple strands. What triage order is strongest?",
          "skillId": "a-level-prep-101-skill-mock-triage",
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
          "id": "a-level-prep-101-l15-q8",
          "text": "A learner finishes one section early but times out on another in A-Level. What is the best pacing fix?",
          "skillId": "a-level-prep-101-skill-section-pacing",
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
          "id": "a-level-prep-101-l15-q9",
          "text": "Before submitting a high-stakes A-Level section, which quality-control habit is most reliable?",
          "skillId": "a-level-prep-101-skill-quality-control",
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
          "id": "a-level-prep-101-l15-q10",
          "text": "After full-mock review in A-Level, which next-step plan yields the best one-week improvement?",
          "skillId": "a-level-prep-101-skill-remediation-loop",
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
          "id": "a-level-prep-101-l15-ia1",
          "type": "sorting_buckets",
          "title": "A-Level: Full Mock and Gap Closure Error Taxonomy Sort",
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
                "label": "Depth Knowledge Gap"
              },
              {
                "id": "strategy",
                "label": "Analysis Strategy Gap"
              },
              {
                "id": "timing",
                "label": "Extended Response Timing Gap"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Synoptic link omitted between two core topics",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Evaluation statement lacked explicit judgement criteria",
                "correctBucketId": "strategy"
              },
              {
                "id": "i3",
                "label": "Final essay conclusion truncated due pacing",
                "correctBucketId": "timing"
              },
              {
                "id": "i4",
                "label": "Feedback noted but same structural gap reappeared",
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
          "id": "a-level-prep-101-l15-a1",
          "type": "image",
          "title": "Depth Mastery Snapshot",
          "content": "Visual anchor for A-Level: Full Mock and Gap Closure with emphasis on depth mastery within section simulation planning."
        },
        {
          "id": "a-level-prep-101-l15-a2",
          "type": "animation",
          "title": "Analysis Walkthrough",
          "content": "Stepwise walkthrough for A-Level: Full Mock and Gap Closure showing analysis decisions and attempt-order sheet checks."
        }
      ]
    }
  ],
};
