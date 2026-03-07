import type { LearningModule } from "@/lib/modules/types";

export const plumbing_401_Module: LearningModule = {
  "id": "plumbing-401",
  "title": "Plumbing Master Practice",
  "description": "Master-level plumbing operations, focusing on advanced code interpretation, project supervision, and quality assurance.",
  "subject": "Plumbing",
  "tags": [
    "curriculum",
    "interactive",
    "master plumber",
    "code compliance",
    "project management"
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
  "thumbnail": "/placeholders/lesson-wrench.svg",
  "learningObjectives": [
    "Interpret and apply advanced sections of the International Plumbing Code (IPC) and Uniform Plumbing Code (UPC).",
    "Design complex, multi-story plumbing systems, including water supply, drainage, and venting.",
    "Supervise plumbing projects, manage crews, and create effective project timelines.",
    "Implement quality assurance protocols and diagnose complex system failures."
  ],
  "lessons": [
    {
      "id": "plumbing-401-l01",
      "title": "Advanced Plumbing Codes and System Design",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "plumbing-401-l01-a1",
          "type": "document",
          "title": "Code Compliance Checklist (PDF)",
          "content": "A downloadable checklist covering key IPC/UPC sections for commercial buildings."
        },
        {
          "id": "plumbing-401-l01-a2",
          "type": "animation",
          "title": "Sizing a Multi-Story DWV System",
          "content": "Animated walkthrough of calculating drainage fixture units (DFUs) and sizing stacks and vents."
        }
      ]
    },
    {
      "id": "plumbing-401-l02",
      "title": "Interactive Blueprint Analysis",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "Identify three potential code violations in the provided commercial blueprint.",
          "Propose a revised layout for the primary vent stack to improve performance.",
          "Calculate the required water supply pipe size for the main line based on the fixture count."
        ]
      },
      "learningAids": [
        {
          "id": "plumbing-401-l02-a1",
          "type": "simulation",
          "title": "Virtual Blueprint Table",
          "content": "Analyze a multi-page commercial plumbing blueprint with tools to measure, annotate, and highlight sections."
        }
      ]
    },
    {
      "id": "plumbing-401-l03",
      "title": "Checkpoint: Code & Design Mastery",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "plumbing-401-l03-q1",
          "text": "For a commercial kitchen with 3 high-temperature dishwashers and 4 food prep sinks, which backflow prevention device is required on the main water supply?",
          "skillId": "plumbing-401-skill-code",
          "options": [
            {
              "id": "a",
              "text": "Double Check Valve Assembly (DCVA)"
            },
            {
              "id": "b",
              "text": "Reduced Pressure Zone Assembly (RPZ)"
            },
            {
              "id": "c",
              "text": "Atmospheric Vacuum Breaker (AVB)"
            },
            {
              "id": "d",
              "text": "Pressure Vacuum Breaker (PVB)"
            }
          ],
          "correctOptionId": "b",
          "explanation": "An RPZ is required for high-hazard applications like commercial kitchens to protect the potable water supply from contamination."
        },
        {
          "id": "plumbing-401-l03-q2",
          "text": "According to the IPC, what is the minimum size for a building sewer serving a facility with a calculated load of 200 DFUs?",
          "skillId": "plumbing-401-skill-sizing",
          "options": [
            {
              "id": "a",
              "text": "3 inches"
            },
            {
              "id": "b",
              "text": "4 inches"
            },
            {
              "id": "c",
              "text": "6 inches"
            },
            {
              "id": "d",
              "text": "8 inches"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Based on IPC Table 710.1(2), a 4-inch pipe with a 1/4-inch per foot slope can handle up to 216 DFUs."
        }
      ],
      "learningAids": [
        {
          "id": "plumbing-401-l03-a1",
          "type": "document",
          "title": "Pipe Sizing & Friction Loss Charts",
          "content": "Reference charts for common pipe materials and fixture unit tables."
        }
      ]
    },
    {
      "id": "plumbing-401-l04",
      "title": "Project Management for Master Plumbers",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "plumbing-401-l04-a1",
          "type": "document",
          "title": "Sample Project Timeline (Gantt Chart)",
          "content": "Example of a project schedule for a mid-sized commercial installation."
        },
        {
          "id": "plumbing-401-l04-a2",
          "type": "image",
          "title": "Toolbox Talk Outline",
          "content": "A visual guide for structuring effective daily safety and planning meetings with a crew."
        }
      ]
    },
    {
      "id": "plumbing-401-l05",
      "title": "Project Simulation: Commercial High-Rise",
      "type": "interactive",
      "duration": 30,
      "metadata": {
        "prompts": [
          "A critical material delivery is delayed by 48 hours. Adjust your project schedule to minimize impact.",
          "Two crew members have a conflict over installation methods. How do you resolve it?",
          "The general contractor requests a change order to add a new restroom. Draft a response outlining the cost and time implications."
        ]
      },
      "learningAids": [
        {
          "id": "plumbing-401-l05-a1",
          "type": "simulation",
          "title": "Project Management Dashboard",
          "content": "An interactive dashboard to manage budget, schedule, and crew assignments in response to scenarios."
        }
      ]
    },
    {
      "id": "plumbing-401-l06",
      "title": "Checkpoint: Project Supervision",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "plumbing-401-l06-q1",
          "text": "You observe a crew member working in a 6-foot trench without proper shoring. What is your immediate first step as the supervising master plumber?",
          "skillId": "plumbing-401-skill-safety",
          "options": [
            {
              "id": "a",
              "text": "Report the incident to the general contractor."
            },
            {
              "id": "b",
              "text": "Order the worker out of the trench immediately."
            },
            {
              "id": "c",
              "text": "Take a photo for documentation purposes."
            },
            {
              "id": "d",
              "text": "Consult the project blueprints for trench specifications."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Immediate safety of personnel is the top priority. All other actions, while potentially necessary, come after ensuring the worker is out of danger."
        }
      ],
      "learningAids": [
        {
          "id": "plumbing-401-l06-a1",
          "type": "document",
          "title": "Change Order Request Form",
          "content": "A standard template for documenting and submitting change orders."
        }
      ]
    },
    {
      "id": "plumbing-401-l07",
      "title": "Quality Assurance and System Commissioning",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "plumbing-401-l07-a1",
          "type": "image",
          "title": "Pressure Test Manifold Diagram",
          "content": "A detailed schematic of a proper setup for hydrostatic and pneumatic testing."
        },
        {
          "id": "plumbing-401-l07-a2",
          "type": "animation",
          "title": "Smoke Testing a DWV System",
          "content": "Step-by-step animation showing how to conduct a smoke test to find leaks in a drain, waste, and vent system."
        }
      ]
    },
    {
      "id": "plumbing-401-l08",
      "title": "Virtual System Diagnostics",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "Diagnose the cause of a persistent water hammer in the simulated hot water system.",
          "Use the virtual drain camera to locate a partial blockage in a 4-inch sewer line.",
          "Identify the source of sewer gas odor in a multi-story building based on system readings."
        ]
      },
      "learningAids": [
        {
          "id": "plumbing-401-l08-a1",
          "type": "simulation",
          "title": "Diagnostic Toolkit Simulation",
          "content": "Use virtual tools like pressure gauges, drain cameras, and leak detectors to troubleshoot a complex plumbing system."
        }
      ]
    },
    {
      "id": "plumbing-401-l09",
      "title": "Checkpoint: QA & Diagnostics",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "plumbing-401-l09-q1",
          "text": "During a hydrostatic test of a new copper water line, the pressure drops from 150 psi to 140 psi over 15 minutes. What is the most likely cause?",
          "skillId": "plumbing-401-skill-diagnostics",
          "options": [
            {
              "id": "a",
              "text": "A major pipe burst."
            },
            {
              "id": "b",
              "text": "A small, weeping leak at a solder joint."
            },
            {
              "id": "c",
              "text": "Normal pressure fluctuation due to temperature change."
            },
            {
              "id": "d",
              "text": "A faulty pressure gauge."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A slow, steady pressure drop is characteristic of a small leak, whereas a major burst would cause a rapid drop to zero. While other options are possible, a weeping joint is the most probable plumbing-related cause."
        }
      ],
      "learningAids": [
        {
          "id": "plumbing-401-l09-a1",
          "type": "document",
          "title": "Troubleshooting Flowchart",
          "content": "A logical flowchart for diagnosing common and complex plumbing issues."
        }
      ]
    },
    {
      "id": "plumbing-401-l10",
      "title": "Capstone: Restaurant Plumbing System Plan",
      "type": "interactive",
      "duration": 45,
      "metadata": {
        "prompts": [
          "Develop a complete DWV plan for the provided restaurant blueprint, including grease trap sizing and placement.",
          "Create a material take-off list and estimated labor hours for the project.",
          "Write a one-page quality assurance plan for the installation and final inspection."
        ]
      },
      "learningAids": [
        {
          "id": "plumbing-401-l10-a1",
          "type": "simulation",
          "title": "Capstone Design Workspace",
          "content": "A workspace with a restaurant blueprint, material cost sheet, and project planning templates to complete the final project."
        }
      ]
    }
  ]
};
