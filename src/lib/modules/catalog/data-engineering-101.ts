import type { LearningModule } from "@/lib/modules/types";

export const data_engineering_101_Module: LearningModule = {
  "id": "data-engineering-101",
  "title": "Data Engineering Foundations",
  "description": "Level 101 curriculum in Data Engineering, focused on pipeline architecture, data quality contracts, orchestration reliability, and cost-performance tuning, with rigorous scenario analysis and assessment-backed mastery.",
  "subject": "Data Engineering",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "data",
    "systems"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
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
      "id": "data-engineering-101-l01",
      "title": "Data Engineering Core Concepts",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing, futuristic blueprint of a data pipeline connecting various digital nodes, with a clean, modern, and educational aesthetic. Bright neon blue and orange accents on a dark background.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic 3D animation showing glowing data packets traveling smoothly through a transparent pipeline system. The camera pans along the pipeline, revealing checkpoints that light up green as data passes through, symbolizing data quality contracts.",
      "learningAids": [
        {
          "id": "data-engineering-101-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-101-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "In this lesson, we will dive into key vocabulary essential for understanding Data Engineering. Learning these terms helps us communicate effectively about complex data systems. We will define the boundaries within which we operate, clarifying how different components of data systems interact. Furthermore, we will explore the relationship between pipeline architecture and data quality contracts in real-world scenarios. This understanding is crucial for ensuring that our data processes are efficient, reliable, and scalable."
        },
        {
          "id": "data-engineering-101-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "Here, you will practice modeling causal paths—understanding how specific events or actions lead to certain outcomes in a data system. We will identify hidden assumptions that might skew our understanding of these paths. Finally, we will learn how to apply checks for constraints, which are the technical or business limits we must follow, before suggesting any changes or interventions to a pipeline."
        },
        {
          "id": "data-engineering-101-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This module introduces an evidence-first workflow. This method emphasizes the importance of using observable indicators to support our engineering claims. Every claim we make about a system's performance will be connected to these indicators, and we will also account for the expected uncertainty that comes with our findings. This approach ensures we make informed, defensible decisions based on solid evidence rather than guesswork."
        }
      ],
      "flashcards": [
        {
          "id": "data-engineering-101-l01-f1",
          "front": "pipeline architecture",
          "back": "A core mechanism in Data Engineering requiring explicit assumptions and measurable controls."
        },
        {
          "id": "data-engineering-101-l01-f2",
          "front": "data quality contracts",
          "back": "Operational practices that convert strategy into reliable execution."
        },
        {
          "id": "data-engineering-101-l01-f3",
          "front": "orchestration reliability",
          "back": "The evaluation layer that determines whether interventions truly improve outcomes."
        }
      ],
      "imageUrl": "/generated-images/refinery/data-engineering-101-l01.png"
    },
    {
      "id": "data-engineering-101-l02",
      "title": "Data Engineering Methods Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: An interactive digital dashboard showing various data metrics, graphs, and sorting buckets. The interface is sleek, user-friendly, and designed with a modern dark mode theme featuring vibrant data visualizations.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic screen recording style animation of a user dragging and dropping data constraints into different categories (Technical, Policy, User Impact) on a futuristic interface. The UI responds with satisfying glowing effects upon correct placement.",
      "learningAids": [
        {
          "id": "data-engineering-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-101-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this interactive lab, you will create a sequence of methods optimized for foundational vocabulary, core mechanisms, and baseline analysis. This means carefully choosing the steps required to ensure a data pipeline is effective. After building this sequence, we will stress-test each step to see how it holds up under uncertainty, helping us understand the true reliability of our design."
        },
        {
          "id": "data-engineering-101-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "To wrap up the lab, we will assess our operational readiness by mapping out who is responsible for each part of the process. We will establish a schedule for checkpoints—regular reviews to ensure everything is on track. Additionally, we will identify rollback triggers, which are automated or manual actions we can take if something goes wrong, and learn to maintain evidence logs to track our findings."
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-engineering-101-l02-act1",
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
          "id": "data-engineering-101-l02-act2",
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
      "imageUrl": "/generated-images/refinery/data-engineering-101-l02.png"
    },
    {
      "id": "data-engineering-101-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A stylized, modern quiz interface floating in a 3D space. A glowing checkmark sits atop a pedestal surrounded by subtle holographic data charts, representing a milestone achieved.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced, engaging motion graphic showing a progress bar filling up to 50%. As it hits the checkpoint, a burst of digital confetti and a glowing 'Checkpoint 1 Cleared' badge appears on screen.",
      "learningAids": [
        {
          "id": "data-engineering-101-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "data-engineering-101-l03-q1",
          "text": "Which practice most strengthens pipeline architecture in real deployments?",
          "skillId": "data-engineering-101-skill-risk",
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
          "id": "data-engineering-101-l03-q2",
          "text": "At level 101, Data Engineering work should prioritize:",
          "skillId": "data-engineering-101-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Foundational vocabulary, core mechanisms, and baseline analysis"
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
          "explanation": "The 101 sequence is designed around foundational vocabulary, core mechanisms, and baseline analysis."
        },
        {
          "id": "data-engineering-101-l03-q3",
          "text": "What is the strongest indicator of healthy data quality contracts?",
          "skillId": "data-engineering-101-skill-ops",
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
          "id": "data-engineering-101-l03-q4",
          "text": "When improving orchestration reliability, which approach is most defensible?",
          "skillId": "data-engineering-101-skill-eval",
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
          "id": "data-engineering-101-l03-q5",
          "text": "A mature cost-performance tuning strategy should include:",
          "skillId": "data-engineering-101-skill-governance",
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
      "imageUrl": "/generated-images/refinery/data-engineering-101-l03.png"
    },
    {
      "id": "data-engineering-101-l04",
      "title": "Data Engineering Case Analysis",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A split-screen visual showing a chaotic, tangled web of data on the left, and a neatly organized, flowing data architecture on the right. A magnifying glass hovers over the organized side, symbolizing analysis and problem-solving.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic zoom into a complex digital city representing a multi-source analytics platform. Red warning lights flash in one sector (representing late-arriving events), and a digital shield deploys to stabilize the area, illustrating risk management.",
      "learningAids": [
        {
          "id": "data-engineering-101-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-101-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "In this engaging case study, we will explore a multi-source analytics platform that encounters challenges with late-arriving events and strict Service Level Agreement (SLA) targets. SLAs are important because they set the expectations for how quickly and accurately data must be processed. As we dive into this analysis, you will be tasked with distinguishing between evidence (what we know for sure) and assumptions (what we think might be true). We will also identify high-consequence risks that could lead to serious system outages if not managed properly."
        },
        {
          "id": "data-engineering-101-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "Here, we will introduce the Decision Tradeoff Matrix to evaluate different engineering alternatives. We will score each option according to its performance, reliability, cost, and implications for equity. This structured process helps us make informed decisions about which intervention path to choose, ensuring we balance competing priorities rather than just optimizing for a single metric."
        },
        {
          "id": "data-engineering-101-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "To conclude the case study, we will categorize the different failure patterns we observed. By doing this, we can learn from past mistakes and turn one-time incidents into reusable design safeguards. This means developing proactive strategies to prevent similar failures in the future, ultimately enhancing the resilience of our data architecture."
        }
      ],
      "flashcards": [
        {
          "id": "data-engineering-101-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured way to compare options across competing priorities before choosing an intervention."
        },
        {
          "id": "data-engineering-101-l04-f2",
          "front": "Failure mode",
          "back": "A repeatable pattern describing how systems break under real constraints."
        },
        {
          "id": "data-engineering-101-l04-f3",
          "front": "Escalation threshold",
          "back": "A predefined condition that triggers higher-level review or corrective action."
        }
      ],
      "imageUrl": "/generated-images/refinery/data-engineering-101-l04.png"
    },
    {
      "id": "data-engineering-101-l05",
      "title": "Data Engineering Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "Imagen 4 prompt: A high-tech simulation control room. A large holographic display in the center shows a 3D model of a data pipeline with various sliders and dials for 'Cost', 'Performance', and 'Reliability' being adjusted by a user.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A first-person perspective of interacting with a futuristic control panel. The user pushes a slider labeled 'Performance' up, which causes the 'Cost' meter to rise and glow red. The user then adjusts a 'Tuning' dial to balance both meters perfectly into the green zone.",
      "learningAids": [
        {
          "id": "data-engineering-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-101-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive practice session, you will configure a scenario model that includes clear assumptions about uncertainty and success metrics. These metrics will be linked to cost-performance tuning, meaning we will evaluate how well our decisions balance infrastructure costs with required performance outcomes. This setup will help you understand the real-world financial and technical implications of your engineering choices."
        },
        {
          "id": "data-engineering-101-l05-c2",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, we will conduct a review of the evidence gathered. This includes checking for alignment with our initial policies and identifying actions to improve our processes. This decision review loop is essential for ensuring that we learn from each simulation iteration and continuously enhance our approach to system design."
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-engineering-101-l05-act1",
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
          "id": "data-engineering-101-l05-act2",
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
      ]
    },
    {
      "id": "data-engineering-101-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing, metallic vault door unlocking, revealing bright, organized streams of data inside. The scene represents unlocking advanced knowledge and passing a major checkpoint.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic animation of a digital puzzle coming together. The final piece, shaped like a gear, clicks into place, causing the entire mechanism to light up and spin smoothly, symbolizing a complete understanding of systems and decisions.",
      "learningAids": [
        {
          "id": "data-engineering-101-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "data-engineering-101-l06-q1",
          "text": "What is the primary purpose of a Decision Tradeoff Matrix in data engineering?",
          "skillId": "data-engineering-101-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To guarantee that a project will have zero costs"
            },
            {
              "id": "b",
              "text": "To compare options across competing priorities before choosing an intervention"
            },
            {
              "id": "c",
              "text": "To automatically write code for data pipelines"
            },
            {
              "id": "d",
              "text": "To hide system failures from stakeholders"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured way to evaluate alternatives based on performance, reliability, cost, and equity."
        },
        {
          "id": "data-engineering-101-l06-q2",
          "text": "How should a data engineer treat a 'failure mode' observed in a system?",
          "skillId": "data-engineering-101-skill-risk",
          "options": [
            {
              "id": "a",
              "text": "As a repeatable pattern to learn from and build reusable design safeguards"
            },
            {
              "id": "b",
              "text": "As a one-time anomaly that can be safely ignored"
            },
            {
              "id": "c",
              "text": "As a reason to completely abandon the current pipeline architecture"
            },
            {
              "id": "d",
              "text": "As an issue that only affects the end user, not the engineering team"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Categorizing failure patterns allows engineers to turn incidents into proactive, reusable safeguards."
        },
        {
          "id": "data-engineering-101-l06-q3",
          "text": "In cost-performance tuning, what is the most effective approach?",
          "skillId": "data-engineering-101-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Always choosing the cheapest infrastructure regardless of speed"
            },
            {
              "id": "b",
              "text": "Maximizing performance without tracking the financial impact"
            },
            {
              "id": "c",
              "text": "Balancing infrastructure costs with required performance outcomes using measurable metrics"
            },
            {
              "id": "d",
              "text": "Tuning the system only once during the initial deployment"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Effective tuning requires a continuous balance between financial costs and the technical performance required by SLAs."
        },
        {
          "id": "data-engineering-101-l06-q4",
          "text": "What is the main goal of a Decision Review Loop?",
          "skillId": "data-engineering-101-skill-ops",
          "options": [
            {
              "id": "a",
              "text": "To assign blame for system outages"
            },
            {
              "id": "b",
              "text": "To evaluate gathered evidence, check policy alignment, and continuously improve processes"
            },
            {
              "id": "c",
              "text": "To bypass standard testing procedures to save time"
            },
            {
              "id": "d",
              "text": "To permanently lock in a single strategy without future changes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The review loop ensures teams learn from each iteration, aligning actions with policies and improving future designs."
        },
        {
          "id": "data-engineering-101-l06-q5",
          "text": "What happens when an 'escalation threshold' is met in a data pipeline?",
          "skillId": "data-engineering-101-skill-risk",
          "options": [
            {
              "id": "a",
              "text": "The system automatically deletes the problematic data"
            },
            {
              "id": "b",
              "text": "It triggers a predefined higher-level review or corrective action"
            },
            {
              "id": "c",
              "text": "The pipeline silently ignores the error and continues processing"
            },
            {
              "id": "d",
              "text": "The data quality contract is permanently voided"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Escalation thresholds are predefined conditions designed to alert higher-level authorities or trigger specific corrective actions when risks become too high."
        }
      ]
    },
    {
      "id": "data-engineering-101-l07",
      "title": "Data Engineering Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A diverse group of abstract, glowing digital avatars standing around a central, illuminated data core. The image conveys a sense of community, responsibility, and the human impact of technology.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A visual metaphor showing a ripple effect in a digital pond. A single drop of data hits the surface, and glowing rings expand outward, touching various icons representing different stakeholders (users, businesses, regulators), illustrating the wide impact of data decisions.",
      "learningAids": [
        {
          "id": "data-engineering-101-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-101-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this section, you will conduct a stakeholder analysis to identify who benefits from our data engineering efforts, who might bear the risks, and how our policy choices shape outcomes for different groups. Understanding these human dynamics is crucial for making ethical, fair decisions in data engineering, ensuring our systems do not inadvertently harm vulnerable populations."
        },
        {
          "id": "data-engineering-101-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "Next, we will explore governance and accountability. We will learn how governance mechanisms are connected to measurable controls, which help ensure that our processes remain transparent and accountable to the public and regulators. Additionally, we will discuss the importance of establishing clear pathways for remediation—meaning we have a plan to correct issues and make things right when a system fails."
        },
        {
          "id": "data-engineering-101-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before deploying any data engineering project, it is vital to use a comprehensive Responsible Execution Checklist. This checklist covers legal requirements, ethical considerations, technical safety, and the potential impact on end-users. By rigorously reviewing these criteria, we ensure that our project is not only technically sound but also responsible and beneficial to society."
        }
      ],
      "flashcards": [
        {
          "id": "data-engineering-101-l07-f1",
          "front": "Stakeholder map",
          "back": "A framework that tracks impact distribution across affected groups."
        },
        {
          "id": "data-engineering-101-l07-f2",
          "front": "Accountability loop",
          "back": "A cycle connecting outcomes, ownership, and corrective action."
        },
        {
          "id": "data-engineering-101-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery practice that balances performance with safety, fairness, and transparency."
        }
      ],
      "imageUrl": "/generated-images/refinery/data-engineering-101-l07.png"
    },
    {
      "id": "data-engineering-101-l08",
      "title": "Data Engineering Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A top-down view of a digital drafting table. Glowing blueprints of a complex data architecture are spread out, with digital sticky notes, charts, and a prominent 'CAPSTONE APPROVED' stamp.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A time-lapse style animation of a complex data pipeline being built piece by piece on a digital grid. As the final piece is placed, the entire structure lights up brilliantly, and a 'Project Ready' banner sweeps across the screen.",
      "learningAids": [
        {
          "id": "data-engineering-101-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-101-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this final activity, you will create a detailed capstone charter. This document will outline the main objective of your project, identify potential risks, establish success metrics to measure outcomes, and set governance checkpoints to ensure everything stays on track. This process helps you think critically about your project's scope and sets a solid foundation for successful execution."
        },
        {
          "id": "data-engineering-101-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "To conclude the course, you will receive a defense preparation template. This template will guide you in making engineering claims that are fully supported by evidence. You will be required to explain the reasoning behind any trade-offs you made regarding cost, performance, and ethics. This exercise hones your ability to think clearly and communicate your technical decisions effectively to stakeholders."
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-engineering-101-l08-act1",
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
          "id": "data-engineering-101-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against cost, risk, and equity critiques. You will be presented with simulated stakeholder pushback and must use your evidence logs to justify your architectural choices."
        }
      ],
      "imageUrl": "/generated-images/refinery/data-engineering-101-l08.png"
    }
  ]
};
