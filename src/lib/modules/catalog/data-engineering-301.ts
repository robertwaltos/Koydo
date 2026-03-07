import type { LearningModule } from "@/lib/modules/types";

export const data_engineering_301_Module: LearningModule = {
  "id": "data-engineering-301",
  "title": "Data Engineering Systems and Governance",
  "description": "Level 301 curriculum in Data Engineering, focused on pipeline architecture, data quality contracts, orchestration reliability, and cost-performance tuning, with rigorous scenario analysis and assessment-backed mastery.",
  "subject": "Data Engineering",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "data",
    "systems"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Explain and apply pipeline architecture using clear assumptions and constraints",
    "Build repeatable workflows for data quality contracts with measurable checkpoints",
    "Evaluate orchestration reliability outcomes against baseline and target metrics",
    "Use governance patterns to improve cost-performance tuning decision quality",
    "Communicate tradeoffs across technical, policy, and user-impact dimensions",
    "Synthesize Data Engineering methods into defensible recommendations"
  ],
  "lessons": [
    {
      "id": "data-engineering-301-l01",
      "title": "Data Engineering Core Concepts",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "A glowing digital blueprint of a complex data pipeline, featuring interconnected nodes and glowing data streams in a sleek, dark-mode futuristic style. Imagen 4.",
      "conceptVideoPrompt": "A cinematic 3D animation showing luminous data packets flowing smoothly through a structured, glowing pipeline with visible checkpoints and validation gates. Veo 3.1.",
      "learningAids": [
        {
          "id": "data-engineering-301-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-301-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "In this lesson, we will create a common vocabulary for Data Engineering. This means we will define important terms and concepts that everyone can understand. We will also discuss the boundaries of our systems, which helps us know exactly where our data pipelines start and end. Additionally, we will explore how pipeline architecture interacts with data quality contracts in real-world situations, ensuring that we can effectively manage and maintain our data systems."
        },
        {
          "id": "data-engineering-301-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "In this part of the lesson, learners will practice modeling causal paths. This means learning how to identify the relationships between different events and outcomes in a data ecosystem. We will also uncover hidden assumptions that might affect system reliability. Before suggesting any changes or interventions, you will apply checks for constraints, ensuring that your architectural ideas are realistic, scalable, and feasible."
        },
        {
          "id": "data-engineering-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This module introduces a workflow that prioritizes evidence. In this approach, every claim made about system performance is connected to observable indicators—pieces of information we can actually see or measure. Additionally, we will discuss the expected uncertainty related to these claims, helping you understand that not everything can be known for sure. This evidence-first mindset is crucial for making informed decisions in data engineering."
        }
      ],
      "flashcards": [
        {
          "id": "data-engineering-301-l01-f1",
          "front": "Pipeline Architecture",
          "back": "A core mechanism in Data Engineering requiring explicit assumptions and measurable controls."
        },
        {
          "id": "data-engineering-301-l01-f2",
          "front": "Data Quality Contracts",
          "back": "Operational practices that convert strategy into reliable execution by defining expectations between data producers and consumers."
        },
        {
          "id": "data-engineering-301-l01-f3",
          "front": "Orchestration Reliability",
          "back": "The evaluation layer that determines whether interventions truly improve outcomes and keep workflows running smoothly."
        }
      ],
      "imageUrl": "/generated-images/refinery/data-engineering-301-l01.png"
    },
    {
      "id": "data-engineering-301-l02",
      "title": "Data Engineering Methods Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "A futuristic laboratory desk with holographic data charts, floating metrics, and glowing interconnected blocks representing pipeline methods. Imagen 4.",
      "conceptVideoPrompt": "A time-lapse style animation of a data engineer assembling modular pipeline blocks that light up and pulse with energy when correctly connected. Veo 3.1.",
      "learningAids": [
        {
          "id": "data-engineering-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-301-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this interactive lab, you will construct a sequence of methods optimized for various system trade-offs. This means considering how different choices affect metrics architecture and governance decisions. After building your method sequence, you will stress-test each step to see how it performs under uncertain conditions, helping you understand the critical importance of resilience in data engineering."
        },
        {
          "id": "data-engineering-301-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "In this recap, we will assess the readiness of our systems through various checks. This includes mapping out who owns different parts of the system, establishing a schedule for regular checkpoints, identifying triggers for rolling back changes if necessary, and maintaining evidence logs. These practices ensure that our systems are prepared for operation and can adapt to changes effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-engineering-301-l02-act1",
          "type": "matching_pairs",
          "title": "Method-to-Outcome Mapping",
          "description": "Match each design choice to the strongest expected system effect.",
          "pairs": [
            {
              "left": "Pre-release stress tests",
              "right": "Lower severe failure probability"
            },
            {
              "left": "Checkpoint gating",
              "right": "Prevents defect propagation"
            },
            {
              "left": "Baseline comparison",
              "right": "Supports defensible impact claims"
            },
            {
              "left": "Retrospective review",
              "right": "Improves next-iteration decisions"
            }
          ]
        },
        {
          "id": "data-engineering-301-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Sorting",
          "description": "Sort constraints into technical, policy, and user-impact categories.",
          "buckets": [
            "Technical",
            "Policy",
            "User Impact"
          ],
          "items": [
            {
              "text": "Latency budget",
              "bucket": "Technical"
            },
            {
              "text": "Audit retention requirement",
              "bucket": "Policy"
            },
            {
              "text": "Accessibility burden",
              "bucket": "User Impact"
            },
            {
              "text": "Human review threshold",
              "bucket": "Policy"
            }
          ]
        }
      ],
      "imageUrl": "/generated-images/refinery/data-engineering-301-l02.png"
    },
    {
      "id": "data-engineering-301-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A sleek digital lock and key glowing in neon blue, representing core methods, security, and successful knowledge checkpoints. Imagen 4.",
      "conceptVideoPrompt": "A dynamic visual of a digital checklist being completed on a glowing glass screen, with green checkmarks appearing one by one, symbolizing a successful checkpoint. Veo 3.1.",
      "learningAids": [
        {
          "id": "data-engineering-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "data-engineering-301-l03-q1",
          "text": "Which practice most strengthens pipeline architecture in real deployments?",
          "skillId": "data-engineering-301-skill-risk",
          "options": [
            {
              "id": "a",
              "text": "Use assumptions without documenting them"
            },
            {
              "id": "b",
              "text": "Define failure criteria and monitor leading indicators"
            },
            {
              "id": "c",
              "text": "Evaluate outcomes only once per year"
            },
            {
              "id": "d",
              "text": "Avoid stress-testing edge cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit failure criteria and leading indicators improve early detection and response."
        },
        {
          "id": "data-engineering-301-l03-q2",
          "text": "At level 301, Data Engineering work should prioritize:",
          "skillId": "data-engineering-301-skill-level",
          "options": [
            {
              "id": "a",
              "text": "System tradeoffs, metrics architecture, and governance decisions"
            },
            {
              "id": "b",
              "text": "Speed over traceability in all cases"
            },
            {
              "id": "c",
              "text": "No validation loops after release"
            },
            {
              "id": "d",
              "text": "Single-metric optimization without context"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 301 sequence is designed around system tradeoffs, metrics architecture, and governance decisions."
        },
        {
          "id": "data-engineering-301-l03-q3",
          "text": "What is the strongest indicator of healthy data quality contracts?",
          "skillId": "data-engineering-301-skill-ops",
          "options": [
            {
              "id": "a",
              "text": "Untracked interventions and ad-hoc approvals"
            },
            {
              "id": "b",
              "text": "Clear owner mapping, review cadence, and measurable thresholds"
            },
            {
              "id": "c",
              "text": "Skipping post-incident analysis"
            },
            {
              "id": "d",
              "text": "Changing targets after observing results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Stable systems require clear ownership, decision cadence, and measurable controls."
        },
        {
          "id": "data-engineering-301-l03-q4",
          "text": "When improving orchestration reliability, which approach is most defensible?",
          "skillId": "data-engineering-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Use anecdotal wins as sole evidence"
            },
            {
              "id": "b",
              "text": "Compare against baselines and include failure analysis"
            },
            {
              "id": "c",
              "text": "Remove difficult test scenarios"
            },
            {
              "id": "d",
              "text": "Ignore lagging outcomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines and failure analysis reduce bias and reveal true system performance."
        },
        {
          "id": "data-engineering-301-l03-q5",
          "text": "A mature cost-performance tuning strategy should include:",
          "skillId": "data-engineering-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "No escalation path for critical defects"
            },
            {
              "id": "b",
              "text": "Policy, measurement, and escalation pathways linked to impact tiers"
            },
            {
              "id": "c",
              "text": "One-time governance review only"
            },
            {
              "id": "d",
              "text": "Separation between metrics and decisions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective governance connects policy intent to measurement and response action."
        }
      ],
      "imageUrl": "/generated-images/refinery/data-engineering-301-l03.png"
    },
    {
      "id": "data-engineering-301-l04",
      "title": "Data Engineering Case Analysis",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "A split-screen holographic display showing a tradeoff matrix with glowing nodes, balancing speed, cost, and reliability. Imagen 4.",
      "conceptVideoPrompt": "A fast-paced visualization of data streams hitting a bottleneck, analyzing the issue, and automatically rerouting efficiently to maintain flow. Veo 3.1.",
      "learningAids": [
        {
          "id": "data-engineering-301-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-301-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "In this engaging case analysis, we will dive into the workings of a multi-source analytics platform. This platform faces the challenge of late-arriving events, which can complicate data processing and analysis. Additionally, it operates under strict service level agreement (SLA) targets, which are essential for maintaining quality and reliability in data services. Throughout this exercise, you will be encouraged to distinguish between evidence and assumptions, as well as to pinpoint high-consequence risks that could impact the platform's performance."
        },
        {
          "id": "data-engineering-301-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "In this section, we will use a decision tradeoff matrix to evaluate different alternatives. Each option will be scored based on its performance, reliability, cost, and implications for equity. This structured approach will help you understand how to weigh the pros and cons of each choice before selecting the best intervention path for your data engineering projects."
        },
        {
          "id": "data-engineering-301-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "In this recap, we will categorize different failure patterns that have occurred in past projects. By analyzing these incidents, we can transform one-off failures into reusable design safeguards. This means you will learn how to create systems that are more resilient and can prevent similar issues from happening in the future."
        }
      ],
      "flashcards": [
        {
          "id": "data-engineering-301-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured way to compare options across competing priorities before choosing an intervention."
        },
        {
          "id": "data-engineering-301-l04-f2",
          "front": "Failure Mode",
          "back": "A repeatable pattern describing how systems break under real constraints."
        },
        {
          "id": "data-engineering-301-l04-f3",
          "front": "Escalation Threshold",
          "back": "A predefined condition that triggers higher-level review or corrective action."
        }
      ],
      "imageUrl": "/generated-images/refinery/data-engineering-301-l04.png"
    },
    {
      "id": "data-engineering-301-l05",
      "title": "Data Engineering Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "A high-tech simulation control room with multiple screens showing data graphs, stress tests, and system health metrics. Imagen 4.",
      "conceptVideoPrompt": "A 3D simulation of a data network adapting to stress tests, with nodes changing from red to green as automated mitigations take effect. Veo 3.1.",
      "learningAids": [
        {
          "id": "data-engineering-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-301-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive simulation studio, you will set up a scenario model that includes clear assumptions about uncertainty and specific success metrics related to cost-performance tuning. This hands-on experience will allow you to experiment with different variables and see how they affect the outcomes of your data engineering projects."
        },
        {
          "id": "data-engineering-301-l05-c2",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, you will participate in a review loop. This involves examining the evidence gathered during the simulation, checking for alignment with established policies, and identifying actions for improvement. This process encourages critical thinking and helps you understand the importance of continuous improvement in data engineering."
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-engineering-301-l05-act1",
          "type": "scenario_practice",
          "title": "Policy and Operations Simulation",
          "description": "Run three intervention strategies and justify which option best advances pipeline architecture and cost-performance tuning.",
          "instructions": [
            "Define the primary objective and guardrails before choosing an intervention.",
            "Record one tradeoff created by each intervention.",
            "Select a follow-up metric that confirms whether the choice was successful."
          ]
        },
        {
          "id": "data-engineering-301-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Mapping",
          "description": "Match each failure condition with the strongest mitigation response.",
          "pairs": [
            {
              "left": "Unreliable input stream",
              "right": "Introduce quality contracts and quarantine checks"
            },
            {
              "left": "Policy ambiguity",
              "right": "Define decision authority and escalation rules"
            },
            {
              "left": "Metric drift",
              "right": "Re-baseline and monitor leading indicators"
            },
            {
              "left": "User trust decline",
              "right": "Increase transparency and corrective feedback loops"
            }
          ]
        }
      ],
      "imageUrl": "/generated-images/refinery/data-engineering-301-l05.png"
    },
    {
      "id": "data-engineering-301-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing digital scale balancing a server rack on one side and a bag of coins on the other, representing cost-performance tuning. Imagen 4.",
      "conceptVideoPrompt": "A smooth animation of a glowing decision tree expanding, evaluating different branches, and highlighting the optimal path in bright gold. Veo 3.1.",
      "learningAids": [
        {
          "id": "data-engineering-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "data-engineering-301-l06-q1",
          "text": "What is the primary purpose of using a Decision Tradeoff Matrix in data engineering?",
          "skillId": "data-engineering-301-skill-tradeoffs",
          "options": [
            {
              "id": "a",
              "text": "To eliminate all costs associated with a project"
            },
            {
              "id": "b",
              "text": "To structure the comparison of options across competing priorities like cost, reliability, and performance"
            },
            {
              "id": "c",
              "text": "To guarantee that a system will never experience downtime"
            },
            {
              "id": "d",
              "text": "To bypass stakeholder approval processes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured way to evaluate how different choices impact competing priorities."
        },
        {
          "id": "data-engineering-301-l06-q2",
          "text": "When dealing with late-arriving events in a multi-source analytics platform, what is a critical first step?",
          "skillId": "data-engineering-301-skill-architecture",
          "options": [
            {
              "id": "a",
              "text": "Delete the late data to maintain SLA targets"
            },
            {
              "id": "b",
              "text": "Distinguish between evidence and assumptions regarding the source of the delay"
            },
            {
              "id": "c",
              "text": "Immediately upgrade all hardware to process data faster"
            },
            {
              "id": "d",
              "text": "Ignore the SLA targets until the data arrives"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Before applying a fix, it is crucial to separate evidence from assumptions to understand the true root cause."
        },
        {
          "id": "data-engineering-301-l06-q3",
          "text": "How does analyzing 'Failure Modes' benefit future pipeline designs?",
          "skillId": "data-engineering-301-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "It allows engineers to assign blame to specific team members"
            },
            {
              "id": "b",
              "text": "It transforms one-off failures into reusable design safeguards"
            },
            {
              "id": "c",
              "text": "It ensures that the exact same failure will never happen again"
            },
            {
              "id": "d",
              "text": "It reduces the need for data quality contracts"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Understanding failure modes helps engineers build resilient systems by creating safeguards against known patterns of failure."
        },
        {
          "id": "data-engineering-301-l06-q4",
          "text": "What is the main objective of the 'Decision Review Loop' in a simulation environment?",
          "skillId": "data-engineering-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To examine evidence, check policy alignment, and identify actions for continuous improvement"
            },
            {
              "id": "b",
              "text": "To finalize the project budget without further testing"
            },
            {
              "id": "c",
              "text": "To automatically deploy the simulation to production"
            },
            {
              "id": "d",
              "text": "To hide negative metrics from stakeholders"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The review loop is designed to foster critical thinking and continuous improvement based on gathered evidence."
        },
        {
          "id": "data-engineering-301-l06-q5",
          "text": "Which mitigation strategy is most appropriate for an 'unreliable input stream'?",
          "skillId": "data-engineering-301-skill-ops",
          "options": [
            {
              "id": "a",
              "text": "Define decision authority and escalation rules"
            },
            {
              "id": "b",
              "text": "Re-baseline and monitor leading indicators"
            },
            {
              "id": "c",
              "text": "Introduce quality contracts and quarantine checks"
            },
            {
              "id": "d",
              "text": "Increase transparency and corrective feedback loops"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Quality contracts and quarantine checks directly address unreliable data by preventing bad data from entering the main pipeline."
        }
      ],
      "imageUrl": "/generated-images/refinery/data-engineering-301-l06.png"
    },
    {
      "id": "data-engineering-301-l07",
      "title": "Data Engineering Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "A diverse group of abstract digital avatars connected by a glowing network, representing stakeholders and public impact in a data ecosystem. Imagen 4.",
      "conceptVideoPrompt": "A conceptual animation showing a glowing digital shield forming around a central data core, symbolizing ethics, governance, and data protection. Veo 3.1.",
      "learningAids": [
        {
          "id": "data-engineering-301-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this lesson, you will conduct a stakeholder analysis. You will identify who benefits from data engineering projects, who might bear risks, and how different policy choices can shape outcomes for various groups. This understanding is essential for making ethical decisions and ensuring that data engineering practices are fair and equitable."
        },
        {
          "id": "data-engineering-301-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "In this section, we will explore governance and accountability in data engineering. We will discuss how governance mechanisms are connected to measurable controls, obligations for transparency, and pathways for remediation when issues arise. Understanding these concepts is crucial for ensuring that data engineering practices are responsible and trustworthy."
        },
        {
          "id": "data-engineering-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before making any decisions about deploying a data engineering project, it is essential to use a comprehensive checklist. This checklist should include important factors such as legal requirements, ethical considerations, technical specifications, and the potential impact on users. By evaluating these criteria, we can ensure that our project is responsible and beneficial to everyone involved."
        }
      ],
      "flashcards": [
        {
          "id": "data-engineering-301-l07-f1",
          "front": "Stakeholder Map",
          "back": "A framework that tracks impact distribution across affected groups."
        },
        {
          "id": "data-engineering-301-l07-f2",
          "front": "Accountability Loop",
          "back": "A cycle connecting outcomes, ownership, and corrective action."
        },
        {
          "id": "data-engineering-301-l07-f3",
          "front": "Responsible Execution",
          "back": "Delivery practice that balances performance with safety, fairness, and transparency."
        }
      ],
      "imageUrl": "/generated-images/refinery/data-engineering-301-l07.png"
    },
    {
      "id": "data-engineering-301-l08",
      "title": "Data Engineering Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "A glowing futuristic blueprint of a completed data architecture, with nodes and pathways fully illuminated, representing a capstone project. Imagen 4.",
      "conceptVideoPrompt": "A sweeping camera move over a fully constructed, massive digital data city, representing a completed and well-architected capstone project. Veo 3.1.",
      "learningAids": [
        {
          "id": "data-engineering-301-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this activity, you will create a detailed capstone charter. This document will outline the main objectives of your project, identify potential risks, establish metrics for measuring success, and set up governance checkpoints to ensure everything stays on track. This process helps you think critically about your projects and prepares you for real-world challenges."
        },
        {
          "id": "data-engineering-301-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "To conclude the lesson, you will receive a defense preparation template. This template will guide you in presenting your projects by requiring you to support your claims with evidence and clearly explain any trade-offs you had to consider. This practice helps you develop strong reasoning skills and prepares you for defending your work in front of an audience."
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-engineering-301-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a one-page capstone charter with metrics, controls, and success criteria.",
          "instructions": [
            "State the primary objective and boundary conditions.",
            "Define at least three measurable success indicators.",
            "Identify one ethical or policy risk and mitigation plan."
          ]
        },
        {
          "id": "data-engineering-301-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against cost, risk, and equity critiques."
        }
      ],
      "imageUrl": "/generated-images/refinery/data-engineering-301-l08.png"
    }
  ]
};
