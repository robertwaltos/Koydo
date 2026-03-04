import type { LearningModule } from "@/lib/modules/types";

export const NetworkEngineering301Module: LearningModule = {
  "id": "network-engineering-301",
  "title": "Advanced Network Architecture and Automation",
  "description": "Advanced networking curriculum covering BGP/OSPF design at scale, traffic engineering, EVPN overlays, network programmability, and high-reliability operations for large enterprise and service-provider-like environments.",
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
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Design scalable underlay and overlay architectures with clear fault domains",
    "Apply advanced BGP and OSPF policy for deterministic traffic behavior",
    "Implement traffic engineering and QoS strategies for mixed critical workloads",
    "Use automation and intent validation to reduce configuration drift",
    "Perform deep packet-path troubleshooting across control and data planes",
    "Plan safe large-scale network changes with measurable blast-radius controls"
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
          "content": "When we create large-scale routing systems, we need to think about several important factors. First, we want to know how quickly our network can respond to changes. This is called convergence behavior. Next, we should consider how often the routes we use change, which is known as route churn. Additionally, the rules and policies we set can be quite complex, so we need to keep that in mind. It's also crucial to have good visibility into how the network operates, so we can monitor everything effectively. To manage potential problems, designers use strategies like summarization, which helps to simplify the routes, creating a hierarchy to organize them better, and isolating policies to prevent issues from spreading. However, while doing all this, we must ensure that we maintain enough detail in the paths we create. This detail is essential for achieving our traffic management goals, allowing us to direct data efficiently across the network.\nContext recap: When we create large-scale routing systems, we need to think about several important factors. First, we want to know how quickly our network can respond to changes. This is called convergence behavior. Next, we should consider how often the routes we use change, which is known as route churn.\nWhy this matters: Control-Plane Scalability helps learners in Computer Science connect ideas from Advanced Network Architecture and Automation to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "network-engineering-301-l01-c2",
          "kind": "concept",
          "title": "BGP in Enterprise-Scale Environments",
          "content": "BGP, which stands for Border Gateway Protocol, plays a crucial role in modern networking, extending beyond just edge routing. In large-scale networks, iBGP is frequently employed to manage both the foundational (underlay) and the application-level (overlay) aspects of network control. This is often achieved through the use of route reflectors and policy communities, which help organize and optimize routing decisions. To ensure smooth and efficient network operations, it is vital to establish clear policies that outline routing intentions. Additionally, designing paths that are predictable and conducting comprehensive reviews of any changes made to the network are essential practices. These measures help to avoid problems such as route leaks, which can lead to data being sent the wrong way, uneven traffic flows that can slow down network performance, and unintended transit behaviors that might disrupt connectivity. By following these guidelines, network engineers can maintain a robust and reliable network environment.\nContext recap: BGP, which stands for Border Gateway Protocol, plays a crucial role in modern networking, extending beyond just edge routing. In large-scale networks, iBGP is frequently employed to manage both the foundational (underlay) and the application-level (overlay) aspects of network control. This is often achieved through the use of route reflectors and policy communities, which help organize and optimize routing decisions. To ensure smooth and efficient network operations, it is vital to establish clear policies that outline routing intentions.\nWhy this matters: BGP in Enterprise-Scale Environments helps learners in Computer Science connect ideas from Advanced Network Architecture and Automation to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "network-engineering-301-l01-c3",
          "kind": "recap",
          "title": "Architectural Guardrails",
          "content": "In the world of network engineering, having a strong architectural framework is essential for success. This framework includes specific guidelines that help manage the network effectively. For instance, setting a maximum limit on the number of prefixes ensures that the network does not become too complex to handle. Additionally, a route dampening strategy helps manage changes in the network by reducing unnecessary updates. It's also important to have mandatory tagging for community information, which helps in organizing and identifying different parts of the network. Finally, automated policy linting acts as a safety net, checking that all policies are followed correctly. By putting these guidelines in place, we can keep the network growing in a controlled manner and minimize the chances of problems arising as the network expands.\nContext recap: In the world of network engineering, having a strong architectural framework is essential for success. This framework includes specific guidelines that help manage the network effectively. For instance, setting a maximum limit on the number of prefixes ensures that the network does not become too complex to handle. Additionally, a route dampening strategy helps manage changes in the network by reducing unnecessary updates.\nWhy this matters: Architectural Guardrails helps learners in Computer Science connect ideas from Advanced Network Architecture and Automation to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "network-engineering-301-l01-f1",
          "front": "Route reflector",
          "back": "A BGP scaling mechanism that reduces full-mesh iBGP requirements by reflecting routes between clients."
        },
        {
          "id": "network-engineering-301-l01-f2",
          "front": "Route churn",
          "back": "Frequent route updates/withdrawals that can destabilize convergence and increase control-plane load."
        },
        {
          "id": "network-engineering-301-l01-f3",
          "front": "Policy guardrail",
          "back": "A predefined boundary rule that prevents unsafe routing behavior before it reaches production."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-301-l01-a1",
          "type": "image",
          "title": "Scale Routing Blueprint",
          "content": "Reference blueprint showing hierarchy, route reflectors, summarization points, and policy boundaries."
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
          "content": "Traffic engineering is a crucial aspect of network management that focuses on optimizing how data travels through a network. It involves balancing three key factors: the utilization of different paths, the latency or delay in data transmission, and the network's ability to withstand failures. Engineers play a vital role in this process, as they must be able to identify the paths that the control plane prefers—these are the routes that the network is designed to use under normal conditions. However, it's equally important for them to understand the actual paths that data takes when the network experiences high traffic, encounters failures, or when specific policies are applied that may alter the expected behavior. By mastering these concepts, engineers can ensure that networks operate efficiently and reliably, even in challenging situations.\nContext recap: Traffic engineering is a crucial aspect of network management that focuses on optimizing how data travels through a network. It involves balancing three key factors: the utilization of different paths, the latency or delay in data transmission, and the network's ability to withstand failures. Engineers play a vital role in this process, as they must be able to identify the paths that the control plane prefers—these are the routes that the network is designed to use under normal conditions. However, it's equally important for them to understand the actual paths that data takes when the network experiences high traffic, encounters failures, or when specific policies are applied that may alter the expected behavior."
        },
        {
          "id": "network-engineering-301-l02-c2",
          "kind": "concept",
          "title": "QoS in Practice",
          "content": "Implementing Quality of Service (QoS) strategies is an important part of managing network traffic effectively. This process involves making careful decisions about how to classify different types of data, mark them for priority, queue them for processing, and enforce rules to manage their flow based on the needs of critical business applications. If these QoS policies are not set up correctly, it can create problems. For example, low-priority traffic might not get the resources it needs, or real-time services, like video calls or online gaming, might not function well during busy times when there is a lot of traffic. To make sure that these QoS policies work as intended, it is essential to test them thoroughly. This can be done by using synthetic stress tests, which simulate heavy traffic conditions, as well as analyzing real traffic data to see how the network performs under normal conditions. By doing this, network engineers can ensure that their QoS strategies are effective and reliable, providing a better experience for all users.\nContext recap: Implementing Quality of Service (QoS) strategies is an important part of managing network traffic effectively. This process involves making careful decisions about how to classify different types of data, mark them for priority, queue them for processing, and enforce rules to manage their flow based on the needs of critical business applications. If these QoS policies are not set up correctly, it can create problems. For example, low-priority traffic might not get the resources it needs, or real-time services, like video calls or online gaming, might not function well during busy times when there is a lot of traffic."
        }
      ],
      "interactiveActivities": [
        {
          "id": "network-engineering-301-l02-act1",
          "type": "sorting_buckets",
          "title": "QoS Policy Classification",
          "description": "Sort traffic classes into appropriate forwarding treatment categories.",
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
          "description": "Choose policy changes to relieve congested WAN links while preserving SLA traffic.",
          "instructions": [
            "Pick one immediate action and one medium-term redesign action.",
            "State one risk for each action."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "How can preferred BGP path and actual traffic path diverge?",
          "What QoS misconfiguration could increase jitter during peak hours?",
          "Which metric would prove your traffic engineering change worked?"
        ]
      },
      "learningAids": [
        {
          "id": "network-engineering-301-l02-a1",
          "type": "practice",
          "title": "QoS Validation Sheet",
          "content": "Worksheet to compare pre/post queue drop, latency, and jitter by traffic class."
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
          "text": "Primary purpose of BGP route reflectors in large networks?",
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
          "explanation": "Route reflectors reduce session count and simplify iBGP scaling."
        },
        {
          "id": "network-engineering-301-l03-q2",
          "text": "Which QoS class should usually protect delay-sensitive voice media traffic?",
          "skillId": "network-engineering-301-skill-qos",
          "options": [
            {
              "id": "a",
              "text": "Low latency priority queue"
            },
            {
              "id": "b",
              "text": "Best effort queue only"
            },
            {
              "id": "c",
              "text": "Bulk transfer queue"
            },
            {
              "id": "d",
              "text": "Unclassified discard queue"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Delay-sensitive traffic benefits from protected low-latency treatment."
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
              "text": "They remove need for testing"
            },
            {
              "id": "c",
              "text": "They disable route updates"
            },
            {
              "id": "d",
              "text": "They guarantee zero congestion"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Guardrails reduce high-blast-radius mistakes in control-plane policy."
        },
        {
          "id": "network-engineering-301-l03-q4",
          "text": "Most reliable way to validate traffic engineering change success?",
          "skillId": "network-engineering-301-skill-qos",
          "options": [
            {
              "id": "a",
              "text": "Assume success if configs committed"
            },
            {
              "id": "b",
              "text": "Compare pre/post telemetry for utilization, latency, and drops"
            },
            {
              "id": "c",
              "text": "Turn off monitoring"
            },
            {
              "id": "d",
              "text": "Rely on one ping test only"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Measured telemetry outcomes are required to confirm design intent."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-301-l03-a1",
          "type": "mnemonic",
          "title": "PATH",
          "content": "Policy, Assertions, Telemetry, Hardening."
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
          "content": "Overlay fabrics play a crucial role in modern networking by ensuring that the logical service layout remains distinct from the physical transport layer. This separation allows for greater flexibility and efficiency in managing network resources. One of the key technologies used in this context is VXLAN encapsulation, which enables us to extend the functionalities of Layer 2 networks over Layer 3 infrastructures. This means that we can maintain the benefits of Layer 2 communication while leveraging the broader capabilities of Layer 3. Additionally, EVPN (Ethernet Virtual Private Network) is an advanced protocol that helps distribute information about MAC (Media Access Control) and IP (Internet Protocol) addresses. It utilizes BGP (Border Gateway Protocol) signaling to achieve this, which significantly improves scalability and operational visibility. This is a notable advancement compared to older methods that depended on flooding and learning, which could be less efficient and harder to manage.\nContext recap: Overlay fabrics play a crucial role in modern networking by ensuring that the logical service layout remains distinct from the physical transport layer. This separation allows for greater flexibility and efficiency in managing network resources. One of the key technologies used in this context is VXLAN encapsulation, which enables us to extend the functionalities of Layer 2 networks over Layer 3 infrastructures. This means that we can maintain the benefits of Layer 2 communication while leveraging the broader capabilities of Layer 3.\nWhy this matters: Underlay and Overlay Separation helps learners in Computer Science connect ideas from Advanced Network Architecture and Automation to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "network-engineering-301-l04-c2",
          "kind": "concept",
          "title": "Operational Considerations",
          "content": "For overlay networks to work effectively, they need a strong and stable foundation provided by the underlying infrastructure. This means that careful planning is essential, especially when it comes to determining the Maximum Transmission Unit (MTU) sizes, which help manage data packet sizes. Additionally, it's important to have consistent policies at all endpoints, which are the devices or points where data enters or exits the network. Lastly, having reliable troubleshooting tools is vital. These tools help network engineers monitor and resolve issues by tracking the paths that data takes, both when it is encapsulated (wrapped in additional data for transmission) and decapsulated (unwrapped at the destination). All these elements work together to ensure that the network remains dependable and efficient.\nContext recap: For overlay networks to work effectively, they need a strong and stable foundation provided by the underlying infrastructure. This means that careful planning is essential, especially when it comes to determining the Maximum Transmission Unit (MTU) sizes, which help manage data packet sizes. Additionally, it's important to have consistent policies at all endpoints, which are the devices or points where data enters or exits the network. Lastly, having reliable troubleshooting tools is vital.\nWhy this matters: Operational Considerations helps learners in Computer Science connect ideas from Advanced Network Architecture and Automation to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "network-engineering-301-l04-c3",
          "kind": "recap",
          "title": "Design Trade-offs",
          "content": "EVPN (Ethernet Virtual Private Network) and VXLAN (Virtual Extensible LAN) are powerful technologies that can significantly improve the scalability and flexibility of network designs. However, they also bring about more complexity in the control plane, which is the part of the network that manages data flow. To navigate this complexity successfully, it is crucial for teams to develop clear and detailed templates for their network configurations. Additionally, having effective tools to monitor network performance is vital. This allows teams to quickly identify and address any issues that may arise. Finally, implementing a well-thought-out strategy for gradually rolling out changes can help ensure that the network remains stable and efficient during the transition. By taking these steps, teams can leverage the benefits of EVPN and VXLAN while minimizing potential challenges.\nContext recap: EVPN (Ethernet Virtual Private Network) and VXLAN (Virtual Extensible LAN) are powerful technologies that can significantly improve the scalability and flexibility of network designs. However, they also bring about more complexity in the control plane, which is the part of the network that manages data flow. To navigate this complexity successfully, it is crucial for teams to develop clear and detailed templates for their network configurations. Additionally, having effective tools to monitor network performance is vital.\nWhy this matters: Design Trade-offs helps learners in Computer Science connect ideas from Advanced Network Architecture and Automation to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "network-engineering-301-l04-f1",
          "front": "EVPN",
          "back": "A BGP-based control-plane for distributing MAC/IP information in overlay networks."
        },
        {
          "id": "network-engineering-301-l04-f2",
          "front": "VXLAN",
          "back": "Overlay encapsulation that carries Layer 2 segments across Layer 3 networks."
        },
        {
          "id": "network-engineering-301-l04-f3",
          "front": "Underlay",
          "back": "Physical/logical transport network that carries overlay encapsulated traffic."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-301-l04-a1",
          "type": "image",
          "title": "Overlay Fabric Packet Path",
          "content": "Diagram tracing endpoint packet encapsulation, underlay forwarding, and decapsulation flow."
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
          "content": "When network operations are done manually using the Command Line Interface (CLI), especially in large networks, it can lead to problems like inconsistencies and drift in the configurations. This means that what you intended to set up might not match what is actually in place. To solve this issue, we can use automation pipelines. These pipelines help create configurations based on what we want to achieve, known as our intended policies. Additionally, it is important that these pipelines check to make sure that the policies stay consistent and perform necessary checks both before and after any changes are made. This way, we can ensure that everything is working correctly and as planned, reducing the chances of errors and improving the overall reliability of the network.\nContext recap: When network operations are done manually using the Command Line Interface (CLI), especially in large networks, it can lead to problems like inconsistencies and drift in the configurations. This means that what you intended to set up might not match what is actually in place. To solve this issue, we can use automation pipelines. These pipelines help create configurations based on what we want to achieve, known as our intended policies.\nWhy this matters: From CLI Drift to Intent helps learners in Computer Science connect ideas from Advanced Network Architecture and Automation to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "network-engineering-301-l05-c2",
          "kind": "practice",
          "title": "Safe Change Pipeline",
          "content": "A safe network automation pipeline is designed to ensure that changes to the network are made smoothly and without errors. It should include several key features: First, syntax checks are crucial to verify that all commands are written correctly, preventing mistakes that could disrupt the network. Next, policy compliance tests are necessary to ensure that all changes adhere to established guidelines and regulations. Additionally, simulating the network topology allows us to visualize how the network will behave before making any actual changes. Gradual deployment strategies, often referred to as canary deployments, involve rolling out changes to a small portion of the network first. This helps identify any potential issues before a full-scale implementation. Finally, automatic rollback mechanisms are essential; these systems can revert changes if monitoring detects any unusual behavior, ensuring the network remains stable and secure. By incorporating these features, we can create a robust and reliable network automation pipeline that minimizes risks and enhances performance.\nContext recap: A safe network automation pipeline is designed to ensure that changes to the network are made smoothly and without errors. It should include several key features: First, syntax checks are crucial to verify that all commands are written correctly, preventing mistakes that could disrupt the network. Next, policy compliance tests are necessary to ensure that all changes adhere to established guidelines and regulations. Additionally, simulating the network topology allows us to visualize how the network will behave before making any actual changes.\nWhy this matters: Safe Change Pipeline helps learners in Computer Science connect ideas from Advanced Network Architecture and Automation to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "interactiveActivities": [
        {
          "id": "network-engineering-301-l05-act1",
          "type": "timeline_builder",
          "title": "Automation Pipeline Order",
          "description": "Place network automation stages in safe execution order.",
          "data": {
            "stages": [
              "Intent definition",
              "Template generation",
              "Static/policy validation",
              "Lab simulation",
              "Canary rollout",
              "Telemetry verification",
              "Full rollout"
            ]
          }
        }
      ],
      "metadata": {
        "prompts": [
          "What drift signals should trigger automatic rollback?",
          "Why is canary rollout useful in network automation as well as app deployment?",
          "Name one policy invariant you would enforce before merge."
        ]
      },
      "learningAids": [
        {
          "id": "network-engineering-301-l05-a1",
          "type": "practice",
          "title": "Intent Test Catalog",
          "content": "Checklist of invariants: no unauthorized transit, route limits, ACL consistency, and MTU policy."
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
          "text": "Main benefit of EVPN over flood-and-learn overlays?",
          "skillId": "network-engineering-301-skill-overlay",
          "options": [
            {
              "id": "a",
              "text": "No control-plane required"
            },
            {
              "id": "b",
              "text": "BGP-based control-plane improves scale and reachability signaling"
            },
            {
              "id": "c",
              "text": "No underlay needed"
            },
            {
              "id": "d",
              "text": "All traffic is encrypted by default"
            }
          ],
          "correctOptionId": "b",
          "explanation": "EVPN provides explicit control-plane exchange for endpoint reachability."
        },
        {
          "id": "network-engineering-301-l06-q2",
          "text": "Most important reason to include simulation before rollout in network automation?",
          "skillId": "network-engineering-301-skill-automation",
          "options": [
            {
              "id": "a",
              "text": "It slows delivery intentionally"
            },
            {
              "id": "b",
              "text": "It catches topology/policy failures before production impact"
            },
            {
              "id": "c",
              "text": "It removes need for monitoring"
            },
            {
              "id": "d",
              "text": "It replaces design review permanently"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Simulation reduces risk by revealing logic and policy defects early."
        },
        {
          "id": "network-engineering-301-l06-q3",
          "text": "Which practice best reduces configuration drift long-term?",
          "skillId": "network-engineering-301-skill-automation",
          "options": [
            {
              "id": "a",
              "text": "Frequent ad hoc manual edits"
            },
            {
              "id": "b",
              "text": "Intent-based source of truth with automated deployment"
            },
            {
              "id": "c",
              "text": "Ignoring diff reports"
            },
            {
              "id": "d",
              "text": "Disabling config backup"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Single source of truth plus automation limits unsanctioned drift."
        },
        {
          "id": "network-engineering-301-l06-q4",
          "text": "What is a key prerequisite for stable overlay operations?",
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
          "explanation": "Overlay reliability depends on solid underlay fundamentals."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-301-l06-a1",
          "type": "mnemonic",
          "title": "SAFE Change",
          "content": "Simulate, Apply canary, Follow telemetry, Expand rollout."
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
          "content": "In this exciting capstone project, you will take on the challenge of redesigning a multi-site network for a fast-growing organization. This organization is facing some important needs: they want to make their Wide Area Network (WAN) faster by reducing latency, enhance security by improving network segmentation, and streamline their operations with automated change control processes. Your task will be to come up with a detailed proposal for the new network architecture that meets these needs. You will also outline the different phases of migration, which are the steps the organization will take to transition to the new network. Additionally, you will identify strategies for managing risks to ensure that the transition goes smoothly and successfully. This project will allow you to apply your knowledge and skills in network engineering while considering real-world challenges and solutions.\nContext recap: In this exciting capstone project, you will take on the challenge of redesigning a multi-site network for a fast-growing organization. This organization is facing some important needs: they want to make their Wide Area Network (WAN) faster by reducing latency, enhance security by improving network segmentation, and streamline their operations with automated change control processes. Your task will be to come up with a detailed proposal for the new network architecture that meets these needs. You will also outline the different phases of migration, which are the steps the organization will take to transition to the new network."
        },
        {
          "id": "network-engineering-301-l07-c2",
          "kind": "recap",
          "title": "Evaluation Criteria",
          "content": "To earn a top score in your design evaluation, your proposal must clearly define the policies you intend to implement. Additionally, it should specify the requirements for monitoring how well the network performs. It's also important to include fallback options that can be used if any problems arise. Lastly, you should establish measurable success criteria that are directly connected to the user experience and the reliability of the network's operations.\nContext recap: To earn a top score in your design evaluation, your proposal must clearly define the policies you intend to implement. Additionally, it should specify the requirements for monitoring how well the network performs. It's also important to include fallback options that can be used if any problems arise. Lastly, you should establish measurable success criteria that are directly connected to the user experience and the reliability of the network's operations.\nContext recap: To earn a top score in your design evaluation, your proposal must clearly define the policies you intend to implement. Additionally, it should specify the requirements for monitoring how well the network performs. It's also important to include fallback options that can be used if any problems arise. Lastly, you should establish measurable success criteria that are directly connected to the user experience and the reliability of the network's operations.\nWhy this matters: Evaluation Criteria helps learners in Computer Science connect ideas from Advanced Network Architecture and Automation to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "metadata": {
        "prompts": [
          "Define three architecture decisions and their trade-offs.",
          "Choose one migration risk and mitigation plan.",
          "Name two KPIs proving redesign success in 90 days."
        ]
      },
      "learningAids": [
        {
          "id": "network-engineering-301-l07-a1",
          "type": "practice",
          "title": "Architecture Decision Record",
          "content": "Template for decision, alternatives, rationale, risk, and measurable success criteria."
        }
      ]
    }
  ]
};
