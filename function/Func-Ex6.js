function getArmstrongNumbers() {
  for (let num = 100; num < 1000; num++) {
    let sum = 0;
    let temp = num;

    while (temp > 0) {
      sum += ((temp % 10) ** 3);
      temp = Math.floor(temp / 10);
    }
    
    if (sum === num) {
      console.log(sum);
    }
  }
}
getArmstrongNumbers();
