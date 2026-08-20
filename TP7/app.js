let ej1 = document.querySelector ('#ej1')
let botonej1 = document.querySelector ('#botonej1')
let edad = 15
botonej1.onclick = function (){
    //ej1.textContent = 'resultado'
    if (edad >= 18){
        ej1.textContent= 'sos mayor de edad'
    } else { 
        ej1.textContent = 'sos menor de edad'
    }

}


let NombredeUsuario = document.querySelector ('#NombredeUsuario')
let botonNombre = document.querySelector ('#botonNombre')
botonNombre.onclick = function (){

//botonNombre = 'resultado'
if (NombredeUsuario == 'Nahuel'){ 
    botonNombre.textContent = 'Bienvenido Nahuel, ¿como estas?'
} else{
    botonNombre.textContent !='bienvenido usuario'
}

}
let NombreUsuario2 = document.querySelector ('#NombreUsuario2')
let botonNombre = document.querySelector ('#botonNombre')
botonNombre.onclick = function (){

//botonNombre = 'resultado'
if ((NombredeUsuario == "nahuel") || (NombredeUsuario == "marcos")){ 
    botonNombre.textContent = "bienvenido" + NombredeUsuario + "¿como estas?"
} else{
    botonNombre.textContent !="bienvenido usuario"
}

}



let numero = document.querySelector ('numero pnc')
let botonnombre = document.querySelector ('botonnumero')
botonnombre.onclick = function (){
     
    if ( numero > 0 ) {
    botonnombre.textContent = 'el numero es positivo'
  }else if( numero < 0){
      
      botonnombre.textContent = 'el numero es negativo'
  } else {
      
      botonnombre.textContent = 'el numero es cero'
  }

   
}



let Edad = document.querySelector ('#Edad')
let botonedad = document.querySelector ('#botonedad')
botonedad.onclick = function (){
if ((Edad >= 6) && (Edad<= 11)) {
    Edad.textContent = "La edad corresponde a un niño"
} else if (( Edad >=12) && (Edad <=18)) {
Edad.textContent = "la edad corresponde a un adolescente"
} else if ((Edad >= 19) && (Edad <=26)){
    Edad.textContent = "la edad corresponde a un adulto"
} else if (Edad >=60){
    Edad.textContent = "la edad corresponde a un anciano"

}

    
}


let eje7 = document.querySelector ("#eje7")
let botoneje7 = document.querySelector ("#botoneje7")
let contrasenia = "123456"
botoneje7.onclick = function () {
if (contasenia == "secreto"){
    eje7.textContent = "acceso consedido"
} else {
    eje7.textContent = "acceso directo"
}
}