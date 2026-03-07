import type { LearningModule } from "@/lib/modules/types";

export const robotics_101_Module: LearningModule = {
  "id": "robotics-101",
  "title": "Robotics Foundations",
  "description": "A comprehensive introduction to robotics covering robot anatomy, sensor systems, actuators, kinematics, control theory, autonomous navigation, and programming paradigms. Students explore how mechanical design, electronics, and software integrate to create machines that perceive, decide, and act in the physical world.",
  "subject": "Engineering",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "robotics",
    "engineering"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Define what constitutes a robot and classify robots by morphology and application domain",
    "Identify common sensor types and explain how sensor fusion builds a coherent world model",
    "Compare actuator technologies and calculate basic gear-ratio trade-offs",
    "Apply forward and inverse kinematics to a planar manipulator arm",
    "Describe PID control and distinguish open-loop from closed-loop systems",
    "Outline SLAM, path-planning algorithms, and obstacle-avoidance strategies",
    "Design simple robot behaviors using state machines and behavior trees"
  ],
  "lessons": [
    {
      "id": "robotics-101-l01",
      "title": "What Is a Robot?",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "robotics-101-l01-c1",
          "title": "Defining a Robot",
          "content": "A robot is a machine that can be programmed to perform tasks automatically, operating on its own without needing constant human control. The word 'robot' comes from the Czech word 'robota,' which translates to 'forced labor.' This term was first introduced in a play written by Karel Čapek in 1920, where robots were depicted as workers. Today, robots come in many different shapes and sizes. Some are stationary, like industrial arms that help assemble cars in factories, while others are mobile, like drones that fly over fields to monitor crops. A key concept in robotics is 'degrees of freedom' (DOF), which describes how many different independent movements a robot can make. For instance, a typical industrial robot arm has six degrees of freedom, allowing it to reach any position and orientation within its workspace. This flexibility is crucial for performing complex tasks efficiently and accurately."
        },
        {
          "id": "robotics-101-l01-c2",
          "title": "The Sense-Think-Act Loop",
          "content": "Every robot operates on a fundamental principle known as the Sense-Think-Act loop. This loop describes the three essential components that allow a robot to function. First is Perception (Sense), which involves sensors that collect data from the environment, such as cameras for vision, microphones for sound, and lidar for distance measurement. Next is Cognition (Think), which refers to the robot's 'brain'—the onboard computer that processes sensor data and makes decisions. This can range from a simple microcontroller, like an Arduino, which is great for basic tasks, to a more powerful single-board computer, like a Raspberry Pi or NVIDIA Jetson, which can run complex algorithms for navigation and computer vision. Finally, Action includes the mechanical parts, or actuators, that allow the robot to move and interact with the world, such as motors, joints, and grippers. This continuous cycle of sensing, thinking, and acting is what enables a robot to perform its tasks autonomously."
        },
        {
          "id": "robotics-101-l01-c3",
          "title": "Types of Robots",
          "content": "Robots can be categorized into several distinct types based on their functions and the environments in which they operate. The three main categories are industrial robots, mobile robots, and humanoid robots.\nIndustrial robots are typically found in factories and manufacturing plants. They are designed to perform specific tasks with remarkable accuracy and speed. For example, these robots can weld metal pieces together, paint surfaces, and move parts from one place to another on an assembly line. Their precision is so high that they can repeat tasks with sub-millimeter accuracy, which is essential for producing high-quality products.\nMobile robots, on the other hand, are built to navigate and move through various environments. A great example of this is wheeled robots that explore the surface of Mars, helping scientists gather data about the planet. There are also tracked robots that can inspect areas after disasters, ensuring safety and assessing damage. Additionally, flying drones are becoming increasingly popular for delivering packages, showcasing how mobile robots can be used in everyday life.\nHumanoid robots are fascinating because they are designed to look and act like humans. This design allows them to interact more naturally with people, making them suitable for roles in environments built for human use, such as homes or offices.\nBeyond these main types, there are also specialized robots like surgical robots that assist doctors during medical procedures, collaborative robots (often called cobots) that work alongside humans to enhance productivity, and swarm robots that work together in groups to complete tasks efficiently. Each type of robot plays a unique role in our world, contributing to advancements in technology and improving our daily lives."
        },
        {
          "id": "robotics-101-l01-c4",
          "title": "History of Robotics",
          "content": "The fascinating history of robotics is a journey that begins long ago, with the creation of simple machines that could perform basic tasks. These early inventions laid the groundwork for what would eventually evolve into the sophisticated robots we see today. One of the most important milestones in this journey occurred in 1954 when George Devol invented the first programmable robot, known as Unimate. This groundbreaking robot made history by becoming the first industrial robot to work on an assembly line at General Motors in 1961, revolutionizing the manufacturing process.\nAs technology advanced, so did the capabilities of robots. In 1969, the Stanford Arm was introduced, which allowed for precise computer-controlled movements, enabling robots to perform tasks with greater accuracy. Another significant development came in 1966 with the creation of Shakey, the first mobile robot that could reason about its actions and navigate its environment. This was a major leap forward in robotics, as it combined mobility with decision-making abilities.\nToday, robots are integral to many different fields, including manufacturing, where they help produce goods efficiently, healthcare, where they assist in surgeries and patient care, agriculture, where they aid in planting and harvesting crops, logistics, where they streamline supply chains, space exploration, where they help us understand the universe, and search-and-rescue missions, where they can locate and assist people in emergencies.\nUnderstanding the fundamentals of robotics is crucial for anyone interested in pursuing a career in these exciting and rapidly evolving areas. By learning about the history and development of robots, you can better appreciate their impact on our world and prepare yourself for future opportunities in this dynamic field."
        }
      ],
      "flashcards": [
        {
          "id": "robotics-101-l01-f1",
          "front": "What three core subsystems does every robot share?",
          "back": "Perception (sensors), cognition (computation), and action (actuators)."
        },
        {
          "id": "robotics-101-l01-f2",
          "front": "What does DOF stand for and why does it matter?",
          "back": "Degrees of Freedom — the number of independent motions a robot can make, determining its workspace reachability."
        },
        {
          "id": "robotics-101-l01-f3",
          "front": "Name three broad categories of robots.",
          "back": "Industrial robots, mobile robots, and humanoid robots."
        },
        {
          "id": "robotics-101-l01-f4",
          "front": "What was Unimate?",
          "back": "The first industrial robot, installed on a General Motors assembly line in 1961."
        }
      ],
      "learningAids": [
        {
          "id": "robotics-101-l01-a1",
          "type": "image",
          "title": "Robot Classification Chart",
          "content": "Visual taxonomy showing industrial, mobile, humanoid, and specialty robot categories with example images."
        },
        {
          "id": "robotics-101-l01-a2",
          "type": "animation",
          "title": "Degrees of Freedom Demo",
          "content": "Interactive 3D model of a 6-DOF arm highlighting each joint axis of rotation."
        }
      ]
    },
    {
      "id": "robotics-101-l02",
      "title": "Sensors and Perception",
      "type": "interactive",
      "duration": 14,
      "chunks": [
        {
          "id": "robotics-101-l02-c1",
          "title": "Sensor Types and Selection",
          "content": "Sensors play a vital role in robotics, functioning like the eyes, ears, and fingers of a robot. They allow robots to gather information about themselves and their surroundings. There are two primary categories of sensors: proprioceptive and exteroceptive. Proprioceptive sensors are essential for helping robots understand their internal conditions. For instance, rotary encoders are used to track the angles of the robot's joints, providing feedback on its position. Inertial Measurement Units (IMUs) are another type of proprioceptive sensor that combines accelerometers and gyroscopes to help determine the robot's orientation in space. Additionally, current sensors monitor the load on the motors, ensuring that they operate efficiently and safely.\nOn the other hand, exteroceptive sensors enable robots to perceive the world around them. Cameras are a common type of exteroceptive sensor that can capture detailed images, allowing robots to recognize objects and navigate their environment. Lidar technology uses laser beams to create three-dimensional maps of the surroundings, which is particularly useful for tasks like autonomous driving. Ultrasonic sensors, which measure distances using sound waves, are also important for helping robots avoid obstacles and navigate effectively.\nWhen it comes to selecting the right sensor for a specific task, several factors must be taken into account. These include the sensor's range (how far it can detect), resolution (the detail it can capture), update rate (how quickly it can provide data), cost, and the environmental conditions it will operate in, such as lighting or weather. Understanding these factors is crucial for building effective robotic systems that can perform their tasks reliably and safely."
        },
        {
          "id": "robotics-101-l02-c2",
          "title": "Force, Proximity, and Tactile Sensors",
          "content": "Force and tactile sensors play a crucial role in helping robots interact gently and safely with their surroundings. For example, force or torque sensors can be strategically placed on a robot's wrist or fingertips. These sensors measure the amount of force being applied, which is essential for performing delicate tasks. Imagine a robot trying to insert a peg into a hole or carefully handling a fragile item like a glass vase. With the help of these sensors, the robot can adjust its grip to avoid applying too much pressure, ensuring that it doesn't break or damage the object.\nAnother important type of sensor is the infrared proximity sensor. These sensors help robots detect nearby objects, which is particularly useful for avoiding collisions. However, it's important to note that they may struggle to function properly in bright sunlight, which can affect their performance.\nDepth cameras, which can be either structured-light or time-of-flight models, are also valuable tools in robotics. They provide detailed depth information that helps robots recognize and grasp objects accurately. This technology allows robots to create a three-dimensional map of their environment, making it easier to identify where objects are located.\nLastly, tactile sensor arrays are embedded in the grippers of robots, giving them a sense of touch. These sensors report how pressure is distributed across the surface of an object. This feedback is critical for safe human-robot interactions, especially when passing objects between people and robots. By understanding how much pressure to apply, robots can ensure that they handle items safely and effectively, making them more reliable partners in various tasks."
        },
        {
          "id": "robotics-101-l02-c3",
          "title": "Sensor Fusion",
          "content": "Robots are amazing machines that can help us in many ways, but they need to understand their surroundings to work effectively. Since no single sensor can give us all the information we need, robots often use a smart technique called sensor fusion. This technique combines data from different sensors to create a clearer and more accurate picture of the environment around them.\nFor instance, imagine a robot that uses an Inertial Measurement Unit (IMU) to sense its movement. Sometimes, this sensor might give us a bit of noisy data, which means it might not be perfectly accurate. At the same time, the robot can also use GPS data to know where it is, but GPS signals can sometimes be weak or unavailable. By using a Kalman filter, the robot can blend these two types of information together. This helps the robot make a smoother and more reliable estimate of its position, even when one of the sensors isn't working perfectly.\nThere are even more advanced techniques, like Extended Kalman Filters (EKF) and particle filters, which are used to deal with more complicated situations where the environment might change rapidly. The best part about sensor fusion is that it makes robots more dependable. If one sensor stops working or gives a wrong reading, the other sensors can step in to provide the correct information. This is especially important in situations where safety is crucial, like in self-driving cars or robots used in surgeries, where making the right decisions is vital for everyone's safety."
        }
      ],
      "flashcards": [
        {
          "id": "robotics-101-l02-f1",
          "front": "What is the difference between proprioceptive and exteroceptive sensors?",
          "back": "Proprioceptive sensors measure the robot's internal state (joint angles, orientation); exteroceptive sensors perceive the external environment (distance, images)."
        },
        {
          "id": "robotics-101-l02-f2",
          "front": "How does lidar create a 3D map?",
          "back": "Lidar emits laser pulses and measures the time-of-flight of reflections to calculate distances, sweeping across an area to build a 3D point cloud."
        },
        {
          "id": "robotics-101-l02-f3",
          "front": "What is sensor fusion?",
          "back": "Combining data from multiple sensors (e.g., IMU + GPS) using algorithms like Kalman filters to produce a more accurate and robust estimate."
        },
        {
          "id": "robotics-101-l02-f4",
          "front": "Why are force/torque sensors important for manipulation?",
          "back": "They measure contact forces at the wrist or fingertips, enabling the robot to perform delicate tasks and safe interactions with humans."
        }
      ],
      "interactiveActivities": [
        {
          "id": "robotics-101-l02-act1",
          "type": "sorting_buckets",
          "title": "Classify the Sensor",
          "instructions": [
            "Drag each sensor into the correct category: Proprioceptive or Exteroceptive."
          ],
          "buckets": [
            "Proprioceptive",
            "Exteroceptive"
          ],
          "items": [
            {
              "id": "s1",
              "text": "Rotary Encoder",
              "bucket": "Proprioceptive"
            },
            {
              "id": "s2",
              "text": "Lidar",
              "bucket": "Exteroceptive"
            },
            {
              "id": "s3",
              "text": "IMU (Accelerometer + Gyroscope)",
              "bucket": "Proprioceptive"
            },
            {
              "id": "s4",
              "text": "Camera",
              "bucket": "Exteroceptive"
            },
            {
              "id": "s5",
              "text": "Current Sensor",
              "bucket": "Proprioceptive"
            },
            {
              "id": "s6",
              "text": "Ultrasonic Range Finder",
              "bucket": "Exteroceptive"
            }
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Explain the trade-offs between lidar and camera-based perception.",
          "Describe a scenario where sensor fusion prevents a dangerous error.",
          "List three proprioceptive sensors and what each one measures."
        ]
      },
      "learningAids": [
        {
          "id": "robotics-101-l02-a1",
          "type": "practice",
          "title": "Sensor Selection Exercise",
          "content": "Given a warehouse robot scenario, choose an appropriate sensor suite and justify each pick."
        },
        {
          "id": "robotics-101-l02-a2",
          "type": "image",
          "title": "Multi-Sensor Scene Perception",
          "content": "A side-by-side visualization showing how a camera (RGB image), a depth camera (depth map), and a lidar (point cloud) perceive the same room with furniture and obstacles."
        }
      ]
    },
    {
      "id": "robotics-101-l03",
      "title": "Robot Basics & Sensors Checkpoint",
      "type": "quiz",
      "duration": 8,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "questions": [
        {
          "id": "robotics-101-l03-q1",
          "text": "Which subsystem is responsible for converting sensor data into decisions?",
          "skillId": "robotics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Perception"
            },
            {
              "id": "b",
              "text": "Cognition"
            },
            {
              "id": "c",
              "text": "Actuation"
            },
            {
              "id": "d",
              "text": "Transmission"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Cognition (computation) processes sensor data and determines the robot's next action, sitting between perception and actuation in the sense-think-act loop."
        },
        {
          "id": "robotics-101-l03-q2",
          "text": "A 6-DOF industrial arm can reach any position and orientation in its workspace. What does DOF stand for?",
          "skillId": "robotics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Direction of Force"
            },
            {
              "id": "b",
              "text": "Degrees of Freedom"
            },
            {
              "id": "c",
              "text": "Digital Output Frequency"
            },
            {
              "id": "d",
              "text": "Depth of Field"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Degrees of Freedom describes the number of independent axes along or around which a robot can move."
        },
        {
          "id": "robotics-101-l03-q3",
          "text": "Which sensor type measures a robot's own joint angles?",
          "skillId": "robotics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Lidar"
            },
            {
              "id": "b",
              "text": "Camera"
            },
            {
              "id": "c",
              "text": "Rotary encoder"
            },
            {
              "id": "d",
              "text": "Ultrasonic sensor"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Rotary encoders are proprioceptive sensors attached to joint shafts that output angular position, often as digital pulse counts."
        },
        {
          "id": "robotics-101-l03-q4",
          "text": "What is the primary purpose of sensor fusion?",
          "skillId": "robotics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To reduce the number of sensors needed to zero"
            },
            {
              "id": "b",
              "text": "To combine data from multiple sensors for a more accurate estimate"
            },
            {
              "id": "c",
              "text": "To replace all sensors with a single camera"
            },
            {
              "id": "d",
              "text": "To increase the robot's maximum speed"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Sensor fusion merges readings from different sensors (e.g., IMU + GPS) using algorithms like Kalman filters to improve accuracy and robustness."
        }
      ],
      "learningAids": [
        {
          "id": "robotics-101-l03-a1",
          "type": "mnemonic",
          "title": "Sense-Think-Act",
          "content": "Remember the robot loop: Sense (perception) → Think (cognition) → Act (actuation)."
        }
      ]
    },
    {
      "id": "robotics-101-l04",
      "title": "Actuators and Motion",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "robotics-101-l04-c1",
          "title": "DC, Stepper, and Servo Motors",
          "content": "Actuators are essential components of robots that transform energy into movement, similar to how muscles function in our bodies. One of the most widely used types of actuators is the DC motor. When you apply voltage to a brushed DC motor, it begins to spin. If you change the direction of the voltage, the motor will spin in the opposite direction. This means that the speed at which the motor spins is directly related to the voltage applied, while the torque, or turning force, it generates is linked to the current flowing through it.\nAnother fascinating type of actuator is the stepper motor. Unlike DC motors, stepper motors break down a full rotation into smaller, precise steps—typically 200 steps for each complete revolution. This feature allows for accurate positioning without the need for additional feedback sensors, making them ideal for applications where precision is crucial.\nLastly, we have servo motors, which are a compact and efficient combination of a DC motor, a gearbox, and a position sensor. These motors are designed to accept pulse-width modulation (PWM) signals, which instruct them to move to a specific angle. This capability makes servo motors incredibly useful in robotics, where precise control of movement is often required. Understanding these different types of actuators is fundamental for anyone interested in building and programming robots, as they play a key role in how robots interact with their environment."
        },
        {
          "id": "robotics-101-l04-c2",
          "title": "Hydraulic, Pneumatic Actuators and Gear Ratios",
          "content": "In the fascinating world of robotics, we encounter various types of actuators that help machines move and perform tasks. Beyond the commonly known electric motors, we have hydraulic and pneumatic actuators, each designed for specific functions. Hydraulic actuators are remarkable because they use pressurized fluid to generate a significant amount of force. This makes them perfect for heavy machinery, such as excavators and robotic arms that need to lift and move heavy objects with ease. On the other hand, pneumatic actuators utilize compressed air to create quick and lightweight movements. This feature makes them particularly useful in environments like factories, where they are often found in grippers that handle items swiftly and efficiently.\nHowever, it's important to understand that each type of actuator comes with its own set of advantages and disadvantages. For instance, electric motors are known for their precision and cleanliness, making them ideal for tasks that require accuracy. In contrast, hydraulic systems can produce a high force-to-weight ratio, which is beneficial for lifting heavy loads, but they may also have issues with leaking fluid. Pneumatic systems, while fast and efficient, can sometimes be challenging to control accurately, which can lead to difficulties in precise movements.\nAnother crucial concept in robotics is the use of gear ratios. Gear ratios play a vital role in how motors operate within robotic systems. They can significantly increase the torque output of a motor, which is the force that causes rotation, while simultaneously reducing its speed. For example, a gear ratio of 10:1 means that the output shaft will be ten times stronger than the motor shaft, but it will also turn ten times slower. This trade-off is essential to consider when designing robotic mechanisms, as it affects how the robot will perform its tasks. Understanding these principles helps engineers create more effective and efficient robotic systems."
        },
        {
          "id": "robotics-101-l04-c3",
          "title": "Motor Drivers and the H-Bridge",
          "content": "Motor drivers play a crucial role in robotics by acting as a bridge between low-power microcontrollers and high-current motors. These drivers are necessary because microcontrollers, which are the brains of the robot, often cannot provide enough power to drive larger motors directly. One of the most widely used types of motor drivers is the H-bridge circuit. This innovative circuit is designed with four transistors arranged in a shape that resembles the letter 'H'. This arrangement allows electrical current to flow through the motor in both directions, which is essential for enabling the motor to move forward, backward, and even to stop quickly, a function known as braking.\nTo simplify the wiring process, engineers often use integrated H-bridge chips, such as the popular L298N. These chips combine multiple components into a single package, making it easier to connect everything together. When working with stepper motors, which are used for precise movements, dedicated driver boards are employed. These boards are responsible for managing the sequence in which the motor coils are energized, ensuring smooth and accurate motion.\nIt's very important to understand how to properly connect the controller to the actuator. If the wiring is done incorrectly or if protective components, like flyback diodes, are missing, it can lead to serious damage to the robot's components. Therefore, taking the time to learn about these connections and ensuring everything is set up correctly is vital for building a successful robotic system."
        }
      ],
      "flashcards": [
        {
          "id": "robotics-101-l04-f1",
          "front": "How does a brushed DC motor's speed relate to applied voltage?",
          "back": "Speed is roughly proportional to voltage—higher voltage means faster rotation, while current determines torque."
        },
        {
          "id": "robotics-101-l04-f2",
          "front": "What advantage do stepper motors offer over plain DC motors?",
          "back": "Stepper motors divide rotation into precise discrete steps, enabling accurate open-loop positioning without feedback sensors."
        },
        {
          "id": "robotics-101-l04-f3",
          "front": "What does a 10:1 gear ratio do?",
          "back": "It multiplies output torque by 10 while dividing output speed by 10 compared to the motor shaft."
        },
        {
          "id": "robotics-101-l04-f4",
          "front": "What is an H-bridge?",
          "back": "A circuit of four transistors that controls the direction of current through a motor, enabling forward, reverse, and braking."
        }
      ],
      "learningAids": [
        {
          "id": "robotics-101-l04-a1",
          "type": "image",
          "title": "Actuator Comparison Table",
          "content": "Side-by-side comparison of DC motors, steppers, servos, hydraulics, and pneumatics across force, speed, precision, and cost."
        },
        {
          "id": "robotics-101-l04-a2",
          "type": "animation",
          "title": "H-Bridge Current Flow",
          "content": "Animated diagram showing transistor switching states for forward, reverse, and brake modes."
        }
      ]
    },
    {
      "id": "robotics-101-l05",
      "title": "Kinematics and Control",
      "type": "interactive",
      "duration": 15,
      "chunks": [
        {
          "id": "robotics-101-l05-c1",
          "title": "Forward Kinematics",
          "content": "Kinematics is a fascinating area of study that focuses on how objects move without taking into account the forces that cause that movement. In the world of robotics, one important concept is called Forward Kinematics, or FK for short. This method allows us to determine the position of the end of a robot's arm based on the angles of its joints. Imagine you have a robot with a shoulder joint that is positioned at 30 degrees and an elbow joint at 45 degrees. FK helps us answer the question, 'Where is the robot's hand located in space?'\nTo understand how FK works, let’s consider a simple robotic arm with two links. We can use trigonometry, which is a branch of mathematics that deals with the relationships between the angles and sides of triangles, to find the exact position of the robot's hand. The formulas we use are:\n- x = L₁·cos(θ₁) + L₂·cos(θ₁ + θ₂)\n- y = L₁·sin(θ₁) + L₂·sin(θ₁ + θ₂)\nHere, L₁ and L₂ represent the lengths of the two links of the arm, while θ₁ and θ₂ are the angles of the joints.\nAdditionally, to make the calculations easier and more organized, we use a method called the Denavit-Hartenberg (DH) convention. This convention provides a systematic way to assign coordinate frames to each joint of the robotic arm. By doing this, we can create a series of transformation matrices, which are mathematical tools that help us combine the information from each joint. Ultimately, these matrices allow us to find the Forward Kinematics solution for robotic arms, no matter how complex they may be. Understanding these concepts is crucial for anyone interested in robotics and engineering, as they form the foundation for controlling robotic movements effectively."
        },
        {
          "id": "robotics-101-l05-c2",
          "title": "Inverse Kinematics",
          "content": "Inverse kinematics, often abbreviated as IK, is a fascinating concept in robotics that focuses on how robots move their arms and hands. Instead of figuring out where the end of a robot's arm will be based on how its joints are positioned (which is called forward kinematics), IK works in reverse. It starts with a specific target position that we want the robot's hand to reach, and then it calculates the necessary angles for each joint to achieve that position.\nThis process can be quite challenging! Sometimes, there are multiple ways for the robot to reach the same point, or in some cases, it might not be possible at all. For example, if we have a simple robot arm with two segments, we can use straightforward geometric methods to find the right angles. However, for more advanced robots with six degrees of freedom (which means they can move in many different ways), we often need to use more complex mathematical techniques. These might include methods like the Jacobian pseudo-inverse or iterative solvers, which help us find the best solution.\nIK is especially important when we want to control a robot in what we call task-space. This means we can simply tell the robot to 'move your hand to the coordinates (x, y, z)' instead of having to specify how each joint should move individually. This makes programming robots much easier and more intuitive. Luckily, most modern robot controllers are equipped with built-in capabilities to handle these IK calculations automatically, allowing us to focus on what we want the robot to do rather than how to make it do it."
        },
        {
          "id": "robotics-101-l05-c3",
          "title": "PID Control Systems",
          "content": "Control systems play a vital role in robotics by ensuring that a robot's actual position aligns with its intended position. One of the most widely used types of control systems is the PID controller. This controller works by calculating a correction signal based on three key components: Proportional, Integral, and Derivative. The Proportional component reacts to the current error, meaning it looks at how far off the robot is from where it should be right now. The Integral component takes into account all the past errors, helping to correct any accumulated mistakes over time. Finally, the Derivative component predicts future errors by observing how quickly the robot's position is changing. This prediction helps the robot to adjust its movements before errors become too large.\nTo achieve the best performance, engineers adjust the Kp, Ki, and Kd values, which are the tuning parameters for the Proportional, Integral, and Derivative components, respectively. This tuning process is essential because it helps to find the right balance between how quickly the system responds to errors and how stable it remains during operation.\nThere are two main types of control: open-loop and closed-loop. Open-loop control sends commands to the robot without checking for feedback, which can be cost-effective but often leads to inaccuracies. On the other hand, closed-loop control continuously uses feedback from sensors to adjust the robot's movements in real time. This method is crucial for tasks that require high precision, such as robotic surgery or assembly. Most robotic joints utilize closed-loop PID control at a frequency of 1 kHz or faster, ensuring they can respond quickly and accurately to changes in their environment."
        }
      ],
      "flashcards": [
        {
          "id": "robotics-101-l05-f1",
          "front": "What does forward kinematics compute?",
          "back": "The position and orientation of the end-effector given all joint angles."
        },
        {
          "id": "robotics-101-l05-f2",
          "front": "Why is inverse kinematics harder than forward kinematics?",
          "back": "IK may have multiple valid solutions or no solution at all, and often requires numerical iterative methods."
        },
        {
          "id": "robotics-101-l05-f3",
          "front": "What do the P, I, and D terms in a PID controller represent?",
          "back": "P = proportional to current error, I = integral of accumulated error, D = derivative predicting future error."
        },
        {
          "id": "robotics-101-l05-f4",
          "front": "What is the DH convention used for?",
          "back": "A systematic method to assign coordinate frames to each robot joint, enabling computation of forward kinematics via transformation matrices."
        }
      ],
      "interactiveActivities": [
        {
          "id": "robotics-101-l05-act1",
          "type": "matching_pairs",
          "title": "Match the Concept",
          "instructions": [
            "Match each kinematics or control term with its correct definition."
          ],
          "pairs": [
            {
              "id": "p1",
              "left": "Forward Kinematics",
              "right": "Joint angles → end-effector position"
            },
            {
              "id": "p2",
              "left": "Inverse Kinematics",
              "right": "Desired position → required joint angles"
            },
            {
              "id": "p3",
              "left": "PID Controller",
              "right": "Correction signal from proportional, integral, and derivative terms"
            },
            {
              "id": "p4",
              "left": "DH Parameters",
              "right": "Systematic coordinate frame assignment for serial chains"
            },
            {
              "id": "p5",
              "left": "Closed-Loop Control",
              "right": "Uses sensor feedback to continuously adjust output"
            },
            {
              "id": "p6",
              "left": "Open-Loop Control",
              "right": "Sends commands without measuring actual output"
            }
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Compute the FK for a 2-link arm with L₁=1, L₂=1, θ₁=45°, θ₂=30°.",
          "Explain why a PID controller with too-high Kd gain can amplify sensor noise.",
          "Describe a real-world scenario where open-loop control is acceptable."
        ]
      },
      "learningAids": [
        {
          "id": "robotics-101-l05-a1",
          "type": "practice",
          "title": "PID Tuning Simulator",
          "content": "Adjust Kp, Ki, Kd sliders and observe the step response of a simulated motor to understand overshoot, steady-state error, and oscillation."
        },
        {
          "id": "robotics-101-l05-a2",
          "type": "animation",
          "title": "FK vs. IK Visualization",
          "content": "An interactive 2-link arm animation. In FK mode, users drag joint angle sliders and see the hand move. In IK mode, users drag the hand to a target position and see the required joint angles calculated and displayed."
        }
      ]
    },
    {
      "id": "robotics-101-l06",
      "title": "Actuators & Kinematics Checkpoint",
      "type": "quiz",
      "duration": 8,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "questions": [
        {
          "id": "robotics-101-l06-q1",
          "text": "A stepper motor with 200 steps per revolution has a step angle of:",
          "skillId": "robotics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "0.9°"
            },
            {
              "id": "b",
              "text": "1.8°"
            },
            {
              "id": "c",
              "text": "3.6°"
            },
            {
              "id": "d",
              "text": "7.2°"
            }
          ],
          "correctOptionId": "b",
          "explanation": "360° ÷ 200 steps = 1.8° per step. This is the most common step angle for standard stepper motors."
        },
        {
          "id": "robotics-101-l06-q2",
          "text": "Which actuator technology is best suited for extremely high-force applications like excavator arms?",
          "skillId": "robotics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Servo motors"
            },
            {
              "id": "b",
              "text": "Pneumatic cylinders"
            },
            {
              "id": "c",
              "text": "Hydraulic actuators"
            },
            {
              "id": "d",
              "text": "Stepper motors"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Hydraulic actuators use pressurized fluid to generate enormous force, making them ideal for heavy machinery like excavators."
        },
        {
          "id": "robotics-101-l06-q3",
          "text": "In forward kinematics for a 2-link planar arm, what information is the input?",
          "skillId": "robotics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Desired end-effector position (x, y)"
            },
            {
              "id": "b",
              "text": "Joint angles (θ₁, θ₂) and link lengths (L₁, L₂)"
            },
            {
              "id": "c",
              "text": "Motor current and voltage"
            },
            {
              "id": "d",
              "text": "PID gain values (Kp, Ki, Kd)"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Forward kinematics takes joint angles and link lengths as inputs and computes the resulting end-effector position."
        },
        {
          "id": "robotics-101-l06-q4",
          "text": "Which PID term corrects for accumulated steady-state error over time?",
          "skillId": "robotics-101-skill-core",
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
              "text": "Feedforward (F)"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Integral term sums past error over time and drives the correction needed to eliminate persistent steady-state offset."
        }
      ],
      "learningAids": [
        {
          "id": "robotics-101-l06-a1",
          "type": "mnemonic",
          "title": "PID Memory Aid",
          "content": "P = Present error, I = past Integral of error, D = future Derivative prediction."
        }
      ]
    },
    {
      "id": "robotics-101-l07",
      "title": "Autonomy and Navigation",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "robotics-101-l07-c1",
          "title": "SLAM: Simultaneous Localization and Mapping",
          "content": "When we explore the fascinating world of autonomous robots, we encounter three essential questions that these robots need to answer all at the same time: 'Where am I?' This question is known as localization. The second question is, 'What does the world around me look like?' This process is called mapping. Finally, the third question is, 'How do I get to my destination?' This is referred to as path planning. To tackle the first two questions together, we use a method called SLAM, which stands for Simultaneous Localization and Mapping.\nImagine a robot moving through a new and unknown environment, like a room or a warehouse. As it travels, it uses special sensors, such as lidar (which uses laser light) or cameras, to gather information about its surroundings. At the same time, it creates a map of the area while keeping track of its own position on that map. This ability to understand both its location and the layout of the environment is what makes SLAM so powerful.\nThere are several popular methods for implementing SLAM, including EKF-SLAM, which uses a mathematical approach called the Extended Kalman Filter; graph-based SLAM, which organizes information into a graph structure; and visual SLAM, like ORB-SLAM, which relies on visual data from cameras. SLAM technology is crucial for the operation of various devices we see today, such as autonomous vacuum cleaners that clean our homes, robots that help in warehouses by moving goods, and self-driving cars that navigate our roads.\nUnderstanding SLAM is vital for anyone interested in robotics because it is a foundational concept that enables robots to navigate and interact with their environments safely and efficiently. By grasping how SLAM works, you can appreciate the incredible advancements in robotics and how they are transforming our daily lives."
        },
        {
          "id": "robotics-101-l07-c2",
          "title": "Path Planning Algorithms",
          "content": "Path planning is a crucial concept in robotics that enables a robot to determine a safe and efficient route from its starting point to its destination. One of the most recognized methods used for this purpose is Dijkstra's algorithm. This algorithm ensures that the robot finds the shortest possible path on a map, where different areas may have varying costs or weights associated with them. However, one downside of Dijkstra's algorithm is that it can be quite slow, as it examines many potential paths before arriving at the best one. To improve the speed of this process, we can utilize the A* algorithm. This advanced method incorporates a smart estimate of how far away the goal is, which helps the robot concentrate on the most promising paths and reduces the time it takes to find a solution.\nWhen dealing with more complex movements, such as those required for a robot arm, we often turn to sampling-based planners like Rapidly-exploring Random Trees (RRT) and its enhanced version, RRT*. These techniques are particularly effective because they do not require the robot to create a complete map of all possible movements, which can be very complicated and time-consuming. Instead, they allow the robot to explore its environment more flexibly and efficiently.\nAdditionally, local planners, such as the Dynamic Window Approach, play a vital role in helping robots avoid obstacles in real-time. These planners quickly assess different speed options over short time frames, enabling the robot to navigate around unexpected barriers safely. Understanding these path planning techniques is essential for anyone interested in designing robots that can navigate their environments effectively and safely, making it a fascinating area of study in robotics."
        },
        {
          "id": "robotics-101-l07-c3",
          "title": "Robot Operating System (ROS)",
          "content": "The Robot Operating System, commonly known as ROS, is a vital tool in the exciting field of robotics. It serves as an open-source framework, which means that anyone can use and contribute to it, making it a collaborative effort among developers worldwide. ROS provides a variety of libraries, tools, and guidelines that help programmers create software specifically designed for robots. One of the key features of ROS is its publish-subscribe messaging system. In this system, sensor nodes, which are parts of the robot that gather information about the environment, send out data to specific topics. Other nodes, which are responsible for planning or controlling the robot's actions, listen to these topics to receive the necessary information. This allows for efficient communication between different parts of the robot.\nSome important packages within ROS include nav2, which is used for helping robots navigate their surroundings, MoveIt, which assists in planning how robots can manipulate or interact with objects, and tf2, which helps manage the relationships between different coordinate frames, ensuring that the robot understands its position in space.\nAlthough ROS itself is not a real-time operating system, it can work alongside real-time controllers through a system called ros2_control. This integration allows for precise control of robotic actions, which is essential in many applications.\nUnderstanding how to use ROS is crucial for anyone interested in pursuing a career in modern robotics. It is widely used in research laboratories, innovative startups, and established companies around the globe. By learning ROS, aspiring roboticists can gain valuable skills that will help them succeed in this rapidly evolving field, opening many doors for their future careers in technology and engineering."
        }
      ],
      "flashcards": [
        {
          "id": "robotics-101-l07-f1",
          "front": "What does SLAM stand for?",
          "back": "Simultaneous Localization and Mapping — building a map and tracking position within it at the same time."
        },
        {
          "id": "robotics-101-l07-f2",
          "front": "How does A* improve on Dijkstra's algorithm?",
          "back": "A* adds a heuristic estimate of remaining distance to the goal, reducing the number of nodes explored while still finding an optimal path."
        },
        {
          "id": "robotics-101-l07-f3",
          "front": "What is RRT used for?",
          "back": "Rapidly-exploring Random Trees is a sampling-based path planner for high-dimensional spaces where grid-based methods are impractical."
        },
        {
          "id": "robotics-101-l07-f4",
          "front": "What communication model does ROS use?",
          "back": "A publish-subscribe model where nodes publish messages to named topics and other nodes subscribe to receive them."
        }
      ],
      "learningAids": [
        {
          "id": "robotics-101-l07-a1",
          "type": "image",
          "title": "SLAM Pipeline Diagram",
          "content": "Flowchart showing sensor input → feature extraction → data association → map update → pose correction loop."
        },
        {
          "id": "robotics-101-l07-a2",
          "type": "animation",
          "title": "A* vs Dijkstra Visualization",
          "content": "Side-by-side animated grid search comparing node expansion between Dijkstra and A* with a Euclidean heuristic."
        }
      ]
    },
    {
      "id": "robotics-101-l08",
      "title": "Robot Programming",
      "type": "interactive",
      "duration": 14,
      "chunks": [
        {
          "id": "robotics-101-l08-c1",
          "title": "Finite State Machines",
          "content": "State machines are a foundational concept in robotics that help us understand how robots can behave in different situations. Imagine a robot that can perform various actions, like 'Searching' for an object, 'Approaching' it, or 'Grasping' it. Each of these actions is called a 'state.' The robot can switch from one state to another based on what it senses in its environment or certain conditions that are met. For instance, if the robot detects an object nearby, it might transition from 'Searching' to 'Approaching.' This process is guided by something called transitions, which are like rules that tell the robot when to change states.\nFinite state machines (FSMs) are a straightforward way to implement this idea. They are easy to understand and set up, making them a popular choice for beginners. However, as the robot's tasks become more complex, FSMs can become difficult to manage. For example, if we want to add a new behavior, we might have to adjust many transitions, which can get confusing.\nTo address this challenge, we can use hierarchical state machines (HFSMs). HFSMs allow us to organize states in a nested structure. This means we can have a main state, like 'Navigate,' which can include smaller sub-states such as 'Plan Path' and 'Follow Path.' This nesting helps keep our design organized and manageable, making it easier to program robots to perform a variety of tasks efficiently. Understanding state machines is an essential step in learning how to program robots effectively and creatively."
        },
        {
          "id": "robotics-101-l08-c2",
          "title": "Behavior Trees",
          "content": "Behavior trees, often abbreviated as BTs, are a powerful tool used in robotics to help manage how robots behave. They provide a flexible and modular approach, which is a great alternative to traditional state machines that can be more rigid. Imagine a behavior tree like a family tree, where each branch represents different paths a robot can take. In this tree, the internal nodes are known as control-flow nodes, which include types like Sequence, Selector, and Parallel. The leaves of the tree are where the actions or conditions are found.\nFor example, a Sequence node is like a checklist. It will go through its tasks one by one, from left to right, and it will only succeed if every single task on the list is completed successfully. This is especially useful for tasks that need to happen in a specific order, such as picking up an object and then moving it to a different location.\nOn the other hand, a Selector node acts like a safety net. It will try each of its tasks until one of them works. This is really helpful when something doesn’t go as planned, allowing the robot to switch to a backup plan.\nBehavior trees are becoming more popular not just in robotics but also in game AI because they allow developers to create smaller parts of the system that can be tested and reused independently. This modularity makes it much easier to scale and manage complex robotic systems. For instance, the navigation system in ROS 2, known as the nav2 stack, uses behavior trees to handle its navigation logic. This shows just how important behavior trees are in the world of modern robotics, helping robots make smart decisions and adapt to different situations efficiently."
        },
        {
          "id": "robotics-101-l08-c3",
          "title": "Real-Time Systems and Safety Standards",
          "content": "In the world of robotics, real-time systems play a vital role in ensuring that robots can react quickly and accurately within set time limits. This is especially important because if a robot fails to meet a deadline for controlling its motors, it could lead to dangerous situations or even cause damage to the robot or its surroundings. To manage these time-sensitive tasks effectively, engineers use real-time operating systems (RTOS) like FreeRTOS or RT-Linux. These systems are designed to provide predictable scheduling, which means they can guarantee that tasks will be completed on time.\nMoreover, safety is a top priority in robotics, and there are established safety standards that help ensure robots operate safely in various environments. One key standard is ISO 10218, which outlines essential safety requirements for industrial robots. This includes features such as emergency stop circuits that allow immediate shutdown in case of an emergency, speed limits that robots must adhere to when humans are nearby, and thorough procedures for assessing potential risks associated with robot operations.\nAdditionally, there are collaborative robots, commonly known as cobots, which work alongside humans. These robots follow specific guidelines, such as ISO/TS 15066, which set strict limits on the amount of force and pressure they can exert during interactions with people. Understanding these safety standards is crucial for anyone interested in working with robots in environments where they will be in close proximity to humans. By adhering to these guidelines, we can ensure that robots function safely and effectively, creating a harmonious workspace for both humans and machines."
        }
      ],
      "flashcards": [
        {
          "id": "robotics-101-l08-f1",
          "front": "What is a finite state machine in robotics?",
          "back": "A model where the robot occupies one state at a time (e.g., Searching, Grasping) and transitions between states based on sensor events or conditions."
        },
        {
          "id": "robotics-101-l08-f2",
          "front": "How does a Sequence node in a behavior tree work?",
          "back": "It runs child nodes left-to-right and succeeds only if all children succeed; it fails as soon as any child fails."
        },
        {
          "id": "robotics-101-l08-f3",
          "front": "What does ISO 10218 cover?",
          "back": "Safety requirements for industrial robots, including emergency stops, speed limits near humans, and risk assessment procedures."
        },
        {
          "id": "robotics-101-l08-f4",
          "front": "Why are real-time operating systems important in robotics?",
          "back": "They guarantee that critical tasks (like motor control) execute within strict time deadlines, preventing physical damage or unsafe behavior."
        }
      ],
      "interactiveActivities": [
        {
          "id": "robotics-101-l08-act1",
          "type": "sorting_buckets",
          "title": "State Machine vs Behavior Tree",
          "instructions": [
            "Drag each characteristic into the correct architecture category."
          ],
          "buckets": [
            "State Machine",
            "Behavior Tree"
          ],
          "items": [
            {
              "id": "bp1",
              "text": "Uses Sequence and Selector control nodes",
              "bucket": "Behavior Tree"
            },
            {
              "id": "bp2",
              "text": "Transitions triggered by events between fixed states",
              "bucket": "State Machine"
            },
            {
              "id": "bp3",
              "text": "Subtrees can be reused independently",
              "bucket": "Behavior Tree"
            },
            {
              "id": "bp4",
              "text": "Adding new behaviors may require modifying many transitions",
              "bucket": "State Machine"
            },
            {
              "id": "bp5",
              "text": "Used by ROS 2 nav2 for navigation logic",
              "bucket": "Behavior Tree"
            },
            {
              "id": "bp6",
              "text": "Simplest architecture, easy for small systems",
              "bucket": "State Machine"
            }
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Design a state machine for a robot that searches for, picks up, and delivers an object.",
          "Explain why behavior trees scale better than flat state machines.",
          "List two ISO standards relevant to human-robot collaboration."
        ]
      },
      "learningAids": [
        {
          "id": "robotics-101-l08-a1",
          "type": "practice",
          "title": "Behavior Tree Builder",
          "content": "Construct a behavior tree for a delivery robot using drag-and-drop Sequence, Selector, and Action nodes."
        },
        {
          "id": "robotics-101-l08-a2",
          "type": "image",
          "title": "FSM vs. Behavior Tree Comparison",
          "content": "A diagram showing two implementations of a 'fetch object' task. One uses a Finite State Machine with states like 'Search', 'Approach', 'Grasp'. The other uses a Behavior Tree with a Sequence node and corresponding action leaves, highlighting the BT's modularity."
        }
      ]
    },
    {
      "id": "robotics-101-l09",
      "title": "Autonomy & Programming Checkpoint",
      "type": "quiz",
      "duration": 8,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "questions": [
        {
          "id": "robotics-101-l09-q1",
          "text": "SLAM allows a robot to simultaneously:",
          "skillId": "robotics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Sense temperature and humidity"
            },
            {
              "id": "b",
              "text": "Build a map and localize itself within it"
            },
            {
              "id": "c",
              "text": "Charge its battery and plan paths"
            },
            {
              "id": "d",
              "text": "Communicate with other robots and humans"
            }
          ],
          "correctOptionId": "b",
          "explanation": "SLAM (Simultaneous Localization and Mapping) constructs a map of the environment while tracking the robot's position within that map."
        },
        {
          "id": "robotics-101-l09-q2",
          "text": "Which path-planning algorithm uses random sampling to explore high-dimensional configuration spaces?",
          "skillId": "robotics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Dijkstra's algorithm"
            },
            {
              "id": "b",
              "text": "A*"
            },
            {
              "id": "c",
              "text": "RRT (Rapidly-exploring Random Trees)"
            },
            {
              "id": "d",
              "text": "Breadth-first search"
            }
          ],
          "correctOptionId": "c",
          "explanation": "RRT grows a tree by randomly sampling the configuration space and extending toward samples, making it practical for high-DOF robots."
        },
        {
          "id": "robotics-101-l09-q3",
          "text": "In a behavior tree, which node type tries children in order and succeeds when the first child succeeds?",
          "skillId": "robotics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Sequence"
            },
            {
              "id": "b",
              "text": "Selector (Fallback)"
            },
            {
              "id": "c",
              "text": "Parallel"
            },
            {
              "id": "d",
              "text": "Decorator"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A Selector (Fallback) node tries children left-to-right and returns success as soon as any child succeeds, providing fallback alternatives."
        },
        {
          "id": "robotics-101-l09-q4",
          "text": "Which safety standard specifically addresses force and pressure limits for collaborative robots working near humans?",
          "skillId": "robotics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "IEEE 802.11"
            },
            {
              "id": "b",
              "text": "ISO 10218"
            },
            {
              "id": "c",
              "text": "ISO/TS 15066"
            },
            {
              "id": "d",
              "text": "IEC 61131"
            }
          ],
          "correctOptionId": "c",
          "explanation": "ISO/TS 15066 specifies biomechanical limits on force and pressure for safe physical human-robot interaction with collaborative robots."
        }
      ],
      "learningAids": [
        {
          "id": "robotics-101-l09-a1",
          "type": "mnemonic",
          "title": "Navigation Trio",
          "content": "Where am I? (Localization) + What's around me? (Mapping) + How do I get there? (Planning) = autonomous navigation."
        }
      ]
    },
    {
      "id": "robotics-101-l10",
      "title": "Mastery Quiz: Robotics",
      "type": "quiz",
      "duration": 10,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "questions": [
        {
          "id": "robotics-101-l10-q1",
          "text": "A warehouse robot uses wheel encoders, an IMU, and a ceiling-mounted camera system. Combining these data streams to estimate position is an example of:",
          "skillId": "robotics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Inverse kinematics"
            },
            {
              "id": "b",
              "text": "Sensor fusion"
            },
            {
              "id": "c",
              "text": "Behavior tree traversal"
            },
            {
              "id": "d",
              "text": "Gear ratio optimization"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Sensor fusion combines data from multiple sensor modalities (encoders, IMU, camera) to produce a more accurate and robust state estimate."
        },
        {
          "id": "robotics-101-l10-q2",
          "text": "An engineer wants a robot arm to move its gripper to world coordinates (0.5, 0.3, 0.8). Which computation must the controller perform?",
          "skillId": "robotics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Forward kinematics"
            },
            {
              "id": "b",
              "text": "SLAM"
            },
            {
              "id": "c",
              "text": "Inverse kinematics"
            },
            {
              "id": "d",
              "text": "PID auto-tuning"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Inverse kinematics converts a desired end-effector position in Cartesian space into the joint angles needed to reach it."
        },
        {
          "id": "robotics-101-l10-q3",
          "text": "An H-bridge motor driver uses four transistors arranged so that current can flow through the motor in either direction. What is the third useful mode besides forward and reverse?",
          "skillId": "robotics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Amplification"
            },
            {
              "id": "b",
              "text": "Frequency modulation"
            },
            {
              "id": "c",
              "text": "Braking"
            },
            {
              "id": "d",
              "text": "Wireless transmission"
            }
          ],
          "correctOptionId": "c",
          "explanation": "By shorting both motor terminals to the same rail, the H-bridge creates a braking mode that rapidly decelerates the motor."
        },
        {
          "id": "robotics-101-l10-q4",
          "text": "A robot navigating a cluttered office uses A* on an occupancy grid. Compared to Dijkstra's algorithm, A* explores fewer nodes because it:",
          "skillId": "robotics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Ignores obstacles entirely"
            },
            {
              "id": "b",
              "text": "Uses a heuristic to estimate remaining cost to the goal"
            },
            {
              "id": "c",
              "text": "Only considers the four cardinal directions"
            },
            {
              "id": "d",
              "text": "Randomly samples the grid"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A* combines actual cost-so-far with a heuristic estimate of cost-to-go (e.g., Euclidean distance), guiding the search toward the goal and reducing explored nodes."
        }
      ],
      "learningAids": [
        {
          "id": "robotics-101-l10-a1",
          "type": "mnemonic",
          "title": "Full Robot Stack",
          "content": "Sensors → Fusion → Kinematics → Control → Planning → Behavior Architecture — the layers of a complete robotic system."
        }
      ]
    }
  ]
};
