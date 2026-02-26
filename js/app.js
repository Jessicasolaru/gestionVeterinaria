import { veterinarios } from "./data.js";

let veterinarioActual = null;

// DOM
const btnLogin = document.getElementById("btnLogin");
const mensajeLogin = document.getElementById("mensajeLogin");
const loginSection = document.getElementById("login-section");
const panelSection = document.getElementById("panel-section");

const btnAgregar = document.getElementById("btnAgregar");
const listaMascotas = document.getElementById("listaMascotas");
const mensajeMascota = document.getElementById("mensajeMascota");

const btnCerrarSesion = document.getElementById("btnCerrarSesion");

// LOGIN
btnLogin.addEventListener("click", () => {
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;

  const vetEncontrado = veterinarios.find((vet) =>
    vet.autenticar(usuario, contrasena),
  );

  if (vetEncontrado) {
    veterinarioActual = vetEncontrado;
    loginSection.classList.add("hidden");
    panelSection.classList.remove("hidden");
    mensajeLogin.textContent = "";
  } else {
    mensajeLogin.textContent = "Credenciales incorrectas ❌";
  }
});

// AGREGAR MASCOTA
btnAgregar.addEventListener("click", () => {
  const nombre = document.getElementById("nombreMascota").value;
  const tutor = document.getElementById("tutorMascota").value;
  const evolucion = document.getElementById("evolucionMascota").value;

  if (!nombre || !tutor || !evolucion) {
    mensajeMascota.textContent = "Todos los campos son obligatorios ⚠️";
    return;
  }

  veterinarioActual.agregarMascota(nombre, tutor, evolucion);
  actualizarLista();
  mensajeMascota.textContent = "Mascota agregada correctamente ✅";

  document.getElementById("nombreMascota").value = "";
  document.getElementById("tutorMascota").value = "";
  document.getElementById("evolucionMascota").value = "";
});

// ACTUALIZAR LISTA
const actualizarLista = () => {
  listaMascotas.innerHTML = "";

  veterinarioActual
    .obtenerMascotas()
    .forEach(({ nombre, tutor, evolucionMedica }) => {
      const li = document.createElement("li");
      li.innerHTML = `
            <strong>${nombre}</strong><br>
            Tutor: ${tutor}<br>
            Evolución: ${evolucionMedica}
        `;
      listaMascotas.appendChild(li);
    });
};

// CERRAR SESIÓN
btnCerrarSesion.addEventListener("click", () => {
  veterinarioActual = null;
  panelSection.classList.add("hidden");
  loginSection.classList.remove("hidden");
});
