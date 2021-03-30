import { Account } from "./Account.js";

export class SalaryAccount extends Account{
  constructor(client, agency) {
    super(0, client, agency);
  }

  draw(value) {
    let tax = 1.01;
    return super._draw(value, tax);
  }
}