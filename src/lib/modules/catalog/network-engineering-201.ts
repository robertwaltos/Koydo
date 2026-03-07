import type { LearningModule } from "@/lib/modules/types";

export const network_engineering_201_Module: LearningModule = {
  "id": "network-engineering-201",
  "title": "Network Engineering Operations",
  "description": "Intermediate network engineering focused on enterprise operations, routing behavior, fault isolation, performance tuning, and secure service delivery across campus, branch, and cloud-connected environments.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "networking",
    "operations",
    "troubleshooting"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Design resilient Layer 2 and Layer 3 enterprise network segments",
    "Analyze OSPF and BGP behaviors in realistic failure and convergence scenarios",
    "Troubleshoot packet loss, latency, and asymmetric routing using structured workflows",
    "Apply network security controls including segmentation, NAC, and VPN policy boundaries",
    "Use telemetry and baseline metrics to identify performance regressions early",
    "Create incident playbooks that improve recovery speed and change safety"
  ],
  "lessons": [
    {
      "id": "network-engineering-201-l01",
      "title": "Enterprise Topology and Redundancy Patterns",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Compare hierarchical campus and spine-leaf patterns",
        "Explain first-hop redundancy protocols and uplink design",
        "Identify single points of failure in branch and campus layouts"
      ],
      "chunks": [
        {
          "id": "network-engineering-201-l01-c1",
          "kind": "concept",
          "title": "Topology Patterns",
          "content": "Modern enterprise networks often blend traditional and new designs for efficiency and resilience. A common model is the three-tier hierarchical design (core, distribution, access), which simplifies policy management and isolates failures. For high-performance environments like data centers, a spine-leaf architecture provides low-latency, non-blocking connectivity. Choosing the right architecture depends on factors like network scale, traffic patterns, and operational maturity. A well-chosen topology forms the foundation for a stable and scalable network.",
          "visualPrompts": [
            "Diagram comparing the three-tier hierarchical model (core, distribution, access layers) with a two-tier spine-leaf fabric."
          ]
        },
        {
          "id": "network-engineering-201-l01-c2",
          "kind": "concept",
          "title": "Gateway and Uplink Redundancy",
          "content": "To ensure high availability, networks require redundancy at key points. First-Hop Redundancy Protocols (FHRPs) like VRRP and HSRP provide a virtual default gateway for endpoints, allowing traffic to continue flowing even if one gateway device fails. Uplink design must also incorporate redundancy through multiple paths, often using technologies like link aggregation (LAG) or routed links. Careful design is needed to prevent Layer 2 loops while ensuring fast failover. The goal is to eliminate single points of failure and create predictable traffic paths.",
          "visualPrompts": [
            "Animation showing two physical routers providing a single virtual gateway IP to a user's computer. One router fails, and traffic seamlessly shifts to the other."
          ]
        },
        {
          "id": "network-engineering-201-l01-c3",
          "kind": "recap",
          "title": "Failure-Domain Thinking",
          "content": "A key principle of resilient network design is limiting the size of failure domains—the area of a network impacted by a single fault. Techniques like VLAN segmentation and Layer 3 boundaries contain the blast radius of outages. Effective network diagrams should illustrate not just physical connectivity but also logical dependencies and failure boundaries. This approach allows engineers to understand and minimize the potential impact of any component failure, leading to a more robust and reliable network.",
          "visualPrompts": [
            "A network diagram where different sections (e.g., 'Building A', 'Data Center Pod 1') are color-coded to represent distinct failure domains."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "network-engineering-201-l01-f1",
          "front": "What is a failure domain?",
          "back": "A section of a network where a single fault can cause a service disruption. Limiting its size reduces the impact of outages."
        },
        {
          "id": "network-engineering-201-l01-f2",
          "front": "What is the purpose of a First-Hop Redundancy Protocol (FHRP)?",
          "back": "To provide a resilient default gateway for endpoints by using a virtual IP address shared between two or more routers."
        },
        {
          "id": "network-engineering-201-l01-f3",
          "front": "What is the primary goal of a spine-leaf architecture?",
          "back": "To provide consistent, low-latency, and non-blocking connectivity between all devices, ideal for scale-out traffic patterns."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-201-l01-a1",
          "type": "image",
          "title": "Topology Decision Map",
          "content": "A flowchart guiding the choice between a hierarchical campus design and a spine-leaf fabric based on traffic patterns, scale, and latency requirements."
        }
      ]
    },
    {
      "id": "network-engineering-201-l02",
      "title": "Routing Behavior and Convergence Lab",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Interpret OSPF adjacency and LSDB issues",
        "Evaluate BGP path selection under policy changes",
        "Reason about convergence trade-offs"
      ],
      "chunks": [
        {
          "id": "network-engineering-201-l02-c1",
          "kind": "concept",
          "title": "OSPF Stability",
          "content": "Open Shortest Path First (OSPF) stability depends on healthy neighbor adjacencies. For two routers to become neighbors, parameters like area ID, authentication, and timer intervals must match. A common issue is an MTU mismatch, which can cause adjacencies to get stuck in the EXSTART/EXCHANGE state. Network engineers must monitor neighbor states and correlate state changes with physical or logical network events. A stable OSPF environment ensures that the Shortest Path First (SPF) algorithm runs efficiently and routing remains consistent.",
          "visualPrompts": [
            "A state diagram illustrating the OSPF neighbor adjacency process: Down, Init, 2-Way, Exstart, Exchange, Loading, and Full."
          ]
        },
        {
          "id": "network-engineering-201-l02-c2",
          "kind": "concept",
          "title": "BGP Policy Effects",
          "content": "Border Gateway Protocol (BGP) path selection is a deterministic process influenced by policy attributes. Key attributes include LOCAL_PREF (for outbound path selection), AS_PATH length (shorter is better), and MED (Multi-Exit Discriminator). A small change to one of these attributes can significantly alter traffic flow across an entire network. Because of this high impact, BGP policy changes must be carefully modeled and tested in a lab or with a staged rollout before being deployed in production.",
          "visualPrompts": [
            "A flowchart showing the BGP best path selection algorithm, highlighting key decision points like LOCAL_PREF, AS_PATH, and MED."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "network-engineering-201-l02-act1",
          "type": "matching_pairs",
          "title": "Symptom to Root-Cause Match",
          "description": "Match common routing symptoms to their likely protocol-level causes.",
          "pairs": [
            {
              "left": "OSPF adjacency stuck in EXSTART",
              "right": "MTU mismatch between neighbors"
            },
            {
              "left": "Outbound traffic unexpectedly shifts to a backup ISP",
              "right": "A BGP LOCAL_PREF policy change was applied"
            },
            {
              "left": "CPU usage spikes on routers periodically",
              "right": "A flapping link is causing frequent SPF recalculations"
            },
            {
              "left": "A route is in the routing table but traffic is dropped",
              "right": "The next-hop IP address is unreachable"
            }
          ]
        },
        {
          "id": "network-engineering-201-l02-act2",
          "type": "scenario_practice",
          "title": "Convergence Triage",
          "description": "You are notified of routing instability across the network. What are your first steps?",
          "instructions": [
            "List the first three commands or telemetry checks you would run to assess the situation.",
            "Explain one action you would avoid to prevent making the problem worse."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Why can a route appear in the routing table but still fail to forward traffic?",
          "What is a safe method to test the impact of a BGP policy change before full deployment?",
          "How can you reduce the impact of route flapping without hiding legitimate network failures?"
        ]
      },
      "learningAids": [
        {
          "id": "network-engineering-201-l02-a1",
          "type": "practice",
          "title": "Convergence Checklist",
          "content": "A step-by-step troubleshooting checklist for validating routing issues, covering adjacency state, control-plane tables, and data-plane forwarding."
        }
      ]
    },
    {
      "id": "network-engineering-201-l03",
      "title": "Checkpoint 1: Routing and Operations",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "network-engineering-201-l03-q1",
          "text": "A route exists in the control plane, but packets sent to that destination are being dropped. What is the most likely first step to verify?",
          "skillId": "network-engineering-201-skill-routing",
          "options": [
            {
              "id": "a",
              "text": "Check next-hop reachability and forwarding table programming"
            },
            {
              "id": "b",
              "text": "Restart all switches immediately"
            },
            {
              "id": "c",
              "text": "Disable the routing protocol entirely"
            },
            {
              "id": "d",
              "text": "Ignore the issue because the route is present"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The control plane (routing table) having a route does not guarantee the data plane (forwarding table) is programmed correctly or that the next-hop is reachable."
        },
        {
          "id": "network-engineering-201-l03-q2",
          "text": "Which BGP attribute is most commonly used to influence outbound path selection within a single Autonomous System (AS)?",
          "skillId": "network-engineering-201-skill-routing",
          "options": [
            {
              "id": "a",
              "text": "Local Preference"
            },
            {
              "id": "b",
              "text": "CRC"
            },
            {
              "id": "c",
              "text": "VLAN ID"
            },
            {
              "id": "d",
              "text": "MTU"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Local Preference is a well-known attribute used to signal the preferred exit point from an AS to all internal BGP speakers. A higher value is preferred."
        },
        {
          "id": "network-engineering-201-l03-q3",
          "text": "What is the primary benefit of limiting failure domain size in a network design?",
          "skillId": "network-engineering-201-skill-architecture",
          "options": [
            {
              "id": "a",
              "text": "To increase the spread of an outage for faster detection"
            },
            {
              "id": "b",
              "text": "To reduce the number of users impacted when one component fails"
            },
            {
              "id": "c",
              "text": "To avoid any need for network monitoring"
            },
            {
              "id": "d",
              "text": "To eliminate the need for documentation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Smaller, well-defined failure domains contain the 'blast radius' of a fault, minimizing user impact and simplifying troubleshooting."
        },
        {
          "id": "network-engineering-201-l03-q4",
          "text": "Which practice improves the safety of implementing a high-impact routing policy change?",
          "skillId": "network-engineering-201-skill-operations",
          "options": [
            {
              "id": "a",
              "text": "Making direct edits to production devices with no rollback plan"
            },
            {
              "id": "b",
              "text": "Using a staged rollout with clear validation steps and rollback criteria"
            },
            {
              "id": "c",
              "text": "Disabling telemetry during the change to reduce noise"
            },
            {
              "id": "d",
              "text": "Applying changes only during peak business hours"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A guarded, staged rollout with pre-defined success metrics and a rollback plan is a standard best practice for minimizing the risk of network changes."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-201-l03-a1",
          "type": "mnemonic",
          "title": "TRACE",
          "content": "A troubleshooting mnemonic: Table (is the route present?), Reachability (can I reach the next-hop?), Adjacency (are neighbors up?), Change (what changed recently?), Evidence (check logs and counters)."
        }
      ]
    },
    {
      "id": "network-engineering-201-l04",
      "title": "Network Security Controls in Operations",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Apply segmentation and ACL strategy by trust zone",
        "Explain NAC and identity-aware access in enterprise networks",
        "Compare IPsec and SSL VPN deployment trade-offs"
      ],
      "chunks": [
        {
          "id": "network-engineering-201-l04-c1",
          "kind": "concept",
          "title": "Segmentation as Risk Control",
          "content": "Network segmentation divides a network into smaller, isolated zones to improve security and reliability. Technologies like VLANs and Virtual Routing and Forwarding (VRF) create these boundaries. Access between zones is controlled by Access Control Lists (ACLs) and firewall policies. A key security principle is 'least privilege,' meaning traffic is denied by default and only explicitly permitted. Regularly auditing these policies against actual traffic flows ensures they remain effective and helps identify misconfigurations.",
          "visualPrompts": [
            "Diagram of a network segmented into zones like 'Users', 'Servers', 'DMZ', and 'Guests', with a firewall controlling traffic flow between them."
          ]
        },
        {
          "id": "network-engineering-201-l04-c2",
          "kind": "concept",
          "title": "Access Control and Remote Connectivity",
          "content": "Network Access Control (NAC) acts as a gatekeeper, verifying a device's identity and security posture before granting access. For remote users, secure connectivity is vital. Site-to-site connections are typically secured using IPsec tunnels, which create a persistent, encrypted link between two network gateways. For individual remote users, SSL/TLS VPNs provide flexible, on-demand access, often through a web portal or client application. Both methods rely on strong authentication to verify user identity and enforce access policies.",
          "visualPrompts": [
            "Side-by-side comparison showing an IPsec tunnel connecting two office networks and a remote user connecting to a single office via an SSL VPN client."
          ]
        },
        {
          "id": "network-engineering-201-l04-c3",
          "kind": "recap",
          "title": "Operational Security Hygiene",
          "content": "Effective network security is an ongoing process, not a one-time setup. Common operational gaps include stale or overly permissive firewall rules, shared administrative credentials, and undocumented policy exceptions. Mature operations teams conduct periodic rule reviews, enforce role-based access control, and maintain a registry of all policy exceptions, each with a clear business justification, owner, and expiration date. This continuous vigilance is crucial for maintaining a strong security posture.",
          "visualPrompts": [
            "A checklist graphic for a security audit, with items like 'Review firewall rules', 'Audit admin accounts', and 'Validate segmentation'."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "network-engineering-201-l04-f1",
          "front": "What is VRF?",
          "back": "Virtual Routing and Forwarding. A technology that allows a single physical router to host multiple independent routing tables, creating logical network separation."
        },
        {
          "id": "network-engineering-201-l04-f2",
          "front": "What is NAC?",
          "back": "Network Access Control. A security approach that enforces policy on devices and users before granting them access to network resources."
        },
        {
          "id": "network-engineering-201-l04-f3",
          "front": "What is the principle of least privilege?",
          "back": "Granting users and systems only the minimum levels of access—or permissions—needed to perform their required tasks."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-201-l04-a1",
          "type": "image",
          "title": "Trust Zone Policy Map",
          "content": "A reference matrix showing typical enterprise trust zones (e.g., Production, Development, User) and the default access policies between them."
        }
      ]
    },
    {
      "id": "network-engineering-201-l05",
      "title": "Observability and Incident Handling Workshop",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Use flow telemetry and synthetic probes to detect emerging issues",
        "Create fast incident triage paths for network outages",
        "Produce blameless corrective actions"
      ],
      "chunks": [
        {
          "id": "network-engineering-201-l05-c1",
          "kind": "concept",
          "title": "Baseline and Drift",
          "content": "Effective network monitoring goes beyond simple up/down alerts. It involves establishing a performance baseline—a known, healthy state—for key metrics like latency, jitter, interface errors, and queue drops. By continuously comparing real-time data against this baseline, engineers can detect 'drift' or anomalous behavior. Identifying these subtle deviations early often allows for proactive intervention before a full-blown outage occurs and users are impacted.",
          "visualPrompts": [
            "A time-series graph showing network latency. A shaded area indicates the normal baseline range, and a red line shows the metric suddenly drifting above this range."
          ]
        },
        {
          "id": "network-engineering-201-l05-c2",
          "kind": "practice",
          "title": "Incident Playbook Structure",
          "content": "An incident playbook is a predefined set of steps for responding to a network issue. A good playbook includes: detection source, initial impact assessment, immediate containment actions, an escalation matrix for communication, and verification steps for recovery. After an incident is resolved, a blameless post-mortem review is conducted. The goal is not to assign blame but to identify systemic weaknesses and create corrective actions to prevent recurrence, improving the overall resilience of the system.",
          "visualPrompts": [
            "A flowchart illustrating the incident response lifecycle: Detect -> Triage -> Contain -> Remediate -> Recover -> Post-Mortem."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "network-engineering-201-l05-act1",
          "type": "sorting_buckets",
          "title": "Signal Classification",
          "description": "Classify these observability signals by the network layer they most likely represent.",
          "buckets": [
            "Control Plane",
            "Data Plane",
            "Physical Layer"
          ],
          "items": [
            {
              "text": "BGP session reset count spike",
              "bucket": "Control Plane"
            },
            {
              "text": "Interface CRC errors rising",
              "bucket": "Physical Layer"
            },
            {
              "text": "Packet loss on one path only",
              "bucket": "Data Plane"
            },
            {
              "text": "OSPF adjacency churn",
              "bucket": "Control Plane"
            },
            {
              "text": "Queue drops on an uplink under load",
              "bucket": "Data Plane"
            }
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Which metric, if it drifted from its baseline, would you want an alert for even before users report an outage?",
          "Write a two-sentence status update for business stakeholders during an active WAN outage.",
          "Name one type of post-incident corrective action that helps prevent a similar issue from happening again."
        ]
      },
      "learningAids": [
        {
          "id": "network-engineering-201-l05-a1",
          "type": "practice",
          "title": "Incident Update Template",
          "content": "A fill-in-the-blanks template for communicating incident status, including: Impact Statement, Current Mitigation Actions, Next Update Time, and Incident Commander."
        }
      ]
    },
    {
      "id": "network-engineering-201-l06",
      "title": "Checkpoint 2: Security and Reliability",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "network-engineering-201-l06-q1",
          "text": "Which security control most directly limits an attacker's ability to move laterally across an internal network?",
          "skillId": "network-engineering-201-skill-security",
          "options": [
            {
              "id": "a",
              "text": "A flat Layer 2 network for all devices"
            },
            {
              "id": "b",
              "text": "Zone-based segmentation with a default-deny policy"
            },
            {
              "id": "c",
              "text": "Disabling all system logs"
            },
            {
              "id": "d",
              "text": "Using one shared administrator credential"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Segmentation creates controlled boundaries, and a default-deny (or explicit allow) policy ensures that only necessary traffic can cross them, sharply reducing lateral movement."
        },
        {
          "id": "network-engineering-201-l06-q2",
          "text": "Why is establishing baseline telemetry important in network operations?",
          "skillId": "network-engineering-201-skill-observability",
          "options": [
            {
              "id": "a",
              "text": "It removes the need for troubleshooting"
            },
            {
              "id": "b",
              "text": "It helps detect abnormal drift before it becomes a major incident"
            },
            {
              "id": "c",
              "text": "It guarantees there will be no false alerts"
            },
            {
              "id": "d",
              "text": "It replaces the need for routing policy"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Comparing current performance to a known-good baseline allows for the detection of subtle changes that static thresholds might miss, enabling proactive response."
        },
        {
          "id": "network-engineering-201-l06-q3",
          "text": "What is the best first action to take after service has been restored from a major network outage?",
          "skillId": "network-engineering-201-skill-operations",
          "options": [
            {
              "id": "a",
              "text": "Close the incident ticket with no further analysis"
            },
            {
              "id": "b",
              "text": "Conduct a blameless review and assign corrective actions"
            },
            {
              "id": "c",
              "text": "Disable monitoring to reduce future alert noise"
            },
            {
              "id": "d",
              "text": "Roll back all security controls"
            }
          ],
          "correctOptionId": "b",
          "explanation": "To achieve long-term reliability, it is essential to learn from failures. A structured post-incident review identifies root causes and assigns ownership for actions to prevent recurrence."
        },
        {
          "id": "network-engineering-201-l06-q4",
          "text": "Which VPN technology is typically preferred for creating secure, persistent tunnels between two network sites?",
          "skillId": "network-engineering-201-skill-security",
          "options": [
            {
              "id": "a",
              "text": "IPsec"
            },
            {
              "id": "b",
              "text": "SMTP"
            },
            {
              "id": "c",
              "text": "DHCP relay"
            },
            {
              "id": "d",
              "text": "RDP"
            }
          ],
          "correctOptionId": "a",
          "explanation": "IPsec is a widely adopted standard for building secure, gateway-to-gateway VPNs for site-to-site connectivity."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-201-l06-a1",
          "type": "mnemonic",
          "title": "SAFE Ops",
          "content": "A mnemonic for operational best practices: Segment (limit blast radius), Alert (on deviation), Fix (the problem), Evaluate (the root cause)."
        }
      ]
    },
    {
      "id": "network-engineering-201-l07",
      "title": "Capstone: Branch Network Modernization",
      "type": "interactive",
      "duration": 18,
      "objectives": [
        "Synthesize design, routing, security, and operations practices",
        "Prioritize modernization tasks under risk and budget constraints",
        "Produce a practical rollout and validation plan"
      ],
      "chunks": [
        {
          "id": "network-engineering-201-l07-c1",
          "kind": "practice",
          "title": "Case Scenario",
          "content": "Your task is to create a modernization plan for an enterprise with 60 branch offices. The branches currently suffer from unstable WAN connectivity, inconsistent security policies, and a lack of centralized monitoring. Your plan must propose a new standard architecture that improves reliability and security. It should also outline a repeatable deployment process that can be executed efficiently across all locations, considering that many branches have limited on-site IT staff."
        },
        {
          "id": "network-engineering-201-l07-c2",
          "kind": "recap",
          "title": "Evaluation Criteria",
          "content": "A successful modernization plan will be evaluated on several key components. It must include a phased rollout schedule to manage risk, a detailed validation plan to verify success at each stage, and a clear rollback strategy in case of failure. The plan should also define measurable Key Performance Indicators (KPIs) to track improvements in reliability and performance. Finally, it must consider the operational handoff, including documentation and training for the support team."
        }
      ],
      "metadata": {
        "prompts": [
          "Define three KPIs you would use to measure the success of the branch reliability improvement.",
          "Select one high-risk change from your plan (e.g., cutting over to a new circuit) and describe your rollback procedure.",
          "List two security controls you would prioritize standardizing across all branches first, and explain why."
        ]
      },
      "learningAids": [
        {
          "id": "network-engineering-201-l07-a1",
          "type": "practice",
          "title": "Modernization Canvas",
          "content": "A structured template to build your plan. Sections include: Current-State Pain Points, Target Architecture Diagram, Phased Rollout Schedule, and KPI Targets."
        }
      ]
    }
  ]
};
