import type { LearningModule } from "@/lib/modules/types";

export const Astronomy401Module: LearningModule = {
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
  "version": "2.0.0",
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
          "content": "To explore the wonders of astronomy effectively, we need to start by linking our scientific questions to signals that we can actually measure. This connection is vital for gathering meaningful data. The way we design our surveys is incredibly important in this journey. We have to make several key decisions: first, how often we will take measurements, which is known as cadence. Next, we consider exposure time, which is how long we allow our instruments to collect light from celestial objects. Additionally, we choose filters that allow us to capture different wavelengths of light, helping us see various features of the universe. Finally, we decide how much of the sky we will cover in our observations. All these choices influence what astronomical phenomena we can discover and what might remain hidden from our view. By carefully planning our observational strategies, we can unlock the secrets of the cosmos and gain a deeper understanding of the universe around us."
        },
        {
          "id": "astronomy-401-l01-c2",
          "kind": "concept",
          "title": "Uncertainty Budgets",
          "content": "In astronomy, it is important to understand the different types of uncertainties that can affect our observations. Researchers categorize these uncertainties into two main types: random and systematic. Random uncertainties can arise from factors like detector noise or variations in the atmosphere, while systematic uncertainties might come from calibration drift or assumptions made in our models. By creating explicit uncertainty budgets, scientists can better defend their conclusions and ensure that their findings are reliable.\nContext recap: In astronomy, it is important to understand the different types of uncertainties that can affect our observations. Researchers categorize these uncertainties into two main types: random and systematic. Random uncertainties can arise from factors like detector noise or variations in the atmosphere, while systematic uncertainties might come from calibration drift or assumptions made in our models. By creating explicit uncertainty budgets, scientists can better defend their conclusions and ensure that their findings are reliable."
        },
        {
          "id": "astronomy-401-l01-c3",
          "kind": "recap",
          "title": "Design Trade-offs",
          "content": "When astronomers design surveys to study the universe, they often have to make important choices about how to approach their work. One option is a deep narrow survey, which focuses on a small area of the sky. This allows scientists to gather a lot of detailed information about that specific region. On the other hand, a shallow wide survey covers a much larger area but provides less detailed information. Each type of survey is useful for answering different scientific questions. Experts in the field explain their choices based on what they expect to discover, how easy it will be to conduct follow-up observations, and the value of learning from negative results, which can also provide important insights into our understanding of the universe."
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
          "back": "Bias-like error source that can shift measurements consistently if not corrected."
        },
        {
          "id": "astronomy-401-l01-f3",
          "front": "Signal-to-noise ratio",
          "back": "A measure of detection confidence comparing true signal strength to noise level."
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-401-l01-a1",
          "type": "image",
          "title": "Survey Design Matrix",
          "content": "Decision matrix mapping cadence, depth, and wavelength choices to research objectives."
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
          "content": "In the field of astronomy, when we spot a feature in our observations, it doesn't necessarily mean we fully grasp what that feature signifies. It's important to make a clear distinction between how sure we are about detecting something and how sure we are about the explanation or model we use to interpret it. Good practices in astronomy require us to report both levels of confidence. This way, we can share our discoveries in a way that is clear and honest, helping others understand the significance of our findings."
        },
        {
          "id": "astronomy-401-l02-c2",
          "kind": "practice",
          "title": "Model Comparison",
          "content": "When scientists study the universe and try to understand how it works, they often have different ideas, or models, about what might be happening. To figure out which model is the best, they compare them by looking at several important factors. One of these factors is called likelihood, which helps them see how well each model explains the data they have collected. They also look at something called posterior estimates, which gives them a better idea of how likely each model is to be correct based on the evidence they have. Additionally, scientists check the residuals, which are the differences between the data and what the model predicts. The goal is to find the model that not only fits the data well but also stands strong against uncertainties and assumptions. This careful process of comparison is crucial because it allows scientists to make informed decisions about which explanations of astronomical phenomena are the most credible and likely to be true."
        }
      ],
      "interactiveActivities": [
        {
          "id": "astronomy-401-l02-act1",
          "type": "matching_pairs",
          "title": "Error Source Match",
          "description": "Match observational issues to strongest mitigation approach.",
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
              "right": "Exposure planning and detector correction"
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
          "content": "Template for detection threshold, model assumptions, residual diagnostics, and confidence reporting."
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
          "explanation": "Transient detection probability is highly sensitive to revisit frequency."
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
              "text": "No practical reason"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Systematic errors can bias conclusions even when random noise is low."
        },
        {
          "id": "astronomy-401-l03-q3",
          "text": "A model fits well but residuals show structure. Best interpretation?",
          "skillId": "astronomy-401-skill-inference",
          "options": [
            {
              "id": "a",
              "text": "Model likely misses important process"
            },
            {
              "id": "b",
              "text": "Model is definitively correct"
            },
            {
              "id": "c",
              "text": "Residuals are always random"
            },
            {
              "id": "d",
              "text": "Data should be discarded immediately"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Structured residuals often indicate under-modeled physics or measurement artifacts."
        },
        {
          "id": "astronomy-401-l03-q4",
          "text": "Most defensible scientific claim includes:",
          "skillId": "astronomy-401-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "Only the best-fit value"
            },
            {
              "id": "b",
              "text": "Estimate, uncertainty bounds, and assumptions"
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
          "explanation": "Transparent assumptions and uncertainty are essential for credible inference."
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-401-l03-a1",
          "type": "mnemonic",
          "title": "CUE",
          "content": "Claim, Uncertainty, Evidence."
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
          "content": "To gather evidence for the existence of exoplanets, astronomers look at various signals such as transit depth, periodicity, and radial-velocity signals. These signals help us estimate important characteristics of the planets, including their size, how long it takes them to orbit their stars, and their minimum mass. A thorough interpretation of this data must take into account factors like stellar activity, any drift in our instruments, and the possibility of false positives, ensuring that our conclusions are well-supported.\nContext recap: To gather evidence for the existence of exoplanets, astronomers look at various signals such as transit depth, periodicity, and radial-velocity signals. These signals help us estimate important characteristics of the planets, including their size, how long it takes them to orbit their stars, and their minimum mass. A thorough interpretation of this data must take into account factors like stellar activity, any drift in our instruments, and the possibility of false positives, ensuring that our conclusions are well-supported."
        },
        {
          "id": "astronomy-401-l04-c2",
          "kind": "concept",
          "title": "Transient Event Classification",
          "content": "Astronomers are fascinated by different types of transient events in the universe. Some of these include supernovae, which are massive explosions of stars, tidal disruption events where stars are torn apart by black holes, gamma-ray bursts that release enormous amounts of energy, and kilonova candidates that occur when two neutron stars collide. To learn more about these exciting phenomena, scientists need to quickly classify them. This means they must identify what type of event it is and decide which ones to study further. The timing of these events is very important, as is the information gathered from observing them in various types of light, like visible light, infrared, and radio waves. This multi-wavelength approach helps astronomers make accurate classifications and understand the significance of these cosmic occurrences better."
        },
        {
          "id": "astronomy-401-l04-c3",
          "kind": "recap",
          "title": "Multi-Messenger Context",
          "content": "In today's world of astronomy, scientists use a special method called the multi-messenger approach. This means they gather information from various sources, like light waves (which we see as electromagnetic signals), gravitational waves (ripples in space caused by massive objects), and neutrinos (tiny particles that come from the sun and other cosmic events). By combining these different types of information, astronomers can better locate where events in space are happening and understand what they mean. This teamwork between different observatories—places that watch the sky—is really important for making new discoveries and learning more about the universe. It helps us piece together the puzzle of how our cosmos works, making it an exciting time to be involved in astronomy!"
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-401-l04-f1",
          "front": "Transit method",
          "back": "Detects periodic brightness dips when a planet passes in front of its host star."
        },
        {
          "id": "astronomy-401-l04-f2",
          "front": "Radial velocity",
          "back": "Infers planetary influence by measuring periodic Doppler shifts in stellar spectra."
        },
        {
          "id": "astronomy-401-l04-f3",
          "front": "Multi-messenger astronomy",
          "back": "Study of astrophysical events using multiple signal channels beyond light alone."
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-401-l04-a1",
          "type": "image",
          "title": "Evidence Pipeline Diagram",
          "content": "Workflow from candidate detection to follow-up confirmation in exoplanet/transient science."
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
          "content": "Cosmological inference is the process of linking various observations to understand the universe better. This includes studying redshift, which tells us how fast objects are moving away from us, distance indicators that help us measure how far away things are, the large-scale structure of the universe, and background radiation. By analyzing these observations, scientists can estimate important parameters such as the rate of expansion of the universe and the composition of matter and energy within it.\nContext recap: Cosmological inference is the process of linking various observations to understand the universe better. This includes studying redshift, which tells us how fast objects are moving away from us, distance indicators that help us measure how far away things are, the large-scale structure of the universe, and background radiation. By analyzing these observations, scientists can estimate important parameters such as the rate of expansion of the universe and the composition of matter and energy within it."
        },
        {
          "id": "astronomy-401-l05-c2",
          "kind": "practice",
          "title": "Degeneracy and Tension",
          "content": "When scientists analyze different datasets, they may find that each dataset suggests different ranges for certain parameters. This situation is known as tension. Experts investigate whether this tension is due to biases in measurement, incomplete models, or simply natural variations that can be expected statistically. Understanding these factors is crucial for making accurate interpretations of the data.\nContext recap: When scientists analyze different datasets, they may find that each dataset suggests different ranges for certain parameters. This situation is known as tension. Experts investigate whether this tension is due to biases in measurement, incomplete models, or simply natural variations that can be expected statistically. Understanding these factors is crucial for making accurate interpretations of the data."
        }
      ],
      "interactiveActivities": [
        {
          "id": "astronomy-401-l05-act1",
          "type": "sorting_buckets",
          "title": "Dataset Role Sort",
          "description": "Sort observational datasets by strongest cosmological constraint role.",
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
            "Present one methodological explanation.",
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
          "content": "Template for parameter assumptions, dataset dependencies, and robustness checks."
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
              "text": "To reduce telescope scheduling"
            },
            {
              "id": "b",
              "text": "To constrain complementary planet properties"
            },
            {
              "id": "c",
              "text": "To avoid uncertainty reporting"
            },
            {
              "id": "d",
              "text": "No scientific advantage"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Each method constrains different parameters and strengthens interpretation together."
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
              "text": "Need for deeper systematic checks and model stress-testing"
            },
            {
              "id": "c",
              "text": "Data can be ignored"
            },
            {
              "id": "d",
              "text": "One dataset must be deleted"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Tension requires careful methodological and theoretical evaluation before strong claims."
        },
        {
          "id": "astronomy-401-l06-q3",
          "text": "Most important feature of a research-grade result statement?",
          "skillId": "astronomy-401-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "Only confidence language"
            },
            {
              "id": "b",
              "text": "Estimate, uncertainty, assumptions, and limits"
            },
            {
              "id": "c",
              "text": "Single numerical claim without context"
            },
            {
              "id": "d",
              "text": "Avoid any caveats"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Transparent scope and uncertainty make results reproducible and credible."
        },
        {
          "id": "astronomy-401-l06-q4",
          "text": "What is a core advantage of multi-messenger astronomy?",
          "skillId": "astronomy-401-skill-transients",
          "options": [
            {
              "id": "a",
              "text": "Eliminates instrument calibration needs"
            },
            {
              "id": "b",
              "text": "Provides complementary constraints from different physical channels"
            },
            {
              "id": "c",
              "text": "Replaces all optical telescopes"
            },
            {
              "id": "d",
              "text": "Guarantees immediate classification"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Multiple channels improve inference robustness and source interpretation."
        },
        {
          "id": "astronomy-401-l06-q5",
          "text": "Best practice when presenting potentially controversial cosmological findings?",
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
              "text": "Publish only if no uncertainties remain"
            },
            {
              "id": "d",
              "text": "Ignore cross-check datasets"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Responsible communication includes limitations and testable next steps."
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-401-l06-a1",
          "type": "mnemonic",
          "title": "STAR",
          "content": "Signal, Test, Assumptions, Robustness."
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
          "content": "In this capstone project, you will create a complete research proposal. This proposal should include a clear scientific question that you want to explore, a detailed observation plan outlining how you will gather data, a framework for making inferences based on your findings, strategies for managing risks, and a communication plan for sharing your results, whether they confirm your hypothesis or not.\nContext recap: In this capstone project, you will create a complete research proposal. This proposal should include a clear scientific question that you want to explore, a detailed observation plan outlining how you will gather data, a framework for making inferences based on your findings, strategies for managing risks, and a communication plan for sharing your results, whether they confirm your hypothesis or not."
        },
        {
          "id": "astronomy-401-l07-c2",
          "kind": "recap",
          "title": "Evaluation Criteria",
          "content": "When evaluating research proposals, strong submissions will align the design of their measurements with the hypothesis they are testing. They should clearly define how they will control for uncertainties and present realistic pathways for analysis and follow-up observations. These criteria help ensure that the research is well thought out and has a good chance of success.\nContext recap: When evaluating research proposals, strong submissions will align the design of their measurements with the hypothesis they are testing. They should clearly define how they will control for uncertainties and present realistic pathways for analysis and follow-up observations. These criteria help ensure that the research is well thought out and has a good chance of success."
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
          "content": "Template for question, method, uncertainty budget, analysis plan, and reporting framework."
        }
      ]
    }
  ]
};
