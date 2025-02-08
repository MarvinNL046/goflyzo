import { Metadata } from 'next';
import { ChatProvider } from '../context/ChatContext';
import ChatInterface from '@/components/chat/ChatInterface';

export const metadata: Metadata = {
  title: 'Chat with Kai | GoFlyzo',
  description: 'Get personalized travel assistance and recommendations from Kai, your friendly AI travel companion.',
  openGraph: {
    title: 'Chat with Kai | GoFlyzo',
    description: 'Get personalized travel assistance and recommendations from Kai, your friendly AI travel companion.',
    url: 'https://goflyzo.com/chat',
    siteName: 'GoFlyzo',
    images: [
      {
        url: 'https://goflyzo.com/api/og?title=Chat+with+Kai&subtitle=Your+Friendly+Travel+Companion',
        width: 1200,
        height: 630,
        alt: 'Chat with Kai - Your Travel Companion',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ChatPage() {
  return (
    <ChatProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <ChatInterface />
      </div>
    </ChatProvider>
  );
}
