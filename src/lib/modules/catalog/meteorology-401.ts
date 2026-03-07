import type { LearningModule } from "@/lib/modules/types";

export const meteorology_401_Module: LearningModule = {
  "id": "meteorology-401",
  "title": "Meteorology IV: Advanced Forecasting and Climate Synthesis",
  "description": "An advanced module on operational forecasting systems, the communication of forecast uncertainty, and the synthesis of climate data for risk assessment.",
  "subject": "Meteorology",
  "tags": [
    "curriculum",
    "interactive",
    "forecasting",
    "climate science"
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
  "thumbnail": "/placeholders/lesson-satellite.svg",
  "learningObjectives": [
    "Analyze numerical weather prediction (NWP) model outputs for operational forecasting.",
    "Quantify and communicate forecast uncertainty using probabilistic tools like ensemble prediction systems.",
    "Synthesize climate model data to assess and communicate long-term meteorological risks."
  ],
  "lessons": [
    {
      "id": "meteorology-401-l01",
      "title": "Numerical Weather Prediction (NWP) Systems",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "meteorology-401-l01-a1",
          "type": "image",
          "title": "NWP Model Flowchart",
          "content": "Diagram illustrating the data assimilation, model integration, and post-processing stages of an NWP system."
        },
        {
          "id": "meteorology-401-l01-a2",
          "type": "animation",
          "title": "Data Assimilation Cycle",
          "content": "Animation showing how observational data (satellite, radar, surface) is integrated into a model's initial state."
        }
      ]
    },
    {
      "id": "meteorology-401-l02",
      "title": "Interactive Lab: Synoptic Analysis",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Identify the key synoptic features on the provided 500 hPa chart.",
          "Based on the GFS and ECMWF model outputs, formulate a 24-hour forecast for the specified region.",
          "Justify your forecast, noting any significant model discrepancies."
        ]
      },
      "learningAids": [
        {
          "id": "meteorology-401-l02-a1",
          "type": "practice",
          "title": "Forecasting Challenge",
          "content": "Use the provided model data viewers to create and submit a forecast for a real-world weather scenario."
        }
      ]
    },
    {
      "id": "meteorology-401-l03",
      "title": "Checkpoint: Forecast Operations",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "meteorology-401-l03-q1",
          "text": "In NWP, what is the primary purpose of the data assimilation step?",
          "skillId": "meteorology-401-skill-nwp",
          "options": [
            {
              "id": "a",
              "text": "To initialize the model with the most accurate representation of the current atmosphere."
            },
            {
              "id": "b",
              "text": "To generate graphical outputs for forecasters."
            },
            {
              "id": "c",
              "text": "To calculate long-term climate projections."
            },
            {
              "id": "d",
              "text": "To verify the accuracy of a previous forecast."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "meteorology-401-l03-q2",
          "text": "What does a 'negatively tilted trough' on a 500 hPa chart often indicate?",
          "skillId": "meteorology-401-skill-synoptic",
          "options": [
            {
              "id": "a",
              "text": "A rapidly intensifying cyclonic system."
            },
            {
              "id": "b",
              "text": "A stable, high-pressure ridge."
            },
            {
              "id": "c",
              "text": "The formation of a sea breeze."
            },
            {
              "id": "d",
              "text": "A weakening weather front."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Negatively tilted troughs allow for strong divergence aloft, promoting surface cyclogenesis and severe weather potential."
        }
      ],
      "learningAids": []
    },
    {
      "id": "meteorology-401-l04",
      "title": "Communicating Uncertainty: Ensemble Forecasting",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "meteorology-401-l04-a1",
          "type": "image",
          "title": "Ensemble Plume Diagram",
          "content": "Example of a plume diagram for temperature at a specific location, showing the spread of possible outcomes."
        },
        {
          "id": "meteorology-401-l04-a2",
          "type": "animation",
          "title": "Generating Ensemble Members",
          "content": "Animation showing how small perturbations to initial conditions lead to a diverse range of forecast scenarios."
        }
      ]
    },
    {
      "id": "meteorology-401-l05",
      "title": "Interactive Lab: Reading Ensemble Products",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Analyze the provided spaghetti plot. What is the level of confidence in the track of the low-pressure system?",
          "Using the probability map, what is the chance of receiving more than 1 inch of rain in the target area?",
          "Formulate a public-facing weather statement that accurately communicates this uncertainty."
        ]
      },
      "learningAids": [
        {
          "id": "meteorology-401-l05-a1",
          "type": "practice",
          "title": "Uncertainty Communication Challenge",
          "content": "Interpret various Ensemble Prediction System (EPS) graphics to assess forecast confidence and risk."
        }
      ]
    },
    {
      "id": "meteorology-401-l06",
      "title": "Checkpoint: Forecast Uncertainty",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "meteorology-401-l06-q1",
          "text": "In an ensemble forecast, what does a large 'spread' among members signify?",
          "skillId": "meteorology-401-skill-ensemble",
          "options": [
            {
              "id": "a",
              "text": "High forecast uncertainty."
            },
            {
              "id": "b",
              "text": "High forecast confidence."
            },
            {
              "id": "c",
              "text": "An error in the control run."
            },
            {
              "id": "d",
              "text": "A consensus among models."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "meteorology-401-l06-q2",
          "text": "A 'spaghetti plot' is most useful for visualizing uncertainty in what forecast parameter?",
          "skillId": "meteorology-401-skill-probabilistic",
          "options": [
            {
              "id": "a",
              "text": "The track of features like hurricanes or pressure centers."
            },
            {
              "id": "b",
              "text": "The exact timing of precipitation onset."
            },
            {
              "id": "c",
              "text": "The maximum temperature at a single point."
            },
            {
              "id": "d",
              "text": "The probability of cloud cover."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Each line represents a potential track from an ensemble member, with the spread of lines indicating track uncertainty."
        }
      ],
      "learningAids": []
    },
    {
      "id": "meteorology-401-l07",
      "title": "Climate Models and Risk Synthesis",
      "type": "video",
      "duration": 18,
      "learningAids": [
        {
          "id": "meteorology-401-l07-a1",
          "type": "image",
          "title": "Climate Downscaling Methods",
          "content": "Comparison chart of statistical vs. dynamical downscaling for generating high-resolution climate projections."
        },
        {
          "id": "meteorology-401-l07-a2",
          "type": "animation",
          "title": "Shared Socioeconomic Pathways (SSPs)",
          "content": "Visualizing the different global emissions scenarios used as inputs for climate models."
        }
      ]
    },
    {
      "id": "meteorology-401-l08",
      "title": "Interactive Lab: Coastal Inundation Risk",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "Using the provided downscaled climate data, identify the projected increase in extreme precipitation events for Miami by 2050.",
          "Combine this with sea-level rise projections to assess the future risk of coastal inundation.",
          "Draft a summary for city planners outlining the key meteorological risks and potential adaptation strategies."
        ]
      },
      "learningAids": [
        {
          "id": "meteorology-401-l08-a1",
          "type": "practice",
          "title": "Climate Risk Assessment",
          "content": "Analyze climate model outputs to synthesize a risk report for a specific case study."
        }
      ]
    },
    {
      "id": "meteorology-401-l09",
      "title": "Final Checkpoint: Synthesis and Application",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "meteorology-401-l09-q1",
          "text": "What is the primary difference between a weather forecast model and a climate model?",
          "skillId": "meteorology-401-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "Weather models predict specific events (initial value problem), while climate models predict statistical trends (boundary value problem)."
            },
            {
              "id": "b",
              "text": "Climate models have higher spatial resolution than weather models."
            },
            {
              "id": "c",
              "text": "Weather models do not require data assimilation."
            },
            {
              "id": "d",
              "text": "Only climate models use ensemble techniques."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "meteorology-401-l09-q2",
          "text": "A city planner asks you to assess future wildfire risk. Which two elements are most crucial to synthesize?",
          "skillId": "meteorology-401-skill-synthesis",
          "options": [
            {
              "id": "a",
              "text": "Projected changes in summer temperatures/humidity and long-term drought frequency."
            },
            {
              "id": "b",
              "text": "Daily wind forecasts and ocean current data."
            },
            {
              "id": "c",
              "text": "Historical tornado paths and soil moisture."
            },
            {
              "id": "d",
              "text": "Upper-atmosphere jet stream patterns and volcanic activity."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Wildfire risk is primarily driven by long-term climate factors that create favorable conditions, such as heat, low humidity, and drought."
        }
      ],
      "learningAids": []
    }
  ]
};
