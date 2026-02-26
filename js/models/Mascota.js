// Clase que representa una Mascota
export class Mascota {
  constructor(nombre, tutor, evolucionMedica) {
    this.nombre = nombre;
    this.tutor = tutor;
    this.evolucionMedica = evolucionMedica;
  }

  obtenerResumen() {
    return `${this.nombre} - Tutor: ${this.tutor}`;
  }
}
