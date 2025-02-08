import { ChatMessage } from '@/lib/types/chat';

interface ChatMessagesProps {
  messages: ChatMessage[];
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.role === 'user' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`max-w-[80%] rounded-lg p-4 ${
              message.role === 'user'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
            }`}
          >
            {/* Message Content */}
            <div className="prose dark:prose-invert max-w-none">
              <p className="whitespace-pre-wrap break-words">
                {message.content}
              </p>
            </div>

            {/* Timestamp */}
            <div className={`mt-1 text-xs ${
              message.role === 'user'
                ? 'text-blue-200'
                : 'text-gray-500 dark:text-gray-400'
            }`}>
              {new Date(message.created_at).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>

            {/* Relevant Articles */}
            {message.role === 'assistant' && message.relevant_articles.length > 0 && (
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Sources: {message.relevant_articles.length} articles referenced
              </div>
            )}
          </div>
        </div>
      ))}

      {messages.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
          <svg
            className="h-12 w-12 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <p className="text-lg font-medium">No messages yet</p>
          <p className="text-sm">Start a conversation with Kai</p>
        </div>
      )}
    </div>
  );
}
