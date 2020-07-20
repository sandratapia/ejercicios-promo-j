'use strict';
const human = document.querySelector(".human")
let ageDog = Number(prompt("Introduce la edad de tu perro"));

if (ageDog===1) {
    human.innerHTML="Tu perro tiene 15 años humanos.";
} else if (ageDog===2) {
    human.innerHTML="Tu perro tiene 24 años humanos.";
} else if(ageDog>=3){
    let calculate=15+9+((ageDog-2)*5)
    human.innerHTML="Tu perro tiene " + calculate + " años humanos.";
}else{
    human.innerHTML="Lo sentimos, el conversor no te entiende :(";
}
