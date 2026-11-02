export interface QuestionResponseItem {
  questionId: string;
  selectedKey?: string | undefined;
  correctAnswer?: string | undefined;
  isCorrect: boolean;
  status: "correct" | "incorrect" | "unattempted";
  timeSpentSeconds: number;
  subject: string;
  topic: string;
}

export interface SubjectBreakdownItem {
  subject: string;
  total: number;
  attempted: number;
  correct: number;
  accuracy: number;
  score: number;
}

export interface TopicBreakdownItem {
  topic: string;
  subject: string;
  total: number;
  attempted: number;
  correct: number;
  accuracy: number;
}

export interface AttemptRecord {
  id: string; // attemptId
  userId: string; // Firebase Auth UID (or guest ID)
  quizId: string;
  subject: string;
  grade: 11 | 12;
  config: {
    mode: "practice" | "timed_exam";
    chapterIds?: string[] | undefined;
    topicIds?: string[] | undefined;
    totalQuestions: number;
    timeLimitMinutes?: number | undefined;
  };
  metrics: {
    score: number;
    totalPossible: number;
    accuracy: number; // percentage 0-100
    attemptedQuestions: number;
    unattemptedQuestions: number;
    correctAnswers: number;
    incorrectAnswers: number;
    timeSpentSeconds: number;
    avgTimePerQuestion: number;
    earnedXp: number;
  };
  questionResponses: QuestionResponseItem[];
  subjectBreakdown: SubjectBreakdownItem[];
  topicBreakdown: TopicBreakdownItem[];
  completedAt: string; // ISO string
  createdAt: string; // ISO string
}

export interface WeakTopicItem {
  topic: string;
  subject: string;
  accuracy: number;
  attempted: number;
  correct: number;
  total: number;
}

export interface ExamTrendPoint {
  attemptId: string;
  examNumber: string;
  date: string;
  subject: string;
  accuracy: number;
  score: number;
}

export interface UserStatsRecord {
  userId: string;
  displayName: string;
  email: string;
  picture?: string | undefined;
  collegeId?: string | undefined;
  school?: string | undefined;
  city?: string | undefined;
  gender?: string | undefined;
  grade: 11 | 12;
  lifetime: {
    totalExams: number;
    totalQuestionsAttempted: number;
    totalCorrect: number;
    totalTimeSpentSeconds: number;
    totalXp: number;
    overallAccuracy: number;
    bestScore: number;
    bestAccuracy: number;
  };
  streak: {
    currentStreak: number;
    longestStreak: number;
    lastActiveDate: string; // YYYY-MM-DD
  };
  subjectMastery: Record<
    string,
    {
      exams: number;
      attempted: number;
      correct: number;
      accuracy: number;
      xp: number;
    }
  >;
  weakTopics: WeakTopicItem[];
  recentTrend: ExamTrendPoint[];
  updatedAt: string;
}

export interface LeaderboardEntry {
  id: string;
  userId: string;
  name: string;
  collegeId?: string | undefined;
  school: string;
  city: string;
  gender?: string | undefined;
  grade: 11 | 12;
  avatarInitials: string;
  avatarBg: string;
  totalXp: number;
  weeklyXp: number;
  examsCompleted: number;
  overallAccuracy: number;
  subjectXp: Record<string, number>;
  subjectAccuracy: Record<string, number>;
  streakDays: number;
  topSubject: string;
  badgesCount: number;
  rank?: number | undefined;
  isCurrentUser?: boolean | undefined;
}

export interface SchoolStanding {
  id: string;
  collegeId?: string | undefined;
  name: string;
  city: string;
  studentCount: number;
  totalXp: number;
  averageAccuracy: number;
  topSubject: string;
  nationalRank?: number | undefined;
}
