import type { LearningModule } from "@/lib/modules/types";

export const biology_601_Module: LearningModule = {
  "id": "biology-601",
  "title": "Biology Research and Leadership",
  "description": "Post-401 specialization in Biology, focused on biology systems diagnostics, biology operations and execution design, biology impact and tradeoff analysis, and biology governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Biology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "biology",
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
    "Apply advanced methods for biology systems diagnostics in high-constraint environments",
    "Design robust systems for biology operations and execution design with measurable control gates",
    "Evaluate interventions in biology impact and tradeoff analysis with research-grade rigor",
    "Operationalize biology governance and leadership with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "biology-601-l01",
      "title": "Biology Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "biology-601-l01-a1",
          "type": "image",
          "title": "Foundational Framework Diagram",
          "content": "A diagram illustrating the core pillars of the course: Systems Diagnostics, Operations Design, Impact Analysis, and Governance."
        }
      ],
      "chunks": [
        {
          "id": "biology-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "Delve into the advanced boundaries of biology as a scientific discipline. This lesson introduces structured methods for diagnosing complex biological systems, understanding their components and interactions. You will learn to design efficient operational strategies for biological research, defining the limits and possibilities for real-world applications."
        },
        {
          "id": "biology-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Explore how to map causal pathways in biological systems to understand how different factors influence one another. This section covers modeling uncertainty ranges and system dependencies, which are critical for planning effective and robust interventions."
        },
        {
          "id": "biology-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "Learn the importance of supporting all biological claims with measurable indicators and evidence. This recap emphasizes using confidence bounds and regular review checkpoints to ensure research findings are reliable and conclusions are credible."
        }
      ],
      "flashcards": [
        {
          "id": "biology-601-l01-f1",
          "front": "Biology Systems Diagnostics",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "biology-601-l01-f2",
          "front": "Biology Operations and Execution Design",
          "back": "Execution architecture that determines reliability under stress."
        },
        {
          "id": "biology-601-l01-f3",
          "front": "Biology Impact and Tradeoff Analysis",
          "back": "Evaluation discipline for identifying true gains and hidden costs."
        }
      ]
    },
    {
      "id": "biology-601-l02",
      "title": "Biology Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "biology-601-l02-a1",
          "type": "image",
          "title": "Workflow Design Canvas",
          "content": "A visual template for designing a research workflow, with dedicated sections for checkpoints, rollback criteria, and escalation triggers."
        }
      ],
      "chunks": [
        {
          "id": "biology-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, you will design specialized workflows tailored to specific biological research tasks. After creating a workflow, you will stress-test it by simulating adverse scenarios to evaluate its performance and identify potential weaknesses for improvement."
        },
        {
          "id": "biology-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "This recap reviews how to architect robust workflows by integrating critical control gates. Key elements include mandatory checkpoints for quality assurance, clear rollback criteria to contain failures, and threshold-based escalation pathways for significant issues."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-601-l02-act1",
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
      "id": "biology-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "biology-601-l03-a1",
          "type": "image",
          "title": "Key Concepts Review",
          "content": "A mind map summarizing the core principles from the first two lessons, connecting diagnostics, causal modeling, and workflow controls."
        }
      ],
      "questions": [
        {
          "id": "biology-601-l03-q1",
          "text": "Which practice most improves biology systems diagnostics decision quality?",
          "skillId": "systems-diagnostics",
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
          "id": "biology-601-l03-q2",
          "text": "At level 601, strong execution for biology operations and execution design requires:",
          "skillId": "operations-design",
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
          "id": "biology-601-l03-q3",
          "text": "A defensible approach to biology impact and tradeoff analysis includes:",
          "skillId": "impact-analysis",
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
          "id": "biology-601-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "governance-leadership",
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
          "id": "biology-601-l03-q5",
          "text": "What is the best way to compare competing interventions in advanced Biology?",
          "skillId": "impact-analysis",
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
          "id": "biology-601-l03-q6",
          "text": "In high-stakes Biology Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "decision-review",
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
          "id": "biology-601-l03-q7",
          "text": "A mature remediation loop in advanced Biology should prioritize:",
          "skillId": "operations-design",
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
          "id": "biology-601-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Biology Research and Leadership?",
          "skillId": "governance-leadership",
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
      "id": "biology-601-l04",
      "title": "Biology Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "biology-601-l04-a1",
          "type": "image",
          "title": "Tradeoff Analysis Matrix",
          "content": "An example of a decision matrix used to evaluate a new gene therapy, comparing options across criteria like efficacy, safety, cost, and equity."
        }
      ],
      "chunks": [
        {
          "id": "biology-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "This lesson introduces scenario architecture, a method for framing case studies that highlight the competing constraints in biological systems. You will learn to analyze the complex impacts and trade-offs involved in making high-stakes decisions."
        },
        {
          "id": "biology-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "Practice comparing different strategic options for a given biological challenge. You will frame trade-offs across multiple dimensions, including safety, reliability, cost, equity, and governance, to develop a holistic view of the decision landscape."
        },
        {
          "id": "biology-601-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "Review the standard structure for a professional decision memo. A strong recommendation must be supported by explicit assumptions, verifiable evidence, predefined risk controls, and viable fallback plans to ensure it is robust and defensible."
        }
      ]
    },
    {
      "id": "biology-601-l05",
      "title": "Biology Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "biology-601-l05-a1",
          "type": "image",
          "title": "Simulation Control Dashboard",
          "content": "A mock-up of an interactive dashboard for the simulation, showing adjustable parameters for research funding, ethical constraints, and public opinion."
        }
      ],
      "chunks": [
        {
          "id": "biology-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "In this interactive clinic, you will operate controls in a live, dynamic scenario, balancing research performance goals with governance constraints. This hands-on experience demonstrates the complexities of managing biological research and interventions in real time."
        },
        {
          "id": "biology-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "This recap explores adaptive response design, focusing on how to update control gates and operational plans in response to new data. Learn to maintain full traceability and accountability for all decisions made during an evolving scenario."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure biology scenario and tune controls under uncertainty."
        }
      ]
    },
    {
      "id": "biology-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "biology-601-l06-a1",
          "type": "image",
          "title": "Case Mastery Checklist",
          "content": "A checklist outlining the key components of a masterful case analysis, from problem framing and evidence gathering to recommendation and defense."
        }
      ],
      "questions": [
        {
          "id": "biology-601-l06-q1",
          "text": "In advanced casework, the first requirement for defensible recommendations is:",
          "skillId": "systems-diagnostics",
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
          "id": "biology-601-l06-q2",
          "text": "A resilient strategy for biology operations and execution design should include:",
          "skillId": "operations-design",
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
          "id": "biology-601-l06-q3",
          "text": "When evaluating biology impact and tradeoff analysis, which method is most rigorous?",
          "skillId": "impact-analysis",
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
          "id": "biology-601-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "governance-leadership",
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
          "id": "biology-601-l06-q5",
          "text": "What is the best way to compare competing interventions in advanced Biology?",
          "skillId": "impact-analysis",
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
          "id": "biology-601-l06-q6",
          "text": "In high-stakes Biology Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "decision-review",
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
          "id": "biology-601-l06-q7",
          "text": "A mature remediation loop in advanced Biology should prioritize:",
          "skillId": "operations-design",
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
          "id": "biology-601-l06-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Biology Research and Leadership?",
          "skillId": "governance-leadership",
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
      "id": "biology-601-l07",
      "title": "Biology Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "biology-601-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A visual map showing how a new agricultural biotechnology impacts various stakeholders, including farmers, consumers, corporations, and the environment, over short and long-term horizons."
        }
      ],
      "chunks": [
        {
          "id": "biology-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Learn to map the distribution of benefits, burdens, and delayed effects of a biological initiative across different stakeholder groups. This analysis is vital for ensuring that research and policy are equitable and socially responsible."
        },
        {
          "id": "biology-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "This section details the architecture of accountability in biological governance. Explore the importance of decision traceability, stakeholder rights for review, and clear obligations for remediation to maintain public trust and institutional responsibility."
        },
        {
          "id": "biology-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "Review a comprehensive checklist for responsible leadership. This tool connects research outcomes with ethical duties, policy compliance, and system resilience, serving as a guide for making accountable decisions in the field of biology."
        }
      ],
      "flashcards": [
        {
          "id": "biology-601-l07-f1",
          "front": "Impact Distribution",
          "back": "How outcomes are allocated across populations and timescales."
        },
        {
          "id": "biology-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record of evidence, ownership, and rationale."
        },
        {
          "id": "biology-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "Decision behavior balancing performance, accountability, and ethics."
        }
      ]
    },
    {
      "id": "biology-601-l08",
      "title": "Biology Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "biology-601-l08-a1",
          "type": "image",
          "title": "Capstone Defense Structure",
          "content": "A graphic organizer outlining the required components for the final defense brief: Central Claim, Supporting Evidence, Uncertainty Analysis, and Remediation Pathways."
        }
      ],
      "chunks": [
        {
          "id": "biology-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this lab, you will assemble a capstone defense brief for a complex biological scenario. This involves formulating a well-supported claim, backing it with evidence, quantifying uncertainties, and proposing clear pathways for remediation."
        },
        {
          "id": "biology-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "Rehearse defending your recommendations against critiques from a simulated expert panel representing scientific, governance, and public stakeholder perspectives. This practice builds confidence and sharpens your ability to address challenging questions effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    }
  ]
};
