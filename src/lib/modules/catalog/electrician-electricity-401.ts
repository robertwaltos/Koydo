import type { LearningModule } from "@/lib/modules/types";

export const electrician_electricity_401_Module: LearningModule = {
  "id": "electrician-electricity-401",
  "title": "Electricity for Electricians IV",
  "description": "Master-level diagnostics, protection coordination, energy systems integration, and leadership for senior electricians.",
  "subject": "Electricity",
  "tags": [
    "curriculum",
    "interactive",
    "master-electrician",
    "diagnostics",
    "power-quality"
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
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Analyze and coordinate advanced overcurrent protection systems using Time-Current Curves (TCC).",
    "Integrate Distributed Energy Resources (DER) safely into existing commercial grids.",
    "Diagnose complex power quality issues, including harmonics and transients, using master-level techniques."
  ],
  "lessons": [
    {
      "id": "electrician-electricity-401-l01",
      "title": "Advanced Protection Coordination",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "electrician-electricity-401-l01-a1",
          "type": "image",
          "title": "Time-Current Curve (TCC) Analysis",
          "content": "Visual prompt: A high-resolution graph showing overlapping Time-Current Curves (TCC) for a main circuit breaker and a downstream branch breaker, with clear color-coded labels highlighting the instantaneous trip regions and selective coordination margins."
        },
        {
          "id": "electrician-electricity-401-l01-a2",
          "type": "animation",
          "title": "Selective Coordination in Action",
          "content": "Visual prompt: An animated single-line diagram demonstrating a fault occurring at a subpanel. The animation shows the downstream breaker tripping first to isolate the fault, while the main breaker remains closed, keeping the rest of the facility powered."
        }
      ]
    },
    {
      "id": "electrician-electricity-401-l02",
      "title": "Practice: Protection Coordination Scenarios",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Analyze the provided TCC graph for overlapping trip zones.",
          "Identify the specific current range causing nuisance tripping.",
          "Propose a breaker setting adjustment (e.g., short-time pickup/delay) to achieve full selective coordination."
        ]
      },
      "learningAids": [
        {
          "id": "electrician-electricity-401-l02-a1",
          "type": "practice",
          "title": "Interactive TCC Simulator",
          "content": "Visual prompt: An interactive dashboard featuring a single-line diagram on the left and a dynamic TCC graph on the right. The user can adjust dials for Long Time, Short Time, and Instantaneous settings on solid-state breakers and instantly see the curves shift."
        }
      ]
    },
    {
      "id": "electrician-electricity-401-l03",
      "title": "Checkpoint 1: Protection Systems",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "electrician-electricity-401-l03-q1",
          "text": "What is the primary goal of selective coordination in a commercial electrical system?",
          "skillId": "electrician-electricity-401-skill-protection",
          "options": [
            {
              "id": "a",
              "text": "To ensure the overcurrent device closest to the fault opens first, minimizing power outages to the rest of the system."
            },
            {
              "id": "b",
              "text": "To allow the main breaker to trip simultaneously with branch breakers for maximum safety."
            },
            {
              "id": "c",
              "text": "To reduce the total harmonic distortion across the distribution panel."
            },
            {
              "id": "d",
              "text": "To increase the available fault current at the service entrance."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Selective coordination localizes an outage to the specific circuit where the fault occurred, keeping the rest of the facility operational."
        },
        {
          "id": "electrician-electricity-401-l03-q2",
          "text": "When adjusting a breaker's Short-Time Delay (STD), what are you primarily trying to achieve?",
          "skillId": "electrician-electricity-401-skill-protection",
          "options": [
            {
              "id": "a",
              "text": "Lowering the voltage drop across the feeder."
            },
            {
              "id": "b",
              "text": "Allowing downstream breakers time to clear a fault before the upstream breaker trips."
            },
            {
              "id": "c",
              "text": "Increasing the arc flash incident energy for better visibility."
            },
            {
              "id": "d",
              "text": "Converting a thermal-magnetic breaker into a solid-state breaker."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Short-Time Delay intentionally delays the tripping of an upstream breaker to give the downstream device time to clear the fault, ensuring selective coordination."
        }
      ],
      "learningAids": [
        {
          "id": "electrician-electricity-401-l03-a1",
          "type": "mnemonic",
          "title": "Coordination Rule of Thumb",
          "content": "Visual prompt: A graphic showing a hierarchy pyramid. Text reads: 'Downstream clears first, Upstream waits. Isolate the fault, save the facility.'"
        }
      ]
    },
    {
      "id": "electrician-electricity-401-l04",
      "title": "Energy Systems Integration (DER)",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "electrician-electricity-401-l04-a1",
          "type": "image",
          "title": "Grid-Tied PV and BESS Schematic",
          "content": "Visual prompt: A detailed schematic showing a grid-tied solar PV system and Battery Energy Storage System (BESS) integrated with a commercial building's main switchgear, highlighting the bi-directional meter, isolation transformers, and rapid shutdown initiators."
        },
        {
          "id": "electrician-electricity-401-l04-a2",
          "type": "animation",
          "title": "Anti-Islanding Protection",
          "content": "Visual prompt: An animation showing a utility grid failure. The grid-tie inverter immediately detects the loss of utility voltage and disconnects the DER from the grid to prevent backfeeding and protect utility workers."
        }
      ]
    },
    {
      "id": "electrician-electricity-401-l05",
      "title": "Practice: Integrating Distributed Energy",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Evaluate the single-line diagram for a new commercial solar installation.",
          "Calculate the maximum allowable backfeed breaker size per NEC 705.12 (120% rule).",
          "Determine the optimal and code-compliant placement for the grid-tie inverter disconnect."
        ]
      },
      "learningAids": [
        {
          "id": "electrician-electricity-401-l05-a1",
          "type": "practice",
          "title": "DER Integration Simulator",
          "content": "Visual prompt: A drag-and-drop interface of a commercial electrical room. The user must correctly place the PV disconnect, inverter, and storage system onto the single-line diagram while adhering to NEC load-side connection rules."
        }
      ]
    },
    {
      "id": "electrician-electricity-401-l06",
      "title": "Checkpoint 2: Energy Systems",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "electrician-electricity-401-l06-q1",
          "text": "Under the NEC 705.12 '120% rule' for load-side connections, what is the maximum allowable sum of the overcurrent devices supplying a busbar?",
          "skillId": "electrician-electricity-401-skill-der",
          "options": [
            {
              "id": "a",
              "text": "100% of the busbar rating."
            },
            {
              "id": "b",
              "text": "120% of the busbar rating."
            },
            {
              "id": "c",
              "text": "125% of the main breaker rating."
            },
            {
              "id": "d",
              "text": "150% of the inverter output rating."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The sum of the ampere ratings of the main overcurrent device and the DER overcurrent devices cannot exceed 120% of the busbar rating."
        },
        {
          "id": "electrician-electricity-401-l06-q2",
          "text": "Why is anti-islanding protection critical for grid-tied inverters?",
          "skillId": "electrician-electricity-401-skill-der",
          "options": [
            {
              "id": "a",
              "text": "It prevents the inverter from backfeeding power into a dead utility grid, protecting utility line workers."
            },
            {
              "id": "b",
              "text": "It maximizes the solar array's power output during peak sunlight hours."
            },
            {
              "id": "c",
              "text": "It prevents the battery storage system from overcharging."
            },
            {
              "id": "d",
              "text": "It synchronizes the inverter's frequency with the building's backup generator."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Anti-islanding ensures that if the utility grid goes down, the DER stops exporting power, preventing a dangerous shock hazard for utility workers repairing the lines."
        }
      ],
      "learningAids": [
        {
          "id": "electrician-electricity-401-l06-a1",
          "type": "mnemonic",
          "title": "120% Rule Reminder",
          "content": "Visual prompt: A graphic of a busbar with a formula overlay: '(Main Breaker + PV Breaker) ≤ (Busbar Rating x 1.2)'."
        }
      ]
    },
    {
      "id": "electrician-electricity-401-l07",
      "title": "Master-Level Diagnostics & Power Quality",
      "type": "video",
      "duration": 18,
      "learningAids": [
        {
          "id": "electrician-electricity-401-l07-a1",
          "type": "image",
          "title": "Harmonic Distortion Waveforms",
          "content": "Visual prompt: An oscilloscope readout displaying a severely distorted voltage waveform (flat-topped) caused by 3rd and 5th order harmonics from non-linear loads, compared against a pure sine wave."
        },
        {
          "id": "electrician-electricity-401-l07-a2",
          "type": "animation",
          "title": "Neutral Current Accumulation",
          "content": "Visual prompt: An animation showing a 3-phase 4-wire system. It visually demonstrates how triplen harmonics (3rd, 9th, 15th) do not cancel out but instead add together on the neutral conductor, causing it to overheat."
        }
      ]
    },
    {
      "id": "electrician-electricity-401-l08",
      "title": "Practice: Troubleshooting Power Quality",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Review the simulated power quality analyzer data.",
          "Identify the source of the high Total Harmonic Distortion (THD).",
          "Select the appropriate mitigation strategy (e.g., active harmonic filter, K-rated transformer)."
        ]
      },
      "learningAids": [
        {
          "id": "electrician-electricity-401-l08-a1",
          "type": "practice",
          "title": "Power Quality Analyzer Simulation",
          "content": "Visual prompt: A simulated interface of a Fluke or similar power quality analyzer. The screen shows real-time THD values, voltage sags, and transients. The user must toggle different mitigation equipment in the virtual facility to stabilize the readings."
        }
      ]
    },
    {
      "id": "electrician-electricity-401-l09",
      "title": "Checkpoint 3: Diagnostics",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "electrician-electricity-401-l09-q1",
          "text": "In a 3-phase, 4-wire system supplying heavy non-linear loads (like computers and LED drivers), what is a common symptom of high triplen harmonics?",
          "skillId": "electrician-electricity-401-skill-diagnostics",
          "options": [
            {
              "id": "a",
              "text": "The neutral conductor carries excessive current and overheats."
            },
            {
              "id": "b",
              "text": "The system power factor approaches unity (1.0)."
            },
            {
              "id": "c",
              "text": "The phase conductors experience a significant drop in resistance."
            },
            {
              "id": "d",
              "text": "The grounding electrode conductor becomes completely isolated."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Triplen harmonics (multiples of the 3rd harmonic) are in phase with each other and add together on the neutral conductor, often exceeding the phase currents and causing overheating."
        },
        {
          "id": "electrician-electricity-401-l09-q2",
          "text": "Which device is specifically designed to handle the excessive heat generated by harmonic currents in a distribution system?",
          "skillId": "electrician-electricity-401-skill-diagnostics",
          "options": [
            {
              "id": "a",
              "text": "A K-rated transformer."
            },
            {
              "id": "b",
              "text": "A standard dry-type transformer."
            },
            {
              "id": "c",
              "text": "A ground Fault Circuit Interrupter (GFCI)."
            },
            {
              "id": "d",
              "text": "A standard thermal-magnetic circuit breaker."
            }
          ],
          "correctOptionId": "a",
          "explanation": "K-rated transformers are built with heavier gauge wiring and specialized core designs to withstand the additional heat generated by harmonic currents without degrading."
        }
      ],
      "learningAids": [
        {
          "id": "electrician-electricity-401-l09-a1",
          "type": "mnemonic",
          "title": "Triplen Trouble",
          "content": "Visual prompt: A warning sign graphic showing three sine waves merging into one massive wave on a neutral wire, with the text 'Triplens Multiply on the Neutral!'"
        }
      ]
    },
    {
      "id": "electrician-electricity-401-l10",
      "title": "Final Master Assessment: Systems & Leadership",
      "type": "quiz",
      "duration": 20,
      "questions": [
        {
          "id": "electrician-electricity-401-l10-q1",
          "text": "As a senior electrician, you are reviewing a junior team member's TCC plot for a new hospital wing. You notice the curves for the main and feeder breakers overlap at 5,000 amps. What is your directive?",
          "skillId": "electrician-electricity-401-skill-leadership",
          "options": [
            {
              "id": "a",
              "text": "Instruct them to adjust the short-time delay on the main breaker to eliminate the overlap and ensure selective coordination."
            },
            {
              "id": "b",
              "text": "Approve the plot, as overlapping curves are required for redundant safety in hospitals."
            },
            {
              "id": "c",
              "text": "Tell them to increase the size of the feeder conductors to absorb the fault."
            },
            {
              "id": "d",
              "text": "Instruct them to remove the feeder breaker entirely."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Overlapping curves indicate a lack of selective coordination. Adjusting the short-time delay on the upstream (main) breaker will separate the curves, ensuring the feeder breaker trips first during a fault."
        },
        {
          "id": "electrician-electricity-401-l10-q2",
          "text": "When leading a team to integrate a 500kW BESS into an existing facility, what is the most critical NFPA 70E safety step before opening the main switchgear?",
          "skillId": "electrician-electricity-401-skill-leadership",
          "options": [
            {
              "id": "a",
              "text": "Verify the absence of voltage using a properly rated test instrument after applying lockout/tagout (LOTO)."
            },
            {
              "id": "b",
              "text": "Ensure the BESS is fully charged to provide backup power during the work."
            },
            {
              "id": "c",
              "text": "Bypass the anti-islanding relay to prevent nuisance tripping during installation."
            },
            {
              "id": "d",
              "text": "Wear standard cotton uniforms to prevent static discharge."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Establishing an electrically safe work condition, which includes LOTO and verifying the absence of voltage with a rated meter, is the most critical NFPA 70E requirement before interacting with switchgear."
        },
        {
          "id": "electrician-electricity-401-l10-q3",
          "text": "A facility experiences random equipment resets and flickering lights when a large variable frequency drive (VFD) starts. What is the most likely master-level diagnosis?",
          "skillId": "electrician-electricity-401-skill-diagnostics",
          "options": [
            {
              "id": "a",
              "text": "The VFD is causing severe voltage sags and harmonic transients on the distribution system."
            },
            {
              "id": "b",
              "text": "The utility company is intentionally lowering the voltage."
            },
            {
              "id": "c",
              "text": "The facility's grounding electrode is too deep."
            },
            {
              "id": "d",
              "text": "The lighting circuits are wired in series with the VFD."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Large VFDs draw high inrush currents (causing sags) and generate significant harmonics (causing transients), which can disrupt sensitive electronics and lighting on the same system."
        }
      ],
      "learningAids": [
        {
          "id": "electrician-electricity-401-l10-a1",
          "type": "mnemonic",
          "title": "Master Electrician Mindset",
          "content": "Visual prompt: A professional badge graphic with the text: 'Analyze the Data. Coordinate the System. Lead with Safety.'"
        }
      ]
    }
  ]
};
