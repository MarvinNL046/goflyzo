"use client";

import { useEffect, useRef } from 'react';

interface AffiliateWidgetProps {
  scriptContent: string;
  className?: string;
}

export default function AffiliateWidget({ scriptContent, className = '' }: AffiliateWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Extract the src from the script content
      const srcMatch = scriptContent.match(/src="([^"]+)"/);
      if (srcMatch && srcMatch[1]) {
        const script = document.createElement('script');
        script.src = srcMatch[1];
        script.async = true;
        script.charset = 'utf-8';
        containerRef.current.appendChild(script);

        return () => {
          if (script && script.parentNode) {
            script.parentNode.removeChild(script);
          }
        };
      }
    }
  }, [scriptContent]);

  return (
    <div ref={containerRef} className={`affiliate-widget ${className}`} />
  );
}
