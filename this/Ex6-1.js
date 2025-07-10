const coffeeShop = {
  money: 100,
  buyBeans: function (numBeans) {
    if (this.money - numBeans > 0) {
      this.money -= this.drinkRequirements.price;
      this.beans += numBeans;
    } else {
      console.log("you don't have enough to buy beans");
    }
  },
  beans: 40,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 6, price: 4 },
    doubleShot: { beanRequirement: 7, price: 9 },
    frenchPress: { beanRequirement: 12, price: 11 },
  },

  makeDrink: function (drinkType) {
    // TODO: Finish this method

    if (this.drinkRequirements[drinkType]) {
      let beanRequirement = this.drinkRequirements[drinkType].beanRequirement;
      if (this.beans - beanRequirement > 0) {
        this.beans -= beanRequirement;
        console.log("have a good day");
      } else {
        this.buyBeans(beanRequirement);
      }
    } else {
      console.log("Sorry, we don't make filtered");
    }
  },
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
