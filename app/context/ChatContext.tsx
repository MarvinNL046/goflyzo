"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { ChatContextType, ChatMessage, KBArticle, ChatUser } from '@/lib/types/chat';

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<ChatUser | null>(null);
  const [isVerified, setIsVerified] = useState(false);

  // Load user data on mount
  useEffect(() => {
    const loadUser = async () => {
      const storedUserId = localStorage.getItem('chatUserId');
      if (storedUserId) {
        const { data: userData, error: userError } = await supabase
          .from('chat_users')
          .select('*')
          .eq('id', storedUserId)
          .single();

        if (userData && !userError) {
          setUser(userData);
          setIsVerified(userData.verified);
        } else {
          localStorage.removeItem('chatUserId');
        }
      }
    };

    loadUser();
  }, []);

  const verifyEmail = useCallback(async (email: string) => {
    try {
      setIsLoading(true);
      setError(null);

      // Generate a 6-digit verification code
      const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
      const expiresAt = new Date();
      expiresAt.setMinutes(expiresAt.getMinutes() + 30); // Code expires in 30 minutes

      // Check if user exists
      const { data: existingUser } = await supabase
        .from('chat_users')
        .select('*')
        .eq('email', email)
        .single();

      if (existingUser) {
        // Update existing user
        const { error: updateError } = await supabase
          .from('chat_users')
          .update({
            verification_token: verificationCode,
            verification_expires_at: expiresAt.toISOString()
          })
          .eq('id', existingUser.id);

        if (updateError) throw updateError;
      } else {
        // Create new user
        const { data: newUser, error: insertError } = await supabase
          .from('chat_users')
          .insert([{
            email,
            verification_token: verificationCode,
            verification_expires_at: expiresAt.toISOString()
          }])
          .select()
          .single();

        if (insertError) throw insertError;
        
        if (newUser) {
          setUser(newUser);
        }
      }

      // TODO: Send verification email with code
      console.log('Generated verification code for', email + ':', verificationCode);
      console.log('User can now enter this code to verify their email');
      
    } catch (error) {
      console.error('Error in verifyEmail:', error);
      setError(error instanceof Error ? error.message : 'Failed to send verification code');
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const confirmVerification = useCallback(async (code: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const { data: user, error: userError } = await supabase
        .from('chat_users')
        .select('*')
        .eq('verification_token', code)
        .gte('verification_expires_at', new Date().toISOString())
        .single();

      if (userError || !user) {
        throw new Error('Invalid or expired verification code');
      }

      const { error: updateError } = await supabase
        .from('chat_users')
        .update({
          verified: true,
          verification_token: null,
          verification_expires_at: null
        })
        .eq('id', user.id);

      if (updateError) throw updateError;

      setUser(user);
      setIsVerified(true);
      localStorage.setItem('chatUserId', user.id);

    } catch (error) {
      console.error('Error in confirmVerification:', error);
      setError(error instanceof Error ? error.message : 'Failed to verify code');
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const searchKnowledgeBase = async (query: string) => {
    try {
      // Check if kb_articles table exists first
      const { error: tableError } = await supabase
        .from('kb_articles')
        .select('count', { count: 'exact', head: true });

      // If table doesn't exist or other error, return empty array
      if (tableError) {
        console.log('Knowledge base not available:', tableError.message);
        return [];
      }

      // Attempt to search if table exists
      const { data: articles, error: searchError } = await supabase
        .from('kb_articles')
        .select('*')
        .textSearch('content', query)
        .limit(3);
      
      if (searchError) {
        console.error('Error searching knowledge base:', searchError);
        return [];
      }
      
      return articles as KBArticle[];
    } catch (error) {
      console.error('Error searching knowledge base:', error);
      return [];
    }
  };

  const sendMessage = useCallback(async (content: string) => {
    try {
      if (!user || !isVerified) {
        throw new Error('Please verify your email to send messages');
      }

      console.log('Starting sendMessage with content:', content);
      setIsLoading(true);
      setError(null);

      console.log('Checking for existing session...');
      // Create a new chat session if none exists
      const storedSessionId = localStorage.getItem('chatSessionId');
      let sessionId: string;
      console.log('Stored session ID:', storedSessionId);

      if (!storedSessionId) {
        console.log('Creating new chat session...');
        const { data: session, error: sessionError } = await supabase
          .from('chat_sessions')
          .insert([{
            user_id: user.id
          }])
          .select()
          .single();
        
        if (sessionError) {
          console.error('Error creating chat session:', sessionError);
          throw new Error(`Failed to create chat session: ${sessionError.message}`);
        }
        
        if (!session) {
          console.error('No session data returned');
          throw new Error('Failed to create chat session: No data returned');
        }
        
        sessionId = session.id;
        localStorage.setItem('chatSessionId', sessionId);
      } else {
        sessionId = storedSessionId;
      }

      console.log('Saving user message...');
      // Save user message
      const { data: userMessage, error: messageError } = await supabase
        .from('chat_messages')
        .insert([{
          session_id: sessionId,
          user_id: user.id,
          role: 'user',
          content,
          relevant_articles: []
        }])
        .select()
        .single();

      if (messageError) {
        console.error('Error saving user message:', messageError);
        throw new Error(`Failed to save user message: ${messageError.message}`);
      }

      if (userMessage) {
        console.log('User message saved:', userMessage);
        setMessages(prev => [...prev, userMessage]);
      }

      console.log('Searching knowledge base...');
      // Search knowledge base for relevant articles
      const relevantArticles = await searchKnowledgeBase(content);
      console.log('Found relevant articles:', relevantArticles);
      
      console.log('Generating AI response...');
      // Generate AI response using server API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
          relevantArticles,
          sessionId,
          userId: user.id
        }),
      });

      if (response.status === 429) {
        throw new Error('Please wait a moment before sending another message.');
      }

      if (response.status === 400) {
        throw new Error('Message is too long. Please keep your message shorter.');
      }

      console.log('API response status:', response.status);
      const data = await response.json();
      console.log('API response data:', data);
      
      if (!response.ok) {
        const errorMessage = data.error || 'Failed to generate response';
        throw new Error(errorMessage);
      }

      console.log('Saving assistant message...');
      // Save assistant message
      const { data: assistantMessage, error: assistantError } = await supabase
        .from('chat_messages')
        .insert([{
          session_id: sessionId,
          user_id: user.id,
          role: 'assistant',
          content: data.content,
          relevant_articles: relevantArticles?.map(article => article.id) || []
        }])
        .select()
        .single();

      if (assistantError) {
        console.error('Error saving assistant message:', assistantError);
        throw new Error(`Failed to save assistant message: ${assistantError.message}`);
      }

      if (assistantMessage) {
        console.log('Assistant message saved:', assistantMessage);
        setMessages(prev => [...prev, assistantMessage]);
      }

    } catch (error) {
      console.error('Detailed error in sendMessage:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again.';
      console.error('Setting error message:', errorMessage);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [user, isVerified]);

  const value = {
    messages,
    isLoading,
    error,
    user,
    isVerified,
    sendMessage,
    verifyEmail,
    confirmVerification
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
