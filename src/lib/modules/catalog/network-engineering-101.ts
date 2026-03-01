import type { LearningModule } from "@/lib/modules/types";

export const NetworkEngineering101Module: LearningModule = {
  id: "network-engineering-101",
  title: "Network Engineering Foundations",
  description:
    "Master the core principles of computer networking, from the OSI and TCP/IP reference models through IP addressing, switching, routing, transport protocols, and network security. Build practical skills in subnetting, protocol analysis, wireless technologies, and WAN design that prepare you for real-world infrastructure roles and industry certifications.",
  subject: "Computer Science",
  tags: ["core", "curriculum", "interactive", "networking", "infrastructure"],
  minAge: 16,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Describe the seven layers of the OSI model and map them to the four-layer TCP/IP architecture",
    "Calculate valid host ranges, network addresses, and broadcast addresses using CIDR and subnet masks",
    "Explain how Ethernet switches forward frames and how routers select paths using RIP, OSPF, and BGP",
    "Differentiate between TCP and UDP and identify common application-layer protocols such as DNS, DHCP, and HTTP",
    "Identify key network security mechanisms including firewalls, VPNs, IDS/IPS, and WPA3 authentication",
    "Compare wireless 802.11 standards and WAN technologies such as MPLS and SD-WAN",
    "Use diagnostic tools like ping, traceroute, and nslookup to troubleshoot connectivity issues"
  ],

  lessons: [
    /* ------------------------------------------------------------------ */
    /*  L01 — Video: The OSI and TCP/IP Models                            */
    /* ------------------------------------------------------------------ */
    {
      id: "network-engineering-101-l01",
      title: "The OSI and TCP/IP Models",
      type: "video",
      duration: 10,
      chunks: [
        {
          id: "network-engineering-101-l01-c1",
          title: "Why We Need Layered Models",
          content: "Modern networks are enormously complex: hardware, cables, radio waves, software, and countless protocols must cooperate seamlessly. Layered reference models break this complexity into manageable pieces. Each layer has a well-defined responsibility and communicates with the layers directly above and below it through standardised interfaces. This separation lets vendors innovate at one layer without breaking the others. The two dominant models are the OSI (Open Systems Interconnection) seven-layer model, created by the ISO, and the TCP/IP four-layer model that underpins the Internet. Understanding both is essential because certification exams reference the OSI layers while real-world troubleshooting maps directly to TCP/IP."
        },
        {
          id: "network-engineering-101-l01-c2",
          title: "The Seven OSI Layers",
          content: "From bottom to top the OSI layers are: Physical (Layer 1) — electrical signals, cables, and connectors; Data Link (Layer 2) — MAC addresses, Ethernet frames, error detection via CRC; Network (Layer 3) — IP addressing and routing; Transport (Layer 4) — end-to-end reliability with TCP or speed with UDP; Session (Layer 5) — managing dialogues between applications; Presentation (Layer 6) — data translation, encryption, and compression; Application (Layer 7) — the interface users interact with, including HTTP, DNS, and SMTP. Each layer wraps the data from above in its own header, a process called encapsulation. The resulting unit at each layer has a specific name: bits, frames, packets, segments, and data."
        },
        {
          id: "network-engineering-101-l01-c3",
          title: "TCP/IP and Protocol Data Units",
          content: "The TCP/IP model condenses the seven OSI layers into four practical layers: Network Access (combines Physical and Data Link), Internet (maps to Network), Transport (same), and Application (merges Session, Presentation, and Application). When a web browser sends a request, the Application layer generates HTTP data, the Transport layer adds a TCP header creating a segment, the Internet layer adds an IP header creating a packet, and the Network Access layer adds Ethernet headers and trailers creating a frame. At the destination the process reverses — each layer strips its header and passes the payload upward. These Protocol Data Units (PDUs) are fundamental to packet-capture analysis with tools like Wireshark."
        }
      ],
      flashcards: [
        { id: "network-engineering-101-l01-f1", front: "How many layers does the OSI model have?", back: "Seven: Physical, Data Link, Network, Transport, Session, Presentation, and Application." },
        { id: "network-engineering-101-l01-f2", front: "What is encapsulation?", back: "The process of wrapping upper-layer data with a header (and sometimes a trailer) at each lower layer before transmission." },
        { id: "network-engineering-101-l01-f3", front: "Name the four layers of the TCP/IP model.", back: "Network Access, Internet, Transport, and Application." },
        { id: "network-engineering-101-l01-f4", front: "What PDU is associated with Layer 2 of the OSI model?", back: "A frame." }
      ],
      learningAids: [
        { id: "network-engineering-101-l01-a1", type: "image", title: "OSI vs TCP/IP Comparison", content: "Side-by-side diagram showing the seven OSI layers mapped to the four TCP/IP layers, with PDU names at each level." },
        { id: "network-engineering-101-l01-a2", type: "animation", title: "Encapsulation Walk-through", content: "Animated sequence showing data being wrapped with headers as it travels from the Application layer down to the Physical layer." }
      ]
    },

    /* ------------------------------------------------------------------ */
    /*  L02 — Interactive: IP Addressing and Subnetting                   */
    /* ------------------------------------------------------------------ */
    {
      id: "network-engineering-101-l02",
      title: "IP Addressing and Subnetting",
      type: "interactive",
      duration: 14,
      chunks: [
        {
          id: "network-engineering-101-l02-c1",
          title: "IPv4 Address Structure",
          content: "An IPv4 address is a 32-bit number usually written in dotted-decimal notation — four octets separated by dots, such as 192.168.1.10. Each octet ranges from 0 to 255. Addresses are divided into a network portion and a host portion. Classful addressing originally defined Class A (first octet 1–126), Class B (128–191), and Class C (192–223), but modern networks use Classless Inter-Domain Routing (CIDR). CIDR notation appends a slash and prefix length, e.g., 192.168.1.0/24, meaning the first 24 bits identify the network and the remaining 8 bits identify hosts. Special addresses include 127.0.0.1 (loopback), 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16 (private ranges)."
        },
        {
          id: "network-engineering-101-l02-c2",
          title: "Subnet Masks and Subnetting",
          content: "A subnet mask is a 32-bit value that separates the network and host portions of an address. A /24 mask is 255.255.255.0, meaning the first three octets are network bits. Subnetting borrows bits from the host portion to create smaller networks. For example, splitting 192.168.1.0/24 into two subnets uses a /25 mask (255.255.255.128), yielding 192.168.1.0/25 (hosts .1–.126) and 192.168.1.128/25 (hosts .129–.254). The formula for usable hosts is 2^h − 2, where h is the number of host bits — you subtract two for the network address (all host bits 0) and the broadcast address (all host bits 1). Mastering binary-to-decimal conversion makes subnetting straightforward."
        },
        {
          id: "network-engineering-101-l02-c3",
          title: "IPv6 Overview",
          content: "IPv4's 32-bit space yields roughly 4.3 billion addresses — not enough for the modern Internet. IPv6 expands to 128 bits, written as eight groups of four hexadecimal digits separated by colons, e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334. Leading zeros within a group can be omitted, and one consecutive run of all-zero groups can be replaced with ::. IPv6 eliminates the need for NAT and integrates IPsec natively. Link-local addresses (fe80::/10) are auto-configured on every interface. While IPv4 and IPv6 coexist through dual-stack, tunnelling, and translation mechanisms, the long-term trajectory is full IPv6 adoption across enterprise and service-provider networks."
        }
      ],
      flashcards: [
        { id: "network-engineering-101-l02-f1", front: "How many bits are in an IPv4 address?", back: "32 bits, written as four octets in dotted-decimal notation." },
        { id: "network-engineering-101-l02-f2", front: "What does /24 mean in CIDR notation?", back: "The first 24 bits are the network portion; the remaining 8 bits are for hosts (subnet mask 255.255.255.0)." },
        { id: "network-engineering-101-l02-f3", front: "How many usable hosts exist in a /26 subnet?", back: "62 — calculated as 2^6 − 2 = 62." },
        { id: "network-engineering-101-l02-f4", front: "How many bits are in an IPv6 address?", back: "128 bits, written as eight groups of four hexadecimal digits separated by colons." }
      ],
      metadata: {
        prompts: [
          "Given the network 10.0.0.0/24, calculate the network address, broadcast address, and usable host range for the third /26 subnet.",
          "Convert the subnet mask 255.255.240.0 to CIDR notation and determine how many hosts it supports.",
          "Explain why the network address and broadcast address are not assignable to hosts."
        ]
      },
      learningAids: [
        { id: "network-engineering-101-l02-a1", type: "practice", title: "Subnetting Calculator Challenge", content: "Use the interactive subnet calculator to subdivide 172.16.0.0/16 into /20 subnets and list the first three network ranges." }
      ]
    },

    /* ------------------------------------------------------------------ */
    /*  L03 — Quiz: Network Models & IP Checkpoint                        */
    /* ------------------------------------------------------------------ */
    {
      id: "network-engineering-101-l03",
      title: "Network Models & IP Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      },
      questions: [
        {
          id: "network-engineering-101-l03-q1",
          text: "At which OSI layer do routers operate to forward packets between networks?",
          skillId: "network-engineering-101-skill-core",
          options: [
            { id: "a", text: "Layer 1 — Physical" },
            { id: "b", text: "Layer 2 — Data Link" },
            { id: "c", text: "Layer 3 — Network" },
            { id: "d", text: "Layer 4 — Transport" }
          ],
          correctOptionId: "c",
          explanation: "Routers make forwarding decisions based on IP addresses, which are Layer 3 (Network layer) constructs."
        },
        {
          id: "network-engineering-101-l03-q2",
          text: "What is the correct subnet mask for a /20 CIDR prefix?",
          skillId: "network-engineering-101-skill-core",
          options: [
            { id: "a", text: "255.255.240.0" },
            { id: "b", text: "255.255.248.0" },
            { id: "c", text: "255.255.255.0" },
            { id: "d", text: "255.255.224.0" }
          ],
          correctOptionId: "a",
          explanation: "A /20 mask sets the first 20 bits to 1: 255.255.11110000.0 → 255.255.240.0."
        },
        {
          id: "network-engineering-101-l03-q3",
          text: "Which PDU is created at the Transport layer of the OSI model when using TCP?",
          skillId: "network-engineering-101-skill-core",
          options: [
            { id: "a", text: "Frame" },
            { id: "b", text: "Packet" },
            { id: "c", text: "Segment" },
            { id: "d", text: "Bit" }
          ],
          correctOptionId: "c",
          explanation: "TCP at Layer 4 encapsulates application data into segments, adding source/destination port numbers and sequence information."
        },
        {
          id: "network-engineering-101-l03-q4",
          text: "How many usable host addresses are available in a /28 IPv4 subnet?",
          skillId: "network-engineering-101-skill-core",
          options: [
            { id: "a", text: "16" },
            { id: "b", text: "14" },
            { id: "c", text: "30" },
            { id: "d", text: "12" }
          ],
          correctOptionId: "b",
          explanation: "A /28 leaves 4 host bits: 2^4 − 2 = 14 usable addresses after subtracting the network and broadcast addresses."
        }
      ],
      learningAids: [
        { id: "network-engineering-101-l03-a1", type: "mnemonic", title: "OSI Mnemonic", content: "Remember the OSI layers bottom-to-top: 'Please Do Not Throw Sausage Pizza Away' — Physical, Data Link, Network, Transport, Session, Presentation, Application." }
      ]
    },

    /* ------------------------------------------------------------------ */
    /*  L04 — Video: Switching and Routing                                */
    /* ------------------------------------------------------------------ */
    {
      id: "network-engineering-101-l04",
      title: "Switching and Routing",
      type: "video",
      duration: 10,
      chunks: [
        {
          id: "network-engineering-101-l04-c1",
          title: "Ethernet and MAC Addresses",
          content: "Ethernet is the dominant LAN technology. Every network interface card (NIC) has a unique 48-bit MAC address written in hexadecimal, e.g., AA:BB:CC:DD:EE:FF. Switches operate at Layer 2 and use a MAC address table to forward frames only to the port where the destination MAC resides. When a switch receives a frame with an unknown destination MAC it floods the frame to all ports except the source — this is called unknown unicast flooding. Over time the switch learns which MACs are reachable on which ports, reducing unnecessary traffic. Full-duplex Ethernet on modern switches eliminates collisions, and Gigabit and 10-Gigabit speeds are standard in enterprise environments."
        },
        {
          id: "network-engineering-101-l04-c2",
          title: "VLANs and Spanning Tree",
          content: "Virtual LANs (VLANs) logically segment a physical switch into separate broadcast domains, improving security and performance. Trunk ports carry traffic for multiple VLANs using 802.1Q tagging, which inserts a 4-byte tag into the Ethernet frame. Inter-VLAN routing requires a Layer 3 device — either a router-on-a-stick or a multilayer switch with Switch Virtual Interfaces (SVIs). The Spanning Tree Protocol (STP, IEEE 802.1D) prevents Layer 2 loops by electing a root bridge and placing redundant ports in a blocking state. Rapid STP (802.1w) converges in seconds rather than the 30–50 seconds of classic STP, making it the modern default."
        },
        {
          id: "network-engineering-101-l04-c3",
          title: "Routing Protocols",
          content: "Routers use routing protocols to exchange reachability information and build routing tables. RIP (Routing Information Protocol) is a distance-vector protocol that uses hop count as its metric, with a maximum of 15 hops. OSPF (Open Shortest Path First) is a link-state protocol that builds a complete topology map and calculates the shortest path using Dijkstra's algorithm — it converges much faster than RIP and scales to large networks. BGP (Border Gateway Protocol) is the path-vector protocol that glues the entire Internet together by exchanging routing information between autonomous systems. Routing tables contain destination networks, next-hop addresses, metrics, and the outgoing interface for each route."
        }
      ],
      flashcards: [
        { id: "network-engineering-101-l04-f1", front: "What does a switch use to decide which port to forward a frame to?", back: "Its MAC address table, which maps MAC addresses to switch ports." },
        { id: "network-engineering-101-l04-f2", front: "What protocol prevents Layer 2 loops in a switched network?", back: "Spanning Tree Protocol (STP), IEEE 802.1D, and its faster variant Rapid STP (802.1w)." },
        { id: "network-engineering-101-l04-f3", front: "What algorithm does OSPF use to calculate the shortest path?", back: "Dijkstra's shortest-path-first (SPF) algorithm." },
        { id: "network-engineering-101-l04-f4", front: "What is the maximum hop count for RIP?", back: "15 hops — a route with 16 hops is considered unreachable." }
      ],
      learningAids: [
        { id: "network-engineering-101-l04-a1", type: "image", title: "VLAN Trunk Diagram", content: "Diagram showing an 802.1Q trunk link connecting two switches, with VLAN 10 and VLAN 20 traffic tagged and separated." },
        { id: "network-engineering-101-l04-a2", type: "animation", title: "OSPF Convergence", content: "Animation showing OSPF routers exchanging Link State Advertisements and recalculating routes when a link fails." }
      ]
    },

    /* ------------------------------------------------------------------ */
    /*  L05 — Interactive: Transport and Application Protocols            */
    /* ------------------------------------------------------------------ */
    {
      id: "network-engineering-101-l05",
      title: "Transport and Application Protocols",
      type: "interactive",
      duration: 14,
      chunks: [
        {
          id: "network-engineering-101-l05-c1",
          title: "TCP vs UDP",
          content: "TCP (Transmission Control Protocol) provides reliable, ordered, error-checked delivery. Before data transfer begins, TCP performs a three-way handshake: the client sends a SYN, the server responds with SYN-ACK, and the client completes with an ACK. TCP uses sequence numbers, acknowledgements, and retransmissions to guarantee delivery. Flow control (sliding window) and congestion control (slow start, congestion avoidance) regulate throughput. UDP (User Datagram Protocol) is connectionless — no handshake, no guarantees. It is faster and lighter, making it ideal for real-time applications like VoIP, video streaming, and DNS queries where occasional packet loss is acceptable."
        },
        {
          id: "network-engineering-101-l05-c2",
          title: "DNS and DHCP",
          content: "The Domain Name System (DNS) translates human-readable hostnames like www.example.com into IP addresses. A recursive resolver queries root servers, TLD servers, and authoritative servers to resolve names. Common DNS record types include A (IPv4 address), AAAA (IPv6), CNAME (alias), MX (mail exchange), and TXT (text, often used for SPF/DKIM). DNS uses UDP port 53 for standard queries and TCP port 53 for zone transfers or large responses. DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses, subnet masks, default gateways, and DNS server addresses to devices. The DHCP exchange follows four steps: Discover, Offer, Request, and Acknowledge (DORA)."
        },
        {
          id: "network-engineering-101-l05-c3",
          title: "HTTP, FTP, and SMTP",
          content: "HTTP (Hypertext Transfer Protocol) is the foundation of web communication. It uses TCP port 80, while HTTPS (HTTP Secure) uses port 443 and wraps HTTP inside a TLS-encrypted tunnel. HTTP methods include GET (retrieve), POST (submit), PUT (update), and DELETE (remove). FTP (File Transfer Protocol) transfers files using two channels: a control channel on TCP port 21 and a data channel on port 20 (active mode) or a negotiated high port (passive mode). SFTP and FTPS provide encrypted alternatives. SMTP (Simple Mail Transfer Protocol) sends email on TCP port 25 (or 587 for submission with authentication). IMAP (port 143/993) and POP3 (port 110/995) retrieve email from servers."
        }
      ],
      flashcards: [
        { id: "network-engineering-101-l05-f1", front: "What are the three steps of the TCP three-way handshake?", back: "SYN → SYN-ACK → ACK." },
        { id: "network-engineering-101-l05-f2", front: "What port does DNS typically use?", back: "UDP port 53 for queries; TCP port 53 for zone transfers and large responses." },
        { id: "network-engineering-101-l05-f3", front: "What does DORA stand for in DHCP?", back: "Discover, Offer, Request, Acknowledge — the four-step process a client uses to obtain an IP address." },
        { id: "network-engineering-101-l05-f4", front: "What is the default port for HTTPS?", back: "TCP port 443." }
      ],
      metadata: {
        prompts: [
          "Capture a TCP three-way handshake in the simulator: identify the SYN, SYN-ACK, and ACK packets and record the sequence numbers.",
          "Perform an nslookup for three different domains and note whether the response is authoritative or non-authoritative.",
          "Compare the headers of an HTTP and an HTTPS request — explain what information is visible to an eavesdropper in each case."
        ]
      },
      learningAids: [
        { id: "network-engineering-101-l05-a1", type: "practice", title: "Protocol Packet Inspector", content: "Use the interactive packet inspector to examine TCP, UDP, DNS, and HTTP headers field by field." }
      ]
    },

    /* ------------------------------------------------------------------ */
    /*  L06 — Quiz: Switching & Protocols Checkpoint                      */
    /* ------------------------------------------------------------------ */
    {
      id: "network-engineering-101-l06",
      title: "Switching & Protocols Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      },
      questions: [
        {
          id: "network-engineering-101-l06-q1",
          text: "Which IEEE standard adds a 4-byte VLAN tag to an Ethernet frame on trunk links?",
          skillId: "network-engineering-101-skill-core",
          options: [
            { id: "a", text: "802.1D" },
            { id: "b", text: "802.1Q" },
            { id: "c", text: "802.11ac" },
            { id: "d", text: "802.3af" }
          ],
          correctOptionId: "b",
          explanation: "IEEE 802.1Q defines VLAN tagging for Ethernet frames, allowing a single trunk link to carry multiple VLANs."
        },
        {
          id: "network-engineering-101-l06-q2",
          text: "During the TCP three-way handshake, what does the server send in response to the client's SYN?",
          skillId: "network-engineering-101-skill-core",
          options: [
            { id: "a", text: "ACK only" },
            { id: "b", text: "SYN-ACK" },
            { id: "c", text: "FIN" },
            { id: "d", text: "RST" }
          ],
          correctOptionId: "b",
          explanation: "The server acknowledges the client's SYN and sends its own SYN in a combined SYN-ACK segment."
        },
        {
          id: "network-engineering-101-l06-q3",
          text: "Which routing protocol uses Dijkstra's algorithm and is classified as a link-state protocol?",
          skillId: "network-engineering-101-skill-core",
          options: [
            { id: "a", text: "RIP" },
            { id: "b", text: "BGP" },
            { id: "c", text: "OSPF" },
            { id: "d", text: "EIGRP" }
          ],
          correctOptionId: "c",
          explanation: "OSPF (Open Shortest Path First) is a link-state protocol that uses Dijkstra's SPF algorithm to compute optimal routes."
        },
        {
          id: "network-engineering-101-l06-q4",
          text: "What are the four steps of the DHCP address-assignment process in order?",
          skillId: "network-engineering-101-skill-core",
          options: [
            { id: "a", text: "Discover, Offer, Request, Acknowledge" },
            { id: "b", text: "Request, Offer, Discover, Acknowledge" },
            { id: "c", text: "SYN, SYN-ACK, ACK, Data" },
            { id: "d", text: "Query, Response, Confirm, Bind" }
          ],
          correctOptionId: "a",
          explanation: "DHCP follows the DORA sequence: the client Discovers available servers, receives an Offer, sends a Request, and gets an Acknowledgement."
        }
      ],
      learningAids: [
        { id: "network-engineering-101-l06-a1", type: "mnemonic", title: "DORA for DHCP", content: "Remember DHCP's four steps with DORA: Discover → Offer → Request → Acknowledge." }
      ]
    },

    /* ------------------------------------------------------------------ */
    /*  L07 — Video: Network Security                                     */
    /* ------------------------------------------------------------------ */
    {
      id: "network-engineering-101-l07",
      title: "Network Security",
      type: "video",
      duration: 10,
      chunks: [
        {
          id: "network-engineering-101-l07-c1",
          title: "Firewalls and Access Control Lists",
          content: "Firewalls are the first line of defence, filtering traffic based on rules that match source/destination IP, port, and protocol. Stateless firewalls evaluate each packet independently, while stateful firewalls track connection state and allow return traffic automatically. Next-generation firewalls (NGFWs) add deep packet inspection, application awareness, and intrusion prevention. Access Control Lists (ACLs) on routers and switches provide granular permit/deny rules processed top-down — the first match wins. Standard ACLs filter by source IP only, while extended ACLs can match source/destination IP, ports, and protocols. Proper ACL placement is critical: standard ACLs go near the destination, extended ACLs near the source."
        },
        {
          id: "network-engineering-101-l07-c2",
          title: "VPNs and Intrusion Detection",
          content: "Virtual Private Networks (VPNs) create encrypted tunnels over public networks. IPsec VPNs operate at Layer 3 and use two phases: IKE (Internet Key Exchange) negotiates security associations, then ESP (Encapsulating Security Payload) encrypts data. SSL/TLS VPNs operate at Layer 4–7 and are commonly used for remote-access portals. Intrusion Detection Systems (IDS) passively monitor traffic and generate alerts when suspicious patterns are detected. Intrusion Prevention Systems (IPS) sit inline and can actively block malicious traffic. Both use signature-based detection (matching known attack patterns) and anomaly-based detection (flagging deviations from baseline behaviour)."
        },
        {
          id: "network-engineering-101-l07-c3",
          title: "Wireless Security and Common Attacks",
          content: "Wireless networks introduce unique security challenges because signals propagate beyond physical boundaries. WPA3 (Wi-Fi Protected Access 3) replaces WPA2 and provides Simultaneous Authentication of Equals (SAE), which resists offline dictionary attacks. Enterprise networks use 802.1X port-based authentication with a RADIUS server to verify user credentials before granting access. Common network attacks include ARP spoofing (poisoning ARP caches to redirect traffic), DDoS (Distributed Denial of Service) attacks that overwhelm resources with massive traffic volumes, man-in-the-middle attacks that intercept communications, and DNS poisoning that redirects users to malicious sites. Defence-in-depth — layering multiple security controls — is the best strategy."
        }
      ],
      flashcards: [
        { id: "network-engineering-101-l07-f1", front: "What is the difference between a stateless and a stateful firewall?", back: "A stateless firewall evaluates each packet independently; a stateful firewall tracks active connections and automatically permits return traffic." },
        { id: "network-engineering-101-l07-f2", front: "What two phases does an IPsec VPN use?", back: "Phase 1 (IKE) negotiates security associations; Phase 2 (ESP) encrypts the actual data traffic." },
        { id: "network-engineering-101-l07-f3", front: "What does an IPS do that an IDS cannot?", back: "An IPS sits inline and can actively block malicious traffic, whereas an IDS only monitors and alerts." },
        { id: "network-engineering-101-l07-f4", front: "What authentication method does WPA3 use to resist offline dictionary attacks?", back: "Simultaneous Authentication of Equals (SAE)." }
      ],
      learningAids: [
        { id: "network-engineering-101-l07-a1", type: "image", title: "Firewall Rule Processing", content: "Flowchart showing how a firewall evaluates ACL rules top-down, applying the first matching rule and dropping to an implicit deny." },
        { id: "network-engineering-101-l07-a2", type: "animation", title: "IPsec VPN Tunnel Setup", content: "Animation showing IKE Phase 1 and Phase 2 negotiation, followed by encrypted data flowing through the ESP tunnel." }
      ]
    },

    /* ------------------------------------------------------------------ */
    /*  L08 — Interactive: Wireless and WAN Technologies                  */
    /* ------------------------------------------------------------------ */
    {
      id: "network-engineering-101-l08",
      title: "Wireless and WAN Technologies",
      type: "interactive",
      duration: 14,
      chunks: [
        {
          id: "network-engineering-101-l08-c1",
          title: "802.11 Standards and Wi-Fi Channels",
          content: "The IEEE 802.11 family defines wireless LAN standards. 802.11n (Wi-Fi 4) operates on 2.4 GHz and 5 GHz bands with speeds up to 600 Mbps using MIMO (Multiple Input Multiple Output). 802.11ac (Wi-Fi 5) uses only the 5 GHz band and reaches multi-gigabit speeds with wider channels (80/160 MHz) and MU-MIMO. 802.11ax (Wi-Fi 6/6E) introduces OFDMA for efficient multi-user scheduling and extends into the 6 GHz band. The 2.4 GHz band has 14 channels but only three non-overlapping channels (1, 6, 11) in most regions. The 5 GHz band offers many more non-overlapping channels but shorter range. Proper channel planning avoids co-channel interference and maximises throughput."
        },
        {
          id: "network-engineering-101-l08-c2",
          title: "WAN Technologies",
          content: "Wide Area Networks connect geographically dispersed sites. MPLS (Multiprotocol Label Switching) forwards packets using short labels rather than long IP lookups, providing traffic engineering and quality-of-service guarantees. SD-WAN (Software-Defined WAN) abstracts the underlying transport — MPLS, broadband, LTE — and uses centralised controllers to route traffic based on application policies and real-time link quality. Fibre-optic cables use light pulses through glass or plastic cores, offering speeds exceeding 100 Gbps over long distances with immunity to electromagnetic interference. Copper cables (Cat5e, Cat6, Cat6a) are cheaper for short runs up to 100 metres but are susceptible to crosstalk and interference."
        },
        {
          id: "network-engineering-101-l08-c3",
          title: "Network Troubleshooting Tools",
          content: "Effective troubleshooting follows a systematic approach: identify the problem, establish a theory, test the theory, implement a solution, verify, and document. The ping command sends ICMP Echo Request packets to test reachability and measure round-trip time. Traceroute (tracert on Windows) maps the path packets take by sending probes with incrementing TTL values, revealing each hop's IP and latency. Nslookup and dig query DNS servers to resolve hostnames and diagnose DNS issues. Ipconfig (Windows) and ifconfig/ip (Linux) display local interface configuration — IP address, subnet mask, default gateway, and DNS servers. Combining these tools lets engineers isolate whether a problem is at the physical, network, or application layer."
        }
      ],
      flashcards: [
        { id: "network-engineering-101-l08-f1", front: "Which three 2.4 GHz channels are non-overlapping?", back: "Channels 1, 6, and 11." },
        { id: "network-engineering-101-l08-f2", front: "What advantage does MPLS provide over traditional IP routing?", back: "MPLS uses short labels for fast forwarding and supports traffic engineering and QoS guarantees." },
        { id: "network-engineering-101-l08-f3", front: "What does traceroute reveal about a network path?", back: "Each intermediate hop (router), its IP address, and the round-trip latency to that hop." },
        { id: "network-engineering-101-l08-f4", front: "What technology does Wi-Fi 6 (802.11ax) introduce for multi-user efficiency?", back: "OFDMA (Orthogonal Frequency-Division Multiple Access), which allows simultaneous data transmission to multiple devices." }
      ],
      metadata: {
        prompts: [
          "Use ping to test connectivity to three hosts; record the RTT and packet loss for each. Then run traceroute to map the path to an external server.",
          "Use nslookup to resolve A and MX records for two different domains. Identify the authoritative name server for each.",
          "Given a floor plan with 40 access points on the 2.4 GHz band, design a channel assignment plan using only channels 1, 6, and 11 to minimise co-channel interference."
        ]
      },
      learningAids: [
        { id: "network-engineering-101-l08-a1", type: "practice", title: "Troubleshooting Lab", content: "Step through a simulated connectivity failure: use ping, traceroute, and nslookup to identify and resolve the issue layer by layer." }
      ]
    },

    /* ------------------------------------------------------------------ */
    /*  L09 — Quiz: Security & WAN Checkpoint                             */
    /* ------------------------------------------------------------------ */
    {
      id: "network-engineering-101-l09",
      title: "Security & WAN Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      },
      questions: [
        {
          id: "network-engineering-101-l09-q1",
          text: "Which type of firewall tracks the state of active connections and allows return traffic automatically?",
          skillId: "network-engineering-101-skill-core",
          options: [
            { id: "a", text: "Stateless packet filter" },
            { id: "b", text: "Stateful inspection firewall" },
            { id: "c", text: "Proxy server" },
            { id: "d", text: "Web application firewall" }
          ],
          correctOptionId: "b",
          explanation: "A stateful inspection firewall maintains a state table of active connections and permits return traffic matching established sessions."
        },
        {
          id: "network-engineering-101-l09-q2",
          text: "In the 2.4 GHz Wi-Fi band, which channels are non-overlapping and recommended for deployment?",
          skillId: "network-engineering-101-skill-core",
          options: [
            { id: "a", text: "1, 4, 8" },
            { id: "b", text: "1, 6, 11" },
            { id: "c", text: "2, 7, 12" },
            { id: "d", text: "3, 8, 13" }
          ],
          correctOptionId: "b",
          explanation: "Channels 1, 6, and 11 are the three non-overlapping channels in the 2.4 GHz band, minimising co-channel interference."
        },
        {
          id: "network-engineering-101-l09-q3",
          text: "What does the traceroute command reveal about a network path?",
          skillId: "network-engineering-101-skill-core",
          options: [
            { id: "a", text: "The MAC address of each switch along the path" },
            { id: "b", text: "The DNS records for each domain in the path" },
            { id: "c", text: "Each router hop, its IP address, and round-trip latency" },
            { id: "d", text: "The bandwidth capacity of every link in the path" }
          ],
          correctOptionId: "c",
          explanation: "Traceroute sends probes with incrementing TTL values, causing each hop to respond and revealing the router IP and latency at every point along the path."
        },
        {
          id: "network-engineering-101-l09-q4",
          text: "Which technology abstracts multiple WAN transports and routes traffic based on application policies?",
          skillId: "network-engineering-101-skill-core",
          options: [
            { id: "a", text: "MPLS" },
            { id: "b", text: "Frame Relay" },
            { id: "c", text: "SD-WAN" },
            { id: "d", text: "ATM" }
          ],
          correctOptionId: "c",
          explanation: "SD-WAN uses centralised controllers to abstract underlying transports (MPLS, broadband, LTE) and dynamically route traffic based on application requirements."
        }
      ],
      learningAids: [
        { id: "network-engineering-101-l09-a1", type: "mnemonic", title: "Troubleshooting Steps", content: "Follow the systematic approach: Identify → Theory → Test → Implement → Verify → Document." }
      ]
    },

    /* ------------------------------------------------------------------ */
    /*  L10 — Quiz: Mastery Quiz — Networking                             */
    /* ------------------------------------------------------------------ */
    {
      id: "network-engineering-101-l10",
      title: "Mastery Quiz: Networking",
      type: "quiz",
      duration: 10,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      },
      questions: [
        {
          id: "network-engineering-101-l10-q1",
          text: "A host has the IP address 172.16.45.130/26. What is the broadcast address for this subnet?",
          skillId: "network-engineering-101-skill-core",
          options: [
            { id: "a", text: "172.16.45.191" },
            { id: "b", text: "172.16.45.159" },
            { id: "c", text: "172.16.45.255" },
            { id: "d", text: "172.16.45.128" }
          ],
          correctOptionId: "a",
          explanation: "A /26 means 64-address blocks. 130 falls in the 128–191 block (network 172.16.45.128), so the broadcast is 172.16.45.191."
        },
        {
          id: "network-engineering-101-l10-q2",
          text: "Which protocol is responsible for exchanging routing information between autonomous systems on the Internet?",
          skillId: "network-engineering-101-skill-core",
          options: [
            { id: "a", text: "OSPF" },
            { id: "b", text: "RIP" },
            { id: "c", text: "BGP" },
            { id: "d", text: "EIGRP" }
          ],
          correctOptionId: "c",
          explanation: "BGP (Border Gateway Protocol) is the path-vector protocol used to exchange routing information between autonomous systems, forming the backbone of Internet routing."
        },
        {
          id: "network-engineering-101-l10-q3",
          text: "An attacker sends forged ARP replies to associate their MAC address with the default gateway's IP. What is this attack called?",
          skillId: "network-engineering-101-skill-core",
          options: [
            { id: "a", text: "DNS poisoning" },
            { id: "b", text: "DDoS" },
            { id: "c", text: "ARP spoofing" },
            { id: "d", text: "Brute-force attack" }
          ],
          correctOptionId: "c",
          explanation: "ARP spoofing (or ARP poisoning) corrupts ARP caches so that traffic intended for the gateway is redirected through the attacker's machine."
        },
        {
          id: "network-engineering-101-l10-q4",
          text: "Which Wi-Fi generation introduces OFDMA and operates across the 2.4 GHz, 5 GHz, and 6 GHz bands?",
          skillId: "network-engineering-101-skill-core",
          options: [
            { id: "a", text: "Wi-Fi 4 (802.11n)" },
            { id: "b", text: "Wi-Fi 5 (802.11ac)" },
            { id: "c", text: "Wi-Fi 6/6E (802.11ax)" },
            { id: "d", text: "Wi-Fi 3 (802.11g)" }
          ],
          correctOptionId: "c",
          explanation: "Wi-Fi 6 (802.11ax) introduced OFDMA for efficient multi-user scheduling, and Wi-Fi 6E extended operation into the 6 GHz band."
        }
      ],
      learningAids: [
        { id: "network-engineering-101-l10-a1", type: "mnemonic", title: "Key Port Numbers", content: "Remember critical ports: HTTP 80, HTTPS 443, DNS 53, DHCP 67/68, FTP 21, SSH 22, SMTP 25, RDP 3389." }
      ]
    }
  ]
};
