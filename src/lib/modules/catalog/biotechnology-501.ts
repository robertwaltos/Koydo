import type { LearningModule } from "@/lib/modules/types";

export const biotechnology_501_Module: LearningModule = {
  "id": "biotechnology-501",
  "title": "Biotechnology Specialization Studio",
  "description": "Post-401 specialization in Biotechnology, focused on bioprocess optimization, translational validation, regulatory quality systems, and bioethics governance through advanced casework, simulation, and capstone-level defense.",
  "subject": "Biotechnology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "life-sciences",
    "biotech"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply advanced methods for bioprocess optimization in high-constraint environments",
    "Engineer repeatable workflows that improve translational validation under uncertainty",
    "Evaluate interventions in regulatory quality systems with research-grade evidence standards",
    "Operationalize bioethics governance with transparent accountability and remediation loops",
    "Lead cross-functional decision reviews with clear tradeoff reasoning",
    "Deliver capstone-quality artifacts that withstand expert critique"
  ],
  "lessons": [
    {
      "id": "biotechnology-501-l01",
      "title": "Biotechnology Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "biotechnology-501-l01-a1",
          "type": "image",
          "title": "Core Concepts Framework",
          "content": "A flowchart illustrating the core concepts: Bioprocess Optimization feeding into Translational Validation, both governed by Regulatory and Ethical frameworks."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-501-l01-c1",
          "kind": "concept",
          "title": "Advanced Scope and Decision Boundaries",
          "content": "This lesson explores the advanced boundaries of biotechnology, focusing on how bioprocess optimization and translational validation interact within complex systems. Understanding this interplay is crucial for making informed, high-impact decisions in the field."
        },
        {
          "id": "biotechnology-501-l01-c2",
          "kind": "concept",
          "title": "Causal Structure Under Uncertainty",
          "content": "Before designing interventions, it is essential to model causal pathways—the connections between causes and effects. This section focuses on mapping these pathways while explicitly accounting for uncertainty ranges and hidden assumptions to better predict outcomes."
        },
        {
          "id": "biotechnology-501-l01-c3",
          "kind": "recap",
          "title": "Evidence and Rigor Standards",
          "content": "We recap the standards for advanced work in biotechnology. All claims must be supported by measurable indicators and qualified with confidence bounds. Progress must be evaluated at critical review checkpoints to ensure accuracy and integrity."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-501-l01-f1",
          "front": "Bioprocess Optimization",
          "back": "The systematic improvement of biological processes by defining explicit assumptions, measuring key variables, and making calculated tradeoff decisions."
        },
        {
          "id": "biotechnology-501-l01-f2",
          "front": "Translational Validation",
          "back": "The process of ensuring that scientific discoveries are effective and reliable when applied in real-world, operational settings."
        },
        {
          "id": "biotechnology-501-l01-f3",
          "front": "Regulatory Quality Systems",
          "back": "The formal systems and processes that ensure biotech products and operations meet safety, efficacy, and compliance standards set by authorities."
        }
      ]
    },
    {
      "id": "biotechnology-501-l02",
      "title": "Biotechnology Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "biotechnology-501-l02-a1",
          "type": "practice",
          "title": "Workflow Designer",
          "content": "An interactive diagram of a bioprocess workflow where users can drag and drop control gates, rollback points, and monitoring alerts."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-501-l02-c1",
          "kind": "practice",
          "title": "Method Sequence and Stress Test",
          "content": "In this interactive lab, you will design a specialized, cross-domain workflow using advanced biotechnology methods. You will then stress-test your design against challenging scenarios, including edge cases and adversarial conditions, to ensure its resilience and effectiveness."
        },
        {
          "id": "biotechnology-501-l02-c2",
          "kind": "recap",
          "title": "Controls and Failure Gates",
          "content": "This recap emphasizes the necessity of embedding controls within specialist workflows. We will review the roles of control gates for process management, rollback criteria for safe failure, and accountability checkpoints for maintaining operational integrity."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-501-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match advanced controls with the strongest expected system effect.",
          "pairs": [
            {
              "left": "Pre-commit review gate",
              "right": "Prevents avoidable downstream defects"
            },
            {
              "left": "Rollback threshold",
              "right": "Contains impact quickly when failures emerge"
            },
            {
              "left": "Baseline monitoring",
              "right": "Enables defensible impact attribution"
            },
            {
              "left": "Retrospective cycle",
              "right": "Improves next-iteration design quality"
            }
          ]
        },
        {
          "id": "biotechnology-501-l02-act2",
          "type": "sorting_buckets",
          "title": "Advanced Constraint Classification",
          "description": "Sort constraints into technical, governance, and stakeholder-impact categories.",
          "buckets": [
            "Technical",
            "Governance",
            "Stakeholder Impact"
          ],
          "items": [
            {
              "text": "Latency budget violation",
              "bucket": "Technical"
            },
            {
              "text": "Audit traceability requirement",
              "bucket": "Governance"
            },
            {
              "text": "Trust and adoption decline",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Escalation policy noncompliance",
              "bucket": "Governance"
            }
          ]
        }
      ]
    },
    {
      "id": "biotechnology-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "biotechnology-501-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "questions": [
        {
          "id": "biotechnology-501-l03-q1",
          "text": "Which practice most improves specialist performance in bioprocess optimization?",
          "skillId": "biotechnology-501-skill-specialist",
          "options": [
            {
              "id": "a",
              "text": "Rely on undocumented assumptions"
            },
            {
              "id": "b",
              "text": "Define constraints, monitor leading indicators, and test edge cases"
            },
            {
              "id": "c",
              "text": "Avoid post-decision review"
            },
            {
              "id": "d",
              "text": "Optimize only for speed"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced performance depends on explicit constraints, monitoring, and stress testing."
        },
        {
          "id": "biotechnology-501-l03-q2",
          "text": "At level 501, the curriculum emphasizes:",
          "skillId": "biotechnology-501-skill-level",
          "options": [
            {
              "id": "a",
              "text": "specialist method execution, cross-domain integration, and high-stakes scenario performance"
            },
            {
              "id": "b",
              "text": "Unbounded iteration with no controls"
            },
            {
              "id": "c",
              "text": "Single-metric decision making"
            },
            {
              "id": "d",
              "text": "No uncertainty communication"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 501 design is built around specialist method execution, cross-domain integration, and high-stakes scenario performance."
        },
        {
          "id": "biotechnology-501-l03-q3",
          "text": "What best strengthens translational validation execution quality?",
          "skillId": "biotechnology-501-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "No owner mapping or escalation path"
            },
            {
              "id": "b",
              "text": "Explicit ownership, checkpoints, and governance thresholds"
            },
            {
              "id": "c",
              "text": "Ad-hoc process changes without logs"
            },
            {
              "id": "d",
              "text": "Skipping retrospective review"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Quality execution needs ownership clarity, checkpoints, and threshold-driven governance."
        },
        {
          "id": "biotechnology-501-l03-q4",
          "text": "A rigorous approach to regulatory quality systems should include:",
          "skillId": "biotechnology-501-skill-evaluation",
          "options": [
            {
              "id": "a",
              "text": "Outcome claims without baselines"
            },
            {
              "id": "b",
              "text": "Baseline comparison, side-effect checks, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Removal of difficult scenarios"
            },
            {
              "id": "d",
              "text": "Changing criteria after seeing results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines, side-effect checks, and uncertainty disclosure make results defensible."
        },
        {
          "id": "biotechnology-501-l03-q5",
          "text": "A mature bioethics governance system should connect:",
          "skillId": "biotechnology-501-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy and practice without measurement"
            },
            {
              "id": "b",
              "text": "Policy, measurable thresholds, and remediation pathways"
            },
            {
              "id": "c",
              "text": "Technical delivery with no accountability"
            },
            {
              "id": "d",
              "text": "Performance targets with no risk controls"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Governance quality comes from linking policy intent to measurable controls and action."
        },
        {
          "id": "biotechnology-501-l03-q6",
          "text": "In high-stakes Biotechnology Specialization Studio execution, which communication protocol is strongest?",
          "skillId": "biotechnology-501-skill-advanced-6",
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
          "id": "biotechnology-501-l03-q7",
          "text": "A mature remediation loop in advanced Biotechnology should prioritize:",
          "skillId": "biotechnology-501-skill-advanced-7",
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
          "id": "biotechnology-501-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Biotechnology Specialization Studio?",
          "skillId": "biotechnology-501-skill-advanced-8",
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
      "id": "biotechnology-501-l04",
      "title": "Biotechnology Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "biotechnology-501-l04-a1",
          "type": "image",
          "title": "Tradeoff Matrix Example",
          "content": "An example of a tradeoff matrix used to evaluate therapeutic candidates. Rows list options (e.g., 'Drug A', 'Gene Therapy B'), and columns list criteria ('Efficacy', 'Safety', 'Cost')."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-501-l04-c1",
          "kind": "example",
          "title": "Case Stakes and Competing Objectives",
          "content": "We will analyze a case study of a therapeutic program transitioning from lab-stage results to clinical and regulatory milestones. Learners will map the strategic objectives, critical failure points, and governance constraints that shape decision-making in this high-stakes environment."
        },
        {
          "id": "biotechnology-501-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix and Option Scoring",
          "content": "This section introduces the tradeoff matrix as a tool for scoring competing options. We will evaluate choices against criteria like effectiveness, reliability, equity, and feasibility, enabling a structured and defensible decision-making process."
        },
        {
          "id": "biotechnology-501-l04-c3",
          "kind": "recap",
          "title": "Recovery and Adaptation Design",
          "content": "In this recap, we focus on translating failure signatures—the warning signs of system breakdown—into proactive safeguards. This includes designing response playbooks and measurable adaptation loops to ensure the organization learns from failure and improves resilience."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-501-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A decision-making tool that scores competing options against a set of weighted criteria to clarify choices and justify outcomes."
        },
        {
          "id": "biotechnology-501-l04-f2",
          "front": "Failure Signature",
          "back": "A specific, recurring pattern of data or events that indicates a known type of system failure is likely to occur."
        },
        {
          "id": "biotechnology-501-l04-f3",
          "front": "Adaptation Loop",
          "back": "A structured, measurable process for analyzing failures and using the insights to systematically improve future designs and operations."
        }
      ]
    },
    {
      "id": "biotechnology-501-l05",
      "title": "Biotechnology Simulation and Response Studio",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "biotechnology-501-l05-a1",
          "type": "practice",
          "title": "Simulation Dashboard",
          "content": "A mock dashboard of the simulation interface, showing real-time data streams, adjustable parameters (e.g., 'resource allocation'), and alert triggers."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-501-l05-c1",
          "kind": "practice",
          "title": "Scenario Modeling",
          "content": "In this interactive simulation, learners will configure model assumptions, set operational thresholds, and design intervention pathways. You will be challenged to make critical decisions under pressure and observe their systemic consequences in real time."
        },
        {
          "id": "biotechnology-501-l05-c2",
          "kind": "recap",
          "title": "Debrief and Decision Quality Review",
          "content": "After each simulation, teams conduct a structured debrief. The goal is to assess performance against targets, identify unintended side effects, and evaluate compliance with governance protocols, thereby improving future decision-making quality."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-501-l05-act1",
          "type": "scenario_practice",
          "title": "High-Stakes Intervention Simulation",
          "description": "Compare three advanced interventions and justify which best improves bioprocess optimization and bioethics governance.",
          "instructions": [
            "Define objective, constraints, and escalation triggers.",
            "Record near-term and long-term tradeoffs for each intervention.",
            "Select the metric set that confirms or falsifies your chosen approach."
          ]
        },
        {
          "id": "biotechnology-501-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match advanced risk scenarios with the strongest mitigation actions.",
          "pairs": [
            {
              "left": "Ambiguous ownership chain",
              "right": "Define accountable owner map and escalation rights"
            },
            {
              "left": "Weak measurement signal",
              "right": "Strengthen baseline instrumentation and quality checks"
            },
            {
              "left": "Policy-execution drift",
              "right": "Re-align controls to explicit governance standards"
            },
            {
              "left": "Stakeholder trust erosion",
              "right": "Increase transparency and corrective feedback cadence"
            }
          ]
        }
      ]
    },
    {
      "id": "biotechnology-501-l06",
      "title": "Checkpoint 2: Research and Systems Decisions",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "biotechnology-501-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "questions": [
        {
          "id": "biotechnology-501-l06-q1",
          "text": "When using a tradeoff matrix in a case analysis, what is the primary goal?",
          "skillId": "biotechnology-501-skill-specialist",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is perfect"
            },
            {
              "id": "b",
              "text": "To systematically evaluate competing options against defined criteria"
            },
            {
              "id": "c",
              "text": "To ignore all constraints"
            },
            {
              "id": "d",
              "text": "To focus only on financial cost"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is for structured comparison across multiple criteria, not just cost, to make a defensible decision."
        },
        {
          "id": "biotechnology-501-l06-q2",
          "text": "In the context of a biotechnology case study, a 'failure signature' refers to:",
          "skillId": "biotechnology-501-skill-level",
          "options": [
            {
              "id": "a",
              "text": "A random, unpredictable event"
            },
            {
              "id": "b",
              "text": "A document signed when a project fails"
            },
            {
              "id": "c",
              "text": "A recurring pattern of indicators that predicts a specific type of system breakdown"
            },
            {
              "id": "d",
              "text": "The final report of a failed clinical trial"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A failure signature is a predictable pattern of signals that warns of a known risk, allowing for proactive intervention."
        },
        {
          "id": "biotechnology-501-l06-q3",
          "text": "What is the key function of an 'adaptation loop' in response to a system failure?",
          "skillId": "biotechnology-501-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "To assign blame to a specific team member"
            },
            {
              "id": "b",
              "text": "To convert learnings from an incident into measurable improvements in system design and controls"
            },
            {
              "id": "c",
              "text": "To ensure the same failure does not happen again by ignoring it"
            },
            {
              "id": "d",
              "text": "To quickly revert to the original, flawed design"
            }
          ],
          "correctOptionId": "b",
          "explanation": "An adaptation loop is a structured process for learning from failures and implementing verified improvements."
        },
        {
          "id": "biotechnology-501-l06-q4",
          "text": "When configuring a high-stakes simulation, which of the following is most critical to define upfront?",
          "skillId": "biotechnology-501-skill-evaluation",
          "options": [
            {
              "id": "a",
              "text": "The desired outcome without any metrics"
            },
            {
              "id": "b",
              "text": "The core assumptions, intervention pathways, and success thresholds"
            },
            {
              "id": "c",
              "text": "A list of people to blame if the simulation fails"
            },
            {
              "id": "d",
              "text": "The color scheme of the user interface"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A valid simulation requires clearly defined assumptions, possible actions (interventions), and measurable criteria for success or failure."
        },
        {
          "id": "biotechnology-501-l06-q5",
          "text": "The primary purpose of a 'Debrief and Decision Quality Review' after a simulation is to:",
          "skillId": "biotechnology-501-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Quickly move on to the next task"
            },
            {
              "id": "b",
              "text": "Analyze performance against targets, identify unintended side effects, and assess governance compliance"
            },
            {
              "id": "c",
              "text": "Celebrate success regardless of the outcome"
            },
            {
              "id": "d",
              "text": "Only discuss what went right"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The debrief is a critical learning step to analyze the entire performance, including outcomes, side effects, and process adherence."
        },
        {
          "id": "biotechnology-501-l06-q6",
          "text": "In the 'High-Stakes Intervention Simulation', justifying your chosen approach requires you to:",
          "skillId": "biotechnology-501-skill-advanced-6",
          "options": [
            {
              "id": "a",
              "text": "Argue that your choice has no downsides"
            },
            {
              "id": "b",
              "text": "Acknowledge and explain the near-term and long-term tradeoffs involved"
            },
            {
              "id": "c",
              "text": "Select the option that is fastest, regardless of risk"
            },
            {
              "id": "d",
              "text": "Present your conclusion without any supporting data"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A strong justification in a complex system involves transparently explaining the tradeoffs and why your chosen balance of factors is optimal."
        },
        {
          "id": "biotechnology-501-l06-q7",
          "text": "A robust response to a simulated supply chain disruption in a bioprocess would involve:",
          "skillId": "biotechnology-501-skill-advanced-7",
          "options": [
            {
              "id": "a",
              "text": "Waiting for the disruption to resolve on its own"
            },
            {
              "id": "b",
              "text": "Activating a pre-defined contingency plan while monitoring key performance indicators"
            },
            {
              "id": "c",
              "text": "Immediately halting all production indefinitely"
            },
            {
              "id": "d",
              "text": "Switching to an untested supplier without validation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A mature response relies on planned contingencies and data-driven monitoring, not passive waiting or reckless action."
        },
        {
          "id": "biotechnology-501-l06-q8",
          "text": "Connecting case analysis to simulation, how does identifying a 'failure signature' in a past case help in a future simulation?",
          "skillId": "biotechnology-501-skill-advanced-8",
          "options": [
            {
              "id": "a",
              "text": "It is irrelevant to future work"
            },
            {
              "id": "b",
              "text": "It allows you to design the simulation to specifically test the system's resilience against that known failure mode"
            },
            {
              "id": "c",
              "text": "It guarantees the failure will not happen in the simulation"
            },
            {
              "id": "d",
              "text": "It proves simulations are unnecessary"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Insights from past failures (case studies) inform the design of simulations, allowing teams to practice and validate their response to known risks."
        }
      ]
    },
    {
      "id": "biotechnology-501-l07",
      "title": "Biotechnology Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "biotechnology-501-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "An infographic mapping a biotech decision to its stakeholders. The center shows the decision (e.g., 'Launch New Diagnostic Test'), with radiating lines to groups like 'Patients', 'Regulators', 'Insurers', and 'Community', detailing the potential positive and negative impacts on each."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-501-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "This lesson focuses on evaluating how the outcomes of biotechnology—both positive and negative—are distributed among different stakeholders. We will analyze immediate, delayed, and indirect effects to ensure a comprehensive and equitable assessment."
        },
        {
          "id": "biotechnology-501-l07-c2",
          "kind": "concept",
          "title": "Accountability System Design",
          "content": "Here, we explore the architecture of a robust accountability system. Key components include traceability standards to log decisions, review rights for stakeholders to ensure oversight, and remediation obligations to correct for negative outcomes, all of which are essential for building trust."
        },
        {
          "id": "biotechnology-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "We conclude with a responsible leadership checklist, a practical tool for ensuring alignment between strategy, ethics, policy, and operational controls. This guide helps leaders verify that their decisions are not only effective but also accountable and ethically sound."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-501-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how the benefits, costs, and risks of a technology are spread across different stakeholder groups, both now and in the future."
        },
        {
          "id": "biotechnology-501-l07-f2",
          "front": "Decision Traceability",
          "back": "The ability to reconstruct the history of a decision, including the data used, the rationale applied, and who was accountable."
        },
        {
          "id": "biotechnology-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "A leadership approach that integrates performance goals with ethical principles, risk management, and clear accountability structures."
        }
      ]
    },
    {
      "id": "biotechnology-501-l08",
      "title": "Biotechnology Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "biotechnology-501-l08-a1",
          "type": "practice",
          "title": "Capstone Charter Template",
          "content": "A downloadable Capstone Charter template, including sections for Problem Statement, Objectives, Key Metrics, Constraints, Governance Plan, and Evidence Strategy."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-501-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter and Evidence Pack",
          "content": "In this collaborative activity, learners will construct a capstone charter that defines their project's objectives, constraints, success metrics, and governance controls. You will also develop a plan for gathering the evidence needed to defend your final proposal."
        },
        {
          "id": "biotechnology-501-l08-c2",
          "kind": "recap",
          "title": "Defense Rehearsal",
          "content": "The final practice round is a defense rehearsal. Learners will present their capstone proposals and respond to rigorous critiques from a panel simulating technical experts, governance representatives, and public stakeholders, honing their ability to communicate and defend complex decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-501-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a specialization capstone charter with measurable outcomes and remediation pathways.",
          "instructions": [
            "Define objective, scope boundaries, and operating assumptions.",
            "Specify at least three measurable indicators and confidence thresholds.",
            "Define escalation and corrective-action criteria for failure scenarios."
          ]
        },
        {
          "id": "biotechnology-501-l08-act2",
          "type": "debate_simulator",
          "title": "Capstone Defense Panel",
          "description": "Defend your capstone against expert critique on rigor, risk, and accountability."
        }
      ]
    }
  ]
};
