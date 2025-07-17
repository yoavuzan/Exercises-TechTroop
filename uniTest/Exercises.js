class Exercises {
  isEven(n) {
    return n % 2 == 0 ? true : false;
  }

  removeAtLeastOne(arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
    arr.splice(0, numItemsToRemove);
    return arr;
  }

  simplify(str) {
    let symbols = ["!", "#", ".", ",", "'"];
    return str
      .split("")
      .filter((c) => symbols.indexOf(c) == -1)
      .join("");
  }

  validate(boolArr) {
    if(boolArr.length==0){
      throw { error: "Need at least one boolean" };
    }
    const counter = boolArr.reduce((acc, val) => {
      if (typeof val !== "boolean") {
        throw { error: "Need at least one boolean" };
      }
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
    return counter[true] > counter[false]; 
  }
}
module.exports = Exercises;
