import { Account } from "./Account.js";

export class CheckingAccount extends Account {
  constructor(client, agency) {
    super(0, client, agency);
  }

  draw(value) {
    let fee = 1.1;
    return super._draw(value, fee);
  }
}
