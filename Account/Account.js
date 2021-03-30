export class Account {
  constructor(initialBalance, client, agency) {
    if (this.constructor == Account) {
      throw new Error("It is not possible to instantiate an Account object directly, because it is an abstract class.");
    }

    this._balance = initialBalance;
    this._client = client;
    this._agency = agency;
  }

  get client() {
    return this._client;
  }

  set client(newClient) {
    if (newClient instanceof Client) {
      this._client = newClient;
    }
  }

  deposit(value) {
    if (value <= 0) return;
    this._balance += value;
  }

  draw(value) {
    throw new Error("Account draw method is abstract.");
  }

  _draw(value, fee) {
    const drawnValue = value * fee;
    if (this._balance >= drawnValue) {
      this._balance -= drawnValue;
      return drawnValue;
    }
  }

  transfer(value, account) {
    this._draw(value);
    account._balance += value;
  }
}
