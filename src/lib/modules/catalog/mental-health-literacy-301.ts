import type { LearningModule } from "@/lib/modules/types";

export const mental_health_literacy_301_Module: LearningModule = {
  "id": "mental-health-literacy-301",
  "title": "Mental Health Literacy: Systems and Governance",
  "description": "An advanced curriculum on Mental Health Literacy, focusing on foundational models, early risk recognition, support pathway design, and ethical governance. Learning is driven by case analysis, simulation, and checkpoint-based mastery.",
  "subject": "Psychology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mental-health",
    "wellbeing",
    "systems-thinking"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Explain and apply mental health foundations under practical constraints.",
    "Build repeatable workflows for early risk signal recognition with measurable controls.",
    "Evaluate interventions in support pathway design using comparative evidence.",
    "Operationalize ethical and systems governance with transparent feedback loops.",
    "Communicate uncertainty, risk, and tradeoffs clearly to mixed stakeholders.",
    "Defend decisions through evidence-backed reasoning and post-implementation review."
  ],
  "lessons": [
    {
      "id": "mental-health-literacy-301-l01",
      "title": "Core Models and Reasoning",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "mental-health-literacy-301-l01-a1",
          "type": "diagram",
          "title": "Core Models Framework",
          "content": "A visual representation of the relationship between mental health foundations, risk signals, support pathways, and governance."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-301-l01-c1",
          "kind": "concept",
          "title": "Scope and Vocabulary",
          "content": "Establishes a common language for discussing Mental Health Literacy. This section defines key terms, clarifies the boundaries of mental health systems, and introduces the concept of a mental health continuum to create a shared foundation for the module.",
          "visualPrompts": [
            "Animated infographic defining key terms like 'stigma,' 'resilience,' and 'continuum of care'.",
            "A diagram illustrating the scope of the module, from individual wellbeing to systemic governance."
          ]
        },
        {
          "id": "mental-health-literacy-301-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning",
          "content": "Introduces methods for analyzing the complex relationships between different factors affecting mental health. Learners will map cause-and-effect chains, identify underlying assumptions, and recognize system limitations to inform the design of effective interventions.",
          "visualPrompts": [
            "A dynamic causal loop diagram showing interconnected factors like social support, academic stress, and coping mechanisms.",
            "An example of a 'fishbone' diagram tracing a mental health outcome back to its root causes."
          ]
        },
        {
          "id": "mental-health-literacy-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "This recap emphasizes the importance of grounding claims in solid evidence. It covers the use of measurable indicators to express confidence levels in conclusions and the role of regular checkpoints to ensure findings remain valid and reliable over time.",
          "visualPrompts": [
            "A dashboard graphic showing how key performance indicators (KPIs) are tracked against a baseline.",
            "A flowchart illustrating a review cycle with scheduled checkpoints for data validation."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "mental-health-literacy-301-l01-f1",
          "front": "Mental Health Foundations",
          "back": "A core decision lens in Mental Health Literacy requiring explicit control over assumptions and constraints."
        },
        {
          "id": "mental-health-literacy-301-l01-f2",
          "front": "Early Risk Signal Recognition",
          "back": "A system of processes and controls that determines the reliability and repeatability of identifying potential issues."
        },
        {
          "id": "mental-health-literacy-301-l01-f3",
          "front": "Support Pathway Design",
          "back": "An evaluation process for distinguishing meaningful, evidence-based improvements from superficial wins."
        }
      ]
    },
    {
      "id": "mental-health-literacy-301-l02",
      "title": "Workflow and Controls Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "mental-health-literacy-301-l02-a1",
          "type": "worksheet",
          "title": "Workflow Design Template",
          "content": "A structured template for mapping owners, control gates, and measurable outcomes for a mental health initiative."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Build",
          "content": "In this hands-on activity, learners design a practical workflow for a mental health initiative. This involves mapping role responsibilities, establishing control gates for quality assurance, and defining clear, measurable outcomes to track success.",
          "visualPrompts": [
            "An interactive drag-and-drop interface for building a process flowchart.",
            "Tooltips explaining the purpose of different workflow elements like 'decision point' or 'review gate'."
          ]
        },
        {
          "id": "mental-health-literacy-301-l02-c2",
          "kind": "recap",
          "title": "Readiness and Rollback",
          "content": "This recap focuses on system resilience. Learners explore methods for stress-testing a workflow, identifying potential failure scenarios, and establishing clear thresholds for when to pause, revert, or escalate, ensuring systems can adapt safely to challenges.",
          "visualPrompts": [
            "A diagram showing a 'decision tree' for when to trigger a rollback based on monitoring data.",
            "An animation simulating a system failure and the automated activation of a contingency plan."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "mental-health-literacy-301-l02-act1",
          "type": "matching_pairs",
          "title": "Control Mapping",
          "description": "Match each control to its strongest reliability or governance effect.",
          "pairs": [
            {
              "left": "Pre-commit review",
              "right": "Prevents avoidable defects"
            },
            {
              "left": "Rollback trigger",
              "right": "Contains impact during failures"
            },
            {
              "left": "Baseline monitor",
              "right": "Supports defensible outcome claims"
            },
            {
              "left": "Retrospective cycle",
              "right": "Improves future decisions"
            }
          ]
        }
      ]
    },
    {
      "id": "mental-health-literacy-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "mental-health-literacy-301-l03-a1",
          "type": "checklist",
          "title": "Concept Review Checklist",
          "content": "A checklist summarizing key concepts from Lessons 1 and 2 to prepare for the checkpoint."
        }
      ],
      "questions": [
        {
          "id": "mental-health-literacy-301-l03-q1",
          "text": "Which practice most improves decision quality in mental health foundations?",
          "skillId": "mental-health-literacy-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Relying on implicit assumptions and no baseline"
            },
            {
              "id": "b",
              "text": "Defining assumptions, constraints, and measurable indicators"
            },
            {
              "id": "c",
              "text": "Prioritizing speed over evidence in all cases"
            },
            {
              "id": "d",
              "text": "Ignoring uncertainty and edge cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decision quality improves when assumptions, constraints, and measurement are explicit and transparent."
        },
        {
          "id": "mental-health-literacy-301-l03-q2",
          "text": "At level 301, high-quality execution in early risk signal recognition should include:",
          "skillId": "mental-health-literacy-301-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Owner mapping, checkpoints, and escalation thresholds"
            },
            {
              "id": "b",
              "text": "Ambiguous roles and ad-hoc decisions"
            },
            {
              "id": "c",
              "text": "No post-implementation review"
            },
            {
              "id": "d",
              "text": "Untracked process changes"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable execution requires clear ownership, defined control points, and pre-set thresholds for action."
        },
        {
          "id": "mental-health-literacy-301-l03-q3",
          "text": "A defensible approach to support pathway design requires:",
          "skillId": "mental-health-literacy-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Anecdotal wins without comparison"
            },
            {
              "id": "b",
              "text": "Baseline comparison and side-effect analysis"
            },
            {
              "id": "c",
              "text": "Changing criteria after seeing results"
            },
            {
              "id": "d",
              "text": "Ignoring difficult or outlier cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible conclusions require comparison against a baseline and a thorough analysis of unintended consequences."
        },
        {
          "id": "mental-health-literacy-301-l03-q4",
          "text": "Mature ethical and systems governance connects:",
          "skillId": "mental-health-literacy-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy intent, measurable controls, and remediation pathways"
            },
            {
              "id": "b",
              "text": "Policy statements without accountability"
            },
            {
              "id": "c",
              "text": "Performance targets with no risk controls"
            },
            {
              "id": "d",
              "text": "Governance with no transparency"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Effective governance links the 'why' (policy intent) to the 'how' (measurable controls) and the 'what if' (remediation pathways)."
        }
      ]
    },
    {
      "id": "mental-health-literacy-301-l04",
      "title": "Case Analysis: A School-Community Network",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "mental-health-literacy-301-l04-a1",
          "type": "document",
          "title": "Case Study Dossier",
          "content": "Detailed background, stakeholder profiles, and system constraints for the school-community network case."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-301-l04-c1",
          "kind": "example",
          "title": "Case Context",
          "content": "This case study examines a school-community network creating early support pathways for students. Learners will analyze the competing objectives of ensuring student safety, dignity, and confidentiality, and identify the systemic risks involved.",
          "visualPrompts": [
            "A stakeholder map showing the school, parents, community health providers, and students with their respective interests.",
            "A list of competing goals (e.g., 'Maximize early detection' vs. 'Minimize false positives and stigma')."
          ]
        },
        {
          "id": "mental-health-literacy-301-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "Introduces a tradeoff matrix as a tool for structured decision-making. Different intervention options are scored against criteria like effectiveness, feasibility, risk, and stakeholder impact, enabling a clear, evidence-based comparison.",
          "visualPrompts": [
            "An animated table being populated with scores for different intervention options.",
            "Color-coding (e.g., red, yellow, green) to highlight high-risk vs. high-reward options in the matrix."
          ]
        },
        {
          "id": "mental-health-literacy-301-l04-c3",
          "kind": "recap",
          "title": "Recovery Design",
          "content": "This recap explores how to transform failure patterns into proactive safeguards. By analyzing past incidents, learners will develop response playbooks—predefined action plans—to ensure resilient systems and safe, timely recovery from adverse events.",
          "visualPrompts": [
            "A flowchart showing how a 'failure pattern' (e.g., recurring data privacy breach) leads to the creation of a 'response playbook'.",
            "An example of a concise, actionable playbook for a specific crisis scenario."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "mental-health-literacy-301-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured method to compare options by evaluating them against a common set of competing priorities."
        },
        {
          "id": "mental-health-literacy-301-l04-f2",
          "front": "Failure Pattern",
          "back": "A recurring signal or type of error that indicates a predictable, systemic risk mode."
        },
        {
          "id": "mental-health-literacy-301-l04-f3",
          "front": "Response Playbook",
          "back": "A predefined, step-by-step action pathway designed for safe and timely recovery from a known failure pattern."
        }
      ]
    },
    {
      "id": "mental-health-literacy-301-l05",
      "title": "Simulation Studio: Intervention Decisions",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "mental-health-literacy-301-l05-a1",
          "type": "simulation",
          "title": "Simulation Environment Guide",
          "content": "A user guide explaining the variables, controls, and objectives within the interactive simulation."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-301-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "In this interactive simulation, learners execute intervention scenarios under conditions of uncertainty. They will compare the outcomes of different choices, providing practical experience in navigating the complexities of real-world mental health systems.",
          "visualPrompts": [
            "A dashboard interface where learners can adjust variables (e.g., budget, staffing) and see the projected impact on outcomes.",
            "Pop-up events that introduce unexpected challenges, forcing learners to adapt their strategy."
          ]
        },
        {
          "id": "mental-health-literacy-301-l05-c2",
          "kind": "recap",
          "title": "Debrief and Review",
          "content": "Following the simulation, each run is evaluated based on goal achievement, unintended side effects, and compliance with governance standards. This structured debrief reinforces accountability and the practice of continuous improvement.",
          "visualPrompts": [
            "A summary screen comparing the learner's results against predefined success metrics and ethical constraints.",
            "A guided reflection prompt asking learners to identify one key learning and how they would approach the scenario differently next time."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "mental-health-literacy-301-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare intervention paths for mental health foundations and ethical and systems governance.",
          "instructions": [
            "Define your primary objective and operational constraints before selecting an intervention.",
            "Document the near-term and long-term tradeoffs of your chosen path.",
            "Specify the key metrics that will validate the success of your intervention."
          ]
        }
      ]
    },
    {
      "id": "mental-health-literacy-301-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "mental-health-literacy-301-l06-a1",
          "type": "checklist",
          "title": "Systems Decision Checklist",
          "content": "A checklist summarizing key concepts from Lessons 4 and 5 to prepare for the checkpoint."
        }
      ],
      "questions": [
        {
          "id": "mental-health-literacy-301-l06-q1",
          "text": "In case analysis, what is the primary function of a tradeoff matrix?",
          "skillId": "mental-health-literacy-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is universally superior"
            },
            {
              "id": "b",
              "text": "To make complex decisions transparent and defensible by comparing options against shared criteria"
            },
            {
              "id": "c",
              "text": "To eliminate the need for stakeholder consultation"
            },
            {
              "id": "d",
              "text": "To focus only on the financial cost of each option"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured, transparent way to evaluate multiple options based on competing priorities, making the final decision easier to defend."
        },
        {
          "id": "mental-health-literacy-301-l06-q2",
          "text": "How does identifying a 'failure pattern' contribute to building a more resilient system?",
          "skillId": "mental-health-literacy-301-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "It allows you to assign blame for a specific incident more easily."
            },
            {
              "id": "b",
              "text": "It proves that the system is fundamentally flawed and must be replaced."
            },
            {
              "id": "c",
              "text": "It shifts focus from isolated incidents to predictable risks, enabling the design of proactive safeguards and response playbooks."
            },
            {
              "id": "d",
              "text": "It guarantees that no future failures will ever occur."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Recognizing a pattern allows you to address the systemic root cause and prepare for future occurrences, rather than just reacting to individual events."
        },
        {
          "id": "mental-health-literacy-301-l06-q3",
          "text": "A key component of a simulation debrief is evaluating 'unintended side effects'. Why is this important?",
          "skillId": "mental-health-literacy-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To ensure that an intervention that looks successful on one metric isn't causing harm in other areas."
            },
            {
              "id": "b",
              "text": "To focus only on positive outcomes."
            },
            {
              "id": "c",
              "text": "To prove that the simulation was unrealistic."
            },
            {
              "id": "d",
              "text": "To calculate the final score of the simulation."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Analyzing side effects is crucial for a holistic evaluation, preventing systems from optimizing for one goal at the expense of others (e.g., increasing service use while also increasing stigma)."
        },
        {
          "id": "mental-health-literacy-301-l06-q4",
          "text": "When communicating a decision to mixed stakeholders, what is the most effective approach?",
          "skillId": "mental-health-literacy-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Presenting only the data that supports your chosen path."
            },
            {
              "id": "b",
              "text": "Using technical jargon to demonstrate expertise."
            },
            {
              "id": "c",
              "text": "Clearly articulating the decision, the evidence, the acknowledged tradeoffs, and the plan for monitoring risks."
            },
            {
              "id": "d",
              "text": "Avoiding any mention of uncertainty or potential risks to maintain confidence."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Effective communication builds trust through transparency. This includes acknowledging risks and tradeoffs, not just highlighting the positives."
        }
      ]
    },
    {
      "id": "mental-health-literacy-301-l07",
      "title": "Governance and Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "mental-health-literacy-301-l07-a1",
          "type": "diagram",
          "title": "Accountability Architecture Model",
          "content": "A flowchart illustrating the flow of decision-making, review rights, and remediation pathways in a transparent governance system."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact",
          "content": "Explores how the benefits and burdens of mental health initiatives are distributed across different groups. By mapping these impacts, learners can analyze issues of equity and ensure that decision-making processes are inclusive and fair.",
          "visualPrompts": [
            "A stakeholder impact map showing how a single policy decision affects students, teachers, and parents differently.",
            "A split-screen graphic comparing the 'intended benefits' with the 'unintended burdens' of an initiative."
          ]
        },
        {
          "id": "mental-health-literacy-301-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Defines the structures that ensure transparency and trust. This includes decision traceability, the right to review and appeal, and the obligation to remediate harm. This framework is essential for ethical and responsible mental health governance.",
          "visualPrompts": [
            "An animated flowchart of an 'accountability loop,' from decision to impact monitoring to review and adjustment.",
            "An infographic outlining the key components: transparency, redress, and oversight."
          ]
        },
        {
          "id": "mental-health-literacy-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution",
          "content": "This recap synthesizes the module's governance principles into a final checklist. This tool guides learners in evaluating performance, managing risk, and upholding ethical standards, ensuring that execution is not just effective but also responsible.",
          "visualPrompts": [
            "A visual of a pre-launch checklist with items for 'Performance,' 'Risk,' and 'Ethics' being ticked off.",
            "A summary graphic connecting policy intent, measurable controls, and accountability loops into a single model."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "mental-health-literacy-301-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how outcomes (both positive and negative) are allocated across different people, systems, and timeframes."
        },
        {
          "id": "mental-health-literacy-301-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record that explains the evidence, ownership, and rationale behind a decision."
        },
        {
          "id": "mental-health-literacy-301-l07-f3",
          "front": "Responsible Execution",
          "back": "A mode of delivery that integrates effectiveness with accountability, fairness, and ethical oversight."
        }
      ]
    },
    {
      "id": "mental-health-literacy-301-l08",
      "title": "Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "mental-health-literacy-301-l08-a1",
          "type": "template",
          "title": "Capstone Charter Template",
          "content": "A fillable document for defining project objectives, constraints, metrics, and governance triggers."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "In this collaborative activity, learners draft a Capstone Charter for a proposed mental health initiative. This involves defining clear objectives, identifying constraints, setting success metrics, and establishing governance triggers for oversight and intervention.",
          "visualPrompts": [
            "An interactive web form that guides learners through each section of the charter.",
            "Examples of well-defined vs. poorly-defined objectives and metrics."
          ]
        },
        {
          "id": "mental-health-literacy-301-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "This recap prepares learners to defend their capstone proposals. It emphasizes the importance of articulating the rationale behind their decisions, aligning their plan with technical and ethical standards, and anticipating critical questions.",
          "visualPrompts": [
            "A checklist for 'Defense Readiness,' including items like 'Evidence for claims,' 'Risk assessment,' and 'Stakeholder analysis'.",
            "Short video clips of example questions and strong, evidence-based answers."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "mental-health-literacy-301-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable outcomes and remediation pathways.",
          "instructions": [
            "Define a clear objective and its operating boundaries.",
            "List at least three measurable success indicators (KPIs).",
            "Define specific criteria for escalation and corrective action."
          ]
        }
      ]
    },
    {
      "id": "mental-health-literacy-301-l09",
      "title": "Capstone Defense and Review",
      "type": "project",
      "duration": 20,
      "learningAids": [
        {
          "id": "mental-health-literacy-301-l09-a1",
          "type": "rubric",
          "title": "Capstone Evaluation Rubric",
          "content": "A detailed rubric outlining the criteria for evaluating the capstone charter, including clarity, feasibility, evidence-based reasoning, and governance design."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-301-l09-c1",
          "kind": "practice",
          "title": "Project Presentation and Defense",
          "content": "Learners present their Capstone Charter to peers and instructors. They must defend their proposed initiative by explaining their reasoning, justifying their chosen metrics and controls, and responding to critical feedback and questions.",
          "visualPrompts": [
            "A presentation template slide deck for learners to use.",
            "A timer on screen to help manage presentation length."
          ]
        },
        {
          "id": "mental-health-literacy-301-l09-c2",
          "kind": "recap",
          "title": "Peer Review and Continuous Improvement",
          "content": "This final recap emphasizes that project design is an iterative process. Learners engage in structured peer feedback to identify strengths and areas for improvement in each other's work, reinforcing the principle of continuous learning and system refinement.",
          "visualPrompts": [
            "A structured feedback form (e.g., 'I like...', 'I wonder...', 'What if...') to guide peer review.",
            "A closing graphic summarizing the entire module's learning journey from core concepts to applied governance."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "mental-health-literacy-301-l09-f1",
          "front": "Capstone Defense",
          "back": "The process of presenting and justifying a project proposal using evidence-based reasoning and transparent tradeoff analysis."
        },
        {
          "id": "mental-health-literacy-301-l09-f2",
          "front": "Peer Feedback",
          "back": "A structured process where learners provide constructive criticism to help refine and improve each other's work."
        },
        {
          "id": "mental-health-literacy-301-l09-f3",
          "front": "Iterative Improvement",
          "back": "A cyclical process of planning, executing, reviewing, and refining a system to achieve continuous improvement over time."
        }
      ]
    }
  ]
};
