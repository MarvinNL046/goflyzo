"use client";

import { useState, useEffect } from 'react';
import { useChat } from '@/app/context/ChatContext';
import { KBArticle } from '@/lib/types/chat';
import { supabase } from '@/lib/supabase';

export default function ChatSidebar() {
  const { messages } = useChat();
  const [articles, setArticles] = useState<KBArticle[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRelevantArticles = async () => {
      const lastMessage = messages[messages.length - 1];
      if (!lastMessage?.relevant_articles.length) return;

      setIsLoading(true);
      try {
        const { data } = await supabase
          .from('kb_articles')
          .select('*')
          .in('id', lastMessage.relevant_articles);

        if (data) {
          setArticles(data);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRelevantArticles();
  }, [messages]);

  if (!articles.length && !isLoading) {
    return null;
  }

  return (
    <div className="w-80 border-l border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 overflow-y-auto">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Relevant Information
        </h3>

        {isLoading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {articles.map((article) => (
              <article
                key={article.id}
                className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm"
              >
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  {article.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                  {article.content}
                </p>
                {Object.entries(article.metadata).length > 0 && (
                  <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                    <dl className="text-xs text-gray-500 dark:text-gray-400">
                      {Object.entries(article.metadata).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <dt className="font-medium">{key}:</dt>
                          <dd>{String(value)}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
