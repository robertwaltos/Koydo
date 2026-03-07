import type { LearningModule } from "@/lib/modules/types";

export const microelectronics_401_Module: LearningModule = {
  "id": "microelectronics-401",
  "title": "Microelectronics IV",
  "description": "An advanced exploration of modern microelectronics, covering second-order semiconductor device effects, fabrication-aware IC layout, design for manufacturability (DFM), and advanced verification for production readiness.",
  "subject": "Microelectronics",
  "tags": [
    "semiconductors",
    "VLSI",
    "IC design",
    "advanced engineering"
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
  "thumbnail": "/thumbnails/microelectronics-401.svg",
  "learningObjectives": [
    "Model and analyze second-order effects in modern MOSFET devices.",
    "Apply Design for Manufacturability (DFM) principles to create robust IC layouts.",
    "Perform and interpret results from physical verification (DRC/LVS) and reliability checks.",
    "Synthesize knowledge to design, layout, and verify a basic digital logic cell."
  ],
  "lessons": [
    {
      "id": "microelectronics-401-l01",
      "title": "Advanced MOSFET Modeling: Second-Order Effects",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "microelectronics-401-l01-a1",
          "type": "animation",
          "title": "Channel Length Modulation",
          "content": "Animated visualization of the depletion region widening and its effect on channel length (the Early effect in MOSFETs)."
        },
        {
          "id": "microelectronics-401-l01-a2",
          "type": "image",
          "title": "DIBL Diagram",
          "content": "Cross-section diagram illustrating Drain-Induced Barrier Lowering (DIBL) and its impact on the threshold voltage."
        }
      ]
    },
    {
      "id": "microelectronics-401-l02",
      "title": "Practice: SPICE Modeling of Short-Channel Effects",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Observe the I-V curve for the baseline short-channel device.",
          "Modify the doping concentration (N_sub) and explain its effect on V_T rolloff.",
          "Propose a halo implant strategy to mitigate the observed effect."
        ]
      },
      "learningAids": [
        {
          "id": "microelectronics-401-l02-a1",
          "type": "practice",
          "title": "Interactive SPICE Simulator",
          "content": "Adjust device model parameters in a SPICE environment and observe real-time changes to the I-V characteristic curves."
        }
      ]
    },
    {
      "id": "microelectronics-401-l03",
      "title": "Checkpoint 1: Advanced Device Physics",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "microelectronics-401-l03-q1",
          "text": "In a short-channel MOSFET, what is the primary cause of Drain-Induced Barrier Lowering (DIBL)?",
          "skillId": "microelectronics-401-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "The drain's electric field influencing the source-channel potential barrier."
            },
            {
              "id": "b",
              "text": "Increased carrier mobility due to a shorter channel."
            },
            {
              "id": "c",
              "text": "Quantum mechanical tunneling through the gate oxide."
            },
            {
              "id": "d",
              "text": "Hot-carrier injection into the gate dielectric."
            }
          ],
          "correctOptionId": "a",
          "explanation": "DIBL occurs when the drain voltage is high enough to lower the potential barrier at the source, allowing for increased subthreshold leakage current."
        },
        {
          "id": "microelectronics-401-l03-q2",
          "text": "Velocity saturation in a MOSFET limits the drain current primarily by:",
          "skillId": "microelectronics-401-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "Causing the carrier drift velocity to become constant, no longer increasing with the electric field."
            },
            {
              "id": "b",
              "text": "Reducing the effective gate-source voltage."
            },
            {
              "id": "c",
              "text": "Increasing the device's parasitic capacitance."
            },
            {
              "id": "d",
              "text": "Inducing avalanche breakdown in the channel."
            }
          ],
          "correctOptionId": "a",
          "explanation": "At high electric fields, carrier velocity stops increasing linearly and saturates at a maximum value, making the drain current less dependent on V_ds."
        }
      ],
      "learningAids": []
    },
    {
      "id": "microelectronics-401-l04",
      "title": "Fabrication-Aware Design: DFM and Layout",
      "type": "video",
      "duration": 18,
      "learningAids": [
        {
          "id": "microelectronics-401-l04-a1",
          "type": "image",
          "title": "Ideal vs. Fabricated Layout",
          "content": "Visual comparison of an ideal CAD layout versus an SEM image of the fabricated silicon, showing effects like corner rounding and line edge roughness."
        },
        {
          "id": "microelectronics-401-l04-a2",
          "type": "animation",
          "title": "Chemical-Mechanical Polishing (CMP)",
          "content": "Animation showing how CMP planarizes a wafer surface and how layout density rules (e.g., metal fill) are used to ensure a uniform result."
        }
      ]
    },
    {
      "id": "microelectronics-401-l05",
      "title": "Practice: Layout Parasitic Extraction",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "Identify the three largest parasitic capacitances in the provided inverter layout.",
          "Propose a layout modification to reduce the Miller capacitance (C_gd).",
          "Quantify the expected performance improvement in terms of propagation delay."
        ]
      },
      "learningAids": [
        {
          "id": "microelectronics-401-l05-a1",
          "type": "practice",
          "title": "Virtual IC Layout Editor",
          "content": "Use a simplified layout tool with an integrated parasitic extraction feature to analyze and optimize a standard logic cell."
        }
      ]
    },
    {
      "id": "microelectronics-401-l06",
      "title": "Checkpoint 2: DFM and Layout Effects",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "microelectronics-401-l06-q1",
          "text": "What is the primary purpose of inserting 'dummy fill' metal in an IC layout?",
          "skillId": "microelectronics-401-skill-dfm",
          "options": [
            {
              "id": "a",
              "text": "To improve planarity during Chemical-Mechanical Polishing (CMP) by maintaining uniform metal density."
            },
            {
              "id": "b",
              "text": "To provide extra power routing for high-current devices."
            },
            {
              "id": "c",
              "text": "To act as a heat sink for thermally sensitive analog circuits."
            },
            {
              "id": "d",
              "text": "To shield sensitive signals from electromagnetic interference (EMI)."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Dummy fill ensures that the metal density is consistent across the die, which is critical for achieving a flat, uniform surface during the CMP process, preventing dishing and erosion."
        },
        {
          "id": "microelectronics-401-l06-q2",
          "text": "The 'antenna effect' during fabrication refers to damage caused by:",
          "skillId": "microelectronics-401-skill-dfm",
          "options": [
            {
              "id": "a",
              "text": "Charge accumulation on a long metal interconnect during plasma etching, which can damage a connected gate oxide."
            },
            {
              "id": "b",
              "text": "Crosstalk between adjacent signal lines acting as antennas."
            },
            {
              "id": "c",
              "text": "Radio frequency interference from external sources coupling into the chip."
            },
            {
              "id": "d",
              "text": "Physical stress on the silicon lattice due to mismatched metal layers."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Long metal traces act like antennas during plasma processes, collecting charge that can create a large voltage and rupture the thin gate oxide of a connected transistor if not properly discharged."
        }
      ],
      "learningAids": []
    },
    {
      "id": "microelectronics-401-l07",
      "title": "IC Verification and Production Readiness",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "microelectronics-401-l07-a1",
          "type": "image",
          "title": "Verification Flowchart",
          "content": "A flowchart of the complete IC physical verification cycle, showing the inputs and outputs for DRC, LVS, and ERC."
        },
        {
          "id": "microelectronics-401-l07-a2",
          "type": "diagram",
          "title": "ESD Protection Circuit",
          "content": "Schematic diagram of a diode-based electrostatic discharge (ESD) protection clamp circuit on an I/O pad."
        }
      ]
    },
    {
      "id": "microelectronics-401-l08",
      "title": "Challenge: Debugging DRC and LVS Errors",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Run the Design Rule Check (DRC) and identify the metal spacing violation.",
          "Correct the layout to resolve the DRC error.",
          "Run Layout vs. Schematic (LVS) and identify the netlist mismatch caused by a shorted connection."
        ]
      },
      "learningAids": [
        {
          "id": "microelectronics-401-l08-a1",
          "type": "practice",
          "title": "Simulated Verification Environment",
          "content": "A pre-made layout containing common DRC and LVS errors for the user to find and fix using simulated verification tools."
        }
      ]
    },
    {
      "id": "microelectronics-401-l09",
      "title": "Checkpoint 3: Verification and Reliability",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "microelectronics-401-l09-q1",
          "text": "What does a successful Layout vs. Schematic (LVS) check primarily confirm?",
          "skillId": "microelectronics-401-skill-verification",
          "options": [
            {
              "id": "a",
              "text": "That the circuit extracted from the layout is electrically equivalent to the original schematic."
            },
            {
              "id": "b",
              "text": "That the layout adheres to all geometric rules required for manufacturing."
            },
            {
              "id": "c",
              "text": "That the circuit will operate at the target clock frequency."
            },
            {
              "id": "d",
              "text": "That the circuit is protected against electrostatic discharge."
            }
          ],
          "correctOptionId": "a",
          "explanation": "LVS compares the netlist extracted from the physical layout against the source schematic netlist to ensure they match, confirming that the layout correctly implements the intended circuit."
        },
        {
          "id": "microelectronics-401-l09-q2",
          "text": "CMOS latch-up is a condition caused by the triggering of a parasitic structure equivalent to a:",
          "skillId": "microelectronics-401-skill-verification",
          "options": [
            {
              "id": "a",
              "text": "Silicon-Controlled Rectifier (SCR)."
            },
            {
              "id": "b",
              "text": "Zener Diode."
            },
            {
              "id": "c",
              "text": "Tunnel Diode."
            },
            {
              "id": "d",
              "text": "Junction Field-Effect Transistor (JFET)."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The combination of parasitic NPN and PNP bipolar transistors in a CMOS structure forms a parasitic SCR, which, if triggered, can create a low-impedance path from VDD to VSS, causing a short circuit."
        }
      ],
      "learningAids": []
    },
    {
      "id": "microelectronics-401-l10",
      "title": "Capstone: Design and Verify a 2-Input NAND Gate",
      "type": "project",
      "duration": 60,
      "metadata": {
        "prompts": [
          "Design the schematic for a CMOS 2-input NAND gate.",
          "Create a DRC-clean and LVS-correct layout for your design.",
          "Simulate the transient response to verify its logical function and measure propagation delays."
        ]
      },
      "learningAids": [
        {
          "id": "microelectronics-401-l10-a1",
          "type": "practice",
          "title": "Integrated Design Suite",
          "content": "Full access to a simplified schematic editor, layout editor, and SPICE simulator to complete the capstone project from concept to verification."
        }
      ]
    }
  ]
};
