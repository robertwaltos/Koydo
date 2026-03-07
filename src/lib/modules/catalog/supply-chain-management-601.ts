import type { LearningModule } from "@/lib/modules/types";

export const supply_chain_management_601_Module: LearningModule = {
  "id": "supply-chain-management-601",
  "title": "Supply Chain Management Research and Leadership",
  "description": "Post-401 specialization in Supply Chain Management, focused on business systems diagnostics, business operations and execution design, business impact and tradeoff analysis, and business governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "supply-chain-management",
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
    "Apply advanced methods for business systems diagnostics in high-constraint environments",
    "Design robust systems for business operations and execution design with measurable control gates",
    "Evaluate interventions in business impact and tradeoff analysis with research-grade rigor",
    "Operationalize business governance and leadership with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "supply-chain-management-601-l01",
      "title": "Advanced Diagnostic Frameworks",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "supply-chain-management-601-l01-a1",
          "type": "document",
          "title": "Diagnostic Framework PDF",
          "content": "A downloadable guide to structuring system diagnostics, including templates for assumption logs and constraint mapping."
        }
      ],
      "visualPrompts": [
        "Animated diagram showing the expansion and contraction of a system's scope boundary based on different variables.",
        "A causal loop diagram illustrating dependencies and feedback loops within a sample supply chain.",
        "Chart visualizing data with confidence bounds to demonstrate uncertainty in forecasting."
      ],
      "chunks": [
        {
          "id": "supply-chain-management-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "This lesson introduces advanced concepts for defining scope boundaries in supply chain analysis. We will focus on diagnosing complex business systems and designing operational strategies for high-constraint environments. Mastering this allows you to accurately map the limits and opportunities within a supply chain, forming the basis for all subsequent analysis."
        },
        {
          "id": "supply-chain-management-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Here, we will map causal pathways to identify how different factors influence each other within the system. We will also define uncertainty ranges to quantify the limits of our predictions and map critical system dependencies. This foundational knowledge is crucial for planning effective interventions and understanding potential points of failure."
        },
        {
          "id": "supply-chain-management-601-l01-c3",
          "kind": "recap",
          "title": "Establishing Evidence Thresholds",
          "content": "In this recap, we emphasize that all analytical claims must be linked to measurable indicators and supported by verifiable evidence. We will review the importance of defining confidence bounds for all projections and establishing clear review checkpoints to ensure analytical rigor and build stakeholder trust in your findings."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-601-l01-f1",
          "front": "Business Systems Diagnostics",
          "back": "A structured method for analyzing a system by defining its boundaries, constraints, dependencies, and key performance indicators."
        },
        {
          "id": "supply-chain-management-601-l01-f2",
          "front": "Uncertainty Range",
          "back": "A quantified boundary (e.g., confidence interval) that expresses the potential variability of a forecast or measurement."
        },
        {
          "id": "supply-chain-management-601-l01-f3",
          "front": "Evidence Threshold",
          "back": "The minimum standard of proof required to accept a claim or proceed with a decision, ensuring rigor in analysis."
        }
      ]
    },
    {
      "id": "supply-chain-management-601-l02",
      "title": "Operational Design and Control Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "supply-chain-management-601-l02-a1",
          "type": "tool",
          "title": "Workflow Design Canvas",
          "content": "An interactive tool for learners to build and stress-test their own operational workflows with built-in control gates."
        }
      ],
      "visualPrompts": [
        "An interactive flowchart builder where learners can drag and drop operational steps, decision points, and control gates.",
        "A dashboard view displaying real-time metrics as a workflow is stress-tested, with alerts for threshold breaches."
      ],
      "chunks": [
        {
          "id": "supply-chain-management-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, you will design a specialized operational workflow tailored to a specific supply chain challenge. You will then stress-test your design against a series of disruptive scenarios to identify weaknesses and refine its resilience, ensuring it is robust enough for real-world application."
        },
        {
          "id": "supply-chain-management-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "We will recap the core components of a robust control gate architecture. This includes integrating automated checkpoints to monitor progress, defining clear rollback criteria to contain failures, and establishing threshold-based escalation pathways to ensure critical issues receive timely attention from the right decision-makers."
        }
      ],
      "interactiveActivities": [
        {
          "id": "supply-chain-management-601-l02-act1",
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
      "id": "supply-chain-management-601-l03",
      "title": "Checkpoint 1: Diagnostics and Design",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "supply-chain-management-601-l03-q1",
          "text": "Which practice most improves the quality of a business systems diagnostic?",
          "skillId": "apply-advanced-diagnostics",
          "options": [
            {
              "id": "a",
              "text": "Proceeding without a baseline or assumptions"
            },
            {
              "id": "b",
              "text": "Defining explicit assumptions, constraints, and measurable indicators"
            },
            {
              "id": "c",
              "text": "Optimizing only for speed in every context"
            },
            {
              "id": "d",
              "text": "Ignoring uncertainty and edge conditions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced diagnostics improve when assumptions, constraints, and metrics are made explicit, creating a rigorous and defensible foundation for analysis."
        },
        {
          "id": "supply-chain-management-601-l03-q2",
          "text": "A robust design for business operations and execution requires:",
          "skillId": "design-robust-operations",
          "options": [
            {
              "id": "a",
              "text": "Clear owner mapping, a defined checkpoint cadence, and escalation thresholds"
            },
            {
              "id": "b",
              "text": "Ambiguous role clarity and ad-hoc process changes"
            },
            {
              "id": "c",
              "text": "No retrospective or post-run review process"
            },
            {
              "id": "d",
              "text": "No defined rollback or fallback conditions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable advanced execution needs clear ownership, regular checkpoints, and threshold-driven governance to manage complexity and risk."
        },
        {
          "id": "supply-chain-management-601-l03-q3",
          "text": "A defensible approach to business impact and tradeoff analysis includes:",
          "skillId": "evaluate-business-impact",
          "options": [
            {
              "id": "a",
              "text": "Anecdotes without a comparison group"
            },
            {
              "id": "b",
              "text": "Baseline comparisons, side-effect analysis, and explicit uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Changing success criteria after observing outcomes"
            },
            {
              "id": "d",
              "text": "Excluding difficult or inconvenient scenarios from the analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, a thorough check for unintended side-effects, and transparent disclosure of uncertainty."
        },
        {
          "id": "supply-chain-management-601-l03-q4",
          "text": "Mature governance systems effectively connect:",
          "skillId": "operationalize-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy intent, measurable controls, and defined remediation pathways"
            },
            {
              "id": "b",
              "text": "Policy language with no measurable enforcement mechanism"
            },
            {
              "id": "c",
              "text": "Performance targets without ownership or an escalation design"
            },
            {
              "id": "d",
              "text": "Operations without transparent accountability structures"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Governance maturity is the operational link between strategic intent, measurable controls, and a clear process for corrective action."
        }
      ]
    },
    {
      "id": "supply-chain-management-601-l04",
      "title": "Advanced Case Analysis: Competing Constraints",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "supply-chain-management-601-l04-a1",
          "type": "document",
          "title": "Case Study Brief",
          "content": "A detailed case study of a fictional company facing a supply chain crisis, including data sets and stakeholder interviews."
        }
      ],
      "visualPrompts": [
        "A decision matrix visually comparing three strategic options across criteria like cost, reliability, and ethical impact.",
        "An animated graphic showing how a decision's impact ripples through different parts of the supply chain.",
        "A standardized template for a 'Decision Memo' being filled out step-by-step."
      ],
      "chunks": [
        {
          "id": "supply-chain-management-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "We will deconstruct a complex case study that highlights the competing constraints common in global supply chains. We will analyze how these constraints create difficult tradeoffs between performance, cost, and resilience, setting the stage for a structured decision-making process."
        },
        {
          "id": "supply-chain-management-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing and Analysis",
          "content": "Using the case study, we will practice framing and comparing strategic options across multiple dimensions, including safety, reliability, cost, equity, and governance. This exercise will help you develop a systematic approach to making informed decisions that balance critical, often conflicting, factors."
        },
        {
          "id": "supply-chain-management-601-l04-c3",
          "kind": "recap",
          "title": "The Decision Memo Pattern",
          "content": "We will recap the essential components of a defensible recommendation. Every decision memo should clearly state the underlying assumptions, present the supporting evidence, define the risk controls in place, and outline a viable fallback plan if the primary strategy fails."
        }
      ]
    },
    {
      "id": "supply-chain-management-601-l05",
      "title": "High-Stakes Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "supply-chain-management-601-l05-a1",
          "type": "tool",
          "title": "Live Simulation Interface",
          "content": "Access to a dynamic supply chain simulation where learners can adjust variables and see the immediate impact on system performance."
        }
      ],
      "visualPrompts": [
        "A dynamic dashboard interface for the simulation, with sliders for variables like 'inventory levels' and 'logistics budget'.",
        "Real-time graphs showing key metrics (e.g., delivery times, costs, stockouts) responding to learner actions.",
        "Pop-up 'news alerts' that introduce unexpected disruptions into the simulation."
      ],
      "chunks": [
        {
          "id": "supply-chain-management-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Control",
          "content": "In this interactive clinic, you will manage a simulated supply chain through a crisis. You will operate scenario controls in real-time, balancing performance targets against governance constraints and unexpected disruptions. This hands-on experience will test your ability to apply theoretical knowledge under pressure."
        },
        {
          "id": "supply-chain-management-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "We will recap the principles of designing adaptive responses to crises. Effective responses require updating control gates and operational parameters dynamically, while critically maintaining full traceability and accountability for every decision made during the event."
        }
      ],
      "interactiveActivities": [
        {
          "id": "supply-chain-management-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure supply chain management scenario and tune controls under uncertainty to prevent system collapse."
        }
      ]
    },
    {
      "id": "supply-chain-management-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "questions": [
        {
          "id": "supply-chain-management-601-l06-q1",
          "text": "In advanced casework, the first requirement for a defensible recommendation is:",
          "skillId": "defend-recommendations",
          "options": [
            {
              "id": "a",
              "text": "A preferred option without explicit assumptions"
            },
            {
              "id": "b",
              "text": "A clear baseline, explicit constraints, and pre-defined success criteria"
            },
            {
              "id": "c",
              "text": "High confidence without an evidence log"
            },
            {
              "id": "d",
              "text": "Optimization based on a single metric only"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible recommendations begin with an explicit foundation: a clear baseline for comparison, defined constraints, and measurable targets."
        },
        {
          "id": "supply-chain-management-601-l06-q2",
          "text": "A resilient strategy for business operations should always include:",
          "skillId": "design-robust-operations",
          "options": [
            {
              "id": "a",
              "text": "Checkpointed execution with defined fallback and escalation criteria"
            },
            {
              "id": "b",
              "text": "A one-way execution path with no rollback capability"
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
          "explanation": "Resilience in complex operations depends on checkpoints to monitor progress, fallback options for when things go wrong, and explicit escalation paths."
        },
        {
          "id": "supply-chain-management-601-l06-q3",
          "text": "When evaluating competing interventions, which method is most rigorous?",
          "skillId": "evaluate-business-impact",
          "options": [
            {
              "id": "a",
              "text": "A single success story without control groups"
            },
            {
              "id": "b",
              "text": "Comparative baselines plus side-effect and uncertainty analysis"
            },
            {
              "id": "c",
              "text": "An outcome-only narrative without process evidence"
            },
            {
              "id": "d",
              "text": "Retrospectively changing the scope to better fit the outcomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation requires direct comparison against a baseline, a proactive search for unintended consequences, and a transparent accounting of uncertainty."
        },
        {
          "id": "supply-chain-management-601-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "operationalize-governance",
          "options": [
            {
              "id": "a",
              "text": "Tightly aligns decision-making authority, performance measurement, and remediation obligations"
            },
            {
              "id": "b",
              "text": "Separates high-level policy from operational controls"
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
          "explanation": "Mature governance creates a closed loop that links authority, measurable controls, and the obligation to take corrective action."
        }
      ]
    },
    {
      "id": "supply-chain-management-601-l07",
      "title": "Governance, Ethics, and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "supply-chain-management-601-l07-a1",
          "type": "document",
          "title": "Ethical Governance Framework",
          "content": "A checklist and guide for evaluating the ethical and public impact dimensions of supply chain decisions."
        }
      ],
      "visualPrompts": [
        "An animated map showing how a single decision (e.g., sourcing from a new region) creates distributed impacts on different stakeholder groups.",
        "A flowchart illustrating an accountability architecture, with clear paths for decision traceability, review, and remediation.",
        "A visual of a 'Responsible Leadership Checklist' with key principles."
      ],
      "chunks": [
        {
          "id": "supply-chain-management-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "This lesson explores how to map the distribution of impacts—both positive and negative—across all stakeholders. This includes analyzing the allocation of benefits and burdens, as well as identifying delayed or second-order effects that may arise from decisions made within the supply chain."
        },
        {
          "id": "supply-chain-management-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "We will focus on designing an architecture of accountability for decision-making processes. This includes ensuring full traceability for key decisions, establishing rights for independent review, and defining clear obligations for remediation when outcomes are negative. These elements are crucial for maintaining trust and integrity."
        },
        {
          "id": "supply-chain-management-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "To ensure responsible leadership, we introduce a comprehensive checklist. This tool connects strategic outcomes with ethical considerations, adherence to governance policies, and the organizational capacity to adapt and recover from challenges. It serves as a practical guide for making defensible and responsible decisions."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-601-l07-f1",
          "front": "Impact Distribution",
          "back": "The way in which the positive and negative outcomes of a decision are allocated across different populations and timescales."
        },
        {
          "id": "supply-chain-management-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable and unbroken record of the evidence, ownership, and rationale behind a specific decision."
        },
        {
          "id": "supply-chain-management-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making approach that balances performance goals with accountability, ethical duties, and public impact."
        }
      ]
    },
    {
      "id": "supply-chain-management-601-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "supply-chain-management-601-l08-a1",
          "type": "tool",
          "title": "Defense Brief Builder",
          "content": "A structured template that guides learners through assembling the key components of a defensible recommendation."
        }
      ],
      "visualPrompts": [
        "A structured document template for the 'Defense Brief' with clearly marked sections for claims, evidence, and uncertainty.",
        "A simulated video conference screen showing an 'Expert Panel' with different personas (e.g., CFO, Head of Operations, Legal Counsel)."
      ],
      "chunks": [
        {
          "id": "supply-chain-management-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this interactive activity, you will synthesize your analysis into a formal defense brief. This document will articulate your core claims, link them to specific evidence, define the boundaries of uncertainty, and propose clear remediation pathways. This exercise hones the critical thinking and communication skills required for executive-level recommendations."
        },
        {
          "id": "supply-chain-management-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "During this rehearsal, you will practice responding to critiques from a simulated panel of experts representing technical, governance, and stakeholder perspectives. This rehearsal is crucial for preparing you to confidently address challenging questions, defend your position with data, and communicate complex tradeoffs effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "supply-chain-management-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend your specialization recommendations under adversarial cross-examination from a panel of virtual experts."
        }
      ]
    },
    {
      "id": "supply-chain-management-601-l09",
      "title": "Checkpoint 3: Capstone Defense",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "supply-chain-management-601-l09-q1",
          "text": "When leading a cross-functional decision review, what is the most critical communication practice?",
          "skillId": "lead-decision-reviews",
          "options": [
            {
              "id": "a",
              "text": "Focusing only on the positive aspects of the preferred option"
            },
            {
              "id": "b",
              "text": "Making tradeoffs between options explicit and quantifying them where possible"
            },
            {
              "id": "c",
              "text": "Allowing each function to present its view without synthesizing them"
            },
            {
              "id": "d",
              "text": "Keeping the underlying data and assumptions confidential to avoid confusion"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective leadership in decision reviews requires making tradeoffs transparent and explicit, enabling a shared understanding of what is being gained and lost with each option."
        },
        {
          "id": "supply-chain-management-601-l09-q2",
          "text": "During an expert critique, your uncertainty analysis is challenged. What is the strongest response?",
          "skillId": "defend-recommendations",
          "options": [
            {
              "id": "a",
              "text": "Dismiss the challenge by stating your high confidence in the result"
            },
            {
              "id": "b",
              "text": "Acknowledge the uncertainty, explain how it was bounded, and describe the contingency plans in place"
            },
            {
              "id": "c",
              "text": "Remove the uncertainty analysis from your recommendation to simplify the discussion"
            },
            {
              "id": "d",
              "text": "Argue that all models have uncertainty and that it is not a significant factor"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A strong defense acknowledges limitations, demonstrates rigorous methodology (bounding uncertainty), and shows foresight (contingency planning)."
        },
        {
          "id": "supply-chain-management-601-l09-q3",
          "text": "A mature remediation loop in response to an operational failure should prioritize:",
          "skillId": "operationalize-governance",
          "options": [
            {
              "id": "a",
              "text": "Assigning blame to an individual without systemic review"
            },
            {
              "id": "b",
              "text": "Implementing a quick, one-time fix without retesting the system"
            },
            {
              "id": "c",
              "text": "Root-cause analysis, control redesign, and measurable follow-up verification"
            },
            {
              "id": "d",
              "text": "Closing the issue based on elapsed time rather than resolution"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Mature remediation focuses on systemic improvement by linking root causes to control redesign and verifying that the new control is effective."
        },
        {
          "id": "supply-chain-management-601-l09-q4",
          "text": "Which portfolio decision rule best balances performance and resilience in a volatile supply chain environment?",
          "skillId": "evaluate-business-impact",
          "options": [
            {
              "id": "a",
              "text": "Maximizing short-term gains regardless of concentration risk"
            },
            {
              "id": "b",
              "text": "Committing all resources to a single, irreversible pathway"
            },
            {
              "id": "c",
              "text": "Ignoring correlated failure modes across different initiatives"
            },
            {
              "id": "d",
              "text": "Optimizing for expected value while enforcing risk limits and maintaining contingency capacity"
            }
          ],
          "correctOptionId": "d",
          "explanation": "A balanced and resilient portfolio strategy combines value optimization with explicit risk management, including diversification, risk limits, and contingency options."
        }
      ]
    }
  ]
};
