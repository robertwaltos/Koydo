import type { LearningModule } from "@/lib/modules/types";

export const OrganizationalBehavior401Module: LearningModule = {
  id: "organizational-behavior-401",
  title: "Organizational Design & Change Management",
  description:
    "Master the principles of organizational structure, Mintzberg's configurations, and designing organizations for innovation. Learn proven change management frameworks including Lewin's model and Burke-Litwin, and explore how learning organizations sustain adaptability.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "organizational-behavior"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Compare functional, divisional, matrix, and network organizational structures",
    "Explain Mintzberg's five organizational configurations",
    "Describe how organizational design supports or hinders innovation",
    "Apply Lewin's three-stage model to plan organizational change",
    "Analyze organizational change using the Burke-Litwin causal model",
    "Define learning organizations and Senge's five disciplines",
    "Evaluate organizational development interventions for effectiveness"
  ],
  lessons: [
    {
      id: "organizational-behavior-401-l01",
      title: "Organizational Structures",
      type: "video",
      duration: 14,
      objectives: [
        "Describe the key dimensions of organizational structure",
        "Compare functional, divisional, matrix, and network structures",
        "Explain how structure follows strategy"
      ],
      chunks: [
        {
          id: "organizational-behavior-401-l01-c1",
          title: "Key Structural Dimensions",
          content:
            "Organizational structure defines how activities are divided, coordinated, and controlled. Six key dimensions shape every structure: work specialization (how finely tasks are divided), departmentalization (how jobs are grouped), chain of command (who reports to whom), span of control (how many subordinates each manager oversees), centralization vs. decentralization (where decisions are made), and formalization (how much behavior is governed by rules and procedures). Alfred Chandler's classic research demonstrated that structure follows strategy — organizations must redesign their structures as their strategies evolve."
        },
        {
          id: "organizational-behavior-401-l01-c2",
          title: "Functional and Divisional Structures",
          content:
            "A functional structure groups employees by specialized function — marketing, finance, operations, HR. It maximizes efficiency and deep expertise but can create silos and slow cross-functional coordination. A divisional structure organizes around products, geographies, or customer segments. Each division operates semi-autonomously with its own functional resources. General Electric under Jack Welch used a divisional structure to manage diverse businesses from jet engines to medical equipment, giving each division entrepreneurial freedom while maintaining corporate-level strategic oversight."
        },
        {
          id: "organizational-behavior-401-l01-c3",
          title: "Matrix and Network Structures",
          content:
            "A matrix structure combines functional and divisional approaches — employees report to both a functional manager and a project or product manager simultaneously. NASA and many consulting firms use matrix structures to deploy specialized talent across multiple projects. The dual reporting relationship creates flexibility but can also generate confusion and power struggles. Network structures (also called virtual or modular organizations) outsource most functions to external partners, retaining only core competencies internally. Nike exemplifies this — designing products in-house while manufacturing is handled by a global network of contractors."
        }
      ],
      flashcards: [
        { id: "organizational-behavior-401-l01-f1", front: "Six key dimensions of organizational structure", back: "Work specialization, departmentalization, chain of command, span of control, centralization/decentralization, and formalization" },
        { id: "organizational-behavior-401-l01-f2", front: "Functional vs. divisional structure", back: "Functional: groups by specialty (marketing, finance) — efficient but siloed. Divisional: groups by product, geography, or customer — autonomous but may duplicate resources" },
        { id: "organizational-behavior-401-l01-f3", front: "Matrix structure", back: "Dual reporting to both functional and project/product managers — provides flexibility and cross-functional integration but can cause confusion and power conflicts" }
      ]
    },
    {
      id: "organizational-behavior-401-l02",
      title: "Mintzberg's Organizational Configurations",
      type: "video",
      duration: 13,
      objectives: [
        "Identify the five parts of an organization according to Mintzberg",
        "Describe Mintzberg's five structural configurations",
        "Match configurations to organizational contexts"
      ],
      chunks: [
        {
          id: "organizational-behavior-401-l02-c1",
          title: "Mintzberg's Five Parts",
          content:
            "Henry Mintzberg proposed that every organization comprises five parts: the Strategic Apex (top management setting direction), the Middle Line (managers connecting the apex to operations), the Operating Core (workers performing the basic production or service tasks), the Technostructure (analysts who standardize processes — planners, accountants, quality engineers), and Support Staff (indirect services like legal, cafeteria, public relations). The relative influence of each part determines the organization's configuration."
        },
        {
          id: "organizational-behavior-401-l02-c2",
          title: "Five Configurations: Part One",
          content:
            "The Simple Structure is dominated by the strategic apex — a startup or small business where the founder makes all key decisions, with minimal hierarchy and formalization. It is flexible but fragile, dependent on one person. The Machine Bureaucracy is dominated by the technostructure — highly standardized processes, clear hierarchies, and extensive rules (think government agencies or mass-production factories like early Ford plants). It excels at efficiency but struggles with innovation. The Professional Bureaucracy is dominated by the operating core — skilled professionals (hospitals, universities, law firms) who have significant autonomy and are coordinated through training and professional standards."
        },
        {
          id: "organizational-behavior-401-l02-c3",
          title: "Five Configurations: Part Two",
          content:
            "The Divisionalized Form is dominated by the middle line — each division operates as a quasi-independent unit (like Procter & Gamble's product divisions). Corporate headquarters controls through performance metrics while divisions manage their own operations. The Adhocracy is designed for innovation — dominated by support staff and operating core working in fluid, project-based teams with minimal hierarchy or standardization. Technology companies, film studios, and consulting firms often resemble adhocracies. Spotify's squad model — autonomous cross-functional teams grouped into tribes — reflects adhocratic principles applied at scale."
        }
      ],
      flashcards: [
        { id: "organizational-behavior-401-l02-f1", front: "Mintzberg's five organizational parts", back: "Strategic Apex (top leaders), Middle Line (managers), Operating Core (front-line workers), Technostructure (standardization analysts), Support Staff (indirect services)" },
        { id: "organizational-behavior-401-l02-f2", front: "Machine Bureaucracy vs. Adhocracy", back: "Machine Bureaucracy: standardized, hierarchical, efficient, rigid (factories, government). Adhocracy: fluid, project-based, innovative, flexible (tech firms, studios)" },
        { id: "organizational-behavior-401-l02-f3", front: "Professional Bureaucracy", back: "Dominated by skilled operating core professionals (doctors, lawyers, professors) who have high autonomy and are coordinated through professional training and standards, not managerial oversight" }
      ]
    },
    {
      id: "organizational-behavior-401-l03",
      title: "Designing Organizations for Innovation",
      type: "interactive",
      duration: 14,
      objectives: [
        "Explain how organizational design enables or constrains innovation",
        "Describe the ambidextrous organization concept",
        "Identify structural approaches used by innovative companies"
      ],
      chunks: [
        {
          id: "organizational-behavior-401-l03-c1",
          title: "Structure and Innovation Tension",
          content:
            "Organizations face a fundamental tension: exploitation (optimizing current operations) requires efficiency, control, and standardization, while exploration (pursuing new innovations) demands flexibility, experimentation, and tolerance for failure. Burns and Stalker distinguished mechanistic structures (rigid, hierarchical, suited to stable environments) from organic structures (flat, adaptive, suited to dynamic environments). Innovative organizations need organic elements — but purely organic structures can become chaotic at scale. The challenge is finding the right balance."
        },
        {
          id: "organizational-behavior-401-l03-c2",
          title: "The Ambidextrous Organization",
          content:
            "Charles O'Reilly and Michael Tushman proposed the ambidextrous organization — structurally separating exploration units from exploitation units while maintaining strategic integration at the top. Exploration units have their own culture, processes, and metrics optimized for experimentation. Exploitation units operate with traditional efficiency-focused structures. Senior leadership bridges both. IBM's Emerging Business Opportunities program exemplified this — creating protected innovation units that developed cloud computing and analytics businesses while the mainframe business continued operating under different rules."
        },
        {
          id: "organizational-behavior-401-l03-c3",
          title: "Innovative Structural Approaches",
          content:
            "Leading companies use varied structural innovations. Google's '20% time' (now evolved into structured hackathons) allows bottom-up exploration. Amazon's 'working backwards' process requires detailed mock press releases before building new products — combining organic ideation with disciplined structure. W.L. Gore (makers of Gore-Tex) uses a lattice structure with no formal hierarchy — associates choose projects and leaders emerge through followership. Haier, the Chinese appliance maker, dissolved its middle management and reorganized into thousands of self-managed micro-enterprises, each acting like a small startup within the larger organization."
        }
      ],
      flashcards: [
        { id: "organizational-behavior-401-l03-f1", front: "Exploitation vs. exploration", back: "Exploitation: optimizing current operations (efficiency, control). Exploration: pursuing innovation (flexibility, experimentation). Organizations must balance both to survive long-term" },
        { id: "organizational-behavior-401-l03-f2", front: "Ambidextrous organization (O'Reilly & Tushman)", back: "Structurally separate exploration units (innovation-focused) from exploitation units (efficiency-focused), with senior leadership integrating both at the strategic level" },
        { id: "organizational-behavior-401-l03-f3", front: "Mechanistic vs. organic structures (Burns & Stalker)", back: "Mechanistic: rigid, hierarchical, rule-bound — suited to stable environments. Organic: flat, adaptive, informal — suited to dynamic environments requiring innovation" }
      ]
    },
    {
      id: "organizational-behavior-401-l04",
      title: "Managing Organizational Change",
      type: "video",
      duration: 15,
      objectives: [
        "Apply Lewin's three-stage change model",
        "Explain the Burke-Litwin model of organizational performance and change",
        "Identify common sources of resistance to change"
      ],
      chunks: [
        {
          id: "organizational-behavior-401-l04-c1",
          title: "Lewin's Three-Stage Model",
          content:
            "Kurt Lewin's foundational change model involves three stages: Unfreeze — creating awareness that the current state is unsustainable by disrupting the status quo, challenging existing beliefs, and building urgency. Change (or Move) — implementing new behaviors, processes, or structures while providing support, training, and communication. Refreeze — stabilizing the new state by embedding it into policies, reward systems, culture, and daily routines so the organization does not revert to old patterns. Lewin's force field analysis complements this model by mapping driving forces (pushing for change) against restraining forces (resisting change)."
        },
        {
          id: "organizational-behavior-401-l04-c2",
          title: "Burke-Litwin Causal Model",
          content:
            "W. Warner Burke and George Litwin developed a comprehensive model identifying 12 organizational variables and their causal relationships. Transformational factors (external environment, mission/strategy, leadership, organizational culture) drive fundamental change from the top down. Transactional factors (management practices, structure, systems, work unit climate) affect day-to-day operations. Individual factors (motivation, individual needs/values, task requirements, individual and organizational performance) represent outcomes. The model shows that lasting change requires addressing transformational factors first — changing structure without addressing culture and leadership usually fails."
        },
        {
          id: "organizational-behavior-401-l04-c3",
          title: "Resistance to Change",
          content:
            "People resist change for rational reasons: fear of the unknown, loss of status or security, disruption of social networks, perceived incompetence in the new system, and genuine disagreement with the change direction. John Kotter identified common change management errors: insufficient urgency, no guiding coalition, lack of vision, under-communicating the vision, failing to remove obstacles, no short-term wins, declaring victory prematurely, and not anchoring changes in culture. Effective change managers treat resistance as diagnostic information — understanding why people resist reveals what needs to be addressed."
        }
      ],
      flashcards: [
        { id: "organizational-behavior-401-l04-f1", front: "Lewin's three-stage change model", back: "Unfreeze (create urgency, disrupt status quo) → Change/Move (implement new behaviors with support) → Refreeze (stabilize new state in systems, policies, culture)" },
        { id: "organizational-behavior-401-l04-f2", front: "Burke-Litwin model", back: "12-variable causal model: transformational factors (environment, strategy, leadership, culture) drive deep change; transactional factors (structure, systems, practices) affect operations; individual factors are outcomes" },
        { id: "organizational-behavior-401-l04-f3", front: "Why people resist change", back: "Fear of unknown, loss of status/security, disrupted relationships, perceived incompetence, genuine disagreement — resistance is diagnostic information, not mere obstinacy" }
      ]
    },
    {
      id: "organizational-behavior-401-l05",
      title: "Checkpoint: Structure & Change",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "organizational-behavior-401-l05-q1",
          text: "In Mintzberg's framework, which configuration is dominated by the technostructure and emphasizes standardized processes?",
          options: [
            { id: "a", text: "Simple Structure" },
            { id: "b", text: "Machine Bureaucracy" },
            { id: "c", text: "Professional Bureaucracy" },
            { id: "d", text: "Adhocracy" }
          ],
          correctOptionId: "b",
          explanation: "Machine Bureaucracy is dominated by the technostructure (analysts who standardize work) and features highly formalized processes, clear hierarchies, and extensive rules. Simple Structure is dominated by the strategic apex, Professional Bureaucracy by the operating core, and Adhocracy by project teams."
        },
        {
          id: "organizational-behavior-401-l05-q2",
          text: "The 'refreeze' stage in Lewin's model involves:",
          options: [
            { id: "a", text: "Creating urgency for change" },
            { id: "b", text: "Implementing new processes and training" },
            { id: "c", text: "Stabilizing new behaviors in systems, policies, and culture" },
            { id: "d", text: "Identifying driving and restraining forces" }
          ],
          correctOptionId: "c",
          explanation: "Refreezing is about stabilizing and embedding the new state into the organization's policies, reward systems, and culture to prevent regression. Creating urgency is unfreezing, implementing changes is the move/change stage, and force field analysis is a complementary diagnostic tool."
        },
        {
          id: "organizational-behavior-401-l05-q3",
          text: "An ambidextrous organization handles the exploitation-exploration tension by:",
          options: [
            { id: "a", text: "Focusing exclusively on innovation" },
            { id: "b", text: "Structurally separating innovation units from efficiency units with strategic integration at the top" },
            { id: "c", text: "Requiring all employees to split time between innovation and operations" },
            { id: "d", text: "Outsourcing all innovation to external partners" }
          ],
          correctOptionId: "b",
          explanation: "O'Reilly and Tushman's ambidextrous model structurally separates exploration (innovation) and exploitation (efficiency) into distinct units with different cultures and processes, while senior leadership provides strategic integration across both."
        },
        {
          id: "organizational-behavior-401-l05-q4",
          text: "According to the Burke-Litwin model, which factors drive the DEEPEST organizational change?",
          options: [
            { id: "a", text: "Structure and systems" },
            { id: "b", text: "Management practices and work unit climate" },
            { id: "c", text: "External environment, mission/strategy, leadership, and culture" },
            { id: "d", text: "Individual needs and task requirements" }
          ],
          correctOptionId: "c",
          explanation: "The Burke-Litwin model classifies external environment, mission/strategy, leadership, and organizational culture as transformational factors that drive fundamental change. Structure, systems, and management practices are transactional factors affecting daily operations."
        }
      ]
    },
    {
      id: "organizational-behavior-401-l06",
      title: "Learning Organizations and OD Interventions",
      type: "video",
      duration: 14,
      objectives: [
        "Explain Senge's five disciplines of a learning organization",
        "Describe common organizational development interventions",
        "Evaluate the effectiveness of OD approaches"
      ],
      chunks: [
        {
          id: "organizational-behavior-401-l06-c1",
          title: "Senge's Learning Organization",
          content:
            "Peter Senge defined a learning organization as one that continuously expands its capacity to create its future. His five disciplines are: Personal Mastery (individual commitment to lifelong learning), Mental Models (surfacing and challenging deeply held assumptions), Shared Vision (building genuine commitment to collective goals), Team Learning (dialogue and collective thinking that transcends individual understanding), and Systems Thinking (seeing the whole rather than isolated parts — the 'fifth discipline' that integrates all others). Toyota's production system exemplifies these principles — every worker is expected to stop the line when they detect a problem, learn from it, and improve the system."
        },
        {
          id: "organizational-behavior-401-l06-c2",
          title: "Organizational Development Interventions",
          content:
            "Organizational development (OD) is a planned, systematic approach to improving organizational effectiveness using behavioral science knowledge. Common interventions include: survey feedback (collecting and sharing employee data to guide improvement), team building (structured activities to improve group functioning), process consultation (an expert helps groups diagnose and solve their own problems), appreciative inquiry (focusing on what works well and amplifying it rather than fixing problems), and large-group interventions like World Cafe or Open Space Technology that engage hundreds of stakeholders in collaborative dialogue."
        },
        {
          id: "organizational-behavior-401-l06-c3",
          title: "Evaluating OD Effectiveness",
          content:
            "Effective OD interventions share common features: strong top management support, clear diagnosis before action, involvement of those affected by change, sustained effort over time, and systematic evaluation of results. Kirkpatrick's four-level model evaluates impact: reaction (did participants value it?), learning (did knowledge or skills increase?), behavior (did on-the-job behavior change?), and results (did organizational outcomes improve?). Meta-analyses show that OD interventions generally produce positive effects, particularly when they combine multiple approaches — for example, coupling structural redesign with team building and leadership development."
        }
      ],
      flashcards: [
        { id: "organizational-behavior-401-l06-f1", front: "Senge's five disciplines", back: "Personal Mastery, Mental Models, Shared Vision, Team Learning, Systems Thinking (the integrating 'fifth discipline') — foundations of a learning organization" },
        { id: "organizational-behavior-401-l06-f2", front: "Appreciative inquiry", back: "An OD approach that focuses on identifying and amplifying what works well in an organization rather than diagnosing and fixing problems — building on strengths" },
        { id: "organizational-behavior-401-l06-f3", front: "Kirkpatrick's four evaluation levels", back: "Reaction (satisfaction), Learning (knowledge gain), Behavior (on-the-job change), Results (organizational outcomes) — increasingly difficult to measure at each level" }
      ]
    },
    {
      id: "organizational-behavior-401-l07",
      title: "Final Assessment: Organizational Design & Change",
      type: "quiz",
      duration: 15,
      questions: [
        {
          id: "organizational-behavior-401-l07-q1",
          text: "Which of Senge's five disciplines serves as the integrating framework for all the others?",
          options: [
            { id: "a", text: "Personal Mastery" },
            { id: "b", text: "Mental Models" },
            { id: "c", text: "Shared Vision" },
            { id: "d", text: "Systems Thinking" }
          ],
          correctOptionId: "d",
          explanation: "Systems Thinking is the 'fifth discipline' that integrates all others — it provides the conceptual framework for seeing interrelationships and patterns of change rather than isolated snapshots. Without systems thinking, the other disciplines remain separate improvements."
        },
        {
          id: "organizational-behavior-401-l07-q2",
          text: "A hospital where doctors have significant autonomy and are coordinated primarily through professional training is an example of Mintzberg's:",
          options: [
            { id: "a", text: "Machine Bureaucracy" },
            { id: "b", text: "Adhocracy" },
            { id: "c", text: "Professional Bureaucracy" },
            { id: "d", text: "Simple Structure" }
          ],
          correctOptionId: "c",
          explanation: "A Professional Bureaucracy is dominated by its operating core of skilled professionals (doctors, lawyers, professors) who have high autonomy and are coordinated through standardization of skills (professional training) rather than direct supervision or work rules."
        },
        {
          id: "organizational-behavior-401-l07-q3",
          text: "In a matrix structure, the primary challenge for employees is:",
          options: [
            { id: "a", text: "Lack of specialization opportunities" },
            { id: "b", text: "Dual reporting relationships creating potential confusion and conflict" },
            { id: "c", text: "Too much autonomy with no oversight" },
            { id: "d", text: "Inability to work on cross-functional projects" }
          ],
          correctOptionId: "b",
          explanation: "The defining feature and primary challenge of matrix structures is dual reporting — employees answer to both a functional manager and a project/product manager, which can create conflicting priorities, power struggles, and role ambiguity."
        },
        {
          id: "organizational-behavior-401-l07-q4",
          text: "According to Kotter, which of the following is a common error in change management?",
          options: [
            { id: "a", text: "Creating too much urgency" },
            { id: "b", text: "Communicating the vision too frequently" },
            { id: "c", text: "Declaring victory too soon before changes are anchored in culture" },
            { id: "d", text: "Generating too many short-term wins" }
          ],
          correctOptionId: "c",
          explanation: "Kotter identified declaring victory prematurely — before new approaches are firmly embedded in organizational culture — as a critical change management error. Organizations revert to old patterns when leaders celebrate too early and reduce change efforts before the new way of working is fully stabilized."
        }
      ]
    }
  ],
};
