import { CheckingAccount } from "./Account/CheckingAccount.js";
import { SavingsAccount } from "./Account/SavingsAccount.js";
import { Client } from "./Client.js";

// test client creation
const client1 = new Client("Camila", 12345670088, "password")

// test account creation and methods
// Error: It is not possible to instantiate an Account object directly, because it is an abstract class.
// const account1 = new Account(0, client1, 1001);

const account1 = new CheckingAccount(client1, 1001);
account1.deposit(1000);
// account1.draw(200);

const account2 = new CheckingAccount(client1, 1002);
account2.deposit(1000);
// account2.transfer(100, account1);

const savings = new SavingsAccount(client1, 1001);
savings.deposit(200);
savings.draw(10);
account2.transfer(100, savings);

console.log(savings);
console.log(account2);