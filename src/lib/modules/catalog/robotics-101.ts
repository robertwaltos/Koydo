import type { LearningModule } from "@/lib/modules/types";

export const Robotics101Module: LearningModule = {
  id: "robotics-101",
  title: "Robotics Foundations",
  description:
    "A comprehensive introduction to robotics covering robot anatomy, sensor systems, actuators, kinematics, control theory, autonomous navigation, and programming paradigms. Students explore how mechanical design, electronics, and software integrate to create machines that perceive, decide, and act in the physical world.",
  subject: "Engineering",
  tags: ["core", "curriculum", "interactive", "robotics", "engineering"],
  minAge: 16,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Define what constitutes a robot and classify robots by morphology and application domain",
    "Identify common sensor types and explain how sensor fusion builds a coherent world model",
    "Compare actuator technologies and calculate basic gear-ratio trade-offs",
    "Apply forward and inverse kinematics to a planar manipulator arm",
    "Describe PID control and distinguish open-loop from closed-loop systems",
    "Outline SLAM, path-planning algorithms, and obstacle-avoidance strategies",
    "Design simple robot behaviors using state machines and behavior trees"
  ],
  lessons: [
    /* ------------------------------------------------------------------ */
    /*  L01 – Video: What Is a Robot?                                     */
    /* ------------------------------------------------------------------ */
    {
      id: "robotics-101-l01",
      title: "What Is a Robot?",
      type: "video",
      duration: 10,
      chunks: [
          {
            id: "robotics-101-l01-c1",
            title: "What Is a Robot?",
            content: "A robot is a programmable machine capable of sensing its environment, making decisions, and performing physical actions. The word 'robot' originates from the Czech 'robota,' meaning forced labor, first used in Karel Čapek's 1920 play R.U.R. Modern robots range from stationary industrial arms welding car frames to autonomous drones surveying farmland. Every robot shares three core subsystems: perception (sensors), cognition (computation), and action (actuators). Degrees of freedom (DOF) describe how many independent motions a robot can make; a typical industrial arm has six DOF, allowing it to reach any position and orientation within its workspace."
          },
          {
            id: "robotics-101-l01-c2",
            title: "Types of Robots",
            content: "Robots are broadly classified into industrial, mobile, and humanoid categories. Industrial robots operate in fixed locations on assembly lines, performing tasks like welding, painting, and pick-and-place with sub-millimeter repeatability. Mobile robots move through their environment—wheeled rovers explore Mars, tracked robots inspect disaster sites, and aerial drones deliver packages. Humanoid robots mimic the human form to interact naturally with people and operate in spaces designed for humans. Other categories include surgical robots, collaborative robots (cobots), and swarm robots that coordinate collectively."
          },
          {
            id: "robotics-101-l01-c3",
            title: "History of Robotics",
            content: "The history of robotics stretches from ancient automata to today's AI-powered systems. George Devol patented the first programmable robot in 1954, and Unimate became the first industrial robot on a General Motors assembly line in 1961. The Stanford Arm (1969) introduced computer-controlled manipulation, while Shakey (1966) was the first mobile robot to reason about its actions. Today robotics impacts manufacturing, healthcare, agriculture, logistics, space exploration, and search-and-rescue. Understanding robot fundamentals prepares you to work across all these application domains."
          }
        ],
        flashcards: [
          { id: "robotics-101-l01-f1", front: "What three core subsystems does every robot share?", back: "Perception (sensors), cognition (computation), and action (actuators)." },
          { id: "robotics-101-l01-f2", front: "What does DOF stand for and why does it matter?", back: "Degrees of Freedom — the number of independent motions a robot can make, determining its workspace reachability." },
          { id: "robotics-101-l01-f3", front: "Name three broad categories of robots.", back: "Industrial robots, mobile robots, and humanoid robots." },
          { id: "robotics-101-l01-f4", front: "What was Unimate?", back: "The first industrial robot, installed on a General Motors assembly line in 1961." }
        ],
      learningAids: [
        { id: "robotics-101-l01-a1", type: "image", title: "Robot Classification Chart", content: "Visual taxonomy showing industrial, mobile, humanoid, and specialty robot categories with example images." },
        { id: "robotics-101-l01-a2", type: "animation", title: "Degrees of Freedom Demo", content: "Interactive 3D model of a 6-DOF arm highlighting each joint axis of rotation." }
      ]
    },
    /* ------------------------------------------------------------------ */
    /*  L02 – Interactive: Sensors and Perception                         */
    /* ------------------------------------------------------------------ */
    {
      id: "robotics-101-l02",
      title: "Sensors and Perception",
      type: "interactive",
      duration: 14,
      chunks: [
          {
            id: "robotics-101-l02-c1",
            title: "Sensor Types and Selection",
            content: "Sensors are the eyes, ears, and fingertips of a robot. Proprioceptive sensors measure internal state: rotary encoders track joint angles, inertial measurement units (IMUs) combine accelerometers and gyroscopes to estimate orientation, and current sensors monitor motor load. Exteroceptive sensors perceive the outside world: cameras capture rich visual data, lidar sweeps laser beams to build 3D point clouds, and ultrasonic sensors measure short-range distances using sound waves. Choosing the right sensor depends on range, resolution, update rate, cost, and environmental conditions like lighting or weather."
          },
          {
            id: "robotics-101-l02-c2",
            title: "Force, Proximity, and Tactile Sensors",
            content: "Force/torque sensors mounted at a robot's wrist or fingertips measure contact forces, enabling delicate tasks like inserting a peg into a hole or handling fragile objects. Infrared proximity sensors detect nearby obstacles cheaply but saturate in direct sunlight. Depth cameras such as structured-light or time-of-flight models provide dense depth maps ideal for object recognition and grasping. Tactile sensor arrays embedded in gripper pads give robots a sense of touch, reporting pressure distribution across a contact surface, which is critical for safe human-robot handovers."
          },
          {
            id: "robotics-101-l02-c3",
            title: "Sensor Fusion",
            content: "No single sensor is perfect, so robots use sensor fusion to combine data from multiple sources into a more accurate world model. A Kalman filter, for example, merges noisy IMU readings with intermittent GPS fixes to produce a smooth position estimate. More advanced approaches like Extended Kalman Filters (EKF) and particle filters handle nonlinear systems. Sensor fusion improves robustness: if one sensor fails or gives a bad reading, others compensate. This redundancy is essential for safety-critical applications such as autonomous vehicles and surgical robots."
          }
        ],
        flashcards: [
          { id: "robotics-101-l02-f1", front: "What is the difference between proprioceptive and exteroceptive sensors?", back: "Proprioceptive sensors measure the robot's internal state (joint angles, orientation); exteroceptive sensors perceive the external environment (distance, images)." },
          { id: "robotics-101-l02-f2", front: "How does lidar create a 3D map?", back: "Lidar emits laser pulses and measures the time-of-flight of reflections to calculate distances, sweeping across an area to build a 3D point cloud." },
          { id: "robotics-101-l02-f3", front: "What is sensor fusion?", back: "Combining data from multiple sensors (e.g., IMU + GPS) using algorithms like Kalman filters to produce a more accurate and robust estimate." },
          { id: "robotics-101-l02-f4", front: "Why are force/torque sensors important for manipulation?", back: "They measure contact forces at the wrist or fingertips, enabling the robot to perform delicate tasks and safe interactions with humans." }
        ],
        interactiveActivities: [{
          id: "robotics-101-l02-act1",
          type: "sorting_buckets",
          title: "Classify the Sensor",
          instructions: ["Drag each sensor into the correct category: Proprioceptive or Exteroceptive."],
          buckets: ["Proprioceptive", "Exteroceptive"],
          items: [
            { id: "s1", text: "Rotary Encoder", bucket: "Proprioceptive" },
            { id: "s2", text: "Lidar", bucket: "Exteroceptive" },
            { id: "s3", text: "IMU (Accelerometer + Gyroscope)", bucket: "Proprioceptive" },
            { id: "s4", text: "Camera", bucket: "Exteroceptive" },
            { id: "s5", text: "Current Sensor", bucket: "Proprioceptive" },
            { id: "s6", text: "Ultrasonic Range Finder", bucket: "Exteroceptive" }
          ]
        }],
      metadata: {
        prompts: [
          "Explain the trade-offs between lidar and camera-based perception.",
          "Describe a scenario where sensor fusion prevents a dangerous error.",
          "List three proprioceptive sensors and what each one measures."
        ]
      },
      learningAids: [
        { id: "robotics-101-l02-a1", type: "practice", title: "Sensor Selection Exercise", content: "Given a warehouse robot scenario, choose an appropriate sensor suite and justify each pick." }
      ]
    },
    /* ------------------------------------------------------------------ */
    /*  L03 – Quiz: Robot Basics & Sensors Checkpoint                     */
    /* ------------------------------------------------------------------ */
    {
      id: "robotics-101-l03",
      title: "Robot Basics & Sensors Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      },
      questions: [
        {
          id: "robotics-101-l03-q1",
          text: "Which subsystem is responsible for converting sensor data into decisions?",
          skillId: "robotics-101-skill-core",
          options: [
            { id: "a", text: "Perception" },
            { id: "b", text: "Cognition" },
            { id: "c", text: "Actuation" },
            { id: "d", text: "Transmission" }
          ],
          correctOptionId: "b",
          explanation: "Cognition (computation) processes sensor data and determines the robot's next action, sitting between perception and actuation in the sense-think-act loop."
        },
        {
          id: "robotics-101-l03-q2",
          text: "A 6-DOF industrial arm can reach any position and orientation in its workspace. What does DOF stand for?",
          skillId: "robotics-101-skill-core",
          options: [
            { id: "a", text: "Direction of Force" },
            { id: "b", text: "Degrees of Freedom" },
            { id: "c", text: "Digital Output Frequency" },
            { id: "d", text: "Depth of Field" }
          ],
          correctOptionId: "b",
          explanation: "Degrees of Freedom describes the number of independent axes along or around which a robot can move."
        },
        {
          id: "robotics-101-l03-q3",
          text: "Which sensor type measures a robot's own joint angles?",
          skillId: "robotics-101-skill-core",
          options: [
            { id: "a", text: "Lidar" },
            { id: "b", text: "Camera" },
            { id: "c", text: "Rotary encoder" },
            { id: "d", text: "Ultrasonic sensor" }
          ],
          correctOptionId: "c",
          explanation: "Rotary encoders are proprioceptive sensors attached to joint shafts that output angular position, often as digital pulse counts."
        },
        {
          id: "robotics-101-l03-q4",
          text: "What is the primary purpose of sensor fusion?",
          skillId: "robotics-101-skill-core",
          options: [
            { id: "a", text: "To reduce the number of sensors needed to zero" },
            { id: "b", text: "To combine data from multiple sensors for a more accurate estimate" },
            { id: "c", text: "To replace all sensors with a single camera" },
            { id: "d", text: "To increase the robot's maximum speed" }
          ],
          correctOptionId: "b",
          explanation: "Sensor fusion merges readings from different sensors (e.g., IMU + GPS) using algorithms like Kalman filters to improve accuracy and robustness."
        }
      ],
      learningAids: [
        { id: "robotics-101-l03-a1", type: "mnemonic", title: "Sense-Think-Act", content: "Remember the robot loop: Sense (perception) → Think (cognition) → Act (actuation)." }
      ]
    },
    /* ------------------------------------------------------------------ */
    /*  L04 – Video: Actuators and Motion                                 */
    /* ------------------------------------------------------------------ */
    {
      id: "robotics-101-l04",
      title: "Actuators and Motion",
      type: "video",
      duration: 11,
      chunks: [
          {
            id: "robotics-101-l04-c1",
            title: "DC, Stepper, and Servo Motors",
            content: "Actuators convert energy into mechanical motion—they are the muscles of a robot. DC motors are the workhorses of robotics: a brushed DC motor spins when voltage is applied, and reversing polarity reverses direction. Speed is proportional to voltage, while torque is proportional to current. Stepper motors divide a full rotation into discrete steps (commonly 200 per revolution), enabling precise open-loop positioning without feedback sensors. Servo motors combine a DC motor, gearbox, and position sensor in a compact package, accepting a pulse-width modulation (PWM) signal that commands a specific shaft angle."
          },
          {
            id: "robotics-101-l04-c2",
            title: "Hydraulic, Pneumatic Actuators and Gear Ratios",
            content: "Beyond electric motors, hydraulic actuators use pressurized fluid to generate enormous force, powering excavators and heavy-lift robot arms. Pneumatic actuators use compressed air for fast, lightweight motion common in factory grippers. Each technology has trade-offs: electric motors are precise and clean, hydraulics deliver high force-to-weight ratios but leak fluid, and pneumatics are fast but hard to position accurately. Gear ratios multiply torque at the cost of speed—a 10:1 gearbox makes the output shaft ten times stronger but ten times slower than the motor shaft, a fundamental trade-off in mechanism design."
          },
          {
            id: "robotics-101-l04-c3",
            title: "Motor Drivers and the H-Bridge",
            content: "Motor drivers bridge the gap between a low-power microcontroller and a high-current motor. The H-bridge circuit is the most common driver topology: four transistors arranged in an 'H' pattern let current flow through the motor in either direction, enabling forward, reverse, and braking. Integrated H-bridge chips like the L298N simplify wiring. For stepper motors, dedicated driver boards handle the sequencing of coil energizations. Understanding the electrical interface between controller and actuator is essential—incorrect wiring or missing flyback diodes can destroy components instantly."
          }
        ],
        flashcards: [
          { id: "robotics-101-l04-f1", front: "How does a brushed DC motor's speed relate to applied voltage?", back: "Speed is roughly proportional to voltage—higher voltage means faster rotation, while current determines torque." },
          { id: "robotics-101-l04-f2", front: "What advantage do stepper motors offer over plain DC motors?", back: "Stepper motors divide rotation into precise discrete steps, enabling accurate open-loop positioning without feedback sensors." },
          { id: "robotics-101-l04-f3", front: "What does a 10:1 gear ratio do?", back: "It multiplies output torque by 10 while dividing output speed by 10 compared to the motor shaft." },
          { id: "robotics-101-l04-f4", front: "What is an H-bridge?", back: "A circuit of four transistors that controls the direction of current through a motor, enabling forward, reverse, and braking." }
        ],
      learningAids: [
        { id: "robotics-101-l04-a1", type: "image", title: "Actuator Comparison Table", content: "Side-by-side comparison of DC motors, steppers, servos, hydraulics, and pneumatics across force, speed, precision, and cost." },
        { id: "robotics-101-l04-a2", type: "animation", title: "H-Bridge Current Flow", content: "Animated diagram showing transistor switching states for forward, reverse, and brake modes." }
      ]
    },
    /* ------------------------------------------------------------------ */
    /*  L05 – Interactive: Kinematics and Control                         */
    /* ------------------------------------------------------------------ */
    {
      id: "robotics-101-l05",
      title: "Kinematics and Control",
      type: "interactive",
      duration: 15,
      chunks: [
          {
            id: "robotics-101-l05-c1",
            title: "Forward Kinematics",
            content: "Kinematics is the study of motion without considering forces. Forward kinematics (FK) computes the end-effector position given known joint angles—essentially asking 'where is the hand if the shoulder is at 30° and the elbow at 45°?' For a planar two-link arm, FK uses trigonometry: x = L₁·cos(θ₁) + L₂·cos(θ₁+θ₂) and y = L₁·sin(θ₁) + L₂·sin(θ₁+θ₂). The Denavit-Hartenberg (DH) convention provides a systematic way to assign coordinate frames to each joint, producing a chain of 4×4 transformation matrices that compose into the full FK solution for arms of any complexity."
          },
          {
            id: "robotics-101-l05-c2",
            title: "Inverse Kinematics",
            content: "Inverse kinematics (IK) is the reverse problem: given a desired end-effector position, find the joint angles that achieve it. IK is generally harder than FK because multiple solutions (or none) may exist. For a 2-link planar arm, a closed-form geometric solution exists, but 6-DOF arms often require numerical methods like the Jacobian pseudo-inverse or iterative solvers. IK is crucial for task-space control—telling a robot 'move your hand to (x, y, z)' rather than specifying each joint angle individually. Most modern robot controllers handle IK internally."
          },
          {
            id: "robotics-101-l05-c3",
            title: "PID Control Systems",
            content: "Control systems keep a robot's actual state matching its desired state. A PID controller computes a correction signal from three terms: Proportional (reacts to current error), Integral (accounts for accumulated past error), and Derivative (predicts future error from the rate of change). Tuning the Kp, Ki, and Kd gains balances responsiveness against stability. Open-loop control sends commands without feedback—cheap but inaccurate. Closed-loop control uses sensor feedback to continuously adjust, essential for precision tasks. Most robotic joints run closed-loop PID at 1 kHz or faster."
          }
        ],
        flashcards: [
          { id: "robotics-101-l05-f1", front: "What does forward kinematics compute?", back: "The position and orientation of the end-effector given all joint angles." },
          { id: "robotics-101-l05-f2", front: "Why is inverse kinematics harder than forward kinematics?", back: "IK may have multiple valid solutions or no solution at all, and often requires numerical iterative methods." },
          { id: "robotics-101-l05-f3", front: "What do the P, I, and D terms in a PID controller represent?", back: "P = proportional to current error, I = integral of accumulated error, D = derivative predicting future error." },
          { id: "robotics-101-l05-f4", front: "What is the DH convention used for?", back: "A systematic method to assign coordinate frames to each robot joint, enabling computation of forward kinematics via transformation matrices." }
        ],
        interactiveActivities: [{
          id: "robotics-101-l05-act1",
          type: "matching_pairs",
          title: "Match the Concept",
          instructions: ["Match each kinematics or control term with its correct definition."],
          pairs: [
            { id: "p1", left: "Forward Kinematics", right: "Joint angles → end-effector position" },
            { id: "p2", left: "Inverse Kinematics", right: "Desired position → required joint angles" },
            { id: "p3", left: "PID Controller", right: "Correction signal from proportional, integral, and derivative terms" },
            { id: "p4", left: "DH Parameters", right: "Systematic coordinate frame assignment for serial chains" },
            { id: "p5", left: "Closed-Loop Control", right: "Uses sensor feedback to continuously adjust output" },
            { id: "p6", left: "Open-Loop Control", right: "Sends commands without measuring actual output" }
          ]
        }],
      metadata: {
        prompts: [
          "Compute the FK for a 2-link arm with L₁=1, L₂=1, θ₁=45°, θ₂=30°.",
          "Explain why a PID controller with too-high Kd gain can amplify sensor noise.",
          "Describe a real-world scenario where open-loop control is acceptable."
        ]
      },
      learningAids: [
        { id: "robotics-101-l05-a1", type: "practice", title: "PID Tuning Simulator", content: "Adjust Kp, Ki, Kd sliders and observe the step response of a simulated motor to understand overshoot, steady-state error, and oscillation." }
      ]
    },
    /* ------------------------------------------------------------------ */
    /*  L06 – Quiz: Actuators & Kinematics Checkpoint                     */
    /* ------------------------------------------------------------------ */
    {
      id: "robotics-101-l06",
      title: "Actuators & Kinematics Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      },
      questions: [
        {
          id: "robotics-101-l06-q1",
          text: "A stepper motor with 200 steps per revolution has a step angle of:",
          skillId: "robotics-101-skill-core",
          options: [
            { id: "a", text: "0.9°" },
            { id: "b", text: "1.8°" },
            { id: "c", text: "3.6°" },
            { id: "d", text: "7.2°" }
          ],
          correctOptionId: "b",
          explanation: "360° ÷ 200 steps = 1.8° per step. This is the most common step angle for standard stepper motors."
        },
        {
          id: "robotics-101-l06-q2",
          text: "Which actuator technology is best suited for extremely high-force applications like excavator arms?",
          skillId: "robotics-101-skill-core",
          options: [
            { id: "a", text: "Servo motors" },
            { id: "b", text: "Pneumatic cylinders" },
            { id: "c", text: "Hydraulic actuators" },
            { id: "d", text: "Stepper motors" }
          ],
          correctOptionId: "c",
          explanation: "Hydraulic actuators use pressurized fluid to generate enormous force, making them ideal for heavy machinery like excavators."
        },
        {
          id: "robotics-101-l06-q3",
          text: "In forward kinematics for a 2-link planar arm, what information is the input?",
          skillId: "robotics-101-skill-core",
          options: [
            { id: "a", text: "Desired end-effector position (x, y)" },
            { id: "b", text: "Joint angles (θ₁, θ₂) and link lengths (L₁, L₂)" },
            { id: "c", text: "Motor current and voltage" },
            { id: "d", text: "PID gain values (Kp, Ki, Kd)" }
          ],
          correctOptionId: "b",
          explanation: "Forward kinematics takes joint angles and link lengths as inputs and computes the resulting end-effector position."
        },
        {
          id: "robotics-101-l06-q4",
          text: "Which PID term corrects for accumulated steady-state error over time?",
          skillId: "robotics-101-skill-core",
          options: [
            { id: "a", text: "Proportional (P)" },
            { id: "b", text: "Integral (I)" },
            { id: "c", text: "Derivative (D)" },
            { id: "d", text: "Feedforward (F)" }
          ],
          correctOptionId: "b",
          explanation: "The Integral term sums past error over time and drives the correction needed to eliminate persistent steady-state offset."
        }
      ],
      learningAids: [
        { id: "robotics-101-l06-a1", type: "mnemonic", title: "PID Memory Aid", content: "P = Present error, I = past Integral of error, D = future Derivative prediction." }
      ]
    },
    /* ------------------------------------------------------------------ */
    /*  L07 – Video: Autonomy and Navigation                             */
    /* ------------------------------------------------------------------ */
    {
      id: "robotics-101-l07",
      title: "Autonomy and Navigation",
      type: "video",
      duration: 12,
      chunks: [
          {
            id: "robotics-101-l07-c1",
            title: "SLAM: Simultaneous Localization and Mapping",
            content: "Autonomous robots must solve three fundamental questions simultaneously: 'Where am I?' (localization), 'What does the world look like?' (mapping), and 'How do I get there?' (path planning). SLAM—Simultaneous Localization and Mapping—solves the first two together. As a robot moves through an unknown environment, it uses sensor data (typically lidar or camera) to build a map while simultaneously tracking its own position within that map. Popular SLAM algorithms include EKF-SLAM, graph-based SLAM, and visual SLAM (ORB-SLAM). SLAM is the backbone of autonomous vacuum cleaners, warehouse robots, and self-driving cars."
          },
          {
            id: "robotics-101-l07-c2",
            title: "Path Planning Algorithms",
            content: "Path planning finds a collision-free route from start to goal. Dijkstra's algorithm guarantees the shortest path on a weighted graph but explores many nodes. A* improves efficiency by adding a heuristic estimate of remaining distance, dramatically reducing search space. For high-dimensional configuration spaces (e.g., a robot arm), sampling-based planners like Rapidly-exploring Random Trees (RRT) and its optimal variant RRT* are preferred because they avoid explicitly constructing the full configuration space. Local planners like the Dynamic Window Approach handle real-time obstacle avoidance by evaluating velocity commands over short time horizons."
          },
          {
            id: "robotics-101-l07-c3",
            title: "Robot Operating System (ROS)",
            content: "The Robot Operating System (ROS) is an open-source middleware framework that provides libraries, tools, and conventions for building robot software. ROS uses a publish-subscribe messaging model: sensor nodes publish data to topics, and planning or control nodes subscribe to those topics. Key ROS packages include nav2 for navigation, MoveIt for manipulation planning, and tf2 for coordinate frame management. While not a real-time operating system itself, ROS integrates with real-time controllers through ros2_control. Understanding ROS is essential for modern robotics development, as it is used in research labs, startups, and enterprise robotics worldwide."
          }
        ],
        flashcards: [
          { id: "robotics-101-l07-f1", front: "What does SLAM stand for?", back: "Simultaneous Localization and Mapping — building a map and tracking position within it at the same time." },
          { id: "robotics-101-l07-f2", front: "How does A* improve on Dijkstra's algorithm?", back: "A* adds a heuristic estimate of remaining distance to the goal, reducing the number of nodes explored while still finding an optimal path." },
          { id: "robotics-101-l07-f3", front: "What is RRT used for?", back: "Rapidly-exploring Random Trees is a sampling-based path planner for high-dimensional spaces where grid-based methods are impractical." },
          { id: "robotics-101-l07-f4", front: "What communication model does ROS use?", back: "A publish-subscribe model where nodes publish messages to named topics and other nodes subscribe to receive them." }
        ],
      learningAids: [
        { id: "robotics-101-l07-a1", type: "image", title: "SLAM Pipeline Diagram", content: "Flowchart showing sensor input → feature extraction → data association → map update → pose correction loop." },
        { id: "robotics-101-l07-a2", type: "animation", title: "A* vs Dijkstra Visualization", content: "Side-by-side animated grid search comparing node expansion between Dijkstra and A* with a Euclidean heuristic." }
      ]
    },
    /* ------------------------------------------------------------------ */
    /*  L08 – Interactive: Robot Programming                              */
    /* ------------------------------------------------------------------ */
    {
      id: "robotics-101-l08",
      title: "Robot Programming",
      type: "interactive",
      duration: 14,
      chunks: [
          {
            id: "robotics-101-l08-c1",
            title: "Finite State Machines",
            content: "State machines are the simplest architecture for robot behavior. Each state represents a distinct activity (e.g., 'Searching,' 'Approaching,' 'Grasping'), and transitions are triggered by sensor events or conditions. A finite state machine (FSM) is easy to understand and implement but becomes unwieldy as complexity grows—adding a new behavior may require modifying many transitions. Hierarchical state machines (HFSM) mitigate this by nesting states, allowing a high-level 'Navigate' state to contain sub-states like 'Plan Path' and 'Follow Path,' keeping the overall design manageable."
          },
          {
            id: "robotics-101-l08-c2",
            title: "Behavior Trees",
            content: "Behavior trees (BTs) offer a modular alternative to state machines. A BT is a directed tree whose internal nodes are control-flow nodes (Sequence, Selector, Parallel) and whose leaves are action or condition nodes. A Sequence node runs children left-to-right, succeeding only if all succeed—ideal for ordered tasks. A Selector tries children until one succeeds—useful for fallback strategies. BTs are popular in game AI and increasingly in robotics because subtrees can be developed, tested, and reused independently, making the system scalable. ROS 2's nav2 stack uses behavior trees for navigation logic."
          },
          {
            id: "robotics-101-l08-c3",
            title: "Real-Time Systems and Safety Standards",
            content: "Real-time constraints mean a robot's software must respond within guaranteed time bounds—missing a motor control deadline can cause physical damage. Real-time operating systems (RTOS) like FreeRTOS or RT-Linux provide deterministic scheduling. Safety standards such as ISO 10218 define requirements for industrial robot safety, including emergency stop circuits, speed limits during human proximity, and risk assessment procedures. Collaborative robots (cobots) follow ISO/TS 15066, which specifies force and pressure limits for safe human contact. Understanding these standards is essential for deploying robots in workplaces alongside people."
          }
        ],
        flashcards: [
          { id: "robotics-101-l08-f1", front: "What is a finite state machine in robotics?", back: "A model where the robot occupies one state at a time (e.g., Searching, Grasping) and transitions between states based on sensor events or conditions." },
          { id: "robotics-101-l08-f2", front: "How does a Sequence node in a behavior tree work?", back: "It runs child nodes left-to-right and succeeds only if all children succeed; it fails as soon as any child fails." },
          { id: "robotics-101-l08-f3", front: "What does ISO 10218 cover?", back: "Safety requirements for industrial robots, including emergency stops, speed limits near humans, and risk assessment procedures." },
          { id: "robotics-101-l08-f4", front: "Why are real-time operating systems important in robotics?", back: "They guarantee that critical tasks (like motor control) execute within strict time deadlines, preventing physical damage or unsafe behavior." }
        ],
        interactiveActivities: [{
          id: "robotics-101-l08-act1",
          type: "sorting_buckets",
          title: "State Machine vs Behavior Tree",
          instructions: ["Drag each characteristic into the correct architecture category."],
          buckets: ["State Machine", "Behavior Tree"],
          items: [
            { id: "bp1", text: "Uses Sequence and Selector control nodes", bucket: "Behavior Tree" },
            { id: "bp2", text: "Transitions triggered by events between fixed states", bucket: "State Machine" },
            { id: "bp3", text: "Subtrees can be reused independently", bucket: "Behavior Tree" },
            { id: "bp4", text: "Adding new behaviors may require modifying many transitions", bucket: "State Machine" },
            { id: "bp5", text: "Used by ROS 2 nav2 for navigation logic", bucket: "Behavior Tree" },
            { id: "bp6", text: "Simplest architecture, easy for small systems", bucket: "State Machine" }
          ]
        }],
      metadata: {
        prompts: [
          "Design a state machine for a robot that searches for, picks up, and delivers an object.",
          "Explain why behavior trees scale better than flat state machines.",
          "List two ISO standards relevant to human-robot collaboration."
        ]
      },
      learningAids: [
        { id: "robotics-101-l08-a1", type: "practice", title: "Behavior Tree Builder", content: "Construct a behavior tree for a delivery robot using drag-and-drop Sequence, Selector, and Action nodes." }
      ]
    },
    /* ------------------------------------------------------------------ */
    /*  L09 – Quiz: Autonomy & Programming Checkpoint                    */
    /* ------------------------------------------------------------------ */
    {
      id: "robotics-101-l09",
      title: "Autonomy & Programming Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      },
      questions: [
        {
          id: "robotics-101-l09-q1",
          text: "SLAM allows a robot to simultaneously:",
          skillId: "robotics-101-skill-core",
          options: [
            { id: "a", text: "Sense temperature and humidity" },
            { id: "b", text: "Build a map and localize itself within it" },
            { id: "c", text: "Charge its battery and plan paths" },
            { id: "d", text: "Communicate with other robots and humans" }
          ],
          correctOptionId: "b",
          explanation: "SLAM (Simultaneous Localization and Mapping) constructs a map of the environment while tracking the robot's position within that map."
        },
        {
          id: "robotics-101-l09-q2",
          text: "Which path-planning algorithm uses random sampling to explore high-dimensional configuration spaces?",
          skillId: "robotics-101-skill-core",
          options: [
            { id: "a", text: "Dijkstra's algorithm" },
            { id: "b", text: "A*" },
            { id: "c", text: "RRT (Rapidly-exploring Random Trees)" },
            { id: "d", text: "Breadth-first search" }
          ],
          correctOptionId: "c",
          explanation: "RRT grows a tree by randomly sampling the configuration space and extending toward samples, making it practical for high-DOF robots."
        },
        {
          id: "robotics-101-l09-q3",
          text: "In a behavior tree, which node type tries children in order and succeeds when the first child succeeds?",
          skillId: "robotics-101-skill-core",
          options: [
            { id: "a", text: "Sequence" },
            { id: "b", text: "Selector (Fallback)" },
            { id: "c", text: "Parallel" },
            { id: "d", text: "Decorator" }
          ],
          correctOptionId: "b",
          explanation: "A Selector (Fallback) node tries children left-to-right and returns success as soon as any child succeeds, providing fallback alternatives."
        },
        {
          id: "robotics-101-l09-q4",
          text: "Which safety standard specifically addresses force and pressure limits for collaborative robots working near humans?",
          skillId: "robotics-101-skill-core",
          options: [
            { id: "a", text: "IEEE 802.11" },
            { id: "b", text: "ISO 10218" },
            { id: "c", text: "ISO/TS 15066" },
            { id: "d", text: "IEC 61131" }
          ],
          correctOptionId: "c",
          explanation: "ISO/TS 15066 specifies biomechanical limits on force and pressure for safe physical human-robot interaction with collaborative robots."
        }
      ],
      learningAids: [
        { id: "robotics-101-l09-a1", type: "mnemonic", title: "Navigation Trio", content: "Where am I? (Localization) + What's around me? (Mapping) + How do I get there? (Planning) = autonomous navigation." }
      ]
    },
    /* ------------------------------------------------------------------ */
    /*  L10 – Quiz: Mastery Quiz – Robotics                              */
    /* ------------------------------------------------------------------ */
    {
      id: "robotics-101-l10",
      title: "Mastery Quiz: Robotics",
      type: "quiz",
      duration: 10,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      },
      questions: [
        {
          id: "robotics-101-l10-q1",
          text: "A warehouse robot uses wheel encoders, an IMU, and a ceiling-mounted camera system. Combining these data streams to estimate position is an example of:",
          skillId: "robotics-101-skill-core",
          options: [
            { id: "a", text: "Inverse kinematics" },
            { id: "b", text: "Sensor fusion" },
            { id: "c", text: "Behavior tree traversal" },
            { id: "d", text: "Gear ratio optimization" }
          ],
          correctOptionId: "b",
          explanation: "Sensor fusion combines data from multiple sensor modalities (encoders, IMU, camera) to produce a more accurate and robust state estimate."
        },
        {
          id: "robotics-101-l10-q2",
          text: "An engineer wants a robot arm to move its gripper to world coordinates (0.5, 0.3, 0.8). Which computation must the controller perform?",
          skillId: "robotics-101-skill-core",
          options: [
            { id: "a", text: "Forward kinematics" },
            { id: "b", text: "SLAM" },
            { id: "c", text: "Inverse kinematics" },
            { id: "d", text: "PID auto-tuning" }
          ],
          correctOptionId: "c",
          explanation: "Inverse kinematics converts a desired end-effector position in Cartesian space into the joint angles needed to reach it."
        },
        {
          id: "robotics-101-l10-q3",
          text: "An H-bridge motor driver uses four transistors arranged so that current can flow through the motor in either direction. What is the third useful mode besides forward and reverse?",
          skillId: "robotics-101-skill-core",
          options: [
            { id: "a", text: "Amplification" },
            { id: "b", text: "Frequency modulation" },
            { id: "c", text: "Braking" },
            { id: "d", text: "Wireless transmission" }
          ],
          correctOptionId: "c",
          explanation: "By shorting both motor terminals to the same rail, the H-bridge creates a braking mode that rapidly decelerates the motor."
        },
        {
          id: "robotics-101-l10-q4",
          text: "A robot navigating a cluttered office uses A* on an occupancy grid. Compared to Dijkstra's algorithm, A* explores fewer nodes because it:",
          skillId: "robotics-101-skill-core",
          options: [
            { id: "a", text: "Ignores obstacles entirely" },
            { id: "b", text: "Uses a heuristic to estimate remaining cost to the goal" },
            { id: "c", text: "Only considers the four cardinal directions" },
            { id: "d", text: "Randomly samples the grid" }
          ],
          correctOptionId: "b",
          explanation: "A* combines actual cost-so-far with a heuristic estimate of cost-to-go (e.g., Euclidean distance), guiding the search toward the goal and reducing explored nodes."
        }
      ],
      learningAids: [
        { id: "robotics-101-l10-a1", type: "mnemonic", title: "Full Robot Stack", content: "Sensors → Fusion → Kinematics → Control → Planning → Behavior Architecture — the layers of a complete robotic system." }
      ]
    }
  ]
};
