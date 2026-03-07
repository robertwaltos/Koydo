import type { LearningModule } from "@/lib/modules/types";

export const plumbing_201_Module: LearningModule = {
  "id": "plumbing-201",
  "title": "Plumbing Systems and Codes",
  "description": "An intermediate guide to residential plumbing, covering water supply, drainage, waste, and vent (DWV) systems, code compliance, and common troubleshooting techniques.",
  "subject": "Plumbing",
  "tags": [
    "curriculum",
    "interactive",
    "skilled trades",
    "code compliance"
  ],
  "minAge": 16,
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
  "thumbnail": "/thumbnails/plumbing-systems.svg",
  "learningObjectives": [
    "Identify the components and functions of residential water supply systems.",
    "Explain the principles of a Drain-Waste-Vent (DWV) system.",
    "Apply common plumbing codes to system design and installation.",
    "Diagnose and troubleshoot common plumbing issues like leaks, clogs, and pressure problems."
  ],
  "lessons": [
    {
      "id": "plumbing-201-l01",
      "title": "Fundamentals of Water Supply",
      "type": "video",
      "duration": 10,
      "learningAids": [
        {
          "id": "plumbing-201-l01-a1",
          "type": "image",
          "title": "System Diagram",
          "content": "A detailed diagram of a residential water supply system, from the main line to individual fixtures."
        },
        {
          "id": "plumbing-201-l01-a2",
          "type": "animation",
          "title": "Water Pressure Explained",
          "content": "Animation showing how a pressure reducing valve (PRV) works to regulate household water pressure."
        }
      ]
    },
    {
      "id": "plumbing-201-l02",
      "title": "Practice: Sizing Supply Lines",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Using the provided fixture unit chart, calculate the required supply pipe diameter for a two-bathroom house.",
          "Virtually connect PEX pipes to a manifold using the correct crimp rings and tools.",
          "Identify three potential installation errors in the provided diagram of a water heater setup."
        ]
      },
      "learningAids": [
        {
          "id": "plumbing-201-l02-a1",
          "type": "practice",
          "title": "Virtual Pipe Fitting",
          "content": "A drag-and-drop interface to assemble common water supply connections."
        }
      ]
    },
    {
      "id": "plumbing-201-l03",
      "title": "Checkpoint: Water Supply Systems",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "plumbing-201-l03-q1",
          "text": "What is the primary purpose of an expansion tank on a water heater?",
          "skillId": "plumbing-201-skill-supply",
          "options": [
            {
              "id": "a",
              "text": "To absorb excess pressure caused by thermal expansion."
            },
            {
              "id": "b",
              "text": "To increase the home's overall water pressure."
            },
            {
              "id": "c",
              "text": "To filter sediment from the incoming water."
            },
            {
              "id": "d",
              "text": "To mix hot and cold water to a safe temperature."
            }
          ],
          "correctOptionId": "a",
          "explanation": "As water is heated, it expands. The expansion tank provides a safe place for this expanded water volume, preventing dangerous pressure buildup in a closed system."
        },
        {
          "id": "plumbing-201-l03-q2",
          "text": "A loud banging noise that occurs when a valve is closed quickly is known as:",
          "skillId": "plumbing-201-skill-troubleshooting",
          "options": [
            {
              "id": "a",
              "text": "Cavitation"
            },
            {
              "id": "b",
              "text": "Water hammer"
            },
            {
              "id": "c",
              "text": "Pressure surge"
            },
            {
              "id": "d",
              "text": "Pipe fatigue"
            }
          ],
          "correctOptionId": "b"
        }
      ]
    },
    {
      "id": "plumbing-201-l04",
      "title": "Understanding DWV Principles",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "plumbing-201-l04-a1",
          "type": "image",
          "title": "DWV System Layout",
          "content": "Color-coded diagram of a complete Drain-Waste-Vent system, highlighting proper slope and vent connections."
        },
        {
          "id": "plumbing-201-l04-a2",
          "type": "animation",
          "title": "How a P-Trap Works",
          "content": "Step-by-step animation showing how a P-trap's water seal and a connected vent prevent sewer gases from entering the home."
        }
      ]
    },
    {
      "id": "plumbing-201-l05",
      "title": "Practice: Designing a Vent System",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "For the given bathroom layout, identify the correct vent type (e.g., wet vent, common vent).",
          "Drag and drop vent pipes to correctly connect all fixtures to the main vent stack, ensuring proper grade.",
          "Explain why an air admittance valve (AAV) might be a code-compliant option for the island sink."
        ]
      },
      "learningAids": [
        {
          "id": "plumbing-201-l05-a1",
          "type": "practice",
          "title": "Virtual Venting",
          "content": "Use a simulator to design a functional and code-compliant DWV system for a small house."
        }
      ]
    },
    {
      "id": "plumbing-201-l06",
      "title": "Checkpoint: DWV Systems",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "plumbing-201-l06-q1",
          "text": "According to most plumbing codes, what is the minimum slope for a 3-inch horizontal drainage pipe?",
          "skillId": "plumbing-201-skill-code",
          "options": [
            {
              "id": "a",
              "text": "1/16 inch per foot"
            },
            {
              "id": "b",
              "text": "1/8 inch per foot"
            },
            {
              "id": "c",
              "text": "1/4 inch per foot"
            },
            {
              "id": "d",
              "text": "1/2 inch per foot"
            }
          ],
          "correctOptionId": "b",
          "explanation": "While 1/4\" per foot is standard for smaller pipes, 3-inch and larger pipes can often be sloped at 1/8\" per foot, though local codes should always be consulted."
        },
        {
          "id": "plumbing-201-l06-q2",
          "text": "What is the primary function of a plumbing vent?",
          "skillId": "plumbing-201-skill-dwv",
          "options": [
            {
              "id": "a",
              "text": "To release foul odors outside the building."
            },
            {
              "id": "b",
              "text": "To allow air to enter the drainage system, protecting trap seals."
            },
            {
              "id": "c",
              "text": "To serve as an overflow for the drainage pipes."
            },
            {
              "id": "d",
              "text": "To provide a secondary path for water to drain."
            }
          ],
          "correctOptionId": "b"
        }
      ]
    },
    {
      "id": "plumbing-201-l07",
      "title": "Navigating Plumbing Codes",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "plumbing-201-l07-a1",
          "type": "image",
          "title": "Code Book Infographic",
          "content": "An infographic highlighting the key chapters of the International Plumbing Code (IPC) for residential work."
        }
      ]
    },
    {
      "id": "plumbing-201-l08",
      "title": "Practice: Code Compliance Scenario",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Review the provided bathroom rough-in plan and identify three specific code violations.",
          "Specify the correct pipe support spacing for a horizontal 2-inch PVC drain line.",
          "Determine the maximum allowable horizontal distance from a fixture trap to its vent (trap arm length)."
        ]
      },
      "learningAids": [
        {
          "id": "plumbing-201-l08-a1",
          "type": "practice",
          "title": "Virtual Inspection",
          "content": "Act as an inspector to approve or fail a series of virtual plumbing installations, citing specific code sections."
        }
      ]
    },
    {
      "id": "plumbing-201-l09",
      "title": "Final Checkpoint: Systems and Codes",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "plumbing-201-l09-q1",
          "text": "A homeowner reports that flushing an upstairs toilet causes the downstairs shower trap to be siphoned dry. What is the most likely cause?",
          "skillId": "plumbing-201-skill-troubleshooting",
          "options": [
            {
              "id": "a",
              "text": "The main water pressure to the house is too high."
            },
            {
              "id": "b",
              "text": "The drain line has insufficient slope."
            },
            {
              "id": "c",
              "text": "The DWV system has an inadequate or blocked vent."
            },
            {
              "id": "d",
              "text": "The toilet's wax ring has failed."
            }
          ],
          "correctOptionId": "c",
          "explanation": "This classic symptom, known as induced siphonage, occurs when negative pressure from draining water pulls water from nearby traps because there is no vent to allow air into the system."
        },
        {
          "id": "plumbing-201-l09-q2",
          "text": "What is the minimum required size for a building's main water service line according to most codes?",
          "skillId": "plumbing-201-skill-code",
          "options": [
            {
              "id": "a",
              "text": "1/2 inch"
            },
            {
              "id": "b",
              "text": "3/4 inch"
            },
            {
              "id": "c",
              "text": "1 inch"
            },
            {
              "id": "d",
              "text": "1 1/4 inch"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "plumbing-201-l09-q3",
          "text": "A cleanout is required at the base of each drainage stack. What other location typically requires a cleanout?",
          "skillId": "plumbing-201-skill-dwv",
          "options": [
            {
              "id": "a",
              "text": "At every change in pipe material."
            },
            {
              "id": "b",
              "text": "Every 10 feet on horizontal vent pipes."
            },
            {
              "id": "c",
              "text": "At the junction of the building drain and the building sewer."
            },
            {
              "id": "d",
              "text": "Immediately before every P-trap."
            }
          ],
          "correctOptionId": "c"
        }
      ]
    }
  ]
};
