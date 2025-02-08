"use client";

import { useEffect, useRef } from 'react';
import { useChat } from '@/app/context/ChatContext';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import ChatSidebar from './ChatSidebar';

export default function ChatInterface() {
  const { messages, isLoading, error } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
      <div className="flex flex-col flex-1 bg-white dark:bg-gray-900">
        {/* Chat Header */}
        <div className="border-b border-gray-200 dark:border-gray-700 p-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Chat with Kai
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Your friendly AI travel companion
          </p>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          <ChatMessages messages={messages} />
          <div ref={messagesEndRef} />
          
          {isLoading && (
            <div className="flex items-center justify-center py-4">
              <div className="animate-pulse flex space-x-4">
                <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-900 rounded-lg mt-4">
              <p className="text-red-800 dark:text-red-200 text-sm">
                {error}
              </p>
            </div>
          )}
        </div>

        {/* Chat Input */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          <ChatInput />
        </div>
      </div>

      {/* Sidebar */}
      <ChatSidebar />
    </div>
  );
}
