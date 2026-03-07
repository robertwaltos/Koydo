import type { LearningModule } from "@/lib/modules/types";

export const plumbing_301_Module: LearningModule = {
  "id": "plumbing-301",
  "title": "Plumbing Advanced Systems",
  "description": "Advanced plumbing system design, retrofit strategy, and high-complexity diagnostics for professionals.",
  "subject": "Plumbing",
  "tags": [
    "curriculum",
    "interactive",
    "professional-development",
    "certification-prep"
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
  "thumbnail": "/thumbnails/plumbing-advanced.svg",
  "learningObjectives": [
    "Design and size a residential greywater reclamation system according to UPC/IPC standards.",
    "Diagnose and troubleshoot common failures in commercial hydronic heating systems.",
    "Understand the code requirements and safety protocols for medical gas and vacuum systems.",
    "Apply advanced diagnostic techniques, including video pipe inspection and hydrostatic pressure testing."
  ],
  "lessons": [
    {
      "id": "plumbing-301-l01",
      "title": "Greywater Reclamation Systems: Design and Code",
      "type": "video",
      "duration": 18,
      "learningAids": [
        {
          "id": "plumbing-301-l01-a1",
          "type": "schematic",
          "title": "Greywater System Diagram",
          "content": "Downloadable P&ID for a typical residential greywater system."
        },
        {
          "id": "plumbing-301-l01-a2",
          "type": "document",
          "title": "Code Compliance Checklist",
          "content": "A checklist of key UPC and IPC code sections relevant to greywater systems."
        }
      ]
    },
    {
      "id": "plumbing-301-l02",
      "title": "Practice: Sizing a Greywater System",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "Calculate the daily greywater supply based on household occupancy.",
          "Select an appropriate filtration system for the calculated load.",
          "Determine the required storage tank size and irrigation field dimensions."
        ]
      },
      "learningAids": [
        {
          "id": "plumbing-301-l02-a1",
          "type": "calculator",
          "title": "Greywater Sizing Calculator",
          "content": "Interactive tool to calculate system component sizes based on inputs."
        }
      ]
    },
    {
      "id": "plumbing-301-l03",
      "title": "Commercial Hydronic Heating Systems",
      "type": "video",
      "duration": 22,
      "learningAids": [
        {
          "id": "plumbing-301-l03-a1",
          "type": "animation",
          "title": "Boiler Operation Cycle",
          "content": "Animated walkthrough of a high-efficiency condensing boiler's firing sequence."
        },
        {
          "id": "plumbing-301-l03-a2",
          "type": "schematic",
          "title": "Multi-Zone Hydronic Layout",
          "content": "Diagram showing primary/secondary loops, zone valves, and circulators."
        }
      ]
    },
    {
      "id": "plumbing-301-l04",
      "title": "Practice: Hydronic System Diagnostics",
      "type": "interactive",
      "duration": 30,
      "metadata": {
        "prompts": [
          "Analyze the symptoms: 'No heat in Zone 3'.",
          "Formulate a diagnostic plan starting with the most likely cause.",
          "Identify the faulty component based on simulated pressure and temperature readings."
        ]
      },
      "learningAids": [
        {
          "id": "plumbing-301-l04-a1",
          "type": "simulator",
          "title": "Virtual Hydronic System",
          "content": "An interactive schematic where you can test components and read virtual gauges."
        }
      ]
    },
    {
      "id": "plumbing-301-l05",
      "title": "Checkpoint 1: Water Reclamation & Hydronics",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "plumbing-301-l05-q1",
          "text": "Which of the following is NOT a suitable source for a greywater reclamation system?",
          "skillId": "plumbing-301-greywater-design",
          "options": [
            {
              "id": "a",
              "text": "Washing machine"
            },
            {
              "id": "b",
              "text": "Kitchen sink"
            },
            {
              "id": "c",
              "text": "Bathroom sink"
            },
            {
              "id": "d",
              "text": "Shower drain"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Kitchen sink water (blackwater) contains high levels of fats, oils, grease (FOG), and food solids that can clog systems and breed bacteria."
        },
        {
          "id": "plumbing-301-l05-q2",
          "text": "In a multi-zone hydronic system, if one zone is overheating while others are cold, the most likely cause is a...",
          "skillId": "plumbing-301-hydronic-diagnostics",
          "options": [
            {
              "id": "a",
              "text": "failed circulator pump."
            },
            {
              "id": "b",
              "text": "low system pressure."
            },
            {
              "id": "c",
              "text": "failed or stuck-open zone valve."
            },
            {
              "id": "d",
              "text": "clogged air vent."
            }
          ],
          "correctOptionId": "c",
          "explanation": "A stuck-open zone valve will allow continuous flow of hot water to that specific zone, causing it to overheat, while potentially 'robbing' flow from other zones."
        }
      ],
      "learningAids": [
        {
          "id": "plumbing-301-l05-a1",
          "type": "document",
          "title": "Key Formulas & Terms",
          "content": "A quick reference sheet for GPD calculations and hydronic terminology."
        }
      ]
    },
    {
      "id": "plumbing-301-l06",
      "title": "Medical Gas & Vacuum Systems (NFPA 99)",
      "type": "video",
      "duration": 20,
      "learningAids": [
        {
          "id": "plumbing-301-l06-a1",
          "type": "image",
          "title": "MedGas Pipe Labels",
          "content": "Chart of standard colors and labels for medical gas piping (Oxygen, Nitrous Oxide, Medical Air, etc.)."
        },
        {
          "id": "plumbing-301-l06-a2",
          "type": "document",
          "title": "NFPA 99 Brazing Requirements",
          "content": "Summary of key requirements for brazing medical gas lines, including nitrogen purge."
        }
      ]
    },
    {
      "id": "plumbing-301-l07",
      "title": "Practice: Video Pipe Inspection & Locating",
      "type": "interactive",
      "duration": 28,
      "metadata": {
        "prompts": [
          "Watch the simulated sewer camera footage.",
          "Identify the type and location of the pipe defect (e.g., root intrusion, bellied pipe).",
          "Recommend the most appropriate repair method (e.g., spot repair, pipe bursting, lining)."
        ]
      },
      "learningAids": [
        {
          "id": "plumbing-301-l07-a1",
          "type": "video",
          "title": "Sample Inspection Footage",
          "content": "A library of short video clips showing common pipe failures as seen from a sewer camera."
        }
      ]
    },
    {
      "id": "plumbing-301-l08",
      "title": "Final Checkpoint: Advanced Systems",
      "type": "quiz",
      "duration": 20,
      "questions": [
        {
          "id": "plumbing-301-l08-q1",
          "text": "During the brazing of a medical oxygen line, a continuous purge of what gas is required to prevent internal oxidation?",
          "skillId": "plumbing-301-medgas-safety",
          "options": [
            {
              "id": "a",
              "text": "Oxygen"
            },
            {
              "id": "b",
              "text": "Carbon dioxide"
            },
            {
              "id": "c",
              "text": "Argon"
            },
            {
              "id": "d",
              "text": "Oil-free dry nitrogen"
            }
          ],
          "correctOptionId": "d",
          "explanation": "NFPA 99 requires a continuous purge of oil-free dry nitrogen during brazing to displace oxygen and prevent the formation of copper oxide flakes inside the pipe, which could be a fire hazard in an oxygen-rich environment."
        },
        {
          "id": "plumbing-301-l08-q2",
          "text": "A hydrostatic test on a new DWV system reveals a pressure drop of 2 PSI over 15 minutes from a test pressure of 5 PSI. This indicates...",
          "skillId": "plumbing-301-advanced-diagnostics",
          "options": [
            {
              "id": "a",
              "text": "a leak in the system that requires locating and repair."
            },
            {
              "id": "b",
              "text": "a normal pressure fluctuation due to temperature change."
            },
            {
              "id": "c",
              "text": "the system passes the test."
            },
            {
              "id": "d",
              "text": "the test gauge is faulty."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Most plumbing codes require a DWV system to hold a 5 PSI (or 10 ft of head) test for 15 minutes with no perceptible drop in pressure. Any drop indicates a leak."
        },
        {
          "id": "plumbing-301-l08-q3",
          "text": "What is the primary function of an air separator in a closed-loop hydronic system?",
          "skillId": "plumbing-301-hydronic-design",
          "options": [
            {
              "id": "a",
              "text": "To add air to the system to maintain pressure."
            },
            {
              "id": "b",
              "text": "To remove entrained microbubbles from the system fluid to improve efficiency and prevent noise."
            },
            {
              "id": "c",
              "text": "To act as a primary safety relief valve."
            },
            {
              "id": "d",
              "text": "To filter out sediment and debris from the water."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Air separators are designed to remove dissolved air and microbubbles from the water, which prevents corrosion, improves heat transfer efficiency, and eliminates gurgling noises."
        }
      ],
      "learningAids": [
        {
          "id": "plumbing-301-l08-a1",
          "type": "glossary",
          "title": "Module Glossary",
          "content": "A searchable glossary of all technical terms used in the module."
        }
      ]
    }
  ]
};
