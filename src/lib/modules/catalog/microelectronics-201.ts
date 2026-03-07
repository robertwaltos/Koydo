import type { LearningModule } from "@/lib/modules/types";

export const microelectronics_201_Module: LearningModule = {
  "id": "microelectronics-201",
  "title": "Microelectronics II",
  "description": "An intermediate course on transistor operation, DC biasing, small-signal amplifier analysis, frequency response, and switching behavior for BJT and MOSFET circuits.",
  "subject": "Microelectronics",
  "tags": [
    "curriculum",
    "interactive",
    "electronics",
    "engineering"
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
  "thumbnail": "/placeholders/lesson-transistor.svg",
  "learningObjectives": [
    "Understand BJT and MOSFET device physics, operating regions, and biasing techniques.",
    "Analyze the performance of single-stage transistor amplifiers using small-signal models.",
    "Evaluate the switching behavior of transistors in basic digital logic applications."
  ],
  "lessons": [
    {
      "id": "microelectronics-201-l01",
      "title": "BJT Biasing and Operating Regions",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "microelectronics-201-l01-a1",
          "type": "image",
          "title": "BJT I-V Curves",
          "content": "Diagram illustrating the cutoff, active, and saturation regions on a BJT's characteristic I-V curves."
        },
        {
          "id": "microelectronics-201-l01-a2",
          "type": "animation",
          "title": "Voltage Divider Biasing",
          "content": "Step-by-step animation showing how currents and voltages are established in a voltage-divider biasing circuit."
        }
      ]
    },
    {
      "id": "microelectronics-201-l02",
      "title": "Practice: DC Analysis of BJT Circuits",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "For the given common-emitter circuit, calculate the Q-point (ICQ, VCEQ).",
          "Verify that the transistor is operating in the active region.",
          "Predict how the Q-point would shift if the transistor's β (beta) value were to increase by 20%."
        ]
      },
      "learningAids": [
        {
          "id": "microelectronics-201-l02-a1",
          "type": "practice",
          "title": "Interactive Circuit Simulator",
          "content": "Adjust resistor values in a BJT biasing circuit and observe the real-time impact on the Q-point."
        }
      ]
    },
    {
      "id": "microelectronics-201-l03",
      "title": "Checkpoint: BJT Biasing",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "microelectronics-201-l03-q1",
          "text": "For a BJT to operate in the active region, which condition must be met?",
          "skillId": "bjt-operating-regions",
          "options": [
            {
              "id": "a",
              "text": "The base-emitter junction is forward-biased and the base-collector junction is reverse-biased."
            },
            {
              "id": "b",
              "text": "Both junctions are forward-biased."
            },
            {
              "id": "c",
              "text": "Both junctions are reverse-biased."
            },
            {
              "id": "d",
              "text": "The base-emitter junction is reverse-biased and the base-collector junction is forward-biased."
            }
          ],
          "correctOptionId": "a",
          "explanation": "In the active region, the BE junction acts like a forward-biased diode, allowing current flow, while the reverse-biased BC junction collects that current."
        },
        {
          "id": "microelectronics-201-l03-q2",
          "text": "What is the primary purpose of DC biasing in a transistor amplifier?",
          "skillId": "amplifier-biasing",
          "options": [
            {
              "id": "a",
              "text": "To establish a stable DC operating point (Q-point) in the desired region."
            },
            {
              "id": "b",
              "text": "To maximize the transistor's power consumption."
            },
            {
              "id": "c",
              "text": "To ensure the transistor always operates in saturation."
            },
            {
              "id": "d",
              "text": "To block all AC signals from entering the transistor."
            }
          ],
          "correctOptionId": "a"
        }
      ]
    },
    {
      "id": "microelectronics-201-l04",
      "title": "The BJT Small-Signal Model",
      "type": "video",
      "duration": 18,
      "learningAids": [
        {
          "id": "microelectronics-201-l04-a1",
          "type": "image",
          "title": "Hybrid-Pi Model Diagram",
          "content": "A clear schematic of the Hybrid-Pi small-signal model, labeling transconductance (gm), input resistance (rπ), and output resistance (ro)."
        },
        {
          "id": "microelectronics-201-l04-a2",
          "type": "animation",
          "title": "From DC to AC Analysis",
          "content": "Visualizing how a large DC circuit is simplified into a small-signal AC equivalent by treating DC sources as grounds."
        }
      ]
    },
    {
      "id": "microelectronics-201-l05",
      "title": "Practice: Common-Emitter Amplifier Analysis",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "Draw the small-signal AC equivalent circuit for the given common-emitter amplifier.",
          "Calculate the voltage gain (Av), input resistance (Rin), and output resistance (Rout).",
          "Explain how adding an emitter resistor (RE) would affect the amplifier's voltage gain and stability."
        ]
      },
      "learningAids": [
        {
          "id": "microelectronics-201-l05-a1",
          "type": "practice",
          "title": "Guided Amplifier Analysis",
          "content": "A step-by-step workflow to analyze a CE amplifier, from drawing the model to calculating key performance metrics."
        }
      ]
    },
    {
      "id": "microelectronics-201-l06",
      "title": "Checkpoint: BJT Amplifiers",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "microelectronics-201-l06-q1",
          "text": "In a common-emitter amplifier, the output voltage at the collector is typically...",
          "skillId": "small-signal-analysis",
          "options": [
            {
              "id": "a",
              "text": "180 degrees out of phase with the input voltage."
            },
            {
              "id": "b",
              "text": "In phase with the input voltage."
            },
            {
              "id": "c",
              "text": "90 degrees out of phase with the input voltage."
            },
            {
              "id": "d",
              "text": "Independent of the input voltage."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The inverting nature of the common-emitter configuration results in a 180-degree phase shift between the input and output signals."
        },
        {
          "id": "microelectronics-201-l06-q2",
          "text": "The small-signal parameter 'gm' (transconductance) is directly proportional to what DC parameter?",
          "skillId": "small-signal-parameters",
          "options": [
            {
              "id": "a",
              "text": "The DC collector current (IC)."
            },
            {
              "id": "b",
              "text": "The DC supply voltage (VCC)."
            },
            {
              "id": "c",
              "text": "The base resistor (RB)."
            },
            {
              "id": "d",
              "text": "The transistor's beta (β)."
            }
          ],
          "correctOptionId": "a"
        }
      ]
    },
    {
      "id": "microelectronics-201-l07",
      "title": "MOSFET Operation and Biasing",
      "type": "video",
      "duration": 16,
      "learningAids": [
        {
          "id": "microelectronics-201-l07-a1",
          "type": "image",
          "title": "MOSFET I-V Curves",
          "content": "Diagram showing the triode (linear) and saturation regions for an n-channel MOSFET."
        },
        {
          "id": "microelectronics-201-l07-a2",
          "type": "animation",
          "title": "Visualizing Channel Formation",
          "content": "An animation showing how applying a gate voltage above the threshold voltage (Vth) forms an inversion layer (channel) in an NMOS transistor."
        }
      ]
    },
    {
      "id": "microelectronics-201-l08",
      "title": "Practice: Common-Source Amplifier Analysis",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "Given the gate-source voltage (VGS) and drain-source voltage (VDS), determine the MOSFET's operating region.",
          "Calculate the voltage gain (Av) for the provided common-source amplifier.",
          "How does the channel-length modulation parameter (λ) affect the amplifier's output resistance and gain?"
        ]
      },
      "learningAids": [
        {
          "id": "microelectronics-201-l08-a1",
          "type": "practice",
          "title": "Guided MOSFET Amplifier Analysis",
          "content": "Analyze a common-source amplifier by calculating DC operating points and small-signal gain."
        }
      ]
    },
    {
      "id": "microelectronics-201-l09",
      "title": "Transistor as a Switch",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "microelectronics-201-l09-a1",
          "type": "image",
          "title": "BJT Inverter Load Line",
          "content": "Load line analysis of a BJT inverter, clearly showing the cutoff (HIGH output) and saturation (LOW output) operating points."
        },
        {
          "id": "microelectronics-201-l09-a2",
          "type": "animation",
          "title": "CMOS Inverter Switching",
          "content": "Animation of a CMOS inverter, showing the PMOS and NMOS transistors turning on and off in complementary fashion as the input switches between HIGH and LOW."
        }
      ]
    },
    {
      "id": "microelectronics-201-l10",
      "title": "Final Exam: Microelectronics II",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "microelectronics-201-l10-q1",
          "text": "For an NMOS transistor to operate in the saturation region, which condition must be true?",
          "skillId": "mosfet-operating-regions",
          "options": [
            {
              "id": "a",
              "text": "VGS > Vth and VDS ≥ (VGS - Vth)"
            },
            {
              "id": "b",
              "text": "VGS < Vth"
            },
            {
              "id": "c",
              "text": "VGS > Vth and VDS < (VGS - Vth)"
            },
            {
              "id": "d",
              "text": "VDS = 0"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "microelectronics-201-l10-q2",
          "text": "Compared to a BJT-based common-emitter amplifier, a MOSFET-based common-source amplifier generally has a much higher...",
          "skillId": "bjt-vs-mosfet-amps",
          "options": [
            {
              "id": "a",
              "text": "Input resistance."
            },
            {
              "id": "b",
              "text": "Voltage gain."
            },
            {
              "id": "c",
              "text": "Transconductance (gm)."
            },
            {
              "id": "d",
              "text": "Power consumption."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The insulated gate of a MOSFET results in a nearly infinite input resistance, whereas a BJT's input resistance is limited by its forward-biased base-emitter junction."
        },
        {
          "id": "microelectronics-201-l10-q3",
          "text": "When a BJT is used as a switch and is in the 'ON' state, it is operating in the ______ region.",
          "skillId": "transistor-switching",
          "options": [
            {
              "id": "a",
              "text": "Saturation"
            },
            {
              "id": "b",
              "text": "Active"
            },
            {
              "id": "c",
              "text": "Cutoff"
            },
            {
              "id": "d",
              "text": "Breakdown"
            }
          ],
          "correctOptionId": "a"
        }
      ]
    }
  ]
};
