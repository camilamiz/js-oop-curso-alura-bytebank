import { Account } from "./Account.js";

export class SavingsAccount extends Account {
  constructor(client, agency) {
    super(0, client, agency);
  }

  draw(value) {
    let fee = 1.02;
    return super._draw(value, fee);
  }
}