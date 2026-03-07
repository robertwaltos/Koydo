import type { LearningModule } from "@/lib/modules/types";

export const ethics_of_technology_601_Module: LearningModule = {
  "id": "ethics-of-technology-601",
  "title": "Ethics of Technology Research and Leadership",
  "description": "Post-401 specialization in Ethics of Technology, focused on ethical risk modeling for sociotechnical systems, value-sensitive design and oversight mechanisms, harm-benefit tradeoff and justice analysis, and governance, rights, and responsible innovation through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Philosophy",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "ethics-of-technology",
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
    "Apply advanced methods for ethical risk modeling for sociotechnical systems in high-constraint environments",
    "Design robust systems for value-sensitive design and oversight mechanisms with measurable control gates",
    "Evaluate interventions in harm-benefit tradeoff and justice analysis with research-grade rigor",
    "Operationalize governance, rights, and responsible innovation with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "ethics-of-technology-601-l01",
      "title": "Ethics of Technology Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "ethics-of-technology-601-l01-a1",
          "type": "image",
          "title": "Guided Practice Framework",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence.",
          "visualPrompt": "A high-contrast flowchart illustrating a structured ethical decision-making process, with glowing nodes representing explicit assumptions, measurable evidence, and validation checkpoints."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "This lesson establishes the advanced scope and boundaries of Ethics in Technology. We focus on identifying and modeling ethical risks within sociotechnical systems—environments where human social dynamics and technical infrastructure intersect. We will also examine value-sensitive design principles to ensure technological alignment with human values, alongside robust oversight mechanisms."
        },
        {
          "id": "ethics-of-technology-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Here, we map causal pathways—the complex chains of cause and effect—while identifying ranges of uncertainty and systemic dependencies. This rigorous modeling is crucial for planning interventions, allowing leaders to anticipate how interacting factors might trigger unintended consequences in high-stakes environments."
        },
        {
          "id": "ethics-of-technology-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "All analytical claims must be anchored to measurable indicators. We will establish confidence bounds to quantify the reliability of our claims and design review checkpoints. This ensures that findings are continuously assessed, validated, and adjusted against real-world data."
        }
      ],
      "flashcards": [
        {
          "id": "ethics-of-technology-601-l01-f1",
          "front": "Ethical Risk Modeling For Sociotechnical Systems",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "ethics-of-technology-601-l01-f2",
          "front": "Value-Sensitive Design And Oversight Mechanisms",
          "back": "Execution architecture that determines reliability under stress."
        },
        {
          "id": "ethics-of-technology-601-l01-f3",
          "front": "Harm-Benefit Tradeoff And Justice Analysis",
          "back": "Evaluation discipline for identifying true gains and hidden costs."
        }
      ]
    },
    {
      "id": "ethics-of-technology-601-l02",
      "title": "Ethics of Technology Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "ethics-of-technology-601-l02-a1",
          "type": "practice",
          "title": "Workflow Stress Testing",
          "content": "Design specialized workflows and subject them to simulated adverse scenarios to build resilience.",
          "visualPrompt": "An interactive dashboard interface showing a system under stress, with red warning indicators triggering automated ethical fallback protocols."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, you will design specialized workflows tailored to complex ethical challenges. You will then subject these workflows to rigorous stress tests by simulating adverse, edge-case scenarios. This hands-on practice builds the capacity to anticipate systemic failures and engineer resilient solutions."
        },
        {
          "id": "ethics-of-technology-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "We will architect control gates within our workflows. These gates serve as critical integration points for checkpoints, rollback criteria, and threshold-based escalation procedures. This structure guarantees that risks are actively managed and that systems fail safely when operational limits are breached."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-601-l02-act1",
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
      "id": "ethics-of-technology-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ethics-of-technology-601-l03-a1",
          "type": "practice",
          "title": "Methodology Review",
          "content": "Review your understanding of assumptions, constraints, and measurable evidence before proceeding.",
          "visualPrompt": "A stylized digital lock unlocking as a series of correct methodological steps are aligned in a sequence."
        }
      ],
      "questions": [
        {
          "id": "ethics-of-technology-601-l03-q1",
          "text": "Which practice most improves ethical risk modeling for sociotechnical systems decision quality?",
          "skillId": "ethics-of-technology-601-skill-core",
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
          "id": "ethics-of-technology-601-l03-q2",
          "text": "At level 601, strong execution for value-sensitive design and oversight mechanisms requires:",
          "skillId": "ethics-of-technology-601-skill-execution",
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
          "id": "ethics-of-technology-601-l03-q3",
          "text": "A defensible approach to harm-benefit tradeoff and justice analysis includes:",
          "skillId": "ethics-of-technology-601-skill-eval",
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
          "id": "ethics-of-technology-601-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "ethics-of-technology-601-skill-governance",
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
          "id": "ethics-of-technology-601-l03-q5",
          "text": "What is the best way to compare competing interventions in advanced Philosophy?",
          "skillId": "ethics-of-technology-601-skill-advanced-5",
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
          "id": "ethics-of-technology-601-l03-q6",
          "text": "In high-stakes Ethics of Technology Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "ethics-of-technology-601-skill-advanced-6",
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
          "id": "ethics-of-technology-601-l03-q7",
          "text": "A mature remediation loop in advanced Philosophy should prioritize:",
          "skillId": "ethics-of-technology-601-skill-advanced-7",
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
          "id": "ethics-of-technology-601-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Ethics of Technology Research and Leadership?",
          "skillId": "ethics-of-technology-601-skill-advanced-8",
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
      "id": "ethics-of-technology-601-l04",
      "title": "Ethics of Technology Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "ethics-of-technology-601-l04-a1",
          "type": "image",
          "title": "Tradeoff Framing Matrix",
          "content": "Evaluate competing interventions across safety, reliability, cost, equity, and governance.",
          "visualPrompt": "A multi-dimensional radar chart comparing two technological interventions across axes of safety, equity, cost, and reliability."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "We will analyze a complex case study highlighting the competing constraints inherent in ethical risk modeling for sociotechnical systems. By examining the intricate trade-offs between potential harms, projected benefits, and foundational principles of justice, you will learn to navigate the ethical ambiguities of technology deployment."
        },
        {
          "id": "ethics-of-technology-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "In this practice session, you will evaluate competing interventions across multiple dimensions: safety, reliability, cost, equity, and governance. This comparative analysis reveals the multidimensional complexities of ethical decision-making and the necessity of holistic evaluation."
        },
        {
          "id": "ethics-of-technology-601-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "We will outline the essential components of a professional decision memo. A defensible recommendation must explicitly state underlying assumptions, present empirical evidence, detail implemented risk controls, and define actionable fallback plans for adverse outcomes."
        }
      ]
    },
    {
      "id": "ethics-of-technology-601-l05",
      "title": "Ethics of Technology Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "ethics-of-technology-601-l05-a1",
          "type": "practice",
          "title": "Live Scenario Controls",
          "content": "Balance performance goals with governance constraints in a live simulation.",
          "visualPrompt": "A split-screen interface showing a live data feed on one side and a set of adjustable governance sliders on the other, indicating real-time trade-offs."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "Taking on the role of a governance operator, you will manage live scenario controls under pressure. You must balance aggressive performance targets with strict governance constraints, ensuring that operational actions align with ethical standards without compromising mission-critical outcomes."
        },
        {
          "id": "ethics-of-technology-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "Effective crisis response requires adaptive design. We will explore how to dynamically update control gates in response to evolving circumstances without sacrificing decision traceability or accountability. Transparency must be maintained even when rapid pivots are necessary."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure ethics of technology scenario and tune controls under uncertainty."
        }
      ]
    },
    {
      "id": "ethics-of-technology-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "ethics-of-technology-601-l06-a1",
          "type": "practice",
          "title": "Simulation Review",
          "content": "Reflect on the adaptive responses and control gate updates utilized during the simulation.",
          "visualPrompt": "An icon of a magnifying glass hovering over a timeline of decisions, highlighting key pivot points in a simulation."
        }
      ],
      "questions": [
        {
          "id": "ethics-of-technology-601-l06-q1",
          "text": "In advanced casework, the first requirement for defensible recommendations is:",
          "skillId": "ethics-of-technology-601-skill-case1",
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
          "id": "ethics-of-technology-601-l06-q2",
          "text": "A resilient strategy for value-sensitive design and oversight mechanisms should include:",
          "skillId": "ethics-of-technology-601-skill-case2",
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
          "id": "ethics-of-technology-601-l06-q3",
          "text": "When evaluating harm-benefit tradeoff and justice analysis, which method is most rigorous?",
          "skillId": "ethics-of-technology-601-skill-case3",
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
          "id": "ethics-of-technology-601-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "ethics-of-technology-601-skill-case4",
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
          "id": "ethics-of-technology-601-l06-q5",
          "text": "When mapping stakeholder impact distribution, which factor is most critical to evaluate?",
          "skillId": "ethics-of-technology-601-skill-case5",
          "options": [
            {
              "id": "a",
              "text": "Only the immediate financial benefits to the primary users"
            },
            {
              "id": "b",
              "text": "Delayed effects and disproportionate burdens on marginalized groups"
            },
            {
              "id": "c",
              "text": "The marketing narrative presented to the public"
            },
            {
              "id": "d",
              "text": "The speed of technological deployment"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous impact distribution analysis must account for delayed systemic effects and burdens placed on vulnerable populations."
        },
        {
          "id": "ethics-of-technology-601-l06-q6",
          "text": "A robust accountability architecture must include:",
          "skillId": "ethics-of-technology-601-skill-case6",
          "options": [
            {
              "id": "a",
              "text": "Decision traceability, review rights, and remediation obligations"
            },
            {
              "id": "b",
              "text": "Anonymous decision-making to protect leadership"
            },
            {
              "id": "c",
              "text": "Strict non-disclosure agreements for all stakeholders"
            },
            {
              "id": "d",
              "text": "Automated systems that cannot be overridden"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Accountability requires tracking who made decisions, allowing stakeholders to review them, and mandating corrective actions when necessary."
        },
        {
          "id": "ethics-of-technology-601-l06-q7",
          "text": "The primary purpose of a responsible leadership checklist in technology governance is to:",
          "skillId": "ethics-of-technology-601-skill-case7",
          "options": [
            {
              "id": "a",
              "text": "Bypass legal compliance reviews"
            },
            {
              "id": "b",
              "text": "Ensure decisions balance performance metrics with ethical constraints and accountability"
            },
            {
              "id": "c",
              "text": "Shift blame to external vendors"
            },
            {
              "id": "d",
              "text": "Guarantee that all projects launch on time regardless of risk"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A leadership checklist operationalizes ethics by forcing leaders to verify that performance goals do not violate ethical constraints."
        },
        {
          "id": "ethics-of-technology-601-l06-q8",
          "text": "During an expert defense panel, the most effective way to address uncertainty in your ethical risk model is to:",
          "skillId": "ethics-of-technology-601-skill-case8",
          "options": [
            {
              "id": "a",
              "text": "Deny that any uncertainty exists to project confidence"
            },
            {
              "id": "b",
              "text": "Acknowledge the uncertainty bounds explicitly and present adaptive fallback plans"
            },
            {
              "id": "c",
              "text": "Change the subject to focus only on the positive outcomes"
            },
            {
              "id": "d",
              "text": "Refuse to answer questions about edge cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible leadership requires transparency about what is unknown, coupled with concrete plans for managing that uncertainty."
        }
      ]
    },
    {
      "id": "ethics-of-technology-601-l07",
      "title": "Ethics of Technology Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "ethics-of-technology-601-l07-a1",
          "type": "image",
          "title": "Accountability Architecture",
          "content": "Integrate decision traceability, review rights, and remediation obligations.",
          "visualPrompt": "A structural diagram showing a building supported by three pillars labeled 'Traceability', 'Review Rights', and 'Remediation'."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "We will map the distribution of benefits, burdens, and delayed systemic effects across diverse stakeholder groups. This demographic and temporal analysis is essential for understanding the macro-level societal impacts of technology and ensuring equitable representation in governance."
        },
        {
          "id": "ethics-of-technology-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Accountability architecture integrates decision traceability (tracking the provenance of choices), review rights (empowering stakeholders to challenge decisions), and remediation obligations (mandating corrective actions). These components are the bedrock of institutional trust and transparency."
        },
        {
          "id": "ethics-of-technology-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "We conclude with a responsible leadership checklist. This operational tool connects strategic outcomes with ethical constraints, verifies policy compliance, and promotes resilient leadership behaviors when navigating sociotechnical controversies."
        }
      ],
      "flashcards": [
        {
          "id": "ethics-of-technology-601-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes are allocated across populations and timescales."
        },
        {
          "id": "ethics-of-technology-601-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable record of evidence, ownership, and rationale."
        },
        {
          "id": "ethics-of-technology-601-l07-f3",
          "front": "Responsible leadership",
          "back": "Decision behavior balancing performance, accountability, and ethics."
        }
      ]
    },
    {
      "id": "ethics-of-technology-601-l08",
      "title": "Ethics of Technology Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "ethics-of-technology-601-l08-a1",
          "type": "practice",
          "title": "Defense Brief Assembly",
          "content": "Create a comprehensive brief with well-supported claims, relevant evidence, and clear boundaries of uncertainty.",
          "visualPrompt": "A digital document template with highlighted sections for 'Empirical Evidence', 'Uncertainty Bounds', and 'Remediation Pathways'."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "Collaborate to assemble a comprehensive defense brief. Your brief must articulate well-supported claims, cite empirical evidence, define clear boundaries of uncertainty, and propose concrete remediation pathways for potential systemic failures."
        },
        {
          "id": "ethics-of-technology-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "You will defend your specialization recommendations against rigorous critiques from a simulated panel of technology, governance, and ethics experts. This rehearsal builds the rhetorical resilience needed to justify complex ethical trade-offs in professional, high-stakes environments."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    }
  ]
};
