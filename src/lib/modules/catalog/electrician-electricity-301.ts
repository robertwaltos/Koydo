import type { LearningModule } from "@/lib/modules/types";

export const electrician_electricity_301_Module: LearningModule = {
  "id": "electrician-electricity-301",
  "title": "Electricity for Electricians III",
  "description": "Advanced industrial controls, motors, three-phase systems, fault analysis, and commissioning for field electricians.",
  "subject": "Electricity",
  "tags": [
    "curriculum",
    "interactive",
    "industrial",
    "motors",
    "troubleshooting"
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
  "thumbnail": "/placeholders/lesson-industrial-motor.svg",
  "learningObjectives": [
    "Analyze and configure three-phase systems and motor controls.",
    "Program and troubleshoot Variable Frequency Drives (VFDs) and PLCs.",
    "Perform advanced fault analysis and commissioning procedures safely."
  ],
  "lessons": [
    {
      "id": "electrician-electricity-301-l01",
      "title": "Three-Phase Power & Motor Theory",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "electrician-electricity-301-l01-a1",
          "type": "image",
          "title": "Delta vs. Wye Configurations",
          "content": "A detailed schematic diagram comparing Delta and Wye transformer connections, annotated with phase and line voltage/current formulas."
        },
        {
          "id": "electrician-electricity-301-l01-a2",
          "type": "animation",
          "title": "Three-Phase Sine Wave Animation",
          "content": "An animated graph showing three AC sine waves offset by 120 degrees, demonstrating how rotating magnetic fields are generated in a stator."
        }
      ]
    },
    {
      "id": "electrician-electricity-301-l02",
      "title": "Wiring & Configuring Three-Phase Motors",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Identify the correct lead connections for a 9-lead dual-voltage motor on high voltage.",
          "Calculate the expected full-load amperage (FLA) based on the provided nameplate.",
          "Determine the correct overload heater size for the motor starter."
        ]
      },
      "learningAids": [
        {
          "id": "electrician-electricity-301-l02-a1",
          "type": "practice",
          "title": "Virtual Motor Peckerhead",
          "content": "An interactive 3D motor junction box where learners drag and drop wire nuts to connect T-leads for specific voltage requirements."
        }
      ]
    },
    {
      "id": "electrician-electricity-301-l03",
      "title": "Checkpoint 1: Three-Phase Systems",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "electrician-electricity-301-l03-q1",
          "text": "In a balanced Wye (Star) system, what is the relationship between line voltage and phase voltage?",
          "skillId": "electrician-electricity-301-skill-three-phase",
          "options": [
            {
              "id": "a",
              "text": "Line voltage equals phase voltage multiplied by the square root of 3."
            },
            {
              "id": "b",
              "text": "Line voltage is equal to phase voltage."
            },
            {
              "id": "c",
              "text": "Phase voltage equals line voltage multiplied by the square root of 3."
            },
            {
              "id": "d",
              "text": "Line voltage is half of the phase voltage."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "electrician-electricity-301-l03-q2",
          "text": "How do you reverse the direction of rotation of a three-phase induction motor?",
          "skillId": "electrician-electricity-301-skill-motors",
          "options": [
            {
              "id": "a",
              "text": "Swap any two of the three line leads."
            },
            {
              "id": "b",
              "text": "Reverse the polarity of the neutral wire."
            },
            {
              "id": "c",
              "text": "Increase the frequency of the supply voltage."
            },
            {
              "id": "d",
              "text": "Swap all three line leads simultaneously."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "electrician-electricity-301-l03-q3",
          "text": "What is the synchronous speed of a 4-pole motor operating on a 60 Hz supply?",
          "skillId": "electrician-electricity-301-skill-motors",
          "options": [
            {
              "id": "a",
              "text": "1800 RPM"
            },
            {
              "id": "b",
              "text": "3600 RPM"
            },
            {
              "id": "c",
              "text": "1200 RPM"
            },
            {
              "id": "d",
              "text": "900 RPM"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Synchronous speed = (120 * Frequency) / Number of Poles. (120 * 60) / 4 = 1800 RPM."
        }
      ],
      "learningAids": [
        {
          "id": "electrician-electricity-301-l03-a1",
          "type": "mnemonic",
          "title": "Speed Formula Memory Cue",
          "content": "Remember '120 times Hertz over Poles' to quickly calculate synchronous RPM."
        }
      ]
    },
    {
      "id": "electrician-electricity-301-l04",
      "title": "Industrial Controls: PLCs & VFDs",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "electrician-electricity-301-l04-a1",
          "type": "image",
          "title": "VFD Block Diagram",
          "content": "A visual block diagram of a Variable Frequency Drive showing the rectifier, DC bus, and IGBT inverter stages."
        },
        {
          "id": "electrician-electricity-301-l04-a2",
          "type": "animation",
          "title": "Pulse Width Modulation (PWM)",
          "content": "An animation demonstrating how PWM creates a simulated AC waveform by rapidly switching DC voltage on and off to control motor speed."
        }
      ]
    },
    {
      "id": "electrician-electricity-301-l05",
      "title": "VFD Parameter Setup & Wiring",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Input the motor nameplate data (Voltage, FLA, RPM) into the VFD parameters.",
          "Configure the acceleration and deceleration ramp times.",
          "Establish the control wiring for a 2-wire start/stop circuit."
        ]
      },
      "learningAids": [
        {
          "id": "electrician-electricity-301-l05-a1",
          "type": "practice",
          "title": "Virtual VFD Keypad",
          "content": "A simulated VFD interface allowing the user to navigate menus, input parameter values, and test motor response."
        }
      ]
    },
    {
      "id": "electrician-electricity-301-l06",
      "title": "Checkpoint 2: Industrial Controls",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "electrician-electricity-301-l06-q1",
          "text": "What is the primary function of the DC bus in a Variable Frequency Drive (VFD)?",
          "skillId": "electrician-electricity-301-skill-vfd",
          "options": [
            {
              "id": "a",
              "text": "To smooth the rectified DC voltage and store energy for the inverter section."
            },
            {
              "id": "b",
              "text": "To convert the incoming AC voltage directly to a lower AC voltage."
            },
            {
              "id": "c",
              "text": "To provide a grounding point for the motor chassis."
            },
            {
              "id": "d",
              "text": "To step up the frequency of the incoming power supply."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "electrician-electricity-301-l06-q2",
          "text": "In PLC ladder logic, what does an XIC (Examine If Closed) instruction look for?",
          "skillId": "electrician-electricity-301-skill-plc",
          "options": [
            {
              "id": "a",
              "text": "A true (logical 1) condition at the specified address."
            },
            {
              "id": "b",
              "text": "A false (logical 0) condition at the specified address."
            },
            {
              "id": "c",
              "text": "An analog voltage drop across a resistor."
            },
            {
              "id": "d",
              "text": "A physical normally closed switch."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "electrician-electricity-301-l06-q3",
          "text": "Why is shielded cable recommended for the output wiring between a VFD and a motor?",
          "skillId": "electrician-electricity-301-skill-vfd",
          "options": [
            {
              "id": "a",
              "text": "To mitigate Electromagnetic Interference (EMI) caused by high-frequency switching."
            },
            {
              "id": "b",
              "text": "To increase the voltage delivered to the motor."
            },
            {
              "id": "c",
              "text": "To prevent the motor from overheating during low-speed operation."
            },
            {
              "id": "d",
              "text": "To allow the cable to carry higher amperage than unshielded wire."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The rapid switching of IGBTs in a VFD creates high-frequency noise (EMI). Shielded cables contain this noise, preventing interference with nearby sensitive electronics."
        }
      ],
      "learningAids": [
        {
          "id": "electrician-electricity-301-l06-a1",
          "type": "mnemonic",
          "title": "VFD Stages",
          "content": "Remember the VFD process: Rectify (AC to DC), Filter (DC Bus), Invert (DC to AC)."
        }
      ]
    },
    {
      "id": "electrician-electricity-301-l07",
      "title": "Advanced Fault Analysis & Commissioning",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "electrician-electricity-301-l07-a1",
          "type": "image",
          "title": "Infrared Thermography",
          "content": "An infrared thermal image showing a hot spot on a three-phase breaker, indicating a loose connection or unbalanced load."
        },
        {
          "id": "electrician-electricity-301-l07-a2",
          "type": "animation",
          "title": "Megger Testing Procedure",
          "content": "A step-by-step animation demonstrating how to safely perform an insulation resistance (megger) test on motor windings to ground."
        }
      ]
    },
    {
      "id": "electrician-electricity-301-l08",
      "title": "Troubleshooting & Commissioning Simulation",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Perform a step-by-step lockout/tagout (LOTO) procedure before opening the cabinet.",
          "Analyze the multimeter readings to identify the open phase.",
          "Document the commissioning baseline data for future maintenance."
        ]
      },
      "learningAids": [
        {
          "id": "electrician-electricity-301-l08-a1",
          "type": "practice",
          "title": "Virtual Diagnostic Tools",
          "content": "A simulated environment where learners use a virtual multimeter and megohmmeter to test a faulted motor circuit and identify a short to ground."
        }
      ]
    },
    {
      "id": "electrician-electricity-301-l09",
      "title": "Checkpoint 3: Fault Analysis",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "electrician-electricity-301-l09-q1",
          "text": "When performing an insulation resistance test on a 480V motor, what is the generally accepted minimum reading for safe operation?",
          "skillId": "electrician-electricity-301-skill-troubleshooting",
          "options": [
            {
              "id": "a",
              "text": "1 Megohm plus 1 Megohm per kilovolt of operating voltage."
            },
            {
              "id": "b",
              "text": "0 Ohms."
            },
            {
              "id": "c",
              "text": "100 Ohms."
            },
            {
              "id": "d",
              "text": "500 Kilohms."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "electrician-electricity-301-l09-q2",
          "text": "What is the most likely result of a three-phase motor experiencing a 'single-phasing' condition while running fully loaded?",
          "skillId": "electrician-electricity-301-skill-troubleshooting",
          "options": [
            {
              "id": "a",
              "text": "The motor will draw excessive current on the remaining phases and eventually trip the overload relay."
            },
            {
              "id": "b",
              "text": "The motor will immediately reverse direction."
            },
            {
              "id": "c",
              "text": "The motor will continue to run normally with reduced efficiency."
            },
            {
              "id": "d",
              "text": "The motor will generate power back into the grid."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "electrician-electricity-301-l09-q3",
          "text": "Which issue is most commonly associated with high levels of harmonic distortion in an industrial facility?",
          "skillId": "electrician-electricity-301-skill-power-quality",
          "options": [
            {
              "id": "a",
              "text": "Overheating of neutral conductors and transformers."
            },
            {
              "id": "b",
              "text": "Increased lifespan of incandescent lighting."
            },
            {
              "id": "c",
              "text": "Decreased voltage drop across long cable runs."
            },
            {
              "id": "d",
              "text": "Improved power factor without the need for capacitors."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Non-linear loads like VFDs create harmonics. Triplen harmonics add together in the neutral conductor, causing severe overheating even if phase currents are balanced."
        }
      ],
      "learningAids": [
        {
          "id": "electrician-electricity-301-l09-a1",
          "type": "mnemonic",
          "title": "Troubleshooting Steps",
          "content": "Verify symptoms, Isolate the circuit, Test components, Repair, and Document."
        }
      ]
    },
    {
      "id": "electrician-electricity-301-l10",
      "title": "Final Master Checkpoint",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "electrician-electricity-301-l10-q1",
          "text": "A VFD trips on an 'Overvoltage' fault during deceleration. What is the most likely cause and solution?",
          "skillId": "electrician-electricity-301-skill-vfd-troubleshooting",
          "options": [
            {
              "id": "a",
              "text": "The motor is regenerating power; increase the deceleration time or add a dynamic braking resistor."
            },
            {
              "id": "b",
              "text": "The incoming line voltage is too low; install a boost transformer."
            },
            {
              "id": "c",
              "text": "The motor bearings are failing; replace the motor."
            },
            {
              "id": "d",
              "text": "The VFD is undersized; replace it with a larger drive."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "electrician-electricity-301-l10-q2",
          "text": "When commissioning a new industrial control panel, which NFPA 70E requirement must be met before verifying voltage with a meter?",
          "skillId": "electrician-electricity-301-skill-safety",
          "options": [
            {
              "id": "a",
              "text": "Don the appropriate Personal Protective Equipment (PPE) based on the arc flash risk assessment."
            },
            {
              "id": "b",
              "text": "Bypass all safety interlocks to ensure continuous power."
            },
            {
              "id": "c",
              "text": "Ensure the panel is grounded to a nearby water pipe only."
            },
            {
              "id": "d",
              "text": "Remove all fuses to prevent accidental short circuits."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "electrician-electricity-301-l10-q3",
          "text": "You measure 480V between L1-L2, 480V between L2-L3, and 0V between L1-L3 at the line side of a motor starter. What is the condition?",
          "skillId": "electrician-electricity-301-skill-troubleshooting",
          "options": [
            {
              "id": "a",
              "text": "L1 and L3 are being fed from the same phase (shorted or miswired upstream)."
            },
            {
              "id": "b",
              "text": "The system is operating normally for a Delta configuration."
            },
            {
              "id": "c",
              "text": "L2 is open."
            },
            {
              "id": "d",
              "text": "The motor has a dead short to ground."
            }
          ],
          "correctOptionId": "a",
          "explanation": "If there is 0V potential difference between L1 and L3, they are at the same electrical potential, meaning they are the same phase. This is a critical wiring error."
        }
      ],
      "learningAids": [
        {
          "id": "electrician-electricity-301-l10-a1",
          "type": "mnemonic",
          "title": "Safety First",
          "content": "Test Before You Touch: Always verify your meter on a known live source before and after checking a de-energized circuit."
        }
      ]
    }
  ]
};
