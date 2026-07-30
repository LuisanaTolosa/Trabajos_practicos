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
