import type { LearningModule } from "@/lib/modules/types";

export const distributed_systems_101_Module: LearningModule = {
  "id": "distributed-systems-101",
  "title": "Distributed Systems Foundations",
  "description": "Level 101 curriculum in Distributed Systems. Learn how massive apps like streaming services and multiplayer games stay online, handle errors, and keep data synced across the globe. Features interactive simulations, case studies, and real-world problem solving.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "systems",
    "engineering"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply consistency and availability concepts using real-world tradeoffs.",
    "Build repeatable workflows to ensure fault tolerance under realistic constraints.",
    "Evaluate distributed coordination decisions using baseline and side-effect analysis.",
    "Strengthen system observability with transparent policies and escalation pathways.",
    "Communicate technical evidence and uncertainty to mixed stakeholder groups.",
    "Produce defensible system recommendations that survive critical review."
  ],
  "lessons": [
    {
      "id": "distributed-systems-101-l01",
      "title": "Distributed Systems Core Foundations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "distributed-systems-101-l01-a1",
          "type": "image",
          "title": "The CAP Theorem Triangle",
          "content": "A visual triangle showing Consistency, Availability, and Partition Tolerance, with a note that in a distributed system, you can only strongly guarantee two out of three during a network failure.",
          "visualPrompt": "Illustration of three interconnected nodes. One connection breaks (Partition), forcing the system to choose between waiting for the data to sync (Consistency) or answering immediately with old data (Availability)."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-101-l01-c1",
          "kind": "concept",
          "title": "Language, Scope, and Boundaries",
          "content": "Imagine playing a multiplayer game where your friend sees your character in one place, but you see yourself in another. That's a distributed system out of sync! In this lesson, we will define the operational language used to describe these systems. We'll explore scope boundaries—the limits of what a specific system controls—and introduce the core balancing act of distributed computing: consistency, availability, and fault tolerance.",
          "visualPrompt": "Animation showing a user sending a message from a phone, which splits into multiple packets traveling across a glowing global network of servers."
        },
        {
          "id": "distributed-systems-101-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning Under Constraints",
          "content": "Why do systems crash when too many people buy concert tickets at once? Here, we practice modeling cause-and-effect pathways. You will learn to identify the root causes of system bottlenecks and recognize the hidden assumptions that lead to failures. Understanding these pathways is the first step to designing systems that don't break under pressure.",
          "visualPrompt": "A flowchart showing a 'Ticket Purchase' request hitting a bottleneck at a single database server, causing a traffic jam of data packets."
        },
        {
          "id": "distributed-systems-101-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "In system engineering, guessing isn't good enough. Throughout this module, every claim we make must be supported by observable indicators—like server response times or error rates. We will establish 'uncertainty bounds' to acknowledge what we don't know and create review checkpoints to ensure our system designs are reliable.",
          "visualPrompt": "A split screen: on the left, a developer shrugging with a question mark; on the right, a developer pointing to a dashboard full of clear, readable metrics and graphs."
        }
      ],
      "flashcards": [
        {
          "id": "distributed-systems-101-l01-f1",
          "front": "Consistency vs. Availability",
          "back": "The core tradeoff in distributed systems: choosing between giving the user the most up-to-date data (Consistency) or giving them an immediate, but potentially outdated, response (Availability)."
        },
        {
          "id": "distributed-systems-101-l01-f2",
          "front": "Fault Tolerance",
          "back": "A system's ability to continue operating properly even when one or more of its components fail."
        },
        {
          "id": "distributed-systems-101-l01-f3",
          "front": "Distributed Coordination",
          "back": "The methods and protocols used by multiple independent computers to work together as a single unified system."
        }
      ]
    },
    {
      "id": "distributed-systems-101-l02",
      "title": "Distributed Systems Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "distributed-systems-101-l02-a1",
          "type": "practice",
          "title": "Workflow Mapping Guide",
          "content": "Always map your 'Happy Path' (when everything works) first, then branch out to map your 'Failure Paths' (what happens when a server goes down).",
          "visualPrompt": "A branching diagram showing a successful data save in green, and a failed save routing to a backup server in orange."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-101-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "It's time to build! In this interactive lab, you will design a system workflow that connects multiple servers. You'll map out core mechanisms like data routing and load balancing. Once your workflow is built, we'll throw some simulated 'chaos' at it—like sudden traffic spikes—to test how resilient your design is when faced with uncertainty.",
          "visualPrompt": "Interactive drag-and-drop interface where the user connects a 'Web Server' block to a 'Database' block, with a 'Load Balancer' in between."
        },
        {
          "id": "distributed-systems-101-l02-c2",
          "kind": "recap",
          "title": "Readiness and Control Gates",
          "content": "A great system needs great supervision. To ensure operational readiness, you must establish 'control gates'—automated checks that verify a process is safe to continue. We will also map out human responsibilities, ensuring that when an automated gate fails, a specific engineer is alerted to take over.",
          "visualPrompt": "A visual of a toll booth on a data highway. If the data packet is corrupted, the toll gate stays down and an alert flashes to an operator."
        }
      ],
      "interactiveActivities": [
        {
          "id": "distributed-systems-101-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match each system control mechanism to its strongest expected benefit.",
          "pairs": [
            {
              "left": "Pre-commit review gate",
              "right": "Reduces preventable defects before they go live"
            },
            {
              "left": "Rollback trigger",
              "right": "Limits the blast radius during sudden failures"
            },
            {
              "left": "Baseline dashboard",
              "right": "Supports defensible claims about system impact"
            },
            {
              "left": "Retrospective cycle",
              "right": "Improves future decision quality after an incident"
            }
          ]
        },
        {
          "id": "distributed-systems-101-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Classification",
          "description": "Sort the following system constraints into Technical, Policy, and Stakeholder Impact buckets.",
          "buckets": [
            "Technical",
            "Policy",
            "Stakeholder Impact"
          ],
          "items": [
            {
              "text": "Service latency must be under 200ms",
              "bucket": "Technical"
            },
            {
              "text": "User data must be deleted after 30 days",
              "bucket": "Policy"
            },
            {
              "text": "Loss of community trust due to downtime",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Mandatory 24-hour incident disclosure",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "distributed-systems-101-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "distributed-systems-101-l03-a1",
          "type": "practice",
          "title": "Quiz Strategy",
          "content": "Remember the core theme: distributed systems require explicit tradeoffs. There is rarely a 'perfect' solution, only the best solution for a specific set of constraints.",
          "visualPrompt": "An icon of a balancing scale weighing 'Speed' against 'Accuracy'."
        }
      ],
      "questions": [
        {
          "id": "distributed-systems-101-l03-q1",
          "text": "Which action most improves consistency and availability quality in practice?",
          "skillId": "distributed-systems-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Skipping explicit constraints and relying on developer intuition"
            },
            {
              "id": "b",
              "text": "Defining assumptions, monitoring indicators, and testing failure cases"
            },
            {
              "id": "c",
              "text": "Treating all system outcomes as equally important"
            },
            {
              "id": "d",
              "text": "Ignoring network uncertainty and variance"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-quality decisions require explicit assumptions and measurable stress tests to see how the system actually behaves under pressure."
        },
        {
          "id": "distributed-systems-101-l03-q2",
          "text": "At the 101 level of distributed systems, the strongest emphasis is placed on:",
          "skillId": "distributed-systems-101-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Foundational vocabulary, core mechanism mapping, and basic scenario analysis"
            },
            {
              "id": "b",
              "text": "Fast code execution with no review loops"
            },
            {
              "id": "c",
              "text": "Viewing the system from a single stakeholder's perspective only"
            },
            {
              "id": "d",
              "text": "Making outcome claims without establishing baselines"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Before building complex architectures, you must master the foundational vocabulary, understand how core mechanisms connect, and analyze basic scenarios."
        },
        {
          "id": "distributed-systems-101-l03-q3",
          "text": "What best strengthens a system's fault tolerance and reliability?",
          "skillId": "distributed-systems-101-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Having no specific ownership for incident response"
            },
            {
              "id": "b",
              "text": "Clear control points, owner mapping, and escalation thresholds"
            },
            {
              "id": "c",
              "text": "Making ad-hoc changes directly to production without logs"
            },
            {
              "id": "d",
              "text": "Eliminating the postmortem review process"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability improves dramatically when control gates, human ownership, and escalation rules are explicit and repeatable."
        },
        {
          "id": "distributed-systems-101-l03-q4",
          "text": "When evaluating distributed coordination, which approach is most defensible?",
          "skillId": "distributed-systems-101-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Using anecdotal examples from past projects only"
            },
            {
              "id": "b",
              "text": "Comparing interventions against a baseline and monitoring side effects"
            },
            {
              "id": "c",
              "text": "Removing difficult edge-case scenarios from the evaluation"
            },
            {
              "id": "d",
              "text": "Changing target definitions after the results are already known"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baseline comparison and side-effect monitoring provide hard evidence, reducing the risk of overclaiming success and hiding new bugs."
        },
        {
          "id": "distributed-systems-101-l03-q5",
          "text": "A mature observability and operations model should include:",
          "skillId": "distributed-systems-101-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "A one-time review with no corrective pathway"
            },
            {
              "id": "b",
              "text": "Policy links, measurable thresholds, and automated remediation triggers"
            },
            {
              "id": "c",
              "text": "Zero public or stakeholder transparency"
            },
            {
              "id": "d",
              "text": "Unbounded developer discretion without guardrails"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature governance connects high-level policy goals to measurable system thresholds and clear pathways for fixing issues."
        }
      ]
    },
    {
      "id": "distributed-systems-101-l04",
      "title": "Distributed Systems Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "distributed-systems-101-l04-a1",
          "type": "mnemonic",
          "title": "The 3 R's of Incident Response",
          "content": "Recognize (see the failure signature), React (use the playbook), Recover (restore the baseline).",
          "visualPrompt": "A graphic showing a magnifying glass (Recognize), a fire extinguisher (React), and a rising line graph (Recover)."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-101-l04-c1",
          "kind": "example",
          "title": "Case Context and Stakes",
          "content": "Let's look at a real-world scenario: a global streaming service is crashing during the premiere of a highly anticipated show. Some users can't log in (partial outages), while others see episode lists from yesterday (stale reads). In this case study, we will map out the high-stakes decisions the engineering team must make in real-time. You'll learn how to identify hidden risks and prioritize fixes when millions of users are waiting.",
          "visualPrompt": "A mock dashboard of a streaming service showing red alert banners, spiking traffic graphs, and a map with offline servers."
        },
        {
          "id": "distributed-systems-101-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix Construction",
          "content": "When everything is on fire, how do you choose what to fix first? We will create a 'Tradeoff Matrix' to compare different emergency interventions. We'll evaluate options based on effectiveness, reliability, fairness to users, and speed of implementation. This tool helps engineers make logical, defensible decisions rather than panicking under pressure.",
          "visualPrompt": "A grid comparing 'Restart Database' vs 'Serve Cached Data', scoring them on Speed, Data Accuracy, and User Experience."
        },
        {
          "id": "distributed-systems-101-l04-c3",
          "kind": "recap",
          "title": "Failure Lessons and Recovery",
          "content": "A system failure is only a total loss if you don't learn from it. We will explore how to turn the lessons learned from outages into proactive safeguards. You'll learn how to write a 'Recovery Playbook'—a step-by-step guide that ensures the next time this specific failure happens, the team can resolve it in minutes instead of hours.",
          "visualPrompt": "An open digital manual titled 'Incident Playbook: Database Overload' with clear, highlighted steps."
        }
      ],
      "flashcards": [
        {
          "id": "distributed-systems-101-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured grid used to objectively compare different solutions when system priorities (like speed vs. accuracy) conflict."
        },
        {
          "id": "distributed-systems-101-l04-f2",
          "front": "Failure Signature",
          "back": "A recurring, observable pattern of metrics or errors that indicates a specific class of system risk or failure."
        },
        {
          "id": "distributed-systems-101-l04-f3",
          "front": "Recovery Playbook",
          "back": "A documented, step-by-step sequence designed for safe and timely system restoration during adverse events."
        }
      ]
    },
    {
      "id": "distributed-systems-101-l05",
      "title": "Distributed Systems Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "distributed-systems-101-l05-a1",
          "type": "practice",
          "title": "Simulation Checklist",
          "content": "Before running the simulation: 1. Define your goal. 2. Set your uncertainty parameters. 3. Establish what 'success' looks like.",
          "visualPrompt": "A pilot's pre-flight checklist graphic, adapted for a software engineer launching a server."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-101-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation Setup",
          "content": "Welcome to the Simulation Studio! Here, you are in the driver's seat. You will configure various system interventions, define parameters of uncertainty (like random network drops), and establish measurable thresholds for success. This hands-on experience will teach you how to set realistic operational goals and test if your architecture can actually survive the wild internet.",
          "visualPrompt": "A control panel interface with sliders for 'Traffic Volume', 'Network Latency', and 'Server Capacity'."
        },
        {
          "id": "distributed-systems-101-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "Running the simulation is only half the job. After each run, you will review the logs to assess whether your interventions achieved the expected gains. Did fixing the database cause the load balancer to crash? We will analyze these side effects and check if your solution complied with our governance standards. Continuous reflection is the key to continuous improvement.",
          "visualPrompt": "A post-simulation report card showing 'Expected Outcome' vs 'Actual Outcome' with a list of unexpected side effects."
        }
      ],
      "interactiveActivities": [
        {
          "id": "distributed-systems-101-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare three intervention paths to handle a sudden 500% traffic spike. Justify which path best balances availability and operational safety.",
          "instructions": [
            "Define your primary objective and safety guardrails before selecting an intervention.",
            "Record one near-term benefit and one long-term tradeoff for each option.",
            "Select the specific dashboard metrics that will confirm or falsify your choice."
          ]
        },
        {
          "id": "distributed-systems-101-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match each system risk condition with the strongest mitigation response.",
          "pairs": [
            {
              "left": "Ambiguous ownership during an outage",
              "right": "Create an explicit role and escalation map"
            },
            {
              "left": "Weak or noisy error signals",
              "right": "Strengthen intake validation and metric quality checks"
            },
            {
              "left": "Policy drift over time",
              "right": "Re-anchor system controls to documented standards"
            },
            {
              "left": "Stakeholder backlash from downtime",
              "right": "Increase transparency and two-way communication"
            }
          ]
        }
      ]
    },
    {
      "id": "distributed-systems-101-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "distributed-systems-101-l06-a1",
          "type": "practice",
          "title": "Reviewing Case Studies",
          "content": "Think back to the streaming service case study and the simulation studio. Focus on how we measure success and handle unexpected side effects.",
          "visualPrompt": "An icon of a magnifying glass over a line chart showing a sudden drop and recovery."
        }
      ],
      "questions": [
        {
          "id": "distributed-systems-101-l06-q1",
          "text": "What is the primary purpose of a tradeoff matrix in system design?",
          "skillId": "distributed-systems-101-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To guarantee that a system will never experience downtime"
            },
            {
              "id": "b",
              "text": "To objectively compare different solutions when priorities conflict"
            },
            {
              "id": "c",
              "text": "To hide system flaws from stakeholders"
            },
            {
              "id": "d",
              "text": "To automatically write code for load balancers"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix helps engineers make logical, defensible decisions by comparing options across multiple conflicting priorities, like speed versus accuracy."
        },
        {
          "id": "distributed-systems-101-l06-q2",
          "text": "If a streaming service shows users an outdated recommendation list but keeps the video player running during high traffic, which tradeoff did they likely make?",
          "skillId": "distributed-systems-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Prioritized strict consistency over availability"
            },
            {
              "id": "b",
              "text": "Prioritized availability over strict consistency"
            },
            {
              "id": "c",
              "text": "Ignored partition tolerance entirely"
            },
            {
              "id": "d",
              "text": "Failed to implement any fault tolerance"
            }
          ],
          "correctOptionId": "b",
          "explanation": "By showing outdated data (stale reads) to keep the app online and functional, the system prioritized availability over strict data consistency."
        },
        {
          "id": "distributed-systems-101-l06-q3",
          "text": "What is a 'failure signature'?",
          "skillId": "distributed-systems-101-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "The digital signature of the engineer who caused the outage"
            },
            {
              "id": "b",
              "text": "A recognizable pattern of system behavior that indicates a specific type of problem"
            },
            {
              "id": "c",
              "text": "A legal document signed after a data breach"
            },
            {
              "id": "d",
              "text": "A random, unrepeatable error code"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A failure signature is a recurring, observable pattern (like a specific spike in latency followed by memory errors) that helps engineers quickly identify a known issue."
        },
        {
          "id": "distributed-systems-101-l06-q4",
          "text": "Why is it important to establish a baseline before testing a new system intervention in a simulation?",
          "skillId": "distributed-systems-101-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To accurately measure whether the intervention actually improved the system"
            },
            {
              "id": "b",
              "text": "To ensure the simulation runs as slowly as possible"
            },
            {
              "id": "c",
              "text": "To prevent any side effects from occurring"
            },
            {
              "id": "d",
              "text": "To satisfy legal compliance laws"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Without a baseline (how the system performs normally), you cannot prove that your intervention made things better or worse."
        },
        {
          "id": "distributed-systems-101-l06-q5",
          "text": "Which of the following is the best example of a recovery playbook action?",
          "skillId": "distributed-systems-101-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Guessing which server to restart based on intuition"
            },
            {
              "id": "b",
              "text": "A documented, step-by-step guide for safely routing traffic away from a crashed database"
            },
            {
              "id": "c",
              "text": "Waiting for the lead engineer to wake up and fix the issue"
            },
            {
              "id": "d",
              "text": "Deleting all error logs to save storage space"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A recovery playbook provides explicit, pre-approved steps to safely and quickly restore service during an incident."
        }
      ]
    },
    {
      "id": "distributed-systems-101-l07",
      "title": "Distributed Systems Ethics and Policy Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "distributed-systems-101-l07-a1",
          "type": "image",
          "title": "Stakeholder Mapping",
          "content": "Always ask: Who benefits from this system design, and who carries the burden if it fails?",
          "visualPrompt": "A mind map placing 'The System' in the center, branching out to 'End Users', 'Developers', 'Business Owners', and 'Regulators'."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-101-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "Technology doesn't exist in a vacuum; it affects real people. In this lesson, we will map out how the impacts of our system decisions are distributed among different stakeholders. For example, if we choose to shut down a server for maintenance during the day, it might be great for our engineers, but terrible for our international users. We will focus on fairness and equity, ensuring that the benefits and burdens of our systems are balanced.",
          "visualPrompt": "An animation showing a scale balancing 'Developer Convenience' on one side and 'User Accessibility' on the other."
        },
        {
          "id": "distributed-systems-101-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "When a system makes a mistake—like overcharging a customer—who is responsible? To ensure accountability, we must build structures that allow us to trace decisions back to their origins. This means keeping clear logs, establishing rights for review, and setting standards for how we fix things when they go wrong. Good architecture builds trust.",
          "visualPrompt": "A digital footprint graphic showing a clear path from a user's click, through the code, to a specific database entry."
        },
        {
          "id": "distributed-systems-101-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before launching any major distributed system, you need a final safety check. We will create a comprehensive 'Responsible Execution Checklist' that covers technical reliability, ethical considerations, data privacy policies, and stakeholder trust. This ensures that we aren't just building systems that work, but systems that are responsible and safe.",
          "visualPrompt": "A clipboard with a checklist featuring items like 'Data Encrypted', 'Failover Tested', and 'User Privacy Protected', all getting green checkmarks."
        }
      ],
      "flashcards": [
        {
          "id": "distributed-systems-101-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how the benefits and harms of a system decision are allocated across different groups of stakeholders."
        },
        {
          "id": "distributed-systems-101-l07-f2",
          "front": "Decision Traceability",
          "back": "The ability to look at system logs and documentation to explain exactly why a decision was made, by whom, and with what evidence."
        },
        {
          "id": "distributed-systems-101-l07-f3",
          "front": "Responsible Execution",
          "back": "A method of deploying software that combines technical effectiveness with fairness, transparency, and the capacity to correct mistakes."
        }
      ]
    },
    {
      "id": "distributed-systems-101-l08",
      "title": "Distributed Systems Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "distributed-systems-101-l08-a1",
          "type": "practice",
          "title": "Capstone Blueprint",
          "content": "Your charter is your blueprint. Be specific about your boundaries: what will your system do, and just as importantly, what will it NOT do?",
          "visualPrompt": "An architectural blueprint of a server rack with clear boundary lines drawn around specific components."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-101-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter Drafting",
          "content": "It's time to plan your final project! In this activity, you will draft a detailed Capstone Charter. This document will outline the scope of your distributed system, identify the technical constraints you expect to face, establish clear metrics for success, and set governance checkpoints. A well-planned charter is the foundation of a successful engineering project.",
          "visualPrompt": "An interactive text editor template with sections for 'Project Scope', 'Success Metrics', and 'Risk Mitigation'."
        },
        {
          "id": "distributed-systems-101-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "In the real world, engineers must defend their design choices to managers, clients, and peers. As we prepare for the final stages of your capstone, we will focus on gathering strong, data-backed evidence to support your architectural decisions. You will develop a solid plan to respond to critical reviews, ensuring you can confidently explain why your system is built the way it is.",
          "visualPrompt": "An illustration of an engineer confidently presenting a system diagram to a panel of reviewers, pointing to a chart of performance metrics."
        }
      ],
      "interactiveActivities": [
        {
          "id": "distributed-systems-101-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a comprehensive capstone charter with measurable objectives, identified risks, and remediation plans.",
          "instructions": [
            "State your primary system objective and strict boundary conditions.",
            "Define at least three measurable success indicators (e.g., 99.9% uptime).",
            "Document a governance escalation pathway for critical system failures."
          ]
        },
        {
          "id": "distributed-systems-101-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone architecture approach against simulated technical, policy, and stakeholder critiques."
        }
      ]
    }
  ]
};
