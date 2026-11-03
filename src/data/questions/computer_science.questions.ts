import type { Question } from "../../types/quiz.types.js";

export const computer_scienceQuestions: Question[] = [
  {
    id: "CS12-001",
    class: 12,
    subject: "Computer Science",
    topic: "Computer Architecture & Operating Systems - CPU Architecture",
    subtopic: "CPU Components",
    topicId: "CS11-CH02",
    subtopicId: "CS11-CH02-T04",
    question:
      "Which component of the CPU is primarily responsible for performing arithmetic and logical operations?",
    options: [
      {
        key: "A",
        text: "Control Unit",
      },
      {
        key: "B",
        text: "Arithmetic Logic Unit (ALU)",
      },
      {
        key: "C",
        text: "Cache Memory",
      },
      {
        key: "D",
        text: "Registers",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The Arithmetic Logic Unit (ALU) is the component of the CPU that performs arithmetic and logical operations. The Control Unit, Cache Memory, and Registers have different roles in the CPU.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-002",
    class: 12,
    subject: "Computer Science",
    topic: "Computer Architecture & Operating Systems - Memory Hierarchy",
    subtopic: "Types of Memory",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T08",
    question:
      "Which type of memory is volatile and loses its data when power is turned off?",
    options: [
      {
        key: "A",
        text: "ROM",
      },
      {
        key: "B",
        text: "RAM",
      },
      {
        key: "C",
        text: "EPROM",
      },
      {
        key: "D",
        text: "Flash Memory",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "RAM (Random Access Memory) is volatile and loses its data when the power is turned off. ROM, EPROM, and Flash Memory are non-volatile and retain data even without power.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-003",
    class: 12,
    subject: "Computer Science",
    topic: "Computer Architecture & Operating Systems - Bus Systems",
    subtopic: "Data Transfer",
    topicId: "CS12-CH06",
    subtopicId: "CS12-CH06-T02",
    question:
      "Which bus is responsible for transferring data between the CPU and I/O devices?",
    options: [
      {
        key: "A",
        text: "Data Bus",
      },
      {
        key: "B",
        text: "Address Bus",
      },
      {
        key: "C",
        text: "Control Bus",
      },
      {
        key: "D",
        text: "System Bus",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The Data Bus is used to transfer data between the CPU and I/O devices. The Address Bus and Control Bus have different functions in the computer system.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-004",
    class: 12,
    subject: "Computer Science",
    topic:
      "Computer Architecture & Operating Systems - Instruction Set Architecture",
    subtopic: "Instruction Formats",
    topicId: "CS11-CH02",
    subtopicId: "CS11-CH02-T15",
    question:
      "Which of the following is NOT a common format for computer instructions?",
    options: [
      {
        key: "A",
        text: "Fixed-length",
      },
      {
        key: "B",
        text: "Variable-length",
      },
      {
        key: "C",
        text: "Hybrid",
      },
      {
        key: "D",
        text: "Continuous",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "Continuous is not a common format for computer instructions. Common formats include fixed-length, variable-length, and hybrid formats.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-005",
    class: 12,
    subject: "Computer Science",
    topic: "Computer Architecture & Operating Systems - I/O Operations",
    subtopic: "I/O Techniques",
    topicId: "CS12-CH03",
    subtopicId: "CS12-CH03-T11",
    question:
      "Which I/O technique allows the CPU to perform other tasks while the I/O operation is in progress?",
    options: [
      {
        key: "A",
        text: "Programmed I/O",
      },
      {
        key: "B",
        text: "Interrupt-driven I/O",
      },
      {
        key: "C",
        text: "DMA (Direct Memory Access)",
      },
      {
        key: "D",
        text: "Synchronous I/O",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "DMA (Direct Memory Access) allows the CPU to perform other tasks while the I/O operation is in progress, as it transfers data directly between memory and I/O devices without CPU intervention.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-006",
    class: 12,
    subject: "Computer Science",
    topic:
      "Computer Architecture & Operating Systems - Operating System Concepts",
    subtopic: "Process Management",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T16",
    question:
      "Which of the following is NOT a state of a process in the process lifecycle?",
    options: [
      {
        key: "A",
        text: "New",
      },
      {
        key: "B",
        text: "Running",
      },
      {
        key: "C",
        text: "Blocked",
      },
      {
        key: "D",
        text: "Terminated",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "Terminated is not a standard state in the process lifecycle. The standard states are New, Ready, Running, and Blocked (or Waiting).",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-007",
    class: 12,
    subject: "Computer Science",
    topic: "Computer Architecture & Operating Systems - File Systems",
    subtopic: "File Access Methods",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T15",
    question:
      "Which file access method is used when a program needs to read data from the middle of a file without reading the entire file?",
    options: [
      {
        key: "A",
        text: "Sequential Access",
      },
      {
        key: "B",
        text: "Direct Access",
      },
      {
        key: "C",
        text: "Stream Access",
      },
      {
        key: "D",
        text: "Indexed Access",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Direct Access, also known as Random Access, allows a program to read data from any position in the file without reading the entire file. Sequential Access, Stream Access, and Indexed Access have different characteristics.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-008",
    class: 12,
    subject: "Computer Science",
    topic: "Computer Architecture & Operating Systems - Memory Management",
    subtopic: "Paging and Segmentation",
    topicId: "CS12-CH03",
    subtopicId: "CS12-CH03-T04",
    question:
      "Which memory management technique divides the memory into fixed-size blocks called pages?",
    options: [
      {
        key: "A",
        text: "Paging",
      },
      {
        key: "B",
        text: "Segmentation",
      },
      {
        key: "C",
        text: "Partitioning",
      },
      {
        key: "D",
        text: "Swapping",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Paging is a memory management technique that divides memory into fixed-size blocks called pages. Segmentation divides memory into variable-sized segments, while Partitioning and Swapping are other memory management techniques.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-009",
    class: 12,
    subject: "Computer Science",
    topic: "Computer Architecture & Operating Systems - Virtual Memory",
    subtopic: "Page Replacement Algorithms",
    topicId: "CS11-CH06",
    subtopicId: "CS11-CH06-T11",
    question:
      "Which page replacement algorithm selects the page that will not be used for the longest period of time?",
    options: [
      {
        key: "A",
        text: "FIFO (First-In, First-Out)",
      },
      {
        key: "B",
        text: "LRU (Least Recently Used)",
      },
      {
        key: "C",
        text: "Optimal",
      },
      {
        key: "D",
        text: "Random",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "The Optimal page replacement algorithm selects the page that will not be used for the longest period of time. FIFO, LRU, and Random are other page replacement algorithms.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-010",
    class: 12,
    subject: "Computer Science",
    topic: "Computer Architecture & Operating Systems - CPU Scheduling",
    subtopic: "Scheduling Algorithms",
    topicId: "CS11-CH06",
    subtopicId: "CS11-CH06-T11",
    question:
      "Which CPU scheduling algorithm minimizes the average waiting time for a set of processes?",
    options: [
      {
        key: "A",
        text: "First-Come, First-Served (FCFS)",
      },
      {
        key: "B",
        text: "Shortest Job Next (SJN)",
      },
      {
        key: "C",
        text: "Round Robin (RR)",
      },
      {
        key: "D",
        text: "Priority Scheduling",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Shortest Job Next (SJN) minimizes the average waiting time for a set of processes by selecting the process with the shortest burst time next. FCFS, Round Robin, and Priority Scheduling have different characteristics.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-011",
    class: 12,
    subject: "Computer Science",
    topic: "Digital Logic & Web Technologies - Web Architecture",
    subtopic: "Client-Server Architecture",
    topicId: "CS12-CH09",
    subtopicId: "CS12-CH09-T13",
    question:
      "In a client-server architecture, which of the following best describes the role of the server?",
    options: [
      {
        key: "A",
        text: "Processes requests and sends responses to the client",
      },
      {
        key: "B",
        text: "Initiates requests to the server",
      },
      {
        key: "C",
        text: "Stores and manages user data locally",
      },
      {
        key: "D",
        text: "Handles user interface and presentation",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The server in a client-server architecture processes requests from clients and sends appropriate responses, handling tasks such as data storage and processing.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-012",
    class: 12,
    subject: "Computer Science",
    topic: "Digital Logic & Web Technologies - Web Hosting",
    subtopic: "Web Hosting Services",
    topicId: "CS12-CH08",
    subtopicId: "CS12-CH08-T15",
    question:
      "Which of the following is a primary function of web hosting services?",
    options: [
      {
        key: "A",
        text: "Providing a platform for developers to write code",
      },
      {
        key: "B",
        text: "Storing and serving web content to users",
      },
      {
        key: "C",
        text: "Designing the user interface of websites",
      },
      {
        key: "D",
        text: "Creating domain names for websites",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Web hosting services primarily store and serve web content to users, ensuring that websites are accessible over the internet.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-013",
    class: 12,
    subject: "Computer Science",
    topic: "Digital Logic & Web Technologies - Domain Registration",
    subtopic: "Domain Name System (DNS)",
    topicId: "CS11-CH17",
    subtopicId: "CS11-CH17-T11",
    question:
      "What is the purpose of the Domain Name System (DNS) in web technologies?",
    options: [
      {
        key: "A",
        text: "To translate domain names into IP addresses",
      },
      {
        key: "B",
        text: "To provide a secure connection between the client and server",
      },
      {
        key: "C",
        text: "To encrypt data transmitted over the internet",
      },
      {
        key: "D",
        text: "To store user data on the server",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The Domain Name System (DNS) translates human-readable domain names into IP addresses, which are used by computers to identify and communicate with each other.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-014",
    class: 12,
    subject: "Computer Science",
    topic: "Digital Logic & Web Technologies - Backend Scripts Overview",
    subtopic: "Server-Side Scripting",
    topicId: "CS12-CH14",
    subtopicId: "CS12-CH14-T08",
    question:
      "Which of the following is an example of a server-side scripting language commonly used for web development?",
    options: [
      {
        key: "A",
        text: "JavaScript",
      },
      {
        key: "B",
        text: "HTML",
      },
      {
        key: "C",
        text: "CSS",
      },
      {
        key: "D",
        text: "PHP",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "PHP is a server-side scripting language used for web development, while JavaScript, HTML, and CSS are primarily client-side technologies.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-015",
    class: 12,
    subject: "Computer Science",
    topic: "Digital Logic & Web Technologies - REST APIs",
    subtopic: "API Design",
    topicId: "CS12-CH08",
    subtopicId: "CS12-CH08-T15",
    question: "What does REST stand for in the context of web technologies?",
    options: [
      {
        key: "A",
        text: "Rapid Execution System Transfer",
      },
      {
        key: "B",
        text: "Representational State Transfer",
      },
      {
        key: "C",
        text: "Reliable Event Stream Transmission",
      },
      {
        key: "D",
        text: "Remote Entity Synchronization Technology",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "REST stands for Representational State Transfer, a software architectural style that defines a set of constraints and properties for creating web services.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-016",
    class: 12,
    subject: "Computer Science",
    topic: "Digital Logic & Web Technologies - JSON Data Exchange",
    subtopic: "JSON Format",
    topicId: "CS12-CH18",
    subtopicId: "CS12-CH18-T12",
    question: "Which of the following statements about JSON is true?",
    options: [
      {
        key: "A",
        text: "JSON is a programming language for web development",
      },
      {
        key: "B",
        text: "JSON is a format for storing and exchanging data",
      },
      {
        key: "C",
        text: "JSON can only be used with JavaScript",
      },
      {
        key: "D",
        text: "JSON is a type of database",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "JSON (JavaScript Object Notation) is a lightweight format for storing and exchanging data, commonly used in web applications and APIs.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-017",
    class: 12,
    subject: "Computer Science",
    topic: "Digital Logic & Web Technologies - Web Architecture",
    subtopic: "Web Protocols",
    topicId: "CS12-CH08",
    subtopicId: "CS12-CH08-T15",
    question:
      "Which protocol is primarily used for secure communication over the internet?",
    options: [
      {
        key: "A",
        text: "HTTP",
      },
      {
        key: "B",
        text: "HTTPS",
      },
      {
        key: "C",
        text: "FTP",
      },
      {
        key: "D",
        text: "SMTP",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "HTTPS (Hypertext Transfer Protocol Secure) is used for secure communication over the internet, providing encryption and secure data transfer.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-018",
    class: 12,
    subject: "Computer Science",
    topic: "Digital Logic & Web Technologies - Backend Scripts Overview",
    subtopic: "Database Integration",
    topicId: "CS12-CH04",
    subtopicId: "CS12-CH04-T01",
    question:
      "What is the primary purpose of using a database in web applications?",
    options: [
      {
        key: "A",
        text: "To store and manage dynamic data",
      },
      {
        key: "B",
        text: "To generate web pages on the client side",
      },
      {
        key: "C",
        text: "To handle user authentication and security",
      },
      {
        key: "D",
        text: "To optimize the loading speed of web pages",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Databases are used in web applications to store and manage dynamic data, allowing for efficient data retrieval and manipulation.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-019",
    class: 12,
    subject: "Computer Science",
    topic: "Digital Logic & Web Technologies - REST APIs",
    subtopic: "API Endpoints",
    topicId: "CS12-CH08",
    subtopicId: "CS12-CH08-T01",
    question:
      "Which HTTP method is typically used to retrieve data from a REST API?",
    options: [
      {
        key: "A",
        text: "POST",
      },
      {
        key: "B",
        text: "GET",
      },
      {
        key: "C",
        text: "PUT",
      },
      {
        key: "D",
        text: "DELETE",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The GET HTTP method is used to retrieve data from a REST API, while POST, PUT, and DELETE are used for creating, updating, and deleting resources, respectively.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-020",
    class: 12,
    subject: "Computer Science",
    topic: "Digital Logic & Web Technologies - JSON Data Exchange",
    subtopic: "JSON Parsing",
    topicId: "CS12-CH02",
    subtopicId: "CS12-CH02-T01",
    question:
      "Which of the following is a common method for parsing JSON data in a web application?",
    options: [
      {
        key: "A",
        text: "Using the eval() function",
      },
      {
        key: "B",
        text: "Using the JSON.parse() method",
      },
      {
        key: "C",
        text: "Using the JSON.stringify() method",
      },
      {
        key: "D",
        text: "Using the document.getElementById() method",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The JSON.parse() method is used to parse JSON data into a JavaScript object, while JSON.stringify() converts a JavaScript object into a JSON string.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS11-001",
    class: 11,
    subject: "Computer Science",
    topic: "Programming in C - C Language Fundamentals",
    subtopic: "Character Set",
    topicId: "CS11-CH07",
    subtopicId: "CS11-CH07-T13",
    question: "Which of the following is not a valid character in C?",
    options: [
      {
        key: "A",
        text: "a",
      },
      {
        key: "B",
        text: "9",
      },
      {
        key: "C",
        text: "@",
      },
      {
        key: "D",
        text: "Ω",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "In C, the character set includes letters, digits, and special characters. The character 'Ω' is not part of the standard ASCII character set used in C.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-002",
    class: 11,
    subject: "Computer Science",
    topic: "Programming in C - C Language Fundamentals",
    subtopic: "Keywords",
    topicId: "CS11-CH07",
    subtopicId: "CS11-CH07-T06",
    question: "Which of the following is not a keyword in C?",
    options: [
      {
        key: "A",
        text: "int",
      },
      {
        key: "B",
        text: "float",
      },
      {
        key: "C",
        text: "char",
      },
      {
        key: "D",
        text: "string",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "In C, 'string' is not a keyword. It is a data type in some higher-level languages but in C, strings are represented as arrays of characters.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-003",
    class: 11,
    subject: "Computer Science",
    topic: "Programming in C - C Language Fundamentals",
    subtopic: "Data Types",
    topicId: "CS11-CH07",
    subtopicId: "CS11-CH07-T10",
    question: "Which data type is used to store a single character in C?",
    options: [
      {
        key: "A",
        text: "int",
      },
      {
        key: "B",
        text: "float",
      },
      {
        key: "C",
        text: "char",
      },
      {
        key: "D",
        text: "double",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "The 'char' data type is used to store a single character in C. It can hold any character from the ASCII character set.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-004",
    class: 11,
    subject: "Computer Science",
    topic: "Programming in C - C Language Fundamentals",
    subtopic: "Variables",
    topicId: "CS11-CH07",
    subtopicId: "CS11-CH07-T08",
    question: "Which of the following is a valid variable name in C?",
    options: [
      {
        key: "A",
        text: "123abc",
      },
      {
        key: "B",
        text: "abc123",
      },
      {
        key: "C",
        text: "int",
      },
      {
        key: "D",
        text: "abc-123",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "A valid variable name in C must start with a letter or an underscore and can be followed by letters, digits, or underscores. 'abc123' is a valid variable name.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-005",
    class: 11,
    subject: "Computer Science",
    topic: "Programming in C - C Language Fundamentals",
    subtopic: "Operators",
    topicId: "CS12-CH09",
    subtopicId: "CS12-CH09-T04",
    question: "What is the result of the following expression in C? 5 + 3 * 2",
    options: [
      {
        key: "A",
        text: "10",
      },
      {
        key: "B",
        text: "11",
      },
      {
        key: "C",
        text: "16",
      },
      {
        key: "D",
        text: "25",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "In C, the multiplication operator (*) has a higher precedence than the addition operator (+). Therefore, the expression 5 + 3 * 2 is evaluated as 5 + (3 * 2) = 5 + 6 = 11.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-006",
    class: 11,
    subject: "Computer Science",
    topic: "Programming in C - Control Structures",
    subtopic: "Decision Making",
    topicId: "CS11-CH09",
    subtopicId: "CS11-CH09-T02",
    question:
      "Which of the following control structures is used for making decisions based on multiple conditions?",
    options: [
      {
        key: "A",
        text: "if",
      },
      {
        key: "B",
        text: "if-else",
      },
      {
        key: "C",
        text: "switch-case",
      },
      {
        key: "D",
        text: "for loop",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "The 'switch-case' control structure is used for making decisions based on multiple conditions. It evaluates an expression and compares it with multiple cases to find a match.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-007",
    class: 11,
    subject: "Computer Science",
    topic: "Programming in C - Control Structures",
    subtopic: "Looping",
    topicId: "CS11-CH09",
    subtopicId: "CS11-CH09-T09",
    question: "Which loop is guaranteed to execute at least once in C?",
    options: [
      {
        key: "A",
        text: "while loop",
      },
      {
        key: "B",
        text: "do-while loop",
      },
      {
        key: "C",
        text: "for loop",
      },
      {
        key: "D",
        text: "nested loop",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The 'do-while' loop is guaranteed to execute at least once because the condition is checked at the end of the loop, after the body has been executed.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-008",
    class: 11,
    subject: "Computer Science",
    topic: "Programming in C - C Language Fundamentals",
    subtopic: "Formatted I/O",
    topicId: "CS11-CH07",
    subtopicId: "CS11-CH07-T01",
    question:
      "Which function is used to read a single character from the standard input in C?",
    options: [
      {
        key: "A",
        text: "scanf()",
      },
      {
        key: "B",
        text: "getchar()",
      },
      {
        key: "C",
        text: "printf()",
      },
      {
        key: "D",
        text: "putchar()",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The 'getchar()' function is used to read a single character from the standard input in C. It returns the character read or EOF if the end of the file is reached.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-009",
    class: 11,
    subject: "Computer Science",
    topic: "Programming in C - C Language Fundamentals",
    subtopic: "Preprocessor Directives",
    topicId: "CS11-CH07",
    subtopicId: "CS11-CH07-T01",
    question:
      "Which preprocessor directive is used to include a header file in C?",
    options: [
      {
        key: "A",
        text: "#define",
      },
      {
        key: "B",
        text: "#include",
      },
      {
        key: "C",
        text: "#pragma",
      },
      {
        key: "D",
        text: "#ifdef",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The '#include' preprocessor directive is used to include a header file in C. It allows the programmer to include the contents of another file at the point where the directive is placed.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-010",
    class: 11,
    subject: "Computer Science",
    topic: "Programming in C - Control Structures",
    subtopic: "Nested Loops",
    topicId: "CS11-CH09",
    subtopicId: "CS11-CH09-T12",
    question:
      'What will be the output of the following code snippet?\nfor (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= i; j++) {\n        printf("*");\n    }\n    printf("\\n");\n}',
    options: [
      {
        key: "A",
        text: "*\n**\n***",
      },
      {
        key: "B",
        text: "***\n**\n*",
      },
      {
        key: "C",
        text: "*\n*\n*",
      },
      {
        key: "D",
        text: "***\n***\n***",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The outer loop runs 3 times, and for each iteration, the inner loop runs a number of times equal to the current value of 'i'. This results in the following output: *\n**\n***",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-011",
    class: 11,
    subject: "Computer Science",
    topic: "Database Management Systems (DBMS) - Data Storage Concepts",
    subtopic: "Flat File System Limitations",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T07",
    question:
      "Which of the following is a major limitation of flat file systems in terms of data management?",
    options: [
      {
        key: "A",
        text: "Data redundancy",
      },
      {
        key: "B",
        text: "Enhanced data security",
      },
      {
        key: "C",
        text: "Efficient data access",
      },
      {
        key: "D",
        text: "Automatic data backup",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Flat file systems often suffer from data redundancy because the same data can be stored in multiple files, leading to inefficiency and potential inconsistencies.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-012",
    class: 11,
    subject: "Computer Science",
    topic: "Database Management Systems (DBMS) - Data Storage Concepts",
    subtopic: "Data Redundancy",
    topicId: "CS11-CH14",
    subtopicId: "CS11-CH14-T17",
    question:
      "What is a primary benefit of using a database over a flat file system in terms of data redundancy?",
    options: [
      {
        key: "A",
        text: "Increased data redundancy",
      },
      {
        key: "B",
        text: "Reduced data redundancy",
      },
      {
        key: "C",
        text: "No impact on data redundancy",
      },
      {
        key: "D",
        text: "Increased data inconsistency",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Databases reduce data redundancy by centralizing data storage and allowing for better data management practices, such as normalization.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-013",
    class: 11,
    subject: "Computer Science",
    topic: "Database Management Systems (DBMS) - Data Storage Concepts",
    subtopic: "Data Inconsistency",
    topicId: "CS11-CH14",
    subtopicId: "CS11-CH14-T01",
    question:
      "Which of the following scenarios best illustrates data inconsistency in a flat file system?",
    options: [
      {
        key: "A",
        text: "Data is stored in a single file",
      },
      {
        key: "B",
        text: "Data is updated in one file but not in another",
      },
      {
        key: "C",
        text: "Data is encrypted",
      },
      {
        key: "D",
        text: "Data is compressed",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Data inconsistency occurs when the same data is stored in multiple files and is updated in one file but not in another, leading to discrepancies.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-014",
    class: 11,
    subject: "Computer Science",
    topic: "Database Management Systems (DBMS) - Data Storage Concepts",
    subtopic: "Database Benefits",
    topicId: "CS11-CH14",
    subtopicId: "CS11-CH14-T03",
    question:
      "Which of the following is NOT a benefit of using a database management system (DBMS) over a flat file system?",
    options: [
      {
        key: "A",
        text: "Centralized data management",
      },
      {
        key: "B",
        text: "Data redundancy reduction",
      },
      {
        key: "C",
        text: "Increased data inconsistency",
      },
      {
        key: "D",
        text: "Improved data security",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Databases reduce data inconsistency by ensuring that data is consistent across all related tables and files, unlike flat file systems which can lead to inconsistencies.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-015",
    class: 11,
    subject: "Computer Science",
    topic: "Database Management Systems (DBMS) - Data Storage Concepts",
    subtopic: "Data Redundancy",
    topicId: "CS11-CH14",
    subtopicId: "CS11-CH14-T17",
    question:
      "How does data redundancy in flat file systems affect data integrity?",
    options: [
      {
        key: "A",
        text: "It improves data integrity",
      },
      {
        key: "B",
        text: "It has no effect on data integrity",
      },
      {
        key: "C",
        text: "It compromises data integrity",
      },
      {
        key: "D",
        text: "It enhances data security",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Data redundancy can compromise data integrity because the same data being stored in multiple places can lead to inconsistencies and errors if not all copies are updated simultaneously.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-016",
    class: 11,
    subject: "Computer Science",
    topic: "Database Management Systems (DBMS) - Data Storage Concepts",
    subtopic: "Data Inconsistency",
    topicId: "CS11-CH14",
    subtopicId: "CS11-CH14-T01",
    question:
      "What is a common cause of data inconsistency in flat file systems?",
    options: [
      {
        key: "A",
        text: "Centralized data management",
      },
      {
        key: "B",
        text: "Decentralized data storage",
      },
      {
        key: "C",
        text: "Automated data updates",
      },
      {
        key: "D",
        text: "Encrypted data storage",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Decentralized data storage, where data is stored in multiple, separate files, can lead to data inconsistency if updates are not synchronized across all files.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-017",
    class: 11,
    subject: "Computer Science",
    topic: "Database Management Systems (DBMS) - Data Storage Concepts",
    subtopic: "Database Benefits",
    topicId: "CS11-CH14",
    subtopicId: "CS11-CH14-T03",
    question:
      "Which of the following is a key benefit of using a database management system for data storage?",
    options: [
      {
        key: "A",
        text: "Data can be easily lost",
      },
      {
        key: "B",
        text: "Data is more secure",
      },
      {
        key: "C",
        text: "Data is less accessible",
      },
      {
        key: "D",
        text: "Data is more redundant",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "A key benefit of using a database management system is that it provides enhanced data security through features such as user authentication, access control, and encryption.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-018",
    class: 11,
    subject: "Computer Science",
    topic: "Database Management Systems (DBMS) - Data Storage Concepts",
    subtopic: "Data Redundancy",
    topicId: "CS11-CH14",
    subtopicId: "CS11-CH14-T17",
    question:
      "In a flat file system, what is the primary reason for data redundancy?",
    options: [
      {
        key: "A",
        text: "Centralized data storage",
      },
      {
        key: "B",
        text: "Decentralized data storage",
      },
      {
        key: "C",
        text: "Automated data updates",
      },
      {
        key: "D",
        text: "Encrypted data storage",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Data redundancy in flat file systems is primarily due to decentralized data storage, where the same data is stored in multiple files, leading to inefficiencies and potential inconsistencies.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-019",
    class: 11,
    subject: "Computer Science",
    topic: "Database Management Systems (DBMS) - Data Storage Concepts",
    subtopic: "Data Inconsistency",
    topicId: "CS11-CH14",
    subtopicId: "CS11-CH14-T01",
    question:
      "Which of the following best describes the concept of data inconsistency in a database context?",
    options: [
      {
        key: "A",
        text: "Data is stored in a single, centralized location",
      },
      {
        key: "B",
        text: "Data is stored in multiple, inconsistent locations",
      },
      {
        key: "C",
        text: "Data is encrypted for security",
      },
      {
        key: "D",
        text: "Data is compressed for efficiency",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Data inconsistency occurs when the same data is stored in multiple, inconsistent locations, leading to discrepancies and potential errors in data retrieval and processing.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-020",
    class: 11,
    subject: "Computer Science",
    topic: "Database Management Systems (DBMS) - Data Storage Concepts",
    subtopic: "Database Benefits",
    topicId: "CS11-CH14",
    subtopicId: "CS11-CH14-T03",
    question:
      "What is a significant advantage of using a database management system (DBMS) for managing large datasets?",
    options: [
      {
        key: "A",
        text: "Increased data redundancy",
      },
      {
        key: "B",
        text: "Improved data consistency",
      },
      {
        key: "C",
        text: "Decreased data security",
      },
      {
        key: "D",
        text: "Reduced data accessibility",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "A significant advantage of using a DBMS is improved data consistency, as it ensures that data is consistent across all related tables and files, reducing the risk of inconsistencies and errors.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS12-021",
    class: 12,
    subject: "Computer Science",
    topic: "Networking & Cybersecurity - Computer Networks",
    subtopic: "Network Topologies",
    topicId: "CS11-CH16",
    subtopicId: "CS11-CH16-T07",
    question:
      "Which network topology is characterized by a single central hub that connects all devices?",
    options: [
      {
        key: "A",
        text: "Bus",
      },
      {
        key: "B",
        text: "Star",
      },
      {
        key: "C",
        text: "Ring",
      },
      {
        key: "D",
        text: "Mesh",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "In a star topology, all devices are connected to a central hub, which acts as a central node. This topology is commonly used in local area networks (LANs).",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-022",
    class: 12,
    subject: "Computer Science",
    topic: "Networking & Cybersecurity - OSI 7-Layer Model",
    subtopic: "OSI Model Functions",
    topicId: "CS12-CH09",
    subtopicId: "CS12-CH09-T07",
    question:
      "Which layer of the OSI model is responsible for establishing, maintaining, and terminating connections?",
    options: [
      {
        key: "A",
        text: "Physical Layer",
      },
      {
        key: "B",
        text: "Data Link Layer",
      },
      {
        key: "C",
        text: "Session Layer",
      },
      {
        key: "D",
        text: "Application Layer",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "The Session Layer (Layer 5) of the OSI model is responsible for establishing, managing, and terminating connections between applications. It also handles session establishment and synchronization.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-023",
    class: 12,
    subject: "Computer Science",
    topic: "Networking & Cybersecurity - TCP/IP Model",
    subtopic: "TCP/IP Model Layers",
    topicId: "CS12-CH14",
    subtopicId: "CS12-CH14-T04",
    question:
      "Which layer in the TCP/IP model is responsible for the delivery of data packets from one host to another?",
    options: [
      {
        key: "A",
        text: "Application Layer",
      },
      {
        key: "B",
        text: "Transport Layer",
      },
      {
        key: "C",
        text: "Internet Layer",
      },
      {
        key: "D",
        text: "Link Layer",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "The Internet Layer (Layer 3) in the TCP/IP model is responsible for the delivery of data packets from one host to another. It uses IP addresses to route packets.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-024",
    class: 12,
    subject: "Computer Science",
    topic: "Networking & Cybersecurity - Network Protocols",
    subtopic: "Common Network Protocols",
    topicId: "CS12-CH14",
    subtopicId: "CS12-CH14-T05",
    question:
      "Which protocol is used for transferring files between a client and a server over a TCP/IP network?",
    options: [
      {
        key: "A",
        text: "HTTP",
      },
      {
        key: "B",
        text: "FTP",
      },
      {
        key: "C",
        text: "SMTP",
      },
      {
        key: "D",
        text: "DNS",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The File Transfer Protocol (FTP) is used for transferring files between a client and a server over a TCP/IP network. FTP provides a reliable method for file transfer and is widely used in various network environments.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-025",
    class: 12,
    subject: "Computer Science",
    topic: "Networking & Cybersecurity - IP Addressing",
    subtopic: "IPv4 Addressing",
    topicId: "CS12-CH14",
    subtopicId: "CS12-CH14-T16",
    question:
      "Which class of IPv4 address is typically used for large networks with many hosts?",
    options: [
      {
        key: "A",
        text: "Class A",
      },
      {
        key: "B",
        text: "Class B",
      },
      {
        key: "C",
        text: "Class C",
      },
      {
        key: "D",
        text: "Class D",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Class A IPv4 addresses are typically used for large networks with many hosts. They have a range from 1.0.0.0 to 126.0.0.0 and provide a large number of host addresses.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-026",
    class: 12,
    subject: "Computer Science",
    topic: "Networking & Cybersecurity - Network Devices",
    subtopic: "Network Device Functions",
    topicId: "CS12-CH09",
    subtopicId: "CS12-CH09-T07",
    question:
      "Which network device is used to connect multiple network segments and forward data packets based on MAC addresses?",
    options: [
      {
        key: "A",
        text: "NIC",
      },
      {
        key: "B",
        text: "Switch",
      },
      {
        key: "C",
        text: "Router",
      },
      {
        key: "D",
        text: "Gateway",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "A switch is used to connect multiple network segments and forward data packets based on MAC addresses. It operates at the Data Link Layer (Layer 2) of the OSI model.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-027",
    class: 12,
    subject: "Computer Science",
    topic: "Networking & Cybersecurity - Cybersecurity",
    subtopic: "Information Security CIA Triad",
    topicId: "CS11-CH05",
    subtopicId: "CS11-CH05-T02",
    question:
      "Which component of the CIA triad focuses on ensuring that data is accessible to authorized users when needed?",
    options: [
      {
        key: "A",
        text: "Confidentiality",
      },
      {
        key: "B",
        text: "Integrity",
      },
      {
        key: "C",
        text: "Availability",
      },
      {
        key: "D",
        text: "Authentication",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Availability is one of the components of the CIA triad and focuses on ensuring that data is accessible to authorized users when needed. It is crucial for maintaining the operational efficiency of a network.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-028",
    class: 12,
    subject: "Computer Science",
    topic: "Networking & Cybersecurity - Cybersecurity Threats",
    subtopic: "Common Cybersecurity Threats",
    topicId: "CS11-CH05",
    subtopicId: "CS11-CH05-T03",
    question:
      "Which type of malware is designed to encrypt user data and demand a ransom for its release?",
    options: [
      {
        key: "A",
        text: "Virus",
      },
      {
        key: "B",
        text: "Worm",
      },
      {
        key: "C",
        text: "Trojan",
      },
      {
        key: "D",
        text: "Ransomware",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "Ransomware is a type of malware that encrypts user data and demands a ransom for its release. It is a significant threat to both individual users and organizations.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-029",
    class: 12,
    subject: "Computer Science",
    topic: "Networking & Cybersecurity - Security Countermeasures",
    subtopic: "Firewalls",
    topicId: "CS12-CH15",
    subtopicId: "CS12-CH15-T10",
    question:
      "Which of the following best describes the function of a firewall in a network?",
    options: [
      {
        key: "A",
        text: "To encrypt data packets",
      },
      {
        key: "B",
        text: "To monitor and control incoming and outgoing network traffic",
      },
      {
        key: "C",
        text: "To store and forward data packets",
      },
      {
        key: "D",
        text: "To assign IP addresses to devices",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "A firewall is a network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It helps prevent unauthorized access to a network.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-030",
    class: 12,
    subject: "Computer Science",
    topic: "Networking & Cybersecurity - Cyber Law",
    subtopic: "Cyber Law in Nepal",
    topicId: "CS12-CH15",
    subtopicId: "CS12-CH15-T17",
    question:
      "Which act in Nepal provides the legal framework for electronic transactions and regulates cyber crimes?",
    options: [
      {
        key: "A",
        text: "Cybersecurity Act 2063",
      },
      {
        key: "B",
        text: "Electronic Transactions Act 2063",
      },
      {
        key: "C",
        text: "Data Protection Act 2063",
      },
      {
        key: "D",
        text: "Cyber Crime Prevention Act 2063",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The Electronic Transactions Act 2063 (ETA 2063) provides the legal framework for electronic transactions and regulates cyber crimes in Nepal. It covers various aspects of digital signatures and penalties for cyber crimes.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS11-021",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Architecture & Operating Systems - Von Neumann Model",
    subtopic: "Fundamentals of Computer System Architecture",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T07",
    question:
      "Which component of the Von Neumann model is responsible for performing arithmetic and logical operations?",
    options: [
      {
        key: "A",
        text: "Control Unit (CU)",
      },
      {
        key: "B",
        text: "Arithmetic Logic Unit (ALU)",
      },
      {
        key: "C",
        text: "Registers",
      },
      {
        key: "D",
        text: "System Bus",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The Arithmetic Logic Unit (ALU) is responsible for performing arithmetic and logical operations in the Von Neumann model. It is a fundamental component of the CPU.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-022",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Architecture & Operating Systems - CPU Components",
    subtopic: "CPU Components and Functions",
    topicId: "CS12-CH09",
    subtopicId: "CS12-CH09-T07",
    question:
      "Which of the following is NOT a function of the Control Unit (CU) in the CPU?",
    options: [
      {
        key: "A",
        text: "Fetching instructions from memory",
      },
      {
        key: "B",
        text: "Decoding instructions",
      },
      {
        key: "C",
        text: "Performing arithmetic calculations",
      },
      {
        key: "D",
        text: "Controlling the operation of the ALU",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "The Control Unit (CU) is responsible for fetching, decoding, and controlling the execution of instructions. Performing arithmetic calculations is the responsibility of the Arithmetic Logic Unit (ALU).",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-023",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Architecture & Operating Systems - Memory Hierarchy",
    subtopic: "Types of Memory",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T08",
    question:
      "Which type of memory is typically used for the primary storage of data and instructions in a computer system?",
    options: [
      {
        key: "A",
        text: "Cache Memory",
      },
      {
        key: "B",
        text: "Random Access Memory (RAM)",
      },
      {
        key: "C",
        text: "Read-Only Memory (ROM)",
      },
      {
        key: "D",
        text: "Secondary Storage",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Random Access Memory (RAM) is used for the primary storage of data and instructions in a computer system. It is volatile and loses its data when power is turned off.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-024",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Architecture & Operating Systems - Memory Hierarchy",
    subtopic: "Cache Memory",
    topicId: "CS11-CH02",
    subtopicId: "CS11-CH02-T10",
    question:
      "Which level of cache memory is typically the smallest and fastest?",
    options: [
      {
        key: "A",
        text: "L1 Cache",
      },
      {
        key: "B",
        text: "L2 Cache",
      },
      {
        key: "C",
        text: "L3 Cache",
      },
      {
        key: "D",
        text: "L4 Cache",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "L1 Cache is the smallest and fastest level of cache memory. It is directly connected to the CPU and provides the quickest access to frequently used data and instructions.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-025",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Architecture & Operating Systems - I/O Ports",
    subtopic: "Types of I/O Ports",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T08",
    question:
      "Which I/O port is commonly used for connecting high-definition video devices to a computer?",
    options: [
      {
        key: "A",
        text: "USB",
      },
      {
        key: "B",
        text: "HDMI",
      },
      {
        key: "C",
        text: "VGA",
      },
      {
        key: "D",
        text: "PS/2",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "HDMI (High-Definition Multimedia Interface) is commonly used for connecting high-definition video devices to a computer, providing both audio and video signals.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-026",
    class: 11,
    subject: "Computer Science",
    topic:
      "Computer Architecture & Operating Systems - Operating System Fundamentals",
    subtopic: "Roles and Functions of OS",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T07",
    question:
      "Which of the following is NOT a primary function of an operating system?",
    options: [
      {
        key: "A",
        text: "Managing hardware resources",
      },
      {
        key: "B",
        text: "Providing a user interface",
      },
      {
        key: "C",
        text: "Executing application software",
      },
      {
        key: "D",
        text: "Directly controlling the power supply",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "An operating system manages hardware resources, provides a user interface, and executes application software. Directly controlling the power supply is not a primary function of an operating system.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-027",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Architecture & Operating Systems - Process Management",
    subtopic: "Process States",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T16",
    question:
      "Which process state indicates that a process is ready to execute but is waiting for the CPU to become available?",
    options: [
      {
        key: "A",
        text: "New",
      },
      {
        key: "B",
        text: "Ready",
      },
      {
        key: "C",
        text: "Running",
      },
      {
        key: "D",
        text: "Blocked",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The 'Ready' state indicates that a process is ready to execute but is waiting for the CPU to become available. Once the CPU is available, the process can transition to the 'Running' state.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-028",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Architecture & Operating Systems - CPU Scheduling",
    subtopic: "Scheduling Algorithms",
    topicId: "CS11-CH06",
    subtopicId: "CS11-CH06-T11",
    question:
      "Which CPU scheduling algorithm selects the next process based on the shortest job first?",
    options: [
      {
        key: "A",
        text: "First-Come, First-Served (FCFS)",
      },
      {
        key: "B",
        text: "Shortest Job First (SJF)",
      },
      {
        key: "C",
        text: "Round Robin (RR)",
      },
      {
        key: "D",
        text: "Priority Scheduling",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The Shortest Job First (SJF) scheduling algorithm selects the next process based on the shortest job first. This helps in reducing the average waiting time for processes.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-029",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Architecture & Operating Systems - Memory Management",
    subtopic: "Paging and Virtual Memory",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T14",
    question:
      "Which memory management technique divides the logical address space into fixed-size blocks called pages?",
    options: [
      {
        key: "A",
        text: "Segmentation",
      },
      {
        key: "B",
        text: "Paging",
      },
      {
        key: "C",
        text: "Virtual Memory",
      },
      {
        key: "D",
        text: "Demand Paging",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Paging is a memory management technique that divides the logical address space into fixed-size blocks called pages. Each page is mapped to a frame in physical memory.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-030",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Architecture & Operating Systems - File System",
    subtopic: "Types of File Systems",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T08",
    question:
      "Which type of operating system is designed to handle multiple users simultaneously and provide consistent performance?",
    options: [
      {
        key: "A",
        text: "Batch Operating System",
      },
      {
        key: "B",
        text: "Time-Sharing Operating System",
      },
      {
        key: "C",
        text: "Distributed Operating System",
      },
      {
        key: "D",
        text: "Real-Time Operating System (RTOS)",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "A Time-Sharing Operating System is designed to handle multiple users simultaneously and provide consistent performance by allocating CPU time to each user in a round-robin fashion.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-031",
    class: 11,
    subject: "Computer Science",
    topic: "Digital Logic & Web Technologies - Number Systems",
    subtopic: "Binary to Decimal Conversion",
    topicId: "CS11-CH03",
    subtopicId: "CS11-CH03-T12",
    question: "What is the decimal equivalent of the binary number 101101?",
    options: [
      {
        key: "A",
        text: "45",
      },
      {
        key: "B",
        text: "47",
      },
      {
        key: "C",
        text: "53",
      },
      {
        key: "D",
        text: "61",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "To convert the binary number 101101 to decimal, we calculate: 1*2^5 + 0*2^4 + 1*2^3 + 1*2^2 + 0*2^1 + 1*2^0 = 32 + 0 + 8 + 4 + 0 + 1 = 45.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-032",
    class: 11,
    subject: "Computer Science",
    topic: "Digital Logic & Web Technologies - Number Systems",
    subtopic: "Signed Binary Numbers",
    topicId: "CS11-CH03",
    subtopicId: "CS11-CH03-T02",
    question:
      "What is the 2's complement representation of the decimal number -13 in an 8-bit system?",
    options: [
      {
        key: "A",
        text: "11110011",
      },
      {
        key: "B",
        text: "11110010",
      },
      {
        key: "C",
        text: "11110101",
      },
      {
        key: "D",
        text: "11110110",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "To find the 2's complement of -13 in an 8-bit system, first convert 13 to binary: 00001101. Invert the bits: 11110010. Add 1: 11110011.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-033",
    class: 11,
    subject: "Computer Science",
    topic: "Digital Logic & Web Technologies - Boolean Logic",
    subtopic: "Basic Gates",
    topicId: "CS11-CH03",
    subtopicId: "CS11-CH03-T25",
    question:
      "Which basic logic gate will produce a HIGH output only if all its inputs are LOW?",
    options: [
      {
        key: "A",
        text: "AND",
      },
      {
        key: "B",
        text: "OR",
      },
      {
        key: "C",
        text: "NAND",
      },
      {
        key: "D",
        text: "NOR",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "The NOR gate produces a HIGH output only if all its inputs are LOW, as it is the inverted output of the OR gate.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-034",
    class: 11,
    subject: "Computer Science",
    topic: "Digital Logic & Web Technologies - Boolean Logic",
    subtopic: "Boolean Theorems",
    topicId: "CS11-CH03",
    subtopicId: "CS11-CH03-T15",
    question:
      "Which of the following is a correct application of De Morgan's laws?",
    options: [
      {
        key: "A",
        text: "A + B = A' * B'",
      },
      {
        key: "B",
        text: "A * B = A' + B'",
      },
      {
        key: "C",
        text: "(A + B)' = A' * B'",
      },
      {
        key: "D",
        text: "(A * B)' = A' + B",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "De Morgan's laws state that (A + B)' = A' * B' and (A * B)' = A' + B'. The correct application is (A + B)' = A' * B'.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-035",
    class: 11,
    subject: "Computer Science",
    topic: "Digital Logic & Web Technologies - Web Technology",
    subtopic: "HTTP and HTTPS",
    topicId: "CS11-CH17",
    subtopicId: "CS11-CH17-T12",
    question: "What is the primary difference between HTTP and HTTPS?",
    options: [
      {
        key: "A",
        text: "HTTP is faster than HTTPS",
      },
      {
        key: "B",
        text: "HTTPS uses SSL/TLS for secure communication",
      },
      {
        key: "C",
        text: "HTTP uses port 443",
      },
      {
        key: "D",
        text: "HTTPS is a protocol for email",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "HTTPS uses SSL/TLS for secure communication, ensuring that data transmitted between the client and server is encrypted and secure.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-036",
    class: 11,
    subject: "Computer Science",
    topic: "Digital Logic & Web Technologies - Web Technology",
    subtopic: "HTML5 Document Structure",
    topicId: "CS11-CH17",
    subtopicId: "CS11-CH17-T08",
    question:
      "Which of the following elements is used to define the main content of a web page in HTML5?",
    options: [
      {
        key: "A",
        text: "header",
      },
      {
        key: "B",
        text: "footer",
      },
      {
        key: "C",
        text: "main",
      },
      {
        key: "D",
        text: "nav",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "The <main> element in HTML5 is used to define the main content of a web page, which is unique to that document and should not be repeated across multiple pages.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-037",
    class: 11,
    subject: "Computer Science",
    topic: "Digital Logic & Web Technologies - Web Technology",
    subtopic: "CSS3 Box Model",
    topicId: "CS12-CH08",
    subtopicId: "CS12-CH08-T10",
    question:
      "Which property in CSS3 is used to set the space between the border and the content of an element?",
    options: [
      {
        key: "A",
        text: "margin",
      },
      {
        key: "B",
        text: "padding",
      },
      {
        key: "C",
        text: "border",
      },
      {
        key: "D",
        text: "content",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The padding property in CSS3 is used to set the space between the border and the content of an element, creating space inside the element.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-038",
    class: 11,
    subject: "Computer Science",
    topic: "Digital Logic & Web Technologies - Web Technology",
    subtopic: "Client-Side JavaScript",
    topicId: "CS12-CH14",
    subtopicId: "CS12-CH14-T08",
    question:
      "Which of the following is a correct way to declare a variable in JavaScript?",
    options: [
      {
        key: "A",
        text: "int x = 5;",
      },
      {
        key: "B",
        text: "var x = 5;",
      },
      {
        key: "C",
        text: "x = 5;",
      },
      {
        key: "D",
        text: "let x = 5;",
      },
    ],
    correct_options: ["B", "D"],
    is_multi_select: true,
    explanation:
      "In JavaScript, variables can be declared using the keywords 'var', 'let', or 'const'. Both 'var x = 5;' and 'let x = 5;' are correct ways to declare a variable.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-039",
    class: 11,
    subject: "Computer Science",
    topic: "Digital Logic & Web Technologies - Web Technology",
    subtopic: "CSS3 Layouts",
    topicId: "CS11-CH17",
    subtopicId: "CS11-CH17-T01",
    question: "Which CSS3 property is used to create a responsive grid layout?",
    options: [
      {
        key: "A",
        text: "display: flex;",
      },
      {
        key: "B",
        text: "display: grid;",
      },
      {
        key: "C",
        text: "display: block;",
      },
      {
        key: "D",
        text: "display: inline-block;",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The 'display: grid;' property in CSS3 is used to create a responsive grid layout, allowing for the arrangement of elements in a grid format.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-040",
    class: 11,
    subject: "Computer Science",
    topic: "Digital Logic & Web Technologies - Web Technology",
    subtopic: "HTML5 Forms",
    topicId: "CS12-CH07",
    subtopicId: "CS12-CH07-T10",
    question:
      "Which HTML5 attribute is used to ensure that a form input field must be filled out before submitting the form?",
    options: [
      {
        key: "A",
        text: "required",
      },
      {
        key: "B",
        text: "placeholder",
      },
      {
        key: "C",
        text: "value",
      },
      {
        key: "D",
        text: "type",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The 'required' attribute in HTML5 is used to ensure that a form input field must be filled out before the form can be submitted, providing a simple form validation mechanism.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS12-031",
    class: 12,
    subject: "Computer Science",
    topic: "Programming in C - Arrays",
    subtopic: "1D Arrays",
    topicId: "CS12-CH02",
    subtopicId: "CS12-CH02-T05",
    question:
      "Which of the following is the correct way to declare and initialize a 1D array of integers with 5 elements in C?",
    options: [
      {
        key: "A",
        text: "int arr[5] = {1, 2, 3, 4, 5};",
      },
      {
        key: "B",
        text: "int arr = {1, 2, 3, 4, 5};",
      },
      {
        key: "C",
        text: "int arr[5] = (1, 2, 3, 4, 5);",
      },
      {
        key: "D",
        text: "int arr[] = {1, 2, 3, 4, 5};",
      },
    ],
    correct_options: ["A", "D"],
    is_multi_select: true,
    explanation:
      "In C, you can declare and initialize a 1D array using either a fixed size or by specifying the elements without the size. Both options A and D are correct.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-032",
    class: 12,
    subject: "Computer Science",
    topic: "Programming in C - Arrays",
    subtopic: "2D Arrays",
    topicId: "CS12-CH02",
    subtopicId: "CS12-CH02-T05",
    question:
      "What is the output of the following code snippet for matrix multiplication of two 2x2 matrices A and B?\nint A[2][2] = {{1, 2}, {3, 4}};\nint B[2][2] = {{5, 6}, {7, 8}};\nint C[2][2];\nfor (int i = 0; i < 2; i++) {\n    for (int j = 0; j < 2; j++) {\n        C[i][j] = 0;\n        for (int k = 0; k < 2; k++) {\n            C[i][j] += A[i][k] * B[k][j];\n        }\n    }\n}",
    options: [
      {
        key: "A",
        text: "C = {{19, 22}, {43, 50}}",
      },
      {
        key: "B",
        text: "C = {{11, 16}, {25, 36}}",
      },
      {
        key: "C",
        text: "C = {{17, 20}, {41, 48}}",
      },
      {
        key: "D",
        text: "C = {{13, 18}, {31, 42}}",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The matrix multiplication of A and B results in C = {{1*5 + 2*7, 1*6 + 2*8}, {3*5 + 4*7, 3*6 + 4*8}} = {{19, 22}, {43, 50}}.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-033",
    class: 12,
    subject: "Computer Science",
    topic: "Programming in C - Strings",
    subtopic: "String Functions",
    topicId: "CS12-CH09",
    subtopicId: "CS12-CH09-T07",
    question:
      "Which of the following string functions is used to concatenate two strings in C?",
    options: [
      {
        key: "A",
        text: "strlen",
      },
      {
        key: "B",
        text: "strcpy",
      },
      {
        key: "C",
        text: "strcat",
      },
      {
        key: "D",
        text: "strcmp",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "The function `strcat` is used to concatenate two strings in C. The other functions are used for different purposes: `strlen` for finding the length, `strcpy` for copying, and `strcmp` for comparing strings.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-034",
    class: 12,
    subject: "Computer Science",
    topic: "Programming in C - Functions",
    subtopic: "Recursion",
    topicId: "CS12-CH03",
    subtopicId: "CS12-CH03-T02",
    question:
      "What is the output of the following recursive function when called with `factorial(5)`?\nint factorial(int n) {\n    if (n == 0) return 1;\n    return n * factorial(n - 1);\n}",
    options: [
      {
        key: "A",
        text: "120",
      },
      {
        key: "B",
        text: "125",
      },
      {
        key: "C",
        text: "150",
      },
      {
        key: "D",
        text: "100",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The function `factorial` calculates the factorial of a number using recursion. The factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-035",
    class: 12,
    subject: "Computer Science",
    topic: "Programming in C - Storage Classes",
    subtopic: "Auto and Register",
    topicId: "CS12-CH01",
    subtopicId: "CS12-CH01-T03",
    question:
      "Which storage class is used to store variables in the CPU registers for faster access in C?",
    options: [
      {
        key: "A",
        text: "auto",
      },
      {
        key: "B",
        text: "register",
      },
      {
        key: "C",
        text: "static",
      },
      {
        key: "D",
        text: "extern",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The `register` storage class is used to store variables in the CPU registers for faster access. The `auto` storage class is the default for local variables, `static` is used for variables that retain their value between function calls, and `extern` is used to reference variables defined in another file.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-036",
    class: 12,
    subject: "Computer Science",
    topic: "Programming in C - Structures & Unions",
    subtopic: "Nested Structures",
    topicId: "CS11-CH12",
    subtopicId: "CS11-CH12-T14",
    question:
      "Which of the following is the correct way to access the `age` member of the `student` structure within a `class` structure in C?\nstruct student {\n    int age;\n};\nstruct class {\n    struct student s;\n};\nstruct class c;",
    options: [
      {
        key: "A",
        text: "c.s.age",
      },
      {
        key: "B",
        text: "c->s->age",
      },
      {
        key: "C",
        text: "c.student.age",
      },
      {
        key: "D",
        text: "c->student.age",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "To access the `age` member of the `student` structure within the `class` structure, you use the dot operator: `c.s.age`. The arrow operator (`->`) is used with pointers.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-037",
    class: 12,
    subject: "Computer Science",
    topic: "Programming in C - Pointers",
    subtopic: "Pointer Arithmetic",
    topicId: "CS12-CH03",
    subtopicId: "CS12-CH03-T04",
    question:
      "If `int arr[5]` is an array and `int *p = arr;`, what is the value of `p + 2` if `arr` starts at memory address 1000?",
    options: [
      {
        key: "A",
        text: "1002",
      },
      {
        key: "B",
        text: "1004",
      },
      {
        key: "C",
        text: "1008",
      },
      {
        key: "D",
        text: "1010",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Pointer arithmetic in C adds the size of the data type to the pointer. Since `int` is 4 bytes, `p + 2` will be `1000 + 2 * 4 = 1008`.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-038",
    class: 12,
    subject: "Computer Science",
    topic: "Programming in C - File Handling",
    subtopic: "File Modes",
    topicId: "CS11-CH13",
    subtopicId: "CS11-CH13-T06",
    question:
      "Which file mode is used to open a file for reading and writing, and if the file does not exist, it is created?",
    options: [
      {
        key: "A",
        text: "r",
      },
      {
        key: "B",
        text: "w",
      },
      {
        key: "C",
        text: "a",
      },
      {
        key: "D",
        text: "w+",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "The `w+` mode is used to open a file for reading and writing. If the file does not exist, it is created. The `r` mode is for reading only, `w` mode is for writing only (and truncates the file if it exists), and `a` mode is for appending.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-039",
    class: 12,
    subject: "Computer Science",
    topic: "Programming in C - Functions",
    subtopic: "Call by Value vs Call by Reference",
    topicId: "CS11-CH11",
    subtopicId: "CS11-CH11-T10",
    question:
      'What is the output of the following program?\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\nint main() {\n    int x = 5, y = 10;\n    swap(&x, &y);\n    printf("%d %d", x, y);\n    return 0;\n}',
    options: [
      {
        key: "A",
        text: "5 10",
      },
      {
        key: "B",
        text: "10 5",
      },
      {
        key: "C",
        text: "10 10",
      },
      {
        key: "D",
        text: "5 5",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The `swap` function uses call by reference to swap the values of `x` and `y`. After the function call, `x` becomes 10 and `y` becomes 5.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-040",
    class: 12,
    subject: "Computer Science",
    topic: "Programming in C - Structures & Unions",
    subtopic: "Union vs Structure",
    topicId: "CS12-CH07",
    subtopicId: "CS12-CH07-T02",
    question:
      "What is the main difference between a union and a structure in C?",
    options: [
      {
        key: "A",
        text: "A union can have functions, but a structure cannot.",
      },
      {
        key: "B",
        text: "A union can have only one member at a time, while a structure can have multiple members.",
      },
      {
        key: "C",
        text: "A union is a collection of data types, while a structure is a single data type.",
      },
      {
        key: "D",
        text: "A union is used for file handling, while a structure is used for array handling.",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The main difference between a union and a structure in C is that a union can have only one member at a time, while a structure can have multiple members. The memory allocated for a union is the size of its largest member, whereas a structure allocates memory for all its members.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS11-041",
    class: 11,
    subject: "Computer Science",
    topic: "Database Management Systems (DBMS) - Data Storage Concepts",
    subtopic: "Flat file system limitations",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T07",
    question:
      "Which of the following is a major limitation of using flat file systems for data storage?",
    options: [
      {
        key: "A",
        text: "Data redundancy and inconsistency",
      },
      {
        key: "B",
        text: "Faster data retrieval",
      },
      {
        key: "C",
        text: "Simplified data sharing",
      },
      {
        key: "D",
        text: "Enhanced data security",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Flat file systems often lead to data redundancy and inconsistency because the same data may be stored multiple times in different files, leading to potential discrepancies.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-042",
    class: 11,
    subject: "Computer Science",
    topic: "Database Management Systems (DBMS) - Data Storage Concepts",
    subtopic: "Database benefits",
    topicId: "CS11-CH14",
    subtopicId: "CS11-CH14-T03",
    question:
      "Which of the following is a significant benefit of using a database management system over a flat file system?",
    options: [
      {
        key: "A",
        text: "Data inconsistency",
      },
      {
        key: "B",
        text: "Data redundancy",
      },
      {
        key: "C",
        text: "Centralized data management",
      },
      {
        key: "D",
        text: "Complex data retrieval",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "A database management system provides centralized data management, which helps in maintaining data integrity, reducing redundancy, and ensuring consistent data across the system.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-043",
    class: 11,
    subject: "Computer Science",
    topic: "Database Management Systems (DBMS) - Data Storage Concepts",
    subtopic: "Data redundancy",
    topicId: "CS11-CH14",
    subtopicId: "CS11-CH14-T17",
    question:
      "What is the primary cause of data redundancy in flat file systems?",
    options: [
      {
        key: "A",
        text: "Data encryption",
      },
      {
        key: "B",
        text: "Data fragmentation",
      },
      {
        key: "C",
        text: "Manual data entry and storage",
      },
      {
        key: "D",
        text: "Data indexing",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Data redundancy in flat file systems is primarily caused by manual data entry and storage, where the same data is entered and stored multiple times in different files.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-044",
    class: 11,
    subject: "Computer Science",
    topic: "Database Management Systems (DBMS) - Data Storage Concepts",
    subtopic: "Data redundancy",
    topicId: "CS11-CH14",
    subtopicId: "CS11-CH14-T17",
    question: "How does a database management system reduce data redundancy?",
    options: [
      {
        key: "A",
        text: "By allowing multiple users to access the same data simultaneously",
      },
      {
        key: "B",
        text: "By storing data in a single, centralized location",
      },
      {
        key: "C",
        text: "By using complex algorithms for data encryption",
      },
      {
        key: "D",
        text: "By increasing the number of data files",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "A database management system reduces data redundancy by storing data in a single, centralized location, ensuring that data is entered only once and can be accessed by multiple users or applications.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-045",
    class: 11,
    subject: "Computer Science",
    topic: "Database Management Systems (DBMS) - Data Storage Concepts",
    subtopic: "Data inconsistency",
    topicId: "CS11-CH14",
    subtopicId: "CS11-CH14-T01",
    question:
      "Which of the following is a common cause of data inconsistency in flat file systems?",
    options: [
      {
        key: "A",
        text: "Centralized data management",
      },
      {
        key: "B",
        text: "Manual data updates in multiple files",
      },
      {
        key: "C",
        text: "Automated data backup",
      },
      {
        key: "D",
        text: "Data normalization",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Data inconsistency in flat file systems is often caused by manual data updates in multiple files, where updates are not synchronized, leading to discrepancies in data values.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-046",
    class: 11,
    subject: "Computer Science",
    topic: "Database Management Systems (DBMS) - Data Storage Concepts",
    subtopic: "Data redundancy",
    topicId: "CS11-CH14",
    subtopicId: "CS11-CH14-T17",
    question:
      "Which of the following best describes the impact of data redundancy on a database system?",
    options: [
      {
        key: "A",
        text: "Increased storage space and potential for errors",
      },
      {
        key: "B",
        text: "Reduced storage space and improved performance",
      },
      {
        key: "C",
        text: "Enhanced data security and reliability",
      },
      {
        key: "D",
        text: "Simplified data management and maintenance",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Data redundancy increases storage space requirements and can lead to potential errors and inconsistencies, as the same data is stored multiple times in different locations.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-047",
    class: 11,
    subject: "Computer Science",
    topic: "Database Management Systems (DBMS) - Data Storage Concepts",
    subtopic: "Data inconsistency",
    topicId: "CS11-CH14",
    subtopicId: "CS11-CH14-T01",
    question:
      "In a database management system, which technique is commonly used to prevent data inconsistency?",
    options: [
      {
        key: "A",
        text: "Data encryption",
      },
      {
        key: "B",
        text: "Data normalization",
      },
      {
        key: "C",
        text: "Data fragmentation",
      },
      {
        key: "D",
        text: "Data replication",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Data normalization is a technique used in database management systems to reduce data redundancy and prevent data inconsistency by organizing data into tables and ensuring that each table contains only related data.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-048",
    class: 11,
    subject: "Computer Science",
    topic: "Database Management Systems (DBMS) - Data Storage Concepts",
    subtopic: "Data redundancy",
    topicId: "CS11-CH14",
    subtopicId: "CS11-CH14-T17",
    question:
      "Which of the following is a disadvantage of data redundancy in a database system?",
    options: [
      {
        key: "A",
        text: "Increased data integrity",
      },
      {
        key: "B",
        text: "Faster data retrieval",
      },
      {
        key: "C",
        text: "Higher storage costs",
      },
      {
        key: "D",
        text: "Simplified data management",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Data redundancy in a database system can lead to higher storage costs, as the same data is stored multiple times, increasing the overall storage requirements.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-049",
    class: 11,
    subject: "Computer Science",
    topic: "Database Management Systems (DBMS) - Data Storage Concepts",
    subtopic: "Data inconsistency",
    topicId: "CS11-CH14",
    subtopicId: "CS11-CH14-T01",
    question:
      "Which of the following best describes the impact of data inconsistency on a database system?",
    options: [
      {
        key: "A",
        text: "Improved data reliability",
      },
      {
        key: "B",
        text: "Increased data security",
      },
      {
        key: "C",
        text: "Decreased user trust and system reliability",
      },
      {
        key: "D",
        text: "Enhanced data sharing capabilities",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Data inconsistency can significantly decrease user trust and system reliability, as users may not be able to rely on the accuracy and consistency of the data they access.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-050",
    class: 11,
    subject: "Computer Science",
    topic: "Networking & Cybersecurity - Data Communication Basics",
    subtopic: "Communication Components",
    topicId: "CS11-CH05",
    subtopicId: "CS11-CH05-T17",
    question:
      "Which of the following is NOT a component of data communication?",
    options: [
      {
        key: "A",
        text: "Sender",
      },
      {
        key: "B",
        text: "Receiver",
      },
      {
        key: "C",
        text: "Medium",
      },
      {
        key: "D",
        text: "Processor",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "In data communication, the components include the sender, receiver, and medium. The processor is not a direct component of data communication but is part of the devices involved.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-051",
    class: 11,
    subject: "Computer Science",
    topic: "Networking & Cybersecurity - Data Communication Basics",
    subtopic: "Transmission Modes",
    topicId: "CS11-CH13",
    subtopicId: "CS11-CH13-T06",
    question:
      "Which transmission mode allows data to flow in both directions but only one direction at a time?",
    options: [
      {
        key: "A",
        text: "Simplex",
      },
      {
        key: "B",
        text: "Half-duplex",
      },
      {
        key: "C",
        text: "Full-duplex",
      },
      {
        key: "D",
        text: "None of the above",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Half-duplex transmission allows data to flow in both directions, but only one direction at a time, similar to a walkie-talkie system.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-052",
    class: 11,
    subject: "Computer Science",
    topic: "Networking & Cybersecurity - Data Communication Basics",
    subtopic: "Transmission Media",
    topicId: "CS11-CH16",
    subtopicId: "CS11-CH16-T18",
    question:
      "Which of the following transmission media is known for having the highest data transmission rate?",
    options: [
      {
        key: "A",
        text: "Twisted Pair Cable",
      },
      {
        key: "B",
        text: "Coaxial Cable",
      },
      {
        key: "C",
        text: "Fiber Optic Cable",
      },
      {
        key: "D",
        text: "Microwave",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Fiber optic cables have the highest data transmission rates due to their ability to transmit data over long distances with minimal signal loss and interference.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-053",
    class: 11,
    subject: "Computer Science",
    topic: "Networking & Cybersecurity - Data Communication Basics",
    subtopic: "Transmission Media",
    topicId: "CS11-CH16",
    subtopicId: "CS11-CH16-T18",
    question:
      "Which transmission medium is most susceptible to electromagnetic interference (EMI)?",
    options: [
      {
        key: "A",
        text: "Twisted Pair Cable",
      },
      {
        key: "B",
        text: "Coaxial Cable",
      },
      {
        key: "C",
        text: "Fiber Optic Cable",
      },
      {
        key: "D",
        text: "Satellite",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Twisted pair cables are more susceptible to EMI compared to other media because they do not have the shielding or the inherent properties to resist interference like coaxial cables or fiber optic cables.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-054",
    class: 11,
    subject: "Computer Science",
    topic: "Networking & Cybersecurity - Data Communication Basics",
    subtopic: "Transmission Modes",
    topicId: "CS11-CH13",
    subtopicId: "CS11-CH13-T06",
    question:
      "In which transmission mode can data be sent and received simultaneously?",
    options: [
      {
        key: "A",
        text: "Simplex",
      },
      {
        key: "B",
        text: "Half-duplex",
      },
      {
        key: "C",
        text: "Full-duplex",
      },
      {
        key: "D",
        text: "None of the above",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Full-duplex transmission allows data to be sent and received simultaneously, similar to a telephone conversation.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-055",
    class: 11,
    subject: "Computer Science",
    topic: "Networking & Cybersecurity - Data Communication Basics",
    subtopic: "Transmission Media",
    topicId: "CS11-CH16",
    subtopicId: "CS11-CH16-T18",
    question:
      "Which of the following is an example of unguided transmission media?",
    options: [
      {
        key: "A",
        text: "Twisted Pair Cable",
      },
      {
        key: "B",
        text: "Coaxial Cable",
      },
      {
        key: "C",
        text: "Fiber Optic Cable",
      },
      {
        key: "D",
        text: "Microwave",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "Microwave is an example of unguided transmission media, as it transmits data through the air without the use of physical cables.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-056",
    class: 11,
    subject: "Computer Science",
    topic: "Networking & Cybersecurity - Data Communication Basics",
    subtopic: "Protocols",
    topicId: "CS12-CH14",
    subtopicId: "CS12-CH14-T05",
    question:
      "Which protocol is commonly used for file transfer over the internet?",
    options: [
      {
        key: "A",
        text: "FTP",
      },
      {
        key: "B",
        text: "HTTP",
      },
      {
        key: "C",
        text: "SMTP",
      },
      {
        key: "D",
        text: "TCP",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "FTP (File Transfer Protocol) is commonly used for transferring files over the internet. HTTP is used for web browsing, SMTP for email, and TCP is a transport layer protocol.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-057",
    class: 11,
    subject: "Computer Science",
    topic: "Networking & Cybersecurity - Data Communication Basics",
    subtopic: "Transmission Media",
    topicId: "CS11-CH16",
    subtopicId: "CS11-CH16-T18",
    question:
      "Which transmission medium is best suited for long-distance communication with minimal signal loss?",
    options: [
      {
        key: "A",
        text: "Twisted Pair Cable",
      },
      {
        key: "B",
        text: "Coaxial Cable",
      },
      {
        key: "C",
        text: "Fiber Optic Cable",
      },
      {
        key: "D",
        text: "Microwave",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Fiber optic cables are best suited for long-distance communication with minimal signal loss due to their low attenuation and high data transfer rates.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-058",
    class: 11,
    subject: "Computer Science",
    topic: "Networking & Cybersecurity - Data Communication Basics",
    subtopic: "Transmission Modes",
    topicId: "CS11-CH13",
    subtopicId: "CS11-CH13-T06",
    question: "Which transmission mode is used in a walkie-talkie system?",
    options: [
      {
        key: "A",
        text: "Simplex",
      },
      {
        key: "B",
        text: "Half-duplex",
      },
      {
        key: "C",
        text: "Full-duplex",
      },
      {
        key: "D",
        text: "None of the above",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "A walkie-talkie system uses half-duplex transmission, where communication can occur in both directions but not simultaneously.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-059",
    class: 11,
    subject: "Computer Science",
    topic: "Networking & Cybersecurity - Data Communication Basics",
    subtopic: "Transmission Media",
    topicId: "CS11-CH16",
    subtopicId: "CS11-CH16-T18",
    question:
      "Which transmission medium is most suitable for short-range, high-speed data transmission in a local area network (LAN)?",
    options: [
      {
        key: "A",
        text: "Twisted Pair Cable",
      },
      {
        key: "B",
        text: "Coaxial Cable",
      },
      {
        key: "C",
        text: "Fiber Optic Cable",
      },
      {
        key: "D",
        text: "Microwave",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Twisted pair cables are commonly used in LANs for short-range, high-speed data transmission due to their cost-effectiveness and ease of installation.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS12-041",
    class: 12,
    subject: "Computer Science",
    topic:
      "Computer Architecture & Operating Systems - Operating System Functions",
    subtopic: "Process Management",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T16",
    question:
      "Which of the following is a primary function of the operating system in process management?",
    options: [
      {
        key: "A",
        text: "Allocating memory to processes",
      },
      {
        key: "B",
        text: "Scheduling processes for CPU execution",
      },
      {
        key: "C",
        text: "Managing file storage and retrieval",
      },
      {
        key: "D",
        text: "Providing user interface for application interaction",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The primary function of the operating system in process management is to schedule processes for CPU execution. This ensures that multiple processes can run efficiently by managing the allocation of CPU time, which is a critical resource in a computing system.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "cs-11-01",
    class: 11,
    subject: "Computer Science",
    topic: "Number Systems and Boolean Logic",
    subtopic: "Conversion between number systems",
    topicId: "CS11-CH03",
    subtopicId: "CS11-CH03-T05",
    question:
      "What is the binary representation of the decimal number $(45)_{10}$?",
    options: [
      {
        key: "A",
        text: "$(101101)_2$",
      },
      {
        key: "B",
        text: "$(101011)_2$",
      },
      {
        key: "C",
        text: "$(110101)_2$",
      },
      {
        key: "D",
        text: "$(100101)_2$",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Converting 45 to binary: $45 = 32 + 8 + 4 + 1 = 2^5 + 2^3 + 2^2 + 2^0 = (101101)_2$.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Model; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "cs-11-02",
    class: 11,
    subject: "Computer Science",
    topic: "Number Systems and Boolean Logic",
    subtopic: "XNOR gate",
    topicId: "CS11-CH03",
    subtopicId: "CS11-CH03-T23",
    question:
      "Which of the following digital logic gates produces an active HIGH ($1$) output ONLY when both inputs are identical?",
    options: [
      {
        key: "A",
        text: "XOR gate",
      },
      {
        key: "B",
        text: "XNOR gate",
      },
      {
        key: "C",
        text: "NAND gate",
      },
      {
        key: "D",
        text: "NOR gate",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "An XNOR (Exclusive NOR) gate is an equivalence gate; its output is 1 when all inputs are equal (i.e. $0 \\odot 0 = 1$ and $1 \\odot 1 = 1$). An XOR gate produces 0 when inputs are identical.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Model; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "cs-11-03",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Architecture and Components",
    subtopic: "Registers",
    topicId: "CS11-CH02",
    subtopicId: "CS11-CH02-T06",
    question:
      "In the classic von Neumann computer architecture, which CPU register permanently holds the memory address of the next machine instruction to be fetched and executed?",
    options: [
      {
        key: "A",
        text: "Accumulator (AC)",
      },
      {
        key: "B",
        text: "Memory Data Register (MDR)",
      },
      {
        key: "C",
        text: "Program Counter (PC)",
      },
      {
        key: "D",
        text: "Instruction Register (IR)",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "The Program Counter (PC) stores the address of the next instruction to be fetched from memory. Once fetched, the PC automatically increments.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Model; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "cs-11-04",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Software and Operating Systems",
    subtopic: "System software",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T01",
    question:
      "Which type of software serves as an intermediary hardware abstraction layer between computer hardware and end-user application programs?",
    options: [
      {
        key: "A",
        text: "Database Management System",
      },
      {
        key: "B",
        text: "Operating System",
      },
      {
        key: "C",
        text: "Compiler",
      },
      {
        key: "D",
        text: "Device Firmware",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "An Operating System (OS) is core system software that manages hardware resources, processor scheduling, memory, and file systems, providing a platform for application software.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Model; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "cs-11-05",
    class: 11,
    subject: "Computer Science",
    topic: "Operators and Expressions in C",
    subtopic: "Type conversion",
    topicId: "CS11-CH08",
    subtopicId: "CS11-CH08-T10",
    question:
      'What is the output of the following C code snippet?\n```c\nint a = 5, b = 2;\nfloat c = a / b;\nprintf("%.1f", c);\n```',
    options: [
      {
        key: "A",
        text: "2.5",
      },
      {
        key: "B",
        text: "2.0",
      },
      {
        key: "C",
        text: "3.0",
      },
      {
        key: "D",
        text: "Compilation Error",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "In C, dividing two integers `5 / 2` performs integer truncation yielding integer `2`. That integer is subsequently implicitly cast to float `2.0` when assigned to `c`.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "Entrance Standard; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "cs-11-06",
    class: 11,
    subject: "Computer Science",
    topic: "Cybersecurity and Digital Society",
    subtopic: "Cybercrime awareness",
    topicId: "CS11-CH05",
    subtopicId: "CS11-CH05-T18",
    question:
      "Which landmark legislative act governs cyber crime, electronic records, and digital signatures in Nepal?",
    options: [
      {
        key: "A",
        text: "Right to Information Act, 2064",
      },
      {
        key: "B",
        text: "Electronic Transaction Act (ETA), 2063",
      },
      {
        key: "C",
        text: "Telecommunications Act, 2053",
      },
      {
        key: "D",
        text: "Copyright Act, 2059",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The Electronic Transaction Act (ETA), 2063 B.S. (2006 A.D.) is the principal cyber law statute in Nepal regulating digital transactions, cyber offenses, and electronic evidence.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Model; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "cs-12-01",
    class: 12,
    subject: "Computer Science",
    topic: "Database Normalization",
    subtopic: "Third normal form",
    topicId: "CS12-CH05",
    subtopicId: "CS12-CH05-T09",
    question:
      "In relational database design, a relation schema is said to be in Third Normal Form (3NF) if it is in 2NF and has no:",
    options: [
      {
        key: "A",
        text: "Partial functional dependency",
      },
      {
        key: "B",
        text: "Transitive functional dependency on any non-prime attribute",
      },
      {
        key: "C",
        text: "Multivalued attributes",
      },
      {
        key: "D",
        text: "Foreign key constraints",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "2NF eliminates partial dependencies on composite keys. 3NF additionally eliminates transitive dependencies where a non-prime attribute depends on another non-prime attribute ($X \\to Y \\to Z$).",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Model; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "cs-12-02",
    class: 12,
    subject: "Computer Science",
    topic: "Network Models and Protocols",
    subtopic: "Layers of the OSI model",
    topicId: "CS12-CH14",
    subtopicId: "CS12-CH14-T03",
    question:
      "In the 7-layer ISO/OSI Reference Model, which layer is responsible for end-to-end process-to-process delivery, segmentation, flow control, and error recovery using TCP and UDP?",
    options: [
      {
        key: "A",
        text: "Network Layer",
      },
      {
        key: "B",
        text: "Data Link Layer",
      },
      {
        key: "C",
        text: "Transport Layer",
      },
      {
        key: "D",
        text: "Session Layer",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "The Transport Layer (Layer 4) provides transparent process-to-process data transfer, port addressing, flow control, and reliability protocols (TCP/UDP).",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Model; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "cs-12-03",
    class: 12,
    subject: "Computer Science",
    topic: "File Handling in C",
    subtopic: "File opening modes",
    topicId: "CS11-CH13",
    subtopicId: "CS11-CH13-T06",
    question:
      'What is the correct syntax in C to open a binary file named "records.dat" for appending new binary data at the end without overwriting?',
    options: [
      {
        key: "A",
        text: 'fopen("records.dat", "w");',
      },
      {
        key: "B",
        text: 'fopen("records.dat", "ab");',
      },
      {
        key: "C",
        text: 'fopen("records.dat", "rb+");',
      },
      {
        key: "D",
        text: 'fopen("records.dat", "append");',
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      'In C file handling, mode "ab" opens a binary file in append mode, positioning the file pointer at the end of the file. "a" is for text, and "ab" is for binary.',
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "Entrance Standard; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "cs-12-04",
    class: 12,
    subject: "Computer Science",
    topic: "Object-Oriented Programming",
    subtopic: "Polymorphism",
    topicId: "CS12-CH01",
    subtopicId: "CS12-CH01-T08",
    question:
      "Which fundamental principle of Object-Oriented Programming allows a single function name or operator to exhibit different behaviors based on the object invocation context?",
    options: [
      {
        key: "A",
        text: "Encapsulation",
      },
      {
        key: "B",
        text: "Inheritance",
      },
      {
        key: "C",
        text: "Polymorphism",
      },
      {
        key: "D",
        text: "Data Hiding",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      'Polymorphism (meaning "many forms") enables function overloading, operator overloading, and dynamic method overriding where the exact behavior is resolved at compile or runtime.',
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Model; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "cs-12-05",
    class: 12,
    subject: "Computer Science",
    topic: "JavaScript Fundamentals",
    subtopic: "Events",
    topicId: "CS12-CH09",
    subtopicId: "CS12-CH09-T10",
    question:
      "In client-side JavaScript, which built-in DOM method is most efficiently used to register an event handler on an HTML button without overwriting existing event handlers?",
    options: [
      {
        key: "A",
        text: 'button.attachEvent("onclick", handler)',
      },
      {
        key: "B",
        text: 'button.addEventListener("click", handler)',
      },
      {
        key: "C",
        text: "button.onclick = handler",
      },
      {
        key: "D",
        text: 'button.setEvent("click", handler)',
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "`addEventListener` allows multiple listeners on the same event type on a DOM node without overwriting previous handlers, unlike the legacy `onclick` property.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Model; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "cs-12-06",
    class: 12,
    subject: "Computer Science",
    topic: "Software Development Models",
    subtopic: "Waterfall model",
    topicId: "CS12-CH11",
    subtopicId: "CS12-CH11-T01",
    question:
      "In the Software Development Life Cycle (SDLC), which sequential process model requires each development phase (Requirement -> Design -> Implementation -> Verification) to be 100% completed before the next phase begins?",
    options: [
      {
        key: "A",
        text: "Spiral Model",
      },
      {
        key: "B",
        text: "Waterfall Model",
      },
      {
        key: "C",
        text: "Agile Scrum",
      },
      {
        key: "D",
        text: "Rapid Application Development (RAD)",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The classic Waterfall Model is a linear sequential model where phases flow downward strictly like a waterfall without overlapping or easy backward iteration.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Model; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "CMP11-037",
    class: 11,
    subject: "Computer Science",
    topic: "Introduction to Programming",
    subtopic: "Machine language",
    topicId: "CS11-CH06",
    subtopicId: "CS11-CH06-T02",
    question: "Which of the following is a high-level programming language?",
    options: [
      {
        key: "A",
        text: "Machine language",
      },
      {
        key: "B",
        text: "Assembly language",
      },
      {
        key: "C",
        text: "C",
      },
      {
        key: "D",
        text: "Binary code",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "C is a high-level language; the others are low-level.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-038",
    class: 11,
    subject: "Computer Science",
    topic: "Introduction to Programming",
    subtopic: "Language translators",
    topicId: "CS11-CH06",
    subtopicId: "CS11-CH06-T07",
    question:
      "Which language translator converts and executes a program line by line?",
    options: [
      {
        key: "A",
        text: "Compiler",
      },
      {
        key: "B",
        text: "Assembler",
      },
      {
        key: "C",
        text: "Interpreter",
      },
      {
        key: "D",
        text: "Linker",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "An interpreter translates and runs one statement at a time.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-039",
    class: 12,
    subject: "Computer Science",
    topic: "JavaScript Fundamentals",
    subtopic: "Operators",
    topicId: "CS12-CH09",
    subtopicId: "CS12-CH09-T04",
    question: 'What does printf("%d", x > 5 && x < 20); print if int x = 10;?',
    options: [
      {
        key: "A",
        text: "0",
      },
      {
        key: "B",
        text: "1",
      },
      {
        key: "C",
        text: "10",
      },
      {
        key: "D",
        text: "Error",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Both conditions are true, so the logical AND evaluates to 1.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-040",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Architecture and Components",
    subtopic: "System bus",
    topicId: "CS11-CH02",
    subtopicId: "CS11-CH02-T14",
    question: "What is the decimal value of the hexadecimal number 1A?",
    options: [
      {
        key: "A",
        text: "16",
      },
      {
        key: "B",
        text: "26",
      },
      {
        key: "C",
        text: "30",
      },
      {
        key: "D",
        text: "36",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "1 × 16 + 10 = 26.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-041",
    class: 12,
    subject: "Computer Science",
    topic: "JavaScript Fundamentals",
    subtopic: "Loops",
    topicId: "CS12-CH09",
    subtopicId: "CS12-CH09-T06",
    question:
      "What is the value of sum after: sum = 0; for(i = 1; i <= 5; i++) sum += i; ?",
    options: [
      {
        key: "A",
        text: "10",
      },
      {
        key: "B",
        text: "15",
      },
      {
        key: "C",
        text: "16",
      },
      {
        key: "D",
        text: "5",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "1 + 2 + 3 + 4 + 5 = 15.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-042",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Software and Operating Systems",
    subtopic: "Memory management",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T14",
    question:
      "Which of the following are volatile memories? (Select all that apply)",
    options: [
      {
        key: "A",
        text: "RAM",
      },
      {
        key: "B",
        text: "Cache memory",
      },
      {
        key: "C",
        text: "ROM",
      },
      {
        key: "D",
        text: "Hard disk",
      },
    ],
    correct_options: ["A", "B"],
    is_multi_select: true,
    explanation:
      "RAM and cache lose their contents when power is off; ROM and hard disks retain data.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-035",
    class: 12,
    subject: "Computer Science",
    topic: "Database Design and Modeling",
    subtopic: "Database design concepts",
    topicId: "CS12-CH04",
    subtopicId: "CS12-CH04-T01",
    question: "Which SQL clause is used to sort the result set?",
    options: [
      {
        key: "A",
        text: "GROUP BY",
      },
      {
        key: "B",
        text: "ORDER BY",
      },
      {
        key: "C",
        text: "WHERE",
      },
      {
        key: "D",
        text: "HAVING",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "ORDER BY sorts the output in ascending or descending order.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-036",
    class: 12,
    subject: "Computer Science",
    topic: "Database Design and Modeling",
    subtopic: "Database design concepts",
    topicId: "CS12-CH04",
    subtopicId: "CS12-CH04-T01",
    question: "In SQL, the HAVING clause is used to filter:",
    options: [
      {
        key: "A",
        text: "Rows before grouping",
      },
      {
        key: "B",
        text: "Groups after grouping",
      },
      {
        key: "C",
        text: "Columns",
      },
      {
        key: "D",
        text: "Tables",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "HAVING applies conditions to groups created by GROUP BY.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-037",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Networks",
    subtopic: "Transmission media",
    topicId: "CS11-CH16",
    subtopicId: "CS11-CH16-T18",
    question:
      "Which transmission mode allows data to flow in both directions at the same time?",
    options: [
      {
        key: "A",
        text: "Simplex",
      },
      {
        key: "B",
        text: "Half duplex",
      },
      {
        key: "C",
        text: "Full duplex",
      },
      {
        key: "D",
        text: "Multiplex",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Full duplex permits simultaneous two-way communication, as in a telephone call.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-038",
    class: 12,
    subject: "Computer Science",
    topic: "CSS and Web Page Design",
    subtopic: "Responsive web design",
    topicId: "CS12-CH08",
    subtopicId: "CS12-CH08-T15",
    question: "JavaScript is mainly used for:",
    options: [
      {
        key: "A",
        text: "Styling web pages",
      },
      {
        key: "B",
        text: "Structuring web pages",
      },
      {
        key: "C",
        text: "Client-side scripting and interactivity",
      },
      {
        key: "D",
        text: "Storing data in a database",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "JavaScript runs in the browser to make pages interactive.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-039",
    class: 12,
    subject: "Computer Science",
    topic: "Object-Oriented Programming",
    subtopic: "Inheritance",
    topicId: "CS12-CH01",
    subtopicId: "CS12-CH01-T07",
    question:
      "Which OOP feature allows a class to acquire the properties of another class?",
    options: [
      {
        key: "A",
        text: "Polymorphism",
      },
      {
        key: "B",
        text: "Inheritance",
      },
      {
        key: "C",
        text: "Abstraction",
      },
      {
        key: "D",
        text: "Encapsulation",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Inheritance lets a derived class reuse members of a base class.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-040",
    class: 11,
    subject: "Computer Science",
    topic: "Cybersecurity and Digital Society",
    subtopic: "Cyber ethics",
    topicId: "CS11-CH05",
    subtopicId: "CS11-CH05-T16",
    question:
      "Copying someone else's work and presenting it as your own is called:",
    options: [
      {
        key: "A",
        text: "Piracy",
      },
      {
        key: "B",
        text: "Plagiarism",
      },
      {
        key: "C",
        text: "Phishing",
      },
      {
        key: "D",
        text: "Spoofing",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Presenting another's work as one's own is plagiarism.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-034",
    class: 12,
    subject: "Computer Science",
    topic: "JavaScript Fundamentals",
    subtopic: "Loops",
    topicId: "CS12-CH09",
    subtopicId: "CS12-CH09-T06",
    question:
      'What is the output of: int i; for(i = 0; i < 3; i++); printf("%d", i); ?',
    options: [
      {
        key: "A",
        text: "0",
      },
      {
        key: "B",
        text: "2",
      },
      {
        key: "C",
        text: "3",
      },
      {
        key: "D",
        text: "Compilation error",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "The semicolon makes the loop body empty; after the loop ends, i = 3.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-035",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Architecture and Components",
    subtopic: "System bus",
    topicId: "CS11-CH02",
    subtopicId: "CS11-CH02-T14",
    question: "What is the 1's complement of the binary number 1010?",
    options: [
      {
        key: "A",
        text: "1011",
      },
      {
        key: "B",
        text: "0101",
      },
      {
        key: "C",
        text: "0110",
      },
      {
        key: "D",
        text: "1111",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Flip every bit: 1010 becomes 0101.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-036",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Software and Operating Systems",
    subtopic: "System software",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T01",
    question:
      "Which of the following are system software? (Select all that apply)",
    options: [
      {
        key: "A",
        text: "Operating system",
      },
      {
        key: "B",
        text: "Compiler",
      },
      {
        key: "C",
        text: "MS Excel",
      },
      {
        key: "D",
        text: "Device driver",
      },
    ],
    correct_options: ["A", "B", "D"],
    is_multi_select: true,
    explanation:
      "OS, compiler and device drivers are system software; MS Excel is application software.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-032",
    class: 12,
    subject: "Computer Science",
    topic: "Database Design and Modeling",
    subtopic: "Database design concepts",
    topicId: "CS12-CH04",
    subtopicId: "CS12-CH04-T01",
    question:
      "Which SQL join returns all rows from the left table and the matching rows from the right table?",
    options: [
      {
        key: "A",
        text: "INNER JOIN",
      },
      {
        key: "B",
        text: "LEFT JOIN",
      },
      {
        key: "C",
        text: "CROSS JOIN",
      },
      {
        key: "D",
        text: "SELF JOIN",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "LEFT JOIN keeps every row from the left table, with NULLs where there is no match.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-033",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Networks",
    subtopic: "Concept of computer networks",
    topicId: "CS11-CH16",
    subtopicId: "CS11-CH16-T01",
    question: "What is the default subnet mask of a Class C network?",
    options: [
      {
        key: "A",
        text: "255.0.0.0",
      },
      {
        key: "B",
        text: "255.255.0.0",
      },
      {
        key: "C",
        text: "255.255.255.0",
      },
      {
        key: "D",
        text: "255.255.255.255",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Class C uses 24 network bits, i.e. 255.255.255.0.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-034",
    class: 12,
    subject: "Computer Science",
    topic: "Network Security and Cyber Ethics",
    subtopic: "Social engineering",
    topicId: "CS12-CH15",
    subtopicId: "CS12-CH15-T13",
    question:
      "Which of the following are social engineering attacks? (Select all that apply)",
    options: [
      {
        key: "A",
        text: "Phishing",
      },
      {
        key: "B",
        text: "Pretexting",
      },
      {
        key: "C",
        text: "DDoS",
      },
      {
        key: "D",
        text: "Baiting",
      },
    ],
    correct_options: ["A", "B", "D"],
    is_multi_select: true,
    explanation:
      "Phishing, pretexting and baiting manipulate people; a DDoS attack overwhelms a service technically.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-025",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Fundamentals",
    subtopic: "Basic computer organization",
    topicId: "CS11-CH01",
    subtopicId: "CS11-CH01-T17",
    question: "Which of the following is an output device?",
    options: [
      {
        key: "A",
        text: "Mouse",
      },
      {
        key: "B",
        text: "Scanner",
      },
      {
        key: "C",
        text: "Monitor",
      },
      {
        key: "D",
        text: "Keyboard",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "A monitor displays output from the computer.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-026",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Fundamentals",
    subtopic: "Generations of computers",
    topicId: "CS11-CH01",
    subtopicId: "CS11-CH01-T06",
    question: "First generation computers used which technology?",
    options: [
      {
        key: "A",
        text: "Transistors",
      },
      {
        key: "B",
        text: "Vacuum tubes",
      },
      {
        key: "C",
        text: "Integrated circuits",
      },
      {
        key: "D",
        text: "Microprocessors",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "First-generation computers (1940s–1950s) were built with vacuum tubes.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-027",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Fundamentals",
    subtopic: "Generations of computers",
    topicId: "CS11-CH01",
    subtopicId: "CS11-CH01-T06",
    question: "Transistors were introduced in which generation of computers?",
    options: [
      {
        key: "A",
        text: "First",
      },
      {
        key: "B",
        text: "Second",
      },
      {
        key: "C",
        text: "Third",
      },
      {
        key: "D",
        text: "Fourth",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Second-generation computers used transistors instead of vacuum tubes.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-028",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Architecture and Components",
    subtopic: "System bus",
    topicId: "CS11-CH02",
    subtopicId: "CS11-CH02-T14",
    question: "What is the binary equivalent of decimal 5?",
    options: [
      {
        key: "A",
        text: "110",
      },
      {
        key: "B",
        text: "100",
      },
      {
        key: "C",
        text: "101",
      },
      {
        key: "D",
        text: "111",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "5 = 4 + 1 = 101₂.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-029",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Architecture and Components",
    subtopic: "Arithmetic Logic Unit",
    topicId: "CS11-CH02",
    subtopicId: "CS11-CH02-T04",
    question: "A NOR gate gives output 1 when:",
    options: [
      {
        key: "A",
        text: "Any input is 1",
      },
      {
        key: "B",
        text: "Both inputs are 0",
      },
      {
        key: "C",
        text: "Both inputs are 1",
      },
      {
        key: "D",
        text: "Inputs are different",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "NOR is the complement of OR, so output is 1 only when all inputs are 0.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-031",
    class: 12,
    subject: "Computer Science",
    topic: "JavaScript Fundamentals",
    subtopic: "Loops",
    topicId: "CS12-CH09",
    subtopicId: "CS12-CH09-T06",
    question:
      "Which of the following are entry-controlled loops in C? (Select all that apply)",
    options: [
      {
        key: "A",
        text: "for",
      },
      {
        key: "B",
        text: "while",
      },
      {
        key: "C",
        text: "do-while",
      },
      {
        key: "D",
        text: "switch",
      },
    ],
    correct_options: ["A", "B"],
    is_multi_select: true,
    explanation:
      "for and while test the condition before executing the body; do-while tests afterwards.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-032",
    class: 11,
    subject: "Computer Science",
    topic: "C Programming Fundamentals",
    subtopic: "Data types",
    topicId: "CS11-CH07",
    subtopicId: "CS11-CH07-T10",
    question: "On most modern systems, how many bytes does an int occupy in C?",
    options: [
      {
        key: "A",
        text: "1",
      },
      {
        key: "B",
        text: "2",
      },
      {
        key: "C",
        text: "4",
      },
      {
        key: "D",
        text: "8",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "An int is typically 4 bytes (32 bits) on modern platforms.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-033",
    class: 12,
    subject: "Computer Science",
    topic: "JavaScript Fundamentals",
    subtopic: "Operators",
    topicId: "CS12-CH09",
    subtopicId: "CS12-CH09-T04",
    question: 'What does printf("%d", 10/3); print in C?',
    options: [
      {
        key: "A",
        text: "3.33",
      },
      {
        key: "B",
        text: "3",
      },
      {
        key: "C",
        text: "4",
      },
      {
        key: "D",
        text: "3.0",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Integer division discards the fractional part, giving 3.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-023",
    class: 12,
    subject: "Computer Science",
    topic: "Database Design and Modeling",
    subtopic: "Primary keys",
    topicId: "CS12-CH04",
    subtopicId: "CS12-CH04-T09",
    question: "Which key is used to link two tables in a relational database?",
    options: [
      {
        key: "A",
        text: "Primary key",
      },
      {
        key: "B",
        text: "Foreign key",
      },
      {
        key: "C",
        text: "Candidate key",
      },
      {
        key: "D",
        text: "Super key",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "A foreign key refers to the primary key of another table.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-024",
    class: 12,
    subject: "Computer Science",
    topic: "Database Design and Modeling",
    subtopic: "Database design concepts",
    topicId: "CS12-CH04",
    subtopicId: "CS12-CH04-T01",
    question: "Which of the following is a DDL command?",
    options: [
      {
        key: "A",
        text: "SELECT",
      },
      {
        key: "B",
        text: "INSERT",
      },
      {
        key: "C",
        text: "CREATE",
      },
      {
        key: "D",
        text: "UPDATE",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "CREATE defines database structure, so it is a DDL command.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-025",
    class: 12,
    subject: "Computer Science",
    topic: "Database Design and Modeling",
    subtopic: "Database design concepts",
    topicId: "CS12-CH04",
    subtopicId: "CS12-CH04-T01",
    question: "A table is in First Normal Form (1NF) if it contains:",
    options: [
      {
        key: "A",
        text: "Repeating groups",
      },
      {
        key: "B",
        text: "Multi-valued attributes",
      },
      {
        key: "C",
        text: "Only atomic values",
      },
      {
        key: "D",
        text: "Partial dependencies",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "1NF requires that every attribute holds atomic (indivisible) values.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-026",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Networks",
    subtopic: "Concept of computer networks",
    topicId: "CS11-CH16",
    subtopicId: "CS11-CH16-T01",
    question: "How many bits are there in an IPv6 address?",
    options: [
      {
        key: "A",
        text: "32",
      },
      {
        key: "B",
        text: "64",
      },
      {
        key: "C",
        text: "128",
      },
      {
        key: "D",
        text: "256",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "IPv6 addresses are 128 bits long.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-027",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Networks",
    subtopic: "Concept of computer networks",
    topicId: "CS11-CH16",
    subtopicId: "CS11-CH16-T01",
    question: "Which default port number is used by HTTPS?",
    options: [
      {
        key: "A",
        text: "80",
      },
      {
        key: "B",
        text: "443",
      },
      {
        key: "C",
        text: "21",
      },
      {
        key: "D",
        text: "25",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "HTTPS uses port 443 by default; HTTP uses 80.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-028",
    class: 12,
    subject: "Computer Science",
    topic: "CSS and Web Page Design",
    subtopic: "Responsive web design",
    topicId: "CS12-CH08",
    subtopicId: "CS12-CH08-T15",
    question: "Which HTML attribute specifies the destination of a hyperlink?",
    options: [
      {
        key: "A",
        text: "src",
      },
      {
        key: "B",
        text: "href",
      },
      {
        key: "C",
        text: "link",
      },
      {
        key: "D",
        text: "url",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "The href attribute of <a> holds the link destination.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-029",
    class: 12,
    subject: "Computer Science",
    topic: "CSS and Web Page Design",
    subtopic: "Introduction to CSS",
    topicId: "CS12-CH08",
    subtopicId: "CS12-CH08-T01",
    question: "Which CSS property changes the colour of text?",
    options: [
      {
        key: "A",
        text: "font-color",
      },
      {
        key: "B",
        text: "text-color",
      },
      {
        key: "C",
        text: "color",
      },
      {
        key: "D",
        text: "fgcolor",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "The CSS property color sets the text colour.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-030",
    class: 12,
    subject: "Computer Science",
    topic: "Network Security and Cyber Ethics",
    subtopic: "Network security fundamentals",
    topicId: "CS12-CH15",
    subtopicId: "CS12-CH15-T01",
    question:
      "Which of the following helps protect a network from unauthorized access?",
    options: [
      {
        key: "A",
        text: "Router",
      },
      {
        key: "B",
        text: "Firewall",
      },
      {
        key: "C",
        text: "Hub",
      },
      {
        key: "D",
        text: "Modem",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "A firewall filters traffic to block unauthorized access.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-031",
    class: 12,
    subject: "Computer Science",
    topic: "Network Security and Cyber Ethics",
    subtopic: "Cyber law awareness",
    topicId: "CS12-CH15",
    subtopicId: "CS12-CH15-T17",
    question: "Gaining unauthorized access to a computer system is called:",
    options: [
      {
        key: "A",
        text: "Cloud computing",
      },
      {
        key: "B",
        text: "Hacking",
      },
      {
        key: "C",
        text: "Data mining",
      },
      {
        key: "D",
        text: "Backup",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Unauthorized access is hacking, a cyber crime.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-020",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Architecture and Components",
    subtopic: "System bus",
    topicId: "CS11-CH02",
    subtopicId: "CS11-CH02-T14",
    question: "What is the decimal value of the binary number 10101?",
    options: [
      {
        key: "A",
        text: "19",
      },
      {
        key: "B",
        text: "21",
      },
      {
        key: "C",
        text: "23",
      },
      {
        key: "D",
        text: "25",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "16 + 4 + 1 = 21.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-021",
    class: 11,
    subject: "Computer Science",
    topic: "Number Systems and Boolean Logic",
    subtopic: "Boolean algebra",
    topicId: "CS11-CH03",
    subtopicId: "CS11-CH03-T15",
    question: "What is the output of an XOR gate when both inputs are 1?",
    options: [
      {
        key: "A",
        text: "0",
      },
      {
        key: "B",
        text: "1",
      },
      {
        key: "C",
        text: "2",
      },
      {
        key: "D",
        text: "Undefined",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation: "XOR gives 1 only when the inputs differ.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-022",
    class: 12,
    subject: "Computer Science",
    topic: "JavaScript Fundamentals",
    subtopic: "Operators",
    topicId: "CS12-CH09",
    subtopicId: "CS12-CH09-T04",
    question: 'What does printf("%d", a++ + 2); print if int a = 5;?',
    options: [
      {
        key: "A",
        text: "6",
      },
      {
        key: "B",
        text: "7",
      },
      {
        key: "C",
        text: "8",
      },
      {
        key: "D",
        text: "5",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Post-increment uses the old value 5 in the expression: 5 + 2 = 7.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-023",
    class: 12,
    subject: "Computer Science",
    topic: "JavaScript Fundamentals",
    subtopic: "Arrays",
    topicId: "CS12-CH09",
    subtopicId: "CS12-CH09-T08",
    question: "In C, the first element of an array has the index:",
    options: [
      {
        key: "A",
        text: "1",
      },
      {
        key: "B",
        text: "0",
      },
      {
        key: "C",
        text: "−1",
      },
      {
        key: "D",
        text: "Depends on the compiler",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Array indexing in C starts at 0.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-024",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Software and Operating Systems",
    subtopic: "Memory management",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T14",
    question: "Which of the following is the fastest storage?",
    options: [
      {
        key: "A",
        text: "Hard disk",
      },
      {
        key: "B",
        text: "RAM",
      },
      {
        key: "C",
        text: "Cache memory",
      },
      {
        key: "D",
        text: "Registers",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "CPU registers are the fastest and closest storage to the processor.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-018",
    class: 12,
    subject: "Computer Science",
    topic: "Database Design and Modeling",
    subtopic: "Database design concepts",
    topicId: "CS12-CH04",
    subtopicId: "CS12-CH04-T01",
    question: "Which SQL command adds a new record to a table?",
    options: [
      {
        key: "A",
        text: "SELECT",
      },
      {
        key: "B",
        text: "INSERT INTO",
      },
      {
        key: "C",
        text: "ALTER",
      },
      {
        key: "D",
        text: "DROP",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "INSERT INTO adds new rows to a table.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-019",
    class: 12,
    subject: "Computer Science",
    topic: "Database Design and Modeling",
    subtopic: "Database design concepts",
    topicId: "CS12-CH04",
    subtopicId: "CS12-CH04-T01",
    question:
      "Which SQL command is used to modify the structure of an existing table?",
    options: [
      {
        key: "A",
        text: "UPDATE",
      },
      {
        key: "B",
        text: "ALTER",
      },
      {
        key: "C",
        text: "INSERT",
      },
      {
        key: "D",
        text: "SELECT",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "ALTER TABLE adds, deletes or modifies columns.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-020",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Networks",
    subtopic: "Concept of computer networks",
    topicId: "CS11-CH16",
    subtopicId: "CS11-CH16-T01",
    question: "How many layers are there in the OSI reference model?",
    options: [
      {
        key: "A",
        text: "4",
      },
      {
        key: "B",
        text: "5",
      },
      {
        key: "C",
        text: "7",
      },
      {
        key: "D",
        text: "8",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "The OSI model has seven layers.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-021",
    class: 11,
    subject: "Computer Science",
    topic: "Internet and Web Technology",
    subtopic: "Internet services",
    topicId: "CS11-CH17",
    subtopicId: "CS11-CH17-T15",
    question: "Which service translates domain names into IP addresses?",
    options: [
      {
        key: "A",
        text: "DHCP",
      },
      {
        key: "B",
        text: "DNS",
      },
      {
        key: "C",
        text: "ARP",
      },
      {
        key: "D",
        text: "TCP",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The Domain Name System maps names like example.com to IP addresses.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-022",
    class: 12,
    subject: "Computer Science",
    topic: "CSS and Web Page Design",
    subtopic: "Responsive web design",
    topicId: "CS12-CH08",
    subtopicId: "CS12-CH08-T15",
    question: "Which HTML tag is used to display an image?",
    options: [
      {
        key: "A",
        text: "<image>",
      },
      {
        key: "B",
        text: "<img>",
      },
      {
        key: "C",
        text: "<pic>",
      },
      {
        key: "D",
        text: "<src>",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The <img> tag embeds images, with its src attribute giving the source.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-012",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Fundamentals",
    subtopic: "Definition of a computer",
    topicId: "CS11-CH01",
    subtopicId: "CS11-CH01-T01",
    question: "How many bytes are there in 1 kilobyte (KB)?",
    options: [
      {
        key: "A",
        text: "1000",
      },
      {
        key: "B",
        text: "1024",
      },
      {
        key: "C",
        text: "1204",
      },
      {
        key: "D",
        text: "512",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "1 KB = 2¹⁰ = 1024 bytes.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-013",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Architecture and Components",
    subtopic: "System bus",
    topicId: "CS11-CH02",
    subtopicId: "CS11-CH02-T14",
    question: "What is the hexadecimal equivalent of decimal 15?",
    options: [
      {
        key: "A",
        text: "E",
      },
      {
        key: "B",
        text: "F",
      },
      {
        key: "C",
        text: "10",
      },
      {
        key: "D",
        text: "1F",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Hexadecimal digits go 0–9, A–F, so 15 is F.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-014",
    class: 11,
    subject: "Computer Science",
    topic: "Number Systems and Boolean Logic",
    subtopic: "Boolean algebra",
    topicId: "CS11-CH03",
    subtopicId: "CS11-CH03-T15",
    question:
      "Which of the following are universal gates? (Select all that apply)",
    options: [
      {
        key: "A",
        text: "AND",
      },
      {
        key: "B",
        text: "NAND",
      },
      {
        key: "C",
        text: "OR",
      },
      {
        key: "D",
        text: "NOR",
      },
    ],
    correct_options: ["B", "D"],
    is_multi_select: true,
    explanation: "NAND and NOR can each be used to build any other logic gate.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-015",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Software and Operating Systems",
    subtopic: "Functions of an operating system",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T07",
    question: "Which of the following is NOT an operating system?",
    options: [
      {
        key: "A",
        text: "Linux",
      },
      {
        key: "B",
        text: "Windows",
      },
      {
        key: "C",
        text: "Oracle",
      },
      {
        key: "D",
        text: "macOS",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Oracle is a database management system, not an OS.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-016",
    class: 11,
    subject: "Computer Science",
    topic: "C Programming Fundamentals",
    subtopic: "Header files",
    topicId: "CS11-CH07",
    subtopicId: "CS11-CH07-T03",
    question: "Which header file is required for printf() in C?",
    options: [
      {
        key: "A",
        text: "stdio.h",
      },
      {
        key: "B",
        text: "math.h",
      },
      {
        key: "C",
        text: "string.h",
      },
      {
        key: "D",
        text: "stdlib.h",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation: "printf() is declared in stdio.h.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-017",
    class: 12,
    subject: "Computer Science",
    topic: "JavaScript Fundamentals",
    subtopic: "Operators",
    topicId: "CS12-CH09",
    subtopicId: "CS12-CH09-T04",
    question: "What is the value of 7 % 3 in C?",
    options: [
      {
        key: "A",
        text: "2",
      },
      {
        key: "B",
        text: "1",
      },
      {
        key: "C",
        text: "0",
      },
      {
        key: "D",
        text: "3",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "The modulus operator gives the remainder: 7 = 2×3 + 1.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-018",
    class: 12,
    subject: "Computer Science",
    topic: "JavaScript Fundamentals",
    subtopic: "Loops",
    topicId: "CS12-CH09",
    subtopicId: "CS12-CH09-T06",
    question: "Which loop in C executes its body at least once?",
    options: [
      {
        key: "A",
        text: "for",
      },
      {
        key: "B",
        text: "while",
      },
      {
        key: "C",
        text: "do-while",
      },
      {
        key: "D",
        text: "if",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "do-while checks its condition after executing the body.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-019",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Architecture and Components",
    subtopic: "Arithmetic Logic Unit",
    topicId: "CS11-CH02",
    subtopicId: "CS11-CH02-T04",
    question: "What is the result of binary addition 1011 + 0110?",
    options: [
      {
        key: "A",
        text: "10001",
      },
      {
        key: "B",
        text: "10101",
      },
      {
        key: "C",
        text: "10011",
      },
      {
        key: "D",
        text: "11001",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation: "11 + 6 = 17, which is 10001 in binary.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-011",
    class: 12,
    subject: "Computer Science",
    topic: "Database Design and Modeling",
    subtopic: "Database design concepts",
    topicId: "CS12-CH04",
    subtopicId: "CS12-CH04-T01",
    question:
      "Which SQL clause is used to filter records based on a condition?",
    options: [
      {
        key: "A",
        text: "ORDER BY",
      },
      {
        key: "B",
        text: "WHERE",
      },
      {
        key: "C",
        text: "GROUP BY",
      },
      {
        key: "D",
        text: "FROM",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "The WHERE clause selects only rows that satisfy a condition.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-012",
    class: 12,
    subject: "Computer Science",
    topic: "Database Design and Modeling",
    subtopic: "Database design concepts",
    topicId: "CS12-CH04",
    subtopicId: "CS12-CH04-T01",
    question: "Which SQL aggregate function returns the number of rows?",
    options: [
      {
        key: "A",
        text: "SUM()",
      },
      {
        key: "B",
        text: "COUNT()",
      },
      {
        key: "C",
        text: "AVG()",
      },
      {
        key: "D",
        text: "MAX()",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "COUNT() returns the number of rows.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-013",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Networks",
    subtopic: "Concept of computer networks",
    topicId: "CS11-CH16",
    subtopicId: "CS11-CH16-T01",
    question: "Which protocol is used for sending email?",
    options: [
      {
        key: "A",
        text: "HTTP",
      },
      {
        key: "B",
        text: "FTP",
      },
      {
        key: "C",
        text: "SMTP",
      },
      {
        key: "D",
        text: "SNMP",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "SMTP (Simple Mail Transfer Protocol) sends email between servers.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-014",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Networks",
    subtopic: "Star topology",
    topicId: "CS11-CH16",
    subtopicId: "CS11-CH16-T09",
    question:
      "In which topology are all devices connected to a central hub or switch?",
    options: [
      {
        key: "A",
        text: "Bus",
      },
      {
        key: "B",
        text: "Ring",
      },
      {
        key: "C",
        text: "Star",
      },
      {
        key: "D",
        text: "Mesh",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "A star topology connects every node to a central device.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-015",
    class: 12,
    subject: "Computer Science",
    topic: "CSS and Web Page Design",
    subtopic: "Introduction to CSS",
    topicId: "CS12-CH08",
    subtopicId: "CS12-CH08-T01",
    question: "What does CSS stand for?",
    options: [
      {
        key: "A",
        text: "Creative Style Sheets",
      },
      {
        key: "B",
        text: "Cascading Style Sheets",
      },
      {
        key: "C",
        text: "Computer Style Sheets",
      },
      {
        key: "D",
        text: "Colorful Style Sheets",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "CSS stands for Cascading Style Sheets.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-016",
    class: 12,
    subject: "Computer Science",
    topic: "Network Security and Cyber Ethics",
    subtopic: "Cyber law awareness",
    topicId: "CS12-CH15",
    subtopicId: "CS12-CH15-T17",
    question: "Phishing is best described as:",
    options: [
      {
        key: "A",
        text: "A hardware failure",
      },
      {
        key: "B",
        text: "A fraudulent attempt to obtain sensitive information by pretending to be a trusted source",
      },
      {
        key: "C",
        text: "A method of data compression",
      },
      {
        key: "D",
        text: "A type of database query",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Phishing tricks users into revealing passwords or financial details.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-017",
    class: 12,
    subject: "Computer Science",
    topic: "Object-Oriented Programming",
    subtopic: "Object-oriented programming concepts",
    topicId: "CS12-CH01",
    subtopicId: "CS12-CH01-T02",
    question:
      "Which of the following are core concepts of OOP? (Select all that apply)",
    options: [
      {
        key: "A",
        text: "Encapsulation",
      },
      {
        key: "B",
        text: "Inheritance",
      },
      {
        key: "C",
        text: "Polymorphism",
      },
      {
        key: "D",
        text: "Compilation",
      },
    ],
    correct_options: ["A", "B", "C"],
    is_multi_select: true,
    explanation:
      "Encapsulation, inheritance and polymorphism are OOP pillars; compilation is a translation process.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-004",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Fundamentals",
    subtopic: "Computer hardware",
    topicId: "CS11-CH01",
    subtopicId: "CS11-CH01-T14",
    question: "Which part is known as the 'brain' of the computer?",
    options: [
      {
        key: "A",
        text: "ALU",
      },
      {
        key: "B",
        text: "CPU",
      },
      {
        key: "C",
        text: "RAM",
      },
      {
        key: "D",
        text: "Hard disk",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "The CPU processes instructions and controls the computer.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-005",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Architecture and Components",
    subtopic: "System bus",
    topicId: "CS11-CH02",
    subtopicId: "CS11-CH02-T14",
    question: "What is the decimal equivalent of binary 1101?",
    options: [
      {
        key: "A",
        text: "11",
      },
      {
        key: "B",
        text: "12",
      },
      {
        key: "C",
        text: "13",
      },
      {
        key: "D",
        text: "14",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "8 + 4 + 0 + 1 = 13.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-006",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Software and Operating Systems",
    subtopic: "System software",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T01",
    question: "Which of the following is system software?",
    options: [
      {
        key: "A",
        text: "MS Word",
      },
      {
        key: "B",
        text: "Operating system",
      },
      {
        key: "C",
        text: "Photoshop",
      },
      {
        key: "D",
        text: "Tally",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "An operating system manages hardware and software resources.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-007",
    class: 11,
    subject: "Computer Science",
    topic: "Number Systems and Boolean Logic",
    subtopic: "Boolean algebra",
    topicId: "CS11-CH03",
    subtopicId: "CS11-CH03-T15",
    question: "Which logic gate gives output 1 only when both inputs are 1?",
    options: [
      {
        key: "A",
        text: "OR",
      },
      {
        key: "B",
        text: "AND",
      },
      {
        key: "C",
        text: "NOR",
      },
      {
        key: "D",
        text: "XOR",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "The AND gate outputs 1 only if all its inputs are 1.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-008",
    class: 11,
    subject: "Computer Science",
    topic: "Introduction to Programming",
    subtopic: "Syntax errors",
    topicId: "CS11-CH06",
    subtopicId: "CS11-CH06-T16",
    question: "Which symbol is used to end a statement in C?",
    options: [
      {
        key: "A",
        text: ".",
      },
      {
        key: "B",
        text: ":",
      },
      {
        key: "C",
        text: ";",
      },
      {
        key: "D",
        text: ",",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Statements in C are terminated with a semicolon.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-009",
    class: 11,
    subject: "Computer Science",
    topic: "C Programming Fundamentals",
    subtopic: "Data types",
    topicId: "CS11-CH07",
    subtopicId: "CS11-CH07-T10",
    question: "Which data type is used to store decimal numbers in C?",
    options: [
      {
        key: "A",
        text: "int",
      },
      {
        key: "B",
        text: "char",
      },
      {
        key: "C",
        text: "float",
      },
      {
        key: "D",
        text: "void",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "float stores real (decimal) numbers.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-010",
    class: 12,
    subject: "Computer Science",
    topic: "CSS and Web Page Design",
    subtopic: "Responsive web design",
    topicId: "CS12-CH08",
    subtopicId: "CS12-CH08-T15",
    question: "What is the full form of URL?",
    options: [
      {
        key: "A",
        text: "Uniform Resource Locator",
      },
      {
        key: "B",
        text: "Universal Resource Link",
      },
      {
        key: "C",
        text: "Uniform Reference Locator",
      },
      {
        key: "D",
        text: "United Resource Locator",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "URL stands for Uniform Resource Locator, the address of a web resource.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-011",
    class: 12,
    subject: "Computer Science",
    topic: "Network Security and Cyber Ethics",
    subtopic: "Malware",
    topicId: "CS12-CH15",
    subtopicId: "CS12-CH15-T11",
    question:
      "Which of the following is malicious software that attaches itself to files and spreads?",
    options: [
      {
        key: "A",
        text: "Firewall",
      },
      {
        key: "B",
        text: "Virus",
      },
      {
        key: "C",
        text: "Router",
      },
      {
        key: "D",
        text: "Browser",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "A virus attaches to host files/programs and spreads when they are run.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-004",
    class: 12,
    subject: "Computer Science",
    topic: "Database Design and Modeling",
    subtopic: "Primary keys",
    topicId: "CS12-CH04",
    subtopicId: "CS12-CH04-T09",
    question: "The primary key of a table:",
    options: [
      {
        key: "A",
        text: "Allows duplicate values",
      },
      {
        key: "B",
        text: "Uniquely identifies each record",
      },
      {
        key: "C",
        text: "Can contain NULL values",
      },
      {
        key: "D",
        text: "Is always a text field",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "A primary key uniquely identifies each record and cannot be NULL.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-005",
    class: 12,
    subject: "Computer Science",
    topic: "Database Design and Modeling",
    subtopic: "Database design concepts",
    topicId: "CS12-CH04",
    subtopicId: "CS12-CH04-T01",
    question: "Which SQL command removes a table completely from the database?",
    options: [
      {
        key: "A",
        text: "DELETE",
      },
      {
        key: "B",
        text: "DROP",
      },
      {
        key: "C",
        text: "REMOVE",
      },
      {
        key: "D",
        text: "CLEAR",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "DROP TABLE removes the table structure and its data.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-006",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Networks",
    subtopic: "Network devices",
    topicId: "CS11-CH16",
    subtopicId: "CS11-CH16-T12",
    question:
      "Which device connects different networks and forwards packets between them?",
    options: [
      {
        key: "A",
        text: "Hub",
      },
      {
        key: "B",
        text: "Switch",
      },
      {
        key: "C",
        text: "Router",
      },
      {
        key: "D",
        text: "Repeater",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "A router forwards data packets between different networks.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-007",
    class: 12,
    subject: "Computer Science",
    topic: "CSS and Web Page Design",
    subtopic: "Responsive web design",
    topicId: "CS12-CH08",
    subtopicId: "CS12-CH08-T15",
    question: "Which HTML tag defines the largest heading?",
    options: [
      {
        key: "A",
        text: "<h6>",
      },
      {
        key: "B",
        text: "<h1>",
      },
      {
        key: "C",
        text: "<head>",
      },
      {
        key: "D",
        text: "<title>",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "<h1> is the highest-level (largest) heading.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-008",
    class: 12,
    subject: "Computer Science",
    topic: "Network Security and Cyber Ethics",
    subtopic: "Cyber law awareness",
    topicId: "CS12-CH15",
    subtopicId: "CS12-CH15-T17",
    question: "The Electronic Transactions Act of Nepal was enacted in:",
    options: [
      {
        key: "A",
        text: "2058 BS",
      },
      {
        key: "B",
        text: "2061 BS",
      },
      {
        key: "C",
        text: "2063 BS",
      },
      {
        key: "D",
        text: "2070 BS",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Nepal's Electronic Transactions Act was enacted in 2063 BS (2008 AD).",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-009",
    class: 12,
    subject: "Computer Science",
    topic: "Object-Oriented Programming",
    subtopic: "Object-oriented programming concepts",
    topicId: "CS12-CH01",
    subtopicId: "CS12-CH01-T02",
    question:
      "Binding data and functions together into a single unit is called:",
    options: [
      {
        key: "A",
        text: "Inheritance",
      },
      {
        key: "B",
        text: "Polymorphism",
      },
      {
        key: "C",
        text: "Encapsulation",
      },
      {
        key: "D",
        text: "Compilation",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Encapsulation wraps data and the methods that operate on it into one unit (class).",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-010",
    class: 12,
    subject: "Computer Science",
    topic: "E-Commerce and Digital Payments",
    subtopic: "Business-to-consumer commerce",
    topicId: "CS12-CH18",
    subtopicId: "CS12-CH18-T03",
    question:
      "A customer buying products from an online shopping site like Daraz is an example of:",
    options: [
      {
        key: "A",
        text: "B2B",
      },
      {
        key: "B",
        text: "B2C",
      },
      {
        key: "C",
        text: "C2C",
      },
      {
        key: "D",
        text: "G2C",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "A business selling directly to consumers is Business-to-Consumer (B2C).",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-001",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Software and Operating Systems",
    subtopic: "Memory management",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T14",
    question: "What is the full form of RAM?",
    options: [
      {
        key: "A",
        text: "Read Access Memory",
      },
      {
        key: "B",
        text: "Random Access Memory",
      },
      {
        key: "C",
        text: "Rapid Access Memory",
      },
      {
        key: "D",
        text: "Run Access Memory",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "RAM stands for Random Access Memory, the computer's volatile primary memory.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-002",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Architecture and Components",
    subtopic: "System bus",
    topicId: "CS11-CH02",
    subtopicId: "CS11-CH02-T14",
    question: "What is the binary equivalent of decimal 10?",
    options: [
      {
        key: "A",
        text: "1001",
      },
      {
        key: "B",
        text: "1010",
      },
      {
        key: "C",
        text: "1100",
      },
      {
        key: "D",
        text: "1110",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "10 = 8 + 2 = 1010₂.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP11-003",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Fundamentals",
    subtopic: "Basic computer organization",
    topicId: "CS11-CH01",
    subtopicId: "CS11-CH01-T17",
    question: "Which of the following is an input device?",
    options: [
      {
        key: "A",
        text: "Monitor",
      },
      {
        key: "B",
        text: "Printer",
      },
      {
        key: "C",
        text: "Keyboard",
      },
      {
        key: "D",
        text: "Speaker",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "A keyboard sends data into the computer, so it is an input device.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-001",
    class: 12,
    subject: "Computer Science",
    topic: "Database Design and Modeling",
    subtopic: "Database design concepts",
    topicId: "CS12-CH04",
    subtopicId: "CS12-CH04-T01",
    question: "Which SQL command is used to retrieve data from a table?",
    options: [
      {
        key: "A",
        text: "INSERT",
      },
      {
        key: "B",
        text: "UPDATE",
      },
      {
        key: "C",
        text: "SELECT",
      },
      {
        key: "D",
        text: "DELETE",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "SELECT retrieves data from one or more tables.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-002",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Networks",
    subtopic: "Concept of computer networks",
    topicId: "CS11-CH16",
    subtopicId: "CS11-CH16-T01",
    question: "How many bits are there in an IPv4 address?",
    options: [
      {
        key: "A",
        text: "16",
      },
      {
        key: "B",
        text: "32",
      },
      {
        key: "C",
        text: "64",
      },
      {
        key: "D",
        text: "128",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "An IPv4 address is 32 bits long, usually written as four decimal octets.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CMP12-003",
    class: 12,
    subject: "Computer Science",
    topic: "CSS and Web Page Design",
    subtopic: "Responsive web design",
    topicId: "CS12-CH08",
    subtopicId: "CS12-CH08-T15",
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
      {
        key: "A",
        text: "<link>",
      },
      {
        key: "B",
        text: "<a>",
      },
      {
        key: "C",
        text: "<href>",
      },
      {
        key: "D",
        text: "<url>",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The anchor tag <a> with the href attribute creates a hyperlink.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CSC11-076",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Fundamentals",
    subtopic: "Definition of a computer",
    topicId: "CS11-CH01",
    subtopicId: "CS11-CH01-T01",
    question: "What is the decimal value of binary 1010₂?",
    options: [
      {
        key: "A",
        text: "8",
      },
      {
        key: "B",
        text: "10",
      },
      {
        key: "C",
        text: "12",
      },
      {
        key: "D",
        text: "14",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "1010₂ = 1×8 + 0×4 + 1×2 + 0×1 = 10.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CSC11-077",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Software and Operating Systems",
    subtopic: "Memory management",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T14",
    question: "Which type of memory is volatile?",
    options: [
      {
        key: "A",
        text: "RAM",
      },
      {
        key: "B",
        text: "ROM",
      },
      {
        key: "C",
        text: "Optical disc",
      },
      {
        key: "D",
        text: "Read-only firmware storage in typical use",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "RAM normally loses its stored contents when power is removed, so it is volatile memory.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CSC11-078",
    class: 11,
    subject: "Computer Science",
    topic: "Introduction to Programming",
    subtopic: "Algorithms",
    topicId: "CS11-CH06",
    subtopicId: "CS11-CH06-T11",
    question: "An algorithm is best described as:",
    options: [
      {
        key: "A",
        text: "A finite sequence of well-defined steps to solve a problem",
      },
      {
        key: "B",
        text: "A physical computer component",
      },
      {
        key: "C",
        text: "A type of printer",
      },
      {
        key: "D",
        text: "A programming language only",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "An algorithm is a finite, ordered set of clear steps for solving a problem or performing a computation.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CSC11-079",
    class: 11,
    subject: "Computer Science",
    topic: "C Programming Fundamentals",
    subtopic: "Variables",
    topicId: "CS11-CH07",
    subtopicId: "CS11-CH07-T08",
    question: "In programming, a variable is generally used to:",
    options: [
      {
        key: "A",
        text: "Store a value that can be referenced by a name",
      },
      {
        key: "B",
        text: "Increase monitor size",
      },
      {
        key: "C",
        text: "Replace the operating system",
      },
      {
        key: "D",
        text: "Guarantee that a program has no bugs",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "A variable is a named storage abstraction used to hold or refer to data during program execution.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CSC11-080",
    class: 12,
    subject: "Computer Science",
    topic: "JavaScript Fundamentals",
    subtopic: "Loops",
    topicId: "CS12-CH09",
    subtopicId: "CS12-CH09-T06",
    question:
      "Which control structure is used to repeat a block of instructions?",
    options: [
      {
        key: "A",
        text: "Loop",
      },
      {
        key: "B",
        text: "Constant",
      },
      {
        key: "C",
        text: "Comment",
      },
      {
        key: "D",
        text: "Identifier",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Loops repeat a block of code while a condition holds or for a specified sequence or number of iterations.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CSC11-081",
    class: 12,
    subject: "Computer Science",
    topic: "Database Design and Modeling",
    subtopic: "Primary keys",
    topicId: "CS12-CH04",
    subtopicId: "CS12-CH04-T09",
    question:
      "What is the main purpose of a primary key in a relational database table?",
    options: [
      {
        key: "A",
        text: "To uniquely identify each row",
      },
      {
        key: "B",
        text: "To store duplicate rows only",
      },
      {
        key: "C",
        text: "To encrypt every field automatically",
      },
      {
        key: "D",
        text: "To replace all tables in the database",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "A primary key uniquely identifies each record and must not contain duplicate or null key values.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CSC11-082",
    class: 11,
    subject: "Computer Science",
    topic: "Internet and Web Technology",
    subtopic: "IP addresses",
    topicId: "CS11-CH17",
    subtopicId: "CS11-CH17-T10",
    question: "What is the main role of an IP address?",
    options: [
      {
        key: "A",
        text: "To identify a network interface for IP communication",
      },
      {
        key: "B",
        text: "To specify the colour of a screen",
      },
      {
        key: "C",
        text: "To store a computer's passwords in plain text",
      },
      {
        key: "D",
        text: "To determine the keyboard layout",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "An IP address identifies a network interface within the Internet Protocol addressing system and supports packet delivery.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CSC11-083",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Software and Operating Systems",
    subtopic: "Process management",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T16",
    question: "Which is a core responsibility of an operating system?",
    options: [
      {
        key: "A",
        text: "Managing hardware resources and program execution",
      },
      {
        key: "B",
        text: "Manufacturing computer chips",
      },
      {
        key: "C",
        text: "Writing every application automatically",
      },
      {
        key: "D",
        text: "Replacing the CPU with software",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "An operating system manages resources such as CPU time, memory, files and input/output devices.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CSC11-084",
    class: 12,
    subject: "Computer Science",
    topic: "Network Security and Cyber Ethics",
    subtopic: "Phishing",
    topicId: "CS12-CH15",
    subtopicId: "CS12-CH15-T12",
    question: "Which situation is a common example of phishing?",
    options: [
      {
        key: "A",
        text: "A fraudulent message impersonates a trusted service to steal credentials",
      },
      {
        key: "B",
        text: "A user updates a legitimate application",
      },
      {
        key: "C",
        text: "A computer creates a local backup",
      },
      {
        key: "D",
        text: "A printer runs out of paper",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Phishing uses deceptive messages or websites to trick people into revealing sensitive information or taking unsafe actions.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CSC12-076",
    class: 12,
    subject: "Computer Science",
    topic: "JavaScript Fundamentals",
    subtopic: "Functions",
    topicId: "CS12-CH09",
    subtopicId: "CS12-CH09-T07",
    question: "What is a major advantage of using functions in a program?",
    options: [
      {
        key: "A",
        text: "They eliminate the need for testing",
      },
      {
        key: "B",
        text: "They support reuse and modular organization",
      },
      {
        key: "C",
        text: "They make all variables global",
      },
      {
        key: "D",
        text: "They prevent every runtime error",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Functions encapsulate reusable tasks, reduce duplication and improve modularity and maintainability.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CSC12-077",
    class: 12,
    subject: "Computer Science",
    topic: "Database Design and Modeling",
    subtopic: "Database design concepts",
    topicId: "CS12-CH04",
    subtopicId: "CS12-CH04-T01",
    question:
      "Which SQL statement retrieves all columns from a table named Student?",
    options: [
      {
        key: "A",
        text: "GET ALL Student;",
      },
      {
        key: "B",
        text: "SELECT * FROM Student;",
      },
      {
        key: "C",
        text: "SHOW COLUMNS Student ONLY;",
      },
      {
        key: "D",
        text: "FETCH Student DELETE;",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "SELECT * FROM Student retrieves all columns from rows in the Student table.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CSC12-078",
    class: 12,
    subject: "Computer Science",
    topic: "Data Structures",
    subtopic: "Stacks",
    topicId: "CS12-CH02",
    subtopicId: "CS12-CH02-T07",
    question: "Which principle does a stack follow?",
    options: [
      {
        key: "A",
        text: "FIFO",
      },
      {
        key: "B",
        text: "LIFO",
      },
      {
        key: "C",
        text: "Random access only",
      },
      {
        key: "D",
        text: "Smallest item first in every case",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "A stack follows last-in, first-out: the most recently added item is removed first.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CSC12-079",
    class: 12,
    subject: "Computer Science",
    topic: "Data Structures",
    subtopic: "Queues",
    topicId: "CS12-CH02",
    subtopicId: "CS12-CH02-T09",
    question: "A standard queue follows which principle?",
    options: [
      {
        key: "A",
        text: "LIFO",
      },
      {
        key: "B",
        text: "FIFO",
      },
      {
        key: "C",
        text: "Last item always has priority",
      },
      {
        key: "D",
        text: "Items cannot be removed",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "A standard queue follows first-in, first-out: the earliest inserted item is removed first.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CSC12-080",
    class: 12,
    subject: "Computer Science",
    topic: "CSS and Web Page Design",
    subtopic: "Responsive web design",
    topicId: "CS12-CH08",
    subtopicId: "CS12-CH08-T15",
    question: "What is the primary purpose of HTTP?",
    options: [
      {
        key: "A",
        text: "To transfer web resources through a request-response protocol",
      },
      {
        key: "B",
        text: "To physically connect a monitor",
      },
      {
        key: "C",
        text: "To compile every programming language",
      },
      {
        key: "D",
        text: "To provide electrical power to routers",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "HTTP is an application-layer protocol used for communication between clients and servers to transfer web resources.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CSC12-081",
    class: 12,
    subject: "Computer Science",
    topic: "Software Development Life Cycle",
    subtopic: "Testing",
    topicId: "CS12-CH10",
    subtopicId: "CS12-CH10-T09",
    question: "What is the main purpose of unit testing?",
    options: [
      {
        key: "A",
        text: "To test small, individual units of software",
      },
      {
        key: "B",
        text: "To test only the physical keyboard",
      },
      {
        key: "C",
        text: "To replace all system testing",
      },
      {
        key: "D",
        text: "To guarantee that software can never fail",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Unit tests check individual functions, methods or components against expected behaviour.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CSC12-082",
    class: 11,
    subject: "Computer Science",
    topic: "Internet and Web Technology",
    subtopic: "DNS",
    topicId: "CS11-CH17",
    subtopicId: "CS11-CH17-T11",
    question: "What is the main function of the Domain Name System (DNS)?",
    options: [
      {
        key: "A",
        text: "To translate domain names into corresponding network records, commonly IP addresses",
      },
      {
        key: "B",
        text: "To encrypt every file on a computer",
      },
      {
        key: "C",
        text: "To increase CPU clock speed",
      },
      {
        key: "D",
        text: "To replace all Internet routing",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "DNS provides distributed naming services, including mapping domain names to IP address records.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CSC12-083",
    class: 12,
    subject: "Computer Science",
    topic: "Object-Oriented Programming",
    subtopic: "Object-oriented programming concepts",
    topicId: "CS12-CH01",
    subtopicId: "CS12-CH01-T02",
    question: "In object-oriented programming, encapsulation primarily means:",
    options: [
      {
        key: "A",
        text: "Bundling data and related methods while controlling access",
      },
      {
        key: "B",
        text: "Writing every function in one file",
      },
      {
        key: "C",
        text: "Removing all data from objects",
      },
      {
        key: "D",
        text: "Converting source code directly into hardware",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Encapsulation combines state and behaviour and controls access to an object's internal representation.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CSC12-084",
    class: 12,
    subject: "Computer Science",
    topic: "JavaScript Fundamentals",
    subtopic: "Introduction to JavaScript",
    topicId: "CS12-CH09",
    subtopicId: "CS12-CH09-T01",
    question: "Which statement best describes a cryptographic hash function?",
    options: [
      {
        key: "A",
        text: "It produces a fixed-length digest from input data",
      },
      {
        key: "B",
        text: "It always allows the original input to be recovered",
      },
      {
        key: "C",
        text: "It is identical to reversible encryption",
      },
      {
        key: "D",
        text: "It prevents every possible cyberattack",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "A cryptographic hash maps input data to a fixed-length digest and is designed to make finding preimages and collisions computationally difficult.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CSC12-085",
    class: 12,
    subject: "Computer Science",
    topic: "Software Development Life Cycle",
    subtopic: "Introduction to software engineering",
    topicId: "CS12-CH10",
    subtopicId: "CS12-CH10-T01",
    question:
      "What is a primary benefit of using a version control system such as Git?",
    options: [
      {
        key: "A",
        text: "Tracking changes and supporting collaboration",
      },
      {
        key: "B",
        text: "Automatically proving every program is correct",
      },
      {
        key: "C",
        text: "Replacing the need for backups in all situations",
      },
      {
        key: "D",
        text: "Preventing all merge conflicts",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Version control records changes over time and helps teams collaborate, compare revisions and restore earlier versions.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS11-060",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Fundamentals",
    subtopic: "Computer hardware",
    topicId: "CS11-CH01",
    subtopicId: "CS11-CH01-T14",
    question:
      "Which component performs arithmetic and logical operations in a CPU?",
    options: [
      {
        key: "A",
        text: "ALU",
      },
      {
        key: "B",
        text: "Monitor",
      },
      {
        key: "C",
        text: "Keyboard",
      },
      {
        key: "D",
        text: "Power supply",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The arithmetic logic unit (ALU) performs arithmetic calculations and logical comparisons.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-061",
    class: 11,
    subject: "Computer Science",
    topic: "Number Systems and Boolean Logic",
    subtopic: "Binary-coded decimal",
    topicId: "CS11-CH03",
    subtopicId: "CS11-CH03-T12",
    question: "What is the decimal equivalent of the binary number 1010₂?",
    options: [
      {
        key: "A",
        text: "8",
      },
      {
        key: "B",
        text: "10",
      },
      {
        key: "C",
        text: "12",
      },
      {
        key: "D",
        text: "14",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "1010₂ = 1×8 + 0×4 + 1×2 + 0×1 = 10.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-062",
    class: 11,
    subject: "Computer Science",
    topic: "C Programming Fundamentals",
    subtopic: "Variables",
    topicId: "CS11-CH07",
    subtopicId: "CS11-CH07-T08",
    question: "In programming, what is a variable primarily used for?",
    options: [
      {
        key: "A",
        text: "Storing a value that can be referenced by a name",
      },
      {
        key: "B",
        text: "Physically cooling the processor",
      },
      {
        key: "C",
        text: "Replacing the operating system",
      },
      {
        key: "D",
        text: "Connecting a monitor to power",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "A variable is a named reference used to store or represent data during program execution.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-063",
    class: 11,
    subject: "Computer Science",
    topic: "Introduction to Programming",
    subtopic: "Flowcharts",
    topicId: "CS11-CH06",
    subtopicId: "CS11-CH06-T12",
    question:
      "Which flowchart symbol is commonly used to represent a decision?",
    options: [
      {
        key: "A",
        text: "Rectangle",
      },
      {
        key: "B",
        text: "Diamond",
      },
      {
        key: "C",
        text: "Oval",
      },
      {
        key: "D",
        text: "Parallelogram",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "A diamond conventionally represents a decision or conditional branch in a flowchart.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-064",
    class: 11,
    subject: "Computer Science",
    topic: "Number Systems and Boolean Logic",
    subtopic: "ASCII",
    topicId: "CS11-CH03",
    subtopicId: "CS11-CH03-T13",
    question: "What does ASCII stand for?",
    options: [
      {
        key: "A",
        text: "American Standard Code for Information Interchange",
      },
      {
        key: "B",
        text: "Advanced System Control for Internet Integration",
      },
      {
        key: "C",
        text: "Automatic Software Coding and Instruction Interface",
      },
      {
        key: "D",
        text: "Applied Standard Circuit for Internal Information",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "ASCII is a character-encoding standard whose name expands to American Standard Code for Information Interchange.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-065",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Software and Operating Systems",
    subtopic: "Process management",
    topicId: "CS11-CH04",
    subtopicId: "CS11-CH04-T16",
    question: "Which is a primary responsibility of an operating system?",
    options: [
      {
        key: "A",
        text: "Managing hardware resources and processes",
      },
      {
        key: "B",
        text: "Manufacturing the CPU",
      },
      {
        key: "C",
        text: "Creating electricity for the computer",
      },
      {
        key: "D",
        text: "Replacing all application software",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "An operating system manages processes, memory, files, devices, and other computer resources.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS11-066",
    class: 11,
    subject: "Computer Science",
    topic: "Internet and Web Technology",
    subtopic: "IP addresses",
    topicId: "CS11-CH17",
    subtopicId: "CS11-CH17-T10",
    question: "What is the primary purpose of an IP address on an IP network?",
    options: [
      {
        key: "A",
        text: "To identify a network interface for communication",
      },
      {
        key: "B",
        text: "To increase a computer's physical memory",
      },
      {
        key: "C",
        text: "To encrypt every file automatically",
      },
      {
        key: "D",
        text: "To determine the monitor's resolution",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "An IP address provides logical addressing that helps route packets to the appropriate network interface.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CS12-042",
    class: 12,
    subject: "Computer Science",
    topic: "Network Security and Cyber Ethics",
    subtopic: "Phishing",
    topicId: "CS12-CH15",
    subtopicId: "CS12-CH15-T12",
    question: "Which situation is a typical example of phishing?",
    options: [
      {
        key: "A",
        text: "Receiving a deceptive message asking for a password through a fake login page",
      },
      {
        key: "B",
        text: "Saving a document in a folder",
      },
      {
        key: "C",
        text: "Updating a legitimate application from its official store",
      },
      {
        key: "D",
        text: "Changing a monitor's brightness",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Phishing attempts to trick people into revealing sensitive information or taking unsafe actions through deceptive communications or websites.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-043",
    class: 12,
    subject: "Computer Science",
    topic: "CSS and Web Page Design",
    subtopic: "Responsive web design",
    topicId: "CS12-CH08",
    subtopicId: "CS12-CH08-T15",
    question: "Which HTML element is used to create a hyperlink?",
    options: [
      {
        key: "A",
        text: "<p>",
      },
      {
        key: "B",
        text: "<a>",
      },
      {
        key: "C",
        text: "<table>",
      },
      {
        key: "D",
        text: "<title>",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The HTML anchor element <a> creates a hyperlink, typically using the href attribute to specify its destination.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-044",
    class: 12,
    subject: "Computer Science",
    topic: "JavaScript Fundamentals",
    subtopic: "Loops",
    topicId: "CS12-CH09",
    subtopicId: "CS12-CH09-T06",
    question:
      "How many times does the loop for (int i = 0; i < 5; i++) execute its body in C-like syntax?",
    options: [
      {
        key: "A",
        text: "4",
      },
      {
        key: "B",
        text: "5",
      },
      {
        key: "C",
        text: "6",
      },
      {
        key: "D",
        text: "Infinite times",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The loop executes for i = 0, 1, 2, 3, and 4, giving five iterations.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-045",
    class: 12,
    subject: "Computer Science",
    topic: "JavaScript Fundamentals",
    subtopic: "Arrays",
    topicId: "CS12-CH09",
    subtopicId: "CS12-CH09-T08",
    question:
      "In a typical zero-indexed array of length 8, what is the index of the last element?",
    options: [
      {
        key: "A",
        text: "6",
      },
      {
        key: "B",
        text: "7",
      },
      {
        key: "C",
        text: "8",
      },
      {
        key: "D",
        text: "9",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "A zero-indexed array of length 8 has indices from 0 through 7, so the final index is 7.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CS12-046",
    class: 12,
    subject: "Computer Science",
    topic: "Database Design and Modeling",
    subtopic: "Database design concepts",
    topicId: "CS12-CH04",
    subtopicId: "CS12-CH04-T01",
    question: "Which SQL command retrieves records from a database table?",
    options: [
      {
        key: "A",
        text: "SELECT",
      },
      {
        key: "B",
        text: "DROP",
      },
      {
        key: "C",
        text: "DELETE",
      },
      {
        key: "D",
        text: "TRUNCATE",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "SELECT retrieves data from one or more database tables or views.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CSC11-051",
    class: 11,
    subject: "Computer Science",
    topic: "Computer Fundamentals",
    subtopic: "Computer hardware",
    topicId: "CS11-CH01",
    subtopicId: "CS11-CH01-T14",
    question:
      "Which type of memory normally loses its contents when power is switched off?",
    options: [
      {
        key: "A",
        text: "ROM",
      },
      {
        key: "B",
        text: "RAM",
      },
      {
        key: "C",
        text: "Flash memory",
      },
      {
        key: "D",
        text: "SSD storage",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "RAM is generally volatile memory, so its stored data is lost when power is removed.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CSC11-052",
    class: 11,
    subject: "Computer Science",
    topic: "Number Systems and Boolean Logic",
    subtopic: "Binary number system",
    topicId: "CS11-CH03",
    subtopicId: "CS11-CH03-T02",
    question: "What is the decimal value of the binary number 1010₂?",
    options: [
      {
        key: "A",
        text: "8",
      },
      {
        key: "B",
        text: "9",
      },
      {
        key: "C",
        text: "10",
      },
      {
        key: "D",
        text: "12",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "1010₂ = 1×8 + 0×4 + 1×2 + 0×1 = 10₁₀.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CSC11-054",
    class: 11,
    subject: "Computer Science",
    topic: "C Programming Fundamentals",
    subtopic: "Variables",
    topicId: "CS11-CH07",
    subtopicId: "CS11-CH07-T08",
    question: "In programming, a variable is primarily used to:",
    options: [
      {
        key: "A",
        text: "Store a value that a program can access",
      },
      {
        key: "B",
        text: "Increase the physical size of the CPU",
      },
      {
        key: "C",
        text: "Replace the operating system",
      },
      {
        key: "D",
        text: "Guarantee that software has no errors",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "A variable is a named storage location or binding used to represent data in a program.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "CSC12-051",
    class: 12,
    subject: "Computer Science",
    topic: "Data Structures",
    subtopic: "Stack operations",
    topicId: "CS12-CH02",
    subtopicId: "CS12-CH02-T08",
    question: "Which principle governs a stack data structure?",
    options: [
      {
        key: "A",
        text: "FIFO",
      },
      {
        key: "B",
        text: "LIFO",
      },
      {
        key: "C",
        text: "Random access only",
      },
      {
        key: "D",
        text: "Priority scheduling only",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "A stack follows Last In, First Out: the most recently added element is removed first.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CSC12-052",
    class: 12,
    subject: "Computer Science",
    topic: "Data Structures",
    subtopic: "Queue operations",
    topicId: "CS12-CH02",
    subtopicId: "CS12-CH02-T10",
    question: "Which principle normally governs a queue?",
    options: [
      {
        key: "A",
        text: "LIFO",
      },
      {
        key: "B",
        text: "FIFO",
      },
      {
        key: "C",
        text: "Last priority only",
      },
      {
        key: "D",
        text: "Reverse alphabetical order",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "A standard queue follows First In, First Out: the earliest inserted element is removed first.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CSC12-053",
    class: 12,
    subject: "Computer Science",
    topic: "HTML",
    subtopic: "Structure of an HTML document",
    topicId: "CS12-CH07",
    subtopicId: "CS12-CH07-T02",
    question: "What is the main purpose of an IP address on an IP network?",
    options: [
      {
        key: "A",
        text: "To identify a network interface for communication",
      },
      {
        key: "B",
        text: "To determine a computer's screen resolution",
      },
      {
        key: "C",
        text: "To store application passwords in plain text",
      },
      {
        key: "D",
        text: "To measure CPU temperature",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "IP addresses identify network interfaces logically so packets can be addressed and routed across IP networks.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "CSC12-054",
    class: 12,
    subject: "Computer Science",
    topic: "HTML",
    subtopic: "Introduction to HTML",
    topicId: "CS12-CH07",
    subtopicId: "CS12-CH07-T01",
    question: "The primary purpose of encryption is to:",
    options: [
      {
        key: "A",
        text: "Make data unreadable to unauthorized parties without the appropriate key",
      },
      {
        key: "B",
        text: "Increase the size of every file",
      },
      {
        key: "C",
        text: "Remove all software bugs",
      },
      {
        key: "D",
        text: "Guarantee that a device cannot be stolen",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Encryption transforms readable data into ciphertext that should be intelligible only to parties with the appropriate decryption capability.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
];
