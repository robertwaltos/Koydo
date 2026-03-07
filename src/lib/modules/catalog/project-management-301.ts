import type { LearningModule } from "@/lib/modules/types";

export const project_management_301_Module: LearningModule = {
  "id": "project-management-301",
  "title": "Program Management",
  "description": "Master advanced program governance, portfolio sequencing, risk orchestration, and benefits realization to drive strategic business outcomes.",
  "subject": "Project Management",
  "tags": [
    "program management",
    "portfolio management",
    "strategic alignment",
    "advanced"
  ],
  "minAge": 18,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
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
  "thumbnail": "/thumbnails/program-management-advanced.svg",
  "learningObjectives": [
    "Differentiate between project, program, and portfolio management.",
    "Design and implement a robust program governance framework.",
    "Optimize project sequencing and resource allocation within a program portfolio.",
    "Orchestrate risk management activities across interdependent projects.",
    "Develop a benefits realization plan to track and measure program value."
  ],
  "lessons": [
    {
      "id": "project-management-301-l01",
      "title": "Foundations of Program Management",
      "type": "video",
      "duration": 10,
      "learningAids": [
        {
          "id": "project-management-301-l01-a1",
          "type": "image",
          "title": "Project vs. Program vs. Portfolio",
          "content": "A Venn diagram illustrating the relationships and distinctions between projects, programs, and portfolios."
        },
        {
          "id": "project-management-301-l01-a2",
          "type": "animation",
          "title": "Lifecycle of a Strategic Program",
          "content": "An animated walkthrough of the typical phases of a program, from formulation to benefits realization."
        }
      ]
    },
    {
      "id": "project-management-301-l02",
      "title": "Program Governance & Strategic Alignment",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "project-management-301-l02-a1",
          "type": "image",
          "title": "Program Governance Structure",
          "content": "An organizational chart showing a typical program governance model, including steering committees, program managers, and project teams."
        },
        {
          "id": "project-management-301-l02-a2",
          "type": "animation",
          "title": "From Strategy to Execution",
          "content": "A flowchart animating how high-level business strategy is translated into actionable program objectives and key results (OKRs)."
        }
      ]
    },
    {
      "id": "project-management-301-l03",
      "title": "Practice: Designing a Governance Framework",
      "type": "interactive",
      "duration": 18,
      "metadata": {
        "prompts": [
          "For the 'Global Market Expansion' program, draft a one-sentence mission statement.",
          "Identify three key stakeholder groups and propose a steering committee structure.",
          "Outline the critical decision-making gates for this program's lifecycle."
        ]
      },
      "learningAids": [
        {
          "id": "project-management-301-l03-a1",
          "type": "practice",
          "title": "Interactive Case Study",
          "content": "Use the provided templates to build a governance plan for the 'LaunchLink Satellite Network' case study."
        }
      ]
    },
    {
      "id": "project-management-301-l04",
      "title": "Checkpoint 1: Strategy & Governance",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "project-management-301-l04-q1",
          "text": "What is the primary function of program management that distinguishes it from project management?",
          "skillId": "program-fundamentals",
          "options": [
            {
              "id": "a",
              "text": "Coordinating multiple related projects to achieve a strategic business outcome."
            },
            {
              "id": "b",
              "text": "Managing the day-to-day tasks of a single project team."
            },
            {
              "id": "c",
              "text": "Executing a specific set of deliverables within a fixed budget and timeline."
            },
            {
              "id": "d",
              "text": "Selecting and prioritizing all potential projects for an organization."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Program management focuses on the coordinated management of interdependent projects to realize benefits and control not available from managing them individually."
        },
        {
          "id": "project-management-301-l04-q2",
          "text": "A program's steering committee is primarily responsible for which of the following?",
          "skillId": "program-governance",
          "options": [
            {
              "id": "a",
              "text": "Providing strategic direction, resources, and high-level decision-making."
            },
            {
              "id": "b",
              "text": "Creating detailed project schedules and assigning tasks."
            },
            {
              "id": "c",
              "text": "Developing the software code for the program's components."
            },
            {
              "id": "d",
              "text": "Marketing the final product to end-users."
            }
          ],
          "correctOptionId": "a"
        }
      ]
    },
    {
      "id": "project-management-301-l05",
      "title": "Portfolio Sequencing & Benefits Realization",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "project-management-301-l05-a1",
          "type": "image",
          "title": "Program Roadmap with Dependencies",
          "content": "A visual roadmap showing how different projects within a program are sequenced over time, highlighting key dependencies and milestones."
        },
        {
          "id": "project-management-301-l05-a2",
          "type": "animation",
          "title": "Benefits Realization Pathway",
          "content": "An animation illustrating the path from project 'output' (e.g., a new system) to program 'outcome' (e.g., improved efficiency) and finally to strategic 'benefit' (e.g., increased profit)."
        }
      ]
    },
    {
      "id": "project-management-301-l06",
      "title": "Practice: Building a Program Roadmap",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Sequence the projects for the 'Smart City' initiative based on their dependencies and potential for early value delivery.",
          "Identify and define the three most critical program milestones for the first year.",
          "Draft a benefits realization plan to measure the success of the 'Smart City' initiative."
        ]
      },
      "learningAids": [
        {
          "id": "project-management-301-l06-a1",
          "type": "practice",
          "title": "Roadmap Simulation",
          "content": "Use a drag-and-drop interface to build an optimal program roadmap for a given set of projects, constraints, and objectives."
        }
      ]
    },
    {
      "id": "project-management-301-l07",
      "title": "Risk Orchestration & Stakeholder Management",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "project-management-301-l07-a1",
          "type": "image",
          "title": "Program-Level Risk Matrix",
          "content": "A matrix demonstrating how risks from individual projects are aggregated and assessed at the program level."
        },
        {
          "id": "project-management-301-l07-a2",
          "type": "animation",
          "title": "Stakeholder Communication Cadence",
          "content": "An animated calendar showing a sample communication plan for different stakeholder groups throughout a program's lifecycle."
        }
      ]
    },
    {
      "id": "project-management-301-l08",
      "title": "Final Assessment: Program Management Mastery",
      "type": "quiz",
      "duration": 20,
      "questions": [
        {
          "id": "project-management-301-l08-q1",
          "text": "A key project in your program is delayed, threatening a major program milestone. What is the BEST first step for a program manager?",
          "skillId": "risk-orchestration",
          "options": [
            {
              "id": "a",
              "text": "Assess the impact of the delay on other interdependent projects and the overall program benefits."
            },
            {
              "id": "b",
              "text": "Immediately replace the project manager of the delayed project."
            },
            {
              "id": "c",
              "text": "Cancel the delayed project to protect the program's budget."
            },
            {
              "id": "d",
              "text": "Inform the customer that the entire program will be late."
            }
          ],
          "correctOptionId": "a",
          "explanation": "A program manager's primary role is to understand cross-project dependencies and manage the program as a whole. The first step is to assess the ripple effects before taking corrective action."
        },
        {
          "id": "project-management-301-l08-q2",
          "text": "Your program has successfully delivered all its component projects, but the expected business benefits have not materialized. This indicates a failure in which area?",
          "skillId": "benefits-realization",
          "options": [
            {
              "id": "a",
              "text": "Benefits realization management."
            },
            {
              "id": "b",
              "text": "Project scheduling."
            },
            {
              "id": "c",
              "text": "Technical execution."
            },
            {
              "id": "d",
              "text": "Resource allocation."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Delivering project outputs is not enough; a successful program ensures these outputs lead to the intended strategic benefits. A failure to achieve benefits points to a weakness in the benefits realization process."
        },
        {
          "id": "project-management-301-l08-q3",
          "text": "When sequencing projects within a program, which factor should be given the highest consideration?",
          "skillId": "portfolio-sequencing",
          "options": [
            {
              "id": "a",
              "text": "Dependencies between projects and the path to quickest value delivery."
            },
            {
              "id": "b",
              "text": "Which project has the most senior project manager."
            },
            {
              "id": "c",
              "text": "The individual budget size of each project."
            },
            {
              "id": "d",
              "text": "The preferences of the individual project teams."
            }
          ],
          "correctOptionId": "a"
        }
      ]
    }
  ]
};
