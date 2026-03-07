import type { LearningModule } from "@/lib/modules/types";

export const geography_501_Module: LearningModule = {
  "id": "geography-501",
  "title": "Applied Geospatial Systems Analysis",
  "description": "An advanced specialization in applied geography focusing on the analysis of complex environmental and urban systems. This module uses advanced casework, simulation, and policy defense exercises to build skills in geospatial diagnostics, operational planning, impact analysis, and ethical governance.",
  "subject": "Geography",
  "tags": [
    "geospatial",
    "gis",
    "urban planning",
    "environmental management",
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
    "Analyze complex socio-environmental systems using spatial modeling techniques.",
    "Design robust geospatial data collection and analysis workflows for real-world problems.",
    "Evaluate the potential impacts, tradeoffs, and ethical implications of proposed geographical interventions.",
    "Develop and defend evidence-based policy recommendations derived from geospatial analysis.",
    "Lead cross-functional reviews of geographic projects, clearly communicating assumptions, methods, and uncertainty.",
    "Operationalize principles of ethical governance in the management of geospatial data and projects."
  ],
  "lessons": [
    {
      "id": "geography-501-l01",
      "title": "Foundations of Geospatial Systems",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "geography-501-l01-a1",
          "type": "image",
          "title": "System Mapping",
          "content": "Define a system by its boundaries, components, and interactions. Make assumptions explicit and use measurable data.",
          "visualPrompt": "A diagram showing a watershed system, with inputs (precipitation), components (rivers, groundwater, forests), and outputs (river flow, evaporation)."
        }
      ],
      "chunks": [
        {
          "id": "geography-501-l01-c1",
          "kind": "concept",
          "title": "Defining Complex Geospatial Systems",
          "content": "To analyze a geographic phenomenon, we must first define it as a system with clear boundaries. In this lesson, we'll learn how to define systems like a watershed, a transportation network, or a regional food supply chain. This allows us to identify key components and the flows between them, forming the basis for rigorous analysis.",
          "visualPrompt": "An animated map showing the nested boundaries of a city, its metropolitan area, and the larger bioregion it inhabits."
        },
        {
          "id": "geography-501-l01-c2",
          "kind": "concept",
          "title": "Modeling System Dynamics and Uncertainty",
          "content": "Geographic systems are dynamic, with complex feedback loops and inherent uncertainty. We will explore methods for modeling these dynamics, such as spatial autocorrelation and feedback analysis. Acknowledging and quantifying uncertainty in our data and models is crucial for making honest and reliable recommendations.",
          "visualPrompt": "A causal loop diagram illustrating the urban heat island effect, showing reinforcing loops between pavement, heat absorption, and air conditioner use."
        },
        {
          "id": "geography-501-l01-c3",
          "kind": "recap",
          "title": "Establishing Baselines and Metrics",
          "content": "To measure change, we need a starting point. This recap emphasizes the importance of establishing a clear baseline using geospatial data, such as a pre-intervention land-use map. We will also define key performance indicators (KPIs) to track the system's behavior over time, ensuring our analysis is grounded in measurable evidence.",
          "visualPrompt": "A side-by-side comparison of two satellite images of a coastline, one from 1990 (baseline) and one from 2020, with areas of erosion highlighted."
        }
      ],
      "flashcards": [
        {
          "id": "geography-501-l01-f1",
          "front": "Geospatial System",
          "back": "A network of interconnected geographic features and processes with defined boundaries, such as a watershed or urban area."
        },
        {
          "id": "geography-501-l01-f2",
          "front": "Spatial Autocorrelation",
          "back": "A measure of the degree to which near and distant objects are related. The principle that 'everything is related to everything else, but near things are more related than distant things.'"
        },
        {
          "id": "geography-501-l01-f3",
          "front": "Baseline Data",
          "back": "A set of measurements collected before an intervention or project begins, used as a reference point for evaluating impact."
        }
      ]
    },
    {
      "id": "geography-501-l02",
      "title": "Geospatial Analysis Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "geography-501-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Design a logical workflow from data acquisition to final analysis, including checkpoints for quality control.",
          "visualPrompt": "A flowchart template for a GIS project, with boxes for 'Data Collection', 'Data Cleaning', 'Analysis', and 'Visualization'."
        }
      ],
      "chunks": [
        {
          "id": "geography-501-l02-c1",
          "kind": "practice",
          "title": "Designing an Analysis Workflow",
          "content": "In this interactive lab, you will design a complete geospatial analysis workflow for a specific problem. You'll select appropriate data sources, outline processing steps, and choose analytical methods. We will also simulate common challenges, like incomplete data, to test the resilience of your workflow design.",
          "visualPrompt": "An interactive diagram where users drag and drop procedural blocks (e.g., 'Buffer', 'Overlay', 'Reclassify') to build a workflow for a site selection problem."
        },
        {
          "id": "geography-501-l02-c2",
          "kind": "recap",
          "title": "Quality Assurance in Geospatial Analysis",
          "content": "A reliable analysis depends on strong quality control. We'll recap how to build checkpoints into your workflow. This includes criteria for data validation, steps for model calibration, and protocols for peer review to ensure your results are accurate, repeatable, and defensible.",
          "visualPrompt": "A checklist graphic showing key quality assurance steps: Data Provenance Check, Metadata Review, Sensitivity Analysis, Peer Review."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geography-501-l02-act1",
          "type": "matching_pairs",
          "title": "Matching Methods to Problems",
          "description": "Match the geographic question with the most appropriate geospatial analysis method.",
          "pairs": [
            {
              "left": "Find all suitable locations for a new hospital.",
              "right": "Multi-Criteria Suitability Analysis"
            },
            {
              "left": "Identify clusters of high-crime incidents.",
              "right": "Hot Spot Analysis"
            },
            {
              "left": "Determine the most efficient route for a delivery truck.",
              "right": "Network Analysis"
            },
            {
              "left": "Estimate how a new highway will affect forest cover.",
              "right": "Land-Use Change Modeling"
            }
          ]
        }
      ]
    },
    {
      "id": "geography-501-l03",
      "title": "Checkpoint 1: Methods and System Definition",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "geography-501-l03-a1",
          "type": "practice",
          "title": "Knowledge Check",
          "content": "Review the core concepts of system definition and analytical workflows before proceeding.",
          "visualPrompt": "A concept map connecting 'Geospatial System' to 'Boundaries', 'Components', 'Metrics', and 'Workflows'."
        }
      ],
      "questions": [
        {
          "id": "geography-501-l03-q1",
          "text": "When defining a watershed as a geospatial system for analysis, what is the most critical first step?",
          "skillId": "geography-501-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Immediately start collecting rainfall data."
            },
            {
              "id": "b",
              "text": "Delineate the watershed boundary using a digital elevation model."
            },
            {
              "id": "c",
              "text": "Choose the color scheme for the final map."
            },
            {
              "id": "d",
              "text": "Assume the boundary is the same as the county line."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defining the system's boundary is the foundational step before any analysis can be performed accurately."
        },
        {
          "id": "geography-501-l03-q2",
          "text": "A robust geospatial workflow should include checkpoints to:",
          "skillId": "geography-501-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Validate data quality, verify model assumptions, and peer-review results."
            },
            {
              "id": "b",
              "text": "Ensure the project is completed as quickly as possible."
            },
            {
              "id": "c",
              "text": "Prevent anyone from questioning the final conclusion."
            },
            {
              "id": "d",
              "text": "Make the process more complicated and difficult to follow."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Checkpoints are for ensuring quality and reliability through validation, verification, and review."
        },
        {
          "id": "geography-501-l03-q3",
          "text": "What does it mean to account for uncertainty in a geospatial model?",
          "skillId": "geography-501-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Claiming the model's predictions are 100% certain."
            },
            {
              "id": "b",
              "text": "Identifying and reporting the model's margin of error and potential data gaps."
            },
            {
              "id": "c",
              "text": "Ignoring any data that doesn't fit the expected outcome."
            },
            {
              "id": "d",
              "text": "Using the oldest available data to ensure consistency."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis requires acknowledging and quantifying sources of uncertainty, such as measurement error or model limitations."
        },
        {
          "id": "geography-501-l03-q4",
          "text": "Mature data governance for a geospatial project connects:",
          "skillId": "geography-501-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Data collection standards, clear metadata, and defined access rights."
            },
            {
              "id": "b",
              "text": "The project goal with the team's favorite software."
            },
            {
              "id": "c",
              "text": "Having a lot of data, regardless of its quality or relevance."
            },
            {
              "id": "d",
              "text": "Keeping the data source and methods a secret."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Good governance ensures data quality, usability, and security through standards, documentation (metadata), and access controls."
        }
      ]
    },
    {
      "id": "geography-501-l04",
      "title": "Case Study: The Aral Sea Restoration",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "geography-501-l04-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Analyze the case by identifying stakeholders, evaluating tradeoffs, and structuring an evidence-based recommendation.",
          "visualPrompt": "A timeline showing key events in the Aral Sea's history, with corresponding satellite images showing the shoreline receding and partially returning."
        }
      ],
      "chunks": [
        {
          "id": "geography-501-l04-c1",
          "kind": "concept",
          "title": "Analyzing the System",
          "content": "We will examine the Aral Sea ecological disaster as a complex socio-environmental system. The case highlights competing constraints: the economic need for cotton irrigation versus the ecological and social costs of a shrinking sea. We will analyze the causes and cascading effects of this large-scale geographic change.",
          "visualPrompt": "A map of the Amu Darya and Syr Darya river basins, showing the vast network of irrigation canals diverting water from the rivers before they reach the Aral Sea."
        },
        {
          "id": "geography-501-l04-c2",
          "kind": "practice",
          "title": "Evaluating Tradeoffs",
          "content": "Using data from the case, you will compare the different interventions and their outcomes. This involves weighing economic benefits (agriculture) against ecological restoration (fisheries, climate moderation) and public health impacts (dust storms). This practice hones your ability to analyze complex, multi-dimensional tradeoffs.",
          "visualPrompt": "A spider chart comparing two scenarios ('Continued Irrigation' vs. 'River Restoration') across multiple dimensions like 'Agricultural Output', 'Water Salinity', 'Air Quality', and 'Local Employment'."
        },
        {
          "id": "geography-501-l04-c3",
          "kind": "recap",
          "title": "Synthesizing a Policy Brief",
          "content": "A strong analysis concludes with a clear recommendation. We'll recap how to structure a policy brief based on your case analysis. Every recommendation must be supported by evidence, acknowledge risks and uncertainties, and propose a plan for monitoring the expected outcomes.",
          "visualPrompt": "A template of a one-page policy brief with sections for 'Executive Summary', 'Background', 'Analysis of Options', 'Recommendation', and 'Monitoring Plan'."
        }
      ]
    },
    {
      "id": "geography-501-l05",
      "title": "Urban Growth Simulation Lab",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "geography-501-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the simulation to test policy interventions. Observe the outcomes, identify unintended consequences, and adapt your strategy.",
          "visualPrompt": "The user interface of the urban growth simulator, showing control sliders for 'Zoning Density', 'Transit Funding', and 'Greenbelt Protection'."
        }
      ],
      "chunks": [
        {
          "id": "geography-501-l05-c1",
          "kind": "practice",
          "title": "Simulating Urban Sprawl",
          "content": "In this interactive simulation, you are in charge of planning for a growing city. You will adjust policy controls like zoning laws, transportation investment, and environmental protections. Your goal is to balance competing metrics like economic growth, housing affordability, traffic congestion, and preservation of green space.",
          "visualPrompt": "An animated map showing a simulated city expanding over 50 years. One version shows sprawling, low-density growth; another shows compact, transit-oriented development."
        },
        {
          "id": "geography-501-l05-c2",
          "kind": "recap",
          "title": "Developing Adaptive Policies",
          "content": "Simulations teach us that the best policies are often adaptive. This recap focuses on how to use simulation results to design policies that can be monitored and adjusted over time. We will discuss the importance of setting trigger points for policy review based on real-world data, ensuring governance is responsive and effective.",
          "visualPrompt": "A flowchart illustrating an adaptive policy cycle: 'Implement Policy' -> 'Monitor KPIs' -> 'Compare to Thresholds' -> 'Review & Adjust Policy'."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geography-501-l05-act1",
          "type": "scenario",
          "title": "Crisis Scenario: Urban Flood Response",
          "description": "A '100-year flood' strikes your simulated city. Use geospatial tools to analyze vulnerable areas, allocate emergency resources, and manage the response under pressure."
        }
      ]
    },
    {
      "id": "geography-501-l06",
      "title": "Checkpoint 2: Case Analysis and Simulation",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "geography-501-l06-a1",
          "type": "practice",
          "title": "Knowledge Check",
          "content": "Assess your ability to analyze complex cases and interpret simulation results.",
          "visualPrompt": "A split-screen image showing the Aral Sea case study on one side and the urban simulation map on the other."
        }
      ],
      "questions": [
        {
          "id": "geography-501-l06-q1",
          "text": "In the Aral Sea case, the primary tradeoff was between:",
          "skillId": "geography-501-skill-case1",
          "options": [
            {
              "id": "a",
              "text": "Short-term agricultural economy and long-term ecological stability."
            },
            {
              "id": "b",
              "text": "Building more cities versus preserving farmland."
            },
            {
              "id": "c",
              "text": "International tourism and local fishing rights."
            },
            {
              "id": "d",
              "text": "Hydroelectric power and nuclear power."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The core conflict was diverting river water for cotton farming, which collapsed the sea's ecosystem and the economy that depended on it."
        },
        {
          "id": "geography-501-l06-q2",
          "text": "A resilient urban growth strategy developed from the simulation would likely include:",
          "skillId": "geography-501-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "A mix of development policies with clear metrics and a plan for future adjustments."
            },
            {
              "id": "b",
              "text": "A single, irreversible plan to build highways everywhere."
            },
            {
              "id": "c",
              "text": "Ignoring population growth projections."
            },
            {
              "id": "d",
              "text": "Focusing only on building luxury housing."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Resilience comes from adaptive strategies that balance multiple goals and can be modified based on monitored outcomes."
        },
        {
          "id": "geography-501-l06-q3",
          "text": "When evaluating the impact of a large-scale project like a dam, what is the most rigorous approach?",
          "skillId": "geography-501-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "Only counting the number of jobs created."
            },
            {
              "id": "b",
              "text": "Comparing pre-project baselines with post-project outcomes across social, economic, and environmental metrics."
            },
            {
              "id": "c",
              "text": "Relying solely on anecdotal stories from residents."
            },
            {
              "id": "d",
              "text": "Changing the success criteria after the project is complete to ensure it looks good."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation is comprehensive, comparative, and based on pre-defined metrics and baseline data."
        },
        {
          "id": "geography-501-l06-q4",
          "text": "In the urban flood simulation, effective governance means:",
          "skillId": "geography-501-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "Having pre-established emergency plans that use spatial data to prioritize response efforts."
            },
            {
              "id": "b",
              "text": "Waiting for the crisis to be over before making any decisions."
            },
            {
              "id": "c",
              "text": "Sending all resources to the wealthiest neighborhoods first."
            },
            {
              "id": "d",
              "text": "Ignoring flood plain maps when making zoning decisions."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Effective governance in a crisis relies on data-driven plans that allow for rapid and prioritized action."
        }
      ]
    },
    {
      "id": "geography-501-l07",
      "title": "Geospatial Ethics and Governance",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "geography-501-l07-a1",
          "type": "image",
          "title": "Ethical Framework",
          "content": "Balance project goals with principles of justice, privacy, and public accountability.",
          "visualPrompt": "A Venn diagram showing the overlap between 'Project Viability', 'Environmental Sustainability', and 'Social Equity'."
        }
      ],
      "chunks": [
        {
          "id": "geography-501-l07-c1",
          "kind": "concept",
          "title": "Analyzing Environmental Justice",
          "content": "Geospatial tools can reveal, but also perpetuate, inequality. We will learn how to use GIS to analyze environmental justice: the fair treatment of all people regardless of race or income with respect to environmental laws. This includes mapping the distribution of environmental hazards (like pollution) and amenities (like parks).",
          "visualPrompt": "A map of a city showing industrial zones overlaid with demographic data, highlighting the disproportionate proximity of low-income communities to sources of pollution."
        },
        {
          "id": "geography-501-l07-c2",
          "kind": "concept",
          "title": "Data Privacy and Public Participation",
          "content": "Geospatial data, especially location data from individuals, carries significant privacy risks. We will discuss the ethical responsibilities of geographers to protect sensitive data. We'll also explore Public Participation GIS (PPGIS), a method for empowering communities to contribute their own local knowledge to planning processes.",
          "visualPrompt": "An illustration of a community workshop where residents are adding information to a large printed map, representing the PPGIS process."
        },
        {
          "id": "geography-501-l07-c3",
          "kind": "recap",
          "title": "Framework for Ethical Geospatial Practice",
          "content": "This recap provides a practical checklist for ethical practice. It connects key principles—like data transparency, stakeholder consent, and equitable impact—to the project lifecycle. This framework helps ensure that our work is not only technically sound but also socially responsible and accountable.",
          "visualPrompt": "A checklist graphic with items like 'Have we assessed for biased data?', 'Is personal data anonymized?', 'Have affected communities been consulted?'"
        }
      ],
      "flashcards": [
        {
          "id": "geography-501-l07-f1",
          "front": "Environmental Justice",
          "back": "The principle that all people are entitled to equal environmental protection, regardless of race, color, or national origin."
        },
        {
          "id": "geography-501-l07-f2",
          "front": "Data Provenance",
          "back": "An auditable record of the origin of a piece of data and the transformations it has undergone."
        },
        {
          "id": "geography-501-l07-f3",
          "front": "PPGIS",
          "back": "Public Participation Geographic Information Systems: an approach that empowers communities to use GIS technology to represent their own spatial knowledge."
        }
      ]
    },
    {
      "id": "geography-501-l08",
      "title": "Capstone Project: Policy Proposal and Defense",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "geography-501-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Construct a complete, evidence-based proposal. Anticipate critiques and prepare a clear, concise defense of your methods and conclusions.",
          "visualPrompt": "A sample capstone project poster, showing a title, map, charts, key findings, and policy recommendations."
        }
      ],
      "chunks": [
        {
          "id": "geography-501-l08-c1",
          "kind": "practice",
          "title": "Building Your Policy Proposal",
          "content": "In this final lab, you will synthesize all your skills into a capstone project. Using a provided real-world dataset, you will conduct a full geospatial analysis to address a specific problem, such as proposing a new public transit route or identifying priority areas for urban tree planting. You will produce a professional policy brief and supporting maps.",
          "visualPrompt": "A screen showing a GIS interface with multiple data layers (e.g., population density, existing bus routes, income levels) for the capstone project."
        },
        {
          "id": "geography-501-l08-c2",
          "kind": "recap",
          "title": "Defending Your Analysis",
          "content": "The final step is to defend your work. This recap prepares you for the defense simulation. We will review how to respond to critical questions about your methodology, data limitations, stakeholder impacts, and ethical considerations. The goal is to communicate your findings confidently and transparently.",
          "visualPrompt": "A short video clip of a student confidently answering a tough question from a panel during a presentation."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geography-501-l08-act1",
          "type": "debate_simulator",
          "title": "Live Capstone Defense Simulation",
          "description": "Present your capstone policy proposal and defend your recommendations under cross-examination from a simulated expert panel."
        }
      ]
    }
  ]
};
