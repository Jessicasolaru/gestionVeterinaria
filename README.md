# Gestion Veterinaria - Version 2

Proyecto Frontend del Modulo 4 (JavaScript) enfocado en Programacion Orientada a Objetos (POO), autenticacion basica y manipulacion del DOM.

## Descripcion
La aplicacion permite:
- Iniciar sesion como veterinario (sin backend).
- Registrar mascotas con nombre, raza, tutor y evolucion medica.
- Ver en pantalla la lista de pacientes del veterinario autenticado.
- Editar y eliminar mascotas registradas.
- Cerrar sesion y volver al login.

## Tecnologias
- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5

## Estructura principal
```text
index.html
assets/
  css/styles.css
js/
  main.js
  data/constants.js
  models/Mascota.js
  models/Veterinario.js
  utils/Auth.js
```

## Requisitos cumplidos (rubrica)
1. POO con clases `Mascota` y `Veterinario`.
2. Autenticacion basica con 2 instancias de `Veterinario` definidas en codigo.
3. Interfaz con formulario y lista dinamica de pacientes (actualizacion en tiempo real).
4. Almacenamiento en memoria durante la sesion (sin base de datos).
5. Uso de ES6+ (`class`, `let/const`, arrow functions, template literals, destructuring).

## Credenciales de prueba
- Usuario: `admin` | Contrasena: `1234`
- Usuario: `sofia` | Contrasena: `abcd`

## Como ejecutar
1. Clona o descarga el repositorio.
2. Abre la carpeta del proyecto en Visual Studio Code.
3. Abre `index.html` en tu navegador (o usa Live Server).

## Estado del proyecto
Version academica (V2) para practica de fundamentos de JavaScript orientado a objetos y DOM.
