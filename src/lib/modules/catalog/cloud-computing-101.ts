import type { LearningModule } from "@/lib/modules/types";

export const CloudComputing101Module: LearningModule = {
  id: "cloud-computing-101",
  title: "Cloud Computing Foundations",
  description:
    "A comprehensive introduction to cloud computing covering infrastructure service models (IaaS, PaaS, SaaS), deployment strategies (public, private, hybrid), virtualization and container technologies, core cloud services including compute, storage, and networking, security best practices with IAM and zero-trust architectures, serverless and microservices patterns, and modern DevOps workflows with CI/CD pipelines and Infrastructure as Code.",
  subject: "Computer Science",
  tags: ["core", "curriculum", "interactive", "cloud", "devops"],
  minAge: 16,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Distinguish between IaaS, PaaS, and SaaS service models and select the appropriate model for a given workload",
    "Compare public, private, and hybrid cloud deployment architectures and articulate trade-offs in cost, control, and compliance",
    "Explain how hypervisors, virtual machines, and container runtimes such as Docker and Kubernetes enable resource isolation and portability",
    "Identify core cloud services—compute instances, object storage, managed databases, and VPC networking—and describe their roles in a cloud architecture",
    "Apply the shared responsibility model to classify security obligations between cloud providers and customers, including IAM policies and encryption strategies",
    "Design event-driven serverless architectures using Functions-as-a-Service and API gateways while applying 12-factor app principles",
    "Construct a CI/CD pipeline using Infrastructure as Code tools such as Terraform or CloudFormation and incorporate SRE monitoring practices"
  ],
  lessons: [
    /* ── L01 ─ Video: Cloud Computing Models ──────────────────────── */
    {
      id: "cloud-computing-101-l01",
      title: "Cloud Computing Models",
      type: "video",
      duration: 12,
      objectives: [
        "Define IaaS, PaaS, and SaaS with real-world examples",
        "Compare public, private, and hybrid cloud deployments",
        "Explain multi-tenancy and elasticity as core cloud properties"
      ],
      chunks: [
        {
          id: "cloud-computing-101-l01-c1",
          title: "Service Models: IaaS, PaaS, and SaaS",
          kind: "concept",
          content:
            "Cloud computing delivers resources over the internet through three primary service models. Infrastructure as a Service (IaaS) provides raw compute, storage, and networking—think virtual machines you configure yourself. Platform as a Service (PaaS) abstracts away the operating system and runtime, letting developers deploy code directly onto managed platforms like Azure App Service or Google App Engine. Software as a Service (SaaS) delivers fully managed applications such as Gmail or Salesforce. Each model represents a different split of responsibility: with IaaS you manage the most, with SaaS the provider manages nearly everything. Choosing the right model depends on how much control you need versus how much operational overhead you want to eliminate."
        },
        {
          id: "cloud-computing-101-l01-c2",
          title: "Deployment Models: Public, Private, and Hybrid",
          kind: "concept",
          content:
            "Public clouds like AWS, Azure, and Google Cloud share physical infrastructure among many tenants while keeping data logically isolated. This multi-tenancy drives economies of scale and lowers costs. Private clouds dedicate hardware to a single organization, offering tighter compliance and control—common in healthcare and finance. Hybrid clouds blend both: sensitive workloads stay on-premises or in a private cloud while burstable workloads scale into the public cloud. Community clouds serve organizations with shared regulatory requirements. The choice among these models involves balancing cost, latency, regulatory compliance, and data sovereignty requirements."
        },
        {
          id: "cloud-computing-101-l01-c3",
          title: "Elasticity, Scalability, and Multi-Tenancy",
          kind: "concept",
          content:
            "Elasticity is the ability to automatically increase or decrease resources in response to demand—scaling out by adding more instances during traffic spikes and scaling in during quiet periods. This differs from traditional capacity planning where you provision for peak load and waste resources the rest of the time. Multi-tenancy allows a single application instance to serve many customers while keeping their data isolated through logical partitioning. Cloud providers achieve this through resource pooling, automated orchestration, and metered billing. The pay-as-you-go model means you only pay for what you consume, converting large capital expenditures into predictable operational expenses."
        }
      ],
      flashcards: [
        { id: "cloud-computing-101-l01-f1", front: "What does IaaS provide?", back: "Raw infrastructure—virtual machines, storage volumes, and networking—that you configure and manage yourself." },
        { id: "cloud-computing-101-l01-f2", front: "How does PaaS differ from IaaS?", back: "PaaS abstracts the OS and runtime so developers deploy code directly, while IaaS requires you to manage VMs and operating systems." },
        { id: "cloud-computing-101-l01-f3", front: "What is a hybrid cloud?", back: "A deployment model that combines private infrastructure (on-premises or dedicated) with public cloud services, allowing workloads to move between them." },
        { id: "cloud-computing-101-l01-f4", front: "Define elasticity in cloud computing.", back: "The automatic scaling of resources up or down in real time to match current demand, avoiding over-provisioning." }
      ],
      learningAids: [
        { id: "cloud-computing-101-l01-a1", type: "image", title: "Service Model Stack", content: "Diagram showing IaaS, PaaS, and SaaS as layers with provider vs. customer responsibility highlighted at each level." },
        { id: "cloud-computing-101-l01-a2", type: "animation", title: "Elasticity in Action", content: "Animation showing auto-scaling adding instances during a traffic spike and removing them as demand subsides." }
      ]
    },

    /* ── L02 ─ Interactive: Virtualization and Containers ─────────── */
    {
      id: "cloud-computing-101-l02",
      title: "Virtualization and Containers",
      type: "interactive",
      duration: 14,
      objectives: [
        "Describe how hypervisors create and manage virtual machines",
        "Compare VMs and containers in terms of isolation and performance",
        "Outline Docker containerization and Kubernetes orchestration basics"
      ],
      chunks: [
        {
          id: "cloud-computing-101-l02-c1",
          title: "Hypervisors and Virtual Machines",
          kind: "concept",
          content:
            "A hypervisor is software that creates and manages virtual machines (VMs) on physical hardware. Type-1 (bare-metal) hypervisors like VMware ESXi and Microsoft Hyper-V run directly on hardware, offering near-native performance. Type-2 (hosted) hypervisors like VirtualBox run on top of a host OS, making them ideal for development and testing. Each VM includes its own full operating system, kernel, and libraries, providing strong isolation between workloads. This isolation is why cloud providers use VMs to separate tenant workloads. However, each VM consumes significant resources because it runs an entire OS, which leads to slower startup times and higher memory overhead compared to containers."
        },
        {
          id: "cloud-computing-101-l02-c2",
          title: "Containers and Docker",
          kind: "concept",
          content:
            "Containers share the host operating system's kernel and isolate applications using Linux namespaces and cgroups. Docker popularized containers by providing a simple build-ship-run workflow: you write a Dockerfile that specifies a base image, dependencies, and your application code, then build it into an immutable container image. These images are stored in registries like Docker Hub. Because containers don't include a full OS, they start in seconds, use far less memory, and can pack many more workloads onto the same host. This lightweight nature makes containers ideal for microservices, CI/CD pipelines, and development environments where fast iteration matters."
        },
        {
          id: "cloud-computing-101-l02-c3",
          title: "Kubernetes Orchestration",
          kind: "concept",
          content:
            "When you run hundreds of containers, you need orchestration. Kubernetes (K8s) automates deployment, scaling, and management of containerized workloads. Its core abstractions include Pods (the smallest deployable unit, containing one or more containers), Services (stable network endpoints that route traffic to Pods), and Deployments (declarative specifications of desired state). Kubernetes continuously reconciles actual state with desired state—if a Pod crashes, the controller restarts it automatically. It handles rolling updates, load balancing, secret management, and horizontal auto-scaling. Managed Kubernetes services like EKS, AKS, and GKE remove the burden of managing the control plane, letting teams focus on applications."
        }
      ],
      flashcards: [
        { id: "cloud-computing-101-l02-f1", front: "What is a Type-1 hypervisor?", back: "A bare-metal hypervisor that runs directly on physical hardware without a host OS, providing near-native performance for virtual machines." },
        { id: "cloud-computing-101-l02-f2", front: "Why are containers lighter than VMs?", back: "Containers share the host OS kernel and don't bundle a full operating system, resulting in faster startup, lower memory usage, and higher density." },
        { id: "cloud-computing-101-l02-f3", front: "What is a Dockerfile?", back: "A text file containing instructions to build a Docker container image, specifying the base image, dependencies, file copies, and the entry command." },
        { id: "cloud-computing-101-l02-f4", front: "What is a Kubernetes Pod?", back: "The smallest deployable unit in Kubernetes, consisting of one or more containers that share storage and network and are co-scheduled on the same node." }
      ],
      interactiveActivities: [
        {
          id: "cloud-computing-101-l02-act1",
          type: "sorting_buckets",
          title: "VMs vs. Containers",
          description: "Sort each characteristic into the correct technology bucket.",
          instructions: ["Drag each item into either the 'Virtual Machines' or 'Containers' bucket."],
          buckets: ["Virtual Machines", "Containers"],
          items: [
            { text: "Includes a full guest operating system", bucket: "Virtual Machines" },
            { text: "Shares the host OS kernel", bucket: "Containers" },
            { text: "Managed by a hypervisor", bucket: "Virtual Machines" },
            { text: "Built from a Dockerfile", bucket: "Containers" },
            { text: "Startup time in minutes", bucket: "Virtual Machines" },
            { text: "Startup time in seconds", bucket: "Containers" },
            { text: "Stronger workload isolation", bucket: "Virtual Machines" },
            { text: "Orchestrated by Kubernetes", bucket: "Containers" }
          ]
        }
      ],
      learningAids: [
        { id: "cloud-computing-101-l02-a1", type: "practice", title: "Hands-On Sorting", content: "Classify VM and container characteristics to reinforce the architectural differences between full virtualization and OS-level containerization." }
      ]
    },

    /* ── L03 ─ Quiz: Cloud Models Checkpoint ──────────────────────── */
    {
      id: "cloud-computing-101-l03",
      title: "Cloud Models Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: {
        totalQuestions: 4,
        timeLimitMinutes: 8,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1 }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "immediate",
        masteryThreshold: 0.75
      },
      questions: [
        {
          id: "cloud-computing-101-l03-q1",
          text: "A startup wants to deploy a web application without managing servers or operating systems. Which service model is the best fit?",
          skillId: "cloud-computing-101-skill-core",
          options: [
            { id: "a", text: "IaaS – they provision virtual machines and install a web server" },
            { id: "b", text: "PaaS – they deploy code to a managed platform that handles the runtime" },
            { id: "c", text: "SaaS – they subscribe to an off-the-shelf web application" },
            { id: "d", text: "On-premises – they purchase and rack physical servers" }
          ],
          correctOptionId: "b",
          explanation: "PaaS abstracts the infrastructure and runtime, letting developers deploy code without managing servers or OS patches. IaaS would require VM management, and SaaS provides ready-made applications rather than a deployment platform."
        },
        {
          id: "cloud-computing-101-l03-q2",
          text: "Which deployment model combines on-premises infrastructure with public cloud services to balance compliance and scalability?",
          skillId: "cloud-computing-101-skill-core",
          options: [
            { id: "a", text: "Public cloud" },
            { id: "b", text: "Private cloud" },
            { id: "c", text: "Hybrid cloud" },
            { id: "d", text: "Community cloud" }
          ],
          correctOptionId: "c",
          explanation: "A hybrid cloud connects private infrastructure with public cloud services, allowing sensitive workloads to remain on-premises while burstable workloads scale into the public cloud."
        },
        {
          id: "cloud-computing-101-l03-q3",
          text: "What distinguishes elasticity from traditional capacity planning?",
          skillId: "cloud-computing-101-skill-core",
          options: [
            { id: "a", text: "Elasticity provisions fixed resources for peak load permanently" },
            { id: "b", text: "Elasticity automatically adjusts resources up or down based on real-time demand" },
            { id: "c", text: "Elasticity requires manual intervention to add capacity" },
            { id: "d", text: "Elasticity only applies to storage, not compute" }
          ],
          correctOptionId: "b",
          explanation: "Elasticity automatically scales resources in response to current demand, unlike traditional planning where you provision for peak load and leave resources idle during low usage."
        },
        {
          id: "cloud-computing-101-l03-q4",
          text: "In a multi-tenant public cloud, how is customer data kept separate?",
          skillId: "cloud-computing-101-skill-core",
          options: [
            { id: "a", text: "Each customer receives dedicated physical servers" },
            { id: "b", text: "Data is separated through logical partitioning while sharing physical infrastructure" },
            { id: "c", text: "Customers share both physical and logical resources without isolation" },
            { id: "d", text: "Multi-tenancy only works in private clouds" }
          ],
          correctOptionId: "b",
          explanation: "Multi-tenancy uses logical isolation—separate databases, namespaces, or encryption keys—on shared physical hardware. Dedicated physical servers would be a single-tenant or private cloud model."
        }
      ],
      learningAids: [
        { id: "cloud-computing-101-l03-a1", type: "mnemonic", title: "Service Model Ladder", content: "Remember IaaS → PaaS → SaaS as climbing a ladder: each step up means the provider manages more and you manage less." }
      ]
    },

    /* ── L04 ─ Video: Core Cloud Services ─────────────────────────── */
    {
      id: "cloud-computing-101-l04",
      title: "Core Cloud Services",
      type: "video",
      duration: 12,
      objectives: [
        "Describe compute instances and their sizing strategies",
        "Differentiate object storage, block storage, and managed databases",
        "Explain VPC networking, subnets, and load balancers"
      ],
      chunks: [
        {
          id: "cloud-computing-101-l04-c1",
          title: "Compute Instances and Scaling",
          kind: "concept",
          content:
            "Cloud compute comes in many forms: general-purpose instances for web servers, compute-optimized for CPU-heavy tasks, memory-optimized for in-memory databases, and GPU instances for machine learning. Instances are defined by vCPU count, RAM, storage, and network bandwidth. Right-sizing means choosing the smallest instance that meets performance requirements—over-provisioning wastes money, under-provisioning causes failures. Auto-scaling groups monitor metrics like CPU utilization and automatically launch or terminate instances. Spot or preemptible instances offer steep discounts (up to 90%) for fault-tolerant workloads that can handle interruption. Reserved instances trade flexibility for lower hourly rates when you commit to one- or three-year terms."
        },
        {
          id: "cloud-computing-101-l04-c2",
          title: "Storage and Databases",
          kind: "concept",
          content:
            "Object storage (S3, Azure Blob, GCS) stores unstructured data as key-value objects with virtually unlimited capacity, ideal for backups, media, and data lakes. Block storage (EBS, Azure Managed Disks) provides low-latency volumes attached to compute instances, used for databases and file systems. Managed relational databases (RDS, Cloud SQL) handle patching, backups, and replication. NoSQL services like DynamoDB, Cosmos DB, and Firestore offer flexible schemas for high-throughput workloads. Data warehouses such as Redshift and BigQuery handle analytical queries across petabytes of data. Choosing the right storage tier depends on access patterns: hot storage for frequent access, cool for infrequent, and archive for rarely accessed compliance data."
        },
        {
          id: "cloud-computing-101-l04-c3",
          title: "Networking: VPCs, Subnets, and Load Balancers",
          kind: "concept",
          content:
            "A Virtual Private Cloud (VPC) is an isolated network within the cloud where you control IP ranges, subnets, route tables, and gateways. Public subnets have routes to the internet via an Internet Gateway, while private subnets communicate only internally or through NAT gateways. Security groups act as stateful firewalls at the instance level, while Network ACLs provide stateless rules at the subnet level. Load balancers distribute incoming traffic across multiple instances—Application Load Balancers operate at Layer 7 (HTTP), while Network Load Balancers handle Layer 4 (TCP/UDP) traffic at very high throughput. Content Delivery Networks (CDNs) cache content at edge locations to reduce latency globally."
        }
      ],
      flashcards: [
        { id: "cloud-computing-101-l04-f1", front: "What is object storage used for?", back: "Storing unstructured data like images, videos, backups, and data lake files as key-value objects with virtually unlimited scalability." },
        { id: "cloud-computing-101-l04-f2", front: "What is a VPC?", back: "A Virtual Private Cloud—an isolated, software-defined network within a cloud provider where you control IP ranges, subnets, routing, and security rules." },
        { id: "cloud-computing-101-l04-f3", front: "How do spot instances save money?", back: "They use spare cloud capacity at discounts up to 90%, but the provider can reclaim them with short notice, making them suitable only for fault-tolerant workloads." },
        { id: "cloud-computing-101-l04-f4", front: "What does an Application Load Balancer do?", back: "It distributes incoming HTTP/HTTPS traffic across multiple backend instances based on Layer 7 rules such as URL path or host header." }
      ],
      learningAids: [
        { id: "cloud-computing-101-l04-a1", type: "image", title: "VPC Architecture Diagram", content: "Diagram showing a VPC with public and private subnets, NAT gateway, Internet Gateway, load balancer, and compute instances." },
        { id: "cloud-computing-101-l04-a2", type: "animation", title: "Load Balancer Traffic Flow", content: "Animation illustrating how an ALB routes requests to healthy targets using round-robin and health checks." }
      ]
    },

    /* ── L05 ─ Interactive: Cloud Security and IAM ────────────────── */
    {
      id: "cloud-computing-101-l05",
      title: "Cloud Security and IAM",
      type: "interactive",
      duration: 14,
      objectives: [
        "Explain the shared responsibility model between provider and customer",
        "Configure IAM policies using least-privilege principles",
        "Distinguish encryption at rest versus in transit and describe zero-trust architectures"
      ],
      chunks: [
        {
          id: "cloud-computing-101-l05-c1",
          title: "The Shared Responsibility Model",
          kind: "concept",
          content:
            "Cloud security follows a shared responsibility model. The provider secures the infrastructure: physical data centers, hypervisors, network fabric, and hardware. The customer secures everything built on top: data classification, access control, OS patching (in IaaS), application code, and identity management. With PaaS the split shifts—the provider handles the OS and runtime. With SaaS, customer responsibility narrows mainly to data access and user management. Misunderstanding this boundary is the top cause of cloud breaches. Organizations must map each layer of their stack to determine who is responsible for patching, monitoring, and incident response at that layer."
        },
        {
          id: "cloud-computing-101-l05-c2",
          title: "IAM Policies and Least Privilege",
          kind: "concept",
          content:
            "Identity and Access Management (IAM) controls who can do what in your cloud environment. The principle of least privilege dictates that every user, service, or application receives only the minimum permissions required. IAM policies are JSON documents that specify allowed or denied actions on specific resources. Role-based access control (RBAC) groups permissions into roles like 'ReadOnly' or 'Admin' and assigns them to users or service accounts. Multi-factor authentication (MFA) adds a second verification layer. Service accounts let applications authenticate without human credentials. Regularly auditing permissions, rotating keys, and using short-lived tokens prevent credential sprawl and reduce attack surface."
        },
        {
          id: "cloud-computing-101-l05-c3",
          title: "Encryption and Zero Trust",
          kind: "concept",
          content:
            "Encryption at rest protects stored data using keys managed by the provider (server-side encryption) or the customer (customer-managed keys via a Key Management Service). Encryption in transit uses TLS to secure data moving between clients and servers or between services. Zero-trust architecture assumes no implicit trust regardless of network location—every request must be authenticated, authorized, and encrypted. This replaces the traditional perimeter model where internal network traffic was trusted by default. Key zero-trust practices include micro-segmentation, continuous verification, device posture checks, and logging every access decision for audit and anomaly detection."
        }
      ],
      flashcards: [
        { id: "cloud-computing-101-l05-f1", front: "What is the shared responsibility model?", back: "A framework dividing security duties: the cloud provider secures the infrastructure, and the customer secures their data, identities, applications, and configurations." },
        { id: "cloud-computing-101-l05-f2", front: "What is the principle of least privilege?", back: "Granting users and services only the minimum permissions they need to perform their tasks, reducing the blast radius of compromised credentials." },
        { id: "cloud-computing-101-l05-f3", front: "How does encryption in transit work?", back: "TLS encrypts data as it travels between clients and servers or between microservices, preventing eavesdropping and tampering on the network." },
        { id: "cloud-computing-101-l05-f4", front: "What is zero-trust architecture?", back: "A security model that requires authentication, authorization, and encryption for every request regardless of network location—never trusting implicitly." }
      ],
      interactiveActivities: [
        {
          id: "cloud-computing-101-l05-act1",
          type: "matching_pairs",
          title: "Security Concepts Match",
          description: "Match each cloud security concept with its correct definition.",
          instructions: ["Connect each term on the left with the matching description on the right."],
          pairs: [
            { left: "Shared Responsibility", right: "Provider secures infrastructure; customer secures data and access" },
            { left: "Least Privilege", right: "Grant only the minimum permissions required for a task" },
            { left: "Encryption at Rest", right: "Protecting stored data using encryption keys" },
            { left: "Zero Trust", right: "Authenticate and authorize every request regardless of network location" },
            { left: "MFA", right: "Requiring a second verification factor beyond a password" },
            { left: "Micro-segmentation", right: "Dividing the network into isolated zones to limit lateral movement" }
          ]
        }
      ],
      learningAids: [
        { id: "cloud-computing-101-l05-a1", type: "practice", title: "Security Matching Exercise", content: "Match cloud security terms with their definitions to reinforce understanding of IAM, encryption, and zero-trust principles." }
      ]
    },

    /* ── L06 ─ Quiz: Services & Security Checkpoint ───────────────── */
    {
      id: "cloud-computing-101-l06",
      title: "Services & Security Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: {
        totalQuestions: 4,
        timeLimitMinutes: 8,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1 }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "immediate",
        masteryThreshold: 0.75
      },
      questions: [
        {
          id: "cloud-computing-101-l06-q1",
          text: "Which storage type is best suited for hosting a data lake with petabytes of unstructured media files?",
          skillId: "cloud-computing-101-skill-core",
          options: [
            { id: "a", text: "Block storage attached to a single compute instance" },
            { id: "b", text: "Object storage with tiered access policies" },
            { id: "c", text: "A managed relational database" },
            { id: "d", text: "An in-memory cache like Redis" }
          ],
          correctOptionId: "b",
          explanation: "Object storage provides virtually unlimited capacity and built-in tiering (hot, cool, archive), making it ideal for large-scale unstructured data. Block storage is limited to single-instance attachment, and relational databases are designed for structured data."
        },
        {
          id: "cloud-computing-101-l06-q2",
          text: "In the shared responsibility model, who is responsible for patching the guest operating system on an IaaS virtual machine?",
          skillId: "cloud-computing-101-skill-core",
          options: [
            { id: "a", text: "The cloud provider" },
            { id: "b", text: "The customer" },
            { id: "c", text: "The hardware manufacturer" },
            { id: "d", text: "The ISP providing network connectivity" }
          ],
          correctOptionId: "b",
          explanation: "With IaaS, the provider manages the physical infrastructure and hypervisor. The customer is responsible for the guest OS, middleware, runtime, and applications—including all patching and updates."
        },
        {
          id: "cloud-computing-101-l06-q3",
          text: "Why should IAM policies follow the principle of least privilege?",
          skillId: "cloud-computing-101-skill-core",
          options: [
            { id: "a", text: "It makes policies easier to write because fewer permissions means less JSON" },
            { id: "b", text: "It reduces the blast radius if credentials are compromised by limiting what an attacker can access" },
            { id: "c", text: "It eliminates the need for multi-factor authentication" },
            { id: "d", text: "It is only required for compliance in healthcare industries" }
          ],
          correctOptionId: "b",
          explanation: "Least privilege limits the damage from compromised credentials by ensuring each identity can access only the resources it needs. It doesn't replace MFA and applies to all industries."
        },
        {
          id: "cloud-computing-101-l06-q4",
          text: "A public subnet in a VPC differs from a private subnet because the public subnet:",
          skillId: "cloud-computing-101-skill-core",
          options: [
            { id: "a", text: "Has a route to the internet through an Internet Gateway" },
            { id: "b", text: "Cannot contain any compute instances" },
            { id: "c", text: "Uses a different IP protocol than private subnets" },
            { id: "d", text: "Automatically encrypts all traffic without TLS" }
          ],
          correctOptionId: "a",
          explanation: "A public subnet has a route table entry directing 0.0.0.0/0 traffic to an Internet Gateway, giving instances with public IPs direct internet access. Private subnets route outbound traffic through a NAT gateway instead."
        }
      ],
      learningAids: [
        { id: "cloud-computing-101-l06-a1", type: "mnemonic", title: "Shared Responsibility Shortcut", content: "Think 'Provider = OF the cloud (hardware, network, hypervisor), Customer = IN the cloud (data, identity, app code, OS in IaaS).'" }
      ]
    },

    /* ── L07 ─ Video: Serverless and Microservices ────────────────── */
    {
      id: "cloud-computing-101-l07",
      title: "Serverless and Microservices",
      type: "video",
      duration: 12,
      objectives: [
        "Define Functions-as-a-Service and event-driven architecture patterns",
        "Describe how API gateways and service meshes route traffic in microservice systems",
        "Apply 12-factor app principles to cloud-native application design"
      ],
      chunks: [
        {
          id: "cloud-computing-101-l07-c1",
          title: "Functions-as-a-Service and Event-Driven Architecture",
          kind: "concept",
          content:
            "Serverless computing lets you run code without provisioning or managing servers. Functions-as-a-Service (FaaS) platforms—AWS Lambda, Azure Functions, Google Cloud Functions—execute small, single-purpose functions in response to events. Events can be HTTP requests, database changes, file uploads, or message queue entries. You pay only for the compute time consumed during execution, measured in milliseconds. Cold starts occur when a function is invoked after a period of inactivity and the platform must initialize a new execution environment. Event-driven architecture decouples producers from consumers: an upload triggers a function, which writes to a queue, which triggers another function—creating resilient, loosely coupled processing pipelines."
        },
        {
          id: "cloud-computing-101-l07-c2",
          title: "API Gateways and Service Mesh",
          kind: "concept",
          content:
            "An API gateway sits between clients and backend services, handling request routing, authentication, rate limiting, and response transformation. It provides a single entry point that simplifies client code and enforces cross-cutting concerns. In microservice architectures with dozens of services communicating internally, a service mesh like Istio or Linkerd manages service-to-service traffic. The mesh deploys sidecar proxies alongside each service to handle mutual TLS, retries, circuit breaking, and observability without changing application code. This separation of concerns lets developers focus on business logic while infrastructure handles reliability. The gateway manages north-south traffic (client to cluster) while the mesh manages east-west traffic (service to service)."
        },
        {
          id: "cloud-computing-101-l07-c3",
          title: "12-Factor App Principles",
          kind: "concept",
          content:
            "The 12-factor methodology provides guidelines for building cloud-native applications. Key factors include: store configuration in environment variables, not in code; treat backing services (databases, caches, queues) as attached resources swappable without code changes; keep build, release, and run stages strictly separate; design processes to be stateless so any instance can handle any request; export services via port binding; and maximize parity between development, staging, and production environments. Logging should be treated as event streams written to stdout and captured by the platform. Applications should start fast and shut down gracefully to support horizontal scaling and rolling deployments. Following these principles produces applications that are portable, scalable, and resilient across cloud environments."
        }
      ],
      flashcards: [
        { id: "cloud-computing-101-l07-f1", front: "What is a cold start in serverless computing?", back: "The latency incurred when a FaaS platform initializes a new execution environment after a period of inactivity, before your function code can run." },
        { id: "cloud-computing-101-l07-f2", front: "What does an API gateway do?", back: "It acts as a single entry point for clients, handling routing, authentication, rate limiting, and response transformation before forwarding requests to backend services." },
        { id: "cloud-computing-101-l07-f3", front: "What is a service mesh?", back: "An infrastructure layer (e.g., Istio, Linkerd) that manages service-to-service communication with sidecar proxies, providing mTLS, retries, circuit breaking, and observability." },
        { id: "cloud-computing-101-l07-f4", front: "Name three 12-factor app principles.", back: "Store config in environment variables, treat backing services as attached resources, design stateless processes. (Others: port binding, dev/prod parity, logs as event streams.)" }
      ],
      learningAids: [
        { id: "cloud-computing-101-l07-a1", type: "image", title: "Event-Driven Pipeline", content: "Diagram showing an event source triggering a Lambda function, which publishes to an SQS queue, consumed by another function writing to a database." },
        { id: "cloud-computing-101-l07-a2", type: "animation", title: "Service Mesh Sidecar", content: "Animation showing sidecar proxies intercepting traffic between microservices to apply mTLS, retries, and circuit breaking transparently." }
      ]
    },

    /* ── L08 ─ Interactive: DevOps and CI/CD ──────────────────────── */
    {
      id: "cloud-computing-101-l08",
      title: "DevOps and CI/CD",
      type: "interactive",
      duration: 14,
      objectives: [
        "Outline continuous integration and continuous deployment pipeline stages",
        "Compare Infrastructure as Code tools like Terraform and CloudFormation",
        "Describe SRE monitoring practices including SLOs, SLIs, and error budgets"
      ],
      chunks: [
        {
          id: "cloud-computing-101-l08-c1",
          title: "Continuous Integration and Continuous Deployment",
          kind: "concept",
          content:
            "Continuous Integration (CI) is the practice of merging code changes into a shared repository frequently—often multiple times per day—with each merge triggering automated builds and tests. This catches integration bugs early instead of during a painful merge at release time. Continuous Deployment (CD) extends this by automatically deploying every change that passes the test suite to production. Continuous Delivery is similar but requires a manual approval gate before production. A typical pipeline includes stages: code commit, build, unit tests, integration tests, security scanning, staging deployment, acceptance tests, and production deployment. Tools like GitHub Actions, GitLab CI, Jenkins, and CircleCI orchestrate these stages. Feature flags allow you to deploy code without exposing it to all users immediately."
        },
        {
          id: "cloud-computing-101-l08-c2",
          title: "Infrastructure as Code",
          kind: "concept",
          content:
            "Infrastructure as Code (IaC) manages cloud resources through declarative configuration files instead of manual console clicks. Terraform by HashiCorp uses HCL syntax and supports multiple cloud providers, maintaining a state file that tracks what resources exist. AWS CloudFormation and Azure Bicep are provider-specific alternatives. IaC enables version control of infrastructure, code review for changes, and repeatable deployments across environments. A typical workflow: write resource definitions, run a plan/preview to see what will change, apply the changes, then commit the config to Git. Drift detection identifies when actual infrastructure diverges from the declared state. Modules and reusable templates enforce organizational standards across teams."
        },
        {
          id: "cloud-computing-101-l08-c3",
          title: "SRE, Monitoring, and Observability",
          kind: "concept",
          content:
            "Site Reliability Engineering (SRE) applies software engineering principles to operations. Key concepts include Service Level Indicators (SLIs)—measurable metrics like latency or error rate—and Service Level Objectives (SLOs)—target thresholds for those metrics, like '99.9% of requests complete under 200ms.' The error budget is the allowed amount of unreliability: if your SLO is 99.9%, you have a 0.1% error budget. When the budget is exhausted, the team prioritizes reliability over features. Observability rests on three pillars: metrics (numerical time-series data), logs (structured event records), and traces (request paths through distributed services). Tools like Prometheus, Grafana, Datadog, and OpenTelemetry form the monitoring stack."
        }
      ],
      flashcards: [
        { id: "cloud-computing-101-l08-f1", front: "What is Continuous Integration?", back: "The practice of frequently merging code into a shared repository where each merge triggers automated builds and tests to catch integration issues early." },
        { id: "cloud-computing-101-l08-f2", front: "What does Terraform do?", back: "It manages cloud infrastructure through declarative HCL configuration files, supporting multiple providers and tracking resource state to enable repeatable, version-controlled deployments." },
        { id: "cloud-computing-101-l08-f3", front: "What is an error budget in SRE?", back: "The allowed amount of unreliability defined by the gap between 100% and the SLO target—e.g., a 99.9% SLO allows 0.1% downtime. When exhausted, reliability work takes priority." },
        { id: "cloud-computing-101-l08-f4", front: "Name the three pillars of observability.", back: "Metrics (time-series numerical data), Logs (structured event records), and Traces (request paths through distributed services)." }
      ],
      interactiveActivities: [
        {
          id: "cloud-computing-101-l08-act1",
          type: "sorting_buckets",
          title: "CI/CD Pipeline Stages",
          description: "Sort each activity into the correct pipeline phase.",
          instructions: ["Drag each activity into the 'Continuous Integration' or 'Continuous Deployment' bucket."],
          buckets: ["Continuous Integration", "Continuous Deployment"],
          items: [
            { text: "Running unit tests on every commit", bucket: "Continuous Integration" },
            { text: "Automatically deploying to production after tests pass", bucket: "Continuous Deployment" },
            { text: "Building the application from source code", bucket: "Continuous Integration" },
            { text: "Blue-green deployment to swap production traffic", bucket: "Continuous Deployment" },
            { text: "Static code analysis and linting", bucket: "Continuous Integration" },
            { text: "Canary release to 5% of users", bucket: "Continuous Deployment" },
            { text: "Merging feature branches into main", bucket: "Continuous Integration" },
            { text: "Rolling back a failed release automatically", bucket: "Continuous Deployment" }
          ]
        }
      ],
      learningAids: [
        { id: "cloud-computing-101-l08-a1", type: "practice", title: "Pipeline Sorting", content: "Classify DevOps activities into CI or CD phases to reinforce understanding of automation stages in the software delivery lifecycle." }
      ]
    },

    /* ── L09 ─ Quiz: Serverless & DevOps Checkpoint ───────────────── */
    {
      id: "cloud-computing-101-l09",
      title: "Serverless & DevOps Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: {
        totalQuestions: 4,
        timeLimitMinutes: 8,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1 }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "immediate",
        masteryThreshold: 0.75
      },
      questions: [
        {
          id: "cloud-computing-101-l09-q1",
          text: "What triggers a serverless function in a Functions-as-a-Service platform?",
          skillId: "cloud-computing-101-skill-core",
          options: [
            { id: "a", text: "A continuously running daemon process polling for work" },
            { id: "b", text: "An event such as an HTTP request, file upload, or queue message" },
            { id: "c", text: "A scheduled VM reboot" },
            { id: "d", text: "Manual SSH login to the function host" }
          ],
          correctOptionId: "b",
          explanation: "FaaS functions are event-driven: they execute in response to specific events like HTTP requests, file uploads to object storage, database change streams, or messages arriving on a queue."
        },
        {
          id: "cloud-computing-101-l09-q2",
          text: "How does a service mesh differ from an API gateway?",
          skillId: "cloud-computing-101-skill-core",
          options: [
            { id: "a", text: "A service mesh handles east-west (service-to-service) traffic; an API gateway handles north-south (client-to-cluster) traffic" },
            { id: "b", text: "They are identical tools with different names" },
            { id: "c", text: "An API gateway manages internal service communication; a service mesh handles external clients" },
            { id: "d", text: "A service mesh replaces the need for any networking" }
          ],
          correctOptionId: "a",
          explanation: "The API gateway manages external client traffic entering the cluster (north-south), while the service mesh manages internal communication between microservices (east-west) using sidecar proxies."
        },
        {
          id: "cloud-computing-101-l09-q3",
          text: "What is the primary benefit of Infrastructure as Code over manual provisioning?",
          skillId: "cloud-computing-101-skill-core",
          options: [
            { id: "a", text: "It eliminates the need for cloud providers" },
            { id: "b", text: "It enables version-controlled, repeatable, and reviewable infrastructure changes" },
            { id: "c", text: "It runs faster than any cloud API" },
            { id: "d", text: "It only works with private clouds" }
          ],
          correctOptionId: "b",
          explanation: "IaC stores infrastructure definitions in files that can be version-controlled with Git, reviewed in pull requests, and applied consistently across environments, eliminating configuration drift from manual changes."
        },
        {
          id: "cloud-computing-101-l09-q4",
          text: "An SRE team has an SLO of 99.95% availability. Their service was 99.90% available last month. What should they prioritize?",
          skillId: "cloud-computing-101-skill-core",
          options: [
            { id: "a", text: "Ship new features as quickly as possible to recover revenue" },
            { id: "b", text: "Reliability work, because the error budget is exhausted" },
            { id: "c", text: "Reduce monitoring to lower costs" },
            { id: "d", text: "Increase the SLO to 99.99% to compensate" }
          ],
          correctOptionId: "b",
          explanation: "At 99.90% availability against a 99.95% SLO, the error budget is exhausted (they exceeded allowed downtime). SRE practice dictates halting feature work and prioritizing reliability improvements until the budget is restored."
        }
      ],
      learningAids: [
        { id: "cloud-computing-101-l09-a1", type: "mnemonic", title: "SRE Budget Rule", content: "Error budget = 100% − SLO. When the budget hits zero, reliability trumps features. Think of it as a 'reliability savings account' that depletes with each incident." }
      ]
    },

    /* ── L10 ─ Quiz: Mastery Quiz ─────────────────────────────────── */
    {
      id: "cloud-computing-101-l10",
      title: "Mastery Quiz: Cloud Computing",
      type: "quiz",
      duration: 10,
      quizBlueprint: {
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 2 }],
        difficultyDistribution: { easy: 0, medium: 2, hard: 2 },
        feedbackMode: "immediate",
        masteryThreshold: 0.75
      },
      questions: [
        {
          id: "cloud-computing-101-l10-q1",
          text: "A company needs to run a legacy Windows application with specific kernel drivers that cannot be containerized. The application has predictable traffic, and the team wants the lowest possible cost. Which cloud strategy is most appropriate?",
          skillId: "cloud-computing-101-skill-core",
          options: [
            { id: "a", text: "Deploy on serverless FaaS to minimize idle cost" },
            { id: "b", text: "Use reserved IaaS instances running the application on VMs with a dedicated hypervisor" },
            { id: "c", text: "Package it as a Docker container on Kubernetes" },
            { id: "d", text: "Use a PaaS web app with automatic OS updates" }
          ],
          correctOptionId: "b",
          explanation: "The application requires kernel-level access (ruling out containers and PaaS), and predictable traffic makes reserved instances the most cost-effective option. FaaS cannot support long-running processes with kernel driver dependencies."
        },
        {
          id: "cloud-computing-101-l10-q2",
          text: "An architect is designing a microservices system where Service A calls Service B and Service C. Service B sometimes fails under load. Which combination of patterns best improves resilience?",
          skillId: "cloud-computing-101-skill-core",
          options: [
            { id: "a", text: "Circuit breaker on calls to Service B, retry with exponential backoff, and a service mesh for observability" },
            { id: "b", text: "Increase Service B's instance size and remove all timeouts" },
            { id: "c", text: "Deploy Service B to a private cloud and Service C to a public cloud" },
            { id: "d", text: "Merge Services A, B, and C into a single monolith to eliminate network calls" }
          ],
          correctOptionId: "a",
          explanation: "Circuit breakers prevent cascade failures by short-circuiting calls to a failing service. Retries with exponential backoff handle transient errors gracefully. A service mesh adds observability (traces, metrics) to diagnose issues. Simply scaling up doesn't address the failure pattern."
        },
        {
          id: "cloud-computing-101-l10-q3",
          text: "A team stores Terraform state in a shared S3 bucket. Developer A and Developer B both run 'terraform apply' simultaneously against the same state. What problem can occur, and how is it prevented?",
          skillId: "cloud-computing-101-skill-core",
          options: [
            { id: "a", text: "State corruption from concurrent writes; prevented by enabling state locking with DynamoDB" },
            { id: "b", text: "No issue; Terraform handles concurrent writes automatically" },
            { id: "c", text: "The second apply will silently overwrite the first; prevented by using local state files instead" },
            { id: "d", text: "S3 will reject the second write; no additional mechanism is needed" }
          ],
          correctOptionId: "a",
          explanation: "Concurrent Terraform applies can corrupt the shared state file. State locking (typically via a DynamoDB table in AWS) ensures only one operation modifies state at a time. Local state files would lose the collaboration benefit."
        },
        {
          id: "cloud-computing-101-l10-q4",
          text: "Under zero-trust architecture, a request originates from inside the corporate network and targets an internal API. Which statement is correct?",
          skillId: "cloud-computing-101-skill-core",
          options: [
            { id: "a", text: "The request is trusted automatically because it comes from inside the network perimeter" },
            { id: "b", text: "The request must still be authenticated, authorized, and encrypted regardless of its origin" },
            { id: "c", text: "Zero trust only applies to external traffic; internal traffic is exempt" },
            { id: "d", text: "The request is blocked entirely because zero trust prohibits internal communication" }
          ],
          correctOptionId: "b",
          explanation: "Zero trust eliminates implicit trust based on network location. Every request—internal or external—must be authenticated (identity verified), authorized (permissions checked), and encrypted (TLS), with the access decision logged for auditing."
        }
      ],
      learningAids: [
        { id: "cloud-computing-101-l10-a1", type: "mnemonic", title: "Cloud Mastery Pillars", content: "Remember the four pillars: Models (IaaS/PaaS/SaaS), Infrastructure (compute/storage/network), Security (IAM/encryption/zero-trust), and Operations (CI/CD/IaC/SRE)." }
      ]
    }
  ]
};
