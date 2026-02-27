import { Auth } from "./utils/Auth.js";

let veterinarioActual = null;

// =====================
// DOM
// =====================
const btnLogin = document.getElementById("btnLogin");
const mensajeLogin = document.getElementById("mensajeLogin");
const loginSection = document.getElementById("login-section");
const panelSection = document.getElementById("panel-section");

const btnAgregar = document.getElementById("btnAgregar");
const listaMascotas = document.getElementById("listaMascotas");
const mensajeMascota = document.getElementById("mensajeMascota");

const btnCerrarSesion = document.getElementById("btnCerrarSesion");

// =====================
// LOGIN
// =====================
btnLogin.addEventListener("click", () => {
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;

  if (!usuario || !contrasena) {
    mensajeLogin.textContent = "Todos los campos son obligatorios";
    return;
  }

  const veterinario = Auth.login(usuario, contrasena);

  if (veterinario) {
    veterinarioActual = veterinario;

    loginSection.classList.add("d-none");
    panelSection.classList.remove("d-none");
    btnCerrarSesion.classList.remove("d-none");

    mensajeLogin.textContent = "";
  } else {
    mensajeLogin.textContent = "Credenciales incorrectas";
  }
});

// =====================
// AGREGAR MASCOTA
// =====================
btnAgregar.addEventListener("click", () => {
  if (!veterinarioActual) return;

  const nombre = document.getElementById("nombreMascota").value;
  const tutor = document.getElementById("tutorMascota").value;
  const evolucion = document.getElementById("evolucionMascota").value;
  const raza = document.getElementById("razaMascota").value;

  if (!nombre || !raza || !tutor || !evolucion) {
    mensajeMascota.textContent = "Todos los campos son obligatorios";
    return;
  }

  veterinarioActual.agregarMascota(nombre, tutor, evolucion, raza);
  actualizarLista();

  mensajeMascota.textContent = "Mascota agregada correctamente";

  document.getElementById("nombreMascota").value = "";
  document.getElementById("razaMascota").value = "";
  document.getElementById("tutorMascota").value = "";
  document.getElementById("evolucionMascota").value = "";
});

// =====================
// ACTUALIZAR LISTA
// =====================
const actualizarLista = () => {
  listaMascotas.innerHTML = "";

  veterinarioActual
    .obtenerMascotas()
    .forEach(({ nombre, raza, tutor, evolucionMedica }, index) => {
      const col = document.createElement("div");
      col.className = "col-md-4";

      col.innerHTML = `
        <div class="card shadow-sm h-100 mascota-card border-0 rounded-4">
          <div class="card-body">
            <h5 class="card-title fw-bold">🐾 ${nombre}</h5>
            <p><strong>Raza:</strong> ${raza}</p>
            <p><strong>Tutor:</strong> ${tutor}</p>
            <p class="text-muted small">${evolucionMedica}</p>

            <div class="d-flex justify-content-between mt-3">
              <button class="btn btn-warning btn-sm btnEditar" data-index="${index}">
                Editar
              </button>
              <button class="btn btn-danger btn-sm btnEliminar" data-index="${index}">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      `;

      listaMascotas.appendChild(col);
    });

  activarEventos();
};

const activarEventos = () => {
  // ELIMINAR
  document.querySelectorAll(".btnEliminar").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;

      if (confirm("¿Seguro que deseas eliminar esta mascota?")) {
        veterinarioActual.mascotas.splice(index, 1);
        actualizarLista();
      }
    });
  });

  // EDITAR
  document.querySelectorAll(".btnEditar").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      const mascota = veterinarioActual.mascotas[index];

      document.getElementById("nombreMascota").value = mascota.nombre;
      document.getElementById("razaMascota").value = mascota.raza;
      document.getElementById("tutorMascota").value = mascota.tutor;
      document.getElementById("evolucionMascota").value =
        mascota.evolucionMedica;

      veterinarioActual.mascotas.splice(index, 1);
      actualizarLista();
    });
  });
};

// =====================
// CERRAR SESIÓN
// =====================
btnCerrarSesion.addEventListener("click", () => {
  veterinarioActual = null;

  panelSection.classList.add("d-none");
  loginSection.classList.remove("d-none");
  btnCerrarSesion.classList.add("d-none");

  listaMascotas.innerHTML = "";
});

// =====================
// ESTADO INICIAL
// =====================
document.addEventListener("DOMContentLoaded", () => {
  panelSection.classList.add("d-none");
  loginSection.classList.remove("d-none");
  btnCerrarSesion.classList.add("d-none");
});
