class UniqueArray {
  constructor() {
    this.items = [];
  }

  isEqual(a, b) {
    if (typeof a === 'object' && typeof b === 'object') {
      return JSON.stringify(a) === JSON.stringify(b);
    }
    return a === b;
  }

  exists(val) {
    for (let item of this.items) {
      if (this.isEqual(item, val)) {
        return true;
      }
    }
    return false;
  }

  add(val) {
    if (!this.exists(val)) {
      this.items.push(val);
    }
  }

  get(index) {
    if (index < 0 || index >= this.items.length) {
      return -1;
    }
    return this.items[index];
  }

  showAll() {
    console.log(this.items);
  }
}