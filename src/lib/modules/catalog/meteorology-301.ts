import type { LearningModule } from "@/lib/modules/types";

export const meteorology_301_Module: LearningModule = {
  "id": "meteorology-301",
  "title": "Meteorology III: Dynamics, Mesoscale, and Modeling",
  "description": "An advanced study of atmospheric dynamics, mesoscale convective systems, and the application of numerical weather prediction models for risk assessment and forecasting.",
  "subject": "Meteorology",
  "tags": [
    "curriculum",
    "interactive",
    "atmospheric science",
    "forecasting"
  ],
  "minAge": 17,
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
  "thumbnail": "/placeholders/weather-satellite.svg",
  "learningObjectives": [
    "Analyze atmospheric stability and dynamics using potential vorticity and quasi-geostrophic theory.",
    "Interpret radar and satellite imagery to identify and predict mesoscale severe weather phenomena.",
    "Evaluate ensemble forecast models to create probabilistic, risk-focused weather forecasts."
  ],
  "lessons": [
    {
      "id": "meteorology-301-l01",
      "title": "Atmospheric Dynamics: Potential Vorticity and QG Theory",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "meteorology-301-l01-a1",
          "type": "image",
          "title": "PV Anomaly Chart",
          "content": "Annotated 500mb chart showing a potential vorticity anomaly and its influence on the downstream flow."
        },
        {
          "id": "meteorology-301-l01-a2",
          "type": "animation",
          "title": "Rossby Wave Propagation",
          "content": "Animation of a Rossby wave propagating and amplifying, leading to cyclogenesis."
        }
      ]
    },
    {
      "id": "meteorology-301-l02",
      "title": "Practice: Analyzing Jet Streaks and Cyclogenesis",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Identify the left-exit and right-entrance regions of the jet streak on the provided 300mb chart.",
          "Using QG theory, predict the area of strongest upper-level divergence and surface pressure change.",
          "Justify your prediction by referencing differential cyclonic vorticity advection."
        ]
      },
      "learningAids": [
        {
          "id": "meteorology-301-l02-a1",
          "type": "practice",
          "title": "Interactive Weather Map",
          "content": "Analyze a weather map with overlay features for isotachs, geopotential height, and vorticity."
        }
      ]
    },
    {
      "id": "meteorology-301-l03",
      "title": "Checkpoint 1: Atmospheric Dynamics",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "meteorology-301-l03-q1",
          "text": "In the absence of diabatic heating or friction, what atmospheric property is conserved, making it a valuable tracer for air masses?",
          "skillId": "meteorology-301-skill-dynamics",
          "options": [
            {
              "id": "a",
              "text": "Potential Vorticity"
            },
            {
              "id": "b",
              "text": "Relative Humidity"
            },
            {
              "id": "c",
              "text": "Surface Pressure"
            },
            {
              "id": "d",
              "text": "Wind Speed"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Potential vorticity (PV) is conserved for an air parcel in adiabatic, frictionless flow, making it an excellent tracer for stratospheric air intrusions and dynamic systems."
        },
        {
          "id": "meteorology-301-l03-q2",
          "text": "According to quasi-geostrophic theory, where is large-scale rising motion (negative omega) typically found?",
          "skillId": "meteorology-301-skill-qg-theory",
          "options": [
            {
              "id": "a",
              "text": "In an area of strong positive vorticity advection."
            },
            {
              "id": "b",
              "text": "Directly under the core of a jet streak."
            },
            {
              "id": "c",
              "text": "In an area of strong negative vorticity advection."
            },
            {
              "id": "d",
              "text": "Where the geostrophic wind is parallel to the isobars."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The QG omega equation shows that rising motion is forced by increasing positive vorticity advection with height and warm air advection."
        }
      ]
    },
    {
      "id": "meteorology-301-l04",
      "title": "Mesoscale Interpretation: Supercells and MCSs",
      "type": "video",
      "duration": 18,
      "learningAids": [
        {
          "id": "meteorology-301-l04-a1",
          "type": "image",
          "title": "Doppler Radar Cross-Section",
          "content": "A labeled cross-section of a classic supercell showing the Bounded Weak Echo Region (BWER) and hook echo."
        },
        {
          "id": "meteorology-301-l04-a2",
          "type": "animation",
          "title": "Supercell Rotation",
          "content": "3D animated model illustrating how vertical wind shear is tilted into the vertical to create supercell rotation."
        }
      ]
    },
    {
      "id": "meteorology-301-l05",
      "title": "Practice: Severe Storm Interpretation",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Analyze the provided Doppler velocity scan. Is there evidence of a mesocyclone? Circle the feature.",
          "Examine the corresponding satellite loop. Identify features like the overshooting top and flanking line.",
          "Based on all available data, issue a mock severe thunderstorm or tornado warning, specifying the threat and location."
        ]
      },
      "learningAids": [
        {
          "id": "meteorology-301-l05-a1",
          "type": "practice",
          "title": "Simulated Data Viewer",
          "content": "Use a simulated radar and satellite data viewer for a historical severe weather event."
        }
      ]
    },
    {
      "id": "meteorology-301-l06",
      "title": "Checkpoint 2: Mesoscale Analysis",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "meteorology-301-l06-q1",
          "text": "On a Doppler radar reflectivity image, which feature is a classic indicator of a potential tornadic supercell?",
          "skillId": "meteorology-301-skill-radar",
          "options": [
            {
              "id": "a",
              "text": "A bow echo"
            },
            {
              "id": "b",
              "text": "A hook echo"
            },
            {
              "id": "c",
              "text": "A squall line"
            },
            {
              "id": "d",
              "text": "Stratiform precipitation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A hook echo is formed by precipitation wrapping around the rotating mesocyclone within a supercell, and it is a strong indicator of tornadic potential."
        },
        {
          "id": "meteorology-301-l06-q2",
          "text": "What is the primary environmental factor responsible for the development of rotating supercell thunderstorms instead of ordinary single-cell storms?",
          "skillId": "meteorology-301-skill-mesoscale",
          "options": [
            {
              "id": "a",
              "text": "High surface temperature"
            },
            {
              "id": "b",
              "text": "Low atmospheric pressure"
            },
            {
              "id": "c",
              "text": "Strong vertical wind shear"
            },
            {
              "id": "d",
              "text": "High relative humidity"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Strong vertical wind shear (a change in wind speed and/or direction with height) provides the source of horizontal rotation that is tilted into the vertical by a storm's updraft, leading to a mesocyclone."
        }
      ]
    },
    {
      "id": "meteorology-301-l07",
      "title": "Forecast Modeling: Ensembles and Probabilities",
      "type": "video",
      "duration": 16,
      "learningAids": [
        {
          "id": "meteorology-301-l07-a1",
          "type": "image",
          "title": "Spaghetti Plot",
          "content": "A spaghetti plot from the GEFS model showing forecast uncertainty for a hurricane track. Each 'spaghetti strand' is one ensemble member."
        },
        {
          "id": "meteorology-301-l07-a2",
          "type": "animation",
          "title": "Ensemble Perturbations",
          "content": "A visual explanation of how slight perturbations in initial conditions create a spread in ensemble forecast members over time."
        }
      ]
    },
    {
      "id": "meteorology-301-l08",
      "title": "Practice: Creating a Probabilistic Forecast",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Given the ensemble plume chart for 2-meter temperature, what is the probability of temperatures exceeding 35°C?",
          "Analyze the spaghetti plot for the 500mb height pattern. Describe the level of confidence in the forecast for a trough passage on day 5.",
          "Write a short forecast discussion for a client, communicating the most likely outcome and the associated uncertainties."
        ]
      },
      "learningAids": [
        {
          "id": "meteorology-301-l08-a1",
          "type": "practice",
          "title": "Ensemble Model Dashboard",
          "content": "Use an interactive dashboard with various ensemble model products like plumes, spaghetti plots, and mean/spread charts."
        }
      ]
    },
    {
      "id": "meteorology-301-l09",
      "title": "Checkpoint 3: Forecast Modeling",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "meteorology-301-l09-q1",
          "text": "What is the primary purpose of running an ensemble forecast system instead of a single, high-resolution deterministic model?",
          "skillId": "meteorology-301-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "To get a single, perfect forecast."
            },
            {
              "id": "b",
              "text": "To quantify the uncertainty in the forecast."
            },
            {
              "id": "c",
              "text": "To create a forecast that uses less computing power."
            },
            {
              "id": "d",
              "text": "To forecast weather for a smaller geographic area."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Ensemble forecasting addresses the atmosphere's chaotic nature by running many model variations to produce a range of possible outcomes, thereby quantifying the forecast's uncertainty."
        },
        {
          "id": "meteorology-301-l09-q2",
          "text": "On a spaghetti plot where the individual lines (ensemble members) are tightly clustered together, what can be inferred about the forecast?",
          "skillId": "meteorology-301-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "The forecast has high uncertainty and low confidence."
            },
            {
              "id": "b",
              "text": "The model has failed and should be ignored."
            },
            {
              "id": "c",
              "text": "The forecast has low uncertainty and high confidence."
            },
            {
              "id": "d",
              "text": "Severe weather is guaranteed to occur."
            }
          ],
          "correctOptionId": "c",
          "explanation": "A tight clustering of ensemble members indicates good agreement among the possible outcomes, leading to higher confidence in the forecast represented by the mean of the ensemble."
        }
      ]
    },
    {
      "id": "meteorology-301-l10",
      "title": "Final Assessment: Synoptic to Mesoscale Forecasting",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "meteorology-301-l10-q1",
          "text": "A strong, compact PV anomaly is forecast to move over a region with high CAPE and strong deep-layer shear. What is the most likely mesoscale outcome?",
          "skillId": "meteorology-301-skill-synthesis",
          "options": [
            {
              "id": "a",
              "text": "Widespread light drizzle and fog."
            },
            {
              "id": "b",
              "text": "A calm, clear day with no significant weather."
            },
            {
              "id": "c",
              "text": "An outbreak of severe thunderstorms, including supercells."
            },
            {
              "id": "d",
              "text": "A slow-moving area of stratiform rain."
            }
          ],
          "correctOptionId": "c",
          "explanation": "This scenario combines a strong dynamic trigger (PV anomaly) with a thermodynamically unstable and sheared environment, which are the classic ingredients for a severe weather outbreak."
        },
        {
          "id": "meteorology-301-l10-q2",
          "text": "When using an ensemble model to forecast the severe weather event from the previous question, which product would be most useful for assessing tornado risk?",
          "skillId": "meteorology-301-skill-synthesis",
          "options": [
            {
              "id": "a",
              "text": "Ensemble mean sea level pressure."
            },
            {
              "id": "b",
              "text": "A plume diagram of 2-meter temperature."
            },
            {
              "id": "c",
              "text": "Probabilistic maps of updraft helicity or significant tornado parameter."
            },
            {
              "id": "d",
              "text": "A spaghetti plot of the 1000mb geopotential height."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Parameters like updraft helicity (a measure of storm rotation) are directly related to tornadic potential. Probabilistic maps of these parameters from an ensemble provide the best guidance for assessing risk."
        }
      ]
    }
  ]
};
