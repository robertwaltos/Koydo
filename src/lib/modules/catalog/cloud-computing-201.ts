import type { LearningModule } from "@/lib/modules/types";

export const cloud_computing_201_Module: LearningModule = {
  "id": "cloud-computing-201",
  "title": "Cloud Platform Engineering",
  "description": "Intermediate cloud engineering focused on reliability, observability, automation, security operations, and cost-aware architecture. Learners build practical platform skills used by modern SRE and platform teams.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "cloud",
    "sre",
    "platform-engineering"
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
    "Define and apply SLI, SLO, and error-budget practices for production cloud services",
    "Design telemetry pipelines that combine metrics, logs, and traces for fast root-cause analysis",
    "Implement reliable delivery workflows using IaC, policy checks, and progressive deployment patterns",
    "Build incident response playbooks that reduce mean time to detect and mean time to recover",
    "Evaluate autoscaling and resilience patterns including queue buffering, circuit breakers, and bulkheads",
    "Use FinOps concepts to improve cloud cost efficiency without degrading performance or reliability",
    "Propose platform-level improvements with measurable engineering outcomes"
  ],
  "quizBlueprint": {
    "frequency": "every-2-lessons",
    "masteryThreshold": 0.8,
    "feedbackMode": "immediate"
  },
  "lessons": [
    {
      "id": "cloud-computing-201-l01",
      "title": "Reliability Engineering Foundations",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic control room with glowing holographic dashboards showing system health metrics, 99.9% uptime, and a balanced scale representing reliability versus speed, cinematic lighting, photorealistic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic 3D animation showing a digital highway where data packets travel smoothly. A roadblock appears (failure), but traffic seamlessly reroutes to an alternate path, illustrating high availability and blast radius reduction. Clean, modern tech aesthetic.",
      "objectives": [
        "Differentiate availability, reliability, and durability",
        "Define SLI/SLO/error budget and describe how teams use them",
        "Map common production failure modes to mitigation patterns"
      ],
      "chunks": [
        {
          "id": "cloud-computing-201-l01-c1",
          "kind": "concept",
          "title": "Reliability Language That Teams Share",
          "content": "Clear communication is the bedrock of cloud reliability. When engineers discuss system health, they rely on specific terms to ensure everyone is on the same page. Availability measures whether users can access a service at any given moment—if you can log in, it's available. Reliability tracks how well that service performs over time without degrading or failing. Durability focuses on data safety, ensuring that even during a catastrophic event like a power outage, your stored files remain intact. Site Reliability Engineering (SRE) uses specific measurements known as Service-Level Indicators (SLIs) to evaluate the user experience, such as request success rates or processing speed. Based on these SLIs, teams set Service-Level Objectives (SLOs), like aiming for 99.9% successful requests over 30 days. The gap between perfect 100% performance and your SLO is your Error Budget. This budget dictates how quickly teams can release new features; if the budget is depleted, feature releases pause so the team can focus entirely on stabilizing the system."
        },
        {
          "id": "cloud-computing-201-l01-c2",
          "kind": "example",
          "title": "Failure Domains and Blast Radius",
          "content": "A failure domain is a specific section of your architecture where problems are likely to happen together—like a single availability zone, a database cluster, or a shared cache. To keep services running smoothly, platform engineers work to reduce the 'blast radius,' which is the potential impact of a single failure. By separating workloads across multiple zones, engineers ensure that a localized outage doesn't take down the entire system. For example, imagine a service running API pods across three different zones behind a load balancer, with each zone capable of handling 60% of the usual traffic. If one zone fails, the remaining two can automatically absorb the extra load. This architectural flexibility ensures that users continue to access the service without interruption, demonstrating how careful design minimizes the blast radius and maximizes resilience."
        },
        {
          "id": "cloud-computing-201-l01-c3",
          "kind": "recap",
          "title": "Reliability as a Product Requirement",
          "content": "Reliability isn't just an operational afterthought; it is a core product requirement that must be designed from day one. Service-Level Objectives (SLOs) help translate vague goals like 'the app should be fast' into measurable engineering targets, such as '95% of checkout transactions must complete in under 300 milliseconds.' To maintain these targets, experienced teams monitor both leading and lagging indicators. Leading indicators, like queue depth or CPU saturation, predict future performance and allow teams to intervene before users notice a slowdown. Lagging indicators, such as customer support tickets or failed transaction logs, reflect past performance. By proactively managing these metrics, teams ensure a consistently high-quality user experience while balancing the need for rapid innovation."
        }
      ],
      "flashcards": [
        {
          "id": "cloud-computing-201-l01-f1",
          "front": "SLI (Service-Level Indicator)",
          "back": "A quantitative measure of service behavior, such as success rate, latency, or error ratio observed by users."
        },
        {
          "id": "cloud-computing-201-l01-f2",
          "front": "SLO (Service-Level Objective)",
          "back": "A target value for an SLI over a time window, for example 99.9% successful requests over 30 days."
        },
        {
          "id": "cloud-computing-201-l01-f3",
          "front": "Error budget",
          "back": "The maximum unreliability allowed by an SLO; teams spend it with releases and protect it with reliability work."
        },
        {
          "id": "cloud-computing-201-l01-f4",
          "front": "Blast radius",
          "back": "The scope of impact when a component fails; smaller blast radius means failures affect fewer users or systems."
        }
      ],
      "learningAids": [
        {
          "id": "cloud-computing-201-l01-a1",
          "type": "image",
          "title": "SLO Scorecard",
          "content": "One-page visual for SLI definitions, objective windows, and monthly error-budget burn examples."
        }
      ],
      "imageUrl": "/generated-images/refinery/cloud-computing-201-l01.png"
    },
    {
      "id": "cloud-computing-201-l02",
      "title": "Observability and Incident Response Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A split-screen digital illustration. On the left, a magnifying glass over lines of code (logs). On the right, a glowing interconnected web of nodes (traces) and a line graph spiking (metrics). Cyberpunk color palette.",
      "conceptVideoPrompt": "Veo 3.1 prompt: Fast-paced point-of-view shot of an engineer's multi-monitor setup during an incident. Red alerts flash, then the screen transitions to a structured timeline showing detection, triage, and resolution, ending with a green 'System Restored' checkmark.",
      "objectives": [
        "Use metrics, logs, and traces together for diagnosis",
        "Identify noisy alerts and propose actionable alert rules",
        "Create a first-response incident timeline"
      ],
      "chunks": [
        {
          "id": "cloud-computing-201-l02-c1",
          "kind": "concept",
          "title": "From Monitoring to Observability",
          "content": "Monitoring helps teams track known issues using predefined dashboards and thresholds. When a known problem occurs, monitoring tools immediately flag it. However, modern cloud environments are complex, and unpredictable issues often arise. This is where observability comes in. Observability allows teams to investigate unknown problems by analyzing the internal state of a system through three core pillars: Metrics, Logs, and Traces. Metrics provide high-level trends over time, such as CPU usage or request rates. Logs offer detailed, timestamped records of specific events, crucial for understanding the 'what' and 'why' of an error. Traces follow a single user request as it travels across multiple microservices, pinpointing exactly where a bottleneck occurs. Relying solely on basic monitoring might cause you to miss application-level degradation, but full observability empowers you to diagnose and resolve complex, unforeseen anomalies."
        },
        {
          "id": "cloud-computing-201-l02-c2",
          "kind": "practice",
          "title": "Incident Workflow",
          "content": "An effective incident response process is vital for maintaining cloud reliability. The workflow consists of detection, triage, mitigation, communication, and review. When an alert fires, first responders act quickly to stabilize the service. Their immediate goal is mitigation—reducing the impact on users—not necessarily finding the root cause right away. Mitigation strategies include shifting traffic to healthy servers, using feature flags to disable a buggy new feature, or rolling back to a previous stable version. During this phase, clear communication is essential; a designated team member updates stakeholders while engineers focus on the fix. Once the system is stable, the team conducts a blameless post-incident review (PIR). This review focuses on systemic failures rather than human error, turning lessons learned into actionable engineering tasks to prevent the issue from recurring."
        },
        {
          "id": "cloud-computing-201-l02-c3",
          "kind": "concept",
          "title": "Building an Incident Timeline",
          "content": "Creating a precise incident timeline is a critical part of the post-incident review. A well-constructed timeline documents the exact sequence of events: when the first anomaly was detected by observability tools, when the alert was acknowledged, the steps taken during triage, the moment mitigation was applied, and when full service was restored. This chronological mapping helps teams calculate key metrics like Mean Time to Detect (MTTD) and Mean Time to Recover (MTTR). By analyzing the timeline, engineers can identify bottlenecks in their response process. For instance, if it took 20 minutes to acknowledge an alert, the team might need to adjust their paging rules or reduce alert fatigue. Ultimately, the timeline transforms a chaotic outage into a structured learning opportunity."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cloud-computing-201-l02-act1",
          "type": "sorting_buckets",
          "title": "Telemetry Signal Sort",
          "description": "Classify each diagnostic clue as metric, log, or trace evidence.",
          "buckets": [
            "Metrics",
            "Logs",
            "Traces"
          ],
          "items": [
            {
              "text": "p95 latency jumped from 180 ms to 620 ms",
              "bucket": "Metrics"
            },
            {
              "text": "Order service error: timeout contacting payments",
              "bucket": "Logs"
            },
            {
              "text": "Span waterfall shows 4.2 s at inventory API",
              "bucket": "Traces"
            },
            {
              "text": "Queue depth exceeded 50k messages",
              "bucket": "Metrics"
            },
            {
              "text": "Request id 8f1a... retried 5 times before fail",
              "bucket": "Logs"
            },
            {
              "text": "Single user request crosses 7 services in 1.8 s",
              "bucket": "Traces"
            }
          ]
        },
        {
          "id": "cloud-computing-201-l02-act2",
          "type": "timeline_builder",
          "title": "Incident Timeline Builder",
          "description": "Place each response step in the right sequence for a severity-1 outage.",
          "instructions": [
            "Order the steps from first signal to post-incident follow-up.",
            "Explain one risk if the communication step is skipped."
          ],
          "data": {
            "steps": [
              "Alert fires and is acknowledged",
              "Initial impact assessment",
              "Mitigation applied (rollback or traffic shift)",
              "Stakeholder status update",
              "Root-cause validation",
              "Post-incident review and action items"
            ]
          }
        }
      ],
      "metadata": {
        "prompts": [
          "Given high latency and low CPU, what second signal would you check next and why?",
          "Write a two-sentence stakeholder update for an active production incident.",
          "Name one alert that should page immediately and one that should create a ticket only."
        ]
      },
      "learningAids": [
        {
          "id": "cloud-computing-201-l02-a1",
          "type": "practice",
          "title": "On-Call First 10 Minutes",
          "content": "Checklist for acknowledgement, impact scope, mitigation choice, and communication cadence."
        }
      ]
    },
    {
      "id": "cloud-computing-201-l03",
      "title": "Checkpoint 1: Reliability and Ops",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A sleek, modern digital checkpoint gate with glowing blue and green lights, symbolizing a successful system health check in a cloud environment, isometric 3D style.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A looping animation of a glowing digital lock clicking into place, followed by a burst of data particles flowing upward, representing knowledge mastery and system security.",
      "quizBlueprint": {
        "totalQuestions": 5,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 5,
            "pointsEach": 1
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 3,
          "hard": 1
        }
      },
      "questions": [
        {
          "id": "cloud-computing-201-l03-q1",
          "text": "A service has an SLO of 99.9% success over 30 days. What is the monthly error budget?",
          "skillId": "cloud-computing-201-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "0.1% failed requests"
            },
            {
              "id": "b",
              "text": "1% failed requests"
            },
            {
              "id": "c",
              "text": "10% failed requests"
            },
            {
              "id": "d",
              "text": "No failures are allowed"
            }
          ],
          "correctOptionId": "a",
          "explanation": "99.9% objective allows 0.1% of requests to fail within the measurement window."
        },
        {
          "id": "cloud-computing-201-l03-q2",
          "text": "Which telemetry source is most useful for seeing cross-service latency on one request path?",
          "skillId": "cloud-computing-201-skill-observability",
          "options": [
            {
              "id": "a",
              "text": "Application logs only"
            },
            {
              "id": "b",
              "text": "Distributed traces"
            },
            {
              "id": "c",
              "text": "CPU utilization metric"
            },
            {
              "id": "d",
              "text": "Billing report"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Distributed traces show span-by-span latency across service calls for one request."
        },
        {
          "id": "cloud-computing-201-l03-q3",
          "text": "What is the best first mitigation when a bad deployment causes elevated 5xx errors?",
          "skillId": "cloud-computing-201-skill-incident-response",
          "options": [
            {
              "id": "a",
              "text": "Wait for more data before changing anything"
            },
            {
              "id": "b",
              "text": "Scale the database vertically"
            },
            {
              "id": "c",
              "text": "Rollback or disable the risky feature flag"
            },
            {
              "id": "d",
              "text": "Restart every service in the cluster"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Fastest risk-reduction is restoring known-good behavior by rollback or feature disablement."
        },
        {
          "id": "cloud-computing-201-l03-q4",
          "text": "Which alert is most likely to create pager fatigue?",
          "skillId": "cloud-computing-201-skill-observability",
          "options": [
            {
              "id": "a",
              "text": "Sustained checkout error rate above 3% for 10 minutes"
            },
            {
              "id": "b",
              "text": "Disk usage exceeds 80% on one non-critical build node"
            },
            {
              "id": "c",
              "text": "Authentication failures spike across all regions"
            },
            {
              "id": "d",
              "text": "API latency p99 exceeds SLO threshold"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Low-severity, noisy infrastructure thresholds should usually route to ticketing, not paging."
        },
        {
          "id": "cloud-computing-201-l03-q5",
          "text": "Why do teams define failure domains in architecture design?",
          "skillId": "cloud-computing-201-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "To maximize coupling between services"
            },
            {
              "id": "b",
              "text": "To reduce blast radius when components fail"
            },
            {
              "id": "c",
              "text": "To eliminate the need for observability"
            },
            {
              "id": "d",
              "text": "To avoid writing runbooks"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Failure-domain design localizes impact so one fault does not cascade broadly."
        }
      ],
      "learningAids": [
        {
          "id": "cloud-computing-201-l03-a1",
          "type": "mnemonic",
          "title": "Incident Core Loop",
          "content": "Acknowledge, Assess, Mitigate, Communicate, Review."
        }
      ],
      "imageUrl": "/generated-images/refinery/cloud-computing-201-l03.png"
    },
    {
      "id": "cloud-computing-201-l04",
      "title": "Automation, IaC, and Progressive Delivery",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A robotic arm assembling glowing blocks of code into a structured skyscraper, representing Infrastructure as Code and automated deployment, vibrant neon colors, high tech.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A visual metaphor of a train switching tracks smoothly without stopping. The train represents user traffic, and the tracks represent blue/green deployment environments. Seamless transition, high-quality 3D render.",
      "objectives": [
        "Explain why immutable infrastructure reduces configuration drift",
        "Describe CI/CD guardrails for safer releases",
        "Compare rolling, blue/green, and canary deployment strategies"
      ],
      "chunks": [
        {
          "id": "cloud-computing-201-l04-c1",
          "kind": "concept",
          "title": "Infrastructure as Code Discipline",
          "content": "Infrastructure as Code (IaC) revolutionizes how teams manage cloud resources. Instead of manually clicking through a web console to configure servers, networks, and databases, engineers write declarative code templates. This approach treats infrastructure with the same rigor as application code. Changes are proposed via pull requests, allowing peers to review and validate modifications before they go live. A major benefit of IaC is the prevention of 'configuration drift'—the dangerous scenario where the actual state of a server diverges from its documented state due to manual tweaks. With IaC, drift detection tools automatically flag unmanaged changes. Furthermore, if a disaster occurs, IaC allows teams to rapidly and reliably recreate their entire environment from scratch, ensuring consistency, security, and compliance."
        },
        {
          "id": "cloud-computing-201-l04-c2",
          "kind": "example",
          "title": "CI/CD Safety Rails",
          "content": "Continuous Integration and Continuous Delivery (CI/CD) pipelines are the automated assembly lines of software development. To prevent bad code from reaching users, these pipelines are equipped with strict safety rails. Linting tools catch syntax errors early, while unit and integration tests verify that individual components and their interactions function correctly. Policy checks ensure compliance with security standards, and artifact signing guarantees the code hasn't been tampered with. If any of these checks fail, the pipeline halts immediately. For high-risk deployments, runtime guardrails act as an automated safety net, instantly reverting changes if error rates or latency spike post-deployment. Elite engineering teams also conduct 'game days'—simulated failure scenarios that test these automated rollbacks in real-world conditions, building confidence in their safety mechanisms."
        },
        {
          "id": "cloud-computing-201-l04-c3",
          "kind": "concept",
          "title": "Progressive Delivery Patterns",
          "content": "Progressive delivery minimizes the risk of releasing new features by exposing them to users gradually. A 'rolling deployment' updates instances sequentially, ensuring the service remains available, though it can be slow to roll back. A 'blue/green deployment' spins up a completely new environment (green) alongside the existing one (blue). Once the green environment passes all tests, traffic is instantly switched over, allowing for an immediate rollback if issues arise. A 'canary deployment' routes a tiny percentage of traffic (e.g., 1%) to the new version. If observability metrics remain healthy, the rollout gradually expands to 100%. Finally, 'feature flags' decouple deployment from release. Code can be deployed to production but hidden behind a toggle, allowing teams to turn features on or off for specific user segments instantly without redeploying code."
        }
      ],
      "flashcards": [
        {
          "id": "cloud-computing-201-l04-f1",
          "front": "Configuration drift",
          "back": "Mismatch between declared infrastructure and actual running state caused by manual or unmanaged changes."
        },
        {
          "id": "cloud-computing-201-l04-f2",
          "front": "Blue/green deployment",
          "back": "Release strategy with two parallel environments where traffic switches to the validated target environment."
        },
        {
          "id": "cloud-computing-201-l04-f3",
          "front": "Canary deployment",
          "back": "Gradual rollout to a small user subset first, expanding only if health metrics remain within guardrails."
        }
      ],
      "learningAids": [
        {
          "id": "cloud-computing-201-l04-a1",
          "type": "animation",
          "title": "Release Strategy Comparison",
          "content": "Side-by-side timeline of rolling, blue/green, and canary rollout behavior with rollback points."
        }
      ],
      "imageUrl": "/generated-images/refinery/cloud-computing-201-l04.png"
    },
    {
      "id": "cloud-computing-201-l05",
      "title": "Capacity, Scaling, and FinOps Workshop",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing digital scale balancing a stack of gold coins on one side and a server rack on the other, representing FinOps and cost-aware architecture, sleek corporate tech style.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animation of a cloud server expanding and contracting like a breathing lung as user traffic (represented by glowing dots) increases and decreases, demonstrating elastic autoscaling.",
      "objectives": [
        "Estimate baseline and peak capacity requirements",
        "Choose autoscaling triggers that align with user experience",
        "Apply FinOps unit economics to cloud architecture decisions"
      ],
      "chunks": [
        {
          "id": "cloud-computing-201-l05-c1",
          "kind": "concept",
          "title": "Right-Sizing and Autoscaling Signals",
          "content": "Autoscaling dynamically adjusts computing resources to match user demand, ensuring performance during traffic spikes and saving money during lulls. However, scaling based purely on technical metrics like CPU usage can be misleading. For instance, a server might have low CPU utilization but still provide a poor user experience if it's waiting on a slow database. Effective autoscaling relies on signals that reflect actual user experience. Metrics like queue depth (how many requests are waiting), request latency (how long a response takes), and concurrent sessions provide a much clearer picture of system stress. Before implementing autoscaling, teams must 'right-size' their workloads by analyzing memory, network, and storage patterns to select the most efficient instance types, establishing a solid baseline for elastic growth."
        },
        {
          "id": "cloud-computing-201-l05-c2",
          "kind": "concept",
          "title": "FinOps Metrics That Matter",
          "content": "FinOps (Financial Operations) bridges the gap between engineering decisions and business outcomes. Instead of just looking at the total monthly cloud bill, FinOps focuses on 'unit economics'—metrics that tie costs directly to business value. Examples include the cost per 1,000 API calls, cost per active user, or cost per gigabyte of processed data. Tracking these metrics allows teams to make informed architectural trade-offs. For example, introducing a caching layer might increase upfront infrastructure costs, but by drastically reducing the load on an expensive primary database, the overall cost per transaction drops. Understanding these unit metrics empowers engineers to design systems that are not only highly performant but also financially sustainable."
        },
        {
          "id": "cloud-computing-201-l05-c3",
          "kind": "concept",
          "title": "Balancing Cost and Performance",
          "content": "Achieving the perfect balance between cost and performance requires continuous tuning. Engineers must identify waste, such as orphaned storage volumes, over-provisioned environments, or idle resources running outside of business hours. Implementing automated shutdown schedules for non-production environments is a quick FinOps win. Additionally, leveraging purchasing strategies like Reserved Instances or Spot Instances for fault-tolerant batch jobs can yield massive savings. The goal of FinOps isn't simply to spend less; it's to maximize the business value of every dollar spent in the cloud. By integrating cost-awareness into the daily engineering workflow, teams ensure that scalability doesn't lead to runaway expenses."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cloud-computing-201-l05-act1",
          "type": "matching_pairs",
          "title": "Optimization Match",
          "description": "Match each cost problem with the strongest first optimization action.",
          "pairs": [
            {
              "left": "Consistently low VM utilization",
              "right": "Rightsize or move to smaller instance class"
            },
            {
              "left": "Batch jobs interrupted on on-demand only",
              "right": "Use spot + checkpoint strategy"
            },
            {
              "left": "High egress charges across regions",
              "right": "Revisit data locality and architecture boundaries"
            },
            {
              "left": "Frequent cold starts in serverless API",
              "right": "Tune concurrency and provisioned capacity"
            }
          ]
        },
        {
          "id": "cloud-computing-201-l05-act2",
          "type": "scenario_practice",
          "title": "Scale Plan Drill",
          "description": "Propose a scaling policy for flash-sale traffic with latency and cost constraints.",
          "instructions": [
            "Set one scale-out trigger and one scale-in trigger.",
            "Name one guardrail to prevent runaway cloud spend."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "If p95 latency rises while CPU is normal, what signal would you scale on next?",
          "Define one unit-cost KPI your team can review weekly.",
          "Explain one case where spending more lowers total cost of ownership."
        ]
      },
      "learningAids": [
        {
          "id": "cloud-computing-201-l05-a1",
          "type": "practice",
          "title": "FinOps Worksheet",
          "content": "Template to compute cost per transaction before and after architecture changes."
        }
      ],
      "imageUrl": "/generated-images/refinery/cloud-computing-201-l05.png"
    },
    {
      "id": "cloud-computing-201-l06",
      "title": "Checkpoint 2: Delivery and FinOps",
      "type": "quiz",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic vault door opening to reveal glowing data streams and financial charts, symbolizing the intersection of cloud delivery and FinOps, cinematic lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced montage of automated code deployment pipelines merging with upward-trending financial graphs, ending with a glowing 'Optimization Complete' badge.",
      "quizBlueprint": {
        "totalQuestions": 6,
        "timeLimitMinutes": 11,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 6,
            "pointsEach": 1
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 3,
          "hard": 1
        }
      },
      "questions": [
        {
          "id": "cloud-computing-201-l06-q1",
          "text": "What is the primary benefit of managing infrastructure as code?",
          "skillId": "cloud-computing-201-skill-automation",
          "options": [
            {
              "id": "a",
              "text": "It eliminates all incidents permanently"
            },
            {
              "id": "b",
              "text": "It replaces the need for testing"
            },
            {
              "id": "c",
              "text": "It improves repeatability, reviewability, and auditability"
            },
            {
              "id": "d",
              "text": "It guarantees lower cloud bills every month"
            }
          ],
          "correctOptionId": "c",
          "explanation": "IaC standardizes environment changes through version control and reviewable change history."
        },
        {
          "id": "cloud-computing-201-l06-q2",
          "text": "Which deployment approach usually minimizes user exposure during high-risk releases?",
          "skillId": "cloud-computing-201-skill-delivery",
          "options": [
            {
              "id": "a",
              "text": "Big-bang replacement in all regions"
            },
            {
              "id": "b",
              "text": "Canary rollout with health checks"
            },
            {
              "id": "c",
              "text": "Manual patching on production servers"
            },
            {
              "id": "d",
              "text": "Disabling telemetry before rollout"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Canary limits blast radius by exposing only a small traffic slice until metrics confirm safety."
        },
        {
          "id": "cloud-computing-201-l06-q3",
          "text": "A team tracks cost per 1,000 API requests. This is an example of:",
          "skillId": "cloud-computing-201-skill-finops",
          "options": [
            {
              "id": "a",
              "text": "A unit economics metric"
            },
            {
              "id": "b",
              "text": "A compliance framework"
            },
            {
              "id": "c",
              "text": "A tracing attribute"
            },
            {
              "id": "d",
              "text": "A static code metric"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Unit economics metrics connect cost to business output, improving optimization decisions."
        },
        {
          "id": "cloud-computing-201-l06-q4",
          "text": "Which scaling trigger is most aligned with user experience for an API service?",
          "skillId": "cloud-computing-201-skill-scaling",
          "options": [
            {
              "id": "a",
              "text": "Monthly invoice total"
            },
            {
              "id": "b",
              "text": "p95 response latency"
            },
            {
              "id": "c",
              "text": "Disk temperature"
            },
            {
              "id": "d",
              "text": "Number of team standups"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Latency directly reflects customer impact and is often a better scaling signal than raw host metrics alone."
        },
        {
          "id": "cloud-computing-201-l06-q5",
          "text": "Why are feature flags useful in progressive delivery?",
          "skillId": "cloud-computing-201-skill-delivery",
          "options": [
            {
              "id": "a",
              "text": "They remove the need for rollback"
            },
            {
              "id": "b",
              "text": "They separate deploy from release and allow controlled exposure"
            },
            {
              "id": "c",
              "text": "They encrypt network traffic"
            },
            {
              "id": "d",
              "text": "They replace identity management"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Feature flags let teams ship code safely and enable functionality to selected users incrementally."
        },
        {
          "id": "cloud-computing-201-l06-q6",
          "text": "What is the best first response if reserved capacity sits consistently underutilized?",
          "skillId": "cloud-computing-201-skill-finops",
          "options": [
            {
              "id": "a",
              "text": "Increase reservation term automatically"
            },
            {
              "id": "b",
              "text": "Ignore it to preserve flexibility"
            },
            {
              "id": "c",
              "text": "Re-baseline demand and rebalance commitments"
            },
            {
              "id": "d",
              "text": "Disable autoscaling across all services"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Underused commitments indicate mismatch between forecast and consumption; rebalance before extending terms."
        }
      ],
      "learningAids": [
        {
          "id": "cloud-computing-201-l06-a1",
          "type": "mnemonic",
          "title": "SAFE Release",
          "content": "Small batches, Automated checks, Fast rollback, Evidence-driven ramp."
        }
      ],
      "imageUrl": "/generated-images/refinery/cloud-computing-201-l06.png"
    },
    {
      "id": "cloud-computing-201-l07",
      "title": "Platform Design Studio",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "Imagen 4 prompt: A holographic blueprint of a global cloud architecture floating above a modern conference table, showing interconnected regions, databases, and users, photorealistic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A time-lapse style animation of a complex cloud architecture being drawn line-by-line on a dark digital canvas, highlighting load balancers, databases, and user nodes lighting up globally.",
      "objectives": [
        "Synthesize reliability, delivery, and cost practices in one architecture",
        "Defend design trade-offs using measurable SLO and cost outcomes",
        "Produce an actionable 30-day platform improvement plan"
      ],
      "chunks": [
        {
          "id": "cloud-computing-201-l07-c1",
          "kind": "practice",
          "title": "Case: Global Learning API",
          "content": "Picture yourself as the lead platform engineer for a dynamic global learning platform serving students across three continents. During evening homework hours, traffic spikes up to eight times the normal baseline. Currently, the system faces several critical challenges: it relies on a single main database region (a massive single point of failure), lacks distributed tracing for debugging, and requires manual approval for midnight updates. Your challenge is to redesign this architecture. You must make it resilient enough to handle massive traffic spikes without crashing, automate the release process to make updates faster and safer, and implement FinOps practices to keep costs predictable. This case study requires you to synthesize everything you've learned about reliability, observability, automation, and cost management."
        },
        {
          "id": "cloud-computing-201-l07-c2",
          "kind": "recap",
          "title": "Design Rubric",
          "content": "When evaluating your platform redesign, rely on a structured design rubric. First, establish clear Service-Level Objectives (SLOs) to define what 'success' looks like for the user experience. Next, implement an error-budget policy to govern when feature releases should be paused in favor of reliability fixes. Your observability plan must detail how you will monitor metrics, logs, and traces to detect anomalies quickly. Your release strategy should leverage progressive delivery patterns, like canary deployments, to minimize the blast radius of bad updates. Finally, define autoscaling triggers based on user-centric metrics (like latency) and establish FinOps guidelines to track unit costs. Remember, architecture is about trade-offs. For instance, adding regional read replicas will increase your monthly bill, but it drastically lowers latency and improves failover availability. Always justify your trade-offs with measurable data."
        },
        {
          "id": "cloud-computing-201-l07-c3",
          "kind": "practice",
          "title": "Creating Your 30-Day Action Plan",
          "content": "A great architecture on paper is useless without an execution strategy. Your final task is to produce an actionable 30-day platform improvement plan. Break down your massive redesign into incremental, high-impact steps. Week 1 might focus on implementing distributed tracing to gain visibility into the current bottlenecks. Week 2 could involve containerizing the application and setting up basic Infrastructure as Code (IaC) templates. Week 3 might introduce automated CI/CD pipelines with linting and unit tests. Week 4 could culminate in deploying a multi-region database failover mechanism. By prioritizing tasks based on their impact on reliability and cost, you transform a daunting architectural overhaul into a manageable, measurable engineering roadmap."
        }
      ],
      "metadata": {
        "prompts": [
          "Define two SLIs and one SLO for the case study service.",
          "Choose rollout strategy for weekly releases and justify rollback criteria.",
          "List three 30-day actions with expected impact on reliability or cost."
        ]
      },
      "learningAids": [
        {
          "id": "cloud-computing-201-l07-a1",
          "type": "practice",
          "title": "Architecture Review Canvas",
          "content": "Template with sections for reliability target, telemetry plan, release plan, and FinOps KPI baseline."
        }
      ],
      "imageUrl": "/generated-images/refinery/cloud-computing-201-l07.png"
    }
  ]
};
