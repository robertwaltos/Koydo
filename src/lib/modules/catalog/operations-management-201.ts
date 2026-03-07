import type { LearningModule } from "@/lib/modules/types";

export const operations_management_201_Module: LearningModule = {
  "id": "operations-management-201",
  "title": "Quality Management & Lean Operations",
  "description": "Explore the core principles that drive operational excellence. This module covers Total Quality Management (TQM), the data-driven Six Sigma DMAIC methodology, and the lean philosophy of the Toyota Production System. Learn to identify and eliminate waste, implement continuous improvement with kaizen, and use statistical process control to manage variation.",
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
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Explain the principles and evolution of Total Quality Management",
    "Apply the Six Sigma DMAIC framework to solve quality problems",
    "Describe the core pillars of the Toyota Production System",
    "Identify and eliminate the seven wastes (muda) in any process",
    "Implement continuous improvement through kaizen events",
    "Interpret statistical process control charts for variation analysis",
    "Compare major international quality standards including ISO 9001"
  ],
  "lessons": [
    {
      "id": "operations-management-201-l01",
      "title": "Total Quality Management",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Define TQM and trace its historical evolution",
        "Explain the contributions of Deming, Juran, and Crosby",
        "Describe the core principles that underpin TQM"
      ],
      "chunks": [
        {
          "id": "operations-management-201-l01-c1",
          "title": "What Is TQM?",
          "content": "Total Quality Management (TQM) is a management philosophy that involves everyone in an organization in a continual effort to improve quality and customer satisfaction. The concept originated in post-WWII Japan, heavily influenced by American thinkers like W. Edwards Deming. He argued that most quality problems are caused by flawed systems and processes, not by the workers within them. TQM is built on three core principles: customer focus, where quality is ultimately defined by the customer's perception; continuous improvement, the ongoing effort to find better ways of doing things; and total participation, the idea that quality is everyone's responsibility, from the CEO to the frontline employee. By embedding these principles, companies aim to enhance products and services, leading to greater customer loyalty and long-term success."
        },
        {
          "id": "operations-management-201-l01-c2",
          "title": "The Quality Pioneers",
          "content": "Several key figures shaped modern quality management. W. Edwards Deming introduced the Plan-Do-Check-Act (PDCA) cycle for continuous improvement and his 14 Points for management transformation. He famously stated that 85% of quality problems are systemic, not worker-related. Joseph Juran applied the Pareto principle, or 80/20 rule, to quality, suggesting that a vital few causes are responsible for most defects. He also developed the Quality Trilogy: quality planning, quality control, and quality improvement. Philip Crosby championed the philosophy of 'zero defects' and famously declared that 'quality is free.' He argued that the costs of preventing defects (like training and process design) are always lower than the costs of correcting them (like rework, scrap, and warranty claims). Together, their ideas form the foundation of TQM."
        },
        {
          "id": "operations-management-201-l01-c3",
          "title": "Core TQM Principles in Practice",
          "content": "TQM is not just a theory; it's implemented through specific practices. For example, Motorola famously used TQM principles to reduce product defects by over 99% in a decade. TQM-driven organizations often use cross-functional teams, bringing together employees from different departments to solve quality problems. They build strategic partnerships with suppliers, selecting them based on quality and reliability, not just the lowest price. A key element is employee empowerment, giving workers the authority to stop production to address a defect, ensuring quality is built-in, not just inspected at the end. Decisions are data-driven, using facts and analysis to guide improvements. In the U.S., the Malcolm Baldrige National Quality Award recognizes companies that demonstrate excellence in leadership, strategy, customer focus, and operational results, serving as a benchmark for TQM implementation."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-201-l01-f1",
          "front": "Total Quality Management (TQM)",
          "back": "A company-wide philosophy making quality everyone's responsibility. Three pillars: customer focus, continuous improvement, and total participation."
        },
        {
          "id": "operations-management-201-l01-f2",
          "front": "Deming's key insight",
          "back": "85% of quality problems are system problems, not worker problems. He created the PDCA cycle and 14 Points for management transformation."
        },
        {
          "id": "operations-management-201-l01-f3",
          "front": "Crosby's 'Quality is Free'",
          "back": "The cost of preventing defects is always less than the cost of finding and fixing them, so investing in quality saves money."
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-201-l01-a1",
          "type": "infographic",
          "title": "The Pillars of TQM",
          "content": "A visual graphic depicting the three core principles of TQM: Customer Focus, Continuous Improvement, and Total Participation, with icons for each."
        },
        {
          "id": "operations-management-201-l01-a2",
          "type": "diagram",
          "title": "The Quality Gurus",
          "content": "Side-by-side comparison of the core philosophies of Deming, Juran, and Crosby."
        }
      ]
    },
    {
      "id": "operations-management-201-l02",
      "title": "Six Sigma and the DMAIC Framework",
      "type": "video",
      "duration": 15,
      "objectives": [
        "Explain what Six Sigma means statistically and as a methodology",
        "Walk through each phase of DMAIC with practical tools",
        "Distinguish between Six Sigma belt levels and their roles"
      ],
      "chunks": [
        {
          "id": "operations-management-201-l02-c1",
          "title": "Six Sigma Fundamentals",
          "content": "Six Sigma is a disciplined, data-driven methodology for eliminating defects in any process. Statistically, a 'six sigma' process produces only 3.4 defects per million opportunities (DPMO), a level of quality that is nearly perfect. Developed by Motorola in the 1980s and famously adopted by General Electric, Six Sigma saved companies billions by reducing waste and improving quality. The core idea is that every process has variation, and reducing this variation is the key to consistent, high-quality output. By using statistical methods to analyze data, organizations can understand the sources of variation and make targeted improvements that meet or exceed customer expectations."
        },
        {
          "id": "operations-management-201-l02-c2",
          "title": "The DMAIC Phases",
          "content": "The DMAIC framework is the structured problem-solving engine of Six Sigma. It consists of five phases. First is Define, where the team clarifies the problem, customer requirements, and project scope, often captured in a project charter. Second is Measure, where the team collects data to establish a baseline of the process's current performance and validates the measurement system's accuracy. Third is Analyze, where the team uses statistical tools like Pareto charts and fishbone diagrams to identify the root causes of the problem. Fourth is Improve, where the team brainstorms, tests, and implements solutions to address the root causes. Finally, Control is the phase where the team uses tools like control charts and standard operating procedures to ensure the improvements are sustained over time."
        },
        {
          "id": "operations-management-201-l02-c3",
          "title": "Belt System and Organizational Structure",
          "content": "Six Sigma uses a martial arts-inspired belt system to define roles and expertise. Yellow Belts have a basic understanding and participate on project teams. Green Belts lead smaller projects while maintaining their regular job duties. Black Belts are full-time project leaders with deep statistical expertise, managing several high-impact projects per year. Master Black Belts are the most experienced, serving as mentors, trainers, and strategists for the organization's Six Sigma program. Supporting this structure are Champions, who are senior leaders that select projects, remove organizational barriers, and ensure that improvement efforts align with business goals. This structure embeds a culture of continuous, data-driven improvement throughout the organization."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-201-l02-f1",
          "front": "Six Sigma (statistical meaning)",
          "back": "3.4 defects per million opportunities — a measure of near-perfect process performance where variation is so small that customer specs are almost always met."
        },
        {
          "id": "operations-management-201-l02-f2",
          "front": "DMAIC",
          "back": "Define → Measure → Analyze → Improve → Control — the five-phase Six Sigma problem-solving methodology."
        },
        {
          "id": "operations-management-201-l02-f3",
          "front": "Six Sigma Black Belt",
          "back": "A full-time project leader with deep statistical expertise, typically managing 4–6 improvement projects per year."
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-201-l02-a1",
          "type": "diagram",
          "title": "The DMAIC Cycle",
          "content": "A circular flow diagram illustrating the five phases of DMAIC: Define, Measure, Analyze, Improve, and Control, with a key tool listed for each phase."
        },
        {
          "id": "operations-management-201-l02-a2",
          "type": "infographic",
          "title": "Six Sigma Belt Roles",
          "content": "A pyramid graphic showing the progression and responsibilities from Yellow Belt to Master Black Belt and Champion."
        }
      ]
    },
    {
      "id": "operations-management-201-l03",
      "title": "Lean Manufacturing and the Toyota Production System",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Describe the two pillars of the Toyota Production System",
        "Explain just-in-time production and its prerequisites",
        "Define jidoka and its role in building quality into processes"
      ],
      "chunks": [
        {
          "id": "operations-management-201-l03-c1",
          "title": "Origins of the Toyota Production System",
          "content": "The Toyota Production System (TPS), developed by Taiichi Ohno and Shigeo Shingo, emerged from the resource-scarce environment of post-WWII Japan. Unable to afford the mass production methods of Western automakers, Toyota created a system focused on efficiency and waste elimination. TPS is often visualized as a house built on a stable foundation of standardized work, heijunka (production leveling), and kaizen (continuous improvement). The house is supported by two main pillars: Just-in-Time production, which means making only what is needed, when it is needed, and in the amount needed; and Jidoka, or 'automation with a human touch,' which focuses on building quality into the process. This system has become the global benchmark for manufacturing excellence."
        },
        {
          "id": "operations-management-201-l03-c2",
          "title": "Just-in-Time (JIT) Production",
          "content": "Just-in-Time (JIT) is a 'pull' system, where production is triggered by actual customer demand rather than a forecast. In contrast, traditional 'push' systems produce goods based on anticipated demand, often leading to excess inventory. The mechanism for JIT is often a kanban, a visual signal (like a card or an empty bin) that authorizes an upstream station to produce more. For JIT to succeed, several conditions must be met: highly reliable suppliers, quick equipment changeover times, rigorous preventative maintenance, and multi-skilled workers. For example, the seats for a Toyota Camry might arrive from a supplier just hours before they are installed, eliminating the need for costly warehouse space and inventory."
        },
        {
          "id": "operations-management-201-l03-c3",
          "title": "Jidoka: Automation with a Human Touch",
          "content": "Jidoka means building quality into the production process by immediately stopping to address abnormalities. The concept originated with an automatic loom invented by Sakichi Toyoda that would stop if a thread broke, preventing the production of defective cloth. In a modern Toyota factory, any worker can pull an 'andon cord' to stop or slow the entire assembly line if they spot a defect. While stopping a line that produces a car every minute seems costly, it is far cheaper than fixing defects downstream or dealing with a product recall. Jidoka empowers workers and ensures that problems are solved at their source, a fundamental principle of lean manufacturing."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-201-l03-f1",
          "front": "Two pillars of the Toyota Production System",
          "back": "Just-in-Time (produce only what's needed, when needed) and Jidoka (automation with a human touch — stop and fix problems immediately)."
        },
        {
          "id": "operations-management-201-l03-f2",
          "front": "Kanban",
          "back": "A visual signaling system (e.g., card, bin) that triggers production in a 'pull' system, authorizing an upstream process to make more only when a downstream process consumes an item."
        },
        {
          "id": "operations-management-201-l03-f3",
          "front": "Andon cord",
          "back": "A rope or button on an assembly line that any worker can activate to stop production when a defect is detected, embodying the jidoka principle."
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-201-l03-a1",
          "type": "interactive_simulation",
          "title": "JIT vs. Push Production",
          "content": "A simple simulation where the user manages inventory for two production lines. One uses a 'push' forecast, the other a 'pull' kanban system. The goal is to see the difference in inventory costs and stockouts."
        },
        {
          "id": "operations-management-201-l03-a2",
          "type": "diagram",
          "title": "The Toyota Production System House",
          "content": "A diagram illustrating the TPS 'house' with its foundation (Heijunka, Standardized Work), pillars (Jidoka, Just-in-Time), and roof (Customer Focus, Highest Quality, Lowest Cost, Shortest Lead Time)."
        }
      ]
    },
    {
      "id": "operations-management-201-l04",
      "title": "The Seven Wastes and Waste Elimination",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Identify all seven types of waste (muda) with workplace examples",
        "Explain the difference between Type 1 and Type 2 muda",
        "Apply waste identification techniques to service and manufacturing settings"
      ],
      "chunks": [
        {
          "id": "operations-management-201-l04-c1",
          "title": "The Seven Wastes (Muda)",
          "content": "In lean thinking, waste (or 'muda' in Japanese) is any activity that consumes resources but adds no value for the customer. Taiichi Ohno identified seven primary types of waste, often remembered by the acronym TIMWOOD: Transportation (unnecessary movement of materials), Inventory (excess stock), Motion (unnecessary movement of people), Waiting (idle time), Overproduction (producing more than needed), Overprocessing (doing more work than required), and Defects (rework or scrap). Of these, overproduction is considered the worst because it directly causes most of the other wastes."
        },
        {
          "id": "operations-management-201-l04-c2",
          "title": "Type 1 vs. Type 2 Muda and the Eighth Waste",
          "content": "Waste can be further categorized. Type 1 muda refers to non-value-adding activities that are currently necessary, such as safety inspections or regulatory paperwork. The goal is to minimize these. Type 2 muda is pure waste that adds no value and can be eliminated immediately, such as storing excess inventory or correcting defects. In recent years, many lean practitioners have added an eighth waste: Skills, or the underutilization of human talent. This occurs when organizations fail to engage their employees' creativity and knowledge in process improvement, which is one of the most valuable resources they have."
        },
        {
          "id": "operations-management-201-l04-c3",
          "title": "Waste Identification in Practice",
          "content": "The primary method for identifying waste is the 'gemba walk,' where managers go to the actual workplace ('gemba') to observe processes firsthand. For example, at Virginia Mason Medical Center, a gemba walk revealed that nurses were walking thousands of unnecessary steps per shift. By reorganizing supply rooms, they cut walking distance by 60%, freeing up more time for patient care. Another powerful tool is the 5S method (Sort, Set in Order, Shine, Standardize, Sustain), a system for workplace organization that makes waste, such as excess inventory or misplaced tools, immediately visible and easier to eliminate."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-201-l04-f1",
          "front": "Seven wastes (TIMWOOD)",
          "back": "Transportation, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects. Overproduction is considered the worst because it triggers all other wastes."
        },
        {
          "id": "operations-management-201-l04-f2",
          "front": "Type 1 vs. Type 2 muda",
          "back": "Type 1: non-value-adding but currently necessary (minimize it). Type 2: pure waste that can and should be eliminated immediately."
        },
        {
          "id": "operations-management-201-l04-f3",
          "front": "Gemba walk",
          "back": "A management practice of visiting the actual workplace ('gemba') to observe processes, engage with employees, and identify opportunities for improvement."
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-201-l04-a1",
          "type": "infographic",
          "title": "The 8 Wastes of Lean (TIMWOODS)",
          "content": "An infographic with icons representing each of the eight wastes: Transportation, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects, and Skills (Underutilized Talent)."
        },
        {
          "id": "operations-management-201-l04-a2",
          "type": "diagram",
          "title": "The 5S Method",
          "content": "A visual guide showing the five steps of the 5S methodology for workplace organization: Sort, Set in Order, Shine, Standardize, and Sustain."
        }
      ]
    },
    {
      "id": "operations-management-201-l05",
      "title": "Checkpoint: Quality & Lean Foundations",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "operations-management-201-l05-q1",
          "text": "What does achieving 'Six Sigma' quality mean statistically?",
          "options": [
            {
              "id": "a",
              "text": "Zero defects per million"
            },
            {
              "id": "b",
              "text": "3.4 defects per million opportunities"
            },
            {
              "id": "c",
              "text": "34 defects per million opportunities"
            },
            {
              "id": "d",
              "text": "6 defects per thousand opportunities"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Six Sigma quality means 3.4 defects per million opportunities (DPMO), representing near-perfect process performance."
        },
        {
          "id": "operations-management-201-l05-q2",
          "text": "Which waste did Taiichi Ohno consider the most harmful because it triggers all other wastes?",
          "options": [
            {
              "id": "a",
              "text": "Defects"
            },
            {
              "id": "b",
              "text": "Waiting"
            },
            {
              "id": "c",
              "text": "Overproduction"
            },
            {
              "id": "d",
              "text": "Transportation"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Overproduction is the worst waste because making more than needed creates excess inventory, extra transportation, additional waiting, more motion, and higher defect risk."
        },
        {
          "id": "operations-management-201-l05-q3",
          "text": "In the Toyota Production System, what does pulling the andon cord do?",
          "options": [
            {
              "id": "a",
              "text": "Signals the supervisor to speed up the line"
            },
            {
              "id": "b",
              "text": "Triggers a kanban replenishment order to suppliers"
            },
            {
              "id": "c",
              "text": "Stops or slows the production line so a quality problem can be addressed"
            },
            {
              "id": "d",
              "text": "Starts the shift changeover procedure"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The andon cord implements jidoka — any worker can stop the line when they detect a defect, ensuring problems are fixed at the source rather than passed downstream."
        },
        {
          "id": "operations-management-201-l05-q4",
          "text": "In DMAIC, during which phase would you use fishbone diagrams and Pareto charts?",
          "options": [
            {
              "id": "a",
              "text": "Define"
            },
            {
              "id": "b",
              "text": "Measure"
            },
            {
              "id": "c",
              "text": "Analyze"
            },
            {
              "id": "d",
              "text": "Improve"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The Analyze phase uses statistical and graphical tools like fishbone (Ishikawa) diagrams and Pareto charts to identify and prioritize root causes of problems."
        }
      ]
    },
    {
      "id": "operations-management-201-l06",
      "title": "Kaizen and Statistical Process Control",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Design and facilitate a kaizen improvement event",
        "Interpret control charts to distinguish common from special cause variation",
        "Calculate control limits and determine process capability"
      ],
      "chunks": [
        {
          "id": "operations-management-201-l06-c1",
          "title": "Kaizen: Continuous Improvement",
          "content": "Kaizen, Japanese for 'change for the better,' is a philosophy of continuous, incremental improvement involving everyone in the organization. Rather than seeking large, revolutionary changes, kaizen focuses on small, daily improvements that accumulate into significant gains over time. A common tool is the kaizen event (or 'blitz'), an intense, 3-to-5-day workshop where a cross-functional team focuses on improving a specific process. For example, a kaizen event at a Danaher plant reduced the changeover time for a stamping press from four hours to just twelve minutes, saving millions by avoiding the purchase of new equipment. This demonstrates the power of focused, collaborative improvement."
        },
        {
          "id": "operations-management-201-l06-c2",
          "title": "Understanding Variation",
          "content": "All processes exhibit variation. Statistical Process Control (SPC) helps distinguish between two types. Common cause variation is the natural, random 'noise' inherent in a stable process. It's the result of many small, unidentifiable factors. To reduce it, the entire system must be improved. Special cause variation is non-random and arises from specific, assignable events, such as a faulty machine, a new operator, or a bad batch of material. This type of variation is unpredictable and must be identified and eliminated to bring the process back into a state of stability. Responding to common cause variation as if it were special cause (and vice versa) is a common management mistake that can make things worse."
        },
        {
          "id": "operations-management-201-l06-c3",
          "title": "Control Charts in Action",
          "content": "A control chart is the primary tool of SPC, used to monitor a process over time. It plots data points between a center line (the process average) and statistically calculated upper and lower control limits (UCL and LCL). If all points fall randomly within these limits, the process is 'in control,' exhibiting only common cause variation. A point outside the limits, or a non-random pattern (like seven points in a row above the mean), signals a special cause that requires investigation. Beyond stability, we also measure process capability—how well the process meets customer specifications. Capability indices like Cp and Cpk compare process variation to the specification limits. A Cpk of 1.33 or higher is a common benchmark for a capable process."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-201-l06-f1",
          "front": "Kaizen",
          "back": "Japanese for 'change for the better' — a philosophy of small, incremental, continuous improvements. A kaizen event is a focused 3–5 day improvement workshop."
        },
        {
          "id": "operations-management-201-l06-f2",
          "front": "Common vs. Special Cause Variation",
          "back": "Common cause: inherent random fluctuation in a stable process. Special cause: unusual, assignable variation from a specific event that makes a process unstable."
        },
        {
          "id": "operations-management-201-l06-f3",
          "front": "Control chart signals",
          "back": "Points beyond the UCL/LCL or non-random patterns signal special cause variation. A process is 'capable' if it is stable and meets customer specs (e.g., Cpk ≥ 1.33)."
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-201-l06-a1",
          "type": "chart",
          "title": "Interpreting a Control Chart",
          "content": "An example of a control chart with data points. Some points are highlighted to show 'in-control' (common cause) variation, while another point is outside the UCL to illustrate 'out-of-control' (special cause) variation."
        },
        {
          "id": "operations-management-201-l06-a2",
          "type": "diagram",
          "title": "Kaizen Event Flow",
          "content": "A simple flowchart showing the typical steps of a 3-5 day kaizen event: Prepare, Observe Current State, Brainstorm & Develop Future State, Implement, and Report Out."
        }
      ]
    },
    {
      "id": "operations-management-201-l07",
      "title": "Final Assessment: Quality Management & Lean Operations",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "operations-management-201-l07-q1",
          "text": "Which quality pioneer argued that '85% of quality problems are system problems, not worker problems'?",
          "options": [
            {
              "id": "a",
              "text": "Philip Crosby"
            },
            {
              "id": "b",
              "text": "Joseph Juran"
            },
            {
              "id": "c",
              "text": "W. Edwards Deming"
            },
            {
              "id": "d",
              "text": "Kaoru Ishikawa"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Deming emphasized that management-created systems — not individual workers — are responsible for the vast majority of quality problems. His 14 Points focus on systemic change."
        },
        {
          "id": "operations-management-201-l07-q2",
          "text": "A control chart shows a data point above the upper control limit. What does this indicate?",
          "options": [
            {
              "id": "a",
              "text": "Normal common cause variation"
            },
            {
              "id": "b",
              "text": "The process is performing exceptionally well"
            },
            {
              "id": "c",
              "text": "Special cause variation requiring investigation"
            },
            {
              "id": "d",
              "text": "The control limits need to be widened"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A point beyond the control limits signals special cause variation — something unusual has occurred that should be identified and addressed."
        },
        {
          "id": "operations-management-201-l07-q3",
          "text": "Which of the following is NOT one of the original seven wastes identified by Ohno?",
          "options": [
            {
              "id": "a",
              "text": "Overproduction"
            },
            {
              "id": "b",
              "text": "Underutilized talent"
            },
            {
              "id": "c",
              "text": "Waiting"
            },
            {
              "id": "d",
              "text": "Excess inventory"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Underutilized talent is the commonly cited eighth waste, added later by lean practitioners. Ohno's original seven are: transportation, inventory, motion, waiting, overproduction, overprocessing, and defects."
        },
        {
          "id": "operations-management-201-l07-q4",
          "text": "In the Toyota Production System, what is the purpose of heijunka?",
          "options": [
            {
              "id": "a",
              "text": "To detect defects automatically in the production line"
            },
            {
              "id": "b",
              "text": "To level production volume and mix over time to reduce variation"
            },
            {
              "id": "c",
              "text": "To signal upstream stations to begin production"
            },
            {
              "id": "d",
              "text": "To organize the workplace using five steps"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Heijunka (production leveling) smooths out the production schedule by distributing volume and product mix evenly over time, reducing the peaks and valleys that create waste."
        }
      ]
    }
  ]
};
