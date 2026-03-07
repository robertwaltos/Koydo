import type { LearningModule } from "@/lib/modules/types";

export const music_production_301_Module: LearningModule = {
  "id": "music-production-301",
  "title": "Music Production Systems and Analysis",
  "description": "Level 301 curriculum in Music Production, emphasizing DAW workflows, sound design, mix engineering, release quality, and real-world decision quality through structured practice and assessment.",
  "subject": "Music",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "music",
    "technology"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for DAW workflows and sound design",
    "Apply structured methods to plan, execute, and review mix engineering tasks",
    "Interpret evidence using metrics, constraints, and context",
    "Diagnose common failure modes and design recovery actions",
    "Communicate tradeoffs clearly to technical and non-technical audiences",
    "Build repeatable systems for sustained improvement in Music Production"
  ],
  "lessons": [
    {
      "id": "music-production-301-l01",
      "title": "Core Models for Music Production",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "music-production-301-l01-a1",
          "type": "image",
          "title": "Causal Chain Diagram",
          "content": "A visual diagram showing how an initial action in music production (e.g., poor gain staging) leads to a series of effects, culminating in a final outcome (e.g., digital clipping in the mix)."
        }
      ],
      "chunks": [
        {
          "id": "music-production-301-l01-c1",
          "kind": "concept",
          "title": "Building a Common Language",
          "content": "In professional music production, clear and precise language is essential. We'll start by defining the scope of our projects—what's included and what's not. We will also identify our 'unit of analysis,' which could be a single snare track, a vocal bus, or an entire mix. Using consistent terms ensures everyone on a team understands each other, which is critical for making smart decisions and collaborating effectively."
        },
        {
          "id": "music-production-301-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To solve problems effectively, we must understand their root causes. This lesson explores how to identify our assumptions, recognize dependencies between production steps, and map our constraints, such as a tight deadline or limited computing power. For example, understanding that improper gain staging (the cause) leads to digital clipping (the effect) allows us to fix the source of the problem. This approach empowers us to create better, more reliable solutions."
        },
        {
          "id": "music-production-301-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "This section introduces practices that ensure our work is reliable and effective. We will cover the importance of using high-quality evidence (like reference tracks), keeping accurate logs of our production decisions, and establishing clear accountability for project outcomes. These habits are the foundation for achieving consistent, professional results in music production."
        }
      ],
      "flashcards": [
        {
          "id": "music-production-301-l01-f1",
          "front": "Unit of Analysis",
          "back": "The specific element or process you are evaluating to make a decision, such as a single audio track or a mastering chain."
        },
        {
          "id": "music-production-301-l01-f2",
          "front": "Constraint Mapping",
          "back": "A method for identifying the limitations (e.g., time, budget, technology) that define your available options."
        },
        {
          "id": "music-production-301-l01-f3",
          "front": "Evidence Standard",
          "back": "The quality threshold that information must meet before you use it to make a decision, like using a calibrated meter instead of just your ears."
        }
      ]
    },
    {
      "id": "music-production-301-l02",
      "title": "Music Production Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "music-production-301-l02-a1",
          "type": "image",
          "title": "DAW Workflow Flowchart",
          "content": "A flowchart illustrating a complete production workflow, from initial inputs (raw audio files) through process checkpoints (gain staging, editing) to final outputs (mixed stereo file)."
        }
      ],
      "chunks": [
        {
          "id": "music-production-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will design a complete workflow for a music production task. This involves defining your inputs (e.g., raw vocal tracks, MIDI files), setting up quality checkpoints (e.g., checking for phase alignment), specifying your desired outputs (e.g., a print of the final vocal bus), and establishing rollback triggers to undo changes if a problem occurs. This hands-on exercise will solidify your understanding of structured production processes."
        },
        {
          "id": "music-production-301-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "We'll recap the importance of logging every key decision. A good log entry includes the decision, the rationale, the expected effect, and how you'll verify the result. For example: 'Decision: Applied a high-pass filter at 100Hz to the acoustic guitar. Rationale: To remove low-end rumble and create space for the bass. Verification: A/B test with and without the filter.' This practice is crucial for analyzing and learning from your work."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-production-301-l02-act1",
          "type": "matching_pairs",
          "title": "Workflow Component Match",
          "description": "Match each workflow component to its primary purpose.",
          "pairs": [
            {
              "left": "Input Audit",
              "right": "Prevents low-quality audio from entering the mix stage"
            },
            {
              "left": "Checkpoint Gate",
              "right": "Stops the propagation of known issues, like clipping"
            },
            {
              "left": "Outcome Metric",
              "right": "Measures whether the objective (e.g., target loudness) was met"
            },
            {
              "left": "Retrospective Log",
              "right": "Captures lessons to improve the next project"
            }
          ]
        },
        {
          "id": "music-production-301-l02-act2",
          "type": "sorting_buckets",
          "title": "Risk Classification",
          "description": "Sort each production risk into the correct category.",
          "buckets": [
            "Strategic",
            "Operational",
            "Quality"
          ],
          "items": [
            {
              "text": "The artist's vision is misaligned with the genre",
              "bucket": "Strategic"
            },
            {
              "text": "File handoff between editing and mixing is unclear",
              "bucket": "Operational"
            },
            {
              "text": "Inconsistent criteria for an 'acceptable' vocal take",
              "bucket": "Quality"
            },
            {
              "text": "No reference track for loudness and tone",
              "bucket": "Quality"
            }
          ]
        }
      ]
    },
    {
      "id": "music-production-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "music-production-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "music-production-301-l03-q1",
          "text": "Which action best improves decision-making in a DAW workflow?",
          "skillId": "music-production-301-skill-decision-making",
          "options": [
            {
              "id": "a",
              "text": "Rely on one unverified example from a forum"
            },
            {
              "id": "b",
              "text": "Define criteria, compare alternatives, and test assumptions"
            },
            {
              "id": "c",
              "text": "Skip using meters and move directly to printing the mix"
            },
            {
              "id": "d",
              "text": "Avoid documenting your settings and rationale"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit criteria and testable assumptions improve the reliability and transferability of your production skills."
        },
        {
          "id": "music-production-301-l03-q2",
          "text": "In sound design, what is the strongest indicator of a high-quality process?",
          "skillId": "music-production-301-skill-process-quality",
          "options": [
            {
              "id": "a",
              "text": "How fast you can create a sound"
            },
            {
              "id": "b",
              "text": "Traceable steps, quality checkpoints, and measurable outcomes"
            },
            {
              "id": "c",
              "text": "Unstructured experimentation without saving presets or logs"
            },
            {
              "id": "d",
              "text": "Anecdotes about a time it worked well once"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-quality processes are observable, repeatable, and measurable, leading to consistent results."
        },
        {
          "id": "music-production-301-l03-q3",
          "text": "When evaluating a mix, which practice supports a trustworthy conclusion?",
          "skillId": "music-production-301-skill-evaluation",
          "options": [
            {
              "id": "a",
              "text": "Only listening on high-end studio monitors"
            },
            {
              "id": "b",
              "text": "Using baseline comparisons (A/B testing) and failure analysis"
            },
            {
              "id": "c",
              "text": "Changing your reference track after your mix is done"
            },
            {
              "id": "d",
              "text": "Removing all context from your listening notes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines and failure analysis prevent biased conclusions and improve the quality of your mix decisions."
        },
        {
          "id": "music-production-301-l03-q4",
          "text": "A mature strategy for achieving release-quality audio should prioritize:",
          "skillId": "music-production-301-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Maximizing loudness at any cost"
            },
            {
              "id": "b",
              "text": "Balancing loudness, dynamic range, and translation across systems"
            },
            {
              "id": "c",
              "text": "Decisions based only on intuition without using meters"
            },
            {
              "id": "d",
              "text": "No review of the master on different playback systems"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A balanced approach ensures the final product sounds good everywhere, aligning long-term performance with professional accountability."
        }
      ]
    },
    {
      "id": "music-production-301-l04",
      "title": "Methods, Metrics, and Failure Modes",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "music-production-301-l04-a1",
          "type": "image",
          "title": "Metrics Dashboard",
          "content": "A mock-up of a music production dashboard showing leading indicators (e.g., short-term LUFS), lagging outcomes (e.g., final integrated LUFS), and diagnostic tools (e.g., a spectrum analyzer)."
        }
      ],
      "chunks": [
        {
          "id": "music-production-301-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "When choosing a production technique, you must weigh several factors. Consider your constraints (e.g., CPU power), the quality of your source audio, and the 'cost of error'—what happens if you make the wrong choice? For example, choosing between subtractive EQ and dynamic EQ to fix a harsh cymbal involves a trade-off between precision and CPU usage. We'll practice comparing options and justifying our choices for specific scenarios."
        },
        {
          "id": "music-production-301-l04-c2",
          "kind": "example",
          "title": "Understanding Metrics",
          "content": "Effective metrics help us stay on track. We'll connect leading indicators (which predict future outcomes, like a high short-term LUFS reading) with lagging outcomes (the final result, like the integrated LUFS of the master). We also use diagnostic measures (like a spectrum analyzer) to understand why something is happening. This framework allows teams to spot problems early and respond deliberately, rather than reacting after it's too late."
        },
        {
          "id": "music-production-301-l04-c3",
          "kind": "recap",
          "title": "Common Failure Types",
          "content": "We will categorize common failures in music production. These include data issues (a corrupted audio file), process problems (forgetting to check phase alignment), execution errors (applying the wrong compressor setting), and communication breakdowns (the artist and engineer have different goals). By classifying failures, we can design specific, targeted plans to prevent them in the future."
        }
      ],
      "flashcards": [
        {
          "id": "music-production-301-l04-f1",
          "front": "Leading Indicator",
          "back": "A metric that signals a probable future outcome. Example: A channel meter flashing red indicates likely clipping in the final bounce."
        },
        {
          "id": "music-production-301-l04-f2",
          "front": "Failure Taxonomy",
          "back": "A structured classification of failure types (e.g., process, execution) used to design targeted solutions."
        },
        {
          "id": "music-production-301-l04-f3",
          "front": "Cost of Error",
          "back": "The negative impact of a wrong decision, such as the time lost from having to re-record a part or recall a mix."
        }
      ]
    },
    {
      "id": "music-production-301-l05",
      "title": "Case Studio: Improving a Production System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "music-production-301-l05-a1",
          "type": "image",
          "title": "Decision Tree",
          "content": "A visual decision tree for a mix scenario. It starts with a problem ('muddy mix') and branches into different intervention options, each showing potential trade-offs and outcomes."
        }
      ],
      "chunks": [
        {
          "id": "music-production-301-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you'll analyze a realistic production scenario. Imagine a client has rejected a mix for being 'muddy.' Your task is to break down the problem by identifying the objectives (a clear, powerful mix), context (a dense arrangement), constraints (a 24-hour deadline), and potential interventions (e.g., strategic EQ, arrangement changes). You will document the trade-offs for each option to inform your final decision."
        },
        {
          "id": "music-production-301-l05-c2",
          "kind": "recap",
          "title": "The Improvement Proposal",
          "content": "Based on your case analysis, you will draft a structured improvement proposal. This includes clear success criteria (e.g., client approval, passing an A/B test against a reference), assigning responsibility for each action, and setting a timeline for follow-up. This exercise simulates how professionals diagnose problems and implement reliable solutions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-production-301-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to improve mix engineering outcomes under time and quality constraints.",
          "instructions": [
            "Define success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit.",
            "Specify a metric that confirms success in the next cycle."
          ]
        },
        {
          "id": "music-production-301-l05-act2",
          "type": "matching_pairs",
          "title": "Intervention to Outcome Mapping",
          "description": "Connect each intervention with its most likely system-level effect.",
          "pairs": [
            {
              "left": "Stricter criteria for 'comping' vocals",
              "right": "Higher quality source tracks and less downstream editing"
            },
            {
              "left": "Automated alerts for channel clipping",
              "right": "Faster detection of gain staging errors"
            },
            {
              "left": "Post-project retrospective meeting",
              "right": "Improved teamwork and process in future projects"
            },
            {
              "left": "Standardized track naming and color coding",
              "right": "Reduced ambiguity and faster navigation in large sessions"
            }
          ]
        }
      ]
    },
    {
      "id": "music-production-301-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "music-production-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "music-production-301-l06-q1",
          "text": "A vocal track is very dynamic, but your computer's CPU is low. Which method is the most resource-efficient choice for controlling its level?",
          "skillId": "music-production-301-skill-method-selection",
          "options": [
            {
              "id": "a",
              "text": "A complex multi-band compressor with a linear phase filter"
            },
            {
              "id": "b",
              "text": "Manually editing the clip gain of the audio file"
            },
            {
              "id": "c",
              "text": "Using four different compressors in series"
            },
            {
              "id": "d",
              "text": "Applying pitch correction to the entire track"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Manual clip gain adjustment is a highly effective way to control dynamics that consumes almost no CPU, making it the best choice under a tight constraint."
        },
        {
          "id": "music-production-301-l06-q2",
          "text": "In the context of preventing a 'muddy' mix, what is the best example of a 'leading indicator'?",
          "skillId": "music-production-301-skill-metrics",
          "options": [
            {
              "id": "a",
              "text": "The final integrated LUFS of the mastered song"
            },
            {
              "id": "b",
              "text": "The client's feedback after hearing the final mix"
            },
            {
              "id": "c",
              "text": "A spectrum analyzer showing frequency buildup in the low-mids during mixing"
            },
            {
              "id": "d",
              "text": "The total number of tracks in the project"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A spectrum analyzer provides real-time data that predicts a future outcome (muddiness), allowing you to fix it before it becomes a problem. The other options are lagging indicators."
        },
        {
          "id": "music-production-301-l06-q3",
          "text": "A final master sounds distorted on streaming services, but the WAV file sounds clean. This is most likely what type of failure?",
          "skillId": "music-production-301-skill-failure-analysis",
          "options": [
            {
              "id": "a",
              "text": "An execution error, where the mix engineer applied too much saturation"
            },
            {
              "id": "b",
              "text": "A data error, where the original recordings were corrupted"
            },
            {
              "id": "c",
              "text": "A process failure, where inter-sample peaks were not controlled for"
            },
            {
              "id": "d",
              "text": "A strategic failure, where the wrong genre was chosen"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Loud masters can have inter-sample peaks that cause distortion after data compression (e.g., for streaming). Failing to check for this with a True Peak meter is a process failure."
        },
        {
          "id": "music-production-301-l06-q4",
          "text": "You've identified that inconsistent track labeling slowed down your last project. What is the most effective system-level improvement?",
          "skillId": "music-production-301-skill-system-improvement",
          "options": [
            {
              "id": "a",
              "text": "Ask everyone to try harder next time"
            },
            {
              "id": "b",
              "text": "Create a mandatory track template with pre-named and colored tracks"
            },
            {
              "id": "c",
              "text": "Buy a faster computer to open projects more quickly"
            },
            {
              "id": "d",
              "text": "Blame the tracking engineer for the poor labeling"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A template is a system-level fix that makes the correct process the easiest one to follow, preventing the problem from recurring without relying on memory or effort."
        }
      ]
    }
  ]
};
