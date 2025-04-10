"use client";

import { useState, FormEvent } from 'react';
import { useChat } from '@/app/context/ChatContext';

const MAX_MESSAGE_LENGTH = 500; // Keep in sync with API limit

export default function ChatInput() {
  const [message, setMessage] = useState('');
  const { sendMessage, isLoading } = useChat();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    
    if (!message.trim() || isLoading) {
      console.log('Message empty or loading, skipping submit');
      return;
    }

    try {
      console.log('Sending message:', message.trim());
      await sendMessage(message.trim());
      console.log('Message sent successfully');
      setMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 py-2 px-3 text-sm rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
          disabled={isLoading}
          maxLength={MAX_MESSAGE_LENGTH}
        />
        <button
          type="submit"
          disabled={!message.trim() || isLoading}
          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </button>
        </div>
        <div className="flex justify-end">
          <span className={`text-xs ${
            message.length > MAX_MESSAGE_LENGTH * 0.8 
              ? 'text-red-500 dark:text-red-400' 
              : 'text-gray-500 dark:text-gray-400'
          }`}>
            {message.length}/{MAX_MESSAGE_LENGTH}
          </span>
        </div>
      </div>
    </form>
  );
}
