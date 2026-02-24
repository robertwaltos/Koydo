import type { LearningModule } from "@/lib/modules/types";

export const IbPrep101Module: LearningModule = {
  id: "ib-prep-101",
  title: "IB Diploma Prep Foundations",
  description: "Build planning, IA/EE workflows, and exam strategy for the IB Diploma Programme.",
  subject: "Exam Prep",
  tags: ["exam-prep", "assessment", "advanced"],
  minAge: 15,
  maxAge: 19,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Build structured IB Diploma readiness workflows",
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
      id: "ib-prep-101-l01",
      title: "IB: IB Diploma Structure and Subject Planning",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "ib-prep-101-l01-a1",
          "type": "image",
          "title": "Hl Sl Planning Snapshot",
          "content": "Visual anchor for IB: IB Diploma Structure and Subject Planning with emphasis on HL/SL planning within practice set planning."
        },
        {
          "id": "ib-prep-101-l01-a2",
          "type": "animation",
          "title": "Tok Walkthrough",
          "content": "Stepwise walkthrough for IB: IB Diploma Structure and Subject Planning showing TOK decisions and strategy log checks."
        }
      ]
    },
    {
      id: "ib-prep-101-l02",
      title: "IB: Higher Level and Standard Level Strategy",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one HL/SL planning decision rule in IB: Higher Level and Standard Level Strategy.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for TOK before your next IB Diploma readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "ib-prep-101-l02-ia1",
          "type": "drag_and_drop",
          "title": "IB: Higher Level and Standard Level Strategy Decision-Phase Mapping",
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
                "label": "Programme Plan"
              },
              {
                "id": "execute",
                "label": "Criterion Execution"
              },
              {
                "id": "reflect",
                "label": "Criterion Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Balance HL/SL demands with IA, TOK, and EE milestones",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Answer using command terms aligned to IB markscheme criteria",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Review each response against criterion language and evidence quality",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "ib-prep-101-l02-a1",
          "type": "image",
          "title": "Hl Sl Planning Snapshot",
          "content": "Visual anchor for IB: Higher Level and Standard Level Strategy with emphasis on HL/SL planning within practice set planning."
        },
        {
          "id": "ib-prep-101-l02-a2",
          "type": "animation",
          "title": "Tok Walkthrough",
          "content": "Stepwise walkthrough for IB: Higher Level and Standard Level Strategy showing TOK decisions and strategy log checks."
        }
      ]
    },
    {
      id: "ib-prep-101-l03",
      title: "IB: Theory of Knowledge Reasoning Skills",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "ib-prep-101-l03-q1",
          "text": "In IB: Theory of Knowledge Reasoning Skills, a learner keeps missing HL/SL planning items during IB practice. Which adjustment should happen before the next timed practice set?",
          "skillId": "ib-prep-101-skill-hl-sl-planning-workflow",
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
              "text": "Run a short HL/SL planning checkpoint routine and annotate why each miss occurred in a strategy log before retesting."
            },
            {
              "id": "d",
              "text": "Switch topics even if HL/SL planning is still the dominant weakness."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the action that creates a repeatable feedback loop for HL/SL planning.",
          "explanation": "Fast targeted feedback plus immediate correction is the most reliable way to improve HL/SL planning."
        },
        {
          "id": "ib-prep-101-l03-q2",
          "text": "A IB IB: Theory of Knowledge Reasoning Skills session ends with unstable timing. What should be diagnosed first?",
          "skillId": "ib-prep-101-skill-tok-diagnosis",
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
              "text": "Locate the exact TOK decision point where time spikes, then set micro-checkpoints for that phase."
            }
          ],
          "correctOptionId": "d",
          "hint": "Find the answer that isolates a measurable bottleneck.",
          "explanation": "Pacing stabilizes when the highest-cost decision point is measured and corrected directly."
        },
        {
          "id": "ib-prep-101-l03-q3",
          "text": "IB practice shows correction is happening but not sticking in IB: Theory of Knowledge Reasoning Skills. What plan fixes this fastest?",
          "skillId": "ib-prep-101-skill-extended-essay-transfer",
          "options": [
            {
              "id": "a",
              "text": "Pair each corrected extended essay error with a near-transfer item in the next timed block and track it in a strategy log."
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
          "id": "ib-prep-101-l03-q4",
          "text": "During post-drill review for IB: Theory of Knowledge Reasoning Skills, which fix should be prioritized first for score impact in IB?",
          "skillId": "ib-prep-101-skill-internal-assessment-priority",
          "options": [
            {
              "id": "a",
              "text": "Polish already-mastered question types first."
            },
            {
              "id": "b",
              "text": "Address repeated internal assessment and pacing errors first because they affect many questions in one run."
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
          "id": "ib-prep-101-l03-q5",
          "text": "In IB criterion-marked response, criterion language omission appears during IB: Theory of Knowledge Reasoning Skills. What is the strongest immediate correction?",
          "skillId": "ib-prep-101-skill-hl-sl-planning-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore criterion-marked response diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Map each paragraph to the targeted criterion descriptor."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes criterion language omission.",
          "explanation": "Immediate correction inside criterion-marked response improves transfer to the next timed practice set."
        },
        {
          "id": "ib-prep-101-l03-q6",
          "text": "During IB command-term question, command-term mismatch repeats in IB: Theory of Knowledge Reasoning Skills. Which plan should be applied before the next retest?",
          "skillId": "ib-prep-101-skill-tok-section-application",
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
              "text": "Translate command terms into required response moves before drafting. Track outcomes in a criterion alignment sheet and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in criterion alignment sheet makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "ib-prep-101-l03-ia1",
          "type": "matching_pairs",
          "title": "IB: Theory of Knowledge Reasoning Skills Correction Alignment",
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
                "label": "Response ignores command term nuance"
              },
              {
                "id": "l2",
                "label": "IA draft has evidence but weak methodological justification"
              },
              {
                "id": "l3",
                "label": "TOK reasoning lacks clear claim-counterclaim structure"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Translate command term into explicit response requirement before writing"
              },
              {
                "id": "r2",
                "label": "Add criterion-linked method rationale with reliability discussion"
              },
              {
                "id": "r3",
                "label": "Use claim/counterclaim/evaluation scaffold for each TOK paragraph"
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
          "id": "ib-prep-101-l03-a1",
          "type": "image",
          "title": "Hl Sl Planning Snapshot",
          "content": "Visual anchor for IB: Theory of Knowledge Reasoning Skills with emphasis on HL/SL planning within practice set planning."
        },
        {
          "id": "ib-prep-101-l03-a2",
          "type": "animation",
          "title": "Tok Walkthrough",
          "content": "Stepwise walkthrough for IB: Theory of Knowledge Reasoning Skills showing TOK decisions and strategy log checks."
        }
      ]
    },
    {
      id: "ib-prep-101-l04",
      title: "IB: Extended Essay Research Workflow",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one extended essay decision rule in IB: Extended Essay Research Workflow.",
          "Apply it in one passage set and show how it improves evidence and language precision.",
          "Set one next-step target for HL/SL planning before your next IB Diploma readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "ib-prep-101-l04-ia1",
          "type": "drag_and_drop",
          "title": "IB: Extended Essay Research Workflow Decision-Phase Mapping",
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
                "label": "Programme Plan"
              },
              {
                "id": "execute",
                "label": "Criterion Execution"
              },
              {
                "id": "reflect",
                "label": "Criterion Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Balance HL/SL demands with IA, TOK, and EE milestones",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Answer using command terms aligned to IB markscheme criteria",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Review each response against criterion language and evidence quality",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "ib-prep-101-l04-a1",
          "type": "image",
          "title": "Extended Essay Snapshot",
          "content": "Visual anchor for IB: Extended Essay Research Workflow with emphasis on extended essay within passage set planning."
        },
        {
          "id": "ib-prep-101-l04-a2",
          "type": "animation",
          "title": "Hl Sl Planning Walkthrough",
          "content": "Stepwise walkthrough for IB: Extended Essay Research Workflow showing HL/SL planning decisions and annotation map checks."
        }
      ]
    },
    {
      id: "ib-prep-101-l05",
      title: "IB: Internal Assessment Quality Standards",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "ib-prep-101-l05-a1",
          "type": "image",
          "title": "Internal Assessment Snapshot",
          "content": "Visual anchor for IB: Internal Assessment Quality Standards with emphasis on internal assessment within practice set planning."
        },
        {
          "id": "ib-prep-101-l05-a2",
          "type": "animation",
          "title": "Hl Sl Planning Walkthrough",
          "content": "Stepwise walkthrough for IB: Internal Assessment Quality Standards showing HL/SL planning decisions and strategy log checks."
        }
      ]
    },
    {
      id: "ib-prep-101-l06",
      title: "IB: Command Terms and Markscheme Use",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "ib-prep-101-l06-q1",
          "text": "During IB: Command Terms and Markscheme Use, early guesses are causing HL/SL planning losses. Which intervention should happen first?",
          "skillId": "ib-prep-101-skill-hl-sl-planning-workflow",
          "options": [
            {
              "id": "a",
              "text": "Keep the same pace and hope accuracy normalizes later."
            },
            {
              "id": "b",
              "text": "Use a short verification pass and log decision triggers in an error taxonomy before restarting the drill."
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
          "id": "ib-prep-101-l06-q2",
          "text": "A IB drill on IB: Command Terms and Markscheme Use ends with unstable pacing. What should be diagnosed first?",
          "skillId": "ib-prep-101-skill-tok-diagnosis",
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
              "text": "Pinpoint where TOK decisions consume extra time, then redesign attempt order with checkpoints."
            },
            {
              "id": "d",
              "text": "Increase question volume while keeping the same pacing errors."
            }
          ],
          "correctOptionId": "c",
          "hint": "Look for the answer that isolates a measurable timing bottleneck.",
          "explanation": "Pacing issues usually come from specific TOK decision points, not from total question count alone."
        },
        {
          "id": "ib-prep-101-l06-q3",
          "text": "Which one-week sprint most improves extended essay transfer for IB: Command Terms and Markscheme Use in IB?",
          "skillId": "ib-prep-101-skill-extended-essay-transfer",
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
              "text": "Run two targeted correction blocks, one mixed timed review cycle, and one retest focused on the same extended essay objective."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine remediation and timed validation.",
          "explanation": "Transfer improves when learners re-encounter corrected skills under realistic constraints."
        },
        {
          "id": "ib-prep-101-l06-q4",
          "text": "In IB IB: Command Terms and Markscheme Use, there are both content misses and pacing slips. What should the learner fix first?",
          "skillId": "ib-prep-101-skill-internal-assessment-priority",
          "options": [
            {
              "id": "a",
              "text": "Prioritize the repeated internal assessment process issue, then apply the same correction across the next timed block."
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
          "id": "ib-prep-101-l06-q5",
          "text": "In IB criterion-marked response, criterion language omission appears during IB: Command Terms and Markscheme Use. What is the strongest immediate correction?",
          "skillId": "ib-prep-101-skill-hl-sl-planning-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore criterion-marked response diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Map each paragraph to the targeted criterion descriptor."
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
          "hint": "Choose the option that directly fixes criterion language omission.",
          "explanation": "Immediate correction inside criterion-marked response improves transfer to the next timed review cycle."
        },
        {
          "id": "ib-prep-101-l06-q6",
          "text": "During IB command-term question, command-term mismatch repeats in IB: Command Terms and Markscheme Use. Which plan should be applied before the next retest?",
          "skillId": "ib-prep-101-skill-tok-section-application",
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
              "text": "Translate command terms into required response moves before drafting. Track outcomes in a criterion alignment sheet and retest the same pattern."
            },
            {
              "id": "d",
              "text": "Retake the section with no checkpoint changes."
            }
          ],
          "correctOptionId": "c",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in criterion alignment sheet makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "ib-prep-101-l06-ia1",
          "type": "matching_pairs",
          "title": "IB: Command Terms and Markscheme Use Root-Cause Match",
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
                "label": "Response ignores command term nuance"
              },
              {
                "id": "l2",
                "label": "IA draft has evidence but weak methodological justification"
              },
              {
                "id": "l3",
                "label": "TOK reasoning lacks clear claim-counterclaim structure"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Translate command term into explicit response requirement before writing"
              },
              {
                "id": "r2",
                "label": "Add criterion-linked method rationale with reliability discussion"
              },
              {
                "id": "r3",
                "label": "Use claim/counterclaim/evaluation scaffold for each TOK paragraph"
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
          "id": "ib-prep-101-l06-a1",
          "type": "image",
          "title": "Hl Sl Planning Snapshot",
          "content": "Visual anchor for IB: Command Terms and Markscheme Use with emphasis on HL/SL planning within review cycle planning."
        },
        {
          "id": "ib-prep-101-l06-a2",
          "type": "animation",
          "title": "Tok Walkthrough",
          "content": "Stepwise walkthrough for IB: Command Terms and Markscheme Use showing TOK decisions and error taxonomy checks."
        }
      ]
    },
    {
      id: "ib-prep-101-l07",
      title: "IB: Time Management Across Components",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "ib-prep-101-l07-a1",
          "type": "image",
          "title": "Hl Sl Planning Snapshot",
          "content": "Visual anchor for IB: Time Management Across Components with emphasis on HL/SL planning within timed block planning."
        },
        {
          "id": "ib-prep-101-l07-a2",
          "type": "animation",
          "title": "Tok Walkthrough",
          "content": "Stepwise walkthrough for IB: Time Management Across Components showing TOK decisions and checkpoint log checks."
        }
      ]
    },
    {
      id: "ib-prep-101-l08",
      title: "IB: Past Paper Analysis Loop",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one HL/SL planning decision rule in IB: Past Paper Analysis Loop.",
          "Apply it in one review cycle and show how it improves root-cause and correction quality.",
          "Set one next-step target for TOK before your next IB Diploma readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "ib-prep-101-l08-ia1",
          "type": "matching_pairs",
          "title": "IB: Past Paper Analysis Loop Diagnostic Match",
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
                "label": "Response ignores command term nuance"
              },
              {
                "id": "l2",
                "label": "IA draft has evidence but weak methodological justification"
              },
              {
                "id": "l3",
                "label": "TOK reasoning lacks clear claim-counterclaim structure"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Translate command term into explicit response requirement before writing"
              },
              {
                "id": "r2",
                "label": "Add criterion-linked method rationale with reliability discussion"
              },
              {
                "id": "r3",
                "label": "Use claim/counterclaim/evaluation scaffold for each TOK paragraph"
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
          "id": "ib-prep-101-l08-a1",
          "type": "image",
          "title": "Hl Sl Planning Snapshot",
          "content": "Visual anchor for IB: Past Paper Analysis Loop with emphasis on HL/SL planning within review cycle planning."
        },
        {
          "id": "ib-prep-101-l08-a2",
          "type": "animation",
          "title": "Tok Walkthrough",
          "content": "Stepwise walkthrough for IB: Past Paper Analysis Loop showing TOK decisions and error taxonomy checks."
        }
      ]
    },
    {
      id: "ib-prep-101-l09",
      title: "IB: Exam Session Simulation",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "ib-prep-101-l09-q1",
          "text": "In IB: Exam Session Simulation, a learner keeps missing HL/SL planning items during IB practice. Which adjustment should happen before the next timed section simulation?",
          "skillId": "ib-prep-101-skill-hl-sl-planning-workflow",
          "options": [
            {
              "id": "a",
              "text": "Run a short HL/SL planning checkpoint routine and annotate why each miss occurred in an attempt-order sheet before retesting."
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
              "text": "Switch topics even if HL/SL planning is still the dominant weakness."
            }
          ],
          "correctOptionId": "a",
          "hint": "Choose the action that creates a repeatable feedback loop for HL/SL planning.",
          "explanation": "Fast targeted feedback plus immediate correction is the most reliable way to improve HL/SL planning."
        },
        {
          "id": "ib-prep-101-l09-q2",
          "text": "A IB IB: Exam Session Simulation session ends with unstable timing. What should be diagnosed first?",
          "skillId": "ib-prep-101-skill-tok-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Retake the session immediately without diagnostics."
            },
            {
              "id": "b",
              "text": "Locate the exact TOK decision point where time spikes, then set micro-checkpoints for that phase."
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
          "id": "ib-prep-101-l09-q3",
          "text": "IB practice shows correction is happening but not sticking in IB: Exam Session Simulation. What plan fixes this fastest?",
          "skillId": "ib-prep-101-skill-extended-essay-transfer",
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
              "text": "Pair each corrected extended essay error with a near-transfer item in the next timed block and track it in an attempt-order sheet."
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
          "id": "ib-prep-101-l09-q4",
          "text": "During post-drill review for IB: Exam Session Simulation, which fix should be prioritized first for score impact in IB?",
          "skillId": "ib-prep-101-skill-internal-assessment-priority",
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
              "text": "Address repeated internal assessment and pacing errors first because they affect many questions in one run."
            }
          ],
          "correctOptionId": "d",
          "hint": "Prioritize changes that influence the largest question set.",
          "explanation": "Highest-impact remediation usually targets repeated timing and process breakdowns before edge-case content gaps."
        },
        {
          "id": "ib-prep-101-l09-q5",
          "text": "In IB criterion-marked response, criterion language omission appears during IB: Exam Session Simulation. What is the strongest immediate correction?",
          "skillId": "ib-prep-101-skill-hl-sl-planning-section-application",
          "options": [
            {
              "id": "a",
              "text": "Map each paragraph to the targeted criterion descriptor."
            },
            {
              "id": "b",
              "text": "Ignore criterion-marked response diagnostics and continue for volume."
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
          "hint": "Choose the option that directly fixes criterion language omission.",
          "explanation": "Immediate correction inside criterion-marked response improves transfer to the next timed section simulation."
        },
        {
          "id": "ib-prep-101-l09-q6",
          "text": "During IB command-term question, command-term mismatch repeats in IB: Exam Session Simulation. Which plan should be applied before the next retest?",
          "skillId": "ib-prep-101-skill-tok-section-application",
          "options": [
            {
              "id": "a",
              "text": "Switch to new content before validating the fix."
            },
            {
              "id": "b",
              "text": "Translate command terms into required response moves before drafting. Track outcomes in a criterion alignment sheet and retest the same pattern."
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
          "explanation": "A logged correction cycle in criterion alignment sheet makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "ib-prep-101-l09-ia1",
          "type": "sorting_buckets",
          "title": "IB: Exam Session Simulation Attempt-Order Sort",
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
                "label": "Final section left unreviewed in timed paper",
                "correctBucketId": "flag"
              },
              {
                "id": "i2",
                "label": "Command term treated as summary instead of evaluation",
                "correctBucketId": "flag"
              },
              {
                "id": "i3",
                "label": "Criterion descriptor missed in subject response",
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
          "id": "ib-prep-101-l09-a1",
          "type": "image",
          "title": "Hl Sl Planning Snapshot",
          "content": "Visual anchor for IB: Exam Session Simulation with emphasis on HL/SL planning within section simulation planning."
        },
        {
          "id": "ib-prep-101-l09-a2",
          "type": "animation",
          "title": "Tok Walkthrough",
          "content": "Stepwise walkthrough for IB: Exam Session Simulation showing TOK decisions and attempt-order sheet checks."
        }
      ]
    },
    {
      id: "ib-prep-101-l10",
      title: "IB: Targeted Hl Sl Planning Remediation",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one HL/SL planning decision rule in IB: Targeted Hl Sl Planning Remediation.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for TOK before your next IB Diploma readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "ib-prep-101-l10-ia1",
          "type": "drag_and_drop",
          "title": "IB: Targeted Hl Sl Planning Remediation Decision-Phase Mapping",
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
                "label": "Programme Plan"
              },
              {
                "id": "execute",
                "label": "Criterion Execution"
              },
              {
                "id": "reflect",
                "label": "Criterion Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Balance HL/SL demands with IA, TOK, and EE milestones",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Answer using command terms aligned to IB markscheme criteria",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Review each response against criterion language and evidence quality",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "ib-prep-101-l10-a1",
          "type": "image",
          "title": "Hl Sl Planning Snapshot",
          "content": "Visual anchor for IB: Targeted Hl Sl Planning Remediation with emphasis on HL/SL planning within practice set planning."
        },
        {
          "id": "ib-prep-101-l10-a2",
          "type": "animation",
          "title": "Tok Walkthrough",
          "content": "Stepwise walkthrough for IB: Targeted Hl Sl Planning Remediation showing TOK decisions and strategy log checks."
        }
      ]
    },
    {
      id: "ib-prep-101-l11",
      title: "IB: Timed Tok Sprint",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "ib-prep-101-l11-a1",
          "type": "image",
          "title": "Tok Snapshot",
          "content": "Visual anchor for IB: Timed Tok Sprint with emphasis on TOK within passage set planning."
        },
        {
          "id": "ib-prep-101-l11-a2",
          "type": "animation",
          "title": "Extended Essay Walkthrough",
          "content": "Stepwise walkthrough for IB: Timed Tok Sprint showing extended essay decisions and annotation map checks."
        }
      ]
    },
    {
      id: "ib-prep-101-l12",
      title: "IB: Mixed-Section Decision Drill",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "ib-prep-101-l12-q1",
          "text": "In IB: Mixed-Section Decision Drill, a learner keeps missing HL/SL planning items during IB practice. Which adjustment should happen before the next timed practice set?",
          "skillId": "ib-prep-101-skill-hl-sl-planning-workflow",
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
              "text": "Switch topics even if HL/SL planning is still the dominant weakness."
            },
            {
              "id": "d",
              "text": "Run a short HL/SL planning checkpoint routine and annotate why each miss occurred in a strategy log before retesting."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the action that creates a repeatable feedback loop for HL/SL planning.",
          "explanation": "Fast targeted feedback plus immediate correction is the most reliable way to improve HL/SL planning."
        },
        {
          "id": "ib-prep-101-l12-q2",
          "text": "A IB IB: Mixed-Section Decision Drill session ends with unstable timing. What should be diagnosed first?",
          "skillId": "ib-prep-101-skill-tok-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Locate the exact TOK decision point where time spikes, then set micro-checkpoints for that phase."
            },
            {
              "id": "b",
              "text": "Retake the session immediately without diagnostics."
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
          "correctOptionId": "a",
          "hint": "Find the answer that isolates a measurable bottleneck.",
          "explanation": "Pacing stabilizes when the highest-cost decision point is measured and corrected directly."
        },
        {
          "id": "ib-prep-101-l12-q3",
          "text": "IB practice shows correction is happening but not sticking in IB: Mixed-Section Decision Drill. What plan fixes this fastest?",
          "skillId": "ib-prep-101-skill-extended-essay-transfer",
          "options": [
            {
              "id": "a",
              "text": "Keep reviewing notes and avoid new timed attempts."
            },
            {
              "id": "b",
              "text": "Pair each corrected extended essay error with a near-transfer item in the next timed block and track it in a strategy log."
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
          "correctOptionId": "b",
          "hint": "The strongest option forces immediate transfer testing.",
          "explanation": "Correction becomes durable when each fix is tested on a similar item during the next constrained attempt."
        },
        {
          "id": "ib-prep-101-l12-q4",
          "text": "During post-drill review for IB: Mixed-Section Decision Drill, which fix should be prioritized first for score impact in IB?",
          "skillId": "ib-prep-101-skill-internal-assessment-priority",
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
              "text": "Address repeated internal assessment and pacing errors first because they affect many questions in one run."
            },
            {
              "id": "d",
              "text": "Rewrite notes without validating changes in timed practice."
            }
          ],
          "correctOptionId": "c",
          "hint": "Prioritize changes that influence the largest question set.",
          "explanation": "Highest-impact remediation usually targets repeated timing and process breakdowns before edge-case content gaps."
        },
        {
          "id": "ib-prep-101-l12-q5",
          "text": "In IB criterion-marked response, criterion language omission appears during IB: Mixed-Section Decision Drill. What is the strongest immediate correction?",
          "skillId": "ib-prep-101-skill-hl-sl-planning-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore criterion-marked response diagnostics and continue for volume."
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
              "text": "Map each paragraph to the targeted criterion descriptor."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the option that directly fixes criterion language omission.",
          "explanation": "Immediate correction inside criterion-marked response improves transfer to the next timed practice set."
        },
        {
          "id": "ib-prep-101-l12-q6",
          "text": "During IB command-term question, command-term mismatch repeats in IB: Mixed-Section Decision Drill. Which plan should be applied before the next retest?",
          "skillId": "ib-prep-101-skill-tok-section-application",
          "options": [
            {
              "id": "a",
              "text": "Translate command terms into required response moves before drafting. Track outcomes in a criterion alignment sheet and retest the same pattern."
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
          "explanation": "A logged correction cycle in criterion alignment sheet makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "ib-prep-101-l12-ia1",
          "type": "matching_pairs",
          "title": "IB: Mixed-Section Decision Drill Correction Alignment",
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
                "label": "Response ignores command term nuance"
              },
              {
                "id": "l2",
                "label": "IA draft has evidence but weak methodological justification"
              },
              {
                "id": "l3",
                "label": "TOK reasoning lacks clear claim-counterclaim structure"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Translate command term into explicit response requirement before writing"
              },
              {
                "id": "r2",
                "label": "Add criterion-linked method rationale with reliability discussion"
              },
              {
                "id": "r3",
                "label": "Use claim/counterclaim/evaluation scaffold for each TOK paragraph"
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
          "id": "ib-prep-101-l12-a1",
          "type": "image",
          "title": "Hl Sl Planning Snapshot",
          "content": "Visual anchor for IB: Mixed-Section Decision Drill with emphasis on HL/SL planning within practice set planning."
        },
        {
          "id": "ib-prep-101-l12-a2",
          "type": "animation",
          "title": "Tok Walkthrough",
          "content": "Stepwise walkthrough for IB: Mixed-Section Decision Drill showing TOK decisions and strategy log checks."
        }
      ]
    },
    {
      id: "ib-prep-101-l13",
      title: "IB: Adaptive Retry and Transfer Check",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "ib-prep-101-l13-a1",
          "type": "image",
          "title": "Hl Sl Planning Snapshot",
          "content": "Visual anchor for IB: Adaptive Retry and Transfer Check with emphasis on HL/SL planning within practice set planning."
        },
        {
          "id": "ib-prep-101-l13-a2",
          "type": "animation",
          "title": "Tok Walkthrough",
          "content": "Stepwise walkthrough for IB: Adaptive Retry and Transfer Check showing TOK decisions and strategy log checks."
        }
      ]
    },
    {
      id: "ib-prep-101-l14",
      title: "IB: Ib Diploma Readiness Stability Checkpoint",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one HL/SL planning decision rule in IB: Ib Diploma Readiness Stability Checkpoint.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for TOK before your next IB Diploma readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "ib-prep-101-l14-ia1",
          "type": "drag_and_drop",
          "title": "IB: Ib Diploma Readiness Stability Checkpoint Decision-Phase Mapping",
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
                "label": "Programme Plan"
              },
              {
                "id": "execute",
                "label": "Criterion Execution"
              },
              {
                "id": "reflect",
                "label": "Criterion Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Balance HL/SL demands with IA, TOK, and EE milestones",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Answer using command terms aligned to IB markscheme criteria",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Review each response against criterion language and evidence quality",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "ib-prep-101-l14-a1",
          "type": "image",
          "title": "Hl Sl Planning Snapshot",
          "content": "Visual anchor for IB: Ib Diploma Readiness Stability Checkpoint with emphasis on HL/SL planning within practice set planning."
        },
        {
          "id": "ib-prep-101-l14-a2",
          "type": "animation",
          "title": "Tok Walkthrough",
          "content": "Stepwise walkthrough for IB: Ib Diploma Readiness Stability Checkpoint showing TOK decisions and strategy log checks."
        }
      ]
    },
    {
      id: "ib-prep-101-l15",
      title: "IB: Final IB Sprint and Reflection",
      type: "quiz",
      duration: 20,
      questions: [
        {
          "id": "ib-prep-101-l15-q1",
          "text": "In IB: Final IB Sprint and Reflection, a learner keeps missing HL/SL planning items during IB practice. Which adjustment should happen before the next timed timed block?",
          "skillId": "ib-prep-101-skill-hl-sl-planning-workflow",
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
              "text": "Run a short HL/SL planning checkpoint routine and annotate why each miss occurred in a checkpoint log before retesting."
            },
            {
              "id": "d",
              "text": "Switch topics even if HL/SL planning is still the dominant weakness."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the action that creates a repeatable feedback loop for HL/SL planning.",
          "explanation": "Fast targeted feedback plus immediate correction is the most reliable way to improve HL/SL planning."
        },
        {
          "id": "ib-prep-101-l15-q2",
          "text": "A IB IB: Final IB Sprint and Reflection session ends with unstable timing. What should be diagnosed first?",
          "skillId": "ib-prep-101-skill-tok-diagnosis",
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
              "text": "Locate the exact TOK decision point where time spikes, then set micro-checkpoints for that phase."
            }
          ],
          "correctOptionId": "d",
          "hint": "Find the answer that isolates a measurable bottleneck.",
          "explanation": "Pacing stabilizes when the highest-cost decision point is measured and corrected directly."
        },
        {
          "id": "ib-prep-101-l15-q3",
          "text": "IB practice shows correction is happening but not sticking in IB: Final IB Sprint and Reflection. What plan fixes this fastest?",
          "skillId": "ib-prep-101-skill-extended-essay-transfer",
          "options": [
            {
              "id": "a",
              "text": "Pair each corrected extended essay error with a near-transfer item in the next timed block and track it in a checkpoint log."
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
          "id": "ib-prep-101-l15-q4",
          "text": "During post-drill review for IB: Final IB Sprint and Reflection, which fix should be prioritized first for score impact in IB?",
          "skillId": "ib-prep-101-skill-internal-assessment-priority",
          "options": [
            {
              "id": "a",
              "text": "Polish already-mastered question types first."
            },
            {
              "id": "b",
              "text": "Address repeated internal assessment and pacing errors first because they affect many questions in one run."
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
          "id": "ib-prep-101-l15-q5",
          "text": "In IB criterion-marked response, criterion language omission appears during IB: Final IB Sprint and Reflection. What is the strongest immediate correction?",
          "skillId": "ib-prep-101-skill-hl-sl-planning-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore criterion-marked response diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Map each paragraph to the targeted criterion descriptor."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes criterion language omission.",
          "explanation": "Immediate correction inside criterion-marked response improves transfer to the next timed timed block."
        },
        {
          "id": "ib-prep-101-l15-q6",
          "text": "During IB command-term question, command-term mismatch repeats in IB: Final IB Sprint and Reflection. Which plan should be applied before the next retest?",
          "skillId": "ib-prep-101-skill-tok-section-application",
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
              "text": "Translate command terms into required response moves before drafting. Track outcomes in a criterion alignment sheet and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in criterion alignment sheet makes the pacing fix visible and repeatable."
        },
        {
          "id": "ib-prep-101-l15-q7",
          "text": "In a full IB mock, misses appear across multiple strands. What triage order is strongest?",
          "skillId": "ib-prep-101-skill-mock-triage",
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
          "id": "ib-prep-101-l15-q8",
          "text": "A learner finishes one section early but times out on another in IB. What is the best pacing fix?",
          "skillId": "ib-prep-101-skill-section-pacing",
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
          "id": "ib-prep-101-l15-q9",
          "text": "Before submitting a high-stakes IB section, which quality-control habit is most reliable?",
          "skillId": "ib-prep-101-skill-quality-control",
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
          "id": "ib-prep-101-l15-q10",
          "text": "After full-mock review in IB, which next-step plan yields the best one-week improvement?",
          "skillId": "ib-prep-101-skill-remediation-loop",
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
          "id": "ib-prep-101-l15-ia1",
          "type": "sorting_buckets",
          "title": "IB: Final IB Sprint and Reflection Error Taxonomy Sort",
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
                "label": "Criterion Knowledge Gap"
              },
              {
                "id": "strategy",
                "label": "Command-Term Strategy Gap"
              },
              {
                "id": "timing",
                "label": "Assessment Timing Gap"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Criterion descriptor missed in subject response",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Command term treated as summary instead of evaluation",
                "correctBucketId": "strategy"
              },
              {
                "id": "i3",
                "label": "Final section left unreviewed in timed paper",
                "correctBucketId": "timing"
              },
              {
                "id": "i4",
                "label": "Criterion feedback not integrated in next attempt",
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
          "id": "ib-prep-101-l15-a1",
          "type": "image",
          "title": "Hl Sl Planning Snapshot",
          "content": "Visual anchor for IB: Final IB Sprint and Reflection with emphasis on HL/SL planning within timed block planning."
        },
        {
          "id": "ib-prep-101-l15-a2",
          "type": "animation",
          "title": "Tok Walkthrough",
          "content": "Stepwise walkthrough for IB: Final IB Sprint and Reflection showing TOK decisions and checkpoint log checks."
        }
      ]
    }
  ],
};
