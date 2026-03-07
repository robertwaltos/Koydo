import type { LearningModule } from "@/lib/modules/types";

export const meteorology_201_Module: LearningModule = {
  "id": "meteorology-201",
  "title": "Meteorology II: From Analysis to Forecast",
  "description": "An intermediate course on synoptic analysis, interpreting numerical weather models, understanding severe weather dynamics, and communicating forecasts effectively.",
  "subject": "Meteorology",
  "tags": [
    "curriculum",
    "interactive",
    "weather",
    "forecasting"
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
  "thumbnail": "/thumbnails/meteorology-201.svg",
  "learningObjectives": [
    "Analyze synoptic-scale weather maps to identify fronts, pressure systems, and jet streams.",
    "Interpret output from numerical weather prediction (NWP) models to create a forecast.",
    "Explain the atmospheric ingredients and dynamics that lead to severe convective weather.",
    "Construct and communicate a clear, concise, and accurate weather forecast."
  ],
  "lessons": [
    {
      "id": "meteorology-201-l01",
      "title": "Reading the Skies: Synoptic-Scale Analysis",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "meteorology-201-l01-a1",
          "type": "image",
          "title": "Synoptic Chart Symbols",
          "content": "A downloadable PDF reference sheet for common weather map symbols, including fronts, pressure systems, and station plots."
        },
        {
          "id": "meteorology-201-l01-a2",
          "type": "animation",
          "title": "Jet Stream Dynamics",
          "content": "An animation illustrating how troughs and ridges in the jet stream steer surface weather systems and influence their development."
        }
      ]
    },
    {
      "id": "meteorology-201-l02",
      "title": "Practice: Charting a Cold Front",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Using the provided surface data, identify the 1000mb pressure minimum.",
          "Draw the position of the surface cold front based on temperature gradients and wind shifts.",
          "Explain how upper-level divergence, shown on the 500mb chart, is supporting the surface low's intensification."
        ]
      },
      "learningAids": [
        {
          "id": "meteorology-201-l02-a1",
          "type": "practice",
          "title": "Interactive Weather Map",
          "content": "A multi-layered map interface with real data. Users can toggle layers for pressure, temperature, wind, and geopotential height to perform their analysis."
        }
      ]
    },
    {
      "id": "meteorology-201-l03",
      "title": "Checkpoint: Synoptic Analysis",
      "type": "quiz",
      "duration": 8,
      "questions": [
        {
          "id": "meteorology-201-l03-q1",
          "text": "On a 500mb chart, closely packed geopotential height contours indicate what?",
          "skillId": "meteorology-201-skill-jetstream",
          "options": [
            {
              "id": "a",
              "text": "A region of strong winds (jet streak)"
            },
            {
              "id": "b",
              "text": "An area of calm, stable air"
            },
            {
              "id": "c",
              "text": "A surface high-pressure system"
            },
            {
              "id": "d",
              "text": "High atmospheric moisture content"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Just as with isobars on a surface chart, closely packed height contours on an upper-air chart signify a strong pressure gradient, which corresponds to high wind speeds."
        },
        {
          "id": "meteorology-201-l03-q2",
          "text": "Where is a mid-latitude cyclone most likely to intensify?",
          "skillId": "meteorology-201-skill-cyclogenesis",
          "options": [
            {
              "id": "a",
              "text": "Directly underneath an upper-level ridge"
            },
            {
              "id": "b",
              "text": "Downstream (to the east) of an upper-level trough"
            },
            {
              "id": "c",
              "text": "Upstream (to the west) of an upper-level trough"
            },
            {
              "id": "d",
              "text": "In a region with no upper-level support"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Divergence in the upper atmosphere, which promotes rising air and surface pressure falls, is strongest on the eastern side of a trough."
        }
      ]
    },
    {
      "id": "meteorology-201-l04",
      "title": "Decoding the Models: Intro to NWP",
      "type": "video",
      "duration": 10,
      "learningAids": [
        {
          "id": "meteorology-201-l04-a1",
          "type": "image",
          "title": "Model Output Statistics (MOS)",
          "content": "A visual guide explaining how to read a MOS table, which provides a statistically adjusted, site-specific forecast from a raw model."
        },
        {
          "id": "meteorology-201-l04-a2",
          "type": "animation",
          "title": "Ensemble Forecasting",
          "content": "An animation showing how running a model multiple times with slight variations (an ensemble) creates a 'spaghetti plot' to visualize forecast uncertainty."
        }
      ]
    },
    {
      "id": "meteorology-201-l05",
      "title": "Practice: Interpreting a Model Run",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Using the GFS model data, what is the forecasted 24-hour precipitation total for Denver?",
          "Assess the model's depiction of vorticity advection. Is it supporting cyclogenesis?",
          "Compare the GFS and ECMWF model solutions. What is the main difference in their forecasts for the storm system?"
        ]
      },
      "learningAids": [
        {
          "id": "meteorology-201-l05-a1",
          "type": "practice",
          "title": "Model Data Explorer",
          "content": "An interface to view and analyze different parameters (e.g., vorticity, CAPE, precipitable water) from a real numerical weather prediction model run."
        }
      ]
    },
    {
      "id": "meteorology-201-l06",
      "title": "Checkpoint: NWP Models",
      "type": "quiz",
      "duration": 8,
      "questions": [
        {
          "id": "meteorology-201-l06-q1",
          "text": "What does a 'spaghetti plot' from an ensemble forecast visually represent?",
          "skillId": "meteorology-201-skill-ensembles",
          "options": [
            {
              "id": "a",
              "text": "A single, definitive forecast"
            },
            {
              "id": "b",
              "text": "The historical accuracy of a model"
            },
            {
              "id": "c",
              "text": "Forecast uncertainty and the range of possible outcomes"
            },
            {
              "id": "d",
              "text": "The paths of past hurricanes"
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "meteorology-201-l06-q2",
          "text": "A primary limitation of all NWP models is their inability to perfectly resolve which of the following?",
          "skillId": "meteorology-201-skill-model-limits",
          "options": [
            {
              "id": "a",
              "text": "The rotation of the Earth"
            },
            {
              "id": "b",
              "text": "The location of continents"
            },
            {
              "id": "c",
              "text": "Small-scale features like individual thunderstorms"
            },
            {
              "id": "d",
              "text": "The daily cycle of sunrise and sunset"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Due to computational limits, models have a finite grid resolution and must approximate (parameterize) processes that occur on smaller scales, such as convection."
        }
      ]
    },
    {
      "id": "meteorology-201-l07",
      "title": "Anatomy of a Supercell",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "meteorology-201-l07-a1",
          "type": "image",
          "title": "Annotated Skew-T Log-P Diagram",
          "content": "A detailed look at a classic 'loaded gun' atmospheric sounding, highlighting key severe weather indices like CAPE, CIN, and vertical wind shear."
        },
        {
          "id": "meteorology-201-l07-a2",
          "type": "animation",
          "title": "Tornadogenesis",
          "content": "A 3D animated model showing how vertical wind shear creates horizontal rotation, which is then tilted into the vertical by a thunderstorm's updraft to form a mesocyclone."
        }
      ]
    },
    {
      "id": "meteorology-201-l08",
      "title": "Practice: Severe Weather Sounding",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "From the provided Skew-T diagram, estimate the Convective Available Potential Energy (CAPE).",
          "Identify the strength of the capping inversion (CIN). Is it strong enough to prevent initial storm formation?",
          "Based on the wind profile, what is the 0-6km bulk wind shear? What is the primary severe threat?"
        ]
      },
      "learningAids": [
        {
          "id": "meteorology-201-l08-a1",
          "type": "practice",
          "title": "Sounding Analysis Tool",
          "content": "An interactive Skew-T diagram where users can plot data, calculate indices, and analyze atmospheric stability for a severe weather scenario."
        }
      ]
    },
    {
      "id": "meteorology-201-l09",
      "title": "Checkpoint: Severe Weather Dynamics",
      "type": "quiz",
      "duration": 8,
      "questions": [
        {
          "id": "meteorology-201-l09-q1",
          "text": "Which combination of atmospheric ingredients is most favorable for the development of supercell thunderstorms?",
          "skillId": "meteorology-201-skill-supercells",
          "options": [
            {
              "id": "a",
              "text": "Low instability and weak vertical wind shear"
            },
            {
              "id": "b",
              "text": "High instability and strong vertical wind shear"
            },
            {
              "id": "c",
              "text": "High instability and weak vertical wind shear"
            },
            {
              "id": "d",
              "text": "Low instability and strong vertical wind shear"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High instability (CAPE) provides the fuel for strong updrafts, while strong vertical wind shear helps the updraft to rotate, which is the defining characteristic of a supercell."
        },
        {
          "id": "meteorology-201-l09-q2",
          "text": "On a Doppler radar reflectivity image, what does a 'hook echo' signature often signify?",
          "skillId": "meteorology-201-skill-radar",
          "options": [
            {
              "id": "a",
              "text": "The location of a developing mesocyclone and potential tornado"
            },
            {
              "id": "b",
              "text": "An area of light, steady rain"
            },
            {
              "id": "c",
              "text": "The melting layer in the atmosphere"
            },
            {
              "id": "d",
              "text": "Ground clutter interference near the radar site"
            }
          ],
          "correctOptionId": "a"
        }
      ]
    },
    {
      "id": "meteorology-201-l10",
      "title": "The Final Product: Communicating the Forecast",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "meteorology-201-l10-a1",
          "type": "image",
          "title": "The Forecast Funnel",
          "content": "A graphic illustrating the forecasting process, moving from the global scale (hemispheric patterns) down to the local scale (specific city forecast)."
        },
        {
          "id": "meteorology-201-l10-a2",
          "type": "video",
          "title": "Sample Weather Briefing",
          "content": "A short clip of a professional meteorologist delivering a clear, effective forecast that communicates key impacts and uncertainty without jargon."
        }
      ]
    },
    {
      "id": "meteorology-201-l11",
      "title": "Capstone Project: Your 24-Hour Forecast",
      "type": "project",
      "duration": 30,
      "metadata": {
        "prompts": [
          "Analyze the provided synoptic charts and model data for a developing winter storm.",
          "Write a 150-word forecast discussion for your assigned city, detailing timing, precipitation type, and expected accumulation.",
          "Record a 60-second video briefing summarizing the key weather impacts for the public."
        ]
      },
      "learningAids": [
        {
          "id": "meteorology-201-l11-a1",
          "type": "practice",
          "title": "Forecasting Dashboard",
          "content": "A consolidated view of all necessary maps, models, and data for the capstone project, allowing for efficient analysis and forecast creation."
        }
      ]
    },
    {
      "id": "meteorology-201-l12",
      "title": "Final Exam: Meteorology II",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "meteorology-201-l12-q1",
          "text": "Given a 500mb chart showing a deep trough over the plains and a Skew-T diagram with 3000 J/kg of CAPE, what is the most likely forecast?",
          "skillId": "meteorology-201-skill-synthesis",
          "options": [
            {
              "id": "a",
              "text": "A widespread severe weather outbreak with supercells"
            },
            {
              "id": "b",
              "text": "A calm, sunny day with light winds"
            },
            {
              "id": "c",
              "text": "A blizzard with heavy snow and strong winds"
            },
            {
              "id": "d",
              "text": "Widespread fog and drizzle"
            }
          ],
          "correctOptionId": "a",
          "explanation": "This scenario combines strong upper-level support (trough) for large-scale rising motion with significant instability (high CAPE), creating a classic setup for severe thunderstorms."
        },
        {
          "id": "meteorology-201-l12-q2",
          "text": "An NWP model shows a rapidly deepening cyclone, but the ensemble members are widely spread on its track. How should you communicate this?",
          "skillId": "meteorology-201-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "Pick one model run and present it as the definitive forecast."
            },
            {
              "id": "b",
              "text": "Ignore the storm until the models agree."
            },
            {
              "id": "c",
              "text": "Communicate the potential for a high-impact event while also explaining the uncertainty in the exact track and timing."
            },
            {
              "id": "d",
              "text": "Show the public all 51 raw ensemble member charts."
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "meteorology-201-l12-q3",
          "text": "What is the primary role of the jet stream in the development of mid-latitude cyclones?",
          "skillId": "meteorology-201-skill-cyclogenesis",
          "options": [
            {
              "id": "a",
              "text": "It provides the moisture needed for clouds and precipitation."
            },
            {
              "id": "b",
              "text": "It creates upper-level divergence that enhances surface-level convergence and lift."
            },
            {
              "id": "c",
              "text": "It blocks cold air from moving south."
            },
            {
              "id": "d",
              "text": "It directly causes surface winds to increase."
            }
          ],
          "correctOptionId": "b"
        }
      ]
    }
  ]
};
