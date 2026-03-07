import type { LearningModule } from "@/lib/modules/types";

export const renewable_energy_systems_201_Module: LearningModule = {
  "id": "renewable-energy-systems-201",
  "title": "Renewable Energy Engineering",
  "description": "An intermediate course on designing and implementing renewable energy systems, focusing on solar PV system sizing, battery storage design, and grid-aware integration.",
  "subject": "Renewable Energy",
  "tags": [
    "engineering",
    "solar",
    "energy storage",
    "grid integration"
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
  "thumbnail": "/thumbnails/renewable-energy-system.svg",
  "learningObjectives": [
    "Calculate the required size of a solar PV array based on electrical load and geographic location.",
    "Design a battery storage system to meet specific energy autonomy requirements.",
    "Analyze the components and principles of grid-tied and hybrid renewable energy systems.",
    "Demonstrate system design skills through a final comprehensive checkpoint."
  ],
  "lessons": [
    {
      "id": "renewable-energy-systems-201-l01",
      "title": "Load Analysis & Solar Irradiance",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "renewable-energy-systems-201-l01-a1",
          "type": "image",
          "title": "Solar Irradiance Map",
          "content": "A world map showing average Peak Sun Hours (PSH) by region, crucial for system sizing."
        },
        {
          "id": "renewable-energy-systems-201-l01-a2",
          "type": "animation",
          "title": "Calculating Daily Load",
          "content": "An animated walkthrough of creating a load table (appliance wattage x hours of use) to find total daily kWh."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-201-l02",
      "title": "Practice: Sizing a PV Array",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Step 1: Calculate the total daily energy load for a sample household in kWh.",
          "Step 2: Using the provided irradiance map, determine the Peak Sun Hours for the location.",
          "Step 3: Calculate the required DC size of the solar PV array in kW, accounting for system losses."
        ]
      },
      "learningAids": [
        {
          "id": "renewable-energy-systems-201-l02-a1",
          "type": "practice",
          "title": "PV Sizing Calculator",
          "content": "An interactive tool to input load and location data to calculate the required array size."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-201-l03",
      "title": "Checkpoint 1: System Sizing",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "renewable-energy-systems-201-l03-q1",
          "text": "If a household's daily energy consumption is 20 kWh and the location receives 5 Peak Sun Hours, what is the minimum required size of the PV array before accounting for system losses?",
          "skillId": "renewable-energy-systems-201-skill-sizing",
          "options": [
            {
              "id": "a",
              "text": "2 kW"
            },
            {
              "id": "b",
              "text": "4 kW"
            },
            {
              "id": "c",
              "text": "5 kW"
            },
            {
              "id": "d",
              "text": "100 kW"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The required array size (kW) is the daily energy load (kWh) divided by the Peak Sun Hours (h). So, 20 kWh / 5 h = 4 kW."
        },
        {
          "id": "renewable-energy-systems-201-l03-q2",
          "text": "How does installing more energy-efficient appliances affect the required size of a new solar PV system?",
          "skillId": "renewable-energy-systems-201-skill-load-analysis",
          "options": [
            {
              "id": "a",
              "text": "It increases the required system size."
            },
            {
              "id": "b",
              "text": "It has no effect on the required system size."
            },
            {
              "id": "c",
              "text": "It decreases the required system size."
            },
            {
              "id": "d",
              "text": "It only affects the battery, not the panels."
            }
          ],
          "correctOptionId": "c",
          "explanation": "More efficient appliances lower the total energy load (kWh), which directly reduces the size of the PV array needed to meet that load."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-201-l04",
      "title": "Battery Technologies & Sizing",
      "type": "video",
      "duration": 11,
      "learningAids": [
        {
          "id": "renewable-energy-systems-201-l04-a1",
          "type": "image",
          "title": "Battery Chemistry Comparison",
          "content": "A chart comparing Lead-Acid, Li-ion, and Flow batteries on metrics like cycle life, efficiency, and Depth of Discharge (DoD)."
        },
        {
          "id": "renewable-energy-systems-201-l04-a2",
          "type": "animation",
          "title": "Depth of Discharge (DoD) Explained",
          "content": "An animation showing how a higher DoD allows more usable energy from the same size battery, but can affect lifespan."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-201-l05",
      "title": "Practice: Designing a Battery Bank",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Step 1: Determine the required storage capacity in kWh for 2 days of autonomy, based on a 15 kWh daily load.",
          "Step 2: Select a battery voltage (e.g., 48V) and calculate the required capacity in Amp-hours (Ah).",
          "Step 3: Adjust the total Ah capacity to account for a safe Depth of Discharge (e.g., 80% for Lithium)."
        ]
      },
      "learningAids": [
        {
          "id": "renewable-energy-systems-201-l05-a1",
          "type": "practice",
          "title": "Battery Bank Designer",
          "content": "An interactive tool to calculate required battery capacity based on load, autonomy days, and battery chemistry."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-201-l06",
      "title": "Checkpoint 2: Energy Storage",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "renewable-energy-systems-201-l06-q1",
          "text": "A 48V battery bank has a capacity of 200 Ah. What is its total energy storage capacity in kWh?",
          "skillId": "renewable-energy-systems-201-skill-storage-sizing",
          "options": [
            {
              "id": "a",
              "text": "4.17 kWh"
            },
            {
              "id": "b",
              "text": "9.6 kWh"
            },
            {
              "id": "c",
              "text": "200 kWh"
            },
            {
              "id": "d",
              "text": "48 kWh"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Energy (Wh) = Voltage (V) x Capacity (Ah). So, 48V * 200Ah = 9600 Wh, which is 9.6 kWh."
        },
        {
          "id": "renewable-energy-systems-201-l06-q2",
          "text": "Why is it generally not recommended to discharge a lead-acid battery below 50% Depth of Discharge (DoD)?",
          "skillId": "renewable-energy-systems-201-skill-battery-tech",
          "options": [
            {
              "id": "a",
              "text": "It can cause a fire."
            },
            {
              "id": "b",
              "text": "It significantly reduces the battery's lifespan (cycle life)."
            },
            {
              "id": "c",
              "text": "It makes the battery charge faster."
            },
            {
              "id": "d",
              "text": "It is impossible to discharge it further."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Deeply discharging lead-acid batteries causes sulfation and damages the plates, drastically shortening the number of charge/discharge cycles they can endure."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-201-l07",
      "title": "Grid-Tied Systems & Inverters",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "renewable-energy-systems-201-l07-a1",
          "type": "image",
          "title": "System Architecture Diagram",
          "content": "A clear diagram comparing Grid-Tied, Off-Grid, and Hybrid system components and power flow."
        },
        {
          "id": "renewable-energy-systems-201-l07-a2",
          "type": "animation",
          "title": "How Anti-Islanding Works",
          "content": "An animation showing how a grid-tied inverter detects a power outage and shuts down to protect utility workers."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-201-l08",
      "title": "Practice: System Component Matching",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Scenario: You have a 6 kW PV array and a 10 kWh battery bank.",
          "Step 1: Select a charge controller rated to handle the voltage and amperage from the PV array.",
          "Step 2: Select a hybrid inverter with a continuous power rating sufficient for the household's peak load.",
          "Step 3: Draw a simple block diagram connecting the PV array, charge controller, battery, inverter, and main electrical panel."
        ]
      },
      "learningAids": [
        {
          "id": "renewable-energy-systems-201-l08-a1",
          "type": "practice",
          "title": "Virtual System Designer",
          "content": "A drag-and-drop interface to connect system components and check for compatibility."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-201-l09",
      "title": "Final Checkpoint: System Design",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "renewable-energy-systems-201-l09-q1",
          "text": "In a hybrid solar system, what is the primary role of the inverter?",
          "skillId": "renewable-energy-systems-201-skill-integration",
          "options": [
            {
              "id": "a",
              "text": "To store DC energy from the sun."
            },
            {
              "id": "b",
              "text": "To convert DC power from panels/batteries to AC power for the home and grid."
            },
            {
              "id": "c",
              "text": "To generate DC power from sunlight."
            },
            {
              "id": "d",
              "text": "To prevent the battery from overcharging."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The inverter is the core component that converts Direct Current (DC) into Alternating Current (AC) that is usable by household appliances and compatible with the utility grid."
        },
        {
          "id": "renewable-energy-systems-201-l09-q2",
          "text": "A client wants a system that provides power during a grid outage. Which system type should you recommend?",
          "skillId": "renewable-energy-systems-201-skill-system-types",
          "options": [
            {
              "id": "a",
              "text": "A standard grid-tied system without storage."
            },
            {
              "id": "b",
              "text": "A hybrid system with battery storage."
            },
            {
              "id": "c",
              "text": "A system with only a charge controller."
            },
            {
              "id": "d",
              "text": "A system with microinverters only."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Only systems with battery storage (Off-Grid or Hybrid) can provide backup power. Standard grid-tied systems must shut down during an outage for safety."
        },
        {
          "id": "renewable-energy-systems-201-l09-q3",
          "text": "What is the purpose of a charge controller in a solar energy system?",
          "skillId": "renewable-energy-systems-201-skill-components",
          "options": [
            {
              "id": "a",
              "text": "To convert AC to DC for battery charging."
            },
            {
              "id": "b",
              "text": "To regulate the voltage and current from the solar panels to prevent battery overcharging."
            },
            {
              "id": "c",
              "text": "To increase the voltage of the solar panels."
            },
            {
              "id": "d",
              "text": "To communicate with the utility grid."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The charge controller acts as a gatekeeper, managing the flow of energy from the PV array into the battery bank to ensure safe and efficient charging without causing damage."
        }
      ]
    }
  ]
};
