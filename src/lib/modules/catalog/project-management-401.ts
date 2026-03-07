import type { LearningModule } from "@/lib/modules/types";

export const project_management_401_Module: LearningModule = {
  "id": "project-management-401",
  "title": "Enterprise Project Leadership",
  "description": "A curriculum on executive project leadership, focusing on strategic alignment, enterprise operating models, transformation strategy, and organizational execution systems.",
  "subject": "Project Management",
  "tags": [
    "strategy",
    "leadership",
    "transformation",
    "agile"
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
  "thumbnail": "/thumbnails/enterprise-leadership.svg",
  "learningObjectives": [
    "Evaluate project portfolios for strategic alignment with enterprise goals.",
    "Design an organizational change management plan for a major transformation.",
    "Analyze and compare enterprise-level agile operating models.",
    "Develop a comprehensive governance framework for a project management office (PMO)."
  ],
  "lessons": [
    {
      "id": "project-management-401-l01",
      "title": "Strategic Alignment and Portfolio Management",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "project-management-401-l01-a1",
          "type": "image",
          "title": "Strategic Alignment Pyramid",
          "content": "A diagram showing the hierarchy from corporate vision down to individual projects."
        },
        {
          "id": "project-management-401-l01-a2",
          "type": "animation",
          "title": "Portfolio Balancing Simulation",
          "content": "An animation demonstrating how to balance a portfolio based on risk, ROI, and strategic fit."
        }
      ]
    },
    {
      "id": "project-management-401-l02",
      "title": "Workshop: Prioritizing a Project Portfolio",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "Given a set of business objectives, propose three potential projects.",
          "Score each project against a provided matrix of strategic drivers.",
          "Justify your recommendation for the top-priority project to a mock executive board."
        ]
      },
      "learningAids": [
        {
          "id": "project-management-401-l02-a1",
          "type": "practice",
          "title": "Interactive Prioritization Matrix",
          "content": "A tool to drag, drop, and score projects to build a balanced portfolio."
        }
      ]
    },
    {
      "id": "project-management-401-l03",
      "title": "Checkpoint: Strategy and Portfolio",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "project-management-401-l03-q1",
          "text": "What is the primary purpose of Project Portfolio Management (PPM)?",
          "skillId": "project-management-401-skill-ppm",
          "options": [
            {
              "id": "a",
              "text": "To ensure all projects are completed on time and within budget."
            },
            {
              "id": "b",
              "text": "To select, prioritize, and manage projects and programs to best achieve strategic goals."
            },
            {
              "id": "c",
              "text": "To track the daily tasks of individual project team members."
            },
            {
              "id": "d",
              "text": "To replace the need for individual project managers."
            }
          ],
          "correctOptionId": "b",
          "explanation": "PPM focuses on the strategic alignment and overall value of the entire collection of projects, not just the execution of individual ones."
        },
        {
          "id": "project-management-401-l03-q2",
          "text": "A company's key strategy is 'market expansion'. Which project should receive the highest priority?",
          "skillId": "project-management-401-skill-alignment",
          "options": [
            {
              "id": "a",
              "text": "A project to upgrade internal IT infrastructure for a 5% cost saving."
            },
            {
              "id": "b",
              "text": "A project to research and launch a product in a new geographical region."
            },
            {
              "id": "c",
              "text": "A project to redesign the employee training program."
            },
            {
              "id": "d",
              "text": "A project to optimize an existing, stable product line."
            }
          ],
          "correctOptionId": "b"
        }
      ]
    },
    {
      "id": "project-management-401-l04",
      "title": "Leading Organizational Change and Transformation",
      "type": "video",
      "duration": 18,
      "learningAids": [
        {
          "id": "project-management-401-l04-a1",
          "type": "image",
          "title": "Kotter's 8-Step Change Model",
          "content": "An infographic detailing the steps for leading successful organizational change."
        }
      ]
    },
    {
      "id": "project-management-401-l05",
      "title": "Simulation: Navigating a Merger Integration",
      "type": "interactive",
      "duration": 30,
      "metadata": {
        "prompts": [
          "Identify the key stakeholder groups and their potential points of resistance.",
          "Draft a communication plan to address the concerns of the acquired company's employees.",
          "Choose a strategy to create short-term wins and build momentum for the integration."
        ]
      },
      "learningAids": [
        {
          "id": "project-management-401-l05-a1",
          "type": "practice",
          "title": "Scenario-Based Change Management Challenge",
          "content": "Navigate a branching narrative to manage a complex organizational change."
        }
      ]
    },
    {
      "id": "project-management-401-l06",
      "title": "Checkpoint: Change Leadership",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "project-management-401-l06-q1",
          "text": "According to Kotter's model, what is a critical first step in any transformation effort?",
          "skillId": "project-management-401-skill-change-models",
          "options": [
            {
              "id": "a",
              "text": "Communicating the change vision."
            },
            {
              "id": "b",
              "text": "Empowering employees for broad-based action."
            },
            {
              "id": "c",
              "text": "Establishing a sense of urgency."
            },
            {
              "id": "d",
              "text": "Generating short-term wins."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Creating a sense of urgency is the foundational first step to motivate people and get the transformation effort off the ground."
        }
      ]
    },
    {
      "id": "project-management-401-l07",
      "title": "Scaling Agile: Enterprise Operating Models",
      "type": "video",
      "duration": 20,
      "learningAids": [
        {
          "id": "project-management-401-l07-a1",
          "type": "image",
          "title": "Comparison: SAFe vs. LeSS vs. Spotify",
          "content": "A feature-by-feature comparison chart of popular scaled agile frameworks."
        },
        {
          "id": "project-management-401-l07-a2",
          "type": "animation",
          "title": "Visualizing a Program Increment (PI)",
          "content": "An animated walkthrough of a PI Planning event, showing how teams align on objectives."
        }
      ]
    },
    {
      "id": "project-management-401-l08",
      "title": "Case Study: Designing a Value Stream",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "Analyze the provided business case to identify the end-to-end value stream.",
          "Map the key roles and responsibilities for an Agile Release Train (ART) to serve this value stream.",
          "Outline the cadence of key events (e.g., PI Planning, System Demo) for one Program Increment."
        ]
      },
      "learningAids": [
        {
          "id": "project-management-401-l08-a1",
          "type": "practice",
          "title": "Drag-and-Drop Value Stream Mapping Tool",
          "content": "An interactive canvas for mapping the steps, people, and systems involved in delivering value."
        }
      ]
    },
    {
      "id": "project-management-401-l09",
      "title": "Capstone Project: Enterprise Transformation Blueprint",
      "type": "interactive",
      "duration": 60,
      "metadata": {
        "prompts": [
          "1. Assess the fictional company's strategic position and identify the primary need for transformation.",
          "2. Propose a new, strategically-aligned project portfolio to address market disruption.",
          "3. Outline a comprehensive change management and communication plan.",
          "4. Recommend a new, scaled agile operating model and justify your choice."
        ]
      },
      "learningAids": [
        {
          "id": "project-management-401-l09-a1",
          "type": "practice",
          "title": "Capstone Project Brief & Submission Template",
          "content": "A detailed case study and a structured template for submitting your final transformation blueprint."
        }
      ]
    }
  ]
};
