import type { LearningModule } from "@/lib/modules/types";

export const microelectronics_301_Module: LearningModule = {
  "id": "microelectronics-301",
  "title": "Microelectronics III",
  "description": "An advanced study of analog and mixed-signal IC design, covering operational amplifiers, data converters, noise analysis, and reliability engineering to prepare for complex system-on-chip challenges.",
  "subject": "Microelectronics",
  "tags": [
    "curriculum",
    "interactive",
    "analog design",
    "mixed-signal"
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
  "thumbnail": "/placeholders/circuit-board.svg",
  "learningObjectives": [
    "Analyze and design core analog building blocks like op-amps and comparators.",
    "Evaluate the performance metrics and architectures of ADCs and DACs.",
    "Model different noise sources in circuits and apply techniques for mitigation.",
    "Assess IC reliability issues such as electromigration and latch-up."
  ],
  "lessons": [
    {
      "id": "microelectronics-301-l01",
      "title": "Advanced Op-Amp Design",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "microelectronics-301-l01-a1",
          "type": "image",
          "title": "Op-Amp Topologies",
          "content": "Diagram comparing telescopic, folded-cascode, and two-stage op-amp architectures."
        },
        {
          "id": "microelectronics-301-l01-a2",
          "type": "animation",
          "title": "Slew Rate Limiting",
          "content": "Animation showing current starving in the differential pair during large-signal transients."
        }
      ]
    },
    {
      "id": "microelectronics-301-l02",
      "title": "Practice: Op-Amp Stability Analysis",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Simulate the open-loop gain and phase response of the provided two-stage op-amp.",
          "Identify the phase margin and determine if the circuit is stable.",
          "Propose a compensation network (e.g., Miller capacitor) and justify your component choices."
        ]
      },
      "learningAids": [
        {
          "id": "microelectronics-301-l02-a1",
          "type": "practice",
          "title": "Interactive SPICE Simulation",
          "content": "Use the embedded circuit simulator to perform AC analysis and add compensation components."
        }
      ]
    },
    {
      "id": "microelectronics-301-l03",
      "title": "Checkpoint 1: Analog Building Blocks",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "microelectronics-301-l03-q1",
          "text": "In a two-stage op-amp, what is the primary purpose of the Miller compensation capacitor?",
          "skillId": "microelectronics-301-skill-stability",
          "options": [
            {
              "id": "a",
              "text": "To perform pole-splitting, ensuring stability by creating a dominant low-frequency pole."
            },
            {
              "id": "b",
              "text": "To increase the overall gain of the amplifier."
            },
            {
              "id": "c",
              "text": "To increase the slew rate for faster large-signal response."
            },
            {
              "id": "d",
              "text": "To reduce the common-mode rejection ratio (CMRR)."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Miller compensation introduces a capacitor that splits the two main poles of the amplifier, moving one to a much lower frequency (dominant pole) and the other to a higher frequency, which stabilizes the feedback loop."
        },
        {
          "id": "microelectronics-301-l03-q2",
          "text": "Which op-amp topology generally offers the highest speed but has limited output voltage swing?",
          "skillId": "microelectronics-301-skill-topology",
          "options": [
            {
              "id": "a",
              "text": "Two-stage amplifier"
            },
            {
              "id": "b",
              "text": "Telescopic cascode amplifier"
            },
            {
              "id": "c",
              "text": "Folded-cascode amplifier"
            },
            {
              "id": "d",
              "text": "Common-source amplifier"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The telescopic cascode has a very direct signal path and high bandwidth, making it fast. However, the stacked transistors limit the available voltage headroom for the output signal."
        }
      ]
    },
    {
      "id": "microelectronics-301-l04",
      "title": "Data Converter Architectures",
      "type": "video",
      "duration": 18,
      "learningAids": [
        {
          "id": "microelectronics-301-l04-a1",
          "type": "image",
          "title": "ADC/DAC Architectures",
          "content": "Comparison chart of Flash, SAR, Delta-Sigma ADCs and R-2R, Current-Steering DACs."
        },
        {
          "id": "microelectronics-301-l04-a2",
          "type": "animation",
          "title": "SAR ADC Operation",
          "content": "Step-by-step animation of the binary search algorithm in a Successive Approximation Register ADC."
        }
      ]
    },
    {
      "id": "microelectronics-301-l05",
      "title": "Practice: ADC Performance Metrics",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Given a simulated ADC output spectrum, identify the fundamental signal, harmonics, and noise floor.",
          "Calculate the Signal-to-Noise and Distortion Ratio (SNDR).",
          "Determine the Effective Number of Bits (ENOB) from the calculated SNDR."
        ]
      },
      "learningAids": [
        {
          "id": "microelectronics-301-l05-a1",
          "type": "practice",
          "title": "Spectral Analysis Tool",
          "content": "Analyze the Fast Fourier Transform (FFT) of a simulated ADC output to extract key performance metrics."
        }
      ]
    },
    {
      "id": "microelectronics-301-l06",
      "title": "Checkpoint 2: Mixed-Signal Systems",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "microelectronics-301-l06-q1",
          "text": "An 8-bit ADC has a reference voltage of 2.56V. What is its resolution, or LSB (Least Significant Bit) size?",
          "skillId": "microelectronics-301-skill-adc-basics",
          "options": [
            {
              "id": "a",
              "text": "1V"
            },
            {
              "id": "b",
              "text": "100mV"
            },
            {
              "id": "c",
              "text": "10mV"
            },
            {
              "id": "d",
              "text": "1mV"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The resolution is the reference voltage divided by the number of levels (2^N). So, 2.56V / 2^8 = 2.56V / 256 = 0.01V or 10mV."
        },
        {
          "id": "microelectronics-301-l06-q2",
          "text": "Which ADC architecture is best suited for very high-speed (GS/s) but low-resolution applications?",
          "skillId": "microelectronics-301-skill-adc-arch",
          "options": [
            {
              "id": "a",
              "text": "Delta-Sigma (ΔΣ) ADC"
            },
            {
              "id": "b",
              "text": "Successive Approximation (SAR) ADC"
            },
            {
              "id": "c",
              "text": "Flash ADC"
            },
            {
              "id": "d",
              "text": "Dual-Slope ADC"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Flash ADCs use a parallel bank of comparators to convert the analog signal in a single clock cycle, making them extremely fast but power and area-intensive, which limits their resolution."
        }
      ]
    },
    {
      "id": "microelectronics-301-l07",
      "title": "Noise and Reliability in ICs",
      "type": "video",
      "duration": 16,
      "learningAids": [
        {
          "id": "microelectronics-301-l07-a1",
          "type": "image",
          "title": "IC Failure Mechanisms",
          "content": "Infographic illustrating electromigration, thermal stress, and latch-up in a CMOS cross-section."
        },
        {
          "id": "microelectronics-301-l07-a2",
          "type": "animation",
          "title": "Flicker Noise (1/f)",
          "content": "Animation visualizing charge trapping and de-trapping at the silicon-oxide interface, which is the source of flicker noise."
        }
      ]
    },
    {
      "id": "microelectronics-301-l08",
      "title": "Practice: Noise Figure Calculation",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Identify all major noise sources (thermal, flicker) in the provided common-source amplifier.",
          "Calculate the input-referred noise voltage for the circuit.",
          "Suggest a design change (e.g., increasing transistor width) to improve the amplifier's noise performance and explain why."
        ]
      },
      "learningAids": [
        {
          "id": "microelectronics-301-l08-a1",
          "type": "practice",
          "title": "Circuit Noise Calculator",
          "content": "An interactive tool to calculate and sum the contributions of different noise sources in a simple amplifier."
        }
      ]
    },
    {
      "id": "microelectronics-301-l09",
      "title": "Final Checkpoint: Comprehensive Design",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "microelectronics-301-l09-q1",
          "text": "What is the primary cause of latch-up in bulk CMOS technology?",
          "skillId": "microelectronics-301-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Excessive thermal noise in resistors."
            },
            {
              "id": "b",
              "text": "The formation of a parasitic SCR (p-n-p-n structure) between VDD and GND."
            },
            {
              "id": "c",
              "text": "Metal migration due to high current density."
            },
            {
              "id": "d",
              "text": "Gate oxide breakdown from electrostatic discharge (ESD)."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Latch-up is caused by the triggering of a parasitic Silicon-Controlled Rectifier (SCR), formed by the parasitic bipolar transistors in a CMOS structure, which creates a low-impedance path from the power supply to ground."
        },
        {
          "id": "microelectronics-301-l09-q2",
          "text": "To reduce flicker (1/f) noise in a MOSFET, a designer should:",
          "skillId": "microelectronics-301-skill-noise",
          "options": [
            {
              "id": "a",
              "text": "Decrease the gate area (W x L) of the transistor."
            },
            {
              "id": "b",
              "text": "Increase the gate area (W x L) of the transistor."
            },
            {
              "id": "c",
              "text": "Use a smaller bias current."
            },
            {
              "id": "d",
              "text": "Operate the transistor in the triode region."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Flicker noise is inversely proportional to the gate area (W*L) of the MOSFET. Using larger devices averages out the effects of charge trapping, thus reducing the noise."
        },
        {
          "id": "microelectronics-301-l09-q3",
          "text": "In a mixed-signal IC, what is a common technique to prevent digital noise from coupling into sensitive analog circuits?",
          "skillId": "microelectronics-301-skill-layout",
          "options": [
            {
              "id": "a",
              "text": "Placing analog and digital blocks as close as possible to shorten wires."
            },
            {
              "id": "b",
              "text": "Using a single, shared power supply for both analog and digital circuits."
            },
            {
              "id": "c",
              "text": "Using separate power supplies, substrate guard rings, and physical separation."
            },
            {
              "id": "d",
              "text": "Running analog signal traces directly underneath a high-speed digital clock line."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Isolation is key. Separate power supplies prevent digital switching noise from polluting the analog supply, while guard rings and physical distance minimize noise coupling through the substrate and interconnects."
        }
      ]
    }
  ]
};
