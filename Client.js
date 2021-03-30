export class Client{
  get document() {
    return this.document;
  }

  constructor(name, document, password) {
    this._name = name;
    this._document = document;
    this._password = password;
  }
}
