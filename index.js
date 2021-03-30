import { CheckingAccount } from "./Account/CheckingAccount.js";
import { SalaryAccount } from "./Account/SalaryAccount.js";
import { SavingsAccount } from "./Account/SavingsAccount.js";
import { Client } from "./Client.js";
import { Director } from "./Employee/Director.js";
import { Manager } from "./Employee/Manager.js";
import { AuthenticationSystem } from "./AuthenticationSystema.js";

// test client creation
const client1 = new Client("Holden", 12345670088, "password")

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

const salary = new SalaryAccount(client1, 1001);
salary.deposit(2000);
salary.draw(200);

// TEST EMPLOYEES
const director = new Director("Franny", 10000, 12345670088);
const manager = new Manager("Seymour", 7000, 12345670088);

director.registerPassword("abcde");
// const directorLoggedIn = director.authenticate("abcde");
// console.log(directorLoggedIn);

manager.registerPassword("abcde");
// const managerLoggedIn = manager.authenticate("123");
// console.log(managerLoggedIn);

const directorLoggedIn = AuthenticationSystem.login(director, "abcde");
const managerLoggedIn = AuthenticationSystem.login(manager, "123");

console.log(directorLoggedIn);
console.log(managerLoggedIn);
