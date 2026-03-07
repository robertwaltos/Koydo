import type { LearningModule } from "@/lib/modules/types";

export const astronomy_401_Module: LearningModule = {
  "id": "astronomy-401",
  "title": "Astronomy Research Design and Cosmological Inference",
  "description": "Expert-level astronomy curriculum focused on research-grade observation strategy, statistical inference, exoplanet and transient analysis, cosmological parameter estimation, and scientific communication.",
  "subject": "Astronomy",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "astronomy",
    "research",
    "inference"
  ],
  "minAge": 13,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Design observation plans with clear signal, noise, and uncertainty assumptions",
    "Apply statistical methods to evaluate astrophysical hypotheses",
    "Interpret multi-wavelength data for galaxies, stars, and transient events",
    "Evaluate evidence for exoplanets using radial velocity and transit methods",
    "Connect cosmological models to observational constraints",
    "Communicate conclusions with transparent assumptions and confidence limits"
  ],
  "lessons": [
    {
      "id": "astronomy-401-l01",
      "title": "Observational Strategy and Survey Design",
      "type": "video",
      "duration": 13,
      "chunks": [
        {
          "id": "astronomy-401-l01-c1",
          "kind": "concept",
          "title": "From Question to Measurement",
          "content": "To explore the universe effectively, we must translate our broad scientific questions into specific signals we can actually measure. The way we design our astronomical surveys dictates what we can discover. We must make several critical decisions: 'cadence' (how often we take measurements), 'exposure time' (how long we collect light), 'filters' (which wavelengths of light we capture), and 'sky coverage' (how much of the sky we map). These choices act as a filter, determining which cosmic phenomena are revealed and which remain hidden in the dark."
        },
        {
          "id": "astronomy-401-l01-c2",
          "kind": "concept",
          "title": "Uncertainty Budgets",
          "content": "In astronomy, understanding our margins of error is just as important as the measurements themselves. We categorize these errors into two main types: random and systematic uncertainties. Random uncertainties arise from unpredictable fluctuations, like detector noise or atmospheric blurring. Systematic uncertainties, however, are consistent biases, such as a miscalibrated sensor or flawed model assumptions. By creating explicit 'uncertainty budgets,' scientists can account for these errors, defend their conclusions, and ensure their findings are reliable."
        },
        {
          "id": "astronomy-401-l01-c3",
          "kind": "recap",
          "title": "Design Trade-offs",
          "content": "Telescope time is precious, so astronomers must make strategic trade-offs. A 'deep, narrow' survey focuses on a tiny patch of sky for a long time, revealing incredibly faint, distant objects. Conversely, a 'shallow, wide' survey scans vast areas of the sky quickly, perfect for finding rare, bright events like supernovae. Experts justify their survey designs based on their specific targets, the feasibility of follow-up observations, and the scientific value of negative results—because sometimes, finding nothing is just as informative as finding something."
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-401-l01-f1",
          "front": "Survey cadence",
          "back": "The frequency of repeated observations over time, critical for detecting variability and transients."
        },
        {
          "id": "astronomy-401-l01-f2",
          "front": "Systematic uncertainty",
          "back": "A consistent bias or error source that can shift measurements in a specific direction if not corrected."
        },
        {
          "id": "astronomy-401-l01-f3",
          "front": "Signal-to-noise ratio (SNR)",
          "back": "A measure of detection confidence comparing the true signal strength to the background noise level."
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-401-l01-a1",
          "type": "image",
          "title": "Survey Design Matrix",
          "content": "[Visual Prompt: A 3D grid showing 'Cadence' (time), 'Depth' (exposure), and 'Wavelength' (color filters) intersecting to highlight different astronomical targets like supernovae or exoplanets.] Decision matrix mapping cadence, depth, and wavelength choices to research objectives."
        }
      ]
    },
    {
      "id": "astronomy-401-l02",
      "title": "Signal Extraction and Statistical Inference Lab",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "astronomy-401-l02-c1",
          "kind": "concept",
          "title": "Detection Versus Interpretation",
          "content": "When we spot an anomaly in our telescope data, it doesn't automatically mean we know what caused it. It is crucial to distinguish between our confidence in *detecting* a signal (e.g., 'there is definitely a dip in this star's light') and our confidence in *interpreting* it (e.g., 'that dip is caused by an Earth-sized planet'). Rigorous astronomy requires us to report both levels of confidence independently, ensuring our discoveries are communicated transparently and honestly."
        },
        {
          "id": "astronomy-401-l02-c2",
          "kind": "practice",
          "title": "Model Comparison",
          "content": "To figure out which astrophysical model best explains our data, we use statistical inference. We look at 'likelihood' (how well a model predicts the observed data) and 'posterior estimates' (how probable the model is given our prior knowledge). Crucially, we also examine the 'residuals'—the leftover data after subtracting the model's predictions. If the residuals show a clear pattern instead of random static, it means our model is missing something important. This rigorous comparison helps us find the most credible explanation for cosmic phenomena."
        }
      ],
      "interactiveActivities": [
        {
          "id": "astronomy-401-l02-act1",
          "type": "matching_pairs",
          "title": "Error Source Match",
          "description": "Match observational issues to the strongest mitigation approach.",
          "pairs": [
            {
              "left": "Flat-field calibration drift",
              "right": "Frequent recalibration and reference frame checks"
            },
            {
              "left": "Cosmic ray artifacts",
              "right": "Frame stacking with outlier rejection"
            },
            {
              "left": "Background sky variation",
              "right": "Local background modeling"
            },
            {
              "left": "Instrument thermal noise",
              "right": "Exposure planning and detector cooling"
            }
          ]
        },
        {
          "id": "astronomy-401-l02-act2",
          "type": "scenario_practice",
          "title": "Inference Defense Drill",
          "description": "Defend a tentative signal claim to a skeptical review panel.",
          "instructions": [
            "State evidence supporting detection confidence.",
            "State one assumption that could invalidate the conclusion."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Why must systematic uncertainty be modeled separately from random noise?",
          "What result would make you reject your preferred astrophysical model?",
          "How do residual patterns reveal model mismatch?"
        ]
      },
      "learningAids": [
        {
          "id": "astronomy-401-l02-a1",
          "type": "practice",
          "title": "Inference Checklist",
          "content": "[Visual Prompt: A digital clipboard with checkboxes for Detection Threshold, Model Assumptions, Residual Diagnostics, and Confidence Reporting.] Template for ensuring rigorous statistical claims."
        }
      ]
    },
    {
      "id": "astronomy-401-l03",
      "title": "Checkpoint 1: Research Methods",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "astronomy-401-l03-q1",
          "text": "Which factor most directly affects whether short-lived transients are detected?",
          "skillId": "astronomy-401-skill-survey",
          "options": [
            {
              "id": "a",
              "text": "Catalog naming convention"
            },
            {
              "id": "b",
              "text": "Observation cadence"
            },
            {
              "id": "c",
              "text": "Telescope paint color"
            },
            {
              "id": "d",
              "text": "Coordinate system choice"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Transient detection probability is highly sensitive to revisit frequency (cadence)."
        },
        {
          "id": "astronomy-401-l03-q2",
          "text": "Why separate systematic from random uncertainty?",
          "skillId": "astronomy-401-skill-inference",
          "options": [
            {
              "id": "a",
              "text": "To make plots look simpler"
            },
            {
              "id": "b",
              "text": "Because they influence bias and variance differently"
            },
            {
              "id": "c",
              "text": "To reduce data volume only"
            },
            {
              "id": "d",
              "text": "There is no practical reason"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Systematic errors can bias conclusions even when random noise is low, requiring different mathematical treatments."
        },
        {
          "id": "astronomy-401-l03-q3",
          "text": "A model fits well but the residuals show a wavy structure. What is the best interpretation?",
          "skillId": "astronomy-401-skill-inference",
          "options": [
            {
              "id": "a",
              "text": "The model likely misses an important physical process"
            },
            {
              "id": "b",
              "text": "The model is definitively correct"
            },
            {
              "id": "c",
              "text": "Residuals are always random, so it can be ignored"
            },
            {
              "id": "d",
              "text": "The data should be discarded immediately"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Structured residuals often indicate under-modeled physics or uncorrected measurement artifacts."
        },
        {
          "id": "astronomy-401-l03-q4",
          "text": "The most defensible scientific claim includes:",
          "skillId": "astronomy-401-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "Only the best-fit value"
            },
            {
              "id": "b",
              "text": "An estimate, uncertainty bounds, and explicit assumptions"
            },
            {
              "id": "c",
              "text": "A strong conclusion without caveats"
            },
            {
              "id": "d",
              "text": "Only graphical output"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Transparent assumptions and uncertainty bounds are essential for credible, reproducible inference."
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-401-l03-a1",
          "type": "mnemonic",
          "title": "CUE",
          "content": "Claim, Uncertainty, Evidence. Always present these three together when reporting astronomical findings."
        }
      ]
    },
    {
      "id": "astronomy-401-l04",
      "title": "Exoplanets, Transients, and Multi-Messenger Astronomy",
      "type": "video",
      "duration": 13,
      "chunks": [
        {
          "id": "astronomy-401-l04-c1",
          "kind": "concept",
          "title": "Exoplanet Evidence Chains",
          "content": "To confirm the existence of exoplanets, astronomers analyze multiple signals. The 'transit method' measures the tiny dip in starlight when a planet crosses in front of its star, revealing its size. The 'radial-velocity method' detects the star's slight wobble caused by the planet's gravity, indicating its mass. A thorough interpretation must account for stellar activity (like sunspots), instrument drift, and potential false positives to ensure our conclusions are rock-solid."
        },
        {
          "id": "astronomy-401-l04-c2",
          "kind": "concept",
          "title": "Transient Event Classification",
          "content": "The universe is full of explosive, short-lived events called transients. These include supernovae (exploding stars), tidal disruption events (stars torn apart by black holes), and kilonovae (colliding neutron stars). Because these events fade quickly, astronomers must classify them rapidly to trigger follow-up observations. By analyzing the timing of the event and its spectrum across multiple wavelengths—from radio waves to X-rays—scientists can deduce the extreme physics driving the explosion."
        },
        {
          "id": "astronomy-401-l04-c3",
          "kind": "recap",
          "title": "Multi-Messenger Context",
          "content": "Modern astrophysics has entered the era of 'multi-messenger astronomy.' Instead of relying solely on light (electromagnetic radiation), we now gather information from entirely different cosmic messengers: gravitational waves (ripples in spacetime) and neutrinos (ghostly subatomic particles). By combining these distinct signals from a single event, like a neutron star merger, observatories worldwide can piece together a much more complete and profound picture of the universe's most violent phenomena."
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-401-l04-f1",
          "front": "Transit method",
          "back": "Detects periodic brightness dips when a planet passes in front of its host star, revealing the planet's radius."
        },
        {
          "id": "astronomy-401-l04-f2",
          "front": "Radial velocity",
          "back": "Infers planetary mass by measuring periodic Doppler shifts in stellar spectra caused by gravitational tugs."
        },
        {
          "id": "astronomy-401-l04-f3",
          "front": "Multi-messenger astronomy",
          "back": "The coordinated study of astrophysical events using light, gravitational waves, and particles like neutrinos."
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-401-l04-a1",
          "type": "image",
          "title": "Evidence Pipeline Diagram",
          "content": "[Visual Prompt: A flowchart showing a telescope detecting a light dip, moving to a spectrograph measuring a wobble, and ending with a confirmed 3D exoplanet model.] Workflow from candidate detection to follow-up confirmation."
        }
      ]
    },
    {
      "id": "astronomy-401-l05",
      "title": "Cosmological Parameter Estimation Lab",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "astronomy-401-l05-c1",
          "kind": "concept",
          "title": "From Data to Cosmology",
          "content": "Cosmological inference links observational data to the fundamental properties of the universe. By studying galaxy redshifts (how fast objects move away), distance indicators like supernovae, and the cosmic microwave background (the afterglow of the Big Bang), scientists can estimate critical parameters. These include the universe's expansion rate (the Hubble constant) and the exact balance of dark matter, dark energy, and ordinary matter."
        },
        {
          "id": "astronomy-401-l05-c2",
          "kind": "practice",
          "title": "Degeneracy and Tension",
          "content": "When analyzing different datasets, scientists sometimes find that they suggest conflicting values for the same parameter—a situation known as 'tension.' For example, measurements of the universe's expansion rate differ depending on whether we look at the early universe or the late universe. Experts must rigorously investigate whether this tension stems from hidden measurement biases, incomplete theoretical models, or exciting new physics waiting to be discovered."
        }
      ],
      "interactiveActivities": [
        {
          "id": "astronomy-401-l05-act1",
          "type": "sorting_buckets",
          "title": "Dataset Role Sort",
          "description": "Sort observational datasets by their strongest cosmological constraint role.",
          "buckets": [
            "Expansion History",
            "Structure Growth",
            "Early-Universe Conditions"
          ],
          "items": [
            {
              "text": "Type Ia supernova distance ladders",
              "bucket": "Expansion History"
            },
            {
              "text": "Galaxy clustering statistics",
              "bucket": "Structure Growth"
            },
            {
              "text": "Cosmic microwave background maps",
              "bucket": "Early-Universe Conditions"
            },
            {
              "text": "Baryon acoustic oscillation scales",
              "bucket": "Expansion History"
            }
          ]
        },
        {
          "id": "astronomy-401-l05-act2",
          "type": "scenario_practice",
          "title": "Parameter Tension Debate",
          "description": "Argue whether an observed dataset tension is methodological or physical.",
          "instructions": [
            "Present one methodological explanation (e.g., calibration error).",
            "Present one new-physics hypothesis with a testable prediction."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "What does parameter degeneracy mean in practice?",
          "How should researchers communicate tension without overstating conclusions?",
          "Which follow-up measurement would most reduce uncertainty in your model choice?"
        ]
      },
      "learningAids": [
        {
          "id": "astronomy-401-l05-a1",
          "type": "practice",
          "title": "Cosmology Analysis Sheet",
          "content": "[Visual Prompt: A digital worksheet displaying a bell curve graph with overlapping datasets, highlighting the 'tension' gap between them.] Template for parameter assumptions, dataset dependencies, and robustness checks."
        }
      ]
    },
    {
      "id": "astronomy-401-l06",
      "title": "Checkpoint 2: Frontier Inference",
      "type": "quiz",
      "duration": 11,
      "questions": [
        {
          "id": "astronomy-401-l06-q1",
          "text": "Why combine transit and radial-velocity observations for exoplanets?",
          "skillId": "astronomy-401-skill-exoplanets",
          "options": [
            {
              "id": "a",
              "text": "To reduce telescope scheduling conflicts"
            },
            {
              "id": "b",
              "text": "To constrain complementary planet properties (mass and radius)"
            },
            {
              "id": "c",
              "text": "To avoid uncertainty reporting"
            },
            {
              "id": "d",
              "text": "There is no scientific advantage"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Each method constrains different parameters (transit gives radius, radial velocity gives mass), allowing us to calculate the planet's density."
        },
        {
          "id": "astronomy-401-l06-q2",
          "text": "A persistent parameter tension across independent pipelines suggests:",
          "skillId": "astronomy-401-skill-cosmology",
          "options": [
            {
              "id": "a",
              "text": "Immediate proof of new physics"
            },
            {
              "id": "b",
              "text": "A need for deeper systematic checks and model stress-testing"
            },
            {
              "id": "c",
              "text": "The data can be ignored entirely"
            },
            {
              "id": "d",
              "text": "One dataset must be deleted"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Tension requires careful methodological and theoretical evaluation before making strong claims about new physics."
        },
        {
          "id": "astronomy-401-l06-q3",
          "text": "What is the most important feature of a research-grade result statement?",
          "skillId": "astronomy-401-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "Only using absolute confidence language"
            },
            {
              "id": "b",
              "text": "Including the estimate, uncertainty, assumptions, and limits"
            },
            {
              "id": "c",
              "text": "A single numerical claim without context"
            },
            {
              "id": "d",
              "text": "Avoiding any caveats to sound more authoritative"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Transparent scope and uncertainty make results reproducible, credible, and scientifically useful."
        },
        {
          "id": "astronomy-401-l06-q4",
          "text": "What is a core advantage of multi-messenger astronomy?",
          "skillId": "astronomy-401-skill-transients",
          "options": [
            {
              "id": "a",
              "text": "It eliminates instrument calibration needs"
            },
            {
              "id": "b",
              "text": "It provides complementary constraints from different physical channels"
            },
            {
              "id": "c",
              "text": "It replaces all optical telescopes"
            },
            {
              "id": "d",
              "text": "It guarantees immediate classification of all events"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Combining light, gravitational waves, and particles improves inference robustness and gives a complete physical picture."
        },
        {
          "id": "astronomy-401-l06-q5",
          "text": "What is the best practice when presenting potentially controversial cosmological findings?",
          "skillId": "astronomy-401-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "Emphasize certainty and omit limitations"
            },
            {
              "id": "b",
              "text": "Report assumptions, alternatives, and needed follow-up tests"
            },
            {
              "id": "c",
              "text": "Publish only if zero uncertainties remain"
            },
            {
              "id": "d",
              "text": "Ignore cross-check datasets that disagree"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Responsible scientific communication includes acknowledging limitations and proposing testable next steps."
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-401-l06-a1",
          "type": "mnemonic",
          "title": "STAR",
          "content": "Signal, Test, Assumptions, Robustness. A framework for evaluating frontier astronomical claims."
        }
      ]
    },
    {
      "id": "astronomy-401-l07",
      "title": "Capstone: Astronomy Research Proposal Studio",
      "type": "interactive",
      "duration": 19,
      "chunks": [
        {
          "id": "astronomy-401-l07-c1",
          "kind": "practice",
          "title": "Proposal Brief",
          "content": "In this capstone project, you will design a complete astronomical research proposal. Your proposal must include a clear, testable scientific question, a detailed observation plan, and a framework for statistical inference. You will also need to outline strategies for managing uncertainties and a communication plan for sharing your results, regardless of whether they confirm or reject your initial hypothesis."
        },
        {
          "id": "astronomy-401-l07-c2",
          "kind": "recap",
          "title": "Evaluation Criteria",
          "content": "Strong research proposals perfectly align their measurement strategies with the hypotheses they aim to test. When evaluating proposals, review panels look for clearly defined uncertainty controls, realistic analysis pathways, and logical follow-up observations. Meeting these criteria ensures your research is scientifically rigorous and capable of yielding meaningful discoveries."
        }
      ],
      "interactiveActivities": [
        {
          "id": "astronomy-401-l07-act1",
          "type": "matching_pairs",
          "title": "Proposal Component Match",
          "description": "Match the section of a research proposal to its core scientific purpose.",
          "pairs": [
            {
              "left": "Scientific Justification",
              "right": "Defines the hypothesis and its broader impact on the field"
            },
            {
              "left": "Technical Feasibility",
              "right": "Proves the chosen instruments can achieve the required Signal-to-Noise ratio"
            },
            {
              "left": "Uncertainty Budget",
              "right": "Identifies potential systematic errors and mitigation strategies"
            },
            {
              "left": "Data Analysis Plan",
              "right": "Outlines the statistical inference methods used to test the models"
            }
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "State your primary hypothesis and measurable prediction.",
          "List two dominant uncertainty sources and mitigation plans.",
          "Define what result would falsify your preferred model."
        ]
      },
      "learningAids": [
        {
          "id": "astronomy-401-l07-a1",
          "type": "practice",
          "title": "Proposal Template",
          "content": "[Visual Prompt: A glowing digital schematic of a research document, with sections for Hypothesis, Observation Plan, and Uncertainty Budget highlighted.] Template for question, method, uncertainty budget, analysis plan, and reporting framework."
        }
      ]
    }
  ]
};
