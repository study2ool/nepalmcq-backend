import type { Question } from "../../types/quiz.types.js";

export const hotel_managementQuestions: Question[] = [
  {
    id: "HM11-001",
    class: 11,
    subject: "Hotel Management",
    topic: "Introduction to Hospitality",
    subtopic: "Front Office Operations",
    topicId: "HM11-CH01",
    subtopicId: "HM11-CH01-T01",
    question:
      "Which hotel department is considered the central nerve center responsible for guest reservations, registration, and billing?",
    options: [
      { key: "A", text: "Food and Beverage Service" },
      { key: "B", text: "Front Office" },
      { key: "C", text: "Housekeeping" },
      { key: "D", text: "Maintenance" },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Front Office manages initial guest greeting, check-in, room key assignment, and final bill settlement.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Grade 11 Hotel Management Unit 1",
  },
  {
    id: "HM12-001",
    class: 12,
    subject: "Hotel Management",
    topic: "Food Safety and HACCP",
    subtopic: "HACCP Standards",
    topicId: "HM12-CH03",
    subtopicId: "HM12-CH03-T01",
    question:
      "In food preparation and safety auditing, what does HACCP stand for?",
    options: [
      { key: "A", text: "Health And Culinary Cleanliness Program" },
      { key: "B", text: "Hazard Analysis and Critical Control Point" },
      { key: "C", text: "Hotel Administration and Catering Protocol" },
      { key: "D", text: "Hygiene Assessment and Cleanliness Procedure" },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "HACCP is Hazard Analysis and Critical Control Point, ensuring proactive foodborne risk mitigation.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Grade 12 Food Safety Standards",
  },
];
