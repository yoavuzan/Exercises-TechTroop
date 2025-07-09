const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: false, // choose one
  fridge: {
    price: 500,
    works: true, // choose one
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "radish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 },
    ],
  },
};

const hasOven = kitchen.hasOven;
const works = kitchen.fridge.works;
const price = kitchen.fridge.price;
const radish = kitchen.fridge.items.find((item) => item.name === "radish");
const daysExpired = date - radish.expiryDate;
const repairCost = price / 2;

if (hasOven && works) {
  console.log(`${kitchen.owner}'s ${radish.name} expired ${daysExpired} day ago. Weird, considering her fridge works. 
        Luckily, she has an oven to cook the ${radish.name} in.`);
} else if (!hasOven && works) {
  console.log(`${kitchen.owner}'s ${radish.name} expired ${daysExpired} day ago. Weird, considering her fridge works. 
        Too bad she doesn't have an oven to cook the ${radish.name} in.`);
} else if (hasOven && !works) {
  console.log(`${kitchen.owner}'s ${radish.name} expired ${daysExpired} day ago. 
        Probably because her fridge doesn't work. Luckily, she has an oven to cook the ${radish.name} in. And she'll have to pay ${repairCost} to fix the fridge.`);
} else {
  console.log(`${kitchen.owner}'s ${radish.name} expired ${daysExpired} day ago. 
        Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the ${radish.name} in. And she'll have to pay ${repairCost} to fix the fridge.`);
}
