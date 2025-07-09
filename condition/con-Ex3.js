let temperature = 20;
let weather = "cloudy";
if (weather === "sunny") {
  if (temperature > 24) {
    console.log("Go to the beach");
  } else if (temperature > 14) {
    console.log("Go for a walk");
  } else {
    console.log("Stay inside and read");
  }
} else if (weather === "cloudy") {
  if (temperature > 21) {
    console.log("Go hiking");
  } else {
    console.log("Visit a museum");
  }
} else {
  console.log("Watch a movie indoors");
}
