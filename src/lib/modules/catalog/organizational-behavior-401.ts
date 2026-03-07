import type { LearningModule } from "@/lib/modules/types";

export const organizational_behavior_401_Module: LearningModule = {
  "id": "organizational-behavior-401",
  "title": "Organizational Design & Change Management",
  "description": "Master the principles of organizational structure, Mintzberg's configurations, and designing organizations for innovation. Learn proven change management frameworks including Lewin's model and Burke-Litwin, and explore how learning organizations sustain adaptability.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mba",
    "organizational-behavior"
  ],
  "minAge": 18,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Compare functional, divisional, matrix, and network organizational structures",
    "Explain Mintzberg's five organizational configurations",
    "Describe how organizational design supports or hinders innovation",
    "Apply Lewin's three-stage model to plan organizational change",
    "Analyze organizational change using the Burke-Litwin causal model",
    "Define learning organizations and Senge's five disciplines",
    "Evaluate organizational development interventions for effectiveness"
  ],
  "lessons": [
    {
      "id": "organizational-behavior-401-l01",
      "title": "Foundations of Organizational Structure",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Describe the key dimensions of organizational structure",
        "Compare functional, divisional, matrix, and network structures",
        "Explain the principle that structure follows strategy"
      ],
      "chunks": [
        {
          "id": "organizational-behavior-401-l01-c1",
          "title": "Key Structural Dimensions",
          "content": "Organizational structure is the formal blueprint for how tasks are divided, grouped, and coordinated within a company. [Visual: An animated infographic showing a simple org chart morphing as a company grows, illustrating the six dimensions.] Six key dimensions define any organization's structure. First, work specialization is the degree to which tasks are subdivided into separate jobs, allowing employees to develop deep expertise. Second, departmentalization is the basis for grouping jobs, such as by function (e.g., marketing, finance) or product. Third, the chain of command is an unbroken line of authority that clarifies who reports to whom. Fourth, span of control determines the number of employees a manager can efficiently and effectively direct. Fifth, centralization and decentralization refer to the degree to which decision-making is concentrated at a single point or pushed down to lower-level employees. Finally, formalization is the degree to which jobs are standardized with rules and procedures. As strategist Alfred Chandler famously concluded, an organization's structure must evolve to support its strategy—'structure follows strategy.'"
        },
        {
          "id": "organizational-behavior-401-l01-c2",
          "title": "Functional and Divisional Structures",
          "content": "The functional structure groups employees by similar specialties, roles, or tasks, such as marketing or finance. This design promotes efficiency through specialization but can create communication 'silos' between departments, slowing cross-functional collaboration. [Visual: A side-by-side comparison of a functional org chart (siloed verticals) and a divisional org chart (self-contained business units).] In contrast, the divisional structure groups employees into units by product, service, customer, or geographic market. Each division operates as a semi-autonomous business with its own functional specialists. This structure enhances responsiveness to market changes and clarifies accountability for results, as exemplified by General Electric's management of its diverse business portfolio. However, it can lead to duplication of functions and costs across divisions."
        },
        {
          "id": "organizational-behavior-401-l01-c3",
          "title": "Matrix and Network Structures",
          "content": "The matrix structure combines functional and divisional structures, creating a dual chain of command where employees report to both a functional manager and a product or project manager. [Visual: A diagram illustrating the grid-like reporting lines of a matrix structure, with functional departments on one axis and projects on the other.] This design facilitates the coordination of complex projects and efficient allocation of specialists, as seen in organizations like NASA and global consulting firms. Its primary drawback is the potential for role conflict and power struggles between managers. The network structure, or virtual organization, takes a more radical approach by outsourcing major business functions and concentrating on a few core competencies. For example, Nike focuses on design and marketing while outsourcing manufacturing to a global network of contractors. This provides maximum flexibility and reduces overhead but also diminishes control over key parts of the business."
        }
      ],
      "flashcards": [
        {
          "id": "organizational-behavior-401-l01-f1",
          "front": "Six key dimensions of organizational structure",
          "back": "Work specialization, departmentalization, chain of command, span of control, centralization/decentralization, and formalization."
        },
        {
          "id": "organizational-behavior-401-l01-f2",
          "front": "Functional vs. Divisional Structure",
          "back": "Functional: groups by specialty (e.g., marketing, finance), promoting efficiency but risking silos. Divisional: groups by product, geography, or customer, promoting responsiveness but risking resource duplication."
        },
        {
          "id": "organizational-behavior-401-l01-f3",
          "front": "Matrix Structure",
          "back": "A structure with dual reporting to both functional and project/product managers. It provides flexibility and cross-functional integration but can cause confusion and power conflicts."
        }
      ],
      "learningAids": [
        {
          "id": "organizational-behavior-401-l01-a1",
          "type": "image",
          "title": "Organizational Structure Comparison",
          "content": "A chart comparing Functional, Divisional, Matrix, and Network structures across key dimensions like specialization, chain of command, and primary advantages/disadvantages."
        }
      ]
    },
    {
      "id": "organizational-behavior-401-l02",
      "title": "Mintzberg's Organizational Configurations",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Identify the five parts of an organization according to Mintzberg",
        "Describe Mintzberg's five structural configurations",
        "Match configurations to organizational contexts"
      ],
      "chunks": [
        {
          "id": "organizational-behavior-401-l02-c1",
          "title": "The Five Basic Parts of an Organization",
          "content": "Management theorist Henry Mintzberg proposed a framework viewing every organization as a combination of five basic parts. [Visual: Mintzberg's classic 'logo' diagram showing the five parts and their relative positions.] The Strategic Apex consists of top management, responsible for overall strategy and direction. The Middle Line comprises managers who connect the apex to the core. The Operating Core includes the employees who perform the basic work of producing products or delivering services. The Technostructure is composed of analysts, such as planners and engineers, who standardize processes. Finally, the Support Staff provides indirect services, from legal counsel to cafeteria operations. The relative size and influence of these five parts determine the organization's overall structure, or configuration."
        },
        {
          "id": "organizational-behavior-401-l02-c2",
          "title": "Configurations: Simple, Machine & Professional",
          "content": "Mintzberg identified five configurations based on which part dominates. The Simple Structure, common in startups, is dominated by the Strategic Apex. It features low formalization and high centralization, making it flexible but highly dependent on the founder. [Visual: A simple diagram for each configuration, highlighting the dominant part.] The Machine Bureaucracy is dominated by the Technostructure, relying on standardized processes for efficiency. This form, typical of mass-production firms or government agencies, is effective in stable environments but slow to innovate. The Professional Bureaucracy is dominated by the Operating Core, composed of highly skilled professionals like doctors or professors. Coordination is achieved through the standardization of skills (i.e., professional training), granting high autonomy to its members."
        },
        {
          "id": "organizational-behavior-401-l02-c3",
          "title": "Configurations: Divisionalized & Adhocracy",
          "content": "The Divisionalized Form is dominated by the Middle Line, where managers of semi-autonomous divisions have significant authority. Large corporations like Procter & Gamble use this structure, with corporate headquarters monitoring divisional performance through standardized outputs (e.g., profit targets). [Visual: A diagram for each configuration, highlighting the dominant part.] Finally, the Adhocracy is a highly organic and fluid structure designed for innovation, common in tech firms or film studios. It features project-based teams, low formalization, and decentralized decision-making. Power flows to expertise rather than position. Spotify's 'squad' model, with its autonomous, cross-functional teams, is a modern example of adhocratic principles applied at scale."
        }
      ],
      "flashcards": [
        {
          "id": "organizational-behavior-401-l02-f1",
          "front": "Mintzberg's five organizational parts",
          "back": "Strategic Apex (top leaders), Middle Line (managers), Operating Core (front-line workers), Technostructure (standardization analysts), and Support Staff (indirect services)."
        },
        {
          "id": "organizational-behavior-401-l02-f2",
          "front": "Machine Bureaucracy vs. Adhocracy",
          "back": "Machine Bureaucracy: standardized, hierarchical, efficient, rigid (e.g., factories, government). Adhocracy: fluid, project-based, innovative, flexible (e.g., tech firms, studios)."
        },
        {
          "id": "organizational-behavior-401-l02-f3",
          "front": "Professional Bureaucracy",
          "back": "Dominated by skilled professionals in the operating core (e.g., doctors, lawyers) who have high autonomy and are coordinated through professional training and standards, not direct managerial oversight."
        }
      ],
      "learningAids": [
        {
          "id": "organizational-behavior-401-l02-a1",
          "type": "image",
          "title": "Mintzberg's Configurations",
          "content": "A visual dashboard showing all five of Mintzberg's configurations, each with a simple diagram highlighting the dominant part and listing key characteristics and typical examples."
        }
      ]
    },
    {
      "id": "organizational-behavior-401-l03",
      "title": "Designing Organizations for Innovation",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Explain how organizational design enables or constrains innovation",
        "Describe the ambidextrous organization concept",
        "Identify structural approaches used by innovative companies"
      ],
      "chunks": [
        {
          "id": "organizational-behavior-401-l03-c1",
          "title": "The Tension Between Exploitation and Exploration",
          "content": "Organizations face a fundamental tension between exploitation—optimizing current operations for efficiency and control—and exploration—pursuing innovation, experimentation, and new opportunities. [Visual: A seesaw diagram balancing 'Exploitation' (gears, efficiency) on one side and 'Exploration' (lightbulb, creativity) on the other.] Researchers Burns and Stalker distinguished between mechanistic structures, which are rigid, hierarchical, and suited for stable environments (favoring exploitation), and organic structures, which are flat, adaptive, and ideal for dynamic environments requiring innovation (favoring exploration). While innovative firms need organic elements, pure organicism can lead to chaos as an organization scales. The central design challenge is to manage both exploitation and exploration simultaneously for long-term survival."
        },
        {
          "id": "organizational-behavior-401-l03-c2",
          "title": "The Ambidextrous Organization",
          "content": "To resolve this tension, Charles O'Reilly and Michael Tushman proposed the ambidextrous organization. This model advocates for structurally separating exploratory units from traditional, exploitative business units. [Visual: A diagram showing a core 'Exploitation' business unit and a separate 'Exploration' unit, with a senior leadership team bridging and integrating the two.] These exploratory units have their own distinct cultures, processes, and metrics that foster innovation. Meanwhile, the main business continues to operate with efficiency-focused structures. Senior leadership's critical role is to integrate both types of units at the strategic level. IBM's Emerging Business Opportunities program, which incubated new ventures like cloud computing separately from its established mainframe business, is a classic example of this approach."
        },
        {
          "id": "organizational-behavior-401-l03-c3",
          "title": "Innovative Structural Approaches",
          "content": "Leading companies employ various structural approaches to foster innovation. [Visual: A panel of four icons, each representing a different company's approach.] Google's former '20% time' policy, which evolved into structured innovation programs, allowed engineers to dedicate work hours to passion projects. Amazon's 'working backwards' process requires teams to write a mock press release for a new product before development begins, embedding customer focus into the innovation process. W.L. Gore & Associates uses a 'lattice' structure with no formal hierarchy, where associates self-commit to projects and leaders emerge based on their ability to attract followers. Chinese appliance giant Haier dissolved its middle management, reorganizing into thousands of self-managed micro-enterprises that operate as startups within the larger company, promoting agility and entrepreneurialism."
        }
      ],
      "flashcards": [
        {
          "id": "organizational-behavior-401-l03-f1",
          "front": "Exploitation vs. Exploration",
          "back": "Exploitation: optimizing current operations (efficiency, control). Exploration: pursuing innovation (flexibility, experimentation). Organizations must balance both to survive long-term."
        },
        {
          "id": "organizational-behavior-401-l03-f2",
          "front": "Ambidextrous Organization (O'Reilly & Tushman)",
          "back": "Structurally separating exploration units (innovation-focused) from exploitation units (efficiency-focused), with senior leadership integrating both at the strategic level."
        },
        {
          "id": "organizational-behavior-401-l03-f3",
          "front": "Mechanistic vs. Organic Structures (Burns & Stalker)",
          "back": "Mechanistic: rigid, hierarchical, rule-bound—suited to stable environments. Organic: flat, adaptive, informal—suited to dynamic environments requiring innovation."
        }
      ],
      "learningAids": [
        {
          "id": "organizational-behavior-401-l03-a1",
          "type": "practice",
          "title": "Innovation Structure Case Study",
          "content": "Analyze a short case study of a fictional company and recommend a structural approach (e.g., ambidextrous unit, lattice structure) to boost its innovation, justifying your choice."
        }
      ]
    },
    {
      "id": "organizational-behavior-401-l04",
      "title": "Managing Organizational Change",
      "type": "video",
      "duration": 15,
      "objectives": [
        "Apply Lewin's three-stage change model",
        "Explain the Burke-Litwin model of organizational performance and change",
        "Identify common sources of resistance to change"
      ],
      "chunks": [
        {
          "id": "organizational-behavior-401-l04-c1",
          "title": "Lewin's Three-Stage Model",
          "content": "Kurt Lewin's foundational model presents organizational change as a three-stage process. [Visual: An animation of an ice cube melting, being poured into a new mold (a cone), and refreezing.] The first stage, Unfreeze, involves creating motivation for change by disrupting the status quo and building a sense of urgency. This prepares the organization for what's to come. The second stage, Change (or Move), is where new behaviors, processes, or structures are implemented. This phase requires clear communication, training, and support for employees. The final stage, Refreeze, aims to stabilize the new state by embedding the changes into the organization's culture, policies, and reward systems to prevent a reversion to old habits. Lewin's force field analysis, which maps driving forces for change against restraining forces, is a powerful diagnostic tool used during the unfreezing stage."
        },
        {
          "id": "organizational-behavior-401-l04-c2",
          "title": "The Burke-Litwin Causal Model",
          "content": "The Burke-Litwin model offers a comprehensive framework for diagnosing and managing change, identifying twelve interrelated organizational variables. [Visual: A diagram of the Burke-Litwin model, showing the causal links from external environment down to individual performance.] These variables are grouped into two categories. Transformational factors (e.g., external environment, mission and strategy, leadership, culture) drive fundamental, deep-seated change. Transactional factors (e.g., structure, management practices, systems, work unit climate) relate to day-to-day operations. The model's key insight is that lasting change requires intervention at the transformational level. Attempting to alter transactional factors like structure without addressing transformational factors like culture or leadership is likely to fail."
        },
        {
          "id": "organizational-behavior-401-l04-c3",
          "title": "Understanding Resistance to Change",
          "content": "Resistance to change is a natural human reaction, often stemming from fear of the unknown, loss of status or job security, disruption of social networks, perceived incompetence with new systems, or genuine disagreement with the change itself. [Visual: A two-column chart listing 'Sources of Resistance' on the left and 'Kotter's Corresponding Solutions' on the right.] Change management expert John Kotter identified common leadership errors that amplify resistance, such as failing to create urgency, lacking a clear vision, under-communicating, and declaring victory too soon. Effective change leaders view resistance not as an obstacle to be overcome, but as valuable diagnostic information. It reveals specific concerns and potential problems that must be addressed for the change initiative to succeed."
        }
      ],
      "flashcards": [
        {
          "id": "organizational-behavior-401-l04-f1",
          "front": "Lewin's three-stage change model",
          "back": "Unfreeze (create urgency, disrupt status quo) → Change/Move (implement new behaviors with support) → Refreeze (stabilize new state in systems, policies, culture)."
        },
        {
          "id": "organizational-behavior-401-l04-f2",
          "front": "Burke-Litwin Model",
          "back": "A 12-variable causal model where transformational factors (environment, strategy, leadership, culture) drive deep change, while transactional factors (structure, systems, practices) affect daily operations."
        },
        {
          "id": "organizational-behavior-401-l04-f3",
          "front": "Why is resistance to change useful?",
          "back": "It provides valuable diagnostic information about potential problems, employee concerns, and perceived risks, helping leaders refine the change process. It is not mere obstinacy."
        }
      ],
      "learningAids": [
        {
          "id": "organizational-behavior-401-l04-a1",
          "type": "image",
          "title": "Change Management Models",
          "content": "A comparative infographic displaying Lewin's 3-Stage Model, a diagram of the Burke-Litwin causal model, and a summary of Kotter's 8 steps for leading change."
        }
      ]
    },
    {
      "id": "organizational-behavior-401-l05",
      "title": "Checkpoint: Structure & Change",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "organizational-behavior-401-l05-q1",
          "text": "In Mintzberg's framework, which configuration is dominated by the technostructure and emphasizes standardized processes?",
          "options": [
            {
              "id": "a",
              "text": "Simple Structure"
            },
            {
              "id": "b",
              "text": "Machine Bureaucracy"
            },
            {
              "id": "c",
              "text": "Professional Bureaucracy"
            },
            {
              "id": "d",
              "text": "Adhocracy"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Machine Bureaucracy is dominated by the technostructure (analysts who standardize work) and features highly formalized processes, clear hierarchies, and extensive rules. Simple Structure is dominated by the strategic apex, Professional Bureaucracy by the operating core, and Adhocracy by project teams."
        },
        {
          "id": "organizational-behavior-401-l05-q2",
          "text": "The 'refreeze' stage in Lewin's model involves:",
          "options": [
            {
              "id": "a",
              "text": "Creating urgency for change"
            },
            {
              "id": "b",
              "text": "Implementing new processes and training"
            },
            {
              "id": "c",
              "text": "Stabilizing new behaviors in systems, policies, and culture"
            },
            {
              "id": "d",
              "text": "Identifying driving and restraining forces"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Refreezing is about stabilizing and embedding the new state into the organization's policies, reward systems, and culture to prevent regression. Creating urgency is unfreezing, implementing changes is the move/change stage, and force field analysis is a complementary diagnostic tool."
        },
        {
          "id": "organizational-behavior-401-l05-q3",
          "text": "An ambidextrous organization handles the exploitation-exploration tension by:",
          "options": [
            {
              "id": "a",
              "text": "Focusing exclusively on innovation"
            },
            {
              "id": "b",
              "text": "Structurally separating innovation units from efficiency units with strategic integration at the top"
            },
            {
              "id": "c",
              "text": "Requiring all employees to split time between innovation and operations"
            },
            {
              "id": "d",
              "text": "Outsourcing all innovation to external partners"
            }
          ],
          "correctOptionId": "b",
          "explanation": "O'Reilly and Tushman's ambidextrous model structurally separates exploration (innovation) and exploitation (efficiency) into distinct units with different cultures and processes, while senior leadership provides strategic integration across both."
        },
        {
          "id": "organizational-behavior-401-l05-q4",
          "text": "According to the Burke-Litwin model, which factors drive the DEEPEST organizational change?",
          "options": [
            {
              "id": "a",
              "text": "Structure and systems"
            },
            {
              "id": "b",
              "text": "Management practices and work unit climate"
            },
            {
              "id": "c",
              "text": "External environment, mission/strategy, leadership, and culture"
            },
            {
              "id": "d",
              "text": "Individual needs and task requirements"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The Burke-Litwin model classifies external environment, mission/strategy, leadership, and organizational culture as transformational factors that drive fundamental change. Structure, systems, and management practices are transactional factors affecting daily operations."
        }
      ]
    },
    {
      "id": "organizational-behavior-401-l06",
      "title": "Learning Organizations & Development",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Explain Senge's five disciplines of a learning organization",
        "Describe common organizational development interventions",
        "Evaluate the effectiveness of OD approaches"
      ],
      "chunks": [
        {
          "id": "organizational-behavior-401-l06-c1",
          "title": "Senge's Five Disciplines",
          "content": "Peter Senge defined a learning organization as one that continuously expands its capacity to create its future. He identified five essential disciplines for building such an organization. [Visual: A circular diagram with Systems Thinking in the center, connected to the other four disciplines around it.] 1) Personal Mastery: individual commitment to continuous learning. 2) Mental Models: surfacing and challenging our deeply ingrained assumptions. 3) Shared Vision: building a collective sense of purpose that fosters genuine commitment. 4) Team Learning: aligning and developing the capacity of a team to create results its members truly desire, through dialogue and collective thinking. 5) Systems Thinking: the integrating fifth discipline, which involves seeing the organization as a complex system of interrelated parts. Toyota's production system, where any worker can stop the line to address a defect, exemplifies these principles by fostering a culture of continuous, system-wide learning."
        },
        {
          "id": "organizational-behavior-401-l06-c2",
          "title": "Organizational Development Interventions",
          "content": "Organizational Development (OD) is a planned, organization-wide effort to increase effectiveness and health through interventions based on behavioral science. [Visual: A toolbox graphic with icons for different OD interventions.] Common interventions include: Survey Feedback, which involves collecting data from employees and using it as a basis for action planning; Team Building, which uses activities to improve group collaboration and effectiveness; and Process Consultation, where a facilitator helps a group perceive, understand, and act upon its own process events. Appreciative Inquiry is a positive approach that focuses on identifying and amplifying an organization's strengths rather than fixing its problems. Large-group interventions like World Café or Open Space Technology bring together diverse stakeholders for collaborative dialogue and planning."
        },
        {
          "id": "organizational-behavior-401-l06-c3",
          "title": "Evaluating OD Effectiveness",
          "content": "Effective OD initiatives share several characteristics: strong top-management support, a thorough diagnostic phase, and active participation from those affected by the change. They also require a long-term commitment and systematic evaluation of results. [Visual: A pyramid diagram illustrating Kirkpatrick's four levels, with 'Reaction' at the base and 'Results' at the peak.] A widely used framework for evaluation is Kirkpatrick's four-level model, which assesses: 1) Reaction (how participants felt about the intervention), 2) Learning (the increase in knowledge or skills), 3) Behavior (the extent of on-the-job change), and 4) Results (the final impact on business outcomes, like productivity or profit). Research suggests that OD interventions are generally effective, especially when multiple interventions are combined, such as pairing structural redesign with team building and leadership development."
        }
      ],
      "flashcards": [
        {
          "id": "organizational-behavior-401-l06-f1",
          "front": "Senge's five disciplines",
          "back": "Personal Mastery, Mental Models, Shared Vision, Team Learning, and Systems Thinking (the integrating 'fifth discipline'). These are the foundations of a learning organization."
        },
        {
          "id": "organizational-behavior-401-l06-f2",
          "front": "Appreciative Inquiry",
          "back": "An OD intervention that focuses on identifying and amplifying what works well in an organization (its strengths) rather than diagnosing and fixing problems."
        },
        {
          "id": "organizational-behavior-401-l06-f3",
          "front": "Kirkpatrick's four evaluation levels",
          "back": "Reaction (satisfaction), Learning (knowledge gain), Behavior (on-the-job change), and Results (organizational outcomes). Each level is progressively more difficult to measure but provides more valuable data."
        }
      ]
    },
    {
      "id": "organizational-behavior-401-l07",
      "title": "Final Assessment: Organizational Design & Change",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "organizational-behavior-401-l07-q1",
          "text": "Which of Senge's five disciplines serves as the integrating framework for all the others?",
          "options": [
            {
              "id": "a",
              "text": "Personal Mastery"
            },
            {
              "id": "b",
              "text": "Mental Models"
            },
            {
              "id": "c",
              "text": "Shared Vision"
            },
            {
              "id": "d",
              "text": "Systems Thinking"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Systems Thinking is the 'fifth discipline' that integrates all others—it provides the conceptual framework for seeing interrelationships and patterns of change rather than isolated snapshots. Without systems thinking, the other disciplines remain separate improvements."
        },
        {
          "id": "organizational-behavior-401-l07-q2",
          "text": "A hospital where doctors have significant autonomy and are coordinated primarily through professional training is an example of Mintzberg's:",
          "options": [
            {
              "id": "a",
              "text": "Machine Bureaucracy"
            },
            {
              "id": "b",
              "text": "Adhocracy"
            },
            {
              "id": "c",
              "text": "Professional Bureaucracy"
            },
            {
              "id": "d",
              "text": "Simple Structure"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A Professional Bureaucracy is dominated by its operating core of skilled professionals (doctors, lawyers, professors) who have high autonomy and are coordinated through standardization of skills (professional training) rather than direct supervision or work rules."
        },
        {
          "id": "organizational-behavior-401-l07-q3",
          "text": "In a matrix structure, the primary challenge for employees is:",
          "options": [
            {
              "id": "a",
              "text": "Lack of specialization opportunities"
            },
            {
              "id": "b",
              "text": "Dual reporting relationships creating potential confusion and conflict"
            },
            {
              "id": "c",
              "text": "Too much autonomy with no oversight"
            },
            {
              "id": "d",
              "text": "Inability to work on cross-functional projects"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The defining feature and primary challenge of matrix structures is dual reporting—employees answer to both a functional manager and a project/product manager, which can create conflicting priorities, power struggles, and role ambiguity."
        },
        {
          "id": "organizational-behavior-401-l07-q4",
          "text": "According to Kotter, which of the following is a common error in change management?",
          "options": [
            {
              "id": "a",
              "text": "Creating too much urgency"
            },
            {
              "id": "b",
              "text": "Communicating the vision too frequently"
            },
            {
              "id": "c",
              "text": "Declaring victory too soon before changes are anchored in culture"
            },
            {
              "id": "d",
              "text": "Generating too many short-term wins"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Kotter identified declaring victory prematurely—before new approaches are firmly embedded in organizational culture—as a critical change management error. Organizations revert to old patterns when leaders celebrate too early and reduce change efforts before the new way of working is fully stabilized."
        }
      ]
    }
  ]
};
