import type { LearningModule } from "@/lib/modules/types";

export const Linux401Module: LearningModule = {
  "id": "linux-401",
  "title": "Linux Platform Strategy, SRE Governance, and Fleet Operations",
  "description": "Expert-level Linux curriculum on fleet architecture, platform governance, reliability economics, supply-chain trust, and board-level operating strategy for mission-critical environments.",
  "subject": "Operating Systems",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "linux",
    "governance",
    "sre",
    "platform"
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
    "Design Linux platform operating models for scale, reliability, and organizational clarity",
    "Govern fleet change risk through policy, rollout strategy, and measurable control gates",
    "Evaluate reliability investments using service impact and failure-cost economics",
    "Lead severe incident governance with clear decision rights and learning systems",
    "Build defensible Linux supply-chain and provenance controls",
    "Communicate multi-year platform roadmaps to technical and executive stakeholders"
  ],
  "lessons": [
    {
      "id": "linux-401-l01",
      "title": "Linux Platform Operating Models at Scale",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "linux-401-l01-c1",
          "kind": "concept",
          "title": "Central Platform vs Embedded Ops",
          "content": "When organizations manage a large number of Linux systems, they face an important decision about how to share responsibilities among their teams. One option is to have central platform teams. These teams focus on creating a consistent and controlled environment across all systems, which can help ensure that everything runs smoothly and securely. On the other hand, there are embedded teams that work closely with specific areas of the organization. These teams can respond more quickly to the unique needs of their departments, allowing for faster problem-solving and innovation. A hybrid model combines the strengths of both central and embedded teams. However, it is essential to establish clear agreements on how these teams will collaborate and share decision-making authority to avoid confusion and ensure effective governance. This way, organizations can benefit from both consistency and agility in their operations."
        },
        {
          "id": "linux-401-l01-c2",
          "kind": "concept",
          "title": "Decision Rights and Escalation",
          "content": "When it comes to making significant decisions in managing a Linux platform, such as determining the timing for upgrading the Linux kernel or deciding how to implement emergency patches, it is essential to have well-defined authority boundaries. This means that everyone involved should know who is responsible for each decision. If there is any ambiguity about who owns these decisions, it can create confusion and potentially lead to more serious issues down the line. By establishing clear roles and responsibilities, we can help prevent incidents and ensure that everyone understands who to consult for guidance when needed."
        },
        {
          "id": "linux-401-l01-c3",
          "kind": "recap",
          "title": "Operating Cadence",
          "content": "To keep a Linux platform running smoothly, it's important to have a regular schedule for operations. This includes reviewing risks every week, checking reliability scores monthly, and assessing the overall architecture and any technical debt every three months. These practices help ensure that the platform remains stable and can adapt to new challenges.\nContext recap: To keep a Linux platform running smoothly, it's important to have a regular schedule for operations. This includes reviewing risks every week, checking reliability scores monthly, and assessing the overall architecture and any technical debt every three months. These practices help ensure that the platform remains stable and can adapt to new challenges."
        }
      ],
      "flashcards": [
        {
          "id": "linux-401-l01-f1",
          "front": "Platform operating model",
          "back": "How responsibilities, services, and governance are structured for fleet operations."
        },
        {
          "id": "linux-401-l01-f2",
          "front": "Decision rights",
          "back": "Defined authority to approve, reject, or escalate high-impact changes."
        },
        {
          "id": "linux-401-l01-f3",
          "front": "Service contract",
          "back": "Explicit expectation of capabilities, SLAs, and ownership boundaries between teams."
        }
      ],
      "learningAids": [
        {
          "id": "linux-401-l01-a1",
          "type": "image",
          "title": "Operating Model Blueprint",
          "content": "Blueprint contrasting centralized, federated, and hybrid Linux platform models."
        }
      ]
    },
    {
      "id": "linux-401-l02",
      "title": "Fleet Risk Governance and Change Safety Lab",
      "type": "interactive",
      "duration": 17,
      "chunks": [
        {
          "id": "linux-401-l02-c1",
          "kind": "concept",
          "title": "Change Blast Radius",
          "content": "In large-scale operations, even tiny errors in system configuration can cause major problems that affect many parts of the system. To effectively manage this risk, organizations must adopt strong governance practices. This includes carefully checking and validating any changes before they are implemented, gradually rolling out updates in stages to monitor their impact, continuously observing the health of the systems, and establishing clear criteria for automatically reverting any changes if issues arise. These steps help ensure that the systems remain stable and reliable, minimizing the chances of widespread failures."
        },
        {
          "id": "linux-401-l02-c2",
          "kind": "practice",
          "title": "Policy Lifecycle",
          "content": "A change policy should clearly outline the steps involved in making changes to the system. This includes proposing changes, simulating their effects, getting approval, rolling them out, monitoring their impact, and eventually retiring outdated policies. For any high-risk changes, it's essential to have an owner responsible for the change, evidence to support it, and a fallback plan in case things don't go as expected.\nContext recap: A change policy should clearly outline the steps involved in making changes to the system. This includes proposing changes, simulating their effects, getting approval, rolling them out, monitoring their impact, and eventually retiring outdated policies. For any high-risk changes, it's essential to have an owner responsible for the change, evidence to support it, and a fallback plan in case things don't go as expected."
        }
      ],
      "interactiveActivities": [
        {
          "id": "linux-401-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Risk Match",
          "description": "Match governance controls to the risks they mitigate.",
          "pairs": [
            {
              "left": "Canary rollout",
              "right": "Limits initial impact to small host subset"
            },
            {
              "left": "Automated health gate",
              "right": "Blocks promotion when service SLO degrades"
            },
            {
              "left": "Immutable baseline policy",
              "right": "Reduces drift and unauthorized host variance"
            },
            {
              "left": "Rollback trigger threshold",
              "right": "Defines immediate reversion condition"
            }
          ]
        },
        {
          "id": "linux-401-l02-act2",
          "type": "scenario_practice",
          "title": "Kernel Patch Incident Exercise",
          "description": "Contain fleet instability caused by a bad patch rollout.",
          "instructions": [
            "Select first containment action with lowest systemic risk.",
            "Define one governance update to prevent recurrence."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Which metric should gate fleet rollout progression?",
          "How do you choose canary population composition?",
          "What evidence must be captured after high-risk changes?"
        ]
      },
      "learningAids": [
        {
          "id": "linux-401-l02-a1",
          "type": "practice",
          "title": "Fleet Change Worksheet",
          "content": "Template for scope, canary plan, health gates, rollback trigger, and approver evidence."
        }
      ]
    },
    {
      "id": "linux-401-l03",
      "title": "Checkpoint 1: Governance and Fleet Safety",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "linux-401-l03-q1",
          "text": "Why are staged rollouts critical in Linux fleet operations?",
          "skillId": "linux-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "They increase blast radius quickly"
            },
            {
              "id": "b",
              "text": "They expose failures early before global impact"
            },
            {
              "id": "c",
              "text": "They remove need for monitoring"
            },
            {
              "id": "d",
              "text": "They replace rollback design"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Staging limits exposure and enables controlled validation."
        },
        {
          "id": "linux-401-l03-q2",
          "text": "Most common governance failure during severe incidents is:",
          "skillId": "linux-401-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "Clear escalation ownership"
            },
            {
              "id": "b",
              "text": "Ambiguous authority and delayed containment"
            },
            {
              "id": "c",
              "text": "Frequent situation reports"
            },
            {
              "id": "d",
              "text": "Predefined rollback criteria"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Unclear decision rights prolong outage duration and impact."
        },
        {
          "id": "linux-401-l03-q3",
          "text": "What is the strongest value of immutable baseline policy?",
          "skillId": "linux-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Prevents all incidents permanently"
            },
            {
              "id": "b",
              "text": "Reduces drift and improves predictability across hosts"
            },
            {
              "id": "c",
              "text": "Eliminates need for documentation"
            },
            {
              "id": "d",
              "text": "Avoids patching"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Drift reduction is central to fleet reliability and security posture."
        },
        {
          "id": "linux-401-l03-q4",
          "text": "A credible high-risk change record should include:",
          "skillId": "linux-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Only final success claim"
            },
            {
              "id": "b",
              "text": "Intent, validation evidence, approver, and rollback conditions"
            },
            {
              "id": "c",
              "text": "No owner assignment"
            },
            {
              "id": "d",
              "text": "Untracked chat notes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Structured evidence enables accountability and repeatable learning."
        }
      ],
      "learningAids": [
        {
          "id": "linux-401-l03-a1",
          "type": "mnemonic",
          "title": "GATE",
          "content": "Goal, Approval, Thresholds, Evidence."
        }
      ]
    },
    {
      "id": "linux-401-l04",
      "title": "Reliability Economics and Platform Portfolio Strategy",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "linux-401-l04-c1",
          "kind": "concept",
          "title": "Failure Cost Framing",
          "content": "When a Linux platform experiences problems, it can result in various costs for a business. These costs may include lost transactions, which means missed sales opportunities, delays in operations that can slow down productivity, and a loss of trust from customers who expect reliable service. To make smart investment choices, businesses should concentrate on minimizing these risks instead of simply opting for the newest tools available. By understanding the potential financial impact of failures, companies can better decide where to invest their resources to ensure a more reliable and efficient operation."
        },
        {
          "id": "linux-401-l04-c2",
          "kind": "concept",
          "title": "Portfolio Prioritization",
          "content": "When we think about which initiatives to prioritize, we need to look at several important factors. First, we should assess how central each initiative is to the overall system. This means understanding how much it affects other parts of the system. Next, we should examine the history of incidents related to each initiative. This helps us see if there have been problems in the past that we need to address. Additionally, we need to consider how confident we are in the strategies we have to mitigate any issues that might arise. Finally, we should evaluate the potential impact of each initiative on the business as a whole. Interestingly, foundational changes, which may not be immediately noticeable, can often lead to greater benefits than smaller optimizations that might seem more attractive at first. By focusing on these key areas, we can make more informed decisions about where to direct our efforts and resources."
        },
        {
          "id": "linux-401-l04-c3",
          "kind": "example",
          "title": "Executive Recommendation Pattern",
          "content": "When making recommendations, it's important to be clear about what you expect to happen and the reasons behind those expectations. For instance, you might say that if we enforce a specific configuration baseline, we expect to see a 35% reduction in serious incidents over the next two quarters. However, this outcome depends on ensuring that all hosts are fully enrolled in this process. By providing this level of detail, stakeholders can better grasp the potential benefits and impacts of the changes being proposed, allowing for more informed decision-making."
        }
      ],
      "flashcards": [
        {
          "id": "linux-401-l04-f1",
          "front": "Reliability ROI",
          "back": "Expected outage-risk reduction per unit of engineering investment."
        },
        {
          "id": "linux-401-l04-f2",
          "front": "Dependency centrality",
          "back": "Degree to which critical services rely on a specific platform component."
        },
        {
          "id": "linux-401-l04-f3",
          "front": "Mitigation confidence",
          "back": "Likelihood that a planned intervention will produce the predicted improvement."
        }
      ],
      "learningAids": [
        {
          "id": "linux-401-l04-a1",
          "type": "image",
          "title": "Risk-Reduction Portfolio Matrix",
          "content": "Matrix ranking platform initiatives by systemic impact and implementation effort."
        }
      ]
    },
    {
      "id": "linux-401-l05",
      "title": "Supply Chain Trust and Provenance Assurance Lab",
      "type": "interactive",
      "duration": 17,
      "chunks": [
        {
          "id": "linux-401-l05-c1",
          "kind": "concept",
          "title": "Trust Boundaries",
          "content": "Ensuring the security of a Linux fleet involves more than just securing individual hosts. It also includes verifying the origins of software packages, maintaining the integrity of the build pipeline, signing artifacts, and ensuring transparency in dependencies. These practices help build trust in the systems and the software being used.\nContext recap: Ensuring the security of a Linux fleet involves more than just securing individual hosts. It also includes verifying the origins of software packages, maintaining the integrity of the build pipeline, signing artifacts, and ensuring transparency in dependencies. These practices help build trust in the systems and the software being used."
        },
        {
          "id": "linux-401-l05-c2",
          "kind": "practice",
          "title": "Verification Workflow",
          "content": "To ensure the authenticity of software, it is important to have a verification workflow in place. This includes documenting checks to confirm the source of software, signals that indicate reproducibility, and controls for approving releases before they are deployed. These steps help maintain the integrity and security of the software supply chain.\nContext recap: To ensure the authenticity of software, it is important to have a verification workflow in place. This includes documenting checks to confirm the source of software, signals that indicate reproducibility, and controls for approving releases before they are deployed. These steps help maintain the integrity and security of the software supply chain."
        }
      ],
      "interactiveActivities": [
        {
          "id": "linux-401-l05-act1",
          "type": "sorting_buckets",
          "title": "Control Classification",
          "description": "Sort controls by where they apply in supply-chain defense.",
          "buckets": [
            "Source",
            "Build",
            "Deploy"
          ],
          "items": [
            {
              "text": "Signed upstream source verification",
              "bucket": "Source"
            },
            {
              "text": "Artifact signature and attestations",
              "bucket": "Build"
            },
            {
              "text": "Admission policy gate in deployment pipeline",
              "bucket": "Deploy"
            },
            {
              "text": "Dependency allowlist maintenance",
              "bucket": "Source"
            }
          ]
        },
        {
          "id": "linux-401-l05-act2",
          "type": "scenario_practice",
          "title": "Compromised Package Simulation",
          "description": "Respond to suspected package compromise in production pipeline.",
          "instructions": [
            "Define immediate containment action.",
            "Specify one permanent control improvement."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Which supply-chain signal should block release automatically?",
          "How do you balance release speed against provenance strictness?",
          "What minimum evidence should auditors receive for platform releases?"
        ]
      },
      "learningAids": [
        {
          "id": "linux-401-l05-a1",
          "type": "practice",
          "title": "Provenance Audit Worksheet",
          "content": "Template for source evidence, build attestations, deploy approval, and exception tracking."
        }
      ]
    },
    {
      "id": "linux-401-l06",
      "title": "Checkpoint 2: Economics, Trust, and Strategy",
      "type": "quiz",
      "duration": 11,
      "questions": [
        {
          "id": "linux-401-l06-q1",
          "text": "Best metric pairing for prioritizing Linux platform reliability investments is:",
          "skillId": "linux-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Host count and shell prompt style"
            },
            {
              "id": "b",
              "text": "Incident cost impact and dependency criticality"
            },
            {
              "id": "c",
              "text": "Number of package managers installed"
            },
            {
              "id": "d",
              "text": "Age of log files"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Impact and centrality are strongest portfolio signals."
        },
        {
          "id": "linux-401-l06-q2",
          "text": "Why require artifact provenance checks before deployment?",
          "skillId": "linux-401-skill-supply-chain",
          "options": [
            {
              "id": "a",
              "text": "To slow delivery with no security benefit"
            },
            {
              "id": "b",
              "text": "To reduce risk from tampered or untrusted build outputs"
            },
            {
              "id": "c",
              "text": "To remove patch management"
            },
            {
              "id": "d",
              "text": "To avoid release documentation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Provenance controls reduce software supply-chain compromise risk."
        },
        {
          "id": "linux-401-l06-q3",
          "text": "What makes an executive Linux platform recommendation credible?",
          "skillId": "linux-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Only technical jargon"
            },
            {
              "id": "b",
              "text": "Measurable outcomes, assumptions, risks, and owner accountability"
            },
            {
              "id": "c",
              "text": "Longest incident timeline"
            },
            {
              "id": "d",
              "text": "No mention of trade-offs"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Executives need decision-ready impact with clear risk boundaries."
        },
        {
          "id": "linux-401-l06-q4",
          "text": "Leading indicators in fleet operations are useful because they:",
          "skillId": "linux-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Only explain past outages"
            },
            {
              "id": "b",
              "text": "Enable earlier corrective action before major incidents"
            },
            {
              "id": "c",
              "text": "Replace all lagging indicators"
            },
            {
              "id": "d",
              "text": "Remove need for SLOs"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Early signals enable proactive risk reduction."
        },
        {
          "id": "linux-401-l06-q5",
          "text": "During severe fleet incidents, explicit decision rights primarily improve:",
          "skillId": "linux-401-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "Delay and ambiguity"
            },
            {
              "id": "b",
              "text": "Containment speed and coordination clarity"
            },
            {
              "id": "c",
              "text": "Volume of speculation"
            },
            {
              "id": "d",
              "text": "Need for communication"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Clear authority reduces response latency in high-pressure events."
        }
      ],
      "learningAids": [
        {
          "id": "linux-401-l06-a1",
          "type": "mnemonic",
          "title": "CLEAR",
          "content": "Context, Levers, Economics, Accountability, Risk."
        }
      ]
    },
    {
      "id": "linux-401-l07",
      "title": "Capstone: Linux Platform Transformation Proposal",
      "type": "interactive",
      "duration": 20,
      "chunks": [
        {
          "id": "linux-401-l07-c1",
          "kind": "practice",
          "title": "Capstone Brief",
          "content": "For your capstone project, you will be tasked with developing a comprehensive proposal aimed at transforming the Linux platform over the next two years. This proposal should address several critical components, including fleet governance, which ensures that all systems are managed effectively; reliability improvements to enhance the performance and uptime of the platform; and controls for supply chain trust to ensure that all components are secure and trustworthy. Additionally, you will need to outline key milestones for execution, which will serve as checkpoints to measure progress throughout the transformation process. This project is an excellent opportunity for you to apply the knowledge and skills you have acquired in a real-world context, making it both practical and impactful."
        },
        {
          "id": "linux-401-l07-c2",
          "kind": "recap",
          "title": "Assessment Criteria",
          "content": "An effective proposal is one that clearly links the changes in engineering to the overall goals of the business. It should provide specific numbers to show the expected improvements, making it easier to understand the impact of these changes. Additionally, it is important to identify who will be responsible for each part of the proposal, how any potential risks will be managed, and to set up quarterly checkpoints. These checkpoints will allow the team to review progress and make necessary adjustments, ensuring that the proposal remains thorough and actionable.\nContext recap: An effective proposal is one that clearly links the changes in engineering to the overall goals of the business. It should provide specific numbers to show the expected improvements, making it easier to understand the impact of these changes. Additionally, it is important to identify who will be responsible for each part of the proposal, how any potential risks will be managed, and to set up quarterly checkpoints. These checkpoints will allow the team to review progress and make necessary adjustments, ensuring that the proposal remains thorough and actionable."
        }
      ],
      "metadata": {
        "prompts": [
          "Present three strategic initiatives and expected impact metrics.",
          "Identify top three risks and mitigation owners.",
          "Define one executive KPI and one engineering KPI per initiative."
        ]
      },
      "learningAids": [
        {
          "id": "linux-401-l07-a1",
          "type": "practice",
          "title": "Board Memo Framework",
          "content": "Template for options, recommendation, economics, risk controls, and milestone roadmap."
        }
      ]
    }
  ]
};
