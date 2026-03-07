import type { LearningModule } from "@/lib/modules/types";

export const economics_601_Module: LearningModule = {
  "id": "economics-601",
  "title": "Economics Research and Leadership",
  "description": "Post-401 specialization in Economics, focused on business systems diagnostics, business operations and execution design, business impact and tradeoff analysis, and business governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "economics",
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
    "Apply advanced methods for business systems diagnostics in high-constraint environments.",
    "Design robust systems for business operations and execution with measurable control gates.",
    "Evaluate interventions and their tradeoffs with research-grade rigor.",
    "Operationalize business governance with accountable, transparent, and auditable systems.",
    "Lead cross-functional decision reviews with explicit tradeoff communication.",
    "Defend complex recommendations under expert critique using evidence and uncertainty bounds."
  ],
  "lessons": [
    {
      "id": "economics-601-l01",
      "title": "Advanced Economic Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "economics-601-l01-a1",
          "type": "visual_prompt",
          "title": "System Boundary Diagram",
          "content": "An animated diagram showing a complex business system, with a dotted line defining the analysis scope, highlighting inputs, outputs, and external factors being excluded."
        },
        {
          "id": "economics-601-l01-a2",
          "type": "visual_prompt",
          "title": "Causal Loop Diagram",
          "content": "A visual model illustrating feedback loops and dependencies between variables, with nodes representing system components and arrows indicating causal links and potential delays."
        }
      ],
      "chunks": [
        {
          "id": "economics-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "Effective diagnostics begin with rigorously defining the analytical frame. This section covers techniques for setting system boundaries, identifying key variables, and making explicit assumptions about external factors to ensure a focused and defensible analysis."
        },
        {
          "id": "economics-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Before designing interventions, we must model the system's logic. Learners will map causal pathways, identify critical dependencies, and quantify uncertainty ranges for key variables. This creates a probabilistic understanding of potential outcomes and system vulnerabilities."
        },
        {
          "id": "economics-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds and Validation",
          "content": "This recap establishes the standard for empirical validation. All claims must be supported by measurable indicators and fall within specified confidence bounds. We will introduce the role of review checkpoints to ensure analytical rigor is maintained throughout the process."
        }
      ],
      "flashcards": [
        {
          "id": "economics-601-l01-f1",
          "front": "Business Systems Diagnostics",
          "back": "A specialization requiring explicit assumptions, defined system boundaries, and measurable constraints to analyze performance and risk."
        },
        {
          "id": "economics-601-l01-f2",
          "front": "Business Operations and Execution Design",
          "back": "The architecture of workflows, controls, and governance that determines operational reliability and resilience under stress."
        },
        {
          "id": "economics-601-l01-f3",
          "front": "Business Impact and Tradeoff Analysis",
          "back": "A rigorous evaluation discipline for quantifying the intended benefits, unintended side effects, and hidden costs of an intervention."
        }
      ]
    },
    {
      "id": "economics-601-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "economics-601-l02-a1",
          "type": "practice",
          "title": "Interactive Workflow Builder",
          "content": "Utilize a drag-and-drop interface to construct a business process, defining control gates, escalation triggers, and data dashboards for a given scenario."
        }
      ],
      "chunks": [
        {
          "id": "economics-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Testing",
          "content": "In this lab, learners design specialized operational workflows using a simulation toolkit. They will then conduct quantitative stress tests by introducing adverse scenarios, such as resource shortages or demand shocks, to identify failure points and refine the design for resilience."
        },
        {
          "id": "economics-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "We will review the principles of robust workflow architecture. Key concepts include designing auditable decision gates, implementing automated rollback protocols, and defining clear, threshold-based escalation pathways to ensure process integrity and accountability."
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-601-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match specialist controls with their primary reliability and governance effects.",
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
      "id": "economics-601-l03",
      "title": "Checkpoint 1: Foundations and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "economics-601-l03-a1",
          "type": "summary",
          "title": "Key Concepts Review",
          "content": "Review the principles of boundary design, causal modeling, and control gate architecture before starting the quiz."
        }
      ],
      "questions": [
        {
          "id": "economics-601-l03-q1",
          "text": "Which practice most improves the quality of a business systems diagnostic?",
          "skillId": "economics-601-skill-diagnostics",
          "options": [
            {
              "id": "a",
              "text": "Proceeding without a baseline or explicit assumptions"
            },
            {
              "id": "b",
              "text": "Defining clear system boundaries, assumptions, and measurable indicators"
            },
            {
              "id": "c",
              "text": "Optimizing only for speed in every context"
            },
            {
              "id": "d",
              "text": "Ignoring uncertainty and potential edge conditions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced diagnostics improve when assumptions, constraints, and metrics are made explicit, creating a defensible analytical frame."
        },
        {
          "id": "economics-601-l03-q2",
          "text": "At an advanced level, strong execution design requires:",
          "skillId": "economics-601-skill-execution-design",
          "options": [
            {
              "id": "a",
              "text": "Clear ownership, checkpointed cadences, and defined escalation thresholds"
            },
            {
              "id": "b",
              "text": "Ambiguous roles and ad-hoc process changes"
            },
            {
              "id": "c",
              "text": "No retrospective or post-mortem review process"
            },
            {
              "id": "d",
              "text": "No defined rollback or fallback conditions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable advanced execution depends on ownership clarity, structured reviews, and threshold-driven governance to manage complexity."
        },
        {
          "id": "economics-601-l03-q3",
          "text": "A defensible approach to impact and tradeoff analysis includes:",
          "skillId": "economics-601-skill-impact-analysis",
          "options": [
            {
              "id": "a",
              "text": "Relying on anecdotes without a comparison group"
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
              "text": "Excluding inconvenient scenarios from the analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, a systematic check for side-effects, and transparent disclosure of uncertainty."
        },
        {
          "id": "economics-601-l03-q4",
          "text": "Mature governance systems operationally connect:",
          "skillId": "economics-601-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy intent, measurable controls, and pre-defined remediation pathways"
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
          "explanation": "Governance maturity is the operational link between strategic intent, its measurement via controls, and the corrective actions taken when deviations occur."
        },
        {
          "id": "economics-601-l03-q5",
          "text": "In causal modeling, what is the primary purpose of identifying system dependencies?",
          "skillId": "economics-601-skill-causal-modeling",
          "options": [
            {
              "id": "a",
              "text": "To simplify the model by ignoring interconnected variables"
            },
            {
              "id": "b",
              "text": "To understand how changes in one part of the system might propagate and cause unintended effects elsewhere"
            },
            {
              "id": "c",
              "text": "To focus exclusively on linear, one-to-one relationships"
            },
            {
              "id": "d",
              "text": "To prove that all variables are independent of each other"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Identifying dependencies is crucial for anticipating second-order effects and understanding the systemic impact of an intervention."
        },
        {
          "id": "economics-601-l03-q6",
          "text": "Why is quantifying uncertainty ranges a critical step before designing an intervention?",
          "skillId": "economics-601-skill-uncertainty-modeling",
          "options": [
            {
              "id": "a",
              "text": "To guarantee a single, predictable outcome"
            },
            {
              "id": "b",
              "text": "To create a realistic picture of the potential spectrum of outcomes, including best-case and worst-case scenarios"
            },
            {
              "id": "c",
              "text": "To eliminate all risks from the project plan"
            },
            {
              "id": "d",
              "text": "To prove that the model is 100% accurate"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Quantifying uncertainty provides a probabilistic view of outcomes, which is essential for risk management and designing resilient strategies."
        },
        {
          "id": "economics-601-l03-q7",
          "text": "A 'rollback trigger' in a control gate architecture is designed to:",
          "skillId": "economics-601-skill-control-gates",
          "options": [
            {
              "id": "a",
              "text": "Ensure a flawed process continues to completion regardless of negative signals"
            },
            {
              "id": "b",
              "text": "Automatically revert a process to a previous stable state when a critical failure threshold is breached"
            },
            {
              "id": "c",
              "text": "Assign blame after a project has failed"
            },
            {
              "id": "d",
              "text": "Manually approve every single step in a workflow"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A rollback trigger is a pre-defined control that contains damage by automatically reverting to a known-good state, limiting the blast radius of a failure."
        },
        {
          "id": "economics-601-l03-q8",
          "text": "What is the primary goal of stress-testing a newly designed business workflow?",
          "skillId": "economics-601-skill-stress-testing",
          "options": [
            {
              "id": "a",
              "text": "To prove the workflow only functions under ideal conditions"
            },
            {
              "id": "b",
              "text": "To identify hidden vulnerabilities and failure modes before deployment in a live environment"
            },
            {
              "id": "c",
              "text": "To demonstrate that the workflow requires no resources to operate"
            },
            {
              "id": "d",
              "text": "To generate performance metrics that look as positive as possible"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Stress-testing is a proactive measure to discover how a system behaves under adverse conditions, allowing for improvements to resilience and reliability."
        }
      ]
    },
    {
      "id": "economics-601-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "economics-601-l04-a1",
          "type": "visual_prompt",
          "title": "Tradeoff Matrix",
          "content": "A table is shown comparing three different policy options. Rows represent evaluation criteria (Cost, Reliability, Equity), and cells are color-coded (green/yellow/red) to show performance, visually summarizing the tradeoffs."
        }
      ],
      "chunks": [
        {
          "id": "economics-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "This lesson deconstructs a complex business case involving multi-variate constraints and competing stakeholder interests. We will architect the scenario by mapping its core tensions, resource limitations, and ethical dilemmas to set the stage for a structured analysis."
        },
        {
          "id": "economics-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing and Analysis",
          "content": "Learners will evaluate competing intervention strategies from the case study. This involves a disciplined comparison across key dimensions like safety, reliability, cost, and equity, using both quantitative and qualitative evidence to frame the tradeoffs for decision-makers."
        },
        {
          "id": "economics-601-l04-c3",
          "kind": "recap",
          "title": "The Defensible Decision Memo",
          "content": "We will synthesize our findings into a standardized decision memo. This recap outlines the critical components of a defensible recommendation: explicit assumptions, supporting evidence, risk controls, uncertainty bounds, and pre-defined fallback plans."
        }
      ]
    },
    {
      "id": "economics-601-l05",
      "title": "Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "economics-601-l05-a1",
          "type": "practice",
          "title": "Live Control Dashboard",
          "content": "Interact with a dashboard showing real-time data feeds from a simulated business environment. Adjust operational parameters and governance thresholds to meet performance targets while managing emergent risks."
        }
      ],
      "chunks": [
        {
          "id": "economics-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Management",
          "content": "In this interactive clinic, learners operate a simulated business system facing dynamic conditions. They must make real-time decisions, balancing performance targets with governance constraints, and respond to unexpected events using the control systems they've designed."
        },
        {
          "id": "economics-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "This recap focuses on the principles of adaptive management. We will discuss how to dynamically recalibrate control gates in response to new information while maintaining a clear audit trail and accountability for all adjustments made during the live scenario."
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Manage a high-pressure economic scenario by tuning system controls in real-time to mitigate risks and optimize outcomes under uncertainty."
        }
      ]
    },
    {
      "id": "economics-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "economics-601-l06-a1",
          "type": "summary",
          "title": "Key Concepts Review",
          "content": "Review the principles of tradeoff analysis, the decision memo structure, and adaptive response design before starting the quiz."
        }
      ],
      "questions": [
        {
          "id": "economics-601-l06-q1",
          "text": "In advanced casework, the first requirement for a defensible recommendation is:",
          "skillId": "economics-601-skill-case-foundations",
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
              "text": "High confidence without documented evidence"
            },
            {
              "id": "d",
              "text": "Optimization based on a single, convenient metric"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible recommendations are built upon a foundation of explicit assumptions, constraints, and measurable targets established before the analysis."
        },
        {
          "id": "economics-601-l06-q2",
          "text": "A resilient strategy for business operations should always include:",
          "skillId": "economics-601-skill-case-resilience",
          "options": [
            {
              "id": "a",
              "text": "Checkpointed execution with defined fallback and escalation criteria"
            },
            {
              "id": "b",
              "text": "A one-way execution path with no capability for rollback"
            },
            {
              "id": "c",
              "text": "No ownership mapping across functional teams"
            },
            {
              "id": "d",
              "text": "Hidden assumptions and undocumented critical decisions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Resilience in complex operations depends on structured checkpoints, pre-planned fallback options, and explicit escalation protocols for handling anomalies."
        },
        {
          "id": "economics-601-l06-q3",
          "text": "When evaluating business impact, which method demonstrates the most rigor?",
          "skillId": "economics-601-skill-case-evaluation",
          "options": [
            {
              "id": "a",
              "text": "A single success story without control groups or baseline data"
            },
            {
              "id": "b",
              "text": "Comparative analysis against a baseline, plus analysis of side-effects and uncertainty"
            },
            {
              "id": "c",
              "text": "An outcome-only narrative without evidence of the process followed"
            },
            {
              "id": "d",
              "text": "Retrospectively changing the scope and metrics to fit the observed outcomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation requires objective comparison against a baseline, a systematic search for unintended consequences, and transparent disclosure of uncertainty."
        },
        {
          "id": "economics-601-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "economics-601-skill-case-governance",
          "options": [
            {
              "id": "a",
              "text": "Tightly aligns decision authority, performance measurement, and remediation obligations"
            },
            {
              "id": "b",
              "text": "Separates high-level policy from day-to-day operational controls"
            },
            {
              "id": "c",
              "text": "Avoids external review and operational transparency"
            },
            {
              "id": "d",
              "text": "Treats accountability as optional, especially under pressure"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance creates a closed loop by linking the authority to act, the tools to measure performance, and the responsibility to correct deviations."
        },
        {
          "id": "economics-601-l06-q5",
          "text": "The primary purpose of a 'tradeoff matrix' in case analysis is to:",
          "skillId": "economics-601-skill-tradeoff-analysis",
          "options": [
            {
              "id": "a",
              "text": "Find a single option that is superior on all dimensions"
            },
            {
              "id": "b",
              "text": "Visually and systematically compare multiple options across shared criteria, making tradeoffs explicit"
            },
            {
              "id": "c",
              "text": "Obscure the negative aspects of the preferred option"
            },
            {
              "id": "d",
              "text": "Prove that all options are equally viable"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is a decision-support tool designed to clarify how different options perform against the same set of criteria, highlighting where gains in one area require sacrifices in another."
        },
        {
          "id": "economics-601-l06-q6",
          "text": "In a live simulation, 'adaptive response' refers to the ability to:",
          "skillId": "economics-601-skill-simulation-adaptation",
          "options": [
            {
              "id": "a",
              "text": "Strictly adhere to the initial plan, regardless of new data"
            },
            {
              "id": "b",
              "text": "Make random changes to system controls without a clear rationale"
            },
            {
              "id": "c",
              "text": "Update operational controls and strategy in response to real-time feedback, while maintaining an audit trail"
            },
            {
              "id": "d",
              "text": "Pause the simulation whenever an unexpected event occurs"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Adaptive response is a disciplined process of adjusting to changing conditions based on incoming data, ensuring that decisions remain traceable and accountable."
        },
        {
          "id": "economics-601-l06-q7",
          "text": "A key component of a 'Defensible Decision Memo' is the inclusion of fallback plans. Why is this important?",
          "skillId": "economics-601-skill-decision-memo",
          "options": [
            {
              "id": "a",
              "text": "It demonstrates a lack of confidence in the primary recommendation"
            },
            {
              "id": "b",
              "text": "It provides pre-planned, alternative courses of action if key assumptions prove incorrect or risks materialize"
            },
            {
              "id": "c",
              "text": "It is a formality that is rarely used in practice"
            },
            {
              "id": "d",
              "text": "It replaces the need for monitoring and risk controls"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Fallback plans are a critical part of risk management, ensuring that the organization is prepared to act decisively if the initial strategy fails, rather than having to improvise under pressure."
        },
        {
          "id": "economics-601-l06-q8",
          "text": "During a simulation clinic, an operator who successfully balances performance and governance would:",
          "skillId": "economics-601-skill-simulation-balance",
          "options": [
            {
              "id": "a",
              "text": "Exceed performance targets by violating all governance constraints"
            },
            {
              "id": "b",
              "text": "Meet all governance constraints but fail to achieve any performance targets"
            },
            {
              "id": "c",
              "text": "Optimize performance within the established boundaries of the governance framework"
            },
            {
              "id": "d",
              "text": "Frequently change the governance rules to make performance targets easier to hit"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The core challenge of advanced operations is to achieve optimal performance while adhering to the rules and constraints that ensure safety, fairness, and accountability."
        }
      ]
    },
    {
      "id": "economics-601-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "economics-601-l07-a1",
          "type": "visual_prompt",
          "title": "Stakeholder Impact Map",
          "content": "A network diagram showing a central business decision connected to various stakeholder groups (customers, employees, community). The connections are labeled with the type of impact (e.g., 'cost increase', 'job creation') and timescale."
        }
      ],
      "chunks": [
        {
          "id": "economics-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "This section moves beyond simple cost-benefit analysis to map the distribution of impacts across stakeholders. Learners will analyze who benefits, who bears burdens, and what second-order or delayed effects might arise, with a focus on equity and fairness."
        },
        {
          "id": "economics-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Effective governance requires a robust accountability architecture. We will examine how to integrate decision traceability, stakeholder review rights, and clear remediation obligations into business processes to build trust and ensure transparent operations."
        },
        {
          "id": "economics-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Framework",
          "content": "We conclude by synthesizing the module's concepts into a practical leadership framework. This checklist connects performance outcomes with ethical duties, policy adherence, and institutional resilience, providing a heuristic for responsible decision-making under pressure."
        }
      ],
      "flashcards": [
        {
          "id": "economics-601-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how outcomes, both positive and negative, are allocated across different populations and timescales."
        },
        {
          "id": "economics-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable and unbroken record of the evidence, ownership, and rationale behind a decision and its subsequent implementation."
        },
        {
          "id": "economics-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making behavior that systematically balances performance goals with accountability structures and ethical considerations."
        }
      ]
    },
    {
      "id": "economics-601-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "economics-601-l08-a1",
          "type": "practice",
          "title": "Defense Simulation",
          "content": "Present your final recommendation to a simulated expert panel. Respond to challenging questions and critiques based on the evidence you've assembled throughout the module."
        }
      ],
      "chunks": [
        {
          "id": "economics-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this culminating activity, learners synthesize their analysis into a comprehensive defense brief. This document must articulate their core claims, present the supporting evidence, define the uncertainty bounds, and propose a robust governance and remediation plan."
        },
        {
          "id": "economics-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "This session prepares learners for the final defense. We will rehearse responses to adversarial testing from an expert panel, focusing on critiques of technical methods, governance design, and stakeholder impact analysis to ensure recommendations are resilient to scrutiny."
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend your final, specialized recommendation against rigorous cross-examination from a simulated panel of technical, governance, and economic experts."
        }
      ]
    }
  ]
};
