import { Account } from "./Account/Account.js";
import { Client } from "./Client.js";

const client1 = new Client("Camila", 12345670088, "password")

console.log(client1);

const account1 = new Account(0, client1, 1001);
account1.deposit(1000);

const account2 = new Account(0, client1, 1002);
account2.deposit(1000);
account2.transfer(100, account1);

console.log(account1);
console.log(account2);