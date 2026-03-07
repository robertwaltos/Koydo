import type { LearningModule } from "@/lib/modules/types";

export const geography_601_Module: LearningModule = {
  "id": "geography-601",
  "title": "Geography Research and Leadership",
  "description": "A post-401 specialization in Geography, focused on systems diagnostics, operations design, impact and tradeoff analysis, and governance. Learning is driven by advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Geography",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "geography",
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
    "Apply advanced methods for geography systems diagnostics in high-constraint environments.",
    "Design robust systems for geography operations and execution with measurable control gates.",
    "Evaluate interventions and their tradeoffs with research-grade rigor.",
    "Operationalize geography governance with accountable oversight and clear escalation pathways.",
    "Lead cross-functional decision reviews with explicit communication of tradeoffs and uncertainties.",
    "Defend complex recommendations against expert critique using evidence and uncertainty bounds."
  ],
  "lessons": [
    {
      "id": "geography-601-l01",
      "title": "Advanced Foundations in Geographic Systems",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "geography-601-l01-a1",
          "type": "image",
          "title": "Core Method",
          "content": "A structured approach for advanced analysis: 1. Define system boundaries. 2. Model causal links and uncertainties. 3. Set clear evidence thresholds for all claims.",
          "visualPrompt": "A three-panel infographic illustrating the core method: a map with a boundary drawn, a causal loop diagram, and a dashboard with metrics and confidence intervals."
        }
      ],
      "chunks": [
        {
          "id": "geography-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "To analyze complex geographic systems, we must first define their scope and boundaries. This lesson introduces methods for diagnosing systemic issues, from ecological shifts to urban development challenges, by establishing clear analytical frameworks. This foundation is critical for designing effective operational plans.",
          "visualPrompt": "An animation showing a satellite map of a coastal city. A semi-transparent boundary box appears, focusing the view on the port area and its connected waterways, illustrating the concept of defining an analytical scope."
        },
        {
          "id": "geography-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Effective intervention requires understanding cause and effect. Here, you will learn to create causal maps that illustrate how different factors influence each other within a geographic system. We will also model ranges of uncertainty to prepare for robust planning and risk mitigation.",
          "visualPrompt": "A causal loop diagram showing the relationships between industrial output, water pollution, public health, and regulatory policy, with certain arrows dashed to represent uncertainty."
        },
        {
          "id": "geography-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds and Review Gates",
          "content": "All claims must be supported by measurable indicators. This section recaps the importance of setting evidence thresholds and establishing confidence bounds for your data. We will also introduce the concept of review checkpoints to validate findings and ensure conclusions are defensible.",
          "visualPrompt": "A flowchart of a research process, highlighting a 'Review Gate' where a checklist must be satisfied (e.g., 'Data meets 95% confidence level') before proceeding to the next stage."
        }
      ],
      "flashcards": [
        {
          "id": "geography-601-l01-f1",
          "front": "Geography Systems Diagnostics",
          "back": "The discipline of identifying and analyzing issues within a defined geographic system, requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "geography-601-l01-f2",
          "front": "Operations and Execution Design",
          "back": "The architecture of a plan, including processes, controls, and roles, that determines its reliability under stress."
        },
        {
          "id": "geography-601-l01-f3",
          "front": "Impact and Tradeoff Analysis",
          "back": "The evaluation discipline for identifying an intervention's true gains, hidden costs, and unintended consequences."
        }
      ]
    },
    {
      "id": "geography-601-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "geography-601-l02-a1",
          "type": "practice",
          "title": "Workflow Design Practice",
          "content": "Design a workflow for a given geographic challenge. Your design must include control gates, rollback criteria, and escalation triggers to ensure resilience.",
          "visualPrompt": "A drag-and-drop interface where learners build a workflow by connecting nodes like 'Data Collection,' 'Risk Analysis,' 'Decision Gate,' and 'Contingency Plan.'"
        }
      ],
      "chunks": [
        {
          "id": "geography-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Testing",
          "content": "In this interactive lab, you will design a specialized workflow for a specific geographic task, such as managing a regional water supply. We will then conduct a stress test by simulating challenging scenarios, like a sudden drought, to evaluate your design's resilience and identify points of failure.",
          "visualPrompt": "A visual of a workflow diagram. A 'stress test' alert appears, and certain pathways in the diagram turn red, indicating system failure, while a 'contingency' path activates and turns green."
        },
        {
          "id": "geography-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "This recap reviews the key components of a robust workflow architecture. We will focus on the integration of checkpoints, rollback criteria for reversing failed actions, and threshold-based escalation processes for when human intervention is required. Mastering this architecture is crucial for creating adaptable systems.",
          "visualPrompt": "A detailed schematic of a process flowchart, with icons representing checkpoints (magnifying glass), rollback loops (circular arrow), and escalation paths (upward arrow to a 'manager' icon)."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geography-601-l02-act1",
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
      "id": "geography-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "geography-601-l03-a1",
          "type": "practice",
          "title": "Knowledge Check",
          "content": "Review the core concepts of systems diagnostics and operational design before starting the quiz. Ensure you can define terms like 'control gate' and 'causal modeling'.",
          "visualPrompt": "A series of flashcards on screen, quickly cycling through key terms from the first two lessons."
        }
      ],
      "questions": [
        {
          "id": "geography-601-l03-q1",
          "text": "Which practice most improves the decision quality of geography systems diagnostics?",
          "skillId": "geography-601-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Proceeding without a baseline or assumptions"
            },
            {
              "id": "b",
              "text": "Defining assumptions, constraints, and measurable indicators"
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
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are made explicit, providing a clear and defensible foundation for analysis."
        },
        {
          "id": "geography-601-l03-q2",
          "text": "At an advanced level, strong execution design for geography operations requires:",
          "skillId": "geography-601-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Owner mapping, checkpoint cadence, and escalation thresholds"
            },
            {
              "id": "b",
              "text": "Ambiguous roles and ad-hoc process changes"
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
          "explanation": "Reliable advanced execution needs clear ownership, regular checkpoints, and threshold-driven governance to manage complexity and risk."
        },
        {
          "id": "geography-601-l03-q3",
          "text": "A defensible approach to impact and tradeoff analysis includes:",
          "skillId": "geography-601-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Anecdotes without a comparison group"
            },
            {
              "id": "b",
              "text": "Baseline comparisons, side-effect analysis, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Changing success criteria after seeing the outcomes"
            },
            {
              "id": "d",
              "text": "Excluding difficult-to-measure scenarios from the analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, a thorough check for side-effects, and transparent disclosure of uncertainty."
        },
        {
          "id": "geography-601-l03-q4",
          "text": "A mature governance system effectively connects:",
          "skillId": "geography-601-skill-governance",
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
              "text": "Targets without ownership or an escalation design"
            },
            {
              "id": "d",
              "text": "Operations without transparent accountability"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Governance maturity is the operational link between the intended policy, how it's measured and controlled, and what happens when it fails."
        }
      ]
    },
    {
      "id": "geography-601-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "geography-601-l04-a1",
          "type": "image",
          "title": "Tradeoff Analysis Matrix",
          "content": "Use a decision matrix to systematically compare case study options. Score each option against critical dimensions like cost, equity, and environmental impact to clarify tradeoffs.",
          "visualPrompt": "A table showing three different policy options as rows and criteria like 'Cost,' 'Safety,' and 'Equity' as columns, with cells filled with scores or ratings."
        }
      ],
      "chunks": [
        {
          "id": "geography-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture and Constraint Analysis",
          "content": "This lesson deconstructs complex case studies by framing them as scenarios with competing constraints. We will analyze how factors like budget, policy, and public opinion affect diagnostics and decision-making, forcing difficult but necessary tradeoffs.",
          "visualPrompt": "A mind map centered on a 'Dam Construction Project'. Branches point to competing constraints: 'Ecological Impact,' 'Budget Limits,' 'Energy Needs,' and 'Community Displacement.'"
        },
        {
          "id": "geography-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing and Comparison",
          "content": "In this practice, you will compare different strategic options for a given case study. You will evaluate them across multiple dimensions, including safety, reliability, cost, equity, and governance, to articulate the tradeoffs inherent in each choice.",
          "visualPrompt": "A spider chart comparing two options. Option A is high on 'Cost' but low on 'Equity,' while Option B is the opposite, visually representing the tradeoff."
        },
        {
          "id": "geography-601-l04-c3",
          "kind": "recap",
          "title": "The Decision Memo Pattern",
          "content": "We conclude by reviewing the structure of a professional decision memo. Every recommendation must be accompanied by its underlying assumptions, supporting evidence, proposed risk controls, and a viable fallback plan. This pattern ensures your decisions are well-reasoned and prepared for challenges.",
          "visualPrompt": "A document template for a decision memo, with clearly labeled sections: '1. Recommendation,' '2. Assumptions,' '3. Evidence,' '4. Risks & Mitigations,' '5. Fallback Plan.'"
        }
      ]
    },
    {
      "id": "geography-601-l05",
      "title": "Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "geography-601-l05-a1",
          "type": "practice",
          "title": "Simulation Pre-flight Checklist",
          "content": "Before starting the simulation, review your objectives. What are you trying to optimize? What are your non-negotiable constraints? A clear goal is key to effective performance.",
          "visualPrompt": "A simple checklist on screen: 'Primary Goal: [text field]', 'Key Constraint 1: [text field]', 'Key Constraint 2: [text field]'."
        }
      ],
      "chunks": [
        {
          "id": "geography-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Control",
          "content": "In this interactive clinic, you will manage a dynamic geographic scenario, such as a wildfire response. Your task is to operate a set of controls to balance performance metrics (e.g., acres saved) with governance constraints (e.g., budget limits, evacuation protocols). This hands-on experience connects theory to high-stakes decision-making.",
          "visualPrompt": "A simulated dashboard interface showing a map of a spreading wildfire, with control sliders for 'Resource Allocation' and 'Evacuation Radius,' and real-time graphs for 'Budget Spent' and 'Area Contained.'"
        },
        {
          "id": "geography-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "This recap explores how effective responses are adaptive. In the simulation, you may have needed to update control gates or change strategies as the situation evolved. We will discuss how to do this while maintaining traceability and accountability for your decisions, ensuring that adaptations are deliberate, not chaotic.",
          "visualPrompt": "An animation showing a decision tree. As a new event occurs, one branch is grayed out and a new, better-adapted branch is created, with a note indicating the reason for the change."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geography-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Manage a high-pressure geography scenario. Tune controls under uncertainty and respond to unexpected events to achieve the best possible outcome within established constraints."
        }
      ]
    },
    {
      "id": "geography-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "geography-601-l06-a1",
          "type": "practice",
          "title": "Knowledge Check",
          "content": "Review the decision memo pattern and the principles of adaptive response before starting the quiz. Be prepared to apply these concepts to scenario-based questions.",
          "visualPrompt": "An icon of a decision memo next to an icon of a dynamic flowchart, representing the key concepts from the previous two lessons."
        }
      ],
      "questions": [
        {
          "id": "geography-601-l06-q1",
          "text": "In advanced casework, the first requirement for a defensible recommendation is:",
          "skillId": "geography-601-skill-case1",
          "options": [
            {
              "id": "a",
              "text": "A preferred option without explicit assumptions"
            },
            {
              "id": "b",
              "text": "A clear baseline, explicit constraints, and defined success criteria"
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
          "explanation": "Defensible recommendations begin with an explicit framework: a baseline for comparison, defined constraints, and measurable targets for success."
        },
        {
          "id": "geography-601-l06-q2",
          "text": "A resilient strategy for geography operations should always include:",
          "skillId": "geography-601-skill-case2",
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
          "explanation": "Resilience in complex operations depends on planned checkpoints, fallback options for when things go wrong, and explicit criteria for escalating issues."
        },
        {
          "id": "geography-601-l06-q3",
          "text": "When evaluating tradeoffs in a case study, which method is most rigorous?",
          "skillId": "geography-601-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "Focusing on a single success story without controls"
            },
            {
              "id": "b",
              "text": "Using a decision matrix to compare options against shared criteria"
            },
            {
              "id": "c",
              "text": "An outcome-only narrative without process evidence"
            },
            {
              "id": "d",
              "text": "Choosing the option presented most persuasively"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A rigorous evaluation uses a structured method like a decision matrix to systematically compare options across the same set of important criteria."
        },
        {
          "id": "geography-601-l06-q4",
          "text": "In a live simulation, an 'adaptive response' means:",
          "skillId": "geography-601-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "Sticking to the original plan no matter what"
            },
            {
              "id": "b",
              "text": "Making random changes when under pressure"
            },
            {
              "id": "c",
              "text": "Updating controls and strategy based on new data, with clear rationale"
            },
            {
              "id": "d",
              "text": "Pausing the simulation to wait for perfect information"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Adaptive response is the disciplined practice of adjusting your strategy based on new information, while ensuring the changes are traceable and justified."
        }
      ]
    },
    {
      "id": "geography-601-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "geography-601-l07-a1",
          "type": "image",
          "title": "Accountability Flowchart",
          "content": "Trace the flow of accountability: from the initial decision and its evidence, through implementation and monitoring, to a review board and potential remediation actions.",
          "visualPrompt": "A top-to-bottom flowchart starting with 'Decision & Rationale,' leading to 'Implementation,' then splitting to 'Monitoring' and 'Public Reporting,' and finally converging at 'Review & Remediation.'"
        }
      ],
      "chunks": [
        {
          "id": "geography-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Geographic decisions rarely affect everyone equally. This lesson teaches you to map how benefits, burdens, and delayed effects are distributed among different stakeholder groups. Understanding this distribution is a cornerstone of equitable and responsible governance, as it highlights the true social and ethical impact of a project.",
          "visualPrompt": "A map of a region with a proposed new highway. Overlays show different colors for areas experiencing benefits (e.g., reduced commute times) and burdens (e.g., noise pollution, displacement), illustrating the uneven distribution of impacts."
        },
        {
          "id": "geography-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Good governance requires a clear architecture of accountability. We will examine the essential components: traceability for every major decision, stakeholder rights for review and appeal, and leadership obligations for remediation when outcomes are negative. These elements build public trust and ensure integrity.",
          "visualPrompt": "A diagram resembling a blueprint, labeled 'Accountability Architecture.' It shows interconnected pillars for 'Traceability (Audit Logs),' 'Review (Oversight Committee),' and 'Remediation (Contingency Funds).'"
        },
        {
          "id": "geography-601-l07-c3",
          "kind": "recap",
          "title": "The Responsible Leadership Checklist",
          "content": "We conclude with a practical tool: a responsible leadership checklist. This checklist integrates key criteria for ethical decision-making, connecting performance outcomes, stakeholder equity, policy adherence, and system resilience. It serves as a final check to ensure decisions are not just effective, but also responsible.",
          "visualPrompt": "A stylized checklist document with key headings: 'Equity & Impact,' 'Transparency,' 'Accountability,' and 'Resilience.' Each heading has several sub-points for evaluation."
        }
      ],
      "flashcards": [
        {
          "id": "geography-601-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how outcomes (benefits, costs, risks) are allocated across different populations and timescales."
        },
        {
          "id": "geography-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable and unbroken record of evidence, ownership, and rationale behind a decision."
        },
        {
          "id": "geography-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making approach that balances performance goals with accountability, ethical considerations, and public trust."
        }
      ]
    },
    {
      "id": "geography-601-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "geography-601-l08-a1",
          "type": "practice",
          "title": "Defense Preparation",
          "content": "Structure your defense brief using the provided template. Focus on anticipating critiques related to your assumptions, data uncertainty, and stakeholder impacts.",
          "visualPrompt": "A presentation slide template with prompts: 'Core Recommendation,' 'Key Evidence,' 'Primary Risk & Mitigation,' 'Anticipated Question 1.'"
        }
      ],
      "chunks": [
        {
          "id": "geography-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this collaborative lab, you will assemble a comprehensive defense brief for a complex geographic recommendation. Your brief must integrate a well-supported claim, primary evidence, a transparent account of uncertainties, and proposed remediation pathways for potential negative outcomes.",
          "visualPrompt": "An animation showing different documents (maps, charts, reports) being dragged and dropped into a final, polished presentation slide, symbolizing the assembly of the brief."
        },
        {
          "id": "geography-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "This session is a rehearsal for your final defense. You will practice responding to challenging questions and critiques from a simulated expert panel. Prepare to defend your technical methods, governance structure, and stakeholder impact analysis under pressure, honing your ability to communicate with clarity and confidence.",
          "visualPrompt": "A simulated video call interface with three windows for 'Expert Panelists.' Text bubbles appear with challenging questions like 'How do you account for the uncertainty in your climate model?'"
        }
      ],
      "interactiveActivities": [
        {
          "id": "geography-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Present and defend your capstone recommendation against adversarial cross-examination from a simulated panel of experts."
        }
      ]
    }
  ]
};
