import type { LearningModule } from "@/lib/modules/types";

export const robotics_401_Module: LearningModule = {
  "id": "robotics-401",
  "title": "Robotics Systems Engineering",
  "description": "An advanced course on designing, verifying, and deploying robust robotic systems, covering system architecture, reliability engineering, and lifecycle governance.",
  "subject": "Robotics",
  "tags": [
    "systems engineering",
    "robotics",
    "advanced",
    "curriculum"
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
  "thumbnail": "/placeholders/lesson-robot-system-architecture.svg",
  "learningObjectives": [
    "Design a complete system architecture for a complex robotic application.",
    "Analyze system reliability and safety using standard engineering methods like FMEA and FTA.",
    "Develop a governance and deployment strategy for robotic fleets."
  ],
  "lessons": [
    {
      "id": "robotics-401-l01",
      "title": "Foundations of Robotic Systems",
      "type": "video",
      "duration": 15,
      "description": "Introduction to the V-model for development, requirements engineering, and defining system architecture for complex robotic platforms.",
      "learningAids": [
        {
          "id": "robotics-401-l01-a1",
          "type": "image",
          "title": "V-Model for Robotics Development",
          "content": "A diagram illustrating the V-model, showing the decomposition and requirements flow on the left side and the integration and verification flow on the right."
        },
        {
          "id": "robotics-401-l01-a2",
          "type": "animation",
          "title": "System Architecture Decomposition",
          "content": "An animated breakdown of a delivery drone's architecture into subsystems: perception, planning, control, and hardware."
        }
      ]
    },
    {
      "id": "robotics-401-l02",
      "title": "Lab: System Requirements Specification",
      "type": "interactive",
      "duration": 20,
      "description": "Practice defining and documenting system-level requirements for an autonomous warehouse robot.",
      "metadata": {
        "prompts": [
          "Define three functional requirements for the robot's navigation system.",
          "Specify a key non-functional requirement related to operational uptime.",
          "Explain how you would verify that the payload capacity requirement is met."
        ]
      },
      "learningAids": [
        {
          "id": "robotics-401-l02-a1",
          "type": "practice",
          "title": "Guided Practice: Writing Requirements",
          "content": "Use a provided template to write clear, testable, and unambiguous system requirements."
        },
        {
          "id": "robotics-401-l02-a2",
          "type": "visualPrompt",
          "title": "Warehouse Environment",
          "content": "An isometric view of a warehouse with aisles, shelves, and charging stations to contextualize the robot's operational domain."
        }
      ]
    },
    {
      "id": "robotics-401-l03",
      "title": "Checkpoint 1: System Design Principles",
      "type": "quiz",
      "duration": 10,
      "description": "Assess understanding of system architecture, requirements engineering, and the V-model.",
      "questions": [
        {
          "id": "robotics-401-l03-q1",
          "text": "In the V-model for systems engineering, what does the right side of the 'V' primarily represent?",
          "skillId": "robotics-401-skill-systems-model",
          "options": [
            {
              "id": "a",
              "text": "System decomposition and requirements definition"
            },
            {
              "id": "b",
              "text": "Integration, verification, and validation"
            },
            {
              "id": "c",
              "text": "Project management and cost analysis"
            },
            {
              "id": "d",
              "text": "Conceptual design and simulation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The right side of the V-model focuses on putting the components back together (integration) and testing them against the requirements defined on the left side (verification and validation)."
        },
        {
          "id": "robotics-401-l03-q2",
          "text": "Which of the following is the best example of a verifiable, non-functional requirement for a robotic arm?",
          "skillId": "robotics-401-skill-requirements",
          "options": [
            {
              "id": "a",
              "text": "The robot should be easy to use."
            },
            {
              "id": "b",
              "text": "The robot must be safe."
            },
            {
              "id": "c",
              "text": "The robot shall achieve a positioning repeatability of ±0.05mm."
            },
            {
              "id": "d",
              "text": "The robot will pick up parts."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Repeatability is a specific, measurable, and verifiable performance characteristic, which is a hallmark of a well-written non-functional requirement. The other options are either ambiguous or functional."
        }
      ]
    },
    {
      "id": "robotics-401-l04",
      "title": "System Reliability and Functional Safety",
      "type": "video",
      "duration": 18,
      "description": "Analyzing system reliability using Failure Mode and Effects Analysis (FMEA) and Fault Tree Analysis (FTA). Introduction to functional safety standards like ISO 13482.",
      "learningAids": [
        {
          "id": "robotics-401-l04-a1",
          "type": "image",
          "title": "FMEA Table Example",
          "content": "A sample FMEA table for a robotic gripper, detailing potential failure modes, their effects, severity, and mitigation strategies."
        },
        {
          "id": "robotics-401-l04-a2",
          "type": "animation",
          "title": "Building a Fault Tree",
          "content": "An animation constructing a Fault Tree for a mobile robot's braking system failure, showing the relationship between basic events and the top-level failure."
        }
      ]
    },
    {
      "id": "robotics-401-l05",
      "title": "Lab: Failure Mode Analysis",
      "type": "interactive",
      "duration": 25,
      "description": "Perform a simplified FMEA on a robot's perception subsystem, identifying potential failures and their impact.",
      "metadata": {
        "prompts": [
          "Identify a potential failure mode for a LiDAR sensor.",
          "Describe the potential effect of this failure on the overall robotic system.",
          "Propose a detection method and a mitigation strategy for this failure."
        ]
      },
      "learningAids": [
        {
          "id": "robotics-401-l05-a1",
          "type": "practice",
          "title": "Guided FMEA Worksheet",
          "content": "Fill out an interactive worksheet to analyze the failure modes of a perception system comprising a camera, LiDAR, and IMU."
        },
        {
          "id": "robotics-401-l05-a2",
          "type": "visualPrompt",
          "title": "Perception Subsystem Diagram",
          "content": "A block diagram showing the data flow from sensors (Camera, LiDAR, IMU) through a sensor fusion module to the planning system."
        }
      ]
    },
    {
      "id": "robotics-401-l06",
      "title": "Deployment and Lifecycle Governance",
      "type": "video",
      "duration": 15,
      "description": "Explore strategies for deploying robotic fleets, including remote monitoring, over-the-air (OTA) updates, and end-of-life (EOL) management.",
      "learningAids": [
        {
          "id": "robotics-401-l06-a1",
          "type": "image",
          "title": "Fleet Management Dashboard",
          "content": "A mockup of a dashboard for monitoring a fleet of robots, showing status, battery levels, error logs, and geographic locations."
        }
      ]
    },
    {
      "id": "robotics-401-l07",
      "title": "Final Project: System Design Brief",
      "type": "project",
      "duration": 120,
      "description": "Design a complete system architecture for an autonomous UV-C disinfection robot for hospitals. The submission must include a requirements document, a component block diagram, an FMEA, and a deployment plan.",
      "learningAids": [
        {
          "id": "robotics-401-l07-a1",
          "type": "template",
          "title": "System Design Document Template",
          "content": "A pre-formatted document to guide the creation of the final project submission."
        },
        {
          "id": "robotics-401-l07-a2",
          "type": "datasheet",
          "title": "Sample Component Datasheets",
          "content": "A collection of datasheets for common components like LiDAR sensors, motors, and single-board computers to inform design choices."
        }
      ]
    }
  ]
};
