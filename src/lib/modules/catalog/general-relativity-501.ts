import type { LearningModule } from "@/lib/modules/types";

export const general_relativity_501_Module: LearningModule = {
  "id": "general-relativity-501",
  "title": "General Relativity Specialization Studio",
  "description": "An advanced specialization in General Relativity, focusing on the mathematical formalism and its application to complex astrophysical systems. This module covers the Einstein Field Equations, black holes, gravitational waves, and modern cosmology through rigorous case studies, numerical simulations, and a capstone research proposal defense.",
  "subject": "General Relativity",
  "tags": [
    "physics",
    "astrophysics",
    "cosmology",
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
    "Solve the Einstein Field Equations for simple, symmetric systems like static stars and non-rotating black holes.",
    "Analyze the spacetime geometry around massive objects, including the effects of gravitational lensing and time dilation.",
    "Model the generation of gravitational waves from binary systems and interpret waveform data.",
    "Apply the principles of modern cosmology to understand the expansion of the universe, dark matter, and dark energy.",
    "Critically evaluate experimental and observational tests of General Relativity.",
    "Formulate and defend a novel research proposal designed to test a prediction of General Relativity."
  ],
  "lessons": [
    {
      "id": "general-relativity-501-l01",
      "title": "The Einstein Field Equations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "general-relativity-501-l01-a1",
          "type": "image",
          "title": "Spacetime Curvature",
          "content": "A 3D visualization showing how a massive object like a star warps the 2D fabric of spacetime around it, with grid lines bending towards the mass."
        }
      ],
      "chunks": [
        {
          "id": "general-relativity-501-l01-c1",
          "kind": "concept",
          "title": "The Geometry of Spacetime",
          "content": "We begin by exploring the foundational concept of General Relativity: spacetime as a dynamic entity. We will introduce the metric tensor, which defines distances in curved spacetime, and the principle of equivalence, which links gravity to acceleration."
        },
        {
          "id": "general-relativity-501-l01-c2",
          "kind": "concept",
          "title": "Matter, Energy, and Curvature",
          "content": "This section introduces the Stress-Energy Tensor, which describes the distribution of matter and energy. We will then assemble the full Einstein Field Equations, which mathematically connect the geometry of spacetime (Einstein tensor) to its matter-energy content (Stress-Energy tensor)."
        },
        {
          "id": "general-relativity-501-l01-c3",
          "kind": "recap",
          "title": "Geodesics and Motion",
          "content": "We recap how the motion of particles in a gravitational field is described not by a force, but by them following the straightest possible paths, or 'geodesics,' through curved spacetime. This explains why planets orbit the sun and light bends around massive objects."
        }
      ],
      "flashcards": [
        {
          "id": "general-relativity-501-l01-f1",
          "front": "Metric Tensor (gμν)",
          "back": "A mathematical object that describes the geometry of spacetime, defining distances and angles at every point."
        },
        {
          "id": "general-relativity-501-l01-f2",
          "front": "Stress-Energy Tensor (Tμν)",
          "back": "Represents the density and flux of energy and momentum in spacetime, acting as the source of gravitational fields."
        },
        {
          "id": "general-relativity-501-l01-f3",
          "front": "Geodesic",
          "back": "The shortest path between two points in curved spacetime. Free-falling objects and light rays follow geodesics."
        }
      ]
    },
    {
      "id": "general-relativity-501-l02",
      "title": "Solving for Spacetime: A Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "general-relativity-501-l02-a1",
          "type": "practice",
          "title": "Guided Calculation",
          "content": "Step-by-step derivation of the Schwarzschild metric from the Einstein Field Equations under vacuum conditions with spherical symmetry."
        }
      ],
      "chunks": [
        {
          "id": "general-relativity-501-l02-c1",
          "kind": "practice",
          "title": "Deriving the Schwarzschild Solution",
          "content": "In this interactive lab, you will apply simplifying assumptions (static, spherically symmetric, vacuum) to the Einstein Field Equations to derive the Schwarzschild metric, which describes the spacetime outside a non-rotating, uncharged massive object like a star or black hole."
        },
        {
          "id": "general-relativity-501-l02-c2",
          "kind": "recap",
          "title": "Interpreting the Metric",
          "content": "We will analyze the components of the Schwarzschild metric to understand its physical implications, such as gravitational time dilation and the existence of an event horizon, a point of no return."
        }
      ],
      "interactiveActivities": [
        {
          "id": "general-relativity-501-l02-act1",
          "type": "matching_pairs",
          "title": "Matching Metrics to Spacetimes",
          "description": "Match the spacetime metric to the physical system it describes.",
          "pairs": [
            {
              "left": "Schwarzschild Metric",
              "right": "A non-rotating, uncharged black hole or star."
            },
            {
              "left": "Kerr Metric",
              "right": "A rotating black hole."
            },
            {
              "left": "Minkowski Metric",
              "right": "Flat spacetime with no gravity (Special Relativity)."
            },
            {
              "left": "FLRW Metric",
              "right": "A homogeneous, isotropic, expanding universe."
            }
          ]
        }
      ]
    },
    {
      "id": "general-relativity-501-l03",
      "title": "Checkpoint 1: Spacetime and Matter",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "general-relativity-501-l03-a1",
          "type": "practice",
          "title": "Key Concepts Review",
          "content": "Review the relationship between the Stress-Energy Tensor and the Einstein Tensor before starting the quiz."
        }
      ],
      "questions": [
        {
          "id": "general-relativity-501-l03-q1",
          "text": "What is the fundamental principle of General Relativity?",
          "skillId": "general-relativity-501-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Energy is quantized in discrete packets."
            },
            {
              "id": "b",
              "text": "Matter and energy curve spacetime, and this curvature dictates how matter and energy move."
            },
            {
              "id": "c",
              "text": "The speed of light is constant for all observers, but gravity is a force."
            },
            {
              "id": "d",
              "text": "For every action, there is an equal and opposite reaction."
            }
          ],
          "correctOptionId": "b",
          "explanation": "General Relativity's core idea is the interplay between spacetime geometry and the distribution of matter and energy."
        },
        {
          "id": "general-relativity-501-l03-q2",
          "text": "In the Einstein Field Equations, what does the Stress-Energy Tensor (Tμν) represent?",
          "skillId": "general-relativity-501-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "The curvature of spacetime itself."
            },
            {
              "id": "b",
              "text": "The source of the gravitational field, i.e., the distribution of energy, momentum, and stress."
            },
            {
              "id": "c",
              "text": "The path of a light ray in a vacuum."
            },
            {
              "id": "d",
              "text": "The strength of the electromagnetic field."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Stress-Energy Tensor acts as the 'source' term in the equations, telling spacetime how to curve."
        },
        {
          "id": "general-relativity-501-l03-q3",
          "text": "The Schwarzschild solution describes the spacetime around what kind of object?",
          "skillId": "general-relativity-501-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "A rapidly rotating neutron star."
            },
            {
              "id": "b",
              "text": "A static, spherically symmetric, uncharged mass."
            },
            {
              "id": "c",
              "text": "Two black holes orbiting each other."
            },
            {
              "id": "d",
              "text": "The entire expanding universe."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Schwarzschild metric is the simplest non-trivial solution, derived under the assumptions of spherical symmetry, no rotation, and no charge."
        },
        {
          "id": "general-relativity-501-l03-q4",
          "text": "What is a geodesic?",
          "skillId": "general-relativity-501-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "A particle that travels faster than light."
            },
            {
              "id": "b",
              "text": "The straightest possible path an object can take through curved spacetime."
            },
            {
              "id": "c",
              "text": "A region of infinite density."
            },
            {
              "id": "d",
              "text": "A measurement of gravitational time dilation."
            }
          ],
          "correctOptionId": "b",
          "explanation": "In GR, gravity is not a force. Objects in free-fall, from planets to photons, are simply following geodesics determined by the spacetime curvature."
        }
      ]
    },
    {
      "id": "general-relativity-501-l04",
      "title": "Case Study: Black Holes and Gravitational Lensing",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "general-relativity-501-l04-a1",
          "type": "image",
          "title": "Gravitational Lensing and Einstein Rings",
          "content": "An animation showing light from a distant galaxy being bent by a massive foreground galaxy, creating multiple images and a complete 'Einstein Ring' when perfectly aligned."
        }
      ],
      "chunks": [
        {
          "id": "general-relativity-501-l04-c1",
          "kind": "concept",
          "title": "The Nature of Black Holes",
          "content": "This case study explores the extreme predictions of General Relativity: black holes. We will analyze the event horizon, the singularity, and the key differences between a non-rotating (Schwarzschild) and a rotating (Kerr) black hole, including the ergosphere."
        },
        {
          "id": "general-relativity-501-l04-c2",
          "kind": "practice",
          "title": "Calculating Light Deflection",
          "content": "We will examine gravitational lensing, a key observational proof of General Relativity. Learners will analyze how the path of light is bent as it passes near a massive object, leading to phenomena like multiple images of distant quasars and Einstein rings."
        },
        {
          "id": "general-relativity-501-l04-c3",
          "kind": "recap",
          "title": "Observational Evidence",
          "content": "We review the real-world evidence for these phenomena, from the 1919 Eddington experiment that confirmed light bending around the Sun to modern observations of stellar orbits around the supermassive black hole at our galaxy's center."
        }
      ]
    },
    {
      "id": "general-relativity-501-l05",
      "title": "Simulation: Gravitational Wave Astronomy",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "general-relativity-501-l05-a1",
          "type": "practice",
          "title": "LIGO Interferometer",
          "content": "An interactive diagram of a LIGO-like interferometer, allowing the user to see how a passing gravitational wave stretches and squeezes the arms, changing the laser interference pattern."
        }
      ],
      "chunks": [
        {
          "id": "general-relativity-501-l05-c1",
          "kind": "practice",
          "title": "Binary Merger Simulation",
          "content": "In this interactive clinic, learners will simulate the merger of two compact objects, like black holes or neutron stars. You will adjust parameters such as mass and spin to observe how these changes affect the resulting gravitational waveform's frequency and amplitude during the inspiral, merger, and ringdown phases."
        },
        {
          "id": "general-relativity-501-l05-c2",
          "kind": "recap",
          "title": "Decoding the Waves",
          "content": "We recap how the shape of the gravitational wave signal (the 'chirp') allows astrophysicists to determine the properties of the source system, providing a new way to observe the universe and test General Relativity in the strong-field regime."
        }
      ],
      "interactiveActivities": [
        {
          "id": "general-relativity-501-l05-act1",
          "type": "scenario",
          "title": "Binary Black Hole Merger",
          "description": "Adjust the masses of two merging black holes and observe the resulting gravitational waveform. Try to match a target waveform from a real LIGO detection."
        }
      ]
    },
    {
      "id": "general-relativity-501-l06",
      "title": "Checkpoint 2: Relativistic Astrophysics",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "general-relativity-501-l06-a1",
          "type": "practice",
          "title": "Waveform Analysis",
          "content": "Review a sample gravitational waveform, identifying the inspiral, merger, and ringdown phases before the quiz."
        }
      ],
      "questions": [
        {
          "id": "general-relativity-501-l06-q1",
          "text": "What is the defining feature of a black hole's event horizon?",
          "skillId": "general-relativity-501-skill-case1",
          "options": [
            {
              "id": "a",
              "text": "It is a solid physical surface."
            },
            {
              "id": "b",
              "text": "It is a boundary from within which nothing, not even light, can escape."
            },
            {
              "id": "c",
              "text": "It is the region where the black hole's magnetic field is strongest."
            },
            {
              "id": "d",
              "text": "It is where time stops for all observers."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The event horizon is a causal boundary in spacetime, not a physical surface. Once crossed, all future paths lead to the singularity."
        },
        {
          "id": "general-relativity-501-l06-q2",
          "text": "Gravitational lensing occurs because:",
          "skillId": "general-relativity-501-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "Massive objects have a refractive index like glass."
            },
            {
              "id": "b",
              "text": "The curvature of spacetime caused by a massive object bends the path of light."
            },
            {
              "id": "c",
              "text": "Light particles are slowed down by gravity."
            },
            {
              "id": "d",
              "text": "Cosmic dust scatters light from distant sources."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Lensing is a direct consequence of light following geodesics through the curved spacetime around a massive object."
        },
        {
          "id": "general-relativity-501-l06-q3",
          "text": "What physical process generates the most powerful gravitational waves detectable by LIGO/Virgo?",
          "skillId": "general-relativity-501-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "A supernova explosion."
            },
            {
              "id": "b",
              "text": "The merger of two compact objects like black holes or neutron stars."
            },
            {
              "id": "c",
              "text": "A rapidly spinning pulsar."
            },
            {
              "id": "d",
              "text": "The Earth orbiting the Sun."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The rapid acceleration of massive objects during a binary merger creates powerful, detectable ripples in spacetime."
        },
        {
          "id": "general-relativity-501-l06-q4",
          "text": "In a gravitational waveform from a binary black hole merger, what does the 'chirp'—an increase in frequency and amplitude—signify?",
          "skillId": "general-relativity-501-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "The black holes are moving away from each other."
            },
            {
              "id": "b",
              "text": "The black holes are in a stable, unchanging orbit."
            },
            {
              "id": "c",
              "text": "The black holes are rapidly spiraling closer together just before they merge."
            },
            {
              "id": "d",
              "text": "The signal is being distorted by Earth's atmosphere."
            }
          ],
          "correctOptionId": "c",
          "explanation": "As the objects lose energy to gravitational waves, their orbit decays, causing them to orbit faster and closer, which increases the frequency and amplitude of the emitted waves."
        }
      ]
    },
    {
      "id": "general-relativity-501-l07",
      "title": "Cosmology and the Expanding Universe",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "general-relativity-501-l07-a1",
          "type": "image",
          "title": "Cosmic Microwave Background",
          "content": "The Planck satellite's map of the Cosmic Microwave Background, showing tiny temperature fluctuations in the early universe."
        }
      ],
      "chunks": [
        {
          "id": "general-relativity-501-l07-c1",
          "kind": "concept",
          "title": "The Dynamic Universe",
          "content": "We apply General Relativity to the entire universe. This section introduces the Friedmann–Lemaître–Robertson–Walker (FLRW) metric, the solution that describes a homogeneous and isotropic universe, and shows how it leads to the prediction of an expanding or contracting cosmos."
        },
        {
          "id": "general-relativity-501-l07-c2",
          "kind": "concept",
          "title": "The Contents of the Cosmos",
          "content": "We explore the modern cosmological model (ΛCDM), which requires two mysterious components to match observations: dark matter and dark energy. We will discuss the evidence for their existence, such as galaxy rotation curves and the accelerating expansion of the universe."
        },
        {
          "id": "general-relativity-501-l07-c3",
          "kind": "recap",
          "title": "The Big Bang Model",
          "content": "We recap the key pillars of the Big Bang model: the observed expansion (Hubble's Law), the Cosmic Microwave Background radiation, and the abundance of light elements. These observations provide a consistent picture of our universe's evolution from a hot, dense state."
        }
      ],
      "flashcards": [
        {
          "id": "general-relativity-501-l07-f1",
          "front": "Hubble's Law",
          "back": "The observation that galaxies are moving away from Earth at speeds proportional to their distance, providing key evidence for an expanding universe."
        },
        {
          "id": "general-relativity-501-l07-f2",
          "front": "Dark Matter",
          "back": "A hypothetical form of matter that does not interact with light but whose gravitational effects are needed to explain galaxy rotation and large-scale structure."
        },
        {
          "id": "general-relativity-501-l07-f3",
          "front": "Dark Energy",
          "back": "A mysterious form of energy with negative pressure, proposed to explain the observed accelerated expansion of the universe, often associated with the cosmological constant (Λ)."
        }
      ]
    },
    {
      "id": "general-relativity-501-l08",
      "title": "Capstone: Proposing a Novel GR Test",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "general-relativity-501-l08-a1",
          "type": "practice",
          "title": "Proposal Outline",
          "content": "A structured template for a scientific proposal, including sections for Introduction, Hypothesis, Methodology, Expected Results, and Significance."
        }
      ],
      "chunks": [
        {
          "id": "general-relativity-501-l08-c1",
          "kind": "practice",
          "title": "Proposal Assembly",
          "content": "In this capstone lab, you will synthesize your knowledge to design a novel experiment or observation to test a prediction of General Relativity. This could involve using pulsar timing arrays, analyzing data from the Event Horizon Telescope, or proposing a new satellite mission."
        },
        {
          "id": "general-relativity-501-l08-c2",
          "kind": "recap",
          "title": "Peer Review Rehearsal",
          "content": "You will prepare to defend your proposal against critiques from a mock scientific review panel. This involves anticipating questions about your methodology's feasibility, potential sources of error, and the scientific impact of your proposed test."
        }
      ],
      "interactiveActivities": [
        {
          "id": "general-relativity-501-l08-act1",
          "type": "debate_simulator",
          "title": "Peer Review Simulation",
          "description": "Present your research proposal and defend your methodology, assumptions, and expected impact against critical questions from a simulated expert panel."
        }
      ]
    }
  ]
};
