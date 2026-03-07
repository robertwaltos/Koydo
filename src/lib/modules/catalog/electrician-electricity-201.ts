import type { LearningModule } from "@/lib/modules/types";

export const electrician_electricity_201_Module: LearningModule = {
  "id": "electrician-electricity-201",
  "title": "Electricity for Electricians II",
  "description": "Intermediate electrical systems, load calculations, panel work, grounding, code practice, and troubleshooting workflows.",
  "subject": "Electricity",
  "tags": [
    "curriculum",
    "interactive",
    "vocational",
    "electrical-code"
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
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Perform intermediate load calculations and size conductors accurately.",
    "Differentiate and install proper grounding and bonding systems in panels.",
    "Apply systematic troubleshooting workflows to identify electrical faults."
  ],
  "lessons": [
    {
      "id": "electrician-electricity-201-l01",
      "title": "Intermediate Load Calculations",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "electrician-electricity-201-l01-a1",
          "type": "image",
          "title": "Load Calculation Flowchart",
          "content": "Visual prompt: A detailed flowchart showing the steps to calculate total service load, highlighting the 125% multiplier for continuous loads versus 100% for non-continuous loads."
        },
        {
          "id": "electrician-electricity-201-l01-a2",
          "type": "animation",
          "title": "Adding Up the Amps",
          "content": "Visual prompt: An animated house blueprint where appliances light up as their VA ratings are systematically added to a standard load calculation worksheet."
        }
      ]
    },
    {
      "id": "electrician-electricity-201-l02",
      "title": "Conductor & Breaker Sizing Practice",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Calculate the required ampacity for a 45A continuous load.",
          "Select the appropriate wire size from the NEC ampacity table.",
          "Determine the correct overcurrent protection device (OCPD) size."
        ]
      },
      "learningAids": [
        {
          "id": "electrician-electricity-201-l02-a1",
          "type": "practice",
          "title": "Interactive NEC Table",
          "content": "Visual prompt: An interactive NEC Table 310.16 where users highlight the correct row and column based on temperature rating and calculated ampacity to select the right wire gauge."
        }
      ]
    },
    {
      "id": "electrician-electricity-201-l03",
      "title": "Checkpoint 1: Load Calculations",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "electrician-electricity-201-l03-q1",
          "text": "When calculating the required ampacity for a continuous load, what multiplier must be applied to the load?",
          "skillId": "electrician-electricity-201-skill-load-calc",
          "options": [
            {
              "id": "a",
              "text": "100%"
            },
            {
              "id": "b",
              "text": "125%"
            },
            {
              "id": "c",
              "text": "150%"
            },
            {
              "id": "d",
              "text": "80%"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Continuous loads must be calculated at 125% of their maximum current rating to prevent overheating of conductors and breakers."
        },
        {
          "id": "electrician-electricity-201-l03-q2",
          "text": "Which NEC table is primarily used to determine the allowable ampacity of insulated conductors?",
          "skillId": "electrician-electricity-201-skill-code",
          "options": [
            {
              "id": "a",
              "text": "Table 250.122"
            },
            {
              "id": "b",
              "text": "Table 310.16"
            },
            {
              "id": "c",
              "text": "Table 430.250"
            },
            {
              "id": "d",
              "text": "Chapter 9, Table 8"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Table 310.16 provides the allowable ampacities for insulated conductors rated up to 2000 volts."
        }
      ],
      "learningAids": [
        {
          "id": "electrician-electricity-201-l03-a1",
          "type": "mnemonic",
          "title": "Continuous Load Rule",
          "content": "Remember: 'Continuous means More' - always multiply by 1.25 for loads running 3 hours or longer."
        }
      ]
    },
    {
      "id": "electrician-electricity-201-l04",
      "title": "Panelboards: Main vs. Subpanels",
      "type": "video",
      "duration": 10,
      "learningAids": [
        {
          "id": "electrician-electricity-201-l04-a1",
          "type": "image",
          "title": "Panel Bonding Comparison",
          "content": "Visual prompt: A side-by-side diagram comparing a main service panel (showing bonded neutral and ground) and a subpanel (showing isolated neutral and ground bars)."
        },
        {
          "id": "electrician-electricity-201-l04-a2",
          "type": "animation",
          "title": "Removing the Bonding Jumper",
          "content": "Visual prompt: A 3D animation of a technician correctly removing the green bonding screw/jumper during a subpanel installation to prevent parallel return paths."
        }
      ]
    },
    {
      "id": "electrician-electricity-201-l05",
      "title": "Grounding and Bonding Scenarios",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Identify the grounding electrode conductor (GEC).",
          "Determine the correct size for an equipment grounding conductor (EGC).",
          "Trace the fault current path in a properly bonded system."
        ]
      },
      "learningAids": [
        {
          "id": "electrician-electricity-201-l05-a1",
          "type": "practice",
          "title": "Drag-and-Drop Schematic",
          "content": "Visual prompt: An interactive electrical schematic where learners drag and drop the GEC, EGC, and main bonding jumper into their correct locations within a service entrance."
        }
      ]
    },
    {
      "id": "electrician-electricity-201-l06",
      "title": "Checkpoint 2: Panels & Grounding",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "electrician-electricity-201-l06-q1",
          "text": "Where is the main bonding jumper required to be installed?",
          "skillId": "electrician-electricity-201-skill-grounding",
          "options": [
            {
              "id": "a",
              "text": "At every subpanel"
            },
            {
              "id": "b",
              "text": "At the service disconnect"
            },
            {
              "id": "c",
              "text": "At the first receptacle in a circuit"
            },
            {
              "id": "d",
              "text": "At the grounding electrode"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The main bonding jumper connects the equipment grounding conductor to the grounded conductor (neutral) at the service disconnect only."
        },
        {
          "id": "electrician-electricity-201-l06-q2",
          "text": "What is the primary purpose of the Equipment Grounding Conductor (EGC)?",
          "skillId": "electrician-electricity-201-skill-grounding",
          "options": [
            {
              "id": "a",
              "text": "To carry normal operating current"
            },
            {
              "id": "b",
              "text": "To provide a low-impedance path for fault current"
            },
            {
              "id": "c",
              "text": "To protect against lightning strikes"
            },
            {
              "id": "d",
              "text": "To balance the voltage between phases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The EGC provides a safe, low-impedance path for fault current to return to the source, ensuring the overcurrent device trips quickly."
        }
      ],
      "learningAids": [
        {
          "id": "electrician-electricity-201-l06-a1",
          "type": "mnemonic",
          "title": "Subpanel Rule",
          "content": "Remember: 'Sub means Separate' - keep neutrals and grounds isolated in subpanels."
        }
      ]
    },
    {
      "id": "electrician-electricity-201-l07",
      "title": "Conduit and Box Fill Calculations",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "electrician-electricity-201-l07-a1",
          "type": "image",
          "title": "Conduit Fill Limits",
          "content": "Visual prompt: A cross-section graphic of a conduit showing the 40% fill rule for over two conductors, with color-coded areas representing usable vs. empty space."
        },
        {
          "id": "electrician-electricity-201-l07-a2",
          "type": "animation",
          "title": "Box Fill Counter",
          "content": "Visual prompt: An animation dropping wires, clamps, and a receptacle into a junction box, with an on-screen counter updating the total volume allowance based on NEC Article 314."
        }
      ]
    },
    {
      "id": "electrician-electricity-201-l08",
      "title": "Navigating NEC Tables",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Calculate the box fill for four 12 AWG conductors and one device.",
          "Determine the maximum number of 10 AWG THHN wires in a 3/4-inch EMT conduit.",
          "Apply the adjustment factor for more than three current-carrying conductors."
        ]
      },
      "learningAids": [
        {
          "id": "electrician-electricity-201-l08-a1",
          "type": "practice",
          "title": "Virtual Codebook",
          "content": "Visual prompt: A simulated codebook interface where learners click through index tabs to find specific tables (like Chapter 9, Table 1) for fill calculations."
        }
      ]
    },
    {
      "id": "electrician-electricity-201-l09",
      "title": "Checkpoint 3: Code & Calculations",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "electrician-electricity-201-l09-q1",
          "text": "When calculating box fill, how many volume allowances does a standard duplex receptacle count as?",
          "skillId": "electrician-electricity-201-skill-code",
          "options": [
            {
              "id": "a",
              "text": "One"
            },
            {
              "id": "b",
              "text": "Two"
            },
            {
              "id": "c",
              "text": "Three"
            },
            {
              "id": "d",
              "text": "Zero"
            }
          ],
          "correctOptionId": "b",
          "explanation": "According to NEC Article 314, a device or equipment mounted on a single strap counts as two volume allowances based on the largest wire connected to it."
        },
        {
          "id": "electrician-electricity-201-l09-q2",
          "text": "What is the maximum permitted conduit fill percentage for a conduit containing three or more conductors?",
          "skillId": "electrician-electricity-201-skill-code",
          "options": [
            {
              "id": "a",
              "text": "31%"
            },
            {
              "id": "b",
              "text": "40%"
            },
            {
              "id": "c",
              "text": "53%"
            },
            {
              "id": "d",
              "text": "60%"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Chapter 9, Table 1 of the NEC limits conduit fill to 40% when installing three or more conductors to prevent damage during pulling and allow for heat dissipation."
        }
      ],
      "learningAids": [
        {
          "id": "electrician-electricity-201-l09-a1",
          "type": "mnemonic",
          "title": "Device Allowance",
          "content": "Remember: 'One strap, two volumes.' Every yoke/strap counts as double the wire size connected to it."
        }
      ]
    },
    {
      "id": "electrician-electricity-201-l10",
      "title": "Systematic Troubleshooting",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "electrician-electricity-201-l10-a1",
          "type": "image",
          "title": "Troubleshooting Flowchart",
          "content": "Visual prompt: A 6-step troubleshooting flowchart starting from 'Verify the Symptom' and ending at 'Verify the Repair', with decision branches for common faults."
        },
        {
          "id": "electrician-electricity-201-l10-a2",
          "type": "animation",
          "title": "Diagnosing an Open Neutral",
          "content": "Visual prompt: A first-person view animation of a technician using a digital multimeter to test for an open neutral in a multi-wire branch circuit, showing voltage fluctuations."
        }
      ]
    },
    {
      "id": "electrician-electricity-201-l11",
      "title": "Virtual Fault Diagnosis",
      "type": "interactive",
      "duration": 18,
      "metadata": {
        "prompts": [
          "Test the voltage across the suspected open switch.",
          "Measure continuity to locate the short to ground.",
          "Interpret the megohmmeter reading for motor insulation."
        ]
      },
      "learningAids": [
        {
          "id": "electrician-electricity-201-l11-a1",
          "type": "practice",
          "title": "Interactive Circuit Board",
          "content": "Visual prompt: An interactive circuit board where the user places virtual multimeter probes on different terminals to diagnose a hidden fault based on the meter readings."
        }
      ]
    },
    {
      "id": "electrician-electricity-201-l12",
      "title": "Checkpoint 4: Troubleshooting",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "electrician-electricity-201-l12-q1",
          "text": "What is the critical first step in any systematic troubleshooting workflow?",
          "skillId": "electrician-electricity-201-skill-troubleshooting",
          "options": [
            {
              "id": "a",
              "text": "Replace the breaker"
            },
            {
              "id": "b",
              "text": "Verify the symptom and gather information"
            },
            {
              "id": "c",
              "text": "Check for continuity"
            },
            {
              "id": "d",
              "text": "Turn off the main power"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Before taking action, you must verify the symptom and gather information from the user or system to understand exactly what is failing."
        },
        {
          "id": "electrician-electricity-201-l12-q2",
          "text": "Which instrument is best suited for testing the integrity of wire insulation?",
          "skillId": "electrician-electricity-201-skill-troubleshooting",
          "options": [
            {
              "id": "a",
              "text": "Standard Multimeter"
            },
            {
              "id": "b",
              "text": "Clamp Meter"
            },
            {
              "id": "c",
              "text": "Megohmmeter (Megger)"
            },
            {
              "id": "d",
              "text": "Non-contact voltage tester"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A megohmmeter applies a high voltage to test the resistance of insulation, identifying micro-cracks or degradation that a standard multimeter cannot detect."
        }
      ],
      "learningAids": [
        {
          "id": "electrician-electricity-201-l12-a1",
          "type": "mnemonic",
          "title": "Troubleshooting Steps",
          "content": "Remember the 4 I's: Inquire (ask questions), Inspect (look for damage), Isolate (find the fault), Implement (repair)."
        }
      ]
    }
  ]
};
