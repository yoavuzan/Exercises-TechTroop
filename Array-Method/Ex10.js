let cartItems = [
  { name: "T-shirt", price: 19.99, category: "clothing", quantity: 2 },
  { name: "Laptop", price: 1299.99, category: "electronics", quantity: 1 },
  { name: "Coffee Beans", price: 12.99, category: "food", quantity: 3 },
  { name: "Headphones", price: 89.99, category: "electronics", quantity: 1 },
  { name: "Jeans", price: 59.99, category: "clothing", quantity: 1 },
];

let taxRates = {
  clothing: 0.08, // 8% tax
  electronics: 0.1, // 10% tax
  food: 0.05, // 5% tax
};

console.log(
  cartItems.reduce((sum, item) =>  sum + item.price * (taxRates[item.category] + 1), 0)
);
