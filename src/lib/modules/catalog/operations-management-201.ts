import type { LearningModule } from "@/lib/modules/types";

export const OperationsManagement201Module: LearningModule = {
  "id": "operations-management-201",
  "title": "Quality Management & Lean Operations",
  "description": "Master the principles that transformed global manufacturing. Learn Total Quality Management, Six Sigma's DMAIC methodology, lean thinking from the Toyota Production System, and the relentless pursuit of waste elimination through kaizen and statistical process control.",
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
          "content": "Total Quality Management is a company-wide philosophy that makes quality the responsibility of every employee, not just the inspection department. It emerged in post-war Japan when W. Edwards Deming taught Japanese manufacturers that quality problems stem from flawed systems, not lazy workers. TQM rests on three pillars: customer focus (quality is defined by the customer), continuous improvement (there is always a better way), and total participation (everyone from the CEO to the janitor owns quality)."
        },
        {
          "id": "operations-management-201-l01-c2",
          "title": "The Quality Pioneers",
          "content": "Deming contributed the Plan-Do-Check-Act (PDCA) cycle and his 14 Points for management transformation, emphasizing that 85 percent of quality problems are system problems, not worker problems. Joseph Juran introduced the Pareto principle to quality — the vital few causes account for most defects — and the quality trilogy of planning, control, and improvement. Philip Crosby championed 'zero defects' and argued that 'quality is free' because the cost of preventing defects is always less than the cost of fixing them."
        },
        {
          "id": "operations-management-201-l01-c3",
          "title": "Core TQM Principles in Practice",
          "content": "TQM organizations build quality into every process rather than inspecting it at the end. At Motorola, TQM reduced defects by 99.7 percent over a decade. Key practices include cross-functional quality teams, supplier partnerships focused on quality rather than lowest price, employee empowerment to stop production when defects appear, and data-driven decision-making. The Malcolm Baldrige National Quality Award in the United States evaluates companies on leadership, strategy, customer focus, measurement, workforce, operations, and results."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-201-l01-f1",
          "front": "Total Quality Management (TQM)",
          "back": "Company-wide philosophy making quality everyone's responsibility. Three pillars: customer focus, continuous improvement, total participation"
        },
        {
          "id": "operations-management-201-l01-f2",
          "front": "Deming's key insight",
          "back": "85% of quality problems are system problems, not worker problems. He created the PDCA cycle and 14 Points for management transformation"
        },
        {
          "id": "operations-management-201-l01-f3",
          "front": "Crosby's 'Quality is Free'",
          "back": "The cost of preventing defects is always less than the cost of finding and fixing them — so investing in quality actually saves money"
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-201-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "Six Sigma is a data-driven methodology for eliminating defects. Statistically, achieving six sigma means only 3.4 defects per million opportunities — near perfection. Motorola developed it in the 1980s, and General Electric under Jack Welch made it famous in the 1990s, reporting over $2 billion in savings within five years. Six Sigma treats every output as the result of a process, and every process has variation. The goal is to reduce variation until the process consistently meets customer specifications."
        },
        {
          "id": "operations-management-201-l02-c2",
          "title": "The DMAIC Phases",
          "content": "DMAIC is the problem-solving roadmap. Define: clarify the problem, customer requirements, and project scope using a project charter. Measure: collect data on current performance, establish baseline metrics, and validate the measurement system. Analyze: use statistical tools (Pareto charts, fishbone diagrams, regression analysis) to identify root causes. Improve: develop and test solutions through designed experiments, pilot runs, and mistake-proofing. Control: sustain gains with control charts, standard operating procedures, and response plans for out-of-control conditions."
        },
        {
          "id": "operations-management-201-l02-c3",
          "title": "Belt System and Organizational Structure",
          "content": "Six Sigma uses a belt hierarchy inspired by martial arts. Yellow Belts understand basics and participate in projects. Green Belts lead smaller projects part-time alongside their regular role. Black Belts are full-time project leaders with deep statistical expertise, typically managing 4–6 projects per year. Master Black Belts train and mentor other belts and develop organizational methodology. Champions are senior leaders who select projects, remove obstacles, and ensure strategic alignment. This structure embeds quality improvement into the organizational DNA."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-201-l02-f1",
          "front": "Six Sigma (statistical meaning)",
          "back": "3.4 defects per million opportunities — a measure of near-perfect process performance where variation is so small that customer specs are almost always met"
        },
        {
          "id": "operations-management-201-l02-f2",
          "front": "DMAIC",
          "back": "Define → Measure → Analyze → Improve → Control — the five-phase Six Sigma problem-solving methodology"
        },
        {
          "id": "operations-management-201-l02-f3",
          "front": "Six Sigma Black Belt",
          "back": "Full-time project leader with deep statistical expertise, typically managing 4–6 improvement projects per year"
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-201-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "Taiichi Ohno and Shigeo Shingo developed the Toyota Production System (TPS) after World War II when Toyota lacked the capital for mass production. Necessity forced invention: instead of large batches and big inventories, Toyota created a system that produced only what was needed, when it was needed, in the amount needed. TPS rests on two pillars — just-in-time and jidoka — supported by a foundation of standardized work, heijunka (production leveling), and kaizen (continuous improvement). This system made Toyota the world's most profitable automaker."
        },
        {
          "id": "operations-management-201-l03-c2",
          "title": "Just-in-Time (JIT) Production",
          "content": "Just-in-time means producing and delivering the right items at the right time in the right quantities. Kanban cards (visual signals) trigger production only when downstream processes consume inventory. This pull system contrasts with traditional push systems that produce based on forecasts. JIT requires reliable suppliers, quick changeover times, preventive maintenance, and multi-skilled workers. When Toyota assembles a Camry, seats arrive from the supplier within hours of installation — not weeks before, sitting in a warehouse consuming space and capital."
        },
        {
          "id": "operations-management-201-l03-c3",
          "title": "Jidoka: Automation with a Human Touch",
          "content": "Jidoka means building the ability to detect abnormalities into machines and processes, then stopping to fix problems rather than passing defects downstream. The concept originated with Sakichi Toyoda's automatic loom, which stopped when a thread broke. In modern practice, any worker on Toyota's assembly line can pull the andon cord to halt production when they spot a defect. This seems costly — stopping a line that produces a car every 60 seconds — but it prevents the far greater cost of reworking or recalling defective products."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-201-l03-f1",
          "front": "Two pillars of the Toyota Production System",
          "back": "Just-in-Time (produce only what's needed, when needed) and Jidoka (automation with a human touch — stop and fix problems immediately)"
        },
        {
          "id": "operations-management-201-l03-f2",
          "front": "Kanban",
          "back": "Visual signaling system (cards, bins, or electronic signals) that triggers production only when downstream processes consume inventory — the mechanism enabling pull-based production"
        },
        {
          "id": "operations-management-201-l03-f3",
          "front": "Andon cord",
          "back": "A pull cord or button on Toyota's assembly line that any worker can activate to stop production when a defect or abnormality is detected — embodying the jidoka principle"
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
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
          "content": "Taiichi Ohno identified seven wastes that consume resources without creating customer value. Transportation: unnecessary movement of materials between locations. Inventory: excess raw materials, work-in-progress, or finished goods beyond immediate need. Motion: unnecessary physical movement by workers (reaching, bending, walking). Waiting: idle time when workers or machines wait for the next step. Overproduction: making more than customers demand, the worst waste because it causes all others. Overprocessing: performing work beyond what the customer requires. Defects: products or services that fail to meet specifications and require rework or disposal."
        },
        {
          "id": "operations-management-201-l04-c2",
          "title": "Type 1 vs. Type 2 Muda and the Eighth Waste",
          "content": "Type 1 muda is non-value-adding but currently necessary — regulatory compliance paperwork, machine setups between product runs, or safety inspections. It should be minimized but cannot be immediately eliminated. Type 2 muda is pure waste that can and should be removed right away — defective products, excess inventory sitting in warehouses, or workers waiting for materials. Many lean practitioners add an eighth waste: underutilized human talent — when organizations fail to tap employee creativity, skills, and knowledge to improve processes."
        },
        {
          "id": "operations-management-201-l04-c3",
          "title": "Waste Identification in Practice",
          "content": "Gemba walks — where managers physically visit the workplace to observe — are the primary tool for spotting waste. At Virginia Mason Medical Center in Seattle, nurses walked an average of 10,000 steps per shift. Lean analysis revealed that poor supply room placement caused most of this motion waste. Relocating supplies closer to patient rooms cut walking distance by 60 percent, freeing hours for patient care. The 5S method (Sort, Set in order, Shine, Standardize, Sustain) creates visual workplaces where waste becomes immediately visible."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-201-l04-f1",
          "front": "Seven wastes (TIMWOOD)",
          "back": "Transportation, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects — Overproduction is considered the worst because it triggers all other wastes"
        },
        {
          "id": "operations-management-201-l04-f2",
          "front": "Type 1 vs. Type 2 muda",
          "back": "Type 1: non-value-adding but currently necessary (minimize it). Type 2: pure waste that can be eliminated immediately"
        },
        {
          "id": "operations-management-201-l04-f3",
          "front": "Gemba walk",
          "back": "Managers physically visit the workplace to observe actual processes firsthand — the primary method for identifying waste in lean management"
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-201-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "Kaizen means 'change for the better' in Japanese. Unlike large-scale reengineering, kaizen focuses on small, incremental improvements made daily by the people who do the work. A kaizen event (or kaizen blitz) is a focused 3–5 day workshop where a cross-functional team maps a process, identifies waste, and implements improvements immediately. At a Danaher Corporation plant, a kaizen event reduced the changeover time for a stamping press from 4 hours to 12 minutes, freeing capacity worth millions in avoided equipment purchases."
        },
        {
          "id": "operations-management-201-l06-c2",
          "title": "Understanding Variation",
          "content": "Every process exhibits variation. Common cause variation is inherent and random — the natural fluctuation in cycle times due to minor differences in materials, environment, and human performance. Special cause variation is unusual and assignable — a machine drifting out of calibration, a new untrained operator, or a batch of defective raw material. The critical insight is that these two types require different responses: common cause variation needs systemic process redesign, while special cause variation needs specific corrective action."
        },
        {
          "id": "operations-management-201-l06-c3",
          "title": "Control Charts in Action",
          "content": "A control chart plots process measurements over time with a center line (mean), upper control limit (UCL), and lower control limit (LCL), typically set at ±3 standard deviations. Points within the limits suggest only common cause variation — the process is 'in control.' Points beyond the limits, or non-random patterns like seven consecutive points above the mean, signal special causes requiring investigation. Process capability indices (Cp and Cpk) compare the spread of process output to customer specification limits. A Cpk of 1.33 or higher means the process comfortably meets specifications."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-201-l06-f1",
          "front": "Kaizen",
          "back": "Japanese for 'change for the better' — philosophy of small, incremental, continuous improvements made daily. Kaizen events are focused 3–5 day blitz workshops"
        },
        {
          "id": "operations-management-201-l06-f2",
          "front": "Common cause vs. special cause variation",
          "back": "Common cause: inherent random fluctuation requiring systemic redesign. Special cause: unusual assignable variation requiring specific corrective action"
        },
        {
          "id": "operations-management-201-l06-f3",
          "front": "Control chart signals",
          "back": "Points beyond UCL/LCL or non-random patterns (e.g., 7 points in a row above the mean) indicate special cause variation. Cpk ≥ 1.33 means the process is capable"
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
