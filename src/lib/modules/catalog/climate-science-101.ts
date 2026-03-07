import type { LearningModule } from "@/lib/modules/types";

export const climate_science_101_Module: LearningModule = {
  "id": "climate-science-101",
  "title": "Climate Science Foundations",
  "description": "Level 101 curriculum in Climate Science, focused on earth energy balance, carbon cycle dynamics, impact attribution, and adaptation strategy, with rigorous scenario analysis and assessment-backed mastery.",
  "subject": "Earth Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "climate",
    "sustainability"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
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
      "id": "climate-science-101-l01",
      "title": "Climate Science Core Concepts",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing, stylized Earth showing energy flows with sunlight entering and heat radiating in vibrant colors, suitable for a modern science textbook, 3D render style.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic 3D animation showing the Earth from space. Bright yellow arrows represent solar energy entering the atmosphere, while red arrows show heat escaping. The camera zooms into a lush green forest to show carbon cycle dynamics with glowing blue particles moving between trees and the air.",
      "learningAids": [
        {
          "id": "climate-science-101-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-101-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "In this lesson, we will establish a shared vocabulary crucial for grasping the core concepts of Climate Science. We will define the specific boundaries that guide our discussions, helping us understand how energy from the Earth interacts with the carbon cycle in our everyday environments. By establishing this foundational language, we will be better equipped to communicate about climate issues and their complexities. This understanding is important for recognizing how different elements of our planet work together and influence each other, ultimately affecting our climate and environment."
        },
        {
          "id": "climate-science-101-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "In this section, learners will explore how to model causal paths, which means understanding how different factors influence each other. We will also identify any hidden assumptions that might affect our understanding. Before suggesting any changes or interventions, we will apply checks to ensure that our ideas are feasible and based on solid reasoning."
        },
        {
          "id": "climate-science-101-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This module introduces a methodical approach that prioritizes evidence. We will learn how to connect each claim we make to observable indicators, which are pieces of information we can see or measure. Additionally, we will discuss the uncertainties that may arise in our findings, helping us to think critically about the information we use."
        }
      ],
      "flashcards": [
        {
          "id": "climate-science-101-l01-f1",
          "front": "Earth energy balance",
          "back": "A core mechanism in Climate Science requiring explicit assumptions and measurable controls regarding incoming and outgoing energy."
        },
        {
          "id": "climate-science-101-l01-f2",
          "front": "Carbon cycle dynamics",
          "back": "The processes and operational practices that track how carbon moves through the Earth's systems."
        },
        {
          "id": "climate-science-101-l01-f3",
          "front": "Impact attribution",
          "back": "The evaluation layer that determines whether specific interventions truly improve climate outcomes."
        }
      ]
    },
    {
      "id": "climate-science-101-l02",
      "title": "Climate Science Methods Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic laboratory desk with holographic displays showing climate data graphs, weather patterns, and a glowing globe, cinematic lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A first-person view of interacting with a high-tech digital dashboard. The user drags and drops different climate variables like temperature and carbon emissions into a sequence, and the screen simulates a fast-forwarded weather effect over a virtual city.",
      "learningAids": [
        {
          "id": "climate-science-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-101-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this engaging interactive lab, students will have the opportunity to design a sequence of methods carefully crafted to enhance their understanding of essential vocabulary, key mechanisms, and fundamental analysis techniques in climate science. Once they have constructed this method sequence, we will challenge each step by testing it under various uncertain conditions. This process will help us ensure that our methods are not only effective but also resilient and dependable in real-world scenarios."
        },
        {
          "id": "climate-science-101-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "To ensure our methods are ready for implementation, we will conduct operational readiness checks. This involves mapping out who is responsible for each part of the process, establishing a schedule for checkpoints, identifying triggers for rolling back decisions, and maintaining evidence logs to track our progress and findings."
        }
      ],
      "interactiveActivities": [
        {
          "id": "climate-science-101-l02-act1",
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
          "id": "climate-science-101-l02-act2",
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
      "imageUrl": "/generated-images/refinery/climate-science-101-l02.png"
    },
    {
      "id": "climate-science-101-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing digital checkpoint gate with a green checkmark, surrounded by floating data points and climate icons like leaves and suns, sleek modern design.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced montage of climate scientists in the field and at computers, transitioning into a digital quiz interface that highlights correct answers with a satisfying green glow.",
      "learningAids": [
        {
          "id": "climate-science-101-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "climate-science-101-l03-q1",
          "text": "Which practice most strengthens earth energy balance models in real deployments?",
          "skillId": "climate-science-101-skill-risk",
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
          "explanation": "Explicit failure criteria and leading indicators improve early detection and response to imbalances."
        },
        {
          "id": "climate-science-101-l03-q2",
          "text": "At level 101, Climate Science work should prioritize:",
          "skillId": "climate-science-101-skill-level",
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
          "explanation": "The 101 sequence is designed around foundational vocabulary, core mechanisms, and baseline analysis to build a strong base."
        },
        {
          "id": "climate-science-101-l03-q3",
          "text": "What is the strongest indicator of healthy carbon cycle dynamics management?",
          "skillId": "climate-science-101-skill-ops",
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
          "explanation": "Stable systems require clear ownership, decision cadence, and measurable controls to track carbon effectively."
        },
        {
          "id": "climate-science-101-l03-q4",
          "text": "When improving impact attribution, which approach is most defensible?",
          "skillId": "climate-science-101-skill-eval",
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
          "id": "climate-science-101-l03-q5",
          "text": "A mature adaptation strategy should include:",
          "skillId": "climate-science-101-skill-governance",
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
      "imageUrl": "/generated-images/refinery/climate-science-101-l03.png"
    },
    {
      "id": "climate-science-101-l04",
      "title": "Climate Science Case Analysis",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A split-screen illustration of a coastal city. One side shows a sunny, resilient city with seawalls and green roofs; the other side shows a stormy, flooded street. High contrast, educational style.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A time-lapse animation of a coastal city facing rising sea levels. The scene pauses, and a digital 'Tradeoff Matrix' appears on screen, highlighting different choices like building seawalls or relocating. The city transforms based on the selected choice.",
      "learningAids": [
        {
          "id": "climate-science-101-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-101-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "In this engaging case study, we will explore a coastal city that is working hard to find the right balance between two important goals: reducing the impacts of climate change and preparing for challenges like extreme heat and flooding. As we dive into this analysis, you will have the opportunity to practice critical thinking skills by distinguishing between solid evidence and personal assumptions. Additionally, you will identify high-stakes risks that could lead to serious consequences for the city's residents and environment. This exercise will help you understand the complexities of climate policy and the importance of informed decision-making in the face of climate challenges."
        },
        {
          "id": "climate-science-101-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "In this section, we will create a decision tradeoff matrix. This tool helps us evaluate different alternatives based on various criteria such as performance, reliability, cost, and fairness. By scoring each option, we can make informed decisions about which intervention path to take."
        },
        {
          "id": "climate-science-101-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "We will categorize different patterns of failure to learn from past mistakes. By analyzing these failure modes, we can transform isolated incidents into valuable lessons that inform our future designs and strategies, helping us to create safeguards that prevent similar issues from occurring again."
        }
      ],
      "flashcards": [
        {
          "id": "climate-science-101-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured way to compare options across competing priorities before choosing an intervention."
        },
        {
          "id": "climate-science-101-l04-f2",
          "front": "Failure mode",
          "back": "A repeatable pattern describing how systems break under real constraints."
        },
        {
          "id": "climate-science-101-l04-f3",
          "front": "Escalation threshold",
          "back": "A predefined condition that triggers higher-level review or corrective action."
        }
      ],
      "imageUrl": "/generated-images/refinery/climate-science-101-l04.png"
    },
    {
      "id": "climate-science-101-l05",
      "title": "Climate Science Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "Imagen 4 prompt: A top-down view of a glowing, interactive map of a region on a digital table, with various sliders and buttons controlling environmental factors, cyberpunk meets eco-tech.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A simulation interface running a climate model. The user adjusts a slider for 'Carbon Taxes', and the virtual world responds with cleaner air but changing economic indicators. A 'Decision Review Loop' graphic circles the screen.",
      "learningAids": [
        {
          "id": "climate-science-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-101-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive simulation studio, learners will have the opportunity to create and configure a scenario model. This model will include specific assumptions about uncertainties that may arise in climate science. Additionally, learners will define success metrics that are directly related to the adaptation strategies they choose to explore. This hands-on experience is designed to immerse learners in real-world challenges, helping them understand the complexities of climate science and the importance of making informed decisions. By engaging in this simulation, learners will develop critical thinking skills and gain insights into how different strategies can impact our environment and communities."
        },
        {
          "id": "climate-science-101-l05-c2",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, we will conduct a review of the evidence gathered during the simulation. This will include checking for alignment with our policy goals and identifying actions for improvement. This iterative process helps us refine our strategies and make better decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "climate-science-101-l05-act1",
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
          "id": "climate-science-101-l05-act2",
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
      "imageUrl": "/generated-images/refinery/climate-science-101-l05.png"
    },
    {
      "id": "climate-science-101-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A stylized glowing brain made of interconnected nodes, with climate symbols like water drops, leaves, and suns at the intersections, representing complex decision-making.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic visual of a balancing scale. On one side, a glowing city; on the other, a lush forest. The scale tips back and forth as different policy weights are added, ending with a perfect balance.",
      "learningAids": [
        {
          "id": "climate-science-101-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "climate-science-101-l06-q1",
          "text": "What is the primary purpose of a decision tradeoff matrix in climate policy?",
          "skillId": "climate-science-101-skill-tradeoffs",
          "options": [
            {
              "id": "a",
              "text": "To guarantee that all stakeholders are perfectly happy"
            },
            {
              "id": "b",
              "text": "To compare options across competing priorities before choosing an intervention"
            },
            {
              "id": "c",
              "text": "To eliminate the need for any future policy adjustments"
            },
            {
              "id": "d",
              "text": "To hide the financial costs of an environmental project"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured way to evaluate alternatives based on criteria like cost, reliability, and fairness."
        },
        {
          "id": "climate-science-101-l06-q2",
          "text": "How should a climate scientist utilize a 'failure mode'?",
          "skillId": "climate-science-101-skill-failure-analysis",
          "options": [
            {
              "id": "a",
              "text": "As a repeatable pattern to learn how systems break and to design better safeguards"
            },
            {
              "id": "b",
              "text": "As a reason to abandon a climate adaptation project entirely"
            },
            {
              "id": "c",
              "text": "As a secret metric that should not be shared with the public"
            },
            {
              "id": "d",
              "text": "As proof that climate modeling is inherently flawed"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Analyzing failure modes transforms isolated incidents into valuable lessons that inform future designs and safeguards."
        },
        {
          "id": "climate-science-101-l06-q3",
          "text": "During a policy simulation, why is it important to define guardrails before choosing an intervention?",
          "skillId": "climate-science-101-skill-simulation",
          "options": [
            {
              "id": "a",
              "text": "To ensure the simulation runs faster on the computer"
            },
            {
              "id": "b",
              "text": "To ensure the chosen strategy does not violate critical safety or ethical boundaries"
            },
            {
              "id": "c",
              "text": "To limit the number of people who can participate in the simulation"
            },
            {
              "id": "d",
              "text": "To make the simulation graphics look more realistic"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Guardrails define the absolute limits of acceptable outcomes, ensuring interventions remain safe and ethical."
        },
        {
          "id": "climate-science-101-l06-q4",
          "text": "If a climate adaptation strategy experiences 'metric drift', what is the strongest mitigation response?",
          "skillId": "climate-science-101-skill-mitigation",
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
              "text": "Fire the team responsible for the metrics"
            },
            {
              "id": "d",
              "text": "Stop measuring the outcomes altogether"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Re-baselining and monitoring leading indicators corrects the drift and restores the accuracy of the measurement."
        },
        {
          "id": "climate-science-101-l06-q5",
          "text": "What is the main goal of the Decision Review Loop at the end of a simulation round?",
          "skillId": "climate-science-101-skill-review",
          "options": [
            {
              "id": "a",
              "text": "To evaluate evidence against policy goals and identify actions for improvement"
            },
            {
              "id": "b",
              "text": "To assign blame for any negative outcomes in the simulation"
            },
            {
              "id": "c",
              "text": "To permanently lock in the first decision made"
            },
            {
              "id": "d",
              "text": "To delete the simulation data to save storage space"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The review loop is an iterative process that helps refine strategies and make better decisions based on gathered evidence."
        }
      ],
      "imageUrl": "/generated-images/refinery/climate-science-101-l06.png"
    },
    {
      "id": "climate-science-101-l07",
      "title": "Climate Science Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A diverse group of people standing around a glowing, transparent Earth, holding hands. Soft, warm lighting, symbolizing global cooperation and ethics.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animated infographic showing a 'Stakeholder Map'. Lines connect a central climate policy to different groups of people like farmers, city dwellers, and factory workers, with icons showing positive and negative impacts.",
      "learningAids": [
        {
          "id": "climate-science-101-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-101-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this lesson, learners will analyze the various stakeholders involved in climate policy. We will identify who benefits from certain policies, who may face risks, and how different policy choices can impact various groups within society. Understanding these dynamics is crucial for making equitable decisions."
        },
        {
          "id": "climate-science-101-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "We will explore governance and accountability in climate science. This involves linking governance mechanisms to measurable controls, ensuring transparency in decision-making, and establishing pathways for remediation when issues arise. These elements are essential for building trust and ensuring responsible management of climate policies."
        },
        {
          "id": "climate-science-101-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before making important decisions about climate science projects, it's essential to use a comprehensive checklist. This checklist should include various criteria such as legal requirements, ethical considerations, technical aspects, and the potential impact on users. By carefully evaluating these factors, we can ensure that our actions are responsible and beneficial to society."
        }
      ],
      "flashcards": [
        {
          "id": "climate-science-101-l07-f1",
          "front": "Stakeholder map",
          "back": "A framework that tracks impact distribution across affected groups."
        },
        {
          "id": "climate-science-101-l07-f2",
          "front": "Accountability loop",
          "back": "A cycle connecting outcomes, ownership, and corrective action."
        },
        {
          "id": "climate-science-101-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery practice that balances performance with safety, fairness, and transparency."
        }
      ],
      "imageUrl": "/generated-images/refinery/climate-science-101-l07.png"
    },
    {
      "id": "climate-science-101-l08",
      "title": "Climate Science Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A blueprint of a sustainable city overlaid with digital charts, a compass, and a glowing target symbol, representing planning and goals.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic zoom out from a single written 'Capstone Charter' document on a desk, revealing a massive, thriving eco-city outside the window, symbolizing the real-world impact of good planning.",
      "learningAids": [
        {
          "id": "climate-science-101-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-101-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this activity, students will create a detailed capstone charter. This document will outline the main objectives of their project, identify potential risks they might face, establish metrics for measuring success, and set up governance checkpoints to ensure everything stays on track. This process helps students think critically about their projects and plan effectively."
        },
        {
          "id": "climate-science-101-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "At the conclusion of the lesson, students will receive a defense template. This template is designed to help them prepare for presenting their projects. It will require them to support their claims with evidence and to clearly explain any trade-offs they considered during their planning. This exercise encourages thoughtful reasoning and effective communication skills."
        }
      ],
      "interactiveActivities": [
        {
          "id": "climate-science-101-l08-act1",
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
          "id": "climate-science-101-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against cost, risk, and equity critiques."
        }
      ],
      "imageUrl": "/generated-images/refinery/climate-science-101-l08.png"
    }
  ]
};
