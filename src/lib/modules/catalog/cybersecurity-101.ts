import type { LearningModule } from "@/lib/modules/types";

export const Cybersecurity101Module: LearningModule = {
  id: "cybersecurity-101",
  title: "Cybersecurity Fundamentals",
  description:
    "Protect yourself and your organization in the digital world. Learn the CIA Triad, common cyber threats, authentication, network security, web application security, and incident response — the essential skills for staying safe online.",
  subject: "Cybersecurity",
  tags: ["curriculum", "interactive", "technology", "security"],
  minAge: 14,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es"],
  learningObjectives: [
    "Explain the CIA Triad (Confidentiality, Integrity, Availability) and apply it to security decisions",
    "Identify common cyber threats including phishing, malware, ransomware, and social engineering",
    "Implement strong authentication and access control practices",
    "Describe network security fundamentals including firewalls, encryption, and VPNs",
    "Recognize web application vulnerabilities (SQL injection, XSS, CSRF)",
    "Follow incident response procedures when a security breach occurs"
  ],
  lessons: [
    /* ── L01 The CIA Triad ── */
    {
      id: "cybersecurity-101-l01",
      title: "The CIA Triad",
      type: "video",
      duration: 11,
      chunks: [
        { id: "cybersecurity-101-l01-c1", title: "Confidentiality", content: "The CIA Triad is the foundation of cybersecurity. Confidentiality means only authorized people can access sensitive information. Think of it as a locked diary — only you should read it. Methods to protect confidentiality: encryption (scrambling data so only keyholders can read it), access controls (passwords, permissions), and data classification (labeling information as public, internal, confidential, or top secret). Breaches of confidentiality include data leaks and unauthorized access." },
        { id: "cybersecurity-101-l01-c2", title: "Integrity", content: "Integrity means data is accurate, complete, and hasn't been tampered with. If someone changes your bank balance without authorization, that's an integrity violation. Protection methods: hashing (creating a digital fingerprint of data — if the hash changes, the data was altered), digital signatures (proving who sent a message and that it wasn't changed), version control, and checksums. The 2020 SolarWinds attack was a massive integrity breach — hackers inserted malicious code into trusted software updates." },
        { id: "cybersecurity-101-l01-c3", title: "Availability", content: "Availability means systems and data are accessible when authorized users need them. A website that crashes during Black Friday fails availability. Threats to availability: DDoS attacks (flooding a server with traffic until it crashes), hardware failures, natural disasters, and ransomware (encrypting files so users can't access them). Protection: redundancy (backup systems), load balancing (distributing traffic), disaster recovery plans, and regular backups. The 2021 Colonial Pipeline ransomware attack shut down fuel supply to the US East Coast — a catastrophic availability failure." }
      ],
      flashcards: [
        { id: "cybersecurity-101-l01-f1", front: "The three pillars of cybersecurity", back: "CIA Triad: Confidentiality, Integrity, Availability" },
        { id: "cybersecurity-101-l01-f2", front: "Only authorized people can access sensitive information", back: "Confidentiality" },
        { id: "cybersecurity-101-l01-f3", front: "Data is accurate and hasn't been tampered with", back: "Integrity" },
        { id: "cybersecurity-101-l01-f4", front: "Systems are accessible when users need them", back: "Availability" }
      ],
      questions: [
        { id: "cybersecurity-101-l01-q1", text: "A hacker modifies a company's financial records without authorization. Which CIA principle is violated?", options: [{ id: "a", text: "Integrity" }, { id: "b", text: "Confidentiality" }, { id: "c", text: "Availability" }, { id: "d", text: "All three equally" }], correctOptionId: "a", explanation: "Unauthorized data modification is an integrity violation — the data is no longer trustworthy!" },
        { id: "cybersecurity-101-l01-q2", text: "Encryption primarily protects", options: [{ id: "a", text: "Confidentiality" }, { id: "b", text: "Availability" }, { id: "c", text: "Integrity" }, { id: "d", text: "Performance" }], correctOptionId: "a", explanation: "Encryption scrambles data so only authorized keyholders can read it — that's confidentiality!" },
        { id: "cybersecurity-101-l01-q3", text: "A DDoS attack that crashes a website violates", options: [{ id: "a", text: "Availability" }, { id: "b", text: "Confidentiality" }, { id: "c", text: "Integrity" }, { id: "d", text: "Authentication" }], correctOptionId: "a", explanation: "DDoS makes the system unavailable to legitimate users — an availability attack!" }
      ],
      interactiveActivities: [{ id: "cybersecurity-101-l01-act1", type: "sorting_buckets", title: "CIA Triad classifier", description: "Sort scenarios: Confidentiality (leaked passwords, unauthorized file access), Integrity (modified records, altered emails), Availability (server crash, ransomware lockout, DDoS attack)." }]
    },

    /* ── L02 Common Threats ── */
    {
      id: "cybersecurity-101-l02",
      title: "Common Cyber Threats",
      type: "video",
      duration: 13,
      chunks: [
        { id: "cybersecurity-101-l02-c1", title: "Phishing and Social Engineering", content: "Social engineering manipulates people into revealing confidential information. Phishing is the most common type — fake emails or messages that look legitimate, tricking you into clicking malicious links or entering credentials on fake websites. Spear phishing targets specific individuals (e.g., 'Hi Sarah, here's the Q4 report you asked for'). The 2020 Twitter hack used social engineering — attackers called Twitter employees pretending to be IT support and gained access to internal tools, compromising celebrity accounts including Obama and Elon Musk." },
        { id: "cybersecurity-101-l02-c2", title: "Malware: Viruses, Worms, and Ransomware", content: "Malware is malicious software designed to harm or exploit systems. Viruses attach to files and spread when you open them. Worms spread automatically across networks without user interaction. Trojans disguise themselves as legitimate software. Ransomware encrypts your files and demands payment (usually cryptocurrency) for the decryption key. The 2017 WannaCry ransomware infected 200,000+ computers across 150 countries in just days, causing billions in damage. Prevention: keep software updated, use antivirus, don't download from untrusted sources." },
        { id: "cybersecurity-101-l02-c3", title: "Man-in-the-Middle and Insider Threats", content: "Man-in-the-Middle (MitM) attacks intercept communication between two parties. Imagine Alice sends a message to Bob, but Eve captures and potentially alters it in transit. This often happens on unsecured public Wi-Fi. Prevention: use HTTPS (look for the lock icon), VPNs, and avoid public Wi-Fi for sensitive activities. Insider threats come from within the organization — a disgruntled employee might steal data or sabotage systems. Insider threats account for roughly 25% of all data breaches because insiders already have authorized access." }
      ],
      flashcards: [
        { id: "cybersecurity-101-l02-f1", front: "Fake emails/messages designed to trick users into revealing credentials", back: "Phishing" },
        { id: "cybersecurity-101-l02-f2", front: "Malware that encrypts files and demands payment for the decryption key", back: "Ransomware" },
        { id: "cybersecurity-101-l02-f3", front: "Attack that intercepts communication between two parties", back: "Man-in-the-Middle (MitM)" },
        { id: "cybersecurity-101-l02-f4", front: "Manipulating people into revealing confidential information", back: "Social engineering" }
      ],
      questions: [
        { id: "cybersecurity-101-l02-q1", text: "An email pretending to be from your bank asking you to 'verify your account' is an example of", options: [{ id: "a", text: "Phishing" }, { id: "b", text: "A DDoS attack" }, { id: "c", text: "A firewall breach" }, { id: "d", text: "Encryption" }], correctOptionId: "a", explanation: "Phishing uses fake messages impersonating trusted entities to steal credentials!" },
        { id: "cybersecurity-101-l02-q2", text: "The WannaCry attack in 2017 was an example of", options: [{ id: "a", text: "Ransomware" }, { id: "b", text: "Phishing" }, { id: "c", text: "Social engineering" }, { id: "d", text: "A firewall" }], correctOptionId: "a", explanation: "WannaCry was ransomware that encrypted files on 200,000+ computers and demanded Bitcoin payment!" },
        { id: "cybersecurity-101-l02-q3", text: "Using HTTPS and VPNs helps prevent", options: [{ id: "a", text: "Man-in-the-Middle attacks" }, { id: "b", text: "Physical theft" }, { id: "c", text: "Power outages" }, { id: "d", text: "Hardware failures" }], correctOptionId: "a", explanation: "HTTPS and VPNs encrypt your connection, making it much harder for attackers to intercept your data!" }
      ],
      interactiveActivities: [{ id: "cybersecurity-101-l02-act1", type: "sorting_buckets", title: "Threat identifier", description: "Classify: Phishing (fake bank email, spoofed login page), Malware (virus in attachment, ransomware popup), Social Engineering (phone call pretending to be IT, tailgating into building), Insider Threat (employee copying files before quitting)." }]
    },

    /* ── L03 Authentication and Access Control ── */
    {
      id: "cybersecurity-101-l03",
      title: "Authentication & Access Control",
      type: "video",
      duration: 12,
      chunks: [
        { id: "cybersecurity-101-l03-c1", title: "Authentication: Proving Who You Are", content: "Authentication verifies your identity — proving you are who you claim to be. Three factors: Something you KNOW (password, PIN), Something you HAVE (phone, security key, smart card), Something you ARE (fingerprint, face scan, iris). Multi-Factor Authentication (MFA) combines two or more factors. Using a password (know) + a code texted to your phone (have) is MFA. MFA blocks 99.9% of automated attacks according to Microsoft." },
        { id: "cybersecurity-101-l03-c2", title: "Password Security", content: "Weak passwords are the #1 security vulnerability. '123456' and 'password' are still the most common passwords worldwide. Strong password rules: 12+ characters minimum, mix uppercase/lowercase/numbers/symbols, never reuse passwords across sites, use a password manager (like Bitwarden or 1Password). Passphrases are even better: 'correct-horse-battery-staple' is stronger than 'P@$$w0rd!' because length matters more than complexity." },
        { id: "cybersecurity-101-l03-c3", title: "Access Control Models", content: "Access control determines WHAT you can do after authentication. The Principle of Least Privilege: give users only the minimum access they need to do their job — nothing more. Access control models: Role-Based Access Control (RBAC) — permissions assigned by job role (e.g., 'Editor' can edit, 'Viewer' can only read). Mandatory Access Control (MAC) — strict hierarchical classifications (e.g., Top Secret, Secret, Confidential). Discretionary Access Control (DAC) — the owner decides who gets access (e.g., sharing a Google Doc)." }
      ],
      flashcards: [
        { id: "cybersecurity-101-l03-f1", front: "Three factors of authentication", back: "Something you Know, Something you Have, Something you Are" },
        { id: "cybersecurity-101-l03-f2", front: "Combining two or more authentication factors", back: "Multi-Factor Authentication (MFA)" },
        { id: "cybersecurity-101-l03-f3", front: "Give users only the minimum access they need", back: "Principle of Least Privilege" },
        { id: "cybersecurity-101-l03-f4", front: "Access control based on job roles", back: "Role-Based Access Control (RBAC)" }
      ],
      questions: [
        { id: "cybersecurity-101-l03-q1", text: "A fingerprint scan is an example of which authentication factor?", options: [{ id: "a", text: "Something you ARE" }, { id: "b", text: "Something you KNOW" }, { id: "c", text: "Something you HAVE" }, { id: "d", text: "Something you DO" }], correctOptionId: "a", explanation: "Biometrics (fingerprint, face, iris) are 'something you are' — unique physical characteristics!" },
        { id: "cybersecurity-101-l03-q2", text: "MFA blocks approximately what percentage of automated attacks?", options: [{ id: "a", text: "99.9%" }, { id: "b", text: "50%" }, { id: "c", text: "75%" }, { id: "d", text: "25%" }], correctOptionId: "a", explanation: "Microsoft research shows MFA blocks 99.9% of automated credential attacks!" },
        { id: "cybersecurity-101-l03-q3", text: "The Principle of Least Privilege means", options: [{ id: "a", text: "Users get only the minimum access needed for their job" }, { id: "b", text: "Everyone gets admin access" }, { id: "c", text: "Passwords should be short" }, { id: "d", text: "No one needs authentication" }], correctOptionId: "a", explanation: "Least privilege minimizes the damage if an account is compromised!" }
      ],
      interactiveActivities: [{ id: "cybersecurity-101-l03-act1", type: "matching_pairs", title: "Auth factor matcher", description: "Match: Password → Know, Security key → Have, Iris scan → Are, PIN code → Know, Smartphone app → Have, Fingerprint → Are." }]
    },

    /* ── L04 Cybersecurity Checkpoint ── */
    {
      id: "cybersecurity-101-l04",
      title: "Cybersecurity Checkpoint",
      type: "quiz",
      duration: 8,
      questions: [
        { id: "cybersecurity-101-l04-q1", text: "CIA in cybersecurity stands for", options: [{ id: "a", text: "Confidentiality, Integrity, Availability" }, { id: "b", text: "Central Intelligence Agency" }, { id: "c", text: "Computer, Internet, Applications" }, { id: "d", text: "Code, Install, Authenticate" }], correctOptionId: "a", explanation: "The CIA Triad is the foundation of all cybersecurity!" },
        { id: "cybersecurity-101-l04-q2", text: "The 2021 Colonial Pipeline attack was primarily", options: [{ id: "a", text: "Ransomware that disrupted fuel supply" }, { id: "b", text: "A phishing email" }, { id: "c", text: "A social engineering call" }, { id: "d", text: "A password leak" }], correctOptionId: "a", explanation: "Ransomware shut down Colonial Pipeline, disrupting fuel supply across the US East Coast!" },
        { id: "cybersecurity-101-l04-q3", text: "A strong password should be at least", options: [{ id: "a", text: "12 characters long" }, { id: "b", text: "4 characters long" }, { id: "c", text: "6 characters long" }, { id: "d", text: "Only numbers" }], correctOptionId: "a", explanation: "12+ characters with a mix of types — or better yet, use a long passphrase!" }
      ],
      flashcards: [
        { id: "cybersecurity-101-l04-f1", front: "CIA Triad", back: "Confidentiality, Integrity, Availability" },
        { id: "cybersecurity-101-l04-f2", front: "MFA blocks 99.9% of", back: "Automated credential attacks" },
        { id: "cybersecurity-101-l04-f3", front: "Most common attack vector", back: "Phishing (social engineering via email)" },
        { id: "cybersecurity-101-l04-f4", front: "'correct-horse-battery-staple' is stronger than 'P@$$w0rd!' because", back: "Length matters more than complexity" }
      ]
    },

    /* ── L05 Network Security ── */
    {
      id: "cybersecurity-101-l05",
      title: "Network Security",
      type: "video",
      duration: 13,
      chunks: [
        { id: "cybersecurity-101-l05-c1", title: "Firewalls and Network Perimeters", content: "A firewall is a security barrier between your network and the internet — it filters incoming and outgoing traffic based on rules. Think of it as a bouncer at a nightclub: only approved traffic gets in. Types: packet-filtering (checks source/destination), stateful inspection (tracks active connections), and next-generation firewalls (NGFW, which inspect application-level data). A DMZ (Demilitarized Zone) is a buffer network between the public internet and your private network, hosting public-facing services like web servers." },
        { id: "cybersecurity-101-l05-c2", title: "Encryption and VPNs", content: "Encryption converts readable data (plaintext) into scrambled text (ciphertext) using an algorithm and key. Symmetric encryption uses one key for both encrypting and decrypting (AES — used for data at rest). Asymmetric encryption uses a key pair — public key to encrypt, private key to decrypt (RSA — used for secure communication). A VPN (Virtual Private Network) creates an encrypted tunnel between your device and a server, protecting your traffic on untrusted networks. HTTPS uses TLS encryption to secure web traffic." },
        { id: "cybersecurity-101-l05-c3", title: "Wireless Security", content: "Wi-Fi networks need security protocols. WPA3 is the current standard (strongest). WPA2 is still acceptable. WEP is broken — never use it. Public Wi-Fi (coffee shops, airports) is dangerous because attackers can easily intercept traffic. Best practices: use WPA3 at home with a strong passphrase, avoid public Wi-Fi for banking/email (or use a VPN), disable auto-connect to open networks, and keep your router firmware updated. A rogue access point is a fake Wi-Fi hotspot set up by an attacker (e.g., 'Free Airport WiFi')." }
      ],
      flashcards: [
        { id: "cybersecurity-101-l05-f1", front: "Security barrier that filters network traffic based on rules", back: "Firewall" },
        { id: "cybersecurity-101-l05-f2", front: "Encryption using one shared key for both encrypt/decrypt", back: "Symmetric encryption (e.g., AES)" },
        { id: "cybersecurity-101-l05-f3", front: "Encrypted tunnel protecting traffic on untrusted networks", back: "VPN (Virtual Private Network)" },
        { id: "cybersecurity-101-l05-f4", front: "Current strongest Wi-Fi security protocol", back: "WPA3" }
      ],
      questions: [
        { id: "cybersecurity-101-l05-q1", text: "A firewall's primary function is to", options: [{ id: "a", text: "Filter network traffic based on security rules" }, { id: "b", text: "Encrypt all files on a hard drive" }, { id: "c", text: "Create Wi-Fi passwords" }, { id: "d", text: "Scan for viruses" }], correctOptionId: "a", explanation: "Firewalls are gatekeepers — they allow or block traffic based on predefined rules!" },
        { id: "cybersecurity-101-l05-q2", text: "HTTPS protects web traffic using", options: [{ id: "a", text: "TLS encryption" }, { id: "b", text: "WEP protocol" }, { id: "c", text: "Firewall rules" }, { id: "d", text: "Password hashing" }], correctOptionId: "a", explanation: "HTTPS = HTTP + TLS encryption = secure web browsing (look for the lock icon)!" },
        { id: "cybersecurity-101-l05-q3", text: "Which Wi-Fi protocol is broken and should never be used?", options: [{ id: "a", text: "WEP" }, { id: "b", text: "WPA3" }, { id: "c", text: "WPA2" }, { id: "d", text: "HTTPS" }], correctOptionId: "a", explanation: "WEP can be cracked in minutes — WPA2 or WPA3 are the minimum acceptable standards!" }
      ],
      interactiveActivities: [{ id: "cybersecurity-101-l05-act1", type: "sorting_buckets", title: "Secure or insecure?", description: "Sort: Secure (WPA3 home Wi-Fi, VPN on public Wi-Fi, HTTPS website) vs. Insecure (WEP encryption, open public Wi-Fi, HTTP website, 'Free Airport WiFi' hotspot)." }]
    },

    /* ── L06 Web Application Security ── */
    {
      id: "cybersecurity-101-l06",
      title: "Web Application Security",
      type: "video",
      duration: 12,
      chunks: [
        { id: "cybersecurity-101-l06-c1", title: "SQL Injection", content: "SQL injection (SQLi) is when an attacker inserts malicious SQL code into a web form that interacts with a database. Example: a login form where instead of a username, the attacker types: ' OR '1'='1' -- This tricks the database into returning all records, bypassing authentication. It's like telling a librarian: 'Give me the book titled [or just give me everything].' Prevention: use parameterized queries (prepared statements), input validation, and never trust user input. SQLi remains in the OWASP Top 10 most critical web vulnerabilities." },
        { id: "cybersecurity-101-l06-c2", title: "Cross-Site Scripting (XSS)", content: "Cross-Site Scripting (XSS) injects malicious JavaScript into web pages that other users view. Example: an attacker posts a comment on a forum containing <script>steal_cookies()</script>. When other users view that comment, the script runs in their browser, potentially stealing session cookies or redirecting them to fake sites. Types: Stored XSS (saved in the database), Reflected XSS (in URL parameters), DOM-based XSS (manipulates page JavaScript). Prevention: sanitize all user input, use Content Security Policy (CSP) headers, encode output." },
        { id: "cybersecurity-101-l06-c3", title: "CSRF and Security Headers", content: "Cross-Site Request Forgery (CSRF) tricks a logged-in user's browser into making unwanted requests. If you're logged into your bank and visit a malicious site, that site could submit a hidden form to transfer money from your account — your browser automatically includes your session cookie. Prevention: use CSRF tokens (unique per-request codes), SameSite cookie attributes, and verify the HTTP Referer header. Security headers like Content-Security-Policy, X-Frame-Options, and Strict-Transport-Security add additional layers of protection." }
      ],
      flashcards: [
        { id: "cybersecurity-101-l06-f1", front: "Inserting malicious SQL into web forms to manipulate databases", back: "SQL Injection (SQLi)" },
        { id: "cybersecurity-101-l06-f2", front: "Injecting malicious JavaScript that runs in other users' browsers", back: "Cross-Site Scripting (XSS)" },
        { id: "cybersecurity-101-l06-f3", front: "Tricking a logged-in user's browser into making unwanted requests", back: "Cross-Site Request Forgery (CSRF)" },
        { id: "cybersecurity-101-l06-f4", front: "The #1 rule of web security", back: "Never trust user input — always validate and sanitize" }
      ],
      questions: [
        { id: "cybersecurity-101-l06-q1", text: "An attacker types ' OR '1'='1' -- into a login form. This is", options: [{ id: "a", text: "SQL Injection" }, { id: "b", text: "XSS" }, { id: "c", text: "CSRF" }, { id: "d", text: "Phishing" }], correctOptionId: "a", explanation: "Injecting SQL code into user input fields to manipulate the database is SQL injection!" },
        { id: "cybersecurity-101-l06-q2", text: "XSS attacks inject", options: [{ id: "a", text: "Malicious JavaScript into web pages" }, { id: "b", text: "SQL into databases" }, { id: "c", text: "Viruses into emails" }, { id: "d", text: "Worms into networks" }], correctOptionId: "a", explanation: "XSS = Cross-Site Scripting — injecting JavaScript that runs in other users' browsers!" },
        { id: "cybersecurity-101-l06-q3", text: "CSRF tokens help prevent attacks by", options: [{ id: "a", text: "Requiring a unique code with each request to verify it was intentional" }, { id: "b", text: "Encrypting all passwords" }, { id: "c", text: "Blocking all incoming traffic" }, { id: "d", text: "Scanning for malware" }], correctOptionId: "a", explanation: "CSRF tokens ensure requests come from the legitimate user, not a malicious third-party site!" }
      ],
      interactiveActivities: [{ id: "cybersecurity-101-l06-act1", type: "matching_pairs", title: "Vulnerability matcher", description: "Match: Malicious SQL in login form → SQL Injection, Script tag in forum comment → XSS, Hidden form submitting to bank → CSRF, Fake email asking for password → Phishing." }]
    },

    /* ── L07 Incident Response ── */
    {
      id: "cybersecurity-101-l07",
      title: "Incident Response",
      type: "video",
      duration: 12,
      chunks: [
        { id: "cybersecurity-101-l07-c1", title: "The Incident Response Lifecycle", content: "When a security breach happens, you need a plan. NIST's Incident Response Lifecycle has four phases: 1) Preparation — create policies, train the team, set up tools before an incident occurs; 2) Detection & Analysis — identify the incident, determine severity, and understand what happened; 3) Containment, Eradication & Recovery — stop the spread, remove the threat, and restore systems; 4) Post-Incident Activity — document lessons learned, update procedures, and improve defenses." },
        { id: "cybersecurity-101-l07-c2", title: "Detection and Containment", content: "Detection tools include: SIEM (Security Information and Event Management) — aggregates logs from all systems to spot anomalies; IDS/IPS (Intrusion Detection/Prevention Systems) — monitors network traffic for suspicious patterns; antivirus/EDR (Endpoint Detection and Response) — monitors individual devices. Once detected, containment is critical: isolate affected systems (disconnect from network), preserve evidence (don't delete logs!), and notify the incident response team. Speed matters — the average time to contain a breach is 287 days, and faster containment dramatically reduces costs." },
        { id: "cybersecurity-101-l07-c3", title: "Recovery and Lessons Learned", content: "Recovery involves: restoring systems from clean backups, patching vulnerabilities that were exploited, resetting compromised credentials, verifying system integrity before reconnecting. The post-incident review is arguably the most important phase: What happened? How did the attacker get in? Why didn't we detect it sooner? What do we change? Document everything in an incident report. Many organizations must also report breaches to regulators (GDPR requires notification within 72 hours). Every incident is a learning opportunity — use it to get stronger." }
      ],
      flashcards: [
        { id: "cybersecurity-101-l07-f1", front: "NIST's four phases of incident response", back: "Preparation → Detection & Analysis → Containment/Eradication/Recovery → Post-Incident" },
        { id: "cybersecurity-101-l07-f2", front: "Tool that aggregates security logs to spot anomalies", back: "SIEM (Security Information and Event Management)" },
        { id: "cybersecurity-101-l07-f3", front: "Average time to contain a data breach", back: "287 days (faster = dramatically lower costs)" },
        { id: "cybersecurity-101-l07-f4", front: "GDPR breach notification deadline", back: "72 hours" }
      ],
      questions: [
        { id: "cybersecurity-101-l07-q1", text: "The FIRST phase of incident response is", options: [{ id: "a", text: "Preparation" }, { id: "b", text: "Containment" }, { id: "c", text: "Recovery" }, { id: "d", text: "Detection" }], correctOptionId: "a", explanation: "Preparation happens BEFORE incidents — create plans, train teams, set up tools!" },
        { id: "cybersecurity-101-l07-q2", text: "When a breach is detected, the first containment step is", options: [{ id: "a", text: "Isolate affected systems from the network" }, { id: "b", text: "Delete all logs" }, { id: "c", text: "Turn off all computers permanently" }, { id: "d", text: "Post about it on social media" }], correctOptionId: "a", explanation: "Isolate first to stop the spread — and NEVER delete logs — they're evidence!" },
        { id: "cybersecurity-101-l07-q3", text: "The post-incident review helps organizations", options: [{ id: "a", text: "Learn from the breach and improve defenses" }, { id: "b", text: "Hide what happened" }, { id: "c", text: "Delete evidence of the attack" }, { id: "d", text: "Blame individual employees" }], correctOptionId: "a", explanation: "Lessons learned turn a breach into an opportunity to strengthen security!" }
      ],
      interactiveActivities: [{ id: "cybersecurity-101-l07-act1", type: "timeline_builder", title: "Incident response steps", description: "Arrange in order: Create incident response plan → Detect anomaly via SIEM alert → Analyze severity → Isolate affected systems → Remove malware → Restore from backup → Write incident report → Update security procedures." }]
    },

    /* ── L08 Cybersecurity Final Assessment ── */
    {
      id: "cybersecurity-101-l08",
      title: "Cybersecurity Final Assessment",
      type: "quiz",
      duration: 10,
      questions: [
        { id: "cybersecurity-101-l08-q1", text: "The CIA Triad stands for", options: [{ id: "a", text: "Confidentiality, Integrity, Availability" }, { id: "b", text: "Code, Install, Authenticate" }, { id: "c", text: "Computer, Internet, Application" }, { id: "d", text: "Create, Implement, Assess" }], correctOptionId: "a", explanation: "Confidentiality, Integrity, Availability is the foundation of all cybersecurity!" },
        { id: "cybersecurity-101-l08-q2", text: "MFA combines two or more", options: [{ id: "a", text: "Authentication factors (know, have, are)" }, { id: "b", text: "Passwords" }, { id: "c", text: "Firewalls" }, { id: "d", text: "VPN connections" }], correctOptionId: "a", explanation: "Multi-Factor Authentication uses different TYPES of factors, not just multiple passwords!" },
        { id: "cybersecurity-101-l08-q3", text: "SQL injection exploits", options: [{ id: "a", text: "Unsanitized user input in database queries" }, { id: "b", text: "Weak Wi-Fi passwords" }, { id: "c", text: "Outdated antivirus" }, { id: "d", text: "Physical server access" }], correctOptionId: "a", explanation: "SQLi works because the application trusts user input instead of sanitizing it!" }
      ],
      flashcards: [
        { id: "cybersecurity-101-l08-f1", front: "CIA Triad", back: "Confidentiality, Integrity, Availability" },
        { id: "cybersecurity-101-l08-f2", front: "Something you Know, Have, Are", back: "Three authentication factors" },
        { id: "cybersecurity-101-l08-f3", front: "SQLi, XSS, CSRF", back: "Top web application vulnerabilities" },
        { id: "cybersecurity-101-l08-f4", front: "Preparation → Detection → Containment → Post-Incident", back: "NIST Incident Response Lifecycle" }
      ]
    }
  ]
};
