export class AuthenticationSystem {
  static login(object, password) {
    if (AuthenticationSystem.isAuthenticable(object)) {
      return object.authenticate(password);
    }
  }

  static isAuthenticable(object) {
    return "authenticate" in object &&
    object.authenticate instanceof Function;
  }
}
