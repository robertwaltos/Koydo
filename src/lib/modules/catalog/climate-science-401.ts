import type { LearningModule } from "@/lib/modules/types";

export const climate_science_401_Module: LearningModule = {
  "id": "climate-science-401",
  "title": "Climate Science Leadership and Capstone",
  "description": "Level 401 curriculum in Climate Science, focused on earth energy balance, carbon cycle dynamics, impact attribution, and adaptation strategy, with rigorous scenario analysis and assessment-backed mastery.",
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
      "id": "climate-science-401-l01",
      "title": "Climate Science Core Concepts",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "A high-tech climate science laboratory with glowing holographic globes showing earth energy balance and carbon cycle dynamics, photorealistic, cinematic lighting.",
      "conceptVideoPrompt": "A cinematic 3D animation showing the Earth's energy balance, with glowing arrows representing solar radiation entering and infrared radiation leaving, transitioning into a network of carbon cycle pathways across forests and oceans.",
      "learningAids": [
        {
          "id": "climate-science-401-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-401-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "In this lesson, we will build a shared vocabulary to understand the critical concepts in advanced Climate Science. We will define the specific boundaries within which we will focus our studies, allowing us to clearly see how Earth's energy balance interacts with the carbon cycle. By mapping these interactions, we can observe how they occur in real-world environments. Understanding these connections is essential for grasping the complexities of climate science and recognizing the systemic impact of human activities on our planet."
        },
        {
          "id": "climate-science-401-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "Learners will explore how to model causal paths by identifying the connections between different environmental factors and understanding how they influence each other. We will actively look for hidden assumptions that might skew our understanding and apply rigorous checks for constraints. This analytical process is essential before we can responsibly suggest any interventions to address climate-related issues."
        },
        {
          "id": "climate-science-401-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This module introduces a methodical approach that prioritizes empirical evidence. We will learn how to connect each scientific claim we make to observable indicators—pieces of evidence we can accurately see or measure. Additionally, we will quantify the uncertainties that come with our claims, ensuring that our models are prepared for different outcomes and future scenarios."
        }
      ],
      "flashcards": [
        {
          "id": "climate-science-401-l01-f1",
          "front": "Earth Energy Balance",
          "back": "A core mechanism in Climate Science requiring explicit assumptions and measurable controls regarding incoming and outgoing radiation."
        },
        {
          "id": "climate-science-401-l01-f2",
          "front": "Carbon Cycle Dynamics",
          "back": "The complex operational pathways through which carbon is exchanged between the biosphere, pedosphere, geosphere, hydrosphere, and atmosphere."
        },
        {
          "id": "climate-science-401-l01-f3",
          "front": "Impact Attribution",
          "back": "The evaluation layer that determines whether specific interventions or events truly drive observed climate outcomes."
        }
      ],
      "imageUrl": "/generated-images/refinery/climate-science-401-l01.png"
    },
    {
      "id": "climate-science-401-l02",
      "title": "Climate Science Methods Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "A diverse group of scientists and policymakers collaborating around a large interactive digital table displaying climate models and operational readiness checklists, modern office setting.",
      "conceptVideoPrompt": "A dynamic visual flowchart building itself on a digital canvas, showing method sequence construction, stress-testing under uncertainty, and operational readiness checks with green checkmarks appearing.",
      "learningAids": [
        {
          "id": "climate-science-401-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-401-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this interactive lab, learners will construct a sequence of methods designed to enhance strategic leadership and ensure cross-functional teams work seamlessly together. This sequence will prepare you for a capstone defense where you will present your findings. Each step of the method will be stress-tested under conditions of high uncertainty to ensure its robustness and real-world effectiveness."
        },
        {
          "id": "climate-science-401-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "To ensure our methods are ready for implementation, we will conduct operational readiness checks. This involves mapping out who is responsible for each part of the process, establishing a schedule for regular checkpoints, identifying triggers for rolling back decisions if necessary, and maintaining strict evidence logs to track our progress and findings."
        }
      ],
      "interactiveActivities": [
        {
          "id": "climate-science-401-l02-act1",
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
          "id": "climate-science-401-l02-act2",
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
      "imageUrl": "/generated-images/refinery/climate-science-401-l02.png"
    },
    {
      "id": "climate-science-401-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A sleek digital tablet displaying a climate science quiz with a glowing checkmark, resting on a wooden desk next to a potted plant and a cup of coffee.",
      "conceptVideoPrompt": "A fast-paced montage of climate data dashboards, satellite imagery, and scientists analyzing data, ending with a glowing question mark morphing into a lightbulb.",
      "learningAids": [
        {
          "id": "climate-science-401-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "climate-science-401-l03-q1",
          "text": "Which practice most strengthens earth energy balance models in real deployments?",
          "skillId": "climate-science-401-skill-risk",
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
          "explanation": "Explicit failure criteria and leading indicators improve early detection and response, ensuring the model remains accurate under changing conditions."
        },
        {
          "id": "climate-science-401-l03-q2",
          "text": "At level 401, Climate Science work should prioritize:",
          "skillId": "climate-science-401-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Strategic leadership, cross-functional alignment, and capstone defense"
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
          "explanation": "The 401 sequence is designed around strategic leadership, cross-functional alignment, and capstone defense to prepare learners for real-world policy implementation."
        },
        {
          "id": "climate-science-401-l03-q3",
          "text": "What is the strongest indicator of healthy carbon cycle dynamics management?",
          "skillId": "climate-science-401-skill-ops",
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
          "explanation": "Stable systems require clear ownership, decision cadence, and measurable controls to ensure interventions are effective and accountable."
        },
        {
          "id": "climate-science-401-l03-q4",
          "text": "When improving impact attribution, which approach is most defensible?",
          "skillId": "climate-science-401-skill-eval",
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
          "explanation": "Baselines and failure analysis reduce bias and reveal true system performance, making the attribution of impact scientifically defensible."
        },
        {
          "id": "climate-science-401-l03-q5",
          "text": "A mature adaptation strategy should include:",
          "skillId": "climate-science-401-skill-governance",
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
          "explanation": "Effective governance connects policy intent to measurement and response action, ensuring that strategies adapt to new data and challenges."
        }
      ],
      "imageUrl": "/generated-images/refinery/climate-science-401-l03.png"
    },
    {
      "id": "climate-science-401-l04",
      "title": "Climate Science Case Analysis",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "An aerial view of a futuristic coastal city with advanced flood barriers and green roofs, demonstrating climate adaptation strategies, photorealistic.",
      "conceptVideoPrompt": "A time-lapse animation of a coastal city implementing climate adaptation strategies, showing the construction of sea walls and green infrastructure, with a split screen comparing successful and failed interventions.",
      "learningAids": [
        {
          "id": "climate-science-401-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-401-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "In this engaging case study, we will explore a coastal city working hard to find a balance between two important goals: reducing the impacts of climate change and preparing for immediate challenges like extreme heat and flooding. As we dive into this analysis, learners will be tasked with carefully distinguishing between solid evidence and assumptions that may not be accurate. Identifying the significant risks that could arise from these decisions is crucial for creating effective climate policies that protect our communities."
        },
        {
          "id": "climate-science-401-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "In this section, we will create a decision tradeoff matrix. This tool helps us evaluate different alternatives based on several important criteria, including performance, reliability, cost, and fairness. By scoring each alternative systematically, we can make informed, defensible decisions about which intervention path to take when resources are limited."
        },
        {
          "id": "climate-science-401-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "We will categorize patterns of failure to learn from past mistakes in climate interventions. By analyzing these failure modes, we can transform isolated incidents into valuable lessons used to create robust design safeguards. This proactive approach ensures we improve our methodologies and prevent similar catastrophic issues in the future."
        }
      ],
      "flashcards": [
        {
          "id": "climate-science-401-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured way to compare options across competing priorities before choosing an intervention."
        },
        {
          "id": "climate-science-401-l04-f2",
          "front": "Failure Mode",
          "back": "A repeatable pattern describing how systems break under real constraints."
        },
        {
          "id": "climate-science-401-l04-f3",
          "front": "Escalation Threshold",
          "back": "A predefined condition that triggers higher-level review or corrective action."
        }
      ]
    },
    {
      "id": "climate-science-401-l05",
      "title": "Climate Science Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "A computer screen showing a complex climate simulation interface with various sliders, graphs, and a 3D map of a region, highly detailed.",
      "conceptVideoPrompt": "A screen-capture style animation of a climate simulation software, where a user adjusts policy sliders and the resulting changes in temperature and carbon emissions are visualized on a global map.",
      "learningAids": [
        {
          "id": "climate-science-401-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-401-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive simulation studio, learners will create and configure their own scenario models. This model will incorporate specific assumptions about uncertainties—important factors that can drastically influence climate outcomes. Additionally, learners will define success metrics directly related to their chosen adaptation strategies. This setup is essential for grasping how various variables impact the results of different climate scenarios."
        },
        {
          "id": "climate-science-401-l05-c2",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, we will conduct a rigorous review of the evidence gathered. This includes checking for alignment with our initial policy goals and identifying actionable areas for improvement. This iterative review process is essential for refining our strategies and ensuring they remain effective under shifting environmental conditions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "climate-science-401-l05-act1",
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
          "id": "climate-science-401-l05-act2",
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
      "imageUrl": "/generated-images/refinery/climate-science-401-l05.png"
    },
    {
      "id": "climate-science-401-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing digital brain composed of climate data nodes and decision trees, symbolizing complex systems thinking and decision-making in climate science.",
      "conceptVideoPrompt": "An abstract visualization of a decision tree expanding, with each branch representing a different climate policy choice, leading to various simulated outcomes shown as miniature Earths.",
      "learningAids": [
        {
          "id": "climate-science-401-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "climate-science-401-l06-q1",
          "text": "When utilizing a decision tradeoff matrix in climate policy, what is the primary objective?",
          "skillId": "climate-science-401-skill-tradeoffs",
          "options": [
            {
              "id": "a",
              "text": "To systematically evaluate alternatives across competing priorities like cost, reliability, and fairness"
            },
            {
              "id": "b",
              "text": "To ensure the cheapest option is always selected regardless of impact"
            },
            {
              "id": "c",
              "text": "To eliminate the need for stakeholder input"
            },
            {
              "id": "d",
              "text": "To focus entirely on a single performance metric"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A tradeoff matrix allows decision-makers to balance multiple competing priorities systematically, ensuring a holistic evaluation of interventions."
        },
        {
          "id": "climate-science-401-l06-q2",
          "text": "Why is analyzing failure modes critical in climate adaptation planning?",
          "skillId": "climate-science-401-skill-risk",
          "options": [
            {
              "id": "a",
              "text": "It assigns blame to specific individuals or teams"
            },
            {
              "id": "b",
              "text": "It transforms isolated incidents into repeatable patterns, allowing for the creation of robust design safeguards"
            },
            {
              "id": "c",
              "text": "It guarantees that future interventions will never fail"
            },
            {
              "id": "d",
              "text": "It allows policymakers to ignore minor defects"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Understanding failure modes helps identify systemic vulnerabilities, enabling the design of safeguards that prevent similar failures in the future."
        },
        {
          "id": "climate-science-401-l06-q3",
          "text": "In a climate simulation model, how should uncertainties be handled?",
          "skillId": "climate-science-401-skill-simulation",
          "options": [
            {
              "id": "a",
              "text": "They should be ignored to simplify the model"
            },
            {
              "id": "b",
              "text": "They should be explicitly incorporated as variables to test the resilience of different adaptation strategies"
            },
            {
              "id": "c",
              "text": "They should be treated as fixed constants"
            },
            {
              "id": "d",
              "text": "They should only be considered after the simulation is complete"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Incorporating uncertainties as variables allows planners to stress-test strategies against a range of possible future conditions."
        },
        {
          "id": "climate-science-401-l06-q4",
          "text": "What is the main purpose of a decision review loop following a simulation round?",
          "skillId": "climate-science-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To evaluate evidence against policy goals and identify necessary strategic refinements"
            },
            {
              "id": "b",
              "text": "To permanently lock in the first strategy tested"
            },
            {
              "id": "c",
              "text": "To bypass operational readiness checks"
            },
            {
              "id": "d",
              "text": "To delete data that contradicts the initial hypothesis"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The review loop is an iterative process designed to compare outcomes against goals, ensuring continuous improvement of the strategy."
        },
        {
          "id": "climate-science-401-l06-q5",
          "text": "If a climate intervention faces 'metric drift', what is the most effective mitigation response?",
          "skillId": "climate-science-401-skill-ops",
          "options": [
            {
              "id": "a",
              "text": "Introduce quality contracts and quarantine checks"
            },
            {
              "id": "b",
              "text": "Define decision authority and escalation rules"
            },
            {
              "id": "c",
              "text": "Re-baseline the metrics and continuously monitor leading indicators"
            },
            {
              "id": "d",
              "text": "Increase transparency and corrective feedback loops"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Metric drift occurs when the baseline shifts over time; re-baselining and monitoring leading indicators ensures the metrics remain relevant and accurate."
        }
      ],
      "imageUrl": "/generated-images/refinery/climate-science-401-l06.png"
    },
    {
      "id": "climate-science-401-l07",
      "title": "Climate Science Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "A diverse panel of community members, scientists, and policymakers engaged in a town hall discussion about climate ethics, warm and inviting lighting.",
      "conceptVideoPrompt": "An animated infographic showing the interconnected web of stakeholders in climate policy, highlighting the flow of accountability, transparency, and ethical decision-making.",
      "learningAids": [
        {
          "id": "climate-science-401-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-401-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this lesson, learners will analyze the diverse stakeholders involved in climate policy. We will identify who benefits from certain policies, who might face disproportionate risks, and how different policy choices impact various socioeconomic groups. Understanding these dynamics is key to creating equitable and effective climate solutions."
        },
        {
          "id": "climate-science-401-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "We will explore governance and accountability frameworks in climate policy. This involves understanding how governance mechanisms are connected to measurable controls, obligations for public transparency, and clear pathways for remediation. These elements are crucial for ensuring that policies are implemented responsibly and maintain public trust."
        },
        {
          "id": "climate-science-401-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before making critical decisions about deploying climate science projects, it is essential to use a comprehensive execution checklist. This checklist includes considerations related to legal requirements, ethical standards, technical feasibility, and the potential impact on end-users. Integrating these criteria ensures our decisions are both scientifically sound and socially responsible."
        }
      ],
      "flashcards": [
        {
          "id": "climate-science-401-l07-f1",
          "front": "Stakeholder Map",
          "back": "A framework that tracks impact distribution across affected groups to ensure equitable policy design."
        },
        {
          "id": "climate-science-401-l07-f2",
          "front": "Accountability Loop",
          "back": "A cycle connecting outcomes, ownership, and corrective action to maintain system integrity."
        },
        {
          "id": "climate-science-401-l07-f3",
          "front": "Responsible Execution",
          "back": "A delivery practice that balances technical performance with safety, fairness, and transparency."
        }
      ],
      "imageUrl": "/generated-images/refinery/climate-science-401-l07.png"
    },
    {
      "id": "climate-science-401-l08",
      "title": "Climate Science Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "A professional presentation setting with a person confidently pointing to a projected slide detailing a Climate Science Capstone Charter, audience in the foreground.",
      "conceptVideoPrompt": "A dynamic montage of a student preparing a capstone project, typing on a laptop, reviewing data charts, and finally standing confidently at a podium ready to defend their climate strategy.",
      "learningAids": [
        {
          "id": "climate-science-401-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-401-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this culminating activity, students will create a detailed capstone charter. This document will outline the main objectives of your project, identify potential systemic risks, establish rigorous metrics for measuring success, and set governance checkpoints to ensure the project stays on track. This process synthesizes all previous learning into a cohesive, actionable plan."
        },
        {
          "id": "climate-science-401-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "To conclude the module, students will utilize a defense preparation template. This template guides you in formulating claims supported by empirical evidence and requires you to clearly articulate any trade-offs involved in your strategic decisions. This exercise hones critical thinking and prepares you to defend your climate strategies in professional, high-stakes environments."
        }
      ],
      "interactiveActivities": [
        {
          "id": "climate-science-401-l08-act1",
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
          "id": "climate-science-401-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against cost, risk, and equity critiques."
        }
      ],
      "imageUrl": "/generated-images/refinery/climate-science-401-l08.png"
    }
  ]
};
