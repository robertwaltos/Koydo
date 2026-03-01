import type { LearningModule } from "@/lib/modules/types";

export const Cybersecurity101Module: LearningModule = {
  "id": "cybersecurity-101",
  "title": "Cybersecurity Fundamentals",
  "description": "Master the essential principles of cybersecurity — from the CIA Triad and threat landscape to cryptography, network defense, social engineering, and incident response. Build the foundational skills every digital citizen and aspiring security professional needs.",
  "subject": "Cybersecurity",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "infosec",
    "technology",
    "enriched-from-epub"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Explain the CIA Triad and apply it to real-world security decisions",
    "Implement strong authentication, MFA, and role-based access control",
    "Describe network defense mechanisms including firewalls, VPNs, and IDS/IPS",
    "Compare symmetric, asymmetric, and hashing cryptographic techniques",
    "Identify social engineering tactics, phishing campaigns, and malware families",
    "Analyse elicitation, pretexting, and psychological influence techniques used in social engineering attacks",
    "Apply Cialdini's six principles of influence to recognise and defend against manipulation",
    "Outline the NIST incident response lifecycle and SIEM-driven security operations",
    "Apply defense-in-depth and zero-trust principles to protect organizational assets"
  ],
  "lessons": [
    {
      "id": "cybersecurity-101-l01",
      "title": "The CIA Triad & Modern Threat Landscape",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define Confidentiality, Integrity, and Availability and give an example of each",
        "Categorize common threat actors and their motivations",
        "Explain defense-in-depth and the zero-trust security model"
      ],
      "chunks": [
        {
          "id": "cybersecurity-101-l01-c1",
          "title": "Confidentiality, Integrity, Availability",
          "content": "The CIA Triad is the bedrock of every security decision. Confidentiality ensures only authorized parties can access sensitive data — enforced through encryption (AES-256 for data at rest, TLS for data in transit), access controls, and data classification (Public, Internal, Confidential, Top Secret). Integrity guarantees that data has not been tampered with — protected by cryptographic hashing (SHA-256), digital signatures, and version control. Availability means systems remain accessible when needed — safeguarded by redundancy, load balancing, backups, and DDoS mitigation. Every security control maps back to at least one pillar: a firewall rule protects confidentiality, a checksum verifies integrity, and a disaster-recovery site preserves availability."
        },
        {
          "id": "cybersecurity-101-l01-c2",
          "title": "Threat Actors & Attack Vectors",
          "content": "Threat actors range from script kiddies using pre-built tools, to organized cybercrime syndicates running Ransomware-as-a-Service (RaaS), to Advanced Persistent Threats (APTs) sponsored by nation-states. Hacktivists pursue ideological goals, while insider threats — disgruntled employees or careless contractors — account for roughly 25 % of breaches. Attack vectors are the pathways used: phishing emails, unpatched software (CVEs), misconfigured cloud storage, stolen credentials, and supply-chain compromises (e.g., the SolarWinds attack that planted malicious code in a trusted update). The MITRE ATT&CK framework catalogs adversary tactics from initial access through impact, giving defenders a shared vocabulary."
        },
        {
          "id": "cybersecurity-101-l01-c3",
          "title": "Defense in Depth & Zero Trust",
          "content": "Defense in depth layers multiple, overlapping controls so that if one fails, others still protect the asset — like a castle with a moat, walls, guards, and a locked vault. Layers include perimeter firewalls, network segmentation, endpoint detection, application security, data encryption, and user awareness training. Zero trust extends this philosophy: 'never trust, always verify.' Every request — even from inside the corporate network — must be authenticated, authorized, and continuously validated. The NIST Cybersecurity Framework (Identify, Protect, Detect, Respond, Recover) provides an industry-standard roadmap for building a resilient security posture."
        }
      ],
      "flashcards": [
        {
          "id": "cybersecurity-101-l01-f1",
          "front": "CIA Triad",
          "back": "Confidentiality (only authorized access), Integrity (data unaltered), Availability (systems accessible when needed) — the foundation of cybersecurity"
        },
        {
          "id": "cybersecurity-101-l01-f2",
          "front": "Advanced Persistent Threat (APT)",
          "back": "A sophisticated, often state-sponsored adversary that maintains long-term unauthorized access to a network to steal data or disrupt operations"
        },
        {
          "id": "cybersecurity-101-l01-f3",
          "front": "Defense in depth",
          "back": "Layering multiple security controls (firewalls, encryption, segmentation, training) so failure of one does not compromise the whole system"
        },
        {
          "id": "cybersecurity-101-l01-f4",
          "front": "Zero-trust principle",
          "back": "'Never trust, always verify' — every request must be authenticated and authorized regardless of network location"
        },
        {
          "id": "cybersecurity-101-l01-f5",
          "front": "Why social engineering bypasses technical security",
          "back": "It targets people, not systems. Firewalls, encryption, and patch management are irrelevant if an authorised user can be manipulated into revealing credentials, clicking malicious links, or granting physical access."
        },
        {
          "id": "cybersecurity-101-l01-f6",
          "front": "Cognitive shortcuts exploited by social engineers",
          "back": "Heuristics — rapid judgements based on limited signals (authority, social proof, urgency). Attackers stack multiple psychological cues so every shortcut points toward 'this person is legitimate.'"
        }
      ],
      "learningAids": [
        {
          "id": "cybersecurity-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "cybersecurity-101-l02",
      "title": "Authentication, Access Control & Password Security",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Compare the three authentication factors and explain multi-factor authentication",
        "Distinguish RBAC, MAC, and DAC access-control models",
        "Apply password-security best practices including passphrases and credential managers"
      ],
      "chunks": [
        {
          "id": "cybersecurity-101-l02-c1",
          "title": "Authentication Factors & MFA",
          "content": "Authentication proves identity using one or more factors: Something you Know (password, PIN), Something you Have (hardware security key, TOTP authenticator app, smart card), or Something you Are (fingerprint, facial recognition, iris scan). Multi-Factor Authentication (MFA) combines at least two distinct factor types. A password plus an authenticator-app code is MFA; two passwords is not, because both are 'know' factors. Microsoft reports MFA blocks 99.9 % of automated credential-stuffing attacks. FIDO2 security keys offer phishing-resistant MFA because the cryptographic challenge is bound to the legitimate domain — a fake website cannot intercept the handshake."
        },
        {
          "id": "cybersecurity-101-l02-c2",
          "title": "Access Control Models",
          "content": "After authentication confirms who you are, authorization determines what you can do. The Principle of Least Privilege grants users only the minimum permissions needed. Role-Based Access Control (RBAC) assigns permissions to roles (Editor, Viewer, Admin) and users inherit them through role membership — the most common model in enterprises. Mandatory Access Control (MAC) uses hierarchical security labels (Top Secret > Secret > Confidential > Unclassified) enforced by the system, common in military environments. Discretionary Access Control (DAC) lets the data owner decide who gets access, like sharing a Google Doc. Zero-trust architectures combine RBAC with continuous verification and micro-segmentation."
        },
        {
          "id": "cybersecurity-101-l02-c3",
          "title": "Password Security & Credential Management",
          "content": "Weak passwords remain the top attack vector: '123456' and 'password' still top the most-common list. Security guidance has shifted: NIST SP 800-63B recommends a minimum 8-character passphrase (12+ preferred), checking against known-breached password lists, and removing forced rotation unless a compromise is suspected. Passphrases ('correct-horse-battery-staple') beat complex short passwords because entropy grows exponentially with length. Password managers (Bitwarden, 1Password) generate and store unique credentials per site, eliminating reuse — the root cause of credential-stuffing attacks. Never store passwords in plaintext; instead hash with bcrypt, scrypt, or Argon2 plus a per-user salt."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cybersecurity-101-l02-a1",
          "title": "Authentication Factor Classifier",
          "type": "sorting_buckets",
          "buckets": [
            "Something you Know",
            "Something you Have",
            "Something you Are"
          ],
          "items": [
            {
              "text": "Password",
              "bucket": "Something you Know"
            },
            {
              "text": "FIDO2 security key",
              "bucket": "Something you Have"
            },
            {
              "text": "Fingerprint scan",
              "bucket": "Something you Are"
            },
            {
              "text": "PIN code",
              "bucket": "Something you Know"
            },
            {
              "text": "TOTP authenticator app",
              "bucket": "Something you Have"
            },
            {
              "text": "Iris recognition",
              "bucket": "Something you Are"
            },
            {
              "text": "Smart card",
              "bucket": "Something you Have"
            },
            {
              "text": "Passphrase",
              "bucket": "Something you Know"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "cybersecurity-101-l02-f1",
          "front": "Three authentication factors",
          "back": "Something you Know (password, PIN), Something you Have (security key, phone), Something you Are (biometrics)"
        },
        {
          "id": "cybersecurity-101-l02-f2",
          "front": "MFA effectiveness",
          "back": "Blocks 99.9 % of automated credential-stuffing attacks (Microsoft data)"
        },
        {
          "id": "cybersecurity-101-l02-f3",
          "front": "Role-Based Access Control (RBAC)",
          "back": "Permissions are assigned to roles (Admin, Editor, Viewer) and users inherit them via role membership"
        },
        {
          "id": "cybersecurity-101-l02-f4",
          "front": "Why passphrases beat complex short passwords",
          "back": "Entropy grows exponentially with length — 'correct-horse-battery-staple' has far more entropy than 'P@$$w0rd!'"
        }
      ],
      "learningAids": [
        {
          "id": "cybersecurity-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "cybersecurity-101-l03",
      "title": "CIA Triad & Authentication Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of the CIA Triad, threat landscape, authentication, and access control"
      ],
      "questions": [
        {
          "id": "cybersecurity-101-l03-q1",
          "text": "A DDoS attack that crashes an e-commerce site during a flash sale violates which CIA pillar?",
          "skillId": "cybersecurity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Confidentiality"
            },
            {
              "id": "b",
              "text": "Integrity"
            },
            {
              "id": "c",
              "text": "Availability"
            },
            {
              "id": "d",
              "text": "Authentication"
            }
          ],
          "correctOptionId": "c",
          "explanation": "DDoS floods a service with traffic, denying access to legitimate users — a direct availability attack."
        },
        {
          "id": "cybersecurity-101-l03-q2",
          "text": "Which authentication combination qualifies as MFA?",
          "skillId": "cybersecurity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Password plus a TOTP code from an authenticator app"
            },
            {
              "id": "b",
              "text": "Two different passwords"
            },
            {
              "id": "c",
              "text": "A PIN and a passphrase"
            },
            {
              "id": "d",
              "text": "Answering two security questions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "MFA requires factors from different categories — password (know) plus TOTP code from a device (have)."
        },
        {
          "id": "cybersecurity-101-l03-q3",
          "text": "The NIST Cybersecurity Framework phases are:",
          "skillId": "cybersecurity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Identify, Protect, Detect, Respond, Recover"
            },
            {
              "id": "b",
              "text": "Plan, Build, Test, Deploy, Monitor"
            },
            {
              "id": "c",
              "text": "Confidentiality, Integrity, Availability"
            },
            {
              "id": "d",
              "text": "Encrypt, Authenticate, Authorize, Audit"
            }
          ],
          "correctOptionId": "a",
          "explanation": "NIST CSF provides five core functions: Identify, Protect, Detect, Respond, Recover."
        },
        {
          "id": "cybersecurity-101-l03-q4",
          "text": "The Principle of Least Privilege means:",
          "skillId": "cybersecurity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Everyone shares the same admin account"
            },
            {
              "id": "b",
              "text": "Users receive only the minimum permissions required for their role"
            },
            {
              "id": "c",
              "text": "Passwords should be as short as possible"
            },
            {
              "id": "d",
              "text": "Firewalls should allow all outbound traffic"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Least privilege limits what a compromised account can access, reducing blast radius."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      },
      "learningAids": [
        {
          "id": "cybersecurity-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "cybersecurity-101-l04",
      "title": "Network Security — Firewalls, VPNs & IDS/IPS",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Compare packet-filtering, stateful, and next-generation firewalls",
        "Explain how VPNs create encrypted tunnels and when to use them",
        "Differentiate IDS (detection) from IPS (prevention) and describe their role in TCP/IP security"
      ],
      "chunks": [
        {
          "id": "cybersecurity-101-l04-c1",
          "title": "Firewalls & Network Segmentation",
          "content": "A firewall inspects network traffic against a rule set and permits or blocks packets. Packet-filtering firewalls check source/destination IP and port. Stateful-inspection firewalls track active connections, allowing return traffic for established sessions. Next-Generation Firewalls (NGFW) add deep-packet inspection, application-level awareness, and integrated threat intelligence. A DMZ (Demilitarized Zone) places public-facing services (web servers, mail relays) in a separate segment so a compromise there does not expose the internal network. Network segmentation — dividing a network into isolated zones — limits lateral movement if an attacker gains a foothold."
        },
        {
          "id": "cybersecurity-101-l04-c2",
          "title": "VPNs & Encrypted Tunnels",
          "content": "A Virtual Private Network (VPN) encapsulates traffic inside an encrypted tunnel between two endpoints. Site-to-site VPNs connect branch offices over the public internet as if they shared a private link. Remote-access VPNs let employees connect securely from home or public Wi-Fi. Protocols include IPsec (operates at the network layer, strong but complex) and WireGuard (modern, minimal, very fast). TLS-based VPNs (OpenVPN, SSL VPN) tunnel through port 443, which is rarely blocked by firewalls. VPNs protect against man-in-the-middle attacks on untrusted networks but do not make you anonymous — the VPN provider can still see your traffic."
        },
        {
          "id": "cybersecurity-101-l04-c3",
          "title": "IDS, IPS & TCP/IP Security",
          "content": "An Intrusion Detection System (IDS) passively monitors network traffic and alerts when it detects signatures of known attacks or anomalous behavior — like a security camera. An Intrusion Prevention System (IPS) sits inline and can automatically block malicious packets — like a security guard. Signature-based detection matches traffic against known attack patterns; anomaly-based detection flags deviations from a baseline. Both leverage TCP/IP knowledge: SYN-flood attacks abuse the TCP three-way handshake, IP spoofing forges source addresses, and ARP poisoning redirects local traffic. Combining firewalls, IDS/IPS, and network segmentation embodies defense-in-depth at the network layer."
        }
      ],
      "flashcards": [
        {
          "id": "cybersecurity-101-l04-f1",
          "front": "Next-Generation Firewall (NGFW)",
          "back": "A firewall that adds deep-packet inspection, application awareness, and threat intelligence on top of traditional stateful filtering"
        },
        {
          "id": "cybersecurity-101-l04-f2",
          "front": "IDS vs. IPS",
          "back": "IDS passively monitors and alerts (security camera); IPS sits inline and can block malicious traffic in real time (security guard)"
        },
        {
          "id": "cybersecurity-101-l04-f3",
          "front": "VPN",
          "back": "Creates an encrypted tunnel over an untrusted network, protecting data in transit from eavesdropping and MitM attacks"
        },
        {
          "id": "cybersecurity-101-l04-f4",
          "front": "SYN-flood attack",
          "back": "A DoS attack that sends many TCP SYN packets without completing the handshake, exhausting the server's connection table"
        }
      ],
      "learningAids": [
        {
          "id": "cybersecurity-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "cybersecurity-101-l05",
      "title": "Cryptography — Symmetric, Asymmetric, Hashing & TLS",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Compare symmetric (AES-256) and asymmetric (RSA) encryption and their use cases",
        "Explain cryptographic hashing (SHA-256) and its role in integrity verification",
        "Describe the TLS handshake and how PKI and digital certificates establish trust"
      ],
      "chunks": [
        {
          "id": "cybersecurity-101-l05-c1",
          "title": "Symmetric Encryption — AES-256",
          "content": "Symmetric encryption uses a single shared secret key for both encryption and decryption. AES (Advanced Encryption Standard) with a 256-bit key — AES-256 — is the gold standard adopted by governments and financial institutions. AES operates on fixed-size blocks (128 bits) and supports modes like CBC (Cipher Block Chaining) and GCM (Galois/Counter Mode, which adds authentication). Symmetric ciphers are fast and efficient, ideal for encrypting large datasets, full-disk encryption (BitLocker, FileVault), and data at rest. The fundamental challenge is key distribution: how do two parties securely share the key without an eavesdropper intercepting it? This is where asymmetric cryptography steps in."
        },
        {
          "id": "cybersecurity-101-l05-c2",
          "title": "Asymmetric Encryption, PKI & Digital Certificates",
          "content": "Asymmetric encryption uses a mathematically linked key pair: the public key encrypts, only the private key decrypts — or the private key signs, and anyone with the public key verifies. RSA (Rivest–Shamir–Adleman) is the most widely deployed asymmetric algorithm; 2048-bit RSA keys are the current minimum. Asymmetric cryptography solves the key-distribution problem: you share your public key openly and keep the private key secret. Public Key Infrastructure (PKI) binds public keys to identities using digital certificates issued by Certificate Authorities (CAs). When your browser sees a padlock icon, it has verified the server's certificate via a CA trust chain. Digital signatures combine hashing and asymmetric encryption to prove both the sender's identity and the message's integrity."
        },
        {
          "id": "cybersecurity-101-l05-c3",
          "title": "Hashing, TLS & Putting It All Together",
          "content": "A cryptographic hash function (SHA-256, SHA-3) takes any input and produces a fixed-size digest. Hashes are one-way (cannot be reversed), deterministic (same input → same output), and avalanche-sensitive (a single-bit change alters the entire digest). Use cases: verifying file integrity, storing passwords (with bcrypt/Argon2 salting), and digital signatures. TLS (Transport Layer Security) combines all three primitives in the TLS handshake: the client and server use asymmetric cryptography (RSA or ECDHE) to exchange a symmetric session key, then use that key (AES-256-GCM) to encrypt all subsequent traffic, and hash-based MACs ensure integrity. This hybrid approach delivers the security of asymmetric crypto and the speed of symmetric crypto — every HTTPS connection uses it."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cybersecurity-101-l05-a1",
          "title": "Crypto Technique Classifier",
          "type": "sorting_buckets",
          "buckets": [
            "Symmetric Encryption",
            "Asymmetric Encryption",
            "Hashing"
          ],
          "items": [
            {
              "text": "AES-256 for full-disk encryption",
              "bucket": "Symmetric Encryption"
            },
            {
              "text": "RSA key pair for digital signatures",
              "bucket": "Asymmetric Encryption"
            },
            {
              "text": "SHA-256 file checksum",
              "bucket": "Hashing"
            },
            {
              "text": "Shared secret key between two parties",
              "bucket": "Symmetric Encryption"
            },
            {
              "text": "Public key encrypts, private key decrypts",
              "bucket": "Asymmetric Encryption"
            },
            {
              "text": "bcrypt password storage",
              "bucket": "Hashing"
            },
            {
              "text": "TLS session key exchange",
              "bucket": "Asymmetric Encryption"
            },
            {
              "text": "GCM mode bulk data encryption",
              "bucket": "Symmetric Encryption"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "cybersecurity-101-l05-f1",
          "front": "AES-256",
          "back": "Advanced Encryption Standard with a 256-bit key — the gold-standard symmetric cipher for data at rest and bulk encryption"
        },
        {
          "id": "cybersecurity-101-l05-f2",
          "front": "RSA",
          "back": "Asymmetric algorithm using a public/private key pair — encrypts, signs, and secures key exchanges; 2048-bit minimum"
        },
        {
          "id": "cybersecurity-101-l05-f3",
          "front": "SHA-256",
          "back": "Cryptographic hash producing a 256-bit fixed-size digest; used for integrity checks, digital signatures, and password storage"
        },
        {
          "id": "cybersecurity-101-l05-f4",
          "front": "TLS handshake",
          "back": "Combines asymmetric key exchange (RSA/ECDHE) with symmetric bulk encryption (AES) and hash-based MACs — powers every HTTPS connection"
        }
      ],
      "learningAids": [
        {
          "id": "cybersecurity-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "cybersecurity-101-l06",
      "title": "Network Security & Cryptography Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of firewalls, VPNs, IDS/IPS, and cryptographic fundamentals"
      ],
      "questions": [
        {
          "id": "cybersecurity-101-l06-q1",
          "text": "Which firewall type performs deep-packet inspection and application-level awareness?",
          "skillId": "cybersecurity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Packet-filtering firewall"
            },
            {
              "id": "b",
              "text": "Stateful-inspection firewall"
            },
            {
              "id": "c",
              "text": "Next-Generation Firewall (NGFW)"
            },
            {
              "id": "d",
              "text": "Web Application Firewall (WAF)"
            }
          ],
          "correctOptionId": "c",
          "explanation": "NGFWs combine stateful filtering with deep-packet inspection, application awareness, and integrated threat intelligence."
        },
        {
          "id": "cybersecurity-101-l06-q2",
          "text": "AES-256 is an example of:",
          "skillId": "cybersecurity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Asymmetric encryption"
            },
            {
              "id": "b",
              "text": "Symmetric encryption"
            },
            {
              "id": "c",
              "text": "Hashing algorithm"
            },
            {
              "id": "d",
              "text": "Digital signature scheme"
            }
          ],
          "correctOptionId": "b",
          "explanation": "AES uses a single shared secret key for both encryption and decryption — the definition of symmetric encryption."
        },
        {
          "id": "cybersecurity-101-l06-q3",
          "text": "During a TLS handshake, asymmetric cryptography is used primarily to:",
          "skillId": "cybersecurity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Encrypt all subsequent web traffic"
            },
            {
              "id": "b",
              "text": "Securely exchange a symmetric session key"
            },
            {
              "id": "c",
              "text": "Hash the user's password"
            },
            {
              "id": "d",
              "text": "Generate a firewall rule"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Asymmetric crypto securely bootstraps a shared session key; the faster symmetric cipher then handles bulk encryption."
        },
        {
          "id": "cybersecurity-101-l06-q4",
          "text": "An IPS differs from an IDS because an IPS can:",
          "skillId": "cybersecurity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Only send alerts to the administrator"
            },
            {
              "id": "b",
              "text": "Automatically block malicious traffic in real time"
            },
            {
              "id": "c",
              "text": "Encrypt network traffic"
            },
            {
              "id": "d",
              "text": "Replace a firewall entirely"
            }
          ],
          "correctOptionId": "b",
          "explanation": "An IPS sits inline and can drop or reject packets — an IDS only monitors and alerts passively."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "cybersecurity-101-l07",
      "title": "Social Engineering, Phishing & Malware",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Identify social-engineering tactics including pretexting, baiting, and tailgating",
        "Distinguish spear phishing, whaling, and vishing from generic phishing campaigns",
        "Classify malware families — ransomware, trojans, worms, rootkits — and describe APT kill chains"
      ],
      "chunks": [
        {
          "id": "cybersecurity-101-l07-c1",
          "title": "Social Engineering Tactics",
          "content": "Social engineering exploits human psychology rather than technical vulnerabilities. Pretexting creates a fabricated scenario ('I'm from IT, I need your credentials to fix your account'). Baiting leaves infected USB drives in parking lots or offers free downloads laced with malware. Tailgating (piggybacking) lets an attacker follow an authorized person through a secured door. Quid pro quo offers a service in exchange for information ('Free tech support if you install this remote-access tool'). These attacks succeed because humans are wired to trust authority, reciprocate favors, and act under urgency. Security awareness training and a culture that encourages verification are the strongest defenses."
        },
        {
          "id": "cybersecurity-101-l07-c1b",
          "title": "Elicitation & Pretexting: The Social Engineer's Core Skills",
          "content": "Elicitation is the ability to extract information through seemingly natural conversation — without the target realising they are being interrogated. Key techniques include strategic flattery ('I've heard your team is the best at this'), deliberate false statements that provoke correction ('You use Oracle, right?' — prompting 'No, we actually use Postgres'), and appeals to shared interests. Pretexting goes further: it is the creation and maintenance of a complete fictional identity — a believable backstory, supporting props (fake badge, branded polo shirt), appropriate body language and jargon, and rehearsed responses to challenges. A social engineer posing as an IT auditor from a known consulting firm, carrying a clipboard, using the correct technical vocabulary, and referencing a recent email from the CTO has constructed a multi-layered pretext that stacks credibility signals. The pretext must answer the target's implicit question — 'Why should I help this person?' — before the target consciously formulates it."
        },
        {
          "id": "cybersecurity-101-l07-c1c",
          "title": "Cialdini's Six Weapons of Influence in Social Engineering",
          "content": "Robert Cialdini identified six universal principles of influence that social engineers systematically exploit: Reciprocity (people feel obligated to return favours — arriving with coffee creates social debt), Commitment/Consistency (people honour prior commitments), Social Proof (people follow what others do — 'the team upstairs already let me in'), Authority (people comply with perceived authority figures — uniforms, name-dropping executives), Liking (people are influenced by those they find agreeable), and Scarcity (people value things perceived as limited — 'I only have twenty minutes'). Sophisticated attacks stack multiple principles simultaneously, creating nearly irresistible compliance pressure. Defence requires awareness of these principles, explicit policies that permit employees to verify identities without social penalty, and realistic simulation training that gives employees visceral experience of being targeted — building what security professionals call a 'human firewall.'"
        },
        {
          "id": "cybersecurity-101-l07-c2",
          "title": "Phishing Variants & Real-World Attacks",
          "content": "Phishing casts a wide net with mass emails impersonating trusted brands — 'Your account has been locked, click here to verify.' Spear phishing targets specific individuals using personalized details scraped from social media. Whaling targets C-suite executives with high-stakes lures ('Q4 board presentation attached'). Vishing uses phone calls, and smishing uses SMS. Business Email Compromise (BEC) spoofs a CEO's email to trick finance into wiring funds — the FBI reports BEC has caused over $50 billion in losses globally. The 2020 Twitter hack used social-engineering calls to employees to gain internal-tool access. Red flags: urgency, unexpected attachments, mismatched URLs, requests to bypass normal procedures."
        },
        {
          "id": "cybersecurity-101-l07-c3",
          "title": "Malware Families & APT Kill Chains",
          "content": "Malware is hostile software designed to damage, disrupt, or steal. Viruses attach to host files and require user action to spread. Worms self-replicate across networks (WannaCry exploited EternalBlue to spread to 200 k+ machines). Trojans masquerade as legitimate software. Ransomware encrypts files and demands cryptocurrency (the Colonial Pipeline attack shut down US East Coast fuel supply). Rootkits hide deep in the OS to maintain persistent access. An APT lifecycle — the Lockheed Martin Cyber Kill Chain — proceeds through reconnaissance, weaponization, delivery, exploitation, installation, command-and-control (C2), and actions on objectives. Understanding the kill chain lets defenders break the chain at any stage: block the delivery (email filter), detect the C2 beacon (SIEM), or contain lateral movement (segmentation). CVEs (Common Vulnerabilities and Exposures) catalogue publicly known flaws, and CVSS scores rate severity from 0 to 10."
        }
      ],
      "flashcards": [
        {
          "id": "cybersecurity-101-l07-f1",
          "front": "Spear phishing vs. generic phishing",
          "back": "Spear phishing targets specific individuals with personalized details; generic phishing broadcasts mass emails impersonating trusted brands"
        },
        {
          "id": "cybersecurity-101-l07-f2",
          "front": "Ransomware",
          "back": "Malware that encrypts victim files and demands cryptocurrency payment for the decryption key — e.g., WannaCry, Colonial Pipeline attack"
        },
        {
          "id": "cybersecurity-101-l07-f3",
          "front": "Cyber Kill Chain (Lockheed Martin)",
          "back": "Recon → Weaponization → Delivery → Exploitation → Installation → C2 → Actions on Objectives — breaking any link disrupts the attack"
        },
        {
          "id": "cybersecurity-101-l07-f4",
          "front": "CVE & CVSS",
          "back": "CVE: unique identifier for a publicly known vulnerability. CVSS: Common Vulnerability Scoring System, rates severity 0–10"
        },
        {
          "id": "cybersecurity-101-l07-f5",
          "front": "Elicitation (social engineering)",
          "back": "Extracting information through natural-seeming conversation without the target realising they are being interrogated. Techniques include flattery, deliberate false statements that provoke correction, mutual interest, and creating a comfortable social atmosphere."
        },
        {
          "id": "cybersecurity-101-l07-f6",
          "front": "Pretexting (detailed)",
          "back": "Creating and maintaining a fictional identity with a believable backstory, supporting props (fake badge, uniform), appropriate body language, cultural/jargon knowledge, and rehearsed responses to challenges — a complete narrative, not a single lie."
        },
        {
          "id": "cybersecurity-101-l07-f7",
          "front": "Cialdini's six principles of influence",
          "back": "Reciprocity, commitment/consistency, social proof, authority, liking, and scarcity — universal psychological principles that social engineers exploit, often stacking multiple principles simultaneously for maximum compliance pressure."
        }
      ]
    },
    {
      "id": "cybersecurity-101-l08",
      "title": "Incident Response, SIEM & Security Operations",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Walk through the NIST incident-response lifecycle: Preparation, Detection & Analysis, Containment/Eradication/Recovery, Post-Incident",
        "Describe the role of a Security Operations Center (SOC) and SIEM platforms like Splunk and Microsoft Sentinel",
        "Explain penetration testing methodology and how it strengthens defenses proactively"
      ],
      "chunks": [
        {
          "id": "cybersecurity-101-l08-c1",
          "title": "The NIST Incident Response Lifecycle",
          "content": "NIST SP 800-61 defines four phases. (1) Preparation: establish policies, assemble a Computer Security Incident Response Team (CSIRT), deploy monitoring tools, and run tabletop exercises. (2) Detection & Analysis: SIEM platforms correlate logs from firewalls, endpoints, and applications to surface anomalies. Triage determines severity — Is it a false positive? A minor incident? A critical breach? (3) Containment, Eradication & Recovery: short-term containment isolates affected hosts (disable network ports, block IPs); eradication removes malware and patches the exploited vulnerability; recovery restores from verified-clean backups and validates system integrity before reconnection. (4) Post-Incident Activity: conduct a blameless retrospective, publish an incident report, update playbooks, and share IOCs (Indicators of Compromise) with the community."
        },
        {
          "id": "cybersecurity-101-l08-c2",
          "title": "SOC, SIEM & Threat Intelligence",
          "content": "A Security Operations Center (SOC) is the nerve center for an organization's security monitoring — staffed 24/7 by analysts who investigate alerts. SIEM (Security Information and Event Management) tools — Splunk, Microsoft Sentinel, IBM QRadar — ingest, normalize, and correlate millions of log events per day. Analysts write detection rules and use dashboards to spot patterns: a spike in failed logins from a foreign IP, lateral movement between servers, or data exfiltration over DNS. Threat-intelligence feeds (MITRE ATT&CK, STIX/TAXII, ISAC bulletins) provide up-to-date IOCs — malicious IP addresses, file hashes, and domain names — that SIEM rules can match automatically, reducing mean-time-to-detect (MTTD)."
        },
        {
          "id": "cybersecurity-101-l08-c3",
          "title": "Penetration Testing & Proactive Defense",
          "content": "Penetration testing (pen testing) simulates real-world attacks to find vulnerabilities before adversaries do. Phases mirror the kill chain: reconnaissance (OSINT, port scanning with Nmap), enumeration (identifying services and versions), exploitation (attempting to gain access using tools like Metasploit or Burp Suite), post-exploitation (privilege escalation, lateral movement), and reporting (detailed findings with risk ratings and remediation advice). Tests can be black-box (no insider knowledge), white-box (full source access), or grey-box (partial info). Bug bounty programs crowdsource testing by rewarding external researchers. Vulnerability scanning (Nessus, Qualys) automates discovery of known CVEs but lacks the creativity of a skilled pen tester. Together, scanning and pen testing form a proactive vulnerability-management program aligned with the OWASP Top 10."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cybersecurity-101-l08-a1",
          "title": "Incident Response Phase Sequencer",
          "type": "timeline_builder",
          "description": "Arrange in correct order: Establish incident-response policies → Deploy SIEM monitoring → Detect anomalous log pattern → Triage and determine severity → Isolate compromised hosts → Remove malware and patch vulnerability → Restore from clean backups → Conduct blameless retrospective → Update playbooks and share IOCs"
        }
      ],
      "flashcards": [
        {
          "id": "cybersecurity-101-l08-f1",
          "front": "NIST IR four phases",
          "back": "Preparation → Detection & Analysis → Containment / Eradication / Recovery → Post-Incident Activity"
        },
        {
          "id": "cybersecurity-101-l08-f2",
          "front": "SIEM",
          "back": "Security Information and Event Management — ingests and correlates logs from all systems to detect threats (e.g., Splunk, Microsoft Sentinel)"
        },
        {
          "id": "cybersecurity-101-l08-f3",
          "front": "Penetration testing",
          "back": "Simulated real-world attack to find vulnerabilities before adversaries do — recon, enumeration, exploitation, post-exploitation, reporting"
        },
        {
          "id": "cybersecurity-101-l08-f4",
          "front": "OWASP Top 10",
          "back": "A regularly updated list of the ten most critical web-application security risks — guides developers and pen testers"
        },
        {
          "id": "cybersecurity-101-l08-f5",
          "front": "Human firewall",
          "back": "Defence strategy combining realistic simulation training (phishing, vishing, physical tests), explicit verification policies, a culture of constructive scepticism, and regular testing — channelling trust through verification rather than eliminating it."
        },
        {
          "id": "cybersecurity-101-l08-f6",
          "front": "Why realistic simulations beat lectures for security awareness",
          "back": "Experiential learning gives employees visceral experience of being targeted, building intuitive recognition of attack patterns. Simulated phishing campaigns and vishing calls are far more effective than slides and lectures alone."
        }
      ]
    },
    {
      "id": "cybersecurity-101-l09",
      "title": "Social Engineering, IR & SecOps Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of social engineering, malware, incident response, and security operations"
      ],
      "questions": [
        {
          "id": "cybersecurity-101-l09-q1",
          "text": "An attacker calls the help desk posing as a VP to reset a password. This is an example of:",
          "skillId": "cybersecurity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Pretexting (social engineering)"
            },
            {
              "id": "b",
              "text": "SQL injection"
            },
            {
              "id": "c",
              "text": "Ransomware"
            },
            {
              "id": "d",
              "text": "DDoS attack"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Pretexting fabricates a scenario to manipulate people into divulging information or performing actions."
        },
        {
          "id": "cybersecurity-101-l09-q2",
          "text": "In the Cyber Kill Chain, which phase involves the attacker establishing a persistent communication channel?",
          "skillId": "cybersecurity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Reconnaissance"
            },
            {
              "id": "b",
              "text": "Command and Control (C2)"
            },
            {
              "id": "c",
              "text": "Delivery"
            },
            {
              "id": "d",
              "text": "Weaponization"
            }
          ],
          "correctOptionId": "b",
          "explanation": "C2 is where the attacker sets up a back channel to remotely control compromised systems."
        },
        {
          "id": "cybersecurity-101-l09-q3",
          "text": "A SOC analyst uses Splunk to correlate firewall logs with endpoint alerts. This describes:",
          "skillId": "cybersecurity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "SIEM-based threat detection"
            },
            {
              "id": "b",
              "text": "Penetration testing"
            },
            {
              "id": "c",
              "text": "Symmetric encryption"
            },
            {
              "id": "d",
              "text": "RBAC enforcement"
            }
          ],
          "correctOptionId": "a",
          "explanation": "SIEM platforms like Splunk ingest and correlate logs from multiple sources to surface security threats."
        },
        {
          "id": "cybersecurity-101-l09-q4",
          "text": "The FIRST phase of the NIST Incident Response Lifecycle is:",
          "skillId": "cybersecurity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Detection & Analysis"
            },
            {
              "id": "b",
              "text": "Containment"
            },
            {
              "id": "c",
              "text": "Preparation"
            },
            {
              "id": "d",
              "text": "Recovery"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Preparation happens before any incident — policies, CSIRT assembly, tools, and tabletop exercises."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "cybersecurity-101-l10",
      "title": "Cybersecurity Comprehensive Final",
      "type": "quiz",
      "duration": 12,
      "objectives": [
        "Synthesize all module topics: CIA Triad, authentication, network security, cryptography, social engineering, incident response, and security operations"
      ],
      "questions": [
        {
          "id": "cybersecurity-101-l10-q1",
          "text": "An attacker modifies a medical database so patient blood types are changed. Which CIA pillar is MOST directly violated?",
          "skillId": "cybersecurity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Confidentiality"
            },
            {
              "id": "b",
              "text": "Integrity"
            },
            {
              "id": "c",
              "text": "Availability"
            },
            {
              "id": "d",
              "text": "Non-repudiation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Unauthorized modification of data is an integrity violation — the records can no longer be trusted."
        },
        {
          "id": "cybersecurity-101-l10-q2",
          "text": "A FIDO2 security key provides phishing-resistant MFA because:",
          "skillId": "cybersecurity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It uses a longer password"
            },
            {
              "id": "b",
              "text": "The cryptographic challenge is bound to the legitimate domain"
            },
            {
              "id": "c",
              "text": "It encrypts emails automatically"
            },
            {
              "id": "d",
              "text": "It replaces the need for firewalls"
            }
          ],
          "correctOptionId": "b",
          "explanation": "FIDO2 binds the authentication challenge to the real domain — a phishing site on a different domain cannot intercept the handshake."
        },
        {
          "id": "cybersecurity-101-l10-q3",
          "text": "Which protocol creates an encrypted tunnel at the network layer and is commonly used for site-to-site VPNs?",
          "skillId": "cybersecurity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "IPsec"
            },
            {
              "id": "b",
              "text": "HTTP"
            },
            {
              "id": "c",
              "text": "FTP"
            },
            {
              "id": "d",
              "text": "SMTP"
            }
          ],
          "correctOptionId": "a",
          "explanation": "IPsec operates at the network layer (Layer 3) and provides encryption plus authentication for site-to-site VPNs."
        },
        {
          "id": "cybersecurity-101-l10-q4",
          "text": "During the TLS handshake, the server's digital certificate is verified using:",
          "skillId": "cybersecurity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The Certificate Authority (CA) trust chain (PKI)"
            },
            {
              "id": "b",
              "text": "The server's MAC address"
            },
            {
              "id": "c",
              "text": "A symmetric AES key"
            },
            {
              "id": "d",
              "text": "The client's password"
            }
          ],
          "correctOptionId": "a",
          "explanation": "PKI uses Certificate Authorities to vouch for the server's identity — the browser checks the cert against its trusted CA store."
        },
        {
          "id": "cybersecurity-101-l10-q5",
          "text": "Which OWASP Top 10 vulnerability involves inserting malicious SQL into user input fields?",
          "skillId": "cybersecurity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "SQL Injection"
            },
            {
              "id": "b",
              "text": "Cross-Site Scripting (XSS)"
            },
            {
              "id": "c",
              "text": "Broken Access Control"
            },
            {
              "id": "d",
              "text": "Security Misconfiguration"
            }
          ],
          "correctOptionId": "a",
          "explanation": "SQL injection exploits unsanitized user input to manipulate database queries — prevented by parameterized queries."
        },
        {
          "id": "cybersecurity-101-l10-q6",
          "text": "A buffer overflow attack exploits:",
          "skillId": "cybersecurity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A program writing data beyond its allocated memory boundary, potentially executing attacker code"
            },
            {
              "id": "b",
              "text": "Weak Wi-Fi passwords"
            },
            {
              "id": "c",
              "text": "Expired digital certificates"
            },
            {
              "id": "d",
              "text": "Unpatched antivirus signatures"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Buffer overflows write past allocated memory, overwriting adjacent data or the return address to redirect execution to attacker-supplied shellcode."
        },
        {
          "id": "cybersecurity-101-l10-q7",
          "text": "Business Email Compromise (BEC) is most accurately described as:",
          "skillId": "cybersecurity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Spoofing a senior executive's email to trick finance into wiring funds"
            },
            {
              "id": "b",
              "text": "Installing ransomware via a USB drive"
            },
            {
              "id": "c",
              "text": "Brute-forcing an email password"
            },
            {
              "id": "d",
              "text": "Encrypting email with PGP"
            }
          ],
          "correctOptionId": "a",
          "explanation": "BEC impersonates executives via compromised or spoofed email, costing organizations over $50 billion globally (FBI data)."
        },
        {
          "id": "cybersecurity-101-l10-q8",
          "text": "A CVSS score of 9.8 indicates:",
          "skillId": "cybersecurity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A critical-severity vulnerability requiring immediate remediation"
            },
            {
              "id": "b",
              "text": "A low-risk informational finding"
            },
            {
              "id": "c",
              "text": "A successfully patched system"
            },
            {
              "id": "d",
              "text": "A false positive from a vulnerability scanner"
            }
          ],
          "correctOptionId": "a",
          "explanation": "CVSS ranges 0–10; scores ≥ 9.0 are Critical, demanding urgent patching and mitigation."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 8,
        "bloomProfile": {
          "remember": 2,
          "understand": 3,
          "apply": 2,
          "analyze": 1
        }
      }
    }
  ]
};
