import type { LearningModule } from "@/lib/modules/types";

export const cybersecurity_301_Module: LearningModule = {
  "id": "cybersecurity-301",
  "title": "Cybersecurity Engineering",
  "description": "Advanced security architecture, threat modeling, secure systems design, and enterprise hardening.",
  "subject": "Cybersecurity",
  "tags": [
    "curriculum",
    "interactive",
    "security",
    "architecture"
  ],
  "minAge": 16,
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
    "Design secure enterprise architectures using defense-in-depth principles.",
    "Apply threat modeling methodologies like STRIDE to identify vulnerabilities.",
    "Implement cryptographic controls and system hardening techniques."
  ],
  "lessons": [
    {
      "id": "cybersecurity-301-l01",
      "title": "Security Architecture & Threat Modeling",
      "type": "video",
      "duration": 9,
      "lessonImagePrompt": "A high-tech blueprint of a digital fortress with glowing blue and green nodes, representing enterprise security architecture, modern cyber aesthetic, 4k resolution.",
      "conceptVideoPrompt": "A dynamic 3D animation showing a hacker's red data stream being blocked by a glowing blue shield over a server rack, transitioning into a structured threat model diagram.",
      "learningAids": [
        {
          "id": "cybersecurity-301-l01-a1",
          "type": "image",
          "title": "The STRIDE Methodology",
          "content": "Visual summary of STRIDE: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege."
        },
        {
          "id": "cybersecurity-301-l01-a2",
          "type": "animation",
          "title": "Data Flow Diagram (DFD)",
          "content": "Step-by-step walkthrough of mapping trust boundaries and data flows to identify potential attack vectors."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-301-l01.png"
    },
    {
      "id": "cybersecurity-301-l02",
      "title": "Threat Modeling Practice",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "A sleek interactive dashboard showing a network diagram with interactive nodes highlighting potential vulnerabilities in red, modern UI design.",
      "conceptVideoPrompt": "A first-person view of a cybersecurity engineer dragging and dropping security controls onto a virtual network map to mitigate spoofing and tampering threats.",
      "metadata": {
        "prompts": [
          "Identify the primary threat using the STRIDE model.",
          "Propose a specific mitigation strategy for the identified threat.",
          "Evaluate the residual risk after mitigation."
        ]
      },
      "learningAids": [
        {
          "id": "cybersecurity-301-l02-a1",
          "type": "practice",
          "title": "Guided Threat Analysis",
          "content": "Analyze the provided e-commerce architecture and document potential elevation of privilege vulnerabilities."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-301-l02.png"
    },
    {
      "id": "cybersecurity-301-l03",
      "title": "Checkpoint 1: Architecture & Threats",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A futuristic digital lock with a glowing checkmark, symbolizing a successful security checkpoint, dark background with neon accents.",
      "conceptVideoPrompt": "A fast-paced montage of security alerts being resolved on a command center screen, ending with a 'System Secure' notification.",
      "questions": [
        {
          "id": "cybersecurity-301-l03-q1",
          "text": "In the STRIDE threat modeling methodology, what does the 'S' stand for?",
          "skillId": "cybersecurity-301-skill-threat-modeling",
          "options": [
            {
              "id": "a",
              "text": "Spoofing"
            },
            {
              "id": "b",
              "text": "Sniffing"
            },
            {
              "id": "c",
              "text": "Spamming"
            },
            {
              "id": "d",
              "text": "Snooping"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Spoofing involves an attacker pretending to be someone or something else to gain unauthorized access."
        },
        {
          "id": "cybersecurity-301-l03-q2",
          "text": "What is the primary purpose of establishing a 'Trust Boundary' in a Data Flow Diagram?",
          "skillId": "cybersecurity-301-skill-architecture",
          "options": [
            {
              "id": "a",
              "text": "To identify where data changes its level of trust or privilege."
            },
            {
              "id": "b",
              "text": "To encrypt all data within the boundary."
            },
            {
              "id": "c",
              "text": "To prevent internal employees from accessing the internet."
            },
            {
              "id": "d",
              "text": "To measure the speed of data transmission."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Trust boundaries highlight areas where data moves between domains with different privilege levels, which are prime targets for attackers."
        },
        {
          "id": "cybersecurity-301-l03-q3",
          "text": "Which principle dictates that a user should only have the minimum access necessary to perform their job?",
          "skillId": "cybersecurity-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Principle of Least Privilege"
            },
            {
              "id": "b",
              "text": "Defense in Depth"
            },
            {
              "id": "c",
              "text": "Separation of Duties"
            },
            {
              "id": "d",
              "text": "Security through Obscurity"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Principle of Least Privilege limits access rights for users to the bare minimum permissions they need to perform their work."
        }
      ],
      "learningAids": [
        {
          "id": "cybersecurity-301-l03-a1",
          "type": "mnemonic",
          "title": "STRIDE Memory Cue",
          "content": "Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-301-l03.png"
    },
    {
      "id": "cybersecurity-301-l04",
      "title": "Secure Systems Design & Access Control",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "A visual representation of identity and access management, showing a glowing ID card unlocking specific data tiers while keeping others locked.",
      "conceptVideoPrompt": "An animation demonstrating the Principle of Least Privilege: a user attempts to access a restricted database and is denied, while an admin is granted access.",
      "metadata": {
        "prompts": [
          "Define the access requirements for the given user role.",
          "Apply the Principle of Least Privilege to the system configuration.",
          "Review and audit the access control list (ACL)."
        ]
      },
      "learningAids": [
        {
          "id": "cybersecurity-301-l04-a1",
          "type": "practice",
          "title": "Role-Based Access Control (RBAC) Configuration",
          "content": "Configure the permissions matrix for a healthcare application ensuring HIPAA compliance."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-301-l04.png"
    },
    {
      "id": "cybersecurity-301-l05",
      "title": "Enterprise Hardening & Network Defense",
      "type": "video",
      "duration": 9,
      "lessonImagePrompt": "A massive server farm encased in a glowing, impenetrable energy shield, representing enterprise hardening and defense-in-depth.",
      "conceptVideoPrompt": "A visual journey through a corporate network, showing firewalls, intrusion detection systems, and endpoint security activating in sequence to stop a malware payload.",
      "learningAids": [
        {
          "id": "cybersecurity-301-l05-a1",
          "type": "image",
          "title": "Defense in Depth Architecture",
          "content": "Visual diagram showing physical, network, host, application, and data security layers."
        },
        {
          "id": "cybersecurity-301-l05-a2",
          "type": "animation",
          "title": "OS Hardening Process",
          "content": "Animated checklist showing the disabling of unnecessary services, applying patches, and configuring firewalls."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-301-l05.png"
    },
    {
      "id": "cybersecurity-301-l06",
      "title": "Checkpoint 2: Design & Hardening",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A stylized shield icon with multiple layers peeling back, representing defense-in-depth strategy, clean vector art style.",
      "conceptVideoPrompt": "A quick loop of a server rack being reinforced with digital armor plating, symbolizing system hardening.",
      "questions": [
        {
          "id": "cybersecurity-301-l06-q1",
          "text": "What is the core concept behind 'Defense in Depth'?",
          "skillId": "cybersecurity-301-skill-architecture",
          "options": [
            {
              "id": "a",
              "text": "Using multiple layers of security controls to protect assets."
            },
            {
              "id": "b",
              "text": "Relying on a single, highly advanced firewall."
            },
            {
              "id": "c",
              "text": "Hiding system architecture details from the public."
            },
            {
              "id": "d",
              "text": "Encrypting all data at rest."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Defense in Depth uses multiple, redundant defensive measures so that if one layer fails, others still provide protection."
        },
        {
          "id": "cybersecurity-301-l06-q2",
          "text": "Which of the following is a fundamental step in operating system hardening?",
          "skillId": "cybersecurity-301-skill-hardening",
          "options": [
            {
              "id": "a",
              "text": "Disabling unnecessary ports and services."
            },
            {
              "id": "b",
              "text": "Installing multiple antivirus programs."
            },
            {
              "id": "c",
              "text": "Enabling guest accounts for easier access."
            },
            {
              "id": "d",
              "text": "Using default administrative passwords."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Disabling unnecessary ports and services reduces the attack surface of the operating system."
        },
        {
          "id": "cybersecurity-301-l06-q3",
          "text": "What is the purpose of a Demilitarized Zone (DMZ) in network architecture?",
          "skillId": "cybersecurity-301-skill-network",
          "options": [
            {
              "id": "a",
              "text": "To isolate public-facing services from the internal local area network."
            },
            {
              "id": "b",
              "text": "To store highly classified internal documents."
            },
            {
              "id": "c",
              "text": "To bypass firewall rules for faster internet speeds."
            },
            {
              "id": "d",
              "text": "To act as a honeypot for catching hackers."
            }
          ],
          "correctOptionId": "a",
          "explanation": "A DMZ adds an extra layer of security by separating public-facing servers (like web servers) from the secure internal network."
        }
      ],
      "learningAids": [
        {
          "id": "cybersecurity-301-l06-a1",
          "type": "mnemonic",
          "title": "Hardening Basics",
          "content": "Patch, Disable, Restrict, Monitor."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-301-l06.png"
    },
    {
      "id": "cybersecurity-301-l07",
      "title": "Cryptography in Enterprise Architecture",
      "type": "video",
      "duration": 9,
      "lessonImagePrompt": "A glowing padlock made of binary code floating above a microchip, representing modern cryptographic algorithms.",
      "conceptVideoPrompt": "An animation showing plain text turning into scrambled ciphertext as it travels across a network, then decrypting safely at the destination.",
      "learningAids": [
        {
          "id": "cybersecurity-301-l07-a1",
          "type": "image",
          "title": "Symmetric vs. Asymmetric Encryption",
          "content": "Visual comparison of single-key (symmetric) and public/private key pair (asymmetric) encryption workflows."
        },
        {
          "id": "cybersecurity-301-l07-a2",
          "type": "animation",
          "title": "Digital Signatures",
          "content": "Step-by-step animation showing how a hash is encrypted with a private key to ensure non-repudiation."
        }
      ]
    },
    {
      "id": "cybersecurity-301-l08",
      "title": "Applying Cryptographic Controls",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "An interactive puzzle interface where users match encryption keys to data streams, sleek dark mode UI.",
      "conceptVideoPrompt": "A simulation of a man-in-the-middle attack failing because the data stream is protected by TLS 1.3 encryption.",
      "metadata": {
        "prompts": [
          "Select the appropriate encryption standard for data at rest.",
          "Manage the cryptographic keys securely.",
          "Verify data integrity using cryptographic hashes."
        ]
      },
      "learningAids": [
        {
          "id": "cybersecurity-301-l08-a1",
          "type": "practice",
          "title": "TLS Configuration",
          "content": "Select the correct cipher suites to establish a secure TLS 1.3 connection for a web server."
        }
      ]
    },
    {
      "id": "cybersecurity-301-l09",
      "title": "Checkpoint 3: Cryptography",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A digital vault door with a complex cryptographic dial, glowing in neon purple and blue.",
      "conceptVideoPrompt": "A rapid sequence showing a hash function generating a unique fingerprint for a digital document.",
      "questions": [
        {
          "id": "cybersecurity-301-l09-q1",
          "text": "Which algorithm is currently the industry standard for symmetric encryption?",
          "skillId": "cybersecurity-301-skill-crypto",
          "options": [
            {
              "id": "a",
              "text": "Advanced Encryption Standard (AES)"
            },
            {
              "id": "b",
              "text": "Data Encryption Standard (DES)"
            },
            {
              "id": "c",
              "text": "Rivest-Shamir-Adleman (RSA)"
            },
            {
              "id": "d",
              "text": "Secure Hash Algorithm (SHA-256)"
            }
          ],
          "correctOptionId": "a",
          "explanation": "AES is the widely accepted standard for symmetric encryption due to its speed and security."
        },
        {
          "id": "cybersecurity-301-l09-q2",
          "text": "What is the primary use of a cryptographic hash function?",
          "skillId": "cybersecurity-301-skill-crypto",
          "options": [
            {
              "id": "a",
              "text": "Ensuring data integrity by creating a unique digital fingerprint."
            },
            {
              "id": "b",
              "text": "Encrypting large databases for long-term storage."
            },
            {
              "id": "c",
              "text": "Securely exchanging symmetric keys over an insecure network."
            },
            {
              "id": "d",
              "text": "Hiding the IP address of a user."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Hash functions generate a fixed-size string from data. If the data changes, the hash changes, proving the data's integrity was compromised."
        },
        {
          "id": "cybersecurity-301-l09-q3",
          "text": "In Public Key Infrastructure (PKI), what is the role of the private key?",
          "skillId": "cybersecurity-301-skill-crypto",
          "options": [
            {
              "id": "a",
              "text": "Decrypting data sent to the owner and signing digital signatures."
            },
            {
              "id": "b",
              "text": "Encrypting data so anyone can read it."
            },
            {
              "id": "c",
              "text": "Verifying the identity of a Certificate Authority."
            },
            {
              "id": "d",
              "text": "Distributing symmetric keys to the public."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The private key is kept secret by the owner and is used to decrypt messages encrypted with their public key, or to create digital signatures."
        }
      ],
      "learningAids": [
        {
          "id": "cybersecurity-301-l09-a1",
          "type": "mnemonic",
          "title": "CIA Triad & Crypto",
          "content": "Confidentiality (Encryption), Integrity (Hashing), Availability."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-301-l09.png"
    },
    {
      "id": "cybersecurity-301-l10",
      "title": "Final Assessment: Cybersecurity Engineering",
      "type": "quiz",
      "duration": 15,
      "lessonImagePrompt": "A grand, futuristic command center with holographic displays showing a fully secured global network, representing mastery of cybersecurity engineering.",
      "conceptVideoPrompt": "A cinematic fly-through of a secure data center, highlighting all the layered defenses learned in the module, ending with a 'Mastery Achieved' badge.",
      "questions": [
        {
          "id": "cybersecurity-301-l10-q1",
          "text": "When designing a modern secure architecture, which concept assumes that the network is already compromised and verifies every request?",
          "skillId": "cybersecurity-301-skill-architecture",
          "options": [
            {
              "id": "a",
              "text": "Zero Trust Architecture"
            },
            {
              "id": "b",
              "text": "Perimeter Defense"
            },
            {
              "id": "c",
              "text": "Security through Obscurity"
            },
            {
              "id": "d",
              "text": "Open Systems Interconnection"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Zero Trust assumes no implicit trust is granted to assets or user accounts based solely on their physical or network location."
        },
        {
          "id": "cybersecurity-301-l10-q2",
          "text": "How does a Web Application Firewall (WAF) differ from a traditional network firewall?",
          "skillId": "cybersecurity-301-skill-network",
          "options": [
            {
              "id": "a",
              "text": "A WAF operates at Layer 7 to inspect HTTP/HTTPS traffic for web-specific attacks."
            },
            {
              "id": "b",
              "text": "A WAF only blocks traffic based on IP addresses and ports."
            },
            {
              "id": "c",
              "text": "A WAF is used exclusively for encrypting data at rest."
            },
            {
              "id": "d",
              "text": "A WAF replaces the need for antivirus software on endpoints."
            }
          ],
          "correctOptionId": "a",
          "explanation": "WAFs specifically analyze web traffic (Layer 7) to block attacks like SQL injection and Cross-Site Scripting (XSS)."
        },
        {
          "id": "cybersecurity-301-l10-q3",
          "text": "What is the most effective way to protect sensitive data at rest on a corporate laptop that might be stolen?",
          "skillId": "cybersecurity-301-skill-hardening",
          "options": [
            {
              "id": "a",
              "text": "Full Disk Encryption (FDE)"
            },
            {
              "id": "b",
              "text": "A strong BIOS password"
            },
            {
              "id": "c",
              "text": "Hiding the files in hidden folders"
            },
            {
              "id": "d",
              "text": "Using a complex Windows login password"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Full Disk Encryption ensures that even if the physical drive is removed from the laptop, the data remains unreadable without the decryption key."
        }
      ],
      "learningAids": [
        {
          "id": "cybersecurity-301-l10-a1",
          "type": "mnemonic",
          "title": "Engineering Mindset",
          "content": "Think like an attacker, design like an engineer."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-301-l10.png"
    }
  ]
};
