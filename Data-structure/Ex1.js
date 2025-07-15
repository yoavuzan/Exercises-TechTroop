class UniqueArray {
  constructor() {
    this.index = 0;
    this.arr = {};
  }

  add(val) {
    if (!(val in this.arr)) {
      this.arr[val] = this.index;
      this.index += 1
    }
  }

  showAll() {
    console.log("[" + Object.keys(this.arr) + "]");
  }

  exists(val) {
     return val in this.arr;
  }

  get(index) {
    if (index < 0 || index >= this.index) {
      return -1;
    }

    for (let key in this.arr) {
      if (this.arr[key] === index) {
        return key;
      }
    }

    return -1;
  }
}
const uniqueStuff = new UniqueArray();
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
console.log(uniqueStuff.exists("toy")); //returns true
uniqueStuff.add("poster");
uniqueStuff.add("hydrogen");
console.log(uniqueStuff.get(2)); //prints "hydrogen"
