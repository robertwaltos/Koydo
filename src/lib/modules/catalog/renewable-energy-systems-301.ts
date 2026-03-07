import type { LearningModule } from "@/lib/modules/types";

export const renewable_energy_systems_301_Module: LearningModule = {
  "id": "renewable-energy-systems-301",
  "title": "Renewable Energy Optimization",
  "description": "Explore advanced techniques for optimizing renewable energy portfolios, including forecasting, grid integration with energy storage, and reliability planning using real-world data models.",
  "subject": "Renewable Energy",
  "tags": [
    "curriculum",
    "interactive",
    "energy systems",
    "optimization",
    "data science"
  ],
  "minAge": 16,
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
  "thumbnail": "/images/modules/renewable-energy-optimization.svg",
  "learningObjectives": [
    "Analyze the trade-offs in a renewable energy portfolio using metrics like LCOE and carbon intensity.",
    "Apply time-series forecasting models to predict solar and wind energy generation.",
    "Evaluate the role of energy storage and control systems in maintaining grid stability.",
    "Develop strategies for enhancing power grid reliability and resilience against disruptions."
  ],
  "lessons": [
    {
      "id": "renewable-energy-systems-301-l01",
      "title": "Portfolio Optimization Fundamentals",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "renewable-energy-systems-301-l01-a1",
          "type": "image",
          "title": "Concept Card: LCOE",
          "content": "A visual breakdown of the Levelized Cost of Energy (LCOE) formula, comparing solar, wind, and battery storage.",
          "visualPrompt": "/visuals/lcoe-formula-comparison.png"
        },
        {
          "id": "renewable-energy-systems-301-l01-a2",
          "type": "animation",
          "title": "Animated Example: Portfolio Synergy",
          "content": "Animation showing how combining intermittent solar (daytime peak) and wind (nighttime peak) creates a more stable, reliable energy supply.",
          "visualPrompt": "/animations/solar-wind-synergy.gif"
        }
      ]
    },
    {
      "id": "renewable-energy-systems-301-l02",
      "title": "Practice: Modeling an Optimal Energy Mix",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Define the objective function for your portfolio (e.g., minimize cost, minimize carbon, or a hybrid).",
          "Adjust the mix of solar, wind, and battery storage to meet a variable demand curve.",
          "Justify your final portfolio mix based on the simulation's cost and reliability scores."
        ],
        "simulation": "energy-portfolio-balancer"
      },
      "learningAids": [
        {
          "id": "renewable-energy-systems-301-l02-a1",
          "type": "practice",
          "title": "Guided Simulation",
          "content": "Use the interactive tool to balance a regional energy portfolio, observing real-time changes in cost, emissions, and grid stability.",
          "visualPrompt": "/simulations/portfolio-balancer-dashboard.png"
        }
      ]
    },
    {
      "id": "renewable-energy-systems-301-l03",
      "title": "Checkpoint: Portfolio Optimization",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "renewable-energy-systems-301-l03-q1",
          "text": "What is the primary benefit of diversifying a renewable energy portfolio with both solar and wind assets?",
          "skillId": "renewable-energy-systems-301-skill-portfolio",
          "options": [
            {
              "id": "a",
              "text": "It mitigates intermittency due to their often complementary generation profiles."
            },
            {
              "id": "b",
              "text": "It significantly reduces the capital cost of individual power plants."
            },
            {
              "id": "c",
              "text": "It eliminates the need for energy storage systems entirely."
            },
            {
              "id": "d",
              "text": "It guarantees a fixed energy output 24/7."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Solar generates during the day and wind can generate at night, smoothing the overall power output and reducing reliance on any single weather-dependent source."
        },
        {
          "id": "renewable-energy-systems-301-l03-q2",
          "text": "When calculating the Levelized Cost of Energy (LCOE), which factor is NOT directly included in the standard formula?",
          "skillId": "renewable-energy-systems-301-skill-lcoe",
          "options": [
            {
              "id": "a",
              "text": "Initial capital investment"
            },
            {
              "id": "b",
              "text": "Annual operations and maintenance costs"
            },
            {
              "id": "c",
              "text": "The social cost of carbon emissions"
            },
            {
              "id": "d",
              "text": "Total energy production over the system's lifetime"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Standard LCOE focuses on the direct economic costs to build and operate a plant. Externalities like the social cost of carbon are typically considered in separate policy or portfolio analyses."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-301-l04",
      "title": "Forecasting for Variable Renewables",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "renewable-energy-systems-301-l04-a1",
          "type": "image",
          "title": "Concept Card: Forecasting Models",
          "content": "A comparison of physical, statistical (e.g., ARIMA), and machine learning (e.g., LSTM) models for solar and wind forecasting.",
          "visualPrompt": "/visuals/forecasting-model-comparison.png"
        },
        {
          "id": "renewable-energy-systems-301-l04-a2",
          "type": "animation",
          "title": "Animated Example: Neural Network Forecast",
          "content": "An animation showing how weather data (wind speed, cloud cover, temperature) is processed through a neural network to generate a power output forecast.",
          "visualPrompt": "/animations/neural-network-weather.gif"
        }
      ]
    },
    {
      "id": "renewable-energy-systems-301-l05",
      "title": "Practice: Building a Wind Power Forecast",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Analyze the provided wind speed time-series data to identify patterns like seasonality and daily cycles.",
          "Apply a simple exponential smoothing model to predict wind power output for the next 24 hours.",
          "Evaluate your forecast's accuracy by calculating the Mean Absolute Error (MAE) against the actual output."
        ],
        "dataset": "hourly-wind-generation.csv"
      },
      "learningAids": [
        {
          "id": "renewable-energy-systems-301-l05-a1",
          "type": "practice",
          "title": "Guided Data Analysis",
          "content": "Work within a data notebook to clean, visualize, and model a real-world wind generation dataset.",
          "visualPrompt": "/simulations/data-notebook-forecasting.png"
        }
      ]
    },
    {
      "id": "renewable-energy-systems-301-l06",
      "title": "Checkpoint: Energy Forecasting",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "renewable-energy-systems-301-l06-q1",
          "text": "What is a primary challenge in forecasting solar power generation?",
          "skillId": "renewable-energy-systems-301-skill-forecasting",
          "options": [
            {
              "id": "a",
              "text": "Predicting the exact timing and impact of cloud cover."
            },
            {
              "id": "b",
              "text": "The sun's position is unknown and must be calculated."
            },
            {
              "id": "c",
              "text": "Solar panel degradation is highly unpredictable day-to-day."
            },
            {
              "id": "d",
              "text": "Fuel price volatility for the sun."
            }
          ],
          "correctOptionId": "a",
          "explanation": "While the sun's path is predictable, localized, fast-moving cloud cover introduces significant, short-term variability that is difficult to model accurately."
        },
        {
          "id": "renewable-energy-systems-301-l06-q2",
          "text": "A forecast with a low Mean Absolute Error (MAE) indicates what?",
          "skillId": "renewable-energy-systems-301-skill-evaluation",
          "options": [
            {
              "id": "a",
              "text": "The model is overly complex."
            },
            {
              "id": "b",
              "text": "The forecast predictions are, on average, close to the actual values."
            },
            {
              "id": "c",
              "text": "The model consistently overestimates the power output."
            },
            {
              "id": "d",
              "text": "The forecast has a high degree of bias."
            }
          ],
          "correctOptionId": "b",
          "explanation": "MAE measures the average magnitude of the errors in a set of predictions, without considering their direction. A lower MAE signifies a more accurate forecast."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-301-l07",
      "title": "Grid Integration and Control Systems",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "renewable-energy-systems-301-l07-a1",
          "type": "image",
          "title": "Concept Card: Grid Inertia",
          "content": "An infographic comparing a high-inertia grid (large, spinning generators) to a low-inertia grid (inverter-based renewables) and its effect on frequency stability.",
          "visualPrompt": "/visuals/grid-inertia-comparison.png"
        },
        {
          "id": "renewable-energy-systems-301-l07-a2",
          "type": "animation",
          "title": "Animated Example: BESS Frequency Regulation",
          "content": "Animation of a grid frequency graph. When a power plant trips offline, frequency drops; a Battery Energy Storage System (BESS) instantly injects power to restore it.",
          "visualPrompt": "/animations/bess-frequency-response.gif"
        }
      ]
    },
    {
      "id": "renewable-energy-systems-301-l08",
      "title": "Practice: Simulating Grid Frequency Control",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Observe the grid frequency deviation following a sudden 500 MW loss of solar generation due to cloud cover.",
          "Deploy the battery energy storage system (BESS) to inject power and arrest the frequency drop.",
          "Explain how this action qualifies as an 'ancillary service' and why it's critical for grid reliability."
        ],
        "simulation": "grid-frequency-stabilizer"
      },
      "learningAids": [
        {
          "id": "renewable-energy-systems-301-l08-a1",
          "type": "practice",
          "title": "Guided Simulation",
          "content": "Act as a grid operator in a simulation. Your goal is to use a BESS to maintain grid frequency within the safe operational range (e.g., 49.5-50.5 Hz) during a disturbance.",
          "visualPrompt": "/simulations/grid-frequency-dashboard.png"
        }
      ]
    },
    {
      "id": "renewable-energy-systems-301-l09",
      "title": "Checkpoint: Grid Integration",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "renewable-energy-systems-301-l09-q1",
          "text": "What is 'curtailment' in the context of renewable energy?",
          "skillId": "renewable-energy-systems-301-skill-grid-management",
          "options": [
            {
              "id": "a",
              "text": "Intentionally reducing the output of a generator below its maximum potential."
            },
            {
              "id": "b",
              "text": "Increasing the voltage on the transmission line to push more power."
            },
            {
              "id": "c",
              "text": "The process of forecasting energy demand for the next day."
            },
            {
              "id": "d",
              "text": "Building new transmission lines to connect remote renewable farms."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Curtailment is done when generation exceeds demand or grid capacity, to prevent overloading the system. It represents wasted energy and is a key challenge to solve."
        },
        {
          "id": "renewable-energy-systems-301-l09-q2",
          "text": "How do inverter-based resources like solar and wind differ from traditional synchronous generators regarding grid inertia?",
          "skillId": "renewable-energy-systems-301-skill-grid-inertia",
          "options": [
            {
              "id": "a",
              "text": "They have no physical rotating mass and thus provide no natural inertia."
            },
            {
              "id": "b",
              "text": "They provide significantly more inertia than coal or gas plants."
            },
            {
              "id": "c",
              "text": "Their inertia is variable and depends on the time of day."
            },
            {
              "id": "d",
              "text": "They are identical in their contribution to grid inertia."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Traditional generators have large, spinning turbines that resist changes in frequency. Inverters are power electronics and lack this physical property, though they can be programmed to simulate an inertial response ('synthetic inertia')."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-301-l10",
      "title": "Capstone Project: Designing a Resilient Microgrid",
      "type": "interactive",
      "duration": 45,
      "metadata": {
        "prompts": [
          "Develop a renewable portfolio for an isolated island community using its solar and wind resource data.",
          "Integrate a forecasting model to create an optimal charging/discharging schedule for your battery system.",
          "Test your microgrid's resilience against a simulated 3-day hurricane event and report its performance (e.g., hours of outage)."
        ],
        "simulation": "microgrid-designer-pro"
      },
      "learningAids": [
        {
          "id": "renewable-energy-systems-301-l10-a1",
          "type": "practice",
          "title": "Capstone Simulation",
          "content": "This project integrates all learned concepts. Design, forecast, and manage a complete microgrid to ensure it remains operational during a severe weather event.",
          "visualPrompt": "/simulations/microgrid-design-interface.png"
        }
      ]
    }
  ]
};
