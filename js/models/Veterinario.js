import { Mascota } from "./Mascota.js";

// Clase Veterinario
export class Veterinario {
  constructor(nombreUsuario, contrasena) {
    this.nombreUsuario = nombreUsuario;
    this.contrasena = contrasena;
    this.mascotas = [];
  }

  agregarMascota(nombre, tutor, evolucionMedica) {
    const nuevaMascota = new Mascota(nombre, tutor, evolucionMedica);
    this.mascotas.push(nuevaMascota);
  }

  obtenerMascotas() {
    return this.mascotas;
  }

  autenticar(usuario, contrasena) {
    return this.nombreUsuario === usuario && this.contrasena === contrasena;
  }
}
