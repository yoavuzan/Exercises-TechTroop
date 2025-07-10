const Bank = require('./Ex2-Bank')
const bank = Bank()
bank.deposit(200)
bank.deposit(250)
console.log(bank.showBalance()) //should print 950