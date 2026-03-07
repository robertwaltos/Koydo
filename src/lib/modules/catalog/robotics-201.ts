import type { LearningModule } from "@/lib/modules/types";

export const robotics_201_Module: LearningModule = {
  "id": "robotics-201",
  "title": "Robotics Integration",
  "description": "An intermediate module on integrating core robotics subsystems. Learn to connect perception, planning, and control systems to build functional robots, with a focus on practical application and debugging.",
  "subject": "Robotics",
  "tags": [
    "robotics",
    "integration",
    "ROS",
    "control systems",
    "computer vision"
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
  "thumbnail": "/placeholders/lesson-robot-integration.svg",
  "learningObjectives": [
    "Design and implement communication between robotic subsystems using ROS.",
    "Integrate sensor data to enable a robot to perceive its environment.",
    "Tune PID controllers for precise actuator movement.",
    "Develop simple task plans using state machines.",
    "Debug common integration issues in a robotic system."
  ],
  "lessons": [
    {
      "id": "robotics-201-l01",
      "title": "System Architecture & Communication",
      "type": "video",
      "duration": 10,
      "description": "Learn how different robotic subsystems (perception, control, planning) communicate using frameworks like the Robot Operating System (ROS).",
      "learningAids": [
        {
          "id": "robotics-201-l01-a1",
          "type": "image",
          "title": "Robotics Architecture Diagram",
          "content": "A clear diagram showing how sensors, compute units (like a Raspberry Pi or Jetson Nano), and actuators connect and exchange data."
        },
        {
          "id": "robotics-201-l01-a2",
          "type": "animation",
          "title": "ROS Data Flow",
          "content": "An animation illustrating data flowing from a camera sensor (a ROS topic) to a processing node, which then sends a command message to a motor controller."
        }
      ]
    },
    {
      "id": "robotics-201-l02",
      "title": "Practice: Your First ROS Node",
      "type": "interactive",
      "duration": 15,
      "description": "A guided simulation to create a simple publisher/subscriber node in a ROS environment to understand the fundamentals of robotic communication.",
      "metadata": {
        "prompts": [
          "Describe the purpose of a ROS topic in one sentence.",
          "Write the command to create a new ROS package.",
          "Explain the difference between a publisher and a subscriber in this simulation."
        ]
      },
      "learningAids": [
        {
          "id": "robotics-201-l02-a1",
          "type": "practice",
          "title": "Guided ROS Simulation",
          "content": "Follow the challenge flow in a virtual terminal to build and run a ROS node."
        }
      ]
    },
    {
      "id": "robotics-201-l03",
      "title": "Checkpoint: System Architecture",
      "type": "quiz",
      "duration": 8,
      "questions": [
        {
          "id": "robotics-201-l03-q1",
          "text": "In ROS, what is the primary role of a 'topic'?",
          "skillId": "robotics-201-skill-ros-core",
          "options": [
            {
              "id": "a",
              "text": "A named bus for sending and receiving messages between nodes."
            },
            {
              "id": "b",
              "text": "An executable program that performs a computation."
            },
            {
              "id": "c",
              "text": "A file that stores robot configuration data."
            },
            {
              "id": "d",
              "text": "A physical connection between a sensor and a motor."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "robotics-201-l03-q2",
          "text": "A node that processes camera images to find a ball is a good example of which subsystem?",
          "skillId": "robotics-201-skill-architecture",
          "options": [
            {
              "id": "a",
              "text": "Perception"
            },
            {
              "id": "b",
              "text": "Control"
            },
            {
              "id": "c",
              "text": "Planning"
            },
            {
              "id": "d",
              "text": "Actuation"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The perception subsystem is responsible for sensing and interpreting the environment. Processing images to find objects is a key perception task."
        }
      ]
    },
    {
      "id": "robotics-201-l04",
      "title": "Perception: Seeing the World",
      "type": "video",
      "duration": 12,
      "description": "An overview of common sensors like LiDAR, cameras, and IMUs. Learn the basics of sensor fusion to create a more reliable understanding of the environment.",
      "learningAids": [
        {
          "id": "robotics-201-l04-a1",
          "type": "image",
          "title": "Sensor Data Comparison",
          "content": "A side-by-side visual comparison of a scene captured by a camera (2D color image) versus a LiDAR sensor (3D point cloud)."
        },
        {
          "id": "robotics-201-l04-a2",
          "type": "animation",
          "title": "Kalman Filter Explained",
          "content": "A simple animation showing how a Kalman filter can fuse noisy GPS data and IMU data to produce a smooth, accurate position estimate for a moving robot."
        }
      ]
    },
    {
      "id": "robotics-201-l05",
      "title": "Practice: Calibrating a Virtual Camera",
      "type": "interactive",
      "duration": 18,
      "description": "Step through an interactive lab to calibrate a virtual camera and use color thresholding to identify a specific object in a simulated 3D environment.",
      "metadata": {
        "prompts": [
          "What is the purpose of a camera calibration matrix?",
          "Adjust the HSV color thresholds to isolate the blue cube.",
          "Why might shadows or bright lights affect your color-based detection algorithm?"
        ]
      },
      "learningAids": [
        {
          "id": "robotics-201-l05-a1",
          "type": "practice",
          "title": "Interactive Vision Lab",
          "content": "Use sliders and input fields in a simulated environment to perform camera calibration and object detection tasks."
        }
      ]
    },
    {
      "id": "robotics-201-l06",
      "title": "Control: Achieving Precision with PID",
      "type": "video",
      "duration": 12,
      "description": "Introduction to PID (Proportional-Integral-Derivative) controllers. Understand how to tune these three parameters to make a robot arm move to a target quickly and accurately.",
      "learningAids": [
        {
          "id": "robotics-201-l06-a1",
          "type": "animation",
          "title": "Tuning a PID Controller",
          "content": "An interactive graph showing a robot arm's movement. As the P, I, and D gains are adjusted, the animation shows the arm overshooting, oscillating, or smoothly reaching its target."
        }
      ]
    },
    {
      "id": "robotics-201-l07",
      "title": "Practice: Tuning a Virtual Arm",
      "type": "interactive",
      "duration": 20,
      "description": "Use sliders to tune the P, I, and D gains for a simulated robot arm. Your goal: reach the target in under 2 seconds with less than 5% overshoot.",
      "metadata": {
        "prompts": [
          "Describe the effect of increasing the 'P' (Proportional) gain too much.",
          "When is the 'I' (Integral) gain most useful for correcting steady-state errors?",
          "Record the final P, I, and D values that met the performance criteria."
        ]
      },
      "learningAids": [
        {
          "id": "robotics-201-l07-a1",
          "type": "practice",
          "title": "PID Tuning Simulator",
          "content": "A simulation of a single-joint robot arm with sliders for P, I, and D gains and a real-time performance graph."
        }
      ]
    },
    {
      "id": "robotics-201-l08",
      "title": "Checkpoint: Perception & Control",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "robotics-201-l08-q1",
          "text": "A robot arm consistently stops 1cm short of its target. Which PID term is most effective at correcting this steady-state error?",
          "skillId": "robotics-201-skill-pid-tuning",
          "options": [
            {
              "id": "a",
              "text": "Proportional (P)"
            },
            {
              "id": "b",
              "text": "Integral (I)"
            },
            {
              "id": "c",
              "text": "Derivative (D)"
            },
            {
              "id": "d",
              "text": "The Feedforward term"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Integral term accumulates error over time, so it will continue to increase the output until the persistent, steady-state error is eliminated."
        },
        {
          "id": "robotics-201-l08-q2",
          "text": "Why would you fuse data from an IMU (Inertial Measurement Unit) and a camera for robot localization?",
          "skillId": "robotics-201-skill-sensor-fusion",
          "options": [
            {
              "id": "a",
              "text": "To save battery power."
            },
            {
              "id": "b",
              "text": "To combine the IMU's rapid motion tracking with the camera's ability to correct for drift against visual landmarks."
            },
            {
              "id": "c",
              "text": "Because cameras cannot see in the dark."
            },
            {
              "id": "d",
              "text": "To increase the robot's maximum speed."
            }
          ],
          "correctOptionId": "b"
        }
      ]
    },
    {
      "id": "robotics-201-l09",
      "title": "Planning: Deciding What to Do",
      "type": "video",
      "duration": 9,
      "description": "Learn how to use state machines to plan and execute multi-step tasks, such as 'find a block, pick it up, and place it in a box'.",
      "learningAids": [
        {
          "id": "robotics-201-l09-a1",
          "type": "image",
          "title": "State Machine Flowchart",
          "content": "A clear flowchart diagram illustrating the states (e.g., 'SEARCHING', 'MOVING_TO_BLOCK', 'GRIPPING', 'MOVING_TO_GOAL') and transitions for a pick-and-place task."
        },
        {
          "id": "robotics-201-l09-a2",
          "type": "animation",
          "title": "State Machine in Action",
          "content": "A split-screen view showing a robot executing the pick-and-place task on one side, while the corresponding state in the flowchart is highlighted on the other."
        }
      ]
    },
    {
      "id": "robotics-201-l10",
      "title": "Capstone Project: The Integration Challenge",
      "type": "project",
      "duration": 45,
      "description": "Combine perception, control, and planning to make a simulated robot arm identify a colored block, pick it up, and place it in a designated zone. This project will test your subsystem integration and debugging skills.",
      "learningAids": [
        {
          "id": "robotics-201-l10-a1",
          "type": "practice",
          "title": "Project Simulation Environment",
          "content": "A complete simulated environment with a robot arm, camera, blocks of different colors, and a goal zone. Includes a checklist of tasks to complete."
        },
        {
          "id": "robotics-201-l10-a2",
          "type": "mnemonic",
          "title": "Debugging Checklist",
          "content": "Use the 'NODE' method: Notice the error. Observe the data (rostopic echo). Diagnose the node. Execute a fix."
        }
      ]
    }
  ]
};
