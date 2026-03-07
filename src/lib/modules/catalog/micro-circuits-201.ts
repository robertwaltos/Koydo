import type { LearningModule } from "@/lib/modules/types";

export const micro_circuits_201_Module: LearningModule = {
  "id": "micro-circuits-201",
  "title": "Circuit Design II",
  "description": "An intermediate course on signal conditioning, op-amps, active filters, timing circuits, and debugging methods for creating functional micro-circuit designs.",
  "subject": "Circuit Design",
  "tags": [
    "electronics",
    "op-amp",
    "filters",
    "555 timer",
    "interactive"
  ],
  "minAge": 15,
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
  "thumbnail": "/placeholders/lesson-op-amp.svg",
  "learningObjectives": [
    "Analyze and design basic operational amplifier (op-amp) circuits like inverting and non-inverting amplifiers.",
    "Construct and evaluate active filters to manipulate signal frequencies.",
    "Implement timing circuits using the 555 timer IC in astable and monostable modes.",
    "Apply systematic debugging techniques using tools like oscilloscopes and multimeters to troubleshoot circuits."
  ],
  "lessons": [
    {
      "id": "micro-circuits-201-l01",
      "title": "Introduction to Operational Amplifiers",
      "type": "video",
      "duration": 10,
      "learningAids": [
        {
          "id": "micro-circuits-201-l01-a1",
          "type": "image",
          "title": "Op-Amp Symbol",
          "content": "Diagram of an Op-Amp symbol showing the inverting (-), non-inverting (+), and output terminals."
        },
        {
          "id": "micro-circuits-201-l01-a2",
          "type": "animation",
          "title": "Virtual Ground Concept",
          "content": "Animation illustrating how negative feedback creates a virtual ground at the inverting input."
        }
      ]
    },
    {
      "id": "micro-circuits-201-l02",
      "title": "Practice: Building Op-Amp Circuits",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Build an inverting amplifier with a voltage gain of -5.",
          "Measure the output voltage for a 0.5V DC input.",
          "Modify the circuit to create a non-inverting amplifier with the same gain magnitude."
        ]
      },
      "learningAids": [
        {
          "id": "micro-circuits-201-l02-a1",
          "type": "practice",
          "title": "Virtual Breadboard Simulator",
          "content": "Use a drag-and-drop interface to build and test common op-amp configurations in a simulated environment."
        }
      ]
    },
    {
      "id": "micro-circuits-201-l03",
      "title": "Checkpoint: Op-Amp Fundamentals",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "micro-circuits-201-l03-q1",
          "text": "In an ideal op-amp, what is the assumed input impedance?",
          "skillId": "micro-circuits-201-skill-opamp-theory",
          "options": [
            {
              "id": "a",
              "text": "Zero"
            },
            {
              "id": "b",
              "text": "Infinite"
            },
            {
              "id": "c",
              "text": "50 Ohms"
            },
            {
              "id": "d",
              "text": "Equal to the output impedance"
            }
          ],
          "correctOptionId": "b",
          "explanation": "An ideal op-amp has infinite input impedance, meaning it draws no current from the source."
        },
        {
          "id": "micro-circuits-201-l03-q2",
          "text": "For an inverting amplifier, if the feedback resistor (Rf) is 20kΩ and the input resistor (Rin) is 2kΩ, what is the closed-loop voltage gain?",
          "skillId": "micro-circuits-201-skill-opamp-calc",
          "options": [
            {
              "id": "a",
              "text": "10"
            },
            {
              "id": "b",
              "text": "11"
            },
            {
              "id": "c",
              "text": "-10"
            },
            {
              "id": "d",
              "text": "-11"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The gain for an inverting amplifier is calculated as -Rf/Rin, which is -20kΩ / 2kΩ = -10."
        }
      ]
    },
    {
      "id": "micro-circuits-201-l04",
      "title": "Designing Active Filters",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "micro-circuits-201-l04-a1",
          "type": "image",
          "title": "Filter Response Curves",
          "content": "Bode plots comparing the frequency response of low-pass, high-pass, and band-pass filters."
        },
        {
          "id": "micro-circuits-201-l04-a2",
          "type": "animation",
          "title": "Low-Pass Filter in Action",
          "content": "Animation showing a noisy square wave being smoothed into a cleaner signal by a low-pass filter."
        }
      ]
    },
    {
      "id": "micro-circuits-201-l05",
      "title": "Practice: Filter Design Challenge",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Design a first-order active low-pass filter with a cutoff frequency of 1kHz.",
          "Simulate its response to a frequency sweep from 100Hz to 10kHz.",
          "Observe the output amplitude at 1kHz and 10kHz."
        ]
      },
      "learningAids": [
        {
          "id": "micro-circuits-201-l05-a1",
          "type": "practice",
          "title": "Interactive Filter Designer",
          "content": "A tool to select resistor and capacitor values and instantly see the resulting filter response curve."
        }
      ]
    },
    {
      "id": "micro-circuits-201-l06",
      "title": "Checkpoint: Active Filter Analysis",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "micro-circuits-201-l06-q1",
          "text": "What is the primary advantage of an active filter over a passive filter?",
          "skillId": "micro-circuits-201-skill-filter-theory",
          "options": [
            {
              "id": "a",
              "text": "They do not require a power source."
            },
            {
              "id": "b",
              "text": "They can provide signal gain and prevent loading effects."
            },
            {
              "id": "c",
              "text": "They can only be used for low frequencies."
            },
            {
              "id": "d",
              "text": "They are always smaller and cheaper."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Active filters use an active component like an op-amp to provide voltage gain and buffer the filter from the load."
        },
        {
          "id": "micro-circuits-201-l06-q2",
          "text": "The cutoff frequency (f_c) of a simple first-order RC filter is the frequency at which the output signal's power is reduced by half, which corresponds to what voltage level?",
          "skillId": "micro-circuits-201-skill-filter-calc",
          "options": [
            {
              "id": "a",
              "text": "50% of the input voltage"
            },
            {
              "id": "b",
              "text": "0% of the input voltage"
            },
            {
              "id": "c",
              "text": "100% of the input voltage"
            },
            {
              "id": "d",
              "text": "Approximately 70.7% of the input voltage"
            }
          ],
          "correctOptionId": "d",
          "explanation": "The half-power point, or -3dB point, occurs when the voltage is 1/√2 (approximately 70.7%) of the passband voltage."
        }
      ]
    },
    {
      "id": "micro-circuits-201-l07",
      "title": "Timing Circuits with the 555 Timer",
      "type": "video",
      "duration": 10,
      "learningAids": [
        {
          "id": "micro-circuits-201-l07-a1",
          "type": "image",
          "title": "555 Timer IC Pinout",
          "content": "A clear diagram showing the 8 pins of a 555 timer IC and their functions (VCC, GND, TRIG, OUT, etc.)."
        },
        {
          "id": "micro-circuits-201-l07-a2",
          "type": "animation",
          "title": "Astable Mode Operation",
          "content": "Animation showing the capacitor charging and discharging between 1/3 and 2/3 VCC, and the corresponding output waveform."
        }
      ]
    },
    {
      "id": "micro-circuits-201-l08",
      "title": "Practice: 555 Timer Playground",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Configure a 555 timer in astable mode to create a 1Hz square wave.",
          "Calculate the required resistor and capacitor values for a 50% duty cycle.",
          "Observe the output on a virtual oscilloscope and verify the frequency."
        ]
      },
      "learningAids": [
        {
          "id": "micro-circuits-201-l08-a1",
          "type": "practice",
          "title": "555 Timer Calculator & Simulator",
          "content": "An interactive tool to calculate component values for desired frequencies and duty cycles, with a built-in circuit simulator."
        }
      ]
    },
    {
      "id": "micro-circuits-201-l09",
      "title": "Essential Debugging Techniques",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "micro-circuits-201-l09-a1",
          "type": "image",
          "title": "Using an Oscilloscope",
          "content": "Photo showing the correct way to connect an oscilloscope probe (probe tip and ground clip) to a circuit board."
        },
        {
          "id": "micro-circuits-201-l09-a2",
          "type": "animation",
          "title": "Signal Tracing",
          "content": "An animated schematic showing how to trace a signal from input to output, checking the waveform at each stage to find a fault."
        }
      ]
    },
    {
      "id": "micro-circuits-201-l10",
      "title": "Final Project: Design and Debug",
      "type": "quiz",
      "duration": 25,
      "questions": [
        {
          "id": "micro-circuits-201-l10-q1",
          "text": "Design a circuit that turns on an LED for approximately 2 seconds when a button is pressed. Which 555 timer configuration is most appropriate?",
          "skillId": "micro-circuits-201-skill-synthesis",
          "options": [
            {
              "id": "a",
              "text": "Astable mode"
            },
            {
              "id": "b",
              "text": "Monostable mode"
            },
            {
              "id": "c",
              "text": "Bistable mode"
            },
            {
              "id": "d",
              "text": "Inverting amplifier mode"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Monostable mode (a 'one-shot' timer) is used to create a single output pulse of a specific duration in response to a trigger."
        },
        {
          "id": "micro-circuits-201-l10-q2",
          "text": "You build an op-amp amplifier with a target gain of -10, but measure a gain of -1. The output is not clipping. What is the most likely cause?",
          "skillId": "micro-circuits-201-skill-debugging",
          "options": [
            {
              "id": "a",
              "text": "The power supply voltage is too low."
            },
            {
              "id": "b",
              "text": "The feedback and input resistors have been swapped."
            },
            {
              "id": "c",
              "text": "The op-amp is damaged."
            },
            {
              "id": "d",
              "text": "The input signal frequency is too high."
            }
          ],
          "correctOptionId": "b",
          "explanation": "If Rf and Rin are swapped, the gain becomes -Rin/Rf. If the target was -10 (e.g., Rf=10k, Rin=1k), the swapped gain would be -1k/10k = -0.1. A gain of -1 suggests a different ratio, but swapping resistors is a very common build error that drastically changes gain."
        }
      ],
      "learningAids": [
        {
          "id": "micro-circuits-201-l10-a1",
          "type": "practice",
          "title": "Final Challenge in Simulator",
          "content": "Link to a circuit simulation environment with a pre-built but 'broken' circuit. Task: debug and fix the circuit to meet performance specifications."
        }
      ]
    }
  ]
};
