let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6;

if (customerType === "VIP") {
  purchaseAmount *= 0.8;
} else if (customerType === "premium") {
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    purchaseAmount *= 0.85;
  } else {
    purchaseAmount *= 0.9;
  }
}else{
    if(purchaseAmount > 100){
        purchaseAmount *= 0.9;
    }else if (purchaseAmount > 50) {
        purchaseAmount *= 0.95;
    }
}
console.log(purchaseAmount)
