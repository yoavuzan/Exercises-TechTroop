const p1 = {
  name: "Yoav",
  age: 27,
  city: "Jerusalem",
};
const p2 = {
  name: "Yoav",
  age: 27,
  city: "Jerusalem",
};

if (p1.age === p2.age) {
  if (p1.city === p2.city) {
    console.log("Jill wanted to date Robert");
  } else {
    console.log("Jill wanted to date Robert, but couldn't");
  }
}
