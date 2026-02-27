import { VETERINARIOS } from "../data/constants.js";

export class Auth {
  static login(usuario, contrasena) {
    return VETERINARIOS.find((vet) => vet.autenticar(usuario, contrasena));
  }
}
