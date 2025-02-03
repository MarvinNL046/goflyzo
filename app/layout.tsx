import './globals.css';
import { Providers } from './providers';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TopBar from '@/components/common/TopBar';
import PreFooterBar from '@/components/common/PreFooterBar';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeToggle from '@/components/common/ThemeToggle';

export const metadata = {
  title: 'GoFlyzo - Your Travel Companion',
  description: 'Find the best travel deals, compare prices, and book your next adventure with GoFlyzo.',
  openGraph: {
    title: 'GoFlyzo - Your Travel Companion',
    description: 'Find the best travel deals, compare prices, and book your next adventure with GoFlyzo.',
    url: 'https://goflyzo.com',
    siteName: 'GoFlyzo',
    images: [
      {
        url: 'https://goflyzo.com/api/og?title=GoFlyzo&subtitle=Your+Travel+Companion',
        width: 1200,
        height: 630,
        alt: 'GoFlyzo - Your Travel Companion',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoFlyzo - Your Travel Companion',
    description: 'Find the best travel deals, compare prices, and book your next adventure with GoFlyzo.',
    images: ['https://goflyzo.com/api/og?title=GoFlyzo&subtitle=Your+Travel+Companion'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <div className="min-h-screen flex flex-col">
            <TopBar />
            <Header />
            <main className="flex-grow">{children}</main>
            <PreFooterBar />
            <Footer />
          </div>
          <ThemeToggle />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
