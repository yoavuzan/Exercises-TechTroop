import promptSync from "prompt-sync";
const prompt = promptSync();

class Bank {
  constructor() {
    console.log("=== Banking System ===");
    this.balance = 0;
  }

  Balance() {
    console.log("Initial balance:", this.balance);
  }

  Deposit() {
    let amount;
    do {
      amount = parseFloat(prompt("Enter amount to deposit: "));
    } while (amount <= 0 || isNaN(amount));
    this.balance += amount;
  }

  Withdraw() {
    let amount;
    do {
      amount = parseFloat(prompt("Enter amount to Withdraw: "));
    } while (amount <= 0 || isNaN(amount));
    this.balance -= amount;
  }
  menu() {
    console.log("1) Check Balance");
    console.log("2) Deposit");
    console.log("3) Withdraw");
    console.log("4) Exit");
  }
}

const bank = new Bank();
bank.menu();
let choose = '0'

while (choose != 4) {
choose = prompt("Choose option (1-4):");
  switch (choose) {
    case "1":
      bank.Balance();
      break;
    case "2":
      bank.Deposit();
      break;
    case "3":
      bank.Withdraw();
      break;
    case "4":
      console.log("hope to see you again !")
      break;
    default:
        console.log("wrong input plese try again")    
  }
}