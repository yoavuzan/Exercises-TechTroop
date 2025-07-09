let studentScores = [
  92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81,
];

console.log(
  studentScores.reduce((dic, score) => {
    if (score > 89) {
      dic["A"] = dic["A"] ? dic["A"] + 1 : 1;
    } else if (score > 79) {
      dic["B"] = dic["B"] ? dic["B"] + 1 : 1;
    } else if (score > 69) {
      dic["C"] = dic["C"] ? dic["C"] + 1 : 1;
    } else {
      dic["F"] = dic["F"] ? dic["F"] + 1 : 1;
    }
    return dic;
  }, {})
);
