// Create a BankAccount class with the following:
// - Properties: accountNumber, balance
// - Methods: 
//   - deposit(amount): Adds the amount to the balance.
//   - withdraw(amount): Deducts the amount from the balance if there are sufficient funds.
// Add a static method compareAccounts(account1, account2) that compares two BankAccount objects and returns the account with the higher balance.

class BankAccount {
  #accountNumber 
  #balance

  constructor(accountNumber, balance){
    this.#accountNumber = accountNumber
    this.#balance = balance
  }

  deposit(amount){
    return this.#balance += amount
  }

  withdraw(amount){
    return this.#balance -= amount
  }


get accountNumber() {
    return this.#accountNumber;
  }

  get balance() {
    return this.#balance;
  }

  static compareAccounts(account1, account2){
    if(account1.balance > account2.balance){
      return account1;
    } else {
      return account2;
    }
  }

}


// TEST CASE / DRIVER CODE
const account1 = new BankAccount(123456, 500);
const account2 = new BankAccount(654321, 1000);
account1.deposit(300); // account1 becomes 800
account2.withdraw(300); // account2 becomes 700
const richerAccount = BankAccount.compareAccounts(account1, account2);
console.log(`Account ${richerAccount.accountNumber} has the higher balance.`);
// Expected output: "Account 123456 has the higher balance."