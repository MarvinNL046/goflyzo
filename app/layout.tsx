import './globals.css';
import { Providers } from './providers';
import { ReactNode } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TopBar from '@/components/common/TopBar';
import PreFooterBar from '@/components/common/PreFooterBar';
import ThemeToggle from '@/components/common/ThemeToggle';

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
