import type { LearningModule } from "@/lib/modules/types";

export const ProjectManagement101Module: LearningModule = {
  id: "project-management-101",
  title: "Project Management Fundamentals",
  description:
    "Learn to plan, execute, and deliver projects on time and on budget. Master the project lifecycle, scope management, scheduling, risk mitigation, and the differences between Agile and Waterfall methodologies.",
  subject: "Project Management",
  tags: ["curriculum", "interactive", "business", "leadership"],
  minAge: 14,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es"],
  learningObjectives: [
    "Define what a project is and distinguish it from ongoing operations",
    "Describe the five phases of the project lifecycle",
    "Create a scope statement and identify scope creep",
    "Build a project schedule using work breakdown structures and Gantt charts",
    "Identify, assess, and mitigate project risks",
    "Compare Agile and Waterfall methodologies and choose the right approach"
  ],
  lessons: [
    /* ── L01 What Is a Project? ── */
    {
      id: "project-management-101-l01",
      title: "What Is a Project?",
      type: "video",
      duration: 11,
      chunks: [
        { id: "project-management-101-l01-c1", title: "Projects vs. Operations", content: "A project is a temporary endeavor with a defined beginning and end, undertaken to create a unique product, service, or result. It is NOT ongoing operations (daily work that repeats). Building a new website is a project; maintaining that website daily is operations. Projects have three constraints known as the Triple Constraint: Scope (what), Time (when), and Cost (how much). Change one, and the others are affected." },
        { id: "project-management-101-l01-c2", title: "The Project Manager Role", content: "A project manager (PM) is responsible for planning, executing, and closing projects. Key responsibilities: define objectives, build the team, create the schedule, manage the budget, communicate with stakeholders, and solve problems. A great PM doesn't need to be the technical expert — they need to be an excellent communicator, organizer, and leader. The PM is the bridge between the team and stakeholders." },
        { id: "project-management-101-l01-c3", title: "Stakeholders and Success Criteria", content: "Stakeholders are anyone affected by the project: the sponsor (who funds it), the team (who builds it), customers (who use it), and management (who oversees it). Before starting, define success criteria — how will you know the project succeeded? Common criteria include: delivered on time, within budget, meets quality standards, and satisfies stakeholder requirements. Without clear criteria, there's no way to know if you've won." }
      ],
      flashcards: [
        { id: "project-management-101-l01-f1", front: "A temporary endeavor to create a unique product, service, or result", back: "Project" },
        { id: "project-management-101-l01-f2", front: "Scope, Time, and Cost — change one and the others shift", back: "The Triple Constraint (Iron Triangle)" },
        { id: "project-management-101-l01-f3", front: "Anyone affected by or who can influence the project", back: "Stakeholder" },
        { id: "project-management-101-l01-f4", front: "Measurable conditions that define project success", back: "Success criteria" }
      ],
      questions: [
        { id: "project-management-101-l01-q1", text: "Which is a project, NOT ongoing operations?", options: [{ id: "a", text: "Building a new mobile app" }, { id: "b", text: "Daily customer support calls" }, { id: "c", text: "Weekly payroll processing" }, { id: "d", text: "Monthly inventory restocking" }], correctOptionId: "a", explanation: "Building a new app has a defined start, end, and unique deliverable — that's a project!" },
        { id: "project-management-101-l01-q2", text: "The Triple Constraint consists of", options: [{ id: "a", text: "Scope, Time, and Cost" }, { id: "b", text: "People, Process, and Technology" }, { id: "c", text: "Plan, Do, and Check" }, { id: "d", text: "Risk, Quality, and Budget" }], correctOptionId: "a", explanation: "Scope (what), Time (when), Cost (how much) — the three sides of the Iron Triangle!" },
        { id: "project-management-101-l01-q3", text: "Who is a project stakeholder?", options: [{ id: "a", text: "Anyone affected by or who can influence the project" }, { id: "b", text: "Only the project manager" }, { id: "c", text: "Only the customer" }, { id: "d", text: "Only the development team" }], correctOptionId: "a", explanation: "Stakeholders include sponsors, team members, customers, management — anyone with a stake in the outcome!" }
      ],
      activities: [{ id: "project-management-101-l01-act1", type: "sorting_buckets", title: "Project or operations?", description: "Sort: Project (redesign company logo, launch new product, build office) vs. Operations (answer daily emails, monthly invoicing, weekly reports)." }]
    },

    /* ── L02 The Project Lifecycle ── */
    {
      id: "project-management-101-l02",
      title: "The Project Lifecycle",
      type: "video",
      duration: 12,
      chunks: [
        { id: "project-management-101-l02-c1", title: "Five Phases Overview", content: "Every project follows five phases: 1) Initiation — define the project, get approval, identify stakeholders; 2) Planning — create the roadmap (scope, schedule, budget, resources); 3) Execution — the team does the work; 4) Monitoring & Controlling — track progress, manage changes, ensure quality; 5) Closing — deliver the final product, document lessons learned, release resources. These phases may overlap, but they always happen in this general order." },
        { id: "project-management-101-l02-c2", title: "Initiation and the Project Charter", content: "The project charter is the document that formally authorizes the project. It includes: project purpose (why), objectives (what), high-level requirements, key stakeholders, estimated budget, and the project manager's authority. Think of it as the project's birth certificate. Without a charter, the project has no official mandate. The charter is typically approved by the project sponsor — the person providing the funding." },
        { id: "project-management-101-l02-c3", title: "Planning: The Heart of PM", content: "Planning is where most PM work happens. Key planning documents include: Scope Statement (what's included and excluded), Work Breakdown Structure (WBS — breaking work into manageable pieces), Schedule (timeline with milestones), Budget (cost estimates), Risk Register (potential problems), and Communication Plan (who gets what info, when). A well-planned project is 80% more likely to succeed. 'Failing to plan is planning to fail.'" }
      ],
      flashcards: [
        { id: "project-management-101-l02-f1", front: "The five project phases in order", back: "Initiation → Planning → Execution → Monitoring & Controlling → Closing" },
        { id: "project-management-101-l02-f2", front: "Document that formally authorizes a project", back: "Project Charter" },
        { id: "project-management-101-l02-f3", front: "Breaking project work into smaller, manageable pieces", back: "Work Breakdown Structure (WBS)" },
        { id: "project-management-101-l02-f4", front: "The person who provides funding and formal approval", back: "Project Sponsor" }
      ],
      questions: [
        { id: "project-management-101-l02-q1", text: "Which phase comes immediately after Planning?", options: [{ id: "a", text: "Execution" }, { id: "b", text: "Closing" }, { id: "c", text: "Initiation" }, { id: "d", text: "Monitoring" }], correctOptionId: "a", explanation: "The order is: Initiation → Planning → Execution → Monitoring & Controlling → Closing!" },
        { id: "project-management-101-l02-q2", text: "The project charter", options: [{ id: "a", text: "Formally authorizes the project and names the PM" }, { id: "b", text: "Lists every task in detail" }, { id: "c", text: "Is created after the project ends" }, { id: "d", text: "Replaces the budget" }], correctOptionId: "a", explanation: "The charter is the project's 'birth certificate' — it gives the PM authority to proceed!" },
        { id: "project-management-101-l02-q3", text: "A Work Breakdown Structure (WBS) is used to", options: [{ id: "a", text: "Decompose project work into smaller, manageable pieces" }, { id: "b", text: "Fire underperforming team members" }, { id: "c", text: "Calculate taxes" }, { id: "d", text: "Write the final report" }], correctOptionId: "a", explanation: "The WBS breaks the project into bite-sized work packages that can be estimated and assigned!" }
      ],
      activities: [{ id: "project-management-101-l02-act1", type: "timeline_builder", title: "Project phase timeline", description: "Arrange the five project phases in correct order: Initiation, Planning, Execution, Monitoring & Controlling, Closing." }]
    },

    /* ── L03 Scope Management ── */
    {
      id: "project-management-101-l03",
      title: "Scope Management",
      type: "video",
      duration: 12,
      chunks: [
        { id: "project-management-101-l03-c1", title: "Defining Scope", content: "Scope defines what the project WILL and WILL NOT include. A scope statement has: project deliverables (what you'll produce), acceptance criteria (how to verify quality), exclusions (what you WON'T do), constraints (limitations like budget/time), and assumptions. Example: A website project's scope might include 'design 10 pages with mobile responsiveness' and exclude 'e-commerce functionality and blog features.'" },
        { id: "project-management-101-l03-c2", title: "Scope Creep: The Silent Killer", content: "Scope creep is the uncontrolled expansion of project scope without adjusting time, cost, or resources. It happens when stakeholders add 'just one more feature' repeatedly. Example: A client asks for 'a simple logo' → then wants 3 color variations → then a business card → then letterhead → now you're doing a full brand identity! Prevention: use a formal change control process. Every change request must be documented, evaluated for impact, and approved before implementation." },
        { id: "project-management-101-l03-c3", title: "Change Control Process", content: "When someone requests a scope change: 1) Document the request in writing, 2) Analyze the impact on schedule, budget, and quality, 3) Present options to decision-makers (approve, reject, or defer), 4) If approved, update the project plan, 5) Communicate changes to all stakeholders. A Change Control Board (CCB) may review significant changes. This process ensures changes are intentional, not accidental. Every 'yes' to a new feature is a 'no' to the original timeline." }
      ],
      flashcards: [
        { id: "project-management-101-l03-f1", front: "Uncontrolled expansion of project scope without adjusting time/cost", back: "Scope creep" },
        { id: "project-management-101-l03-f2", front: "Document that defines what is and is NOT included in the project", back: "Scope statement" },
        { id: "project-management-101-l03-f3", front: "Formal process for evaluating and approving scope changes", back: "Change control process" },
        { id: "project-management-101-l03-f4", front: "Group that reviews and approves significant project changes", back: "Change Control Board (CCB)" }
      ],
      questions: [
        { id: "project-management-101-l03-q1", text: "Scope creep is", options: [{ id: "a", text: "Uncontrolled expansion of project work without adjusting constraints" }, { id: "b", text: "A method for reducing project scope" }, { id: "c", text: "A scheduling technique" }, { id: "d", text: "A type of risk analysis" }], correctOptionId: "a", explanation: "Scope creep = adding work without adding time or budget — it's the #1 project killer!" },
        { id: "project-management-101-l03-q2", text: "The first step in change control is", options: [{ id: "a", text: "Document the change request in writing" }, { id: "b", text: "Immediately implement the change" }, { id: "c", text: "Fire the person who asked" }, { id: "d", text: "Cancel the project" }], correctOptionId: "a", explanation: "Every change starts with documentation — no verbal-only changes allowed!" },
        { id: "project-management-101-l03-q3", text: "A scope statement should include", options: [{ id: "a", text: "Deliverables, exclusions, constraints, and acceptance criteria" }, { id: "b", text: "Only the project title" }, { id: "c", text: "Team members' salaries" }, { id: "d", text: "The company's mission statement" }], correctOptionId: "a", explanation: "The scope statement defines what you WILL deliver, what you WON'T, and how to verify quality!" }
      ],
      activities: [{ id: "project-management-101-l03-act1", type: "sorting_buckets", title: "In scope or out of scope?", description: "For a school event planning project: In Scope (book venue, arrange catering, send invitations) vs. Out of Scope (redesign school mascot, hire DJ for after-party, renovate auditorium)." }]
    },

    /* ── L04 Project Management Checkpoint ── */
    {
      id: "project-management-101-l04",
      title: "Project Management Checkpoint",
      type: "quiz",
      duration: 8,
      questions: [
        { id: "project-management-101-l04-q1", text: "The Triple Constraint includes Scope, Time, and", options: [{ id: "a", text: "Cost" }, { id: "b", text: "Quality" }, { id: "c", text: "Risk" }, { id: "d", text: "Communication" }], correctOptionId: "a", explanation: "Scope, Time, Cost — the three sides of the Iron Triangle!" },
        { id: "project-management-101-l04-q2", text: "Which document formally authorizes a project?", options: [{ id: "a", text: "Project Charter" }, { id: "b", text: "Budget spreadsheet" }, { id: "c", text: "Team roster" }, { id: "d", text: "Risk register" }], correctOptionId: "a", explanation: "The charter is the project's birth certificate — it gives the PM authority to proceed!" },
        { id: "project-management-101-l04-q3", text: "The best way to prevent scope creep is", options: [{ id: "a", text: "Use a formal change control process" }, { id: "b", text: "Say yes to every request immediately" }, { id: "c", text: "Never talk to stakeholders" }, { id: "d", text: "Skip the planning phase" }], correctOptionId: "a", explanation: "Change control ensures every scope change is documented, evaluated, and formally approved!" }
      ],
      flashcards: [
        { id: "project-management-101-l04-f1", front: "Initiation → Planning → Execution → M&C → Closing", back: "The five project management phases" },
        { id: "project-management-101-l04-f2", front: "The #1 reason projects fail", back: "Poor scope management (scope creep)" },
        { id: "project-management-101-l04-f3", front: "Scope + Time + Cost", back: "The Triple Constraint / Iron Triangle" },
        { id: "project-management-101-l04-f4", front: "Failing to plan is...", back: "...planning to fail" }
      ]
    },

    /* ── L05 Scheduling ── */
    {
      id: "project-management-101-l05",
      title: "Scheduling",
      type: "video",
      duration: 13,
      chunks: [
        { id: "project-management-101-l05-c1", title: "Work Breakdown to Schedule", content: "Scheduling starts with the WBS. Take each work package and estimate: How long will it take? (duration), Who will do it? (resource), What must finish before it can start? (dependencies). There are four types of dependencies: Finish-to-Start (A must finish before B starts — most common), Start-to-Start (A and B start together), Finish-to-Finish (A and B end together), and Start-to-Finish (rare)." },
        { id: "project-management-101-l05-c2", title: "Gantt Charts and Critical Path", content: "A Gantt chart is a bar chart showing tasks on a timeline — each bar represents a task's duration. Dependencies are shown with arrows. The Critical Path is the longest sequence of dependent tasks — it determines the minimum project duration. If any task on the critical path is delayed, the entire project is delayed. Tasks NOT on the critical path have 'float' or 'slack' — they can be delayed without affecting the end date." },
        { id: "project-management-101-l05-c3", title: "Milestones and Estimation", content: "Milestones are significant checkpoints with zero duration — they mark the completion of a major phase or deliverable (e.g., 'Design Approved' or 'Beta Launch'). For estimation, use three-point estimating: Optimistic (best case), Most Likely, and Pessimistic (worst case). Formula: (O + 4ML + P) ÷ 6 = expected duration. This gives a weighted average that accounts for uncertainty." }
      ],
      flashcards: [
        { id: "project-management-101-l05-f1", front: "A bar chart showing tasks plotted against a timeline", back: "Gantt chart" },
        { id: "project-management-101-l05-f2", front: "The longest sequence of dependent tasks determining minimum project duration", back: "Critical Path" },
        { id: "project-management-101-l05-f3", front: "Significant zero-duration checkpoints marking phase completions", back: "Milestones" },
        { id: "project-management-101-l05-f4", front: "(Optimistic + 4×Most Likely + Pessimistic) ÷ 6", back: "Three-point estimate (PERT formula)" }
      ],
      questions: [
        { id: "project-management-101-l05-q1", text: "If a critical path task is delayed by 3 days, the project end date", options: [{ id: "a", text: "Is delayed by at least 3 days" }, { id: "b", text: "Is not affected" }, { id: "c", text: "Moves earlier by 3 days" }, { id: "d", text: "Stays the same because of float" }], correctOptionId: "a", explanation: "Critical path tasks have zero float — any delay pushes the project end date!" },
        { id: "project-management-101-l05-q2", text: "A Gantt chart shows", options: [{ id: "a", text: "Tasks as horizontal bars plotted on a timeline" }, { id: "b", text: "Only the project budget" }, { id: "c", text: "Stakeholder contact information" }, { id: "d", text: "Team member salaries" }], correctOptionId: "a", explanation: "Gantt charts are the most popular way to visualize project schedules!" },
        { id: "project-management-101-l05-q3", text: "Using three-point estimation: O=4, ML=6, P=14. The expected duration is", options: [{ id: "a", text: "7 days" }, { id: "b", text: "6 days" }, { id: "c", text: "8 days" }, { id: "d", text: "14 days" }], correctOptionId: "a", explanation: "(4 + 4×6 + 14) ÷ 6 = (4 + 24 + 14) ÷ 6 = 42 ÷ 6 = 7 days!" }
      ],
      activities: [{ id: "project-management-101-l05-act1", type: "timeline_builder", title: "Build a Gantt chart", description: "Arrange tasks for a school play project: Write script (2 weeks) → Auditions (1 week) → Rehearsals (4 weeks) → Build set (3 weeks, can start with rehearsals) → Dress rehearsal (3 days) → Performance night. Identify the critical path." }]
    },

    /* ── L06 Risk Management ── */
    {
      id: "project-management-101-l06",
      title: "Risk Management",
      type: "video",
      duration: 12,
      chunks: [
        { id: "project-management-101-l06-c1", title: "Identifying Risks", content: "A risk is an uncertain event that, if it occurs, could positively or negatively affect the project. Most people focus on threats (negative risks), but opportunities (positive risks) exist too. Common project risks: key team member leaves, technology doesn't work as expected, requirements change, vendor delivers late, budget gets cut. Use brainstorming, checklists, and expert judgment to identify risks early — the Risk Register documents all identified risks." },
        { id: "project-management-101-l06-c2", title: "Risk Assessment: Probability × Impact", content: "Assess each risk on two dimensions: Probability (how likely? Low/Medium/High) and Impact (how serious? Low/Medium/High). Create a Risk Matrix: High probability + High impact = critical risk (address immediately). Low probability + Low impact = minor risk (monitor only). Priority Score = Probability × Impact. A risk with 80% chance and $50,000 impact has an Expected Monetary Value (EMV) of $40,000 — this helps prioritize." },
        { id: "project-management-101-l06-c3", title: "Risk Response Strategies", content: "Four strategies for negative risks (threats): Avoid (eliminate the risk entirely by changing the plan), Mitigate (reduce probability or impact), Transfer (shift to a third party — like insurance), Accept (acknowledge and prepare a contingency plan). For positive risks (opportunities): Exploit (make it happen), Enhance (increase probability), Share (partner with others to capture it), Accept. Always have a contingency plan — Plan B for your most critical risks." }
      ],
      flashcards: [
        { id: "project-management-101-l06-f1", front: "An uncertain event that could affect the project positively or negatively", back: "Risk" },
        { id: "project-management-101-l06-f2", front: "Probability × Impact", back: "Risk Priority Score / Expected Monetary Value" },
        { id: "project-management-101-l06-f3", front: "Four threat response strategies", back: "Avoid, Mitigate, Transfer, Accept" },
        { id: "project-management-101-l06-f4", front: "Document listing all identified risks with probability, impact, and response", back: "Risk Register" }
      ],
      questions: [
        { id: "project-management-101-l06-q1", text: "Buying insurance to cover potential losses is an example of", options: [{ id: "a", text: "Risk transfer" }, { id: "b", text: "Risk avoidance" }, { id: "c", text: "Risk acceptance" }, { id: "d", text: "Risk mitigation" }], correctOptionId: "a", explanation: "Insurance transfers the financial impact to a third party (the insurance company)!" },
        { id: "project-management-101-l06-q2", text: "A risk with 60% probability and $10,000 impact has an EMV of", options: [{ id: "a", text: "$6,000" }, { id: "b", text: "$10,000" }, { id: "c", text: "$60,000" }, { id: "d", text: "$4,000" }], correctOptionId: "a", explanation: "EMV = 0.60 × $10,000 = $6,000!" },
        { id: "project-management-101-l06-q3", text: "The Risk Register is", options: [{ id: "a", text: "A document listing all identified risks with their assessments and responses" }, { id: "b", text: "A list of team members" }, { id: "c", text: "The project budget" }, { id: "d", text: "A type of Gantt chart" }], correctOptionId: "a", explanation: "The Risk Register is the central document for tracking all project risks!" }
      ],
      activities: [{ id: "project-management-101-l06-act1", type: "matching_pairs", title: "Risk response strategy", description: "Match the scenario to the strategy: Cancel outdoor event → Avoid, Add backup generator → Mitigate, Buy event insurance → Transfer, Accept rain might happen → Accept." }]
    },

    /* ── L07 Agile vs. Waterfall ── */
    {
      id: "project-management-101-l07",
      title: "Agile vs. Waterfall",
      type: "video",
      duration: 13,
      chunks: [
        { id: "project-management-101-l07-c1", title: "Waterfall Methodology", content: "Waterfall is a sequential, phase-by-phase approach: Requirements → Design → Build → Test → Deploy. Each phase must be completed before the next begins — like water flowing downhill, you don't go back. Best for: well-defined requirements that won't change (construction, manufacturing, regulatory projects). Strengths: clear milestones, predictable timelines, extensive documentation. Weakness: inflexible — if requirements change mid-project, it's expensive and disruptive to go back." },
        { id: "project-management-101-l07-c2", title: "Agile Methodology", content: "Agile delivers work in short cycles called sprints (usually 2-4 weeks). Each sprint produces a working increment of the product. The team plans, builds, tests, and gets feedback in every sprint — then adapts. Key Agile roles: Product Owner (defines priorities), Scrum Master (removes obstacles), Development Team (builds the product). Best for: software, creative projects, anything with evolving requirements. The Agile Manifesto values: Individuals over processes, Working software over documentation, Customer collaboration over contracts, Responding to change over following a plan." },
        { id: "project-management-101-l07-c3", title: "Choosing the Right Approach", content: "Choose Waterfall when: requirements are fixed, regulatory compliance requires documentation, the project is well-understood. Choose Agile when: requirements may change, speed to market matters, customer feedback is essential. Hybrid approaches are common: using Waterfall for overall planning but Agile for execution phases. There's no 'best' methodology — only the best fit for your project. The key question: How much uncertainty is there? More uncertainty = Agile. Less uncertainty = Waterfall." }
      ],
      flashcards: [
        { id: "project-management-101-l07-f1", front: "Sequential, phase-based methodology where you don't go back", back: "Waterfall" },
        { id: "project-management-101-l07-f2", front: "Iterative methodology delivering work in short 2-4 week cycles", back: "Agile (Scrum)" },
        { id: "project-management-101-l07-f3", front: "Short development cycle in Agile (usually 2-4 weeks)", back: "Sprint" },
        { id: "project-management-101-l07-f4", front: "Agile role that defines priorities and represents the customer", back: "Product Owner" }
      ],
      questions: [
        { id: "project-management-101-l07-q1", text: "Agile delivers work in short cycles called", options: [{ id: "a", text: "Sprints" }, { id: "b", text: "Phases" }, { id: "c", text: "Milestones" }, { id: "d", text: "Charters" }], correctOptionId: "a", explanation: "Sprints are 2-4 week cycles where the team plans, builds, tests, and gets feedback!" },
        { id: "project-management-101-l07-q2", text: "Waterfall is best for projects with", options: [{ id: "a", text: "Well-defined, fixed requirements" }, { id: "b", text: "Constantly changing requirements" }, { id: "c", text: "No deadlines" }, { id: "d", text: "Only one team member" }], correctOptionId: "a", explanation: "Waterfall works best when you know exactly what you're building from the start!" },
        { id: "project-management-101-l07-q3", text: "The Scrum Master's primary role is to", options: [{ id: "a", text: "Remove obstacles and facilitate the team's process" }, { id: "b", text: "Write all the code" }, { id: "c", text: "Set the project budget" }, { id: "d", text: "Approve all change requests" }], correctOptionId: "a", explanation: "The Scrum Master is a servant-leader who removes blockers and protects the team!" }
      ],
      activities: [{ id: "project-management-101-l07-act1", type: "sorting_buckets", title: "Agile or Waterfall?", description: "Classify: Agile (mobile app with evolving features, startup MVP, game development) vs. Waterfall (bridge construction, FDA drug approval, payroll system migration)." }]
    },

    /* ── L08 Project Management Final Assessment ── */
    {
      id: "project-management-101-l08",
      title: "Project Management Final Assessment",
      type: "quiz",
      duration: 10,
      questions: [
        { id: "project-management-101-l08-q1", text: "A project is different from operations because it is", options: [{ id: "a", text: "Temporary with a unique deliverable" }, { id: "b", text: "Ongoing and repetitive" }, { id: "c", text: "Always under budget" }, { id: "d", text: "Led by a CEO" }], correctOptionId: "a", explanation: "Projects are temporary and produce unique results — operations are ongoing!" },
        { id: "project-management-101-l08-q2", text: "The critical path determines", options: [{ id: "a", text: "The minimum project duration" }, { id: "b", text: "The maximum budget" }, { id: "c", text: "The number of stakeholders" }, { id: "d", text: "The risk register format" }], correctOptionId: "a", explanation: "The critical path is the longest chain of dependent tasks — it sets the project's end date!" },
        { id: "project-management-101-l08-q3", text: "An Agile sprint typically lasts", options: [{ id: "a", text: "2-4 weeks" }, { id: "b", text: "6-12 months" }, { id: "c", text: "1 day" }, { id: "d", text: "1 year" }], correctOptionId: "a", explanation: "Sprints are short, focused cycles — usually 2-4 weeks — delivering working increments!" }
      ],
      flashcards: [
        { id: "project-management-101-l08-f1", front: "Scope, Time, Cost", back: "Triple Constraint" },
        { id: "project-management-101-l08-f2", front: "Avoid, Mitigate, Transfer, Accept", back: "Risk response strategies for threats" },
        { id: "project-management-101-l08-f3", front: "More uncertainty → Agile; Less uncertainty →", back: "Waterfall" },
        { id: "project-management-101-l08-f4", front: "The #1 project killer", back: "Scope creep — uncontrolled scope expansion" }
      ]
    }
  ]
};
