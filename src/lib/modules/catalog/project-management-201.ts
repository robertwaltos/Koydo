import type { LearningModule } from "@/lib/modules/types";

export const project_management_201_Module: LearningModule = {
  "id": "project-management-201",
  "title": "Project Delivery Practice",
  "description": "A practical guide to intermediate project delivery, covering how to manage scope, create schedules, control budgets, map dependencies, and align stakeholders.",
  "subject": "Project Management",
  "tags": [
    "curriculum",
    "interactive",
    "project planning"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en",
    "es",
    "fr",
    "de",
    "ar",
    "hi",
    "zh",
    "ja",
    "ko",
    "ru"
  ],
  "thumbnail": "/placeholders/lesson-gantt-chart.svg",
  "learningObjectives": [
    "Define and document project scope using a Work Breakdown Structure (WBS).",
    "Develop a project schedule using critical path analysis and Gantt charts.",
    "Create and manage a project budget, tracking costs against baselines.",
    "Identify project dependencies and create a stakeholder communication plan."
  ],
  "lessons": [
    {
      "id": "project-management-201-l01",
      "title": "Mastering Project Scope",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "project-management-201-l01-a1",
          "type": "image",
          "title": "The Iron Triangle",
          "content": "A visual diagram showing the relationship between Scope, Time, and Cost. Stored at /visuals/iron-triangle.svg"
        },
        {
          "id": "project-management-201-l01-a2",
          "type": "animation",
          "title": "Creating a WBS",
          "content": "An animated walkthrough of breaking a large project into smaller deliverables using a Work Breakdown Structure. Stored at /animations/wbs-creation.mp4"
        }
      ]
    },
    {
      "id": "project-management-201-l02",
      "title": "Practice: Drafting a Scope Statement",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "1. Define the primary objective for the 'Mobile App Launch' project.",
          "2. List three key deliverables for the app.",
          "3. Identify two major exclusions (what is out of scope)."
        ]
      },
      "learningAids": [
        {
          "id": "project-management-201-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the provided template to draft a scope statement for the fictional 'Mobile App Launch' project. Stored at /templates/scope-statement.docx"
        }
      ]
    },
    {
      "id": "project-management-201-l03",
      "title": "Checkpoint: Scope Management",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "project-management-201-l03-q1",
          "text": "What is the primary purpose of a Work Breakdown Structure (WBS)?",
          "skillId": "project-management-201-skill-scope",
          "options": [
            {
              "id": "a",
              "text": "To decompose project deliverables into smaller, manageable components."
            },
            {
              "id": "b",
              "text": "To assign a final budget to the project."
            },
            {
              "id": "c",
              "text": "To list all project stakeholders."
            },
            {
              "id": "d",
              "text": "To create the final project schedule."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The WBS is a foundational tool used to break down the total scope of work into manageable sections, ensuring all deliverables are accounted for."
        },
        {
          "id": "project-management-201-l03-q2",
          "text": "A client asks to add a new feature not in the original plan, without increasing time or budget. This is a classic example of:",
          "skillId": "project-management-201-skill-scope",
          "options": [
            {
              "id": "a",
              "text": "Risk mitigation."
            },
            {
              "id": "b",
              "text": "Scope creep."
            },
            {
              "id": "c",
              "text": "A project milestone."
            },
            {
              "id": "d",
              "text": "Resource allocation."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Scope creep refers to uncontrolled changes or continuous growth in a project's scope, which can jeopardize the project's success."
        }
      ]
    },
    {
      "id": "project-management-201-l04",
      "title": "Building the Project Schedule",
      "type": "video",
      "duration": 9,
      "learningAids": [
        {
          "id": "project-management-201-l04-a1",
          "type": "image",
          "title": "Critical Path Method",
          "content": "A diagram illustrating the longest sequence of tasks that determines the project's minimum duration. Stored at /visuals/critical-path.svg"
        },
        {
          "id": "project-management-201-l04-a2",
          "type": "animation",
          "title": "Linking Tasks in a Gantt Chart",
          "content": "An animation showing how to create dependencies (e.g., Finish-to-Start) between tasks on a Gantt chart. Stored at /animations/gantt-linking.mp4"
        }
      ]
    },
    {
      "id": "project-management-201-l05",
      "title": "Practice: Constructing a Gantt Chart",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "1. List the main tasks for building a new website.",
          "2. Estimate the duration for each task.",
          "3. Identify a dependency (e.g., 'Design Mockups' must finish before 'Develop Frontend')."
        ]
      },
      "learningAids": [
        {
          "id": "project-management-201-l05-a1",
          "type": "practice",
          "title": "Gantt Chart Builder",
          "content": "Drag and drop tasks onto the timeline to build a simple Gantt chart for the website project. Stored at /interactives/gantt-builder.html"
        }
      ]
    },
    {
      "id": "project-management-201-l06",
      "title": "Checkpoint: Schedule Management",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "project-management-201-l06-q1",
          "text": "On a Gantt chart, what does the 'critical path' represent?",
          "skillId": "project-management-201-skill-schedule",
          "options": [
            {
              "id": "a",
              "text": "The shortest path to project completion."
            },
            {
              "id": "b",
              "text": "The tasks with the lowest cost."
            },
            {
              "id": "c",
              "text": "The longest sequence of tasks that determines the minimum project duration."
            },
            {
              "id": "d",
              "text": "The tasks that can be delayed without affecting the project timeline."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Any delay in a task on the critical path will directly delay the project's completion date, making it critical to monitor."
        },
        {
          "id": "project-management-201-l06-q2",
          "text": "What is 'task dependency' in project scheduling?",
          "skillId": "project-management-201-skill-schedule",
          "options": [
            {
              "id": "a",
              "text": "A relationship where one task cannot start or finish until another has."
            },
            {
              "id": "b",
              "text": "Two tasks that are completely unrelated."
            },
            {
              "id": "c",
              "text": "A task that depends on the project manager's approval."
            },
            {
              "id": "d",
              "text": "A task that has no impact on other tasks."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Dependencies define the logical sequence of work. The most common type is 'Finish-to-Start,' where one task must finish before the next can begin."
        }
      ]
    },
    {
      "id": "project-management-201-l07",
      "title": "Controlling Project Costs",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "project-management-201-l07-a1",
          "type": "image",
          "title": "Cost Baseline S-Curve",
          "content": "A chart showing the planned budget (baseline) versus actual spending over time. Stored at /visuals/s-curve.svg"
        },
        {
          "id": "project-management-201-l07-a2",
          "type": "animation",
          "title": "Calculating Cost Variance",
          "content": "A step-by-step animation explaining the formula for Cost Variance (CV = EV - AC) to determine if a project is over or under budget. Stored at /animations/cost-variance.mp4"
        }
      ]
    },
    {
      "id": "project-management-201-l08",
      "title": "Practice: Creating a Project Budget",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "1. List three cost categories for an office relocation project (e.g., Labor, Materials, Permits).",
          "2. Assign an estimated cost to each category.",
          "3. Add a 10% contingency reserve to the total."
        ]
      },
      "learningAids": [
        {
          "id": "project-management-201-l08-a1",
          "type": "practice",
          "title": "Budget Spreadsheet",
          "content": "Fill out a budget spreadsheet template for the office relocation project. Stored at /templates/budget-spreadsheet.xlsx"
        }
      ]
    },
    {
      "id": "project-management-201-l09",
      "title": "Checkpoint: Budget Management",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "project-management-201-l09-q1",
          "text": "What is a 'contingency reserve' used for in a project budget?",
          "skillId": "project-management-201-skill-budget",
          "options": [
            {
              "id": "a",
              "text": "To pay for new features requested by the client."
            },
            {
              "id": "b",
              "text": "To cover costs from identified risks ('known unknowns')."
            },
            {
              "id": "c",
              "text": "To give the project team a performance bonus."
            },
            {
              "id": "d",
              "text": "To cover costs from unforeseen events ('unknown unknowns')."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Contingency reserves are allocated for identified risks. A separate 'management reserve' is used for unforeseen events."
        },
        {
          "id": "project-management-201-l09-q2",
          "text": "A 'cost baseline' is:",
          "skillId": "project-management-201-skill-budget",
          "options": [
            {
              "id": "a",
              "text": "The initial, rough estimate of the project's cost."
            },
            {
              "id": "b",
              "text": "The total amount of money the project has spent to date."
            },
            {
              "id": "c",
              "text": "The approved, time-phased budget used to measure and monitor cost performance."
            },
            {
              "id": "d",
              "text": "A forecast of the final project cost."
            }
          ],
          "correctOptionId": "c",
          "explanation": "The cost baseline is the official, approved budget that actual costs are measured against throughout the project lifecycle."
        }
      ]
    },
    {
      "id": "project-management-201-l10",
      "title": "Final Capstone: Integrated Delivery",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "project-management-201-l10-q1",
          "text": "Your project is behind schedule. According to the Iron Triangle, what is the MOST likely trade-off to get back on track without sacrificing scope?",
          "skillId": "project-management-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Reducing the quality of deliverables."
            },
            {
              "id": "b",
              "text": "Increasing the budget to add more resources."
            },
            {
              "id": "c",
              "text": "Removing a key stakeholder from the project."
            },
            {
              "id": "d",
              "text": "Ignoring the schedule and hoping for the best."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Iron Triangle shows that scope, time, and cost are interrelated. To shorten time (schedule) without reducing scope, you typically need to increase cost (e.g., for overtime or more staff)."
        },
        {
          "id": "project-management-201-l10-q2",
          "text": "The marketing team must approve designs before the development team can start coding. This is an example of a(n):",
          "skillId": "project-management-201-skill-dependencies",
          "options": [
            {
              "id": "a",
              "text": "Project risk."
            },
            {
              "id": "b",
              "text": "External dependency."
            },
            {
              "id": "c",
              "text": "Project assumption."
            },
            {
              "id": "d",
              "text": "Budget constraint."
            }
          ],
          "correctOptionId": "b",
          "explanation": "This is an external dependency because the development team's work depends on a team outside of their direct control (marketing)."
        },
        {
          "id": "project-management-201-l10-q3",
          "text": "A high-power, low-interest stakeholder should typically be:",
          "skillId": "project-management-201-skill-stakeholders",
          "options": [
            {
              "id": "a",
              "text": "Managed closely with frequent, detailed updates."
            },
            {
              "id": "b",
              "text": "Kept satisfied, but not overwhelmed with information."
            },
            {
              "id": "c",
              "text": "Kept informed with general communications."
            },
            {
              "id": "d",
              "text": "Monitored with minimal effort."
            }
          ],
          "correctOptionId": "b",
          "explanation": "According to the Power/Interest grid, high-power/low-interest stakeholders have significant influence but don't need constant updates. The strategy is to keep them satisfied to prevent them from becoming a problem."
        }
      ]
    }
  ]
};
