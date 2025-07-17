let meatArr = ["beef", "chicken"];
let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"];

let [rabbit, ...vegetables] = vegetableArr;

meatArr = [...meatArr, rabbit];

vegetableArr = vegetables;

console.log(vegetableArr);
console.log(meatArr);
