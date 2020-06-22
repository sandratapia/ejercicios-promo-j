'use strict';
const control = document.querySelector(".control")
let userName = prompt("Introduce tu nombre");
if (userName==="Sandra" || userName ==="Sara"){
    control.innerHTML = "Bienvenida Adalaber"
}else{
    control.innerHTML = "Lo sentimos, pero el usuario que has introducido no está registrado"
}