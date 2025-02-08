"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import type { ChatContextType, ChatMessage, KBArticle } from '@/lib/types/chat';

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchKnowledgeBase = async (query: string) => {
    try {
      // TODO: Implement vector similarity search with query
      const { data: articles } = await supabase
        .from('kb_articles')
        .select('*')
        .textSearch('content', query)
        .limit(3);
      
      return articles as KBArticle[];
    } catch (error) {
      console.error('Error searching knowledge base:', error);
      return [];
    }
  };

  const sendMessage = useCallback(async (content: string) => {
    try {
      setIsLoading(true);
      setError(null);

      // Create a new chat session if none exists
      const storedSessionId = localStorage.getItem('chatSessionId');
      let sessionId: string;

      if (!storedSessionId) {
        const { data: session } = await supabase
          .from('chat_sessions')
          .insert([{}])
          .select()
          .single();
        
        if (!session) {
          throw new Error('Failed to create chat session');
        }
        
        sessionId = session.id;
        localStorage.setItem('chatSessionId', sessionId);
      } else {
        sessionId = storedSessionId;
      }

      // Save user message
      const { data: userMessage } = await supabase
        .from('chat_messages')
        .insert([{
          session_id: sessionId,
          role: 'user',
          content,
          relevant_articles: []
        }])
        .select()
        .single();

      if (userMessage) {
        setMessages(prev => [...prev, userMessage]);
      }

      // Search knowledge base for relevant articles
      const relevantArticles = await searchKnowledgeBase(content);
      
      // Generate AI response using server API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
          relevantArticles,
          sessionId
        }),
      });

      if (response.status === 429) {
        throw new Error('Please wait a moment before sending another message.');
      }

      if (response.status === 400) {
        throw new Error('Message is too long. Please keep your message shorter.');
      }

      const data = await response.json();
      
      if (!response.ok) {
        const errorMessage = data.error || 'Failed to generate response';
        throw new Error(errorMessage);
      }

      // Save assistant message
      const { data: assistantMessage } = await supabase
        .from('chat_messages')
        .insert([{
          session_id: sessionId,
          role: 'assistant',
          content: data.content,
          relevant_articles: relevantArticles.map(article => article.id)
        }])
        .select()
        .single();

      if (assistantMessage) {
        setMessages(prev => [...prev, assistantMessage]);
      }

    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const value = {
    messages,
    isLoading,
    error,
    sendMessage
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
