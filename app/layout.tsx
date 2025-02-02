import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import TopBar from '../components/common/TopBar';
import PreFooterBar from '../components/common/PreFooterBar';

export const metadata: Metadata = {
  title: 'GoFlyzo - Your Travel Companion',
  description: 'Find the best deals on hotels, flights, eSIMs, and more for your next adventure.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <TopBar />
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <PreFooterBar />
          <Footer />
        </div>
      </body>
    </html>
  );
}
