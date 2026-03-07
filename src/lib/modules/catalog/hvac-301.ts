import type { LearningModule } from "@/lib/modules/types";

export const hvac_301_Module: LearningModule = {
  "id": "hvac-301",
  "title": "HVAC Advanced Systems",
  "description": "A comprehensive module on advanced HVAC system design, focusing on building automation, controls integration, fault detection and diagnostics (FDD), and performance optimization.",
  "subject": "HVAC",
  "tags": [
    "curriculum",
    "interactive",
    "BAS",
    "FDD",
    "Energy Optimization"
  ],
  "minAge": 17,
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
  "thumbnail": "/placeholders/lesson-hvac-advanced.svg",
  "learningObjectives": [
    "Analyze and design control sequences for Building Automation Systems (BAS).",
    "Apply Fault Detection and Diagnostics (FDD) algorithms to identify system anomalies.",
    "Develop and evaluate strategies for HVAC performance optimization and energy savings.",
    "Integrate knowledge of controls, analytics, and optimization in a capstone project."
  ],
  "lessons": [
    {
      "id": "hvac-301-l01",
      "title": "Introduction to Building Automation Systems (BAS)",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "hvac-301-l01-a1",
          "type": "image",
          "title": "BAS Architecture Diagram",
          "content": "A visual schematic showing the levels of a typical BAS, from field controllers to the supervisory network."
        },
        {
          "id": "hvac-301-l01-a2",
          "type": "animation",
          "title": "BACnet vs. Modbus Data Flow",
          "content": "An animated comparison of how data packets are structured and transmitted in BACnet and Modbus protocols."
        }
      ]
    },
    {
      "id": "hvac-301-l02",
      "title": "Practice: VAV System Control Logic",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Define the sequence of operations for a pressure-independent VAV box.",
          "Draft a pseudo-code for controlling the damper actuator based on zone temperature and airflow setpoints.",
          "Explain how you would integrate a morning warm-up cycle into your logic."
        ]
      },
      "learningAids": [
        {
          "id": "hvac-301-l02-a1",
          "type": "practice",
          "title": "Control Sequence Simulator",
          "content": "Use a drag-and-drop interface to build and test a control sequence for a virtual VAV system."
        }
      ]
    },
    {
      "id": "hvac-301-l03",
      "title": "Checkpoint 1: BAS and Controls",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "hvac-301-l03-q1",
          "text": "In a BACnet system, which object type is typically used to represent a physical temperature sensor?",
          "skillId": "hvac-301-skill-bas",
          "options": [
            {
              "id": "a",
              "text": "Analog Input (AI)"
            },
            {
              "id": "b",
              "text": "Binary Output (BO)"
            },
            {
              "id": "c",
              "text": "Analog Value (AV)"
            },
            {
              "id": "d",
              "text": "Schedule"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "hvac-301-l03-q2",
          "text": "What is the primary function of a PID loop in HVAC control?",
          "skillId": "hvac-301-skill-controls",
          "options": [
            {
              "id": "a",
              "text": "To provide a simple on/off control signal."
            },
            {
              "id": "b",
              "text": "To minimize the error between a process variable and its setpoint over time."
            },
            {
              "id": "c",
              "text": "To schedule equipment operation based on occupancy."
            },
            {
              "id": "d",
              "text": "To log historical trend data for analysis."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A Proportional-Integral-Derivative (PID) controller continuously calculates an error value and applies a correction to drive the process variable towards the desired setpoint."
        }
      ]
    },
    {
      "id": "hvac-301-l04",
      "title": "Principles of Fault Detection & Diagnostics (FDD)",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "hvac-301-l04-a1",
          "type": "image",
          "title": "FDD Algorithm Flowchart",
          "content": "A flowchart illustrating a rule-based FDD logic for detecting a stuck economizer damper."
        }
      ]
    },
    {
      "id": "hvac-301-l05",
      "title": "Practice: Analyzing AHU Sensor Data",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "Examine the provided time-series data for mixed air temperature, outside air temperature, and return air temperature.",
          "Based on the data and the economizer status, identify a potential system fault.",
          "Propose two possible root causes for the identified fault."
        ]
      },
      "learningAids": [
        {
          "id": "hvac-301-l05-a1",
          "type": "practice",
          "title": "Fault Data Sandbox",
          "content": "Interact with a dataset from a real Air Handling Unit (AHU) to plot trends and diagnose operational issues."
        }
      ]
    },
    {
      "id": "hvac-301-l06",
      "title": "Checkpoint 2: Fault Analytics",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "hvac-301-l06-q1",
          "text": "An AHU's cooling coil valve is 100% open, but the discharge air temperature is significantly above its setpoint. This is an example of what?",
          "skillId": "hvac-301-skill-fdd",
          "options": [
            {
              "id": "a",
              "text": "Normal operation during high load"
            },
            {
              "id": "b",
              "text": "A performance fault"
            },
            {
              "id": "c",
              "text": "An occupancy sensor error"
            },
            {
              "id": "d",
              "text": "A network communication failure"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "hvac-301-l06-q2",
          "text": "Which FDD approach uses physical models and compares predicted energy consumption with actual meter data?",
          "skillId": "hvac-301-skill-fdd-methods",
          "options": [
            {
              "id": "a",
              "text": "Rule-based methods"
            },
            {
              "id": "b",
              "text": "Statistical process control"
            },
            {
              "id": "c",
              "text": "Gray-box models"
            },
            {
              "id": "d",
              "text": "Black-box machine learning"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Gray-box models combine physics-based principles with data-driven techniques to model system behavior and detect deviations indicative of faults."
        }
      ]
    },
    {
      "id": "hvac-301-l07",
      "title": "HVAC Performance Optimization Strategies",
      "type": "video",
      "duration": 18,
      "learningAids": [
        {
          "id": "hvac-301-l07-a1",
          "type": "image",
          "title": "Psychrometric Chart Analysis",
          "content": "A psychrometric chart showing how supply air reset can save energy under different load conditions."
        },
        {
          "id": "hvac-301-l07-a2",
          "type": "animation",
          "title": "Chiller Plant Optimization",
          "content": "An animation demonstrating how optimal start/stop and condenser water reset can reduce a chiller plant's energy consumption."
        }
      ]
    },
    {
      "id": "hvac-301-l08",
      "title": "Practice: Optimizing a Chiller Schedule",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Analyze the building's cooling load profile and electricity tariff structure.",
          "Develop an optimal start/stop schedule for the chiller to minimize energy costs.",
          "Justify your schedule by estimating the potential kWh and cost savings compared to a fixed schedule."
        ]
      },
      "learningAids": [
        {
          "id": "hvac-301-l08-a1",
          "type": "practice",
          "title": "Energy Modeling Tool",
          "content": "Input different chiller schedules into a simplified energy model to see the impact on daily energy consumption and cost."
        }
      ]
    },
    {
      "id": "hvac-301-l09",
      "title": "Checkpoint 3: Performance Optimization",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "hvac-301-l09-q1",
          "text": "Resetting the supply air temperature setpoint upwards in a VAV system during part-load conditions primarily saves which type of energy?",
          "skillId": "hvac-301-skill-optimization",
          "options": [
            {
              "id": "a",
              "text": "Fan energy"
            },
            {
              "id": "b",
              "text": "Reheat energy"
            },
            {
              "id": "c",
              "text": "Pump energy"
            },
            {
              "id": "d",
              "text": "Lighting energy"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A higher supply air temperature reduces the need for terminal reheat at the VAV boxes, saving significant heating energy."
        }
      ]
    },
    {
      "id": "hvac-301-l10",
      "title": "Capstone Project: Integrated System Audit",
      "type": "project",
      "duration": 60,
      "metadata": {
        "prompts": [
          "You are given a data package for a commercial office building, including BAS trend logs, equipment schedules, and utility bills.",
          "1. **Controls Review:** Identify at least one suboptimal control sequence (e.g., simultaneous heating and cooling).",
          "2. **Fault Detection:** Analyze the data to diagnose one significant equipment fault (e.g., leaking valve, sensor drift).",
          "3. **Optimization Proposal:** Recommend three Energy Conservation Measures (ECMs) with justifications.",
          "4. **Summary Report:** Compile your findings into a brief technical report for the building owner."
        ]
      },
      "learningAids": [
        {
          "id": "hvac-301-l10-a1",
          "type": "resource",
          "title": "Building Data Package",
          "content": "A downloadable zip file containing CSV trend logs, PDF equipment submittals, and an Excel utility bill summary."
        }
      ]
    }
  ]
};
