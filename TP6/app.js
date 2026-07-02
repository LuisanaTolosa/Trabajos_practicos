let body = document.querySelector ('body')
let parrafo = document.querySelector ('p')
let boton1 = document.querySelector ('#boton1')
let boton2 = document.querySelector ('#boton2')
let boton3 = document.querySelector ('#boton3')
let boton4 = document.querySelector ('#boton4')
let boton5 = document.querySelector ('#boton5')
let boton6 = document.querySelector ('#boton6')

boton1.onclick = function (){
parrafo.style.backgroundColor = 'blue'
}
boton2.onclick = function () {
    parrafo.textContent = 'cambio'
}
boton3.onclick = function () {
    parrafo.style.color = 'yellow'
}
boton4.onclick = function () {
parrafo.style.fontFamily = 'IMPACT'
}
boton5.onclick = function () {
    
}
