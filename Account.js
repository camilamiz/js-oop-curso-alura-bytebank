export class Account {
  constructor(initialBalance, client, agency) {
    this._balance = initialBalance;
    this._client = client;
    this._agency = agency;
  }

  deposit(value) {
    this._balance += value;
  }
}
