let year = 2024;
// Your conditional code here
// Examples: 2024 = leap, 1900 = not leap, 2000 = leap, 2023 = not leap
years = [2024, 1900, 2000, 2023];
for (let y of years) {
  if (y % 4 === 0) {
    if (y % 100 === 0) {
      if (y % 400 !== 0) {
        console.log("It is'nt a Leap Year!");
        continue; //return;
      } 
    }
    console.log("It is a Leap Year!");
  } else {
    console.log("It is'nt a Leap Year!");
  }
}
