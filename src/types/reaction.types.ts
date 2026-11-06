export type ReactionType = "like" | "dislike" | "none";

export interface QuestionReactionStats {
  questionId: string;
  likesCount: number;
  dislikesCount: number;
  userReaction: "like" | "dislike" | null;
}

export interface QuestionReactionRecord {
  questionId: string;
  likesCount: number;
  dislikesCount: number;
  updatedAt: string;
}

export interface UserReactionsRecord {
  userId: string;
  reactions: Record<string, "like" | "dislike">;
  updatedAt: string;
}
