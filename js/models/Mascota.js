// Clase que representa una Mascota
export class Mascota {
  constructor(nombre, tutor, evolucionMedica, raza = "") {
    this.nombre = nombre;
    this.tutor = tutor;
    this.evolucionMedica = evolucionMedica;
    this.raza = raza;
  }

  obtenerResumen() {
    return `${this.nombre} - Tutor: ${this.tutor}`;
  }
}
