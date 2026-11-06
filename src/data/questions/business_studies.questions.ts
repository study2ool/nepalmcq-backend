import type { Question } from "../../types/quiz.types.js";

export const business_studiesQuestions: Question[] = [
  {
    id: "BST11-001",
    class: 11,
    subject: "Business Studies",
    topic: "Nature and Purpose of Business",
    subtopic: "Business Objectives",
    topicId: "BST11-CH01",
    subtopicId: "BST11-CH01-T01",
    question:
      "Which of the following represents the fundamental economic purpose of an entrepreneurial business enterprise?",
    options: [
      { key: "A", text: "Philanthropy and charity" },
      { key: "B", text: "Earning profit through customer value creation" },
      { key: "C", text: "Paying corporate income tax" },
      { key: "D", text: "Employee recreation" },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The primary economic objective of any commercial firm is profit generation by satisfying consumer needs and delivering value.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Grade 11 Business Studies Unit 1",
  },
  {
    id: "BST12-001",
    class: 12,
    subject: "Business Studies",
    topic: "Principles of Management",
    subtopic: "Scientific Management",
    topicId: "BST12-CH02",
    subtopicId: "BST12-CH02-T01",
    question:
      "Who formulated the principles of Scientific Management emphasizing time and motion studies?",
    options: [
      { key: "A", text: "Henri Fayol" },
      { key: "B", text: "F.W. Taylor" },
      { key: "C", text: "Peter Drucker" },
      { key: "D", text: "Max Weber" },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Frederick Winslow Taylor pioneered scientific management techniques aimed at industrial efficiency.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Grade 12 Principles of Management",
  },
];
