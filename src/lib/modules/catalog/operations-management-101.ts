import type { LearningModule } from "@/lib/modules/types";

export const operations_management_101_Module: LearningModule = {
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
  "version": "1.1.0",
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
          "content": "Operations management is the business function responsible for designing, managing, and improving the systems that create and deliver a firm's products or services. It is a core function, alongside marketing and finance, and is critical to any organization, from manufacturing to healthcare. This function oversees the processes that transform inputs, such as raw materials, labor, and capital, into outputs that customers value. Because operations can account for 60-80% of a company's costs, effective management in this area is a primary driver of profitability and competitive advantage. Optimizing operations allows companies to reduce waste, improve quality, and increase responsiveness to customer demands."
        },
        {
          "id": "operations-management-101-l01-c2",
          "title": "The Transformation Model",
          "content": "At the core of operations management is the input-transformation-output model, a framework for viewing any operation as a system. Inputs are the resources entering the system, such as materials, information, customers, and labor. The transformation process is the set of activities that adds value by converting these inputs into outputs. This can involve altering physical properties (manufacturing), changing location (logistics), transferring ownership (retail), or updating information (accounting). The outputs are the final goods and services delivered to the customer. For example, in a hospital, the inputs are patients, staff, and medical supplies; the transformation is the healthcare provided; and the output is healthier patients. This model enables managers to analyze, measure, and improve any operational system."
        },
        {
          "id": "operations-management-101-l01-c3",
          "title": "Why Operations Management Matters Everywhere",
          "content": "Operations management is not confined to factories; it is integral to every industry. Amazon's rapid delivery, Starbucks' consistent coffee preparation, and Netflix's seamless content streaming are all triumphs of operational excellence. While marketing makes promises to customers, it is the operations function that must deliver on them. Finance provides the capital required for the resources and processes that operations manages. A brilliant business strategy is worthless without effective execution, which is the domain of operations. Industry leaders like Toyota and Zara dominate their markets not just through superior products, but through world-class operational capabilities that provide a distinct competitive advantage."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-101-l01-f1",
          "front": "Operations management",
          "back": "The design, execution, and improvement of systems that create and deliver an organization's products or services — typically 60–80% of total costs."
        },
        {
          "id": "operations-management-101-l01-f2",
          "front": "Transformation model",
          "back": "Input → Transformation → Output framework: inputs (materials, information, customers) are transformed by adding value, producing goods and services as outputs."
        },
        {
          "id": "operations-management-101-l01-f3",
          "front": "Three core business functions",
          "back": "Operations, Marketing, and Finance — operations is responsible for the actual creation and delivery of products and services."
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-101-l01-a1",
          "type": "image",
          "title": "The Transformation Model Diagram",
          "content": "A visual diagram showing inputs (materials, labor, information) flowing into a transformation process box, which then produces outputs (goods, services)."
        },
        {
          "id": "operations-management-101-l01-a2",
          "type": "image",
          "title": "Core Functions of a Business",
          "content": "A Venn diagram or flowchart illustrating the interconnected roles of Operations, Marketing, and Finance within an organization."
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
          "content": "Processes can be categorized along a spectrum based on production volume and product variety. At one end, project processes create unique, one-of-a-kind outputs, like building a bridge. Job shop processes handle low-volume, high-variety work, such as a custom furniture maker. Batch processes produce groups of similar items together, like a bakery making loaves of bread. Line processes are used for high-volume, standardized goods, as in an automobile assembly line. At the other end, continuous processes run non-stop to produce high-volume, non-discrete commodities like refined oil. Selecting the right process type is a strategic decision that depends on market demand and the level of customization required."
        },
        {
          "id": "operations-management-101-l02-c2",
          "title": "Key Process Metrics",
          "content": "Three fundamental metrics are used to analyze process performance. Cycle time is the average time between the completion of successive units. For example, if a car rolls off an assembly line every 2 minutes, the cycle time is 2 minutes. Throughput rate is the number of units a process produces over a period of time (e.g., 30 cars per hour). It is the inverse of cycle time. Flow time (or lead time) is the total time a single unit spends in the entire process, from start to finish, including both processing and waiting time. These metrics provide critical insights into a process's speed, efficiency, and customer responsiveness."
        },
        {
          "id": "operations-management-101-l02-c3",
          "title": "Little's Law",
          "content": "Little's Law describes a fundamental relationship between three key process metrics in any stable system: Inventory = Throughput Rate × Flow Time (I = R × T). For example, if a clinic has a throughput rate (R) of 10 patients per hour, and the average patient flow time (T) is 3 hours, the average number of patients in the clinic (inventory, I) at any given time is 10 × 3 = 30 patients. This powerful formula allows managers to understand the trade-offs in a system. To reduce work-in-process inventory, a manager must either decrease flow time or, less desirably, decrease the throughput rate."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-101-l02-f1",
          "front": "Process types (volume-variety spectrum)",
          "back": "Project → Job shop → Batch → Line → Continuous — moving from low volume/high variety to high volume/low variety."
        },
        {
          "id": "operations-management-101-l02-f2",
          "front": "Cycle time vs. throughput rate",
          "back": "Cycle time is the interval between completed units; throughput rate is units produced per time period — they are inverses of each other."
        },
        {
          "id": "operations-management-101-l02-f3",
          "front": "Little's Law",
          "back": "Inventory = Throughput Rate × Flow Time (I = R × T) — holds for any stable system and connects three fundamental process metrics."
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-101-l02-a1",
          "type": "image",
          "title": "The Product-Process Matrix",
          "content": "A chart with 'Process Type' on one axis and 'Volume/Variety' on the other, showing where Project, Job Shop, Batch, Line, and Continuous processes fit."
        },
        {
          "id": "operations-management-101-l02-a2",
          "type": "image",
          "title": "Little's Law Illustrated",
          "content": "A simple diagram of a 'black box' system, showing units entering (Throughput Rate), units inside (Inventory), and an arrow indicating the time spent inside (Flow Time)."
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
          "content": "Capacity planning requires understanding three different measures. Design capacity is the theoretical maximum output of a system under ideal conditions. For example, a factory might be designed to produce 1,000 units per day. Effective capacity is the realistic output expected, accounting for planned downtime like maintenance, shift changes, and setups; this might be 850 units per day. Finally, actual output is what is truly produced, which is often lower than effective capacity due to unplanned disruptions like equipment breakdowns or quality issues, perhaps resulting in 780 units. Analyzing the gaps between these three levels helps managers identify opportunities for improvement."
        },
        {
          "id": "operations-management-101-l03-c2",
          "title": "Utilization and Efficiency",
          "content": "Two key metrics measure how well capacity is being used. Utilization measures actual output relative to design capacity. Using our example, Utilization = 780 / 1,000 = 78%. It shows how much of the maximum potential is being achieved. Efficiency measures actual output relative to effective capacity. Efficiency = 780 / 850 = 91.8%. This metric indicates how well the system is performing against its realistic potential. A system can be highly efficient but have low utilization if there is excessive planned downtime. Managers track both metrics to distinguish between planning problems (low effective capacity) and execution problems (low efficiency)."
        },
        {
          "id": "operations-management-101-l03-c3",
          "title": "Capacity Expansion Strategies",
          "content": "When facing growing demand, firms can choose from three main capacity expansion strategies. A lead strategy adds capacity in anticipation of future demand, ensuring the ability to capture market share but risking underutilization. A lag strategy waits until demand exceeds current capacity before expanding, minimizing financial risk but potentially losing sales. A match strategy adds capacity in smaller increments to keep pace with changing demand, offering a balanced but potentially less efficient approach. The choice depends on the cost of excess capacity versus lost sales, demand forecast accuracy, and competitive dynamics."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-101-l03-f1",
          "front": "Design vs. effective vs. actual capacity",
          "back": "Design: theoretical max under ideal conditions. Effective: adjusted for planned downtime. Actual: what is truly produced after unplanned losses."
        },
        {
          "id": "operations-management-101-l03-f2",
          "front": "Utilization vs. efficiency",
          "back": "Utilization = Actual output / Design capacity. Efficiency = Actual output / Effective capacity. Both are expressed as percentages."
        },
        {
          "id": "operations-management-101-l03-f3",
          "front": "Three capacity expansion strategies",
          "back": "Lead (add before demand), Lag (add after demand exceeds capacity), Match (add in small increments tracking demand)."
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-101-l03-a1",
          "type": "practice",
          "title": "Guided Practice: Calculate Utilization & Efficiency",
          "content": "Given scenarios with different design capacity, effective capacity, and actual output numbers, calculate and interpret the utilization and efficiency rates."
        },
        {
          "id": "operations-management-101-l03-a2",
          "type": "image",
          "title": "Capacity Expansion Strategies Graph",
          "content": "A graph with Time on the x-axis and Capacity/Demand on the y-axis. A rising 'Demand' line is shown with three different 'Capacity' lines illustrating the Lead, Lag, and Match strategies."
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
          "content": "A bottleneck is the step in a process with the lowest capacity, which constrains the throughput of the entire system. Consider a sandwich shop where slicing bread takes 30 seconds, adding fillings takes 90 seconds, and wrapping takes 20 seconds. The filling station is the bottleneck. No matter how fast the other stations work, the shop's maximum output is limited to one sandwich every 90 seconds. The capacity of the entire system is equal to the capacity of its bottleneck. Therefore, any effort to improve overall output must focus on the bottleneck; improving non-bottleneck steps will not increase system throughput and may only create more inventory."
        },
        {
          "id": "operations-management-101-l04-c2",
          "title": "The Five Focusing Steps",
          "content": "Eliyahu Goldratt's Theory of Constraints (TOC) provides a systematic process for managing bottlenecks and driving continuous improvement. The five steps are: 1) Identify the system's constraint (the bottleneck). 2) Exploit the constraint by ensuring it is always operating at maximum capacity with no idle time. 3) Subordinate everything else to the constraint, meaning all other processes should be paced to support the bottleneck. 4) Elevate the constraint by investing in more capacity at that step if needed. 5) Repeat the process, because once a constraint is elevated, a new one will emerge elsewhere in the system."
        },
        {
          "id": "operations-management-101-l04-c3",
          "title": "Drum-Buffer-Rope",
          "content": "Drum-Buffer-Rope (DBR) is a scheduling methodology based on the Theory of Constraints. The 'drum' is the bottleneck, which sets the pace (the 'drumbeat') for the entire system. The 'buffer' is a strategic amount of inventory or time placed immediately before the bottleneck to ensure it is never starved for work due to upstream disruptions. The 'rope' is a communication signal that pulls work into the system at the same rate as the bottleneck's pace. This prevents upstream, non-bottleneck stations from overproducing and creating excess work-in-progress inventory, which can clog the system."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-101-l04-f1",
          "front": "Bottleneck",
          "back": "The process step with the lowest capacity — it limits the throughput of the entire system. Improving non-bottleneck steps does not increase total output."
        },
        {
          "id": "operations-management-101-l04-f2",
          "front": "Theory of Constraints: Five Focusing Steps",
          "back": "1) Identify the constraint 2) Exploit it 3) Subordinate everything else 4) Elevate the constraint 5) Repeat the cycle."
        },
        {
          "id": "operations-management-101-l04-f3",
          "front": "Drum-Buffer-Rope (DBR)",
          "back": "Drum = bottleneck sets pace. Buffer = cushion before bottleneck to prevent starvation. Rope = signal that releases work at the bottleneck's rate."
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-101-l04-a1",
          "type": "image",
          "title": "Process Flow with Bottleneck",
          "content": "A simple flowchart of 3-4 steps, with capacity numbers for each. One step has a significantly lower capacity, visually highlighted as the bottleneck."
        },
        {
          "id": "operations-management-101-l04-a2",
          "type": "image",
          "title": "Drum-Buffer-Rope (DBR) Diagram",
          "content": "A visual representation of a production line showing the 'Rope' releasing materials, a 'Buffer' of inventory before the 'Drum' (bottleneck station), and the finished goods output."
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
          "content": "Productivity measures the efficiency of converting inputs into outputs, calculated as Output / Input. Single-factor productivity compares output to a single input. For example, if 5 workers produce 200 units, labor productivity is 200 units / 5 workers = 40 units per worker. Multifactor productivity compares output to a combination of inputs, usually expressed in dollar value. If the 200 units required $2,000 in labor, $500 in materials, and $300 in overhead (total input cost of $2,800), the multifactor productivity is 200 units / $2,800 = 0.071 units per dollar. Tracking productivity over time indicates whether operational improvements are successful."
        },
        {
          "id": "operations-management-101-l06-c2",
          "title": "Process Mapping",
          "content": "Process mapping, or flowcharting, is a tool for visualizing the steps in a workflow. It uses standard symbols: rectangles for tasks, diamonds for decisions, arrows for flow, and ovals for start/end points. By mapping a process, teams can identify redundancies, delays, and unnecessary complexities that may not be apparent from written procedures. A cross-functional map, or swimlane diagram, further clarifies a process by organizing steps into lanes corresponding to the departments or individuals responsible. This is particularly effective for highlighting issues at handoff points between different groups."
        },
        {
          "id": "operations-management-101-l06-c3",
          "title": "Value Stream Mapping",
          "content": "Value Stream Mapping (VSM) is an advanced process mapping technique from Lean management that visualizes the flow of material and information. It goes beyond a simple flowchart by classifying each step as value-adding, necessary but non-value-adding, or waste. Studies often reveal that only 5-10% of total process time is value-adding. The rest is consumed by waste (Muda), such as waiting, excess inventory, transportation, over-processing, and defects. The VSM process involves creating a 'current state' map to document the existing process and a 'future state' map to design a leaner, more efficient process, providing a clear roadmap for improvement."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-101-l06-f1",
          "front": "Single-factor vs. multifactor productivity",
          "back": "Single-factor: output divided by one input (e.g., units per worker). Multifactor: output divided by combined inputs in dollars (e.g., units per dollar of total cost)."
        },
        {
          "id": "operations-management-101-l06-f2",
          "front": "Process map symbols",
          "back": "Rectangles = tasks, Diamonds = decision points, Arrows = flow direction, Ovals = start/end points. Swimlanes show departmental responsibilities."
        },
        {
          "id": "operations-management-101-l06-f3",
          "front": "Value stream mapping (VSM)",
          "back": "Maps every process step as value-adding, necessary non-value-adding, or waste. Compares current state to future state to create an improvement roadmap. Typically reveals only 5–10% of lead time is value-adding."
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-101-l06-a1",
          "type": "image",
          "title": "Process Map Example (Swimlane Diagram)",
          "content": "A flowchart for an order fulfillment process, with horizontal lanes for 'Sales', 'Warehouse', and 'Shipping' departments, showing the flow of tasks between them."
        },
        {
          "id": "operations-management-101-l06-a2",
          "type": "image",
          "title": "Value Stream Map (VSM) Example",
          "content": "A detailed map showing process steps, with data boxes for cycle time and inventory. A timeline at the bottom separates value-adding time from non-value-adding time."
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
