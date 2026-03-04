import type { LearningModule } from "@/lib/modules/types";

export const NetworkEngineering101Module: LearningModule = {
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
  "version": "2.0.0",
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
          "content": "In our modern world, networks are incredibly intricate systems that involve a wide variety of components. These include hardware like computers and routers, cables that connect them, radio waves that transmit data wirelessly, software that manages these connections, and numerous protocols that dictate how data is sent and received. All of these elements must work together smoothly for a network to function effectively. To help us understand and manage this complexity, we use layered reference models.\nLayered models break down the entire network into smaller, more manageable parts, known as layers. Each layer has a specific role and responsibility, and it communicates with the layers directly above and below it through standardized interfaces. This clear separation of functions allows different companies and developers to innovate and improve one layer without disrupting the others. For example, if a new technology is developed for the application layer, it can be implemented without affecting the transport or network layers.\nThe two main models that we focus on in network engineering are the OSI (Open Systems Interconnection) model and the TCP/IP model. The OSI model consists of seven layers and was developed by the International Organization for Standardization (ISO). It provides a comprehensive framework for understanding how different networking technologies interact. On the other hand, the TCP/IP model has four layers and serves as the foundation of the Internet, guiding how data is transmitted across networks.\nUnderstanding both of these models is essential for anyone interested in network engineering. Certification exams often reference the OSI layers, which means that having a solid grasp of this model is crucial for passing those tests. Additionally, in real-world scenarios, troubleshooting network issues typically aligns more closely with the TCP/IP model. Therefore, learning about both models will equip you with the knowledge needed to succeed in both academic and professional settings.\nContext recap: In our modern world, networks are incredibly intricate systems that involve a wide variety of components. These include hardware like computers and routers, cables that connect them, radio waves that transmit data wirelessly, software that manages these connections, and numerous protocols that dictate how data is sent and received. All of these elements must work together smoothly for a network to function effectively. To help us understand and manage this complexity, we use layered reference models.\nWhy this matters: Why We Need Layered Models helps learners in Computer Science connect ideas from Network Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "network-engineering-101-l01-c2",
          "title": "The Seven OSI Layers",
          "content": "The OSI model is a framework that helps us understand how data moves through a network by dividing the process into seven distinct layers. Each layer has its own specific function, and together they work to ensure that information is transmitted correctly and efficiently. Let's explore these layers from the bottom to the top:\n1. **Physical Layer**: This is the foundation of the network. It involves the physical components like cables, connectors, and the electrical signals that travel through them. Think of it as the hardware that makes communication possible.\n2. **Data Link Layer**: At this layer, we focus on how data is packaged for transmission. This includes using MAC addresses to identify devices on the network and creating Ethernet frames to encapsulate the data. Additionally, this layer employs error detection methods, such as Cyclic Redundancy Check (CRC), to ensure that the data sent is accurate and free from corruption.\n3. **Network Layer**: This layer is crucial for directing data to its destination. It handles IP addressing, which assigns unique addresses to devices on the network, and routing, which determines the best path for data packets to travel across the network.\n4. **Transport Layer**: The transport layer is responsible for ensuring that data is delivered reliably. It uses protocols like TCP (Transmission Control Protocol) to guarantee that data arrives intact and in the correct order. Alternatively, it can use UDP (User Datagram Protocol) when speed is more important than reliability, such as in live video streaming.\n5. **Session Layer**: This layer manages the sessions or connections between applications. It keeps track of ongoing dialogues, ensuring that data from different sessions does not get mixed up.\n6. **Presentation Layer**: Here, data is prepared for the application layer. This includes translating data formats so that different systems can understand each other, as well as handling encryption for security and compression to reduce the size of the data being transmitted.\n7. **Application Layer**: This is the layer that users interact with directly. It includes protocols like HTTP for web browsing, DNS for resolving domain names, and SMTP for sending emails. This layer provides the interface that allows users to access and use network services.\nEach of these layers adds its own header to the data from the layer above it in a process called encapsulation. This means that as data moves up or down through the layers, it is wrapped in additional information that helps it reach its destination correctly. The specific names for the data units at each layer are: bits at the physical layer, frames at the data link layer, packets at the network layer, segments at the transport layer, and finally, data at the application layer. Understanding these layers is essential for anyone interested in network engineering, as they provide a clear picture of how data communication works.\nContext recap: The OSI model is a framework that helps us understand how data moves through a network by dividing the process into seven distinct layers. Each layer has its own specific function, and together they work to ensure that information is transmitted correctly and efficiently. Let's explore these layers from the bottom to the top:\n1. **Physical Layer**: This is the foundation of the network.\nWhy this matters: The Seven OSI Layers helps learners in Computer Science connect ideas from Network Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "network-engineering-101-l01-c3",
          "title": "TCP/IP and Protocol Data Units",
          "content": "The TCP/IP model is a simplified version of the OSI model, which originally has seven layers. In the TCP/IP model, these layers are combined into four main layers that make it easier to understand and work with networks. Let's break down these four layers: 1. **Network Access Layer**: This layer combines the Physical and Data Link layers from the OSI model. It is responsible for how data is physically transmitted over the network, including the cables and signals used. 2. **Internet Layer**: This layer corresponds to the Network layer of the OSI model. Its main job is to route data from one network to another, ensuring that information can travel across different networks efficiently. 3. **Transport Layer**: This layer remains the same as in the OSI model. It is crucial for ensuring that data is delivered reliably or quickly, depending on the needs of the application. 4. **Application Layer**: This layer merges the Session, Presentation, and Application layers from the OSI model. It is where users interact with the network, handling everything from web browsing to email. When you use a web browser to send a request, the process starts at the Application layer, which creates HTTP data. Next, the Transport layer adds a TCP header to this data, forming what is called a segment. The Internet layer then adds an IP header, turning it into a packet. Finally, the Network Access layer adds Ethernet headers and trailers, creating a frame that can be sent over the network. When this data reaches its destination, the process is reversed. Each layer removes its header and passes the remaining data, known as the payload, up to the next layer. These data units are called Protocol Data Units (PDUs), and they are essential for analyzing network traffic. Tools like Wireshark help network engineers capture and examine these PDUs to troubleshoot and optimize network performance.\nContext recap: The TCP/IP model is a simplified version of the OSI model, which originally has seven layers. In the TCP/IP model, these layers are combined into four main layers that make it easier to understand and work with networks. Let's break down these four layers: 1. **Network Access Layer**: This layer combines the Physical and Data Link layers from the OSI model.\nWhy this matters: TCP/IP and Protocol Data Units helps learners in Computer Science connect ideas from Network Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "front": "What PDU is associated with Layer 2 of the OSI model?",
          "back": "A frame."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-101-l01-a1",
          "type": "image",
          "title": "OSI vs TCP/IP Comparison",
          "content": "Side-by-side diagram showing the seven OSI layers mapped to the four TCP/IP layers, with PDU names at each level."
        },
        {
          "id": "network-engineering-101-l01-a2",
          "type": "animation",
          "title": "Encapsulation Walk-through",
          "content": "Animated sequence showing data being wrapped with headers as it travels from the Application layer down to the Physical layer."
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
          "content": "An IPv4 address is a special number that helps identify devices connected to a network, such as computers, printers, and smartphones. This address is made up of 32 bits, which is a way of saying it has 32 binary digits (0s and 1s). To make it easier for us to read and understand, we usually write it in a format called dotted-decimal notation. This format consists of four groups of numbers separated by dots. For example, an IPv4 address might look like 192.168.1.10. Each of these groups is called an octet, and each octet can have a value ranging from 0 to 255.\nIPv4 addresses are divided into two main parts: the network portion and the host portion. The network portion tells us which network the device belongs to, while the host portion identifies the specific device within that network.\nIn the early days of networking, there were three main classes of IPv4 addresses: Class A, Class B, and Class C. Class A addresses have a first octet ranging from 1 to 126, Class B addresses range from 128 to 191, and Class C addresses range from 192 to 223. However, as networks grew and became more complex, a new method called Classless Inter-Domain Routing (CIDR) was introduced. CIDR allows for more flexibility in how addresses are assigned and used.\nWhen we use CIDR notation, we write the address followed by a slash and a number, like this: 192.168.1.0/24. This means that the first 24 bits of the address are used to identify the network, while the remaining 8 bits are used to identify individual devices within that network.\nThere are also some special IPv4 addresses that serve unique purposes. For instance, the address 127.0.0.1 is known as the loopback address, which is used for testing and allows a device to communicate with itself. Additionally, there are private address ranges, such as 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16, which are reserved for use within internal networks and are not routable on the public internet. Understanding these concepts is essential for anyone interested in networking and computer science.\nContext recap: An IPv4 address is a special number that helps identify devices connected to a network, such as computers, printers, and smartphones. This address is made up of 32 bits, which is a way of saying it has 32 binary digits (0s and 1s). To make it easier for us to read and understand, we usually write it in a format called dotted-decimal notation. This format consists of four groups of numbers separated by dots.\nWhy this matters: IPv4 Address Structure helps learners in Computer Science connect ideas from Network Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "network-engineering-101-l02-c2",
          "title": "Subnet Masks and Subnetting",
          "content": "A subnet mask is an important concept in networking, represented as a 32-bit number. It helps us understand how to separate the network part of an IP address from the host part. For example, when we talk about a /24 subnet mask, it is written as 255.255.255.0. This means that the first three groups of numbers in the IP address are designated for the network itself. The remaining part is used for individual devices, or hosts, connected to that network.\nSubnetting is a useful technique that allows us to take a larger network and divide it into smaller, more manageable sections. This is done by borrowing bits from the host portion of the address. Let’s say we have the address 192.168.1.0/24. If we want to split this into two smaller networks, we would use a /25 subnet mask, which is represented as 255.255.255.128. By doing this, we create two subnets: the first one is 192.168.1.0/25, which can support devices with addresses ranging from .1 to .126, and the second one is 192.168.1.128/25, which can support devices with addresses from .129 to .254.\nTo figure out how many usable hosts we can have in a subnet, we use a specific formula: 2^h - 2. In this formula, 'h' represents the number of bits we have available for hosts. We subtract two from the total because one address is reserved for the network itself (where all the host bits are set to 0), and another address is reserved for the broadcast address (where all the host bits are set to 1).\nUnderstanding how to convert between binary and decimal numbers is a key skill that makes subnetting much easier. When you can quickly switch between these two number systems, you will find that working with subnet masks and subnetting becomes a lot more straightforward and manageable. This foundational knowledge is essential for anyone looking to delve deeper into network engineering and management.\nContext recap: A subnet mask is an important concept in networking, represented as a 32-bit number. It helps us understand how to separate the network part of an IP address from the host part. For example, when we talk about a /24 subnet mask, it is written as 255.255.255.0. This means that the first three groups of numbers in the IP address are designated for the network itself.\nWhy this matters: Subnet Masks and Subnetting helps learners in Computer Science connect ideas from Network Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "network-engineering-101-l02-c3",
          "title": "IPv6 Overview",
          "content": "IPv4 addresses are limited to about 4.3 billion unique addresses. This number might sound large, but it is not enough for the ever-increasing number of devices that connect to the Internet every day. To address this challenge, a new version called IPv6 was developed. IPv6 significantly expands the address space to 128 bits, which allows for an almost unimaginable number of unique addresses. IPv6 addresses are formatted in a specific way: they are written as eight groups of four hexadecimal digits, and these groups are separated by colons. For example, an IPv6 address might look like this: 2001:0db8:85a3:0000:0000:8a2e:0370:7334. In this format, if a group has leading zeros, those zeros can be left out to simplify the address. Additionally, if there are consecutive groups of all zeros, they can be replaced with a double colon (::) to make the address easier to read. One of the great advantages of IPv6 is that it removes the need for Network Address Translation (NAT), which was often used in IPv4 to manage address shortages. Furthermore, IPv6 includes security features, such as IPsec, built right into its design, which helps protect data as it travels across networks. Each device connected to a network is assigned a link-local address, which is automatically configured and starts with fe80::/10. Although IPv4 and IPv6 can operate together using techniques like dual-stack, tunneling, and translation, the future of networking is clearly leaning towards the complete adoption of IPv6. This transition is essential for supporting the growing number of devices and ensuring a secure and efficient Internet for everyone.\nContext recap: IPv4 addresses are limited to about 4.3 billion unique addresses. This number might sound large, but it is not enough for the ever-increasing number of devices that connect to the Internet every day. To address this challenge, a new version called IPv6 was developed. IPv6 significantly expands the address space to 128 bits, which allows for an almost unimaginable number of unique addresses.\nWhy this matters: IPv6 Overview helps learners in Computer Science connect ideas from Network Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
          "back": "62 — calculated as 2^6 − 2 = 62."
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
          "content": "Use the interactive subnet calculator to subdivide 172.16.0.0/16 into /20 subnets and list the first three network ranges."
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
          "explanation": "A /20 mask sets the first 20 bits to 1: 255.255.11110000.0 → 255.255.240.0."
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
          "explanation": "A /28 leaves 4 host bits: 2^4 − 2 = 14 usable addresses after subtracting the network and broadcast addresses."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-101-l03-a1",
          "type": "mnemonic",
          "title": "OSI Mnemonic",
          "content": "Remember the OSI layers bottom-to-top: 'Please Do Not Throw Sausage Pizza Away' — Physical, Data Link, Network, Transport, Session, Presentation, Application."
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
          "content": "Ethernet is the most commonly used technology for connecting devices in local area networks (LANs). Each device that connects to a network has a special identifier called a MAC address. This MAC address is a unique 48-bit number that is usually displayed in a hexadecimal format, which looks like this: AA:BB:CC:DD:EE:FF. Think of the MAC address as a home address for your device on the network, helping data know where to go.\nSwitches are important devices that help manage the flow of data within a network. They operate at Layer 2 of the OSI model, which is a framework that helps us understand how different networking technologies work together. Switches use something called a MAC address table to keep track of where each device is located on the network. When a switch receives a data frame with a destination MAC address that it doesn't recognize, it doesn't know where to send it. So, it sends the frame to all the ports on the switch, except for the one it came from. This action is known as unknown unicast flooding.\nAs time goes on, the switch learns which MAC addresses are connected to which ports. This learning process helps to reduce unnecessary traffic on the network, making it more efficient. Modern switches are quite advanced and support full-duplex Ethernet, which means they can send and receive data at the same time. This capability helps to eliminate collisions, where two devices try to send data at the same time and interfere with each other. In today's business environments, speeds of Gigabit and 10-Gigabit Ethernet have become standard, allowing for very fast data transfer rates that support the needs of many users and devices simultaneously.\nContext recap: Ethernet is the most commonly used technology for connecting devices in local area networks (LANs). Each device that connects to a network has a special identifier called a MAC address. This MAC address is a unique 48-bit number that is usually displayed in a hexadecimal format, which looks like this: AA:BB:CC:DD:EE:FF. Think of the MAC address as a home address for your device on the network, helping data know where to go.\nWhy this matters: Ethernet and MAC Addresses helps learners in Computer Science connect ideas from Network Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "network-engineering-101-l04-c2",
          "title": "VLANs and Spanning Tree",
          "content": "Virtual LANs, commonly known as VLANs, are an important technology that allows us to create separate networks within a single physical switch. This logical separation enhances both security and performance by ensuring that broadcast traffic is limited to specific groups of devices. Imagine a large office building where different departments need to communicate without interference; VLANs help achieve that by isolating their traffic.\nTo manage the traffic for these VLANs, we use trunk ports. These ports are special because they can carry data for multiple VLANs at the same time. They utilize a technique called 802.1Q tagging, which involves adding a small 4-byte tag to the Ethernet frame. This tag acts like a label, indicating which VLAN the data belongs to, ensuring that it reaches the correct destination.\nHowever, when devices on different VLANs need to communicate with each other, we require a Layer 3 device. This could be a router or a multilayer switch equipped with Switch Virtual Interfaces (SVIs). These devices are crucial because they facilitate the routing of data between VLANs, allowing for seamless communication across different network segments.\nAnother important concept in network design is the Spanning Tree Protocol (STP), which is defined by IEEE 802.1D. STP is essential for preventing loops in Layer 2 networks, which can cause significant issues. It works by electing a root bridge and blocking any redundant paths that could create a loop. This ensures that there is only one active path between any two devices in the network.\nTo improve upon the original STP, a newer version called Rapid STP (802.1w) was developed. Rapid STP is much faster, allowing the network to converge in just a few seconds, compared to the 30 to 50 seconds required by classic STP. This speed makes Rapid STP the preferred choice for modern networks, as it helps maintain optimal performance and reliability. Understanding these concepts is crucial for anyone looking to build or manage a network effectively.\nContext recap: Virtual LANs, commonly known as VLANs, are an important technology that allows us to create separate networks within a single physical switch. This logical separation enhances both security and performance by ensuring that broadcast traffic is limited to specific groups of devices. Imagine a large office building where different departments need to communicate without interference; VLANs help achieve that by isolating their traffic. To manage the traffic for these VLANs, we use trunk ports.\nWhy this matters: VLANs and Spanning Tree helps learners in Computer Science connect ideas from Network Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "network-engineering-101-l04-c3",
          "title": "Routing Protocols",
          "content": "Routers are essential devices in computer networks that help direct data traffic efficiently. They use special rules called routing protocols to share information about how to reach various networks and to create routing tables, which are like maps for data. One of the most commonly used protocols is RIP, or Routing Information Protocol. This protocol is known as a distance-vector protocol, which means it determines the best path based on the number of hops, or steps, that data must take to reach its destination. With RIP, the maximum number of hops allowed is 15, which means if a destination is more than 15 hops away, it cannot be reached using this protocol.\nAnother important routing protocol is OSPF, which stands for Open Shortest Path First. Unlike RIP, OSPF is a link-state protocol. This means it creates a complete map of the network, allowing it to find the shortest path to a destination using a method called Dijkstra's algorithm. OSPF is much faster at finding routes than RIP and is designed to work well in larger networks where many devices are connected.\nLastly, we have BGP, or Border Gateway Protocol. This protocol is crucial for the Internet because it connects different networks together by sharing routing information between autonomous systems, which are large networks managed by different organizations.\nRouting tables are vital components of routers. They contain important information such as the destination networks, the next-hop addresses (which tell the router where to send the data next), metrics (which help determine the best route), and the outgoing interface for each route. Understanding these protocols and how they work is fundamental for anyone interested in network engineering, as they form the backbone of how data travels across the Internet and within local networks.\nContext recap: Routers are essential devices in computer networks that help direct data traffic efficiently. They use special rules called routing protocols to share information about how to reach various networks and to create routing tables, which are like maps for data. One of the most commonly used protocols is RIP, or Routing Information Protocol. This protocol is known as a distance-vector protocol, which means it determines the best path based on the number of hops, or steps, that data must take to reach its destination.\nWhy this matters: Routing Protocols helps learners in Computer Science connect ideas from Network Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
          "back": "Spanning Tree Protocol (STP), IEEE 802.1D, and its faster variant Rapid STP (802.1w)."
        },
        {
          "id": "network-engineering-101-l04-f3",
          "front": "What algorithm does OSPF use to calculate the shortest path?",
          "back": "Dijkstra's shortest-path-first (SPF) algorithm."
        },
        {
          "id": "network-engineering-101-l04-f4",
          "front": "What is the maximum hop count for RIP?",
          "back": "15 hops — a route with 16 hops is considered unreachable."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-101-l04-a1",
          "type": "image",
          "title": "VLAN Trunk Diagram",
          "content": "Diagram showing an 802.1Q trunk link connecting two switches, with VLAN 10 and VLAN 20 traffic tagged and separated."
        },
        {
          "id": "network-engineering-101-l04-a2",
          "type": "animation",
          "title": "OSPF Convergence",
          "content": "Animation showing OSPF routers exchanging Link State Advertisements and recalculating routes when a link fails."
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
          "title": "TCP vs UDP",
          "content": "TCP, or Transmission Control Protocol, is an essential part of how data is sent over the Internet. It ensures that the data arrives reliably and in the correct order. Before any data can be transferred, TCP sets up a connection using a method called a three-way handshake. This process involves three steps: first, the client (the device sending the data) sends a SYN message to the server (the device receiving the data). Next, the server replies with a SYN-ACK message, acknowledging that it received the SYN. Finally, the client sends back an ACK message to confirm that the connection is established. This handshake is crucial because it prepares both devices for the data transfer ahead.\nOnce the connection is established, TCP uses sequence numbers to keep track of the data packets being sent. Each packet has a unique number, which helps the receiving device know the order in which to assemble them. If any packets are lost during transmission, TCP will automatically resend them, ensuring that all data is delivered correctly. Additionally, TCP employs flow control techniques, like the sliding window method, to manage how much data can be sent at once, preventing network congestion. It also uses congestion control strategies, such as slow start and congestion avoidance, to adapt to varying network conditions and maintain efficient data transfer.\nIn contrast, UDP, or User Datagram Protocol, is a simpler protocol that does not require a connection to be established before sending data. This means that UDP is faster and uses fewer resources, making it a great choice for applications that need real-time data transmission, such as Voice over IP (VoIP), video streaming, and DNS queries. While UDP does not guarantee that all data will arrive or that it will arrive in the correct order, it is often acceptable for these applications to experience occasional data loss, as the speed of transmission is more critical than perfect accuracy.\nContext recap: TCP, or Transmission Control Protocol, is an essential part of how data is sent over the Internet. It ensures that the data arrives reliably and in the correct order. Before any data can be transferred, TCP sets up a connection using a method called a three-way handshake. This process involves three steps: first, the client (the device sending the data) sends a SYN message to the server (the device receiving the data).\nWhy this matters: TCP vs UDP helps learners in Computer Science connect ideas from Network Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "network-engineering-101-l05-c2",
          "title": "DNS and DHCP",
          "content": "The Domain Name System, commonly known as DNS, plays a crucial role in how we navigate the Internet. It acts like a phone book for the web, translating easy-to-remember domain names, such as www.example.com, into numerical IP addresses that computers use to communicate with each other. When you type a website address into your browser, a special tool called a recursive resolver gets to work. This resolver sends out requests to different types of servers to find the correct IP address. It first checks with root servers, then top-level domain (TLD) servers, and finally authoritative servers to get the information needed.\nThere are several important types of DNS records that help manage this process. For instance, A records are used for IPv4 addresses, while AAAA records are for IPv6 addresses. CNAME records serve as aliases for other domain names, MX records are used for mail exchange, and TXT records often contain text information that can be used for security measures like SPF and DKIM, which help verify that emails are coming from legitimate sources.\nTypically, DNS queries are sent using UDP (User Datagram Protocol) on port 53, which is fast and efficient for most requests. However, when the response is too large or when transferring zone files, DNS switches to TCP (Transmission Control Protocol) on the same port.\nAnother essential service related to networking is DHCP, which stands for Dynamic Host Configuration Protocol. DHCP automatically assigns important network settings to devices, such as IP addresses, subnet masks, default gateways, and DNS server addresses. This process makes it easier for devices to connect to a network without manual configuration. The DHCP process consists of four main steps: Discover, Offer, Request, and Acknowledge, which are often abbreviated as DORA. Understanding these concepts is fundamental for anyone interested in network engineering and helps ensure smooth communication across the Internet.\nContext recap: The Domain Name System, commonly known as DNS, plays a crucial role in how we navigate the Internet. It acts like a phone book for the web, translating easy-to-remember domain names, such as www.example.com, into numerical IP addresses that computers use to communicate with each other. When you type a website address into your browser, a special tool called a recursive resolver gets to work. This resolver sends out requests to different types of servers to find the correct IP address.\nWhy this matters: DNS and DHCP helps learners in Computer Science connect ideas from Network Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "network-engineering-101-l05-c3",
          "title": "HTTP, FTP, and SMTP",
          "content": "HTTP, which stands for Hypertext Transfer Protocol, is a crucial part of how we communicate on the web. It allows web browsers to request and receive web pages, making it possible for us to explore the internet. HTTP typically operates over TCP port 80, which is like a designated channel for this type of communication. To enhance security, we use HTTPS, or HTTP Secure, which operates on port 443. This version of HTTP encrypts the data being sent using a technology called TLS, or Transport Layer Security, ensuring that our information remains private and secure as it travels across the internet.\nHTTP supports several methods that define how data is handled. The GET method is used when we want to retrieve information from a server, such as when we load a webpage. The POST method is used to submit data to a server, like when we fill out a form online. The PUT method allows us to update existing data on the server, while the DELETE method is used to remove data that is no longer needed.\nAnother important protocol is FTP, or File Transfer Protocol, which is designed for transferring files between computers. FTP operates using two channels: a control channel on TCP port 21, which manages the connection, and a data channel on port 20 for active mode, or a negotiated high port for passive mode. For those who need to transfer files securely, there are alternatives like SFTP (Secure File Transfer Protocol) and FTPS (FTP Secure), which provide encryption for the file transfer process.\nWhen it comes to sending emails, we rely on SMTP, or Simple Mail Transfer Protocol. This protocol operates over TCP port 25, but for secure submissions that require authentication, it can also use port 587. To retrieve emails from a server, we commonly use IMAP (Internet Message Access Protocol) on ports 143 and 993, or POP3 (Post Office Protocol) on ports 110 and 995. These protocols help us manage our email effectively, ensuring that we can send and receive messages securely and efficiently.\nContext recap: HTTP, which stands for Hypertext Transfer Protocol, is a crucial part of how we communicate on the web. It allows web browsers to request and receive web pages, making it possible for us to explore the internet. HTTP typically operates over TCP port 80, which is like a designated channel for this type of communication. To enhance security, we use HTTPS, or HTTP Secure, which operates on port 443.\nWhy this matters: HTTP, FTP, and SMTP helps learners in Computer Science connect ideas from Network Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "network-engineering-101-l05-f1",
          "front": "What are the three steps of the TCP three-way handshake?",
          "back": "SYN → SYN-ACK → ACK."
        },
        {
          "id": "network-engineering-101-l05-f2",
          "front": "What port does DNS typically use?",
          "back": "UDP port 53 for queries; TCP port 53 for zone transfers and large responses."
        },
        {
          "id": "network-engineering-101-l05-f3",
          "front": "What does DORA stand for in DHCP?",
          "back": "Discover, Offer, Request, Acknowledge — the four-step process a client uses to obtain an IP address."
        },
        {
          "id": "network-engineering-101-l05-f4",
          "front": "What is the default port for HTTPS?",
          "back": "TCP port 443."
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
          "content": "Use the interactive packet inspector to examine TCP, UDP, DNS, and HTTP headers field by field."
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
          "explanation": "IEEE 802.1Q defines VLAN tagging for Ethernet frames, allowing a single trunk link to carry multiple VLANs."
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
          "content": "Remember DHCP's four steps with DORA: Discover → Offer → Request → Acknowledge."
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
          "content": "Firewalls act like security guards for our computer networks, ensuring that our information stays safe. They filter the data that enters and exits the network based on specific rules. These rules can include details such as the source IP address (where the data is coming from), the destination IP address (where the data is going), and the type of data being transmitted (known as the protocol). There are different types of firewalls that serve various purposes. For instance, Stateless firewalls examine each piece of data independently, treating every packet as a separate entity. On the other hand, Stateful firewalls keep track of the connection's context, which allows them to automatically permit return data to flow back into the network without needing to check it again. The most advanced type of firewall is called a Next-Generation Firewall (NGFW). These firewalls are equipped with enhanced capabilities, such as deep packet inspection, which allows them to analyze the data more thoroughly. They can also identify the applications being used and even prevent potential attacks before they occur.\nIn addition to firewalls, we also use Access Control Lists (ACLs) to manage who can access the network. Think of ACLs as a set of rules that routers and switches follow to determine which data packets are allowed to enter or leave the network. These rules are processed from top to bottom, meaning that the first rule that matches a packet will be the one that is applied. There are two main types of ACLs: Standard ACLs and Extended ACLs. Standard ACLs only check the source IP address, while Extended ACLs can evaluate both the source and destination IP addresses, as well as the ports and protocols involved. Proper placement of these ACLs is crucial for maintaining security: Standard ACLs should be positioned closer to the destination, while Extended ACLs should be placed near the source. This strategic placement helps ensure that the network remains secure and that only authorized data is allowed through.\nContext recap: Firewalls act like security guards for our computer networks, ensuring that our information stays safe. They filter the data that enters and exits the network based on specific rules. These rules can include details such as the source IP address (where the data is coming from), the destination IP address (where the data is going), and the type of data being transmitted (known as the protocol). There are different types of firewalls that serve various purposes.\nWhy this matters: Firewalls and Access Control Lists helps learners in Computer Science connect ideas from Network Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "network-engineering-101-l07-c2",
          "title": "VPNs and Intrusion Detection",
          "content": "Virtual Private Networks, commonly known as VPNs, are important tools that help us create secure connections over the internet. Imagine a VPN as a secret tunnel that keeps our online activities safe from anyone who might want to snoop on us. When we use a VPN, our data is protected through encryption, which means it is scrambled in a way that only authorized users can understand it. One popular type of VPN is called IPsec. This type works at a specific layer of the internet and follows a two-step process to ensure security. The first step involves something called IKE, or Internet Key Exchange, which is like a handshake that helps both ends of the connection agree on how to keep the data safe. After this handshake, the data is encrypted using a method known as ESP, or Encapsulating Security Payload, which ensures that the information remains private as it travels across the internet.\nAnother type of VPN is SSL/TLS, which is often used for remote access. This allows users to connect securely to a network from anywhere, making it easier to work or access information while on the go.\nOn the other side of network security, we have Intrusion Detection Systems, or IDS. Think of IDS as security cameras for our networks; they constantly monitor the data traffic and send alerts if they notice anything suspicious. This helps us respond quickly to potential threats.\nThen there are Intrusion Prevention Systems, or IPS, which take security a step further. These systems not only monitor traffic but also actively block harmful data before it can cause any damage. Both IDS and IPS use two main methods to detect threats: signature-based detection, which looks for known attack patterns, and anomaly-based detection, which identifies unusual behavior that might indicate a problem. By using these technologies, we can help keep our networks safe and secure from various cyber threats.\nContext recap: Virtual Private Networks, commonly known as VPNs, are important tools that help us create secure connections over the internet. Imagine a VPN as a secret tunnel that keeps our online activities safe from anyone who might want to snoop on us. When we use a VPN, our data is protected through encryption, which means it is scrambled in a way that only authorized users can understand it. One popular type of VPN is called IPsec.\nWhy this matters: VPNs and Intrusion Detection helps learners in Computer Science connect ideas from Network Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "network-engineering-101-l07-c3",
          "title": "Wireless Security and Common Attacks",
          "content": "Wireless networks can present unique challenges when it comes to security because their signals can extend beyond the physical walls of a building. This means that anyone nearby might be able to access the network if proper security measures are not in place. To help protect these networks, we use a security standard called WPA3 (Wi-Fi Protected Access 3). WPA3 is an improvement over the older WPA2 standard and includes a special feature known as Simultaneous Authentication of Equals (SAE). This feature is designed to make it much harder for attackers to guess passwords by trying them out offline, which is a common method used in password cracking attempts.\nIn larger organizations, we often implement a method called 802.1X for authentication. This method requires users to verify their identity through a server before they can access the network. This adds an extra layer of security, ensuring that only authorized users can connect.\nThere are several types of attacks that can target wireless networks. One example is ARP spoofing, where an attacker tricks devices on the network into sending their data to the wrong destination. Another serious threat is a DDoS (Distributed Denial of Service) attack, which overwhelms a network with an excessive amount of traffic, causing it to slow down significantly or even crash completely.\nAdditionally, there are man-in-the-middle attacks, where an attacker secretly intercepts communications between two parties, and DNS poisoning, which can redirect users to harmful websites without their knowledge. To effectively defend against these various threats, it is recommended to use a layered approach to security, known as defence-in-depth. This strategy involves combining multiple security measures to create a more robust defense against potential attacks, ensuring that even if one layer is compromised, others remain in place to protect the network.\nContext recap: Wireless networks can present unique challenges when it comes to security because their signals can extend beyond the physical walls of a building. This means that anyone nearby might be able to access the network if proper security measures are not in place. To help protect these networks, we use a security standard called WPA3 (Wi-Fi Protected Access 3). WPA3 is an improvement over the older WPA2 standard and includes a special feature known as Simultaneous Authentication of Equals (SAE).\nWhy this matters: Wireless Security and Common Attacks helps learners in Computer Science connect ideas from Network Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "network-engineering-101-l07-f1",
          "front": "What is the difference between a stateless and a stateful firewall?",
          "back": "A stateless firewall evaluates each packet independently; a stateful firewall tracks active connections and automatically permits return traffic."
        },
        {
          "id": "network-engineering-101-l07-f2",
          "front": "What two phases does an IPsec VPN use?",
          "back": "Phase 1 (IKE) negotiates security associations; Phase 2 (ESP) encrypts the actual data traffic."
        },
        {
          "id": "network-engineering-101-l07-f3",
          "front": "What does an IPS do that an IDS cannot?",
          "back": "An IPS sits inline and can actively block malicious traffic, whereas an IDS only monitors and alerts."
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
          "content": "Flowchart showing how a firewall evaluates ACL rules top-down, applying the first matching rule and dropping to an implicit deny."
        },
        {
          "id": "network-engineering-101-l07-a2",
          "type": "animation",
          "title": "IPsec VPN Tunnel Setup",
          "content": "Animation showing IKE Phase 1 and Phase 2 negotiation, followed by encrypted data flowing through the ESP tunnel."
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
          "title": "802.11 Standards and Wi-Fi Channels",
          "content": "The IEEE 802.11 family consists of a series of standards that guide how wireless local area networks (WLANs) function. These standards are essential for enabling devices like laptops, smartphones, and tablets to connect to the internet without the need for physical cables. One of the earlier standards in this family is 802.11n, commonly referred to as Wi-Fi 4. This standard operates on two frequency bands: 2.4 GHz and 5 GHz. It can achieve impressive speeds of up to 600 Mbps thanks to a technology called MIMO, which stands for Multiple Input Multiple Output. MIMO allows multiple data streams to be sent and received simultaneously, enhancing the overall performance of the network.\nFollowing 802.11n, the next version is 802.11ac, also known as Wi-Fi 5. This standard exclusively uses the 5 GHz band, which enables it to reach even faster speeds than its predecessor. It accomplishes this by utilizing wider channels, which can be 80 or even 160 MHz wide, and a feature called MU-MIMO, or Multi-User MIMO. MU-MIMO allows the router to communicate with multiple devices at the same time, improving efficiency and speed for users.\nThe most recent standard is 802.11ax, known as Wi-Fi 6 or Wi-Fi 6E. This version introduces a new technology called OFDMA, which stands for Orthogonal Frequency Division Multiple Access. OFDMA helps in managing multiple users more effectively, making it ideal for environments with many connected devices. Additionally, Wi-Fi 6 extends into the 6 GHz band, providing even more channels for users.\nWhen it comes to the 2.4 GHz band, there are 14 channels available, but only three of these channels—1, 6, and 11—are non-overlapping. This is crucial because overlapping channels can cause interference, which can slow down the network. On the other hand, the 5 GHz band offers a greater number of non-overlapping channels, but it does have a shorter range compared to the 2.4 GHz band. Therefore, careful planning of which channels to use is essential to minimize interference and maximize the speed and performance of the network. Understanding these standards and their implications helps in creating efficient and effective wireless networks.\nContext recap: The IEEE 802.11 family consists of a series of standards that guide how wireless local area networks (WLANs) function. These standards are essential for enabling devices like laptops, smartphones, and tablets to connect to the internet without the need for physical cables. One of the earlier standards in this family is 802.11n, commonly referred to as Wi-Fi 4. This standard operates on two frequency bands: 2.4 GHz and 5 GHz.\nWhy this matters: 802.11 Standards and Wi-Fi Channels helps learners in Computer Science connect ideas from Network Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "network-engineering-101-l08-c2",
          "title": "WAN Technologies",
          "content": "Wide Area Networks, commonly known as WANs, play a crucial role in connecting various locations that are spread out over large distances. Imagine you have offices in different cities or even countries; WANs help these locations communicate effectively. One of the technologies that make WANs efficient is called MPLS, which stands for Multiprotocol Label Switching. This technology enhances the way data packets are sent across the network by using short labels instead of lengthy IP addresses. By doing this, MPLS not only speeds up the data transmission process but also helps manage network traffic better, ensuring that the quality of service remains high.\nAnother innovative approach in WAN technology is SD-WAN, which stands for Software-Defined Wide Area Network. SD-WAN simplifies the management of various types of internet connections, such as MPLS, broadband, and LTE. It uses centralized controllers that intelligently route traffic based on the specific needs of applications and the real-time quality of the connections. This means that if one connection is slow or unreliable, SD-WAN can automatically switch to a better option without any disruption to the users.\nFor high-speed data transmission over long distances, fibre-optic cables are the go-to choice. These cables work by sending data as light pulses through glass or plastic cores, allowing them to achieve incredible speeds of over 100 Gbps. Additionally, fibre-optic cables are immune to electromagnetic interference, which makes them very reliable.\nOn the other hand, we have copper cables, such as Cat5e and Cat6. These cables are generally more affordable and work well for shorter distances, typically up to 100 meters. However, they can face challenges like crosstalk and interference, which can affect the quality of the data being transmitted. Understanding these different technologies is essential for anyone interested in network engineering, as they form the backbone of modern communication systems.\nContext recap: Wide Area Networks, commonly known as WANs, play a crucial role in connecting various locations that are spread out over large distances. Imagine you have offices in different cities or even countries; WANs help these locations communicate effectively. One of the technologies that make WANs efficient is called MPLS, which stands for Multiprotocol Label Switching. This technology enhances the way data packets are sent across the network by using short labels instead of lengthy IP addresses.\nWhy this matters: WAN Technologies helps learners in Computer Science connect ideas from Network Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "network-engineering-101-l08-c3",
          "title": "Network Troubleshooting Tools",
          "content": "When you encounter problems with a network, it’s essential to follow a structured and methodical approach to troubleshoot effectively. The first step is to clearly identify what the issue is. This could be anything from a device not connecting to the internet to slow network speeds. Once you have pinpointed the problem, the next step is to develop a theory about what might be causing it. This could involve thinking about recent changes to the network or checking if specific devices are malfunctioning. After forming a theory, you will want to test it to see if it holds true. This might involve running certain commands or checking settings on devices. If your theory is correct, you can then implement a solution to fix the issue. Once you believe the problem is resolved, it’s crucial to verify that the solution worked as intended. Finally, documenting the steps you took is important for future reference, so you or others can refer back to it if the issue arises again.\nOne of the most helpful tools for troubleshooting is the ping command. This command sends a message, known as an ICMP Echo Request, to another device on the network to check if it is reachable. It also measures how long it takes for the message to travel to the device and back, which is known as round-trip time. Another valuable tool is Traceroute, or tracert on Windows systems. This tool shows the path that data packets take to reach their destination by sending out messages that reveal each hop along the way, including the IP addresses of each device and the time it takes to reach them.\nAdditionally, tools like Nslookup and dig are used to query DNS servers. They help resolve domain names into IP addresses and can be very useful for diagnosing DNS-related issues. For checking local network settings, commands like Ipconfig on Windows and ifconfig or ip on Linux can display important information such as your device's IP address, subnet mask, default gateway, and DNS servers. By effectively combining these tools, network engineers can determine whether a problem is occurring at the physical layer, within the network itself, or at the application layer, allowing for a more targeted and efficient troubleshooting process.\nContext recap: When you encounter problems with a network, it’s essential to follow a structured and methodical approach to troubleshoot effectively. The first step is to clearly identify what the issue is. This could be anything from a device not connecting to the internet to slow network speeds. Once you have pinpointed the problem, the next step is to develop a theory about what might be causing it.\nWhy this matters: Network Troubleshooting Tools helps learners in Computer Science connect ideas from Network Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "front": "What advantage does MPLS provide over traditional IP routing?",
          "back": "MPLS uses short labels for fast forwarding and supports traffic engineering and QoS guarantees."
        },
        {
          "id": "network-engineering-101-l08-f3",
          "front": "What does traceroute reveal about a network path?",
          "back": "Each intermediate hop (router), its IP address, and the round-trip latency to that hop."
        },
        {
          "id": "network-engineering-101-l08-f4",
          "front": "What technology does Wi-Fi 6 (802.11ax) introduce for multi-user efficiency?",
          "back": "OFDMA (Orthogonal Frequency-Division Multiple Access), which allows simultaneous data transmission to multiple devices."
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
          "content": "Step through a simulated connectivity failure: use ping, traceroute, and nslookup to identify and resolve the issue layer by layer."
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
          "explanation": "Channels 1, 6, and 11 are the three non-overlapping channels in the 2.4 GHz band, minimising co-channel interference."
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
          "explanation": "Traceroute sends probes with incrementing TTL values, causing each hop to respond and revealing the router IP and latency at every point along the path."
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
          "explanation": "SD-WAN uses centralised controllers to abstract underlying transports (MPLS, broadband, LTE) and dynamically route traffic based on application requirements."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-101-l09-a1",
          "type": "mnemonic",
          "title": "Troubleshooting Steps",
          "content": "Follow the systematic approach: Identify → Theory → Test → Implement → Verify → Document."
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
          "explanation": "A /26 means 64-address blocks. 130 falls in the 128–191 block (network 172.16.45.128), so the broadcast is 172.16.45.191."
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
          "explanation": "BGP (Border Gateway Protocol) is the path-vector protocol used to exchange routing information between autonomous systems, forming the backbone of Internet routing."
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
          "explanation": "ARP spoofing (or ARP poisoning) corrupts ARP caches so that traffic intended for the gateway is redirected through the attacker's machine."
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
          "explanation": "Wi-Fi 6 (802.11ax) introduced OFDMA for efficient multi-user scheduling, and Wi-Fi 6E extended operation into the 6 GHz band."
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
