import './globals.css';
import { Providers } from './providers';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TopBar from '@/components/common/TopBar';
import PreFooterBar from '@/components/common/PreFooterBar';
import ThemeToggle from '@/components/common/ThemeToggle';
import AnalyticsTracker from '@/components/common/AnalyticsTracker';
import Script from 'next/script';

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
        {/* Google Tag Manager - placed as high as possible in head */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T5M96XZT');
            `
          }}
        />
        
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
        {/* Google Tag Manager (noscript) - immediately after opening body tag */}
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
          <AnalyticsTracker />
        </Providers>
      </body>
    </html>
  );
}
