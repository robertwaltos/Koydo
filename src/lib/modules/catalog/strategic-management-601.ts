import type { LearningModule } from "@/lib/modules/types";

export const strategic_management_601_Module: LearningModule = {
  "id": "strategic-management-601",
  "title": "Strategic Management Research and Leadership",
  "description": "This advanced specialization builds on core strategic principles, focusing on diagnosing complex business systems, designing robust operational plans, analyzing impacts and tradeoffs, and leading with accountable governance. Learners will master these skills through rigorous casework, dynamic simulations, and a final capstone defense.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "strategic-management",
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
      "id": "strategic-management-601-l01",
      "title": "Strategic Management Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "strategic-management-601-l01-a1",
          "type": "image",
          "title": "The Strategic Pyramid",
          "content": "A diagram illustrating how a strategic recommendation is built upon a foundation of clear Scope and Boundaries, supported by Causal and Uncertainty Models, and validated by defined Evidence Thresholds."
        }
      ],
      "chunks": [
        {
          "id": "strategic-management-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "Defines the problem space for strategic analysis. This involves setting clear boundaries to determine what is inside and outside the scope of your diagnosis and operational design. Properly scoping a problem prevents wasted effort and ensures analysis is focused on the most critical factors."
        },
        {
          "id": "strategic-management-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Introduces methods for mapping cause-and-effect relationships within a business system. This includes modeling potential system dependencies and quantifying uncertainty with ranges, which is essential for predicting the likely outcomes of any strategic intervention."
        },
        {
          "id": "strategic-management-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "Establishes the standards for validating strategic claims. This recap emphasizes that all recommendations must be tied to measurable indicators, include confidence bounds, and be subject to review at predefined checkpoints to ensure evidence-based decision-making."
        }
      ],
      "flashcards": [
        {
          "id": "strategic-management-601-l01-f1",
          "front": "Business systems diagnostics",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "strategic-management-601-l01-f2",
          "front": "Business operations and execution design",
          "back": "Execution architecture that determines reliability under stress."
        },
        {
          "id": "strategic-management-601-l01-f3",
          "front": "Business impact and tradeoff analysis",
          "back": "Evaluation discipline for identifying true gains and hidden costs."
        }
      ]
    },
    {
      "id": "strategic-management-601-l02",
      "title": "Strategic Management Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "strategic-management-601-l02-a1",
          "type": "image",
          "title": "Workflow with Control Gates",
          "content": "A flowchart of a business process showing key decision points. Each point is a 'control gate' with explicit criteria for proceeding, rolling back a decision, or escalating an issue to leadership."
        }
      ],
      "chunks": [
        {
          "id": "strategic-management-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this hands-on lab, you will design a specialized workflow to address a strategic challenge. You will then stress-test this design by running simulations of adverse scenarios, such as budget cuts or supply chain disruptions, to identify and remedy potential points of failure."
        },
        {
          "id": "strategic-management-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "This recap focuses on the concept of 'Control Gate Architecture.' We review how to embed checkpoints, rollback criteria, and escalation thresholds directly into a workflow. This structure ensures that processes are not just efficient, but also resilient and governable."
        }
      ],
      "interactiveActivities": [
        {
          "id": "strategic-management-601-l02-act1",
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
      "id": "strategic-management-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "strategic-management-601-l03-a1",
          "type": "image",
          "title": "Review: Key Concepts",
          "content": "A concept map connecting Scope Design, Causal Modeling, and Control Gate Architecture, reminding learners how these foundational ideas work together before the quiz."
        }
      ],
      "questions": [
        {
          "id": "strategic-management-601-l03-q1",
          "text": "Which practice most improves the decision quality of business systems diagnostics?",
          "skillId": "strategic-management-601-skill-diagnostics",
          "options": [
            {
              "id": "a",
              "text": "Proceed without a baseline or assumptions"
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
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are made explicit at the start."
        },
        {
          "id": "strategic-management-601-l03-q2",
          "text": "At an advanced level, strong business operations and execution design requires:",
          "skillId": "strategic-management-601-skill-execution",
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
          "explanation": "Reliable advanced execution needs ownership clarity, regular checkpoints, and threshold-driven governance."
        },
        {
          "id": "strategic-management-601-l03-q3",
          "text": "A defensible approach to business impact and tradeoff analysis includes:",
          "skillId": "strategic-management-601-skill-analysis",
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
              "text": "Changing success criteria after outcomes are known"
            },
            {
              "id": "d",
              "text": "Excluding difficult scenarios from the analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, checks for unintended side-effects, and disclosure of uncertainty."
        },
        {
          "id": "strategic-management-601-l03-q4",
          "text": "Mature governance systems create a clear connection between:",
          "skillId": "strategic-management-601-skill-governance",
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
          "explanation": "Governance maturity is the operational link between strategic intent, measurable controls, and corrective action."
        }
      ]
    },
    {
      "id": "strategic-management-601-l04",
      "title": "Strategic Management Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "strategic-management-601-l04-a1",
          "type": "image",
          "title": "Tradeoff Analysis Matrix",
          "content": "A matrix comparing three strategic options across multiple dimensions like cost, reliability, customer impact, and implementation risk. Each cell is scored to visually guide the decision-making process."
        }
      ],
      "chunks": [
        {
          "id": "strategic-management-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "This lesson introduces a structured approach to deconstructing a complex business case. We will frame the scenario by identifying the primary goals and the competing constraints (e.g., time vs. quality, growth vs. profitability) that define the strategic challenge."
        },
        {
          "id": "strategic-management-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "In this practice segment, you will actively frame the tradeoffs presented in the case. This involves creating a decision matrix to compare potential interventions across key dimensions like financial cost, operational risk, and stakeholder equity, making the consequences of each choice explicit."
        },
        {
          "id": "strategic-management-601-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "We recap the 'Decision Memo Pattern,' a structured format for presenting a strategic recommendation. A strong memo must clearly state the chosen path, the supporting evidence, the underlying assumptions, the risk mitigation controls, and the designated fallback plans."
        }
      ]
    },
    {
      "id": "strategic-management-601-l05",
      "title": "Strategic Management Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "strategic-management-601-l05-a1",
          "type": "image",
          "title": "Simulation Dashboard",
          "content": "An example of the interactive simulation dashboard, showing key performance indicators (KPIs), resource allocation sliders, and an event log that reports the consequences of your decisions in real-time."
        }
      ],
      "chunks": [
        {
          "id": "strategic-management-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "This interactive simulation places you in a leadership role during a live business scenario. You will operate a set of controls to manage resources and respond to events, constantly balancing performance targets against predefined governance and ethical constraints."
        },
        {
          "id": "strategic-management-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "This recap introduces 'Adaptive Response Design.' We discuss how to effectively modify your strategy and operational controls in response to unexpected events within the simulation, while maintaining clear traceability and accountability for your decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "strategic-management-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure strategic management scenario and tune controls under uncertainty."
        }
      ]
    },
    {
      "id": "strategic-management-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "strategic-management-601-l06-a1",
          "type": "image",
          "title": "Review: Scenario Event Chain",
          "content": "A visual timeline from the simulation showing an initial decision, a resulting unexpected event, and the subsequent adaptive response, preparing learners for questions on cause and effect."
        }
      ],
      "questions": [
        {
          "id": "strategic-management-601-l06-q1",
          "text": "In a complex case study, what is the most critical first step before comparing potential solutions?",
          "skillId": "strategic-management-601-skill-case-framing",
          "options": [
            {
              "id": "a",
              "text": "Writing the final recommendation"
            },
            {
              "id": "b",
              "text": "Identifying the core problem and its competing constraints"
            },
            {
              "id": "c",
              "text": "Estimating the budget for the best-case scenario"
            },
            {
              "id": "d",
              "text": "Polling stakeholders for their popular opinion"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A strong analysis begins with accurately framing the problem and understanding the constraints, which guides all subsequent steps."
        },
        {
          "id": "strategic-management-601-l06-q2",
          "text": "When presenting a tradeoff analysis for a business case, what element is crucial for ensuring transparency?",
          "skillId": "strategic-management-601-skill-tradeoff-analysis",
          "options": [
            {
              "id": "a",
              "text": "Hiding the potential negative impacts of the preferred option"
            },
            {
              "id": "b",
              "text": "Using inconsistent metrics to evaluate each option"
            },
            {
              "id": "c",
              "text": "Explicitly stating the evaluation criteria and known uncertainties"
            },
            {
              "id": "d",
              "text": "Only showing the dimensions where your preferred option wins"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Transparency and defensibility require making the evaluation framework and its limitations clear to all decision-makers."
        },
        {
          "id": "strategic-management-601-l06-q3",
          "text": "During a business simulation, your initial strategy is failing due to an unexpected market shift. What is the most effective response?",
          "skillId": "strategic-management-601-skill-adaptive-response",
          "options": [
            {
              "id": "a",
              "text": "Continue with the failing strategy to show consistency"
            },
            {
              "id": "b",
              "text": "Analyze new data, adjust controls, and document the rationale for the change"
            },
            {
              "id": "c",
              "text": "Blame the simulation for being unrealistic"
            },
            {
              "id": "d",
              "text": "Immediately commit all remaining resources to a random alternative"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective leaders use new data to make adaptive changes, maintaining accountability by documenting why the shift was necessary."
        },
        {
          "id": "strategic-management-601-l06-q4",
          "text": "In the simulation clinic, you are penalized for violating a governance constraint while pursuing a performance target. What does this demonstrate?",
          "skillId": "strategic-management-601-skill-governed-execution",
          "options": [
            {
              "id": "a",
              "text": "That rules should be ignored to win"
            },
            {
              "id": "b",
              "text": "That performance is the only metric that matters"
            },
            {
              "id": "c",
              "text": "The importance of balancing objectives within established limits"
            },
            {
              "id": "d",
              "text": "That the simulation is flawed"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Advanced strategy requires achieving goals while operating within the ethical and procedural boundaries set by governance."
        },
        {
          "id": "strategic-management-601-l06-q5",
          "text": "A 'Decision Memo Pattern' requires a fallback plan. Why is this component essential for a robust recommendation?",
          "skillId": "strategic-management-601-skill-resilient-planning",
          "options": [
            {
              "id": "a",
              "text": "It proves you don't have confidence in your primary plan"
            },
            {
              "id": "b",
              "text": "It provides a pre-approved alternative if key assumptions are invalidated"
            },
            {
              "id": "c",
              "text": "It's a formality that is never used"
            },
            {
              "id": "d",
              "text": "It complicates the memo and should be avoided"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A fallback plan increases resilience by providing a structured, pre-vetted alternative, reducing panic and chaos if the primary plan fails."
        }
      ]
    },
    {
      "id": "strategic-management-601-l07",
      "title": "Strategic Management Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "strategic-management-601-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A concentric circle diagram mapping stakeholders from internal teams to external communities. The map is color-coded to show the distribution of positive, negative, and neutral impacts from a strategic decision."
        }
      ],
      "chunks": [
        {
          "id": "strategic-management-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "This lesson expands our analysis to external and ethical dimensions. You will learn to map the full distribution of a decision's impact—including benefits, costs, and second-order effects—across all stakeholder groups, from employees and customers to the wider community."
        },
        {
          "id": "strategic-management-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Here, we examine the formal structures that ensure responsible decision-making. 'Accountability Architecture' connects every major decision to an auditable trail of evidence, assigns clear ownership, and defines the rights of review and obligations for remediation if things go wrong."
        },
        {
          "id": "strategic-management-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "This recap provides a 'Responsible Leadership Checklist.' It serves as a final filter for any strategic plan, ensuring it aligns with ethical principles, complies with governance policies, and includes mechanisms for learning and adaptation."
        }
      ],
      "flashcards": [
        {
          "id": "strategic-management-601-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes are allocated across populations and timescales."
        },
        {
          "id": "strategic-management-601-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable record of evidence, ownership, and rationale."
        },
        {
          "id": "strategic-management-601-l07-f3",
          "front": "Responsible leadership",
          "back": "Decision behavior balancing performance, accountability, and ethics."
        }
      ]
    },
    {
      "id": "strategic-management-601-l08",
      "title": "Strategic Management Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "strategic-management-601-l08-a1",
          "type": "image",
          "title": "Capstone Defense Brief Template",
          "content": "A slide template for the final defense. It includes sections for Executive Summary, Problem Framing, Tradeoff Analysis, Recommendation with Evidence, and a Governance & Impact Statement."
        }
      ],
      "chunks": [
        {
          "id": "strategic-management-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this final lab, you will synthesize all your work into a capstone defense brief. This involves articulating your primary recommendation, substantiating it with evidence from your analysis, explicitly stating uncertainty bounds, and proposing clear remediation pathways for potential risks."
        },
        {
          "id": "strategic-management-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "This session is a full rehearsal for the final defense. You will practice responding to critical cross-examination from an expert panel on the technical, financial, ethical, and governance aspects of your proposal, honing your ability to defend your position with clarity and evidence."
        }
      ],
      "interactiveActivities": [
        {
          "id": "strategic-management-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    }
  ]
};
