import type { LearningModule } from "@/lib/modules/types";

export const network_engineering_101_Module: LearningModule = {
  "id": "network-engineering-101",
  "title": "Network Engineering Foundations",
  "description": "Master the core principles of computer networking, from the OSI and TCP/IP reference models through IP addressing, switching, routing, transport protocols, and network security. Build practical skills in subnetting, protocol analysis, wireless technologies, and WAN design that prepare you for real-world infrastructure roles and industry certifications.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "networking",
    "infrastructure"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Describe the seven layers of the OSI model and map them to the four-layer TCP/IP architecture",
    "Calculate valid host ranges, network addresses, and broadcast addresses using CIDR and subnet masks",
    "Explain how Ethernet switches forward frames and how routers select paths using RIP, OSPF, and BGP",
    "Differentiate between TCP and UDP and identify common application-layer protocols such as DNS, DHCP, and HTTP",
    "Identify key network security mechanisms including firewalls, VPNs, IDS/IPS, and WPA3 authentication",
    "Compare wireless 802.11 standards and WAN technologies such as MPLS and SD-WAN",
    "Use diagnostic tools like ping, traceroute, and nslookup to troubleshoot connectivity issues"
  ],
  "lessons": [
    {
      "id": "network-engineering-101-l01",
      "title": "The OSI and TCP/IP Models",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "network-engineering-101-l01-c1",
          "title": "Why We Need Layered Models",
          "content": "Computer networks are incredibly complex, involving hardware, cables, radio waves, and software all working together. To manage this complexity, we use layered reference models. Think of it like an assembly line for data: each layer performs a specific job before passing the work to the next. This separation of tasks allows developers to improve one part of the network, like a new Wi-Fi technology, without having to redesign everything else.\nThe two most important models are the OSI (Open Systems Interconnection) model and the TCP/IP model. The OSI model, with its seven layers, provides a detailed, theoretical framework that is often referenced in certification exams. The TCP/IP model, with four layers, is the practical model that the internet is built upon and is more commonly used for real-world troubleshooting. Understanding both is essential for any network engineer."
        },
        {
          "id": "network-engineering-101-l01-c2",
          "title": "The Seven OSI Layers",
          "content": "The OSI model divides network communication into seven distinct layers, from the physical hardware to the software you interact with. Let's go from bottom to top:\n1. **Physical Layer**: This is the hardware level, dealing with cables, connectors, and the electrical signals or radio waves that represent our data as bits.\n2. **Data Link Layer**: This layer organizes bits into frames and uses MAC addresses to deliver data between devices on the same local network. It also performs error checking to ensure the data arrives intact.\n3. **Network Layer**: This layer is responsible for routing data across different networks. It uses IP addresses to determine the best path for packets to travel from a source to a destination.\n4. **Transport Layer**: This layer manages the communication between two hosts. It provides either reliable, connection-oriented delivery with TCP or fast, connectionless delivery with UDP.\n5. **Session Layer**: This layer establishes, manages, and terminates sessions, or dialogues, between applications on different devices.\n6. **Presentation Layer**: This layer acts as a translator, ensuring data is in a format the application layer can understand. It handles tasks like data encryption, compression, and character encoding.\n7. **Application Layer**: This is the layer closest to the user. It provides network services directly to software applications, including protocols like HTTP for web browsing and SMTP for email."
        },
        {
          "id": "network-engineering-101-l01-c3",
          "title": "TCP/IP and Protocol Data Units",
          "content": "The TCP/IP model simplifies the OSI model into four layers, which map directly to the functions of modern networks:\n1. **Network Access Layer**: Combines the OSI Physical and Data Link layers. It handles the physical transmission of data.\n2. **Internet Layer**: Corresponds to the OSI Network layer. It is responsible for IP addressing and routing.\n3. **Transport Layer**: This layer is the same as the OSI Transport layer, managing host-to-host communication with TCP or UDP.\n4. **Application Layer**: Merges the OSI Session, Presentation, and Application layers. It's where user-facing protocols like HTTP and DNS operate.\nAs data moves down these layers, it undergoes a process called encapsulation. Each layer adds its own header, like putting a letter into a series of envelopes. The name for this data package changes at each layer: it's a **segment** at the Transport layer, a **packet** at the Internet layer, and a **frame** at the Network Access layer. These packages are called Protocol Data Units (PDUs), and network engineers use tools like Wireshark to analyze them when troubleshooting."
        }
      ],
      "flashcards": [
        {
          "id": "network-engineering-101-l01-f1",
          "front": "How many layers does the OSI model have?",
          "back": "Seven: Physical, Data Link, Network, Transport, Session, Presentation, and Application."
        },
        {
          "id": "network-engineering-101-l01-f2",
          "front": "What is encapsulation?",
          "back": "The process of wrapping upper-layer data with a header (and sometimes a trailer) at each lower layer before transmission."
        },
        {
          "id": "network-engineering-101-l01-f3",
          "front": "Name the four layers of the TCP/IP model.",
          "back": "Network Access, Internet, Transport, and Application."
        },
        {
          "id": "network-engineering-101-l01-f4",
          "front": "What PDU is associated with Layer 3 of the OSI model?",
          "back": "A packet."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-101-l01-a1",
          "type": "image",
          "title": "OSI vs. TCP/IP Comparison",
          "content": "A clear, side-by-side diagram showing the seven OSI layers (Application, Presentation, Session, Transport, Network, Data Link, Physical) mapped to the four TCP/IP layers (Application, Transport, Internet, Network Access). The diagram should also list the PDU name (Data, Segment, Packet, Frame, Bits) next to the corresponding layers."
        },
        {
          "id": "network-engineering-101-l01-a2",
          "type": "animation",
          "title": "Encapsulation Walk-through",
          "content": "An animated sequence showing a piece of data (like an email) originating at the Application layer. As it travels down the stack, a header is visually added at the Transport (TCP), Internet (IP), and Network Access (Ethernet) layers, showing the PDU growing at each step before being sent as bits."
        }
      ]
    },
    {
      "id": "network-engineering-101-l02",
      "title": "IP Addressing and Subnetting",
      "type": "interactive",
      "duration": 14,
      "chunks": [
        {
          "id": "network-engineering-101-l02-c1",
          "title": "IPv4 Address Structure",
          "content": "An IPv4 address is a unique 32-bit number that identifies a device on a network. To make it human-readable, we write it in dotted-decimal notation as four numbers (octets) separated by dots, like 192.168.1.10. Each octet ranges from 0 to 255.\nEvery IP address has two parts: a network portion and a host portion. Think of it like a street address: the network portion is the street name, and the host portion is the house number. Originally, addresses were grouped into classes (A, B, C), but this was inefficient. Today, we use Classless Inter-Domain Routing (CIDR). CIDR notation adds a slash and a number to the IP address, like 192.168.1.0/24. The number after the slash indicates how many bits are in the network portion. Some addresses are special, like 127.0.0.1 (the loopback address for self-testing) and private address ranges (e.g., 10.0.0.0/8) used for internal networks that are not reachable on the public internet."
        },
        {
          "id": "network-engineering-101-l02-c2",
          "title": "Subnet Masks and Subnetting",
          "content": "A subnet mask is a 32-bit number that tells a computer which part of an IP address is the network and which part is the host. For a /24 network, the subnet mask is 255.255.255.0. The '255's correspond to the network bits.\nSubnetting is the process of taking one large network and dividing it into smaller, more manageable networks called subnets. This is done by 'borrowing' bits from the host portion to create more network portions. For example, we could take the 192.168.1.0/24 network and divide it into two smaller /25 subnets. This improves security and reduces network traffic.\nTo calculate the number of usable host addresses in a subnet, we use the formula 2^h - 2, where 'h' is the number of host bits. We subtract two because the first address in any subnet is the network address itself, and the last address is the broadcast address (used to send messages to all devices on the subnet). Neither can be assigned to a device."
        },
        {
          "id": "network-engineering-101-l02-c3",
          "title": "IPv6 Overview",
          "content": "The world ran out of new IPv4 addresses, which prompted the creation of IPv6. IPv6 uses a 128-bit address, providing a virtually inexhaustible number of unique addresses. They look very different, written as eight groups of four hexadecimal digits separated by colons, like 2001:0db8:85a3:0000:0000:8a2e:0370:7334. To simplify them, leading zeros can be omitted, and one consecutive block of all-zero groups can be replaced with a double colon (::).\nKey advantages of IPv6 include its massive address space, which eliminates the need for complex Network Address Translation (NAT), and its built-in support for IPsec, enhancing security. Devices on an IPv6 network can automatically configure their own link-local addresses (starting with fe80::), simplifying network setup. While the world is slowly transitioning, both IPv4 and IPv6 will coexist for many years using techniques like dual-stack, where devices have both types of addresses."
        }
      ],
      "flashcards": [
        {
          "id": "network-engineering-101-l02-f1",
          "front": "How many bits are in an IPv4 address?",
          "back": "32 bits, written as four octets in dotted-decimal notation."
        },
        {
          "id": "network-engineering-101-l02-f2",
          "front": "What does /24 mean in CIDR notation?",
          "back": "The first 24 bits are the network portion; the remaining 8 bits are for hosts (subnet mask 255.255.255.0)."
        },
        {
          "id": "network-engineering-101-l02-f3",
          "front": "How many usable hosts exist in a /26 subnet?",
          "back": "62. A /26 leaves 6 bits for hosts (32 - 26 = 6). The formula is 2^6 - 2 = 64 - 2 = 62."
        },
        {
          "id": "network-engineering-101-l02-f4",
          "front": "How many bits are in an IPv6 address?",
          "back": "128 bits, written as eight groups of four hexadecimal digits separated by colons."
        }
      ],
      "metadata": {
        "prompts": [
          "Given the network 10.0.0.0/24, calculate the network address, broadcast address, and usable host range for the third /26 subnet.",
          "Convert the subnet mask 255.255.240.0 to CIDR notation and determine how many hosts it supports.",
          "Explain why the network address and broadcast address are not assignable to hosts."
        ]
      },
      "learningAids": [
        {
          "id": "network-engineering-101-l02-a1",
          "type": "practice",
          "title": "Subnetting Calculator Challenge",
          "content": "Use an interactive subnet calculator to subdivide the 172.16.0.0/16 network into /20 subnets. List the network address, usable host range, and broadcast address for the first three resulting subnets."
        }
      ]
    },
    {
      "id": "network-engineering-101-l03",
      "title": "Network Models & IP Checkpoint",
      "type": "quiz",
      "duration": 8,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "questions": [
        {
          "id": "network-engineering-101-l03-q1",
          "text": "At which OSI layer do routers operate to forward packets between networks?",
          "skillId": "network-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Layer 1 — Physical"
            },
            {
              "id": "b",
              "text": "Layer 2 — Data Link"
            },
            {
              "id": "c",
              "text": "Layer 3 — Network"
            },
            {
              "id": "d",
              "text": "Layer 4 — Transport"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Routers make forwarding decisions based on IP addresses, which are Layer 3 (Network layer) constructs."
        },
        {
          "id": "network-engineering-101-l03-q2",
          "text": "What is the correct subnet mask for a /20 CIDR prefix?",
          "skillId": "network-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "255.255.240.0"
            },
            {
              "id": "b",
              "text": "255.255.248.0"
            },
            {
              "id": "c",
              "text": "255.255.255.0"
            },
            {
              "id": "d",
              "text": "255.255.224.0"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A /20 mask sets the first 20 bits to 1. In the third octet, this is 11110000 in binary, which equals 240 in decimal. So the mask is 255.255.240.0."
        },
        {
          "id": "network-engineering-101-l03-q3",
          "text": "Which PDU is created at the Transport layer of the OSI model when using TCP?",
          "skillId": "network-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Frame"
            },
            {
              "id": "b",
              "text": "Packet"
            },
            {
              "id": "c",
              "text": "Segment"
            },
            {
              "id": "d",
              "text": "Bit"
            }
          ],
          "correctOptionId": "c",
          "explanation": "TCP at Layer 4 encapsulates application data into segments, adding source/destination port numbers and sequence information."
        },
        {
          "id": "network-engineering-101-l03-q4",
          "text": "How many usable host addresses are available in a /28 IPv4 subnet?",
          "skillId": "network-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "16"
            },
            {
              "id": "b",
              "text": "14"
            },
            {
              "id": "c",
              "text": "30"
            },
            {
              "id": "d",
              "text": "12"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A /28 prefix leaves 4 bits for the host portion (32 - 28 = 4). The number of usable addresses is 2^4 - 2 = 16 - 2 = 14."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-101-l03-a1",
          "type": "mnemonic",
          "title": "OSI Mnemonic",
          "content": "Remember the OSI layers top-to-bottom: 'All People Seem To Need Data Processing' — Application, Presentation, Session, Transport, Network, Data Link, Physical."
        }
      ]
    },
    {
      "id": "network-engineering-101-l04",
      "title": "Switching and Routing",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "network-engineering-101-l04-c1",
          "title": "Ethernet and MAC Addresses",
          "content": "Ethernet is the dominant technology for local area networks (LANs). Every network-capable device has a unique 48-bit Media Access Control (MAC) address burned into its hardware, written in hexadecimal like AA:BB:CC:DD:EE:FF. This is its physical address on a local network.\nNetwork switches operate at Layer 2 and are the core of most LANs. A switch builds a MAC address table by inspecting the source MAC address of incoming frames. This table maps MAC addresses to the switch port they are connected to. When a frame arrives for a known destination, the switch forwards it only to the correct port. If the destination is unknown, the switch floods the frame to all ports except the one it came in on. This learning process makes the network efficient by reducing unnecessary traffic."
        },
        {
          "id": "network-engineering-101-l04-c2",
          "title": "VLANs and Spanning Tree Protocol",
          "content": "Virtual LANs (VLANs) allow you to segment a single physical switch into multiple, separate logical networks. Think of it as creating different virtual 'floors' in an office building; devices on VLAN 10 can't talk directly to devices on VLAN 20, even if they're plugged into the same switch. This enhances security and performance by containing broadcast traffic.\nTo connect switches and carry traffic for multiple VLANs, we use a 'trunk' port. Trunk links use the 802.1Q protocol to add a tag to each frame, identifying which VLAN it belongs to. To prevent network-crippling loops that can occur when switches are connected redundantly, we use the Spanning Tree Protocol (STP). STP intelligently blocks redundant paths to ensure there is only one active route between any two points on the network, creating a loop-free topology."
        },
        {
          "id": "network-engineering-101-l04-c3",
          "title": "Routing Fundamentals",
          "content": "Routers operate at Layer 3 and are responsible for connecting different networks. While a switch uses MAC addresses to forward frames locally, a router uses IP addresses to forward packets between networks. Each router maintains a routing table, which is a list of known networks and the best path to reach them.\nRouters build these tables using routing protocols. Distance-vector protocols like RIP (Routing Information Protocol) choose the best path based on the fewest 'hops' (routers) to the destination. Link-state protocols like OSPF (Open Shortest Path First) build a complete map of the network and use Dijkstra's algorithm to calculate the fastest path based on link speed. For the global internet, BGP (Border Gateway Protocol) is used to exchange routing information between the large networks of service providers."
        }
      ],
      "flashcards": [
        {
          "id": "network-engineering-101-l04-f1",
          "front": "What does a switch use to decide which port to forward a frame to?",
          "back": "Its MAC address table, which maps MAC addresses to switch ports."
        },
        {
          "id": "network-engineering-101-l04-f2",
          "front": "What protocol prevents Layer 2 loops in a switched network?",
          "back": "Spanning Tree Protocol (STP), defined by IEEE 802.1D, and its faster variant Rapid STP (802.1w)."
        },
        {
          "id": "network-engineering-101-l04-f3",
          "front": "What algorithm does OSPF use to calculate the shortest path?",
          "back": "Dijkstra's shortest-path-first (SPF) algorithm."
        },
        {
          "id": "network-engineering-101-l04-f4",
          "front": "What is the primary difference between a switch and a router?",
          "back": "A switch operates at Layer 2 and forwards frames based on MAC addresses within a single network. A router operates at Layer 3 and forwards packets based on IP addresses between different networks."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-101-l04-a1",
          "type": "image",
          "title": "VLAN Trunk Diagram",
          "content": "Diagram showing two switches connected by a single 802.1Q trunk link. On each switch, show ports assigned to VLAN 10 (e.g., Sales) and VLAN 20 (e.g., Engineering). Illustrate how tagged frames for both VLANs travel across the trunk, while untagged frames stay within their respective VLANs."
        },
        {
          "id": "network-engineering-101-l04-a2",
          "type": "animation",
          "title": "How a Router Works",
          "content": "Animation showing a packet arriving at a router. The router inspects the destination IP address, looks it up in its routing table, and forwards the packet out the correct interface toward the next-hop router. Contrast this with a switch forwarding a frame based on a MAC address."
        }
      ]
    },
    {
      "id": "network-engineering-101-l05",
      "title": "Transport and Application Protocols",
      "type": "interactive",
      "duration": 14,
      "chunks": [
        {
          "id": "network-engineering-101-l05-c1",
          "title": "TCP vs. UDP",
          "content": "At the Transport layer, applications choose between two main protocols: TCP and UDP. TCP (Transmission Control Protocol) is reliable and connection-oriented. Think of it like certified mail: it establishes a connection with a 'three-way handshake' (SYN, SYN-ACK, ACK), numbers each segment, and requires acknowledgements to ensure all data arrives in the correct order. It's used for web browsing, email, and file transfers where accuracy is critical.\nUDP (User Datagram Protocol) is connectionless and unreliable. It's like sending a postcard: you send the data and hope it gets there, but there's no confirmation. This makes it much faster and more efficient, with less overhead. UDP is perfect for real-time applications like video streaming, online gaming, and VoIP calls, where speed is more important than occasional data loss."
        },
        {
          "id": "network-engineering-101-l05-c2",
          "title": "DNS and DHCP",
          "content": "DNS (Domain Name System) is the internet's phonebook. It translates human-friendly domain names like 'www.example.com' into computer-friendly IP addresses. When you type a URL, your computer queries a series of DNS servers (root, TLD, and authoritative) to find the correct IP address. DNS uses different record types, like 'A' records for IPv4 addresses and 'MX' records for mail servers.\nDHCP (Dynamic Host Configuration Protocol) automates the process of assigning IP addresses to devices on a network. When a device connects, it goes through a four-step process called DORA (Discover, Offer, Request, Acknowledge) to lease an IP address, subnet mask, default gateway, and DNS server information from a DHCP server. This saves network administrators from having to configure every device manually."
        },
        {
          "id": "network-engineering-101-l05-c3",
          "title": "Common Application Protocols",
          "content": "Many protocols operate at the Application layer. HTTP (Hypertext Transfer Protocol) on TCP port 80 is the foundation of the World Wide Web, used by browsers to request web pages. HTTPS on TCP port 443 is the secure version, encrypting traffic with TLS. FTP (File Transfer Protocol) on TCP ports 20 and 21 is used for transferring files. For sending email, clients use SMTP (Simple Mail Transfer Protocol) on TCP port 25 or 587. To retrieve email, clients use either POP3 (Post Office Protocol) or IMAP (Internet Message Access Protocol). Each of these services uses a well-known port number, which acts like a specific doorway on a server for that service."
        }
      ],
      "flashcards": [
        {
          "id": "network-engineering-101-l05-f1",
          "front": "What are the three steps of the TCP three-way handshake?",
          "back": "1. Client sends SYN. 2. Server replies with SYN-ACK. 3. Client sends ACK."
        },
        {
          "id": "network-engineering-101-l05-f2",
          "front": "What is the primary function of DNS?",
          "back": "To resolve human-readable domain names into machine-readable IP addresses."
        },
        {
          "id": "network-engineering-101-l05-f3",
          "front": "What does DORA stand for in DHCP?",
          "back": "Discover, Offer, Request, Acknowledge — the four-step process a client uses to obtain an IP address."
        },
        {
          "id": "network-engineering-101-l05-f4",
          "front": "What is the difference between HTTP and HTTPS?",
          "back": "HTTPS encrypts the data transfer between the client and server using TLS, making it secure. HTTP sends data in plain text. HTTPS uses port 443, while HTTP uses port 80."
        }
      ],
      "metadata": {
        "prompts": [
          "Capture a TCP three-way handshake in the simulator: identify the SYN, SYN-ACK, and ACK packets and record the sequence numbers.",
          "Perform an nslookup for three different domains and note whether the response is authoritative or non-authoritative.",
          "Compare the headers of an HTTP and an HTTPS request — explain what information is visible to an eavesdropper in each case."
        ]
      },
      "learningAids": [
        {
          "id": "network-engineering-101-l05-a1",
          "type": "practice",
          "title": "Protocol Packet Inspector",
          "content": "Use an interactive packet inspector to examine the headers of captured TCP, UDP, DNS, and HTTP packets. Click on different fields (like source port, destination IP, sequence number) to get a pop-up explanation of its function."
        }
      ]
    },
    {
      "id": "network-engineering-101-l06",
      "title": "Switching & Protocols Checkpoint",
      "type": "quiz",
      "duration": 8,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "questions": [
        {
          "id": "network-engineering-101-l06-q1",
          "text": "Which IEEE standard adds a 4-byte VLAN tag to an Ethernet frame on trunk links?",
          "skillId": "network-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "802.1D"
            },
            {
              "id": "b",
              "text": "802.1Q"
            },
            {
              "id": "c",
              "text": "802.11ac"
            },
            {
              "id": "d",
              "text": "802.3af"
            }
          ],
          "correctOptionId": "b",
          "explanation": "IEEE 802.1Q defines VLAN tagging for Ethernet frames, allowing a single trunk link to carry traffic for multiple VLANs."
        },
        {
          "id": "network-engineering-101-l06-q2",
          "text": "During the TCP three-way handshake, what does the server send in response to the client's SYN?",
          "skillId": "network-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "ACK only"
            },
            {
              "id": "b",
              "text": "SYN-ACK"
            },
            {
              "id": "c",
              "text": "FIN"
            },
            {
              "id": "d",
              "text": "RST"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The server acknowledges the client's SYN and sends its own SYN in a combined SYN-ACK segment."
        },
        {
          "id": "network-engineering-101-l06-q3",
          "text": "Which routing protocol uses Dijkstra's algorithm and is classified as a link-state protocol?",
          "skillId": "network-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "RIP"
            },
            {
              "id": "b",
              "text": "BGP"
            },
            {
              "id": "c",
              "text": "OSPF"
            },
            {
              "id": "d",
              "text": "EIGRP"
            }
          ],
          "correctOptionId": "c",
          "explanation": "OSPF (Open Shortest Path First) is a link-state protocol that uses Dijkstra's SPF algorithm to compute optimal routes."
        },
        {
          "id": "network-engineering-101-l06-q4",
          "text": "What are the four steps of the DHCP address-assignment process in order?",
          "skillId": "network-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Discover, Offer, Request, Acknowledge"
            },
            {
              "id": "b",
              "text": "Request, Offer, Discover, Acknowledge"
            },
            {
              "id": "c",
              "text": "SYN, SYN-ACK, ACK, Data"
            },
            {
              "id": "d",
              "text": "Query, Response, Confirm, Bind"
            }
          ],
          "correctOptionId": "a",
          "explanation": "DHCP follows the DORA sequence: the client Discovers available servers, receives an Offer, sends a Request, and gets an Acknowledgement."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-101-l06-a1",
          "type": "mnemonic",
          "title": "DORA for DHCP",
          "content": "Remember DHCP's four steps with DORA the Explorer: Discover → Offer → Request → Acknowledge."
        }
      ]
    },
    {
      "id": "network-engineering-101-l07",
      "title": "Network Security",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "network-engineering-101-l07-c1",
          "title": "Firewalls and Access Control Lists",
          "content": "A firewall is a security device that acts as a barrier between a trusted internal network and an untrusted external network, like the internet. It filters incoming and outgoing traffic based on a set of rules. A stateful firewall is more advanced than a stateless one because it tracks the state of active connections, automatically allowing return traffic for established sessions. Next-Generation Firewalls (NGFWs) add more advanced features like application awareness and intrusion prevention.\nAccess Control Lists (ACLs) are the rules used by firewalls and routers to filter traffic. ACLs are processed in order from top to bottom, and the first rule that matches the traffic is applied. An implicit 'deny all' rule is always at the end, blocking any traffic that doesn't match a permit rule. Extended ACLs are more granular than standard ACLs, as they can filter based on source/destination IP, protocol, and port numbers."
        },
        {
          "id": "network-engineering-101-l07-c2",
          "title": "VPNs and Intrusion Detection",
          "content": "A Virtual Private Network (VPN) creates a secure, encrypted 'tunnel' over a public network like the internet. This allows remote users to connect securely to a private corporate network or simply protect their browsing activity. IPsec is a common VPN protocol that encrypts data at the network layer, while SSL/TLS VPNs are often used for client-based remote access through a web browser.\nAn Intrusion Detection System (IDS) is like a burglar alarm for your network. It monitors traffic for suspicious activity or known attack patterns and sends an alert if it finds something. An Intrusion Prevention System (IPS) takes this a step further. It sits directly in the path of traffic and can actively block malicious packets, acting like a security guard that can stop a threat in its tracks."
        },
        {
          "id": "network-engineering-101-l07-c3",
          "title": "Wireless Security and Common Attacks",
          "content": "Securing wireless networks is critical because their signals can be accessed by anyone in range. The modern security standard is WPA3 (Wi-Fi Protected Access 3), which uses Simultaneous Authentication of Equals (SAE) to prevent attackers from guessing passwords offline. For corporate environments, 802.1X authentication provides a much stronger method, requiring each user to authenticate with a central server before gaining network access.\nCommon network attacks include DDoS (Distributed Denial of Service), which floods a server with traffic to make it unavailable; ARP spoofing, a man-in-the-middle attack that redirects local traffic through an attacker's machine; and DNS poisoning, which corrupts DNS records to send users to malicious websites. A strong security posture relies on a defence-in-depth strategy, using multiple layers of security controls."
        }
      ],
      "flashcards": [
        {
          "id": "network-engineering-101-l07-f1",
          "front": "What is the difference between a stateless and a stateful firewall?",
          "back": "A stateless firewall evaluates each packet independently based on its rules. A stateful firewall tracks active connections and automatically permits return traffic for those connections."
        },
        {
          "id": "network-engineering-101-l07-f2",
          "front": "What is the primary purpose of a VPN?",
          "back": "To create a secure, encrypted connection over an untrusted public network."
        },
        {
          "id": "network-engineering-101-l07-f3",
          "front": "What does an IPS do that an IDS cannot?",
          "back": "An IPS sits inline with traffic and can actively block malicious activity, whereas an IDS can only monitor and send alerts."
        },
        {
          "id": "network-engineering-101-l07-f4",
          "front": "What authentication method does WPA3 use to resist offline dictionary attacks?",
          "back": "Simultaneous Authentication of Equals (SAE)."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-101-l07-a1",
          "type": "image",
          "title": "Firewall Rule Processing",
          "content": "A flowchart showing a packet arriving at a firewall. The firewall checks the packet against ACL Rule 1, then Rule 2, and so on. Show a branch for a 'match' that leads to a 'Permit' or 'Deny' action, and a branch for 'no match' that proceeds to the next rule. The final step should be the 'Implicit Deny' rule."
        },
        {
          "id": "network-engineering-101-l07-a2",
          "type": "animation",
          "title": "Man-in-the-Middle Attack",
          "content": "An animation showing two users communicating normally. An attacker then performs ARP spoofing, tricking both users into sending their traffic to the attacker's machine first. The animation shows the attacker intercepting and reading the unencrypted data before forwarding it to the intended recipient."
        }
      ]
    },
    {
      "id": "network-engineering-101-l08",
      "title": "Wireless and WAN Technologies",
      "type": "interactive",
      "duration": 14,
      "chunks": [
        {
          "id": "network-engineering-101-l08-c1",
          "title": "802.11 Wi-Fi Standards",
          "content": "The IEEE 802.11 standards define how Wi-Fi works. Wi-Fi 4 (802.11n) introduced MIMO (Multiple Input Multiple Output) for faster speeds on both 2.4 GHz and 5 GHz bands. Wi-Fi 5 (802.11ac) operated exclusively on the less-crowded 5 GHz band, offering even higher speeds with wider channels. The latest standard, Wi-Fi 6/6E (802.11ax), is a game-changer for dense environments like stadiums and offices. It introduces OFDMA (Orthogonal Frequency-Division Multiple Access), which allows an access point to talk to multiple devices simultaneously, dramatically improving efficiency. Wi-Fi 6E extends this into the new 6 GHz band.\nProper channel planning is crucial. In the 2.4 GHz band, only channels 1, 6, and 11 are non-overlapping. Using other channels causes interference, which degrades performance. The 5 GHz band offers many more non-overlapping channels but has a shorter range."
        },
        {
          "id": "network-engineering-101-l08-c2",
          "title": "WAN Technologies",
          "content": "A Wide Area Network (WAN) connects networks over large geographical distances. Traditionally, businesses used technologies like MPLS (Multiprotocol Label Switching), a private connection from a service provider that offers reliable performance and quality of service guarantees. Today, SD-WAN (Software-Defined WAN) is transforming the industry. SD-WAN uses a centralized controller to intelligently manage multiple internet connections (like MPLS, broadband, and 4G/5G). It can automatically route application traffic over the best-performing path, improving flexibility and often reducing costs.\nThe physical connection itself can be made with different media. Fibre-optic cable transmits data as pulses of light, offering incredible speed and immunity to interference, making it ideal for long distances. Copper cables like Cat6 are cheaper and sufficient for shorter distances, such as within an office, but are susceptible to interference."
        },
        {
          "id": "network-engineering-101-l08-c3",
          "title": "Network Troubleshooting Tools",
          "content": "Effective troubleshooting follows a structured methodology: 1. Identify the problem. 2. Establish a theory of probable cause. 3. Test the theory. 4. Establish a plan of action and implement the solution. 5. Verify full system functionality. 6. Document findings.\nSeveral command-line tools are essential for this process. `ping` sends a small packet to a destination to test basic connectivity and measure latency. `traceroute` (or `tracert` on Windows) maps the entire path a packet takes, showing every router 'hop' along the way. This helps pinpoint where a connection is failing. `nslookup` (or `dig`) is used to query DNS servers to verify that domain names are resolving to the correct IP addresses. `ipconfig` (or `ifconfig`/`ip`) displays the local IP configuration of your own device."
        }
      ],
      "flashcards": [
        {
          "id": "network-engineering-101-l08-f1",
          "front": "Which three 2.4 GHz channels are non-overlapping?",
          "back": "Channels 1, 6, and 11."
        },
        {
          "id": "network-engineering-101-l08-f2",
          "front": "What is a key benefit of SD-WAN?",
          "back": "It intelligently manages multiple WAN connections, routing traffic over the optimal path based on application policies and real-time link performance."
        },
        {
          "id": "network-engineering-101-l08-f3",
          "front": "What does traceroute reveal about a network path?",
          "back": "Each intermediate router hop, its IP address, and the round-trip latency to that hop."
        },
        {
          "id": "network-engineering-101-l08-f4",
          "front": "What technology does Wi-Fi 6 (802.11ax) introduce for multi-user efficiency?",
          "back": "OFDMA (Orthogonal Frequency-Division Multiple Access), which allows simultaneous data transmission to multiple devices in the same time slot."
        }
      ],
      "metadata": {
        "prompts": [
          "Use ping to test connectivity to three hosts; record the RTT and packet loss for each. Then run traceroute to map the path to an external server.",
          "Use nslookup to resolve A and MX records for two different domains. Identify the authoritative name server for each.",
          "Given a floor plan with 40 access points on the 2.4 GHz band, design a channel assignment plan using only channels 1, 6, and 11 to minimise co-channel interference."
        ]
      },
      "learningAids": [
        {
          "id": "network-engineering-101-l08-a1",
          "type": "practice",
          "title": "Troubleshooting Lab",
          "content": "Step through a simulated network failure. A user reports they can't access a website. Use `ipconfig` to check their local settings, `ping` to test the gateway and an external IP, `traceroute` to find the break in the path, and `nslookup` to diagnose a DNS issue. Resolve the issue based on the findings."
        }
      ]
    },
    {
      "id": "network-engineering-101-l09",
      "title": "Security & WAN Checkpoint",
      "type": "quiz",
      "duration": 8,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "questions": [
        {
          "id": "network-engineering-101-l09-q1",
          "text": "Which type of firewall tracks the state of active connections and allows return traffic automatically?",
          "skillId": "network-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Stateless packet filter"
            },
            {
              "id": "b",
              "text": "Stateful inspection firewall"
            },
            {
              "id": "c",
              "text": "Proxy server"
            },
            {
              "id": "d",
              "text": "Web application firewall"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A stateful inspection firewall maintains a state table of active connections and permits return traffic matching established sessions."
        },
        {
          "id": "network-engineering-101-l09-q2",
          "text": "In the 2.4 GHz Wi-Fi band, which channels are non-overlapping and recommended for deployment?",
          "skillId": "network-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "1, 4, 8"
            },
            {
              "id": "b",
              "text": "1, 6, 11"
            },
            {
              "id": "c",
              "text": "2, 7, 12"
            },
            {
              "id": "d",
              "text": "3, 8, 13"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Channels 1, 6, and 11 are the three non-overlapping channels in the 2.4 GHz band, which minimizes co-channel interference."
        },
        {
          "id": "network-engineering-101-l09-q3",
          "text": "What does the traceroute command reveal about a network path?",
          "skillId": "network-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The MAC address of each switch along the path"
            },
            {
              "id": "b",
              "text": "The DNS records for each domain in the path"
            },
            {
              "id": "c",
              "text": "Each router hop, its IP address, and round-trip latency"
            },
            {
              "id": "d",
              "text": "The bandwidth capacity of every link in the path"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Traceroute sends probes with incrementing TTL values, causing each router hop to respond and revealing its IP address and the latency at every point along the path."
        },
        {
          "id": "network-engineering-101-l09-q4",
          "text": "Which technology abstracts multiple WAN transports and routes traffic based on application policies?",
          "skillId": "network-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "MPLS"
            },
            {
              "id": "b",
              "text": "Frame Relay"
            },
            {
              "id": "c",
              "text": "SD-WAN"
            },
            {
              "id": "d",
              "text": "ATM"
            }
          ],
          "correctOptionId": "c",
          "explanation": "SD-WAN uses centralized controllers to abstract underlying transports (MPLS, broadband, LTE) and dynamically route traffic based on application requirements."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-101-l09-a1",
          "type": "mnemonic",
          "title": "Troubleshooting Steps",
          "content": "Remember the systematic approach: 'I Eat Tacos In Very Dark rooms' — Identify, Establish Theory, Test, Implement, Verify, Document."
        }
      ]
    },
    {
      "id": "network-engineering-101-l10",
      "title": "Mastery Quiz: Networking",
      "type": "quiz",
      "duration": 10,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "questions": [
        {
          "id": "network-engineering-101-l10-q1",
          "text": "A host has the IP address 172.16.45.130/26. What is the broadcast address for this subnet?",
          "skillId": "network-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "172.16.45.191"
            },
            {
              "id": "b",
              "text": "172.16.45.159"
            },
            {
              "id": "c",
              "text": "172.16.45.255"
            },
            {
              "id": "d",
              "text": "172.16.45.128"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A /26 subnet has 6 host bits, creating blocks of 64 addresses (2^6). The subnets are .0, .64, .128, .192. The address 172.16.45.130 falls into the subnet that starts at .128. The next subnet starts at .192, so the broadcast address for the .128 subnet is one less: 172.16.45.191."
        },
        {
          "id": "network-engineering-101-l10-q2",
          "text": "Which protocol is responsible for exchanging routing information between autonomous systems on the Internet?",
          "skillId": "network-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "OSPF"
            },
            {
              "id": "b",
              "text": "RIP"
            },
            {
              "id": "c",
              "text": "BGP"
            },
            {
              "id": "d",
              "text": "EIGRP"
            }
          ],
          "correctOptionId": "c",
          "explanation": "BGP (Border Gateway Protocol) is the path-vector protocol used to exchange routing information between different autonomous systems (like ISPs), forming the backbone of Internet routing."
        },
        {
          "id": "network-engineering-101-l10-q3",
          "text": "An attacker sends forged ARP replies to associate their MAC address with the default gateway's IP. What is this attack called?",
          "skillId": "network-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "DNS poisoning"
            },
            {
              "id": "b",
              "text": "DDoS"
            },
            {
              "id": "c",
              "text": "ARP spoofing"
            },
            {
              "id": "d",
              "text": "Brute-force attack"
            }
          ],
          "correctOptionId": "c",
          "explanation": "ARP spoofing (or ARP poisoning) corrupts the ARP caches on a local network, allowing an attacker to intercept traffic intended for another device, such as the default gateway."
        },
        {
          "id": "network-engineering-101-l10-q4",
          "text": "Which Wi-Fi generation introduces OFDMA and operates across the 2.4 GHz, 5 GHz, and 6 GHz bands?",
          "skillId": "network-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Wi-Fi 4 (802.11n)"
            },
            {
              "id": "b",
              "text": "Wi-Fi 5 (802.11ac)"
            },
            {
              "id": "c",
              "text": "Wi-Fi 6/6E (802.11ax)"
            },
            {
              "id": "d",
              "text": "Wi-Fi 3 (802.11g)"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Wi-Fi 6 (802.11ax) introduced OFDMA for efficient multi-user scheduling, and the Wi-Fi 6E extension added operation in the 6 GHz band."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-101-l10-a1",
          "type": "mnemonic",
          "title": "Key Port Numbers",
          "content": "Remember critical ports: HTTP 80, HTTPS 443, DNS 53, DHCP 67/68, FTP 21, SSH 22, SMTP 25, RDP 3389."
        }
      ]
    }
  ]
};
