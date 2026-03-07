import type { LearningModule } from "@/lib/modules/types";

export const macos_301_Module: LearningModule = {
  "id": "macos-301",
  "title": "macOS Fleet Management, Security, and Performance",
  "description": "Learn to manage, secure, and optimize large groups of macOS computers. This advanced course covers setting rules for devices, analyzing performance data, responding to security incidents, and making sure everything runs smoothly in a professional environment.",
  "subject": "Operating Systems",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "technology",
    "operating-systems",
    "macos",
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
    "Apply consistent rules and manage updates for many macOS devices at once.",
    "Use data from devices to find and fix performance and security problems.",
    "Create strong security settings for all devices and manage special exceptions with clear records.",
    "Identify and solve performance issues related to CPU, memory, storage, and applications.",
    "Develop a plan to handle security incidents, from stopping the threat to learning from the event.",
    "Clearly explain technical risks, fixes, and update plans to team members and leaders."
  ],
  "lessons": [
    {
      "id": "macos-301-l01",
      "title": "Fleet Policy Architecture and Management",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "macos-301-l01-c1",
          "kind": "concept",
          "title": "Managing with Policies",
          "content": "When managing many macOS devices, it's better to use a consistent set of rules, or policies, rather than handling each computer individually. These policies cover security settings, software updates, and device configurations. By enforcing these rules everywhere, we ensure every device is secure, up-to-date, and works reliably for everyone."
        },
        {
          "id": "macos-301-l01-c2",
          "kind": "concept",
          "title": "Controlling Change",
          "content": "To keep all our computers reliable, we need to control how they change. We use standardized settings and roll out updates in careful stages. We also keep a record of any special exceptions. This prevents devices from 'drifting' away from our standards, making the whole system more stable and predictable."
        },
        {
          "id": "macos-301-l01-c3",
          "kind": "recap",
          "title": "Regular Reviews and Updates",
          "content": "Effective teams regularly check how well devices are following the rules. For example, they might review compliance reports monthly and update security standards quarterly. This steady rhythm of review helps keep all devices secure and aligned with the latest best practices."
        }
      ],
      "flashcards": [
        {
          "id": "macos-301-l01-f1",
          "front": "What is 'fleet drift'?",
          "back": "When devices in a group slowly become different from the standard, approved configuration over time."
        },
        {
          "id": "macos-301-l01-f2",
          "front": "What is a 'policy ring'?",
          "back": "A small group of users or devices used to test new settings or updates before they are released to everyone."
        },
        {
          "id": "macos-301-l01-f3",
          "front": "What is an 'exception register'?",
          "back": "An official log of all approved deviations from the standard security rules, including who approved it and why."
        }
      ],
      "learningAids": [
        {
          "id": "macos-301-l01-a1",
          "type": "image",
          "title": "The Lifecycle of a Policy",
          "content": "A diagram showing how a central policy is created, tested on a small group (ring), rolled out to everyone, and continuously monitored for compliance and exceptions."
        }
      ]
    },
    {
      "id": "macos-301-l02",
      "title": "Using Device Data to Investigate Performance",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "macos-301-l02-c1",
          "kind": "concept",
          "title": "Connecting the Dots",
          "content": "To solve a problem on a computer, you need to look at clues from multiple sources, like system logs, performance data, and user reports. Relying on just one piece of information can be misleading. By combining different data points, you can find the true root cause of an issue and fix it correctly."
        },
        {
          "id": "macos-301-l02-c2",
          "kind": "practice",
          "title": "Investigating Performance Issues",
          "content": "When a computer is slow, don't just guess. Start by forming a clear idea (a hypothesis) of what might be wrong. Compare its current performance to a normal baseline. Test small, safe solutions first before making big changes. This careful approach fixes the problem without creating new ones."
        }
      ],
      "interactiveActivities": [
        {
          "id": "macos-301-l02-act1",
          "type": "matching_pairs",
          "title": "Symptom-to-Cause Match",
          "description": "Match a computer's symptom to its most likely cause.",
          "pairs": [
            {
              "left": "Sustained high memory usage",
              "right": "An application is using too many resources"
            },
            {
              "left": "Frequent delays when opening apps",
              "right": "Slow storage or background indexing"
            },
            {
              "left": "Overheating during normal use",
              "right": "High CPU usage or a cooling problem"
            },
            {
              "left": "Apps freezing when using the internet",
              "right": "Unstable network connection or DNS issues"
            }
          ]
        },
        {
          "id": "macos-301-l02-act2",
          "type": "scenario_practice",
          "title": "Investigating a Slowdown",
          "description": "You've been told computers in one office are running slow. Figure out how to investigate the problem without interrupting people's work.",
          "instructions": [
            "Pick one low-risk measurement action to start.",
            "Define one potential fix that is safe to test on a small group."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Why is comparing performance to a 'normal' baseline so important?",
          "Which performance numbers can be misleading without more context?",
          "How do you avoid making a big change based on a problem affecting only one or two computers?"
        ]
      },
      "learningAids": [
        {
          "id": "macos-301-l02-a1",
          "type": "practice",
          "title": "Problem-Solving Worksheet",
          "content": "A structured template to guide your investigation. It includes sections for a timeline of events, data you've collected, possible causes, and how you'll test your solution."
        }
      ]
    },
    {
      "id": "macos-301-l03",
      "title": "Checkpoint 1: Fleet and Performance Engineering",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "macos-301-l03-q1",
          "text": "Why should you roll out changes to small groups first?",
          "skillId": "macos-301-skill-fleet",
          "options": [
            {
              "id": "a",
              "text": "To make sure problems affect more people"
            },
            {
              "id": "b",
              "text": "To find and fix problems before they affect everyone"
            },
            {
              "id": "c",
              "text": "To avoid having to monitor the change"
            },
            {
              "id": "d",
              "text": "To make the process faster"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Testing changes on a small group first helps you find and fix problems before they affect everyone."
        },
        {
          "id": "macos-301-l03-q2",
          "text": "What is the most reliable first step when investigating a performance problem?",
          "skillId": "macos-301-skill-performance",
          "options": [
            {
              "id": "a",
              "text": "Apply a major configuration change immediately"
            },
            {
              "id": "b",
              "text": "Gather data and look for patterns in the symptoms"
            },
            {
              "id": "c",
              "text": "Disable all security tools"
            },
            {
              "id": "d",
              "text": "Reinstall the operating system on all affected devices"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Starting with data and observation prevents you from making disruptive changes that don't fix the real problem."
        },
        {
          "id": "macos-301-l03-q3",
          "text": "A good system for tracking exceptions to security rules should include:",
          "skillId": "macos-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "No owner and no expiration date"
            },
            {
              "id": "b",
              "text": "The owner, reason, scope, and an expiration date"
            },
            {
              "id": "c",
              "text": "Only the device serial numbers"
            },
            {
              "id": "d",
              "text": "Verbal approvals that are not written down"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A formal process for exceptions ensures that deviations from the rules are tracked, justified, and temporary, maintaining overall security."
        },
        {
          "id": "macos-301-l03-q4",
          "text": "What is the main risk of troubleshooting using only one piece of data?",
          "skillId": "macos-301-skill-performance",
          "options": [
            {
              "id": "a",
              "text": "It guarantees you will find the root cause faster"
            },
            {
              "id": "b",
              "text": "You might misdiagnose the problem because you lack full context"
            },
            {
              "id": "c",
              "text": "It costs less money"
            },
            {
              "id": "d",
              "text": "It improves the quality of your evidence"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Computer problems often have multiple causes. Looking at only one piece of data can lead you to the wrong conclusion."
        }
      ],
      "learningAids": [
        {
          "id": "macos-301-l03-a1",
          "type": "mnemonic",
          "title": "TRACE",
          "content": "A helpful acronym for investigations: Telemetry, Relationships, Assumptions, Changes, Evidence."
        }
      ]
    },
    {
      "id": "macos-301-l04",
      "title": "Creating Strong Security Baselines",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "macos-301-l04-c1",
          "kind": "concept",
          "title": "Components of a Security Baseline",
          "content": "A strong security 'baseline' is a standard set of protections applied to every computer. Key parts include: requiring disk encryption to protect data, allowing only approved software to run, configuring the firewall to block unwanted network traffic, and limiting who has administrative privileges. Together, these rules create a tough defense against common threats."
        },
        {
          "id": "macos-301-l04-c2",
          "kind": "concept",
          "title": "Proving Your Security",
          "content": "It's not enough to just have security rules; you must be able to prove they are working. This means keeping clear records of your security policies, reports showing that computers are compliant, and a log of any exceptions you've approved. Good records build trust and make security audits much smoother."
        },
        {
          "id": "macos-301-l04-c3",
          "kind": "recap",
          "title": "Balancing Security and Productivity",
          "content": "Security rules should protect the organization without preventing people from doing their jobs. If a security measure is too disruptive, users may find ways to bypass it, creating new risks. The goal is to find a balance that keeps the company safe while allowing everyone to be productive."
        }
      ],
      "flashcards": [
        {
          "id": "macos-301-l04-f1",
          "front": "What is 'baseline compliance'?",
          "back": "A measurement of how many devices in a group are correctly configured according to the standard security rules."
        },
        {
          "id": "macos-301-l04-f2",
          "front": "What is a 'security exception'?",
          "back": "A formally approved permission for a specific device or user to not follow a standard security rule, usually for a specific business reason."
        },
        {
          "id": "macos-301-l04-f3",
          "front": "What is 'audit evidence'?",
          "back": "The collection of logs, reports, and policy documents that prove your security controls are in place and working as intended."
        }
      ],
      "learningAids": [
        {
          "id": "macos-301-l04-a1",
          "type": "image",
          "title": "Connecting Security Rules to Proof",
          "content": "A visual chart showing how a security rule (like 'Enable Firewall') is connected to the data that proves it's working, the process for handling exceptions, and the schedule for reviewing its effectiveness."
        }
      ]
    },
    {
      "id": "macos-301-l05",
      "title": "Responding to Security Incidents",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "macos-301-l05-c1",
          "kind": "practice",
          "title": "Containing Threats vs. Impacting Users",
          "content": "When a security incident happens, your first job is to stop it from spreading. However, you must balance this with letting people continue to work. Start with small, low-impact actions to contain the threat. You can take more drastic steps if needed, but always consider how your actions will affect users."
        },
        {
          "id": "macos-301-l05-c2",
          "kind": "recap",
          "title": "Learning From Incidents",
          "content": "Every incident is a learning opportunity. After it's over, hold a review to understand what happened and why. The goal is to create a clear action plan with deadlines to fix the root cause. This process of learning and improving helps prevent the same problem from happening again."
        }
      ],
      "interactiveActivities": [
        {
          "id": "macos-301-l05-act1",
          "type": "timeline_builder",
          "title": "Incident Response Sequence",
          "description": "Put the steps of a security incident response in the correct order.",
          "data": {
            "initiatives": [
              "Confirm the scope of the incident and who is affected",
              "Apply low-impact actions to contain the threat",
              "Collect evidence for analysis",
              "Confirm that all systems are back to normal",
              "Publish a plan to prevent the incident from reoccurring"
            ]
          }
        },
        {
          "id": "macos-301-l05-act2",
          "type": "sorting_buckets",
          "title": "Sorting Changes by Risk",
          "description": "During an incident, you need to make changes. Sort these proposed actions into buckets based on how risky they are.",
          "buckets": [
            "Safe Immediate Action",
            "Needs Review",
            "High Risk"
          ],
          "items": [
            {
              "text": "Temporarily block the affected application",
              "bucket": "Needs Review"
            },
            {
              "text": "Rewrite a major configuration profile for all devices",
              "bucket": "High Risk"
            },
            {
              "text": "Restart a single background service on affected machines",
              "bucket": "Safe Immediate Action"
            },
            {
              "text": "Disable all endpoint security software",
              "bucket": "High Risk"
            }
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "What kind of changes during an incident should always require a second person's approval?",
          "How do you make sure that a temporary 'emergency fix' doesn't become permanent?",
          "What is the most important piece of information to document during an incident to help with future problems?"
        ]
      },
      "learningAids": [
        {
          "id": "macos-301-l05-a1",
          "type": "practice",
          "title": "Incident Response Plan",
          "content": "A fill-in-the-blank worksheet for managing a security incident. It includes sections for defining the severity, planning containment steps, gathering evidence, and outlining a communication plan."
        }
      ]
    },
    {
      "id": "macos-301-l06",
      "title": "Checkpoint 2: Security and Incident Leadership",
      "type": "quiz",
      "duration": 11,
      "questions": [
        {
          "id": "macos-301-l06-q1",
          "text": "Why is it important to have a formal process for security exceptions?",
          "skillId": "macos-301-skill-security",
          "options": [
            {
              "id": "a",
              "text": "To make security rules optional for everyone"
            },
            {
              "id": "b",
              "text": "To allow for flexibility while tracking and approving any risks"
            },
            {
              "id": "c",
              "text": "To avoid having anyone be responsible for security policies"
            },
            {
              "id": "d",
              "text": "To get rid of compliance requirements"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A formal exception process allows for necessary flexibility while ensuring that every deviation from the security baseline is tracked and approved."
        },
        {
          "id": "macos-301-l06-q2",
          "text": "What is the most valuable outcome of a post-incident review?",
          "skillId": "macos-301-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "A long transcript of the discussion"
            },
            {
              "id": "b",
              "text": "A list of corrective actions with owners and deadlines"
            },
            {
              "id": "c",
              "text": "No written follow-up"
            },
            {
              "id": "d",
              "text": "A list of suggestions with no priority"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A review is only useful if it leads to action. Assigning tasks to specific people with clear deadlines ensures that lessons learned are turned into real improvements."
        },
        {
          "id": "macos-301-l06-q3",
          "text": "What is the main purpose of rolling out policy changes in 'rings'?",
          "skillId": "macos-301-skill-fleet",
          "options": [
            {
              "id": "a",
              "text": "To deploy the change to everyone at the same time"
            },
            {
              "id": "b",
              "text": "To test the change on a small group and limit risk"
            },
            {
              "id": "c",
              "text": "To avoid the need for monitoring"
            },
            {
              "id": "d",
              "text": "To eliminate the need for a rollback plan"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Testing changes on small, controlled groups (rings) is the safest way to roll out updates, as it limits the impact of any unexpected problems."
        },
        {
          "id": "macos-301-l06-q4",
          "text": "During an incident, what makes a change easy to reverse?",
          "skillId": "macos-301-skill-change",
          "options": [
            {
              "id": "a",
              "text": "Not keeping a record of the original state"
            },
            {
              "id": "b",
              "text": "Having a clear rollback plan and knowing what 'fixed' looks like"
            },
            {
              "id": "c",
              "text": "Making changes on the fly without documentation"
            },
            {
              "id": "d",
              "text": "Editing configuration profiles directly without testing"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Knowing how to undo a change is just as important as making it. A clear rollback plan allows you to quickly reverse a fix that causes more problems."
        }
      ],
      "learningAids": [
        {
          "id": "macos-301-l06-a1",
          "type": "mnemonic",
          "title": "CLIP",
          "content": "A simple model for incident response: Contain, Log, Improve, Prevent."
        }
      ]
    }
  ]
};
