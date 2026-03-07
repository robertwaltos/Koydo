import type { LearningModule } from "@/lib/modules/types";

export const data_engineering_201_Module: LearningModule = {
  "id": "data-engineering-201",
  "title": "Data Engineering Applied Practice",
  "description": "Level 201 curriculum in Data Engineering, focused on pipeline architecture, data quality contracts, orchestration reliability, and cost-performance tuning, with rigorous scenario analysis and assessment-backed mastery.",
  "subject": "Data Engineering",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "data",
    "systems"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
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
      "id": "data-engineering-201-l01",
      "title": "Data Engineering Core Concepts",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A photorealistic, glowing digital blueprint of a modern data pipeline, showing interconnected nodes and data streams in a sleek, dark-themed tech environment.",
      "conceptVideoPrompt": "Veo 3.1 prompt: Cinematic fly-through of a futuristic server room where glowing, color-coded data streams travel smoothly between glass nodes, illustrating the concept of system boundaries and data flow.",
      "learningAids": [
        {
          "id": "data-engineering-201-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-201-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "In this lesson, we will dive into key vocabulary essential for understanding Data Engineering. Knowing the right terms helps us communicate effectively about our work. We will also define the boundaries within which we operate, which is crucial for understanding how various components of data pipelines connect and function together. Furthermore, we will investigate how pipeline architecture interacts with data quality contracts in real-world scenarios, ensuring a solid grasp of these concepts."
        },
        {
          "id": "data-engineering-201-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "Here, you will learn to model causal paths by creating diagrams that show how different factors in a data system influence one another. You will also practice identifying hidden assumptions that might skew your understanding of these relationships. Before suggesting any architectural changes, you will apply checks to ensure that technical and business constraints are fully considered, helping you think critically about the impact of your design decisions."
        },
        {
          "id": "data-engineering-201-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This module introduces a workflow that prioritizes evidence, meaning every engineering claim made must be supported by observable indicators. You will learn how to connect your claims to expected uncertainties, which helps you make informed decisions based on solid data rather than guesswork. This approach encourages critical thinking and a deeper understanding of the systems you are building."
        }
      ],
      "flashcards": [
        {
          "id": "data-engineering-201-l01-f1",
          "front": "Pipeline Architecture",
          "back": "A core mechanism in Data Engineering requiring explicit assumptions and measurable controls."
        },
        {
          "id": "data-engineering-201-l01-f2",
          "front": "Data Quality Contracts",
          "back": "Operational practices that convert strategy into reliable execution by defining expectations between data producers and consumers."
        },
        {
          "id": "data-engineering-201-l01-f3",
          "front": "Orchestration Reliability",
          "back": "The evaluation layer that determines whether automated workflows and interventions truly improve system outcomes."
        }
      ],
      "imageUrl": "/generated-images/refinery/data-engineering-201-l01.png"
    },
    {
      "id": "data-engineering-201-l02",
      "title": "Data Engineering Methods Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A modern, interactive digital dashboard displaying data flow metrics, with drag-and-drop UI elements representing pipeline methods.",
      "conceptVideoPrompt": "Veo 3.1 prompt: Time-lapse animation of a data engineer organizing visual blocks representing pipeline methods on a glowing digital whiteboard, connecting them to form a reliable workflow.",
      "learningAids": [
        {
          "id": "data-engineering-201-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-201-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this interactive lab, you will construct a sequence of methods optimized for effective execution. You will focus on ensuring that your workflow is reliable and can be interpreted correctly across various scenarios. After building your method sequence, you will stress-test each step to see how it performs under uncertain conditions, helping you learn how to adapt and improve your data processes."
        },
        {
          "id": "data-engineering-201-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "To ensure operational readiness, you will assess your methods using several important criteria. You will create owner mappings to identify who is responsible for each part of the process, establish a cadence for checkpoints to monitor progress, set up rollback triggers to revert changes if needed, and maintain evidence logs to document your findings. This comprehensive approach ensures everything is in place before moving to production."
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-engineering-201-l02-act1",
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
          "id": "data-engineering-201-l02-act2",
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
      "imageUrl": "/generated-images/refinery/data-engineering-201-l02.png"
    },
    {
      "id": "data-engineering-201-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing digital lock and shield hovering over a fast-moving stream of binary data, representing core methods and security checkpoints.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic 3D animation of glowing data packets passing through a high-tech security checkpoint gate, turning from yellow to green as they are validated.",
      "learningAids": [
        {
          "id": "data-engineering-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "data-engineering-201-l03-q1",
          "text": "Which practice most strengthens pipeline architecture in real deployments?",
          "skillId": "data-engineering-201-skill-risk",
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
          "id": "data-engineering-201-l03-q2",
          "text": "At level 201, Data Engineering work should prioritize:",
          "skillId": "data-engineering-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Method execution, workflow reliability, and scenario interpretation"
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
          "explanation": "The 201 sequence is designed around method execution, workflow reliability, and scenario interpretation."
        },
        {
          "id": "data-engineering-201-l03-q3",
          "text": "What is the strongest indicator of healthy data quality contracts?",
          "skillId": "data-engineering-201-skill-ops",
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
          "id": "data-engineering-201-l03-q4",
          "text": "When improving orchestration reliability, which approach is most defensible?",
          "skillId": "data-engineering-201-skill-eval",
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
          "id": "data-engineering-201-l03-q5",
          "text": "A mature cost-performance tuning strategy should include:",
          "skillId": "data-engineering-201-skill-governance",
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
      "imageUrl": "/generated-images/refinery/data-engineering-201-l03.png"
    },
    {
      "id": "data-engineering-201-l04",
      "title": "Data Engineering Case Analysis",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A split-screen visualization showing a healthy, smoothly flowing data pipeline on the left, and a bottlenecked, red-glowing pipeline on the right.",
      "conceptVideoPrompt": "Veo 3.1 prompt: Cinematic zoom into a complex data architecture diagram that dynamically highlights failure points in red, then resolves them into green as solutions are applied.",
      "learningAids": [
        {
          "id": "data-engineering-201-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-201-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "In this engaging case study, we will dive into the world of a multi-source analytics platform that encounters significant challenges. One of the main issues is dealing with late-arriving events, which can complicate the data analysis process. Additionally, the platform has strict Service Level Agreement (SLA) targets that must be met. You will have the important task of distinguishing between evidence and assumptions, which is crucial for making informed decisions. Furthermore, you will identify high-consequence risks that could potentially affect the project's overall success."
        },
        {
          "id": "data-engineering-201-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "In this section, you will use a Decision Tradeoff Matrix to evaluate different architectural alternatives. Each option will be scored based on its performance, reliability, cost, and implications for equity. This structured approach will help you make informed decisions about which intervention path to select, considering the various competing factors that could affect the final outcome."
        },
        {
          "id": "data-engineering-201-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "In this recap, we will categorize different failure patterns that have been observed in past projects. By analyzing these patterns, you will be able to convert one-time incidents into reusable design safeguards. This process not only helps prevent future mistakes but also encourages a culture of continuous learning and proactive improvement within the field of data engineering."
        }
      ],
      "flashcards": [
        {
          "id": "data-engineering-201-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured way to compare options across competing priorities before choosing an intervention."
        },
        {
          "id": "data-engineering-201-l04-f2",
          "front": "Failure Mode",
          "back": "A repeatable pattern describing how systems break under real constraints."
        },
        {
          "id": "data-engineering-201-l04-f3",
          "front": "Escalation Threshold",
          "back": "A predefined condition that triggers higher-level review or corrective action."
        }
      ],
      "imageUrl": "/generated-images/refinery/data-engineering-201-l04.png"
    },
    {
      "id": "data-engineering-201-l05",
      "title": "Data Engineering Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic simulation control room with holographic data models floating above a central console, displaying real-time pipeline stress tests.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced sequence showing a digital twin of a data pipeline adjusting dynamically to different stress-test scenarios, with metrics updating in real-time.",
      "learningAids": [
        {
          "id": "data-engineering-201-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-201-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive practice session, you will configure a scenario model that includes explicit assumptions about uncertainty and defines success metrics related to cost-performance tuning. This hands-on experience will allow you to apply theoretical concepts in a practical setting, enhancing your understanding of how to manage uncertainty and optimize resources in data engineering."
        },
        {
          "id": "data-engineering-201-l05-c2",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, you will participate in a Decision Review Loop. This involves reviewing the evidence gathered during the simulation, checking for alignment with established policies, and identifying actions for improvement. This iterative process helps you refine your approaches and ensures that you are continuously learning from your simulated experiences."
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-engineering-201-l05-act1",
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
          "id": "data-engineering-201-l05-act2",
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
      "imageUrl": "/generated-images/refinery/data-engineering-201-l05.png"
    },
    {
      "id": "data-engineering-201-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing, intricate decision tree overlaying a modern server rack, symbolizing the intersection of logic and hardware.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A smooth pan across a digital scale balancing glowing orbs representing cost, performance, and reliability metrics, finding perfect equilibrium.",
      "learningAids": [
        {
          "id": "data-engineering-201-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "data-engineering-201-l06-q1",
          "text": "What is the primary purpose of a Decision Tradeoff Matrix in data engineering?",
          "skillId": "data-engineering-201-skill-tradeoffs",
          "options": [
            {
              "id": "a",
              "text": "To eliminate all risks from a project"
            },
            {
              "id": "b",
              "text": "To structure comparisons across competing priorities like cost and reliability"
            },
            {
              "id": "c",
              "text": "To automate the deployment of data pipelines"
            },
            {
              "id": "d",
              "text": "To hide assumptions from stakeholders"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured way to evaluate options against competing priorities before making a decision."
        },
        {
          "id": "data-engineering-201-l06-q2",
          "text": "How should a data engineer handle identified 'failure modes'?",
          "skillId": "data-engineering-201-skill-failure-modes",
          "options": [
            {
              "id": "a",
              "text": "Ignore them if they only happen rarely"
            },
            {
              "id": "b",
              "text": "Convert them into reusable design safeguards to prevent recurrence"
            },
            {
              "id": "c",
              "text": "Delete the data associated with the failure"
            },
            {
              "id": "d",
              "text": "Blame the upstream data providers"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Analyzing failure modes allows engineers to build safeguards that prevent the same issues from happening again."
        },
        {
          "id": "data-engineering-201-l06-q3",
          "text": "When dealing with late-arriving events in a pipeline with strict SLAs, what is the best approach?",
          "skillId": "data-engineering-201-skill-slas",
          "options": [
            {
              "id": "a",
              "text": "Drop all late data to ensure the SLA is met"
            },
            {
              "id": "b",
              "text": "Delay the entire pipeline until all data arrives, missing the SLA"
            },
            {
              "id": "c",
              "text": "Implement a tradeoff strategy, such as processing on time and updating later"
            },
            {
              "id": "d",
              "text": "Stop monitoring the SLA"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Balancing SLAs and completeness often requires processing available data on time and handling late arrivals in a subsequent update."
        },
        {
          "id": "data-engineering-201-l06-q4",
          "text": "What is the main goal of a Decision Review Loop after a simulation?",
          "skillId": "data-engineering-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "To review evidence, check policy alignment, and identify improvements"
            },
            {
              "id": "b",
              "text": "To assign blame for failed simulations"
            },
            {
              "id": "c",
              "text": "To permanently lock in the first successful configuration"
            },
            {
              "id": "d",
              "text": "To bypass governance checks for faster deployment"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The review loop is an iterative process to evaluate evidence and continuously improve the system."
        },
        {
          "id": "data-engineering-201-l06-q5",
          "text": "If a pipeline suffers from an unreliable input stream, what is the strongest mitigation?",
          "skillId": "data-engineering-201-skill-mitigation",
          "options": [
            {
              "id": "a",
              "text": "Increase the compute power of the pipeline"
            },
            {
              "id": "b",
              "text": "Introduce data quality contracts and quarantine checks"
            },
            {
              "id": "c",
              "text": "Change the final reporting metrics"
            },
            {
              "id": "d",
              "text": "Manually fix the data every day"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Quality contracts and quarantine checks automatically catch and isolate bad data before it corrupts downstream systems."
        }
      ],
      "imageUrl": "/generated-images/refinery/data-engineering-201-l06.png"
    },
    {
      "id": "data-engineering-201-l07",
      "title": "Data Engineering Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A diverse group of professionals looking at a transparent, glowing data governance board that displays ethical guidelines and data flow maps.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A conceptual animation showing data flowing from a source, passing through glowing filters representing ethical guidelines, and safely reaching a diverse community.",
      "learningAids": [
        {
          "id": "data-engineering-201-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-201-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this section, you will conduct a Stakeholder Analysis to identify who benefits from data engineering projects, who might bear risks, and how different policy choices can shape outcomes for various groups. This analysis is crucial for understanding the broader impact of data engineering decisions on society and ensuring that all voices and potential consequences are considered."
        },
        {
          "id": "data-engineering-201-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "Here, we will explore the concepts of Governance and Accountability in data engineering. You will understand how governance mechanisms are connected to measurable controls, obligations for transparency, and pathways for remediation. This knowledge is essential for ensuring that data engineering practices are not only technically sound but also ethical and responsible."
        },
        {
          "id": "data-engineering-201-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before making any decisions about deploying a project, it is important to use a final checklist. This checklist should include critical factors such as legal requirements, ethical considerations, technical safeguards, and how the project will ultimately affect users. By reviewing these criteria, we can ensure that our deployments are responsible and well-informed."
        }
      ],
      "flashcards": [
        {
          "id": "data-engineering-201-l07-f1",
          "front": "Stakeholder Map",
          "back": "A framework that tracks impact distribution across affected groups."
        },
        {
          "id": "data-engineering-201-l07-f2",
          "front": "Accountability Loop",
          "back": "A cycle connecting outcomes, ownership, and corrective action."
        },
        {
          "id": "data-engineering-201-l07-f3",
          "front": "Responsible Execution",
          "back": "Delivery practice that balances performance with safety, fairness, and transparency."
        }
      ]
    },
    {
      "id": "data-engineering-201-l08",
      "title": "Data Engineering Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing, high-tech blueprint of a completed capstone data architecture, laid out on a digital drafting table.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic reveal of a fully optimized, massive-scale data pipeline operating flawlessly, zooming out to show the entire architecture working in harmony.",
      "learningAids": [
        {
          "id": "data-engineering-201-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-201-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this activity, you will create a detailed capstone charter. This document will outline the main objectives of your project, identify potential risks, establish success metrics to measure progress, and set up governance checkpoints to ensure everything stays on track. This process helps in planning effectively and preparing for any technical or business challenges that may arise."
        },
        {
          "id": "data-engineering-201-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "To conclude the lesson, you will receive a defense preparation template. This template will guide you in making claims that are supported by evidence and require you to explain the reasoning behind any trade-offs you make in your architecture. This exercise will help you articulate your thoughts clearly and prepare for professional discussions about your engineering decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-engineering-201-l08-act1",
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
          "id": "data-engineering-201-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against cost, risk, and equity critiques."
        }
      ],
      "imageUrl": "/generated-images/refinery/data-engineering-201-l08.png"
    }
  ]
};
