import type { LearningModule } from "@/lib/modules/types";

export const civil_engineering_301_Module: LearningModule = {
  "id": "civil-engineering-301",
  "title": "Civil Engineering III",
  "description": "Advanced civil engineering focusing on structural systems, resilience design, and infrastructure optimization.",
  "subject": "Civil Engineering",
  "tags": [
    "curriculum",
    "interactive",
    "advanced",
    "structural-engineering",
    "resilience"
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
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Analyze and design advanced structural systems for dynamic loads.",
    "Apply resilience engineering principles to mitigate environmental and seismic risks.",
    "Optimize urban infrastructure using lifecycle analysis and smart technologies."
  ],
  "lessons": [
    {
      "id": "civil-engineering-301-l01",
      "title": "Advanced Structural Systems",
      "type": "video",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A highly detailed, photorealistic image of a modern skyscraper under construction, showing exposed steel framework and advanced load-bearing trusses against a clear blue sky.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic 3D animation showing the distribution of dynamic loads across a high-rise building's structural grid, highlighting stress points in glowing red and tension in blue.",
      "learningAids": [
        {
          "id": "civil-engineering-301-l01-a1",
          "type": "image",
          "title": "Load Path Diagram",
          "content": "Visual summary showing how gravity and lateral loads travel through structural members to the foundation."
        },
        {
          "id": "civil-engineering-301-l01-a2",
          "type": "animation",
          "title": "Dynamic Loading",
          "content": "Step-by-step walkthrough of wind and seismic forces acting on a high-rise structure."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-301-l01.png"
    },
    {
      "id": "civil-engineering-301-l02",
      "title": "Designing for Dynamic Loads",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A top-down blueprint view of a suspension bridge with interactive nodes glowing in neon green, indicating structural integrity.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A time-lapse simulation of a bridge undergoing wind tunnel testing, with visible airflow vectors interacting with the bridge deck.",
      "metadata": {
        "prompts": [
          "Identify the primary load path for the given structure.",
          "Calculate the maximum shear force at the base.",
          "Propose a structural reinforcement to mitigate lateral drift."
        ]
      },
      "learningAids": [
        {
          "id": "civil-engineering-301-l02-a1",
          "type": "practice",
          "title": "Structural Analysis Practice",
          "content": "Follow the challenge flow to map load paths and calculate stress distributions."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-301-l02.png"
    },
    {
      "id": "civil-engineering-301-l03",
      "title": "Checkpoint 1: Structural Systems",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A sleek, modern digital tablet displaying a 3D structural analysis model of a stadium roof, resting on a wooden drafting table.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A slow pan over a series of architectural blueprints that transition into a 3D wireframe model, ending on a glowing question mark.",
      "questions": [
        {
          "id": "civil-engineering-301-l03-q1",
          "text": "What is the primary function of a tuned mass damper in a high-rise building?",
          "skillId": "civil-engineering-301-skill-structures",
          "options": [
            {
              "id": "a",
              "text": "To reduce the amplitude of mechanical vibrations and sway caused by wind or seismic activity."
            },
            {
              "id": "b",
              "text": "To increase the overall static load-bearing capacity of the foundation."
            },
            {
              "id": "c",
              "text": "To provide thermal insulation against extreme weather conditions."
            },
            {
              "id": "d",
              "text": "To generate renewable energy from the building's movement."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Tuned mass dampers are harmonic absorbers used to stabilize against violent motion caused by harmonic vibration, significantly reducing sway."
        },
        {
          "id": "civil-engineering-301-l03-q2",
          "text": "In structural engineering, what does a 'shear wall' primarily resist?",
          "skillId": "civil-engineering-301-skill-structures",
          "options": [
            {
              "id": "a",
              "text": "Vertical gravity loads from the roof."
            },
            {
              "id": "b",
              "text": "Lateral loads such as wind and earthquakes."
            },
            {
              "id": "c",
              "text": "Thermal expansion of the building materials."
            },
            {
              "id": "d",
              "text": "Soil settlement beneath the foundation."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Shear walls are vertical elements designed to resist in-plane lateral forces, typically wind and seismic loads."
        },
        {
          "id": "civil-engineering-301-l03-q3",
          "text": "Which of the following best describes a 'load path'?",
          "skillId": "civil-engineering-301-skill-structures",
          "options": [
            {
              "id": "a",
              "text": "The route taken by construction vehicles on a site."
            },
            {
              "id": "b",
              "text": "The direction in which each consecutive load passes through connected members to the foundation."
            },
            {
              "id": "c",
              "text": "The timeline of weight distribution during the construction phase."
            },
            {
              "id": "d",
              "text": "The mathematical formula used to calculate dead loads."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A load path is the continuous system of structural elements that transfers applied forces down to the foundation and into the ground."
        }
      ],
      "learningAids": [
        {
          "id": "civil-engineering-301-l03-a1",
          "type": "mnemonic",
          "title": "Load Path Memory Cue",
          "content": "Remember: Roof to Beams, Beams to Columns, Columns to Foundation, Foundation to Earth."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-301-l03.png"
    },
    {
      "id": "civil-engineering-301-l04",
      "title": "Resilience Design in Civil Engineering",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A photorealistic image of a coastal city featuring advanced flood barriers and green infrastructure seamlessly integrated into the urban landscape.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animated sequence showing a city surviving a severe seismic event, highlighting base isolators and tuned mass dampers in action.",
      "learningAids": [
        {
          "id": "civil-engineering-301-l04-a1",
          "type": "image",
          "title": "Resilience Framework",
          "content": "Visual summary of the 4 R's of resilience: Robustness, Redundancy, Resourcefulness, and Rapidity."
        },
        {
          "id": "civil-engineering-301-l04-a2",
          "type": "animation",
          "title": "Base Isolation",
          "content": "Animation demonstrating how base isolators decouple a building from ground motion."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-301-l04.png"
    },
    {
      "id": "civil-engineering-301-l05",
      "title": "Simulating Seismic and Flood Events",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A split-screen digital interface showing a building with and without base isolation during an earthquake simulation.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic simulation of rising floodwaters being redirected by an automated storm surge barrier system.",
      "metadata": {
        "prompts": [
          "Select the appropriate mitigation strategy for the given hazard.",
          "Calculate the required height for the storm surge barrier.",
          "Evaluate the redundancy of the proposed structural system."
        ]
      },
      "learningAids": [
        {
          "id": "civil-engineering-301-l05-a1",
          "type": "practice",
          "title": "Hazard Mitigation Practice",
          "content": "Apply resilience strategies to protect urban infrastructure from simulated extreme events."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-301-l05.png"
    },
    {
      "id": "civil-engineering-301-l06",
      "title": "Checkpoint 2: Resilience Design",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A close-up of a civil engineer's hard hat and rolled-up blueprints resting on a concrete barrier with a city skyline in the background.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A conceptual animation of a glowing shield forming around a city, representing resilience, transitioning into a quiz interface.",
      "questions": [
        {
          "id": "civil-engineering-301-l06-q1",
          "text": "What is the core principle of base isolation in seismic design?",
          "skillId": "civil-engineering-301-skill-resilience",
          "options": [
            {
              "id": "a",
              "text": "Decoupling the building's superstructure from the substructure to reduce the transmission of ground motion."
            },
            {
              "id": "b",
              "text": "Anchoring the building rigidly to the bedrock to prevent any movement."
            },
            {
              "id": "c",
              "text": "Using lightweight materials exclusively in the upper floors."
            },
            {
              "id": "d",
              "text": "Installing massive concrete blocks on the roof to counteract sway."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Base isolation involves placing flexible bearings between the building and its foundation, allowing the ground to move without transferring severe forces to the structure."
        },
        {
          "id": "civil-engineering-301-l06-q2",
          "text": "Which strategy is most effective for urban flood resilience?",
          "skillId": "civil-engineering-301-skill-resilience",
          "options": [
            {
              "id": "a",
              "text": "Paving all surfaces with impermeable concrete to direct water to sewers."
            },
            {
              "id": "b",
              "text": "Integrating permeable pavements, bioswales, and retention basins."
            },
            {
              "id": "c",
              "text": "Building all structures entirely underground."
            },
            {
              "id": "d",
              "text": "Removing all natural vegetation from urban centers."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Permeable surfaces and green infrastructure absorb and slow down stormwater, significantly reducing the burden on municipal drainage systems and preventing floods."
        },
        {
          "id": "civil-engineering-301-l06-q3",
          "text": "What does 'redundancy' mean in the context of structural resilience?",
          "skillId": "civil-engineering-301-skill-resilience",
          "options": [
            {
              "id": "a",
              "text": "Using outdated materials to save costs."
            },
            {
              "id": "b",
              "text": "Providing multiple load paths so that if one component fails, others can carry the load."
            },
            {
              "id": "c",
              "text": "Designing buildings that look identical to one another."
            },
            {
              "id": "d",
              "text": "Over-engineering non-structural aesthetic elements."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Redundancy ensures that the failure of a single structural element does not lead to disproportionate or total collapse, as alternative load paths exist."
        }
      ],
      "learningAids": [
        {
          "id": "civil-engineering-301-l06-a1",
          "type": "mnemonic",
          "title": "The 4 R's of Resilience",
          "content": "Robustness (strength), Redundancy (backups), Resourcefulness (adaptability), Rapidity (quick recovery)."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-301-l06.png"
    },
    {
      "id": "civil-engineering-301-l07",
      "title": "Infrastructure Optimization",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic smart city intersection with glowing data streams representing traffic flow, energy grid distribution, and water management.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced data visualization animation showing real-time optimization of a city's water distribution network, with nodes lighting up as efficiency increases.",
      "learningAids": [
        {
          "id": "civil-engineering-301-l07-a1",
          "type": "image",
          "title": "Lifecycle Cost Analysis (LCCA)",
          "content": "Graph illustrating initial construction costs versus long-term maintenance and operational savings."
        },
        {
          "id": "civil-engineering-301-l07-a2",
          "type": "animation",
          "title": "Smart Grid Optimization",
          "content": "Animation showing AI algorithms balancing energy loads across a smart city grid."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-301-l07.png"
    },
    {
      "id": "civil-engineering-301-l08",
      "title": "Optimizing Urban Networks",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A high-tech control room with multiple screens displaying graphs, maps, and optimization algorithms for urban infrastructure.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An interactive map zooming into a traffic grid, showing AI algorithms adjusting traffic light timings to reduce congestion.",
      "metadata": {
        "prompts": [
          "Perform a basic Lifecycle Cost Analysis for the two bridge designs.",
          "Adjust the traffic signal timing to minimize intersection wait times.",
          "Identify the bottleneck in the water distribution network."
        ]
      },
      "learningAids": [
        {
          "id": "civil-engineering-301-l08-a1",
          "type": "practice",
          "title": "Network Optimization Practice",
          "content": "Use the interactive dashboard to balance cost, efficiency, and capacity in urban systems."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-301-l08.png"
    },
    {
      "id": "civil-engineering-301-l09",
      "title": "Checkpoint 3: Infrastructure Optimization",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing digital network overlay on a physical map of a metropolitan area, symbolizing optimized infrastructure.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A smooth fly-through of a smart city at night, with glowing lines connecting optimized infrastructure nodes, ending on an assessment screen.",
      "questions": [
        {
          "id": "civil-engineering-301-l09-q1",
          "text": "What is Lifecycle Cost Analysis (LCCA) used for in infrastructure?",
          "skillId": "civil-engineering-301-skill-optimization",
          "options": [
            {
              "id": "a",
              "text": "Evaluating the total cost of ownership, including construction, operation, maintenance, and disposal."
            },
            {
              "id": "b",
              "text": "Calculating only the upfront material and labor costs."
            },
            {
              "id": "c",
              "text": "Determining the aesthetic value of a structure over time."
            },
            {
              "id": "d",
              "text": "Estimating the daily traffic volume on a new highway."
            }
          ],
          "correctOptionId": "a",
          "explanation": "LCCA is an economic analysis method that assesses the total cost of an asset over its entire lifespan, helping engineers choose the most cost-effective long-term solutions."
        },
        {
          "id": "civil-engineering-301-l09-q2",
          "text": "How do smart grids optimize urban energy infrastructure?",
          "skillId": "civil-engineering-301-skill-optimization",
          "options": [
            {
              "id": "a",
              "text": "By using real-time data and two-way communication to dynamically balance supply and demand."
            },
            {
              "id": "b",
              "text": "By permanently running all power plants at maximum capacity."
            },
            {
              "id": "c",
              "text": "By disconnecting residential areas during peak hours automatically."
            },
            {
              "id": "d",
              "text": "By relying solely on fossil fuels for predictable output."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Smart grids utilize IoT sensors and AI to monitor energy usage in real-time, optimizing distribution, reducing waste, and integrating renewable sources efficiently."
        },
        {
          "id": "civil-engineering-301-l09-q3",
          "text": "In traffic flow optimization, what is the purpose of 'platooning'?",
          "skillId": "civil-engineering-301-skill-optimization",
          "options": [
            {
              "id": "a",
              "text": "Grouping vehicles closely together using automated systems to reduce aerodynamic drag and increase road capacity."
            },
            {
              "id": "b",
              "text": "Forcing all vehicles to stop at every intersection to regulate speed."
            },
            {
              "id": "c",
              "text": "Diverting heavy trucks to residential streets."
            },
            {
              "id": "d",
              "text": "Replacing multi-lane highways with single-lane roads."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Platooning connects vehicles via V2V communication, allowing them to travel closely together safely, which improves traffic flow and fuel efficiency."
        }
      ],
      "learningAids": [
        {
          "id": "civil-engineering-301-l09-a1",
          "type": "mnemonic",
          "title": "Optimization Focus",
          "content": "Always balance the Triangle of Optimization: Cost, Performance, and Sustainability."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-301-l09.png"
    },
    {
      "id": "civil-engineering-301-l10",
      "title": "Final Assessment: Civil Engineering III",
      "type": "quiz",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A grand, sweeping view of a completed, futuristic sustainable mega-bridge at sunset, symbolizing the pinnacle of civil engineering.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A montage of structural systems, resilience mechanisms, and smart city optimizations coming together to form a perfect, modern metropolis.",
      "questions": [
        {
          "id": "civil-engineering-301-l10-q1",
          "text": "Which combination of systems best ensures a skyscraper's resilience against both high winds and seismic activity?",
          "skillId": "civil-engineering-301-skill-structures",
          "options": [
            {
              "id": "a",
              "text": "Tuned mass dampers and base isolators."
            },
            {
              "id": "b",
              "text": "Rigid concrete foundations and glass facades."
            },
            {
              "id": "c",
              "text": "Unreinforced masonry and shallow footings."
            },
            {
              "id": "d",
              "text": "Permeable pavements and bioswales."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Tuned mass dampers counteract wind-induced sway, while base isolators decouple the building from seismic ground motion, providing comprehensive dynamic resilience."
        },
        {
          "id": "civil-engineering-301-l10-q2",
          "text": "When optimizing an aging bridge's infrastructure, which approach balances safety and cost most effectively?",
          "skillId": "civil-engineering-301-skill-optimization",
          "options": [
            {
              "id": "a",
              "text": "Implementing structural health monitoring (SHM) sensors to target maintenance only where needed."
            },
            {
              "id": "b",
              "text": "Demolishing and rebuilding the bridge immediately."
            },
            {
              "id": "c",
              "text": "Ignoring minor cracks until a major failure occurs to save short-term funds."
            },
            {
              "id": "d",
              "text": "Painting the bridge annually to improve its aesthetic appeal."
            }
          ],
          "correctOptionId": "a",
          "explanation": "SHM provides real-time data on structural integrity, allowing for predictive maintenance that extends the bridge's lifespan safely while minimizing unnecessary costs."
        },
        {
          "id": "civil-engineering-301-l10-q3",
          "text": "Why is integrating green infrastructure considered a multi-objective optimization?",
          "skillId": "civil-engineering-301-skill-resilience",
          "options": [
            {
              "id": "a",
              "text": "It manages stormwater while simultaneously reducing the urban heat island effect and improving air quality."
            },
            {
              "id": "b",
              "text": "It requires multiple contractors to install."
            },
            {
              "id": "c",
              "text": "It is the most expensive option available."
            },
            {
              "id": "d",
              "text": "It only serves to make the city look more attractive."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Green infrastructure solves multiple urban challenges at once (stormwater management, temperature regulation, pollution reduction), making it highly optimized."
        }
      ],
      "learningAids": [
        {
          "id": "civil-engineering-301-l10-a1",
          "type": "mnemonic",
          "title": "Final Review",
          "content": "Civil Engineering III integrates Structure (Strength), Resilience (Survival), and Optimization (Efficiency)."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-301-l10.png"
    }
  ]
};
