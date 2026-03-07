import type { LearningModule } from "@/lib/modules/types";

export const reading_601_Module: LearningModule = {
  "id": "reading-601",
  "title": "Reading Research and Leadership",
  "description": "Post-401 specialization in Reading, focused on reading systems diagnostics, reading operations and execution design, reading impact and tradeoff analysis, and reading governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Reading",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "reading",
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
    "Apply advanced methods for reading systems diagnostics in high-constraint environments",
    "Design robust systems for reading operations and execution design with measurable control gates",
    "Evaluate interventions in reading impact and tradeoff analysis with research-grade rigor",
    "Operationalize reading governance and leadership with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "reading-601-l01",
      "title": "Reading Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "reading-601-l01-a1",
          "type": "image",
          "title": "Concept Map: Reading System Diagnostics",
          "content": "A visual diagram illustrating the interconnected components of a reading system, from student factors to instructional design and environmental constraints."
        }
      ],
      "chunks": [
        {
          "id": "reading-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "To effectively diagnose and improve reading systems, we must first define the problem's scope and boundaries. This involves identifying all critical components, from curriculum to teacher training, and establishing the constraints within which the system operates. This foundational step ensures our analysis is focused and relevant."
        },
        {
          "id": "reading-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "This section introduces methods for mapping causal pathways that influence reading outcomes. We will model the relationships between different interventions and their likely effects, while also quantifying uncertainty. This allows for more strategic planning and realistic forecasting of potential results."
        },
        {
          "id": "reading-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "In this recap, we reinforce the principle that all claims must be supported by measurable indicators. We will establish clear evidence thresholds, confidence bounds, and review checkpoints to ensure that all conclusions are data-driven and defensible, maintaining high standards of accountability."
        }
      ],
      "flashcards": [
        {
          "id": "reading-601-l01-f1",
          "front": "Reading Systems Diagnostics",
          "back": "A structured method for analyzing reading programs by defining explicit assumptions, constraints, and measurable indicators."
        },
        {
          "id": "reading-601-l01-f2",
          "front": "Reading Operations Design",
          "back": "The architecture of program execution, including workflows and control gates, that determines reliability under stress."
        },
        {
          "id": "reading-601-l01-f3",
          "front": "Tradeoff Analysis",
          "back": "An evaluation discipline for systematically identifying the true gains and hidden costs of different intervention choices."
        }
      ]
    },
    {
      "id": "reading-601-l02",
      "title": "Reading Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "reading-601-l02-a1",
          "type": "image",
          "title": "Workflow Diagram Template",
          "content": "A downloadable template for designing and mapping operational workflows, including decision points, control gates, and escalation paths."
        }
      ],
      "chunks": [
        {
          "id": "reading-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, you will design a detailed operational workflow for a team of reading specialists. You will then conduct a stress test by simulating adverse scenarios, such as budget cuts or unexpected student needs, to identify and fortify potential weaknesses in your design."
        },
        {
          "id": "reading-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "We will recap the importance of integrating control gates into operational workflows. These gates serve as formal checkpoints with pre-defined criteria for proceeding, rolling back, or escalating an issue. This architecture ensures quality control and responsive governance."
        }
      ],
      "interactiveActivities": [
        {
          "id": "reading-601-l02-act1",
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
      "id": "reading-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "reading-601-l03-a1",
          "type": "document",
          "title": "Key Concepts Study Guide",
          "content": "A one-page summary of core concepts from Lessons 1 and 2, including key terms and decision frameworks."
        }
      ],
      "questions": [
        {
          "id": "reading-601-l03-q1",
          "text": "Which practice most improves reading systems diagnostics decision quality?",
          "skillId": "reading-601-skill-diagnostics",
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
          "id": "reading-601-l03-q2",
          "text": "At level 601, strong execution for reading operations requires:",
          "skillId": "reading-601-skill-operations",
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
          "id": "reading-601-l03-q3",
          "text": "A defensible approach to reading impact and tradeoff analysis includes:",
          "skillId": "reading-601-skill-analysis",
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
          "id": "reading-601-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "reading-601-skill-governance",
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
      "id": "reading-601-l04",
      "title": "Reading Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "reading-601-l04-a1",
          "type": "image",
          "title": "Decision Matrix Template",
          "content": "A structured table for comparing multiple intervention options across shared criteria like cost, equity, reliability, and implementation risk."
        }
      ],
      "chunks": [
        {
          "id": "reading-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "This lesson provides a framework for deconstructing complex case studies. We will learn to identify the core scenario architecture: the key actors, competing constraints, available resources, and critical decision points. This structured approach enables a thorough and systematic analysis."
        },
        {
          "id": "reading-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "Using a case study, we will practice framing decisions as explicit tradeoffs. Learners will compare intervention options across multiple dimensions such as safety, reliability, cost, and equity. This helps clarify the costs and benefits of each potential path and leads to more defensible choices."
        },
        {
          "id": "reading-601-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "We conclude by reviewing a standardized pattern for a decision memo. A strong recommendation must clearly state the underlying assumptions, supporting evidence, risk controls, and pre-planned fallback options. This structure ensures clarity, transparency, and accountability for high-stakes decisions."
        }
      ],
      "flashcards": [
        {
          "id": "reading-601-l04-f1",
          "front": "Competing Constraints",
          "back": "When improving one metric (e.g., speed of intervention) necessarily degrades another (e.g., cost or quality)."
        },
        {
          "id": "reading-601-l04-f2",
          "front": "Decision Memo",
          "back": "A structured document that outlines a recommendation, its evidence, assumptions, risks, and fallback plans."
        },
        {
          "id": "reading-601-l04-f3",
          "front": "Fallback Plan",
          "back": "A pre-defined alternative course of action to be taken if the primary plan fails or encounters specific trigger conditions."
        }
      ]
    },
    {
      "id": "reading-601-l05",
      "title": "Reading Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "reading-601-l05-a1",
          "type": "image",
          "title": "Simulation Control Panel Guide",
          "content": "A visual guide explaining the levers and metrics available in the simulation, such as resource allocation, communication frequency, and risk thresholds."
        }
      ],
      "chunks": [
        {
          "id": "reading-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "In this hands-on simulation, you will manage a district-wide reading initiative through a series of unexpected events. You must operate scenario controls to balance performance targets with governance constraints, making real-time decisions under pressure."
        },
        {
          "id": "reading-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "This recap focuses on designing effective adaptive responses. A strong leader must be able to update plans and control gates mid-execution in response to new data, without losing traceability or accountability for the changes made."
        }
      ],
      "interactiveActivities": [
        {
          "id": "reading-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure reading scenario and tune controls under uncertainty."
        }
      ]
    },
    {
      "id": "reading-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "reading-601-l06-a1",
          "type": "document",
          "title": "Case Analysis Framework Review",
          "content": "A checklist reviewing the key steps of case deconstruction, tradeoff analysis, and decision memo formulation from Lessons 4 and 5."
        }
      ],
      "questions": [
        {
          "id": "reading-601-l06-q1",
          "text": "In advanced casework, the first requirement for defensible recommendations is:",
          "skillId": "reading-601-skill-diagnostics",
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
          "id": "reading-601-l06-q2",
          "text": "A resilient strategy for reading operations and execution design should include:",
          "skillId": "reading-601-skill-operations",
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
          "id": "reading-601-l06-q3",
          "text": "When evaluating reading impact and tradeoff analysis, which method is most rigorous?",
          "skillId": "reading-601-skill-analysis",
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
          "id": "reading-601-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "reading-601-skill-governance",
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
          "id": "reading-601-l06-q5",
          "text": "When presenting a case analysis, what is the most effective way to communicate tradeoffs between two strong intervention options?",
          "skillId": "reading-601-skill-analysis",
          "options": [
            {
              "id": "a",
              "text": "Describe only the benefits of the recommended option"
            },
            {
              "id": "b",
              "text": "Use a decision matrix to compare both options against shared criteria like cost, equity, and risk"
            },
            {
              "id": "c",
              "text": "Argue that the alternative option has no benefits"
            },
            {
              "id": "d",
              "text": "Focus entirely on anecdotal evidence for one option"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A decision matrix provides a structured, transparent, and defensible method for comparing options and communicating tradeoffs explicitly."
        },
        {
          "id": "reading-601-l06-q6",
          "text": "In a dynamic simulation of a district-wide reading intervention, monitoring data reveals a key assumption is invalid. What does an 'adaptive response' protocol require?",
          "skillId": "reading-601-skill-leadership",
          "options": [
            {
              "id": "a",
              "text": "Immediately halt the entire intervention without a plan"
            },
            {
              "id": "b",
              "text": "Ignore the new data and continue with the original plan"
            },
            {
              "id": "c",
              "text": "Follow a structured process to pause, re-evaluate the strategy, document changes, and communicate them to stakeholders"
            },
            {
              "id": "d",
              "text": "Informally ask a few team members to adjust their work"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Adaptive response is not ad-hoc; it requires a formal, traceable process for changing course based on new evidence."
        }
      ]
    },
    {
      "id": "reading-601-l07",
      "title": "Reading Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "reading-601-l07-a1",
          "type": "image",
          "title": "Infographic: Stakeholder Impact Mapping",
          "content": "A visual representation of how a policy's effects (benefits, costs, risks) are distributed across different stakeholder groups over the short and long term."
        }
      ],
      "chunks": [
        {
          "id": "reading-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Effective leadership requires understanding how interventions affect various stakeholders. In this lesson, we will map the distribution of benefits, burdens, and delayed effects across different groups. This analysis is crucial for equitable and responsible decision-making."
        },
        {
          "id": "reading-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "This section explores the design of robust accountability systems. We will cover the essential components: decision traceability, stakeholder rights for review, and clear obligations for remediation when outcomes are adverse. This architecture builds trust and ensures long-term program integrity."
        },
        {
          "id": "reading-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "We conclude with a practical checklist for responsible leadership. This tool integrates key decision-making criteria, including desired outcomes, ethical guardrails, policy compliance, and system resilience, to guide leaders in making choices that are both effective and principled."
        }
      ],
      "flashcards": [
        {
          "id": "reading-601-l07-f1",
          "front": "Impact Distribution",
          "back": "How the outcomes (positive and negative) of a decision are allocated across different populations and timescales."
        },
        {
          "id": "reading-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record linking a decision to its evidence, ownership, rationale, and subsequent outcomes."
        },
        {
          "id": "reading-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making approach that systematically balances performance goals with accountability and ethical considerations."
        }
      ]
    },
    {
      "id": "reading-601-l08",
      "title": "Reading Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "reading-601-l08-a1",
          "type": "document",
          "title": "Capstone Defense Brief Template",
          "content": "A structured template for assembling a final recommendation, including sections for the core claim, supporting evidence, risk analysis, and remediation plans."
        }
      ],
      "chunks": [
        {
          "id": "reading-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this workshop, you will assemble a capstone defense brief for a complex reading intervention scenario. This involves synthesizing your analysis into a set of core claims, marshalling the supporting evidence, explicitly stating uncertainty bounds, and proposing clear remediation pathways."
        },
        {
          "id": "reading-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "To prepare for the final defense, you will rehearse responding to critiques from multiple expert perspectives, including technical, governance, and stakeholder viewpoints. This practice hones your ability to communicate complex ideas clearly and defend your recommendations under pressure."
        }
      ],
      "interactiveActivities": [
        {
          "id": "reading-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    }
  ]
};
