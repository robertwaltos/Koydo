import type { LearningModule } from "@/lib/modules/types";

export const strategic_management_501_Module: LearningModule = {
  "id": "strategic-management-501",
  "title": "Strategic Management Specialization Studio",
  "description": "Post-401 specialization in Strategic Management, focused on business systems diagnostics, business operations and execution design, business impact and tradeoff analysis, and business governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
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
    "Design robust systems for business operations and execution with measurable control gates",
    "Evaluate interventions and their consequences using rigorous tradeoff analysis",
    "Operationalize business governance and leadership with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "strategic-management-501-l01",
      "title": "Advanced Strategic Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "strategic-management-501-l01-a1",
          "type": "image",
          "title": "Causal Loop Diagram",
          "content": "A visual diagram illustrating the interconnected feedback loops and dependencies within a complex business system."
        },
        {
          "id": "strategic-management-501-l01-a2",
          "type": "document",
          "title": "Key Concepts Glossary",
          "content": "A downloadable PDF defining core terminology used throughout the specialization, such as 'uncertainty bounds' and 'control gates'."
        }
      ],
      "chunks": [
        {
          "id": "strategic-management-501-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "This lesson introduces the critical concept of defining scope and boundaries in strategic management. We will learn to diagnose a business's complex systems and design operational frameworks that ensure smooth integration. Mastering these skills is essential for building efficient, adaptable businesses that can thrive in dynamic environments."
        },
        {
          "id": "strategic-management-501-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Learners will map the causal pathways that connect actions to outcomes, while also quantifying uncertainty ranges and system dependencies. This foundational understanding is crucial for effective intervention planning, allowing strategists to anticipate challenges, model potential impacts, and make more informed decisions."
        },
        {
          "id": "strategic-management-501-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds and Accountability",
          "content": "This recap emphasizes that every strategic claim must be supported by measurable indicators. We will review how to establish confidence bounds and design review checkpoints to ensure strategies remain on track. This rigorous approach fosters a culture of accountability where decisions are based on solid evidence."
        }
      ],
      "flashcards": [
        {
          "id": "strategic-management-501-l01-f1",
          "front": "Business Systems Diagnostics",
          "back": "A structured method for analyzing a business's components and their interactions, requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "strategic-management-501-l01-f2",
          "front": "Execution Design",
          "back": "The architecture of business operations that determines reliability, scalability, and performance under stress."
        },
        {
          "id": "strategic-management-501-l01-f3",
          "front": "Tradeoff Analysis",
          "back": "A systematic evaluation discipline for identifying the true gains, hidden costs, and second-order effects of a decision."
        }
      ]
    },
    {
      "id": "strategic-management-501-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "strategic-management-501-l02-a1",
          "type": "document",
          "title": "Workflow Design Template",
          "content": "A structured template for designing and documenting specialized workflows, including sections for control gates, escalation paths, and rollback procedures."
        }
      ],
      "chunks": [
        {
          "id": "strategic-management-501-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, learners will design a specialized workflow for a given business challenge. They will then stress-test their design by simulating adverse scenarios, such as budget cuts or supply chain disruptions, to identify and fortify potential points of failure."
        },
        {
          "id": "strategic-management-501-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "We will recap the importance of integrating control gates into workflows. These gates act as critical checkpoints to monitor progress and enable rollbacks if necessary. We will also review how to implement threshold-based escalation to manage risks and ensure a timely response to emerging issues."
        }
      ],
      "interactiveActivities": [
        {
          "id": "strategic-management-501-l02-act1",
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
      "id": "strategic-management-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "strategic-management-501-l03-a1",
          "type": "document",
          "title": "Review Checklist",
          "content": "A checklist summarizing the key concepts from the first two lessons to help learners prepare for the checkpoint."
        }
      ],
      "questions": [
        {
          "id": "strategic-management-501-l03-q1",
          "text": "Which practice most improves the decision quality of business systems diagnostics?",
          "skillId": "strategic-management-501-skill-diagnostics",
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
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are made explicit, providing a clear and defensible foundation."
        },
        {
          "id": "strategic-management-501-l03-q2",
          "text": "At an advanced level, strong execution design requires:",
          "skillId": "strategic-management-501-skill-execution-design",
          "options": [
            {
              "id": "a",
              "text": "Clear owner mapping, a defined checkpoint cadence, and escalation thresholds"
            },
            {
              "id": "b",
              "text": "Ambiguous roles and ad-hoc process changes"
            },
            {
              "id": "c",
              "text": "Eliminating retrospectives or post-run reviews"
            },
            {
              "id": "d",
              "text": "No defined rollback or fallback conditions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable advanced execution needs clear ownership, regular checkpoints, and threshold-driven governance to manage complexity."
        },
        {
          "id": "strategic-management-501-l03-q3",
          "text": "A defensible approach to tradeoff analysis includes:",
          "skillId": "strategic-management-501-skill-tradeoff-analysis",
          "options": [
            {
              "id": "a",
              "text": "Using anecdotes without a comparison group"
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
              "text": "Excluding difficult-to-model scenarios from the analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, a thorough check for side-effects, and a transparent disclosure of uncertainty."
        },
        {
          "id": "strategic-management-501-l03-q4",
          "text": "Mature governance systems effectively connect:",
          "skillId": "strategic-management-501-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy intent, measurable controls, and clear remediation pathways"
            },
            {
              "id": "b",
              "text": "Policy language with no measurable enforcement mechanism"
            },
            {
              "id": "c",
              "text": "Targets without clear ownership or an escalation design"
            },
            {
              "id": "d",
              "text": "Operations without transparent accountability structures"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Governance maturity is defined by the operational link between strategic intent, its measurement, and the process for corrective action."
        }
      ]
    },
    {
      "id": "strategic-management-501-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "strategic-management-501-l04-a1",
          "type": "image",
          "title": "Tradeoff Matrix",
          "content": "A visual matrix comparing strategic options across multiple dimensions like cost, risk, reliability, and stakeholder impact."
        },
        {
          "id": "strategic-management-501-l04-a2",
          "type": "document",
          "title": "Case Study: 'Apex Innovations'",
          "content": "The full text of the case study to be analyzed, detailing a company facing a critical strategic decision under high uncertainty."
        }
      ],
      "chunks": [
        {
          "id": "strategic-management-501-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "This lesson introduces a complex case study that highlights competing constraints within a business. We will analyze how these constraints force difficult decisions and necessitate rigorous tradeoff analysis. By deconstructing the scenario, learners will be better equipped to navigate complex business environments."
        },
        {
          "id": "strategic-management-501-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "In this guided practice, learners will compare the strategic options presented in the case study. We will frame the decision by evaluating each option across key dimensions such as safety, reliability, cost, equity, and governance, making the tradeoffs explicit and quantifiable."
        },
        {
          "id": "strategic-management-501-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "We will recap the essential components of a professional decision memo. Each recommendation must clearly state the underlying assumptions, present supporting evidence, define risk controls, and outline fallback plans. This structured approach ensures transparency and robust decision-making."
        }
      ]
    },
    {
      "id": "strategic-management-501-l05",
      "title": "Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "strategic-management-501-l05-a1",
          "type": "document",
          "title": "Simulation Control Dashboard Guide",
          "content": "A guide explaining the variables, controls, and key performance indicators within the interactive simulation."
        }
      ],
      "chunks": [
        {
          "id": "strategic-management-501-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "In this interactive simulation, learners will manage a business unit through a volatile market scenario. They must balance performance targets with governance constraints by adjusting operational controls in real-time, making decisions that align with both strategic goals and regulatory requirements."
        },
        {
          "id": "strategic-management-501-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "This recap focuses on designing effective responses that adapt to changing circumstances. We will review how to update control gates during a crisis while maintaining traceability and accountability, ensuring that all actions are documented and auditable."
        }
      ],
      "interactiveActivities": [
        {
          "id": "strategic-management-501-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure strategic management scenario and tune controls under uncertainty to achieve the best possible outcome."
        }
      ]
    },
    {
      "id": "strategic-management-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "strategic-management-501-l06-a1",
          "type": "document",
          "title": "Case and Simulation Debrief",
          "content": "A summary of key takeaways from the case analysis and simulation clinic to prepare for the checkpoint."
        }
      ],
      "questions": [
        {
          "id": "strategic-management-501-l06-q1",
          "text": "In advanced casework, the first requirement for a defensible recommendation is:",
          "skillId": "strategic-management-501-skill-diagnostics",
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
          "explanation": "Defensible recommendations begin with an explicit foundation: a baseline for comparison, defined constraints, and measurable targets."
        },
        {
          "id": "strategic-management-501-l06-q2",
          "text": "During the simulation, if a key performance indicator drops below its critical threshold, what is the best immediate action based on adaptive response design?",
          "skillId": "strategic-management-501-skill-execution-design",
          "options": [
            {
              "id": "a",
              "text": "Wait for the situation to resolve on its own"
            },
            {
              "id": "b",
              "text": "Activate a pre-defined fallback plan and escalate to the designated owner"
            },
            {
              "id": "c",
              "text": "Change the threshold to make the indicator appear normal"
            },
            {
              "id": "d",
              "text": "Continue with the original plan regardless of the new data"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Resilience depends on having pre-planned fallback options and explicit escalation criteria to handle adverse events systematically."
        },
        {
          "id": "strategic-management-501-l06-q3",
          "text": "When drafting the decision memo for the case analysis, which component is essential for ensuring stakeholder buy-in and transparent governance?",
          "skillId": "strategic-management-501-skill-tradeoff-analysis",
          "options": [
            {
              "id": "a",
              "text": "Focusing only on the positive aspects of the chosen option"
            },
            {
              "id": "b",
              "text": "A clear analysis of tradeoffs, including risks and second-order effects for each option"
            },
            {
              "id": "c",
              "text": "Using complex jargon to demonstrate expertise"
            },
            {
              "id": "d",
              "text": "Keeping the decision rationale confidential"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Transparently communicating the tradeoffs and potential negative impacts builds trust and allows for more rigorous, accountable decision-making."
        },
        {
          "id": "strategic-management-501-l06-q4",
          "text": "In the adverse-condition simulation, what does 'tuning a control gate' primarily involve?",
          "skillId": "strategic-management-501-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Adjusting the thresholds for review or escalation based on new information and risk tolerance"
            },
            {
              "id": "b",
              "text": "Removing the control gate entirely to increase speed"
            },
            {
              "id": "c",
              "text": "Assigning blame for the adverse condition"
            },
            {
              "id": "d",
              "text": "Ignoring the data from the control gate"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance involves dynamically adjusting controls—like thresholds for action—in response to real-time data and shifting conditions."
        }
      ]
    },
    {
      "id": "strategic-management-501-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "strategic-management-501-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A visual map showing how a strategic decision's benefits and burdens are distributed across different stakeholder groups over time."
        },
        {
          "id": "strategic-management-501-l07-a2",
          "type": "document",
          "title": "Responsible Leadership Checklist",
          "content": "A checklist to evaluate strategic decisions against ethical, policy, and resilience criteria."
        }
      ],
      "chunks": [
        {
          "id": "strategic-management-501-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Learners will map how benefits, burdens, and delayed effects of a decision are distributed among different stakeholder groups. Understanding this distribution is essential for making equitable and sustainable choices that account for the full spectrum of public impact."
        },
        {
          "id": "strategic-management-501-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "This section explores how to build robust accountability architecture. This includes designing systems for decision traceability, defining stakeholder review rights, and clarifying remediation obligations. Establishing these clear lines of accountability enhances trust and ensures responsible governance."
        },
        {
          "id": "strategic-management-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership",
          "content": "This recap provides a practical checklist for responsible leadership. It connects strategic outcomes with ethical considerations, policy compliance, and organizational resilience. This checklist serves as a guide for making decisions that are not just effective, but also principled."
        }
      ],
      "flashcards": [
        {
          "id": "strategic-management-501-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how outcomes (benefits, costs, risks) are allocated across different populations and timescales."
        },
        {
          "id": "strategic-management-501-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable and unbroken record of the evidence, ownership, and rationale behind a strategic decision."
        },
        {
          "id": "strategic-management-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making approach that balances performance objectives with accountability, ethical duties, and long-term resilience."
        }
      ]
    },
    {
      "id": "strategic-management-501-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "strategic-management-501-l08-a1",
          "type": "document",
          "title": "Capstone Defense Rubric",
          "content": "A detailed rubric outlining the evaluation criteria for the final defense, including quality of evidence, clarity of tradeoffs, and robustness of recommendations."
        }
      ],
      "chunks": [
        {
          "id": "strategic-management-501-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this collaborative activity, learners will synthesize their work into a comprehensive defense brief. The brief must present a clear recommendation supported by evidence, explicitly state assumptions and uncertainties, and propose concrete remediation pathways for potential risks."
        },
        {
          "id": "strategic-management-501-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "During this session, learners will rehearse their defense by responding to critiques from simulated expert roles, including technical, governance, and stakeholder perspectives. This rehearsal is crucial for building confidence and preparing for a rigorous, real-world defense."
        }
      ],
      "interactiveActivities": [
        {
          "id": "strategic-management-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend your capstone recommendation under adversarial cross-examination from a panel of virtual experts."
        }
      ]
    }
  ]
};
