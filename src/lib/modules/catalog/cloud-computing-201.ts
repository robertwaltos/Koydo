import type { LearningModule } from "@/lib/modules/types";

export const CloudComputing201Module: LearningModule = {
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
  "version": "2.0.0",
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
          "content": "In the exciting field of cloud computing, it's really important for teams to communicate clearly and use the same terms when they talk about reliability. Let's explore some essential concepts together! First, we have Availability. This term tells us whether users can access a service at any moment. Imagine trying to log into your favorite game; if you can get in, that means the service is available! Next up is Reliability. This is about how well that service performs over time without running into problems. Think of it like a car that runs smoothly for years without breaking down. Then we have Durability, which focuses on the safety of the data stored in the cloud. It ensures that even if something goes wrong, like a power outage, your important files and information stay safe and sound.\nNow, let’s talk about Site Reliability Engineering, often called SRE. This is a special approach that uses specific measurements known as service-level indicators, or SLIs, to evaluate the quality that users experience. For example, SLIs can measure how often requests are successful or how quickly they are processed. Based on these measurements, teams set goals called service-level objectives, or SLOs. An example of an SLO might be that 99.9% of requests should be successful over a 30-day period.\nFinally, there’s something called the error budget. This is the difference between perfect performance (which is 100%) and the SLO. The error budget helps teams decide how quickly they can release new features. If they use up their error budget too quickly, they need to slow down on introducing new features and focus on fixing any reliability issues first. This way, they can ensure that users have a great experience with the service they provide!\nContext recap: In the exciting field of cloud computing, it's really important for teams to communicate clearly and use the same terms when they talk about reliability. Let's explore some essential concepts together! First, we have Availability. This term tells us whether users can access a service at any moment.\nWhy this matters: Reliability Language That Teams Share helps learners in Computer Science connect ideas from Cloud Platform Engineering to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cloud-computing-201-l01-c2",
          "kind": "example",
          "title": "Failure Domains and Blast Radius",
          "content": "A failure domain is a specific area where problems are likely to happen together. Think of it like a neighborhood where if one house has an issue, the others might too. This could be a single availability zone, a database cluster, or a shared cache. To keep services running smoothly, platform engineers work hard to reduce what is known as the blast radius. This term refers to the potential impact of a failure. To minimize this impact, engineers try to keep different workloads separate across various zones. This means that if one zone has a problem, it won’t affect the others as much. They also ensure that services that don’t hold onto information can easily scale up or down based on demand. This flexibility is important for maintaining service reliability. For example, imagine a service that uses API pods running in three different zones behind a load balancer. Each zone is capable of handling 60% of the usual traffic. If one zone fails, the service can still operate because the remaining zones can automatically adjust to take on the extra load. This way, users can continue to access the service without interruption, demonstrating how careful planning and design can lead to more reliable systems.\nContext recap: A failure domain is a specific area where problems are likely to happen together. Think of it like a neighborhood where if one house has an issue, the others might too. This could be a single availability zone, a database cluster, or a shared cache. To keep services running smoothly, platform engineers work hard to reduce what is known as the blast radius.\nWhy this matters: Failure Domains and Blast Radius helps learners in Computer Science connect ideas from Cloud Platform Engineering to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cloud-computing-201-l01-c3",
          "kind": "recap",
          "title": "Reliability as a Product Requirement",
          "content": "Reliability is a vital part of creating a successful product, and it should be considered from the very start of the development process, not just added later on. One way to ensure reliability is through the use of service-level objectives, or SLOs. These objectives help turn broad ideas, like 'the service should be fast,' into specific, measurable goals that engineers can work towards. For example, if a team decides that their checkout process should have a latency of under 300 milliseconds for 95% of the transactions, they can use this target to guide their decisions about how to design their system, including how to manage data storage and how to handle user requests efficiently.\nMoreover, experienced teams keep a close eye on both leading indicators and lagging indicators. Leading indicators are metrics that can predict future performance, such as how many requests are waiting in line (queue depth) or how busy the system is (saturation). On the other hand, lagging indicators reflect past performance, like the number of customer complaints or failed transactions. By monitoring these indicators, teams can spot potential problems early and fix them before users even notice any issues. This proactive approach is essential for maintaining a high level of reliability and ensuring a positive experience for all users.\nContext recap: Reliability is a vital part of creating a successful product, and it should be considered from the very start of the development process, not just added later on. One way to ensure reliability is through the use of service-level objectives, or SLOs. These objectives help turn broad ideas, like 'the service should be fast,' into specific, measurable goals that engineers can work towards. For example, if a team decides that their checkout process should have a latency of under 300 milliseconds for 95% of the transactions, they can use this target to guide their decisions about how to design their system, including how to manage data storage and how to handle user requests efficiently."
        }
      ],
      "flashcards": [
        {
          "id": "cloud-computing-201-l01-f1",
          "front": "SLI",
          "back": "A quantitative measure of service behavior, such as success rate, latency, or error ratio observed by users."
        },
        {
          "id": "cloud-computing-201-l01-f2",
          "front": "SLO",
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
      ]
    },
    {
      "id": "cloud-computing-201-l02",
      "title": "Observability and Incident Response Lab",
      "type": "interactive",
      "duration": 15,
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
          "content": "Monitoring is an important process that helps teams keep track of known issues by using specific dashboards and thresholds that have been set up in advance. This means that when something goes wrong, teams can quickly check these dashboards to see if any of the known problems are occurring. However, observability takes this a step further. It allows teams to investigate unknown problems by analyzing data from various parts of the system. This is crucial because sometimes issues arise that teams did not anticipate.\nMetrics are one of the tools used in observability; they provide insights into trends and show how much the system is being utilized over time. Logs are another essential tool; they keep detailed records of events that happen within the system, which can be very helpful for understanding what went wrong. Lastly, traces help teams understand how requests travel through different services, giving a clearer picture of the entire process.\nIf teams only focus on monitoring basic things like CPU usage and memory, they might overlook significant application-level problems. For example, they could miss sudden increases in the time it takes for external services to respond or delays in queues that could negatively impact the user experience. By embracing observability, teams can better identify and resolve these issues, leading to a smoother and more reliable service for users.\nContext recap: Monitoring is an important process that helps teams keep track of known issues by using specific dashboards and thresholds that have been set up in advance. This means that when something goes wrong, teams can quickly check these dashboards to see if any of the known problems are occurring. However, observability takes this a step further. It allows teams to investigate unknown problems by analyzing data from various parts of the system.\nWhy this matters: From Monitoring to Observability helps learners in Computer Science connect ideas from Cloud Platform Engineering to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cloud-computing-201-l02-c2",
          "kind": "practice",
          "title": "Incident Workflow",
          "content": "An effective incident response process is crucial for maintaining the reliability of services in cloud computing. This process consists of several important steps: detection, triage, mitigation, communication, and review. When an incident occurs, the first responders are the heroes of the situation. They act quickly to stabilize the service and reduce its impact on users. This can involve several strategies, such as shifting traffic to other servers to balance the load, using feature flags to temporarily disable certain functions that may be causing issues, rolling back to a previous version of the service that was working well, or setting limits on how much traffic the service can handle at one time to prevent overload. During the mitigation phase, one team member is responsible for regularly updating everyone on the status of the incident, ensuring that all stakeholders are informed. Meanwhile, another team member investigates the root cause of the problem to understand what went wrong. Once the service is restored and functioning normally again, the team holds a blameless post-incident review. This is an important step where they reflect on what happened without placing blame on individuals. They analyze the incident to learn valuable lessons and convert their findings into specific tasks with deadlines. This proactive approach helps to prevent similar issues from occurring in the future, ensuring a more resilient service for users.\nContext recap: An effective incident response process is crucial for maintaining the reliability of services in cloud computing. This process consists of several important steps: detection, triage, mitigation, communication, and review. When an incident occurs, the first responders are the heroes of the situation. They act quickly to stabilize the service and reduce its impact on users.\nWhy this matters: Incident Workflow helps learners in Computer Science connect ideas from Cloud Platform Engineering to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
      ]
    },
    {
      "id": "cloud-computing-201-l04",
      "title": "Automation, IaC, and Progressive Delivery",
      "type": "video",
      "duration": 13,
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
          "content": "Infrastructure as Code, often abbreviated as IaC, is an important practice in cloud computing that allows teams to manage cloud resources in a more efficient and organized way. Instead of manually clicking through a console to set up and configure resources, teams treat these resources like pieces of code. This means they can write code that defines everything from networks and computing power to access policies and data services. By using detailed templates, teams can ensure that their cloud environments are consistent and reliable.\nOnce these templates are created, they go through a review process called pull requests. This step is crucial because it allows team members to check each other's work, ensuring that everything is accurate and meets the necessary standards before any changes are made.\nOne of the big advantages of using IaC is that it makes it much easier to audit changes. This means teams can track what changes were made, when they were made, and who made them, which is very important for maintaining security and compliance. Additionally, if something goes wrong, teams can quickly recover from disasters because they can recreate their environments reliably using the templates.\nAnother helpful feature of IaC is drift detection. This tool compares the actual state of the cloud resources with the intended state defined in the templates. If there are any differences, or 'drifts,' it alerts the team to these unmanaged changes before they can cause outages or other issues. This proactive approach helps maintain the stability and reliability of cloud environments, making IaC a vital discipline in cloud platform engineering.\nContext recap: Infrastructure as Code, often abbreviated as IaC, is an important practice in cloud computing that allows teams to manage cloud resources in a more efficient and organized way. Instead of manually clicking through a console to set up and configure resources, teams treat these resources like pieces of code. This means they can write code that defines everything from networks and computing power to access policies and data services. By using detailed templates, teams can ensure that their cloud environments are consistent and reliable.\nWhy this matters: Infrastructure as Code Discipline helps learners in Computer Science connect ideas from Cloud Platform Engineering to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "cloud-computing-201-l04-c2",
          "kind": "example",
          "title": "CI/CD Safety Rails",
          "content": "In the world of software development, having reliable continuous integration and continuous delivery (CI/CD) pipelines is crucial for ensuring that our applications run smoothly and safely. These pipelines incorporate several important safety measures to catch potential issues before they affect users. For instance, linting helps identify and fix code errors, while unit tests check individual components of the software to ensure they work as intended. Integration tests examine how different parts of the application work together, and policy checks ensure that the code meets specific standards. Additionally, signing artifacts before deployment adds a layer of security, confirming that the code is authentic and has not been tampered with.\nWhen it comes to releasing new features, it's essential that the process stops if any quality checks fail. This is especially important for high-risk systems, where even a small mistake can lead to significant problems. Runtime guardrails act as safety nets that automatically revert changes if the error rate or response time exceeds a predefined limit, helping to maintain a smooth user experience.\nMoreover, experienced teams often conduct deployment simulations and practice scenarios, known as game days. These exercises allow teams to test their rollback procedures under real-world conditions, ensuring that they can respond effectively to any issues that arise during deployment, not just in a controlled testing environment. By implementing these practices, teams can enhance the reliability and safety of their software delivery processes.\nContext recap: In the world of software development, having reliable continuous integration and continuous delivery (CI/CD) pipelines is crucial for ensuring that our applications run smoothly and safely. These pipelines incorporate several important safety measures to catch potential issues before they affect users. For instance, linting helps identify and fix code errors, while unit tests check individual components of the software to ensure they work as intended. Integration tests examine how different parts of the application work together, and policy checks ensure that the code meets specific standards.\nWhy this matters: CI/CD Safety Rails helps learners in Computer Science connect ideas from Cloud Platform Engineering to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cloud-computing-201-l04-c3",
          "kind": "concept",
          "title": "Progressive Delivery Patterns",
          "content": "Progressive delivery patterns are important strategies that help teams release new features in a careful and controlled way. One common method is called rolling deployment. This approach allows teams to gradually replace parts of a service without having to shut everything down at once. This means that users can continue to use the service while updates are being made, which helps to avoid disruptions.\nAnother method is known as blue/green deployment. In this strategy, teams maintain two separate environments: one that is currently live and one that is ready to go. Once the new environment has been tested and validated, traffic is switched over to it. This ensures that if anything goes wrong, the team can quickly revert back to the original environment without affecting users.\nCanary deployment is another technique where a new feature is first released to a small group of users. This allows the team to observe how the feature performs and gather feedback before making it available to everyone.\nLastly, feature flags are a valuable tool that allows teams to separate the process of deploying code from actually releasing it to users. This means that teams can prepare new features in the background and then activate them for specific groups of users when they are ready. This approach helps teams manage risk and improve the overall user experience.\nContext recap: Progressive delivery patterns are important strategies that help teams release new features in a careful and controlled way. One common method is called rolling deployment. This approach allows teams to gradually replace parts of a service without having to shut everything down at once. This means that users can continue to use the service while updates are being made, which helps to avoid disruptions.\nWhy this matters: Progressive Delivery Patterns helps learners in Computer Science connect ideas from Cloud Platform Engineering to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
      ]
    },
    {
      "id": "cloud-computing-201-l05",
      "title": "Capacity, Scaling, and FinOps Workshop",
      "type": "interactive",
      "duration": 15,
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
          "content": "Autoscaling is a smart technique that helps adjust the amount of resources we use based on how many users are accessing a service at any given time. However, for autoscaling to be truly effective, we need to pay attention to signals that show us what users are really experiencing, rather than just focusing on technical data that might not tell the whole story. For instance, while monitoring CPU usage is crucial for tasks that require a lot of computing power, there are other important metrics to consider. These include queue depth, which tells us how many requests are waiting to be processed, request latency, which measures how long it takes for a request to be completed, and the number of concurrent sessions, which indicates how many users are using the service at the same time. By looking at these factors, we can get a clearer picture of how our users are impacted. Rightsizing is the first step in this process, where we analyze the workloads to understand their specific needs. After that, we choose the right types of instances based on important factors such as memory usage, network speed, and storage performance patterns. This careful selection helps ensure that we provide the best possible experience for our users while optimizing our resources effectively.\nContext recap: Autoscaling is a smart technique that helps adjust the amount of resources we use based on how many users are accessing a service at any given time. However, for autoscaling to be truly effective, we need to pay attention to signals that show us what users are really experiencing, rather than just focusing on technical data that might not tell the whole story. For instance, while monitoring CPU usage is crucial for tasks that require a lot of computing power, there are other important metrics to consider. These include queue depth, which tells us how many requests are waiting to be processed, request latency, which measures how long it takes for a request to be completed, and the number of concurrent sessions, which indicates how many users are using the service at the same time."
        },
        {
          "id": "cloud-computing-201-l05-c2",
          "kind": "concept",
          "title": "FinOps Metrics That Matter",
          "content": "FinOps, which stands for financial operations, is an important practice that helps connect the choices made by engineering teams to the overall success of a business. It goes beyond simply looking at how much money is spent each month. Instead, teams focus on specific unit cost metrics that provide deeper insights into spending. For example, they might track the cost for every 1,000 API calls, the cost associated with each active user, or the expenses related to running a data pipeline. By monitoring these metrics, teams can clearly see the trade-offs involved in optimizing their systems.\nTo illustrate this, consider the scenario where a team decides to add more cache nodes to their infrastructure. While this decision might lead to higher infrastructure costs in the short term, it can also have several positive effects. For instance, it can significantly reduce the load on the database, which in turn lowers the cost per transaction. Additionally, it can improve the speed at which users receive responses, enhancing their overall experience. Understanding these relationships is crucial for making informed decisions that benefit both the technology and the business as a whole.\nContext recap: FinOps, which stands for financial operations, is an important practice that helps connect the choices made by engineering teams to the overall success of a business. It goes beyond simply looking at how much money is spent each month. Instead, teams focus on specific unit cost metrics that provide deeper insights into spending. For example, they might track the cost for every 1,000 API calls, the cost associated with each active user, or the expenses related to running a data pipeline.\nWhy this matters: FinOps Metrics That Matter helps learners in Computer Science connect ideas from Cloud Platform Engineering to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
      ]
    },
    {
      "id": "cloud-computing-201-l06",
      "title": "Checkpoint 2: Delivery and FinOps",
      "type": "quiz",
      "duration": 11,
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
      ]
    },
    {
      "id": "cloud-computing-201-l07",
      "title": "Platform Design Studio",
      "type": "interactive",
      "duration": 16,
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
          "content": "Picture yourself as the platform engineer for a dynamic learning platform that helps students from three different regions. This platform is super busy during the evenings, especially when students are doing their homework, and it can see traffic spikes that are eight times higher than usual! Right now, the system has a few challenges: it only has one main database region, which can be a single point of failure, it doesn't have the ability to trace requests, and it requires someone to manually approve updates at midnight. Your exciting challenge is to redesign this system. You need to make it strong and resilient so that it can handle the high traffic without crashing. Additionally, you should aim to make the process of releasing updates faster and safer, ensuring that everything runs smoothly. Finally, it's important to keep the financial side predictable, meaning you want to manage costs effectively while providing a great service to all the students. This is a fantastic opportunity to use your creativity and technical skills to improve the platform!\nContext recap: Picture yourself as the platform engineer for a dynamic learning platform that helps students from three different regions. This platform is super busy during the evenings, especially when students are doing their homework, and it can see traffic spikes that are eight times higher than usual! Right now, the system has a few challenges: it only has one main database region, which can be a single point of failure, it doesn't have the ability to trace requests, and it requires someone to manually approve updates at midnight. Your exciting challenge is to redesign this system."
        },
        {
          "id": "cloud-computing-201-l07-c2",
          "kind": "recap",
          "title": "Design Rubric",
          "content": "When designing a strong platform, there are several important elements you should include. First, you need to define clear service-level objectives (SLOs). These are specific goals that help you understand how well your service is performing. Next, having an error-budget policy is crucial. This policy helps you manage how many errors are acceptable before you need to make changes. Additionally, you should create a plan for observability. This means you need to know how to monitor your system effectively so you can spot issues quickly. A solid release strategy is also necessary to ensure that updates are deployed smoothly. Furthermore, you should establish triggers for scaling your resources, which means knowing when to add or reduce capacity based on demand. Lastly, it's important to set guidelines for managing costs to keep your project within budget. Sometimes, you may need to make trade-offs, and that’s okay as long as you can measure the impact. For instance, adding regional read replicas might increase your expenses, but it can significantly lower latency for users and enhance availability during failover situations, making your service more reliable overall.\nContext recap: When designing a strong platform, there are several important elements you should include. First, you need to define clear service-level objectives (SLOs). These are specific goals that help you understand how well your service is performing. Next, having an error-budget policy is crucial.\nWhy this matters: Design Rubric helps learners in Computer Science connect ideas from Cloud Platform Engineering to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
      ]
    }
  ]
};
