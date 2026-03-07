import type { LearningModule } from "@/lib/modules/types";

export const general_relativity_601_Module: LearningModule = {
  "id": "general-relativity-601",
  "title": "General Relativity Research and Leadership",
  "description": "A post-401 specialization in General Relativity, focusing on the analysis of relativistic systems, design of observational and computational projects, and leadership within large-scale scientific collaborations. The curriculum uses advanced casework, numerical simulations, and proposal defense checkpoints to build expert-level skills.",
  "subject": "General Relativity",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "general-relativity",
    "specialization"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Apply tensor calculus and differential geometry to analyze complex relativistic phenomena.",
    "Design and diagnose numerical relativity simulations for systems like binary black hole mergers.",
    "Evaluate the scientific trade-offs and engineering constraints of major astrophysics projects.",
    "Develop governance models for large-scale scientific collaborations, ensuring data integrity and equitable credit.",
    "Lead cross-functional reviews of experimental designs, communicating complex trade-offs effectively.",
    "Defend a novel research proposal against expert critique, using theoretical evidence and uncertainty analysis."
  ],
  "lessons": [
    {
      "id": "general-relativity-601-l01",
      "title": "Advanced Foundations of General Relativity",
      "type": "video",
      "duration": 18,
      "learningAids": [
        {
          "id": "general-relativity-601-l01-a1",
          "type": "image",
          "title": "The Einstein Field Equations",
          "content": "A visual representation of the Einstein Field Equations, showing the relationship between the Einstein tensor (geometry of spacetime) and the stress-energy tensor (matter and energy)."
        }
      ],
      "chunks": [
        {
          "id": "general-relativity-601-l01-c1",
          "kind": "concept",
          "title": "Spacetime Geometry and the Einstein Field Equations",
          "content": "We begin by exploring the mathematical heart of General Relativity: the Einstein Field Equations. This lesson will cover the core concepts of differential geometry, tensors, and how the distribution of mass and energy dictates the curvature of spacetime, which in turn dictates how matter moves."
        },
        {
          "id": "general-relativity-601-l01-c2",
          "kind": "concept",
          "title": "Causal Structure and Penrose Diagrams",
          "content": "Understanding the causal relationships in spacetime is critical. We will introduce Penrose diagrams as a tool to visualize the global structure of spacetimes, including singularities and horizons, allowing us to map out the causal connections between events in universes containing black holes or cosmological models."
        },
        {
          "id": "general-relativity-601-l01-c3",
          "kind": "recap",
          "title": "Observational Evidence and Model Validation",
          "content": "Theory must be validated by observation. This section recaps key experimental confirmations of General Relativity, from the 1919 solar eclipse expedition to modern gravitational wave astronomy. We will discuss how observational data sets the evidence thresholds for accepting or refining our theoretical models."
        }
      ],
      "flashcards": [
        {
          "id": "general-relativity-601-l01-f1",
          "front": "Einstein Field Equations",
          "back": "A set of ten equations that relate the geometry of spacetime (using the Einstein tensor) to the distribution of matter and energy within it (using the stress-energy tensor)."
        },
        {
          "id": "general-relativity-601-l01-f2",
          "front": "Geodesic",
          "back": "The straightest possible path that an object can follow through curved spacetime. For massive particles, it is the path of free-fall."
        },
        {
          "id": "general-relativity-601-l01-f3",
          "front": "Penrose Diagram",
          "back": "A two-dimensional diagram that captures the causal relations between different points in spacetime, compressing infinite distances and times into a finite map."
        }
      ]
    },
    {
      "id": "general-relativity-601-l02",
      "title": "Computational Methods in General Relativity Lab",
      "type": "interactive",
      "duration": 20,
      "learningAids": [
        {
          "id": "general-relativity-601-l02-a1",
          "type": "image",
          "title": "Binary Black Hole Merger Simulation",
          "content": "A visualization from a numerical relativity simulation showing the distorted spacetime and gravitational waves emanating from two merging black holes."
        }
      ],
      "chunks": [
        {
          "id": "general-relativity-601-l02-c1",
          "kind": "practice",
          "title": "Numerical Relativity Simulations",
          "content": "In this interactive lab, learners will set up the initial conditions for a numerical relativity simulation of a binary black hole system. They will learn about the 3+1 formalism for splitting spacetime and the challenges of evolving the Einstein equations on a computer, including managing singularities and numerical stability."
        },
        {
          "id": "general-relativity-601-l02-c2",
          "kind": "recap",
          "title": "Simulation Diagnostics and Parameter Tuning",
          "content": "A successful simulation requires constant monitoring. We will review key diagnostic tools, such as monitoring constraint violations, and discuss how to tune simulation parameters like grid resolution and boundary conditions to ensure accurate and physically meaningful results."
        }
      ],
      "interactiveActivities": [
        {
          "id": "general-relativity-601-l02-act1",
          "type": "matching_pairs",
          "title": "Matching Initial Conditions to Waveforms",
          "description": "Match the initial parameters of a binary black hole system to the resulting gravitational waveform features.",
          "pairs": [
            {
              "left": "High mass ratio (e.g., 10:1)",
              "right": "Lower amplitude signal with a prolonged 'chirp'"
            },
            {
              "left": "High, aligned black hole spins",
              "right": "Stronger gravitational wave emission and a more energetic merger"
            },
            {
              "left": "Highly eccentric orbit",
              "right": "Pulsating bursts of gravitational waves at closest approach"
            },
            {
              "left": "Low total mass",
              "right": "Higher frequency gravitational waves"
            }
          ]
        }
      ]
    },
    {
      "id": "general-relativity-601-l03",
      "title": "Checkpoint 1: Theoretical and Computational Methods",
      "type": "quiz",
      "duration": 12,
      "learningAids": [],
      "questions": [
        {
          "id": "general-relativity-601-l03-q1",
          "text": "What fundamental principle is expressed by the Einstein Field Equations?",
          "skillId": "general-relativity-601-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Energy is conserved in all reference frames."
            },
            {
              "id": "b",
              "text": "Spacetime tells matter how to move; matter tells spacetime how to curve."
            },
            {
              "id": "c",
              "text": "The speed of light is constant for all observers."
            },
            {
              "id": "d",
              "text": "Quantum mechanics and gravity are two aspects of the same force."
            }
          ],
          "correctOptionId": "b",
          "explanation": "This statement, coined by John Archibald Wheeler, perfectly encapsulates the interactive relationship between spacetime geometry and the distribution of mass-energy described by the equations."
        },
        {
          "id": "general-relativity-601-l03-q2",
          "text": "In numerical relativity, what is the primary purpose of monitoring 'constraint violations'?",
          "skillId": "general-relativity-601-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "To ensure the simulation does not use too much computing power."
            },
            {
              "id": "b",
              "text": "To check if the numerical solution is drifting away from a true solution to the Einstein equations."
            },
            {
              "id": "c",
              "text": "To determine the final mass of the merged black hole."
            },
            {
              "id": "d",
              "text": "To measure the frequency of the emitted gravitational waves."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Einstein equations include constraints that must be satisfied at all times. Numerical errors can cause the simulation to violate these constraints, indicating a deviation from the correct physical evolution."
        },
        {
          "id": "general-relativity-601-l03-q3",
          "text": "A Penrose diagram is most useful for analyzing which property of a spacetime?",
          "skillId": "general-relativity-601-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "The precise gravitational force at a specific point."
            },
            {
              "id": "b",
              "text": "The local curvature in a small region."
            },
            {
              "id": "c",
              "text": "The global causal structure, including singularities and horizons."
            },
            {
              "id": "d",
              "text": "The chemical composition of stars within that spacetime."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Penrose diagrams excel at showing the overall causal relationships, such as what regions can send or receive signals from other regions, and the ultimate fate of observers."
        }
      ]
    },
    {
      "id": "general-relativity-601-l04",
      "title": "Case Study: The LIGO-Virgo-KAGRA Collaboration",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "general-relativity-601-l04-a1",
          "type": "image",
          "title": "LIGO Interferometer Diagram",
          "content": "A schematic of a Laser Interferometer Gravitational-Wave Observatory (LIGO), showing the laser, beam splitter, and long perpendicular arms."
        }
      ],
      "chunks": [
        {
          "id": "general-relativity-601-l04-c1",
          "kind": "concept",
          "title": "The Challenge: Detecting Gravitational Waves",
          "content": "This case study examines the monumental effort to directly detect gravitational waves. We will analyze the core challenge: measuring a distortion in spacetime smaller than the width of a proton over a 4-kilometer distance, and the competing sources of noise that had to be overcome."
        },
        {
          "id": "general-relativity-601-l04-c2",
          "kind": "practice",
          "title": "Engineering Trade-offs and Analysis",
          "content": "Learners will analyze the key design decisions made by the LIGO team. This includes trade-offs between arm length and cost, laser power versus thermal noise on the mirrors, and the complex seismic isolation systems required. We will frame these as leadership and project management challenges."
        },
        {
          "id": "general-relativity-601-l04-c3",
          "kind": "recap",
          "title": "Interpreting the Signal: From Data to Discovery",
          "content": "We recap the process of discovery, from the raw data stream to the matched-filtering technique used to compare the signal against a bank of theoretical waveforms from numerical relativity. This highlights the crucial link between theory, computation, and experiment."
        }
      ]
    },
    {
      "id": "general-relativity-601-l05",
      "title": "Black Hole Merger Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [],
      "chunks": [
        {
          "id": "general-relativity-601-l05-c1",
          "kind": "practice",
          "title": "Interactive Simulation: Binary Black Hole Inspiral",
          "content": "In this interactive clinic, learners will use a simplified web-based tool to control the initial parameters of a binary black hole system, such as mass ratio and spin. They will launch the simulation and observe the orbital decay and resulting gravitational waveform in real-time."
        },
        {
          "id": "general-relativity-601-l05-c2",
          "kind": "recap",
          "title": "Analyzing Simulation Output and Waveform Extraction",
          "content": "After running their simulations, learners will analyze the output. We will recap how to identify the key phases of the waveform—inspiral, merger, and ringdown—and discuss how these features directly relate to the physical parameters of the black holes they configured."
        }
      ],
      "interactiveActivities": [
        {
          "id": "general-relativity-601-l05-act1",
          "type": "scenario",
          "title": "Simulating Extreme Mass Ratios",
          "description": "Configure and run a simulation with an extreme mass ratio (e.g., 30:1) to observe the unique waveform signature and understand the increased computational challenges associated with such systems."
        }
      ]
    },
    {
      "id": "general-relativity-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 12,
      "learningAids": [],
      "questions": [
        {
          "id": "general-relativity-601-l06-q1",
          "text": "In the context of LIGO, what was a primary engineering trade-off in designing the interferometers?",
          "skillId": "general-relativity-601-skill-case1",
          "options": [
            {
              "id": "a",
              "text": "Choosing between optical and radio telescopes."
            },
            {
              "id": "b",
              "text": "Balancing longer arm length (for higher sensitivity) against construction cost and geographical constraints."
            },
            {
              "id": "c",
              "text": "Deciding whether to build the facility on the moon or on Earth."
            },
            {
              "id": "d",
              "text": "Using liquid nitrogen versus liquid helium to cool the mirrors."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Longer arms make the interferometer more sensitive to gravitational waves, but they are exponentially more expensive and difficult to build. This was a central trade-off."
        },
        {
          "id": "general-relativity-601-l06-q2",
          "text": "What is the 'ringdown' phase of a gravitational waveform from a binary black hole merger?",
          "skillId": "general-relativity-601-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "The initial, quiet phase before the black holes begin to spiral."
            },
            {
              "id": "b",
              "text": "The period when the two black holes are orbiting each other at a stable distance."
            },
            {
              "id": "c",
              "text": "The final stage where the newly formed, distorted black hole settles into a stable state, emitting characteristic waves."
            },
            {
              "id": "d",
              "text": "The background noise from the detector after the signal has passed."
            }
          ],
          "correctOptionId": "c",
          "explanation": "The ringdown is analogous to a bell ringing. The newly merged black hole is highly distorted and radiates away this distortion as gravitational waves until it settles into a stable Kerr black hole."
        },
        {
          "id": "general-relativity-601-l06-q3",
          "text": "The technique of 'matched filtering' used by LIGO is most effective for what purpose?",
          "skillId": "general-relativity-601-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "Filtering out seismic noise from the detector data."
            },
            {
              "id": "b",
              "text": "Increasing the power of the main laser."
            },
            {
              "id": "c",
              "text": "Pulling a known signal shape (a theoretical waveform) out of noisy data."
            },
            {
              "id": "d",
              "text": "Calibrating the position of the mirrors."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Matched filtering is a signal processing technique that correlates a noisy data stream with a known template to find instances of that template, making it ideal for finding faint gravitational wave signals."
        }
      ]
    },
    {
      "id": "general-relativity-601-l07",
      "title": "GR, Ethics, and Project Leadership",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "general-relativity-601-l07-a1",
          "type": "image",
          "title": "First Image of a Black Hole (EHT)",
          "content": "The iconic image of the supermassive black hole at the center of galaxy M87, captured by the Event Horizon Telescope (EHT) collaboration."
        }
      ],
      "chunks": [
        {
          "id": "general-relativity-601-l07-c1",
          "kind": "concept",
          "title": "Managing Large-Scale Scientific Collaborations",
          "content": "Using the Event Horizon Telescope (EHT) as a case study, we will analyze the leadership and governance challenges of coordinating hundreds of scientists across dozens of institutions worldwide. Topics include data sharing policies, publication authorship, and equitable credit assignment."
        },
        {
          "id": "general-relativity-601-l07-c2",
          "kind": "concept",
          "title": "Data Release Policies and Scientific Integrity",
          "content": "This lesson explores the ethical obligations of large scientific projects. We will discuss the importance of transparent data release policies, allowing for independent verification. We will also cover methods like 'blind analysis' to prevent experimenter bias from influencing results."
        },
        {
          "id": "general-relativity-601-l07-c3",
          "kind": "recap",
          "title": "Communicating General Relativity to the Public",
          "content": "We conclude by discussing the responsibility of scientists to communicate complex and often mind-bending topics to the public and policymakers. This includes conveying the excitement of discovery while being transparent about uncertainties and the limits of our knowledge."
        }
      ],
      "flashcards": [
        {
          "id": "general-relativity-601-l07-f1",
          "front": "Event Horizon Telescope (EHT)",
          "back": "A global network of radio telescopes that uses Very-Long-Baseline Interferometry to function as a single, Earth-sized virtual telescope, capable of imaging a black hole's event horizon."
        },
        {
          "id": "general-relativity-601-l07-f2",
          "front": "Blind Analysis",
          "back": "A research practice where scientists analyze data without knowing the true outcome or specific details until the analysis is complete, to prevent conscious or unconscious bias."
        },
        {
          "id": "general-relativity-601-l07-f3",
          "front": "Scientific Collaboration Governance",
          "back": "The set of rules, roles, and processes that a large scientific project uses to manage decision-making, data sharing, authorship, and internal communication."
        }
      ]
    },
    {
      "id": "general-relativity-601-l08",
      "title": "Capstone: Proposing a Next-Generation GR Experiment",
      "type": "interactive",
      "duration": 25,
      "learningAids": [
        {
          "id": "general-relativity-601-l08-a1",
          "type": "image",
          "title": "LISA Mission Concept",
          "content": "An artist's conception of the Laser Interferometer Space Antenna (LISA), a future space-based gravitational wave observatory."
        }
      ],
      "chunks": [
        {
          "id": "general-relativity-601-l08-c1",
          "kind": "practice",
          "title": "Developing a Mission Concept",
          "content": "In this capstone lab, learners will develop a proposal for a next-generation experiment to test General Relativity or observe a new class of astrophysical objects. They must define the key science goals, justify the experimental approach, identify major technical and logistical challenges, and propose a collaboration structure."
        },
        {
          "id": "general-relativity-601-l08-c2",
          "kind": "recap",
          "title": "Peer Review and Proposal Defense",
          "content": "Learners will present their mission concepts to their peers for critique. This exercise simulates the rigorous peer-review process that real scientific proposals undergo. The goal is to practice defending design choices, addressing weaknesses, and communicating a compelling scientific vision."
        }
      ],
      "interactiveActivities": [
        {
          "id": "general-relativity-601-l08-act1",
          "type": "debate_simulator",
          "title": "Simulated Funding Panel Review",
          "description": "Defend your proposed mission concept against critiques from a simulated panel of scientific, engineering, and funding experts."
        }
      ]
    }
  ]
};
