import type { LearningModule } from "@/lib/modules/types";

export const ProjectManagement101Module: LearningModule = {
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
  "version": "2.0.0",
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
          "content": "The Project Management Institute (PMI) defines a project as a special task that is temporary and aims to create something new, whether it's a product, service, or outcome. When we say 'temporary,' we mean that every project has a clear start and finish. This means that once the project is completed, it will not continue indefinitely. The term 'unique' indicates that the result of the project has not been made in exactly the same way before, which makes each project special and different from others. For example, if a team decides to build a new online store, that task is considered a project because it has specific goals and a timeline. On the other hand, operations refer to the everyday tasks that keep a business running smoothly. These tasks are ongoing and repetitive, such as processing payroll, answering customer questions, or restocking shelves. For instance, while creating the online store is a project, the daily maintenance of that store, like updating product listings or managing customer inquiries, is considered an operation. Understanding the difference between projects and operations is important because projects require careful planning and coordination to achieve their unique goals. In contrast, operations follow established routines that help maintain the business's efficiency. This distinction helps ensure that resources are used effectively and that both projects and operations can meet their objectives successfully. By recognizing these differences, individuals can better manage their time and efforts, leading to more successful outcomes in both areas.\nContext recap: The Project Management Institute (PMI) defines a project as a special task that is temporary and aims to create something new, whether it's a product, service, or outcome. When we say 'temporary,' we mean that every project has a clear start and finish. This means that once the project is completed, it will not continue indefinitely. The term 'unique' indicates that the result of the project has not been made in exactly the same way before, which makes each project special and different from others.\nWhy this matters: Projects vs. Operations helps learners in Project Management connect ideas from Project Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "project-management-101-l01-c2",
          "title": "The Triple Constraint (Iron Triangle)",
          "content": "In every project, there are three key factors that play a crucial role in determining its success. These factors are often called the 'Iron Triangle' and include Scope, Time, and Cost. Let's break these down further to understand their importance.\n1. **Scope**: This refers to the specific work that needs to be completed and the deliverables that will be produced at the end of the project. It defines what is included in the project and what is not. For example, if you are working on a school event, the scope would include all the activities, materials, and outcomes you plan to achieve.\n2. **Time**: This factor is all about the schedule and deadlines. It involves planning how long each part of the project will take and when everything needs to be finished. If you have a deadline for your project, you need to manage your time wisely to ensure everything is completed on schedule.\n3. **Cost**: Cost refers to the budget and resources that will be used throughout the project. This includes money, materials, and even the time of the people working on the project. Keeping track of costs is essential to avoid overspending.\nThese three factors are interconnected, meaning that if you change one, at least one of the others will also need to be adjusted. For example, if you decide to add more features to your project (increasing the scope) but do not extend the deadline, you may need to spend more money to ensure everything gets done on time. Conversely, if you reduce the budget without cutting back on the work, the project may take longer to finish.\nAt the center of the Iron Triangle is **Quality**. Quality represents the standard of the work produced and is the result of effectively balancing Scope, Time, and Cost. A project manager's main responsibility is to negotiate these trade-offs while ensuring that the quality of the project remains high. This balancing act is essential for delivering successful projects that meet expectations.\nContext recap: In every project, there are three key factors that play a crucial role in determining its success. These factors are often called the 'Iron Triangle' and include Scope, Time, and Cost. Let's break these down further to understand their importance. 1.\nWhy this matters: The Triple Constraint (Iron Triangle) helps learners in Project Management connect ideas from Project Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints.\nGuided check: Ask yourself, \"What is the claim?\", \"Which evidence is strongest?\", and \"What would change my conclusion?\" Use the terms project, time, scope, cost, will, iron, triangle, factors while answering to reinforce vocabulary and precision."
        },
        {
          "id": "project-management-101-l01-c3",
          "title": "The Five Process Groups",
          "content": "The Project Management Institute, often referred to as PMI, has developed a structured way to manage projects by organizing the work into five main process groups. These groups can sometimes overlap, but they generally follow a specific order that helps ensure the project runs smoothly. Let's break down each of these groups: (1) **Initiating** — This is the very first step where the project is defined at a high level. During this phase, the project manager secures authorization for the project through a document called the project charter. It's also important to identify stakeholders, which are individuals or groups who have an interest in the project and can influence its outcome. (2) **Planning** — In this stage, the project manager creates a detailed roadmap for the project. This includes writing a scope statement that outlines what the project will achieve, developing a Work Breakdown Structure (WBS) that breaks the project into smaller, manageable parts, and creating a schedule that outlines when tasks will be completed. Additionally, a budget is established to determine how much money will be needed, a risk register is created to identify potential challenges, and a communication plan is developed to ensure everyone stays informed. (3) **Executing** — This is where the project team gets to work! They carry out the tasks that were planned and produce the deliverables, which are the tangible outcomes of the project. (4) **Monitoring & Controlling** — During this phase, the project manager tracks the project's progress against the plan. This involves managing any changes that arise through a process called change control, and ensuring that the quality of the work meets the required standards. (5) **Closing** — Finally, once the project is completed, the final product is handed over to the stakeholders. The project manager documents any lessons learned throughout the project, releases any resources that were allocated, and the team takes time to celebrate their success. It's important to note that throughout the entire project lifecycle, the planning and monitoring phases require the most effort from project managers, as they are crucial for keeping the project on track and ensuring its success.\nContext recap: The Project Management Institute, often referred to as PMI, has developed a structured way to manage projects by organizing the work into five main process groups. These groups can sometimes overlap, but they generally follow a specific order that helps ensure the project runs smoothly. Let's break down each of these groups: (1) **Initiating** — This is the very first step where the project is defined at a high level. During this phase, the project manager secures authorization for the project through a document called the project charter.\nWhy this matters: The Five Process Groups helps learners in Project Management connect ideas from Project Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "project-management-101-l01-f1",
          "front": "Project (PMI definition)",
          "back": "A temporary endeavor undertaken to create a unique product, service, or result"
        },
        {
          "id": "project-management-101-l01-f2",
          "front": "Triple Constraint (Iron Triangle)",
          "back": "Scope, Time, and Cost — change one side and at least one other must adjust; Quality sits at the center"
        },
        {
          "id": "project-management-101-l01-f3",
          "front": "Five process groups in order",
          "back": "Initiating → Planning → Executing → Monitoring & Controlling → Closing"
        },
        {
          "id": "project-management-101-l01-f4",
          "front": "Project Charter",
          "back": "The document that formally authorizes the project, names the PM, states objectives, and estimates budget"
        }
      ],
      "learningAids": [
        {
          "id": "project-management-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "The scope statement is an important document that serves as a contract between the project team and the stakeholders, who are the people interested in the project's success. This statement clearly outlines what the project will deliver and what it will not deliver, ensuring everyone has the same understanding. A well-crafted scope statement includes several key elements that help define the project:\n1. **Deliverables**: These are the tangible outputs of the project. For example, if the project is to create a website, a deliverable might be 'a ten-page responsive website' that works well on both computers and mobile devices.\n2. **Acceptance Criteria**: These are measurable conditions that help verify the quality of the deliverables. For instance, one acceptance criterion for the website could be that 'it loads in under 2 seconds on a 4G network.' This means that the website should be fast enough to keep users happy.\n3. **Exclusions**: This part specifies what is not included in the project. For example, if the project is focused on creating a website, it might state 'no e-commerce or blog features' to clarify that those elements are outside the project's scope.\n4. **Constraints**: These are limitations that the project must work within, such as a budget ceiling or deadlines set by regulations. For example, if the budget for the project is $5,000, that would be a constraint.\n5. **Assumptions**: These are conditions that are taken as true for the project to proceed. An example might be 'the client will provide logo files by week 2,' which means the project team is relying on the client to deliver those files on time.\nThe scope statement is essential because it directly informs the Work Breakdown Structure (WBS), which is a tool that helps the project team organize and manage their tasks effectively. By having a clear scope statement, everyone involved in the project can stay focused and work towards the same goals, making the project more likely to succeed.\nContext recap: The scope statement is an important document that serves as a contract between the project team and the stakeholders, who are the people interested in the project's success. This statement clearly outlines what the project will deliver and what it will not deliver, ensuring everyone has the same understanding. A well-crafted scope statement includes several key elements that help define the project:\n1. **Deliverables**: These are the tangible outputs of the project.\nWhy this matters: Defining Scope helps learners in Project Management connect ideas from Project Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "project-management-101-l02-c2",
          "title": "Building a Work Breakdown Structure",
          "content": "A Work Breakdown Structure, often called WBS, is an important tool in project management that helps teams organize and manage their work effectively. Imagine you have a big project, like redesigning a website. The WBS helps break down this large project into smaller, more manageable parts, making it easier to understand and tackle. At the very top of the WBS, you have the overall project itself, which in our example is the 'Website Redesign.' This is like the title of a book.\nThe next level of the WBS outlines the major deliverables or phases of the project. For our website redesign, these phases might include 'Design,' 'Development,' 'Testing,' and 'Launch.' Think of these as the chapters in our book that describe the main parts of the story.\nAs we go further down the WBS, we break the work into even smaller pieces. For instance, under the 'Design' phase, we might have specific tasks like creating 'Wireframes,' 'Mockups,' and a 'Style Guide.' These tasks are like the paragraphs in our chapters that detail exactly what needs to be done.\nOne important guideline to remember when creating a WBS is the 100% rule. This rule states that each level of the WBS must include all the work that is part of the parent level above it. This means that nothing should be left out, and nothing should be added that doesn't belong. It's all about being thorough and precise.\nTo make this process easier, there are various tools available, such as Microsoft Project, Jira, and Monday.com, which can automatically create WBS diagrams. These tools help teams visualize their tasks and ensure that everyone understands their responsibilities. By using a WBS, teams can work more efficiently and stay organized throughout the project.\nContext recap: A Work Breakdown Structure, often called WBS, is an important tool in project management that helps teams organize and manage their work effectively. Imagine you have a big project, like redesigning a website. The WBS helps break down this large project into smaller, more manageable parts, making it easier to understand and tackle. At the very top of the WBS, you have the overall project itself, which in our example is the 'Website Redesign.' This is like the title of a book.\nWhy this matters: Building a Work Breakdown Structure helps learners in Project Management connect ideas from Project Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "project-management-101-l02-c3",
          "title": "Scope Creep & Change Control",
          "content": "Scope creep is a term used in project management to describe a situation where the scope of a project expands uncontrollably without making necessary adjustments to the time, budget, or resources allocated for the project. This often starts with a seemingly harmless request from a stakeholder, such as asking for 'just one small tweak' to the project. However, these small changes can accumulate and lead to major delays and cost overruns, making it difficult to complete the project on time and within budget. To effectively prevent scope creep, it is crucial to implement a formal change-control process. This process consists of several important steps: (1) First, document every change request in writing. This helps maintain a clear record of what changes are being requested. (2) Next, analyze how the proposed change will impact the project's schedule, budget, quality, and potential risks. Understanding these impacts is vital for making informed decisions. (3) After that, present the options and findings to the Change Control Board (CCB) or the project sponsor for their approval. (4) If the change is approved, make sure to update the project plan, budget, and schedule to reflect the new information. (5) Finally, communicate the changes to all stakeholders involved in the project to ensure that everyone is aware of the updates. Remember, saying 'yes' to a new feature without following this structured process can mean saying 'no' to meeting the original deadline, which can affect the overall success of the project.\nContext recap: Scope creep is a term used in project management to describe a situation where the scope of a project expands uncontrollably without making necessary adjustments to the time, budget, or resources allocated for the project. This often starts with a seemingly harmless request from a stakeholder, such as asking for 'just one small tweak' to the project. However, these small changes can accumulate and lead to major delays and cost overruns, making it difficult to complete the project on time and within budget. To effectively prevent scope creep, it is crucial to implement a formal change-control process.\nWhy this matters: Scope Creep & Change Control helps learners in Project Management connect ideas from Project Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
          "back": "Document defining deliverables, exclusions, constraints, assumptions, and acceptance criteria for the project"
        },
        {
          "id": "project-management-101-l02-f2",
          "front": "Work Breakdown Structure (WBS)",
          "back": "Hierarchical decomposition of total project scope into work packages — follows the 100 % rule so nothing is missed or duplicated"
        },
        {
          "id": "project-management-101-l02-f3",
          "front": "Scope creep",
          "back": "Uncontrolled expansion of project scope without adjusting time, cost, or resources — the #1 project killer"
        },
        {
          "id": "project-management-101-l02-f4",
          "front": "Change Control Board (CCB)",
          "back": "A group authorized to review, approve, or reject change requests and ensure impacts are evaluated before implementation"
        }
      ],
      "learningAids": [
        {
          "id": "project-management-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
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
          "text": "The 100 % rule in a WBS means:",
          "skillId": "project-management-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Every level must capture all the work of its parent — no more, no less"
            },
            {
              "id": "b",
              "text": "The project must be 100 % complete before any testing"
            },
            {
              "id": "c",
              "text": "100 % of the budget must be spent"
            },
            {
              "id": "d",
              "text": "All team members must work 100 % of the time"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 100 % rule ensures the WBS accounts for all deliverable work without gaps or overlap."
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
          "content": "Scheduling is a crucial step in project management that helps us turn the Work Breakdown Structure (WBS) into a detailed plan that includes specific timelines. This means we need to think carefully about three key aspects for each work package: duration, resources, and dependencies.\n1. **Duration**: This refers to how long each task will take to complete. It’s important to make a realistic estimate so that we can plan our time effectively.\n2. **Resources**: Here, we consider who will be responsible for completing each task. This could be team members, tools, or materials needed to get the job done.\n3. **Dependencies**: These are the relationships between tasks. We need to identify what tasks must be completed before others can start. The Project Management Institute (PMI) outlines four main types of dependencies:\n   - **Finish-to-Start (FS)**: This is the most common type. It means that Task A must be completed before Task B can begin. For example, you need to pour the foundation before you can start framing the walls of a building.\n   - **Start-to-Start (SS)**: In this case, Tasks A and B can start at the same time. This is useful when two tasks can be done simultaneously.\n   - **Finish-to-Finish (FF)**: Here, Tasks A and B must both be completed together. This is often used when the completion of one task is directly tied to the completion of another.\n   - **Start-to-Finish (SF)**: This type is quite rare and is mainly used in specific situations like just-in-time manufacturing. It means that Task A must start before Task B can finish.\nBy accurately identifying these dependencies, we can avoid scheduling conflicts and better understand the project's critical path. The critical path is the sequence of tasks that determines the shortest time to complete the project. Knowing this helps us ensure that everything stays on track and is completed on time.\nContext recap: Scheduling is a crucial step in project management that helps us turn the Work Breakdown Structure (WBS) into a detailed plan that includes specific timelines. This means we need to think carefully about three key aspects for each work package: duration, resources, and dependencies. 1. **Duration**: This refers to how long each task will take to complete.\nWhy this matters: From WBS to Schedule helps learners in Project Management connect ideas from Project Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "project-management-101-l04-c2",
          "title": "Gantt Charts and the Critical Path",
          "content": "A Gantt chart is a helpful visual tool that shows tasks as horizontal bars on a timeline. Each bar represents a specific task, and arrows between the bars indicate how tasks are related to one another, or in other words, which tasks depend on others to be completed first. This chart gives you a clear picture of what tasks need to be done, when they are scheduled to happen, and the order in which they should be completed.\nThe Critical Path Method, often abbreviated as CPM, is an important technique used in project management. It helps identify the longest sequence of tasks that depend on each other, which is crucial because it determines the shortest time needed to finish the entire project. If any task on this critical path is delayed, it will cause the whole project to be delayed as well.\nOn the other hand, there are tasks that are not on the critical path. These tasks have what is known as 'total float' or 'slack.' This means they have some extra time available before they start affecting the project's completion date. For instance, if you have a task that is planned to take five days but has three days of float, you can delay this task by up to three days without pushing back the overall project deadline.\nTo make project management easier, there are various tools available, such as Microsoft Project, Primavera P6, and Jira. These tools often come with timeline views that can automatically calculate the critical path for you, helping you manage your projects more effectively and efficiently. By using these tools, you can keep track of your tasks and ensure that everything stays on schedule, which is essential for successful project management.\nContext recap: A Gantt chart is a helpful visual tool that shows tasks as horizontal bars on a timeline. Each bar represents a specific task, and arrows between the bars indicate how tasks are related to one another, or in other words, which tasks depend on others to be completed first. This chart gives you a clear picture of what tasks need to be done, when they are scheduled to happen, and the order in which they should be completed. The Critical Path Method, often abbreviated as CPM, is an important technique used in project management.\nWhy this matters: Gantt Charts and the Critical Path helps learners in Project Management connect ideas from Project Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "project-management-101-l04-c3",
          "title": "PERT Estimation and Milestones",
          "content": "Estimating how long tasks will take in a project can be tricky, but there's a helpful method called the Program Evaluation and Review Technique, or PERT for short. PERT uses three different estimates for each task to give a clearer picture of how long it might take. First, we have the Optimistic estimate (O), which is the best-case scenario where everything goes perfectly. Next, we have the Most Likely estimate (ML), which is what we think will happen based on our experience. Finally, there's the Pessimistic estimate (P), which is the worst-case scenario where things might go wrong. To find the expected duration (E) of a task, we use a special formula: E = (O + 4×ML + P) ÷ 6. This formula helps us focus more on the most likely outcome while still considering the other possibilities. For example, if we think a task could take 3 days at best, 5 days is the most realistic, and 13 days if everything goes wrong, we can calculate the expected duration as follows: E = (3 + 20 + 13) ÷ 6, which equals 6 days.\nIn addition to estimating time, we also use milestones in project management. Milestones are like important checkpoints on a Gantt chart, which is a visual tool that helps us see the timeline of a project. These milestones mark significant events, such as when the design is approved, when we launch a beta version, or when we officially go live with the project. They are helpful because they show everyone involved how the project is progressing without getting bogged down in too many details about each individual task. This way, stakeholders can easily understand where we are in the project and what’s coming next.\nContext recap: Estimating how long tasks will take in a project can be tricky, but there's a helpful method called the Program Evaluation and Review Technique, or PERT for short. PERT uses three different estimates for each task to give a clearer picture of how long it might take. First, we have the Optimistic estimate (O), which is the best-case scenario where everything goes perfectly. Next, we have the Most Likely estimate (ML), which is what we think will happen based on our experience.\nWhy this matters: PERT Estimation and Milestones helps learners in Project Management connect ideas from Project Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "project-management-101-l04-f1",
          "front": "Gantt chart",
          "back": "A bar chart plotting tasks on a timeline with dependency arrows — the most popular project-schedule visualization"
        },
        {
          "id": "project-management-101-l04-f2",
          "front": "Critical Path Method (CPM)",
          "back": "Technique that identifies the longest chain of dependent tasks, determining the minimum project duration — zero float on critical tasks"
        },
        {
          "id": "project-management-101-l04-f3",
          "front": "PERT formula",
          "back": "Expected duration = (Optimistic + 4 × Most Likely + Pessimistic) ÷ 6 — a weighted three-point estimate"
        },
        {
          "id": "project-management-101-l04-f4",
          "front": "Float (slack)",
          "back": "The amount of time a non-critical task can be delayed without affecting the project end date — critical-path tasks have zero float"
        }
      ],
      "learningAids": [
        {
          "id": "project-management-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "Resource planning is an essential part of managing any project. It helps us answer important questions like: Who do we need to help us? What tools or equipment will we require? When will we need these resources, and for how long will they be involved? Resources can be people, such as developers who write code, designers who create visuals, and analysts who study data. They can also include equipment like servers that host applications and testing devices that help us ensure everything works correctly. Additionally, materials such as software licenses and office supplies are also considered resources.\nTo make sure everyone knows their role in the project, we use a tool called a Responsibility Assignment Matrix (RAM). This is often displayed as a RACI chart, which stands for Responsible, Accountable, Consulted, and Informed. Each role is defined as follows:\n- Responsible: This is the person who actually does the work.\n- Accountable: This person is ultimately responsible for the outcome of the task, and there should only be one person in this role to avoid confusion.\n- Consulted: These are individuals who provide valuable input and advice during the project.\n- Informed: These are the people who need to be kept updated on the project's progress.\nOne common mistake in resource planning is over-allocating tasks, which means giving one person too many responsibilities at once. This can lead to stress and mistakes. To prevent this from happening, we can use a technique called resource leveling. This involves adjusting the schedule of non-critical tasks so that no one feels overwhelmed and everyone can work effectively. By doing this, we ensure that our project runs smoothly and that all team members can contribute their best work without feeling overloaded.\nContext recap: Resource planning is an essential part of managing any project. It helps us answer important questions like: Who do we need to help us? What tools or equipment will we require? When will we need these resources, and for how long will they be involved?\nWhy this matters: Resource Planning helps learners in Project Management connect ideas from Project Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "project-management-101-l05-c2",
          "title": "Cost Estimation Techniques",
          "content": "When managing a project, it's essential to estimate costs accurately to ensure everything runs smoothly. There are three main techniques that project managers use for cost estimation:\n1. **Analogous Estimation**: This technique involves looking at the actual costs of similar projects that have been completed in the past. By using these past costs as a reference, project managers can quickly estimate the budget for the current project. However, while this method is fast, it may not always provide the most accurate results because every project has its unique challenges and circumstances.\n2. **Parametric Estimation**: This method uses statistical relationships to estimate costs. For instance, if creating one web page costs $2,000, then creating ten web pages would approximately cost $20,000. This technique can be quite useful when there is reliable data available, as it allows for quicker calculations based on established patterns.\n3. **Bottom-Up Estimation**: This is a more detailed approach where project managers estimate the costs of each individual work package or task within the project. After estimating each part, they add all these costs together to get the total project cost. Although this method is the most accurate, it can take a lot of time and effort to complete, as it requires a thorough understanding of every aspect of the project.\nIn addition to these techniques, it's crucial to include contingency reserves in your budget. These reserves are set aside for known risks that might occur during the project. Additionally, management reserves are funds allocated for unexpected issues that may arise, often referred to as 'unknown unknowns.' Finally, the cost baseline is the approved budget that is organized over time, allowing project managers to track actual spending against it. However, it's important to note that the cost baseline does not include management reserves, as these are kept separate for unforeseen circumstances.\nContext recap: When managing a project, it's essential to estimate costs accurately to ensure everything runs smoothly. There are three main techniques that project managers use for cost estimation:\n1. **Analogous Estimation**: This technique involves looking at the actual costs of similar projects that have been completed in the past. By using these past costs as a reference, project managers can quickly estimate the budget for the current project.\nWhy this matters: Cost Estimation Techniques helps learners in Project Management connect ideas from Project Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "project-management-101-l05-c3",
          "title": "Earned Value Management (EVM)",
          "content": "Earned Value Management (EVM) is a powerful tool used in project management that helps you keep track of how well a project is doing in terms of its scope, schedule, and cost. It combines these three important aspects into three key metrics that can be measured at any time during the project. Let's break these down:\n1. **Planned Value (PV)**: This is the budgeted cost of the work that was scheduled to be completed by this point in time. Think of it as a plan that shows how much money you expected to spend on the project by now.\n2. **Earned Value (EV)**: This metric represents the budgeted cost of the work that has actually been completed. It tells you how much of the project you have successfully finished according to your budget.\n3. **Actual Cost (AC)**: This is the real amount of money that has been spent on the project so far. It reflects the actual expenses incurred.\nUsing these three metrics, you can calculate important indicators that help you understand the project's performance:\n- **Schedule Variance (SV)**: This is calculated by subtracting Planned Value from Earned Value (SV = EV − PV). If this number is negative, it means the project is behind schedule.\n- **Cost Variance (CV)**: This is found by subtracting Actual Cost from Earned Value (CV = EV − AC). A negative value here indicates that the project is over budget.\n- **Cost Performance Index (CPI)**: This is calculated by dividing Earned Value by Actual Cost (CPI = EV ÷ AC). If this value is below 1.0, it means the project is over budget.\n- **Schedule Performance Index (SPI)**: This is calculated by dividing Earned Value by Planned Value (SPI = EV ÷ PV). A value below 1.0 indicates that the project is behind schedule.\nEVM is a valuable method because it provides an objective way to check the health of a project. This means you can identify potential issues long before subjective status reports might reveal any problems. By using EVM, project managers can make informed decisions and take corrective actions to keep the project on track.\nContext recap: Earned Value Management (EVM) is a powerful tool used in project management that helps you keep track of how well a project is doing in terms of its scope, schedule, and cost. It combines these three important aspects into three key metrics that can be measured at any time during the project. Let's break these down:\n1. **Planned Value (PV)**: This is the budgeted cost of the work that was scheduled to be completed by this point in time.\nWhy this matters: Earned Value Management (EVM) helps learners in Project Management connect ideas from Project Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "back": "Responsibility Assignment Matrix — Responsible (does work), Accountable (owns outcome), Consulted (gives input), Informed (kept updated)"
        },
        {
          "id": "project-management-101-l05-f2",
          "front": "Bottom-up estimation",
          "back": "Estimate each work package individually and sum for total cost — most accurate but most time-consuming technique"
        },
        {
          "id": "project-management-101-l05-f3",
          "front": "Earned Value (EV)",
          "back": "The budgeted cost of work actually completed — compared against PV and AC to assess schedule and cost performance"
        },
        {
          "id": "project-management-101-l05-f4",
          "front": "Cost Performance Index (CPI)",
          "back": "EV ÷ AC — a CPI below 1.0 means the project is over budget; above 1.0 means under budget"
        }
      ],
      "learningAids": [
        {
          "id": "project-management-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
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
          "content": "In the world of project management, understanding risks is crucial for success. A risk is defined as an uncertain event or condition that could happen and might have either a positive or negative effect on the project's goals. For instance, a risk could be a delay in receiving materials, which might slow down the project, or it could be an unexpected opportunity that could speed things up. To effectively identify these risks, project managers can use several helpful methods. One common approach is brainstorming, where team members come together to share their ideas and concerns. Another method involves interviewing experts who have experience in similar projects, as they can provide valuable insights. Additionally, conducting a SWOT analysis is beneficial; this analysis examines the project's strengths, weaknesses, opportunities, and threats, helping to uncover potential risks. Lastly, reviewing historical checklists from past projects can reveal risks that have occurred before, allowing teams to prepare better.\nOnce a risk is identified, it is documented in a special tool called the Risk Register. This register is essential because it keeps track of all identified risks and includes important details about each one. For example, it describes what the risk is, categorizes it, assesses how likely it is to happen (rated as High, Medium, or Low), and evaluates the potential impact it could have on the project (also rated as High, Medium, or Low, or assigned a dollar value).\nTo prioritize these risks effectively, project managers use a tool called the Probability-Impact Matrix. This matrix visually displays which risks are the most urgent to address. Risks that are both high in probability and high in impact are marked in red, indicating that they require immediate attention. Furthermore, the Expected Monetary Value (EMV) is a calculation that helps project managers understand the potential financial impact of a risk. For example, if there is a 30% chance of losing $50,000, the EMV would be calculated as $15,000. This figure is crucial for comparing different risks and determining how much money should be set aside to handle unexpected issues that may arise during the project.\nContext recap: In the world of project management, understanding risks is crucial for success. A risk is defined as an uncertain event or condition that could happen and might have either a positive or negative effect on the project's goals. For instance, a risk could be a delay in receiving materials, which might slow down the project, or it could be an unexpected opportunity that could speed things up. To effectively identify these risks, project managers can use several helpful methods.\nWhy this matters: Identifying and Assessing Risks helps learners in Project Management connect ideas from Project Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "project-management-101-l07-c2",
          "title": "Risk Response Strategies",
          "content": "In project management, it's essential to have effective strategies for dealing with risks, which can either be harmful or beneficial. Let's start with harmful risks, often referred to as negative risks. One effective strategy is to avoid these risks entirely. This means changing the project plan to eliminate the risk. For instance, instead of using new and untested technology that might fail, a project manager could opt for technology that has already been proven to work well.\nAnother approach is to mitigate the risk. This involves taking proactive steps to reduce the likelihood of the risk occurring or to lessen its impact if it does happen. For example, a project manager might implement automated testing to identify and fix problems early in the development process, which can save time and resources later on.\nSometimes, project managers may choose to transfer the risk to another party. This can be done through insurance policies, warranties, or fixed-price contracts, which help to limit the project's exposure to potential losses. Lastly, there is the option to accept the risk. This means acknowledging that the risk exists and preparing a backup plan, often referred to as a Plan B, to address any issues that may arise.\nOn the flip side, there are also opportunities, known as positive risks, that project managers can capitalize on. They can exploit an opportunity to ensure it happens, enhance it to increase its chances of success, or share it by collaborating with another organization. If an opportunity presents itself, they can also choose to accept it and take advantage of the benefits it offers.\nIt's important to remember that every identified risk should have a designated owner responsible for managing it, along with a clear response plan outlining how to address it effectively.\nContext recap: In project management, it's essential to have effective strategies for dealing with risks, which can either be harmful or beneficial. Let's start with harmful risks, often referred to as negative risks. One effective strategy is to avoid these risks entirely. This means changing the project plan to eliminate the risk.\nWhy this matters: Risk Response Strategies helps learners in Project Management connect ideas from Project Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "project-management-101-l07-c3",
          "title": "Stakeholder Communication",
          "content": "Communication is an essential skill for project managers, and research shows that they spend a significant amount of their time—up to 90%—interacting with others. This highlights just how important it is for project managers to communicate effectively. To achieve this, they create a Communication Plan. This plan serves as a roadmap for sharing information and includes several key components. First, it identifies who needs to receive information about the project. Next, it specifies what type of information each person or group requires. This could include updates on project progress, changes in timelines, or any challenges that arise. The plan also outlines how this information will be delivered. For example, it might be shared through emails, visual dashboards, or in-person meetings. Finally, the plan details how often updates will be provided, which could be through daily check-ins, weekly reports, or monthly steering committee meetings.\nTo effectively manage the various stakeholders involved in a project, project managers often use a tool called the Power/Interest Grid. This grid helps categorize stakeholders into four distinct groups based on their level of power and interest in the project. The first group consists of those with high power and high interest; these individuals need to be managed closely to ensure their needs are met and they remain engaged. The second group includes those with high power but low interest; these stakeholders should be kept satisfied to prevent any issues from arising. The third group contains individuals with low power but high interest; it is important to keep them informed so they feel included in the project. Lastly, the fourth group consists of those with low power and low interest; these stakeholders should be monitored to ensure they do not miss any critical updates. By customizing communication strategies for each group, project managers can prevent some stakeholders from feeling overwhelmed by too much information while ensuring that others do not miss out on important updates.\nContext recap: Communication is an essential skill for project managers, and research shows that they spend a significant amount of their time—up to 90%—interacting with others. This highlights just how important it is for project managers to communicate effectively. To achieve this, they create a Communication Plan. This plan serves as a roadmap for sharing information and includes several key components.\nWhy this matters: Stakeholder Communication helps learners in Project Management connect ideas from Project Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "project-management-101-l07-f1",
          "front": "Risk Register",
          "back": "Central document listing every identified risk with its probability, impact, EMV, response strategy, and assigned owner"
        },
        {
          "id": "project-management-101-l07-f2",
          "front": "Expected Monetary Value (EMV)",
          "back": "Probability × dollar impact — used to compare risks and size contingency reserves (e.g., 30 % × $50 k = $15 k)"
        },
        {
          "id": "project-management-101-l07-f3",
          "front": "Four threat response strategies",
          "back": "Avoid (eliminate), Mitigate (reduce), Transfer (shift to third party), Accept (acknowledge with contingency)"
        },
        {
          "id": "project-management-101-l07-f4",
          "front": "Power/Interest Grid",
          "back": "Stakeholder classification tool — High Power + High Interest = Manage Closely; Low Power + Low Interest = Monitor"
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
          "content": "The Waterfall methodology is a traditional way of managing projects that follows a clear and structured sequence of steps. These steps are: Requirements (what the project needs), Design (how it will be built), Implementation (actually building it), Testing (making sure it works), Deployment (putting it out into the world), and Maintenance (keeping it running smoothly). Each of these phases must be completed and approved before moving on to the next one, similar to how water flows downhill without going back. This method works best when the project requirements are well-defined and unlikely to change, such as in construction or manufacturing.\nOne of the main advantages of the Waterfall approach is that it provides clear milestones, which are specific goals to reach at different stages of the project. This helps everyone involved understand what needs to be done and when. Additionally, it offers predictable timelines, meaning that the project can be completed in a set amount of time, which is very helpful for planning. Thorough documentation is another strength of the Waterfall method, as it keeps a detailed record of each phase, making it easier to track progress and understand decisions made throughout the project.\nHowever, a significant drawback of the Waterfall methodology is its inflexibility. If the project requirements change after the work has begun, it can be very costly and time-consuming to go back and make adjustments. This is because earlier phases must be revisited to accommodate the new requirements. For this reason, the Waterfall approach is often not the best choice for software projects, where user needs may evolve over time and require more adaptability. Understanding these strengths and weaknesses can help you choose the right project management method for your needs.\nContext recap: The Waterfall methodology is a traditional way of managing projects that follows a clear and structured sequence of steps. These steps are: Requirements (what the project needs), Design (how it will be built), Implementation (actually building it), Testing (making sure it works), Deployment (putting it out into the world), and Maintenance (keeping it running smoothly). Each of these phases must be completed and approved before moving on to the next one, similar to how water flows downhill without going back. This method works best when the project requirements are well-defined and unlikely to change, such as in construction or manufacturing."
        },
        {
          "id": "project-management-101-l08-c2",
          "title": "Scrum Framework",
          "content": "Scrum is one of the most popular frameworks used in Agile project management, and it helps teams work together effectively. In Scrum, work is organized into short cycles called sprints, which usually last about two weeks. This allows teams to focus on specific tasks and deliver results quickly.\nThere are three important roles in a Scrum team:\n1. **Product Owner**: This person is responsible for deciding what features should be developed. They create and prioritize a list of these features, known as the Product Backlog. This ensures that the team is always working on the most important tasks.\n2. **Scrum Master**: The Scrum Master acts as a guide for the team. They help facilitate the Scrum process, making sure everyone understands their roles and responsibilities. If any obstacles or challenges arise, the Scrum Master works to remove them so the team can stay on track.\n3. **Development Team**: This group of individuals is responsible for completing the work. They organize themselves and collaborate to deliver a potentially shippable product increment at the end of each sprint. This means they aim to produce a version of the product that could be released to users.\nScrum also includes five key ceremonies that help structure the team's work and keep everyone aligned:\n1. **Sprint Planning**: During this meeting, the team decides which items from the Product Backlog they will work on during the upcoming sprint.\n2. **Daily Stand-up**: This is a quick 15-minute meeting where team members share what they accomplished yesterday, what they plan to do today, and any challenges they are facing.\n3. **Sprint Review**: At the end of the sprint, the team demonstrates what they have completed to stakeholders, allowing for feedback and discussion.\n4. **Sprint Retrospective**: This is a time for the team to reflect on the sprint and discuss what went well and what could be improved in the future.\n5. **Backlog Refinement**: In this meeting, the team clarifies and prepares upcoming items in the Product Backlog, ensuring they are ready for future sprints.\nTo track progress, teams use a burndown chart, which shows how much work remains compared to the time left in the sprint. A line that trends down toward zero indicates that the team is making good progress and is on track to complete their goals by the end of the sprint.\nContext recap: Scrum is one of the most popular frameworks used in Agile project management, and it helps teams work together effectively. In Scrum, work is organized into short cycles called sprints, which usually last about two weeks. This allows teams to focus on specific tasks and deliver results quickly. There are three important roles in a Scrum team:\n1.\nWhy this matters: Scrum Framework helps learners in Project Management connect ideas from Project Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints.\nGuided check: Ask yourself, \"What is the claim?\", \"Which evidence is strongest?\", and \"What would change my conclusion?\" Use the terms team, scrum, sprint, work, product, backlog, teams, master while answering to reinforce vocabulary and precision."
        },
        {
          "id": "project-management-101-l08-c3",
          "title": "Kanban and Choosing the Right Approach",
          "content": "Kanban is a popular method in project management that helps teams visualize their work. It uses a board that is divided into columns, each representing a different stage of the work process. For example, you might see columns labeled 'To Do', 'In Progress', 'Review', and 'Done'. This setup allows everyone on the team to see what tasks are being worked on and what still needs to be done. One of the key principles of Kanban is to limit the amount of work that can be in progress at any one time. For instance, a team might agree that only three tasks can be in the 'In Progress' column at once. This means that when one task is finished, the team can pull the next highest-priority task into that column. By limiting the number of tasks in progress, Kanban helps prevent team members from feeling overwhelmed and makes it easier to spot any delays or bottlenecks in the workflow.\nUnlike Scrum, which has fixed time periods called sprints and specific roles for team members, Kanban allows for a more flexible and continuous flow of work. This means that teams can adapt quickly to changes and focus on completing tasks efficiently. There are several tools available, such as Jira, Trello, and Azure DevOps, that can help teams implement both Kanban and Scrum methodologies effectively.\nWhen choosing which approach to use for a project, it’s important to think about how much uncertainty there is in the project requirements. If the requirements are likely to change often, Agile methods like Scrum or Kanban are usually a better fit. On the other hand, if the requirements are stable and well understood, the Waterfall method might be more suitable. Many organizations have found success by using a combination of both approaches, applying Waterfall for the initial planning stages and Agile methods for the actual execution of the project. This hybrid approach allows teams to be both organized and adaptable, which is essential in today’s fast-paced work environment.\nContext recap: Kanban is a popular method in project management that helps teams visualize their work. It uses a board that is divided into columns, each representing a different stage of the work process. For example, you might see columns labeled 'To Do', 'In Progress', 'Review', and 'Done'. This setup allows everyone on the team to see what tasks are being worked on and what still needs to be done.\nWhy this matters: Kanban and Choosing the Right Approach helps learners in Project Management connect ideas from Project Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "back": "A fixed-length iteration (typically 2 weeks) in which the team delivers a potentially shippable product increment"
        },
        {
          "id": "project-management-101-l08-f2",
          "front": "Three Scrum roles",
          "back": "Product Owner (prioritizes backlog), Scrum Master (facilitates process, removes blockers), Development Team (self-organizes to build the increment)"
        },
        {
          "id": "project-management-101-l08-f3",
          "front": "Kanban WIP limit",
          "back": "A cap on the number of items allowed in a workflow stage — prevents multitasking overload and reveals bottlenecks"
        },
        {
          "id": "project-management-101-l08-f4",
          "front": "Burndown chart",
          "back": "Graph tracking remaining work (y-axis) over time (x-axis) during a sprint — a line trending to zero by sprint end shows healthy progress"
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
          "text": "A risk has a 40 % probability and a $25,000 impact. Its EMV is:",
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
              "text": "15 % ahead of schedule"
            },
            {
              "id": "b",
              "text": "15 % behind schedule"
            },
            {
              "id": "c",
              "text": "On schedule"
            },
            {
              "id": "d",
              "text": "15 % under budget"
            }
          ],
          "correctOptionId": "b",
          "explanation": "SPI = EV ÷ PV. An SPI of 0.85 means only 85 % of planned work is complete — the project is 15 % behind schedule."
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
