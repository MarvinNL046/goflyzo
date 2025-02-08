export interface KBCategory {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
}

export interface KBArticle {
  id: string;
  category_id: string;
  title: string;
  content: string;
  metadata: Record<string, string | number | boolean | null>;
  embedding: number[] | null;
  created_at: string;
  updated_at: string;
}

export interface ChatUser {
  id: string;
  email: string;
  verified: boolean;
  verification_token: string | null;
  verification_expires_at: string | null;
  message_count: number;
  last_message_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface ChatSession {
  id: string;
  user_id: string | null;
  created_at: string;
}

export interface ChatMessage {
  id: string;
  session_id: string;
  role: 'user' | 'assistant';
  content: string;
  created_at: string;
  relevant_articles: string[];
}

export interface ChatResponse {
  message: string;
  relevantArticles: KBArticle[];
}

export interface ChatContextType {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  user: ChatUser | null;
  isVerified: boolean;
  sendMessage: (content: string) => Promise<void>;
  verifyEmail: (email: string) => Promise<void>;
  confirmVerification: (code: string) => Promise<void>;
}

export interface KBSearchResult {
  article: KBArticle;
  similarity: number;
}

export type ChatRole = 'user' | 'assistant';

export interface RateLimit {
  id: string;
  user_id: string;
  hour_start: string;
  message_count: number;
  created_at: string;
  updated_at: string;
}
