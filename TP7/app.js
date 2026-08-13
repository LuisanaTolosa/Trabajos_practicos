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


let NombredeUsuario = document.querySelector ('#NombreUsuario')
let botonNombre = document.querySelector ('#botonNombre')
botonNombre.onclick = function (){

//botonNombre = 'resultado'
if (NombredeUsuario == 'Nahuel'){ 
    botonNombre.textContent = 'Bienvenido Nahuel, ¿como estas?'
} else{
    botonNombre.textContent !='bienvenido usuario'
}

}
let NombredeUsuario = document.querySelector ('#NombreUsuario')
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



let edad = document.querySelector ('edad')
let botonedad = document.querySelector ('botonedad')
botonedad.onclick = function (){

    
}