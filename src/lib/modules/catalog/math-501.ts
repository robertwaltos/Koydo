import type { LearningModule } from "@/lib/modules/types";

export const math_501_Module: LearningModule = {
  "id": "math-501",
  "title": "Math Specialization Studio",
  "description": "Post-401 specialization in Math, focused on math systems diagnostics, math operations and execution design, math impact and tradeoff analysis, and math governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Math",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "math",
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
    "Apply advanced methods for math systems diagnostics in high-constraint environments.",
    "Design robust systems for math operations and execution with measurable control gates.",
    "Evaluate interventions and their impacts with research-grade tradeoff analysis.",
    "Operationalize math governance and leadership with accountable escalation pathways.",
    "Lead cross-functional decision reviews with explicit tradeoff communication.",
    "Defend complex recommendations under expert critique using evidence and uncertainty bounds."
  ],
  "lessons": [
    {
      "id": "math-501-l01",
      "title": "Advanced Foundations in Mathematical Systems",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "math-501-l01-a1",
          "type": "image",
          "title": "Diagnostic Process Flowchart",
          "content": "A flowchart illustrating the process of math systems diagnostics, from problem scoping and boundary design to validation and evidence thresholds."
        }
      ],
      "chunks": [
        {
          "id": "math-501-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "Define the operational boundaries of a complex mathematical system. Learn to diagnose system behavior by making assumptions explicit and identifying key constraints, setting the stage for effective problem-solving."
        },
        {
          "id": "math-501-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Map the causal pathways that connect variables within a system. Quantify uncertainty ranges and analyze system dependencies to predict how interventions will perform under various conditions."
        },
        {
          "id": "math-501-l01-c3",
          "kind": "recap",
          "title": "Establishing Evidence Thresholds",
          "content": "Recap the importance of aligning all claims with measurable indicators. Establish clear confidence bounds and review checkpoints to ensure conclusions are reliable, well-founded, and defensible."
        }
      ],
      "flashcards": [
        {
          "id": "math-501-l01-f1",
          "front": "Math Systems Diagnostics",
          "back": "A structured method for analyzing complex systems by defining explicit assumptions, boundaries, and measurable constraints."
        },
        {
          "id": "math-501-l01-f2",
          "front": "Causal Pathway",
          "back": "The chain of events or variable interactions that lead from a cause to an effect within a defined system."
        },
        {
          "id": "math-501-l01-f3",
          "front": "Uncertainty Bound",
          "back": "A quantified range that expresses the confidence level in a measurement or prediction, acknowledging potential variability."
        }
      ]
    },
    {
      "id": "math-501-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "math-501-l02-a1",
          "type": "practice",
          "title": "Workflow Design Template",
          "content": "An interactive template for designing a specialized workflow, including sections for control gates, rollback criteria, and escalation paths."
        }
      ],
      "chunks": [
        {
          "id": "math-501-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress-Testing",
          "content": "Design a specialized workflow for a given mathematical task. Then, stress-test your design by simulating adverse scenarios to evaluate its resilience and identify potential failure points."
        },
        {
          "id": "math-501-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "Review how to structure workflows with checkpoints, rollback criteria, and threshold-based escalation. These components are vital for creating adaptive processes that support robust decision-making."
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-501-l02-act1",
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
      "id": "math-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "math-501-l03-a1",
          "type": "practice",
          "title": "Key Concepts Study Guide",
          "content": "A summary of core concepts from Lessons 1 & 2, including systems diagnostics, uncertainty modeling, and control gate architecture."
        }
      ],
      "questions": [
        {
          "id": "math-501-l03-q1",
          "text": "Which practice most improves the decision quality of math systems diagnostics?",
          "skillId": "math-501-lo-01",
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
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are made explicit, forming the foundation of a rigorous diagnostic process."
        },
        {
          "id": "math-501-l03-q2",
          "text": "A robust system for math operations and execution design requires:",
          "skillId": "math-501-lo-02",
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
          "explanation": "Reliable advanced execution needs clear ownership, planned checkpoints, and threshold-driven governance to manage complexity and risk."
        },
        {
          "id": "math-501-l03-q3",
          "text": "A defensible approach to math impact and tradeoff analysis includes:",
          "skillId": "math-501-lo-03",
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
          "explanation": "Defensible analysis combines comparative baselines, a thorough check for unintended side-effects, and a clear disclosure of uncertainty."
        },
        {
          "id": "math-501-l03-q4",
          "text": "Mature governance systems effectively connect:",
          "skillId": "math-501-lo-04",
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
          "explanation": "Governance maturity is the operational link between the stated intent of a policy, how it is measured and controlled, and what actions are taken when it fails."
        }
      ]
    },
    {
      "id": "math-501-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "math-501-l04-a1",
          "type": "image",
          "title": "Sample Decision Memo",
          "content": "An example of a completed Decision Memo, highlighting the sections for assumptions, evidence, risk controls, and fallback plans."
        }
      ],
      "chunks": [
        {
          "id": "math-501-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "Frame complex case studies that feature competing constraints. Analyze the impacts and trade-offs involved in various decisions to understand how to balance multiple factors effectively."
        },
        {
          "id": "math-501-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "Practice comparing different options across multiple dimensions, such as safety, reliability, cost, and equity. This analysis highlights the complexities of real-world decision-making."
        },
        {
          "id": "math-501-l04-c3",
          "kind": "recap",
          "title": "The Decision Memo Pattern",
          "content": "Review the structure of a professional decision memo. A strong recommendation must clearly outline its underlying assumptions, supporting evidence, risk controls, and fallback plans."
        }
      ],
      "flashcards": [
        {
          "id": "math-501-l04-f1",
          "front": "Tradeoff Framing",
          "back": "The process of systematically comparing options across multiple, often competing, dimensions of value (e.g., cost vs. safety)."
        },
        {
          "id": "math-501-l04-f2",
          "front": "Decision Memo",
          "back": "A structured document that presents a recommendation along with its supporting evidence, assumptions, risks, and contingency plans."
        }
      ]
    },
    {
      "id": "math-501-l05",
      "title": "Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "math-501-l05-a1",
          "type": "practice",
          "title": "Simulation Interface",
          "content": "A screenshot of the simulation interface, with key controls for adjusting parameters and dashboards for monitoring outcomes annotated."
        }
      ],
      "chunks": [
        {
          "id": "math-501-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Control",
          "content": "Operate the controls of a dynamic scenario, balancing system performance with governance constraints. This exercise provides direct insight into managing competing priorities under pressure."
        },
        {
          "id": "math-501-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "Recap the importance of designing effective responses that update control gates while maintaining traceability and accountability. As strategies adapt, all changes must be documented and their outcomes tracked."
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-501-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Manage a complex financial model during a simulated market shock. Adjust risk parameters, trigger contingency plans, and manage stakeholder communications in real-time to mitigate losses and maintain stability."
        }
      ]
    },
    {
      "id": "math-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "math-501-l06-a1",
          "type": "practice",
          "title": "Case Analysis Framework",
          "content": "A review sheet outlining the key frameworks for case analysis and adaptive response used in Lessons 4 & 5."
        }
      ],
      "questions": [
        {
          "id": "math-501-l06-q1",
          "text": "In an advanced case analysis, what is the most critical element for framing a defensible recommendation?",
          "skillId": "math-501-lo-03",
          "options": [
            {
              "id": "a",
              "text": "Focusing only on the positive outcomes of the preferred option."
            },
            {
              "id": "b",
              "text": "A clear problem statement with explicit tradeoffs and decision criteria."
            },
            {
              "id": "c",
              "text": "Using complex vocabulary to sound more authoritative."
            },
            {
              "id": "d",
              "text": "Waiting to define success metrics until after the results are in."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A defensible recommendation is built on a well-framed problem, which includes clearly defined tradeoffs and the criteria used to evaluate them."
        },
        {
          "id": "math-501-l06-q2",
          "text": "During a high-pressure simulation, an effective leader should prioritize:",
          "skillId": "math-501-lo-05",
          "options": [
            {
              "id": "a",
              "text": "Making rapid, undocumented changes to show decisiveness."
            },
            {
              "id": "b",
              "text": "Adhering to the original plan, regardless of new information."
            },
            {
              "id": "c",
              "text": "Executing adaptive responses based on pre-defined triggers and fallback plans."
            },
            {
              "id": "d",
              "text": "Waiting for complete certainty before taking any action."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Effective leadership in a crisis involves making adaptive decisions guided by a resilient plan that includes triggers and contingencies."
        },
        {
          "id": "math-501-l06-q3",
          "text": "When presenting a decision to a cross-functional review, the most effective communication strategy is to:",
          "skillId": "math-501-lo-05",
          "options": [
            {
              "id": "a",
              "text": "Hide the potential downsides to get faster approval."
            },
            {
              "id": "b",
              "text": "Explicitly state the recommendation, key tradeoffs, and remaining uncertainties."
            },
            {
              "id": "c",
              "text": "Present only the data that supports your chosen path."
            },
            {
              "id": "d",
              "text": "Assume everyone in the room has the same technical background."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Transparent communication that acknowledges tradeoffs and uncertainties builds trust and leads to more robust, collective decision-making."
        },
        {
          "id": "math-501-l06-q4",
          "text": "When defending a recommendation against expert critique, the strongest response is to:",
          "skillId": "math-501-lo-06",
          "options": [
            {
              "id": "a",
              "text": "Dismiss the critique as irrelevant."
            },
            {
              "id": "b",
              "text": "Agree with the critique immediately to avoid conflict."
            },
            {
              "id": "c",
              "text": "Acknowledge the critique and connect it back to your evidence, assumptions, and risk analysis."
            },
            {
              "id": "d",
              "text": "Change your recommendation on the spot without further analysis."
            }
          ],
          "correctOptionId": "c",
          "explanation": "A strong defense involves engaging with criticism by referencing the foundational evidence and logic of your analysis, demonstrating rigor and preparedness."
        }
      ]
    },
    {
      "id": "math-501-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "math-501-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A heatmap illustrating the distribution of benefits and burdens from a public policy decision across different demographic groups and timelines."
        }
      ],
      "chunks": [
        {
          "id": "math-501-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Map the distribution of benefits, burdens, and delayed effects across different stakeholder groups. Understanding these impacts is essential for creating equitable and sustainable solutions."
        },
        {
          "id": "math-501-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Design the architecture of accountability for a decision-making process. This includes ensuring decision traceability, rights for review, and obligations for remediation to maintain trust and integrity."
        },
        {
          "id": "math-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "Review a checklist that connects outcomes with ethical considerations, policy compliance, and system resilience. This serves as a practical tool for responsible decision-making."
        }
      ],
      "flashcards": [
        {
          "id": "math-501-l07-f1",
          "front": "Impact Distribution",
          "back": "How the positive and negative outcomes of a decision are allocated across different populations and over various timescales."
        },
        {
          "id": "math-501-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record of the evidence, ownership, and rationale behind a decision, allowing for future review and accountability."
        },
        {
          "id": "math-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making approach that balances performance goals with accountability, ethical considerations, and long-term resilience."
        }
      ]
    },
    {
      "id": "math-501-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "math-501-l08-a1",
          "type": "practice",
          "title": "Capstone Defense Briefing Template",
          "content": "A structured template for assembling a capstone defense brief, complete with a scoring rubric used by the expert panel."
        }
      ],
      "chunks": [
        {
          "id": "math-501-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "Collaborate to construct a detailed defense brief for your capstone project. The brief must include well-supported claims, primary evidence, clear uncertainty bounds, and proposed remediation pathways."
        },
        {
          "id": "math-501-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "Rehearse responses to critiques from technical experts, governance bodies, and public stakeholders. This practice builds confidence and sharpens communication skills for the final defense."
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Present your capstone analysis to a simulated panel of experts. Field challenging questions regarding your methodology, assumptions, and the ethical implications of your recommendations under adversarial cross-examination."
        }
      ]
    }
  ]
};
