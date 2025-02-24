export default class IncrementalCache {
  constructor(options) {
    this.options = options;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async get(_key) {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async set(_key, _data, _tags) {
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async revalidateTag(_tag) {
    return;
  }

  async lock() {
    return;
  }

  async unlock() {
    return;
  }
}
