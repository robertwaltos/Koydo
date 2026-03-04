import type { LearningModule } from "@/lib/modules/types";

export const NetworkEngineering201Module: LearningModule = {
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
  "version": "2.0.0",
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
          "content": "In today's digital age, enterprise networks are designed to be both efficient and effective by blending traditional network designs with cutting-edge technologies. One common approach is the three-tier campus design, which is often combined with data-center fabrics and wide area network (WAN) overlays. This combination helps organizations manage their network policies more easily and ensures that if a problem arises, it can be contained without disrupting the entire network. The core-distribution-access hierarchy is a key feature of this design, as it simplifies the management of network policies and enhances the ability to isolate issues. Furthermore, spine-leaf designs are utilized to improve performance by allowing data to travel quickly and efficiently across the network. When selecting the right architecture for a network, it is crucial to consider several factors, including the size of the network, the types of traffic it will handle, and the maturity of the operational processes in place. By taking these elements into account, organizations can create a robust network that meets their specific needs and supports their growth.\nContext recap: In today's digital age, enterprise networks are designed to be both efficient and effective by blending traditional network designs with cutting-edge technologies. One common approach is the three-tier campus design, which is often combined with data-center fabrics and wide area network (WAN) overlays. This combination helps organizations manage their network policies more easily and ensures that if a problem arises, it can be contained without disrupting the entire network. The core-distribution-access hierarchy is a key feature of this design, as it simplifies the management of network policies and enhances the ability to isolate issues."
        },
        {
          "id": "network-engineering-201-l01-c2",
          "kind": "concept",
          "title": "Gateway and Uplink Redundancy",
          "content": "To make sure our networks are dependable and can bounce back from problems, it's really important to have redundancy at the gateway and to create different paths for data to travel. This means that if one path stops working, there are other routes ready to take over. First-hop redundancy protocols are like a virtual default gateway for devices, which helps them connect to the network more easily. When we design uplinks, we need to be careful not to create hidden loops that could lead to issues, while also making sure the network can recover quickly from any failures. A well-thought-out network design considers where things might go wrong, ensures that data is sent in a predictable way, and clearly states who is in charge of different parts of the network. By focusing on these aspects, we can build networks that are not only efficient but also resilient against disruptions.\nContext recap: To make sure our networks are dependable and can bounce back from problems, it's really important to have redundancy at the gateway and to create different paths for data to travel. This means that if one path stops working, there are other routes ready to take over. First-hop redundancy protocols are like a virtual default gateway for devices, which helps them connect to the network more easily. When we design uplinks, we need to be careful not to create hidden loops that could lead to issues, while also making sure the network can recover quickly from any failures.\nWhy this matters: Gateway and Uplink Redundancy helps learners in Computer Science connect ideas from Network Engineering Operations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "network-engineering-201-l01-c3",
          "kind": "recap",
          "title": "Failure-Domain Thinking",
          "content": "A well-organized network is designed to minimize the impact of failures. This is achieved through strategies like using segmented Virtual Local Area Networks (VLANs), establishing controlled boundaries for faults, and documenting how the network behaves during failovers. By doing this, we can limit the spread of outages and ensure that problems do not affect the entire network. It is also essential to create architecture diagrams that clearly show how different components of the network depend on each other, not just the physical connections. This helps in understanding the network better and planning for any potential issues.\nContext recap: A well-organized network is designed to minimize the impact of failures. This is achieved through strategies like using segmented Virtual Local Area Networks (VLANs), establishing controlled boundaries for faults, and documenting how the network behaves during failovers. By doing this, we can limit the spread of outages and ensure that problems do not affect the entire network. It is also essential to create architecture diagrams that clearly show how different components of the network depend on each other, not just the physical connections."
        }
      ],
      "flashcards": [
        {
          "id": "network-engineering-201-l01-f1",
          "front": "Failure domain",
          "back": "A boundary where faults are likely correlated; limiting its size reduces outage impact."
        },
        {
          "id": "network-engineering-201-l01-f2",
          "front": "First-hop redundancy",
          "back": "A method that provides a virtual gateway IP so endpoint default gateway remains available during device failure."
        },
        {
          "id": "network-engineering-201-l01-f3",
          "front": "Spine-leaf goal",
          "back": "Consistent low-latency multipath forwarding for scale-out traffic patterns."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-201-l01-a1",
          "type": "image",
          "title": "Topology Decision Map",
          "content": "Decision chart for choosing campus hierarchy vs spine-leaf by traffic and scale constraints."
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
          "content": "The stability of the Open Shortest Path First (OSPF) protocol is very important for ensuring that data travels efficiently across a network. Several key factors influence this stability. First, it is crucial to have clear and reliable connections between neighboring devices, which are the routers and switches that communicate with each other. Second, the timing settings, which help manage how often devices check in with one another, need to be consistent. Lastly, the design of network areas must be well-structured to avoid confusion. Problems can occur if there are mismatches in settings such as Maximum Transmission Unit (MTU) sizes, which determine the largest packet size that can be sent, authentication methods that verify device identities, or the types of areas configured in the network. These mismatches can lead to hidden connectivity issues that are hard to detect. Therefore, network engineers should carefully monitor the status of neighbor connections and link any changes they observe to events happening in the network's layout. This practice helps ensure that the network operates smoothly and that the Shortest Path First (SPF) algorithm can quickly recalculate the best routes for data to travel, keeping everything running efficiently.\nContext recap: The stability of the Open Shortest Path First (OSPF) protocol is very important for ensuring that data travels efficiently across a network. Several key factors influence this stability. First, it is crucial to have clear and reliable connections between neighboring devices, which are the routers and switches that communicate with each other. Second, the timing settings, which help manage how often devices check in with one another, need to be consistent.\nWhy this matters: OSPF Stability helps learners in Computer Science connect ideas from Network Engineering Operations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "network-engineering-201-l02-c2",
          "kind": "concept",
          "title": "BGP Policy Effects",
          "content": "The Border Gateway Protocol (BGP) is a key player in how data travels across the internet, and its decisions are heavily influenced by specific policies. These policies include factors like local preference, which indicates which routes are preferred; the length of the Autonomous System (AS) path, which shows how many networks the data must pass through; the Multi-Exit Discriminator (MED), which helps determine the best exit point for data; and community tags, which are labels that help manage routing decisions. Even minor adjustments to these policies can cause major changes in how traffic flows, so it is very important to test any changes in a safe and controlled setting before applying them to the entire network. This careful testing helps to keep the network running smoothly and efficiently, ensuring that users experience minimal disruptions and optimal performance.\nContext recap: The Border Gateway Protocol (BGP) is a key player in how data travels across the internet, and its decisions are heavily influenced by specific policies. These policies include factors like local preference, which indicates which routes are preferred; the length of the Autonomous System (AS) path, which shows how many networks the data must pass through; the Multi-Exit Discriminator (MED), which helps determine the best exit point for data; and community tags, which are labels that help manage routing decisions. Even minor adjustments to these policies can cause major changes in how traffic flows, so it is very important to test any changes in a safe and controlled setting before applying them to the entire network. This careful testing helps to keep the network running smoothly and efficiently, ensuring that users experience minimal disruptions and optimal performance.\nContext recap: The Border Gateway Protocol (BGP) is a key player in how data travels across the internet, and its decisions are heavily influenced by specific policies. These policies include factors like local preference, which indicates which routes are preferred; the length of the Autonomous System (AS) path, which shows how many networks the data must pass through; the Multi-Exit Discriminator (MED), which helps determine the best exit point for data; and community tags, which are labels that help manage routing decisions. Even minor adjustments to these policies can cause major changes in how traffic flows, so it is very important to test any changes in a safe and controlled setting before applying them to the entire network. This careful testing helps to keep the network running smoothly and efficiently, ensuring that users experience minimal disruptions and optimal performance."
        }
      ],
      "interactiveActivities": [
        {
          "id": "network-engineering-201-l02-act1",
          "type": "matching_pairs",
          "title": "Symptom to Root-Cause Match",
          "description": "Match routing symptoms to likely protocol-level causes.",
          "pairs": [
            {
              "left": "OSPF stuck in EXSTART",
              "right": "MTU mismatch or adjacency negotiation issue"
            },
            {
              "left": "Unexpected egress ISP shift",
              "right": "Local preference or policy update changed best path"
            },
            {
              "left": "Frequent reconvergence spikes",
              "right": "Flapping links or unstable neighbor sessions"
            },
            {
              "left": "Route present but no traffic",
              "right": "Policy/filter mismatch or next-hop reachability problem"
            }
          ]
        },
        {
          "id": "network-engineering-201-l02-act2",
          "type": "scenario_practice",
          "title": "Convergence Triage",
          "description": "Prioritize checks during a live routing instability incident.",
          "instructions": [
            "List first three commands/telemetry checks you would run.",
            "Explain one action you would avoid to prevent wider blast radius."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Why can a route appear in the table but still fail in forwarding?",
          "What is one safe method to test BGP policy impact before broad rollout?",
          "How do you reduce route flapping without hiding real failures?"
        ]
      },
      "learningAids": [
        {
          "id": "network-engineering-201-l02-a1",
          "type": "practice",
          "title": "Convergence Checklist",
          "content": "Step-by-step triage sheet for adjacency, control-plane, and data-plane validation."
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
          "text": "A route exists in control plane but packets drop. Most likely first verification?",
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
              "text": "Disable routing protocol entirely"
            },
            {
              "id": "d",
              "text": "Ignore because route is present"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Control-plane visibility does not guarantee valid forwarding path."
        },
        {
          "id": "network-engineering-201-l03-q2",
          "text": "Which BGP attribute is commonly used to prefer one outbound path inside an AS?",
          "skillId": "network-engineering-201-skill-routing",
          "options": [
            {
              "id": "a",
              "text": "Local preference"
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
          "explanation": "Local preference is a common internal policy lever for outbound path choice."
        },
        {
          "id": "network-engineering-201-l03-q3",
          "text": "What is the best reason to limit failure domain size in network design?",
          "skillId": "network-engineering-201-skill-architecture",
          "options": [
            {
              "id": "a",
              "text": "Increase outage spread for faster detection"
            },
            {
              "id": "b",
              "text": "Reduce potential user impact when one component fails"
            },
            {
              "id": "c",
              "text": "Avoid any monitoring requirements"
            },
            {
              "id": "d",
              "text": "Eliminate need for documentation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Smaller failure domains reduce blast radius and accelerate recovery."
        },
        {
          "id": "network-engineering-201-l03-q4",
          "text": "Which practice improves safety for high-impact routing policy changes?",
          "skillId": "network-engineering-201-skill-operations",
          "options": [
            {
              "id": "a",
              "text": "Direct production edits with no rollback plan"
            },
            {
              "id": "b",
              "text": "Staged rollout with validation and rollback criteria"
            },
            {
              "id": "c",
              "text": "Disable telemetry to reduce noise"
            },
            {
              "id": "d",
              "text": "Apply changes during peak business hours only"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Guarded rollout with rollback conditions minimizes risk."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-201-l03-a1",
          "type": "mnemonic",
          "title": "TRACE",
          "content": "Table, Reachability, Adjacency, Change history, Evidence."
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
          "content": "Network segmentation is an important practice that can significantly improve both the security and reliability of our networks. By using tools like Virtual Local Area Networks (VLANs) and Virtual Routing and Forwarding (VRF), we can create distinct boundaries that separate different areas of trust within the network. This separation is crucial because it helps to prevent unauthorized access and limits the movement of potential threats within the network. Additionally, it is essential to implement Access Control Lists (ACLs) and firewall policies that are clear and straightforward. These policies should adhere to the principle of least privilege, meaning that users and devices should only have access to the resources they absolutely need. Regularly reviewing these policies against actual traffic behavior ensures that they remain effective and relevant. By taking these proactive steps, we can maintain a secure and efficient network environment that protects our valuable data and resources.\nContext recap: Network segmentation is an important practice that can significantly improve both the security and reliability of our networks. By using tools like Virtual Local Area Networks (VLANs) and Virtual Routing and Forwarding (VRF), we can create distinct boundaries that separate different areas of trust within the network. This separation is crucial because it helps to prevent unauthorized access and limits the movement of potential threats within the network. Additionally, it is essential to implement Access Control Lists (ACLs) and firewall policies that are clear and straightforward.\nWhy this matters: Segmentation as Risk Control helps learners in Computer Science connect ideas from Network Engineering Operations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "network-engineering-201-l04-c2",
          "kind": "concept",
          "title": "Access Control and Remote Connectivity",
          "content": "Network Access Control, or NAC, is a crucial part of keeping our networks safe. It works by checking the health and security status of devices and users before they are allowed to connect to the network. This means that only devices that meet certain security standards can access the network, which helps prevent unauthorized access and potential threats. When it comes to remote access, which allows users to connect to the network from different locations, it's vital to have strong identity verification processes in place. This ensures that only the right people can access sensitive information. Additionally, implementing conditional policies helps to define what users can do based on their identity and the security status of their device. Logging user sessions is also important, as it keeps a record of who accessed the network and when, which can be useful for monitoring and security audits. For secure connections between different sites, technologies like IPsec are commonly used. They create secure tunnels for data to travel through. On the other hand, SSL/TLS-based remote access solutions are great for users who need to work on the go, as they allow access through web browsers while keeping the connection secure. This flexibility ensures that users can work safely from various locations without compromising the security of the network.\nContext recap: Network Access Control, or NAC, is a crucial part of keeping our networks safe. It works by checking the health and security status of devices and users before they are allowed to connect to the network. This means that only devices that meet certain security standards can access the network, which helps prevent unauthorized access and potential threats. When it comes to remote access, which allows users to connect to the network from different locations, it's vital to have strong identity verification processes in place.\nWhy this matters: Access Control and Remote Connectivity helps learners in Computer Science connect ideas from Network Engineering Operations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "network-engineering-201-l04-c3",
          "kind": "recap",
          "title": "Operational Security Hygiene",
          "content": "In network management, it's important to be aware of certain security gaps that can put the system at risk. Some common issues include outdated Access Control Lists (ACLs), which are like rules that determine who can access what; overly broad administrative rights, which give too many people too much control; and undocumented exceptions, which are rules that aren't written down and can lead to confusion. To keep the network secure, experienced teams make it a habit to regularly review their policies. They also keep track of any exceptions, making sure each one has a clear expiration date and a designated owner responsible for it. This proactive approach helps ensure that the network remains safe and well-organized, significantly reducing the chances of security vulnerabilities.\nContext recap: In network management, it's important to be aware of certain security gaps that can put the system at risk. Some common issues include outdated Access Control Lists (ACLs), which are like rules that determine who can access what; overly broad administrative rights, which give too many people too much control; and undocumented exceptions, which are rules that aren't written down and can lead to confusion. To keep the network secure, experienced teams make it a habit to regularly review their policies. They also keep track of any exceptions, making sure each one has a clear expiration date and a designated owner responsible for it."
        }
      ],
      "flashcards": [
        {
          "id": "network-engineering-201-l04-f1",
          "front": "VRF",
          "back": "Virtual routing and forwarding instance that creates separate routing tables on shared hardware."
        },
        {
          "id": "network-engineering-201-l04-f2",
          "front": "NAC",
          "back": "Network Access Control: enforces identity/posture policy before allowing network access."
        },
        {
          "id": "network-engineering-201-l04-f3",
          "front": "Least privilege policy",
          "back": "Grant only minimum required network access for required duration and scope."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-201-l04-a1",
          "type": "image",
          "title": "Trust Zone Policy Map",
          "content": "Reference map of enterprise trust zones with example ACL intents and review cadence."
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
          "content": "To successfully keep an eye on how well a network is running, it's crucial to compare the current performance data with a set of standard behaviors known as the baseline. This means looking at important metrics like interface errors, queue drops, path latency, and control-plane events over time. By doing this, network administrators can spot any unusual patterns that might emerge. If there is a sudden change from the baseline, it could signal the beginning of a problem, which allows for a faster response than if they were just waiting for alerts based on set thresholds. This proactive approach to monitoring is vital for ensuring the network remains healthy and operates smoothly.\nContext recap: To successfully keep an eye on how well a network is running, it's crucial to compare the current performance data with a set of standard behaviors known as the baseline. This means looking at important metrics like interface errors, queue drops, path latency, and control-plane events over time. By doing this, network administrators can spot any unusual patterns that might emerge. If there is a sudden change from the baseline, it could signal the beginning of a problem, which allows for a faster response than if they were just waiting for alerts based on set thresholds."
        },
        {
          "id": "network-engineering-201-l05-c2",
          "kind": "practice",
          "title": "Incident Playbook Structure",
          "content": "A well-organized network incident playbook is an essential resource for effectively managing network problems. This playbook should contain several key components. First, it should identify the source of detection, which helps in understanding where the issue originated. Next, it should outline the scope of impact, detailing how widespread the problem is and which systems or users are affected. Immediate actions to contain the incident are crucial; these are the steps taken right away to prevent further damage. Additionally, an escalation matrix is important for communication; it specifies who should be informed at each stage of the incident response. Finally, recovery verification checks ensure that the issue has been resolved and that systems are functioning properly again. After addressing an incident, it is vital to conduct thorough reviews. These reviews should focus on identifying weaknesses in the system and developing long-term solutions to prevent similar issues in the future. Importantly, this process should emphasize learning and improvement rather than assigning blame to individuals, which helps create a supportive and collaborative team environment.\nContext recap: A well-organized network incident playbook is an essential resource for effectively managing network problems. This playbook should contain several key components. First, it should identify the source of detection, which helps in understanding where the issue originated. Next, it should outline the scope of impact, detailing how widespread the problem is and which systems or users are affected.\nWhy this matters: Incident Playbook Structure helps learners in Computer Science connect ideas from Network Engineering Operations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "interactiveActivities": [
        {
          "id": "network-engineering-201-l05-act1",
          "type": "sorting_buckets",
          "title": "Signal Classification",
          "description": "Classify observability signals by likely diagnostic value.",
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
              "text": "Queue drops on uplink under load",
              "bucket": "Data Plane"
            }
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Which metric drift would you alert on before users report outage symptoms?",
          "Write a two-line stakeholder update during an active WAN incident.",
          "Name one post-incident action that prevents recurrence."
        ]
      },
      "learningAids": [
        {
          "id": "network-engineering-201-l05-a1",
          "type": "practice",
          "title": "Incident Update Template",
          "content": "Template for impact statement, current mitigation, next update time, and owner."
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
          "text": "Which control most directly limits lateral movement across internal networks?",
          "skillId": "network-engineering-201-skill-security",
          "options": [
            {
              "id": "a",
              "text": "Flat Layer 2 network for all workloads"
            },
            {
              "id": "b",
              "text": "Zone segmentation with explicit allow policy"
            },
            {
              "id": "c",
              "text": "Disabling all logs"
            },
            {
              "id": "d",
              "text": "One shared admin credential"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Segmentation and explicit policy sharply reduce lateral attack and failure spread."
        },
        {
          "id": "network-engineering-201-l06-q2",
          "text": "Why is baseline telemetry important in network operations?",
          "skillId": "network-engineering-201-skill-observability",
          "options": [
            {
              "id": "a",
              "text": "It removes need for troubleshooting"
            },
            {
              "id": "b",
              "text": "It helps detect abnormal drift before major incidents"
            },
            {
              "id": "c",
              "text": "It guarantees no false alerts"
            },
            {
              "id": "d",
              "text": "It replaces routing policy"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baseline comparison reveals early change patterns not obvious from static thresholds."
        },
        {
          "id": "network-engineering-201-l06-q3",
          "text": "Best first action after restoring service from a network outage?",
          "skillId": "network-engineering-201-skill-operations",
          "options": [
            {
              "id": "a",
              "text": "Close incident with no further analysis"
            },
            {
              "id": "b",
              "text": "Run blameless review and assign corrective actions"
            },
            {
              "id": "c",
              "text": "Disable monitoring to reduce alert noise"
            },
            {
              "id": "d",
              "text": "Rollback all security controls"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Durable reliability improvement requires structured post-incident action ownership."
        },
        {
          "id": "network-engineering-201-l06-q4",
          "text": "Which VPN option is typically preferred for site-to-site network tunnels?",
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
          "explanation": "IPsec is a common standard for secure site-to-site connectivity."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-201-l06-a1",
          "type": "mnemonic",
          "title": "SAFE Ops",
          "content": "Segment, Alert, Fix, Evaluate."
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
          "content": "Imagine you are given the important job of designing a plan to upgrade 60 branch locations that are currently experiencing some significant challenges. These challenges include unstable Wide Area Network (WAN) connections, which can cause disruptions in communication, inconsistent Access Control List (ACL) policies that affect security, and limited local IT support that makes it hard to resolve issues quickly. Your goal is to create a comprehensive upgrade plan that not only reduces the number of outages these branches face but also strengthens the overall security of the network. Additionally, your plan should ensure that the process of deploying these upgrades is consistent and repeatable across all locations. To achieve this, you will need to think carefully about the specific needs of each branch while also considering how they fit into the larger network architecture. This project will help you develop critical problem-solving skills and an understanding of how to manage complex network environments effectively.\nContext recap: Imagine you are given the important job of designing a plan to upgrade 60 branch locations that are currently experiencing some significant challenges. These challenges include unstable Wide Area Network (WAN) connections, which can cause disruptions in communication, inconsistent Access Control List (ACL) policies that affect security, and limited local IT support that makes it hard to resolve issues quickly. Your goal is to create a comprehensive upgrade plan that not only reduces the number of outages these branches face but also strengthens the overall security of the network. Additionally, your plan should ensure that the process of deploying these upgrades is consistent and repeatable across all locations."
        },
        {
          "id": "network-engineering-201-l07-c2",
          "kind": "recap",
          "title": "Evaluation Lens",
          "content": "A strong upgrade plan should include a phased rollout approach, a fallback strategy in case of issues, measurable Key Performance Indicators (KPIs) to assess success, and training for staff to ensure a smooth operational handoff. By incorporating these elements, you can create a comprehensive strategy that not only addresses current challenges but also prepares the network for future growth and stability.\nContext recap: A strong upgrade plan should include a phased rollout approach, a fallback strategy in case of issues, measurable Key Performance Indicators (KPIs) to assess success, and training for staff to ensure a smooth operational handoff. By incorporating these elements, you can create a comprehensive strategy that not only addresses current challenges but also prepares the network for future growth and stability."
        }
      ],
      "metadata": {
        "prompts": [
          "Define three KPIs for branch reliability improvement.",
          "Select one high-risk change and describe your rollback approach.",
          "List two security controls to standardize across all branches first."
        ]
      },
      "learningAids": [
        {
          "id": "network-engineering-201-l07-a1",
          "type": "practice",
          "title": "Modernization Canvas",
          "content": "Template for current-state pain points, target architecture, change waves, and KPI targets."
        }
      ]
    }
  ]
};
