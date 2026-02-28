import type { LearningModule } from "@/lib/modules/types";

export const OperationsManagement101Module: LearningModule = {
  id: "operations-management-101",
  title: "Operations Management Fundamentals",
  description:
    "Understand how organizations transform inputs into valuable outputs. Master process analysis, capacity planning, bottleneck identification, and value stream mapping to drive operational excellence across any industry.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "operations"],
  minAge: 18,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Define operations management and its role in organizational success",
    "Analyze and design business processes using flowcharts and process maps",
    "Calculate and interpret capacity, utilization, and throughput metrics",
    "Identify bottlenecks using the Theory of Constraints",
    "Measure productivity and distinguish between partial and multifactor measures",
    "Construct a value stream map to expose waste in a process",
    "Apply the transformation model to describe any operational system"
  ],
  lessons: [
    {
      id: "operations-management-101-l01",
      title: "What Is Operations Management?",
      type: "video",
      duration: 12,
      objectives: [
        "Define operations management and explain its scope",
        "Describe the transformation model of inputs to outputs",
        "Explain why operations management matters to every functional area"
      ],
      chunks: [
        {
          id: "operations-management-101-l01-c1",
          title: "Operations Management Defined",
          content:
            "Operations management is the discipline of designing, running, and improving the systems that create and deliver an organization's products or services. Every company — whether it manufactures smartphones or delivers healthcare — has an operations function. It sits alongside marketing and finance as one of the three core business functions, and it typically accounts for 60–80 percent of total costs, making it the primary lever for profitability."
        },
        {
          id: "operations-management-101-l01-c2",
          title: "The Transformation Model",
          content:
            "At its core, every operation follows an input-transformation-output model. Inputs include materials, information, customers, and staff. The transformation process adds value by changing the physical properties, location, ownership, or informational state of those inputs. Outputs are the goods and services delivered to customers. A hospital, for example, takes in patients (inputs), applies medical expertise and equipment (transformation), and produces healthier patients (outputs). Understanding this model helps managers see any operation as a system that can be measured and improved."
        },
        {
          id: "operations-management-101-l01-c3",
          title: "Why Operations Management Matters Everywhere",
          content:
            "Operations management is not limited to factories. Amazon's logistics network, Starbucks's barista workflow, and Netflix's content delivery infrastructure are all operations challenges. Marketing promises what operations must deliver; finance funds what operations must manage efficiently. A brilliant strategy fails without excellent execution, and execution is the domain of operations. Companies like Toyota and Zara have built global dominance primarily through superior operational capabilities rather than superior products alone."
        }
      ],
      flashcards: [
        { id: "operations-management-101-l01-f1", front: "Operations management", back: "The design, execution, and improvement of systems that create and deliver an organization's products or services — typically 60–80% of total costs" },
        { id: "operations-management-101-l01-f2", front: "Transformation model", back: "Input → Transformation → Output framework: inputs (materials, information, customers) are transformed by adding value, producing goods and services as outputs" },
        { id: "operations-management-101-l01-f3", front: "Three core business functions", back: "Operations, Marketing, and Finance — operations is responsible for the actual creation and delivery of products and services" }
      ]
    },
    {
      id: "operations-management-101-l02",
      title: "Process Analysis and Design",
      type: "video",
      duration: 14,
      objectives: [
        "Distinguish between different process types and their characteristics",
        "Calculate key process metrics: cycle time, throughput, and flow time",
        "Apply Little's Law to relate inventory, throughput, and flow time"
      ],
      chunks: [
        {
          id: "operations-management-101-l02-c1",
          title: "Process Types",
          content:
            "Processes range along a volume-variety spectrum. Project processes handle one-off, highly customized outputs (building a bridge). Job shop processes handle low-volume, high-variety work (custom furniture). Batch processes group similar items together (bakery production runs). Line processes produce high-volume, low-variety goods (automobile assembly). Continuous processes run nonstop for commodity outputs (oil refining). Choosing the right process type depends on the volume of demand and the degree of customization customers require."
        },
        {
          id: "operations-management-101-l02-c2",
          title: "Key Process Metrics",
          content:
            "Three metrics form the foundation of process analysis. Cycle time is the time between successive units completing the process — if a bakery produces one loaf every 2 minutes, the cycle time is 2 minutes. Throughput rate is the inverse: the number of units produced per time period (30 loaves per hour). Flow time (or lead time) is the total time a single unit spends in the system from entry to exit, including waiting. These metrics reveal how fast, how much, and how long."
        },
        {
          id: "operations-management-101-l02-c3",
          title: "Little's Law",
          content:
            "Little's Law is one of the most powerful relationships in operations: Inventory = Throughput Rate × Flow Time (I = R × T). If a clinic sees 10 patients per hour (throughput) and each patient spends 3 hours in the system (flow time), there are on average 30 patients in the clinic at any time (inventory). This law holds for any stable system and allows managers to calculate any one variable if the other two are known. It reveals, for instance, that reducing flow time while holding throughput constant reduces work-in-progress inventory."
        }
      ],
      flashcards: [
        { id: "operations-management-101-l02-f1", front: "Process types (volume-variety spectrum)", back: "Project → Job shop → Batch → Line → Continuous — moving from low volume/high variety to high volume/low variety" },
        { id: "operations-management-101-l02-f2", front: "Cycle time vs. throughput rate", back: "Cycle time is the interval between completed units; throughput rate is units produced per time period — they are inverses of each other" },
        { id: "operations-management-101-l02-f3", front: "Little's Law", back: "Inventory = Throughput Rate × Flow Time (I = R × T) — holds for any stable system and connects three fundamental process metrics" }
      ]
    },
    {
      id: "operations-management-101-l03",
      title: "Capacity Planning",
      type: "interactive",
      duration: 15,
      objectives: [
        "Define capacity and distinguish between design, effective, and actual capacity",
        "Calculate capacity utilization and efficiency",
        "Evaluate capacity expansion strategies: lead, lag, and match"
      ],
      chunks: [
        {
          id: "operations-management-101-l03-c1",
          title: "Types of Capacity",
          content:
            "Design capacity is the theoretical maximum output under ideal conditions — a factory designed to produce 1,000 units per day if everything runs perfectly. Effective capacity accounts for planned downtime such as maintenance, shift changes, and setup times — perhaps 850 units. Actual output is what the system truly delivers given unplanned disruptions like breakdowns and quality rejects — maybe 780 units. The gap between these figures reveals improvement opportunities."
        },
        {
          id: "operations-management-101-l03-c2",
          title: "Utilization and Efficiency",
          content:
            "Utilization measures actual output as a percentage of design capacity: 780/1,000 = 78%. Efficiency measures actual output against effective capacity: 780/850 = 91.8%. A factory can have high efficiency but low utilization if planned downtime is excessive. Managers track both metrics to separate planning issues (too much scheduled downtime) from execution issues (breakdowns, defects). World-class manufacturers target overall equipment effectiveness (OEE) above 85%, which combines availability, performance, and quality."
        },
        {
          id: "operations-management-101-l03-c3",
          title: "Capacity Expansion Strategies",
          content:
            "When demand grows, organizations choose among three strategies. A lead strategy adds capacity before demand materializes — accepting short-term costs to capture market share (Amazon building warehouses ahead of demand). A lag strategy waits until existing capacity is fully utilized — reducing financial risk but potentially losing customers. A match strategy adds capacity in small increments to track demand closely. The right choice depends on the cost of excess capacity versus the cost of lost sales, forecast accuracy, and competitive dynamics."
        }
      ],
      flashcards: [
        { id: "operations-management-101-l03-f1", front: "Design vs. effective vs. actual capacity", back: "Design: theoretical max under ideal conditions. Effective: adjusted for planned downtime. Actual: what is truly produced after unplanned losses" },
        { id: "operations-management-101-l03-f2", front: "Utilization vs. efficiency", back: "Utilization = Actual output / Design capacity. Efficiency = Actual output / Effective capacity. Both are expressed as percentages" },
        { id: "operations-management-101-l03-f3", front: "Three capacity expansion strategies", back: "Lead (add before demand), Lag (add after demand exceeds capacity), Match (add in small increments tracking demand)" }
      ]
    },
    {
      id: "operations-management-101-l04",
      title: "Bottleneck Theory and the Theory of Constraints",
      type: "video",
      duration: 14,
      objectives: [
        "Define a bottleneck and explain its impact on system throughput",
        "Describe the five focusing steps of the Theory of Constraints",
        "Apply drum-buffer-rope scheduling logic"
      ],
      chunks: [
        {
          id: "operations-management-101-l04-c1",
          title: "What Is a Bottleneck?",
          content:
            "A bottleneck is the process step with the lowest capacity — the constraint that limits the throughput of the entire system. In a sandwich shop, if bread slicing takes 30 seconds, filling takes 90 seconds, and wrapping takes 20 seconds, the filling station is the bottleneck. The entire shop can only produce one sandwich every 90 seconds regardless of how fast the other stations work. Investing in non-bottleneck steps yields zero improvement in system output, which is why identifying the true constraint is critical."
        },
        {
          id: "operations-management-101-l04-c2",
          title: "The Five Focusing Steps",
          content:
            "Eliyahu Goldratt's Theory of Constraints (TOC) provides a systematic approach: (1) Identify the constraint — find the bottleneck. (2) Exploit the constraint — maximize its utilization with no idle time or wasted capacity. (3) Subordinate everything else — align all other steps to support the bottleneck's pace. (4) Elevate the constraint — invest in additional capacity at the bottleneck. (5) Repeat — once the bottleneck is broken, a new constraint emerges somewhere else. This cycle drives continuous improvement focused where it matters most."
        },
        {
          id: "operations-management-101-l04-c3",
          title: "Drum-Buffer-Rope",
          content:
            "Drum-Buffer-Rope (DBR) is TOC's scheduling method. The drum is the bottleneck — it sets the pace for the entire system. The buffer is a time or inventory cushion placed before the bottleneck to ensure it never starves for work. The rope is a communication mechanism that pulls work into the system at the bottleneck's rate, preventing overproduction upstream. In practice, DBR prevents the common problem of non-bottleneck stations building up mountains of work-in-progress that clog the system without increasing output."
        }
      ],
      flashcards: [
        { id: "operations-management-101-l04-f1", front: "Bottleneck", back: "The process step with the lowest capacity — it limits the throughput of the entire system. Improving non-bottleneck steps does not increase total output" },
        { id: "operations-management-101-l04-f2", front: "Theory of Constraints: Five Focusing Steps", back: "1) Identify the constraint 2) Exploit it 3) Subordinate everything else 4) Elevate the constraint 5) Repeat the cycle" },
        { id: "operations-management-101-l04-f3", front: "Drum-Buffer-Rope (DBR)", back: "Drum = bottleneck sets pace. Buffer = cushion before bottleneck to prevent starvation. Rope = signal that releases work at the bottleneck's rate" }
      ]
    },
    {
      id: "operations-management-101-l05",
      title: "Checkpoint: Process Analysis & Capacity",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "operations-management-101-l05-q1",
          text: "A clinic sees 8 patients per hour and each patient spends 2 hours in the system. According to Little's Law, how many patients are in the clinic on average?",
          options: [
            { id: "a", text: "4" },
            { id: "b", text: "10" },
            { id: "c", text: "16" },
            { id: "d", text: "6" }
          ],
          correctOptionId: "c",
          explanation: "Little's Law: I = R × T = 8 patients/hour × 2 hours = 16 patients in the system on average."
        },
        {
          id: "operations-management-101-l05-q2",
          text: "A factory has a design capacity of 500 units/day, effective capacity of 400 units/day, and produces 360 units. What is the efficiency?",
          options: [
            { id: "a", text: "72%" },
            { id: "b", text: "90%" },
            { id: "c", text: "80%" },
            { id: "d", text: "88%" }
          ],
          correctOptionId: "b",
          explanation: "Efficiency = Actual output / Effective capacity = 360/400 = 90%. Utilization would be 360/500 = 72%."
        },
        {
          id: "operations-management-101-l05-q3",
          text: "According to the Theory of Constraints, what should you do AFTER identifying the bottleneck?",
          options: [
            { id: "a", text: "Immediately invest in new equipment to eliminate it" },
            { id: "b", text: "Exploit the constraint by maximizing its utilization first" },
            { id: "c", text: "Shut down non-bottleneck stations to save costs" },
            { id: "d", text: "Move the bottleneck to a different process step" }
          ],
          correctOptionId: "b",
          explanation: "Step 2 of TOC is to exploit the constraint — get every possible unit of output from it before spending money to add capacity. Only step 4 (elevate) involves investment."
        },
        {
          id: "operations-management-101-l05-q4",
          text: "Which process type is best suited for producing large volumes of a standardized product?",
          options: [
            { id: "a", text: "Job shop process" },
            { id: "b", text: "Project process" },
            { id: "c", text: "Line process" },
            { id: "d", text: "Batch process" }
          ],
          correctOptionId: "c",
          explanation: "Line processes (like automobile assembly lines) are designed for high-volume, low-variety standardized production with sequential steps."
        }
      ]
    },
    {
      id: "operations-management-101-l06",
      title: "Productivity and Process Mapping",
      type: "video",
      duration: 14,
      objectives: [
        "Calculate single-factor and multifactor productivity",
        "Construct a process map to visualize workflow",
        "Build a value stream map to identify waste in a process"
      ],
      chunks: [
        {
          id: "operations-management-101-l06-c1",
          title: "Measuring Productivity",
          content:
            "Productivity is the ratio of outputs to inputs. Single-factor productivity isolates one input: if a team of 5 workers produces 200 units per day, labor productivity is 40 units per worker per day. Multifactor productivity combines multiple inputs into a single measure, typically using dollars: if the same team costs $2,000/day in labor plus $500 in materials and $300 in overhead, multifactor productivity is 200/$2,800 = 0.071 units per dollar. Tracking productivity over time reveals whether improvement efforts are working."
        },
        {
          id: "operations-management-101-l06-c2",
          title: "Process Mapping",
          content:
            "A process map (or flowchart) visually documents every step in a workflow using standard symbols: rectangles for tasks, diamonds for decision points, arrows for flow direction, and ovals for start/end points. Mapping a customer order process might reveal 25 steps from order entry to delivery, including 8 handoffs between departments and 4 approval gates. The visual format exposes redundancies, delays, and unnecessary complexity that are invisible in written procedures. Cross-functional (swimlane) maps show which department performs each step, highlighting handoff problems."
        },
        {
          id: "operations-management-101-l06-c3",
          title: "Value Stream Mapping",
          content:
            "Value stream mapping (VSM) goes beyond process mapping by categorizing every step as value-adding, non-value-adding but necessary, or pure waste. A typical VSM of a manufacturing process reveals that only 5–10 percent of total lead time is spent on value-adding activities. The rest is waiting, transportation, inspection, and rework. Toyota pioneered VSM as part of its production system, drawing both the current state (how things work today) and a future state (the improved target). The gap between the two becomes the improvement roadmap."
        }
      ],
      flashcards: [
        { id: "operations-management-101-l06-f1", front: "Single-factor vs. multifactor productivity", back: "Single-factor: output divided by one input (e.g., units per worker). Multifactor: output divided by combined inputs in dollars (e.g., units per dollar of total cost)" },
        { id: "operations-management-101-l06-f2", front: "Process map symbols", back: "Rectangles = tasks, Diamonds = decision points, Arrows = flow direction, Ovals = start/end points. Swimlanes show departmental responsibilities" },
        { id: "operations-management-101-l06-f3", front: "Value stream mapping (VSM)", back: "Maps every process step as value-adding, necessary non-value-adding, or waste. Compares current state to future state to create an improvement roadmap. Typically reveals only 5–10% of lead time is value-adding" }
      ]
    },
    {
      id: "operations-management-101-l07",
      title: "Final Assessment: Operations Management Fundamentals",
      type: "quiz",
      duration: 15,
      questions: [
        {
          id: "operations-management-101-l07-q1",
          text: "In the transformation model, which of the following is an example of an informational transformation?",
          options: [
            { id: "a", text: "A logistics company moving goods from a warehouse to a store" },
            { id: "b", text: "An accounting firm preparing a financial report from raw data" },
            { id: "c", text: "A furniture maker shaping wood into a table" },
            { id: "d", text: "A hair salon cutting a customer's hair" }
          ],
          correctOptionId: "b",
          explanation: "Accounting transforms raw data (inputs) into organized financial information (outputs). Logistics changes location, manufacturing changes physical form, and a salon changes the customer's physical state."
        },
        {
          id: "operations-management-101-l07-q2",
          text: "In Drum-Buffer-Rope scheduling, what does the 'rope' represent?",
          options: [
            { id: "a", text: "The inventory buffer placed before the bottleneck" },
            { id: "b", text: "The pace-setting rhythm of the bottleneck station" },
            { id: "c", text: "A signal that controls work release into the system at the bottleneck's rate" },
            { id: "d", text: "The physical conveyor belt connecting workstations" }
          ],
          correctOptionId: "c",
          explanation: "The rope is a communication mechanism that pulls (releases) work into the system at the rate the bottleneck can handle, preventing upstream overproduction."
        },
        {
          id: "operations-management-101-l07-q3",
          text: "A value stream map typically reveals that value-adding time accounts for what percentage of total lead time?",
          options: [
            { id: "a", text: "50–60%" },
            { id: "b", text: "30–40%" },
            { id: "c", text: "5–10%" },
            { id: "d", text: "75–85%" }
          ],
          correctOptionId: "c",
          explanation: "Value stream maps commonly show that only 5–10% of lead time adds value. The vast majority is consumed by waiting, transportation, inspection, and other non-value-adding activities."
        },
        {
          id: "operations-management-101-l07-q4",
          text: "A company adds warehouse capacity a year before projected demand increases. Which capacity strategy is this?",
          options: [
            { id: "a", text: "Lag strategy" },
            { id: "b", text: "Match strategy" },
            { id: "c", text: "Lead strategy" },
            { id: "d", text: "Reactive strategy" }
          ],
          correctOptionId: "c",
          explanation: "A lead strategy builds capacity in advance of anticipated demand — accepting the cost of temporary excess capacity to avoid losing customers when demand arrives."
        }
      ]
    }
  ],
};
