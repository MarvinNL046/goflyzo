import { metadata } from './page';
import ChatSchema from './schema';

export { metadata };

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ChatSchema />
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              Travel Assistant
            </h1>
            <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 dark:text-green-200 dark:bg-green-900 rounded-full">
              Beta
            </span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Powered by Claude 3 Haiku
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          {children}
        </main>
      </div>
    </>
  );
}
