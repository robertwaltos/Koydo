import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:/My Drive/15_E-BOOKS/file010686.epub
// Author: W. Richard Stevens  |  Subject: Networking

export const TcpIpIllustratedVolume1TheProtocolsWRicharModule: LearningModule = {
  id: "tcp-ip-illustrated-volume-1-the-protocols-w-richar",
  title: "TCP/IP Illustrated, Volume 1: The Protocols",
  description:
    "A comprehensive educational module derived from TCP/IP Illustrated, Volume 1: The Protocols by W. Richard Stevens. This course provides structured video lessons and interactive quizzes exploring the key themes, arguments, and insights of the work.",
  subject: "Networking",
  tags: ["epub-derived", "curriculum", "interactive", "networking"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  learningObjectives: [
    "Understand and critically analyze the concepts related to praise for the first edition of tcp/ip illustrated, volume 1: the protocols",
    "Understand and critically analyze the concepts related to many of the designations used by manufacturers and sellers t",
    "Understand and critically analyze the concepts related to foreword",
    "Understand and critically analyze the concepts related to preface to the second edition",
    "Understand and critically analyze the concepts related to adapted preface to the first edition",
    "Understand and critically analyze the concepts related to introduction",
    "Understand and critically analyze the concepts related to the internet address architecture",
  ],
  lessons: [
    /* ─────────────────────────────────────────────────
       L01  Praise for the First Edition of TCP/IP Illustrated, Volume 1: The Protocols
    ───────────────────────────────────────────────── */
    {
      id: "ti-l01",
      title: "Praise for the First Edition of TCP/IP Illustrated, Volume 1: The Protocols",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to praise for the first edition of tcp/ip illustrated, volume 1: the protocols",
        "Examine the key ideas and arguments related to many of the designations used by manufacturers and sellers t",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "ti-l01-c1",
          title: "Praise for the First Edition of TCP/IP Illustrated, Volume 1: The Protocols",
          content:
            "He puts the reader inside TCP/IP using a visual approach and shows the protocols in action.” —Steven Baker, networking columnist, Unix Review “ TCP/IP Illustrated, Volume 1 , is an excellent reference for developers, network administrators, or anyone who needs to understand TCP/IP technology. TCP/IP Illustrated is comprehensive in its coverage of TCP/IP topics, providing enough details to satisfy the experts while giving enough background and commentary for the novice.” —Bob Williams, vice president, Marketing, NetManage, Inc. “. . . [T]he difference is that Stevens wants to show as well as tell about the protocols.",
        },
        {
          id: "ti-l01-c2",
          title: "Many of the designations used by manufacturers and sellers t",
          content:
            "Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks. Where those designations appear in this book, and the publisher was aware of a trademark claim, the designations have been printed with initial capital letters or in all capitals. The authors and publisher have taken care in the preparation of this book, but make no expressed or implied warranty of any kind and assume no responsibility for errors or omissions. No liability is assumed for incidental or consequential damages in connection with or arising out of the use of the information or programs contained herein.",
        },
        {
          id: "ti-l01-c3",
          title: "Deeper Analysis: Praise for the First Edition of TCP/IP Illustrated, Volume 1: The Protocols",
          content:
            "His principal teaching tools are straightforward explanations, exercises at the ends of chapters, byte-by-byte diagrams of headers and the like, and listings of actual traffic as examples.” —Walter Zintz, UnixWorld “Much better than theory only. . . . W. Richard Stevens takes a multihost-based configuration and uses it as a travelogue of TCP/IP examples with illustrations. TCP/IP Illustrated, Volume 1 , is based on practical examples that reinforce the theory—distinguishing this book from others on the subject, and making it both readable and informative.” —Peter M. Haverlock, consultant, IBM TCP/IP Development “The diagrams he uses are excellent and his writing style is clear and readable. In sum, Stevens has made a complex topic easy to understand. This book merits everyone’s attention.",
        },
      ],
      flashcards: [
        {
          id: "ti-l01-f1",
          front: "Praise for the First Edition of TCP/IP Illustrated, Volume 1: The Prot",
          back:
            "His principal teaching tools are straightforward explanations, exercises at the ends of chapters, byte-by-byte diagrams of headers and the like, and listings of actual traffic as e...",
        },
        {
          id: "ti-l01-f2",
          front: "Many of the designations used by manufacturers and sellers t",
          back:
            "Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks.",
        },
        {
          id: "ti-l01-f3",
          front: "Key concept: Praise for the First Edition of TCP/IP Illustrated, Volum",
          back:
            "Please read it and keep it on your bookshelf.” —Elizabeth Zinkann, sys admin “W.",
        },
        {
          id: "ti-l01-f4",
          front: "Key concept: Many of the designations used by manufacturers and seller",
          back:
            "Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks.",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L02  Foreword and Preface to the Second Edition
    ───────────────────────────────────────────────── */
    {
      id: "ti-l02",
      title: "Foreword and Preface to the Second Edition",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to foreword",
        "Examine the key ideas and arguments related to preface to the second edition",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "ti-l02-c1",
          title: "Foreword",
          content:
            "Foreword Rarely does one find a book on a well-known topic that is both historically and technically comprehensive and remarkably accurate. One of the things I admire about this work is the “warts and all” approach that gives it such credibility. The TCP/IP architecture is a product of the time in which it was conceived. That it has been able to adapt to growing requirements in many dimensions by factors of a million or more, to say nothing of a plethora of applications, is quite remarkable. Understanding the scope and limitations of the architecture and its protocols is a sound basis from which to think about future evolution and even revolution. During the early formulation of the Internet architecture, the notion of “enterprise” was not really recognized.",
        },
        {
          id: "ti-l02-c2",
          title: "Preface to the Second Edition",
          content:
            "Originally a research project and object of curiosity, the Internet has become a global communication fabric upon which governments, businesses, and individuals depend. The TCP/IP suite defines the underlying methods used to exchange information by every device on the Internet. After more than a decade of delay, the Internet and TCP/IP itself are now undergoing an evolution, to incorporate IPv6. Throughout the text we will discuss both IPv6 and the current IPv4 together, but we highlight the differences where they are important. Unfortunately, they do not directly interoperate, so some care and attention are required to appreciate the impact of the evolution.",
        },
        {
          id: "ti-l02-c3",
          title: "Deeper Analysis: Foreword",
          content:
            "In consequence, most networks had their own IP address space and “announced” their addresses in the routing system directly. After the introduction of commercial service, Internet Service Providers emerged as intermediaries who “announced” Internet address blocks on behalf of their customers. Thus, most of the address space was assigned in a “provider dependent” fashion. “Provider independent” addressing was unusual. The net result (no pun intended) led to route aggregation and containment of the size of the global routing table. While this tactic had benefits, it also created the “multi-homing” problem since users of provider-dependent addresses did not have their own entries in the global routing table. The IP address “crunch” also led to Network Address Translation, which also did not solve provider dependence and multi-homing problems.",
        },
      ],
      flashcards: [
        {
          id: "ti-l02-f1",
          front: "Foreword",
          back:
            "In consequence, most networks had their own IP address space and “announced” their addresses in the routing system directly.",
        },
        {
          id: "ti-l02-f2",
          front: "Preface to the Second Edition",
          back:
            "This event greatly accelerated the availability of the Internet to large numbers of people with various (sometimes conflicting) motivations.",
        },
        {
          id: "ti-l02-f3",
          front: "Key concept: Foreword",
          back:
            "Reading through this book evokes a sense of wonder at the complexity that has evolved from a set of relatively simple concepts that worked with a small number of networks and appli...",
        },
        {
          id: "ti-l02-f4",
          front: "Key concept: Preface to the Second Edition",
          back:
            "It has eased the pressure on Internet address availability by allowing sites to obtain a comparatively small number of routable Internet addresses from their service providers (one...",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L03  Adapted Preface to the First Edition and Introduction
    ───────────────────────────────────────────────── */
    {
      id: "ti-l03",
      title: "Adapted Preface to the First Edition and Introduction",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to adapted preface to the first edition",
        "Examine the key ideas and arguments related to introduction",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "ti-l03-c1",
          title: "Adapted Preface to the First Edition",
          content:
            "When networking protocols were being developed in the 1960s through the 1980s, expensive, dedicated hardware was required to see the packets going “across the wire.” Extreme familiarity with the protocols was also required to comprehend the packets displayed by the hardware. Functionality of the hardware analyzers was limited to that built in by the hardware designers. Today this has changed dramatically with the ability of the ubiquitous workstation to monitor a local area network [Mogul 1990]. Just attach a workstation to your network, run some publicly available software, and watch what goes by on the wire. While many people consider this a tool to be used for diagnosing network problems, it is also a powerful tool for understanding how the network protocols operate, which is the goal of this book.",
        },
        {
          id: "ti-l03-c2",
          title: "Introduction",
          content:
            "1. Introduction Effective communication depends on the use of a common language. This is true for humans and other animals as well as for computers. When a set of common behaviors is used with a common language, a protocol is being used. The first definition of a protocol, according to the New Oxford American Dictionary , is The official procedure or system of rules governing affairs of state or diplomatic occasions. We engage in many protocols every day: asking and responding to questions, negotiating business transactions, working collaboratively, and so on. Computers also engage in a variety of protocols. A collection of related protocols is called a protocol suite .",
        },
        {
          id: "ti-l03-c3",
          title: "Deeper Analysis: Adapted Preface to the First Edition",
          content:
            "This book is intended for anyone wishing to understand how the TCP/IP protocols operate: programmers writing network applications, system administrators responsible for maintaining computer systems and networks utilizing TCP/IP, and users who deal with TCP/IP applications on a daily basis. Typographical Conventions When we display interactive input and output we’ll show our typed input in a bold font , and the computer output like this . Comments are added in italics. bsdi % telnet svr4 discard connect to the discard server Trying 140.252.13.34... this line and next output by Telnet client Connected to svr4. Also, we always include the name of the system as part of the shell prompt ( bsdi in this example) to show on which host the command was run.",
        },
      ],
      flashcards: [
        {
          id: "ti-l03-f1",
          front: "Adapted Preface to the First Edition",
          back:
            "This book is intended for anyone wishing to understand how the TCP/IP protocols operate: programmers writing network applications, system administrators responsible for maintaining...",
        },
        {
          id: "ti-l03-f2",
          front: "Introduction",
          back:
            "The design that specifies how various protocols of a protocol suite relate to each other and divide up tasks to be accomplished is called the architecture or reference model for th...",
        },
        {
          id: "ti-l03-f3",
          front: "Key concept: Adapted Preface to the First Edition",
          back:
            "Note Throughout the text we’ll use indented, parenthetical notes such as this to describe historical points or implementation details.",
        },
        {
          id: "ti-l03-f4",
          front: "Key concept: Introduction",
          back:
            "There are several interesting books that focus on the history of computer communications and the development of the Internet, such as [P07] and [W02] .",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L04  Checkpoint Quiz 2
    ───────────────────────────────────────────────── */
    {
      id: "ti-l04",
      title: "Checkpoint Quiz 2",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of the concepts covered in the preceding lessons"],
      questions: [
        {
          id: "ti-l04-q1",
          text: "Which of the following best describes a key idea from the section on Praise for the First Edition of TCP/IP Illustrated, Volume 1: The Protocols?",
          options: [
            { id: "a", text: "Foreword Rarely does one find a book on a well-known topic that is both historically and technically..." },
            { id: "b", text: "He puts the reader inside TCP/IP using a visual approach and shows the protocols in action.” —Steven..." },
            { id: "c", text: "Many of the designations used by manufacturers and sellers to distinguish their products are claimed..." },
            { id: "d", text: "Originally a research project and object of curiosity, the Internet has become a global communicatio..." },
          ],
          correctOptionId: "b",
          explanation:
            "This question relates to Praise for the First Edition of TCP/IP Illustrated, Volume 1: The Protocols. He puts the reader inside TCP/IP using a visual approach and shows the protocols in action.” —Steven...",
        },
        {
          id: "ti-l04-q2",
          text: "Which of the following best describes a key idea from the section on Many of the designations used by manufacturers and sellers t?",
          options: [
            { id: "a", text: "Foreword Rarely does one find a book on a well-known topic that is both historically and technically..." },
            { id: "b", text: "Many of the designations used by manufacturers and sellers to distinguish their products are claimed..." },
            { id: "c", text: "He puts the reader inside TCP/IP using a visual approach and shows the protocols in action.” —Steven..." },
            { id: "d", text: "Originally a research project and object of curiosity, the Internet has become a global communicatio..." },
          ],
          correctOptionId: "b",
          explanation:
            "This question relates to Many of the designations used by manufacturers and sellers t. Many of the designations used by manufacturers and sellers to distinguish their products are claimed...",
        },
        {
          id: "ti-l04-q3",
          text: "Which of the following best describes a key idea from the section on Foreword?",
          options: [
            { id: "a", text: "He puts the reader inside TCP/IP using a visual approach and shows the protocols in action.” —Steven..." },
            { id: "b", text: "Originally a research project and object of curiosity, the Internet has become a global communicatio..." },
            { id: "c", text: "Many of the designations used by manufacturers and sellers to distinguish their products are claimed..." },
            { id: "d", text: "Foreword Rarely does one find a book on a well-known topic that is both historically and technically..." },
          ],
          correctOptionId: "d",
          explanation:
            "This question relates to Foreword. Foreword Rarely does one find a book on a well-known topic that is both historically and technically...",
        },
        {
          id: "ti-l04-q4",
          text: "Which of the following best describes a key idea from the section on Preface to the Second Edition?",
          options: [
            { id: "a", text: "He puts the reader inside TCP/IP using a visual approach and shows the protocols in action.” —Steven..." },
            { id: "b", text: "Originally a research project and object of curiosity, the Internet has become a global communicatio..." },
            { id: "c", text: "Many of the designations used by manufacturers and sellers to distinguish their products are claimed..." },
            { id: "d", text: "Foreword Rarely does one find a book on a well-known topic that is both historically and technically..." },
          ],
          correctOptionId: "b",
          explanation:
            "This question relates to Preface to the Second Edition. Originally a research project and object of curiosity, the Internet has become a global communicatio...",
        },
        {
          id: "ti-l04-q5",
          text: "Which of the following best describes a key idea from the section on Adapted Preface to the First Edition?",
          options: [
            { id: "a", text: "He puts the reader inside TCP/IP using a visual approach and shows the protocols in action.” —Steven..." },
            { id: "b", text: "Many of the designations used by manufacturers and sellers to distinguish their products are claimed..." },
            { id: "c", text: "When networking protocols were being developed in the 1960s through the 1980s, expensive, dedicated..." },
            { id: "d", text: "Foreword Rarely does one find a book on a well-known topic that is both historically and technically..." },
          ],
          correctOptionId: "c",
          explanation:
            "This question relates to Adapted Preface to the First Edition. When networking protocols were being developed in the 1960s through the 1980s, expensive, dedicated...",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L05  The Internet Address Architecture and Link Layer
    ───────────────────────────────────────────────── */
    {
      id: "ti-l05",
      title: "The Internet Address Architecture and Link Layer",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to the internet address architecture",
        "Examine the key ideas and arguments related to link layer",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "ti-l05-c1",
          title: "The Internet Address Architecture",
          content:
            "2. The Internet Address Architecture 2.1. Introduction This chapter deals with the structure of network-layer addresses used in the Internet, also known as IP addresses. We discuss how addresses are allocated and assigned to devices on the Internet, the way hierarchy in address assignment aids routing scalability, and the use of special-purpose addresses, including broadcast, multicast, and anycast addresses. We also discuss how the structure and use of IPv4 and IPv6 addresses differ. Every device connected to the Internet has at least one IP address. Devices used in private networks based on the TCP/IP protocols also require IP addresses. In either case, the forwarding procedures implemented by IP routers (see Chapter 5 ) use IP addresses to identify where traffic is going.",
        },
        {
          id: "ti-l05-c2",
          title: "Link Layer",
          content:
            "3. Link Layer 3.1. Introduction In Chapter 1 , we saw that the purpose of the link layer in the TCP/IP protocol suite is to send and receive IP datagrams for the IP module. It is also used to carry a few other protocols that help support IP, such as ARP (see Chapter 4 ).",
        },
        {
          id: "ti-l05-c3",
          title: "Deeper Analysis: The Internet Address Architecture",
          content:
            "IP addresses also indicate where traffic has come from. IP addresses are similar in some ways to telephone numbers, but whereas telephone numbers are often known and used directly by end users, IP addresses are often shielded from a user’s view by the Internet’s DNS (see Chapter 11 ), which allows most users to use names instead of numbers. Users are confronted with manipulating IP addresses when they are required to set up networks themselves or when the DNS has failed for some reason. To understand how the Internet identifies hosts and routers and delivers traffic between them, we must understand the role of IP addresses. We are therefore interested in their administration, structure, and uses.",
        },
      ],
      flashcards: [
        {
          id: "ti-l05-f1",
          front: "The Internet Address Architecture",
          back:
            "IP addresses also indicate where traffic has come from.",
        },
        {
          id: "ti-l05-f2",
          front: "Link Layer",
          back:
            "TCP/IP supports many different link layers, depending on the type of networking hardware being used: wired LANs such as Ethernet, metropolitan area networks (MANs) such as cable TV...",
        },
        {
          id: "ti-l05-f3",
          front: "Key concept: The Internet Address Architecture",
          back:
            "When devices are attached to the global Internet, they are assigned addresses that must be coordinated so as to not duplicate other addresses in use on the network.",
        },
        {
          id: "ti-l05-f4",
          front: "Key concept: Link Layer",
          back:
            "Covering the details of every link technology available today would require a separate text, so we instead focus on some of the most commonly used link-layer protocols and how they...",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L06  5.2. Power Save Mode and the Time Sync Function (TSF)
    ───────────────────────────────────────────────── */
    {
      id: "ti-l06",
      title: "5.2. Power Save Mode and the Time Sync Function (TSF)",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to 5.2. power save mode and the time sync function (tsf)",
        "Examine the key ideas and arguments related to arp: address resolution protocol",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "ti-l06-c1",
          title: "5.2. Power Save Mode and the Time Sync Function (TSF)",
          content:
            "3.5.2. Power Save Mode and the Time Sync Function (TSF) The 802.11 specification provides a way for stations to enter a limited power state, called power save mode (PSM). PSM is designed to save power by allowing an STA’s radio receive circuitry to be powered down some of the time. Without PSM, the receiver circuitry would always be running, draining power. When in PSM, an STA’s outgoing frames have a bit set in the Frame Control Word . A cooperative AP noticing this bit being set buffers any frames for the station until the station requests them. APs ordinarily send out beacon frames (a type of management frame) indicating various things like SSID, channel, and authentication information.",
        },
        {
          id: "ti-l06-c2",
          title: "ARP: Address Resolution Protocol",
          content:
            "4. ARP: Address Resolution Protocol 4.1. Introduction We have seen that the IP protocol is designed to provide interoperability of packet switching across a large variety of physical network types. Doing so requires, among other things, converting between the addresses used by the network-layer software and those interpreted by the underlying network hardware. Generally, network interface hardware has one primary hardware address (e.g., a 48-bit value for an Ethernet or 802.11 wireless interface). Frames exchanged by the hardware must be addressed to the correct interface using the correct hardware addresses; otherwise, no data can be transferred. But a conventional IPv4 network works with its own addresses: 32-bit IPv4 addresses.",
        },
        {
          id: "ti-l06-c3",
          title: "Deeper Analysis: 5.2. Power Save Mode and the Time Sync Function (TSF)",
          content:
            "When supporting stations that use PSM, APs can also indicate the presence of buffered frames to a station by setting an indication in the Frame Control Word of frames it sends. When stations enter PSM, they do so until the next AP beacon time, when they wake up and determine if there are pending frames stored at the AP for them. PSM should be used with care and understanding. Although it may extend battery life, the NIC is not the only module drawing power in most wireless devices. Other parts of the system such as the screen and hard drive can be significant consumers of power, so overall battery life may not be extended much.",
        },
      ],
      flashcards: [
        {
          id: "ti-l06-f1",
          front: "5.2. Power Save Mode and the Time Sync Function (TSF)",
          back:
            "When supporting stations that use PSM, APs can also indicate the presence of buffered frames to a station by setting an indication in the Frame Control Word of frames it sends....",
        },
        {
          id: "ti-l06-f2",
          front: "ARP: Address Resolution Protocol",
          back:
            "Knowing a host’s IP address is insufficient for the system to send a frame to that host efficiently on networks where hardware addresses are used.",
        },
        {
          id: "ti-l06-f3",
          front: "Key concept: 5.2. Power Save Mode and the Time Sync Function (TSF)",
          back:
            "Furthermore, using PSM can affect throughput performance significantly as idle periods are added between frame transmissions and time is spent switching modes [SHK07] .",
        },
        {
          id: "ti-l06-f4",
          front: "Key concept: ARP: Address Resolution Protocol",
          back:
            "For network hardware, the primary address is defined by the manufacturer of the device and is stored in permanent memory within the device, so it does not change.",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L07  Checkpoint Quiz 2
    ───────────────────────────────────────────────── */
    {
      id: "ti-l07",
      title: "Checkpoint Quiz 2",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of the concepts covered in the preceding lessons"],
      questions: [
        {
          id: "ti-l07-q1",
          text: "Which of the following best describes a key idea from the section on The Internet Address Architecture?",
          options: [
            { id: "a", text: "3." },
            { id: "b", text: "3.5.2." },
            { id: "c", text: "2." },
            { id: "d", text: "4." },
          ],
          correctOptionId: "c",
          explanation:
            "This question relates to The Internet Address Architecture. 2.",
        },
        {
          id: "ti-l07-q2",
          text: "Which of the following best describes a key idea from the section on Link Layer?",
          options: [
            { id: "a", text: "4." },
            { id: "b", text: "2." },
            { id: "c", text: "3." },
            { id: "d", text: "3.5.2." },
          ],
          correctOptionId: "c",
          explanation:
            "This question relates to Link Layer. 3.",
        },
        {
          id: "ti-l07-q3",
          text: "Which of the following best describes a key idea from the section on 5.2. Power Save Mode and the Time Sync Function (TSF)?",
          options: [
            { id: "a", text: "2." },
            { id: "b", text: "3." },
            { id: "c", text: "4." },
            { id: "d", text: "3.5.2." },
          ],
          correctOptionId: "d",
          explanation:
            "This question relates to 5.2. Power Save Mode and the Time Sync Function (TSF). 3.5.2.",
        },
        {
          id: "ti-l07-q4",
          text: "Which of the following best describes a key idea from the section on ARP: Address Resolution Protocol?",
          options: [
            { id: "a", text: "3." },
            { id: "b", text: "2." },
            { id: "c", text: "3.5.2." },
            { id: "d", text: "4." },
          ],
          correctOptionId: "d",
          explanation:
            "This question relates to ARP: Address Resolution Protocol. 4.",
        },
        {
          id: "ti-l07-q5",
          text: "Which of the following best describes a key idea from the section on The Internet Protocol (IP)?",
          options: [
            { id: "a", text: "5." },
            { id: "b", text: "2." },
            { id: "c", text: "3." },
            { id: "d", text: "3.5.2." },
          ],
          correctOptionId: "a",
          explanation:
            "This question relates to The Internet Protocol (IP). 5.",
        },
      ],
    },
  ],
};
