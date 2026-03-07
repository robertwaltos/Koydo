import type { LearningModule } from "@/lib/modules/types";

export const cloud_computing_301_Module: LearningModule = {
  "id": "cloud-computing-301",
  "title": "Cloud Architecture and Resilience",
  "description": "Advanced cloud architecture for high-scale systems: multi-region design, distributed data patterns, secure platform boundaries, performance engineering, and resilience validation under failure.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "cloud",
    "architecture",
    "resilience"
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
    "Design multi-region service topologies with explicit recovery objectives",
    "Compare distributed data consistency patterns and choose by workload constraints",
    "Apply advanced network and identity controls for zero-trust cloud architectures",
    "Model performance bottlenecks and tune systems using evidence from production telemetry",
    "Design resilience testing programs using fault injection and game-day exercises",
    "Evaluate architecture trade-offs with measurable reliability, latency, and cost outcomes"
  ],
  "lessons": [
    {
      "id": "cloud-computing-301-l01",
      "title": "Multi-Region Architecture Patterns",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "A futuristic glowing map of the world showing interconnected data centers with pulsing light beams representing active-active cloud regions, high-tech, 3d render, dark background with neon blue and orange accents.",
      "conceptVideoPrompt": "A dynamic 3D animation showing a digital globe. One data center in North America goes dark (simulated failure), and instantly, glowing data streams reroute seamlessly to a backup data center in Europe, keeping the network illuminated and active. High-tech, cinematic lighting.",
      "objectives": [
        "Differentiate active-active and active-passive regional strategies",
        "Define RTO and RPO targets from business requirements",
        "Identify regional failure triggers and failover guardrails"
      ],
      "chunks": [
        {
          "id": "cloud-computing-301-l01-c1",
          "kind": "concept",
          "title": "From Availability Zones to Regions",
          "content": "In the world of cloud computing, understanding regions and availability zones is essential for creating reliable systems. A single-region architecture can provide high availability within a specific area, but it can still be vulnerable during major regional events, such as earthquakes or severe storms. To improve reliability and ensure that services remain operational, we can implement multi-region architectures. This approach allows us to isolate faults over a broader geographical area, which means that if one region experiences problems, the other regions can continue to function without interruption.\nWhen designing a multi-region system, we need to make thoughtful decisions about how to handle traffic, manage data, and control the overall system. There are two primary strategies we can use: active-passive and active-active.\nThe active-passive strategy involves keeping one region on standby, ready to take over if the primary region encounters difficulties. This method is generally simpler to manage and ensures that there is always a backup ready to step in.\nIn contrast, the active-active strategy allows multiple regions to serve users simultaneously. This can significantly reduce latency for users around the globe, as they can connect to the nearest region. However, this approach requires more sophisticated controls to maintain consistency and ensure that all regions are working together effectively.\nBy understanding and applying these strategies, we can build cloud systems that are not only resilient but also capable of providing a seamless experience for users, no matter where they are located."
        },
        {
          "id": "cloud-computing-301-l01-c2",
          "kind": "concept",
          "title": "Recovery Objectives",
          "content": "In the world of cloud computing, understanding Recovery Time Objective (RTO) and Recovery Point Objective (RPO) is essential for maintaining service reliability. RTO is the maximum amount of time that we can tolerate being without our services after something goes wrong, like a system failure or a natural disaster. On the other hand, RPO is about data safety; it defines the maximum time period during which we can afford to lose data. For instance, if we have a checkout system that needs to be operational again in less than 5 minutes and we cannot afford to lose any data at all, relying on asynchronous replication with a manual switch-over would not be sufficient. Instead, we must create a robust architecture that incorporates near-real-time data replication. This means that our data is continuously updated and backed up. Additionally, we should implement automated failover processes that have been thoroughly tested to ensure they work correctly when needed. Finally, having clear and detailed instructions, often referred to as runbooks, is crucial. These instructions guide our team on how to respond effectively during emergencies, ensuring that we can recover quickly and minimize any negative impact on our users. By focusing on these elements, we can build a resilient cloud architecture that keeps our services running smoothly, even in challenging situations."
        },
        {
          "id": "cloud-computing-301-l01-c3",
          "kind": "example",
          "title": "Global Read, Local Write Trade-offs",
          "content": "In the world of cloud computing, one popular design pattern involves using global read replicas along with a specific region that is set aside for writing data. This means that users from different parts of the world can access and read data quickly, which is great for performance. However, this setup can also lead to some challenges. For example, it might create 'hotspots' where too many write requests are directed to one place, making it harder to manage and potentially causing delays. Additionally, if something goes wrong and a failover is needed, it can become quite complicated to handle.\nOn the flip side, there are fully multi-writer designs that allow multiple regions to write data at the same time. This approach reduces the dependency on any single region, which can be beneficial. However, it also introduces new challenges, such as the need to resolve conflicts when different regions try to update the same data simultaneously. This can increase the operational risks that teams face.\nWhen teams are choosing which design to implement, they need to think carefully about several factors. These include how critical the data is to their operations, how frequently the data is updated, and what level of consistency users expect when they access the data. By considering these aspects, teams can make informed decisions that best suit their needs."
        }
      ],
      "flashcards": [
        {
          "id": "cloud-computing-301-l01-f1",
          "front": "RTO",
          "back": "Maximum acceptable time to restore service after disruption."
        },
        {
          "id": "cloud-computing-301-l01-f2",
          "front": "RPO",
          "back": "Maximum acceptable amount of data loss measured by time between last good state and failure."
        },
        {
          "id": "cloud-computing-301-l01-f3",
          "front": "Active-active",
          "back": "Multiple regions serve live traffic simultaneously with failover and traffic policy controls."
        }
      ],
      "learningAids": [
        {
          "id": "cloud-computing-301-l01-a1",
          "type": "image",
          "title": "Recovery Objective Grid",
          "content": "Architecture matrix mapping workload criticality to target RTO/RPO tiers."
        }
      ],
      "imageUrl": "/generated-images/refinery/cloud-computing-301-l01.png"
    },
    {
      "id": "cloud-computing-301-l02",
      "title": "Distributed Data and Consistency Lab",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "A conceptual 3D illustration of three glowing databases syncing data. One database has a slight delay, represented by a loading ring, illustrating eventual consistency. Clean, modern tech aesthetic, isometric view.",
      "conceptVideoPrompt": "An animated sequence showing data packets traveling between three server racks. A visual scale tips back and forth between 'Speed' and 'Accuracy', demonstrating the CAP theorem trade-offs in real-time. Sleek, modern motion graphics.",
      "objectives": [
        "Compare strong, eventual, and bounded-staleness consistency",
        "Select partitioning and replication strategies for different workloads",
        "Reason about CAP trade-offs under network partitions"
      ],
      "chunks": [
        {
          "id": "cloud-computing-301-l02-c1",
          "kind": "concept",
          "title": "Consistency Choices",
          "content": "In cloud computing, data consistency is a crucial concept that helps us understand how information is managed across different systems. There are several options we can choose from when it comes to ensuring that data remains consistent. First, we have strong consistency. This means that once a user writes or updates information, they will always see the most current version of that data. While this is great for accuracy, it can sometimes slow things down, especially if the data is stored in different locations around the world. This can also make the system less available during network problems.\nNext, we have eventual consistency. This approach allows for better availability and faster write speeds, but it comes with a trade-off: users might see outdated information for a short period. Finally, there's bounded staleness, which is a compromise between the two. It sets specific limits on how old the data can be, ensuring that users get relatively fresh information while still maintaining good performance.\nWhen creating cloud architecture, it's essential to choose the right consistency model based on what users need most. This means focusing on the critical operations that users rely on, rather than just following popular trends or theories in technology."
        },
        {
          "id": "cloud-computing-301-l02-c2",
          "kind": "practice",
          "title": "Partitioning and Hot Keys",
          "content": "Partitioning is a method that helps to share the workload across different sections of a system, making it more efficient. However, if the keys used for this partitioning are not designed properly, it can lead to issues such as hot shards, where some sections become overloaded, and spikes in latency, which means that the system takes longer to respond. To prevent these problems, teams should keep an eye on how each partition is performing by using metrics that indicate how evenly the workload is spread out. If they find that certain partitions are carrying too much weight, they can take steps to improve the situation. This might involve redesigning the keys used for partitioning, using a technique called adaptive sharding, or implementing write buffering to help distribute the load more evenly. It's also very important to look at both the data model and the patterns of traffic together, because just adding more computing power won't fix issues that arise from uneven distribution of partitions. Understanding how these elements work together is key to maintaining a resilient and efficient system."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cloud-computing-301-l02-act1",
          "type": "matching_pairs",
          "title": "Workload to Consistency Match",
          "description": "Match workload requirements to the most suitable consistency model.",
          "pairs": [
            {
              "left": "Real-time account balance updates",
              "right": "Strong consistency"
            },
            {
              "left": "Social feed like counters",
              "right": "Eventual consistency"
            },
            {
              "left": "Global catalog with lag under 2 seconds",
              "right": "Bounded staleness"
            },
            {
              "left": "Critical inventory reservation",
              "right": "Strong consistency with transactional write path"
            }
          ]
        },
        {
          "id": "cloud-computing-301-l02-act2",
          "type": "scenario_practice",
          "title": "Partition Failure Drill",
          "description": "Decide system behavior when cross-region replication is interrupted.",
          "instructions": [
            "Choose fail-open or fail-closed for each endpoint class.",
            "State one user-facing risk of your choice."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Which endpoints in a commerce app require strong consistency and why?",
          "How would you detect and remediate a hot partition before customer impact escalates?",
          "When is eventual consistency acceptable, and how do you communicate it to product teams?"
        ]
      },
      "learningAids": [
        {
          "id": "cloud-computing-301-l02-a1",
          "type": "practice",
          "title": "Consistency Decision Tree",
          "content": "Stepwise guide for selecting consistency model by correctness risk and latency target."
        }
      ],
      "imageUrl": "/generated-images/refinery/cloud-computing-301-l02.png"
    },
    {
      "id": "cloud-computing-301-l03",
      "title": "Checkpoint 1: Architecture Decisions",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing digital checkpoint gate in a futuristic cyber environment, with floating holographic checkmarks and a glowing lock, symbolizing a knowledge test in cloud architecture.",
      "conceptVideoPrompt": "A fast-paced montage of cloud architecture diagrams, server racks, and data streams, culminating in a glowing question mark that transforms into a checkmark. High-tech, energetic motion graphics.",
      "questions": [
        {
          "id": "cloud-computing-301-l03-q1",
          "text": "Which statement best describes RPO?",
          "skillId": "cloud-computing-301-skill-recovery",
          "options": [
            {
              "id": "a",
              "text": "Maximum acceptable service downtime"
            },
            {
              "id": "b",
              "text": "Maximum acceptable data loss window"
            },
            {
              "id": "c",
              "text": "Average response latency across regions"
            },
            {
              "id": "d",
              "text": "Time to provision replacement compute"
            }
          ],
          "correctOptionId": "b",
          "explanation": "RPO defines the tolerated data-loss interval after failure."
        },
        {
          "id": "cloud-computing-301-l03-q2",
          "text": "What is the primary risk of active-active multi-writer databases?",
          "skillId": "cloud-computing-301-skill-data",
          "options": [
            {
              "id": "a",
              "text": "Higher risk of write conflicts and reconciliation complexity"
            },
            {
              "id": "b",
              "text": "Inability to scale read traffic"
            },
            {
              "id": "c",
              "text": "No regional latency benefits"
            },
            {
              "id": "d",
              "text": "Impossible automated failover"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Concurrent writes across regions can conflict and require robust merge policy."
        },
        {
          "id": "cloud-computing-301-l03-q3",
          "text": "Under a network partition, CAP theorem implies you must trade off:",
          "skillId": "cloud-computing-301-skill-data",
          "options": [
            {
              "id": "a",
              "text": "Consistency or availability"
            },
            {
              "id": "b",
              "text": "Durability or encryption"
            },
            {
              "id": "c",
              "text": "Observability or automation"
            },
            {
              "id": "d",
              "text": "Latency or throughput always"
            }
          ],
          "correctOptionId": "a",
          "explanation": "During partition, distributed systems cannot guarantee both full consistency and availability."
        },
        {
          "id": "cloud-computing-301-l03-q4",
          "text": "A workload requires near-zero data loss and sub-5-minute recovery. Which approach is strongest?",
          "skillId": "cloud-computing-301-skill-recovery",
          "options": [
            {
              "id": "a",
              "text": "Daily backup with manual restore"
            },
            {
              "id": "b",
              "text": "Cold standby in same region"
            },
            {
              "id": "c",
              "text": "Multi-region replication with automated failover and tested runbooks"
            },
            {
              "id": "d",
              "text": "Single-zone deployment with auto-restart"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Aggressive RTO/RPO requires replication plus automated, regularly tested recovery workflow."
        }
      ],
      "learningAids": [
        {
          "id": "cloud-computing-301-l03-a1",
          "type": "mnemonic",
          "title": "Recovery Trio",
          "content": "Targets, Tooling, Testing."
        }
      ],
      "imageUrl": "/generated-images/refinery/cloud-computing-301-l03.png"
    },
    {
      "id": "cloud-computing-301-l04",
      "title": "Zero-Trust Cloud Security Architecture",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "A high-tech visualization of a glowing digital vault surrounded by multiple floating, translucent security shields. Laser scanners verify digital ID cards passing through the shields. Cyberpunk aesthetic, neon blue and purple.",
      "conceptVideoPrompt": "A 3D animation of a network grid. A red 'untrusted' data packet tries to enter but is blocked by a glowing barrier. A green packet presents a digital token, the barrier opens just enough to let it through, and closes immediately. Cinematic, cybersecurity theme.",
      "objectives": [
        "Design identity-centric access boundaries",
        "Apply network segmentation and service-to-service auth",
        "Map controls to compliance-ready evidence trails"
      ],
      "chunks": [
        {
          "id": "cloud-computing-301-l04-c1",
          "kind": "concept",
          "title": "Identity as the New Perimeter",
          "content": "In a zero-trust security model, we operate under the assumption that we cannot trust any requests based solely on where they come from on the network. This means that every request must go through a process of authentication, authorization, and logging. By using short-lived credentials, unique identities for workloads, and policies that are written as code, we can reduce the risks associated with long-lived secrets and improve our ability to audit and track access. This approach helps ensure that our systems remain secure and that we can respond quickly to any potential threats."
        },
        {
          "id": "cloud-computing-301-l04-c2",
          "kind": "example",
          "title": "Segmentation and East-West Controls",
          "content": "In a flat network, if a security breach occurs, the consequences can be much more serious than in a well-structured network. To help protect against this, we can implement a strategy called micro-segmentation. This approach limits how data moves around within the network by creating specific communication paths that follow the principle of least privilege. This means that services are only allowed to talk to each other when it's absolutely necessary, which helps to minimize potential damage. Furthermore, we can use a service mesh policy that requires mutual TLS (Transport Layer Security) and clear service identities for internal API calls. This added layer of security helps to prevent unauthorized access and reduces the chances of attackers moving laterally within the network, ultimately making our systems much safer and more resilient against threats."
        },
        {
          "id": "cloud-computing-301-l04-c3",
          "kind": "recap",
          "title": "Compliance Through Engineering Evidence",
          "content": "To enhance our compliance maturity, we need to ensure that our security controls produce evidence that machines can easily verify. This evidence includes important records such as changes to policies, logs of who accessed what information, records of key rotations, and approvals for any changes made. By automating the process of generating this evidence, we can significantly reduce the stress that comes with audits. Additionally, this automation helps us identify any deviations from our established controls early on. Taking this proactive approach is crucial for maintaining compliance and allows us to swiftly address any issues that may come up, ensuring a safer cloud environment for everyone."
        }
      ],
      "flashcards": [
        {
          "id": "cloud-computing-301-l04-f1",
          "front": "Zero trust",
          "back": "Security model where trust is continuously verified, not assumed from network location."
        },
        {
          "id": "cloud-computing-301-l04-f2",
          "front": "Least privilege",
          "back": "Grant only the minimum permissions required for a task, for the minimum time needed."
        },
        {
          "id": "cloud-computing-301-l04-f3",
          "front": "mTLS",
          "back": "Mutual TLS authenticates both client and server, securing service-to-service communication."
        }
      ],
      "learningAids": [
        {
          "id": "cloud-computing-301-l04-a1",
          "type": "image",
          "title": "Zero-Trust Control Map",
          "content": "Control map linking identity, network, data, and audit layers to common cloud threats."
        }
      ],
      "imageUrl": "/generated-images/refinery/cloud-computing-301-l04.png"
    },
    {
      "id": "cloud-computing-301-l05",
      "title": "Performance Engineering and Capacity Lab",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "A futuristic dashboard with glowing neon graphs and dials. One specific spike on a line graph is highlighted in bright red, representing tail latency, while the rest of the graph is stable blue. High-tech UI design.",
      "conceptVideoPrompt": "An animation of a busy digital highway representing network traffic. Most cars (data packets) move smoothly, but a bottleneck forms in one lane. A digital dial appears, showing latency increasing, then a new lane opens up, resolving the traffic. Sleek motion graphics.",
      "objectives": [
        "Interpret saturation, throughput, and latency together",
        "Apply load-test insights to tuning decisions",
        "Prevent regression via performance budgets"
      ],
      "chunks": [
        {
          "id": "cloud-computing-301-l05-c1",
          "kind": "concept",
          "title": "Tail Latency Matters",
          "content": "When we think about how users experience technology, we need to pay special attention to something called tail latency. This is different from average latency, which is just a number that shows the typical response time. Instead, tail latency focuses on the slowest responses that users might encounter. Even if a system has a stable median latency, meaning most responses are quick, it can still feel very slow if the 99th percentile latency, which represents the slowest 1% of responses, spikes during busy times. This is why performance engineering is so important. It involves figuring out where potential slowdowns might happen, such as in dependency calls, which are requests made to other services, and understanding how queuing behavior can impact how quickly users get their responses. Additionally, we need to keep an eye on thread-pool saturation, which happens when there are not enough threads available to handle requests efficiently. Finally, it's essential to test the system using realistic traffic patterns, simulating how users would actually interact with it, to ensure that it performs well in real-world situations."
        },
        {
          "id": "cloud-computing-301-l05-c2",
          "kind": "practice",
          "title": "Performance Budgets",
          "content": "A performance budget is an important tool that helps us keep our systems running smoothly and efficiently. It consists of specific, measurable limits that we can track to ensure everything is working as it should. For example, we might look at metrics like the 95th percentile latency, which tells us how quickly our system responds to requests for most users. We also monitor CPU usage to see how much processing power we are using, check the available memory to ensure we have enough resources, and measure how long database queries take to complete. In our release pipelines, we can create rules that automatically block new updates if any of these performance metrics go beyond our set limits. By doing this, we make performance a top priority, ensuring that we provide a reliable and high-quality experience for everyone who uses our services."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cloud-computing-301-l05-act1",
          "type": "sorting_buckets",
          "title": "Signal-to-Bottleneck Mapping",
          "description": "Sort each signal by likely dominant bottleneck.",
          "buckets": [
            "CPU Bound",
            "IO/Network Bound",
            "Contention/Queueing"
          ],
          "items": [
            {
              "text": "High CPU and low IO wait",
              "bucket": "CPU Bound"
            },
            {
              "text": "Low CPU with rising downstream latency",
              "bucket": "IO/Network Bound"
            },
            {
              "text": "Thread pool exhausted during bursts",
              "bucket": "Contention/Queueing"
            },
            {
              "text": "Database lock wait time spikes",
              "bucket": "Contention/Queueing"
            },
            {
              "text": "Packet retransmits increase during peak",
              "bucket": "IO/Network Bound"
            }
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Why can p50 remain stable while p99 degrades sharply?",
          "Define one performance budget gate for your CI pipeline.",
          "Which metric would you inspect first for suspected queue contention?"
        ]
      },
      "learningAids": [
        {
          "id": "cloud-computing-301-l05-a1",
          "type": "practice",
          "title": "Load Test Debrief Sheet",
          "content": "Template to capture hypothesis, bottleneck evidence, fix applied, and post-fix benchmark delta."
        }
      ],
      "imageUrl": "/generated-images/refinery/cloud-computing-301-l05.png"
    },
    {
      "id": "cloud-computing-301-l06",
      "title": "Checkpoint 2: Security and Performance",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A futuristic glowing shield intersecting with a high-speed speedometer dial, representing the intersection of security and performance. 3D render, dark background with neon green and blue lights.",
      "conceptVideoPrompt": "A dynamic loop showing a padlock locking securely, followed immediately by a data stream accelerating to light speed, symbolizing the balance of zero-trust security and high performance. Cinematic tech animation.",
      "questions": [
        {
          "id": "cloud-computing-301-l06-q1",
          "text": "Which control most directly reduces lateral movement risk inside a cloud network?",
          "skillId": "cloud-computing-301-skill-security",
          "options": [
            {
              "id": "a",
              "text": "Single shared admin account"
            },
            {
              "id": "b",
              "text": "Flat subnet for all workloads"
            },
            {
              "id": "c",
              "text": "Micro-segmentation with explicit allow policies"
            },
            {
              "id": "d",
              "text": "Disabling all internal logs"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Segmentation with explicit policy constrains breach propagation paths."
        },
        {
          "id": "cloud-computing-301-l06-q2",
          "text": "Which metric best reflects end-user slow experience under burst traffic?",
          "skillId": "cloud-computing-301-skill-performance",
          "options": [
            {
              "id": "a",
              "text": "Median latency only"
            },
            {
              "id": "b",
              "text": "p99 latency"
            },
            {
              "id": "c",
              "text": "Build duration"
            },
            {
              "id": "d",
              "text": "Disk capacity total"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Tail latency captures worst-case user experience during stress."
        },
        {
          "id": "cloud-computing-301-l06-q3",
          "text": "A service uses long-lived static credentials for internal API calls. Best remediation?",
          "skillId": "cloud-computing-301-skill-security",
          "options": [
            {
              "id": "a",
              "text": "Increase credential lifetime to reduce rotation work"
            },
            {
              "id": "b",
              "text": "Use workload identity and short-lived tokens"
            },
            {
              "id": "c",
              "text": "Store credentials in plain text for visibility"
            },
            {
              "id": "d",
              "text": "Disable service-to-service authentication"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Short-lived identity tokens reduce blast radius and secret leakage risk."
        },
        {
          "id": "cloud-computing-301-l06-q4",
          "text": "What is the main value of performance budgets in delivery pipelines?",
          "skillId": "cloud-computing-301-skill-performance",
          "options": [
            {
              "id": "a",
              "text": "They replace functional testing"
            },
            {
              "id": "b",
              "text": "They prevent release when performance regresses beyond agreed thresholds"
            },
            {
              "id": "c",
              "text": "They guarantee zero outages"
            },
            {
              "id": "d",
              "text": "They eliminate capacity planning"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Performance budgets operationalize non-functional acceptance criteria in CI/CD."
        }
      ],
      "learningAids": [
        {
          "id": "cloud-computing-301-l06-a1",
          "type": "mnemonic",
          "title": "TAIL",
          "content": "Track averages less, inspect latency tails."
        }
      ],
      "imageUrl": "/generated-images/refinery/cloud-computing-301-l06.png"
    },
    {
      "id": "cloud-computing-301-l07",
      "title": "Resilience Game Day Studio",
      "type": "interactive",
      "duration": 17,
      "lessonImagePrompt": "A high-tech command center with multiple holographic screens showing simulated network failures and recovery metrics. A glowing red 'Inject Fault' button sits on the console. Cinematic lighting, sci-fi aesthetic.",
      "conceptVideoPrompt": "A 3D animation of a team of digital avatars in a futuristic control room. They trigger a simulated earthquake on a holographic city grid. The grid flashes red, then quickly reroutes power (data) to stay illuminated, showing a successful resilience test.",
      "objectives": [
        "Design fault-injection experiments with safe boundaries",
        "Define success criteria for resilience drills",
        "Translate game-day findings into roadmap actions"
      ],
      "chunks": [
        {
          "id": "cloud-computing-301-l07-c1",
          "kind": "practice",
          "title": "Failure Injection Planning",
          "content": "Resilience drills are an important part of preparing for potential problems in cloud computing. These drills are most useful when they simulate realistic failure scenarios. To conduct effective drills, teams must first define their hypotheses about what could go wrong. This means thinking critically about different failure situations. Next, they need to set boundaries, known as blast-radius guardrails, which help limit the impact of these failures during the tests. Additionally, teams should establish clear abort criteria, which are guidelines that indicate when to stop the test if things go awry. Finally, it’s crucial to determine how they will monitor the situation, often referred to as telemetry, to observe what happens during the drill. For instance, a hypothesis could be: 'If the API gateway in region A fails, we expect that global traffic will reroute within 90 seconds, and we want to ensure that the error rate during checkout does not exceed 2%.' This structured approach not only prepares teams for real-world challenges but also enhances their ability to respond effectively to unexpected issues."
        },
        {
          "id": "cloud-computing-301-l07-c2",
          "kind": "recap",
          "title": "From Drill to Engineering Backlog",
          "content": "After every resilience game day, we should focus on creating clear and actionable results. This means we need to identify specific people who will take charge of fixing any issues we found with our detection systems, updating our runbooks, automating necessary tasks, and addressing any architectural debts we discovered. If we don’t assign clear responsibilities and set deadlines for these tasks, our exercises might just end up being performances that don’t actually help us reduce risks. By establishing accountability, we can ensure that the lessons we learn lead to real improvements in our resilience efforts, making our systems stronger and more reliable."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cloud-computing-301-l07-act1",
          "type": "scenario_practice",
          "title": "Design a Game Day",
          "description": "Set up a safe fault injection experiment for a critical service.",
          "instructions": [
            "Define the failure hypothesis.",
            "Establish blast-radius guardrails.",
            "Set clear abort criteria."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Write one game-day hypothesis with measurable pass/fail criteria.",
          "Name two abort conditions that keep a resilience drill safe.",
          "List three follow-up actions after discovering a failover gap."
        ]
      },
      "learningAids": [
        {
          "id": "cloud-computing-301-l07-a1",
          "type": "practice",
          "title": "Game Day Runbook",
          "content": "Worksheet for hypothesis, blast radius, telemetry checkpoints, and post-drill action owners."
        }
      ],
      "imageUrl": "/generated-images/refinery/cloud-computing-301-l07.png"
    }
  ]
};
