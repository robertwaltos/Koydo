import type { LearningModule } from "@/lib/modules/types";

export const electrical_engineering_501_Module: LearningModule = {
  "id": "electrical-engineering-501",
  "title": "Electrical Engineering Specialization Studio",
  "description": "Post-401 specialization in Electrical Engineering, focused on power systems diagnostics, operations and execution design, impact and tradeoff analysis, and governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Power Systems",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "electrical-engineering",
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
    "Apply advanced methods for power systems diagnostics in high-constraint environments.",
    "Design robust architectures for power systems operations and execution with measurable control gates.",
    "Evaluate interventions using power systems impact and tradeoff analysis with research-grade rigor.",
    "Operationalize governance and leadership with accountable escalation pathways.",
    "Lead cross-functional decision reviews with explicit tradeoff communication.",
    "Defend recommendations under expert critique using evidence and uncertainty bounds."
  ],
  "lessons": [
    {
      "id": "electrical-engineering-501-l01",
      "title": "Electrical Engineering Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "electrical-engineering-501-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence.",
          "visualPrompt": "A flowchart showing the structured method of diagnostics, highlighting explicit assumptions, measurable evidence, and validation loops."
        }
      ],
      "chunks": [
        {
          "id": "electrical-engineering-501-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "In this lesson, we will explore advanced scope boundaries within the field of Electrical Engineering. Our focus will be on understanding how power systems operate, including the processes involved in diagnosing issues and designing effective operations. By the end of this lesson, you will have a clearer picture of how these systems are structured and the critical importance of careful planning in their execution.",
          "visualPrompt": "Diagram illustrating the boundary limits of a standard power grid system, highlighting inputs, outputs, and external dependencies."
        },
        {
          "id": "electrical-engineering-501-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Learners will engage in mapping out causal pathways—the connections between different events or actions within a power grid. Additionally, we will examine uncertainty ranges and how various system dependencies interact. This foundational knowledge is crucial for planning effective interventions, ensuring we can anticipate challenges and address them proactively.",
          "visualPrompt": "A causal loop diagram showing dependencies between power generation, load demands, and potential failure points."
        },
        {
          "id": "electrical-engineering-501-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "We will emphasize the importance of measurable indicators that support all claims made during our analysis. Each claim should be backed by confidence bounds and established review checkpoints. This structured approach ensures that our findings are reliable and can be verified through consistent evaluation.",
          "visualPrompt": "A graph displaying confidence intervals and evidence thresholds for system reliability."
        }
      ],
      "flashcards": [
        {
          "id": "electrical-engineering-501-l01-f1",
          "front": "Power Systems Diagnostics",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "electrical-engineering-501-l01-f2",
          "front": "Operations and Execution Design",
          "back": "Execution architecture that determines reliability under stress."
        },
        {
          "id": "electrical-engineering-501-l01-f3",
          "front": "Impact and Tradeoff Analysis",
          "back": "Evaluation discipline for identifying true gains and hidden costs."
        }
      ]
    },
    {
      "id": "electrical-engineering-501-l02",
      "title": "Electrical Engineering Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "electrical-engineering-501-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence.",
          "visualPrompt": "An interactive dashboard mockup showing stress-test metrics and control gate statuses."
        }
      ],
      "chunks": [
        {
          "id": "electrical-engineering-501-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive practice session, learners will design specialized workflows tailored to specific engineering tasks. After creating these workflows, you will stress-test them by simulating adverse scenarios. This hands-on experience is vital for understanding how to adapt and improve designs under challenging conditions.",
          "visualPrompt": "A split-screen view showing a workflow design on the left and a real-time stress test simulation on the right."
        },
        {
          "id": "electrical-engineering-501-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "We will discuss the architecture of control gates within our workflows. These control gates are essential as they integrate various checkpoints, criteria for rolling back decisions, and escalation procedures based on thresholds. Understanding this architecture helps ensure that our workflows are robust and can handle unexpected situations effectively.",
          "visualPrompt": "A schematic of a control gate showing 'Proceed', 'Rollback', and 'Escalate' pathways based on data thresholds."
        }
      ],
      "interactiveActivities": [
        {
          "id": "electrical-engineering-501-l02-act1",
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
      "id": "electrical-engineering-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "electrical-engineering-501-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence.",
          "visualPrompt": "A checklist graphic highlighting 'Assumptions', 'Constraints', and 'Metrics'."
        }
      ],
      "questions": [
        {
          "id": "electrical-engineering-501-l03-q1",
          "text": "Which practice most improves power systems diagnostics decision quality?",
          "skillId": "electrical-engineering-501-skill-core",
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
          "id": "electrical-engineering-501-l03-q2",
          "text": "At level 501, strong execution for power systems operations requires:",
          "skillId": "electrical-engineering-501-skill-execution",
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
          "id": "electrical-engineering-501-l03-q3",
          "text": "A defensible approach to power systems impact and tradeoff analysis includes:",
          "skillId": "electrical-engineering-501-skill-eval",
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
          "id": "electrical-engineering-501-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "electrical-engineering-501-skill-governance",
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
          "id": "electrical-engineering-501-l03-q5",
          "text": "What is the best way to compare competing interventions in advanced Power Systems?",
          "skillId": "electrical-engineering-501-skill-advanced-5",
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
          "id": "electrical-engineering-501-l03-q6",
          "text": "In high-stakes execution, which communication protocol is strongest?",
          "skillId": "electrical-engineering-501-skill-advanced-6",
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
          "id": "electrical-engineering-501-l03-q7",
          "text": "A mature remediation loop in advanced Power Systems should prioritize:",
          "skillId": "electrical-engineering-501-skill-advanced-7",
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
          "id": "electrical-engineering-501-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience?",
          "skillId": "electrical-engineering-501-skill-advanced-8",
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
      "id": "electrical-engineering-501-l04",
      "title": "Electrical Engineering Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "electrical-engineering-501-l04-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence.",
          "visualPrompt": "A split-screen graphic comparing two competing power system designs with pros, cons, and risk factors."
        }
      ],
      "chunks": [
        {
          "id": "electrical-engineering-501-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "In this lesson, we will frame a case that highlights the competing constraints faced in power systems diagnostics. We will analyze the impacts and trade-offs involved in decision-making processes. By understanding these competing factors, learners will be better equipped to navigate the complexities of power systems and make informed choices.",
          "visualPrompt": "A 3D rendering of a power grid under stress, highlighting nodes with competing constraints."
        },
        {
          "id": "electrical-engineering-501-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "During this practice session, learners will compare different options available to them across several important dimensions, including safety, reliability, cost, equity, and governance. This comparative analysis will help you understand how to weigh the pros and cons of each option effectively, leading to more informed decision-making.",
          "visualPrompt": "A radar chart comparing two engineering solutions across safety, reliability, cost, equity, and governance."
        },
        {
          "id": "electrical-engineering-501-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "We will outline the essential components of a decision memo. Each recommendation made should include clear assumptions, supporting evidence, risk controls, and fallback plans. This structured approach ensures that all decisions are well-documented and can be revisited if necessary.",
          "visualPrompt": "A template of a professional decision memo with highlighted sections for assumptions, evidence, and fallback plans."
        }
      ]
    },
    {
      "id": "electrical-engineering-501-l05",
      "title": "Electrical Engineering Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "electrical-engineering-501-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence.",
          "visualPrompt": "A simulated control room interface with dials, alerts, and real-time power flow data."
        }
      ],
      "chunks": [
        {
          "id": "electrical-engineering-501-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "In this interactive practice, learners will operate scenario controls while balancing various performance and governance constraints. This exercise is designed to enhance your ability to manage real-time situations effectively, ensuring that you can make decisions that align with both operational goals and regulatory requirements.",
          "visualPrompt": "An interactive slider interface adjusting load balance while monitoring system temperature and compliance alerts."
        },
        {
          "id": "electrical-engineering-501-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "We will discuss the importance of effective responses that update control gates while maintaining traceability and accountability. This ensures that all changes made during the process are documented and can be tracked back to their origins, which is crucial for maintaining integrity in engineering practices.",
          "visualPrompt": "A digital audit trail showing a timeline of user decisions and system responses during the simulation."
        }
      ],
      "interactiveActivities": [
        {
          "id": "electrical-engineering-501-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure electrical engineering scenario and tune controls under uncertainty."
        }
      ]
    },
    {
      "id": "electrical-engineering-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "electrical-engineering-501-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence.",
          "visualPrompt": "An icon of a magnifying glass over a data chart, representing evidence-based validation."
        }
      ],
      "questions": [
        {
          "id": "electrical-engineering-501-l06-q1",
          "text": "In advanced casework, the first requirement for defensible recommendations is:",
          "skillId": "electrical-engineering-501-skill-case1",
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
          "id": "electrical-engineering-501-l06-q2",
          "text": "A resilient strategy for power systems operations and execution design should include:",
          "skillId": "electrical-engineering-501-skill-case2",
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
          "id": "electrical-engineering-501-l06-q3",
          "text": "When evaluating power systems impact and tradeoff analysis, which method is most rigorous?",
          "skillId": "electrical-engineering-501-skill-case3",
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
          "id": "electrical-engineering-501-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "electrical-engineering-501-skill-case4",
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
          "id": "electrical-engineering-501-l06-q5",
          "text": "What is the best way to compare competing interventions in advanced Power Systems?",
          "skillId": "electrical-engineering-501-skill-advanced-5",
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
          "id": "electrical-engineering-501-l06-q6",
          "text": "In high-stakes execution, which communication protocol is strongest?",
          "skillId": "electrical-engineering-501-skill-advanced-6",
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
          "id": "electrical-engineering-501-l06-q7",
          "text": "A mature remediation loop in advanced Power Systems should prioritize:",
          "skillId": "electrical-engineering-501-skill-advanced-7",
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
          "id": "electrical-engineering-501-l06-q8",
          "text": "Which portfolio decision rule best balances performance and resilience?",
          "skillId": "electrical-engineering-501-skill-advanced-8",
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
      "id": "electrical-engineering-501-l07",
      "title": "Electrical Engineering Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "electrical-engineering-501-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence.",
          "visualPrompt": "An infographic mapping the flow of benefits and burdens across different community stakeholders."
        }
      ],
      "chunks": [
        {
          "id": "electrical-engineering-501-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "In this lesson, learners will explore how to map the distribution of benefits, burdens, and delayed effects across different stakeholder groups. Understanding these impacts is essential for ensuring that all voices are heard and considered in the decision-making process, promoting fairness and equity.",
          "visualPrompt": "A demographic map showing the localized impact of a new power substation on surrounding neighborhoods."
        },
        {
          "id": "electrical-engineering-501-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "We will focus on the architecture of accountability within decision-making processes. This includes integrating decision traceability, review rights, and remediation obligations. By understanding these components, learners will appreciate the importance of accountability in engineering governance and public impact.",
          "visualPrompt": "A flowchart detailing the chain of command and accountability loops from engineers to public regulators."
        },
        {
          "id": "electrical-engineering-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "At the end of our lesson, we provide a comprehensive checklist that connects important outcomes with ethical considerations, ensures policy compliance, and emphasizes system resilience. This checklist serves as a guide to ensure responsible leadership in the field of electrical engineering.",
          "visualPrompt": "A stylized checklist graphic with checkmarks next to 'Ethics', 'Compliance', and 'Resilience'."
        }
      ],
      "flashcards": [
        {
          "id": "electrical-engineering-501-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes are allocated across populations and timescales."
        },
        {
          "id": "electrical-engineering-501-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable record of evidence, ownership, and rationale."
        },
        {
          "id": "electrical-engineering-501-l07-f3",
          "front": "Responsible leadership",
          "back": "Decision behavior balancing performance, accountability, and ethics."
        }
      ]
    },
    {
      "id": "electrical-engineering-501-l08",
      "title": "Electrical Engineering Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "electrical-engineering-501-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence.",
          "visualPrompt": "A virtual meeting room layout showing a presenter defending a technical brief to a panel of experts."
        }
      ],
      "chunks": [
        {
          "id": "electrical-engineering-501-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this interactive activity, learners will create a comprehensive brief that includes their main claims, supporting evidence, the boundaries of uncertainty, and potential pathways for remediation. This exercise helps students practice articulating their ideas clearly and prepares them for real-world engineering challenges.",
          "visualPrompt": "An interactive document builder where users drag and drop evidence blocks to support their main engineering claims."
        },
        {
          "id": "electrical-engineering-501-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "During this recap session, learners will practice their responses to various critiques that may come from technical experts, governance representatives, and stakeholders. This rehearsal is crucial for building confidence and ensuring that students can effectively communicate their ideas and defend their projects in a professional setting.",
          "visualPrompt": "A dialogue tree interface simulating tough questions from a panel of virtual experts."
        }
      ],
      "interactiveActivities": [
        {
          "id": "electrical-engineering-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    }
  ]
};
