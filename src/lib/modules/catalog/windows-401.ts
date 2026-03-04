import type { LearningModule } from "@/lib/modules/types";

export const Windows401Module: LearningModule = {
  "id": "windows-401",
  "title": "Windows Platform Strategy, Governance, and Enterprise Resilience",
  "description": "Expert-level Windows platform curriculum on operating model design, fleet governance, reliability economics, supply-chain trust, and executive-level transformation planning.",
  "subject": "Operating Systems",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "windows",
    "governance",
    "strategy",
    "enterprise"
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
    "Design Windows platform operating models aligned with business, security, and reliability goals",
    "Govern fleet release risk with staged rollout policy and measurable quality gates",
    "Evaluate endpoint investments using outage-cost and productivity-impact economics",
    "Lead severe endpoint incident command with explicit decision rights",
    "Build software provenance and release assurance controls for endpoint trust",
    "Create multi-year Windows transformation roadmaps with clear KPI ownership"
  ],
  "lessons": [
    {
      "id": "windows-401-l01",
      "title": "Windows Platform Operating Models and Decision Rights",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "windows-401-l01-c1",
          "kind": "concept",
          "title": "Ownership Model Trade-offs",
          "content": "When creating a strategy for managing computers in a business, it's important to find a balance between having a central authority and allowing local teams to be flexible. Centralized control helps ensure that everything is consistent and follows the same rules, while allowing local teams to make decisions can help them respond quickly to changes. However, to make this work well, strong rules and guidelines need to be in place to govern how decisions are made.\nContext recap: When creating a strategy for managing computers in a business, it's important to find a balance between having a central authority and allowing local teams to be flexible. Centralized control helps ensure that everything is consistent and follows the same rules, while allowing local teams to make decisions can help them respond quickly to changes. However, to make this work well, strong rules and guidelines need to be in place to govern how decisions are made."
        },
        {
          "id": "windows-401-l01-c2",
          "kind": "concept",
          "title": "Decision Rights in High-Stakes Events",
          "content": "In situations where there are major software updates, urgent security issues, or exceptions to policies, it is crucial to have clear guidelines about who is in charge of making decisions. If there is confusion about who is responsible, it can lead to delays in resolving problems, which can make situations worse. Having predefined authority boundaries helps ensure that issues are addressed quickly and effectively.\nContext recap: In situations where there are major software updates, urgent security issues, or exceptions to policies, it is crucial to have clear guidelines about who is in charge of making decisions. If there is confusion about who is responsible, it can lead to delays in resolving problems, which can make situations worse. Having predefined authority boundaries helps ensure that issues are addressed quickly and effectively."
        },
        {
          "id": "windows-401-l01-c3",
          "kind": "recap",
          "title": "Operational Cadence",
          "content": "Successful endpoint management programs that are well-developed typically have a regular schedule for assessing risks, checking reliability, and ensuring compliance. For example, they might conduct risk assessments every week, review reliability and compliance scores every month, and reassess their strategic priorities every three months. This consistent operational cadence helps maintain high standards and ensures that any potential issues are addressed promptly.\nContext recap: Successful endpoint management programs that are well-developed typically have a regular schedule for assessing risks, checking reliability, and ensuring compliance. For example, they might conduct risk assessments every week, review reliability and compliance scores every month, and reassess their strategic priorities every three months. This consistent operational cadence helps maintain high standards and ensures that any potential issues are addressed promptly."
        }
      ],
      "flashcards": [
        {
          "id": "windows-401-l01-f1",
          "front": "Operating model",
          "back": "Organizational design for ownership, service delivery, and governance."
        },
        {
          "id": "windows-401-l01-f2",
          "front": "Decision rights",
          "back": "Explicit authority for approvals, escalations, and emergency action."
        },
        {
          "id": "windows-401-l01-f3",
          "front": "Governance cadence",
          "back": "Recurring review cycle that sustains reliability and risk control."
        }
      ],
      "learningAids": [
        {
          "id": "windows-401-l01-a1",
          "type": "image",
          "title": "Endpoint Operating Model Blueprint",
          "content": "Blueprint contrasting centralized, federated, and hybrid endpoint governance."
        }
      ]
    },
    {
      "id": "windows-401-l02",
      "title": "Fleet Release Governance and Safety Gates Lab",
      "type": "interactive",
      "duration": 17,
      "chunks": [
        {
          "id": "windows-401-l02-c1",
          "kind": "concept",
          "title": "Blast Radius Management",
          "content": "Changes made to the Windows operating system across many devices can lead to widespread problems if the rollout process is not carefully controlled. To ensure safety, it is important to implement a structured approach that includes sequencing changes in groups, setting health checkpoints, having rollback options in case of issues, and continuously monitoring system performance. This proactive management helps prevent major outages and keeps systems running smoothly.\nContext recap: Changes made to the Windows operating system across many devices can lead to widespread problems if the rollout process is not carefully controlled. To ensure safety, it is important to implement a structured approach that includes sequencing changes in groups, setting health checkpoints, having rollback options in case of issues, and continuously monitoring system performance. This proactive management helps prevent major outages and keeps systems running smoothly."
        },
        {
          "id": "windows-401-l02-c2",
          "kind": "practice",
          "title": "Policy Lifecycle Governance",
          "content": "For any software release that carries a high level of risk, it is essential to follow a structured process that includes several key steps. These steps should involve proposing the release, simulating its effects, validating it through a pilot program, rolling it out in stages, and finally verifying its success after release. Each step should have clear documentation and approval from responsible parties to ensure accountability and thoroughness.\nContext recap: For any software release that carries a high level of risk, it is essential to follow a structured process that includes several key steps. These steps should involve proposing the release, simulating its effects, validating it through a pilot program, rolling it out in stages, and finally verifying its success after release. Each step should have clear documentation and approval from responsible parties to ensure accountability and thoroughness."
        }
      ],
      "interactiveActivities": [
        {
          "id": "windows-401-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Risk Match",
          "description": "Match governance controls to release risks they mitigate.",
          "pairs": [
            {
              "left": "Canary cohort",
              "right": "Limits early impact and reveals regressions"
            },
            {
              "left": "Crash-rate promotion gate",
              "right": "Prevents rollout when stability declines"
            },
            {
              "left": "Automated rollback threshold",
              "right": "Triggers rapid reversion under failure"
            },
            {
              "left": "Exception approval workflow",
              "right": "Prevents unmanaged policy bypass"
            }
          ]
        },
        {
          "id": "windows-401-l02-act2",
          "type": "scenario_practice",
          "title": "Major Rollout Incident Exercise",
          "description": "Contain a widespread endpoint issue caused by policy deployment defect.",
          "instructions": [
            "Choose first containment action and justify risk profile.",
            "Define one governance enhancement for future rollout."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Which leading indicator should gate rollout promotion?",
          "How should pilot cohorts be selected to maximize detection quality?",
          "What evidence is mandatory before advancing to full fleet?"
        ]
      },
      "learningAids": [
        {
          "id": "windows-401-l02-a1",
          "type": "practice",
          "title": "Release Governance Worksheet",
          "content": "Template for rollout rings, gate metrics, rollback conditions, and owner approvals."
        }
      ]
    },
    {
      "id": "windows-401-l03",
      "title": "Checkpoint 1: Governance and Release Operations",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "windows-401-l03-q1",
          "text": "Why use canary cohorts for high-impact Windows changes?",
          "skillId": "windows-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "To accelerate global failure"
            },
            {
              "id": "b",
              "text": "To validate behavior before broad rollout"
            },
            {
              "id": "c",
              "text": "To avoid telemetry requirements"
            },
            {
              "id": "d",
              "text": "To remove rollback planning"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Canaries reduce exposure while testing real-world impact."
        },
        {
          "id": "windows-401-l03-q2",
          "text": "Most critical governance failure in severe incidents is:",
          "skillId": "windows-401-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "Clear command ownership"
            },
            {
              "id": "b",
              "text": "Delayed decisions from unclear authority"
            },
            {
              "id": "c",
              "text": "Structured updates"
            },
            {
              "id": "d",
              "text": "Predefined rollback triggers"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Unclear authority increases outage duration and business impact."
        },
        {
          "id": "windows-401-l03-q3",
          "text": "A defensible release decision record should include:",
          "skillId": "windows-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Only completion statement"
            },
            {
              "id": "b",
              "text": "Validation evidence, risk notes, owner, and rollback criteria"
            },
            {
              "id": "c",
              "text": "No versioned policy reference"
            },
            {
              "id": "d",
              "text": "Informal team chat summary"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Structured records support auditability and repeatable operations."
        },
        {
          "id": "windows-401-l03-q4",
          "text": "The primary value of exception registers is:",
          "skillId": "windows-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "To hide unresolved risk"
            },
            {
              "id": "b",
              "text": "To track approved deviation with owner and expiry"
            },
            {
              "id": "c",
              "text": "To replace baseline policy"
            },
            {
              "id": "d",
              "text": "To remove review cadence"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Exception governance prevents silent long-term control erosion."
        }
      ],
      "learningAids": [
        {
          "id": "windows-401-l03-a1",
          "type": "mnemonic",
          "title": "GATE",
          "content": "Goals, Approvals, Thresholds, Evidence."
        }
      ]
    },
    {
      "id": "windows-401-l04",
      "title": "Reliability Economics and Platform Portfolio Strategy",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "windows-401-l04-c1",
          "kind": "concept",
          "title": "Cost of Endpoint Failure",
          "content": "When we talk about endpoints, we mean the individual devices that people use, like computers and tablets. If these devices are not working properly, it can lead to several problems. For instance, employees may find it hard to get their work done, which can lower productivity. Additionally, when devices fail, it often leads to higher costs for support teams who need to fix them. This can also hurt the trust that customers and clients have in the business, as they rely on technology to function smoothly. Therefore, it is crucial for businesses to think carefully about how they invest in technology. They should consider the risks involved and the potential costs that come with device failures. By doing this, companies can make smarter decisions that help improve the reliability and efficiency of their operations.\nContext recap: When we talk about endpoints, we mean the individual devices that people use, like computers and tablets. If these devices are not working properly, it can lead to several problems. For instance, employees may find it hard to get their work done, which can lower productivity. Additionally, when devices fail, it often leads to higher costs for support teams who need to fix them.\nWhy this matters: Cost of Endpoint Failure helps learners in Operating Systems connect ideas from Windows Platform Strategy, Governance, and Enterprise Resilience to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "windows-401-l04-c2",
          "kind": "concept",
          "title": "Portfolio Prioritization",
          "content": "When deciding which initiatives to prioritize, organizations should carefully evaluate several key factors. First, they need to assess how critical each initiative is to the overall success of the business. Next, it's essential to consider how frequently similar incidents have occurred in the past, as this can help predict future challenges. Additionally, the team's confidence in their ability to effectively manage and reduce risks plays a crucial role in this decision-making process. Often, foundational controls—these are the basic security measures that help ensure both safety and reliability—tend to provide the most significant benefits over the long term. By thoughtfully prioritizing initiatives in this way, organizations can concentrate their efforts on the projects that will have the most positive impact on their operations and resilience.\nContext recap: When deciding which initiatives to prioritize, organizations should carefully evaluate several key factors. First, they need to assess how critical each initiative is to the overall success of the business. Next, it's essential to consider how frequently similar incidents have occurred in the past, as this can help predict future challenges. Additionally, the team's confidence in their ability to effectively manage and reduce risks plays a crucial role in this decision-making process.\nWhy this matters: Portfolio Prioritization helps learners in Operating Systems connect ideas from Windows Platform Strategy, Governance, and Enterprise Resilience to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "windows-401-l04-c3",
          "kind": "example",
          "title": "Executive Framing",
          "content": "When presenting recommendations to company leaders, it is important to clearly outline the expected results and the reasoning behind those expectations. For instance, you could state, 'By adopting health-gated rollouts, we anticipate a reduction in serious release incidents by 30% over the next two quarters.' Providing this type of measurable information allows executives to grasp the potential effects of their decisions more effectively. It helps them make informed choices that can lead to better outcomes for the organization.\nContext recap: When presenting recommendations to company leaders, it is important to clearly outline the expected results and the reasoning behind those expectations. For instance, you could state, 'By adopting health-gated rollouts, we anticipate a reduction in serious release incidents by 30% over the next two quarters.' Providing this type of measurable information allows executives to grasp the potential effects of their decisions more effectively. It helps them make informed choices that can lead to better outcomes for the organization."
        }
      ],
      "flashcards": [
        {
          "id": "windows-401-l04-f1",
          "front": "Reliability ROI",
          "back": "Expected outage or productivity-loss reduction per unit investment."
        },
        {
          "id": "windows-401-l04-f2",
          "front": "Dependency criticality",
          "back": "Measure of how many core workflows rely on a platform service."
        },
        {
          "id": "windows-401-l04-f3",
          "front": "Mitigation confidence",
          "back": "Estimated likelihood that planned control delivers intended impact."
        }
      ],
      "learningAids": [
        {
          "id": "windows-401-l04-a1",
          "type": "image",
          "title": "Investment Prioritization Matrix",
          "content": "Matrix ranking endpoint initiatives by impact potential and implementation complexity."
        }
      ]
    },
    {
      "id": "windows-401-l05",
      "title": "Supply Chain Trust and Release Assurance Lab",
      "type": "interactive",
      "duration": 17,
      "chunks": [
        {
          "id": "windows-401-l05-c1",
          "kind": "concept",
          "title": "Endpoint Trust Boundaries",
          "content": "The integrity of endpoints, or individual devices, relies on ensuring that they come from trusted sources, that the flow of software packages is controlled, that all software is signed to verify its authenticity, and that checks are performed before deploying software widely. These measures help protect the system from potential threats and ensure that only safe software is used.\nContext recap: The integrity of endpoints, or individual devices, relies on ensuring that they come from trusted sources, that the flow of software packages is controlled, that all software is signed to verify its authenticity, and that checks are performed before deploying software widely. These measures help protect the system from potential threats and ensure that only safe software is used."
        },
        {
          "id": "windows-401-l05-c2",
          "kind": "practice",
          "title": "Provenance Workflow",
          "content": "To ensure the reliability of software releases, it is important to include a thorough validation process. This process should involve verifying the source of the software, confirming that builds are properly attested, obtaining approvals for any changes, and keeping track of any exceptions with clear expiration dates and review processes. This structured approach helps maintain high standards of quality and security.\nContext recap: To ensure the reliability of software releases, it is important to include a thorough validation process. This process should involve verifying the source of the software, confirming that builds are properly attested, obtaining approvals for any changes, and keeping track of any exceptions with clear expiration dates and review processes. This structured approach helps maintain high standards of quality and security."
        }
      ],
      "interactiveActivities": [
        {
          "id": "windows-401-l05-act1",
          "type": "sorting_buckets",
          "title": "Provenance Control Sort",
          "description": "Sort trust controls by lifecycle stage.",
          "buckets": [
            "Source",
            "Build",
            "Deploy"
          ],
          "items": [
            {
              "text": "Source signature verification",
              "bucket": "Source"
            },
            {
              "text": "Signed release package with attestations",
              "bucket": "Build"
            },
            {
              "text": "Deployment admission policy gate",
              "bucket": "Deploy"
            },
            {
              "text": "Dependency allowlist governance",
              "bucket": "Source"
            }
          ]
        },
        {
          "id": "windows-401-l05-act2",
          "type": "scenario_practice",
          "title": "Compromised Artifact Drill",
          "description": "Respond to suspected package tampering in endpoint rollout pipeline.",
          "instructions": [
            "Define immediate containment action.",
            "Specify one governance improvement for future prevention."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Which provenance signals should block deployment automatically?",
          "How do you balance release speed with assurance depth?",
          "What evidence should security and audit teams require each release?"
        ]
      },
      "learningAids": [
        {
          "id": "windows-401-l05-a1",
          "type": "practice",
          "title": "Provenance Audit Worksheet",
          "content": "Template for source checks, build evidence, deploy gating, and exception tracking."
        }
      ]
    },
    {
      "id": "windows-401-l06",
      "title": "Checkpoint 2: Strategy, Trust, and Governance",
      "type": "quiz",
      "duration": 11,
      "questions": [
        {
          "id": "windows-401-l06-q1",
          "text": "Best metric pairing for endpoint reliability investment decisions is:",
          "skillId": "windows-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Desktop theme preference and app count"
            },
            {
              "id": "b",
              "text": "Incident impact cost and dependency criticality"
            },
            {
              "id": "c",
              "text": "Boot animation speed and icon density"
            },
            {
              "id": "d",
              "text": "Ticket subject keywords"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Impact and centrality indicate highest-value risk reduction opportunities."
        },
        {
          "id": "windows-401-l06-q2",
          "text": "Why enforce provenance controls before broad endpoint rollout?",
          "skillId": "windows-401-skill-supply-chain",
          "options": [
            {
              "id": "a",
              "text": "To increase uncertainty"
            },
            {
              "id": "b",
              "text": "To reduce risk from tampered or untrusted artifacts"
            },
            {
              "id": "c",
              "text": "To avoid patching"
            },
            {
              "id": "d",
              "text": "To remove change ownership"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Provenance checks reduce supply-chain compromise risk."
        },
        {
          "id": "windows-401-l06-q3",
          "text": "A strong executive platform recommendation should include:",
          "skillId": "windows-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Only technical depth"
            },
            {
              "id": "b",
              "text": "Outcome metrics, assumptions, risks, and owners"
            },
            {
              "id": "c",
              "text": "No uncertainty language"
            },
            {
              "id": "d",
              "text": "Unbounded roadmap promises"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decision quality depends on quantified outcomes and transparent risk framing."
        },
        {
          "id": "windows-401-l06-q4",
          "text": "Leading indicators are valuable because they:",
          "skillId": "windows-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Only explain past failures"
            },
            {
              "id": "b",
              "text": "Support proactive intervention before major incidents"
            },
            {
              "id": "c",
              "text": "Replace all lagging metrics"
            },
            {
              "id": "d",
              "text": "Eliminate need for review cadence"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Early signals enable corrective action while risk remains controllable."
        },
        {
          "id": "windows-401-l06-q5",
          "text": "During severe endpoint incidents, explicit decision rights primarily improve:",
          "skillId": "windows-401-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "Delay and ambiguity"
            },
            {
              "id": "b",
              "text": "Containment speed and command clarity"
            },
            {
              "id": "c",
              "text": "Speculative debate"
            },
            {
              "id": "d",
              "text": "Need for evidence"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Clear authority shortens response time and reduces coordination failures."
        }
      ],
      "learningAids": [
        {
          "id": "windows-401-l06-a1",
          "type": "mnemonic",
          "title": "CLEAR",
          "content": "Context, Levers, Economics, Accountability, Risk."
        }
      ]
    },
    {
      "id": "windows-401-l07",
      "title": "Capstone: Windows Endpoint Transformation Proposal",
      "type": "interactive",
      "duration": 20,
      "chunks": [
        {
          "id": "windows-401-l07-c1",
          "kind": "practice",
          "title": "Capstone Brief",
          "content": "For your capstone project, you will design a comprehensive proposal aimed at transforming Windows endpoints over a two-year period. This proposal must thoughtfully consider and balance several important factors: security to protect sensitive information, reliability to ensure systems function smoothly, user productivity to enhance the work experience, and operating costs to manage expenses effectively. Additionally, you should include a governance structure that clearly defines how decisions will be made throughout the project. This structure will help ensure that all stakeholders are involved and informed. Furthermore, create a portfolio of controls that outlines the specific measures and technologies you will implement to achieve your goals. Finally, develop a detailed timeline that includes key milestones to help track your progress and ensure that the project stays on schedule. This will not only help you stay organized but also demonstrate your ability to plan and execute a significant transformation project successfully.\nContext recap: For your capstone project, you will design a comprehensive proposal aimed at transforming Windows endpoints over a two-year period. This proposal must thoughtfully consider and balance several important factors: security to protect sensitive information, reliability to ensure systems function smoothly, user productivity to enhance the work experience, and operating costs to manage expenses effectively. Additionally, you should include a governance structure that clearly defines how decisions will be made throughout the project. This structure will help ensure that all stakeholders are involved and informed.\nWhy this matters: Capstone Brief helps learners in Operating Systems connect ideas from Windows Platform Strategy, Governance, and Enterprise Resilience to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "windows-401-l07-c2",
          "kind": "recap",
          "title": "Assessment Criteria",
          "content": "High-quality proposals should clearly define measurable outcomes, consider the sequence of dependencies, explicitly state any risks that are accepted, and ensure that there is accountable ownership at every stage of the project. This clarity helps ensure that everyone involved understands their responsibilities and the goals of the project.\nContext recap: High-quality proposals should clearly define measurable outcomes, consider the sequence of dependencies, explicitly state any risks that are accepted, and ensure that there is accountable ownership at every stage of the project. This clarity helps ensure that everyone involved understands their responsibilities and the goals of the project."
        }
      ],
      "metadata": {
        "prompts": [
          "Present three strategic initiatives with quantified expected impact.",
          "Identify top three risks and assign owners.",
          "Define one executive and one engineering KPI for each initiative."
        ]
      },
      "learningAids": [
        {
          "id": "windows-401-l07-a1",
          "type": "practice",
          "title": "Board Memo Framework",
          "content": "Template for objective, options, recommendation, economics, controls, and quarterly milestones."
        }
      ]
    }
  ]
};
