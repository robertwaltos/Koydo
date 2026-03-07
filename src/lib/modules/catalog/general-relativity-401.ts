import type { LearningModule } from "@/lib/modules/types";

export const general_relativity_401_Module: LearningModule = {
  "id": "general-relativity-401",
  "title": "General Relativity Frontiers and Scientific Synthesis",
  "description": "Expert-level general relativity curriculum on geometric field theory, strong-gravity phenomena, gravitational-wave inference, cosmological testing, and research-grade scientific argumentation.",
  "subject": "General Relativity",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "relativity",
    "physics",
    "research"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Connect spacetime geometry concepts to physically measurable predictions",
    "Interpret strong-field relativistic phenomena using mathematical and observational evidence",
    "Evaluate gravitational-wave and astrophysical datasets with uncertainty-aware reasoning",
    "Compare competing relativistic and cosmological models using empirical tests",
    "Communicate high-complexity scientific conclusions with clear assumptions and limitations",
    "Design research proposals that integrate theory, simulation, and observation"
  ],
  "lessons": [
    {
      "id": "general-relativity-401-l01",
      "title": "Geometry, Field Equations, and Physical Meaning",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "general-relativity-401-l01-c1",
          "kind": "concept",
          "title": "Curvature as Physics",
          "content": "General relativity recasts gravity not as a force, but as a manifestation of spacetime geometry. The presence of mass and energy warps the spacetime fabric, described by the metric tensor. Objects in free-fall, from planets to photons, follow paths of extremal length through this curved geometry, known as geodesics. In essence, matter tells spacetime how to curve, and curved spacetime tells matter how to move."
        },
        {
          "id": "general-relativity-401-l01-c2",
          "kind": "concept",
          "title": "Equation-to-Observation Bridge",
          "content": "The abstract mathematics of Einstein's field equations connects directly to observable phenomena. These physical predictions, which have been rigorously tested, include the anomalous perihelion precession of Mercury's orbit, the gravitational deflection of starlight, gravitational time dilation and redshift, and the precise waveforms of gravitational waves emitted by merging compact objects like black holes and neutron stars."
        },
        {
          "id": "general-relativity-401-l01-c3",
          "kind": "recap",
          "title": "Model Scope and Limits",
          "content": "A critical component of expert reasoning is defining a model's domain of applicability. General relativity, for example, excels in the classical, strong-gravity regime but is expected to break down at the quantum level (e.g., inside a black hole singularity). Understanding these limitations prevents misinterpretation and guides the search for more comprehensive theories."
        }
      ],
      "flashcards": [
        {
          "id": "general-relativity-401-l01-f1",
          "front": "Spacetime curvature",
          "back": "The geometric property of spacetime, determined by mass-energy, that dictates the gravitational motion of objects."
        },
        {
          "id": "general-relativity-401-l01-f2",
          "front": "Geodesic",
          "back": "The path that a free-falling object follows through curved spacetime, representing the straightest possible line in that geometry."
        },
        {
          "id": "general-relativity-401-l01-f3",
          "front": "Model domain",
          "back": "The physical regime where a model's assumptions remain valid and its predictions are reliable."
        }
      ],
      "learningAids": [
        {
          "id": "general-relativity-401-l01-a1",
          "type": "image",
          "title": "Geometry-to-Measurement Map",
          "content": "An infographic mapping the core concepts of the Einstein Field Equations (Stress-Energy Tensor -> Einstein Tensor/Curvature) to a tree of measurable predictions, including orbital precession, gravitational lensing, Shapiro delay, and gravitational waveforms."
        }
      ]
    },
    {
      "id": "general-relativity-401-l02",
      "title": "Strong-Field Relativity and Simulation Lab",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "general-relativity-401-l02-c1",
          "kind": "concept",
          "title": "Strong-Gravity Regimes",
          "content": "Strong-gravity regimes, such as the environments around black holes, neutron stars, and binary mergers, are the ultimate laboratories for testing general relativity. Here, gravitational fields are intense and rapidly changing, causing linearized approximations (like post-Newtonian theory) to fail. Understanding these systems requires solving the full, nonlinear Einstein field equations, often through complex numerical simulations."
        },
        {
          "id": "general-relativity-401-l02-c2",
          "kind": "practice",
          "title": "Simulation-Assisted Reasoning",
          "content": "Numerical relativity simulations are indispensable tools for interpreting strong-field phenomena like black hole mergers. Expert practice involves rigorous validation of these simulations, including convergence testing (ensuring results are stable as numerical resolution increases) and sensitivity analysis, which probes how the output waveforms change in response to variations in initial physical parameters (e.g., mass ratio, spins)."
        }
      ],
      "interactiveActivities": [
        {
          "id": "general-relativity-401-l02-act1",
          "type": "matching_pairs",
          "title": "Signal-to-Physics Match",
          "description": "Match observed signal features to their likely physical interpretation.",
          "pairs": [
            {
              "left": "Late-time waveform ringdown",
              "right": "Post-merger compact remnant dynamics"
            },
            {
              "left": "Gravitational redshift increase",
              "right": "Stronger local gravitational potential"
            },
            {
              "left": "Orbital precession anomaly",
              "right": "Curvature-driven trajectory correction"
            },
            {
              "left": "Lensing magnification variation",
              "right": "Line-of-sight mass distribution effects"
            }
          ]
        },
        {
          "id": "general-relativity-401-l02-act2",
          "type": "scenario_practice",
          "title": "Model Robustness Drill",
          "description": "Defend a strong-field interpretation under parameter uncertainty.",
          "instructions": [
            "You are presented with a gravitational wave signal and a best-fit model. Identify a key physical parameter in the model that is poorly constrained by the data.",
            "Propose a follow-up observation or analysis that could break this degeneracy and strengthen the interpretation."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Why are nonlinear effects central in strong-field relativity?",
          "How do simulation assumptions influence physical interpretation?",
          "What evidence would make you reject a favored strong-field model?"
        ]
      },
      "learningAids": [
        {
          "id": "general-relativity-401-l02-a1",
          "type": "practice",
          "title": "Robustness Checklist",
          "content": "Checklist for evaluating a numerical study: code validation, convergence tests, parameter sensitivity, residual analysis, and comparison with alternative models."
        }
      ]
    },
    {
      "id": "general-relativity-401-l03",
      "title": "Checkpoint 1: Geometry and Strong-Field Inference",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-relativity-401-l03-q1",
          "text": "In general relativity, gravity is best described as:",
          "skillId": "general-relativity-401-skill-foundations",
          "options": [
            {
              "id": "a",
              "text": "A force acting in flat space only"
            },
            {
              "id": "b",
              "text": "Spacetime curvature influencing motion"
            },
            {
              "id": "c",
              "text": "A quantum-only artifact"
            },
            {
              "id": "d",
              "text": "A mathematical convenience with no measurements"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Relativistic gravity is modeled geometrically through spacetime curvature, which dictates the paths of objects."
        },
        {
          "id": "general-relativity-401-l03-q2",
          "text": "Why are strong-field systems important for relativity testing?",
          "skillId": "general-relativity-401-skill-strong-field",
          "options": [
            {
              "id": "a",
              "text": "They avoid all uncertainty"
            },
            {
              "id": "b",
              "text": "They probe regimes where relativistic effects are largest"
            },
            {
              "id": "c",
              "text": "They simplify to Newtonian behavior always"
            },
            {
              "id": "d",
              "text": "They remove the need for simulation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Extreme conditions in strong-field systems amplify relativistic effects, making deviations from simpler theories more easily observable."
        },
        {
          "id": "general-relativity-401-l03-q3",
          "text": "A convincing scientific claim should always include:",
          "skillId": "general-relativity-401-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "Only the preferred interpretation"
            },
            {
              "id": "b",
              "text": "A clear statement of assumptions, uncertainties, and competing alternatives"
            },
            {
              "id": "c",
              "text": "No mention of limitations"
            },
            {
              "id": "d",
              "text": "Only visual plots"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Transparently stating assumptions, uncertainties, and alternative explanations is a core principle of scientific rigor and integrity."
        },
        {
          "id": "general-relativity-401-l03-q4",
          "text": "If residuals show unexplained structure after fitting a waveform model, what is the likely implication?",
          "skillId": "general-relativity-401-skill-inference",
          "options": [
            {
              "id": "a",
              "text": "The model may be incomplete or its assumptions mismatched to the data"
            },
            {
              "id": "b",
              "text": "The model is automatically correct"
            },
            {
              "id": "c",
              "text": "The data should be ignored"
            },
            {
              "id": "d",
              "text": "No interpretation is possible"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Structured residuals (the leftover signal after subtracting the best-fit model) often indicate missing physics in the model or unaddressed systematic errors."
        }
      ],
      "learningAids": [
        {
          "id": "general-relativity-401-l03-a1",
          "type": "mnemonic",
          "title": "PAIR",
          "content": "A workflow for robust analysis: Prediction, Assumptions, Inference, Residuals."
        }
      ]
    },
    {
      "id": "general-relativity-401-l04",
      "title": "Gravitational Waves, Black Holes, and Evidence Synthesis",
      "type": "video",
      "duration": 13,
      "chunks": [
        {
          "id": "general-relativity-401-l04-c1",
          "kind": "concept",
          "title": "Waveform Physics",
          "content": "Gravitational waveforms are rich carriers of information about their astrophysical sources. The signal's evolution encodes the inspiral, merger, and ringdown phases of a binary system, allowing for precise measurement of parameters like mass, spin, and orbital eccentricity. Extracting this information requires sophisticated data analysis techniques, including matched filtering against libraries of theoretical waveform templates and Bayesian inference to quantify the posterior probabilities and uncertainties for each parameter."
        },
        {
          "id": "general-relativity-401-l04-c2",
          "kind": "concept",
          "title": "Black Hole Tests",
          "content": "The nature of black holes is tested through multiple, independent channels. These include direct imaging of the event horizon shadow, stellar orbital dynamics around galactic centers (like Sgr A*), and analysis of the quasi-normal modes during the ringdown phase of a merger. When these disparate methods yield consistent measurements of a black hole's mass and spin, it provides powerful confirmation of the 'no-hair' theorem and our fundamental understanding of these objects."
        },
        {
          "id": "general-relativity-401-l04-c3",
          "kind": "recap",
          "title": "Synthesis Across Instruments",
          "content": "Multi-messenger astronomy, the practice of combining information from gravitational waves with electromagnetic signals (like gamma-ray bursts or kilonovae) and neutrinos, represents a new frontier. This evidence synthesis allows for a more complete physical picture of an event, breaks parameter degeneracies inherent in a single messenger, and provides powerful consistency checks on our models, dramatically reducing overall uncertainty."
        }
      ],
      "flashcards": [
        {
          "id": "general-relativity-401-l04-f1",
          "front": "Ringdown",
          "back": "The final stage of a compact binary merger signal, where the newly formed object settles into a stable state by radiating quasi-normal modes."
        },
        {
          "id": "general-relativity-401-l04-f2",
          "front": "Parameter degeneracy",
          "back": "A situation in data analysis where different combinations of physical parameters produce nearly identical observable signals, making them difficult to distinguish."
        },
        {
          "id": "general-relativity-401-l04-f3",
          "front": "Evidence synthesis",
          "back": "The practice of combining independent data channels (e.g., gravitational waves and light) to test consistency and break degeneracies."
        }
      ],
      "learningAids": [
        {
          "id": "general-relativity-401-l04-a1",
          "type": "image",
          "title": "Waveform Inference Pipeline",
          "content": "A detailed flowchart of the gravitational-wave data analysis pipeline. It begins with raw strain data from detectors, proceeds through signal conditioning and candidate event identification, and culminates in Bayesian parameter estimation, which produces the characteristic 'corner plots' of posterior probability distributions for the source's physical parameters."
        }
      ]
    },
    {
      "id": "general-relativity-401-l05",
      "title": "Cosmological GR Tests and Model Comparison Lab",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "general-relativity-401-l05-c1",
          "kind": "concept",
          "title": "Testing Relativity at Cosmological Scales",
          "content": "On cosmological scales, general relativity is tested by comparing predictions of the standard Lambda-CDM model against a suite of observations. These include the expansion history of the universe (probed by supernovae), the growth rate of large-scale structure (from galaxy surveys), and the geometry of spacetime (via gravitational lensing and the cosmic microwave background). Any statistically significant tension between these probes and the model's predictions could signal new physics or modifications to GR."
        },
        {
          "id": "general-relativity-401-l05-c2",
          "kind": "practice",
          "title": "Comparative Model Logic",
          "content": "Rigorous model comparison is central to scientific progress. When evaluating a standard model against a more complex alternative, experts use statistical tools like the Bayes factor, which naturally incorporates Occam's razor by penalizing models with extra, poorly-constrained parameters. A responsible claim requires not just a better fit to the data, but a statistically significant preference that accounts for model complexity and has a plausible physical motivation."
        }
      ],
      "interactiveActivities": [
        {
          "id": "general-relativity-401-l05-act1",
          "type": "sorting_buckets",
          "title": "Evidence Role Sort",
          "description": "Sort cosmological evidence by its primary testing role.",
          "buckets": [
            "Expansion Constraints",
            "Structure Constraints",
            "Geometry/Curvature Constraints"
          ],
          "items": [
            {
              "text": "Distance-redshift supernova relation",
              "bucket": "Expansion Constraints"
            },
            {
              "text": "Weak lensing clustering statistics",
              "bucket": "Structure Constraints"
            },
            {
              "text": "Large-scale lensing geometry",
              "bucket": "Geometry/Curvature Constraints"
            },
            {
              "text": "Growth rate from redshift-space distortions",
              "bucket": "Structure Constraints"
            }
          ]
        },
        {
          "id": "general-relativity-401-l05-act2",
          "type": "scenario_practice",
          "title": "Model Selection Debate",
          "description": "Argue for or against extending a baseline relativistic model.",
          "instructions": [
            "A new dataset shows a 3-sigma tension with the standard cosmological model. First, formulate an argument for extending the model, justifying why a new physical parameter is warranted.",
            "Second, formulate a counter-argument, cautioning against overfitting and proposing a specific systematic effect that could be mimicking the signal."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "What makes a model extension scientifically justified rather than overfit?",
          "How should conflicting cosmological constraints be communicated responsibly?",
          "Which follow-up dataset would most improve discriminative power between two models?"
        ]
      },
      "learningAids": [
        {
          "id": "general-relativity-401-l05-a1",
          "type": "practice",
          "title": "Model Comparison Worksheet",
          "content": "Template for comparing two models, including sections for: underlying assumptions, data fit metrics (e.g., chi-squared), model complexity penalty (e.g., Bayesian evidence), robustness checks, and interpretation boundaries."
        }
      ]
    },
    {
      "id": "general-relativity-401-l06",
      "title": "Checkpoint 2: Frontier Model Evaluation",
      "type": "quiz",
      "duration": 11,
      "questions": [
        {
          "id": "general-relativity-401-l06-q1",
          "text": "Why are independent data channels valuable in relativistic inference?",
          "skillId": "general-relativity-401-skill-synthesis",
          "options": [
            {
              "id": "a",
              "text": "They remove all uncertainty"
            },
            {
              "id": "b",
              "text": "They provide complementary constraints and consistency checks"
            },
            {
              "id": "c",
              "text": "They guarantee one model is true"
            },
            {
              "id": "d",
              "text": "They eliminate the need for theory"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Independent channels can break parameter degeneracies and provide crucial cross-checks on results, increasing confidence in the final interpretation."
        },
        {
          "id": "general-relativity-401-l06-q2",
          "text": "What is the most responsible interpretation of a mild statistical preference for a new model in a single dataset?",
          "skillId": "general-relativity-401-skill-inference",
          "options": [
            {
              "id": "a",
              "text": "Declare definitive discovery of new physics"
            },
            {
              "id": "b",
              "text": "Treat it as tentative evidence that requires independent validation"
            },
            {
              "id": "c",
              "text": "Ignore the uncertainty ranges"
            },
            {
              "id": "d",
              "text": "Discard the baseline model immediately"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Scientific caution requires that tentative results, especially those at low statistical significance, be subjected to further testing and validation before strong claims are made."
        },
        {
          "id": "general-relativity-401-l06-q3",
          "text": "A key risk when comparing complex models is:",
          "skillId": "general-relativity-401-skill-models",
          "options": [
            {
              "id": "a",
              "text": "Overfitting the data without a sufficient penalty for complexity"
            },
            {
              "id": "b",
              "text": "Having too much uncertainty reporting"
            },
            {
              "id": "c",
              "text": "Using independent datasets"
            },
            {
              "id": "d",
              "text": "Running sensitivity tests"
            }
          ],
          "correctOptionId": "a",
          "explanation": "More complex models with more parameters can fit noise in the data, appearing to be a better fit while having less predictive power. This is known as overfitting."
        },
        {
          "id": "general-relativity-401-l06-q4",
          "text": "Best practice for communicating frontier scientific results is to:",
          "skillId": "general-relativity-401-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "Emphasize certainty and omit all caveats"
            },
            {
              "id": "b",
              "text": "Clearly report assumptions, uncertainties, alternatives, and testable predictions"
            },
            {
              "id": "c",
              "text": "Use only qualitative claims without data"
            },
            {
              "id": "d",
              "text": "Avoid discussing any limitations of the study"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Transparent and comprehensive reporting supports reproducibility, allows for informed critique, and fosters a healthy scientific dialogue."
        },
        {
          "id": "general-relativity-401-l06-q5",
          "text": "If two datasets measuring the same cosmological parameter disagree strongly, the first expert step is to:",
          "skillId": "general-relativity-401-skill-inference",
          "options": [
            {
              "id": "a",
              "text": "Select the dataset that supports your preferred theory"
            },
            {
              "id": "b",
              "text": "Audit the assumptions, calibration, and analysis pipelines of both experiments"
            },
            {
              "id": "c",
              "text": "Publish a final conclusion immediately"
            },
            {
              "id": "d",
              "text": "Ignore one dataset entirely"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Diagnosing tension between experiments begins with a careful audit of all potential sources of systematic error and methodological differences."
        }
      ],
      "learningAids": [
        {
          "id": "general-relativity-401-l06-a1",
          "type": "mnemonic",
          "title": "TEST",
          "content": "A framework for evaluating claims: Theory, Evidence, Sensitivity, Transparency."
        }
      ]
    },
    {
      "id": "general-relativity-401-l07",
      "title": "Capstone: Relativity Research Synthesis Proposal",
      "type": "interactive",
      "duration": 19,
      "chunks": [
        {
          "id": "general-relativity-401-l07-c1",
          "kind": "practice",
          "title": "Capstone Brief",
          "content": "Your capstone challenge is to design a research proposal that addresses a frontier question in general relativity. You will synthesize concepts from this module to define a clear hypothesis, propose a multi-pronged measurement strategy (integrating theory, simulation, or multiple data sources), and develop a robust plan for data analysis, uncertainty quantification, and model comparison."
        },
        {
          "id": "general-relativity-401-l07-c2",
          "kind": "recap",
          "title": "Assessment Criteria",
          "content": "Proposals will be evaluated on their scientific merit and rigor. Key criteria include: the clarity of the research question; the direct link between theoretical predictions and proposed observables; a realistic assessment of statistical and systematic uncertainties; and, crucially, the definition of clear, falsifiable conditions under which your preferred model would be rejected."
        }
      ],
      "metadata": {
        "prompts": [
          "State your research question and two competing models.",
          "Define one falsification condition for your favored model.",
          "List top uncertainty sources and mitigation steps."
        ]
      },
      "learningAids": [
        {
          "id": "general-relativity-401-l07-a1",
          "type": "practice",
          "title": "Research Proposal Template",
          "content": "A structured template for a research proposal, including sections for: Scientific Rationale, Hypothesis and Competing Models, Observational/Simulation Methods, Uncertainty Budget, Falsification Criteria, and Communication Plan."
        }
      ]
    }
  ]
};
