import type { LearningModule } from "@/lib/modules/types";

export const astronomy_501_Module: LearningModule = {
  "id": "astronomy-501",
  "title": "Astronomy Specialization Studio",
  "description": "Post-401 specialization in Astronomy, focused on astronomy systems diagnostics, astronomy operations and execution design, astronomy impact and tradeoff analysis, and astronomy governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Astronomy",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "astronomy",
    "specialization"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Apply advanced methods for astronomy systems diagnostics in high-constraint environments",
    "Design robust systems for astronomy operations and execution design with measurable control gates",
    "Evaluate interventions in astronomy impact and tradeoff analysis with research-grade rigor",
    "Operationalize astronomy governance and leadership with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "astronomy-501-l01",
      "title": "Astronomy Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "astronomy-501-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "[Visual Prompt: A high-tech diagnostic dashboard overlaying a massive radio telescope array.] Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "astronomy-501-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "In this module, we establish the advanced boundaries of astronomical systems diagnostics. You will learn to define precise system scopes, identify critical failure points in complex observatory networks, and design robust operational execution plans to ensure high-fidelity data collection under strict constraints."
        },
        {
          "id": "astronomy-501-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Explore the mapping of causal pathways in astrophysics. You will identify uncertainty ranges and system dependencies, which are critical for planning interventions and understanding how interconnected variables influence astronomical phenomena and instrument telemetry."
        },
        {
          "id": "astronomy-501-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "Master the establishment of evidence thresholds. Every astronomical claim must be anchored to measurable indicators. We will cover the calculation of confidence bounds and the implementation of review checkpoints to guarantee the validity and reproducibility of your findings."
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-501-l01-f1",
          "front": "Astronomy Systems Diagnostics",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints to identify system anomalies."
        },
        {
          "id": "astronomy-501-l01-f2",
          "front": "Operations and Execution Design",
          "back": "Execution architecture that determines system reliability and data integrity under stress."
        },
        {
          "id": "astronomy-501-l01-f3",
          "front": "Impact and Tradeoff Analysis",
          "back": "Evaluation discipline for identifying true scientific gains and hidden operational costs."
        }
      ]
    },
    {
      "id": "astronomy-501-l02",
      "title": "Astronomy Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "astronomy-501-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "[Visual Prompt: An interactive workflow diagram with stress-test simulation nodes glowing red and green.] Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "astronomy-501-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "Engage in designing specialized workflows for astronomical observation. You will conduct stress tests on these pipelines by simulating adverse scenarios, such as sensor degradation or atmospheric interference, preparing you to mitigate unexpected challenges in live projects."
        },
        {
          "id": "astronomy-501-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "Review the implementation of control gate architecture. Robust workflows require strategic checkpoints, rollback criteria, and threshold-based escalation to ensure that observation processes can adapt dynamically to systemic challenges."
        }
      ],
      "interactiveActivities": [
        {
          "id": "astronomy-501-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match specialist controls with their strongest reliability and governance effects.",
          "pairs": [
            {
              "left": "Pre-commit gate",
              "right": "Prevents avoidable downstream failures"
            },
            {
              "left": "Rollback trigger",
              "right": "Limits blast radius under adverse outcomes"
            },
            {
              "left": "Baseline dashboard",
              "right": "Supports defensible impact attribution"
            },
            {
              "left": "Retrospective loop",
              "right": "Improves next-cycle decision quality"
            }
          ]
        }
      ]
    },
    {
      "id": "astronomy-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "astronomy-501-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "[Visual Prompt: A decision tree highlighting explicit assumptions leading to measurable evidence.] Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "astronomy-501-l03-q1",
          "text": "Which practice most improves astronomy systems diagnostics decision quality?",
          "skillId": "astronomy-501-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Proceed without baseline or assumptions"
            },
            {
              "id": "b",
              "text": "Define assumptions, constraints, and measurable indicators"
            },
            {
              "id": "c",
              "text": "Optimize only for speed in every context"
            },
            {
              "id": "d",
              "text": "Ignore uncertainty and edge conditions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are explicit."
        },
        {
          "id": "astronomy-501-l03-q2",
          "text": "At level 501, strong execution for astronomy operations and execution design requires:",
          "skillId": "astronomy-501-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Owner mapping, checkpoint cadence, and escalation thresholds"
            },
            {
              "id": "b",
              "text": "No role clarity and ad-hoc process changes"
            },
            {
              "id": "c",
              "text": "No retrospective or post-run review"
            },
            {
              "id": "d",
              "text": "No rollback or fallback conditions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable advanced execution needs ownership clarity and threshold-driven governance."
        },
        {
          "id": "astronomy-501-l03-q3",
          "text": "A defensible approach to astronomy impact and tradeoff analysis includes:",
          "skillId": "astronomy-501-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Anecdotes without comparison"
            },
            {
              "id": "b",
              "text": "Baseline comparisons, side-effect analysis, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Changing success criteria after outcomes"
            },
            {
              "id": "d",
              "text": "Excluding difficult scenarios from analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, side-effect checks, and uncertainty disclosure."
        },
        {
          "id": "astronomy-501-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "astronomy-501-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy intent, measurable controls, and remediation pathways"
            },
            {
              "id": "b",
              "text": "Policy language with no measurable enforcement"
            },
            {
              "id": "c",
              "text": "Targets without ownership or escalation design"
            },
            {
              "id": "d",
              "text": "Operations without transparent accountability"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Governance maturity is the operational link between intent, measurement, and corrective action."
        },
        {
          "id": "astronomy-501-l03-q5",
          "text": "What is the best way to compare competing interventions in advanced Astronomy?",
          "skillId": "astronomy-501-skill-advanced-5",
          "options": [
            {
              "id": "a",
              "text": "Choose the option with the most persuasive narrative"
            },
            {
              "id": "b",
              "text": "Score alternatives against shared metrics, side effects, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Switch metrics after results arrive"
            },
            {
              "id": "d",
              "text": "Prioritize whichever option has the shortest memo"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible comparisons require shared metrics, side-effect accounting, and uncertainty disclosure."
        },
        {
          "id": "astronomy-501-l03-q6",
          "text": "In high-stakes Astronomy Specialization Studio execution, which communication protocol is strongest?",
          "skillId": "astronomy-501-skill-advanced-6",
          "options": [
            {
              "id": "a",
              "text": "Broadcast conclusions without assumptions"
            },
            {
              "id": "b",
              "text": "Publish assumptions, confidence ranges, and decision checkpoints to stakeholders"
            },
            {
              "id": "c",
              "text": "Share only final outcomes after completion"
            },
            {
              "id": "d",
              "text": "Limit updates to a single informal channel"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-stakes communication must expose assumptions, confidence, and checkpoints."
        },
        {
          "id": "astronomy-501-l03-q7",
          "text": "A mature remediation loop in advanced Astronomy should prioritize:",
          "skillId": "astronomy-501-skill-advanced-7",
          "options": [
            {
              "id": "a",
              "text": "Blame assignment without system updates"
            },
            {
              "id": "b",
              "text": "Root-cause analysis, control redesign, and measurable follow-up verification"
            },
            {
              "id": "c",
              "text": "One-time fixes without retesting"
            },
            {
              "id": "d",
              "text": "Issue closure based on elapsed time"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature remediation ties root causes to control redesign and verification."
        },
        {
          "id": "astronomy-501-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Astronomy Specialization Studio?",
          "skillId": "astronomy-501-skill-advanced-8",
          "options": [
            {
              "id": "a",
              "text": "Maximize short-term gains regardless of concentration risk"
            },
            {
              "id": "b",
              "text": "Optimize for expected value while enforcing risk limits and contingency capacity"
            },
            {
              "id": "c",
              "text": "Ignore correlated failure modes"
            },
            {
              "id": "d",
              "text": "Commit all resources to one irreversible pathway"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Balanced portfolios combine value optimization with explicit risk limits and contingency options."
        }
      ]
    },
    {
      "id": "astronomy-501-l04",
      "title": "Astronomy Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "astronomy-501-l04-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "[Visual Prompt: A split-screen comparing competing astronomical observation proposals with cost-benefit metrics.] Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "astronomy-501-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "Analyze complex cases that highlight competing constraints in observatory time allocation and diagnostic prioritization. You will learn to navigate the impacts and trade-offs inherent in high-stakes astronomical decision-making."
        },
        {
          "id": "astronomy-501-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "Evaluate competing options across critical dimensions including safety, reliability, cost, equity, and scientific yield. This comparative analysis framework is essential for making informed, defensible decisions in resource-constrained environments."
        },
        {
          "id": "astronomy-501-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "Structure your recommendations using the Decision Memo Pattern. Every proposal must explicitly detail underlying assumptions, supporting evidence, risk controls, and fallback plans to ensure resilience against potential operational failures."
        }
      ]
    },
    {
      "id": "astronomy-501-l05",
      "title": "Astronomy Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "astronomy-501-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "[Visual Prompt: A simulated control room interface with live telemetry and governance alerts.] Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "astronomy-501-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "Operate scenario controls under pressure, balancing data acquisition goals with strict governance and safety constraints. This simulation will test your ability to manage dynamic variables in a live astronomical observation environment."
        },
        {
          "id": "astronomy-501-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "Review the principles of adaptive response design. Effective crisis management requires updating control gates dynamically while maintaining an auditable trail of decisions, ensuring transparency and accountability throughout the process."
        }
      ],
      "interactiveActivities": [
        {
          "id": "astronomy-501-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure astronomy scenario and tune controls under uncertainty."
        }
      ]
    },
    {
      "id": "astronomy-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "astronomy-501-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "[Visual Prompt: A matrix evaluating simulation outcomes against baseline predictions.] Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "astronomy-501-l06-q1",
          "text": "In advanced casework, the first requirement for defensible recommendations is:",
          "skillId": "astronomy-501-skill-case1",
          "options": [
            {
              "id": "a",
              "text": "A preferred option without explicit assumptions"
            },
            {
              "id": "b",
              "text": "A clear baseline, explicit constraints, and success criteria"
            },
            {
              "id": "c",
              "text": "High confidence without evidence logs"
            },
            {
              "id": "d",
              "text": "Single-metric optimization only"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible recommendations begin with explicit assumptions, constraints, and measurable targets."
        },
        {
          "id": "astronomy-501-l06-q2",
          "text": "A resilient strategy for astronomy operations and execution design should include:",
          "skillId": "astronomy-501-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "Checkpointed execution with fallback and escalation criteria"
            },
            {
              "id": "b",
              "text": "One-way execution with no rollback capability"
            },
            {
              "id": "c",
              "text": "No ownership mapping across teams"
            },
            {
              "id": "d",
              "text": "Hidden assumptions and undocumented decisions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Resilience depends on checkpoints, fallback options, and explicit escalation design."
        },
        {
          "id": "astronomy-501-l06-q3",
          "text": "When evaluating astronomy impact and tradeoff analysis, which method is most rigorous?",
          "skillId": "astronomy-501-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "Single success story without controls"
            },
            {
              "id": "b",
              "text": "Comparative baselines plus side-effect and uncertainty analysis"
            },
            {
              "id": "c",
              "text": "Outcome-only narrative without process evidence"
            },
            {
              "id": "d",
              "text": "Retrospective scope changes to fit outcomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation requires comparisons, side-effect analysis, and uncertainty disclosure."
        },
        {
          "id": "astronomy-501-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "astronomy-501-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "Aligns authority, measurement, and remediation obligations"
            },
            {
              "id": "b",
              "text": "Separates policy from operational controls"
            },
            {
              "id": "c",
              "text": "Avoids external review and transparency"
            },
            {
              "id": "d",
              "text": "Treats accountability as optional under pressure"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance links authority, measurable controls, and corrective action."
        },
        {
          "id": "astronomy-501-l06-q5",
          "text": "In tradeoff framing for astronomical observation proposals, what is the primary goal?",
          "skillId": "astronomy-501-skill-advanced-5",
          "options": [
            {
              "id": "a",
              "text": "To select the option with the lowest immediate financial cost"
            },
            {
              "id": "b",
              "text": "To evaluate options across safety, reliability, cost, and scientific yield"
            },
            {
              "id": "c",
              "text": "To ignore edge cases and focus on the most likely outcome"
            },
            {
              "id": "d",
              "text": "To prioritize speed of execution over data fidelity"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Tradeoff framing requires a holistic evaluation across multiple critical dimensions, including safety and scientific yield."
        },
        {
          "id": "astronomy-501-l06-q6",
          "text": "A comprehensive decision memo in advanced astronomy must include:",
          "skillId": "astronomy-501-skill-advanced-6",
          "options": [
            {
              "id": "a",
              "text": "Only the final recommendation and expected benefits"
            },
            {
              "id": "b",
              "text": "Explicit assumptions, evidence, risk controls, and fallback plans"
            },
            {
              "id": "c",
              "text": "A list of team members without specific accountability"
            },
            {
              "id": "d",
              "text": "Vague estimates of potential scientific discovery"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Decision Memo Pattern mandates that recommendations detail assumptions, evidence, risk controls, and fallback plans."
        },
        {
          "id": "astronomy-501-l06-q7",
          "text": "During a live scenario simulation, balancing data acquisition with system safety requires:",
          "skillId": "astronomy-501-skill-advanced-7",
          "options": [
            {
              "id": "a",
              "text": "Ignoring governance alerts to maximize data collection"
            },
            {
              "id": "b",
              "text": "Operating scenario controls dynamically while adhering to governance constraints"
            },
            {
              "id": "c",
              "text": "Shutting down the system at the first sign of an anomaly"
            },
            {
              "id": "d",
              "text": "Delegating all decisions to an automated, unmonitored script"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Live scenario management involves dynamically tuning controls while strictly adhering to safety and governance constraints."
        },
        {
          "id": "astronomy-501-l06-q8",
          "text": "Adaptive response design in astronomical operations ensures that:",
          "skillId": "astronomy-501-skill-advanced-8",
          "options": [
            {
              "id": "a",
              "text": "Initial plans are never altered regardless of new data"
            },
            {
              "id": "b",
              "text": "Control gates are updated dynamically while maintaining an auditable trail of decisions"
            },
            {
              "id": "c",
              "text": "Accountability is waived during high-pressure situations"
            },
            {
              "id": "d",
              "text": "Decisions are made off-the-record to speed up response times"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Adaptive response design requires dynamic updates to control gates while preserving strict traceability and accountability."
        }
      ]
    },
    {
      "id": "astronomy-501-l07",
      "title": "Astronomy Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "astronomy-501-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "[Visual Prompt: A stakeholder map showing the impact of satellite mega-constellations on ground-based astronomy.] Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "astronomy-501-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Map the benefits, burdens, and delayed effects of astronomical projects across diverse stakeholder groups. Understanding this distribution is crucial for recognizing how large-scale observatories and space missions impact local communities, the environment, and the global scientific community."
        },
        {
          "id": "astronomy-501-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Explore the architecture of accountability in international collaborations. This framework covers tracing decision ownership, establishing review rights for affected parties, and defining obligations to remedy systemic issues or ethical breaches."
        },
        {
          "id": "astronomy-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "Apply the Responsible Leadership Checklist to your decision-making process. This tool connects operational outcomes with ethical considerations, ensuring policy compliance and promoting resilience in high-stakes astronomical governance."
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-501-l07-f1",
          "front": "Impact Distribution",
          "back": "How outcomes, benefits, and burdens are allocated across populations and timescales."
        },
        {
          "id": "astronomy-501-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record of evidence, ownership, and rationale for governance review."
        },
        {
          "id": "astronomy-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "Decision behavior balancing scientific performance, accountability, and ethical constraints."
        }
      ]
    },
    {
      "id": "astronomy-501-l08",
      "title": "Astronomy Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "astronomy-501-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "[Visual Prompt: A virtual panel of experts reviewing a capstone defense presentation with real-time feedback metrics.] Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "astronomy-501-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "Synthesize your findings into a comprehensive defense brief. You will articulate your main claims, present supporting evidence, define the boundaries of uncertainty, and outline concrete pathways for remediation, ensuring your proposal is logically airtight."
        },
        {
          "id": "astronomy-501-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "Rehearse your responses to adversarial critiques from an expert panel. You will practice defending your technical methodology, governance frameworks, and stakeholder impact analyses, building the confidence required for real-world scientific defense."
        }
      ],
      "interactiveActivities": [
        {
          "id": "astronomy-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    }
  ]
};
