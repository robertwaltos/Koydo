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
          "content": "The CIA Triad is a key concept in the world of cybersecurity that helps us understand how to keep our information safe. It is made up of three essential principles: Confidentiality, Integrity, and Availability. Let's break these down further to see how they work together to protect our data.\nConfidentiality is all about ensuring that sensitive information is only accessible to those who have permission to see it. This is crucial because we want to keep our personal and private information secure from unauthorized access. One of the most effective ways to achieve confidentiality is through encryption. Encryption is like putting our data in a locked box that only certain people can open. For instance, AES-256 is a strong encryption method that protects data when it is stored on a device. Additionally, when data is sent over the internet, we use protocols like TLS to keep it safe from prying eyes.\nNext, we have Integrity, which ensures that the information we have remains accurate and has not been changed or tampered with. To protect the integrity of our data, we can use techniques such as cryptographic hashing. This method creates a unique fingerprint of the data, making it easy to detect any unauthorized changes. Digital signatures also play a vital role here, as they help verify that the data comes from a trusted source and has not been altered during transmission.\nFinally, we come to Availability, which means that our systems and data should be accessible whenever we need them. Imagine trying to access important files for a project, only to find that the system is down! To prevent this, we can implement strategies like having backup systems in place, using load balancing to manage traffic efficiently, and taking measures to protect against denial-of-service attacks, which can overwhelm a system and make it unavailable.\nEach of these principles—Confidentiality, Integrity, and Availability—plays a crucial role in making informed security decisions. Every security measure we implement can be traced back to one of these three pillars, ensuring that we create a robust defense against potential threats to our information.\nContext recap: The CIA Triad is a key concept in the world of cybersecurity that helps us understand how to keep our information safe. It is made up of three essential principles: Confidentiality, Integrity, and Availability. Let's break these down further to see how they work together to protect our data. Confidentiality is all about ensuring that sensitive information is only accessible to those who have permission to see it.\nWhy this matters: Confidentiality, Integrity, Availability helps learners in Cybersecurity connect ideas from Cybersecurity Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cybersecurity-101-l01-c2",
          "title": "Threat Actors & Attack Vectors",
          "content": "In the fascinating world of cybersecurity, we encounter a variety of threat actors who can jeopardize our online safety. These individuals and groups can be quite different from one another. For instance, there are those known as 'script kiddies.' These are often inexperienced individuals who rely on pre-existing tools to carry out their attacks, rather than creating their own methods. On the other end of the spectrum, we have organized cybercrime syndicates that run complex operations, such as Ransomware-as-a-Service (RaaS). This type of service allows criminals to rent out ransomware tools to others, making it easier for more people to engage in cybercrime.\nAmong the most sophisticated threats are Advanced Persistent Threats (APTs), which are typically sponsored by nation-states. These groups are highly skilled, well-funded, and often have long-term goals in mind. Additionally, we have hacktivists, who use their skills to promote political or social causes through cyber activities.\nIt's also crucial to be aware of insider threats. These can come from disgruntled employees or careless contractors, and they are responsible for approximately 25% of all security breaches.\nNow, let's talk about attack vectors. These are the various methods that cybercriminals use to execute their attacks. Common attack vectors include phishing emails that trick users into revealing personal information, exploiting vulnerabilities in unpatched software, or taking advantage of misconfigured cloud storage systems. A well-known example of a serious attack is the SolarWinds incident, where malicious code was inserted into a trusted software update, allowing attackers to compromise many organizations.\nTo better understand and defend against these threats, cybersecurity professionals use the MITRE ATT&CK framework. This framework serves as a detailed catalog of tactics employed by adversaries, outlining everything from how they gain initial access to how they achieve their objectives. By familiarizing ourselves with these concepts, we can better protect ourselves and our digital environments.\nContext recap: In the fascinating world of cybersecurity, we encounter a variety of threat actors who can jeopardize our online safety. These individuals and groups can be quite different from one another. For instance, there are those known as 'script kiddies.' These are often inexperienced individuals who rely on pre-existing tools to carry out their attacks, rather than creating their own methods. On the other end of the spectrum, we have organized cybercrime syndicates that run complex operations, such as Ransomware-as-a-Service (RaaS).\nWhy this matters: Threat Actors & Attack Vectors helps learners in Cybersecurity connect ideas from Cybersecurity Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cybersecurity-101-l01-c3",
          "title": "Defense in Depth & Zero Trust",
          "content": "Defense in depth is a smart security strategy that uses several layers of protection to keep information safe. Think of it like a castle that has a moat, tall walls, guards, and a locked vault. Each of these features adds another level of safety. In the world of cybersecurity, these layers can include things like perimeter firewalls, which act like the castle's walls to block unauthorized access from outsiders. Network segmentation is like dividing the castle into smaller sections, making it harder for intruders to move around if they get in. Endpoint detection monitors devices, such as computers and smartphones, for any signs of threats, just like guards watching for suspicious activity. Application security protects the software we use, while data encryption secures sensitive information, making it unreadable to anyone who shouldn't see it. Additionally, user awareness training teaches people about security best practices, helping them recognize potential threats.\nThe Zero Trust approach takes this idea even further. It means that no one should be trusted automatically, even if they are already inside the network. Every request for access must be verified and authenticated continuously, ensuring that only the right people can get in. To help organizations build a strong security posture, the NIST Cybersecurity Framework offers a structured approach. This framework guides organizations through five key steps: identifying their assets, protecting them, detecting any security issues, responding to incidents, and recovering from any damage. By following these steps, organizations can create a resilient security system that stands strong against modern threats.\nContext recap: Defense in depth is a smart security strategy that uses several layers of protection to keep information safe. Think of it like a castle that has a moat, tall walls, guards, and a locked vault. Each of these features adds another level of safety. In the world of cybersecurity, these layers can include things like perimeter firewalls, which act like the castle's walls to block unauthorized access from outsiders.\nWhy this matters: Defense in Depth & Zero Trust helps learners in Cybersecurity connect ideas from Cybersecurity Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
          "content": "Authentication is an important process that helps verify who you are when you access online accounts or services. It can involve one or more factors, which are different ways to prove your identity. There are three main types of authentication factors:\n1. **Something you Know**: This includes information that only you should know, like a password or a Personal Identification Number (PIN).\n2. **Something you Have**: This refers to physical items or tools that you possess, such as a hardware security key, a smartphone app that generates codes, or a smart card. These items help confirm your identity in addition to your password.\n3. **Something you Are**: This type involves your unique physical characteristics, known as biometrics. Examples include your fingerprint, facial recognition, or even an iris scan.\nTo make your accounts even more secure, you can use a method called Multi-Factor Authentication (MFA). MFA combines at least two different types of these authentication factors. For instance, if you log in with your password and then enter a code sent to your phone from an authenticator app, that is considered MFA. However, if you use two passwords, that does not count as MFA because both are from the 'know' category.\nAccording to Microsoft, using MFA can block an impressive 99.9% of automated attacks that try to guess passwords. One of the most effective tools for MFA is the FIDO2 security key. This key is designed to protect you from phishing attacks, which are attempts by attackers to trick you into giving away your information. FIDO2 keys work by ensuring that the cryptographic challenge is linked to the legitimate website you are trying to access, making it very difficult for fake websites to intercept your login information. By using these security measures, you can significantly enhance your online safety and protect your personal information from unauthorized access.\nContext recap: Authentication is an important process that helps verify who you are when you access online accounts or services. It can involve one or more factors, which are different ways to prove your identity. There are three main types of authentication factors:\n1. **Something you Know**: This includes information that only you should know, like a password or a Personal Identification Number (PIN).\nWhy this matters: Authentication Factors & MFA helps learners in Cybersecurity connect ideas from Cybersecurity Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cybersecurity-101-l02-c2",
          "title": "Access Control Models",
          "content": "After you have successfully logged in and your identity has been confirmed, the next important step is called authorization. This process determines what actions you are allowed to take within a system or application. A fundamental idea in authorization is known as the Principle of Least Privilege. This principle suggests that users should only have the minimum permissions necessary to complete their tasks. For example, if you only need to read documents, you shouldn’t have permission to delete them.\nOne popular method for managing access is called Role-Based Access Control, or RBAC for short. In this model, permissions are assigned to specific roles within an organization, such as Editor, Viewer, or Admin. When a user is assigned a role, they automatically inherit the permissions associated with that role. This approach is very common in businesses because it simplifies the management of user permissions.\nAnother method is Mandatory Access Control, or MAC. This system uses security labels to enforce access levels. For instance, in military environments, documents might be labeled as Top Secret, Secret, Confidential, or Unclassified, and the system ensures that only individuals with the appropriate clearance can access certain information.\nDiscretionary Access Control, or DAC, is another approach where the owner of the data has the authority to decide who can access it. This is similar to how you might share a Google Doc with specific people, allowing them to view or edit the document based on your preferences.\nLastly, in today’s security landscape, Zero Trust architectures are becoming increasingly popular. This approach combines RBAC with continuous verification of users and micro-segmentation of networks to enhance security even further. By not automatically trusting any user or device, Zero Trust helps protect sensitive information from unauthorized access.\nContext recap: After you have successfully logged in and your identity has been confirmed, the next important step is called authorization. This process determines what actions you are allowed to take within a system or application. A fundamental idea in authorization is known as the Principle of Least Privilege. This principle suggests that users should only have the minimum permissions necessary to complete their tasks.\nWhy this matters: Access Control Models helps learners in Cybersecurity connect ideas from Cybersecurity Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cybersecurity-101-l02-c3",
          "title": "Password Security & Credential Management",
          "content": "Password security is extremely important because weak passwords are one of the most common ways that cyber attackers can break into accounts. Many people still choose simple passwords like '123456' or 'password,' which are very easy for someone to guess. To help protect your accounts better, experts have developed new guidelines. According to the NIST Special Publication 800-63B, it is recommended to use a passphrase that is at least 8 characters long, and even better if it has 12 or more characters. This means you should create a longer phrase that is easy for you to remember but hard for others to guess. Additionally, it is a good idea to check your passwords against lists of passwords that have already been compromised, which means they have been stolen in past data breaches. The guidelines also suggest that you should not be required to change your password regularly unless there is a reason to believe your account has been compromised. Using passphrases, such as 'correct-horse-battery-staple,' is much safer than using short, complicated passwords because longer phrases provide much better security. To make password management easier, you can use password managers like Bitwarden or 1Password. These tools can create and store unique passwords for each of your accounts, which helps prevent you from reusing passwords. Reusing passwords is a major reason why credential-stuffing attacks happen, where attackers use stolen passwords from one site to try and access accounts on other sites. Lastly, it is very important never to store your passwords in plain text. Instead, they should be securely hashed using methods like bcrypt, scrypt, or Argon2, along with a unique salt for each user. This way, even if someone gains access to the stored passwords, they cannot easily read them.\nContext recap: Password security is extremely important because weak passwords are one of the most common ways that cyber attackers can break into accounts. Many people still choose simple passwords like '123456' or 'password,' which are very easy for someone to guess. To help protect your accounts better, experts have developed new guidelines. According to the NIST Special Publication 800-63B, it is recommended to use a passphrase that is at least 8 characters long, and even better if it has 12 or more characters.\nWhy this matters: Password Security & Credential Management helps learners in Cybersecurity connect ideas from Cybersecurity Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
          "content": "Firewalls play a crucial role in keeping our networks safe by managing the flow of data. They work like security guards for your network, checking each piece of data, called a packet, to see if it should be allowed in or blocked out based on specific rules. There are several types of firewalls that help with this task. For example, packet-filtering firewalls look at the source and destination IP addresses and ports to decide whether to let the data through. On the other hand, stateful-inspection firewalls are a bit smarter; they remember the active connections and allow return traffic for those established sessions, making them more efficient.\nNext-Generation Firewalls (NGFW) are even more advanced. They not only perform deep packet inspection, which means they look closely at the data within the packets, but they also understand applications and have built-in threat intelligence. This means they can recognize and respond to potential threats more effectively.\nAnother important concept in network security is the Demilitarized Zone (DMZ). This is a special area of the network that hosts services that are accessible to the public, like web servers. By placing these services in a DMZ, we ensure that if they are compromised, the internal network remains safe and secure.\nLastly, network segmentation is a strategy where we divide a network into smaller, isolated zones. This is important because it limits the movement of attackers within the network. If an attacker gains access to one part of the network, segmentation helps prevent them from easily moving to other areas, thus protecting sensitive information and systems. By understanding these concepts, we can better appreciate how to protect our digital environments from potential threats.\nContext recap: Firewalls play a crucial role in keeping our networks safe by managing the flow of data. They work like security guards for your network, checking each piece of data, called a packet, to see if it should be allowed in or blocked out based on specific rules. There are several types of firewalls that help with this task. For example, packet-filtering firewalls look at the source and destination IP addresses and ports to decide whether to let the data through.\nWhy this matters: Firewalls & Network Segmentation helps learners in Cybersecurity connect ideas from Cybersecurity Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "cybersecurity-101-l04-c2",
          "title": "VPNs & Encrypted Tunnels",
          "content": "A Virtual Private Network, or VPN, is a special technology that helps keep your online activities safe and secure. It does this by creating an encrypted tunnel for your data, which means that your information is scrambled and protected from anyone trying to snoop on it while it travels across the internet. Think of it like sending a secret message that only the intended recipient can read! There are different kinds of VPNs. For example, site-to-site VPNs connect different office locations over the public internet, making it seem like they are all part of the same private network. This is really useful for businesses with multiple locations. On the other hand, remote-access VPNs allow employees to connect to their company's network securely from places like their homes or coffee shops, even when using public Wi-Fi, which can be risky without protection. To make these secure connections, VPNs use various protocols. One of the most common is IPsec, which is very strong but can be a bit complicated to set up. Another option is WireGuard, which is newer, simpler, and super fast! There are also TLS-based VPNs, such as OpenVPN and SSL VPN, which use port 443. This port is usually open on firewalls, making it easier to connect. While VPNs are great for protecting your data from man-in-the-middle attacks—where someone tries to intercept your information on untrusted networks—they don’t make you completely anonymous. It’s important to remember that your VPN provider can still see your internet traffic, so choose a trustworthy provider to keep your information safe.\nContext recap: A Virtual Private Network, or VPN, is a special technology that helps keep your online activities safe and secure. It does this by creating an encrypted tunnel for your data, which means that your information is scrambled and protected from anyone trying to snoop on it while it travels across the internet. Think of it like sending a secret message that only the intended recipient can read! There are different kinds of VPNs.\nWhy this matters: VPNs & Encrypted Tunnels helps learners in Cybersecurity connect ideas from Cybersecurity Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cybersecurity-101-l04-c3",
          "title": "IDS, IPS & TCP/IP Security",
          "content": "An Intrusion Detection System, or IDS, is a vital security tool that helps keep our networks safe by monitoring the flow of data. It looks for signs of suspicious activity or known attack patterns, much like how a security camera watches over a building to spot intruders. When the IDS notices something unusual, it sends alerts to the network administrators, who can then take action to investigate and respond to potential threats.\nOn the other hand, we have an Intrusion Prevention System, known as IPS. This system works a bit differently; it sits directly in the path of network traffic and can automatically block harmful data packets before they reach their destination. Think of it as a security guard who not only watches for trouble but also steps in to stop it from happening.\nThere are two primary methods that these systems use to detect threats. The first is called signature-based detection. This method compares incoming data against a database of known attack patterns, much like how a fingerprint scanner checks for matches. The second method is anomaly-based detection, which looks for unusual behavior that deviates from what is considered normal. This is similar to noticing when someone behaves differently than usual in a familiar environment.\nBoth IDS and IPS rely on a solid understanding of TCP/IP protocols, which are the rules that govern how data is sent and received over the internet. For example, SYN-flood attacks exploit the TCP handshake process, while IP spoofing involves forging source addresses to trick systems. Additionally, ARP poisoning can misdirect local traffic, causing data to go to the wrong place.\nBy combining firewalls, IDS, IPS, and techniques like network segmentation, organizations can create a strong defense-in-depth strategy. This means that even if one layer of security is breached, there are additional layers in place to protect sensitive information and maintain network integrity.\nContext recap: An Intrusion Detection System, or IDS, is a vital security tool that helps keep our networks safe by monitoring the flow of data. It looks for signs of suspicious activity or known attack patterns, much like how a security camera watches over a building to spot intruders. When the IDS notices something unusual, it sends alerts to the network administrators, who can then take action to investigate and respond to potential threats. On the other hand, we have an Intrusion Prevention System, known as IPS.\nWhy this matters: IDS, IPS & TCP/IP Security helps learners in Cybersecurity connect ideas from Cybersecurity Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "content": "Symmetric encryption is a powerful method used to keep data safe by using a single shared secret key for both encrypting and decrypting information. Imagine you have a special key that locks and unlocks a treasure chest. In the world of cybersecurity, this key is used to protect sensitive information. One of the most popular and trusted symmetric encryption standards is called AES, which stands for Advanced Encryption Standard. When we refer to AES with a 256-bit key, we call it AES-256. This particular encryption method is highly regarded and is used by governments and financial institutions because of its strong security features.\nAES works by dividing data into fixed-size blocks of 128 bits. This means that it processes data in chunks, making it efficient and fast. AES can operate in different modes, such as CBC (Cipher Block Chaining) and GCM (Galois/Counter Mode). The GCM mode is especially interesting because it adds an extra layer of authentication, ensuring that the data has not been tampered with during transmission.\nSymmetric encryption is particularly effective for encrypting large amounts of data. For example, tools like BitLocker and FileVault use symmetric encryption to protect entire hard drives, keeping all the information stored on them secure. However, there is a significant challenge that comes with symmetric encryption: how do two parties securely share the secret key without someone else intercepting it? This is where asymmetric cryptography becomes important. Asymmetric cryptography provides a solution to the key distribution problem, allowing secure communication between parties without the risk of eavesdropping. By understanding both symmetric and asymmetric encryption, we can better protect our data in the digital world.\nContext recap: Symmetric encryption is a powerful method used to keep data safe by using a single shared secret key for both encrypting and decrypting information. Imagine you have a special key that locks and unlocks a treasure chest. In the world of cybersecurity, this key is used to protect sensitive information. One of the most popular and trusted symmetric encryption standards is called AES, which stands for Advanced Encryption Standard.\nWhy this matters: Symmetric Encryption — AES-256 helps learners in Cybersecurity connect ideas from Cybersecurity Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cybersecurity-101-l05-c2",
          "title": "Asymmetric Encryption, PKI & Digital Certificates",
          "content": "Asymmetric encryption is an important and secure way to protect information using two special keys that are mathematically linked: a public key and a private key. The public key is like a mailbox that anyone can use to send you secure messages. When someone wants to send you a message, they use your public key to encrypt it, which means they turn it into a secret code that only you can read. This is because only you have the private key, which is like the key to your mailbox that allows you to unlock and read the messages inside. This method ensures that even if someone intercepts the message while it’s being sent, they won’t be able to read it without your private key.\nOne of the most popular algorithms used for asymmetric encryption is called RSA, which stands for Rivest–Shamir–Adleman. RSA is widely used because it is very secure, and currently, the standard key size for RSA is 2048 bits. This means that the key is very complex and difficult for anyone to guess, making your information safer.\nAsymmetric encryption also helps solve the problem of key distribution. Instead of having to share a secret key with someone, which can be risky, you can share your public key openly with anyone. This way, you keep your private key secret and safe.\nTo help manage and verify these keys, we use a system called Public Key Infrastructure (PKI). PKI connects public keys to specific identities through digital certificates that are issued by trusted organizations known as Certificate Authorities (CAs). When you see a padlock icon in your web browser, it means that the website's certificate has been checked and verified by a CA, ensuring that you are communicating with the right server.\nAdditionally, digital signatures are a combination of hashing and asymmetric encryption. They are used to confirm the identity of the sender and to ensure that the message has not been altered during transmission. This means that when you receive a message with a digital signature, you can trust that it really came from the person who sent it and that it hasn’t been changed along the way.\nContext recap: Asymmetric encryption is an important and secure way to protect information using two special keys that are mathematically linked: a public key and a private key. The public key is like a mailbox that anyone can use to send you secure messages. When someone wants to send you a message, they use your public key to encrypt it, which means they turn it into a secret code that only you can read. This is because only you have the private key, which is like the key to your mailbox that allows you to unlock and read the messages inside.\nWhy this matters: Asymmetric Encryption, PKI & Digital Certificates helps learners in Cybersecurity connect ideas from Cybersecurity Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cybersecurity-101-l05-c3",
          "title": "Hashing, TLS & Putting It All Together",
          "content": "A cryptographic hash function is a special tool used in cybersecurity, and examples include SHA-256 and SHA-3. These functions take any kind of input, like a password or a file, and create a fixed-size output known as a digest. One of the coolest things about hash functions is that they are one-way. This means that once you create a hash from your input, you cannot reverse it to find out what the original input was. This feature helps keep information secure.\nHash functions are also deterministic, which means that if you input the same data multiple times, you will always get the same output. Additionally, they are very sensitive to changes. If you change even a tiny part of the input, the resulting hash will look completely different. This property is crucial for ensuring that data has not been altered or tampered with.\nHashes are used in many important ways. For example, they help verify the integrity of files, ensuring that they haven't been changed. They are also used to securely store passwords, often with additional techniques like bcrypt or Argon2 salting, which adds an extra layer of security. Furthermore, hashes play a key role in creating digital signatures, which help confirm the authenticity of messages and documents.\nNow, let's talk about TLS, which stands for Transport Layer Security. TLS is a protocol that helps keep our online communications safe. During the TLS handshake process, the client (like your web browser) and the server (like a website) use asymmetric cryptography, such as RSA or ECDHE, to exchange a symmetric session key. This session key is then used to encrypt all the data that is sent back and forth between them.\nMoreover, hash-based Message Authentication Codes (MACs) are used to ensure that the data remains intact and has not been altered during transmission. This combination of methods takes advantage of the strengths of both asymmetric and symmetric encryption. As a result, it provides the security of asymmetric encryption while also being fast, which is why every HTTPS connection relies on this hybrid approach. Understanding these concepts is essential for anyone interested in cybersecurity, as they form the backbone of secure online communication.\nContext recap: A cryptographic hash function is a special tool used in cybersecurity, and examples include SHA-256 and SHA-3. These functions take any kind of input, like a password or a file, and create a fixed-size output known as a digest. One of the coolest things about hash functions is that they are one-way. This means that once you create a hash from your input, you cannot reverse it to find out what the original input was.\nWhy this matters: Hashing, TLS & Putting It All Together helps learners in Cybersecurity connect ideas from Cybersecurity Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "content": "Social engineering is a clever tactic that some individuals use to trick others into revealing sensitive information. Instead of relying on technology to break into systems, these tricksters exploit human psychology, taking advantage of how we think and feel. One common method is called pretexting, where someone might impersonate a member of the IT department and say something like, 'I need your username and password to fix your account.' This creates a false scenario that pressures the victim into complying.\nAnother technique is known as baiting. In this case, attackers might leave infected USB drives in public places, such as parking lots, hoping someone will pick them up and plug them into their computer. They may also offer free downloads that seem appealing but actually contain harmful software designed to compromise your device.\nTailgating is another tactic where an unauthorized person sneaks in behind someone who has legitimate access to a secure area. This can happen when someone follows an employee through a locked door without having their own access credentials. Lastly, there's quid pro quo, where the attacker offers a service in exchange for information. For example, they might say, 'I can help you with tech support if you let me install this program on your computer.'\nThese tactics are effective because people often have a natural tendency to trust authority figures, feel obligated to return favors, or act quickly when they feel pressured. To protect ourselves from these kinds of attacks, it is essential to engage in security awareness training and foster a culture where it is perfectly acceptable to double-check and verify the identity of those we are communicating with. By being cautious and informed, we can better safeguard our personal information and digital assets.\nContext recap: Social engineering is a clever tactic that some individuals use to trick others into revealing sensitive information. Instead of relying on technology to break into systems, these tricksters exploit human psychology, taking advantage of how we think and feel. One common method is called pretexting, where someone might impersonate a member of the IT department and say something like, 'I need your username and password to fix your account.' This creates a false scenario that pressures the victim into complying. Another technique is known as baiting.\nWhy this matters: Social Engineering Tactics helps learners in Cybersecurity connect ideas from Cybersecurity Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "cybersecurity-101-l07-c1b",
          "title": "Elicitation & Pretexting: The Social Engineer's Core Skills",
          "content": "Elicitation is a fascinating skill that allows someone to gather information from another person without them even realizing it. This often occurs during what seems like a casual conversation. For instance, a social engineer might use techniques such as giving compliments to make the other person feel good, like saying, 'I've heard your team is the best at this!' This can create a positive atmosphere and make the person more willing to share information. Another technique involves making a statement that is incorrect, which encourages the person to correct it. For example, if someone asks, 'You use Oracle, right?' it might prompt the other person to respond, 'No, we actually use Postgres.' This way, the social engineer can learn valuable information while making it seem like a normal chat.\nNow, let’s talk about pretexting, which is an even more advanced technique. Pretexting involves creating a completely fake identity. This means the social engineer has to come up with a believable story and even use props to support their act. For example, they might carry a fake badge or wear a branded shirt that makes them look official. Additionally, they need to use the right body language and technical jargon to sound credible. Imagine a social engineer pretending to be an IT auditor from a well-known consulting firm. They might walk around with a clipboard, use technical terms that make them sound knowledgeable, and reference a recent email from the Chief Technology Officer (CTO) to add to their credibility. By doing this, they create a strong impression that makes it easier for them to gain the trust of their target.\nThe most important question that the person being approached has to answer, often without even realizing it, is: 'Why should I help this person?' This question is crucial because if the target feels that there is a good reason to assist the social engineer, they are more likely to share sensitive information. Understanding these techniques is essential for recognizing when someone might be trying to manipulate you into giving away information that could be harmful. Always be cautious and think critically about the requests you receive, especially if they come from someone you do not know well.\nContext recap: Elicitation is a fascinating skill that allows someone to gather information from another person without them even realizing it. This often occurs during what seems like a casual conversation. For instance, a social engineer might use techniques such as giving compliments to make the other person feel good, like saying, 'I've heard your team is the best at this!' This can create a positive atmosphere and make the person more willing to share information. Another technique involves making a statement that is incorrect, which encourages the person to correct it.\nWhy this matters: Elicitation & Pretexting: The Social Engineer's Core Skills helps learners in Cybersecurity connect ideas from Cybersecurity Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cybersecurity-101-l07-c1c",
          "title": "Cialdini's Six Weapons of Influence in Social Engineering",
          "content": "Robert Cialdini, a respected psychologist, discovered six key principles that can influence how people think and act. These principles are often used by social engineers, who are individuals that try to trick others into giving away sensitive information. Understanding these principles can help you recognize when someone might be trying to manipulate you.\nThe first principle is called Reciprocity. This means that when someone does something nice for us, we often feel the need to return the favor. For instance, if a colleague brings in coffee for the team, it might make you feel like you owe them something in return. This sense of obligation can be used by social engineers to gain your trust.\nThe second principle is Commitment and Consistency. People generally like to keep their promises and stick to their commitments. If you agree to help someone with a task, you might feel pressured to follow through, even if you later realize it’s not a good idea.\nThe third principle is Social Proof. This principle suggests that we often look to others for guidance on how to behave. For example, if someone says, 'The team upstairs already let me in,' you might feel inclined to follow their lead, thinking that if others did it, it must be okay.\nThe fourth principle is Authority. People are more likely to listen to and comply with someone they perceive as an authority figure. This could be someone in a uniform or someone who mentions they have a high-ranking position in a company.\nThe fifth principle is Liking. We are more easily influenced by people we find likable or friendly. If someone seems nice and approachable, we might be more willing to trust them.\nLastly, there’s Scarcity. This principle means that we tend to value things more when we think they are limited or hard to get. For example, if someone says, 'I only have twenty minutes to help you,' it can create a sense of urgency that might pressure you into making a quick decision.\nAdvanced social engineering attacks often combine several of these principles at once, making it very difficult for someone to say no. To protect yourself and your organization from these tactics, it’s crucial to be aware of these principles. Having clear policies in place that allow employees to verify identities without feeling embarrassed is essential. Additionally, providing realistic training can help employees learn how to spot these social engineering attempts and build what security experts call a 'human firewall.' This means creating a culture of awareness and vigilance that helps everyone stay safe online.\nContext recap: Robert Cialdini, a respected psychologist, discovered six key principles that can influence how people think and act. These principles are often used by social engineers, who are individuals that try to trick others into giving away sensitive information. Understanding these principles can help you recognize when someone might be trying to manipulate you. The first principle is called Reciprocity.\nWhy this matters: Cialdini's Six Weapons of Influence in Social Engineering helps learners in Cybersecurity connect ideas from Cybersecurity Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cybersecurity-101-l07-c2",
          "title": "Phishing Variants & Real-World Attacks",
          "content": "Phishing is a technique used by cybercriminals to deceive individuals into revealing their personal information, such as passwords or credit card numbers. This often happens through mass emails that appear to be from well-known and trusted companies. For example, you might receive an email that says, 'Your account has been locked, click here to verify your information.' These messages are designed to create a sense of urgency, making you feel like you need to act quickly.\nThere are different types of phishing attacks. One is called spear phishing, which is more targeted. Instead of sending out a generic email to many people, attackers focus on specific individuals. They gather personal information from social media profiles to make their messages seem more believable. For instance, they might mention a recent event in your life to gain your trust.\nAnother variant is whaling, which specifically targets high-level executives, such as CEOs. These attacks often involve very important messages, like saying, 'Here is the Q4 board presentation you requested.'\nVishing is a type of phishing that occurs over the phone, where attackers might call you pretending to be from a legitimate company. Smishing, on the other hand, involves sending deceptive text messages.\nOne particularly serious type of phishing is called Business Email Compromise (BEC). In this scenario, an attacker impersonates a CEO or another high-ranking official to trick the finance department into transferring money. The FBI has reported that BEC has led to losses exceeding $50 billion globally.\nA notable example of social engineering was the 2020 Twitter hack, where attackers used phone calls to manipulate employees into giving them access to internal tools.\nTo protect yourself, be aware of warning signs. Look out for messages that create a sense of urgency, unexpected attachments, URLs that don’t match the official company website, and requests to bypass normal security procedures. Always verify the source before clicking on links or providing personal information.\nContext recap: Phishing is a technique used by cybercriminals to deceive individuals into revealing their personal information, such as passwords or credit card numbers. This often happens through mass emails that appear to be from well-known and trusted companies. For example, you might receive an email that says, 'Your account has been locked, click here to verify your information.' These messages are designed to create a sense of urgency, making you feel like you need to act quickly. There are different types of phishing attacks.\nWhy this matters: Phishing Variants & Real-World Attacks helps learners in Cybersecurity connect ideas from Cybersecurity Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cybersecurity-101-l07-c3",
          "title": "Malware Families & APT Kill Chains",
          "content": "Malware is a type of harmful software that is created to cause damage, disrupt normal operations, or steal sensitive information. It comes in various forms, each with its own characteristics. One common type is a virus, which attaches itself to files and requires the user to take action, like opening an infected file, to spread to other computers. Another type is a worm, which can replicate itself across computer networks without needing any help from users. A well-known example is the WannaCry worm, which took advantage of a security flaw called EternalBlue to infect over 200,000 computers around the world in a matter of days.\nTrojans are another form of malware that pretend to be legitimate software. They trick users into downloading and installing them, which can lead to serious security breaches. Ransomware is particularly dangerous because it encrypts files on a victim's computer and demands payment in cryptocurrency to unlock them. A notable incident involving ransomware was the Colonial Pipeline attack, which caused significant disruptions to fuel supplies on the East Coast of the United States.\nRootkits are a more stealthy type of malware that hide deep within an operating system, allowing attackers to maintain ongoing access to the system without being detected.\nTo better understand how these attacks happen, we can look at the stages of an Advanced Persistent Threat (APT) lifecycle, which is often illustrated by the Lockheed Martin Cyber Kill Chain. This model includes several stages: reconnaissance (gathering information), weaponization (creating the malware), delivery (sending the malware), exploitation (taking advantage of a vulnerability), installation (setting up the malware), command-and-control (C2) (communicating with the compromised system), and actions on objectives (carrying out the attack). By understanding these stages, cybersecurity defenders can take proactive measures to block attacks at any point in the process. For example, they can filter out suspicious emails to prevent malware delivery or monitor network activity for unusual behavior that might indicate an ongoing attack.\nAdditionally, Common Vulnerabilities and Exposures (CVEs) are publicly known security flaws that can be exploited by attackers. The Common Vulnerability Scoring System (CVSS) helps to rate the severity of these vulnerabilities on a scale from 0 to 10, allowing organizations to prioritize their responses to potential threats.\nContext recap: Malware is a type of harmful software that is created to cause damage, disrupt normal operations, or steal sensitive information. It comes in various forms, each with its own characteristics. One common type is a virus, which attaches itself to files and requires the user to take action, like opening an infected file, to spread to other computers. Another type is a worm, which can replicate itself across computer networks without needing any help from users.\nWhy this matters: Malware Families & APT Kill Chains helps learners in Cybersecurity connect ideas from Cybersecurity Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "content": "The NIST Incident Response Lifecycle is an important framework that helps organizations effectively respond to security incidents. It is divided into four main phases, each playing a crucial role in managing and mitigating security threats.\nThe first phase is Preparation. In this stage, organizations develop clear policies and procedures to guide their response efforts. They also form a specialized team known as the Computer Security Incident Response Team (CSIRT), which is responsible for handling security incidents. Additionally, organizations implement various monitoring tools that help detect potential threats. To ensure everyone is ready, they conduct practice exercises, often called tabletop exercises, where team members simulate responses to different types of incidents. This preparation is essential for building a strong foundation for effective incident response.\nThe second phase is Detection and Analysis. During this phase, Security Information and Event Management (SIEM) platforms play a key role. These platforms analyze logs from various sources, such as firewalls, endpoints, and applications, to identify any unusual activities that may indicate a security incident. Teams assess the severity of these incidents to determine whether they are false alarms, minor issues, or serious breaches that require immediate attention. This careful analysis helps organizations prioritize their response efforts.\nThe third phase is Containment, Eradication, and Recovery. When a security incident occurs, it is crucial to act quickly. This phase involves isolating affected systems to prevent further damage. For example, organizations may disable network ports or block certain IP addresses. After containment, the next step is eradication, which means removing any malware and fixing the vulnerabilities that were exploited. Finally, recovery involves restoring systems from clean backups and ensuring that everything is secure before reconnecting to the network. This step is vital to ensure that the organization can return to normal operations safely.\nThe final phase is Post-Incident Activity. In this phase, teams conduct a thorough review of the incident without placing blame on individuals. This blameless retrospective allows teams to learn from what happened and improve their response strategies. They create an incident report that documents the details of the incident and the response efforts. Additionally, teams update their response plans, known as playbooks, to incorporate lessons learned. Sharing information about the attack, such as Indicators of Compromise (IOCs), with the broader community helps enhance overall security and preparedness against future incidents. By following the NIST Incident Response Lifecycle, organizations can better protect themselves and respond effectively to security challenges.\nContext recap: The NIST Incident Response Lifecycle is an important framework that helps organizations effectively respond to security incidents. It is divided into four main phases, each playing a crucial role in managing and mitigating security threats. The first phase is Preparation. In this stage, organizations develop clear policies and procedures to guide their response efforts.\nWhy this matters: The NIST Incident Response Lifecycle helps learners in Cybersecurity connect ideas from Cybersecurity Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cybersecurity-101-l08-c2",
          "title": "SOC, SIEM & Threat Intelligence",
          "content": "A Security Operations Center, often referred to as a SOC, plays a vital role in keeping an organization safe from cyber threats. Think of it as the main control room where security experts monitor everything that happens in the digital environment of the organization. These analysts work tirelessly, 24 hours a day, 7 days a week, to investigate alerts that could indicate a security issue. They are like detectives, always on the lookout for anything suspicious.\nTo help them in their work, they use powerful tools called Security Information and Event Management (SIEM) systems. Some popular examples of these tools include Splunk, Microsoft Sentinel, and IBM QRadar. These systems are capable of collecting and analyzing millions of log entries every single day. Logs are records of events that happen within the organization's systems, and analyzing them helps the analysts understand what is normal and what might be a sign of trouble.\nThe analysts create specific rules to detect unusual activities. For instance, they might set up alerts for a sudden spike in failed login attempts from an unfamiliar IP address, which could suggest that someone is trying to break into the system. They also look for strange movements between servers or any signs that data might be getting stolen.\nAdditionally, they rely on threat intelligence feeds, which are like news updates about the latest cyber threats. Resources such as MITRE ATT&CK and ISAC bulletins provide crucial information about Indicators of Compromise (IOCs). These IOCs include things like malicious IP addresses or file hashes that are known to be harmful. By using this information, SIEM systems can automatically identify potential threats, which helps the analysts respond more quickly and effectively. This process is essential because the faster they can detect a threat, the better they can protect the organization from harm.\nContext recap: A Security Operations Center, often referred to as a SOC, plays a vital role in keeping an organization safe from cyber threats. Think of it as the main control room where security experts monitor everything that happens in the digital environment of the organization. These analysts work tirelessly, 24 hours a day, 7 days a week, to investigate alerts that could indicate a security issue. They are like detectives, always on the lookout for anything suspicious.\nWhy this matters: SOC, SIEM & Threat Intelligence helps learners in Cybersecurity connect ideas from Cybersecurity Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cybersecurity-101-l08-c3",
          "title": "Penetration Testing & Proactive Defense",
          "content": "Penetration testing, commonly known as pen testing, is a crucial practice in cybersecurity that helps organizations identify weaknesses in their systems before malicious hackers can take advantage of them. This process mimics real-world attacks and is structured in several important stages that resemble the kill chain, which is a model used to understand the steps of an attack.\nThe first stage is reconnaissance, where testers gather information about the target system. This can involve using techniques like Open Source Intelligence (OSINT) and tools such as Nmap to scan for open ports and services. Next comes enumeration, where testers identify specific services running on the system and their versions. This information is vital for understanding potential vulnerabilities.\nAfter gathering this data, the next phase is exploitation. Here, testers attempt to gain unauthorized access to the system using specialized tools like Metasploit or Burp Suite. If they successfully gain access, they move on to post-exploitation activities. This can include escalating privileges, which means gaining higher levels of access, or lateral movement, which involves navigating through the network to find other vulnerable systems.\nOnce the testing is complete, the final step is reporting. Testers compile a detailed report that outlines their findings, assigns risk ratings to the vulnerabilities discovered, and provides recommendations for how to fix these issues.\nPen tests can be categorized into three types: black-box testing, where testers have no prior knowledge of the system; white-box testing, where they have full access to the source code; and grey-box testing, which provides partial information. Additionally, many organizations use bug bounty programs to encourage external researchers to find vulnerabilities by offering rewards for their discoveries.\nWhile automated vulnerability scanning tools like Nessus and Qualys can help identify known vulnerabilities quickly, they often lack the creativity and insight that skilled pen testers bring to the table. By combining both scanning and penetration testing, organizations can create a proactive vulnerability management program that aligns with best practices, such as those outlined by the OWASP Top 10, which is a list of the most critical web application security risks.\nContext recap: Penetration testing, commonly known as pen testing, is a crucial practice in cybersecurity that helps organizations identify weaknesses in their systems before malicious hackers can take advantage of them. This process mimics real-world attacks and is structured in several important stages that resemble the kill chain, which is a model used to understand the steps of an attack. The first stage is reconnaissance, where testers gather information about the target system. This can involve using techniques like Open Source Intelligence (OSINT) and tools such as Nmap to scan for open ports and services.\nWhy this matters: Penetration Testing & Proactive Defense helps learners in Cybersecurity connect ideas from Cybersecurity Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
