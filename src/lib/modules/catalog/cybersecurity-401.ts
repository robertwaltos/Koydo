import type { LearningModule } from "@/lib/modules/types";

export const cybersecurity_401_Module: LearningModule = {
  "id": "cybersecurity-401",
  "title": "Cybersecurity Leadership",
  "description": "Senior-level governance, red-blue strategy, resilience planning, and security program leadership.",
  "subject": "Cybersecurity",
  "tags": [
    "curriculum",
    "interactive",
    "leadership",
    "governance",
    "infosec"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
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
    "Design and implement enterprise-level cybersecurity governance frameworks.",
    "Orchestrate Red, Blue, and Purple team operations to optimize threat detection and response.",
    "Develop comprehensive resilience, business continuity, and incident response plans.",
    "Communicate cyber risk effectively to executive boards and stakeholders."
  ],
  "lessons": [
    {
      "id": "cybersecurity-401-l01",
      "title": "Security Governance & Risk Management",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "A cinematic, high-contrast image of a modern corporate boardroom with holographic cybersecurity dashboards displaying global threat maps and risk metrics, photorealistic, 8k resolution, Imagen 4.",
      "conceptVideoPrompt": "A sleek, professional 3D animation showing a digital shield protecting a corporate network from glowing red cyber threats, transitioning to a high-level dashboard showing risk appetite metrics and compliance frameworks, 4k, smooth motion, Veo 3.1.",
      "learningAids": [
        {
          "id": "cybersecurity-401-l01-a1",
          "type": "image",
          "title": "Governance Frameworks",
          "content": "Visual summary comparing NIST CSF, ISO 27001, and CIS Controls."
        },
        {
          "id": "cybersecurity-401-l01-a2",
          "type": "animation",
          "title": "Risk Appetite Lifecycle",
          "content": "Animated flowchart showing how business objectives define risk appetite, which in turn dictates security controls."
        }
      ]
    },
    {
      "id": "cybersecurity-401-l02",
      "title": "Risk Assessment Scenario",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "A first-person view of a sleek executive desk with a tablet displaying a complex cyber risk matrix, soft dramatic lighting, photorealistic, 8k, Imagen 4.",
      "conceptVideoPrompt": "An interactive UI mockup animation where a user drags and drops various cyber threats onto a risk matrix based on likelihood and impact, modern corporate aesthetic, 4k, Veo 3.1.",
      "metadata": {
        "prompts": [
          "Identify the primary risk factor in the provided enterprise scenario.",
          "Propose a mitigating control that balances security with business operations.",
          "Explain how your proposed control aligns with the organization's stated risk appetite."
        ]
      },
      "learningAids": [
        {
          "id": "cybersecurity-401-l02-a1",
          "type": "practice",
          "title": "Executive Briefing Practice",
          "content": "Draft a 2-minute elevator pitch explaining the identified risk to the Board of Directors."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-401-l02.png"
    },
    {
      "id": "cybersecurity-401-l03",
      "title": "Checkpoint: Governance",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing digital lock icon resting on top of a stack of legal and compliance documents, dark moody background with blue neon accents, 8k, Imagen 4.",
      "conceptVideoPrompt": "A fast-paced motion graphics sequence highlighting key terms like 'Risk Appetite', 'Compliance', and 'NIST CSF' flying through a digital data tunnel, 4k, Veo 3.1.",
      "questions": [
        {
          "id": "cybersecurity-401-l03-q1",
          "text": "What is the primary purpose of establishing a 'Risk Appetite' within an organization?",
          "skillId": "cybersecurity-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "To define the amount of risk the organization is willing to accept in pursuit of its objectives."
            },
            {
              "id": "b",
              "text": "To eliminate all potential cyber threats from the network."
            },
            {
              "id": "c",
              "text": "To guarantee compliance with all international data privacy laws."
            },
            {
              "id": "d",
              "text": "To determine the exact budget for the IT department."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Risk appetite sets the boundary for acceptable risk, guiding decision-making and resource allocation rather than attempting to eliminate all risk."
        },
        {
          "id": "cybersecurity-401-l03-q2",
          "text": "When communicating cyber risk to the Board of Directors, which approach is most effective?",
          "skillId": "cybersecurity-401-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "Using highly technical jargon to demonstrate expertise."
            },
            {
              "id": "b",
              "text": "Translating cyber risks into business impacts, such as financial loss or reputational damage."
            },
            {
              "id": "c",
              "text": "Focusing solely on the number of malware blocked per month."
            },
            {
              "id": "d",
              "text": "Presenting raw vulnerability scan reports."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Boards are concerned with business outcomes. Translating technical metrics into business impact ensures alignment and secures necessary support."
        },
        {
          "id": "cybersecurity-401-l03-q3",
          "text": "Which framework is primarily focused on improving critical infrastructure cybersecurity through a core of Identify, Protect, Detect, Respond, and Recover?",
          "skillId": "cybersecurity-401-skill-frameworks",
          "options": [
            {
              "id": "a",
              "text": "NIST Cybersecurity Framework (CSF)"
            },
            {
              "id": "b",
              "text": "GDPR"
            },
            {
              "id": "c",
              "text": "PCI-DSS"
            },
            {
              "id": "d",
              "text": "OWASP Top 10"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The NIST CSF is built around the five core functions: Identify, Protect, Detect, Respond, and Recover."
        }
      ],
      "learningAids": [
        {
          "id": "cybersecurity-401-l03-a1",
          "type": "mnemonic",
          "title": "NIST Core Functions",
          "content": "I Protect Dogs, Rabbits, & Raccoons (Identify, Protect, Detect, Respond, Recover)."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-401-l03.png"
    },
    {
      "id": "cybersecurity-401-l04",
      "title": "Red-Blue Team Strategy",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "A split-screen cinematic image showing a hacker in a red-lit room on the left, and a cybersecurity analyst in a blue-lit Security Operations Center on the right, photorealistic, 8k, Imagen 4.",
      "conceptVideoPrompt": "An abstract 3D animation showing red data streams attacking a central node, while blue data streams intercept and neutralize them, eventually merging into a purple collaborative shield, 4k, Veo 3.1.",
      "learningAids": [
        {
          "id": "cybersecurity-401-l04-a1",
          "type": "image",
          "title": "The Purple Team Concept",
          "content": "Diagram illustrating how Red (Offense) and Blue (Defense) combine to form Purple (Continuous Improvement)."
        },
        {
          "id": "cybersecurity-401-l04-a2",
          "type": "animation",
          "title": "MITRE ATT&CK Mapping",
          "content": "Animation showing an adversary's lateral movement being mapped to specific MITRE ATT&CK tactics and techniques."
        }
      ]
    },
    {
      "id": "cybersecurity-401-l05",
      "title": "Purple Team Exercise",
      "type": "interactive",
      "duration": 18,
      "lessonImagePrompt": "A glowing purple holographic network map floating above a conference table, surrounded by diverse cybersecurity professionals collaborating, 8k resolution, Imagen 4.",
      "conceptVideoPrompt": "A dynamic point-of-view shot moving through a digital network, highlighting a simulated attack path in red, followed immediately by blue defensive walls rising, ending with a purple 'Exercise Complete' badge, 4k, Veo 3.1.",
      "metadata": {
        "prompts": [
          "Review the Red Team's simulated attack vector.",
          "Identify the specific gap in the Blue Team's detection logic.",
          "Formulate a Purple Team remediation strategy to close the gap."
        ]
      },
      "learningAids": [
        {
          "id": "cybersecurity-401-l05-a1",
          "type": "practice",
          "title": "Detection Engineering",
          "content": "Write a pseudo-SIEM rule to detect the lateral movement technique observed in the exercise."
        }
      ]
    },
    {
      "id": "cybersecurity-401-l06",
      "title": "Checkpoint: Strategy",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A stylized chessboard where red and blue glowing pieces are locked in a strategic battle, macro photography, depth of field, 8k, Imagen 4.",
      "conceptVideoPrompt": "A looping animation of a radar screen scanning for threats, alternating between red blips and blue sweeping lines, 4k, Veo 3.1.",
      "questions": [
        {
          "id": "cybersecurity-401-l06-q1",
          "text": "What is the primary goal of a Purple Team?",
          "skillId": "cybersecurity-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "To maximize collaboration between offensive and defensive teams to improve overall security posture."
            },
            {
              "id": "b",
              "text": "To replace the need for external penetration testing."
            },
            {
              "id": "c",
              "text": "To focus exclusively on writing malware for the organization."
            },
            {
              "id": "d",
              "text": "To audit the financial records of the IT department."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Purple teaming integrates the offensive tactics of the Red Team with the defensive capabilities of the Blue Team to continuously improve detection and response."
        },
        {
          "id": "cybersecurity-401-l06-q2",
          "text": "Which framework is most commonly used by Red and Blue teams to categorize adversary behavior?",
          "skillId": "cybersecurity-401-skill-frameworks",
          "options": [
            {
              "id": "a",
              "text": "MITRE ATT&CK"
            },
            {
              "id": "b",
              "text": "ITIL"
            },
            {
              "id": "c",
              "text": "Six Sigma"
            },
            {
              "id": "d",
              "text": "COBIT"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The MITRE ATT&CK framework is the industry standard for understanding and categorizing adversary tactics, techniques, and procedures (TTPs)."
        },
        {
          "id": "cybersecurity-401-l06-q3",
          "text": "In a Red Team engagement, what does 'Lateral Movement' refer to?",
          "skillId": "cybersecurity-401-skill-tactics",
          "options": [
            {
              "id": "a",
              "text": "An attacker moving through a network from one system to another to reach their objective."
            },
            {
              "id": "b",
              "text": "Upgrading the bandwidth of the corporate firewall."
            },
            {
              "id": "c",
              "text": "Transferring data from a local server to a cloud backup."
            },
            {
              "id": "d",
              "text": "The physical relocation of a data center."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Lateral movement is the technique attackers use to pivot from an initially compromised machine to other systems within the same network."
        }
      ],
      "learningAids": [
        {
          "id": "cybersecurity-401-l06-a1",
          "type": "mnemonic",
          "title": "Red vs Blue",
          "content": "Red Attacks, Blue Defends, Purple Collaborates."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-401-l06.png"
    },
    {
      "id": "cybersecurity-401-l07",
      "title": "Resilience & Incident Response",
      "type": "video",
      "duration": 15,
      "lessonImagePrompt": "A dramatic image of a server room with emergency red lights flashing, while a calm cybersecurity leader coordinates response efforts on a transparent tablet, 8k, Imagen 4.",
      "conceptVideoPrompt": "A timeline animation showing a cyber incident occurring, followed by rapid containment, eradication, and recovery phases, ending with a green 'System Restored' checkmark, 4k, Veo 3.1.",
      "learningAids": [
        {
          "id": "cybersecurity-401-l07-a1",
          "type": "image",
          "title": "Incident Response Lifecycle",
          "content": "Visual breakdown of Preparation, Detection & Analysis, Containment Eradication & Recovery, and Post-Incident Activity."
        },
        {
          "id": "cybersecurity-401-l07-a2",
          "type": "animation",
          "title": "RTO vs RPO",
          "content": "Animation explaining Recovery Time Objective (downtime) versus Recovery Point Objective (data loss)."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-401-l07.png"
    },
    {
      "id": "cybersecurity-401-l08",
      "title": "Tabletop Exercise: Ransomware",
      "type": "interactive",
      "duration": 20,
      "lessonImagePrompt": "A top-down view of a large conference table scattered with incident response playbooks, coffee cups, and a central screen displaying a simulated ransomware demand, photorealistic, 8k, Imagen 4.",
      "conceptVideoPrompt": "A fast-paced montage of a tabletop exercise: a clock ticking, executives discussing strategies, and digital nodes turning from infected red to isolated gray, 4k, Veo 3.1.",
      "metadata": {
        "prompts": [
          "Define the immediate containment step for the infected subnet.",
          "Determine the communication strategy for internal staff and external stakeholders.",
          "Outline the post-incident recovery priority based on business criticality."
        ]
      },
      "learningAids": [
        {
          "id": "cybersecurity-401-l08-a1",
          "type": "practice",
          "title": "Decision Matrix",
          "content": "Use the provided decision matrix to evaluate whether to pay the ransom or restore from backups."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-401-l08.png"
    },
    {
      "id": "cybersecurity-401-l09",
      "title": "Checkpoint: Resilience",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing green heartbeat monitor line transforming into a digital shield, symbolizing business continuity and resilience, dark background, 8k, Imagen 4.",
      "conceptVideoPrompt": "A 3D animation of a crumbling digital building instantly rebuilding itself from a glowing backup core, representing disaster recovery, 4k, Veo 3.1.",
      "questions": [
        {
          "id": "cybersecurity-401-l09-q1",
          "text": "In disaster recovery planning, what does RPO stand for?",
          "skillId": "cybersecurity-401-skill-resilience",
          "options": [
            {
              "id": "a",
              "text": "Recovery Point Objective"
            },
            {
              "id": "b",
              "text": "Restore Protocol Order"
            },
            {
              "id": "c",
              "text": "Risk Priority Outcome"
            },
            {
              "id": "d",
              "text": "Redundant Power Operation"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Recovery Point Objective (RPO) defines the maximum acceptable amount of data loss measured in time."
        },
        {
          "id": "cybersecurity-401-l09-q2",
          "text": "During a ransomware attack, what is the primary goal of the 'Containment' phase?",
          "skillId": "cybersecurity-401-skill-ir",
          "options": [
            {
              "id": "a",
              "text": "To prevent the ransomware from spreading to other systems or networks."
            },
            {
              "id": "b",
              "text": "To immediately delete all infected files."
            },
            {
              "id": "c",
              "text": "To negotiate with the threat actors."
            },
            {
              "id": "d",
              "text": "To write a post-incident report."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Containment aims to isolate the threat to prevent further damage or lateral movement across the network."
        },
        {
          "id": "cybersecurity-401-l09-q3",
          "text": "Why is the 'Post-Incident Activity' (Lessons Learned) phase critical?",
          "skillId": "cybersecurity-401-skill-ir",
          "options": [
            {
              "id": "a",
              "text": "It identifies gaps in the response process and improves future resilience."
            },
            {
              "id": "b",
              "text": "It is the phase where the ransom is officially paid."
            },
            {
              "id": "c",
              "text": "It is used solely to assign blame to specific employees."
            },
            {
              "id": "d",
              "text": "It initiates the legal prosecution of the attackers."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The lessons learned phase is essential for continuous improvement, allowing the organization to update playbooks and strengthen defenses based on real-world events."
        }
      ],
      "learningAids": [
        {
          "id": "cybersecurity-401-l09-a1",
          "type": "mnemonic",
          "title": "IR Phases",
          "content": "PICERL: Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-401-l09.png"
    },
    {
      "id": "cybersecurity-401-l10",
      "title": "Final Assessment: Cybersecurity Leadership",
      "type": "quiz",
      "duration": 15,
      "lessonImagePrompt": "A majestic, futuristic golden key unlocking a complex digital vault, symbolizing mastery of cybersecurity leadership, cinematic lighting, 8k, Imagen 4.",
      "conceptVideoPrompt": "A sweeping camera movement over a futuristic, highly secure smart city, with glowing forcefields representing perfect cyber governance and resilience, 4k, Veo 3.1.",
      "questions": [
        {
          "id": "cybersecurity-401-l10-q1",
          "text": "As a CISO, you discover a critical vulnerability in a legacy system that cannot be patched. What is the most appropriate leadership action?",
          "skillId": "cybersecurity-401-skill-leadership",
          "options": [
            {
              "id": "a",
              "text": "Implement compensating controls, document the risk, and present it to the risk committee."
            },
            {
              "id": "b",
              "text": "Ignore the vulnerability since the system is old."
            },
            {
              "id": "c",
              "text": "Immediately shut down the system without consulting business units."
            },
            {
              "id": "d",
              "text": "Resign from the position to avoid liability."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Effective leadership involves managing risk when elimination isn't possible. Compensating controls reduce the risk to an acceptable level while maintaining business operations."
        },
        {
          "id": "cybersecurity-401-l10-q2",
          "text": "How does a well-executed Purple Team exercise directly benefit executive leadership?",
          "skillId": "cybersecurity-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "It provides measurable ROI on security investments by proving detection capabilities against realistic threats."
            },
            {
              "id": "b",
              "text": "It guarantees that the organization will never be breached."
            },
            {
              "id": "c",
              "text": "It reduces the overall IT budget by eliminating the need for firewalls."
            },
            {
              "id": "d",
              "text": "It automatically generates compliance reports for external auditors."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Purple teaming validates defensive controls against known adversary behaviors, giving leadership empirical data on the effectiveness of their security spend."
        },
        {
          "id": "cybersecurity-401-l10-q3",
          "text": "Which of the following best describes the relationship between Business Continuity Planning (BCP) and Incident Response (IR)?",
          "skillId": "cybersecurity-401-skill-resilience",
          "options": [
            {
              "id": "a",
              "text": "IR focuses on mitigating the cyber threat, while BCP focuses on keeping critical business functions operational during the crisis."
            },
            {
              "id": "b",
              "text": "BCP is only used for natural disasters, while IR is only used for cyber attacks."
            },
            {
              "id": "c",
              "text": "They are identical processes with different names."
            },
            {
              "id": "d",
              "text": "IR is a subset of BCP that deals exclusively with public relations."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Incident Response handles the technical containment and eradication of the threat, whereas Business Continuity ensures the organization can still function while the incident is being resolved."
        }
      ],
      "learningAids": [
        {
          "id": "cybersecurity-401-l10-a1",
          "type": "mnemonic",
          "title": "Leadership Triad",
          "content": "Align with Business, Manage Risk, Ensure Resilience."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-401-l10.png"
    }
  ]
};
