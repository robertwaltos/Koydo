import type { LearningModule } from "@/lib/modules/types";

export const cybersecurity_201_Module: LearningModule = {
  "id": "cybersecurity-201",
  "title": "Cybersecurity Operations",
  "description": "Intermediate defensive security operations, detection engineering, incident response, and risk workflows.",
  "subject": "Cybersecurity",
  "tags": [
    "curriculum",
    "interactive",
    "security",
    "soc",
    "incident-response"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en",
    "es",
    "fr",
    "de",
    "ar",
    "hi",
    "zh",
    "ja",
    "ko",
    "ru"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Understand core concepts in Detection Engineering and Incident Response.",
    "Apply threat hunting and risk assessment skills through guided practice.",
    "Demonstrate mastery of defensive security operations through checkpoint quizzes."
  ],
  "lessons": [
    {
      "id": "cybersecurity-201-l01",
      "title": "Introduction to Detection Engineering",
      "type": "video",
      "duration": 9,
      "lessonImagePrompt": "A high-tech security operations center (SOC) with glowing blue holographic screens showing network traffic graphs, cinematic lighting, photorealistic, 8k.",
      "conceptVideoPrompt": "A dynamic 3D animation zooming through a fiber optic cable into a glowing digital fortress, where a shield materializes to block red malicious data packets, sleek corporate tech style.",
      "learningAids": [
        {
          "id": "cybersecurity-201-l01-a1",
          "type": "image",
          "title": "The SIEM Ecosystem",
          "content": "Visual summary showing how logs from endpoints, networks, and cloud environments feed into a centralized SIEM for analysis."
        },
        {
          "id": "cybersecurity-201-l01-a2",
          "type": "animation",
          "title": "Anatomy of an Alert",
          "content": "Step-by-step walkthrough of how a raw log is parsed, matched against a detection rule, and triggered as an alert."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-201-l01.png"
    },
    {
      "id": "cybersecurity-201-l02",
      "title": "Building Your First Detection Rule",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "A close-up of a hacker's keyboard with a glowing green 'DETECT' key, dark moody lighting, cyberpunk aesthetic, highly detailed.",
      "conceptVideoPrompt": "Screen recording style animation showing a user typing a Sigma rule into a dark-themed terminal, with a green 'Rule Validated' popup appearing at the end.",
      "metadata": {
        "prompts": [
          "Identify the malicious indicator in the provided log.",
          "Write a basic detection logic using pseudo-code.",
          "Explain how you would tune this rule to reduce false positives."
        ]
      },
      "learningAids": [
        {
          "id": "cybersecurity-201-l02-a1",
          "type": "practice",
          "title": "Guided Rule Creation",
          "content": "Follow the challenge flow to extract an Indicator of Compromise (IoC) and draft a YARA or Sigma rule."
        }
      ]
    },
    {
      "id": "cybersecurity-201-l03",
      "title": "Checkpoint 1: Detection Engineering",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing digital padlock on a server rack, neon blue and purple lights, depth of field, 8k resolution.",
      "conceptVideoPrompt": "A fast-paced montage of security alerts being resolved on a futuristic dashboard, ending with a green checkmark.",
      "questions": [
        {
          "id": "cybersecurity-201-l03-q1",
          "text": "What is the primary purpose of a Security Information and Event Management (SIEM) system?",
          "skillId": "cybersecurity-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To centralize, aggregate, and analyze log data from across the network."
            },
            {
              "id": "b",
              "text": "To automatically patch vulnerable software on endpoints."
            },
            {
              "id": "c",
              "text": "To encrypt data at rest on company servers."
            },
            {
              "id": "d",
              "text": "To generate phishing emails for employee training."
            }
          ],
          "correctOptionId": "a",
          "explanation": "A SIEM collects and analyzes log data to provide real-time monitoring and threat detection."
        },
        {
          "id": "cybersecurity-201-l03-q2",
          "text": "Which of the following is a common, vendor-agnostic format for sharing detection rules?",
          "skillId": "cybersecurity-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Sigma"
            },
            {
              "id": "b",
              "text": "HTML"
            },
            {
              "id": "c",
              "text": "CSS"
            },
            {
              "id": "d",
              "text": "SQL"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Sigma is a generic, open signature format that allows you to describe relevant log events in a straightforward manner."
        },
        {
          "id": "cybersecurity-201-l03-q3",
          "text": "Why is tuning a detection rule a critical step in detection engineering?",
          "skillId": "cybersecurity-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "To reduce false positives and prevent alert fatigue for analysts."
            },
            {
              "id": "b",
              "text": "To make the rule run slower and consume less CPU."
            },
            {
              "id": "c",
              "text": "To ensure the rule catches every single network packet."
            },
            {
              "id": "d",
              "text": "To permanently delete benign logs from the system."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Tuning filters out normal, benign activity (false positives) so analysts can focus on genuine threats."
        }
      ],
      "learningAids": [
        {
          "id": "cybersecurity-201-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Remember the goal of Detection: Find the needle, ignore the haystack."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-201-l03.png"
    },
    {
      "id": "cybersecurity-201-l04",
      "title": "The Incident Response Lifecycle",
      "type": "video",
      "duration": 9,
      "lessonImagePrompt": "A team of diverse cybersecurity professionals looking intently at a large glowing tactical screen showing a global threat map, dramatic lighting.",
      "conceptVideoPrompt": "An animated flowchart showing the 6 phases of Incident Response (Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned) lighting up sequentially.",
      "learningAids": [
        {
          "id": "cybersecurity-201-l04-a1",
          "type": "image",
          "title": "PICERL Framework",
          "content": "Visual summary of the SANS Incident Response phases: Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned."
        },
        {
          "id": "cybersecurity-201-l04-a2",
          "type": "animation",
          "title": "Containment in Action",
          "content": "Animated example showing an infected endpoint being logically disconnected from the corporate network while maintaining a forensic connection."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-201-l04.png"
    },
    {
      "id": "cybersecurity-201-l05",
      "title": "Simulated Ransomware Outbreak",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "A red warning screen reflecting in the glasses of a focused cybersecurity analyst, intense atmosphere, photorealistic.",
      "conceptVideoPrompt": "A simulated network map where a red 'infection' spreads, but is quickly surrounded and isolated by a blue 'containment' barrier.",
      "metadata": {
        "prompts": [
          "Identify the compromised asset from the alert logs.",
          "Determine the immediate containment strategy.",
          "Draft a brief communication update for internal stakeholders."
        ]
      },
      "learningAids": [
        {
          "id": "cybersecurity-201-l05-a1",
          "type": "practice",
          "title": "IR Playbook Execution",
          "content": "Follow the challenge flow to triage the ransomware alert and execute the containment playbook."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-201-l05.png"
    },
    {
      "id": "cybersecurity-201-l06",
      "title": "Checkpoint 2: Incident Response",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A metallic shield with a digital pulse running through it, resting on a server motherboard, macro photography.",
      "conceptVideoPrompt": "A 3D animation of a digital vault locking its doors securely as red warning lights turn back to calm blue.",
      "questions": [
        {
          "id": "cybersecurity-201-l06-q1",
          "text": "What is the first phase of the standard Incident Response lifecycle?",
          "skillId": "cybersecurity-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Preparation"
            },
            {
              "id": "b",
              "text": "Identification"
            },
            {
              "id": "c",
              "text": "Containment"
            },
            {
              "id": "d",
              "text": "Recovery"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Preparation involves establishing policies, tools, and playbooks before an incident ever occurs."
        },
        {
          "id": "cybersecurity-201-l06-q2",
          "text": "During an active ransomware attack, what is the most critical immediate action?",
          "skillId": "cybersecurity-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Containment (Isolating the infected hosts)"
            },
            {
              "id": "b",
              "text": "Eradication (Deleting the malware)"
            },
            {
              "id": "c",
              "text": "Lessons Learned (Writing the post-incident report)"
            },
            {
              "id": "d",
              "text": "Recovery (Restoring from backups)"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Containment stops the spread of the ransomware to other systems, which is the highest priority during an active outbreak."
        },
        {
          "id": "cybersecurity-201-l06-q3",
          "text": "What is the primary purpose of the 'Lessons Learned' phase?",
          "skillId": "cybersecurity-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "To document what happened and improve future response capabilities."
            },
            {
              "id": "b",
              "text": "To assign blame to the employee who clicked the phishing link."
            },
            {
              "id": "c",
              "text": "To format the hard drives of all affected machines."
            },
            {
              "id": "d",
              "text": "To publicly disclose the breach to the media."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Lessons Learned (or Post-Incident Activity) is used to refine playbooks and strengthen defenses based on the incident."
        }
      ],
      "learningAids": [
        {
          "id": "cybersecurity-201-l06-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use PICERL: Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-201-l06.png"
    },
    {
      "id": "cybersecurity-201-l07",
      "title": "Proactive Threat Hunting",
      "type": "video",
      "duration": 9,
      "lessonImagePrompt": "A glowing digital magnifying glass hovering over a stream of binary code, searching for anomalies, dark background with neon accents.",
      "conceptVideoPrompt": "A visual metaphor of a radar sweeping across a dark digital landscape, revealing hidden stealthy threats in bright orange.",
      "learningAids": [
        {
          "id": "cybersecurity-201-l07-a1",
          "type": "image",
          "title": "IoCs vs IoAs",
          "content": "Visual comparison between Indicators of Compromise (static artifacts like IPs/Hashes) and Indicators of Attack (behaviors and tactics)."
        },
        {
          "id": "cybersecurity-201-l07-a2",
          "type": "animation",
          "title": "Hypothesis-Driven Hunting",
          "content": "Step-by-step walkthrough of forming a hypothesis, querying data, and uncovering a hidden persistence mechanism."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-201-l07.png"
    },
    {
      "id": "cybersecurity-201-l08",
      "title": "Hunting for Persistence Mechanisms",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "A futuristic compass pointing towards a glowing red anomaly in a sea of blue data points, 3D render, cinematic.",
      "conceptVideoPrompt": "An animation showing a normal Windows registry, then zooming in on a hidden, malicious autorun key that pulses red.",
      "metadata": {
        "prompts": [
          "Formulate a hunting hypothesis based on recent threat intel.",
          "Query the endpoint data for registry anomalies.",
          "Analyze the results to confirm malicious intent."
        ]
      },
      "learningAids": [
        {
          "id": "cybersecurity-201-l08-a1",
          "type": "practice",
          "title": "Guided Threat Hunt",
          "content": "Follow the challenge flow to search for unauthorized scheduled tasks or registry run keys."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-201-l08.png"
    },
    {
      "id": "cybersecurity-201-l09",
      "title": "Checkpoint 3: Threat Hunting",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A stylized owl made of glowing digital lines, representing vigilance and hunting in the dark, cyberpunk style.",
      "conceptVideoPrompt": "A fast-paced sequence showing data being filtered through a glowing funnel, leaving only a few suspicious red blocks at the bottom.",
      "questions": [
        {
          "id": "cybersecurity-201-l09-q1",
          "text": "How does threat hunting fundamentally differ from standard detection?",
          "skillId": "cybersecurity-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It is proactive and assumes a breach has already occurred."
            },
            {
              "id": "b",
              "text": "It relies entirely on automated alerts from the SIEM."
            },
            {
              "id": "c",
              "text": "It is only performed after an incident has been fully resolved."
            },
            {
              "id": "d",
              "text": "It focuses solely on external perimeter firewalls."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Threat hunting is a proactive, human-driven exercise that looks for threats that have bypassed automated security controls."
        },
        {
          "id": "cybersecurity-201-l09-q2",
          "text": "What is an Indicator of Attack (IoA)?",
          "skillId": "cybersecurity-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Evidence of the intent and strategy of an attacker, focusing on behavior."
            },
            {
              "id": "b",
              "text": "A static file hash of known malware."
            },
            {
              "id": "c",
              "text": "A specific IP address used by a botnet."
            },
            {
              "id": "d",
              "text": "A compromised user password."
            }
          ],
          "correctOptionId": "a",
          "explanation": "IoAs focus on the 'why' and 'how' of an attack (behaviors), whereas IoCs focus on the 'what' (static artifacts)."
        },
        {
          "id": "cybersecurity-201-l09-q3",
          "text": "Which framework is most commonly used by threat hunters to map adversary tactics and techniques?",
          "skillId": "cybersecurity-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "MITRE ATT&CK"
            },
            {
              "id": "b",
              "text": "OWASP Top 10"
            },
            {
              "id": "c",
              "text": "ISO 27001"
            },
            {
              "id": "d",
              "text": "PCI-DSS"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The MITRE ATT&CK framework is the industry standard for understanding and mapping adversary behaviors, tactics, and techniques."
        }
      ],
      "learningAids": [
        {
          "id": "cybersecurity-201-l09-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Hunting is Proactive. Detection is Reactive."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-201-l09.png"
    },
    {
      "id": "cybersecurity-201-l10",
      "title": "Capstone: Cybersecurity Operations",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A grand, futuristic digital badge or trophy with a glowing lock icon, symbolizing mastery of cybersecurity operations, 8k, highly detailed.",
      "conceptVideoPrompt": "A sweeping 3D camera move over a fully secured, glowing digital city, representing a well-defended network, ending with a 'Module Complete' banner.",
      "questions": [
        {
          "id": "cybersecurity-201-l10-q1",
          "text": "In a Security Operations Center (SOC), what is the primary role of a Tier 1 Analyst?",
          "skillId": "cybersecurity-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To triage incoming alerts, filter out false positives, and escalate genuine threats."
            },
            {
              "id": "b",
              "text": "To reverse-engineer advanced malware samples."
            },
            {
              "id": "c",
              "text": "To manage the organization's overall cybersecurity budget."
            },
            {
              "id": "d",
              "text": "To physically secure the server room."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Tier 1 analysts are the first line of defense, responsible for initial triage and escalation of alerts."
        },
        {
          "id": "cybersecurity-201-l10-q2",
          "text": "You discover a new, undocumented malware variant. What is the best way to share its signature with the community?",
          "skillId": "cybersecurity-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Create and distribute a YARA rule."
            },
            {
              "id": "b",
              "text": "Post the raw malware code on social media."
            },
            {
              "id": "c",
              "text": "Email the malware executable to other companies."
            },
            {
              "id": "d",
              "text": "Keep it a secret to maintain a competitive advantage."
            }
          ],
          "correctOptionId": "a",
          "explanation": "YARA rules are the standard way to describe and share patterns that identify malware families."
        },
        {
          "id": "cybersecurity-201-l10-q3",
          "text": "Why is risk assessment crucial before implementing security controls?",
          "skillId": "cybersecurity-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "To ensure resources are allocated to the most critical vulnerabilities and assets."
            },
            {
              "id": "b",
              "text": "To guarantee that the organization will never be breached."
            },
            {
              "id": "c",
              "text": "To bypass compliance and regulatory requirements."
            },
            {
              "id": "d",
              "text": "To slow down business operations intentionally."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Risk assessments help prioritize security efforts, ensuring that time and money are spent protecting what matters most."
        }
      ],
      "learningAids": [
        {
          "id": "cybersecurity-201-l10-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Triage, Investigate, Respond, Recover. The core loop of Cyber Ops."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-201-l10.png"
    }
  ]
};
