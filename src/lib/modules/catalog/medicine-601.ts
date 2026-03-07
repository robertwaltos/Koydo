import type { LearningModule } from "@/lib/modules/types";

export const medicine_601_Module: LearningModule = {
  "id": "medicine-601",
  "title": "Medicine Research and Leadership",
  "description": "Post-401 specialization in Medicine, focused on medicine systems diagnostics, medicine operations and execution design, medicine impact and tradeoff analysis, and medicine governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Medicine",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "medicine",
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
    "Apply advanced methods for medicine systems diagnostics in high-constraint environments",
    "Design robust systems for medicine operations and execution design with measurable control gates",
    "Evaluate interventions in medicine impact and tradeoff analysis with research-grade rigor",
    "Operationalize medicine governance and leadership with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "medicine-601-l01",
      "title": "Medicine Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "medicine-601-l01-a1",
          "type": "image",
          "title": "Diagnostic Framework",
          "content": "A template for defining system boundaries, assumptions, and measurable indicators for a medical system diagnostic."
        }
      ],
      "chunks": [
        {
          "id": "medicine-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "This lesson introduces the advanced boundaries of medicine, focusing on diagnosing complex medical systems and designing safe, effective operational protocols. Understanding these boundaries is essential for making a positive impact in the medical field.",
          "visualPrompt": "Diagram of a hospital system with interconnected nodes like 'Patient Intake', 'Diagnostics', 'Treatment', and 'Billing', with arrows indicating flow and dependencies."
        },
        {
          "id": "medicine-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Learn to map causal pathways that connect factors to outcomes. We will also analyze uncertainty ranges and system dependencies to build a foundation for effective intervention planning.",
          "visualPrompt": "A flowchart illustrating a causal chain, e.g., 'Virus Exposure' -> 'Immune Response' -> 'Symptoms'. An overlay shows a bell curve representing the uncertainty range for recovery time."
        },
        {
          "id": "medicine-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "This recap emphasizes the need for measurable evidence for all medical claims. We will review how to establish confidence bounds and use review checkpoints to ensure findings are reliable and trustworthy.",
          "visualPrompt": "An icon of a certificate or a seal of approval next to a data chart. The chart has clear confidence interval bands."
        }
      ],
      "flashcards": [
        {
          "id": "medicine-601-l01-f1",
          "front": "Medicine Systems Diagnostics",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "medicine-601-l01-f2",
          "front": "Medicine Operations and Execution Design",
          "back": "Execution architecture that determines reliability under stress."
        },
        {
          "id": "medicine-601-l01-f3",
          "front": "Medicine Impact and Tradeoff Analysis",
          "back": "Evaluation discipline for identifying true gains and hidden costs."
        }
      ]
    },
    {
      "id": "medicine-601-l02",
      "title": "Medicine Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "medicine-601-l02-a1",
          "type": "practice",
          "title": "Workflow Design Canvas",
          "content": "A structured canvas for designing a medical workflow, including control gates, rollback triggers, and escalation paths."
        }
      ],
      "chunks": [
        {
          "id": "medicine-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this lab, you will design specialized workflows for specific medical tasks. You will then stress-test these workflows against adverse scenarios to ensure they are robust and reliable.",
          "visualPrompt": "An animation of a digital workflow being designed on a screen. Then, red 'stress' icons (like lightning bolts) appear, and the workflow adapts or shows a failure point."
        },
        {
          "id": "medicine-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "This recap covers the principles of control gate architecture. Workflows must include critical checkpoints, rollback criteria, and threshold-based escalation procedures to maintain safety and control.",
          "visualPrompt": "A diagram of a process with a diamond-shaped decision point labeled 'Control Gate'. Arrows point to 'Proceed', 'Rollback', and 'Escalate to Supervisor'."
        }
      ],
      "interactiveActivities": [
        {
          "id": "medicine-601-l02-act1",
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
      "id": "medicine-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "medicine-601-l03-a1",
          "type": "practice",
          "title": "Key Concepts Review",
          "content": "A summary sheet of core principles from Lessons 1 and 2, including diagnostic frameworks and control gate architecture."
        }
      ],
      "questions": [
        {
          "id": "medicine-601-l03-q1",
          "text": "Which practice most improves medicine systems diagnostics decision quality?",
          "skillId": "medicine-601-diagnostics",
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
          "id": "medicine-601-l03-q2",
          "text": "At level 601, strong execution for medicine operations and execution design requires:",
          "skillId": "medicine-601-operations",
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
          "id": "medicine-601-l03-q3",
          "text": "A defensible approach to medicine impact and tradeoff analysis includes:",
          "skillId": "medicine-601-analysis",
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
          "id": "medicine-601-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "medicine-601-governance",
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
          "id": "medicine-601-l03-q5",
          "text": "What is the best way to compare competing interventions in advanced Medicine?",
          "skillId": "medicine-601-analysis",
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
          "id": "medicine-601-l03-q6",
          "text": "In high-stakes Medicine Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "medicine-601-leadership",
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
          "id": "medicine-601-l03-q7",
          "text": "A mature remediation loop in advanced Medicine should prioritize:",
          "skillId": "medicine-601-operations",
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
          "id": "medicine-601-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Medicine Research and Leadership?",
          "skillId": "medicine-601-leadership",
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
      "id": "medicine-601-l04",
      "title": "Medicine Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "medicine-601-l04-a1",
          "type": "image",
          "title": "Case Deconstruction Template",
          "content": "A worksheet for breaking down a complex medical case into its core constraints, stakeholders, and decision points."
        }
      ],
      "chunks": [
        {
          "id": "medicine-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "This lesson deconstructs the architecture of advanced medical cases. We will analyze competing constraints in systems diagnostics and evaluate the downstream impacts and trade-offs of critical healthcare decisions.",
          "visualPrompt": "An image of a balance scale weighing two different medical treatment options. On one side are icons for 'High Cost' and 'High Efficacy'; on the other, 'Low Cost' and 'Moderate Efficacy'."
        },
        {
          "id": "medicine-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "In this practice, you will frame and compare intervention options across key dimensions: safety, reliability, cost, equity, and governance. This structured approach helps connect theory to defensible decision-making.",
          "visualPrompt": "A dashboard view comparing three different drugs across rows. Columns are labeled 'Safety', 'Cost', 'Efficacy', and 'Equity', with star ratings or color codes in each cell."
        },
        {
          "id": "medicine-601-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "This recap introduces a standard pattern for decision memos. A strong recommendation must clearly state its underlying assumptions, supporting evidence, risk controls, and fallback plans.",
          "visualPrompt": "An icon of a document. A magnifying glass hovers over it, highlighting sections labeled 'Assumptions', 'Evidence', and 'Fallback Plan'."
        }
      ]
    },
    {
      "id": "medicine-601-l05",
      "title": "Medicine Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "medicine-601-l05-a1",
          "type": "practice",
          "title": "Simulation Control Panel Guide",
          "content": "An overview of the interactive controls, metrics dashboard, and event triggers you will manage in the simulation."
        }
      ],
      "chunks": [
        {
          "id": "medicine-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "In this simulation, you will act as an operator managing a live medical scenario. Your task is to balance performance targets with governance constraints, making effective and responsible decisions under pressure.",
          "visualPrompt": "A first-person view of a computer screen showing a simulated hospital dashboard with fluctuating patient vitals and resource levels. The user is clicking on control buttons."
        },
        {
          "id": "medicine-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "This recap focuses on adaptive response design. Learn how effective responses involve updating control gates in real-time while maintaining clear traceability and accountability for all actions.",
          "visualPrompt": "An animation showing a decision log. As a new decision is made in a simulation, a new entry appears in the log with a timestamp, rationale, and operator ID, showing traceability."
        }
      ],
      "interactiveActivities": [
        {
          "id": "medicine-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure medicine scenario and tune controls under uncertainty."
        }
      ]
    },
    {
      "id": "medicine-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "medicine-601-l06-a1",
          "type": "practice",
          "title": "Case & Sim Debrief Guide",
          "content": "A checklist for reviewing performance in case analysis and simulations, focusing on decision quality, tradeoff communication, and control management."
        }
      ],
      "questions": [
        {
          "id": "medicine-601-l06-q1",
          "text": "In advanced casework, the first requirement for defensible recommendations is:",
          "skillId": "medicine-601-defense",
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
          "id": "medicine-601-l06-q2",
          "text": "A resilient strategy for medicine operations and execution design should include:",
          "skillId": "medicine-601-operations",
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
          "id": "medicine-601-l06-q3",
          "text": "When evaluating medicine impact and tradeoff analysis, which method is most rigorous?",
          "skillId": "medicine-601-analysis",
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
          "id": "medicine-601-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "medicine-601-governance",
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
          "id": "medicine-601-l06-q5",
          "text": "In a dynamic simulation, what is the primary purpose of a 'rollback trigger'?",
          "skillId": "medicine-601-operations",
          "options": [
            {
              "id": "a",
              "text": "To assign blame after a failure"
            },
            {
              "id": "b",
              "text": "To automatically reverse a decision when a pre-defined risk threshold is crossed"
            },
            {
              "id": "c",
              "text": "To increase the speed of the simulation"
            },
            {
              "id": "d",
              "text": "To end the scenario immediately"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rollback triggers are pre-planned safety controls to limit the impact of adverse outcomes."
        },
        {
          "id": "medicine-601-l06-q6",
          "text": "When presenting a case analysis, what does 'tradeoff framing' achieve?",
          "skillId": "medicine-601-leadership",
          "options": [
            {
              "id": "a",
              "text": "Hiding the negative aspects of a preferred option"
            },
            {
              "id": "b",
              "text": "Proving one option is perfect"
            },
            {
              "id": "c",
              "text": "Making explicit comparisons between options across multiple, often competing, criteria like cost and safety"
            },
            {
              "id": "d",
              "text": "Focusing only on financial costs"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Tradeoff framing is a core leadership skill for communicating complex decisions transparently."
        },
        {
          "id": "medicine-601-l06-q7",
          "text": "A 'decision memo' for a complex medical case should always begin with:",
          "skillId": "medicine-601-defense",
          "options": [
            {
              "id": "a",
              "text": "The final conclusion"
            },
            {
              "id": "b",
              "text": "A list of team members"
            },
            {
              "id": "c",
              "text": "The problem statement and key assumptions"
            },
            {
              "id": "d",
              "text": "A request for more budget"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A defensible memo grounds the recommendation by first establishing the context, constraints, and assumptions."
        },
        {
          "id": "medicine-601-l06-q8",
          "text": "In the 'Adverse-Condition Decision Run' simulation, successfully balancing performance and governance means:",
          "skillId": "medicine-601-governance",
          "options": [
            {
              "id": "a",
              "text": "Achieving the performance target at any cost"
            },
            {
              "id": "b",
              "text": "Strictly following governance rules, even if it leads to mission failure"
            },
            {
              "id": "c",
              "text": "Ignoring all data and trusting your gut"
            },
            {
              "id": "d",
              "text": "Optimizing for the performance target while staying within the established safety and ethical constraints"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Advanced leadership involves navigating constraints, not ignoring them, to achieve the best possible outcome."
        }
      ]
    },
    {
      "id": "medicine-601-l07",
      "title": "Medicine Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "medicine-601-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A visual tool for mapping the potential positive and negative impacts of a medical intervention across different population segments and timelines."
        }
      ],
      "chunks": [
        {
          "id": "medicine-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "This lesson explores the societal impact of medical decisions. You will learn to map the distribution of benefits, burdens, and long-term effects across diverse stakeholder groups, a crucial skill for equitable leadership.",
          "visualPrompt": "A map of a community with different colored zones. A pop-up shows how a new clinic placement benefits one zone (green) but increases traffic in another (yellow)."
        },
        {
          "id": "medicine-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Here, we examine the architecture of accountability. This includes systems for decision traceability, stakeholder rights for review, and clear obligations for remediation to build and maintain public trust.",
          "visualPrompt": "An organizational chart that shows a clear line of accountability from a clinical team's decision up to a governance board, with a feedback loop for patient review."
        },
        {
          "id": "medicine-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "This recap provides a responsible leadership checklist. This tool helps connect performance outcomes with ethical duties, policy compliance, and system resilience, guiding you to become a more accountable leader.",
          "visualPrompt": "A simple checklist with items like 'Ethical Review?', 'Stakeholder Impact Assessed?', and 'Resilience Plan in Place?', with green checkmarks next to them."
        }
      ],
      "flashcards": [
        {
          "id": "medicine-601-l07-f1",
          "front": "Impact Distribution",
          "back": "How outcomes are allocated across populations and timescales."
        },
        {
          "id": "medicine-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record of evidence, ownership, and rationale."
        },
        {
          "id": "medicine-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "Decision behavior balancing performance, accountability, and ethics."
        }
      ]
    },
    {
      "id": "medicine-601-l08",
      "title": "Medicine Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "medicine-601-l08-a1",
          "type": "practice",
          "title": "Defense Briefing Template",
          "content": "A structured template for building your capstone presentation, including sections for claims, evidence, uncertainty analysis, and stakeholder communication."
        }
      ],
      "chunks": [
        {
          "id": "medicine-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this capstone lab, you will assemble a defense brief for a complex medical recommendation. This involves articulating a clear claim supported by evidence, quantifying uncertainties, and proposing robust remediation pathways.",
          "visualPrompt": "An animation of different pieces of a puzzle (a data chart, a research paper, a risk assessment) coming together to form a single, coherent presentation slide."
        },
        {
          "id": "medicine-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "This section is a rehearsal for an expert panel review. You will practice responding to critical challenges from experts, governance bodies, and stakeholders, sharpening your ability to defend your work under pressure.",
          "visualPrompt": "An illustration of a person standing at a podium presenting to a panel of three experts, who are asking questions with speech bubbles containing question marks."
        }
      ],
      "interactiveActivities": [
        {
          "id": "medicine-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    }
  ]
};
