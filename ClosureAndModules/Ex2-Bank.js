module.exports = function Bank() {
  let money = 500;
  function deposit(cash) {
    money += cash;
  }

  function showBalance() {
    return money;
  }
  return { deposit, showBalance };
}
