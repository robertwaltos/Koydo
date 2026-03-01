import type { LearningModule } from "@/lib/modules/types";

export const ProjectManagement101Module: LearningModule = {
  id: "project-management-101",
  title: "Project Management Fundamentals",
  description:
    "Learn to plan, execute, and deliver projects on time and on budget. Master the project lifecycle, scope management, scheduling with Gantt charts and critical-path analysis, risk mitigation, earned-value tracking, and the differences between Agile and Waterfall methodologies.",
  subject: "Project Management",
  tags: ["curriculum", "interactive", "business", "leadership", "agile", "pmbok"],
  minAge: 14,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Define what a project is and distinguish it from ongoing operations",
    "Describe the five process groups and ten PMBOK knowledge areas",
    "Create a scope statement, work breakdown structure, and change-control process",
    "Build a project schedule using Gantt charts, the critical-path method, and PERT estimates",
    "Plan resources, estimate costs, and measure performance with earned-value management",
    "Identify, assess, and respond to project risks using a risk register",
    "Compare Agile (Scrum, Kanban) and Waterfall approaches and select the right methodology"
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  What Is Project Management? The PM Life Cycle  (video)
    ────────────────────────────────────────────── */
    {
      id: "project-management-101-l01",
      title: "What Is Project Management? The PM Life Cycle",
      type: "video",
      duration: 12,
      objectives: [
        "Distinguish a project from ongoing operations using PMI's definition",
        "Explain the triple constraint and how scope, time, and cost interact",
        "Outline the five process groups of the project lifecycle"
      ],
      chunks: [
        {
          id: "project-management-101-l01-c1",
          title: "Projects vs. Operations",
          content:
            "The Project Management Institute (PMI) defines a project as a temporary endeavor undertaken to create a unique product, service, or result. 'Temporary' means every project has a definite beginning and end; 'unique' means the deliverable has never been produced in exactly this way before. By contrast, operations are ongoing, repetitive activities that sustain the business — processing payroll, answering support tickets, or restocking inventory. Building a new e-commerce website is a project; maintaining that website daily is operations. Recognizing the difference matters because projects require dedicated planning, whereas operations rely on standardized procedures."
        },
        {
          id: "project-management-101-l01-c2",
          title: "The Triple Constraint (Iron Triangle)",
          content:
            "Every project is governed by three interdependent constraints: Scope (what work will be done and what deliverables produced), Time (the schedule and deadlines), and Cost (the budget and resources consumed). These form the 'Iron Triangle' — change one side and at least one other must adjust. Add features (scope increase) without extending the deadline, and costs rise (overtime, more staff). Cut the budget without reducing scope, and the timeline stretches. A fourth dimension, Quality, sits at the center: it is the result of balancing the three constraints. The project manager's core job is negotiating trade-offs among scope, time, and cost while protecting quality."
        },
        {
          id: "project-management-101-l01-c3",
          title: "The Five Process Groups",
          content:
            "PMI organizes project work into five process groups that may overlap but follow a general order: (1) Initiating — define the project at a high level, secure authorization via the project charter, and identify stakeholders. (2) Planning — build the roadmap: scope statement, WBS, schedule, budget, risk register, and communication plan. (3) Executing — the team performs the planned work and produces deliverables. (4) Monitoring & Controlling — track progress against the plan, manage changes through change control, and ensure quality. (5) Closing — hand over the final product, document lessons learned, release resources, and celebrate. Planning and monitoring consume the most PM effort across the lifecycle."
        }
      ],
      flashcards: [
        { id: "project-management-101-l01-f1", front: "Project (PMI definition)", back: "A temporary endeavor undertaken to create a unique product, service, or result" },
        { id: "project-management-101-l01-f2", front: "Triple Constraint (Iron Triangle)", back: "Scope, Time, and Cost — change one side and at least one other must adjust; Quality sits at the center" },
        { id: "project-management-101-l01-f3", front: "Five process groups in order", back: "Initiating → Planning → Executing → Monitoring & Controlling → Closing" },
        { id: "project-management-101-l01-f4", front: "Project Charter", back: "The document that formally authorizes the project, names the PM, states objectives, and estimates budget" }
      ]
    },

    /* ──────────────────────────────────────────────
       L02  Scope Definition & Work Breakdown Structure  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "project-management-101-l02",
      title: "Scope Definition & Work Breakdown Structure",
      type: "interactive",
      duration: 14,
      objectives: [
        "Write a scope statement with deliverables, exclusions, constraints, and acceptance criteria",
        "Decompose project work into a hierarchical Work Breakdown Structure (WBS)",
        "Identify scope creep and apply a formal change-control process"
      ],
      chunks: [
        {
          id: "project-management-101-l02-c1",
          title: "Defining Scope",
          content:
            "The scope statement is the contract between the project team and stakeholders — it defines what the project WILL and WILL NOT deliver. A solid scope statement includes: deliverables (tangible outputs such as 'ten-page responsive website'), acceptance criteria (measurable conditions that verify quality, e.g., 'loads in under 2 seconds on 4G'), exclusions (work explicitly outside the project — 'no e-commerce or blog features'), constraints (budget ceiling, regulatory deadlines), and assumptions (conditions taken as true, e.g., 'client will provide logo files by week 2'). The scope statement feeds directly into the Work Breakdown Structure."
        },
        {
          id: "project-management-101-l02-c2",
          title: "Building a Work Breakdown Structure",
          content:
            "A Work Breakdown Structure (WBS) decomposes the total project scope into progressively smaller, manageable pieces. The top level is the project itself; the second level shows major deliverables or phases; each subsequent level breaks work down further until you reach 'work packages' — the smallest units that can be estimated and assigned. A website project WBS might look like: Level 1 — Website Redesign; Level 2 — Design, Development, Testing, Launch; Level 3 under Design — Wireframes, Mockups, Style Guide. The 100 % rule requires that each level captures all work in the parent — nothing more, nothing less. Tools like Microsoft Project, Jira, and Monday.com generate WBS diagrams automatically."
        },
        {
          id: "project-management-101-l02-c3",
          title: "Scope Creep & Change Control",
          content:
            "Scope creep is the uncontrolled expansion of project scope without corresponding adjustments to time, cost, or resources. It often starts innocuously — a stakeholder asks for 'just one small tweak' — and compounds into major overruns. Prevention requires a formal change-control process: (1) Document every change request in writing. (2) Analyze the impact on schedule, budget, quality, and risk. (3) Present options to the Change Control Board (CCB) or project sponsor. (4) If approved, update the project plan, budget, and schedule. (5) Communicate changes to all stakeholders. Saying 'yes' to a new feature without this process is saying 'no' to the original deadline."
        }
      ],
      interactiveActivities: [
        {
          id: "project-management-101-l02-a1",
          title: "In Scope or Out of Scope?",
          type: "sorting_buckets",
          buckets: ["In Scope", "Out of Scope"],
          items: [
            { text: "Design ten responsive web pages", bucket: "In Scope" },
            { text: "Build a native mobile app", bucket: "Out of Scope" },
            { text: "Write SEO meta tags for each page", bucket: "In Scope" },
            { text: "Redesign the company logo", bucket: "Out of Scope" },
            { text: "User-acceptance testing with the client", bucket: "In Scope" },
            { text: "Ongoing monthly content updates after launch", bucket: "Out of Scope" }
          ]
        }
      ],
      flashcards: [
        { id: "project-management-101-l02-f1", front: "Scope statement", back: "Document defining deliverables, exclusions, constraints, assumptions, and acceptance criteria for the project" },
        { id: "project-management-101-l02-f2", front: "Work Breakdown Structure (WBS)", back: "Hierarchical decomposition of total project scope into work packages — follows the 100 % rule so nothing is missed or duplicated" },
        { id: "project-management-101-l02-f3", front: "Scope creep", back: "Uncontrolled expansion of project scope without adjusting time, cost, or resources — the #1 project killer" },
        { id: "project-management-101-l02-f4", front: "Change Control Board (CCB)", back: "A group authorized to review, approve, or reject change requests and ensure impacts are evaluated before implementation" }
      ]
    },

    /* ──────────────────────────────────────────────
       L03  Scope & Planning Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "project-management-101-l03",
      title: "Scope & Planning Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Demonstrate understanding of projects, the triple constraint, scope management, and the WBS"],
      questions: [
        {
          id: "project-management-101-l03-q1",
          text: "Which of the following is a project rather than ongoing operations?",
          skillId: "project-management-101-skill-core",
          options: [
            { id: "a", text: "Launching a new product line" },
            { id: "b", text: "Processing weekly payroll" },
            { id: "c", text: "Restocking warehouse inventory" },
            { id: "d", text: "Responding to daily customer emails" }
          ],
          correctOptionId: "a",
          explanation: "A product launch is temporary with a unique deliverable — that's a project. The other options are repetitive operations."
        },
        {
          id: "project-management-101-l03-q2",
          text: "In the triple constraint, adding scope without extending the deadline will most likely:",
          skillId: "project-management-101-skill-core",
          options: [
            { id: "a", text: "Decrease cost" },
            { id: "b", text: "Increase cost or reduce quality" },
            { id: "c", text: "Have no effect on the project" },
            { id: "d", text: "Eliminate risk" }
          ],
          correctOptionId: "b",
          explanation: "The Iron Triangle means changing one constraint forces trade-offs in the others — more scope in the same time costs more or cuts quality."
        },
        {
          id: "project-management-101-l03-q3",
          text: "The 100 % rule in a WBS means:",
          skillId: "project-management-101-skill-core",
          options: [
            { id: "a", text: "Every level must capture all the work of its parent — no more, no less" },
            { id: "b", text: "The project must be 100 % complete before any testing" },
            { id: "c", text: "100 % of the budget must be spent" },
            { id: "d", text: "All team members must work 100 % of the time" }
          ],
          correctOptionId: "a",
          explanation: "The 100 % rule ensures the WBS accounts for all deliverable work without gaps or overlap."
        },
        {
          id: "project-management-101-l03-q4",
          text: "The first step in a formal change-control process is:",
          skillId: "project-management-101-skill-core",
          options: [
            { id: "a", text: "Immediately implement the requested change" },
            { id: "b", text: "Document the change request in writing" },
            { id: "c", text: "Cancel the project" },
            { id: "d", text: "Extend the deadline automatically" }
          ],
          correctOptionId: "b",
          explanation: "Every change must first be documented so its impact on schedule, budget, and quality can be formally evaluated."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      }
    },

    /* ──────────────────────────────────────────────
       L04  Scheduling — Gantt Charts & Critical Path Method  (video)
    ────────────────────────────────────────────── */
    {
      id: "project-management-101-l04",
      title: "Scheduling: Gantt Charts and the Critical Path Method",
      type: "video",
      duration: 13,
      objectives: [
        "Construct a Gantt chart from a WBS with task dependencies",
        "Calculate the critical path and identify tasks with float",
        "Apply three-point (PERT) estimation to derive expected durations"
      ],
      chunks: [
        {
          id: "project-management-101-l04-c1",
          title: "From WBS to Schedule",
          content:
            "Scheduling transforms the WBS into a time-bound plan. For each work package, estimate three things: duration (how long?), resources (who does it?), and dependencies (what must finish first?). PMI defines four dependency types: Finish-to-Start (FS) — Task A must finish before Task B starts (most common, e.g., pour foundation before framing walls); Start-to-Start (SS) — A and B begin simultaneously; Finish-to-Finish (FF) — A and B end together; Start-to-Finish (SF) — rare, used mainly in just-in-time manufacturing. Identifying dependencies correctly prevents scheduling conflicts and reveals the project's critical path."
        },
        {
          id: "project-management-101-l04-c2",
          title: "Gantt Charts and the Critical Path",
          content:
            "A Gantt chart plots tasks as horizontal bars on a timeline, with arrows showing dependencies. It provides an instant visual of what happens when and in what order. The Critical Path Method (CPM) identifies the longest sequence of dependent tasks through the network — this determines the minimum project duration. Any delay on a critical-path task delays the entire project. Tasks NOT on the critical path have 'total float' (or slack) — extra time before they affect the end date. Example: if a five-day task has three days of float, it can slip three days without moving the deadline. Tools like Microsoft Project, Primavera P6, and Jira with timeline views calculate the critical path automatically."
        },
        {
          id: "project-management-101-l04-c3",
          title: "PERT Estimation and Milestones",
          content:
            "Accurate estimates are notoriously difficult. The Program Evaluation and Review Technique (PERT) uses three estimates per task: Optimistic (O — best case), Most Likely (ML), and Pessimistic (P — worst case). The expected duration E = (O + 4×ML + P) ÷ 6, which produces a weighted average biased toward the most likely outcome. Example: O = 3 days, ML = 5 days, P = 13 days → E = (3 + 20 + 13) ÷ 6 = 6 days. Milestones are zero-duration markers on the Gantt chart representing significant checkpoints — 'Design Approved,' 'Beta Launch,' 'Go-Live.' They give stakeholders clear progress indicators without cluttering the schedule with task details."
        }
      ],
      flashcards: [
        { id: "project-management-101-l04-f1", front: "Gantt chart", back: "A bar chart plotting tasks on a timeline with dependency arrows — the most popular project-schedule visualization" },
        { id: "project-management-101-l04-f2", front: "Critical Path Method (CPM)", back: "Technique that identifies the longest chain of dependent tasks, determining the minimum project duration — zero float on critical tasks" },
        { id: "project-management-101-l04-f3", front: "PERT formula", back: "Expected duration = (Optimistic + 4 × Most Likely + Pessimistic) ÷ 6 — a weighted three-point estimate" },
        { id: "project-management-101-l04-f4", front: "Float (slack)", back: "The amount of time a non-critical task can be delayed without affecting the project end date — critical-path tasks have zero float" }
      ]
    },

    /* ──────────────────────────────────────────────
       L05  Resource Planning & Budgeting  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "project-management-101-l05",
      title: "Resource Planning and Budgeting",
      type: "interactive",
      duration: 14,
      objectives: [
        "Create a resource plan assigning people, equipment, and materials to work packages",
        "Estimate project costs using analogous, parametric, and bottom-up techniques",
        "Measure project health with Earned Value Management (EVM) metrics"
      ],
      chunks: [
        {
          id: "project-management-101-l05-c1",
          title: "Resource Planning",
          content:
            "Resource planning answers: Who and what do we need, when, and for how long? Resources include people (developers, designers, analysts), equipment (servers, testing devices), and materials (licenses, supplies). A Responsibility Assignment Matrix (RAM), often formatted as a RACI chart, clarifies roles: Responsible (does the work), Accountable (owns the outcome — only one person), Consulted (provides input), and Informed (kept in the loop). Over-allocation — assigning one person to too many concurrent tasks — is a common pitfall. Resource leveling smooths workloads by shifting non-critical tasks within their float so no one is overloaded."
        },
        {
          id: "project-management-101-l05-c2",
          title: "Cost Estimation Techniques",
          content:
            "Three primary techniques: (1) Analogous estimation — use the actual cost of a similar past project as a baseline; fast but less accurate. (2) Parametric estimation — apply a statistical relationship: if one web page costs $2,000, ten pages ≈ $20,000. (3) Bottom-up estimation — estimate each work package individually and sum them; the most accurate but most time-consuming. Estimates should include contingency reserves (for known risks) and management reserves (for unknown unknowns). The cost baseline is the approved, time-phased budget against which actual spending is tracked — it does NOT include management reserves."
        },
        {
          id: "project-management-101-l05-c3",
          title: "Earned Value Management (EVM)",
          content:
            "EVM integrates scope, schedule, and cost into three key metrics measured at any point during execution: Planned Value (PV) — the budgeted cost of work scheduled to be done by now. Earned Value (EV) — the budgeted cost of work actually completed. Actual Cost (AC) — the real money spent. From these: Schedule Variance (SV) = EV − PV (negative = behind schedule). Cost Variance (CV) = EV − AC (negative = over budget). Cost Performance Index (CPI) = EV ÷ AC (below 1.0 = over budget). Schedule Performance Index (SPI) = EV ÷ PV (below 1.0 = behind schedule). EVM gives an objective, quantitative health check long before subjective status reports reveal trouble."
        }
      ],
      interactiveActivities: [
        {
          id: "project-management-101-l05-a1",
          title: "RACI Assignment",
          type: "matching_pairs",
          pairs: [
            { left: "Responsible (R)", right: "Person who does the work" },
            { left: "Accountable (A)", right: "Person who owns the outcome — only one per task" },
            { left: "Consulted (C)", right: "Subject-matter expert who provides input" },
            { left: "Informed (I)", right: "Stakeholder kept in the loop on progress" }
          ]
        }
      ],
      flashcards: [
        { id: "project-management-101-l05-f1", front: "RACI chart", back: "Responsibility Assignment Matrix — Responsible (does work), Accountable (owns outcome), Consulted (gives input), Informed (kept updated)" },
        { id: "project-management-101-l05-f2", front: "Bottom-up estimation", back: "Estimate each work package individually and sum for total cost — most accurate but most time-consuming technique" },
        { id: "project-management-101-l05-f3", front: "Earned Value (EV)", back: "The budgeted cost of work actually completed — compared against PV and AC to assess schedule and cost performance" },
        { id: "project-management-101-l05-f4", front: "Cost Performance Index (CPI)", back: "EV ÷ AC — a CPI below 1.0 means the project is over budget; above 1.0 means under budget" }
      ]
    },

    /* ──────────────────────────────────────────────
       L06  Scheduling & Budgeting Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "project-management-101-l06",
      title: "Scheduling & Budgeting Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Demonstrate knowledge of scheduling, estimation, and earned-value analysis"],
      questions: [
        {
          id: "project-management-101-l06-q1",
          text: "If a critical-path task is delayed by 5 days, the project end date will:",
          skillId: "project-management-101-skill-core",
          options: [
            { id: "a", text: "Not change — critical tasks have float" },
            { id: "b", text: "Be delayed by at least 5 days" },
            { id: "c", text: "Move earlier by 5 days" },
            { id: "d", text: "Remain the same because milestones absorb delays" }
          ],
          correctOptionId: "b",
          explanation: "Critical-path tasks have zero float — any delay directly extends the project end date by the same amount."
        },
        {
          id: "project-management-101-l06-q2",
          text: "Using PERT: Optimistic = 4 days, Most Likely = 6 days, Pessimistic = 14 days. The expected duration is:",
          skillId: "project-management-101-skill-core",
          options: [
            { id: "a", text: "7 days" },
            { id: "b", text: "6 days" },
            { id: "c", text: "8 days" },
            { id: "d", text: "14 days" }
          ],
          correctOptionId: "a",
          explanation: "E = (4 + 4×6 + 14) ÷ 6 = (4 + 24 + 14) ÷ 6 = 42 ÷ 6 = 7 days."
        },
        {
          id: "project-management-101-l06-q3",
          text: "A project has EV = $80,000 and AC = $100,000. The Cost Performance Index (CPI) is:",
          skillId: "project-management-101-skill-core",
          options: [
            { id: "a", text: "0.80 — the project is over budget" },
            { id: "b", text: "1.25 — the project is under budget" },
            { id: "c", text: "1.00 — the project is on budget" },
            { id: "d", text: "0.50 — the project should be cancelled" }
          ],
          correctOptionId: "a",
          explanation: "CPI = EV ÷ AC = $80k ÷ $100k = 0.80. Below 1.0 means spending more than the value of work completed — over budget."
        },
        {
          id: "project-management-101-l06-q4",
          text: "In a RACI chart, only one person per task should be:",
          skillId: "project-management-101-skill-core",
          options: [
            { id: "a", text: "Informed" },
            { id: "b", text: "Consulted" },
            { id: "c", text: "Accountable" },
            { id: "d", text: "Responsible" }
          ],
          correctOptionId: "c",
          explanation: "Exactly one person is Accountable per task — they own the outcome. Multiple people can be Responsible, Consulted, or Informed."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, apply: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L07  Risk Management & Stakeholder Communication  (video)
    ────────────────────────────────────────────── */
    {
      id: "project-management-101-l07",
      title: "Risk Management and Stakeholder Communication",
      type: "video",
      duration: 13,
      objectives: [
        "Build a risk register with probability, impact, and response strategies",
        "Calculate Expected Monetary Value (EMV) to prioritize risks",
        "Design a stakeholder communication plan using a power/interest grid"
      ],
      chunks: [
        {
          id: "project-management-101-l07-c1",
          title: "Identifying and Assessing Risks",
          content:
            "A risk is an uncertain event or condition that, if it occurs, has a positive or negative effect on at least one project objective. Risks are identified through brainstorming, expert interviews, SWOT analysis, and historical checklists. Each risk is recorded in the Risk Register with its description, category, probability (High/Medium/Low or numeric 0–1), impact (H/M/L or dollar value), and a risk score = Probability × Impact. A Probability-Impact Matrix visualizes priorities: high-probability, high-impact risks sit in the red zone and demand immediate action. Expected Monetary Value (EMV) = probability × dollar impact — e.g., a 30 % chance of a $50,000 loss = $15,000 EMV, useful for comparing risks and sizing contingency reserves."
        },
        {
          id: "project-management-101-l07-c2",
          title: "Risk Response Strategies",
          content:
            "For threats (negative risks): Avoid — eliminate the risk by changing the plan (e.g., use proven technology instead of experimental). Mitigate — reduce the probability or impact (e.g., add automated tests to catch defects earlier). Transfer — shift the impact to a third party via insurance, warranties, or fixed-price contracts. Accept — acknowledge the risk and create a contingency plan (Plan B). For opportunities (positive risks): Exploit — ensure the opportunity happens. Enhance — increase its probability or impact. Share — partner with another organization to capture the benefit. Accept — welcome it if it occurs. Every identified risk should have an assigned owner and an agreed response."
        },
        {
          id: "project-management-101-l07-c3",
          title: "Stakeholder Communication",
          content:
            "Effective communication is the PM's most important soft skill — PMI estimates project managers spend up to 90 % of their time communicating. A Communication Plan defines: who receives information, what information they need, how it is delivered (email, dashboard, meeting), and how often (daily stand-ups, weekly reports, monthly steering committees). A Power/Interest Grid classifies stakeholders into four quadrants: High Power + High Interest → Manage Closely (executive sponsors); High Power + Low Interest → Keep Satisfied; Low Power + High Interest → Keep Informed; Low Power + Low Interest → Monitor. Tailoring communication to each quadrant prevents information overload for some and under-communication for others."
        }
      ],
      flashcards: [
        { id: "project-management-101-l07-f1", front: "Risk Register", back: "Central document listing every identified risk with its probability, impact, EMV, response strategy, and assigned owner" },
        { id: "project-management-101-l07-f2", front: "Expected Monetary Value (EMV)", back: "Probability × dollar impact — used to compare risks and size contingency reserves (e.g., 30 % × $50 k = $15 k)" },
        { id: "project-management-101-l07-f3", front: "Four threat response strategies", back: "Avoid (eliminate), Mitigate (reduce), Transfer (shift to third party), Accept (acknowledge with contingency)" },
        { id: "project-management-101-l07-f4", front: "Power/Interest Grid", back: "Stakeholder classification tool — High Power + High Interest = Manage Closely; Low Power + Low Interest = Monitor" }
      ]
    },

    /* ──────────────────────────────────────────────
       L08  Agile, Scrum & Kanban vs. Waterfall  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "project-management-101-l08",
      title: "Agile, Scrum & Kanban vs. Waterfall",
      type: "interactive",
      duration: 15,
      objectives: [
        "Compare Waterfall's sequential phases with Agile's iterative sprints",
        "Describe Scrum roles, ceremonies, and artifacts including burndown charts",
        "Explain Kanban's visual board and Work-In-Progress (WIP) limits"
      ],
      chunks: [
        {
          id: "project-management-101-l08-c1",
          title: "Waterfall Methodology",
          content:
            "Waterfall follows a strict sequential flow: Requirements → Design → Implementation → Testing → Deployment → Maintenance. Each phase must be completed and signed off before the next begins — like water flowing downhill, you don't go back. Waterfall excels when requirements are well-defined and stable: construction, regulatory compliance, hardware manufacturing. Strengths include clear milestones, predictable timelines, and thorough documentation. The main weakness is inflexibility — if requirements change mid-project, rework is expensive because earlier phases must be revisited. For this reason, Waterfall is less suited to software projects with evolving user needs."
        },
        {
          id: "project-management-101-l08-c2",
          title: "Scrum Framework",
          content:
            "Scrum is the most popular Agile framework. Work is delivered in fixed-length sprints (typically two weeks). Three roles define the team: the Product Owner prioritizes the Product Backlog (ordered list of features), the Scrum Master facilitates the process and removes impediments, and the Development Team self-organizes to deliver a potentially shippable increment each sprint. Five ceremonies structure the rhythm: Sprint Planning (select backlog items for the sprint), Daily Stand-up (15-minute sync — what I did, what I'll do, any blockers), Sprint Review (demo the increment to stakeholders), Sprint Retrospective (reflect on process improvements), and Backlog Refinement (clarify upcoming items). The burndown chart tracks remaining work versus time — a line trending toward zero by sprint end indicates healthy progress."
        },
        {
          id: "project-management-101-l08-c3",
          title: "Kanban and Choosing the Right Approach",
          content:
            "Kanban visualizes work on a board with columns representing stages (To Do → In Progress → Review → Done). The core rule is limiting Work In Progress (WIP) — e.g., only three items may be 'In Progress' at once. When a slot opens, the team pulls the next highest-priority item. WIP limits prevent multitasking overload and expose bottlenecks: if the 'Review' column is always full, the team knows reviews need more capacity. Unlike Scrum, Kanban has no fixed sprints or prescribed roles — it's a continuous flow. Tools like Jira, Trello, and Azure DevOps support both frameworks. Choosing the right approach depends on uncertainty: high uncertainty and evolving requirements favor Agile (Scrum or Kanban); stable, well-understood requirements favor Waterfall. Many organizations use hybrid approaches — Waterfall for planning, Agile for execution."
        }
      ],
      interactiveActivities: [
        {
          id: "project-management-101-l08-a1",
          title: "Agile or Waterfall?",
          type: "sorting_buckets",
          buckets: ["Agile (Scrum/Kanban)", "Waterfall"],
          items: [
            { text: "Mobile app with evolving user requirements", bucket: "Agile (Scrum/Kanban)" },
            { text: "Bridge construction with fixed blueprints", bucket: "Waterfall" },
            { text: "Startup MVP needing rapid iteration", bucket: "Agile (Scrum/Kanban)" },
            { text: "FDA medical-device approval documentation", bucket: "Waterfall" },
            { text: "E-commerce site redesign with A/B testing", bucket: "Agile (Scrum/Kanban)" },
            { text: "Payroll system migration with strict regulations", bucket: "Waterfall" },
            { text: "Game development with player-feedback loops", bucket: "Agile (Scrum/Kanban)" },
            { text: "Government infrastructure with fixed contracts", bucket: "Waterfall" }
          ]
        }
      ],
      flashcards: [
        { id: "project-management-101-l08-f1", front: "Scrum sprint", back: "A fixed-length iteration (typically 2 weeks) in which the team delivers a potentially shippable product increment" },
        { id: "project-management-101-l08-f2", front: "Three Scrum roles", back: "Product Owner (prioritizes backlog), Scrum Master (facilitates process, removes blockers), Development Team (self-organizes to build the increment)" },
        { id: "project-management-101-l08-f3", front: "Kanban WIP limit", back: "A cap on the number of items allowed in a workflow stage — prevents multitasking overload and reveals bottlenecks" },
        { id: "project-management-101-l08-f4", front: "Burndown chart", back: "Graph tracking remaining work (y-axis) over time (x-axis) during a sprint — a line trending to zero by sprint end shows healthy progress" }
      ]
    },

    /* ──────────────────────────────────────────────
       L09  Risk & Methodology Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "project-management-101-l09",
      title: "Risk & Methodology Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Demonstrate understanding of risk management, Agile, Scrum, Kanban, and Waterfall"],
      questions: [
        {
          id: "project-management-101-l09-q1",
          text: "Buying insurance to cover a potential project loss is an example of:",
          skillId: "project-management-101-skill-core",
          options: [
            { id: "a", text: "Risk avoidance" },
            { id: "b", text: "Risk mitigation" },
            { id: "c", text: "Risk transfer" },
            { id: "d", text: "Risk acceptance" }
          ],
          correctOptionId: "c",
          explanation: "Insurance shifts the financial impact to a third party — the classic example of risk transfer."
        },
        {
          id: "project-management-101-l09-q2",
          text: "In Scrum, who is responsible for prioritizing the product backlog?",
          skillId: "project-management-101-skill-core",
          options: [
            { id: "a", text: "Scrum Master" },
            { id: "b", text: "Product Owner" },
            { id: "c", text: "Development Team collectively" },
            { id: "d", text: "Project Sponsor" }
          ],
          correctOptionId: "b",
          explanation: "The Product Owner owns the backlog, ordering items by value to ensure the team always works on the highest-priority features."
        },
        {
          id: "project-management-101-l09-q3",
          text: "Kanban's core mechanism for preventing overload is:",
          skillId: "project-management-101-skill-core",
          options: [
            { id: "a", text: "Fixed-length sprints" },
            { id: "b", text: "Work-In-Progress (WIP) limits" },
            { id: "c", text: "Daily stand-up meetings" },
            { id: "d", text: "A project charter" }
          ],
          correctOptionId: "b",
          explanation: "WIP limits cap how many items can be in a column at once, preventing multitasking and surfacing bottlenecks."
        },
        {
          id: "project-management-101-l09-q4",
          text: "A risk has a 40 % probability and a $25,000 impact. Its EMV is:",
          skillId: "project-management-101-skill-core",
          options: [
            { id: "a", text: "$10,000" },
            { id: "b", text: "$25,000" },
            { id: "c", text: "$15,000" },
            { id: "d", text: "$40,000" }
          ],
          correctOptionId: "a",
          explanation: "EMV = 0.40 × $25,000 = $10,000 — used to compare risks and size reserves."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, apply: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L10  Mastery Quiz: Project Management Foundations  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "project-management-101-l10",
      title: "Mastery Quiz: Project Management Foundations",
      type: "quiz",
      duration: 12,
      objectives: ["Synthesize all project management concepts across the module"],
      questions: [
        {
          id: "project-management-101-l10-q1",
          text: "A project's Schedule Performance Index (SPI) is 0.85. This means the project is:",
          skillId: "project-management-101-skill-core",
          options: [
            { id: "a", text: "15 % ahead of schedule" },
            { id: "b", text: "15 % behind schedule" },
            { id: "c", text: "On schedule" },
            { id: "d", text: "15 % under budget" }
          ],
          correctOptionId: "b",
          explanation: "SPI = EV ÷ PV. An SPI of 0.85 means only 85 % of planned work is complete — the project is 15 % behind schedule."
        },
        {
          id: "project-management-101-l10-q2",
          text: "Which Scrum ceremony focuses on process improvement after a sprint?",
          skillId: "project-management-101-skill-core",
          options: [
            { id: "a", text: "Sprint Planning" },
            { id: "b", text: "Daily Stand-up" },
            { id: "c", text: "Sprint Review" },
            { id: "d", text: "Sprint Retrospective" }
          ],
          correctOptionId: "d",
          explanation: "The Retrospective is where the team reflects on what went well, what didn't, and what to improve in the next sprint."
        },
        {
          id: "project-management-101-l10-q3",
          text: "The formal document authorizing a project and naming the project manager is the:",
          skillId: "project-management-101-skill-core",
          options: [
            { id: "a", text: "Scope statement" },
            { id: "b", text: "Risk register" },
            { id: "c", text: "Project charter" },
            { id: "d", text: "Gantt chart" }
          ],
          correctOptionId: "c",
          explanation: "The project charter is the 'birth certificate' of the project — it provides formal authorization and names the PM."
        },
        {
          id: "project-management-101-l10-q4",
          text: "Waterfall is generally preferred over Agile when:",
          skillId: "project-management-101-skill-core",
          options: [
            { id: "a", text: "Requirements are evolving and feedback loops are critical" },
            { id: "b", text: "Requirements are well-defined, stable, and regulatory compliance demands documentation" },
            { id: "c", text: "The team wants to deliver working software every two weeks" },
            { id: "d", text: "The Product Owner changes priorities each sprint" }
          ],
          correctOptionId: "b",
          explanation: "Waterfall's sequential, documentation-heavy approach excels when requirements are fixed and regulatory traceability is required."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 1, apply: 1, analyze: 1 }
      }
    }
  ]
};
