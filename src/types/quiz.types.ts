export interface Option {
  key: string;
  text: string;
}

export interface Question {
  id: string;
  class: 11 | 12;
  subject: string;
  topic: string;
  subtopic: string;
  topicId: string;
  subtopicId: string;
  question: string;
  options: Option[];
  correct_options: string[];
  is_multi_select: boolean;
  explanation: string;
  difficulty: "Easy" | "Medium" | "Hard";
  question_type: "MCQ";
  marks: number;
  curriculum_note: string;
}

export interface QuestionCollection {
  collection_name: string;
  subject?: string;
  version: string;
  language: string;
  intended_use: string;
  schema_notes: Record<string, string>;
  total_questions: number;
  questions: Question[];
}

export type SyllabusTopic =
  | string
  | {
      id?: string;
      topicNumber?: number;
      topic: string;
      brief?: string;
      [key: string]: any;
    };

export interface SyllabusChapter {
  id?: string;
  chapterNumber: number;
  chapterName: string;
  topics?: SyllabusTopic[];
  [key: string]: any;
}

export interface SyllabusBranch {
  id?: string;
  branchNumber?: number;
  branchName: string;
  chapters?: SyllabusChapter[];
  [key: string]: any;
}

export interface SyllabusGrade {
  id?: string;
  grade?: number;
  subject?: string;
  branches?: SyllabusBranch[];
  [key: string]: any;
}

export interface SyllabusMetadata {
  country?: string;
  curriculum?: string;
  level?: string;
  subject?: string;
  subjectCode?: string;
  version?: string;
  format?: string;
  description?: string;
  note?: string;
  grades?: number[];
  language?: string;
  formatVersion?: string;
  purpose?: string;
  [key: string]: any;
}

export interface SyllabusFile {
  metadata: SyllabusMetadata;
  grades: {
    "11"?: SyllabusGrade;
    "12"?: SyllabusGrade;
    [key: string]: any;
  };
}

export interface SubjectConfig {
  name: string;
  prefix: string;
  syllabusFile: string;
  questionsFile: string;
  category: "science" | "commerce";
  isNepaliLang?: boolean;
}

export interface ChapterContext {
  branchId: string;
  branchName: string;
  chapter: SyllabusChapter;
}
