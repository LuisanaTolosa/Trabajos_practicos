let ej1 = document.querySelector('#ej1')
let botonej1 = document.querySelector('#botonEj1')
let inputEj1 = document.querySelector('#inputEj1')
let edad = 15

botonej1.onclick = function () {
    edad = inputEj1.value
    if (edad >= 18) {
        ej1.textContent = 'sos mayor de edad'

    } else {
        ej1.textContent = 'sos menor de edad'
    }

}

let NombredeUsuario = document.querySelector('#inputEj2')
let botonNombre = document.querySelector('#botonEj2')
let parrafo2 = document.querySelector('#ej2')
botonNombre.onclick = function () {

    //botonNombre = 'resultado'
    if (NombredeUsuario.value == 'Nahuel') {
        parrafo2.textContent = 'Bienvenido Nahuel, ¿como estas?'
    } else {
        parrafo2.textContent = 'bienvenido usuario'
    }

}

/*
let NombreUsuario2 = document.querySelector('#NombreUsuario2')
let botonNombre = document.querySelector('#botonNombre')
botonNombre.onclick = function () {

    //botonNombre = 'resultado'
    if ((NombredeUsuario == "nahuel") || (NombredeUsuario == "marcos")) {
        botonNombre.textContent = "bienvenido" + NombredeUsuario + "¿como estas?"
    } else {
        botonNombre.textContent != "bienvenido usuario"
    }

}
*/