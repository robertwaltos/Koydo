import type { LearningModule } from "@/lib/modules/types";

export const linux_301_Module: LearningModule = {
  "id": "linux-301",
  "title": "Linux Reliability, Networking, and Security Engineering",
  "description": "Advanced Linux engineering curriculum on production reliability, performance analysis, network stack behavior, security hardening, and incident response operations.",
  "subject": "Operating Systems",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "technology",
    "operating-systems",
    "linux",
    "security"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Engineer Linux services for reliability with systemd and dependency-aware startup.",
    "Analyze performance bottlenecks using CPU, memory, IO, and network evidence.",
    "Design secure Linux baselines using hardening and access governance controls.",
    "Interpret logs and telemetry for faster incident containment and root-cause analysis.",
    "Apply automation and change controls to reduce production drift.",
    "Communicate operational risk and remediation plans clearly to stakeholders."
  ],
  "lessons": [
    {
      "id": "linux-301-l01",
      "title": "Boot Flow, systemd Graph, and Service Topology",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "linux-301-l01-c1",
          "kind": "concept",
          "title": "The Boot Path as a Reliability Surface",
          "content": "System reliability begins before any application code runs. The boot chain—from firmware and bootloader to kernel parameters, initramfs, and systemd unit activation—is a critical surface area for potential failures. Engineering this sequence for robustness ensures a predictable and recoverable system startup, forming the foundation of a reliable service.",
          "visualPrompt": "Diagram of the Linux boot sequence: BIOS/UEFI -> Bootloader (GRUB) -> Kernel -> initramfs -> systemd."
        },
        {
          "id": "linux-301-l01-c2",
          "kind": "concept",
          "title": "Dependency Graph Thinking",
          "content": "systemd models services and their dependencies as a directed graph. This graph dictates startup order, restart behavior, and fault isolation boundaries. Incorrectly modeled dependencies can turn a minor service fault into a cascading failure that brings down the entire system. Precise dependency mapping is essential for stability and resilience.",
          "visualPrompt": "Animation of a directed graph with nodes (services) and edges (dependencies). Show one node failing and how it impacts only its direct dependents, versus a cascading failure."
        },
        {
          "id": "linux-301-l01-c3",
          "kind": "recap",
          "title": "Operational Guardrails for Service Management",
          "content": "High-performing teams treat systemd unit files as critical code. This means applying software development best practices: version control for tracking changes, peer review to catch errors, and automated testing to validate behavior. A well-documented and version-controlled service topology is a key operational asset for maintaining system reliability.",
          "visualPrompt": "Side-by-side comparison of a messy, undocumented systemd unit file and a clean, version-controlled file with clear comments and metadata."
        }
      ],
      "flashcards": [
        {
          "id": "linux-301-l01-f1",
          "front": "Unit dependency graph",
          "back": "The relationship map of service ordering and requirement constraints managed by systemd."
        },
        {
          "id": "linux-301-l01-f2",
          "front": "Fault isolation",
          "back": "A design principle that contains failures within a service's boundary, preventing them from spreading to other components."
        },
        {
          "id": "linux-301-l01-f3",
          "front": "Initramfs",
          "back": "An initial RAM-based file system used during boot to mount the real root filesystem and transition control from the kernel to the init process."
        }
      ],
      "learningAids": [
        {
          "id": "linux-301-l01-a1",
          "type": "image",
          "title": "Boot and Service Topology Map",
          "content": "A reference diagram flowing from the bootloader to systemd targets, illustrating common service dependencies."
        }
      ]
    },
    {
      "id": "linux-301-l02",
      "title": "Observability and Performance Investigation Lab",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "linux-301-l02-c1",
          "kind": "concept",
          "title": "Four-Domain Diagnosis",
          "content": "Most performance incidents stem from resource contention across four primary domains: CPU, memory, storage I/O, and network. A problem in one domain often causes secondary symptoms in another. A holistic, multi-domain analysis is required to pinpoint the true bottleneck and avoid mistaking symptoms for root causes.",
          "visualPrompt": "A dashboard view with four quadrants, one for each domain (CPU, Memory, I/O, Network), showing key metrics like `load average`, `swap usage`, `iowait`, and `packet drops`."
        },
        {
          "id": "linux-301-l02-c2",
          "kind": "practice",
          "title": "Evidence-Driven Triage",
          "content": "Effective diagnosis requires collecting time-correlated evidence from multiple sources: logs, process states, kernel metrics, and application-level symptoms. Crucially, this evidence must be captured as a baseline *before* making any changes. This evidence-first approach prevents premature conclusions and ensures interventions are targeted and effective.",
          "visualPrompt": "A timeline graphic showing an incident start time. Icons appear for collecting logs, metrics, and process states *before* an icon representing a change (e.g., a service restart)."
        }
      ],
      "interactiveActivities": [
        {
          "id": "linux-301-l02-act1",
          "type": "matching_pairs",
          "title": "Signal-to-Domain Match",
          "description": "Match incident signals to the most likely resource domain.",
          "pairs": [
            {
              "left": "High run queue with low idle time",
              "right": "CPU contention"
            },
            {
              "left": "Rising page faults and swap pressure",
              "right": "Memory stress"
            },
            {
              "left": "Increasing await latency on a block device",
              "right": "Storage I/O bottleneck"
            },
            {
              "left": "Packet drops under burst traffic",
              "right": "Network saturation or queue pressure"
            }
          ]
        },
        {
          "id": "linux-301-l02-act2",
          "type": "scenario_practice",
          "title": "Latency Incident Drill",
          "description": "Investigate a sudden service latency increase with mixed symptoms.",
          "instructions": [
            "Select one first measurement to disambiguate root causes.",
            "Propose one low-risk mitigation while diagnosis continues."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Why is time correlation critical in Linux incident analysis?",
          "What is the risk of tuning without baseline evidence?",
          "In your experience, which domain usually shows secondary symptoms first?"
        ]
      },
      "learningAids": [
        {
          "id": "linux-301-l02-a1",
          "type": "practice",
          "title": "Incident Evidence Sheet",
          "content": "A template for documenting a symptom timeline, signal capture, hypothesis ranking, and test results."
        }
      ]
    },
    {
      "id": "linux-301-l03",
      "title": "Checkpoint 1: Reliability and Performance",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "linux-301-l03-q1",
          "text": "Why is it critical to explicitly model systemd dependencies in production?",
          "skillId": "linux-301-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "To increase the chance of restart storms"
            },
            {
              "id": "b",
              "text": "To control startup order and limit failure cascades"
            },
            {
              "id": "c",
              "text": "To avoid the need to document services"
            },
            {
              "id": "d",
              "text": "To disable all service health checks"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Clear dependency definitions improve startup determinism and contain failures, preventing them from spreading across the system."
        },
        {
          "id": "linux-301-l03-q2",
          "text": "What is the best first step when triaging a performance issue?",
          "skillId": "linux-301-skill-observability",
          "options": [
            {
              "id": "a",
              "text": "Apply random kernel tuning parameters immediately"
            },
            {
              "id": "b",
              "text": "Capture baseline evidence across CPU, memory, I/O, and network domains"
            },
            {
              "id": "c",
              "text": "Restart all services to clear the state"
            },
            {
              "id": "d",
              "text": "Delete historic metrics to save space"
            }
          ],
          "correctOptionId": "b",
          "explanation": "An evidence-first approach avoids confirmation bias and ensures that any changes are based on data, not assumptions."
        },
        {
          "id": "linux-301-l03-q3",
          "text": "A high page-fault rate combined with swap growth most directly indicates:",
          "skillId": "linux-301-skill-observability",
          "options": [
            {
              "id": "a",
              "text": "CPU overclock instability"
            },
            {
              "id": "b",
              "text": "Memory pressure"
            },
            {
              "id": "c",
              "text": "A DNS cache miss"
            },
            {
              "id": "d",
              "text": "A filesystem permission issue"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Page faults and swapping are classic indicators that the system lacks sufficient physical memory for its workload."
        },
        {
          "id": "linux-301-l03-q4",
          "text": "What makes a temporary incident mitigation action safe to apply?",
          "skillId": "linux-301-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "It is not recorded in any change log"
            },
            {
              "id": "b",
              "text": "It has a limited blast radius and a clear rollback plan"
            },
            {
              "id": "c",
              "text": "It involves making permanent policy updates during the outage"
            },
            {
              "id": "d",
              "text": "It ignores all service dependencies"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Safe containment actions are reversible and their potential negative impact is well-understood and bounded."
        }
      ],
      "learningAids": [
        {
          "id": "linux-301-l03-a1",
          "type": "mnemonic",
          "title": "BASE",
          "content": "Baseline, Assess domains, Stabilize, Evaluate cause."
        }
      ]
    },
    {
      "id": "linux-301-l04",
      "title": "Security Hardening, Compliance, and Access Governance",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "linux-301-l04-c1",
          "kind": "concept",
          "title": "Baseline Hardening Controls",
          "content": "Effective security starts with a hardened baseline. This involves attack surface reduction by minimizing installed packages, maintaining a strict patch management discipline, enforcing secure SSH policies, implementing file integrity monitoring, and governing the full user account lifecycle. These foundational controls create a strong, defensible security posture.",
          "visualPrompt": "A checklist graphic with icons for package management, patching, SSH keys, firewall rules, and file integrity monitoring."
        },
        {
          "id": "linux-301-l04-c2",
          "kind": "concept",
          "title": "Policy and Auditable Evidence",
          "content": "Compliance readiness requires more than just correct settings; it demands auditable evidence. This means maintaining clear, accessible records of patch deployment, privileged access reviews, and security policy exceptions. A robust evidence trail demonstrates due diligence and is essential for satisfying regulatory and organizational requirements.",
          "visualPrompt": "An illustration of a document with a green checkmark, representing an audit report, linked to icons for log files and access review tickets."
        },
        {
          "id": "linux-301-l04-c3",
          "kind": "recap",
          "title": "Balancing Security and Operational Friction",
          "content": "Security controls must be balanced against the need for operational efficiency. Overly restrictive measures can introduce friction, prompting users to create insecure workarounds. Teams must test hardening policies in realistic scenarios to find a sustainable balance that secures the system without hindering productivity.",
          "visualPrompt": "A seesaw balancing a 'Security' block on one side and a 'Usability' block on the other, shown in equilibrium."
        }
      ],
      "flashcards": [
        {
          "id": "linux-301-l04-f1",
          "front": "Configuration drift",
          "back": "The gradual, often unauthorized, divergence of a system's configuration from its approved baseline over time."
        },
        {
          "id": "linux-301-l04-f2",
          "front": "Exception register",
          "back": "A formal log of approved deviations from a security policy, including the rationale, owner, and expiration date for each exception."
        },
        {
          "id": "linux-301-l04-f3",
          "front": "Principle of Least Privilege",
          "back": "The security concept of granting users and processes only the minimum permissions required to perform their function."
        }
      ],
      "learningAids": [
        {
          "id": "linux-301-l04-a1",
          "type": "image",
          "title": "Linux Security Baseline Checklist",
          "content": "A visual checklist covering key controls for patching, access management, network configuration, and auditing."
        }
      ]
    },
    {
      "id": "linux-301-l05",
      "title": "Incident Response and Controlled Change Lab",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "linux-301-l05-c1",
          "kind": "practice",
          "title": "Containment Decision Framework",
          "content": "During an incident, responders must balance the urgency to act with the risk of making things worse. A controlled change workflow—which assesses the blast radius, confirms dependencies, and prepares a rollback plan—allows teams to contain issues quickly and safely, minimizing the risk of a change-induced secondary outage.",
          "visualPrompt": "A decision tree flowchart for incident response: 'Is impact critical?' -> 'Is fix low-risk and reversible?' -> 'Apply & Monitor' vs. 'Escalate & Review'."
        },
        {
          "id": "linux-301-l05-c2",
          "kind": "recap",
          "title": "The Post-Incident Learning Loop",
          "content": "After service is restored, the work is not done. A blameless post-incident review is critical for identifying contributing factors, control gaps, and observability weaknesses. The goal is to produce measurable, owned action items that prevent recurrence and strengthen the system's resilience, turning every incident into a learning opportunity.",
          "visualPrompt": "A circular arrow diagram labeled 'Detect -> Respond -> Review -> Improve -> Detect' to illustrate the continuous learning cycle."
        }
      ],
      "interactiveActivities": [
        {
          "id": "linux-301-l05-act1",
          "type": "timeline_builder",
          "title": "Incident Response Timeline",
          "description": "Place key response actions in the correct operational order.",
          "data": {
            "initiatives": [
              "Declare incident scope and severity",
              "Collect baseline evidence",
              "Apply low-risk containment action",
              "Validate service recovery",
              "Publish prevention actions with owners"
            ]
          }
        },
        {
          "id": "linux-301-l05-act2",
          "type": "sorting_buckets",
          "title": "Change Risk Classification",
          "description": "Classify proposed changes by their risk profile.",
          "buckets": [
            "Safe to Apply Immediately",
            "Requires Peer Review",
            "High Risk / Freeze"
          ],
          "items": [
            {
              "text": "Restart one stateless worker with a known-good rollback version",
              "bucket": "Safe to Apply Immediately"
            },
            {
              "text": "Apply a kernel parameter change on all production hosts",
              "bucket": "High Risk / Freeze"
            },
            {
              "text": "Temporarily adjust an alert threshold to reduce noise",
              "bucket": "Requires Peer Review"
            },
            {
              "text": "Change a privileged access policy during an active outage",
              "bucket": "High Risk / Freeze"
            }
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "What criteria define a safe emergency change?",
          "How do you prevent recurring incidents after service restoration?",
          "Which incident artifact most improves future response speed?"
        ]
      },
      "learningAids": [
        {
          "id": "linux-301-l05-a1",
          "type": "practice",
          "title": "Incident Response Runbook Template",
          "content": "A structured template for documenting detection, triage, containment, recovery, and prevention steps for an incident."
        }
      ]
    },
    {
      "id": "linux-301-l06",
      "title": "Checkpoint 2: Security and Incident Engineering",
      "type": "quiz",
      "duration": 11,
      "questions": [
        {
          "id": "linux-301-l06-q1",
          "text": "Why should security policy exceptions be tracked with expiration dates?",
          "skillId": "linux-301-skill-security",
          "options": [
            {
              "id": "a",
              "text": "To ensure exceptions become permanent by default"
            },
            {
              "id": "b",
              "text": "To ensure temporary risk acceptance is periodically reviewed and justified"
            },
            {
              "id": "c",
              "text": "To avoid creating audit records"
            },
            {
              "id": "d",
              "text": "To permanently disable baseline security controls"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Time-bounded exceptions prevent 'temporary' risks from becoming hidden, long-term security exposures by forcing periodic re-evaluation."
        },
        {
          "id": "linux-301-l06-q2",
          "text": "What is the most useful output of a post-incident review?",
          "skillId": "linux-301-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "Only a timeline of events"
            },
            {
              "id": "b",
              "text": "Actionable prevention tasks with assigned owners and due dates"
            },
            {
              "id": "c",
              "text": "Unstructured chat logs from the incident channel"
            },
            {
              "id": "d",
              "text": "No written report to save time"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Assigning ownership and deadlines converts learning from the incident into measurable, concrete improvements to system resilience."
        },
        {
          "id": "linux-301-l06-q3",
          "text": "What is the primary risk of implementing a change without a rollback plan?",
          "skillId": "linux-301-skill-change",
          "options": [
            {
              "id": "a",
              "text": "It enables faster learning"
            },
            {
              "id": "b",
              "text": "It can significantly extend an outage if the change fails or has negative side effects"
            },
            {
              "id": "c",
              "text": "It lowers the documentation burden on the team"
            },
            {
              "id": "d",
              "text": "It leads to more deterministic system startup"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A rollback plan is a critical safety net that reduces the time-to-recover when an intervention does not behave as expected."
        },
        {
          "id": "linux-301-l06-q4",
          "text": "A secure Linux baseline should prioritize:",
          "skillId": "linux-301-skill-security",
          "options": [
            {
              "id": "a",
              "text": "Expanding the package footprint to include more tools"
            },
            {
              "id": "b",
              "text": "Minimal services, disciplined patching, and strict access controls"
            },
            {
              "id": "c",
              "text": "Using shared privileged accounts for easier access"
            },
            {
              "id": "d",
              "text": "Disabling logging to reduce storage costs"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reducing the attack surface (minimal services), maintaining currency (patching), and enforcing accountability (access controls) are foundational security principles."
        }
      ],
      "learningAids": [
        {
          "id": "linux-301-l06-a1",
          "type": "mnemonic",
          "title": "SHIELD",
          "content": "Scope, Harden, Investigate, Escalate, Learn, Document."
        }
      ]
    }
  ]
};
