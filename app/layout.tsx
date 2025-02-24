import './globals.css';
import { Providers } from './providers';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TopBar from '@/components/common/TopBar';
import PreFooterBar from '@/components/common/PreFooterBar';
import ThemeToggle from '@/components/common/ThemeToggle';

export const metadata: Metadata = {
  metadataBase: new URL('https://goflyzo.com'),
  title: {
    default: 'GoFlyzo - Your Travel Companion',
    template: '%s | GoFlyzo'
  },
  description: 'Find the best travel deals, hotels, flights, and local guides for your next adventure.',
  openGraph: {
    type: 'website',
    siteName: 'GoFlyzo',
    title: 'GoFlyzo - Your Travel Companion',
    description: 'Find the best travel deals, hotels, flights, and local guides for your next adventure.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoFlyzo - Your Travel Companion',
    description: 'Find the best travel deals, hotels, flights, and local guides for your next adventure.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Resource hints for external domains */}
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://www.googletagmanager.com"
        />
        <link
          rel="dns-prefetch"
          href="https://www.google-analytics.com"
        />
      </head>
      <body className="antialiased">
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-T5M96XZT"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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
      </body>
    </html>
  );
}
