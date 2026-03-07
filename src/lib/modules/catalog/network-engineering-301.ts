import type { LearningModule } from "@/lib/modules/types";

export const network_engineering_301_Module: LearningModule = {
  "id": "network-engineering-301",
  "title": "Advanced Network Architecture and Automation",
  "description": "An advanced networking curriculum covering BGP/OSPF design at scale, traffic engineering, EVPN overlays, network programmability, and high-reliability operations for large enterprise and service-provider environments.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "networking",
    "automation",
    "architecture"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Design scalable underlay and overlay architectures with clear fault domains.",
    "Apply advanced BGP and OSPF policy for deterministic traffic behavior.",
    "Implement traffic engineering and QoS strategies for mixed-criticality workloads.",
    "Use automation and intent validation to reduce configuration drift.",
    "Perform deep packet-path troubleshooting across control and data planes.",
    "Plan safe, large-scale network changes with measurable blast-radius controls."
  ],
  "lessons": [
    {
      "id": "network-engineering-301-l01",
      "title": "Large-Scale Routing Architecture",
      "type": "video",
      "duration": 13,
      "chunks": [
        {
          "id": "network-engineering-301-l01-c1",
          "kind": "concept",
          "title": "Control-Plane Scalability",
          "content": "When designing large-scale routing systems, we must manage several key factors to ensure stability and performance. These include convergence time (how quickly the network adapts to changes), route churn (the frequency of route updates), and policy complexity. To handle these challenges, designers use techniques like route summarization to reduce the number of advertised routes, hierarchical design to create logical boundaries, and policy isolation to contain the impact of changes. A well-designed system balances these scaling techniques with the need to retain enough path detail to meet specific traffic engineering goals, ensuring data flows efficiently and predictably."
        },
        {
          "id": "network-engineering-301-l01-c2",
          "kind": "concept",
          "title": "BGP in Enterprise-Scale Environments",
          "content": "The Border Gateway Protocol (BGP) is no longer just for internet edge routing. In large enterprises, internal BGP (iBGP) is essential for scaling both underlay and overlay control planes. Using tools like route reflectors and BGP communities, architects can create sophisticated and manageable routing policies. The key to success is establishing a clear, intent-based policy framework and designing for predictable pathing. This disciplined approach helps prevent common large-scale issues such as route leaks, suboptimal traffic patterns, and unintended transit behaviors that can degrade network performance and reliability."
        },
        {
          "id": "network-engineering-301-l01-c3",
          "kind": "recap",
          "title": "Architectural Guardrails",
          "content": "To maintain a healthy network that can grow without becoming unstable, it's crucial to establish architectural guardrails. These are predefined rules that prevent dangerous configurations. Examples include setting maximum prefix limits to protect router memory, implementing route dampening to reduce instability from flapping links, mandating BGP community tagging for clear policy identification, and using automated policy linting to check configurations for errors before deployment. These guardrails act as a safety framework, minimizing the risk of human error and ensuring controlled, predictable network evolution."
        }
      ],
      "flashcards": [
        {
          "id": "network-engineering-301-l01-f1",
          "front": "What is a BGP Route Reflector?",
          "back": "A BGP scaling mechanism that reduces the need for a full mesh of iBGP sessions by reflecting routes it receives from one client to other clients."
        },
        {
          "id": "network-engineering-301-l01-f2",
          "front": "What is route churn?",
          "back": "Frequent route updates and withdrawals in a network. High churn can increase CPU load on routers and lead to network instability."
        },
        {
          "id": "network-engineering-301-l01-f3",
          "front": "What is a policy guardrail?",
          "back": "A predefined, often automated, rule that prevents a configuration change from violating architectural standards or causing unsafe routing behavior."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-301-l01-a1",
          "type": "image",
          "title": "Scale Routing Blueprint",
          "content": "Reference blueprint showing a hierarchical network design with distinct core, distribution, and access layers, highlighting route reflector placement, summarization points, and policy boundaries."
        }
      ]
    },
    {
      "id": "network-engineering-301-l02",
      "title": "Traffic Engineering and QoS Lab",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "network-engineering-301-l02-c1",
          "kind": "concept",
          "title": "Traffic Engineering Intent",
          "content": "Traffic engineering is the practice of managing data flow across a network to optimize performance. The primary goal is to balance path utilization, latency, and resiliency. A key challenge for engineers is understanding the difference between the control plane's preferred path (the route calculated by protocols) and the data plane's actual path (the route packets actually take). These can diverge under conditions like link congestion, failures, or specific policy overrides. Effective traffic engineering requires visibility into both to ensure the network behaves as intended under all conditions."
        },
        {
          "id": "network-engineering-301-l02-c2",
          "kind": "concept",
          "title": "QoS in Practice",
          "content": "Quality of Service (QoS) ensures that critical applications receive the network resources they need. This is achieved by classifying traffic, marking it with a priority, placing it into appropriate queues, and enforcing policies like rate limiting. A misconfigured QoS policy can be counterproductive, potentially starving low-priority traffic or failing to protect real-time services like voice and video during congestion. To prevent this, policies must be validated rigorously using both synthetic stress tests and analysis of live traffic telemetry to confirm they meet the intended performance goals."
        }
      ],
      "interactiveActivities": [
        {
          "id": "network-engineering-301-l02-act1",
          "type": "sorting_buckets",
          "title": "QoS Policy Classification",
          "description": "Sort these traffic classes into the appropriate forwarding treatment categories.",
          "buckets": [
            "Low Latency",
            "Assured Forwarding",
            "Best Effort"
          ],
          "items": [
            {
              "text": "Voice signaling and media",
              "bucket": "Low Latency"
            },
            {
              "text": "Interactive business app traffic",
              "bucket": "Assured Forwarding"
            },
            {
              "text": "Software updates",
              "bucket": "Best Effort"
            },
            {
              "text": "Backup replication",
              "bucket": "Best Effort"
            },
            {
              "text": "Critical ERP transaction flow",
              "bucket": "Assured Forwarding"
            }
          ]
        },
        {
          "id": "network-engineering-301-l02-act2",
          "type": "scenario_practice",
          "title": "Path Shift Drill",
          "description": "Choose policy changes to relieve a congested WAN link while preserving SLA traffic.",
          "instructions": [
            "Scenario: A primary 10Gbps WAN link is at 95% utilization, causing high latency for critical ERP traffic. A secondary 5Gbps link is only at 20% utilization.",
            "Choose one immediate action and one medium-term redesign action to offload non-critical traffic without impacting the ERP application.",
            "State one risk for each action."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "How can a preferred BGP path and the actual traffic path diverge?",
          "What QoS misconfiguration could increase jitter for voice traffic during peak hours?",
          "Which metric would best prove your traffic engineering change was successful?"
        ]
      },
      "learningAids": [
        {
          "id": "network-engineering-301-l02-a1",
          "type": "practice",
          "title": "QoS Validation Sheet",
          "content": "A worksheet to guide the comparison of pre- and post-change telemetry, including queue drops, latency, and jitter measurements for each defined traffic class."
        }
      ]
    },
    {
      "id": "network-engineering-301-l03",
      "title": "Checkpoint 1: Architecture and QoS",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "network-engineering-301-l03-q1",
          "text": "What is the primary purpose of BGP route reflectors in large networks?",
          "skillId": "network-engineering-301-skill-routing",
          "options": [
            {
              "id": "a",
              "text": "Increase packet encryption"
            },
            {
              "id": "b",
              "text": "Reduce iBGP full-mesh scaling complexity"
            },
            {
              "id": "c",
              "text": "Replace all IGP protocols"
            },
            {
              "id": "d",
              "text": "Eliminate path policy"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Route reflectors simplify iBGP topologies by reducing the number of required peerings, which is critical for scaling."
        },
        {
          "id": "network-engineering-301-l03-q2",
          "text": "Which QoS class should be used to protect delay-sensitive voice media traffic?",
          "skillId": "network-engineering-301-skill-qos",
          "options": [
            {
              "id": "a",
              "text": "Low Latency Priority Queue"
            },
            {
              "id": "b",
              "text": "Best Effort Queue"
            },
            {
              "id": "c",
              "text": "Bulk Transfer Queue"
            },
            {
              "id": "d",
              "text": "Scavenger Queue"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Delay-sensitive traffic like voice requires priority treatment in a low-latency queue to minimize jitter and packet loss."
        },
        {
          "id": "network-engineering-301-l03-q3",
          "text": "Why are routing policy guardrails important at scale?",
          "skillId": "network-engineering-301-skill-operations",
          "options": [
            {
              "id": "a",
              "text": "They prevent unsafe policy changes from causing broad impact"
            },
            {
              "id": "b",
              "text": "They remove the need for testing"
            },
            {
              "id": "c",
              "text": "They disable all route updates"
            },
            {
              "id": "d",
              "text": "They guarantee zero congestion"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Guardrails act as an automated safety check to reduce the blast radius of mistakes in control-plane policy."
        },
        {
          "id": "network-engineering-301-l03-q4",
          "text": "What is the most reliable way to validate the success of a traffic engineering change?",
          "skillId": "network-engineering-301-skill-qos",
          "options": [
            {
              "id": "a",
              "text": "Assume success if the configuration commits without error"
            },
            {
              "id": "b",
              "text": "Compare pre- and post-change telemetry for utilization, latency, and drops"
            },
            {
              "id": "c",
              "text": "Turn off monitoring to avoid false alarms"
            },
            {
              "id": "d",
              "text": "Rely on a single ping test"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Only measured telemetry outcomes can confirm that a design change has achieved its intended goal."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-301-l03-a1",
          "type": "mnemonic",
          "title": "PATH",
          "content": "A mnemonic for reliable network design: Policy, Assertions, Telemetry, Hardening."
        }
      ]
    },
    {
      "id": "network-engineering-301-l04",
      "title": "EVPN/VXLAN and Overlay Fabrics",
      "type": "video",
      "duration": 13,
      "chunks": [
        {
          "id": "network-engineering-301-l04-c1",
          "kind": "concept",
          "title": "Underlay and Overlay Separation",
          "content": "Modern network fabrics separate the logical service layer (overlay) from the physical transport layer (underlay). This abstraction provides immense flexibility. VXLAN is an encapsulation technique that tunnels Layer 2 frames over a Layer 3 network, effectively stretching subnets wherever needed. EVPN acts as the advanced control plane for these overlays, using BGP to distribute MAC and IP address reachability information. This is a major improvement over older flood-and-learn methods, offering greater scalability, control, and operational visibility."
        },
        {
          "id": "network-engineering-301-l04-c2",
          "kind": "concept",
          "title": "Operational Considerations",
          "content": "A stable overlay depends entirely on a robust underlay. Key operational considerations include meticulous planning of Maximum Transmission Unit (MTU) sizes to account for VXLAN header overhead, ensuring consistent endpoint policies, and having effective troubleshooting tools. Because traffic is encapsulated, traditional tools may be less effective. Engineers need methods to trace packet paths through both the overlay tunnels and the physical underlay to quickly diagnose and resolve issues."
        },
        {
          "id": "network-engineering-301-l04-c3",
          "kind": "recap",
          "title": "Design Trade-offs",
          "content": "While EVPN and VXLAN offer superior scalability and flexibility, they introduce greater control-plane complexity. Successful adoption requires a mature operational model. This includes using standardized configuration templates to ensure consistency, deploying comprehensive monitoring tools to maintain visibility into the fabric's health, and implementing a phased rollout strategy to de-risk the migration. The benefits are significant, but they must be balanced against the investment in tooling and process."
        }
      ],
      "flashcards": [
        {
          "id": "network-engineering-301-l04-f1",
          "front": "What is EVPN?",
          "back": "Ethernet VPN. A modern, BGP-based control plane for distributing MAC and IP address information in overlay networks like VXLAN."
        },
        {
          "id": "network-engineering-301-l04-f2",
          "front": "What is VXLAN?",
          "back": "Virtual Extensible LAN. An overlay encapsulation protocol that allows Layer 2 segments to be tunneled across a Layer 3 network."
        },
        {
          "id": "network-engineering-301-l04-f3",
          "front": "What is an underlay network?",
          "back": "The physical or logical transport network (typically IP-based) that is responsible for forwarding the encapsulated traffic of an overlay network."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-301-l04-a1",
          "type": "image",
          "title": "Overlay Fabric Packet Path",
          "content": "A diagram tracing a packet from a source endpoint, showing its VXLAN encapsulation at the source VTEP, forwarding across the IP underlay, and decapsulation at the destination VTEP before delivery."
        }
      ]
    },
    {
      "id": "network-engineering-301-l05",
      "title": "Network Automation and Intent Validation Lab",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "network-engineering-301-l05-c1",
          "kind": "concept",
          "title": "From CLI Drift to Intent",
          "content": "Manual, device-by-device configuration via the Command Line Interface (CLI) is prone to errors and leads to 'configuration drift,' where the running state of the network no longer matches the intended design. The modern approach is to use an automation pipeline driven by a 'source of truth.' This system generates configurations from high-level intent-based policies and includes pre- and post-change validation to ensure the network's state consistently reflects the desired outcome, enhancing reliability and agility."
        },
        {
          "id": "network-engineering-301-l05-c2",
          "kind": "practice",
          "title": "Building a Safe Change Pipeline",
          "content": "A safe network automation pipeline incorporates several stages to minimize risk. It begins with static validation, such as syntax and policy compliance checks. Next, changes are tested in a simulated or lab environment to predict their impact on network topology and behavior. Approved changes are then deployed incrementally using a 'canary' rollout to a small part of the network. Throughout this process, telemetry is monitored closely, and an automatic rollback is triggered if anomalies are detected, ensuring changes are deployed safely and reliably."
        }
      ],
      "interactiveActivities": [
        {
          "id": "network-engineering-301-l05-act1",
          "type": "timeline_builder",
          "title": "Automation Pipeline Order",
          "description": "Place the stages of a safe network automation pipeline in the correct execution order.",
          "data": {
            "stages": [
              "Intent definition in source of truth",
              "Template generation",
              "Static analysis and policy validation",
              "Lab simulation and testing",
              "Canary rollout to limited scope",
              "Telemetry verification",
              "Full rollout"
            ]
          }
        }
      ],
      "metadata": {
        "prompts": [
          "What telemetry signals should trigger an automatic rollback during a change?",
          "Why is a canary rollout useful in network automation, similar to application deployment?",
          "Name one policy invariant you would enforce in pre-deployment validation."
        ]
      },
      "learningAids": [
        {
          "id": "network-engineering-301-l05-a1",
          "type": "practice",
          "title": "Intent Test Catalog",
          "content": "A checklist of common policy invariants to test before deployment: no unauthorized BGP transit, adherence to route prefix limits, ACL consistency, and correct MTU policy."
        },
        {
          "id": "network-engineering-301-l05-a2",
          "type": "image",
          "title": "CI/CD Pipeline for Network Changes",
          "content": "Diagram showing the flow from a code commit (intent) through automated stages of validation, simulation, canary deployment, and full production rollout, with telemetry feedback loops at each step."
        }
      ]
    },
    {
      "id": "network-engineering-301-l06",
      "title": "Checkpoint 2: Overlay and Automation",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "network-engineering-301-l06-q1",
          "text": "What is the main benefit of EVPN over older flood-and-learn overlay methods?",
          "skillId": "network-engineering-301-skill-overlay",
          "options": [
            {
              "id": "a",
              "text": "It requires no control plane"
            },
            {
              "id": "b",
              "text": "Its BGP-based control plane improves scale and reachability signaling"
            },
            {
              "id": "c",
              "text": "It requires no underlay network"
            },
            {
              "id": "d",
              "text": "All traffic is encrypted by default"
            }
          ],
          "correctOptionId": "b",
          "explanation": "EVPN provides an explicit, scalable control-plane for exchanging endpoint reachability information, avoiding inefficient traffic flooding."
        },
        {
          "id": "network-engineering-301-l06-q2",
          "text": "What is the most important reason to include simulation in a network automation pipeline?",
          "skillId": "network-engineering-301-skill-automation",
          "options": [
            {
              "id": "a",
              "text": "It slows down the delivery process intentionally"
            },
            {
              "id": "b",
              "text": "It can catch topology and policy failures before they impact production"
            },
            {
              "id": "c",
              "text": "It removes the need for post-deployment monitoring"
            },
            {
              "id": "d",
              "text": "It permanently replaces the need for design reviews"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Simulation reduces risk by revealing logical errors and unintended policy interactions in a safe environment before they can cause an outage."
        },
        {
          "id": "network-engineering-301-l06-q3",
          "text": "Which practice best reduces configuration drift over the long term?",
          "skillId": "network-engineering-301-skill-automation",
          "options": [
            {
              "id": "a",
              "text": "Allowing frequent ad-hoc manual edits"
            },
            {
              "id": "b",
              "text": "Using an intent-based source of truth with automated deployment"
            },
            {
              "id": "c",
              "text": "Ignoring configuration difference reports"
            },
            {
              "id": "d",
              "text": "Disabling configuration backups"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A single source of truth combined with automation is the most effective way to limit unsanctioned changes and enforce the intended state."
        },
        {
          "id": "network-engineering-301-l06-q4",
          "text": "What is a key prerequisite for stable overlay network operations?",
          "skillId": "network-engineering-301-skill-overlay",
          "options": [
            {
              "id": "a",
              "text": "Unstable underlay links"
            },
            {
              "id": "b",
              "text": "Consistent underlay reachability and MTU planning"
            },
            {
              "id": "c",
              "text": "Random VNI assignment"
            },
            {
              "id": "d",
              "text": "No telemetry"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The reliability of an overlay network is fundamentally dependent on the stability and proper configuration of its underlay, including reachability and MTU."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-301-l06-a1",
          "type": "mnemonic",
          "title": "SAFE Change",
          "content": "A mnemonic for a safe automation pipeline: Simulate, Apply canary, Follow telemetry, Expand rollout."
        }
      ]
    },
    {
      "id": "network-engineering-301-l07",
      "title": "Capstone: Multi-Site Network Redesign",
      "type": "interactive",
      "duration": 18,
      "chunks": [
        {
          "id": "network-engineering-301-l07-c1",
          "kind": "practice",
          "title": "Redesign Scenario",
          "content": "Your capstone challenge is to propose a network redesign for a rapidly growing organization. Their current network suffers from high WAN latency, poor security segmentation, and risky manual change processes. Your task is to design a new architecture that addresses these issues. You must deliver a detailed proposal that includes the target architecture, a phased migration plan, and a risk management strategy to ensure a smooth and successful transition. This project will test your ability to apply all the concepts from this course to a real-world problem."
        },
        {
          "id": "network-engineering-301-l07-c2",
          "kind": "recap",
          "title": "Evaluation Criteria",
          "content": "Your design proposal will be evaluated on its clarity, completeness, and technical soundness. To achieve a top score, you must clearly define your intended routing and security policies, specify telemetry and monitoring requirements, include viable fallback plans for each migration phase, and establish measurable success criteria. These criteria should be tied directly to business outcomes, such as improved application performance and operational reliability."
        }
      ],
      "metadata": {
        "prompts": [
          "Define three key architecture decisions you made and their trade-offs.",
          "Choose the single biggest migration risk and describe your mitigation plan.",
          "Name two Key Performance Indicators (KPIs) that would prove your redesign was successful after 90 days."
        ]
      },
      "learningAids": [
        {
          "id": "network-engineering-301-l07-a1",
          "type": "practice",
          "title": "Architecture Decision Record (ADR)",
          "content": "A template to structure your design choices. For each decision, document the context, alternatives considered, final decision, rationale, potential risks, and measurable success criteria."
        }
      ]
    }
  ]
};
