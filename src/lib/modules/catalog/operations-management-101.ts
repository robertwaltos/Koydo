import type { LearningModule } from "@/lib/modules/types";

export const OperationsManagement101Module: LearningModule = {
  "id": "operations-management-101",
  "title": "Operations Management Fundamentals",
  "description": "Understand how organizations transform inputs into valuable outputs. Master process analysis, capacity planning, bottleneck identification, and value stream mapping to drive operational excellence across any industry.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mba",
    "operations"
  ],
  "minAge": 18,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Define operations management and its role in organizational success",
    "Analyze and design business processes using flowcharts and process maps",
    "Calculate and interpret capacity, utilization, and throughput metrics",
    "Identify bottlenecks using the Theory of Constraints",
    "Measure productivity and distinguish between partial and multifactor measures",
    "Construct a value stream map to expose waste in a process",
    "Apply the transformation model to describe any operational system"
  ],
  "lessons": [
    {
      "id": "operations-management-101-l01",
      "title": "What Is Operations Management?",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define operations management and explain its scope",
        "Describe the transformation model of inputs to outputs",
        "Explain why operations management matters to every functional area"
      ],
      "chunks": [
        {
          "id": "operations-management-101-l01-c1",
          "title": "Operations Management Defined",
          "content": "Operations management is an essential part of business that focuses on how organizations design, operate, and improve the systems responsible for creating and delivering their products or services. Every type of company, whether it manufactures smartphones, produces clothing, or provides healthcare services, has an operations management function that plays a critical role in its success. This function is just as important as marketing and finance, which are the other two main areas of business. Operations management involves overseeing the processes that transform inputs, like raw materials and labor, into finished goods or services that customers can use.\nIn fact, operations management typically accounts for a significant portion of a company's total costs, often ranging from 60% to 80%. This means that effective operations management is not only crucial for ensuring that products and services are delivered efficiently but also for improving profitability. By optimizing operations, companies can reduce waste, enhance quality, and respond more quickly to customer needs. Therefore, understanding operations management is key for anyone interested in how businesses function and succeed in today's competitive environment.\nContext recap: Operations management is an essential part of business that focuses on how organizations design, operate, and improve the systems responsible for creating and delivering their products or services. Every type of company, whether it manufactures smartphones, produces clothing, or provides healthcare services, has an operations management function that plays a critical role in its success. This function is just as important as marketing and finance, which are the other two main areas of business. Operations management involves overseeing the processes that transform inputs, like raw materials and labor, into finished goods or services that customers can use."
        },
        {
          "id": "operations-management-101-l01-c2",
          "title": "The Transformation Model",
          "content": "At the heart of operations management lies a fundamental concept known as the input-transformation-output model. This model serves as a blueprint for understanding how various operations function. Let's break it down: inputs are the essential resources that enter the system. These can include materials, information, customers, and staff members. Each of these inputs plays a crucial role in the overall process.\nThe transformation process is where the real action happens. This is the stage where value is added to the inputs. It involves changing the inputs in meaningful ways, such as altering their physical properties, relocating them, transferring ownership, or updating their informational state. This transformation is what makes the inputs useful and valuable.\nFinally, we arrive at the outputs, which are the finished goods and services that are delivered to customers. To illustrate this model, consider a hospital: patients represent the inputs, while the medical expertise and equipment utilized by healthcare professionals are part of the transformation process. The ultimate goal is to produce healthier patients, who are the outputs of this operation.\nUnderstanding this input-transformation-output model is vital for managers. It empowers them to view any operation as a cohesive system that can be analyzed, measured, and improved over time. By grasping this concept, managers can identify areas for enhancement and ensure that their operations run smoothly and efficiently.\nContext recap: At the heart of operations management lies a fundamental concept known as the input-transformation-output model. This model serves as a blueprint for understanding how various operations function. Let's break it down: inputs are the essential resources that enter the system. These can include materials, information, customers, and staff members.\nWhy this matters: The Transformation Model helps learners in Business connect ideas from Operations Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "operations-management-101-l01-c3",
          "title": "Why Operations Management Matters Everywhere",
          "content": "Operations management is an essential part of every business, and it goes beyond just factories. Think about how Amazon delivers packages quickly, how Starbucks prepares your favorite coffee, or how Netflix streams movies and shows to your screen. Each of these examples shows different challenges that businesses face in their operations. Marketing teams make promises about what customers can expect, but it is the operations teams that ensure those promises are fulfilled. They work hard to make sure everything runs smoothly and efficiently. Additionally, finance plays a key role by providing the funds needed to support these operations. If a business has a fantastic strategy but fails to execute it properly, it can lead to disappointment. This is where operations management comes into play, as it is responsible for turning plans into reality. Companies like Toyota and Zara have become leaders in their industries not just because they offer great products, but because they excel in managing their operations effectively. Their ability to streamline processes and improve efficiency has helped them stand out in a competitive market. Understanding the importance of operations management can help you appreciate how businesses succeed in delivering value to their customers.\nContext recap: Operations management is an essential part of every business, and it goes beyond just factories. Think about how Amazon delivers packages quickly, how Starbucks prepares your favorite coffee, or how Netflix streams movies and shows to your screen. Each of these examples shows different challenges that businesses face in their operations. Marketing teams make promises about what customers can expect, but it is the operations teams that ensure those promises are fulfilled.\nWhy this matters: Why Operations Management Matters Everywhere helps learners in Business connect ideas from Operations Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-101-l01-f1",
          "front": "Operations management",
          "back": "The design, execution, and improvement of systems that create and deliver an organization's products or services — typically 60–80% of total costs"
        },
        {
          "id": "operations-management-101-l01-f2",
          "front": "Transformation model",
          "back": "Input → Transformation → Output framework: inputs (materials, information, customers) are transformed by adding value, producing goods and services as outputs"
        },
        {
          "id": "operations-management-101-l01-f3",
          "front": "Three core business functions",
          "back": "Operations, Marketing, and Finance — operations is responsible for the actual creation and delivery of products and services"
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "operations-management-101-l02",
      "title": "Process Analysis and Design",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Distinguish between different process types and their characteristics",
        "Calculate key process metrics: cycle time, throughput, and flow time",
        "Apply Little's Law to relate inventory, throughput, and flow time"
      ],
      "chunks": [
        {
          "id": "operations-management-101-l02-c1",
          "title": "Process Types",
          "content": "In the field of operations management, understanding different types of processes is crucial for effectively meeting customer needs. These processes can be organized along a spectrum that considers both the volume of production and the variety of products offered. For example, project processes are typically used for unique, one-time outputs. A great illustration of this is the construction of a bridge, which requires a highly customized approach tailored to specific requirements. On the other hand, job shop processes are designed for low-volume but high-variety work. This is similar to creating custom furniture, where each piece may be different and made to order.\nBatch processes are another type, where similar items are produced together in groups. A good example of this would be a bakery that produces multiple loaves of bread at once, allowing for efficiency while still offering a variety of baked goods. Then we have line processes, which are used for high-volume, low-variety goods. This is commonly seen in automobile assembly lines, where many identical cars are produced in a streamlined manner. Finally, continuous processes operate non-stop to produce commodity outputs, such as in oil refining, where the production is constant and uniform.\nSelecting the appropriate process type is essential for businesses. It largely depends on the volume of demand they expect and the level of customization that customers require. Understanding these distinctions helps businesses optimize their operations and better serve their customers.\nContext recap: In the field of operations management, understanding different types of processes is crucial for effectively meeting customer needs. These processes can be organized along a spectrum that considers both the volume of production and the variety of products offered. For example, project processes are typically used for unique, one-time outputs. A great illustration of this is the construction of a bridge, which requires a highly customized approach tailored to specific requirements.\nWhy this matters: Process Types helps learners in Business connect ideas from Operations Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "operations-management-101-l02-c2",
          "title": "Key Process Metrics",
          "content": "When we look at how processes work, there are three important metrics that we need to pay attention to. The first one is called cycle time. This metric tells us how long it takes for one unit to finish the entire process. For instance, imagine a bakery that bakes bread. If it takes 2 minutes to bake one loaf of bread, we say that the cycle time is 2 minutes. This helps us understand the speed of production.\nThe second metric is known as throughput rate. This is the number of units that are produced in a certain amount of time. For example, if our bakery can produce 30 loaves of bread in one hour, we can say that the throughput rate is 30 loaves per hour. This metric is crucial because it shows us how efficient the production process is.\nThe third important metric is flow time, which is sometimes called lead time. Flow time measures the total duration that a single unit spends in the system, from the moment it enters until it leaves. This includes any waiting time that the unit might experience. For example, if a loaf of bread takes 10 minutes from the moment it enters the oven until it is ready for sale, that 10 minutes is its flow time.\nUnderstanding these three metrics—cycle time, throughput rate, and flow time—allows managers to gain valuable insights into how quickly products are being made, how much is being produced, and the overall duration of the production process. By analyzing these metrics, businesses can identify areas for improvement and enhance their operations effectively.\nContext recap: When we look at how processes work, there are three important metrics that we need to pay attention to. The first one is called cycle time. This metric tells us how long it takes for one unit to finish the entire process. For instance, imagine a bakery that bakes bread.\nWhy this matters: Key Process Metrics helps learners in Business connect ideas from Operations Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "operations-management-101-l02-c3",
          "title": "Little's Law",
          "content": "Little's Law is a key concept in operations management that helps us understand how different elements of a system interact with each other. The formula for Little's Law is Inventory = Throughput Rate × Flow Time, which can be written as I = R × T. To break this down, let's consider a practical example: imagine a clinic that sees 10 patients every hour. This number, 10 patients per hour, is what we call the throughput rate. Now, let's say each patient stays in the clinic for an average of 3 hours. This duration is referred to as the flow time. By using Little's Law, we can calculate the average number of patients in the clinic at any given moment, which is known as the inventory. In this case, if we multiply the throughput rate (10 patients per hour) by the flow time (3 hours), we find that there are typically 30 patients in the clinic at any time. This principle is applicable to any stable system, meaning it can be used in various settings beyond just healthcare. One of the most valuable insights from Little's Law is that if a manager can reduce the flow time while keeping the throughput rate the same, they can also decrease the amount of work-in-progress inventory. This leads to a more efficient operation, allowing resources to be used more effectively and improving overall productivity. Understanding Little's Law is essential for anyone involved in managing operations, as it provides a clear framework for analyzing and optimizing processes.\nContext recap: Little's Law is a key concept in operations management that helps us understand how different elements of a system interact with each other. The formula for Little's Law is Inventory = Throughput Rate × Flow Time, which can be written as I = R × T. To break this down, let's consider a practical example: imagine a clinic that sees 10 patients every hour. This number, 10 patients per hour, is what we call the throughput rate.\nWhy this matters: Little's Law helps learners in Business connect ideas from Operations Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-101-l02-f1",
          "front": "Process types (volume-variety spectrum)",
          "back": "Project → Job shop → Batch → Line → Continuous — moving from low volume/high variety to high volume/low variety"
        },
        {
          "id": "operations-management-101-l02-f2",
          "front": "Cycle time vs. throughput rate",
          "back": "Cycle time is the interval between completed units; throughput rate is units produced per time period — they are inverses of each other"
        },
        {
          "id": "operations-management-101-l02-f3",
          "front": "Little's Law",
          "back": "Inventory = Throughput Rate × Flow Time (I = R × T) — holds for any stable system and connects three fundamental process metrics"
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-101-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "operations-management-101-l03",
      "title": "Capacity Planning",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Define capacity and distinguish between design, effective, and actual capacity",
        "Calculate capacity utilization and efficiency",
        "Evaluate capacity expansion strategies: lead, lag, and match"
      ],
      "chunks": [
        {
          "id": "operations-management-101-l03-c1",
          "title": "Types of Capacity",
          "content": "In the world of capacity planning, it's important to understand the different types of capacity that organizations must consider to operate effectively. First, we have what is known as design capacity. This term refers to the maximum output that a system can theoretically achieve when everything is running perfectly. For instance, imagine a factory that is designed to produce 1,000 units in a single day if all processes go smoothly without any interruptions. However, in reality, things are rarely perfect. This brings us to the next type of capacity: effective capacity. Effective capacity takes into account planned downtime, which includes necessary maintenance, shift changes, and setup times. Because of these factors, the effective output might be reduced to around 850 units per day. Finally, we have actual output, which is the real amount produced by the system. This figure considers unexpected disruptions, such as equipment breakdowns or quality control issues, which could lower the actual output to about 780 units. By understanding these different types of capacity—design, effective, and actual—organizations can better identify areas where improvements can be made to enhance productivity and efficiency.\nContext recap: In the world of capacity planning, it's important to understand the different types of capacity that organizations must consider to operate effectively. First, we have what is known as design capacity. This term refers to the maximum output that a system can theoretically achieve when everything is running perfectly. For instance, imagine a factory that is designed to produce 1,000 units in a single day if all processes go smoothly without any interruptions.\nWhy this matters: Types of Capacity helps learners in Business connect ideas from Operations Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "operations-management-101-l03-c2",
          "title": "Utilization and Efficiency",
          "content": "Utilization and efficiency are crucial concepts in the field of capacity planning, which helps businesses understand how well they are using their resources. Utilization is a measure that tells us how much of the factory's design capacity is actually being put to use. We can express this as a percentage. For example, if a factory is designed to produce 1,000 units but only produces 780 units, we calculate the utilization by dividing the actual output (780) by the design capacity (1,000), which gives us a utilization rate of 78%.\nOn the other hand, efficiency measures how well the factory is performing compared to its effective capacity. Effective capacity takes into account the realistic limits of production, which might be lower than the design capacity due to various factors. In our example, if the effective capacity is 850 units and the factory still produces 780 units, we find the efficiency by dividing the actual output (780) by the effective capacity (850), resulting in an efficiency of approximately 91.8%.\nInterestingly, a factory can be very efficient but still have low utilization if it has too much planned downtime, which is time when production is intentionally halted for maintenance or other reasons. Therefore, managers monitor both utilization and efficiency closely. This helps them identify whether problems stem from planning issues, like too much scheduled downtime, or execution issues, such as equipment breakdowns or product defects. Leading manufacturers strive for an overall equipment effectiveness (OEE) of over 85%, which is a comprehensive measure that combines availability, performance, and quality to ensure optimal production processes.\nContext recap: Utilization and efficiency are crucial concepts in the field of capacity planning, which helps businesses understand how well they are using their resources. Utilization is a measure that tells us how much of the factory's design capacity is actually being put to use. We can express this as a percentage. For example, if a factory is designed to produce 1,000 units but only produces 780 units, we calculate the utilization by dividing the actual output (780) by the design capacity (1,000), which gives us a utilization rate of 78%."
        },
        {
          "id": "operations-management-101-l03-c3",
          "title": "Capacity Expansion Strategies",
          "content": "When businesses notice that more people want their products or services, they have three main strategies to consider for expanding their capacity to meet this demand. The first strategy is called the lead strategy. In this approach, a company decides to increase its capacity before the demand actually arrives. This means they might spend money upfront, but they do this to grab a larger share of the market. A great example of this is Amazon, which builds warehouses ahead of time to ensure they can deliver products quickly when customers start ordering more.\nThe second strategy is known as the lag strategy. Here, a company waits until they have fully used their current capacity before deciding to add more. This method helps to minimize financial risks because they are not spending money on extra capacity that they might not need right away. However, there is a downside: if demand suddenly spikes, they might not be able to serve all their customers, leading to lost sales and potentially unhappy customers.\nThe third strategy is the match strategy. This involves adding capacity in small steps, allowing the company to closely follow the changes in demand. This way, they can adjust more flexibly to what customers want. Choosing the right strategy depends on several important factors. Companies need to consider the costs of having extra capacity versus the potential losses from not being able to meet sales, how accurate their demand forecasts are, and what their competitors are doing in the market.\nContext recap: When businesses notice that more people want their products or services, they have three main strategies to consider for expanding their capacity to meet this demand. The first strategy is called the lead strategy. In this approach, a company decides to increase its capacity before the demand actually arrives. This means they might spend money upfront, but they do this to grab a larger share of the market.\nWhy this matters: Capacity Expansion Strategies helps learners in Business connect ideas from Operations Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-101-l03-f1",
          "front": "Design vs. effective vs. actual capacity",
          "back": "Design: theoretical max under ideal conditions. Effective: adjusted for planned downtime. Actual: what is truly produced after unplanned losses"
        },
        {
          "id": "operations-management-101-l03-f2",
          "front": "Utilization vs. efficiency",
          "back": "Utilization = Actual output / Design capacity. Efficiency = Actual output / Effective capacity. Both are expressed as percentages"
        },
        {
          "id": "operations-management-101-l03-f3",
          "front": "Three capacity expansion strategies",
          "back": "Lead (add before demand), Lag (add after demand exceeds capacity), Match (add in small increments tracking demand)"
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-101-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "operations-management-101-l04",
      "title": "Bottleneck Theory and the Theory of Constraints",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Define a bottleneck and explain its impact on system throughput",
        "Describe the five focusing steps of the Theory of Constraints",
        "Apply drum-buffer-rope scheduling logic"
      ],
      "chunks": [
        {
          "id": "operations-management-101-l04-c1",
          "title": "What Is a Bottleneck?",
          "content": "In operations management, a bottleneck refers to the step in a process that has the lowest capacity, which ultimately restricts the overall output of the entire system. To illustrate this concept, let's consider a sandwich shop. Imagine that the process of slicing bread takes 30 seconds, filling the sandwich takes 90 seconds, and wrapping it takes only 20 seconds. In this scenario, the filling station is the bottleneck because it takes the longest time to complete its task. As a result, the entire shop can only produce one sandwich every 90 seconds, no matter how quickly the other stations can work. This situation highlights the importance of identifying the true bottleneck in any process. If you were to invest time and resources in improving the speed of the bread slicing or wrapping, it would not lead to an increase in the number of sandwiches produced. This is because the filling station's slower pace is what limits the overall output. Therefore, focusing on the bottleneck is essential for improving efficiency and productivity in any operation. By addressing the bottleneck, businesses can enhance their performance and maximize their output, leading to better service and customer satisfaction.\nContext recap: In operations management, a bottleneck refers to the step in a process that has the lowest capacity, which ultimately restricts the overall output of the entire system. To illustrate this concept, let's consider a sandwich shop. Imagine that the process of slicing bread takes 30 seconds, filling the sandwich takes 90 seconds, and wrapping it takes only 20 seconds. In this scenario, the filling station is the bottleneck because it takes the longest time to complete its task.\nWhy this matters: What Is a Bottleneck? helps learners in Business connect ideas from Operations Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "operations-management-101-l04-c2",
          "title": "The Five Focusing Steps",
          "content": "Eliyahu Goldratt's Theory of Constraints (TOC) provides a clear and structured method for enhancing processes in any organization. This theory is built around five essential focusing steps that guide teams in identifying and addressing limitations in their workflow. The first step is to identify the constraint, which means pinpointing the bottleneck in the system that is slowing down overall performance. Next, we move to exploit the constraint, where the goal is to maximize the use of this bottleneck by ensuring that there is no idle time or wasted capacity. This is crucial because every moment counts in improving efficiency.\nThe third step is to subordinate everything else to the constraint. This means that all other processes should be adjusted to support the pace of the bottleneck, ensuring that it operates smoothly without interruptions. Following this, we reach the fourth step: elevate the constraint. This involves investing in additional resources or capacity at the bottleneck to enhance its performance and output. Finally, the fifth step is to repeat the process. Once the current bottleneck is resolved, it is likely that a new constraint will appear somewhere else in the system. By continuously cycling through these steps, organizations can drive ongoing improvement and focus their efforts where they are most needed, leading to greater efficiency and productivity overall.\nContext recap: Eliyahu Goldratt's Theory of Constraints (TOC) provides a clear and structured method for enhancing processes in any organization. This theory is built around five essential focusing steps that guide teams in identifying and addressing limitations in their workflow. The first step is to identify the constraint, which means pinpointing the bottleneck in the system that is slowing down overall performance. Next, we move to exploit the constraint, where the goal is to maximize the use of this bottleneck by ensuring that there is no idle time or wasted capacity.\nWhy this matters: The Five Focusing Steps helps learners in Business connect ideas from Operations Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "operations-management-101-l04-c3",
          "title": "Drum-Buffer-Rope",
          "content": "The Drum-Buffer-Rope (DBR) method is an important scheduling technique derived from the Theory of Constraints (TOC). In this approach, the 'drum' symbolizes the bottleneck, which is the slowest part of the process and determines the overall speed of the entire system. Think of the drum as the heartbeat of the operation; it sets the rhythm that everyone else must follow. The 'buffer' acts as a safety net, which can be either time or inventory. This cushion is strategically placed right before the bottleneck to ensure that it always has enough work to keep it busy, preventing it from running out of tasks. Lastly, the 'rope' serves as a communication tool that helps pull work into the system at the same pace as the bottleneck. This is crucial because it prevents earlier stages of the process from producing too much work, which can lead to waste and inefficiencies. By implementing the DBR method, businesses can effectively avoid the common problem where non-bottleneck stations accumulate excessive work-in-progress. This accumulation can create a blockage in the workflow, ultimately hindering the overall output of the system. Therefore, the DBR method is essential for maintaining a smooth and efficient operation, ensuring that every part of the process works harmoniously together to achieve the best results.\nContext recap: The Drum-Buffer-Rope (DBR) method is an important scheduling technique derived from the Theory of Constraints (TOC). In this approach, the 'drum' symbolizes the bottleneck, which is the slowest part of the process and determines the overall speed of the entire system. Think of the drum as the heartbeat of the operation; it sets the rhythm that everyone else must follow. The 'buffer' acts as a safety net, which can be either time or inventory.\nWhy this matters: Drum-Buffer-Rope helps learners in Business connect ideas from Operations Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-101-l04-f1",
          "front": "Bottleneck",
          "back": "The process step with the lowest capacity — it limits the throughput of the entire system. Improving non-bottleneck steps does not increase total output"
        },
        {
          "id": "operations-management-101-l04-f2",
          "front": "Theory of Constraints: Five Focusing Steps",
          "back": "1) Identify the constraint 2) Exploit it 3) Subordinate everything else 4) Elevate the constraint 5) Repeat the cycle"
        },
        {
          "id": "operations-management-101-l04-f3",
          "front": "Drum-Buffer-Rope (DBR)",
          "back": "Drum = bottleneck sets pace. Buffer = cushion before bottleneck to prevent starvation. Rope = signal that releases work at the bottleneck's rate"
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "operations-management-101-l05",
      "title": "Checkpoint: Process Analysis & Capacity",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "operations-management-101-l05-q1",
          "text": "A clinic sees 8 patients per hour and each patient spends 2 hours in the system. According to Little's Law, how many patients are in the clinic on average?",
          "options": [
            {
              "id": "a",
              "text": "4"
            },
            {
              "id": "b",
              "text": "10"
            },
            {
              "id": "c",
              "text": "16"
            },
            {
              "id": "d",
              "text": "6"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Little's Law: I = R × T = 8 patients/hour × 2 hours = 16 patients in the system on average."
        },
        {
          "id": "operations-management-101-l05-q2",
          "text": "A factory has a design capacity of 500 units/day, effective capacity of 400 units/day, and produces 360 units. What is the efficiency?",
          "options": [
            {
              "id": "a",
              "text": "72%"
            },
            {
              "id": "b",
              "text": "90%"
            },
            {
              "id": "c",
              "text": "80%"
            },
            {
              "id": "d",
              "text": "88%"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Efficiency = Actual output / Effective capacity = 360/400 = 90%. Utilization would be 360/500 = 72%."
        },
        {
          "id": "operations-management-101-l05-q3",
          "text": "According to the Theory of Constraints, what should you do AFTER identifying the bottleneck?",
          "options": [
            {
              "id": "a",
              "text": "Immediately invest in new equipment to eliminate it"
            },
            {
              "id": "b",
              "text": "Exploit the constraint by maximizing its utilization first"
            },
            {
              "id": "c",
              "text": "Shut down non-bottleneck stations to save costs"
            },
            {
              "id": "d",
              "text": "Move the bottleneck to a different process step"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Step 2 of TOC is to exploit the constraint — get every possible unit of output from it before spending money to add capacity. Only step 4 (elevate) involves investment."
        },
        {
          "id": "operations-management-101-l05-q4",
          "text": "Which process type is best suited for producing large volumes of a standardized product?",
          "options": [
            {
              "id": "a",
              "text": "Job shop process"
            },
            {
              "id": "b",
              "text": "Project process"
            },
            {
              "id": "c",
              "text": "Line process"
            },
            {
              "id": "d",
              "text": "Batch process"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Line processes (like automobile assembly lines) are designed for high-volume, low-variety standardized production with sequential steps."
        }
      ]
    },
    {
      "id": "operations-management-101-l06",
      "title": "Productivity and Process Mapping",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Calculate single-factor and multifactor productivity",
        "Construct a process map to visualize workflow",
        "Build a value stream map to identify waste in a process"
      ],
      "chunks": [
        {
          "id": "operations-management-101-l06-c1",
          "title": "Measuring Productivity",
          "content": "Productivity is a vital concept that helps us understand how well we use our resources to create products or provide services. It is measured by comparing outputs, which are the finished products we create, to inputs, which are the resources we use to make them. For example, let’s imagine a team of 5 workers who can produce 200 units of a product in just one day. To find out how productive each worker is, we can calculate labor productivity by dividing the total output by the number of workers. In this case, each worker is responsible for producing 40 units each day, which shows how much each person contributes to the team's overall success.\nNow, let’s delve into the concept of multifactor productivity. This idea looks at several inputs together, such as labor, materials, and other costs that a business incurs. For instance, if our team spends a total of $2,800 in one day, which includes $2,000 for the workers' wages, $500 for the materials needed to make the products, and $300 for other overhead costs, we can calculate the multifactor productivity. We do this by dividing the total output of 200 units by the total costs of $2,800. This calculation shows that for every dollar spent, the team produces about 0.071 units. This means that understanding how much we spend in relation to what we produce can help us see if we are using our resources wisely.\nTracking productivity over time is crucial for businesses. By observing how productivity changes, companies can determine if their efforts to work more efficiently are effective. This ongoing assessment allows them to make informed decisions about their operations and improve their processes. Ultimately, this leads to greater success and helps businesses thrive in a competitive environment.\nUnderstanding productivity is not just about crunching numbers; it’s about finding innovative ways to work smarter and achieve better results with the resources available. It encourages us to think critically about how we can optimize our efforts and make the most out of what we have. By focusing on productivity, we can contribute to a more efficient and effective workplace, benefiting both the organization and its employees. In summary, productivity is a key factor in the success of any business, and by measuring and improving it, we can ensure that we are on the right path towards achieving our goals.\nContext recap: Productivity is a vital concept that helps us understand how well we use our resources to create products or provide services. It is measured by comparing outputs, which are the finished products we create, to inputs, which are the resources we use to make them. For example, let’s imagine a team of 5 workers who can produce 200 units of a product in just one day. To find out how productive each worker is, we can calculate labor productivity by dividing the total output by the number of workers."
        },
        {
          "id": "operations-management-101-l06-c2",
          "title": "Process Mapping",
          "content": "Process mapping, which is often referred to as flowcharting, is a very useful tool that helps us visualize every single step in a workflow. This technique employs standard symbols to ensure that the information is clear and easy for everyone involved to understand. For example, rectangles are used to represent tasks that need to be completed, diamonds indicate decision points where choices must be made, arrows illustrate the direction of the workflow, and ovals mark where the process begins and ends.\nWhen we take a closer look at a typical customer order process, we might discover that there are as many as 25 distinct steps from the moment an order is placed until it is finally delivered to the customer. This entire process can involve up to 8 handoffs between different departments, where the responsibility for the order is transferred from one team to another. Additionally, there are often 4 approval stages where checks are made to ensure everything is correct before moving forward. This thorough examination helps us understand the complexity of the workflow and the various roles involved.\nBy utilizing a visual format like process mapping, we can easily identify areas where there might be redundancies—steps that are repeated unnecessarily—delays that slow down the process, or complexities that make it harder to follow. These issues might not be immediately obvious when we only look at written procedures. Visualizing the process allows us to see the bigger picture and pinpoint specific areas for improvement.\nFurthermore, we can create cross-functional maps, commonly known as swimlane maps. These maps clearly show which department is responsible for each step in the process. This visual representation makes it much easier to identify any problems with handoffs between teams, which can help improve overall efficiency and communication within the organization. By understanding and refining our processes, we can work together more effectively and provide better service to our customers. This collaborative effort not only enhances productivity but also fosters a culture of continuous improvement, where everyone is encouraged to contribute ideas for making our workflows smoother and more efficient. In conclusion, mastering process mapping is a key skill that can lead to significant improvements in how we manage operations and serve our clients.\nContext recap: Process mapping, which is often referred to as flowcharting, is a very useful tool that helps us visualize every single step in a workflow. This technique employs standard symbols to ensure that the information is clear and easy for everyone involved to understand. For example, rectangles are used to represent tasks that need to be completed, diamonds indicate decision points where choices must be made, arrows illustrate the direction of the workflow, and ovals mark where the process begins and ends. When we take a closer look at a typical customer order process, we might discover that there are as many as 25 distinct steps from the moment an order is placed until it is finally delivered to the customer.\nWhy this matters: Process Mapping helps learners in Business connect ideas from Operations Management Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "operations-management-101-l06-c3",
          "title": "Value Stream Mapping",
          "content": "Value stream mapping, often abbreviated as VSM, is a powerful tool that helps us take a closer look at how processes work, especially in manufacturing. This technique goes beyond simple process mapping by allowing us to categorize each step in a process into three important groups. First, we have the steps that add value, which are the actions that directly improve the product or service we are working on. Next, there are steps that are necessary but do not add value; these are tasks we must do, but they don't enhance the product itself. Finally, we identify steps that are wasteful, which are activities that do not contribute anything useful to the final outcome.\nWhen we apply VSM to a typical manufacturing process, we often find that only a small portion—around 5 to 10 percent—of the total time spent is actually dedicated to activities that enhance the product's value. The rest of the time is often consumed by activities such as waiting for materials, transporting items from one place to another, inspecting products, and reworking items that did not meet quality standards. These activities, while sometimes necessary, do not improve the quality or efficiency of the final product.\nThe concept of value stream mapping was popularized by Toyota, a company known for its innovative production system. In their approach, they create two different maps to visualize the process. The first map shows the current state of the process, illustrating how things are functioning right now. The second map represents the future state, which is the improved process they aim to achieve. By comparing these two maps, organizations can pinpoint specific areas that need improvement and create a clear plan to enhance their processes.\nThis structured method not only helps in reducing waste but also ensures that resources are used more effectively. As a result, organizations can achieve better productivity and higher quality outcomes, not just in manufacturing but in various industries as well. Understanding value stream mapping empowers teams to make informed decisions that can lead to significant improvements in their work. By focusing on what truly adds value and eliminating wasteful practices, businesses can operate more efficiently and deliver better products and services to their customers.\nIn summary, value stream mapping is an essential technique for anyone looking to improve processes and enhance productivity. It encourages a thoughtful examination of every step in a workflow, helping teams to identify what is truly valuable and what can be improved. By implementing VSM, organizations can create a more streamlined and effective operation, ultimately leading to greater success in their endeavors.\nContext recap: Value stream mapping, often abbreviated as VSM, is a powerful tool that helps us take a closer look at how processes work, especially in manufacturing. This technique goes beyond simple process mapping by allowing us to categorize each step in a process into three important groups. First, we have the steps that add value, which are the actions that directly improve the product or service we are working on. Next, there are steps that are necessary but do not add value; these are tasks we must do, but they don't enhance the product itself."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-101-l06-f1",
          "front": "Single-factor vs. multifactor productivity",
          "back": "Single-factor: output divided by one input (e.g., units per worker). Multifactor: output divided by combined inputs in dollars (e.g., units per dollar of total cost)"
        },
        {
          "id": "operations-management-101-l06-f2",
          "front": "Process map symbols",
          "back": "Rectangles = tasks, Diamonds = decision points, Arrows = flow direction, Ovals = start/end points. Swimlanes show departmental responsibilities"
        },
        {
          "id": "operations-management-101-l06-f3",
          "front": "Value stream mapping (VSM)",
          "back": "Maps every process step as value-adding, necessary non-value-adding, or waste. Compares current state to future state to create an improvement roadmap. Typically reveals only 5–10% of lead time is value-adding"
        }
      ]
    },
    {
      "id": "operations-management-101-l07",
      "title": "Final Assessment: Operations Management Fundamentals",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "operations-management-101-l07-q1",
          "text": "In the transformation model, which of the following is an example of an informational transformation?",
          "options": [
            {
              "id": "a",
              "text": "A logistics company moving goods from a warehouse to a store"
            },
            {
              "id": "b",
              "text": "An accounting firm preparing a financial report from raw data"
            },
            {
              "id": "c",
              "text": "A furniture maker shaping wood into a table"
            },
            {
              "id": "d",
              "text": "A hair salon cutting a customer's hair"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Accounting transforms raw data (inputs) into organized financial information (outputs). Logistics changes location, manufacturing changes physical form, and a salon changes the customer's physical state."
        },
        {
          "id": "operations-management-101-l07-q2",
          "text": "In Drum-Buffer-Rope scheduling, what does the 'rope' represent?",
          "options": [
            {
              "id": "a",
              "text": "The inventory buffer placed before the bottleneck"
            },
            {
              "id": "b",
              "text": "The pace-setting rhythm of the bottleneck station"
            },
            {
              "id": "c",
              "text": "A signal that controls work release into the system at the bottleneck's rate"
            },
            {
              "id": "d",
              "text": "The physical conveyor belt connecting workstations"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The rope is a communication mechanism that pulls (releases) work into the system at the rate the bottleneck can handle, preventing upstream overproduction."
        },
        {
          "id": "operations-management-101-l07-q3",
          "text": "A value stream map typically reveals that value-adding time accounts for what percentage of total lead time?",
          "options": [
            {
              "id": "a",
              "text": "50–60%"
            },
            {
              "id": "b",
              "text": "30–40%"
            },
            {
              "id": "c",
              "text": "5–10%"
            },
            {
              "id": "d",
              "text": "75–85%"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Value stream maps commonly show that only 5–10% of lead time adds value. The vast majority is consumed by waiting, transportation, inspection, and other non-value-adding activities."
        },
        {
          "id": "operations-management-101-l07-q4",
          "text": "A company adds warehouse capacity a year before projected demand increases. Which capacity strategy is this?",
          "options": [
            {
              "id": "a",
              "text": "Lag strategy"
            },
            {
              "id": "b",
              "text": "Match strategy"
            },
            {
              "id": "c",
              "text": "Lead strategy"
            },
            {
              "id": "d",
              "text": "Reactive strategy"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A lead strategy builds capacity in advance of anticipated demand — accepting the cost of temporary excess capacity to avoid losing customers when demand arrives."
        }
      ]
    }
  ]
};
