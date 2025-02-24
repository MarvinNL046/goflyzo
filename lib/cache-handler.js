const cache = new Map();

export default class IncrementalCache {
  constructor(options) {
    this.options = options;
    this.revalidatedTags = new Set();
    this.locks = new Map();
  }

  async get(key) {
    return cache.get(key) || null;
  }

  async set(key, data, tags = []) {
    if (!key || !data) return;
    
    cache.set(key, {
      value: data,
      tags: new Set(tags),
      lastModified: Date.now(),
    });
  }

  async revalidateTag(tag) {
    if (!tag) return;
    this.revalidatedTags.add(tag);
    
    // Clear entries with this tag
    for (const [key, entry] of cache.entries()) {
      if (entry.tags?.has(tag)) {
        cache.delete(key);
      }
    }
  }

  async lock(key) {
    if (!key) return;
    
    if (this.locks.has(key)) {
      return false;
    }
    
    this.locks.set(key, Date.now());
    return true;
  }

  async unlock(key) {
    if (!key) return;
    this.locks.delete(key);
  }
}
