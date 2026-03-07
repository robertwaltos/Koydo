import type { LearningModule } from "@/lib/modules/types";

export const climate_science_301_Module: LearningModule = {
  "id": "climate-science-301",
  "title": "Climate Science Systems and Governance",
  "description": "Level 301 curriculum in Climate Science, focused on earth energy balance, carbon cycle dynamics, impact attribution, and adaptation strategy, with rigorous scenario analysis and assessment-backed mastery.",
  "subject": "Earth Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "climate",
    "sustainability"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
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
      "id": "climate-science-301-l01",
      "title": "Climate Science Core Concepts",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A photorealistic split-screen image showing a glowing Earth with energy arrows representing solar radiation entering and infrared escaping on one side, and a lush forest absorbing carbon on the other. Cinematic lighting, 8k resolution.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic 3D animation zooming into the Earth's atmosphere, visualizing invisible greenhouse gases trapping heat, transitioning to a glowing network of carbon moving between oceans, forests, and the atmosphere. High-end documentary style.",
      "learningAids": [
        {
          "id": "climate-science-301-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-301-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "In this lesson, we will build a shared vocabulary to enhance our understanding of Climate Science. We will clearly define the boundaries that guide our study of climate systems, which is crucial for grasping the complexities of this field. Additionally, we will investigate how the balance of energy on Earth interacts with the carbon cycle. By mapping these interactions, we will gain insights into how they manifest in real-world environments, recognizing the challenges posed by climate change to our planet and communities."
        },
        {
          "id": "climate-science-301-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "Students will learn how to model causal paths, which are the connections between different factors in climate systems. You will also identify hidden assumptions that might affect your understanding. Before suggesting any changes or interventions, you will apply checks to ensure that these constraints are considered, helping you to think critically about the implications of your proposals."
        },
        {
          "id": "climate-science-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This module introduces a workflow that prioritizes evidence in our understanding of climate science. Each claim made will be linked to observable indicators, which are measurable signs that support our statements. Additionally, we will discuss the concept of uncertainty, acknowledging that not all outcomes can be predicted with complete confidence. This approach helps us build a more reliable understanding of climate issues."
        }
      ],
      "flashcards": [
        {
          "id": "climate-science-301-l01-f1",
          "front": "Earth energy balance",
          "back": "A core mechanism in Climate Science requiring explicit assumptions and measurable controls regarding incoming and outgoing radiation."
        },
        {
          "id": "climate-science-301-l01-f2",
          "front": "Carbon cycle dynamics",
          "back": "The operational pathways through which carbon is exchanged between the biosphere, pedosphere, geosphere, hydrosphere, and atmosphere."
        },
        {
          "id": "climate-science-301-l01-f3",
          "front": "Impact attribution",
          "back": "The evaluation layer that determines whether specific interventions or events truly caused observed climate outcomes."
        }
      ],
      "imageUrl": "/generated-images/refinery/climate-science-301-l01.png"
    },
    {
      "id": "climate-science-301-l02",
      "title": "Climate Science Methods Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A modern, high-tech laboratory desk with holographic displays showing climate data graphs, trade-off matrices, and global maps. Sleek, futuristic, educational aesthetic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A time-lapse of a digital dashboard adjusting climate variables. As sliders for 'emissions' and 'mitigation' move, a simulated city in the background adapts, showing sea walls rising and green roofs growing. Clean, UI-focused animation.",
      "learningAids": [
        {
          "id": "climate-science-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-301-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this interactive lab, learners will construct a sequence of methods optimized for making trade-offs in climate systems. You will consider various metrics and how these decisions impact governance. After building your method sequence, you will stress-test each step to see how it holds up under uncertain conditions, ensuring that your approach is robust and adaptable."
        },
        {
          "id": "climate-science-301-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "We will assess the readiness of our methods by mapping out who is responsible for each part of the process. We will establish a cadence for checkpoints to ensure everything is on track, identify triggers for rolling back decisions if necessary, and maintain evidence logs to document our findings. This thorough approach helps ensure that our methods are prepared for real-world application."
        }
      ],
      "interactiveActivities": [
        {
          "id": "climate-science-301-l02-act1",
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
          "id": "climate-science-301-l02-act2",
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
      "imageUrl": "/generated-images/refinery/climate-science-301-l02.png"
    },
    {
      "id": "climate-science-301-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing digital checkpoint gate in a futuristic data center, with climate models floating in the background. Cinematic, neon blue and green lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced montage of climate scientists analyzing data on large screens, intercut with satellite footage of Earth, ending on a glowing question mark over a digital globe.",
      "learningAids": [
        {
          "id": "climate-science-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "climate-science-301-l03-q1",
          "text": "Which practice most strengthens earth energy balance models in real deployments?",
          "skillId": "climate-science-301-skill-risk",
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
          "explanation": "Explicit failure criteria and leading indicators improve early detection and response, ensuring models remain accurate."
        },
        {
          "id": "climate-science-301-l03-q2",
          "text": "At level 301, Climate Science work should prioritize:",
          "skillId": "climate-science-301-skill-level",
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
          "explanation": "Advanced climate science requires balancing complex system tradeoffs, designing robust metrics, and implementing strong governance."
        },
        {
          "id": "climate-science-301-l03-q3",
          "text": "What is the strongest indicator of healthy carbon cycle dynamics management?",
          "skillId": "climate-science-301-skill-ops",
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
          "explanation": "Stable systems require clear ownership, a reliable decision cadence, and measurable controls to track carbon flows accurately."
        },
        {
          "id": "climate-science-301-l03-q4",
          "text": "When improving impact attribution, which approach is most defensible?",
          "skillId": "climate-science-301-skill-eval",
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
          "explanation": "Baselines and failure analysis reduce bias and reveal true system performance, making attribution claims defensible."
        },
        {
          "id": "climate-science-301-l03-q5",
          "text": "A mature adaptation strategy should include:",
          "skillId": "climate-science-301-skill-governance",
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
          "explanation": "Effective governance connects policy intent to measurement and response action, ensuring adaptation strategies can scale safely."
        }
      ],
      "imageUrl": "/generated-images/refinery/climate-science-301-l03.png"
    },
    {
      "id": "climate-science-301-l04",
      "title": "Climate Science Case Analysis",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: An aerial view of a coastal city with a massive, modern sea wall. Half the city is bathed in warm sunlight, the other half shows storm clouds, illustrating climate adaptation stakes. Photorealistic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic drone shot flying over a coastal metropolis, transitioning into a digital twin of the city where flood zones are highlighted in red and cooling green spaces in green. Documentary style.",
      "learningAids": [
        {
          "id": "climate-science-301-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-301-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "In this engaging case study, we will delve into the challenges faced by a coastal city striving to find a balance between implementing effective policies to mitigate climate change impacts and developing strategies to adapt to increasing risks of heatwaves and flooding. Learners will critically separate factual evidence from assumptions and pinpoint high-stakes risks that could significantly influence the city's future. This exercise enhances our understanding of the intricate decision-making processes involved in addressing climate-related issues."
        },
        {
          "id": "climate-science-301-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "We will create a decision tradeoff matrix where different alternatives are evaluated based on their performance, reliability, cost, and implications for equity. By scoring these alternatives, you will be better equipped to select the most effective intervention path. This structured approach helps ensure that decisions are made thoughtfully and with consideration for all stakeholders involved."
        },
        {
          "id": "climate-science-301-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "We will categorize patterns of failure that have occurred in past climate interventions. By analyzing these failure modes, we can learn valuable lessons that will help us convert one-time incidents into reusable design safeguards. This proactive approach allows us to improve future strategies and avoid repeating costly mistakes."
        }
      ],
      "flashcards": [
        {
          "id": "climate-science-301-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured way to compare options across competing priorities before choosing an intervention."
        },
        {
          "id": "climate-science-301-l04-f2",
          "front": "Failure mode",
          "back": "A repeatable pattern describing how systems break under real constraints."
        },
        {
          "id": "climate-science-301-l04-f3",
          "front": "Escalation threshold",
          "back": "A predefined condition that triggers higher-level review or corrective action."
        }
      ],
      "imageUrl": "/generated-images/refinery/climate-science-301-l04.png"
    },
    {
      "id": "climate-science-301-l05",
      "title": "Climate Science Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing interactive tabletop map of a region, with digital markers for policy decisions, wind turbines, and flood defenses. People's hands are visible adjusting the markers. High-tech, collaborative.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A top-down view of a simulated landscape evolving rapidly. Forests grow, cities expand, and weather patterns shift dynamically based on invisible user inputs. Fast-paced, engaging simulation style.",
      "learningAids": [
        {
          "id": "climate-science-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-301-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive session, learners will set up a simulation scenario that includes clear assumptions about uncertainties and metrics for success related to their adaptation strategies. By configuring these elements, you will gain insights into how different factors can influence outcomes in climate scenarios, enhancing your understanding of the complexities involved in real-world deployment."
        },
        {
          "id": "climate-science-301-l05-c2",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, we will conduct a review of the evidence gathered. This includes checking for alignment with policy goals and identifying actions for improvement. This iterative process helps learners refine their strategies and ensures that they are making informed decisions based on the latest simulated data."
        }
      ],
      "interactiveActivities": [
        {
          "id": "climate-science-301-l05-act1",
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
          "id": "climate-science-301-l05-act2",
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
      "imageUrl": "/generated-images/refinery/climate-science-301-l05.png"
    },
    {
      "id": "climate-science-301-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic digital dashboard displaying multiple climate scenarios, with a large glowing checkmark indicating a successful decision pathway. High contrast, cinematic lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced sequence showing a split screen of different climate policy choices and their immediate environmental impacts, resolving into a unified, balanced ecosystem.",
      "learningAids": [
        {
          "id": "climate-science-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "climate-science-301-l06-q1",
          "text": "What is the primary purpose of a decision tradeoff matrix in climate adaptation?",
          "skillId": "climate-science-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To systematically compare options across competing priorities like cost, reliability, and equity"
            },
            {
              "id": "b",
              "text": "To eliminate all risks associated with a climate intervention"
            },
            {
              "id": "c",
              "text": "To guarantee that the cheapest option is always selected"
            },
            {
              "id": "d",
              "text": "To bypass stakeholder input during the planning phase"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A tradeoff matrix provides a structured way to evaluate and score alternatives against multiple competing priorities."
        },
        {
          "id": "climate-science-301-l06-q2",
          "text": "In climate intervention design, what is a 'failure mode'?",
          "skillId": "climate-science-301-skill-risk",
          "options": [
            {
              "id": "a",
              "text": "A successful policy that exceeded expectations"
            },
            {
              "id": "b",
              "text": "A repeatable pattern describing how systems break under real-world constraints"
            },
            {
              "id": "c",
              "text": "A metric used to measure carbon output"
            },
            {
              "id": "d",
              "text": "An unpredictable event that cannot be planned for"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Failure modes are recognizable patterns of system breakdown that can be analyzed to create reusable design safeguards."
        },
        {
          "id": "climate-science-301-l06-q3",
          "text": "During a policy simulation, why is it critical to establish guardrails before choosing an intervention?",
          "skillId": "climate-science-301-skill-ops",
          "options": [
            {
              "id": "a",
              "text": "To ensure the simulation runs faster"
            },
            {
              "id": "b",
              "text": "To define unacceptable outcomes and ensure the intervention remains within safe operational limits"
            },
            {
              "id": "c",
              "text": "To prevent any changes to the baseline data"
            },
            {
              "id": "d",
              "text": "To limit the number of stakeholders involved"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Guardrails define the boundaries of safe operation, preventing interventions from causing unintended catastrophic impacts."
        },
        {
          "id": "climate-science-301-l06-q4",
          "text": "What is the most effective way to address 'policy ambiguity' during a climate project deployment?",
          "skillId": "climate-science-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Ignore the ambiguity and proceed with deployment"
            },
            {
              "id": "b",
              "text": "Define clear decision authority and escalation rules"
            },
            {
              "id": "c",
              "text": "Re-baseline the environmental metrics"
            },
            {
              "id": "d",
              "text": "Introduce quality contracts for data streams"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Clear decision authority and escalation rules resolve ambiguity by ensuring everyone knows who makes the final call and how to handle disputes."
        },
        {
          "id": "climate-science-301-l06-q5",
          "text": "Why is a 'decision review loop' essential at the end of a simulation round?",
          "skillId": "climate-science-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "It aligns gathered evidence with policy goals and identifies necessary iterative improvements"
            },
            {
              "id": "b",
              "text": "It permanently locks in the chosen strategy without further changes"
            },
            {
              "id": "c",
              "text": "It is a legal requirement for all climate models"
            },
            {
              "id": "d",
              "text": "It automatically generates funding for the next phase"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Review loops allow teams to evaluate evidence against goals, enabling continuous refinement and better decision-making."
        }
      ]
    },
    {
      "id": "climate-science-301-l07",
      "title": "Climate Science Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A diverse group of community members and policymakers sitting around a circular table, looking at a glowing 3D projection of their local ecosystem. Warm, collaborative, hopeful lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A smooth camera pan across a split scene: on the left, a corporate boardroom discussing policy; on the right, a community planting trees. The two scenes merge into a balanced, thriving green city. Inspiring, high-quality.",
      "learningAids": [
        {
          "id": "climate-science-301-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this part of the lesson, learners will analyze the various stakeholders involved in climate policy. You will identify who benefits from certain policies, who might bear the risks, and how different policy choices can shape outcomes for various groups. This understanding is crucial for developing equitable and effective climate solutions."
        },
        {
          "id": "climate-science-301-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "We will explore how governance mechanisms are connected to measurable controls, obligations for transparency, and pathways for remediation. Understanding these links is essential for ensuring accountability in climate policy and for fostering trust among stakeholders. This knowledge empowers you to advocate for responsible governance in climate action."
        },
        {
          "id": "climate-science-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before making any decisions about deploying a project, it is important to complete a final checklist. This checklist should include important factors such as legal requirements, ethical considerations, technical aspects, and the potential impact on users. By carefully reviewing these criteria, we can ensure that our decisions are responsible and beneficial for everyone involved."
        }
      ],
      "flashcards": [
        {
          "id": "climate-science-301-l07-f1",
          "front": "Stakeholder map",
          "back": "A framework that tracks impact distribution across affected groups."
        },
        {
          "id": "climate-science-301-l07-f2",
          "front": "Accountability loop",
          "back": "A cycle connecting outcomes, ownership, and corrective action."
        },
        {
          "id": "climate-science-301-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery practice that balances performance with safety, fairness, and transparency."
        }
      ],
      "imageUrl": "/generated-images/refinery/climate-science-301-l07.png"
    },
    {
      "id": "climate-science-301-l08",
      "title": "Climate Science Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A digital blueprint of a sustainable city overlaid with charts, metrics, and governance checkpoints. A glowing 'Approved' stamp hovers above it. Professional, architectural style.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic sequence showing a blank canvas filling up with interconnected nodes representing climate policies, risk mitigations, and success metrics, forming a complete, glowing capstone charter.",
      "learningAids": [
        {
          "id": "climate-science-301-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this activity, learners will create a detailed capstone charter. This document will outline the main objectives of the project, identify potential risks, establish metrics for measuring success, and set governance checkpoints to ensure everything stays on track. This process helps you think critically about your projects and prepares you for real-world challenges."
        },
        {
          "id": "climate-science-301-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "At the conclusion of this lesson, you will receive a defense preparation template. This template is designed to help you articulate your claims with supporting evidence and to clearly explain any trade-offs involved in your decisions. This exercise encourages critical thinking and helps you prepare for presenting your ideas effectively to stakeholders."
        }
      ],
      "interactiveActivities": [
        {
          "id": "climate-science-301-l08-act1",
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
          "id": "climate-science-301-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against cost, risk, and equity critiques."
        }
      ],
      "imageUrl": "/generated-images/refinery/climate-science-301-l08.png"
    }
  ]
};
