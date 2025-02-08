"use client";

import { useState } from 'react';
import { useChat } from '@/app/context/ChatContext';
import ChatInput from '../chat/ChatInput';
import ChatMessages from '../chat/ChatMessages';
import { MessageCircle, X, Minus, Maximize2 } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const { messages, isLoading, error } = useChat();

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg flex items-center gap-2"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="text-sm font-medium">Chat with Kai</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`bg-white dark:bg-gray-900 rounded-lg shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
            isMinimized ? 'h-14 w-80' : 'h-[500px] w-[350px]'
          }`}
        >
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold">Chat with Kai</h3>
            <div className="flex items-center gap-2">
              <button onClick={toggleMinimize} className="hover:text-blue-100">
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minus className="h-4 w-4" />}
              </button>
              <button onClick={toggleChat} className="hover:text-blue-100">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Chat Content */}
          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="h-[380px] overflow-y-auto p-4">
                <ChatMessages messages={messages} />
                
                {isLoading && (
                  <div className="flex items-center justify-center py-2">
                    <div className="animate-pulse flex space-x-2">
                      <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                      <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                      <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="p-2 bg-red-50 dark:bg-red-900 rounded-lg mt-2">
                    <p className="text-red-800 dark:text-red-200 text-xs">
                      {error}
                    </p>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="border-t border-gray-200 dark:border-gray-700 p-3">
                <ChatInput />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
