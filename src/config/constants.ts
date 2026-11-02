import type { SubjectConfig } from "../types/quiz.types.js";

export const DEFAULT_MODELS = [
  "nvidia/nemotron-3-ultra-550b-a55b:free",
  "nvidia/nemotron-3.5-super-vl:free",
  "nvidia/nemotron-3.5-lightning:free",
  "openai/gpt-4o-mini",
  "google/gemini-2.0-flash-001",
  "meta-llama/llama-3.3-70b-instruct",
  "deepseek/deepseek-chat",
  "mistralai/mistral-small-24b-instruct-2501",
  "google/gemini-flash-1.5",
];

export const SUBJECT_CONFIGS: Record<string, SubjectConfig> = {
  // Science stream
  physics: {
    name: "Physics",
    prefix: "PHY",
    syllabusFile: "physics.json",
    questionsFile: "physics.json",
    category: "science",
  },
  chemistry: {
    name: "Chemistry",
    prefix: "CHE",
    syllabusFile: "chemistry.json",
    questionsFile: "chemistry.json",
    category: "science",
  },
  biology: {
    name: "Biology",
    prefix: "BIO",
    syllabusFile: "biology.json",
    questionsFile: "biology.json",
    category: "science",
  },
  mathematics: {
    name: "Mathematics",
    prefix: "MAT",
    syllabusFile: "mathematics.json",
    questionsFile: "math.json",
    category: "science",
  },
  math: {
    name: "Mathematics",
    prefix: "MAT",
    syllabusFile: "mathematics.json",
    questionsFile: "math.json",
    category: "science",
  },
  "computer science": {
    name: "Computer Science",
    prefix: "CS",
    syllabusFile: "computer_science.json",
    questionsFile: "computer_science.json",
    category: "science",
  },
  computerscience: {
    name: "Computer Science",
    prefix: "CS",
    syllabusFile: "computer_science.json",
    questionsFile: "computer_science.json",
    category: "science",
  },
  cs: {
    name: "Computer Science",
    prefix: "CS",
    syllabusFile: "computer_science.json",
    questionsFile: "computer_science.json",
    category: "science",
  },
  english: {
    name: "English",
    prefix: "ENG",
    syllabusFile: "english.json",
    questionsFile: "english.json",
    category: "science",
  },
  nepali: {
    name: "Nepali",
    prefix: "NEP",
    syllabusFile: "nepali.json",
    questionsFile: "nepali.json",
    category: "science",
    isNepaliLang: true,
  },

  // Commerce stream
  accounting: {
    name: "Accounting",
    prefix: "ACC",
    syllabusFile: "accounting.json",
    questionsFile: "accounting.json",
    category: "commerce",
  },
  "business studies": {
    name: "Business Studies",
    prefix: "BS",
    syllabusFile: "business_studies.json",
    questionsFile: "business_studies.json",
    category: "commerce",
  },
  economics: {
    name: "Economics",
    prefix: "ECO",
    syllabusFile: "economics.json",
    questionsFile: "economics.json",
    category: "commerce",
  },
  "business math": {
    name: "Business Mathematics",
    prefix: "BMAT",
    syllabusFile: "business_math.json",
    questionsFile: "business_math.json",
    category: "commerce",
  },
  marketing: {
    name: "Marketing",
    prefix: "MKT",
    syllabusFile: "marketing.json",
    questionsFile: "marketing.json",
    category: "commerce",
  },
  "hotel management": {
    name: "Hotel Management",
    prefix: "HM",
    syllabusFile: "hotel_management.json",
    questionsFile: "hotel_management.json",
    category: "commerce",
  },
};
