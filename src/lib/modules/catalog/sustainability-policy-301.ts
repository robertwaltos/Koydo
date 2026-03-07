import type { LearningModule } from "@/lib/modules/types";

export const sustainability_policy_301_Module: LearningModule = {
  "id": "sustainability-policy-301",
  "title": "Sustainability Policy Systems and Governance",
  "description": "Level 301 curriculum in Sustainability Policy, focused on policy instrument design, transition economics, stakeholder governance, and long-term impact accountability through case-driven analysis, simulations, and assessment-backed mastery.",
  "subject": "Policy Studies",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "sustainability",
    "governance"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply policy instrument design with explicit assumptions and tradeoff framing",
    "Build repeatable workflows for transition economics under realistic constraints",
    "Evaluate stakeholder governance decisions with baseline and side-effect analysis",
    "Strengthen long-term impact accountability with transparent policies and escalation pathways",
    "Communicate evidence and uncertainty to mixed stakeholder groups",
    "Produce defensible recommendations that survive critical review"
  ],
  "lessons": [
    {
      "id": "sustainability-policy-301-l01",
      "title": "Sustainability Policy Core Foundations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "sustainability-policy-301-l01-a1",
          "type": "diagram",
          "title": "Core Concepts Map",
          "content": "A diagram showing the interconnectedness of policy instruments, transition economics, and stakeholder governance."
        }
      ],
      "chunks": [
        {
          "id": "sustainability-policy-301-l01-c1",
          "kind": "concept",
          "title": "Language, Scope, and Boundaries",
          "content": "Define key terminology, scope, and boundaries for sustainability policy. Understand the critical link between the design of policy instruments and the economics of transitioning to sustainable practices."
        },
        {
          "id": "sustainability-policy-301-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning Under Constraints",
          "content": "Learn to model cause-and-effect pathways under real-world constraints. This involves identifying critical assumptions and potential failure points to select the most effective policy interventions, while explicitly highlighting tradeoffs and methods for verification."
        },
        {
          "id": "sustainability-policy-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "Establish the standards for evidence used throughout this module. All claims must be supported by observable indicators, account for uncertainty bounds, and pass regular review checkpoints to ensure reliability."
        }
      ],
      "flashcards": [
        {
          "id": "sustainability-policy-301-l01-f1",
          "front": "Policy Instrument Design",
          "back": "A central decision axis in Sustainability Policy requiring explicit tradeoff treatment."
        },
        {
          "id": "sustainability-policy-301-l01-f2",
          "front": "Transition Economics",
          "back": "The reliability layer that determines whether plans survive real-world variability."
        },
        {
          "id": "sustainability-policy-301-l01-f3",
          "front": "Stakeholder Governance",
          "back": "The analytical process for assessing intervention quality and consequence spread."
        }
      ]
    },
    {
      "id": "sustainability-policy-301-l02",
      "title": "Sustainability Policy Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "sustainability-policy-301-l02-a1",
          "type": "flowchart",
          "title": "Workflow Template",
          "content": "A template of a policy workflow, showing decision points, control gates, and feedback loops."
        }
      ],
      "chunks": [
        {
          "id": "sustainability-policy-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will design and test a policy implementation workflow. Focus on analyzing system tradeoffs, integrating key metrics into governance structures, and testing your workflow's resilience against uncertainty."
        },
        {
          "id": "sustainability-policy-301-l02-c2",
          "kind": "recap",
          "title": "Readiness and Control Gates",
          "content": "Map out operational readiness by defining clear ownership for each process, establishing control gates to monitor progress, and implementing post-decision verification steps to ensure quality and accountability."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sustainability-policy-301-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match each control mechanism to its strongest expected system benefit.",
          "pairs": [
            {
              "left": "Pre-commit review gate",
              "right": "Reduces preventable defects"
            },
            {
              "left": "Rollback trigger",
              "right": "Limits blast radius during failures"
            },
            {
              "left": "Baseline dashboard",
              "right": "Supports defensible impact claims"
            },
            {
              "left": "Retrospective cycle",
              "right": "Improves future decision quality"
            }
          ]
        },
        {
          "id": "sustainability-policy-301-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Classification",
          "description": "Sort constraints into technical, policy, and stakeholder-impact buckets.",
          "buckets": [
            "Technical",
            "Policy",
            "Stakeholder Impact"
          ],
          "items": [
            {
              "text": "Service latency target",
              "bucket": "Technical"
            },
            {
              "text": "Compliance retention rule",
              "bucket": "Policy"
            },
            {
              "text": "Community trust risk",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Incident disclosure protocol",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "sustainability-policy-301-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "sustainability-policy-301-l03-a1",
          "type": "checklist",
          "title": "Concepts Review",
          "content": "A checklist of core concepts from Lessons 1 & 2: Policy Instruments, Transition Economics, Causal Reasoning, and Workflow Controls."
        }
      ],
      "questions": [
        {
          "id": "sustainability-policy-301-l03-q1",
          "text": "Which action most improves policy instrument design quality in practice?",
          "skillId": "sustainability-policy-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Skip explicit constraints and rely on intuition"
            },
            {
              "id": "b",
              "text": "Define assumptions, monitor indicators, and test failure cases"
            },
            {
              "id": "c",
              "text": "Treat all outcomes as equivalent"
            },
            {
              "id": "d",
              "text": "Ignore uncertainty and variance"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-quality decisions require explicit assumptions and measurable stress tests."
        },
        {
          "id": "sustainability-policy-301-l03-q2",
          "text": "At level 301, the strongest emphasis is on:",
          "skillId": "sustainability-policy-301-skill-level",
          "options": [
            {
              "id": "a",
              "text": "system tradeoff analysis, metrics and governance integration, and cross-team decision design"
            },
            {
              "id": "b",
              "text": "fast execution with no review loops"
            },
            {
              "id": "c",
              "text": "a single stakeholder perspective only"
            },
            {
              "id": "d",
              "text": "outcome claims without baselines"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 301 level is explicitly designed around system tradeoff analysis, metrics and governance integration, and cross-team decision design."
        },
        {
          "id": "sustainability-policy-301-l03-q3",
          "text": "What best strengthens transition economics reliability?",
          "skillId": "sustainability-policy-301-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "No ownership for incident response"
            },
            {
              "id": "b",
              "text": "Clear control points, owner mapping, and escalation thresholds"
            },
            {
              "id": "c",
              "text": "Ad-hoc changes without logs"
            },
            {
              "id": "d",
              "text": "No postmortem process"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability improves when control, ownership, and escalation are explicit and repeatable."
        }
      ]
    },
    {
      "id": "sustainability-policy-301-l04",
      "title": "Sustainability Policy Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "sustainability-policy-301-l04-a1",
          "type": "image",
          "title": "Case Study Context",
          "content": "An image of a city map overlaid with data layers representing carbon emissions, infrastructure, and demographic information."
        }
      ],
      "chunks": [
        {
          "id": "sustainability-policy-301-l04-c1",
          "kind": "example",
          "title": "Case Context and Stakes",
          "content": "Analyze a real-world case study: a city's decarbonization roadmap. Map the competing stakes of affordability, service reliability, and environmental targets. Identify both obvious and hidden risks in the proposed plan."
        },
        {
          "id": "sustainability-policy-301-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix Construction",
          "content": "Construct a tradeoff matrix to systematically compare different policy interventions. Evaluate options against criteria like effectiveness, reliability, equity, and implementation feasibility to make a defensible choice."
        },
        {
          "id": "sustainability-policy-301-l04-c3",
          "kind": "recap",
          "title": "Failure Lessons and Recovery",
          "content": "Analyze past policy failures to identify recurring patterns or 'failure signatures.' Convert these lessons into preventative safeguards, response playbooks, and enhanced monitoring protocols for future projects."
        }
      ],
      "flashcards": [
        {
          "id": "sustainability-policy-301-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured comparison of options under conflicting priorities."
        },
        {
          "id": "sustainability-policy-301-l04-f2",
          "front": "Failure Signature",
          "back": "A recurring observable pattern indicating a class of system risk."
        },
        {
          "id": "sustainability-policy-301-l04-f3",
          "front": "Recovery Playbook",
          "back": "A documented sequence for safe and timely response during adverse events."
        }
      ]
    },
    {
      "id": "sustainability-policy-301-l05",
      "title": "Sustainability Policy Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "sustainability-policy-301-l05-a1",
          "type": "dashboard",
          "title": "Simulation Interface",
          "content": "A mock-up of a simulation dashboard with sliders for uncertainty parameters and graphs for outcome metrics."
        }
      ],
      "chunks": [
        {
          "id": "sustainability-policy-301-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation Setup",
          "content": "Configure and run a policy simulation. Set parameters for different interventions, define uncertainty variables, and establish measurable success thresholds to test policy resilience and potential outcomes."
        },
        {
          "id": "sustainability-policy-301-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "Conduct a structured debrief after each simulation run. Analyze the results, including expected gains, unintended side effects, and compliance with governance standards, to refine your policy approach."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sustainability-policy-301-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare three intervention paths and justify which best advances policy instrument design and long-term impact accountability.",
          "instructions": [
            "Define objective and guardrails before selecting interventions.",
            "Record one near-term and one long-term tradeoff for each option.",
            "Select metrics that confirm or falsify your choice."
          ]
        },
        {
          "id": "sustainability-policy-301-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match each risk condition with the strongest mitigation response.",
          "pairs": [
            {
              "left": "Ambiguous ownership",
              "right": "Create explicit role and escalation map"
            },
            {
              "left": "Weak signal quality",
              "right": "Strengthen intake validation and quality checks"
            },
            {
              "left": "Policy drift",
              "right": "Re-anchor controls to documented standards"
            },
            {
              "left": "Stakeholder backlash",
              "right": "Increase transparency and two-way communication"
            }
          ]
        }
      ]
    },
    {
      "id": "sustainability-policy-301-l06",
      "title": "Checkpoint 2: Application and Analysis",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "sustainability-policy-301-l06-a1",
          "type": "case_study_brief",
          "title": "Case Study Review",
          "content": "A one-page summary of the decarbonization case study, highlighting the key tradeoffs and intervention options analyzed."
        }
      ],
      "questions": [
        {
          "id": "sustainability-policy-301-l06-q1",
          "text": "When constructing a tradeoff matrix for policy options, what is its primary purpose?",
          "skillId": "sustainability-policy-301-skill-analysis",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is universally superior"
            },
            {
              "id": "b",
              "text": "To systematically compare diverse interventions against a common set of critical criteria"
            },
            {
              "id": "c",
              "text": "To eliminate the need for stakeholder input"
            },
            {
              "id": "d",
              "text": "To focus only on the financial costs of each option"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is a tool for structured comparison across multiple, often conflicting, criteria like cost, equity, and effectiveness."
        },
        {
          "id": "sustainability-policy-301-l06-q2",
          "text": "What is the main benefit of defining uncertainty parameters in a policy simulation?",
          "skillId": "sustainability-policy-301-skill-simulation",
          "options": [
            {
              "id": "a",
              "text": "To guarantee a successful outcome"
            },
            {
              "id": "b",
              "text": "To make the model simpler to build"
            },
            {
              "id": "c",
              "text": "To test the policy's resilience and identify potential failure points under various conditions"
            },
            {
              "id": "d",
              "text": "To generate more data for the final report"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Simulations with uncertainty help stress-test a policy against real-world variability, revealing weaknesses before implementation."
        },
        {
          "id": "sustainability-policy-301-l06-q3",
          "text": "A 'failure signature' in policy analysis refers to:",
          "skillId": "sustainability-policy-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "A legally binding document admitting failure"
            },
            {
              "id": "b",
              "text": "The specific person responsible for a mistake"
            },
            {
              "id": "c",
              "text": "A recurring pattern of observable indicators that precedes a specific type of system failure"
            },
            {
              "id": "d",
              "text": "A one-time, unpredictable event"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Identifying failure signatures allows for the creation of proactive monitoring and preventative safeguards."
        }
      ]
    },
    {
      "id": "sustainability-policy-301-l07",
      "title": "Sustainability Policy Ethics and Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "sustainability-policy-301-l07-a1",
          "type": "diagram",
          "title": "Stakeholder Impact Map",
          "content": "A stakeholder map showing the distribution of benefits and burdens of a sample policy across different community groups."
        }
      ],
      "chunks": [
        {
          "id": "sustainability-policy-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "Map the distribution of policy impacts across all stakeholder groups. Analyze how benefits and burdens are allocated, paying close attention to equity and fairness, especially where outcomes are misaligned."
        },
        {
          "id": "sustainability-policy-301-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Design an accountability architecture for policy governance. Ensure all decisions are traceable, establish clear rights for review and appeal, and define standards for remediation when policies cause harm."
        },
        {
          "id": "sustainability-policy-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Use a final checklist to ensure responsible execution. Verify the integration of policy and ethics, the technical reliability of the implementation, and the level of stakeholder trust before deployment."
        }
      ],
      "flashcards": [
        {
          "id": "sustainability-policy-301-l07-f1",
          "front": "Impact Distribution",
          "back": "How benefits and harms are allocated across stakeholders."
        },
        {
          "id": "sustainability-policy-301-l07-f2",
          "front": "Decision Traceability",
          "back": "The ability to explain why a decision was made, by whom, and with what evidence."
        },
        {
          "id": "sustainability-policy-301-l07-f3",
          "front": "Responsible Execution",
          "back": "A delivery mode that combines effectiveness, fairness, and corrective capacity."
        }
      ]
    },
    {
      "id": "sustainability-policy-301-l08",
      "title": "Sustainability Policy Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "sustainability-policy-301-l08-a1",
          "type": "template",
          "title": "Capstone Charter",
          "content": "A downloadable Capstone Charter template with sections for Objective, Scope, Constraints, Metrics, and Governance."
        }
      ],
      "chunks": [
        {
          "id": "sustainability-policy-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter Drafting",
          "content": "Draft a formal charter for your capstone project. Define the project's scope, constraints, success metrics, and key governance checkpoints to guide your work and ensure a successful outcome."
        },
        {
          "id": "sustainability-policy-301-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "Prepare to defend your capstone proposal. Assemble the evidence supporting your chosen approach and develop a strategy for responding to critical feedback from technical, policy, and stakeholder perspectives."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sustainability-policy-301-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable objectives, risks, and remediation plans.",
          "instructions": [
            "State objective and boundary conditions.",
            "Define at least three measurable success indicators.",
            "Document a governance escalation pathway for critical failures."
          ]
        },
        {
          "id": "sustainability-policy-301-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone approach against technical, policy, and stakeholder critiques."
        }
      ]
    },
    {
      "id": "sustainability-policy-301-l09",
      "title": "Capstone Project: Submission & Peer Review",
      "type": "interactive",
      "duration": 20,
      "learningAids": [
        {
          "id": "sustainability-policy-301-l09-a1",
          "type": "rubric",
          "title": "Evaluation Rubric",
          "content": "The official rubric for grading the capstone project, covering analysis, justification, and communication."
        }
      ],
      "chunks": [
        {
          "id": "sustainability-policy-301-l09-c1",
          "kind": "practice",
          "title": "Final Report and Presentation",
          "content": "Finalize and submit your capstone project, including a detailed policy recommendation report and a summary presentation. Ensure your work meets all the criteria outlined in the project charter and evaluation rubric."
        },
        {
          "id": "sustainability-policy-301-l09-c2",
          "kind": "practice",
          "title": "Peer Review and Feedback",
          "content": "Engage in a structured peer review process. Evaluate the capstone projects of two other learners using the official rubric, providing constructive feedback on their analysis and recommendations. Integrate the feedback you receive to reflect on your own work."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sustainability-policy-301-l09-act1",
          "type": "document_upload",
          "title": "Capstone Project Submission",
          "description": "Upload your final capstone report and presentation slides."
        },
        {
          "id": "sustainability-policy-301-l09-act2",
          "type": "peer_review",
          "title": "Peer Evaluation",
          "description": "Review and provide structured feedback on two anonymized peer submissions based on the course rubric."
        }
      ]
    },
    {
      "id": "sustainability-policy-301-l10",
      "title": "Final Assessment",
      "type": "quiz",
      "duration": 15,
      "learningAids": [
        {
          "id": "sustainability-policy-301-l10-a1",
          "type": "summary_sheet",
          "title": "Module Key Concepts",
          "content": "A one-page summary of all key concepts, frameworks, and vocabulary from the module."
        }
      ],
      "questions": [
        {
          "id": "sustainability-policy-301-l10-q1",
          "text": "A policy has high technical reliability but creates significant burdens for a marginalized community. What core concept has been overlooked?",
          "skillId": "sustainability-policy-301-skill-ethics",
          "options": [
            {
              "id": "a",
              "text": "Transition economics"
            },
            {
              "id": "b",
              "text": "Responsible execution, which requires balancing effectiveness with fairness"
            },
            {
              "id": "c",
              "text": "Causal reasoning"
            },
            {
              "id": "d",
              "text": "A recovery playbook"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Responsible execution demands that policies are not only effective but also fair and equitable in their impact distribution."
        },
        {
          "id": "sustainability-policy-301-l10-q2",
          "text": "Decision traceability is a core component of accountability architecture because it:",
          "skillId": "sustainability-policy-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "guarantees the policy will be successful"
            },
            {
              "id": "b",
              "text": "automates the decision-making process"
            },
            {
              "id": "c",
              "text": "allows stakeholders to understand why a decision was made and on what evidence"
            },
            {
              "id": "d",
              "text": "eliminates the need for future reviews"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Traceability provides transparency, which is fundamental for holding decision-makers accountable for their choices."
        },
        {
          "id": "sustainability-policy-301-l10-q3",
          "text": "A key takeaway from this module is that effective sustainability governance primarily depends on:",
          "skillId": "sustainability-policy-301-skill-synthesis",
          "options": [
            {
              "id": "a",
              "text": "finding a single perfect technical solution"
            },
            {
              "id": "b",
              "text": "integrating system analysis, stakeholder equity, and transparent, repeatable processes"
            },
            {
              "id": "c",
              "text": "acting quickly without extensive analysis"
            },
            {
              "id": "d",
              "text": "prioritizing economic factors above all others"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The module emphasizes a holistic approach that combines technical analysis, ethical considerations, and robust governance structures."
        }
      ]
    }
  ]
};
