import type { LearningModule } from "@/lib/modules/types";

export const hvac_401_Module: LearningModule = {
  "id": "hvac-401",
  "title": "Advanced HVAC Systems: Design, Commissioning, and Strategy",
  "description": "Master-level HVAC planning, commissioning leadership, and enterprise maintenance strategy.",
  "subject": "HVAC",
  "tags": [
    "curriculum",
    "interactive",
    "commissioning",
    "building automation",
    "maintenance strategy",
    "system design"
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
  "thumbnail": "/placeholders/lesson-hvac-master.svg",
  "learningObjectives": [
    "Analyze complex building loads using psychrometric data.",
    "Develop a comprehensive commissioning plan for a large commercial HVAC system.",
    "Design a predictive maintenance strategy for an enterprise portfolio of buildings.",
    "Evaluate Building Automation System (BAS) control sequences for optimal energy efficiency."
  ],
  "lessons": [
    {
      "id": "hvac-401-l01",
      "title": "Psychrometrics & Advanced Load Calculation",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "hvac-401-l01-a1",
          "type": "image",
          "title": "Psychrometric Chart Breakdown",
          "content": "Annotated diagram showing enthalpy, humidity ratio, and dew point lines for air-water vapor mixtures."
        },
        {
          "id": "hvac-401-l01-a2",
          "type": "animation",
          "title": "Dynamic Load Simulation",
          "content": "Animation showing how solar gain, occupant load, and ventilation affect a building's thermal profile over 24 hours."
        }
      ]
    },
    {
      "id": "hvac-401-l02",
      "title": "Practice: Commercial Load Analysis",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Identify all sources of sensible and latent heat gain from the provided building blueprint.",
          "Using the provided psychrometric chart tool, calculate the required cooling coil capacity (in BTUh).",
          "Justify your selection of a 5% safety factor in your final calculation."
        ]
      },
      "learningAids": [
        {
          "id": "hvac-401-l02-a1",
          "type": "practice",
          "title": "Interactive Blueprint & Calculator",
          "content": "Use the interactive blueprint and integrated load calculator to solve the scenario for a multi-zone office building."
        }
      ]
    },
    {
      "id": "hvac-401-l03",
      "title": "Checkpoint: System Design Principles",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "hvac-401-l03-q1",
          "text": "On a psychrometric chart, which process moves horizontally from left to right?",
          "skillId": "hvac-401-skill-psychrometrics",
          "options": [
            {
              "id": "a",
              "text": "Sensible heating"
            },
            {
              "id": "b",
              "text": "Dehumidification"
            },
            {
              "id": "c",
              "text": "Evaporative cooling"
            },
            {
              "id": "d",
              "text": "Sensible cooling"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Sensible heating adds heat without changing the moisture content (humidity ratio), resulting in a horizontal movement to the right on the chart."
        },
        {
          "id": "hvac-401-l03-q2",
          "text": "What is the primary factor influencing latent load in a high-occupancy space like an auditorium?",
          "skillId": "hvac-401-skill-loads",
          "options": [
            {
              "id": "a",
              "text": "Solar gain through windows"
            },
            {
              "id": "b",
              "text": "Heat from lighting equipment"
            },
            {
              "id": "c",
              "text": "Respiration and perspiration from occupants"
            },
            {
              "id": "d",
              "text": "Infiltration of outdoor air"
            }
          ],
          "correctOptionId": "c"
        }
      ],
      "learningAids": [
        {
          "id": "hvac-401-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Remember 'SLIVER' for load sources: Solar, Lights, Infiltration, Ventilation, Equipment, Roof/Residents."
        }
      ]
    },
    {
      "id": "hvac-401-l04",
      "title": "The Commissioning (Cx) Process",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "hvac-401-l04-a1",
          "type": "image",
          "title": "Commissioning Phases Flowchart",
          "content": "Flowchart from pre-design to post-occupancy Cx activities, highlighting key deliverables at each stage."
        },
        {
          "id": "hvac-401-l04-a2",
          "type": "animation",
          "title": "Functional Performance Test",
          "content": "Animated walkthrough of a functional test on a Variable Air Volume (VAV) box, showing command vs. actual response."
        }
      ]
    },
    {
      "id": "hvac-401-l05",
      "title": "Practice: Developing a Cx Checklist",
      "type": "interactive",
      "duration": 18,
      "metadata": {
        "prompts": [
          "List the three most critical pre-start checks for a 50-ton rooftop unit (RTU).",
          "Draft a functional performance test step to verify the economizer's high-limit control.",
          "Explain how you would document a deficiency found during this test in a commissioning log."
        ]
      },
      "learningAids": [
        {
          "id": "hvac-401-l05-a1",
          "type": "practice",
          "title": "Checklist Builder Tool",
          "content": "Use the drag-and-drop tool to build a pre-functional checklist from a library of standard ASHRAE tests."
        }
      ]
    },
    {
      "id": "hvac-401-l06",
      "title": "Checkpoint: Commissioning Leadership",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "hvac-401-l06-q1",
          "text": "What is the primary goal of a Functional Performance Test (FPT)?",
          "skillId": "hvac-401-skill-commissioning",
          "options": [
            {
              "id": "a",
              "text": "To verify equipment has been installed per submittals."
            },
            {
              "id": "b",
              "text": "To ensure the system operates interactively according to the design intent."
            },
            {
              "id": "c",
              "text": "To train facility staff on new equipment."
            },
            {
              "id": "d",
              "text": "To confirm all piping has been pressure tested."
            }
          ],
          "correctOptionId": "b",
          "explanation": "FPTs test the dynamic, interactive performance of systems to ensure they meet the Owner's Project Requirements (OPR) and Basis of Design (BOD)."
        },
        {
          "id": "hvac-401-l06-q2",
          "text": "During a project, the Commissioning Authority (CxA) reports directly to whom to maintain independence?",
          "skillId": "hvac-401-skill-commissioning",
          "options": [
            {
              "id": "a",
              "text": "The General Contractor"
            },
            {
              "id": "b",
              "text": "The Mechanical Subcontractor"
            },
            {
              "id": "c",
              "text": "The Building Owner or Owner's Representative"
            },
            {
              "id": "d",
              "text": "The Architect"
            }
          ],
          "correctOptionId": "c"
        }
      ],
      "learningAids": [
        {
          "id": "hvac-401-l06-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Cx follows 'D-C-A-V': Design Review, Construction Checks, Acceptance Testing, Verification."
        }
      ]
    },
    {
      "id": "hvac-401-l07",
      "title": "Predictive Maintenance & BAS Integration",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "hvac-401-l07-a1",
          "type": "image",
          "title": "Maintenance Strategy Comparison",
          "content": "Infographic comparing reactive, preventive, and predictive maintenance costs, reliability, and required technology."
        },
        {
          "id": "hvac-401-l07-a2",
          "type": "animation",
          "title": "BAS Fault Detection",
          "content": "Animation of a BAS dashboard showing trend data that predicts a failing chiller compressor based on rising amperage and falling efficiency."
        }
      ]
    },
    {
      "id": "hvac-401-l08",
      "title": "Practice: BAS Trend Data Analysis",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Analyze the provided 7-day trend log for the chilled water supply temperature. What anomaly do you observe?",
          "Hypothesize the most likely root cause of the observed temperature drift.",
          "Recommend a control sequence adjustment to the PID loop to correct the issue and prevent recurrence."
        ]
      },
      "learningAids": [
        {
          "id": "hvac-401-l08-a1",
          "type": "practice",
          "title": "Interactive BAS Dashboard",
          "content": "Analyze real-world trend data logs in a simulated Building Automation System interface to diagnose a system fault."
        }
      ]
    },
    {
      "id": "hvac-401-l09",
      "title": "Capstone Assessment: HVAC Strategy",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "hvac-401-l09-q1",
          "text": "A hospital requires N+1 redundancy for its cooling plant. Which design best achieves this while optimizing for part-load efficiency?",
          "skillId": "hvac-401-skill-design",
          "options": [
            {
              "id": "a",
              "text": "Two chillers each sized for 100% of the peak load."
            },
            {
              "id": "b",
              "text": "Three chillers each sized for 50% of the peak load."
            },
            {
              "id": "c",
              "text": "One large chiller sized for 150% of the peak load."
            },
            {
              "id": "d",
              "text": "Four chillers each sized for 33% of the peak load."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Three 50% chillers provide N+1 redundancy (one can fail, and the other two meet 100% load). This configuration also allows for more efficient staging at part-load conditions compared to oversized units."
        },
        {
          "id": "hvac-401-l09-q2",
          "text": "BAS trend data shows an AHU's mixed air temperature is consistently 5°F below its setpoint, even with the outdoor air damper at minimum position. What is the most likely cause?",
          "skillId": "hvac-401-skill-bas",
          "options": [
            {
              "id": "a",
              "text": "A faulty mixed air temperature sensor."
            },
            {
              "id": "b",
              "text": "The heating coil valve is stuck open."
            },
            {
              "id": "c",
              "text": "The outdoor air damper is leaking or stuck partially open."
            },
            {
              "id": "d",
              "text": "The return air fan is oversized."
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "hvac-401-l09-q3",
          "text": "When developing an enterprise maintenance plan, which data point is most critical for prioritizing capital replacement projects across a portfolio of buildings?",
          "skillId": "hvac-401-skill-maintenance",
          "options": [
            {
              "id": "a",
              "text": "The age of each piece of equipment."
            },
            {
              "id": "b",
              "text": "The total number of maintenance work orders per building."
            },
            {
              "id": "c",
              "text": "The Facility Condition Index (FCI), which compares repair cost to replacement value."
            },
            {
              "id": "d",
              "text": "Tenant comfort complaints for each building."
            }
          ],
          "correctOptionId": "c",
          "explanation": "FCI provides a standardized, financial metric to compare the condition of assets across a portfolio, allowing for data-driven capital planning."
        }
      ],
      "learningAids": [
        {
          "id": "hvac-401-l09-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Integrate your skills: Analyze (Loads), Verify (Cx), Optimize (BAS)."
        }
      ]
    }
  ]
};
