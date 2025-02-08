"use client";

import { FC } from 'react';
import { useRouter } from 'next/navigation';

const ChatCTA: FC = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/chat')}
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 z-50"
    >
      <svg 
        className="h-5 w-5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
        />
      </svg>
      <span>Chat with Kai</span>
    </button>
  );
};

export default ChatCTA;
