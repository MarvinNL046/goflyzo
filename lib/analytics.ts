/**
 * Analytics utility functions for tracking in Next.js
 */

/**
 * Track a page view in Google Tag Manager
 * This should be called on route changes in Next.js
 * 
 * @param url The URL to track
 */
export const trackPageView = (url: string): void => {
  // Skip during server-side rendering
  if (typeof window === 'undefined') return;

  // Push the page view event to the dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};

// Define the DataLayer item type
interface DataLayerItem {
  event?: string;
  page?: string;
  [key: string]: unknown;
}

/**
 * Track a custom event in Google Tag Manager
 * 
 * @param eventName The name of the event
 * @param eventParams Additional parameters for the event
 */
export const trackEvent = (eventName: string, eventParams: Record<string, unknown> = {}): void => {
  // Skip during server-side rendering
  if (typeof window === 'undefined') return;

  // Push the custom event to the dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventParams,
  });
};

// Add TypeScript interface for the global window object
declare global {
  interface Window {
    dataLayer: DataLayerItem[];
  }
}
