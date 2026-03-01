import { Mascota } from "./Mascota.js";

// Clase Veterinario
export class Veterinario {
  constructor(nombreUsuario, contrasena, nombreSesion) {
    this.nombreUsuario = nombreUsuario;
    this.contrasena = contrasena;
    this.nombreSesion = nombreSesion; // "Dr. Pelusa"
    this.mascotas = [];
  }

  agregarMascota(nombre, tutor, evolucionMedica, raza = "") {
    const nuevaMascota = new Mascota(nombre, tutor, evolucionMedica, raza);
    this.mascotas.push(nuevaMascota);
  }

  obtenerMascotas() {
    return this.mascotas;
  }

  autenticar(usuario, contrasena) {
    return this.nombreUsuario === usuario && this.contrasena === contrasena;
  }
}
