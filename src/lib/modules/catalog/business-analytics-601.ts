import type { LearningModule } from "@/lib/modules/types";

export const business_analytics_601_Module: LearningModule = {
  "id": "business-analytics-601",
  "title": "Business Analytics Research and Leadership",
  "description": "A specialization in Business Analytics focusing on systems diagnostics, operations design, impact analysis, and leadership. This advanced module uses casework, simulation, and defense-based checkpoints to build expert-level skills.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "business-analytics",
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
      "id": "business-analytics-601-l01",
      "title": "Business Analytics Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "business-analytics-601-l01-a1",
          "type": "image",
          "title": "Core Analytics Framework",
          "content": "A diagram showing the interconnectedness of Diagnostics, Operations Design, Impact Analysis, and Governance, forming a continuous improvement loop."
        }
      ],
      "chunks": [
        {
          "id": "business-analytics-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "Learn to define the scope of business problems. We'll cover how to diagnose complex business systems and design effective operational plans. Mastering these skills ensures your analysis is focused and leads to better strategic decisions."
        },
        {
          "id": "business-analytics-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Explore how to map cause-and-effect relationships within a business. You'll learn to identify and quantify uncertainty in your models. This is a critical step before recommending any changes, as it helps predict outcomes and manage risks."
        },
        {
          "id": "business-analytics-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "Recap the importance of evidence-based claims. We'll review how to establish confidence intervals and use checkpoints to validate your findings, ensuring your conclusions are built on solid, measurable data."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-601-l01-f1",
          "front": "Business systems diagnostics",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "business-analytics-601-l01-f2",
          "front": "Business operations and execution design",
          "back": "Execution architecture that determines reliability under stress."
        },
        {
          "id": "business-analytics-601-l01-f3",
          "front": "Business impact and tradeoff analysis",
          "back": "Evaluation discipline for identifying true gains and hidden costs."
        }
      ]
    },
    {
      "id": "business-analytics-601-l02",
      "title": "Business Analytics Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "business-analytics-601-l02-a1",
          "type": "practice",
          "title": "Workflow Stress-Test Simulator",
          "content": "An interactive dashboard where you can adjust variables like resource allocation and market demand to see how your designed workflow performs under pressure."
        }
      ],
      "chunks": [
        {
          "id": "business-analytics-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "Apply your knowledge in a hands-on lab. You will design a specialized business workflow and then test its resilience by simulating challenging scenarios. This practice builds your ability to create robust systems that can withstand unexpected events."
        },
        {
          "id": "business-analytics-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "Review the concept of control gate architecture. We'll discuss how to integrate checkpoints, rollback criteria, and escalation paths into your workflows. This structure is key to maintaining control and ensuring operational efficiency."
        }
      ],
      "interactiveActivities": [
        {
          "id": "business-analytics-601-l02-act1",
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
      "id": "business-analytics-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "business-analytics-601-l03-a1",
          "type": "practice",
          "title": "Pre-Quiz Checklist",
          "content": "A checklist summarizing key concepts from Lessons 1 & 2: Scope Boundaries, Causal Modeling, Evidence Thresholds, and Control Gate Architecture. Review these before you begin."
        }
      ],
      "questions": [
        {
          "id": "business-analytics-601-l03-q1",
          "text": "Which practice most improves business systems diagnostics decision quality?",
          "skillId": "business-analytics-601-skill-core",
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
          "id": "business-analytics-601-l03-q2",
          "text": "At level 601, strong execution for business operations and execution design requires:",
          "skillId": "business-analytics-601-skill-execution",
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
          "id": "business-analytics-601-l03-q3",
          "text": "A defensible approach to business impact and tradeoff analysis includes:",
          "skillId": "business-analytics-601-skill-eval",
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
          "id": "business-analytics-601-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "business-analytics-601-skill-governance",
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
        }
      ]
    },
    {
      "id": "business-analytics-601-l04",
      "title": "Business Analytics Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "business-analytics-601-l04-a1",
          "type": "image",
          "title": "Case Study Decision Tree",
          "content": "A visual representation of the case study's central dilemma, showing different decision paths and their potential outcomes based on competing constraints like cost, safety, and reliability."
        }
      ],
      "chunks": [
        {
          "id": "business-analytics-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "Analyze a real-world case study involving competing business constraints. We'll frame the problem, diagnose the system, and evaluate the potential impact of various strategic choices. This will sharpen your ability to navigate complex business dilemmas."
        },
        {
          "id": "business-analytics-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "Practice framing tradeoffs. You will compare alternative solutions across critical dimensions like safety, reliability, cost, and governance. This exercise teaches you to articulate and weigh the pros and cons of each option systematically."
        },
        {
          "id": "business-analytics-601-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "Learn the structure of a professional decision memo. We'll recap how to present a recommendation by clearly stating assumptions, providing supporting evidence, outlining risk controls, and defining fallback plans for accountable decision-making."
        }
      ]
    },
    {
      "id": "business-analytics-601-l05",
      "title": "Business Analytics Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "business-analytics-601-l05-a1",
          "type": "practice",
          "title": "Simulation Control Panel",
          "content": "A screenshot of the simulation interface, highlighting key levers for adjusting performance targets and governance controls, and the dashboard for monitoring real-time outcomes."
        }
      ],
      "chunks": [
        {
          "id": "business-analytics-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "Step into a live simulation. You will manage a business scenario in real-time, using control levers to balance performance goals with governance constraints. This clinic tests your decision-making skills under pressure."
        },
        {
          "id": "business-analytics-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "Recap the principles of adaptive response. We'll discuss how to modify control gates during a live scenario while maintaining a clear audit trail. This ensures that your responses are both agile and accountable."
        }
      ],
      "interactiveActivities": [
        {
          "id": "business-analytics-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure business analytics scenario and tune controls under uncertainty."
        }
      ]
    },
    {
      "id": "business-analytics-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "business-analytics-601-l06-a1",
          "type": "practice",
          "title": "Key Concepts Review",
          "content": "A summary of core ideas from Lessons 4 & 5: Tradeoff Framing, Decision Memo Structure, Adaptive Response, and balancing performance vs. governance in a simulation."
        }
      ],
      "questions": [
        {
          "id": "business-analytics-601-l06-q1",
          "text": "In advanced casework, the first requirement for defensible recommendations is:",
          "skillId": "business-analytics-601-skill-case1",
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
          "id": "business-analytics-601-l06-q2",
          "text": "A resilient strategy for business operations and execution design should include:",
          "skillId": "business-analytics-601-skill-case2",
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
          "id": "business-analytics-601-l06-q3",
          "text": "When evaluating business impact and tradeoff analysis, which method is most rigorous?",
          "skillId": "business-analytics-601-skill-case3",
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
          "id": "business-analytics-601-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "business-analytics-601-skill-case4",
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
          "id": "business-analytics-601-l06-q5",
          "text": "In a complex case study, two proposed solutions have similar expected financial returns. What is the most critical next step for a tradeoff analysis?",
          "skillId": "business-analytics-601-skill-case5",
          "options": [
            {
              "id": "a",
              "text": "Choose the one presented by the most senior manager."
            },
            {
              "id": "b",
              "text": "Analyze and compare their secondary impacts, such as operational risk, brand reputation, and equity."
            },
            {
              "id": "c",
              "text": "Select the solution that can be implemented the fastest, ignoring other factors."
            },
            {
              "id": "d",
              "text": "Flip a coin to save time."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A thorough tradeoff analysis goes beyond primary metrics to evaluate secondary impacts and hidden costs, which is crucial when primary outcomes are similar."
        },
        {
          "id": "business-analytics-601-l06-q6",
          "text": "During a business simulation, an unexpected market event causes performance metrics to drop sharply. What is the best initial response according to the principle of adaptive response?",
          "skillId": "business-analytics-601-skill-case6",
          "options": [
            {
              "id": "a",
              "text": "Immediately abandon the original strategy and try something random."
            },
            {
              "id": "b",
              "text": "Wait for the simulation to end before analyzing the data."
            },
            {
              "id": "c",
              "text": "Activate a pre-planned fallback procedure while analyzing the event's root cause to inform the next adjustment."
            },
            {
              "id": "d",
              "text": "Double down on the current strategy, assuming the event is a temporary anomaly."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Adaptive response involves using pre-defined fallback plans to stabilize the situation while gathering data to make an informed strategic adjustment, rather than panicking or ignoring the event."
        },
        {
          "id": "business-analytics-601-l06-q7",
          "text": "When writing a decision memo for a high-stakes recommendation, what component is essential for ensuring accountability?",
          "skillId": "business-analytics-601-skill-case7",
          "options": [
            {
              "id": "a",
              "text": "Using complex jargon to sound more authoritative."
            },
            {
              "id": "b",
              "text": "Only including data that supports the recommendation."
            },
            {
              "id": "c",
              "text": "A section detailing key assumptions, identified risks, and proposed mitigation controls."
            },
            {
              "id": "d",
              "text": "A guarantee that the recommendation will succeed without any risks."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Accountable decision-making requires transparency about the underlying assumptions and potential risks, along with a plan to manage them."
        },
        {
          "id": "business-analytics-601-l06-q8",
          "text": "In the simulation clinic, why is it important to maintain traceability when updating control gates?",
          "skillId": "business-analytics-601-skill-case8",
          "options": [
            {
              "id": "a",
              "text": "It is not important; speed is the only goal."
            },
            {
              "id": "b",
              "text": "To create a clear audit trail that explains why decisions were changed, linking actions to outcomes for post-simulation review."
            },
            {
              "id": "c",
              "text": "To make the simulation more difficult for the user."
            },
            {
              "id": "d",
              "text": "To satisfy a requirement that has no practical purpose."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Traceability ensures that every adaptive change is documented and justified, which is fundamental for accountability and learning from the simulation results."
        }
      ]
    },
    {
      "id": "business-analytics-601-l07",
      "title": "Business Analytics Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "business-analytics-601-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A diagram illustrating how a single business decision can create a ripple effect of positive and negative impacts across various stakeholder groups, including customers, employees, the community, and the environment."
        }
      ],
      "chunks": [
        {
          "id": "business-analytics-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Learn to map the full impact of business decisions across all stakeholders. We will analyze how benefits and burdens are distributed, considering both immediate and long-term effects. This is key to making equitable and responsible choices."
        },
        {
          "id": "business-analytics-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Examine the architecture of accountability. We will cover the importance of decision traceability, stakeholder rights of review, and the obligation to remediate negative outcomes. A strong accountability framework builds trust and ensures responsible governance."
        },
        {
          "id": "business-analytics-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "Conclude with a responsible leadership checklist. This tool helps you connect business outcomes with ethical principles, ensure policy compliance, and build organizational resilience. Use it to guide your leadership in business analytics."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-601-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes are allocated across populations and timescales."
        },
        {
          "id": "business-analytics-601-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable record of evidence, ownership, and rationale."
        },
        {
          "id": "business-analytics-601-l07-f3",
          "front": "Responsible leadership",
          "back": "Decision behavior balancing performance, accountability, and ethics."
        }
      ]
    },
    {
      "id": "business-analytics-601-l08",
      "title": "Business Analytics Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "business-analytics-601-l08-a1",
          "type": "practice",
          "title": "Defense Evaluation Rubric",
          "content": "A rubric outlining the criteria for a successful capstone defense, including clarity of claims, strength of evidence, handling of uncertainty, and responsiveness to critical questions."
        }
      ],
      "chunks": [
        {
          "id": "business-analytics-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "Prepare for your capstone defense. In this lab, you will assemble a defense brief that synthesizes your analysis. It must include a clear claim, supporting evidence, defined uncertainty bounds, and a viable remediation plan."
        },
        {
          "id": "business-analytics-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "Rehearse your defense in a simulated expert panel. You will practice responding to challenging critiques on technical methods, governance implications, and stakeholder impacts. This rehearsal builds the confidence needed to defend your work effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "business-analytics-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    }
  ]
};
