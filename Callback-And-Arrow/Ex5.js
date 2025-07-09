const capitalize = (str) =>
  str[0].toUpperCase() + str.slice(1, str.length).toLowerCase();

console.log(capitalize("bOb")); // returns Bob
console.log(capitalize("TAYLOR")); // returns Taylor
console.log(capitalize("feliSHIA")); // returns Felishia
