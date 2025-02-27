'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { trackPageView } from '@/lib/analytics';

/**
 * Component that tracks page views in Next.js App Router
 * This component should be added to the layout.tsx file
 */
export default function AnalyticsTracker() {
  const pathname = usePathname();
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    // Skip during server-side rendering
    if (pathname === null) return;

    // Use the pathname for tracking
    // This avoids using useSearchParams() which requires Suspense
    setUrl(pathname);
  }, [pathname]);

  useEffect(() => {
    // Track the page view when URL changes
    if (url) {
      trackPageView(url);
    }
  }, [url]);

  // This component doesn't render anything
  return null;
}
