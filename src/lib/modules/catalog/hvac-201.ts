import type { LearningModule } from "@/lib/modules/types";

export const hvac_201_Module: LearningModule = {
  "id": "hvac-201",
  "title": "HVAC Service and Controls",
  "description": "An intermediate module on diagnosing refrigeration cycles, troubleshooting electrical schematics, analyzing control systems, and performing maintenance for energy efficiency.",
  "subject": "HVAC",
  "tags": [
    "curriculum",
    "interactive",
    "diagnostics",
    "controls"
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
  "thumbnail": "/placeholders/lesson-hvac-controls.svg",
  "learningObjectives": [
    "Diagnose common issues in the refrigeration cycle using pressure and temperature readings.",
    "Interpret electrical schematics to troubleshoot component failures.",
    "Analyze and test HVAC control systems, including thermostats and control boards.",
    "Apply standard maintenance procedures to optimize system performance and energy efficiency."
  ],
  "lessons": [
    {
      "id": "hvac-201-l01",
      "title": "Advanced Refrigeration Cycle Diagnostics",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "hvac-201-l01-a1",
          "type": "image",
          "title": "Pressure-Enthalpy Diagram",
          "content": "A detailed P-H diagram illustrating the four stages of the refrigeration cycle, including superheat and subcooling zones."
        },
        {
          "id": "hvac-201-l01-a2",
          "type": "animation",
          "title": "Refrigerant Flow Issues",
          "content": "Animation showing how system performance is affected by an overcharged system, an undercharged system, and a refrigerant restriction."
        }
      ]
    },
    {
      "id": "hvac-201-l02",
      "title": "Practice: Measuring Superheat and Subcooling",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Attach gauges to the virtual system's service ports.",
          "Record the suction and liquid line pressures and temperatures.",
          "Calculate the system's superheat and subcooling.",
          "Diagnose the system's condition based on your readings."
        ]
      },
      "learningAids": [
        {
          "id": "hvac-201-l02-a1",
          "type": "practice",
          "title": "Virtual HVAC Simulator",
          "content": "Interactive simulator to practice taking pressure and temperature readings on a residential split-system AC unit."
        }
      ]
    },
    {
      "id": "hvac-201-l03",
      "title": "Checkpoint 1: Refrigeration Cycle",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "hvac-201-l03-q1",
          "text": "A system with high superheat and high subcooling is most likely experiencing what issue?",
          "skillId": "hvac-201-skill-diagnostics",
          "options": [
            {
              "id": "a",
              "text": "A refrigerant overcharge"
            },
            {
              "id": "b",
              "text": "A non-condensable in the system"
            },
            {
              "id": "c",
              "text": "A dirty evaporator coil"
            },
            {
              "id": "d",
              "text": "A refrigerant undercharge"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Non-condensables like air get trapped in the condenser, raising head pressure (high subcooling) and reducing system capacity, which can lead to high superheat."
        },
        {
          "id": "hvac-201-l03-q2",
          "text": "What is the primary function of a Thermostatic Expansion Valve (TXV)?",
          "skillId": "hvac-201-skill-components",
          "options": [
            {
              "id": "a",
              "text": "To maintain a constant pressure in the evaporator"
            },
            {
              "id": "b",
              "text": "To compress refrigerant vapor"
            },
            {
              "id": "c",
              "text": "To maintain a constant superheat at the evaporator outlet"
            },
            {
              "id": "d",
              "text": "To filter contaminants from the refrigerant"
            }
          ],
          "correctOptionId": "c"
        }
      ]
    },
    {
      "id": "hvac-201-l04",
      "title": "Reading HVAC Electrical Schematics",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "hvac-201-l04-a1",
          "type": "image",
          "title": "Sample Wiring Diagram",
          "content": "A color-coded ladder diagram for a standard gas furnace and air conditioning unit, with components labeled."
        },
        {
          "id": "hvac-201-l04-a2",
          "type": "animation",
          "title": "Tracing a Circuit",
          "content": "Animation showing the path of 24V electricity from the thermostat's 'Y' terminal, through safety switches, to the compressor contactor coil."
        }
      ]
    },
    {
      "id": "hvac-201-l05",
      "title": "Practice: Testing Electrical Components",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Select the correct multimeter setting to test a capacitor.",
          "Safely discharge the virtual capacitor before testing.",
          "Measure the capacitor's microfarad (μF) reading and compare it to its rating.",
          "Test the contactor coil for proper resistance and the contacts for continuity."
        ]
      },
      "learningAids": [
        {
          "id": "hvac-201-l05-a1",
          "type": "practice",
          "title": "Virtual Multimeter Simulation",
          "content": "Use a simulated multimeter to test common HVAC electrical components like capacitors, contactors, and transformers for faults."
        }
      ]
    },
    {
      "id": "hvac-201-l06",
      "title": "Understanding HVAC Control Systems",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "hvac-201-l06-a1",
          "type": "image",
          "title": "Furnace Control Board Layout",
          "content": "Diagram of a modern furnace control board with key terminals (R, W, Y, G, C) and diagnostic LED codes explained."
        }
      ]
    },
    {
      "id": "hvac-201-l07",
      "title": "Practice: Troubleshooting Control Logic",
      "type": "interactive",
      "duration": 18,
      "metadata": {
        "prompts": [
          "Analyze the scenario: The thermostat calls for cooling, the indoor fan runs, but the outdoor unit does not start.",
          "Form a hypothesis about the potential point of failure in the control circuit.",
          "Use the virtual multimeter to test voltage at the thermostat, control board, and contactor.",
          "Identify the faulty component based on your electrical readings."
        ]
      },
      "learningAids": [
        {
          "id": "hvac-201-l07-a1",
          "type": "practice",
          "title": "Control Circuit Diagnostic Tool",
          "content": "An interactive schematic that allows you to simulate and diagnose common control circuit failures."
        }
      ]
    },
    {
      "id": "hvac-201-l08",
      "title": "Final Assessment: Service and Controls",
      "type": "quiz",
      "duration": 20,
      "questions": [
        {
          "id": "hvac-201-l08-q1",
          "text": "On a service call, you measure low superheat and high subcooling. What is the most likely cause?",
          "skillId": "hvac-201-skill-diagnostics",
          "options": [
            {
              "id": "a",
              "text": "Refrigerant undercharge"
            },
            {
              "id": "b",
              "text": "Refrigerant overcharge"
            },
            {
              "id": "c",
              "text": "Dirty condenser coil"
            },
            {
              "id": "d",
              "text": "Faulty compressor"
            }
          ],
          "correctOptionId": "b",
          "explanation": "An overcharge of refrigerant causes excess liquid to back up in the condenser (high subcooling) and can flood the evaporator (low superheat)."
        },
        {
          "id": "hvac-201-l08-q2",
          "text": "In a standard cooling schematic, which two terminals must be energized by the thermostat to start the compressor and indoor fan?",
          "skillId": "hvac-201-skill-controls",
          "options": [
            {
              "id": "a",
              "text": "R and W"
            },
            {
              "id": "b",
              "text": "W and G"
            },
            {
              "id": "c",
              "text": "Y and G"
            },
            {
              "id": "d",
              "text": "R and C"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Y is the standard terminal for the cooling call to the compressor contactor, and G is the terminal for the indoor fan relay."
        },
        {
          "id": "hvac-201-l08-q3",
          "text": "A dual-run capacitor rated 45/5 μF tests at 30/4.5 μF. What is the correct action?",
          "skillId": "hvac-201-skill-electrical",
          "options": [
            {
              "id": "a",
              "text": "Keep it in service, it is within tolerance."
            },
            {
              "id": "b",
              "text": "Replace the capacitor because the 45 μF side is out of tolerance."
            },
            {
              "id": "c",
              "text": "Replace the capacitor because the 5 μF side is out of tolerance."
            },
            {
              "id": "d",
              "text": "Add a second capacitor in parallel to boost the reading."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Capacitors typically have a tolerance of +/- 6%. The 45 μF side is well below this tolerance and must be replaced to ensure proper motor operation."
        }
      ]
    }
  ]
};
