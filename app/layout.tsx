import './globals.css';
import { Providers } from './providers';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TopBar from '@/components/common/TopBar';
import PreFooterBar from '@/components/common/PreFooterBar';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeToggle from '@/components/common/ThemeToggle';
import Script from 'next/script';

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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W99Q4S0HCZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W99Q4S0HCZ');
          `}
        </Script>
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
