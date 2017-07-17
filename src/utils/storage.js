class Storage {
  constructor(key) {
    this.key = key;
  }

  clear() {
    try {
      sessionStorage.removeItem(this.key);
    } catch (e) {
      return e;
    }
    return true;
  }

  load() {
    try {
      const item = sessionStorage.getItem(this.key);
      const parsed = item && JSON.parse(item);
      if (parsed) {
        return parsed;
      }
    } catch (e) {
      return e;
    }

    return {};
  }

  save(payload) {
    try {
      sessionStorage.setItem(this.key, JSON.stringify(payload));
    } catch (e) {
      return e;
    }
    return true;
  }
}

export default Storage;
