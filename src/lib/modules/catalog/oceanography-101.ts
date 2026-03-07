import type { LearningModule } from "@/lib/modules/types";

export const oceanography_101_Module: LearningModule = {
  "id": "oceanography-101",
  "title": "Oceanography Foundations",
  "description": "An introductory curriculum in Oceanography for beginners. Explore the fundamentals of ocean systems, from global currents and marine ecosystems to the methods scientists use to study them. This module uses interactive labs, case studies, and simulations to build a foundational understanding of our planet's oceans and their connection to the global climate.",
  "subject": "Earth Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "ocean",
    "science"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Describe the four main branches of oceanography and their areas of study.",
    "Explain how temperature, salinity, and wind drive ocean circulation.",
    "Identify the key components of a marine food web, including producers, consumers, and decomposers.",
    "Compare different methods and tools used for ocean observation, such as satellites, sonar, and ROVs.",
    "Analyze the relationship between the ocean and Earth's climate, including its role as a carbon sink.",
    "Develop a basic research plan to investigate a specific oceanographic question."
  ],
  "lessons": [
    {
      "id": "oceanography-101-l01",
      "title": "Introduction to Our Oceans",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "oceanography-101-l01-a1",
          "type": "image",
          "title": "The World's Oceans",
          "content": "A map highlighting the five major oceans: Pacific, Atlantic, Indian, Southern, and Arctic."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-101-l01-c1",
          "kind": "concept",
          "title": "What is Oceanography?",
          "content": "Welcome to the study of our planet's oceans! In this lesson, we'll define Oceanography and explore its four main branches: Physical (how water moves), Chemical (the composition of seawater), Geological (the shape of the ocean floor), and Biological (the life within it). We'll introduce key vocabulary like salinity, density, and currents to build our foundation."
        },
        {
          "id": "oceanography-101-l01-c2",
          "kind": "concept",
          "title": "Cause and Effect in the Ocean",
          "content": "The ocean is a dynamic system of causes and effects. We will explore how different factors are connected. For example, we'll learn how energy from the sun and wind blowing across the surface create the powerful movements of water known as surface currents. Understanding these connections is the first step to understanding the ocean as a whole."
        },
        {
          "id": "oceanography-101-l01-c3",
          "kind": "recap",
          "title": "The Scientific Method in Oceanography",
          "content": "In this recap, we'll review how scientists study the ocean. We'll discuss the importance of making observations, forming a testable hypothesis, and collecting data to draw conclusions. This process ensures that our understanding of the ocean is based on evidence."
        }
      ],
      "flashcards": [
        {
          "id": "oceanography-101-l01-f1",
          "front": "Salinity",
          "back": "The measure of the amount of dissolved salts in seawater."
        },
        {
          "id": "oceanography-101-l01-f2",
          "front": "Density",
          "back": "The mass of a substance per unit volume. In the ocean, it's mainly affected by temperature and salinity."
        },
        {
          "id": "oceanography-101-l01-f3",
          "front": "Thermocline",
          "back": "A layer in the ocean where temperature changes rapidly with depth."
        }
      ]
    },
    {
      "id": "oceanography-101-l02",
      "title": "Ocean Currents in Motion",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "oceanography-101-l02-a1",
          "type": "image",
          "title": "Global Conveyor Belt",
          "content": "A diagram illustrating the path of thermohaline circulation that moves water around the globe."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-101-l02-c1",
          "kind": "practice",
          "title": "Modeling Ocean Circulation",
          "content": "In this interactive lab, you'll build a simple model of ocean circulation. You will adjust variables like temperature and salinity to see how they create density differences that drive deep ocean currents. This hands-on experience will show you the forces behind the 'global conveyor belt' that moves water around the planet."
        },
        {
          "id": "oceanography-101-l02-c2",
          "kind": "recap",
          "title": "Drivers of Circulation",
          "content": "In this recap, we will summarize the key drivers of ocean currents. We'll review how wind powers surface currents, while differences in temperature and salinity (thermohaline circulation) drive the slow, deep currents that mix the ocean over long timescales."
        }
      ],
      "interactiveActivities": [
        {
          "id": "oceanography-101-l02-act1",
          "type": "matching_pairs",
          "title": "Matching Ocean Drivers",
          "description": "Match each driver to its primary effect on the ocean.",
          "pairs": [
            {
              "left": "Wind",
              "right": "Creates surface currents"
            },
            {
              "left": "Sun's Heat",
              "right": "Warms the surface layer, causing stratification"
            },
            {
              "left": "Evaporation in the tropics",
              "right": "Increases surface water salinity"
            },
            {
              "left": "Formation of sea ice",
              "right": "Makes nearby water saltier and denser, causing it to sink"
            }
          ]
        },
        {
          "id": "oceanography-101-l02-act2",
          "type": "sorting_buckets",
          "title": "Classifying Currents",
          "description": "Sort these examples into the correct category of ocean current.",
          "buckets": [
            "Surface Current",
            "Deep Current"
          ],
          "items": [
            {
              "text": "The Gulf Stream",
              "bucket": "Surface Current"
            },
            {
              "text": "Thermohaline Circulation",
              "bucket": "Deep Current"
            },
            {
              "text": "North Atlantic Deep Water",
              "bucket": "Deep Current"
            },
            {
              "text": "California Current",
              "bucket": "Surface Current"
            }
          ]
        }
      ]
    },
    {
      "id": "oceanography-101-l03",
      "title": "Checkpoint: Ocean Basics",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "oceanography-101-l03-a1",
          "type": "practice",
          "title": "Review Your Notes",
          "content": "Before you begin, quickly review the key terms from the first two lessons, such as salinity, density, and the main drivers of currents."
        }
      ],
      "questions": [
        {
          "id": "oceanography-101-l03-q1",
          "text": "A scientist studying how waves shape a coastline is working in which branch of oceanography?",
          "skillId": "oceanography-101-skill-branches",
          "options": [
            {
              "id": "a",
              "text": "Chemical Oceanography"
            },
            {
              "id": "b",
              "text": "Biological Oceanography"
            },
            {
              "id": "c",
              "text": "Geological Oceanography"
            },
            {
              "id": "d",
              "text": "Physical Oceanography"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Physical oceanography studies the movement of ocean water, including waves, currents, and tides, and their interaction with the physical environment."
        },
        {
          "id": "oceanography-101-l03-q2",
          "text": "What happens to seawater density as temperature decreases and salinity increases?",
          "skillId": "oceanography-101-skill-density",
          "options": [
            {
              "id": "a",
              "text": "Density increases"
            },
            {
              "id": "b",
              "text": "Density decreases"
            },
            {
              "id": "c",
              "text": "Density stays the same"
            },
            {
              "id": "d",
              "text": "Density becomes zero"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Colder, saltier water is denser, which causes it to sink. This is a key driver of deep ocean circulation."
        },
        {
          "id": "oceanography-101-l03-q3",
          "text": "The 'global conveyor belt' is another name for what process?",
          "skillId": "oceanography-101-skill-circulation",
          "options": [
            {
              "id": "a",
              "text": "Surface currents caused by wind"
            },
            {
              "id": "b",
              "text": "The daily cycle of tides"
            },
            {
              "id": "c",
              "text": "Thermohaline circulation"
            },
            {
              "id": "d",
              "text": "The Coriolis effect"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Thermohaline circulation is the large-scale movement of ocean water driven by differences in density, which acts like a global conveyor belt."
        }
      ]
    },
    {
      "id": "oceanography-101-l04",
      "title": "Life in the Ocean: Marine Ecosystems",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "oceanography-101-l04-a1",
          "type": "image",
          "title": "Coral Reef Food Web",
          "content": "A diagram showing the relationships between producers (algae), primary consumers (herbivorous fish), and higher-level consumers (sharks, barracuda) in a coral reef."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-101-l04-c1",
          "kind": "example",
          "title": "Case Study: The Coral Reef",
          "content": "In this case study, we'll dive into one of the most vibrant marine ecosystems: the coral reef. We will identify its key inhabitants, from the tiny algae (producers) that create food from sunlight, to the fish that eat them (consumers), and the bacteria that break down waste (decomposers). We'll explore the delicate balance of factors like water temperature and clarity that these communities depend on to survive."
        },
        {
          "id": "oceanography-101-l04-c2",
          "kind": "concept",
          "title": "Analyzing Environmental Impacts",
          "content": "Marine ecosystems face many challenges. We will analyze how a single environmental change, like rising ocean temperatures, can have wide-ranging effects. For example, warmer water can cause corals to expel their algae, a process called 'coral bleaching,' which can lead to the collapse of the entire reef ecosystem. Understanding these impacts is critical for conservation."
        },
        {
          "id": "oceanography-101-l04-c3",
          "kind": "recap",
          "title": "Ecosystem Resilience",
          "content": "In this recap, we'll discuss ecosystem resilience—the ability of an ecosystem to resist or recover from disturbances. We'll explore what makes some ecosystems, like a healthy mangrove forest, more resilient than others and discuss how human actions can either weaken or strengthen this natural resilience."
        }
      ],
      "flashcards": [
        {
          "id": "oceanography-101-l04-f1",
          "front": "Producer",
          "back": "An organism, like phytoplankton, that produces its own food, usually through photosynthesis."
        },
        {
          "id": "oceanography-101-l04-f2",
          "front": "Food Web",
          "back": "A diagram showing the complex network of feeding relationships within an ecosystem."
        },
        {
          "id": "oceanography-101-l04-f3",
          "front": "Coral Bleaching",
          "back": "The process where corals under stress (like high temperatures) expel the symbiotic algae living in their tissues, causing them to turn white."
        }
      ]
    },
    {
      "id": "oceanography-101-l05",
      "title": "Exploring the Ocean: Tools & Techniques",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "oceanography-101-l05-a1",
          "type": "image",
          "title": "Oceanographic Research Tools",
          "content": "An illustration of a research vessel deploying various instruments, including a CTD rosette, a multibeam sonar, and a remotely operated vehicle (ROV)."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-101-l05-c1",
          "kind": "practice",
          "title": "Virtual Ocean Expedition",
          "content": "In this simulation, you will lead a virtual expedition to explore a newly discovered underwater volcano. You must choose the right tools for the job. Will you use satellite data to measure sea surface temperature, multibeam sonar to map the volcano's shape, or an ROV to collect biological samples from its hydrothermal vents? Your choices will determine the success of your mission."
        },
        {
          "id": "oceanography-101-l05-c2",
          "kind": "recap",
          "title": "Analyzing Your Data",
          "content": "After your expedition, we'll debrief. You will analyze the data you collected and evaluate the strengths and weaknesses of the tools you chose. This reflective practice highlights how oceanographers combine different technologies to build a complete picture of the complex and mysterious deep sea."
        }
      ],
      "interactiveActivities": [
        {
          "id": "oceanography-101-l05-act1",
          "type": "scenario_practice",
          "title": "Plan Your Expedition",
          "description": "Your mission is to study a potential new coral reef habitat. Choose your tools and justify your plan.",
          "instructions": [
            "Define your primary objective: Is it to map the area, identify species, or measure water quality?",
            "Select a primary tool (e.g., Sonar, ROV, Satellite) and explain why it's the best choice for your objective.",
            "Identify a potential limitation of your chosen tool and how you might address it."
          ]
        },
        {
          "id": "oceanography-101-l05-act2",
          "type": "matching_pairs",
          "title": "Tool for the Job",
          "description": "Match the scientific question to the best oceanographic tool to answer it.",
          "pairs": [
            {
              "left": "What is the shape of the seafloor?",
              "right": "Multibeam Sonar"
            },
            {
              "left": "What is the temperature and salinity of the water column?",
              "right": "CTD Rosette"
            },
            {
              "left": "What species are living on this shipwreck?",
              "right": "Remotely Operated Vehicle (ROV)"
            },
            {
              "left": "How large is the seasonal phytoplankton bloom?",
              "right": "Satellite with Ocean Color Sensor"
            }
          ]
        }
      ]
    },
    {
      "id": "oceanography-101-l06",
      "title": "Checkpoint: Ecosystems and Exploration",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "oceanography-101-l06-a1",
          "type": "practice",
          "title": "Review Your Notes",
          "content": "Before you begin, quickly review the key concepts from the lessons on marine ecosystems and ocean exploration tools."
        }
      ],
      "questions": [
        {
          "id": "oceanography-101-l06-q1",
          "text": "In a marine food web, phytoplankton are considered:",
          "skillId": "oceanography-101-skill-foodweb",
          "options": [
            {
              "id": "a",
              "text": "Primary consumers"
            },
            {
              "id": "b",
              "text": "Producers"
            },
            {
              "id": "c",
              "text": "Decomposers"
            },
            {
              "id": "d",
              "text": "Apex predators"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Producers, like phytoplankton, create their own food through photosynthesis and form the base of most marine food webs."
        },
        {
          "id": "oceanography-101-l06-q2",
          "text": "Which tool would be most effective for creating a detailed, 3D map of a large area of the ocean floor?",
          "skillId": "oceanography-101-skill-tools",
          "options": [
            {
              "id": "a",
              "text": "A water sample bottle"
            },
            {
              "id": "b",
              "text": "A plankton net"
            },
            {
              "id": "c",
              "text": "A multibeam sonar system"
            },
            {
              "id": "d",
              "text": "A satellite altimeter"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Multibeam sonar, typically mounted on a ship, sends out sound waves to create high-resolution maps of the seafloor topography."
        },
        {
          "id": "oceanography-101-l06-q3",
          "text": "The primary cause of coral bleaching is:",
          "skillId": "oceanography-101-skill-ecosystems",
          "options": [
            {
              "id": "a",
              "text": "Overfishing of sharks"
            },
            {
              "id": "b",
              "text": "Plastic pollution"
            },
            {
              "id": "c",
              "text": "Unusually high water temperatures"
            },
            {
              "id": "d",
              "text": "Loud noises from ships"
            }
          ],
          "correctOptionId": "c",
          "explanation": "When water temperatures get too high, corals become stressed and expel the symbiotic algae that provide them with food and color, leading to bleaching."
        }
      ]
    },
    {
      "id": "oceanography-101-l07",
      "title": "Our Ocean and a Changing Climate",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "oceanography-101-l07-a1",
          "type": "image",
          "title": "The Ocean Carbon Cycle",
          "content": "A diagram showing how the ocean absorbs carbon dioxide (CO2) from the atmosphere and the resulting chemical changes that lead to ocean acidification."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-101-l07-c1",
          "kind": "concept",
          "title": "The Ocean's Role in Climate",
          "content": "The ocean is a major player in Earth's climate system. It acts like a giant sponge, absorbing over 90% of the excess heat and about 25% of the carbon dioxide (CO2) from human activities. We'll explore how this service helps regulate the climate but also leads to problems like sea-level rise and ocean acidification."
        },
        {
          "id": "oceanography-101-l07-c2",
          "kind": "concept",
          "title": "Climate Solutions and Ocean Health",
          "content": "In this section, we will discuss actions we can take to protect the ocean. This includes global solutions like reducing CO2 emissions, as well as local actions like creating Marine Protected Areas (MPAs) to help ecosystems recover, practicing sustainable fishing, and preventing pollution. We'll discuss how governments, communities, and individuals all have a role to play."
        },
        {
          "id": "oceanography-101-l07-c3",
          "kind": "recap",
          "title": "Our Role in Protecting the Ocean",
          "content": "This lesson concludes with a recap of the deep connection between the ocean and our climate. We will review the major challenges—warming, acidification, and sea-level rise—and emphasize the importance of science-informed solutions and collective action for a healthy ocean and a stable climate."
        }
      ],
      "flashcards": [
        {
          "id": "oceanography-101-l07-f1",
          "front": "Carbon Sink",
          "back": "A natural reservoir, like the ocean or a forest, that absorbs more carbon than it releases."
        },
        {
          "id": "oceanography-101-l07-f2",
          "front": "Ocean Acidification",
          "back": "The ongoing decrease in the pH of the Earth's oceans, caused by the uptake of carbon dioxide (CO2) from the atmosphere."
        },
        {
          "id": "oceanography-101-l07-f3",
          "front": "Sea-Level Rise",
          "back": "The increase in the average level of Earth's oceans, primarily caused by thermal expansion of seawater as it warms and melting of land-based ice."
        }
      ]
    },
    {
      "id": "oceanography-101-l08",
      "title": "Oceanography in Action: Capstone Project",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "oceanography-101-l08-a1",
          "type": "image",
          "title": "Scientific Poster Template",
          "content": "A visual guide showing the standard sections of a scientific poster: Title, Introduction, Methods, Results, Conclusion, and References."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-101-l08-c1",
          "kind": "practice",
          "title": "Planning Your Research Project",
          "content": "In this interactive activity, you will draft a plan for your own mini-research project. You'll choose a topic that interests you, such as the impact of plastic pollution on local sea turtles or how sea-level rise might affect your community. You will then formulate a research question, outline your methods, and define what success would look like."
        },
        {
          "id": "oceanography-101-l08-c2",
          "kind": "recap",
          "title": "Presenting Your Findings",
          "content": "To conclude, we'll review how scientists share their work. You will learn how to structure a scientific presentation or poster, focusing on clearly communicating your research question, the evidence you gathered, and your final conclusions. This prepares you to share your knowledge with others effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "oceanography-101-l08-act1",
          "type": "project_builder",
          "title": "Research Proposal Builder",
          "description": "Use this tool to build a simple research proposal for your chosen topic.",
          "instructions": [
            "State your research question clearly.",
            "List the methods you would use to collect data (e.g., literature review, field observation, data analysis).",
            "Describe what kind of results you expect to find."
          ]
        },
        {
          "id": "oceanography-101-l08-act2",
          "type": "debate_simulator",
          "title": "Peer Review Simulator",
          "description": "Present your research proposal and respond to questions from a simulated peer review panel."
        }
      ]
    }
  ]
};
