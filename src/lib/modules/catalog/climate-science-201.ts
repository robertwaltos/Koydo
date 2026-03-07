import type { LearningModule } from "@/lib/modules/types";

export const climate_science_201_Module: LearningModule = {
  "id": "climate-science-201",
  "title": "Climate Science Applied Practice",
  "description": "Level 201 curriculum in Climate Science, focused on earth energy balance, carbon cycle dynamics, impact attribution, and adaptation strategy, with rigorous scenario analysis and assessment-backed mastery.",
  "subject": "Earth Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "climate",
    "sustainability"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Explain and apply earth energy balance using clear assumptions and constraints",
    "Build repeatable workflows for carbon cycle dynamics with measurable checkpoints",
    "Evaluate impact attribution outcomes against baseline and target metrics",
    "Use governance patterns to improve adaptation strategy decision quality",
    "Communicate tradeoffs across technical, policy, and user-impact dimensions",
    "Synthesize Climate Science methods into defensible recommendations"
  ],
  "lessons": [
    {
      "id": "climate-science-201-l01",
      "title": "Climate Science Core Concepts",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "A split-screen illustration showing the sun's radiant energy hitting the Earth on one side, and a lush green forest absorbing carbon dioxide on the other, vibrant colors, educational textbook style.",
      "conceptVideoPrompt": "A dynamic 3D animation showing solar energy entering Earth's atmosphere, warming the surface, and interacting with a glowing carbon cycle network connecting oceans, forests, and cities. Cinematic lighting, educational documentary style.",
      "learningAids": [
        {
          "id": "climate-science-201-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-201-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "In this lesson, we will work together to build a shared vocabulary that will help you better understand the important concepts in Climate Science. We will clearly define the boundaries that guide our discussions and investigations. Additionally, we will take a closer look at how the balance of energy on our planet interacts with the carbon cycle in various real-world environments. Understanding these foundational ideas is crucial for grasping the complexities of climate systems and recognizing their impacts on our planet and our lives."
        },
        {
          "id": "climate-science-201-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "In this section, you will practice modeling causal paths, which means you will learn how to trace the connections between different events and outcomes. You will also identify hidden assumptions that may affect your understanding and apply checks to constraints before suggesting any interventions. This process encourages critical thinking and helps ensure that proposed solutions are well thought out and effective."
        },
        {
          "id": "climate-science-201-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This module introduces a workflow that prioritizes evidence. Each claim you make will be linked to observable indicators, which are measurable signs that support the claim. Additionally, you will consider the expected uncertainty associated with these indicators. This approach emphasizes the importance of using data and evidence to inform our understanding of climate science and to make sound decisions."
        }
      ],
      "flashcards": [
        {
          "id": "climate-science-201-l01-f1",
          "front": "Earth Energy Balance",
          "back": "A core mechanism in Climate Science requiring explicit assumptions and measurable controls regarding incoming and outgoing energy."
        },
        {
          "id": "climate-science-201-l01-f2",
          "front": "Carbon Cycle Dynamics",
          "back": "The operational pathways through which carbon is exchanged between the biosphere, pedosphere, geosphere, hydrosphere, and atmosphere."
        },
        {
          "id": "climate-science-201-l01-f3",
          "front": "Impact Attribution",
          "back": "The evaluation layer that determines whether specific interventions or events truly caused the observed climate outcomes."
        }
      ],
      "imageUrl": "/generated-images/refinery/climate-science-201-l01.png"
    },
    {
      "id": "climate-science-201-l02",
      "title": "Climate Science Methods Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "A top-down view of a modern laboratory desk with blueprints, a glowing digital tablet showing climate data graphs, and a steaming cup of coffee. Clean, scientific aesthetic.",
      "conceptVideoPrompt": "A time-lapse style video showing a digital flowchart being built on a futuristic transparent screen, connecting climate data points to action steps, with nodes lighting up to simulate stress-testing.",
      "learningAids": [
        {
          "id": "climate-science-201-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-201-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this interactive lab, you will construct a sequence of methods that are optimized for effective execution. You will focus on ensuring that the workflow is reliable and that you can interpret various scenarios accurately. After building your method sequence, you will stress-test each step to see how it holds up under uncertainty. This hands-on practice will help you understand the importance of thorough planning and adaptability in scientific methods."
        },
        {
          "id": "climate-science-201-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "In this recap, we will assess the readiness of our methods using several key strategies. This includes mapping out who is responsible for each part of the process, determining how often we should check our progress, identifying triggers that would prompt us to revert to previous steps, and maintaining logs of evidence. These operational readiness checks are crucial for ensuring that our methods are effective and can adapt to changing circumstances."
        }
      ],
      "interactiveActivities": [
        {
          "id": "climate-science-201-l02-act1",
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
          "id": "climate-science-201-l02-act2",
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
      "imageUrl": "/generated-images/refinery/climate-science-201-l02.png"
    },
    {
      "id": "climate-science-201-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A stylized glowing checkpoint gate in a digital landscape, with climate icons like a leaf, a sun, and a water drop hovering above it.",
      "conceptVideoPrompt": "A fast-paced montage of climate scientists in the field and at computers, transitioning into a glowing question mark made of digital particles.",
      "learningAids": [
        {
          "id": "climate-science-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "climate-science-201-l03-q1",
          "text": "Which practice most strengthens earth energy balance models in real deployments?",
          "skillId": "climate-science-201-skill-risk",
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
          "explanation": "Explicit failure criteria and leading indicators improve early detection and response, keeping models accurate."
        },
        {
          "id": "climate-science-201-l03-q2",
          "text": "At level 201, Climate Science work should prioritize:",
          "skillId": "climate-science-201-skill-level",
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
          "id": "climate-science-201-l03-q3",
          "text": "What is the strongest indicator of healthy carbon cycle dynamics management?",
          "skillId": "climate-science-201-skill-ops",
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
          "id": "climate-science-201-l03-q4",
          "text": "When improving impact attribution, which approach is most defensible?",
          "skillId": "climate-science-201-skill-eval",
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
          "id": "climate-science-201-l03-q5",
          "text": "A mature adaptation strategy should include:",
          "skillId": "climate-science-201-skill-governance",
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
      ]
    },
    {
      "id": "climate-science-201-l04",
      "title": "Climate Science Case Analysis",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "An aerial view of a coastal city with a futuristic seawall. Half the city is bathed in warm sunlight, the other half shows storm clouds, illustrating climate tradeoffs.",
      "conceptVideoPrompt": "A cinematic flyover of a coastal city facing rising sea levels, transitioning into a holographic matrix that highlights different zones in red, yellow, and green based on risk and adaptation strategies.",
      "learningAids": [
        {
          "id": "climate-science-201-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-201-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "In this case study, we will look at a coastal city that is trying to balance its policies for reducing climate change impacts with plans to adapt to heat and flooding. You will need to carefully separate the evidence you gather, the assumptions you make, and the risks that could have significant consequences. This analysis will help you understand the complexities involved in making decisions that affect communities and the environment."
        },
        {
          "id": "climate-science-201-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "In this section, we will explore a decision tradeoff matrix. Here, alternatives will be evaluated based on several criteria, including performance, reliability, cost, and the implications for equity among different groups. By scoring these alternatives, you will be better equipped to select the most effective intervention path that considers all aspects of the decision-making process."
        },
        {
          "id": "climate-science-201-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "In this recap, we will categorize different patterns of failure that have occurred in past projects. By analyzing these patterns, we can learn valuable lessons that allow us to transform one-time incidents into reusable safeguards for future designs. This process is essential for improving our approaches and ensuring that we can avoid similar mistakes in the future."
        }
      ],
      "flashcards": [
        {
          "id": "climate-science-201-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured way to compare options across competing priorities before choosing an intervention."
        },
        {
          "id": "climate-science-201-l04-f2",
          "front": "Failure Mode",
          "back": "A repeatable pattern describing how systems break under real constraints."
        },
        {
          "id": "climate-science-201-l04-f3",
          "front": "Escalation Threshold",
          "back": "A predefined condition that triggers higher-level review or corrective action."
        }
      ],
      "imageUrl": "/generated-images/refinery/climate-science-201-l04.png"
    },
    {
      "id": "climate-science-201-l05",
      "title": "Climate Science Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "A high-tech simulation room with a large glowing holographic globe in the center, surrounded by floating data panels showing climate metrics.",
      "conceptVideoPrompt": "A first-person view of interacting with a holographic control panel, adjusting sliders for 'carbon emissions' and 'adaptation funding', watching the holographic Earth respond in real-time.",
      "learningAids": [
        {
          "id": "climate-science-201-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-201-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive practice, you will set up a scenario model that includes clear assumptions about uncertainties and defines success metrics related to your adaptation strategies. This setup is crucial for understanding how different factors can influence outcomes and for preparing to analyze the effectiveness of various strategies in real-world situations."
        },
        {
          "id": "climate-science-201-l05-c2",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, you will conduct a review of the evidence collected. This will include checking for alignment with policy goals and identifying actions for improvement. This decision review loop is an important part of the learning process, as it allows you to reflect on your choices and make necessary adjustments to enhance your strategies."
        }
      ],
      "interactiveActivities": [
        {
          "id": "climate-science-201-l05-act1",
          "type": "scenario_practice",
          "title": "Policy and Operations Simulation",
          "description": "Run three intervention strategies and justify which option best advances earth energy balance and adaptation strategy.",
          "instructions": [
            "Define the primary objective and guardrails before choosing an intervention.",
            "Record one tradeoff created by each intervention.",
            "Select a follow-up metric that confirms whether the choice was successful."
          ]
        },
        {
          "id": "climate-science-201-l05-act2",
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
      "imageUrl": "/generated-images/refinery/climate-science-201-l05.png"
    },
    {
      "id": "climate-science-201-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing digital scale balancing a factory on one side and a green forest on the other, set against a dark blue technological background.",
      "conceptVideoPrompt": "A dynamic animation of a decision tree growing like a plant, with branches representing different climate policy choices, ending in either withered or blooming leaves.",
      "learningAids": [
        {
          "id": "climate-science-201-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "climate-science-201-l06-q1",
          "text": "What is the primary purpose of a Decision Tradeoff Matrix in climate planning?",
          "skillId": "climate-science-201-skill-tradeoffs",
          "options": [
            {
              "id": "a",
              "text": "To guarantee that all stakeholders get exactly what they want"
            },
            {
              "id": "b",
              "text": "To structure comparisons across competing priorities before choosing an intervention"
            },
            {
              "id": "c",
              "text": "To eliminate the need for baseline data"
            },
            {
              "id": "d",
              "text": "To hide the costs associated with adaptation strategies"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured way to evaluate alternatives against multiple criteria like cost, equity, and performance."
        },
        {
          "id": "climate-science-201-l06-q2",
          "text": "Why is it important to analyze 'failure modes' from past climate projects?",
          "skillId": "climate-science-201-skill-failure-analysis",
          "options": [
            {
              "id": "a",
              "text": "To assign blame to specific policymakers"
            },
            {
              "id": "b",
              "text": "To transform one-time incidents into reusable safeguards for future designs"
            },
            {
              "id": "c",
              "text": "To prove that climate adaptation is impossible"
            },
            {
              "id": "d",
              "text": "To lower the budget of future projects"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Analyzing failure modes helps identify repeatable patterns of breakdown, allowing teams to build better safeguards."
        },
        {
          "id": "climate-science-201-l06-q3",
          "text": "When setting up a climate simulation, what must be defined before choosing an intervention?",
          "skillId": "climate-science-201-skill-simulation",
          "options": [
            {
              "id": "a",
              "text": "The primary objective and guardrails"
            },
            {
              "id": "b",
              "text": "The exact date the project will finish"
            },
            {
              "id": "c",
              "text": "The media strategy for the project"
            },
            {
              "id": "d",
              "text": "The names of all future stakeholders"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Defining objectives and guardrails ensures the simulation tests the intervention against clear, relevant constraints."
        },
        {
          "id": "climate-science-201-l06-q4",
          "text": "If a climate project experiences 'metric drift' (where indicators no longer reflect true progress), what is the best mitigation?",
          "skillId": "climate-science-201-skill-mitigation",
          "options": [
            {
              "id": "a",
              "text": "Ignore the drift and stick to the original plan"
            },
            {
              "id": "b",
              "text": "Re-baseline the metrics and monitor leading indicators"
            },
            {
              "id": "c",
              "text": "Stop measuring outcomes entirely"
            },
            {
              "id": "d",
              "text": "Increase the budget without changing the metrics"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Re-baselining ensures that the metrics accurately reflect the current reality and guide effective decision-making."
        },
        {
          "id": "climate-science-201-l06-q5",
          "text": "What is the main function of a 'Decision Review Loop' after a simulation round?",
          "skillId": "climate-science-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "To permanently lock in the first strategy tested"
            },
            {
              "id": "b",
              "text": "To check evidence against policy goals and identify actions for improvement"
            },
            {
              "id": "c",
              "text": "To bypass governance and accountability checks"
            },
            {
              "id": "d",
              "text": "To delete data that contradicts the hypothesis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The review loop is a reflective process used to adjust strategies based on evidence and alignment with goals."
        }
      ],
      "imageUrl": "/generated-images/refinery/climate-science-201-l06.png"
    },
    {
      "id": "climate-science-201-l07",
      "title": "Climate Science Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "A diverse group of people sitting around a modern circular table, looking at a glowing map of the world. Warm, collaborative lighting.",
      "conceptVideoPrompt": "A visual journey showing a climate policy document transforming into real-world impacts: a community getting solar panels, a protected wetland, and a town hall meeting. Uplifting and professional.",
      "learningAids": [
        {
          "id": "climate-science-201-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-201-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this section, you will analyze various stakeholders involved in climate policy. You will identify who benefits from certain decisions, who may face risks, and how different policy choices can impact various groups. This analysis is vital for understanding the broader implications of climate policies and ensuring that all voices are considered in decision-making processes."
        },
        {
          "id": "climate-science-201-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "In this concept, we will explore governance mechanisms that are connected to measurable controls. This includes understanding transparency obligations and the pathways for remediation when issues arise. By learning about these governance structures, you will appreciate the importance of accountability in climate policy and how it can lead to more effective and fair outcomes."
        },
        {
          "id": "climate-science-201-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before making any important decisions about deploying a project, it is essential to use a comprehensive checklist. This checklist should include various important factors such as legal requirements, ethical considerations, technical aspects, and the potential impact on users. By carefully reviewing these criteria, we can ensure that our decisions are responsible and beneficial to everyone involved."
        }
      ],
      "flashcards": [
        {
          "id": "climate-science-201-l07-f1",
          "front": "Stakeholder Map",
          "back": "A framework that tracks impact distribution across affected groups."
        },
        {
          "id": "climate-science-201-l07-f2",
          "front": "Accountability Loop",
          "back": "A cycle connecting outcomes, ownership, and corrective action."
        },
        {
          "id": "climate-science-201-l07-f3",
          "front": "Responsible Execution",
          "back": "Delivery practice that balances performance with safety, fairness, and transparency."
        }
      ],
      "imageUrl": "/generated-images/refinery/climate-science-201-l07.png"
    },
    {
      "id": "climate-science-201-l08",
      "title": "Climate Science Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "A beautifully organized digital workspace showing a 'Capstone Charter' document, surrounded by sticky notes, climate models, and a glowing green checkmark.",
      "conceptVideoPrompt": "A fast-paced, inspiring montage of a student assembling a project board, connecting climate data, policy notes, and ethical guidelines with glowing digital threads, culminating in a finalized blueprint.",
      "learningAids": [
        {
          "id": "climate-science-201-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-201-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this activity, you will create a detailed capstone charter. This document will outline the main objectives of your project, identify potential risks, establish metrics for measuring success, and set up governance checkpoints to ensure everything stays on track. This process helps you think critically about your project and plan effectively for its execution."
        },
        {
          "id": "climate-science-201-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "At the conclusion of the lesson, you will receive a defense preparation template. This template will guide you in formulating claims that are supported by evidence, as well as in explaining the reasoning behind any trade-offs you may need to consider. This exercise encourages you to think deeply about your arguments and prepares you for presenting your ideas clearly and convincingly."
        }
      ],
      "interactiveActivities": [
        {
          "id": "climate-science-201-l08-act1",
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
          "id": "climate-science-201-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against cost, risk, and equity critiques.",
          "instructions": [
            "Review the critique presented by the simulator.",
            "Select the strongest piece of evidence from your charter to counter the critique.",
            "Articulate the tradeoff you accepted and why it remains the best path forward."
          ]
        }
      ],
      "imageUrl": "/generated-images/refinery/climate-science-201-l08.png"
    }
  ]
};
