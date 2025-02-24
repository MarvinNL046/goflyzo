import type { CacheHandler } from 'next/dist/server/lib/incremental-cache/index';

// Minimal implementation that satisfies the CacheHandler interface
export default class IncrementalCache implements CacheHandler {
  constructor() {
    // No initialization needed
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async get(cacheKey: string): Promise<any> {
    console.debug('Cache miss for key:', cacheKey);
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async set(pathname: string, data: any): Promise<void> {
    console.debug('Cache set for path:', pathname, 'with data:', data);
  }

  async revalidateTag(tag: string): Promise<void> {
    console.debug('Revalidating tag:', tag);
  }

  async lock(pathname: string): Promise<boolean> {
    console.debug('Acquiring lock for:', pathname);
    return true;
  }

  async unlock(pathname: string): Promise<void> {
    console.debug('Releasing lock for:', pathname);
  }

  resetRequestCache(): void {
    console.debug('Resetting request cache');
  }
}
