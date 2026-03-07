import type { LearningModule } from "@/lib/modules/types";

export const micro_circuits_301_Module: LearningModule = {
  "id": "micro-circuits-301",
  "title": "Circuit Design III",
  "description": "High-density micro-circuit design, PCB layout constraints, EMI basics, and test/validation strategies.",
  "subject": "Circuit Design",
  "tags": [
    "PCB",
    "EMI",
    "DFT",
    "advanced"
  ],
  "minAge": 16,
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
  "thumbnail": "/placeholders/lesson-pcb.svg",
  "learningObjectives": [
    "Analyze layout constraints for high-density PCBs, including trace impedance, spacing, and via types.",
    "Implement strategies to mitigate Electromagnetic Interference (EMI) and ensure Electromagnetic Compatibility (EMC).",
    "Develop comprehensive test and validation plans using Design for Test (DFT) methodologies like JTAG.",
    "Design a multi-layer PCB layout for a high-speed digital circuit, applying all learned concepts."
  ],
  "lessons": [
    {
      "id": "micro-circuits-301-l01",
      "title": "High-Density PCB Layout",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "micro-circuits-301-l01-a1",
          "type": "image",
          "title": "PCB Layer Stackup Diagram",
          "content": "Example of an 8-layer stackup for a high-speed board, showing signal, power, and ground planes."
        },
        {
          "id": "micro-circuits-301-l01-a2",
          "type": "animation",
          "title": "Via-in-Pad Animation",
          "content": "Demonstration of how via-in-pad and microvia technologies save space in BGA component fanout."
        }
      ]
    },
    {
      "id": "micro-circuits-301-l02",
      "title": "Practice: BGA Fanout",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Define 'escape routing' for a high-pin-count BGA.",
          "Using the provided tool, route the critical differential pairs from the inner pins of the BGA.",
          "Justify your choice of microvias versus through-hole vias for this high-density layout."
        ]
      },
      "learningAids": [
        {
          "id": "micro-circuits-301-l02-a1",
          "type": "practice",
          "title": "BGA Fanout Simulator",
          "content": "Interactive tool to practice routing traces from a Ball Grid Array component while managing impedance."
        }
      ]
    },
    {
      "id": "micro-circuits-301-l03",
      "title": "EMI and EMC Fundamentals",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "micro-circuits-301-l03-a1",
          "type": "image",
          "title": "EMI Coupling Mechanisms",
          "content": "Diagram illustrating conductive, capacitive, inductive, and radiative coupling of noise."
        },
        {
          "id": "micro-circuits-301-l03-a2",
          "type": "animation",
          "title": "Ground Loop Animation",
          "content": "Visualizing how a poorly designed ground return path creates a loop antenna, increasing noise susceptibility."
        }
      ]
    },
    {
      "id": "micro-circuits-301-l04",
      "title": "Practice: EMI Mitigation",
      "type": "interactive",
      "duration": 18,
      "metadata": {
        "prompts": [
          "Identify the primary source of radiated emissions in the provided switching power supply schematic.",
          "Add appropriate decoupling capacitors and a ferrite bead to the power input to filter noise.",
          "Explain how a ground plane and shielding can be used to protect a sensitive analog section."
        ]
      },
      "learningAids": [
        {
          "id": "micro-circuits-301-l04-a1",
          "type": "practice",
          "title": "Virtual Spectrum Analyzer",
          "content": "Simulate the effect of adding filters and shielding to a noisy circuit and observe the changes in the frequency spectrum."
        }
      ]
    },
    {
      "id": "micro-circuits-301-l05",
      "title": "Checkpoint: Layout & EMI",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "micro-circuits-301-l05-q1",
          "text": "For a 100Ω differential pair, what is the primary purpose of maintaining tight coupling between the two traces?",
          "skillId": "micro-circuits-301-skill-signal-integrity",
          "options": [
            {
              "id": "a",
              "text": "To maximize common-mode noise rejection and maintain consistent impedance."
            },
            {
              "id": "b",
              "text": "To simplify the routing process in the CAD software."
            },
            {
              "id": "c",
              "text": "To reduce the total copper used on the board."
            },
            {
              "id": "d",
              "text": "To increase the capacitance of the traces for filtering."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "micro-circuits-301-l05-q2",
          "text": "What is the function of a decoupling capacitor placed close to an IC's power pin?",
          "skillId": "micro-circuits-301-skill-emi",
          "options": [
            {
              "id": "a",
              "text": "To act as a local, low-inductance reservoir of charge for high-frequency current demands."
            },
            {
              "id": "b",
              "text": "To block DC voltage from reaching the integrated circuit."
            },
            {
              "id": "c",
              "text": "To step down the voltage for the integrated circuit."
            },
            {
              "id": "d",
              "text": "To measure the power consumption of the IC."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Decoupling capacitors supply instantaneous current to the IC, preventing voltage droop and reducing high-frequency noise on the power rails."
        }
      ]
    },
    {
      "id": "micro-circuits-301-l06",
      "title": "Design for Test (DFT)",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "micro-circuits-301-l06-a1",
          "type": "image",
          "title": "JTAG Daisy Chain",
          "content": "Diagram showing multiple ICs connected in a JTAG boundary-scan chain for efficient testing."
        },
        {
          "id": "micro-circuits-301-l06-a2",
          "type": "animation",
          "title": "Flying Probe Tester",
          "content": "Animation of a flying probe tester checking for opens and shorts on a populated PCB without a test fixture."
        }
      ]
    },
    {
      "id": "micro-circuits-301-l07",
      "title": "Practice: Creating a Test Plan",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "For the given microcontroller circuit, identify three critical nets that require dedicated test points.",
          "Describe the steps for performing a boundary scan test using the JTAG interface to check BGA solder joints.",
          "Propose a functional test to verify the operation of the board's USB interface and its data integrity."
        ]
      },
      "learningAids": [
        {
          "id": "micro-circuits-301-l07-a1",
          "type": "practice",
          "title": "Test Point Placement Tool",
          "content": "Interactive schematic where you place test points and define test procedures for manufacturing."
        }
      ]
    },
    {
      "id": "micro-circuits-301-l08",
      "title": "Capstone Project: High-Speed Data Logger",
      "type": "interactive",
      "duration": 30,
      "metadata": {
        "prompts": [
          "Design the 6-layer PCB stackup, specifying layer functions (signal, ground, power).",
          "Route the differential USB data lines, ensuring 90Ω impedance and minimal stubs.",
          "Place decoupling capacitors and implement a solid ground plane strategy to minimize EMI.",
          "Add a JTAG header and necessary test points for validation and programming."
        ]
      },
      "learningAids": [
        {
          "id": "micro-circuits-301-l08-a1",
          "type": "practice",
          "title": "Virtual PCB Layout Tool",
          "content": "A simplified CAD tool for completing the capstone project layout, applying all learned concepts."
        }
      ]
    },
    {
      "id": "micro-circuits-301-l09",
      "title": "Final Assessment",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "micro-circuits-301-l09-q1",
          "text": "When routing a high-speed clock signal across a split in a ground plane, what is the most likely negative consequence?",
          "skillId": "micro-circuits-301-skill-signal-integrity",
          "options": [
            {
              "id": "a",
              "text": "The return current is forced into a long path, creating a large loop that radiates EMI."
            },
            {
              "id": "b",
              "text": "The clock signal will be shorted to ground."
            },
            {
              "id": "c",
              "text": "The DC voltage of the signal will increase significantly."
            },
            {
              "id": "d",
              "text": "The manufacturing cost of the PCB will decrease."
            }
          ],
          "correctOptionId": "a",
          "explanation": "A split ground plane forces the high-frequency return current to find an alternate, longer path, increasing inductance and creating a loop antenna that is a major source of EMI."
        },
        {
          "id": "micro-circuits-301-l09-q2",
          "text": "Which Design for Test (DFT) technique is most effective for verifying connectivity on the pins of a large BGA component after assembly?",
          "skillId": "micro-circuits-301-skill-dft",
          "options": [
            {
              "id": "a",
              "text": "Visual inspection"
            },
            {
              "id": "b",
              "text": "JTAG Boundary Scan"
            },
            {
              "id": "c",
              "text": "Functional test"
            },
            {
              "id": "d",
              "text": "Power consumption measurement"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "micro-circuits-301-l09-q3",
          "text": "To suppress high-frequency noise on a power line while allowing DC to pass, which component is most suitable?",
          "skillId": "micro-circuits-301-skill-emi",
          "options": [
            {
              "id": "a",
              "text": "A resistor"
            },
            {
              "id": "b",
              "text": "A Zener diode"
            },
            {
              "id": "c",
              "text": "A ferrite bead"
            },
            {
              "id": "d",
              "text": "A jumper wire"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A ferrite bead acts as a high-frequency resistor (inductor), effectively dissipating noise as heat, while presenting very low impedance to DC current."
        }
      ]
    }
  ]
};
