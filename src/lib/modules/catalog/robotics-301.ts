import type { LearningModule } from "@/lib/modules/types";

export const robotics_301_Module: LearningModule = {
  "id": "robotics-301",
  "title": "Robotics Autonomy",
  "description": "An advanced course on robotics autonomy, covering perception, planning, and execution in uncertain environments. Topics include SLAM, pathfinding, decision-making with POMDPs, and safety systems.",
  "subject": "Robotics",
  "tags": [
    "curriculum",
    "interactive",
    "autonomy",
    "slam",
    "planning"
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
  "thumbnail": "/placeholders/lesson-robot-autonomy.svg",
  "learningObjectives": [
    "Explain the core challenges of autonomous navigation, including SLAM and planning under uncertainty.",
    "Implement and analyze common pathfinding algorithms like A* in simulated environments.",
    "Model a robot's decision-making process using frameworks like MDPs and POMDPs.",
    "Design and justify a basic safety layer for collision avoidance in a robotic system.",
    "Integrate mapping, planning, and safety concepts in a final capstone project."
  ],
  "lessons": [
    {
      "id": "robotics-301-l01",
      "title": "Perception: Simultaneous Localization and Mapping (SLAM)",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "robotics-301-l01-a1",
          "type": "animation",
          "title": "SLAM in Action",
          "content": "An animation showing a simulated robot using LiDAR scans to simultaneously build a map of an unknown room while tracking its own position within it."
        },
        {
          "id": "robotics-301-l01-a2",
          "type": "image",
          "title": "The Bayes Filter Cycle",
          "content": "A diagram illustrating the predict-update cycle of probabilistic state estimation, a core concept behind SLAM."
        }
      ]
    },
    {
      "id": "robotics-301-l02",
      "title": "Practice: Building a 2D Occupancy Grid",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Given the simulated sensor data, update the log-odds value for each cell in the grid.",
          "Identify which cells are occupied, free, or unknown based on your updated map.",
          "Explain how sensor noise could affect the accuracy of your map."
        ]
      },
      "learningAids": [
        {
          "id": "robotics-301-l02-a1",
          "type": "practice",
          "title": "Interactive Mapping Simulator",
          "content": "Use a simplified simulator to process sensor readings and build a 2D map of a small environment."
        }
      ]
    },
    {
      "id": "robotics-301-l03",
      "title": "Checkpoint 1: Perception and Localization",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "robotics-301-l03-q1",
          "text": "What is the primary challenge that Simultaneous Localization and Mapping (SLAM) aims to solve?",
          "skillId": "robotics-301-skill-slam",
          "options": [
            {
              "id": "a",
              "text": "The 'chicken-and-egg' problem: you need a map to localize, and you need to know your location to map."
            },
            {
              "id": "b",
              "text": "Calculating the fastest possible speed for the robot's motors."
            },
            {
              "id": "c",
              "text": "Designing the physical hardware of the robot's sensors."
            },
            {
              "id": "d",
              "text": "Choosing the best programming language for robotics."
            }
          ],
          "correctOptionId": "a",
          "explanation": "SLAM addresses the core problem of a robot navigating an unknown environment by building a map and locating itself within that map at the same time."
        },
        {
          "id": "robotics-301-l03-q2",
          "text": "In a probabilistic robotics context, what does an occupancy grid map represent?",
          "skillId": "robotics-301-skill-mapping",
          "options": [
            {
              "id": "a",
              "text": "The probability that each cell in the environment is occupied by an obstacle."
            },
            {
              "id": "b",
              "text": "A definitive list of all obstacles with their exact coordinates."
            },
            {
              "id": "c",
              "text": "The optimal path for the robot to travel."
            },
            {
              "id": "d",
              "text": "The robot's battery level at different points in the room."
            }
          ],
          "correctOptionId": "a"
        }
      ]
    },
    {
      "id": "robotics-301-l04",
      "title": "Planning: Pathfinding with A*",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "robotics-301-l04-a1",
          "type": "animation",
          "title": "A* vs. Dijkstra",
          "content": "A side-by-side visualization of the A* and Dijkstra algorithms searching a maze, highlighting how A*'s heuristic efficiently guides its search towards the goal."
        }
      ]
    },
    {
      "id": "robotics-301-l05",
      "title": "Practice: Find the Optimal Path",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Select a heuristic (Manhattan or Euclidean distance) for the A* algorithm.",
          "Step through the algorithm to find the shortest path from the start to the goal on the provided map.",
          "Describe a scenario where a poorly chosen heuristic would lead to a suboptimal path."
        ]
      },
      "learningAids": [
        {
          "id": "robotics-301-l05-a1",
          "type": "practice",
          "title": "A* Pathfinding Visualizer",
          "content": "An interactive grid where you can place obstacles and watch the A* algorithm discover the optimal path in real-time."
        }
      ]
    },
    {
      "id": "robotics-301-l06",
      "title": "Checkpoint 2: Path Planning",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "robotics-301-l06-q1",
          "text": "In the A* algorithm, what is the purpose of the heuristic function, h(n)?",
          "skillId": "robotics-301-skill-astar",
          "options": [
            {
              "id": "a",
              "text": "To calculate the exact cost of the path from the start node to node n."
            },
            {
              "id": "b",
              "text": "To estimate the cost of the cheapest path from node n to the goal."
            },
            {
              "id": "c",
              "text": "To guarantee that the first path found is the optimal one, regardless of the heuristic."
            },
            {
              "id": "d",
              "text": "To count the total number of nodes in the graph."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The heuristic h(n) is an educated guess that guides A* towards the goal, making it more efficient than uninformed search algorithms like Dijkstra's."
        },
        {
          "id": "robotics-301-l06-q2",
          "text": "An A* heuristic is 'admissible' if it never does what?",
          "skillId": "robotics-301-skill-astar",
          "options": [
            {
              "id": "a",
              "text": "Overestimates the true cost to reach the goal."
            },
            {
              "id": "b",
              "text": "Underestimates the true cost to reach the goal."
            },
            {
              "id": "c",
              "text": "Returns a value of zero for the goal node."
            },
            {
              "id": "d",
              "text": "Uses the Manhattan distance."
            }
          ],
          "correctOptionId": "a"
        }
      ]
    },
    {
      "id": "robotics-301-l07",
      "title": "Decision-Making: Planning Under Uncertainty (POMDPs)",
      "type": "video",
      "duration": 18,
      "learningAids": [
        {
          "id": "robotics-301-l07-a1",
          "type": "image",
          "title": "MDP vs. POMDP",
          "content": "A comparative diagram showing a simple Markov Decision Process (MDP) with known states versus a Partially Observable MDP (POMDP) where the agent acts based on a 'belief state'."
        }
      ]
    },
    {
      "id": "robotics-301-l08",
      "title": "Practice: The Tiger Problem",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Your robot hears a roar. Update your belief state about which door hides the tiger.",
          "Choose an action: open a door or listen again. Justify your choice based on the potential rewards and risks.",
          "After listening again, you hear the roar from the same side. How does this observation update your belief?"
        ]
      },
      "learningAids": [
        {
          "id": "robotics-301-l08-a1",
          "type": "practice",
          "title": "POMDP Scenario Simulator",
          "content": "Work through the classic 'Tiger Problem' to understand how a robot makes decisions when its perception of the world is uncertain."
        }
      ]
    },
    {
      "id": "robotics-301-l09",
      "title": "Checkpoint 3: Decision-Making",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "robotics-301-l09-q1",
          "text": "Why is a 'belief state' used in a POMDP instead of a direct state like in an MDP?",
          "skillId": "robotics-301-skill-pomdp",
          "options": [
            {
              "id": "a",
              "text": "Because the agent cannot directly observe the true state of the world and must maintain a probability distribution over all possible states."
            },
            {
              "id": "b",
              "text": "Because POMDPs are only used for robots that have religious beliefs."
            },
            {
              "id": "c",
              "text": "Because the 'belief state' is computationally simpler to calculate than a certain state."
            },
            {
              "id": "d",
              "text": "Because the robot's actions do not affect the state of the world."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The belief state is the cornerstone of a POMDP, representing the agent's uncertainty about the true state of the world, which is essential for planning when sensors are noisy or perception is incomplete."
        }
      ]
    },
    {
      "id": "robotics-301-l10",
      "title": "Action: Safety Layers and Collision Avoidance",
      "type": "video",
      "duration": 10,
      "learningAids": [
        {
          "id": "robotics-301-l10-a1",
          "type": "animation",
          "title": "Dynamic Window Approach (DWA)",
          "content": "A visualization of a robot sampling multiple velocity commands and scoring them based on proximity to obstacles, progress towards a goal, and speed, ultimately selecting the safest and most efficient one."
        }
      ]
    },
    {
      "id": "robotics-301-l11",
      "title": "Final Project: Autonomous Warehouse Robot",
      "type": "interactive",
      "duration": 45,
      "metadata": {
        "prompts": [
          "Task 1: Use the SLAM module to map the unknown warehouse environment.",
          "Task 2: Plan a path using A* to navigate from the loading dock to a designated shelf, avoiding static obstacles.",
          "Task 3: Execute the plan, using the safety layer to override commands and avoid a moving forklift (dynamic obstacle).",
          "Analyze your robot's performance: Was the path efficient? Did the safety layer engage correctly?"
        ]
      },
      "learningAids": [
        {
          "id": "robotics-301-l11-a1",
          "type": "practice",
          "title": "Capstone Simulator",
          "content": "Integrate all learned concepts in a final simulation to guide a robot through a warehouse to pick up and deliver a package autonomously and safely."
        }
      ]
    }
  ]
};
