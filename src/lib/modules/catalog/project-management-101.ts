import type { LearningModule } from "@/lib/modules/types";

export const project_management_101_Module: LearningModule = {
  "id": "project-management-101",
  "title": "Project Management Fundamentals",
  "description": "Learn to plan, execute, and deliver projects on time and on budget. Master the project lifecycle, scope management, scheduling with Gantt charts and critical-path analysis, risk mitigation, earned-value tracking, and the differences between Agile and Waterfall methodologies.",
  "subject": "Project Management",
  "tags": [
    "curriculum",
    "interactive",
    "business",
    "leadership",
    "agile",
    "pmbok"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Define what a project is and distinguish it from ongoing operations",
    "Describe the five process groups and ten PMBOK knowledge areas",
    "Create a scope statement, work breakdown structure, and change-control process",
    "Build a project schedule using Gantt charts, the critical-path method, and PERT estimates",
    "Plan resources, estimate costs, and measure performance with earned-value management",
    "Identify, assess, and respond to project risks using a risk register",
    "Compare Agile (Scrum, Kanban) and Waterfall approaches and select the right methodology"
  ],
  "lessons": [
    {
      "id": "project-management-101-l01",
      "title": "What Is Project Management? The PM Life Cycle",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Distinguish a project from ongoing operations using PMI's definition",
        "Explain the triple constraint and how scope, time, and cost interact",
        "Outline the five process groups of the project lifecycle"
      ],
      "chunks": [
        {
          "id": "project-management-101-l01-c1",
          "title": "Projects vs. Operations",
          "content": "A project is a temporary task with a clear start and end date, designed to create a unique product, service, or result. For example, building a new website is a project. Once the website is launched, the project is complete. In contrast, operations are the ongoing, repetitive tasks that keep a business running, like updating the website's content daily or answering customer emails. Understanding this difference is key because projects require special planning to achieve their unique goals, while operations follow established routines to maintain efficiency.",
          "visualPrompt": "A simple side-by-side comparison graphic. Left side: 'Project' with an icon of a blueprint and a timeline from start to finish (e.g., 'Building a Bridge'). Right side: 'Operations' with an icon of gears turning and a circular arrow (e.g., 'Maintaining the Bridge')."
        },
        {
          "id": "project-management-101-l01-c2",
          "title": "The Triple Constraint (Iron Triangle)",
          "content": "Every project is balanced by three core factors: Scope, Time, and Cost. This is often called the 'Iron Triangle.' Scope is the work to be done. Time is the schedule for completion. Cost is the budget. These three are interconnected; if you change one, at least one of the others must also change. For example, if you increase the scope (add more features), you'll likely need more time or a bigger budget. At the center of this triangle is Quality. A project manager's job is to balance these three constraints to deliver a high-quality result.",
          "visualPrompt": "An animated diagram of an equilateral triangle labeled 'Scope,' 'Time,' and 'Cost' on its sides. The word 'Quality' appears in the center. Show one side of the triangle extending (e.g., Scope increases), causing the other two sides to stretch or wobble, demonstrating the need for adjustment."
        },
        {
          "id": "project-management-101-l01-c3",
          "title": "The Five Process Groups",
          "content": "Project management work is organized into five groups that guide a project from start to finish. (1) Initiating: The project is defined and authorized with a project charter. (2) Planning: A detailed roadmap is created, including the scope, schedule, and budget. (3) Executing: The team does the work and creates the project deliverables. (4) Monitoring & Controlling: The project manager tracks progress against the plan and manages any changes. (5) Closing: The final product is delivered, and the project is formally closed. While they are listed in order, Monitoring & Controlling happens throughout the project.",
          "visualPrompt": "A horizontal flowchart with five labeled boxes: Initiating → Planning → Executing → Closing. A large, overarching arrow labeled 'Monitoring & Controlling' should span from Initiating to Closing, indicating it's a continuous process."
        }
      ],
      "flashcards": [
        {
          "id": "project-management-101-l01-f1",
          "front": "Project (PMI definition)",
          "back": "A temporary endeavor undertaken to create a unique product, service, or result."
        },
        {
          "id": "project-management-101-l01-f2",
          "front": "Triple Constraint (Iron Triangle)",
          "back": "Scope, Time, and Cost — change one side and at least one other must adjust; Quality sits at the center."
        },
        {
          "id": "project-management-101-l01-f3",
          "front": "Five process groups in order",
          "back": "Initiating → Planning → Executing → Monitoring & Controlling → Closing"
        },
        {
          "id": "project-management-101-l01-f4",
          "front": "Project Charter",
          "back": "The document that formally authorizes the project, names the PM, states objectives, and estimates budget."
        }
      ],
      "learningAids": [
        {
          "id": "project-management-101-l01-a1",
          "type": "image",
          "title": "Concept Card: The Project Lifecycle",
          "content": "A single-page visual summary showing the five process groups in a cycle, with key activities listed under each group. The Iron Triangle is featured in the center."
        }
      ]
    },
    {
      "id": "project-management-101-l02",
      "title": "Scope Definition & Work Breakdown Structure",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Write a scope statement with deliverables, exclusions, constraints, and acceptance criteria",
        "Decompose project work into a hierarchical Work Breakdown Structure (WBS)",
        "Identify scope creep and apply a formal change-control process"
      ],
      "chunks": [
        {
          "id": "project-management-101-l02-c1",
          "title": "Defining Scope",
          "content": "The scope statement is a key document that ensures everyone agrees on what the project will and will not do. It includes: (1) Deliverables: The tangible things the project will create (e.g., 'a ten-page responsive website'). (2) Acceptance Criteria: Measurable conditions for success (e.g., 'pages load in under 2 seconds'). (3) Exclusions: What's not included (e.g., 'no e-commerce features'). (4) Constraints: Limitations like budget or deadlines. (5) Assumptions: Things believed to be true (e.g., 'client will provide all text content'). A clear scope statement prevents misunderstandings later.",
          "visualPrompt": "An illustration of a document template for a Scope Statement, with each key section (Deliverables, Exclusions, etc.) highlighted with a different color and a brief example."
        },
        {
          "id": "project-management-101-l02-c2",
          "title": "Building a Work Breakdown Structure",
          "content": "A Work Breakdown Structure (WBS) breaks a large project into smaller, more manageable pieces. Think of it like a family tree for your project. At the top is the final deliverable (e.g., 'Website Redesign'). The next level down lists the major phases ('Design,' 'Development,' 'Testing'). Each phase is then broken down further into specific tasks, called work packages ('Create Wireframes,' 'Code Homepage'). The WBS follows the 100% rule, meaning it must include all the work defined in the scope, and nothing extra. This organization makes it easier to assign tasks and estimate time and cost.",
          "visualPrompt": "An animated, hierarchical tree diagram being built on screen. Start with the main project 'Website Redesign' at the top, then branches for 'Design,' 'Development,' and 'Testing' appear, followed by smaller branches for individual work packages."
        },
        {
          "id": "project-management-101-l02-c3",
          "title": "Scope Creep & Change Control",
          "content": "Scope creep happens when a project's scope expands without adjustments to time, cost, or resources. It often starts with 'just one small tweak' that adds up over time, threatening the project's success. To prevent this, use a formal change-control process: (1) Document all change requests in writing. (2) Analyze the impact on the schedule, budget, and quality. (3) Get approval from a Change Control Board (CCB) or project sponsor. (4) If approved, update all project plans. (5) Communicate the change to all stakeholders. This process ensures that changes are made thoughtfully, not casually.",
          "visualPrompt": "A simple animation showing a small snowball labeled 'Small Tweak' rolling down a hill, growing larger and larger until it becomes a giant snowball labeled 'Scope Creep.' Then, show a flowchart of the 5-step change control process."
        }
      ],
      "interactiveActivities": [
        {
          "id": "project-management-101-l02-a1",
          "title": "In Scope or Out of Scope?",
          "type": "sorting_buckets",
          "buckets": [
            "In Scope",
            "Out of Scope"
          ],
          "items": [
            {
              "text": "Design ten responsive web pages",
              "bucket": "In Scope"
            },
            {
              "text": "Build a native mobile app",
              "bucket": "Out of Scope"
            },
            {
              "text": "Write SEO meta tags for each page",
              "bucket": "In Scope"
            },
            {
              "text": "Redesign the company logo",
              "bucket": "Out of Scope"
            },
            {
              "text": "User-acceptance testing with the client",
              "bucket": "In Scope"
            },
            {
              "text": "Ongoing monthly content updates after launch",
              "bucket": "Out of Scope"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "project-management-101-l02-f1",
          "front": "Scope statement",
          "back": "Document defining deliverables, exclusions, constraints, assumptions, and acceptance criteria for the project."
        },
        {
          "id": "project-management-101-l02-f2",
          "front": "Work Breakdown Structure (WBS)",
          "back": "Hierarchical decomposition of total project scope into work packages — follows the 100% rule so nothing is missed or duplicated."
        },
        {
          "id": "project-management-101-l02-f3",
          "front": "Scope creep",
          "back": "Uncontrolled expansion of project scope without adjusting time, cost, or resources — a major project risk."
        },
        {
          "id": "project-management-101-l02-f4",
          "front": "Change Control Board (CCB)",
          "back": "A group authorized to review, approve, or reject change requests and ensure impacts are evaluated before implementation."
        }
      ],
      "learningAids": [
        {
          "id": "project-management-101-l02-a1",
          "type": "practice",
          "title": "WBS Practice Worksheet",
          "content": "Download a template to create a simple WBS for a familiar project, like 'Planning a Birthday Party' or 'Building a Bookshelf'."
        }
      ]
    },
    {
      "id": "project-management-101-l03",
      "title": "Scope & Planning Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of projects, the triple constraint, scope management, and the WBS"
      ],
      "questions": [
        {
          "id": "project-management-101-l03-q1",
          "text": "Which of the following is a project rather than ongoing operations?",
          "skillId": "project-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Launching a new product line"
            },
            {
              "id": "b",
              "text": "Processing weekly payroll"
            },
            {
              "id": "c",
              "text": "Restocking warehouse inventory"
            },
            {
              "id": "d",
              "text": "Responding to daily customer emails"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A product launch is temporary with a unique deliverable — that's a project. The other options are repetitive operations."
        },
        {
          "id": "project-management-101-l03-q2",
          "text": "In the triple constraint, adding scope without extending the deadline will most likely:",
          "skillId": "project-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Decrease cost"
            },
            {
              "id": "b",
              "text": "Increase cost or reduce quality"
            },
            {
              "id": "c",
              "text": "Have no effect on the project"
            },
            {
              "id": "d",
              "text": "Eliminate risk"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Iron Triangle means changing one constraint forces trade-offs in the others — more scope in the same time costs more or cuts quality."
        },
        {
          "id": "project-management-101-l03-q3",
          "text": "The 100% rule in a WBS means:",
          "skillId": "project-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Every level must capture all the work of its parent — no more, no less"
            },
            {
              "id": "b",
              "text": "The project must be 100% complete before any testing"
            },
            {
              "id": "c",
              "text": "100% of the budget must be spent"
            },
            {
              "id": "d",
              "text": "All team members must work 100% of the time"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 100% rule ensures the WBS accounts for all deliverable work without gaps or overlap."
        },
        {
          "id": "project-management-101-l03-q4",
          "text": "The first step in a formal change-control process is:",
          "skillId": "project-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Immediately implement the requested change"
            },
            {
              "id": "b",
              "text": "Document the change request in writing"
            },
            {
              "id": "c",
              "text": "Cancel the project"
            },
            {
              "id": "d",
              "text": "Extend the deadline automatically"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Every change must first be documented so its impact on schedule, budget, and quality can be formally evaluated."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "learningAids": [
        {
          "id": "project-management-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "project-management-101-l04",
      "title": "Scheduling: Gantt Charts and the Critical Path Method",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Construct a Gantt chart from a WBS with task dependencies",
        "Calculate the critical path and identify tasks with float",
        "Apply three-point (PERT) estimation to derive expected durations"
      ],
      "chunks": [
        {
          "id": "project-management-101-l04-c1",
          "title": "From WBS to Schedule",
          "content": "To turn a WBS into a schedule, we need to define three things for each task: duration (how long it will take), resources (who will do it), and dependencies (the relationship between tasks). The most common dependency is Finish-to-Start (FS), where Task A must finish before Task B can start (e.g., you must pour the foundation before building the walls). Other types include Start-to-Start (SS), Finish-to-Finish (FF), and the rare Start-to-Finish (SF). Defining these relationships correctly is essential for building a realistic timeline.",
          "visualPrompt": "Four mini-diagrams illustrating task dependencies. Each shows two tasks, A and B, with an arrow. FS: A→B. SS: Arrow from start of A to start of B. FF: Arrow from end of A to end of B. SF: Arrow from start of A to end of B."
        },
        {
          "id": "project-management-101-l04-c2",
          "title": "Gantt Charts and the Critical Path",
          "content": "A Gantt chart is a bar chart that visualizes the project schedule. Each bar represents a task, and its length shows its duration. Arrows connect dependent tasks. The Critical Path is the longest sequence of dependent tasks through the project. It determines the shortest possible time to complete the entire project. Any delay to a task on the critical path will delay the project's finish date. Tasks not on the critical path have 'float' or 'slack,' meaning they can be delayed a certain amount without affecting the project's end date.",
          "visualPrompt": "A sample Gantt chart with several task bars. The sequence of tasks forming the critical path should be highlighted in red, while non-critical tasks are in blue. A tooltip could appear over a blue task to show its 'float' time."
        },
        {
          "id": "project-management-101-l04-c3",
          "title": "PERT Estimation and Milestones",
          "content": "Estimating task duration can be uncertain. The Program Evaluation and Review Technique (PERT) helps by using three estimates: Optimistic (O), Most Likely (ML), and Pessimistic (P). The expected duration is calculated with the formula: E = (O + 4×ML + P) ÷ 6. This gives more weight to the most likely scenario. We also use milestones on our schedule. These are zero-duration markers on the Gantt chart that represent a significant event, like 'Design Approved' or 'Project Launch.' They are useful for communicating progress to stakeholders without getting into task-level detail.",
          "visualPrompt": "An animated calculation of the PERT formula with an example. Then, show a Gantt chart where diamond-shaped icons appear on the timeline, labeled with milestone events like 'Phase 1 Complete'."
        }
      ],
      "flashcards": [
        {
          "id": "project-management-101-l04-f1",
          "front": "Gantt chart",
          "back": "A bar chart plotting tasks on a timeline with dependency arrows — the most popular project-schedule visualization."
        },
        {
          "id": "project-management-101-l04-f2",
          "front": "Critical Path Method (CPM)",
          "back": "Technique that identifies the longest chain of dependent tasks, determining the minimum project duration — zero float on critical tasks."
        },
        {
          "id": "project-management-101-l04-f3",
          "front": "PERT formula",
          "back": "Expected duration = (Optimistic + 4 × Most Likely + Pessimistic) ÷ 6 — a weighted three-point estimate."
        },
        {
          "id": "project-management-101-l04-f4",
          "front": "Float (slack)",
          "back": "The amount of time a non-critical task can be delayed without affecting the project end date — critical-path tasks have zero float."
        }
      ],
      "learningAids": [
        {
          "id": "project-management-101-l04-a1",
          "type": "image",
          "title": "Concept Card: Critical Path",
          "content": "A visual showing a simple network diagram with task durations. The critical path is highlighted, and the total project duration is calculated. A non-critical path is also shown to illustrate the concept of float."
        }
      ]
    },
    {
      "id": "project-management-101-l05",
      "title": "Resource Planning and Budgeting",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Create a resource plan assigning people, equipment, and materials to work packages",
        "Estimate project costs using analogous, parametric, and bottom-up techniques",
        "Measure project health with Earned Value Management (EVM) metrics"
      ],
      "chunks": [
        {
          "id": "project-management-101-l05-c1",
          "title": "Resource Planning",
          "content": "Resource planning involves identifying all the people, equipment, and materials needed for the project. A Responsibility Assignment Matrix (RAM), often in the form of a RACI chart, clarifies who does what. RACI stands for: Responsible (does the work), Accountable (owns the outcome, only one per task), Consulted (provides input), and Informed (is kept up-to-date). It's also important to avoid over-allocating resources, which means assigning someone too much work at once. Resource leveling is a technique to adjust the schedule to resolve these conflicts and ensure a balanced workload.",
          "visualPrompt": "A sample RACI chart in a grid format. Tasks are listed in rows, and team members (e.g., Ann, Bob, Chloe) are in columns. The cells are filled with R, A, C, or I to show responsibilities."
        },
        {
          "id": "project-management-101-l05-c2",
          "title": "Cost Estimation Techniques",
          "content": "There are three common ways to estimate project costs. (1) Analogous Estimation uses the actual cost of a similar past project as a baseline. It's fast but not very accurate. (2) Parametric Estimation uses a statistical relationship, like cost per unit (e.g., if one page costs $2,000, ten pages cost $20,000). (3) Bottom-Up Estimation involves estimating each individual work package and adding them all up. It's the most accurate but also the most time-consuming. Budgets should also include contingency reserves for known risks and management reserves for unknown risks.",
          "visualPrompt": "A three-panel graphic comparing estimation techniques. Panel 1 (Analogous): A picture of a past project with its price tag. Panel 2 (Parametric): A calculator showing a simple multiplication. Panel 3 (Bottom-Up): A WBS diagram with a price tag on each bottom-level work package, all summing to a total."
        },
        {
          "id": "project-management-101-l05-c3",
          "title": "Earned Value Management (EVM)",
          "content": "Earned Value Management (EVM) is a technique to measure project performance by combining scope, schedule, and cost. It uses three key metrics: Planned Value (PV) is the budgeted cost of work scheduled. Earned Value (EV) is the budgeted cost of work actually completed. Actual Cost (AC) is what you've spent so far. From these, we can calculate variances. A negative Cost Variance (CV = EV - AC) means you're over budget. A negative Schedule Variance (SV = EV - PV) means you're behind schedule. EVM gives an early warning if a project is going off track.",
          "visualPrompt": "An animated graph with Time on the x-axis and Cost on the y-axis. Three lines appear: PV (the plan), AC (the actual spending), and EV (the value of work done). Show a scenario where AC is above EV (over budget) and EV is below PV (behind schedule)."
        }
      ],
      "interactiveActivities": [
        {
          "id": "project-management-101-l05-a1",
          "title": "RACI Assignment",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "Responsible (R)",
              "right": "Person who does the work"
            },
            {
              "left": "Accountable (A)",
              "right": "Person who owns the outcome — only one per task"
            },
            {
              "left": "Consulted (C)",
              "right": "Subject-matter expert who provides input"
            },
            {
              "left": "Informed (I)",
              "right": "Stakeholder kept in the loop on progress"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "project-management-101-l05-f1",
          "front": "RACI chart",
          "back": "Responsibility Assignment Matrix — Responsible (does work), Accountable (owns outcome), Consulted (gives input), Informed (kept updated)."
        },
        {
          "id": "project-management-101-l05-f2",
          "front": "Bottom-up estimation",
          "back": "Estimate each work package individually and sum for total cost — most accurate but most time-consuming technique."
        },
        {
          "id": "project-management-101-l05-f3",
          "front": "Earned Value (EV)",
          "back": "The budgeted cost of work actually completed — compared against PV and AC to assess schedule and cost performance."
        },
        {
          "id": "project-management-101-l05-f4",
          "front": "Cost Performance Index (CPI)",
          "back": "EV ÷ AC — a CPI below 1.0 means the project is over budget; above 1.0 means under budget."
        }
      ],
      "learningAids": [
        {
          "id": "project-management-101-l05-a1",
          "type": "practice",
          "title": "EVM Calculator",
          "content": "Use a simple online calculator or spreadsheet where you can input PV, EV, and AC values to see the resulting CV, SV, CPI, and SPI, and get an interpretation of the project's health."
        }
      ]
    },
    {
      "id": "project-management-101-l06",
      "title": "Scheduling & Budgeting Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of scheduling, estimation, and earned-value analysis"
      ],
      "questions": [
        {
          "id": "project-management-101-l06-q1",
          "text": "If a critical-path task is delayed by 5 days, the project end date will:",
          "skillId": "project-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Not change — critical tasks have float"
            },
            {
              "id": "b",
              "text": "Be delayed by at least 5 days"
            },
            {
              "id": "c",
              "text": "Move earlier by 5 days"
            },
            {
              "id": "d",
              "text": "Remain the same because milestones absorb delays"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Critical-path tasks have zero float — any delay directly extends the project end date by the same amount."
        },
        {
          "id": "project-management-101-l06-q2",
          "text": "Using PERT: Optimistic = 4 days, Most Likely = 6 days, Pessimistic = 14 days. The expected duration is:",
          "skillId": "project-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "7 days"
            },
            {
              "id": "b",
              "text": "6 days"
            },
            {
              "id": "c",
              "text": "8 days"
            },
            {
              "id": "d",
              "text": "14 days"
            }
          ],
          "correctOptionId": "a",
          "explanation": "E = (4 + 4×6 + 14) ÷ 6 = (4 + 24 + 14) ÷ 6 = 42 ÷ 6 = 7 days."
        },
        {
          "id": "project-management-101-l06-q3",
          "text": "A project has EV = $80,000 and AC = $100,000. The Cost Performance Index (CPI) is:",
          "skillId": "project-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "0.80 — the project is over budget"
            },
            {
              "id": "b",
              "text": "1.25 — the project is under budget"
            },
            {
              "id": "c",
              "text": "1.00 — the project is on budget"
            },
            {
              "id": "d",
              "text": "0.50 — the project should be cancelled"
            }
          ],
          "correctOptionId": "a",
          "explanation": "CPI = EV ÷ AC = $80k ÷ $100k = 0.80. Below 1.0 means spending more than the value of work completed — over budget."
        },
        {
          "id": "project-management-101-l06-q4",
          "text": "In a RACI chart, only one person per task should be:",
          "skillId": "project-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Informed"
            },
            {
              "id": "b",
              "text": "Consulted"
            },
            {
              "id": "c",
              "text": "Accountable"
            },
            {
              "id": "d",
              "text": "Responsible"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Exactly one person is Accountable per task — they own the outcome. Multiple people can be Responsible, Consulted, or Informed."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "project-management-101-l07",
      "title": "Risk Management and Stakeholder Communication",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Build a risk register with probability, impact, and response strategies",
        "Calculate Expected Monetary Value (EMV) to prioritize risks",
        "Design a stakeholder communication plan using a power/interest grid"
      ],
      "chunks": [
        {
          "id": "project-management-101-l07-c1",
          "title": "Identifying and Assessing Risks",
          "content": "A risk is an uncertain event that, if it occurs, has a positive or negative effect on a project. We identify risks through brainstorming, interviews, and reviewing past projects. Each risk is logged in a Risk Register. We then assess each risk by its probability (how likely it is to happen) and its impact (how much it would affect the project). A Probability-Impact Matrix helps prioritize risks, with high-probability, high-impact risks needing the most attention. We can also calculate the Expected Monetary Value (EMV) by multiplying the probability by the financial impact (e.g., 30% chance of a $50k loss has an EMV of $15k).",
          "visualPrompt": "A 3x3 grid for the Probability-Impact Matrix. The y-axis is 'Probability' (Low, Medium, High) and the x-axis is 'Impact' (Low, Medium, High). The cells are colored green (bottom-left), yellow (diagonal), and red (top-right) to show risk priority."
        },
        {
          "id": "project-management-101-l07-c2",
          "title": "Risk Response Strategies",
          "content": "For negative risks (threats), there are four main strategies: Avoid (change the plan to eliminate the risk), Mitigate (reduce the probability or impact), Transfer (shift the risk to a third party, like buying insurance), or Accept (acknowledge the risk and have a backup plan). For positive risks (opportunities), we can: Exploit (ensure the opportunity happens), Enhance (increase its probability or impact), Share (partner with another group to capture it), or Accept (be ready to take advantage if it occurs). Every risk in the register should have an owner and a response plan.",
          "visualPrompt": "A two-column table. The left column is 'Threats' with icons for Avoid, Mitigate, Transfer, Accept. The right column is 'Opportunities' with icons for Exploit, Enhance, Share, Accept. Each strategy has a one-sentence description."
        },
        {
          "id": "project-management-101-l07-c3",
          "title": "Stakeholder Communication",
          "content": "Project managers spend up to 90% of their time communicating. A Communication Plan outlines who needs what information, how it will be delivered, and how often. To tailor communication, we can use a Power/Interest Grid to classify stakeholders. Those with high power and high interest must be managed closely. High power, low interest stakeholders should be kept satisfied. Low power, high interest stakeholders should be kept informed. And low power, low interest stakeholders only need to be monitored. This ensures the right people get the right information without overwhelming them.",
          "visualPrompt": "A 2x2 grid for the Power/Interest Grid. The y-axis is 'Power' (Low to High) and the x-axis is 'Interest' (Low to High). Each of the four quadrants is labeled with the corresponding strategy: Manage Closely, Keep Satisfied, Keep Informed, Monitor."
        }
      ],
      "flashcards": [
        {
          "id": "project-management-101-l07-f1",
          "front": "Risk Register",
          "back": "Central document listing every identified risk with its probability, impact, EMV, response strategy, and assigned owner."
        },
        {
          "id": "project-management-101-l07-f2",
          "front": "Expected Monetary Value (EMV)",
          "back": "Probability × dollar impact — used to compare risks and size contingency reserves (e.g., 30% × $50k = $15k)."
        },
        {
          "id": "project-management-101-l07-f3",
          "front": "Four threat response strategies",
          "back": "Avoid (eliminate), Mitigate (reduce), Transfer (shift to third party), Accept (acknowledge with contingency)."
        },
        {
          "id": "project-management-101-l07-f4",
          "front": "Power/Interest Grid",
          "back": "Stakeholder classification tool — High Power + High Interest = Manage Closely; Low Power + Low Interest = Monitor."
        }
      ]
    },
    {
      "id": "project-management-101-l08",
      "title": "Agile, Scrum & Kanban vs. Waterfall",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Compare Waterfall's sequential phases with Agile's iterative sprints",
        "Describe Scrum roles, ceremonies, and artifacts including burndown charts",
        "Explain Kanban's visual board and Work-In-Progress (WIP) limits"
      ],
      "chunks": [
        {
          "id": "project-management-101-l08-c1",
          "title": "Waterfall Methodology",
          "content": "The Waterfall methodology is a traditional, linear approach to project management. The project progresses through a sequence of distinct phases: Requirements, Design, Implementation, Testing, and Deployment. Each phase must be fully completed before the next one begins, like a waterfall flowing down a series of steps. This method works well for projects with very stable, well-understood requirements, such as in construction. However, it is very inflexible; making changes late in the project is difficult and expensive, as you can't easily go back 'up' the waterfall.",
          "visualPrompt": "A diagram showing a series of steps descending from top-left to bottom-right, each labeled with a Waterfall phase (Requirements, Design, etc.). A one-way arrow connects each step to the next."
        },
        {
          "id": "project-management-101-l08-c2",
          "title": "Scrum Framework",
          "content": "Scrum is an Agile framework that organizes work into short cycles called sprints, typically lasting 2-4 weeks. The goal of each sprint is to deliver a small, working piece of the final product. Key roles include the Product Owner (defines what to build), the Scrum Master (facilitates the process), and the Development Team (builds the product). Regular events, or ceremonies, like the Daily Stand-up and Sprint Retrospective, keep the team aligned and constantly improving. A burndown chart is used to track remaining work within a sprint, helping the team see if they are on track to meet their goal.",
          "visualPrompt": "A circular diagram illustrating the Scrum cycle. It starts with a Product Backlog, moves to Sprint Planning, then into a 'Sprint' circle containing Daily Stand-ups. The cycle ends with a Sprint Review and Retrospective, which feeds back into the backlog."
        },
        {
          "id": "project-management-101-l08-c3",
          "title": "Kanban and Choosing the Right Approach",
          "content": "Kanban is another Agile method focused on visualizing workflow and improving efficiency. It uses a Kanban board with columns representing stages of work (e.g., 'To Do,' 'In Progress,' 'Done'). Tasks move from left to right as they are completed. The key principle of Kanban is to limit Work-In-Progress (WIP). By setting a limit on how many tasks can be in the 'In Progress' column at once, teams avoid multitasking and can quickly identify bottlenecks. Unlike Scrum's fixed sprints, Kanban is a continuous flow system. Choose Agile when requirements are likely to change, and Waterfall when they are fixed and stable.",
          "visualPrompt": "An illustration of a Kanban board with three columns: 'To Do,' 'In Progress (WIP Limit: 2),' and 'Done.' Show several task cards in 'To Do,' two cards in 'In Progress,' and one in 'Done.' Highlight the WIP limit number."
        }
      ],
      "interactiveActivities": [
        {
          "id": "project-management-101-l08-a1",
          "title": "Agile or Waterfall?",
          "type": "sorting_buckets",
          "buckets": [
            "Agile (Scrum/Kanban)",
            "Waterfall"
          ],
          "items": [
            {
              "text": "Mobile app with evolving user requirements",
              "bucket": "Agile (Scrum/Kanban)"
            },
            {
              "text": "Bridge construction with fixed blueprints",
              "bucket": "Waterfall"
            },
            {
              "text": "Startup MVP needing rapid iteration",
              "bucket": "Agile (Scrum/Kanban)"
            },
            {
              "text": "FDA medical-device approval documentation",
              "bucket": "Waterfall"
            },
            {
              "text": "E-commerce site redesign with A/B testing",
              "bucket": "Agile (Scrum/Kanban)"
            },
            {
              "text": "Payroll system migration with strict regulations",
              "bucket": "Waterfall"
            },
            {
              "text": "Game development with player-feedback loops",
              "bucket": "Agile (Scrum/Kanban)"
            },
            {
              "text": "Government infrastructure with fixed contracts",
              "bucket": "Waterfall"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "project-management-101-l08-f1",
          "front": "Scrum sprint",
          "back": "A fixed-length iteration (typically 2 weeks) in which the team delivers a potentially shippable product increment."
        },
        {
          "id": "project-management-101-l08-f2",
          "front": "Three Scrum roles",
          "back": "Product Owner (prioritizes backlog), Scrum Master (facilitates process, removes blockers), Development Team (self-organizes to build the increment)."
        },
        {
          "id": "project-management-101-l08-f3",
          "front": "Kanban WIP limit",
          "back": "A cap on the number of items allowed in a workflow stage — prevents multitasking overload and reveals bottlenecks."
        },
        {
          "id": "project-management-101-l08-f4",
          "front": "Burndown chart",
          "back": "Graph tracking remaining work (y-axis) over time (x-axis) during a sprint — a line trending to zero by sprint end shows healthy progress."
        }
      ]
    },
    {
      "id": "project-management-101-l09",
      "title": "Risk & Methodology Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of risk management, Agile, Scrum, Kanban, and Waterfall"
      ],
      "questions": [
        {
          "id": "project-management-101-l09-q1",
          "text": "Buying insurance to cover a potential project loss is an example of:",
          "skillId": "project-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Risk avoidance"
            },
            {
              "id": "b",
              "text": "Risk mitigation"
            },
            {
              "id": "c",
              "text": "Risk transfer"
            },
            {
              "id": "d",
              "text": "Risk acceptance"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Insurance shifts the financial impact to a third party — the classic example of risk transfer."
        },
        {
          "id": "project-management-101-l09-q2",
          "text": "In Scrum, who is responsible for prioritizing the product backlog?",
          "skillId": "project-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Scrum Master"
            },
            {
              "id": "b",
              "text": "Product Owner"
            },
            {
              "id": "c",
              "text": "Development Team collectively"
            },
            {
              "id": "d",
              "text": "Project Sponsor"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Product Owner owns the backlog, ordering items by value to ensure the team always works on the highest-priority features."
        },
        {
          "id": "project-management-101-l09-q3",
          "text": "Kanban's core mechanism for preventing overload is:",
          "skillId": "project-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Fixed-length sprints"
            },
            {
              "id": "b",
              "text": "Work-In-Progress (WIP) limits"
            },
            {
              "id": "c",
              "text": "Daily stand-up meetings"
            },
            {
              "id": "d",
              "text": "A project charter"
            }
          ],
          "correctOptionId": "b",
          "explanation": "WIP limits cap how many items can be in a column at once, preventing multitasking and surfacing bottlenecks."
        },
        {
          "id": "project-management-101-l09-q4",
          "text": "A risk has a 40% probability and a $25,000 impact. Its EMV is:",
          "skillId": "project-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "$10,000"
            },
            {
              "id": "b",
              "text": "$25,000"
            },
            {
              "id": "c",
              "text": "$15,000"
            },
            {
              "id": "d",
              "text": "$40,000"
            }
          ],
          "correctOptionId": "a",
          "explanation": "EMV = 0.40 × $25,000 = $10,000 — used to compare risks and size reserves."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "project-management-101-l10",
      "title": "Mastery Quiz: Project Management Foundations",
      "type": "quiz",
      "duration": 12,
      "objectives": [
        "Synthesize all project management concepts across the module"
      ],
      "questions": [
        {
          "id": "project-management-101-l10-q1",
          "text": "A project's Schedule Performance Index (SPI) is 0.85. This means the project is:",
          "skillId": "project-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "15% ahead of schedule"
            },
            {
              "id": "b",
              "text": "15% behind schedule"
            },
            {
              "id": "c",
              "text": "On schedule"
            },
            {
              "id": "d",
              "text": "15% under budget"
            }
          ],
          "correctOptionId": "b",
          "explanation": "SPI = EV ÷ PV. An SPI of 0.85 means only 85% of planned work is complete — the project is 15% behind schedule."
        },
        {
          "id": "project-management-101-l10-q2",
          "text": "Which Scrum ceremony focuses on process improvement after a sprint?",
          "skillId": "project-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Sprint Planning"
            },
            {
              "id": "b",
              "text": "Daily Stand-up"
            },
            {
              "id": "c",
              "text": "Sprint Review"
            },
            {
              "id": "d",
              "text": "Sprint Retrospective"
            }
          ],
          "correctOptionId": "d",
          "explanation": "The Retrospective is where the team reflects on what went well, what didn't, and what to improve in the next sprint."
        },
        {
          "id": "project-management-101-l10-q3",
          "text": "The formal document authorizing a project and naming the project manager is the:",
          "skillId": "project-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Scope statement"
            },
            {
              "id": "b",
              "text": "Risk register"
            },
            {
              "id": "c",
              "text": "Project charter"
            },
            {
              "id": "d",
              "text": "Gantt chart"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The project charter is the 'birth certificate' of the project — it provides formal authorization and names the PM."
        },
        {
          "id": "project-management-101-l10-q4",
          "text": "Waterfall is generally preferred over Agile when:",
          "skillId": "project-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Requirements are evolving and feedback loops are critical"
            },
            {
              "id": "b",
              "text": "Requirements are well-defined, stable, and regulatory compliance demands documentation"
            },
            {
              "id": "c",
              "text": "The team wants to deliver working software every two weeks"
            },
            {
              "id": "d",
              "text": "The Product Owner changes priorities each sprint"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Waterfall's sequential, documentation-heavy approach excels when requirements are fixed and regulatory traceability is required."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 1,
          "apply": 1,
          "analyze": 1
        }
      }
    }
  ]
};
