import type { LearningModule } from "@/lib/modules/types";

export const Macos401Module: LearningModule = {
  "id": "macos-401",
  "title": "Apple Platform Strategy, Governance, and Enterprise Reliability",
  "description": "Expert-level macOS and Apple endpoint strategy curriculum focused on platform governance, fleet economics, supply-chain trust, severe incident leadership, and multi-year transformation planning.",
  "subject": "Operating Systems",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "macos",
    "governance",
    "enterprise",
    "strategy"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Design enterprise Apple platform operating models with clear ownership boundaries",
    "Govern fleet change risk with staged release policy and measurable quality gates",
    "Evaluate endpoint reliability investments using impact and cost-of-failure economics",
    "Lead cross-functional incident command during severe endpoint disruptions",
    "Implement trusted software provenance and release assurance controls",
    "Build executive-ready platform roadmaps with quarterly capability targets"
  ],
  "lessons": [
    {
      "id": "macos-401-l01",
      "title": "Enterprise Apple Platform Operating Models",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "macos-401-l01-c1",
          "kind": "concept",
          "title": "Centralized vs Federated Endpoint Ownership",
          "content": "In big companies, it's crucial to think about who is in charge of the devices that employees use every day. There are three main ways to organize this control: first, a central team that oversees everything from one place; second, individual teams that specialize in different areas, like marketing or finance; and third, a combination of both approaches. Each of these methods has its own strengths and weaknesses. For example, a central team might make decisions faster, but specialized teams can provide more tailored support. It's important to find the right balance to ensure that the devices are managed effectively while also being responsive to the needs of different departments."
        },
        {
          "id": "macos-401-l01-c2",
          "kind": "concept",
          "title": "Decision Rights and Escalation",
          "content": "In the world of technology, making important decisions is a big responsibility. For example, when there is a need to quickly update the operating system or deal with an emergency situation, it is essential to know exactly who is in charge of making those decisions. Having clear authority boundaries helps everyone understand their roles and responsibilities. If these boundaries are not clearly defined, it can lead to confusion and slow down the response time during critical moments. This can make it much more challenging to manage and resolve issues effectively, which is why clarity in decision-making is so important."
        },
        {
          "id": "macos-401-l01-c3",
          "kind": "recap",
          "title": "Operating Rhythm",
          "content": "To ensure that endpoint operations run smoothly, it is important to have a regular schedule or rhythm. This includes conducting weekly reviews to assess risks, monthly evaluations of reliability and compliance, and quarterly planning sessions to address any architectural debts. This structured approach helps maintain a high level of operational effectiveness.\nContext recap: To ensure that endpoint operations run smoothly, it is important to have a regular schedule or rhythm. This includes conducting weekly reviews to assess risks, monthly evaluations of reliability and compliance, and quarterly planning sessions to address any architectural debts. This structured approach helps maintain a high level of operational effectiveness."
        }
      ],
      "flashcards": [
        {
          "id": "macos-401-l01-f1",
          "front": "Platform operating model",
          "back": "Structure of ownership, decision paths, and service boundaries for endpoint delivery."
        },
        {
          "id": "macos-401-l01-f2",
          "front": "Decision rights",
          "back": "Defined authority for approvals, exceptions, and emergency actions."
        },
        {
          "id": "macos-401-l01-f3",
          "front": "Operational cadence",
          "back": "Recurring review rhythm that keeps governance and execution aligned."
        }
      ],
      "learningAids": [
        {
          "id": "macos-401-l01-a1",
          "type": "image",
          "title": "Endpoint Operating Model Map",
          "content": "Comparison map of centralized, federated, and hybrid endpoint models."
        }
      ]
    },
    {
      "id": "macos-401-l02",
      "title": "Fleet Release Risk Governance Lab",
      "type": "interactive",
      "duration": 17,
      "chunks": [
        {
          "id": "macos-401-l02-c1",
          "kind": "concept",
          "title": "Release Blast Radius and Health Gates",
          "content": "When we release updates for macOS devices, we need to be aware of certain challenges that can cause problems. These challenges might include changes in drivers, which are essential for hardware to communicate with the operating system, compatibility issues with applications that may not work well with the new update, or conflicts with existing policies that govern how devices should operate. To effectively manage these risks and ensure a smooth update process, it is crucial to adopt strong governance practices. This includes implementing phased rollouts, where updates are gradually introduced to a small group of users before a wider release. Additionally, we should conduct health checks to continuously monitor the performance and status of the updates. If any issues arise, having rollback triggers in place allows us to quickly revert to the previous version, minimizing disruption for users."
        },
        {
          "id": "macos-401-l02-c2",
          "kind": "practice",
          "title": "Policy Lifecycle",
          "content": "To ensure that software releases are reliable, it is important to follow a structured governance process. This includes creating clear standards for writing policies, running simulations to test them, verifying them through pilot programs, deploying them in stages, collecting real-time data during operation, and having criteria for when to retire or revise policies. This comprehensive approach helps maintain high quality in software releases.\nContext recap: To ensure that software releases are reliable, it is important to follow a structured governance process. This includes creating clear standards for writing policies, running simulations to test them, verifying them through pilot programs, deploying them in stages, collecting real-time data during operation, and having criteria for when to retire or revise policies. This comprehensive approach helps maintain high quality in software releases."
        }
      ],
      "interactiveActivities": [
        {
          "id": "macos-401-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Risk Match",
          "description": "Match release controls to the risk they reduce.",
          "pairs": [
            {
              "left": "Pilot cohort gate",
              "right": "Detects compatibility regressions early"
            },
            {
              "left": "Crash-rate threshold",
              "right": "Blocks rollout when stability degrades"
            },
            {
              "left": "Automated rollback",
              "right": "Restores baseline when failure trigger is met"
            },
            {
              "left": "Exception approval workflow",
              "right": "Prevents unmanaged policy bypass"
            }
          ]
        },
        {
          "id": "macos-401-l02-act2",
          "type": "scenario_practice",
          "title": "Major Release Incident Simulation",
          "description": "Contain an enterprise endpoint outage caused by a policy release defect.",
          "instructions": [
            "Choose one immediate containment command decision.",
            "Define one governance change for future releases."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Which metric is the best rollout promotion gate in your environment?",
          "How do you choose pilot populations to maximize detection value?",
          "What evidence should be mandatory before promoting to full fleet?"
        ]
      },
      "learningAids": [
        {
          "id": "macos-401-l02-a1",
          "type": "practice",
          "title": "Release Governance Worksheet",
          "content": "Template for rollout rings, health gates, stop conditions, and owner sign-off."
        }
      ]
    },
    {
      "id": "macos-401-l03",
      "title": "Checkpoint 1: Governance and Release Safety",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "macos-401-l03-q1",
          "text": "Why are staged fleet rollouts mandatory for high-impact endpoint changes?",
          "skillId": "macos-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "They maximize immediate blast radius"
            },
            {
              "id": "b",
              "text": "They reveal defects before full organization impact"
            },
            {
              "id": "c",
              "text": "They remove need for telemetry"
            },
            {
              "id": "d",
              "text": "They eliminate rollback planning"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Staging reduces exposure and supports evidence-based promotion."
        },
        {
          "id": "macos-401-l03-q2",
          "text": "Most damaging governance gap during severe incidents is:",
          "skillId": "macos-401-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "Clear decision authority"
            },
            {
              "id": "b",
              "text": "Ambiguous ownership and delayed command decisions"
            },
            {
              "id": "c",
              "text": "Structured incident updates"
            },
            {
              "id": "d",
              "text": "Defined rollback trigger"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Unclear authority extends incident duration and user impact."
        },
        {
          "id": "macos-401-l03-q3",
          "text": "A high-trust release decision should include:",
          "skillId": "macos-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Only confidence statements"
            },
            {
              "id": "b",
              "text": "Validation evidence, risk notes, and rollback criteria"
            },
            {
              "id": "c",
              "text": "No documentation if rollout succeeds"
            },
            {
              "id": "d",
              "text": "Single-person verbal approval"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Evidence-backed decisions are auditable and repeatable."
        },
        {
          "id": "macos-401-l03-q4",
          "text": "What is the primary value of endpoint exception registers?",
          "skillId": "macos-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Hide control gaps"
            },
            {
              "id": "b",
              "text": "Track risk acceptance with ownership and expiration"
            },
            {
              "id": "c",
              "text": "Remove compliance scope"
            },
            {
              "id": "d",
              "text": "Replace baseline policy"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Exception governance prevents unmanaged long-term risk accumulation."
        }
      ],
      "learningAids": [
        {
          "id": "macos-401-l03-a1",
          "type": "mnemonic",
          "title": "RING",
          "content": "Risk, Indicators, Next gate, Governance evidence."
        }
      ]
    },
    {
      "id": "macos-401-l04",
      "title": "Reliability Economics and Portfolio Prioritization",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "macos-401-l04-c1",
          "kind": "concept",
          "title": "Cost of Endpoint Failure",
          "content": "When devices, known as endpoints, stop working properly, it can cause a variety of costs for a company. These costs can be both direct and indirect. For example, when employees can't use their devices, they lose valuable time, which means less work gets done. Additionally, more people may need help from the support team, leading to a spike in requests for assistance. Fixing these issues often requires extra work from staff, which can also be costly. Furthermore, if users feel that their devices are unreliable, it can hurt their trust in the company. Because of these reasons, it's crucial for organizations to carefully consider their investments in technology. They should focus on how much they can lower these potential costs that come from device failures, ensuring a more reliable experience for everyone involved."
        },
        {
          "id": "macos-401-l04-c2",
          "kind": "concept",
          "title": "Portfolio Lens",
          "content": "When prioritizing initiatives for the platform, it is important to consider several factors. These include how critical the dependencies are, how often incidents occur, the challenges users face when adopting new features, and the confidence in the ability to mitigate risks. Often, foundational controls that ensure stability and security can be more beneficial than focusing solely on high-visibility features.\nContext recap: When prioritizing initiatives for the platform, it is important to consider several factors. These include how critical the dependencies are, how often incidents occur, the challenges users face when adopting new features, and the confidence in the ability to mitigate risks. Often, foundational controls that ensure stability and security can be more beneficial than focusing solely on high-visibility features."
        },
        {
          "id": "macos-401-l04-c3",
          "kind": "example",
          "title": "Executive Framing",
          "content": "When you are making strategic recommendations, it is very important to clearly express the expected measurable impacts and the assumptions that support them. For example, you could say, 'By implementing managed rollout health gates, we anticipate a reduction in the number of serious release incidents by 30% over the next two quarters.' This kind of clarity is crucial because it helps everyone involved understand the potential benefits of the proposed actions and how they can positively affect the project. Clear communication ensures that all stakeholders are on the same page and can make informed decisions based on the expected outcomes."
        }
      ],
      "flashcards": [
        {
          "id": "macos-401-l04-f1",
          "front": "Reliability ROI",
          "back": "Expected reduction in outage impact per unit of platform investment."
        },
        {
          "id": "macos-401-l04-f2",
          "front": "Dependency criticality",
          "back": "How central a platform service is to key business workflows."
        },
        {
          "id": "macos-401-l04-f3",
          "front": "Mitigation confidence",
          "back": "Confidence that a chosen control will achieve predicted outcomes."
        }
      ],
      "learningAids": [
        {
          "id": "macos-401-l04-a1",
          "type": "image",
          "title": "Endpoint Investment Matrix",
          "content": "Matrix ranking initiatives by risk reduction potential and delivery effort."
        }
      ]
    },
    {
      "id": "macos-401-l05",
      "title": "Supply Chain and Provenance Assurance Lab",
      "type": "interactive",
      "duration": 17,
      "chunks": [
        {
          "id": "macos-401-l05-c1",
          "kind": "concept",
          "title": "Trust Boundaries in Endpoint Delivery",
          "content": "The trustworthiness of a platform relies on several key factors. These include ensuring that the source of the software is authentic, that the integrity of the packages is maintained, that there are controls in place for distribution, and that policies are enforced before the software is deployed on endpoints. These elements are crucial for maintaining a secure and reliable environment.\nContext recap: The trustworthiness of a platform relies on several key factors. These include ensuring that the source of the software is authentic, that the integrity of the packages is maintained, that there are controls in place for distribution, and that policies are enforced before the software is deployed on endpoints. These elements are crucial for maintaining a secure and reliable environment."
        },
        {
          "id": "macos-401-l05-c2",
          "kind": "practice",
          "title": "Release Assurance Workflow",
          "content": "To maintain a high level of trust in release operations, it is important to have a workflow that includes several components. This should consist of evidence of signing, metadata that shows the origin of the software, records of approvals, and workflows for handling exceptions that include expiration dates and review processes. These practices help ensure that releases are secure and trustworthy.\nContext recap: To maintain a high level of trust in release operations, it is important to have a workflow that includes several components. This should consist of evidence of signing, metadata that shows the origin of the software, records of approvals, and workflows for handling exceptions that include expiration dates and review processes. These practices help ensure that releases are secure and trustworthy."
        }
      ],
      "interactiveActivities": [
        {
          "id": "macos-401-l05-act1",
          "type": "sorting_buckets",
          "title": "Provenance Control Sort",
          "description": "Sort controls by lifecycle stage.",
          "buckets": [
            "Source",
            "Build",
            "Deploy"
          ],
          "items": [
            {
              "text": "Upstream source verification",
              "bucket": "Source"
            },
            {
              "text": "Signed package and attestations",
              "bucket": "Build"
            },
            {
              "text": "Deployment admission gate",
              "bucket": "Deploy"
            },
            {
              "text": "Dependency trust policy",
              "bucket": "Source"
            }
          ]
        },
        {
          "id": "macos-401-l05-act2",
          "type": "scenario_practice",
          "title": "Compromised Package Response",
          "description": "Respond to suspected package tampering in release pipeline.",
          "instructions": [
            "Define first containment control.",
            "Specify one long-term governance improvement."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Which release evidence should be mandatory for production promotion?",
          "How do you balance release speed with provenance assurance?",
          "What signal should trigger immediate release freeze?"
        ]
      },
      "learningAids": [
        {
          "id": "macos-401-l05-a1",
          "type": "practice",
          "title": "Provenance Audit Template",
          "content": "Template for source checks, build evidence, deploy approval, and exception tracking."
        }
      ]
    },
    {
      "id": "macos-401-l06",
      "title": "Checkpoint 2: Strategy and Trust",
      "type": "quiz",
      "duration": 11,
      "questions": [
        {
          "id": "macos-401-l06-q1",
          "text": "Best metric pair for prioritizing endpoint reliability programs is:",
          "skillId": "macos-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Wallpaper refresh rate and dock layout count"
            },
            {
              "id": "b",
              "text": "Incident impact cost and dependency criticality"
            },
            {
              "id": "c",
              "text": "App icon count and install speed"
            },
            {
              "id": "d",
              "text": "Number of support chats"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Impact and centrality provide the strongest investment signal."
        },
        {
          "id": "macos-401-l06-q2",
          "text": "Why enforce provenance checks before endpoint deployment?",
          "skillId": "macos-401-skill-supply-chain",
          "options": [
            {
              "id": "a",
              "text": "To increase release uncertainty"
            },
            {
              "id": "b",
              "text": "To reduce risk from tampered or untrusted artifacts"
            },
            {
              "id": "c",
              "text": "To disable patching"
            },
            {
              "id": "d",
              "text": "To remove compliance evidence"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Provenance controls protect against software supply-chain compromise."
        },
        {
          "id": "macos-401-l06-q3",
          "text": "A credible executive platform recommendation includes:",
          "skillId": "macos-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Only technical detail"
            },
            {
              "id": "b",
              "text": "Outcome metrics, assumptions, risks, and ownership"
            },
            {
              "id": "c",
              "text": "No uncertainty discussion"
            },
            {
              "id": "d",
              "text": "Unscoped roadmap promises"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decision quality depends on measurable outcomes and transparent assumptions."
        },
        {
          "id": "macos-401-l06-q4",
          "text": "Leading indicators help endpoint strategy because they:",
          "skillId": "macos-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Only describe past incidents"
            },
            {
              "id": "b",
              "text": "Provide early warning for proactive corrections"
            },
            {
              "id": "c",
              "text": "Replace all outcome metrics"
            },
            {
              "id": "d",
              "text": "Eliminate need for policy review"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Early signals enable risk mitigation before major failures."
        },
        {
          "id": "macos-401-l06-q5",
          "text": "In severe endpoint incidents, explicit decision rights improve:",
          "skillId": "macos-401-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "Ambiguity and delay"
            },
            {
              "id": "b",
              "text": "Containment speed and command clarity"
            },
            {
              "id": "c",
              "text": "Speculation volume"
            },
            {
              "id": "d",
              "text": "Need for evidence"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Clear authority reduces coordination latency."
        }
      ],
      "learningAids": [
        {
          "id": "macos-401-l06-a1",
          "type": "mnemonic",
          "title": "CLEAR",
          "content": "Context, Levers, Economics, Accountability, Risk."
        }
      ]
    },
    {
      "id": "macos-401-l07",
      "title": "Capstone: Enterprise Apple Platform Transformation Proposal",
      "type": "interactive",
      "duration": 20,
      "chunks": [
        {
          "id": "macos-401-l07-c1",
          "kind": "practice",
          "title": "Capstone Brief",
          "content": "In this capstone project, you will have the exciting opportunity to develop a comprehensive proposal aimed at transforming the enterprise Apple platform over the next two years. Your proposal should thoughtfully consider and balance several key factors, including reliability, security, user productivity, and cost-effectiveness. Furthermore, it is essential to include a governance model that outlines how decisions will be made and who will be responsible for them. You will also need to create a portfolio of controls that will help manage risks and ensure compliance. Lastly, be sure to set clear and achievable milestones for each quarter, so progress can be tracked effectively throughout the transformation process."
        },
        {
          "id": "macos-401-l07-c2",
          "kind": "recap",
          "title": "Assessment Criteria",
          "content": "High-quality proposals should clearly define measurable outcomes, which are specific goals that can be tracked and evaluated. Additionally, they must consider the sequence of dependencies, meaning that the order of tasks is important for successful completion. It is also crucial to explicitly accept risks, acknowledging potential challenges that may arise during the project. Finally, accountability must be assigned to owners for each phase of the project, ensuring that everyone knows their responsibilities. This structured approach helps to ensure that all aspects of the proposal are well thought out and can be effectively implemented, leading to a successful transformation of the Apple platform in an enterprise setting."
        }
      ],
      "metadata": {
        "prompts": [
          "Present three strategic initiatives with projected impact.",
          "List top three risks and mitigation ownership.",
          "Define executive and engineering KPIs per initiative."
        ]
      },
      "learningAids": [
        {
          "id": "macos-401-l07-a1",
          "type": "practice",
          "title": "Board Memo Template",
          "content": "Template for objective, options, recommendation, economics, controls, and milestones."
        }
      ]
    }
  ]
};
