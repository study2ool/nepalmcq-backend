import type { SyllabusFile } from "../../types/quiz.types.js";
import { science_biologySyllabus } from "./science/biology.syllabus.js";
import { science_chemistrySyllabus } from "./science/chemistry.syllabus.js";
import { science_computer_scienceSyllabus } from "./science/computer_science.syllabus.js";
import { science_englishSyllabus } from "./science/english.syllabus.js";
import { science_mathematicsSyllabus } from "./science/mathematics.syllabus.js";
import { science_nepaliSyllabus } from "./science/nepali.syllabus.js";
import { science_physicsSyllabus } from "./science/physics.syllabus.js";
import { commerce_accountingSyllabus } from "./commerce/accounting.syllabus.js";
import { commerce_business_mathSyllabus } from "./commerce/business_math.syllabus.js";
import { commerce_business_studiesSyllabus } from "./commerce/business_studies.syllabus.js";
import { commerce_economicsSyllabus } from "./commerce/economics.syllabus.js";
import { commerce_hotel_managementSyllabus } from "./commerce/hotel_management.syllabus.js";
import { commerce_marketingSyllabus } from "./commerce/marketing.syllabus.js";

export const syllabusData: Record<string, SyllabusFile> = {
  "science:biology.json": science_biologySyllabus,
  "science:chemistry.json": science_chemistrySyllabus,
  "science:computer_science.json": science_computer_scienceSyllabus,
  "science:english.json": science_englishSyllabus,
  "science:mathematics.json": science_mathematicsSyllabus,
  "science:nepali.json": science_nepaliSyllabus,
  "science:physics.json": science_physicsSyllabus,
  "commerce:accounting.json": commerce_accountingSyllabus,
  "commerce:business_math.json": commerce_business_mathSyllabus,
  "commerce:business_studies.json": commerce_business_studiesSyllabus,
  "commerce:economics.json": commerce_economicsSyllabus,
  "commerce:hotel_management.json": commerce_hotel_managementSyllabus,
  "commerce:marketing.json": commerce_marketingSyllabus,
};

export function getSyllabusFromList(
  category: string,
  syllabusFile: string,
): SyllabusFile | null {
  const key = `${category}:${syllabusFile}`;
  return syllabusData[key] || null;
}
