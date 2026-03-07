import type { LearningModule } from "@/lib/modules/types";

export const psychology_601_Module: LearningModule = {
  "id": "psychology-601",
  "title": "Psychology Research and Leadership",
  "description": "Post-401 specialization in Psychology, focused on psychology systems diagnostics, psychology operations and execution design, psychology impact and tradeoff analysis, and psychology governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Psychology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "psychology",
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
    "Apply advanced methods for psychology systems diagnostics in high-constraint environments.",
    "Design robust systems for psychology operations and execution with measurable control gates.",
    "Evaluate interventions and their consequences with research-grade rigor in impact and tradeoff analysis.",
    "Operationalize psychology governance and leadership with accountable governance and escalation pathways.",
    "Lead cross-functional decision reviews with explicit tradeoff communication.",
    "Defend complex psychological recommendations under expert critique using evidence and uncertainty bounds."
  ],
  "lessons": [
    {
      "id": "psychology-601-l01",
      "title": "Advanced Foundations in Psychological Systems",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "psychology-601-l01-a1",
          "type": "image",
          "title": "Diagnostic Process Flowchart",
          "content": "A visual flowchart illustrating the steps of a psychological systems diagnostic: 1. Define Scope, 2. Map Causal Pathways, 3. Model Uncertainty, 4. Set Evidence Thresholds, 5. Propose Intervention."
        },
        {
          "id": "psychology-601-l01-a2",
          "type": "summary",
          "title": "Key Concepts Summary",
          "content": "A one-page document summarizing the core concepts of Scope Design, Causal Modeling, and Evidence Thresholds."
        }
      ],
      "chunks": [
        {
          "id": "psychology-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "This lesson delves into the advanced boundaries of psychology, essential for understanding the field at a deeper level. We will focus on how to effectively diagnose psychological systems by identifying underlying issues and designing practical, impactful operations. Why this matters: Clearly defining the scope and boundaries of a psychological problem prevents scope creep and ensures diagnostic efforts are focused and effective.",
          "visualPrompt": "An animation showing a blurry, undefined problem space slowly coming into focus with clear boundaries and labels."
        },
        {
          "id": "psychology-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Learners will map out causal pathways, which are the connections between different events or actions. We will also define uncertainty ranges to understand the limits of our knowledge and identify system dependencies. This foundational work is essential before planning any interventions.",
          "visualPrompt": "A diagram showing interconnected nodes representing factors, with arrows indicating causal links and shaded areas around nodes indicating uncertainty."
        },
        {
          "id": "psychology-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "It is critical to ensure that all claims are supported by measurable indicators. We will establish confidence bounds to quantify our certainty and set up review checkpoints to evaluate progress. This process ensures our conclusions are based on solid evidence.",
          "visualPrompt": "A graph with a data trendline, showing upper and lower confidence bound lines, with a clear 'pass/fail' threshold marked."
        }
      ],
      "flashcards": [
        {
          "id": "psychology-601-l01-f1",
          "front": "What is psychology systems diagnostics?",
          "back": "A specialization requiring explicit assumptions, measurable constraints, and causal modeling to identify root causes in complex psychological environments."
        },
        {
          "id": "psychology-601-l01-f2",
          "front": "What is psychology operations design?",
          "back": "The architecture for executing psychological interventions, defining roles, control gates, and fallback plans to ensure reliability under stress."
        },
        {
          "id": "psychology-601-l01-f3",
          "front": "What is psychology impact and tradeoff analysis?",
          "back": "An evaluation discipline for identifying the true gains, hidden costs, and unintended side effects of an intervention across different stakeholders."
        }
      ]
    },
    {
      "id": "psychology-601-l02",
      "title": "Psychology Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "psychology-601-l02-a1",
          "type": "image",
          "title": "Control Gate Diagram",
          "content": "A diagram of a workflow with key decision points marked as 'Control Gates'. Each gate has inputs (data, metrics) and outputs (Go, No-Go, Escalate)."
        },
        {
          "id": "psychology-601-l02-a2",
          "type": "practice",
          "title": "Workflow Design Template",
          "content": "A fillable template for learners to design their own operational workflow, including sections for objectives, owners, control gates, and escalation criteria."
        }
      ],
      "chunks": [
        {
          "id": "psychology-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive practice, learners will design specialized operational workflows. These workflows will then be stress-tested against challenging scenarios to identify potential weaknesses and ensure the methods are robust and effective.",
          "visualPrompt": "A user interface where a learner drags and drops components (e.g., 'Data Collection', 'Review', 'Intervention') to build a workflow, which is then tested with simulated 'stress events'."
        },
        {
          "id": "psychology-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "This recap covers how to design workflows with critical checkpoints. These gates help monitor progress, define rollback criteria to revert to previous states if necessary, and establish threshold-based escalation procedures to address issues as they arise. This architecture is vital for maintaining control.",
          "visualPrompt": "A summary slide highlighting the three key components of a control gate: 1. Entry Criteria, 2. Decision Logic, 3. Exit Pathways (Proceed, Halt, Escalate)."
        }
      ],
      "interactiveActivities": [
        {
          "id": "psychology-601-l02-act1",
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
      "id": "psychology-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "psychology-601-l03-a1",
          "type": "practice",
          "title": "Checkpoint 1 Study Guide",
          "content": "A summary of key concepts from Lessons 1 and 2, with sample questions to help prepare for the checkpoint."
        }
      ],
      "questions": [
        {
          "id": "psychology-601-l03-q1",
          "text": "Which practice most improves the decision quality of psychology systems diagnostics?",
          "skillId": "psychology-601-skill-core",
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
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are made explicit, forming a solid foundation for analysis."
        },
        {
          "id": "psychology-601-l03-q2",
          "text": "At an advanced level, strong execution for psychology operations requires:",
          "skillId": "psychology-601-skill-execution",
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
          "explanation": "Reliable advanced execution needs clear ownership, regular checkpoints, and pre-defined thresholds for governance and escalation."
        },
        {
          "id": "psychology-601-l03-q3",
          "text": "A defensible approach to psychology impact and tradeoff analysis includes:",
          "skillId": "psychology-601-skill-eval",
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
          "explanation": "Defensible analysis combines comparative baselines, a thorough check for unintended side-effects, and transparent disclosure of uncertainty."
        },
        {
          "id": "psychology-601-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "psychology-601-skill-governance",
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
          "explanation": "Governance maturity is the operational link between the intent of a policy, how it is measured and controlled, and what actions are taken when it fails."
        }
      ]
    },
    {
      "id": "psychology-601-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "psychology-601-l04-a1",
          "type": "image",
          "title": "Tradeoff Analysis Matrix",
          "content": "A table comparing three different intervention options (rows) against multiple criteria like 'Cost', 'Effectiveness', 'Equity', and 'Risk' (columns), with cells color-coded for positive or negative impact."
        },
        {
          "id": "psychology-601-l04-a2",
          "type": "summary",
          "title": "Case Analysis Framework",
          "content": "A step-by-step guide for analyzing complex cases: 1. Identify Core Problem, 2. Map Stakeholders & Constraints, 3. Generate Options, 4. Analyze Tradeoffs, 5. Formulate Recommendation."
        }
      ],
      "chunks": [
        {
          "id": "psychology-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "We will frame cases that highlight competing constraints in psychology systems diagnostics. We will analyze the impact of different psychological interventions and the trade-offs involved, helping us make informed decisions in complex situations. Why this matters: Structuring complex cases with competing constraints allows for a systematic evaluation of challenges, mirroring real-world leadership scenarios.",
          "visualPrompt": "An animation showing puzzle pieces labeled 'Budget', 'Timeline', 'Ethics', and 'Efficacy' being fitted together to solve a central problem."
        },
        {
          "id": "psychology-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "Learners will compare various options based on multiple dimensions, including safety, reliability, cost, equity, and governance. This practice helps in understanding how different choices affect stakeholders and the overall effectiveness of psychological interventions.",
          "visualPrompt": "A set of balance scales, with different 'weights' (e.g., 'High Cost', 'High Impact') being placed on each side to visualize the tradeoffs between two options."
        },
        {
          "id": "psychology-601-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "This recap emphasizes that each recommendation must include clear assumptions, supporting evidence, risk controls, and fallback plans. This structured approach ensures that our decisions are well-informed and that we are prepared for unforeseen circumstances.",
          "visualPrompt": "A document template for a 'Decision Memo' with clearly marked sections for 'Recommendation', 'Evidence', 'Risks', and 'Contingency Plan'."
        }
      ],
      "flashcards": [
        {
          "id": "psychology-601-l04-f1",
          "front": "What are competing constraints?",
          "back": "Factors such as safety, cost, ethics, and efficacy that must be balanced against each other when making a decision."
        },
        {
          "id": "psychology-601-l04-f2",
          "front": "What is tradeoff analysis?",
          "back": "A systematic method for comparing the pros and cons of different options across multiple, often competing, dimensions."
        },
        {
          "id": "psychology-601-l04-f3",
          "front": "What is a decision memo?",
          "back": "A structured document outlining a recommendation, its supporting rationale, key assumptions, identified risks, and fallback plans."
        }
      ]
    },
    {
      "id": "psychology-601-l05",
      "title": "Psychology Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "psychology-601-l05-a1",
          "type": "image",
          "title": "Simulation Control Dashboard",
          "content": "A screenshot of a simulation interface showing real-time metrics (e.g., 'Public Trust', 'Budget Remaining'), a news feed with developing events, and a panel of intervention options for the learner to choose from."
        },
        {
          "id": "psychology-601-l05-a2",
          "type": "practice",
          "title": "Simulation Scenario Brief",
          "content": "A document outlining the background, objectives, and key stakeholders for the upcoming simulation exercise."
        }
      ],
      "chunks": [
        {
          "id": "psychology-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "During this interactive session, learners will operate scenario controls while balancing performance and governance constraints. This hands-on experience helps them understand the complexities of managing psychological scenarios effectively. Why this matters: Operating controls in a live simulation provides hands-on practice in making high-stakes decisions under pressure, bridging the gap between theory and application.",
          "visualPrompt": "A first-person view of the simulation dashboard, with the learner's cursor hovering over a critical decision button as a timer counts down."
        },
        {
          "id": "psychology-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "This recap discusses how effective responses to challenges should update control gates while maintaining traceability and accountability. This means we need to track our decisions and ensure we can refer back to them when necessary.",
          "visualPrompt": "A flowchart showing an initial plan, an unexpected event occurring, and a new branch in the plan labeled 'Adaptive Response' with a note linking back to the original decision."
        }
      ],
      "interactiveActivities": [
        {
          "id": "psychology-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Manage a high-pressure public health crisis simulation. Allocate resources, manage public communications, and adapt your strategy as new information and unexpected events emerge. Your performance will be scored on effectiveness, ethics, and resource management."
        }
      ]
    },
    {
      "id": "psychology-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "psychology-601-l06-a1",
          "type": "practice",
          "title": "Checkpoint 2 Study Guide",
          "content": "A summary of key concepts from Lessons 4 and 5, focusing on case analysis, tradeoff framing, and adaptive decision-making in simulations."
        }
      ],
      "questions": [
        {
          "id": "psychology-601-l06-q1",
          "text": "In advanced casework, the first requirement for a defensible recommendation is:",
          "skillId": "psychology-601-skill-case1",
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
              "text": "High confidence without evidence logs"
            },
            {
              "id": "d",
              "text": "Optimization for a single metric only"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible recommendations begin with an explicit framework of assumptions, constraints, and measurable targets before any solution is proposed."
        },
        {
          "id": "psychology-601-l06-q2",
          "text": "When framing tradeoffs between two psychological interventions, the most rigorous approach is to:",
          "skillId": "psychology-601-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "Focus only on the positive outcomes of your preferred option"
            },
            {
              "id": "b",
              "text": "Compare them across a shared set of criteria, including costs, risks, and equity impacts"
            },
            {
              "id": "c",
              "text": "Choose the option that is easiest to explain"
            },
            {
              "id": "d",
              "text": "Ignore long-term side effects in favor of short-term gains"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous tradeoff analysis requires comparing all options against the same, comprehensive set of criteria to ensure a fair and complete evaluation."
        },
        {
          "id": "psychology-601-l06-q3",
          "text": "During a live simulation, an unexpected event makes your initial strategy less effective. What is the best adaptive response?",
          "skillId": "psychology-601-skill-sim1",
          "options": [
            {
              "id": "a",
              "text": "Continue with the original plan regardless of the new information"
            },
            {
              "id": "b",
              "text": "Pause, re-evaluate the situation against your goals, and adjust your plan with documented rationale"
            },
            {
              "id": "c",
              "text": "Immediately switch to a random alternative strategy"
            },
            {
              "id": "d",
              "text": "End the simulation to avoid a negative outcome"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective adaptive response involves a deliberate process of re-evaluation and adjustment, ensuring decisions remain rational and traceable even under pressure."
        },
        {
          "id": "psychology-601-l06-q4",
          "text": "A well-structured decision memo, following a complex case analysis, primarily serves to:",
          "skillId": "psychology-601-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "Obscure the risks associated with the recommendation"
            },
            {
              "id": "b",
              "text": "Provide a long narrative without a clear conclusion"
            },
            {
              "id": "c",
              "text": "Create a transparent and accountable record of the decision logic, including evidence, risks, and fallbacks"
            },
            {
              "id": "d",
              "text": "Persuade the reader using emotion rather than evidence"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The core purpose of a decision memo is to create a clear, auditable trail of the rationale, enhancing transparency and accountability."
        }
      ]
    },
    {
      "id": "psychology-601-l07",
      "title": "Psychology Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "psychology-601-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A diagram with concentric circles representing primary, secondary, and tertiary stakeholders. Lines connect a central policy decision to each group, showing the distribution of positive (green) and negative (red) impacts."
        },
        {
          "id": "psychology-601-l07-a2",
          "type": "summary",
          "title": "Governance Checklist",
          "content": "A checklist for evaluating the governance of a psychological intervention, with items like 'Is there decision traceability?', 'Are there appeal pathways?', and 'Are impacts monitored?'"
        }
      ],
      "chunks": [
        {
          "id": "psychology-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Learners will map the distribution of benefits, burdens, and delayed effects across different stakeholder groups. This is crucial for recognizing how decisions impact various people and communities. Why this matters: Analyzing the distribution of impacts is a core ethical responsibility, ensuring that interventions do not create unintended harm or exacerbate inequalities.",
          "visualPrompt": "An animated map showing a resource being distributed from a central point, with some areas receiving a large share and others receiving very little, illustrating unequal distribution."
        },
        {
          "id": "psychology-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "We will explore the architecture of accountability. This includes understanding decision traceability, the rights of individuals to review those decisions, and the obligations to address any issues that arise. This framework is essential for ensuring ethical practices in psychology.",
          "visualPrompt": "A blueprint diagram showing the 'architecture' of an accountable system, with pillars labeled 'Transparency', 'Redress', and 'Traceability' supporting a roof labeled 'Trust'."
        },
        {
          "id": "psychology-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "This recap provides a checklist connecting key outcomes with ethical considerations, policy compliance, and resilience in leadership practices. This serves as a guide for reflecting on our responsibilities as leaders.",
          "visualPrompt": "A simple, elegant checklist on screen with key items being ticked off one by one as the narrator summarizes them."
        }
      ],
      "flashcards": [
        {
          "id": "psychology-601-l07-f1",
          "front": "What is impact distribution?",
          "back": "The way in which the outcomes (benefits, costs, risks) of a decision or intervention are allocated across different populations and over time."
        },
        {
          "id": "psychology-601-l07-f2",
          "front": "What is decision traceability?",
          "back": "An auditable record of a decision, including the evidence used, the owners involved, and the rationale behind the final choice."
        },
        {
          "id": "psychology-601-l07-f3",
          "front": "What is responsible leadership?",
          "back": "A decision-making approach that balances performance and efficiency with accountability, ethical considerations, and long-term resilience."
        }
      ]
    },
    {
      "id": "psychology-601-l08",
      "title": "Psychology Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "psychology-601-l08-a1",
          "type": "image",
          "title": "Defense Brief Template",
          "content": "A slide deck template for the capstone defense, with pre-formatted slides for 'Problem Statement', 'Proposed Solution', 'Evidence & Analysis', 'Risk Mitigation', and 'Conclusion'."
        },
        {
          "id": "psychology-601-l08-a2",
          "type": "practice",
          "title": "Capstone Defense Rubric",
          "content": "The official scoring rubric for the final defense, detailing how learners will be evaluated on clarity, evidence, handling of critiques, and overall defensibility."
        }
      ],
      "chunks": [
        {
          "id": "psychology-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this activity, learners will assemble a comprehensive defense brief. This brief will include well-supported claims, relevant evidence, an analysis of uncertainties, and proposed remediation pathways for potential failures. This exercise develops critical thinking and communication skills.",
          "visualPrompt": "A collaborative workspace where learners are adding evidence, charts, and text to a shared presentation, building their defense brief together."
        },
        {
          "id": "psychology-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "During this session, learners will practice responding to questions and feedback from a simulated expert panel. They will prepare for critiques related to technical methods, governance, and stakeholder impacts. This rehearsal is essential for building confidence and articulating their ideas effectively.",
          "visualPrompt": "A split-screen view showing a learner presenting on one side, and three 'expert' avatars on the other side, ready to ask challenging questions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "psychology-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Present your capstone recommendation to a simulated panel of experts. Defend your methodology, tradeoff analysis, and governance plan under adversarial cross-examination from technical, ethical, and leadership perspectives."
        }
      ]
    }
  ]
};
