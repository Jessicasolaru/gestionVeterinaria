// import { Veterinario } from "../models/Veterinario.js";

//export const VETERINARIOS = [
//new Veterinario("admin", "1234", "Dr. Pelusa"),
//new Veterinario("sofia", "abcd", "Dra. Patitas"),
//];

import { Veterinario } from "../models/Veterinario.js";

// 1) Crear instancias de veterinarios
const admin = new Veterinario("admin", "1234", "Dr. Pelusa");
const sofia = new Veterinario("sofia", "abcd", "Dra. Patitas");

// 2) Cargar 2 pacientes para admin
admin.agregarMascota(
  "Augusto",
  "Jessica Solar",
  "Obesidad emocional: Gato muy obeso por comer demasiado paté, el tutor refiere 'solo le doy un poquito' 14 veces al día",
  "Gato Gris Europeo",
);
admin.agregarMascota(
  "Plim-Plim",
  "Pedro Rothen",
  "Gatunitis Crónica: Paciente solo responde a su nombre cuando hay comida involucrada",
  "Gato Naranjoso Europeo",
);

// 3) Cargar 2 pacientes para sofia
sofia.agregarMascota(
  "Sushi",
  "Paula Solar",
  "Síndrome de cola Descontrolada: movimiento helicoidal al escuchar la palabra 'Paseo'",
  "Shih-tzu",
);
sofia.agregarMascota(
  "Toby",
  "Marcos Diaz",
  "Hiperactividad Festiva Canina: Saltos olímpicos y giros sobre si mismo cuando llega visita a casa",
  "Beagle",
);

// 4) Exportar arreglo final
export const VETERINARIOS = [admin, sofia];
