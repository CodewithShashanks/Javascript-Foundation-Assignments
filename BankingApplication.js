
// 17. Build a banking application
// A banking application needs to manage customer accounts and transactions. The user detail is stored in an
// object with a keys name and balance. Write functions using object methods to update a customer's account
// balance based on a deposit or withdrawal.


// Define a customer account object
const customerAccount = {
    name: "John Doe",
    balance: 1000,

    // Method to deposit funds
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. Current balance: $${this.balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    },

    // Method to withdraw funds
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. Current balance: $${this.balance}`);
        } else {
            console.log("Invalid withdrawal amount or insufficient funds.");
        }
    },

    // Method to get current balance
    getBalance() {
        console.log(`Current balance for ${this.name}: $${this.balance}`);
    },
};

// Example usage:
customerAccount.deposit(10000); // Deposited $500. Current balance: $1500
customerAccount.withdraw(200); // Withdrawn $200. Current balance: $1300
customerAccount.getBalance(); // Current balance for John Doe: $1300
